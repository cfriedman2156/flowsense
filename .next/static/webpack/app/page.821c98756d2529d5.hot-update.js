"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/navbar.jsx":
/*!***********************************!*\
  !*** ./src/components/navbar.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navbar: function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ Navbar auto */ \n\n\nfunction Navbar() {\n    const scrollToSection = function(e, sectionId) {\n        let offset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -40;\n        e.preventDefault();\n        const section = document.getElementById(sectionId);\n        if (section) {\n            const topPos = section.getBoundingClientRect().top + window.scrollY + offset;\n            window.scrollTo({\n                top: topPos,\n                behavior: \"smooth\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex justify-between items-center mb-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center text-2xl font-bold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: \"/assets/logo.png\",\n                        alt: \"FlowSense Logo\",\n                        width: 70,\n                        height: 70,\n                        className: \"object-contain mx-3\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/navbar.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-thin\",\n                                children: \"FlowSense\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/navbar.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-black -mt-2\",\n                                children: \"Solutions\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/navbar.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/navbar.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/navbar.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex space-x-6 text-sm mr-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#services\",\n                                    onClick: (e)=>scrollToSection(e, \"services-section\", -150),\n                                    className: \"hover:text-blue-400\",\n                                    children: \"Services\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/navbar.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/navbar.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#case-studies\",\n                                    onClick: (e)=>scrollToSection(e, \"case-studies-section\", 50),\n                                    className: \"hover:text-blue-400\",\n                                    children: \"Case Studies\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/navbar.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/navbar.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#testimonials\",\n                                    onClick: (e)=>scrollToSection(e, \"testimonials-section\", -60),\n                                    className: \"hover:text-blue-400\",\n                                    children: \"Testimonials\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/navbar.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/navbar.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#contact\",\n                                    onClick: (e)=>scrollToSection(e, \"contact-section\", 20),\n                                    className: \"hover:text-blue-400\",\n                                    children: \"Contact Us\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/navbar.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/navbar.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/navbar.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#get-started\",\n                        onClick: (e)=>scrollToSection(e, \"get-started-section\", -20),\n                        className: \"bg-blue-600 px-5 py-3 rounded-lg text-sm hover:bg-blue-500\",\n                        children: \"Get Started\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/navbar.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/navbar.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/navbar.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL25hdmJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTBCO0FBQ0s7QUFFeEIsU0FBU0U7SUFDZCxNQUFNQyxrQkFBa0IsU0FBQ0MsR0FBR0M7WUFBV0MsMEVBQVMsQ0FBQztRQUMvQ0YsRUFBRUcsY0FBYztRQUNoQixNQUFNQyxVQUFVQyxTQUFTQyxjQUFjLENBQUNMO1FBRXhDLElBQUlHLFNBQVM7WUFDWCxNQUFNRyxTQUFTSCxRQUFRSSxxQkFBcUIsR0FBR0MsR0FBRyxHQUFHQyxPQUFPQyxPQUFPLEdBQUdUO1lBQ3RFUSxPQUFPRSxRQUFRLENBQUM7Z0JBQUVILEtBQUtGO2dCQUFRTSxVQUFVO1lBQVM7UUFDcEQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFFYiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDbEIsa0RBQUtBO3dCQUNKb0IsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkwsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDQzs7MENBQ0MsOERBQUNLO2dDQUFHTixXQUFVOzBDQUFZOzs7Ozs7MENBQzFCLDhEQUFDTTtnQ0FBR04sV0FBVTswQ0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLckMsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ087d0JBQUdQLFdBQVU7OzBDQUNaLDhEQUFDUTswQ0FDQyw0RUFBQ0M7b0NBQ0NDLE1BQUs7b0NBQ0xDLFNBQVMsQ0FBQzFCLElBQU1ELGdCQUFnQkMsR0FBRyxvQkFBb0IsQ0FBQztvQ0FDeERlLFdBQVU7OENBQ1g7Ozs7Ozs7Ozs7OzBDQUlILDhEQUFDUTswQ0FDQyw0RUFBQ0M7b0NBQ0NDLE1BQUs7b0NBQ0xDLFNBQVMsQ0FBQzFCLElBQU1ELGdCQUFnQkMsR0FBRyx3QkFBd0I7b0NBQzNEZSxXQUFVOzhDQUNYOzs7Ozs7Ozs7OzswQ0FJSCw4REFBQ1E7MENBQ0MsNEVBQUNDO29DQUNDQyxNQUFLO29DQUNMQyxTQUFTLENBQUMxQixJQUFNRCxnQkFBZ0JDLEdBQUcsd0JBQXdCLENBQUM7b0NBQzVEZSxXQUFVOzhDQUNYOzs7Ozs7Ozs7OzswQ0FJSCw4REFBQ1E7MENBQ0MsNEVBQUNDO29DQUNDQyxNQUFLO29DQUNMQyxTQUFTLENBQUMxQixJQUFNRCxnQkFBZ0JDLEdBQUcsbUJBQW1CO29DQUN0RGUsV0FBVTs4Q0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS0wsOERBQUNTO3dCQUNDQyxNQUFLO3dCQUNMQyxTQUFTLENBQUMxQixJQUFNRCxnQkFBZ0JDLEdBQUcsdUJBQXVCLENBQUM7d0JBQzNEZSxXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtLQTlFZ0JqQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanN4PzY0Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICBjb25zdCBzY3JvbGxUb1NlY3Rpb24gPSAoZSwgc2VjdGlvbklkLCBvZmZzZXQgPSAtNDApID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb25JZCk7XG5cbiAgICBpZiAoc2VjdGlvbikge1xuICAgICAgY29uc3QgdG9wUG9zID0gc2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWSArIG9mZnNldDtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogdG9wUG9zLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMTZcIj5cbiAgICAgIHsvKiBMb2dvIFNlY3Rpb24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtMnhsIGZvbnQtYm9sZFwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9XCIvYXNzZXRzL2xvZ28ucG5nXCJcbiAgICAgICAgICBhbHQ9XCJGbG93U2Vuc2UgTG9nb1wiXG4gICAgICAgICAgd2lkdGg9ezcwfVxuICAgICAgICAgIGhlaWdodD17NzB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvbnRhaW4gbXgtM1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtdGhpblwiPkZsb3dTZW5zZTwvaDE+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYmxhY2sgLW10LTJcIj5Tb2x1dGlvbnM8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTmF2aWdhdGlvbiBJdGVtcyBhbmQgR2V0IFN0YXJ0ZWQgQnV0dG9uICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTYgdGV4dC1zbSBtci04XCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cIiNzZXJ2aWNlc1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzY3JvbGxUb1NlY3Rpb24oZSwgJ3NlcnZpY2VzLXNlY3Rpb24nLCAtMTUwKX0gLy8gQWRqdXN0IG9mZnNldCBhcyBuZWVkZWRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ibHVlLTQwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNlcnZpY2VzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiI2Nhc2Utc3R1ZGllc1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzY3JvbGxUb1NlY3Rpb24oZSwgJ2Nhc2Utc3R1ZGllcy1zZWN0aW9uJywgNTApfSAvLyBBZGp1c3Qgb2Zmc2V0IGFzIG5lZWRlZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJsdWUtNDAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2FzZSBTdHVkaWVzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiI3Rlc3RpbW9uaWFsc1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzY3JvbGxUb1NlY3Rpb24oZSwgJ3Rlc3RpbW9uaWFscy1zZWN0aW9uJywgLTYwKX0gLy8gQWRqdXN0IG9mZnNldCBhcyBuZWVkZWRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ibHVlLTQwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFRlc3RpbW9uaWFsc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cIiNjb250YWN0XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNjcm9sbFRvU2VjdGlvbihlLCAnY29udGFjdC1zZWN0aW9uJywgMjApfSAvLyBBZGp1c3Qgb2Zmc2V0IGFzIG5lZWRlZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJsdWUtNDAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29udGFjdCBVc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cIiNnZXQtc3RhcnRlZFwiXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHNjcm9sbFRvU2VjdGlvbihlLCAnZ2V0LXN0YXJ0ZWQtc2VjdGlvbicsIC0yMCl9IC8vIEFkanVzdCBvZmZzZXQgYXMgbmVlZGVkXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS02MDAgcHgtNSBweS0zIHJvdW5kZWQtbGcgdGV4dC1zbSBob3ZlcjpiZy1ibHVlLTUwMFwiXG4gICAgICAgID5cbiAgICAgICAgICBHZXQgU3RhcnRlZFxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiTmF2YmFyIiwic2Nyb2xsVG9TZWN0aW9uIiwiZSIsInNlY3Rpb25JZCIsIm9mZnNldCIsInByZXZlbnREZWZhdWx0Iiwic2VjdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b3BQb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJ3aW5kb3ciLCJzY3JvbGxZIiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDEiLCJ1bCIsImxpIiwiYSIsImhyZWYiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/navbar.jsx\n"));

/***/ })

});