(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib"));
	else if(typeof define === 'function' && define.amd)
		define("1", ["lib"], factory);
	else if(typeof exports === 'object')
		exports["1"] = factory(require("lib"));
	else
		root["1"] = factory(root["lib"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return webpackJsonp_name_([10],[
/* 0 */
/***/ (function(module, exports) {

module.exports = lib;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(10);

/***/ })
],[1]);
});