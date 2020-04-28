(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loading-buttons-loading-buttons-module"],{

/***/ "./src/app/views/buttons/loading-buttons/loading-buttons-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/buttons/loading-buttons/loading-buttons-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: LoadingButtonsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingButtonsRoutingModule", function() { return LoadingButtonsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loading_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading-buttons.component */ "./src/app/views/buttons/loading-buttons/loading-buttons.component.ts");




var routes = [
    {
        path: '',
        component: _loading_buttons_component__WEBPACK_IMPORTED_MODULE_3__["LoadingButtonsComponent"],
        data: {
            title: 'Loading Buttons - Ladda'
        }
    }
];
var LoadingButtonsRoutingModule = /** @class */ (function () {
    function LoadingButtonsRoutingModule() {
    }
    LoadingButtonsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoadingButtonsRoutingModule);
    return LoadingButtonsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/buttons/loading-buttons/loading-buttons.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/buttons/loading-buttons/loading-buttons.module.ts ***!
  \*************************************************************************/
/*! exports provided: LoadingButtonsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingButtonsModule", function() { return LoadingButtonsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-ladda */ "./node_modules/angular2-ladda/fesm5/angular2-ladda.js");
/* harmony import */ var _loading_buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading-buttons.component */ "./src/app/views/buttons/loading-buttons/loading-buttons.component.ts");
/* harmony import */ var _loading_buttons_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-buttons-routing.module */ "./src/app/views/buttons/loading-buttons/loading-buttons-routing.module.ts");



// Loading Buttons


// Routing

var LoadingButtonsModule = /** @class */ (function () {
    function LoadingButtonsModule() {
    }
    LoadingButtonsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _loading_buttons_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoadingButtonsRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular2_ladda__WEBPACK_IMPORTED_MODULE_3__["LaddaModule"]
            ],
            declarations: [
                _loading_buttons_component__WEBPACK_IMPORTED_MODULE_4__["LoadingButtonsComponent"]
            ]
        })
    ], LoadingButtonsModule);
    return LoadingButtonsModule;
}());



/***/ })

}]);
//# sourceMappingURL=loading-buttons-loading-buttons-module.js.map