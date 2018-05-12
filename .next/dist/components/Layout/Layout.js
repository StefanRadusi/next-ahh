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

var _Layout = require('./Layout.style');

var _Layout2 = _interopRequireDefault(_Layout);

var _Global = require('../../css/Global.style');

var _Global2 = _interopRequireDefault(_Global);

var _Menu = require('../Menu/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuButon = require('./MenuButton/MenuButon');

var _MenuButon2 = _interopRequireDefault(_MenuButon);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Layout\\Layout.js';


var Layout = function (_Component) {
    (0, _inherits3.default)(Layout, _Component);

    function Layout(props) {
        (0, _classCallCheck3.default)(this, Layout);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

        _this.state = {
            showMenu: true
        };
        return _this;
    }

    (0, _createClass3.default)(Layout, [{
        key: 'showMenuAction',
        value: function showMenuAction() {
            this.setState({ showMenu: true });
        }
    }, {
        key: 'hideMenuAction',
        value: function hideMenuAction() {
            this.setState({ showMenu: false });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: 'jsx-' + _Layout2.default.__scopedHash + ' ' + 'layout',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement('title', {
                className: 'jsx-' + _Layout2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'AtelierulHaiHui'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-' + _Layout2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto', rel: 'stylesheet', className: 'jsx-' + _Layout2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            })), _react2.default.createElement(_Menu2.default, {
                pages: {
                    Home: 'Home',
                    Photo: 'Photo Studio',
                    Video: 'Poze/Filmari Evenimente',
                    Print: 'Print Poze/Canvas',
                    Custom: 'Personalizari Obiecte',
                    Contact: 'Contact'
                },
                showMenu: this.state.showMenu,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }), _react2.default.createElement('div', {
                className: 'jsx-' + _Layout2.default.__scopedHash + ' ' + ('container ' + (this.state.showMenu && 'showMenu')),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(_MenuButon2.default, {
                showMenu: this.state.showMenu,
                showMenuAction: this.showMenuAction.bind(this),
                hideMenuAction: this.hideMenuAction.bind(this),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }), this.props.children), _react2.default.createElement(_style2.default, {
                styleId: _Global2.default.__hash,
                css: _Global2.default
            }), _react2.default.createElement(_style2.default, {
                styleId: _Layout2.default.__scopedHash,
                css: _Layout2.default.__scoped
            }));
        }
    }]);

    return Layout;
}(_react.Component);

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dFxcTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGUiLCJnbG9iYWxTdHlsZSIsIk1lbnUiLCJNZW51QnV0dG9uIiwiSGVhZCIsIkxheW91dCIsInByb3BzIiwic3RhdGUiLCJzaG93TWVudSIsInNldFN0YXRlIiwiSG9tZSIsIlBob3RvIiwiVmlkZW8iLCJQcmludCIsIkN1c3RvbSIsIkNvbnRhY3QiLCJzaG93TWVudUFjdGlvbiIsImJpbmQiLCJoaWRlTWVudUFjdGlvbiIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPOzs7Ozs7Ozs7SUFFRCxBO29DQUNGOztvQkFBQSxBQUFZLE9BQU87NENBQUE7OzBJQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO3NCQUZVLEFBRWYsQUFBYSxBQUNDO0FBREQsQUFDVjtlQUVOOzs7Ozt5Q0FFZ0IsQUFDYjtpQkFBQSxBQUFLLFNBQVMsRUFBQyxVQUFmLEFBQWMsQUFBWSxBQUM3Qjs7Ozt5Q0FFZ0IsQUFDYjtpQkFBQSxBQUFLLFNBQVMsRUFBQyxVQUFmLEFBQWMsQUFBWSxBQUM3Qjs7OztpQ0FFUSxBQUNMO21DQUNJLGNBQUE7MEVBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBO3FEQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsNERBQU0sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEIsOEVBQTlCOzs4QkFBQTtnQ0FGSixBQUVJLEFBQ0E7QUFEQTt3REFDTSxNQUFOLEFBQVcsa0RBQWlELEtBQTVELEFBQWdFLG1EQUFoRTs7OEJBQUE7Z0NBSlIsQUFDSSxBQUdJLEFBRUo7QUFGSTtpQ0FFSixBQUFDOzswQkFDVSxBQUNJLEFBQ1A7MkJBRkcsQUFFSyxBQUNSOzJCQUhHLEFBR0ssQUFDUjsyQkFKRyxBQUlLLEFBQ1I7NEJBTEcsQUFLTSxBQUNUOzZCQVBSLEFBQ1csQUFNTyxBQUVkO0FBUk8sQUFDSDswQkFPTSxLQUFBLEFBQUssTUFUbkIsQUFTeUI7OzhCQVR6QjtnQ0FOSixBQU1JLEFBV0E7QUFYQTtBQUNJLGdDQVVKLGNBQUE7MkZBQTZCLEtBQUEsQUFBSyxNQUFMLEFBQVcsWUFBeEMsQUFBb0Q7OzhCQUFwRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDOzBCQUNhLEtBQUEsQUFBSyxNQURuQixBQUN5QixBQUNyQjtnQ0FBZ0IsS0FBQSxBQUFLLGVBQUwsQUFBb0IsS0FGeEMsQUFFb0IsQUFBeUIsQUFDekM7Z0NBQWdCLEtBQUEsQUFBSyxlQUFMLEFBQW9CLEtBSHhDLEFBR29CLEFBQXlCOzs4QkFIN0M7Z0NBREosQUFDSSxBQU1JO0FBTko7QUFDSSxxQkFLQSxBQUFLLE1BeEJqQixBQWlCSSxBQU9tQjswQ0F4QnZCO0FBQUE7QUFBQTswQ0FBQTtzQ0FESixBQUNJLEFBK0JQO0FBL0JPOzs7OztBQWxCUyxBLEFBb0RyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvc3RlZmEvcHJvZ3JhbW1pbmcvQXRlbGllcnVsSGFpSHVpL25leHQtYWhoIn0=