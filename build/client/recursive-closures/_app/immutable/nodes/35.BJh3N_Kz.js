import{s as _t,r as bt,b as Ct}from"../chunks/Bv-lJKiI.js";import{S as yt,i as wt,d as l,m as ht,n as mt,a as i,j as X,p as ct,s as it,l as u,c as p,g as w,b as h,k as Y,h as Z,e as v,f as m,t as g}from"../chunks/D2RDcUeg.js";import{f as dt}from"../chunks/BCSOh3-U.js";function xt(f){let s,C=`<br/>
       Two Factorization Algorithms`,r,_,b,z="Efficient Algorithm",q,c,L='Enter a number between 2 and a few <span class="big svelte-1rld2h7">quadrillion</span><span>.</span>',R,y,U,o,d,a,n,k="Inefficient Algorithm",B,x,st='Just for fun, I tried finding factors using bitwise operators instead of "%", the modulo operater. The Google Chrome engine processed it very slowly.',S,N,rt='Enter a number between 2 and not much greater than a <span class="big svelte-1rld2h7">billion</span><span>.</span>',G,E,$,D,F,H,J,V,M,at="Here's the code for the more efficient, modulo-operator algorithm:",K,j,tt,O,P,nt="This is the code for the bitwise-operator algorithm:",Q,A,et,W,T,ft="Game of Score",I,lt,ut;return{c(){s=v("div"),s.innerHTML=C,_=m(),b=v("p"),b.textContent=z,q=m(),c=v("p"),c.innerHTML=L,R=m(),y=v("input"),U=m(),o=v("h3"),d=g(f[1]),a=m(),n=v("p"),n.textContent=k,B=m(),x=v("p"),x.textContent=st,S=m(),N=v("p"),N.innerHTML=rt,G=m(),E=v("input"),$=m(),D=v("br"),F=m(),H=v("h3"),J=g(f[0]),V=m(),M=v("p"),M.textContent=at,K=m(),j=v("pre"),tt=g(f[5]),O=m(),P=v("p"),P.textContent=nt,Q=m(),A=v("pre"),et=g(f[3]),W=m(),T=v("a"),T.textContent=ft,this.h()},l(t){s=p(t,"DIV",{style:!0,"data-svelte-h":!0}),w(s)!=="svelte-1qcx4le"&&(s.innerHTML=C),_=h(t),b=p(t,"P",{class:!0,"data-svelte-h":!0}),w(b)!=="svelte-qrbugj"&&(b.textContent=z),q=h(t),c=p(t,"P",{class:!0,"data-svelte-h":!0}),w(c)!=="svelte-zcyupp"&&(c.innerHTML=L),R=h(t),y=p(t,"INPUT",{type:!0,class:!0}),U=h(t),o=p(t,"H3",{class:!0});var e=Y(o);d=Z(e,f[1]),e.forEach(l),a=h(t),n=p(t,"P",{class:!0,"data-svelte-h":!0}),w(n)!=="svelte-rb5daq"&&(n.textContent=k),B=h(t),x=p(t,"P",{class:!0,"data-svelte-h":!0}),w(x)!=="svelte-pk8e92"&&(x.textContent=st),S=h(t),N=p(t,"P",{class:!0,"data-svelte-h":!0}),w(N)!=="svelte-5ey14x"&&(N.innerHTML=rt),G=h(t),E=p(t,"INPUT",{type:!0,class:!0}),$=h(t),D=p(t,"BR",{}),F=h(t),H=p(t,"H3",{class:!0});var pt=Y(H);J=Z(pt,f[0]),pt.forEach(l),V=h(t),M=p(t,"P",{class:!0,"data-svelte-h":!0}),w(M)!=="svelte-13ug16w"&&(M.textContent=at),K=h(t),j=p(t,"PRE",{class:!0});var vt=Y(j);tt=Z(vt,f[5]),vt.forEach(l),O=h(t),P=p(t,"P",{class:!0,"data-svelte-h":!0}),w(P)!=="svelte-m44qop"&&(P.textContent=nt),Q=h(t),A=p(t,"PRE",{class:!0});var ot=Y(A);et=Z(ot,f[3]),ot.forEach(l),W=h(t),T=p(t,"A",{href:!0,"data-svelte-h":!0}),w(T)!=="svelte-1ruktk0"&&(T.textContent=ft),this.h()},h(){it(s,"font-family","Times New Roman"),it(s,"text-align","center"),it(s,"font-size","38px"),u(b,"class","big svelte-1rld2h7"),u(c,"class","svelte-1rld2h7"),u(y,"type","text"),u(y,"class","svelte-1rld2h7"),u(o,"class","marg svelte-1rld2h7"),u(n,"class","big svelte-1rld2h7"),u(x,"class","svelte-1rld2h7"),u(N,"class","svelte-1rld2h7"),u(E,"type","text"),u(E,"class","svelte-1rld2h7"),u(H,"class","marg svelte-1rld2h7"),u(M,"class","svelte-1rld2h7"),u(j,"class","svelte-1rld2h7"),u(P,"class","svelte-1rld2h7"),u(A,"class","svelte-1rld2h7"),u(T,"href","http://score.schalk.net")},m(t,e){i(t,s,e),i(t,_,e),i(t,b,e),i(t,q,e),i(t,c,e),i(t,R,e),i(t,y,e),i(t,U,e),i(t,o,e),X(o,d),i(t,a,e),i(t,n,e),i(t,B,e),i(t,x,e),i(t,S,e),i(t,N,e),i(t,G,e),i(t,E,e),i(t,$,e),i(t,D,e),i(t,F,e),i(t,H,e),X(H,J),i(t,V,e),i(t,M,e),i(t,K,e),i(t,j,e),X(j,tt),i(t,O,e),i(t,P,e),i(t,Q,e),i(t,A,e),X(A,et),i(t,W,e),i(t,T,e),I=!0,lt||(ut=[ct(y,"keydown",f[4]),ct(E,"keydown",f[2])],lt=!0)},p(t,[e]){(!I||e&2)&&mt(d,t[1]),(!I||e&1)&&mt(J,t[0])},i(t){I||(t&&Ct(()=>{I&&(r||(r=ht(s,dt,{},!0)),r.run(1))}),I=!0)},o(t){t&&(r||(r=ht(s,dt,{},!1)),r.run(0)),I=!1},d(t){t&&(l(s),l(_),l(b),l(q),l(c),l(R),l(y),l(U),l(o),l(a),l(n),l(B),l(x),l(S),l(N),l(G),l(E),l($),l(D),l(F),l(H),l(V),l(M),l(K),l(j),l(O),l(P),l(Q),l(A),l(W),l(T)),t&&r&&r.end(),lt=!1,bt(ut)}}}function Nt(f,s){var C=Math.floor(s/8),r=s%8;f[C]|=1<<r}function Mt(f,s){var C=Math.floor(s/8),r=s%8,_=f[C]&1<<r;return _===0}function Pt(f,s,C){let r=1,_=[];var b=function(d){if(C(0,_=[]),d.keyCode==13){let a=parseInt(d.target.value);z(a)}};function z(o){if(o===1)return;r=o;var d=new ArrayBuffer(Math.ceil(r/8)),a=new Uint8Array(d);let n=2;for(n;n<=r;n+=1)if(Mt(a,n))for(let k=n;k<=r;k+=n)Nt(a,k),k===r&&(_.push(" "+n),r=r/n,z(r))}var q=`function main (n) {
        if (n === 1) return;
        N = n;
        var buf = new ArrayBuffer(Math.ceil(N/8));
        var view = new Uint8Array(buf); 
        var top = Math.ceil(Math.sqrt(N));
        let i = 2;
        for(i; i <= N; i+=1){
            if(test(view, i)) {
                for(let j = i; j <= N; j+=i) {
                    set(view, j);
                    if (j === N) {
                        ar.push(" " + i);
                        N = N / i;
                        main(N);
                    }
                }
            }
        }
    };
    
    function set(ar,i) {
      var a = Math.floor(i / 8)
      var b = i % 8
      ar[a] |= (1 << b)
    };
    
    function test (ar,i) {
      var a = Math.floor(i / 8);
      var b = i % 8;
      var value = ar[a] & (1 << b);
      return value === 0;
    }`;let c=1,L=[];var R=function(d){if(C(1,L=[]),d.keyCode==13){let a=parseInt(d.target.value);y(a)}};function y(o){c=o;var d=o+1;for(let a=2;a<d;a+=1)for(;c%a===0;)if(L.push(" "+a),c=c/a,c==1)return}var U=`let N2 = 1;
    let ar2 = [];
    
    var first2 = function first (e) {
        ar2 = [];
        if (e.keyCode == 13) {
            let num = parseInt(e.target.value);
            main2(num);
        };
    };
    
    function main2 (n) {
        N2 = n;
        for(let i = 2; i <= N2; i+=1){
            while (N2 % i === 0) {
                ar2.push(" " + i);
                N2 = N2 / i;
                if (N2 == 1) return
            }
        }
    }`;return[_,L,b,q,R,U]}class Ht extends yt{constructor(s){super(),wt(this,s,Pt,xt,_t,{})}}export{Ht as component};
