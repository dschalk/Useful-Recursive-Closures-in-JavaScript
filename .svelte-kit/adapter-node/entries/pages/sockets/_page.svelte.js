import { c as create_ssr_component } from "../../../chunks/ssr.js";
function createWebSocket(path) {
  let host = window.location.hostname;
  if (host == "") host = "localhost";
  let uri = "ws://" + host + ":3000" + path;
  let Socket = "MozWebSocket" in window ? MozWebSocket : WebSocket;
  return new Socket(uri);
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const DES_ws = createWebSocket("/");
  DES_ws.onopen = function(e) {
    console.log("open ", e);
    DES_ws.send("CC#$42Angela");
  };
  DES_ws.onclose = function(e) {
    console.log("close ", e);
  };
  DES_ws.onmessage = function(event) {
    updateEvent(event);
    console.log("message ", event);
  };
  DES_ws.onerror = function(event) {
    updateEvent(event);
    console.log("error ", event);
  };
  console.log("cows and pigs", DES_ws.readyState);
  return ``;
});
export {
  Page as default
};
