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

var _jsxFileName = 'D:\\programming\\nodejs\\heroku\\next-ahh\\components\\reusable\\Banner.js';


var Banner = function (_Component) {
    (0, _inherits3.default)(Banner, _Component);

    function Banner() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Banner);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Banner.__proto__ || (0, _getPrototypeOf2.default)(Banner)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            hover: false
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Banner, [{
        key: 'toggleHover',
        value: function toggleHover() {
            console.log('in');
            this.state.hover = !this.state.hover;
            this.setState(this.state);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { onMouseEnter: this.toggleHover.bind(this), onMouseLeave: this.toggleHover.bind(this), className: 'jsx-1746267273' + ' ' + 'animatedTitleSection',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-1746267273' + ' ' + ((this.props.reverse ? 'title reverse' : 'title') || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement('p', {
                className: 'jsx-1746267273',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, this.props.text)), _react2.default.createElement(this.props.svg, {
                hover: this.state.hover,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }), _react2.default.createElement(_style2.default, {
                styleId: '1746267273',
                css: 'div.animatedTitleSection.jsx-1746267273{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border:4px solid ' + _utils2.default.sky + ';border-radius:8px;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;margin-bottom:10px;' + _utils2.default.boxShadowNone + ';}div.animatedTitleSection.jsx-1746267273:hover{cursor:pointer;-webkit-transform:scale(1.005);-ms-transform:scale(1.005);transform:scale(1.005);' + _utils2.default.boxShadow + ';}div.animatedTitleSection.jsx-1746267273>div.jsx-1746267273{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:1;-ms-flex:1;flex:1;min-width:40%;}p.jsx-1746267273{width:100%;text-align:center;font-size:50px;margin:10px;font-family:\'Amatic SC\',cursive;}@media (max-width:600px){p.jsx-1746267273{font-size:30px;}}@media (max-width:500px){p.jsx-1746267273{font-size:20px;}}svg.jsx-1746267273{-webkit-flex:1;-ms-flex:1;flex:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJldXNhYmxlXFxCYW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJBLEFBR2tCLEFBU0UsQUFNSCxBQVdELEFBU1EsQUFNQSxBQU1aLFdBcEJXLElBakJLLEFBMEJ2QixBQU1BLGNBZGUsSUFvQm5CLFdBbkJnQixZQUNxQixrQkE3QmEsQUFlM0IsY0FldkIsUUFwQmdDLHdCQVRWLEtBVXRCLGFBVDZCLDZCQWNsQiw2QkFiWSxJQWNOLGNBQ2pCLENBZGdDLDZCQUNoQyIsImZpbGUiOiJjb21wb25lbnRzXFxyZXVzYWJsZVxcQmFubmVyLmpzIiwic291cmNlUm9vdCI6IkQ6L3Byb2dyYW1taW5nL25vZGVqcy9oZXJva3UvbmV4dC1haGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uL2Nzcy91dGlscyc7XHJcblxyXG5jbGFzcyBCYW5uZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgaG92ZXIgOiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUhvdmVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbicpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuaG92ZXIgPSAhdGhpcy5zdGF0ZS5ob3ZlcjtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYW5pbWF0ZWRUaXRsZVNlY3Rpb24nIG9uTW91c2VFbnRlcj17dGhpcy50b2dnbGVIb3Zlci5iaW5kKHRoaXMpfSBvbk1vdXNlTGVhdmU9e3RoaXMudG9nZ2xlSG92ZXIuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5yZXZlcnNlID8gJ3RpdGxlIHJldmVyc2UnIDogJ3RpdGxlJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMudGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx0aGlzLnByb3BzLnN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyID0ge3RoaXMuc3RhdGUuaG92ZXJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57XHJcbmBcclxuZGl2LmFuaW1hdGVkVGl0bGVTZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAke2Nzcy5za3l9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAke2Nzcy5ib3hTaGFkb3dOb25lfTtcclxufVxyXG5cclxuZGl2LmFuaW1hdGVkVGl0bGVTZWN0aW9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDUpO1xyXG4gICAgJHtjc3MuYm94U2hhZG93fTtcclxufVxyXG5cclxuZGl2LmFuaW1hdGVkVGl0bGVTZWN0aW9uID4gZGl2IHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWluLXdpZHRoOjQwJTtcclxufVxyXG5cclxuZGl2LmFuaW1hdGVkVGl0bGVTZWN0aW9uID4gZGl2LnRpdGxlLnJldmVyc2Uge1xyXG4gICAgLy8gb3JkZXI6IDI7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbnN2ZyB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG5gXHJcbiAgICAgICAgICAgICAgIH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjsiXX0= */\n/*@ sourceURL=components\\reusable\\Banner.js */'
            }));
        }
    }]);

    return Banner;
}(_react.Component);

exports.default = Banner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJldXNhYmxlXFxCYW5uZXIuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiY3NzIiwiQmFubmVyIiwic3RhdGUiLCJob3ZlciIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInRvZ2dsZUhvdmVyIiwiYmluZCIsInByb3BzIiwicmV2ZXJzZSIsInRleHQiLCJza3kiLCJib3hTaGFkb3dOb25lIiwiYm94U2hhZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFROzs7O0FBQ1IsQUFBTyxBQUFTOzs7Ozs7Ozs7SUFFVixBOzs7Ozs7Ozs7Ozs7OztnTixBQUNGO21CQUFRLEFBQ0ksQTtBQURKLEFBQ0o7Ozs7O3NDQUdVLEFBQ1Y7b0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtpQkFBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLENBQUMsS0FBQSxBQUFLLE1BQXpCLEFBQStCLEFBQy9CO2lCQUFBLEFBQUssU0FBUyxLQUFkLEFBQW1CLEFBQ3RCOzs7O2lDQUVRLEFBQ0w7bUNBQ0ksY0FBQSxTQUFzQyxjQUFjLEtBQUEsQUFBSyxZQUFMLEFBQWlCLEtBQXJFLEFBQW9ELEFBQXNCLE9BQU8sY0FBYyxLQUFBLEFBQUssWUFBTCxBQUFpQixLQUFoSCxBQUErRixBQUFzQiwyQ0FBckgsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksY0FBQTtzREFBZ0IsS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLGtCQUFyQyxBQUF1RCxZQUF2RDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsb0JBQUksQUFBSyxNQUZqQixBQUNJLEFBQ0ksQUFBZSxBQUVuQiwyQ0FBQSxBQUFNLE1BQU4sQUFBWTt1QkFDQyxLQUFBLEFBQUssTUFEbEIsQUFDd0I7OzhCQUR4QjtnQ0FKSixBQUlJO0FBQUE7QUFDSTt5QkFMUjs2SkFZWSxnQkFaWixBQVlnQiwyR0FJdEIsZ0JBaEJNLEFBZ0JGLHFLQU1KLGdCQXRCTSxBQXNCRixZQXZCRixBQUNJLEFBaUVQO0FBakVPOzs7OztBQWJTLEEsQUFpRnJCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkJhbm5lci5qcyIsInNvdXJjZVJvb3QiOiJEOi9wcm9ncmFtbWluZy9ub2RlanMvaGVyb2t1L25leHQtYWhoIn0=