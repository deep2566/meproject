(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, function (exports) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * CoreUI Plugins - Custom Tooltips for Chart.js (v1.3.1): custom-tooltips.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */
  function CustomTooltips(tooltipModel) {
    var _this = this;

    // Add unique id if not exist
    var _setCanvasId = function _setCanvasId() {
      var _idMaker = function _idMaker() {
        var _hex = 16;
        var _multiplier = 0x10000;
        return ((1 + Math.random()) * _multiplier | 0).toString(_hex);
      };

      var _canvasId = "_canvas-" + (_idMaker() + _idMaker());

      _this._chart.canvas.id = _canvasId;
      return _canvasId;
    };

    var ClassName = {
      ABOVE: 'above',
      BELOW: 'below',
      CHARTJS_TOOLTIP: 'chartjs-tooltip',
      NO_TRANSFORM: 'no-transform',
      TOOLTIP_BODY: 'tooltip-body',
      TOOLTIP_BODY_ITEM: 'tooltip-body-item',
      TOOLTIP_BODY_ITEM_COLOR: 'tooltip-body-item-color',
      TOOLTIP_BODY_ITEM_LABEL: 'tooltip-body-item-label',
      TOOLTIP_BODY_ITEM_VALUE: 'tooltip-body-item-value',
      TOOLTIP_HEADER: 'tooltip-header',
      TOOLTIP_HEADER_ITEM: 'tooltip-header-item'
    };
    var Selector = {
      DIV: 'div',
      SPAN: 'span',
      TOOLTIP: (this._chart.canvas.id || _setCanvasId()) + "-tooltip"
    };
    var tooltip = document.getElementById(Selector.TOOLTIP);

    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = Selector.TOOLTIP;
      tooltip.className = ClassName.CHARTJS_TOOLTIP;

      this._chart.canvas.parentNode.appendChild(tooltip);
    } // Hide if no tooltip


    if (tooltipModel.opacity === 0) {
      tooltip.style.opacity = 0;
      return;
    } // Set caret Position


    tooltip.classList.remove(ClassName.ABOVE, ClassName.BELOW, ClassName.NO_TRANSFORM);

    if (tooltipModel.yAlign) {
      tooltip.classList.add(tooltipModel.yAlign);
    } else {
      tooltip.classList.add(ClassName.NO_TRANSFORM);
    } // Set Text


    if (tooltipModel.body) {
      var titleLines = tooltipModel.title || [];
      var tooltipHeader = document.createElement(Selector.DIV);
      tooltipHeader.className = ClassName.TOOLTIP_HEADER;
      titleLines.forEach(function (title) {
        var tooltipHeaderTitle = document.createElement(Selector.DIV);
        tooltipHeaderTitle.className = ClassName.TOOLTIP_HEADER_ITEM;
        tooltipHeaderTitle.innerHTML = title;
        tooltipHeader.appendChild(tooltipHeaderTitle);
      });
      var tooltipBody = document.createElement(Selector.DIV);
      tooltipBody.className = ClassName.TOOLTIP_BODY;
      var tooltipBodyItems = tooltipModel.body.map(function (item) {
        return item.lines;
      });
      tooltipBodyItems.forEach(function (item, i) {
        var tooltipBodyItem = document.createElement(Selector.DIV);
        tooltipBodyItem.className = ClassName.TOOLTIP_BODY_ITEM;
        var colors = tooltipModel.labelColors[i];
        var tooltipBodyItemColor = document.createElement(Selector.SPAN);
        tooltipBodyItemColor.className = ClassName.TOOLTIP_BODY_ITEM_COLOR;
        tooltipBodyItemColor.style.backgroundColor = colors.backgroundColor;
        tooltipBodyItem.appendChild(tooltipBodyItemColor);

        if (item[0].split(':').length > 1) {
          var tooltipBodyItemLabel = document.createElement(Selector.SPAN);
          tooltipBodyItemLabel.className = ClassName.TOOLTIP_BODY_ITEM_LABEL;
          tooltipBodyItemLabel.innerHTML = item[0].split(': ')[0];
          tooltipBodyItem.appendChild(tooltipBodyItemLabel);
          var tooltipBodyItemValue = document.createElement(Selector.SPAN);
          tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
          tooltipBodyItemValue.innerHTML = item[0].split(': ').pop();
          tooltipBodyItem.appendChild(tooltipBodyItemValue);
        } else {
          var _tooltipBodyItemValue = document.createElement(Selector.SPAN);

          _tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
          _tooltipBodyItemValue.innerHTML = item[0];
          tooltipBodyItem.appendChild(_tooltipBodyItemValue);
        }

        tooltipBody.appendChild(tooltipBodyItem);
      });
      tooltip.innerHTML = '';
      tooltip.appendChild(tooltipHeader);
      tooltip.appendChild(tooltipBody);
    }

    var position = this._chart.canvas.getBoundingClientRect();

    var positionY = this._chart.canvas.offsetTop;
    var positionX = this._chart.canvas.offsetLeft;
    var positionLeft = positionX + tooltipModel.caretX;
    var positionTop = positionY + tooltipModel.caretY; // eslint-disable-next-line

    var halfWidth = tooltipModel.width / 2;

    if (positionLeft + halfWidth > position.width) {
      positionLeft -= halfWidth;
    } else if (positionLeft < halfWidth) {
      positionLeft += halfWidth;
    } // Display, position, and set styles for font


    tooltip.style.opacity = 1;
    tooltip.style.left = positionLeft + "px";
    tooltip.style.top = positionTop + "px";
  }

  var customTooltips = CustomTooltips; // TODO: camel-case

  exports.CustomTooltips = CustomTooltips;
  exports.customTooltips = customTooltips;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=custom-tooltips.js.map


/***/ }),

/***/ "./src/app/products.service.ts":
/*!*************************************!*\
  !*** ./src/app/products.service.ts ***!
  \*************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user';
    }
    ProductsService.prototype.add = function (name, username, email, password, role) {
        var obj = {
            name: name, username: username, email: email, password: password, role: role
        };
        return this.http.post(this.uri + "/add", obj);
    };
    ProductsService.prototype.getRoles = function () {
        var roleurl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'role';
        return this
            .http
            .get(roleurl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    };
    ProductsService.prototype.getProducts = function () {
        return this
            .http
            .get("" + this.uri).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    };
    ProductsService.prototype.editProduct = function (id) {
        return this
            .http
            .get(this.uri + "/edit/" + id);
    };
    ProductsService.prototype.updateProduct = function (name, role, id) {
        var obj = {
            name: name, role: role
        };
        return this
            .http
            .post(this.uri + "/update/" + id, obj);
    };
    ProductsService.prototype.deleteProduct = function (id) {
        return this
            .http
            .get(this.uri + "/delete/" + id);
    };
    ProductsService.prototype.handleError = function (error) {
        console.log('error');
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.log('server error');
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    ProductsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProductsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map