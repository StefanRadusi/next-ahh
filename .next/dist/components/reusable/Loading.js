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

var _utils = require('../../css/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\programming\\nodejs\\heroku\\next-ahh\\components\\reusable\\Loading.js';


var Loading = function (_Component) {
    (0, _inherits3.default)(Loading, _Component);

    function Loading(props) {
        (0, _classCallCheck3.default)(this, Loading);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Loading.__proto__ || (0, _getPrototypeOf2.default)(Loading)).call(this, props));

        _this.state = {
            toBack: !props.show
        };
        return _this;
    }

    (0, _createClass3.default)(Loading, [{
        key: 'toBack',
        value: function toBack() {
            // console.log('transistion');
            this.state.toBack = true;
            this.setState(this.state);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.show == true) {
                this.state.toBack = false;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var className = 'loading';
            if (this.props.invert) className = className + ' invert ';
            if (this.props.show) className = className + ' show ';
            if (this.state.toBack) className = className + ' toBack ';

            // console.log(className);
            return _react2.default.createElement('div', { onTransitionEnd: this.toBack.bind(this), className: 'jsx-2114227767' + ' ' + (className || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('svg', { viewBox: '0 0 500 500', className: 'jsx-2114227767',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('g', {
                className: 'jsx-2114227767',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('path', { fill: 'none', stroke: '#000000', strokeWidth: '24', strokmiterlimit: '10', d: 'M472.598,211.554l6.611-2.807l-2.807-6.611\r L443.658,125l-2.807-6.612l-6.612,2.807l-52.49,22.283c-7.571-9.254-16.119-17.688-25.499-25.163l21.329-52.796l2.688-6.657\r l-6.657-2.691l-77.698-31.388l-6.66-2.694l-2.688,6.662l-21.408,52.989c-11.3-1.024-22.646-0.925-33.861,0.298l-21.946-51.696\r l-2.807-6.612l-6.612,2.807L122.795,59.28l-6.612,2.807l2.807,6.612l21.946,51.698c-8.232,6.855-15.813,14.488-22.627,22.772\r l-51.895-20.964l-6.66-2.693l-2.689,6.662L25.675,203.87l-2.69,6.657l6.658,2.691l50.768,20.51\r c-1.248,11.711-1.276,23.475-0.084,35.104l-50.923,21.616l-6.612,2.807l2.807,6.612l32.745,77.137l2.806,6.609l6.612-2.807\r l50.286-21.347c7.939,9.703,16.952,18.502,26.887,26.25l-20.512,50.772l-2.689,6.66l6.657,2.688l77.699,31.391l6.66,2.691\r l2.688-6.66l20.964-51.891c11.496,0.928,23.082,0.669,34.571-0.771l21.679,51.069l2.807,6.612l6.611-2.807l77.137-32.745\r l6.611-2.807l-2.807-6.612l-22.234-52.376c7.934-6.795,15.246-14.347,21.825-22.533l52.984,21.403l6.659,2.692l2.688-6.661\r l31.391-77.698l2.688-6.659l-6.657-2.689l-52.796-21.328c1.064-11.136,1.031-22.312-0.096-33.347l53.132-22.554L472.598,211.554z\r M343.563,211.708c21.925,51.647-2.255,111.501-53.901,133.425c-51.648,21.926-111.502-2.256-133.427-53.903\r c-21.925-51.647,2.255-111.5,53.903-133.426C261.784,135.88,321.638,160.061,343.563,211.708z', className: 'jsx-2114227767',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }))), _react2.default.createElement(_style2.default, {
                styleId: '2114227767',
                css: 'div.jsx-2114227767{position:absolute;width:100%;height:100%;top:0;left:0;background:' + _utils2.default.neutral_fade + ';}div.invert.jsx-2114227767{background:transparent;}div.invert.jsx-2114227767 path.jsx-2114227767{stroke:' + _utils2.default.neutral + ';}svg.jsx-2114227767{width:35px;height:35px;' + _utils2.default.center + ';}path.jsx-2114227767{stroke:' + _utils2.default.red + ';stroke-width:30px;stroke-dasharray:2100;stroke-dashoffset:0;-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;}@-webkit-keyframes loading-jsx-2114227767{0%{stroke-dashoffset:2100;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}\0 100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);stroke-dashoffset:0;}}@keyframes loading-jsx-2114227767{0%{stroke-dashoffset:2100;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}\0 100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);stroke-dashoffset:0;}}div.loading.jsx-2114227767{opacity:0;-webkit-transition:opacity 1s ease;transition:opacity 1s ease;z-index:1;}div.loading.show.jsx-2114227767{opacity:1;}div.loading.toBack.jsx-2114227767{z-index:-1;}div.loading.show.jsx-2114227767 path.jsx-2114227767{-webkit-animation:loading-jsx-2114227767 2s ease alternate infinite;animation:loading-jsx-2114227767 2s ease alternate infinite;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJldXNhYmxlXFxMb2FkaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEb0IsQUFHK0IsQUFTSyxBQUlhLEFBSXpCLEFBTXlCLEFBV1QsQUFLRSxBQU1uQixBQU1BLEFBSUMsQUFJa0MsVUFibEIsQUFNL0IsQ0FsQ2dCLEFBc0NoQixPQXZEZSxLQVNmLEFBU2dDLEFBZ0JELE1BakNmLE9BWWhCLEFBVXNCLEtBckJiLE1BQ0MsS0FnQlYsRUFmNEMsQUFvQmxCLGtCQXNCWixJQXJCVSxNQXNCeEIsS0FSNEIsT0FsQzVCLEVBcUI2QixRQVN6QixHQUtBLHFCQW1CSix1REFoQzRCLG9GQUU1QiIsImZpbGUiOiJjb21wb25lbnRzXFxyZXVzYWJsZVxcTG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiJEOi9wcm9ncmFtbWluZy9ub2RlanMvaGVyb2t1L25leHQtYWhoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi9jc3MvdXRpbHMnO1xyXG5cclxuY2xhc3MgTG9hZGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0b0JhY2sgOiAhcHJvcHMuc2hvd1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b0JhY2soKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RyYW5zaXN0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS50b0JhY2sgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICBpZihuZXh0UHJvcHMuc2hvdyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudG9CYWNrID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpICB7XHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICdsb2FkaW5nJztcclxuICAgICAgICBpZih0aGlzLnByb3BzLmludmVydCkgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgJyBpbnZlcnQgJztcclxuICAgICAgICBpZih0aGlzLnByb3BzLnNob3cpIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSArICcgc2hvdyAnOyBcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnRvQmFjaykgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgJyB0b0JhY2sgJzsgXHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25UcmFuc2l0aW9uRW5kPXt0aGlzLnRvQmFjay5iaW5kKHRoaXMpfSA+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNTAwIDUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2VXaWR0aD1cIjI0XCIgc3Ryb2ttaXRlcmxpbWl0PVwiMTBcIiBkPVwiTTQ3Mi41OTgsMjExLjU1NGw2LjYxMS0yLjgwN2wtMi44MDctNi42MTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEw0NDMuNjU4LDEyNWwtMi44MDctNi42MTJsLTYuNjEyLDIuODA3bC01Mi40OSwyMi4yODNjLTcuNTcxLTkuMjU0LTE2LjExOS0xNy42ODgtMjUuNDk5LTI1LjE2M2wyMS4zMjktNTIuNzk2bDIuNjg4LTYuNjU3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsLTYuNjU3LTIuNjkxbC03Ny42OTgtMzEuMzg4bC02LjY2LTIuNjk0bC0yLjY4OCw2LjY2MmwtMjEuNDA4LDUyLjk4OWMtMTEuMy0xLjAyNC0yMi42NDYtMC45MjUtMzMuODYxLDAuMjk4bC0yMS45NDYtNTEuNjk2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsLTIuODA3LTYuNjEybC02LjYxMiwyLjgwN0wxMjIuNzk1LDU5LjI4bC02LjYxMiwyLjgwN2wyLjgwNyw2LjYxMmwyMS45NDYsNTEuNjk4Yy04LjIzMiw2Ljg1NS0xNS44MTMsMTQuNDg4LTIyLjYyNywyMi43NzJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwtNTEuODk1LTIwLjk2NGwtNi42Ni0yLjY5M2wtMi42ODksNi42NjJMMjUuNjc1LDIwMy44N2wtMi42OSw2LjY1N2w2LjY1OCwyLjY5MWw1MC43NjgsMjAuNTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMtMS4yNDgsMTEuNzExLTEuMjc2LDIzLjQ3NS0wLjA4NCwzNS4xMDRsLTUwLjkyMywyMS42MTZsLTYuNjEyLDIuODA3bDIuODA3LDYuNjEybDMyLjc0NSw3Ny4xMzdsMi44MDYsNi42MDlsNi42MTItMi44MDdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGw1MC4yODYtMjEuMzQ3YzcuOTM5LDkuNzAzLDE2Ljk1MiwxOC41MDIsMjYuODg3LDI2LjI1bC0yMC41MTIsNTAuNzcybC0yLjY4OSw2LjY2bDYuNjU3LDIuNjg4bDc3LjY5OSwzMS4zOTFsNi42NiwyLjY5MVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbDIuNjg4LTYuNjZsMjAuOTY0LTUxLjg5MWMxMS40OTYsMC45MjgsMjMuMDgyLDAuNjY5LDM0LjU3MS0wLjc3MWwyMS42NzksNTEuMDY5bDIuODA3LDYuNjEybDYuNjExLTIuODA3bDc3LjEzNy0zMi43NDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGw2LjYxMS0yLjgwN2wtMi44MDctNi42MTJsLTIyLjIzNC01Mi4zNzZjNy45MzQtNi43OTUsMTUuMjQ2LTE0LjM0NywyMS44MjUtMjIuNTMzbDUyLjk4NCwyMS40MDNsNi42NTksMi42OTJsMi42ODgtNi42NjFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwzMS4zOTEtNzcuNjk4bDIuNjg4LTYuNjU5bC02LjY1Ny0yLjY4OWwtNTIuNzk2LTIxLjMyOGMxLjA2NC0xMS4xMzYsMS4wMzEtMjIuMzEyLTAuMDk2LTMzLjM0N2w1My4xMzItMjIuNTU0TDQ3Mi41OTgsMjExLjU1NHpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE0zNDMuNTYzLDIxMS43MDhjMjEuOTI1LDUxLjY0Ny0yLjI1NSwxMTEuNTAxLTUzLjkwMSwxMzMuNDI1Yy01MS42NDgsMjEuOTI2LTExMS41MDItMi4yNTYtMTMzLjQyNy01My45MDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMtMjEuOTI1LTUxLjY0NywyLjI1NS0xMTEuNSw1My45MDMtMTMzLjQyNkMyNjEuNzg0LDEzNS44OCwzMjEuNjM4LDE2MC4wNjEsMzQzLjU2MywyMTEuNzA4elwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5uZXV0cmFsX2ZhZGV9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBkaXYuaW52ZXJ0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYuaW52ZXJ0IHBhdGgge1xyXG4gICAgICAgICAgICBzdHJva2U6ICR7Y3NzLm5ldXRyYWx9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgJHtjc3MuY2VudGVyfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhdGgge1xyXG4gICAgICAgICAgICBzdHJva2U6ICR7Y3NzLnJlZH07XHJcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMzBweDtcclxuICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMjEwMDtcclxuICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIGxvYWRpbmcge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMjEwMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LmxvYWRpbmcge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYubG9hZGluZy5zaG93IHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdi5sb2FkaW5nLnRvQmFjayB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LmxvYWRpbmcuc2hvdyBwYXRoIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBsb2FkaW5nIDJzIGVhc2UgYWx0ZXJuYXRlIGluZmluaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZzsiXX0= */\n/*@ sourceURL=components\\reusable\\Loading.js */'
            }));
        }
    }]);

    return Loading;
}(_react.Component);

exports.default = Loading;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJldXNhYmxlXFxMb2FkaW5nLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImNzcyIsIkxvYWRpbmciLCJwcm9wcyIsInN0YXRlIiwidG9CYWNrIiwic2hvdyIsInNldFN0YXRlIiwibmV4dFByb3BzIiwiY2xhc3NOYW1lIiwiaW52ZXJ0IiwiYmluZCIsIm5ldXRyYWxfZmFkZSIsIm5ldXRyYWwiLCJjZW50ZXIiLCJyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVE7Ozs7QUFDUixBQUFPLEFBQVM7Ozs7Ozs7OztJQUVWLEE7cUNBQ0Y7O3FCQUFBLEFBQVksT0FBTzs0Q0FBQTs7NElBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7b0JBQ1EsQ0FBQyxNQUhDLEFBRWYsQUFBYSxBQUNPO0FBRFAsQUFDVDtlQUVQOzs7OztpQ0FFUSxBQUNMO0FBQ0E7aUJBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixBQUNwQjtpQkFBQSxBQUFLLFNBQVMsS0FBZCxBQUFtQixBQUN0Qjs7OztrREFFeUIsQSxXQUFXLEFBQ2pDO2dCQUFHLFVBQUEsQUFBVSxRQUFiLEFBQXFCLE1BQU0sQUFDdkI7cUJBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixBQUN2QjtBQUNKOzs7O2lDQUVTLEFBQ047Z0JBQUksWUFBSixBQUFnQixBQUNoQjtnQkFBRyxLQUFBLEFBQUssTUFBUixBQUFjLFFBQVEsWUFBWSxZQUFaLEFBQXdCLEFBQzlDO2dCQUFHLEtBQUEsQUFBSyxNQUFSLEFBQWMsTUFBTSxZQUFZLFlBQVosQUFBd0IsQUFDNUM7Z0JBQUcsS0FBQSxBQUFLLE1BQVIsQUFBYyxRQUFRLFlBQVksWUFBWixBQUF3QixBQUU5Qzs7QUFDQTttQ0FDSSxjQUFBLFNBQTJCLGlCQUFpQixLQUFBLEFBQUssT0FBTCxBQUFZLEtBQXhELEFBQTRDLEFBQWlCLDRDQUE3RCxBQUFnQixhQUFoQjs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksY0FBQSxTQUFLLFNBQUwsQUFBYSwwQkFBYjs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLHVEQUNVLE1BQU4sQUFBVyxRQUFPLFFBQWxCLEFBQXlCLFdBQVUsYUFBbkMsQUFBK0MsTUFBSyxpQkFBcEQsQUFBb0UsTUFBSyxHQUF6RSxBQUEyRSw4eUNBQTNFOzs4QkFBQTtnQ0FIWixBQUNJLEFBQ0ksQUFDSTtBQUFBOzt5QkFIWjs4R0F3QmMsZ0JBeEJkLEFBd0JrQiw2SEFRUixnQkFoQ1YsQUFnQ2MsMkRBTVosZ0JBdENGLEFBc0NNLDJDQUlJLGdCQTFDVixBQTBDYyxNQTNDbEIsQUFDSSxBQW1GUDtBQW5GTzs7Ozs7QUE1QlUsQSxBQWtIdEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiJEOi9wcm9ncmFtbWluZy9ub2RlanMvaGVyb2t1L25leHQtYWhoIn0=