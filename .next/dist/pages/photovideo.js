'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Banner = require('../components/reusable/Banner');

var _Banner2 = _interopRequireDefault(_Banner);

var _svgAgregator = require('../components/svg/svgAgregator');

var _svgAgregator2 = _interopRequireDefault(_svgAgregator);

var _CustomFetch = require('../components/reusable/CustomFetch');

var _CustomFetch2 = _interopRequireDefault(_CustomFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\nodejs\\next-ahh\\pages\\PhotoVideo.js?entry';
// import css from '../css/utils';


var PhotoVideo = function (_Component) {
  (0, _inherits3.default)(PhotoVideo, _Component);

  function PhotoVideo() {
    (0, _classCallCheck3.default)(this, PhotoVideo);

    return (0, _possibleConstructorReturn3.default)(this, (PhotoVideo.__proto__ || (0, _getPrototypeOf2.default)(PhotoVideo)).call(this));
  }

  (0, _createClass3.default)(PhotoVideo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _CustomFetch2.default.fetch('GET', '').then(function (response) {
        return console.log(response);
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', {
        className: 'jsx-1299301653' + ' ' + 'photoVideo basicPage',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1299301653' + ' ' + 'nunti',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_Banner2.default, {
        text: 'Nunti si evenimente conexe',
        svg: _svgAgregator2.default.nunti,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '1299301653',
        css: '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxQaG90b1ZpZGVvLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCb0IiLCJmaWxlIjoicGFnZXNcXFBob3RvVmlkZW8uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRjovbm9kZWpzL25leHQtYWhoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbi8vIGltcG9ydCBjc3MgZnJvbSAnLi4vY3NzL3V0aWxzJztcclxuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL3JldXNhYmxlL0Jhbm5lcic7XHJcbmltcG9ydCBzdmdBZ2dyZWdhdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvc3ZnL3N2Z0FncmVnYXRvcic7XHJcbmltcG9ydCBjdXN0b21GZXRjaCBmcm9tICcuLi9jb21wb25lbnRzL3JldXNhYmxlL0N1c3RvbUZldGNoJztcclxuXHJcbmNsYXNzIFBob3RvVmlkZW8gZXh0ZW5kcyBDb21wb25lbnQgeyBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjdXN0b21GZXRjaC5mZXRjaCgnR0VUJywgJycpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwaG90b1ZpZGVvIGJhc2ljUGFnZSc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J251bnRpJz5cclxuICAgICAgICAgIDxCYW5uZXIgXHJcbiAgICAgICAgICAgIHRleHQ9XCJOdW50aSBzaSBldmVuaW1lbnRlIGNvbmV4ZVwiXHJcbiAgICAgICAgICAgIHN2Zz17c3ZnQWdncmVnYXRvci5udW50aX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICBcclxuICAgICAgICBcclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICApXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKDxMYXlvdXQ+PFBob3RvVmlkZW8vPjwvTGF5b3V0Pik7Il19 */\n/*@ sourceURL=pages\\PhotoVideo.js?entry */'
      }));
    }
  }]);

  return PhotoVideo;
}(_react.Component);

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, _react2.default.createElement(PhotoVideo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxQaG90b1ZpZGVvLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkxheW91dCIsIkJhbm5lciIsInN2Z0FnZ3JlZ2F0b3IiLCJjdXN0b21GZXRjaCIsIlBob3RvVmlkZW8iLCJmZXRjaCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJudW50aSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUTs7OztBQUNSLEFBQU8sQUFBWTs7OztBQUVuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFtQjs7OztBQUMxQixBQUFPLEFBQWlCOzs7Ozs7O0FBSHhCOzs7SUFLTSxBO3NDQUNKOzt3QkFBYzt3Q0FBQTs7bUlBR2I7Ozs7O3dDQUVtQixBQUNsQjs0QkFBQSxBQUFZLE1BQVosQUFBa0IsT0FBbEIsQUFBeUIsSUFBekIsQUFDQyxLQUFLLG9CQUFBO2VBQVksUUFBQSxBQUFRLElBQXBCLEFBQVksQUFBWTtBQUQ5QixBQUVEOzs7OzZCQUVRLEFBRVA7OzZCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7Y0FBRCxBQUNPLEFBQ0w7YUFBSyx1QkFGUCxBQUVxQjs7b0JBRnJCO3NCQUZKLEFBQ0UsQUFDRTtBQUFBO0FBQ0U7aUJBSE47YUFERixBQUNFLEFBZUg7QUFmRzs7Ozs7QUFkbUIsQUFpQ3pCLEE7O2tCQUFlLFlBQUE7eUJBQU8sQUFBQzs7Z0JBQUQ7a0JBQUEsQUFBUTtBQUFSO0FBQUEsR0FBQSxnQ0FBUSxBQUFDOztnQkFBRDtrQkFBZixBQUFPLEFBQVE7QUFBQTtBQUFBO0FBQTlCIiwiZmlsZSI6IlBob3RvVmlkZW8uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRjovbm9kZWpzL25leHQtYWhoIn0=