(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib"));
	else if(typeof define === 'function' && define.amd)
		define("help", ["lib"], factory);
	else if(typeof exports === 'object')
		exports["help"] = factory(require("lib"));
	else
		root["help"] = factory(root["lib"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return webpackJsonp_name_([0,6,7,8,9,10],[
/* 0 */
/***/ (function(module, exports) {

module.exports = lib;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(10);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(11);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(7);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(8);

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(9);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      title: '404 page'
    };
  }
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(8)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(10),
  /* scopeId */
  "data-v-36c6a133",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "not-found"
  }, [_c('h1', {
    staticClass: "not-found-title"
  }, [_vm._v("404 Page")])])
}]}

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__businessComponents_Help_main_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__businessComponents_Help_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__businessComponents_Help_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__businessComponents_Help_Tab1_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__businessComponents_Help_Tab1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__businessComponents_Help_Tab1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__businessComponents_Help_Tab2_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__businessComponents_Help_Tab2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__businessComponents_Help_Tab2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__businessComponents_NotFound_main_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__businessComponents_NotFound_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__businessComponents_NotFound_main_vue__);







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
  mode: 'history',
  base: '/help/',
  routes: [{
    path: '/',

    component: __WEBPACK_IMPORTED_MODULE_3__businessComponents_Help_Tab1_vue___default.a
  }, {
    path: '/tab1',
    component: __WEBPACK_IMPORTED_MODULE_3__businessComponents_Help_Tab1_vue___default.a
  }, {
    path: '/tab2',
    component: __WEBPACK_IMPORTED_MODULE_4__businessComponents_Help_Tab2_vue___default.a
  }, {
    path: '/detail',
    component: __WEBPACK_IMPORTED_MODULE_2__businessComponents_Help_main_vue___default.a
  }, {
    path: '*',
    component: __WEBPACK_IMPORTED_MODULE_5__businessComponents_NotFound_main_vue___default.a
  }]
}));

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(33)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(51),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      title: '这是tab1'
    };
  }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      title: '这是tab2'
    };
  }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      title: '这是帮助详情'
    };
  },

  computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapState"])({
    count: function count() {
      return this.$store.state.count;
    }
  }),
  methods: {
    mounted: function mounted() {
      console.log(lib);
    },
    increment: function increment() {
      this.fechData();
      this.$store.commit('increment');
    },
    decrement: function decrement() {
      this.$store.commit('decrement');
    },
    fechData: function fechData() {
      this.axios.get('//www.douban.com/j/app/radio/channels').then(function (response) {
        console.log(response.data);
      });
    }
  }
});

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Page'
});

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Page__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Page__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router_index__ = __webpack_require__(12);









__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["default"]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vue_axios___default.a, __WEBPACK_IMPORTED_MODULE_2_axios___default.a);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["default"].Store({
  state: {
    count: 0
  },
  mutations: {
    increment: function increment(state) {
      state.count++;
    },
    decrement: function decrement(state) {
      state.count--;
    }
  }
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#page',
  router: __WEBPACK_IMPORTED_MODULE_5__router_index__["a" /* default */],
  store: store,
  template: '<Page></Page>',
  components: { Page: __WEBPACK_IMPORTED_MODULE_4__Page___default.a }
});

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(38)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(56),
  /* scopeId */
  "data-v-fc972078",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(37)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(55),
  /* scopeId */
  "data-v-fc7af176",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(35)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(53),
  /* scopeId */
  "data-v-940150be",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page help",
    attrs: {
      "id": "page"
    }
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("帮助首页")]), _vm._v(" "), _c('p', {
    staticClass: "content"
  }, [_vm._v("这是帮助首页的内容，测试一下")]), _vm._v(" "), _c('a', {
    staticClass: "link",
    attrs: {
      "href": "//www.test.com/wallet"
    }
  }, [_vm._v("链接到其它的单页（跳转到本单页之外）")]), _vm._v(" "), _c('nav', {
    staticClass: "tab-nav"
  }, [_c('router-link', {
    staticClass: "tab-nav-item",
    attrs: {
      "to": "/tab1",
      "tag": "li"
    }
  }, [_vm._v("tab1（当前单页内路由跳转）")]), _vm._v(" "), _c('router-link', {
    staticClass: "tab-nav-item",
    attrs: {
      "to": "/tab2",
      "tag": "li"
    }
  }, [_vm._v("tab2（当前单页内路由跳转）")])], 1), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 52 */,
/* 53 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail"
  }, [_c('h1', {
    staticClass: "detail-title",
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "detail-button",
    on: {
      "click": _vm.decrement
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('button', {
    staticClass: "detail-button",
    on: {
      "click": _vm.increment
    }
  }, [_vm._v("+")]), _vm._v(" "), _c('div', {
    domProps: {
      "textContent": _vm._s('count计算结果：' + _vm.count)
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 54 */,
/* 55 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tab",
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  })
},staticRenderFns: []}

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tab",
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  })
},staticRenderFns: []}

/***/ })
],[40]);
});