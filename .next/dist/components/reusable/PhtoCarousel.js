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

var _CustomFetch = require('./CustomFetch');

var _CustomFetch2 = _interopRequireDefault(_CustomFetch);

var _utils = require('../../css/utils');

var _utils2 = _interopRequireDefault(_utils);

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\programming\\nodejs\\heroku\\next-ahh\\components\\reusable\\PhtoCarousel.js';


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
                className: 'jsx-1904191909' + ' ' + 'previewPhotos',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-1904191909' + ' ' + 'imgContainer',
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

                    className: 'jsx-1904191909',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                });
            })), _react2.default.createElement('div', { onClick: this.moveScrollLeft.bind(this), className: 'jsx-1904191909' + ' ' + 'navigate left',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement('svg', { viewBox: '0 0 500 500', className: 'jsx-1904191909',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement('polygon', { id: 'left', points: '450,100 50,250 450,400', className: 'jsx-1904191909',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement('animate', { begin: 'left.click', attributeName: 'points', dur: '200ms', to: '180,100 0,250 180,400', id: 'firstleft', className: 'jsx-1904191909',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }), _react2.default.createElement('animate', { begin: 'firstleft.begin + .06s', attributeName: 'points', dur: '200ms', to: '450,100 50,250 450,400', className: 'jsx-1904191909',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            })))), _react2.default.createElement('div', { onClick: this.moveScrollRight.bind(this), className: 'jsx-1904191909' + ' ' + 'navigate right',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement('svg', { viewBox: '0 0 500 500', className: 'jsx-1904191909',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement('polygon', { id: 'right', points: '50,100 450,250 50,400', className: 'jsx-1904191909',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement('animate', { begin: 'right.click', attributeName: 'points', dur: '200ms', to: '320,100 480,250 320,400', id: 'firstright', className: 'jsx-1904191909',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }), _react2.default.createElement('animate', { begin: 'firstleft.begin + .06s', attributeName: 'points', dur: '200ms', to: '320,100 450,250 320,400', className: 'jsx-1904191909',
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
                styleId: '1904191909',
                css: 'div.previewPhotos.jsx-1904191909{height:120px;position:relative;overflow:hidden;}div.navigate.jsx-1904191909{height:100%;width:25px;position:absolute;top:0;left:0;background:' + _utils2.default.neutral + ';box-shadow:0px -4px 4px 2px rgba(0,0,0,.3);}div.navigate.right.jsx-1904191909{left:unset;right:0;}svg.jsx-1904191909{height:100%;width:20px;}div.navigate.right.jsx-1904191909 svg.jsx-1904191909{float:right;}polygon.jsx-1904191909{fill:transparent;stroke:' + _utils2.default.red + ';stroke-width:40;stroke-linecap:round;stroke-linejoin:round;-webkit-trasnsition:all 1s ease;trasnsition:all 1s ease;}polygon.jsx-1904191909:hover{fill:' + _utils2.default.red + ';}div.imgContainer.jsx-1904191909{width:calc(100% - 30px);height:calc(100% - 24px);padding:10px;margin-left:5px;margin-right:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:auto;border-top:2px solid ' + _utils2.default.sky + ';border-bottom:2px solid ' + _utils2.default.sky + ';}div.imgContainer.jsx-1904191909::-webkit-scrollbar{display:none;}img.jsx-1904191909{margin-left :5px;margin-right :5px;border-radius:2px;' + _utils2.default.boxShadowNone + ';-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);cursor:pointer;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;}img.jsx-1904191909:hover{margin-left :10px;margin-right :10px;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);' + _utils2.default.boxShadow + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJldXNhYmxlXFxQaHRvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUc0QixBQUdzQyxBQU1ELEFBWUQsQUFLQyxBQUtBLEFBSUksQUFVa0IsQUFJVixBQWVYLEFBSUksQUFXQyxXQXpEWCxDQVpJLEFBaUJBLEFBS2YsQ0E1QnNCLEFBNkR0QixJQTdCd0MsQUFpQ2xCLENBV0MsQ0F6RHZCLElBWnNCLEFBaUJ0QixDQXNCNkIsT0E3Q1QsR0F5Q3BCLENBd0JzQixFQVdHLElBckVoQixNQUxULEFBTVUsRUF1Q08sSUFmRyxBQWtDWSxDQXpEWSxRQXdDeEIsT0FoQkssU0FpQkosSUFpQkUsUUFqQ0csSUF4QnFCLENBeUM5QixpQkFmVyxBQXlDSSx5QkFsRWhDLElBbUVBLFVBVm1CLGVBRVUsRUFqQzdCLENBZXVCLHVEQW1CdkIsc0NBbEJrQixjQUNvQyxrREFDRyxxREFDekQiLCJmaWxlIjoiY29tcG9uZW50c1xccmV1c2FibGVcXFBodG9DYXJvdXNlbC5qcyIsInNvdXJjZVJvb3QiOiJEOi9wcm9ncmFtbWluZy9ub2RlanMvaGVyb2t1L25leHQtYWhoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGN1c3RvbUZldGNoIGZyb20gJy4vQ3VzdG9tRmV0Y2gnO1xyXG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uL2Nzcy91dGlscyc7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XHJcblxyXG5jbGFzcyBQaG90b0Nhcm91c2VsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBob3RvcyA6IFtdLFxyXG4gICAgICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgIG5yT2ZJbWdMb2FkZWQ6IDAsXHJcbiAgICAgICAgICAgIG1heE5yT2ZJbWc6IDEwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RhcnQgbG9hZGluZycpO1xyXG4gICAgICAgIGN1c3RvbUZldGNoLmZldGNoKCdHRVQnLCAnZnJvbUNsb3VkaW5hcnknLCB7IGZvbGRlciA6IHRoaXMucHJvcHMuZm9sZGVyIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZSAmJiByZXNwb25zZS5yZXNvdXJjZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGhvdG9zID0gcmVzcG9uc2UucmVzb3VyY2VzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVTY3JvbGxMZWZ0KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCeVZhbHVlKGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYuaW1nQ29udGFpbmVyJyksIC0xMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVTY3JvbGxSaWdodChldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQnlWYWx1ZShldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignZGl2LmltZ0NvbnRhaW5lcicpLCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbEJ5VmFsdWUoZWxlbWVudCwgdmFsKSB7XHJcbiAgICAgICAgZWxlbWVudC5zY3JvbGxCeSh7IFxyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IHZhbCwgXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbWdMb2FkKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5uck9mSW1nTG9hZGVkKys7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5tYXhOck9mSW1nID09IHRoaXMuc3RhdGUubnJPZkltZ0xvYWRlZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG9uZSBsb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByZXZpZXdQaG90b3MnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltZ0NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5waG90b3Muc2xpY2UoMCwgdGhpcy5zdGF0ZS5tYXhOck9mSW1nKS5tYXAoKHBob3RvLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHBob3RvLnNlY3VyZV91cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5zZXJ0U3RyaW5nSW5kZXggPSB1cmwuaW5kZXhPZigndXBsb2FkJykgKyA2O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc2VydFN0cmluZyA9ICcvY190aHVtYixkbF8wLGhfMTAwJztcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPXtpbmRleH0ga2V5PXtpbmRleH0gc3JjPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybC5zdWJzdHJpbmcoMCxpbnNlcnRTdHJpbmdJbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGluc2VydFN0cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgdXJsLnN1YnN0cmluZyhpbnNlcnRTdHJpbmdJbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfSAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZD17dGhpcy5pbWdMb2FkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgZXZlbnQgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmltZ1ByZXZpZXcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBob3Rvcy5zbGljZSgwLCB0aGlzLnN0YXRlLm1heE5yT2ZJbWcpLm1hcChwaG90byA9PiBwaG90by5zZWN1cmVfdXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmlnYXRlIGxlZnQnIG9uQ2xpY2s9e3RoaXMubW92ZVNjcm9sbExlZnQuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDUwMCA1MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9XCJsZWZ0XCIgcG9pbnRzPVwiNDUwLDEwMCA1MCwyNTAgNDUwLDQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgYmVnaW49XCJsZWZ0LmNsaWNrXCIgYXR0cmlidXRlTmFtZT1cInBvaW50c1wiIGR1cj1cIjIwMG1zXCIgdG89XCIxODAsMTAwIDAsMjUwIDE4MCw0MDBcIiBpZD1cImZpcnN0bGVmdFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGJlZ2luPVwiZmlyc3RsZWZ0LmJlZ2luICsgLjA2c1wiIGF0dHJpYnV0ZU5hbWU9XCJwb2ludHNcIiBkdXI9XCIyMDBtc1wiIHRvPVwiNDUwLDEwMCA1MCwyNTAgNDUwLDQwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcG9seWdvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmlnYXRlIHJpZ2h0JyBvbkNsaWNrPXt0aGlzLm1vdmVTY3JvbGxSaWdodC5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNTAwIDUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD1cInJpZ2h0XCIgcG9pbnRzPVwiNTAsMTAwIDQ1MCwyNTAgNTAsNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBiZWdpbj1cInJpZ2h0LmNsaWNrXCIgYXR0cmlidXRlTmFtZT1cInBvaW50c1wiIGR1cj1cIjIwMG1zXCIgdG89XCIzMjAsMTAwIDQ4MCwyNTAgMzIwLDQwMFwiIGlkPVwiZmlyc3RyaWdodFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGJlZ2luPVwiZmlyc3RsZWZ0LmJlZ2luICsgLjA2c1wiIGF0dHJpYnV0ZU5hbWU9XCJwb2ludHNcIiBkdXI9XCIyMDBtc1wiIHRvPVwiMzIwLDEwMCA0NTAsMjUwIDMyMCw0MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BvbHlnb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMb2FkaW5nIFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3cgPSB7dGhpcy5zdGF0ZS5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICBkaXYucHJldmlld1Bob3RvcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2Lm5hdmlnYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Nzcy5uZXV0cmFsfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IC00cHggNHB4IDJweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2Lm5hdmlnYXRlLnJpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpdi5uYXZpZ2F0ZS5yaWdodCBzdmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBvbHlnb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOnRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICR7Y3NzLnJlZH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aDogNDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYXNuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBvbHlnb246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAke2Nzcy5yZWR9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LmltZ0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICR7Y3NzLnNreX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAke2Nzcy5za3l9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LmltZ0NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIgeyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodCA6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2Nzcy5ib3hTaGFkb3dOb25lfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGltZzpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0IDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0IDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2Nzcy5ib3hTaGFkb3d9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBob3RvQ2Fyb3VzZWw7Il19 */\n/*@ sourceURL=components\\reusable\\PhtoCarousel.js */'
            }));
        }
    }]);

    return PhotoCarousel;
}(_react.Component);

exports.default = PhotoCarousel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJldXNhYmxlXFxQaHRvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiY3VzdG9tRmV0Y2giLCJjc3MiLCJMb2FkaW5nIiwiUGhvdG9DYXJvdXNlbCIsInByb3BzIiwic3RhdGUiLCJwaG90b3MiLCJsb2FkaW5nIiwibnJPZkltZ0xvYWRlZCIsIm1heE5yT2ZJbWciLCJzZXRTdGF0ZSIsImZldGNoIiwiZm9sZGVyIiwidGhlbiIsInJlc3BvbnNlIiwicmVzb3VyY2VzIiwiZXZlbnQiLCJzY3JvbGxCeVZhbHVlIiwiY3VycmVudFRhcmdldCIsInBhcmVudE5vZGUiLCJxdWVyeVNlbGVjdG9yIiwiZWxlbWVudCIsInZhbCIsInNjcm9sbEJ5IiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwiY29uc29sZSIsImxvZyIsInNsaWNlIiwibWFwIiwicGhvdG8iLCJpbmRleCIsInVybCIsInNlY3VyZV91cmwiLCJpbnNlcnRTdHJpbmdJbmRleCIsImluZGV4T2YiLCJpbnNlcnRTdHJpbmciLCJzdWJzdHJpbmciLCJpbWdMb2FkIiwiYmluZCIsImltZ1ByZXZpZXciLCJpZCIsIm1vdmVTY3JvbGxMZWZ0IiwibW92ZVNjcm9sbFJpZ2h0IiwibmV1dHJhbCIsInJlZCIsInNreSIsImJveFNoYWRvd05vbmUiLCJib3hTaGFkb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVE7Ozs7QUFDUixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7Ozs7OztJLEFBRWQ7MkNBQ0Y7OzJCQUFBLEFBQVksT0FBTzs0Q0FBQTs7d0pBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7b0JBQVEsQUFDQSxBQUNUO3FCQUZTLEFBRUMsQUFDVjsyQkFIUyxBQUdNLEFBQ2Y7d0JBTlcsQUFFZixBQUFhLEFBSUc7QUFKSCxBQUNUO2VBS1A7Ozs7OzRDQUVtQjt5QkFDaEI7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LFFBQU8sUUFBbkIsQUFBMEIscUNBQTFCOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7MERBQ2EsT0FBVCxBQUFlLGNBQWEsZUFBNUIsQUFBMEMsVUFBUyxLQUFuRCxBQUF1RCxTQUFRLElBQS9ELEFBQWtFLHlCQUF3QixJQUExRixBQUE2Rix3QkFBN0Y7OzhCQUFBO2dDQURKLEFBQ0ksQUFDQTtBQURBOzJEQUNTLE9BQVQsQUFBZSwwQkFBeUIsZUFBeEMsQUFBc0QsVUFBUyxLQUEvRCxBQUFtRSxTQUFRLElBQTNFLEFBQThFLHFDQUE5RTs7OEJBQUE7Z0NBaENoQixBQTRCSSxBQUNJLEFBQ0ksQUFFSSxBQUlaO0FBSlk7bUNBSVosY0FBQSxTQUFnQyxTQUFTLEtBQUEsQUFBSyxnQkFBTCxBQUFxQixLQUE5RCxBQUF5QyxBQUEwQiwyQ0FBbkUsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxTQUFMLEFBQWEsMEJBQWI7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLGFBQVMsSUFBVCxBQUFZLFNBQVEsUUFBcEIsQUFBMkIsb0NBQTNCOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7MERBQ2EsT0FBVCxBQUFlLGVBQWMsZUFBN0IsQUFBMkMsVUFBUyxLQUFwRCxBQUF3RCxTQUFRLElBQWhFLEFBQW1FLDJCQUEwQixJQUE3RixBQUFnRyx5QkFBaEc7OzhCQUFBO2dDQURKLEFBQ0ksQUFDQTtBQURBOzJEQUNTLE9BQVQsQUFBZSwwQkFBeUIsZUFBeEMsQUFBc0QsVUFBUyxLQUEvRCxBQUFtRSxTQUFRLElBQTNFLEFBQThFLHNDQUE5RTs7OEJBQUE7Z0NBeENoQixBQW9DSSxBQUNJLEFBQ0ksQUFFSSxBQUlaO0FBSlk7bUNBSVosQUFBQztzQkFDVyxLQUFBLEFBQUssTUFEakIsQUFDdUI7OzhCQUR2QjtnQ0E1Q0osQUE0Q0k7QUFBQTtBQUNJO3lCQTdDUjt3TUE0RDBCLGdCQTVEMUIsQUE0RDhCLDhRQXNCUixnQkFsRnRCLEFBa0YwQixrS0FTTixnQkEzRnBCLEFBMkZ3QixzVkFjWSxnQkF6R3BDLEFBeUd3QyxvQ0FDRCxnQkExR3ZDLEFBMEcyQyxzSkFXN0IsZ0JBckhkLEFBcUhrQiw4U0FXSixnQkFoSWQsQUFnSWtCLFlBakl0QixBQUNJLEFBdUlQO0FBdklPOzs7OztBQW5EZ0IsQSxBQTZMNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUGh0b0Nhcm91c2VsLmpzIiwic291cmNlUm9vdCI6IkQ6L3Byb2dyYW1taW5nL25vZGVqcy9oZXJva3UvbmV4dC1haGgifQ==