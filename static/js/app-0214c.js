webpackJsonp([1],{

/***/ "5R2z":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9ZMm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: 'App',
  data: function data() {
    return {
      profile: {},
      email: ''
    };
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    window.liff.init({
      liffId: '1657816678-d6o85QZa'
    }).then(function () {
      _this.getprofile();
      _this.email = _this.getDecodedIDToken().email;
    });
  },

  methods: {
    subscribe: function subscribe() {
      alert('恭喜你，訂閱成功');
    },
    confirm: function confirm(num) {
      if (num === 0) {
        alert('錯了吧');
      } else {
        alert('不錯喔~');
      }
    },
    getprofile: function getprofile() {
      var _this2 = this;

      window.liff.getProfile().then(function (profile) {
        _this2.profile = profile;
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-79fc53cc","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('p',{staticClass:"text-red"},[_vm._v("Welcome")]),_vm._v(" "),_c('div',[_vm._v("\n    Hi~ "+_vm._s(_vm.profile.displayName)+"\n  ")]),_vm._v("\n  請確認以下是你本人嗎?\n  "),_c('br'),_vm._v(" "),_c('div',[_c('img',{attrs:{"src":_vm.profile.pictureUrl,"height":"200px"}})]),_vm._v(" "),_c('button',{on:{"click":function($event){return _vm.confirm(1)}}},[_vm._v("YES")]),_vm._v(" "),_c('button',{on:{"click":function($event){return _vm.confirm(0)}}},[_vm._v("NO")]),_vm._v(" "),_c('p',[_vm._v("請確認信箱，即可訂閱電子專刊")]),_vm._v(" "),_c('input',{attrs:{"type":"text"},domProps:{"value":_vm.email}}),_vm._v(" "),_c('button',{on:{"click":_vm.subscribe}},[_vm._v("確認訂閱")]),_vm._v(" "),_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("5R2z")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/Home.vue
//
//
//
//
//
//
//

/* harmony default export */ var Home = ({});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5873dd5a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/Home.vue
var Home_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var Home_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('p',[_vm._v("HOMEHOMEHOMEwfretfgwerfg")]),_vm._v(" "),_c('p',[_vm._v("HOME")])])}]
var Home_esExports = { render: Home_render, staticRenderFns: Home_staticRenderFns }
/* harmony default export */ var pages_Home = (Home_esExports);
// CONCATENATED MODULE: ./src/pages/Home.vue
function Home_injectStyle (ssrContext) {
  __webpack_require__("9ZMm")
}
var Home_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Home___vue_template_functional__ = false
/* styles */
var Home___vue_styles__ = Home_injectStyle
/* scopeId */
var Home___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Home___vue_module_identifier__ = null
var Home_Component = Home_normalizeComponent(
  Home,
  pages_Home,
  Home___vue_template_functional__,
  Home___vue_styles__,
  Home___vue_scopeId__,
  Home___vue_module_identifier__
)

/* harmony default export */ var src_pages_Home = (Home_Component.exports);

// CONCATENATED MODULE: ./src/router/index.js


// import HelloWorld from '@/components/HelloWorld'


vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'Home',
    component: src_pages_Home
  }]
}));
// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




vue_esm["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new vue_esm["a" /* default */]({
  el: '#app',
  router: router,
  components: { App: src_App },
  template: '<App/>'
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app-0214c.js.map