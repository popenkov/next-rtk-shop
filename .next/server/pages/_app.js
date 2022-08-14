/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./app/store/cart/cart.slice.ts":
/*!**************************************!*\
  !*** ./app/store/cart/cart.slice.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cartSlice\": () => (/* binding */ cartSlice),\n/* harmony export */   \"cartReducer\": () => (/* binding */ cartReducer),\n/* harmony export */   \"cartActions\": () => (/* binding */ cartActions)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = [];\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'cart',\n    initialState,\n    reducers: {\n        addItem: (state, action)=>{\n            state.push(action.payload);\n        },\n        removeItem: (state, action)=>{\n            return state.filter((item)=>{\n                return item.id != action.payload.id;\n            });\n        }\n    }\n});\nconst cartReducer = cartSlice.reducer;\nconst cartActions = cartSlice.actions;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvY2FydC9jYXJ0LnNsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZEO0FBRzdELEtBQUssQ0FBQ0MsWUFBWSxHQUFlLENBQUMsQ0FBQztBQUU1QixLQUFLLENBQUNDLFNBQVMsR0FBR0YsNkRBQVcsQ0FBQyxDQUFDO0lBQ3BDRyxJQUFJLEVBQUUsQ0FBTTtJQUNaRixZQUFZO0lBQ1pHLFFBQVEsRUFBRSxDQUFDO1FBQ1RDLE9BQU8sR0FBR0MsS0FBSyxFQUFFQyxNQUErQixHQUFLLENBQUM7WUFDcERELEtBQUssQ0FBQ0UsSUFBSSxDQUFDRCxNQUFNLENBQUNFLE9BQU87UUFDM0IsQ0FBQztRQUNEQyxVQUFVLEdBQUdKLEtBQUssRUFBRUMsTUFBcUMsR0FBSyxDQUFDO1lBQzdELE1BQU0sQ0FBQ0QsS0FBSyxDQUFDSyxNQUFNLEVBQUVDLElBQUksR0FBSyxDQUFDO2dCQUM3QixNQUFNLENBQUNBLElBQUksQ0FBQ0MsRUFBRSxJQUFJTixNQUFNLENBQUNFLE9BQU8sQ0FBQ0ksRUFBRTtZQUNyQyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRU0sS0FBSyxDQUFDQyxXQUFXLEdBQUdaLFNBQVMsQ0FBQ2EsT0FBTztBQUNyQyxLQUFLLENBQUNDLFdBQVcsR0FBR2QsU0FBUyxDQUFDZSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkdXgtdG9vbGtpdC1jcmFzaC1jb3Vyc2UvLi9hcHAvc3RvcmUvY2FydC9jYXJ0LnNsaWNlLnRzPzQ3ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICcuLi9wcm9kdWN0L3Byb2R1Y3QudHlwZXMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBJUHJvZHVjdFtdID0gW107XHJcblxyXG5leHBvcnQgY29uc3QgY2FydFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdjYXJ0JyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGFkZEl0ZW06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPElQcm9kdWN0PikgPT4ge1xyXG4gICAgICBzdGF0ZS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVJdGVtOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IGlkOiBudW1iZXIgfT4pID0+IHtcclxuICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmlkICE9IGFjdGlvbi5wYXlsb2FkLmlkO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY2FydFJlZHVjZXIgPSBjYXJ0U2xpY2UucmVkdWNlcjtcclxuZXhwb3J0IGNvbnN0IGNhcnRBY3Rpb25zID0gY2FydFNsaWNlLmFjdGlvbnM7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImNhcnRTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZEl0ZW0iLCJzdGF0ZSIsImFjdGlvbiIsInB1c2giLCJwYXlsb2FkIiwicmVtb3ZlSXRlbSIsImZpbHRlciIsIml0ZW0iLCJpZCIsImNhcnRSZWR1Y2VyIiwicmVkdWNlciIsImNhcnRBY3Rpb25zIiwiYWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/store/cart/cart.slice.ts\n");

/***/ }),

/***/ "./app/store/product/product.api.ts":
/*!******************************************!*\
  !*** ./app/store/product/product.api.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productApi\": () => (/* binding */ productApi),\n/* harmony export */   \"useGetProductsQuery\": () => (/* binding */ useGetProductsQuery),\n/* harmony export */   \"useGetCategoriesQuery\": () => (/* binding */ useGetCategoriesQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst productApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: 'api/products',\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: 'https://fakestoreapi.com/'\n    }),\n    endpoints: (build)=>({\n            getProducts: build.query({\n                query: (limit = 10)=>`products?limit=${limit}`\n            }),\n            getProductsByCategory: build.query({\n                query: (category)=>`products/category/${category}`\n            }),\n            getCategories: build.query({\n                query: ()=>`products/categories`\n            })\n        })\n});\nconst { useGetProductsQuery , useGetCategoriesQuery  } = productApi;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvcHJvZHVjdC9wcm9kdWN0LmFwaS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RTtBQUdqRSxLQUFLLENBQUNFLFVBQVUsR0FBR0YsdUVBQVMsQ0FBQyxDQUFDO0lBQ25DRyxXQUFXLEVBQUUsQ0FBYztJQUMzQkMsU0FBUyxFQUFFSCw0RUFBYyxDQUFDLENBQUM7UUFBQ0ksT0FBTyxFQUFFLENBQTJCO0lBQUMsQ0FBQztJQUNsRUMsU0FBUyxHQUFHQyxLQUFLLElBQU0sQ0FBQztZQUN0QkMsV0FBVyxFQUFFRCxLQUFLLENBQUNFLEtBQUssQ0FBcUIsQ0FBQztnQkFDNUNBLEtBQUssR0FBR0MsS0FBSyxHQUFHLEVBQUUsSUFBTSxlQUFlLEVBQUVBLEtBQUs7WUFDaEQsQ0FBQztZQUNEQyxxQkFBcUIsRUFBRUosS0FBSyxDQUFDRSxLQUFLLENBQXFCLENBQUM7Z0JBQ3REQSxLQUFLLEdBQUdHLFFBQVEsSUFBTSxrQkFBa0IsRUFBRUEsUUFBUTtZQUNwRCxDQUFDO1lBQ0RDLGFBQWEsRUFBRU4sS0FBSyxDQUFDRSxLQUFLLENBQW1CLENBQUM7Z0JBQzVDQSxLQUFLLE9BQVMsbUJBQW1CO1lBQ25DLENBQUM7UUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVNLEtBQUssQ0FBQyxDQUFDLENBQUNLLG1CQUFtQixHQUFFQyxxQkFBcUIsRUFBQyxDQUFDLEdBQUdiLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWR1eC10b29sa2l0LWNyYXNoLWNvdXJzZS8uL2FwcC9zdG9yZS9wcm9kdWN0L3Byb2R1Y3QuYXBpLnRzPzJiMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnO1xyXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdC50eXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdEFwaSA9IGNyZWF0ZUFwaSh7XHJcbiAgcmVkdWNlclBhdGg6ICdhcGkvcHJvZHVjdHMnLCAvL9C/0YPRgtGMINC00L4g0YDQtdC00YzRjtGB0LXRgNCwXHJcbiAgYmFzZVF1ZXJ5OiBmZXRjaEJhc2VRdWVyeSh7IGJhc2VVcmw6ICdodHRwczovL2Zha2VzdG9yZWFwaS5jb20vJyB9KSwgLy8g0LHQsNC30L7QstGL0Lkg0YPRgNC7INC00LvRjyDQt9Cw0L/RgNC+0YHQvtCyINC/0L4g0LDQv9C4XHJcbiAgZW5kcG9pbnRzOiAoYnVpbGQpID0+ICh7XHJcbiAgICBnZXRQcm9kdWN0czogYnVpbGQucXVlcnk8SVByb2R1Y3RbXSwgbnVtYmVyPih7XHJcbiAgICAgIHF1ZXJ5OiAobGltaXQgPSAxMCkgPT4gYHByb2R1Y3RzP2xpbWl0PSR7bGltaXR9YCxcclxuICAgIH0pLFxyXG4gICAgZ2V0UHJvZHVjdHNCeUNhdGVnb3J5OiBidWlsZC5xdWVyeTxJUHJvZHVjdFtdLCBzdHJpbmc+KHtcclxuICAgICAgcXVlcnk6IChjYXRlZ29yeSkgPT4gYHByb2R1Y3RzL2NhdGVnb3J5LyR7Y2F0ZWdvcnl9YCxcclxuICAgIH0pLFxyXG4gICAgZ2V0Q2F0ZWdvcmllczogYnVpbGQucXVlcnk8c3RyaW5nW10sIHN0cmluZz4oe1xyXG4gICAgICBxdWVyeTogKCkgPT4gYHByb2R1Y3RzL2NhdGVnb3JpZXNgLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgdXNlR2V0UHJvZHVjdHNRdWVyeSwgdXNlR2V0Q2F0ZWdvcmllc1F1ZXJ5IH0gPSBwcm9kdWN0QXBpO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJwcm9kdWN0QXBpIiwicmVkdWNlclBhdGgiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwiZW5kcG9pbnRzIiwiYnVpbGQiLCJnZXRQcm9kdWN0cyIsInF1ZXJ5IiwibGltaXQiLCJnZXRQcm9kdWN0c0J5Q2F0ZWdvcnkiLCJjYXRlZ29yeSIsImdldENhdGVnb3JpZXMiLCJ1c2VHZXRQcm9kdWN0c1F1ZXJ5IiwidXNlR2V0Q2F0ZWdvcmllc1F1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/store/product/product.api.ts\n");

/***/ }),

/***/ "./app/store/store.ts":
/*!****************************!*\
  !*** ./app/store/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cart_cart_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart/cart.slice */ \"./app/store/cart/cart.slice.ts\");\n/* harmony import */ var _product_product_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/product.api */ \"./app/store/product/product.api.ts\");\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        [_product_product_api__WEBPACK_IMPORTED_MODULE_2__.productApi.reducerPath]: _product_product_api__WEBPACK_IMPORTED_MODULE_2__.productApi.reducer,\n        cart: _cart_cart_slice__WEBPACK_IMPORTED_MODULE_1__.cartReducer\n    },\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_product_product_api__WEBPACK_IMPORTED_MODULE_2__.productApi.middleware)\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUQ7QUFDRjtBQUNHO0FBRTNDLEtBQUssQ0FBQ0csS0FBSyxHQUFHSCxnRUFBYyxDQUFDLENBQUM7SUFDbkNJLE9BQU8sRUFBRSxDQUFDO1NBQ1BGLHdFQUFzQixHQUFHQSxvRUFBa0I7UUFDNUNJLElBQUksRUFBRUwseURBQVc7SUFDbkIsQ0FBQztJQUNETSxVQUFVLEdBQUdDLG9CQUFvQixHQUMvQkEsb0JBQW9CLEdBQUdDLE1BQU0sQ0FBQ1AsdUVBQXFCO0FBQ3ZELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWR1eC10b29sa2l0LWNyYXNoLWNvdXJzZS8uL2FwcC9zdG9yZS9zdG9yZS50cz82Y2NhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IGNhcnRSZWR1Y2VyIH0gZnJvbSAnLi9jYXJ0L2NhcnQuc2xpY2UnO1xyXG5pbXBvcnQgeyBwcm9kdWN0QXBpIH0gZnJvbSAnLi9wcm9kdWN0L3Byb2R1Y3QuYXBpJztcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7XHJcbiAgICBbcHJvZHVjdEFwaS5yZWR1Y2VyUGF0aF06IHByb2R1Y3RBcGkucmVkdWNlciwgLy/QvdCw0LfQstCw0L3QuNC1INGA0LXQtNGO0YHQtdGA0LA6INGB0LDQvCDRgNC10LTRjtGB0LXRgH0sXHJcbiAgICBjYXJ0OiBjYXJ0UmVkdWNlcixcclxuICB9LFxyXG4gIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT5cclxuICAgIGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KHByb2R1Y3RBcGkubWlkZGxld2FyZSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgVHlwZVJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjtcclxuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiY2FydFJlZHVjZXIiLCJwcm9kdWN0QXBpIiwic3RvcmUiLCJyZWR1Y2VyIiwicmVkdWNlclBhdGgiLCJjYXJ0IiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/store/store.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/store/store */ \"./app/store/store.ts\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-7 px-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n            store: _app_store_store__WEBPACK_IMPORTED_MODULE_3__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\react\\\\redux-toolkit-crash-course\\\\redux-toolkit-crash-course\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\projects\\\\react\\\\redux-toolkit-crash-course\\\\redux-toolkit-crash-course\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\projects\\\\react\\\\redux-toolkit-crash-course\\\\redux-toolkit-crash-course\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEI7QUFFUTtBQUNJO1NBRWpDRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxNQUFNLDZFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFXOzhGQUN2Qk4saURBQVE7WUFBQ0MsS0FBSyxFQUFFQSxtREFBSztrR0FDbkJFLFNBQVM7bUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWR1eC10b29sa2l0LWNyYXNoLWNvdXJzZS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9hcHAvc3RvcmUvc3RvcmUnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS03IHB4LTVcIj5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();