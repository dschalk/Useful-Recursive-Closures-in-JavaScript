import{s as ur,e as cr,u as dr,g as fr,h as hr,a as Ve}from"../chunks/Bv-lJKiI.js";import{S as pr,i as mr,d as o,u as br,v as vr,n as xr,a as u,j as n,p as gr,l as h,s as w,c as s,k as b,g as d,b as l,h as v,e as a,f as i,t as x}from"../chunks/D2RDcUeg.js";import{C as yr}from"../chunks/0QC4vc8C.js";const wr=""+new URL("../assets/Screenshot3.DxsvaAW-.png",import.meta.url).href,Cr=""+new URL("../assets/shot4.CAgxQU-n.png",import.meta.url).href,kr=""+new URL("../assets/shot5.DZwVWERr.png",import.meta.url).href,Mr=""+new URL("../assets/shot6.24Ct7-Ci.png",import.meta.url).href;function Fr(c){let r,C,We="Recursive Closures",me,k,He=`This website explores some of the useful features of m-M(x) closures; i.e., closures created instantiated by statements "m = M(x)", where x can be any value, and the simplest definition of "M" is:
 
  `,p,qe,be,I,Ze='A modified version of M can be found at <a href="./cube" class="svelte-cxunpl">Rubik&#39;s cube example </a>, where M holds an array of function names, making it convenient for players to reverse a series of moves by repeatedly pressing the &quot;Q&quot; key (see <a href="./cube#reverse" class="svelte-cxunpl">function reverse</a>. Another variant of M is demonstrated at <a href="./async5" class="svelte-cxunpl">Synchronous and Asynchronous Functions Handled</a> where the line &quot;x = func(x)&quot; in M (above) is replaced by &quot;x = idP(x).then(v =&gt; func(v))&quot;, idP(x),and where idP(x) returns a promise holding x.',X,T,Ge="The above definition of M is no more complex than needed to demonstrate the core features of m-M(x) closures. Unless you are sure it is unnecessary, it might be wise to include a try-catch block in the definition of M to handle values of func that are not dF3x, are not functions, or are functions that are incompatible with x. Sometimes, you might even check for functions that change x in a way that makes it incompatible with other necessary functions.",ze,z,Xe="Function Composition",Ae,A,Qe='Instead of writing f1(f2(f3(f4(f5(x))))), which can get very messy if the five functions are verbose, you can (A) write m(f1)(f2)(f3)(f4)(f5) where m = M(x) to preserve the modified value of x in the m-M(x) closure for future transformations, for example running m(f6)(f7) at a later time, or for use of the value m(dF3x), for example, console.log("The final result is", m(dF3x)).',Le,Y,Je,B,Ne,Ie,L,$e="Isolation of Sequences of Computations",P,R,Ke='The virtual Rubik&#39;s cube shown on the <a href="./cube" class="svelte-cxunpl">Rubik&#39;s cube page</a> demonstrates key presses and button clicks turning the sides, middle sections, or entire body of the virtual Rubik&#39;s cube that is displayed in browsers. The application code contains two entwined representations of the cube; one written in JavaScript, and the other in HTML.',F,g,O="The Two Representations of the Virtual Cube",j,y,et=`The JavaScript representation of the virtual Rubik's cube consists of 54 strings contained in an array of six nine-member arrays. This array of arrays is "x" in the application's m-M(x) closure. "m" handles events triggered by key presses and mouse clicks. Events that rearrange strings in the m-M(x) closure cause m to operate on one of the functions (let's call it "func") defined within the script tags. Pursuant to the definition of M, m(func) rearranges the strings of x, mutating x to func(x).`,ve,U,tt='The HTML representation of the cube consists of 54 buttons contained in an array of three nine-member arrays, corresponding to the three sides of the cube which are visible in the browser: front, top, and right. Rotating the virtual cube does not change this fact. For example, clicking the top center square, clicking "Y", and pressing the "Y" key changes x in the m-M(x) closure and also in the DOM, since m(dF3x) is x pursuant to the definition of M.',f,m,_,Q,J,hn=`by x in an m-M(x) closure, where x is an aAny andrray of six nine-member arrays of the strings "blue", "green", "red", "orange", "yellow", and "white". These clicks and key presses call m on functions, causing those functions to operate on the Rubik's cube representation in the m-M(x) closure. Rearranging the color strings of x, which are reactive and embedded in the DOM as "background-color = m(dF3x)[j][k]" for j between 0 and 6, and k between 0 and 9, automatically transforms the background colors of the buttons that comprise the Rubik's cube representation in the DOM. Rearranging the buttons'background colors creates the appearance, in the browser, of the virtual Rubik's cube, or one of its sides or middle sections, rotating 45 degrees. For example, The top, center square seen in the browser corresponds to this button element in the DOM:`,St,xe,pn="The function Yro rearranges the virtual Rubik's cube seen in the monitor in a manner corresponding to a 45-degree clockwise rotation of the entire Rubik's cube around the vertical axis. It operates on x inside of the m-M(x) closure, insulated from possible interactions with other JavaScript code. The only side effects are changes in the HTML buttons' background colors.",Et,Ye,Dt,Ht,ge,mn="The illustration below shows the color changes that are seen in browser monitors when the center square on the top of a solved virtual Rubik's cube is clicked three times. The color strings of the x array of arrays in the m-M(x) closure rearrange to Yro(x). Overall, three clicks change x to Yro(Yro(Yro(x))). The definition of Yro is in the appendix at the bottom of this page.",qt,S,bn,zt,E,vn,At,D,xn,Lt,H,gn,Jt,$,yn="Cloning With Astonishing Ease",Nt,K,wn='Cloning is discussed on the <a href="./clone" class="svelte-cxunpl">Clone</a> page. Deeply nested, self-referential, function-containing, complex and complicated objects are cloned with the greatest of ease.',It,ee,Cn="Modifying M For Special Purposes",Yt,ye,kn='The definition of M can be modified to avoid mutation (push new results into an array, for example), reverse a series of actions as in the<a href="cube#star" class="svelte-cxunpl">Rubik&#39;s cube</a> example, handle asynchronous functions, as in <a href="./cube#reverse" class="svelte-cxunpl">the cube reverse function</a>,  <a href="./async5#yes" class="svelte-cxunpl">Async</a>, and other purposes.',Bt,we,Mn="M2, a modified version of M, returns functions that can operate on synchronous and asynchronous, in any order:",Ut,Be,Vt,Wt,nt,Zt,te,Fn="Efficiently Crunching Numbers",Gt,Ce,jn='<a href="./game2" class="svelte-cxunpl">Martingale</a> runs the Martingale betting strategy millions of times, demonstrating that even-odds games of chance are, in the long run, break-even endeavors. Sometimes you end up ahead, sometimes behind. The Martingale strategy doesn&#39;t change that.',Xt,ke,_n='to show that it neither increases nor decreases the odds of coming out ahead. x in the m(x)-M closure is [starting amount,1,goal,0] where "starting amount" is the amount of money the player tries to double. "goal is fixed, starting at "starting amount. m operates on the function "f1", which randomly generates 0 or 1 wth equal probability, increasing or decreasing v[1] (the mount of the bet) and v[0] (the players current stake).',Qt,Me,Pn='If you go to <a href="./game2" class="svelte-cxunpl">Martingale</a>, you can try it yourself, learn the betting algorithm, and see the outcomes of tens of thousands of coin flips. m needs only one function, f1, shown below.',$t,Ue,Kt,rt,N,On="Back to the top",ot,st,at,V,Tn="Appendix",lt,W,Rn="The Virtual Rubik's Cube",it,ne,Sn='Additional discussion is at <a href="./cube" class="svelte-cxunpl">Virtual Rubik&#39;s Cube</a>',ut,re,En=`In the m-M(x) representation of a Rubik's cube as an array of six nine-member arrays of strings, the solved cube is x = ([ ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
      ["green", "green", "green", "green", "green", "green", "green", "green", "green"],
      ["red", "red", "red", "red", "red", "red", "red", "red", "red"],
      ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"],
      ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"],
      ["white", "white", "white", "white", "white", "white", "white", "white", "white"] ]  The default orientation of the visible sides of a solved cube is yellow on top, blue on the right, and orange facing outward.`,ct,oe,Dn=`When m(Yro) executes, Yro constructs an array of six nine-member arrays named "temp," using the 54 strings constituting x in its current state. Finally, pursuant to the definition of M, x = temp, the return value of Yro(x). Here's the definition of Yro:`,dt,Fe,en,ft,Z,Hn="Further Discussion of the Fast and Efficient Virtual Rubik's Cube",ht,se,qn='Some of the code responsible for the <a href="./cube" class="svelte-cxunpl">virtual Rubik&#39;s cube</a> is shown below. Here&#39;s the HTML code:',pt,je,tn,mt,ae,zn=`A JavaScript representation of a solved virtual Rubik's cube is shown below. 'x' in the m-M(x) closure is an array of six nine-member arrays of strings. x[0] contains nine copies of "blue". The code that determines the colors of the initial right side of the virtual cube displayed in the broswer is shown in the middle block of HTML buttons above. Each of the nine lines specifies background-colors which are elements of x[0], all of which are "blue" when the m-M(x) closure is defined.`,bt,_e,nn,vt,le,An=`After pressing "F", clicking the "F" button, or clicking the upper or lower right side of the front of the virtual cube, x in the m-M(x) closure rearranges to this configuration:
`,Pe,rn,xt,ie,Ln="And the cube looks like this:",gt,q,Jn,yt,ue,Nn="Here's the definition of F:",wt,Oe,on,Ct,ce,In='F populates a temporary array "temp" with values taken from locations on the current configuration of x. It populates temp[0][0], temp[0][3], temp[0][6], with whatever strings happen to be at x[4][2], x[4][5], and x[4][8]. When m(F) returns temp, temp becomes the value of x in the m-M(x) closure.',kt,G,Yn='Additional Protection of "x" in m-M(x) closures',Mt,de,Bn='If x is not a primitive value, changing m(dF3x) changes x in the m-M(x) closure. This can be convenient, as in the function &quot;reverse&quot; in <a href="./cube" class="svelte-cxunpl">Rubik&#39;s Cube</a>. The array &quot;ar&quot; in the modified definition of M holds an array of the names of the functions called when users press keys or click buttons that change the virtual Rubik&#39;s cube. m(dF3ar) returns ar. &quot;ob&quot; is an object that produces the inverse of the Rubik&#39;s cube manipulation functions. For example, ob.R is Rz, the inverse of R. Here are the definitions of reverse and ob:',Ft,Te,sn,jt,Re,an,_t,fe,Un="",Pt,Se,ln,Ot,he,Vn="While not universally effective, this method covers many cases:",Tt,Ee,un,Rt,pe,cn,Wn;const dn=c[18].default,M=cr(dn,c,c[17],null);return{c(){r=a("div"),C=a("h1"),C.textContent=We,me=i(),k=a("p"),k.textContent=He,p=a("pre"),qe=x(c[6]),be=i(),I=a("p"),I.innerHTML=Ze,X=i(),T=a("p"),T.textContent=Ge,ze=i(),z=a("h2"),z.textContent=Xe,Ae=i(),A=a("p"),A.textContent=Qe,Le=i(),Y=a("p"),Je=x("Alternatively, M(v)(f1)(f2)(f3)(f4)(f5)(dF3x) returns the result of running five functions on some value v, leaving the temporary closure for the garbage collector to delete. This anonymous, and therefore temporary, closure returns 10 after taking the square root of ((3 cubed times 4) minus 8): "),B=a("span"),Ne=x(c[7]),Ie=i(),L=a("h2"),L.textContent=$e,P=i(),R=a("p"),R.innerHTML=Ke,F=i(),g=a("h2"),g.textContent=O,j=i(),y=a("p"),y.textContent=et,ve=i(),U=a("p"),U.textContent=tt,f=i(),m=a("pre"),_=x(c[10]),Q=i(),J=a("p"),J.textContent=hn,St=i(),xe=a("p"),xe.textContent=pn,Et=i(),Ye=a("pre"),Dt=x(c[9]),Ht=i(),ge=a("p"),ge.textContent=mn,qt=i(),S=a("img"),zt=i(),E=a("img"),At=i(),D=a("img"),Lt=i(),H=a("img"),Jt=i(),$=a("div"),$.textContent=yn,Nt=i(),K=a("p"),K.innerHTML=wn,It=i(),ee=a("div"),ee.textContent=Cn,Yt=i(),ye=a("p"),ye.innerHTML=kn,Bt=i(),we=a("p"),we.textContent=Mn,Ut=i(),Be=a("pre"),Vt=x(c[16]),Wt=i(),nt=x(c[0]),Zt=i(),te=a("div"),te.textContent=Fn,Gt=i(),Ce=a("p"),Ce.innerHTML=jn,Xt=i(),ke=a("p"),ke.textContent=_n,Qt=i(),Me=a("p"),Me.innerHTML=Pn,$t=i(),Ue=a("pre"),Kt=x(c[8]),rt=i(),N=a("a"),N.textContent=On,ot=i(),st=a("br"),at=i(),V=a("div"),V.textContent=Tn,lt=i(),W=a("div"),W.textContent=Rn,it=i(),ne=a("p"),ne.innerHTML=Sn,ut=i(),re=a("p"),re.textContent=En,ct=i(),oe=a("p"),oe.textContent=Dn,dt=i(),Fe=a("pre"),en=x(c[11]),ft=i(),Z=a("h1"),Z.textContent=Hn,ht=i(),se=a("p"),se.innerHTML=qn,pt=i(),je=a("pre"),tn=x(c[2]),mt=i(),ae=a("p"),ae.textContent=zn,bt=i(),_e=a("pre"),nn=x(c[1]),vt=i(),le=a("p"),le.textContent=An,Pe=a("pre"),rn=x(c[3]),xt=i(),ie=a("p"),ie.textContent=Ln,gt=i(),q=a("img"),yt=i(),ue=a("p"),ue.textContent=Nn,wt=i(),Oe=a("pre"),on=x(c[4]),Ct=i(),ce=a("p"),ce.textContent=In,kt=i(),G=a("div"),G.textContent=Yn,Mt=i(),de=a("p"),de.innerHTML=Bn,Ft=i(),Te=a("pre"),sn=x(c[15]),jt=i(),Re=a("pre"),an=x(c[14]),_t=i(),fe=a("p"),fe.innerHTML=Un,Pt=i(),Se=a("pre"),ln=x(c[12]),Ot=i(),he=a("p"),he.textContent=Vn,Tt=i(),Ee=a("pre"),un=x(c[13]),Rt=i(),M&&M.c(),this.h()},l(e){r=s(e,"DIV",{style:!0,id:!0});var t=b(r);C=s(t,"H1",{class:!0,"data-svelte-h":!0}),d(C)!=="svelte-zjsxjc"&&(C.textContent=We),me=l(t),k=s(t,"P",{"data-svelte-h":!0}),d(k)!=="svelte-1eulq29"&&(k.textContent=He),p=s(t,"PRE",{});var Zn=b(p);qe=v(Zn,c[6]),Zn.forEach(o),be=l(t),I=s(t,"P",{"data-svelte-h":!0}),d(I)!=="svelte-7d4zne"&&(I.innerHTML=Ze),X=l(t),T=s(t,"P",{"data-svelte-h":!0}),d(T)!=="svelte-179kzq"&&(T.textContent=Ge),ze=l(t),z=s(t,"H2",{class:!0,"data-svelte-h":!0}),d(z)!=="svelte-1k4tiok"&&(z.textContent=Xe),Ae=l(t),A=s(t,"P",{"data-svelte-h":!0}),d(A)!=="svelte-dkque2"&&(A.textContent=Qe),Le=l(t),Y=s(t,"P",{});var fn=b(Y);Je=v(fn,"Alternatively, M(v)(f1)(f2)(f3)(f4)(f5)(dF3x) returns the result of running five functions on some value v, leaving the temporary closure for the garbage collector to delete. This anonymous, and therefore temporary, closure returns 10 after taking the square root of ((3 cubed times 4) minus 8): "),B=s(fn,"SPAN",{class:!0});var Gn=b(B);Ne=v(Gn,c[7]),Gn.forEach(o),fn.forEach(o),Ie=l(t),L=s(t,"H2",{class:!0,"data-svelte-h":!0}),d(L)!=="svelte-16tw4wu"&&(L.textContent=$e),P=l(t),R=s(t,"P",{"data-svelte-h":!0}),d(R)!=="svelte-qwztwm"&&(R.innerHTML=Ke),F=l(t),g=s(t,"H2",{class:!0,"data-svelte-h":!0}),d(g)!=="svelte-1noahtr"&&(g.textContent=O),j=l(t),y=s(t,"P",{"data-svelte-h":!0}),d(y)!=="svelte-nf9bfy"&&(y.textContent=et),ve=l(t),U=s(t,"P",{"data-svelte-h":!0}),d(U)!=="svelte-fr4euz"&&(U.textContent=tt),f=l(t),m=s(t,"PRE",{});var Xn=b(m);_=v(Xn,c[10]),Xn.forEach(o),Q=l(t),J=s(t,"P",{"data-svelte-h":!0}),d(J)!=="svelte-1nb4i5k"&&(J.textContent=hn),St=l(t),xe=s(t,"P",{"data-svelte-h":!0}),d(xe)!=="svelte-s51nih"&&(xe.textContent=pn),Et=l(t),Ye=s(t,"PRE",{});var Qn=b(Ye);Dt=v(Qn,c[9]),Qn.forEach(o),Ht=l(t),ge=s(t,"P",{"data-svelte-h":!0}),d(ge)!=="svelte-1q8puul"&&(ge.textContent=mn),qt=l(t),S=s(t,"IMG",{src:!0,alt:!0,style:!0,class:!0}),zt=l(t),E=s(t,"IMG",{src:!0,alt:!0,style:!0,class:!0}),At=l(t),D=s(t,"IMG",{src:!0,alt:!0,style:!0,class:!0}),Lt=l(t),H=s(t,"IMG",{src:!0,alt:!0,style:!0,class:!0}),Jt=l(t),$=s(t,"DIV",{class:!0,"data-svelte-h":!0}),d($)!=="svelte-1dux413"&&($.textContent=yn),Nt=l(t),K=s(t,"P",{class:!0,"data-svelte-h":!0}),d(K)!=="svelte-firr0a"&&(K.innerHTML=wn),It=l(t),ee=s(t,"DIV",{class:!0,"data-svelte-h":!0}),d(ee)!=="svelte-1pg5tyq"&&(ee.textContent=Cn),Yt=l(t),ye=s(t,"P",{"data-svelte-h":!0}),d(ye)!=="svelte-1spjgdz"&&(ye.innerHTML=kn),Bt=l(t),we=s(t,"P",{"data-svelte-h":!0}),d(we)!=="svelte-9fpn70"&&(we.textContent=Mn),Ut=l(t),Be=s(t,"PRE",{});var $n=b(Be);Vt=v($n,c[16]),$n.forEach(o),Wt=l(t),nt=v(t,c[0]),Zt=l(t),te=s(t,"DIV",{class:!0,"data-svelte-h":!0}),d(te)!=="svelte-3a8njy"&&(te.textContent=Fn),Gt=l(t),Ce=s(t,"P",{"data-svelte-h":!0}),d(Ce)!=="svelte-1uultj9"&&(Ce.innerHTML=jn),Xt=l(t),ke=s(t,"P",{"data-svelte-h":!0}),d(ke)!=="svelte-s959ff"&&(ke.textContent=_n),Qt=l(t),Me=s(t,"P",{"data-svelte-h":!0}),d(Me)!=="svelte-vude9i"&&(Me.innerHTML=Pn),$t=l(t),Ue=s(t,"PRE",{});var Kn=b(Ue);Kt=v(Kn,c[8]),Kn.forEach(o),t.forEach(o),rt=l(e),N=s(e,"A",{href:!0,class:!0,"data-svelte-h":!0}),d(N)!=="svelte-1887boa"&&(N.textContent=On),ot=l(e),st=s(e,"BR",{}),at=l(e),V=s(e,"DIV",{class:!0,"data-svelte-h":!0}),d(V)!=="svelte-ak8q84"&&(V.textContent=Tn),lt=l(e),W=s(e,"DIV",{class:!0,"data-svelte-h":!0}),d(W)!=="svelte-mb6ace"&&(W.textContent=Rn),it=l(e),ne=s(e,"P",{"data-svelte-h":!0}),d(ne)!=="svelte-1en07ms"&&(ne.innerHTML=Sn),ut=l(e),re=s(e,"P",{"data-svelte-h":!0}),d(re)!=="svelte-1ojsfva"&&(re.textContent=En),ct=l(e),oe=s(e,"P",{"data-svelte-h":!0}),d(oe)!=="svelte-1q1psh7"&&(oe.textContent=Dn),dt=l(e),Fe=s(e,"PRE",{});var er=b(Fe);en=v(er,c[11]),er.forEach(o),ft=l(e),Z=s(e,"H1",{class:!0,"data-svelte-h":!0}),d(Z)!=="svelte-jur4mx"&&(Z.textContent=Hn),ht=l(e),se=s(e,"P",{"data-svelte-h":!0}),d(se)!=="svelte-1ah6ryy"&&(se.innerHTML=qn),pt=l(e),je=s(e,"PRE",{});var tr=b(je);tn=v(tr,c[2]),tr.forEach(o),mt=l(e),ae=s(e,"P",{"data-svelte-h":!0}),d(ae)!=="svelte-1orwi6g"&&(ae.textContent=zn),bt=l(e),_e=s(e,"PRE",{});var nr=b(_e);nn=v(nr,c[1]),nr.forEach(o),vt=l(e),le=s(e,"P",{"data-svelte-h":!0}),d(le)!=="svelte-15xi2ir"&&(le.textContent=An),Pe=s(e,"PRE",{});var rr=b(Pe);rn=v(rr,c[3]),rr.forEach(o),xt=l(e),ie=s(e,"P",{"data-svelte-h":!0}),d(ie)!=="svelte-145bh0k"&&(ie.textContent=Ln),gt=l(e),q=s(e,"IMG",{src:!0,alt:!0,style:!0,class:!0}),yt=l(e),ue=s(e,"P",{"data-svelte-h":!0}),d(ue)!=="svelte-1odlfg9"&&(ue.textContent=Nn),wt=l(e),Oe=s(e,"PRE",{});var or=b(Oe);on=v(or,c[4]),or.forEach(o),Ct=l(e),ce=s(e,"P",{"data-svelte-h":!0}),d(ce)!=="svelte-v62ybc"&&(ce.textContent=In),kt=l(e),G=s(e,"DIV",{class:!0,"data-svelte-h":!0}),d(G)!=="svelte-131ofdm"&&(G.textContent=Yn),Mt=l(e),de=s(e,"P",{"data-svelte-h":!0}),d(de)!=="svelte-1kq13qy"&&(de.innerHTML=Bn),Ft=l(e),Te=s(e,"PRE",{});var sr=b(Te);sn=v(sr,c[15]),sr.forEach(o),jt=l(e),Re=s(e,"PRE",{});var ar=b(Re);an=v(ar,c[14]),ar.forEach(o),_t=l(e),fe=s(e,"P",{"data-svelte-h":!0}),d(fe)!=="svelte-1cfqa3s"&&(fe.innerHTML=Un),Pt=l(e),Se=s(e,"PRE",{});var lr=b(Se);ln=v(lr,c[12]),lr.forEach(o),Ot=l(e),he=s(e,"P",{"data-svelte-h":!0}),d(he)!=="svelte-517zjw"&&(he.textContent=Vn),Tt=l(e),Ee=s(e,"PRE",{});var ir=b(Ee);un=v(ir,c[13]),ir.forEach(o),Rt=l(e),M&&M.l(e),this.h()},h(){h(C,"class","middle svelte-cxunpl"),h(z,"class","svelte-cxunpl"),h(B,"class","or svelte-cxunpl"),h(L,"class","svelte-cxunpl"),h(g,"class","svelte-cxunpl"),Ve(S.src,bn=wr)||h(S,"src",bn),h(S,"alt","Screenshot3.png"),w(S,"width","100px"),w(S,"height","104px"),w(S,"color","#44ff33"),h(S,"class","svelte-cxunpl"),Ve(E.src,vn=Cr)||h(E,"src",vn),h(E,"alt","Screenshot3.png"),w(E,"width","100px"),w(E,"height","104px"),w(E,"color","#44ff33"),h(E,"class","svelte-cxunpl"),Ve(D.src,xn=kr)||h(D,"src",xn),h(D,"alt","Screenshot3.png"),w(D,"width","100px"),w(D,"height","104px"),w(D,"color","#44ff33"),h(D,"class","svelte-cxunpl"),Ve(H.src,gn=Mr)||h(H,"src",gn),h(H,"alt","Screenshot3.png"),w(H,"width","100px"),w(H,"height","104px"),w(H,"color","#44ff33"),h(H,"class","svelte-cxunpl"),h($,"class","h3 svelte-cxunpl"),h(K,"class","i3 svelte-cxunpl"),h(ee,"class","h3 svelte-cxunpl"),h(te,"class","h2 svelte-cxunpl"),w(r,"margin-left","8%"),w(r,"margin-right","8%"),h(r,"id","top"),h(N,"href","#top"),h(N,"class","svelte-cxunpl"),h(V,"class","h2 svelte-cxunpl"),h(W,"class","h3 svelte-cxunpl"),h(Z,"class","middle2 svelte-cxunpl"),Ve(q.src,Jn=yr)||h(q,"src",Jn),h(q,"alt","Right side turned"),w(q,"width","150px"),w(q,"height","155px"),h(q,"class","svelte-cxunpl"),h(G,"class","h3 svelte-cxunpl")},m(e,t){u(e,r,t),n(r,C),n(r,me),n(r,k),n(r,p),n(p,qe),n(r,be),n(r,I),n(r,X),n(r,T),n(r,ze),n(r,z),n(r,Ae),n(r,A),n(r,Le),n(r,Y),n(Y,Je),n(Y,B),n(B,Ne),n(r,Ie),n(r,L),n(r,P),n(r,R),n(r,F),n(r,g),n(r,j),n(r,y),n(r,ve),n(r,U),n(r,f),n(r,m),n(m,_),n(r,Q),n(r,J),n(r,St),n(r,xe),n(r,Et),n(r,Ye),n(Ye,Dt),n(r,Ht),n(r,ge),n(r,qt),n(r,S),n(r,zt),n(r,E),n(r,At),n(r,D),n(r,Lt),n(r,H),n(r,Jt),n(r,$),n(r,Nt),n(r,K),n(r,It),n(r,ee),n(r,Yt),n(r,ye),n(r,Bt),n(r,we),n(r,Ut),n(r,Be),n(Be,Vt),n(r,Wt),n(r,nt),n(r,Zt),n(r,te),n(r,Gt),n(r,Ce),n(r,Xt),n(r,ke),n(r,Qt),n(r,Me),n(r,$t),n(r,Ue),n(Ue,Kt),u(e,rt,t),u(e,N,t),u(e,ot,t),u(e,st,t),u(e,at,t),u(e,V,t),u(e,lt,t),u(e,W,t),u(e,it,t),u(e,ne,t),u(e,ut,t),u(e,re,t),u(e,ct,t),u(e,oe,t),u(e,dt,t),u(e,Fe,t),n(Fe,en),u(e,ft,t),u(e,Z,t),u(e,ht,t),u(e,se,t),u(e,pt,t),u(e,je,t),n(je,tn),u(e,mt,t),u(e,ae,t),u(e,bt,t),u(e,_e,t),n(_e,nn),u(e,vt,t),u(e,le,t),u(e,Pe,t),n(Pe,rn),u(e,xt,t),u(e,ie,t),u(e,gt,t),u(e,q,t),u(e,yt,t),u(e,ue,t),u(e,wt,t),u(e,Oe,t),n(Oe,on),u(e,Ct,t),u(e,ce,t),u(e,kt,t),u(e,G,t),u(e,Mt,t),u(e,de,t),u(e,Ft,t),u(e,Te,t),n(Te,sn),u(e,jt,t),u(e,Re,t),n(Re,an),u(e,_t,t),u(e,fe,t),u(e,Pt,t),u(e,Se,t),n(Se,ln),u(e,Ot,t),u(e,he,t),u(e,Tt,t),u(e,Ee,t),n(Ee,un),u(e,Rt,t),M&&M.m(e,t),pe=!0,cn||(Wn=gr(window,"keypress",c[5]),cn=!0)},p(e,t){(!pe||t[0]&1)&&xr(nt,e[0]),M&&M.p&&(!pe||t[0]&131072)&&dr(M,dn,e,e[17],pe?hr(dn,e[17],t,null):fr(e[17]),null)},i(e){pe||(vr(M,e),pe=!0)},o(e){br(M,e),pe=!1},d(e){e&&(o(r),o(rt),o(N),o(ot),o(st),o(at),o(V),o(lt),o(W),o(it),o(ne),o(ut),o(re),o(ct),o(oe),o(dt),o(Fe),o(ft),o(Z),o(ht),o(se),o(pt),o(je),o(mt),o(ae),o(bt),o(_e),o(vt),o(le),o(Pe),o(xt),o(ie),o(gt),o(q),o(yt),o(ue),o(wt),o(Oe),o(Ct),o(ce),o(kt),o(G),o(Mt),o(de),o(Ft),o(Te),o(jt),o(Re),o(_t),o(fe),o(Pt),o(Se),o(Ot),o(he),o(Tt),o(Ee),o(Rt)),M&&M.d(e),cn=!1,Wn()}}}function De(c){return new Promise(r=>setTimeout(r,c))}async function jr(c){return c instanceof Promise?c:Promise.resolve(c)}function _r(c,r,C){let{$$slots:We={},$$scope:me}=r;var k=()=>{};function He(f){return function m(_){return _===k?f:(f=_(f),m)}}var p=console.log,be='m = M([ ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], ["green", "green", "green", "green", "green", "green", "green", "green", "green"], ["red", "red", "red", "red", "red", "red", "red", "red", "red"], ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"], ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"], ["white", "white", "white", "white", "white", "white", "white", "white", "white"] ]);',qe=`<div class="face front">
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
</div>`,P=He(3),be=`      var m = M([ ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
      ["green", "green", "green", "green", "green", "green", "green", "green", "green"],
      ["red", "red", "red", "red", "red", "red", "red", "red", "red"],
      ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"],
      ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"],
      ["white", "white", "white", "white", "white", "white", "white", "white", "white"] ]);`,I=`      var m = M([ ["yellow", "blue", "blue", "yellow", "blue", "blue", "yellow", "blue", "blue"],
      ["green", "green", "white", "green", "green", "white", "green", "green", "white"],
      ["red", "red", "red", "red", "red", "red", "red", "red", "red"],
      ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"],
      ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "green", "green", "green"],
      ["blue", "blue", "blue", "white", "white", "white", "white", "white", "white"] ]);`,Ze=`function F(ar) {
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
} `;function*X(){yield"m(dF3x) // 3 (as expected from the definition of M)",yield"m(v=>v**3) . . . causing 3 => 3**3 = 27",yield"m(dF3x) // 27 (as expected)",yield"m(v=>v*2)(v=>v-12) evaluates from left to right; i.e., (2 * 27) - 12.",yield"m(dF3x)  // 42",yield"m(v=>v+7)(Math.sqrt)(dF3x)  // x in the m-M(x) closure is now sqrt(42 + 7) = 7",yield"m(v = v * 6) // Back to 42",yield"m(dF3x)  // 42, as expected",yield"",yield"",yield"",T=X()}var T=X();function Ge(){var f=T.next().value;return f!=null||X(),T}function ze(f){f.keyCode===59&&Ge()}var z=()=>{},P=He([0,1]);function Xe(f,m){for(let _=1;_<=m;_+=1)f(([Q,J])=>[J,Q+J]);return f(z)}var Ae=`    const dF3x = () => {}

    function M (x) {
      return function go (func)
        {
            if (func === dF3x) return x;
            else x = func(x);
            return go;
        }
    }`,A="M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)(dF3x) // 10";p(Xe(P,11)),p("Hello",A);var Qe=`    import { leftShift } from "mathjs";
    var log = console.log;
    var dF3x = () => {};

    function M(x) {
        return function go(func) {
            if (func === dF3x) return x;
            x = func(x);
            return go;
        };
    }
    var aa = 25;
    var m = M([aa,1,aa,0]); // x in the m(x)-M closure is [25,1,25,0]
 // The elements of x (above) represent a starting dollars, first bet, goal, and wins.

    function f1 (v) {
        let result = Math.floor(Math.random()*2);
        if (result) {           // 1 is true, 0 is false.
          v[0] += v[1];         // The player gains $1.00
          log("2<><><><><><><>, m(dF3x) is", m(dF3x));
          if (v[3] < aa) m(f1)  // Another coin flip, 
          else {
            log("Double", m(dF3x))
            return;
          }  
        }
        else {
            v[0] = v[0] - v[1];
            v[1] = leftShift(v[1], 1);          
            log("2******, m(dF3x) is", m(dF3x));
            if (v[1] > v[0]) {
              log("Fail", m(dF3x));
              return
            }
            else m(f1);
        } 
        return v;
      };`;let Le=`    <button
        style="background-color: {m(dF3x)[4][4]}"
        on:click={() => {
            m = m(Yro);
        }}
    />`;var Y=`                    <button
                        style="background-color: {m(dF3x)[4][4]}"
                        on:click={() => {
                            m = m(Yro);
                        }}
                    /> `,Je=`    var Yro = function Yro(ar) {
        let temp = [];
        temp[0] = ar[2];
        temp[1] = ar[3];
        temp[2] = ar[1];
        temp[3] = ar[0];
        temp[4] = [
            ar[4][6],
            ar[4][3],
            ar[4][0],
            ar[4][7],
            ar[4][4],
            ar[4][1],
            ar[4][8],
            ar[4][5],
            ar[4][2],
        ];
        temp[5] = [
            ar[5][2],
            ar[5][5],
            ar[5][8],
            ar[5][1],
            ar[5][4],
            ar[5][7],
            ar[5][0],
            ar[5][3],
            ar[5][6],
        ];
        return temp;
    };`,B=`var log = console.log;
var dF3x = () => {};

function M(x) {
    return function go(func) {
        if (func === dF3x) return x;
        x = func(x);
        return go;
    };
}

var m = M({a:1, b:2});
var b = m(dF3x);  // b is just another name for x in the m-M(x) closure.
b.c = 3; 
log("b is", b);  // b is { a: 1, b: 2, c: 3 }
log("m(dF3x) is", m(dF3x));  // m(dF3x) is { a: 1, b: 2, c: 3 }
// Mutating b mutated x in the m-M(x) closure.

function M(x) {
    return function go(func) {
        if (func === dF3x) return JSON.parse(JSON.stringify(x));
        x = func(x);
        return go;
    };
}

var m = M({a:1, b:2});
var b = m(dF3x);  // b is a clone
b.c = 3;
log("b is", b);  // b is { a: 1, b: 2, c: 3 }
log("m(dF3x) is", m(dF3x));  // m(dF3x) is { a: 1, b: 2 }
// x in the m-M(x) closure is not affected by the modification of b.

JSON.parse(JSON.stringify(x)) is unable to make clones of functions, 
undefined values, Symbols, circular references, custom class instances (methods and prototype), dates (converted to strings), regular Expressions (lost), typed Arrays and special objects (converted to plain objects).

JSON.parse(JSON.stringify(x)) is a common technique to create a deep clone of an object in JavaScript. However, it fails to handle certain types of data. Here are the values of x for which this method cannot make a proper clone:

(1) Functions: Functions are not valid JSON data types, so they are omitted during stringification.

const obj = { fn: function() { return "hello"; } };
JSON.parse(JSON.stringify(obj)); // { } - the function is lost

(2) Undefined values: undefined is not a valid JSON type, so any property with undefined as a value will be omitted.

const obj = { key: undefined };
JSON.parse(JSON.stringify(obj)); // { } - the undefined property is lost

(3) Symbol values: Symbols are not valid in JSON and are excluded during stringification.

const obj = { key: Symbol("sym") };
JSON.parse(JSON.stringify(obj)); // { } - the symbol is lost

(4) Circular references: JSON cannot represent circular structures, so attempting to stringify an object with circular references will throw an error.

const obj = {};
obj.self = obj;
JSON.stringify(obj); // Error: Converting circular structure to JSON

(5) Custom class instances: Instances of custom classes will be converted to plain objects, and their methods and prototype chain will be lost.

class MyClass {
  constructor() { this.val = 10; }
  method() { return this.val; }
}
const obj = new MyClass();
JSON.parse(JSON.stringify(obj)); // { val: 10 } - methods are lost

(6) Date objects: Dates will be serialized as strings and will not retain their Date type.

const obj = { date: new Date() };
JSON.parse(JSON.stringify(obj)); // { date: "2024-09-10T00:00:00.000Z" } - Date is converted to string

(7) Regular Expressions: RegExps are not supported and will be converted to empty objects.

const obj = { regex: /abc/ };
JSON.parse(JSON.stringify(obj)); // { regex: {} } - Regular expression is lost

(8) Typed Arrays and other special objects: Objects like Map, Set, WeakMap, WeakSet, Int8Array, Uint8Array, etc., will lose their special behavior and be serialized as empty or plain objects.

const obj = { map: new Map(), set: new Set() };
JSON.parse(JSON.stringify(obj)); // { map: {}, set: {} } - Map and Set are lost`,Ne=`You can combine Object.create(Object.getPrototypeOf(obj)) 
with Object.getOwnPropertyDescriptors(obj) to both preserve the prototype and 
copy the own properties of obj using property descriptors. This approach 
allows you to create a new object with the same prototype as obj, while also 
copying all its own properties (including non-enumerable properties and 
getters/setters) in a concise and efficient way.

How It Works:

    Object.getOwnPropertyDescriptors(obj) returns an object containing 
    all the property descriptors of obj's own properties. Object.create() 
    allows you to specify the prototype for the new object and also pass 
    a property descriptor object as the second argument to define its properties.

Here’s how you can use them together:

javascript

const newObj = Object.create(
  Object.getPrototypeOf(obj),   // Set the prototype of the new object
  Object.getOwnPropertyDescriptors(obj)  // Copy all own properties of 'obj'
);

Example:

javascript

const obj = {
  a: 1,
  get b() { return this.a + 1; }
};

// Create a new object with the same prototype and properties as 'obj'
const newObj = Object.create(
  Object.getPrototypeOf(obj), 
  Object.getOwnPropertyDescriptors(obj)
);

console.log(newObj.a);  // Output: 1
console.log(newObj.b);  // Output: 2 (getter works)
console.log(Object.getPrototypeOf(newObj) === Object.getPrototypeOf(obj)); // true

Why This Is Useful:

    Retains Prototype: You retain the original prototype chain of obj, 
    meaning newObj will inherit methods and properties from the same 
    prototype as obj. Copies Own Properties: The own properties 
    (including getters, setters, and non-enumerable properties) of obj 
    are copied to newObj. Efficient: This is an efficient way to create 
    a new object with the same prototype and properties, without 
    manually copying or assigning them.

    However, deep copying is still not automatic: If any of the properties are objects 
    themselves, they will be shallow copied, and you may need to handle deep 
    copying manually if necessary. Works for non-enumerable properties: This 
    method also copies non-enumerable properties, which Object.assign() would 
    not handle.

Example With Non-enumerable Properties:

const obj = {};

Object.defineProperty(obj, 'a', {
  value: 42,
  enumerable: true,
  writable: true,
  configurable: true
});

Object.defineProperty(obj, 'b', {
  value: 100,
  enumerable: false,  // Non-enumerable property
  writable: true,
  configurable: true
});

const newObj = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);

console.log(newObj.a);   // Output: 42
console.log(newObj.b);   // Output: 100 (non-enumerable property is copied)
console.log(Object.keys(newObj)); // Output: ['a'], 'b' is non-enumerable`;const Ie=`const ob = {'R': Rz, 'L': Lz, 'U': Uz, 'D': Dz, 'F': Fz, 'B': Bz, 'Cx': Cxr,
   'Cy': Cyr, 'Cz': Czr, 'Xro': Xror, 'Yro': Yror, 'Zro': Zror, 'Rz': R,
   'Lz': L, 'Uz': U, 'Dz': D, 'Fz': F, 'Bz': B, 'Cxr': Cx, 'Cyr': Cy, 'Czr': Cz,
   'Xror': Xro, 'Yror': Yro, 'Zror': Zro};`,L=`function reverse () { 
    m = m(ob[m(dF3ar).pop()]); // Pops a function name and runs its reverse.   
    m(dF3ar).pop(); // Discard the inverse functions's name, that m just 
                    // pushed onto ar (inside of the m-M(x) closure). 
  }`;function $e(f){return f=jr(f),function m(_){return _===k?f:(f=f.then(Q=>_(Q)),m)}}var P=$e(1),R=f=>m=>f+m,Ke=f=>m=>f*m,F,g,O,j,y=[F,g,O,j];async function et(f){return await De(500),F=3,C(0,y=[F,g,O,j]),p(y),await De(500),g=2,C(0,y=[F,g,O,j]),p(y),await De(500),O=1,C(0,y=[F,g,O,j]),p(y),await De(500),j="Blast off",C(0,y=[F,g,O,j]),p(y),f}let ve=f=>async m=>(await De(2e3),m*f);P(k).then(f=>p("m(dF3x resolves to",f));async function U(){F="A",g="B",O="C",j="D",et(),p(F,g,O,j),P(R(6))(ve(6))(R(8))(ve(2))(Math.sqrt)(k).then(f=>p("m(dF3x) is",f)),P(R(4))(Ke(3))(k).then(f=>p("m(dF3x) is",f)),P(k).then(f=>p("Confirming that m(dF3x) is",f)),await De(5e3)}U();var tt=`    function M2 (x) {
        x = idP(x);
        return function go (func){
            if (func === dF3x) return x;
            else x = x.then(v => func(v));
            return go;
        };
    };
    
var m = M2(1);
var add = a => b => a + b;
var mult = a => b => a * b;
var div = a => b => a / b;

    function wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function squareP(x) {
        await wait(300);
        return x * x;    
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    let pause = (t) => async (x) => {
        await wait(t);
        return x;
    };
var A,B,C,D;
var arr = [A,B,C,D];
    async function hello(x) {
        await wait(500);
        A = 3;
        arr = [A,B,C,D];
        log(arr);
        await wait(500);
        B = 2;
        arr = [A,B,C,D];
        log(arr);
        await wait(500)
        C = 1;
        arr = [A,B,C,D];
        log(arr);
        await wait(500);
        D = "Blast off";
        arr = [A,B,C,D];
        log(arr);
        return x;
    }

    let addP = (x) => async (y) => {
        await wait(1000);
        return x + y;
    };

    let multP = (a) => async (b) => {
        await wait(2000);
        return b * a;
    };

        m(dF3x).then(v=>log("m(dF3x resolves to", v));
        
        async function idP(x) {
            if (x instanceof Promise) return x;
            return Promise.resolve(x);
        }

    async function restart() {
        A = "A";
        B = "B";
        C = "C";
        D = "D";
        hello();
        log(A,B,C,D);
        m(add(6))(multP(6))(add(8))(multP(2))(Math.sqrt)(dF3x)
        .then(v => log("m(dF3x) is", v)); // 10
        m(add(4))(mult(3))(dF3x).then(v => log("m(dF3x) is", v));  // 42
        m(dF3x).then(v => log("Confirming that m(dF3x) is", v));  // 42
        await wait(5000);
    };`;return c.$$set=f=>{"$$scope"in f&&C(17,me=f.$$scope)},[y,be,qe,I,Ze,ze,Ae,A,Qe,Le,Y,Je,B,Ne,Ie,L,tt,me,We]}class Rr extends pr{constructor(r){super(),mr(this,r,_r,Fr,ur,{},null,[-1,-1,-1,-1])}}export{Rr as component};
