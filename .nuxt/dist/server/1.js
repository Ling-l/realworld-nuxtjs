exports.ids = [1];
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return unFollowUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
// profile api
 // 获取用户信息

const getProfile = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/profiles/${username}`
  });
}; // 关注用户

const followUser = username => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].post(`/api/profiles/${username}/follow`);
}; // 取消关注用户

const unFollowUser = username => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].delete(`/api/profiles/${username}/follow`);
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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=414e8840&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> "+((_vm.profile.bio)?("<p>"+_vm._ssrEscape(_vm._s(_vm.profile.bio))+"</p>"):"<!---->")+" <button"+(_vm._ssrAttr("disabled",_vm.followDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-secondary action-btn",{active: _vm.profile.following}))+"><i"+(_vm._ssrClass(null,_vm.isMe ? 'ion-gear-a' : 'ion-plus-round'))+"></i>"+_vm._ssrEscape("\n              "+_vm._s(_vm.isMe ? 'Edit Profile Settings' : ((_vm.profile.following ? 'Unfollow ' : 'Follow ') + _vm.profile.username))+"\n          ")+"</button></div></div></div></div> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: !_vm.$route.query.tab},attrs:{"to":{
                  name: 'Profile'
                },"exact":""}},[_vm._v("\n                My Articles\n              ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.$route.query.tab === 'favorites'},attrs:{"to":{
                  name: 'Profile',
                  params: {
                    username: _vm.profile.username,
                  },
                  query: {
                    tab: 'favorites'
                  }
                },"exact":""}},[_vm._v("\n                Favorited Articles\n              ")])],1)],2)]),_vm._ssrNode(" "),_c('article-list',{attrs:{"articles":_vm.articles}}),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{
                active: item === _vm.page
              }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                  name: 'Profile',
                  query: {
                    page: item,
                    tab: _vm.tab
                  }
                }}},[_vm._v(_vm._s(item))])],1)}),0)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=414e8840&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./components/Article/list.vue + 4 modules
var list = __webpack_require__(31);

// EXTERNAL MODULE: ./api/profile.js
var api_profile = __webpack_require__(30);

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
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




/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: "UserProfile",
  components: {
    ArticleList: list["a" /* default */]
  },

  data() {
    return {
      followDisabled: false
    };
  },

  watchQuery: ['tab', 'page'],
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    isMe() {
      return this.user.username === this.profile.username;
    },

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },

  async asyncData(context) {
    const {
      params,
      query
    } = context;
    const {
      tab
    } = query;
    const limit = 5;
    const page = Number.parseInt(query.page || 1);
    const articleParams = tab === 'favorites' ? {
      favorited: params.username
    } : {
      author: params.username
    };
    articleParams.limit = limit;
    articleParams.offset = (page - 1) * limit;
    const [profileRes, articleRes] = await Promise.all([Object(api_profile["b" /* getProfile */])(params.username), Object(article["g" /* getArticles */])(articleParams)]);
    const {
      data: {
        profile
      }
    } = profileRes;
    const {
      data: {
        articles,
        articlesCount
      }
    } = articleRes;
    articles.forEach(article => article.favoriteDisabled = false);
    return {
      profile,
      articles,
      articlesCount,
      page,
      tab,
      limit
    };
  },

  methods: {
    async onFollow() {
      if (this.isMe) {
        this.$router.push({
          name: 'Settings'
        });
      } else {
        this.followDisabled = true;

        if (this.profile.following) {
          await Object(api_profile["c" /* unFollowUser */])(this.profile.username);
          this.profile.following = false;
        } else {
          await Object(api_profile["a" /* followUser */])(this.profile.username);
          this.profile.following = true;
        }

        this.followDisabled = false;
      }
    }

  },

  head() {
    const tab = this.$route.query.tab;
    return {
      title: `${tab === 'favorites' ? 'Articles favorites by' : ''} ${this.profile.username} - RealWorld`
    };
  }

});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f4f52050"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map