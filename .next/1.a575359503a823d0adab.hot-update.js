webpackHotUpdate(1,{

/***/ "./components/Layout/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layout_style__ = __webpack_require__("./components/Layout/Layout.style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_Global_style__ = __webpack_require__("./css/Global.style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Menu_Menu__ = __webpack_require__("./components/Menu/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MenuButton_MenuButon__ = __webpack_require__("./components/Layout/MenuButton/MenuButon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Menu_MenuIcons__ = __webpack_require__("./components/Menu/MenuIcons.js");
var _jsxFileName = "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Layout\\Layout.js";


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









var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
    _this.state = {
      showMenu: false
    };
    return _this;
  }

  _createClass(Layout, [{
    key: "showMenuAction",
    value: function showMenuAction() {
      this.setState({
        showMenu: true
      });
    }
  }, {
    key: "hideMenuAction",
    value: function hideMenuAction() {
      console.log('insss');
      this.setState({
        showMenu: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__Layout_style__["a" /* default */].__scopedHash) + " " + 'layout'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__Layout_style__["a" /* default */].__scopedHash)
      }, "AtelierulHaiHui"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__Layout_style__["a" /* default */].__scopedHash)
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__Layout_style__["a" /* default */].__scopedHash)
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Menu_Menu__["a" /* default */], {
        pages: [{
          icon: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Menu_MenuIcons__["HomeIcon"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }),
          text: 'Home',
          link: '/'
        }, {
          icon: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Menu_MenuIcons__["PhotoIcon"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          }),
          text: 'Photo Studio',
          link: 'photostudio'
        }],
        showMenu: this.state.showMenu,
        hideMenuAction: this.hideMenuAction.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__Layout_style__["a" /* default */].__scopedHash) + " " + "container ".concat(this.state.showMenu && 'showMenu')
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__MenuButton_MenuButon__["a" /* default */], {
        showMenu: this.state.showMenu,
        showMenuAction: this.showMenuAction.bind(this),
        hideMenuAction: this.hideMenuAction.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), this.props.children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_3__css_Global_style__["b" /* default */].__hash,
        css: __WEBPACK_IMPORTED_MODULE_3__css_Global_style__["b" /* default */]
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_2__Layout_style__["a" /* default */].__scopedHash,
        css: __WEBPACK_IMPORTED_MODULE_2__Layout_style__["a" /* default */].__scoped
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

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = Layout;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Layout, "Layout", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Layout\\Layout.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Layout\\Layout.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=1.a575359503a823d0adab.hot-update.js.map