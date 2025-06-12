import{s as zt,n as Dt,r as Jt}from"../chunks/Bv-lJKiI.js";import{S as Gt,i as Vt,d as _,n as Wt,a as Yt,j as e,p as Ut,s as W,l as At,c as s,k as O,g as r,b as l,h as Y,e as a,f as i,t as K}from"../chunks/D2RDcUeg.js";import{l as Kt}from"../chunks/DPNsiiZW.js";function Qt(f){let t,c,v="Martingale Betting Strategy",H,h,g=`"Instead of traditional recursion, where a function calls itself directly and builds up a call stack, you're calling m(f1) in a way that resets the closure’s state rather than creating new stack frames." -- ChatGPT`,B,u,P='<a href="https://medium.com/@pelicanlabs/a-curious-conclusion-from-the-martingale-betting-strategy-28dc297a5fee">The Martingale &quot;Double Your Money&quot; Betting Strategy</a> is, essentially, a system in which players double their bets each time they lose in an even-odds game of chance. Examples are calling &quot;heads&quot; or &quot;tails&quot; on fair flips of a fair coin, and betting on red or black on spins of a roulette wheel.',m,p,G='When "Play" is clicked (below), line 3 of the function "f1" returns either 0 or 1 with equal probability. These numbers are equivalent to false and true in the test on line 4 ("if (result) ...").',j,o,D='Clicing &quot;Play&quot; calls m(f1), where m = M([25,1,25,0]) and x is [25,1,25,0] in the resulting <a href="./">m-M(x) closure</a>. &#39;x&#39; represents [starting amount, current bet, goal, number of wins], (beginning with [25,1,25,0]).',M,x,kt="Play",Q,b,wt="Clear",X,d,y,_t="GAME OUTPUT",Z,U,V,tt,T,Pt='"********************************************"',et,F,Mt="Players start with N dollars (m(dF3x)[0] === N), and stop if m(dF3x)[0] reaches 2N. Otherwise, players stop when they wouldn't have enough money to cover losing the next bet; i.e., when m(dF3x)[0] is less than m(dF3x)[1]. Here's the code:",nt,A,st,at,q,Tt="Each time a player loses, the amount of the bet (which starts at $1) doubles. If the player wins a bet, all prior losses are recouped and $1 is gained. For example, if the bets were $1, $2, $4,and $8, winning $16 recoups the $(1+2+4+8) = $15, leaving one extra dollar.",ot,E,Ft="When m(dF3x)[3] === m(dF3x)[2], the player's money has doubled because each incremental increase in m(dF3x)[3] corresponds to an incremental increase in m(dF3x)[0]. The final value of x in the m-M(x) closure is m(dF3x) === [50,1,25,25].",lt,I,qt='If v[3] is less than the starting amount, f1 calls m on itself to initiate another round of action. The semi-recursive function "f1" -- f1 repeatedly calls m(f1), causing f1 to execute on x in the closure --  executes on x until m(dF3x)[2] equals m(dF3x)[3] (Success), or m(dF3x)[0] is less than m(dF3x)[1] (Fail).',it,$,Et="Players fail most attempts to double their money. Lacking sufficient funds to cover a losing bet, they leave with whatever they still have. The amount they lose varies, but it's rarely everything they started with.",rt,C,It="A BILLION ATTEMPTS TO DOUBLE $50 IN AN m-M(x) CLOSURE",ut,R,$t=`A file named test13.js is shown below. Entering "node test13" in my Linux desktop computer's simulated terminal starts a process that takes about 25 minutes to complete.  It uses only 6.2% of the available CPU potential, and a miniscule 60 megabytes of the 64 gigabytes of installed memory. There's obviously no danger of piling too many frames onto the stack.`,ft,S,Rt="Here's test13.js:",ct,z,ht,dt,k,St="The result of calling gamble (above) five consecutive times, each time trying to double $50 a billion times, strongly suggests that repeated use of the Martingale betting strategy is a 50-50, break even proposition, similar to betting the same amount on coin flips thousands of times. I don't know how to prove it, but it seems self-evident that no pattern of changing the amounts of bets can possibly increase or decrease the odds of coming out ahead after repeatedly betting on fair flips of a fair coin.",mt,L,Lt="Here are the results:",pt,J,vt,gt,xt,bt,yt,Ct,Nt;return{c(){t=a("div"),c=a("h1"),c.textContent=v,H=i(),h=a("p"),h.textContent=g,B=i(),u=a("p"),u.innerHTML=P,m=i(),p=a("p"),p.textContent=G,j=i(),o=a("p"),o.innerHTML=D,M=i(),x=a("button"),x.textContent=kt,Q=i(),b=a("button"),b.textContent=wt,X=i(),d=a("div"),y=a("h2"),y.textContent=_t,Z=i(),U=a("pre"),V=K(f[0]),tt=i(),T=a("p"),T.textContent=Pt,et=i(),F=a("p"),F.textContent=Mt,nt=i(),A=a("pre"),st=K(f[3]),at=i(),q=a("p"),q.textContent=Tt,ot=i(),E=a("p"),E.textContent=Ft,lt=i(),I=a("p"),I.textContent=qt,it=i(),$=a("p"),$.textContent=Et,rt=i(),C=a("h2"),C.textContent=It,ut=i(),R=a("p"),R.textContent=$t,ft=i(),S=a("p"),S.textContent=Rt,ct=i(),z=a("pre"),ht=K(f[4]),dt=i(),k=a("p"),k.textContent=St,mt=i(),L=a("p"),L.textContent=Lt,pt=i(),J=a("pre"),vt=K(f[5]),gt=i(),xt=a("br"),bt=a("br"),yt=a("br"),this.h()},l(w){t=s(w,"DIV",{style:!0});var n=O(t);c=s(n,"H1",{style:!0,"data-svelte-h":!0}),r(c)!=="svelte-sjw85c"&&(c.textContent=v),H=l(n),h=s(n,"P",{"data-svelte-h":!0}),r(h)!=="svelte-mb9knk"&&(h.textContent=g),B=l(n),u=s(n,"P",{"data-svelte-h":!0}),r(u)!=="svelte-1gsbrdz"&&(u.innerHTML=P),m=l(n),p=s(n,"P",{"data-svelte-h":!0}),r(p)!=="svelte-v5s50j"&&(p.textContent=G),j=l(n),o=s(n,"P",{"data-svelte-h":!0}),r(o)!=="svelte-pwf1s1"&&(o.innerHTML=D),M=l(n),x=s(n,"BUTTON",{"data-svelte-h":!0}),r(x)!=="svelte-1bwigta"&&(x.textContent=kt),Q=l(n),b=s(n,"BUTTON",{"data-svelte-h":!0}),r(b)!=="svelte-1k8q8lq"&&(b.textContent=wt),X=l(n),d=s(n,"DIV",{});var N=O(d);y=s(N,"H2",{class:!0,"data-svelte-h":!0}),r(y)!=="svelte-ywgowz"&&(y.textContent=_t),Z=l(N),U=s(N,"PRE",{});var Ot=O(U);V=Y(Ot,f[0]),Ot.forEach(_),tt=l(N),T=s(N,"P",{"data-svelte-h":!0}),r(T)!=="svelte-15yhb88"&&(T.textContent=Pt),N.forEach(_),et=l(n),F=s(n,"P",{"data-svelte-h":!0}),r(F)!=="svelte-hou68t"&&(F.textContent=Mt),nt=l(n),A=s(n,"PRE",{});var Ht=O(A);st=Y(Ht,f[3]),Ht.forEach(_),at=l(n),q=s(n,"P",{"data-svelte-h":!0}),r(q)!=="svelte-ix6wr3"&&(q.textContent=Tt),ot=l(n),E=s(n,"P",{"data-svelte-h":!0}),r(E)!=="svelte-oaebf5"&&(E.textContent=Ft),lt=l(n),I=s(n,"P",{"data-svelte-h":!0}),r(I)!=="svelte-1iuwrhm"&&(I.textContent=qt),it=l(n),$=s(n,"P",{"data-svelte-h":!0}),r($)!=="svelte-igd3es"&&($.textContent=Et),rt=l(n),C=s(n,"H2",{class:!0,"data-svelte-h":!0}),r(C)!=="svelte-ztncb0"&&(C.textContent=It),ut=l(n),R=s(n,"P",{"data-svelte-h":!0}),r(R)!=="svelte-149l718"&&(R.textContent=$t),ft=l(n),S=s(n,"P",{"data-svelte-h":!0}),r(S)!=="svelte-179ik1j"&&(S.textContent=Rt),ct=l(n),z=s(n,"PRE",{});var Bt=O(z);ht=Y(Bt,f[4]),Bt.forEach(_),dt=l(n),k=s(n,"P",{style:!0,"data-svelte-h":!0}),r(k)!=="svelte-1qkwhvl"&&(k.textContent=St),mt=l(n),L=s(n,"P",{"data-svelte-h":!0}),r(L)!=="svelte-1jbmj7f"&&(L.textContent=Lt),pt=l(n),J=s(n,"PRE",{});var jt=O(J);vt=Y(jt,f[5]),jt.forEach(_),gt=l(n),xt=s(n,"BR",{}),bt=s(n,"BR",{}),yt=s(n,"BR",{}),n.forEach(_),this.h()},h(){W(c,"text-align","center"),At(y,"class","svelte-6teu96"),At(C,"class","svelte-6teu96"),W(k,"margin","3%"),W(t,"width","80%"),W(t,"margin-left","10%")},m(w,n){Yt(w,t,n),e(t,c),e(t,H),e(t,h),e(t,B),e(t,u),e(t,m),e(t,p),e(t,j),e(t,o),e(t,M),e(t,x),e(t,Q),e(t,b),e(t,X),e(t,d),e(d,y),e(d,Z),e(d,U),e(U,V),e(d,tt),e(d,T),e(t,et),e(t,F),e(t,nt),e(t,A),e(A,st),e(t,at),e(t,q),e(t,ot),e(t,E),e(t,lt),e(t,I),e(t,it),e(t,$),e(t,rt),e(t,C),e(t,ut),e(t,R),e(t,ft),e(t,S),e(t,ct),e(t,z),e(z,ht),e(t,dt),e(t,k),e(t,mt),e(t,L),e(t,pt),e(t,J),e(J,vt),e(t,gt),e(t,xt),e(t,bt),e(t,yt),Ct||(Nt=[Ut(x,"click",f[1]),Ut(b,"click",f[2])],Ct=!0)},p(w,[n]){n&1&&Wt(V,w[0])},i:Dt,o:Dt,d(w){w&&_(t),Ct=!1,Jt(Nt)}}}function Xt(f,t,c){let v="";function H(){c(0,v=""),u(()=>[25,1,25,0]),u(m)}function h(){c(0,v="")}const g=()=>{};function B(o){return function D(M){return M===g?o:(o=M(o),D)}}var u=B([25,1,25,0]);function P(o){c(0,v+=o+`
`)}function m(o){if(P(`m(dF3x) is ${JSON.stringify(u(g))}`),Math.floor(Math.random()*2))if(o[0]+=o[1],o[1]=1,o[3]+=1,o[3]<25)u(m);else return P(`Double ${JSON.stringify(u(g))}`),o;else if(o[0]-=o[1],o[1]=Kt(o[1],1),o[1]>o[0]){P(`Fail ${JSON.stringify(u(g))}`);return}else u(m);return o}u(m);var p=`    var log = console.log;
    var dF3x = () => {};

    function M(x) {
        return function go(func) {
            if (func === dF3x) return x;
            x = func(x);
            return go;
        };
    }

    var m = M([25,1,25,0]); // x in the m(x)-M closure is [25,1,25,0]
 // The elements of x (above) represent a starting dollars, first bet, goal, and wins.


    function f1(v) {
        let result = Math.floor(Math.random() * 2);

        if (result) {
            v[0] += v[1];  // Increase stake by current bet
            v[1] = 1;      // Reset bet to 1
            v[3] += 1;     // Increment success counter

            // Recursively continue if stake is less than goal
            if (v[0] < 50) {
                m(f1);  // Continue this round of play
            }
        } else {
            v[0] -= v[1];   // Subtract bet from stake (loss)
            v[1] <<= 1;     // Double the bet (using bit shift)

            // Check if the current bet exceeds stake; if not, continue
            if (v[1] <= v[0]) {
                m(f1);  // Continue playing
            }
        }
    }`,G=`var log = console.log;
var dF3x = () => {};

function M(x) {
    return function go(func) {
        if (func === dF3x) return x;
        x = func(x);
        return go;
    };
}

function gamble() {
    let m = M([50, 1, 50, 0]);  // [stake, bet, goal, number successes] 
    let gain = 0;
    let loss = 0;
    let k = 0;

    // Main loop
    while (k < 1000000000) {
        k += 1;

        // Place another bet.
        m(f1);
        
        // Reset the closure state in preparation for another round.
        m(() => [50, 1, 50, 0]);
    }

    // Log results after loop
    log("k is", k);
    log("gain is", gain);
    log("loss is", loss);
    log("percent deviation from equality is", ((gain - loss) / (gain + loss)) * 100, "%");

    function f1(v) {
        let result = Math.floor(Math.random() * 2);

        if (result) {
            gain += v[1];
            v[0] += v[1];  // Increase stake by current bet
            v[1] = 1;      // Reset bet to 1
            v[3] += 1;     // Increment success counter

            // Recursively continue if stake is less than goal
            if (v[0] < 100) {
                m(f1);  // Continue playing
            }
        } else {
            v[0] -= v[1];   // Subtract bet from stake (loss)
            loss += v[1];   // Add to total loss
            v[1] <<= 1;     // Double the bet (using bit shift)

            // Check if the current bet exceeds stake; if not, continue
            if (v[1] <= v[0]) {
                m(f1);  // Continue playing
            }
        }
    }
}

gamble();`;h();var j=`
k is 1000000000
gain is 83168244121
loss is 83169208725
percent deviation from equality is -0.0005799078821370784 %

k is 1000000000
gain is 83171572605
loss is 83170976285
percent deviation from equality is 0.00035848915624969653 %

k is 1000000000
gain is 83168282625
loss is 83170787098
percent deviation from equality is -0.0015056432647907866 %

k is 1000000000
gain is 83169300078
loss is 83170549366
percent deviation from equality is -0.000751045527680717 %

k is 1000000000
gain is 83169558217
loss is 83169526275
percent deviation from equality is 0.000019202943251461886 %`;return[v,H,h,p,G,j]}class ne extends Gt{constructor(t){super(),Vt(this,t,Xt,Qt,zt,{})}}export{ne as component};
