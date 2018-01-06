'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Banner = require('../components/reusable/Banner');

var _Banner2 = _interopRequireDefault(_Banner);

var _svgAgregator = require('../components/svg/svgAgregator');

var _svgAgregator2 = _interopRequireDefault(_svgAgregator);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\programming\\nodejs\\heroku\\next-ahh\\pages\\index.js?entry';


var Home = function Home() {
  return _react2.default.createElement('div', {
    className: 'jsx-2555682912' + ' ' + 'home basicPage',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_link2.default, { href: '/PhotoVideo', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-2555682912',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_Banner2.default, {
    text: 'Poze si filmari evenimente',
    svg: _svgAgregator2.default.events,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }))), _react2.default.createElement(_Banner2.default, {
    text: 'Print poze si cavans',
    svg: _svgAgregator2.default.print,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement(_Banner2.default, {
    text: 'Personalizari tricouri, cani si altele',
    svg: _svgAgregator2.default.personalizari,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: '2555682912',
    css: 'a.jsx-2555682912{text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmdCLEFBRzRCLHFCQUN2QiIsImZpbGUiOiJwYWdlc1xcaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovcHJvZ3JhbW1pbmcvbm9kZWpzL2hlcm9rdS9uZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9yZXVzYWJsZS9CYW5uZXInO1xyXG5pbXBvcnQgc3ZnQWdyZWdhdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvc3ZnL3N2Z0FncmVnYXRvcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT0naG9tZSBiYXNpY1BhZ2UnPlxyXG4gICAgPExpbmsgaHJlZj0nL1Bob3RvVmlkZW8nPlxyXG4gICAgICA8YT5cclxuICAgICAgICA8QmFubmVyXHJcbiAgICAgICAgICB0ZXh0PVwiUG96ZSBzaSBmaWxtYXJpIGV2ZW5pbWVudGVcIlxyXG4gICAgICAgICAgc3ZnPXtzdmdBZ3JlZ2F0b3IuZXZlbnRzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICAgIDxCYW5uZXJcclxuICAgICAgdGV4dD1cIlByaW50IHBvemUgc2kgY2F2YW5zXCJcclxuICAgICAgc3ZnPXtzdmdBZ3JlZ2F0b3IucHJpbnR9XHJcbiAgICAvPlxyXG4gICAgPEJhbm5lclxyXG4gICAgICB0ZXh0PVwiUGVyc29uYWxpemFyaSB0cmljb3VyaSwgY2FuaSBzaSBhbHRlbGVcIlxyXG4gICAgICBzdmc9e3N2Z0FncmVnYXRvci5wZXJzb25hbGl6YXJpfVxyXG4gICAgLz5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbikgXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgPExheW91dCBob21lUGFnZT4gIFxyXG4gICAgPEhvbWUvPlxyXG4gIDwvTGF5b3V0PlxyXG4pOyJdfQ== */\n/*@ sourceURL=pages\\index.js?entry */'
  }));
};

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, { homePage: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement(Home, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJIZWFkIiwiQmFubmVyIiwic3ZnQWdyZWdhdG9yIiwiTGluayIsIkhvbWUiLCJldmVudHMiLCJwcmludCIsInBlcnNvbmFsaXphcmkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPOzs7Ozs7Ozs7QUFHUCxJQUFNLE9BQU8sU0FBUCxBQUFPLE9BQUE7eUJBQ1gsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXO2dCQUFYO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUM7VUFBRCxBQUNPLEFBQ0w7U0FBSyx1QkFGUCxBQUVvQjs7Z0JBRnBCO2tCQUhOLEFBQ0UsQUFDRSxBQUNFLEFBTUo7QUFOSTtBQUNFLHdCQUtOLEFBQUM7VUFBRCxBQUNPLEFBQ0w7U0FBSyx1QkFGUCxBQUVvQjs7Z0JBRnBCO2tCQVRGLEFBU0UsQUFJQTtBQUpBO0FBQ0Usc0JBR0YsQUFBQztVQUFELEFBQ08sQUFDTDtTQUFLLHVCQUZQLEFBRW9COztnQkFGcEI7a0JBYkYsQUFhRTtBQUFBO0FBQ0U7YUFkSjtTQURXLEFBQ1g7QUFBQTtBQURGLEFBMEJBOztrQkFBZSxZQUFBO3lCQUNiLEFBQUMsa0NBQU8sVUFBUjtnQkFBQTtrQkFBQSxBQUNFO0FBREY7R0FBQSxnQ0FDRSxBQUFDOztnQkFBRDtrQkFGVyxBQUNiLEFBQ0U7QUFBQTtBQUFBO0FBRkoiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovcHJvZ3JhbW1pbmcvbm9kZWpzL2hlcm9rdS9uZXh0LWFoaCJ9