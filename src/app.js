import {createSession,saveResponse,progress,promptsFor} from './core.js';import {$,el,field,option,panel,table,setStatus} from './common/dom.js';import {loadJSON,validateCatalog} from './common/data.js';import {downloadJSON} from './common/download.js';
const app=$('#app');let session=createSession(),catalog,task,locale,bank;
async function main(){catalog=validateCatalog(await loadJSON('./data/catalog.json'));const langs=catalog.items.filter(i=>i.kind==='locale'),tasks=catalog.items.filter(i=>i.kind==='task');
 const lang=el('select',{id:'language'},langs.map(i=>option(i.id.replace('locale-',''),i.title)));const choose=el('select',{id:'task'},tasks.map(i=>option(i.id,i.title)));
 const id=el('input',{id:'session-id',value:'SYN-DEMO-001',maxlength:44});const restart=el('button',{id:'new-session',text:'Start new demo session',onclick:()=>{try{session=createSession(id.value,lang.value);render();setStatus('New fictional session started.');}catch(e){setStatus(e.message,'error');}}});
 const exportButton=el('button',{id:'export',text:'Export session JSON',class:'secondary',onclick:()=>downloadJSON(session,session.id+'.json')});
 const sidebar=panel('Session workspace',[field('Fictional session ID',id),field('Source language resources',lang),field('Workflow task',choose),restart,el('p',{class:'notice',text:'Demo observation counts only. No diagnosis or clinical total is generated.'}),exportButton]);
 const content=el('div',{id:'content'});app.append(el('div',{class:'layout'},[el('aside',{},[sidebar]),content]));
 async function change(){try{locale=await loadJSON('./data/locales/'+lang.value+'.json');bank=await loadJSON('./data/wordlists/'+lang.value+'.json');task=await loadJSON('./data/tasks/'+choose.value+'.json');session.payload.language=lang.value;render();setStatus('Source prompts loaded; translation review is pending.');}catch(e){setStatus(e.message,'error');}}
 lang.addEventListener('change',()=>{session=createSession(session.id,lang.value);change();});choose.addEventListener('change',change);await change();
}
function render(){if(!task)return;const content=$('#content');content.replaceChildren();const count=el('input',{id:'observation-count',type:'number',min:0,max:task.max_observations,step:1,value:session.payload.responses[task.id]?.observation_count??''});
 const prompts=el('ul',{class:'items'},promptsFor(task,locale,bank).map(word=>el('li',{text:word})));const save=el('button',{id:'save-response',text:'Record demo observation',onclick:()=>{try{session=saveResponse(session,task.id,count.value);render();setStatus('Demo observation recorded.');}catch(e){setStatus(e.message,'error');}}});
 content.append(panel(task.title,[el('p',{class:'muted',text:task.instruction}),prompts,field('Observation count (0–'+task.max_observations+')',count),save]));
 const p=progress(session),bar=el('div',{class:'progress'},[el('span',{style:'width:'+p.percentage+'%'})]);const rows=Object.values(session.payload.responses).map(r=>[r.task_id,r.observation_count,r.status]);content.append(panel('Session coverage',[el('p',{text:p.recorded+' of '+p.total+' tasks recorded'}),bar,el('div',{class:'scroll'},[table(['Task','Observation count','Status'],rows)])]));
}
main().catch(e=>setStatus(e.message,'error'));
