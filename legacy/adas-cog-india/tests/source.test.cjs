const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
assert.equal(scripts.length, 1, 'Expected one inline application script');
const source = scripts[0][1];

function createApp() {
  const nodes = new Map();
  const document = {
    getElementById(id) {
      if (!nodes.has(id)) {
        nodes.set(id, {
          value: '', checked: false, disabled: true, style: {}, innerHTML: '',
          textContent: '', classList: { add() {}, remove() {}, toggle() {} },
          querySelectorAll() { return []; },
        });
      }
      return nodes.get(id);
    },
    querySelectorAll() { return []; },
    addEventListener() {},
  };
  const requests = [];
  const context = vm.createContext({
    document,
    console,
    setTimeout() {}, // Do not initialize a real drawing canvas under the DOM stub.
    FormData: class { append() {} },
    fetch(url, options) {
      requests.push({ url, options });
      return Promise.resolve({ ok: false, status: 405 });
    },
  });
  new vm.Script(source, { filename: 'index.html:inline-script' }).runInContext(context);
  return {
    context, document, requests,
    evaluate(code) { return vm.runInContext(code, context); },
  };
}

test('HTML is complete and inline JavaScript parses', () => {
  assert.match(html, /<!DOCTYPE html>/i);
  assert.match(html, /<title>ADAS-Cog India<\/title>/);
  assert.match(html.trim(), /<\/html>$/i);
  assert.doesNotThrow(() => new vm.Script(source));
});

test('Nine language options include Gujarati', () => {
  const options = html.match(/<select id="pt-lang">([\s\S]*?)<\/select>/)[1];
  const codes = [...options.matchAll(/<option value="([a-z]+)">/g)].map(m => m[1]);
  assert.equal(codes.length, 9);
  assert.ok(codes.includes('gu'));
  const app = createApp();
  for (const code of codes) {
    app.evaluate(`S.lang = ${JSON.stringify(code)}; S.wordList = 'indian';`);
    assert.equal(app.evaluate('getWords().length'), 10, code);
    assert.equal(app.evaluate('getDist().length'), 10, code);
    assert.equal(app.evaluate('(CMD[S.lang] || CMD.en).length'), 5, code);
    assert.equal(app.evaluate('(ORIENT[S.lang] || ORIENT.en).length'), 8, code);
  }
});

test('Eleven assessment screens and the summary render under a minimal DOM stub', () => {
  const app = createApp();
  assert.equal(app.evaluate('META.length'), 12);
  app.evaluate(`
    S.patient = { name: 'Fictional demo', age: '70', sex: 'female', city: 'Demo city',
      dx: 'suspected', doc: 'Demo clinician' };
    S.recogList = ['Tulsi']; S.recogOriginals = ['Tulsi'];
  `);
  for (let i = 0; i < 12; i += 1) {
    app.evaluate(`S.step = ${i}; renderStep();`);
    assert.ok(app.document.getElementById('step-content').innerHTML.length > 0);
  }
  assert.equal(app.requests.length, 1);
  assert.equal(app.requests[0].url, '/');
  assert.equal(app.requests[0].options.method, 'POST');
});

test('Both consent fields are required by the existing button gating', () => {
  const app = createApp();
  app.evaluate('checkReady()');
  assert.equal(app.document.getElementById('begin-btn').disabled, true);
  app.document.getElementById('consent-check').checked = true;
  app.evaluate('checkReady()');
  assert.equal(app.document.getElementById('begin-btn').disabled, true);
  app.document.getElementById('consent-check2').checked = true;
  app.evaluate('checkReady()');
  assert.equal(app.document.getElementById('begin-btn').disabled, false);
});

test('Existing calculation behavior: unanswered inputs count as zero errors', () => {
  const app = createApp();
  assert.equal(app.evaluate('calc().total'), 0);
});

test('Known scoring inconsistency: implemented maximum is 85, not displayed 70', () => {
  const app = createApp();
  app.evaluate(`
    S.scores = { recall: 10, naming: Array(12).fill(0), commands: Array(5).fill(0),
      praxis: 5, ideational: Array(5).fill(0), orientation: Array(8).fill(0),
      instructions: 5, spoken: 5, wordfind: 5, comprehension: 5 };
    S.recogErrors = 20;
  `);
  assert.equal(app.evaluate('calc().total'), 85);
  assert.match(html, /Total ADAS-Cog score out of 70/);
});

// These checks are not clinical validation or a real-browser/end-to-end test.
