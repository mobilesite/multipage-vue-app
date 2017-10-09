(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib"));
	else if(typeof define === 'function' && define.amd)
		define("wallet", ["lib"], factory);
	else if(typeof exports === 'object')
		exports["wallet"] = factory(require("lib"));
	else
		root["wallet"] = factory(root["lib"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return webpackJsonp_name_([1,6,7,8,9,10],[
/* 0 */
/***/ (function(module, exports) {

module.exports = lib;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(11)

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(12)

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(8)

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(9)

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(10)

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
  "data-v-5e48b29b",
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
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__businessComponents_Generate_main_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__businessComponents_Generate_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__businessComponents_Generate_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__businessComponents_NotFound_main_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__businessComponents_NotFound_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__businessComponents_NotFound_main_vue__);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
  mode: 'history',
  routes: [{
    path: '/generate',
    component: __WEBPACK_IMPORTED_MODULE_2__businessComponents_Generate_main_vue___default.a
  }, {
    path: '*',
    component: __WEBPACK_IMPORTED_MODULE_3__businessComponents_NotFound_main_vue___default.a
  }]
}));

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(35)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(53),
  /* scopeId */
  "data-v-2e6d990f",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      title: '标题'
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
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Page'
});

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
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
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Page__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Page__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router_index__ = __webpack_require__(15);









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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(37)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(55),
  /* scopeId */
  "data-v-3bf5ac55",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page",
    attrs: {
      "id": "page"
    }
  }, [_c('router-link', {
    attrs: {
      "to": "/detail"
    }
  }, [_vm._v("1111111")]), _vm._v(" "), _c('a', [_vm._v("1111111")]), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 54 */,
/* 55 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hello"
  }, [_c('h1', {
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  }), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.decrement
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.increment
    }
  }, [_vm._v("+")]), _vm._v(" "), _c('div', {
    domProps: {
      "textContent": _vm._s('count计算结果：' + _vm.count)
    }
  })])
},staticRenderFns: []}

/***/ })
],[43]);
});