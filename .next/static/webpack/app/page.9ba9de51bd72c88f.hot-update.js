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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Testimonial: function() { return /* binding */ Testimonial; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// components/Testimonial.jsx\n/* __next_internal_client_entry_do_not_use__ Testimonial auto */ \nvar _s = $RefreshSig$();\n\nfunction Testimonial() {\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [fade, setFade] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // State for fade effect\n    const testimonials = [\n        {\n            logo: \"https://tailwindui.com/plus/img/logos/tuple-logo-gray-900.svg\",\n            quote: \"“Flow Sense Solutions exceeded our expectations with their strategic insight and attention to detail. The team’s expertise helped streamline our processes and provided actionable solutions that led to measurable improvements. Their collaborative approach made it easy to implement changes effectively. Highly recommend Flow Sense Solutions for anyone looking to elevate their business operations.”\",\n            name: \"Judith Black\",\n            title: \"CEO of Tuple\"\n        },\n        {\n            logo: \"https://tailwindui.com/plus/img/logos/reform-logo-gray-900.svg\",\n            quote: \"“Working with Flow Sense Solutions was a transformative experience. Their team quickly identified key areas for growth and offered tailored strategies that were both innovative and practical. They were responsive, professional, and committed to our success every step of the way. We highly recommend Flow Sense Solutions for businesses seeking impactful and sustainable improvements.”\",\n            name: \"Joseph Rodriguez\",\n            title: \"CEO of Reform\"\n        },\n        {\n            logo: \"https://tailwindui.com/plus/img/logos/savvy-logo-gray-900.svg\",\n            quote: \"“The insights provided by Flow Sense Solutions were instrumental in taking our company to the next level. Their deep understanding of our industry and proactive approach enabled us to make data-driven decisions with confidence. The team is exceptionally knowledgeable and easy to work with.”\",\n            name: \"Emily Davis\",\n            title: \"CEO of Savvy\"\n        }\n    ];\n    const handleNext = ()=>{\n        setFade(false); // Trigger fade-out\n        setTimeout(()=>{\n            setCurrentIndex((prevIndex)=>(prevIndex + 1) % testimonials.length);\n            setFade(true); // Trigger fade-in after changing the testimonial\n        }, 300); // Duration for fade-out effect\n    };\n    const handlePrevious = ()=>{\n        setFade(false); // Trigger fade-out\n        setTimeout(()=>{\n            setCurrentIndex((prevIndex)=>(prevIndex - 1 + testimonials.length) % testimonials.length);\n            setFade(true); // Trigger fade-in after changing the testimonial\n        }, 300); // Duration for fade-out effect\n    };\n    const currentTestimonial = testimonials[currentIndex];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"relative bg-white py-24 sm:py-32\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: setReferenceWindowRef,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Heading, {\n                        as: \"h3\",\n                        className: \"mt-2 font-semibold\",\n                        children: \"Latest Projects\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-7xl px-6 lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto max-w-2xl lg:max-w-none lg:flex lg:justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"lg:w-1/2 transition-opacity duration-300 \".concat(fade ? \"opacity-100\" : \"opacity-0\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: \"\",\n                                src: currentTestimonial.logo,\n                                className: \"h-12 self-start\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                className: \"mt-10 flex flex-auto flex-col justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n                                        className: \"text-lg/8 text-gray-900\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: currentTestimonial.quote\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {\n                                        className: \"mt-10 flex items-center gap-x-6\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-base\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"font-semibold text-gray-900\",\n                                                    children: currentTestimonial.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"mt-1 text-gray-500\",\n                                                    children: currentTestimonial.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handlePrevious,\n                className: \"absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 transition\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"sr-only\",\n                        children: \"Previous testimonial\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        className: \"h-5 w-5\",\n                        viewBox: \"0 0 20 20\",\n                        fill: \"currentColor\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fillRule: \"evenodd\",\n                            d: \"M10 2a1 1 0 01.707 1.707L4.414 10l6.293 6.293A1 1 0 0110 18a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7A1 1 0 0110 2z\",\n                            clipRule: \"evenodd\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleNext,\n                className: \"absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 transition\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"sr-only\",\n                        children: \"Next testimonial\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        className: \"h-5 w-5\",\n                        viewBox: \"0 0 20 20\",\n                        fill: \"currentColor\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fillRule: \"evenodd\",\n                            d: \"M10 18a1 1 0 01-.707-1.707L15.586 10l-6.293-6.293A1 1 0 0110.707 2.293l7 7a1 1 0 010 1.414l-7 7A1 1 0 0110 18z\",\n                            clipRule: \"evenodd\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/testimonial.jsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Testimonial, \"MZlqU2HE5WCs1mT1gyXkkGcoC1g=\");\n_c = Testimonial;\nvar _c;\n$RefreshReg$(_c, \"Testimonial\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Rlc3RpbW9uaWFsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsNkJBQTZCOzs7QUFJSTtBQUUxQixTQUFTQzs7SUFDZCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHSCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNJLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUMsT0FBTyx3QkFBd0I7SUFFaEUsTUFBTU0sZUFBZTtRQUNuQjtZQUNFQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxPQUFPO1FBQ1Q7UUFDQTtZQUNFSCxNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxPQUFPO1FBQ1Q7UUFDQTtZQUNFSCxNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxPQUFPO1FBQ1Q7S0FDRDtJQUVELE1BQU1DLGFBQWE7UUFDakJOLFFBQVEsUUFBUSxtQkFBbUI7UUFDbkNPLFdBQVc7WUFDVFQsZ0JBQWdCLENBQUNVLFlBQWMsQ0FBQ0EsWUFBWSxLQUFLUCxhQUFhUSxNQUFNO1lBQ3BFVCxRQUFRLE9BQU8saURBQWlEO1FBQ2xFLEdBQUcsTUFBTSwrQkFBK0I7SUFDMUM7SUFFQSxNQUFNVSxpQkFBaUI7UUFDckJWLFFBQVEsUUFBUSxtQkFBbUI7UUFDbkNPLFdBQVc7WUFDVFQsZ0JBQWdCLENBQUNVLFlBQWMsQ0FBQ0EsWUFBWSxJQUFJUCxhQUFhUSxNQUFNLElBQUlSLGFBQWFRLE1BQU07WUFDMUZULFFBQVEsT0FBTyxpREFBaUQ7UUFDbEUsR0FBRyxNQUFNLCtCQUErQjtJQUMxQztJQUVBLE1BQU1XLHFCQUFxQlYsWUFBWSxDQUFDSixhQUFhO0lBRXJELHFCQUNFLDhEQUFDZTtRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDOzBCQUNDLDRFQUFDQztvQkFBSUMsS0FBS0M7OEJBRVIsNEVBQUNDO3dCQUFRQyxJQUFHO3dCQUFLTixXQUFVO2tDQUFxQjs7Ozs7Ozs7Ozs7Ozs7OzswQkFLcEQsOERBQUNFO2dCQUFJRixXQUFVOzBCQUNiLDRFQUFDRTtvQkFBSUYsV0FBVTs4QkFDYiw0RUFBQ0U7d0JBQUlGLFdBQVcsNENBQStFLE9BQW5DZCxPQUFPLGdCQUFnQjs7MENBQ2pGLDhEQUFDcUI7Z0NBQUlDLEtBQUk7Z0NBQUdDLEtBQUtYLG1CQUFtQlQsSUFBSTtnQ0FBRVcsV0FBVTs7Ozs7OzBDQUNwRCw4REFBQ1U7Z0NBQU9WLFdBQVU7O2tEQUNoQiw4REFBQ1c7d0NBQVdYLFdBQVU7a0RBQ3BCLDRFQUFDWTtzREFBR2QsbUJBQW1CUixLQUFLOzs7Ozs7Ozs7OztrREFFOUIsOERBQUN1Qjt3Q0FBV2IsV0FBVTtrREFDcEIsNEVBQUNFOzRDQUFJRixXQUFVOzs4REFDYiw4REFBQ0U7b0RBQUlGLFdBQVU7OERBQStCRixtQkFBbUJQLElBQUk7Ozs7Ozs4REFDckUsOERBQUNXO29EQUFJRixXQUFVOzhEQUFzQkYsbUJBQW1CTixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBU3pFLDhEQUFDc0I7Z0JBQ0NDLFNBQVNsQjtnQkFDVEcsV0FBVTs7a0NBRVYsOERBQUNnQjt3QkFBS2hCLFdBQVU7a0NBQVU7Ozs7OztrQ0FDMUIsOERBQUNpQjt3QkFBSUMsT0FBTTt3QkFBNkJsQixXQUFVO3dCQUFVbUIsU0FBUTt3QkFBWUMsTUFBSztrQ0FDbkYsNEVBQUNDOzRCQUFLQyxVQUFTOzRCQUFVQyxHQUFFOzRCQUF3SEMsVUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS2hLLDhEQUFDVjtnQkFDQ0MsU0FBU3RCO2dCQUNUTyxXQUFVOztrQ0FFViw4REFBQ2dCO3dCQUFLaEIsV0FBVTtrQ0FBVTs7Ozs7O2tDQUMxQiw4REFBQ2lCO3dCQUFJQyxPQUFNO3dCQUE2QmxCLFdBQVU7d0JBQVVtQixTQUFRO3dCQUFZQyxNQUFLO2tDQUNuRiw0RUFBQ0M7NEJBQUtDLFVBQVM7NEJBQVVDLEdBQUU7NEJBQWlIQyxVQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvSjtHQS9GZ0J6QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90ZXN0aW1vbmlhbC5qc3g/Y2JiMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL1Rlc3RpbW9uaWFsLmpzeFxuXG5cInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBUZXN0aW1vbmlhbCgpIHtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZmFkZSwgc2V0RmFkZV0gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gU3RhdGUgZm9yIGZhZGUgZWZmZWN0XG5cbiAgY29uc3QgdGVzdGltb25pYWxzID0gW1xuICAgIHtcbiAgICAgIGxvZ286IFwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9wbHVzL2ltZy9sb2dvcy90dXBsZS1sb2dvLWdyYXktOTAwLnN2Z1wiLFxuICAgICAgcXVvdGU6IFwi4oCcRmxvdyBTZW5zZSBTb2x1dGlvbnMgZXhjZWVkZWQgb3VyIGV4cGVjdGF0aW9ucyB3aXRoIHRoZWlyIHN0cmF0ZWdpYyBpbnNpZ2h0IGFuZCBhdHRlbnRpb24gdG8gZGV0YWlsLiBUaGUgdGVhbeKAmXMgZXhwZXJ0aXNlIGhlbHBlZCBzdHJlYW1saW5lIG91ciBwcm9jZXNzZXMgYW5kIHByb3ZpZGVkIGFjdGlvbmFibGUgc29sdXRpb25zIHRoYXQgbGVkIHRvIG1lYXN1cmFibGUgaW1wcm92ZW1lbnRzLiBUaGVpciBjb2xsYWJvcmF0aXZlIGFwcHJvYWNoIG1hZGUgaXQgZWFzeSB0byBpbXBsZW1lbnQgY2hhbmdlcyBlZmZlY3RpdmVseS4gSGlnaGx5IHJlY29tbWVuZCBGbG93IFNlbnNlIFNvbHV0aW9ucyBmb3IgYW55b25lIGxvb2tpbmcgdG8gZWxldmF0ZSB0aGVpciBidXNpbmVzcyBvcGVyYXRpb25zLuKAnVwiLFxuICAgICAgbmFtZTogXCJKdWRpdGggQmxhY2tcIixcbiAgICAgIHRpdGxlOiBcIkNFTyBvZiBUdXBsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBsb2dvOiBcImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vcGx1cy9pbWcvbG9nb3MvcmVmb3JtLWxvZ28tZ3JheS05MDAuc3ZnXCIsXG4gICAgICBxdW90ZTogXCLigJxXb3JraW5nIHdpdGggRmxvdyBTZW5zZSBTb2x1dGlvbnMgd2FzIGEgdHJhbnNmb3JtYXRpdmUgZXhwZXJpZW5jZS4gVGhlaXIgdGVhbSBxdWlja2x5IGlkZW50aWZpZWQga2V5IGFyZWFzIGZvciBncm93dGggYW5kIG9mZmVyZWQgdGFpbG9yZWQgc3RyYXRlZ2llcyB0aGF0IHdlcmUgYm90aCBpbm5vdmF0aXZlIGFuZCBwcmFjdGljYWwuIFRoZXkgd2VyZSByZXNwb25zaXZlLCBwcm9mZXNzaW9uYWwsIGFuZCBjb21taXR0ZWQgdG8gb3VyIHN1Y2Nlc3MgZXZlcnkgc3RlcCBvZiB0aGUgd2F5LiBXZSBoaWdobHkgcmVjb21tZW5kIEZsb3cgU2Vuc2UgU29sdXRpb25zIGZvciBidXNpbmVzc2VzIHNlZWtpbmcgaW1wYWN0ZnVsIGFuZCBzdXN0YWluYWJsZSBpbXByb3ZlbWVudHMu4oCdXCIsXG4gICAgICBuYW1lOiBcIkpvc2VwaCBSb2RyaWd1ZXpcIixcbiAgICAgIHRpdGxlOiBcIkNFTyBvZiBSZWZvcm1cIlxuICAgIH0sXG4gICAge1xuICAgICAgbG9nbzogXCJodHRwczovL3RhaWx3aW5kdWkuY29tL3BsdXMvaW1nL2xvZ29zL3NhdnZ5LWxvZ28tZ3JheS05MDAuc3ZnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhbiBhcHByb3ByaWF0ZSBsb2dvIFVSTFxuICAgICAgcXVvdGU6IFwi4oCcVGhlIGluc2lnaHRzIHByb3ZpZGVkIGJ5IEZsb3cgU2Vuc2UgU29sdXRpb25zIHdlcmUgaW5zdHJ1bWVudGFsIGluIHRha2luZyBvdXIgY29tcGFueSB0byB0aGUgbmV4dCBsZXZlbC4gVGhlaXIgZGVlcCB1bmRlcnN0YW5kaW5nIG9mIG91ciBpbmR1c3RyeSBhbmQgcHJvYWN0aXZlIGFwcHJvYWNoIGVuYWJsZWQgdXMgdG8gbWFrZSBkYXRhLWRyaXZlbiBkZWNpc2lvbnMgd2l0aCBjb25maWRlbmNlLiBUaGUgdGVhbSBpcyBleGNlcHRpb25hbGx5IGtub3dsZWRnZWFibGUgYW5kIGVhc3kgdG8gd29yayB3aXRoLuKAnVwiLFxuICAgICAgbmFtZTogXCJFbWlseSBEYXZpc1wiLFxuICAgICAgdGl0bGU6IFwiQ0VPIG9mIFNhdnZ5XCJcbiAgICB9XG4gIF07XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBzZXRGYWRlKGZhbHNlKTsgLy8gVHJpZ2dlciBmYWRlLW91dFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0Q3VycmVudEluZGV4KChwcmV2SW5kZXgpID0+IChwcmV2SW5kZXggKyAxKSAlIHRlc3RpbW9uaWFscy5sZW5ndGgpO1xuICAgICAgc2V0RmFkZSh0cnVlKTsgLy8gVHJpZ2dlciBmYWRlLWluIGFmdGVyIGNoYW5naW5nIHRoZSB0ZXN0aW1vbmlhbFxuICAgIH0sIDMwMCk7IC8vIER1cmF0aW9uIGZvciBmYWRlLW91dCBlZmZlY3RcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcmV2aW91cyA9ICgpID0+IHtcbiAgICBzZXRGYWRlKGZhbHNlKTsgLy8gVHJpZ2dlciBmYWRlLW91dFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0Q3VycmVudEluZGV4KChwcmV2SW5kZXgpID0+IChwcmV2SW5kZXggLSAxICsgdGVzdGltb25pYWxzLmxlbmd0aCkgJSB0ZXN0aW1vbmlhbHMubGVuZ3RoKTtcbiAgICAgIHNldEZhZGUodHJ1ZSk7IC8vIFRyaWdnZXIgZmFkZS1pbiBhZnRlciBjaGFuZ2luZyB0aGUgdGVzdGltb25pYWxcbiAgICB9LCAzMDApOyAvLyBEdXJhdGlvbiBmb3IgZmFkZS1vdXQgZWZmZWN0XG4gIH07XG5cbiAgY29uc3QgY3VycmVudFRlc3RpbW9uaWFsID0gdGVzdGltb25pYWxzW2N1cnJlbnRJbmRleF07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy13aGl0ZSBweS0yNCBzbTpweS0zMlwiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPGRpdiByZWY9e3NldFJlZmVyZW5jZVdpbmRvd1JlZn0+XG4gICAgICAgICAgey8qIDxTdWJoZWFkaW5nPldoYXQgZXZlcnlvbmUgaXMgc2F5aW5nPC9TdWJoZWFkaW5nPiAqL31cbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgY2xhc3NOYW1lPVwibXQtMiBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICBMYXRlc3QgUHJvamVjdHNcbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTYgbGc6cHgtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctMnhsIGxnOm1heC13LW5vbmUgbGc6ZmxleCBsZzpqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbGc6dy0xLzIgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMCAke2ZhZGUgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktMCd9YH0+XG4gICAgICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz17Y3VycmVudFRlc3RpbW9uaWFsLmxvZ299IGNsYXNzTmFtZT1cImgtMTIgc2VsZi1zdGFydFwiIC8+XG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIm10LTEwIGZsZXggZmxleC1hdXRvIGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9XCJ0ZXh0LWxnLzggdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgIDxwPntjdXJyZW50VGVzdGltb25pYWwucXVvdGV9PC9wPlxuICAgICAgICAgICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cIm10LTEwIGZsZXggaXRlbXMtY2VudGVyIGdhcC14LTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj57Y3VycmVudFRlc3RpbW9uaWFsLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgdGV4dC1ncmF5LTUwMFwiPntjdXJyZW50VGVzdGltb25pYWwudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTGVmdCBBcnJvdyBCdXR0b24gKi99XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzfVxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTEwIHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgYmctZ3JheS05MDAgdGV4dC13aGl0ZSBwLTMgcm91bmRlZC1mdWxsIGhvdmVyOmJnLWdyYXktNzAwIHRyYW5zaXRpb25cIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UHJldmlvdXMgdGVzdGltb25pYWw8L3NwYW4+XG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNSB3LTVcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAgMmExIDEgMCAwMS43MDcgMS43MDdMNC40MTQgMTBsNi4yOTMgNi4yOTNBMSAxIDAgMDExMCAxOGExIDEgMCAwMS0uNzA3LS4yOTNsLTctN2ExIDEgMCAwMTAtMS40MTRsNy03QTEgMSAwIDAxMTAgMnpcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICB7LyogUmlnaHQgQXJyb3cgQnV0dG9uICovfVxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0xMCB0b3AtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIGJnLWdyYXktOTAwIHRleHQtd2hpdGUgcC0zIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1ncmF5LTcwMCB0cmFuc2l0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk5leHQgdGVzdGltb25pYWw8L3NwYW4+XG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNSB3LTVcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAgMThhMSAxIDAgMDEtLjcwNy0xLjcwN0wxNS41ODYgMTBsLTYuMjkzLTYuMjkzQTEgMSAwIDAxMTAuNzA3IDIuMjkzbDcgN2ExIDEgMCAwMTAgMS40MTRsLTcgN0ExIDEgMCAwMTEwIDE4elwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVGVzdGltb25pYWwiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJmYWRlIiwic2V0RmFkZSIsInRlc3RpbW9uaWFscyIsImxvZ28iLCJxdW90ZSIsIm5hbWUiLCJ0aXRsZSIsImhhbmRsZU5leHQiLCJzZXRUaW1lb3V0IiwicHJldkluZGV4IiwibGVuZ3RoIiwiaGFuZGxlUHJldmlvdXMiLCJjdXJyZW50VGVzdGltb25pYWwiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiQ29udGFpbmVyIiwiZGl2IiwicmVmIiwic2V0UmVmZXJlbmNlV2luZG93UmVmIiwiSGVhZGluZyIsImFzIiwiaW1nIiwiYWx0Iiwic3JjIiwiZmlndXJlIiwiYmxvY2txdW90ZSIsInAiLCJmaWdjYXB0aW9uIiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJmaWxsIiwicGF0aCIsImZpbGxSdWxlIiwiZCIsImNsaXBSdWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/testimonial.jsx\n"));

/***/ })

});