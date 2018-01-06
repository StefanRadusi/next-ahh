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

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _ImgPreviewer = require('./reusable/ImgPreviewer');

var _ImgPreviewer2 = _interopRequireDefault(_ImgPreviewer);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _utils = require('../css/utils');

var _utils2 = _interopRequireDefault(_utils);

var _HaiHuiLogo = require('./svg/HaiHuiLogo.js');

var _HaiHuiLogo2 = _interopRequireDefault(_HaiHuiLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\programming\\nodejs\\heroku\\next-ahh\\components\\Layout.js';


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
        css: 'div.homeBanner.jsx-430555301{position:relative;height:289px;width:100%;background-image:url("./static/homeBanner.png");}div.svgContainer.jsx-430555301{width:500px;height:300px;margin:auto;}@-webkit-keyframes scaleGradientDiv-jsx-430555301{0%{-webkit-transform:translateX(-50%) translateY(-50%) scale(0);-ms-transform:translateX(-50%) translateY(-50%) scale(0);transform:translateX(-50%) translateY(-50%) scale(0);}100%{-webkit-transform:translateX(-50%) translateY(-50%) scale(1);-ms-transform:translateX(-50%) translateY(-50%) scale(1);transform:translateX(-50%) translateY(-50%) scale(1);}}@keyframes scaleGradientDiv-jsx-430555301{0%{-webkit-transform:translateX(-50%) translateY(-50%) scale(0);-ms-transform:translateX(-50%) translateY(-50%) scale(0);transform:translateX(-50%) translateY(-50%) scale(0);}100%{-webkit-transform:translateX(-50%) translateY(-50%) scale(1);-ms-transform:translateX(-50%) translateY(-50%) scale(1);transform:translateX(-50%) translateY(-50%) scale(1);}}div.svgBackGroundRadient.jsx-430555301{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%) scale(0);-ms-transform:translateX(-50%) translateY(-50%) scale(0);transform:translateX(-50%) translateY(-50%) scale(0);width:300px;height:300px;background:radial-gradient(ellipse at center,rgba(239,239,239,1) 20%,rgba(239,239,239,0) 80%);-webkit-animation:scaleGradientDiv-jsx-430555301 2s 2s ease forwards;animation:scaleGradientDiv-jsx-430555301 2s 2s ease forwards;}@media (max-width:600px){div.homeBanner.jsx-430555301{background-size:1000px 200px;height:200px;}div.svgContainer.jsx-430555301{width:100%;height:200px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkEsQUFHc0IsQUFRTixBQU8rQyxBQUlBLEFBS3hDLEFBWWUsQUFLbkIsV0FDRyxDQWpDSixNQVJBLEFBd0JOLE1Ba0JQLENBakNZLENBZ0JKLEdBV1MsRUFuQ04sSUF5QjJDLEVBaEIxRCxLQVJvRCxBQW1DaEQsZ0RBakNILGlGQVdHLEFBSUEsbUNBUVcsWUFDRSxhQUNtRiw4RkFDakQsa0lBQ25EIiwiZmlsZSI6ImNvbXBvbmVudHNcXExheW91dC5qcyIsInNvdXJjZVJvb3QiOiJEOi9wcm9ncmFtbWluZy9ub2RlanMvaGVyb2t1L25leHQtYWhoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcclxuaW1wb3J0IEltZ1ByZXZpZXdlciBmcm9tICcuL3JldXNhYmxlL0ltZ1ByZXZpZXdlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBjc3MgZnJvbSAnLi4vY3NzL3V0aWxzJztcclxuXHJcbmltcG9ydCBIYWlIdWlMb2dvIGZyb20gJy4vc3ZnL0hhaUh1aUxvZ28uanMnO1xyXG5cclxuY29uc3QgSG9tZUJhbm5lciA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdob21lQmFubmVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ZnQmFja0dyb3VuZFJhZGllbnQnPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdmdDb250YWluZXInPlxyXG4gICAgICAgICAgICA8SGFpSHVpTG9nbyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e1xyXG5gXHJcbmRpdi5ob21lQmFubmVyIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyODlweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9zdGF0aWMvaG9tZUJhbm5lci5wbmdcIik7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IDEzNTBweCAyNzVweDsgICAgXHJcbn1cclxuXHJcbmRpdi5zdmdDb250YWluZXIgeyAgICBcclxuICAgIHdpZHRoOjUwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzY2FsZUdyYWRpZW50RGl2IHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXYuc3ZnQmFja0dyb3VuZFJhZGllbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDApO1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCByZ2JhKDIzOSwyMzksMjM5LDEpIDIwJSwgcmdiYSgyMzksMjM5LDIzOSwwKSA4MCUpO1xyXG4gICAgYW5pbWF0aW9uOiBzY2FsZUdyYWRpZW50RGl2IDJzIDJzIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgZGl2LmhvbWVCYW5uZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwMHB4IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LnN2Z0NvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG59XHJcbmBcclxuICAgICAgICB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRJbWdMaXN0IDogW10sXHJcbiAgICAgICAgICAgIGN1cnJlbnRJbWdQcmV2aWV3SW5kZXggOiAwLFxyXG4gICAgICAgICAgICBzaG93UHJldmlld2VyIDogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dQcmV2aWV3ZXIoY3VycmVudEltZ1ByZXZpZXdJbmRleCwgY3VycmVudEltZ0xpc3QpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50SW1nUHJldmlld0luZGV4KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50SW1nTGlzdCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50SW1nUHJldmlld0luZGV4ID0gY3VycmVudEltZ1ByZXZpZXdJbmRleDtcclxuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRJbWdMaXN0ID0gY3VycmVudEltZ0xpc3Q7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zaG93UHJldmlld2VyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoaWRlUHJldmlld2VyKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2hvd1ByZXZpZXdlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQnPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaG9tZVBhZ2UgJiYgPEhvbWVCYW5uZXIgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5IYWkgSHVpPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5ld3MrQ3ljbGVcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QW1hdGljK1NDOjcwMFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIGhvbWVQYWdlID0ge3RoaXMucHJvcHMuaG9tZVBhZ2V9Lz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1ByZXZpZXdlckZ1bmM6IHRoaXMuc2hvd1ByZXZpZXdlci5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgICAgIDxJbWdQcmV2aWV3ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEltZ1ByZXZpZXdJbmRleD17dGhpcy5zdGF0ZS5jdXJyZW50SW1nUHJldmlld0luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbWdMaXN0PXt0aGlzLnN0YXRlLmN1cnJlbnRJbWdMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVQcmV2aWV3ZXI9e3RoaXMuaGlkZVByZXZpZXdlci5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dQcmV2aWV3ZXI9e3RoaXMuc3RhdGUuc2hvd1ByZXZpZXdlcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5uZXV0cmFsfTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjc3Muc2t5fTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjc3Muc2t5fTsgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5ncmV5fTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBkaXYubGF5b3V0IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTmV3cyBDeWNsZSwgQXJpYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR7Y3NzLmdyZXl9XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5uZXV0cmFsfTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXYuYmFzaWNQYWdlIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5ODBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGl2LmJhc2ljUGFnZSA+ZGl2IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICR7Y3NzLmJveFNoYWRvd0Fyb3VuZH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=components\\Layout.js */'
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
                className: 'jsx-2512448780' + ' ' + 'layout',
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
                className: 'jsx-2512448780',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, 'Hai Hui'), _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-2512448780',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-2512448780',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=News+Cycle', rel: 'stylesheet', className: 'jsx-2512448780',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Amatic+SC:700', rel: 'stylesheet', className: 'jsx-2512448780',
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
                styleId: '2512448780',
                css: '::-webkit-scrollbar{width:10px;background:' + _utils2.default.neutral + ';}::-webkit-scrollbar-track{border-radius:8px;background:' + _utils2.default.sky + ';}::-webkit-scrollbar-thumb{border-radius:6px;border:2px solid ' + _utils2.default.sky + ';background:' + _utils2.default.grey + ';}div.layout{position:absolute;top:0;left:0;width:100%;min-height:100%;font-size:10px;font-family:News Cycle,Arial;font-weight:300;color:' + _utils2.default.grey + ';background:' + _utils2.default.neutral + ';display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}div.basicPage{margin:auto;margin-top:50px;padding:10px;width:calc(100% - 20px);max-width:980px;}div.basicPage>div{padding:5px;border-radius:4px;' + _utils2.default.boxShadowAround + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySGEsQUFJNEIsQUFLTyxBQUtBLEFBT0EsQUFlTixBQVFBLFdBdkM0QixDQWdDeEIsQUFRRSxNQW5Dc0IsQUFLTSxBQU94QyxNQUNDLElBZU0sRUFTbEIsQ0F2QmdCLFVBZWEsQ0FkUixTQW5CcEIsT0FLQSxBQWVtQixDQXFCbkIsS0EvQjRDLENBd0J4QixRQWJjLFFBY2xDLHFCQWJvQixFQVhwQixjQWFJLG1DQUF3Qyx3Q0FDM0IsMEVBQ1MsOEVBQzFCIiwiZmlsZSI6ImNvbXBvbmVudHNcXExheW91dC5qcyIsInNvdXJjZVJvb3QiOiJEOi9wcm9ncmFtbWluZy9ub2RlanMvaGVyb2t1L25leHQtYWhoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcclxuaW1wb3J0IEltZ1ByZXZpZXdlciBmcm9tICcuL3JldXNhYmxlL0ltZ1ByZXZpZXdlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBjc3MgZnJvbSAnLi4vY3NzL3V0aWxzJztcclxuXHJcbmltcG9ydCBIYWlIdWlMb2dvIGZyb20gJy4vc3ZnL0hhaUh1aUxvZ28uanMnO1xyXG5cclxuY29uc3QgSG9tZUJhbm5lciA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdob21lQmFubmVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ZnQmFja0dyb3VuZFJhZGllbnQnPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdmdDb250YWluZXInPlxyXG4gICAgICAgICAgICA8SGFpSHVpTG9nbyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e1xyXG5gXHJcbmRpdi5ob21lQmFubmVyIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyODlweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9zdGF0aWMvaG9tZUJhbm5lci5wbmdcIik7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IDEzNTBweCAyNzVweDsgICAgXHJcbn1cclxuXHJcbmRpdi5zdmdDb250YWluZXIgeyAgICBcclxuICAgIHdpZHRoOjUwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzY2FsZUdyYWRpZW50RGl2IHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXYuc3ZnQmFja0dyb3VuZFJhZGllbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDApO1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCByZ2JhKDIzOSwyMzksMjM5LDEpIDIwJSwgcmdiYSgyMzksMjM5LDIzOSwwKSA4MCUpO1xyXG4gICAgYW5pbWF0aW9uOiBzY2FsZUdyYWRpZW50RGl2IDJzIDJzIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgZGl2LmhvbWVCYW5uZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwMHB4IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LnN2Z0NvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG59XHJcbmBcclxuICAgICAgICB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRJbWdMaXN0IDogW10sXHJcbiAgICAgICAgICAgIGN1cnJlbnRJbWdQcmV2aWV3SW5kZXggOiAwLFxyXG4gICAgICAgICAgICBzaG93UHJldmlld2VyIDogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dQcmV2aWV3ZXIoY3VycmVudEltZ1ByZXZpZXdJbmRleCwgY3VycmVudEltZ0xpc3QpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50SW1nUHJldmlld0luZGV4KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50SW1nTGlzdCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50SW1nUHJldmlld0luZGV4ID0gY3VycmVudEltZ1ByZXZpZXdJbmRleDtcclxuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRJbWdMaXN0ID0gY3VycmVudEltZ0xpc3Q7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zaG93UHJldmlld2VyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoaWRlUHJldmlld2VyKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2hvd1ByZXZpZXdlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQnPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaG9tZVBhZ2UgJiYgPEhvbWVCYW5uZXIgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5IYWkgSHVpPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5ld3MrQ3ljbGVcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QW1hdGljK1NDOjcwMFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIGhvbWVQYWdlID0ge3RoaXMucHJvcHMuaG9tZVBhZ2V9Lz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1ByZXZpZXdlckZ1bmM6IHRoaXMuc2hvd1ByZXZpZXdlci5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgICAgIDxJbWdQcmV2aWV3ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEltZ1ByZXZpZXdJbmRleD17dGhpcy5zdGF0ZS5jdXJyZW50SW1nUHJldmlld0luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbWdMaXN0PXt0aGlzLnN0YXRlLmN1cnJlbnRJbWdMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVQcmV2aWV3ZXI9e3RoaXMuaGlkZVByZXZpZXdlci5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dQcmV2aWV3ZXI9e3RoaXMuc3RhdGUuc2hvd1ByZXZpZXdlcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5uZXV0cmFsfTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjc3Muc2t5fTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtjc3Muc2t5fTsgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5ncmV5fTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBkaXYubGF5b3V0IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTmV3cyBDeWNsZSwgQXJpYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR7Y3NzLmdyZXl9XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5uZXV0cmFsfTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXYuYmFzaWNQYWdlIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5ODBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGl2LmJhc2ljUGFnZSA+ZGl2IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICR7Y3NzLmJveFNoYWRvd0Fyb3VuZH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=components\\Layout.js */'
            }));
        }
    }]);

    return Layout;
}(_react.Component);

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkhlYWRlciIsIkZvb3RlciIsIkltZ1ByZXZpZXdlciIsIkhlYWQiLCJjc3MiLCJIYWlIdWlMb2dvIiwiSG9tZUJhbm5lciIsIkxheW91dCIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50SW1nTGlzdCIsImN1cnJlbnRJbWdQcmV2aWV3SW5kZXgiLCJzaG93UHJldmlld2VyIiwic2V0U3RhdGUiLCJob21lUGFnZSIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGRyZW4iLCJjbG9uZUVsZW1lbnQiLCJjaGlsZCIsInNob3dQcmV2aWV3ZXJGdW5jIiwiYmluZCIsImhpZGVQcmV2aWV3ZXIiLCJuZXV0cmFsIiwic2t5IiwiZ3JleSIsImJveFNoYWRvd0Fyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVM7Ozs7QUFFaEIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0FBRXZCLElBQU0sYUFBYSxTQUFiLEFBQWEsYUFBQTsyQkFDZixjQUFBOzJDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUE7MkNBQ0ksQUFBZTs7c0JBQWY7d0JBREosQUFDSSxBQUNBO0FBREE7QUFBQSx3QkFDQSxjQUFBOzJDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLEFBQUM7O3NCQUFEO3dCQUhSLEFBRUksQUFDSTtBQUFBO0FBQUE7aUJBSFI7YUFEZSxBQUNmO0FBQUE7QUFESjs7SUEyRE0sQTtvQ0FDRjs7b0JBQUEsQUFBWSxPQUFPOzRDQUFBOzswSUFBQSxBQUNULEFBQ047O2NBQUEsQUFBSzs0QkFBUSxBQUNRLEFBQ2pCO29DQUZTLEFBRWdCLEFBQ3pCOzJCQUxXLEFBRWYsQUFBYSxBQUdPO0FBSFAsQUFDVDtlQUlQOzs7OztzQyxBQUVhLHdCLEFBQXdCLGdCQUFnQixBQUNsRDtBQUNBO0FBQ0E7QUFDQTtpQkFBQSxBQUFLLE1BQUwsQUFBVyx5QkFBWCxBQUFvQyxBQUNwQztpQkFBQSxBQUFLLE1BQUwsQUFBVyxpQkFBWCxBQUE0QixBQUM1QjtpQkFBQSxBQUFLLE1BQUwsQUFBVyxnQkFBWCxBQUEyQixBQUMzQjtpQkFBQSxBQUFLLFNBQVMsS0FBZCxBQUFtQixBQUN0Qjs7Ozt3Q0FFZSxBQUNaO2lCQUFBLEFBQUssTUFBTCxBQUFXLGdCQUFYLEFBQTJCLEFBQzNCO2lCQUFBLEFBQUssU0FBUyxLQUFkLEFBQW1CLEFBQ3RCOzs7O2lDQUVRO3lCQUNMOzttQ0FDSSxjQUFBO29EQUFBLEFBQWU7OzhCQUFmO2dDQUFBLEFBRVE7QUFGUjtBQUFBLGFBQUEsT0FFUSxBQUFLLE1BQUwsQUFBVywwQ0FBWSxBQUFDOzs4QkFBRDtnQ0FGL0IsQUFFK0IsQUFFM0I7QUFGMkI7QUFBQSxhQUFBLG1CQUUzQixBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esb0RBQU0sU0FBTixBQUFjLG9CQUFkOzs4QkFBQTtnQ0FGSixBQUVJLEFBQ0E7QUFEQTt3REFDTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QixvREFBOUI7OzhCQUFBO2dDQUhKLEFBR0ksQUFDQTtBQURBO3dEQUNNLE1BQU4sQUFBVyxzREFBcUQsS0FBaEUsQUFBb0UseUJBQXBFOzs4QkFBQTtnQ0FKSixBQUlJLEFBQ0E7QUFEQTt3REFDTSxNQUFOLEFBQVcseURBQXdELEtBQW5FLEFBQXVFLHlCQUF2RTs7OEJBQUE7Z0NBVFIsQUFJSSxBQUtJLEFBRUo7QUFGSTtpQ0FFSixBQUFDLGtDQUFPLFVBQVksS0FBQSxBQUFLLE1BQXpCLEFBQStCOzhCQUEvQjtnQ0FYSixBQVdJLEFBRUk7QUFGSjs7O0FBR0k7NEJBQUEsQUFBTSxTQUFOLEFBQWUsSUFBSSxLQUFBLEFBQUssTUFBeEIsQUFBOEIsVUFBVSxpQkFBUyxBQUM3Qzt1Q0FBTyxBQUFNLGFBQU4sQUFBbUI7dUNBQ0gsT0FBQSxBQUFLLGNBQUwsQUFBbUIsS0FEMUMsQUFBTyxBQUEwQixBQUdwQztBQUhvQyxBQUM3QixpQkFERztBQWZuQixBQWNRLEFBTUosZ0NBQUEsQUFBQzs7OEJBQUQ7Z0NBcEJKLEFBb0JJLEFBQ0E7QUFEQTtBQUFBLGdDQUNBLEFBQUM7d0NBQzJCLEtBQUEsQUFBSyxNQURqQyxBQUN1QyxBQUNuQztnQ0FBZ0IsS0FBQSxBQUFLLE1BRnpCLEFBRStCLEFBQzNCOytCQUFlLEtBQUEsQUFBSyxjQUFMLEFBQW1CLEtBSHRDLEFBR21CLEFBQXdCLEFBQ3ZDOytCQUFlLEtBQUEsQUFBSyxNQUp4QixBQUk4Qjs7OEJBSjlCO2dDQXJCSixBQXFCSTtBQUFBO0FBQ0k7eUJBdEJSO29FQWdDa0IsZ0JBaENsQixBQWdDc0Isd0VBS0osZ0JBckNsQixBQXFDc0IsMEVBS0UsZ0JBMUN4QixBQTBDNEIsdUJBQ1YsZ0JBM0NsQixBQTJDc0IscUpBYVQsZ0JBeERiLEFBd0RpQix3QkFDQyxnQkF6RGxCLEFBeURzQix5VEFnQmhCLGdCQXpFTixBQXlFVSxrQkExRWQsQUFDSSxBQStFUDtBQS9FTzs7Ozs7QUEzQlMsQSxBQTZHckI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkQ6L3Byb2dyYW1taW5nL25vZGVqcy9oZXJva3UvbmV4dC1haGgifQ==