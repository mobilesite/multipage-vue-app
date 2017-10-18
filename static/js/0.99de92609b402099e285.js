(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib"));
	else if(typeof define === 'function' && define.amd)
		define("0", ["lib"], factory);
	else if(typeof exports === 'object')
		exports["0"] = factory(require("lib"));
	else
		root["0"] = factory(root["lib"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return webpackJsonp_name_([8],[
/* 0 */
/***/ (function(module, exports) {

module.exports = lib;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(7);

/***/ })
],[3]);
});