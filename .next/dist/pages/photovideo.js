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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _svgAgregator = require('../components/svg/svgAgregator');

var _svgAgregator2 = _interopRequireDefault(_svgAgregator);

var _PhotoVideoContainer = require('../components/reusable/PhotoVideoContainer');

var _PhotoVideoContainer2 = _interopRequireDefault(_PhotoVideoContainer);

var _Nunti = require('../components/oferte/Nunti');

var _Nunti2 = _interopRequireDefault(_Nunti);

var _Comments = require('../components/reusable/comments/Comments');

var _Comments2 = _interopRequireDefault(_Comments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stefan.radusi/projects/haihui/next-ahh/pages/photovideo.js?entry';


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

      return _react2.default.createElement('div', { className: 'photoVideo basicPage', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('div', { className: 'nunti', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_PhotoVideoContainer2.default, {
        text: 'Nunti si evenimente conexe',
        svg: _svgAgregator2.default.nunti,
        imgFolder: 'evenimente/nunti',
        showPreviewerFunc: this.props.showPreviewerFunc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_Nunti2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement(_Comments2.default, {
        label: 'nunti',
        title: 'nunti si evenimente conexe',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }))));
    }
  }]);

  return PhotoVideo;
}(_react.Component);

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement(PhotoVideo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bob3RvdmlkZW8uanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiTGF5b3V0Iiwic3ZnQWdncmVnYXRvciIsIlBob3RvVmlkZW9Db250YWluZXIiLCJOdW50aSIsIkNvbW1lbnRzIiwiUGhvdG9WaWRlbyIsInByb3BzIiwic3RhdGUiLCJwaG90b3MiLCJudW50aSIsInNob3dQcmV2aWV3ZXJGdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVE7Ozs7QUFDUixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFtQjs7OztBQUMxQixBQUFPLEFBQXlCOzs7O0FBQ2hDLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWM7Ozs7Ozs7OztJLEFBR2Y7c0NBQ0o7O3NCQUFBLEFBQVksT0FBTzt3Q0FBQTs7OElBQUEsQUFDWCxBQUVOOztVQUFBLEFBQUs7Y0FIWSxBQUdqQixBQUFhLEFBQ0Y7QUFERSxBQUNYO1dBRUg7Ozs7OzZCQUlRLEFBRVA7OzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQztjQUFELEFBQ08sQUFDTDthQUFLLHVCQUZQLEFBRXFCLEFBQ25CO21CQUhGLEFBR2EsQUFDWDsyQkFBbUIsS0FBQSxBQUFLLE1BSjFCLEFBSWdDOztvQkFKaEM7c0JBQUEsQUFNRTtBQU5GO0FBQ0UseUJBS0EsQUFBQzs7b0JBQUQ7c0JBTkYsQUFNRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDO2VBQUQsQUFDUSxBQUNOO2VBRkYsQUFFUTs7b0JBRlI7c0JBVlIsQUFDRSxBQUNFLEFBQ0UsQUFPRSxBQVVUO0FBVlM7QUFDRTs7Ozs7QSxBQXhCVyxBQXFDekI7O2tCQUFlLFlBQUE7eUJBQU8sQUFBQzs7Z0JBQUQ7a0JBQUEsQUFBUTtBQUFSO0FBQUEsR0FBQSxnQ0FBUSxBQUFDOztnQkFBRDtrQkFBZixBQUFPLEFBQVE7QUFBQTtBQUFBO0FBQTlCIiwiZmlsZSI6InBob3RvdmlkZW8uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0ZWZhbi5yYWR1c2kvcHJvamVjdHMvaGFpaHVpL25leHQtYWhoIn0=