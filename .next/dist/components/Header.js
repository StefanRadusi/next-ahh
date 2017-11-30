'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _utils = require('../css/utils');

var _utils2 = _interopRequireDefault(_utils);

var _timers = require('timers');

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

            return _react2.default.createElement('div', { className: this.props.homePage ? 'header hasBanner' : 'header', 'data-jsx': 2929971849,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('div', { className: 'line', 'data-jsx': 2929971849,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }), _react2.default.createElement('div', { className: 'container', 'data-jsx': 2929971849,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('div', { className: 'menuIcon', onMouseEnter: this.showPages.bind(this), onClick: this.state.showPages ? this.hidePages.bind(this) : this.showPages.bind(this), 'data-jsx': 2929971849,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('img', { src: './static/haihuiLogo.png', 'data-jsx': 2929971849,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }), _react2.default.createElement('p', {
                'data-jsx': 2929971849,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, ' Menu '), _react2.default.createElement('svg', { height: '40', width: '46', viewBox: '0 0 100 100', className: 'blick', 'data-jsx': 2929971849,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('circle', { cx: '49', cy: '47', fill: 'none', 'data-jsx': 2929971849,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            })), _react2.default.createElement('svg', { height: '20px', width: '20px', className: this.state.showPages ? 'expande show' : 'expande hide', viewBox: '0 0 100 100', 'data-jsx': 2929971849,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('path', {
                'data-jsx': 2929971849,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }))), _react2.default.createElement('div', { className: this.state.showPages ? 'pages show' : 'pages', onMouseLeave: this.hidePages.bind(this), 'data-jsx': 2929971849,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('ul', {
                'data-jsx': 2929971849,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, ['Photo-video', 'Print', 'Personalizari', 'Contact'].map(function (col, i) {
                return _react2.default.createElement('li', { key: i, 'data-jsx': 2929971849,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    }
                }, _react2.default.createElement('div', { className: _this4.state.runAnimation ? 'page show' : 'page hide', style: { animationDelay: '.' + i + 's' }, 'data-jsx': 2929971849,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                    }
                }, _react2.default.createElement('a', {
                    'data-jsx': 2929971849,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }, _react2.default.createElement('div', {
                    'data-jsx': 2929971849,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }, _react2.default.createElement('img', { src: './static/headerIcons/' + col + '.png', 'data-jsx': 2929971849,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                })), _react2.default.createElement('p', {
                    'data-jsx': 2929971849,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    }
                }, ' ', col, ' '))));
            })))), _react2.default.createElement(_style2.default, {
                styleId: 2929971849,
                css: 'div.header[data-jsx="2929971849"]{position:absolute;top:0;left:0;width:calc(100% - 20px);height:40px;padding:10px}div.header.hasBanner[data-jsx="2929971849"]{top:300px}@media (max-width:600px){div.header.hasBanner[data-jsx="2929971849"]{top:200px}}div.line[data-jsx="2929971849"]{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:0;width:100%;height:40%;background:' + _utils2.default.sky + '}div.container[data-jsx="2929971849"]{max-width:1000px;width:100%;height:100%;margin:auto}div.menuIcon[data-jsx="2929971849"]{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;cursor:default}div.menuIcon[data-jsx="2929971849"] img[data-jsx="2929971849"]{height:100%}div.menuIcon[data-jsx="2929971849"] p[data-jsx="2929971849"]{font-size:20px;margin:5px;font-weight:bold;color:' + _utils2.default.grey + '}svg.blick[data-jsx="2929971849"]{position:absolute;top:0;left:0}@-webkit-keyframes blinckdatajsx2929971849{50%{stroke-width:15}100%{stroke-width:0;r:40;stroke-dasharray:13}}@keyframes blinckdatajsx2929971849{50%{stroke-width:15}100%{stroke-width:0;r:40;stroke-dasharray:13}}svg.blick[data-jsx="2929971849"] circle[data-jsx="2929971849"]{stroke-width:0;r:6;stroke:' + _utils2.default.grey + ';stroke-dasharray:13}div.menuIcon[data-jsx="2929971849"]:hover svg.blick[data-jsx="2929971849"] circle[data-jsx="2929971849"]{-webkit-animation:blinckdatajsx2929971849 1s ease;animation:blinckdatajsx2929971849 1s ease}div.pages[data-jsx="2929971849"]{display:none}div.pages.show[data-jsx="2929971849"]{display:block}ul[data-jsx="2929971849"]{list-style-type:none;margin:0;padding:0;padding-top:5px;margin-left:5px}li[data-jsx="2929971849"]{opacity:0.9;margin-bottom:4px;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);box-shadow:1px 1px 1px rgba(0,0,0,0);border-radius:25px;-webkit-transition:all .2s ease;transition:all .2s ease}li[data-jsx="2929971849"]:hover[data-jsx="2929971849"]{opacity:1;box-shadow:1px 1px 1px rgba(0,0,0,.3);-webkit-transform:scale(1.01);-ms-transform:scale(1.01);transform:scale(1.01)}div.page[data-jsx="2929971849"]{background:' + _utils2.default.sky + ';border-radius:25px;opacity:0}@-webkit-keyframes showdatajsx2929971849{0%{opacity:0;-webkit-transform:translateY(15px);-ms-transform:translateY(15px);transform:translateY(15px)}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px)}}@keyframes showdatajsx2929971849{0%{opacity:0;-webkit-transform:translateY(15px);-ms-transform:translateY(15px);transform:translateY(15px)}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px)}}@-webkit-keyframes hidedatajsx2929971849{0%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px)}100%{opacity:0;-webkit-transform:translateY(-15px);-ms-transform:translateY(-15px);transform:translateY(-15px)}}@keyframes hidedatajsx2929971849{0%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px)}100%{opacity:0;-webkit-transform:translateY(-15px);-ms-transform:translateY(-15px);transform:translateY(-15px)}}div.page.show[data-jsx="2929971849"]{opacity:0;-webkit-animation:showdatajsx2929971849 0.5s ease forwards;animation:showdatajsx2929971849 0.5s ease forwards}div.page.hide[data-jsx="2929971849"]{opacity:1;-webkit-animation:hidedatajsx2929971849 0.5s ease forwards;animation:hidedatajsx2929971849 0.5s ease forwards}a[data-jsx="2929971849"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}a[data-jsx="2929971849"] img[data-jsx="2929971849"]{height:18px;background-color:' + _utils2.default.grey + ';' + _utils2.default.center + '}a[data-jsx="2929971849"] p[data-jsx="2929971849"]{font-size:15px;margin:0;margin-left:5px;cursor:default}a[data-jsx="2929971849"] div[data-jsx="2929971849"]{height:35px;width:35px;position:relative;border-radius:25px;background-color:' + _utils2.default.grey + '}svg.expande[data-jsx="2929971849"]{margin-left:auto}svg.expande[data-jsx="2929971849"] path[data-jsx="2929971849"]{stroke:' + _utils2.default.grey + ';stroke-width:9;fill:none;stroke-linejoin:round;stroke-linecap:round;-webkit-transition:all .2s ease;transition:all .2s ease;d:path("M10,10 L70,50 L10,90 L10,10")}@-webkit-keyframes expandedatajsx2929971849{0%{d:path("M10,10 L70,50 L10,90 L10,10")}50%{d:path("M10,10 L80,10 L10,10 L10,10")}100%{fill:' + _utils2.default.grey + ';d:path("M10,20 L90,20 L50,80 L10,20")}}@keyframes expandedatajsx2929971849{0%{d:path("M10,10 L70,50 L10,90 L10,10")}50%{d:path("M10,10 L80,10 L10,10 L10,10")}100%{fill:' + _utils2.default.grey + ';d:path("M10,20 L90,20 L50,80 L10,20")}}@-webkit-keyframes dexpandedatajsx2929971849{0%{fill:' + _utils2.default.grey + ';d:path("M10,20 L90,20 L50,80 L10,20")}50%{d:path("M10,10 L10,80 L10,10 L10,10")}100%{fill:none;d:path("M10,10 L70,50 L10,90 L10,10")}}@keyframes dexpandedatajsx2929971849{0%{fill:' + _utils2.default.grey + ';d:path("M10,20 L90,20 L50,80 L10,20")}50%{d:path("M10,10 L10,80 L10,10 L10,10")}100%{fill:none;d:path("M10,10 L70,50 L10,90 L10,10")}}svg.expande.show[data-jsx="2929971849"] path[data-jsx="2929971849"]{-webkit-animation:expandedatajsx2929971849 .5s ease forwards;animation:expandedatajsx2929971849 .5s ease forwards}svg.expande.hide[data-jsx="2929971849"] path[data-jsx="2929971849"]{-webkit-animation:dexpandedatajsx2929971849 .5s ease forwards;animation:dexpandedatajsx2929971849 .5s ease forwards}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRkEsQUFHc0IsQUFXUCxBQVFJLEFBT0csQUFnQkEsQUFTTCxBQVVBLEFBTUcsQUFTRyxBQVlFLEFBUUQsQUFVSixBQVNVLEFBTWIsQUFjRSxBQWNPLEFBWVQsQUFlRixBQVU4QixBQWMxQixBQU9BLEFBVUEsQUFPQSxBQVFMLEFBT0EsQUFPSSxBQU9ELEFBU0csQUFTSCxBQWNLLEFBTW1CLEFBaUJPLEFBT0EsQUFNTCxBQVVBLEFBT0ssQUFNN0IsQUFhc0IsQUFVQyxVQXRJSCxBQU9BLENBcE90QyxBQVFJLEFBNkpzQyxBQXdCUCxBQU9ELEFBVUEsQUFPRSxBQXdIVyxFQXJTOUIsQUFVakIsQUFvR3NCLEFBNEY0QixBQWtCbkMsQ0F0SmYsQ0FjQSxDQXBFZ0IsQUE2QkYsQUFVTixBQTRKTSxDQTVLVixDQTFGTSxBQTBCQyxBQWdCSSxBQW1QZixDQWpOVSxFQStCZ0MsQ0EwQzVCLENBcERlLEVBaEdsQixBQStRVyxDQXJQUyxBQWtEcEIsQ0EwTFMsRUFuTUUsQ0F6Qk4sRUF1SE8sQ0FoS0ssQUFvSmQsQ0F4RWQsQ0FtUCtDLEFBVUEsRUF4QzVCLEdBa0JmLEFBTUEsQUF1QkEsQ0F4Sm1CLEVBOUlQLENBMkdJLEFBaUhELEFBV0ksQ0FoTG5CLEdBN0JKLEVBMkcwQixDQXlLdEIsRUF0RFMsR0F2UGIsRUExQ2dCLEVBeUdTLEFBa0pPLEFBV2hDLENBakhvQixBQW1DTixFQTBHYSxDQWZ1QixPQWxSakMsQ0E0TGpCLEdBa0lJLEFBVUEsR0FuTEosQUE2RnVCLElBekl2QixHQXhHQSxBQWlFQyxFQWdPeUIsRUF0QzFCLEVBNU13QixDQStEeEIsWUFnRHlDLEFBNkNyQyxBQVVBLEdBakJBLEdBd0JBLEFBc0V3QixDQWhCNUIsR0E4RUEsRUFVQSxJQXRJQSxBQU9BLEVBcE5VLE9BQ0ksRUFxSmQsU0FwSmMsRUFzSVMsU0FySW9CLFdBd0lmLE1BbUllLE9BbkQzQyxnQkFuTkEsQ0FpQnNCLGdCQXVQdEIsR0F0UG1CLFNBb0huQixPQW5IQSIsImZpbGUiOiJjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiRDovcHJvZ3JhbW1pbmcvbm9kZWpzL2hlcm9rdS9uZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjc3MgZnJvbSAnLi4vY3NzL3V0aWxzJztcclxuaW1wb3J0IHsgc2V0VGltZW91dCB9IGZyb20gJ3RpbWVycyc7XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvd1BhZ2VzIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHJ1bkFuaW1hdGlvbiA6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbmltYXRpbmcgOiBmYWxzZSBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dQYWdlcyhldmVudCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmFuaW1hdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dQYWdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucnVuQW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaGlkZVBhZ2VzKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmFuaW1hdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJ1bkFuaW1hdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFuaW1hdGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93UGFnZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuaG9tZVBhZ2UgPyAnaGVhZGVyIGhhc0Jhbm5lcicgOiAnaGVhZGVyJ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluZSc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudUljb24nIG9uTW91c2VFbnRlcj17dGhpcy5zaG93UGFnZXMuYmluZCh0aGlzKX0gb25DbGljaz17dGhpcy5zdGF0ZS5zaG93UGFnZXMgPyB0aGlzLmhpZGVQYWdlcy5iaW5kKHRoaXMpIDogdGhpcy5zaG93UGFnZXMuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuL3N0YXRpYy9oYWlodWlMb2dvLnBuZycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IE1lbnUgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjQwXCIgd2lkdGg9XCI0NlwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIGNsYXNzTmFtZT1cImJsaWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNDlcIiBjeT1cIjQ3XCIgZmlsbD1cIm5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBoZWlnaHQ9XCIyMHB4XCIgd2lkdGg9XCIyMHB4XCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNob3dQYWdlcyA/ICdleHBhbmRlIHNob3cnIDogICdleHBhbmRlIGhpZGUnfSB2aWV3Qm94PScwIDAgMTAwIDEwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNob3dQYWdlcyA/ICdwYWdlcyBzaG93JyA6ICAncGFnZXMnfSBvbk1vdXNlTGVhdmU9e3RoaXMuaGlkZVBhZ2VzLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydQaG90by12aWRlbycsICdQcmludCcsICdQZXJzb25hbGl6YXJpJywgJ0NvbnRhY3QnXS5tYXAoKGNvbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnJ1bkFuaW1hdGlvbiA/ICdwYWdlIHNob3cnIDogICdwYWdlIGhpZGUnfSBzdHlsZT17e2FuaW1hdGlvbkRlbGF5OiBgLiR7aX1zYH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2AuL3N0YXRpYy9oZWFkZXJJY29ucy8ke2NvbH0ucG5nYH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHtjb2x9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Lyoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyU3RydWN0dXJlLm1hcChwYWdlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhZ2UubmFtZX0gY2xhc3NOYW1lPSdwYWdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7IHBhZ2UubmFtZSB9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnLi9zdGF0aWMvJyArIHBhZ2UubmFtZSArICcucG5nJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9ICovfVxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxue1xyXG5gZGl2LmhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5kaXYuaGVhZGVyLmhhc0Jhbm5lciB7XHJcbiAgICB0b3A6IDMwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGRpdi5oZWFkZXIuaGFzQmFubmVyIHtcclxuICAgICAgICB0b3A6IDIwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXYubGluZSB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjQwJTtcclxuICAgIGJhY2tncm91bmQ6JHtjc3Muc2t5fTtcclxuICAgIC8vIHotSW5kZXg6LTE7XHJcbiAgICBcclxufVxyXG5cclxuZGl2LmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5kaXYubWVudUljb24ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG5kaXYubWVudUljb24gaW1nIHsgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmRpdi5tZW51SWNvbiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbiA6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0IDogYm9sZDtcclxuICAgIGNvbG9yIDogJHtjc3MuZ3JleX1cclxufVxyXG5cclxuc3ZnLmJsaWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5jayB7XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHN0cm9rZS13aWR0aDogMTU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwO1xyXG4gICAgICAgIHIgOiA0MDtcclxuICAgICAgICBzdHJva2UtZGFzaGFycmF5IDogMTM7IFxyXG4gICAgfVxyXG59XHJcblxyXG5zdmcuYmxpY2sgY2lyY2xlIHtcclxuICAgIHN0cm9rZS13aWR0aDogMDtcclxuICAgIHI6IDY7XHJcbiAgICBzdHJva2UgOiAke2Nzcy5ncmV5fTtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXkgOiAxMztcclxufVxyXG5cclxuZGl2Lm1lbnVJY29uOmhvdmVyIHN2Zy5ibGljayBjaXJjbGUge1xyXG4gICAgYW5pbWF0aW9uOiBibGluY2sgMXMgZWFzZTtcclxufVxyXG5cclxuZGl2LnBhZ2VzIHtcclxuICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLy8gZGl2LnBhZ2VzIGRpdi5wYWdlIHtcclxuLy8gICAgIG9wYWNpdHk6IDA7XHJcbi8vIH1cclxuXHJcbmRpdi5wYWdlcy5zaG93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vLyBkaXYucGFnZXMuc2hvdyBkaXYucGFnZSB7XHJcbi8vICAgICBvcGFjaXR5OiAwO1xyXG4vLyB9XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW4gOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAke2Nzcy5za3l9O1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICBcclxufVxyXG5cclxubGk6IGhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbn1cclxuXHJcblxyXG5kaXYucGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAke2Nzcy5za3l9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBcclxuICAgIC8vdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNob3cge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGhpZGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcclxuICAgIH1cclxufVxyXG5cclxuZGl2LnBhZ2Uuc2hvdyB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgICBhbmltYXRpb246IHNob3cgMC41cyBlYXNlIGZvcndhcmRzO1xyXG59XHJcblxyXG5kaXYucGFnZS5oaWRlIHtcclxuICAgIG9wYWNpdHk6MTtcclxuICAgIGFuaW1hdGlvbjogaGlkZSAwLjVzIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmEgaW1nIHtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y3NzLmdyZXl9O1xyXG4gICAgJHtjc3MuY2VudGVyfTsgICAgXHJcbn1cclxuXHJcbmEgcCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4gOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuYSBkaXYge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2Nzcy5ncmV5fTtcclxufVxyXG5cclxuc3ZnLmV4cGFuZGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbnN2Zy5leHBhbmRlIHBhdGgge1xyXG4gICAgc3Ryb2tlOiAke2Nzcy5ncmV5fTtcclxuICAgIHN0cm9rZS13aWR0aDogOTtcclxuICAgIGZpbGw6bm9uZTtcclxuICAgIHN0cm9rZS1saW5lam9pbiA6IHJvdW5kO1xyXG4gICAgc3Ryb2tlLWxpbmVjYXAgOiByb3VuZDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuXHJcbiAgICBkIDogcGF0aChcIk0xMCwxMCBMNzAsNTAgTDEwLDkwIEwxMCwxMFwiKTsgXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZXhwYW5kZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgZCA6IHBhdGgoXCJNMTAsMTAgTDcwLDUwIEwxMCw5MCBMMTAsMTBcIik7IFxyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgZCA6IHBhdGgoXCJNMTAsMTAgTDgwLDEwIEwxMCwxMCBMMTAsMTBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgZmlsbDogJHtjc3MuZ3JleX07XHJcbiAgICAgICAgZCA6IHBhdGgoXCJNMTAsMjAgTDkwLDIwIEw1MCw4MCBMMTAsMjBcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZGV4cGFuZGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGZpbGw6ICR7Y3NzLmdyZXl9O1xyXG4gICAgICAgIGQgOiBwYXRoKFwiTTEwLDIwIEw5MCwyMCBMNTAsODAgTDEwLDIwXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICA1MCUge1xyXG4gICAgICAgIGQgOiBwYXRoKFwiTTEwLDEwIEwxMCw4MCBMMTAsMTAgTDEwLDEwXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBmaWxsOiBub25lO1xyXG4gICAgICAgIGQgOiBwYXRoKFwiTTEwLDEwIEw3MCw1MCBMMTAsOTAgTDEwLDEwXCIpOyBcclxuICAgIH1cclxufVxyXG5cclxuc3ZnLmV4cGFuZGUuc2hvdyBwYXRoIHtcclxuICAgIC8vZCA6IHBhdGgoXCJNMTAsMjAgTDkwLDIwIEw1MCw4MCBMMTAsMjAgTDkwLDIwXCIpO1xyXG5cclxuICAgIGFuaW1hdGlvbjogZXhwYW5kZSAuNXMgZWFzZSBmb3J3YXJkcztcclxufVxyXG5cclxuc3ZnLmV4cGFuZGUuaGlkZSBwYXRoIHtcclxuICAgIC8vZCA6IHBhdGgoXCJNMTAsMjAgTDkwLDIwIEw1MCw4MCBMMTAsMjAgTDkwLDIwXCIpO1xyXG5cclxuICAgIGFuaW1hdGlvbjogZGV4cGFuZGUgLjVzIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuYFxyXG59XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=componentsHeader.js */'
            }));
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;