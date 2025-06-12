

export const index = 42;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/rc1/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/42.Cp-EswWO.js","_app/immutable/chunks/Bv-lJKiI.js","_app/immutable/chunks/D2RDcUeg.js"];
export const stylesheets = ["_app/immutable/assets/42.BFNm6vNW.css"];
export const fonts = [];
