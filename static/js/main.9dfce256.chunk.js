(this.webpackJsonpreact_movie_app_2021=this.webpackJsonpreact_movie_app_2021||[]).push([[0],{58:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(30),o=n.n(c),i=n(8),r=n(2),l=n(19),j=n.n(l),u=n(31),m=n(13),d=n(14),b=n(16),p=n(15),v=n(32),h=n.n(v),O=(n(58),n(1));var x=function(e){var t=e.id,n=e.year,s=e.title,a=e.summary,c=e.poster,o=e.genres;return Object(O.jsx)("div",{className:"movie",children:Object(O.jsxs)(i.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:s,summary:a,poster:c,genres:o}},children:[Object(O.jsx)("img",{src:c,alt:s,title:s}),Object(O.jsxs)("div",{className:"movie__data",children:[Object(O.jsx)("h3",{className:"movie__title",children:s}),Object(O.jsx)("h5",{className:"movie__year",children:n}),Object(O.jsx)("ul",{className:"movie__genres",children:o.map((function(e,t){return Object(O.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(O.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})})},f=(n(65),function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(m.a)(this,n),(s=t.call(this,e)).state={isLoading:!0,movies:[]},s.getMovies=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,s.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){console.log("component rendered"),this.getMovies()}},{key:"componentDidUpdate",value:function(){console.log("I'm just upated")}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return console.log("I'm rendering"),Object(O.jsx)("section",{className:"container",children:t?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(O.jsx)("div",{className:"movies",children:n.map((function(e){return Object(O.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(a.a.Component));n(66);var _=function(e){return console.log(e),Object(O.jsxs)("div",{className:"about__container",children:[Object(O.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(O.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},g=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(O.jsxs)("span",{children:["Movie title is '",e.state.title,"'"]}):null}}]),n}(a.a.Component);n(67);var y=function(){return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(i.b,{to:"/",children:"Home"}),Object(O.jsx)(i.b,{to:"/about",children:"About"})]})};n(68);var N=function(){return Object(O.jsxs)(i.a,{children:[Object(O.jsx)(y,{}),Object(O.jsx)(r.a,{path:"/",exact:!0,component:f}),Object(O.jsx)(r.a,{path:"/about",component:_}),Object(O.jsx)(r.a,{path:"/movie/:id",component:g})]})};o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.9dfce256.chunk.js.map