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

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _ImgPreviewer = require('./reusable/ImgPreviewer');

var _ImgPreviewer2 = _interopRequireDefault(_ImgPreviewer);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _utils = require('../css/utils');

var _utils2 = _interopRequireDefault(_utils);

var _HaiHuiLogo = require('./svg/HaiHuiLogo.js');

var _HaiHuiLogo2 = _interopRequireDefault(_HaiHuiLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stefan.radusi/projects/haihui/next-ahh/components/Layout.js';


var HomeBanner = function HomeBanner() {
    return _react2.default.createElement('div', {
        className: 'jsx-430555301' + ' ' + 'homeBanner',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-430555301' + ' ' + 'svgBackGroundRadient',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }), _react2.default.createElement('div', {
        className: 'jsx-430555301' + ' ' + 'svgContainer',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement(_HaiHuiLogo2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    })), _react2.default.createElement(_style2.default, {
        styleId: '430555301',
        css: 'div.homeBanner.jsx-430555301{position:relative;height:289px;width:100%;background-image:url("./static/homeBanner.png");}div.svgContainer.jsx-430555301{width:500px;height:300px;margin:auto;}@-webkit-keyframes scaleGradientDiv-jsx-430555301{0%{-webkit-transform:translateX(-50%) translateY(-50%) scale(0);-ms-transform:translateX(-50%) translateY(-50%) scale(0);transform:translateX(-50%) translateY(-50%) scale(0);}100%{-webkit-transform:translateX(-50%) translateY(-50%) scale(1);-ms-transform:translateX(-50%) translateY(-50%) scale(1);transform:translateX(-50%) translateY(-50%) scale(1);}}@keyframes scaleGradientDiv-jsx-430555301{0%{-webkit-transform:translateX(-50%) translateY(-50%) scale(0);-ms-transform:translateX(-50%) translateY(-50%) scale(0);transform:translateX(-50%) translateY(-50%) scale(0);}100%{-webkit-transform:translateX(-50%) translateY(-50%) scale(1);-ms-transform:translateX(-50%) translateY(-50%) scale(1);transform:translateX(-50%) translateY(-50%) scale(1);}}div.svgBackGroundRadient.jsx-430555301{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%) scale(0);-ms-transform:translateX(-50%) translateY(-50%) scale(0);transform:translateX(-50%) translateY(-50%) scale(0);width:300px;height:300px;background:radial-gradient(ellipse at center,rgba(239,239,239,1) 20%,rgba(239,239,239,0) 80%);-webkit-animation:scaleGradientDiv-jsx-430555301 2s 2s ease forwards;animation:scaleGradientDiv-jsx-430555301 2s 2s ease forwards;}@media (max-width:600px){div.homeBanner.jsx-430555301{background-size:1000px 200px;height:200px;}div.svgContainer.jsx-430555301{width:100%;height:200px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCQSxBQUdzQixBQVFOLEFBTytDLEFBSUEsQUFLeEMsQUFZZSxBQUtuQixXQUNHLENBakNKLE1BUkEsQUF3Qk4sTUFrQlAsQ0FqQ1ksQ0FnQkosR0FXUyxFQW5DTixJQXlCMkMsRUFoQjFELEtBUm9ELEFBbUNoRCxnREFqQ0gsaUZBV0csQUFJQSxtQ0FRVyxZQUNFLGFBQ21GLDhGQUNqRCxrSUFDbkQiLCJmaWxlIjoiY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0ZWZhbi5yYWR1c2kvcHJvamVjdHMvaGFpaHVpL25leHQtYWhoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IEltZ1ByZXZpZXdlciBmcm9tICcuL3JldXNhYmxlL0ltZ1ByZXZpZXdlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi9jc3MvdXRpbHMnO1xuXG5pbXBvcnQgSGFpSHVpTG9nbyBmcm9tICcuL3N2Zy9IYWlIdWlMb2dvLmpzJztcblxuY29uc3QgSG9tZUJhbm5lciA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZUJhbm5lcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdmdCYWNrR3JvdW5kUmFkaWVudCc+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdmdDb250YWluZXInPlxuICAgICAgICAgICAgPEhhaUh1aUxvZ28gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e1xuYFxuZGl2LmhvbWVCYW5uZXIge1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGhlaWdodDogMjg5cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9zdGF0aWMvaG9tZUJhbm5lci5wbmdcIik7XG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiAxMzUwcHggMjc1cHg7ICAgIFxufVxuXG5kaXYuc3ZnQ29udGFpbmVyIHsgICAgXG4gICAgd2lkdGg6NTAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbkBrZXlmcmFtZXMgc2NhbGVHcmFkaWVudERpdiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMCk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogIHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxKTtcbiAgICB9XG59XG5cbmRpdi5zdmdCYWNrR3JvdW5kUmFkaWVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo1MCU7XG4gICAgbGVmdDo1MCU7XG4gICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDApO1xuICAgIHdpZHRoOjMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCByZ2JhKDIzOSwyMzksMjM5LDEpIDIwJSwgcmdiYSgyMzksMjM5LDIzOSwwKSA4MCUpO1xuICAgIGFuaW1hdGlvbjogc2NhbGVHcmFkaWVudERpdiAycyAycyBlYXNlIGZvcndhcmRzO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBkaXYuaG9tZUJhbm5lciB7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwMHB4IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cblxuICAgIGRpdi5zdmdDb250YWluZXIge1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cbn1cbmBcbiAgICAgICAgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRJbWdMaXN0IDogW10sXG4gICAgICAgICAgICBjdXJyZW50SW1nUHJldmlld0luZGV4IDogMCxcbiAgICAgICAgICAgIHNob3dQcmV2aWV3ZXIgOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3dQcmV2aWV3ZXIoY3VycmVudEltZ1ByZXZpZXdJbmRleCwgY3VycmVudEltZ0xpc3QpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudEltZ1ByZXZpZXdJbmRleCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRJbWdMaXN0KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudEltZ1ByZXZpZXdJbmRleCA9IGN1cnJlbnRJbWdQcmV2aWV3SW5kZXg7XG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudEltZ0xpc3QgPSBjdXJyZW50SW1nTGlzdDtcbiAgICAgICAgdGhpcy5zdGF0ZS5zaG93UHJldmlld2VyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB9XG4gICAgXG4gICAgaGlkZVByZXZpZXdlcigpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zaG93UHJldmlld2VyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCc+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhvbWVQYWdlICYmIDxIb21lQmFubmVyIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+SGFpIEh1aTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OZXdzK0N5Y2xlXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbWF0aWMrU0M6NzAwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPEhlYWRlciBob21lUGFnZSA9IHt0aGlzLnByb3BzLmhvbWVQYWdlfS8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1ByZXZpZXdlckZ1bmM6IHRoaXMuc2hvd1ByZXZpZXdlci5iaW5kKHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICAgICAgPEltZ1ByZXZpZXdlciBcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEltZ1ByZXZpZXdJbmRleD17dGhpcy5zdGF0ZS5jdXJyZW50SW1nUHJldmlld0luZGV4fVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW1nTGlzdD17dGhpcy5zdGF0ZS5jdXJyZW50SW1nTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgaGlkZVByZXZpZXdlcj17dGhpcy5oaWRlUHJldmlld2VyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIHNob3dQcmV2aWV3ZXI9e3RoaXMuc3RhdGUuc2hvd1ByZXZpZXdlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAge2BcblxuICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OjhweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5uZXV0cmFsfTsgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5za3l9OyBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLnNreX07IFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLmdyZXl9OyBcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBkaXYubGF5b3V0IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE5ld3MgQ3ljbGUsIEFyaWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7Y3NzLmdyZXl9XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubmV1dHJhbH07XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXYuYmFzaWNQYWdlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk4MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXYuYmFzaWNQYWdlID5kaXYge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgJHtjc3MuYm94U2hhZG93QXJvdW5kfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=components/Layout.js */'
    }));
};

var Layout = function (_Component) {
    (0, _inherits3.default)(Layout, _Component);

    function Layout(props) {
        (0, _classCallCheck3.default)(this, Layout);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

        _this.state = {
            currentImgList: [],
            currentImgPreviewIndex: 0,
            showPreviewer: false
        };
        return _this;
    }

    (0, _createClass3.default)(Layout, [{
        key: 'showPreviewer',
        value: function showPreviewer(currentImgPreviewIndex, currentImgList) {
            // console.log(currentImgPreviewIndex);
            // console.log(currentImgList);
            // console.log(this);
            this.state.currentImgPreviewIndex = currentImgPreviewIndex;
            this.state.currentImgList = currentImgList;
            this.state.showPreviewer = true;
            this.setState(this.state);
        }
    }, {
        key: 'hidePreviewer',
        value: function hidePreviewer() {
            this.state.showPreviewer = false;
            this.setState(this.state);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('div', {
                className: 'jsx-1838479052' + ' ' + 'layout',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, this.props.homePage && _react2.default.createElement(HomeBanner, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }), _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, _react2.default.createElement('title', {
                className: 'jsx-1838479052',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, 'Hai Hui'), _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-1838479052',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-1838479052',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=News+Cycle', rel: 'stylesheet', className: 'jsx-1838479052',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Amatic+SC:700', rel: 'stylesheet', className: 'jsx-1838479052',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            })), _react2.default.createElement(_Header2.default, { homePage: this.props.homePage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }),

            // this.props.children
            _react2.default.Children.map(this.props.children, function (child) {
                return _react2.default.cloneElement(child, {
                    showPreviewerFunc: _this2.showPreviewer.bind(_this2)
                });
            }), _react2.default.createElement(_Footer2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }), _react2.default.createElement(_ImgPreviewer2.default, {
                currentImgPreviewIndex: this.state.currentImgPreviewIndex,
                currentImgList: this.state.currentImgList,
                hidePreviewer: this.hidePreviewer.bind(this),
                showPreviewer: this.state.showPreviewer,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }), _react2.default.createElement(_style2.default, {
                styleId: '1838479052',
                css: '::-webkit-scrollbar{width:10px;height:8px;background:' + _utils2.default.neutral + ';}::-webkit-scrollbar-track{border-radius:8px;background:' + _utils2.default.sky + ';}::-webkit-scrollbar-thumb{border-radius:6px;border:2px solid ' + _utils2.default.sky + ';background:' + _utils2.default.grey + ';}div.layout{position:absolute;top:0;left:0;width:100%;min-height:100%;font-size:10px;font-family:News Cycle,Arial;font-weight:300;color:' + _utils2.default.grey + ';background:' + _utils2.default.neutral + ';display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}div.basicPage{margin:auto;margin-top:50px;padding:10px;width:calc(100% - 20px);max-width:980px;}div.basicPage>div{padding:5px;border-radius:4px;' + _utils2.default.boxShadowAround + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJIYSxBQUk0QixBQU1PLEFBS0EsQUFPQSxBQWVOLEFBUUEsV0F4Q0YsQ0FpQ00sQUFRRSxNQW5Dc0IsQUFLTSxBQU94QyxJQWpCa0MsRUFrQmpDLElBZU0sRUFTbEIsQ0F2QmdCLFVBZWEsQ0FkUixnQkFkcEIsQUFlbUIsQ0FxQm5CLEdBekNBLEVBVTRDLENBd0J4QixRQWJjLFFBY2xDLHFCQWJvQixFQVhwQixjQWFJLG1DQUF3Qyx3Q0FDM0IsMEVBQ1MsOEVBQzFCIiwiZmlsZSI6ImNvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zdGVmYW4ucmFkdXNpL3Byb2plY3RzL2hhaWh1aS9uZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCBJbWdQcmV2aWV3ZXIgZnJvbSAnLi9yZXVzYWJsZS9JbWdQcmV2aWV3ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBjc3MgZnJvbSAnLi4vY3NzL3V0aWxzJztcblxuaW1wb3J0IEhhaUh1aUxvZ28gZnJvbSAnLi9zdmcvSGFpSHVpTG9nby5qcyc7XG5cbmNvbnN0IEhvbWVCYW5uZXIgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2hvbWVCYW5uZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ZnQmFja0dyb3VuZFJhZGllbnQnPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ZnQ29udGFpbmVyJz5cbiAgICAgICAgICAgIDxIYWlIdWlMb2dvIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntcbmBcbmRpdi5ob21lQmFubmVyIHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDI4OXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vc3RhdGljL2hvbWVCYW5uZXIucG5nXCIpO1xuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogMTM1MHB4IDI3NXB4OyAgICBcbn1cblxuZGl2LnN2Z0NvbnRhaW5lciB7ICAgIFxuICAgIHdpZHRoOjUwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG5Aa2V5ZnJhbWVzIHNjYWxlR3JhZGllbnREaXYge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDApO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMSk7XG4gICAgfVxufVxuXG5kaXYuc3ZnQmFja0dyb3VuZFJhZGllbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6NTAlO1xuICAgIGxlZnQ6NTAlO1xuICAgIHRyYW5zZm9ybTogIHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgwKTtcbiAgICB3aWR0aDozMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgcmdiYSgyMzksMjM5LDIzOSwxKSAyMCUsIHJnYmEoMjM5LDIzOSwyMzksMCkgODAlKTtcbiAgICBhbmltYXRpb246IHNjYWxlR3JhZGllbnREaXYgMnMgMnMgZWFzZSBmb3J3YXJkcztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZGl2LmhvbWVCYW5uZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMDBweCAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG5cbiAgICBkaXYuc3ZnQ29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG59XG5gXG4gICAgICAgIH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKTtcblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjdXJyZW50SW1nTGlzdCA6IFtdLFxuICAgICAgICAgICAgY3VycmVudEltZ1ByZXZpZXdJbmRleCA6IDAsXG4gICAgICAgICAgICBzaG93UHJldmlld2VyIDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzaG93UHJldmlld2VyKGN1cnJlbnRJbWdQcmV2aWV3SW5kZXgsIGN1cnJlbnRJbWdMaXN0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRJbWdQcmV2aWV3SW5kZXgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50SW1nTGlzdCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRJbWdQcmV2aWV3SW5kZXggPSBjdXJyZW50SW1nUHJldmlld0luZGV4O1xuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRJbWdMaXN0ID0gY3VycmVudEltZ0xpc3Q7XG4gICAgICAgIHRoaXMuc3RhdGUuc2hvd1ByZXZpZXdlciA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgfVxuICAgIFxuICAgIGhpZGVQcmV2aWV3ZXIoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2hvd1ByZXZpZXdlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQnPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ob21lUGFnZSAmJiA8SG9tZUJhbm5lciAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkhhaSBIdWk8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TmV3cytDeWNsZVwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QW1hdGljK1NDOjcwMFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgaG9tZVBhZ2UgPSB7dGhpcy5wcm9wcy5ob21lUGFnZX0vPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dQcmV2aWV3ZXJGdW5jOiB0aGlzLnNob3dQcmV2aWV3ZXIuYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgICAgIDxJbWdQcmV2aWV3ZXIgXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbWdQcmV2aWV3SW5kZXg9e3RoaXMuc3RhdGUuY3VycmVudEltZ1ByZXZpZXdJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEltZ0xpc3Q9e3RoaXMuc3RhdGUuY3VycmVudEltZ0xpc3R9XG4gICAgICAgICAgICAgICAgICAgIGhpZGVQcmV2aWV3ZXI9e3RoaXMuaGlkZVByZXZpZXdlci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBzaG93UHJldmlld2VyPXt0aGlzLnN0YXRlLnNob3dQcmV2aWV3ZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICAgIHtgXG5cbiAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDo4cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjc3MubmV1dHJhbH07IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjc3Muc2t5fTsgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2Nzcy5za3l9OyBcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5ncmV5fTsgXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgZGl2LmxheW91dCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBOZXdzIEN5Y2xlLCBBcmlhbDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke2Nzcy5ncmV5fVxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm5ldXRyYWx9O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGl2LmJhc2ljUGFnZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5ODBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGl2LmJhc2ljUGFnZSA+ZGl2IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICR7Y3NzLmJveFNoYWRvd0Fyb3VuZH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=components/Layout.js */'
            }));
        }
    }]);

    return Layout;
}(_react.Component);

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZGVyIiwiRm9vdGVyIiwiSW1nUHJldmlld2VyIiwiSGVhZCIsImNzcyIsIkhhaUh1aUxvZ28iLCJIb21lQmFubmVyIiwiTGF5b3V0IiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRJbWdMaXN0IiwiY3VycmVudEltZ1ByZXZpZXdJbmRleCIsInNob3dQcmV2aWV3ZXIiLCJzZXRTdGF0ZSIsImhvbWVQYWdlIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZHJlbiIsImNsb25lRWxlbWVudCIsImNoaWxkIiwic2hvd1ByZXZpZXdlckZ1bmMiLCJiaW5kIiwiaGlkZVByZXZpZXdlciIsIm5ldXRyYWwiLCJza3kiLCJncmV5IiwiYm94U2hhZG93QXJvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTzs7OztBQUNQLEFBQU8sQUFBUzs7OztBQUVoQixBQUFPLEFBQWdCOzs7Ozs7Ozs7QUFFdkIsSUFBTSxhQUFhLFNBQWIsQUFBYSxhQUFBOzJCQUNmLGNBQUE7MkNBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQTsyQ0FDSSxBQUFlOztzQkFBZjt3QkFESixBQUNJLEFBQ0E7QUFEQTtBQUFBLHdCQUNBLGNBQUE7MkNBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQzs7c0JBQUQ7d0JBSFIsQUFFSSxBQUNJO0FBQUE7QUFBQTtpQkFIUjthQURlLEFBQ2Y7QUFBQTtBQURKOztJQTJETSxBO29DQUNGOztvQkFBQSxBQUFZLE9BQU87NENBQUE7OzBJQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLOzRCQUFRLEFBQ1EsQUFDakI7b0NBRlMsQUFFZ0IsQUFDekI7MkJBTFcsQUFFZixBQUFhLEFBR087QUFIUCxBQUNUO2VBSVA7Ozs7O3NDLEFBRWEsd0IsQUFBd0IsZ0JBQWdCLEFBQ2xEO0FBQ0E7QUFDQTtBQUNBO2lCQUFBLEFBQUssTUFBTCxBQUFXLHlCQUFYLEFBQW9DLEFBQ3BDO2lCQUFBLEFBQUssTUFBTCxBQUFXLGlCQUFYLEFBQTRCLEFBQzVCO2lCQUFBLEFBQUssTUFBTCxBQUFXLGdCQUFYLEFBQTJCLEFBQzNCO2lCQUFBLEFBQUssU0FBUyxLQUFkLEFBQW1CLEFBQ3RCOzs7O3dDQUVlLEFBQ1o7aUJBQUEsQUFBSyxNQUFMLEFBQVcsZ0JBQVgsQUFBMkIsQUFDM0I7aUJBQUEsQUFBSyxTQUFTLEtBQWQsQUFBbUIsQUFDdEI7Ozs7aUNBRVE7eUJBQ0w7O21DQUNJLGNBQUE7b0RBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFFUTtBQUZSO0FBQUEsYUFBQSxPQUVRLEFBQUssTUFBTCxBQUFXLDBDQUFZLEFBQUM7OzhCQUFEO2dDQUYvQixBQUUrQixBQUUzQjtBQUYyQjtBQUFBLGFBQUEsbUJBRTNCLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxvREFBTSxTQUFOLEFBQWMsb0JBQWQ7OzhCQUFBO2dDQUZKLEFBRUksQUFDQTtBQURBO3dEQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCLG9EQUE5Qjs7OEJBQUE7Z0NBSEosQUFHSSxBQUNBO0FBREE7d0RBQ00sTUFBTixBQUFXLHNEQUFxRCxLQUFoRSxBQUFvRSx5QkFBcEU7OzhCQUFBO2dDQUpKLEFBSUksQUFDQTtBQURBO3dEQUNNLE1BQU4sQUFBVyx5REFBd0QsS0FBbkUsQUFBdUUseUJBQXZFOzs4QkFBQTtnQ0FUUixBQUlJLEFBS0ksQUFFSjtBQUZJO2lDQUVKLEFBQUMsa0NBQU8sVUFBWSxLQUFBLEFBQUssTUFBekIsQUFBK0I7OEJBQS9CO2dDQVhKLEFBV0ksQUFFSTtBQUZKOzs7QUFHSTs0QkFBQSxBQUFNLFNBQU4sQUFBZSxJQUFJLEtBQUEsQUFBSyxNQUF4QixBQUE4QixVQUFVLGlCQUFTLEFBQzdDO3VDQUFPLEFBQU0sYUFBTixBQUFtQjt1Q0FDSCxPQUFBLEFBQUssY0FBTCxBQUFtQixLQUQxQyxBQUFPLEFBQTBCLEFBR3BDO0FBSG9DLEFBQzdCLGlCQURHO0FBZm5CLEFBY1EsQUFNSixnQ0FBQSxBQUFDOzs4QkFBRDtnQ0FwQkosQUFvQkksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsQUFBQzt3Q0FDMkIsS0FBQSxBQUFLLE1BRGpDLEFBQ3VDLEFBQ25DO2dDQUFnQixLQUFBLEFBQUssTUFGekIsQUFFK0IsQUFDM0I7K0JBQWUsS0FBQSxBQUFLLGNBQUwsQUFBbUIsS0FIdEMsQUFHbUIsQUFBd0IsQUFDdkM7K0JBQWUsS0FBQSxBQUFLLE1BSnhCLEFBSThCOzs4QkFKOUI7Z0NBckJKLEFBcUJJO0FBQUE7QUFDSTt5QkF0QlI7K0VBaUNrQixnQkFqQ2xCLEFBaUNzQix3RUFLSixnQkF0Q2xCLEFBc0NzQiwwRUFLRSxnQkEzQ3hCLEFBMkM0Qix1QkFDVixnQkE1Q2xCLEFBNENzQixxSkFhVCxnQkF6RGIsQUF5RGlCLHdCQUNDLGdCQTFEbEIsQUEwRHNCLHlUQWdCaEIsZ0JBMUVOLEFBMEVVLGtCQTNFZCxBQUNJLEFBZ0ZQO0FBaEZPOzs7OztBQTNCUyxBLEFBOEdyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0ZWZhbi5yYWR1c2kvcHJvamVjdHMvaGFpaHVpL25leHQtYWhoIn0=