"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[2603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"$creationDate",description:"Gets the creation date of the specified server, user, channel, message or role ID"},i=void 0,l={unversionedId:"functions/creationdate",id:"version-5.5.5/functions/creationdate",title:"$creationDate",description:"Gets the creation date of the specified server, user, channel, message or role ID",source:"@site/versioned_docs/version-5.5.5/functions/creationdate.md",sourceDirName:"functions",slug:"/functions/creationdate",permalink:"/docs/5.5.5/functions/creationdate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689356303,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{title:"$creationDate",description:"Gets the creation date of the specified server, user, channel, message or role ID"},sidebar:"docs",previous:{title:"$createWebhook",permalink:"/docs/5.5.5/functions/createwebhook"},next:{title:"$cropText",permalink:"/docs/5.5.5/functions/croptext"}},s={},c=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Format Options:",id:"format-options",level:4},{value:"Examples",id:"examples",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function will get the creation date of the specified ID."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$creationDate[id;format?]\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The id of user,role,channel,guild whose creation date is to be returned"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"format"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The format in which the date will be returned"),(0,r.kt)("td",{parentName:"tr",align:"left"},"alphanumeric"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,r.kt)("h4",{id:"format-options"},"Format Options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"date")," =",">"," Exact Date and Time - Example: 11/4/2020, 1:08:06 AM ","(","default option",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ms")," =",">"," Milliseconds of the date - Example: 1604452086625"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"time")," =",">"," How long ago - Example: 4 months 2 weeks 4 days 18 hours 32 minutes and 32 seconds")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using date format of the creation of an user:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "creationDate",\ncode: `\nCreation Date of Kubaturi: $creationDate[535566311942651924;date]\n`\n}) \n/*\nThis will return:\n1/17/2019, 9:09:19 PM\n*/\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using ms format of the creation of an user:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "creationDate",\ncode: `\nCreation Date of Kubaturi: $creationDate[535566311942651924;ms]\n`\n}) \n/*\nThis will return:\n1547759359108\n*/\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using time format of the creation of an user:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "creationDate",\ncode: `\nCreation Date of Kubaturi: $creationDate[535566311942651924;time]\n`\n}) \n/*\nThis will return:\n2 years 1 month 3 weeks 3 days 6 hours 42 minutes and 6 seconds\n*/\n')))}d.isMDXComponent=!0}}]);