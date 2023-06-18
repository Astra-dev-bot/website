"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[20993],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),c=n,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},71053:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={title:"$httpRequest"},o=void 0,i={unversionedId:"functions/httprequest",id:"version-5.5.5/functions/httprequest",title:"$httpRequest",description:"This function allows the bot to request a method from/to the given url",source:"@site/versioned_docs/version-5.5.5/functions/httprequest.md",sourceDirName:"functions",slug:"/functions/httprequest",permalink:"/docs/5.5.5/functions/httprequest",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687063751,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{title:"$httpRequest"},sidebar:"docs",previous:{title:"$hour",permalink:"/docs/5.5.5/functions/hour"},next:{title:"$humanizeMs",permalink:"/docs/5.5.5/functions/humanizems"}},p={},s=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Methods",id:"methods",level:4},{value:"Examples",id:"examples",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function allows the bot to request a method from/to the given url"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"$httpRequest[url;method?;body?;property?;error?;headerName:headerValue?...]\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"url"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The url you're requesting from/to"),(0,n.kt)("td",{parentName:"tr",align:"left"},"url"),(0,n.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"method"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The method we're using"),(0,n.kt)("td",{parentName:"tr",align:"left"},"alphanumeric"),(0,n.kt)("td",{parentName:"tr",align:"left"},"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"body"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The content"),(0,n.kt)("td",{parentName:"tr",align:"left"},"alphanumeric"),(0,n.kt)("td",{parentName:"tr",align:"left"},"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"property"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The property to be retrieved if method is GET."),(0,n.kt)("td",{parentName:"tr",align:"left"},"alphanumeric"),(0,n.kt)("td",{parentName:"tr",align:"left"},"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"error"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The error message if the request failed."),(0,n.kt)("td",{parentName:"tr",align:"left"},"alphanumeric"),(0,n.kt)("td",{parentName:"tr",align:"left"},"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"header","(","s",")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The request headers/values."),(0,n.kt)("td",{parentName:"tr",align:"left"},"alphanumeric"),(0,n.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,n.kt)("h4",{id:"methods"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GET - Request data from a resource"),(0,n.kt)("li",{parentName:"ul"},"POST - Send data to a server to create or update a resource")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Without optional fields")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: 'http',\ncode: `$httpRequest[https://some-random-api.ml/facts/dog]`\n})\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"With optional fields")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: 'http',\ncode: `$httpRequest[https://some-random-api.ml/facts/dog;GET;;fact;Failed]`\n})\n")))}m.isMDXComponent=!0}}]);