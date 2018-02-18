'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _utils = require('../../../css/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stefan.radusi/projects/haihui/next-ahh/components/reusable/comments/Rating.js';


var ratingStyle = new String('div.rating{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}svg{height:15px;width:15px;}polygon{fill:none;stroke-width:20;stroke:grey;}polygon.fill{fill:gold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmV1c2FibGUvY29tbWVudHMvUmF0aW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUk4QixBQUdzQixBQUlELEFBS0YsQUFNQSxVQUxNLEFBTXBCLEVBWGUsV0FDZixHQUtnQixZQUNoQixvQ0FYQSIsImZpbGUiOiJjb21wb25lbnRzL3JldXNhYmxlL2NvbW1lbnRzL1JhdGluZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3RlZmFuLnJhZHVzaS9wcm9qZWN0cy9oYWlodWkvbmV4dC1haGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi9jc3MvdXRpbHMnO1xuaW1wb3J0IGNzc0pzeEZ1bmMgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5jb25zdCByYXRpbmdTdHlsZSA9IGNzc0pzeEZ1bmNgXG4gICAgZGl2LnJhdGluZyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgc3ZnIHtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICB9XG5cbiAgICBwb2x5Z29uIHtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAyMDtcbiAgICAgICAgc3Ryb2tlOiBncmV5O1xuICAgIH1cblxuICAgIHBvbHlnb24uZmlsbCB7XG4gICAgICAgIGZpbGw6IGdvbGQ7XG4gICAgfVxuXG5gO1xuXG5jbGFzcyBSYXRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhdGluZyc+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgWy4uLm5ldyBBcnJheSg1KV0ubWFwKChlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2luZGV4fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUwMCA1MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHRoaXMucHJvcHMucmF0aW5nID4gaW5kZXgpICYmICdmaWxsJ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50cz1cIjIxMy4zMzMsMTAuNDQxIDI3OS4yNDksMTQ0LjAxNyA0MjYuNjY3LDE2NS40MzYgMzIwLDI2OS40MSAzNDUuMTczLDQxNi4yMjYgMjEzLjMzMywzNDYuOTEgODEuNDg1LDQxNi4yMjYgMTA2LjY2NywyNjkuNDEgMCwxNjUuNDM2IDE0Ny40MDksMTQ0LjAxNyBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICkpICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e3JhdGluZ1N0eWxlfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZzsiXX0= */\n/*@ sourceURL=components/reusable/comments/Rating.js */');

ratingStyle.__hash = '3960088930';
ratingStyle.__scoped = 'div.rating.jsx-1928815043{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}svg.jsx-1928815043{height:15px;width:15px;}polygon.jsx-1928815043{fill:none;stroke-width:20;stroke:grey;}polygon.fill.jsx-1928815043{fill:gold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmV1c2FibGUvY29tbWVudHMvUmF0aW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUk4QixBQUdzQixBQUlELEFBS0YsQUFNQSxVQUxNLEFBTXBCLEVBWGUsV0FDZixHQUtnQixZQUNoQixvQ0FYQSIsImZpbGUiOiJjb21wb25lbnRzL3JldXNhYmxlL2NvbW1lbnRzL1JhdGluZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3RlZmFuLnJhZHVzaS9wcm9qZWN0cy9oYWlodWkvbmV4dC1haGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi8uLi9jc3MvdXRpbHMnO1xuaW1wb3J0IGNzc0pzeEZ1bmMgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5jb25zdCByYXRpbmdTdHlsZSA9IGNzc0pzeEZ1bmNgXG4gICAgZGl2LnJhdGluZyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgc3ZnIHtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICB9XG5cbiAgICBwb2x5Z29uIHtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAyMDtcbiAgICAgICAgc3Ryb2tlOiBncmV5O1xuICAgIH1cblxuICAgIHBvbHlnb24uZmlsbCB7XG4gICAgICAgIGZpbGw6IGdvbGQ7XG4gICAgfVxuXG5gO1xuXG5jbGFzcyBSYXRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhdGluZyc+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgWy4uLm5ldyBBcnJheSg1KV0ubWFwKChlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2luZGV4fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUwMCA1MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHRoaXMucHJvcHMucmF0aW5nID4gaW5kZXgpICYmICdmaWxsJ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50cz1cIjIxMy4zMzMsMTAuNDQxIDI3OS4yNDksMTQ0LjAxNyA0MjYuNjY3LDE2NS40MzYgMzIwLDI2OS40MSAzNDUuMTczLDQxNi4yMjYgMjEzLjMzMywzNDYuOTEgODEuNDg1LDQxNi4yMjYgMTA2LjY2NywyNjkuNDEgMCwxNjUuNDM2IDE0Ny40MDksMTQ0LjAxNyBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICkpICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e3JhdGluZ1N0eWxlfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZzsiXX0= */\n/*@ sourceURL=components/reusable/comments/Rating.js */';
ratingStyle.__scopedHash = '1928815043';

var Rating = function (_Component) {
    (0, _inherits3.default)(Rating, _Component);

    function Rating() {
        (0, _classCallCheck3.default)(this, Rating);

        return (0, _possibleConstructorReturn3.default)(this, (Rating.__proto__ || (0, _getPrototypeOf2.default)(Rating)).apply(this, arguments));
    }

    (0, _createClass3.default)(Rating, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('div', {
                className: 'jsx-' + ratingStyle.__scopedHash + ' ' + 'rating',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, [].concat((0, _toConsumableArray3.default)(new Array(5))).map(function (e, index) {
                return _react2.default.createElement('svg', {
                    key: index,
                    id: index,
                    viewBox: '0 0 500 500',
                    className: 'jsx-' + ratingStyle.__scopedHash,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                }, _react2.default.createElement('polygon', {
                    points: '213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91 81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 ',
                    className: 'jsx-' + ratingStyle.__scopedHash + ' ' + (_this2.props.rating > index && 'fill' || ''),
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                }));
            }), _react2.default.createElement(_style2.default, {
                styleId: ratingStyle.__scopedHash,
                css: ratingStyle.__scoped
            }));
        }
    }]);

    return Rating;
}(_react.Component);

;

exports.default = Rating;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmV1c2FibGUvY29tbWVudHMvUmF0aW5nLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImNzcyIsInJhdGluZ1N0eWxlIiwiUmF0aW5nIiwiQXJyYXkiLCJtYXAiLCJlIiwiaW5kZXgiLCJwcm9wcyIsInJhdGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVE7Ozs7QUFDUixBQUFPLEFBQVM7Ozs7Ozs7OztBQUdoQixJQUFNLHlCQUFOOzs7Ozs7SUFzQk0sQTs7Ozs7Ozs7Ozs7aUNBRU87eUJBQ0w7O21DQUNJLGNBQUE7cUVBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFFTTtBQUZOO0FBQUEsYUFBQSw2Q0FFVSxJQUFBLEFBQUksTUFBUixBQUFJLEFBQVUsS0FBZCxBQUFrQixJQUFJLFVBQUEsQUFBQyxHQUFELEFBQUksT0FBSjt1Q0FDaEIsY0FBQTt5QkFBQSxBQUNTLEFBQ0w7d0JBRkosQUFFUSxBQUNKOzZCQUhKLEFBR1k7b0RBSFo7O2tDQUFBO29DQUFBLEFBS0k7QUFMSjtBQUNJLGlCQURKOzRCQUtJLEFBRVc7MEVBREssT0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFaLEFBQXFCLFNBRHBDLEFBQzhDLFVBRDlDOztrQ0FBQTtvQ0FOWSxBQUNoQixBQUtJO0FBQUE7QUFFSTtBQVZwQixBQUVNO3FDQUZOO2lDQURKLEFBQ0ksQUFrQlA7QUFsQk87Ozs7O0FBSlMsQTs7QUF1QnBCLEFBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmF0aW5nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zdGVmYW4ucmFkdXNpL3Byb2plY3RzL2hhaWh1aS9uZXh0LWFoaCJ9