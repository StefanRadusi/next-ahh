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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../css/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stefan.radusi/projects/haihui/next-ahh/components/reusable/Loading.js';


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
            return _react2.default.createElement('div', { onTransitionEnd: this.toBack.bind(this), className: 'jsx-1330354349' + ' ' + (className || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('svg', { viewBox: '0 0 500 500', className: 'jsx-1330354349',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('g', {
                className: 'jsx-1330354349',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('path', { fill: 'none', stroke: '#000000', strokeWidth: '24', strokmiterlimit: '10', d: 'M472.598,211.554l6.611-2.807l-2.807-6.611 L443.658,125l-2.807-6.612l-6.612,2.807l-52.49,22.283c-7.571-9.254-16.119-17.688-25.499-25.163l21.329-52.796l2.688-6.657 l-6.657-2.691l-77.698-31.388l-6.66-2.694l-2.688,6.662l-21.408,52.989c-11.3-1.024-22.646-0.925-33.861,0.298l-21.946-51.696 l-2.807-6.612l-6.612,2.807L122.795,59.28l-6.612,2.807l2.807,6.612l21.946,51.698c-8.232,6.855-15.813,14.488-22.627,22.772 l-51.895-20.964l-6.66-2.693l-2.689,6.662L25.675,203.87l-2.69,6.657l6.658,2.691l50.768,20.51 c-1.248,11.711-1.276,23.475-0.084,35.104l-50.923,21.616l-6.612,2.807l2.807,6.612l32.745,77.137l2.806,6.609l6.612-2.807 l50.286-21.347c7.939,9.703,16.952,18.502,26.887,26.25l-20.512,50.772l-2.689,6.66l6.657,2.688l77.699,31.391l6.66,2.691 l2.688-6.66l20.964-51.891c11.496,0.928,23.082,0.669,34.571-0.771l21.679,51.069l2.807,6.612l6.611-2.807l77.137-32.745 l6.611-2.807l-2.807-6.612l-22.234-52.376c7.934-6.795,15.246-14.347,21.825-22.533l52.984,21.403l6.659,2.692l2.688-6.661 l31.391-77.698l2.688-6.659l-6.657-2.689l-52.796-21.328c1.064-11.136,1.031-22.312-0.096-33.347l53.132-22.554L472.598,211.554z M343.563,211.708c21.925,51.647-2.255,111.501-53.901,133.425c-51.648,21.926-111.502-2.256-133.427-53.903 c-21.925-51.647,2.255-111.5,53.903-133.426C261.784,135.88,321.638,160.061,343.563,211.708z', className: 'jsx-1330354349',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }))), _react2.default.createElement(_style2.default, {
                styleId: '1330354349',
                css: 'div.jsx-1330354349{position:absolute;width:100%;height:100%;top:0;left:0;background:' + _utils2.default.neutral_fade + ';}div.invert.jsx-1330354349{background:transparent;}div.invert.jsx-1330354349 path.jsx-1330354349{stroke:' + _utils2.default.neutral + ';}svg.jsx-1330354349{width:35px;height:35px;' + _utils2.default.center + ';}path.jsx-1330354349{stroke:' + _utils2.default.red + ';stroke-width:30px;stroke-dasharray:2100;stroke-dashoffset:0;-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;}@-webkit-keyframes loading-jsx-1330354349{0%{stroke-dashoffset:2100;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}\0 100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);stroke-dashoffset:0;}}@keyframes loading-jsx-1330354349{0%{stroke-dashoffset:2100;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}\0 100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);stroke-dashoffset:0;}}div.loading.jsx-1330354349{opacity:0;-webkit-transition:opacity 1s ease;transition:opacity 1s ease;z-index:1;}div.loading.show.jsx-1330354349{opacity:1;}div.loading.toBack.jsx-1330354349{z-index:-1;}div.loading.show.jsx-1330354349 path.jsx-1330354349{-webkit-animation:loading-jsx-1330354349 2s ease alternate infinite;animation:loading-jsx-1330354349 2s ease alternate infinite;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmV1c2FibGUvTG9hZGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRG9CLEFBRytCLEFBU0ssQUFJYSxBQUl6QixBQU15QixBQVdULEFBS0UsQUFNbkIsQUFNQSxBQUlDLEFBSWtDLFVBYmxCLEFBTS9CLENBbENnQixBQXNDaEIsT0F2RGUsS0FTZixBQVNnQyxBQWdCRCxNQWpDZixPQVloQixBQVVzQixLQXJCYixNQUNDLEtBZ0JWLEVBZjRDLEFBb0JsQixrQkFzQlosSUFyQlUsTUFzQnhCLEtBUjRCLE9BbEM1QixFQXFCNkIsUUFTekIsR0FLQSxxQkFtQkosdURBaEM0QixvRkFFNUIiLCJmaWxlIjoiY29tcG9uZW50cy9yZXVzYWJsZS9Mb2FkaW5nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zdGVmYW4ucmFkdXNpL3Byb2plY3RzL2hhaWh1aS9uZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uL2Nzcy91dGlscyc7XG5cbmNsYXNzIExvYWRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRvQmFjayA6ICFwcm9wcy5zaG93XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b0JhY2soKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0cmFuc2lzdGlvbicpO1xuICAgICAgICB0aGlzLnN0YXRlLnRvQmFjayA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYobmV4dFByb3BzLnNob3cgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS50b0JhY2sgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpICB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSAnbG9hZGluZyc7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuaW52ZXJ0KSBjbGFzc05hbWUgPSBjbGFzc05hbWUgKyAnIGludmVydCAnO1xuICAgICAgICBpZih0aGlzLnByb3BzLnNob3cpIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSArICcgc2hvdyAnOyBcbiAgICAgICAgaWYodGhpcy5zdGF0ZS50b0JhY2spIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSArICcgdG9CYWNrICc7IFxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvblRyYW5zaXRpb25FbmQ9e3RoaXMudG9CYWNrLmJpbmQodGhpcyl9ID5cbiAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNTAwIDUwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzAwMDAwMFwiIHN0cm9rZVdpZHRoPVwiMjRcIiBzdHJva21pdGVybGltaXQ9XCIxMFwiIGQ9XCJNNDcyLjU5OCwyMTEuNTU0bDYuNjExLTIuODA3bC0yLjgwNy02LjYxMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEw0NDMuNjU4LDEyNWwtMi44MDctNi42MTJsLTYuNjEyLDIuODA3bC01Mi40OSwyMi4yODNjLTcuNTcxLTkuMjU0LTE2LjExOS0xNy42ODgtMjUuNDk5LTI1LjE2M2wyMS4zMjktNTIuNzk2bDIuNjg4LTYuNjU3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbC02LjY1Ny0yLjY5MWwtNzcuNjk4LTMxLjM4OGwtNi42Ni0yLjY5NGwtMi42ODgsNi42NjJsLTIxLjQwOCw1Mi45ODljLTExLjMtMS4wMjQtMjIuNjQ2LTAuOTI1LTMzLjg2MSwwLjI5OGwtMjEuOTQ2LTUxLjY5NlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwtMi44MDctNi42MTJsLTYuNjEyLDIuODA3TDEyMi43OTUsNTkuMjhsLTYuNjEyLDIuODA3bDIuODA3LDYuNjEybDIxLjk0Niw1MS42OThjLTguMjMyLDYuODU1LTE1LjgxMywxNC40ODgtMjIuNjI3LDIyLjc3MlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwtNTEuODk1LTIwLjk2NGwtNi42Ni0yLjY5M2wtMi42ODksNi42NjJMMjUuNjc1LDIwMy44N2wtMi42OSw2LjY1N2w2LjY1OCwyLjY5MWw1MC43NjgsMjAuNTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLTEuMjQ4LDExLjcxMS0xLjI3NiwyMy40NzUtMC4wODQsMzUuMTA0bC01MC45MjMsMjEuNjE2bC02LjYxMiwyLjgwN2wyLjgwNyw2LjYxMmwzMi43NDUsNzcuMTM3bDIuODA2LDYuNjA5bDYuNjEyLTIuODA3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbDUwLjI4Ni0yMS4zNDdjNy45MzksOS43MDMsMTYuOTUyLDE4LjUwMiwyNi44ODcsMjYuMjVsLTIwLjUxMiw1MC43NzJsLTIuNjg5LDYuNjZsNi42NTcsMi42ODhsNzcuNjk5LDMxLjM5MWw2LjY2LDIuNjkxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbDIuNjg4LTYuNjZsMjAuOTY0LTUxLjg5MWMxMS40OTYsMC45MjgsMjMuMDgyLDAuNjY5LDM0LjU3MS0wLjc3MWwyMS42NzksNTEuMDY5bDIuODA3LDYuNjEybDYuNjExLTIuODA3bDc3LjEzNy0zMi43NDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsNi42MTEtMi44MDdsLTIuODA3LTYuNjEybC0yMi4yMzQtNTIuMzc2YzcuOTM0LTYuNzk1LDE1LjI0Ni0xNC4zNDcsMjEuODI1LTIyLjUzM2w1Mi45ODQsMjEuNDAzbDYuNjU5LDIuNjkybDIuNjg4LTYuNjYxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbDMxLjM5MS03Ny42OThsMi42ODgtNi42NTlsLTYuNjU3LTIuNjg5bC01Mi43OTYtMjEuMzI4YzEuMDY0LTExLjEzNiwxLjAzMS0yMi4zMTItMC4wOTYtMzMuMzQ3bDUzLjEzMi0yMi41NTRMNDcyLjU5OCwyMTEuNTU0elxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE0zNDMuNTYzLDIxMS43MDhjMjEuOTI1LDUxLjY0Ny0yLjI1NSwxMTEuNTAxLTUzLjkwMSwxMzMuNDI1Yy01MS42NDgsMjEuOTI2LTExMS41MDItMi4yNTYtMTMzLjQyNy01My45MDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLTIxLjkyNS01MS42NDcsMi4yNTUtMTExLjUsNTMuOTAzLTEzMy40MjZDMjYxLjc4NCwxMzUuODgsMzIxLjYzOCwxNjAuMDYxLDM0My41NjMsMjExLjcwOHpcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICAgIGxlZnQ6MDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm5ldXRyYWxfZmFkZX07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRpdi5pbnZlcnQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYuaW52ZXJ0IHBhdGgge1xuICAgICAgICAgICAgc3Ryb2tlOiAke2Nzcy5uZXV0cmFsfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICR7Y3NzLmNlbnRlcn07XG4gICAgICAgIH1cblxuICAgICAgICBwYXRoIHtcbiAgICAgICAgICAgIHN0cm9rZTogJHtjc3MucmVkfTtcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMzBweDtcbiAgICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDIxMDA7XG4gICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgbG9hZGluZyB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDIxMDA7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkaXYubG9hZGluZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdi5sb2FkaW5nLnNob3cge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdi5sb2FkaW5nLnRvQmFjayB7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdi5sb2FkaW5nLnNob3cgcGF0aCB7XG4gICAgICAgICAgICBhbmltYXRpb246IGxvYWRpbmcgMnMgZWFzZSBhbHRlcm5hdGUgaW5maW5pdGU7XG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7Il19 */\n/*@ sourceURL=components/reusable/Loading.js */'
            }));
        }
    }]);

    return Loading;
}(_react.Component);

exports.default = Loading;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmV1c2FibGUvTG9hZGluZy5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJjc3MiLCJMb2FkaW5nIiwicHJvcHMiLCJzdGF0ZSIsInRvQmFjayIsInNob3ciLCJzZXRTdGF0ZSIsIm5leHRQcm9wcyIsImNsYXNzTmFtZSIsImludmVydCIsImJpbmQiLCJuZXV0cmFsX2ZhZGUiLCJuZXV0cmFsIiwiY2VudGVyIiwicmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFROzs7O0FBQ1IsQUFBTyxBQUFTOzs7Ozs7Ozs7SUFFVixBO3FDQUNGOztxQkFBQSxBQUFZLE9BQU87NENBQUE7OzRJQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO29CQUNRLENBQUMsTUFIQyxBQUVmLEFBQWEsQUFDTztBQURQLEFBQ1Q7ZUFFUDs7Ozs7aUNBRVEsQUFDTDtBQUNBO2lCQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsQUFDcEI7aUJBQUEsQUFBSyxTQUFTLEtBQWQsQUFBbUIsQUFDdEI7Ozs7a0RBRXlCLEEsV0FBVyxBQUNqQztnQkFBRyxVQUFBLEFBQVUsUUFBYixBQUFxQixNQUFNLEFBQ3ZCO3FCQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsQUFDdkI7QUFDSjs7OztpQ0FFUyxBQUNOO2dCQUFJLFlBQUosQUFBZ0IsQUFDaEI7Z0JBQUcsS0FBQSxBQUFLLE1BQVIsQUFBYyxRQUFRLFlBQVksWUFBWixBQUF3QixBQUM5QztnQkFBRyxLQUFBLEFBQUssTUFBUixBQUFjLE1BQU0sWUFBWSxZQUFaLEFBQXdCLEFBQzVDO2dCQUFHLEtBQUEsQUFBSyxNQUFSLEFBQWMsUUFBUSxZQUFZLFlBQVosQUFBd0IsQUFFOUM7O0FBQ0E7bUNBQ0ksY0FBQSxTQUEyQixpQkFBaUIsS0FBQSxBQUFLLE9BQUwsQUFBWSxLQUF4RCxBQUE0QyxBQUFpQiw0Q0FBN0QsQUFBZ0IsYUFBaEI7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLGNBQUEsU0FBSyxTQUFMLEFBQWEsMEJBQWI7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSx1REFDVSxNQUFOLEFBQVcsUUFBTyxRQUFsQixBQUF5QixXQUFVLGFBQW5DLEFBQStDLE1BQUssaUJBQXBELEFBQW9FLE1BQUssR0FBekUsQUFBMkUsd3hDQUEzRTs7OEJBQUE7Z0NBSFosQUFDSSxBQUNJLEFBQ0k7QUFBQTs7eUJBSFo7OEdBd0JjLGdCQXhCZCxBQXdCa0IsNkhBUVIsZ0JBaENWLEFBZ0NjLDJEQU1aLGdCQXRDRixBQXNDTSwyQ0FJSSxnQkExQ1YsQUEwQ2MsTUEzQ2xCLEFBQ0ksQUFtRlA7QUFuRk87Ozs7O0FBNUJVLEEsQUFrSHRCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkxvYWRpbmcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0ZWZhbi5yYWR1c2kvcHJvamVjdHMvaGFpaHVpL25leHQtYWhoIn0=