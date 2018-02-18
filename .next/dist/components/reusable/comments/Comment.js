'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../../css/utils');

var _utils2 = _interopRequireDefault(_utils);

var _Rating = require('./Rating');

var _Rating2 = _interopRequireDefault(_Rating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stefan.radusi/projects/haihui/next-ahh/components/reusable/comments/Comment.js';


var commentStyle = new String('div.comment{width:calc(100% - 4px);border:2px solid ' + _utils2.default.sky + ';margin-top:5px;border-radius:4px;}div.header{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}div.details{padding:5px;}div.details p{font-size:18px;font-weight:bold;}p{font-size:15px;margin:0;}div.line{-webkit-flex:1;-ms-flex:1;flex:1;height:3px;background:' + _utils2.default.sky + ';margin:5px;border-radius:4px;}p.date{padding:5px;padding-right:10px;}div.commentContent{padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmV1c2FibGUvY29tbWVudHMvQ29tbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJK0IsQUFHNEIsQUFPWixBQU1DLEFBSUcsQUFLQSxBQUtSLEFBUUssQUFLQyxXQWhDQSxDQU1qQixBQXNCdUIsQ0FLdkIsRUF2QnFCLEFBS1IsUUF0QnFDLENBdUJsRCxPQWFBLENBbEJBLENBU2UsV0FDNkIseUJBM0J6QixlQUNHLEFBMkJSLENBckJTLFVBc0JELE9BM0J0QixXQTRCQSxpRUF0QkEiLCJmaWxlIjoiY29tcG9uZW50cy9yZXVzYWJsZS9jb21tZW50cy9Db21tZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zdGVmYW4ucmFkdXNpL3Byb2plY3RzL2hhaWh1aS9uZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vY3NzL3V0aWxzJztcbmltcG9ydCBjc3NKc3hGdW5jIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcbmltcG9ydCBSYXRpbmcgZnJvbSAnLi9SYXRpbmcnO1xuXG5jb25zdCBjb21tZW50U3R5bGUgPSBjc3NKc3hGdW5jYFxuZGl2LmNvbW1lbnQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0cHgpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLnNreX07XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuZGl2LmhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaXYuZGV0YWlscyB7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG5kaXYuZGV0YWlscyBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDA7XG59XG5cbmRpdi5saW5lIHtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQ6ICR7Y3NzLnNreX07XG4gICAgbWFyZ2luOjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbnAuZGF0ZSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbmRpdi5jb21tZW50Q29udGVudCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmA7XG5cbmNvbnN0IENvbW1lbnQgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29tbWVudCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RldGFpbHMnPlxuICAgICAgICAgICAgICA8cD4ge3Byb3BzLm5hbWV9IDwvcD5cbiAgICAgICAgICAgICAgPFJhdGluZyBcbiAgICAgICAgICAgICAgICByYXRpbmc9e3Byb3BzLnJhdGluZ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmUnIC8+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2RhdGUnPiB7cHJvcHMuZGF0ZX0gPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbW1lbnRDb250ZW50Jz5cbiAgICAgICAgICAgIDxwPiB7cHJvcHMuY29udGVudH0gPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8c3R5bGUganN4Pntjb21tZW50U3R5bGV9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7Il19 */\n/*@ sourceURL=components/reusable/comments/Comment.js */');

commentStyle.__hash = '1746758296';
commentStyle.__scoped = 'div.comment.jsx-73163417{width:calc(100% - 4px);border:2px solid ' + _utils2.default.sky + ';margin-top:5px;border-radius:4px;}div.header.jsx-73163417{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}div.details.jsx-73163417{padding:5px;}div.details.jsx-73163417 p.jsx-73163417{font-size:18px;font-weight:bold;}p.jsx-73163417{font-size:15px;margin:0;}div.line.jsx-73163417{-webkit-flex:1;-ms-flex:1;flex:1;height:3px;background:' + _utils2.default.sky + ';margin:5px;border-radius:4px;}p.date.jsx-73163417{padding:5px;padding-right:10px;}div.commentContent.jsx-73163417{padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmV1c2FibGUvY29tbWVudHMvQ29tbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJK0IsQUFHNEIsQUFPWixBQU1DLEFBSUcsQUFLQSxBQUtSLEFBUUssQUFLQyxXQWhDQSxDQU1qQixBQXNCdUIsQ0FLdkIsRUF2QnFCLEFBS1IsUUF0QnFDLENBdUJsRCxPQWFBLENBbEJBLENBU2UsV0FDNkIseUJBM0J6QixlQUNHLEFBMkJSLENBckJTLFVBc0JELE9BM0J0QixXQTRCQSxpRUF0QkEiLCJmaWxlIjoiY29tcG9uZW50cy9yZXVzYWJsZS9jb21tZW50cy9Db21tZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zdGVmYW4ucmFkdXNpL3Byb2plY3RzL2hhaWh1aS9uZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vY3NzL3V0aWxzJztcbmltcG9ydCBjc3NKc3hGdW5jIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcbmltcG9ydCBSYXRpbmcgZnJvbSAnLi9SYXRpbmcnO1xuXG5jb25zdCBjb21tZW50U3R5bGUgPSBjc3NKc3hGdW5jYFxuZGl2LmNvbW1lbnQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0cHgpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y3NzLnNreX07XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuZGl2LmhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaXYuZGV0YWlscyB7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG5kaXYuZGV0YWlscyBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDA7XG59XG5cbmRpdi5saW5lIHtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQ6ICR7Y3NzLnNreX07XG4gICAgbWFyZ2luOjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbnAuZGF0ZSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbmRpdi5jb21tZW50Q29udGVudCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmA7XG5cbmNvbnN0IENvbW1lbnQgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29tbWVudCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RldGFpbHMnPlxuICAgICAgICAgICAgICA8cD4ge3Byb3BzLm5hbWV9IDwvcD5cbiAgICAgICAgICAgICAgPFJhdGluZyBcbiAgICAgICAgICAgICAgICByYXRpbmc9e3Byb3BzLnJhdGluZ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmUnIC8+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2RhdGUnPiB7cHJvcHMuZGF0ZX0gPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbW1lbnRDb250ZW50Jz5cbiAgICAgICAgICAgIDxwPiB7cHJvcHMuY29udGVudH0gPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8c3R5bGUganN4Pntjb21tZW50U3R5bGV9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7Il19 */\n/*@ sourceURL=components/reusable/comments/Comment.js */';
commentStyle.__scopedHash = '73163417';
var Comment = function Comment(props) {
    return _react2.default.createElement('div', {
        className: 'jsx-' + commentStyle.__scopedHash + ' ' + 'comment',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-' + commentStyle.__scopedHash + ' ' + 'header',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 53
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-' + commentStyle.__scopedHash + ' ' + 'details',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, _react2.default.createElement('p', {
        className: 'jsx-' + commentStyle.__scopedHash,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }, ' ', props.name, ' '), _react2.default.createElement(_Rating2.default, {
        rating: props.rating,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 56
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-' + commentStyle.__scopedHash + ' ' + 'line',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    }), _react2.default.createElement('p', {
        className: 'jsx-' + commentStyle.__scopedHash + ' ' + 'date',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 62
        }
    }, ' ', props.date, ' ')), _react2.default.createElement('div', {
        className: 'jsx-' + commentStyle.__scopedHash + ' ' + 'commentContent',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 64
        }
    }, _react2.default.createElement('p', {
        className: 'jsx-' + commentStyle.__scopedHash,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 65
        }
    }, ' ', props.content, ' ')), _react2.default.createElement(_style2.default, {
        styleId: commentStyle.__scopedHash,
        css: commentStyle.__scoped
    }));
};

exports.default = Comment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmV1c2FibGUvY29tbWVudHMvQ29tbWVudC5qcyJdLCJuYW1lcyI6WyJjc3MiLCJSYXRpbmciLCJjb21tZW50U3R5bGUiLCJza3kiLCJDb21tZW50IiwicHJvcHMiLCJuYW1lIiwicmF0aW5nIiwiZGF0ZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBRWhCLEFBQU8sQUFBWTs7Ozs7Ozs7O0FBRW5CLElBQU0sbUZBR2tCLGdCQUhsQixBQUdzQiwrWUE0QlYsZ0JBL0JaLEFBK0JnQixNQS9CdEI7Ozs4RkFHd0IsZ0JBQUksQSw2ZEE0QlYsZ0IsQUFBSTs7QUFldEIsSUFBTSxVQUFVLFNBQVYsQUFBVSxRQUFBLEFBQUMsT0FBRDsyQkFDWixjQUFBOzhEQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksY0FBQTs4REFBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBOzhEQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0U7QUFERjtBQUFBLHVCQUNFLGNBQUE7eUNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUFLLFdBQUwsQUFBVyxNQURiLEFBQ0UsQUFDQSxzQkFBQSxBQUFDO2dCQUNTLE1BRFYsQUFDZ0I7O3NCQURoQjt3QkFITixBQUNJLEFBRUUsQUFJRjtBQUpFO0FBQ0U7OERBR0osQUFBZTs7c0JBQWY7d0JBUEosQUFPSSxBQUVBO0FBRkE7QUFBQSx3QkFFQSxjQUFBOzhEQUFBLEFBQWE7O3NCQUFiO3dCQUFBO0FBQUE7QUFBQSxPQUFzQixXQUF0QixBQUE0QixNQVZwQyxBQUNJLEFBU0ksQUFFSix1QkFBQSxjQUFBOzhEQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7eUNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUFLLFdBQUwsQUFBVyxTQWJuQixBQVlJLEFBQ0k7OEJBYlI7MEJBRFksQUFDWjtBQUFBO0FBREosQUFxQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3RlZmFuLnJhZHVzaS9wcm9qZWN0cy9oYWlodWkvbmV4dC1haGgifQ==