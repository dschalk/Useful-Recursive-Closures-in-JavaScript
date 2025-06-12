

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Collatz/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DXR6CX-O.js","_app/immutable/chunks/Bv-lJKiI.js","_app/immutable/chunks/D2RDcUeg.js"];
export const stylesheets = ["_app/immutable/assets/6.CkF6uak3.css"];
export const fonts = [];
