import { c as create_ssr_component } from './ssr-DgjyUhy2.js';

const css = {
  code: "a.svelte-1mqpwds{margin-right:40px;font-size:24px;font-weight:bold;color:rgb(135, 86, 135)}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\nimport \\"./style.css\\"\\n\\n<\/script>\\n\\n<style>\\n  a {\\n    margin-right: 40px;\\n    font-size: 24px;\\n    font-weight: bold;\\n    color: rgb(135, 86, 135);\\n  }\\n</style>\\n\\n<!--X-Content-Type-Options: nosniff -->\\n\\n<nav>\\n        <a href=\\"./\\">Home</a>\\n        \\n        <a href=\\"./cube7\\">Rubik's Cube</a>\\n\\n        <a href=\\"./async5\\">Async</a>\\n        \\n        <a href=\\"./digitalannealing\\">2-opt</a>\\n                \\n        <a href=\\"./clone\\">Clones</a>\\n\\n        <a href=\\"./Collatz\\">Collatz</a>\\n         \\n        <a href=\\"./Martingale\\">Martingale</a>\\n\\n        <a href=\\"./Python\\">Python</a>\\n                \\n        <a href=\\"./score\\">Game of Score</a>\\n\\n  </nav>\\n\\n  <div>\\"***********************************************************************************************\\"</div>\\n  <slot></slot>\\n"],"names":[],"mappings":"AAME,gBAAE,CACA,YAAY,CAAE,IAAI,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CACzB"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <nav data-svelte-h="svelte-15hsw8x"><a href="./" class="svelte-1mqpwds">Home</a> <a href="./cube7" class="svelte-1mqpwds">Rubik&#39;s Cube</a> <a href="./async5" class="svelte-1mqpwds">Async</a> <a href="./digitalannealing" class="svelte-1mqpwds">2-opt</a> <a href="./clone" class="svelte-1mqpwds">Clones</a> <a href="./Collatz" class="svelte-1mqpwds">Collatz</a> <a href="./Martingale" class="svelte-1mqpwds">Martingale</a> <a href="./Python" class="svelte-1mqpwds">Python</a> <a href="./score" class="svelte-1mqpwds">Game of Score</a></nav> <div data-svelte-h="svelte-8rws20">&quot;***********************************************************************************************&quot;</div> ${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-UqP0yu1R.js.map
