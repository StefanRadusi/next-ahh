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

var _jsxFileName = 'C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\reusable\\Banner.js';


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
            return _react2.default.createElement('div', { onMouseEnter: this.animateSvg.bind(this), onMouseLeave: this.removeAnimationSvg.bind(this), className: 'jsx-2397281280' + ' ' + 'animatedTitleSection',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2397281280' + ' ' + 'title',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement('p', {
                className: 'jsx-2397281280',
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
                styleId: '2397281280',
                css: 'div.animatedTitleSection.jsx-2397281280{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border:4px solid ' + _utils2.default.sky + ';border-radius:8px;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;margin-bottom:10px;' + _utils2.default.boxShadowNone + ';}div.animatedTitleSection.jsx-2397281280:hover{cursor:pointer;-webkit-transform:scale(1.005);-ms-transform:scale(1.005);transform:scale(1.005);' + _utils2.default.boxShadow + ';}div.animatedTitleSection.jsx-2397281280>div.jsx-2397281280{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:1;-ms-flex:1;flex:1;min-width:40%;}p.jsx-2397281280{width:100%;text-align:center;font-size:50px;margin:10px;font-family:\'Amatic SC\',cursive;text-decoration:none;color:' + _utils2.default.grey + ';}@media (max-width:600px){p.jsx-2397281280{font-size:30px;}}@media (max-width:500px){p.jsx-2397281280{font-size:20px;}}svg.jsx-2397281280{-webkit-flex:1;-ms-flex:1;flex:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJldXNhYmxlXFxCYW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNBLEFBR2tCLEFBU0UsQUFNSCxBQU9ELEFBVVEsQUFNQSxBQU1aLFdBckJXLElBYkssQUF1QnZCLEFBTUEsY0FmZSxJQXFCbkIsV0FwQmdCLFlBQ3FCLGtCQXpCYSxBQWUzQixjQVdFLFFBaEJPLGFBaUJPLFdBMUJqQixLQVV0QixhQVQ2QixNQXlCVyx1QkFYN0IsNkJBYlksSUFjTixjQUNqQixDQWRnQyw2QkFDaEMiLCJmaWxlIjoiY29tcG9uZW50c1xccmV1c2FibGVcXEJhbm5lci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9zdGVmYS9wcm9ncmFtbWluZy9BdGVsaWVydWxIYWlIdWkvbmV4dC1haGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uL2Nzcy91dGlscyc7XHJcblxyXG5jbGFzcyBCYW5uZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgaG92ZXIgOiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGVTdmcoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5ob3ZlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBbmltYXRpb25TdmcoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5ob3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ21vdW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbmltYXRlZFRpdGxlU2VjdGlvbicgb25Nb3VzZUVudGVyPXt0aGlzLmFuaW1hdGVTdmcuYmluZCh0aGlzKX0gb25Nb3VzZUxlYXZlPXt0aGlzLnJlbW92ZUFuaW1hdGlvblN2Zy5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMudGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx0aGlzLnByb3BzLnN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyID0ge3RoaXMuc3RhdGUuaG92ZXJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57XHJcbmBcclxuZGl2LmFuaW1hdGVkVGl0bGVTZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAke2Nzcy5za3l9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAke2Nzcy5ib3hTaGFkb3dOb25lfTtcclxufVxyXG5cclxuZGl2LmFuaW1hdGVkVGl0bGVTZWN0aW9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDUpO1xyXG4gICAgJHtjc3MuYm94U2hhZG93fTtcclxufVxyXG5cclxuZGl2LmFuaW1hdGVkVGl0bGVTZWN0aW9uID4gZGl2IHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWluLXdpZHRoOjQwJTtcclxufVxyXG5cclxucCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQW1hdGljIFNDJywgY3Vyc2l2ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAke2Nzcy5ncmV5fVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5zdmcge1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuYFxyXG4gICAgICAgICAgICAgICB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7Il19 */\n/*@ sourceURL=components\\reusable\\Banner.js */'
            }));
        }
    }]);

    return Banner;
}(_react.Component);

exports.default = Banner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJldXNhYmxlXFxCYW5uZXIuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiY3NzIiwiQmFubmVyIiwic3RhdGUiLCJob3ZlciIsInNldFN0YXRlIiwiYW5pbWF0ZVN2ZyIsImJpbmQiLCJyZW1vdmVBbmltYXRpb25TdmciLCJwcm9wcyIsInRleHQiLCJza3kiLCJib3hTaGFkb3dOb25lIiwiYm94U2hhZG93IiwiZ3JleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUTs7OztBQUNSLEFBQU8sQUFBUzs7Ozs7Ozs7O0ksQUFFVjs7Ozs7Ozs7Ozs7Ozs7Z04sQUFDRjttQkFBUSxBLEFBQ0k7QUFESixBQUNKOzs7OztxQ0FHUyxBQUNUO2lCQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsQUFDbkI7aUJBQUEsQUFBSyxTQUFTLEtBQWQsQUFBbUIsQUFDdEI7Ozs7NkNBRW9CLEFBQ2pCO2lCQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsQUFDbkI7aUJBQUEsQUFBSyxTQUFTLEtBQWQsQUFBbUIsQUFDdEI7Ozs7NENBRW1CLEFBQ2hCO0FBQ0g7Ozs7aUNBRVEsQUFDTDttQ0FDSSxjQUFBLFNBQXNDLGNBQWMsS0FBQSxBQUFLLFdBQUwsQUFBZ0IsS0FBcEUsQUFBb0QsQUFBcUIsT0FBTyxjQUFjLEtBQUEsQUFBSyxtQkFBTCxBQUF3QixLQUF0SCxBQUE4RixBQUE2QiwyQ0FBM0gsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksY0FBQTtvREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSxvQkFBSSxBQUFLLE1BRmpCLEFBQ0ksQUFDSSxBQUFlLEFBRW5CLDJDQUFBLEFBQU0sTUFBTixBQUFZO3VCQUNDLEtBQUEsQUFBSyxNQURsQixBQUN3Qjs7OEJBRHhCO2dDQUpKLEFBSUk7QUFBQTtBQUNJO3lCQUxSOzZKQVlZLGdCQVpaLEFBWWdCLDJHQUl0QixnQkFoQk0sQUFnQkYscUtBTUosZ0JBdEJNLEFBc0JGLDJhQWlCRyxnQkF2Q0QsQUF1Q0ssT0F4Q1QsQUFDSSxBQStEUDtBQS9ETzs7Ozs7QUFyQlMsQSxBQXVGckI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQmFubmVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3N0ZWZhL3Byb2dyYW1taW5nL0F0ZWxpZXJ1bEhhaUh1aS9uZXh0LWFoaCJ9