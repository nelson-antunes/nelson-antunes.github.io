import{p as n,a as e,o,c as t,b as r,w as s,d as a,r as l,e as i,F as u,f as c,g as d,l as f,h as p,i as m,j as h,k as v}from"./vendor.f02d1fca.js";const _={},b=s("data-v-2c02d39f");n("data-v-2c02d39f");const k={class:"nav"},w={class:"nav-title"},E=a("nelson"),g={class:"nav-list"},j=a("portfolio");e();const F=b(((n,e)=>{const s=l("router-link");return o(),t("header",null,[r("nav",k,[r("div",w,[r(s,{to:"/"},{default:b((()=>[E])),_:1})]),r("div",g,[r("ul",null,[r("li",null,[r(s,{to:"/portfolio"},{default:b((()=>[j])),_:1})])])])])])}));_.render=F,_.__scopeId="data-v-2c02d39f";const L={},y={href:"https://www.linkedin.com/in/nelson-antonio-antunes-junior-b5659199/"},A={href:"https://github.com/nelson-antunes"};L.render=function(n,e){const s=l("FontAwesomeIcon");return o(),t("footer",null,[r("a",y,[r(s,{icon:["fab","linkedin"]})]),r("a",A,[r(s,{icon:["fab","github"]})])])};var I=i({name:"App",components:{NelsonHeader:_,NelsonFooter:L}});let N;I.render=function(n,e,s,a,i,c){const d=l("NelsonHeader"),f=l("router-view"),p=l("NelsonFooter");return o(),t(u,null,[r(d),r(f),r(p)],64)};const P={},$={name:"Raiz"},z=r("h1",null," olá ",-1),H=r("section",null,[r("b",null,"nome"),a(" nelson antonio antunes junior ")],-1);$.render=function(n,e,r,s,a,l){return o(),t("article",null,[z,H])};const O=[{path:"/",name:"raiz",component:$},{path:"/portfolio",name:"portfolio",component:function(){return function(n,e){if(!e||0===e.length)return n();if(void 0===N){const n=document.createElement("link").relList;N=n&&n.supports&&n.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((n=>{if((n=`/${n}`)in P)return;P[n]=!0;const e=n.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${o}`))return;const t=document.createElement("link");return t.rel=e?"stylesheet":N,e||(t.as="script",t.crossOrigin=""),t.href=n,document.head.appendChild(t),e?new Promise(((n,e)=>{t.addEventListener("load",n),t.addEventListener("error",e)})):void 0}))).then((()=>n()))}((()=>import("./Portfolio.69f83816.js")),["assets/Portfolio.69f83816.js","assets/vendor.f02d1fca.js"])}}],R=c({history:d(),routes:O});f.add({faLinkedin:p,faGithub:m}),h(I).use(R).component("FontAwesomeIcon",v).mount("#app");