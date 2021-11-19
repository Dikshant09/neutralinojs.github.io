(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),c=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),b=r,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return n?o.a.createElement(m,s(s({ref:t},u),{},{components:n})):o.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=(n(0),n(105));const i={title:"Introduction",slug:"/"},a={unversionedId:"getting-started/introduction",id:"getting-started/introduction",isDocsHomePage:!1,title:"Introduction",description:"What is Neutralinojs?",source:"@site/docs/getting-started/introduction.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/getting-started/introduction.md",version:"current",sidebar:"docs",next:{title:"Your First Neutralinojs App",permalink:"/docs/getting-started/your-first-neutralinojs-app"}},s=[{value:"What is Neutralinojs?",id:"what-is-neutralinojs",children:[]},{value:"Why Neutralinojs?",id:"why-neutralinojs",children:[]},{value:"Highlighted features",id:"highlighted-features",children:[]},{value:"Supported platforms and CPU architectures",id:"supported-platforms-and-cpu-architectures",children:[]}],l={toc:s};function u({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-neutralinojs"},"What is Neutralinojs?"),Object(o.b)("p",null,"Neutralinojs is a lightweight and portable application development framework.\nIt lets you develop cross-platform applications using JavaScript, HTML and CSS. Neutralinojs applications\nwill work on Linux, Windows, macOS, and Web."),Object(o.b)("h2",{id:"why-neutralinojs"},"Why Neutralinojs?"),Object(o.b)("p",null,"In Electron and NWjs, you have to install Node.js and hundreds of dependency libraries. Embedded Chromium and Node\nmake simple apps bloaty. Neutralinojs offers a lightweight and portable SDK which is an alternative for Electron and\nNW.js. Neutralinojs doesn't bundle Chromium and uses the existing web browser library in the operating\nsystem (Eg: gtk-webkit2 on Linux). Neutralinojs implements a WebSocket connection for native operations and embeds a\nstatic web server to serve the web content. Also, it offers a built-in\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralino.js"},"JavaScript client library")," for developers."),Object(o.b)("p",null,"See comparisons:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/Elanis/web-to-desktop-framework-comparison"},"Neutralinojs vs Electron vs NW.JS vs Tauri vs NodeGui vs Flutter vs .Net MAUI")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/neutralinojs/evaluation"},"Neutralinojs vs Electron vs NW.js (2018)"))),Object(o.b)("h2",{id:"highlighted-features"},"Highlighted features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fully portable development kit."),Object(o.b)("li",{parentName:"ul"},"No compilation required for developers."),Object(o.b)("li",{parentName:"ul"},"No additional dependencies required for users."),Object(o.b)("li",{parentName:"ul"},"Native functions support: Read files, run system commands, etc."),Object(o.b)("li",{parentName:"ul"},"Less resource intensive compared to chromium-node-based frameworks."),Object(o.b)("li",{parentName:"ul"},"Cross-platform: Neutralinojs apps work on Linux, Windows, macOS, and Web.")),Object(o.b)("h2",{id:"supported-platforms-and-cpu-architectures"},"Supported platforms and CPU architectures"),Object(o.b)("p",null,"neu CLI provides you pre-built x64 binaries for Linux, macOS, and Windows. However, you can build Neutralinojs\nbinaries from the source on almost all desktop operating systems and CPU architectures out there."),Object(o.b)("p",null,"If you need Neutralinojs binaries for non-x64 CPU, learn how to build Neutralinojs from source\nwith ",Object(o.b)("a",{parentName:"p",href:"contributing/framework-developer-guide#setup-and-build-the-framework"},"this guide"),"."))}u.isMDXComponent=!0}}]);