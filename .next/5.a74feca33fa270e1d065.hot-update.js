webpackHotUpdate(5,{

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(394);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(159);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomFetch = function () {
    function CustomFetch() {
        (0, _classCallCheck3.default)(this, CustomFetch);

        this.domain = 'https://ahh-services.herokuapp.com/';
    }

    (0, _createClass3.default)(CustomFetch, [{
        key: 'makeRequest',
        value: function makeRequest(method, url, params) {
            if (method == 'GET') {
                var finalURl = this.domain + url;
                if (params) {
                    finalURl += '?' + (0, _keys2.default)(params).map(function (key) {
                        return key + '=' + params[key];
                    }).join('&');
                }
                return new Request(finalURl);
            } else if (method == 'POST') {
                return new Request(this.domain + url, {
                    method: 'POST',
                    body: (0, _stringify2.default)(params)
                });
            }
        }
    }, {
        key: 'fetch',
        value: function (_fetch) {
            function fetch(_x, _x2, _x3) {
                return _fetch.apply(this, arguments);
            }

            fetch.toString = function () {
                return _fetch.toString();
            };

            return fetch;
        }(function (method, url, params) {
            var _this = this;

            return new _promise2.default(function (resolve, reject) {
                fetch(_this.makeRequest(method, url, params)).then(function (response) {
                    return response.json();
                }).then(function (json) {
                    return resolve(json);
                });
            });
        })

        // fetchFromCloudinary(method, url, params) {
        //     const cloudName = 'hofas67vr';
        //     const apiKey = '252193543756474';
        //     const apiSecret = 'lEWldoRle9zhG-B02O6m7Hgt--Y';

        //     let finalUrl = `https://api.cloudinary.com/v1_1/${cloudName}/${url}`;

        //     return new Promise((resolve, reject) => {
        //         fetch(this.makeRequest(method, finalUrl, params))
        //         .then(response => response.json())
        //         .then(json => resolve(json));
        //     })
        // }

    }]);

    return CustomFetch;
}();

exports.default = new CustomFetch();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJldXNhYmxlXFxDdXN0b21GZXRjaC5qcyJdLCJuYW1lcyI6WyJDdXN0b21GZXRjaCIsImRvbWFpbiIsIm1ldGhvZCIsInVybCIsInBhcmFtcyIsImZpbmFsVVJsIiwibWFwIiwia2V5Iiwiam9pbiIsIlJlcXVlc3QiLCJib2R5IiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwibWFrZVJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU0sQSwwQkFDRjsyQkFBYzs0Q0FDVjs7YUFBQSxBQUFLLFNBQUwsQUFBYyxBQUNqQjs7Ozs7b0NBRVcsQSxRQUFRLEEsS0FBSyxBLFFBQVEsQUFDN0I7Z0JBQUcsVUFBSCxBQUFhLE9BQU8sQUFDaEI7b0JBQUksV0FBVyxLQUFBLEFBQUssU0FBcEIsQUFBNkIsQUFDN0I7b0JBQUEsQUFBSSxRQUFRLEFBQ1I7MERBQWdCLEFBQVksUUFBWixBQUFvQixJQUFJLGVBQUE7K0JBQU8sTUFBQSxBQUFNLE1BQU0sT0FBbkIsQUFBbUIsQUFBTztBQUFsRCxxQkFBQSxFQUFBLEFBQXdELEtBQXhFLEFBQWdCLEFBQTZELEFBQ2hGO0FBQ0Q7dUJBQU8sSUFBQSxBQUFJLFFBQVgsQUFBTyxBQUFZLEFBQ3RCO0FBTkQsbUJBTU8sSUFBSSxVQUFKLEFBQWMsUUFBUSxBQUN6QjsyQkFBTyxBQUFJLFFBQ1AsS0FBQSxBQUFLLFNBREYsQUFDVzs0QkFDZCxBQUNhLEFBQ1Q7MEJBQU8seUJBSmYsQUFBTyxBQUVILEFBRVcsQUFBZSxBQUdqQztBQUxPLEFBQ0ksaUJBSEQ7QUFRZDs7Ozs7Ozs7Ozs7Ozs7b0IsQUFFSyxRLEFBQVEsSyxBQUFLLFFBQVE7d0JBQ3ZCOzt5Q0FBbUIsVUFBQSxBQUFDLFNBQUQsQUFBVSxRQUFXLEFBQ3BDO3NCQUFNLE1BQUEsQUFBSyxZQUFMLEFBQWlCLFFBQWpCLEFBQXlCLEtBQS9CLEFBQU0sQUFBOEIsU0FBcEMsQUFDQyxLQUFLLG9CQUFBOzJCQUFZLFNBQVosQUFBWSxBQUFTO0FBRDNCLG1CQUFBLEFBRUMsS0FBSyxnQkFBQTsyQkFBUSxRQUFSLEFBQVEsQUFBUTtBQUZ0QixBQUdIO0FBSkQsQUFBTyxBQUtWLGFBTFU7QUFPWCxBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdKOztrQkFBZSxJQUFmLEFBQWUsQUFBSSIsImZpbGUiOiJDdXN0b21GZXRjaC5qcyIsInNvdXJjZVJvb3QiOiJGOi9ub2RlanMvbmV4dC1haGgifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "F:\\nodejs\\next-ahh\\components\\reusable\\CustomFetch.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\nodejs\\next-ahh\\components\\reusable\\CustomFetch.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hNzRmZWNhMzNmYTI3MGUxZDA2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZXVzYWJsZS9DdXN0b21GZXRjaC5qcz8yNDkzYTI4Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEN1c3RvbUZldGNoIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZG9tYWluID0gJ2h0dHBzOi8vYWhoLXNlcnZpY2VzLmhlcm9rdWFwcC5jb20vJztcclxuICAgIH1cclxuXHJcbiAgICBtYWtlUmVxdWVzdChtZXRob2QsIHVybCwgcGFyYW1zKSB7XHJcbiAgICAgICAgaWYobWV0aG9kID09ICdHRVQnKSB7XHJcbiAgICAgICAgICAgIGxldCBmaW5hbFVSbCA9IHRoaXMuZG9tYWluICsgdXJsO1xyXG4gICAgICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICBmaW5hbFVSbCArPSBgPyR7T2JqZWN0LmtleXMocGFyYW1zKS5tYXAoa2V5ID0+IGtleSArICc9JyArIHBhcmFtc1trZXldKS5qb2luKCcmJyl9YDsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZXF1ZXN0KGZpbmFsVVJsKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PSAnUE9TVCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZXF1ZXN0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb21haW4gKyB1cmwsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kIDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgOiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoKG1ldGhvZCwgdXJsLCBwYXJhbXMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBmZXRjaCh0aGlzLm1ha2VSZXF1ZXN0KG1ldGhvZCwgdXJsLCBwYXJhbXMpKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4gcmVzb2x2ZShqc29uKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBmZXRjaEZyb21DbG91ZGluYXJ5KG1ldGhvZCwgdXJsLCBwYXJhbXMpIHtcclxuICAgIC8vICAgICBjb25zdCBjbG91ZE5hbWUgPSAnaG9mYXM2N3ZyJztcclxuICAgIC8vICAgICBjb25zdCBhcGlLZXkgPSAnMjUyMTkzNTQzNzU2NDc0JztcclxuICAgIC8vICAgICBjb25zdCBhcGlTZWNyZXQgPSAnbEVXbGRvUmxlOXpoRy1CMDJPNm03SGd0LS1ZJztcclxuXHJcbiAgICAvLyAgICAgbGV0IGZpbmFsVXJsID0gYGh0dHBzOi8vYXBpLmNsb3VkaW5hcnkuY29tL3YxXzEvJHtjbG91ZE5hbWV9LyR7dXJsfWA7XHJcblxyXG4gICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGZldGNoKHRoaXMubWFrZVJlcXVlc3QobWV0aG9kLCBmaW5hbFVybCwgcGFyYW1zKSlcclxuICAgIC8vICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLy8gICAgICAgICAudGhlbihqc29uID0+IHJlc29sdmUoanNvbikpO1xyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBDdXN0b21GZXRjaCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmV1c2FibGUvQ3VzdG9tRmV0Y2guanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBOzs7OztBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUxBO0FBT0E7QUFJQTtBQUFBO0FBREE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==