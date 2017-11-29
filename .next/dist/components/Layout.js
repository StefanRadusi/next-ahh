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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\programming\\nodejs\\heroku\\next-ahh\\components\\Layout.js';


var Layout = function Layout(props) {
    return _react2.default.createElement('div', { className: 'layout', 'data-jsx': 2404141446,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('title', {
        'data-jsx': 2404141446,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, 'Hai Hui'), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 2404141446,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx': 2404141446,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=News+Cycle', rel: 'stylesheet', 'data-jsx': 2404141446,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    })), _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }), props.children, _react2.default.createElement(_style2.default, {
        styleId: 2404141446,
        css: 'div.layout{position:absolute;top:0;left:0;width:100%;height:100%;font-size:10px;font-family:News Cycle, Arial;font-weight:300;background:' + _utils2.default.neutral + '}div.basicPage{margin-top:50px;padding:10px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkMsQUFLdUIsQUFjRixpQkFDSCxFQWRQLE9BQ0MsS0FjWCxHQWJlLFlBQ0MsYUFDRyxnQkFDZSwrQkFDZCxpQkFFcEIseUNBQUMiLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkQ6L3Byb2dyYW1taW5nL25vZGVqcy9oZXJva3UvbmV4dC1haGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IGNzcyBmcm9tICcuLi9jc3MvdXRpbHMnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J2xheW91dCc+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5IYWkgSHVpPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5ld3MrQ3ljbGVcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuXHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD5cclxue2BcclxuZGl2LmxheW91dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogTmV3cyBDeWNsZSwgQXJpYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgYmFja2dyb3VuZDogJHtjc3MubmV1dHJhbH1cclxufVxyXG5cclxuZGl2LmJhc2ljUGFnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5gfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdfQ== */\n/*@ sourceURL=componentsLayout.js */'
    }));
};

exports.default = Layout;