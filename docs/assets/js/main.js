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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/polyfill-nodelist-foreach/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/polyfill-nodelist-foreach/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (window && window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}


/***/ }),

/***/ "./node_modules/svgxuse/svgxuse.js":
/*!*****************************************!*\
  !*** ./node_modules/svgxuse/svgxuse.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
/*jslint browser: true */
/*global XDomainRequest, MutationObserver, window */
(function () {
    "use strict";
    if (typeof window !== "undefined" && window.addEventListener) {
        var cache = Object.create(null); // holds xhr objects to prevent multiple requests
        var checkUseElems;
        var tid; // timeout id
        var debouncedCheck = function () {
            clearTimeout(tid);
            tid = setTimeout(checkUseElems, 100);
        };
        var unobserveChanges = function () {
            return;
        };
        var observeChanges = function () {
            var observer;
            window.addEventListener("resize", debouncedCheck, false);
            window.addEventListener("orientationchange", debouncedCheck, false);
            if (window.MutationObserver) {
                observer = new MutationObserver(debouncedCheck);
                observer.observe(document.documentElement, {
                    childList: true,
                    subtree: true,
                    attributes: true
                });
                unobserveChanges = function () {
                    try {
                        observer.disconnect();
                        window.removeEventListener("resize", debouncedCheck, false);
                        window.removeEventListener("orientationchange", debouncedCheck, false);
                    } catch (ignore) {}
                };
            } else {
                document.documentElement.addEventListener("DOMSubtreeModified", debouncedCheck, false);
                unobserveChanges = function () {
                    document.documentElement.removeEventListener("DOMSubtreeModified", debouncedCheck, false);
                    window.removeEventListener("resize", debouncedCheck, false);
                    window.removeEventListener("orientationchange", debouncedCheck, false);
                };
            }
        };
        var createRequest = function (url) {
            // In IE 9, cross origin requests can only be sent using XDomainRequest.
            // XDomainRequest would fail if CORS headers are not set.
            // Therefore, XDomainRequest should only be used with cross origin requests.
            function getOrigin(loc) {
                var a;
                if (loc.protocol !== undefined) {
                    a = loc;
                } else {
                    a = document.createElement("a");
                    a.href = loc;
                }
                return a.protocol.replace(/:/g, "") + a.host;
            }
            var Request;
            var origin;
            var origin2;
            if (window.XMLHttpRequest) {
                Request = new XMLHttpRequest();
                origin = getOrigin(location);
                origin2 = getOrigin(url);
                if (Request.withCredentials === undefined && origin2 !== "" && origin2 !== origin) {
                    Request = XDomainRequest || undefined;
                } else {
                    Request = XMLHttpRequest;
                }
            }
            return Request;
        };
        var xlinkNS = "http://www.w3.org/1999/xlink";
        checkUseElems = function () {
            var base;
            var bcr;
            var fallback = ""; // optional fallback URL in case no base path to SVG file was given and no symbol definition was found.
            var hash;
            var href;
            var i;
            var inProgressCount = 0;
            var isHidden;
            var Request;
            var url;
            var uses;
            var xhr;
            function observeIfDone() {
                // If done with making changes, start watching for chagnes in DOM again
                inProgressCount -= 1;
                if (inProgressCount === 0) { // if all xhrs were resolved
                    unobserveChanges(); // make sure to remove old handlers
                    observeChanges(); // watch for changes to DOM
                }
            }
            function attrUpdateFunc(spec) {
                return function () {
                    if (cache[spec.base] !== true) {
                        spec.useEl.setAttributeNS(xlinkNS, "xlink:href", "#" + spec.hash);
                        if (spec.useEl.hasAttribute("href")) {
                            spec.useEl.setAttribute("href", "#" + spec.hash);
                        }
                    }
                };
            }
            function onloadFunc(xhr) {
                return function () {
                    var body = document.body;
                    var x = document.createElement("x");
                    var svg;
                    xhr.onload = null;
                    x.innerHTML = xhr.responseText;
                    svg = x.getElementsByTagName("svg")[0];
                    if (svg) {
                        svg.setAttribute("aria-hidden", "true");
                        svg.style.position = "absolute";
                        svg.style.width = 0;
                        svg.style.height = 0;
                        svg.style.overflow = "hidden";
                        body.insertBefore(svg, body.firstChild);
                    }
                    observeIfDone();
                };
            }
            function onErrorTimeout(xhr) {
                return function () {
                    xhr.onerror = null;
                    xhr.ontimeout = null;
                    observeIfDone();
                };
            }
            unobserveChanges(); // stop watching for changes to DOM
            // find all use elements
            uses = document.getElementsByTagName("use");
            for (i = 0; i < uses.length; i += 1) {
                try {
                    bcr = uses[i].getBoundingClientRect();
                } catch (ignore) {
                    // failed to get bounding rectangle of the use element
                    bcr = false;
                }
                href = uses[i].getAttribute("href")
                        || uses[i].getAttributeNS(xlinkNS, "href")
                        || uses[i].getAttribute("xlink:href");
                if (href && href.split) {
                    url = href.split("#");
                } else {
                    url = ["", ""];
                }
                base = url[0];
                hash = url[1];
                isHidden = bcr && bcr.left === 0 && bcr.right === 0 && bcr.top === 0 && bcr.bottom === 0;
                if (bcr && bcr.width === 0 && bcr.height === 0 && !isHidden) {
                    // the use element is empty
                    // if there is a reference to an external SVG, try to fetch it
                    // use the optional fallback URL if there is no reference to an external SVG
                    if (fallback && !base.length && hash && !document.getElementById(hash)) {
                        base = fallback;
                    }
                    if (uses[i].hasAttribute("href")) {
                        uses[i].setAttributeNS(xlinkNS, "xlink:href", href);
                    }
                    if (base.length) {
                        // schedule updating xlink:href
                        xhr = cache[base];
                        if (xhr !== true) {
                            // true signifies that prepending the SVG was not required
                            setTimeout(attrUpdateFunc({
                                useEl: uses[i],
                                base: base,
                                hash: hash
                            }), 0);
                        }
                        if (xhr === undefined) {
                            Request = createRequest(base);
                            if (Request !== undefined) {
                                xhr = new Request();
                                cache[base] = xhr;
                                xhr.onload = onloadFunc(xhr);
                                xhr.onerror = onErrorTimeout(xhr);
                                xhr.ontimeout = onErrorTimeout(xhr);
                                xhr.open("GET", base);
                                xhr.send();
                                inProgressCount += 1;
                            }
                        }
                    }
                } else {
                    if (!isHidden) {
                        if (cache[base] === undefined) {
                            // remember this URL if the use element was not empty and no request was sent
                            cache[base] = true;
                        } else if (cache[base].onload) {
                            // if it turns out that prepending the SVG is not necessary,
                            // abort the in-progress xhr.
                            cache[base].abort();
                            delete cache[base].onload;
                            cache[base] = true;
                        }
                    } else if (base.length && cache[base]) {
                        setTimeout(attrUpdateFunc({
                            useEl: uses[i],
                            base: base,
                            hash: hash
                        }), 0);
                    }
                }
            }
            uses = "";
            inProgressCount += 1;
            observeIfDone();
        };
        var winLoad;
        winLoad = function () {
            window.removeEventListener("load", winLoad, false); // to prevent memory leaks
            tid = setTimeout(checkUseElems, 0);
        };
        if (document.readyState !== "complete") {
            // The load event fires when all resources have finished loading, which allows detecting whether SVG use elements are empty.
            window.addEventListener("load", winLoad, false);
        } else {
            // No need to add a listener if the document is already loaded, initialize immediately.
            winLoad();
        }
    }
}());


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accordion.js */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_mobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mobileMenu */ "./src/js/modules/mobileMenu.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/data */ "./src/js/modules/data.js");
__webpack_require__(/*! polyfill-nodelist-foreach */ "./node_modules/polyfill-nodelist-foreach/index.js"); // Полифил для поддержки метода forEach в IE11+ и Safari9
__webpack_require__(/*! svgxuse */ "./node_modules/svgxuse/svgxuse.js"); // Полифил для поддержки IE11+ и старыми браузерами использования SVG через use 

 // Аккордион
 // Мобильное меню
 // Модалки
// import slider from './modules/slider'; // Слайдер
// import location from './modules/location'; // Карта на главной
 // Табы с формами на главной
// import strRun from './modules/strRun'; // Бегущая строка кнопка в header


// location();
Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_modules_data__WEBPACK_IMPORTED_MODULE_4__["default"])();
// strRun();
Object(_modules_accordion_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_mobileMenu__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])();
// slider();

/***/ }),

/***/ "./src/js/libs/accordion-plagin.min.js":
/*!*********************************************!*\
  !*** ./src/js/libs/accordion-plagin.min.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AccordionPlagin = /*#__PURE__*/function () {
  function AccordionPlagin(t, i, s, e, a) {
    var c = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    _classCallCheck(this, AccordionPlagin);
    this.accordion = t, this.accordItems = i, this.accordItemsContent = s, this.activeContentClass = e, this.activeTitleClass = a, this.options = c;
  }
  _createClass(AccordionPlagin, [{
    key: "_showText",
    value: function _showText(t, i) {
      i ? (t.style.height = t.scrollHeight + this._accordItemsHeight(this.options.itemPaddingTop, this.options.itemPaddingBottom) + "px", t.classList.add(this.activeContentClass), i.classList.add(this.activeTitleClass)) : (t.style.height = t.scrollHeight + this._accordItemsHeight(this.options.itemPaddingTop, this.options.itemPaddingBottom) + "px", t.classList.add(this.activeContentClass));
    }
  }, {
    key: "_hideText",
    value: function _hideText(t, i) {
      i ? (t.style.height = "0px", t.classList.remove(this.activeContentClass), i.classList.remove(this.activeTitleClass)) : (t.style.height = "0px", t.classList.remove(this.activeContentClass));
    }
  }, {
    key: "_activeItemsHandler",
    value: function _activeItemsHandler(t, i, s) {
      t[i].classList.contains(this.activeContentClass) ? this._hideText(t[i], s) : this._showText(t[i], s);
    }
  }, {
    key: "_accordItemsManyHandler",
    value: function _accordItemsManyHandler(t, i, s) {
      var _this = this;
      i.forEach(function (e, a) {
        e.addEventListener("click", function () {
          s || i.forEach(function (i, s) {
            _this._hideText(t[s], i);
          }), _this._activeItemsHandler(t, a, e);
        });
      });
    }
  }, {
    key: "_accordItemsSingleHandler",
    value: function _accordItemsSingleHandler(t, i) {
      var _this2 = this;
      i.addEventListener("click", function () {
        t.classList.contains(_this2.activeContentClass) ? _this2._hideText(t, i) : _this2._showText(t, i);
      });
    }
  }, {
    key: "_accordItemsHeight",
    value: function _accordItemsHeight(t, i) {
      return t + i;
    }
  }, {
    key: "accordInit",
    value: function accordInit() {
      if (document.querySelector(this.accordion)) {
        var t, i;
        if (document.querySelectorAll(this.accordItems).length > 1) {
          if (t = document.querySelectorAll(this.accordItems), i = document.querySelectorAll(this.accordItemsContent), this.options.initialActiveItem && this.options.initialActiveItemIndex) {
            if ("number" == typeof this.options.initialActiveItemIndex && (i[this.options.initialActiveItemIndex].classList.add(this.activeContentClass), i[this.options.initialActiveItemIndex].style.height = i[this.options.initialActiveItemIndex].scrollHeight + "px", t[this.options.initialActiveItemIndex].classList.add(this.activeTitleClass)), Array.isArray(this.options.initialActiveItemIndex)) for (var s = 0; s < this.options.initialActiveItemIndex.length; s++) i[this.options.initialActiveItemIndex[s]].classList.add(this.activeContentClass), i[this.options.initialActiveItemIndex[s]].style.height = i[this.options.initialActiveItemIndex[s]].scrollHeight + "px", t[this.options.initialActiveItemIndex[s]].classList.add(this.activeTitleClass);
          } else i[0].classList.add(this.activeContentClass), t[0].classList.add(this.activeTitleClass), i[0].style.height = i[0].scrollHeight + "px";
          this.options.anyActiveItems ? this._accordItemsManyHandler(i, t, this.options.anyActiveItems) : this._accordItemsManyHandler(i, t);
        } else t = document.querySelector(this.accordItems), i = document.querySelector(this.accordItemsContent), this._accordItemsSingleHandler(i, t);
      }
    }
  }]);
  return AccordionPlagin;
}();
/* harmony default export */ __webpack_exports__["default"] = (AccordionPlagin);

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return accordion; });
/* harmony import */ var _libs_accordion_plagin_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../libs/accordion-plagin.min.js */ "./src/js/libs/accordion-plagin.min.js");

function accordion() {
  // const accordion = new AccordionPlagin('.accordion', '.accordion__item', '.accordion__content', 'active', 'active', {
  //     initialActiveItem: true,
  //     initialActiveItemIndex: 0,
  //     anyActiveItems: false,
  //     itemPaddingTop: 10,
  //     itemPaddingBottom: 20
  // });

  // accordion.accordInit();

  // Получаем все элементы с классом accordion__item
  var accordionItems = document.querySelectorAll('.accordion__item');

  // Перебираем каждый элемент accordion__item
  accordionItems.forEach(function (item, index) {
    // Получаем дочерний элемент с классом accordion__content
    var content = item.querySelector('.accordion__content');

    // Добавляем обработчик события клика
    item.addEventListener('click', function () {
      // Проверяем, есть ли класс active у текущего элемента и его дочернего элемента
      var isActive = item.classList.contains('active');
      var isContentActive = content.classList.contains('active');

      // Удаляем класс active у всех элементов с классом accordion__item и accordion__content
      accordionItems.forEach(function (item) {
        return item.classList.remove('active');
      });
      document.querySelectorAll('.accordion__content').forEach(function (content) {
        content.classList.remove('active');
        content.style.height = 0;
      });

      // Добавляем или удаляем класс active в зависимости от наличия у текущего элемента и его дочернего элемента
      if (!isActive) {
        item.classList.add('active');
        content.classList.add('active');
        content.style.height = "".concat(content.scrollHeight, "px"); // Устанавливаем плавную высоту элемента через scrollHeight
      }
    });

    // Изначально первый элемент аккордеона активен
    if (index === 0) {
      item.classList.add('active');
      content.classList.add('active');
      content.style.height = "".concat(content.scrollHeight, "px"); // Устанавливаем плавную высоту элемента через scrollHeight
    }
  });
}

/***/ }),

/***/ "./src/js/modules/data.js":
/*!********************************!*\
  !*** ./src/js/modules/data.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return data; });
function data() {
  if (document.querySelector('.geography__inner-right__img')) {
    var locations = document.querySelectorAll('.location');
    var locationDescWrap = document.querySelector('.location-desc__wrap');
    var geographyInnerRightImg = document.querySelector('.geography__inner-right__img');
    var currentImg = document.querySelector('.location-desc');
    console.log(currentImg.src);
    geographyInnerRightImg.addEventListener('mouseover', function () {
      locations.forEach(function (location, i) {
        location.addEventListener('mouseover', function (e) {
          var number = e.target.getAttribute('data-number');
          var newSrc = location.src;
          newSrc = newSrc.replace('icons/location_1', 'geography_' + number);
          newSrc = newSrc.replace('svg', 'png');
          currentImg.src = newSrc;
          console.log(newSrc);
          var locationBounds = location.getBoundingClientRect();
          var geographyInnerRightImgBounds = geographyInnerRightImg.getBoundingClientRect();
          var x = locationBounds.left - geographyInnerRightImgBounds.left + locationBounds.width / 2;
          var y = locationBounds.top - geographyInnerRightImgBounds.top + locationBounds.height / 2;
          var screenW = window.screen.width;
          if (screenW < 1024) {
            locationDescWrap.style.top = y - 86 + 'px';
          } else if (screenW >= 1024) {
            locationDescWrap.style.top = y - 260 + 'px';
          }
          locationDescWrap.style.left = "".concat(x, "px");
          locationDescWrap.style.display = 'block';
        });
      });
    });
    geographyInnerRightImg.addEventListener('mouseleave', function () {
      locationDescWrap.style.display = 'none';
      currentImg.src = ' ';
    });
  }
}

/***/ }),

/***/ "./src/js/modules/mobileMenu.js":
/*!**************************************!*\
  !*** ./src/js/modules/mobileMenu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mobileMenu; });
function mobileMenu() {
  if (document.getElementById('menu__button')) {
    var hamburger = document.getElementById('menu__button');
    var _mobileMenu = document.querySelector('.nav__header');
    var mobileMenuItems = document.querySelectorAll('.nav ul li a');
    var htmlElement = document.getElementsByTagName('html')[0];
    var body = document.body;
    var screenWidth = window.innerWidth;
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      _mobileMenu.classList.toggle('nav__header--active');
      body.classList.toggle('no-scroll');
      htmlElement.classList.toggle('no-scroll');
    });
    window.addEventListener('resize', function () {
      screenWidth = window.innerWidth;
      if (screenWidth < 1024) {
        linksClick();
      }
      if (screenWidth >= 1024) {
        hamburger.classList.remove('active');
        _mobileMenu.classList.remove('nav__header--active');
        body.classList.remove('no-scroll');
        htmlElement.classList.remove('no-scroll');
      }
    });
    function linksClick() {
      mobileMenuItems.forEach(function (link) {
        link.addEventListener('click', function (e) {
          if (screenWidth < 1024) {
            hamburger.classList.remove('active');
            _mobileMenu.classList.remove('nav__header--active');
            body.classList.remove('no-scroll');
            htmlElement.classList.remove('no-scroll');
          }
        });
      });
    }
    linksClick();
  }
}

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modal; });
// import phoneMask from './../modules/phoneMask';

function modal() {
  // Get the service__icon elements
  var serviceIcons = document.querySelectorAll('.service__icon');

  // Get the modal elements
  var modalAsk = document.querySelector('.modal-ask');
  var modalCall = document.querySelector('.modal-call');
  var modalWrite = document.querySelector('.modal-write');

  // Get the close elements
  var closeElements = document.querySelectorAll('.close');

  // Get the wrapper and body elements
  var wrapper = document.querySelector('.wrapper');
  var html = document.documentElement;

  // Add event listeners to service__icon elements
  serviceIcons.forEach(function (icon, index) {
    icon.addEventListener('click', function () {
      // Add active class to the corresponding modal element
      if (index === 0 || index === 3 || index === 6) {
        modalAsk.classList.add('modal-ask--active');
      } else if (index === 1 || index === 4 || index === 7) {
        modalCall.classList.add('modal-call--active');
      } else if (index === 2 || index === 5 || index === 8) {
        modalWrite.classList.add('modal-write--active');
      }

      // Add overlay class to the wrapper element
      wrapper.classList.add('overlay');

      // Add no-scroll class to the body element
      html.classList.add('no-scroll');
    });
  });

  // Add event listeners to close elements
  closeElements.forEach(function (close) {
    close.addEventListener('click', function () {
      // Remove active classes from modal elements
      modalAsk.classList.remove('modal-ask--active');
      modalCall.classList.remove('modal-call--active');
      modalWrite.classList.remove('modal-write--active');

      // Remove overlay class from the wrapper element
      wrapper.classList.remove('overlay');

      // Remove no-scroll class from the body element
      html.classList.remove('no-scroll');
    });
  });

  // Add event listener to wrapper element
  // wrapper.addEventListener('click', () => {
  //   // Remove overlay class from the wrapper element
  //   wrapper.classList.remove('overlay');

  //   // Remove no-scroll class from the body element
  //   body.classList.remove('no-scroll');
  // });
}

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tabs; });
function tabs() {
  if (document.querySelector('.consult')) {
    var count = 0;

    // Get all tab elements
    var _tabs = document.querySelectorAll('.tab');

    // Get all consult__inner-center elements
    var blocks = document.querySelectorAll('.consult__inner-center');

    // Add click event listener to each tab
    _tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        // Remove tab--active class from all tabs
        _tabs.forEach(function (tab) {
          tab.classList.remove('tab--active');
        });

        // Remove consult__inner-center--active class from all blocks
        blocks.forEach(function (block, i) {
          block.classList.remove('consult__inner-center--active');
        });

        // Add tab--active class to the clicked tab
        tab.classList.add('tab--active');

        // Add consult__inner-center--active class to the corresponding block
        blocks[index].classList.add('consult__inner-center--active');
        if (document.querySelector('.activity-form')) {
          var titles = document.querySelectorAll('.form-title');
          var titlesTexts = ['Предложить участие в проекте', 'Запросить портфолио', 'Рассчитать стоимость проекта', 'Задать вопрос в WhatsApp'];
          titles.forEach(function (title) {
            title.classList.remove('form-title--active');
            console.log(title);
          });
          titles[index].classList.add('form-title--active');
          titles[index].textContent = titlesTexts[index];
        }
      });
    });
  }
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map