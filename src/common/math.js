export function mean(values){if(!values.length)return null;if(values.some(x=>typeof x!=='number'||!Number.isFinite(x)))throw new Error('Finite numeric values required');return values.reduce((a,b)=>a+b,0)/values.length;}
export function variance(values){const m=mean(values);if(values.length<2)return null;return values.reduce((s,x)=>s+(x-m)**2,0)/(values.length-1);}
export function quantile(values,p){if(p<0||p>1)throw new Error('Quantile must be between zero and one');mean(values);if(!values.length)return null;const a=[...values].sort((x,y)=>x-y),pos=(a.length-1)*p,i=Math.floor(pos);return a[i]+(a[Math.ceil(pos)]-a[i])*(pos-i);}
export function seededRandom(seed=42){let s=seed>>>0;return()=>{s=(Math.imul(1664525,s)+1013904223)>>>0;return s/4294967296;};}
export const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
