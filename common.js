(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "ULrw":
/*!*****************************************!*\
  !*** ./src/app/sevices/news.service.ts ***!
  \*****************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NewsService {
    constructor() {
        this.newsData = [
            {
                title: 'typography lab',
                imgUrl: '../assets/images/card-section/img-1.jpg',
                id: 1
            },
            {
                title: 'online marketing',
                imgUrl: '../assets/images/card-section/img-2.jpg',
                id: 2
            },
            {
                title: 'c# coding',
                imgUrl: '../assets/images/card-section/img-3.jpg',
                id: 3
            },
            {
                title: 'interface design',
                imgUrl: '../assets/images/card-section/img-4.jpg',
                id: 4
            }
        ];
    }
}
NewsService.ɵfac = function NewsService_Factory(t) { return new (t || NewsService)(); };
NewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewsService, factory: NewsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map