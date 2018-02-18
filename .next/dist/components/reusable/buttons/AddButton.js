'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../../css/utils');

var _utils2 = _interopRequireDefault(_utils);

var _reactSvg = require('react-svg');

var _reactSvg2 = _interopRequireDefault(_reactSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stefan.radusi/projects/haihui/next-ahh/components/reusable/buttons/AddButton.js';


var addButtonStyle = new String('div.addButtonContainer{height:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;padding:5px;overflow:hidden;}.addButtonSvg{width :30px;height:30px;}.addButtonSvg *{stroke-dasharray:200;stroke-dashoffset:0;stroke:' + _utils2.default.green + ';stroke-width:2;fill:none;-webkit-transition:all .5s ease;transition:all .5s ease;}div.addButtonContainer:hover .addButtonSvg *{stroke-dashoffset:200;}.svgWrapperDiv{width :30px;height:30px;' + _utils2.default.center + ';}p{' + _utils2.default.defaultFontSize + ';min-width:40px;text-align:center;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:-webkit-transform .5s ease,opacity .2s;-webkit-transition:transform .5s ease,opacity .2s;transition:transform .5s ease,opacity .2s;cursor:default;}div.addButtonContainer:hover p{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmV1c2FibGUvYnV0dG9ucy9BZGRCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSWlDLEFBR3FCLEFBU0EsQUFLUyxBQVNDLEFBSVYsQUFNZ0IsQUFVRixZQTFDYixBQVNELEFBa0JBLFNBYlEsQ0FTeEIsRUFiQSxBQWtCZ0MsS0FLYixZQWxCcUIsR0FtQmxCLFNBTHRCLFNBTWMsVUFDaUIsS0FwQlosU0FmSSxJQTBDVCxFQTFCQSxRQTJCZCxFQTFCNEIsd0RBQzVCLE9Ba0IrQyxjQW5DekIsa0JBQ04sWUFDSSxnQkFDcEIsMEZBaUNtQixlQUNuQiIsImZpbGUiOiJjb21wb25lbnRzL3JldXNhYmxlL2J1dHRvbnMvQWRkQnV0dG9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zdGVmYW4ucmFkdXNpL3Byb2plY3RzL2hhaWh1aS9uZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vY3NzL3V0aWxzJztcbmltcG9ydCBjc3NKc3hGdW5jIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcbmltcG9ydCBSZWFjdFN2ZyBmcm9tICdyZWFjdC1zdmcnO1xuXG5jb25zdCBhZGRCdXR0b25TdHlsZSA9IGNzc0pzeEZ1bmNgXG4gICAgZGl2LmFkZEJ1dHRvbkNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfSAgICBcblxuICAgIDpnbG9iYWwoLmFkZEJ1dHRvblN2Zykge1xuICAgICAgICB3aWR0aCA6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG5cbiAgICA6Z2xvYmFsKC5hZGRCdXR0b25TdmcgKikge1xuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAyMDA7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgICAgICBzdHJva2U6ICR7Y3NzLmdyZWVufTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgICAgICBmaWxsOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XG4gICAgfVxuXG4gICAgZGl2LmFkZEJ1dHRvbkNvbnRhaW5lcjpob3ZlciA6Z2xvYmFsKC5hZGRCdXR0b25TdmcgKikge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMjAwO1xuICAgIH1cbiAgICBcbiAgICA6Z2xvYmFsKC5zdmdXcmFwcGVyRGl2KSB7XG4gICAgICAgIHdpZHRoIDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAke2Nzcy5jZW50ZXJ9O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICAke2Nzcy5kZWZhdWx0Rm9udFNpemV9O1xuICAgICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2UsIG9wYWNpdHkgLjJzO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgfVxuICAgIFxuICAgIGRpdi5hZGRCdXR0b25Db250YWluZXI6aG92ZXIgcCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuYDtcblxuY29uc3QgQWRkQnV0dG9uID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2FkZEJ1dHRvbkNvbnRhaW5lcicgb25DbGljaz17cHJvcHMub25DbGlja30+XG4gICAgICAgIDxSZWFjdFN2Z1xuICAgICAgICAgICAgcGF0aD1cIi4vc3RhdGljL3N2Zy9wbHVzLnN2Z1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhZGRCdXR0b25TdmdcIlxuICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cInN2Z1dyYXBwZXJEaXZcIlxuICAgICAgICAvPlxuICAgICAgICA8cD57cHJvcHMudGV4dCB8fCAnQWRkJ308L3A+XG4gICAgICAgIFxuICAgICAgICA8c3R5bGUganN4PnthZGRCdXR0b25TdHlsZX08L3N0eWxlPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkQnV0dG9uOyJdfQ== */\n/*@ sourceURL=components/reusable/buttons/AddButton.js */');

addButtonStyle.__hash = '3297185200';
addButtonStyle.__scoped = 'div.addButtonContainer.jsx-2899036657{height:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;padding:5px;overflow:hidden;}.addButtonSvg{width :30px;height:30px;}.addButtonSvg *{stroke-dasharray:200;stroke-dashoffset:0;stroke:' + _utils2.default.green + ';stroke-width:2;fill:none;-webkit-transition:all .5s ease;transition:all .5s ease;}div.addButtonContainer.jsx-2899036657:hover .addButtonSvg *{stroke-dashoffset:200;}.svgWrapperDiv{width :30px;height:30px;' + _utils2.default.center + ';}p.jsx-2899036657{' + _utils2.default.defaultFontSize + ';min-width:40px;text-align:center;opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);-webkit-transition:-webkit-transform .5s ease,opacity .2s;-webkit-transition:transform .5s ease,opacity .2s;transition:transform .5s ease,opacity .2s;cursor:default;}div.addButtonContainer.jsx-2899036657:hover p.jsx-2899036657{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmV1c2FibGUvYnV0dG9ucy9BZGRCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSWlDLEFBR3FCLEFBU0EsQUFLUyxBQVNDLEFBSVYsQUFNZ0IsQUFVRixZQTFDYixBQVNELEFBa0JBLFNBYlEsQ0FTeEIsRUFiQSxBQWtCZ0MsS0FLYixZQWxCcUIsR0FtQmxCLFNBTHRCLFNBTWMsVUFDaUIsS0FwQlosU0FmSSxJQTBDVCxFQTFCQSxRQTJCZCxFQTFCNEIsd0RBQzVCLE9Ba0IrQyxjQW5DekIsa0JBQ04sWUFDSSxnQkFDcEIsMEZBaUNtQixlQUNuQiIsImZpbGUiOiJjb21wb25lbnRzL3JldXNhYmxlL2J1dHRvbnMvQWRkQnV0dG9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zdGVmYW4ucmFkdXNpL3Byb2plY3RzL2hhaWh1aS9uZXh0LWFoaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnLi4vLi4vLi4vY3NzL3V0aWxzJztcbmltcG9ydCBjc3NKc3hGdW5jIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcbmltcG9ydCBSZWFjdFN2ZyBmcm9tICdyZWFjdC1zdmcnO1xuXG5jb25zdCBhZGRCdXR0b25TdHlsZSA9IGNzc0pzeEZ1bmNgXG4gICAgZGl2LmFkZEJ1dHRvbkNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfSAgICBcblxuICAgIDpnbG9iYWwoLmFkZEJ1dHRvblN2Zykge1xuICAgICAgICB3aWR0aCA6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG5cbiAgICA6Z2xvYmFsKC5hZGRCdXR0b25TdmcgKikge1xuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAyMDA7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgICAgICBzdHJva2U6ICR7Y3NzLmdyZWVufTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgICAgICBmaWxsOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XG4gICAgfVxuXG4gICAgZGl2LmFkZEJ1dHRvbkNvbnRhaW5lcjpob3ZlciA6Z2xvYmFsKC5hZGRCdXR0b25TdmcgKikge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMjAwO1xuICAgIH1cbiAgICBcbiAgICA6Z2xvYmFsKC5zdmdXcmFwcGVyRGl2KSB7XG4gICAgICAgIHdpZHRoIDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAke2Nzcy5jZW50ZXJ9O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICAke2Nzcy5kZWZhdWx0Rm9udFNpemV9O1xuICAgICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2UsIG9wYWNpdHkgLjJzO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgfVxuICAgIFxuICAgIGRpdi5hZGRCdXR0b25Db250YWluZXI6aG92ZXIgcCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuYDtcblxuY29uc3QgQWRkQnV0dG9uID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2FkZEJ1dHRvbkNvbnRhaW5lcicgb25DbGljaz17cHJvcHMub25DbGlja30+XG4gICAgICAgIDxSZWFjdFN2Z1xuICAgICAgICAgICAgcGF0aD1cIi4vc3RhdGljL3N2Zy9wbHVzLnN2Z1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhZGRCdXR0b25TdmdcIlxuICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cInN2Z1dyYXBwZXJEaXZcIlxuICAgICAgICAvPlxuICAgICAgICA8cD57cHJvcHMudGV4dCB8fCAnQWRkJ308L3A+XG4gICAgICAgIFxuICAgICAgICA8c3R5bGUganN4PnthZGRCdXR0b25TdHlsZX08L3N0eWxlPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkQnV0dG9uOyJdfQ== */\n/*@ sourceURL=components/reusable/buttons/AddButton.js */';
addButtonStyle.__scopedHash = '2899036657';
var AddButton = function AddButton(props) {
    return _react2.default.createElement('div', { onClick: props.onClick, className: 'jsx-' + addButtonStyle.__scopedHash + ' ' + 'addButtonContainer',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 57
        }
    }, _react2.default.createElement(_reactSvg2.default, {
        path: './static/svg/plus.svg',
        className: 'addButtonSvg',
        wrapperClassName: 'svgWrapperDiv',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }), _react2.default.createElement('p', {
        className: 'jsx-' + addButtonStyle.__scopedHash,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 63
        }
    }, props.text || 'Add'), _react2.default.createElement(_style2.default, {
        styleId: addButtonStyle.__scopedHash,
        css: addButtonStyle.__scoped
    }));
};

exports.default = AddButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmV1c2FibGUvYnV0dG9ucy9BZGRCdXR0b24uanMiXSwibmFtZXMiOlsiY3NzIiwiUmVhY3RTdmciLCJhZGRCdXR0b25TdHlsZSIsImdyZWVuIiwiY2VudGVyIiwiZGVmYXVsdEZvbnRTaXplIiwiQWRkQnV0dG9uIiwicHJvcHMiLCJvbkNsaWNrIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFFaEIsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxpWUFrQlksZ0JBbEJaLEFBa0JnQiwyTUFhWixnQkEvQkosQUErQlEsa0JBSUosZ0JBbkNKLEFBbUNRLGtCQW5DZDs7OzhZQWtCa0IsZ0JBQUksQSwwTkFhWixnQkFBSSxBLGlDQUlKLGdCLEFBQUk7O0FBZ0JkLElBQU0sWUFBWSxTQUFaLEFBQVksVUFBQSxBQUFDLE9BQUQ7MkJBQ2QsY0FBQSxTQUFvQyxTQUFTLE1BQTdDLEFBQW1ELGlFQUFuRCxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7S0FBQSxrQkFDSSxBQUFDO2NBQUQsQUFDUyxBQUNMO21CQUZKLEFBRWMsQUFDVjswQkFISixBQUdxQjs7c0JBSHJCO3dCQURKLEFBQ0ksQUFLQTtBQUxBO0FBQ0ksd0JBSUosY0FBQTsyQ0FBQTs7c0JBQUE7d0JBQUEsQUFBSTtBQUFKO0FBQUEsYUFBSSxBQUFNLFFBTmQsQUFNSSxBQUFrQjtnQ0FOdEI7NEJBRGMsQUFDZDtBQUFBO0FBREosQUFhQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJBZGRCdXR0b24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0ZWZhbi5yYWR1c2kvcHJvamVjdHMvaGFpaHVpL25leHQtYWhoIn0=