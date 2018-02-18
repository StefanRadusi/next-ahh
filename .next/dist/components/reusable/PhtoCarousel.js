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

var _CustomFetch = require('./CustomFetch');

var _CustomFetch2 = _interopRequireDefault(_CustomFetch);

var _utils = require('../../css/utils');

var _utils2 = _interopRequireDefault(_utils);

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stefan.radusi/projects/haihui/next-ahh/components/reusable/PhtoCarousel.js';


var PhotoCarousel = function (_Component) {
    (0, _inherits3.default)(PhotoCarousel, _Component);

    function PhotoCarousel(props) {
        (0, _classCallCheck3.default)(this, PhotoCarousel);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PhotoCarousel.__proto__ || (0, _getPrototypeOf2.default)(PhotoCarousel)).call(this, props));

        _this.state = {
            photos: [],
            loading: false,
            nrOfImgLoaded: 0,
            maxNrOfImg: 10
        };
        return _this;
    }

    (0, _createClass3.default)(PhotoCarousel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.state.loading = true;
            this.setState(this.state);
            // console.log('start loading');
            _CustomFetch2.default.fetch('GET', 'fromCloudinary', { folder: this.props.folder }).then(function (response) {
                if (response && response.resources) {
                    _this2.state.photos = response.resources;
                    _this2.setState(_this2.state);
                }
            });
        }
    }, {
        key: 'moveScrollLeft',
        value: function moveScrollLeft(event) {
            this.scrollByValue(event.currentTarget.parentNode.querySelector('div.imgContainer'), -100);
        }
    }, {
        key: 'moveScrollRight',
        value: function moveScrollRight(event) {
            this.scrollByValue(event.currentTarget.parentNode.querySelector('div.imgContainer'), 100);
        }
    }, {
        key: 'scrollByValue',
        value: function scrollByValue(element, val) {
            element.scrollBy({
                top: 0,
                left: val,
                behavior: 'smooth'
            });
        }
    }, {
        key: 'imgLoad',
        value: function imgLoad(event) {
            this.state.nrOfImgLoaded++;
            if (this.state.maxNrOfImg == this.state.nrOfImgLoaded) {
                console.log('done loading');
                this.state.loading = false;
                this.setState(this.state);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', {
                className: 'jsx-855796931' + ' ' + 'previewPhotos',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-855796931' + ' ' + 'imgContainer',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, this.state.photos.slice(0, this.state.maxNrOfImg).map(function (photo, index) {
                var url = photo.secure_url;
                var insertStringIndex = url.indexOf('upload') + 6;
                var insertString = '/c_thumb,dl_0,h_100';

                return _react2.default.createElement('img', { id: index, key: index, src: '' + (url.substring(0, insertStringIndex) + insertString + url.substring(insertStringIndex)),
                    onLoad: _this3.imgLoad.bind(_this3),
                    onClick: function onClick(event) {
                        _this3.props.imgPreview(event.currentTarget.id, _this3.state.photos.slice(0, _this3.state.maxNrOfImg).map(function (photo) {
                            return photo.secure_url;
                        }));
                    },

                    className: 'jsx-855796931',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                });
            })), _react2.default.createElement('div', { onClick: this.moveScrollLeft.bind(this), className: 'jsx-855796931' + ' ' + 'navigate left',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement('svg', { viewBox: '0 0 500 500', className: 'jsx-855796931',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement('polygon', { id: 'left', points: '450,100 50,250 450,400', className: 'jsx-855796931',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement('animate', { begin: 'left.click', attributeName: 'points', dur: '200ms', to: '180,100 0,250 180,400', id: 'firstleft', className: 'jsx-855796931',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }), _react2.default.createElement('animate', { begin: 'firstleft.begin + .06s', attributeName: 'points', dur: '200ms', to: '450,100 50,250 450,400', className: 'jsx-855796931',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            })))), _react2.default.createElement('div', { onClick: this.moveScrollRight.bind(this), className: 'jsx-855796931' + ' ' + 'navigate right',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement('svg', { viewBox: '0 0 500 500', className: 'jsx-855796931',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement('polygon', { id: 'right', points: '50,100 450,250 50,400', className: 'jsx-855796931',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement('animate', { begin: 'right.click', attributeName: 'points', dur: '200ms', to: '320,100 480,250 320,400', id: 'firstright', className: 'jsx-855796931',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }), _react2.default.createElement('animate', { begin: 'firstleft.begin + .06s', attributeName: 'points', dur: '200ms', to: '320,100 450,250 320,400', className: 'jsx-855796931',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            })))), _react2.default.createElement(_Loading2.default, {
                show: this.state.loading,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }), _react2.default.createElement(_style2.default, {
                styleId: '855796931',
                css: 'div.previewPhotos.jsx-855796931{height:120px;position:relative;overflow:hidden;}div.navigate.jsx-855796931{height:100%;width:25px;position:absolute;top:0px;left:0px;background:' + _utils2.default.neutral + ';box-shadow:4px 0px 4px -4px rgba(0,0,0,.6);}div.navigate.right.jsx-855796931{left:unset;box-shadow:-4px 0px 4px -4px rgba(0,0,0,.6);right:0px;}svg.jsx-855796931{height:100%;width:20px;}div.navigate.right.jsx-855796931 svg.jsx-855796931{float:right;}polygon.jsx-855796931{fill:transparent;stroke:' + _utils2.default.red + ';stroke-width:40;stroke-linecap:round;stroke-linejoin:round;-webkit-trasnsition:all 1s ease;trasnsition:all 1s ease;}polygon.jsx-855796931:hover{fill:' + _utils2.default.red + ';}div.imgContainer.jsx-855796931{width:calc(100% - 30px);height:calc(100% - 24px);padding:10px;margin-left:5px;margin-right:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:auto;border-top:2px solid ' + _utils2.default.sky + ';border-bottom:2px solid ' + _utils2.default.sky + ';}div.imgContainer.jsx-855796931::-webkit-scrollbar{display:none;}img.jsx-855796931{margin-left :5px;margin-right :5px;border-radius:2px;' + _utils2.default.boxShadowNone + ';-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);cursor:pointer;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;}img.jsx-855796931:hover{margin-left :10px;margin-right :10px;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);' + _utils2.default.boxShadow + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmV1c2FibGUvUGh0b0Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVHNEIsQUFHc0MsQUFNRCxBQVVELEFBTUMsQUFLQSxBQUlJLEFBVWtCLEFBSVYsQUFlWCxBQUlJLEFBV0MsV0ExRDBCLENBVmpDLEFBZ0JBLEFBS2YsQ0EzQnNCLEFBNER0QixJQTdCd0MsQUFpQ2xCLENBV0MsS0FwRUQsQUFnQnRCLENBc0I2QixPQTVDVCxHQXdDcEIsQ0F3QnNCLEVBV0csSUFwRWIsTUFMWixFQU1hLEFBc0NJLElBZkcsQUFrQ1ksRUFqRGxCLEdBUDhCLElBdUN4QixHQS9CcEIsSUFleUIsU0FpQkosSUFpQkUsUUFqQ0csS0FpQlQsR0F4QzhCLGNBeUJuQixBQXlDSSw2QkFqRWhDLEFBa0VBLFVBVm1CLGVBRVUsRUFqQzdCLENBZXVCLHVEQW1CdkIsc0NBbEJrQixjQUNvQyxrREFDRyxxREFDekQiLCJmaWxlIjoiY29tcG9uZW50cy9yZXVzYWJsZS9QaHRvQ2Fyb3VzZWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0ZWZhbi5yYWR1c2kvcHJvamVjdHMvaGFpaHVpL25leHQtYWhoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjdXN0b21GZXRjaCBmcm9tICcuL0N1c3RvbUZldGNoJztcbmltcG9ydCBjc3MgZnJvbSAnLi4vLi4vY3NzL3V0aWxzJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5cbmNsYXNzIFBob3RvQ2Fyb3VzZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBob3RvcyA6IFtdLFxuICAgICAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxuICAgICAgICAgICAgbnJPZkltZ0xvYWRlZDogMCxcbiAgICAgICAgICAgIG1heE5yT2ZJbWc6IDEwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0YXJ0IGxvYWRpbmcnKTtcbiAgICAgICAgY3VzdG9tRmV0Y2guZmV0Y2goJ0dFVCcsICdmcm9tQ2xvdWRpbmFyeScsIHsgZm9sZGVyIDogdGhpcy5wcm9wcy5mb2xkZXIgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UgJiYgcmVzcG9uc2UucmVzb3VyY2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5waG90b3MgPSByZXNwb25zZS5yZXNvdXJjZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbW92ZVNjcm9sbExlZnQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxCeVZhbHVlKGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuaW1nQ29udGFpbmVyJyksIC0xMDApO1xuICAgIH1cblxuICAgIG1vdmVTY3JvbGxSaWdodChldmVudCkge1xuICAgICAgICB0aGlzLnNjcm9sbEJ5VmFsdWUoZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5pbWdDb250YWluZXInKSwgMTAwKTtcbiAgICB9XG5cbiAgICBzY3JvbGxCeVZhbHVlKGVsZW1lbnQsIHZhbCkge1xuICAgICAgICBlbGVtZW50LnNjcm9sbEJ5KHsgXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiB2YWwsIFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbWdMb2FkKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc3RhdGUubnJPZkltZ0xvYWRlZCsrO1xuICAgICAgICBpZih0aGlzLnN0YXRlLm1heE5yT2ZJbWcgPT0gdGhpcy5zdGF0ZS5uck9mSW1nTG9hZGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG9uZSBsb2FkaW5nJyk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJldmlld1Bob3Rvcyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltZ0NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBob3Rvcy5zbGljZSgwLCB0aGlzLnN0YXRlLm1heE5yT2ZJbWcpLm1hcCgocGhvdG8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHBob3RvLnNlY3VyZV91cmw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc2VydFN0cmluZ0luZGV4ID0gdXJsLmluZGV4T2YoJ3VwbG9hZCcpICsgNjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5zZXJ0U3RyaW5nID0gJy9jX3RodW1iLGRsXzAsaF8xMDAnO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9e2luZGV4fSBrZXk9e2luZGV4fSBzcmM9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwuc3Vic3RyaW5nKDAsaW5zZXJ0U3RyaW5nSW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgaW5zZXJ0U3RyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgdXJsLnN1YnN0cmluZyhpbnNlcnRTdHJpbmdJbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH0gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2FkPXt0aGlzLmltZ0xvYWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgZXZlbnQgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pbWdQcmV2aWV3KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5pZCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBob3Rvcy5zbGljZSgwLCB0aGlzLnN0YXRlLm1heE5yT2ZJbWcpLm1hcChwaG90byA9PiBwaG90by5zZWN1cmVfdXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmlnYXRlIGxlZnQnIG9uQ2xpY2s9e3RoaXMubW92ZVNjcm9sbExlZnQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA1MDAgNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD1cImxlZnRcIiBwb2ludHM9XCI0NTAsMTAwIDUwLDI1MCA0NTAsNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgYmVnaW49XCJsZWZ0LmNsaWNrXCIgYXR0cmlidXRlTmFtZT1cInBvaW50c1wiIGR1cj1cIjIwMG1zXCIgdG89XCIxODAsMTAwIDAsMjUwIDE4MCw0MDBcIiBpZD1cImZpcnN0bGVmdFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBiZWdpbj1cImZpcnN0bGVmdC5iZWdpbiArIC4wNnNcIiBhdHRyaWJ1dGVOYW1lPVwicG9pbnRzXCIgZHVyPVwiMjAwbXNcIiB0bz1cIjQ1MCwxMDAgNTAsMjUwIDQ1MCw0MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wb2x5Z29uPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2aWdhdGUgcmlnaHQnIG9uQ2xpY2s9e3RoaXMubW92ZVNjcm9sbFJpZ2h0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNTAwIDUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9XCJyaWdodFwiIHBvaW50cz1cIjUwLDEwMCA0NTAsMjUwIDUwLDQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGJlZ2luPVwicmlnaHQuY2xpY2tcIiBhdHRyaWJ1dGVOYW1lPVwicG9pbnRzXCIgZHVyPVwiMjAwbXNcIiB0bz1cIjMyMCwxMDAgNDgwLDI1MCAzMjAsNDAwXCIgaWQ9XCJmaXJzdHJpZ2h0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGJlZ2luPVwiZmlyc3RsZWZ0LmJlZ2luICsgLjA2c1wiIGF0dHJpYnV0ZU5hbWU9XCJwb2ludHNcIiBkdXI9XCIyMDBtc1wiIHRvPVwiMzIwLDEwMCA0NTAsMjUwIDMyMCw0MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wb2x5Z29uPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8TG9hZGluZyBcbiAgICAgICAgICAgICAgICAgICAgc2hvdyA9IHt0aGlzLnN0YXRlLmxvYWRpbmd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGRpdi5wcmV2aWV3UGhvdG9zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkaXYubmF2aWdhdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y3NzLm5ldXRyYWx9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogNHB4IDBweCA0cHggLTRweCByZ2JhKDAsMCwwLC42KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZGl2Lm5hdmlnYXRlLnJpZ2h0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTRweCAwcHggNHB4IC00cHggcmdiYSgwLDAsMCwuNik7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBkaXYubmF2aWdhdGUucmlnaHQgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcG9seWdvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOnRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAke2Nzcy5yZWR9O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiA0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYXNuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHBvbHlnb246aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJHtjc3MucmVkfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGRpdi5pbWdDb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICR7Y3NzLnNreX07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHtjc3Muc2t5fTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGRpdi5pbWdDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTsgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQgOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAke2Nzcy5ib3hTaGFkb3dOb25lfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpbWc6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0IDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICR7Y3NzLmJveFNoYWRvd307XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBob3RvQ2Fyb3VzZWw7Il19 */\n/*@ sourceURL=components/reusable/PhtoCarousel.js */'
            }));
        }
    }]);

    return PhotoCarousel;
}(_react.Component);

exports.default = PhotoCarousel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmV1c2FibGUvUGh0b0Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImN1c3RvbUZldGNoIiwiY3NzIiwiTG9hZGluZyIsIlBob3RvQ2Fyb3VzZWwiLCJwcm9wcyIsInN0YXRlIiwicGhvdG9zIiwibG9hZGluZyIsIm5yT2ZJbWdMb2FkZWQiLCJtYXhOck9mSW1nIiwic2V0U3RhdGUiLCJmZXRjaCIsImZvbGRlciIsInRoZW4iLCJyZXNwb25zZSIsInJlc291cmNlcyIsImV2ZW50Iiwic2Nyb2xsQnlWYWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnROb2RlIiwicXVlcnlTZWxlY3RvciIsImVsZW1lbnQiLCJ2YWwiLCJzY3JvbGxCeSIsInRvcCIsImxlZnQiLCJiZWhhdmlvciIsImNvbnNvbGUiLCJsb2ciLCJzbGljZSIsIm1hcCIsInBob3RvIiwiaW5kZXgiLCJ1cmwiLCJzZWN1cmVfdXJsIiwiaW5zZXJ0U3RyaW5nSW5kZXgiLCJpbmRleE9mIiwiaW5zZXJ0U3RyaW5nIiwic3Vic3RyaW5nIiwiaW1nTG9hZCIsImJpbmQiLCJpbWdQcmV2aWV3IiwiaWQiLCJtb3ZlU2Nyb2xsTGVmdCIsIm1vdmVTY3JvbGxSaWdodCIsIm5ldXRyYWwiLCJyZWQiLCJza3kiLCJib3hTaGFkb3dOb25lIiwiYm94U2hhZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFROzs7O0FBQ1IsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFhOzs7Ozs7Ozs7SSxBQUVkOzJDQUNGOzsyQkFBQSxBQUFZLE9BQU87NENBQUE7O3dKQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO29CQUFRLEFBQ0EsQUFDVDtxQkFGUyxBQUVDLEFBQ1Y7MkJBSFMsQUFHTSxBQUNmO3dCQU5XLEFBRWYsQUFBYSxBQUlHO0FBSkgsQUFDVDtlQUtQOzs7Ozs0Q0FFbUI7eUJBQ2hCOztp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QUFPLFFBQW5CLEFBQTBCLHFDQUExQjs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOzBEQUNhLE9BQVQsQUFBZSxjQUFhLGVBQTVCLEFBQTBDLFVBQVMsS0FBbkQsQUFBdUQsU0FBUSxJQUEvRCxBQUFrRSx5QkFBd0IsSUFBMUYsQUFBNkYsd0JBQTdGOzs4QkFBQTtnQ0FESixBQUNJLEFBQ0E7QUFEQTsyREFDUyxPQUFULEFBQWUsMEJBQXlCLGVBQXhDLEFBQXNELFVBQVMsS0FBL0QsQUFBbUUsU0FBUSxJQUEzRSxBQUE4RSxxQ0FBOUU7OzhCQUFBO2dDQWhDaEIsQUE0QkksQUFDSSxBQUNJLEFBRUksQUFJWjtBQUpZO21DQUlaLGNBQUEsU0FBZ0MsU0FBUyxLQUFBLEFBQUssZ0JBQUwsQUFBcUIsS0FBOUQsQUFBeUMsQUFBMEIsMENBQW5FLEFBQWU7OzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssU0FBTCxBQUFhLDBCQUFiOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxhQUFTLElBQVQsQUFBWSxTQUFRLFFBQXBCLEFBQTJCLG9DQUEzQjs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOzBEQUNhLE9BQVQsQUFBZSxlQUFjLGVBQTdCLEFBQTJDLFVBQVMsS0FBcEQsQUFBd0QsU0FBUSxJQUFoRSxBQUFtRSwyQkFBMEIsSUFBN0YsQUFBZ0cseUJBQWhHOzs4QkFBQTtnQ0FESixBQUNJLEFBQ0E7QUFEQTsyREFDUyxPQUFULEFBQWUsMEJBQXlCLGVBQXhDLEFBQXNELFVBQVMsS0FBL0QsQUFBbUUsU0FBUSxJQUEzRSxBQUE4RSxzQ0FBOUU7OzhCQUFBO2dDQXhDaEIsQUFvQ0ksQUFDSSxBQUNJLEFBRUksQUFJWjtBQUpZO21DQUlaLEFBQUM7c0JBQ1csS0FBQSxBQUFLLE1BRGpCLEFBQ3VCOzs4QkFEdkI7Z0NBNUNKLEFBNENJO0FBQUE7QUFDSTt5QkE3Q1I7ME1BNEQwQixnQkE1RDFCLEFBNEQ4Qix1VEFxQlIsZ0JBakZ0QixBQWlGMEIsaUtBU04sZ0JBMUZwQixBQTBGd0IscVZBY1ksZ0JBeEdwQyxBQXdHd0Msb0NBQ0QsZ0JBekd2QyxBQXlHMkMsb0pBVzdCLGdCQXBIZCxBQW9Ia0IsNlNBV0osZ0JBL0hkLEFBK0hrQixZQWhJdEIsQUFDSSxBQXNJUDtBQXRJTzs7Ozs7QUFuRGdCLEEsQUE0TDVCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlBodG9DYXJvdXNlbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3RlZmFuLnJhZHVzaS9wcm9qZWN0cy9oYWlodWkvbmV4dC1haGgifQ==