import{s as q,h as I}from"./scheduler.tgD2rtmB.js";import{S as x,i as A,g as h,s as V,m as C,h as v,j as _,f as m,c as y,n as S,k as u,a as H,x as r,A as R,o as T}from"./index.FvPb5Ppg.js";import{k as U}from"./singletons.tb_tPZ_Z.js";const j=U("goto");function b(c){let e,i,d,a,s,n,f,t,k,L,w;return{c(){e=h("div"),i=h("div"),d=V(),a=h("div"),s=h("h1"),n=C(c[0]),f=V(),t=h("div"),k=C(c[1]),this.h()},l(o){e=v(o,"DIV",{class:!0});var l=_(e);i=v(l,"DIV",{class:!0}),_(i).forEach(m),d=y(l),a=v(l,"DIV",{class:!0});var g=_(a);s=v(g,"H1",{class:!0});var D=_(s);n=S(D,c[0]),D.forEach(m),f=y(g),t=v(g,"DIV",{class:!0});var E=_(t);k=S(E,c[1]),E.forEach(m),g.forEach(m),l.forEach(m),this.h()},h(){u(i,"class","commandLinkIcon svelte-150arks"),u(s,"class","commandLinkTitle svelte-150arks"),u(t,"class","commandLinkDescription svelte-150arks"),u(a,"class","commandLinkText"),u(e,"class","commandLink svelte-150arks")},m(o,l){H(o,e,l),r(e,i),r(e,d),r(e,a),r(a,s),r(s,n),r(a,f),r(a,t),r(t,k),L||(w=R(e,"click",c[4]),L=!0)},p(o,[l]){l&1&&T(n,o[0]),l&2&&T(k,o[1])},i:I,o:I,d(o){o&&m(e),L=!1,w()}}}function z(c,e,i){let{title:d=""}=e,{description:a=""}=e,{href:s=""}=e,{target:n="_self"}=e;const f=()=>{try{new URL(s).hostname===window.location.hostname&&n==="_self"?j(s):window.open(s,n)}catch{j(s)}};return c.$$set=t=>{"title"in t&&i(0,d=t.title),"description"in t&&i(1,a=t.description),"href"in t&&i(2,s=t.href),"target"in t&&i(3,n=t.target)},[d,a,s,n,f]}class J extends x{constructor(e){super(),A(this,e,z,b,q,{title:0,description:1,href:2,target:3})}}export{J as C};
