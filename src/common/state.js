export function createStore(initial) {
  let value=structuredClone(initial);const listeners=new Set();
  return {get:()=>structuredClone(value),set(next){value=structuredClone(next);listeners.forEach(fn=>fn(structuredClone(value)));},subscribe(fn){listeners.add(fn);return()=>listeners.delete(fn);}};
}
export function readLocal(key,fallback) { try{const value=localStorage.getItem(key);return value===null?fallback:JSON.parse(value);}catch{return fallback;} }
export function writeLocal(key,value) { try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{return false;} }
export function clearLocal(key) { try{localStorage.removeItem(key);return true;}catch{return false;} }
