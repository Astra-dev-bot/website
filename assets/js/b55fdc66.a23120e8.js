"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[5411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const l={title:"$getCooldownTime"},a=void 0,i={unversionedId:"functions/getcooldowntime",id:"version-5.5.5/functions/getcooldowntime",title:"$getCooldownTime",description:"This function will allow you to get the resting cooldown time for an user/server or globalUser  type of cooldown, for certain user in the requested command.",source:"@site/versioned_docs/version-5.5.5/functions/getcooldowntime.md",sourceDirName:"functions",slug:"/functions/getcooldowntime",permalink:"/docs/5.5.5/functions/getcooldowntime",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689356303,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{title:"$getCooldownTime"},sidebar:"docs",previous:{title:"$getChannelVar",permalink:"/docs/5.5.5/functions/getchannelvar"},next:{title:"$getCustomStatus",permalink:"/docs/5.5.5/functions/getcustomstatus"}},c={},s=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Types of Cooldown",id:"types-of-cooldown",level:4},{value:"Usage",id:"usage",level:4}],d={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function will allow you to get the resting cooldown time for an user/server or globalUser  type of cooldown, for certain user in the requested command."),(0,r.kt)("h4",{id:"fields"},"Fields"),(0,r.kt)("p",null,"This function has 4 required fields"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Time ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Type of cooldown ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Command Name ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"ID ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Return ms  ","(","Optional",")")),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$getCooldownTime[time;typeOfCooldown;command name;ID;return ms (yes/no) (optional)]")),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type Of Cooldown - The cooldown used in the command"),(0,r.kt)("li",{parentName:"ul"},"Command Name - The command name of where the cooldown is"),(0,r.kt)("li",{parentName:"ul"},"ID - The user's/server's id we're getting the cooldown for"),(0,r.kt)("li",{parentName:"ul"},"Return ms - Whethor or not the function will return the time in ms")),(0,r.kt)("h4",{id:"types-of-cooldown"},"Types of Cooldown"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"user - ",(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/cooldown"},"$cooldown")),(0,r.kt)("li",{parentName:"ul"},"globalUser - ",(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/globalcooldown"},"$globalCooldown")),(0,r.kt)("li",{parentName:"ul"},"server -",(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/servercooldown"}," $serverCooldown")),(0,r.kt)("li",{parentName:"ul"},"channel - ",(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/channelcooldown"},"$channelCooldown"))),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Without optional field"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "cooldown",\n    code: `\n    $description[\nDaily command: $getCooldownTime[1d;globalUser;daily;$authorID]\n]\n    `\n});\n')),(0,r.kt)("p",null,"With optional field"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "cooldown",\n    code: `\n    $description[\nDaily command: $getCooldownTime[1d;globalUser;daily;$authorID;yes]\n] `\n});\n')))}p.isMDXComponent=!0}}]);