"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[541],{687:function(t,n,e){e.d(n,{Df:function(){return o},Hx:function(){return a},Y5:function(){return i},xc:function(){return u},z1:function(){return r}});var c="81fda9da55dee985dc0d013b7d430450";function i(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c)).then((function(t){return t.json()}))}function r(t){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(t)).then((function(t){return t.json()}))}function o(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c)).then((function(t){return t.json()}))}function u(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c)).then((function(t){return t.json()}))}function a(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c)).then((function(t){return t.json()}))}},541:function(t,n,e){e.r(n);var c=e(439),i=e(791),r=e(689),o=e(687),u=e(490),a=e(184);n.default=function(){var t=(0,r.UO)().movieId,n=(0,i.useState)(null),e=(0,c.Z)(n,2),h=e[0],f=e[1];return(0,i.useEffect)((function(){(0,o.xc)(t).then((function(t){f(t.cast)}))}),[t]),h?(0,a.jsx)("section",{children:(0,a.jsx)("ul",{children:h.map((function(t){return(0,a.jsxs)("li",{children:[(0,a.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w185".concat(t.profile_path):u,width:"185",height:"278",alt:t.name}),(0,a.jsx)("p",{children:t.name}),(0,a.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})}):(0,a.jsx)("div",{children:"Loading..."})}},490:function(t,n,e){t.exports=e.p+"static/media/portrait-not-found.43277cf87c689de71501.png"}}]);
//# sourceMappingURL=541.5ba8da9a.chunk.js.map