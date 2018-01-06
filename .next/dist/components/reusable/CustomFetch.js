'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomFetch = function () {
    function CustomFetch() {
        (0, _classCallCheck3.default)(this, CustomFetch);

        // this.domain = 'https://ahh-services.herokuapp.com/';
        this.domain = 'http://localhost:8080/';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJldXNhYmxlXFxDdXN0b21GZXRjaC5qcyJdLCJuYW1lcyI6WyJDdXN0b21GZXRjaCIsImRvbWFpbiIsIm1ldGhvZCIsInVybCIsInBhcmFtcyIsImZpbmFsVVJsIiwibWFwIiwia2V5Iiwiam9pbiIsIlJlcXVlc3QiLCJib2R5IiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwibWFrZVJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU0sQSwwQkFDRjsyQkFBYzs0Q0FDVjs7QUFDQTthQUFBLEFBQUssU0FBTCxBQUFjLEFBQ2pCOzs7OztvQ0FFVyxBLFFBQVEsQSxLLEFBQUssUUFBUSxBQUM3QjtnQkFBRyxVQUFILEFBQWEsT0FBTyxBQUNoQjtvQkFBSSxXQUFXLEtBQUEsQUFBSyxTQUFwQixBQUE2QixBQUM3QjtvQkFBQSxBQUFJLFFBQVEsQUFDUjswREFBZ0IsQUFBWSxRQUFaLEFBQW9CLElBQUksZUFBQTsrQkFBTyxNQUFBLEFBQU0sTUFBTSxPQUFuQixBQUFtQixBQUFPO0FBQWxELHFCQUFBLEVBQUEsQUFBd0QsS0FBeEUsQUFBZ0IsQUFBNkQsQUFDaEY7QUFDRDt1QkFBTyxJQUFBLEFBQUksUUFBWCxBQUFPLEFBQVksQUFDdEI7QUFORCxtQkFNTyxJQUFJLFVBQUosQUFBYyxRQUFRLEFBQ3pCOzJCQUFPLEFBQUksUUFDUCxLQUFBLEFBQUssU0FERixBQUNXOzRCQUNkLEFBQ2EsQUFDVDswQkFBTyx5QkFKZixBQUFPLEFBRUgsQUFFVyxBQUFlLEFBR2pDO0FBTE8sQUFDSSxpQkFIRDtBQVFkOzs7Ozs7Ozs7Ozs7OztvQixBQUVLLFEsQUFBUSxLLEFBQUssUUFBUTt3QkFDdkI7O3lDQUFtQixVQUFBLEFBQUMsU0FBRCxBQUFVLFFBQVcsQUFDcEM7c0JBQU0sTUFBQSxBQUFLLFlBQUwsQUFBaUIsUUFBakIsQUFBeUIsS0FBL0IsQUFBTSxBQUE4QixTQUFwQyxBQUNDLEtBQUssb0JBQUE7MkJBQVksU0FBWixBQUFZLEFBQVM7QUFEM0IsbUJBQUEsQUFFQyxLQUFLLGdCQUFBOzJCQUFRLFFBQVIsQUFBUSxBQUFRO0FBRnRCLEFBR0g7QUFKRCxBQUFPLEFBS1YsYUFMVTtBQU9YLEE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0o7O2tCQUFlLElBQWYsQUFBZSxBQUFJIiwiZmlsZSI6IkN1c3RvbUZldGNoLmpzIiwic291cmNlUm9vdCI6IkQ6L3Byb2dyYW1taW5nL25vZGVqcy9oZXJva3UvbmV4dC1haGgifQ==