

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/faq/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.ono8Jj-x.js","_app/immutable/chunks/scheduler.tgD2rtmB.js","_app/immutable/chunks/index.FvPb5Ppg.js"];
export const stylesheets = ["_app/immutable/assets/4.6t_PO0lU.css"];
export const fonts = [];