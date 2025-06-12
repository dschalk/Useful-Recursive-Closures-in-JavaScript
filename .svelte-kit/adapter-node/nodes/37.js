

export const index = 37;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/game/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/37.D0pnWC5E.js","_app/immutable/chunks/Bv-lJKiI.js","_app/immutable/chunks/D2RDcUeg.js"];
export const stylesheets = [];
export const fonts = [];
