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

/***/ "(app-pages-browser)/./src/components/testimonial.jsx":
/*!****************************************!*\
  !*** ./src/components/testimonial.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Testimonial: function() { return /* binding */ Testimonial; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text */ \"(app-pages-browser)/./src/components/text.jsx\");\n/* harmony import */ var _public_clients_bright_path_logo_light_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/clients/bright-path/logo-light.svg */ \"(app-pages-browser)/./public/clients/bright-path/logo-light.svg\");\n/* harmony import */ var _public_clients_family_fund_logo_dark_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/clients/family-fund/logo-dark.svg */ \"(app-pages-browser)/./public/clients/family-fund/logo-dark.svg\");\n/* harmony import */ var _public_clients_green_life_logo_dark_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/clients/green-life/logo-dark.svg */ \"(app-pages-browser)/./public/clients/green-life/logo-dark.svg\");\n/* __next_internal_client_entry_do_not_use__ Testimonial auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Testimonial() {\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [fade, setFade] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const testimonials = [\n        {\n            logo: _public_clients_bright_path_logo_light_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            quote: \"“Flow Sense Solutions exceeded our expectations with their strategic insight and attention to detail. The team’s expertise helped streamline our processes and provided actionable solutions that led to measurable improvements. Their collaborative approach made it easy to implement changes effectively. Highly recommend Flow Sense Solutions for anyone looking to elevate their business operations.”\",\n            name: \"Judith Black\",\n            title: \"CEO of Tuple\"\n        },\n        {\n            logo: _public_clients_family_fund_logo_dark_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            quote: \"“Working with Flow Sense Solutions was a transformative experience. Their team quickly identified key areas for growth and offered tailored strategies that were both innovative and practical. They were responsive, professional, and committed to our success every step of the way. We highly recommend Flow Sense Solutions for businesses seeking impactful and sustainable improvements.”\",\n            name: \"Joseph Rodriguez\",\n            title: \"CEO of Reform\"\n        },\n        {\n            logo: \"https://tailwindui.com/plus/img/logos/savvy-logo-gray-900.svg\",\n            quote: \"“The insights provided by Flow Sense Solutions were instrumental in taking our company to the next level. Their deep understanding of our industry and proactive approach enabled us to make data-driven decisions with confidence. The team is exceptionally knowledgeable and easy to work with.”\",\n            name: \"Emily Davis\",\n            title: \"CEO of Savvy\"\n        }\n    ];\n    const handleNext = ()=>{\n        setFade(false);\n        setTimeout(()=>{\n            setCurrentIndex((prevIndex)=>(prevIndex + 1) % testimonials.length);\n            setFade(true);\n        }, 300);\n    };\n    const handlePrevious = ()=>{\n        setFade(false);\n        setTimeout(()=>{\n            setCurrentIndex((prevIndex)=>(prevIndex - 1 + testimonials.length) % testimonials.length);\n            setFade(true);\n        }, 300);\n    };\n    const currentTestimonial = testimonials[currentIndex];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"relative bg-white py-18 sm:py-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-32\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_text__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                    as: \"h3\",\n                    className: \"mb-20 font-semibold\",\n                    children: \"What clients say about us\"\n                }, void 0, false, {\n                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-7xl px-6 lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto max-w-2xl  lg:flex lg:justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"transition-opacity duration-300 rounded-4xl bg-black text-white p-10 \".concat(fade ? \"opacity-100\" : \"opacity-0\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: \"Logo\",\n                                src: currentTestimonial.logo,\n                                className: \"h-12 self-start mb-6\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-lg\",\n                                            children: currentTestimonial.quote\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {\n                                        className: \"mt-10\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"font-semibold\",\n                                                children: currentTestimonial.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-gray-400\",\n                                                children: currentTestimonial.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handlePrevious,\n                className: \"absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 transition\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"sr-only\",\n                        children: \"Previous testimonial\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        className: \"h-5 w-5\",\n                        viewBox: \"0 0 20 20\",\n                        fill: \"currentColor\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fillRule: \"evenodd\",\n                            d: \"M10 2a1 1 0 01.707 1.707L4.414 10l6.293 6.293A1 1 0 0110 18a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7A1 1 0 0110 2z\",\n                            clipRule: \"evenodd\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleNext,\n                className: \"absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 transition\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"sr-only\",\n                        children: \"Next testimonial\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        className: \"h-5 w-5\",\n                        viewBox: \"0 0 20 20\",\n                        fill: \"currentColor\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fillRule: \"evenodd\",\n                            d: \"M10 18a1 1 0 01-.707-1.707L15.586 10l-6.293-6.293A1 1 0 0110.707 2.293l7 7a1 1 0 010 1.414l-7 7A1 1 0 0110 18z\",\n                            clipRule: \"evenodd\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(Testimonial, \"MZlqU2HE5WCs1mT1gyXkkGcoC1g=\");\n_c = Testimonial;\nvar _c;\n$RefreshReg$(_c, \"Testimonial\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Rlc3RpbW9uaWFsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ0E7QUFDMkM7QUFDRDtBQUNGO0FBRWxFLFNBQVNLOztJQUNkLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNVSxlQUFlO1FBQ25CO1lBQ0VDLE1BQU1ULGtGQUFjQTtZQUNwQlUsT0FDRTtZQUNGQyxNQUFNO1lBQ05DLE9BQU87UUFDVDtRQUNBO1lBQ0VILE1BQU1SLGlGQUFjQTtZQUNwQlMsT0FDRTtZQUNGQyxNQUFNO1lBQ05DLE9BQU87UUFDVDtRQUNBO1lBQ0VILE1BQU07WUFDTkMsT0FDRTtZQUNGQyxNQUFNO1lBQ05DLE9BQU87UUFDVDtLQUNEO0lBRUQsTUFBTUMsYUFBYTtRQUNqQk4sUUFBUTtRQUNSTyxXQUFXO1lBQ1RULGdCQUFnQixDQUFDVSxZQUFjLENBQUNBLFlBQVksS0FBS1AsYUFBYVEsTUFBTTtZQUNwRVQsUUFBUTtRQUNWLEdBQUc7SUFDTDtJQUVBLE1BQU1VLGlCQUFpQjtRQUNyQlYsUUFBUTtRQUNSTyxXQUFXO1lBQ1RULGdCQUNFLENBQUNVLFlBQWMsQ0FBQ0EsWUFBWSxJQUFJUCxhQUFhUSxNQUFNLElBQUlSLGFBQWFRLE1BQU07WUFFNUVULFFBQVE7UUFDVixHQUFHO0lBQ0w7SUFFQSxNQUFNVyxxQkFBcUJWLFlBQVksQ0FBQ0osYUFBYTtJQUVyRCxxQkFDRSw4REFBQ2U7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ3JCLDBDQUFPQTtvQkFBQ3VCLElBQUc7b0JBQUtGLFdBQVU7OEJBQXNCOzs7Ozs7Ozs7OzswQkFJbkQsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQ0NELFdBQVcsd0VBQTJHLE9BQW5DZCxPQUFPLGdCQUFnQjs7MENBRTFHLDhEQUFDaUI7Z0NBQ0NDLEtBQUk7Z0NBQ0pDLEtBQUtQLG1CQUFtQlQsSUFBSTtnQ0FDNUJXLFdBQVU7Ozs7OzswQ0FFWiw4REFBQ007O2tEQUNDLDhEQUFDQztrREFDQyw0RUFBQ0M7NENBQUVSLFdBQVU7c0RBQVdGLG1CQUFtQlIsS0FBSzs7Ozs7Ozs7Ozs7a0RBRWxELDhEQUFDbUI7d0NBQVdULFdBQVU7OzBEQUNwQiw4REFBQ0M7Z0RBQUlELFdBQVU7MERBQWlCRixtQkFBbUJQLElBQUk7Ozs7OzswREFDdkQsOERBQUNVO2dEQUFJRCxXQUFVOzBEQUFpQkYsbUJBQW1CTixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVFsRSw4REFBQ2tCO2dCQUNDQyxTQUFTZDtnQkFDVEcsV0FBVTs7a0NBRVYsOERBQUNZO3dCQUFLWixXQUFVO2tDQUFVOzs7Ozs7a0NBQzFCLDhEQUFDYTt3QkFDQ0MsT0FBTTt3QkFDTmQsV0FBVTt3QkFDVmUsU0FBUTt3QkFDUkMsTUFBSztrQ0FFTCw0RUFBQ0M7NEJBQ0NDLFVBQVM7NEJBQ1RDLEdBQUU7NEJBQ0ZDLFVBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1mLDhEQUFDVjtnQkFDQ0MsU0FBU2xCO2dCQUNUTyxXQUFVOztrQ0FFViw4REFBQ1k7d0JBQUtaLFdBQVU7a0NBQVU7Ozs7OztrQ0FDMUIsOERBQUNhO3dCQUNDQyxPQUFNO3dCQUNOZCxXQUFVO3dCQUNWZSxTQUFRO3dCQUNSQyxNQUFLO2tDQUVMLDRFQUFDQzs0QkFDQ0MsVUFBUzs0QkFDVEMsR0FBRTs0QkFDRkMsVUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckI7R0F2SGdCckM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVzdGltb25pYWwuanN4P2NiYjIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSBcIi4vdGV4dFwiO1xuaW1wb3J0IGxvZ29CcmlnaHRQYXRoIGZyb20gJy4uLy4uL3B1YmxpYy9jbGllbnRzL2JyaWdodC1wYXRoL2xvZ28tbGlnaHQuc3ZnJ1xuaW1wb3J0IGxvZ29GYW1pbHlGdW5kIGZyb20gJy4uLy4uL3B1YmxpYy9jbGllbnRzL2ZhbWlseS1mdW5kL2xvZ28tZGFyay5zdmcnXG5pbXBvcnQgbG9nb0dyZWVuTGlmZSBmcm9tICcuLi8uLi9wdWJsaWMvY2xpZW50cy9ncmVlbi1saWZlL2xvZ28tZGFyay5zdmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBUZXN0aW1vbmlhbCgpIHtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZmFkZSwgc2V0RmFkZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCB0ZXN0aW1vbmlhbHMgPSBbXG4gICAge1xuICAgICAgbG9nbzogbG9nb0JyaWdodFBhdGgsXG4gICAgICBxdW90ZTpcbiAgICAgICAgXCLigJxGbG93IFNlbnNlIFNvbHV0aW9ucyBleGNlZWRlZCBvdXIgZXhwZWN0YXRpb25zIHdpdGggdGhlaXIgc3RyYXRlZ2ljIGluc2lnaHQgYW5kIGF0dGVudGlvbiB0byBkZXRhaWwuIFRoZSB0ZWFt4oCZcyBleHBlcnRpc2UgaGVscGVkIHN0cmVhbWxpbmUgb3VyIHByb2Nlc3NlcyBhbmQgcHJvdmlkZWQgYWN0aW9uYWJsZSBzb2x1dGlvbnMgdGhhdCBsZWQgdG8gbWVhc3VyYWJsZSBpbXByb3ZlbWVudHMuIFRoZWlyIGNvbGxhYm9yYXRpdmUgYXBwcm9hY2ggbWFkZSBpdCBlYXN5IHRvIGltcGxlbWVudCBjaGFuZ2VzIGVmZmVjdGl2ZWx5LiBIaWdobHkgcmVjb21tZW5kIEZsb3cgU2Vuc2UgU29sdXRpb25zIGZvciBhbnlvbmUgbG9va2luZyB0byBlbGV2YXRlIHRoZWlyIGJ1c2luZXNzIG9wZXJhdGlvbnMu4oCdXCIsXG4gICAgICBuYW1lOiBcIkp1ZGl0aCBCbGFja1wiLFxuICAgICAgdGl0bGU6IFwiQ0VPIG9mIFR1cGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsb2dvOiBsb2dvRmFtaWx5RnVuZCxcbiAgICAgIHF1b3RlOlxuICAgICAgICBcIuKAnFdvcmtpbmcgd2l0aCBGbG93IFNlbnNlIFNvbHV0aW9ucyB3YXMgYSB0cmFuc2Zvcm1hdGl2ZSBleHBlcmllbmNlLiBUaGVpciB0ZWFtIHF1aWNrbHkgaWRlbnRpZmllZCBrZXkgYXJlYXMgZm9yIGdyb3d0aCBhbmQgb2ZmZXJlZCB0YWlsb3JlZCBzdHJhdGVnaWVzIHRoYXQgd2VyZSBib3RoIGlubm92YXRpdmUgYW5kIHByYWN0aWNhbC4gVGhleSB3ZXJlIHJlc3BvbnNpdmUsIHByb2Zlc3Npb25hbCwgYW5kIGNvbW1pdHRlZCB0byBvdXIgc3VjY2VzcyBldmVyeSBzdGVwIG9mIHRoZSB3YXkuIFdlIGhpZ2hseSByZWNvbW1lbmQgRmxvdyBTZW5zZSBTb2x1dGlvbnMgZm9yIGJ1c2luZXNzZXMgc2Vla2luZyBpbXBhY3RmdWwgYW5kIHN1c3RhaW5hYmxlIGltcHJvdmVtZW50cy7igJ1cIixcbiAgICAgIG5hbWU6IFwiSm9zZXBoIFJvZHJpZ3VlelwiLFxuICAgICAgdGl0bGU6IFwiQ0VPIG9mIFJlZm9ybVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbG9nbzogXCJodHRwczovL3RhaWx3aW5kdWkuY29tL3BsdXMvaW1nL2xvZ29zL3NhdnZ5LWxvZ28tZ3JheS05MDAuc3ZnXCIsXG4gICAgICBxdW90ZTpcbiAgICAgICAgXCLigJxUaGUgaW5zaWdodHMgcHJvdmlkZWQgYnkgRmxvdyBTZW5zZSBTb2x1dGlvbnMgd2VyZSBpbnN0cnVtZW50YWwgaW4gdGFraW5nIG91ciBjb21wYW55IHRvIHRoZSBuZXh0IGxldmVsLiBUaGVpciBkZWVwIHVuZGVyc3RhbmRpbmcgb2Ygb3VyIGluZHVzdHJ5IGFuZCBwcm9hY3RpdmUgYXBwcm9hY2ggZW5hYmxlZCB1cyB0byBtYWtlIGRhdGEtZHJpdmVuIGRlY2lzaW9ucyB3aXRoIGNvbmZpZGVuY2UuIFRoZSB0ZWFtIGlzIGV4Y2VwdGlvbmFsbHkga25vd2xlZGdlYWJsZSBhbmQgZWFzeSB0byB3b3JrIHdpdGgu4oCdXCIsXG4gICAgICBuYW1lOiBcIkVtaWx5IERhdmlzXCIsXG4gICAgICB0aXRsZTogXCJDRU8gb2YgU2F2dnlcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgc2V0RmFkZShmYWxzZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRDdXJyZW50SW5kZXgoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCArIDEpICUgdGVzdGltb25pYWxzLmxlbmd0aCk7XG4gICAgICBzZXRGYWRlKHRydWUpO1xuICAgIH0sIDMwMCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJldmlvdXMgPSAoKSA9PiB7XG4gICAgc2V0RmFkZShmYWxzZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRDdXJyZW50SW5kZXgoXG4gICAgICAgIChwcmV2SW5kZXgpID0+IChwcmV2SW5kZXggLSAxICsgdGVzdGltb25pYWxzLmxlbmd0aCkgJSB0ZXN0aW1vbmlhbHMubGVuZ3RoXG4gICAgICApO1xuICAgICAgc2V0RmFkZSh0cnVlKTtcbiAgICB9LCAzMDApO1xuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnRUZXN0aW1vbmlhbCA9IHRlc3RpbW9uaWFsc1tjdXJyZW50SW5kZXhdO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctd2hpdGUgcHktMTggc206cHktMjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMzJcIj5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIGNsYXNzTmFtZT1cIm1iLTIwIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICBXaGF0IGNsaWVudHMgc2F5IGFib3V0IHVzXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweC02IGxnOnB4LThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTJ4bCAgbGc6ZmxleCBsZzpqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDAgcm91bmRlZC00eGwgYmctYmxhY2sgdGV4dC13aGl0ZSBwLTEwICR7ZmFkZSA/IFwib3BhY2l0eS0xMDBcIiA6IFwib3BhY2l0eS0wXCJ9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxuICAgICAgICAgICAgICBzcmM9e2N1cnJlbnRUZXN0aW1vbmlhbC5sb2dvfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHNlbGYtc3RhcnQgbWItNlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgPGJsb2NrcXVvdGU+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPntjdXJyZW50VGVzdGltb25pYWwucXVvdGV9PC9wPlxuICAgICAgICAgICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cIm10LTEwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+e2N1cnJlbnRUZXN0aW1vbmlhbC5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPntjdXJyZW50VGVzdGltb25pYWwudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTGVmdCBBcnJvdyBCdXR0b24gKi99XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzfVxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTEwIHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgYmctZ3JheS05MDAgdGV4dC13aGl0ZSBwLTMgcm91bmRlZC1mdWxsIGhvdmVyOmJnLWdyYXktNzAwIHRyYW5zaXRpb25cIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UHJldmlvdXMgdGVzdGltb25pYWw8L3NwYW4+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgdy01XCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgZD1cIk0xMCAyYTEgMSAwIDAxLjcwNyAxLjcwN0w0LjQxNCAxMGw2LjI5MyA2LjI5M0ExIDEgMCAwMTEwIDE4YTEgMSAwIDAxLS43MDctLjI5M2wtNy03YTEgMSAwIDAxMC0xLjQxNGw3LTdBMSAxIDAgMDExMCAyelwiXG4gICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIHsvKiBSaWdodCBBcnJvdyBCdXR0b24gKi99XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTEwIHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgYmctZ3JheS05MDAgdGV4dC13aGl0ZSBwLTMgcm91bmRlZC1mdWxsIGhvdmVyOmJnLWdyYXktNzAwIHRyYW5zaXRpb25cIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TmV4dCB0ZXN0aW1vbmlhbDwvc3Bhbj5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTVcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICBkPVwiTTEwIDE4YTEgMSAwIDAxLS43MDctMS43MDdMMTUuNTg2IDEwbC02LjI5My02LjI5M0ExIDEgMCAwMTEwLjcwNyAyLjI5M2w3IDdhMSAxIDAgMDEwIDEuNDE0bC03IDdBMSAxIDAgMDExMCAxOHpcIlxuICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWRpbmciLCJsb2dvQnJpZ2h0UGF0aCIsImxvZ29GYW1pbHlGdW5kIiwibG9nb0dyZWVuTGlmZSIsIlRlc3RpbW9uaWFsIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwiZmFkZSIsInNldEZhZGUiLCJ0ZXN0aW1vbmlhbHMiLCJsb2dvIiwicXVvdGUiLCJuYW1lIiwidGl0bGUiLCJoYW5kbGVOZXh0Iiwic2V0VGltZW91dCIsInByZXZJbmRleCIsImxlbmd0aCIsImhhbmRsZVByZXZpb3VzIiwiY3VycmVudFRlc3RpbW9uaWFsIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImFzIiwiaW1nIiwiYWx0Iiwic3JjIiwiZmlndXJlIiwiYmxvY2txdW90ZSIsInAiLCJmaWdjYXB0aW9uIiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJmaWxsIiwicGF0aCIsImZpbGxSdWxlIiwiZCIsImNsaXBSdWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/testimonial.jsx\n"));

/***/ })

});