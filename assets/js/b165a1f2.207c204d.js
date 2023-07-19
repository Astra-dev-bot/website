"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[43892],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=i,d=u["".concat(c,".").concat(f)]||u[f]||v[f]||a;return t?r.createElement(d,o(o({ref:n},s),{},{components:t})):r.createElement(d,o({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},20842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>m,default:()=>D,frontMatter:()=>d,metadata:()=>h,toc:()=>b});var r=t(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&s(e,t,n[t]);if(l)for(var t of l(n))p.call(n,t)&&s(e,t,n[t]);return e},v=(e,n)=>a(e,o(n)),f=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const d={title:"$inviteChannelID",description:"$inviteChannelID will return the invite channel ID of a given invite code.",id:"inviteChannelID"},m=void 0,h={unversionedId:"functions/invite-related/inviteChannelID",id:"version-6.4.0/functions/invite-related/inviteChannelID",title:"$inviteChannelID",description:"$inviteChannelID will return the invite channel ID of a given invite code.",source:"@site/versioned_docs/version-6.4.0/functions/invite-related/inviteChannelID.md",sourceDirName:"functions/invite-related",slug:"/functions/invite-related/inviteChannelID",permalink:"/docs/functions/invite-related/inviteChannelID",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689787736,formattedLastUpdatedAt:"Jul 19, 2023",frontMatter:{title:"$inviteChannelID",description:"$inviteChannelID will return the invite channel ID of a given invite code.",id:"inviteChannelID"},sidebar:"docs",previous:{title:"$invite",permalink:"/docs/functions/invite-related/invite"},next:{title:"$inviteCode",permalink:"/docs/functions/invite-related/inviteCode"}},y={},b=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],g={toc:b},O="wrapper";function D(e){var n=e,{components:t}=n,i=f(n,["components"]);return(0,r.kt)(O,v(u(u({},g),i),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$inviteChannelID")," will return the invite channel ID of a given invite code."),(0,r.kt)("h2",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$inviteChannelID\n")),(0,r.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return the invite Channel ID of the created invite:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.inviteCreateCommand({\n    name: 'inviteChannelID',\n    channel: '$channelID',\n    code: `\n  $inviteChannelID\n  `\n});\n")))}D.isMDXComponent=!0}}]);