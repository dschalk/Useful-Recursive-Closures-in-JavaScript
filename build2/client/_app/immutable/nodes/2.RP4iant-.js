import{s as $t,a as en,b as tn,u as nn,g as rn,e as on}from"../chunks/scheduler.gYNbTIBg.js";import{S as ln,i as an,e as r,s as l,t as g,c as o,b as p,g as i,a,d as x,f as d,j as c,h as f,k as Ce,l as e,m as sn,n as mt,o as un,p as cn}from"../chunks/index.pqPhgd5I.js";const dn=""+new URL("../assets/F.ewlc2ijQ.png",import.meta.url).href;function hn(s){let n,m,pe="Recursive Closures",U,C,be='"M" returns the recursive function "go". "m-M(x) closures" refers to closure created by defining "m" as the recursive function return by "M" when "m = M(x)" runs. "M" is defined below, "x" can be any JavaScript value, and "func" is either dF3x or a function that operates on x.',D,h,B,ae,se,q,S,G,w,A,ie,N,J,b,ue,ge,we,L,ft="    Anonymous closures can perform computations without leaving persistent closures in memory. The results might be assigned to variables, placed in persistent objects, memorialized in log files, and so forth; but the closures that produced those results are subject to immediate garbage collection. Here an example: ",k,vt="console.log( M( 3 )( v=>v**3 )( v=>v*4 )( v=>v-8 )( Math.sqrt )( dF3x ) ) // 42 ",ke,_e,Fe,Me,I,pt='    The variable "m" (above) is a number. The closure that performed the computation is gone, out of reach and subject to garbage collection. But, when the closure is named, it remains at least as long as a browser tab remains open; longer with persistent storage.',Pe,ze,Re,T,bt="         m = M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)",Ee,qe,_,gt=`        console.log ( "m is", m )      // m is function go(func)
`,Se,Ae,F,xt="          console.log(m(dF3x))     // 10",Te,He,je,M,yt="         m(v=>v+4)(v=>v*3)      //  ",Be,Ne,Le,P,Ct="          console.log(m(dF3x))     // 42",Ie,V,wt='    For more examples, and to see m-M(x) closures handle asynchronous functions, go to <a href="./async5#yes" class="svelte-rqsz06">Async</a>.',Ue,H,kt="A Fast and Efficient Virtual Rubik's Cube",De,W,_t=`The JavaScript representation of the virtual Rubik's cube visible in the browser is contained in an m-M(x) closure where x starts out as an array of 6 nine-member arrays of strings. All 9 members of x[0] are the string "blue". x[1] is all "green", x[2] all "red", x[3] all "orange", x[4] all "yellow", and the 9 members of x[5] are the string "white".`,Ge,O,Ft=`The virtual Rubik's cube in the DOM and displayed in the browser consists of 9 front-facing buttons, 9 top buttons, and 9 side buttons. Each of the 27 buttons containin a "style = ' background-color: m(dF3x)[ j ][ k ] ' " statements. Since user invoked functions are reactive, and m(dF3x) returns the current value of x in the m-M(x) closure, user key presses and button clicks that rearrange the strings in x immediately rearrange the colors of the 9 squares of each of the three visible sides of the virtual Rubik's cube.`,Je,Q,Mt="Here's the HTML code:",Ve,ce,We,Oe,X,Pt="And here's the JavaScript representation of the virtual Rubik's cube:",Qe,de,Xe,Ye,Y,zt=`After pressing "F", clicking the "F" button, or clicking the upper or lower right side of the front of the virtual cube, x in the m-M(x) rearranges to this configuration:
`,he,Ze,Ke,Z,Rt="And the cube looks like this:",$e,z,Et,et,K,qt=`When a user presses the "F" key, m(F) runs, causing x => F(x). The return value of F(x) when x is in its starting configuration is shown above. Here's the definition of F:

`,me,tt,nt,$,St=`F populates a temporary array "temp" with values taken from locations on x specified by the definition of F. It begins with 
  `,fe,rt,ot,ee,At="F ends with:",lt,ve,at,st,te,Tt=`R replaces the first three elements of temp[5] with whatever strings happen to be at x[0][6], x[0][3]Then F returns temp, causing it to replace the current value of x. The values of the strings F places in temp are not relevant.   locations without regard to whether the strings happen to be "blue", "green", "red", "orange", "yellow", or "white".
`,ne,Ht="Looking at x after the transformation (above), we see that the first thing F(x) does is move the string that happens to be at x[4][6] to x[0][0], Near the bottom of F, we see that x[0][0] goes to x[5][2]. Whatever happened to be at x[5][2] ends up at x[1][8].",it,re,jt=`x remains an array of six nine-member arrays of strings, maintaining its one-to-one correspondence with the six, nine-cubit sides of the virtual Rubik's cube. None of the functions available to users change the structure of x, just as solving a real Rubik's does not change the number of cubits on each side of the cube.
  




`,j,Bt="The Game of Score",ut,oe,Nt=`The <a href="./score#mDef" class="svelte-rqsz06">Solitaire Game of Score</a> involves using two six-sided,
      one twelve-sided, and one twenty-sided die along with arithmetic and concatenation
      to arrive at the number 20 in two or more moves. The initial value of &quot;x&quot; in
      the m-M(x) closure is shown in the definition of m2:`,ct,le,Lt=`m2 = M([ 
    [Math.floor(Math.random() * 6)   + 1, Math.floor(Math.random() * 6) + 1,
     Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
     [], ['+'], [], [0], [], [0], [] 
]);`,xe,R,It="Back to the top",ye,E,dt,Ut;const ht=s[13].default,v=en(ht,s,s[12],null);return{c(){n=r("div"),m=r("h1"),m.textContent=pe,U=l(),C=r("p"),C.textContent=be,D=l(),h=r("div"),B=r("pre"),ae=g(s[11]),se=l(),q=r("pre"),S=g(s[3]),G=l(),w=r("pre"),A=g(s[1]),ie=l(),N=r("pre"),J=g(s[0]),b=l(),ue=r("pre"),ge=g(s[2]),we=l(),L=r("span"),L.textContent=ft,k=r("span"),k.textContent=vt,ke=r("br"),_e=l(),Fe=r("br"),Me=l(),I=r("span"),I.textContent=pt,Pe=l(),ze=r("br"),Re=l(),T=r("span"),T.textContent=bt,Ee=r("br"),qe=l(),_=r("span"),_.textContent=gt,Se=r("br"),Ae=l(),F=r("span"),F.textContent=xt,Te=l(),He=r("br"),je=l(),M=r("span"),M.textContent=yt,Be=l(),Ne=r("br"),Le=l(),P=r("span"),P.textContent=Ct,Ie=l(),V=r("p"),V.innerHTML=wt,Ue=l(),H=r("h1"),H.textContent=kt,De=l(),W=r("p"),W.textContent=_t,Ge=l(),O=r("p"),O.textContent=Ft,Je=l(),Q=r("p"),Q.textContent=Mt,Ve=l(),ce=r("pre"),We=g(s[5]),Oe=l(),X=r("p"),X.textContent=Pt,Qe=l(),de=r("pre"),Xe=g(s[4]),Ye=l(),Y=r("p"),Y.textContent=zt,he=r("pre"),Ze=g(s[6]),Ke=l(),Z=r("p"),Z.textContent=Rt,$e=l(),z=r("img"),et=l(),K=r("p"),K.textContent=qt,me=r("pre"),tt=g(s[7]),nt=l(),$=r("p"),$.textContent=St,fe=r("pre"),rt=g(s[8]),ot=l(),ee=r("p"),ee.textContent=At,lt=l(),ve=r("pre"),at=g(s[9]),st=l(),te=r("p"),te.textContent=Tt,ne=r("p"),ne.textContent=Ht,it=l(),re=r("p"),re.textContent=jt,j=r("h1"),j.textContent=Bt,ut=l(),oe=r("p"),oe.innerHTML=Nt,ct=l(),le=r("pre"),le.textContent=Lt,xe=l(),R=r("a"),R.textContent=It,ye=l(),v&&v.c(),this.h()},l(u){n=o(u,"DIV",{style:!0,id:!0});var t=p(n);m=o(t,"H1",{style:!0,"data-svelte-h":!0}),i(m)!=="svelte-17i9lsv"&&(m.textContent=pe),U=a(t),C=o(t,"P",{style:!0,"data-svelte-h":!0}),i(C)!=="svelte-ocoy07"&&(C.textContent=be),D=a(t),h=o(t,"DIV",{style:!0});var y=p(h);B=o(y,"PRE",{});var Dt=p(B);ae=x(Dt,s[11]),Dt.forEach(d),se=a(y),q=o(y,"PRE",{});var Gt=p(q);S=x(Gt,s[3]),Gt.forEach(d),G=a(y),w=o(y,"PRE",{});var Jt=p(w);A=x(Jt,s[1]),Jt.forEach(d),ie=a(y),N=o(y,"PRE",{});var Vt=p(N);J=x(Vt,s[0]),Vt.forEach(d),b=a(y),ue=o(y,"PRE",{});var Wt=p(ue);ge=x(Wt,s[2]),Wt.forEach(d),y.forEach(d),we=a(t),L=o(t,"SPAN",{class:!0,"data-svelte-h":!0}),i(L)!=="svelte-xx3h5c"&&(L.textContent=ft),k=o(t,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),i(k)!=="svelte-xb783u"&&(k.textContent=vt),ke=o(t,"BR",{}),_e=a(t),Fe=o(t,"BR",{}),Me=a(t),I=o(t,"SPAN",{class:!0,"data-svelte-h":!0}),i(I)!=="svelte-h11p7k"&&(I.textContent=pt),Pe=a(t),ze=o(t,"BR",{}),Re=a(t),T=o(t,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),i(T)!=="svelte-18ergd2"&&(T.textContent=bt),Ee=o(t,"BR",{}),qe=a(t),_=o(t,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),i(_)!=="svelte-1oth1pw"&&(_.textContent=gt),Se=o(t,"BR",{}),Ae=a(t),F=o(t,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),i(F)!=="svelte-4w7o34"&&(F.textContent=xt),Te=a(t),He=o(t,"BR",{}),je=a(t),M=o(t,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),i(M)!=="svelte-jbbdnd"&&(M.textContent=yt),Be=a(t),Ne=o(t,"BR",{}),Le=a(t),P=o(t,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),i(P)!=="svelte-19p6vhb"&&(P.textContent=Ct),Ie=a(t),V=o(t,"P",{"data-svelte-h":!0}),i(V)!=="svelte-alhn9v"&&(V.innerHTML=wt),Ue=a(t),H=o(t,"H1",{style:!0,"data-svelte-h":!0}),i(H)!=="svelte-3x2697"&&(H.textContent=kt),De=a(t),W=o(t,"P",{"data-svelte-h":!0}),i(W)!=="svelte-1gf9qms"&&(W.textContent=_t),Ge=a(t),O=o(t,"P",{"data-svelte-h":!0}),i(O)!=="svelte-1oqwx6j"&&(O.textContent=Ft),Je=a(t),Q=o(t,"P",{"data-svelte-h":!0}),i(Q)!=="svelte-1oicyzr"&&(Q.textContent=Mt),Ve=a(t),ce=o(t,"PRE",{});var Ot=p(ce);We=x(Ot,s[5]),Ot.forEach(d),Oe=a(t),X=o(t,"P",{"data-svelte-h":!0}),i(X)!=="svelte-1v1b7sp"&&(X.textContent=Pt),Qe=a(t),de=o(t,"PRE",{});var Qt=p(de);Xe=x(Qt,s[4]),Qt.forEach(d),Ye=a(t),Y=o(t,"P",{"data-svelte-h":!0}),i(Y)!=="svelte-16yt25q"&&(Y.textContent=zt),he=o(t,"PRE",{});var Xt=p(he);Ze=x(Xt,s[6]),Xt.forEach(d),Ke=a(t),Z=o(t,"P",{"data-svelte-h":!0}),i(Z)!=="svelte-145bh0k"&&(Z.textContent=Rt),$e=a(t),z=o(t,"IMG",{src:!0,alt:!0,style:!0,class:!0}),et=a(t),K=o(t,"P",{"data-svelte-h":!0}),i(K)!=="svelte-rest4g"&&(K.textContent=qt),me=o(t,"PRE",{});var Yt=p(me);tt=x(Yt,s[7]),Yt.forEach(d),nt=a(t),$=o(t,"P",{"data-svelte-h":!0}),i($)!=="svelte-1go0zhe"&&($.textContent=St),fe=o(t,"PRE",{});var Zt=p(fe);rt=x(Zt,s[8]),Zt.forEach(d),ot=a(t),ee=o(t,"P",{"data-svelte-h":!0}),i(ee)!=="svelte-le3lti"&&(ee.textContent=At),lt=a(t),ve=o(t,"PRE",{});var Kt=p(ve);at=x(Kt,s[9]),Kt.forEach(d),st=a(t),te=o(t,"P",{"data-svelte-h":!0}),i(te)!=="svelte-s1x5ja"&&(te.textContent=Tt),ne=o(t,"P",{"data-svelte-h":!0}),i(ne)!=="svelte-ei6jrz"&&(ne.textContent=Ht),it=a(t),re=o(t,"P",{"data-svelte-h":!0}),i(re)!=="svelte-11ayztk"&&(re.textContent=jt),j=o(t,"H1",{style:!0,"data-svelte-h":!0}),i(j)!=="svelte-13ler7r"&&(j.textContent=Bt),ut=a(t),oe=o(t,"P",{"data-svelte-h":!0}),i(oe)!=="svelte-sknn1e"&&(oe.innerHTML=Nt),ct=a(t),le=o(t,"PRE",{"data-svelte-h":!0}),i(le)!=="svelte-1fbr1ln"&&(le.textContent=Lt),t.forEach(d),xe=a(u),R=o(u,"A",{href:!0,class:!0,"data-svelte-h":!0}),i(R)!=="svelte-1887boa"&&(R.textContent=It),ye=a(u),v&&v.l(u),this.h()},h(){c(m,"text-align","center"),c(m,"color","#f5ee9f"),c(C,"text-indent","3% "),f(h,"style","<color:#880000; font-size:32"),f(L,"class","svelte-rqsz06"),c(k,"color","#f5ee9f"),c(k,"font-size","28px"),f(k,"class","svelte-rqsz06"),f(I,"class","svelte-rqsz06"),c(T,"color","#f5ee9f"),f(T,"class","svelte-rqsz06"),c(_,"color","#f5ee9f"),c(_,"font-size","28px"),f(_,"class","svelte-rqsz06"),c(F,"color","#f5ee9f"),c(F,"font-size","28px"),f(F,"class","svelte-rqsz06"),c(M,"color","#f5ee9f"),c(M,"font-size","28px"),f(M,"class","svelte-rqsz06"),c(P,"color","#f5ee9f"),c(P,"font-size","28px"),f(P,"class","svelte-rqsz06"),c(H,"text-align","center"),c(H,"color","#f5ee9f"),tn(z.src,Et=dn)||f(z,"src",Et),f(z,"alt","Cube after F"),c(z,"width","150px"),c(z,"height","155px"),f(z,"class","svelte-rqsz06"),c(j,"text-align","center"),c(j,"color","#f5ee9f"),c(n,"margin-left","8%"),c(n,"margin-right","8%"),f(n,"id","top"),f(R,"href","#top"),f(R,"class","svelte-rqsz06")},m(u,t){Ce(u,n,t),e(n,m),e(n,U),e(n,C),e(n,D),e(n,h),e(h,B),e(B,ae),e(h,se),e(h,q),e(q,S),e(h,G),e(h,w),e(w,A),e(h,ie),e(h,N),e(N,J),e(h,b),e(h,ue),e(ue,ge),e(n,we),e(n,L),e(n,k),e(n,ke),e(n,_e),e(n,Fe),e(n,Me),e(n,I),e(n,Pe),e(n,ze),e(n,Re),e(n,T),e(n,Ee),e(n,qe),e(n,_),e(n,Se),e(n,Ae),e(n,F),e(n,Te),e(n,He),e(n,je),e(n,M),e(n,Be),e(n,Ne),e(n,Le),e(n,P),e(n,Ie),e(n,V),e(n,Ue),e(n,H),e(n,De),e(n,W),e(n,Ge),e(n,O),e(n,Je),e(n,Q),e(n,Ve),e(n,ce),e(ce,We),e(n,Oe),e(n,X),e(n,Qe),e(n,de),e(de,Xe),e(n,Ye),e(n,Y),e(n,he),e(he,Ze),e(n,Ke),e(n,Z),e(n,$e),e(n,z),e(n,et),e(n,K),e(n,me),e(me,tt),e(n,nt),e(n,$),e(n,fe),e(fe,rt),e(n,ot),e(n,ee),e(n,lt),e(n,ve),e(ve,at),e(n,st),e(n,te),e(n,ne),e(n,it),e(n,re),e(n,j),e(n,ut),e(n,oe),e(n,ct),e(n,le),Ce(u,xe,t),Ce(u,R,t),Ce(u,ye,t),v&&v.m(u,t),E=!0,dt||(Ut=sn(window,"keypress",s[10]),dt=!0)},p(u,t){(!E||t[0]&2)&&mt(A,u[1]),(!E||t[0]&1)&&mt(J,u[0]),(!E||t[0]&4)&&mt(ge,u[2]),v&&v.p&&(!E||t[0]&4096)&&nn(v,ht,u,u[12],E?on(ht,u[12],t,null):rn(u[12]),null)},i(u){E||(un(v,u),E=!0)},o(u){cn(v,u),E=!1},d(u){u&&(d(n),d(xe),d(R),d(ye)),v&&v.d(u),dt=!1,Ut()}}}function mn(s,n,m){let{$$slots:pe={},$$scope:U}=n;var C=`    function M (x) {
      return function go (func)
        {
            if (func === dF3x) return x;
            else x = func(x);
            return go;
        }
    }`,D='m = M([ ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], ["green", "green", "green", "green", "green", "green", "green", "green", "green"], ["red", "red", "red", "red", "red", "red", "red", "red", "red"], ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"], ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"], ["white", "white", "white", "white", "white", "white", "white", "white", "white"] ]);',be=`<div class="face front">
                <div class="grid">
                    <button style="background-color: {m(dF3x)[3][0]}" on:click={() => {m = m(Fz)}}/>
                    <button style="background-color: {m(dF3x)[3][1]}" on:click={() => {m = m(Cx)}}/>
                    <button style="background-color: {m(dF3x)[3][2]}" on:click={() => {m = m(F)}}/>
                    <button style="background-color: {m(dF3x)[3][3]}" on:click={() => {m = m(Cyr)}}/>
                    <button style="background-color: {m(dF3x)[3][4]}" on:click={() => {m = m(Zro)}}/>
                    <button style="background-color: {m(dF3x)[3][5]}" on:click={() => {m = m(Cy)}}/>
                    <button style="background-color: {m(dF3x)[3][6]}" on:click={() => {m = m(Fz)}}/>
                    <button style="background-color: {m(dF3x)[3][7]}" on:click={() => {m = m(Cxr)}}/>
                    <button style="background-color: {m(dF3x)[3][8]}" on:click={() => {m = m(F)}}/>
                </div>
            </div>

            <div class="face right">
                <div class="grid">
                    <button style="background-color: {m(dF3x)[0][0]}" on:click={() => {m = m(Rz)}}/>
                    <button style="background-color: {m(dF3x)[0][1]}" on:click={() => {m = m(Cz)}}/>
                    <button style="background-color: {m(dF3x)[0][2]}" on:click={() => {m = m(R)}}/>
                    <button style="background-color: {m(dF3x)[0][3]}" on:click={() => {m = m(Cyr)}}/>
                    <button style="background-color: {m(dF3x)[0][4]}" on:click={() => {m = m(Xro)}}/>
                    <button style="background-color: {m(dF3x)[0][5]}" on:click={() => {m = m(Cy)}}/>
                    <button style="background-color: {m(dF3x)[0][6]}" on:click={() => {m = m(Rz)}}/>
                    <button style="background-color: {m(dF3x)[0][7]}" on:click={() => {m = m(Czr)}}/>
                    <button style="background-color: {m(dF3x)[0][8]}" on:click={() => {m = m(R)}}/>
                </div>
            </div>
            <div class="face top">
                <div class="grid">
                    <button style="background-color: {m(dF3x)[4][0]}" on:click={() => {m = m(Uz)}}/>
                    <button style="background-color: {m(dF3x)[4][1]}" on:click={() => {m = m(Cx)}}/>
                    <button style="background-color: {m(dF3x)[4][2]}" on:click={() => {m = m(U)}}/>
                    <button style="background-color: {m(dF3x)[4][3]}" on:click={() => {m = m(Cz)}}/>
                    <button style="background-color: {m(dF3x)[4][4]}" on:click={() => {m = m(Yro)}}/>
                    <button style="background-color: {m(dF3x)[4][5]}" on:click={() => {m = m(Czr)}}/>
                    <button style="background-color: {m(dF3x)[4][6]}" on:click={() => {m = m(Uz)}}/>
                    <button style="background-color: {m(dF3x)[4][7]}" on:click={() => {m = m(Cxr)}}/>
                    <button style="background-color: {m(dF3x)[4][8]}" on:click={() => {m = m(U)}}/>
                </div>        
            </div>`,D=`      var m = M([ ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
      ["green", "green", "green", "green", "green", "green", "green", "green", "green"],
      ["red", "red", "red", "red", "red", "red", "red", "red", "red"],
      ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"],
      ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"],
      ["white", "white", "white", "white", "white", "white", "white", "white", "white"] ]);`,h=`      var m = M([ ["yellow", "blue", "blue", "yellow", "blue", "blue", "yellow", "blue", "blue"],
      ["green", "green", "white", "green", "green", "white", "green", "green", "white"],
      ["red", "red", "red", "red", "red", "red", "red", "red", "red"],
      ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"],
      ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "green", "green", "green"],
      ["blue", "blue", "blue", "white", "white", "white", "white", "white", "white"] ]);`,B=`function F(ar) {
    let temp = [];
    temp[0] = [
      ar[4][6],
      ar[0][1],
      ar[0][2],
      ar[4][7],
      ar[0][4],
      ar[0][5],
      ar[4][8],
      ar[0][7],
      ar[0][8],
    ];

    temp[1] = [
      ar[1][0],
      ar[1][1],
      ar[5][0],
      ar[1][3],
      ar[1][4],
      ar[5][1],
      ar[1][6],
      ar[1][7],
      ar[5][2],
    ];

    temp[2] = ar[2];

    temp[3] = [
      ar[3][6],
      ar[3][3],
      ar[3][0],
      ar[3][7],
      ar[3][4],
      ar[3][1],
      ar[3][8],
      ar[3][5],
      ar[3][2],
    ];

    temp[4] = [
      ar[4][0],
      ar[4][1],
      ar[4][2],
      ar[4][3],
      ar[4][4],
      ar[4][5],
      ar[1][8],
      ar[1][5],
      ar[1][2],
    ];

    temp[5] = [
      ar[0][6],
      ar[0][3],
      ar[0][0],
      ar[5][3],
      ar[5][4],
      ar[5][5],
      ar[5][6],
      ar[5][7],
      ar[5][8],
    ];
    return temp;
} `,ae=`let temp = [];
temp[0] = [
ar[4][6]`,se=`temp[5] = [
    ar[0][6],
    ar[0][3],
    ar[0][0],
    ar[5][3],
    ar[5][4],
    ar[5][5],
    ar[5][6],
    ar[5][7],
    ar[5][8], ];
return temp;
`,q="",S="",G="";function*w(){yield"m(dF3x) // 3 (as expected from the definition of M)",yield"m(v=>v**3) . . . causing 3 => 3**3 = 27",yield"m(dF3x) // 27 (as expected)",yield"m(v=>v*2)(v=>v-12) evaluates from left to right; i.e., (2 * 27) - 12.",yield"m(dF3x)  // 42",yield"m(v=>v+7)(Math.sqrt)(dF3x)  // x in the m-M(x) closure is now sqrt(42 + 7) = 7",yield"m(v = v * 6) // Back to 42",yield"m(dF3x)  // 42, as expected",yield m(0,q=""),yield m(1,S=""),yield"",A=w()}var A=w();function ie(){m(1,S="m = M(3) defines m and an m-M(x) closure holding the number 3");var b=A.next().value;return b!=null?m(2,G=b):(m(1,S=""),w()),A}function N(b){b.keyCode===59&&ie()}var J="    const dF3x = () => {}";return s.$$set=b=>{"$$scope"in b&&m(12,U=b.$$scope)},[q,S,G,C,D,be,h,B,ae,se,N,J,U,pe]}class pn extends ln{constructor(n){super(),an(this,n,mn,hn,$t,{},null,[-1,-1])}}export{pn as component};
