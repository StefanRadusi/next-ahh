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

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _timers = require('timers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stefan.radusi/projects/haihui/next-ahh/components/reusable/ImgPreviewer.js';


var ImgPreviewer = function (_Component) {
    (0, _inherits3.default)(ImgPreviewer, _Component);

    function ImgPreviewer(props) {
        (0, _classCallCheck3.default)(this, ImgPreviewer);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ImgPreviewer.__proto__ || (0, _getPrototypeOf2.default)(ImgPreviewer)).call(this, props));

        _this.state = {
            loading: false,
            showPic: false,
            currentIndex: 0,
            imgList: [],
            previewShow: false,
            display: false
        };
        return _this;
    }

    (0, _createClass3.default)(ImgPreviewer, [{
        key: 'nextPicLeft',
        value: function nextPicLeft() {
            var _this2 = this;

            if (this.state.currentIndex > 0) {
                this.hidePic();
                (0, _timers.setTimeout)(function () {
                    _this2.state.currentIndex--;
                    _this2.setState(_this2.state);
                }, 500);
            }
        }
    }, {
        key: 'nextPicRight',
        value: function nextPicRight() {
            var _this3 = this;

            if (this.state.currentIndex < this.state.imgList.length - 1) {
                this.hidePic();
                (0, _timers.setTimeout)(function () {
                    _this3.state.currentIndex++;
                    _this3.setState(_this3.state);
                }, 500);
            }
        }
    }, {
        key: 'showPic',
        value: function showPic(event) {
            // console.log(event);
            this.state.loading = false;
            this.state.showPic = true;
            this.setState(this.state);
        }
    }, {
        key: 'hidePic',
        value: function hidePic() {
            this.state.loading = true;
            this.state.showPic = false;
            // console.log(this.state);
            this.setState(this.state);

            (0, _timers.setTimeout)(function () {
                // if(this.state.loading) {
                //     this.showPic();
                // }
            }, 6000);
        }
    }, {
        key: 'closeImgPreviewer',
        value: function closeImgPreviewer() {
            this.state.previewShow = false;
            this.setState(this.state);
            this.props.hidePreviewer();
        }
    }, {
        key: 'displayNone',
        value: function displayNone(event) {
            if (this.state.previewShow == false && event.target.classList.contains('previewerContainer')) {
                this.state.display = false;
                this.setState(this.state);
            }
        }
    }, {
        key: 'showImgPreviewer',
        value: function showImgPreviewer(imgList, index) {
            var _this4 = this;

            console.log('open previewer');
            this.state.display = true;
            this.setState(this.state);
            if (this.state.imgList[this.state.currentIndex] != imgList[index]) {
                this.hidePic();
            }
            (0, _timers.setTimeout)(function () {
                _this4.state.currentIndex = index;
                _this4.state.imgList = imgList;
                _this4.state.previewShow = true;
                _this4.setState(_this4.state);
            }, 100);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.showPreviewer == true) {
                this.showImgPreviewer(nextProps.currentImgList, nextProps.currentImgPreviewIndex);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var classContainer = 'previewerContainer';
            if (this.state.previewShow) classContainer += ' showContainer ';
            if (this.state.display) classContainer += ' display ';

            return _react2.default.createElement('div', { onTransitionEnd: this.displayNone.bind(this), className: 'jsx-1837379780' + ' ' + (classContainer || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-1837379780' + ' ' + 'actions',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-1837379780' + ' ' + 'imgContainer',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, _react2.default.createElement('img', {
                src: this.state.imgList[this.state.currentIndex]
                // onLoadStart={this.hidePic.bind(this)} 
                , onLoad: this.showPic.bind(this),
                className: 'jsx-1837379780' + ' ' + (this.state.showPic && 'show' || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }), _react2.default.createElement(_Loading2.default, { show: this.state.loading, invert: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            })), _react2.default.createElement('div', { onClick: this.nextPicLeft.bind(this), className: 'jsx-1837379780' + ' ' + 'navigate left',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, _react2.default.createElement('svg', { viewBox: '0 0 500 500', className: 'jsx-1837379780',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _react2.default.createElement('polygon', { id: 'leftPrev', points: '450,100 50,250 450,400', className: 'jsx-1837379780',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, _react2.default.createElement('animate', { begin: 'leftPrev.click', attributeName: 'points', dur: '200ms', to: '180,100 0,250 180,400', id: 'firstleft', className: 'jsx-1837379780',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }), _react2.default.createElement('animate', { begin: 'firstleft.begin + .06s', attributeName: 'points', dur: '200ms', to: '450,100 50,250 450,400', className: 'jsx-1837379780',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            })))), _react2.default.createElement('div', { onClick: this.nextPicRight.bind(this), className: 'jsx-1837379780' + ' ' + 'navigate right',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }, _react2.default.createElement('svg', { viewBox: '0 0 500 500', className: 'jsx-1837379780',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, _react2.default.createElement('polygon', { id: 'rightPrev', points: '50,100 450,250 50,400', className: 'jsx-1837379780',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, _react2.default.createElement('animate', { begin: 'rightPrev.click', attributeName: 'points', dur: '200ms', to: '320,100 480,250 320,400', id: 'firstright', className: 'jsx-1837379780',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }), _react2.default.createElement('animate', { begin: 'firstleft.begin + .06s', attributeName: 'points', dur: '200ms', to: '320,100 450,250 320,400', className: 'jsx-1837379780',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            })))), _react2.default.createElement('div', { onClick: this.closeImgPreviewer.bind(this), className: 'jsx-1837379780' + ' ' + 'closeButton',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, _react2.default.createElement('img', { src: './static/delete.png', className: 'jsx-1837379780',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }))), _react2.default.createElement(_style2.default, {
                styleId: '1837379780',
                css: 'div.previewerContainer.jsx-1837379780{background:rgba(0,0,0,0.8);position:fixed;top:0;left:0;width:100%;height:100%;opacity:0;z-index:1;display:none;-webkit-transition:opacity .5s ease;transition:opacity .5s ease;}div.previewerContainer.showContainer.jsx-1837379780{opacity:1;}div.previewerContainer.display.jsx-1837379780{display:block;}div.actions.jsx-1837379780{height:90%;width:90%;' + _utils2.default.center + ';}div.imgContainer.jsx-1837379780{width:calc(100% - 50px);height:calc(100% - 50px);padding:25px;position:relative;}div.imgContainer.jsx-1837379780 img.jsx-1837379780{' + _utils2.default.center + ';max-width:calc(100% - 100px);max-height:calc(100% - 100px);height:auto;width:auto;border-radius:4px;opacity:0;-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease;}div.imgContainer.jsx-1837379780 img.show.jsx-1837379780{opacity:1;}@media (max-width:700px){div.actions.jsx-1837379780{height:98%;width:98%;}div.imgContainer.jsx-1837379780 img.jsx-1837379780{max-width:calc(100% - 50px);max-height:calc(100% - 50px);}}div.navigate.jsx-1837379780{height:100%;width:25px;position:absolute;top:0;left:0;}div.navigate.right.jsx-1837379780{left:unset;right:0;}svg.jsx-1837379780{height:100%;width:20px;}div.navigate.right.jsx-1837379780 svg.jsx-1837379780{float:right;}polygon.jsx-1837379780{fill:transparent;stroke:' + _utils2.default.neutral + ';stroke-width:40;stroke-linecap:round;stroke-linejoin:round;-webkit-transition:all 1s ease;transition:all 1s ease;}polygon.jsx-1837379780:hover{fill:' + _utils2.default.neutral + ';}div.closeButton.jsx-1837379780{position:absolute;top:0;right:0;padding:5px;}div.closeButton.jsx-1837379780 img.jsx-1837379780{height:10px;-webkit-filter:invert(100%);filter:invert(100%);-webkit-transition:filter 0.3s ease;transition:filter 0.3s ease;}div.closeButton.jsx-1837379780 img.jsx-1837379780:hover{-webkit-filter:invert(80%);filter:invert(80%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmV1c2FibGUvSW1nUHJldmlld2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9JQSxBQUVnQyxBQWNqQixBQUlJLEFBSUgsQUFPYSxBQU9JLEFBWWxCLEFBS0ssQUFLaUIsQUFNcEIsQUFVRCxBQUtDLEFBS0EsQUFJSSxBQVVrQixBQUloQixBQU9OLEFBT08sVUFyR3ZCLEFBa0NBLENBMUJjLEFBK0JJLEFBcUJQLENBVkksQUFlQSxBQUtmLEFBeUJ3QixFQTNGeEIsR0FzRXdDLENBYzlCLENBM0JWLEVBcERnQyxBQStCNUIsRUFXa0IsQUFldEIsQ0FuRDZCLEFBMEVqQixHQXZHTyxDQTBEa0IsQ0F0QkosR0FvRWpCLEVBTmhCLE9BaENTLENBakVBLEVBd0dULEVBV0EsQ0FqRFUsQ0FqRUEsQ0E0Qk8sQ0FOakIsR0FpRW9CLENBbkJuQixDQW5FYSxFQXdEVixDQXRCOEIsRUEwRUYsRUFoRlYsSUEzQlAsR0FzRlUsU0FyRlgsRUEyQmQsUUExQmMsQUFnQ0UsRUFxRFUsUUFwRlYsRUFnQ0QsV0E5QmlCLEFBK0JWLENBcURLLFlBbUIzQixLQXZFYSxVQUVvQiwyQkFtRGpDLFNBcEZBLDhCQWtDQSIsImZpbGUiOiJjb21wb25lbnRzL3JldXNhYmxlL0ltZ1ByZXZpZXdlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3RlZmFuLnJhZHVzaS9wcm9qZWN0cy9oYWlodWkvbmV4dC1haGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi9jc3MvdXRpbHMnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcbmltcG9ydCB7IHNldFRpbWVvdXQgfSBmcm9tICd0aW1lcnMnO1xuXG5jbGFzcyBJbWdQcmV2aWV3ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nIDogZmFsc2UsXG4gICAgICAgICAgICBzaG93UGljIDogZmFsc2UsXG4gICAgICAgICAgICBjdXJyZW50SW5kZXggOiAwLFxuICAgICAgICAgICAgaW1nTGlzdCA6IFtdLFxuICAgICAgICAgICAgcHJldmlld1Nob3cgOiBmYWxzZSxcbiAgICAgICAgICAgIGRpc3BsYXkgOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBuZXh0UGljTGVmdCgpIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jdXJyZW50SW5kZXggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVQaWMoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudEluZGV4LS07XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbmV4dFBpY1JpZ2h0KCkge1xuICAgICAgICBpZih0aGlzLnN0YXRlLmN1cnJlbnRJbmRleCA8IHRoaXMuc3RhdGUuaW1nTGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVQaWMoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudEluZGV4Kys7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93UGljKGV2ZW50KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhdGUuc2hvd1BpYyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgfVxuICAgIFxuICAgIGhpZGVQaWMoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RhdGUuc2hvd1BpYyA9IGZhbHNlO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIGlmKHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2hvd1BpYygpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9LCA2MDAwKTtcbiAgICB9ICAgXG5cbiAgICBjbG9zZUltZ1ByZXZpZXdlcigpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5wcmV2aWV3U2hvdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xuICAgICAgICB0aGlzLnByb3BzLmhpZGVQcmV2aWV3ZXIoKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5Tm9uZShldmVudCkge1xuICAgICAgICBpZigodGhpcy5zdGF0ZS5wcmV2aWV3U2hvdyA9PSBmYWxzZSkgJiYgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJldmlld2VyQ29udGFpbmVyJykpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZGlzcGxheSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dJbWdQcmV2aWV3ZXIoaW1nTGlzdCwgaW5kZXgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29wZW4gcHJldmlld2VyJyk7XG4gICAgICAgIHRoaXMuc3RhdGUuZGlzcGxheSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaW1nTGlzdFt0aGlzLnN0YXRlLmN1cnJlbnRJbmRleF0gIT0gaW1nTGlzdFtpbmRleF0pIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVBpYygpO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW1nTGlzdCA9IGltZ0xpc3Q7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnByZXZpZXdTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgICAgIH0sIDEwMClcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZihuZXh0UHJvcHMuc2hvd1ByZXZpZXdlciA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dJbWdQcmV2aWV3ZXIobmV4dFByb3BzLmN1cnJlbnRJbWdMaXN0LCBuZXh0UHJvcHMuY3VycmVudEltZ1ByZXZpZXdJbmRleClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNsYXNzQ29udGFpbmVyID0gJ3ByZXZpZXdlckNvbnRhaW5lcic7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUucHJldmlld1Nob3cpIGNsYXNzQ29udGFpbmVyICs9ICcgc2hvd0NvbnRhaW5lciAnO1xuICAgICAgICBpZih0aGlzLnN0YXRlLmRpc3BsYXkpIGNsYXNzQ29udGFpbmVyICs9ICcgZGlzcGxheSAnO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NDb250YWluZXJ9IG9uVHJhbnNpdGlvbkVuZD17dGhpcy5kaXNwbGF5Tm9uZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWN0aW9ucyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWdDb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zaG93UGljICYmICdzaG93J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuaW1nTGlzdFt0aGlzLnN0YXRlLmN1cnJlbnRJbmRleF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25Mb2FkU3RhcnQ9e3RoaXMuaGlkZVBpYy5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQ9e3RoaXMuc2hvd1BpYy5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIHNob3c9e3RoaXMuc3RhdGUubG9hZGluZ30gaW52ZXJ0Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZpZ2F0ZSBsZWZ0JyBvbkNsaWNrPXt0aGlzLm5leHRQaWNMZWZ0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDUwMCA1MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD1cImxlZnRQcmV2XCIgcG9pbnRzPVwiNDUwLDEwMCA1MCwyNTAgNDUwLDQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBiZWdpbj1cImxlZnRQcmV2LmNsaWNrXCIgYXR0cmlidXRlTmFtZT1cInBvaW50c1wiIGR1cj1cIjIwMG1zXCIgdG89XCIxODAsMTAwIDAsMjUwIDE4MCw0MDBcIiBpZD1cImZpcnN0bGVmdFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgYmVnaW49XCJmaXJzdGxlZnQuYmVnaW4gKyAuMDZzXCIgYXR0cmlidXRlTmFtZT1cInBvaW50c1wiIGR1cj1cIjIwMG1zXCIgdG89XCI0NTAsMTAwIDUwLDI1MCA0NTAsNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BvbHlnb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZpZ2F0ZSByaWdodCcgb25DbGljaz17dGhpcy5uZXh0UGljUmlnaHQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNTAwIDUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPVwicmlnaHRQcmV2XCIgcG9pbnRzPVwiNTAsMTAwIDQ1MCwyNTAgNTAsNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGJlZ2luPVwicmlnaHRQcmV2LmNsaWNrXCIgYXR0cmlidXRlTmFtZT1cInBvaW50c1wiIGR1cj1cIjIwMG1zXCIgdG89XCIzMjAsMTAwIDQ4MCwyNTAgMzIwLDQwMFwiIGlkPVwiZmlyc3RyaWdodFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgYmVnaW49XCJmaXJzdGxlZnQuYmVnaW4gKyAuMDZzXCIgYXR0cmlidXRlTmFtZT1cInBvaW50c1wiIGR1cj1cIjIwMG1zXCIgdG89XCIzMjAsMTAwIDQ1MCwyNTAgMzIwLDQwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wb2x5Z29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xvc2VCdXR0b24nIG9uQ2xpY2s9e3RoaXMuY2xvc2VJbWdQcmV2aWV3ZXIuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi9zdGF0aWMvZGVsZXRlLnBuZycgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG48c3R5bGUganN4PiB7XG5gZGl2LnByZXZpZXdlckNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OjA7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTpub25lO1xuXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZTtcbn1cblxuZGl2LnByZXZpZXdlckNvbnRhaW5lci5zaG93Q29udGFpbmVyIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG5kaXYucHJldmlld2VyQ29udGFpbmVyLmRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5kaXYuYWN0aW9ucyB7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICAke2Nzcy5jZW50ZXJ9O1xufVxuXG5cbmRpdi5pbWdDb250YWluZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5kaXYuaW1nQ29udGFpbmVyIGltZyB7XG4gICAgJHtjc3MuY2VudGVyfTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvcGFjaXR5OjA7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcbn1cblxuZGl2LmltZ0NvbnRhaW5lciBpbWcuc2hvdyB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgZGl2LmFjdGlvbnMge1xuICAgICAgICBoZWlnaHQ6IDk4JTtcbiAgICAgICAgd2lkdGg6IDk4JTtcbiAgICB9XG4gICAgXG4gICAgZGl2LmltZ0NvbnRhaW5lciBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgICB9XG5cbn1cbmRpdi5uYXZpZ2F0ZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OjA7XG4gICAgLy8gYmFja2dyb3VuZDogJHtjc3MubmV1dHJhbH07XG4gICAgLy8gYm94LXNoYWRvdzogMHB4IC00cHggNHB4IDJweCByZ2JhKDAsMCwwLC4zKTtcbn1cblxuZGl2Lm5hdmlnYXRlLnJpZ2h0IHtcbiAgICBsZWZ0OiB1bnNldDtcbiAgICByaWdodDowO1xufVxuXG5zdmcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuZGl2Lm5hdmlnYXRlLnJpZ2h0IHN2ZyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5wb2x5Z29uIHtcbiAgICBmaWxsOnRyYW5zcGFyZW50O1xuICAgIHN0cm9rZTogJHtjc3MubmV1dHJhbH07XG4gICAgc3Ryb2tlLXdpZHRoOiA0MDtcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICBcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbn1cblxucG9seWdvbjpob3ZlciB7XG4gICAgZmlsbDogJHtjc3MubmV1dHJhbH07XG59XG5cbmRpdi5jbG9zZUJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbmRpdi5jbG9zZUJ1dHRvbiBpbWcge1xuICAgIGhlaWdodDogMTBweDtcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcblxuICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjNzIGVhc2U7XG59XG5cbmRpdi5jbG9zZUJ1dHRvbiBpbWc6aG92ZXIge1xuICAgIGZpbHRlcjogaW52ZXJ0KDgwJSk7XG59XG5cbmB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWdQcmV2aWV3ZXI7Il19 */\n/*@ sourceURL=components/reusable/ImgPreviewer.js */'
            }));
        }
    }]);

    return ImgPreviewer;
}(_react.Component);

exports.default = ImgPreviewer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmV1c2FibGUvSW1nUHJldmlld2VyLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImNzcyIsIkxvYWRpbmciLCJzZXRUaW1lb3V0IiwiSW1nUHJldmlld2VyIiwicHJvcHMiLCJzdGF0ZSIsImxvYWRpbmciLCJzaG93UGljIiwiY3VycmVudEluZGV4IiwiaW1nTGlzdCIsInByZXZpZXdTaG93IiwiZGlzcGxheSIsImhpZGVQaWMiLCJzZXRTdGF0ZSIsImxlbmd0aCIsImV2ZW50IiwiaGlkZVByZXZpZXdlciIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwibmV4dFByb3BzIiwic2hvd1ByZXZpZXdlciIsInNob3dJbWdQcmV2aWV3ZXIiLCJjdXJyZW50SW1nTGlzdCIsImN1cnJlbnRJbWdQcmV2aWV3SW5kZXgiLCJjbGFzc0NvbnRhaW5lciIsImRpc3BsYXlOb25lIiwiYmluZCIsIm5leHRQaWNMZWZ0IiwibmV4dFBpY1JpZ2h0IiwiY2xvc2VJbWdQcmV2aWV3ZXIiLCJjZW50ZXIiLCJuZXV0cmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFROzs7O0FBQ1IsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFTOzs7Ozs7O0ksQUFFSDswQ0FDRjs7MEJBQUEsQUFBWSxPQUFPOzRDQUFBOztzSkFBQSxBQUNULEFBRU47O2NBQUEsQUFBSztxQkFBUSxBQUNDLEFBQ1Y7cUJBRlMsQUFFQyxBQUNWOzBCQUhTLEFBR00sQUFDZjtxQkFKUyxBQUlDLEFBQ1Y7eUJBTFMsQUFLSyxBQUNkO3FCQVRXLEFBR2YsQUFBYSxBQU1DO0FBTkQsQUFDVDtlQU9QOzs7OztzQ0FFYTt5QkFDVjs7Z0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxlQUFkLEFBQTZCLEdBQUcsQUFDNUI7cUJBQUEsQUFBSyxBQUNMO3dDQUFXLFlBQU0s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OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsYUFBUyxJQUFULEFBQVksYUFBWSxRQUF4QixBQUErQixvQ0FBL0I7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjswREFDYSxPQUFULEFBQWUsbUJBQWtCLGVBQWpDLEFBQStDLFVBQVMsS0FBeEQsQUFBNEQsU0FBUSxJQUFwRSxBQUF1RSwyQkFBMEIsSUFBakcsQUFBb0cseUJBQXBHOzs4QkFBQTtnQ0FESixBQUNJLEFBQ0E7QUFEQTsyREFDUyxPQUFULEFBQWUsMEJBQXlCLGVBQXhDLEFBQXNELFVBQVMsS0FBL0QsQUFBbUUsU0FBUSxJQUEzRSxBQUE4RSxzQ0FBOUU7OzhCQUFBO2dDQXZCaEIsQUFtQkksQUFDSSxBQUNJLEFBRUksQUFJWjtBQUpZO21DQUlaLGNBQUEsU0FBNkIsU0FBUyxLQUFBLEFBQUssa0JBQUwsQUFBdUIsS0FBN0QsQUFBc0MsQUFBNEIsMkNBQWxFLEFBQWU7OzhCQUFmO2dDQUFBLEFBQ0k7QUFESjtzREFDUyxLQUFMLEFBQVMsa0NBQVQ7OzhCQUFBO2dDQTdCWixBQUNJLEFBMkJJLEFBQ0k7QUFBQTs7eUJBN0JaOzRaQTBETixnQkExRE0sQUEwREYsb0xBWUosZ0JBdEVNLEFBc0VGLGd1QkFxREksZ0JBM0hGLEFBMkhNLG9LQVNOLGdCQXBJQSxBQW9JSSxVQXJJUixBQUNJLEFBNEpQO0FBNUpPOzs7OztBQTlGZSxBLEFBNlAzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJJbWdQcmV2aWV3ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0ZWZhbi5yYWR1c2kvcHJvamVjdHMvaGFpaHVpL25leHQtYWhoIn0=