import {readdir,readFile} from 'node:fs/promises';
import {resolve,join,relative} from 'node:path';
const root=resolve(new URL('..',import.meta.url).pathname);
async function walk(dir){let out=[];for(const item of await readdir(dir,{withFileTypes:true})){if(['.git','node_modules','__pycache__','artifacts'].includes(item.name))continue;const path=join(dir,item.name);if(item.isDirectory())out.push(...await walk(path));else if(!item.name.endsWith('.pyc'))out.push(path);}return out;}
const files=await walk(root);for(const file of files)if(file.endsWith('.json'))JSON.parse(await readFile(file,'utf8'));
if(files.length!==160)throw new Error(`Expected 160 packaged files, got ${files.length}`);
for(const file of files)if((await readFile(file)).length===0)throw new Error(`Empty file: ${relative(root,file)}`);
console.log(`Verified ${files.length} non-empty files and all JSON resources.`);
