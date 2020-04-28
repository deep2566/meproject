(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-apps-apps-module"],{

/***/ "./src/app/views/apps/apps-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/apps/apps-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsRoutingModule", function() { return AppsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        data: {
            title: 'Apps'
        },
        children: [
            {
                path: 'email',
                loadChildren: function () { return __webpack_require__.e(/*! import() | email-email-module */ "email-email-module").then(__webpack_require__.bind(null, /*! ./email/email.module */ "./src/app/views/apps/email/email.module.ts")).then(function (m) { return m.EmailModule; }); }
            },
            {
                path: 'invoicing',
                loadChildren: function () { return __webpack_require__.e(/*! import() | invoicing-invoice-module */ "invoicing-invoice-module").then(__webpack_require__.bind(null, /*! ./invoicing/invoice.module */ "./src/app/views/apps/invoicing/invoice.module.ts")).then(function (m) { return m.InvoiceModule; }); }
            }
        ]
    }
];
var AppsRoutingModule = /** @class */ (function () {
    function AppsRoutingModule() {
    }
    AppsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppsRoutingModule);
    return AppsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/apps/apps.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/apps/apps.module.ts ***!
  \*******************************************/
/*! exports provided: AppsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsModule", function() { return AppsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apps_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps-routing.module */ "./src/app/views/apps/apps-routing.module.ts");


// Routing

var AppsModule = /** @class */ (function () {
    function AppsModule() {
    }
    AppsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _apps_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppsRoutingModule"]
            ],
            declarations: []
        })
    ], AppsModule);
    return AppsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-apps-apps-module.js.map