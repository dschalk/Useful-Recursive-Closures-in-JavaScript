

export const index = 32;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cube8/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/32.CL1GMRcR.js","_app/immutable/chunks/Bv-lJKiI.js","_app/immutable/chunks/D2RDcUeg.js"];
export const stylesheets = ["_app/immutable/assets/32.9XHggaGm.css"];
export const fonts = [];
