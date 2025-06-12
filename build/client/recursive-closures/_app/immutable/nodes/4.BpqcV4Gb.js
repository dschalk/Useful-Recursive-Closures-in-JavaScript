import{s as pe,n as ne}from"../chunks/Bv-lJKiI.js";import{S as ve,i as _e,d as t,a as l,j as q,l as u,c as s,g as x,b as c,k as E,h as P,e as o,f as a,t as k}from"../chunks/D2RDcUeg.js";function ge(i){let d,R="Simply Cloning Any Object",N,r,S="Even Deeply Nested Data Structures Containing Functions, Self-References, etc",A,F,V,T,f,le='Calling m(func) for some function &quot;func&quot; changes x in the m-M(x) closure to func(x) (unless it throws an error); but  has no effect on x in the m_clone-M(x) closure. Likewise, running m_clone(func) does not affect m. Why? <span style="color:coral">Because x gets reassigned on line 4 of M.</span>',H,m,se="Two Essential Facts",I,h,oe=`1. When two variables point to the same object in memory, either variable can modify that object, thereby changing the value of both variables. For example,
    `,p,X,U,v,ce=`2. When two variables point to the same object in memory, and one gets reassigned  <span style="color:coral">(as happens on line 4 of M)</span>, the variables become independent from one another. For example,
    `,_,Y,L,g,ae='Note: Object.is and === (strict equality) are both used to compare values, but they work differently in two ways: Object.is(NaN, NaN) returns true, whereas NaN === NaN returns false. Object.is(-0, +0) returns true, but -0 === +0 returns false. "===" could have been used in the demonstration below.',W,b,Z,D,C,ie='In the example below, m is defined as an array containing three arrays, one of which contains a function. cl is copy of m. m_clone is a clone of m, m_clone = M(m(dF3x)). The value returned by m_clone(dF3x) is, at first, a reference to the array held in the m-M(x) closure. When m(func) reassigns x in the m-M(x) closure, or m_clone(func) reassigns x in its closure for some function "func", the value of x in the m-M(x) closure and the value of x in the m_clone-M(x) become independent of one another. These reassignment happen on the 4th line of M.',B,w,de="As shown in the following examples, changes in m(dF3x) caused by m(v => v.concat(888)) don't change m_clone(dF3x), and changing m_clone(dF3x) by running m_clone(v => v.concat(777)) has no effect on m or cl. Unlike m and m_clone, m and cl point to the same place in memory, as do the values held in the m-M(x) and cl-M(x) closures; i.e., m(dF3x) and cl(dF3x). Therefore, changing x in either closure changes x in the other.",J,y,xe="Here's the demonstration code:",$,M,ee,z,G,K,j,re="This is the text returned by the demonstration code using Node.js:",Q,O,te;return{c(){d=o("h1"),d.textContent=R,N=a(),r=o("h2"),r.textContent=S,A=a(),F=o("pre"),V=k(i[0]),T=a(),f=o("p"),f.innerHTML=le,H=a(),m=o("h2"),m.textContent=se,I=a(),h=o("p"),h.textContent=oe,p=o("pre"),X=k(i[4]),U=a(),v=o("p"),v.innerHTML=ce,_=o("pre"),Y=k(i[5]),L=a(),g=o("p"),g.textContent=ae,W=a(),b=o("pre"),Z=k(i[3]),D=a(),C=o("p"),C.textContent=ie,B=a(),w=o("p"),w.textContent=de,J=a(),y=o("p"),y.textContent=xe,$=a(),M=o("pre"),ee=k(i[1]),z=a(),G=o("br"),K=a(),j=o("p"),j.textContent=re,Q=a(),O=o("pre"),te=k(i[2]),this.h()},l(e){d=s(e,"H1",{class:!0,"data-svelte-h":!0}),x(d)!=="svelte-1v2ajup"&&(d.textContent=R),N=c(e),r=s(e,"H2",{class:!0,"data-svelte-h":!0}),x(r)!=="svelte-1o3nol2"&&(r.textContent=S),A=c(e),F=s(e,"PRE",{class:!0});var n=E(F);V=P(n,i[0]),n.forEach(t),T=c(e),f=s(e,"P",{"data-svelte-h":!0}),x(f)!=="svelte-1iuy5qa"&&(f.innerHTML=le),H=c(e),m=s(e,"H2",{class:!0,"data-svelte-h":!0}),x(m)!=="svelte-47fcl1"&&(m.textContent=se),I=c(e),h=s(e,"P",{"data-svelte-h":!0}),x(h)!=="svelte-91xvdf"&&(h.textContent=oe),p=s(e,"PRE",{class:!0});var ue=E(p);X=P(ue,i[4]),ue.forEach(t),U=c(e),v=s(e,"P",{"data-svelte-h":!0}),x(v)!=="svelte-1ftglpp"&&(v.innerHTML=ce),_=s(e,"PRE",{class:!0});var me=E(_);Y=P(me,i[5]),me.forEach(t),L=c(e),g=s(e,"P",{"data-svelte-h":!0}),x(g)!=="svelte-1bwnnot"&&(g.textContent=ae),W=c(e),b=s(e,"PRE",{class:!0});var Fe=E(b);Z=P(Fe,i[3]),Fe.forEach(t),D=c(e),C=s(e,"P",{"data-svelte-h":!0}),x(C)!=="svelte-w2xr2d"&&(C.textContent=ie),B=c(e),w=s(e,"P",{"data-svelte-h":!0}),x(w)!=="svelte-1evq3ql"&&(w.textContent=de),J=c(e),y=s(e,"P",{"data-svelte-h":!0}),x(y)!=="svelte-1ffoxs1"&&(y.textContent=xe),$=c(e),M=s(e,"PRE",{class:!0});var fe=E(M);ee=P(fe,i[1]),fe.forEach(t),z=c(e),G=s(e,"BR",{}),K=c(e),j=s(e,"P",{"data-svelte-h":!0}),x(j)!=="svelte-190rqbo"&&(j.textContent=re),Q=c(e),O=s(e,"PRE",{class:!0});var he=E(O);te=P(he,i[2]),he.forEach(t),this.h()},h(){u(d,"class","svelte-1cqu3wk"),u(r,"class","svelte-1cqu3wk"),u(F,"class","svelte-1cqu3wk"),u(m,"class","svelte-1cqu3wk"),u(p,"class","svelte-1cqu3wk"),u(_,"class","svelte-1cqu3wk"),u(b,"class","svelte-1cqu3wk"),u(M,"class","svelte-1cqu3wk"),u(O,"class","svelte-1cqu3wk")},m(e,n){l(e,d,n),l(e,N,n),l(e,r,n),l(e,A,n),l(e,F,n),q(F,V),l(e,T,n),l(e,f,n),l(e,H,n),l(e,m,n),l(e,I,n),l(e,h,n),l(e,p,n),q(p,X),l(e,U,n),l(e,v,n),l(e,_,n),q(_,Y),l(e,L,n),l(e,g,n),l(e,W,n),l(e,b,n),q(b,Z),l(e,D,n),l(e,C,n),l(e,B,n),l(e,w,n),l(e,J,n),l(e,y,n),l(e,$,n),l(e,M,n),q(M,ee),l(e,z,n),l(e,G,n),l(e,K,n),l(e,j,n),l(e,Q,n),l(e,O,n),q(O,te)},p:ne,i:ne,o:ne,d(e){e&&(t(d),t(N),t(r),t(A),t(F),t(T),t(f),t(H),t(m),t(I),t(h),t(p),t(U),t(v),t(_),t(L),t(g),t(W),t(b),t(D),t(C),t(B),t(w),t(J),t(y),t($),t(M),t(z),t(G),t(K),t(j),t(Q),t(O))}}}function be(i){var d=`

  var dF3x = () => {}; // This flag is never called. See line 3 of M, below. 

  function M(x) {
    return function go(func) {
      if (func === dF3x) return x;
      else x = func(x);
      return go;
    };
  }

  var m = M(x); // x can be any JavaScript value
  var m_clone = M(m(dF3x)); `,R=`// Utility function for logging
var log = console.log;

// Function used in M (below) to retrieve the 
// current value of x in the closure
var dF3x = () => {}

// Function M(x) that creates a closure over any JavaScript value x
function M(x) {
    return function go(func) {
        if (func === dF3x) {
            // If func is dF3x, return the current value of x
            return x;
        } else {
            // **Critical Line**: Reassign x to the result of func(x)
            x = func(x);
            return go;
        }
    }
}

// Example function to be stored in the array
function add(a, b) { return a + b; }

// Create closures
const m = M([ [6], [7], [add] ]); // Original closure
const cl = m;                      // cl references the same closure as m
const m_clone = M(m(dF3x));        // m_clone is a new closure with its own x

// **Caption**: Initial State - All closures share the same x
log("Initial State:");
log("m(dF3x) is", m(dF3x));         // [ [6], [7], [ [Function: add] ] ]
log("cl(dF3x) is", cl(dF3x));       // [ [6], [7], [ [Function: add] ] ]
log("m_clone(dF3x) is", m_clone(dF3x)); // [ [6], [7], [ [Function: add] ] ]
log("Object.is(m(dF3x), cl(dF3x)):", Object.is(m(dF3x), cl(dF3x))); // true
log("Object.is(m(dF3x), m_clone(dF3x)):", Object.is(m(dF3x), m_clone(dF3x))); // true

// **Caption**: Mutating x via m_clone before any reassignment
m_clone(dF3x).push(1111);
log("
After m_clone(dF3x).push(1111):");
log("m(dF3x) is", m(dF3x));           // Mutated array includes 1111
log("cl(dF3x) is", cl(dF3x));         // Also includes 1111
log("m_clone(dF3x) is", m_clone(dF3x));   // Includes 1111
log("Object.is(m(dF3x), m_clone(dF3x)):", Object.is(m(dF3x), m_clone(dF3x))); // true

// **Caption**: Reassigning x in m - This breaks the shared reference
m(v => v.concat(888)); // Reassign x in m to a new array
log("After m(v => v.concat(888)):");
log("m(dF3x) is", m(dF3x));           // New array with 888
log("cl(dF3x) is", cl(dF3x));         // Also updated (same closure as m)
log("m_clone(dF3x) is", m_clone(dF3x));   // Remains unchanged with 1111
log("Object.is(m(dF3x), m_clone(dF3x)):", Object.is(m(dF3x), m_clone(dF3x))); // false

// **Caption**: Reassigning x in m_clone - Independent state
m_clone(v => v.concat(777)); // Reassign x in m_clone to a new array
log("After m_clone(v => v.concat(777)):");
log("m(dF3x) is", m(dF3x));           // Unchanged from previous step
log("cl(dF3x) is", cl(dF3x));         // Unchanged (same as m)
log("m_clone(dF3x) is", m_clone(dF3x));   // New array with 1111 and 777
log("Object.is(m(dF3x), m_clone(dF3x)):", Object.is(m(dF3x), m_clone(dF3x))); // false

// **Caption**: Mutating x in m_clone after reassignment
m_clone(dF3x).push(2222);
log("After m_clone(dF3x).push(2222):");
log("m(dF3x) is", m(dF3x));           // Unchanged
log("cl(dF3x) is", cl(dF3x));         // Unchanged
log("m_clone(dF3x) is", m_clone(dF3x));   // Now includes 1111, 777, 2222

// **Caption**: Mutating x in m
m(dF3x).push(3333);
log("After m(dF3x).push(3333):");
log("m(dF3x) is", m(dF3x));           // Includes 888, 3333
log("cl(dF3x) is", cl(dF3x));         // Also includes 888, 3333
log("m_clone(dF3x) is", m_clone(dF3x));   // Unchanged

// Mutating x via m_clone after any reassignment
m_clone(dF3x).push(444);
log("
After m_clone(dF3x).push(444):");
log("m(dF3x) is", m(dF3x));           // Does not include 444
log("cl(dF3x) is", cl(dF3x));         // Also does not include 444
log("m_clone(dF3x) is", m_clone(dF3x));   // Only the clone has been updated
log("Object.is(m(dF3x), m_clone(dF3x)):", Object.is(m(dF3x), m_clone(dF3x))); // Now it's false`,N=`Initial State:
m(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ] ]
cl(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ] ]
m_clone(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ] ]
Object.is(m(dF3x), cl(dF3x)): true
Object.is(m(dF3x), m_clone(dF3x)): true

After m_clone(dF3x).push(1111):
m(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111 ]
cl(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111 ]
m_clone(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111 ]
Object.is(m(dF3x), m_clone(dF3x)): true

After m(v => v.concat(888)):
m(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888 ]
cl(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888 ]
m_clone(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111 ]
Object.is(m(dF3x), m_clone(dF3x)): false

After m_clone(v => v.concat(777)):
m(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888 ]
cl(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888 ]
m_clone(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 777 ]
Object.is(m(dF3x), m_clone(dF3x)): false

After m_clone(dF3x).push(2222):
m(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888 ]
cl(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888 ]
m_clone(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 777, 2222 ]

After m(dF3x).push(3333):
m(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888, 3333 ]
cl(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888, 3333 ]
m_clone(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 777, 2222 ]

After m_clone(dF3x).push(444):
m(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888, 3333 ]
cl(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 888, 3333 ]
m_clone(dF3x) is [ [ 6 ], [ 7 ], [ [Function: add] ], 1111, 777, 2222, 444 ]
Object.is(m(dF3x), m_clone(dF3x)): false `,r=`        log(Object.is(NaN, NaN)); // true
        log(NaN === NaN);         // false
        log(Object.is(-0, 0));    // true
        log(-0 === 0)             // false `,S=`    var a, b;
    var a = b = [1,2,3]; 
    a.push(4); 
    console.log(a); // [1,2,3,4];
    console.log(b); // [1,2,3,4]`,A=`    var a, b;
    a = b = [1,2,3];
    a = a.concat(4);
    console.log(a); // [1,2,3,4]
    console.log(b); // [1,2,3]`;return[d,R,N,r,S,A]}class ye extends ve{constructor(d){super(),_e(this,d,be,ge,pe,{})}}export{ye as component};
