"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[59228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"$createApplicationCommand",description:"Creates an application command."},o=void 0,l={unversionedId:"functions/createapplicationcommand",id:"version-5.5.5/functions/createapplicationcommand",title:"$createApplicationCommand",description:"Creates an application command.",source:"@site/versioned_docs/version-5.5.5/functions/createapplicationcommand.md",sourceDirName:"functions",slug:"/functions/createapplicationcommand",permalink:"/docs/5.5.5/functions/createapplicationcommand",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687147923,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{title:"$createApplicationCommand",description:"Creates an application command."},sidebar:"docs",previous:{title:"$channelID",permalink:"/docs/5.5.5/functions/channelid"},next:{title:"$channelName",permalink:"/docs/5.5.5/functions/channelname"}},p={},s=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Application Permissions",id:"application-permissions",level:4},{value:"Application Types",id:"application-types",level:4},{value:"Slash Options",id:"slash-options",level:4},{value:"Footnotes",id:"footnotes",level:6},{value:"Examples",id:"examples",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Create an application command which is can be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Slash type"),(0,r.kt)("li",{parentName:"ul"},"Message type"),(0,r.kt)("li",{parentName:"ul"},"User type")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$createApplicationCommand[guildID/global;application name;application description?;default permission;type;options?]\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"guildID/global"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Creates the application command, for guild or global"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"application name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of application command"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"application description"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Description of application command, ",(0,r.kt)("strong",{parentName:"td"},"only required on slash type")),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"default permission"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The permission whom has authorize to use"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The type of application command"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The options of the ",(0,r.kt)("strong",{parentName:"td"},"slash")," type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,r.kt)("h4",{id:"application-permissions"},"Application Permissions"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"true")," \u2014 Anyone has permission to execute it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"false")," \u2014 No one will able to execute the application command (can be changed with application permission functions)"))),(0,r.kt)("h4",{id:"application-types"},"Application Types"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message")," \u2014 Creates the application command can be executed on the message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"slash")," \u2014 Creates an application command for slash message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," \u2014 Creates an application command that can be executed on the user."))),(0,r.kt)("h4",{id:"slash-options"},"Slash Options"),(0,r.kt)("p",null,"There are 3 types of creating a slash options:"),(0,r.kt)("p",null,"  Firstly"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"name:description:require:type\n//choices, subcommand & sub groups don't work on this.\n")),(0,r.kt)("p",null,"  Secondly"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// {subCommand:name:description:\n{type:name:description:require}\n// :{choice:name:value}\n")),(0,r.kt)("p",null,"  And the last one"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "name",\n  "description": "description",\n  "required": boolean,\n  "type": "STRING" // or a number of type\n}\n')),(0,r.kt)("h6",{id:"footnotes"},"Footnotes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You don't need to use application description on apps since it won't show up."),(0,r.kt)("li",{parentName:"ul"},"Slash command is name or option, ",(0,r.kt)("strong",{parentName:"li"},"cannot")," contain uppercase. But apps interaction commands can have."),(0,r.kt)("li",{parentName:"ul"},"You can create up to 25 choices. For more information you can check Discord Documentary."),(0,r.kt)("li",{parentName:"ul"},"All application types can be called with ",(0,r.kt)("inlineCode",{parentName:"li"},"slash")," prototype.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Message Application")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "create-message-apps",\n  code: `\n  Created the message application successfully.\n\n  $createApplicationCommand[$guildID;Warn;;true;message]\n  `\n});\n\n// $interactionData[targetId] gets the target\'s id. Which is a message ID.\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User Application")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "create-user-apps",\n  code: `\n  Created the user application successfully.\n\n  $createApplicationCommand[$guildID;Ban;;admin;user]\n  `\n});\n\n// $interactionData[targetId] gets the target\'s id. Which is an user ID.\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Special Slash Command from contributor \u2764")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "create-slash-cmd",\n  code: `\n  Created the sub-slash command successfully.\n  \n  $createApplicationCommand[$guildID;ban;.;true;slash;[\n    {\n      "name": "mention", \n      "description": "Find user and ban them on the current server.", \n      "type": "SUB_COMMANDS", \n      "options": [\n        { \n          "name": "user", \n          "description": "Mention an user.", \n          "required": true, \n          "type": "USER"\n        },\n        {\n          "name": "reason", \n          "description": "Explain it with a few words.", \n          "required": false, \n          "type": "STRING"\n        }\n      ]\n    }, \n    {\n      "name": "id", \n      "description": "Type an user ID to ban them on the current server.", \n      "type": "SUB_COMMANDS", \n      "options": [\n        {\n          "name": "user", \n          "description": "Type the user ID.", \n          "required": true, \n          "type": "STRING"\n        }, \n        {\n          "name": "reason", \n          "description": "Explain it with a few words.", \n          "required": false, \n          "type": "STRING"\n        }\n      ] \n    }\n  ]]\n  `\n});\n')))}d.isMDXComponent=!0}}]);