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

/***/ "./app/components/screens/home/ProductItem.tsx":
/*!*****************************************************!*\
  !*** ./app/components/screens/home/ProductItem.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useActions */ \"./app/hooks/useActions.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProductItem = function(param) {\n    var product = param.product;\n    _s();\n    var addItem = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_2__.useActions)().addItem;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '48%',\n            backgroundColor: '#E5F0EA'\n        },\n        className: \"rounded-xl mb-5 p-3 shadow-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: product.image,\n                    alt: product.title,\n                    width: \"100\",\n                    height: \"143\",\n                    className: \"rounded-xl\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\projects\\\\react\\\\redux-toolkit-crash-course\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\react\\\\redux-toolkit-crash-course\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between mt-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-green-900 font-medium text-sm overflow-hidden text-ellipsis whitespace-nowrap mr-5\",\n                        children: product.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\react\\\\redux-toolkit-crash-course\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm text-green-600\",\n                        children: [\n                            \"$\",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\projects\\\\react\\\\redux-toolkit-crash-course\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\projects\\\\react\\\\redux-toolkit-crash-course\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    addItem();\n                },\n                className: \"text-sm mt-3 bg-white rounded-xl w-3/4 mx-auto block p-1 hover:bg-green-200\",\n                children: \"Add to cart\"\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\react\\\\redux-toolkit-crash-course\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projects\\\\react\\\\redux-toolkit-crash-course\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this));\n};\n_s(ProductItem, \"s4PSgZ8kCRBjWXGV11JV2LSOQ6w=\", false, function() {\n    return [\n        _hooks_useActions__WEBPACK_IMPORTED_MODULE_2__.useActions\n    ];\n});\n_c = ProductItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductItem);\nvar _c;\n$RefreshReg$(_c, \"ProductItem\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2hvbWUvUHJvZHVjdEl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThCO0FBR3dCOzs7QUFFdEQsR0FBSyxDQUFDRSxXQUFXLEdBQXlCLFFBQVEsUUFBUyxDQUFDO1FBQWZDLE9BQU8sU0FBUEEsT0FBTzs7SUFDbEQsR0FBSyxDQUFHQyxPQUFPLEdBQUtILDZEQUFVLEdBQXRCRyxPQUFPO0lBRWYsTUFBTSw2RUFDSEMsQ0FBRztRQUNGQyxLQUFLLEVBQUUsQ0FBQztZQUFDQyxLQUFLLEVBQUUsQ0FBSztZQUFFQyxlQUFlLEVBQUUsQ0FBUztRQUFDLENBQUM7UUFDbkRDLFNBQVMsRUFBQyxDQUErQjs7d0ZBRXhDSixDQUFHO2dCQUFDSSxTQUFTLEVBQUMsQ0FBYTtzR0FDekJULG1EQUFLO29CQUNKVSxHQUFHLEVBQUVQLE9BQU8sQ0FBQ1EsS0FBSztvQkFDbEJDLEdBQUcsRUFBRVQsT0FBTyxDQUFDVSxLQUFLO29CQUNsQk4sS0FBSyxFQUFDLENBQUs7b0JBQ1hPLE1BQU0sRUFBQyxDQUFLO29CQUNaTCxTQUFTLEVBQUMsQ0FBWTs7Ozs7Ozs7Ozs7d0ZBR3pCSixDQUFHO2dCQUFDSSxTQUFTLEVBQUMsQ0FBd0M7O2dHQUNwREosQ0FBRzt3QkFBQ0ksU0FBUyxFQUFDLENBQXlGO2tDQUNyR04sT0FBTyxDQUFDVSxLQUFLOzs7Ozs7Z0dBRWZSLENBQUc7d0JBQUNJLFNBQVMsRUFBQyxDQUF3Qjs7NEJBQUMsQ0FBQzs0QkFBQ04sT0FBTyxDQUFDWSxLQUFLOzs7Ozs7Ozs7Ozs7O3dGQUV4REMsQ0FBTTtnQkFDTEMsT0FBTyxFQUFFLFFBQ2pCLEdBRHVCLENBQUM7b0JBQ2RiLE9BQU87Z0JBQ1QsQ0FBQztnQkFDREssU0FBUyxFQUFDLENBQTZFOzBCQUN4RixDQUVEOzs7Ozs7Ozs7Ozs7QUFHTixDQUFDO0dBakNLUCxXQUFXOztRQUNLRCx5REFBVTs7O0tBRDFCQyxXQUFXO0FBbUNqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3NjcmVlbnMvaG9tZS9Qcm9kdWN0SXRlbS50c3g/OTQ2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUFjdGlvbnMnO1xuXG5jb25zdCBQcm9kdWN0SXRlbTogRkM8eyBwcm9kdWN0OiBhbnkgfT4gPSAoeyBwcm9kdWN0IH0pID0+IHtcbiAgY29uc3QgeyBhZGRJdGVtIH0gPSB1c2VBY3Rpb25zKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17eyB3aWR0aDogJzQ4JScsIGJhY2tncm91bmRDb2xvcjogJyNFNUYwRUEnIH19XG4gICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIG1iLTUgcC0zIHNoYWRvdy1zbVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2V9XG4gICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgIHdpZHRoPVwiMTAwXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxNDNcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGxcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtdC0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi05MDAgZm9udC1tZWRpdW0gdGV4dC1zbSBvdmVyZmxvdy1oaWRkZW4gdGV4dC1lbGxpcHNpcyB3aGl0ZXNwYWNlLW5vd3JhcCBtci01XCI+XG4gICAgICAgICAge3Byb2R1Y3QudGl0bGV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmVlbi02MDBcIj4ke3Byb2R1Y3QucHJpY2V9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGFkZEl0ZW0oKTtcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBtdC0zIGJnLXdoaXRlIHJvdW5kZWQteGwgdy0zLzQgbXgtYXV0byBibG9jayBwLTEgaG92ZXI6YmctZ3JlZW4tMjAwXCJcbiAgICAgID5cbiAgICAgICAgQWRkIHRvIGNhcnRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEl0ZW07XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VBY3Rpb25zIiwiUHJvZHVjdEl0ZW0iLCJwcm9kdWN0IiwiYWRkSXRlbSIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwiaGVpZ2h0IiwicHJpY2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/screens/home/ProductItem.tsx\n");

/***/ })

});