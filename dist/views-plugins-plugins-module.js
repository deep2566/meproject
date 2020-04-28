(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-plugins-plugins-module"],{

/***/ "./src/app/views/plugins/plugins-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/plugins/plugins-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PluginsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginsRoutingModule", function() { return PluginsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        data: {
            title: 'Plugins'
        },
        children: [
            {
                path: 'calendar',
                loadChildren: function () { return __webpack_require__.e(/*! import() | calendar-calendar-module */ "calendar-calendar-module").then(__webpack_require__.bind(null, /*! ./calendar/calendar.module */ "./src/app/views/plugins/calendar/calendar.module.ts")).then(function (m) { return m.CalendarInitModule; }); }
            },
            {
                path: 'draggable-cards',
                loadChildren: function () { return __webpack_require__.e(/*! import() | draggable-cards-draggable-cards-module */ "draggable-cards-draggable-cards-module").then(__webpack_require__.bind(null, /*! ./draggable-cards/draggable-cards.module */ "./src/app/views/plugins/draggable-cards/draggable-cards.module.ts")).then(function (m) { return m.DraggableCardsModule; }); }
            },
            {
                path: 'spinners',
                loadChildren: function () { return __webpack_require__.e(/*! import() | spinners-spinners-module */ "spinners-spinners-module").then(__webpack_require__.bind(null, /*! ./spinners/spinners.module */ "./src/app/views/plugins/spinners/spinners.module.ts")).then(function (m) { return m.SpinnersModule; }); }
            }
        ]
    }
];
var PluginsRoutingModule = /** @class */ (function () {
    function PluginsRoutingModule() {
    }
    PluginsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PluginsRoutingModule);
    return PluginsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/plugins/plugins.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/plugins/plugins.module.ts ***!
  \*************************************************/
/*! exports provided: PluginsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginsModule", function() { return PluginsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _plugins_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins-routing.module */ "./src/app/views/plugins/plugins-routing.module.ts");


// Routing

var PluginsModule = /** @class */ (function () {
    function PluginsModule() {
    }
    PluginsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _plugins_routing_module__WEBPACK_IMPORTED_MODULE_2__["PluginsRoutingModule"]
            ],
            declarations: []
        })
    ], PluginsModule);
    return PluginsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-plugins-plugins-module.js.map