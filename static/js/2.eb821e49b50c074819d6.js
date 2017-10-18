(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib"));
	else if(typeof define === 'function' && define.amd)
		define("2", ["lib"], factory);
	else if(typeof exports === 'object')
		exports["2"] = factory(require("lib"));
	else
		root["2"] = factory(root["lib"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return webpackJsonp_name_([7],[
/* 0 */
/***/ (function(module, exports) {

module.exports = lib;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(8);

/***/ })
],[4]);
});