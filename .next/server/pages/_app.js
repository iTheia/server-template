module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Loader/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Loader/index.tsx ***!
  \*****************************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\marti\\projects\\server-template\\components\\Loader\\index.tsx";
const Loader = ({
  type = "full"
}) => {
  if (type === "block") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 34
  }, undefined);
  if (type === "spinning") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 37
  }, undefined);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "...loader"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 12
  }, undefined);
};

/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/*! exports provided: ENDPOINT, HOST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/constants/variables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENDPOINT", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["ENDPOINT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HOST", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["HOST"]; });



/***/ }),

/***/ "./src/constants/variables.ts":
/*!************************************!*\
  !*** ./src/constants/variables.ts ***!
  \************************************/
/*! exports provided: ENDPOINT, HOST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDPOINT", function() { return ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOST", function() { return HOST; });
const ENDPOINT = "/api/v1/";
const HOST = "localhost:3000";

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers */ "./src/providers/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _providers_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/App */ "./src/providers/App/index.tsx");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loader */ "./src/components/Loader/index.tsx");

var _jsxFileName = "C:\\Users\\marti\\projects\\server-template\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  const {
    isLoading,
    setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_providers_App__WEBPACK_IMPORTED_MODULE_4__["AppContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {}, [setIsLoading]);
  if (isLoading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Loader__WEBPACK_IMPORTED_MODULE_5__["Loader"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 27
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_providers__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/providers/App/index.tsx":
/*!*************************************!*\
  !*** ./src/providers/App/index.tsx ***!
  \*************************************/
/*! exports provided: AppContext, AppProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProvider", function() { return AppProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\marti\\projects\\server-template\\providers\\App\\index.tsx";

const AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
  isLoading: false,
  setIsLoading: () => null
});
const AppProvider = ({
  children
}) => {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AppContext.Provider, {
    value: {
      isLoading,
      setIsLoading
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/providers/Auth/index.tsx":
/*!**************************************!*\
  !*** ./src/providers/Auth/index.tsx ***!
  \**************************************/
/*! exports provided: AuthContext, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./src/providers/App/index.tsx");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.ts");

var _jsxFileName = "C:\\Users\\marti\\projects\\server-template\\providers\\Auth\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
  currentUser: false,
  signUp: async () => {},
  logOut: async () => {},
  logIn: async () => {},
  getToken: () => ""
});
const AuthProvider = ({
  children
}) => {
  const {
    0: currentUser,
    1: setCurrentUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: token,
    1: setToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_2__["AppContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setIsLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`${_constants__WEBPACK_IMPORTED_MODULE_5__["ENDPOINT"]}auth/current`, {
      withCredentials: true
    }).then(response => setSession(response));
    setIsLoading(false);
  }, [setIsLoading]);

  async function setSession(response) {
    try {
      const {
        data
      } = response;

      if (data.error) {
        throw new Error(data.message);
      }

      const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(data.token);
      setCurrentUser(prev => _objectSpread(_objectSpread({}, prev), decoded));
      setToken(data.token);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  async function signUp(values) {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`${_constants__WEBPACK_IMPORTED_MODULE_5__["ENDPOINT"]}auth/signup`, values);
      setSession(response);
    } catch (error) {
      alert(error);
    }
  }

  async function logOut() {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`${_constants__WEBPACK_IMPORTED_MODULE_5__["ENDPOINT"]}auth/close`);
      setToken("");
      setCurrentUser(false);
    } catch (error) {
      alert(error);
    }
  }

  async function logIn(values) {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`${_constants__WEBPACK_IMPORTED_MODULE_5__["ENDPOINT"]}auth/login`, values);
      setSession(response);
    } catch (error) {
      alert(error);
    }
  }

  function getToken() {
    if (token === "") {
      return "Bearrer ";
    }

    const {
      exp
    } = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token);

    if (exp < Date.now().valueOf() / 1000) {
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`${_constants__WEBPACK_IMPORTED_MODULE_5__["ENDPOINT"]}auth/current`).then(response => setSession(response)).catch(() => {
        setToken("");
        setCurrentUser(false);
      });
    }

    return `Bearrer ${token}`;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: {
      currentUser,
      getToken,
      logIn,
      logOut,
      signUp
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/providers/index.tsx":
/*!*********************************!*\
  !*** ./src/providers/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Providers; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/providers/App/index.tsx");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Auth */ "./src/providers/Auth/index.tsx");

var _jsxFileName = "C:\\Users\\marti\\projects\\server-template\\providers\\index.tsx";



function Providers({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_2__["AppProvider"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Auth__WEBPACK_IMPORTED_MODULE_3__["AuthProvider"], {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2FkZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvdmFyaWFibGVzLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvdmlkZXJzL0FwcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcHJvdmlkZXJzL0F1dGgvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3Byb3ZpZGVycy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqd3QtZGVjb2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJMb2FkZXIiLCJ0eXBlIiwiRU5EUE9JTlQiLCJwcm9jZXNzIiwiSE9TVCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJ1c2VFZmZlY3QiLCJjcmVhdGVDb250ZXh0IiwiQXBwUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiQXV0aENvbnRleHQiLCJjdXJyZW50VXNlciIsInNpZ25VcCIsImxvZ091dCIsImxvZ0luIiwiZ2V0VG9rZW4iLCJBdXRoUHJvdmlkZXIiLCJzZXRDdXJyZW50VXNlciIsInRva2VuIiwic2V0VG9rZW4iLCJBeGlvcyIsImdldCIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsInNldFNlc3Npb24iLCJkYXRhIiwiZXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiLCJkZWNvZGVkIiwiSnd0RGVjb2RlIiwicHJldiIsInZhbHVlcyIsInBvc3QiLCJhbGVydCIsImV4cCIsIkRhdGUiLCJub3ciLCJ2YWx1ZU9mIiwiY2F0Y2giLCJQcm92aWRlcnMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRk8sTUFBTUEsTUFBaUIsR0FBRyxDQUFDO0FBQUVDLE1BQUksR0FBRztBQUFULENBQUQsS0FBdUI7QUFDcEQsTUFBSUEsSUFBSSxLQUFLLE9BQWIsRUFBc0Isb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBRXRCLE1BQUlBLElBQUksS0FBSyxVQUFiLEVBQXlCLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUV6QixzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsQ0FOTSxDOzs7Ozs7Ozs7Ozs7QUNMUDtBQUFBO0FBQUE7QUFB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Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHR5cGU6IFwiZnVsbFwiIHwgXCJibG9ja1wiIHwgXCJzcGlubmluZ1wiO1xyXG59XHJcbmV4cG9ydCBjb25zdCBMb2FkZXI6IEZDPFByb3BzPiA9ICh7IHR5cGUgPSBcImZ1bGxcIiB9KSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJibG9ja1wiKSByZXR1cm4gPGRpdj48L2Rpdj47XHJcblxyXG4gICAgaWYgKHR5cGUgPT09IFwic3Bpbm5pbmdcIikgcmV0dXJuIDxkaXY+PC9kaXY+O1xyXG5cclxuICAgIHJldHVybiA8ZGl2Pi4uLmxvYWRlcjwvZGl2PjtcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vdmFyaWFibGVzXCI7XHJcbiIsImV4cG9ydCBjb25zdCBFTkRQT0lOVCA9IHByb2Nlc3MuZW52LkVORFBPSU5UO1xyXG5leHBvcnQgY29uc3QgSE9TVCA9IHByb2Nlc3MuZW52LkhPU1Q7XHJcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFByb3ZpZGVycyBmcm9tIFwiLi4vcHJvdmlkZXJzXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tIFwiLi4vcHJvdmlkZXJzL0FwcFwiO1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGVyXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmcgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge30sIFtzZXRJc0xvYWRpbmddKTtcblxuICAgIGlmIChpc0xvYWRpbmcpIHJldHVybiA8TG9hZGVyIC8+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFByb3ZpZGVycz5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9Qcm92aWRlcnM+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJQXBwQ29udGV4dCB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SUFwcENvbnRleHQ+KHtcclxuICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICBzZXRJc0xvYWRpbmc6ICgpID0+IG51bGwsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwcFByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBpc0xvYWRpbmcsIHNldElzTG9hZGluZyB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUF1dGhDb250ZXh0LCBJVXNlciwgSUxvZ0luLCBJU2lnblVwLCBJUmVzcG9uc2UgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uL0FwcFwiO1xyXG5pbXBvcnQgSnd0RGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgRU5EUE9JTlQgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PElBdXRoQ29udGV4dD4oe1xyXG4gICAgY3VycmVudFVzZXI6IGZhbHNlLFxyXG4gICAgc2lnblVwOiBhc3luYyAoKSA9PiB7fSxcclxuICAgIGxvZ091dDogYXN5bmMgKCkgPT4ge30sXHJcbiAgICBsb2dJbjogYXN5bmMgKCkgPT4ge30sXHJcbiAgICBnZXRUb2tlbjogKCkgPT4gXCJcIixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGU8SVVzZXIgfCBmYWxzZT4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gICAgY29uc3QgeyBzZXRJc0xvYWRpbmcgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgQXhpb3MuZ2V0KGAke0VORFBPSU5UfWF1dGgvY3VycmVudGAsIHtcclxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiBzZXRTZXNzaW9uKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIFtzZXRJc0xvYWRpbmddKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzZXRTZXNzaW9uKHJlc3BvbnNlOiBJUmVzcG9uc2UpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZGVjb2RlZCA9IEp3dERlY29kZShkYXRhLnRva2VuKSBhcyBJVXNlcjtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFVzZXIoKHByZXYpID0+ICh7IC4uLnByZXYsIC4uLmRlY29kZWQgfSkpO1xyXG4gICAgICAgICAgICBzZXRUb2tlbihkYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzaWduVXAodmFsdWVzOiBJU2lnblVwKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KGAke0VORFBPSU5UfWF1dGgvc2lnbnVwYCwgdmFsdWVzKTtcclxuICAgICAgICAgICAgc2V0U2Vzc2lvbihyZXNwb25zZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBsb2dPdXQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgQXhpb3MuZ2V0KGAke0VORFBPSU5UfWF1dGgvY2xvc2VgKTtcclxuICAgICAgICAgICAgc2V0VG9rZW4oXCJcIik7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRVc2VyKGZhbHNlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvZ0luKHZhbHVlczogSUxvZ0luKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5wb3N0KGAke0VORFBPSU5UfWF1dGgvbG9naW5gLCB2YWx1ZXMpO1xyXG4gICAgICAgICAgICBzZXRTZXNzaW9uKHJlc3BvbnNlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgaWYgKHRva2VuID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkJlYXJyZXIgXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgZXhwIH0gPSBKd3REZWNvZGUodG9rZW4pIGFzIGFueTtcclxuICAgICAgICBpZiAoZXhwIDwgRGF0ZS5ub3coKS52YWx1ZU9mKCkgLyAxMDAwKSB7XHJcbiAgICAgICAgICAgIEF4aW9zLmdldChgJHtFTkRQT0lOVH1hdXRoL2N1cnJlbnRgKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzZXRTZXNzaW9uKHJlc3BvbnNlKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VG9rZW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFVzZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgQmVhcnJlciAke3Rva2VufWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3sgY3VycmVudFVzZXIsIGdldFRva2VuLCBsb2dJbiwgbG9nT3V0LCBzaWduVXAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcHBQcm92aWRlciB9IGZyb20gXCIuL0FwcFwiO1xyXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi9BdXRoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm92aWRlcnMoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHBQcm92aWRlcj5cclxuICAgICAgICAgICAgPEF1dGhQcm92aWRlcj57Y2hpbGRyZW59PC9BdXRoUHJvdmlkZXI+XHJcbiAgICAgICAgPC9BcHBQcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiand0LWRlY29kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==