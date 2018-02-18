'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Banner = require('./Banner');

var _Banner2 = _interopRequireDefault(_Banner);

var _PhtoCarousel = require('./PhtoCarousel');

var _PhtoCarousel2 = _interopRequireDefault(_PhtoCarousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stefan.radusi/projects/haihui/next-ahh/components/reusable/PhotoVideoContainer.js';


var PhotoVideoContainer = function PhotoVideoContainer(props) {
    return _react2.default.createElement('div', { className: 'photoVideoContainer', __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement(_Banner2.default, {
        text: props.text,
        svg: props.svg,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }), _react2.default.createElement(_PhtoCarousel2.default, {
        folder: props.imgFolder,
        imgPreview: props.showPreviewerFunc,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }), props.children);
};

exports.default = PhotoVideoContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmV1c2FibGUvUGhvdG9WaWRlb0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJCYW5uZXIiLCJQaG90b0Nhcm91c2VsIiwiUGhvdG9WaWRlb0NvbnRhaW5lciIsInByb3BzIiwidGV4dCIsInN2ZyIsImltZ0ZvbGRlciIsInNob3dQcmV2aWV3ZXJGdW5jIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFtQjs7Ozs7Ozs7O0FBRTFCLElBQU0sc0JBQXNCLFNBQXRCLEFBQXNCLG9CQUFBLEFBQUMsT0FBVSxBQUNuQzsyQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtLQUFBLGtCQUNJLEFBQUM7Y0FDUyxNQURWLEFBQ2dCLEFBQ1o7YUFBSyxNQUZULEFBRWU7O3NCQUZmO3dCQURKLEFBQ0ksQUFJQTtBQUpBO0FBQ0ksd0JBR0osQUFBQztnQkFDVyxNQURaLEFBQ2tCLEFBQ2Q7b0JBQVksTUFGaEIsQUFFc0I7O3NCQUZ0Qjt3QkFMSixBQUtJLEFBSUM7QUFKRDtBQUNJLGNBUFosQUFDSSxBQVNXLEFBR2xCO0FBZEQsQUFnQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUGhvdG9WaWRlb0NvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3RlZmFuLnJhZHVzaS9wcm9qZWN0cy9oYWlodWkvbmV4dC1haGgifQ==