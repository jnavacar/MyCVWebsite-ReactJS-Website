(this.webpackJsonpcvsite=this.webpackJsonpcvsite||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(8),a=c.n(n),r=c(3),l=(c(17),c(41)),j=c(42),o=c(43),b=c(0);function d(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(b.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsx)("a",{href:"#intro",className:"logo",children:"jnavacar."}),Object(b.jsxs)("div",{className:"itemContainer",children:[Object(b.jsx)(l.a,{className:"icon"}),Object(b.jsx)("span",{children:"+31 615 392 591"})]}),Object(b.jsxs)("div",{className:"itemContainer",children:[Object(b.jsx)(j.a,{className:"icon"}),Object(b.jsx)("span",{children:"jnavacar1998@gmail.com"})]}),Object(b.jsxs)("div",{className:"itemContainer",children:[Object(b.jsx)(o.a,{className:"icon"}),Object(b.jsx)("a",{href:"https://drive.google.com/file/d/1etCyUF4W5M0xe7uRPbFu_CLJhJETtOyg/view?usp=sharing",target:"_blank",rel:"noreferrer",className:"cv",children:Object(b.jsx)("span",{children:"Resume"})})]})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsxs)("div",{className:"hamburger",onClick:function(){return c(!t)},children:[Object(b.jsx)("span",{className:"line1"}),Object(b.jsx)("span",{className:"line2"}),Object(b.jsx)("span",{className:"line3"})]})})]})})}c(23);var h=c(10);function p(){var e=Object(s.useRef)();return Object(s.useEffect)((function(){Object(h.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Student","Engineer","Lover"]})}),[]),Object(b.jsxs)("div",{className:"intro",id:"intro",children:[Object(b.jsx)("div",{className:"left",children:Object(b.jsx)("div",{className:"imgContainer",children:Object(b.jsx)("img",{src:"assets/portrait.png",alt:""})})}),Object(b.jsxs)("div",{className:"right",children:[Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("h2",{children:"Hi There, I'm"}),Object(b.jsx)("h1",{children:"Jose Navarrete Carbonell"}),Object(b.jsxs)("h3",{children:["Software ",Object(b.jsx)("span",{ref:e})]})]}),Object(b.jsx)("a",{href:"#portfolio",children:Object(b.jsx)("img",{src:"assets/arrow_down.png",alt:""})})]})]})}c(24);function O(e){var t=e.title,c=e.active,s=e.setSelected,i=e.id;return Object(b.jsx)("li",{className:c?"portfolioList active":"portfolioList",onClick:function(){return s(i)},children:t})}c(25);var m=[{id:1,title:"Ticket Website",img:"assets/reactspringbootlogo.png",link:"https://github.com/jnavacar/TicketVendingWebsite-ReactJS-SpringBoot"},{id:2,title:"Portfolio Website",img:"assets/reactlogo.png",link:"https://github.com/jnavacar/jnavacar-cvsite"},{id:3,title:"NightOfTheNerds",img:"assets/unitylogo.png",link:"https://github.com/jnavacar/NightOfTheNerdsEscapeRoom-UnityProject"},{id:4,title:"Mobeye App",img:"assets/csharplogo.png",link:"https://github.com/jnavacar/MobeyeApplication-PhoneApp"}],u=[{id:1,title:"Ticket Website",img:"assets/reactspringbootlogo.png",link:"https://github.com/jnavacar/TicketVendingWebsite-ReactJS-SpringBoot"},{id:2,title:"Portfolio Website",img:"assets/reactlogo.png",link:"https://github.com/jnavacar/jnavacar-cvsite"}],g=[{id:1,title:"CyberJump",img:"assets/unitylogo.png",link:"https://github.com/jnavacar/CyberJump-UnityProject"},{id:2,title:"Doffend",img:"assets/unitylogo.png",link:"https://github.com/jnavacar/Doffend-UnityProject"},{id:3,title:"NightOfTheNerds",img:"assets/unitylogo.png",link:"https://github.com/jnavacar/NightOfTheNerdsEscapeRoom-UnityProject"}],x=[{id:1,title:"Complaint App",img:"assets/csharplogo.png",link:"https://github.com/jnavacar/ComplaintApp-WinFormApp"},{id:2,title:"Mobeye App",img:"assets/csharplogo.png",link:"https://github.com/jnavacar/MobeyeApplication-PhoneApp"}];function v(){var e=Object(s.useState)("featured"),t=Object(r.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)([]),a=Object(r.a)(n,2),l=a[0],j=a[1];return Object(s.useEffect)((function(){switch(c){case"featured":j(m);break;case"web":j(u);break;case"game":j(g);break;case"C#":j(x);break;default:j(m)}}),[c]),Object(b.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(b.jsx)("h1",{children:"Projects"}),Object(b.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"web",title:"Web App"},{id:"game",title:"Game Dev"},{id:"C#",title:"C#"}].map((function(e){return Object(b.jsx)(O,{title:e.title,active:c===e.id,setSelected:i,id:e.id})}))}),Object(b.jsx)("div",{className:"container",children:l.map((function(e){return Object(b.jsx)("div",{className:"item",children:Object(b.jsxs)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:[Object(b.jsx)("img",{src:e.img,alt:""}),Object(b.jsx)("h3",{href:e.link,children:e.title})]})})}))})]})}var f=c(44);c(26);function N(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2);t[0],t[1];return Object(b.jsxs)("div",{className:"contact",id:"contact",children:[Object(b.jsx)("div",{className:"left",children:Object(b.jsx)("img",{src:"assets/shake.svg",alt:""})}),Object(b.jsx)("div",{className:"right",children:Object(b.jsxs)("div",{class:"contact-info",children:[Object(b.jsxs)("div",{class:"card",children:[Object(b.jsx)(j.a,{className:"icon"}),Object(b.jsx)("p",{children:"jnavacar1998@gmail.com"})]}),Object(b.jsxs)("div",{class:"card",children:[Object(b.jsx)(l.a,{className:"icon"}),Object(b.jsx)("p",{children:"+31 615 392 591"})]}),Object(b.jsxs)("div",{class:"card",children:[Object(b.jsx)(f.a,{className:"icon"}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"https://github.com/jnavacar",style:{textDecoration:"none",color:"white"},target:"_blank",rel:"noreferrer",children:"GitHub"})})]}),Object(b.jsxs)("div",{class:"card",children:[Object(b.jsx)(o.a,{className:"icon"}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:"https://drive.google.com/file/d/1etCyUF4W5M0xe7uRPbFu_CLJhJETtOyg/view?usp=sharing",style:{textDecoration:"none",color:"white"},target:"_blank",rel:"noreferrer",children:"View Resume"})})]})]})})]})}c(27);function k(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(b.jsx)("div",{className:"menu "+(t&&"active"),children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{onClick:function(){return c(!1)},children:Object(b.jsx)("a",{href:"#intro",children:"Home"})}),Object(b.jsx)("li",{onClick:function(){return c(!1)},children:Object(b.jsx)("a",{href:"#portfolio",children:"Projects"})}),Object(b.jsx)("li",{onClick:function(){return c(!1)},children:Object(b.jsx)("a",{href:"#contact",children:"Contact"})})]})})}c(28);var C=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(d,{menuOpen:c,setMenuOpen:i}),Object(b.jsx)(k,{menuOpen:c,setMenuOpen:i}),Object(b.jsxs)("div",{className:"sections",children:[Object(b.jsx)(p,{}),Object(b.jsx)(v,{}),Object(b.jsx)(N,{})]})]})};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.5e5a496a.chunk.js.map