(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{185:function(t,e,r){"use strict";r.d(e,"g",(function(){return o})),r.d(e,"i",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"e",(function(){return f})),r.d(e,"f",(function(){return v})),r.d(e,"h",(function(){return m})),r.d(e,"a",(function(){return d})),r.d(e,"c",(function(){return h})),r.d(e,"j",(function(){return _})),r.d(e,"d",(function(){return w}));var n=r(60),o=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},c=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return n.b.post("/api/articles/".concat(t,"/favorite"))},f=function(t){return n.b.delete("/api/articles/".concat(t,"/favorite"))},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},d=function(t,data){return n.b.post("/api/articles/".concat(t,"/comments"),data)},h=function(data){return n.b.post("/api/articles",data)},_=function(t,data){return n.b.put("/api/articles/".concat(t),data)},w=function(t){return n.b.delete("/api/articles/".concat(t))}},186:function(t,e,r){var n=r(6),o=r(27),c=r(12),l=r(187),f="["+l+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),d=function(t,e,r){var o={},f=c((function(){return!!l[t]()||"​"!="​"[t]()})),v=o[t]=f?e(h):l[t];r&&(o[r]=v),n(n.P+n.F*f,"String",o)},h=d.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(m,"")),t};t.exports=d},187:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},188:function(t,e,r){"use strict";var n=r(4),o=r(21),c=r(26),l=r(122),f=r(62),v=r(12),m=r(50).f,d=r(63).f,h=r(10).f,_=r(186).trim,w=n.Number,O=w,C=w.prototype,x="Number"==c(r(78)(C)),j="trim"in String.prototype,y=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=j?e.trim():_(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(x?v((function(){C.valueOf.call(r)})):"Number"!=c(r))?l(new O(y(e)),r,w):y(e)};for(var k,E=r(7)?m(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;E.length>N;N++)o(O,k=E[N])&&!o(w,k)&&h(w,k,d(O,k));w.prototype=C,C.constructor=w,r(13)(n,"Number",w)}},189:function(t,e,r){var n=r(6),o=r(190);n(n.S+n.F*(Number.parseInt!=o),"Number",{parseInt:o})},190:function(t,e,r){var n=r(4).parseInt,o=r(186).trim,c=r(187),l=/^[-+]?0[xX]/;t.exports=8!==n(c+"08")||22!==n(c+"0x16")?function(t,e){var r=o(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},193:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return c})),r.d(e,"c",(function(){return l}));var n=r(60),o=function(t){return Object(n.b)({method:"GET",url:"/api/profiles/".concat(t)})},c=function(t){return n.b.post("/api/profiles/".concat(t,"/follow"))},l=function(t){return n.b.delete("/api/profiles/".concat(t,"/follow"))}},197:function(t,e,r){"use strict";r(36);var n=r(3),o=r(185),c={name:"ArticleList",props:{articles:{type:Array,required:!0}},methods:{onFavorite:function(article){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,!article.favorited){t.next=8;break}return t.next=4,Object(o.e)(article.slug);case 4:article.favorited=!1,article.favoritesCount--,t.next=12;break;case 8:return t.next=10,Object(o.b)(article.slug);case 10:article.favorited=!0,article.favoritesCount++;case 12:article.favoriteDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()}}},l=r(23),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"Profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"Profile",params:{username:article.author.username}}}},[t._v("\n          "+t._s(article.author.username)+"\n        ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n      ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"Article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)})),0)}),[],!1,null,null,null);e.a=component.exports},272:function(t,e,r){"use strict";r.r(e);r(61),r(24),r(49),r(25),r(11),r(37);var n=r(9),o=(r(188),r(189),r(36),r(3)),c=r(28),l=r(38),f=r(197),v=r(193),article=r(185);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={middleware:"authenticated",name:"UserProfile",components:{ArticleList:f.a},data:function(){return{followDisabled:!1}},watchQuery:["tab","page"],computed:d(d({},Object(l.b)(["user"])),{},{isMe:function(){return this.user.username===this.profile.username},totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}}),asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,l,f,m,d,h,_,w,O,C,x,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,o=t.query,c=o.tab,l=5,f=Number.parseInt(o.page||1),(m="favorites"===c?{favorited:r.username}:{author:r.username}).limit=l,m.offset=(f-1)*l,e.next=9,Promise.all([Object(v.b)(r.username),Object(article.g)(m)]);case 9:return d=e.sent,h=Object(n.a)(d,2),_=h[0],w=h[1],O=_.data.profile,C=w.data,x=C.articles,j=C.articlesCount,x.forEach((function(article){return article.favoriteDisabled=!1})),e.abrupt("return",{profile:O,articles:x,articlesCount:j,page:f,tab:c,limit:l});case 17:case"end":return e.stop()}}),e)})))()},methods:{onFollow:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isMe){e.next=4;break}t.$router.push({name:"Settings"}),e.next=15;break;case 4:if(t.followDisabled=!0,!t.profile.following){e.next=11;break}return e.next=8,Object(v.c)(t.profile.username);case 8:t.profile.following=!1,e.next=14;break;case 11:return e.next=13,Object(v.a)(t.profile.username);case 13:t.profile.following=!0;case 14:t.followDisabled=!1;case 15:case"end":return e.stop()}}),e)})))()}},head:function(){var t=this.$route.query.tab;return{title:"".concat("favorites"===t?"Articles favorites by":""," ").concat(this.profile.username," - RealWorld")}}},_=r(23),component=Object(_.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-page"},[r("div",{staticClass:"user-info"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("img",{staticClass:"user-img",attrs:{src:t.profile.image}}),t._v(" "),r("h4",[t._v(t._s(t.profile.username))]),t._v(" "),t.profile.bio?r("p",[t._v(t._s(t.profile.bio))]):t._e(),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary action-btn",class:{active:t.profile.following},attrs:{disabled:t.followDisabled},on:{click:t.onFollow}},[r("i",{class:t.isMe?"ion-gear-a":"ion-plus-round"}),t._v("\n              "+t._s(t.isMe?"Edit Profile Settings":(t.profile.following?"Unfollow ":"Follow ")+t.profile.username)+"\n          ")])])])])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("div",{staticClass:"articles-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:!t.$route.query.tab},attrs:{to:{name:"Profile"},exact:""}},[t._v("\n                My Articles\n              ")])],1),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"favorites"===t.$route.query.tab},attrs:{to:{name:"Profile",params:{username:t.profile.username},query:{tab:"favorites"}},exact:""}},[t._v("\n                Favorited Articles\n              ")])],1)])]),t._v(" "),r("article-list",{attrs:{articles:t.articles}}),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"Profile",query:{page:e,tab:t.tab}}}},[t._v(t._s(e))])],1)})),0)])],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);