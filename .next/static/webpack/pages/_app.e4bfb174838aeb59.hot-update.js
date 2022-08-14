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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productApi\": function() { return /* binding */ productApi; },\n/* harmony export */   \"useGetProductsQuery\": function() { return /* binding */ useGetProductsQuery; },\n/* harmony export */   \"useGetCategoriesQuery\": function() { return /* binding */ useGetCategoriesQuery; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar productApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: 'api/products',\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: 'https://fakestoreapi.com/'\n    }),\n    endpoints: function(build) {\n        return {\n            getProducts: build.query({\n                query: function() {\n                    var limit = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;\n                    return \"products?limit=\".concat(limit);\n                }\n            }),\n            getProductsByCategory: build.query({\n                query: function(category) {\n                    return \"products/category/\".concat(category);\n                }\n            }),\n            getCategories: build.query({\n                query: function() {\n                    return \"products/categories\";\n                }\n            })\n        };\n    }\n});\nvar useGetProductsQuery = productApi.useGetProductsQuery, useGetCategoriesQuery = productApi.useGetCategoriesQuery;\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvcHJvZHVjdC9wcm9kdWN0LmFwaS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RTtBQUdqRSxHQUFLLENBQUNFLFVBQVUsR0FBR0YsdUVBQVMsQ0FBQyxDQUFDO0lBQ25DRyxXQUFXLEVBQUUsQ0FBYztJQUMzQkMsU0FBUyxFQUFFSCw0RUFBYyxDQUFDLENBQUM7UUFBQ0ksT0FBTyxFQUFFLENBQTJCO0lBQUMsQ0FBQztJQUNsRUMsU0FBUyxFQUFFLFFBQVEsQ0FBUEMsS0FBSztRQUFLLE1BQ3RCLENBRHVCLENBQUM7WUFDdEJDLFdBQVcsRUFBRUQsS0FBSyxDQUFDRSxLQUFLLENBQXFCLENBQUM7Z0JBQzVDQSxLQUFLLEVBQUUsUUFBUTt3QkFBUEMsS0FBSyxvRUFBRyxFQUFFO29CQUFLLE1BQU0sQ0FBTCxDQUFlLGlCQUFRLE9BQU5BLEtBQUs7O1lBQ2hELENBQUM7WUFDREMscUJBQXFCLEVBQUVKLEtBQUssQ0FBQ0UsS0FBSyxDQUFxQixDQUFDO2dCQUN0REEsS0FBSyxFQUFFLFFBQVEsQ0FBUEcsUUFBUTtvQkFBSyxNQUFNLENBQUwsQ0FBa0Isb0JBQVcsT0FBVEEsUUFBUTs7WUFDcEQsQ0FBQztZQUNEQyxhQUFhLEVBQUVOLEtBQUssQ0FBQ0UsS0FBSyxDQUFtQixDQUFDO2dCQUM1Q0EsS0FBSyxFQUFFLFFBQVE7b0JBQUQsTUFBTSxDQUFOLENBQW1COztZQUNuQyxDQUFDO1FBQ0gsQ0FBQzs7QUFDSCxDQUFDO0FBRU0sR0FBSyxDQUFHSyxtQkFBbUIsR0FBNEJaLFVBQVUsQ0FBekRZLG1CQUFtQixFQUFFQyxxQkFBcUIsR0FBS2IsVUFBVSxDQUFwQ2EscUJBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9zdG9yZS9wcm9kdWN0L3Byb2R1Y3QuYXBpLnRzPzJiMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnO1xyXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdC50eXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdEFwaSA9IGNyZWF0ZUFwaSh7XHJcbiAgcmVkdWNlclBhdGg6ICdhcGkvcHJvZHVjdHMnLCAvL9C/0YPRgtGMINC00L4g0YDQtdC00YzRjtGB0LXRgNCwXHJcbiAgYmFzZVF1ZXJ5OiBmZXRjaEJhc2VRdWVyeSh7IGJhc2VVcmw6ICdodHRwczovL2Zha2VzdG9yZWFwaS5jb20vJyB9KSwgLy8g0LHQsNC30L7QstGL0Lkg0YPRgNC7INC00LvRjyDQt9Cw0L/RgNC+0YHQvtCyINC/0L4g0LDQv9C4XHJcbiAgZW5kcG9pbnRzOiAoYnVpbGQpID0+ICh7XHJcbiAgICBnZXRQcm9kdWN0czogYnVpbGQucXVlcnk8SVByb2R1Y3RbXSwgbnVtYmVyPih7XHJcbiAgICAgIHF1ZXJ5OiAobGltaXQgPSAxMCkgPT4gYHByb2R1Y3RzP2xpbWl0PSR7bGltaXR9YCxcclxuICAgIH0pLFxyXG4gICAgZ2V0UHJvZHVjdHNCeUNhdGVnb3J5OiBidWlsZC5xdWVyeTxJUHJvZHVjdFtdLCBzdHJpbmc+KHtcclxuICAgICAgcXVlcnk6IChjYXRlZ29yeSkgPT4gYHByb2R1Y3RzL2NhdGVnb3J5LyR7Y2F0ZWdvcnl9YCxcclxuICAgIH0pLFxyXG4gICAgZ2V0Q2F0ZWdvcmllczogYnVpbGQucXVlcnk8c3RyaW5nW10sIHN0cmluZz4oe1xyXG4gICAgICBxdWVyeTogKCkgPT4gYHByb2R1Y3RzL2NhdGVnb3JpZXNgLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgdXNlR2V0UHJvZHVjdHNRdWVyeSwgdXNlR2V0Q2F0ZWdvcmllc1F1ZXJ5IH0gPSBwcm9kdWN0QXBpO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJwcm9kdWN0QXBpIiwicmVkdWNlclBhdGgiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwiZW5kcG9pbnRzIiwiYnVpbGQiLCJnZXRQcm9kdWN0cyIsInF1ZXJ5IiwibGltaXQiLCJnZXRQcm9kdWN0c0J5Q2F0ZWdvcnkiLCJjYXRlZ29yeSIsImdldENhdGVnb3JpZXMiLCJ1c2VHZXRQcm9kdWN0c1F1ZXJ5IiwidXNlR2V0Q2F0ZWdvcmllc1F1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/store/product/product.api.ts\n");

/***/ })

});