"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./app/store/product/product.api.ts":
/*!******************************************!*\
  !*** ./app/store/product/product.api.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productApi\": function() { return /* binding */ productApi; },\n/* harmony export */   \"useGetProductsQuery\": function() { return /* binding */ useGetProductsQuery; },\n/* harmony export */   \"useGetCategoriesQuery\": function() { return /* binding */ useGetCategoriesQuery; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar productApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: 'api/products',\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: 'https://fakestoreapi.com/'\n    }),\n    endpoints: function(build) {\n        return {\n            getProducts: build.query({\n                query: function() {\n                    var limit = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;\n                    return \"products?limit=\".concat(limit);\n                }\n            }),\n            getProductsByCategory: build.query({\n                query: function() {\n                    var limit = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;\n                    return \"products?limit=\".concat(limit);\n                }\n            }),\n            getCategories: build.query({\n                query: function() {\n                    return \"products/categories\";\n                }\n            })\n        };\n    }\n});\nvar useGetProductsQuery = productApi.useGetProductsQuery, useGetCategoriesQuery = productApi.useGetCategoriesQuery;\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvcHJvZHVjdC9wcm9kdWN0LmFwaS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RTtBQUdqRSxHQUFLLENBQUNFLFVBQVUsR0FBR0YsdUVBQVMsQ0FBQyxDQUFDO0lBQ25DRyxXQUFXLEVBQUUsQ0FBYztJQUMzQkMsU0FBUyxFQUFFSCw0RUFBYyxDQUFDLENBQUM7UUFBQ0ksT0FBTyxFQUFFLENBQTJCO0lBQUMsQ0FBQztJQUNsRUMsU0FBUyxFQUFFLFFBQVEsQ0FBUEMsS0FBSztRQUFLLE1BQ3RCLENBRHVCLENBQUM7WUFDdEJDLFdBQVcsRUFBRUQsS0FBSyxDQUFDRSxLQUFLLENBQXFCLENBQUM7Z0JBQzVDQSxLQUFLLEVBQUUsUUFBUTt3QkFBUEMsS0FBSyxvRUFBRyxFQUFFO29CQUFLLE1BQU0sQ0FBTCxDQUFlLGlCQUFRLE9BQU5BLEtBQUs7O1lBQ2hELENBQUM7WUFDREMscUJBQXFCLEVBQUVKLEtBQUssQ0FBQ0UsS0FBSyxDQUFxQixDQUFDO2dCQUN0REEsS0FBSyxFQUFFLFFBQVE7d0JBQVBDLEtBQUssb0VBQUcsRUFBRTtvQkFBSyxNQUFNLENBQUwsQ0FBZSxpQkFBUSxPQUFOQSxLQUFLOztZQUNoRCxDQUFDO1lBQ0RFLGFBQWEsRUFBRUwsS0FBSyxDQUFDRSxLQUFLLENBQW1CLENBQUM7Z0JBQzVDQSxLQUFLLEVBQUUsUUFBUTtvQkFBRCxNQUFNLENBQU4sQ0FBbUI7O1lBQ25DLENBQUM7UUFDSCxDQUFDOztBQUNILENBQUM7QUFFTSxHQUFLLENBQUdJLG1CQUFtQixHQUE0QlgsVUFBVSxDQUF6RFcsbUJBQW1CLEVBQUVDLHFCQUFxQixHQUFLWixVQUFVLENBQXBDWSxxQkFBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3N0b3JlL3Byb2R1Y3QvcHJvZHVjdC5hcGkudHM/MmIwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdCc7XHJcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi9wcm9kdWN0LnR5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0QXBpID0gY3JlYXRlQXBpKHtcclxuICByZWR1Y2VyUGF0aDogJ2FwaS9wcm9kdWN0cycsIC8v0L/Rg9GC0Ywg0LTQviDRgNC10LTRjNGO0YHQtdGA0LBcclxuICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHsgYmFzZVVybDogJ2h0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS8nIH0pLCAvLyDQsdCw0LfQvtCy0YvQuSDRg9GA0Lsg0LTQu9GPINC30LDQv9GA0L7RgdC+0LIg0L/QviDQsNC/0LhcclxuICBlbmRwb2ludHM6IChidWlsZCkgPT4gKHtcclxuICAgIGdldFByb2R1Y3RzOiBidWlsZC5xdWVyeTxJUHJvZHVjdFtdLCBudW1iZXI+KHtcclxuICAgICAgcXVlcnk6IChsaW1pdCA9IDEwKSA9PiBgcHJvZHVjdHM/bGltaXQ9JHtsaW1pdH1gLFxyXG4gICAgfSksXHJcbiAgICBnZXRQcm9kdWN0c0J5Q2F0ZWdvcnk6IGJ1aWxkLnF1ZXJ5PElQcm9kdWN0W10sIG51bWJlcj4oe1xyXG4gICAgICBxdWVyeTogKGxpbWl0ID0gMTApID0+IGBwcm9kdWN0cz9saW1pdD0ke2xpbWl0fWAsXHJcbiAgICB9KSxcclxuICAgIGdldENhdGVnb3JpZXM6IGJ1aWxkLnF1ZXJ5PHN0cmluZ1tdLCBzdHJpbmc+KHtcclxuICAgICAgcXVlcnk6ICgpID0+IGBwcm9kdWN0cy9jYXRlZ29yaWVzYCxcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IHVzZUdldFByb2R1Y3RzUXVlcnksIHVzZUdldENhdGVnb3JpZXNRdWVyeSB9ID0gcHJvZHVjdEFwaTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUFwaSIsImZldGNoQmFzZVF1ZXJ5IiwicHJvZHVjdEFwaSIsInJlZHVjZXJQYXRoIiwiYmFzZVF1ZXJ5IiwiYmFzZVVybCIsImVuZHBvaW50cyIsImJ1aWxkIiwiZ2V0UHJvZHVjdHMiLCJxdWVyeSIsImxpbWl0IiwiZ2V0UHJvZHVjdHNCeUNhdGVnb3J5IiwiZ2V0Q2F0ZWdvcmllcyIsInVzZUdldFByb2R1Y3RzUXVlcnkiLCJ1c2VHZXRDYXRlZ29yaWVzUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/store/product/product.api.ts\n");

/***/ })

});