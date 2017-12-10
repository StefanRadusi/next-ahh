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

var _jsxFileName = 'D:\\programming\\nodejs\\heroku\\next-ahh\\components\\Header.js';

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

            return _react2.default.createElement('div', { className: this.props.homePage ? 'header hasBanner' : 'header', 'data-jsx': 622961438,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('div', { className: 'line', 'data-jsx': 622961438,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }), _react2.default.createElement('div', { className: 'container', 'data-jsx': 622961438,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('div', { className: 'menuIcon', onMouseEnter: this.showPages.bind(this), onClick: this.state.showPages ? this.hidePages.bind(this) : this.showPages.bind(this), 'data-jsx': 622961438,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('img', { src: './static/haihuiLogo.png', 'data-jsx': 622961438,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }), _react2.default.createElement('p', {
                'data-jsx': 622961438,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, ' Menu '), _react2.default.createElement('svg', { height: '40', width: '46', viewBox: '0 0 100 100', className: 'blick', 'data-jsx': 622961438,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('circle', { cx: '49', cy: '47', fill: 'none', 'data-jsx': 622961438,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            })), _react2.default.createElement('svg', { height: '20px', width: '20px', className: this.state.showPages ? 'expande show' : 'expande hide', viewBox: '0 0 100 100', 'data-jsx': 622961438,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('path', {
                'data-jsx': 622961438,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }))), _react2.default.createElement('div', { className: this.state.showPages ? 'pages show' : 'pages', onMouseLeave: this.hidePages.bind(this), 'data-jsx': 622961438,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('ul', {
                'data-jsx': 622961438,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, ['Photo-video', 'Print', 'Personalizari', 'Contact'].map(function (col, i) {
                return _react2.default.createElement('li', { key: i, 'data-jsx': 622961438,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    }
                }, _react2.default.createElement('div', { className: _this4.state.runAnimation ? 'page show' : 'page hide', style: { animationDelay: '.' + i + 's' }, 'data-jsx': 622961438,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                    }
                }, _react2.default.createElement('a', {
                    'data-jsx': 622961438,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }, _react2.default.createElement('div', {
                    'data-jsx': 622961438,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }, _react2.default.createElement('img', { src: './static/headerIcons/' + col + '.png', 'data-jsx': 622961438,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                })), _react2.default.createElement('p', {
                    'data-jsx': 622961438,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    }
                }, ' ', col, ' '))));
            })))), _react2.default.createElement(_style2.default, {
                styleId: 622961438,
                css: 'div.header[data-jsx="622961438"]{position:absolute;top:0;left:0;width:calc(100% - 20px);height:40px;padding:10px;z-index:1}div.header.hasBanner[data-jsx="622961438"]{top:289px}@media (max-width:600px){div.header.hasBanner[data-jsx="622961438"]{top:200px}}div.line[data-jsx="622961438"]{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:0;width:100%;height:40%;background:' + _utils2.default.sky + '}div.container[data-jsx="622961438"]{max-width:1000px;width:100%;height:100%;margin:auto}div.menuIcon[data-jsx="622961438"]{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;cursor:default}div.menuIcon[data-jsx="622961438"] img[data-jsx="622961438"]{height:100%}div.menuIcon[data-jsx="622961438"] p[data-jsx="622961438"]{font-size:20px;margin:5px;font-weight:bold;color:' + _utils2.default.grey + '}svg.blick[data-jsx="622961438"]{position:absolute;top:0;left:0}@-webkit-keyframes blinckdatajsx622961438{50%{stroke-width:15}100%{stroke-width:0;r:40;strokeDasharray:13}}@keyframes blinckdatajsx622961438{50%{stroke-width:15}100%{stroke-width:0;r:40;strokeDasharray:13}}svg.blick[data-jsx="622961438"] circle[data-jsx="622961438"]{stroke-width:0;r:6;stroke:' + _utils2.default.grey + ';strokeDasharray:13}div.menuIcon[data-jsx="622961438"]:hover svg.blick[data-jsx="622961438"] circle[data-jsx="622961438"]{-webkit-animation:blinckdatajsx622961438 1s ease;animation:blinckdatajsx622961438 1s ease}div.pages[data-jsx="622961438"]{display:none}div.pages.show[data-jsx="622961438"]{display:block}ul[data-jsx="622961438"]{list-style-type:none;margin:0;padding:0;padding-top:5px;margin-left:5px}li[data-jsx="622961438"]{opacity:0.9;margin-bottom:4px;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);box-shadow:1px 1px 1px rgba(0,0,0,0);border-radius:25px;-webkit-transition:all .2s ease;transition:all .2s ease}li[data-jsx="622961438"]:hover[data-jsx="622961438"]{opacity:1;box-shadow:1px 1px 1px rgba(0,0,0,.3);-webkit-transform:scale(1.01);-ms-transform:scale(1.01);transform:scale(1.01)}@media (max-width:600px){li[data-jsx="622961438"]{opacity:1;box-shadow:1px 1px 1px rgba(0,0,0,0)}div.page.show[data-jsx="622961438"] li[data-jsx="622961438"]{box-shadow:1px 1px 1px rgba(0,0,0,.3)}}div.page[data-jsx="622961438"]{background:' + _utils2.default.sky + ';border-radius:25px;opacity:0}@-webkit-keyframes showdatajsx622961438{0%{box-shadow:1px 1px 1px rgba(0,0,0,0);opacity:0;-webkit-transform:translateY(15px);-ms-transform:translateY(15px);transform:translateY(15px)}100%{box-shadow:1px 1px 1px rgba(0,0,0,.3);opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px)}}@keyframes showdatajsx622961438{0%{box-shadow:1px 1px 1px rgba(0,0,0,0);opacity:0;-webkit-transform:translateY(15px);-ms-transform:translateY(15px);transform:translateY(15px)}100%{box-shadow:1px 1px 1px rgba(0,0,0,.3);opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px)}}@-webkit-keyframes hidedatajsx622961438{0%{box-shadow:1px 1px 1px rgba(0,0,0,.3);opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px)}100%{box-shadow:1px 1px 1px rgba(0,0,0,0);opacity:0;-webkit-transform:translateY(-15px);-ms-transform:translateY(-15px);transform:translateY(-15px)}}@keyframes hidedatajsx622961438{0%{box-shadow:1px 1px 1px rgba(0,0,0,.3);opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px)}100%{box-shadow:1px 1px 1px rgba(0,0,0,0);opacity:0;-webkit-transform:translateY(-15px);-ms-transform:translateY(-15px);transform:translateY(-15px)}}div.page.show[data-jsx="622961438"]{opacity:0;-webkit-animation:showdatajsx622961438 0.5s ease forwards;animation:showdatajsx622961438 0.5s ease forwards}div.page.hide[data-jsx="622961438"]{opacity:1;-webkit-animation:hidedatajsx622961438 0.5s ease forwards;animation:hidedatajsx622961438 0.5s ease forwards}a[data-jsx="622961438"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}a[data-jsx="622961438"] img[data-jsx="622961438"]{height:18px;background-color:' + _utils2.default.grey + ';' + _utils2.default.center + '}a[data-jsx="622961438"] p[data-jsx="622961438"]{font-size:15px;margin:0;margin-left:5px;cursor:default}a[data-jsx="622961438"] div[data-jsx="622961438"]{height:35px;width:35px;position:relative;border-radius:25px;background-color:' + _utils2.default.grey + '}svg.expande[data-jsx="622961438"]{margin-left:auto}svg.expande[data-jsx="622961438"] path[data-jsx="622961438"]{stroke:' + _utils2.default.grey + ';stroke-width:9;fill:none;stroke-linejoin:round;stroke-linecap:round;-webkit-transition:all .2s ease;transition:all .2s ease;d:path("M10,10 L70,50 L10,90 L10,10")}@-webkit-keyframes expandedatajsx622961438{0%{d:path("M10,10 L70,50 L10,90 L10,10")}50%{d:path("M10,10 L80,10 L10,10 L10,10")}100%{fill:' + _utils2.default.grey + ';d:path("M10,20 L90,20 L50,80 L10,20")}}@keyframes expandedatajsx622961438{0%{d:path("M10,10 L70,50 L10,90 L10,10")}50%{d:path("M10,10 L80,10 L10,10 L10,10")}100%{fill:' + _utils2.default.grey + ';d:path("M10,20 L90,20 L50,80 L10,20")}}@-webkit-keyframes dexpandedatajsx622961438{0%{fill:' + _utils2.default.grey + ';d:path("M10,20 L90,20 L50,80 L10,20")}50%{d:path("M10,10 L10,80 L10,10 L10,10")}100%{fill:none;d:path("M10,10 L70,50 L10,90 L10,10")}}@keyframes dexpandedatajsx622961438{0%{fill:' + _utils2.default.grey + ';d:path("M10,20 L90,20 L50,80 L10,20")}50%{d:path("M10,10 L10,80 L10,10 L10,10")}100%{fill:none;d:path("M10,10 L70,50 L10,90 L10,10")}}svg.expande.show[data-jsx="622961438"] path[data-jsx="622961438"]{-webkit-animation:expandedatajsx622961438 .5s ease forwards;animation:expandedatajsx622961438 .5s ease forwards}svg.expande.hide[data-jsx="622961438"] path[data-jsx="622961438"]{-webkit-animation:dexpandedatajsx622961438 .5s ease forwards;animation:dexpandedatajsx622961438 .5s ease forwards}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRkEsQUFHc0IsQUFZUCxBQVFJLEFBT0csQUFZQSxBQVNMLEFBVUEsQUFNRyxBQVNHLEFBWUUsQUFRRCxBQVVKLEFBU1UsQUFNYixBQU1FLEFBTU8sQUFVVCxBQWFGLEFBWUksQUFPNEIsQUFPRixBQVVDLEFBUUMsQUFXQSxBQVFELEFBU2hDLEFBT0EsQUFPSSxBQU9ELEFBU0csQUFTSCxBQVlLLEFBTW1CLEFBaUJPLEFBT0EsQUFNTCxBQVVBLEFBT0ssQUFNN0IsQUFTc0IsQUFNQyxVQTVISCxBQU9BLENBNU50QyxBQVFJLEFBcUlzQyxBQVlHLEFBMEtFLEVBL1I5QixBQVVqQixBQWtGc0IsQUEwRzRCLEFBa0JuQyxDQWxKZixDQU1BLENBNURnQixBQTZCRixBQVVOLEFBd0pNLENBeEtWLENBdkZNLEFBMkJDLEFBWUksQUE2T2YsQ0EzTVUsRUErQitCLENBMEIzQixDQXBDYyxFQTdGakIsQUF3UVcsQ0E3T1MsQUE4Q3BCLENBc0xTLEVBL0xFLENBekJOLEVBcUdPLENBM0lLLEFBaUlkLENBeERkLENBNk8rQyxBQVVBLEVBeEM1QixDQTdGRCxBQTJCQSxDQTVDZCxBQXlCYyxBQVdBLENBNEZkLEFBTUEsQUF1QkEsQ0F0Sm1CLEVBMUlQLENBdURaLEFBb0NnQixBQTZIRCxBQVNJLElBdk12QixDQW1HSSxBQXdCK0IsQUEyQkMsQ0EvRFYsQUE0Q1EsQUFXQSxDQWdJOUIsRUF0RFMsR0FqUGIsRUF2Q2dCLENBc0dRLENBOElRLEFBV2hDLENBN0hvQixBQStDTixFQXdHYSxDQWZ1QixPQXpRakMsQ0FpTGpCLEdBb0lJLEFBVUEsR0E3TEosQUF5R3VCLEVBckl2QixLQXJHYyxBQThEYixFQTBOeUIsRUFwQzFCLENBeklBLENBL0R3QixLQTNDeEIsUUF3SXlDLE1BZ0piLENBaEI1QixDQTBFQSxFQU1BLElBNUhBLEFBT0EsSUE1TVUsT0FDSSxFQTZIZCxTQTVIYyxFQWdIUyxDQXdEbkIsQUFXQSxFQW5CQSxHQTJCQSxHQTFMdUMsV0FrSGYsTUErSWUsT0FqRDNDLGdCQS9NQSxDQWlCc0IsZ0JBaVB0QixHQWhQbUIsU0FnR25CLE9BL0ZBIiwiZmlsZSI6ImNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJEOi9wcm9ncmFtbWluZy9ub2RlanMvaGVyb2t1L25leHQtYWhoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNzcyBmcm9tICcuLi9jc3MvdXRpbHMnO1xyXG4vLyBpbXBvcnQgeyBzZXRUaW1lb3V0IH0gZnJvbSAndGltZXJzJztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93UGFnZXMgOiBmYWxzZSxcclxuICAgICAgICAgICAgcnVuQW5pbWF0aW9uIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuaW1hdGluZyA6IGZhbHNlIFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1BhZ2VzKGV2ZW50KSB7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuYW5pbWF0aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1BhZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5ydW5BbmltYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFuaW1hdGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoaWRlUGFnZXMoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuYW5pbWF0aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucnVuQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dQYWdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5ob21lUGFnZSA/ICdoZWFkZXIgaGFzQmFubmVyJyA6ICdoZWFkZXInfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5lJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51SWNvbicgb25Nb3VzZUVudGVyPXt0aGlzLnNob3dQYWdlcy5iaW5kKHRoaXMpfSBvbkNsaWNrPXt0aGlzLnN0YXRlLnNob3dQYWdlcyA/IHRoaXMuaGlkZVBhZ2VzLmJpbmQodGhpcykgOiB0aGlzLnNob3dQYWdlcy5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4vc3RhdGljL2hhaWh1aUxvZ28ucG5nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gTWVudSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgaGVpZ2h0PVwiNDBcIiB3aWR0aD1cIjQ2XCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgY2xhc3NOYW1lPVwiYmxpY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI0OVwiIGN5PVwiNDdcIiBmaWxsPVwibm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjIwcHhcIiB3aWR0aD1cIjIwcHhcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2hvd1BhZ2VzID8gJ2V4cGFuZGUgc2hvdycgOiAgJ2V4cGFuZGUgaGlkZSd9IHZpZXdCb3g9JzAgMCAxMDAgMTAwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2hvd1BhZ2VzID8gJ3BhZ2VzIHNob3cnIDogICdwYWdlcyd9IG9uTW91c2VMZWF2ZT17dGhpcy5oaWRlUGFnZXMuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ1Bob3RvLXZpZGVvJywgJ1ByaW50JywgJ1BlcnNvbmFsaXphcmknLCAnQ29udGFjdCddLm1hcCgoY29sLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUucnVuQW5pbWF0aW9uID8gJ3BhZ2Ugc2hvdycgOiAgJ3BhZ2UgaGlkZSd9IHN0eWxlPXt7YW5pbWF0aW9uRGVsYXk6IGAuJHtpfXNgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YC4vc3RhdGljL2hlYWRlckljb25zLyR7Y29sfS5wbmdgfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ge2NvbH0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJTdHJ1Y3R1cmUubWFwKHBhZ2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cGFnZS5uYW1lfSBjbGFzc05hbWU9J3BhZ2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHsgcGFnZS5uYW1lIH0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycuL3N0YXRpYy8nICsgcGFnZS5uYW1lICsgJy5wbmcnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG57XHJcbmBkaXYuaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5kaXYuaGVhZGVyLmhhc0Jhbm5lciB7XHJcbiAgICB0b3A6IDI4OXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGRpdi5oZWFkZXIuaGFzQmFubmVyIHtcclxuICAgICAgICB0b3A6IDIwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXYubGluZSB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjQwJTtcclxuICAgIGJhY2tncm91bmQ6JHtjc3Muc2t5fTtcclxufVxyXG5cclxuZGl2LmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5kaXYubWVudUljb24ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG5kaXYubWVudUljb24gaW1nIHsgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmRpdi5tZW51SWNvbiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbiA6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0IDogYm9sZDtcclxuICAgIGNvbG9yIDogJHtjc3MuZ3JleX1cclxufVxyXG5cclxuc3ZnLmJsaWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5jayB7XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHN0cm9rZS13aWR0aDogMTU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwO1xyXG4gICAgICAgIHIgOiA0MDtcclxuICAgICAgICBzdHJva2VEYXNoYXJyYXkgOiAxMzsgXHJcbiAgICB9XHJcbn1cclxuXHJcbnN2Zy5ibGljayBjaXJjbGUge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwO1xyXG4gICAgcjogNjtcclxuICAgIHN0cm9rZSA6ICR7Y3NzLmdyZXl9O1xyXG4gICAgc3Ryb2tlRGFzaGFycmF5IDogMTM7XHJcbn1cclxuXHJcbmRpdi5tZW51SWNvbjpob3ZlciBzdmcuYmxpY2sgY2lyY2xlIHtcclxuICAgIGFuaW1hdGlvbjogYmxpbmNrIDFzIGVhc2U7XHJcbn1cclxuXHJcbmRpdi5wYWdlcyB7XHJcbiAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmRpdi5wYWdlcy5zaG93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW4gOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxufVxyXG5cclxubGk6IGhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGxpIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpdi5wYWdlLnNob3cgbGkge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsLjMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXYucGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAke2Nzcy5za3l9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvdyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwuMyk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBoaWRlIHtcclxuICAgIDAlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcclxuICAgIH1cclxufVxyXG5cclxuZGl2LnBhZ2Uuc2hvdyB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgICBhbmltYXRpb246IHNob3cgMC41cyBlYXNlIGZvcndhcmRzO1xyXG59XHJcblxyXG5kaXYucGFnZS5oaWRlIHtcclxuICAgIG9wYWNpdHk6MTtcclxuICAgIGFuaW1hdGlvbjogaGlkZSAwLjVzIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmEgaW1nIHtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y3NzLmdyZXl9O1xyXG4gICAgJHtjc3MuY2VudGVyfTsgICAgXHJcbn1cclxuXHJcbmEgcCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4gOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuYSBkaXYge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y3NzLmdyZXl9O1xyXG59XHJcblxyXG5zdmcuZXhwYW5kZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuc3ZnLmV4cGFuZGUgcGF0aCB7XHJcbiAgICBzdHJva2U6ICR7Y3NzLmdyZXl9O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiA5O1xyXG4gICAgZmlsbDpub25lO1xyXG4gICAgc3Ryb2tlLWxpbmVqb2luIDogcm91bmQ7XHJcbiAgICBzdHJva2UtbGluZWNhcCA6IHJvdW5kO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG5cclxuICAgIGQgOiBwYXRoKFwiTTEwLDEwIEw3MCw1MCBMMTAsOTAgTDEwLDEwXCIpOyBcclxufVxyXG5cclxuQGtleWZyYW1lcyBleHBhbmRlIHtcclxuICAgIDAlIHtcclxuICAgICAgICBkIDogcGF0aChcIk0xMCwxMCBMNzAsNTAgTDEwLDkwIEwxMCwxMFwiKTsgXHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgICBkIDogcGF0aChcIk0xMCwxMCBMODAsMTAgTDEwLDEwIEwxMCwxMFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBmaWxsOiAke2Nzcy5ncmV5fTtcclxuICAgICAgICBkIDogcGF0aChcIk0xMCwyMCBMOTAsMjAgTDUwLDgwIEwxMCwyMFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBkZXhwYW5kZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgZmlsbDogJHtjc3MuZ3JleX07XHJcbiAgICAgICAgZCA6IHBhdGgoXCJNMTAsMjAgTDkwLDIwIEw1MCw4MCBMMTAsMjBcIik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDUwJSB7XHJcbiAgICAgICAgZCA6IHBhdGgoXCJNMTAsMTAgTDEwLDgwIEwxMCwxMCBMMTAsMTBcIik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDEwMCUge1xyXG4gICAgICAgIGZpbGw6IG5vbmU7XHJcbiAgICAgICAgZCA6IHBhdGgoXCJNMTAsMTAgTDcwLDUwIEwxMCw5MCBMMTAsMTBcIik7IFxyXG4gICAgfVxyXG59XHJcblxyXG5zdmcuZXhwYW5kZS5zaG93IHBhdGgge1xyXG4gICAgYW5pbWF0aW9uOiBleHBhbmRlIC41cyBlYXNlIGZvcndhcmRzO1xyXG59XHJcblxyXG5zdmcuZXhwYW5kZS5oaWRlIHBhdGgge1xyXG4gICAgYW5pbWF0aW9uOiBkZXhwYW5kZSAuNXMgZWFzZSBmb3J3YXJkcztcclxufVxyXG5gXHJcbn1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=componentsHeader.js */'
            }));
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;