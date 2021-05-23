(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/eitan/Downloads/job_interview/ZoomInfo/assignment/catifact/src/main.ts */"zUnb");


/***/ }),

/***/ "2AUz":
/*!***********************************************************************!*\
  !*** ./src/app/components/navigation-bar/navigation-bar.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NavigationBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavigationBarComponent.ɵfac = function NavigationBarComponent_Factory(t) { return new (t || NavigationBarComponent)(); };
NavigationBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationBarComponent, selectors: [["app-navigation-bar"]], decls: 14, vars: 0, consts: [["display", "inline-block", 1, "div_container"], [1, "navigationWrapper"], [1, "logoWrapper"], [1, "stylish"], [1, "logo"], [1, "navigation"], [1, "parent"], ["href", "facts", 1, "link"], ["href", "my-facts", 1, "link"]], template: function NavigationBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Catifact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\uD83D\uDE3A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "All Facts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "My Facts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-size: 12px;\n    color: #212121;\n    padding-top: 15px;\n    transition: all 0.3s ease-in-out;\n  }\n  body[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]:hover {\n    color: white;\n  }\n  .navigationWrapper[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    padding: 20px;\n    background-color: #222;\n    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);\n    color: white;\n    text-transform: uppercase;\n    overflow: hidden;\n    width: 100%;\n    \n  }\n  .navigationWrapper[_ngcontent-%COMP%]   .logoWrapper[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .navigationWrapper[_ngcontent-%COMP%]   .logoWrapper[_ngcontent-%COMP%]   .stylish[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .navigationWrapper[_ngcontent-%COMP%]   .logoWrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    padding-left: 4px;\n    color: #33ccff;\n  }\n  .navigationWrapper[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    display: flex;\n    list-style-type: none;\n  }\n  .navigationWrapper[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    opacity: 1;\n    list-style-type: none;\n    color: white;\n    text-decoration: none;\n    transition: all 0.3s ease-in-out;\n  }\n  .navigationWrapper[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .parent[_ngcontent-%COMP%] {\n    padding: 0 10px;\n    cursor: pointer;\n  }\n  .navigationWrapper[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .parent[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    transition: all 0.3s ease-in-out;\n    color: white;\n  }\n  .navigationWrapper[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .parent[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n    color: #33ccff\n    ;\n  }\n  .navigationWrapper[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .parent[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .fa-minus[_ngcontent-%COMP%] {\n    opacity: 0;\n    transition: all 0.3s ease-in-out;\n    position: absolute;\n    left: -16px;\n    top: 3px;\n  }\n  .navigationWrapper[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .parent[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .fa-plus[_ngcontent-%COMP%] {\n    opacity: 1;\n    transition: all 0.3s ease-in-out;\n  }\n  .navigationWrapper[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .parent[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n    color: #33ccff;\n    margin: -2px 4px 0;\n    font-size: 10px;\n    transition: all 0.3s ease-in-out;\n  }\n  .active.parent[_ngcontent-%COMP%] {\n    transform: translate(-40px, -25px);\n  }\n  .active.parent[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .invisible[_ngcontent-%COMP%] {\n    opacity: 0 !important;\n    transform: translate(50px, 0);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRDQUE0QztJQUM1QyxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixXQUFXOztFQUViO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGFBQWE7SUFDYixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLGVBQWU7SUFDZixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLFlBQVk7RUFDZDtFQUNBO0lBQ0U7SUFDQTtFQUNGO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtFQUNWO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQ0FBZ0M7RUFDbEM7RUFFQTtJQUNFLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLDZCQUE2QjtFQUMvQiIsImZpbGUiOiJuYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBib2R5IC5zaWduYXR1cmUge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMyMTIxMjE7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgYm9keSAuc2lnbmF0dXJlOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5uYXZpZ2F0aW9uV3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gIH1cbiAgLm5hdmlnYXRpb25XcmFwcGVyIC5sb2dvV3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAubmF2aWdhdGlvbldyYXBwZXIgLmxvZ29XcmFwcGVyIC5zdHlsaXNoIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAubmF2aWdhdGlvbldyYXBwZXIgLmxvZ29XcmFwcGVyIC5sb2dvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICBjb2xvcjogIzMzY2NmZjtcbiAgfVxuICAubmF2aWdhdGlvbldyYXBwZXIgLm5hdmlnYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG4gIC5uYXZpZ2F0aW9uV3JhcHBlciAubmF2aWdhdGlvbiBsaSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgfVxuICAubmF2aWdhdGlvbldyYXBwZXIgLm5hdmlnYXRpb24gLnBhcmVudCB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAubmF2aWdhdGlvbldyYXBwZXIgLm5hdmlnYXRpb24gLnBhcmVudCAubGluayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5uYXZpZ2F0aW9uV3JhcHBlciAubmF2aWdhdGlvbiAucGFyZW50IC5saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzY2NmZlxuICAgIDtcbiAgfVxuICAubmF2aWdhdGlvbldyYXBwZXIgLm5hdmlnYXRpb24gLnBhcmVudCAubGluayAuZmEtbWludXMge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xNnB4O1xuICAgIHRvcDogM3B4O1xuICB9XG4gIC5uYXZpZ2F0aW9uV3JhcHBlciAubmF2aWdhdGlvbiAucGFyZW50IC5saW5rIC5mYS1wbHVzIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB9XG4gIC5uYXZpZ2F0aW9uV3JhcHBlciAubmF2aWdhdGlvbiAucGFyZW50IC5saW5rIC5mYXMge1xuICAgIGNvbG9yOiAjMzNjY2ZmO1xuICAgIG1hcmdpbjogLTJweCA0cHggMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAuYWN0aXZlLnBhcmVudCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwcHgsIC0yNXB4KTtcbiAgfVxuICAuYWN0aXZlLnBhcmVudCAubGluayB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLmludmlzaWJsZSB7XG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwcHgsIDApO1xuICB9Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FqVR":
/*!***************************************!*\
  !*** ./src/app/fact-fetch-service.ts ***!
  \***************************************/
/*! exports provided: FactFetchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactFetchService", function() { return FactFetchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class FactFetchService {
    // saveWish (movie) : Observable<Object>{
    //   return this.http.get('/set-wish',{ params:{ Movie : movie}, responseType: 'json'})
    // }
    // getWishes () : Observable<Object>{
    //   return this.http.get('/get-wishes',{ responseType: 'json'})
    // }
    constructor(http) {
        this.http = http;
    }
    fetchFacts() {
        let urltmp = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=100";
        return this.http.get('/get-facts', { params: { url: urltmp }, responseType: 'json' });
    }
    // "https://api.thecatapi.com/v1/images/search?limiti=100&api_key=6a2a6157-5b70-41dd-bbe3-8dd95cf386a9&"
    fetchCatImage() {
        let urltmp = "https://api.thecatapi.com/v1/images/search?limit=100";
        return this.http.get('/get-img', { params: { url: urltmp }, responseType: 'json' });
    }
    saveFactToJSON(fact, uid) {
        return this.http.post('/save-fact', { params: { fact: fact, uid: uid }, responseType: 'json' });
    }
    removeFactFromJSON(factid, uid) {
        return this.http.post('/remove-fact', { params: { factid: factid, uid: uid }, responseType: 'json' });
    }
    getFactsFromJSON(uid) {
        return this.http.post('/get-local-facts', { params: { uid: uid }, responseType: 'json' });
    }
}
FactFetchService.ɵfac = function FactFetchService_Factory(t) { return new (t || FactFetchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FactFetchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FactFetchService, factory: FactFetchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "GTVW":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-dialog/user-dialog.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDialogComponent", function() { return UserDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class UserDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
    }
}
UserDialogComponent.ɵfac = function UserDialogComponent_Factory(t) { return new (t || UserDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
UserDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserDialogComponent, selectors: [["app-user-dialog"]], decls: 15, vars: 4, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "margin-left", "5%", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function UserDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Please Enter Your Username :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserDialogComponent_Template_input_ngModelChange_9_listener($event) { return ctx.data.uid = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserDialogComponent_Template_button_click_11_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "No Thanks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Hi ", ctx.data.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.data.uid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", ctx.data.uid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation-bar/navigation-bar.component */ "2AUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'catifact';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "back"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavigationBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".back[_ngcontent-%COMP%] {\n    \n    background-color: #85a7d3;\n    background-size: cover;\n    \n    \n    \n   }\n\nhtml[_ngcontent-%COMP%] {\n    background: #85a7d3;\n    margin: 0;\n    height: 100%;\n    width : 100%\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaURBQWlEO0lBQ2pELHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixpQkFBaUI7R0FDbEI7O0FBRUg7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7SUFDWjtFQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2NhdC1iYWNrLmpwZ1wiKTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODVhN2QzO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICB9XG5cbmh0bWwge1xuICAgIGJhY2tncm91bmQ6ICM4NWE3ZDM7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aCA6IDEwMCVcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "T4Jb":
/*!***********************************************************!*\
  !*** ./src/app/components/my-facts/my-facts.component.ts ***!
  \***********************************************************/
/*! exports provided: MyFactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFactsComponent", function() { return MyFactsComponent; });
/* harmony import */ var _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user-dialog/user-dialog.component */ "GTVW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_fact_fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/fact-fetch-service */ "FqVR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../card/card.component */ "lXt9");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");









function MyFactsComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("No Results Found for : ", ctx_r0.uid, "");
} }
function MyFactsComponent_mat_grid_tile_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fact_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx_r1.transparent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colspan", 3)("rowspan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CatFact", fact_r2)("toggle", true)("myuid", ctx_r1.uid)("myfact", true);
} }
class MyFactsComponent {
    constructor(dialog, factfetchservice) {
        this.dialog = dialog;
        this.factfetchservice = factfetchservice;
        this.searchText = '';
        this.factlist = [];
        this.CatImageUrls = [];
        this.uid = '';
    }
    openDialog() {
        const dialogRef = this.dialog.open(_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_0__["UserDialogComponent"], {
            width: '270px',
            data: { name: this.uid, text: "To Login," }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.uid = result;
            this.getFactList();
        });
    }
    getImages() {
        this.factfetchservice.fetchCatImage()
            .subscribe((results) => { this.CatImageUrls = results; console.log(results); });
    }
    getFactList() {
        this.factfetchservice.getFactsFromJSON(this.uid)
            .subscribe((results) => {
            var res = [];
            for (var key in results) {
                res.push(results[key]);
            }
            this.factlist = (results === undefined) ? [] : res;
            console.log(results);
        });
    }
    ngOnInit() {
        this.openDialog();
    }
}
MyFactsComponent.ɵfac = function MyFactsComponent_Factory(t) { return new (t || MyFactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_fact_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FactFetchService"])); };
MyFactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyFactsComponent, selectors: [["app-my-facts"]], decls: 12, vars: 6, consts: [[1, "back"], ["align-self", "text-center", 1, "container", "text-center"], ["color", "grey", 1, "row"], [1, "container"], ["type", "text", "name", "search", "autocomplete", "off", "placeholder", " \uD83D\uDD0D What The Cat...Would you like to know?", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["layout", "row"], ["flex", ""], ["layout", "row", "padding-left", "5%", 4, "ngIf"], [1, "font-color"], ["cols", "6", "rowHeight", "250px", "gutterSize", "50"], [3, "background", "colspan", "rowspan", 4, "ngFor", "ngForOf"], ["layout", "row", "padding-left", "5%"], [3, "colspan", "rowspan"], [3, "CatFact", "toggle", "myuid", "myfact"]], template: function MyFactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyFactsComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchText = $event; })("keyup", function MyFactsComponent_Template_input_keyup_4_listener() { return ctx.getFactList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MyFactsComponent_span_7_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-grid-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MyFactsComponent_mat_grid_tile_10_Template, 2, 8, "mat-grid-tile", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.factlist.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 3, ctx.factlist, ctx.searchText));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridTile"], _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipe"]], styles: [".form-control[_ngcontent-%COMP%] {\n    \n    margin: 1100;\n    padding-bottom: 1200;\n    \n    background-color: #eaf4f7;\n    border-color: grey;\n    color: black;\n    font-size : 20px;\n    border-style: solid;\n    transition: width 0.4s ease-in-out;\n    width: 40%;\n    margin-left: -10%;\n    \n    height : 50%;\n    \n  }\n  .back[_ngcontent-%COMP%]{\n    background-color:#85a7d3;\n    background-size: cover;\n  }\n  .container[_ngcontent-%COMP%]{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             \n    color: black;\n    \n    border: 2px solid transparent;\n    \n    margin-left: 26%;\n    font-size : 30px;\n\n}\n  .font-color[_ngcontent-%COMP%] {                                                                                   \n    color: black;\n    font-size : 20px;\n    margin-left : 7%;\n    margin-top : 10%;\n  }\n  .form-control[_ngcontent-%COMP%]::placeholder  {\n    font-family: FontAwesome;\n    color: grey\n  }\n  html[_ngcontent-%COMP%] {\n    background: #000;\n    margin: 0;\n    height: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWZhY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixzQ0FBc0M7SUFDdEMseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUVuQixrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1DQUFtQztFQUNyQztFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLHNCQUFzQjtFQUN4QjtFQUNGO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0FBRXBCO0VBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7RUFDRjtJQUNJLHdCQUF3QjtJQUN4QjtFQUNGO0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFlBQVk7RUFDZCIsImZpbGUiOiJteS1mYWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbCB7XG4gICAgLyogYm94LXNpemluZzogYm9yZGVyLWJveDsgKi9cbiAgICBtYXJnaW46IDExMDA7XG4gICAgcGFkZGluZy1ib3R0b206IDEyMDA7XG4gICAgLyogYm94LXNoYWRvdzogMCAxMHB4IDQwcHggMCB5ZWxsb3c7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZjRmNztcbiAgICBib3JkZXItY29sb3I6IGdyZXk7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZSA6IDIwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluLW91dDtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAlO1xuICAgIC8qIG1hcmdpbi10b3AgOiAtMTAlOyAqL1xuICAgIGhlaWdodCA6IDUwJTtcbiAgICAvKiBib3JkZXItYmxvY2stZW5kLWNvbG9yOiBvcmFuZ2UgKi9cbiAgfVxuICAuYmFja3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM4NWE3ZDM7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuLmNvbnRhaW5lcnsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgY29sb3I6IGJsYWNrO1xuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgLyogcGFkZGluZzogMjVweDsgKi9cbiAgICBtYXJnaW4tbGVmdDogMjYlO1xuICAgIGZvbnQtc2l6ZSA6IDMwcHg7XG5cbn1cbi5mb250LWNvbG9yIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemUgOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0IDogNyU7XG4gICAgbWFyZ2luLXRvcCA6IDEwJTtcbiAgfVxuLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIgIHtcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gICAgY29sb3I6IGdyZXlcbiAgfVxuXG4gIGh0bWwge1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_facts_facts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/facts/facts.component */ "tl/9");
/* harmony import */ var _components_my_facts_my_facts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/my-facts/my-facts.component */ "T4Jb");
/* harmony import */ var _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navigation-bar/navigation-bar.component */ "2AUz");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngmodule/material-carousel */ "XZNO");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/card/card.component */ "lXt9");
/* harmony import */ var _components_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/user-dialog/user-dialog.component */ "GTVW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_10__["MatCarouselModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_facts_facts_component__WEBPACK_IMPORTED_MODULE_3__["FactsComponent"],
        _components_my_facts_my_facts_component__WEBPACK_IMPORTED_MODULE_4__["MyFactsComponent"],
        _components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavigationBarComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_17__["CardComponent"],
        _components_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_18__["UserDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_10__["MatCarouselModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"]] }); })();


/***/ }),

/***/ "lXt9":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user-dialog/user-dialog.component */ "GTVW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_fact_fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/fact-fetch-service */ "FqVR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







function CardComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_mat_card_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.enableDisableRule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.CatFact.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.toggleLike ? "blue" : "grey");
} }
class CardComponent {
    constructor(dialog, factfetchservice) {
        this.dialog = dialog;
        this.factfetchservice = factfetchservice;
        this.uid = '';
    }
    // CatImage
    openDialog() {
        const dialogRef = this.dialog.open(_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_0__["UserDialogComponent"], {
            width: '270px',
            data: { name: this.uid, text: "To Save a Fact," }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.uid = result;
            this.saveFact(this.CatFact, this.uid);
        }, error => { console.log(error); }, () => { });
    }
    saveFact(CatFact, uid) {
        this.factfetchservice.saveFactToJSON(CatFact, uid)
            .subscribe((results) => { console.log(results); });
    }
    removeFact(CatFactid, uid) {
        this.factfetchservice.removeFactFromJSON(CatFactid, uid)
            .subscribe((results) => { console.log(results); });
    }
    enableDisableRule() {
        this.toggleLike = !this.toggleLike;
        this.toggleLike ? (!this.myfact ? this.openDialog() : this.saveFact(this.CatFact, this.uid)) : this.removeFact(this.CatFact._id, this.uid);
    }
    ngOnInit() {
        this.toggleLike = this.toggle;
        this.uid = this.myuid;
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_fact_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FactFetchService"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { CatFact: "CatFact", toggle: "toggle", myuid: "myuid", myfact: "myfact" }, decls: 1, vars: 1, consts: [["class", "card", 4, "ngIf"], [1, "card"], [1, "font-color"], ["mat-icon-button", "", "background-color", "transparent", "background", "none", 1, "grey", 3, "ngClass", "click"], ["font-size", "50px"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CardComponent_mat_card_0_Template, 10, 2, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.myfact && !ctx.toggleLike));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: [".card[_ngcontent-%COMP%] {\n    \n    max-width: 700px;\n    width : 500px;\n    height: 100px;\n    justify-content: center;\n    background: none;\n    background-color : transparent;\n    border: transparent!important;\n    margin:\"0em\";\n\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 60px;\n    overflow: hidden;\n    \n  }\n  \n  .font-color[_ngcontent-%COMP%] {  \n  position: absolute;\n   overflow: auto;\n    box-sizing: border-box;                                                                                 \n    color: black;\n        right: 0;\n    top: 55px;\n    width: 95%;\n    height: 80%;\n    font-size : 130%;\n  }\n  \n  .header-image[_ngcontent-%COMP%] {\n    background-size: cover;\n  }\n  \n  .grey[_ngcontent-%COMP%] {\n    color: grey;\n    background: none;\n    position: absolute;\n    top: 5%; \n    right: 2%;\n    border:transparent;\n    outline: none;\n    font-size:120%;\n    }\n  \n  .blue[_ngcontent-%COMP%] {\n    color: rgb(56, 86, 218);\n    background:none;\n    position: absolute;\n    top: 5%; \n    right: 2%;\n    border:transparent;\n    outline: none;\n    font-size: 120%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsWUFBWTs7SUFFWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdCQUFnQjs7RUFFbEI7O0VBRUE7RUFDQSxrQkFBa0I7R0FDakIsY0FBYztJQUNiLHNCQUFzQjtJQUN0QixZQUFZO1FBQ1IsUUFBUTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLHdCQUF3QjtFQUMxQjs7RUFDQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEI7O0VBRUY7SUFDRSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgbWF4LXdpZHRoOiAvKjUwMCUqLzcwMHB4O1xuICAgIHdpZHRoIDogLyo0NjAlKi81MDBweDtcbiAgICBoZWlnaHQ6IC8qMjAwJSovMTAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOlwiMGVtXCI7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDYwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBcbiAgfVxuICBcbiAgLmZvbnQtY29sb3IgeyAgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgY29sb3I6IGJsYWNrO1xuICAgICAgICByaWdodDogMDtcbiAgICB0b3A6IDU1cHg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBmb250LXNpemUgOiAxMzAlLyoyNHB4Ki87XG4gIH1cbiAgLmhlYWRlci1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuXG4gIC5ncmV5IHtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUlLyoxNXB4Ki87IFxuICAgIHJpZ2h0OiAyJS8qMTVweCovO1xuICAgIGJvcmRlcjp0cmFuc3BhcmVudDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtc2l6ZToxMjAlLyozNnB4Ki87XG4gICAgfVxuXG4gIC5ibHVlIHtcbiAgICBjb2xvcjogcmdiKDU2LCA4NiwgMjE4KTtcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNSUvKjE1cHgqLzsgXG4gICAgcmlnaHQ6IDIlLyoxNXB4Ki87XG4gICAgYm9yZGVyOnRyYW5zcGFyZW50O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMjAlLyozNnB4Ki87XG4gIH0gICAgIl19 */"] });


/***/ }),

/***/ "tl/9":
/*!*****************************************************!*\
  !*** ./src/app/components/facts/facts.component.ts ***!
  \*****************************************************/
/*! exports provided: FactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactsComponent", function() { return FactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_fact_fetch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/fact-fetch-service */ "FqVR");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngmodule/material-carousel */ "XZNO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card/card.component */ "lXt9");





function FactsComponent_mat_carousel_slide_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-carousel-slide", 6, 7);
} if (rf & 2) {
    const img_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", img_r2.url)("hideOverlay", true);
} }
function FactsComponent_mat_carousel_slide_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-carousel-slide", 8, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fact_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideOverlay", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CatFact", fact_r5)("toggle", false)("myfact", false);
} }
class FactsComponent {
    constructor(factfetchservice) {
        this.factfetchservice = factfetchservice;
        this.CatImageUrls = [];
        this.CatFacts = [];
    }
    getImages() {
        this.factfetchservice.fetchCatImage()
            .subscribe((results) => { this.CatImageUrls = results; console.log(results); });
    }
    download() {
        this.factfetchservice.fetchFacts()
            .subscribe((results) => {
            this.CatFacts = (results === undefined) ? [] : results;
            console.log(results);
        });
    }
    ngOnInit() {
        // this.slides = this.chunk(this.cards, 3);
        this.download();
        this.getImages();
    }
}
FactsComponent.ɵfac = function FactsComponent_Factory(t) { return new (t || FactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_fact_fetch_service__WEBPACK_IMPORTED_MODULE_1__["FactFetchService"])); };
FactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FactsComponent, selectors: [["app-facts"]], decls: 8, vars: 15, consts: [[1, "items"], ["timings", "250ms ease-in", "interval", "5000", "color", "blue", "maxWidth", "50%", "proportion", "40", "slides", "100", "orientation", "ltr", 3, "autoplay", "loop", "hideArrows", "hideIndicators", "useKeyboard", "useMouseWheel"], ["maxWidth", "100%", "maxheight", "50px", "overlayColor", "rgb(202, 205, 230)", "slidewidth", "50%", 3, "image", "hideOverlay", 4, "ngFor", "ngForOf"], [1, "items2"], ["timings", "250ms ease-in", "interval", "5000", "color", "blue", "maxWidth", "75%", "maxheight", "50px", "portions", "40", "slides", "100", "orientation", "ltr", 3, "autoplay", "loop", "hideArrows", "hideIndicators", "useKeyboard", "useMouseWheel"], ["slideheight", "50%", "overlayColor", "rgb(202, 205, 230)", 3, "hideOverlay", 4, "ngFor", "ngForOf"], ["maxWidth", "100%", "maxheight", "50px", "overlayColor", "rgb(202, 205, 230)", "slidewidth", "50%", 3, "image", "hideOverlay"], ["matCarouselSlide", ""], ["slideheight", "50%", "overlayColor", "rgb(202, 205, 230)", 3, "hideOverlay"], [2, "width", "100%", "height", "100%", "display", "flex", "flex-direction", "row", "align-items", "center", "justify-content", "center"], [3, "CatFact", "toggle", "myfact"]], template: function FactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Let's Learn About Cats !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FactsComponent_mat_carousel_slide_4_Template, 2, 2, "mat-carousel-slide", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FactsComponent_mat_carousel_slide_7_Template, 4, 4, "mat-carousel-slide", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoplay", true)("loop", true)("hideArrows", true)("hideIndicators", true)("useKeyboard", true)("useMouseWheel", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.CatImageUrls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoplay", false)("loop", true)("hideArrows", false)("hideIndicators", true)("useKeyboard", true)("useMouseWheel", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.CatFacts)("ngForOf", ctx.CatImageUrls);
    } }, directives: [_ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_2__["MatCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_2__["MatCarouselSlideComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"]], styles: ["h1[_ngcontent-%COMP%]{\n    text-align:center\n}\n\n.items[_ngcontent-%COMP%]{\n    \n    \n    margin-left: 33%\n}\n\n.items2[_ngcontent-%COMP%]{\n    \n    \n    margin-left: 19.7%\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCOzhCQUMwQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCOzhCQUMwQjtJQUMxQjtBQUNKIiwiZmlsZSI6ImZhY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgICB0ZXh0LWFsaWduOmNlbnRlclxufVxuXG4uaXRlbXN7XG4gICAgLyogcG9zaXRpb246YWJzb2x1dGU7ICovXG4gICAgLyogZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuICAgIG1hcmdpbi1sZWZ0OiAzMyVcbn1cblxuLml0ZW1zMntcbiAgICAvKiBwb3NpdGlvbjphYnNvbHV0ZTsgKi9cbiAgICAvKiBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gICAgbWFyZ2luLWxlZnQ6IDE5LjclXG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_facts_facts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/facts/facts.component */ "tl/9");
/* harmony import */ var _components_my_facts_my_facts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/my-facts/my-facts.component */ "T4Jb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _components_facts_facts_component__WEBPACK_IMPORTED_MODULE_1__["FactsComponent"] },
    { path: 'facts', component: _components_facts_facts_component__WEBPACK_IMPORTED_MODULE_1__["FactsComponent"] },
    { path: 'my-facts', component: _components_my_facts_my_facts_component__WEBPACK_IMPORTED_MODULE_2__["MyFactsComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map