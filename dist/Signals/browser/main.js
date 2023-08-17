"use strict";
(self["webpackChunkSignals"] = self["webpackChunkSignals"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos/todos.component */ 3706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: '',
  component: _todos_todos_component__WEBPACK_IMPORTED_MODULE_0__.TodosComponent,
  data: {
    routerAnimations: 'homePage'
  }
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    initialNavigation: 'enabledBlocking'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;




class AppComponent {
  constructor() {
    this.title = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('Signals');
  }
  prepareRouterState(router) {
    return router.activatedRouteData['animation'] || 'initial';
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 3,
  vars: 1,
  consts: [[1, "app-content"], ["routerOutlet", "outlet"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerAnimations", ctx.prepareRouterState(_r0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: [".app-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwIDtcbn1cblxuXG4gIC8vIDpob3N0IHtcbiAgLy8gICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIC8vICAgZm9udC1zaXplOiAxNHB4O1xuICAvLyAgIGNvbG9yOiAjMzMzO1xuICAvLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8vICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC8vICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgLy8gfVxuXG4gIC8vIGgxLFxuICAvLyBoMixcbiAgLy8gaDMsXG4gIC8vIGg0LFxuICAvLyBoNSxcbiAgLy8gaDYge1xuICAvLyAgIG1hcmdpbjogOHB4IDA7XG4gIC8vIH1cblxuICAvLyBwIHtcbiAgLy8gICBtYXJnaW46IDA7XG4gIC8vIH1cblxuICAvLyAuc3BhY2VyIHtcbiAgLy8gICBmbGV4OiAxO1xuICAvLyB9XG5cbiAgLy8gLnRvb2xiYXIge1xuICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gICB0b3A6IDA7XG4gIC8vICAgbGVmdDogMDtcbiAgLy8gICByaWdodDogMDtcbiAgLy8gICBoZWlnaHQ6IDYwcHg7XG4gIC8vICAgZGlzcGxheTogZmxleDtcbiAgLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIC8vICAgY29sb3I6IHdoaXRlO1xuICAvLyAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC8vIH1cblxuICAvLyAudG9vbGJhciBpbWcge1xuICAvLyAgIG1hcmdpbjogMCAxNnB4O1xuICAvLyB9XG5cbiAgLy8gLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XG4gIC8vICAgaGVpZ2h0OiA0MHB4O1xuICAvLyAgIG1hcmdpbjogMCA4cHg7XG4gIC8vIH1cblxuICAvLyAudG9vbGJhciAjeW91dHViZS1sb2dvIHtcbiAgLy8gICBoZWlnaHQ6IDQwcHg7XG4gIC8vICAgbWFyZ2luOiAwIDE2cHg7XG4gIC8vIH1cblxuICAvLyAudG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyLFxuICAvLyAudG9vbGJhciAjeW91dHViZS1sb2dvOmhvdmVyIHtcbiAgLy8gICBvcGFjaXR5OiAwLjg7XG4gIC8vIH1cblxuICAvLyAuY29udGVudCB7XG4gIC8vICAgZGlzcGxheTogZmxleDtcbiAgLy8gICBtYXJnaW46IDgycHggYXV0byAzMnB4O1xuICAvLyAgIHBhZGRpbmc6IDAgMTZweDtcbiAgLy8gICBtYXgtd2lkdGg6IDk2MHB4O1xuICAvLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gfVxuXG4gIC8vIHN2Zy5tYXRlcmlhbC1pY29ucyB7XG4gIC8vICAgaGVpZ2h0OiAyNHB4O1xuICAvLyAgIHdpZHRoOiBhdXRvO1xuICAvLyB9XG5cbiAgLy8gc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xuICAvLyAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAvLyB9XG5cbiAgLy8gLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICAvLyAgIGZpbGw6ICM4ODg7XG4gIC8vIH1cblxuICAvLyAuY2FyZC1jb250YWluZXIge1xuICAvLyAgIGRpc3BsYXk6IGZsZXg7XG4gIC8vICAgZmxleC13cmFwOiB3cmFwO1xuICAvLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvLyAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIC8vIH1cblxuICAvLyAuY2FyZCB7XG4gIC8vICAgYWxsOiB1bnNldDtcbiAgLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC8vICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAvLyAgIGhlaWdodDogNDBweDtcbiAgLy8gICB3aWR0aDogMjAwcHg7XG4gIC8vICAgbWFyZ2luOiAwIDhweCAxNnB4O1xuICAvLyAgIHBhZGRpbmc6IDE2cHg7XG4gIC8vICAgZGlzcGxheTogZmxleDtcbiAgLy8gICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAvLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC8vICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIC8vIH1cblxuICAvLyAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gIC8vICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAvLyB9XG5cbiAgLy8gLmNhcmQuY2FyZC1zbWFsbCB7XG4gIC8vICAgaGVpZ2h0OiAxNnB4O1xuICAvLyAgIHdpZHRoOiAxNjhweDtcbiAgLy8gfVxuXG4gIC8vIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gIC8vICAgY3Vyc29yOiBwb2ludGVyO1xuICAvLyB9XG5cbiAgLy8gLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcbiAgLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIC8vICAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICAvLyB9XG5cbiAgLy8gLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgLy8gICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XG4gIC8vIH1cblxuICAvLyAuY2FyZC5oaWdobGlnaHQtY2FyZCB7XG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgLy8gICBjb2xvcjogd2hpdGU7XG4gIC8vICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLy8gICBib3JkZXI6IG5vbmU7XG4gIC8vICAgd2lkdGg6IGF1dG87XG4gIC8vICAgbWluLXdpZHRoOiAzMCU7XG4gIC8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyB9XG5cbiAgLy8gLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgLy8gICBtYXJnaW4tbGVmdDogNjBweDtcbiAgLy8gfVxuXG4gIC8vIHN2ZyNyb2NrZXQge1xuICAvLyAgIHdpZHRoOiA4MHB4O1xuICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gICBsZWZ0OiAtMTBweDtcbiAgLy8gICB0b3A6IC0yNHB4O1xuICAvLyB9XG5cbiAgLy8gc3ZnI3JvY2tldC1zbW9rZSB7XG4gIC8vICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTVweCk7XG4gIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyAgIHRvcDogMTBweDtcbiAgLy8gICByaWdodDogMTgwcHg7XG4gIC8vICAgei1pbmRleDogLTEwO1xuICAvLyB9XG5cbiAgLy8gYSxcbiAgLy8gYTp2aXNpdGVkLFxuICAvLyBhOmhvdmVyIHtcbiAgLy8gICBjb2xvcjogIzE5NzZkMjtcbiAgLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC8vIH1cblxuICAvLyBhOmhvdmVyIHtcbiAgLy8gICBjb2xvcjogIzEyNTY5OTtcbiAgLy8gfVxuXG4gIC8vIC50ZXJtaW5hbCB7XG4gIC8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyAgIHdpZHRoOiA4MCU7XG4gIC8vICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgLy8gICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIC8vICAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIC8vICAgbWFyZ2luLXRvcDogOHB4O1xuICAvLyAgIG92ZXJmbG93OiBoaWRkZW47XG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTYpO1xuICAvLyB9XG5cbiAgLy8gLnRlcm1pbmFsOjpiZWZvcmUge1xuICAvLyAgIGNvbnRlbnQ6IFwiXFwyMDIyIFxcMjAyMiBcXDIwMjJcIjtcbiAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vICAgdG9wOiAwO1xuICAvLyAgIGxlZnQ6IDA7XG4gIC8vICAgaGVpZ2h0OiA0cHg7XG4gIC8vICAgYmFja2dyb3VuZDogcmdiKDU4LCA1OCwgNTgpO1xuICAvLyAgIGNvbG9yOiAjYzJjM2M0O1xuICAvLyAgIHdpZHRoOiAxMDAlO1xuICAvLyAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgLy8gICBsaW5lLWhlaWdodDogMDtcbiAgLy8gICBwYWRkaW5nOiAxNHB4IDA7XG4gIC8vICAgdGV4dC1pbmRlbnQ6IDRweDtcbiAgLy8gfVxuXG4gIC8vIC50ZXJtaW5hbCBwcmUge1xuICAvLyAgIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xuICAvLyAgIGNvbG9yOiB3aGl0ZTtcbiAgLy8gICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcbiAgLy8gICBtYXJnaW46IDA7XG4gIC8vIH1cblxuICAvLyAuY2lyY2xlLWxpbmsge1xuICAvLyAgIGhlaWdodDogNDBweDtcbiAgLy8gICB3aWR0aDogNDBweDtcbiAgLy8gICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAvLyAgIG1hcmdpbjogOHB4O1xuICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gIC8vICAgZGlzcGxheTogZmxleDtcbiAgLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyAgIGN1cnNvcjogcG9pbnRlcjtcbiAgLy8gICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIC8vICAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XG4gIC8vIH1cblxuICAvLyAuY2lyY2xlLWxpbms6aG92ZXIge1xuICAvLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XG4gIC8vICAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgLy8gfVxuXG4gIC8vIGZvb3RlciB7XG4gIC8vICAgbWFyZ2luLXRvcDogOHB4O1xuICAvLyAgIGRpc3BsYXk6IGZsZXg7XG4gIC8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gICBsaW5lLWhlaWdodDogMjBweDtcbiAgLy8gfVxuXG4gIC8vIGZvb3RlciBhIHtcbiAgLy8gICBkaXNwbGF5OiBmbGV4O1xuICAvLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vIH1cblxuICAvLyAuZ2l0aHViLXN0YXItYmFkZ2Uge1xuICAvLyAgIGNvbG9yOiAjMjQyOTJlO1xuICAvLyAgIGRpc3BsYXk6IGZsZXg7XG4gIC8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gICBmb250LXNpemU6IDEycHg7XG4gIC8vICAgcGFkZGluZzogM3B4IDEwcHg7XG4gIC8vICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywzMSwzNSwuMik7XG4gIC8vICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAvLyAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmYWZiZmMsI2VmZjNmNiA5MCUpO1xuICAvLyAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIC8vICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLy8gfVxuXG4gIC8vIC5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XG4gIC8vICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2YwZjNmNiwjZTZlYmYxIDkwJSk7XG4gIC8vICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LDMxLDM1LC4zNSk7XG4gIC8vICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLS41ZW07XG4gIC8vIH1cblxuICAvLyAuZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcbiAgLy8gICBoZWlnaHQ6IDE2cHg7XG4gIC8vICAgd2lkdGg6IDE2cHg7XG4gIC8vICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIC8vIH1cblxuICAvLyBzdmcjY2xvdWRzIHtcbiAgLy8gICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8vICAgYm90dG9tOiAtMTYwcHg7XG4gIC8vICAgbGVmdDogLTIzMHB4O1xuICAvLyAgIHotaW5kZXg6IC0xMDtcbiAgLy8gICB3aWR0aDogMTkyMHB4O1xuICAvLyB9XG5cbiAgLy8gLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbiAgLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLy8gICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspICxcbiAgLy8gICAudGVybWluYWwge1xuICAvLyAgICAgd2lkdGg6IDEwMCU7XG4gIC8vICAgfVxuXG4gIC8vICAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xuICAvLyAgICAgaGVpZ2h0OiAxNnB4O1xuICAvLyAgICAgbWFyZ2luOiA4cHggMDtcbiAgLy8gICB9XG5cbiAgLy8gICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgLy8gICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xuICAvLyAgIH1cblxuICAvLyAgIHN2ZyNyb2NrZXQtc21va2Uge1xuICAvLyAgICAgcmlnaHQ6IDEyMHB4O1xuICAvLyAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC8vICAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gIC8vICAgICBkaXNwbGF5OiBub25lO1xuICAvLyAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('routerAnimations', [
    // Define animation transitions here using 'transition', 'style', 'animate', etc.
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 0,
      marginTop: '-100px'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('500ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 1,
      marginTop: 0
    }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('500ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 0
    }))])])]
  }
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos/todos.component */ 3706);
/* harmony import */ var _todos_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos/components/footer/footer.component */ 1868);
/* harmony import */ var _todos_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todos/components/header/header.component */ 9417);
/* harmony import */ var _todos_components_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todos/components/main/main.component */ 5797);
/* harmony import */ var _todos_components_todo_todo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todos/components/todo/todo.component */ 5903);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;











class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.provideClientHydration)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.provideHttpClient)()],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _todos_todos_component__WEBPACK_IMPORTED_MODULE_2__.TodosComponent, _todos_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _todos_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _todos_components_main_main_component__WEBPACK_IMPORTED_MODULE_5__.MainComponent, _todos_components_todo_todo_component__WEBPACK_IMPORTED_MODULE_6__.TodoComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule]
  });
})();

/***/ }),

/***/ 1868:
/*!*************************************************************!*\
  !*** ./src/app/todos/components/footer/footer.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/todos.service */ 8174);
/* harmony import */ var _types_filter_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/filter.enum */ 1610);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;





const _c0 = function (a0) {
  return {
    "hidden": a0
  };
};
const _c1 = function (a0) {
  return {
    selected: a0
  };
};
class FooterComponent {
  constructor() {
    this.todosService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_todos_service__WEBPACK_IMPORTED_MODULE_0__.TodosService);
    this.filterSig = this.todosService.filterSig;
    this.filterEnum = _types_filter_enum__WEBPACK_IMPORTED_MODULE_1__.FilterEnum;
    this.activeCount = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
      return this.todosService.todosSig().filter(todo => !todo.isCompleted).length;
    });
    this.noTodosClass = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
      return this.todosService.todosSig().length == 0;
    });
    this.itemLeftText = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
      return `Item${this.activeCount() !== 1 ? 's' : ''} Left`;
    });
  }
  changeFilter(event, filterName) {
    event.preventDefault();
    this.todosService.changeFilter(filterName);
  }
  removeAllTodos(event) {
    event.preventDefault();
    this.todosService.removeAllTodos();
  }
}
_class = FooterComponent;
_class.ɵfac = function FooterComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-footer"]],
  decls: 18,
  vars: 14,
  consts: [[1, "footer", 3, "ngClass"], [1, "todo-count"], [1, "filters"], ["href", "/", 3, "ngClass", "click"], [2, "right", "7px", "position", "absolute"], ["href", "/", 3, "click"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "footer", 0)(1, "span", 1)(2, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 2)(6, "li")(7, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_7_listener($event) {
        return ctx.changeFilter($event, ctx.filterEnum.all);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "All");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li")(10, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_10_listener($event) {
        return ctx.changeFilter($event, ctx.filterEnum.active);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li")(13, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_13_listener($event) {
        return ctx.changeFilter($event, ctx.filterEnum.completed);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 4)(16, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_16_listener($event) {
        return ctx.removeAllTodos($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Delete All");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx.noTodosClass()));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.activeCount(), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.itemLeftText(), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c1, ctx.filterSig() === ctx.filterEnum.all));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c1, ctx.filterSig() === ctx.filterEnum.active));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c1, ctx.filterSig() === ctx.filterEnum.completed));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9417:
/*!*************************************************************!*\
  !*** ./src/app/todos/components/header/header.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/todos.service */ 8174);
var _class;



class HeaderComponent {
  constructor() {
    this.text = '';
    this.todosService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_todos_service__WEBPACK_IMPORTED_MODULE_0__.TodosService);
  }
  changeText(event) {
    const target = event.target;
    this.text = target.value;
  }
  addTodo() {
    this.todosService.addTodo(this.text);
    this.text = '';
  }
  changeThemeColor() {
    const body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('light-theme')) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    }
    return true;
  }
}
_class = HeaderComponent;
_class.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-header"]],
  decls: 5,
  vars: 1,
  consts: [[1, "header"], ["type", "checkbox", 1, "toggle-theme", "toggle-all", 3, "change"], ["placeholder", "What needs to be done?", "autoFocus", "", 1, "new-todo", 3, "value", "keyup", "keyup.enter"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Signal App ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HeaderComponent_Template_input_change_3_listener() {
        return ctx.changeThemeColor();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function HeaderComponent_Template_input_keyup_4_listener($event) {
        return ctx.changeText($event);
      })("keyup.enter", function HeaderComponent_Template_input_keyup_enter_4_listener() {
        return ctx.addTodo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.text);
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5797:
/*!*********************************************************!*\
  !*** ./src/app/todos/components/main/main.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainComponent: () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/todos.service */ 8174);
/* harmony import */ var _types_filter_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/filter.enum */ 1610);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo/todo.component */ 5903);
var _class;






function MainComponent_app_todo_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-todo", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("setEditingId", function MainComponent_app_todo_5_Template_app_todo_setEditingId_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.setEditingId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const todo_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("todo", todo_r1)("isEditing", ctx_r0.editingId == todo_r1.id);
  }
}
const _c0 = function (a0) {
  return {
    "hidden": a0
  };
};
class MainComponent {
  constructor() {
    this.todosService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_services_todos_service__WEBPACK_IMPORTED_MODULE_0__.TodosService);
    this.editingId = null;
    this.visibleTodos = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.computed)(() => {
      const todos = this.todosService.todosSig();
      const filter = this.todosService.filterSig();
      if (filter === _types_filter_enum__WEBPACK_IMPORTED_MODULE_1__.FilterEnum.active) {
        return todos.filter(todo => !todo.isCompleted);
      } else if (filter === _types_filter_enum__WEBPACK_IMPORTED_MODULE_1__.FilterEnum.completed) {
        return todos.filter(todo => todo.isCompleted);
      }
      return todos;
    });
    this.isAllTodosSelected = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.computed)(() => this.todosService.todosSig().every(todo => todo.isCompleted));
    this.noTodosClass = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.computed)(() => {
      return this.todosService.todosSig().length == 0;
    });
  }
  setEditingId(editingId) {
    this.editingId = editingId;
  }
  toggleAllTodos(event) {
    const target = event.target;
    this.todosService.toggleAll(target.checked);
  }
}
_class = MainComponent;
_class.ɵfac = function MainComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-main"]],
  decls: 6,
  vars: 5,
  consts: [[1, "main", 3, "ngClass"], ["id", "toggle-all", "type", "checkbox", 1, "toggle-all", 3, "checked", "change"], ["for", "toggle-all"], [1, "todo-list"], [3, "todo", "isEditing", "setEditingId", 4, "ngFor", "ngForOf"], [3, "todo", "isEditing", "setEditingId"]],
  template: function MainComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function MainComponent_Template_input_change_1_listener($event) {
        return ctx.toggleAllTodos($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Mark all as completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MainComponent_app_todo_5_Template, 1, 2, "app-todo", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx.noTodosClass()));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.isAllTodosSelected());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.visibleTodos());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _todo_todo_component__WEBPACK_IMPORTED_MODULE_2__.TodoComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5903:
/*!*********************************************************!*\
  !*** ./src/app/todos/components/todo/todo.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoComponent: () => (/* binding */ TodoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/todos.service */ 8174);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;




const _c0 = ["textInput"];
function TodoComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function TodoComponent_ng_container_6_Template_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.changeText($event));
    })("keyup.enter", function TodoComponent_ng_container_6_Template_input_keyup_enter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.changeTodo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.editingText);
  }
}
const _c1 = function (a0, a1) {
  return {
    editing: a0,
    completed: a1
  };
};
class TodoComponent {
  constructor() {
    this.todoService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_todos_service__WEBPACK_IMPORTED_MODULE_0__.TodosService);
    this.editingText = '';
    this.setEditingId = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    this.editingText = this.todo.text;
  }
  ngOnChanges(changes) {
    if (changes['isEditing'].currentValue) {
      setTimeout(() => {
        this.textInput?.nativeElement.focus();
      }, 0);
    }
  }
  changeText(event) {
    const value = event.target.value;
    if (value === '') this.editingText = this.todo.text;
    this.editingText = value;
  }
  changeTodo() {
    if (this.editingText === '') this.editingText = this.todo.text;
    this.todoService.changeTodo(this.todo.id, this.editingText);
    this.setEditingId.emit(null);
  }
  setTodoInEditMode() {
    this.setEditingId.emit(this.todo.id);
  }
  removeTodo() {
    this.todoService.removeTodo(this.todo.id);
  }
  toggleTodo() {
    this.todoService.toggleTodo(this.todo.id);
  }
}
_class = TodoComponent;
_class.ɵfac = function TodoComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-todo"]],
  viewQuery: function TodoComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.textInput = _t.first);
    }
  },
  inputs: {
    todo: "todo",
    isEditing: "isEditing"
  },
  outputs: {
    setEditingId: "setEditingId"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 7,
  vars: 7,
  consts: [[3, "ngClass"], [1, "view"], ["type", "checkbox", 1, "toggle", 3, "checked", "change"], [3, "dblclick"], [1, "destroy", 3, "click"], [4, "ngIf"], [1, "edit", 3, "value", "keyup", "keyup.enter"], ["textInput", ""]],
  template: function TodoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 0)(1, "div", 1)(2, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TodoComponent_Template_input_change_2_listener() {
        return ctx.toggleTodo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dblclick", function TodoComponent_Template_label_dblclick_3_listener() {
        return ctx.setTodoInEditMode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoComponent_Template_button_click_5_listener() {
        return ctx.removeTodo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TodoComponent_ng_container_6_Template, 3, 1, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx.isEditing, ctx.todo.isCompleted));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.todo.isCompleted);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.todo.text);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEditing);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8174:
/*!*************************************************!*\
  !*** ./src/app/todos/services/todos.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodosService: () => (/* binding */ TodosService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _types_filter_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/filter.enum */ 1610);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;




class TodosService {
  constructor() {
    this.platformId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID);
    this.todosSig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    this.filterSig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(_types_filter_enum__WEBPACK_IMPORTED_MODULE_0__.FilterEnum.all);
    this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId);
    this.logTodos = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.effect)(() => {
      if (this.isBrowser) {
        localStorage.setItem('Todos', JSON.stringify(this.todosSig()));
      }
    });
    if (this.isBrowser) {
      const todosFromStorage = this.getTodosFromStroage();
      this.todosSig.set(todosFromStorage);
    }
  }
  getTodosFromStroage() {
    if (this.isBrowser) {
      const todosString = localStorage.getItem('Todos');
      return todosString ? JSON.parse(todosString) : [];
    }
    return [];
  }
  changeFilter(filterName) {
    this.filterSig.set(filterName);
  }
  addTodo(text) {
    if (text === '') return;
    const newTodo = {
      id: Math.random().toString(16),
      text,
      isCompleted: false
    };
    this.todosSig.update(todos => [...todos, newTodo]);
  }
  changeTodo(id, text) {
    this.todosSig.update(todos => {
      return todos.map(todo => todo.id === id ? {
        ...todo,
        text
      } : todo);
    });
  }
  removeTodo(id) {
    this.todosSig.update(todos => {
      return todos.filter(todo => todo.id !== id);
    });
  }
  removeAllTodos() {
    this.todosSig.set([]);
  }
  toggleTodo(id) {
    this.todosSig.update(todos => {
      return todos.map(todo => todo.id === id ? {
        ...todo,
        isCompleted: !todo.isCompleted
      } : todo);
    });
  }
  toggleAll(isCompleted) {
    this.todosSig.update(todos => {
      return todos.map(todo => ({
        ...todo,
        isCompleted: isCompleted
      }));
    });
  }
}
_class = TodosService;
_class.ɵfac = function TodosService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3706:
/*!******************************************!*\
  !*** ./src/app/todos/todos.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodosComponent: () => (/* binding */ TodosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/footer/footer.component */ 1868);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ 9417);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main.component */ 5797);
var _class;




class TodosComponent {}
_class = TodosComponent;
_class.ɵfac = function TodosComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-todos"]],
  decls: 4,
  vars: 0,
  consts: [[1, "todoapp"]],
  template: function TodosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-header")(2, "app-main")(3, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1610:
/*!********************************************!*\
  !*** ./src/app/todos/types/filter.enum.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterEnum: () => (/* binding */ FilterEnum)
/* harmony export */ });
var FilterEnum;
(function (FilterEnum) {
  FilterEnum["all"] = "all";
  FilterEnum["active"] = "active";
  FilterEnum["completed"] = "completed";
})(FilterEnum || (FilterEnum = {}));

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map