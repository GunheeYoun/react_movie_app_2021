(this.webpackJsonpreact_movie_app_2021=this.webpackJsonpreact_movie_app_2021||[]).push([[0],{45:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s.n(n),i=s(15),c=s.n(i),r=s(6),o=s.n(r),m=s(16),l=s(17),d=s(18),j=s(21),u=s(20),v=s(19),p=s.n(v),h=(s(45),s(0));var _=function(e){e.id;var t=e.year,s=e.title,n=e.summary,a=e.poster,i=e.genres;return Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("img",{src:a,alt:s,title:s}),Object(h.jsxs)("div",{className:"movie__data",children:[Object(h.jsx)("h3",{className:"movie__title",children:s}),Object(h.jsx)("h5",{className:"movie__year",children:t}),Object(h.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(h.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(h.jsxs)("p",{className:"movie__summary",children:[n.slice(0,180),"..."]})]})]})},b=(s(47),function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={isLoading:!0,movies:[]},n.getMovies=Object(m.a)(o.a.mark((function e(){var t,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,s=t.data.data.movies,n.setState({movies:s,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){console.log("component rendered"),this.getMovies()}},{key:"componentDidUpdate",value:function(){console.log("I'm just upated")}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return console.log("I'm rendering"),Object(h.jsx)("section",{className:"container",children:t?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(h.jsx)("div",{className:"movies",children:s.map((function(e){return Object(h.jsx)(_,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component));c.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.aba55e5e.chunk.js.map