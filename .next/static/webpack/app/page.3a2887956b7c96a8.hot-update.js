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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Testimonial: function() { return /* binding */ Testimonial; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container */ \"(app-pages-browser)/./src/components/container.jsx\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text */ \"(app-pages-browser)/./src/components/text.jsx\");\n// components/Testimonial.jsx\n/* __next_internal_client_entry_do_not_use__ Testimonial auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Testimonial() {\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [fade, setFade] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // State for fade effect\n    const testimonials = [\n        {\n            logo: \"https://tailwindui.com/plus/img/logos/tuple-logo-gray-900.svg\",\n            quote: \"“Flow Sense Solutions exceeded our expectations with their strategic insight and attention to detail. The team’s expertise helped streamline our processes and provided actionable solutions that led to measurable improvements. Their collaborative approach made it easy to implement changes effectively. Highly recommend Flow Sense Solutions for anyone looking to elevate their business operations.”\",\n            name: \"Judith Black\",\n            title: \"CEO of Tuple\"\n        },\n        {\n            logo: \"https://tailwindui.com/plus/img/logos/reform-logo-gray-900.svg\",\n            quote: \"“Working with Flow Sense Solutions was a transformative experience. Their team quickly identified key areas for growth and offered tailored strategies that were both innovative and practical. They were responsive, professional, and committed to our success every step of the way. We highly recommend Flow Sense Solutions for businesses seeking impactful and sustainable improvements.”\",\n            name: \"Joseph Rodriguez\",\n            title: \"CEO of Reform\"\n        },\n        {\n            logo: \"https://tailwindui.com/plus/img/logos/savvy-logo-gray-900.svg\",\n            quote: \"“The insights provided by Flow Sense Solutions were instrumental in taking our company to the next level. Their deep understanding of our industry and proactive approach enabled us to make data-driven decisions with confidence. The team is exceptionally knowledgeable and easy to work with.”\",\n            name: \"Emily Davis\",\n            title: \"CEO of Savvy\"\n        }\n    ];\n    const handleNext = ()=>{\n        setFade(false); // Trigger fade-out\n        setTimeout(()=>{\n            setCurrentIndex((prevIndex)=>(prevIndex + 1) % testimonials.length);\n            setFade(true); // Trigger fade-in after changing the testimonial\n        }, 300); // Duration for fade-out effect\n    };\n    const handlePrevious = ()=>{\n        setFade(false); // Trigger fade-out\n        setTimeout(()=>{\n            setCurrentIndex((prevIndex)=>(prevIndex - 1 + testimonials.length) % testimonials.length);\n            setFade(true); // Trigger fade-in after changing the testimonial\n        }, 300); // Duration for fade-out effect\n    };\n    const currentTestimonial = testimonials[currentIndex];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"relative bg-white py-18 sm:py-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-32\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_text__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                    as: \"h3\",\n                    className: \"mb-20 font-semibold\",\n                    children: \"What clients say about us\"\n                }, void 0, false, {\n                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-7xl px-6 lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto max-w-2xl lg:max-w-none lg:flex lg:justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"lg:w-1/2 transition-opacity duration-300 \".concat(fade ? \"opacity-100\" : \"opacity-0\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: \"\",\n                                src: currentTestimonial.logo,\n                                className: \"h-12 self-start\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                className: \"mt-10 flex flex-auto flex-col justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n                                        className: \"text-lg/8 text-gray-900\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: currentTestimonial.quote\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {\n                                        className: \"mt-10 flex items-center gap-x-6\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-base\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"font-semibold text-gray-900\",\n                                                    children: currentTestimonial.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"mt-1 text-gray-500\",\n                                                    children: currentTestimonial.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handlePrevious,\n                className: \"absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 transition\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"sr-only\",\n                        children: \"Previous testimonial\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        className: \"h-5 w-5\",\n                        viewBox: \"0 0 20 20\",\n                        fill: \"currentColor\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fillRule: \"evenodd\",\n                            d: \"M10 2a1 1 0 01.707 1.707L4.414 10l6.293 6.293A1 1 0 0110 18a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7A1 1 0 0110 2z\",\n                            clipRule: \"evenodd\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleNext,\n                className: \"absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 transition\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"sr-only\",\n                        children: \"Next testimonial\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        className: \"h-5 w-5\",\n                        viewBox: \"0 0 20 20\",\n                        fill: \"currentColor\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fillRule: \"evenodd\",\n                            d: \"M10 18a1 1 0 01-.707-1.707L15.586 10l-6.293-6.293A1 1 0 0110.707 2.293l7 7a1 1 0 010 1.414l-7 7A1 1 0 0110 18z\",\n                            clipRule: \"evenodd\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(Testimonial, \"MZlqU2HE5WCs1mT1gyXkkGcoC1g=\");\n_c = Testimonial;\nvar _c;\n$RefreshReg$(_c, \"Testimonial\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Rlc3RpbW9uaWFsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2QkFBNkI7OztBQUlJO0FBQ087QUFDSTtBQUVyQyxTQUFTSTs7SUFDZCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNPLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUMsT0FBTyx3QkFBd0I7SUFFaEUsTUFBTVMsZUFBZTtRQUNuQjtZQUNFQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxPQUFPO1FBQ1Q7UUFDQTtZQUNFSCxNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxPQUFPO1FBQ1Q7UUFDQTtZQUNFSCxNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxPQUFPO1FBQ1Q7S0FDRDtJQUVELE1BQU1DLGFBQWE7UUFDakJOLFFBQVEsUUFBUSxtQkFBbUI7UUFDbkNPLFdBQVc7WUFDVFQsZ0JBQWdCLENBQUNVLFlBQWMsQ0FBQ0EsWUFBWSxLQUFLUCxhQUFhUSxNQUFNO1lBQ3BFVCxRQUFRLE9BQU8saURBQWlEO1FBQ2xFLEdBQUcsTUFBTSwrQkFBK0I7SUFDMUM7SUFFQSxNQUFNVSxpQkFBaUI7UUFDckJWLFFBQVEsUUFBUSxtQkFBbUI7UUFDbkNPLFdBQVc7WUFDVFQsZ0JBQWdCLENBQUNVLFlBQWMsQ0FBQ0EsWUFBWSxJQUFJUCxhQUFhUSxNQUFNLElBQUlSLGFBQWFRLE1BQU07WUFDMUZULFFBQVEsT0FBTyxpREFBaUQ7UUFDbEUsR0FBRyxNQUFNLCtCQUErQjtJQUMxQztJQUVBLE1BQU1XLHFCQUFxQlYsWUFBWSxDQUFDSixhQUFhO0lBRXJELHFCQUNFLDhEQUFDZTtRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDbkIsMENBQU9BO29CQUFDcUIsSUFBRztvQkFBS0YsV0FBVTs4QkFBc0I7Ozs7Ozs7Ozs7OzBCQUluRCw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBSUQsV0FBVyw0Q0FBK0UsT0FBbkNkLE9BQU8sZ0JBQWdCOzswQ0FDakYsOERBQUNpQjtnQ0FBSUMsS0FBSTtnQ0FBR0MsS0FBS1AsbUJBQW1CVCxJQUFJO2dDQUFFVyxXQUFVOzs7Ozs7MENBQ3BELDhEQUFDTTtnQ0FBT04sV0FBVTs7a0RBQ2hCLDhEQUFDTzt3Q0FBV1AsV0FBVTtrREFDcEIsNEVBQUNRO3NEQUFHVixtQkFBbUJSLEtBQUs7Ozs7Ozs7Ozs7O2tEQUU5Qiw4REFBQ21CO3dDQUFXVCxXQUFVO2tEQUNwQiw0RUFBQ0M7NENBQUlELFdBQVU7OzhEQUNiLDhEQUFDQztvREFBSUQsV0FBVTs4REFBK0JGLG1CQUFtQlAsSUFBSTs7Ozs7OzhEQUNyRSw4REFBQ1U7b0RBQUlELFdBQVU7OERBQXNCRixtQkFBbUJOLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFTekUsOERBQUNrQjtnQkFDQ0MsU0FBU2Q7Z0JBQ1RHLFdBQVU7O2tDQUVWLDhEQUFDWTt3QkFBS1osV0FBVTtrQ0FBVTs7Ozs7O2tDQUMxQiw4REFBQ2E7d0JBQUlDLE9BQU07d0JBQTZCZCxXQUFVO3dCQUFVZSxTQUFRO3dCQUFZQyxNQUFLO2tDQUNuRiw0RUFBQ0M7NEJBQUtDLFVBQVM7NEJBQVVDLEdBQUU7NEJBQXdIQyxVQUFTOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLaEssOERBQUNWO2dCQUNDQyxTQUFTbEI7Z0JBQ1RPLFdBQVU7O2tDQUVWLDhEQUFDWTt3QkFBS1osV0FBVTtrQ0FBVTs7Ozs7O2tDQUMxQiw4REFBQ2E7d0JBQUlDLE9BQU07d0JBQTZCZCxXQUFVO3dCQUFVZSxTQUFRO3dCQUFZQyxNQUFLO2tDQUNuRiw0RUFBQ0M7NEJBQUtDLFVBQVM7NEJBQVVDLEdBQUU7NEJBQWlIQyxVQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvSjtHQTVGZ0JyQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90ZXN0aW1vbmlhbC5qc3g/Y2JiMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL1Rlc3RpbW9uaWFsLmpzeFxuXG5cInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL2NvbnRhaW5lcic7XG5pbXBvcnQgeyBIZWFkaW5nLCBTdWJoZWFkaW5nIH0gZnJvbSAnLi90ZXh0J1xuXG5leHBvcnQgZnVuY3Rpb24gVGVzdGltb25pYWwoKSB7XG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2ZhZGUsIHNldEZhZGVdID0gdXNlU3RhdGUodHJ1ZSk7IC8vIFN0YXRlIGZvciBmYWRlIGVmZmVjdFxuXG4gIGNvbnN0IHRlc3RpbW9uaWFscyA9IFtcbiAgICB7XG4gICAgICBsb2dvOiBcImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vcGx1cy9pbWcvbG9nb3MvdHVwbGUtbG9nby1ncmF5LTkwMC5zdmdcIixcbiAgICAgIHF1b3RlOiBcIuKAnEZsb3cgU2Vuc2UgU29sdXRpb25zIGV4Y2VlZGVkIG91ciBleHBlY3RhdGlvbnMgd2l0aCB0aGVpciBzdHJhdGVnaWMgaW5zaWdodCBhbmQgYXR0ZW50aW9uIHRvIGRldGFpbC4gVGhlIHRlYW3igJlzIGV4cGVydGlzZSBoZWxwZWQgc3RyZWFtbGluZSBvdXIgcHJvY2Vzc2VzIGFuZCBwcm92aWRlZCBhY3Rpb25hYmxlIHNvbHV0aW9ucyB0aGF0IGxlZCB0byBtZWFzdXJhYmxlIGltcHJvdmVtZW50cy4gVGhlaXIgY29sbGFib3JhdGl2ZSBhcHByb2FjaCBtYWRlIGl0IGVhc3kgdG8gaW1wbGVtZW50IGNoYW5nZXMgZWZmZWN0aXZlbHkuIEhpZ2hseSByZWNvbW1lbmQgRmxvdyBTZW5zZSBTb2x1dGlvbnMgZm9yIGFueW9uZSBsb29raW5nIHRvIGVsZXZhdGUgdGhlaXIgYnVzaW5lc3Mgb3BlcmF0aW9ucy7igJ1cIixcbiAgICAgIG5hbWU6IFwiSnVkaXRoIEJsYWNrXCIsXG4gICAgICB0aXRsZTogXCJDRU8gb2YgVHVwbGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgbG9nbzogXCJodHRwczovL3RhaWx3aW5kdWkuY29tL3BsdXMvaW1nL2xvZ29zL3JlZm9ybS1sb2dvLWdyYXktOTAwLnN2Z1wiLFxuICAgICAgcXVvdGU6IFwi4oCcV29ya2luZyB3aXRoIEZsb3cgU2Vuc2UgU29sdXRpb25zIHdhcyBhIHRyYW5zZm9ybWF0aXZlIGV4cGVyaWVuY2UuIFRoZWlyIHRlYW0gcXVpY2tseSBpZGVudGlmaWVkIGtleSBhcmVhcyBmb3IgZ3Jvd3RoIGFuZCBvZmZlcmVkIHRhaWxvcmVkIHN0cmF0ZWdpZXMgdGhhdCB3ZXJlIGJvdGggaW5ub3ZhdGl2ZSBhbmQgcHJhY3RpY2FsLiBUaGV5IHdlcmUgcmVzcG9uc2l2ZSwgcHJvZmVzc2lvbmFsLCBhbmQgY29tbWl0dGVkIHRvIG91ciBzdWNjZXNzIGV2ZXJ5IHN0ZXAgb2YgdGhlIHdheS4gV2UgaGlnaGx5IHJlY29tbWVuZCBGbG93IFNlbnNlIFNvbHV0aW9ucyBmb3IgYnVzaW5lc3NlcyBzZWVraW5nIGltcGFjdGZ1bCBhbmQgc3VzdGFpbmFibGUgaW1wcm92ZW1lbnRzLuKAnVwiLFxuICAgICAgbmFtZTogXCJKb3NlcGggUm9kcmlndWV6XCIsXG4gICAgICB0aXRsZTogXCJDRU8gb2YgUmVmb3JtXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGxvZ286IFwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9wbHVzL2ltZy9sb2dvcy9zYXZ2eS1sb2dvLWdyYXktOTAwLnN2Z1wiLCAvLyBSZXBsYWNlIHdpdGggYW4gYXBwcm9wcmlhdGUgbG9nbyBVUkxcbiAgICAgIHF1b3RlOiBcIuKAnFRoZSBpbnNpZ2h0cyBwcm92aWRlZCBieSBGbG93IFNlbnNlIFNvbHV0aW9ucyB3ZXJlIGluc3RydW1lbnRhbCBpbiB0YWtpbmcgb3VyIGNvbXBhbnkgdG8gdGhlIG5leHQgbGV2ZWwuIFRoZWlyIGRlZXAgdW5kZXJzdGFuZGluZyBvZiBvdXIgaW5kdXN0cnkgYW5kIHByb2FjdGl2ZSBhcHByb2FjaCBlbmFibGVkIHVzIHRvIG1ha2UgZGF0YS1kcml2ZW4gZGVjaXNpb25zIHdpdGggY29uZmlkZW5jZS4gVGhlIHRlYW0gaXMgZXhjZXB0aW9uYWxseSBrbm93bGVkZ2VhYmxlIGFuZCBlYXN5IHRvIHdvcmsgd2l0aC7igJ1cIixcbiAgICAgIG5hbWU6IFwiRW1pbHkgRGF2aXNcIixcbiAgICAgIHRpdGxlOiBcIkNFTyBvZiBTYXZ2eVwiXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgc2V0RmFkZShmYWxzZSk7IC8vIFRyaWdnZXIgZmFkZS1vdXRcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEN1cnJlbnRJbmRleCgocHJldkluZGV4KSA9PiAocHJldkluZGV4ICsgMSkgJSB0ZXN0aW1vbmlhbHMubGVuZ3RoKTtcbiAgICAgIHNldEZhZGUodHJ1ZSk7IC8vIFRyaWdnZXIgZmFkZS1pbiBhZnRlciBjaGFuZ2luZyB0aGUgdGVzdGltb25pYWxcbiAgICB9LCAzMDApOyAvLyBEdXJhdGlvbiBmb3IgZmFkZS1vdXQgZWZmZWN0XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJldmlvdXMgPSAoKSA9PiB7XG4gICAgc2V0RmFkZShmYWxzZSk7IC8vIFRyaWdnZXIgZmFkZS1vdXRcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEN1cnJlbnRJbmRleCgocHJldkluZGV4KSA9PiAocHJldkluZGV4IC0gMSArIHRlc3RpbW9uaWFscy5sZW5ndGgpICUgdGVzdGltb25pYWxzLmxlbmd0aCk7XG4gICAgICBzZXRGYWRlKHRydWUpOyAvLyBUcmlnZ2VyIGZhZGUtaW4gYWZ0ZXIgY2hhbmdpbmcgdGhlIHRlc3RpbW9uaWFsXG4gICAgfSwgMzAwKTsgLy8gRHVyYXRpb24gZm9yIGZhZGUtb3V0IGVmZmVjdFxuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnRUZXN0aW1vbmlhbCA9IHRlc3RpbW9uaWFsc1tjdXJyZW50SW5kZXhdO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctd2hpdGUgcHktMTggc206cHktMjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC0zMic+XG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBjbGFzc05hbWU9XCJtYi0yMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgIFdoYXQgY2xpZW50cyBzYXkgYWJvdXQgdXNcbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTYgbGc6cHgtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctMnhsIGxnOm1heC13LW5vbmUgbGc6ZmxleCBsZzpqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbGc6dy0xLzIgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMCAke2ZhZGUgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktMCd9YH0+XG4gICAgICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz17Y3VycmVudFRlc3RpbW9uaWFsLmxvZ299IGNsYXNzTmFtZT1cImgtMTIgc2VsZi1zdGFydFwiIC8+XG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIm10LTEwIGZsZXggZmxleC1hdXRvIGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9XCJ0ZXh0LWxnLzggdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgIDxwPntjdXJyZW50VGVzdGltb25pYWwucXVvdGV9PC9wPlxuICAgICAgICAgICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cIm10LTEwIGZsZXggaXRlbXMtY2VudGVyIGdhcC14LTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj57Y3VycmVudFRlc3RpbW9uaWFsLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgdGV4dC1ncmF5LTUwMFwiPntjdXJyZW50VGVzdGltb25pYWwudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTGVmdCBBcnJvdyBCdXR0b24gKi99XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzfVxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTEwIHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgYmctZ3JheS05MDAgdGV4dC13aGl0ZSBwLTMgcm91bmRlZC1mdWxsIGhvdmVyOmJnLWdyYXktNzAwIHRyYW5zaXRpb25cIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UHJldmlvdXMgdGVzdGltb25pYWw8L3NwYW4+XG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNSB3LTVcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAgMmExIDEgMCAwMS43MDcgMS43MDdMNC40MTQgMTBsNi4yOTMgNi4yOTNBMSAxIDAgMDExMCAxOGExIDEgMCAwMS0uNzA3LS4yOTNsLTctN2ExIDEgMCAwMTAtMS40MTRsNy03QTEgMSAwIDAxMTAgMnpcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICB7LyogUmlnaHQgQXJyb3cgQnV0dG9uICovfVxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0xMCB0b3AtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIGJnLWdyYXktOTAwIHRleHQtd2hpdGUgcC0zIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1ncmF5LTcwMCB0cmFuc2l0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk5leHQgdGVzdGltb25pYWw8L3NwYW4+XG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNSB3LTVcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAgMThhMSAxIDAgMDEtLjcwNy0xLjcwN0wxNS41ODYgMTBsLTYuMjkzLTYuMjkzQTEgMSAwIDAxMTAuNzA3IDIuMjkzbDcgN2ExIDEgMCAwMTAgMS40MTRsLTcgN0ExIDEgMCAwMTEwIDE4elwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiSGVhZGluZyIsIlN1YmhlYWRpbmciLCJUZXN0aW1vbmlhbCIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImZhZGUiLCJzZXRGYWRlIiwidGVzdGltb25pYWxzIiwibG9nbyIsInF1b3RlIiwibmFtZSIsInRpdGxlIiwiaGFuZGxlTmV4dCIsInNldFRpbWVvdXQiLCJwcmV2SW5kZXgiLCJsZW5ndGgiLCJoYW5kbGVQcmV2aW91cyIsImN1cnJlbnRUZXN0aW1vbmlhbCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJhcyIsImltZyIsImFsdCIsInNyYyIsImZpZ3VyZSIsImJsb2NrcXVvdGUiLCJwIiwiZmlnY2FwdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94IiwiZmlsbCIsInBhdGgiLCJmaWxsUnVsZSIsImQiLCJjbGlwUnVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/testimonial.jsx\n"));

/***/ })

});