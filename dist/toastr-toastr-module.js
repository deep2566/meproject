(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["toastr-toastr-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/toastr/toastr.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/toastr/toastr.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Notifications\n      <a href=\"https://coreui.io/pro/angular/\" class=\"badge badge-danger ml-2\">CoreUI Pro Component</a>\n    </div>\n    <div class=\"card-body\">\n      <button class=\"btn btn-success mr-1 mb-1\" (click)=\"showSuccess()\">Try Success</button>\n      <button class=\"btn btn-danger mr-1 mb-1\" (click)=\"showError()\">Try Error</button>\n      <button class=\"btn btn-warning mr-1 mb-1\" (click)=\"showWarning()\">Try Warning</button>\n      <button class=\"btn btn-info mr-1 mb-1\" (click)=\"showInfo()\">Try Info</button>\n      <button class=\"btn btn-primary mr-1 mb-1\" (click)=\"showPrimary()\">Try Primary</button>\n    </div>\n  </div>\n</div>\n<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\n");

/***/ }),

/***/ "./src/app/views/notifications/toastr/toastr-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/notifications/toastr/toastr-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ToastrRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrRoutingModule", function() { return ToastrRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _toastr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastr.component */ "./src/app/views/notifications/toastr/toastr.component.ts");




var routes = [
    {
        path: '',
        component: _toastr_component__WEBPACK_IMPORTED_MODULE_3__["ToastrComponent"],
        data: {
            title: 'Toastr'
        }
    }
];
var ToastrRoutingModule = /** @class */ (function () {
    function ToastrRoutingModule() {
    }
    ToastrRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ToastrRoutingModule);
    return ToastrRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/notifications/toastr/toastr.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/notifications/toastr/toastr.component.ts ***!
  \****************************************************************/
/*! exports provided: ToastrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrComponent", function() { return ToastrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");



var ToastrComponent = /** @class */ (function () {
    function ToastrComponent(toasterService) {
        this.toasterconfig = new angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterConfig"]({
            tapToDismiss: true,
            timeout: 5000
        });
        this.toasterService = toasterService;
    }
    ToastrComponent.prototype.showSuccess = function () {
        this.toasterService.pop('success', 'Success Toaster', 'This is toaster description');
    };
    ToastrComponent.prototype.showError = function () {
        this.toasterService.pop('error', 'Error Toaster', 'This is toaster description');
    };
    ToastrComponent.prototype.showWarning = function () {
        this.toasterService.pop('warning', 'Warning Toaster', 'This is toaster description');
    };
    ToastrComponent.prototype.showInfo = function () {
        this.toasterService.pop('info', 'Info Toaster', 'This is toaster description');
    };
    ToastrComponent.prototype.showPrimary = function () {
        this.toasterService.pop('primary', 'Primary Toaster', 'This is toaster description');
    };
    ToastrComponent.ctorParameters = function () { return [
        { type: angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }
    ]; };
    ToastrComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./toastr.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/toastr/toastr.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            providers: [angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../../scss/vendors/toastr/toastr.scss */ "./src/scss/vendors/toastr/toastr.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], ToastrComponent);
    return ToastrComponent;
}());



/***/ }),

/***/ "./src/app/views/notifications/toastr/toastr.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/notifications/toastr/toastr.module.ts ***!
  \*************************************************************/
/*! exports provided: ToastrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrModule", function() { return ToastrModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _toastr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toastr.component */ "./src/app/views/notifications/toastr/toastr.component.ts");
/* harmony import */ var _toastr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toastr-routing.module */ "./src/app/views/notifications/toastr/toastr-routing.module.ts");



// Toastr


// Routing

var ToastrModule = /** @class */ (function () {
    function ToastrModule() {
    }
    ToastrModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _toastr_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToastrRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterModule"],
            ], declarations: [_toastr_component__WEBPACK_IMPORTED_MODULE_4__["ToastrComponent"]]
        })
    ], ToastrModule);
    return ToastrModule;
}());



/***/ })

}]);
//# sourceMappingURL=toastr-toastr-module.js.map