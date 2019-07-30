/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"base": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/common.js","js/vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__);



window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;

__webpack_require__(/*! ./main.js */ "./src/js/main.js");

__webpack_require__(/*! ./slinky.min.js */ "./src/js/slinky.min.js");

__webpack_require__(/*! ./jquery.fancybox.js */ "./src/js/jquery.fancybox.js");

__webpack_require__(/*! ../css/jquery.fancybox.css */ "./src/css/jquery.fancybox.css");

;

(function () {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})();

(function () {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }

      return null;
    };
  }
})();

document.addEventListener("DOMContentLoaded", function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-btn').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').toggleClass('js__search-opened');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.top-search__close').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('js__search-opened');
  });
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on("load resize", function (e) {
  var headerHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('header').innerHeight();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.top-search__cont').css({
    top: headerHeight
  });
});
document.addEventListener("DOMContentLoaded", function (e) {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() < 1000) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tab-content table").wrap('<div class="table-wrap"><div class="table-wrap__track"></div></div>');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".table-wrap").prepend('<div class="table-wrap__shadow table-wrap__shadow--left"></div>').append('<div class="table-wrap__shadow table-wrap__shadow--right"></div>');
    var tableWrapTracks = document.querySelectorAll(".table-wrap__track");
    if (!tableWrapTracks.length) return;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = tableWrapTracks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var track = _step.value;

        if (track.scrollWidth > track.clientWidth) {
          var wrap = track.closest(".table-wrap");
          var shadows = {
            right: wrap.querySelector(".table-wrap__shadow--right")
          };
          setShadowOpacity(shadows.right, track.scrollWidth - track.clientWidth);
        }

        track.addEventListener("scroll", function (e) {
          var wrap = this.closest(".table-wrap");
          var shadows = {
            left: wrap.querySelector(".table-wrap__shadow--left"),
            right: wrap.querySelector(".table-wrap__shadow--right")
          };
          setShadowOpacity(shadows.right, this.scrollWidth - this.clientWidth - this.scrollLeft);
          setShadowOpacity(shadows.left, this.scrollLeft);
        });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
});

var setShadowOpacity = function setShadowOpacity(element, scrollWidth) {
  var offsetWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;
  element.style.opacity = scrollWidth / offsetWidth <= 1 ? scrollWidth / offsetWidth : 1;
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// изменеие колличества в поле по кнопкам плюс минус
function Quan() {
  $('.quantity-wrap .minus').click(function () {
    var input = $(this).parent().find('input.quan');
    var quantity = parseInt(input.val());
    if (quantity <= 1) return;
    input.val(quantity - 1);
    input.trigger('change');
  });
  $('.quantity-wrap .plus').click(function () {
    var input = $(this).parent().find('input.quan');
    var quantity = parseInt(input.val());
    input.val(quantity + 1);
    input.trigger('change');
  });
} // слайдер прогресс-бар


function moveProgress(percent) {
  if (isNaN(percent) || percent < 0 || percent > 100) {
    return;
  }

  var progressInner = $('.progress-inner');
  progressInner.animate({
    width: percent + '%'
  });
} // адаптив


var currentWidth = '1920';

function maxWidth800() {
  if (currentWidth == '800' || currentWidth == '640') {
    return;
  } // header-menu


  $('header>.container').prepend('<div class="burger-menu"><span></span></div>');
  $('.header-toggle').append($('.header-btn .lang-toggle'));
  $('.burger-menu').on('click', function () {
    $(this).toggleClass('active');
    $('.header-toggle').slideToggle();
  });
  $('.header-toggle ul.nav.submenu').unwrap('.container').unwrap('.submenu-wrap');
  $('.header-toggle .main-menu li').removeClass('active');
  var slinky = $('.header-toggle nav').slinky({
    title: true
  });
  currentWidth = '800';
}

function maxWidth640() {
  if (currentWidth == '640') {
    return;
  } // parts-table


  $('.parts-table .table-body .table-row').each(function () {
    $(this).find('.name').addClass('dropdown-toggle');
    $(this).find('.table-col:not(.name)').wrapAll('<div class="dropdown-menu"/>');
    $(this).find('.container').prepend($(this).find('.name'));
  }); // product-tabs production-menu

  $('.product-tabs .production-menu').slick({
    variableWidth: true,
    slidesToShow: 1,
    arrows: false
  });
  currentWidth = '640';
}

$(document).ready(function () {
  // слайдер
  $('.product-slider .slider-items').slick({
    lazyLoad: 'ondemand',
    appendArrows: $('.product-slider .controls')
  });
  $('.page-slider .slider-items').slick({
    lazyLoad: 'ondemand',
    appendArrows: $('.page-slider .controls'),
    responsive: [{
      breakpoint: 650,
      settings: {
        arrows: false,
        dots: true
      }
    }]
  });
  var slideNumber = $('.slide-number');
  var slideQuantity = $('.slide-quantity');
  var slickElement = $('.about-company-slider .slider-items');
  slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    slideNumber.text(i);
    slideQuantity.text(slick.slideCount);
    var percent = i / slick.slideCount * 100;
    moveProgress(percent);
  });
  $('.about-company-slider .slider-items').slick({
    lazyLoad: 'ondemand',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    centerPadding: '0',
    appendArrows: $('.about-company-slider .controls')
  });
  $('.partners__list').slick({
    lazyLoad: 'progressive',
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false,
    responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 660,
      settings: {
        slidesToShow: 2
      }
    }]
  });
  $('.fancy').fancybox(); // изменеие колличества в поле по кнопкам плюс минус

  Quan(); //адаптив

  var mql = window.matchMedia('all and (max-width: 800px)');

  if (mql.matches) {
    maxWidth800();
  }

  var mql_2 = window.matchMedia('all and (max-width: 640px)');

  if (mql_2.matches) {
    maxWidth640();
  } // свернуть-развернуть


  $('.dropdown-toggle').on('click', function () {
    $(this).siblings('.dropdown-menu').slideToggle();
  });
});
$(window).resize(function () {
  // чтобы видеть адаптив при ресайзе окна
  console.log($(window).width());

  if ($(window).width() > 640 && $(window).width() <= 800) {
    maxWidth800();
  }

  if ($(window).width() <= 640) {
    maxWidth640();
  }
});

/***/ }),

/***/ "./src/js/slinky.min.js":
/*!******************************!*\
  !*** ./src/js/slinky.min.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
        i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable;
    }))), i.forEach(function (e) {
      _defineProperty(t, e, n[e]);
    });
  }

  return t;
}

function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
  }
}

function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
}

var Slinky = function () {
  function n(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
    _classCallCheck(this, n), this.settings = _objectSpread({}, this.options, t), this._init(e);
  }

  return _createClass(n, [{
    key: "options",
    get: function get() {
      return {
        resize: !0,
        speed: 300,
        theme: "slinky-theme-default",
        title: !1
      };
    }
  }]), _createClass(n, [{
    key: "_init",
    value: function value(e) {
      this.menu = jQuery(e), this.base = this.menu.children().first();
      this.base;
      var t = this.menu,
          n = this.settings;
      t.addClass("slinky-menu").addClass(n.theme), this._transition(n.speed), jQuery("a + ul", t).prev().addClass("next"), jQuery("li > a", t).wrapInner("<span>");
      var i = jQuery("<li>").addClass("header");
      jQuery("li > ul", t).prepend(i);
      var s = jQuery("<a>").prop("href", "#").addClass("back");
      jQuery(".header", t).prepend(s), n.title && jQuery("li > ul", t).each(function (e, t) {
        var n = jQuery(t).parent().find("a").first().text();

        if (n) {
          var i = jQuery("<header>").addClass("title").text(n);
          jQuery("> .header", t).append(i);
        }
      }), this._addListeners(), this._jumpToInitial();
    }
  }, {
    key: "_addListeners",
    value: function value() {
      var n = this,
          i = this.menu,
          s = this.settings;
      jQuery("a", i).on("click", function (e) {
        if (n._clicked + s.speed > Date.now()) return !1;
        n._clicked = Date.now();
        var t = jQuery(e.currentTarget);
        (0 === t.attr("href").indexOf("#") || t.hasClass("next") || t.hasClass("back")) && e.preventDefault(), t.hasClass("next") ? (i.find(".active").removeClass("active"), t.next().show().addClass("active"), n._move(1), s.resize && n._resize(t.next())) : t.hasClass("back") && (n._move(-1, function () {
          i.find(".active").removeClass("active"), t.parent().parent().hide().parentsUntil(i, "ul").first().addClass("active");
        }), s.resize && n._resize(t.parent().parent().parentsUntil(i, "ul")));
      });
    }
  }, {
    key: "_jumpToInitial",
    value: function value() {
      var e = this.menu,
          t = this.settings,
          n = e.find(".active");
      0 < n.length && (n.removeClass("active"), this.jump(n, !1)), setTimeout(function () {
        return e.height(e.outerHeight());
      }, t.speed);
    }
  }, {
    key: "_move",
    value: function value() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
          t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function () {};

      if (0 !== e) {
        var n = this.settings,
            i = this.base,
            s = Math.round(parseInt(i.get(0).style.left)) || 0;
        i.css("left", "".concat(s - 100 * e, "%")), "function" == typeof t && setTimeout(t, n.speed);
      }
    }
  }, {
    key: "_resize",
    value: function value(e) {
      this.menu.height(e.outerHeight());
    }
  }, {
    key: "_transition",
    value: function value() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 300,
          t = this.menu,
          n = this.base;
      t.css("transition-duration", "".concat(e, "ms")), n.css("transition-duration", "".concat(e, "ms"));
    }
  }, {
    key: "jump",
    value: function value(e) {
      var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];

      if (e) {
        var n = this.menu,
            i = this.settings,
            s = jQuery(e),
            a = n.find(".active"),
            r = 0;
        0 < a.length && (r = a.parentsUntil(n, "ul").length), n.find("ul").removeClass("active").hide();
        var o = s.parentsUntil(n, "ul");
        o.show(), s.show().addClass("active"), t || this._transition(0), this._move(o.length - r), i.resize && this._resize(s), t || this._transition(i.speed);
      }
    }
  }, {
    key: "home",
    value: function value() {
      var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
          t = this.base,
          n = this.menu,
          i = this.settings;
      e || this._transition(0);
      var s = n.find(".active"),
          a = s.parentsUntil(n, "ul");
      this._move(-a.length, function () {
        s.removeClass("active").hide(), a.not(t).hide();
      }), i.resize && this._resize(t), !1 === e && this._transition(i.speed);
    }
  }, {
    key: "destroy",
    value: function value() {
      var t = this,
          e = this.base,
          n = this.menu;
      jQuery(".header", n).remove(), jQuery("a", n).removeClass("next").off("click"), n.css({
        height: "",
        "transition-duration": ""
      }), e.css({
        left: "",
        "transition-duration": ""
      }), jQuery("li > a > span", n).contents().unwrap(), n.find(".active").removeClass("active"), n.attr("class").split(" ").forEach(function (e) {
        0 === e.indexOf("slinky") && n.removeClass(e);
      });
      ["settings", "menu", "base"].forEach(function (e) {
        return delete t[e];
      });
    }
  }]), n;
}();

jQuery.fn.slinky = function (e) {
  return new Slinky(this, e);
};

/***/ })

/******/ });
//# sourceMappingURL=base.js.map