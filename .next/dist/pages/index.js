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
  return _react2.default.createElement('div', { className: 'basicPage', __source: {
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
    reverse: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement(_Banner2.default, {
    text: 'Personalizari tricouri, cani si altele',
    svg: _svgAgregator2.default.personalizari,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }));
};

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, { homePage: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement(Home, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }));
};