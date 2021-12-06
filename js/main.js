(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _classCallCheck(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}module.exports=_classCallCheck,module.exports.default=module.exports,module.exports.__esModule=!0;

},{}],2:[function(require,module,exports){
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}module.exports=_interopRequireDefault,module.exports.default=module.exports,module.exports.__esModule=!0;

},{}],3:[function(require,module,exports){
"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));window.addEventListener("DOMContentLoaded",function(){var e=new Test("js works!");document.getElementById("test2").textContent=e.text});var Test=function e(t){(0,_classCallCheck2.default)(this,e),this.text=t};

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/interopRequireDefault":2}]},{},[3]);
