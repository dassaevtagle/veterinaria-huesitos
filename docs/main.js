(()=>{"use strict";var n={797:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(645),o=t.n(i)()((function(n){return n[1]}));o.push([n.id,".examples{\n  background-color: #fce9ef;\n  padding-bottom: 5%;\n  padding-top: 5%;;\n  width: 100%;\n}\n\n/* Image slider css */\n#clientes-slider {\n  margin: auto;\n}\n\n#clientes-secondary-slider {\n  margin: auto 15px;\n}\n\n.example-cliente{\n  border-radius: 10px;\n}\n\n.examples-sliders{\n  display: inline-flex;\n  margin: auto;\n}\n\n/* section responsive for mobile */\n@media only screen and (max-width: 800px){\n  #clientes-satisfechos{\n    text-align: center;\n    margin: 40px auto;\n  }\n  .examples{\n    display: block;\n    text-align: center;\n    padding-bottom: 14%;\n  }\n}\n\n/* section responsive for desktop */\n\n@media only screen and (min-width: 801px){\n  #clientes-satisfechos{\n    margin: auto;\n    font-size: 69px;\n  }\n  .examples{\n    display: inline-flex;\n  }\n}\n\n/* not to show secondary sliders on a certain width*/\n@media only screen and (max-width: 425px){\n  #clientes-secondary-slider{\n    display: none;\n  }\n}",""]);const r=o},601:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(645),o=t.n(i)()((function(n){return n[1]}));o.push([n.id,".footer {\n  height: 28vh;\n  background-color: #000;\n  display: flex;\n  padding: 20px;\n}\n.social_media{\n  margin: auto 0 auto 22px;\n}\n.social_media_icon{\n  max-width: 50px;\n}\n#footer-logo{\n  border-radius: 160px; \n  height: 7rem; \n  margin: auto 0;\n}\n#instagram-icon{\n  width: 37px;\n}\n#tiktok-icon{\n  width: 40px;\n}",""]);const r=o},370:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(645),o=t.n(i)()((function(n){return n[1]}));o.push([n.id,"body{\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  margin: 0;\n}\n\n\n",""]);const r=o},8:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(645),o=t.n(i),r=t(667),a=t.n(r),d=t(854),l=o()((function(n){return n[1]})),c=a()(d.Z);l.push([n.id,'.hero-section {\n  position: relative;\n  text-align: center;\n  padding-top: 5%;\n}\n\n#hero-logo {\n  position: relative;\n  max-width: 269px;\n  border-radius: 220px;\n}\n\n#hero-slogan{\n  position: relative;\n}\n#hero-cita{\n  position: relative;\n  border: #eb6597 solid;\n  border-radius: 10px;\n  color: white;\n  background-color: #eb6597;\n  font-size: 18px;\n  padding: 8px;\n}\n\n#hero-prices{\n  position: relative;\n  border: #eb6597 solid;\n  border-radius: 10px;\n  color: #eb6597;\n  background-color: white;\n  font-size: 18px;\n  padding: 8px;\n}\n\n/* responsive section for mobile */\n@media only screen and (max-width: 750px){\n  .hero-section{\n    height: 95vh;\n  }\n\n  .hero-section::before {\n    background: black;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center top;\n    background-attachment: fixed;\n    content: "";\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n  }\n\n  #hero-slogan{\n    color: white;\n  }\n}\n\n/* responsive section for desktop */\n@media only screen and (min-width: 751px) {\n  .hero-section{\n    height: 85vh;\n  }\n  .hero-section::before {\n    background-image: url('+c+');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center top;\n    background-attachment: fixed;\n    content: "";\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    opacity: 0.75;\n  }\n}\n',""]);const s=l},831:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(645),o=t.n(i)()((function(n){return n[1]}));o.push([n.id,'/* Screen reader only */\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0,0,0,0);\n  border: 0;\n}\n\n/* Button styling */\n.menu-toggle {\n  padding: .75em 15px;\n  line-height: 1em;\n  font-size: 1em;\n  color: balck;\n}\n\n\n\n/*\n Default styles + Mobile first\n Offscreen menu style\n*/\n.main-menu {\n  position: absolute;\n  display: none;\n  left: -200px;\n  top: 0;\n  height: 100%;\n  overflow-y: scroll;\n  overflow-x: visible;\n  transition: left 0.3s ease,\n    \tbox-shadow 0.3s ease;\n  z-index: 999;\n}\n\n.main-menu ul {\n  list-style: none;\n  margin: 0;\n  padding: 2.5em 0 0;\n  /* Hide shadow w/ -8px while \'closed\' */\n  box-shadow: -8px 0 8px rgba(0,0,0,.5);\n  min-height: 100%;\n  width: 200px;\n  background: #1a1a1a;\n}\n\n.main-menu a {\n  display: block;\n  padding: .75em 15px;\n  line-height: 1em;\n  font-size: 1em;\n  color: #fff;\n  text-decoration: none;\n  border-bottom: 1px solid #383838;\n}\n\n.main-menu li:first-child a {\n  border-top: 1px solid #383838;\n}\n\n.main-menu a:hover,\n.main-menu a:focus {\n  background: #333;\n  text-decoration: underline;\n}\n\n.main-menu .menu-close {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n\n/*\n More to come here...\n*/\n\n\n/*\n Demo purposes only\n*/\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\narticle {\n  padding: 30px;\n  width: 55em;\n  font-size: 16px;\n  line-height: 1.5em;\n}\n\narticle h2 {\n  font-weight: 500;\n  font-size: 28px;\n}\n\n\n/*\n On small devices, allow it to toggle...\n*/\n/*\n :target for non-JavaScript\n [aria-expanded] will be used if/when JavaScript is added to improve interaction, though it\'s completely optional.\n*/\n.main-menu:target,\n.main-menu[aria-expanded="true"] {\n  display: block;\n  left: 0;\n  outline: none;\n  box-shadow: 3px 0 12px rgba(235, 101, 151, 1);\n}\n\n.main-menu:target .menu-close,\n.main-menu[aria-expanded="true"] .menu-close {\n  z-index: 1001;\n}\n\n.main-menu:target ul,\n.main-menu[aria-expanded="true"] ul {\n  position: relative;\n  z-index: 1000;\n}\n\n/* \n We could us `.main-menu:target:after`, but\n it wouldn\'t be clickable.\n*/\n.main-menu:target + .backdrop,\n.main-menu[aria-expanded="true"] + .backdrop{\n  position: absolute;\n  display: block;  \n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 998;\n  background: #000;\n  background: rgba(0,0,0,.85);\n  cursor: default;\n}\n\n@supports (position: fixed) {\n  .main-menu,\n  .main-menu:target + .backdrop,\n  .main-menu[aria-expanded="true"] + .backdrop{\n    position: fixed;\n  }\n}\n/* --------------My styles -------------- */\n.navbar {\n  background-color: #fce9ef; \n  height: 127px; \n  max-width: 100%; \n  padding: 0 2vw;\n  display: flex;\n}\n\n.logo {\n  height: inherit;\n}\n\n\n\n@media only screen and (max-width: 549px) {\n  .nav-items {\n    display: none;\n  }\n  #main-menu-toggle {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin: auto 0;\n    color: black;\n    position: absolute;\n    left: 0;\n    top: 51px;\n  }\n  .logo{\n    margin: auto;\n  }\n  header{\n    direction: rtl;\n  }\n} \n\n@media only screen and (min-width: 550px) {\n  .nav-items {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: center;\n    z-index: 1;\n  }\n  .nav-item{\n    margin-left: 2rem;  \n    text-align: center; \n  }\n  #main-menu-toggle {\n    display: none;\n  }\n}',""]);const r=o},539:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(645),o=t.n(i),r=t(667),a=t.n(r),d=t(222),l=o()((function(n){return n[1]})),c=a()(d.Z);l.push([n.id,".products-section {\n  background-image: url("+c+");\n  padding-top: 3.5%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center top;\n  overflow: overlay;\n  display: grid;\n  grid-gap: 10px;\n}\n\n#corte-ribbon{\n  margin: auto;\n  display: flex; \n  justify-content: center;\n}\n#tijeras-costo-corte{\n  height: 3rem; \n  margin: auto 2rem;\n}\n\n/* Grid columns and backgroung for mobile */\n@media only screen and (max-width: 750px){\n  \n  .products-section {\n    display: none;\n   /*  grid-template-columns: 5% auto 5%;\n    grid-template-rows: 100px auto auto auto auto 20px auto auto auto 20px auto auto auto 20px auto auto auto 60px; */\n  }\n  #products-mobile {\n    width: 100%;\n  }\n\n  /* #products-title{\n    grid-column: 1 / 4;\n    grid-row: 1;\n    display: flex;\n    margin: auto;\n    align-items: center;\n    font-size: 34px; \n  }\n  .precio-corte{\n    grid-column: 1 / 4;\n    grid-row: 2;\n    padding: 5px;\n    background-color: #eb6597;\n    color: white;\n  }\n  .razas-mini{\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    text-align: center;\n  }\n  .mini {\n     grid-column: 2 / 3;\n     grid-row: 4 / 5;\n     margin: auto;\n  }\n  .mini-text {\n    grid-column: 2 / 3;\n     grid-row: 5 / 6;\n     text-align: center;\n    }\n  .razas-pequenas{\n    grid-column: 2 / 3;\n    grid-row: 7 / 8;\n    text-align: center;\n  }\n  .small {\n    grid-column: 2 / 3;\n    grid-row: 8 / 9;\n    margin: auto;\n  }\n  .small-text {\n    grid-column: 2 / 3;\n    grid-row: 9 / 10;\n    text-align: center;\n  }\n  .razas-medianas{\n    grid-column: 2 / 3;\n    grid-row: 11 / 12;\n    text-align: center;\n  }\n  .medium {\n    grid-column: 2 / 3;\n    grid-row: 12 / 13;\n    margin: auto;\n  }\n  .medium-text {\n    grid-column: 2 / 3;\n    grid-row: 13 / 14;\n    text-align: center;\n  }\n  .razas-grandes{\n    grid-column: 2 / 3;\n    grid-row: 15 / 16;\n    text-align: center;\n  }\n  .big {\n    grid-column: 2 / 3;\n    grid-row: 16 / 17;\n    margin: auto\n  }\n  .big-text {\n    grid-column: 2 / 3;\n    grid-row: 17 / 18;\n    text-align: center;\n  } */\n}\n\n\n/* Grid columns and backgroung for tablets and desktop */\n@media only screen and (min-width: 751px){\n  #products-mobile{\n    display: none;\n  }\n  .products-section {\n    min-height: 97vh;\n    grid-template-columns: 5% auto 10px auto 10px auto 10px auto 5%;\n    grid-template-rows: 100px auto auto auto auto 100px;\n  }\n  #products-title{\n    grid-column: 1 / 10;\n    grid-row: 1;\n    display: flex;\n    margin: auto;\n    align-items: center;\n    font-size: 50px; \n  }\n  \n  .precio-corte{\n    grid-column: 1 / 10;\n    grid-row: 2;\n    padding: 5px;\n    background-color: #eb6597;\n    color: white;\n  }\n\n  .razas-mini{\n    grid-column: 2 / 3;\n    grid-row:  3 / 4;\n    text-align: center;\n  }\n  .mini {\n     grid-column: 2 / 3;\n     grid-row: 4 / 5;\n     margin: auto;\n     text-align: center; \n     padding-top: 5%;\n  }\n  #mini-im{\n    max-width: 100%;\n  }\n  .mini-text {\n    grid-column: 2 / 3;\n    grid-row: 5 / 6;\n    text-align: center;\n    display: block;\n    }\n  .razas-pequenas{\n    grid-column: 4 / 5;\n    grid-row: 3 / 4;\n    text-align: center;\n  }\n  .small {\n    grid-column: 4 / 5;\n    grid-row: 4 / 5;\n    margin: auto;\n    text-align: center; \n    padding-top: 5%;\n  }\n  #small-img{\n    max-width: 100%;\n  }\n  .small-text {\n    grid-column: 4 / 5;\n    grid-row: 5 / 6;\n    text-align: center;\n    display: block;\n  }\n  .razas-medianas{\n    grid-column: 6 / 7;\n    grid-row: 3 / 4;\n    text-align: center;\n  }\n  .medium {\n    grid-column: 6 / 7;\n    grid-row: 4 / 5;\n    margin: auto;\n    text-align: center; \n    padding-top: 5%;\n  }\n  #medium-img{\n    max-width: 100%;\n  }\n  .medium-text {\n    grid-column: 6 / 7;\n    grid-row: 5 / 6;\n    text-align: center;\n    display: block;\n  }\n  .razas-grandes{\n    grid-column: 8 / 9;\n    grid-row: 3 / 4;\n    text-align: center;\n  }\n  .big {\n    grid-column: 8 / 9;\n    grid-row: 4 / 5;\n    margin: auto;\n    text-align: center; \n    padding-top: 5%;\n  }\n  #big-img{\n    max-width: 100%;\n  }\n  .big-text {\n    grid-column: 8 / 9;\n    grid-row: 5 / 6;\n    text-align: center;\n    display: block;\n  }\n}\n\n\n\n/* ...................VIP................. */\n.vip {\n  background-color: black;  \n  justify-content: center;\n  padding-bottom: 3rem;\n}\n\n#vip-ribbon{\n  width: 100%; \n  background-color: white; \n  height: 50px; \n  margin-top: 40px; \n  padding: 5px; \n  display: inline-flex;\n}\n\n#vip-slide{\n  margin-top: 30px;\n  margin-left: 11vh;\n  margin-right: 11vh;\n}\n\n.vip-product{\n  text-align: center; \n  color: white;\n}\n\n\n\n@media only screen and (max-width: 750px){  \n  .vip-products {\n    display: none;\n  }  \n  .vip{\n    min-height:20vh;\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 751px){\n\n  .vip{\n    display: block;\n  }\n}\n",""]);const s=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);i&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},222:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"82bf1937b1f8ecf80b42299c41c58171.png"},854:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"dc857919bb1e0c4bae97bb7515890109.png"},379:(n,e,t)=>{var i,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),r=[];function a(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function d(n,e){for(var t={},i=[],o=0;o<n.length;o++){var d=n[o],l=e.base?d[0]+e.base:d[0],c=t[l]||0,s="".concat(l," ").concat(c);t[l]=c+1;var p=a(s),u={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(r[p].references++,r[p].updater(u)):r.push({identifier:s,updater:h(u,e),references:1}),i.push(s)}return i}function l(n){var e=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(n){e.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,s=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function p(n,e,t,i){var o=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=s(e,o);else{var r=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function u(n,e,t){var i=t.css,o=t.media,r=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var g=null,m=0;function h(n,e){var t,i,o;if(e.singleton){var r=m++;t=g||(g=l(e)),i=p.bind(null,t,r,!1),o=p.bind(null,t,r,!0)}else t=l(e),i=u.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=d(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<t.length;i++){var o=a(t[i]);r[o].references--}for(var l=d(n,e),c=0;c<t.length;c++){var s=a(t[c]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}t=l}}}}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");i.length&&(n=i[i.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),i=t(797);e()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var o=t(601);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var r=t(370);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var a=t(8);e()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var d=t(831);e()(d.Z,{insert:"head",singleton:!1}),d.Z.locals;var l=t(539);e()(l.Z,{insert:"head",singleton:!1}),l.Z.locals,t(222),t(854),document.addEventListener("DOMContentLoaded",(function(){new Splide("#vip-slide",{perPage:4,rewind:!0,autoplay:!0,interval:3e3,breakpoints:{700:{perPage:2}}}).mount()}));var c=new Splide("#clientes-secondary-slider",{rewind:!0,fixedWidth:100,fixedHeight:64,isNavigation:!0,autoplay:!0,interval:3e3,gap:10,focus:"center",pagination:!1,cover:!0,direction:"ttb",heightRatio:4.4,breakpoints:{800:{fixedWidth:80,fixedHeight:60},425:{arrows:!1,fixedHeight:60}}}).mount();new Splide("#clientes-slider",{type:"fade",heightRatio:1.3,fixedWidth:"25vw",pagination:!1,arrows:!1,cover:!0,breakpoints:{1100:{fixedWidth:"30vw",heightRatio:1.6},800:{fixedWidth:"50vw",heightRatio:1.6},425:{pagination:!0,fixedWidth:"70vw",heightRatio:1.7}}}).sync(c).mount()})()})();