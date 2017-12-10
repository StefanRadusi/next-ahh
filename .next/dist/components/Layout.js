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
    return _react2.default.createElement('div', { className: 'homeBanner', 'data-jsx': 2893439718,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('div', { className: 'svgBackGroundRadient', 'data-jsx': 2893439718,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), _react2.default.createElement('div', { className: 'svgContainer', 'data-jsx': 2893439718,
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
        styleId: 2893439718,
        css: 'div.homeBanner[data-jsx="2893439718"]{position:relative;height:289px;width:100%;background-image:url("./static/homeBanner.png")}div.svgContainer[data-jsx="2893439718"]{width:500px;height:300px;margin:auto}@-webkit-keyframes scaleGradientDivdatajsx2893439718{0%{-webkit-transform:translateX(-50%) translateY(-50%) scale(0);-ms-transform:translateX(-50%) translateY(-50%) scale(0);transform:translateX(-50%) translateY(-50%) scale(0)}100%{-webkit-transform:translateX(-50%) translateY(-50%) scale(1);-ms-transform:translateX(-50%) translateY(-50%) scale(1);transform:translateX(-50%) translateY(-50%) scale(1)}}@keyframes scaleGradientDivdatajsx2893439718{0%{-webkit-transform:translateX(-50%) translateY(-50%) scale(0);-ms-transform:translateX(-50%) translateY(-50%) scale(0);transform:translateX(-50%) translateY(-50%) scale(0)}100%{-webkit-transform:translateX(-50%) translateY(-50%) scale(1);-ms-transform:translateX(-50%) translateY(-50%) scale(1);transform:translateX(-50%) translateY(-50%) scale(1)}}div.svgBackGroundRadient[data-jsx="2893439718"]{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%) scale(0);-ms-transform:translateX(-50%) translateY(-50%) scale(0);transform:translateX(-50%) translateY(-50%) scale(0);width:300px;height:300px;background:radial-gradient(ellipse at center, rgba(239,239,239,1) 20%, rgba(239,239,239,0) 80%);-webkit-animation:scaleGradientDivdatajsx2893439718 2s 2s ease forwards;animation:scaleGradientDivdatajsx2893439718 2s 2s ease forwards}@media (max-width:600px){div.homeBanner[data-jsx="2893439718"]{background-size:1000px 200px;height:200px}div.svgContainer[data-jsx="2893439718"]{width:100%;height:200px}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQSxBQUdzQixBQUdOLEFBRytDLEFBRUEsQUFFeEMsQUFHZSxBQUVuQixXQUFzQixDQVpQLE1BSE0sQ0FVTCxNQUtXLENBWkssQ0FPSCxHQUdZLEVBYkosSUFVbUQsR0FQdkQsS0FIeUQsQUFhNUMsaURBWmhFLG9GQUttRSxBQUVBLG9DQUV1RCxZQUFrQixjQUFxRyxpR0FBb0Qsd0lBQUMiLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkQ6L3Byb2dyYW1taW5nL25vZGVqcy9oZXJva3UvbmV4dC1haGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBjc3MgZnJvbSAnLi4vY3NzL3V0aWxzJztcclxuXHJcbmltcG9ydCBIYWlIdWlMb2dvIGZyb20gJy4vc3ZnL0hhaUh1aUxvZ28uanMnO1xyXG5cclxuY29uc3QgSG9tZUJhbm5lciA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdob21lQmFubmVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ZnQmFja0dyb3VuZFJhZGllbnQnPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdmdDb250YWluZXInPlxyXG4gICAgICAgICAgICA8SGFpSHVpTG9nbyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e1xyXG5gXHJcbmRpdi5ob21lQmFubmVyIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyODlweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9zdGF0aWMvaG9tZUJhbm5lci5wbmdcIik7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IDEzNTBweCAyNzVweDsgICAgXHJcbn1cclxuXHJcbmRpdi5zdmdDb250YWluZXIgeyAgICBcclxuICAgIHdpZHRoOjUwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzY2FsZUdyYWRpZW50RGl2IHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXYuc3ZnQmFja0dyb3VuZFJhZGllbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDApO1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCByZ2JhKDIzOSwyMzksMjM5LDEpIDIwJSwgcmdiYSgyMzksMjM5LDIzOSwwKSA4MCUpO1xyXG4gICAgYW5pbWF0aW9uOiBzY2FsZUdyYWRpZW50RGl2IDJzIDJzIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgZGl2LmhvbWVCYW5uZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwMHB4IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LnN2Z0NvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG59XHJcbmBcclxuICAgICAgICB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J2xheW91dCc+XHJcbiAgICB7XHJcbiAgICAgICAgcHJvcHMuaG9tZVBhZ2UgJiYgPEhvbWVCYW5uZXIgLz5cclxuICAgIH1cclxuICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5IYWkgSHVpPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5ld3MrQ3ljbGVcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QW1hdGljK1NDOjcwMFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8SGVhZGVyIGhvbWVQYWdlID0ge3Byb3BzLmhvbWVQYWdlfS8+XHJcbiAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8Rm9vdGVyIC8+XHJcblxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbntgXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogJHtjc3MubmV1dHJhbH07IFxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6ICR7Y3NzLnNreX07IFxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLnNreX07IFxyXG4gICAgYmFja2dyb3VuZDogJHtjc3MuZ3JleX07IFxyXG59XHJcblxyXG5cclxuZGl2LmxheW91dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE5ld3MgQ3ljbGUsIEFyaWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAke2Nzcy5ncmV5fVxyXG4gICAgYmFja2dyb3VuZDogJHtjc3MubmV1dHJhbH07XHJcbn1cclxuXHJcbmRpdi5iYXNpY1BhZ2Uge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICBtYXgtd2lkdGg6IDk4MHB4O1xyXG59XHJcbmB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=components\\Layout.js */'
    }));
};

var Layout = function Layout(props) {
    return _react2.default.createElement('div', { className: 'layout', 'data-jsx': 3033118104,
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
        'data-jsx': 3033118104,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 73
        }
    }, 'Hai Hui'), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 3033118104,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 74
        }
    }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx': 3033118104,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 75
        }
    }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=News+Cycle', rel: 'stylesheet', 'data-jsx': 3033118104,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 76
        }
    }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Amatic+SC:700', rel: 'stylesheet', 'data-jsx': 3033118104,
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
        styleId: 3033118104,
        css: '::-webkit-scrollbar{width:10px;background:' + _utils2.default.neutral + '}::-webkit-scrollbar-track{border-radius:8px;background:' + _utils2.default.sky + '}::-webkit-scrollbar-thumb{border-radius:6px;border:2px solid ' + _utils2.default.sky + ';background:' + _utils2.default.grey + '}div.layout{position:absolute;top:0;left:0;width:100%;min-height:100%;font-size:10px;font-family:News Cycle, Arial;font-weight:300;color:' + _utils2.default.grey + ';background:' + _utils2.default.neutral + '}div.basicPage{margin:auto;margin-top:50px;padding:10px;width:calc(100% - 20px);max-width:980px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRkMsQUFPZ0IsQUFRTyxBQVFBLEFBWUEsQUFlTixZQTFDNEIsQ0EyQ3hCLE1BbkN3QixBQVFNLEFBWXhDLE9BQ0MsSUFlTSxJQWRGLFVBZWEsRUFkUixPQTdCcEIsT0FRQSxHQXNCbUIsR0FkeUIsR0E0QnhCLFVBYmMsT0FjbEMscUJBM0JBLEdBY29CLGlCQUVwQixvQ0FBNkMseUNBQzdDIiwiZmlsZSI6ImNvbXBvbmVudHNcXExheW91dC5qcyIsInNvdXJjZVJvb3QiOiJEOi9wcm9ncmFtbWluZy9ub2RlanMvaGVyb2t1L25leHQtYWhoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgY3NzIGZyb20gJy4uL2Nzcy91dGlscyc7XHJcblxyXG5pbXBvcnQgSGFpSHVpTG9nbyBmcm9tICcuL3N2Zy9IYWlIdWlMb2dvLmpzJztcclxuXHJcbmNvbnN0IEhvbWVCYW5uZXIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZUJhbm5lcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N2Z0JhY2tHcm91bmRSYWRpZW50Jz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ZnQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgPEhhaUh1aUxvZ28gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntcclxuYFxyXG5kaXYuaG9tZUJhbm5lciB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjg5cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vc3RhdGljL2hvbWVCYW5uZXIucG5nXCIpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiAxMzUwcHggMjc1cHg7ICAgIFxyXG59XHJcblxyXG5kaXYuc3ZnQ29udGFpbmVyIHsgICAgXHJcbiAgICB3aWR0aDo1MDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2NhbGVHcmFkaWVudERpdiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDApO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogIHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxKTtcclxuICAgIH1cclxufVxyXG5cclxuZGl2LnN2Z0JhY2tHcm91bmRSYWRpZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTogIHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgwKTtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgcmdiYSgyMzksMjM5LDIzOSwxKSAyMCUsIHJnYmEoMjM5LDIzOSwyMzksMCkgODAlKTtcclxuICAgIGFuaW1hdGlvbjogc2NhbGVHcmFkaWVudERpdiAycyAycyBlYXNlIGZvcndhcmRzO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGRpdi5ob21lQmFubmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMDBweCAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5zdmdDb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxufVxyXG5gXHJcbiAgICAgICAgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQnPlxyXG4gICAge1xyXG4gICAgICAgIHByb3BzLmhvbWVQYWdlICYmIDxIb21lQmFubmVyIC8+XHJcbiAgICB9XHJcbiAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SGFpIEh1aTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OZXdzK0N5Y2xlXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFtYXRpYytTQzo3MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPEhlYWRlciBob21lUGFnZSA9IHtwcm9wcy5ob21lUGFnZX0vPlxyXG4gICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPEZvb3RlciAvPlxyXG5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG57YFxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICR7Y3NzLm5ldXRyYWx9OyBcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAke2Nzcy5za3l9OyBcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAke2Nzcy5za3l9OyBcclxuICAgIGJhY2tncm91bmQ6ICR7Y3NzLmdyZXl9OyBcclxufVxyXG5cclxuXHJcbmRpdi5sYXlvdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBOZXdzIEN5Y2xlLCBBcmlhbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogJHtjc3MuZ3JleX1cclxuICAgIGJhY2tncm91bmQ6ICR7Y3NzLm5ldXRyYWx9O1xyXG59XHJcblxyXG5kaXYuYmFzaWNQYWdlIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgbWF4LXdpZHRoOiA5ODBweDtcclxufVxyXG5gfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdfQ== */\n/*@ sourceURL=componentsLayout.js */'
    }));
};

exports.default = Layout;