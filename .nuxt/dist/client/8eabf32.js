(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{185:function(t,e,r){"use strict";r.d(e,"d",(function(){return c})),r.d(e,"f",(function(){return o})),r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return f})),r.d(e,"c",(function(){return v})),r.d(e,"e",(function(){return d}));var n=r(61),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return n.b.post("/api/articles/".concat(t,"/favorite"))},f=function(t){return n.b.delete("/api/articles/".concat(t,"/favorite"))},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})}},189:function(t,e,r){var n=r(6),c=r(28),o=r(11),l=r(190),f="["+l+"]",v=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),m=function(t,e,r){var c={},f=o((function(){return!!l[t]()||"​"!="​"[t]()})),v=c[t]=f?e(_):l[t];r&&(c[r]=v),n(n.P+n.F*f,"String",c)},_=m.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(d,"")),t};t.exports=m},190:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},199:function(t,e,r){"use strict";var n=r(4),c=r(21),o=r(27),l=r(122),f=r(62),v=r(11),d=r(50).f,m=r(63).f,_=r(10).f,h=r(189).trim,C=n.Number,y=C,O=C.prototype,x="Number"==o(r(78)(O)),k="trim"in String.prototype,N=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=k?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof C&&(x?v((function(){O.valueOf.call(r)})):"Number"!=o(r))?l(new y(N(e)),r,C):N(e)};for(var j,E=r(7)?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;E.length>I;I++)c(y,j=E[I])&&!c(C,j)&&_(C,j,m(y,j));C.prototype=O,O.constructor=C,r(13)(n,"Number",C)}},200:function(t,e,r){var n=r(6),c=r(201);n(n.S+n.F*(Number.parseInt!=c),"Number",{parseInt:c})},201:function(t,e,r){var n=r(4).parseInt,c=r(189).trim,o=r(190),l=/^[-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,e){var r=c(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},260:function(t,e,r){"use strict";r.r(e);r(60),r(24),r(49),r(25),r(12),r(37);var n=r(9),c=(r(199),r(200),r(36),r(3)),o=r(34),l=r(46),f=r(185),v=r(61);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={name:"HomeIndex",watchQuery:["page","tag","tab"],computed:m(m({},Object(l.b)(["user"])),{},{totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}}),asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,o,l,d,m,_,h,C,y,O,x,k,N,j,E,I;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,c=t.store,o=20,l=Number.parseInt(r.page||1),d=r.tab||"global_feed",m=r.tag,_={limit:o,offset:(l-1)*o,tag:m},h="your_feed"===d&&c.state.user,C=h?f.f:f.d,e.next=10,Promise.all([C(_),Object(v.b)({method:"GET",url:"/api/tags"})]);case 10:return y=e.sent,O=Object(n.a)(y,2),x=O[0],k=O[1],N=x.data,j=N.articles,E=N.articlesCount,I=k.data.tags,j.forEach((function(article){return article.favoriteDisabled=!1})),e.abrupt("return",{articles:j,articlesCount:E,tags:I,limit:o,page:l,tab:d,tag:m});case 18:case"end":return e.stop()}}),e)})))()},methods:{onFavorite:function(article){return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,!article.favorited){t.next=8;break}return t.next=4,Object(f.b)(article.slug);case 4:article.favorited=!1,article.favoritesCount--,t.next=12;break;case 8:return t.next=10,Object(f.a)(article.slug);case 10:article.favorited=!0,article.favoritesCount++;case 12:article.favoriteDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()}}},h=r(23),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[t.user?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.tab},attrs:{exact:"",to:{name:"Home",query:{tab:"your_feed"}}}},[t._v("Your Feed")])],1):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===t.tab},attrs:{exact:"",to:{name:"Home",query:{tab:"global_feed"}}}},[t._v("Global Feed")])],1),t._v(" "),t.$route.query.tag?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"tag"===t.tab},attrs:{exact:"",to:{name:"Home",query:{tab:"tag"}}}},[t._v("# "+t._s(t.tag))])],1):t._e()])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"Profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"Profile",params:{username:article.author.username}}}},[t._v("\n                "+t._s(article.author.username)+"\n              ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"Article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)})),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"Home",query:{page:e,tag:t.$route.query.tag,tab:t.tab}}}},[t._v(t._s(e))])],1)})),0)])],2),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},[t._l(t.tags,(function(e){return[e?r("nuxt-link",{key:e,staticClass:"tag-pill tag-default",attrs:{to:{name:"Home",query:{tab:"tag",tag:e}}}},[t._v("\n                "+t._s(e)+"\n              ")]):t._e()]}))],2)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"logo-font"},[this._v("conduit")]),this._v(" "),e("p",[this._v("A place to share your knowledge.")])])])}],!1,null,null,null);e.default=component.exports}}]);