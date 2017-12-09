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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\nodejs\\next-ahh\\components\\Header.js';

// import { setTimeout } from 'timers';

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
                setTimeout(function () {
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
                setTimeout(function () {
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

            return _react2.default.createElement('div', { className: this.props.homePage ? 'header hasBanner' : 'header', 'data-jsx': 799191275,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('div', { className: 'line', 'data-jsx': 799191275,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }), _react2.default.createElement('div', { className: 'container', 'data-jsx': 799191275,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('div', { className: 'menuIcon', onMouseEnter: this.showPages.bind(this), onClick: this.state.showPages ? this.hidePages.bind(this) : this.showPages.bind(this), 'data-jsx': 799191275,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('img', { src: './static/haihuiLogo.png', 'data-jsx': 799191275,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }), _react2.default.createElement('p', {
                'data-jsx': 799191275,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, ' Menu '), _react2.default.createElement('svg', { height: '40', width: '46', viewBox: '0 0 100 100', className: 'blick', 'data-jsx': 799191275,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('circle', { cx: '49', cy: '47', fill: 'none', 'data-jsx': 799191275,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            })), _react2.default.createElement('svg', { height: '20px', width: '20px', className: this.state.showPages ? 'expande show' : 'expande hide', viewBox: '0 0 100 100', 'data-jsx': 799191275,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('path', {
                'data-jsx': 799191275,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }))), _react2.default.createElement('div', { className: this.state.showPages ? 'pages show' : 'pages', onMouseLeave: this.hidePages.bind(this), 'data-jsx': 799191275,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('ul', {
                'data-jsx': 799191275,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, ['Photo-video', 'Print', 'Personalizari', 'Contact'].map(function (col, i) {
                return _react2.default.createElement('li', { key: i, 'data-jsx': 799191275,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    }
                }, _react2.default.createElement('div', { className: _this4.state.runAnimation ? 'page show' : 'page hide', style: { animationDelay: '.' + i + 's' }, 'data-jsx': 799191275,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                    }
                }, _react2.default.createElement('a', {
                    'data-jsx': 799191275,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }, _react2.default.createElement('div', {
                    'data-jsx': 799191275,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }, _react2.default.createElement('img', { src: './static/headerIcons/' + col + '.png', 'data-jsx': 799191275,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                })), _react2.default.createElement('p', {
                    'data-jsx': 799191275,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    }
                }, ' ', col, ' '))));
            })))), _react2.default.createElement(_style2.default, {
                styleId: 799191275,
                css: 'div.header[data-jsx="799191275"]{position:absolute;top:0;left:0;width:calc(100% - 20px);height:40px;padding:10px;z-index:1}div.header.hasBanner[data-jsx="799191275"]{top:289px}@media (max-width:600px){div.header.hasBanner[data-jsx="799191275"]{top:200px}}div.line[data-jsx="799191275"]{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:0;width:100%;height:40%;background:' + _utils2.default.sky + '}div.container[data-jsx="799191275"]{max-width:1000px;width:100%;height:100%;margin:auto}div.menuIcon[data-jsx="799191275"]{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;cursor:default}div.menuIcon[data-jsx="799191275"] img[data-jsx="799191275"]{height:100%}div.menuIcon[data-jsx="799191275"] p[data-jsx="799191275"]{font-size:20px;margin:5px;font-weight:bold;color:' + _utils2.default.grey + '}svg.blick[data-jsx="799191275"]{position:absolute;top:0;left:0}@-webkit-keyframes blinckdatajsx799191275{50%{stroke-width:15}100%{stroke-width:0;r:40;stroke-dasharray:13}}@keyframes blinckdatajsx799191275{50%{stroke-width:15}100%{stroke-width:0;r:40;stroke-dasharray:13}}svg.blick[data-jsx="799191275"] circle[data-jsx="799191275"]{stroke-width:0;r:6;stroke:' + _utils2.default.grey + ';stroke-dasharray:13}div.menuIcon[data-jsx="799191275"]:hover svg.blick[data-jsx="799191275"] circle[data-jsx="799191275"]{-webkit-animation:blinckdatajsx799191275 1s ease;animation:blinckdatajsx799191275 1s ease}div.pages[data-jsx="799191275"]{display:none}div.pages.show[data-jsx="799191275"]{display:block}ul[data-jsx="799191275"]{list-style-type:none;margin:0;padding:0;padding-top:5px;margin-left:5px}li[data-jsx="799191275"]{opacity:0.9;margin-bottom:4px;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);box-shadow:1px 1px 1px rgba(0,0,0,0);border-radius:25px;-webkit-transition:all .2s ease;transition:all .2s ease}li[data-jsx="799191275"]:hover[data-jsx="799191275"]{opacity:1;box-shadow:1px 1px 1px rgba(0,0,0,.3);-webkit-transform:scale(1.01);-ms-transform:scale(1.01);transform:scale(1.01)}@media (max-width:600px){li[data-jsx="799191275"]{opacity:1;box-shadow:1px 1px 1px rgba(0,0,0,.3)}}div.page[data-jsx="799191275"]{background:' + _utils2.default.sky + ';border-radius:25px;opacity:0}@-webkit-keyframes showdatajsx799191275{0%{opacity:0;-webkit-transform:translateY(15px);-ms-transform:translateY(15px);transform:translateY(15px)}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px)}}@keyframes showdatajsx799191275{0%{opacity:0;-webkit-transform:translateY(15px);-ms-transform:translateY(15px);transform:translateY(15px)}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px)}}@-webkit-keyframes hidedatajsx799191275{0%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px)}100%{opacity:0;-webkit-transform:translateY(-15px);-ms-transform:translateY(-15px);transform:translateY(-15px)}}@keyframes hidedatajsx799191275{0%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px)}100%{opacity:0;-webkit-transform:translateY(-15px);-ms-transform:translateY(-15px);transform:translateY(-15px)}}div.page.show[data-jsx="799191275"]{opacity:0;-webkit-animation:showdatajsx799191275 0.5s ease forwards;animation:showdatajsx799191275 0.5s ease forwards}div.page.hide[data-jsx="799191275"]{opacity:1;-webkit-animation:hidedatajsx799191275 0.5s ease forwards;animation:hidedatajsx799191275 0.5s ease forwards}a[data-jsx="799191275"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}a[data-jsx="799191275"] img[data-jsx="799191275"]{height:18px;background-color:' + _utils2.default.grey + ';' + _utils2.default.center + '}a[data-jsx="799191275"] p[data-jsx="799191275"]{font-size:15px;margin:0;margin-left:5px;cursor:default}a[data-jsx="799191275"] div[data-jsx="799191275"]{height:35px;width:35px;position:relative;border-radius:25px;background-color:' + _utils2.default.grey + '}svg.expande[data-jsx="799191275"]{margin-left:auto}svg.expande[data-jsx="799191275"] path[data-jsx="799191275"]{stroke:' + _utils2.default.grey + ';stroke-width:9;fill:none;stroke-linejoin:round;stroke-linecap:round;-webkit-transition:all .2s ease;transition:all .2s ease;d:path("M10,10 L70,50 L10,90 L10,10")}@-webkit-keyframes expandedatajsx799191275{0%{d:path("M10,10 L70,50 L10,90 L10,10")}50%{d:path("M10,10 L80,10 L10,10 L10,10")}100%{fill:' + _utils2.default.grey + ';d:path("M10,20 L90,20 L50,80 L10,20")}}@keyframes expandedatajsx799191275{0%{d:path("M10,10 L70,50 L10,90 L10,10")}50%{d:path("M10,10 L80,10 L10,10 L10,10")}100%{fill:' + _utils2.default.grey + ';d:path("M10,20 L90,20 L50,80 L10,20")}}@-webkit-keyframes dexpandedatajsx799191275{0%{fill:' + _utils2.default.grey + ';d:path("M10,20 L90,20 L50,80 L10,20")}50%{d:path("M10,10 L10,80 L10,10 L10,10")}100%{fill:none;d:path("M10,10 L70,50 L10,90 L10,10")}}@keyframes dexpandedatajsx799191275{0%{fill:' + _utils2.default.grey + ';d:path("M10,20 L90,20 L50,80 L10,20")}50%{d:path("M10,10 L10,80 L10,10 L10,10")}100%{fill:none;d:path("M10,10 L70,50 L10,90 L10,10")}}svg.expande.show[data-jsx="799191275"] path[data-jsx="799191275"]{-webkit-animation:expandedatajsx799191275 .5s ease forwards;animation:expandedatajsx799191275 .5s ease forwards}svg.expande.hide[data-jsx="799191275"] path[data-jsx="799191275"]{-webkit-animation:dexpandedatajsx799191275 .5s ease forwards;animation:dexpandedatajsx799191275 .5s ease forwards}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRkEsQUFHc0IsQUFZUCxBQVFJLEFBT0csQUFZQSxBQVNMLEFBVUEsQUFNRyxBQVNHLEFBWUUsQUFRRCxBQVVKLEFBU1UsQUFNYixBQU1FLEFBTU8sQUFVVCxBQWFGLEFBWUksQUFRMEIsQUFVMUIsQUFPQSxBQVVBLEFBT0EsQUFRTCxBQU9BLEFBT0ksQUFPRCxBQVNHLEFBU0gsQUFZSyxBQU1tQixBQWlCTyxBQU9BLEFBTUwsQUFVQSxBQU9LLEFBTTdCLEFBU3NCLEFBTUMsVUE1SEgsQUFPQSxDQWxOdEMsQUFRSSxBQXFJc0MsQUFZSSxBQWtCWCxBQU9ELEFBVUEsQUFPRSxBQXNIVyxFQXJSOUIsQUFVakIsQUFrRnNCLEFBZ0c0QixBQWtCbkMsQ0F4SWYsQ0FNQSxDQTVEZ0IsQUE2QkYsQUFVTixBQThJTSxDQTlKVixDQXZGTSxBQTJCQyxBQVlJLEFBbU9mLENBak1VLEVBK0IrQixDQTBCM0IsQ0FwQ2UsRUE3RmxCLEFBOFBXLENBbk9TLEFBOENwQixDQTRLUyxFQXJMRSxDQXpCTixFQXFHTyxDQTNJSyxBQWlJZCxDQXhEZCxDQW1PK0MsQUFVQSxFQXhDNUIsR0FrQmYsQUFNQSxBQXVCQSxDQWxKbUIsRUFwSVAsQ0EyRkksQUFtSEQsQUFTSSxDQWhLbkIsR0E3QkosRUF1RjBCLEFBWXRCLENBaUtBLEVBdERTLEdBdk9iLEVBdkNnQixDQXNHUyxDQW9JTyxBQVdoQyxDQW5Ib0IsQUF5Q04sRUFvR2EsQ0FmdUIsT0EvUGpDLENBMktqQixHQWdJSSxBQVVBLEdBbkxKLEFBK0Z1QixHQTNIdkIsSUFyR2MsQUE4RGIsRUFnTnlCLEVBcEMxQixDQS9IQSxDQS9Ed0IsS0EzQ3hCLFFBd0l5QyxBQWlEckMsQUFVQSxHQWpCQSxHQXdCQSxBQW9Fd0IsQ0FoQjVCLENBMEVBLEVBTUEsSUE1SEEsQUFPQSxJQWxNVSxPQUNJLEVBNkhkLFNBNUhjLEVBZ0hTLFNBL0dvQixXQWtIZixNQXFJZSxPQWpEM0MsZ0JBck1BLENBaUJzQixnQkF1T3RCLEdBdE9tQixTQWdHbkIsT0EvRkEiLCJmaWxlIjoiY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlUm9vdCI6IkY6L25vZGVqcy9uZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjc3MgZnJvbSAnLi4vY3NzL3V0aWxzJztcclxuLy8gaW1wb3J0IHsgc2V0VGltZW91dCB9IGZyb20gJ3RpbWVycyc7XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvd1BhZ2VzIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHJ1bkFuaW1hdGlvbiA6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbmltYXRpbmcgOiBmYWxzZSBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dQYWdlcyhldmVudCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmFuaW1hdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dQYWdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucnVuQW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaGlkZVBhZ2VzKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmFuaW1hdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJ1bkFuaW1hdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFuaW1hdGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93UGFnZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuaG9tZVBhZ2UgPyAnaGVhZGVyIGhhc0Jhbm5lcicgOiAnaGVhZGVyJ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluZSc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudUljb24nIG9uTW91c2VFbnRlcj17dGhpcy5zaG93UGFnZXMuYmluZCh0aGlzKX0gb25DbGljaz17dGhpcy5zdGF0ZS5zaG93UGFnZXMgPyB0aGlzLmhpZGVQYWdlcy5iaW5kKHRoaXMpIDogdGhpcy5zaG93UGFnZXMuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuL3N0YXRpYy9oYWlodWlMb2dvLnBuZycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IE1lbnUgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjQwXCIgd2lkdGg9XCI0NlwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIGNsYXNzTmFtZT1cImJsaWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNDlcIiBjeT1cIjQ3XCIgZmlsbD1cIm5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBoZWlnaHQ9XCIyMHB4XCIgd2lkdGg9XCIyMHB4XCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNob3dQYWdlcyA/ICdleHBhbmRlIHNob3cnIDogICdleHBhbmRlIGhpZGUnfSB2aWV3Qm94PScwIDAgMTAwIDEwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNob3dQYWdlcyA/ICdwYWdlcyBzaG93JyA6ICAncGFnZXMnfSBvbk1vdXNlTGVhdmU9e3RoaXMuaGlkZVBhZ2VzLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydQaG90by12aWRlbycsICdQcmludCcsICdQZXJzb25hbGl6YXJpJywgJ0NvbnRhY3QnXS5tYXAoKGNvbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnJ1bkFuaW1hdGlvbiA/ICdwYWdlIHNob3cnIDogICdwYWdlIGhpZGUnfSBzdHlsZT17e2FuaW1hdGlvbkRlbGF5OiBgLiR7aX1zYH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2AuL3N0YXRpYy9oZWFkZXJJY29ucy8ke2NvbH0ucG5nYH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHtjb2x9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Lyoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyU3RydWN0dXJlLm1hcChwYWdlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhZ2UubmFtZX0gY2xhc3NOYW1lPSdwYWdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7IHBhZ2UubmFtZSB9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnLi9zdGF0aWMvJyArIHBhZ2UubmFtZSArICcucG5nJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9ICovfVxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxue1xyXG5gZGl2LmhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuZGl2LmhlYWRlci5oYXNCYW5uZXIge1xyXG4gICAgdG9wOiAyODlweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBkaXYuaGVhZGVyLmhhc0Jhbm5lciB7XHJcbiAgICAgICAgdG9wOiAyMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuZGl2LmxpbmUge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6NTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgbGVmdDowO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDo0MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiR7Y3NzLnNreX07XHJcbn1cclxuXHJcbmRpdi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuZGl2Lm1lbnVJY29uIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuZGl2Lm1lbnVJY29uIGltZyB7IFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5kaXYubWVudUljb24gcCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4gOiA1cHg7XHJcbiAgICBmb250LXdlaWdodCA6IGJvbGQ7XHJcbiAgICBjb2xvciA6ICR7Y3NzLmdyZXl9XHJcbn1cclxuXHJcbnN2Zy5ibGljayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBibGluY2sge1xyXG4gICAgNTAlIHtcclxuICAgICAgICBzdHJva2Utd2lkdGg6IDE1O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHN0cm9rZS13aWR0aDogMDtcclxuICAgICAgICByIDogNDA7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheSA6IDEzOyBcclxuICAgIH1cclxufVxyXG5cclxuc3ZnLmJsaWNrIGNpcmNsZSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDA7XHJcbiAgICByOiA2O1xyXG4gICAgc3Ryb2tlIDogJHtjc3MuZ3JleX07XHJcbiAgICBzdHJva2UtZGFzaGFycmF5IDogMTM7XHJcbn1cclxuXHJcbmRpdi5tZW51SWNvbjpob3ZlciBzdmcuYmxpY2sgY2lyY2xlIHtcclxuICAgIGFuaW1hdGlvbjogYmxpbmNrIDFzIGVhc2U7XHJcbn1cclxuXHJcbmRpdi5wYWdlcyB7XHJcbiAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmRpdi5wYWdlcy5zaG93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW4gOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxufVxyXG5cclxubGk6IGhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGxpIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsLjMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXYucGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAke2Nzcy5za3l9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvdyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaGlkZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXYucGFnZS5zaG93IHtcclxuICAgIG9wYWNpdHk6MDtcclxuICAgIGFuaW1hdGlvbjogc2hvdyAwLjVzIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuXHJcbmRpdi5wYWdlLmhpZGUge1xyXG4gICAgb3BhY2l0eToxO1xyXG4gICAgYW5pbWF0aW9uOiBoaWRlIDAuNXMgZWFzZSBmb3J3YXJkcztcclxufVxyXG5cclxuYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYSBpbWcge1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjc3MuZ3JleX07XHJcbiAgICAke2Nzcy5jZW50ZXJ9OyAgICBcclxufVxyXG5cclxuYSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbiA6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG5hIGRpdiB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjc3MuZ3JleX07XHJcbn1cclxuXHJcbnN2Zy5leHBhbmRlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5zdmcuZXhwYW5kZSBwYXRoIHtcclxuICAgIHN0cm9rZTogJHtjc3MuZ3JleX07XHJcbiAgICBzdHJva2Utd2lkdGg6IDk7XHJcbiAgICBmaWxsOm5vbmU7XHJcbiAgICBzdHJva2UtbGluZWpvaW4gOiByb3VuZDtcclxuICAgIHN0cm9rZS1saW5lY2FwIDogcm91bmQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcblxyXG4gICAgZCA6IHBhdGgoXCJNMTAsMTAgTDcwLDUwIEwxMCw5MCBMMTAsMTBcIik7IFxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGV4cGFuZGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGQgOiBwYXRoKFwiTTEwLDEwIEw3MCw1MCBMMTAsOTAgTDEwLDEwXCIpOyBcclxuICAgIH1cclxuXHJcbiAgICA1MCUge1xyXG4gICAgICAgIGQgOiBwYXRoKFwiTTEwLDEwIEw4MCwxMCBMMTAsMTAgTDEwLDEwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGZpbGw6ICR7Y3NzLmdyZXl9O1xyXG4gICAgICAgIGQgOiBwYXRoKFwiTTEwLDIwIEw5MCwyMCBMNTAsODAgTDEwLDIwXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGRleHBhbmRlIHtcclxuICAgIDAlIHtcclxuICAgICAgICBmaWxsOiAke2Nzcy5ncmV5fTtcclxuICAgICAgICBkIDogcGF0aChcIk0xMCwyMCBMOTAsMjAgTDUwLDgwIEwxMCwyMFwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgNTAlIHtcclxuICAgICAgICBkIDogcGF0aChcIk0xMCwxMCBMMTAsODAgTDEwLDEwIEwxMCwxMFwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgZmlsbDogbm9uZTtcclxuICAgICAgICBkIDogcGF0aChcIk0xMCwxMCBMNzAsNTAgTDEwLDkwIEwxMCwxMFwiKTsgXHJcbiAgICB9XHJcbn1cclxuXHJcbnN2Zy5leHBhbmRlLnNob3cgcGF0aCB7XHJcbiAgICBhbmltYXRpb246IGV4cGFuZGUgLjVzIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuXHJcbnN2Zy5leHBhbmRlLmhpZGUgcGF0aCB7XHJcbiAgICBhbmltYXRpb246IGRleHBhbmRlIC41cyBlYXNlIGZvcndhcmRzO1xyXG59XHJcbmBcclxufVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=componentsHeader.js */'
            }));
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;