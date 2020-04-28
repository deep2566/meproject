(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-forms-forms-module"],{

/***/ "./src/app/views/forms/forms-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/forms/forms-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function() { return FormsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        data: {
            title: 'Forms'
        },
        children: [
            {
                path: 'basic-forms',
                loadChildren: function () { return __webpack_require__.e(/*! import() | basic-forms-basic-forms-module */ "basic-forms-basic-forms-module").then(__webpack_require__.bind(null, /*! ./basic-forms/basic-forms.module */ "./src/app/views/forms/basic-forms/basic-forms.module.ts")).then(function (m) { return m.BasicFormsModule; }); }
            },
            {
                path: 'advanced-forms',
                loadChildren: function () { return Promise.all(/*! import() | advanced-forms-advanced-forms-module */[__webpack_require__.e("default~advanced-forms-advanced-forms-module~invoice-invoice-module~product-get-product-get-module~v~d293ce62"), __webpack_require__.e("default~advanced-forms-advanced-forms-module~invoice-invoice-module~product-get-product-get-module~v~4933267b"), __webpack_require__.e("default~advanced-forms-advanced-forms-module~invoice-invoice-module~product-get-product-get-module~v~fba2855b"), __webpack_require__.e("default~advanced-forms-advanced-forms-module~views-client-client-module~views-collection-collection-~d597a831"), __webpack_require__.e("advanced-forms-advanced-forms-module")]).then(__webpack_require__.bind(null, /*! ./advanced-forms/advanced-forms.module */ "./src/app/views/forms/advanced-forms/advanced-forms.module.ts")).then(function (m) { return m.AdvancedFormsModule; }); }
            },
            {
                path: 'validation-forms',
                loadChildren: function () { return __webpack_require__.e(/*! import() | validation-forms-validation-forms-module */ "validation-forms-validation-forms-module").then(__webpack_require__.bind(null, /*! ./validation-forms/validation-forms.module */ "./src/app/views/forms/validation-forms/validation-forms.module.ts")).then(function (m) { return m.ValidationFormsModule; }); }
            }
        ]
    }
];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/forms/forms.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/forms/forms.module.ts ***!
  \*********************************************/
/*! exports provided: FormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms-routing.module */ "./src/app/views/forms/forms-routing.module.ts");


// Routing

var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"]
            ],
            declarations: []
        })
    ], FormsModule);
    return FormsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-forms-forms-module.js.map