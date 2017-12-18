'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('next\\node_modules\\babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _stringify = require('next\\node_modules\\babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('next\\node_modules\\babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('next\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next\\node_modules\\babel-runtime/helpers/createClass');

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