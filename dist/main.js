!function(e){var t={};function n(a){if(t[a])return t[a].exports;var d=t[a]={i:a,l:!1,exports:{}};return e[a].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(a,d,function(t){return e[t]}.bind(null,d));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=document.querySelector("#content"),d=document.createElement("div"),c=document.querySelector("#content"),o=document.createElement("div"),i=document.querySelector("#content"),r=document.createElement("div");function l(e){switch(s(),e){case"Home":(()=>{r.classList.add("info-container");const e=document.createElement("div");e.classList.add("info");const t=document.createElement("img");t.classList.add("image");const n=document.createElement("p");n.textContent="This is my restaurant page created with javascript",e.appendChild(t),e.appendChild(n),r.appendChild(e),i.appendChild(r)})();break;case"Menu":(()=>{d.classList.add("info-container");const e=document.createElement("div");e.classList.add("info");const t=document.createElement("h4");t.textContent="Choose what you want";const n=document.createElement("img");n.classList.add("image1");const c=document.createElement("img");c.classList.add("image2");const o=document.createElement("img");o.classList.add("image3"),e.appendChild(t),e.appendChild(n),e.appendChild(c),e.appendChild(o),d.appendChild(e),a.appendChild(d)})();break;case"Contacts":(()=>{o.classList.add("info-container");const e=document.createElement("div");e.classList.add("info");const t=document.createElement("h4"),n=document.createElement("p");t.textContent="Contact us at: ",n.innerHTML=" Number: 0000000000 <br> Email: name@email.com ",e.appendChild(t),e.appendChild(n),o.appendChild(e),c.appendChild(o)})()}}const s=()=>{o.innerHTML=null,c.appendChild(o),d.innerHTML=null,a.appendChild(d),r.innerHTML=null,i.appendChild(r)};(()=>{const e=document.querySelector("#content"),t=document.createElement("navbar");t.id="navbar";const n=document.createElement("ul");n.classList.add("nav-list");const a=["Home","Menu","Contacts"];for(let e=0;e<a.length;e++){let t=document.createElement("li"),d=document.createElement("a");d.innerText=""+a[e],d.id=""+a[e],d.classList.add("nav-link"),d.addEventListener("click",()=>{l(a[e])}),d.href="#",t.appendChild(d),n.appendChild(t)}t.appendChild(n),e.appendChild(t)})()}]);