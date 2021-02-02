exports.ids = [2];
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=ece3c162&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_c('article-comments',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=ece3c162&

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(27);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=17cba238&
var article_metavue_type_template_id_17cba238_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
      name: 'Profile',
      params: {
        username: _vm.article.author.username
      }
    }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
        name: 'Profile',
        params: {
          username: _vm.article.author.username
        }
      }}},[_vm._v(_vm._s(_vm.article.author.username)+"\n    ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.updatedAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" "+((_vm.article.author.username === _vm.user.username)?("<button class=\"btn btn-sm btn-outline-secondary\"><i class=\"ion-edit\"></i>\n        Edit Article\n    </button>\n      \n    <button class=\"btn btn-outline-danger btn-sm\"><i class=\"ion-trash-a\"></i> Delete Article\n    </button>"):("<button"+(_vm._ssrAttr("disabled",_vm.followDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{active: _vm.article.author.following}))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n        "+_vm._s(_vm.article.author.following ? 'UnFollow': 'Follow')+" "+_vm._s(_vm.article.author.username)+"\n    ")+"</button>\n      \n    <button"+(_vm._ssrAttr("disabled",_vm.article.favoriteDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{active: _vm.article.favorited}))+"><i class=\"ion-heart\"></i>\n        Favorite Post <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")))],2)}
var article_metavue_type_template_id_17cba238_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=17cba238&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// EXTERNAL MODULE: ./api/profile.js
var profile = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: 'ArticleMeta',
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      followDisabled: false
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },
  methods: {
    editArticle() {
      this.$router.push({
        name: 'Editor',
        params: {
          slug: this.article.slug
        }
      });
    },

    async deleteArticle() {
      const result = await Object(api_article["d" /* delArticle */])(this.article.slug);
      this.$router.replace('/');
    },

    // 关注 or 取关
    async onFollow() {
      this.followDisabled = true;

      if (this.article.author.following) {
        await Object(profile["c" /* unFollowUser */])(this.article.author.username);
        this.article.author.following = false;
      } else {
        await Object(profile["a" /* followUser */])(this.article.author.username);
        this.article.author.following = true;
      }

      this.followDisabled = false;
    },

    // 点赞文章
    async onFavorite() {
      this.article.favoriteDisabled = true;

      if (this.article.favorited) {
        await Object(api_article["e" /* delFavorite */])(this.article.slug);
        this.article.favorited = false;
        this.article.favoritesCount--;
      } else {
        await Object(api_article["b" /* addFavorite */])(this.article.slug);
        this.article.favorited = true;
        this.article.favoritesCount++;
      }

      this.article.favoriteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_17cba238_render,
  article_metavue_type_template_id_17cba238_staticRenderFns,
  false,
  injectStyles,
  null,
  "1fe87ab0"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=template&id=7d226c60&
var article_commentsvue_type_template_id_7d226c60_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" required=\"required\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.comment))+"</textarea></div> <div class=\"card-footer\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">Post Comment</button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape("\n        "+_vm._s(comment.body)+"\n      ")+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          name: 'Profile',
          params: comment.author.username
        }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n       \n      "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          name: 'Profile',
          params: {
            username: comment.author.username
          }
        }}},[_vm._v("\n        "+_vm._s(comment.author.username)+"\n      ")]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,'MMM DD, YYYY')))+"</span>")],2)],2)})],2)}
var article_commentsvue_type_template_id_7d226c60_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=template&id=7d226c60&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var article_commentsvue_type_script_lang_js_ = ({
  name: 'ArticleComments',
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      comment: '',
      // 评论内容
      comments: [] // 评论列表

    };
  },

  async mounted() {
    const {
      data
    } = await Object(api_article["h" /* getComments */])(this.article.slug);
    this.comments = data.comments;
  },

  methods: {
    async onSubmit() {
      const {
        slug
      } = this.article;
      const saveData = {
        comment: {
          body: this.comment
        }
      };

      try {
        const {
          data
        } = await Object(api_article["a" /* addComment */])(slug, saveData);
        this.comments.unshift(data.comment);
        this.comment = '';
      } catch (err) {}
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentsvue_type_script_lang_js_ = (article_commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue



function article_comments_injectStyles (context) {
  
  
}

/* normalize component */

var article_comments_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentsvue_type_script_lang_js_,
  article_commentsvue_type_template_id_7d226c60_render,
  article_commentsvue_type_template_id_7d226c60_staticRenderFns,
  false,
  article_comments_injectStyles,
  null,
  "1c21bd97"
  
)

/* harmony default export */ var article_comments = (article_comments_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: 'ArticleIndex',
  components: {
    ArticleMeta: article_meta,
    ArticleComments: article_comments
  },

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api_article["f" /* getArticle */])(params.slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    article.favoriteDisabled = false;
    return {
      article
    };
  },

  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.article.description
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "c93c9236"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map