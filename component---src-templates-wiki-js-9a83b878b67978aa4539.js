(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},I5cv:function(e,t,r){var n=r("XKFU"),i=r("Kuth"),o=r("2OiF"),c=r("y3w9"),u=r("0/R4"),l=r("eeVq"),a=r("8MEG"),s=(r("dyZX").Reflect||{}).construct,d=l((function(){function e(){}return!(s((function(){}),[],e)instanceof e)})),p=!l((function(){s((function(){}))}));n(n.S+n.F*(d||p),"Reflect",{construct:function(e,t){o(e),c(t);var r=arguments.length<3?e:o(arguments[2]);if(p&&!d)return s(e,t,r);if(e==r){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var n=[null];return n.push.apply(n,t),new(a.apply(e,n))}var l=r.prototype,f=i(u(l)?l:Object.prototype),m=Function.apply.call(e,f,t);return u(m)?m:f}})},X8hv:function(e,t,r){function n(e,t,r){return(n=i()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return r&&o(i,r.prototype),i}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r("jm62"),r("yt8O"),r("RW0V"),r("rGqo"),r("rE2o"),r("ioFf"),r("XfO3"),r("HEwt"),r("f3/d"),r("a1Th"),r("Btvt"),r("I5cv"),r("I5cv"),r("f3/d"),r("a1Th"),r("XfO3"),r("HEwt"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var d=r("q1tI"),p=r("7ljp"),f=p.useMDXComponents,m=p.mdx,b=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.components,i=e.children,o=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,["scope","components","children"]),u=f(r),l=b(t),s=d.useMemo((function(){if(!i)return null;var e=a({React:d,mdx:m},l),t=Object.keys(e),r=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(c(t),[""+i])).apply(void 0,[{}].concat(c(r)))}),[i,t]);return d.createElement(s,a({components:u},o))}},aTM4:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return k})),r.d(t,"query",(function(){return x}));var n=r("wTIg"),i=(r("q1tI"),r("Wbzz")),o=r("7ljp"),c=r("A2+M"),u=r("vrFN"),l=r("Bl7J"),a=r("upwP"),s=r("kNJP"),d=r("qKvR"),p=Object(n.a)("section",{target:"e1f3copk0"})("@media (min-width:",s.a.viewportSizes.desktop,"){position:fixed;bottom:0;top:60px;height:calc(100vh - 9rem);width:20rem;background:",a.a.colors.navbg,";border-right:1px solid ",a.a.colors.navbgBorder,";padding:1rem;}"),f=Object(n.a)("div",{target:"e1f3copk1"})({name:"xus3e3",styles:"text-transform:uppercase;font-weight:bold;font-size:0.85rem;margin-bottom:1rem;"});function m(e){var t=e.section;return Object(d.d)("li",null,Object(d.d)(i.a,{to:t.url},t.title))}function b(e){var t=e.section;return Object(d.d)("div",null,Object(d.d)(f,null,t.title),Object(d.d)("ul",null,t.children.map((function(e,t){return Object(d.d)(m,{section:e,key:t})}))))}function y(e){var t=e.sidebar;return Object(d.d)(p,null,t.map((function(e,t){return Object(d.d)(b,{key:t,section:e})})))}var v=r("r+XU"),w=Object(n.a)("div",{target:"e1ggvu750"})({name:"1xvy0rr",styles:"background-color:#9a0007;color:white;padding:1rem;"});var g=Object(n.a)("article",{target:"em2qb6j0"})("display:flex;margin:auto;@media (max-width:",s.a.viewportSizes.desktop,"){flex-direction:column-reverse;}@media (min-width:",s.a.viewportSizes.phone,"){margin-bottom:60px;}"),O=Object(n.a)("div",{target:"em2qb6j1"})("margin-left:22rem;width:calc(100vw - 22rem);@media (max-width:",s.a.viewportSizes.tablet,"){margin:0 1rem;width:auto;}"),h=Object(n.a)("section",{target:"em2qb6j2"})({name:"17q09oh",styles:"max-width:40rem;margin:0 auto;"}),j={Caution:function(e){var t=e.children;return Object(d.d)(w,null,Object(d.d)("strong",null,"Caution!")," ",t)},Link:i.a};function k(e){var t=e.location,r=e.data.mdx;return Object(d.d)(l.a,{location:t},Object(d.d)(u.a,{title:r.frontmatter.title,description:r.excerpt}),Object(d.d)(g,null,Object(d.d)(y,{sidebar:v}),Object(d.d)(O,null,Object(d.d)(h,null,Object(d.d)("h1",null,r.frontmatter.title),Object(d.d)(o.MDXProvider,{components:j},Object(d.d)(c.MDXRenderer,null,r.body))))))}var x="3116041395"},"r+XU":function(e){e.exports=JSON.parse('[{"title":"Velocity User\'s Guide","url":"/wiki/","children":[{"title":"Getting Started","url":"/wiki/users/getting-started/"},{"title":"Built-In Commands","url":"/wiki/users/built-in-commands/"},{"title":"Configuring Velocity","url":"/wiki/users/configuration/"},{"title":"Server Compatibility","url":"/wiki/users/server-compatibility/"},{"title":"Player Information Forwarding","url":"/wiki/users/forwarding/"}]},{"title":"Deployment Guide","url":"/wiki/deployment/","children":[{"title":"Securing Your Servers","url":"/wiki/deployment/security/"},{"title":"Tuning Velocity","url":"/wiki/deployment/tuning/"}]},{"title":"Developer Guide","url":"/wiki/developers/","children":[{"title":"Creating Your First Plugin","url":"/wiki/developers/creating-your-first-plugin/"},{"title":"API Basics","url":"/wiki/developers/api-basics/"},{"title":"The Event API","url":"/wiki/developers/listener/"},{"title":"The Command API","url":"/wiki/developers/command-api/"},{"title":"Plugin Dependencies","url":"/wiki/developers/dependencies/"},{"title":"Task Scheduling","url":"/wiki/developers/task-scheduling/"}]},{"title":"Technical Wiki","url":"/wiki/technical/","children":[{"title":"Why Not Fork BungeeCord?","url":"/wiki/technical/why-not-fork-bungeecord/"}]}]')}}]);
//# sourceMappingURL=component---src-templates-wiki-js-9a83b878b67978aa4539.js.map