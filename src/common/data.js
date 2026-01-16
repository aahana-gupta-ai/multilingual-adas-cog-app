export async function loadJSON(path) { const r=await fetch(path,{cache:'no-store'});if(!r.ok)throw new Error(`Cannot load ${path}: ${r.status}`);return r.json(); }
export function validateCatalog(catalog) {
  if(!catalog||!Array.isArray(catalog.items))throw new Error('Catalog must contain items');
  const ids=new Set();for(const item of catalog.items){if(!item.id||ids.has(item.id))throw new Error('Missing or duplicate item id');ids.add(item.id);if(!item.path||item.path.includes('..')||item.path.startsWith('/'))throw new Error('Invalid resource path');}
  return catalog;
}
export function byId(items,id) { const item=items.find(x=>x.id===id);if(!item)throw new Error(`Unknown item: ${id}`);return item; }
