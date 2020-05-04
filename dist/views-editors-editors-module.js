(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-editors-editors-module"],{

/***/ "./src/app/views/editors/editors-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/editors/editors-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EditorsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorsRoutingModule", function() { return EditorsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        data: {
            title: 'Editors'
        },
        children: [
            {
                path: 'text-editors',
                loadChildren: function () { return __webpack_require__.e(/*! import() | text-editors-text-editors-module */ "text-editors-text-editors-module").then(__webpack_require__.bind(null, /*! ./text-editors/text-editors.module */ "./src/app/views/editors/text-editors/text-editors.module.ts")).then(function (m) { return m.TextEditorsModule; }); }
            },
            {
                path: 'code-editors',
                loadChildren: function () { return __webpack_require__.e(/*! import() | code-editors-code-editors-module */ "code-editors-code-editors-module").then(__webpack_require__.bind(null, /*! ./code-editors/code-editors.module */ "./src/app/views/editors/code-editors/code-editors.module.ts")).then(function (m) { return m.CodeEditorsModule; }); }
            }
        ]
    }
];
var EditorsRoutingModule = /** @class */ (function () {
    function EditorsRoutingModule() {
    }
    EditorsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EditorsRoutingModule);
    return EditorsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/editors/editors.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/editors/editors.module.ts ***!
  \*************************************************/
/*! exports provided: EditorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorsModule", function() { return EditorsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _editors_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editors-routing.module */ "./src/app/views/editors/editors-routing.module.ts");


// Routing

var EditorsModule = /** @class */ (function () {
    function EditorsModule() {
    }
    EditorsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _editors_routing_module__WEBPACK_IMPORTED_MODULE_2__["EditorsRoutingModule"]
            ],
            declarations: []
        })
    ], EditorsModule);
    return EditorsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-editors-editors-module.js.map