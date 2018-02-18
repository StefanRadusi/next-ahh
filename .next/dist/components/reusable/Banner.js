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

var _utils = require('../../css/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stefan.radusi/projects/haihui/next-ahh/components/reusable/Banner.js';


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
        key: 'animateSvg',
        value: function animateSvg() {
            this.state.hover = true;
            this.setState(this.state);
        }
    }, {
        key: 'removeAnimationSvg',
        value: function removeAnimationSvg() {
            this.state.hover = false;
            this.setState(this.state);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // console.log('mount');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { onMouseEnter: this.animateSvg.bind(this), onMouseLeave: this.removeAnimationSvg.bind(this), className: 'jsx-1561127842' + ' ' + 'animatedTitleSection',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-1561127842' + ' ' + 'title',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement('p', {
                className: 'jsx-1561127842',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, this.props.text)), _react2.default.createElement(this.props.svg, {
                hover: this.state.hover,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }), _react2.default.createElement(_style2.default, {
                styleId: '1561127842',
                css: 'div.animatedTitleSection.jsx-1561127842{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border:4px solid ' + _utils2.default.sky + ';border-radius:8px;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;margin-bottom:10px;' + _utils2.default.boxShadowNone + ';}div.animatedTitleSection.jsx-1561127842:hover{cursor:pointer;-webkit-transform:scale(1.005);-ms-transform:scale(1.005);transform:scale(1.005);' + _utils2.default.boxShadow + ';}div.animatedTitleSection.jsx-1561127842>div.jsx-1561127842{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:1;-ms-flex:1;flex:1;min-width:40%;}p.jsx-1561127842{width:100%;text-align:center;font-size:50px;margin:10px;font-family:\'Amatic SC\',cursive;text-decoration:none;color:' + _utils2.default.grey + ';}@media (max-width:600px){p.jsx-1561127842{font-size:30px;}}@media (max-width:500px){p.jsx-1561127842{font-size:20px;}}svg.jsx-1561127842{-webkit-flex:1;-ms-flex:1;flex:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmV1c2FibGUvQmFubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDQSxBQUdrQixBQVNFLEFBTUgsQUFPRCxBQVVRLEFBTUEsQUFNWixXQXJCVyxJQWJLLEFBdUJ2QixBQU1BLGNBZmUsSUFxQm5CLFdBcEJnQixZQUNxQixrQkF6QmEsQUFlM0IsY0FXRSxRQWhCTyxhQWlCTyxXQTFCakIsS0FVdEIsYUFUNkIsTUF5QlcsdUJBWDdCLDZCQWJZLElBY04sY0FDakIsQ0FkZ0MsNkJBQ2hDIiwiZmlsZSI6ImNvbXBvbmVudHMvcmV1c2FibGUvQmFubmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zdGVmYW4ucmFkdXNpL3Byb2plY3RzL2hhaWh1aS9uZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uL2Nzcy91dGlscyc7XG5cbmNsYXNzIEJhbm5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGhvdmVyIDogZmFsc2VcbiAgICB9XG5cbiAgICBhbmltYXRlU3ZnKCkge1xuICAgICAgICB0aGlzLnN0YXRlLmhvdmVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB9XG5cbiAgICByZW1vdmVBbmltYXRpb25TdmcoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuaG92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ21vdW50Jyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FuaW1hdGVkVGl0bGVTZWN0aW9uJyBvbk1vdXNlRW50ZXI9e3RoaXMuYW5pbWF0ZVN2Zy5iaW5kKHRoaXMpfSBvbk1vdXNlTGVhdmU9e3RoaXMucmVtb3ZlQW5pbWF0aW9uU3ZnLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx0aGlzLnByb3BzLnN2Z1xuICAgICAgICAgICAgICAgICAgICBob3ZlciA9IHt0aGlzLnN0YXRlLmhvdmVyfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e1xuYFxuZGl2LmFuaW1hdGVkVGl0bGVTZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICR7Y3NzLnNreX07XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAke2Nzcy5ib3hTaGFkb3dOb25lfTtcbn1cblxuZGl2LmFuaW1hdGVkVGl0bGVTZWN0aW9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwNSk7XG4gICAgJHtjc3MuYm94U2hhZG93fTtcbn1cblxuZGl2LmFuaW1hdGVkVGl0bGVTZWN0aW9uID4gZGl2IHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDo0MCU7XG59XG5cbnAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQW1hdGljIFNDJywgY3Vyc2l2ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICR7Y3NzLmdyZXl9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbn1cblxuXG5zdmcge1xuICAgIGZsZXg6IDE7XG59XG5cbmBcbiAgICAgICAgICAgICAgIH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjsiXX0= */\n/*@ sourceURL=components/reusable/Banner.js */'
            }));
        }
    }]);

    return Banner;
}(_react.Component);

exports.default = Banner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmV1c2FibGUvQmFubmVyLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImNzcyIsIkJhbm5lciIsInN0YXRlIiwiaG92ZXIiLCJzZXRTdGF0ZSIsImFuaW1hdGVTdmciLCJiaW5kIiwicmVtb3ZlQW5pbWF0aW9uU3ZnIiwicHJvcHMiLCJ0ZXh0Iiwic2t5IiwiYm94U2hhZG93Tm9uZSIsImJveFNoYWRvdyIsImdyZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVE7Ozs7QUFDUixBQUFPLEFBQVM7Ozs7Ozs7OztJLEFBRVY7Ozs7Ozs7Ozs7Ozs7O2dOLEFBQ0Y7bUJBQVEsQSxBQUNJO0FBREosQUFDSjs7Ozs7cUNBR1MsQUFDVDtpQkFBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLEFBQ25CO2lCQUFBLEFBQUssU0FBUyxLQUFkLEFBQW1CLEFBQ3RCOzs7OzZDQUVvQixBQUNqQjtpQkFBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLEFBQ25CO2lCQUFBLEFBQUssU0FBUyxLQUFkLEFBQW1CLEFBQ3RCOzs7OzRDQUVtQixBQUNoQjtBQUNIOzs7O2lDQUVRLEFBQ0w7bUNBQ0ksY0FBQSxTQUFzQyxjQUFjLEtBQUEsQUFBSyxXQUFMLEFBQWdCLEtBQXBFLEFBQW9ELEFBQXFCLE9BQU8sY0FBYyxLQUFBLEFBQUssbUJBQUwsQUFBd0IsS0FBdEgsQUFBOEYsQUFBNkIsMkNBQTNILEFBQWU7OzhCQUFmO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLGNBQUE7b0RBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsb0JBQUksQUFBSyxNQUZqQixBQUNJLEFBQ0ksQUFBZSxBQUVuQiwyQ0FBQSxBQUFNLE1BQU4sQUFBWTt1QkFDQyxLQUFBLEFBQUssTUFEbEIsQUFDd0I7OzhCQUR4QjtnQ0FKSixBQUlJO0FBQUE7QUFDSTt5QkFMUjs2SkFZWSxnQkFaWixBQVlnQiwyR0FJdEIsZ0JBaEJNLEFBZ0JGLHFLQU1KLGdCQXRCTSxBQXNCRiwyYUFpQkcsZ0JBdkNELEFBdUNLLE9BeENULEFBQ0ksQUErRFA7QUEvRE87Ozs7O0FBckJTLEEsQUF1RnJCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkJhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3RlZmFuLnJhZHVzaS9wcm9qZWN0cy9oYWlodWkvbmV4dC1haGgifQ==