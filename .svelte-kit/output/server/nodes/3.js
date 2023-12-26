

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/download/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.I32WS0k-.js","_app/immutable/chunks/scheduler.tgD2rtmB.js","_app/immutable/chunks/index.FvPb5Ppg.js","_app/immutable/chunks/CommandLink.QYId2qL5.js","_app/immutable/chunks/singletons.tb_tPZ_Z.js"];
export const stylesheets = ["_app/immutable/assets/3.PxeUIFr9.css","_app/immutable/assets/CommandLink.4zoJlOiY.css"];
export const fonts = [];
