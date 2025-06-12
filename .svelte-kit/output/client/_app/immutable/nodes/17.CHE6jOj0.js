import{s as ce,n as ee,a as fe}from"../chunks/Bv-lJKiI.js";import{S as me,i as ve,d as t,a as n,j as x,l as H,o as he,b as a,c as u,g as E,k as V,h as _,f as o,e as p,t as y}from"../chunks/D2RDcUeg.js";const de=""+new URL("../assets/Screenshot_async.fBpcI-1P.png",import.meta.url).href;function xe(r){let i,c,I,v,F="**************************************************************************",S,m,l="Arrays in Monads",f,w,te=`The simple monads used in this section are returned by M1(x) where x can be any valid JavaScript value, including primitive values, functions, promises, etc. It differs from M(x) in that the monads it spawns use the function ret() rather than the string "stop" to trigger the return of the values they hold. M1 monads don't test for types although arguments must be functions. It is up to users to use Typescript, catch errors, or just be careful.`,R,C,K,U,b,se="m1 consumes the functions shown above as follows: m1(mpow(10))(msqrt)(madd(10))(ret)",k,h,N,ne=r[0](j).join(", ")+"",O,Q,A,M,le="This is an excercize in using very small monads with specialized functions. Usually, it's better to use a specialized monad with generally useful functions. For example, monads spawned by M2 (below) must start with non-empty arrays but after that, generic functions, even elementary lambdas, can facilitate computations.",B,P,W,D,d,X,re=r[1](j).join(", ")+"",Y,Z,$,q,ie="The state of the solitaire  game of Score is maintined in m2 = M(x) where x is an array of seven arrays.",g,T,ae="The functions shown on this page were tested in Firefox Developer Tools, which is loaded in the Firefox browser by pressing F12. Here's a screenshot:",G,z,ue;return{c(){i=o(),c=p("br"),I=o(),v=p("div"),v.textContent=F,S=o(),m=p("h3"),m.textContent=l,f=o(),w=p("p"),w.textContent=te,R=o(),C=p("pre"),K=y(r[2]),U=o(),b=p("p"),b.textContent=se,k=o(),h=p("p"),N=y("The result, as expected, is [ "),O=y(ne),Q=y(" ]."),A=o(),M=p("p"),M.textContent=le,B=o(),P=p("pre"),W=y(r[3]),D=o(),d=p("p"),X=y("Here's the result of m4(v=>v**3)(v=>v+v)(v=>v-12)(ret): ["),Y=y(re),Z=y("]."),$=o(),q=p("p"),q.textContent=ie,g=o(),T=p("p"),T.textContent=ae,G=o(),z=p("img"),this.h()},l(e){he("svelte-8uqoua",document.head).forEach(t),i=a(e),c=u(e,"BR",{}),I=a(e),v=u(e,"DIV",{"data-svelte-h":!0}),E(v)!=="svelte-9ovhf0"&&(v.textContent=F),S=a(e),m=u(e,"H3",{class:!0,"data-svelte-h":!0}),E(m)!=="svelte-1acbbz"&&(m.textContent=l),f=a(e),w=u(e,"P",{"data-svelte-h":!0}),E(w)!=="svelte-u91ddh"&&(w.textContent=te),R=a(e),C=u(e,"PRE",{class:!0});var oe=V(C);K=_(oe,r[2]),oe.forEach(t),U=a(e),b=u(e,"P",{"data-svelte-h":!0}),E(b)!=="svelte-i1l6ok"&&(b.textContent=se),k=a(e),h=u(e,"P",{});var J=V(h);N=_(J,"The result, as expected, is [ "),O=_(J,ne),Q=_(J," ]."),J.forEach(t),A=a(e),M=u(e,"P",{"data-svelte-h":!0}),E(M)!=="svelte-2lc6pn"&&(M.textContent=le),B=a(e),P=u(e,"PRE",{class:!0});var pe=V(P);W=_(pe,r[3]),pe.forEach(t),D=a(e),d=u(e,"P",{});var L=V(d);X=_(L,"Here's the result of m4(v=>v**3)(v=>v+v)(v=>v-12)(ret): ["),Y=_(L,re),Z=_(L,"]."),L.forEach(t),$=a(e),q=u(e,"P",{"data-svelte-h":!0}),E(q)!=="svelte-8cn1la"&&(q.textContent=ie),g=a(e),T=u(e,"P",{"data-svelte-h":!0}),E(T)!=="svelte-y2a7tl"&&(T.textContent=ae),G=a(e),z=u(e,"IMG",{src:!0,class:!0}),this.h()},h(){document.title="Arrys in monads",H(m,"class","h3b"),H(C,"class","svelte-1o6tzw9"),H(P,"class","svelte-1o6tzw9"),fe(z.src,ue=de)||H(z,"src",ue),H(z,"class","svelte-1o6tzw9")},m(e,s){n(e,i,s),n(e,c,s),n(e,I,s),n(e,v,s),n(e,S,s),n(e,m,s),n(e,f,s),n(e,w,s),n(e,R,s),n(e,C,s),x(C,K),n(e,U,s),n(e,b,s),n(e,k,s),n(e,h,s),x(h,N),x(h,O),x(h,Q),n(e,A,s),n(e,M,s),n(e,B,s),n(e,P,s),x(P,W),n(e,D,s),n(e,d,s),x(d,X),x(d,Y),x(d,Z),n(e,$,s),n(e,q,s),n(e,g,s),n(e,T,s),n(e,G,s),n(e,z,s)},p:ee,i:ee,o:ee,d(e){e&&(t(i),t(c),t(I),t(v),t(S),t(m),t(f),t(w),t(R),t(C),t(U),t(b),t(k),t(h),t(A),t(M),t(B),t(P),t(D),t(d),t($),t(q),t(g),t(T),t(G),t(z))}}}function j(){}function _e(r){return function i(c){return c===j?r:(r=c(r),i)}}function ye(r=[0]){return function i(c){return c===j?r:(r.push(c(r.slice(-1)[0])),i)}}function we(r){var i=_e([2]),c=l=>f=>(f.push(f.slice(-1)**l),f),I=l=>(l.push(Math.sqrt(l.slice(-1))),l),v=l=>f=>(f.push(f.slice(-1)*1+1*l),f);i(c(10))(I)(v(10))(j);var F=ye([3]);F(l=>l**3)(l=>l+l)(l=>l-12)(j);var S=`function ret () {};  // Used in M1 (below).

function M1 (x) {
    return function go (func) {
        if (func === ret) return x;
        else x = func(x);
        return go;
    }
}

var m1 = M1([2]);

var mpow = y => x => {x.push((x.slice(-1))**y); return x}
var msqrt = x => {x.push(Math.sqrt(x.slice(-1))); return x}
var madd = y => x => {x.push(x.slice(-1)+1*y); return x}

m1(mpow(3))(mpow(3))(mdouble)(msqrt)(madd(10))(ret)`,m=`function M2 (x) {
    return function go (func) {
        if (func === ret) return x;
        else {
            x.push(func(x.slice(-1)[0]));
            return go;
        }
    }
}

var m4 = M2([3]);`;return[i,F,S,m]}class Me extends me{constructor(i){super(),ve(this,i,we,xe,ce,{})}}export{Me as component};
