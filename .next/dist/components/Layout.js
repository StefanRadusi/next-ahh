'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

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
            lineNumber: 9
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-430555301' + ' ' + 'svgBackGroundRadient',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), _react2.default.createElement('div', {
        className: 'jsx-430555301' + ' ' + 'svgContainer',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement(_HaiHuiLogo2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    })), _react2.default.createElement(_style2.default, {
        styleId: '430555301',
        css: 'div.homeBanner.jsx-430555301{position:relative;height:289px;width:100%;background-image:url("./static/homeBanner.png");}div.svgContainer.jsx-430555301{width:500px;height:300px;margin:auto;}@-webkit-keyframes scaleGradientDiv-jsx-430555301{0%{-webkit-transform:translateX(-50%) translateY(-50%) scale(0);-ms-transform:translateX(-50%) translateY(-50%) scale(0);transform:translateX(-50%) translateY(-50%) scale(0);}100%{-webkit-transform:translateX(-50%) translateY(-50%) scale(1);-ms-transform:translateX(-50%) translateY(-50%) scale(1);transform:translateX(-50%) translateY(-50%) scale(1);}}@keyframes scaleGradientDiv-jsx-430555301{0%{-webkit-transform:translateX(-50%) translateY(-50%) scale(0);-ms-transform:translateX(-50%) translateY(-50%) scale(0);transform:translateX(-50%) translateY(-50%) scale(0);}100%{-webkit-transform:translateX(-50%) translateY(-50%) scale(1);-ms-transform:translateX(-50%) translateY(-50%) scale(1);transform:translateX(-50%) translateY(-50%) scale(1);}}div.svgBackGroundRadient.jsx-430555301{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%) scale(0);-ms-transform:translateX(-50%) translateY(-50%) scale(0);transform:translateX(-50%) translateY(-50%) scale(0);width:300px;height:300px;background:radial-gradient(ellipse at center,rgba(239,239,239,1) 20%,rgba(239,239,239,0) 80%);-webkit-animation:scaleGradientDiv-jsx-430555301 2s 2s ease forwards;animation:scaleGradientDiv-jsx-430555301 2s 2s ease forwards;}@media (max-width:600px){div.homeBanner.jsx-430555301{background-size:1000px 200px;height:200px;}div.svgContainer.jsx-430555301{width:100%;height:200px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQSxBQUdzQixBQVFOLEFBTytDLEFBSUEsQUFLeEMsQUFZZSxBQUtuQixXQUNHLENBakNKLE1BUkEsQUF3Qk4sTUFrQlAsQ0FqQ1ksQ0FnQkosR0FXUyxFQW5DTixJQXlCMkMsRUFoQjFELEtBUm9ELEFBbUNoRCxnREFqQ0gsaUZBV0csQUFJQSxtQ0FRVyxZQUNFLGFBQ21GLDhGQUNqRCxrSUFDbkQiLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkQ6L3Byb2dyYW1taW5nL25vZGVqcy9oZXJva3UvbmV4dC1haGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBjc3MgZnJvbSAnLi4vY3NzL3V0aWxzJztcclxuXHJcbmltcG9ydCBIYWlIdWlMb2dvIGZyb20gJy4vc3ZnL0hhaUh1aUxvZ28uanMnO1xyXG5cclxuY29uc3QgSG9tZUJhbm5lciA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdob21lQmFubmVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ZnQmFja0dyb3VuZFJhZGllbnQnPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdmdDb250YWluZXInPlxyXG4gICAgICAgICAgICA8SGFpSHVpTG9nbyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e1xyXG5gXHJcbmRpdi5ob21lQmFubmVyIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyODlweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9zdGF0aWMvaG9tZUJhbm5lci5wbmdcIik7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IDEzNTBweCAyNzVweDsgICAgXHJcbn1cclxuXHJcbmRpdi5zdmdDb250YWluZXIgeyAgICBcclxuICAgIHdpZHRoOjUwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzY2FsZUdyYWRpZW50RGl2IHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXYuc3ZnQmFja0dyb3VuZFJhZGllbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDApO1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCByZ2JhKDIzOSwyMzksMjM5LDEpIDIwJSwgcmdiYSgyMzksMjM5LDIzOSwwKSA4MCUpO1xyXG4gICAgYW5pbWF0aW9uOiBzY2FsZUdyYWRpZW50RGl2IDJzIDJzIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgZGl2LmhvbWVCYW5uZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwMHB4IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LnN2Z0NvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG59XHJcbmBcclxuICAgICAgICB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J2xheW91dCc+XHJcbiAgICB7XHJcbiAgICAgICAgcHJvcHMuaG9tZVBhZ2UgJiYgPEhvbWVCYW5uZXIgLz5cclxuICAgIH1cclxuICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5IYWkgSHVpPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5ld3MrQ3ljbGVcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QW1hdGljK1NDOjcwMFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8SGVhZGVyIGhvbWVQYWdlID0ge3Byb3BzLmhvbWVQYWdlfS8+XHJcbiAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8Rm9vdGVyIC8+XHJcblxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbntgXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogJHtjc3MubmV1dHJhbH07IFxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6ICR7Y3NzLnNreX07IFxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLnNreX07IFxyXG4gICAgYmFja2dyb3VuZDogJHtjc3MuZ3JleX07IFxyXG59XHJcblxyXG5cclxuZGl2LmxheW91dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE5ld3MgQ3ljbGUsIEFyaWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAke2Nzcy5ncmV5fVxyXG4gICAgYmFja2dyb3VuZDogJHtjc3MubmV1dHJhbH07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuZGl2LmJhc2ljUGFnZSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgIG1heC13aWR0aDogOTgwcHg7XHJcbn1cclxuYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=components\\Layout.js */'
    }));
};

var Layout = function Layout(props) {
    return _react2.default.createElement('div', {
        className: 'jsx-1810325387' + ' ' + 'layout',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 68
        }
    }, props.homePage && _react2.default.createElement(HomeBanner, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 70
        }
    }), _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 72
        }
    }, _react2.default.createElement('title', {
        className: 'jsx-1810325387',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 73
        }
    }, 'Hai Hui'), _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-1810325387',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 74
        }
    }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-1810325387',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 75
        }
    }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=News+Cycle', rel: 'stylesheet', className: 'jsx-1810325387',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 76
        }
    }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Amatic+SC:700', rel: 'stylesheet', className: 'jsx-1810325387',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 77
        }
    })), _react2.default.createElement(_Header2.default, { homePage: props.homePage, __source: {
            fileName: _jsxFileName,
            lineNumber: 79
        }
    }), props.children, _react2.default.createElement(_Footer2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 81
        }
    }), _react2.default.createElement(_style2.default, {
        styleId: '1810325387',
        css: '::-webkit-scrollbar{width:10px;background:' + _utils2.default.neutral + ';}::-webkit-scrollbar-track{border-radius:8px;background:' + _utils2.default.sky + ';}::-webkit-scrollbar-thumb{border-radius:6px;border:2px solid ' + _utils2.default.sky + ';background:' + _utils2.default.grey + ';}div.layout{position:absolute;top:0;left:0;width:100%;min-height:100%;font-size:10px;font-family:News Cycle,Arial;font-weight:300;color:' + _utils2.default.grey + ';background:' + _utils2.default.neutral + ';display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}div.basicPage{margin:auto;margin-top:50px;padding:10px;width:calc(100% - 20px);max-width:980px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRkMsQUFJZ0IsQUFLTyxBQUtBLEFBT0EsQUFlTixXQS9CNEIsQ0FnQ3hCLE1BM0J3QixBQUtNLEFBT3hDLE1BQ0MsSUFlTSxHQWRGLFVBZWEsQ0FkUixTQW5CcEIsT0FLQSxBQWVtQixNQVZ5QixDQXdCeEIsUUFiYyxRQWNsQyxxQkFib0IsRUFYcEIsY0FhSSxtQ0FBd0Msd0NBQzNCLDBFQUNTLDhFQUMxQiIsImZpbGUiOiJjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiRDovcHJvZ3JhbW1pbmcvbm9kZWpzL2hlcm9rdS9uZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IGNzcyBmcm9tICcuLi9jc3MvdXRpbHMnO1xyXG5cclxuaW1wb3J0IEhhaUh1aUxvZ28gZnJvbSAnLi9zdmcvSGFpSHVpTG9nby5qcyc7XHJcblxyXG5jb25zdCBIb21lQmFubmVyID0gKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2hvbWVCYW5uZXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdmdCYWNrR3JvdW5kUmFkaWVudCc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N2Z0NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxIYWlIdWlMb2dvIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57XHJcbmBcclxuZGl2LmhvbWVCYW5uZXIge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDI4OXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL3N0YXRpYy9ob21lQmFubmVyLnBuZ1wiKTtcclxuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogMTM1MHB4IDI3NXB4OyAgICBcclxufVxyXG5cclxuZGl2LnN2Z0NvbnRhaW5lciB7ICAgIFxyXG4gICAgd2lkdGg6NTAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNjYWxlR3JhZGllbnREaXYge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogIHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRpdi5zdmdCYWNrR3JvdW5kUmFkaWVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6NTAlO1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMCk7XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMjM5LDIzOSwyMzksMSkgMjAlLCByZ2JhKDIzOSwyMzksMjM5LDApIDgwJSk7XHJcbiAgICBhbmltYXRpb246IHNjYWxlR3JhZGllbnREaXYgMnMgMnMgZWFzZSBmb3J3YXJkcztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBkaXYuaG9tZUJhbm5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAwcHggMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBkaXYuc3ZnQ29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuYFxyXG4gICAgICAgIH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT0nbGF5b3V0Jz5cclxuICAgIHtcclxuICAgICAgICBwcm9wcy5ob21lUGFnZSAmJiA8SG9tZUJhbm5lciAvPlxyXG4gICAgfVxyXG4gICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkhhaSBIdWk8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TmV3cytDeWNsZVwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbWF0aWMrU0M6NzAwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxIZWFkZXIgaG9tZVBhZ2UgPSB7cHJvcHMuaG9tZVBhZ2V9Lz5cclxuICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDxGb290ZXIgLz5cclxuXHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD5cclxue2BcclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAke2Nzcy5uZXV0cmFsfTsgXHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogJHtjc3Muc2t5fTsgXHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJHtjc3Muc2t5fTsgXHJcbiAgICBiYWNrZ3JvdW5kOiAke2Nzcy5ncmV5fTsgXHJcbn1cclxuXHJcblxyXG5kaXYubGF5b3V0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogTmV3cyBDeWNsZSwgQXJpYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICR7Y3NzLmdyZXl9XHJcbiAgICBiYWNrZ3JvdW5kOiAke2Nzcy5uZXV0cmFsfTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5kaXYuYmFzaWNQYWdlIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgbWF4LXdpZHRoOiA5ODBweDtcclxufVxyXG5gfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdfQ== */\n/*@ sourceURL=components\\Layout.js */'
    }));
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJGb290ZXIiLCJIZWFkIiwiY3NzIiwiSGFpSHVpTG9nbyIsIkhvbWVCYW5uZXIiLCJMYXlvdXQiLCJwcm9wcyIsImhvbWVQYWdlIiwiY2hpbGRyZW4iLCJuZXV0cmFsIiwic2t5IiwiZ3JleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVM7Ozs7QUFFaEIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0FBRXZCLElBQU0sYUFBYSxTQUFiLEFBQWEsYUFBQTsyQkFDZixjQUFBOzJDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUE7MkNBQ0ksQUFBZTs7c0JBQWY7d0JBREosQUFDSSxBQUNBO0FBREE7QUFBQSx3QkFDQSxjQUFBOzJDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLEFBQUM7O3NCQUFEO3dCQUhSLEFBRUksQUFDSTtBQUFBO0FBQUE7aUJBSFI7YUFEZSxBQUNmO0FBQUE7QUFESjs7QUEyREEsSUFBTSxTQUFTLFNBQVQsQUFBUyxPQUFBLEFBQUMsT0FBRDsyQkFDYixjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBRU07QUFGTjtBQUFBLEtBQUEsUUFFTSxBQUFNLDBDQUFZLEFBQUM7O3NCQUFEO3dCQUZ4QixBQUV3QixBQUV0QjtBQUZzQjtBQUFBLEtBQUEsbUJBRXRCLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSxvREFBTSxTQUFOLEFBQWMsb0JBQWQ7O3NCQUFBO3dCQUZKLEFBRUksQUFDQTtBQURBO2dEQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCLG9EQUE5Qjs7c0JBQUE7d0JBSEosQUFHSSxBQUNBO0FBREE7Z0RBQ00sTUFBTixBQUFXLHNEQUFxRCxLQUFoRSxBQUFvRSx5QkFBcEU7O3NCQUFBO3dCQUpKLEFBSUksQUFDQTtBQURBO2dEQUNNLE1BQU4sQUFBVyx5REFBd0QsS0FBbkUsQUFBdUUseUJBQXZFOztzQkFBQTt3QkFUTixBQUlFLEFBS0ksQUFFSjtBQUZJO3lCQUVKLEFBQUMsa0NBQU8sVUFBWSxNQUFwQixBQUEwQjtzQkFBMUI7d0JBWEYsQUFXRSxBQUNDO0FBREQ7Y0FYRixBQVlTLEFBQ1AsMEJBQUEsQUFBQzs7c0JBQUQ7d0JBYkYsQUFhRTtBQUFBO0FBQUE7aUJBYkY7NERBb0JnQixnQkFwQmhCLEFBb0JvQix3RUFLSixnQkF6QmhCLEFBeUJvQiwwRUFLRSxnQkE5QnRCLEFBOEIwQix1QkFDVixnQkEvQmhCLEFBK0JvQixxSkFhVCxnQkE1Q1gsQUE0Q2Usd0JBQ0MsZ0JBN0NoQixBQTZDb0IsVUE5Q1AsQUFDYjtBQUFBO0FBREYsQUErREE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkQ6L3Byb2dyYW1taW5nL25vZGVqcy9oZXJva3UvbmV4dC1haGgifQ==