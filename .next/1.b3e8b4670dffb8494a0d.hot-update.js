webpackHotUpdate(1,{

/***/ "./components/Menu/Menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Menu_style__ = __webpack_require__("./components/Menu/Menu.style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MenuIcons__ = __webpack_require__("./components/Menu/MenuIcons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
var _jsxFileName = "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Menu\\Menu.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Menu =
/*#__PURE__*/
function (_Component) {
  _inherits(Menu, _Component);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Menu, [{
    key: "renderIcon",
    value: function renderIcon(Icon) {
      return Icon && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Icon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(__WEBPACK_IMPORTED_MODULE_3__MenuIcons__);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__Menu_style__["a" /* default */].__scopedHash) + " " + 'menu'
      }, this.props.pages.map(function (page) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
          href: page.link,
          key: page.link,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          onClick: _this2.props.hideMenuAction,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__Menu_style__["a" /* default */].__scopedHash) + " " + 'page'
        }, page.icon, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__Menu_style__["a" /* default */].__scopedHash)
        }, page.text)));
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_2__Menu_style__["a" /* default */].__scopedHash,
        css: __WEBPACK_IMPORTED_MODULE_2__Menu_style__["a" /* default */].__scoped
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Menu;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = Menu;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Menu, "Menu", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Menu\\Menu.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Menu\\Menu.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=1.b3e8b4670dffb8494a0d.hot-update.js.map