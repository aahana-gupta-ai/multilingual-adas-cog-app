export const isoNow=()=>new Date().toISOString();
export function validTime(value){return typeof value==='string'&&/^([01]\d|2[0-3]):[0-5]\d$/.test(value);}
export function timeMinutes(value){if(!validTime(value))throw new Error('Use HH:MM');const [h,m]=value.split(':').map(Number);return h*60+m;}
export function minutesTime(value){if(!Number.isInteger(value)||value<0||value>=1440)throw new Error('Minute range: 0–1439');return String(Math.floor(value/60)).padStart(2,'0')+':'+String(value%60).padStart(2,'0');}
