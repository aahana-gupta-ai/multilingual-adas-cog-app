export function safeFilename(value) { return String(value).replace(/[^a-zA-Z0-9._-]+/g,'-').slice(0,100) || 'download'; }
export function download(content, name, type='text/plain;charset=utf-8') {
  const blob = content instanceof Blob ? content : new Blob([content],{type});
  const url = URL.createObjectURL(blob); const a = document.createElement('a');
  a.href=url; a.download=safeFilename(name); a.click(); setTimeout(()=>URL.revokeObjectURL(url),1000);
}
export function downloadJSON(value, name) { download(JSON.stringify(value,null,2)+'\n',name,'application/json'); }
