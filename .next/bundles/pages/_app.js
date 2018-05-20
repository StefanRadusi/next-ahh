module.exports =

        __NEXT_REGISTER_PAGE('/_app', function() {
          var comp = 
      webpackJsonp([1],{

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
          icon: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Menu_MenuIcons__["a" /* HomeIcon */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }),
          text: 'Home',
          link: '/'
        }, {
          icon: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Menu_MenuIcons__["b" /* PhotoIcon */], {
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

/***/ }),

/***/ "./components/Layout/Layout.style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_utils__ = __webpack_require__("./css/utils.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var _defaultExport = new String("div.layout{width:100%;height:100%;background:".concat(__WEBPACK_IMPORTED_MODULE_0__css_utils__["a" /* default */].lightGrey, ";position:relative;overflow:hidden;}div.container{position:absolute;top:0;left:0;width:100%;height:100%;background:").concat(__WEBPACK_IMPORTED_MODULE_0__css_utils__["a" /* default */].lightGrey, ";-webkit-transition:-webkit-transform .5s ease;-webkit-transition:transform .5s ease;transition:transform .5s ease;box-shadow:-10px 4px 10px rgba(0,0,0,0.2);}div.container.showMenu{-webkit-transform:translateX(295px);-ms-transform:translateX(295px);transform:translateX(295px);}@media only screen and (max-device-width:320px){div.container.showMenu{-webkit-transform:translateX(260px);-ms-transform:translateX(260px);transform:translateX(260px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dFxcTGF5b3V0LnN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdrQixBQUdvQixBQVFPLEFBWXZCLEFBS0ksV0F4QmEsT0FRTixLQVBrQyxDQVFqQyxPQUNJLFdBQ0MsWUFDNEIsU0FWdEIsa0JBQ0YsYUFVYyxFQU1sQyxBQUtJLENBcEJKLCtHQVVpRCwwQ0FDakQiLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0XFxMYXlvdXQuc3R5bGUuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxzdGVmYVxccHJvZ3JhbW1pbmdcXEF0ZWxpZXJ1bEhhaUh1aVxcbmV4dC1haGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJy4uLy4uL2Nzcy91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3NgXHJcbiAgICBkaXYubGF5b3V0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHt1dGlscy5saWdodEdyZXl9O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHt1dGlscy5saWdodEdyZXl9O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZTtcclxuICAgICAgICBib3gtc2hhZG93OiAtMTBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpdi5jb250YWluZXIuc2hvd01lbnUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyOTVweClcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAzMjBweCkge1xyXG4gICAgICAgIGRpdi5jb250YWluZXIuc2hvd01lbnUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjYwcHgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gOyJdfQ== */\n/*@ sourceURL=components\\Layout\\Layout.style.js */"));

_defaultExport.__hash = "2701175478";
_defaultExport.__scoped = "div.layout.jsx-4086894199{width:100%;height:100%;background:".concat(__WEBPACK_IMPORTED_MODULE_0__css_utils__["a" /* default */].lightGrey, ";position:relative;overflow:hidden;}div.container.jsx-4086894199{position:absolute;top:0;left:0;width:100%;height:100%;background:").concat(__WEBPACK_IMPORTED_MODULE_0__css_utils__["a" /* default */].lightGrey, ";-webkit-transition:-webkit-transform .5s ease;-webkit-transition:transform .5s ease;transition:transform .5s ease;box-shadow:-10px 4px 10px rgba(0,0,0,0.2);}div.container.showMenu.jsx-4086894199{-webkit-transform:translateX(295px);-ms-transform:translateX(295px);transform:translateX(295px);}@media only screen and (max-device-width:320px){div.container.showMenu.jsx-4086894199{-webkit-transform:translateX(260px);-ms-transform:translateX(260px);transform:translateX(260px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dFxcTGF5b3V0LnN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdrQixBQUdvQixBQVFPLEFBWXZCLEFBS0ksV0F4QmEsT0FRTixLQVBrQyxDQVFqQyxPQUNJLFdBQ0MsWUFDNEIsU0FWdEIsa0JBQ0YsYUFVYyxFQU1sQyxBQUtJLENBcEJKLCtHQVVpRCwwQ0FDakQiLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0XFxMYXlvdXQuc3R5bGUuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxzdGVmYVxccHJvZ3JhbW1pbmdcXEF0ZWxpZXJ1bEhhaUh1aVxcbmV4dC1haGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJy4uLy4uL2Nzcy91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3NgXHJcbiAgICBkaXYubGF5b3V0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHt1dGlscy5saWdodEdyZXl9O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHt1dGlscy5saWdodEdyZXl9O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZTtcclxuICAgICAgICBib3gtc2hhZG93OiAtMTBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpdi5jb250YWluZXIuc2hvd01lbnUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyOTVweClcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAzMjBweCkge1xyXG4gICAgICAgIGRpdi5jb250YWluZXIuc2hvd01lbnUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjYwcHgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gOyJdfQ== */\n/*@ sourceURL=components\\Layout\\Layout.style.js */");
_defaultExport.__scopedHash = "4086894199";
var _default = _defaultExport;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Layout\\Layout.style.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Layout/MenuButton/MenuButon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MenuButton_style__ = __webpack_require__("./components/Layout/MenuButton/MenuButton.style.js");
var _jsxFileName = "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Layout\\MenuButton\\MenuButon.js";


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




var MenuButton =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuButton, _Component);

  function MenuButton(props) {
    var _this;

    _classCallCheck(this, MenuButton);

    _this = _possibleConstructorReturn(this, (MenuButton.__proto__ || Object.getPrototypeOf(MenuButton)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(MenuButton, [{
    key: "toggle",
    value: function toggle() {
      if (this.props.showMenu) {
        this.props.hideMenuAction();
      } else {
        this.props.showMenuAction();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        onClick: this.toggle.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash) + " " + "menuButton"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
        width: "55",
        height: "50",
        viewBox: "0 0 55 50",
        version: "1.1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash) + " " + "shirt ".concat(this.props.showMenu && 'hide')
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "Canvas",
        fill: "none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "Shirt Menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "Shirt_Menu_2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
        id: "mask0",
        "mask-type": "alpha",
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "55",
        height: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "Rectangle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        width: "54.1667",
        height: "50",
        fill: "#C4C4C4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        x: "0.5",
        y: "0.5",
        width: "53.1667",
        height: "49",
        stroke: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        mask: "url(#mask0)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "shirt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
        id: "Union",
        d: "M 12.2878 0.0237788L 12.25 0L 12.2226 0.035282L 12.2615 0.0660274M 12.2878 0.0237788L 12.2615 0.0660274M 12.2878 0.0237788C 12.2877 0.0237544 12.2878 0.0237788 12.2615 0.0660274M 12.2878 0.0237788L 12.2888 0.0244279L 12.292 0.0264263L 12.3047 0.0343859C 12.316 0.0414251 12.3329 0.0518918 12.3551 0.0655586C 12.3995 0.0928922 12.4652 0.133025 12.5504 0.184137C 12.7208 0.286363 12.9691 0.432497 13.2802 0.607981C 13.9026 0.958973 14.7764 1.42726 15.7824 1.89644C 17.7962 2.83571 20.332 3.77501 22.4381 3.78985C 24.5703 3.80488 27.1464 2.87866 29.194 1.94496C 30.2169 1.47856 31.106 1.01118 31.7394 0.660406C 32.0561 0.485028 32.3088 0.338826 32.4823 0.236506C 32.569 0.185347 32.6359 0.14516 32.6811 0.117784C 32.7038 0.104096 32.7209 0.0936114 32.7324 0.0865593L 32.7454 0.0785846L 32.7495 0.0760865L 32.7496 0.0759662M 12.2615 0.0660274C 12.2226 0.035282 12.2225 0.0353381 12.2225 0.0354503L 12.0935 0.201034C 12.0093 0.309196 11.8857 0.467928 11.7281 0.670201C 11.4129 1.07475 10.9619 1.65347 10.4184 2.35014C 9.33144 3.74349 7.87481 5.60866 6.39611 7.49596C 4.91739 9.38327 3.41663 11.2927 2.2414 12.7744C 1.65377 13.5153 1.1476 14.1492 0.766296 14.62C 0.383888 15.0921 0.12932 15.3973 0.0432662 15.4835L 0 15.5269L 10.6863 22.5752L 10.6391 41.3364L 34.1968 41.3965L 34.244 22.6354L 45.0125 15.6417L 44.9691 15.5981C 44.8831 15.5114 44.629 15.2049 44.2473 14.7309C 43.8667 14.2582 43.3616 13.6217 42.7751 12.8778C 41.6022 11.39 40.1046 9.47297 38.6289 7.57812C 37.1533 5.68329 35.6997 3.81069 34.6151 2.4118C 34.0728 1.71235 33.6226 1.13134 33.3081 0.725181C 33.1509 0.522104 33.0275 0.362743 32.9435 0.254151L 32.8152 0.0884165L 32.8148 0.08791C 32.8147 0.0877974 32.8147 0.087741 32.7757 0.11837M 32.7757 0.11837C 32.7497 0.0759315 32.7497 0.0759418 32.7496 0.0759662M 32.7757 0.11837L 32.7496 0.0759662M 32.7757 0.11837L 32.8147 0.0877411L 32.7875 0.0525297L 32.7496 0.0759662M 44.8573 15.6239L 34.2443 22.5166L 34.2714 11.7598L 34.1724 11.7595L 34.0981 41.2966L 10.7384 41.237L 10.8127 11.6999L 10.7137 11.6997L 10.6866 22.4563L 0.154904 15.5099C 0.270392 15.3831 0.510073 15.094 0.842992 14.683C 1.22462 14.2119 1.73103 13.5776 2.31873 12.8366C 3.49415 11.3546 4.99505 9.44506 6.47381 7.5577C 7.95257 5.67033 9.40924 3.8051 10.4962 2.41172C 11.0397 1.71502 11.4908 1.13629 11.806 0.731729C 11.9636 0.529448 12.0872 0.370711 12.1714 0.262542L 12.2732 0.131876C 12.2818 0.137243 12.2919 0.143495 12.3035 0.1506C 12.3482 0.178122 12.4142 0.218452 12.4998 0.269768C 12.6708 0.372399 12.9199 0.518983 13.2319 0.694948C 13.8558 1.04685 14.732 1.51638 15.7408 1.98689C 17.7564 2.92699 20.3087 3.87452 22.4374 3.88952C 24.5925 3.90471 27.1854 2.97028 29.2348 2.03576C 30.2606 1.56805 31.152 1.09944 31.7871 0.747746C 32.1046 0.57189 32.3581 0.425239 32.5323 0.322515C 32.6194 0.271152 32.6866 0.230769 32.7322 0.203205C 32.7442 0.195903 32.7547 0.189501 32.7637 0.184032L 32.8654 0.315427C 32.9495 0.424025 33.0728 0.583393 33.2301 0.786477C 33.5446 1.19265 33.9947 1.77368 34.5371 2.47314C 35.6217 3.87207 37.0753 5.74472 38.551 7.63963C 40.0267 9.53453 41.5245 11.4517 42.6976 12.9398C 43.2841 13.6837 43.7895 14.3205 44.1704 14.7936C 44.5026 15.2063 44.7419 15.4965 44.8573 15.6239Z",
        transform: "translate(5 4)",
        stroke: "#FF3B3F",
        strokeWidth: "2",
        strokeLinejoin: "round",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "Group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("line", {
        id: "Line",
        x1: "1",
        y1: "-1",
        x2: "15.7269",
        y2: "-1",
        transform: "translate(19.1535 17.5558)",
        stroke: "#054D4D",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("line", {
        id: "Line_2",
        x1: "1",
        y1: "-1",
        x2: "15.7269",
        y2: "-1",
        transform: "translate(19.1535 24.7324)",
        stroke: "#054D4D",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("line", {
        id: "Line_3",
        x1: "1",
        y1: "-1",
        x2: "15.7269",
        y2: "-1",
        transform: "translate(19.1535 31.909)",
        stroke: "#054D4D",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      })))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
        width: "55",
        height: "50",
        viewBox: "0 0 55 50",
        fill: "none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash) + " " + "close ".concat(this.props.showMenu && 'show')
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "Close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
        id: "mask0",
        "mask-type": "alpha",
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "55",
        height: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
        id: "Rectangle",
        width: "54.1667",
        height: "50",
        fill: "#C4C4C4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        mask: "url(#mask0)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
        id: "Group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("line", {
        id: "Line",
        x1: "1",
        y1: "-1",
        x2: "15.7269",
        y2: "-1",
        transform: "translate(20 19) rotate(45)",
        stroke: "black",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("line", {
        id: "Line_2",
        x1: "1",
        y1: "-1",
        x2: "15.7269",
        y2: "-1",
        transform: "translate(23 30.8277) rotate(-45)",
        stroke: "black",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash)
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scopedHash,
        css: __WEBPACK_IMPORTED_MODULE_2__MenuButton_style__["a" /* default */].__scoped
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

  return MenuButton;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = MenuButton;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MenuButton, "MenuButton", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Layout\\MenuButton\\MenuButon.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Layout\\MenuButton\\MenuButon.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Layout/MenuButton/MenuButton.style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_utils__ = __webpack_require__("./css/utils.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var _defaultExport = new String("div.menuButton{width:60px;height:60px;position:fixed;top:10px;left:10px;border:1px solid ".concat(__WEBPACK_IMPORTED_MODULE_0__css_utils__["a" /* default */].grey, ";border-radius:50%;z-index:10;}svg{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:opacity .3s ease;transition:opacity .3s ease;}svg.shirt{opacity:1;}svg.shirt.hide{opacity:0;}svg.close{opacity:0;}svg.close line{stroke:").concat(__WEBPACK_IMPORTED_MODULE_0__css_utils__["a" /* default */].red, ";}svg.close.show{opacity:1;}@media only screen and (max-device-width:320px){div.menuButton{width:40px;height:40px;}svg{width:35px;height:35px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dFxcTWVudUJ1dHRvblxcTWVudUJ1dHRvbi5zdHlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0IsQUFHb0IsQUFZTyxBQVFSLEFBSUEsQUFJQSxBQUtmLEFBR2UsQUFNSyxBQUtBLFVBMUJuQixBQUlBLEFBSUEsQUFRQSxDQXBDZ0IsQUEwQ0ksQUFLQSxPQW5DUixLQVhPLEFBMENmLEFBS0EsR0FuQ1MsU0FDdUIsQ0FrQnBDLEVBOUJhLFNBQ0MsVUFDb0MsOENBQzVCLGtCQUNQLFdBQ2YsUUFRZ0MsZ0VBQ2hDIiwiZmlsZSI6ImNvbXBvbmVudHNcXExheW91dFxcTWVudUJ1dHRvblxcTWVudUJ1dHRvbi5zdHlsZS5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHN0ZWZhXFxwcm9ncmFtbWluZ1xcQXRlbGllcnVsSGFpSHVpXFxuZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vLi4vY3NzL3V0aWxzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3NgXHJcbiAgICBkaXYubWVudUJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3V0aWxzLmdyZXl9O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN2Zy5zaGlydCB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICBzdmcuc2hpcnQuaGlkZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICBzdmcuY2xvc2Uge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnLmNsb3NlIGxpbmUge1xyXG4gICAgICAgIHN0cm9rZTogJHt1dGlscy5yZWR9XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnLmNsb3NlLnNob3cge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogMzIwcHgpIHtcclxuICAgICAgICBcclxuICAgICAgICBkaXYubWVudUJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuYDsiXX0= */\n/*@ sourceURL=components\\Layout\\MenuButton\\MenuButton.style.js */"));

_defaultExport.__hash = "2301797490";
_defaultExport.__scoped = "div.menuButton.jsx-3229337907{width:60px;height:60px;position:fixed;top:10px;left:10px;border:1px solid ".concat(__WEBPACK_IMPORTED_MODULE_0__css_utils__["a" /* default */].grey, ";border-radius:50%;z-index:10;}svg.jsx-3229337907{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:opacity .3s ease;transition:opacity .3s ease;}svg.shirt.jsx-3229337907{opacity:1;}svg.shirt.hide.jsx-3229337907{opacity:0;}svg.close.jsx-3229337907{opacity:0;}svg.close.jsx-3229337907 line.jsx-3229337907{stroke:").concat(__WEBPACK_IMPORTED_MODULE_0__css_utils__["a" /* default */].red, ";}svg.close.show.jsx-3229337907{opacity:1;}@media only screen and (max-device-width:320px){div.menuButton.jsx-3229337907{width:40px;height:40px;}svg.jsx-3229337907{width:35px;height:35px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dFxcTWVudUJ1dHRvblxcTWVudUJ1dHRvbi5zdHlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0IsQUFHb0IsQUFZTyxBQVFSLEFBSUEsQUFJQSxBQUtmLEFBR2UsQUFNSyxBQUtBLFVBMUJuQixBQUlBLEFBSUEsQUFRQSxDQXBDZ0IsQUEwQ0ksQUFLQSxPQW5DUixLQVhPLEFBMENmLEFBS0EsR0FuQ1MsU0FDdUIsQ0FrQnBDLEVBOUJhLFNBQ0MsVUFDb0MsOENBQzVCLGtCQUNQLFdBQ2YsUUFRZ0MsZ0VBQ2hDIiwiZmlsZSI6ImNvbXBvbmVudHNcXExheW91dFxcTWVudUJ1dHRvblxcTWVudUJ1dHRvbi5zdHlsZS5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHN0ZWZhXFxwcm9ncmFtbWluZ1xcQXRlbGllcnVsSGFpSHVpXFxuZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vLi4vY3NzL3V0aWxzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3NgXHJcbiAgICBkaXYubWVudUJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3V0aWxzLmdyZXl9O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN2Zy5zaGlydCB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICBzdmcuc2hpcnQuaGlkZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICBzdmcuY2xvc2Uge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnLmNsb3NlIGxpbmUge1xyXG4gICAgICAgIHN0cm9rZTogJHt1dGlscy5yZWR9XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnLmNsb3NlLnNob3cge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogMzIwcHgpIHtcclxuICAgICAgICBcclxuICAgICAgICBkaXYubWVudUJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuYDsiXX0= */\n/*@ sourceURL=components\\Layout\\MenuButton\\MenuButton.style.js */");
_defaultExport.__scopedHash = "3229337907";
var _default = _defaultExport;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Layout\\MenuButton\\MenuButton.style.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__Menu_style__["a" /* default */].__scopedHash) + " " + 'menu'
      }, this.props.pages.map(function (page) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          onClick: _this2.props.hideMenuAction,
          key: page.link,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__Menu_style__["a" /* default */].__scopedHash)
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
          href: page.link,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
        }, page.text))));
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

/***/ }),

/***/ "./components/Menu/Menu.style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_utils__ = __webpack_require__("./css/utils.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var _defaultExport = new String("div.menu{padding:10px;background:".concat(__WEBPACK_IMPORTED_MODULE_0__css_utils__["a" /* default */].darkGreen, ";position:absolute;top:0;left:0;width:calc(100% - 20px);height:calc(100% - 20px);}p{color:white;margin-left:10px;font-size:18px;}div.page{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;margin-bottom:20px;}@media only screen and (max-device-width:320px){p{font-size:16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE1lbnVcXE1lbnUuc3R5bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2tCLEFBR3NCLEFBVUQsQUFNQyxBQVFNLFlBYkYsQ0FWdUIsRUF3QnhDLGNBYmUsZUFDbkIsU0FYc0Isa0JBQ1osR0FjYSxHQWJaLE9BQ2lCLHdCQUNDLHlCQUM3QixrQ0FXbUIsZUFDSSxtQkFDdkIiLCJmaWxlIjoiY29tcG9uZW50c1xcTWVudVxcTWVudS5zdHlsZS5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHN0ZWZhXFxwcm9ncmFtbWluZ1xcQXRlbGllcnVsSGFpSHVpXFxuZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vY3NzL3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuICAgIGRpdi5tZW51IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR7dXRpbHMuZGFya0dyZWVufTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICBkaXYucGFnZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7Il19 */\n/*@ sourceURL=components\\Menu\\Menu.style.js */"));

_defaultExport.__hash = "875030955";
_defaultExport.__scoped = "div.menu.jsx-2068370186{padding:10px;background:".concat(__WEBPACK_IMPORTED_MODULE_0__css_utils__["a" /* default */].darkGreen, ";position:absolute;top:0;left:0;width:calc(100% - 20px);height:calc(100% - 20px);}p.jsx-2068370186{color:white;margin-left:10px;font-size:18px;}div.page.jsx-2068370186{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;margin-bottom:20px;}@media only screen and (max-device-width:320px){p.jsx-2068370186{font-size:16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE1lbnVcXE1lbnUuc3R5bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2tCLEFBR3NCLEFBVUQsQUFNQyxBQVFNLFlBYkYsQ0FWdUIsRUF3QnhDLGNBYmUsZUFDbkIsU0FYc0Isa0JBQ1osR0FjYSxHQWJaLE9BQ2lCLHdCQUNDLHlCQUM3QixrQ0FXbUIsZUFDSSxtQkFDdkIiLCJmaWxlIjoiY29tcG9uZW50c1xcTWVudVxcTWVudS5zdHlsZS5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHN0ZWZhXFxwcm9ncmFtbWluZ1xcQXRlbGllcnVsSGFpSHVpXFxuZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vY3NzL3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuICAgIGRpdi5tZW51IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR7dXRpbHMuZGFya0dyZWVufTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICBkaXYucGFnZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7Il19 */\n/*@ sourceURL=components\\Menu\\Menu.style.js */");
_defaultExport.__scopedHash = "2068370186";
var _default = _defaultExport;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Menu\\Menu.style.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Menu/MenuIcons.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PhotoIcon; });
/* unused harmony export Video */
/* unused harmony export Custom */
/* unused harmony export Contact */
/* unused harmony export Print */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__ = __webpack_require__("./components/Menu/MenuIcons.style.js");
var _jsxFileName = "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Menu\\MenuIcons.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


var HomeIcon = function HomeIcon() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    width: "55",
    height: "50",
    viewBox: "0 0 55 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "55",
    height: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Rectangle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    width: "54.1667",
    height: "50",
    fill: "#C4C4C4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "53.1667",
    height: "49",
    stroke: "#FEFDFD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    mask: "url(#mask0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Vector",
    transform: "translate(8 8)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
    id: "path-3-inside-1",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M37.5959 13.429L19.5833 0.191415C19.236 -0.0638051 18.7641 -0.0638051 18.4169 0.191415L0.404163 13.429C-0.0358046 13.7524 -0.131398 14.3725 0.190785 14.8141C0.512968 15.2557 1.13084 15.3515 1.57073 15.0282L19 2.21925L36.4293 15.0282C36.605 15.1574 36.8093 15.2196 37.0118 15.2196C37.3158 15.2196 37.6157 15.0792 37.8092 14.814C38.1314 14.3725 38.0358 13.7524 37.5959 13.429Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M37.5959 13.429L19.5833 0.191415C19.236 -0.0638051 18.7641 -0.0638051 18.4169 0.191415L0.404163 13.429C-0.0358046 13.7524 -0.131398 14.3725 0.190785 14.8141C0.512968 15.2557 1.13084 15.3515 1.57073 15.0282L19 2.21925L36.4293 15.0282C36.605 15.1574 36.8093 15.2196 37.0118 15.2196C37.3158 15.2196 37.6157 15.0792 37.8092 14.814C38.1314 14.3725 38.0358 13.7524 37.5959 13.429Z",
    fill: "black",
    stroke: "#FEFDFD",
    strokeWidth: "2",
    mask: "url(#path-3-inside-1)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Vector_2",
    transform: "translate(12.1898 23.2525)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
    id: "path-4-inside-2",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M28.6331 -5.45619e-08C28.0879 -5.45619e-08 27.6458 0.443693 27.6458 0.991008V16.7653H19.7473V8.15469C19.7473 5.4222 17.5324 3.19927 14.8103 3.19927C12.0881 3.19927 9.87323 5.42235 9.87323 8.15469V16.7654H1.97466V0.991084C1.97466 0.443768 1.53254 7.4968e-05 0.98733 7.4968e-05C0.44212 7.4968e-05 -2.49147e-08 0.443768 -2.49147e-08 0.991084V17.7564C-2.49147e-08 18.3038 0.44212 18.7474 0.98733 18.7474H10.8606C11.3798 18.7474 11.8047 18.3448 11.844 17.8336C11.8464 17.8104 11.8479 17.7851 11.8479 17.7564V8.15476C11.8479 6.5152 13.1768 5.18136 14.8103 5.18136C16.4437 5.18136 17.7726 6.51527 17.7726 8.15476V17.7564C17.7726 17.785 17.7741 17.8099 17.7765 17.8327C17.8154 18.3443 18.2404 18.7474 18.7599 18.7474H28.6332C29.1785 18.7474 29.6205 18.3038 29.6205 17.7564V0.991084C29.6204 0.443693 29.1784 -5.45619e-08 28.6331 -5.45619e-08Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M28.6331 -5.45619e-08C28.0879 -5.45619e-08 27.6458 0.443693 27.6458 0.991008V16.7653H19.7473V8.15469C19.7473 5.4222 17.5324 3.19927 14.8103 3.19927C12.0881 3.19927 9.87323 5.42235 9.87323 8.15469V16.7654H1.97466V0.991084C1.97466 0.443768 1.53254 7.4968e-05 0.98733 7.4968e-05C0.44212 7.4968e-05 -2.49147e-08 0.443768 -2.49147e-08 0.991084V17.7564C-2.49147e-08 18.3038 0.44212 18.7474 0.98733 18.7474H10.8606C11.3798 18.7474 11.8047 18.3448 11.844 17.8336C11.8464 17.8104 11.8479 17.7851 11.8479 17.7564V8.15476C11.8479 6.5152 13.1768 5.18136 14.8103 5.18136C16.4437 5.18136 17.7726 6.51527 17.7726 8.15476V17.7564C17.7726 17.785 17.7741 17.8099 17.7765 17.8327C17.8154 18.3443 18.2404 18.7474 18.7599 18.7474H28.6332C29.1785 18.7474 29.6205 18.3038 29.6205 17.7564V0.991084C29.6204 0.443693 29.1784 -5.45619e-08 28.6331 -5.45619e-08Z",
    fill: "black",
    stroke: "#FEFDFD",
    strokeWidth: "2",
    mask: "url(#path-4-inside-2)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: __WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash,
    css: __WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scoped
  }));
};
var PhotoIcon = function PhotoIcon() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    width: "55",
    height: "50",
    viewBox: "0 0 55 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "photo-camera",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "55",
    height: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    id: "Rectangle",
    width: "54.1667",
    height: "50",
    fill: "#C4C4C4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    mask: "url(#mask0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Vector",
    transform: "translate(16.2122 16.6164)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
    id: "path-2-inside-1",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M10.7878 5.43622e-07C4.83943 5.43622e-07 -2.20299e-07 4.77683 -2.20299e-07 10.6483C-2.20299e-07 16.5197 4.83943 21.2965 10.7878 21.2965C16.7361 21.2965 21.5755 16.5197 21.5755 10.6483C21.5755 4.77683 16.7363 5.43622e-07 10.7878 5.43622e-07ZM10.7878 19.6011C5.78648 19.6011 1.71757 15.5849 1.71757 10.6482C1.71757 5.71154 5.7864 1.69527 10.7878 1.69527C15.7891 1.69527 19.858 5.71154 19.858 10.6482C19.858 15.5849 15.7891 19.6011 10.7878 19.6011Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M10.7878 5.43622e-07C4.83943 5.43622e-07 -2.20299e-07 4.77683 -2.20299e-07 10.6483C-2.20299e-07 16.5197 4.83943 21.2965 10.7878 21.2965C16.7361 21.2965 21.5755 16.5197 21.5755 10.6483C21.5755 4.77683 16.7363 5.43622e-07 10.7878 5.43622e-07ZM10.7878 19.6011C5.78648 19.6011 1.71757 15.5849 1.71757 10.6482C1.71757 5.71154 5.7864 1.69527 10.7878 1.69527C15.7891 1.69527 19.858 5.71154 19.858 10.6482C19.858 15.5849 15.7891 19.6011 10.7878 19.6011Z",
    fill: "black",
    stroke: "white",
    strokeWidth: "2",
    mask: "url(#path-2-inside-1)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Vector_2",
    transform: "translate(20.2688 20.6207)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
    id: "path-3-inside-2",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M6.73107 1.18608e-07C3.01957 1.18608e-07 2.00272e-08 2.98043 2.00272e-08 6.64399C2.00272e-08 10.3075 3.01957 13.2878 6.73107 13.2878C10.4426 13.2878 13.4621 10.3074 13.4621 6.64399C13.4621 2.98059 10.4426 1.18608e-07 6.73107 1.18608e-07ZM6.73107 11.6817C3.91683 11.6817 1.62725 9.42183 1.62725 6.64399C1.62725 3.86616 3.91683 1.6062 6.73107 1.6062C9.54532 1.6062 11.8349 3.86616 11.8349 6.64399C11.835 9.42183 9.5454 11.6817 6.73107 11.6817Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M6.73107 1.18608e-07C3.01957 1.18608e-07 2.00272e-08 2.98043 2.00272e-08 6.64399C2.00272e-08 10.3075 3.01957 13.2878 6.73107 13.2878C10.4426 13.2878 13.4621 10.3074 13.4621 6.64399C13.4621 2.98059 10.4426 1.18608e-07 6.73107 1.18608e-07ZM6.73107 11.6817C3.91683 11.6817 1.62725 9.42183 1.62725 6.64399C1.62725 3.86616 3.91683 1.6062 6.73107 1.6062C9.54532 1.6062 11.8349 3.86616 11.8349 6.64399C11.835 9.42183 9.5454 11.6817 6.73107 11.6817Z",
    fill: "black",
    stroke: "white",
    strokeWidth: "2",
    mask: "url(#path-3-inside-2)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Vector_3",
    transform: "translate(6 9)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
    id: "path-4-inside-3",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M39.288 4.5293H28.2297L27.1003 1.49293C26.7681 0.599907 25.8975 -7.41303e-09 24.9337 -7.41303e-09H17.0663C16.1025 -7.41303e-09 15.2319 0.599988 14.8997 1.49293L13.7703 4.52922H10.0127V3.33928C10.0127 2.37987 9.22204 1.59924 8.24988 1.59924H5.64785C4.67586 1.59924 3.885 2.37987 3.885 3.33928V4.5293H2.71204C1.21661 4.5293 0 5.73017 0 7.20625V29.323C0 30.7991 1.21661 32 2.71204 32H39.288C40.7834 32 42 30.7991 42 29.323V7.20625C42 5.73017 40.7834 4.5293 39.288 4.5293ZM16.5969 2.10805C16.6688 1.91462 16.8574 1.78466 17.0662 1.78466H24.9336C25.1424 1.78466 25.331 1.91462 25.4029 2.10805L26.3036 4.5293H15.6963L16.5969 2.10805ZM5.60273 3.33928C5.60273 3.31475 5.623 3.29467 5.64793 3.29467H8.24996C8.2749 3.29467 8.29516 3.31475 8.29516 3.33928V4.5293H5.60273V3.33928ZM1.80805 11.2821H4.4858V25.247H1.80805V11.2821ZM40.1919 29.323C40.192 29.8151 39.7864 30.2153 39.288 30.2153H2.71204C2.21353 30.2153 1.80805 29.815 1.80805 29.323V27.0317H5.38978C5.88902 27.0317 6.29377 26.6321 6.29377 26.1394V10.3898C6.29377 9.89713 5.88902 9.49754 5.38978 9.49754H1.80805V7.20617C1.80805 6.71411 2.21361 6.31388 2.71204 6.31388H27.5918C27.5942 6.31388 27.5964 6.31412 27.5987 6.31412C27.6006 6.31412 27.6028 6.31388 27.6047 6.31388H39.288C39.7865 6.31388 40.192 6.7142 40.192 7.20617V9.49754H36.6102C36.1109 9.49754 35.7062 9.89713 35.7062 10.3898V26.1394C35.7062 26.6321 36.111 27.0317 36.6102 27.0317H40.192V29.323H40.1919ZM40.192 25.247H37.5142V11.2821H40.192V25.247Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M39.288 4.5293H28.2297L27.1003 1.49293C26.7681 0.599907 25.8975 -7.41303e-09 24.9337 -7.41303e-09H17.0663C16.1025 -7.41303e-09 15.2319 0.599988 14.8997 1.49293L13.7703 4.52922H10.0127V3.33928C10.0127 2.37987 9.22204 1.59924 8.24988 1.59924H5.64785C4.67586 1.59924 3.885 2.37987 3.885 3.33928V4.5293H2.71204C1.21661 4.5293 0 5.73017 0 7.20625V29.323C0 30.7991 1.21661 32 2.71204 32H39.288C40.7834 32 42 30.7991 42 29.323V7.20625C42 5.73017 40.7834 4.5293 39.288 4.5293ZM16.5969 2.10805C16.6688 1.91462 16.8574 1.78466 17.0662 1.78466H24.9336C25.1424 1.78466 25.331 1.91462 25.4029 2.10805L26.3036 4.5293H15.6963L16.5969 2.10805ZM5.60273 3.33928C5.60273 3.31475 5.623 3.29467 5.64793 3.29467H8.24996C8.2749 3.29467 8.29516 3.31475 8.29516 3.33928V4.5293H5.60273V3.33928ZM1.80805 11.2821H4.4858V25.247H1.80805V11.2821ZM40.1919 29.323C40.192 29.8151 39.7864 30.2153 39.288 30.2153H2.71204C2.21353 30.2153 1.80805 29.815 1.80805 29.323V27.0317H5.38978C5.88902 27.0317 6.29377 26.6321 6.29377 26.1394V10.3898C6.29377 9.89713 5.88902 9.49754 5.38978 9.49754H1.80805V7.20617C1.80805 6.71411 2.21361 6.31388 2.71204 6.31388H27.5918C27.5942 6.31388 27.5964 6.31412 27.5987 6.31412C27.6006 6.31412 27.6028 6.31388 27.6047 6.31388H39.288C39.7865 6.31388 40.192 6.7142 40.192 7.20617V9.49754H36.6102C36.1109 9.49754 35.7062 9.89713 35.7062 10.3898V26.1394C35.7062 26.6321 36.111 27.0317 36.6102 27.0317H40.192V29.323H40.1919ZM40.192 25.247H37.5142V11.2821H40.192V25.247Z",
    fill: "black",
    stroke: "white",
    strokeWidth: "2",
    mask: "url(#path-4-inside-3)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Vector_4",
    transform: "translate(23.6741 23.9818)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
    id: "path-5-inside-4",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M3.32587 2.47101e-07C1.49198 2.47101e-07 1.50204e-07 1.47268 1.50204e-07 3.28285C1.50204e-07 3.7264 0.364219 4.08591 0.813586 4.08591C1.26295 4.08591 1.62717 3.7264 1.62717 3.28285C1.62717 2.35833 2.38916 1.6062 3.32579 1.6062C3.77516 1.6062 4.13938 1.24669 4.13938 0.803141C4.13938 0.359587 3.77532 2.47101e-07 3.32587 2.47101e-07Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M3.32587 2.47101e-07C1.49198 2.47101e-07 1.50204e-07 1.47268 1.50204e-07 3.28285C1.50204e-07 3.7264 0.364219 4.08591 0.813586 4.08591C1.26295 4.08591 1.62717 3.7264 1.62717 3.28285C1.62717 2.35833 2.38916 1.6062 3.32579 1.6062C3.77516 1.6062 4.13938 1.24669 4.13938 0.803141C4.13938 0.359587 3.77532 2.47101e-07 3.32587 2.47101e-07Z",
    fill: "black",
    stroke: "white",
    strokeWidth: "2",
    mask: "url(#path-5-inside-4)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: __WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash,
    css: __WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scoped
  }));
};
var Video = function Video() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    width: "55",
    height: "50",
    viewBox: "0 0 55 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Video",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "55",
    height: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    id: "Rectangle",
    width: "54.1667",
    height: "50",
    fill: "#C4C4C4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    mask: "url(#mask0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "video-camera",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    id: "Vector",
    d: "M40.5052 16.5265C40.1982 16.3453 39.8176 16.3368 39.5029 16.5043L32.9347 20.0003V17.0044C32.9347 16.4496 32.4798 15.9999 31.919 15.9999H30.2671C32.3272 14.3477 33.6466 11.8257 33.6466 9.00439C33.6467 4.03941 29.5618 0 24.5408 0C20.2553 0 16.6523 2.94316 15.6888 6.89267C14.4283 5.3887 12.5259 4.42894 10.4008 4.42894C6.61457 4.42894 3.53442 7.47494 3.53442 11.219C3.53442 13.0821 4.29752 14.772 5.53053 16.0002H4.60309C4.04209 16.0002 3.5873 16.4499 3.5873 17.0046V21.5643H1.01579C0.454789 21.5643 1.08494e-08 22.014 1.08494e-08 22.5688V26.5189C1.08494e-08 27.0737 0.454789 27.5234 1.01579 27.5234H3.58721V32.083C3.58721 32.6378 4.042 33.0875 4.603 33.0875H16.586L11.0803 43.531C10.821 44.0228 11.014 44.6295 11.5115 44.886C11.6615 44.9634 11.822 45 11.9801 45C12.3466 45 12.7005 44.8032 12.8816 44.4597L18.2608 34.2559L23.6401 44.4597C23.8212 44.8034 24.1752 45 24.5416 45C24.6998 45 24.8604 44.9634 25.0103 44.886C25.5077 44.6295 25.7008 44.0228 25.4414 43.531L19.9357 33.0875H31.9189C32.4798 33.0875 32.9347 32.6378 32.9347 32.083V29.087L39.5029 32.583C39.6534 32.6631 39.8188 32.703 39.9842 32.703C40.1646 32.703 40.345 32.6554 40.5052 32.5609C40.8122 32.3796 41 32.0521 41 31.6986V17.3888C41 17.0352 40.8122 16.7078 40.5052 16.5265ZM3.5873 25.5141H2.03158V23.5729H3.5873V25.5141ZM24.5408 2.0089C28.4415 2.0089 31.6151 5.14709 31.6151 9.00448C31.6151 12.8619 28.4416 16 24.5408 16C20.6402 16 17.4667 12.8618 17.4667 9.00448C17.4668 5.14718 20.6403 2.0089 24.5408 2.0089ZM16.7842 13.7155C17.3267 14.586 18.0149 15.3585 18.8148 16H15.271C15.9206 15.3529 16.4383 14.577 16.7842 13.7155ZM10.4008 6.43775C13.0667 6.43775 15.2357 8.58252 15.2357 11.2189C15.2357 13.8552 13.0668 16.0001 10.4008 16.0001C7.73488 16.0001 5.5659 13.8553 5.5659 11.2189C5.56599 8.58252 7.73488 6.43775 10.4008 6.43775ZM30.9032 21.6816V27.4053V31.0782H18.2792C18.2773 31.0782 18.2756 31.0782 18.2737 31.0782H18.2469C18.2457 31.0782 18.2445 31.0782 18.2434 31.0782H5.61878V26.5185V22.5684V18.0088H30.9032V21.6816ZM38.9685 30.0169L32.9347 26.8052V22.2817L38.9685 19.0701V30.0169Z",
    transform: "translate(6 2)",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    id: "Vector_2",
    d: "M3.08549 -2.14575e-08C1.3841 -2.14575e-08 -5.96716e-08 1.3688 -5.96716e-08 3.05118C-5.96716e-08 4.73366 1.38419 6.10236 3.08549 6.10236C4.78689 6.10236 6.17098 4.73357 6.17098 3.05118C6.17107 1.3688 4.78689 -2.14575e-08 3.08549 -2.14575e-08ZM3.08549 4.29429C2.39224 4.29429 1.82831 3.73663 1.82831 3.05109C1.82831 2.36555 2.39224 1.80789 3.08549 1.80789C3.77874 1.80789 4.34267 2.36555 4.34267 3.05109C4.34267 3.73663 3.77865 4.29429 3.08549 4.29429Z",
    transform: "translate(13.3153 10.1677)",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    id: "Vector_3",
    d: "M4.43111 1.07287e-07C1.98776 1.07287e-07 -5.75017e-07 1.96574 -5.75017e-07 4.38192C-5.75017e-07 6.79801 1.98776 8.76375 4.43111 8.76375C6.87445 8.76375 8.86221 6.79801 8.86221 4.38192C8.86221 1.96574 6.87454 1.07287e-07 4.43111 1.07287e-07ZM4.43111 6.75486C3.10798 6.75486 2.03149 5.69034 2.03149 4.38192C2.03149 3.07351 3.10798 2.0089 4.43111 2.0089C5.75423 2.0089 6.83072 3.07342 6.83072 4.38192C6.83072 5.69042 5.75423 6.75486 4.43111 6.75486Z",
    transform: "translate(26.1097 6.62254)",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    id: "Vector_4",
    d: "M12.0089 -5.79351e-07H0.964949C0.431947 -5.79351e-07 -1.84439e-07 0.427232 -1.84439e-07 0.954219V6.27322C-1.84439e-07 6.80029 0.432036 7.22744 0.964949 7.22744H12.0089C12.5419 7.22744 12.9739 6.80021 12.9739 6.27322V0.954219C12.9739 0.42732 12.5419 -5.79351e-07 12.0089 -5.79351e-07ZM11.0439 5.319H1.9299V1.90853H11.044V5.319H11.0439Z",
    transform: "translate(15.2548 22.9298)",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    id: "Vector_5",
    d: "M1.01579 2.00899C1.57679 2.00899 2.03158 1.55926 2.03158 1.00449C2.03158 0.449726 1.57679 0 1.01579 0C0.454785 0 0 0.449726 0 1.00449C0 1.55926 0.454785 2.00899 1.01579 2.00899Z",
    transform: "translate(31.5755 23.8839)",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    id: "Vector_6",
    d: "M1.01579 2.00898C1.57679 2.00898 2.03158 1.55926 2.03158 1.00449C2.03158 0.449727 1.57679 0 1.01579 0C0.454785 0 0 0.449727 0 1.00449C0 1.55926 0.454785 2.00898 1.01579 2.00898Z",
    transform: "translate(31.5755 27.1936)",
    fill: "#FFFDFD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: __WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash,
    css: __WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scoped
  }));
};
var Custom = function Custom() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    width: "55",
    height: "50",
    viewBox: "0 0 55 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "55",
    height: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    id: "Rectangle",
    width: "54.1667",
    height: "50",
    fill: "#C4C4C4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    mask: "url(#mask0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "favorites",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Vector",
    transform: "translate(20.9242 17)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
    id: "path-2-outside-1",
    maskUnits: "userSpaceOnUse",
    x: "-1",
    y: "-1",
    width: "16",
    height: "15",
    fill: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    fill: "white",
    x: "-1",
    y: "-1",
    width: "16",
    height: "15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M13.8323 5.8855C14.122 5.61675 14.2243 5.22231 14.0993 4.85613C13.9743 4.48995 13.6479 4.22809 13.2475 4.17275L9.74659 3.68862C9.67787 3.67913 9.61846 3.63806 9.58771 3.57876L8.02205 0.559757C7.84302 0.214481 7.48046 -1.70171e-09 7.07587 -1.70171e-09C6.67127 -1.70171e-09 6.30871 0.214481 6.12968 0.559757L4.56402 3.57879C4.53324 3.63806 4.47386 3.67913 4.40511 3.68865L0.904235 4.17275C0.50386 4.22809 0.177516 4.48995 0.0524533 4.85613C-0.0726094 5.22231 0.0297032 5.61675 0.319454 5.8855L2.85274 8.23549C2.90246 8.28164 2.92517 8.34811 2.91342 8.41327L2.31539 11.7315C2.24702 12.111 2.40783 12.4873 2.73514 12.7136C3.06246 12.94 3.48833 12.9692 3.84639 12.7901L6.97768 11.2234C7.03918 11.1927 7.11259 11.1927 7.17412 11.2234L10.3054 12.7901C10.4612 12.868 10.6297 12.9065 10.7974 12.9065C11.0152 12.9065 11.2317 12.8415 11.4166 12.7136C11.7439 12.4872 11.9047 12.1109 11.8363 11.7315L11.2383 8.41324C11.2266 8.34808 11.2493 8.28161 11.299 8.23546L13.8323 5.8855ZM10.4064 8.54909L11.0044 11.8674C11.0244 11.9784 10.9524 12.0417 10.9205 12.0638C10.8886 12.0858 10.803 12.1315 10.6982 12.079L7.56693 10.5124C7.41321 10.4355 7.24459 10.397 7.07593 10.397C6.90727 10.397 6.73862 10.4355 6.58493 10.5123L3.45364 12.079C3.34883 12.1314 3.2633 12.0857 3.23139 12.0637C3.19949 12.0417 3.12742 11.9783 3.14746 11.8673L3.74549 8.54909C3.80421 8.22329 3.6908 7.89104 3.44202 7.6603L0.908735 5.31031C0.823954 5.23162 0.843141 5.14011 0.85536 5.10442C0.867517 5.06871 0.908548 4.98392 1.0257 4.96774L4.52655 4.48361C4.87027 4.43609 5.1673 4.23077 5.32105 3.9343L6.88671 0.915262C6.93912 0.814237 7.03649 0.803323 7.07596 0.803323C7.11537 0.803323 7.21274 0.814207 7.26518 0.915262V0.915292L8.83084 3.93433C8.98456 4.2308 9.28156 4.43612 9.62528 4.48364L13.1262 4.96777C13.2433 4.98395 13.2843 5.06874 13.2965 5.10445C13.3087 5.14017 13.3279 5.23171 13.2431 5.31034L10.7098 7.66033C10.4611 7.89104 10.3477 8.22329 10.4064 8.54909Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M13.8323 5.8855C14.122 5.61675 14.2243 5.22231 14.0993 4.85613C13.9743 4.48995 13.6479 4.22809 13.2475 4.17275L9.74659 3.68862C9.67787 3.67913 9.61846 3.63806 9.58771 3.57876L8.02205 0.559757C7.84302 0.214481 7.48046 -1.70171e-09 7.07587 -1.70171e-09C6.67127 -1.70171e-09 6.30871 0.214481 6.12968 0.559757L4.56402 3.57879C4.53324 3.63806 4.47386 3.67913 4.40511 3.68865L0.904235 4.17275C0.50386 4.22809 0.177516 4.48995 0.0524533 4.85613C-0.0726094 5.22231 0.0297032 5.61675 0.319454 5.8855L2.85274 8.23549C2.90246 8.28164 2.92517 8.34811 2.91342 8.41327L2.31539 11.7315C2.24702 12.111 2.40783 12.4873 2.73514 12.7136C3.06246 12.94 3.48833 12.9692 3.84639 12.7901L6.97768 11.2234C7.03918 11.1927 7.11259 11.1927 7.17412 11.2234L10.3054 12.7901C10.4612 12.868 10.6297 12.9065 10.7974 12.9065C11.0152 12.9065 11.2317 12.8415 11.4166 12.7136C11.7439 12.4872 11.9047 12.1109 11.8363 11.7315L11.2383 8.41324C11.2266 8.34808 11.2493 8.28161 11.299 8.23546L13.8323 5.8855ZM10.4064 8.54909L11.0044 11.8674C11.0244 11.9784 10.9524 12.0417 10.9205 12.0638C10.8886 12.0858 10.803 12.1315 10.6982 12.079L7.56693 10.5124C7.41321 10.4355 7.24459 10.397 7.07593 10.397C6.90727 10.397 6.73862 10.4355 6.58493 10.5123L3.45364 12.079C3.34883 12.1314 3.2633 12.0857 3.23139 12.0637C3.19949 12.0417 3.12742 11.9783 3.14746 11.8673L3.74549 8.54909C3.80421 8.22329 3.6908 7.89104 3.44202 7.6603L0.908735 5.31031C0.823954 5.23162 0.843141 5.14011 0.85536 5.10442C0.867517 5.06871 0.908548 4.98392 1.0257 4.96774L4.52655 4.48361C4.87027 4.43609 5.1673 4.23077 5.32105 3.9343L6.88671 0.915262C6.93912 0.814237 7.03649 0.803323 7.07596 0.803323C7.11537 0.803323 7.21274 0.814207 7.26518 0.915262V0.915292L8.83084 3.93433C8.98456 4.2308 9.28156 4.43612 9.62528 4.48364L13.1262 4.96777C13.2433 4.98395 13.2843 5.06874 13.2965 5.10445C13.3087 5.14017 13.3279 5.23171 13.2431 5.31034L10.7098 7.66033C10.4611 7.89104 10.3477 8.22329 10.4064 8.54909Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M13.8323 5.8855C14.122 5.61675 14.2243 5.22231 14.0993 4.85613C13.9743 4.48995 13.6479 4.22809 13.2475 4.17275L9.74659 3.68862C9.67787 3.67913 9.61846 3.63806 9.58771 3.57876L8.02205 0.559757C7.84302 0.214481 7.48046 -1.70171e-09 7.07587 -1.70171e-09C6.67127 -1.70171e-09 6.30871 0.214481 6.12968 0.559757L4.56402 3.57879C4.53324 3.63806 4.47386 3.67913 4.40511 3.68865L0.904235 4.17275C0.50386 4.22809 0.177516 4.48995 0.0524533 4.85613C-0.0726094 5.22231 0.0297032 5.61675 0.319454 5.8855L2.85274 8.23549C2.90246 8.28164 2.92517 8.34811 2.91342 8.41327L2.31539 11.7315C2.24702 12.111 2.40783 12.4873 2.73514 12.7136C3.06246 12.94 3.48833 12.9692 3.84639 12.7901L6.97768 11.2234C7.03918 11.1927 7.11259 11.1927 7.17412 11.2234L10.3054 12.7901C10.4612 12.868 10.6297 12.9065 10.7974 12.9065C11.0152 12.9065 11.2317 12.8415 11.4166 12.7136C11.7439 12.4872 11.9047 12.1109 11.8363 11.7315L11.2383 8.41324C11.2266 8.34808 11.2493 8.28161 11.299 8.23546L13.8323 5.8855ZM10.4064 8.54909L11.0044 11.8674C11.0244 11.9784 10.9524 12.0417 10.9205 12.0638C10.8886 12.0858 10.803 12.1315 10.6982 12.079L7.56693 10.5124C7.41321 10.4355 7.24459 10.397 7.07593 10.397C6.90727 10.397 6.73862 10.4355 6.58493 10.5123L3.45364 12.079C3.34883 12.1314 3.2633 12.0857 3.23139 12.0637C3.19949 12.0417 3.12742 11.9783 3.14746 11.8673L3.74549 8.54909C3.80421 8.22329 3.6908 7.89104 3.44202 7.6603L0.908735 5.31031C0.823954 5.23162 0.843141 5.14011 0.85536 5.10442C0.867517 5.06871 0.908548 4.98392 1.0257 4.96774L4.52655 4.48361C4.87027 4.43609 5.1673 4.23077 5.32105 3.9343L6.88671 0.915262C6.93912 0.814237 7.03649 0.803323 7.07596 0.803323C7.11537 0.803323 7.21274 0.814207 7.26518 0.915262V0.915292L8.83084 3.93433C8.98456 4.2308 9.28156 4.43612 9.62528 4.48364L13.1262 4.96777C13.2433 4.98395 13.2843 5.06874 13.2965 5.10445C13.3087 5.14017 13.3279 5.23171 13.2431 5.31034L10.7098 7.66033C10.4611 7.89104 10.3477 8.22329 10.4064 8.54909Z",
    stroke: "#FFF3F3",
    mask: "url(#path-2-outside-1)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Vector_2",
    transform: "translate(31.8125 17.4828)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
    id: "path-3-outside-2",
    maskUnits: "userSpaceOnUse",
    x: "-1",
    y: "-1",
    width: "3",
    height: "3",
    fill: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    fill: "white",
    x: "-1",
    y: "-1",
    width: "3",
    height: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M1.1182 0.0767286C0.929573 -0.0536492 0.665667 -0.0138578 0.528666 0.16559L0.0806346 0.75241C-0.0563655 0.931858 -0.014584 1.18307 0.17401 1.31344C0.248979 1.36522 0.33576 1.39017 0.42176 1.39017C0.552292 1.39017 0.680979 1.33275 0.763541 1.22461L1.21157 0.637794C1.34857 0.458316 1.30679 0.207107 1.1182 0.0767286Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M1.1182 0.0767286C0.929573 -0.0536492 0.665667 -0.0138578 0.528666 0.16559L0.0806346 0.75241C-0.0563655 0.931858 -0.014584 1.18307 0.17401 1.31344C0.248979 1.36522 0.33576 1.39017 0.42176 1.39017C0.552292 1.39017 0.680979 1.33275 0.763541 1.22461L1.21157 0.637794C1.34857 0.458316 1.30679 0.207107 1.1182 0.0767286Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M1.1182 0.0767286C0.929573 -0.0536492 0.665667 -0.0138578 0.528666 0.16559L0.0806346 0.75241C-0.0563655 0.931858 -0.014584 1.18307 0.17401 1.31344C0.248979 1.36522 0.33576 1.39017 0.42176 1.39017C0.552292 1.39017 0.680979 1.33275 0.763541 1.22461L1.21157 0.637794C1.34857 0.458316 1.30679 0.207107 1.1182 0.0767286Z",
    stroke: "#FFF3F3",
    mask: "url(#path-3-outside-2)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Vector_3",
    transform: "translate(22.8935 17.4805)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
    id: "path-4-outside-3",
    maskUnits: "userSpaceOnUse",
    x: "-1",
    y: "-1",
    width: "3",
    height: "3",
    fill: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    fill: "white",
    x: "-1",
    y: "-1",
    width: "3",
    height: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M1.21156 0.752367L0.763533 0.165548C0.626564 -0.013841 0.362626 -0.0536325 0.174001 0.0766859C-0.0145618 0.207064 -0.0563743 0.458273 0.0806258 0.637721L0.528658 1.22454C0.611252 1.33276 0.739939 1.39016 0.870502 1.39016C0.956533 1.39016 1.04335 1.36521 1.11822 1.3134C1.30678 1.18305 1.3486 0.931845 1.21156 0.752367Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M1.21156 0.752367L0.763533 0.165548C0.626564 -0.013841 0.362626 -0.0536325 0.174001 0.0766859C-0.0145618 0.207064 -0.0563743 0.458273 0.0806258 0.637721L0.528658 1.22454C0.611252 1.33276 0.739939 1.39016 0.870502 1.39016C0.956533 1.39016 1.04335 1.36521 1.11822 1.3134C1.30678 1.18305 1.3486 0.931845 1.21156 0.752367Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M1.21156 0.752367L0.763533 0.165548C0.626564 -0.013841 0.362626 -0.0536325 0.174001 0.0766859C-0.0145618 0.207064 -0.0563743 0.458273 0.0806258 0.637721L0.528658 1.22454C0.611252 1.33276 0.739939 1.39016 0.870502 1.39016C0.956533 1.39016 1.04335 1.36521 1.11822 1.3134C1.30678 1.18305 1.3486 0.931845 1.21156 0.752367Z",
    stroke: "#FFF3F3",
    mask: "url(#path-4-outside-3)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Vector_4",
    transform: "translate(20 25.734)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
    id: "path-5-outside-4",
    maskUnits: "userSpaceOnUse",
    x: "-1",
    y: "-1",
    width: "4",
    height: "3",
    fill: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    fill: "white",
    x: "-1",
    y: "-1",
    width: "4",
    height: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M1.5485 0.277637C1.47646 0.0666945 1.23837 -0.0487846 1.01665 0.019765L0.291744 0.243942C0.070025 0.312491 -0.0512564 0.539135 0.020775 0.750078C0.0787125 0.91986 0.244181 1.02776 0.422088 1.02776C0.465307 1.02776 0.509275 1.02136 0.552619 1.00795L1.27753 0.783772C1.49921 0.715223 1.62053 0.488638 1.5485 0.277637Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M1.5485 0.277637C1.47646 0.0666945 1.23837 -0.0487846 1.01665 0.019765L0.291744 0.243942C0.070025 0.312491 -0.0512564 0.539135 0.020775 0.750078C0.0787125 0.91986 0.244181 1.02776 0.422088 1.02776C0.465307 1.02776 0.509275 1.02136 0.552619 1.00795L1.27753 0.783772C1.49921 0.715223 1.62053 0.488638 1.5485 0.277637Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M1.5485 0.277637C1.47646 0.0666945 1.23837 -0.0487846 1.01665 0.019765L0.291744 0.243942C0.070025 0.312491 -0.0512564 0.539135 0.020775 0.750078C0.0787125 0.91986 0.244181 1.02776 0.422088 1.02776C0.465307 1.02776 0.509275 1.02136 0.552619 1.00795L1.27753 0.783772C1.49921 0.715223 1.62053 0.488638 1.5485 0.277637Z",
    stroke: "#FFF3F3",
    mask: "url(#path-5-outside-4)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Vector_5",
    transform: "translate(27.578 30.4713)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
    id: "path-6-outside-5",
    maskUnits: "userSpaceOnUse",
    x: "-1",
    y: "-1",
    width: "3",
    height: "4",
    fill: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    fill: "white",
    x: "-1",
    y: "-1",
    width: "3",
    height: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M0.422063 3.19467e-07C0.188969 3.19467e-07 -2.21253e-07 0.179834 -2.21253e-07 0.401661V1.12707C-2.21253e-07 1.34889 0.188969 1.52873 0.422063 1.52873C0.655157 1.52873 0.844125 1.34889 0.844125 1.12707V0.401661C0.844125 0.179805 0.655188 3.19467e-07 0.422063 3.19467e-07Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M0.422063 3.19467e-07C0.188969 3.19467e-07 -2.21253e-07 0.179834 -2.21253e-07 0.401661V1.12707C-2.21253e-07 1.34889 0.188969 1.52873 0.422063 1.52873C0.655157 1.52873 0.844125 1.34889 0.844125 1.12707V0.401661C0.844125 0.179805 0.655188 3.19467e-07 0.422063 3.19467e-07Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M0.422063 3.19467e-07C0.188969 3.19467e-07 -2.21253e-07 0.179834 -2.21253e-07 0.401661V1.12707C-2.21253e-07 1.34889 0.188969 1.52873 0.422063 1.52873C0.655157 1.52873 0.844125 1.34889 0.844125 1.12707V0.401661C0.844125 0.179805 0.655188 3.19467e-07 0.422063 3.19467e-07Z",
    stroke: "#FFF3F3",
    mask: "url(#path-6-outside-5)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Vector_6",
    transform: "translate(34.4308 25.7346)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
    id: "path-7-outside-6",
    maskUnits: "userSpaceOnUse",
    x: "-1",
    y: "-1",
    width: "4",
    height: "3",
    fill: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    fill: "white",
    x: "-1",
    y: "-1",
    width: "4",
    height: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M1.27753 0.243921L0.55262 0.0197453C0.330994 -0.0487448 0.0928062 0.0666444 0.0207749 0.277646C-0.0512564 0.488648 0.0700246 0.715233 0.291744 0.783783L1.01665 1.00796C1.05999 1.02134 1.10393 1.02771 1.14715 1.02771C1.32509 1.02771 1.49056 0.919781 1.54849 0.750028C1.62053 0.539056 1.49921 0.312471 1.27753 0.243921Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M1.27753 0.243921L0.55262 0.0197453C0.330994 -0.0487448 0.0928062 0.0666444 0.0207749 0.277646C-0.0512564 0.488648 0.0700246 0.715233 0.291744 0.783783L1.01665 1.00796C1.05999 1.02134 1.10393 1.02771 1.14715 1.02771C1.32509 1.02771 1.49056 0.919781 1.54849 0.750028C1.62053 0.539056 1.49921 0.312471 1.27753 0.243921Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M1.27753 0.243921L0.55262 0.0197453C0.330994 -0.0487448 0.0928062 0.0666444 0.0207749 0.277646C-0.0512564 0.488648 0.0700246 0.715233 0.291744 0.783783L1.01665 1.00796C1.05999 1.02134 1.10393 1.02771 1.14715 1.02771C1.32509 1.02771 1.49056 0.919781 1.54849 0.750028C1.62053 0.539056 1.49921 0.312471 1.27753 0.243921Z",
    stroke: "#FFF3F3",
    mask: "url(#path-7-outside-6)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    id: "Union",
    d: "M12.2878 0.0237788L12.25 0L12.2226 0.035282L12.2615 0.0660274M12.2878 0.0237788L12.2615 0.0660274M12.2878 0.0237788C12.2877 0.0237544 12.2878 0.0237788 12.2615 0.0660274M12.2878 0.0237788L12.2888 0.0244279L12.292 0.0264263L12.3047 0.0343859C12.316 0.0414251 12.3329 0.0518918 12.3551 0.0655586C12.3995 0.0928922 12.4652 0.133025 12.5504 0.184137C12.7208 0.286363 12.9691 0.432497 13.2802 0.607981C13.9026 0.958973 14.7764 1.42726 15.7824 1.89644C17.7962 2.83571 20.332 3.77501 22.4381 3.78985C24.5703 3.80488 27.1464 2.87866 29.194 1.94496C30.2169 1.47856 31.106 1.01118 31.7394 0.660406C32.0561 0.485028 32.3088 0.338826 32.4823 0.236506C32.569 0.185347 32.6359 0.14516 32.6811 0.117784C32.7038 0.104096 32.7209 0.0936114 32.7324 0.0865593L32.7454 0.0785846L32.7495 0.0760865L32.7496 0.0759662M12.2615 0.0660274C12.2226 0.035282 12.2225 0.0353381 12.2225 0.0354503L12.0935 0.201034C12.0093 0.309196 11.8857 0.467928 11.7281 0.670201C11.4129 1.07475 10.9619 1.65347 10.4184 2.35014C9.33144 3.74349 7.87481 5.60866 6.39611 7.49596C4.91739 9.38327 3.41663 11.2927 2.2414 12.7744C1.65377 13.5153 1.1476 14.1492 0.766296 14.62C0.383888 15.0921 0.12932 15.3973 0.0432662 15.4835L0 15.5269L10.6863 22.5752L10.6391 41.3364L34.1968 41.3965L34.244 22.6354L45.0125 15.6417L44.9691 15.5981C44.8831 15.5114 44.629 15.2049 44.2473 14.7309C43.8667 14.2582 43.3616 13.6217 42.7751 12.8778C41.6022 11.39 40.1046 9.47297 38.6289 7.57812C37.1533 5.68329 35.6997 3.81069 34.6151 2.4118C34.0728 1.71235 33.6226 1.13134 33.3081 0.725181C33.1509 0.522104 33.0275 0.362743 32.9435 0.254151L32.8152 0.0884165L32.8148 0.08791C32.8147 0.0877974 32.8147 0.087741 32.7757 0.11837M32.7757 0.11837C32.7497 0.0759315 32.7497 0.0759418 32.7496 0.0759662M32.7757 0.11837L32.7496 0.0759662M32.7757 0.11837L32.8147 0.0877411L32.7875 0.0525297L32.7496 0.0759662M44.8573 15.6239L34.2443 22.5166L34.2714 11.7598L34.1724 11.7595L34.0981 41.2966L10.7384 41.237L10.8127 11.6999L10.7137 11.6997L10.6866 22.4563L0.154904 15.5099C0.270392 15.3831 0.510073 15.094 0.842992 14.683C1.22462 14.2119 1.73103 13.5776 2.31873 12.8366C3.49415 11.3546 4.99505 9.44506 6.47381 7.5577C7.95257 5.67033 9.40924 3.8051 10.4962 2.41172C11.0397 1.71502 11.4908 1.13629 11.806 0.731729C11.9636 0.529448 12.0872 0.370711 12.1714 0.262542L12.2732 0.131876C12.2818 0.137243 12.2919 0.143495 12.3035 0.1506C12.3482 0.178122 12.4142 0.218452 12.4998 0.269768C12.6708 0.372399 12.9199 0.518983 13.2319 0.694948C13.8558 1.04685 14.732 1.51638 15.7408 1.98689C17.7564 2.92699 20.3087 3.87452 22.4374 3.88952C24.5925 3.90471 27.1854 2.97028 29.2348 2.03576C30.2606 1.56805 31.152 1.09944 31.7871 0.747746C32.1046 0.57189 32.3581 0.425239 32.5323 0.322515C32.6194 0.271152 32.6866 0.230769 32.7322 0.203205C32.7442 0.195903 32.7547 0.189501 32.7637 0.184032L32.8654 0.315427C32.9495 0.424025 33.0728 0.583393 33.2301 0.786477C33.5446 1.19265 33.9947 1.77368 34.5371 2.47314C35.6217 3.87207 37.0753 5.74472 38.551 7.63963C40.0267 9.53453 41.5245 11.4517 42.6976 12.9398C43.2841 13.6837 43.7895 14.3205 44.1704 14.7936C44.5026 15.2063 44.7419 15.4965 44.8573 15.6239Z",
    transform: "translate(5 4)",
    stroke: "#FFF3F3",
    "stroke-width": "2",
    "stroke-linejoin": "round",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: __WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash,
    css: __WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scoped
  }));
};
var Contact = function Contact() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    width: "55",
    height: "50",
    viewBox: "0 0 55 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "55",
    height: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    id: "Rectangle",
    width: "54.1667",
    height: "50",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    mask: "url(#mask0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "phone-call",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    id: "Vector",
    d: "M35.595 28.1918L28.3451 20.9419C27.4796 20.0765 26.0717 20.0765 25.2062 20.9419L23.3209 22.8272C22.7302 23.4179 22.5435 24.2613 22.7592 25.0126L22.0479 25.7239C22.0477 25.7241 22.0475 25.7243 22.0473 25.7245C21.5422 26.2302 18.3962 25.4541 14.5934 21.6514C10.7912 17.8492 10.0149 14.7038 10.5201 14.1977C10.5201 14.1976 10.5202 14.1976 10.5202 14.1976L11.2322 13.4857C11.4331 13.5434 11.6405 13.5729 11.8481 13.5729C12.4165 13.5729 12.9848 13.3566 13.4176 12.924L15.3028 11.0387C16.1682 10.1733 16.1682 8.76539 15.3028 7.89993L8.0529 0.649957C7.63375 0.230816 7.07636 -3.25292e-08 6.48357 -3.25292e-08C5.89062 -3.25292e-08 5.33345 0.230961 4.91424 0.649957L3.02881 2.53537C2.43811 3.12607 2.25138 3.96955 2.46709 4.72075C2.46709 4.72075 1.8641 5.32952 1.83411 5.36796C-0.171488 7.59728 -0.547777 11.1072 0.781846 15.3035C2.08386 19.4124 4.89068 23.765 8.68537 27.5594C12.4799 31.354 16.8326 34.1608 20.9414 35.4629C22.592 35.9859 24.1361 36.245 25.5382 36.245C27.8372 36.245 29.754 35.5478 31.128 34.1739L31.5236 33.7783C31.7216 33.8353 31.9284 33.866 32.1402 33.866C32.7331 33.866 33.2904 33.635 33.7095 33.216L35.5949 31.3306C36.4603 30.4652 36.4603 29.0572 35.595 28.1918ZM6.48357 2.21928L13.7336 9.46933L11.8493 11.3556C11.8493 11.3556 11.849 11.3552 11.8483 11.3546L11.8212 11.3275L8.2233 7.7296L4.59822 4.10469L6.48357 2.21928ZM29.5588 32.6045C29.5586 32.6047 29.5585 32.6047 29.5584 32.6049C27.9618 34.2013 25.1396 34.465 21.612 33.347C17.8359 32.1505 13.8025 29.5376 10.2549 25.99C6.70716 22.4423 4.09431 18.4091 2.8978 14.633C1.77984 11.1052 2.04354 8.28301 3.64033 6.68616L3.64047 6.68602L3.84065 6.48584L9.46707 12.1122L8.95102 12.6282C8.95066 12.6286 8.95037 12.629 8.94993 12.6294C6.81194 14.7701 9.38086 19.5776 13.0242 23.2208C15.751 25.9477 19.1301 28.0727 21.5552 28.0727C22.3707 28.0727 23.0783 27.8325 23.6168 27.2939C23.6171 27.2936 23.6172 27.2935 23.6174 27.2933L24.1329 26.7778L29.7593 32.4041L29.5588 32.6045ZM32.1403 31.6466L24.8903 24.3967L26.7756 22.5114L34.0256 29.7612C34.0256 29.7612 32.141 31.6473 32.1403 31.6466Z",
    transform: "translate(8 6.75498)",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    id: "Vector_2",
    d: "M9.01158 3.27313C6.90076 1.16232 4.09445 -7.23461e-05 1.10972 -8.04348e-08C0.496829 -8.04348e-08 8.29225e-07 0.496826 8.29225e-07 1.10971C8.29225e-07 1.7226 0.496901 2.21942 1.10972 2.21942C3.50172 2.21928 5.75057 3.15093 7.44225 4.84245C9.13371 6.5339 10.0651 8.78273 10.0651 11.1747C10.0651 11.7875 10.5619 12.2845 11.1748 12.2845C11.7876 12.2845 12.2845 11.7877 12.2845 11.1749C12.2846 8.19008 11.1221 5.38393 9.01158 3.27313Z",
    transform: "translate(27.0866 11.6288)",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    id: "Vector_3",
    d: "M12.9922 4.9218C9.81806 1.74782 5.59816 -0.000144522 1.10972 8.96227e-09C0.496828 8.96227e-09 -3.52862e-08 0.496898 -3.52862e-08 1.10971C-3.52862e-08 1.7226 0.4969 2.21942 1.10972 2.21942C5.00536 2.21928 8.66788 3.73642 11.4227 6.49112C14.1774 9.24574 15.6945 12.9082 15.6944 16.8039C15.6944 17.4167 16.1912 17.9136 16.8041 17.9136C17.4169 17.9136 17.9138 17.4167 17.9138 16.804C17.914 12.3154 16.166 8.0957 12.9922 4.9218Z",
    transform: "translate(27.0862 6)",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    id: "Vector_4",
    d: "M5.03087 1.62431C3.96813 0.561576 2.61249 3.44038e-07 1.11001 3.44038e-07C1.11001 3.44038e-07 1.10965 3.44038e-07 1.10957 3.44038e-07C0.496685 0.000144875 -0.000144342 0.496899 1.90314e-07 1.10986C0.000144722 1.72274 0.497046 2.21957 1.10986 2.21942C1.11001 2.21942 1.11008 2.21942 1.11022 2.21942C2.02396 2.21942 2.8152 2.54722 3.46169 3.19363C4.099 3.83102 4.43591 4.64437 4.43576 5.54545C4.43562 6.15833 4.93259 6.65516 5.54533 6.6553H5.54548C6.15837 6.6553 6.65505 6.15848 6.6552 5.54574C6.65527 4.04319 6.09369 2.6872 5.03087 1.62431Z",
    transform: "translate(27.0869 17.2578)",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: __WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash,
    css: __WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scoped
  }));
};
var Print = function Print() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    width: "55",
    height: "50",
    viewBox: "0 0 55 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Print",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "55",
    height: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    id: "Rectangle",
    width: "54.1667",
    height: "50",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    mask: "url(#mask0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "printer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    id: "Vector",
    d: "M40.9005 5.63959H32.6863V0.944877C32.6863 0.423137 32.2684 1.22173e-07 31.7532 1.22173e-07H12.2467C11.7315 1.22173e-07 11.3136 0.423137 11.3136 0.944877V5.63968H3.09942C1.39038 5.63959 0 7.04772 0 8.77848V23.8204C0 25.5511 1.39038 26.9593 3.09942 26.9593H11.3136V36.0551C11.3136 36.5769 11.7315 37 12.2467 37H31.7533C32.2685 37 32.6864 36.5769 32.6864 36.0551V26.9593H40.9006C42.6095 26.9593 44 25.5512 44 23.8204V8.77848C43.9999 7.04772 42.6094 5.63959 40.9005 5.63959ZM32.6862 7.52926H34.9117V10.1736H32.6862V7.52926ZM13.1796 1.88975H30.8202V10.1737H13.1796V1.88975ZM9.08813 7.52934H11.3136V10.1737H9.08813V7.52934V7.52934ZM30.8203 35.1102H13.1796V22.6669H30.8202V35.1102H30.8203ZM42.134 23.8204H42.134C42.134 24.5092 41.5806 25.0696 40.9006 25.0696H32.6863V22.667H34.3883C34.9034 22.667 35.3213 22.2438 35.3213 21.7221C35.3213 21.2003 34.9034 20.7772 34.3883 20.7772H31.7533H12.2467H9.61175C9.09655 20.7772 8.67873 21.2003 8.67873 21.7221C8.67873 22.2438 9.09655 22.667 9.61175 22.667H11.3137V25.0696H3.09942C2.41939 25.0696 1.86604 24.5092 1.86604 23.8204V8.77848C1.86604 8.08972 2.41939 7.52926 3.09942 7.52926H7.22217V11.1184C7.22217 11.6402 7.63992 12.0633 8.1552 12.0633H35.8448C36.36 12.0633 36.7778 11.6402 36.7778 11.1184V7.52926H40.9006C41.5806 7.52926 42.134 8.08964 42.134 8.77848V23.8204Z",
    transform: "translate(5 6)",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    id: "Vector_2",
    d: "M1.16892 2.36755C1.8145 2.36755 2.33784 1.83755 2.33784 1.18377C2.33784 0.529993 1.8145 0 1.16892 0C0.523343 0 0 0.529993 0 1.18377C0 1.83755 0.523343 2.36755 1.16892 2.36755Z",
    transform: "translate(9.74344 20.1189)",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    id: "Vector_3",
    d: "M5.28833 -5.52432e-07H0.933022C0.417828 -5.52432e-07 -3.04222e-07 0.422961 -3.04222e-07 0.944876C-3.04222e-07 1.46662 0.417742 1.88976 0.933022 1.88976H5.28833C5.80352 1.88976 6.22135 1.46662 6.22135 0.944876C6.22135 0.422961 5.80352 -5.52432e-07 5.28833 -5.52432e-07Z",
    transform: "translate(21.4409 35.8535)",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Group_8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    id: "Vector_4",
    d: "M10.1852 1.48732e-07H0.933022C0.417828 1.48732e-07 -3.04222e-07 0.423136 -3.04222e-07 0.944877C-3.04222e-07 1.46671 0.417742 1.88975 0.933022 1.88975H10.1851C10.7003 1.88975 11.1181 1.46671 11.1181 0.944877C11.1181 0.423136 10.7004 1.48732e-07 10.1852 1.48732e-07Z",
    transform: "translate(21.4409 31.0692)",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash)
  })))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: __WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scopedHash,
    css: __WEBPACK_IMPORTED_MODULE_2__MenuIcons_style__["a" /* default */].__scoped
  }));
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HomeIcon, "HomeIcon", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Menu\\MenuIcons.js");
  reactHotLoader.register(PhotoIcon, "PhotoIcon", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Menu\\MenuIcons.js");
  reactHotLoader.register(Video, "Video", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Menu\\MenuIcons.js");
  reactHotLoader.register(Custom, "Custom", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Menu\\MenuIcons.js");
  reactHotLoader.register(Contact, "Contact", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Menu\\MenuIcons.js");
  reactHotLoader.register(Print, "Print", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Menu\\MenuIcons.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Menu/MenuIcons.style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _defaultExport = new String("@media only screen and (max-device-width:320px){svg{width:45px;height:45px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE1lbnVcXE1lbnVJY29ucy5zdHlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFa0IsQUFJd0IsV0FDQyxZQUNoQiIsImZpbGUiOiJjb21wb25lbnRzXFxNZW51XFxNZW51SWNvbnMuc3R5bGUuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxzdGVmYVxccHJvZ3JhbW1pbmdcXEF0ZWxpZXJ1bEhhaUh1aVxcbmV4dC1haGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7Il19 */\n/*@ sourceURL=components\\Menu\\MenuIcons.style.js */");

_defaultExport.__hash = "2109942806";
_defaultExport.__scoped = "@media only screen and (max-device-width:320px){svg.jsx-879376407{width:45px;height:45px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE1lbnVcXE1lbnVJY29ucy5zdHlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFa0IsQUFJd0IsV0FDQyxZQUNoQiIsImZpbGUiOiJjb21wb25lbnRzXFxNZW51XFxNZW51SWNvbnMuc3R5bGUuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxzdGVmYVxccHJvZ3JhbW1pbmdcXEF0ZWxpZXJ1bEhhaUh1aVxcbmV4dC1haGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7Il19 */\n/*@ sourceURL=components\\Menu\\MenuIcons.style.js */";
_defaultExport.__scopedHash = "879376407";
var _default = _defaultExport;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Menu\\MenuIcons.style.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./css/Global.style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baisicBageStyle; });
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var baisicBageStyle = new String("div.basicPage{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzc1xcR2xvYmFsLnN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQyxBQUdzQiwwRUFDUyw4RUFDWCxXQUNDLFlBQ00sa0JBQ3RCIiwiZmlsZSI6ImNzc1xcR2xvYmFsLnN0eWxlLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcc3RlZmFcXHByb2dyYW1taW5nXFxBdGVsaWVydWxIYWlIdWlcXG5leHQtYWhoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgYmFpc2ljQmFnZVN0eWxlID0gY3NzYFxyXG4gICAgZGl2LmJhc2ljUGFnZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3NgXHJcbiAgICAqIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90b1xyXG4gICAgfVxyXG5cclxuICAgIGh0bWwsIGJvZHksIGJvZHkgPiBkaXY6bnRoLWNoaWxkKDEpLCAjX19uZXh0LCAjX19uZXh0ID4gZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItZG9uZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQtYWN0aXZlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdC1kb25lIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlO1xyXG4gICAgfVxyXG5gO1xyXG4iXX0= */\n/*@ sourceURL=css\\Global.style.js */");
baisicBageStyle.__hash = "1733982331";
baisicBageStyle.__scoped = "div.basicPage.jsx-1335833786{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzc1xcR2xvYmFsLnN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQyxBQUdzQiwwRUFDUyw4RUFDWCxXQUNDLFlBQ00sa0JBQ3RCIiwiZmlsZSI6ImNzc1xcR2xvYmFsLnN0eWxlLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcc3RlZmFcXHByb2dyYW1taW5nXFxBdGVsaWVydWxIYWlIdWlcXG5leHQtYWhoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgYmFpc2ljQmFnZVN0eWxlID0gY3NzYFxyXG4gICAgZGl2LmJhc2ljUGFnZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3NgXHJcbiAgICAqIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90b1xyXG4gICAgfVxyXG5cclxuICAgIGh0bWwsIGJvZHksIGJvZHkgPiBkaXY6bnRoLWNoaWxkKDEpLCAjX19uZXh0LCAjX19uZXh0ID4gZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItZG9uZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQtYWN0aXZlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdC1kb25lIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlO1xyXG4gICAgfVxyXG5gO1xyXG4iXX0= */\n/*@ sourceURL=css\\Global.style.js */";
baisicBageStyle.__scopedHash = "1335833786";

var _defaultExport = new String("*{margin:0;font-family:Roboto;}html,body,body>div:nth-child(1),#__next,#__next>div{width:100%;height:100%;position:relative;}.page-transition-enter{width:100%;height:100%;opacity:0;}.page-transition-enter-active{width:100%;height:100%;opacity:1;-webkit-transition:opacity .5s ease;transition:opacity .5s ease;}.page-transition-enter-done{width:100%;height:100%;opacity:1;-webkit-transition:opacity .5s ease;transition:opacity .5s ease;}.page-transition-exit{width:100%;height:100%;opacity:1;}.page-transition-exit-active{width:100%;height:100%;opacity:1;-webkit-transition:opacity .5s ease;transition:opacity .5s ease;}.page-transition-exit-done{width:100%;height:100%;opacity:0;-webkit-transition:opacity .5s ease;transition:opacity .5s ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzc1xcR2xvYmFsLnN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlrQixBQUdrQixBQUtFLEFBTUEsQUFNQSxBQU9BLEFBT0EsQUFNQSxBQU9BLFNBMUNoQixFQUlpQixBQU1BLEFBTUEsQUFPQSxBQU9BLEFBTUEsQUFPQSxZQXRDTSxBQU1SLEFBTUEsQUFPQSxBQU9BLEFBTUEsQUFPQSxLQTVDZCxLQVlBLEFBTWdDLEFBT0EsQUFPaEMsQUFNZ0MsQUFPQSxRQXZDaEMsd0RBYUEsQUFPQSxBQWFBLEFBT0EiLCJmaWxlIjoiY3NzXFxHbG9iYWwuc3R5bGUuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxzdGVmYVxccHJvZ3JhbW1pbmdcXEF0ZWxpZXJ1bEhhaUh1aVxcbmV4dC1haGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBiYWlzaWNCYWdlU3R5bGUgPSBjc3NgXHJcbiAgICBkaXYuYmFzaWNQYWdlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuICAgICoge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvXHJcbiAgICB9XHJcblxyXG4gICAgaHRtbCwgYm9keSwgYm9keSA+IGRpdjpudGgtY2hpbGQoMSksICNfX25leHQsICNfX25leHQgPiBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlci1hY3RpdmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlci1kb25lIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdC1hY3RpdmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0LWRvbmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2U7XHJcbiAgICB9XHJcbmA7XHJcbiJdfQ== */\n/*@ sourceURL=css\\Global.style.js */");

_defaultExport.__hash = "3957711651";
_defaultExport.__scoped = "*.jsx-1244588674{margin:0;font-family:Roboto;}html.jsx-1244588674,body.jsx-1244588674,body.jsx-1244588674>div.jsx-1244588674:nth-child(1),#__next.jsx-1244588674,#__next.jsx-1244588674>div.jsx-1244588674{width:100%;height:100%;position:relative;}.page-transition-enter.jsx-1244588674{width:100%;height:100%;opacity:0;}.page-transition-enter-active.jsx-1244588674{width:100%;height:100%;opacity:1;-webkit-transition:opacity .5s ease;transition:opacity .5s ease;}.page-transition-enter-done.jsx-1244588674{width:100%;height:100%;opacity:1;-webkit-transition:opacity .5s ease;transition:opacity .5s ease;}.page-transition-exit.jsx-1244588674{width:100%;height:100%;opacity:1;}.page-transition-exit-active.jsx-1244588674{width:100%;height:100%;opacity:1;-webkit-transition:opacity .5s ease;transition:opacity .5s ease;}.page-transition-exit-done.jsx-1244588674{width:100%;height:100%;opacity:0;-webkit-transition:opacity .5s ease;transition:opacity .5s ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzc1xcR2xvYmFsLnN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlrQixBQUdrQixBQUtFLEFBTUEsQUFNQSxBQU9BLEFBT0EsQUFNQSxBQU9BLFNBMUNoQixFQUlpQixBQU1BLEFBTUEsQUFPQSxBQU9BLEFBTUEsQUFPQSxZQXRDTSxBQU1SLEFBTUEsQUFPQSxBQU9BLEFBTUEsQUFPQSxLQTVDZCxLQVlBLEFBTWdDLEFBT0EsQUFPaEMsQUFNZ0MsQUFPQSxRQXZDaEMsd0RBYUEsQUFPQSxBQWFBLEFBT0EiLCJmaWxlIjoiY3NzXFxHbG9iYWwuc3R5bGUuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxzdGVmYVxccHJvZ3JhbW1pbmdcXEF0ZWxpZXJ1bEhhaUh1aVxcbmV4dC1haGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBiYWlzaWNCYWdlU3R5bGUgPSBjc3NgXHJcbiAgICBkaXYuYmFzaWNQYWdlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuICAgICoge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvXHJcbiAgICB9XHJcblxyXG4gICAgaHRtbCwgYm9keSwgYm9keSA+IGRpdjpudGgtY2hpbGQoMSksICNfX25leHQsICNfX25leHQgPiBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlci1hY3RpdmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlci1kb25lIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdC1hY3RpdmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0LWRvbmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2U7XHJcbiAgICB9XHJcbmA7XHJcbiJdfQ== */\n/*@ sourceURL=css\\Global.style.js */";
_defaultExport.__scopedHash = "1244588674";
var _default = _defaultExport;
/* harmony default export */ __webpack_exports__["b"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(baisicBageStyle, "baisicBageStyle", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\css\\Global.style.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\css\\Global.style.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./css/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export svgBasic */
/* unused harmony export svgBasiRubric */
/* unused harmony export photoVideoOferta */
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var utils = {
  lightGrey: '#F2F2F2',
  grey: '#c1c1c1',
  red: '#FF3b3f',
  neutral: '#EFEFEF',
  neutral_fade: 'rgba(239,239,239,0.9)',
  sky: '#CAEBF2;',
  darkGreen: '#054D4D',
  green: '#0c9e9e',
  center: "\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%) translateY(-50%);\n    ",
  boxShadow: 'box-shadow: 1px 1px 1px rgba(0,0,0,.2)',
  boxShadowNone: 'box-shadow: 1px 1px 1px rgba(0,0,0,0)',
  boxShadowAround: 'box-shadow: 0px 0px 3px rgba(0,0,0,0.2)',
  defaultFontSize: 'font-size : 15px'
};
var svgBasic = new String("svg{height:300px;}@media (max-width:400px){svg{height:200px;}}*{stroke :".concat(utils.red, ";strokeWidth:2;stroke-dasharray:800;stroke-dashoffset:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzc1xcdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUIyQixBQUdzQixBQUtJLEFBS29CLGFBVHpDLEFBS0ksd0JBS2MsY0FDTyxxQkFDRCxvQkFDeEIiLCJmaWxlIjoiY3NzXFx1dGlscy5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHN0ZWZhXFxwcm9ncmFtbWluZ1xcQXRlbGllcnVsSGFpSHVpXFxuZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xyXG5cclxuY29uc3QgdXRpbHMgPSB7XHJcbiAgICBsaWdodEdyZXk6ICcjRjJGMkYyJyxcclxuICAgIGdyZXk6ICcjYzFjMWMxJyxcclxuICAgIHJlZCA6ICcjRkYzYjNmJyxcclxuICAgIG5ldXRyYWwgOiAnI0VGRUZFRicsXHJcbiAgICBuZXV0cmFsX2ZhZGU6ICdyZ2JhKDIzOSwyMzksMjM5LDAuOSknLFxyXG4gICAgc2t5IDogJyNDQUVCRjI7JyxcclxuICAgIGRhcmtHcmVlbiA6ICcjMDU0RDREJyxcclxuICAgIGdyZWVuIDogJyMwYzllOWUnLFxyXG4gICAgY2VudGVyOiBgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGAsXHJcbiAgICBib3hTaGFkb3cgOiAnYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwuMiknLFxyXG4gICAgYm94U2hhZG93Tm9uZSA6ICdib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDApJyxcclxuICAgIGJveFNoYWRvd0Fyb3VuZCA6ICdib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2JhKDAsMCwwLDAuMiknLFxyXG4gICAgZGVmYXVsdEZvbnRTaXplIDogJ2ZvbnQtc2l6ZSA6IDE1cHgnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdmdCYXNpYyA9IGNzc2BcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAqIHtcclxuICAgICAgICBzdHJva2UgOiAke3V0aWxzLnJlZH07XHJcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDI7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogODAwO1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBzdmdCYXNpUnVicmljID0gY3NzYFxyXG4gICAgc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBob3RvVmlkZW9PZmVydGEgPSBjc3NgXHJcbiAgICBkaXYub2ZlcnRhUGhvdG9WaWRlbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5kZXNjcmllcmVPZmVydGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDp3cmFwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYuZGVzY3JpZXJlT2ZlcnRhID4gZGl2IHtcclxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgIGRpdi5kZXNjcmllcmVPZmVydGEgPiBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkaXYuZGVzY3JpZXJlT2ZlcnRhIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAke3V0aWxzLnNreX07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYudGFiZWxPZmVydGUge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpdi50YWJlbE9mZXJ0ZSB0YWJsZSB7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYudGFiZWxPZmVydGUgdGgge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHt1dGlscy5za3l9O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGl2LnRhYmVsT2ZlcnRlIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGRpdi5ib251cyB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGl2LmJvbnVzIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogJHt1dGlscy5yZWR9O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgZGl2LmRlc2NyaWVyZU9mZXJ0YSBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYudGFiZWxPZmVydGUgdGQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYudGFiZWxPZmVydGUgdGgge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHV0aWxzOyJdfQ== */\n/*@ sourceURL=css\\utils.js */"));
svgBasic.__hash = "964161399";
svgBasic.__scoped = "svg.jsx-1554187062{height:300px;}@media (max-width:400px){svg.jsx-1554187062{height:200px;}}*.jsx-1554187062{stroke :".concat(utils.red, ";strokeWidth:2;stroke-dasharray:800;stroke-dashoffset:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzc1xcdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUIyQixBQUdzQixBQUtJLEFBS29CLGFBVHpDLEFBS0ksd0JBS2MsY0FDTyxxQkFDRCxvQkFDeEIiLCJmaWxlIjoiY3NzXFx1dGlscy5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHN0ZWZhXFxwcm9ncmFtbWluZ1xcQXRlbGllcnVsSGFpSHVpXFxuZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xyXG5cclxuY29uc3QgdXRpbHMgPSB7XHJcbiAgICBsaWdodEdyZXk6ICcjRjJGMkYyJyxcclxuICAgIGdyZXk6ICcjYzFjMWMxJyxcclxuICAgIHJlZCA6ICcjRkYzYjNmJyxcclxuICAgIG5ldXRyYWwgOiAnI0VGRUZFRicsXHJcbiAgICBuZXV0cmFsX2ZhZGU6ICdyZ2JhKDIzOSwyMzksMjM5LDAuOSknLFxyXG4gICAgc2t5IDogJyNDQUVCRjI7JyxcclxuICAgIGRhcmtHcmVlbiA6ICcjMDU0RDREJyxcclxuICAgIGdyZWVuIDogJyMwYzllOWUnLFxyXG4gICAgY2VudGVyOiBgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGAsXHJcbiAgICBib3hTaGFkb3cgOiAnYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwuMiknLFxyXG4gICAgYm94U2hhZG93Tm9uZSA6ICdib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDApJyxcclxuICAgIGJveFNoYWRvd0Fyb3VuZCA6ICdib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2JhKDAsMCwwLDAuMiknLFxyXG4gICAgZGVmYXVsdEZvbnRTaXplIDogJ2ZvbnQtc2l6ZSA6IDE1cHgnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdmdCYXNpYyA9IGNzc2BcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAqIHtcclxuICAgICAgICBzdHJva2UgOiAke3V0aWxzLnJlZH07XHJcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDI7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogODAwO1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBzdmdCYXNpUnVicmljID0gY3NzYFxyXG4gICAgc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBob3RvVmlkZW9PZmVydGEgPSBjc3NgXHJcbiAgICBkaXYub2ZlcnRhUGhvdG9WaWRlbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5kZXNjcmllcmVPZmVydGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDp3cmFwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYuZGVzY3JpZXJlT2ZlcnRhID4gZGl2IHtcclxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgIGRpdi5kZXNjcmllcmVPZmVydGEgPiBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkaXYuZGVzY3JpZXJlT2ZlcnRhIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAke3V0aWxzLnNreX07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYudGFiZWxPZmVydGUge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpdi50YWJlbE9mZXJ0ZSB0YWJsZSB7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYudGFiZWxPZmVydGUgdGgge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHt1dGlscy5za3l9O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGl2LnRhYmVsT2ZlcnRlIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGRpdi5ib251cyB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGl2LmJvbnVzIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogJHt1dGlscy5yZWR9O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgZGl2LmRlc2NyaWVyZU9mZXJ0YSBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYudGFiZWxPZmVydGUgdGQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYudGFiZWxPZmVydGUgdGgge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHV0aWxzOyJdfQ== */\n/*@ sourceURL=css\\utils.js */");
svgBasic.__scopedHash = "1554187062";
var svgBasiRubric = new String("svg{height:200px;}@media (max-width:400px){svg{height:100px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzc1xcdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNnQyxBQUdzQixBQUtJLGFBSnJCLEFBS0kiLCJmaWxlIjoiY3NzXFx1dGlscy5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHN0ZWZhXFxwcm9ncmFtbWluZ1xcQXRlbGllcnVsSGFpSHVpXFxuZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xyXG5cclxuY29uc3QgdXRpbHMgPSB7XHJcbiAgICBsaWdodEdyZXk6ICcjRjJGMkYyJyxcclxuICAgIGdyZXk6ICcjYzFjMWMxJyxcclxuICAgIHJlZCA6ICcjRkYzYjNmJyxcclxuICAgIG5ldXRyYWwgOiAnI0VGRUZFRicsXHJcbiAgICBuZXV0cmFsX2ZhZGU6ICdyZ2JhKDIzOSwyMzksMjM5LDAuOSknLFxyXG4gICAgc2t5IDogJyNDQUVCRjI7JyxcclxuICAgIGRhcmtHcmVlbiA6ICcjMDU0RDREJyxcclxuICAgIGdyZWVuIDogJyMwYzllOWUnLFxyXG4gICAgY2VudGVyOiBgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGAsXHJcbiAgICBib3hTaGFkb3cgOiAnYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwuMiknLFxyXG4gICAgYm94U2hhZG93Tm9uZSA6ICdib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDApJyxcclxuICAgIGJveFNoYWRvd0Fyb3VuZCA6ICdib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2JhKDAsMCwwLDAuMiknLFxyXG4gICAgZGVmYXVsdEZvbnRTaXplIDogJ2ZvbnQtc2l6ZSA6IDE1cHgnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdmdCYXNpYyA9IGNzc2BcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAqIHtcclxuICAgICAgICBzdHJva2UgOiAke3V0aWxzLnJlZH07XHJcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDI7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogODAwO1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBzdmdCYXNpUnVicmljID0gY3NzYFxyXG4gICAgc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBob3RvVmlkZW9PZmVydGEgPSBjc3NgXHJcbiAgICBkaXYub2ZlcnRhUGhvdG9WaWRlbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5kZXNjcmllcmVPZmVydGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDp3cmFwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYuZGVzY3JpZXJlT2ZlcnRhID4gZGl2IHtcclxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgIGRpdi5kZXNjcmllcmVPZmVydGEgPiBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkaXYuZGVzY3JpZXJlT2ZlcnRhIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAke3V0aWxzLnNreX07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYudGFiZWxPZmVydGUge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpdi50YWJlbE9mZXJ0ZSB0YWJsZSB7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYudGFiZWxPZmVydGUgdGgge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHt1dGlscy5za3l9O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGl2LnRhYmVsT2ZlcnRlIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGRpdi5ib251cyB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGl2LmJvbnVzIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogJHt1dGlscy5yZWR9O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgZGl2LmRlc2NyaWVyZU9mZXJ0YSBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYudGFiZWxPZmVydGUgdGQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYudGFiZWxPZmVydGUgdGgge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHV0aWxzOyJdfQ== */\n/*@ sourceURL=css\\utils.js */");
svgBasiRubric.__hash = "2062265747";
svgBasiRubric.__scoped = "svg.jsx-2652225938{height:200px;}@media (max-width:400px){svg.jsx-2652225938{height:100px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzc1xcdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNnQyxBQUdzQixBQUtJLGFBSnJCLEFBS0kiLCJmaWxlIjoiY3NzXFx1dGlscy5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHN0ZWZhXFxwcm9ncmFtbWluZ1xcQXRlbGllcnVsSGFpSHVpXFxuZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xyXG5cclxuY29uc3QgdXRpbHMgPSB7XHJcbiAgICBsaWdodEdyZXk6ICcjRjJGMkYyJyxcclxuICAgIGdyZXk6ICcjYzFjMWMxJyxcclxuICAgIHJlZCA6ICcjRkYzYjNmJyxcclxuICAgIG5ldXRyYWwgOiAnI0VGRUZFRicsXHJcbiAgICBuZXV0cmFsX2ZhZGU6ICdyZ2JhKDIzOSwyMzksMjM5LDAuOSknLFxyXG4gICAgc2t5IDogJyNDQUVCRjI7JyxcclxuICAgIGRhcmtHcmVlbiA6ICcjMDU0RDREJyxcclxuICAgIGdyZWVuIDogJyMwYzllOWUnLFxyXG4gICAgY2VudGVyOiBgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGAsXHJcbiAgICBib3hTaGFkb3cgOiAnYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwuMiknLFxyXG4gICAgYm94U2hhZG93Tm9uZSA6ICdib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDApJyxcclxuICAgIGJveFNoYWRvd0Fyb3VuZCA6ICdib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2JhKDAsMCwwLDAuMiknLFxyXG4gICAgZGVmYXVsdEZvbnRTaXplIDogJ2ZvbnQtc2l6ZSA6IDE1cHgnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdmdCYXNpYyA9IGNzc2BcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAqIHtcclxuICAgICAgICBzdHJva2UgOiAke3V0aWxzLnJlZH07XHJcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDI7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogODAwO1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBzdmdCYXNpUnVicmljID0gY3NzYFxyXG4gICAgc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBob3RvVmlkZW9PZmVydGEgPSBjc3NgXHJcbiAgICBkaXYub2ZlcnRhUGhvdG9WaWRlbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5kZXNjcmllcmVPZmVydGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDp3cmFwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYuZGVzY3JpZXJlT2ZlcnRhID4gZGl2IHtcclxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgIGRpdi5kZXNjcmllcmVPZmVydGEgPiBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkaXYuZGVzY3JpZXJlT2ZlcnRhIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAke3V0aWxzLnNreX07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYudGFiZWxPZmVydGUge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpdi50YWJlbE9mZXJ0ZSB0YWJsZSB7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYudGFiZWxPZmVydGUgdGgge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHt1dGlscy5za3l9O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGl2LnRhYmVsT2ZlcnRlIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGRpdi5ib251cyB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGl2LmJvbnVzIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogJHt1dGlscy5yZWR9O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgZGl2LmRlc2NyaWVyZU9mZXJ0YSBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYudGFiZWxPZmVydGUgdGQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYudGFiZWxPZmVydGUgdGgge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHV0aWxzOyJdfQ== */\n/*@ sourceURL=css\\utils.js */";
svgBasiRubric.__scopedHash = "2652225938";
var photoVideoOferta = new String("div.ofertaPhotoVideo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}div.descriereOferta{padding:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}div.descriereOferta>div{width:calc(50% - 10px);padding:5px;}@media (max-width:900px){div.descriereOferta>div{width:calc(100% - 10px);}}div.descriereOferta p{font-size:20px;margin:0;padding:10px;padding-bottom:0px;border-bottom:2px solid ".concat(utils.sky, ";}ul{font-size:15px;margin-bottom:10px;margin-top:0;}div.tabelOferte{width:calc(100% - 10px);padding:5px;overflow:auto;}div.tabelOferte table{width :100%;font-size:13px;border-collapse:collapse;}div.tabelOferte th{font-size:15px;border-bottom:2px solid ").concat(utils.sky, ";padding:5px;}div.tabelOferte td{text-align:center;padding:5px;}div.bonus{width:calc(100% - 10px);padding:5px;}div.bonus p{font-size:15px;font-weight:bold;color:").concat(utils.red, ";margin:0;padding:5px;}@media (max-width:400px){div.descriereOferta p{font-size:15px;}ul{font-size:10px;}div.tabelOferte td{font-size:10px;}div.tabelOferte th{font-size:12px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzc1xcdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURtQyxBQUdzQixBQU1ELEFBTVcsQUFPSyxBQU1iLEFBUUEsQUFPUyxBQU1aLEFBTUcsQUFNRyxBQU1NLEFBS1QsQUFTSSxBQUlBLEFBSUEsQUFJQSxZQW5GTixBQXdDRSxHQXJCTixBQVFVLEFBbUJrQyxBQWlCcEMsQUFTakIsQUFJQSxBQUlBLEFBSUEsR0FoQ1ksS0E5Q0EsQ0FPWixBQU9hLEFBY0QsQUF3QkEsR0FqQmEsR0FZN0IsRUFXdUMsRUFwQ3RCLENBcEJqQixDQTJCa0IsQUF3QmxCLENBdEN1QixVQVN2QixHQU1BLEVBTUEsSUFwQnlELFdBMkM1QyxDQWxCRyxNQXJERCxFQXdFQyxJQWxCaEIsS0FyRDBCLENBTVIsRUFrRWxCLHFCQTVDQSxrQ0FyQkEsb0JBTkEiLCJmaWxlIjoiY3NzXFx1dGlscy5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHN0ZWZhXFxwcm9ncmFtbWluZ1xcQXRlbGllcnVsSGFpSHVpXFxuZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xyXG5cclxuY29uc3QgdXRpbHMgPSB7XHJcbiAgICBsaWdodEdyZXk6ICcjRjJGMkYyJyxcclxuICAgIGdyZXk6ICcjYzFjMWMxJyxcclxuICAgIHJlZCA6ICcjRkYzYjNmJyxcclxuICAgIG5ldXRyYWwgOiAnI0VGRUZFRicsXHJcbiAgICBuZXV0cmFsX2ZhZGU6ICdyZ2JhKDIzOSwyMzksMjM5LDAuOSknLFxyXG4gICAgc2t5IDogJyNDQUVCRjI7JyxcclxuICAgIGRhcmtHcmVlbiA6ICcjMDU0RDREJyxcclxuICAgIGdyZWVuIDogJyMwYzllOWUnLFxyXG4gICAgY2VudGVyOiBgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGAsXHJcbiAgICBib3hTaGFkb3cgOiAnYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwuMiknLFxyXG4gICAgYm94U2hhZG93Tm9uZSA6ICdib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDApJyxcclxuICAgIGJveFNoYWRvd0Fyb3VuZCA6ICdib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2JhKDAsMCwwLDAuMiknLFxyXG4gICAgZGVmYXVsdEZvbnRTaXplIDogJ2ZvbnQtc2l6ZSA6IDE1cHgnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdmdCYXNpYyA9IGNzc2BcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAqIHtcclxuICAgICAgICBzdHJva2UgOiAke3V0aWxzLnJlZH07XHJcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDI7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogODAwO1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBzdmdCYXNpUnVicmljID0gY3NzYFxyXG4gICAgc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBob3RvVmlkZW9PZmVydGEgPSBjc3NgXHJcbiAgICBkaXYub2ZlcnRhUGhvdG9WaWRlbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5kZXNjcmllcmVPZmVydGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDp3cmFwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYuZGVzY3JpZXJlT2ZlcnRhID4gZGl2IHtcclxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgIGRpdi5kZXNjcmllcmVPZmVydGEgPiBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkaXYuZGVzY3JpZXJlT2ZlcnRhIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAke3V0aWxzLnNreX07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYudGFiZWxPZmVydGUge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpdi50YWJlbE9mZXJ0ZSB0YWJsZSB7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYudGFiZWxPZmVydGUgdGgge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHt1dGlscy5za3l9O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGl2LnRhYmVsT2ZlcnRlIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGRpdi5ib251cyB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGl2LmJvbnVzIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogJHt1dGlscy5yZWR9O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgZGl2LmRlc2NyaWVyZU9mZXJ0YSBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYudGFiZWxPZmVydGUgdGQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYudGFiZWxPZmVydGUgdGgge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHV0aWxzOyJdfQ== */\n/*@ sourceURL=css\\utils.js */"));
photoVideoOferta.__hash = "2739059891";
photoVideoOferta.__scoped = "div.ofertaPhotoVideo.jsx-1593210994{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}div.descriereOferta.jsx-1593210994{padding:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}div.descriereOferta.jsx-1593210994>div.jsx-1593210994{width:calc(50% - 10px);padding:5px;}@media (max-width:900px){div.descriereOferta.jsx-1593210994>div.jsx-1593210994{width:calc(100% - 10px);}}div.descriereOferta.jsx-1593210994 p.jsx-1593210994{font-size:20px;margin:0;padding:10px;padding-bottom:0px;border-bottom:2px solid ".concat(utils.sky, ";}ul.jsx-1593210994{font-size:15px;margin-bottom:10px;margin-top:0;}div.tabelOferte.jsx-1593210994{width:calc(100% - 10px);padding:5px;overflow:auto;}div.tabelOferte.jsx-1593210994 table.jsx-1593210994{width :100%;font-size:13px;border-collapse:collapse;}div.tabelOferte.jsx-1593210994 th.jsx-1593210994{font-size:15px;border-bottom:2px solid ").concat(utils.sky, ";padding:5px;}div.tabelOferte.jsx-1593210994 td.jsx-1593210994{text-align:center;padding:5px;}div.bonus.jsx-1593210994{width:calc(100% - 10px);padding:5px;}div.bonus.jsx-1593210994 p.jsx-1593210994{font-size:15px;font-weight:bold;color:").concat(utils.red, ";margin:0;padding:5px;}@media (max-width:400px){div.descriereOferta.jsx-1593210994 p.jsx-1593210994{font-size:15px;}ul.jsx-1593210994{font-size:10px;}div.tabelOferte.jsx-1593210994 td.jsx-1593210994{font-size:10px;}div.tabelOferte.jsx-1593210994 th.jsx-1593210994{font-size:12px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzc1xcdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURtQyxBQUdzQixBQU1ELEFBTVcsQUFPSyxBQU1iLEFBUUEsQUFPUyxBQU1aLEFBTUcsQUFNRyxBQU1NLEFBS1QsQUFTSSxBQUlBLEFBSUEsQUFJQSxZQW5GTixBQXdDRSxHQXJCTixBQVFVLEFBbUJrQyxBQWlCcEMsQUFTakIsQUFJQSxBQUlBLEFBSUEsR0FoQ1ksS0E5Q0EsQ0FPWixBQU9hLEFBY0QsQUF3QkEsR0FqQmEsR0FZN0IsRUFXdUMsRUFwQ3RCLENBcEJqQixDQTJCa0IsQUF3QmxCLENBdEN1QixVQVN2QixHQU1BLEVBTUEsSUFwQnlELFdBMkM1QyxDQWxCRyxNQXJERCxFQXdFQyxJQWxCaEIsS0FyRDBCLENBTVIsRUFrRWxCLHFCQTVDQSxrQ0FyQkEsb0JBTkEiLCJmaWxlIjoiY3NzXFx1dGlscy5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHN0ZWZhXFxwcm9ncmFtbWluZ1xcQXRlbGllcnVsSGFpSHVpXFxuZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xyXG5cclxuY29uc3QgdXRpbHMgPSB7XHJcbiAgICBsaWdodEdyZXk6ICcjRjJGMkYyJyxcclxuICAgIGdyZXk6ICcjYzFjMWMxJyxcclxuICAgIHJlZCA6ICcjRkYzYjNmJyxcclxuICAgIG5ldXRyYWwgOiAnI0VGRUZFRicsXHJcbiAgICBuZXV0cmFsX2ZhZGU6ICdyZ2JhKDIzOSwyMzksMjM5LDAuOSknLFxyXG4gICAgc2t5IDogJyNDQUVCRjI7JyxcclxuICAgIGRhcmtHcmVlbiA6ICcjMDU0RDREJyxcclxuICAgIGdyZWVuIDogJyMwYzllOWUnLFxyXG4gICAgY2VudGVyOiBgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGAsXHJcbiAgICBib3hTaGFkb3cgOiAnYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwuMiknLFxyXG4gICAgYm94U2hhZG93Tm9uZSA6ICdib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDApJyxcclxuICAgIGJveFNoYWRvd0Fyb3VuZCA6ICdib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2JhKDAsMCwwLDAuMiknLFxyXG4gICAgZGVmYXVsdEZvbnRTaXplIDogJ2ZvbnQtc2l6ZSA6IDE1cHgnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdmdCYXNpYyA9IGNzc2BcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAqIHtcclxuICAgICAgICBzdHJva2UgOiAke3V0aWxzLnJlZH07XHJcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDI7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogODAwO1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBzdmdCYXNpUnVicmljID0gY3NzYFxyXG4gICAgc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBob3RvVmlkZW9PZmVydGEgPSBjc3NgXHJcbiAgICBkaXYub2ZlcnRhUGhvdG9WaWRlbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5kZXNjcmllcmVPZmVydGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDp3cmFwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYuZGVzY3JpZXJlT2ZlcnRhID4gZGl2IHtcclxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgIGRpdi5kZXNjcmllcmVPZmVydGEgPiBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkaXYuZGVzY3JpZXJlT2ZlcnRhIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAke3V0aWxzLnNreX07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYudGFiZWxPZmVydGUge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpdi50YWJlbE9mZXJ0ZSB0YWJsZSB7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXYudGFiZWxPZmVydGUgdGgge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHt1dGlscy5za3l9O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGl2LnRhYmVsT2ZlcnRlIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGRpdi5ib251cyB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGl2LmJvbnVzIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogJHt1dGlscy5yZWR9O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgZGl2LmRlc2NyaWVyZU9mZXJ0YSBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYudGFiZWxPZmVydGUgdGQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYudGFiZWxPZmVydGUgdGgge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHV0aWxzOyJdfQ== */\n/*@ sourceURL=css\\utils.js */");
photoVideoOferta.__scopedHash = "1593210994";
var _default = utils;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(utils, "utils", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\css\\utils.js");
  reactHotLoader.register(svgBasic, "svgBasic", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\css\\utils.js");
  reactHotLoader.register(svgBasiRubric, "svgBasiRubric", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\css\\utils.js");
  reactHotLoader.register(photoVideoOferta, "photoVideoOferta", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\css\\utils.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\css\\utils.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("./node_modules/@babel/runtime/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/map.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/map.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__("./node_modules/babel-runtime/core-js/is-iterable.js");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("./node_modules/object-keys/index.js");
var foreach = __webpack_require__("./node_modules/foreach/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

var toStr = Object.prototype.toString;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	foreach(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/dom-helpers/class/addClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;

var _hasClass = __webpack_require__("./node_modules/dom-helpers/class/hasClass.js");

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/class/hasClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/removeClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ "./node_modules/foreach/index.js":
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/next-page-transitions/lib/PageTransition.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next-page-transitions/node_modules/prop-types/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__("./node_modules/react-transition-group/Transition.js"));

var _CSSTransition = _interopRequireDefault(__webpack_require__("./node_modules/react-transition-group/CSSTransition.js"));

var _PropTypes = __webpack_require__("./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (_react.default.isValidElement(oldChildren) && _react.default.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}

function buildClassName(className, state) {
  switch (state) {
    case 'enter':
      return "".concat(className, "-enter");

    case 'entering':
      return "".concat(className, "-enter ").concat(className, "-enter-active");

    case 'entered':
      return "".concat(className, "-enter-done");

    case 'exit':
      return "".concat(className, "-exit");

    case 'exiting':
      return "".concat(className, "-exit ").concat(className, "-exit-active");

    case 'exited':
      return "".concat(className, "-exit-done");

    default:
      return '';
  }
}

function shouldDelayEnter(children) {
  return _react.default.isValidElement(children) && children.type.pageTransitionDelayEnter;
}

function makeStateUpdater(state, otherProps) {
  return function updateState() {
    this.setState(_objectSpread({
      state: state
    }, otherProps));
  };
}

var PageTransition =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageTransition, _React$Component);

  function PageTransition(props) {
    var _this;

    _classCallCheck(this, PageTransition);

    _this = _possibleConstructorReturn(this, (PageTransition.__proto__ || Object.getPrototypeOf(PageTransition)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "onEntering", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: makeStateUpdater('entering').bind(_assertThisInitialized(_this))
    });
    Object.defineProperty(_assertThisInitialized(_this), "onEntered", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: makeStateUpdater('entered').bind(_assertThisInitialized(_this))
    });
    Object.defineProperty(_assertThisInitialized(_this), "onExiting", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: makeStateUpdater('exiting').bind(_assertThisInitialized(_this))
    });
    Object.defineProperty(_assertThisInitialized(_this), "onExited", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: makeStateUpdater('exited', {
        renderedChildren: null
      }).bind(_assertThisInitialized(_this))
    });
    var children = props.children;
    _this.state = {
      state: 'enter',
      isIn: !shouldDelayEnter(children),
      currentChildren: children,
      nextChildren: null,
      renderedChildren: children,
      showLoading: false
    };
    return _this;
  }

  _createClass(PageTransition, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (shouldDelayEnter(this.props.children)) {
        this.setState({
          timeoutId: this.startEnterTimer()
        });
      }

      if (this.props.monkeyPatchScrolling && typeof window !== 'undefined') {
        // Forgive me for what I'm about to do
        this.originalScrollTo = window.scrollTo;
        this.disableScrolling = false;

        window.scrollTo = function () {
          if (_this2.disableScrolling) return;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this2.originalScrollTo.apply(window, args);
        };
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _state = this.state,
          currentChildren = _state.currentChildren,
          renderedChildren = _state.renderedChildren,
          nextChildren = _state.nextChildren,
          isIn = _state.isIn,
          state = _state.state;
      var children = this.props.children;
      var hasNewChildren = areChildrenDifferent(currentChildren, children);
      var needsTransition = areChildrenDifferent(renderedChildren, children);

      if (hasNewChildren) {
        // We got a new set of children while we were transitioning some in
        // Immediately start transitioning out this component and update the next
        // component
        this.setState({
          isIn: false,
          nextChildren: children,
          currentChildren: children
        });

        if (this.state.timeoutId) {
          clearTimeout(this.state.timeoutId);
        }
      } else if (needsTransition && !isIn && state === 'exited') {
        if (shouldDelayEnter(nextChildren)) {
          // Wait for the ready callback to actually transition in, but still
          // mount the component to allow it to start loading things
          this.setState({
            renderedChildren: nextChildren,
            nextChildren: null,
            timeoutId: this.startEnterTimer()
          });
        } else {
          // No need to wait, mount immediately
          this.setState({
            isIn: true,
            renderedChildren: nextChildren,
            nextChildren: null
          });
        }
      } else if (prevState.showLoading && !this.state.showLoading) {
        // We hid the loading indicator; now that that change has been flushed to
        // the DOM, we can now bring in the next component!
        this.setState({
          isIn: true
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.originalScrollTo && typeof window !== 'undefined') {
        window.scrollTo = this.originalScrollTo;
      }

      if (this.state.timeoutId) clearTimeout(this.state.timeoutId);
    }
  }, {
    key: "onEnter",
    value: function onEnter() {
      // It's safe to reenable scrolling now
      this.disableScrolling = false;
      this.setState({
        state: 'enter',
        showLoading: false
      });
    }
  }, {
    key: "onExit",
    value: function onExit() {
      // Disable scrolling until this component has unmounted
      this.disableScrolling = true;
      this.setState({
        state: 'exit'
      });
    }
  }, {
    key: "onChildLoaded",
    value: function onChildLoaded() {
      if (this.state.timeoutId) {
        clearTimeout(this.state.timeoutId);
      }

      if (this.state.showLoading) {
        // We'll hide the loader first and animate in the page on the next tick
        this.setState({
          showLoading: false
        });
      } else {
        // We can immediately bring in the next page!
        this.setState({
          isIn: true
        });
      }
    }
  }, {
    key: "startEnterTimer",
    value: function startEnterTimer() {
      var _this3 = this;

      return setTimeout(function () {
        _this3.setState({
          showLoading: true
        });
      }, this.props.loadingDelay);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          timeout = _props.timeout,
          loadingComponent = _props.loadingComponent,
          loadingCallbackName = _props.loadingCallbackName;
      var _state2 = this.state,
          children = _state2.renderedChildren,
          state = _state2.state;

      if (['entering', 'exiting', 'exited'].includes(state)) {
        // Need to reflow!
        // eslint-disable-next-line no-unused-expressions
        if (document.body) document.body.scrollTop;
      }

      var hasLoadingComponent = !!loadingComponent;
      var containerClassName = buildClassName(this.props.classNames, state);
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Transition.default, {
        timeout: timeout,
        "in": this.state.isIn,
        appear: true,
        onEnter: function onEnter() {
          return _this4.onEnter();
        },
        onEntering: function onEntering() {
          return _this4.onEntering();
        },
        onEntered: function onEntered() {
          return _this4.onEntered();
        },
        onExit: function onExit() {
          return _this4.onExit();
        },
        onExiting: function onExiting() {
          return _this4.onExiting();
        },
        onExited: function onExited() {
          return _this4.onExited();
        }
      }, _react.default.createElement("div", {
        className: containerClassName
      }, children && _react.default.cloneElement(children, _defineProperty({}, loadingCallbackName, function () {
        return _this4.onChildLoaded();
      })))), hasLoadingComponent && _react.default.createElement(_CSSTransition.default, {
        "in": this.state.showLoading,
        mountOnEnter: true,
        unmountOnExit: true,
        appear: true,
        classNames: this.props.loadingClassNames,
        timeout: this.props.loadingTimeout
      }, loadingComponent));
    }
  }]);

  return PageTransition;
}(_react.default.Component);

PageTransition.propTypes = {
  children: _propTypes.default.node.isRequired,
  classNames: _propTypes.default.string.isRequired,
  timeout: _PropTypes.timeoutsShape.isRequired,
  loadingComponent: _propTypes.default.element,
  loadingDelay: _propTypes.default.number,
  loadingCallbackName: _propTypes.default.string,

  /* eslint-disable react/require-default-props */
  loadingTimeout: function loadingTimeout(props) {
    var pt = _PropTypes.timeoutsShape;
    if (props.loadingComponent) pt = pt.isRequired;

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return pt.apply(void 0, [props].concat(args));
  },
  loadingClassNames: function loadingClassNames(props) {
    var pt = _propTypes.default.string;
    if (props.loadingTimeout) pt = pt.isRequired;

    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /* eslint-enable react/require-default-props */
  monkeyPatchScrolling: _propTypes.default.bool
};
PageTransition.defaultProps = {
  loadingComponent: null,
  loadingCallbackName: 'pageTransitionReadyToEnter',
  loadingDelay: 500,
  monkeyPatchScrolling: false
};
var _default = PageTransition;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next-page-transitions/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PageTransition = _interopRequireDefault(__webpack_require__("./node_modules/next-page-transitions/lib/PageTransition.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  PageTransition: _PageTransition.default
};

/***/ }),

/***/ "./node_modules/next-page-transitions/node_modules/prop-types/checkPropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");
  var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");
  var ReactPropTypesSecret = __webpack_require__("./node_modules/next-page-transitions/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/next-page-transitions/node_modules/prop-types/factoryWithTypeCheckers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");
var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");
var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");
var assign = __webpack_require__("./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__("./node_modules/next-page-transitions/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__("./node_modules/next-page-transitions/node_modules/prop-types/checkPropTypes.js");

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/next-page-transitions/node_modules/prop-types/index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__("./node_modules/next-page-transitions/node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),

/***/ "./node_modules/next-page-transitions/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/next/app.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/app.js")


/***/ }),

/***/ "./node_modules/next/dist/lib/app.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUrl = createUrl;
exports.Container = exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _shallowEquals = _interopRequireDefault(__webpack_require__("./node_modules/next/dist/lib/shallow-equals.js"));

var _utils = __webpack_require__("./node_modules/next/dist/lib/utils.js");

var _router = __webpack_require__("./node_modules/next/dist/lib/router/index.js");

var App =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(App, _Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (App.__proto__ || (0, _getPrototypeOf.default)(App)).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      var headManager = this.props.headManager;
      return {
        headManager: headManager,
        router: (0, _router.makePublicRouterInstance)(this.props.router),
        _containerProps: (0, _objectSpread2.default)({}, this.props)
      };
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err, info) {
      // To provide clearer stacktraces in error-debug.js in development
      // To provide clearer stacktraces in app.js in production
      err.info = info;

      if (false) {
        // In production we render _error.js
        window.next.renderError({
          err: err
        });
      } else {
        // In development we throw the error up to AppContainer from react-hot-loader
        throw err;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          router = _props.router,
          Component = _props.Component,
          pageProps = _props.pageProps;
      var url = createUrl(router);
      return _react.default.createElement(Container, null, _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                _context.next = 3;
                return (0, _utils.loadGetInitialProps)(Component, ctx);

              case 3:
                pageProps = _context.sent;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);
  return App;
}(_react.Component);

exports.default = App;
Object.defineProperty(App, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'App'
});
Object.defineProperty(App, "childContextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    _containerProps: _propTypes.default.any,
    headManager: _propTypes.default.object,
    router: _propTypes.default.object
  }
});

var Container =
/*#__PURE__*/
function (_Component2) {
  (0, _inherits2.default)(Container, _Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (Container.__proto__ || (0, _getPrototypeOf.default)(Container)).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = this.props.hash;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      // need this check not to rerender component which has already thrown an error
      return !(0, _shallowEquals.default)(this.props, nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.createElement(_react.default.Fragment, null, children);
    }
  }]);
  return Container;
}(_react.Component);

exports.Container = Container;
Object.defineProperty(Container, "contextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    _containerProps: _propTypes.default.any
  }
});
var warnUrl = (0, _utils.execOnce)(function () {
  if (true) {
    (0, _utils.warn)("Warning: the 'url' property is deprecated. https://err.sh/next.js/url-deprecated");
  }
});

function createUrl(router) {
  return {
    get query() {
      warnUrl();
      return router.query;
    },

    get pathname() {
      warnUrl();
      return router.pathname;
    },

    get asPath() {
      warnUrl();
      return router.asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/lib/link.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js"));

var _stringify = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/json/stringify.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _url = __webpack_require__("./node_modules/url/url.js");

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _propTypesExact = _interopRequireDefault(__webpack_require__("./node_modules/prop-types-exact/build/index.js"));

var _router = _interopRequireWildcard(__webpack_require__("./node_modules/next/dist/lib/router/index.js"));

var _utils = __webpack_require__("./node_modules/next/dist/lib/utils.js");

/* global __NEXT_DATA__ */
var Link =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Link, _Component);

  function Link(props) {
    var _ref;

    var _this;

    (0, _classCallCheck2.default)(this, Link);

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf.default)(Link)).call.apply(_ref, [this, props].concat(rest)));
    _this.linkClicked = _this.linkClicked.bind((0, _assertThisInitialized2.default)(_this));

    _this.formatUrls(props);

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.formatUrls(nextProps);
    }
  }, {
    key: "linkClicked",
    value: function linkClicked(e) {
      var _this2 = this;

      if (e.currentTarget.nodeName === 'A' && (e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var shallow = this.props.shallow;
      var href = this.href,
          as = this.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      var replace = this.props.replace;
      var changeMethod = replace ? 'replace' : 'push'; // straight up redirect

      _router.default[changeMethod](href, as, {
        shallow: shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this2.props.onError) _this2.props.onError(err);
      });
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;
      var href = (0, _url.resolve)(pathname, this.href);

      _router.default.prefetch(href);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    } // We accept both 'href' and 'as' as objects which we can pass to `url.format`.
    // We'll handle it here.

  }, {
    key: "formatUrls",
    value: function formatUrls(props) {
      this.href = props.href && (0, _typeof2.default)(props.href) === 'object' ? (0, _url.format)(props.href) : props.href;
      this.as = props.as && (0, _typeof2.default)(props.as) === 'object' ? (0, _url.format)(props.as) : props.as;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var href = this.href,
          as = this.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

      if (typeof children === 'string') {
        children = _react.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        onClick: this.linkClicked // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _router._rewriteUrlForNextExport)(props.href);
      }

      return _react.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

exports.default = Link;
Object.defineProperty(Link, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: (0, _propTypesExact.default)({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warnLink("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  })
});

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

var warnLink = (0, _utils.execOnce)(_utils.warn);

/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/link.js")


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__("./node_modules/object-keys/isArguments.js");
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__("./node_modules/object-keys/index.js");
var bind = __webpack_require__("./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__("./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__("./node_modules/define-properties/index.js");

var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__("./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__("./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__("./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__("./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = {};

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-transition-group/CSSTransition.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__("./node_modules/react-transition-group/node_modules/prop-types/index.js");

var PropTypes = _interopRequireWildcard(_propTypes);

var _addClass = __webpack_require__("./node_modules/dom-helpers/class/addClass.js");

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__("./node_modules/dom-helpers/class/removeClass.js");

var _removeClass2 = _interopRequireDefault(_removeClass);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _Transition = __webpack_require__("./node_modules/react-transition-group/Transition.js");

var _Transition2 = _interopRequireDefault(_Transition);

var _PropTypes = __webpack_require__("./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass2.default)(node, c);
  });
};
var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass2.default)(node, c);
  });
};

var propTypes = _extends({}, _Transition2.default.propTypes, {

  /**
   * The animation classNames applied to the component as it enters, exits or has finished the transition.
   * A single name can be provided and it will be suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`, `fade-enter-done`,
   * `fade-exit`, `fade-exit-active`, `fade-exit-done`, `fade-appear`, and `fade-appear-active`.
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _PropTypes.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
});

/**
 * A `Transition` component using CSS transitions and animations.
 * It's inspired by the excellent [ng-animate](http://www.nganimate.org/) library.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` stages of the transition. The first class is applied and then a
 * second "active" class in order to activate the css animation. After the animation,
 * matching `done` class names are applied to persist the animation state.
 *
 * When the `in` prop is toggled to `true` the Component will get
 * the `example-enter` CSS class and the `example-enter-active` CSS class
 * added in the next tick. This is a convention based on the `classNames` prop.
 *
 * ## Example
 *
 * <iframe src="https://codesandbox.io/embed/m77l2vp00x?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
 */

var CSSTransition = function (_React$Component) {
  _inherits(CSSTransition, _React$Component);

  function CSSTransition() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransition);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');
      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    }, _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node);
      }
    }, _this.onEntered = function (node, appearing) {
      var _this$getClassNames3 = _this.getClassNames('enter'),
          doneClassName = _this$getClassNames3.doneClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');
      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node);
      }
    }, _this.onExit = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          className = _this$getClassNames4.className;

      _this.removeClasses(node, 'appear');
      _this.removeClasses(node, 'enter');
      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    }, _this.onExiting = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames5.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    }, _this.onExited = function (node) {
      var _this$getClassNames6 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames6.doneClassName;

      _this.removeClasses(node, 'exit');
      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    }, _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;


      var className = typeof classNames !== 'string' ? classNames[type] : classNames + '-' + type;

      var activeClassName = typeof classNames !== 'string' ? classNames[type + 'Active'] : className + '-active';

      var doneClassName = typeof classNames !== 'string' ? classNames[type + 'Done'] : className + '-done';

      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CSSTransition.prototype.removeClasses = function removeClasses(node, type) {
    var _getClassNames = this.getClassNames(type),
        className = _getClassNames.className,
        activeClassName = _getClassNames.activeClassName,
        doneClassName = _getClassNames.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  CSSTransition.prototype.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    /* eslint-disable no-unused-expressions */
    node && node.scrollTop;
    /* eslint-enable no-unused-expressions */
    addClass(node, className);
  };

  CSSTransition.prototype.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;

    return _react2.default.createElement(_Transition2.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react2.default.Component);

CSSTransition.propTypes =  true ? propTypes : {};

exports.default = CSSTransition;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-transition-group/Transition.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

var _propTypes = __webpack_require__("./node_modules/react-transition-group/node_modules/prop-types/index.js");

var PropTypes = _interopRequireWildcard(_propTypes);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _PropTypes = __webpack_require__("./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UNMOUNTED = exports.UNMOUNTED = 'unmounted';
var EXITED = exports.EXITED = 'exited';
var ENTERING = exports.ENTERING = 'entering';
var ENTERED = exports.ENTERED = 'entered';
var EXITING = exports.EXITING = 'exiting';

/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state = { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 *
 * ## Timing
 *
 * Timing is often the trickiest part of animation, mistakes can result in slight delays
 * that are hard to pin down. A common example is when you want to add an exit transition,
 * you should set the desired final styles when the state is `'exiting'`. That's when the
 * transition to those styles will start and, if you matched the `timeout` prop with the
 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
 *
 * > **Note**: For simpler transitions the `Transition` component might be enough, but
 * > take into account that it's platform-agnostic, while the `CSSTransition` component
 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * > in order to make more complex transitions more predictable. For example, even though
 * > classes `example-enter` and `example-enter-active` are applied immediately one after
 * > another, you can still transition from one to the other because of the forced reflow
 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
 * > for more info). Take this into account when choosing between `Transition` and
 * > `CSSTransition`.
 *
 * ## Example
 *
 * <iframe src="https://codesandbox.io/embed/741op4mmj0?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
 *
 */

var Transition = function (_React$Component) {
  _inherits(Transition, _React$Component);

  function Transition(props, context) {
    _classCallCheck(this, Transition);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    var parentGroup = context.transitionGroup;
    // In the context of a TransitionGroup all enters are really appears
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;

    var initialStatus = void 0;
    _this.nextStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.nextStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = { status: initialStatus };

    _this.nextCallback = null;
    return _this;
  }

  Transition.prototype.getChildContext = function getChildContext() {
    return { transitionGroup: null }; // allows for nested Transitions
  };

  Transition.prototype.componentDidMount = function componentDidMount() {
    this.updateStatus(true);
  };

  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _ref = this.pendingState || this.state,
        status = _ref.status;

    if (nextProps.in) {
      if (status === UNMOUNTED) {
        this.setState({ status: EXITED });
      }
      if (status !== ENTERING && status !== ENTERED) {
        this.nextStatus = ENTERING;
      }
    } else {
      if (status === ENTERING || status === ENTERED) {
        this.nextStatus = EXITING;
      }
    }
  };

  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updateStatus();
  };

  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  Transition.prototype.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;

    var exit = void 0,
        enter = void 0,
        appear = void 0;

    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear;
    }
    return { exit: exit, enter: enter, appear: appear };
  };

  Transition.prototype.updateStatus = function updateStatus() {
    var mounting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var nextStatus = this.nextStatus;

    if (nextStatus !== null) {
      this.nextStatus = null;
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      var node = _reactDom2.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({ status: UNMOUNTED });
    }
  };

  Transition.prototype.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;

    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;

    var timeouts = this.getTimeouts();

    // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set
    if (!mounting && !enter) {
      this.safeSetState({ status: ENTERED }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);

    this.safeSetState({ status: ENTERING }, function () {
      _this2.props.onEntering(node, appearing);

      // FIXME: appear timeout?
      _this2.onTransitionEnd(node, timeouts.enter, function () {
        _this2.safeSetState({ status: ENTERED }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  Transition.prototype.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;

    var timeouts = this.getTimeouts();

    // no exit animation skip right to EXITED
    if (!exit) {
      this.safeSetState({ status: EXITED }, function () {
        _this3.props.onExited(node);
      });
      return;
    }
    this.props.onExit(node);

    this.safeSetState({ status: EXITING }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({ status: EXITED }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
    var _this4 = this;

    // We need to track pending updates for instances where a cWRP fires quickly
    // after cDM and before the state flushes, which would double trigger a
    // transition
    this.pendingState = nextState;

    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, function () {
      _this4.pendingState = null;
      callback();
    });
  };

  Transition.prototype.setNextCallback = function setNextCallback(callback) {
    var _this5 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this5.nextCallback = null;

        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }
      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  Transition.prototype.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }

    var _props = this.props,
        children = _props.children,
        childProps = _objectWithoutProperties(_props, ['children']);
    // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react2.default.Children.only(children);
    return _react2.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react2.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};


Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element.
   * This function is called with the current transition status
   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
   * to apply context specific props to a component.
   *
   * ```jsx
   * <Transition timeout={150}>
   *   {(status) => (
   *     <MyComponent className={`fade fade-${status}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided
   *
   * You may specify a single timeout for all transitions like: `timeout={500}`,
   * or individually like:
   *
   * ```jsx
   * timeout={{
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * @type {number | { enter?: number, exit?: number }}
   */
  timeout: function timeout(props) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var pt = _PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;
    return pt.apply(undefined, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {};

// Name the function so it is clearer in the documentation
function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,

  onEnter: noop,
  onEntering: noop,
  onEntered: noop,

  onExit: noop,
  onExiting: noop,
  onExited: noop
};

Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

exports.default = Transition;

/***/ }),

/***/ "./node_modules/react-transition-group/node_modules/prop-types/checkPropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");
  var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");
  var ReactPropTypesSecret = __webpack_require__("./node_modules/react-transition-group/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/react-transition-group/node_modules/prop-types/factoryWithTypeCheckers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");
var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");
var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");
var assign = __webpack_require__("./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__("./node_modules/react-transition-group/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__("./node_modules/react-transition-group/node_modules/prop-types/checkPropTypes.js");

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/react-transition-group/node_modules/prop-types/index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__("./node_modules/react-transition-group/node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),

/***/ "./node_modules/react-transition-group/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _propTypes = __webpack_require__("./node_modules/react-transition-group/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var timeoutsShape = exports.timeoutsShape = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
  enter: _propTypes2.default.number,
  exit: _propTypes2.default.number
}).isRequired]);

var classNamesShape = exports.classNamesShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  exit: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterDone: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  exit: _propTypes2.default.string,
  exitDone: _propTypes2.default.string,
  exitActive: _propTypes2.default.string
})]);

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
  }

  (0, _createClass3.default)(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);
  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__("./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.flush = flush;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _stylesheetRegistry = __webpack_require__("./node_modules/styled-jsx/dist/stylesheet-registry.js");

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  (0, _inherits3.default)(JSXStyle, _Component);

  function JSXStyle() {
    (0, _classCallCheck3.default)(this, JSXStyle);
    return (0, _possibleConstructorReturn3.default)(this, (JSXStyle.__proto__ || (0, _getPrototypeOf2.default)(JSXStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(JSXStyle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      styleSheetRegistry.add(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.css !== nextProps.css;
    }

    // To avoid FOUC, we process new changes
    // on `componentWillUpdate` rather than `componentDidUpdate`.

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      styleSheetRegistry.update(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var _tagInfo = (0, _slicedToArray3.default)(tagInfo, 2),
            baseId = _tagInfo[0],
            props = _tagInfo[1];

        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);
  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return new _map2.default(cssRules);
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringHash = __webpack_require__("./node_modules/string-hash/index.js");

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__("./node_modules/styled-jsx/dist/lib/stylesheet.js");

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/ig, '\\/style');
};

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();
    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);
      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  (0, _createClass3.default)(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = (0, _keys2.default)(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      if (indices.length > 0) {
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      }
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? (0, _keys2.default)(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat((0, _keys2.default)(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);
  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_app__ = __webpack_require__("./node_modules/next/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout_Layout__ = __webpack_require__("./components/Layout/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_page_transitions__ = __webpack_require__("./node_modules/next-page-transitions/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_page_transitions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_page_transitions__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var _jsxFileName = "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\pages\\_app.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

;





var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_page_transitions__["PageTransition"], {
        timeout: 500,
        classNames: "page-transition",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(__WEBPACK_IMPORTED_MODULE_1_next_app___default.a);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MyApp, "MyApp", "C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\pages\\_app.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_app")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ })

},[1])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=_app.js.map