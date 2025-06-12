

export const index = 50;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/trash/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/50.jhrOMuFv.js","_app/immutable/chunks/Bv-lJKiI.js","_app/immutable/chunks/D2RDcUeg.js"];
export const stylesheets = ["_app/immutable/assets/27.CtlkCK6c.css"];
export const fonts = [];
