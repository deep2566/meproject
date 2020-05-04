(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["validation-forms-validation-forms-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/validation-forms/validation-forms.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/validation-forms/validation-forms.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"icon-note\"></i> Form Validation\n          <a class=\"badge badge-danger\" href=\"https://coreui.io/pro/\">CoreUI Pro Component</a>\n          <div class=\"card-header-actions\">\n            <a class=\"card-header-action\" href=\"https://angular.io/guide/form-validation\" target=\"_blank\">\n              <small class=\"text-muted\">docs</small>\n            </a>\n          </div>\n        </div>\n        <div class=\"card-body\">Angular Form Validation\n          <hr>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <h6>Simple Form</h6>\n              <form [formGroup]=\"simpleForm\" novalidate (ngSubmit)=\"onSubmit()\" class=\"needs-validation\">\n                <div class=\"form-group\">\n                  <label class=\"col-form-label\" for=\"firstName\">First name</label>\n                  <input class=\"form-control\"\n                         id=\"firstName\"\n                         type=\"text\"\n                         formControlName=\"firstName\"\n                         placeholder=\"First name\"\n                         autocomplete=\"given-name\"\n                         required\n                         autofocus\n                         [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors, 'is-valid': f.firstName.touched && !f.firstName.errors }\" />\n                  <div *ngIf=\"submitted && f['firstName'].errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f['firstName'].errors.required\">First Name is required</div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"col-form-label\" for=\"lastName\">Last name</label>\n                  <input class=\"form-control\"\n                         id=\"lastName\"\n                         type=\"text\"\n                         formControlName=\"lastName\"\n                         placeholder=\"Last name\"\n                         autocomplete=\"family-name\"\n                         required\n                         [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors, 'is-valid': f.lastName.touched && !f.lastName.errors }\" />\n                  <div *ngIf=\"submitted && f['lastName'].errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f['lastName'].errors.required\">Last Name is required</div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"col-form-label\" for=\"username\">Username</label>\n                  <input class=\"form-control\"\n                         id=\"username\"\n                         type=\"text\"\n                         formControlName=\"username\"\n                         placeholder=\"Username\"\n                         autocomplete=\"username\"\n                         required\n                         [ngClass]=\"{ 'is-invalid': submitted && f.username.errors, 'is-valid': f.username.touched && !f.username.errors }\" />\n                  <div *ngIf=\"submitted && simpleForm.controls['username'].errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f['username'].errors.required\">Username is required</div>\n                    <div *ngIf=\"f['username'].errors.minlength\">{{formErrors.username.minLength}}</div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"col-form-label\" for=\"email\">Email</label>\n                  <input class=\"form-control\"\n                         id=\"email\"\n                         type=\"text\"\n                         formControlName=\"email\"\n                         placeholder=\"Email\"\n                         autocomplete=\"email\"\n                         required\n                         [ngClass]=\"{ 'is-invalid': submitted && f.email.errors, 'is-valid': f.email.touched && !f.email.errors }\" />\n                  <div *ngIf=\"submitted && f['email'].errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f['email'].errors.required\">Email is required</div>\n                    <div *ngIf=\"f['email'].errors.email\">{{formErrors.email.email}}</div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-md-6\">\n                    <label class=\"col-form-label\" for=\"password\">Password</label>\n                    <input class=\"form-control\"\n                           id=\"password\"\n                           type=\"password\"\n                           formControlName=\"password\"\n                           placeholder=\"Password\"\n                           autocomplete=\"new-password\"\n                           required\n                           [ngClass]=\"{ 'is-invalid': submitted && f.password.errors, 'is-valid': f.password.touched && !f.password.errors }\" />\n                    <div *ngIf=\"submitted && f['password'].errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f['password'].errors.required\">Password is required</div>\n                      <div *ngIf=\"f['password'].errors.minlength\">{{formErrors.password.minLength}}</div>\n                      <div *ngIf=\"f['password'].errors.pattern\">{{formErrors.password.pattern}}</div>\n                    </div>\n                  </div>\n                  <div class=\"form-group col-md-6\">\n                    <label class=\"col-form-label\" for=\"confirmPassword\">Confirm password</label>\n                    <input class=\"form-control\"\n                           id=\"confirmPassword\"\n                           type=\"password\"\n                           formControlName=\"confirmPassword\"\n                           placeholder=\"Confirm password\"\n                           autocomplete=\"new-password\"\n                           required\n                           [ngClass]=\"{ 'is-invalid': submitted && simpleForm.errors, 'is-valid': f.confirmPassword.touched && !simpleForm.errors }\" />\n                    <div *ngIf=\"submitted && simpleForm.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"simpleForm.errors['passwordMismatch']\">{{formErrors.confirmPassword.passwordMismatch}}</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"custom-control custom-checkbox\">\n                    <input type=\"checkbox\"\n                           class=\"custom-control-input\"\n                           id=\"accept\"\n                           formControlName=\"accept\"\n                           required\n                           [ngClass]=\"{ 'is-invalid': submitted && f.accept.errors, 'is-valid': !f.accept.errors }\" />\n                    <label class=\"custom-control-label\" for=\"accept\">I accept the terms of use</label>\n                    <div *ngIf=\"submitted && f['accept'].errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f['accept'].errors.required\">You have to accept our Terms and Conditions</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <button class=\"btn btn-primary mr-1\" type=\"submit\" [disabled]=\"simpleForm.pristine || simpleForm.invalid\">Submit</button>\n                  <button class=\"btn btn-success mr-1\" type=\"submit\" [disabled]=\"simpleForm.valid\">Validate</button>\n                  <button class=\"btn btn-danger\" type=\"reset\" [disabled]=\"simpleForm.pristine && !submitted\" (click)=\"onReset()\">Reset</button>\n                </div>\n              </form>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"card bg-secondary\" [ngClass]=\"{ 'bg-info' : simpleForm.valid }\">\n                <div class=\"card-body\">\n                  <pre>Value: <code>{{ simpleForm.value | json }}</code></pre>\n                  <p>\n                    Status: {{ simpleForm.status }}\n                  </p>\n                  <p>\n                    Errors: {{ simpleForm.errors | json }}\n                  </p>\n                </div>\n              </div>\n             </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/views/forms/validation-forms/validation-forms-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/forms/validation-forms/validation-forms-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ValidationFormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationFormsRoutingModule", function() { return ValidationFormsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _validation_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation-forms.component */ "./src/app/views/forms/validation-forms/validation-forms.component.ts");




var routes = [
    {
        path: '',
        component: _validation_forms_component__WEBPACK_IMPORTED_MODULE_3__["ValidationFormsComponent"],
        data: {
            title: 'Form Validation'
        }
    }
];
var ValidationFormsRoutingModule = /** @class */ (function () {
    function ValidationFormsRoutingModule() {
    }
    ValidationFormsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ValidationFormsRoutingModule);
    return ValidationFormsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/forms/validation-forms/validation-forms.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/views/forms/validation-forms/validation-forms.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn:disabled {\n  cursor: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZm9ybXMvdmFsaWRhdGlvbi1mb3Jtcy92YWxpZGF0aW9uLWZvcm1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9mb3Jtcy92YWxpZGF0aW9uLWZvcm1zL3ZhbGlkYXRpb24tZm9ybXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG46ZGlzYWJsZWQge1xuICBjdXJzb3I6IGF1dG87XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/views/forms/validation-forms/validation-forms.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/forms/validation-forms/validation-forms.component.ts ***!
  \****************************************************************************/
/*! exports provided: confirmPasswordValidator, ValidationFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmPasswordValidator", function() { return confirmPasswordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationFormsComponent", function() { return ValidationFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation-forms.service */ "./src/app/views/forms/validation-forms/validation-forms.service.ts");




/** passwords must match - custom validator */
var confirmPasswordValidator = function (control) {
    var password = control.get('password');
    var confirm = control.get('confirmPassword');
    return password && confirm && password.value === confirm.value ? null : { 'passwordMismatch': true };
};
var ValidationFormsComponent = /** @class */ (function () {
    function ValidationFormsComponent(fb, vf) {
        this.fb = fb;
        this.vf = vf;
        this.submitted = false;
        this.formErrors = this.vf.errorMessages;
        this.createForm();
    }
    ValidationFormsComponent.prototype.createForm = function () {
        this.simpleForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.vf.formRules.usernameMin), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.vf.formRules.nonEmpty)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.vf.formRules.passwordMin), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.vf.formRules.passwordPattern)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            accept: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]]
        }, { validator: confirmPasswordValidator });
    };
    Object.defineProperty(ValidationFormsComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.simpleForm.controls; },
        enumerable: true,
        configurable: true
    });
    ValidationFormsComponent.prototype.onReset = function () {
        this.submitted = false;
        this.simpleForm.reset();
    };
    ValidationFormsComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.simpleForm.invalid) {
            return;
        }
        // TODO: Use EventEmitter with form value
        console.warn(this.simpleForm.value);
        alert('SUCCESS!');
    };
    ValidationFormsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _validation_forms_service__WEBPACK_IMPORTED_MODULE_3__["ValidationFormsService"] }
    ]; };
    ValidationFormsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./validation-forms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/validation-forms/validation-forms.component.html")).default,
            providers: [_validation_forms_service__WEBPACK_IMPORTED_MODULE_3__["ValidationFormsService"]],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./validation-forms.component.css */ "./src/app/views/forms/validation-forms/validation-forms.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _validation_forms_service__WEBPACK_IMPORTED_MODULE_3__["ValidationFormsService"]])
    ], ValidationFormsComponent);
    return ValidationFormsComponent;
}());



/***/ }),

/***/ "./src/app/views/forms/validation-forms/validation-forms.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/forms/validation-forms/validation-forms.module.ts ***!
  \*************************************************************************/
/*! exports provided: ValidationFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationFormsModule", function() { return ValidationFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_forms_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation-forms-routing.module */ "./src/app/views/forms/validation-forms/validation-forms-routing.module.ts");
/* harmony import */ var _validation_forms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation-forms.component */ "./src/app/views/forms/validation-forms/validation-forms.component.ts");





// Routing


var ValidationFormsModule = /** @class */ (function () {
    function ValidationFormsModule() {
    }
    ValidationFormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _validation_forms_component__WEBPACK_IMPORTED_MODULE_5__["ValidationFormsComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _validation_forms_routing_module__WEBPACK_IMPORTED_MODULE_4__["ValidationFormsRoutingModule"]
            ],
            providers: [],
            bootstrap: [_validation_forms_component__WEBPACK_IMPORTED_MODULE_5__["ValidationFormsComponent"]]
        })
    ], ValidationFormsModule);
    return ValidationFormsModule;
}());



/***/ }),

/***/ "./src/app/views/forms/validation-forms/validation-forms.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/forms/validation-forms/validation-forms.service.ts ***!
  \**************************************************************************/
/*! exports provided: ValidationFormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationFormsService", function() { return ValidationFormsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidationFormsService = /** @class */ (function () {
    function ValidationFormsService() {
        this.formRules = {
            nonEmpty: '^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$',
            usernameMin: 5,
            passwordMin: 6,
            passwordPattern: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
        };
        this.formErrors = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            accept: false,
        };
        this.errorMessages = {
            firstName: {
                required: 'First name is required',
            },
            lastName: {
                required: 'Last name is required',
            },
            username: {
                required: 'Username is required',
                minLength: "'Username must be " + this.formRules.usernameMin + " characters or more"
            },
            email: {
                required: 'required',
                email: 'Invalid email address',
            },
            password: {
                required: 'Password is required',
                pattern: 'Password must contain: numbers, uppercase and lowercase letters',
                minLength: "Password must be at least " + this.formRules.passwordMin + " characters"
            },
            confirmPassword: {
                required: 'Password confirmation is required',
                passwordMismatch: 'Passwords must match'
            },
            accept: {
                requiredTrue: 'You have to accept our Terms and Conditions'
            },
        };
    }
    ValidationFormsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ValidationFormsService);
    return ValidationFormsService;
}());



/***/ })

}]);
//# sourceMappingURL=validation-forms-validation-forms-module.js.map