
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    red: '#FF3b3f',
    neutral: '#EFEFEF',
    sky: '#CAEBF2;',
    grey: '#054D4D',
    center: '\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%) translateY(-50%);\n    '
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\programming\\nodejs\\heroku\\next-ahh\\css\\utils.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\programming\\nodejs\\heroku\\next-ahh\\css\\utils.js"); } } })();

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(547);

var _Layout2 = _interopRequireDefault(_Layout);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\programming\\nodejs\\heroku\\next-ahh\\pages\\index.js?entry';


var Home = function Home() {
  return _react2.default.createElement('div', { className: 'basicPage', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'This page has a title'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis semper hendrerit. Vivamus a metus sed tortor molestie suscipit eget non dui. Integer ante arcu, vestibulum eget ligula hendrerit, iaculis laoreet nibh. Nullam pellentesque id tortor non euismod. Donec a nibh quis nisi semper elementum vitae non nibh. Proin mauris sem, congue nec vestibulum feugiat, molestie vitae velit. Duis consequat, ex a pharetra dignissim, neque elit molestie dui, eu feugiat urna dui in nisi. In feugiat ullamcorper ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse id ligula libero. In sodales lacus vitae mi lobortis, vitae facilisis turpis sodales. Mauris eleifend quis quam nec molestie. Vestibulum purus velit, pretium at arcu et, laoreet sollicitudin sem. Curabitur dapibus sem id magna luctus efficitur. Morbi bibendum venenatis orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris vehicula quam sed urna consectetur, in cursus nulla pellentesque. Quisque malesuada neque vel nisl tempus pretium. Aliquam eleifend ultrices diam et porta. Nam eleifend est a sollicitudin gravida. Nulla semper tortor sit amet sapien aliquam egestas at molestie turpis. Aliquam commodo nunc eget justo feugiat pellentesque. Donec risus elit, malesuada at nisl non, convallis mollis tortor. Integer posuere eros eros, sit amet imperdiet enim congue eu. Nam dignissim velit purus, non dignissim tellus fermentum eu. Praesent euismod gravida nibh, a gravida leo pellentesque id. Vestibulum blandit tincidunt nulla, quis tincidunt sem imperdiet quis. Aenean quis diam imperdiet, varius est vitae, ornare lorem. Phasellus egestas id nibh ac mollis. Nam hendrerit id erat a consectetur. Curabitur et ultrices lectus. Nunc tincidunt erat a ornare efficitur. Nullam id tempor est, quis finibus quam. Donec commodo consequat felis, et elementum lacus tempor id. Maecenas suscipit mauris vel luctus ullamcorper. Integer aliquam est quis varius lobortis. Aenean venenatis dolor ligula, condimentum tempus justo eleifend vitae. Sed ante mi, sagittis ac lorem in, cursus molestie enim. Quisque at quam facilisis, venenatis lectus eu, fermentum eros. Aliquam quis orci pretium, convallis libero at, luctus sapien. Etiam consequat congue efficitur. Nulla gravida pretium tellus, ac semper mi posuere non.'));
};

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(Home, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
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

/***/ 546:
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

var _style = __webpack_require__(541);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(545);

var _link2 = _interopRequireDefault(_link);

var _utils = __webpack_require__(540);

var _utils2 = _interopRequireDefault(_utils);

var _timers = __webpack_require__(550);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\programming\\nodejs\\heroku\\next-ahh\\components\\Header.js';


var Header = function (_Component) {
    (0, _inherits3.default)(Header, _Component);

    function Header() {
        (0, _classCallCheck3.default)(this, Header);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this));

        _this.state = {
            showPages: false,
            runAnimation: false,
            animating: false
        };
        return _this;
    }

    (0, _createClass3.default)(Header, [{
        key: 'showPages',
        value: function showPages(event) {
            var _this2 = this;

            if (!this.state.animating) {
                this.state.showPages = true;
                this.state.runAnimation = true;
                this.state.animating = true;
                this.setState(this.state);
                (0, _timers.setTimeout)(function () {
                    _this2.state.animating = false;
                    _this2.setState(_this2.state);
                }, 500);
            }
        }
    }, {
        key: 'hidePages',
        value: function hidePages() {
            var _this3 = this;

            if (!this.state.animating) {
                this.state.runAnimation = false;
                this.state.animating = true;
                this.setState(this.state);
                (0, _timers.setTimeout)(function () {
                    _this3.state.showPages = false;
                    _this3.state.animating = false;
                    _this3.setState(_this3.state);
                }, 500);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement('div', { className: 'header', 'data-jsx': 1679716821,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('div', { className: 'line', 'data-jsx': 1679716821,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }), _react2.default.createElement('div', { className: 'container', 'data-jsx': 1679716821,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('div', { className: 'menuIcon', onMouseEnter: this.showPages.bind(this), onClick: this.state.showPages ? this.hidePages.bind(this) : this.showPages.bind(this), 'data-jsx': 1679716821,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('img', { src: './static/haihuiLogo.png', 'data-jsx': 1679716821,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }), _react2.default.createElement('p', {
                'data-jsx': 1679716821,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, ' Menu '), _react2.default.createElement('svg', { height: '40', width: '46', viewBox: '0 0 100 100', className: 'blick', 'data-jsx': 1679716821,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('circle', { cx: '49', cy: '47', fill: 'none', 'data-jsx': 1679716821,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            })), _react2.default.createElement('svg', { height: '20px', width: '20px', className: this.state.showPages ? 'expande show' : 'expande hide', viewBox: '0 0 100 100', 'data-jsx': 1679716821,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('path', {
                'data-jsx': 1679716821,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }))), _react2.default.createElement('div', { className: this.state.showPages ? 'pages show' : 'pages', onMouseLeave: this.hidePages.bind(this), 'data-jsx': 1679716821,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement('ul', {
                'data-jsx': 1679716821,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, ['Photo-video', 'Print', 'Personalizari', 'Contact'].map(function (col, i) {
                return _react2.default.createElement('li', { key: i, 'data-jsx': 1679716821,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                    }
                }, _react2.default.createElement('div', { className: _this4.state.runAnimation ? 'page show' : 'page hide', style: { animationDelay: '.' + i + 's' }, 'data-jsx': 1679716821,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }, _react2.default.createElement('a', {
                    'data-jsx': 1679716821,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }, _react2.default.createElement('div', {
                    'data-jsx': 1679716821,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                }, _react2.default.createElement('img', { src: './static/headerIcons/' + col + '.png', 'data-jsx': 1679716821,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                    }
                })), _react2.default.createElement('p', {
                    'data-jsx': 1679716821,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                    }
                }, ' ', col, ' '))));
            })))), _react2.default.createElement(_style2.default, {
                styleId: 1679716821,
                css: 'div.header[data-jsx="1679716821"]{position:fixed;top:0;left:0;width:calc(100% - 20px);height:40px;padding:10px}div.line[data-jsx="1679716821"]{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:0;width:100%;height:40%;background:' + _utils2.default.sky + ';z-Index:-1}div.container[data-jsx="1679716821"]{max-width:1000px;width:100%;height:100%;margin:auto}div.menuIcon[data-jsx="1679716821"]{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;cursor:default}div.menuIcon[data-jsx="1679716821"] img[data-jsx="1679716821"]{height:100%}div.menuIcon[data-jsx="1679716821"] p[data-jsx="1679716821"]{font-size:20px;margin:5px;font-weight:bold;color:' + _utils2.default.grey + '}svg.blick[data-jsx="1679716821"]{position:absolute;top:0;left:0}@-webkit-keyframes blinckdatajsx1679716821{50%{stroke-width:15}100%{stroke-width:0;r:40;stroke-dasharray:13}}@keyframes blinckdatajsx1679716821{50%{stroke-width:15}100%{stroke-width:0;r:40;stroke-dasharray:13}}svg.blick[data-jsx="1679716821"] circle[data-jsx="1679716821"]{stroke-width:0;r:6;stroke:' + _utils2.default.grey + ';stroke-dasharray:13}div.menuIcon[data-jsx="1679716821"]:hover svg.blick[data-jsx="1679716821"] circle[data-jsx="1679716821"]{-webkit-animation:blinckdatajsx1679716821 1s ease;animation:blinckdatajsx1679716821 1s ease}div.pages[data-jsx="1679716821"]{display:none}div.pages.show[data-jsx="1679716821"]{display:block}ul[data-jsx="1679716821"]{list-style-type:none;margin:0;padding:0;padding-top:5px;margin-left:5px}li[data-jsx="1679716821"]{opacity:0.9;margin-bottom:4px;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);box-shadow:1px 1px 1px rgba(0,0,0,0);border-radius:25px;-webkit-transition:all .2s ease;transition:all .2s ease}li[data-jsx="1679716821"]:hover[data-jsx="1679716821"]{opacity:1;box-shadow:1px 1px 1px rgba(0,0,0,.3);-webkit-transform:scale(1.01);-ms-transform:scale(1.01);transform:scale(1.01)}div.page[data-jsx="1679716821"]{background:' + _utils2.default.sky + ';border-radius:25px;opacity:0}@-webkit-keyframes showdatajsx1679716821{0%{opacity:0;-webkit-transform:translateY(15px);-ms-transform:translateY(15px);transform:translateY(15px)}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px)}}@keyframes showdatajsx1679716821{0%{opacity:0;-webkit-transform:translateY(15px);-ms-transform:translateY(15px);transform:translateY(15px)}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px)}}@-webkit-keyframes hidedatajsx1679716821{0%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px)}100%{opacity:0;-webkit-transform:translateY(-15px);-ms-transform:translateY(-15px);transform:translateY(-15px)}}@keyframes hidedatajsx1679716821{0%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px)}100%{opacity:0;-webkit-transform:translateY(-15px);-ms-transform:translateY(-15px);transform:translateY(-15px)}}div.page.show[data-jsx="1679716821"]{opacity:0;-webkit-animation:showdatajsx1679716821 0.5s ease forwards;animation:showdatajsx1679716821 0.5s ease forwards}div.page.hide[data-jsx="1679716821"]{opacity:1;-webkit-animation:hidedatajsx1679716821 0.5s ease forwards;animation:hidedatajsx1679716821 0.5s ease forwards}a[data-jsx="1679716821"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}a[data-jsx="1679716821"] img[data-jsx="1679716821"]{height:18px;background-color:' + _utils2.default.grey + ';' + _utils2.default.center + '}a[data-jsx="1679716821"] p[data-jsx="1679716821"]{font-size:15px;margin:0;margin-left:5px}a[data-jsx="1679716821"] div[data-jsx="1679716821"]{height:35px;width:35px;position:relative;border-radius:25px;background-color:' + _utils2.default.grey + '}svg.expande[data-jsx="1679716821"]{margin-left:auto}svg.expande[data-jsx="1679716821"] path[data-jsx="1679716821"]{stroke:' + _utils2.default.grey + ';stroke-width:9;fill:none;stroke-linejoin:round;-webkit-transition:all .2s ease;transition:all .2s ease;d:path("M10,10 L70,50 L10,90 L10,10 L70,50")}@-webkit-keyframes expandedatajsx1679716821{0%{d:path("M10,10 L70,50 L10,90 L10,10 L70,50")}50%{d:path("M10,10 L80,10 L10,10 L10,10 L10,10")}100%{fill:' + _utils2.default.grey + ';d:path("M10,20 L90,20 L50,80 L10,20 L90,20")}}@keyframes expandedatajsx1679716821{0%{d:path("M10,10 L70,50 L10,90 L10,10 L70,50")}50%{d:path("M10,10 L80,10 L10,10 L10,10 L10,10")}100%{fill:' + _utils2.default.grey + ';d:path("M10,20 L90,20 L50,80 L10,20 L90,20")}}@-webkit-keyframes dexpandedatajsx1679716821{0%{fill:' + _utils2.default.grey + ';d:path("M10,20 L90,20 L50,80 L10,20 L90,20")}50%{d:path("M10,10 L80,10 L10,10 L10,10 L10,10")}100%{fill:none;d:path("M10,10 L70,50 L10,90 L10,10 L70,50")}}@keyframes dexpandedatajsx1679716821{0%{fill:' + _utils2.default.grey + ';d:path("M10,20 L90,20 L50,80 L10,20 L90,20")}50%{d:path("M10,10 L80,10 L10,10 L10,10 L10,10")}100%{fill:none;d:path("M10,10 L70,50 L10,90 L10,10 L70,50")}}svg.expande.show[data-jsx="1679716821"] path[data-jsx="1679716821"]{-webkit-animation:expandedatajsx1679716821 .5s ease forwards;animation:expandedatajsx1679716821 .5s ease forwards}svg.expande.hide[data-jsx="1679716821"] path[data-jsx="1679716821"]{-webkit-animation:dexpandedatajsx1679716821 .5s ease forwards;animation:dexpandedatajsx1679716821 .5s ease forwards}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RkEsQUFHbUIsQUFXRyxBQWVBLEFBU0wsQUFVQSxBQU1HLEFBU0csQUFZRSxBQVFELEFBVUosQUFTVSxBQU1iLEFBY0UsQUFjTyxBQVlULEFBZUYsQUFVOEIsQUFjMUIsQUFPQSxBQVVBLEFBT0EsQUFRTCxBQU9BLEFBT0ksQUFPRCxBQVNHLEFBUUgsQUFjSyxBQU1tQixBQWdCYyxBQU9BLEFBTVosQUFVQSxBQU9ZLEFBTXBDLEFBYXNCLEFBVUMsVUFwSUgsQUFPQSxDQS9ESSxBQXdCUCxBQU9ELEFBVUEsQUFPRSxBQXNIa0IsRUFuU3JDLEFBVWpCLEFBb0dzQixBQTRGNEIsQUFpQm5DLENBckpmLENBekdVLEFBdUhWLENBcEVnQixBQTZCRixBQVVOLEFBNEpNLENBNUtWLENBL0RPLEFBZUksQUFrUGYsQ0FoTlUsRUErQmdDLENBMUYvQixBQW9JRyxDQXBEZSxFQThLUCxDQW5QUyxBQWlEcEIsQ0EwTFMsRUFuTUUsQ0FsRE0sQUF5QlosRUF1SE8sQ0FaVCxDQXhFZCxDQWlQc0QsQUFVQSxFQXZDbkMsSUF4R0ksRUE5SVAsQ0EyR0ksQUFpSHBCLEFBVXVCLENBL0tuQixFQWdOQSxBQU1BLEFBdUJBLENBMVFKLEVBMkcwQixHQWtIYixFQWhSRyxDQTBCaEIsRUEyU0ksRUE1T3FCLEFBa0pPLENBdEdaLEFBbUNOLEVBeUdhLENBZnVCLElBalFqQyxJQTRLakIsTUF2Q0EsQUE2RnVCLElBak92QixBQXdGQSxBQW1OSSxBQVVBLEdBcFFILEVBK04yQixFQXJDNUIsRUE1TXdCLENBK0R4QixZQWdEeUMsQUE2Q3JDLEFBVUEsR0FqQkEsR0F3QkEsQ0FxREosR0E2RUEsRUFVQSxJQXBJQSxBQU9BLEVBbk5VLE9BQ0ksRUFvSmQsU0FuSmMsRUFxSVMsR0FvSTJCLE1BeFFQLFdBdUlmLGFBZ0Y1QixnQkF0TmMsQ0FvQlEsQUFxUHRCLFVBdFFBLFNBa0JtQixTQW9IbkIsT0FuSEEiLCJmaWxlIjoiY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlUm9vdCI6IkQ6L3Byb2dyYW1taW5nL25vZGVqcy9oZXJva3UvbmV4dC1haGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY3NzIGZyb20gJy4uL2Nzcy91dGlscyc7XHJcbmltcG9ydCB7IHNldFRpbWVvdXQgfSBmcm9tICd0aW1lcnMnO1xyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3dQYWdlcyA6IGZhbHNlLFxyXG4gICAgICAgICAgICBydW5BbmltYXRpb24gOiBmYWxzZSxcclxuICAgICAgICAgICAgYW5pbWF0aW5nIDogZmFsc2UgXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UGFnZXMoZXZlbnQpIHtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5hbmltYXRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93UGFnZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJ1bkFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhpZGVQYWdlcygpIHtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5hbmltYXRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5ydW5BbmltYXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1BhZ2VzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5lJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51SWNvbicgb25Nb3VzZUVudGVyPXt0aGlzLnNob3dQYWdlcy5iaW5kKHRoaXMpfSBvbkNsaWNrPXt0aGlzLnN0YXRlLnNob3dQYWdlcyA/IHRoaXMuaGlkZVBhZ2VzLmJpbmQodGhpcykgOiB0aGlzLnNob3dQYWdlcy5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4vc3RhdGljL2hhaWh1aUxvZ28ucG5nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gTWVudSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgaGVpZ2h0PVwiNDBcIiB3aWR0aD1cIjQ2XCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgY2xhc3NOYW1lPVwiYmxpY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI0OVwiIGN5PVwiNDdcIiBmaWxsPVwibm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjIwcHhcIiB3aWR0aD1cIjIwcHhcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2hvd1BhZ2VzID8gJ2V4cGFuZGUgc2hvdycgOiAgJ2V4cGFuZGUgaGlkZSd9IHZpZXdCb3g9JzAgMCAxMDAgMTAwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2hvd1BhZ2VzID8gJ3BhZ2VzIHNob3cnIDogICdwYWdlcyd9IG9uTW91c2VMZWF2ZT17dGhpcy5oaWRlUGFnZXMuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ1Bob3RvLXZpZGVvJywgJ1ByaW50JywgJ1BlcnNvbmFsaXphcmknLCAnQ29udGFjdCddLm1hcCgoY29sLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUucnVuQW5pbWF0aW9uID8gJ3BhZ2Ugc2hvdycgOiAgJ3BhZ2UgaGlkZSd9IHN0eWxlPXt7YW5pbWF0aW9uRGVsYXk6IGAuJHtpfXNgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YC4vc3RhdGljL2hlYWRlckljb25zLyR7Y29sfS5wbmdgfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ge2NvbH0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJTdHJ1Y3R1cmUubWFwKHBhZ2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGFnZS5uYW1lfSBjbGFzc05hbWU9J3BhZ2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHsgcGFnZS5uYW1lIH0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycuL3N0YXRpYy8nICsgcGFnZS5uYW1lICsgJy5wbmcnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG57XHJcbmBkaXYuaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmRpdi5saW5lIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGxlZnQ6MDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6NDAlO1xyXG4gICAgYmFja2dyb3VuZDoke2Nzcy5za3l9O1xyXG4gICAgei1JbmRleDotMTtcclxuICAgIFxyXG59XHJcblxyXG5kaXYuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmRpdi5tZW51SWNvbiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbmRpdi5tZW51SWNvbiBpbWcgeyBcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuZGl2Lm1lbnVJY29uIHAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luIDogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQgOiBib2xkO1xyXG4gICAgY29sb3IgOiAke2Nzcy5ncmV5fVxyXG59XHJcblxyXG5zdmcuYmxpY2sge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmNrIHtcclxuICAgIDUwJSB7XHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAxNTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBzdHJva2Utd2lkdGg6IDA7XHJcbiAgICAgICAgciA6IDQwO1xyXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXkgOiAxMzsgXHJcbiAgICB9XHJcbn1cclxuXHJcbnN2Zy5ibGljayBjaXJjbGUge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwO1xyXG4gICAgcjogNjtcclxuICAgIHN0cm9rZSA6ICR7Y3NzLmdyZXl9O1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheSA6IDEzO1xyXG59XHJcblxyXG5kaXYubWVudUljb246aG92ZXIgc3ZnLmJsaWNrIGNpcmNsZSB7XHJcbiAgICBhbmltYXRpb246IGJsaW5jayAxcyBlYXNlO1xyXG59XHJcblxyXG5kaXYucGFnZXMge1xyXG4gICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vLyBkaXYucGFnZXMgZGl2LnBhZ2Uge1xyXG4vLyAgICAgb3BhY2l0eTogMDtcclxuLy8gfVxyXG5cclxuZGl2LnBhZ2VzLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8vIGRpdi5wYWdlcy5zaG93IGRpdi5wYWdlIHtcclxuLy8gICAgIG9wYWNpdHk6IDA7XHJcbi8vIH1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbiA6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIC8vIGJhY2tncm91bmQ6ICR7Y3NzLnNreX07XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgIFxyXG59XHJcblxyXG5saTogaG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsLjMpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxufVxyXG5cclxuXHJcbmRpdi5wYWdlIHtcclxuICAgIGJhY2tncm91bmQ6ICR7Y3NzLnNreX07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIFxyXG4gICAgLy90cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvdyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaGlkZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXYucGFnZS5zaG93IHtcclxuICAgIG9wYWNpdHk6MDtcclxuICAgIGFuaW1hdGlvbjogc2hvdyAwLjVzIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuXHJcbmRpdi5wYWdlLmhpZGUge1xyXG4gICAgb3BhY2l0eToxO1xyXG4gICAgYW5pbWF0aW9uOiBoaWRlIDAuNXMgZWFzZSBmb3J3YXJkcztcclxufVxyXG5cclxuYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYSBpbWcge1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjc3MuZ3JleX07XHJcbiAgICAke2Nzcy5jZW50ZXJ9OyAgICBcclxufVxyXG5cclxuYSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbiA6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5hIGRpdiB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y3NzLmdyZXl9O1xyXG59XHJcblxyXG5zdmcuZXhwYW5kZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuc3ZnLmV4cGFuZGUgcGF0aCB7XHJcbiAgICBzdHJva2U6ICR7Y3NzLmdyZXl9O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA5O1xyXG4gICAgZmlsbDpub25lO1xyXG4gICAgc3Ryb2tlLWxpbmVqb2luIDogcm91bmQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcblxyXG4gICAgZCA6IHBhdGgoXCJNMTAsMTAgTDcwLDUwIEwxMCw5MCBMMTAsMTAgTDcwLDUwXCIpOyBcclxufVxyXG5cclxuQGtleWZyYW1lcyBleHBhbmRlIHtcclxuICAgIDAlIHtcclxuICAgICAgICBkIDogcGF0aChcIk0xMCwxMCBMNzAsNTAgTDEwLDkwIEwxMCwxMCBMNzAsNTBcIik7IFxyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgZCA6IHBhdGgoXCJNMTAsMTAgTDgwLDEwIEwxMCwxMCBMMTAsMTAgTDEwLDEwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGZpbGw6ICR7Y3NzLmdyZXl9O1xyXG4gICAgICAgIGQgOiBwYXRoKFwiTTEwLDIwIEw5MCwyMCBMNTAsODAgTDEwLDIwIEw5MCwyMFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBkZXhwYW5kZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgZmlsbDogJHtjc3MuZ3JleX07XHJcbiAgICAgICAgZCA6IHBhdGgoXCJNMTAsMjAgTDkwLDIwIEw1MCw4MCBMMTAsMjAgTDkwLDIwXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICA1MCUge1xyXG4gICAgICAgIGQgOiBwYXRoKFwiTTEwLDEwIEw4MCwxMCBMMTAsMTAgTDEwLDEwIEwxMCwxMFwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgZmlsbDogbm9uZTtcclxuICAgICAgICBkIDogcGF0aChcIk0xMCwxMCBMNzAsNTAgTDEwLDkwIEwxMCwxMCBMNzAsNTBcIik7IFxyXG4gICAgfVxyXG59XHJcblxyXG5zdmcuZXhwYW5kZS5zaG93IHBhdGgge1xyXG4gICAgLy9kIDogcGF0aChcIk0xMCwyMCBMOTAsMjAgTDUwLDgwIEwxMCwyMCBMOTAsMjBcIik7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBleHBhbmRlIC41cyBlYXNlIGZvcndhcmRzO1xyXG59XHJcblxyXG5zdmcuZXhwYW5kZS5oaWRlIHBhdGgge1xyXG4gICAgLy9kIDogcGF0aChcIk0xMCwyMCBMOTAsMjAgTDUwLDgwIEwxMCwyMCBMOTAsMjBcIik7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBkZXhwYW5kZSAuNXMgZWFzZSBmb3J3YXJkcztcclxufVxyXG5gXHJcbn1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=componentsHeader.js */'
            }));
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\programming\\nodejs\\heroku\\next-ahh\\components\\Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\programming\\nodejs\\heroku\\next-ahh\\components\\Header.js"); } } })();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = __webpack_require__(541);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(546);

var _Header2 = _interopRequireDefault(_Header);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _utils = __webpack_require__(540);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\programming\\nodejs\\heroku\\next-ahh\\components\\Layout.js';


var Layout = function Layout(props) {
    return _react2.default.createElement('div', { className: 'layout', 'data-jsx': 2404141446,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('title', {
        'data-jsx': 2404141446,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, 'Hai Hui'), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 2404141446,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx': 2404141446,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=News+Cycle', rel: 'stylesheet', 'data-jsx': 2404141446,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    })), _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }), props.children, _react2.default.createElement(_style2.default, {
        styleId: 2404141446,
        css: 'div.layout{position:absolute;top:0;left:0;width:100%;height:100%;font-size:10px;font-family:News Cycle, Arial;font-weight:300;background:' + _utils2.default.neutral + '}div.basicPage{margin-top:50px;padding:10px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkMsQUFLdUIsQUFjRixpQkFDSCxFQWRQLE9BQ0MsS0FjWCxHQWJlLFlBQ0MsYUFDRyxnQkFDZSwrQkFDZCxpQkFFcEIseUNBQUMiLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkQ6L3Byb2dyYW1taW5nL25vZGVqcy9oZXJva3UvbmV4dC1haGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IGNzcyBmcm9tICcuLi9jc3MvdXRpbHMnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J2xheW91dCc+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5IYWkgSHVpPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5ld3MrQ3ljbGVcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuXHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD5cclxue2BcclxuZGl2LmxheW91dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogTmV3cyBDeWNsZSwgQXJpYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgYmFja2dyb3VuZDogJHtjc3MubmV1dHJhbH1cclxufVxyXG5cclxuZGl2LmJhc2ljUGFnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5gfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdfQ== */\n/*@ sourceURL=componentsLayout.js */'
    }));
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\programming\\nodejs\\heroku\\next-ahh\\components\\Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\programming\\nodejs\\heroku\\next-ahh\\components\\Layout.js"); } } })();

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(542);


/***/ })

},[548]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY3NzL3V0aWxzLmpzPzhiYjM1M2YiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/OGJiMzUzZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz84YmIzNTNmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzhiYjM1M2YiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcmVkIDogJyNGRjNiM2YnLFxyXG4gICAgbmV1dHJhbCA6ICcjRUZFRkVGJyxcclxuICAgIHNreSA6ICcjQ0FFQkYyOycsXHJcbiAgICBncmV5IDogJyMwNTRENEQnLFxyXG4gICAgY2VudGVyOiBgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGBcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Nzcy91dGlscy5qcyIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdiYXNpY1BhZ2UnPlxyXG4gICAgPGgxPlRoaXMgcGFnZSBoYXMgYSB0aXRsZTwvaDE+XHJcbiAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBEb25lYyBmYWNpbGlzaXMgc2VtcGVyIGhlbmRyZXJpdC4gVml2YW11cyBhIG1ldHVzIHNlZCB0b3J0b3IgbW9sZXN0aWUgc3VzY2lwaXQgZWdldCBub24gZHVpLiBJbnRlZ2VyIGFudGUgYXJjdSwgdmVzdGlidWx1bSBlZ2V0IGxpZ3VsYSBoZW5kcmVyaXQsIGlhY3VsaXMgbGFvcmVldCBuaWJoLiBOdWxsYW0gcGVsbGVudGVzcXVlIGlkIHRvcnRvciBub24gZXVpc21vZC4gRG9uZWMgYSBuaWJoIHF1aXMgbmlzaSBzZW1wZXIgZWxlbWVudHVtIHZpdGFlIG5vbiBuaWJoLiBQcm9pbiBtYXVyaXMgc2VtLCBjb25ndWUgbmVjIHZlc3RpYnVsdW0gZmV1Z2lhdCwgbW9sZXN0aWUgdml0YWUgdmVsaXQuIER1aXMgY29uc2VxdWF0LCBleCBhIHBoYXJldHJhIGRpZ25pc3NpbSwgbmVxdWUgZWxpdCBtb2xlc3RpZSBkdWksIGV1IGZldWdpYXQgdXJuYSBkdWkgaW4gbmlzaS4gSW4gZmV1Z2lhdCB1bGxhbWNvcnBlciBpcHN1bS5cclxuXHJcbkludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gU3VzcGVuZGlzc2UgaWQgbGlndWxhIGxpYmVyby4gSW4gc29kYWxlcyBsYWN1cyB2aXRhZSBtaSBsb2JvcnRpcywgdml0YWUgZmFjaWxpc2lzIHR1cnBpcyBzb2RhbGVzLiBNYXVyaXMgZWxlaWZlbmQgcXVpcyBxdWFtIG5lYyBtb2xlc3RpZS4gVmVzdGlidWx1bSBwdXJ1cyB2ZWxpdCwgcHJldGl1bSBhdCBhcmN1IGV0LCBsYW9yZWV0IHNvbGxpY2l0dWRpbiBzZW0uIEN1cmFiaXR1ciBkYXBpYnVzIHNlbSBpZCBtYWduYSBsdWN0dXMgZWZmaWNpdHVyLiBNb3JiaSBiaWJlbmR1bSB2ZW5lbmF0aXMgb3JjaS5cclxuXHJcblZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgdmVoaWN1bGEgcXVhbSBzZWQgdXJuYSBjb25zZWN0ZXR1ciwgaW4gY3Vyc3VzIG51bGxhIHBlbGxlbnRlc3F1ZS4gUXVpc3F1ZSBtYWxlc3VhZGEgbmVxdWUgdmVsIG5pc2wgdGVtcHVzIHByZXRpdW0uIEFsaXF1YW0gZWxlaWZlbmQgdWx0cmljZXMgZGlhbSBldCBwb3J0YS4gTmFtIGVsZWlmZW5kIGVzdCBhIHNvbGxpY2l0dWRpbiBncmF2aWRhLiBOdWxsYSBzZW1wZXIgdG9ydG9yIHNpdCBhbWV0IHNhcGllbiBhbGlxdWFtIGVnZXN0YXMgYXQgbW9sZXN0aWUgdHVycGlzLiBBbGlxdWFtIGNvbW1vZG8gbnVuYyBlZ2V0IGp1c3RvIGZldWdpYXQgcGVsbGVudGVzcXVlLlxyXG5cclxuRG9uZWMgcmlzdXMgZWxpdCwgbWFsZXN1YWRhIGF0IG5pc2wgbm9uLCBjb252YWxsaXMgbW9sbGlzIHRvcnRvci4gSW50ZWdlciBwb3N1ZXJlIGVyb3MgZXJvcywgc2l0IGFtZXQgaW1wZXJkaWV0IGVuaW0gY29uZ3VlIGV1LiBOYW0gZGlnbmlzc2ltIHZlbGl0IHB1cnVzLCBub24gZGlnbmlzc2ltIHRlbGx1cyBmZXJtZW50dW0gZXUuIFByYWVzZW50IGV1aXNtb2QgZ3JhdmlkYSBuaWJoLCBhIGdyYXZpZGEgbGVvIHBlbGxlbnRlc3F1ZSBpZC4gVmVzdGlidWx1bSBibGFuZGl0IHRpbmNpZHVudCBudWxsYSwgcXVpcyB0aW5jaWR1bnQgc2VtIGltcGVyZGlldCBxdWlzLiBBZW5lYW4gcXVpcyBkaWFtIGltcGVyZGlldCwgdmFyaXVzIGVzdCB2aXRhZSwgb3JuYXJlIGxvcmVtLiBQaGFzZWxsdXMgZWdlc3RhcyBpZCBuaWJoIGFjIG1vbGxpcy4gTmFtIGhlbmRyZXJpdCBpZCBlcmF0IGEgY29uc2VjdGV0dXIuXHJcblxyXG5DdXJhYml0dXIgZXQgdWx0cmljZXMgbGVjdHVzLiBOdW5jIHRpbmNpZHVudCBlcmF0IGEgb3JuYXJlIGVmZmljaXR1ci4gTnVsbGFtIGlkIHRlbXBvciBlc3QsIHF1aXMgZmluaWJ1cyBxdWFtLiBEb25lYyBjb21tb2RvIGNvbnNlcXVhdCBmZWxpcywgZXQgZWxlbWVudHVtIGxhY3VzIHRlbXBvciBpZC4gTWFlY2VuYXMgc3VzY2lwaXQgbWF1cmlzIHZlbCBsdWN0dXMgdWxsYW1jb3JwZXIuIEludGVnZXIgYWxpcXVhbSBlc3QgcXVpcyB2YXJpdXMgbG9ib3J0aXMuIEFlbmVhbiB2ZW5lbmF0aXMgZG9sb3IgbGlndWxhLCBjb25kaW1lbnR1bSB0ZW1wdXMganVzdG8gZWxlaWZlbmQgdml0YWUuIFNlZCBhbnRlIG1pLCBzYWdpdHRpcyBhYyBsb3JlbSBpbiwgY3Vyc3VzIG1vbGVzdGllIGVuaW0uIFF1aXNxdWUgYXQgcXVhbSBmYWNpbGlzaXMsIHZlbmVuYXRpcyBsZWN0dXMgZXUsIGZlcm1lbnR1bSBlcm9zLiBBbGlxdWFtIHF1aXMgb3JjaSBwcmV0aXVtLCBjb252YWxsaXMgbGliZXJvIGF0LCBsdWN0dXMgc2FwaWVuLiBFdGlhbSBjb25zZXF1YXQgY29uZ3VlIGVmZmljaXR1ci4gTnVsbGEgZ3JhdmlkYSBwcmV0aXVtIHRlbGx1cywgYWMgc2VtcGVyIG1pIHBvc3VlcmUgbm9uLlxyXG48L3A+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+ICg8TGF5b3V0PjxIb21lLz48L0xheW91dD4pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNzcyBmcm9tICcuLi9jc3MvdXRpbHMnO1xyXG5pbXBvcnQgeyBzZXRUaW1lb3V0IH0gZnJvbSAndGltZXJzJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93UGFnZXMgOiBmYWxzZSxcclxuICAgICAgICAgICAgcnVuQW5pbWF0aW9uIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuaW1hdGluZyA6IGZhbHNlIFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1BhZ2VzKGV2ZW50KSB7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuYW5pbWF0aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1BhZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5ydW5BbmltYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFuaW1hdGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoaWRlUGFnZXMoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuYW5pbWF0aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucnVuQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dQYWdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluZSc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudUljb24nIG9uTW91c2VFbnRlcj17dGhpcy5zaG93UGFnZXMuYmluZCh0aGlzKX0gb25DbGljaz17dGhpcy5zdGF0ZS5zaG93UGFnZXMgPyB0aGlzLmhpZGVQYWdlcy5iaW5kKHRoaXMpIDogdGhpcy5zaG93UGFnZXMuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuL3N0YXRpYy9oYWlodWlMb2dvLnBuZycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IE1lbnUgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjQwXCIgd2lkdGg9XCI0NlwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIGNsYXNzTmFtZT1cImJsaWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNDlcIiBjeT1cIjQ3XCIgZmlsbD1cIm5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBoZWlnaHQ9XCIyMHB4XCIgd2lkdGg9XCIyMHB4XCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNob3dQYWdlcyA/ICdleHBhbmRlIHNob3cnIDogICdleHBhbmRlIGhpZGUnfSB2aWV3Qm94PScwIDAgMTAwIDEwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNob3dQYWdlcyA/ICdwYWdlcyBzaG93JyA6ICAncGFnZXMnfSBvbk1vdXNlTGVhdmU9e3RoaXMuaGlkZVBhZ2VzLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydQaG90by12aWRlbycsICdQcmludCcsICdQZXJzb25hbGl6YXJpJywgJ0NvbnRhY3QnXS5tYXAoKGNvbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnJ1bkFuaW1hdGlvbiA/ICdwYWdlIHNob3cnIDogICdwYWdlIGhpZGUnfSBzdHlsZT17e2FuaW1hdGlvbkRlbGF5OiBgLiR7aX1zYH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2AuL3N0YXRpYy9oZWFkZXJJY29ucy8ke2NvbH0ucG5nYH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHtjb2x9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Lyoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyU3RydWN0dXJlLm1hcChwYWdlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhZ2UubmFtZX0gY2xhc3NOYW1lPSdwYWdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7IHBhZ2UubmFtZSB9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnLi9zdGF0aWMvJyArIHBhZ2UubmFtZSArICcucG5nJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9ICovfVxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxue1xyXG5gZGl2LmhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5kaXYubGluZSB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjQwJTtcclxuICAgIGJhY2tncm91bmQ6JHtjc3Muc2t5fTtcclxuICAgIHotSW5kZXg6LTE7XHJcbiAgICBcclxufVxyXG5cclxuZGl2LmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5kaXYubWVudUljb24ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG5kaXYubWVudUljb24gaW1nIHsgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmRpdi5tZW51SWNvbiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbiA6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0IDogYm9sZDtcclxuICAgIGNvbG9yIDogJHtjc3MuZ3JleX1cclxufVxyXG5cclxuc3ZnLmJsaWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5jayB7XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHN0cm9rZS13aWR0aDogMTU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwO1xyXG4gICAgICAgIHIgOiA0MDtcclxuICAgICAgICBzdHJva2UtZGFzaGFycmF5IDogMTM7IFxyXG4gICAgfVxyXG59XHJcblxyXG5zdmcuYmxpY2sgY2lyY2xlIHtcclxuICAgIHN0cm9rZS13aWR0aDogMDtcclxuICAgIHI6IDY7XHJcbiAgICBzdHJva2UgOiAke2Nzcy5ncmV5fTtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXkgOiAxMztcclxufVxyXG5cclxuZGl2Lm1lbnVJY29uOmhvdmVyIHN2Zy5ibGljayBjaXJjbGUge1xyXG4gICAgYW5pbWF0aW9uOiBibGluY2sgMXMgZWFzZTtcclxufVxyXG5cclxuZGl2LnBhZ2VzIHtcclxuICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLy8gZGl2LnBhZ2VzIGRpdi5wYWdlIHtcclxuLy8gICAgIG9wYWNpdHk6IDA7XHJcbi8vIH1cclxuXHJcbmRpdi5wYWdlcy5zaG93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vLyBkaXYucGFnZXMuc2hvdyBkaXYucGFnZSB7XHJcbi8vICAgICBvcGFjaXR5OiAwO1xyXG4vLyB9XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW4gOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAke2Nzcy5za3l9O1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICBcclxufVxyXG5cclxubGk6IGhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbn1cclxuXHJcblxyXG5kaXYucGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAke2Nzcy5za3l9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBcclxuICAgIC8vdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNob3cge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGhpZGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcclxuICAgIH1cclxufVxyXG5cclxuZGl2LnBhZ2Uuc2hvdyB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgICBhbmltYXRpb246IHNob3cgMC41cyBlYXNlIGZvcndhcmRzO1xyXG59XHJcblxyXG5kaXYucGFnZS5oaWRlIHtcclxuICAgIG9wYWNpdHk6MTtcclxuICAgIGFuaW1hdGlvbjogaGlkZSAwLjVzIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmEgaW1nIHtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y3NzLmdyZXl9O1xyXG4gICAgJHtjc3MuY2VudGVyfTsgICAgXHJcbn1cclxuXHJcbmEgcCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4gOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuYSBkaXYge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2Nzcy5ncmV5fTtcclxufVxyXG5cclxuc3ZnLmV4cGFuZGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbnN2Zy5leHBhbmRlIHBhdGgge1xyXG4gICAgc3Ryb2tlOiAke2Nzcy5ncmV5fTtcclxuICAgIHN0cm9rZS13aWR0aDogOTtcclxuICAgIGZpbGw6bm9uZTtcclxuICAgIHN0cm9rZS1saW5lam9pbiA6IHJvdW5kO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG5cclxuICAgIGQgOiBwYXRoKFwiTTEwLDEwIEw3MCw1MCBMMTAsOTAgTDEwLDEwIEw3MCw1MFwiKTsgXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZXhwYW5kZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgZCA6IHBhdGgoXCJNMTAsMTAgTDcwLDUwIEwxMCw5MCBMMTAsMTAgTDcwLDUwXCIpOyBcclxuICAgIH1cclxuXHJcbiAgICA1MCUge1xyXG4gICAgICAgIGQgOiBwYXRoKFwiTTEwLDEwIEw4MCwxMCBMMTAsMTAgTDEwLDEwIEwxMCwxMFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBmaWxsOiAke2Nzcy5ncmV5fTtcclxuICAgICAgICBkIDogcGF0aChcIk0xMCwyMCBMOTAsMjAgTDUwLDgwIEwxMCwyMCBMOTAsMjBcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZGV4cGFuZGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGZpbGw6ICR7Y3NzLmdyZXl9O1xyXG4gICAgICAgIGQgOiBwYXRoKFwiTTEwLDIwIEw5MCwyMCBMNTAsODAgTDEwLDIwIEw5MCwyMFwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgNTAlIHtcclxuICAgICAgICBkIDogcGF0aChcIk0xMCwxMCBMODAsMTAgTDEwLDEwIEwxMCwxMCBMMTAsMTBcIik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDEwMCUge1xyXG4gICAgICAgIGZpbGw6IG5vbmU7XHJcbiAgICAgICAgZCA6IHBhdGgoXCJNMTAsMTAgTDcwLDUwIEwxMCw5MCBMMTAsMTAgTDcwLDUwXCIpOyBcclxuICAgIH1cclxufVxyXG5cclxuc3ZnLmV4cGFuZGUuc2hvdyBwYXRoIHtcclxuICAgIC8vZCA6IHBhdGgoXCJNMTAsMjAgTDkwLDIwIEw1MCw4MCBMMTAsMjAgTDkwLDIwXCIpO1xyXG5cclxuICAgIGFuaW1hdGlvbjogZXhwYW5kZSAuNXMgZWFzZSBmb3J3YXJkcztcclxufVxyXG5cclxuc3ZnLmV4cGFuZGUuaGlkZSBwYXRoIHtcclxuICAgIC8vZCA6IHBhdGgoXCJNMTAsMjAgTDkwLDIwIEw1MCw4MCBMMTAsMjAgTDkwLDIwXCIpO1xyXG5cclxuICAgIGFuaW1hdGlvbjogZGV4cGFuZGUgLjVzIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuYFxyXG59XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgY3NzIGZyb20gJy4uL2Nzcy91dGlscyc7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT0nbGF5b3V0Jz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkhhaSBIdWk8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TmV3cytDeWNsZVwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG57YFxyXG5kaXYubGF5b3V0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBOZXdzIEN5Y2xlLCBBcmlhbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAke2Nzcy5uZXV0cmFsfVxyXG59XHJcblxyXG5kaXYuYmFzaWNQYWdlIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBQ0E7QUFEQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUlBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBOzs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTs7QUFDQTs7QUFBQTtBQUdBO0FBSEE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQWhCQTtBQTdDQTtBQTZDQTs7Ozs7QUF3U0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBUkE7QUFMQTtBQUtBO0FBa0NBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        