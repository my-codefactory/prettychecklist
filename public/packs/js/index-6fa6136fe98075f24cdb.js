/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/index.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\app\\javascript\\packs\\index.js: Missing semicolon (3:8)\n\n  1 | jQuery(function($){\n  2 | \t\t$(\".deleteAction\").click(function(){\n> 3 | \t\t\tCONST current_item = $(this).parents(\".trash\")[0]\n    | \t\t\t     ^\n  4 | \t\t\tif(confirm(\"Are you sure?\")){\n  5 | \t\t\t\t$.ajax(url:{\n  6 | \t\t\t\t\turl: '/todo_lists/' + $(current_item).attr('data-item_id'),\n    at Parser._raise (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:776:17)\n    at Parser.raiseWithData (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:769:17)\n    at Parser.raise (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:737:17)\n    at Parser.semicolon (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:9165:10)\n    at Parser.parseExpressionStatement (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:12316:10)\n    at Parser.parseStatementContent (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:11912:19)\n    at Parser.parseStatement (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:11776:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:12358:25)\n    at Parser.parseBlockBody (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:12349:10)\n    at Parser.parseBlock (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:12333:10)\n    at Parser.parseFunctionBody (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:11319:24)\n    at Parser.parseFunctionBodyAndFinish (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:11303:10)\n    at C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:12491:12\n    at Parser.withTopicForbiddingContext (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:11616:14)\n    at Parser.parseFunction (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:12490:10)\n    at Parser.parseFunctionOrFunctionSent (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:10757:17)\n    at Parser.parseExprAtom (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:10593:21)\n    at Parser.parseExprSubscripts (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:10248:23)\n    at Parser.parseUpdate (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:10228:21)\n    at Parser.parseMaybeUnary (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:10206:23)\n    at Parser.parseExprOps (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:10071:23)\n    at Parser.parseMaybeConditional (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:10045:23)\n    at Parser.parseMaybeAssign (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:10008:21)\n    at C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:9975:39\n    at Parser.allowInAnd (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:11647:12)\n    at Parser.parseMaybeAssignAllowIn (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:9975:17)\n    at Parser.parseExprListItem (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:11407:18)\n    at Parser.parseCallExpressionArguments (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:10448:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:10356:29)\n    at Parser.parseSubscript (C:\\Users\\Kaprisylenka\\Desktop\\PrettyToDoList\\todo\\node_modules\\@babel\\parser\\lib\\index.js:10292:19)");

/***/ })

/******/ });
//# sourceMappingURL=index-6fa6136fe98075f24cdb.js.map