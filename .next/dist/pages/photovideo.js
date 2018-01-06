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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Banner = require('../components/reusable/Banner');

var _Banner2 = _interopRequireDefault(_Banner);

var _svgAgregator = require('../components/svg/svgAgregator');

var _svgAgregator2 = _interopRequireDefault(_svgAgregator);

var _PhtoCarousel = require('../components/reusable/PhtoCarousel');

var _PhtoCarousel2 = _interopRequireDefault(_PhtoCarousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\programming\\nodejs\\heroku\\next-ahh\\pages\\PhotoVideo.js?entry';
// import css from '../css/utils';


var PhotoVideo = function (_Component) {
  (0, _inherits3.default)(PhotoVideo, _Component);

  function PhotoVideo(props) {
    (0, _classCallCheck3.default)(this, PhotoVideo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PhotoVideo.__proto__ || (0, _getPrototypeOf2.default)(PhotoVideo)).call(this, props));

    _this.state = {
      photos: []
    };
    return _this;
  }

  (0, _createClass3.default)(PhotoVideo, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', {
        className: 'jsx-2727083300' + ' ' + 'photoVideo basicPage',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2727083300' + ' ' + 'nunti',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_Banner2.default, {
        text: 'Nunti si evenimente conexe',
        svg: _svgAgregator2.default.nunti,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement(_PhtoCarousel2.default, {
        folder: 'evenimente/nunti',
        imgPreview: this.props.showPreviewerFunc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '2727083300',
        css: '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxQaG90b1ZpZGVvLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Db0IiLCJmaWxlIjoicGFnZXNcXFBob3RvVmlkZW8uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovcHJvZ3JhbW1pbmcvbm9kZWpzL2hlcm9rdS9uZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG4vLyBpbXBvcnQgY3NzIGZyb20gJy4uL2Nzcy91dGlscyc7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9yZXVzYWJsZS9CYW5uZXInO1xyXG5pbXBvcnQgc3ZnQWdncmVnYXRvciBmcm9tICcuLi9jb21wb25lbnRzL3N2Zy9zdmdBZ3JlZ2F0b3InO1xyXG5pbXBvcnQgUGhvdG9DYXJvdXNlbCBmcm9tICcuLi9jb21wb25lbnRzL3JldXNhYmxlL1BodG9DYXJvdXNlbCc7XHJcblxyXG5cclxuY2xhc3MgUGhvdG9WaWRlbyBleHRlbmRzIENvbXBvbmVudCB7IFxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcGhvdG9zIDogW11cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwaG90b1ZpZGVvIGJhc2ljUGFnZSc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J251bnRpJz5cclxuICAgICAgICAgIDxCYW5uZXIgXHJcbiAgICAgICAgICAgIHRleHQ9XCJOdW50aSBzaSBldmVuaW1lbnRlIGNvbmV4ZVwiXHJcbiAgICAgICAgICAgIHN2Zz17c3ZnQWdncmVnYXRvci5udW50aX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8UGhvdG9DYXJvdXNlbCBcclxuICAgICAgICAgICAgZm9sZGVyPSdldmVuaW1lbnRlL251bnRpJ1xyXG4gICAgICAgICAgICBpbWdQcmV2aWV3PXt0aGlzLnByb3BzLnNob3dQcmV2aWV3ZXJGdW5jfSBcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgIClcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoPExheW91dD48UGhvdG9WaWRlby8+PC9MYXlvdXQ+KTsiXX0= */\n/*@ sourceURL=pages\\PhotoVideo.js?entry */'
      }));
    }
  }]);

  return PhotoVideo;
}(_react.Component);

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement(PhotoVideo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxQaG90b1ZpZGVvLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkxheW91dCIsIkJhbm5lciIsInN2Z0FnZ3JlZ2F0b3IiLCJQaG90b0Nhcm91c2VsIiwiUGhvdG9WaWRlbyIsInByb3BzIiwic3RhdGUiLCJwaG90b3MiLCJudW50aSIsInNob3dQcmV2aWV3ZXJGdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFROzs7O0FBQ1IsQUFBTyxBQUFZOzs7O0FBRW5CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQW1COzs7O0FBQzFCLEFBQU8sQUFBbUI7Ozs7Ozs7QUFIMUI7OztJLEFBTU07c0NBQ0o7O3NCQUFBLEFBQVksT0FBTzt3Q0FBQTs7OElBQUEsQUFDWCxBQUVOOztVQUFBLEFBQUs7Y0FIWSxBQUdqQixBQUFhLEFBQ0Y7QUFERSxBQUNYO1dBRUg7Ozs7OzZCQUlRLEFBRVA7OzZCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7Y0FBRCxBQUNPLEFBQ0w7YUFBSyx1QkFGUCxBQUVxQjs7b0JBRnJCO3NCQURGLEFBQ0UsQUFJQTtBQUpBO0FBQ0UsMEJBR0YsQUFBQztnQkFBRCxBQUNTLEFBQ1A7b0JBQVksS0FBQSxBQUFLLE1BRm5CLEFBRXlCOztvQkFGekI7c0JBTkosQUFDRSxBQUtFO0FBQUE7QUFDRTtpQkFQTjthQURGLEFBQ0UsQUFvQkg7QUFwQkc7Ozs7O0FBZG1CLEEsQUFzQ3pCOztrQkFBZSxZQUFBO3lCQUFPLEFBQUM7O2dCQUFEO2tCQUFBLEFBQVE7QUFBUjtBQUFBLEdBQUEsZ0NBQVEsQUFBQzs7Z0JBQUQ7a0JBQWYsQUFBTyxBQUFRO0FBQUE7QUFBQTtBQUE5QiIsImZpbGUiOiJQaG90b1ZpZGVvLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L3Byb2dyYW1taW5nL25vZGVqcy9oZXJva3UvbmV4dC1haGgifQ==