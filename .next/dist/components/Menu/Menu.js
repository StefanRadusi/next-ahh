'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _Menu = require('./Menu.style');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuIcons = require('./MenuIcons');

var MenuIcons = _interopRequireWildcard(_MenuIcons);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Menu\\Menu.js';


var Menu = function (_Component) {
    (0, _inherits3.default)(Menu, _Component);

    function Menu(props) {
        (0, _classCallCheck3.default)(this, Menu);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(Menu, [{
        key: 'renderIcon',
        value: function renderIcon(Icon) {
            return Icon && _react2.default.createElement(Icon, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log(MenuIcons);
            return _react2.default.createElement('div', {
                className: 'jsx-' + _Menu2.default.__scopedHash + ' ' + 'menu',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, (0, _keys2.default)(this.props.pages).map(function (page) {
                return _react2.default.createElement('div', { key: page, className: 'jsx-' + _Menu2.default.__scopedHash + ' ' + 'page',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }, _this2.renderIcon(MenuIcons[page]), _react2.default.createElement('p', {
                    className: 'jsx-' + _Menu2.default.__scopedHash,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                }, ' ', _this2.props.pages[page], ' '));
            }), _react2.default.createElement(_style2.default, {
                styleId: _Menu2.default.__scopedHash,
                css: _Menu2.default.__scoped
            }));
        }
    }]);

    return Menu;
}(_react.Component);

exports.default = Menu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE1lbnVcXE1lbnUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJzdHlsZSIsIk1lbnVJY29ucyIsIk1lbnUiLCJwcm9wcyIsInN0YXRlIiwiSWNvbiIsImNvbnNvbGUiLCJsb2ciLCJwYWdlcyIsIm1hcCIsInBhZ2UiLCJyZW5kZXJJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU87O0lBQVAsQUFBWSxBQUFlOzs7Ozs7Ozs7SUFFckIsQTtrQ0FDRjs7a0JBQUEsQUFBWSxPQUFPOzRDQUFBOztzSUFBQSxBQUNULEFBQ047O2NBQUEsQUFBSyxRQUZVLEFBRWYsQUFBYTtlQUdoQjs7Ozs7bUMsQUFFVSxNQUFNLEFBQ2I7bUJBQU8sc0NBQVEsQUFBQzs7OEJBQUQ7Z0NBQWYsQUFBZSxBQUNsQjtBQURrQjtBQUFBLGFBQUE7Ozs7aUNBR1Y7eUJBQ0w7O29CQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7bUNBQ0ksY0FBQTt3RUFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUVNO0FBRk47QUFBQSxhQUFBLHNCQUVrQixLQUFBLEFBQUssTUFBakIsQUFBdUIsT0FBdkIsQUFBOEIsSUFBSSxnQkFBQTt1Q0FDaEMsY0FBQSxTQUFzQixLQUF0QixBQUEyQiw4REFBM0IsQUFBZTs7a0NBQWY7b0NBQUEsQUFDTTtBQUROO2lCQUFBLFNBQ00sQUFBSyxXQUFXLFVBRHRCLEFBQ00sQUFBZ0IsQUFBVSxBQUM1Qix3QkFBQSxjQUFBO3VEQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsbUJBQUssWUFBQSxBQUFLLE1BQUwsQUFBVyxNQUFoQixBQUFLLEFBQWlCLE9BSE0sQUFDaEMsQUFFSTtBQUxaLEFBRU07d0NBRk47b0NBREosQUFDSSxBQVlQO0FBWk87Ozs7O0FBZk8sQSxBQThCbkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTWVudS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9zdGVmYS9wcm9ncmFtbWluZy9BdGVsaWVydWxIYWlIdWkvbmV4dC1haGgifQ==