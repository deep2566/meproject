(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-forms-basic-forms-module"],{

/***/ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js ***!
  \*****************************************************************************/
/*! exports provided: CollapseDirective, CollapseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return CollapseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return CollapseModule; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COLLAPSE_ANIMATION_TIMING = '400ms cubic-bezier(0.4,0.0,0.2,1)';
/** @type {?} */
var expandAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, visibility: 'hidden' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(COLLAPSE_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', visibility: 'visible' }))
];
/** @type {?} */
var collapseAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', visibility: 'visible' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(COLLAPSE_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, visibility: 'hidden' }))
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CollapseDirective = /** @class */ (function () {
    function CollapseDirective(_el, _renderer, _builder) {
        this._el = _el;
        this._renderer = _renderer;
        /**
         * This event fires as soon as content collapses
         */
        this.collapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event fires when collapsing is started
         */
        this.collapses = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event fires as soon as content becomes visible
         */
        this.expanded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event fires when expansion is started
         */
        this.expands = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        this._display = 'block';
        this._stylesLoaded = false;
        this._COLLAPSE_ACTION_NAME = 'collapse';
        this._EXPAND_ACTION_NAME = 'expand';
        this._factoryCollapseAnimation = _builder.build(collapseAnimation);
        this._factoryExpandAnimation = _builder.build(expandAnimation);
    }
    Object.defineProperty(CollapseDirective.prototype, "display", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!this.isAnimated) {
                this._renderer.setStyle(this._el.nativeElement, 'display', value);
                return;
            }
            this._display = value;
            if (value === 'none') {
                this.hide();
                return;
            }
            this.show();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollapseDirective.prototype, "collapse", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isExpanded;
        },
        /** A flag indicating visibility of content (shown or hidden) */
        set: /**
         * A flag indicating visibility of content (shown or hidden)
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!this._player || this._isAnimationDone) {
                this.isExpanded = value;
                this.toggle();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CollapseDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this._stylesLoaded = true;
        if (!this._player || !this._isAnimationDone) {
            return;
        }
        this._player.reset();
        this._renderer.setStyle(this._el.nativeElement, 'height', '*');
    };
    /** allows to manually toggle content visibility */
    /**
     * allows to manually toggle content visibility
     * @return {?}
     */
    CollapseDirective.prototype.toggle = /**
     * allows to manually toggle content visibility
     * @return {?}
     */
    function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /** allows to manually hide content */
    /**
     * allows to manually hide content
     * @return {?}
     */
    CollapseDirective.prototype.hide = /**
     * allows to manually hide content
     * @return {?}
     */
    function () {
        var _this = this;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapsing = false;
        this.collapses.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)((/**
         * @return {?}
         */
        function () {
            _this._isAnimationDone = true;
            _this.collapsed.emit(_this);
            _this._renderer.setStyle(_this._el.nativeElement, 'display', 'none');
        }));
    };
    /** allows to manually show collapsed content */
    /**
     * allows to manually show collapsed content
     * @return {?}
     */
    CollapseDirective.prototype.show = /**
     * allows to manually show collapsed content
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.setStyle(this._el.nativeElement, 'display', this._display);
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapsing = false;
        this.expands.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)((/**
         * @return {?}
         */
        function () {
            _this._isAnimationDone = true;
            _this.expanded.emit(_this);
        }));
    };
    /**
     * @param {?} isAnimated
     * @param {?} action
     * @return {?}
     */
    CollapseDirective.prototype.animationRun = /**
     * @param {?} isAnimated
     * @param {?} action
     * @return {?}
     */
    function (isAnimated, action) {
        var _this = this;
        if (!isAnimated || !this._stylesLoaded) {
            return (/**
             * @param {?} callback
             * @return {?}
             */
            function (callback) { return callback(); });
        }
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');
        this._renderer.addClass(this._el.nativeElement, 'collapse');
        /** @type {?} */
        var factoryAnimation = (action === this._EXPAND_ACTION_NAME)
            ? this._factoryExpandAnimation
            : this._factoryCollapseAnimation;
        if (this._player) {
            this._player.destroy();
        }
        this._player = factoryAnimation.create(this._el.nativeElement);
        this._player.play();
        return (/**
         * @param {?} callback
         * @return {?}
         */
        function (callback) { return _this._player.onDone(callback); });
    };
    CollapseDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[collapse]',
                    exportAs: 'bs-collapse',
                    host: {
                        '[class.collapse]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    CollapseDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"] }
    ]; };
    CollapseDirective.propDecorators = {
        collapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        collapses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        expands: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        isExpanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.in',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.show',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.aria-expanded',] }],
        isCollapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.aria-hidden',] }],
        isCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.collapse',] }],
        isCollapsing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.collapsing',] }],
        display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        collapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return CollapseDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CollapseModule = /** @class */ (function () {
    function CollapseModule() {
    }
    /**
     * @return {?}
     */
    CollapseModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: CollapseModule, providers: [] };
    };
    CollapseModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [CollapseDirective],
                    exports: [CollapseDirective]
                },] }
    ];
    return CollapseModule;
}());


//# sourceMappingURL=ngx-bootstrap-collapse.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/basic-forms/basic-forms.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/basic-forms/basic-forms.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Credit Card</strong>\n          <small>Form</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter your name\">\n              </div>\n            </div>\n          </div><!--/.row-->\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"ccnumber\">Credit Card Number</label>\n                <input type=\"text\" class=\"form-control\" id=\"ccnumber\" placeholder=\"0000 0000 0000 0000\">\n              </div>\n            </div>\n          </div><!--/.row-->\n          <div class=\"row\">\n            <div class=\"form-group col-sm-4\">\n              <label for=\"ccmonth\">Month</label>\n              <select class=\"form-control\" id=\"ccmonth\">\n                <option>1</option>\n                <option>2</option>\n                <option>3</option>\n                <option>4</option>\n                <option>5</option>\n                <option>6</option>\n                <option>7</option>\n                <option>8</option>\n                <option>9</option>\n                <option>10</option>\n                <option>11</option>\n                <option>12</option>\n              </select>\n            </div>\n            <div class=\"form-group col-sm-4\">\n              <label for=\"ccyear\">Year</label>\n              <select class=\"form-control\" id=\"ccyear\">\n                <option>2014</option>\n                <option>2015</option>\n                <option>2016</option>\n                <option>2017</option>\n                <option>2018</option>\n                <option>2019</option>\n                <option>2020</option>\n                <option>2021</option>\n                <option>2022</option>\n                <option>2023</option>\n                <option>2024</option>\n                <option>2025</option>\n              </select>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label for=\"cvv\">CVV/CVC</label>\n                <input type=\"text\" class=\"form-control\" id=\"cvv\" placeholder=\"123\">\n              </div>\n            </div>\n          </div><!--/.row-->\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Company</strong>\n          <small>Form</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-group\">\n            <label for=\"company\">Company</label>\n            <input type=\"text\" class=\"form-control\" id=\"company\" placeholder=\"Enter your company name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"vat\">VAT</label>\n            <input type=\"text\" class=\"form-control\" id=\"vat\" placeholder=\"PL1234567890\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"street\">Street</label>\n            <input type=\"text\" class=\"form-control\" id=\"street\" placeholder=\"Enter street name\">\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-sm-8\">\n              <label for=\"city\">City</label>\n              <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"Enter your city\">\n            </div>\n            <div class=\"form-group col-sm-4\">\n              <label for=\"postal-code\">Postal Code</label>\n              <input type=\"text\" class=\"form-control\" id=\"postal-code\" placeholder=\"Postal Code\">\n            </div>\n          </div><!--/.row-->\n          <div class=\"form-group\">\n            <label for=\"country\">Country</label>\n            <input type=\"text\" class=\"form-control\" id=\"country\" placeholder=\"Country name\">\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Basic Form</strong> Elements\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\">Static</label>\n              <div class=\"col-md-9\">\n                <p class=\"form-control-static\">Username</p>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Text Input</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"Text\">\n                <span class=\"help-block\">This is a help text</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"email-input\">Email Input</label>\n              <div class=\"col-md-9\">\n                <input type=\"email\" id=\"email-input\" name=\"email-input\" class=\"form-control\" placeholder=\"Enter Email\" autocomplete=\"email\">\n                <span class=\"help-block\">Please enter your email</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"password-input\">Password</label>\n              <div class=\"col-md-9\">\n                <input type=\"password\" id=\"password-input\" name=\"password-input\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\">\n                <span class=\"help-block\">Please enter a complex password</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"date-input\">Date Input</label>\n              <div class=\"col-md-9\">\n                <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"date-input\" placeholder=\"date\">\n                <span class=\"help-block\">Please enter a valid date</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"disabled-input\">Disabled Input</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" id=\"disabled-input\" name=\"disabled-input\" class=\"form-control\" placeholder=\"Disabled\" disabled>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"textarea-input\">Textarea</label>\n              <div class=\"col-md-9\">\n                <textarea id=\"textarea-input\" name=\"textarea-input\" rows=\"9\" class=\"form-control\" placeholder=\"Content..\"></textarea>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"select1\">Select</label>\n              <div class=\"col-md-9\">\n                <select id=\"select1\" name=\"select1\" class=\"form-control\">\n                  <option value=\"0\">Please select</option>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"select2\">Select Large</label>\n              <div class=\"col-md-9\">\n                <select id=\"select2\" name=\"select2\" class=\"form-control form-control-lg\">\n                  <option value=\"0\">Please select</option>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"select3\">Select Small</label>\n              <div class=\"col-md-9\">\n                <select id=\"select3\" name=\"select3\" class=\"form-control form-control-sm\">\n                  <option value=\"0\">Please select</option>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"disabledSelect\">Disabled Select</label>\n              <div class=\"col-md-9\">\n                <select id=\"disabledSelect\" class=\"form-control\" disabled>\n                  <option value=\"0\">Please select</option>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"multiple-select\">Multiple select</label>\n              <div class=\"col-md-9\">\n                <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                  <option value=\"4\">Option #4</option>\n                  <option value=\"5\">Option #5</option>\n                  <option value=\"6\">Option #6</option>\n                  <option value=\"7\">Option #7</option>\n                  <option value=\"8\">Option #8</option>\n                  <option value=\"9\">Option #9</option>\n                  <option value=\"10\">Option #10</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" >Radios</label>\n              <div class=\"col-md-9 col-form-label\">\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"radios\" id=\"radio1\" value=\"option1\" checked>\n                  <label class=\"form-check-label\" for=\"radio1\">\n                    Option 1\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"radios\" id=\"radio2\" value=\"option2\">\n                  <label class=\"form-check-label\" for=\"radio2\">\n                    Option 2\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"radios\" id=\"radio3\" value=\"option3\">\n                  <label class=\"form-check-label\" for=\"radio3\">\n                    Option 3\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"inline-radios\">Inline Radios</label>\n              <div class=\"col-md-9 col-form-label\">\n                <div class=\"form-check form-check-inline mr-1\" id=\"inline-radios\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inline-radios\" id=\"inlineRadio1\" value=\"option1\">\n                  <label class=\"form-check-label\" for=\"inlineRadio1\">One</label>\n                </div>\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inline-radios\" id=\"inlineRadio2\" value=\"option2\">\n                  <label class=\"form-check-label\" for=\"inlineRadio2\">Two</label>\n                </div>\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inline-radios\" id=\"inlineRadio3\" value=\"option3\">\n                  <label class=\"form-check-label\" for=\"inlineRadio3\">Three</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\">Checkboxes</label>\n              <div class=\"col-md-9 col-form-label\">\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\" id=\"checkbox1\">\n                  <label class=\"form-check-label\" for=\"checkbox1\">\n                    Option 1\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\" id=\"checkbox2\">\n                  <label class=\"form-check-label\" for=\"checkbox2\">\n                    Option 2\n                  </label>\n                </div>\n                <div class=\"form-check checkbox\">\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\" id=\"checkbox3\">\n                  <label class=\"form-check-label\" for=\"checkbox3\">\n                    Option 3\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\">Inline Checkboxes</label>\n              <div class=\"col-md-9 col-form-label\">\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inline-checkbox1\" value=\"option1\">\n                  <label class=\"form-check-label\" for=\"inline-checkbox1\">One</label>\n                </div>\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inline-checkbox2\" value=\"option2\">\n                  <label class=\"form-check-label\" for=\"inline-checkbox2\">Two</label>\n                </div>\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inline-checkbox3\" value=\"option3\">\n                  <label class=\"form-check-label\" for=\"inline-checkbox3\">Three</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"file-input\">File input</label>\n              <div class=\"col-md-9\">\n                <input type=\"file\" id=\"file-input\" name=\"file-input\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"file-multiple-input\">Multiple File input</label>\n              <div class=\"col-md-9\">\n                <input type=\"file\" id=\"file-multiple-input\" name=\"file-multiple-input\" multiple>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Inline</strong> Form\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-inline\">\n            <div class=\"form-group\">\n              <label class=\"sr-only\" for=\"if-email\">Email</label>\n              <input type=\"email\" id=\"if-email\" name=\"if-email\" class=\"form-control\" placeholder=\"Enter Email..\" autocomplete=\"email\">\n            </div>\n            <div class=\"form-group\">\n              <label class=\"sr-only\" for=\"if-password\">Password</label>\n              <input type=\"password\" id=\"if-password\" name=\"if-password\" class=\"form-control\" placeholder=\"Enter Password..\" autocomplete=\"current-password\">\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Horizontal</strong> Form\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Email</label>\n              <div class=\"col-md-9\">\n                <input type=\"email\" id=\"hf-email\" name=\"hf-email\" class=\"form-control\" placeholder=\"Enter Email..\" autocomplete=\"email\">\n                <span class=\"help-block\">Please enter your email</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"hf-password\">Password</label>\n              <div class=\"col-md-9\">\n                <input type=\"password\" id=\"hf-password\" name=\"hf-password\" class=\"form-control\" placeholder=\"Enter Password..\" autocomplete=\"current-password\">\n                <span class=\"help-block\">Please enter your password</span>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Normal</strong> Form\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\">\n            <div class=\"form-group\">\n              <label for=\"nf-email\">Email</label>\n              <input type=\"email\" id=\"nf-email\" name=\"nf-email\" class=\"form-control\" placeholder=\"Enter Email..\" autocomplete=\"email\">\n              <span class=\"help-block\">Please enter your email</span>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"nf-password\">Password</label>\n              <input type=\"password\" id=\"nf-password\" name=\"nf-password\" class=\"form-control\" placeholder=\"Enter Password..\" autocomplete=\"current-password\">\n              <span class=\"help-block\">Please enter your password</span>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Input\n          <strong>Grid</strong>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-3\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-3\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-4\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-5\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-6\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-7\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-8\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-9\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-9\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-10\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-11\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-11\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-12\">\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-user\"></i> Login</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Input\n          <strong>Sizes</strong>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-5 col-form-label\" for=\"input-small\">Small Input</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" id=\"input-small\" name=\"input-small\" class=\"form-control form-control-sm\" placeholder=\".form-control-sm\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-5 col-form-label\" for=\"input-normal\">Normal Input</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" id=\"input-normal\" name=\"input-normal\" class=\"form-control\" placeholder=\"Normal\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-5 col-form-label\" for=\"input-large\">Large Input</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" id=\"input-large\" name=\"input-large\" class=\"form-control form-control-lg\" placeholder=\".form-control-lg\">\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Validation states</strong> Form\n        </div>\n        <form>\n          <div class=\"card-body\">\n            <div class=\"form-group\">\n              <label class=\"form-col-form-label\" for=\"inputSuccess1\">Input with success</label>\n              <input type=\"text\" class=\"form-control is-valid\" id=\"inputSuccess1\">\n              <div class=\"valid-feedback\">\n                Input is valid.\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-col-form-label\" for=\"inputError1\">Input with error</label>\n              <input type=\"text\" class=\"form-control is-invalid\" id=\"inputError1\">\n              <div class=\"invalid-feedback\">\n                Please provide a valid information.\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Validation </strong> <code>was-validated</code>\n        </div>\n        <div class=\"card-body\">\n          <form class=\"was-validated\">\n            <div class=\"form-group\">\n              <label class=\"form-col-form-label\" for=\"inputSuccess2\">Input is valid</label>\n              <input type=\"text\" class=\"form-control is-valid\" id=\"inputSuccess2\">\n              <div class=\"valid-feedback\">\n                Looks good!\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-col-form-label\" for=\"inputError2\">Input required</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputError2\" required>\n              <div class=\"valid-feedback\">\n                Input is valid.\n              </div>\n              <div class=\"invalid-feedback\">\n                Please provide a valid information.\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Icon/Text</strong> Groups\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                  </div>\n                  <input type=\"text\" id=\"input1-group1\" name=\"input1-group1\" class=\"form-control\" placeholder=\"Username\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <input type=\"email\" id=\"input2-group1\" name=\"input2-group1\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-envelope-o\"></i></span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-euro\"></i></span>\n                  </div>\n                  <input type=\"text\" id=\"input3-group1\" name=\"input3-group1\" class=\"form-control\" placeholder=\"..\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">.00</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Buttons</strong> Groups\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-prepend\">\n                    <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Search</button>\n                  </span>\n                  <input type=\"text\" id=\"input1-group2\" name=\"input1-group2\" class=\"form-control\" placeholder=\"Username\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <input type=\"email\" id=\"input2-group2\" name=\"input2-group2\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\">\n                  <span class=\"input-group-append\">\n                    <button type=\"button\" class=\"btn btn-primary\">Submit</button>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-prepend\">\n                    <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-facebook\"></i></button>\n                  </span>\n                  <input type=\"text\" id=\"input3-group2\" name=\"input3-group2\" class=\"form-control\" placeholder=\"Search\">\n                  <span class=\"input-group-append\">\n                    <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-twitter\"></i></button>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Dropdowns</strong> Groups\n        </div>\n        <div class=\"card-body\">\n\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\" dropdown>\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>Action\n                      <span class=\"caret\"></span>\n                    </button>\n                    <div class=\"dropdown-menu\" *dropdownMenu>\n                      <a class=\"dropdown-item\" href=\"#\">Action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                      <div role=\"separator\" class=\"dropdown-divider\"></div>\n                      <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                    </div>\n                  </div>\n                  <input type=\"text\" id=\"input1-group3\" name=\"input1-group3\" class=\"form-control\" placeholder=\"Username\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <input type=\"email\" id=\"input2-group3\" name=\"input2-group3\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\">\n                  <div class=\"input-group-append\" dropdown>\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>Action\n                      <span class=\"caret\"></span>\n                    </button>\n                    <div class=\"dropdown-menu\" *dropdownMenu>\n                      <a class=\"dropdown-item\" href=\"#\">Action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                      <div role=\"separator\" class=\"dropdown-divider\"></div>\n                      <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\" dropdown>\n                    <button type=\"button\" class=\"btn btn-primary\">Action</button>\n                    <button type=\"button\" dropdownToggle class=\"btn btn-primary dropdown-toggle dropdown-toggle-split\">\n                      <span class=\"caret\"></span>\n                      <span class=\"sr-only\">Split button!</span>\n                    </button>\n                    <div class=\"dropdown-menu\" *dropdownMenu>\n                      <a class=\"dropdown-item\" href=\"#\">Action prepend</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                      <div role=\"separator\" class=\"dropdown-divider\"></div>\n                      <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                    </div>\n                  </div>\n                  <input type=\"text\" id=\"input3-group3\" name=\"input3-group3\" class=\"form-control\" placeholder=\"..\">\n                  <div class=\"input-group-append\" dropdown>\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>Action\n                      <span class=\"caret\"></span>\n                    </button>\n                    <div class=\"dropdown-menu\" *dropdownMenu>\n                      <a class=\"dropdown-item\" href=\"#\">Action append</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                      <div role=\"separator\" class=\"dropdown-divider\"></div>\n                      <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Use the grid for big devices!\n          <small>\n            <code>.col-lg-*</code>\n            <code>.col-md-*</code>\n            <code>.col-sm-*</code>\n          </small>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-8\">\n              </div>\n              <div class=\"col-md-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-4\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-7\">\n              </div>\n              <div class=\"col-md-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-5\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-6\">\n              </div>\n              <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-6\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-5\">\n              </div>\n              <div class=\"col-md-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-7\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-4\">\n              </div>\n              <div class=\"col-md-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-8\">\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-danger\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-warning\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-info\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-success\">Action</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Input Grid for small devices!\n          <small>\n            <code>.col-*</code>\n          </small>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-4\">\n              </div>\n              <div class=\"col-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-8\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-5\">\n              </div>\n              <div class=\"col-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-7\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-6\">\n              </div>\n              <div class=\"col-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-6\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-5\">\n              </div>\n              <div class=\"col-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-5\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-8\">\n              </div>\n              <div class=\"col-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-4\">\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-danger\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-warning\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-info\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-success\">Action</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Example Form\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">Username</span>\n                </div>\n                <input type=\"text\" id=\"username3\" name=\"username3\" class=\"form-control\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">Email</span>\n                </div>\n                <input type=\"email\" id=\"email3\" name=\"email3\" class=\"form-control\" autocomplete=\"email\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-envelope\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">Password</span>\n                </div>\n                <input type=\"password\" id=\"password3\" name=\"password3\" class=\"form-control\" autocomplete=\"current-password\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-asterisk\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group form-actions\">\n              <button type=\"submit\" class=\"btn btn-sm btn-primary\">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Example Form <code>append</code>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <input type=\"text\" id=\"username2\" name=\"username2\" class=\"form-control\" placeholder=\"Username\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <input type=\"email\" id=\"email2\" name=\"email2\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-envelope\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <input type=\"password\" id=\"password2\" name=\"password2\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-asterisk\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group form-actions\">\n              <button type=\"submit\" class=\"btn btn-sm btn-secondary\">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Example Form <code>prepend</code>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                </div>\n                <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-envelope\"></i></span>\n                </div>\n                <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-asterisk\"></i></span>\n                </div>\n                <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\">\n              </div>\n            </div>\n            <div class=\"form-group form-actions\">\n              <button type=\"submit\" class=\"btn btn-sm btn-success\">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-edit\"></i>Form Elements\n          <div class=\"card-header-actions\">\n            <button type=\"button\" class=\"card-header-action btn btn-link btn-setting\"><i class=\"icon-settings\"></i></button>\n            <button type=\"button\" class=\"card-header-action btn btn-link btn-minimize\"(click)=\"toggleCollapse()\"><i class={{iconCollapse}}></i></button>\n            <button type=\"button\" class=\"card-header-action btn btn-link btn-close\"><i class=\"icon-close\"></i></button>\n          </div>\n        </div>\n        <div (collapsed)=\"collapsed($event)\"\n             (expanded)=\"expanded($event)\"\n             [collapse]=\"isCollapsed\"\n             class=\"card-body\">\n          <form class=\"form-horizontal\">\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"prependedInput\">Prepended text</label>\n            <div class=\"controls\">\n              <div class=\"input-prepend input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">@</span>\n                </div>\n                <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\">\n              </div>\n              <p class=\"help-block\">Here's some help text</p>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"appendedInput\">Appended text</label>\n            <div class=\"controls\">\n              <div class=\"input-group\">\n                <input id=\"appendedInput\" class=\"form-control\" size=\"16\" type=\"text\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">.00</span>\n                </div>\n              </div>\n              <span class=\"help-block\">Here's more help text</span>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"appendedPrependedInput\">Append and prepend</label>\n            <div class=\"controls\">\n              <div class=\"input-prepend input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">$</span>\n                </div>\n                <input id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"text\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">.00</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"appendedInputButton\">Append with button</label>\n            <div class=\"controls\">\n              <div class=\"input-group\">\n                <input id=\"appendedInputButton\" class=\"form-control\" size=\"16\" type=\"text\">\n                <span class=\"input-group-append\">\n                  <button class=\"btn btn-secondary\" type=\"button\">Go!</button>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"appendedInputButtons\">Two-button append</label>\n            <div class=\"controls\">\n              <div class=\"input-group\">\n                <input id=\"appendedInputButtons\" size=\"16\" class=\"form-control\" type=\"text\">\n                <span class=\"input-group-append\">\n                  <button class=\"btn btn-secondary\" type=\"button\">Search</button>\n                  <button class=\"btn btn-secondary\" type=\"button\">Options</button>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-actions\">\n            <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n            <button class=\"btn btn-secondary\" type=\"button\">Cancel</button>\n          </div>\n        </form>\n        </div>\n      </div>\n    </div> <!--/.col-->\n  </div><!--/.row-->\n</div>\n");

/***/ }),

/***/ "./src/app/views/forms/basic-forms/basic-forms-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/forms/basic-forms/basic-forms-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: BasicFormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFormsRoutingModule", function() { return BasicFormsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-forms.component */ "./src/app/views/forms/basic-forms/basic-forms.component.ts");




var routes = [
    {
        path: '',
        component: _basic_forms_component__WEBPACK_IMPORTED_MODULE_3__["BasicFormsComponent"],
        data: {
            title: 'Basic Forms'
        }
    }
];
var BasicFormsRoutingModule = /** @class */ (function () {
    function BasicFormsRoutingModule() {
    }
    BasicFormsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BasicFormsRoutingModule);
    return BasicFormsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/forms/basic-forms/basic-forms.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/forms/basic-forms/basic-forms.component.ts ***!
  \******************************************************************/
/*! exports provided: BasicFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFormsComponent", function() { return BasicFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicFormsComponent = /** @class */ (function () {
    function BasicFormsComponent() {
        this.isCollapsed = false;
        this.iconCollapse = 'icon-arrow-up';
    }
    BasicFormsComponent.prototype.collapsed = function (event) {
        // console.log(event);
    };
    BasicFormsComponent.prototype.expanded = function (event) {
        // console.log(event);
    };
    BasicFormsComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
        this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
    };
    BasicFormsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basic-forms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/basic-forms/basic-forms.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BasicFormsComponent);
    return BasicFormsComponent;
}());



/***/ }),

/***/ "./src/app/views/forms/basic-forms/basic-forms.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/forms/basic-forms/basic-forms.module.ts ***!
  \***************************************************************/
/*! exports provided: BasicFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFormsModule", function() { return BasicFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _basic_forms_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-forms-routing.module */ "./src/app/views/forms/basic-forms/basic-forms-routing.module.ts");
/* harmony import */ var _basic_forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-forms.component */ "./src/app/views/forms/basic-forms/basic-forms.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");



// Routing




var BasicFormsModule = /** @class */ (function () {
    function BasicFormsModule() {
    }
    BasicFormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _basic_forms_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicFormsRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"].forRoot(),
            ],
            declarations: [
                _basic_forms_component__WEBPACK_IMPORTED_MODULE_4__["BasicFormsComponent"]
            ]
        })
    ], BasicFormsModule);
    return BasicFormsModule;
}());



/***/ })

}]);
//# sourceMappingURL=basic-forms-basic-forms-module.js.map