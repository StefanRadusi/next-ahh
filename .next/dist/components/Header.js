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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _utils = require('../css/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stefan.radusi/projects/haihui/next-ahh/components/Header.js';


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

            return _react2.default.createElement('div', {
                className: 'jsx-2953148587' + ' ' + ((this.props.homePage ? 'header hasBanner' : 'header') || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2953148587' + ' ' + 'line',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }), _react2.default.createElement('div', {
                className: 'jsx-2953148587' + ' ' + 'container',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('div', { onClick: this.state.showPages ? this.hidePages.bind(this) : this.showPages.bind(this), className: 'jsx-2953148587' + ' ' + 'menuIcon',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('img', { src: './static/haihuiLogo.png', className: 'jsx-2953148587',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }), _react2.default.createElement('p', {
                className: 'jsx-2953148587',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, ' Menu '), _react2.default.createElement('svg', { height: '40', width: '46', viewBox: '0 0 100 100', className: 'jsx-2953148587' + ' ' + 'blick',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('circle', { cx: '49', cy: '47', fill: 'none', className: 'jsx-2953148587',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            })), _react2.default.createElement('svg', { height: '20px', width: '20px', viewBox: '0 0 100 100', className: 'jsx-2953148587' + ' ' + ((this.state.showPages ? 'expande show' : 'expande hide') || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('path', {
                className: 'jsx-2953148587',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }))), _react2.default.createElement('div', {
                className: 'jsx-2953148587' + ' ' + ((this.state.showPages ? 'pages show' : 'pages') || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('ul', {
                className: 'jsx-2953148587',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, ['Home', 'PhotoVideo', 'Print', 'Personalizari', 'Contact'].map(function (col, i) {
                return _react2.default.createElement('li', { key: i, className: 'jsx-2953148587',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                    }
                }, _react2.default.createElement('div', { style: { animationDelay: '.' + i + 's' }, className: 'jsx-2953148587' + ' ' + ((_this4.state.runAnimation ? 'page show' : 'page hide') || ''),
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    }
                }, _react2.default.createElement(_link2.default, { href: '/' + (col == 'Home' ? '' : col.toLowerCase()), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                    }
                }, _react2.default.createElement('a', {
                    className: 'jsx-2953148587',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }, _react2.default.createElement('div', {
                    className: 'jsx-2953148587',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }, _react2.default.createElement('img', { src: './static/headerIcons/' + col + '.png', className: 'jsx-2953148587',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                })), _react2.default.createElement('p', {
                    className: 'jsx-2953148587',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    }
                }, ' ', col, ' ')))));
            })))), _react2.default.createElement(_style2.default, {
                styleId: '2953148587',
                css: 'div.header.jsx-2953148587{position:absolute;top:0;left:0;width:calc(100% - 20px);height:40px;padding:10px;z-index:1;}div.header.hasBanner.jsx-2953148587{top:289px;}@media (max-width:600px){div.header.hasBanner.jsx-2953148587{top:200px;}}div.line.jsx-2953148587{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:0;width:100%;height:40%;background:' + _utils2.default.sky + ';}div.container.jsx-2953148587{max-width:1000px;width:100%;height:100%;margin:auto;}div.menuIcon.jsx-2953148587{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;position:relative;cursor:default;}div.menuIcon.jsx-2953148587 img.jsx-2953148587{height:100%;}div.menuIcon.jsx-2953148587 p.jsx-2953148587{font-size:20px;margin :5px;font-weight :bold;color :' + _utils2.default.grey + ';}svg.blick.jsx-2953148587{position:absolute;top:0;left:0;}@-webkit-keyframes blinck-jsx-2953148587{50%{stroke-width:15;}100%{stroke-width:0;r :40;strokeDasharray :13;}}@keyframes blinck-jsx-2953148587{50%{stroke-width:15;}100%{stroke-width:0;r :40;strokeDasharray :13;}}svg.blick.jsx-2953148587 circle.jsx-2953148587{stroke-width:0;r:6;stroke :' + _utils2.default.grey + ';strokeDasharray :13;}div.menuIcon.jsx-2953148587:hover svg.blick.jsx-2953148587 circle.jsx-2953148587{-webkit-animation:blinck-jsx-2953148587 1s ease;animation:blinck-jsx-2953148587 1s ease;}div.pages.jsx-2953148587{display:none;}div.pages.show.jsx-2953148587{display:block;}ul.jsx-2953148587{list-style-type:none;margin :0;padding:0;padding-top:5px;margin-left:5px;}li.jsx-2953148587{opacity:0.9;margin-bottom:4px;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);box-shadow:1px 1px 1px rgba(0,0,0,0);border-radius:25px;-webkit-transition:all .2s ease;transition:all .2s ease;}li.jsx-2953148587:hover{opacity:1;box-shadow:1px 1px 1px rgba(0,0,0,.3);-webkit-transform:scale(1.01);-ms-transform:scale(1.01);transform:scale(1.01);}@media (max-width:600px){li.jsx-2953148587{opacity:1;box-shadow:1px 1px 1px rgba(0,0,0,0);}div.page.show.jsx-2953148587 li.jsx-2953148587{box-shadow:1px 1px 1px rgba(0,0,0,.3);}}div.page.jsx-2953148587{background:' + _utils2.default.sky + ';border-radius:25px;opacity:0;}@-webkit-keyframes show-jsx-2953148587{0%{box-shadow:1px 1px 1px rgba(0,0,0,0);opacity:0;-webkit-transform:translateY(15px);-ms-transform:translateY(15px);transform:translateY(15px);}\0 100%{box-shadow:1px 1px 1px rgba(0,0,0,.3);opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}@keyframes show-jsx-2953148587{0%{box-shadow:1px 1px 1px rgba(0,0,0,0);opacity:0;-webkit-transform:translateY(15px);-ms-transform:translateY(15px);transform:translateY(15px);}\0 100%{box-shadow:1px 1px 1px rgba(0,0,0,.3);opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}@-webkit-keyframes hide-jsx-2953148587{0%{box-shadow:1px 1px 1px rgba(0,0,0,.3);opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}\0 100%{box-shadow:1px 1px 1px rgba(0,0,0,0);opacity:0;-webkit-transform:translateY(-15px);-ms-transform:translateY(-15px);transform:translateY(-15px);}}@keyframes hide-jsx-2953148587{0%{box-shadow:1px 1px 1px rgba(0,0,0,.3);opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}\0 100%{box-shadow:1px 1px 1px rgba(0,0,0,0);opacity:0;-webkit-transform:translateY(-15px);-ms-transform:translateY(-15px);transform:translateY(-15px);}}div.page.show.jsx-2953148587{opacity:0;-webkit-animation:show-jsx-2953148587 0.5s ease forwards;animation:show-jsx-2953148587 0.5s ease forwards;}div.page.hide.jsx-2953148587{opacity:1;-webkit-animation:hide-jsx-2953148587 0.5s ease forwards;animation:hide-jsx-2953148587 0.5s ease forwards;}a.jsx-2953148587{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-decoration:none;color:' + _utils2.default.grey + ';}a.jsx-2953148587 img.jsx-2953148587{height:18px;background-color:' + _utils2.default.grey + ';' + _utils2.default.center + ';}a.jsx-2953148587 p.jsx-2953148587{font-size:15px;margin :0;margin-left:5px;cursor:default;}a.jsx-2953148587 div.jsx-2953148587{height:35px;width:35px;position:relative;border-radius:25px;background-color:' + _utils2.default.grey + ';}svg.expande.jsx-2953148587{margin-left:auto;}svg.expande.jsx-2953148587 path.jsx-2953148587{stroke:' + _utils2.default.grey + ';stroke-width:9;fill:none;stroke-linejoin :round;stroke-linecap :round;-webkit-transition:all .2s ease;transition:all .2s ease;d :path("M10,10 L70,50 L10,90 L10,10");}@-webkit-keyframes expande-jsx-2953148587{0%{d :path("M10,10 L70,50 L10,90 L10,10");}50%{d :path("M10,10 L80,10 L10,10 L10,10");}100%{fill:' + _utils2.default.grey + ';d :path("M10,20 L90,20 L50,80 L10,20");}}@keyframes expande-jsx-2953148587{0%{d :path("M10,10 L70,50 L10,90 L10,10");}50%{d :path("M10,10 L80,10 L10,10 L10,10");}100%{fill:' + _utils2.default.grey + ';d :path("M10,20 L90,20 L50,80 L10,20");}}@-webkit-keyframes dexpande-jsx-2953148587{0%{fill:' + _utils2.default.grey + ';d :path("M10,20 L90,20 L50,80 L10,20");}\0 50%{d :path("M10,10 L10,80 L10,10 L10,10");}\0 100%{fill:none;d :path("M10,10 L70,50 L10,90 L10,10");}}@keyframes dexpande-jsx-2953148587{0%{fill:' + _utils2.default.grey + ';d :path("M10,20 L90,20 L50,80 L10,20");}\0 50%{d :path("M10,10 L10,80 L10,10 L10,10");}\0 100%{fill:none;d :path("M10,10 L70,50 L10,90 L10,10");}}svg.expande.show.jsx-2953148587 path.jsx-2953148587{-webkit-animation:expande-jsx-2953148587 .5s ease forwards;animation:expande-jsx-2953148587 .5s ease forwards;}svg.expande.hide.jsx-2953148587 path.jsx-2953148587{-webkit-animation:dexpande-jsx-2953148587 .5s ease forwards;animation:dexpande-jsx-2953148587 .5s ease forwards;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVGQSxBQUVzQixBQVVQLEFBS0ksQUFLRyxBQVVBLEFBT0wsQUFRQSxBQUlHLEFBTUcsQUFRRSxBQUtELEFBT0osQUFPVSxBQUliLEFBSUUsQUFJTyxBQVFULEFBVUYsQUFRSSxBQUs0QixBQUtGLEFBT0MsQUFNQyxBQVFBLEFBTUQsQUFPaEMsQUFLQSxBQUtJLEFBTUQsQUFNRyxBQU9ILEFBU0ssQUFJbUIsQUFZTyxBQUlBLEFBSUwsQUFPQyxBQUtJLEFBSTdCLEFBTXNCLEFBSUMsVUFqUHpDLEFBS0ksQUFpR3NDLEFBUUcsQUE0Q1AsQUFLQSxBQXlFUyxFQTdNOUIsQUFRakIsQUF5RHNCLEFBOEU0QixBQWFuQyxDQTNHZixDQUlBLENBekNnQixBQW1CRixBQU9OLEFBK0dNLENBMUhWLENBbENXLEFBNEtmLENBMU1VLEFBb0JDLEFBbUNELENBcUIrQixFQVBiLEFBeUJkLEVBb0dRLENBak1YLEFBdURBLENBbUlTLENBdEtXLENBNkJULENBbkJOLEVBd0VPLENBckdLLEFBdUQ1QixBQXNDYyxHQW1JaUMsQ0FPQSxDQTNCNUIsQ0FyRUQsQUFvQkEsQ0FoQ2QsQUFrQmMsQUFRQSxDQW1FZCxBQUlBLEFBZ0JBLENBOU1ZLEFBa0dPLENBNURuQixBQTBCZ0IsQUE0RkQsQUFPSSxJQWhKaUIsRUFzRXBDLEFBaUIrQixBQW9CQyxDQTdDVixBQStCUSxBQVFBLENBMkY5QixFQXBDUyxDQTlLYixHQTlCZ0IsQ0EwRVEsQUFnSHhCLENBNUZvQixDQW9GWSxDQWxEbEIsQ0FrRW9DLENBV3ZCLE1BNU1WLEVBZ0lqQixJQWxDQSxBQWlJSSxDQXJEbUIsQUE0RG5CLEVBNUpKLElBekVjLENBOEMyQixHQThKZixFQTNLRixDQWdKeEIsQ0FwR0EsRUE1RUEsU0FrR3lDLE9BOEZ6QyxBQVk0QixJQXNDNUIsRUFJQSxJQXZGQSxBQUtBLEdBcEpVLE9BQ0ksQUEyRmQsVUFUdUIsQ0FqRlQsQ0F5SFYsQUFRQSxFQWRBLEdBb0JBLEtBdEl1QyxPQWtGZixPQXlHZSxLQXJDbEIsZ0JBeElILEtBYnRCLEFBc0p1QyxhQXhJcEIsQUE2S25CLFVBekdBLEtBbkVBLE9BdUl3QyIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3RlZmFuLnJhZHVzaS9wcm9qZWN0cy9oYWlodWkvbmV4dC1haGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjc3MgZnJvbSAnLi4vY3NzL3V0aWxzJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd1BhZ2VzIDogZmFsc2UsXG4gICAgICAgICAgICBydW5BbmltYXRpb24gOiBmYWxzZSxcbiAgICAgICAgICAgIGFuaW1hdGluZyA6IGZhbHNlIFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3dQYWdlcyhldmVudCkge1xuICAgICAgICBpZighdGhpcy5zdGF0ZS5hbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1BhZ2VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucnVuQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGhpZGVQYWdlcygpIHtcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuYW5pbWF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJ1bkFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1BhZ2VzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmhvbWVQYWdlID8gJ2hlYWRlciBoYXNCYW5uZXInIDogJ2hlYWRlcid9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5lJz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnVJY29uJyBvbkNsaWNrPXt0aGlzLnN0YXRlLnNob3dQYWdlcyA/IHRoaXMuaGlkZVBhZ2VzLmJpbmQodGhpcykgOiB0aGlzLnNob3dQYWdlcy5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuL3N0YXRpYy9oYWlodWlMb2dvLnBuZycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBNZW51IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgaGVpZ2h0PVwiNDBcIiB3aWR0aD1cIjQ2XCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgY2xhc3NOYW1lPVwiYmxpY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNDlcIiBjeT1cIjQ3XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjIwcHhcIiB3aWR0aD1cIjIwcHhcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2hvd1BhZ2VzID8gJ2V4cGFuZGUgc2hvdycgOiAgJ2V4cGFuZGUgaGlkZSd9IHZpZXdCb3g9JzAgMCAxMDAgMTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNob3dQYWdlcyA/ICdwYWdlcyBzaG93JyA6ICAncGFnZXMnfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ0hvbWUnLCAnUGhvdG9WaWRlbycsICdQcmludCcsICdQZXJzb25hbGl6YXJpJywgJ0NvbnRhY3QnXS5tYXAoKGNvbCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUucnVuQW5pbWF0aW9uID8gJ3BhZ2Ugc2hvdycgOiAgJ3BhZ2UgaGlkZSd9IHN0eWxlPXt7YW5pbWF0aW9uRGVsYXk6IGAuJHtpfXNgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy8nICsgKGNvbCA9PSAnSG9tZScgPyAnJyA6IGNvbC50b0xvd2VyQ2FzZSgpKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YC4vc3RhdGljL2hlYWRlckljb25zLyR7Y29sfS5wbmdgfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7Y29sfSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyU3RydWN0dXJlLm1hcChwYWdlID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwYWdlLm5hbWV9IGNsYXNzTmFtZT0ncGFnZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHsgcGFnZS5uYW1lIH0gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnLi9zdGF0aWMvJyArIHBhZ2UubmFtZSArICcucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG57XG5gZGl2LmhlYWRlciB7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbmRpdi5oZWFkZXIuaGFzQmFubmVyIHtcbiAgICB0b3A6IDI4OXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBkaXYuaGVhZGVyLmhhc0Jhbm5lciB7XG4gICAgICAgIHRvcDogMjAwcHg7XG4gICAgfVxufVxuXG5kaXYubGluZSB7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgbGVmdDowO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjQwJTtcbiAgICBiYWNrZ3JvdW5kOiR7Y3NzLnNreX07XG59XG5cbmRpdi5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbmRpdi5tZW51SWNvbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuZGl2Lm1lbnVJY29uIGltZyB7IFxuICAgIGhlaWdodDogMTAwJTtcbn1cblxuZGl2Lm1lbnVJY29uIHAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4gOiA1cHg7XG4gICAgZm9udC13ZWlnaHQgOiBib2xkO1xuICAgIGNvbG9yIDogJHtjc3MuZ3JleX1cbn1cblxuc3ZnLmJsaWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG59XG5cblxuQGtleWZyYW1lcyBibGluY2sge1xuICAgIDUwJSB7XG4gICAgICAgIHN0cm9rZS13aWR0aDogMTU7XG4gICAgICAgIFxuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBzdHJva2Utd2lkdGg6IDA7XG4gICAgICAgIHIgOiA0MDtcbiAgICAgICAgc3Ryb2tlRGFzaGFycmF5IDogMTM7IFxuICAgIH1cbn1cblxuc3ZnLmJsaWNrIGNpcmNsZSB7XG4gICAgc3Ryb2tlLXdpZHRoOiAwO1xuICAgIHI6IDY7XG4gICAgc3Ryb2tlIDogJHtjc3MuZ3JleX07XG4gICAgc3Ryb2tlRGFzaGFycmF5IDogMTM7XG59XG5cbmRpdi5tZW51SWNvbjpob3ZlciBzdmcuYmxpY2sgY2lyY2xlIHtcbiAgICBhbmltYXRpb246IGJsaW5jayAxcyBlYXNlO1xufVxuXG5kaXYucGFnZXMge1xuICAgZGlzcGxheTogbm9uZTtcbn1cblxuZGl2LnBhZ2VzLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbiA6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbmxpIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbn1cblxubGk6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBsaSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsMCk7XG4gICAgfVxuICAgIFxuICAgIGRpdi5wYWdlLnNob3cgbGkge1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLC4zKTtcbiAgICB9XG59XG5cbmRpdi5wYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiAke2Nzcy5za3l9O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuQGtleWZyYW1lcyBzaG93IHtcbiAgICAwJSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsMCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcbiAgICB9XG4gICAgXG4gICAgMTAwJSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgaGlkZSB7XG4gICAgMCUge1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxuICAgIFxuICAgIDEwMCUge1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDApO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xuICAgIH1cbn1cblxuZGl2LnBhZ2Uuc2hvdyB7XG4gICAgb3BhY2l0eTowO1xuICAgIGFuaW1hdGlvbjogc2hvdyAwLjVzIGVhc2UgZm9yd2FyZHM7XG59XG5cbmRpdi5wYWdlLmhpZGUge1xuICAgIG9wYWNpdHk6MTtcbiAgICBhbmltYXRpb246IGhpZGUgMC41cyBlYXNlIGZvcndhcmRzO1xufVxuXG5hIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAke2Nzcy5ncmV5fVxufVxuXG5hIGltZyB7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y3NzLmdyZXl9O1xuICAgICR7Y3NzLmNlbnRlcn07ICAgIFxufVxuXG5hIHAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4gOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG5hIGRpdiB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjc3MuZ3JleX07XG59XG5cbnN2Zy5leHBhbmRlIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuc3ZnLmV4cGFuZGUgcGF0aCB7XG4gICAgc3Ryb2tlOiAke2Nzcy5ncmV5fTtcbiAgICBzdHJva2Utd2lkdGg6IDk7XG4gICAgZmlsbDpub25lO1xuICAgIHN0cm9rZS1saW5lam9pbiA6IHJvdW5kO1xuICAgIHN0cm9rZS1saW5lY2FwIDogcm91bmQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuXG4gICAgZCA6IHBhdGgoXCJNMTAsMTAgTDcwLDUwIEwxMCw5MCBMMTAsMTBcIik7IFxufVxuXG5Aa2V5ZnJhbWVzIGV4cGFuZGUge1xuICAgIDAlIHtcbiAgICAgICAgZCA6IHBhdGgoXCJNMTAsMTAgTDcwLDUwIEwxMCw5MCBMMTAsMTBcIik7IFxuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIGQgOiBwYXRoKFwiTTEwLDEwIEw4MCwxMCBMMTAsMTAgTDEwLDEwXCIpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBmaWxsOiAke2Nzcy5ncmV5fTtcbiAgICAgICAgZCA6IHBhdGgoXCJNMTAsMjAgTDkwLDIwIEw1MCw4MCBMMTAsMjBcIik7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRleHBhbmRlIHtcbiAgICAwJSB7XG4gICAgICAgIGZpbGw6ICR7Y3NzLmdyZXl9O1xuICAgICAgICBkIDogcGF0aChcIk0xMCwyMCBMOTAsMjAgTDUwLDgwIEwxMCwyMFwiKTtcbiAgICB9XG4gICAgXG4gICAgNTAlIHtcbiAgICAgICAgZCA6IHBhdGgoXCJNMTAsMTAgTDEwLDgwIEwxMCwxMCBMMTAsMTBcIik7XG4gICAgfVxuICAgIFxuICAgIDEwMCUge1xuICAgICAgICBmaWxsOiBub25lO1xuICAgICAgICBkIDogcGF0aChcIk0xMCwxMCBMNzAsNTAgTDEwLDkwIEwxMCwxMFwiKTsgXG4gICAgfVxufVxuXG5zdmcuZXhwYW5kZS5zaG93IHBhdGgge1xuICAgIGFuaW1hdGlvbjogZXhwYW5kZSAuNXMgZWFzZSBmb3J3YXJkcztcbn1cblxuc3ZnLmV4cGFuZGUuaGlkZSBwYXRoIHtcbiAgICBhbmltYXRpb246IGRleHBhbmRlIC41cyBlYXNlIGZvcndhcmRzO1xufVxuYFxufVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=components/Header.js */'
            }));
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJDb21wb25lbnQiLCJjc3MiLCJIZWFkZXIiLCJzdGF0ZSIsInNob3dQYWdlcyIsInJ1bkFuaW1hdGlvbiIsImFuaW1hdGluZyIsImV2ZW50Iiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0IiwicHJvcHMiLCJob21lUGFnZSIsImhpZGVQYWdlcyIsImJpbmQiLCJtYXAiLCJjb2wiLCJpIiwiYW5pbWF0aW9uRGVsYXkiLCJ0b0xvd2VyQ2FzZSIsInNreSIsImdyZXkiLCJjZW50ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQ1AsQUFBUTs7OztBQUNSLEFBQU8sQUFBUzs7Ozs7Ozs7O0lBRVYsQTtvQ0FDRjs7c0JBQWM7NENBQUE7O29JQUdWOztjQUFBLEFBQUs7dUJBQVEsQUFDRyxBQUNaOzBCQUZTLEFBRU0sQUFDZjt1QkFOTSxBQUdWLEFBQWEsQUFHRztBQUhILEFBQ1Q7ZUFJUDs7Ozs7a0MsQUFFUyxPQUFPO3lCQUNiOztnQkFBRyxDQUFDLEtBQUEsQUFBSyxNQUFULEFBQWUsV0FBVyxBQUN0QjtxQkFBQSxBQUFLLE1BQUwsQUFBVyxZQUFYLEFBQXVCLEFBQ3ZCO3FCQUFBLEFBQUssTUFBTCxBQUFXLGVBQVgsQUFBMEIsQUFDMUI7cUJBQUEsQUFBSyxNQUFMLEFBQVcsWUFBWCxBQUF1QixBQUN2QjtxQkFBQSxBQUFLLFNBQVMsS0FBZCxBQUFtQixBQUNuQjsyQkFBVyxZQUFNLEFBQ2I7MkJBQUEsQUFBSyxNQUFMLEFBQVcsWUFBWCxBQUF1QixBQUN2QjsyQkFBQSxBQUFLLFNBQVMsT0FBZCxBQUFtQixBQUN0QjtBQUhELG1CQUFBLEFBR0csQUFDTjtBQUNKOzs7O29DQUVXO3lCQUNSOztnQkFBRyxDQUFDLEtBQUEsQUFBSyxNQUFULEFBQWUsV0FBVyxBQUN0QjtxQkFBQSxBQUFLLE1BQUwsQUFBVyxlQUFYLEFBQTBCLEFB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O0FBQUEsbUJBQUssS0FBTCxLQVJnRCxBQUM1RCxBQUNJLEFBQ0EsQUFDSSxBQUlJO0FBeEJwQyxBQUVJLEFBV0ksQUFDSSxBQUVRO3lCQWhCcEI7OGJBdUVLLGdCQXZFTCxBQXVFUyxpZkEwQlAsZ0JBakdGLEFBaUdNLHFXQTBCSCxnQkEzSEgsQUEySE8sODhCQXFERCxnQkFoTE4sQUFnTFUsbTBEQStDVCxnQkEvTkQsQUErTkssK0VBS08sZ0JBcE9aLEFBb09nQixhQUN0QixnQkFyT00sQUFxT0YsNE5BZ0JjLGdCQXJQWixBQXFQZ0IsaUhBUWQsZ0JBN1BGLEFBNlBNLDhUQW9CRixnQkFqUkosQUFpUlEseUxBQUosZ0JBalJKLEFBaVJRLHlHQU9KLGdCQXhSSixBQXdSUSwwTUFBSixnQkF4UkosQUF3UlEsT0F6UlosQUFDSSxBQWtUUDtBQWxUTzs7Ozs7QUF2Q1MsQSxBQTRWckI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zdGVmYW4ucmFkdXNpL3Byb2plY3RzL2hhaWh1aS9uZXh0LWFoaCJ9