"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[46103],{44057:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(30143);const i=()=>n.createElement(r.ZP,{acceptOnScroll:!0,acceptOnScrollPercentage:150,buttonStyle:{backgroundColor:"var(--ifm-color-primary)",color:"#fff",padding:"10px 20px",border:"none",borderRadius:"6px",cursor:"pointer"}},"This website uses cookies to enhance the user experience.")},45706:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(99861),i=a(92949);function s(){const{colorMode:e}=(0,i.I)();return n.createElement(r.Z,{repo:"aoijs/website",repoId:"MDEwOlJlcG9zaXRvcnkzNjM3OTEyMzY=",category:"General",categoryId:"DIC_kwDOFa8DhM4CXVEw",mapping:"pathname",term:"aoi.js comment section",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",crossorigin:"anonymous",async:!0})}},31830:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010),i=a(39960);const s={tag:"tag_U0uN",booster:"booster_MDO7",staff:"staff_nctV",mod:"mod_BJV7",creator:"creator_hdXK",contributor:"contributor_Fooe"};function l(e){return e.href?n.createElement(i.Z,e):n.createElement(n.Fragment,null,e.children)}function o(e){let{author:t,className:a}=e;const{name:i,title:o,url:c,imageURL:m,email:d}=t,u=c||d&&`mailto:${d}`||void 0,p=i.toLowerCase(),g=["@leref"].map((e=>e.toLowerCase())).includes(p),b=["@dodogames","@supremesupreme","@faf4a","@usersatoshi"].map((e=>e.toLowerCase())).includes(p),h=["@dodogames","@supremesupreme","@faf4a","@usersatoshi","@ahoemi","@snowytealatte","@wansie","@jollyjolli","@manu_1025"].map((e=>e.toLowerCase())).includes(p),v=["@faf4a","@dodogames"].map((e=>e.toLowerCase())).includes(p),f=["@.kuray.","@Alien Abd","@Zeke \u2661","@artemcurious","@creitingameplays","@eduard.irm","@kzzzakz","@leref","@neussdev","@valentineu0","@wansie"].map((e=>e.toLowerCase())).includes(p);return n.createElement("div",{className:(0,r.Z)("avatar margin-bottom--sm",a)},m&&n.createElement(l,{href:u,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:m,alt:i})),i&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(l,{href:u,itemProp:"url"},n.createElement("span",{itemProp:"name"},i)),v&&n.createElement("span",{className:(0,r.Z)(s.tag,s.contributor)},"Contributor"),f&&n.createElement("span",{className:(0,r.Z)(s.tag,s.booster)},"Server Booster"),h&&n.createElement("span",{className:(0,r.Z)(s.tag,s.staff)},"Staff"),b&&n.createElement("span",{className:(0,r.Z)(s.tag,s.mod)},"Moderator"),g&&n.createElement("span",{className:(0,r.Z)(s.tag,s.creator)},"Creator")),o&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}},73591:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(86010),i=a(95999),s=a(88824),l=a(9460);const o={container:"container_iJTo"};function c(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,s.c)();return t=>{const a=Math.ceil(t);return e(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function m(){return n.createElement(n.Fragment,null," \xb7 ")}function d(e){let{className:t}=e;const{metadata:a}=(0,l.C)(),{date:i,formattedDate:s,readingTime:d}=a;return n.createElement("div",{className:(0,r.Z)(o.container,"margin-vert--md",t)},void 0!==d&&n.createElement(n.Fragment,null,n.createElement(m,null),n.createElement(c,{readingTime:d})))}},857:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(9460),i=a(57768),s=a(45706),l=a(72389);function o(e){const{metadata:t,isBlogPostPage:a}=(0,r.C)(),{frontMatter:o,slug:c,title:m}=((0,l.Z)(),t),{enableComments:d}=o;return n.createElement(n.Fragment,null,n.createElement(i.Z,e),d&&a&&n.createElement(s.Z,null))}},97618:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(44057);function i(e){return n.createElement("div",null,n.createElement(r.Z,null))}},9322:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),r=a(87524),i=a(86010),s=a(39960),l=a(95999);const o={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm",newItem:"newItem_b9o7",newTag:"newTag_fGI0",activeButton:"activeButton_HxF9",searchContainer:"searchContainer_GE6j",searchInput:"searchInput_nz1m",mobileSearchContainer:"mobileSearchContainer_i5LO",mobileSearchInput:"mobileSearchInput_ULu5"};function c(e){let{sidebar:t}=e;const a=["/wikis/submit","/wikis/guidelines","/wikis/tags"],[r,c]=(0,n.useState)(!1),[m,d]=(0,n.useState)(""),u=t.items.filter((e=>!a.includes(e.permalink))).filter((e=>e.title.toLowerCase().includes(m.toLowerCase()))).sort(((e,t)=>r?e.title.localeCompare(t.title):t.date-e.date));return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,i.Z)(o.sidebar,"thin-scrollbar"),"aria-label":(0,l.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,i.Z)(o.sidebarItemTitle,"margin-bottom--md")},n.createElement("span",null,"Introduction")),n.createElement("ul",{className:(0,i.Z)(o.sidebarItemList,"clean-list")},n.createElement("li",{key:"/wikis/guidelines",className:o.sidebarItem},n.createElement(s.Z,{isNavLink:!0,to:"/wikis/guidelines",className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive},"Wiki Guidelines")),n.createElement("li",{key:"/wikis/submit",className:o.sidebarItem},n.createElement(s.Z,{isNavLink:!0,to:"/wikis/submit",className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive},"Submit Wiki")),n.createElement("li",{key:"/wikis/tags",className:o.sidebarItem},n.createElement(s.Z,{isNavLink:!0,to:"/wikis/tags",className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive},"Tags"))),n.createElement("div",{className:(0,i.Z)(o.sidebarItemTitle,"margin-bottom--md")},"Wikis",n.createElement("button",{className:(0,i.Z)(o.activeButton,{[o.activeButton]:r}),onClick:()=>{c((e=>!e))}},r?"A-Z":"Newest First")),n.createElement("div",{className:o.searchContainer},n.createElement("input",{type:"text",className:o.searchInput,placeholder:"Search Wikis...",value:m,onChange:e=>{d(e.target.value)}})),n.createElement("ul",{className:(0,i.Z)(o.sidebarItemList,"clean-list")},u.map(((e,t)=>{return n.createElement("li",{key:e.permalink,className:o.sidebarItem},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive},(a=e.title).charAt(0).toUpperCase()+a.slice(1),t<3&&!r&&!m&&n.createElement("span",{className:o.newTag},"NEW")));var a})))))}var m=a(13102);function d(e){let{sidebar:t,onSearch:a}=e;const r=["/wikis/submit","/wikis/guidelines","/wikis/tags"],i=t?.items.filter((e=>!r.includes(e.permalink))).sort(((e,t)=>e.title.localeCompare(t.title)));return n.createElement("ul",{className:"menu__list"},n.createElement("div",{className:"menu__title"},"Introduction"),n.createElement("li",{key:"/wikis/guidelines",className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:"/wikis/guidelines",className:"menu__link",activeClassName:"menu__link--active"},"Wiki Guidelines")),n.createElement("li",{key:"/wikis/submit",className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:"/wikis/submit",className:"menu__link",activeClassName:"menu__link--active"},"Submit Wiki")),n.createElement("li",{key:"/wikis/tags",className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:"/wikis/tags",className:"menu__link",activeClassName:"menu__link--active"},"Tags")),n.createElement("div",{className:"menu__title",style:{marginTop:"25px",marginBottom:"15px"}},"Wikis"),i.map((e=>{return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},(t=e.title).charAt(0).toUpperCase()+t.slice(1)));var t})))}function u(e){let{sidebar:t}=e;const a=["/wikis/submit","/wikis/guidelines","/wikis/tags"],r=t?.items.filter((e=>!a.includes(e.permalink))).sort(((e,t)=>e.title.localeCompare(t.title)));return n.createElement(m.Zo,{component:d,props:{sidebar:{...t,items:r.map((e=>{return{...e,title:(t=e.title,t.charAt(0).toUpperCase()+t.slice(1))};var t}))}}})}function p(e){let{sidebar:t}=e;const a=(0,r.i)();return t?.items.length?"mobile"===a?n.createElement(u,{sidebar:t}):n.createElement(c,{sidebar:t}):null}},14695:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(67294),r=a(8121);const i=e=>{let{children:t,color:a,radius:r,padding:i}=e;return n.createElement("span",{style:{backgroundColor:a,borderRadius:r||"2px",color:"#fff",padding:i||"0.2rem"}},t)};var s=a(74866),l=a(85162),o=a(44057),c=a(45706),m=a(17891),d=a(86010),u=a(25365);const p=e=>{let{name:t,id:a,value:r,onChange:i,type:s,error:l,charCount:o}=e;const c={width:"100%",padding:"8px",borderRadius:"4px",backgroundColor:"rgba(0, 0, 0, 0.1)",border:"1px solid "+(l?"red":"#3f51b5"),transition:"background-color 0.3s, color 0.3s",fontFamily:"var(--ifm-font-family-base)",fontSize:"14px",fontColor:"white",position:"relative",outline:"none",boxShadow:"2px 3px 3px rgba(0, 0, 0, 0.1)"},m=e=>{i(e)};let d=null;switch(s){case"textarea-description":d=n.createElement("div",null,n.createElement("textarea",{name:t,id:a,value:r,onChange:m,style:{...c,minHeight:"155px",resize:"none"},required:!0}),n.createElement("div",{style:{fontSize:"12px",color:o>=500?"red":"#3f51b5"}},void 0===o?"0":o,"/",500));break;case"textarea-code":d=n.createElement("textarea",{name:t,id:a,value:r,onChange:m,style:{...c,minHeight:"155px",resize:"none"},required:!0});break;case"number":const e=e=>{const{value:a}=e.target,n=a.replace(/[^0-9]/g,"");n.length>20||i({target:{name:t,value:n}})};d=n.createElement("div",{style:{position:"relative"}},n.createElement("input",{type:"text",name:t,id:a,value:r,onChange:e,style:c,inputMode:"numeric",pattern:"[0-9]*",required:!0}));break;case"small":d=n.createElement("input",{type:"text",name:t,id:a,value:r,onChange:m,style:{...c,width:"50%",fontSize:"12px"},required:!0});break;default:d=n.createElement("div",null,n.createElement("input",{type:"text",name:t,id:a,value:r,onChange:m,style:{...c,resize:"none"},required:!0}),n.createElement("div",{style:{fontSize:"12px",color:o>=50?"red":"#3f51b5",marginTop:"5px"}},void 0===o?"0":o,"/",50))}return n.createElement("div",null,d)};var g=a(99578),b=a(39960),h=a(31830);const v=()=>{const[e,t]=(0,n.useState)(0),[a,r]=(0,n.useState)(0),[i,s]=(0,n.useState)({title:"",discordUID:"",description:"",code:"",tags:[],isUIDValid:!0}),[l,o]=(0,n.useState)({title:!1,discordUID:!1,description:!1,code:!1,tags:!1}),{title:c,description:m,discordUID:v,code:f,tags:k,isUIDValid:E}=i,[y,w]=(0,n.useState)({avatar:`https://cdn.discordapp.com/embed/avatars/${Math.floor(5*Math.random())}.png`,username:"Guest User",id:""}),_=async e=>{const{name:a,value:n}=e.target;let r=n;if("title"===a)r=n.replace(/[^a-zA-Z0-9 ]/g,""),t((e=>({...e,title:n.length}))),r.length>49&&(r=r.substring(0,50));else if("description"===a)t((e=>({...e,description:n.length}))),n.length>=500&&(r=n.substring(0,499));else if("discordUID"===a&&(s((e=>({...e,isUIDValid:!0}))),n.length>=17)){const{avatar:e,username:t,bot:a,id:r}=await x(n);void 0!==a&&s((e=>({...e,isUIDValid:!1}))),w((a=>({...a,avatar:e,username:t,id:"- "+r})))}s((e=>({...e,[a]:r})))},x=async e=>{const t=Math.floor(5*Math.random());try{const a=await fetch(`https://someapi.frenchwomen.repl.co/uinfo/${e}`),n=await a.json();return n&&n.avatar?{bot:n.bot,avatar:n.avatar,username:n.username,id:n.id}:{bot:void 0,avatar:`https://cdn.discordapp.com/embed/avatars/${t}.png`,username:"Guest User",id:"Invalid User"}}catch(a){return{bot:void 0,avatar:`https://cdn.discordapp.com/embed/avatars/${t}.png`,username:"Guest User",id:"Invalid User"}}},C=async e=>{e.preventDefault();const t=Date.now();if(t-a<15e3)return void alert("Don't spam the submit button!");r(t);const n={title:!1,discordUID:!1,description:!1,code:!1};["title","discordUID","description","code"].forEach((e=>{""===i[e].trim()&&(n[e]=!0)})),0===i.tags.length&&(n.tags=!0);const{avatar:s,username:l,bot:d}=await x(v);if("Guest User"===l&&(n.discordUID=!0),void 0!==d&&(n.discordUID=!0),o(n),Object.values(n).some((e=>!0===e)))return;const u=Math.random().toString(36).substring(7),p=`${v}/${u}.md`,g=`---\ntitle: "${c}"\ndescription: "${m}"\nauthors:\n  name: "@${l}"\n  title: Member - ${v}\n  userid: "${v}"\n  url: https://discord.com/users/${v}\n  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/${v}.png\ntags: ${JSON.stringify(k)}\nhide_table_of_contents: true\nenableComments: true\npagination_prev: null\npagination_next: null\n---\n\n${f}`;try{const h=await fetch(atob("aHR0cHM6Ly9zb21lYXBpLmZyZW5jaHdvbWVuLnJlcGwuY28vZ2l0aHVi"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({commitMessage:`Create new file -- ${v}`,content:g,fileName:p})});async function E(e){try{(await fetch(`https://someapi.frenchwomen.repl.co/avatars/${e}`)).ok||await alert("Something went wrong while handling your request.")}catch(t){return void await alert("Something went wrong while handling your request. (avatar)")}}if(E(v),!h.ok)return void await alert("Something went wrong while handling your request.");await alert("Successfully submitted your wiki for review, check back later!"),window.location.reload()}catch(b){return}};return n.createElement("form",{onSubmit:C},n.createElement("br",null),n.createElement("br",null),n.createElement("h3",null,"Title of Wiki",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(A short and fitting title for your Wiki)")),n.createElement(p,{name:"title",id:"title",value:c,onChange:_,type:"text",placeholder:"Title",required:!0,pattern:"[a-zA-Z0-9]*",error:l.title,charCount:void 0===e.title?"0":e.title}),n.createElement("br",null),n.createElement("h3",null,"Description",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(A short description about the purpose of your Wiki, will NOT be displayed to the user on the website)")),n.createElement(p,{name:"description",id:"description",value:m,onChange:_,type:"textarea-description",placeholder:"Description",required:!0,error:l.description,charCount:void 0===e.description?"0":e.description}),n.createElement("br",null),n.createElement("h3",null,"Discord User ID",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(Your Discord User ID, so you get the full credit of YOUR work)")),n.createElement(p,{name:"discordUID",id:"discordUID",value:v,onChange:_,type:"number",placeholder:"Discord UID",required:!0,error:!E||l.discordUID}),!E&&n.createElement("p",{style:{color:"red"}},"Invalid user"),n.createElement("br",null),n.createElement("h3",null,"Content of Wiki",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(The content of your Wiki, including how it works, what it does and more)")),n.createElement(p,{name:"code",id:"code",value:f,onChange:_,type:"textarea-code",placeholder:"Code",required:!0,error:l.code}),n.createElement("h5",{style:{marginBottom:"0.5rem"}},n.createElement("span",{style:{verticalAlign:"middle"}},"Preview",n.createElement("small",{style:{fontSize:"8px",color:"gray",verticalAlign:"middle"}}," ","(How your Wiki will look on the website)"))),n.createElement("div",{style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #3f51b5",backgroundColor:"rgba(0, 0, 0, 0.1)",transition:"background-color 0.3s, color 0.3s",fontFamily:"var(--ifm-font-family-base)",fontSize:"14px",fontColor:"white",position:"relative",outline:"none",boxShadow:"2px 3px 3px rgba(0, 0, 0, 0.1)"}},n.createElement("div",{style:{overflow:"hidden"}},n.createElement("div",{style:{background:"transparent",borderRadius:"4px",padding:"12px"}},n.createElement(h.Z,{author:{name:`@${y.username}`,title:`Member ${y.id}`,url:`https://discord.com/users/${v}`,imageURL:`${y.avatar}`}}),n.createElement("br",null),!f&&n.createElement("div",{className:g.Z.placeholderText},"Some text of your awesome Wiki!",n.createElement("br",null),n.createElement("br",null),"Did you know that you can use markdown to make your Wiki look even better? ",n.createElement("br",null)," ",n.createElement("br",null),n.createElement("div",{style:{fontSize:"18px",color:"gray",border:"1px solid #3f51b5",borderRadius:"3px",margin:"4px",padding:"10px"}},"![Alt Text](Image Link) for images! ",n.createElement("br",null),"## For Headers! ",n.createElement("br",null),"- For Lists! ",n.createElement("br",null))),n.createElement(u.D,null,f)))),n.createElement("br",null),n.createElement("h3",null,"Tags",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(Select Tags that fit your Wiki)")),n.createElement("div",{className:g.Z.tagContainer},["aoi.music","aoi.js","aoi.panel","aoi.dashboard","v6","v7","Other"].map((e=>n.createElement("span",{key:e,className:(0,d.Z)(g.Z.tag,{[g.Z.active]:k.includes(e)}),onClick:()=>(e=>{const t=[...k];t.includes(e)?t.splice(t.indexOf(e),1):t.push(e),s((e=>({...e,tags:t})))})(e)},e)))),l.tags&&n.createElement("p",{style:{color:"red",marginTop:"10px",fontFamily:"var(--ifm-font-family-base)"}},"At least one tag is required"),n.createElement("div",{className:g.Z.buttons,style:{width:"100%",display:"flex",justifyContent:"flex-end",marginTop:"15px"}},n.createElement(b.Z,{className:(0,d.Z)("button button--outline button--secondary"),onClick:C,style:{width:"100%"}},"Submit")))},f=e=>{let{children:t}=e;const[a,r]=(0,n.useState)(!1),i={display:"inline-block",padding:"0px 3px",fontWeight:"500",marginTop:"-5px",backgroundColor:a?"#4d5291":"#3b406e",cursor:a?"pointer":"default",color:"#c9cdfb",borderRadius:"3px",transition:"background-color 0.15s ease"};return n.createElement("div",{style:i,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1)},t)},k={...r.Z,Highlight:i,GiscusComponent:c.Z,InputField:p,SubmitForm:v,Cookies:o.Z,Tabs:s.Z,Slash:f,Tooltip:m.u,TabItem:l.Z}},99578:(e,t,a)=>{a.d(t,{Z:()=>n});const n={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i",tagContainer:"tagContainer_k__v",tag:"tag_jTZG","color-transition":"color-transition_yOxN",placeholderText:"placeholderText_M9S7",active:"active_Iznl",fadeIn:"fadeIn__KIT",creditContainer:"creditContainer_Kilv",creditItem:"creditItem_GDO6",header:"header_A16n",avatar:"avatar_dBEG",details:"details_kkgo",name:"name_ZL2v",title:"title_VwV3",packageStats:"packageStats_z9Yh",packageStatsBox:"packageStatsBox_t9e4","fade-in":"fade-in_LOUq",packageStatsTitle:"packageStatsTitle_D_OO",statsContainer:"statsContainer_VzT5","slide-in":"slide-in_KFry",stat:"stat_ezPZ",animatedTitle:"animatedTitle_WRAR",animatedText:"animatedText_jRHx",roundedButtons:"roundedButtons_ik7t",roundedButton:"roundedButton_mWzP",githubButton:"githubButton_Bgng"}}}]);