(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{F0Ta:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(){return r.a.createElement("div",{style:{border:0,borderBottom:"1px solid #e3eaf6",margin:"24px 0 24px 0"}})}},F3jV:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),i=function(e){return r.a.createElement("button",{style:{background:"none",border:"none",height:"48px",width:"48px",margin:"-8px -8px",cursor:"pointer",outline:"none"},onClick:e.onClick,className:"text"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",className:"handwritingIcon"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"})),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",style:{display:"none"},className:"textIcon"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"})))},o=function(e){var t=e.text;return r.a.createElement("div",{style:{padding:"4px 6px",lineHeight:"12px",fontSize:"14px",backgroundColor:"#e3eaf6",display:"inline-block",float:"left",borderRadius:"2px",margin:"2px 7px 2px 0px",border:"1px solid #a9b6d2"}},t)},c=function(e){var t=e.ingredient;return r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960}},r.a.createElement("ul",{style:{margin:0,listStyleType:"none"}},t.map((function(e){return null!==e?null!==e[0]?r.a.createElement("li",{key:e},r.a.createElement(o,{text:e[0]}),e[1]):null!==e[1]?r.a.createElement("li",{key:e},e[1]):r.a.createElement("br",{key:e[1]}):null}))))},s=n("F0Ta"),m=function(e){var t=e.instruction;return r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960}},r.a.createElement(s.a,null),t.map((function(e){return r.a.createElement("p",{key:e},e)})))},u=function(e){var t=e.note;return r.a.createElement("div",{style:{padding:"4px 0 12px 0",display:"flex"}},r.a.createElement("div",{style:{fontSize:"40px",fontWeight:"bold",color:"#a9b6d2"}},"“"),r.a.createElement("blockquote",{style:{padding:"0 6px",margin:"0 0 20px",position:"relative",lineHeight:"1.2"}},t))},d=n("Bl7J"),p=n("vrFN");var g=function(e){var t=e.title,n=e.ingredientArray,o=e.instructionArray,g=e.note;var y=Object(a.useState)("text"),x=y[0],E=y[1],v="/"+t.toLowerCase().split(" ").join("-")+".svg";return r.a.createElement(d.a,null,r.a.createElement(p.a,{title:t}),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("h3",null,t),r.a.createElement(i,{onClick:function(){var e=document.getElementsByClassName("text")[0],t=document.getElementsByClassName("handwriting")[0],n=document.getElementsByClassName("textIcon")[0],a=document.getElementsByClassName("handwritingIcon")[0];e?(E("handwriting"),e.className="handwriting",n.style.setProperty("display",""),a.style.setProperty("display","none")):(E("text"),t.className="text",a.style.setProperty("display",""),n.style.setProperty("display","none"))}})),"text"===x?function(e,t,n){return r.a.createElement(r.a.Fragment,null,n.map((function(e){return null!==e?r.a.createElement(u,{key:e,note:e}):null})),r.a.createElement(c,{ingredient:e}),r.a.createElement(m,{instruction:t}),r.a.createElement(s.a,null))}(n,o,g):r.a.createElement("img",{src:v,alt:t,draggable:"false"}),r.a.createElement(l.Link,{style:{padding:"0 0 100px 0"},to:"/"},"Back to recipes"))};function y(e){var t=e.pageContext.recipe;return r.a.createElement("section",null,r.a.createElement(g,{title:t.title,category:t.category,note:t.note,ingredientArray:t.ingredients,instructionArray:t.instructions}))}}}]);
//# sourceMappingURL=component---src-components-recipe-template-js-b0fcd8b3393f286abad7.js.map