webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41MmNjMDUyOGMyZTdlY2NkYWQwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/N2NhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY3NzIGZyb20gJy4uL2Nzcy91dGlscyc7XHJcbmltcG9ydCB7IHNldFRpbWVvdXQgfSBmcm9tICd0aW1lcnMnO1xyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3dQYWdlcyA6IGZhbHNlLFxyXG4gICAgICAgICAgICBydW5BbmltYXRpb24gOiBmYWxzZSxcclxuICAgICAgICAgICAgYW5pbWF0aW5nIDogZmFsc2UgXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UGFnZXMoZXZlbnQpIHtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5hbmltYXRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93UGFnZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJ1bkFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhpZGVQYWdlcygpIHtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5hbmltYXRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5ydW5BbmltYXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1BhZ2VzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5lJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51SWNvbicgb25Nb3VzZUVudGVyPXt0aGlzLnNob3dQYWdlcy5iaW5kKHRoaXMpfSBvbkNsaWNrPXt0aGlzLnN0YXRlLnNob3dQYWdlcyA/IHRoaXMuaGlkZVBhZ2VzLmJpbmQodGhpcykgOiB0aGlzLnNob3dQYWdlcy5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4vc3RhdGljL2hhaWh1aUxvZ28ucG5nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gTWVudSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgaGVpZ2h0PVwiNDBcIiB3aWR0aD1cIjQ2XCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgY2xhc3NOYW1lPVwiYmxpY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI0OVwiIGN5PVwiNDdcIiBmaWxsPVwibm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjIwcHhcIiB3aWR0aD1cIjIwcHhcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2hvd1BhZ2VzID8gJ2V4cGFuZGUgc2hvdycgOiAgJ2V4cGFuZGUgaGlkZSd9IHZpZXdCb3g9JzAgMCAxMDAgMTAwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2hvd1BhZ2VzID8gJ3BhZ2VzIHNob3cnIDogICdwYWdlcyd9IG9uTW91c2VMZWF2ZT17dGhpcy5oaWRlUGFnZXMuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ1Bob3RvLXZpZGVvJywgJ1ByaW50JywgJ1BlcnNvbmFsaXphcmknLCAnQ29udGFjdCddLm1hcCgoY29sLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUucnVuQW5pbWF0aW9uID8gJ3BhZ2Ugc2hvdycgOiAgJ3BhZ2UgaGlkZSd9IHN0eWxlPXt7YW5pbWF0aW9uRGVsYXk6IGAuJHtpfXNgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YC4vc3RhdGljL2hlYWRlckljb25zLyR7Y29sfS5wbmdgfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ge2NvbH0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJTdHJ1Y3R1cmUubWFwKHBhZ2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGFnZS5uYW1lfSBjbGFzc05hbWU9J3BhZ2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHsgcGFnZS5uYW1lIH0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycuL3N0YXRpYy8nICsgcGFnZS5uYW1lICsgJy5wbmcnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG57XHJcbmBkaXYuaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmRpdi5saW5lIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGxlZnQ6MDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6NDAlO1xyXG4gICAgYmFja2dyb3VuZDoke2Nzcy5za3l9O1xyXG4gICAgei1JbmRleDotMTtcclxuICAgIFxyXG59XHJcblxyXG5kaXYuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmRpdi5tZW51SWNvbiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbmRpdi5tZW51SWNvbiBpbWcgeyBcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuZGl2Lm1lbnVJY29uIHAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luIDogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQgOiBib2xkO1xyXG4gICAgY29sb3IgOiAke2Nzcy5ncmV5fVxyXG59XHJcblxyXG5zdmcuYmxpY2sge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmNrIHtcclxuICAgIDUwJSB7XHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAxNTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBzdHJva2Utd2lkdGg6IDA7XHJcbiAgICAgICAgciA6IDQwO1xyXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXkgOiAxMzsgXHJcbiAgICB9XHJcbn1cclxuXHJcbnN2Zy5ibGljayBjaXJjbGUge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwO1xyXG4gICAgcjogNjtcclxuICAgIHN0cm9rZSA6ICR7Y3NzLmdyZXl9O1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheSA6IDEzO1xyXG59XHJcblxyXG5kaXYubWVudUljb246aG92ZXIgc3ZnLmJsaWNrIGNpcmNsZSB7XHJcbiAgICBhbmltYXRpb246IGJsaW5jayAxcyBlYXNlO1xyXG59XHJcblxyXG5kaXYucGFnZXMge1xyXG4gICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vLyBkaXYucGFnZXMgZGl2LnBhZ2Uge1xyXG4vLyAgICAgb3BhY2l0eTogMDtcclxuLy8gfVxyXG5cclxuZGl2LnBhZ2VzLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8vIGRpdi5wYWdlcy5zaG93IGRpdi5wYWdlIHtcclxuLy8gICAgIG9wYWNpdHk6IDA7XHJcbi8vIH1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbiA6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIC8vIGJhY2tncm91bmQ6ICR7Y3NzLnNreX07XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgIFxyXG59XHJcblxyXG5saTogaG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsLjMpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxufVxyXG5cclxuXHJcbmRpdi5wYWdlIHtcclxuICAgIGJhY2tncm91bmQ6ICR7Y3NzLnNreX07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIFxyXG4gICAgLy90cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvdyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaGlkZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXYucGFnZS5zaG93IHtcclxuICAgIG9wYWNpdHk6MDtcclxuICAgIGFuaW1hdGlvbjogc2hvdyAwLjVzIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuXHJcbmRpdi5wYWdlLmhpZGUge1xyXG4gICAgb3BhY2l0eToxO1xyXG4gICAgYW5pbWF0aW9uOiBoaWRlIDAuNXMgZWFzZSBmb3J3YXJkcztcclxufVxyXG5cclxuYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYSBpbWcge1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjc3MuZ3JleX07XHJcbiAgICAke2Nzcy5jZW50ZXJ9OyAgICBcclxufVxyXG5cclxuYSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbiA6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5hIGRpdiB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y3NzLmdyZXl9O1xyXG59XHJcblxyXG5zdmcuZXhwYW5kZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuc3ZnLmV4cGFuZGUgcGF0aCB7XHJcbiAgICBzdHJva2U6ICR7Y3NzLmdyZXl9O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA5O1xyXG4gICAgZmlsbDpub25lO1xyXG4gICAgc3Ryb2tlLWxpbmVqb2luIDogcm91bmQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcblxyXG4gICAgZCA6IHBhdGgoXCJNMTAsMTAgTDcwLDUwIEwxMCw5MCBMMTAsMTAgTDcwLDUwXCIpOyBcclxufVxyXG5cclxuQGtleWZyYW1lcyBleHBhbmRlIHtcclxuICAgIDAlIHtcclxuICAgICAgICBkIDogcGF0aChcIk0xMCwxMCBMNzAsNTAgTDEwLDkwIEwxMCwxMCBMNzAsNTBcIik7IFxyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgZCA6IHBhdGgoXCJNMTAsMTAgTDgwLDEwIEwxMCwxMCBMMTAsMTAgTDEwLDEwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGZpbGw6ICR7Y3NzLmdyZXl9O1xyXG4gICAgICAgIGQgOiBwYXRoKFwiTTEwLDIwIEw5MCwyMCBMNTAsODAgTDEwLDIwIEw5MCwyMFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBkZXhwYW5kZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgZmlsbDogJHtjc3MuZ3JleX07XHJcbiAgICAgICAgZCA6IHBhdGgoXCJNMTAsMjAgTDkwLDIwIEw1MCw4MCBMMTAsMjAgTDkwLDIwXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICA1MCUge1xyXG4gICAgICAgIGQgOiBwYXRoKFwiTTEwLDEwIEw4MCwxMCBMMTAsMTAgTDEwLDEwIEwxMCwxMFwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgZmlsbDogbm9uZTtcclxuICAgICAgICBkIDogcGF0aChcIk0xMCwxMCBMNzAsNTAgTDEwLDkwIEwxMCwxMCBMNzAsNTBcIik7IFxyXG4gICAgfVxyXG59XHJcblxyXG5zdmcuZXhwYW5kZS5zaG93IHBhdGgge1xyXG4gICAgLy9kIDogcGF0aChcIk0xMCwyMCBMOTAsMjAgTDUwLDgwIEwxMCwyMCBMOTAsMjBcIik7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBleHBhbmRlIC41cyBlYXNlIGZvcndhcmRzO1xyXG59XHJcblxyXG5zdmcuZXhwYW5kZS5oaWRlIHBhdGgge1xyXG4gICAgLy9kIDogcGF0aChcIk0xMCwyMCBMOTAsMjAgTDUwLDgwIEwxMCwyMCBMOTAsMjBcIik7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBkZXhwYW5kZSAuNXMgZWFzZSBmb3J3YXJkcztcclxufVxyXG5gXHJcbn1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFJQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BOzs7O0FBRUE7QUFFQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7O0FBQ0E7O0FBQUE7QUFHQTtBQUhBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFoQkE7QUE3Q0E7QUE2Q0E7Ozs7O0FBd1NBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9