"use strict";(self.webpackChunkreact_homework_05_images=self.webpackChunkreact_homework_05_images||[]).push([[75],{111:function(t,e,n){var r=n(439),s=n(791),i=n(87),u=n(693),c=n(184);e.Z=function(){var t=(0,s.useState)([]),e=(0,r.Z)(t,2),n=e[0],a=e[1],o=(0,s.useState)(""),l=(0,r.Z)(o,2),f=l[0],h=l[1];return(0,s.useEffect)((function(){f?(0,u.z1)(f).then((function(t){return a(t.data.results)})):(0,u.Df)().then((function(t){return a(t.data.results)}))}),[f]),(0,c.jsxs)("div",{children:[(0,c.jsxs)("form",{children:[(0,c.jsxs)("label",{children:["Search movies:",(0,c.jsx)("input",{type:"text",value:f,onChange:function(t){h(t.target.value)}})]}),(0,c.jsx)("button",{type:"button",onClick:function(){return h("")},children:"Clear"})]}),n.length>0?(0,c.jsx)("ul",{children:n.map((function(t){return(0,c.jsx)("li",{children:(0,c.jsxs)(i.rU,{to:"/movies/".concat(t.id),children:[t.poster_path&&(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w154".concat(t.poster_path),alt:t.title}),(0,c.jsx)("h3",{children:t.title})]})},t.id)}))}):(0,c.jsx)("p",{children:"No movies found"})]})}},75:function(t,e,n){n.r(e);var r=n(861),s=n(439),i=n(757),u=n.n(i),c=n(791),a=n(111),o=n(693),l=n(184);e.default=function(){var t=(0,c.useState)([]),e=(0,s.Z)(t,2),n=e[0],i=e[1],f=(0,c.useState)(null),h=(0,s.Z)(f,2),d=h[0],v=h[1];return(0,c.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Df)();case 3:e=t.sent,i(e.data.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),v(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Trending today"}),d?(0,l.jsxs)("p",{children:["Something went wrong: ",d.message]}):(0,l.jsx)(a.Z,{movies:n})]})}},861:function(t,e,n){function r(t,e,n,r,s,i,u){try{var c=t[i](u),a=c.value}catch(o){return void n(o)}c.done?e(a):Promise.resolve(a).then(r,s)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(s,i){var u=t.apply(e,n);function c(t){r(u,s,i,c,a,"next",t)}function a(t){r(u,s,i,c,a,"throw",t)}c(void 0)}))}}n.d(e,{Z:function(){return s}})}}]);
//# sourceMappingURL=75.9c1fa68f.chunk.js.map