export function parseCSV(text) {
  const input=String(text).replace(/^\uFEFF/,''); const rows=[]; let row=[], cell='', quoted=false;
  for(let i=0;i<input.length;i++) {
    const c=input[i];
    if(c==='"') { if(quoted&&input[i+1]==='"'){cell+='"';i++;} else quoted=!quoted; }
    else if(c===','&&!quoted){row.push(cell);cell='';}
    else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&input[i+1]==='\n')i++;row.push(cell);if(row.some(v=>v!==''))rows.push(row);row=[];cell='';}
    else cell+=c;
  }
  if(quoted)throw new Error('Unclosed CSV quote');
  if(cell!==''||row.length){row.push(cell);rows.push(row);}
  if(!rows.length)return [];
  const headers=rows.shift(); if(new Set(headers).size!==headers.length)throw new Error('Duplicate CSV columns');
  return rows.map((r,index)=>{if(r.length!==headers.length)throw new Error(`Wrong column count at record ${index+2}`);return Object.fromEntries(headers.map((h,i)=>[h,r[i]]));});
}
export function toCSV(rows, headers=Object.keys(rows[0]??{})) {
  const encode=v=>'"'+String(v??'').replaceAll('"','""')+'"';
  return [headers,...rows.map(row=>headers.map(h=>row[h]))].map(row=>row.map(encode).join(',')).join('\n')+'\n';
}
