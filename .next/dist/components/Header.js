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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\programming\\nodejs\\heroku\\next-ahh\\components\\Header.js';


var Header = function (_Component) {
    (0, _inherits3.default)(Header, _Component);

    function Header() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.headerStructure = [{
            name: 'home',
            url: '/'
        }, {
            name: 'photo-video',
            url: '/photovideo'
        }], _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'header', 'data-jsx': 973330167,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, this.headerStructure.map(function (page) {
                return _react2.default.createElement('div', { key: page.name, className: 'page', 'data-jsx': 973330167,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                }, _react2.default.createElement('p', {
                    'data-jsx': 973330167,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                }, ' ', page.name, ' '), _react2.default.createElement('img', { src: './static/' + page.name + '.png', 'data-jsx': 973330167,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }));
            }), _react2.default.createElement(_style2.default, {
                styleId: 973330167,
                css: 'div.header[data-jsx="973330167"]{position:fixed;top:2%;left:2%}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQjRCLEFBR3VDLGVBQWdDLFFBQWlDLFNBQXFCIiwiZmlsZSI6ImNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJEOi9wcm9ncmFtbWluZy9ub2RlanMvaGVyb2t1L25leHQtYWhoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBoZWFkZXJTdHJ1Y3R1cmUgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lIDogJ2hvbWUnLFxyXG4gICAgICAgICAgICB1cmwgOiAnLydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZSA6ICdwaG90by12aWRlbycsXHJcbiAgICAgICAgICAgIHVybCA6ICcvcGhvdG92aWRlbydcclxuICAgICAgICB9XHJcbiAgICBdXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyU3RydWN0dXJlLm1hcChwYWdlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhZ2UubmFtZX0gY2xhc3NOYW1lPSdwYWdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7IHBhZ2UubmFtZSB9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnLi9zdGF0aWMvJyArIHBhZ2UubmFtZSArICcucG5nJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=components\\Header.js */'
            }));
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;