import { c as create_ssr_component } from './ssr-DgjyUhy2.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var m, mclone;
  var dF3x = () => {
  };
  var log = console.log;
  function M(x) {
    return function go(func) {
      if (func === dF3x) return x;
      else x = func(x);
      return go;
    };
  }
  function clone(v) {
    return M(v(dF3x));
  }
  var m = M({
    arr: [
      [[2], [3], [4]],
      [[[7], ["alpha"], ["beta"]], [["clown"], [(v) => v ** 3]]],
      888
    ],
    ob: { z: "skyblue" }
  });
  log("var m = M({arr: [ [ [2], [3], [4] ], [ [ [7], ['alpha'], ['beta'] ],  [ ['clown'], [v=>v**3] ] ], 888 ], ob: { z: 'skyblue' } }");
  log("mclone = clone(m)");
  mclone = clone(m);
  log("mclone is", mclone);
  log("mclone === m", mclone === m);
  log("mclone(dF3x) === m(dF3x)", mclone(dF3x) === m(dF3x));
  log("mclone = ['Hello World')]'");
  mclone = M(["Hello World"]);
  log("mclone(dF3x) === m(dF3x", mclone(dF3x) === m(dF3x));
  log("m(dF3x) is", m(dF3x));
  log("mclone(dF3x) is", mclone(dF3x));
  log("m(() => [8, {yes: 'You bet!')]");
  m(() => [8, { yes: "You bet!" }]);
  log("m(dF3x) is", m(dF3x));
  log("mclone(dF3x) is", mclone(dF3x));
  return `<h1 style="text-align: center; font-size:28px" data-svelte-h="svelte-6wes5z">Cloning Complex Data Structures Containing Functions</h1> <p data-svelte-h="svelte-1hsyb5f">Neither JSON.parse(JSON.stringify()), Object.assign(), spread operators, nor structuredClone can clone data structures containing functions or stand-alone functions.</p>  <br><br><br><br>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CrSdPsN5.js.map
