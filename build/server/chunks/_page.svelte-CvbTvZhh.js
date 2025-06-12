import { c as create_ssr_component, e as escape } from './ssr-DgjyUhy2.js';
import { leftShift } from 'mathjs';

const aa = 25;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let output = "";
  const dF3x = () => {
  };
  function M(x) {
    return function go(func) {
      if (func === dF3x) return x;
      x = func(x);
      return go;
    };
  }
  var m = M([aa, 1, aa, 0]);
  function addLogMessage(message) {
    output += message + "\n";
  }
  function f1(v) {
    const result = Math.floor(Math.random() * 2);
    if (result) {
      v[0] += v[1];
      v[1] = 1;
      v[3] += 1;
      addLogMessage(`<><><><><><><>, m(dF3x) is ${JSON.stringify(m(dF3x))}`);
      if (v[3] < aa) m(f1);
      else {
        addLogMessage(`Double ${JSON.stringify(m(dF3x))}`);
        return v;
      }
    } else {
      v[0] -= v[1];
      v[1] = leftShift(v[1], 1);
      addLogMessage(`******, m(dF3x) is ${JSON.stringify(m(dF3x))}`);
      if (v[1] > v[0]) {
        addLogMessage(`Wipeout ${JSON.stringify(m(dF3x))}`);
        return;
      } else {
        m(f1);
      }
    }
    return v;
  }
  m(f1);
  return `<button data-svelte-h="svelte-1bwigta">Play</button> <button data-svelte-h="svelte-1k8q8lq">Clear</button> <div><h1 data-svelte-h="svelte-yxrcrf">Game Output</h1> <pre>${escape(output)}</pre> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CvbTvZhh.js.map
