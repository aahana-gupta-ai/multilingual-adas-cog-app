import Task0 from './tasks/word-recall.js';
import Task1 from './tasks/object-naming.js';
import Task2 from './tasks/commands.js';
import Task3 from './tasks/constructional-praxis.js';
import Task4 from './tasks/ideational-praxis.js';
import Task5 from './tasks/orientation.js';
import Task6 from './tasks/word-recognition.js';
import Task7 from './tasks/remembering-instructions.js';
import Task8 from './tasks/spoken-language.js';
import Task9 from './tasks/word-finding.js';
import Task10 from './tasks/comprehension.js';
import {syntheticId} from './common/validation.js';import {isoNow} from './common/time.js';
export const tasks=[Task0,Task1,Task2,Task3,Task4,Task5,Task6,Task7,Task8,Task9,Task10];
export function createSession(id='SYN-DEMO-001',language='en'){syntheticId(id);if(!["en", "hi", "gu", "mr", "ta", "te", "bn", "ml", "kn"].includes(language))throw new Error('Unknown language');return {id,project_id:'multilingual-adas-cog-app',is_synthetic:true,created_at:isoNow(),payload:{language,responses:{}}};}
export function saveResponse(session,id,value){const task=tasks.find(t=>t.id===id);if(!task)throw new Error('Unknown task');return {...session,payload:{...session.payload,responses:{...session.payload.responses,[id]:task.record(value)}}};}
export function progress(session){const recorded=Object.values(session.payload.responses).filter(r=>r.status==='recorded').length;return {recorded,total:tasks.length,percentage:recorded/tasks.length*100};}
export function promptsFor(task,locale,bank){if(task.id==='word-recall')return bank.targets;if(task.id==='word-recognition')return [...bank.targets,...bank.distractors];if(task.id==='commands')return locale.commands;if(task.id==='orientation')return locale.orientation;if(task.id==='object-naming')return locale.object_names;if(task.id==='ideational-praxis')return [locale.ideational];return task.prompts;}
