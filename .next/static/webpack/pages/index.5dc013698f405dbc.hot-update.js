"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./app/components/screens/home/Home.tsx":
/*!**********************************************!*\
  !*** ./app/components/screens/home/Home.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_product_product_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/product/product.api */ \"./app/store/product/product.api.ts\");\n/* harmony import */ var _cart_dropdown_CartDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-dropdown/CartDropdown */ \"./app/components/screens/home/cart-dropdown/CartDropdown.tsx\");\n/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductItem */ \"./app/components/screens/home/ProductItem.tsx\");\n/* harmony import */ var _ProductSkeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductSkeleton */ \"./app/components/screens/home/ProductSkeleton.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_store_product_product_api__WEBPACK_IMPORTED_MODULE_1__.useGetProductsQuery)(10), data = ref.data, error = ref.error, isLoading = ref.isLoading;\n    console.log(isLoading);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl text-green-900 font-medium\",\n                        children: \"Let's find your products!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\react\\\\redux-toolkit-crash-course\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cart_dropdown_CartDropdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\react\\\\redux-toolkit-crash-course\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\projects\\\\react\\\\redux-toolkit-crash-course\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductSkeleton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\projects\\\\react\\\\redux-toolkit-crash-course\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-between\",\n                children: new Array(3).map(function(product) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductSkeleton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\react\\\\redux-toolkit-crash-course\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\react\\\\redux-toolkit-crash-course\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-between\",\n                children: data === null || data === void 0 ? void 0 : data.map(function(product) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        product: product\n                    }, product.id, false, {\n                        fileName: \"D:\\\\projects\\\\react\\\\redux-toolkit-crash-course\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\react\\\\redux-toolkit-crash-course\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projects\\\\react\\\\redux-toolkit-crash-course\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this));\n};\n_s(Home, \"+hLFgh2y3iDrp+WwpRFd0i1neUM=\", false, function() {\n    return [\n        _store_product_product_api__WEBPACK_IMPORTED_MODULE_1__.useGetProductsQuery\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2hvbWUvSG9tZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dFO0FBQ2pCO0FBQ2hCO0FBQ1E7OztBQUUvQyxHQUFLLENBQUNJLElBQUksR0FBTyxRQUNqQixHQUR1QixDQUFDOzs7SUFDdEIsR0FBSyxDQUE4QkosR0FBdUIsR0FBdkJBLCtFQUFtQixDQUFDLEVBQUUsR0FBakRLLElBQUksR0FBdUJMLEdBQXVCLENBQWxESyxJQUFJLEVBQUVDLEtBQUssR0FBZ0JOLEdBQXVCLENBQTVDTSxLQUFLLEVBQUVDLFNBQVMsR0FBS1AsR0FBdUIsQ0FBckNPLFNBQVM7SUFDOUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixTQUFTO0lBQ3JCLE1BQU0sNkVBQ0hHLENBQUc7O3dGQUNEQSxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBeUM7O2dHQUNyREMsQ0FBRTt3QkFBQ0QsU0FBUyxFQUFDLENBQXFDO2tDQUFDLENBRXBEOzs7Ozs7Z0dBQ0NWLG1FQUFZOzs7Ozs7Ozs7Ozt3RkFFZEUsd0RBQWU7Ozs7O1lBRWZJLFNBQVMsK0VBQ1BHLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFnQzswQkFDNUMsR0FBRyxDQUFDRSxLQUFLLENBQUMsQ0FBQyxFQUFFQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxPQUFZO2tDQUM3QixNQUFNLCtEQUFMWix3REFBZTs7Ozs7Ozs7OztvR0FJbkJPLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFnQzswQkFDNUNOLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQVMsR0FBVEEsSUFBSSxDQUFKQSxDQUFTLEdBQVRBLElBQUksQ0FBRVMsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsT0FBWTtrQ0FDdEIsTUFBTSwrREFBTGIsb0RBQVc7d0JBQWtCYSxPQUFPLEVBQUVBLE9BQU87dUJBQTVCQSxPQUFPLENBQUNDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhDLENBQUM7R0E1QktaLElBQUk7O1FBQzJCSiwyRUFBbUI7OztLQURsREksSUFBSTtBQThCViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3NjcmVlbnMvaG9tZS9Ib21lLnRzeD9kZWY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlR2V0UHJvZHVjdHNRdWVyeSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3Byb2R1Y3QvcHJvZHVjdC5hcGknO1xuaW1wb3J0IENhcnREcm9wZG93biBmcm9tICcuL2NhcnQtZHJvcGRvd24vQ2FydERyb3Bkb3duJztcbmltcG9ydCBQcm9kdWN0SXRlbSBmcm9tICcuL1Byb2R1Y3RJdGVtJztcbmltcG9ydCBQcm9kdWN0U2tlbGV0b24gZnJvbSAnLi9Qcm9kdWN0U2tlbGV0b24nO1xuXG5jb25zdCBIb21lOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VHZXRQcm9kdWN0c1F1ZXJ5KDEwKTtcbiAgY29uc29sZS5sb2coaXNMb2FkaW5nKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMTBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JlZW4tOTAwIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgTGV0JmFwb3M7cyBmaW5kIHlvdXIgcHJvZHVjdHMhXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxDYXJ0RHJvcGRvd24gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFByb2R1Y3RTa2VsZXRvbiAvPlxuXG4gICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIHtuZXcgQXJyYXkoMykubWFwKChwcm9kdWN0OiBhbnkpID0+IChcbiAgICAgICAgICAgIDxQcm9kdWN0U2tlbGV0b24gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIHtkYXRhPy5tYXAoKHByb2R1Y3Q6IGFueSkgPT4gKFxuICAgICAgICAgICAgPFByb2R1Y3RJdGVtIGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VHZXRQcm9kdWN0c1F1ZXJ5IiwiQ2FydERyb3Bkb3duIiwiUHJvZHVjdEl0ZW0iLCJQcm9kdWN0U2tlbGV0b24iLCJIb21lIiwiZGF0YSIsImVycm9yIiwiaXNMb2FkaW5nIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiQXJyYXkiLCJtYXAiLCJwcm9kdWN0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/components/screens/home/Home.tsx\n");

/***/ })

});