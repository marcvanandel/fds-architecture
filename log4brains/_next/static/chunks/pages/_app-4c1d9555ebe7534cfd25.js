_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{0:function(e,t,r){r("tfsj"),e.exports=r("w9JO")},"OjD/":function(e,t,r){},YNMu:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return A}));var n=r("DBXr"),o=r("QVj7"),i=r("pEjj"),a=r.n(i),c=r("PKh5"),l=r.n(c),u=r("TeXo"),s=(r("neGj"),r("OjD/"),r("aKFv")),b=r("zo1v"),f={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},p=function(e){return Object(s.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};var d=Object(b.a)((function(e){return{"@global":{html:f,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(s.a)({margin:0},p(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,r=void 0===t?null:t;return e.classes,i.createElement(i.Fragment,null,r)})),m=r("XEuW"),h=r("zBxC"),j=r("beLr");var g=function(e){var t=e.children,r=e.theme,n=Object(h.a)(),o=a.a.useMemo((function(){var e=null===n?r:function(e,t){return"function"===typeof t?t(e):Object(s.a)({},e,t)}(n,r);return null!=e&&(e[j.a]=null!==n),e}),[r,n]);return a.a.createElement(m.a.Provider,{value:o},t)},O=r("GPT8"),v=r("EVjb");function y(e){return String(parseFloat(e)).length===String(e).length}function w(e){return parseFloat(e)}function x(e){return function(t,r){var n=String(t).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(n===r)return t;var o=w(t);if("px"!==n)if("em"===n)o=w(t)*w(e);else if("rem"===n)return o=w(t)*w(e),t;var i=o;if("px"!==r)if("em"===r)i=o/w(e);else{if("rem"!==r)return t;i=o/w(e)}return parseFloat(i.toFixed(5))+r}}function P(e){var t=e.size,r=e.grid,n=t-t%r,o=n+r;return t-n<o-t?n:o}function F(e){var t=e.lineHeight;return e.pixels/(t*e.htmlFontSize)}function k(e){var t=e.cssProperty,r=e.min,n=e.max,o=e.unit,i=void 0===o?"rem":o,a=e.breakpoints,c=void 0===a?[600,960,1280]:a,l=e.transform,u=void 0===l?null:l,s=Object(v.a)({},t,"".concat(r).concat(i)),b=(n-r)/c[c.length-1];return c.forEach((function(e){var n=r+b*e;null!==u&&(n=u(n)),s["@media (min-width:".concat(e,"px)")]=Object(v.a)({},t,"".concat(Math.round(1e4*n)/1e4).concat(i))})),s}var E=r("piIi"),S=r("cVHe"),z=r("Ytf2");function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D="#2176AE",M='"Roboto Slab", "Noto Serif", "Times New Roman", serif',N=C(C({},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.breakpoints,n=void 0===r?["sm","md","lg"]:r,o=t.disableAlign,i=void 0!==o&&o,a=t.factor,c=void 0===a?2:a,l=t.variants,u=void 0===l?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:l,b=Object(s.a)({},e);b.typography=Object(s.a)({},b.typography);var f=b.typography,p=x(f.htmlFontSize),d=n.map((function(e){return b.breakpoints.values[e]}));return u.forEach((function(e){var t=f[e],r=parseFloat(p(t.fontSize,"rem"));if(!(r<=1)){var n=r,o=1+(n-1)/c,a=t.lineHeight;if(!y(a)&&!i)throw new Error(Object(O.a)(6));y(a)||(a=parseFloat(p(a,"rem"))/parseFloat(r));var l=null;i||(l=function(e){return P({size:e,grid:F({pixels:4,lineHeight:a,htmlFontSize:f.htmlFontSize})})}),f[e]=Object(s.a)({},t,k({cssProperty:"fontSize",min:o,max:n,unit:"rem",breakpoints:d,transform:l}))}})),b}(Object(E.a)({palette:{primary:{main:D},secondary:{main:"#FF007B"},error:{main:z.a.A400},background:{default:"#fff"}},typography:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',h1:{fontFamily:M},h2:{fontFamily:M},h3:{fontFamily:M,lineHeight:1.1},h4:{fontFamily:M},h5:{fontFamily:M},h6:{fontFamily:M}},props:{MuiLink:{underline:"none"}},overrides:{MuiCssBaseline:{"@global":{html:{maxWidth:"100%"},body:{padding:"0 !important",maxWidth:"100%"},blockquote:{margin:0,padding:"0 1em",borderLeft:"0.25em solid #F8F8F8",color:"#9e9e9e"}}},MuiLink:{root:{"&:hover":{color:Object(S.b)(D,.3)}}}},breakpoints:{values:{xs:0,sm:900,md:1060,lg:1280,xl:1920}}}))),{},{custom:{layout:{centerColBasis:782,centerColPadding:32,rightColBasis:180}}});function B(e){var t=e.children;return Object(n.jsxs)(g,{theme:N,children:[Object(n.jsx)(d,{}),t]})}var H=r("K/kP");function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e){var t=e.Component,r=e.pageProps;Object(i.useEffect)((function(){var e,t=document.querySelector("#jss-server-side");null===(e=null===t||void 0===t?void 0:t.parentElement)||void 0===e||e.removeChild(t)}));var o=t.getLayout||function(e){return e},a=Object(u.useRouter)(),c=H.b.static;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(l.a,{children:[Object(n.jsx)("title",{children:"Architecture knowledge base"}),Object(n.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"}),Object(n.jsx)("link",{rel:"shortcut icon",type:"image/x-icon",href:"".concat(a.basePath,"/favicon.ico")}),Object(n.jsx)("meta",{name:"og:image",content:"".concat(a.basePath,"/l4b-static/Log4brains-og.png")})]}),Object(n.jsx)(H.c.Provider,{value:c,children:Object(n.jsx)(B,{children:o(Object(n.jsx)(t,W({},r)),r)})})]})}},neGj:function(e,t,r){},tfsj:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("YNMu")}])}},[[0,0,2,1,3]]]);