(self.webpackChunksyloper_front=self.webpackChunksyloper_front||[]).push([[529],{57988:function(e,t,n){var r=n(9859),a=n(82359),l=n(59821),o=r.TypeError;e.exports=function(e){if(a(e))return e;throw o(l(e)+" is not a constructor")}},81589:function(e,t,n){var r=n(9859),a=n(71601),l=n(26733),o=n(27079),i=n(70095)("toStringTag"),u=r.Object,c="Arguments"==o(function(){return arguments}());e.exports=a?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=u(e),i))?n:c?o(t):"Object"==(r=o(t))&&l(t.callee)?"Arguments":r}},82359:function(e,t,n){var r=n(65968),a=n(24229),l=n(26733),o=n(81589),i=n(31333),u=n(8511),c=function(){},s=[],m=i("Reflect","construct"),f=/^\s*(?:class|function)\b/,d=r(f.exec),p=!f.exec(c),h=function(e){if(!l(e))return!1;try{return m(c,s,e),!0}catch(t){return!1}},E=function(e){if(!l(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!d(f,u(e))}catch(t){return!0}};E.sham=!0,e.exports=!m||a((function(){var e;return h(h.call)||!h(Object)||!h((function(){e=!0}))||e}))?E:h},16485:function(e,t,n){"use strict";var r=n(77111),a=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new a(e)}},74473:function(e,t,n){var r=n(9859);e.exports=r.Promise},62391:function(e,t,n){var r=n(21176),a=n(85052),l=n(16485);e.exports=function(e,t){if(r(e),a(t)&&t.constructor===e)return t;var n=l.f(e);return(0,n.resolve)(t),n.promise}},37942:function(e,t,n){var r=n(21176),a=n(57988),l=n(70095)("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||null==(n=r(o)[l])?t:a(n)}},71601:function(e,t,n){var r={};r[n(70095)("toStringTag")]="z",e.exports="[object z]"===String(r)},21515:function(e,t,n){"use strict";var r=n(23103),a=n(24231),l=n(74473),o=n(24229),i=n(31333),u=n(26733),c=n(37942),s=n(62391),m=n(14768),f=l&&l.prototype;if(r({target:"Promise",proto:!0,real:!0,forced:!!l&&o((function(){f.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=c(this,i("Promise")),n=u(e);return this.then(n?function(n){return s(t,e()).then((function(){return n}))}:e,n?function(n){return s(t,e()).then((function(){throw n}))}:e)}}),!a&&u(l)){var d=i("Promise").prototype.finally;f.finally!==d&&m(f,"finally",d,{unsafe:!0})}},21208:function(e,t,n){"use strict";n.d(t,{N:function(){return r}});var r=n(36875).default.div.withConfig({displayName:"styles__SectionTitle",componentId:"sc-5uavjb-0"})(["width:100%;display:flex;align-items:center;margin-bottom:12px;&.task-title{justify-content:space-between;h5{display:inline-block;}button{width:200px;font-size:1.17rem;}}@media only screen and (max-width:768px){justify-content:center;}i{margin-right:5px;}h5{font-size:1.2rem;font-weight:600;}"])},96608:function(e,t,n){"use strict";var r=n(36875).default.table.withConfig({displayName:"styles__TableBody",componentId:"sc-1iqh43b-0"})(["width:100%;background-color:#fff;text-align:center;border-radius:15px;margin-top:20px;overflow-x:scroll;tr{text-align:center;border-bottom:1px solid;border-color:",";&:last-child{border:none;}}th{font-size:1.2rem;font-weight:500;padding:21px 10px;@media only screen and (max-width:1000px){font-size:1.05rem;}}td{text-align:center;width:200px;padding:18px 8px;font-size:1.02rem;img{height:48px;border-radius:24px;}@media only screen and (max-width:1000px){font-size:1rem;}}"],(function(e){return e.theme.color.border}));t.Z=r},11253:function(e,t,n){"use strict";var r=n(75054),a=n.n(r),l=n(2784),o=n(68802),i=n(80364),u=n(25291),c=n(27119);t.Z=function(e){var t=e.title,n=e.message,r=e.entries,s=(0,l.useContext)(c.Z),m=s.setModalMessageIsOpen,f=s.modalMessageIsOpen,d=function(){m(!1)};return l.createElement(l.Fragment,null,l.createElement(u.RR,{className:a()({show:f})},l.createElement("i",{onClick:d},l.createElement(o.Lp2,{color:"#000",size:"35px"})),l.createElement("h3",null,t),l.createElement(u.Yr,null,l.createElement("p",null,n),r?l.createElement(l.Fragment,null,l.createElement("p",null," Before remove it, you have to unassign them from"),r.map((function(e){return l.createElement("ol",null,l.createElement("li",null,e))}))):null,l.createElement(i.Z,{type:"button",onClick:d},"Close"))),l.createElement(u.An,{className:a()({show:f})}))}},66895:function(e,t,n){"use strict";n.d(t,{Px:function(){return l},jN:function(){return a}});var r=n(36875),a=r.default.span.withConfig({displayName:"styles__AssignImg",componentId:"sc-17g2g8d-0"})(["width:45px;height:45px;alt:","};"," background-size:cover;border:1px solid #fff;border-radius:50%;display:block;"],(function(e){return e.alt}),(function(e){var t=e.src;return t?"background-image: url("+t+");":"background-color: gray;"})),l=r.default.div.withConfig({displayName:"styles__AvatarStyled",componentId:"sc-17g2g8d-1"})(["width:45px;height:45px;display:inline-block;transform:",";background-color:gray;border:1px solid #fff;border-radius:50%;"],(function(e){return"translateX("+e.translatex+"px)"}));r.default.span.withConfig({displayName:"styles__DisplayName",componentId:"sc-17g2g8d-2"})(["width:100%;font-weight:300;font-size:1.08rem;line-height:1.35;"]),r.default.div.withConfig({displayName:"styles__AvatarGroup",componentId:"sc-17g2g8d-3"})(["display:flex;align-items:center;flex-direction:column;justify-content:center;"])},47697:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=n(2784),a=n(55726),l=n(36875),o=l.default.article.withConfig({displayName:"style__ResponsiblesMain",componentId:"sc-nearvw-0"})(["width:100%;height:calc(100% - 100px);overflow-x:hidden;"]),i=n(38777),u=n(68802),c=n(28255),s=n(19362),m=n(96608),f=n(21208),d=n(80364),p=n(47839),h=n(27119),E=(n(21515),n(75054)),g=n.n(E),v=n(87647),y=n(25291),b=function(e){var t=e.title,n=e.modalOnSubmit,a=(0,r.useContext)(h.Z),l=a.setModalPeopleIsOpen,o=a.modalPeopleIsOpen,i=(0,r.useState)(!1),c=i[0],s=i[1],m=(0,r.useState)(""),f=(m[0],m[1]),E=(0,r.useState)({name:"",email:"",password:"",avatar:""}),b=E[0],x=E[1];function w(){f("")}var C=b.avatar.length>0;return r.createElement(r.Fragment,null,r.createElement(y.F0,{className:g()({show:o})},r.createElement("i",{onClick:function(){l(!1)}},r.createElement(u.Lp2,{color:"#000",size:"35px"})),r.createElement("h3",null,t),c?"Sending data":r.createElement(y.Yr,null,r.createElement("div",null,r.createElement("label",null,t+" Name"),r.createElement(v.l_,{value:b.name,onChange:function(e){return function(e){var t={name:e.target.value};x(Object.assign({},b,t)),w()}(e)},placeholder:"Enter "+t+" Name"})),r.createElement("div",null,r.createElement("label",null,"Email"),r.createElement(v.l_,{value:b.email,onChange:function(e){return function(e){var t={email:e.target.value};x(Object.assign({},b,t)),w()}(e)},placeholder:"Enter Email"})),r.createElement("div",null,r.createElement("label",null,"Password"),r.createElement(v.l_,{type:"password",value:b.password,onChange:function(e){return function(e){var t={password:e.target.value};x(Object.assign({},b,t)),w()}(e)},placeholder:"Enter Password"})),r.createElement("div",null,r.createElement("label",null,"Avatar"),r.createElement(v.KU,{htmlFor:"avatar"},r.createElement("div",null,C?"Done!":"Click here to upload an avatar"),r.createElement("input",{id:"avatar",type:"file",onChange:function(e){return function(e){var t=e.target.files[0];return w(),new Promise((function(e,n){try{var r=new FileReader;r.readAsDataURL(t),r.onload=function(){var t=r.result;x(Object.assign({},b,{avatar:t})),e()}}catch(a){n(a)}}))}(e)}}))),r.createElement(d.Z,{type:"button",onClick:function(e){e.preventDefault(),s(!0),p.Z.createUser(b).then((function(){l(!1),n(b),window.location.reload()})).catch((function(e){f(e.message)})).finally((function(){s(!1)}))}},"Create Person"))),r.createElement(y.An,{className:g()({show:o})}))},x=n(66895),w=function(){var e=(0,l.useTheme)(),t=(0,r.useState)([]),n=t[0],a=t[1],o=(0,r.useContext)(h.Z).setModalPeopleIsOpen,E=(0,r.useContext)(h.Z).setModalAvatarIsOpen;(0,r.useEffect)((function(){p.Z.getUsers().then((function(e){a(e)}))}),[]);var g=function(e,t){var r=Object.assign({},n.find((function(t){return t.id===e})),t);p.Z.updateUser(e,r)},v=function(e){var t=e.name,n=e.value;n!==e.previousValue&&g(t,{email:n})},y=function(e){var t=e.name,n=e.value;n!==e.previousValue&&g(t,{name:n})};return r.createElement(r.Fragment,null,r.createElement(f.N,{className:"task-title"},r.createElement("div",null,r.createElement("i",null,r.createElement(u.Jwp,null)),r.createElement("h5",null,"People")),r.createElement(d.Z,{onClick:function(){return o(!0)}},"Add People")),r.createElement(m.Z,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Avatar"),r.createElement("th",null,"Name"),r.createElement("th",null,"Email"),r.createElement("th",null))),r.createElement("tbody",null,n.map((function(t){return r.createElement("tr",{key:t.email},r.createElement("td",{style:{textAlign:"center",width:"200px"}},r.createElement(x.jN,{src:t.avatar,onClick:E(!0),style:{cursor:"pointer"}})),r.createElement("td",{style:{textAlign:"center",width:"200px"}},r.createElement(s.y,{name:t.id,onChange:a,onSave:y,defaultValue:t.name,style:{textAlign:"center",width:"100%",fontWeight:500,fontSize:"1.08rem",lineHeight:1.35,fontFamily:e.font.family}})),r.createElement("td",{style:{textAlign:"center",width:"200px"}},r.createElement(s.y,{name:t.id,onChange:a,onSave:v,defaultValue:t.email,style:{textAlign:"center",width:"100%",fontWeight:500,fontSize:"1.08rem",lineHeight:1.35,fontFamily:e.font.family}})),r.createElement("td",null,r.createElement(c.AMf,{size:25,onClick:function(){return e=t.id,void p.Z.deleteUser(e).then(a(n.filter((function(t){return t.id!==e}))));var e},style:{cursor:"pointer"}})))})))),r.createElement(b,{title:"New Person",modalOnSubmit:function(e){var t=[];t.push.apply(t,(0,i.Z)(n).concat([e])),a(t),o(!1)}}))},C=n(85647),Z=function(e){var t=e.title,n=e.modalOnSubmit,a=(0,r.useContext)(h.Z),l=a.setModalRoleIsOpen,o=a.modalRoleIsOpen,i=(0,r.useState)(!1),c=i[0],s=i[1],m=(0,r.useState)(""),f=(m[0],m[1]),p=(0,r.useState)({name:"",hourlyCost:0}),E=p[0],b=p[1];function x(){f("")}return r.createElement(r.Fragment,null,r.createElement(y.F0,{className:g()({show:o})},r.createElement("i",{onClick:function(){l(!1)}},r.createElement(u.Lp2,{color:"#000",size:"35px"})),r.createElement("h3",null,t),c?"Sending data":r.createElement(y.Yr,null,r.createElement("div",null,r.createElement("label",null,t+" Name"),r.createElement(v.l_,{value:E.name,onChange:function(e){return function(e){var t={name:e.target.value};b(Object.assign({},E,t)),x()}(e)},placeholder:"Enter "+t+" Name"})),r.createElement("div",null,r.createElement("label",null,"Hourly Cost"),r.createElement(v.l_,{type:"number",value:E.hourlyCost,onChange:function(e){return function(e){var t={hourlyCost:e.target.value};b(Object.assign({},E,t)),x()}(e)},placeholder:"Enter hourly cost"})),r.createElement(d.Z,{type:"button",onClick:function(e){e.preventDefault(),s(!0),C.Z.createResponsibleTypes({hourly_cost:E.hourlyCost,type:E.name}).then((function(){l(!1),n({hourly_cost:E.hourlyCost,type:E.name})})).catch((function(e){f(e.message)})).finally((function(){s(!1)}))}},"Create role"))),r.createElement(y.An,{className:g()({show:o})}))},S=n(60172),N=n(11253),k=function(){var e=(0,r.useState)([]),t=e[0],n=e[1],a=(0,r.useContext)(h.Z).setModalRoleIsOpen,o=(0,r.useState)(""),p=o[0],E=o[1],g=(0,r.useContext)(h.Z).setModalMessageIsOpen,v=(0,r.useState)([]),y=v[0],b=v[1];(0,r.useEffect)((function(){C.Z.getResponsibles().then((function(e){n(e)}))}),[]);var x=function(e,n){var r=Object.assign({},t.find((function(t){return t.id===e})),n);C.Z.updateResponsibleTypes(e,r)},w=function(e){var t=e.name,n=e.value;n!==e.previousValue&&x(t,{type:n})},k=function(e){var t=e.name,n=e.value;n!==e.previousValue&&x(t,{hourly_cost:n})},O=(0,l.useTheme)();return r.createElement(r.Fragment,null,r.createElement(f.N,{className:"task-title"},r.createElement("div",null,r.createElement("i",null,r.createElement(u.Jwp,null)),r.createElement("h5",null,"Role & Cost")),r.createElement(d.Z,{onClick:function(){return a(!0)}},"Add Role")),r.createElement(m.Z,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Role"),r.createElement("th",null,"Hourly Cost"),r.createElement("th",null))),r.createElement("tbody",null,t.map((function(e){return r.createElement("tr",null,r.createElement("td",null,r.createElement(s.y,{name:e.id,onChange:n,onSave:w,defaultValue:e.type,style:{textAlign:"center",width:"100%",fontWeight:500,fontSize:"1.08rem",lineHeight:1.35,fontFamily:O.font.family}})),r.createElement("td",null,r.createElement(s.y,{name:e.id,onChange:n,onSave:k,defaultValue:(0,S.V)(e.hourly_cost),style:{textAlign:"center",width:"100%",fontWeight:500,fontSize:"1.08rem",lineHeight:1.35,fontFamily:O.font.family}})),r.createElement("td",null,r.createElement(c.AMf,{onClick:function(){return r=e.id,void C.Z.deleteResponsibleTypes(r).then((function(e){200===e.status?n(t.filter((function(e){return e.id!==r}))):423===e.status&&(g(!0),b(e.data.dependencies.entries.map((function(e){return e.title}))),E("Can't remove it. There are "+e.data.dependencies.bounded+" depending on it."))}));var r},size:25,style:{cursor:"pointer"}})))})))),r.createElement(Z,{title:"New Role",modalOnSubmit:function(e){var r=[];r.push.apply(r,(0,i.Z)(t).concat([e])),n(r),a(!1)}}),r.createElement(N.Z,{title:"Message",message:p,entries:y}))},O=function(){return r.createElement(a.Z,{title:"Responsibles "},r.createElement(o,null,r.createElement(w,null),r.createElement(k,null)))},A=function(){return r.createElement(O,null)}},85647:function(e,t,n){"use strict";var r=n(19388);t.Z={getResponsibles:function(){return(0,r.Z)("/api/responsible-profile").then((function(e){return e.data}))},updateResponsibleTypes:function(e,t){return(0,r.Z)("/api/responsible-profile/update/"+e,{method:"PUT",data:t}).then((function(e){return e.data}))},getResponsibleTypesById:function(e){return(0,r.Z)("/api/responsible-profile/detail/"+e).then((function(e){return e.data}))},createResponsibleTypes:function(e){return(0,r.Z)("/api/responsible-profile/create",{method:"POST",data:e}).then((function(e){return e.data}))},deleteResponsibleTypes:function(e){return(0,r.Z)("/api/responsible-profile/delete/"+e,{method:"DELETE"}).then((function(e){return e}))}}},47839:function(e,t,n){"use strict";var r=n(19388);t.Z={getUsers:function(){return(0,r.Z)("/api/users").then((function(e){return e.data}))},getUserById:function(e){return(0,r.Z)("/api/users/detail/"+e).then((function(e){return e.data}))},createUser:function(e){return(0,r.Z)("/api/users/create",{method:"POST",data:e}).then((function(e){return e.data}))},updateUser:function(e,t){return(0,r.Z)("/api/users/update/"+e,{data:t,method:"PUT"}).then((function(e){return e.data}))},deleteUser:function(e){return(0,r.Z)("/api/users/delete/"+e,{method:"DELETE"}).then((function(e){return e.data}))}}},60172:function(e,t,n){"use strict";function r(e){return Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)}function a(e){return new Intl.NumberFormat("en-US").format(e)}n.d(t,{V:function(){return a},o:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-responsibles-js-6f57782f8fdf22d578a3.js.map