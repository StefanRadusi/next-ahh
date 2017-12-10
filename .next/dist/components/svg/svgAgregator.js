'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Evenimente = require('./Evenimente');

var _Evenimente2 = _interopRequireDefault(_Evenimente);

var _Print = require('./Print');

var _Print2 = _interopRequireDefault(_Print);

var _Personalizari = require('./Personalizari');

var _Personalizari2 = _interopRequireDefault(_Personalizari);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    events: _Evenimente2.default,
    print: _Print2.default,
    personalizari: _Personalizari2.default
};