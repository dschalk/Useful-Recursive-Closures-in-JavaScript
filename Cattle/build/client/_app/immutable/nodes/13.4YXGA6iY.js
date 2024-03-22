import{s as Qo,a as $o,u as er,g as tr,e as nr,r as or}from"../chunks/scheduler.gYNbTIBg.js";import{S as rr,i as sr,s as i,e as a,t as v,q as ar,f as p,a as u,c as l,b as y,g as c,d as g,j as m,h as ne,k as Gn,l as t,m as k,n as x,o as lr,p as ir}from"../chunks/index.pqPhgd5I.js";import{w as Go}from"../chunks/index.EDhKTW6m.js";function ur(r){let _,e,T,I,X,Pt="**************************************************************************",pt,s,mt="The Solitaire Game of Score",U,P,bt="The game is held in the closure returned initially by M(x) where M is:",J,N,oe,re,O,he="and x is an array of eight arrays defined as:",se,S,ae,h,E,V="It doesn&#39;t matter what, if anything, the function ret() would do if it were to be called because it doesn&#39;t get called. It&#39;s only purpose is to cause go(), the function returned by M, to return the current state of the value x held in the closure that was created by running var some-name = M(x). M can also be used anonymously to chain functions as in <span>M(2)(v=&gt;v+4)(v=&gt;v*7)(ret) = 42</span>.",q,w,G,A,K,Q,H,le,vt,D,Be="Your score will be the elapsed time after three rounds. A round is completed by computing the number 20 in two or three steps. For example, if your numbers are 1,3,4,20, you can complete the round in two steps with 4-3 and then 1 * 20. You'll have two 1's before the multiplication. It won't matter which one you use. If your first computation is 1 * 20, your numbers will be 3,4,20. You can still subtract 3 from 4 and multiply by 1, finishing in three steps instead of two.",fe,$,ie,Re,ee,Ie,j,gt="Reset",Pe,Ne,Oe,Se,z,ue,yt,Y,Ae,Ct,Z,He,_t,L,ze,wt,W,Mt,ce=r[0](r[25])[2]+"",Ye,kt,F,xt,de=r[0](r[25])[4]+"",Ue,Tt,Et,Bt,Rt,te,o="add",M,R,qe="subtract",Dt,pe,Qn="multiply",jt,me,$n="divide",Zt,be,eo="concat",Lt,ve,Nt,Wt,ge,Ot,Ft,ye,St,Xt,Jt,Vt,Gt,Ce,to="ROLL",Kt,Qt,$t,en,_e,no="test",tn,we,At,nn,Me,Ht,on,ke,zt,rn,xe,Yt,sn,an,ln,un,Te,oo="Back",hn,Ee,ro="Forward",fn,De,so=`Remember, just computing 20 isn't always enough. One of the numbers used to get 20 has to be the
        result of a prior computation`,cn,je,ao="",Ze,lo="Background",dn,Le,io="Score is a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I decided to make an online multi-player version.",pn,We,uo="After some messy experiences developing a server with other	programming languages, I turned to Haskell for the robust and easily maintainable backend that carried me through several experiments with various front ends. The server can handle a large number of 	number of groups of interacting players. Each group has its own chat box and shared todo list, and all members always see the same dice roll as it gets whittled down by players selecting numbers.",mn,Fe,ho='One of my fondest memories began with Alex asking me to to devise a way to display all solutions to a dice roll or else report that no solution exists. My initial impression was that an algorithm that could so that would be unreasonably complicated and resource intensive. But not long afterward, I was delighted -- maybe "euphoric" is the right word -- as I showed Alex a button on the player interface that would abort gameplay and display every way to get 20 in two or three steps. It even broke the solutions down into categories. My appreciation of the Haskell programming language continued to grow.',bn,Xe,fo='In the online game, players can gain a point by	clicking "Impossible" unless another player finds a solution. In that case, the player who clicked "Impossible" loses a point. Players can change the default number of dice sides from 6,6,12,and 20 and the goal from the default	value of 20.',vn,Je,co="About this Solitaire Version",gn,Ve,po=`This demonstration doesn't rely on a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of closures. You can traverse the history of game play for the current roll. If you make a
        mistake, you can take back your move and do something else. If you traverse back and forth very
        far, subsequent computations will be very slow and the program might even crash. If you just take back a move, computations proceed normally.`,yn,Ge,mo=`The function fu() is the brains behind the game of Score. Each time a number or operator is
        clicked, m2(fu) is called, the monad m2 is modified, and the change is reflected in the DOM. The
        state of play in M is an array of seven arrays. Let's call it ar. If an operator op is in ar[2]
        and two numbers a and b are in ar[1], fu calls calc(a,b,op) and the result is added to ar[0] and
        ar[3]. ar[0] are the numbers in the game interface. ar[3] hold numbers that have been computed. At
        least one of the numbers in ar[3] has to be used to compute 20 in order to gain a point. If the
        number of points reaches 5, fu causes "You win" to be displayed, sets the score back to 0, and
        calls runRoll, starting another round of play.`,Cn,Ke,bo=`At the end of fu(), two formatting functions are Called. The first, update(), refreshes the game
        buttons, causing them to reflect the current state of ar. The second hides buttons that correspond
        to values of undefine and shows buttons that correspond to numbers in ar. This is done by
        switching variables p in "style = 'display: p' back and forth between "none" and "inline".`,_n,It,wn,Qe,Mn,kn,$e,vo='Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.',xn,et,Tn,En,tt,go=`The "x =[ 
            [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
            [], ['+'], [], [0], [], [0], [] ]);" format will be maintained throught game play. x[0]
        simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and
        x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved
        in arriving at 20. That's the reason, toward the end of fu(), that the intersection of a[0] and
        a[4] is examined when 20 is computed. Here are the first few functions called when a number is
        clicked:`,Bn,nt,Rn,In,ot,yo=`The first line of fu() is the calculation result that is generated whenever there are two items in
        (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If
        "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and
        the last test in fu fails, even though 20 was produced on the second computation.`,Pn,rt,Co=`If no operator has been selected, it's possible to click a third number. The program doesn't
        complain, it just puts the number back for you with:`,Nn,st,On,Sn,at,_o=`If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back
        and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first
        position and pushed back on the right.`,An,lt,wo=`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS
        display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's
        how it is defined:`,Hn,it,Mo=`For solitaire version presented here, a function named "m2" will form a closure with M as
        follows: "m2 = M(x)" where x = [ Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], [], ['+'], [], [0], [], [0], []]) m2 will consume functions
        that, as the definition of M specifies, operate on x inside of M. x corresponds to the state of
        game play. After each click on a number or operator button, m2(fu) is called. The record of prior
        states kept in x[7] allows players to traverse the history of their choices.`,zn,ut,ko=`In the solitaire version of the game of score, x in M(x) is, as mentioned above, the array of
        arrays [ [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], [], ['+'], [], [0], [], [0], []] ] where x[0], x[1], x[2], and x[3] start out as four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the
        number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number
        of successes until the player wins by reaching 5, x[5] contains all prior states as the player
        selects numbers and operators and is used for reversing state a little or all the way back to the
        original roll. x[6] is an index of where in x[5] play is taking place, and x[7] contains every
        state during a round. using x[6] to travers the history of game play in both directions.`,Yn,ht,xo='Why I Call Them "Monads"',Un,ft,To=`I sometimes call functions returned by M "monads", much to the consternation of some "functional
        programmers" who scoff at the idea that JavaScript could possibly have monads such as those
        defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category
        Theory monads. Haskell monads insulate chained computation from the global space, consuming
        functions that return new Monads. Mine happen to do the same thing. Haskell monads need to
        navigate through various types but I don't bother with that. The definition of "M" shows that the
        returned function responds to arguments that are functions and also to the string "Stop."`,qn,ct,Eo=`In my opinion, trying to define JavaScript objects that resemble the basic monads found in the
        Haskell Prelude module, amusing though it may be, isn't likely to produce anything very useful.
        People who think Haskell, or the supposed mathematical category of Haskell types and functions
        called "Hask", are actually Category Theory categories are mistaken. Category Theory inspired the
        development of Haskell monads and it might not be merely coincidental that the monads I am about
        to define are functionally similar to Haskell state monads, though superficially quite different. Both
        transform state along pipelines isolated from their outer scope by operating on functions that
        return new monads. Both preserve state for future transformations or for eventual use in their
        outer scopes. Mine call functions in their outer scopes in order to update the DOM, not having to
        wait to do it in a main() function. I'm not trying to mimic Haskell or any other functional
        programming language. I'll probably stop calling my little closures "monads."`,Dn,dt,jn,Zn,Ln,Wn,Ut,b,Fn,Bo;const Xn=r[46].default,B=$o(Xn,r,r[45],null);return{c(){_=i(),e=a("div"),T=a("br"),I=i(),X=a("div"),X.textContent=Pt,pt=i(),s=a("h1"),s.textContent=mt,U=i(),P=a("p"),P.textContent=bt,J=i(),N=a("pre"),oe=v(r[37]),re=i(),O=a("p"),O.textContent=he,se=i(),S=a("pre"),ae=v(r[44]),h=i(),E=a("p"),E.innerHTML=V,q=i(),w=a("p"),G=v("Here, ret() is defined as "),A=a("span"),K=v(r[39]),Q=v(`. Later versions of M dispense with ret(), returning the value held in the m-M(x) closure whenever the argument is null.
        `),H=a("pre"),le=v(r[38]),vt=i(),D=a("p"),D.textContent=Be,fe=i(),$=a("h2"),ie=v(r[3]),Re=i(),ee=a("br"),Ie=i(),j=a("button"),j.textContent=gt,Pe=i(),Ne=a("br"),Oe=a("br"),Se=i(),z=a("button"),ue=v(r[4]),yt=i(),Y=a("button"),Ae=v(r[5]),Ct=i(),Z=a("button"),He=v(r[6]),_t=i(),L=a("button"),ze=v(r[7]),wt=i(),W=a("span"),Mt=v("Operator: "),Ye=v(ce),kt=i(),F=a("span"),xt=v("Score: "),Ue=v(de),Tt=i(),Et=a("br"),Bt=a("br"),Rt=i(),te=a("button"),te.textContent=o,M=i(),R=a("button"),R.textContent=qe,Dt=i(),pe=a("button"),pe.textContent=Qn,jt=i(),me=a("button"),me.textContent=$n,Zt=i(),be=a("button"),be.textContent=eo,Lt=i(),ve=a("span"),Nt=v(r[1]),Wt=i(),ge=a("span"),Ot=v(r[21]),Ft=i(),ye=a("span"),St=v(r[2]),Xt=i(),Jt=a("br"),Vt=a("br"),Gt=i(),Ce=a("button"),Ce.textContent=to,Kt=i(),Qt=a("br"),$t=a("br"),en=i(),_e=a("button"),_e.textContent=no,tn=i(),we=a("button"),At=v(r[16]),nn=i(),Me=a("button"),Ht=v(r[17]),on=i(),ke=a("button"),zt=v(r[18]),rn=i(),xe=a("button"),Yt=v(r[19]),sn=i(),an=a("br"),ln=a("br"),un=i(),Te=a("button"),Te.textContent=oo,hn=i(),Ee=a("button"),Ee.textContent=ro,fn=i(),De=a("p"),De.textContent=so,cn=i(),je=a("p"),je.innerHTML=ao,Ze=a("h2"),Ze.textContent=lo,dn=i(),Le=a("p"),Le.textContent=io,pn=i(),We=a("p"),We.textContent=uo,mn=i(),Fe=a("p"),Fe.textContent=ho,bn=i(),Xe=a("p"),Xe.textContent=fo,vn=i(),Je=a("h2"),Je.textContent=co,gn=i(),Ve=a("p"),Ve.textContent=po,yn=i(),Ge=a("p"),Ge.textContent=mo,Cn=i(),Ke=a("p"),Ke.textContent=bo,_n=i(),It=a("a"),wn=i(),Qe=a("pre"),Mn=v(r[36]),kn=i(),$e=a("p"),$e.textContent=vo,xn=i(),et=a("pre"),Tn=v(r[40]),En=i(),tt=a("p"),tt.textContent=go,Bn=i(),nt=a("pre"),Rn=v(r[41]),In=i(),ot=a("p"),ot.textContent=yo,Pn=i(),rt=a("p"),rt.textContent=Co,Nn=i(),st=a("pre"),On=v(r[42]),Sn=i(),at=a("p"),at.textContent=_o,An=i(),lt=a("p"),lt.textContent=wo,Hn=i(),it=a("p"),it.textContent=Mo,zn=i(),ut=a("p"),ut.textContent=ko,Yn=i(),ht=a("h2"),ht.textContent=xo,Un=i(),ft=a("p"),ft.textContent=To,qn=i(),ct=a("p"),ct.textContent=Eo,Dn=v(`
    
    Caution:
    `),dt=a("pre"),jn=v(r[43]),Zn=i(),Ln=a("br"),Wn=a("br"),Ut=i(),B&&B.c(),this.h()},l(f){ar("svelte-1t861vf",document.head).forEach(p),_=u(f),e=l(f,"DIV",{style:!0});var n=y(e);T=l(n,"BR",{}),I=u(n),X=l(n,"DIV",{"data-svelte-h":!0}),c(X)!=="svelte-9ovhf0"&&(X.textContent=Pt),pt=u(n),s=l(n,"H1",{style:!0,"data-svelte-h":!0}),c(s)!=="svelte-12jmyso"&&(s.textContent=mt),U=u(n),P=l(n,"P",{"data-svelte-h":!0}),c(P)!=="svelte-1ddt8vg"&&(P.textContent=bt),J=u(n),N=l(n,"PRE",{class:!0});var Ro=y(N);oe=g(Ro,r[37]),Ro.forEach(p),re=u(n),O=l(n,"P",{"data-svelte-h":!0}),c(O)!=="svelte-b2vf74"&&(O.textContent=he),se=u(n),S=l(n,"PRE",{class:!0});var Io=y(S);ae=g(Io,r[44]),Io.forEach(p),h=u(n),E=l(n,"P",{"data-svelte-h":!0}),c(E)!=="svelte-ixx4tx"&&(E.innerHTML=V),q=u(n),w=l(n,"P",{});var qt=y(w);G=g(qt,"Here, ret() is defined as "),A=l(qt,"SPAN",{});var Po=y(A);K=g(Po,r[39]),Po.forEach(p),Q=g(qt,`. Later versions of M dispense with ret(), returning the value held in the m-M(x) closure whenever the argument is null.
        `),qt.forEach(p),H=l(n,"PRE",{class:!0});var No=y(H);le=g(No,r[38]),No.forEach(p),vt=u(n),D=l(n,"P",{"data-svelte-h":!0}),c(D)!=="svelte-12plheh"&&(D.textContent=Be),fe=u(n),$=l(n,"H2",{});var Oo=y($);ie=g(Oo,r[3]),Oo.forEach(p),Re=u(n),ee=l(n,"BR",{}),Ie=u(n),j=l(n,"BUTTON",{"data-svelte-h":!0}),c(j)!=="svelte-1p8ycuh"&&(j.textContent=gt),Pe=u(n),Ne=l(n,"BR",{}),Oe=l(n,"BR",{}),Se=u(n),z=l(n,"BUTTON",{style:!0});var So=y(z);ue=g(So,r[4]),So.forEach(p),yt=u(n),Y=l(n,"BUTTON",{style:!0});var Ao=y(Y);Ae=g(Ao,r[5]),Ao.forEach(p),Ct=u(n),Z=l(n,"BUTTON",{style:!0});var Ho=y(Z);He=g(Ho,r[6]),Ho.forEach(p),_t=u(n),L=l(n,"BUTTON",{style:!0});var zo=y(L);ze=g(zo,r[7]),zo.forEach(p),wt=u(n),W=l(n,"SPAN",{style:!0});var Jn=y(W);Mt=g(Jn,"Operator: "),Ye=g(Jn,ce),Jn.forEach(p),kt=u(n),F=l(n,"SPAN",{style:!0});var Vn=y(F);xt=g(Vn,"Score: "),Ue=g(Vn,de),Vn.forEach(p),Tt=u(n),Et=l(n,"BR",{}),Bt=l(n,"BR",{}),Rt=u(n),te=l(n,"BUTTON",{"data-svelte-h":!0}),c(te)!=="svelte-1e12d00"&&(te.textContent=o),M=u(n),R=l(n,"BUTTON",{"data-svelte-h":!0}),c(R)!=="svelte-1kswafo"&&(R.textContent=qe),Dt=u(n),pe=l(n,"BUTTON",{"data-svelte-h":!0}),c(pe)!=="svelte-1yud9f9"&&(pe.textContent=Qn),jt=u(n),me=l(n,"BUTTON",{"data-svelte-h":!0}),c(me)!=="svelte-gsri11"&&(me.textContent=$n),Zt=u(n),be=l(n,"BUTTON",{"data-svelte-h":!0}),c(be)!=="svelte-1ta58wz"&&(be.textContent=eo),Lt=u(n),ve=l(n,"SPAN",{style:!0});var Yo=y(ve);Nt=g(Yo,r[1]),Yo.forEach(p),Wt=u(n),ge=l(n,"SPAN",{style:!0});var Uo=y(ge);Ot=g(Uo,r[21]),Uo.forEach(p),Ft=u(n),ye=l(n,"SPAN",{style:!0});var qo=y(ye);St=g(qo,r[2]),qo.forEach(p),Xt=u(n),Jt=l(n,"BR",{}),Vt=l(n,"BR",{}),Gt=u(n),Ce=l(n,"BUTTON",{"data-svelte-h":!0}),c(Ce)!=="svelte-1fzj6m7"&&(Ce.textContent=to),Kt=u(n),Qt=l(n,"BR",{}),$t=l(n,"BR",{}),en=u(n),_e=l(n,"BUTTON",{"data-svelte-h":!0}),c(_e)!=="svelte-1pj6w29"&&(_e.textContent=no),tn=u(n),we=l(n,"BUTTON",{style:!0});var Do=y(we);At=g(Do,r[16]),Do.forEach(p),nn=u(n),Me=l(n,"BUTTON",{style:!0});var jo=y(Me);Ht=g(jo,r[17]),jo.forEach(p),on=u(n),ke=l(n,"BUTTON",{style:!0});var Zo=y(ke);zt=g(Zo,r[18]),Zo.forEach(p),rn=u(n),xe=l(n,"BUTTON",{style:!0});var Lo=y(xe);Yt=g(Lo,r[19]),Lo.forEach(p),sn=u(n),an=l(n,"BR",{}),ln=l(n,"BR",{}),un=u(n),Te=l(n,"BUTTON",{"data-svelte-h":!0}),c(Te)!=="svelte-10mew4k"&&(Te.textContent=oo),hn=u(n),Ee=l(n,"BUTTON",{"data-svelte-h":!0}),c(Ee)!=="svelte-1fu3ck2"&&(Ee.textContent=ro),fn=u(n),De=l(n,"P",{"data-svelte-h":!0}),c(De)!=="svelte-1j12tk4"&&(De.textContent=so),cn=u(n),je=l(n,"P",{"data-svelte-h":!0}),c(je)!=="svelte-o0cwe5"&&(je.innerHTML=ao),Ze=l(n,"H2",{"data-svelte-h":!0}),c(Ze)!=="svelte-1c47mae"&&(Ze.textContent=lo),dn=u(n),Le=l(n,"P",{"data-svelte-h":!0}),c(Le)!=="svelte-1iwmjdh"&&(Le.textContent=io),pn=u(n),We=l(n,"P",{"data-svelte-h":!0}),c(We)!=="svelte-90lq4n"&&(We.textContent=uo),mn=u(n),Fe=l(n,"P",{"data-svelte-h":!0}),c(Fe)!=="svelte-14y7d2j"&&(Fe.textContent=ho),bn=u(n),Xe=l(n,"P",{"data-svelte-h":!0}),c(Xe)!=="svelte-ipd2o"&&(Xe.textContent=fo),vn=u(n),Je=l(n,"H2",{"data-svelte-h":!0}),c(Je)!=="svelte-nx0ma9"&&(Je.textContent=co),gn=u(n),Ve=l(n,"P",{"data-svelte-h":!0}),c(Ve)!=="svelte-92aqys"&&(Ve.textContent=po),yn=u(n),Ge=l(n,"P",{"data-svelte-h":!0}),c(Ge)!=="svelte-ho031a"&&(Ge.textContent=mo),Cn=u(n),Ke=l(n,"P",{"data-svelte-h":!0}),c(Ke)!=="svelte-1sqt9j8"&&(Ke.textContent=bo),_n=u(n),It=l(n,"A",{id:!0}),y(It).forEach(p),wn=u(n),Qe=l(n,"PRE",{class:!0});var Wo=y(Qe);Mn=g(Wo,r[36]),Wo.forEach(p),kn=u(n),$e=l(n,"P",{"data-svelte-h":!0}),c($e)!=="svelte-15rv1aj"&&($e.textContent=vo),xn=u(n),et=l(n,"PRE",{class:!0});var Fo=y(et);Tn=g(Fo,r[40]),Fo.forEach(p),En=u(n),tt=l(n,"P",{"data-svelte-h":!0}),c(tt)!=="svelte-gtqu57"&&(tt.textContent=go),Bn=u(n),nt=l(n,"PRE",{class:!0});var Xo=y(nt);Rn=g(Xo,r[41]),Xo.forEach(p),In=u(n),ot=l(n,"P",{"data-svelte-h":!0}),c(ot)!=="svelte-zq379y"&&(ot.textContent=yo),Pn=u(n),rt=l(n,"P",{"data-svelte-h":!0}),c(rt)!=="svelte-yzh3on"&&(rt.textContent=Co),Nn=u(n),st=l(n,"PRE",{class:!0});var Jo=y(st);On=g(Jo,r[42]),Jo.forEach(p),Sn=u(n),at=l(n,"P",{"data-svelte-h":!0}),c(at)!=="svelte-412cb9"&&(at.textContent=_o),An=u(n),lt=l(n,"P",{"data-svelte-h":!0}),c(lt)!=="svelte-9wuunx"&&(lt.textContent=wo),Hn=u(n),it=l(n,"P",{"data-svelte-h":!0}),c(it)!=="svelte-1dbb3x7"&&(it.textContent=Mo),zn=u(n),ut=l(n,"P",{"data-svelte-h":!0}),c(ut)!=="svelte-7tl240"&&(ut.textContent=ko),Yn=u(n),ht=l(n,"H2",{"data-svelte-h":!0}),c(ht)!=="svelte-1kuwtpn"&&(ht.textContent=xo),Un=u(n),ft=l(n,"P",{"data-svelte-h":!0}),c(ft)!=="svelte-1bae15k"&&(ft.textContent=To),qn=u(n),ct=l(n,"P",{"data-svelte-h":!0}),c(ct)!=="svelte-ht7zg4"&&(ct.textContent=Eo),Dn=g(n,`
    
    Caution:
    `),dt=l(n,"PRE",{class:!0});var Vo=y(dt);jn=g(Vo,r[43]),Vo.forEach(p),Zn=u(n),Ln=l(n,"BR",{}),Wn=l(n,"BR",{}),n.forEach(p),Ut=u(f),B&&B.l(f),this.h()},h(){document.title="The Solitaire Game of Score",m(s,"text-align","center"),ne(N,"class","svelte-6bq8z1"),ne(S,"class","svelte-6bq8z1"),ne(H,"class","svelte-6bq8z1"),m(z,"display",r[8]),m(Y,"display",r[9]),m(Z,"display",r[10]),m(L,"display",r[11]),m(W,"margin-left","8%"),m(W,"font-size","32px"),m(F,"margin-left","64px"),m(F,"font-size","32px"),m(ve,"margin-left","20px"),m(ve,"font-size","28px"),m(ge,"margin-left","20px"),m(ge,"font-size","38px"),m(ye,"margin-left","20px"),m(ye,"font-size","38px"),m(we,"display",r[12]),m(Me,"display",r[13]),m(ke,"display",r[14]),m(xe,"display",r[15]),ne(It,"id","scoreDef"),ne(Qe,"class","svelte-6bq8z1"),ne(et,"class","svelte-6bq8z1"),ne(nt,"class","svelte-6bq8z1"),ne(st,"class","svelte-6bq8z1"),ne(dt,"class","svelte-6bq8z1"),m(e,"margin-left","12%"),m(e,"margin-right","12%")},m(f,d){Gn(f,_,d),Gn(f,e,d),t(e,T),t(e,I),t(e,X),t(e,pt),t(e,s),t(e,U),t(e,P),t(e,J),t(e,N),t(N,oe),t(e,re),t(e,O),t(e,se),t(e,S),t(S,ae),t(e,h),t(e,E),t(e,q),t(e,w),t(w,G),t(w,A),t(A,K),t(w,Q),t(e,H),t(H,le),t(e,vt),t(e,D),t(e,fe),t(e,$),t($,ie),t(e,Re),t(e,ee),t(e,Ie),t(e,j),t(e,Pe),t(e,Ne),t(e,Oe),t(e,Se),t(e,z),t(z,ue),t(e,yt),t(e,Y),t(Y,Ae),t(e,Ct),t(e,Z),t(Z,He),t(e,_t),t(e,L),t(L,ze),t(e,wt),t(e,W),t(W,Mt),t(W,Ye),t(e,kt),t(e,F),t(F,xt),t(F,Ue),t(e,Tt),t(e,Et),t(e,Bt),t(e,Rt),t(e,te),t(e,M),t(e,R),t(e,Dt),t(e,pe),t(e,jt),t(e,me),t(e,Zt),t(e,be),t(e,Lt),t(e,ve),t(ve,Nt),t(e,Wt),t(e,ge),t(ge,Ot),t(e,Ft),t(e,ye),t(ye,St),t(e,Xt),t(e,Jt),t(e,Vt),t(e,Gt),t(e,Ce),t(e,Kt),t(e,Qt),t(e,$t),t(e,en),t(e,_e),t(e,tn),t(e,we),t(we,At),t(e,nn),t(e,Me),t(Me,Ht),t(e,on),t(e,ke),t(ke,zt),t(e,rn),t(e,xe),t(xe,Yt),t(e,sn),t(e,an),t(e,ln),t(e,un),t(e,Te),t(e,hn),t(e,Ee),t(e,fn),t(e,De),t(e,cn),t(e,je),t(e,Ze),t(e,dn),t(e,Le),t(e,pn),t(e,We),t(e,mn),t(e,Fe),t(e,bn),t(e,Xe),t(e,vn),t(e,Je),t(e,gn),t(e,Ve),t(e,yn),t(e,Ge),t(e,Cn),t(e,Ke),t(e,_n),t(e,It),t(e,wn),t(e,Qe),t(Qe,Mn),t(e,kn),t(e,$e),t(e,xn),t(e,et),t(et,Tn),t(e,En),t(e,tt),t(e,Bn),t(e,nt),t(nt,Rn),t(e,In),t(e,ot),t(e,Pn),t(e,rt),t(e,Nn),t(e,st),t(st,On),t(e,Sn),t(e,at),t(e,An),t(e,lt),t(e,Hn),t(e,it),t(e,zn),t(e,ut),t(e,Yn),t(e,ht),t(e,Un),t(e,ft),t(e,qn),t(e,ct),t(e,Dn),t(e,dt),t(dt,jn),t(e,Zn),t(e,Ln),t(e,Wn),Gn(f,Ut,d),B&&B.m(f,d),b=!0,Fn||(Bo=[k(j,"click",r[35]),k(z,"click",r[47]),k(Y,"click",r[48]),k(Z,"click",r[49]),k(L,"click",r[50]),k(te,"click",r[51]),k(R,"click",r[52]),k(pe,"click",r[53]),k(me,"click",r[54]),k(be,"click",r[55]),k(Ce,"click",r[56]),k(_e,"click",r[57]),k(Te,"click",r[58]),k(Ee,"click",r[59])],Fn=!0)},p(f,d){(!b||d[0]&8)&&x(ie,f[3]),(!b||d[0]&16)&&x(ue,f[4]),(!b||d[0]&256)&&m(z,"display",f[8]),(!b||d[0]&32)&&x(Ae,f[5]),(!b||d[0]&512)&&m(Y,"display",f[9]),(!b||d[0]&64)&&x(He,f[6]),(!b||d[0]&1024)&&m(Z,"display",f[10]),(!b||d[0]&128)&&x(ze,f[7]),(!b||d[0]&2048)&&m(L,"display",f[11]),(!b||d[0]&1)&&ce!==(ce=f[0](f[25])[2]+"")&&x(Ye,ce),(!b||d[0]&1)&&de!==(de=f[0](f[25])[4]+"")&&x(Ue,de),(!b||d[0]&2)&&x(Nt,f[1]),(!b||d[0]&2097152)&&x(Ot,f[21]),(!b||d[0]&4)&&x(St,f[2]),(!b||d[0]&65536)&&x(At,f[16]),(!b||d[0]&4096)&&m(we,"display",f[12]),(!b||d[0]&131072)&&x(Ht,f[17]),(!b||d[0]&8192)&&m(Me,"display",f[13]),(!b||d[0]&262144)&&x(zt,f[18]),(!b||d[0]&16384)&&m(ke,"display",f[14]),(!b||d[0]&524288)&&x(Yt,f[19]),(!b||d[0]&32768)&&m(xe,"display",f[15]),B&&B.p&&(!b||d[1]&16384)&&er(B,Xn,f,f[45],b?nr(Xn,f[45],d,null):tr(f[45]),null)},i(f){b||(lr(B,f),b=!0)},o(f){ir(B,f),b=!1},d(f){f&&(p(_),p(e),p(Ut)),B&&B.d(f),Fn=!1,or(Bo)}}}function Ko(){}function hr(r,_,e){var T=parseInt(r,10),I=parseInt(_,10);return e==="+"?T+I:e==="*"?T*I:e==="-"?T-I:e==="/"?T/I:e==="@"?" "+T+I:"fubar"}function Kn(r){return JSON.parse(JSON.stringify(r))}function C(r){return function _(e){return e===Ko?r:(r=e(r),_)}}function fr(r,_){return r.filter(e=>_.includes(e))}function cr(r,_,e){let T,{$$slots:I={},$$scope:X}=_;const Pt=Go(localStorage.getItem("userName")),pt=Go(localStorage.getItem("top"));Pt.subscribe(o=>localStorage.userName=o),pt.subscribe(o=>localStorage.top=o);var s,mt=1001,U=0,P=0,bt,J,J="",E,V,q,w,N="none",oe="none",re="none",O="none",he="none",se="none",S="none",ae="none",h=Ko,E,V,q,w,G,A,K,Q,H;H=o=>{var M=[[Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*12)+1,Math.floor(Math.random()*20)+1],[],["+"],[],[o],[],[0],[]];return e(0,s=C(M)),e(0,s=C(s(h))),vt(s),s(ee),ue&&yt(),s};var le="";function vt(o){console.log("In updateRoll. m(s) is",o(h)),e(4,E=o(h)[0][0]),e(5,V=o(h)[0][1]),e(6,q=o(h)[0][2]),e(7,w=o(h)[0][3]),e(16,G=o(h)[1][0]),e(17,A=o(h)[1][1]),e(18,K=o(h)[1][2]),e(19,Q=o(h)[1][3]),o(h)[2],o(h)[3],o(h)[4],e(8,N=e(9,oe=e(10,re=e(11,O="inline")))),e(12,he=e(13,se=e(14,S=e(15,ae="none"))))}function D(){e(8,N=e(9,oe=e(10,re=e(11,O=e(12,he=e(13,se=e(14,S=e(15,ae="none")))))))),E!=null&&e(8,N="inline"),V!=null&&e(9,oe="inline"),q!=null&&e(10,re="inline"),w!=null&&e(11,O="inline"),G!=null&&e(12,he="inline"),A!=null&&e(13,se="inline"),K!=null&&e(14,S="inline"),Q!=null&&e(15,ae="inline")}s=C([[Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*12)+1,Math.floor(Math.random()*20)+1],[],["+"],[],[0],[],[0],[]]);var Be=function(){e(4,E=s(h)[0][0]),e(5,V=s(h)[0][1]),e(6,q=s(h)[0][2]),e(7,w=s(h)[0][3]),s(h)[2],s(h)[3],s(h)[4],e(16,G=s(h)[1][0]),e(17,A=s(h)[1][1]),e(18,K=s(h)[1][2]),e(19,Q=s(h)[1][3])},fe="",$;$=o=>{if(o[5].length<1){e(0,s=C(o)),console.log("You're already all the way back");return}else{var M=o[7],o=o[5][o[5].length-1];o[7]=M,e(0,s=C(o)),Be(),D()}};var ie;ie=o=>{var M=o[6][0];if(o[5].length===o[7].length){console.log("Already at the top"),e(0,s=C(o));return}else{var R=Kn(o[7]),o=o[7][M+1];o[7]=R,e(0,s=C(o)),Be(),D()}};function Re(){var o=s(h);return console.log("<><><><><><><><> xx is",o),console.log(o[0]),console.log("xx[5].length is ",o[5].length),console.log("index is",o[6]),e(0,s=C(o)),s}function ee(o){o[5].push(Kn([o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]])),o[7].push(Kn(o)),o[6][0]+=1;var M;o[4];var R;if(o[1].length===2&&o[2].length===1&&(R=o[1],M=hr(o[1][0],o[1][1],o[2][0]),o[0].push(M),o[3].push(M),o[1]=[],e(0,s=C(o))),o[1].length===3&&o[0].push(o[1].pop()),M==20&&fr(R,o[3]).length>0){if(o[4][0]==2)Y(),e(21,fe="You win! Your score is ");else{var qe=parseInt(o[4],10);qe+=1,e(1,le="           Your score increased to "+qe),H(qe)}setTimeout(()=>e(1,le=e(21,fe="")),8e3)}return Be(),D(),s(h)}var Ie=o=>{o[1].push(o[0][0]),o[0].shift(),e(0,s=C(o)),s(ee)},j=o=>{o[1].push(o[0].splice(1,1)[0]),e(0,s=C(o)),e(0,s=s(ee))},gt=o=>{o[1].push(o[0].splice(2,1)[0]),e(0,s=C(o)),e(0,s=s(ee))},Pe=o=>{o[1].push(o[0].splice(3,1)[0]),e(0,s=C(o)),e(0,s=s(ee))};function Ne(o){o[2]="+",e(0,s=C(o))}function Oe(o){o[2]="*",e(0,s=C(o))}function Se(o){o[2]="/",e(0,s=C(o))}function z(o){o[2]="@",e(0,s=C(o))}var ue=!0,yt=function o(){ue=!1,U>=9?(U=0,P+=1):U+=1,e(3,J=P+"."+U),bt=setTimeout(()=>o(),100)};function Y(){clearTimeout(bt),e(2,mt=J);var o=s(h);o[4]=[0],e(0,s=C(o)),U=0,P=0,e(3,J=P+"."+U),ue=!0}var Ae=`function fu (a) {                  // fu
      a[5].push(clone(a));
      a[7].push(clone(a)); // All game states for use in "Back" and "Forward."
      a[6][0] += 1;
        // a[1].push(a[0].pop());
      var result;
      SCORE = a[4];
      var a1;
      if (a[1].length === 2 && a[2].length === 1)   {
        a1 = a[1];
        result = calc(a[1][0], a[1][1],a[2][0]);
        a[0].push(result);
        a[3].push(result);
        a[1] = [];
        m2 = M(a);
      }
    
      if (a[1].length === 3) {
        a[0].push(a[1].pop());
      }
    
      if (result == 20 && intersection(a1, a[3]).length > 0) {
          if (SCORE === 4) {
              ZWIN = "You win! "
              a[4][0] = 0;
              runRoll(0);
          }
          else {
              var aint = parseInt(a[4][0], 10);
              aint += 1;
              Z = "           Your score increased to " + aint;
              runRoll(aint);
          }
          setTimeout(() => Z = ZWIN = "", 3000);
      }
      update();
      sfunc();
      return m2(s);
    };
    
    var update = () => { // The button displays will correspond to the values in m2.
      AA = m2(s)[0][0];
      BB = m2(s)[0][1];
      CC = m2(s)[0][2];
      DD = m2(s)[0][3];
      EE = m2(s)[2];
      FF = m2(s)[3];
      SCORE = m2(s)[4];
      WW = m2(s)[1][0];
      XX = m2(s)[1][1];
      YY = m2(s)[1][2];
      ZZ = m2(s)[1][3];
    }
    
    function sfunc () {
        b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none"; // All button displays controlled by b's disappear.
        if (AA != (undefined && 0)) b0 = "inline"; // Next, selected buttons are diplayed.
        if (BB != (undefined && 0)) b1 = "inline";
        if (CC != (undefined && 0)) b2 = "inline";
        if (DD != (undefined && 0)) b3 = "inline";
        if (WW != (undefined && 0)) b4 = "inline";
        if (XX != (undefined && 0)) b5 = "inline";
        if (YY != (undefined && 0)) b6 = "inline";
        if (ZZ != (undefined && 0)) b7 = "inline";
    }`,Ct=`function M (x) {
        return function go (func) {
            if (func === ret) return x
            else x = func(x);
            return go;
      }
    }`,Z=`function M (x) {
      return function go (func) {
        if (func) {x = func(x); return go}
        else return x;
      }`,He="function ret () {}",_t=`runRoll = x => {
        m2 = M([ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], [], [], [x] ]);
        updateRoll();
        EEE = "yet to be selected";
        XO = m2('stop');
        AR = [];
        index = 0;
    }
    
    const updateRoll = () => {
      AA = m2(s)[0][0];
      BB = m2(s)[0][1];
      CC = m2(s)[0][2];
      DD = m2(s)[0][3];
    
      WW = m2(s)[1][0];
      XX = m2(s)[1][1];
      YY = m2(s)[1][2];
      ZZ = m2(s)[1][3];
      EE = m2(s)[2];
      FF = m2(s)[3];
      SCORE = m2(s)[4];
      b0 = b1 = b2 = b3 = "inline";
      b4 = b5 = b6 = b7 = 'none';
    };`,L=`var click0 = a => {
        a[1].push(a[0][0])
        a[0].shift();
        m2 = M(a);
        m2(fu);
        // sfunc();
    };
    
    var click1 = a => {
        a[1].push(a[0].splice(1,1)[0]);
        m2 = M(a);
        m2 = m2(fu);
    };
    
    var click2 = a => {
        a[1].push(a[0].splice(2,1)[0]);
        m2 = M(a);
        m2 = m2(fu);
    };
    
    var click3 = a => {
        a[1].push(a[0].splice(3,1)[0]);
        m2 = M(a);
        m2 = m2(fu);
    };
    
    function clic0 (m) {
      EEE = "add";
      m[2] = "+";
      m2 = M(m) ;
    }
    
    $: clic1 = m => {
      EEE = "subtract";
      m[2] = "-";
      m2 = M(m) ;
    }
    
    function clic2 (m) {
      EEE = "multiply";
      m[2] = "*";
      m2 = M(m) ;
    }
    
    function clic3 (m) {
      EEE = "divide";
      m[2] = "/";
      m2 = M(m) ;
    }
    
    function clic4 (m) {
      EEE = "concat";
      m[2] = "@"
      m2 = M(m);
    };`,ze=`if (a[1].length === 3) {
        a[0].push(a[1].pop());  // Returns a clicked third number.
      };`,wt=`var s = ret;
    var log = console.log;
    
    function M(x) {
      return function go(func) {
        if (typeof func === "function") {
          x = func(x);
          return go;
        } else if (func === "stop") return x;
      }
    };
    
    var m3 = M(3);
    
    m3(async a => await 888); // m3(s) will return a Promise with value 888.
    
    m3(s).then(v => m3((z => v + 112)));
    // m3(s) will return 1000 after the promise is fulfilled.
    
    m3(s).then(v => setTimeout(() => console.log("m3(s) resolved is", v,), 2000));
    // The promise is still pending, so the value of "v" is 888.
    
    setTimeout(() => console.log("m3(s) is", m3(s)),0);
    // This gets bumped to the bottom of the stack, behind (2).
    // m3(s) is called after x has been updated to 1000.
    
    // Result:
    16:13:15.590 m3(s) is 1000
    16:13:17.590 m3(s) resolved is 888
    // Two seconds after "1000" appears in the console log, "888" is displayed.`,W=`m2 = M(
        [ 
          [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,
          Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
          [], ['+'], [], [0], [], [0], [] 
        ]);`;const Mt=()=>s(Ie),ce=()=>s(j),Ye=()=>s(gt),kt=()=>s(Pe),F=()=>s(Ne),xt=()=>s(T),de=()=>s(Oe),Ue=()=>s(Se),Tt=()=>s(z),Et=()=>s(H(s(h)[4][0])),Bt=()=>Re(),Rt=()=>s($),te=()=>s(ie);return r.$$set=o=>{"$$scope"in o&&e(45,X=o.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2&&e(1,le),r.$$.dirty[0]&2,r.$$.dirty[0]&1&&e(4,E=s(h)[0][0]),r.$$.dirty[0]&1&&e(5,V=s(h)[0][1]),r.$$.dirty[0]&1&&e(6,q=s(h)[0][2]),r.$$.dirty[0]&1&&e(7,w=s(h)[0][3]),r.$$.dirty[0]&1&&s(h)[2],r.$$.dirty[0]&1&&s(h)[3],r.$$.dirty[0]&1&&s(h)[4],r.$$.dirty[0]&1&&e(16,G=s(h)[1][0]),r.$$.dirty[0]&1&&e(17,A=s(h)[1][1]),r.$$.dirty[0]&1&&e(18,K=s(h)[1][2]),r.$$.dirty[0]&1&&e(19,Q=s(h)[1][3]),r.$$.dirty[0]&1&&s(h)},e(24,T=o=>{o[2]="-",e(0,s=C(o))}),[s,le,mt,J,E,V,q,w,N,oe,re,O,he,se,S,ae,G,A,K,Q,H,fe,$,ie,T,h,Re,Ie,j,gt,Pe,Ne,Oe,Se,z,Y,Ae,Ct,Z,He,_t,L,ze,wt,W,X,I,Mt,ce,Ye,kt,F,xt,de,Ue,Tt,Et,Bt,Rt,te]}class br extends rr{constructor(_){super(),sr(this,_,cr,ur,Qo,{},null,[-1,-1,-1,-1,-1])}}export{br as component};
