exports.ids = [4];
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

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=f02d7706&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\">"+((_vm.errors)?("<ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(value,field){return ("<div class=\"ng-scope\">"+(_vm._ssrList((value),function(error){return ("<li class=\"ng-binding ng-scope\">"+_vm._ssrEscape("\n              "+_vm._s(field)+" "+_vm._s(error)+"\n            ")+"</li>")}))+"</div>")}))+"</ul>"):"<!---->")+" <form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("min",1))+(_vm._ssrAttr("disabled",_vm.isConfirm))+" required=\"required\""+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("min",1))+(_vm._ssrAttr("disabled",_vm.isConfirm))+" required=\"required\""+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\""+(_vm._ssrAttr("disabled",_vm.isConfirm))+" required=\"required\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Enter tags\""+(_vm._ssrAttr("disabled",_vm.isConfirm))+(_vm._ssrAttr("value",(_vm.tag)))+" class=\"form-control\"> <div class=\"tag-list\">"+(_vm._ssrList((_vm.article.tagList),function(tag){return ("<span class=\"tag-default tag-pill ng-binding ng-scope\"><i class=\"ion-close-round\"></i>"+_vm._ssrEscape("\n                "+_vm._s(tag)+"\n              ")+"</span>")}))+"</div></fieldset> <button type=\"button\" class=\"btn btn-lg pull-xs-right btn-primary\">\n              Publish Article\n            </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=f02d7706&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: 'authenticated',
  name: 'EditorIndex',

  data() {
    return {
      slug: '',
      article: {
        title: '',
        description: '',
        body: '',
        tagList: []
      },
      tag: '',
      // 输入的tag
      isConfirm: false,
      // 是否提交
      errors: {} // 错误信息

    };
  },

  created() {
    this.getData();
  },

  methods: {
    async getData() {
      const {
        slug
      } = this.$route.params;
      if (!slug) return;
      this.slug = slug;
      const {
        data: {
          article
        }
      } = await Object(api_article["f" /* getArticle */])(slug);

      for (let key in article) {
        if (this.article.hasOwnProperty(key)) {
          this.article[key] = article[key];
        }
      }
    },

    async onSubmit() {
      this.isConfirm = true;

      try {
        const saveData = {
          article: this.article
        };
        const {
          data
        } = this.slug ? await Object(api_article["j" /* updateArticle */])(this.slug, saveData) : await Object(api_article["c" /* createArticle */])(saveData);
        const {
          article
        } = data;
        this.$router.push({
          name: 'Article',
          params: {
            slug: article.slug
          }
        });
      } catch (err) {
        this.errors = err.response.data.errors;
      } finally {
        this.isConfirm = false;
      }
    },

    addTag() {
      if (this.article.tagList.includes(this.tag)) return;
      this.article.tagList.push(this.tag);
      this.tag = '';
    },

    removeTag(tag) {
      const idx = this.article.tagList.findIndex(item => item === tag);
      this.article.tagList.splice(idx, 1);
    }

  }
});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/editor/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "38698b74"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map