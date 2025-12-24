export function announce(message){const node=document.getElementById('status');if(node)node.textContent=message;}
export function focusHeading(root=document){const h=root.querySelector('h2');if(h){h.tabIndex=-1;h.focus();}}
export function bindEscape(callback,target=document){const fn=e=>{if(e.key==='Escape')callback();};target.addEventListener('keydown',fn);return()=>target.removeEventListener('keydown',fn);}
export function reducedMotion(){return typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;}
