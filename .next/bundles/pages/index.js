
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(546);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\programming\\nodejs\\heroku\\next-ahh\\pages\\index.js?entry';


var Index = function Index() {
    return _react2.default.createElement('div', { className: 'home basicPageStyle', __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, 'Hello Next.js'));
};

exports.default = function () {
    return _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement(Index, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\programming\\nodejs\\heroku\\next-ahh\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\programming\\nodejs\\heroku\\next-ahh\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

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
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(540);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(544);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\programming\\nodejs\\heroku\\next-ahh\\components\\Header.js';


var Header = function (_Component) {
    (0, _inherits3.default)(Header, _Component);

    function Header() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.headerStructure = [{
            name: 'home',
            url: '/'
        }, {
            name: 'photo-video',
            url: '/photovideo'
        }], _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'header', 'data-jsx': 973330167,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, this.headerStructure.map(function (page) {
                return _react2.default.createElement('div', { key: page.name, className: 'page', 'data-jsx': 973330167,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                }, _react2.default.createElement('p', {
                    'data-jsx': 973330167,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                }, ' ', page.name, ' '), _react2.default.createElement('img', { src: './static/' + page.name + '.png', 'data-jsx': 973330167,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }));
            }), _react2.default.createElement(_style2.default, {
                styleId: 973330167,
                css: 'div.header[data-jsx="973330167"]{position:fixed;top:2%;left:2%}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQjRCLEFBR3VDLGVBQWdDLFFBQWlDLFNBQXFCIiwiZmlsZSI6ImNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJEOi9wcm9ncmFtbWluZy9ub2RlanMvaGVyb2t1L25leHQtYWhoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBoZWFkZXJTdHJ1Y3R1cmUgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lIDogJ2hvbWUnLFxyXG4gICAgICAgICAgICB1cmwgOiAnLydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZSA6ICdwaG90by12aWRlbycsXHJcbiAgICAgICAgICAgIHVybCA6ICcvcGhvdG92aWRlbydcclxuICAgICAgICB9XHJcbiAgICBdXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyU3RydWN0dXJlLm1hcChwYWdlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhZ2UubmFtZX0gY2xhc3NOYW1lPSdwYWdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7IHBhZ2UubmFtZSB9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnLi9zdGF0aWMvJyArIHBhZ2UubmFtZSArICcucG5nJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=components\\Header.js */'
            }));
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\programming\\nodejs\\heroku\\next-ahh\\components\\Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\programming\\nodejs\\heroku\\next-ahh\\components\\Header.js"); } } })();

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(540);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(545);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\programming\\nodejs\\heroku\\next-ahh\\components\\Layout.js';


var Layout = function Layout(props) {
  return _react2.default.createElement('div', { className: 'layout', 'data-jsx': 533768647,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement('div', { className: 'container', 'data-jsx': 533768647,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), props.children), _react2.default.createElement(_style2.default, {
    styleId: 533768647,
    css: 'p{margin:0}div.layout{outline:1px solid lightgrey;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}div.container{position:relative;outline:1px solid lightgrey;width:100%;max-width:1000px}div.basicPageStyle{outline:1px solid lightgrey;height:1000px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRd0IsQUFHa0IsQUFFcUIsQUFFWixBQUdVLFVBUFosU0FJdUMsVUFGRCxBQUtILGVBQU8sSUFIaUIsWUFBMEIsa0JBQ3ZHLDZCQUgwRix1R0FBTyIsImZpbGUiOiJjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiRDovcHJvZ3JhbW1pbmcvbm9kZWpzL2hlcm9rdS9uZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J2xheW91dCc+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPnsgYFxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpdi5sYXlvdXQge1xyXG4gICAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGl2LmNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXYuYmFzaWNQYWdlU3R5bGUge1xyXG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdfQ== */\n/*@ sourceURL=components\\Layout.js */'
  }));
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\programming\\nodejs\\heroku\\next-ahh\\components\\Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\programming\\nodejs\\heroku\\next-ahh\\components\\Layout.js"); } } })();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(541);


/***/ })

},[547]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/OTQyZGNhMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz85NDJkY2EyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzk0MmRjYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdob21lIGJhc2ljUGFnZVN0eWxlJz5cclxuICAgICAgICA8cD5IZWxsbyBOZXh0LmpzPC9wPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKDxMYXlvdXQ+PEluZGV4Lz48L0xheW91dD4pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBoZWFkZXJTdHJ1Y3R1cmUgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lIDogJ2hvbWUnLFxyXG4gICAgICAgICAgICB1cmwgOiAnLydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZSA6ICdwaG90by12aWRlbycsXHJcbiAgICAgICAgICAgIHVybCA6ICcvcGhvdG92aWRlbydcclxuICAgICAgICB9XHJcbiAgICBdXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyU3RydWN0dXJlLm1hcChwYWdlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhZ2UubmFtZX0gY2xhc3NOYW1lPSdwYWdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7IHBhZ2UubmFtZSB9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnLi9zdGF0aWMvJyArIHBhZ2UubmFtZSArICcucG5nJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT0nbGF5b3V0Jz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+eyBgXHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGl2LmxheW91dCB7XHJcbiAgICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXYuY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpdi5iYXNpY1BhZ2VTdHlsZSB7XHJcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgICAgICBoZWlnaHQ6IDEwMDBweDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBR0E7QUFBQTtBQURBO0FBS0E7QUFBQTtBQURBOzs7OztBQU1BO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTs7QUFIQTtBQUZBO0FBa0JBO0FBbEJBOzs7OztBQXFCQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBZ0NBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        