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

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _timers = require('timers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\programming\\nodejs\\heroku\\next-ahh\\components\\reusable\\ImgPreviewer.js';


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

            return _react2.default.createElement('div', { onTransitionEnd: this.displayNone.bind(this), className: 'jsx-2500001391' + ' ' + (classContainer || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2500001391' + ' ' + 'actions',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2500001391' + ' ' + 'imgContainer',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, _react2.default.createElement('img', {
                src: this.state.imgList[this.state.currentIndex]
                // onLoadStart={this.hidePic.bind(this)} 
                , onLoad: this.showPic.bind(this),
                className: 'jsx-2500001391' + ' ' + (this.state.showPic && 'show' || ''),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }), _react2.default.createElement(_Loading2.default, { show: this.state.loading, invert: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            })), _react2.default.createElement('div', { onClick: this.nextPicLeft.bind(this), className: 'jsx-2500001391' + ' ' + 'navigate left',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, _react2.default.createElement('svg', { viewBox: '0 0 500 500', className: 'jsx-2500001391',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _react2.default.createElement('polygon', { id: 'leftPrev', points: '450,100 50,250 450,400', className: 'jsx-2500001391',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, _react2.default.createElement('animate', { begin: 'leftPrev.click', attributeName: 'points', dur: '200ms', to: '180,100 0,250 180,400', id: 'firstleft', className: 'jsx-2500001391',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }), _react2.default.createElement('animate', { begin: 'firstleft.begin + .06s', attributeName: 'points', dur: '200ms', to: '450,100 50,250 450,400', className: 'jsx-2500001391',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            })))), _react2.default.createElement('div', { onClick: this.nextPicRight.bind(this), className: 'jsx-2500001391' + ' ' + 'navigate right',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }, _react2.default.createElement('svg', { viewBox: '0 0 500 500', className: 'jsx-2500001391',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, _react2.default.createElement('polygon', { id: 'rightPrev', points: '50,100 450,250 50,400', className: 'jsx-2500001391',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, _react2.default.createElement('animate', { begin: 'rightPrev.click', attributeName: 'points', dur: '200ms', to: '320,100 480,250 320,400', id: 'firstright', className: 'jsx-2500001391',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }), _react2.default.createElement('animate', { begin: 'firstleft.begin + .06s', attributeName: 'points', dur: '200ms', to: '320,100 450,250 320,400', className: 'jsx-2500001391',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            })))), _react2.default.createElement('div', { onClick: this.closeImgPreviewer.bind(this), className: 'jsx-2500001391' + ' ' + 'closeButton',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, _react2.default.createElement('img', { src: './static/delete.png', className: 'jsx-2500001391',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }))), _react2.default.createElement(_style2.default, {
                styleId: '2500001391',
                css: 'div.previewerContainer.jsx-2500001391{background:rgba(0,0,0,0.8);position:fixed;top:0;left:0;width:100%;height:100%;opacity:0;z-index:1;display:none;-webkit-transition:opacity .5s ease;transition:opacity .5s ease;}div.previewerContainer.showContainer.jsx-2500001391{opacity:1;}div.previewerContainer.display.jsx-2500001391{display:block;}div.actions.jsx-2500001391{height:90%;width:90%;' + _utils2.default.center + ';}div.imgContainer.jsx-2500001391{width:calc(100% - 50px);height:calc(100% - 50px);padding:25px;position:relative;}div.imgContainer.jsx-2500001391 img.jsx-2500001391{' + _utils2.default.center + ';max-width:calc(100% - 100px);max-height:calc(100% - 100px);height:auto;width:auto;border-radius:4px;opacity:0;-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease;}div.imgContainer.jsx-2500001391 img.show.jsx-2500001391{opacity:1;}@media (max-width:700px){div.actions.jsx-2500001391{height:98%;width:98%;}div.imgContainer.jsx-2500001391 img.jsx-2500001391{max-width:calc(100% - 50px);max-height:calc(100% - 50px);}}div.navigate.jsx-2500001391{height:100%;width:25px;position:absolute;top:0;left:0;}div.navigate.right.jsx-2500001391{left:unset;right:0;}svg.jsx-2500001391{height:100%;width:20px;}div.navigate.right.jsx-2500001391 svg.jsx-2500001391{float:right;}polygon.jsx-2500001391{fill:transparent;stroke:' + _utils2.default.neutral + ';stroke-width:40;stroke-linecap:round;stroke-linejoin:round;-webkit-transition:all 1s ease;transition:all 1s ease;}polygon.jsx-2500001391:hover{fill:' + _utils2.default.neutral + ';}div.closeButton.jsx-2500001391{position:absolute;top:0;right:0;padding:5px;}div.closeButton.jsx-2500001391 img.jsx-2500001391{height:10px;-webkit-filter:invert(100%);filter:invert(100%);-webkit-transition:filter 0.3s ease;transition:filter 0.3s ease;}div.closeButton.jsx-2500001391 img.jsx-2500001391:hover{-webkit-filter:invert(80%);filter:invert(80%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJldXNhYmxlXFxJbWdQcmV2aWV3ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0lBLEFBRWdDLEFBY2pCLEFBSUksQUFJSCxBQU9hLEFBT0ksQUFZbEIsQUFLSyxBQUtpQixBQU1wQixBQVVELEFBS0MsQUFLQSxBQUlJLEFBVWtCLEFBSWhCLEFBT04sQUFPTyxVQXJHdkIsQUFrQ0EsQ0ExQmMsQUErQkksQUFxQlAsQ0FWSSxBQWVBLEFBS2YsQUF5QndCLEVBM0Z4QixHQXNFd0MsQ0FjOUIsQ0EzQlYsRUFwRGdDLEFBK0I1QixFQVdrQixBQWV0QixDQW5ENkIsQUEwRWpCLEdBdkdPLENBMERrQixDQXRCSixHQW9FakIsRUFOaEIsT0FoQ1MsQ0FqRUEsRUF3R1QsRUFXQSxDQWpEVSxDQWpFQSxDQTRCTyxDQU5qQixHQWlFb0IsQ0FuQm5CLENBbkVhLEVBd0RWLENBdEI4QixFQTBFRixFQWhGVixJQTNCUCxHQXNGVSxTQXJGWCxFQTJCZCxRQTFCYyxBQWdDRSxFQXFEVSxRQXBGVixFQWdDRCxXQTlCaUIsQUErQlYsQ0FxREssWUFtQjNCLEtBdkVhLFVBRW9CLDJCQW1EakMsU0FwRkEsOEJBa0NBIiwiZmlsZSI6ImNvbXBvbmVudHNcXHJldXNhYmxlXFxJbWdQcmV2aWV3ZXIuanMiLCJzb3VyY2VSb290IjoiRDovcHJvZ3JhbW1pbmcvbm9kZWpzL2hlcm9rdS9uZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjc3MgZnJvbSAnLi4vLi4vY3NzL3V0aWxzJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcclxuaW1wb3J0IHsgc2V0VGltZW91dCB9IGZyb20gJ3RpbWVycyc7XHJcblxyXG5jbGFzcyBJbWdQcmV2aWV3ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93UGljIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCA6IDAsXHJcbiAgICAgICAgICAgIGltZ0xpc3QgOiBbXSxcclxuICAgICAgICAgICAgcHJldmlld1Nob3cgOiBmYWxzZSxcclxuICAgICAgICAgICAgZGlzcGxheSA6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmV4dFBpY0xlZnQoKSB7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jdXJyZW50SW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZVBpYygpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudEluZGV4LS07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgbmV4dFBpY1JpZ2h0KCkge1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuY3VycmVudEluZGV4IDwgdGhpcy5zdGF0ZS5pbWdMaXN0Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlUGljKCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50SW5kZXgrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dQaWMoZXZlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zaG93UGljID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoaWRlUGljKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zaG93UGljID0gZmFsc2U7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGlmKHRoaXMuc3RhdGUubG9hZGluZykge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zaG93UGljKCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9LCA2MDAwKTtcclxuICAgIH0gICBcclxuXHJcbiAgICBjbG9zZUltZ1ByZXZpZXdlcigpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnByZXZpZXdTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmhpZGVQcmV2aWV3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5Tm9uZShldmVudCkge1xyXG4gICAgICAgIGlmKCh0aGlzLnN0YXRlLnByZXZpZXdTaG93ID09IGZhbHNlKSAmJiBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcmV2aWV3ZXJDb250YWluZXInKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmRpc3BsYXkgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0ltZ1ByZXZpZXdlcihpbWdMaXN0LCBpbmRleCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvcGVuIHByZXZpZXdlcicpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZGlzcGxheSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmltZ0xpc3RbdGhpcy5zdGF0ZS5jdXJyZW50SW5kZXhdICE9IGltZ0xpc3RbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZVBpYygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50SW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbWdMaXN0ID0gaW1nTGlzdDtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcmV2aWV3U2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgfSwgMTAwKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYobmV4dFByb3BzLnNob3dQcmV2aWV3ZXIgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJbWdQcmV2aWV3ZXIobmV4dFByb3BzLmN1cnJlbnRJbWdMaXN0LCBuZXh0UHJvcHMuY3VycmVudEltZ1ByZXZpZXdJbmRleClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBjbGFzc0NvbnRhaW5lciA9ICdwcmV2aWV3ZXJDb250YWluZXInO1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUucHJldmlld1Nob3cpIGNsYXNzQ29udGFpbmVyICs9ICcgc2hvd0NvbnRhaW5lciAnO1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuZGlzcGxheSkgY2xhc3NDb250YWluZXIgKz0gJyBkaXNwbGF5ICc7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0NvbnRhaW5lcn0gb25UcmFuc2l0aW9uRW5kPXt0aGlzLmRpc3BsYXlOb25lLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FjdGlvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWdDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2hvd1BpYyAmJiAnc2hvdyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuaW1nTGlzdFt0aGlzLnN0YXRlLmN1cnJlbnRJbmRleF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkxvYWRTdGFydD17dGhpcy5oaWRlUGljLmJpbmQodGhpcyl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2FkPXt0aGlzLnNob3dQaWMuYmluZCh0aGlzKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyBzaG93PXt0aGlzLnN0YXRlLmxvYWRpbmd9IGludmVydC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmlnYXRlIGxlZnQnIG9uQ2xpY2s9e3RoaXMubmV4dFBpY0xlZnQuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA1MDAgNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD1cImxlZnRQcmV2XCIgcG9pbnRzPVwiNDUwLDEwMCA1MCwyNTAgNDUwLDQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGJlZ2luPVwibGVmdFByZXYuY2xpY2tcIiBhdHRyaWJ1dGVOYW1lPVwicG9pbnRzXCIgZHVyPVwiMjAwbXNcIiB0bz1cIjE4MCwxMDAgMCwyNTAgMTgwLDQwMFwiIGlkPVwiZmlyc3RsZWZ0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGJlZ2luPVwiZmlyc3RsZWZ0LmJlZ2luICsgLjA2c1wiIGF0dHJpYnV0ZU5hbWU9XCJwb2ludHNcIiBkdXI9XCIyMDBtc1wiIHRvPVwiNDUwLDEwMCA1MCwyNTAgNDUwLDQwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BvbHlnb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZpZ2F0ZSByaWdodCcgb25DbGljaz17dGhpcy5uZXh0UGljUmlnaHQuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA1MDAgNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD1cInJpZ2h0UHJldlwiIHBvaW50cz1cIjUwLDEwMCA0NTAsMjUwIDUwLDQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGJlZ2luPVwicmlnaHRQcmV2LmNsaWNrXCIgYXR0cmlidXRlTmFtZT1cInBvaW50c1wiIGR1cj1cIjIwMG1zXCIgdG89XCIzMjAsMTAwIDQ4MCwyNTAgMzIwLDQwMFwiIGlkPVwiZmlyc3RyaWdodFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBiZWdpbj1cImZpcnN0bGVmdC5iZWdpbiArIC4wNnNcIiBhdHRyaWJ1dGVOYW1lPVwicG9pbnRzXCIgZHVyPVwiMjAwbXNcIiB0bz1cIjMyMCwxMDAgNDUwLDI1MCAzMjAsNDAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcG9seWdvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Nsb3NlQnV0dG9uJyBvbkNsaWNrPXt0aGlzLmNsb3NlSW1nUHJldmlld2VyLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi9zdGF0aWMvZGVsZXRlLnBuZycgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG48c3R5bGUganN4PiB7XHJcbmBkaXYucHJldmlld2VyQ29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC44KTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZTtcclxufVxyXG5cclxuZGl2LnByZXZpZXdlckNvbnRhaW5lci5zaG93Q29udGFpbmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmRpdi5wcmV2aWV3ZXJDb250YWluZXIuZGlzcGxheSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuZGl2LmFjdGlvbnMge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgJHtjc3MuY2VudGVyfTtcclxufVxyXG5cclxuXHJcbmRpdi5pbWdDb250YWluZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmRpdi5pbWdDb250YWluZXIgaW1nIHtcclxuICAgICR7Y3NzLmNlbnRlcn07XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb3BhY2l0eTowO1xyXG5cclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xyXG59XHJcblxyXG5kaXYuaW1nQ29udGFpbmVyIGltZy5zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgZGl2LmFjdGlvbnMge1xyXG4gICAgICAgIGhlaWdodDogOTglO1xyXG4gICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpdi5pbWdDb250YWluZXIgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5kaXYubmF2aWdhdGUge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIC8vIGJhY2tncm91bmQ6ICR7Y3NzLm5ldXRyYWx9O1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IC00cHggNHB4IDJweCByZ2JhKDAsMCwwLC4zKTtcclxufVxyXG5cclxuZGl2Lm5hdmlnYXRlLnJpZ2h0IHtcclxuICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgcmlnaHQ6MDtcclxufVxyXG5cclxuc3ZnIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG5kaXYubmF2aWdhdGUucmlnaHQgc3ZnIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxucG9seWdvbiB7XHJcbiAgICBmaWxsOnRyYW5zcGFyZW50O1xyXG4gICAgc3Ryb2tlOiAke2Nzcy5uZXV0cmFsfTtcclxuICAgIHN0cm9rZS13aWR0aDogNDA7XHJcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xyXG4gICAgXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxufVxyXG5cclxucG9seWdvbjpob3ZlciB7XHJcbiAgICBmaWxsOiAke2Nzcy5uZXV0cmFsfTtcclxufVxyXG5cclxuZGl2LmNsb3NlQnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5kaXYuY2xvc2VCdXR0b24gaW1nIHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbmRpdi5jbG9zZUJ1dHRvbiBpbWc6aG92ZXIge1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoODAlKTtcclxufVxyXG5cclxuYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltZ1ByZXZpZXdlcjsiXX0= */\n/*@ sourceURL=components\\reusable\\ImgPreviewer.js */'
            }));
        }
    }]);

    return ImgPreviewer;
}(_react.Component);

exports.default = ImgPreviewer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJldXNhYmxlXFxJbWdQcmV2aWV3ZXIuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiY3NzIiwiTG9hZGluZyIsInNldFRpbWVvdXQiLCJJbWdQcmV2aWV3ZXIiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsInNob3dQaWMiLCJjdXJyZW50SW5kZXgiLCJpbWdMaXN0IiwicHJldmlld1Nob3ciLCJkaXNwbGF5IiwiaGlkZVBpYyIsInNldFN0YXRlIiwibGVuZ3RoIiwiZXZlbnQiLCJoaWRlUHJldmlld2VyIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJuZXh0UHJvcHMiLCJzaG93UHJldmlld2VyIiwic2hvd0ltZ1ByZXZpZXdlciIsImN1cnJlbnRJbWdMaXN0IiwiY3VycmVudEltZ1ByZXZpZXdJbmRleCIsImNsYXNzQ29udGFpbmVyIiwiZGlzcGxheU5vbmUiLCJiaW5kIiwibmV4dFBpY0xlZnQiLCJuZXh0UGljUmlnaHQiLCJjbG9zZUltZ1ByZXZpZXdlciIsImNlbnRlciIsIm5ldXRyYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVE7Ozs7QUFDUixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVM7Ozs7Ozs7SSxBQUVIOzBDQUNGOzswQkFBQSxBQUFZLE9BQU87NENBQUE7O3NKQUFBLEFBQ1QsQUFFTjs7Y0FBQSxBQUFLO3FCQUFRLEFBQ0MsQUFDVjtxQkFGUyxBQUVDLEFBQ1Y7MEJBSFMsQUFHTSxBQUNmO3FCQUpTLEFBSUMsQUFDVjt5QkFMUyxBQUtLLEFBQ2Q7cUJBVFcsQUFHZixBQUFhLEFBTUM7QUFORCxBQUNUO2VBT1A7Ozs7O3NDQUVhO3lCQUNWOztnQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLGVBQWQsQUFBNkIsR0FBRyxBQUM1QjtxQkFBQSxBQUFLLEFBQ0w7d0NBQVcsWUFB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Ozs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxhQUFTLElBQVQsQUFBWSxhQUFZLFFBQXhCLEFBQStCLG9DQUEvQjs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOzBEQUNhLE9BQVQsQUFBZSxtQkFBa0IsZUFBakMsQUFBK0MsVUFBUyxLQUF4RCxBQUE0RCxTQUFRLElBQXBFLEFBQXVFLDJCQUEwQixJQUFqRyxBQUFvRyx5QkFBcEc7OzhCQUFBO2dDQURKLEFBQ0ksQUFDQTtBQURBOzJEQUNTLE9BQVQsQUFBZSwwQkFBeUIsZUFBeEMsQUFBc0QsVUFBUyxLQUEvRCxBQUFtRSxTQUFRLElBQTNFLEFBQThFLHNDQUE5RTs7OEJBQUE7Z0NBdkJoQixBQW1CSSxBQUNJLEFBQ0ksQUFFSSxBQUlaO0FBSlk7bUNBSVosY0FBQSxTQUE2QixTQUFTLEtBQUEsQUFBSyxrQkFBTCxBQUF1QixLQUE3RCxBQUFzQyxBQUE0QiwyQ0FBbEUsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO3NEQUNTLEtBQUwsQUFBUyxrQ0FBVDs7OEJBQUE7Z0NBN0JaLEFBQ0ksQUEyQkksQUFDSTtBQUFBOzt5QkE3Qlo7NFpBMEROLGdCQTFETSxBQTBERixvTEFZSixnQkF0RU0sQUFzRUYsZ3VCQXFESSxnQkEzSEYsQUEySE0sb0tBU04sZ0JBcElBLEFBb0lJLFVBcklSLEFBQ0ksQUE0SlA7QUE1Sk87Ozs7O0FBOUZlLEEsQUE2UDNCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkltZ1ByZXZpZXdlci5qcyIsInNvdXJjZVJvb3QiOiJEOi9wcm9ncmFtbWluZy9ub2RlanMvaGVyb2t1L25leHQtYWhoIn0=