

export const index = 40;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/overview/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/40.Dx7-19ED.js","_app/immutable/chunks/Bv-lJKiI.js","_app/immutable/chunks/D2RDcUeg.js"];
export const stylesheets = [];
export const fonts = [];
