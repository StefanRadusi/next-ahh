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

var _MenuButton = require('./MenuButton.style');

var _MenuButton2 = _interopRequireDefault(_MenuButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\stefa\\programming\\AtelierulHaiHui\\next-ahh\\components\\Layout\\MenuButton\\MenuButon.js';


var MenuButton = function (_Component) {
    (0, _inherits3.default)(MenuButton, _Component);

    function MenuButton(props) {
        (0, _classCallCheck3.default)(this, MenuButton);

        var _this = (0, _possibleConstructorReturn3.default)(this, (MenuButton.__proto__ || (0, _getPrototypeOf2.default)(MenuButton)).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(MenuButton, [{
        key: 'toggle',
        value: function toggle() {
            if (this.props.showMenu) {
                this.props.hideMenuAction();
            } else {
                this.props.showMenuAction();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { onClick: this.toggle.bind(this), className: 'jsx-' + _MenuButton2.default.__scopedHash + ' ' + 'menuButton',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement('svg', {
                width: '55',
                height: '50',
                viewBox: '0 0 55 50',
                version: '1.1',
                className: 'jsx-' + _MenuButton2.default.__scopedHash + ' ' + ('shirt ' + (this.props.showMenu && 'hide')),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement('g', { id: 'Canvas', fill: 'none', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('g', { id: 'Shirt Menu', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('g', { id: 'Shirt_Menu_2', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('mask', { id: 'mask0', 'mask-type': 'alpha', maskUnits: 'userSpaceOnUse', x: '0', y: '0', width: '55', height: '50', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('g', { id: 'Rectangle', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('rect', { width: '54.1667', height: '50', fill: '#C4C4C4', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }), _react2.default.createElement('rect', { x: '0.5', y: '0.5', width: '53.1667', height: '49', stroke: 'black', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }))), _react2.default.createElement('g', { mask: 'url(#mask0)', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement('g', { id: 'shirt', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('path', { id: 'Union', d: 'M 12.2878 0.0237788L 12.25 0L 12.2226 0.035282L 12.2615 0.0660274M 12.2878 0.0237788L 12.2615 0.0660274M 12.2878 0.0237788C 12.2877 0.0237544 12.2878 0.0237788 12.2615 0.0660274M 12.2878 0.0237788L 12.2888 0.0244279L 12.292 0.0264263L 12.3047 0.0343859C 12.316 0.0414251 12.3329 0.0518918 12.3551 0.0655586C 12.3995 0.0928922 12.4652 0.133025 12.5504 0.184137C 12.7208 0.286363 12.9691 0.432497 13.2802 0.607981C 13.9026 0.958973 14.7764 1.42726 15.7824 1.89644C 17.7962 2.83571 20.332 3.77501 22.4381 3.78985C 24.5703 3.80488 27.1464 2.87866 29.194 1.94496C 30.2169 1.47856 31.106 1.01118 31.7394 0.660406C 32.0561 0.485028 32.3088 0.338826 32.4823 0.236506C 32.569 0.185347 32.6359 0.14516 32.6811 0.117784C 32.7038 0.104096 32.7209 0.0936114 32.7324 0.0865593L 32.7454 0.0785846L 32.7495 0.0760865L 32.7496 0.0759662M 12.2615 0.0660274C 12.2226 0.035282 12.2225 0.0353381 12.2225 0.0354503L 12.0935 0.201034C 12.0093 0.309196 11.8857 0.467928 11.7281 0.670201C 11.4129 1.07475 10.9619 1.65347 10.4184 2.35014C 9.33144 3.74349 7.87481 5.60866 6.39611 7.49596C 4.91739 9.38327 3.41663 11.2927 2.2414 12.7744C 1.65377 13.5153 1.1476 14.1492 0.766296 14.62C 0.383888 15.0921 0.12932 15.3973 0.0432662 15.4835L 0 15.5269L 10.6863 22.5752L 10.6391 41.3364L 34.1968 41.3965L 34.244 22.6354L 45.0125 15.6417L 44.9691 15.5981C 44.8831 15.5114 44.629 15.2049 44.2473 14.7309C 43.8667 14.2582 43.3616 13.6217 42.7751 12.8778C 41.6022 11.39 40.1046 9.47297 38.6289 7.57812C 37.1533 5.68329 35.6997 3.81069 34.6151 2.4118C 34.0728 1.71235 33.6226 1.13134 33.3081 0.725181C 33.1509 0.522104 33.0275 0.362743 32.9435 0.254151L 32.8152 0.0884165L 32.8148 0.08791C 32.8147 0.0877974 32.8147 0.087741 32.7757 0.11837M 32.7757 0.11837C 32.7497 0.0759315 32.7497 0.0759418 32.7496 0.0759662M 32.7757 0.11837L 32.7496 0.0759662M 32.7757 0.11837L 32.8147 0.0877411L 32.7875 0.0525297L 32.7496 0.0759662M 44.8573 15.6239L 34.2443 22.5166L 34.2714 11.7598L 34.1724 11.7595L 34.0981 41.2966L 10.7384 41.237L 10.8127 11.6999L 10.7137 11.6997L 10.6866 22.4563L 0.154904 15.5099C 0.270392 15.3831 0.510073 15.094 0.842992 14.683C 1.22462 14.2119 1.73103 13.5776 2.31873 12.8366C 3.49415 11.3546 4.99505 9.44506 6.47381 7.5577C 7.95257 5.67033 9.40924 3.8051 10.4962 2.41172C 11.0397 1.71502 11.4908 1.13629 11.806 0.731729C 11.9636 0.529448 12.0872 0.370711 12.1714 0.262542L 12.2732 0.131876C 12.2818 0.137243 12.2919 0.143495 12.3035 0.1506C 12.3482 0.178122 12.4142 0.218452 12.4998 0.269768C 12.6708 0.372399 12.9199 0.518983 13.2319 0.694948C 13.8558 1.04685 14.732 1.51638 15.7408 1.98689C 17.7564 2.92699 20.3087 3.87452 22.4374 3.88952C 24.5925 3.90471 27.1854 2.97028 29.2348 2.03576C 30.2606 1.56805 31.152 1.09944 31.7871 0.747746C 32.1046 0.57189 32.3581 0.425239 32.5323 0.322515C 32.6194 0.271152 32.6866 0.230769 32.7322 0.203205C 32.7442 0.195903 32.7547 0.189501 32.7637 0.184032L 32.8654 0.315427C 32.9495 0.424025 33.0728 0.583393 33.2301 0.786477C 33.5446 1.19265 33.9947 1.77368 34.5371 2.47314C 35.6217 3.87207 37.0753 5.74472 38.551 7.63963C 40.0267 9.53453 41.5245 11.4517 42.6976 12.9398C 43.2841 13.6837 43.7895 14.3205 44.1704 14.7936C 44.5026 15.2063 44.7419 15.4965 44.8573 15.6239Z', transform: 'translate(5 4)', stroke: '#FF3B3F', strokeWidth: '2', strokeLinejoin: 'round', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }), _react2.default.createElement('g', { id: 'Group', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('line', { id: 'Line', x1: '1', y1: '-1', x2: '15.7269', y2: '-1', transform: 'translate(19.1535 17.5558)', stroke: '#054D4D', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }), _react2.default.createElement('line', { id: 'Line_2', x1: '1', y1: '-1', x2: '15.7269', y2: '-1', transform: 'translate(19.1535 24.7324)', stroke: '#054D4D', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }), _react2.default.createElement('line', { id: 'Line_3', x1: '1', y1: '-1', x2: '15.7269', y2: '-1', transform: 'translate(19.1535 31.909)', stroke: '#054D4D', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            })))))))), _react2.default.createElement('svg', { width: '55', height: '50', viewBox: '0 0 55 50', fill: 'none', className: 'jsx-' + _MenuButton2.default.__scopedHash + ' ' + ('close ' + (this.props.showMenu && 'show')),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('g', { id: 'Close', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('mask', { id: 'mask0', 'mask-type': 'alpha', maskUnits: 'userSpaceOnUse', x: '0', y: '0', width: '55', height: '50', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('rect', { id: 'Rectangle', width: '54.1667', height: '50', fill: '#C4C4C4', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            })), _react2.default.createElement('g', { mask: 'url(#mask0)', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('g', { id: 'Group', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('line', { id: 'Line', x1: '1', y1: '-1', x2: '15.7269', y2: '-1', transform: 'translate(20 19) rotate(45)', stroke: 'black', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }), _react2.default.createElement('line', { id: 'Line_2', x1: '1', y1: '-1', x2: '15.7269', y2: '-1', transform: 'translate(23 30.8277) rotate(-45)', stroke: 'black', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', className: 'jsx-' + _MenuButton2.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }))))), _react2.default.createElement(_style2.default, {
                styleId: _MenuButton2.default.__scopedHash,
                css: _MenuButton2.default.__scoped
            }));
        }
    }]);

    return MenuButton;
}(_react.Component);

exports.default = MenuButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dFxcTWVudUJ1dHRvblxcTWVudUJ1dG9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGUiLCJNZW51QnV0dG9uIiwicHJvcHMiLCJzdGF0ZSIsInNob3dNZW51IiwiaGlkZU1lbnVBY3Rpb24iLCJzaG93TWVudUFjdGlvbiIsInRvZ2dsZSIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBVzs7Ozs7Ozs7O0ksQUFFWjt3Q0FDRjs7d0JBQUEsQUFBWSxPQUFPOzRDQUFBOztrSkFBQSxBQUNULEFBQ047O2NBQUEsQUFBSyxRQUZVLEFBRWYsQUFBYTtlQUVoQjs7Ozs7aUNBRVEsQUFDTDtnQkFBSSxLQUFBLEFBQUssTUFBVCxBQUFlLFVBQVUsQUFDckI7cUJBQUEsQUFBSyxNQUFMLEFBQVcsQUFDZDtBQUZELG1CQUVPLEFBQ0g7cUJBQUEsQUFBSyxNQUFMLEFBQVcsQUFDZDtBQUNKOzs7O2lDQUVRLEFBQ0w7bUNBQ0ksY0FBQSxTQUE0QixTQUFTLEtBQUEsQUFBSyxPQUFMLEFBQVksS0FBakQsQUFBcUMsQUFBaUIscUVBQXRELEFBQWU7OzhCQUFmO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLGNBQUE7dUJBQUEsQUFDVSxBQUNOO3dCQUZKLEFBRVcsQUFDUDt5QkFISixBQUdZLEFBQ1I7eUJBSkosQUFJWTsyRkFDWSxLQUFBLEFBQUssTUFBTCxBQUFXLFlBTG5DLEFBSytDOzs4QkFML0M7Z0NBQUEsQUFPSTtBQVBKO0FBQ0ksK0JBTUEsY0FBQSxPQUFHLElBQUgsQUFBTSxVQUFTLE1BQWYsQUFBb0IsaURBQXBCOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxPQUFHLElBQUgsQUFBTSx1REFBTjs7OEJBQUE7Z0NBQUEsQUFDUTtBQURSOytCQUNRLGNBQUEsT0FBRyxJQUFILEFBQU0seURB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QVMsYUFBWSxPQUFyQixBQUEyQixXQUFVLFFBQXJDLEFBQTRDLE1BQUssTUFBakQsQUFBc0Qsb0RBQXREOzs4QkFBQTtnQ0FGUixBQUNJLEFBQ0ksQUFFSjtBQUZJO2lDQUVKLGNBQUEsT0FBRyxNQUFILEFBQVEsd0RBQVI7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLE9BQUcsSUFBSCxBQUFNLGtEQUFOOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7dURBQ1UsSUFBTixBQUFTLFFBQU8sSUFBaEIsQUFBbUIsS0FBSSxJQUF2QixBQUEwQixNQUFLLElBQS9CLEFBQWtDLFdBQVUsSUFBNUMsQUFBK0MsTUFBSyxXQUFwRCxBQUE4RCwrQkFBOEIsUUFBNUYsQUFBbUcsU0FBUSxhQUEzRyxBQUF1SCxLQUFJLGVBQTNILEFBQXlJLFNBQVEsZ0JBQWpKLEFBQWdLLGtEQUFoSzs7OEJBQUE7Z0NBREosQUFDSSxBQUNBO0FBREE7d0RBQ00sSUFBTixBQUFTLFVBQVMsSUFBbEIsQUFBcUIsS0FBSSxJQUF6QixBQUE0QixNQUFLLElBQWpDLEFBQW9DLFdBQVUsSUFBOUMsQUFBaUQsTUFBSyxXQUF0RCxBQUFnRSxxQ0FBb0MsUUFBcEcsQUFBMkcsU0FBUSxhQUFuSCxBQUErSCxLQUFJLGVBQW5JLEFBQWlKLFNBQVEsZ0JBQXpKLEFBQXdLLGtEQUF4Szs7OEJBQUE7Z0NBdkNwQixBQStCSSxBQUNJLEFBSUksQUFDSSxBQUVJO0FBQUE7OzhDQXZDcEI7MENBREosQUFDSSxBQWdEUDtBQWhETzs7Ozs7QUFqQmEsQSxBQW9FekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTWVudUJ1dG9uLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3N0ZWZhL3Byb2dyYW1taW5nL0F0ZWxpZXJ1bEhhaUh1aS9uZXh0LWFoaCJ9