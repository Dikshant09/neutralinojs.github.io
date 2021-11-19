(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},N=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),N=r,O=p["".concat(b,".").concat(N)]||p[N]||m[N]||l;return n?a.a.createElement(O,i(i({ref:t},c),{},{components:n})):a.a.createElement(O,i({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,b=new Array(l);b[0]=N;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var c=2;c<l;c++)b[c]=n[c];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return c}));var r=n(3),a=(n(0),n(105));const l={title:"Error Codes"},b={unversionedId:"api/error-codes",id:"api/error-codes",isDocsHomePage:!1,title:"Error Codes",description:"If a particular native API call fails, Neutralinojs client library rejects the pending Promise with an error object.",source:"@site/docs/api/error-codes.md",slug:"/api/error-codes",permalink:"/docs/api/error-codes",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/error-codes.md",version:"current",sidebar:"docs",previous:{title:"Neutralino.events",permalink:"/docs/api/events"},next:{title:"Global Variables",permalink:"/docs/api/global-variables"}},i=[{value:"Native API error codes",id:"native-api-error-codes",children:[]}],o={toc:i};function c({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If a particular native API call fails, Neutralinojs client library rejects the pending Promise with an error object."),Object(a.b)("p",null,"The error object has the following structure."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    code: "CODE"\n    message: "MESSAGE"\n}\n')),Object(a.b)("h2",{id:"native-api-error-codes"},"Native API error codes"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Error code"),Object(a.b)("th",{parentName:"tr",align:null},"Message"),Object(a.b)("th",{parentName:"tr",align:null},"Thrown by"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"NE_FS_DIRCRER")),Object(a.b)("td",{parentName:"tr",align:null},"Unable to create directory."),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"os.createDirectory"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"NE_FS_RMDIRER")),Object(a.b)("td",{parentName:"tr",align:null},"Unable to remove directory."),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"os.removeDirectory"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"NE_FS_FILRDER")),Object(a.b)("td",{parentName:"tr",align:null},"File read error."),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"filesystem.readFile"),", ",Object(a.b)("inlineCode",{parentName:"td"},"filesystem.readBinaryFile"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"NE_FS_FILWRER")),Object(a.b)("td",{parentName:"tr",align:null},"File write error."),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"filesystem.writeFile"),", ",Object(a.b)("inlineCode",{parentName:"td"},"filesystem.writeBinaryFile"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"NE_FS_FILRMER")),Object(a.b)("td",{parentName:"tr",align:null},"File remove error."),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"filesystem.removeFile"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"NE_FS_NOPATHE")),Object(a.b)("td",{parentName:"tr",align:null},"No file or directory."),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"filesystem.getStats"),", ",Object(a.b)("inlineCode",{parentName:"td"},"filesystem.readDirectory"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"NE_FS_COPYFER")),Object(a.b)("td",{parentName:"tr",align:null},"File copy error."),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"filesystem.copyFile"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"NE_FS_MOVEFER")),Object(a.b)("td",{parentName:"tr",align:null},"File move error."),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"filesystem.moveFile"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"NE_OS_ENVNOEX")),Object(a.b)("td",{parentName:"tr",align:null},"The environment variable is not defined.."),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"os.getEnv"),",")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"NE_OS_INVMSGA")),Object(a.b)("td",{parentName:"tr",align:null},"Invalid message box arguments."),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"os.showMessageBox"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"NE_OS_INVKNPT")),Object(a.b)("td",{parentName:"tr",align:null},"Invalid platform path name."),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"os.getPath"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"NE_ST_INVSTKY")),Object(a.b)("td",{parentName:"tr",align:null},"Invalid storage key."),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"storage.getData"),", ",Object(a.b)("inlineCode",{parentName:"td"},"storage.setData"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"NE_ST_STKEYWE")),Object(a.b)("td",{parentName:"tr",align:null},"Storage write error."),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"storage.setData"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"NE_RT_INVTOKN")),Object(a.b)("td",{parentName:"tr",align:null},"Invalid access token."),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"all"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"NE_RT_NATPRME")),Object(a.b)("td",{parentName:"tr",align:null},"No permission to execute the provided native method."),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"all"),",")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"NE_RT_APIPRME")),Object(a.b)("td",{parentName:"tr",align:null},"No permission to use the native API."),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"all"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"NE_RT_NATRTER")),Object(a.b)("td",{parentName:"tr",align:null},"Native method runtime error. Mostly occured due to missing parameters."),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"all"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"NE_RT_NATNTIM")),Object(a.b)("td",{parentName:"tr",align:null},"Native method is not implemented."),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"internal"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"NE_CL_NSEROFF")),Object(a.b)("td",{parentName:"tr",align:null},"Neutralino server is not reachable."),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"all"))))))}c.isMDXComponent=!0}}]);