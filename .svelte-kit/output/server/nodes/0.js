import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.Mj73T4uh.js","_app/immutable/chunks/scheduler.tgD2rtmB.js","_app/immutable/chunks/index.FvPb5Ppg.js"];
export const stylesheets = ["_app/immutable/assets/0.0fK0-h2P.css"];
export const fonts = [];
