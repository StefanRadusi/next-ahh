'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\programming\\nodejs\\heroku\\next-ahh\\pages\\index.js?entry';


var Home = function Home() {
  return _react2.default.createElement('div', { className: 'home basicPage', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_Banner2.default, {
    text: 'Poze si filmari evenimente',
    svg: _svgAgregator2.default.events,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement(_Banner2.default, {
    text: 'Print poze si cavans',
    svg: _svgAgregator2.default.print,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement(_Banner2.default, {
    text: 'Personalizari tricouri, cani si altele',
    svg: _svgAgregator2.default.personalizari,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }));
};

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, { homePage: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement(Home, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJIZWFkIiwiQmFubmVyIiwic3ZnQWdyZWdhdG9yIiwiSG9tZSIsImV2ZW50cyIsInByaW50IiwicGVyc29uYWxpemFyaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBa0I7Ozs7Ozs7OztBQUd6QixJQUFNLE9BQU8sU0FBUCxBQUFPLE9BQUE7eUJBQ1gsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDO1VBQUQsQUFDTyxBQUNMO1NBQUssdUJBRlAsQUFFb0I7O2dCQUZwQjtrQkFERixBQUNFLEFBSUE7QUFKQTtBQUNFLHNCQUdGLEFBQUM7VUFBRCxBQUNPLEFBQ0w7U0FBSyx1QkFGUCxBQUVvQjs7Z0JBRnBCO2tCQUxGLEFBS0UsQUFJQTtBQUpBO0FBQ0Usc0JBR0YsQUFBQztVQUFELEFBQ08sQUFDTDtTQUFLLHVCQUZQLEFBRW9COztnQkFGcEI7a0JBVlMsQUFDWCxBQVNFO0FBQUE7QUFDRTtBQVhOLEFBaUJBOztrQkFBZSxZQUFBO3lCQUNiLEFBQUMsa0NBQU8sVUFBUjtnQkFBQTtrQkFBQSxBQUNFO0FBREY7R0FBQSxnQ0FDRSxBQUFDOztnQkFBRDtrQkFGVyxBQUNiLEFBQ0U7QUFBQTtBQUFBO0FBRkoiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovcHJvZ3JhbW1pbmcvbm9kZWpzL2hlcm9rdS9uZXh0LWFoaCJ9