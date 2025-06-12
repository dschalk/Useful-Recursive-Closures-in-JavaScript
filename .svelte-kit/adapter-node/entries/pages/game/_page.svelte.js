import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
function gamble() {
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <br><br> <button data-svelte-h="svelte-1sonyrg">Gamble</button> <h1>${escape(gamble())}</h1>`;
});
export {
  Page as default
};
