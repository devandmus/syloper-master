/*! For license information please see component---src-pages-portfolios-js-c4acdaa7626c7a2ad402.js.LICENSE.txt */
(self.webpackChunksyloper_front=self.webpackChunksyloper_front||[]).push([[38],{75054:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=l.apply(null,n);a&&e.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},96608:function(e,t,n){"use strict";var r=n(36875).default.table.withConfig({displayName:"styles__TableBody",componentId:"sc-1iqh43b-0"})(["width:100%;background-color:#fff;text-align:center;border-radius:15px;margin-top:20px;overflow-x:scroll;tr{text-align:center;border-bottom:1px solid;border-color:",";&:last-child{border:none;}}th{font-size:1.2rem;font-weight:500;padding:21px 10px;@media only screen and (max-width:1000px){font-size:1.05rem;}}td{text-align:center;width:200px;padding:18px 8px;font-size:1.02rem;img{height:48px;border-radius:24px;}@media only screen and (max-width:1000px){font-size:1rem;}}"],(function(e){return e.theme.color.border}));t.Z=r},68463:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(2784),l=n(55726),o=n(50542),a=n(80850),i=n(59290),u=n(36875),c=u.default.section.withConfig({displayName:"styles__ChartContainer",componentId:"sc-17qnr8n-0"})(["width:100%;display:flex;justify-content:space-between;flex-flow:wrap;"]),d=u.default.div.withConfig({displayName:"styles__ChartModule",componentId:"sc-17qnr8n-1"})(["background-color:#fff;padding:25px;box-sizing:border-box;width:32%;border-radius:20px;margin-bottom:20px;@media only screen and (max-width:1250px){width:48%;}@media only screen and (max-width:1000px){width:700px;margin:0 auto 20px;}@media only screen and (max-width:768px){width:95%;}h2{width:100%;font-size:1.35rem;font-weight:500;margin-bottom:20px;@media only screen and (max-width:1000px){font-size:1.27rem;}}"]),s=function(){o.kL.register(o.uw,o.f$,o.od,o.jn,o.Dx,o.u,o.De,o.ZL);var e=["January","February","March","April"],t={labels:e,datasets:[{label:"Hours",data:e.map((function(){return i.ZP.datatype.number({min:0,max:1e3})})),borderColor:"#34AD66",backgroundColor:"#2a8750"}]},n={responsive:!0,plugins:{legend:{position:"bottom"}}};return r.createElement(c,null,r.createElement(d,null,r.createElement("h2",null,"Portfolio Balance"),r.createElement(a.x1,{options:n,data:t})),r.createElement(d,null,r.createElement("h2",null,"Worked Hours"),r.createElement(a.$Q,{options:n,data:t})),r.createElement(d,null,r.createElement("h2",null,"Estimated Hours"),r.createElement(a.x1,{options:n,data:t})))},m=u.default.article.withConfig({displayName:"styles__PortfoliosMain",componentId:"sc-bfk48p-0"})(["width:100%;height:calc(100% - 100px);overflow-x:hidden;"]),f=n(96608),p=n(73891),h=n(60172),x=n(19362),E=function(){var e=(0,r.useState)(),t=e[0],n=e[1];return(0,r.useEffect)((function(){p.Z.getPortfolio().then((function(e){return n(e)}))}),[]),r.createElement(f.Z,null,r.createElement("tr",null,r.createElement("th",null,"Project"),r.createElement("th",null,"Client"),r.createElement("th",null,"Price per Hour"),r.createElement("th",null,"Estimated Hours"),r.createElement("th",null,"Worked Hours"),r.createElement("th",null,"Estimated Incomes"),r.createElement("th",null,"Real Incomes")),null==t?void 0:t.map((function(e){return r.createElement("tr",null,r.createElement("td",null,e.project_title),r.createElement("td",null,e.client),r.createElement("td",null,e.price_per_hour),r.createElement("td",null,(0,h.V)(e.estimated_hours)),r.createElement("td",null,r.createElement(x.y,{type:"number"})),r.createElement("td",null,(0,h.o)(e.estimated_incomes)),r.createElement("td",null,(0,h.o)(e.real_incomes)))})))},b=function(){return r.createElement(l.Z,{title:"Portfolios"},r.createElement(m,null,r.createElement(s,null),r.createElement(E,null)))},y=function(){return r.createElement(b,null)}},60172:function(e,t,n){"use strict";function r(e){return Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)}function l(e){return new Intl.NumberFormat("en-US").format(e)}n.d(t,{V:function(){return l},o:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-portfolios-js-c4acdaa7626c7a2ad402.js.map