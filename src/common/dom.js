export const $ = (selector, root = document) => root.querySelector(selector);
export function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === 'text') node.textContent = value;
    else if (key === 'class') node.className = value;
    else if (key.startsWith('on') && typeof value === 'function') node.addEventListener(key.slice(2), value);
    else if (value !== null && value !== undefined) node.setAttribute(key, String(value));
  }
  for (const child of children) node.append(child instanceof Node ? child : document.createTextNode(String(child)));
  return node;
}
export function table(headers, rows) {
  return el('table', {}, [el('thead', {}, [el('tr', {}, headers.map(h => el('th', {scope:'col',text:h})))]),
    el('tbody', {}, rows.map(row => el('tr', {}, row.map(cell => el('td', {text:cell ?? '—'})))))]);
}
export function setStatus(text, kind = 'info') { const node = $('#status'); node.textContent = text; node.dataset.kind = kind; }
export function field(label, input) { return el('label', {class:'field'}, [el('span',{text:label}),input]); }
export function option(value, text) { return el('option', {value,text}); }
export function panel(title, children) { return el('section', {class:'panel'}, [el('h2',{text:title}),...children]); }
export function clear(node) { node.replaceChildren(); }
