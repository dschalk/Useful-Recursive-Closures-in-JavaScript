

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BJUBHQX4.js","_app/immutable/chunks/Bv-lJKiI.js","_app/immutable/chunks/D2RDcUeg.js"];
export const stylesheets = ["_app/immutable/assets/0.BnXth4cX.css"];
export const fonts = [];
