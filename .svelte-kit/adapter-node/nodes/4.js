

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Clone/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BpqcV4Gb.js","_app/immutable/chunks/Bv-lJKiI.js","_app/immutable/chunks/D2RDcUeg.js"];
export const stylesheets = ["_app/immutable/assets/4.CvhfyC4L.css"];
export const fonts = [];
