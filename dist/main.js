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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n\n\n\n\nconst tab = () => {\n  const mainDocument = document.querySelector(\"#content\");\n  const navbar = document.createElement(\"navbar\");\n  navbar.id = \"navbar\";\n\n  const list = document.createElement(\"ul\");\n  list.classList.add(\"nav-list\");\n\n  const menuElements = [\"Home\", \"Menu\", \"Contacts\"];\n\n  for (let el = 0; el < menuElements.length; el++) {\n    let li = document.createElement(\"li\");\n    let anchor = document.createElement(\"a\");\n\n    anchor.innerText = `${menuElements[el]}`;\n    anchor.id = `${menuElements[el]}`;\n    anchor.classList.add(\"nav-link\");\n    anchor.addEventListener(\"click\", () => {\n      getMenuToShow(menuElements[el]);\n    });\n    anchor.href = \"#\";\n\n    li.appendChild(anchor);\n    list.appendChild(li);\n  }\n  navbar.appendChild(list);\n\n  mainDocument.appendChild(navbar);\n};\n\nfunction getMenuToShow(element) {\n  cleaner();\n  switch (element) {\n    case \"Home\":\n      Object(_modules_home__WEBPACK_IMPORTED_MODULE_2__[\"home\"])();\n      break;\n    case \"Menu\":\n      Object(_modules_menu__WEBPACK_IMPORTED_MODULE_0__[\"menu\"])();\n      break;\n    case \"Contacts\":\n      Object(_modules_contact__WEBPACK_IMPORTED_MODULE_1__[\"contact\"])();\n      break;\n    default:\n      break;\n  }\n  return;\n}\n\nconst cleaner = () => {\n  Object(_modules_contact__WEBPACK_IMPORTED_MODULE_1__[\"cleanContact\"])();\n  Object(_modules_menu__WEBPACK_IMPORTED_MODULE_0__[\"menuPage\"])();\n  Object(_modules_home__WEBPACK_IMPORTED_MODULE_2__[\"homePage\"])();\n};\n\ntab();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/*! exports provided: contact, cleanContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contact\", function() { return contact; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cleanContact\", function() { return cleanContact; });\nconst mainDocument = document.querySelector(\"#content\");\nconst infoContainer = document.createElement(\"div\");\n\nconst contact = () => {\n  infoContainer.classList.add(\"info-container\");\n\n  const information = document.createElement(\"div\");\n  information.classList.add(\"info\");\n\n  const title = document.createElement(\"h4\");\n  const paragraph = document.createElement(\"p\");\n\n  title.textContent = \"Contact us at: \";\n\n  paragraph.innerHTML = ` Number: 0000000000 <br> Email: name@email.com `;\n\n  information.appendChild(title);\n  information.appendChild(paragraph);\n  infoContainer.appendChild(information);\n  mainDocument.appendChild(infoContainer);\n};\n\nconst cleanContact = () => {\n  infoContainer.innerHTML = null;\n  mainDocument.appendChild(infoContainer);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/*! exports provided: home, homePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"home\", function() { return home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homePage\", function() { return homePage; });\nconst mainDocument = document.querySelector(\"#content\");\nconst infoContainer = document.createElement(\"div\");\n\nconst home = () => {\n  infoContainer.classList.add(\"info-container\");\n\n  const information = document.createElement(\"div\");\n  information.classList.add(\"info\");\n\n  const image = document.createElement(\"img\");\n  image.classList.add(\"image\");\n  const paragraph = document.createElement(\"p\");\n\n  paragraph.textContent = `This is my restaurant page created with javascript`;\n\n  information.appendChild(image);\n  information.appendChild(paragraph);\n  infoContainer.appendChild(information);\n  mainDocument.appendChild(infoContainer);\n};\n\nconst homePage = () => {\n  infoContainer.innerHTML = null;\n  mainDocument.appendChild(infoContainer);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/*! exports provided: menu, menuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuPage\", function() { return menuPage; });\nconst mainDocument = document.querySelector(\"#content\");\nconst infoContainer = document.createElement(\"div\");\n\nconst menu = () => {\n  infoContainer.classList.add(\"info-container\");\n\n  const information = document.createElement(\"div\");\n  information.classList.add(\"info\");\n\n  const title = document.createElement(\"h4\");\n  title.textContent = \"Choose what you want\";\n\n  const image1 = document.createElement(\"img\");\n  image1.classList.add(\"image1\");\n  const image2 = document.createElement(\"img\");\n  image2.classList.add(\"image2\");\n  const image3 = document.createElement(\"img\");\n  image3.classList.add(\"image3\");\n\n  information.appendChild(title);\n  information.appendChild(image1);\n  information.appendChild(image2);\n  information.appendChild(image3);\n  infoContainer.appendChild(information);\n  mainDocument.appendChild(infoContainer);\n};\n\nconst menuPage = () => {\n  infoContainer.innerHTML = null;\n  mainDocument.appendChild(infoContainer);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/modules/menu.js?");

/***/ })

/******/ });