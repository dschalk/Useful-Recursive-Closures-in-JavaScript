import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var WebSocket = require("ws");
  var Random = "Not yet.";
  var sock = new WebSocket("ws://main3002.schalk3.com");
  Random = "waiting";
  sock.onmessage = (e) => {
    console.log(e);
    Random = e.data;
  };
  return `<h2>${escape(Random)}</h2> <button data-svelte-h="svelte-1cpr5ok">Get Random Number</button>`;
});
export {
  Page as default
};
