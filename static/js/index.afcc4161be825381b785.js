(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib"));
	else if(typeof define === 'function' && define.amd)
		define("index", ["lib"], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory(require("lib"));
	else
		root["index"] = factory(root["lib"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return webpackJsonp_name_([3,6,7,8,9,10],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = lib;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(11)

/***/ }),

/***/ 10:
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

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__businessComponents_NotFound_main_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__businessComponents_NotFound_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__businessComponents_NotFound_main_vue__);




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
  mode: 'history',
  base: '/index/',
  routes: [{
    path: '/',
    component: {
      template: '' }
  }, {
    path: '*',
    component: __WEBPACK_IMPORTED_MODULE_2__businessComponents_NotFound_main_vue___default.a
  }]
}));

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(38)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(56),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(12)

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Page'
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(8)

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(9)

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Page__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Page__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router_index__ = __webpack_require__(13);









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

/***/ 56:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page help",
    attrs: {
      "id": "page"
    }
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("首页")]), _vm._v(" "), _c('p', {
    staticClass: "content"
  }, [_vm._v("这是首页，测试一下")]), _vm._v(" "), _c('a', {
    staticClass: "link",
    attrs: {
      "href": "//www.test.com/help"
    }
  }, [_vm._v("help")]), _vm._v(" "), _c('a', {
    staticClass: "link",
    attrs: {
      "href": "//www.test.com/wallet"
    }
  }, [_vm._v("wallet")])])
}]}

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(10)

/***/ }),

/***/ 7:
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

/***/ 8:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 9:
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


/***/ })

},[41]);
});