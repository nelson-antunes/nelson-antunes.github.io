import{p as e,a as t,r as n,o,c as a,b as s,w as l,d as r,u as c,t as i,e as u,v as d,f as m,F as p,g as f,h as v,l as h,i as b,j as _,k as g,m as j,n as k,q as w}from"./vendor.89681dca.js";const L={},E=l("data-v-2f622e2d");e("data-v-2f622e2d");const I={class:"profiles",target:"_blank",href:"https://www.linkedin.com/in/nelson-antonio-antunes-junior-b5659199/"},P={class:"profiles",target:"_blank",href:"https://github.com/nelson-antunes"},$={class:"profiles",target:"_blank",href:"https://twitter.com/nelson_antunes_"};t();const A=E(((e,t)=>{const l=n("FontAwesomeIcon");return o(),a("div",null,[s("a",I,[s(l,{icon:["fab","linkedin"]})]),s("a",P,[s(l,{icon:["fab","github"]})]),s("a",$,[s(l,{icon:["fab","twitter"]})])])}));L.render=A,L.__scopeId="data-v-2f622e2d";var F=r({setup:()=>({locale:c({useScope:"global"}).locale})});const y={class:"select"},S={for:"locale"},V=s("option",{value:"pt-br"},"🇧🇷",-1),O=s("option",{value:"en"},"🇺🇸",-1);F.render=function(e,t,n,l,r,c){return o(),a("div",y,[s("label",S,[s("b",null,i(e.$t("language"))+":",1)]),u(s("select",{name:"locale",id:"locale","onUpdate:modelValue":t[1]||(t[1]=t=>e.locale=t)},[V,O],512),[[d,e.locale]])])};var R=r({components:{Profiles:L,LocaleSelect:F}});const T=l("data-v-539bd3a4");e("data-v-539bd3a4");const q={class:"nav"},C=s("div",{class:"nav-title"},[s("span",null,"nelson")],-1),D={class:"nav-elements"},N={class:"menu"},z={class:"nav"};t();const G=T(((e,t,l,r,c,u)=>{const d=n("router-link"),p=n("Profiles"),f=n("LocaleSelect");return o(),a("header",null,[s("nav",q,[C,s("div",D,[s("div",N,[s(d,{class:"menu-item",to:"/"},{default:T((()=>[m(i(e.$t("home")),1)])),_:1}),s(d,{class:"menu-item",to:"/cv"},{default:T((()=>[m(i(e.$t("resume")),1)])),_:1}),s(d,{class:"menu-item",to:"/projects"},{default:T((()=>[m(i(e.$t("projects")),1)])),_:1})]),s("div",z,[s(p),s(f)])])])])}));R.render=G,R.__scopeId="data-v-539bd3a4";const U={};U.render=function(e,t){return o(),a("footer")};var W=r({name:"App",components:{Navbar:R,Footer:U}});let x;W.render=function(e,t,l,r,c,i){const u=n("Navbar"),d=n("router-view"),m=n("Footer");return o(),a(p,null,[s(u),s(d),s(m)],64)};const B={},H=function(e,t){if(!t||0===t.length)return e();if(void 0===x){const e=document.createElement("link").relList;x=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/${e}`)in B)return;B[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":x,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))},J=r({name:"Raiz",setup(){let{t:e}=c();return{t:e}}}),K=s("section",null," 🚧 🏗 🚧 ",-1);J.render=function(e,t,n,l,r,c){return o(),a("article",null,[s("h1",null,i(e.t("hello")),1),K])};const M=[{path:"/",name:"home",component:J},{path:"/projects",name:"projects",component:function(){return H((()=>import("./Projects.a20dc7e6.js")),["assets/Projects.a20dc7e6.js","assets/vendor.89681dca.js"])}},{path:"/cv",name:"cv",component:function(){return H((()=>import("./CV.0534fd88.js")),["assets/CV.0534fd88.js","assets/vendor.89681dca.js"])}}],Q=f({history:v(),routes:M});var X={"pt-br":{home:"início",projects:"projetos",resume:"currículo",hello:"olá",language:"idioma"},en:{home:"home",projects:"projects",resume:"resume",hello:"hello",language:"language"}};h.add({faLinkedin:b,faGithub:_,faTwitter:g});const Y=j({fallbackLocale:"en",globalInjection:!0,locale:"pt-br",messages:X});k(W).use(Q).use(Y).component("FontAwesomeIcon",w).mount("#app");
