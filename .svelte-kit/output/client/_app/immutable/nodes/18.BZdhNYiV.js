import{s as A,n as g}from"../chunks/Bv-lJKiI.js";import{S as q,i as w,d as s,a,j as F,s as R,l as $,c as u,g as P,b as d,k as H,h as M,e as f,f as _,t as S}from"../chunks/D2RDcUeg.js";function j(r){let e,v="Asynchronous Transformations",x,o,b="GOAL: Handle both Synchronous and Asynchronous Functions in a Simple Closure",h,i,y,m,l,I="If some value x is not a Promise, asyncId(x) creates a promise that resolves to x. asyncId(x) has no effect on x if x is a Promise. Using the basic definition of M, the following computation would return the number 10. Here, it returns a promise that resolves to 10",p,c,C;return{c(){e=f("h1"),e.textContent=v,x=_(),o=f("h3"),o.textContent=b,h=_(),i=f("pre"),y=S(r[0]),m=_(),l=f("p"),l.textContent=I,p=_(),c=f("pre"),C=S(r[1]),this.h()},l(t){e=u(t,"H1",{style:!0,"data-svelte-h":!0}),P(e)!=="svelte-z7nlbi"&&(e.textContent=v),x=d(t),o=u(t,"H3",{class:!0,"data-svelte-h":!0}),P(o)!=="svelte-cmiygg"&&(o.textContent=b),h=d(t),i=u(t,"PRE",{});var n=H(i);y=M(n,r[0]),n.forEach(s),m=d(t),l=u(t,"P",{"data-svelte-h":!0}),P(l)!=="svelte-1a82hpg"&&(l.textContent=I),p=d(t),c=u(t,"PRE",{});var E=H(c);C=M(E,r[1]),E.forEach(s),this.h()},h(){R(e,"text-align","center"),$(o,"class","svelte-xvyccl")},m(t,n){a(t,e,n),a(t,x,n),a(t,o,n),a(t,h,n),a(t,i,n),F(i,y),a(t,m,n),a(t,l,n),a(t,p,n),a(t,c,n),F(c,C)},p:g,i:g,o:g,d(t){t&&(s(e),s(x),s(o),s(h),s(i),s(m),s(l),s(p),s(c))}}}function k(r){var e=`function dF3x () {};
var log = console.log;
async function asyncId (x) {return x};

function M (x) {
  return function go (func) {
      if (func === dF3x) return clone(x);
      else x = asyncId(x).then(v => func(v));
      return go;
  }
}`,v=`var m = M(3);
m(v=>v**3)(v=>3*v)(v=>v+19)(Math.sqrt)(dF3x).then(v => log(v)); // 10 `;return[e,v]}class L extends q{constructor(e){super(),w(this,e,k,j,A,{})}}export{L as component};
