"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[82085],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),c=l,f=d["".concat(i,".").concat(c)]||d[c]||k[c]||r;return t?a.createElement(f,p(p({ref:n},u),{},{components:t})):a.createElement(f,p({ref:n},u))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=c;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[d]="string"==typeof e?e:l,p[1]=o;for(var s=2;s<r;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},94890:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(87462),l=(t(67294),t(3905));const r={title:"$songFilter"},p=void 0,o={unversionedId:"functions/songfilter",id:"version-5.5.5/functions/songfilter",title:"$songFilter",description:"This function can change the music's filter such as bassboost and many more.",source:"@site/versioned_docs/version-5.5.5/functions/songfilter.md",sourceDirName:"functions",slug:"/functions/songfilter",permalink:"/docs/5.5.5/functions/songfilter",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687147923,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{title:"$songFilter"},sidebar:"docs",previous:{title:"$slowmode",permalink:"/docs/5.5.5/functions/slowmode"},next:{title:"$songInfo",permalink:"/docs/5.5.5/functions/songinfo"}},i={},s=[{value:"Available Types",id:"available-types",level:3}],u={toc:s},d="wrapper";function k(e){let{components:n,...t}=e;return(0,l.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This function can change the music's filter such as bassboost and many more."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$songFilter[type:value;type:value;...]\n")),(0,l.kt)("h3",{id:"available-types"},"Available Types"),(0,l.kt)("p",null,"Changes the pitch of the audio"),(0,l.kt)("p",null,"Raw usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"pitch:number")),(0,l.kt)("p",null,"Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"pitch:1.5")),(0,l.kt)("p",null,"Min: ",(0,l.kt)("inlineCode",{parentName:"p"},"0.1")," Max: ",(0,l.kt)("inlineCode",{parentName:"p"},"1.9")),(0,l.kt)("p",null,"Changes the bass for the audio"),(0,l.kt)("p",null,"Raw Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"bass:number")),(0,l.kt)("p",null,"Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"bass:5")),(0,l.kt)("p",null,"Min: ",(0,l.kt)("inlineCode",{parentName:"p"},"-20")," Max: ",(0,l.kt)("inlineCode",{parentName:"p"},"20")),(0,l.kt)("p",null,"Sets an echo for the audio"),(0,l.kt)("p",null,"Raw Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"echo:number")),(0,l.kt)("p",null,"Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"echo:100")),(0,l.kt)("p",null,"Min: ",(0,l.kt)("inlineCode",{parentName:"p"},"0.9")," Max: ",(0,l.kt)("inlineCode",{parentName:"p"},"90000")),(0,l.kt)("p",null,"Sets a speed for the audio"),(0,l.kt)("p",null,"Raw Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"speed:number")),(0,l.kt)("p",null,"Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"speed:1.5")),(0,l.kt)("p",null,"Min: ",(0,l.kt)("inlineCode",{parentName:"p"},"0.1")," Max: ",(0,l.kt)("inlineCode",{parentName:"p"},"1.9")),(0,l.kt)("p",null,"Sets a vibrato for the audio"),(0,l.kt)("p",null,"Raw Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"vibrato:number")),(0,l.kt)("p",null,"Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"vibrato:0.5")),(0,l.kt)("p",null,"Min: ",(0,l.kt)("inlineCode",{parentName:"p"},"0.1")," Max: ",(0,l.kt)("inlineCode",{parentName:"p"},"0.9")),(0,l.kt)("p",null,"Set a pulsator to the audio"),(0,l.kt)("p",null,"Raw Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsator:number")),(0,l.kt)("p",null,"Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsator:5")),(0,l.kt)("p",null,"Min: ",(0,l.kt)("inlineCode",{parentName:"p"},"0.1")," Max: ",(0,l.kt)("inlineCode",{parentName:"p"},"99.9")),(0,l.kt)("p",null,"Sets a contrast for the audio"),(0,l.kt)("p",null,"Raw Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"contrast:number")),(0,l.kt)("p",null,"Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"contrast:1")),(0,l.kt)("p",null,"Min: ",(0,l.kt)("inlineCode",{parentName:"p"},"0.1")," Max: ",(0,l.kt)("inlineCode",{parentName:"p"},"99.9")),(0,l.kt)("p",null,"Reduces the noise of the audio"),(0,l.kt)("p",null,"Raw Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"gate:on/off")),(0,l.kt)("p",null,"On: ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," Off: ",(0,l.kt)("inlineCode",{parentName:"p"},"0")),(0,l.kt)("p",null,"Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"gate:1")),(0,l.kt)("p",null,"Applies a flanging effect for the audio"),(0,l.kt)("p",null,"Raw Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"flanger:on/off")),(0,l.kt)("p",null,"On: ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," Off: ",(0,l.kt)("inlineCode",{parentName:"p"},"0")),(0,l.kt)("p",null,"Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"flanger:1")),(0,l.kt)("p",null,"Add a phasing effect for the audio"),(0,l.kt)("p",null,"Raw Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"phaser:on/off")),(0,l.kt)("p",null,"On: ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," Off: ",(0,l.kt)("inlineCode",{parentName:"p"},"0")),(0,l.kt)("p",null,"Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"phaser:1")),(0,l.kt)("p",null,"Applies surround sound filter for the audio"),(0,l.kt)("p",null,"Raw Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"surround:on/off")),(0,l.kt)("p",null,"On: ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," Off: ",(0,l.kt)("inlineCode",{parentName:"p"},"0")),(0,l.kt)("p",null,"Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"surround:1")),(0,l.kt)("p",null,"Makes the audio easier to listen on headphones"),(0,l.kt)("p",null,"Raw Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"earwax:on/off")),(0,l.kt)("p",null,"On: ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," Off: ",(0,l.kt)("inlineCode",{parentName:"p"},"0")),(0,l.kt)("p",null,"Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"earwax:1")),(0,l.kt)("p",null,"If you want to reset the filter, put the value ",(0,l.kt)("inlineCode",{parentName:"p"},"0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: \"songFilter\",\ncode: `\n$songFilter[bass:10;speed:2]\n`\n/*\nThis sets the bass to '50' and sets the speed to '2x' speed\n*/\n})\n")))}k.isMDXComponent=!0}}]);