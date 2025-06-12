import{s as Me,n as Fe,r as Ve}from"../chunks/Bv-lJKiI.js";import{S as Ne,i as Se,d as s,q as He,r as je,n as De,a as l,j as T,p as G,l as c,c as i,g as m,b as p,k as V,h as k,e as r,f,t as E}from"../chunks/D2RDcUeg.js";function Ue(u){let v,R="The Collatz Conjecture",N,b,J,S,d,O="For example, consider n = 6:",U,_,o,P,C,z,h,Q="*******************************************************",K,y,be="*******************************************************",L,x,n='Enter an integer greater than 1 below to see how many steps it takes to get to the the number "1". The arrow keys work. For example, if you enter 32, you get 5; press the "down" arrow on your keyboard, or the "down" arrow on the input box (below), and see that it takes 106 steps for 31 to get to 1.',w,a,W,I,de,X,Y,A,Z,$,g,Te="*******************************************************",ee,B,ce="*******************************************************",te,q,ke="Here's the code that generates the Collatz sequence on this page:",se,F,_e,le,j,Ee="Here are some results:",ne,D,Ce,ie,H,Re="Even n = 9**100 finishes in fewer than 1000 steps, as shown below.",re,M,ye,ue,pe,fe,ae,oe,ve,he,me,xe,Pe;return{c(){v=r("h1"),v.textContent=R,N=f(),b=r("pre"),J=E(u[2]),S=f(),d=r("p"),d.textContent=O,U=f(),_=r("pre"),o=E(u[3]),P=f(),C=r("br"),z=f(),h=r("div"),h.textContent=Q,K=f(),y=r("div"),y.textContent=be,L=f(),x=r("p"),x.textContent=n,w=f(),a=r("input"),W=f(),I=r("h3"),de=E("The selected number is "),X=E(u[0]),Y=f(),A=r("h3"),Z=E(u[1]),$=f(),g=r("div"),g.textContent=Te,ee=f(),B=r("div"),B.textContent=ce,te=f(),q=r("p"),q.textContent=ke,se=f(),F=r("pre"),_e=E(u[4]),le=f(),j=r("p"),j.textContent=Ee,ne=f(),D=r("pre"),Ce=E(u[5]),ie=f(),H=r("p"),H.textContent=Re,re=f(),M=r("pre"),ye=E(u[6]),ue=f(),pe=r("br"),fe=r("br"),ae=r("br"),oe=f(),ve=r("br"),he=r("br"),me=r("br"),this.h()},l(e){v=i(e,"H1",{class:!0,"data-svelte-h":!0}),m(v)!=="svelte-15tok7g"&&(v.textContent=R),N=p(e),b=i(e,"PRE",{class:!0});var t=V(b);J=k(t,u[2]),t.forEach(s),S=p(e),d=i(e,"P",{"data-svelte-h":!0}),m(d)!=="svelte-6jqccx"&&(d.textContent=O),U=p(e),_=i(e,"PRE",{class:!0});var ze=V(_);o=k(ze,u[3]),ze.forEach(s),P=p(e),C=i(e,"BR",{}),z=p(e),h=i(e,"DIV",{"data-svelte-h":!0}),m(h)!=="svelte-1r8vzgo"&&(h.textContent=Q),K=p(e),y=i(e,"DIV",{"data-svelte-h":!0}),m(y)!=="svelte-1r8vzgo"&&(y.textContent=be),L=p(e),x=i(e,"P",{"data-svelte-h":!0}),m(x)!=="svelte-s7chxv"&&(x.textContent=n),w=p(e),a=i(e,"INPUT",{type:!0,class:!0}),W=p(e),I=i(e,"H3",{});var we=V(I);de=k(we,"The selected number is "),X=k(we,u[0]),we.forEach(s),Y=p(e),A=i(e,"H3",{});var Ie=V(A);Z=k(Ie,u[1]),Ie.forEach(s),$=p(e),g=i(e,"DIV",{"data-svelte-h":!0}),m(g)!=="svelte-1r8vzgo"&&(g.textContent=Te),ee=p(e),B=i(e,"DIV",{"data-svelte-h":!0}),m(B)!=="svelte-1r8vzgo"&&(B.textContent=ce),te=p(e),q=i(e,"P",{"data-svelte-h":!0}),m(q)!=="svelte-1pg9okm"&&(q.textContent=ke),se=p(e),F=i(e,"PRE",{class:!0});var ge=V(F);_e=k(ge,u[4]),ge.forEach(s),le=p(e),j=i(e,"P",{"data-svelte-h":!0}),m(j)!=="svelte-1ayed94"&&(j.textContent=Ee),ne=p(e),D=i(e,"PRE",{class:!0});var Be=V(D);Ce=k(Be,u[5]),Be.forEach(s),ie=p(e),H=i(e,"P",{"data-svelte-h":!0}),m(H)!=="svelte-1y6hdyd"&&(H.textContent=Re),re=p(e),M=i(e,"PRE",{class:!0});var qe=V(M);ye=k(qe,u[6]),qe.forEach(s),ue=p(e),pe=i(e,"BR",{}),fe=i(e,"BR",{}),ae=i(e,"BR",{}),oe=p(e),ve=i(e,"BR",{}),he=i(e,"BR",{}),me=i(e,"BR",{}),this.h()},h(){c(v,"class","svelte-901fe7"),c(b,"class","svelte-901fe7"),c(_,"class","svelte-901fe7"),c(a,"type","number"),c(a,"class","svelte-901fe7"),c(F,"class","svelte-901fe7"),c(D,"class","svelte-901fe7"),c(M,"class","svelte-901fe7")},m(e,t){l(e,v,t),l(e,N,t),l(e,b,t),T(b,J),l(e,S,t),l(e,d,t),l(e,U,t),l(e,_,t),T(_,o),l(e,P,t),l(e,C,t),l(e,z,t),l(e,h,t),l(e,K,t),l(e,y,t),l(e,L,t),l(e,x,t),l(e,w,t),l(e,a,t),je(a,u[0]),l(e,W,t),l(e,I,t),T(I,de),T(I,X),l(e,Y,t),l(e,A,t),T(A,Z),l(e,$,t),l(e,g,t),l(e,ee,t),l(e,B,t),l(e,te,t),l(e,q,t),l(e,se,t),l(e,F,t),T(F,_e),l(e,le,t),l(e,j,t),l(e,ne,t),l(e,D,t),T(D,Ce),l(e,ie,t),l(e,H,t),l(e,re,t),l(e,M,t),T(M,ye),l(e,ue,t),l(e,pe,t),l(e,fe,t),l(e,ae,t),l(e,oe,t),l(e,ve,t),l(e,he,t),l(e,me,t),xe||(Pe=[G(a,"input",u[8]),G(a,"keypress",u[9]),G(a,"change",u[10]),G(a,"input",u[11]),G(a,"change",u[12]),G(a,"keypress",u[13])],xe=!0)},p(e,[t]){t&1&&He(a.value)!==e[0]&&je(a,e[0]),t&1&&De(X,e[0]),t&2&&De(Z,e[1])},i:Fe,o:Fe,d(e){e&&(s(v),s(N),s(b),s(S),s(d),s(U),s(_),s(P),s(C),s(z),s(h),s(K),s(y),s(L),s(x),s(w),s(a),s(W),s(I),s(Y),s(A),s($),s(g),s(ee),s(B),s(te),s(q),s(se),s(F),s(le),s(j),s(ne),s(D),s(ie),s(H),s(re),s(M),s(ue),s(pe),s(fe),s(ae),s(oe),s(ve),s(he),s(me)),xe=!1,Ve(Pe)}}}function Ae(u,v,R){var N=`For any positive integer n, the Collatz sequence is defined as follows:

    If n is even:
        Divide it by 2.
    If n is odd:
        Multiply it by 3 and add 1.

    Repeat the process with the new value of n.

The conjecture states that no matter what positive integer you start with, the sequence will always eventually reach 1.`,b=`    6 is even,  6÷2=3
    3 is odd,   3×3+1=10
    10 is even, 10÷2=5
    5 is odd,   5×3+1=16.
    16 is even, 16÷2=8.
    8 is even,  8÷2=4.
    4 is even,  4÷2=2.
    2 is even,  2÷2=1.`,J=`  var log = console.log;
  var dF3x = () => {};

  function M(x) {
    return function go(func) {
      if (func === dF3x) return x;
      else x = func(x);
      return go;
    };
  }

var n;
var m;

var collatz = function collatz (n) {
    m = M([n, 0]);
    m(f);
}
var out = "";

function f (d) {
      if (d[1] === 0) log("testing the number", d[0]);
      d[1] = d[1] += 1;
      if (d[0] % 2 === 0) d = [d[0]/2, d[1]]
      else if (d[0] % 2 !== 0) d = [d[0]*3 + 1, d[1]]
      if (d[0] !== 1) f(d)
      else {
          d[1] = d[1];
          out = "The number of steps was " + d[1];
      }
}

function getInput (event) {
    n = event.target.value;
}`,S=`testing the number 10
The number of steps is 6

testing the number 100
The number of steps is 25

testing the number 1000
The number of steps is 111

testing the number 10000
The number of steps is 29

testing the number 100000
The number of steps is 128

testing the number 1000000
The number of steps is 152

testing the number 10000000
The number of steps is 145

testing the number 100000000
The number of steps is 107

testing the number 1000000000
The number of steps is 100

testing the number 10000000000
The number of steps is 124

testing the number 100000000000
The number of steps is 347

testing the number 1000000000000
The number of steps is 146`,d=`testing the number 2.6561398887587478e+95
d is [ 1.3280699443793739e+95, 1 ]
d is [ 6.6403497218968695e+94, 2 ]
d is [ 3.3201748609484348e+94, 3 ]
d is [ 1.6600874304742174e+94, 4 ]
d is [ 8.300437152371087e+93, 5 ]
d is [ 4.1502185761855434e+93, 6 ]
d is [ 2.0751092880927717e+93, 7 ]
d is [ 1.0375546440463859e+93, 8 ]
d is [ 5.1877732202319293e+92, 9 ]
d is [ 2.5938866101159647e+92, 10 ]
d is [ 1.2969433050579823e+92, 11 ]
...
d is [ 1364, 578 ]
d is [ 682, 579 ]
d is [ 341, 580 ]
d is [ 1024, 581 ]
d is [ 512, 582 ]
d is [ 256, 583 ]
d is [ 128, 584 ]
d is [ 64, 585 ]
d is [ 32, 586 ]
d is [ 16, 587 ]
d is [ 8, 588 ]
d is [ 4, 589 ]
d is [ 2, 590 ]
d is [ 1, 591 ]
The number of steps is 591`,O=console.log,U=()=>{};function _(n){return function w(a){return a===U?n:(n=a(n),w)}}var o,P,C=function(w){P=_([w,0]),P(h)},z="";function h(n){n[1]===0&&O("testing the number",n[0]),n[1]=n[1]+=1,n[0]%2===0?n=[n[0]/2,n[1]]:n[0]%2!==0&&(n=[n[0]*3+1,n[1]]),n[0]!==1?h(n):(n[1]=n[1],R(1,z="The number of steps was "+n[1]))}function Q(){o=He(this.value),R(0,o)}return[o,z,N,b,J,S,d,C,Q,()=>C(o),()=>C(o),()=>C(o),()=>R(0,o),()=>R(0,o)]}class Ke extends Ne{constructor(v){super(),Se(this,v,Ae,Ue,Me,{})}}export{Ke as component};
