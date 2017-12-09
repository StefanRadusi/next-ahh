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

var _utils = require('../../css/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\nodejs\\next-ahh\\components\\reusable\\Banner.js';


var Banner = function (_Component) {
    (0, _inherits3.default)(Banner, _Component);

    function Banner() {
        (0, _classCallCheck3.default)(this, Banner);

        return (0, _possibleConstructorReturn3.default)(this, (Banner.__proto__ || (0, _getPrototypeOf2.default)(Banner)).apply(this, arguments));
    }

    (0, _createClass3.default)(Banner, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'animatedTitleSection', 'data-jsx': 3336718259,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }, _react2.default.createElement('div', { className: 'title', 'data-jsx': 3336718259,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, _react2.default.createElement('p', {
                'data-jsx': 3336718259,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, this.props.text)), this.props.svg(), _react2.default.createElement(_style2.default, {
                styleId: 3336718259,
                css: 'div.animatedTitleSection[data-jsx="3336718259"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border:4px solid ' + _utils2.default.sky + ';border-radius:8px;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;' + _utils2.default.boxShadowNone + '}div.animatedTitleSection[data-jsx="3336718259"]:hover{cursor:pointer;-webkit-transform:scale(1.005);-ms-transform:scale(1.005);transform:scale(1.005);' + _utils2.default.boxShadow + '}div.animatedTitleSection[data-jsx="3336718259"]>div[data-jsx="3336718259"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:1;-ms-flex:1;flex:1}p[data-jsx="3336718259"]{width:100%;-webkit-text-align:center;text-align:center;font-size:40px;margin:10px}@media (max-width:400px){p[data-jsx="3336718259"]{font-size:20px}}svg[data-jsx="3336718259"]{-webkit-flex:1;-ms-flex:1;flex:1}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJldXNhYmxlXFxCYW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUEsQUFLa0IsQUFVRSxBQVFILEFBUUQsQUFXUSxBQU9aLFlBakJXLElBaEJLLEFBMkJ2QixvQkFPSixzQkFqQm1CLGdCQVRJLEFBVVAsSUE1QmtDLFNBNkJsRCxhQWxCZ0MseUJBVlYsSUFXdEIsZUFWNkIsMkJBaUJsQixpQ0FoQnFCLEdBaUJoQywwQkFoQkEiLCJmaWxlIjoiY29tcG9uZW50c1xccmV1c2FibGVcXEJhbm5lci5qcyIsInNvdXJjZVJvb3QiOiJGOi9ub2RlanMvbmV4dC1haGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uL2Nzcy91dGlscyc7XHJcblxyXG5jbGFzcyBCYW5uZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbmltYXRlZFRpdGxlU2VjdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnN2ZygpfVxyXG5cclxuICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57XHJcbmBcclxuZGl2LmFuaW1hdGVkVGl0bGVTZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAke2Nzcy5za3l9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICR7Y3NzLmJveFNoYWRvd05vbmV9O1xyXG59XHJcblxyXG5kaXYuYW5pbWF0ZWRUaXRsZVNlY3Rpb246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwNSk7XHJcbiAgICAke2Nzcy5ib3hTaGFkb3d9O1xyXG59XHJcblxyXG5kaXYuYW5pbWF0ZWRUaXRsZVNlY3Rpb24gPiBkaXYge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5zdmcge1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuYFxyXG4gICAgICAgICAgICAgICB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7Il19 */\n/*@ sourceURL=components\reusableBanner.js */'
            }));
        }
    }]);

    return Banner;
}(_react.Component);

exports.default = Banner;