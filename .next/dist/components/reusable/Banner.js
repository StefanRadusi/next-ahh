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
                css: 'div.animatedTitleSection.jsx-2397281280{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border:4px solid ' + _utils2.default.sky + ';border-radius:8px;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;margin-bottom:10px;' + _utils2.default.boxShadowNone + ';}div.animatedTitleSection.jsx-2397281280:hover{cursor:pointer;-webkit-transform:scale(1.005);-ms-transform:scale(1.005);transform:scale(1.005);' + _utils2.default.boxShadow + ';}div.animatedTitleSection.jsx-2397281280>div.jsx-2397281280{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:1;-ms-flex:1;flex:1;min-width:40%;}p.jsx-2397281280{width:100%;text-align:center;font-size:50px;margin:10px;font-family:\'Amatic SC\',cursive;text-decoration:none;color:' + _utils2.default.grey + ';}@media (max-width:600px){p.jsx-2397281280{font-size:30px;}}@media (max-width:500px){p.jsx-2397281280{font-size:20px;}}svg.jsx-2397281280{-webkit-flex:1;-ms-flex:1;flex:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJldXNhYmxlXFxCYW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNBLEFBR2tCLEFBU0UsQUFNSCxBQU9ELEFBVVEsQUFNQSxBQU1aLFdBckJXLElBYkssQUF1QnZCLEFBTUEsY0FmZSxJQXFCbkIsV0FwQmdCLFlBQ3FCLGtCQXpCYSxBQWUzQixjQVdFLFFBaEJPLGFBaUJPLFdBMUJqQixLQVV0QixhQVQ2QixNQXlCVyx1QkFYN0IsNkJBYlksSUFjTixjQUNqQixDQWRnQyw2QkFDaEMiLCJmaWxlIjoiY29tcG9uZW50c1xccmV1c2FibGVcXEJhbm5lci5qcyIsInNvdXJjZVJvb3QiOiJEOi9wcm9ncmFtbWluZy9ub2RlanMvaGVyb2t1L25leHQtYWhoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi9jc3MvdXRpbHMnO1xyXG5cclxuY2xhc3MgQmFubmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGhvdmVyIDogZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlU3ZnKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuaG92ZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQW5pbWF0aW9uU3ZnKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuaG92ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdtb3VudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYW5pbWF0ZWRUaXRsZVNlY3Rpb24nIG9uTW91c2VFbnRlcj17dGhpcy5hbmltYXRlU3ZnLmJpbmQodGhpcyl9IG9uTW91c2VMZWF2ZT17dGhpcy5yZW1vdmVBbmltYXRpb25TdmcuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dGhpcy5wcm9wcy5zdmdcclxuICAgICAgICAgICAgICAgICAgICBob3ZlciA9IHt0aGlzLnN0YXRlLmhvdmVyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e1xyXG5gXHJcbmRpdi5hbmltYXRlZFRpdGxlU2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgJHtjc3Muc2t5fTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgJHtjc3MuYm94U2hhZG93Tm9uZX07XHJcbn1cclxuXHJcbmRpdi5hbmltYXRlZFRpdGxlU2VjdGlvbjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDA1KTtcclxuICAgICR7Y3NzLmJveFNoYWRvd307XHJcbn1cclxuXHJcbmRpdi5hbmltYXRlZFRpdGxlU2VjdGlvbiA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleDogMTtcclxuICAgIG1pbi13aWR0aDo0MCU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogJHtjc3MuZ3JleX1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuc3ZnIHtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbmBcclxuICAgICAgICAgICAgICAgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFubmVyOyJdfQ== */\n/*@ sourceURL=components\\reusable\\Banner.js */'
            }));
        }
    }]);

    return Banner;
}(_react.Component);

exports.default = Banner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJldXNhYmxlXFxCYW5uZXIuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiY3NzIiwiQmFubmVyIiwic3RhdGUiLCJob3ZlciIsInNldFN0YXRlIiwiYW5pbWF0ZVN2ZyIsImJpbmQiLCJyZW1vdmVBbmltYXRpb25TdmciLCJwcm9wcyIsInRleHQiLCJza3kiLCJib3hTaGFkb3dOb25lIiwiYm94U2hhZG93IiwiZ3JleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUTs7OztBQUNSLEFBQU8sQUFBUzs7Ozs7Ozs7O0ksQUFFVjs7Ozs7Ozs7Ozs7Ozs7Z04sQUFDRjttQkFBUSxBLEFBQ0k7QUFESixBQUNKOzs7OztxQ0FHUyxBQUNUO2lCQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsQUFDbkI7aUJBQUEsQUFBSyxTQUFTLEtBQWQsQUFBbUIsQUFDdEI7Ozs7NkNBRW9CLEFBQ2pCO2lCQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsQUFDbkI7aUJBQUEsQUFBSyxTQUFTLEtBQWQsQUFBbUIsQUFDdEI7Ozs7NENBRW1CLEFBQ2hCO0FBQ0g7Ozs7aUNBRVEsQUFDTDttQ0FDSSxjQUFBLFNBQXNDLGNBQWMsS0FBQSxBQUFLLFdBQUwsQUFBZ0IsS0FBcEUsQUFBb0QsQUFBcUIsT0FBTyxjQUFjLEtBQUEsQUFBSyxtQkFBTCxBQUF3QixLQUF0SCxBQUE4RixBQUE2QiwyQ0FBM0gsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksY0FBQTtvREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSxvQkFBSSxBQUFLLE1BRmpCLEFBQ0ksQUFDSSxBQUFlLEFBRW5CLDJDQUFBLEFBQU0sTUFBTixBQUFZO3VCQUNDLEtBQUEsQUFBSyxNQURsQixBQUN3Qjs7OEJBRHhCO2dDQUpKLEFBSUk7QUFBQTtBQUNJO3lCQUxSOzZKQVlZLGdCQVpaLEFBWWdCLDJHQUl0QixnQkFoQk0sQUFnQkYscUtBTUosZ0JBdEJNLEFBc0JGLDJhQWlCRyxnQkF2Q0QsQUF1Q0ssT0F4Q1QsQUFDSSxBQStEUDtBQS9ETzs7Ozs7QUFyQlMsQSxBQXVGckI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQmFubmVyLmpzIiwic291cmNlUm9vdCI6IkQ6L3Byb2dyYW1taW5nL25vZGVqcy9oZXJva3UvbmV4dC1haGgifQ==