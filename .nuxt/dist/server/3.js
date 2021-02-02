exports.ids = [3];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getYourFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return delFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return updateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return delArticle; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
// 文章 api
 // 获取公共文章列表

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
}; // 获取关注的用户文章列表

const getYourFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
}; // 点赞

const addFavorite = slug => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].post(`/api/articles/${slug}/favorite`);
}; // 取消点赞

const delFavorite = slug => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].delete(`/api/articles/${slug}/favorite`);
}; // 获取文章详情

const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; // 评论文章 /api/articles/:slug/comments

const addComment = (slug, data) => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].post(`/api/articles/${slug}/comments`, data);
}; // 创建文章

const createArticle = data => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].post('/api/articles', data);
}; // 更新文章 /api/articles/:slug

const updateArticle = (slug, data) => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].put(`/api/articles/${slug}`, data);
}; // 删除文章

const delArticle = slug => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].delete(`/api/articles/${slug}`);
};

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Article/list.vue?vue&type=template&id=8fa917f0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
          name: 'Profile',
          params: {
            username: article.author.username,
          },
        }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
            name: 'Profile',
            params: {
              username: article.author.username,
            },
          }}},[_vm._v("\n          "+_vm._s(article.author.username)+"\n        ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,"MMM DD, YYYY")))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ active: article.favorited }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n      ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
        name: 'Article',
        params: {
          slug: article.slug,
        },
      }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Article/list.vue?vue&type=template&id=8fa917f0&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Article/list.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var listvue_type_script_lang_js_ = ({
  name: 'ArticleList',
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true;

      if (article.favorited) {
        await Object(api_article["e" /* delFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount--;
      } else {
        await Object(api_article["b" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount++;
      }

      article.favoriteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./components/Article/list.vue?vue&type=script&lang=js&
 /* harmony default export */ var Article_listvue_type_script_lang_js_ = (listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Article/list.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Article_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "121dab87"
  
)

/* harmony default export */ var list = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=aa9bc944&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'your_feed'
                },attrs:{"exact":"","to":{
                  name: 'Home',
                  query: {
                    tab: 'your_feed'
                  }
                }}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'global_feed'
                },attrs:{"exact":"","to":{
                  name: 'Home',
                  query: {
                    tab: 'global_feed'
                  }
                }}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.$route.query.tag)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'tag'
                },attrs:{"exact":"","to":{
                  name: 'Home',
                  query: {
                    tab: 'tag'
                  }
                }}},[_vm._v("# "+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_c('article-list',{attrs:{"articles":_vm.articles}}),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{
                active: item === _vm.page
              }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                  name: 'Home',
                  query: {
                    page: item,
                    tag: _vm.$route.query.tag,
                    tab: _vm.tab
                  }
                }}},[_vm._v(_vm._s(item))])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\">","</div>",[_vm._l((_vm.tags),function(tag){return [(!!tag)?_c('nuxt-link',{key:tag,staticClass:"tag-pill tag-default",attrs:{"to":{
                  name: 'Home',
                  query: {
                    tab: 'tag',
                    tag: tag,
                  }
                }}},[_vm._v("\n                "+_vm._s(tag)+"\n              ")]):_vm._e()]})],2)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=aa9bc944&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./components/Article/list.vue + 4 modules
var list = __webpack_require__(31);

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(28);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/tag.js
// 标签 api

const getTags = () => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/tags'
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: "HomeIndex",
  components: {
    ArticleList: list["a" /* default */]
  },
  watchQuery: ['page', 'tag', 'tab'],
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      // 向上取整
      return Math.ceil(this.articlesCount / this.limit);
    }

  },

  // 为了提高 SEO & 首屏渲染的速度，因此放入 asyncData 中
  async asyncData({
    query,
    store
  }) {
    const limit = 20;
    const page = Number.parseInt(query.page || 1);
    const tab = query.tab || 'global_feed';
    const tag = query.tag;
    const params = {
      limit,
      offset: (page - 1) * limit,
      tag
    };
    const isYourFeed = tab === 'your_feed' && store.state.user;
    const loadArticles = isYourFeed ? article["i" /* getYourFeedArticles */] : article["g" /* getArticles */];
    const [articleRes, tagRes] = await Promise.all([loadArticles(params), getTags()]);
    const {
      articles,
      articlesCount
    } = articleRes.data;
    const {
      tags
    } = tagRes.data;
    articles.forEach(article => article.favoriteDisabled = false);
    return {
      articles,
      // 文章列表
      articlesCount,
      // 文章总数
      tags,
      // 标签列表
      limit,
      // 每页大小
      page,
      // 页码
      tab,
      // 选项卡
      tag // 数据标签

    };
  },

  head() {
    return {
      title: 'Home - RealWorld'
    };
  }

});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "71121366"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map