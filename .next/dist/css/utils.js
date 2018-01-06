'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var utils = {
    red: '#FF3b3f',
    neutral: '#EFEFEF',
    neutral_fade: 'rgba(239,239,239,0.9)',
    sky: '#CAEBF2;',
    grey: '#054D4D',
    center: '\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%) translateY(-50%);\n    ',
    boxShadow: 'box-shadow: 1px 1px 1px rgba(0,0,0,.2)',
    boxShadowNone: 'box-shadow: 1px 1px 1px rgba(0,0,0,0)',
    boxShadowAround: 'box-shadow: 0px 0px 3px rgba(0,0,0,0.2)'
};

var svgBasic = exports.svgBasic = new String('svg{height:300px;}@media (max-width:400px){svg{height:200px;}}*{stroke :' + utils.red + ';stroke-width:2;stroke-dasharray:800;stroke-dashoffset:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzc1xcdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUIyQixBQUdzQixBQUtJLEFBS29CLGFBVHpDLEFBS0ksd0JBS2UsZUFDTSxxQkFDRCxvQkFDeEIiLCJmaWxlIjoiY3NzXFx1dGlscy5qcyIsInNvdXJjZVJvb3QiOiJEOi9wcm9ncmFtbWluZy9ub2RlanMvaGVyb2t1L25leHQtYWhoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XHJcblxyXG5jb25zdCB1dGlscyA9IHtcclxuICAgIHJlZCA6ICcjRkYzYjNmJyxcclxuICAgIG5ldXRyYWwgOiAnI0VGRUZFRicsXHJcbiAgICBuZXV0cmFsX2ZhZGU6ICdyZ2JhKDIzOSwyMzksMjM5LDAuOSknLFxyXG4gICAgc2t5IDogJyNDQUVCRjI7JyxcclxuICAgIGdyZXkgOiAnIzA1NEQ0RCcsXHJcbiAgICBjZW50ZXI6IGBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYCxcclxuICAgIGJveFNoYWRvdyA6ICdib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLC4yKScsXHJcbiAgICBib3hTaGFkb3dOb25lIDogJ2JveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsMCknLFxyXG4gICAgYm94U2hhZG93QXJvdW5kIDogJ2JveC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYmEoMCwwLDAsMC4yKSdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdmdCYXNpYyA9IGNzc2BcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAqIHtcclxuICAgICAgICBzdHJva2UgOiAke3V0aWxzLnJlZH07XHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xyXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDgwMDtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgIH1cclxuXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3Qgc3ZnQmFzaVJ1YnJpYyA9IGNzc2BcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1dGlsczsiXX0= */\n/*@ sourceURL=css\\utils.js */');

svgBasic.__hash = '2932685622';
svgBasic.__scoped = 'svg.jsx-3658174583{height:300px;}@media (max-width:400px){svg.jsx-3658174583{height:200px;}}*.jsx-3658174583{stroke :' + utils.red + ';stroke-width:2;stroke-dasharray:800;stroke-dashoffset:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzc1xcdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUIyQixBQUdzQixBQUtJLEFBS29CLGFBVHpDLEFBS0ksd0JBS2UsZUFDTSxxQkFDRCxvQkFDeEIiLCJmaWxlIjoiY3NzXFx1dGlscy5qcyIsInNvdXJjZVJvb3QiOiJEOi9wcm9ncmFtbWluZy9ub2RlanMvaGVyb2t1L25leHQtYWhoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XHJcblxyXG5jb25zdCB1dGlscyA9IHtcclxuICAgIHJlZCA6ICcjRkYzYjNmJyxcclxuICAgIG5ldXRyYWwgOiAnI0VGRUZFRicsXHJcbiAgICBuZXV0cmFsX2ZhZGU6ICdyZ2JhKDIzOSwyMzksMjM5LDAuOSknLFxyXG4gICAgc2t5IDogJyNDQUVCRjI7JyxcclxuICAgIGdyZXkgOiAnIzA1NEQ0RCcsXHJcbiAgICBjZW50ZXI6IGBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYCxcclxuICAgIGJveFNoYWRvdyA6ICdib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLC4yKScsXHJcbiAgICBib3hTaGFkb3dOb25lIDogJ2JveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsMCknLFxyXG4gICAgYm94U2hhZG93QXJvdW5kIDogJ2JveC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYmEoMCwwLDAsMC4yKSdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdmdCYXNpYyA9IGNzc2BcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAqIHtcclxuICAgICAgICBzdHJva2UgOiAke3V0aWxzLnJlZH07XHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xyXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDgwMDtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgIH1cclxuXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3Qgc3ZnQmFzaVJ1YnJpYyA9IGNzc2BcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1dGlsczsiXX0= */\n/*@ sourceURL=css\\utils.js */';
svgBasic.__scopedHash = '3658174583';
var svgBasiRubric = exports.svgBasiRubric = new String('svg{height:200px;}@media (max-width:400px){svg{height:100px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzc1xcdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNnQyxBQUdzQixBQUtJLGFBSnJCLEFBS0kiLCJmaWxlIjoiY3NzXFx1dGlscy5qcyIsInNvdXJjZVJvb3QiOiJEOi9wcm9ncmFtbWluZy9ub2RlanMvaGVyb2t1L25leHQtYWhoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XHJcblxyXG5jb25zdCB1dGlscyA9IHtcclxuICAgIHJlZCA6ICcjRkYzYjNmJyxcclxuICAgIG5ldXRyYWwgOiAnI0VGRUZFRicsXHJcbiAgICBuZXV0cmFsX2ZhZGU6ICdyZ2JhKDIzOSwyMzksMjM5LDAuOSknLFxyXG4gICAgc2t5IDogJyNDQUVCRjI7JyxcclxuICAgIGdyZXkgOiAnIzA1NEQ0RCcsXHJcbiAgICBjZW50ZXI6IGBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYCxcclxuICAgIGJveFNoYWRvdyA6ICdib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLC4yKScsXHJcbiAgICBib3hTaGFkb3dOb25lIDogJ2JveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsMCknLFxyXG4gICAgYm94U2hhZG93QXJvdW5kIDogJ2JveC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYmEoMCwwLDAsMC4yKSdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdmdCYXNpYyA9IGNzc2BcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAqIHtcclxuICAgICAgICBzdHJva2UgOiAke3V0aWxzLnJlZH07XHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xyXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDgwMDtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgIH1cclxuXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3Qgc3ZnQmFzaVJ1YnJpYyA9IGNzc2BcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1dGlsczsiXX0= */\n/*@ sourceURL=css\\utils.js */');

svgBasiRubric.__hash = '2062265747';
svgBasiRubric.__scoped = 'svg.jsx-2652225938{height:200px;}@media (max-width:400px){svg.jsx-2652225938{height:100px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzc1xcdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNnQyxBQUdzQixBQUtJLGFBSnJCLEFBS0kiLCJmaWxlIjoiY3NzXFx1dGlscy5qcyIsInNvdXJjZVJvb3QiOiJEOi9wcm9ncmFtbWluZy9ub2RlanMvaGVyb2t1L25leHQtYWhoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XHJcblxyXG5jb25zdCB1dGlscyA9IHtcclxuICAgIHJlZCA6ICcjRkYzYjNmJyxcclxuICAgIG5ldXRyYWwgOiAnI0VGRUZFRicsXHJcbiAgICBuZXV0cmFsX2ZhZGU6ICdyZ2JhKDIzOSwyMzksMjM5LDAuOSknLFxyXG4gICAgc2t5IDogJyNDQUVCRjI7JyxcclxuICAgIGdyZXkgOiAnIzA1NEQ0RCcsXHJcbiAgICBjZW50ZXI6IGBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYCxcclxuICAgIGJveFNoYWRvdyA6ICdib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLC4yKScsXHJcbiAgICBib3hTaGFkb3dOb25lIDogJ2JveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsMCknLFxyXG4gICAgYm94U2hhZG93QXJvdW5kIDogJ2JveC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYmEoMCwwLDAsMC4yKSdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdmdCYXNpYyA9IGNzc2BcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAqIHtcclxuICAgICAgICBzdHJva2UgOiAke3V0aWxzLnJlZH07XHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xyXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDgwMDtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgIH1cclxuXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3Qgc3ZnQmFzaVJ1YnJpYyA9IGNzc2BcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1dGlsczsiXX0= */\n/*@ sourceURL=css\\utils.js */';
svgBasiRubric.__scopedHash = '2652225938';
exports.default = utils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzc1xcdXRpbHMuanMiXSwibmFtZXMiOlsidXRpbHMiLCJyZWQiLCJuZXV0cmFsIiwibmV1dHJhbF9mYWRlIiwic2t5IiwiZ3JleSIsImNlbnRlciIsImJveFNoYWRvdyIsImJveFNoYWRvd05vbmUiLCJib3hTaGFkb3dBcm91bmQiLCJzdmdCYXNpYyIsInN2Z0Jhc2lSdWJyaWMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxJQUFNO1NBQVEsQUFDSixBQUNOO2FBRlUsQUFFQSxBQUNWO2tCQUhVLEFBR0ksQUFDZDtTQUpVLEFBSUosQUFDTjtVQUxVLEFBS0gsQUFDUDtZQU5VLEFBWVY7ZUFaVSxBQVlFLEFBQ1o7bUJBYlUsQUFhTSxBQUNoQjtxQkFkSixBQUFjLEFBY1EsQUFHdEI7QUFqQmMsQUFDVjs7QUFnQkcsSUFBTSxzSEFZTSxNQVpOLEFBWVksTUFabEI7Ozs4SUFZWSxNQUFNLEE7d0JBUXpCO0FBQU8sSUFBTSxtREFBTjs7Ozs2QkFhUDtrQkFBQSxBQUFlIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlUm9vdCI6IkQ6L3Byb2dyYW1taW5nL25vZGVqcy9oZXJva3UvbmV4dC1haGgifQ==