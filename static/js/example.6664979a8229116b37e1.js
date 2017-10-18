(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib"));
	else if(typeof define === 'function' && define.amd)
		define("example", ["lib"], factory);
	else if(typeof exports === 'object')
		exports["example"] = factory(require("lib"));
	else
		root["example"] = factory(root["lib"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return webpackJsonp_name_([4,6,7,8,9,10],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = lib;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(10);

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

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__businessComponents_NotFound_main_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__businessComponents_NotFound_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__businessComponents_NotFound_main_vue__);




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
  mode: 'history',
  routes: [{
    path: '*',
    component: __WEBPACK_IMPORTED_MODULE_2__businessComponents_NotFound_main_vue___default.a
  }]
}));

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(36)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(54),
  /* scopeId */
  "data-v-b935249c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(11);

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Page'
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(7);

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Page__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Page__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router_index__ = __webpack_require__(11);









__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["default"]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vue_axios___default.a, __WEBPACK_IMPORTED_MODULE_2_axios___default.a);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["default"].Store({
  state: {
    count: 0
  },
  mutations: {}
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#page',
  router: __WEBPACK_IMPORTED_MODULE_5__router_index__["a" /* default */],
  store: store,
  template: '<Page></Page>',
  components: { Page: __WEBPACK_IMPORTED_MODULE_4__Page___default.a }
});

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(8);

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page",
    attrs: {
      "id": "page"
    }
  }, [_vm._v("\n  123sadfasdfas\n")])
},staticRenderFns: []}

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(9);

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
  "data-v-36c6a133",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

},[39]);
});