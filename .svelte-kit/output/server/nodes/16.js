

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/WebSockets/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/16.BcD2T6IO.js","_app/immutable/chunks/Bv-lJKiI.js","_app/immutable/chunks/D2RDcUeg.js"];
export const stylesheets = ["_app/immutable/assets/16.BE7ivIbd.css"];
export const fonts = [];
