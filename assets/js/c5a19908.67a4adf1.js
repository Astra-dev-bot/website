"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[26021],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=a,h=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[f]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={title:"$findChannel",description:"Retrieve the Channel ID, when writing the name of the Channel. (Global)"},o=void 0,l={unversionedId:"functions/findchannel",id:"version-5.5.5/functions/findchannel",title:"$findChannel",description:"Retrieve the Channel ID, when writing the name of the Channel. (Global)",source:"@site/versioned_docs/version-5.5.5/functions/findchannel.md",sourceDirName:"functions",slug:"/functions/findchannel",permalink:"/docs/5.5.5/functions/findchannel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687147774,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{title:"$findChannel",description:"Retrieve the Channel ID, when writing the name of the Channel. (Global)"},sidebar:"docs",previous:{title:"$filterMessage",permalink:"/docs/5.5.5/functions/filtermessage"},next:{title:"$findChars",permalink:"/docs/5.5.5/functions/findchars"}},c={},s=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],u={toc:s},f="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(f,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function returns the channel ID of the specified channel. Yes/No will determine if function returns current channel id ","(","yes",")"," or undefined ","(","no",")"," if no match was found. Default is yes"),(0,a.kt)("h4",{id:"fields"},"Fields"),(0,a.kt)("p",null,"This function has 1 required field"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Channel ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Return Current Channel ID ","(","Optional",")")),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$findChannel[channel;returnCurrentChannel (yes/no) (optional)]")),(0,a.kt)("h4",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Channel - The channel we're finding. You can use name/id/mention"),(0,a.kt)("li",{parentName:"ul"},"Return Current Channel ID - Returns current channel id if no channel found")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "channel",\ncode: `$findChannel[rubens-basement]`\n})\n')))}p.isMDXComponent=!0}}]);