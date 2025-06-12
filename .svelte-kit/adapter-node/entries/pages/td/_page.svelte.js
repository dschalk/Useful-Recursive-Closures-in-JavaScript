import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var text = `    
1. Soup and applesauce
   a. Straigten up dining room.
   b. Clean up kitchen

2, Amazon
   a, fly paper
   b.

3. Project B
     
4. Letter to B and C
   a. A's sweetness and friendliness
   b. A's bad behavior
      1. The car
      2. Past atrocities
      3. Recently keeping $20
         a. Then saying $160

`;
  return `<pre>${escape(text)}</pre>`;
});
export {
  Page as default
};
