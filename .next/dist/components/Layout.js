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
            lineNumber: 8
        }
    }, _react2.default.createElement('div', { className: 'svgBackGroundRadient', 'data-jsx': 2893439718,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement('div', { className: 'svgContainer', 'data-jsx': 2893439718,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_HaiHuiLogo2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    })), _react2.default.createElement(_style2.default, {
        styleId: 2893439718,
        css: 'div.homeBanner[data-jsx="2893439718"]{position:relative;height:289px;width:100%;background-image:url("./static/homeBanner.png")}div.svgContainer[data-jsx="2893439718"]{width:500px;height:300px;margin:auto}@-webkit-keyframes scaleGradientDivdatajsx2893439718{0%{-webkit-transform:translateX(-50%) translateY(-50%) scale(0);-ms-transform:translateX(-50%) translateY(-50%) scale(0);transform:translateX(-50%) translateY(-50%) scale(0)}100%{-webkit-transform:translateX(-50%) translateY(-50%) scale(1);-ms-transform:translateX(-50%) translateY(-50%) scale(1);transform:translateX(-50%) translateY(-50%) scale(1)}}@keyframes scaleGradientDivdatajsx2893439718{0%{-webkit-transform:translateX(-50%) translateY(-50%) scale(0);-ms-transform:translateX(-50%) translateY(-50%) scale(0);transform:translateX(-50%) translateY(-50%) scale(0)}100%{-webkit-transform:translateX(-50%) translateY(-50%) scale(1);-ms-transform:translateX(-50%) translateY(-50%) scale(1);transform:translateX(-50%) translateY(-50%) scale(1)}}div.svgBackGroundRadient[data-jsx="2893439718"]{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%) scale(0);-ms-transform:translateX(-50%) translateY(-50%) scale(0);transform:translateX(-50%) translateY(-50%) scale(0);width:300px;height:300px;background:radial-gradient(ellipse at center, rgba(239,239,239,1) 20%, rgba(239,239,239,0) 80%);-webkit-animation:scaleGradientDivdatajsx2893439718 2s 2s ease forwards;animation:scaleGradientDivdatajsx2893439718 2s 2s ease forwards}@media (max-width:600px){div.homeBanner[data-jsx="2893439718"]{background-size:1000px 200px;height:200px}div.svgContainer[data-jsx="2893439718"]{width:100%;height:200px}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQSxBQUdzQixBQUdOLEFBRytDLEFBRUEsQUFFeEMsQUFHZSxBQUVuQixXQUFzQixDQVpQLE1BSE0sQ0FVTCxNQUtXLENBWkssQ0FPSCxHQUdZLEVBYkosSUFVbUQsR0FQdkQsS0FIeUQsQUFhNUMsaURBWmhFLG9GQUttRSxBQUVBLG9DQUV1RCxZQUFrQixjQUFxRyxpR0FBb0Qsd0lBQUMiLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkQ6L3Byb2dyYW1taW5nL25vZGVqcy9oZXJva3UvbmV4dC1haGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IGNzcyBmcm9tICcuLi9jc3MvdXRpbHMnO1xyXG5cclxuaW1wb3J0IEhhaUh1aUxvZ28gZnJvbSAnLi9zdmcvSGFpSHVpTG9nby5qcyc7XHJcblxyXG5jb25zdCBIb21lQmFubmVyID0gKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2hvbWVCYW5uZXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdmdCYWNrR3JvdW5kUmFkaWVudCc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N2Z0NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxIYWlIdWlMb2dvIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57XHJcbmBcclxuZGl2LmhvbWVCYW5uZXIge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDI4OXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL3N0YXRpYy9ob21lQmFubmVyLnBuZ1wiKTtcclxuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogMTM1MHB4IDI3NXB4OyAgICBcclxufVxyXG5cclxuZGl2LnN2Z0NvbnRhaW5lciB7ICAgIFxyXG4gICAgd2lkdGg6NTAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNjYWxlR3JhZGllbnREaXYge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogIHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRpdi5zdmdCYWNrR3JvdW5kUmFkaWVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6NTAlO1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMCk7XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMjM5LDIzOSwyMzksMSkgMjAlLCByZ2JhKDIzOSwyMzksMjM5LDApIDgwJSk7XHJcbiAgICBhbmltYXRpb246IHNjYWxlR3JhZGllbnREaXYgMnMgMnMgZWFzZSBmb3J3YXJkcztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBkaXYuaG9tZUJhbm5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAwcHggMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBkaXYuc3ZnQ29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuYFxyXG4gICAgICAgIH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT0nbGF5b3V0Jz5cclxuICAgIHtcclxuICAgICAgICBwcm9wcy5ob21lUGFnZSAmJiA8SG9tZUJhbm5lciAvPlxyXG4gICAgfVxyXG4gICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkhhaSBIdWk8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TmV3cytDeWNsZVwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8SGVhZGVyIGhvbWVQYWdlID0ge3Byb3BzLmhvbWVQYWdlfS8+XHJcbiAgICB7cHJvcHMuY2hpbGRyZW59XHJcblxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbntgXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogJHtjc3MubmV1dHJhbH07IFxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6ICR7Y3NzLnNreX07IFxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLnNreX07IFxyXG4gICAgYmFja2dyb3VuZDogJHtjc3MuZ3JleX07IFxyXG59XHJcblxyXG5cclxuZGl2LmxheW91dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE5ld3MgQ3ljbGUsIEFyaWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGJhY2tncm91bmQ6ICR7Y3NzLm5ldXRyYWx9XHJcbn1cclxuXHJcbmRpdi5iYXNpY1BhZ2Uge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICBtYXgtd2lkdGg6IDk4MHB4O1xyXG59XHJcbmB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=components\\Layout.js */'
    }));
};

var Layout = function Layout(props) {
    return _react2.default.createElement('div', { className: 'layout', 'data-jsx': 2423455109,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 67
        }
    }, props.homePage && _react2.default.createElement(HomeBanner, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }), _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }, _react2.default.createElement('title', {
        'data-jsx': 2423455109,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 72
        }
    }, 'Hai Hui'), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 2423455109,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 73
        }
    }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx': 2423455109,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 74
        }
    }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=News+Cycle', rel: 'stylesheet', 'data-jsx': 2423455109,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 75
        }
    })), _react2.default.createElement(_Header2.default, { homePage: props.homePage, __source: {
            fileName: _jsxFileName,
            lineNumber: 77
        }
    }), props.children, _react2.default.createElement(_style2.default, {
        styleId: 2423455109,
        css: '::-webkit-scrollbar{width:10px;background:' + _utils2.default.neutral + '}::-webkit-scrollbar-track{border-radius:8px;background:' + _utils2.default.sky + '}::-webkit-scrollbar-thumb{border-radius:6px;border:2px solid ' + _utils2.default.sky + ';background:' + _utils2.default.grey + '}div.layout{position:absolute;top:0;left:0;width:100%;min-height:100%;font-size:10px;font-family:News Cycle, Arial;font-weight:300;background:' + _utils2.default.neutral + '}div.basicPage{margin:auto;margin-top:50px;padding:10px;width:calc(100% - 20px);max-width:980px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRkMsQUFPZ0IsQUFRTyxBQVFBLEFBWUEsQUFjTixZQXpDNEIsQ0EwQ3hCLE1BbEN3QixBQVFNLEFBWXhDLE9BQ0MsSUFjTSxJQWJGLFVBY2EsRUFiUixPQTdCcEIsT0FRQSxHQXNCbUIsR0FkeUIsR0EyQnhCLFVBWmMsT0FhbEMscUJBMUJBLEdBY29CLGlCQUVwQix5Q0FBQyIsImZpbGUiOiJjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiRDovcHJvZ3JhbW1pbmcvbm9kZWpzL2hlcm9rdS9uZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgY3NzIGZyb20gJy4uL2Nzcy91dGlscyc7XHJcblxyXG5pbXBvcnQgSGFpSHVpTG9nbyBmcm9tICcuL3N2Zy9IYWlIdWlMb2dvLmpzJztcclxuXHJcbmNvbnN0IEhvbWVCYW5uZXIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZUJhbm5lcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N2Z0JhY2tHcm91bmRSYWRpZW50Jz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ZnQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgPEhhaUh1aUxvZ28gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntcclxuYFxyXG5kaXYuaG9tZUJhbm5lciB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjg5cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vc3RhdGljL2hvbWVCYW5uZXIucG5nXCIpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiAxMzUwcHggMjc1cHg7ICAgIFxyXG59XHJcblxyXG5kaXYuc3ZnQ29udGFpbmVyIHsgICAgXHJcbiAgICB3aWR0aDo1MDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2NhbGVHcmFkaWVudERpdiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDApO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogIHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxKTtcclxuICAgIH1cclxufVxyXG5cclxuZGl2LnN2Z0JhY2tHcm91bmRSYWRpZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTogIHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgwKTtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgcmdiYSgyMzksMjM5LDIzOSwxKSAyMCUsIHJnYmEoMjM5LDIzOSwyMzksMCkgODAlKTtcclxuICAgIGFuaW1hdGlvbjogc2NhbGVHcmFkaWVudERpdiAycyAycyBlYXNlIGZvcndhcmRzO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGRpdi5ob21lQmFubmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMDBweCAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5zdmdDb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxufVxyXG5gXHJcbiAgICAgICAgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQnPlxyXG4gICAge1xyXG4gICAgICAgIHByb3BzLmhvbWVQYWdlICYmIDxIb21lQmFubmVyIC8+XHJcbiAgICB9XHJcbiAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SGFpIEh1aTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OZXdzK0N5Y2xlXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxIZWFkZXIgaG9tZVBhZ2UgPSB7cHJvcHMuaG9tZVBhZ2V9Lz5cclxuICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuXHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD5cclxue2BcclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAke2Nzcy5uZXV0cmFsfTsgXHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogJHtjc3Muc2t5fTsgXHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJHtjc3Muc2t5fTsgXHJcbiAgICBiYWNrZ3JvdW5kOiAke2Nzcy5ncmV5fTsgXHJcbn1cclxuXHJcblxyXG5kaXYubGF5b3V0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogTmV3cyBDeWNsZSwgQXJpYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgYmFja2dyb3VuZDogJHtjc3MubmV1dHJhbH1cclxufVxyXG5cclxuZGl2LmJhc2ljUGFnZSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgIG1heC13aWR0aDogOTgwcHg7XHJcbn1cclxuYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=componentsLayout.js */'
    }));
};

exports.default = Layout;