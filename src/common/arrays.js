export function groupBy(items,key){const groups=new Map();for(const item of items){const value=typeof key==='function'?key(item):item[key];if(!groups.has(value))groups.set(value,[]);groups.get(value).push(item);}return groups;}
export function unique(values){return [...new Set(values)];}
export function shuffle(values,random=Math.random){const a=[...values];for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export function chunks(values,size){if(!Number.isInteger(size)||size<1)throw new Error('Positive chunk size required');const out=[];for(let i=0;i<values.length;i+=size)out.push(values.slice(i,i+size));return out;}
