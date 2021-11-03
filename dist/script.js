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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_showMobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/showMobileMenu */ "./src/js/modules/showMobileMenu.js");
/* harmony import */ var _modules_arrowLift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/arrowLift */ "./src/js/modules/arrowLift.js");
/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordeon */ "./src/js/modules/accordeon.js");



Object(_modules_showMobileMenu__WEBPACK_IMPORTED_MODULE_0__["default"])('.menu__btn', 'menu__btn_active', '.menu__background', 'menu__background_active', '.menu__wrapper', 'menu__wrapper_active', 'overflow-hidden');
Object(_modules_arrowLift__WEBPACK_IMPORTED_MODULE_1__["default"])('.arrow-up', 'arrow-up_show', '.network');
Object(_modules_accordeon__WEBPACK_IMPORTED_MODULE_2__["default"])('.questions__block-wrapper', 'questions__block-wrapper_active', '.questions__block-desc');

/***/ }),

/***/ "./src/js/modules/accordeon.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordeon.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return accordeon; });
function accordeon(accordeonTrigger, triggerActiveClass, accordeonTextSelector) {
  let triggerBlock = document.querySelectorAll(accordeonTrigger),
      accordeonText = document.querySelectorAll(accordeonTextSelector);
  triggerBlock.forEach((item, index) => {
    item.addEventListener('click', () => {
      if (!item.classList.contains(triggerActiveClass)) {
        closeAllModals(item, index);
        item.classList.add(triggerActiveClass);
        accordeonText[index].style.maxHeight = accordeonText[index].scrollHeight + 'px';
      } else {
        accordeonText[index].style.maxHeight = '0px';
        item.classList.remove(triggerActiveClass);
      }
    });
  });

  function closeAllModals(item, index) {
    triggerBlock.forEach((item, index) => {
      accordeonText[index].style.maxHeight = '0px';
      item.classList.remove(triggerActiveClass);
    });
  }
}

/***/ }),

/***/ "./src/js/modules/arrowLift.js":
/*!*************************************!*\
  !*** ./src/js/modules/arrowLift.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return arrowLift; });
function arrowLift(arrowSelector, arrowShowStyle, sectionSelector) {
  let arrow = document.querySelector(arrowSelector),
      section = document.querySelector(sectionSelector);
  document.addEventListener('scroll', () => {
    if (scrollY >= section.offsetTop) {
      if (!arrow.classList.contains(arrowShowStyle)) {
        arrow.classList.add(arrowShowStyle);
      }
    } else {
      if (arrow.classList.contains(arrowShowStyle)) {
        arrow.classList.remove(arrowShowStyle);
      }
    }
  });
  arrow.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });
}

/***/ }),

/***/ "./src/js/modules/showMobileMenu.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMobileMenu.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return showModileMenu; });
function showModileMenu(btnSelector, btnActiveClass, menuBgSelector, menuBgActiveClass, menuWrapperSelector, menuWrapperActiveClass, overflowClass) {
  let btn = document.querySelector(btnSelector),
      menuBg = document.querySelector(menuBgSelector),
      menuWrapper = document.querySelector(menuWrapperSelector);
  btn.addEventListener('click', () => {
    if (!btn.classList.contains(btnActiveClass)) {
      btn.classList.add(btnActiveClass);
      menuBg.classList.add(menuBgActiveClass);
      menuWrapper.classList.add(menuWrapperActiveClass);
      document.body.classList.add(overflowClass);
    } else {
      btn.classList.remove(btnActiveClass);
      menuBg.classList.remove(menuBgActiveClass);
      menuWrapper.classList.remove(menuWrapperActiveClass);
      document.body.classList.remove(overflowClass);
    }
  });
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map