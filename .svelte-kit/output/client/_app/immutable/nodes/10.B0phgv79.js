import{s as Ho,e as So,u as qo,g as zo,h as Lo,a as To}from"../chunks/Bv-lJKiI.js";import{S as Ao,i as Do,d as u,u as Io,v as Oo,a as Pt,j as e,s as g,l as h,c as s,k as v,g as l,b as o,h as m,e as r,f as a,t as f}from"../chunks/D2RDcUeg.js";import{C as No}from"../chunks/0QC4vc8C.js";const Bo=""+new URL("../assets/CubeshotR.DlB50Map.png",import.meta.url).href;function Wo(i){let t,w,yt="Recursive Closures",te,F,Ct='The inner function "m" ( defined below as "go" in the outer function M ) is recursive',Ze,R,wt="m = M(x),",ne,T,kt="Where x can be any value and M is",Ge,E,Je,Ke,j,Qe,et,H,tt,se,B,Rt,S,Tt,Et,jt,W,Xs="When the closure isn't named, there's no danger of a memory leak:",Ht,St,qt,q,Zs="x = M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)(dF3x)",zt,Lt,z,Gs="console.log(x)     // 10",At,Dt,It,Ot,$,Js="When the closure is named, it remains at least as long as the browser tab remains open, longer with persistent storage.",Nt,Bt,Wt,L,Ks="m = M(3)(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)",$t,Ut,A,Qs="console.log(x)     // 10",Yt,Vt,Xt,D,er="m(v=>v+4)(v=>v*3)",Zt,Gt,Jt,I,tr="console.log(x)     // 42",Kt,re,nr='For more examples, and to see m-M(x) closures handle asynchronous functions, go to <a href="./async5" class="svelte-1j1mmf">Async</a>.',Qt,O,sr="A Fast and Efficient Virtual Rubik's Cube",en,U,rr="Callbacks Rearrange the m-M(x) Closure",tn,oe,or=`Key press and mouse click events trigger m(func) where m is the inner function in the m-M(x) closure holding the state of the virtual Rubiks cube and func is a callback operating on x. Just as a Rubik's cube always has six sides, each of which always contains nine squares, so too the array in the closure always holds six nine-member arrays of strings. There is always a one-to-one correspondence between the positions of the nine strings named "blue", the nine strings named "green", and so forth, and the nine blue squares, nine green squares, etc. of the simulated Rubik's cube in the browser.`,nn,Y,ar="The Browser Image of the Virtural Rubik's Cube Automatically Reflects the State of x in the Closure.",sn,ae,lr="",rn,le,ir="Keystrokes and mouse clicks call",on,ie,cr="The six colors of the Rubik's cube are primitive values (strings) in the m-M(x) closure, but also variable names of six CSS classes. For example, m(dF3x)[3][0]",an,ce,dr=`Whenever any of the six nine-element arrays in x get reconstituted with with new or differently-ordered strings, the background colors of the 54 divs that constitute the virtual Rubik's automatically change accordingly. That's because the divs have CSS classes named "blue, green, red, orange, yellow, and white" with corresponding background colors. What are just strings in the m-M(x) closure are class names in the DOM. Here's the solved-cube definitions of x in the m-M(x) closure, the definitions of the six CSS classes, and the permanent structure of the 54 div representation of the Rubik's cube:`,ln,nt,cn,dn,de,hr="Here are the div class names that get automatically rearranged whenever the strings in the m-M(x) closure are rearranged. Functions that rearrange the locations of strings in the m-M(x) closure make it seem that the divs constituting the faces of the virtual Rubik's cube have rearranged.          , its sides, or its middle sections have rotated 90 degrees:",hn,st,un,vn,he,ur=`The 54 divs that combine to represent the cube in the DOM are shown below. Strings rearrange in the m-M(x) closure causing div class assignments to rearrange thereby creating the illusion that the whole cube, its faces, or its middle sections have rotated.

    The visual representation that appears in the browser is on the next page, <a href="./cube7" class="svelte-1j1mmf">Rubik&#39;s cube</a>`,mn,rt,fn,pn,ue,vr="",V,mr="The Three Visible Sides of the Simulated Rubik's Cube",bn,ve,fr=`You can rotate the entire cube by clicking on the middle square of any side, pressing the 'X', 'Y', and 'Z' keys, or clicking on the "X rotate", "Y rotate", or "Z rotate" buttons. Such rotations change which sides are displayed, but they are always designated 'top', 'front', and 'right-side' for purposes of rotating sides and middle sections. For example, pres'e front divs, and nine right-side divs contain buttons with classes named "blue, green, red, orange, yellow, and white." Each of these classes has a "background-color" attribute identical to its name.`,gn,me,pr=`The statement, "class = m(dF3x)[j][k], where j is 0, 1, 2, 3, 4, or 5 specifies 'blue', 'green', 'red', 'orange', 'yellow', or 'white' respectively, and k is the location   an integer und-color of one of the squares on one of the faces of the Rubik's cube representation in the DOM."`,xn,fe,br='Likewise, the statement &quot;style = &#39;background-color: m(dF3x)[j][k]&#39;&quot; can specify the color of one of the 54 squares that constitute the simulated Rubik&#39;s cube in the DOM. Here&#39;s a demonstration on the Rubik&#39;s cube page: <a href="./cube7#coolcow" class="svelte-1j1mmf"><span style="font-weight:bold; color:#ff99dd;" class="svelte-1j1mmf">Demonstration</span></a>. After you click &quot;Scramble&quot; multiple times, I recommend that you read the definitions that precede it. Counterintuitive things are happening, some of which will be explained in the next section.',yn,pe,gr='Composing function this way is elegant, transparent, and efficient. Scrambling the Rubik&#39;s cube involves calling a random sequence of 40 functions that rotate faces and middle sections of the Simulated Rubik&#39;s cube. Running this application on localhost:5173, my desktop computer can scramble the cube 1,000 times in less than 300 milliseconds. <a href="./cube7#test" class="svelte-1j1mmf">Try it here</a>',Cn,be,xr="The statement resolves to 10. No variable points to the transient closure, which is transient because it is not assigned to a variable and is, therefore, ripe for removal by the garbage collector immediately upon resolution to 10.",wn,ge,yr="M(3) at the beginning of the above computation returns go. The function go operates on v=>v**3, v=>v*4, v=>v-8, Math.sqrt, and dF3x. Then, being unreachable by any variable assignment, disappears from memory whenever the garbage collector gets around to removing it.",kn,Fn,_n,xe,Cr="",Mn,b,X,wr="Encapsulated State:",Pn,ot,Rn,Tn,at,En,jn,Z,kr="Sometime later:",Hn,lt,Sn,qn,it,zn,Ln,ct,An,Dn,ye,In,On,Nn,N,Fr="Back to the Rubik's Cube Simulation",Bn,y,Wn,$n,Un,Ce,_r='In the <a style="color: #FCAACC" href="./cube7" class="svelte-1j1mmf">Rubik&#39;s cube application</a>, x in the m-M(x) closure is defined as:',Yn,dt,Vn,Xn,we,Mr="In the solved cube, bb, gg, rr, oo, yy, and ww correspond to its right, left, back, front, top, and bottom faces respectively. Notice that in the DOM representation of the Rubik's cube (below), only the top, front, and right side of the cube contain buttons. Click the center of the right side of the cube or press 'X' on the keyboard. Now the front is white, but it has an embedded button",Zn,Gn,ke,Pr=`Although some or all of the 54 divs that constitute the representation a Rubik's cube seem to move in response to certain mouse clicks and key presses, they never do. If func is the function dF3x, m(func) is a reference to the to the array of six nine-member arrays of strings named "x" in the m-M(x) closure. m(dF3x) === x. Mutating one mutates the other. Otherwise, calling m(func) results in x => func(x) in the m-M(x) closure where x has become func(x).`,Jn,Fe,Rr=`The value held in the m-M(x) closure in the Rubik's cube application, "x", is always an array of six nine-member
    references to the strings "blue, green, red, orange, yellow, and white." The nine front-facing squares seen in the browser are all colored according to the nine strings referenced in x[j][k]. In the starting cube, also known as the "solved cube," x[3] is the array "oo", the array of all nine references to "orange." Here's the first of the six parts of the 54 div representation of the Rubik's cube in the DOM:`,Kn,ht,Qn,es,_e,Tr='The third button down from the top and the final button of the front face (see above) contain the statement "m = m(F)". These correspond to the upper right and lower right corners of the cube representation in the browser. Clicking the upper right or lower right corners of the cube, therefore, mutates x in the m=M(x) closure into the value returned by F(x), which is named "temp".',ts,ut,ns,ss,Me,Er='Pressing the "F" key and clicking on the "F" button are other ways of rotating the front face clockwise 90 degrees. All three methods rely on the statement, "m = m(F)". The "m =" part of the statement m = m(F) triggers reactivity in this Sveltekit application, giving users almost instantaneous feedback from their key presses and mouse clicks.',rs,Pe,jr=`Examining the function "F", we see that the front face of the cube, temp[3], remains solid orange after class reassignments create the illusion that the front face rotated. Evidence of rotation can be seen on the top (temp[4]) and on the right (temp[0]) sides of the cube. Here's what the cube looks like in the browser after running "m = m(F)" on the solved cube:`,os,_,Hr,as,Re,Sr='The changes to the top face, with three classes reassigned from x[1] (previously all green), and the changes to the right face, three classes reassigned from x[4] (previously all yellow), demonstrate the correspondence between the function "F" and the visual representation in the browser. And, of course, the observed changes are what you get when you turn the front face of your own solved cube, assuming you have one.',ls,Te,qr='Clicking the center of each face rearranges x in the m-M(x) closure, thereby automatically rearranging some of the class assignments of the 54 dives in the DOM. In the browser, this creates the appearance of 90 degree clockwise rotation of the entire cube around the axes perpendicular to the clicked centers. Pressing the x, y, and z Keys has the same effects. Holding down SHIFT while pressing these keys creates the appearance of counterclockwise rotation. There are also buttons for clockwise rotations, and "back" buttons for counterclockwise rotation.',is,Ee,zr=`The 54 divs that combine to represent the cube in the DOM are shown below.
    The visual representation that appears in the browser is on the next page, <a href="./cube7" class="svelte-1j1mmf">Rubik&#39;s cube</a>`,cs,vt,ds,hs,je,Lr=`If you click on the top center of a solved cube three times, the green side will face you.
    Clicking the upper right corner and then clicking the top center again to restore the cube to its previous orientation confirms that you have rotated the left side clockwise by by 90 degrees.`,us,G,Ar=`***********************************************************************
      <br/>
      Case 2 -- Clicking on the buttons.`,vs,He,Dr=`Similar to clicking on parts of the cube, the callback specified in
      buttons that rotate faces, middle sections, and the entire cube do so by
      calling m(func) for for the same functions &quot;func&quot; involved in clicking on parts of the simulated Rubik&#39;s cube.  Each function &quot;func&quot; rearranges some of the six nine-element arrays constituting the array &quot;x&quot; in the m-M(x) closure. This causes the automatic reassignment of classes in the DOM representation of the cube and the illusion in the browser that the cube or some part of it has rotated. You can try out the buttons in the <a href="./cube7#yes" class="svelte-1j1mmf">button section</a> of the Rubik&#39;s cube page.`,ms,Se,Ir='Pressing the "F" key, clicking the "F" button, or clicking the right upper or lower corners of the forward-facing side all cause the function "m(F)" to execute. When the orange front of a solved cube rotates 90 degrees clockwise, the right column of the green left side migrates to the lower row of the top and the lowest row of the yellow top to move into the left column of the right side of the cube.',fs,J,Or=`***********************************************************************
      <br/>
      Case 3 -- Key presses.`,ps,qe,Nr=`Pressing keys invokes eventHandler(e) where "e" is the key-press event object and
      eventHandler is defined as follows:`,bs,mt,gs,xs,ze,Br=`"svelte:window on:keypress = { handleEvent } " routes keyPress
      event objects to handleEvent.`,ys,Le,Wr=`The <a href="./cube7" class="svelte-1j1mmf">Rubik&#39;s Cube simulation</a> features an m-M(x)
      closure whose x values are always arrays of six nine-member arrays of the
      strings &quot;blue, green, red, orange, yellow, and white&quot;. Callbacks stemming
      from mouse clicks have the form &quot;m = m(Foo), where Foo is one of several
      functions that use the elements of x to construct and return new arrays of
      six nine-member arrays. The resulting transformation of x in the m-M(x)
      closure automatically transforms the cube displayed in the browser because
      x&#39;s elements (references to strings) are references to classes in the DOM.
      m(dF3x)[0] is always the first element of m(dF3x). In the solved cube,
      it&#39;s a nine-member array, each element of which is corresponds to a CSS
      class with the element &quot;background-color: blue&quot;. m(dF3x)[0][0] === &quot;blue&quot;
      returns &quot;true&quot;, as do m(dF3x)[0][v] for the other eight elements of
      m(dF3x)[0]. automatically responds because to arrays to and return create
      arrays of six nine-member arrays that &quot; are operated upon by m that
      respond only to DOM events, and whose side effects are felt only in the
      DOM rearrangements of six CSS classes on the 54 divs of the cube. Other
      than background colors, those classes are all identical. modifications of
      the DOM, encapsulate transformations of x in a manner reminiscent of
      Haskel monads. <a href="./cube7" class="svelte-1j1mmf">Here</a>, you can click on an edge or
      corner of the upper cube and see it rotate. The JavaScript in the script
      section provides function definitions, and nothing more.`,Cs,K,$r="***********************************************************************",ws,c,Ae,Ur=`The code samples at the top of this page show that function composition
        using M is as transparent and concise as it can possibly be. Going
        beyond numerical computations, M holds the ever-changing state of play
        in the<a href="./score" class="svelte-1j1mmf">Game of Score</a>. That application functions properly, but the code needs to be refactored and cleaned up. The simulated Rubik&#39;s cube is a simple m-M(x) closure where x is an array of six nine-member arrays of strings. A slightly modified version of M is introduced to facilitate reversing a series of moves.`,ks,De,Yr=`A few additional lines of code in M can facilitate nesting of mixed
        synchronous and asynchronous functions handled by m, and can help avoid
        mutations by providing an array, let&#39;s call it &quot;ar&quot;, into which f(x)
        (which runds after m(f)) can be pushed, and having dF3x prompt the
        return of ar.slice(-1)[0] when f === dF3x. But enough of the small
        stuff, now it&#39;s time to show m-M(x) closures in all their glory, deftly
        making complex applications work while they do nothing but allow the
        function m to transform them by means of the functions m fetches. The <a href="./cube7" class="svelte-1j1mmf">Simulated Rubik&#39;s cube</a> is a case in point.`,Fs,Ie,Vr=`The array x in the m-M(x) Rubik's cube array is an array consisting of
        six nine-member arrays of references to the strings "blue, green, red,
        orange, yellow and white." Functions called in response to DOM key
        presses and mouse clicks rearrange these strings, which are the names of
        CSS classes whose "background-color" properties match the names of the
        selectors that contain them. For example, the CSS class "blue" contains
        the line, "background-color: "blue".`,_s,Q,Xr=`To understand the interface between the m-M(x) representation of the
        cube with the 54 colored divs in the DOM, we first need to know how x in
        the closure is defined. Here it is:`,Ms,ft,Ps,Rs,Oe,Zr=`m(dF3x)[0][0] on the solved cube representation in the DOM is a div with
        class = "blue". Here's blue's definition:`,Ts,pt,Es,js,Ne,Gr=`Below is the cube representation in the DOM. Notice how the colors
        corresponds with the image in the monitor -- orange in front m(dF3x)[3],
        blue on the side m(dF3x)[0], and yellow on top (m(dF3x)[4]).`,Hs,bt,Ss,qs,Be,Jr=`<a href="./cube7#cow8" class="svelte-1j1mmf">This link</a> takes you to a demonstration driving
        home the point that the mere rearrangement of x in the m-M(x) closure, along
        with a self-reference of m to m, is sufficient to trigger reactivity in Svelte.
        It also shows that the only heavy lifting, such that it is, consists of rearranging
        references to strings. The 54 divs that constitute the DOM representation
        remain stationary; only their class assignments change.`,zs,We,Kr=`When you press "R", click the "R" button, or click the upper right or lower right
        corner of the right side of the cube representation, m = m(R) executes. This runs R on x and by the definition of M, x mutates to R(x) = temp as defined in the function R.`,Ls,gt,As,Ds,$e,Qr="The current configuration of x in the closure is of no concern to R. R rearranges the strings based solely on their locations in whatever the configuration of x happens to be.",Is,Ue,eo=`For example, the third line down in temp[3] in the function "R" specifies that whatever string reference happens to be in position m(dF3x)[3][2] changes to whatever string reference happens to be in
        position m(dF3x)[5][2]. If the cube is in its starting configuration
        (solved, prior to scrambling), the upper right front corner will go from
        orange to white, as shown below.`,Os,M,to,Ns,ee,no="Handling Intermittant Promises",Bs,Ye,so="This slightly modified version of M can handle both ordinary functions and promises:",Ws,xt,$s,Us,Ve,ro='Here&#39;s a demonstration: <a href="./async5" class="svelte-1j1mmf">Async</a>',Ft,P,oo="Back to the top",_t,Xe;const Ys=i[18].default,C=So(Ys,i,i[17],null);return{c(){t=r("div"),w=r("h1"),w.textContent=yt,te=a(),F=r("h3"),F.textContent=Ct,Ze=a(),R=r("p"),R.textContent=wt,ne=a(),T=r("p"),T.textContent=kt,Ge=a(),E=r("pre"),Je=f(i[0]),Ke=a(),j=r("pre"),Qe=f(i[1]),et=a(),H=r("pre"),tt=f(i[2]),se=a(),B=r("p"),Rt=f('The flag dF3x can be any value; including null, an image, or a function. In order to facilitate future type-checking, "func" is defined here as a function; namely: '),S=r("span"),Tt=f(jo),Et=f("."),jt=a(),W=r("span"),W.textContent=Xs,Ht=a(),St=r("br"),qt=a(),q=r("span"),q.textContent=Zs,zt=r("br"),Lt=a(),z=r("span"),z.textContent=Gs,At=a(),Dt=r("br"),It=r("br"),Ot=a(),$=r("span"),$.textContent=Js,Nt=a(),Bt=r("br"),Wt=a(),L=r("span"),L.textContent=Ks,$t=r("br"),Ut=a(),A=r("span"),A.textContent=Qs,Yt=a(),Vt=r("br"),Xt=a(),D=r("span"),D.textContent=er,Zt=a(),Gt=r("br"),Jt=a(),I=r("span"),I.textContent=tr,Kt=a(),re=r("p"),re.innerHTML=nr,Qt=a(),O=r("h1"),O.textContent=sr,en=a(),U=r("h2"),U.textContent=rr,tn=a(),oe=r("p"),oe.textContent=or,nn=a(),Y=r("h2"),Y.textContent=ar,sn=a(),ae=r("p"),ae.innerHTML=lr,rn=a(),le=r("p"),le.textContent=ir,on=a(),ie=r("p"),ie.textContent=cr,an=a(),ce=r("p"),ce.textContent=dr,ln=a(),nt=r("pre"),cn=f(i[4]),dn=a(),de=r("p"),de.textContent=hr,hn=a(),st=r("pre"),un=f(i[13]),vn=a(),he=r("p"),he.innerHTML=ur,mn=a(),rt=r("pre"),fn=f(i[14]),pn=a(),ue=r("p"),ue.innerHTML=vr,V=r("h2"),V.textContent=mr,bn=a(),ve=r("p"),ve.textContent=fr,gn=a(),me=r("p"),me.textContent=pr,xn=a(),fe=r("p"),fe.innerHTML=br,yn=a(),pe=r("p"),pe.innerHTML=gr,Cn=a(),be=r("p"),be.textContent=xr,wn=a(),ge=r("p"),ge.textContent=yr,kn=a(),Fn=r("br"),_n=a(),xe=r("p"),xe.innerHTML=Cr,Mn=a(),b=r("div"),X=r("span"),X.textContent=wr,Pn=a(),ot=r("pre"),Rn=f(i[6]),Tn=a(),at=r("pre"),En=f(Eo),jn=a(),Z=r("span"),Z.textContent=kr,Hn=a(),lt=r("pre"),Sn=f(i[7]),qn=a(),it=r("pre"),zn=f(i[8]),Ln=a(),ct=r("pre"),An=f(i[9]),Dn=a(),ye=r("pre"),In=f(i[10]),On=f(" // The JavaScript garbage collector ignores closures "),Nn=a(),N=r("span"),N.textContent=Fr,Bn=a(),y=r("span"),Wn=f(`***********************************************************************
    `),$n=r("br"),Un=a(),Ce=r("p"),Ce.innerHTML=_r,Yn=a(),dt=r("pre"),Vn=f(i[4]),Xn=a(),we=r("p"),we.textContent=Mr,Zn=f(`

    Case 1 -- Clicking on the three visible sides of the cube.`),Gn=a(),ke=r("p"),ke.textContent=Pr,Jn=a(),Fe=r("p"),Fe.textContent=Rr,Kn=a(),ht=r("pre"),Qn=f(i[5]),es=a(),_e=r("p"),_e.textContent=Tr,ts=a(),ut=r("pre"),ns=f(i[3]),ss=a(),Me=r("p"),Me.textContent=Er,rs=a(),Pe=r("p"),Pe.textContent=jr,os=a(),_=r("img"),as=a(),Re=r("p"),Re.textContent=Sr,ls=a(),Te=r("p"),Te.textContent=qr,is=a(),Ee=r("p"),Ee.innerHTML=zr,cs=a(),vt=r("pre"),ds=f(i[14]),hs=a(),je=r("p"),je.textContent=Lr,us=a(),G=r("span"),G.innerHTML=Ar,vs=a(),He=r("p"),He.innerHTML=Dr,ms=a(),Se=r("p"),Se.textContent=Ir,fs=a(),J=r("span"),J.innerHTML=Or,ps=a(),qe=r("p"),qe.textContent=Nr,bs=a(),mt=r("pre"),gs=f(i[15]),xs=a(),ze=r("p"),ze.textContent=Br,ys=a(),Le=r("p"),Le.innerHTML=Wr,Cs=a(),K=r("span"),K.textContent=$r,ws=a(),c=r("div"),Ae=r("p"),Ae.innerHTML=Ur,ks=a(),De=r("p"),De.innerHTML=Yr,Fs=a(),Ie=r("p"),Ie.textContent=Vr,_s=a(),Q=r("p"),Q.textContent=Xr,Ms=a(),ft=r("pre"),Ps=f(i[4]),Rs=a(),Oe=r("p"),Oe.textContent=Zr,Ts=a(),pt=r("pre"),Es=f(i[11]),js=a(),Ne=r("p"),Ne.textContent=Gr,Hs=a(),bt=r("pre"),Ss=f(i[14]),qs=a(),Be=r("p"),Be.innerHTML=Jr,zs=a(),We=r("p"),We.textContent=Kr,Ls=a(),gt=r("pre"),As=f(i[12]),Ds=a(),$e=r("p"),$e.textContent=Qr,Is=a(),Ue=r("p"),Ue.textContent=eo,Os=a(),M=r("img"),Ns=a(),ee=r("h2"),ee.textContent=no,Bs=a(),Ye=r("p"),Ye.textContent=so,Ws=a(),xt=r("pre"),$s=f(i[16]),Us=a(),Ve=r("p"),Ve.innerHTML=ro,Ft=a(),P=r("a"),P.textContent=oo,_t=a(),C&&C.c(),this.h()},l(p){t=s(p,"DIV",{style:!0,id:!0});var n=v(t);w=s(n,"H1",{style:!0,"data-svelte-h":!0}),l(w)!=="svelte-17i9lsv"&&(w.textContent=yt),te=o(n),F=s(n,"H3",{class:!0,"data-svelte-h":!0}),l(F)!=="svelte-snzv95"&&(F.textContent=Ct),Ze=o(n),R=s(n,"P",{"data-svelte-h":!0}),l(R)!=="svelte-vcq9z2"&&(R.textContent=wt),ne=o(n),T=s(n,"P",{"data-svelte-h":!0}),l(T)!=="svelte-1q6ftnr"&&(T.textContent=kt),Ge=o(n),E=s(n,"PRE",{class:!0});var ao=v(E);Je=m(ao,i[0]),ao.forEach(u),Ke=o(n),j=s(n,"PRE",{class:!0});var lo=v(j);Qe=m(lo,i[1]),lo.forEach(u),et=o(n),H=s(n,"PRE",{class:!0});var io=v(H);tt=m(io,i[2]),io.forEach(u),se=o(n),B=s(n,"P",{});var Mt=v(B);Rt=m(Mt,'The flag dF3x can be any value; including null, an image, or a function. In order to facilitate future type-checking, "func" is defined here as a function; namely: '),S=s(Mt,"SPAN",{style:!0,class:!0});var co=v(S);Tt=m(co,jo),co.forEach(u),Et=m(Mt,"."),Mt.forEach(u),jt=o(n),W=s(n,"SPAN",{class:!0,"data-svelte-h":!0}),l(W)!=="svelte-1wtymb8"&&(W.textContent=Xs),Ht=o(n),St=s(n,"BR",{}),qt=o(n),q=s(n,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),l(q)!=="svelte-ool12f"&&(q.textContent=Zs),zt=s(n,"BR",{}),Lt=o(n),z=s(n,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),l(z)!=="svelte-5343z1"&&(z.textContent=Gs),At=o(n),Dt=s(n,"BR",{}),It=s(n,"BR",{}),Ot=o(n),$=s(n,"SPAN",{class:!0,"data-svelte-h":!0}),l($)!=="svelte-1n5kn1n"&&($.textContent=Js),Nt=o(n),Bt=s(n,"BR",{}),Wt=o(n),L=s(n,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),l(L)!=="svelte-1hjcq7i"&&(L.textContent=Ks),$t=s(n,"BR",{}),Ut=o(n),A=s(n,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),l(A)!=="svelte-5343z1"&&(A.textContent=Qs),Yt=o(n),Vt=s(n,"BR",{}),Xt=o(n),D=s(n,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),l(D)!=="svelte-9ze7pl"&&(D.textContent=er),Zt=o(n),Gt=s(n,"BR",{}),Jt=o(n),I=s(n,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),l(I)!=="svelte-1qxzyji"&&(I.textContent=tr),Kt=o(n),re=s(n,"P",{"data-svelte-h":!0}),l(re)!=="svelte-60zzy5"&&(re.innerHTML=nr),Qt=o(n),O=s(n,"H1",{style:!0,"data-svelte-h":!0}),l(O)!=="svelte-3x2697"&&(O.textContent=sr),en=o(n),U=s(n,"H2",{class:!0,"data-svelte-h":!0}),l(U)!=="svelte-33klux"&&(U.textContent=rr),tn=o(n),oe=s(n,"P",{"data-svelte-h":!0}),l(oe)!=="svelte-h0xfgz"&&(oe.textContent=or),nn=o(n),Y=s(n,"H2",{class:!0,"data-svelte-h":!0}),l(Y)!=="svelte-17b0z2k"&&(Y.textContent=ar),sn=o(n),ae=s(n,"P",{"data-svelte-h":!0}),l(ae)!=="svelte-9wn1h0"&&(ae.innerHTML=lr),rn=o(n),le=s(n,"P",{"data-svelte-h":!0}),l(le)!=="svelte-zurehh"&&(le.textContent=ir),on=o(n),ie=s(n,"P",{"data-svelte-h":!0}),l(ie)!=="svelte-cv5qqz"&&(ie.textContent=cr),an=o(n),ce=s(n,"P",{"data-svelte-h":!0}),l(ce)!=="svelte-wjn1me"&&(ce.textContent=dr),ln=o(n),nt=s(n,"PRE",{});var ho=v(nt);cn=m(ho,i[4]),ho.forEach(u),dn=o(n),de=s(n,"P",{"data-svelte-h":!0}),l(de)!=="svelte-wpx7dc"&&(de.textContent=hr),hn=o(n),st=s(n,"PRE",{});var uo=v(st);un=m(uo,i[13]),uo.forEach(u),vn=o(n),he=s(n,"P",{"data-svelte-h":!0}),l(he)!=="svelte-11b2fg6"&&(he.innerHTML=ur),mn=o(n),rt=s(n,"PRE",{});var vo=v(rt);fn=m(vo,i[14]),vo.forEach(u),pn=o(n),ue=s(n,"P",{"data-svelte-h":!0}),l(ue)!=="svelte-1hhrzwd"&&(ue.innerHTML=vr),V=s(n,"H2",{class:!0,"data-svelte-h":!0}),l(V)!=="svelte-7yh3e7"&&(V.textContent=mr),bn=o(n),ve=s(n,"P",{"data-svelte-h":!0}),l(ve)!=="svelte-1zk8o7"&&(ve.textContent=fr),gn=o(n),me=s(n,"P",{"data-svelte-h":!0}),l(me)!=="svelte-18lijdl"&&(me.textContent=pr),xn=o(n),fe=s(n,"P",{"data-svelte-h":!0}),l(fe)!=="svelte-dyx75a"&&(fe.innerHTML=br),yn=o(n),pe=s(n,"P",{"data-svelte-h":!0}),l(pe)!=="svelte-bb71i5"&&(pe.innerHTML=gr),Cn=o(n),be=s(n,"P",{"data-svelte-h":!0}),l(be)!=="svelte-192x6hp"&&(be.textContent=xr),wn=o(n),ge=s(n,"P",{"data-svelte-h":!0}),l(ge)!=="svelte-uw280o"&&(ge.textContent=yr),kn=o(n),Fn=s(n,"BR",{}),_n=o(n),xe=s(n,"P",{"data-svelte-h":!0}),l(xe)!=="svelte-9wn1h0"&&(xe.innerHTML=Cr),Mn=o(n),b=s(n,"DIV",{class:!0});var x=v(b);X=s(x,"SPAN",{class:!0,"data-svelte-h":!0}),l(X)!=="svelte-1xp33cu"&&(X.textContent=wr),Pn=o(x),ot=s(x,"PRE",{});var mo=v(ot);Rn=m(mo,i[6]),mo.forEach(u),Tn=o(x),at=s(x,"PRE",{});var fo=v(at);En=m(fo,Eo),fo.forEach(u),jn=o(x),Z=s(x,"SPAN",{class:!0,"data-svelte-h":!0}),l(Z)!=="svelte-zs2sfr"&&(Z.textContent=kr),Hn=o(x),lt=s(x,"PRE",{});var po=v(lt);Sn=m(po,i[7]),po.forEach(u),qn=o(x),it=s(x,"PRE",{});var bo=v(it);zn=m(bo,i[8]),bo.forEach(u),Ln=o(x),ct=s(x,"PRE",{});var go=v(ct);An=m(go,i[9]),go.forEach(u),Dn=o(x),ye=s(x,"PRE",{});var Vs=v(ye);In=m(Vs,i[10]),On=m(Vs," // The JavaScript garbage collector ignores closures "),Vs.forEach(u),x.forEach(u),Nn=o(n),N=s(n,"SPAN",{id:!0,class:!0,"data-svelte-h":!0}),l(N)!=="svelte-11l9sog"&&(N.textContent=Fr),Bn=o(n),y=s(n,"SPAN",{class:!0});var k=v(y);Wn=m(k,`***********************************************************************
    `),$n=s(k,"BR",{}),Un=o(k),Ce=s(k,"P",{"data-svelte-h":!0}),l(Ce)!=="svelte-1wqu2ox"&&(Ce.innerHTML=_r),Yn=o(k),dt=s(k,"PRE",{});var xo=v(dt);Vn=m(xo,i[4]),xo.forEach(u),Xn=o(k),we=s(k,"P",{"data-svelte-h":!0}),l(we)!=="svelte-7xj7bs"&&(we.textContent=Mr),Zn=m(k,`

    Case 1 -- Clicking on the three visible sides of the cube.`),k.forEach(u),Gn=o(n),ke=s(n,"P",{"data-svelte-h":!0}),l(ke)!=="svelte-5u7x0d"&&(ke.textContent=Pr),Jn=o(n),Fe=s(n,"P",{"data-svelte-h":!0}),l(Fe)!=="svelte-1aczuhf"&&(Fe.textContent=Rr),Kn=o(n),ht=s(n,"PRE",{});var yo=v(ht);Qn=m(yo,i[5]),yo.forEach(u),es=o(n),_e=s(n,"P",{"data-svelte-h":!0}),l(_e)!=="svelte-t7rbwi"&&(_e.textContent=Tr),ts=o(n),ut=s(n,"PRE",{});var Co=v(ut);ns=m(Co,i[3]),Co.forEach(u),ss=o(n),Me=s(n,"P",{"data-svelte-h":!0}),l(Me)!=="svelte-7peipo"&&(Me.textContent=Er),rs=o(n),Pe=s(n,"P",{"data-svelte-h":!0}),l(Pe)!=="svelte-1665qyz"&&(Pe.textContent=jr),os=o(n),_=s(n,"IMG",{src:!0,alt:!0,style:!0,class:!0}),as=o(n),Re=s(n,"P",{"data-svelte-h":!0}),l(Re)!=="svelte-17tb0r2"&&(Re.textContent=Sr),ls=o(n),Te=s(n,"P",{"data-svelte-h":!0}),l(Te)!=="svelte-x3eeug"&&(Te.textContent=qr),is=o(n),Ee=s(n,"P",{"data-svelte-h":!0}),l(Ee)!=="svelte-8cvcfg"&&(Ee.innerHTML=zr),cs=o(n),vt=s(n,"PRE",{});var wo=v(vt);ds=m(wo,i[14]),wo.forEach(u),hs=o(n),je=s(n,"P",{"data-svelte-h":!0}),l(je)!=="svelte-ok96u4"&&(je.textContent=Lr),us=o(n),G=s(n,"SPAN",{class:!0,"data-svelte-h":!0}),l(G)!=="svelte-1aqmcih"&&(G.innerHTML=Ar),vs=o(n),He=s(n,"P",{"data-svelte-h":!0}),l(He)!=="svelte-1ytqx6g"&&(He.innerHTML=Dr),ms=o(n),Se=s(n,"P",{"data-svelte-h":!0}),l(Se)!=="svelte-1yl9urz"&&(Se.textContent=Ir),fs=o(n),J=s(n,"SPAN",{class:!0,"data-svelte-h":!0}),l(J)!=="svelte-kozoi1"&&(J.innerHTML=Or),ps=o(n),qe=s(n,"P",{"data-svelte-h":!0}),l(qe)!=="svelte-cxnf2r"&&(qe.textContent=Nr),bs=o(n),mt=s(n,"PRE",{});var ko=v(mt);gs=m(ko,i[15]),ko.forEach(u),xs=o(n),ze=s(n,"P",{"data-svelte-h":!0}),l(ze)!=="svelte-16gky82"&&(ze.textContent=Br),ys=o(n),Le=s(n,"P",{"data-svelte-h":!0}),l(Le)!=="svelte-lw9xvr"&&(Le.innerHTML=Wr),Cs=o(n),K=s(n,"SPAN",{class:!0,"data-svelte-h":!0}),l(K)!=="svelte-p8qgwr"&&(K.textContent=$r),ws=o(n),c=s(n,"DIV",{class:!0});var d=v(c);Ae=s(d,"P",{"data-svelte-h":!0}),l(Ae)!=="svelte-qn223a"&&(Ae.innerHTML=Ur),ks=o(d),De=s(d,"P",{"data-svelte-h":!0}),l(De)!=="svelte-2y9he2"&&(De.innerHTML=Yr),Fs=o(d),Ie=s(d,"P",{"data-svelte-h":!0}),l(Ie)!=="svelte-14wboki"&&(Ie.textContent=Vr),_s=o(d),Q=s(d,"P",{id:!0,"data-svelte-h":!0}),l(Q)!=="svelte-1jc3qmd"&&(Q.textContent=Xr),Ms=o(d),ft=s(d,"PRE",{});var Fo=v(ft);Ps=m(Fo,i[4]),Fo.forEach(u),Rs=o(d),Oe=s(d,"P",{"data-svelte-h":!0}),l(Oe)!=="svelte-r2a6lm"&&(Oe.textContent=Zr),Ts=o(d),pt=s(d,"PRE",{});var _o=v(pt);Es=m(_o,i[11]),_o.forEach(u),js=o(d),Ne=s(d,"P",{"data-svelte-h":!0}),l(Ne)!=="svelte-1n05fgy"&&(Ne.textContent=Gr),Hs=o(d),bt=s(d,"PRE",{});var Mo=v(bt);Ss=m(Mo,i[14]),Mo.forEach(u),qs=o(d),Be=s(d,"P",{"data-svelte-h":!0}),l(Be)!=="svelte-16bl1cl"&&(Be.innerHTML=Jr),zs=o(d),We=s(d,"P",{"data-svelte-h":!0}),l(We)!=="svelte-dqomyr"&&(We.textContent=Kr),Ls=o(d),gt=s(d,"PRE",{});var Po=v(gt);As=m(Po,i[12]),Po.forEach(u),Ds=o(d),$e=s(d,"P",{"data-svelte-h":!0}),l($e)!=="svelte-1ormilq"&&($e.textContent=Qr),Is=o(d),Ue=s(d,"P",{"data-svelte-h":!0}),l(Ue)!=="svelte-1rappih"&&(Ue.textContent=eo),Os=o(d),M=s(d,"IMG",{src:!0,alt:!0,style:!0,class:!0}),Ns=o(d),ee=s(d,"H2",{class:!0,"data-svelte-h":!0}),l(ee)!=="svelte-1q8yqdi"&&(ee.textContent=no),Bs=o(d),Ye=s(d,"P",{"data-svelte-h":!0}),l(Ye)!=="svelte-m68vo6"&&(Ye.textContent=so),Ws=o(d),xt=s(d,"PRE",{});var Ro=v(xt);$s=m(Ro,i[16]),Ro.forEach(u),Us=o(d),Ve=s(d,"P",{"data-svelte-h":!0}),l(Ve)!=="svelte-1cqm6bl"&&(Ve.innerHTML=ro),d.forEach(u),n.forEach(u),Ft=o(p),P=s(p,"A",{href:!0,class:!0,"data-svelte-h":!0}),l(P)!=="svelte-1887boa"&&(P.textContent=oo),_t=o(p),C&&C.l(p),this.h()},h(){g(w,"text-align","center"),g(w,"color","#f5ee9f"),h(F,"class","svelte-1j1mmf"),h(E,"class","dis svelte-1j1mmf"),h(j,"class","play svelte-1j1mmf"),h(H,"class","dis svelte-1j1mmf"),g(S,"margin","0px"),g(S,"color","#f5ee9f"),h(S,"class","svelte-1j1mmf"),h(W,"class","svelte-1j1mmf"),g(q,"color","#f5ee9f"),h(q,"class","svelte-1j1mmf"),g(z,"color","#f5ee9f"),h(z,"class","svelte-1j1mmf"),h($,"class","svelte-1j1mmf"),g(L,"color","#f5ee9f"),h(L,"class","svelte-1j1mmf"),g(A,"color","#f5ee9f"),h(A,"class","svelte-1j1mmf"),g(D,"color","#f5ee9f"),h(D,"class","svelte-1j1mmf"),g(I,"color","#f5ee9f"),h(I,"class","svelte-1j1mmf"),g(O,"text-align","center"),g(O,"color","#f5ee9f"),h(U,"class","svelte-1j1mmf"),h(Y,"class","svelte-1j1mmf"),h(V,"class","svelte-1j1mmf"),h(X,"class","svelte-1j1mmf"),h(Z,"class","svelte-1j1mmf"),h(b,"class","light svelte-1j1mmf"),h(N,"id","sim"),h(N,"class","teaser svelte-1j1mmf"),h(y,"class","teaser svelte-1j1mmf"),To(_.src,Hr=No)||h(_,"src",Hr),h(_,"alt","Image of the Rubik's cube "),g(_,"width","200px"),g(_,"height","210px"),h(_,"class","svelte-1j1mmf"),h(G,"class","teaser svelte-1j1mmf"),h(J,"class","teaser svelte-1j1mmf"),h(K,"class","teaser svelte-1j1mmf"),h(Q,"id","cow7"),To(M.src,to=Bo)||h(M,"src",to),h(M,"alt","Image of the Rubik's cube "),g(M,"width","200px"),g(M,"height","210px"),h(M,"class","svelte-1j1mmf"),h(ee,"class","svelte-1j1mmf"),h(c,"class","background"),g(t,"margin-left","8%"),g(t,"margin-right","8%"),h(t,"id","top"),h(P,"href","#top"),h(P,"class","svelte-1j1mmf")},m(p,n){Pt(p,t,n),e(t,w),e(t,te),e(t,F),e(t,Ze),e(t,R),e(t,ne),e(t,T),e(t,Ge),e(t,E),e(E,Je),e(t,Ke),e(t,j),e(j,Qe),e(t,et),e(t,H),e(H,tt),e(t,se),e(t,B),e(B,Rt),e(B,S),e(S,Tt),e(B,Et),e(t,jt),e(t,W),e(t,Ht),e(t,St),e(t,qt),e(t,q),e(t,zt),e(t,Lt),e(t,z),e(t,At),e(t,Dt),e(t,It),e(t,Ot),e(t,$),e(t,Nt),e(t,Bt),e(t,Wt),e(t,L),e(t,$t),e(t,Ut),e(t,A),e(t,Yt),e(t,Vt),e(t,Xt),e(t,D),e(t,Zt),e(t,Gt),e(t,Jt),e(t,I),e(t,Kt),e(t,re),e(t,Qt),e(t,O),e(t,en),e(t,U),e(t,tn),e(t,oe),e(t,nn),e(t,Y),e(t,sn),e(t,ae),e(t,rn),e(t,le),e(t,on),e(t,ie),e(t,an),e(t,ce),e(t,ln),e(t,nt),e(nt,cn),e(t,dn),e(t,de),e(t,hn),e(t,st),e(st,un),e(t,vn),e(t,he),e(t,mn),e(t,rt),e(rt,fn),e(t,pn),e(t,ue),e(t,V),e(t,bn),e(t,ve),e(t,gn),e(t,me),e(t,xn),e(t,fe),e(t,yn),e(t,pe),e(t,Cn),e(t,be),e(t,wn),e(t,ge),e(t,kn),e(t,Fn),e(t,_n),e(t,xe),e(t,Mn),e(t,b),e(b,X),e(b,Pn),e(b,ot),e(ot,Rn),e(b,Tn),e(b,at),e(at,En),e(b,jn),e(b,Z),e(b,Hn),e(b,lt),e(lt,Sn),e(b,qn),e(b,it),e(it,zn),e(b,Ln),e(b,ct),e(ct,An),e(b,Dn),e(b,ye),e(ye,In),e(ye,On),e(t,Nn),e(t,N),e(t,Bn),e(t,y),e(y,Wn),e(y,$n),e(y,Un),e(y,Ce),e(y,Yn),e(y,dt),e(dt,Vn),e(y,Xn),e(y,we),e(y,Zn),e(t,Gn),e(t,ke),e(t,Jn),e(t,Fe),e(t,Kn),e(t,ht),e(ht,Qn),e(t,es),e(t,_e),e(t,ts),e(t,ut),e(ut,ns),e(t,ss),e(t,Me),e(t,rs),e(t,Pe),e(t,os),e(t,_),e(t,as),e(t,Re),e(t,ls),e(t,Te),e(t,is),e(t,Ee),e(t,cs),e(t,vt),e(vt,ds),e(t,hs),e(t,je),e(t,us),e(t,G),e(t,vs),e(t,He),e(t,ms),e(t,Se),e(t,fs),e(t,J),e(t,ps),e(t,qe),e(t,bs),e(t,mt),e(mt,gs),e(t,xs),e(t,ze),e(t,ys),e(t,Le),e(t,Cs),e(t,K),e(t,ws),e(t,c),e(c,Ae),e(c,ks),e(c,De),e(c,Fs),e(c,Ie),e(c,_s),e(c,Q),e(c,Ms),e(c,ft),e(ft,Ps),e(c,Rs),e(c,Oe),e(c,Ts),e(c,pt),e(pt,Es),e(c,js),e(c,Ne),e(c,Hs),e(c,bt),e(bt,Ss),e(c,qs),e(c,Be),e(c,zs),e(c,We),e(c,Ls),e(c,gt),e(gt,As),e(c,Ds),e(c,$e),e(c,Is),e(c,Ue),e(c,Os),e(c,M),e(c,Ns),e(c,ee),e(c,Bs),e(c,Ye),e(c,Ws),e(c,xt),e(xt,$s),e(c,Us),e(c,Ve),Pt(p,Ft,n),Pt(p,P,n),Pt(p,_t,n),C&&C.m(p,n),Xe=!0},p(p,n){C&&C.p&&(!Xe||n[0]&131072)&&qo(C,Ys,p,p[17],Xe?Lo(Ys,p[17],n,null):zo(p[17]),null)},i(p){Xe||(Oo(C,p),Xe=!0)},o(p){Io(C,p),Xe=!1},d(p){p&&(u(t),u(Ft),u(P),u(_t)),C&&C.d(p)}}}var Eo="m(dF3x)  // 3",jo="dF3x = () => {}";function $o(i,t,w){let{$$slots:yt={},$$scope:te}=t;var F=`    function M (x) {
      return function go (func)`,Ct=`      {
        if (func === dF3x) return x;
        else x = func(x);
        return go;
      }`,Ze="    }";let R=`  function F(ar) {
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
  } `;var ne=`const b0 = 'blue';
  const b1 = 'blue';
  const b2 = 'blue';
  const b3 = 'blue';
  const b4 = 'blue';
  const b5 = 'blue';
  const b6 = 'blue';
  const b7 = 'blue';
  const b8 = "blue";

  const g0 = 'green';
  const g1 = 'green';
  const g2 = 'green';
  const g3 = 'green';
  const g4 = 'green';
  const g5 = 'green';
  const g6 = 'green';
  const g7 = 'green';
  const g8 = "green";

  const r0 = 'red';
  const r1 = 'red';
  const r2 = 'red';
  const r3 = 'red';
  const r4 = 'red';
  const r5 = 'red';
  const r6 = 'red';
  const r7 = 'red';
  const r8 = "red";

  const o0 = 'orange';
  const o1 = 'orange';
  const o2 = 'orange';
  const o3 = 'orange';
  const o4 = 'orange';
  const o5 = 'orange';
  const o6 = 'orange';
  const o7 = 'orange';
  const o8 = "orange";

  const y0 = 'yellow';
  const y1 = 'yellow';
  const y2 = 'yellow';
  const y3 = 'yellow';
  const y4 = 'yellow';
  const y5 = 'yellow';
  const y6 = 'yellow';
  const y7 = 'yellow';
  const y8 = "yellow";

  const w0 = 'white';
  const w1 = 'white';
  const w2 = 'white';
  const w3 = 'white';
  const w4 = 'white';
  const w5 = 'white';
  const w6 = 'white';
  const w7 = 'white';
  const w8 = 'white';

  var bb = [b0, b1, b2, b3, b4, b5, b6, b7, b8];
  var gg = [g0, g1, g2, g3, g4, g5, g6, g7, g8];
  var rr = [r0, r1, r2, r3, r4, r5, r6, r7, r8];
  var oo = [o0, o1, o2, o3, o4, o5, o6, o7, o8];
  var yy = [y0, y1, y2, y3, y4, y5, y6, y7, y8];
  var ww = [w0, w1, w2, w3, w4, w5, w6, w7, w8];

  var m = M([bb, gg, rr, oo, yy, ww]);`;const wt=`      <div class="face front">
        <div class="grid" >
          <div> <button class={m(dF3x)[3][0]} on:click = {() => {m = m(Fz)}} /> </div> 
          <div> <button class={m(dF3x)[3][1]} on:click = {() => {m = m(Cx)}} /> </div> 
          <div> <button class={m(dF3x)[3][2]} on:click = {() => {m = m(F)}} /> </div>  
          <div> <button class={m(dF3x)[3][3]} on:click = {() => {m = m(Cy)}} /> </div> 
          <div> <button class={m(dF3x)[3][4]} on:click = {() => {m = m(Zro)}} /> </div>
          <div><button class={m(dF3x)[3][5]} on:click = {() => {m = m(Cyr)}} /> </div> 
          <div><button class={m(dF3x)[3][6]} on:click = {() => {m = m(Fz)}} /> </div> 
          <div><button class={m(dF3x)[3][7]} on:click = {() => {m = m(Cxr)}} /> </div> 
          <div><button class={m(dF3x)[3][8]} on:click = {() => {m = m(F)}} /> </div> 
        </div>
      </div>`;var ne=`x =[ ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], ["green", "green", "green", "green", "green", "green", "green", "green", "green"], ["red", "red", "red", "red", "red", "red", "red", "red", "red"], ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"], ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"], ["white", "white", "white", "white", "white", "white", "white", "white", "white"] ]);

  Where
  
  var b0 = 'blue';
  var b1 = 'blue';
  var b2 = 'blue';
  var b3 = 'blue';
  var b4 = 'blue';
  var b5 = 'blue';
  var b6 = 'blue';
  var b7 = 'blue';
  var b8 = "blue";

  var g0 = 'green';
  var g1 = 'green';
  var g2 = 'green';
  var g3 = 'green';
  var g4 = 'green';
  var g5 = 'green';
  var g6 = 'green';
  var g7 = 'green';
  var g8 = "green";

  var r0 = 'red';
  var r1 = 'red';
  var r2 = 'red';
  var r3 = 'red';
  var r4 = 'red';
  var r5 = 'red';
  var r6 = 'red';
  var r7 = 'red';
  var r8 = "red";

  var o0 = 'orange';
  var o1 = 'orange';
  var o2 = 'orange';
  var o3 = 'orange';
  var o4 = 'orange';
  var o5 = 'orange';
  var o6 = 'orange';
  var o7 = 'orange';
  var o8 = "orange";

  var y0 = 'yellow';
  var y1 = 'yellow';
  var y2 = 'yellow';
  var y3 = 'yellow';
  var y4 = 'yellow';
  var y5 = 'yellow';
  var y6 = 'yellow';
  var y7 = 'yellow';
  var y8 = "yellow";

  var w0 = 'white';
  var w1 = 'white';
  var w2 = 'white';
  var w3 = 'white';
  var w4 = 'white';
  var w5 = 'white';
  var w6 = 'white';
  var w7 = 'white';
  var w8 = 'white';

  m = M([bb, gg, rr, oo, yy, ww]);`,T="m = M(3)",kt="m(v=>v**3)(v=>v*4)(v=>v-8)(Math.sqrt)",Ge="m(dF3x)  // 10",E="m(v=>v+4)(v=>v*3)  // Now x in the m-M(x) closure is 42",Je="m(dF3x) // 42",Ke=`      .blue {
          height: 60px;
          width: 60px;
          background-color: lightblue;
          display: inline;
          border-radius: 10px;
      }`,j=`  const R = function R(ar) {
    let temp = [];
    temp[0] = [
      ar[0][6],
      ar[0][3],
      ar[0][0],
      ar[0][7],
      ar[0][4],
      ar[0][1],
      ar[0][8],
      ar[0][5],
      ar[0][2],
    ];

    temp[1] = ar[1];

    temp[2] = [
      ar[4][8],
      ar[2][1],
      ar[2][2],
      ar[4][5],
      ar[2][4],
      ar[2][5],
      ar[4][2],
      ar[2][7],
      ar[2][8],
    ];

    temp[3] = [
      ar[3][0],
      ar[3][1],
      ar[5][2],
      ar[3][3],
      ar[3][4],
      ar[5][5],
      ar[3][6],
      ar[3][7],
      ar[5][8],
    ];

    temp[4] = [
      ar[4][0],
      ar[4][1],
      ar[3][2],
      ar[4][3],
      ar[4][4],
      ar[3][5],
      ar[4][6],
      ar[4][7],
      ar[3][8],
    ];

    temp[5] = [
      ar[5][0],
      ar[5][1],
      ar[2][6],
      ar[5][3],
      ar[5][4],
      ar[2][3],
      ar[5][6],
      ar[5][7],
      ar[2][0],
    ];
    return temp;
  }`,Qe=`.blue {
    height: 60px;
    width: 60px;
    background-color: lightblue;
    display: inline;
    border-radius: 10px;
  }
  .green {
    height: 60px;
    width: 60px;
    background-color: lightgreen;
    display: inline;
    border-radius: 10px;
  }
  .red {
    height: 60px;
    width: 60px;
    background-color: rgb(252, 97, 97);
    border-radius: 10px;
  }
  .orange {
    height: 60px;
    width: 60px;
    background-color: orange;
    border-radius: 10px;
  }
  .yellow {
    height: 60px;
    width: 60px;
    background-color: yellow;
    display: inline;
    border-radius: 10px;
  }
  .white { 
    height: 60px;
    width: 60px;
    background-color: white;
    border-radius: 10px;
  }`,et=`<div id="steady">
  <div class="container">
    <div class={cu}>
      <div class="face front">
        <div class="grid" >
          <div> <button class={m(dF3x)[3][0]} on:click = {() => {m = m(Fz)}} /> </div> 
          <div> <button class={m(dF3x)[3][1]} on:click = {() => {m = m(Cx)}} /> </div> 
          <div> <button class={m(dF3x)[3][2]} on:click = {() => {m = m(F)}} /> </div>  
          <div> <button class={m(dF3x)[3][3]} on:click = {() => {m = m(Cy)}} /> </div> 
          <div> <button class={m(dF3x)[3][4]} on:click = {() => {m = m(Zro)}} /> </div>
          <div><button class={m(dF3x)[3][5]} on:click = {() => {m = m(Cyr)}} /> </div> 
          <div><button class={m(dF3x)[3][6]} on:click = {() => {m = m(Fz)}} /> </div> 
          <div><button class={m(dF3x)[3][7]} on:click = {() => {m = m(Cxr)}} /> </div> 
          <div><button class={m(dF3x)[3][8]} on:click = {() => {m = m(F)}} /> </div> 
        </div>
      </div>

      <div class="face back">
        <div class="grid">
          <div class={m(dF3x)[2][8]} />
          <div class={m(dF3x)[2][7]} />
          <div class={m(dF3x)[2][6]} />
          <div class={m(dF3x)[2][5]} />
          <div class={m(dF3x)[2][4]} />
          <div class={m(dF3x)[2][3]} />
          <div class={m(dF3x)[2][2]} />
          <div class={m(dF3x)[2][1]} />
          <div class={m(dF3x)[2][0]} />
        </div>
      </div>

      <div class="face right">
        <div class="grid">
         <div><button class={m(dF3x)[0][0]} on:click = {() => {m = m(Rz)}} /> </div> 
          <div><button class={m(dF3x)[0][1]} on:click = {() => {m = m(Cz)}} /> </div> 
         <div><button class={m(dF3x)[0][2]} on:click = {() => {m = m(R)}} /> </div> 
          <div><button class={m(dF3x)[0][3]} on:click = {() => {m = m(Cy)}} /> </div> 
          <div> <button class={m(dF3x)[0][4]} on:click = {() => {m = m(Xro)}} /> </div>
          <div><button class={m(dF3x)[0][5]} on:click = {() => {m = m(Cyr)}} /> </div> 
          <div><button class={m(dF3x)[0][6]} on:click = {() => {m = m(Rz)}} /> </div> 
          <div><button class={m(dF3x)[0][7]} on:click = {() => {m = m(Czr)}} /> </div> 
          <div><button class={m(dF3x)[0][8]} on:click = {() => {m = m(R)}} /> </div> 
        </div>
      </div>

      <div class="face left">
        <div class="grid">
          <div class={m(dF3x)[1][0]} />
          <div class={m(dF3x)[1][1]} />
          <div class={m(dF3x)[1][2]} />
          <div class={m(dF3x)[1][3]} />
          <div class={m(dF3x)[1][4]} />
          <div class={m(dF3x)[1][5]} />
          <div class={m(dF3x)[1][6]} />
          <div class={m(dF3x)[1][7]} />
          <div class={m(dF3x)[1][8]} />
        </div>
      </div>

      <div class="face top">
        <div class="grid">
          <div><button class={m(dF3x)[4][0]} on:click = {() => {m = m(Uz)}} /> </div> 
          <div><button class={m(dF3x)[4][1]} on:click = {() => {m = m(Cx)}} /> </div> 
          <div><button class={m(dF3x)[4][2]} on:click = {() => {m = m(U)}} /> </div> 
          <div><button class={m(dF3x)[4][3]} on:click = {() => {m = m(Cz)}} /> </div> 
          <div> <button class={m(dF3x)[4][4]} on:click = {() => {m = m(Yro)}} /> </div>
          <div><button class={m(dF3x)[4][5]} on:click = {() => {m = m(Czr)}} /> </div> 
          <div><button class={m(dF3x)[4][6]} on:click = {() => {m = m(Uz)}} /> </div> 
          <div><button class={m(dF3x)[4][7]} on:click = {() => {m = m(Cxr)}} /> </div> 
          <div><button class={m(dF3x)[4][8]} on:click = {() => {m = m(U)}} /> </div> 
        </div>
      </div>

      <div class="face bottom">
        <div class="grid">
          <div class={m(dF3x)[5][0]} />
          <div class={m(dF3x)[5][1]} />
          <div class={m(dF3x)[5][2]} />
          <div class={m(dF3x)[5][3]} />
          <div class={m(dF3x)[5][4]} />
          <div class={m(dF3x)[5][5]} />
          <div class={m(dF3x)[5][6]} />
          <div class={m(dF3x)[5][7]} />
          <div class={m(dF3x)[5][8]} />
        </div>
      </div>
    </div>
  </div>
</div>`,H=`function handleEvent(e) { 
    console.log(e.keyCode);
         if (e.keyCode === 85)  m(Uz);
    else if (e.keyCode === 117) m(U);
    else if (e.keyCode === 68)  m(Dz);
    else if (e.keyCode === 100) m(D);
    else if (e.keyCode === 82)  m(Rz);
    else if (e.keyCode === 114) m(R);
    else if (e.keyCode === 76)  m(Lz);
    else if (e.keyCode === 108) m(L);
    else if (e.keyCode === 70)  m(Fz);
    else if (e.keyCode === 102) m(F);
    else if (e.keyCode === 66)  m(Bz);
    else if (e.keyCode === 98)  m(B);
    else if (e.keyCode === 77)  m(Cxr);
    else if (e.keyCode === 109) m(Cx);
    else if (e.keyCode === 69)  m(Cyr);
    else if (e.keyCode === 101) m(Cy);
    else if (e.keyCode === 83)  m(Czr);
    else if (e.keyCode === 115) m(Cz);
    else if (e.keyCode === 120) m(Xro);
    else if (e.keyCode === 88)  m(Xror);  
    else if (e.keyCode === 121) m(Yro);
    else if (e.keyCode === 89)  m(Yror);
    else if (e.keyCode === 122) m(Zro);
    else if (e.keyCode === 90)  m(Zror);
    else if (e.keyCode === 119) shu();
    else if (e.keyCode === 118) Start();
    else if (e.keyCode === 113) reverse();
    else if (e.keyCode === 105) previous();
    else if (e.keyCode === 73) getSaved();
    else if (e.keyCode === 111) save();
    // else if (e.keyCode === 116) rotate(); 
    m = m;  // In Svelte, this updates the DOM
  }`,tt=`function M (x) {
          return function go (func){
            if (func === dF3x) return x;
            else x = idP(x).then(v => func(v));
            return go;
          }
        }`;return i.$$set=se=>{"$$scope"in se&&w(17,te=se.$$scope)},[F,Ct,Ze,R,ne,wt,T,kt,Ge,E,Je,Ke,j,Qe,et,H,tt,te,yt]}class Xo extends Ao{constructor(t){super(),Do(this,t,$o,Wo,Ho,{},null,[-1,-1])}}export{Xo as component};
