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

/***/ "(app-pages-browser)/./src/components/contact.jsx":
/*!************************************!*\
  !*** ./src/components/contact.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Contact: function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Contact auto */ \nvar _s = $RefreshSig$();\n\nfunction Contact() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        phone: \"\",\n        companyName: \"\",\n        message: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setData({\n            ...data,\n            [name]: value\n        });\n    };\n    const sendEmail = async (e)=>{\n        e.preventDefault();\n        const response = await fetch(\"/api/send\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        if (response.ok) {\n            alert(\"Email sent successfully!\");\n            setData({\n                name: \"\",\n                email: \"\",\n                phone: \"\",\n                companyName: \"\",\n                message: \"\"\n            });\n        } else {\n            alert(\"Failed to send email.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-20\",\n        id: \"contact-section\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center mb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-4xl md:text-5xl font-medium mb-4\",\n                            children: [\n                                \"Get in \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-blue-400 font-semibold\",\n                                    children: \"Touch\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 20\n                                }, this),\n                                \" With Us\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-600\",\n                            children: \"Lorem Ipsum is simply dummy text of the printing and typesetting industry.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-lg mx-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: sendEmail,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"name\",\n                                    placeholder: \"Name\",\n                                    value: data.name,\n                                    onChange: handleChange,\n                                    className: \"w-full bg-textInputCustom py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    name: \"email\",\n                                    placeholder: \"Email\",\n                                    value: data.email,\n                                    onChange: handleChange,\n                                    className: \"w-full bg-textInputCustom py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"phone\",\n                                    placeholder: \"Phone number\",\n                                    value: data.phone,\n                                    onChange: handleChange,\n                                    className: \"w-full bg-textInputCustom py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"companyName\",\n                                    placeholder: \"Company name\",\n                                    value: data.companyName,\n                                    onChange: handleChange,\n                                    className: \"w-full bg-textInputCustom py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    name: \"message\",\n                                    placeholder: \"Message\",\n                                    rows: \"4\",\n                                    value: data.message,\n                                    onChange: handleChange,\n                                    className: \"w-full bg-textInputCustom py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"bg-blue-600 rounded-lg text-white font-medium py-2.5 px-6 hover:bg-blue-500 transition duration-300\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/chasefriedman/projects/flowsense/src/components/contact.jsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Contact, \"XsYREJfFTYokJXoERDdcMvhmhQk=\");\n_c = Contact;\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUV3QztBQUVqQyxTQUFTRTs7SUFDZCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUM7UUFDL0JJLE1BQU07UUFDTkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsU0FBUztJQUNYO0lBRUEsTUFBTUMsZUFBZSxDQUFDQztRQUNwQixNQUFNLEVBQUVOLElBQUksRUFBRU8sS0FBSyxFQUFFLEdBQUdELEVBQUVFLE1BQU07UUFDaENULFFBQVE7WUFDTixHQUFHRCxJQUFJO1lBQ1AsQ0FBQ0UsS0FBSyxFQUFFTztRQUNWO0lBQ0Y7SUFFQSxNQUFNRSxZQUFZLE9BQU9IO1FBQ3ZCQSxFQUFFSSxjQUFjO1FBQ2hCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxhQUFhO1lBQ3hDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ25CO1FBQ3ZCO1FBRUEsSUFBSWEsU0FBU08sRUFBRSxFQUFFO1lBQ2ZDLE1BQU07WUFDTnBCLFFBQVE7Z0JBQUVDLE1BQU07Z0JBQUlDLE9BQU87Z0JBQUlDLE9BQU87Z0JBQUlDLGFBQWE7Z0JBQUlDLFNBQVM7WUFBRztRQUN6RSxPQUFPO1lBQ0xlLE1BQU07UUFDUjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7UUFBUUMsSUFBRztrQkFDeEIsNEVBQUNGO1lBQUlDLFdBQVU7OzhCQUViLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUFHRixXQUFVOztnQ0FBd0M7OENBQzdDLDhEQUFDRztvQ0FBS0gsV0FBVTs4Q0FBOEI7Ozs7OztnQ0FBWTs7Ozs7OztzQ0FFbkUsOERBQUNJOzRCQUFFSixXQUFVO3NDQUFnQjs7Ozs7Ozs7Ozs7OzhCQU0vQiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNLO3dCQUFLQyxVQUFVbEI7OzBDQUVkLDhEQUFDVztnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ087b0NBQ0NDLE1BQUs7b0NBQ0w3QixNQUFLO29DQUNMOEIsYUFBWTtvQ0FDWnZCLE9BQU9ULEtBQUtFLElBQUk7b0NBQ2hCK0IsVUFBVTFCO29DQUNWZ0IsV0FBVTtvQ0FDVlcsUUFBUTs7Ozs7Ozs7Ozs7MENBS1osOERBQUNaO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDTztvQ0FDQ0MsTUFBSztvQ0FDTDdCLE1BQUs7b0NBQ0w4QixhQUFZO29DQUNadkIsT0FBT1QsS0FBS0csS0FBSztvQ0FDakI4QixVQUFVMUI7b0NBQ1ZnQixXQUFVO29DQUNWVyxRQUFROzs7Ozs7Ozs7OzswQ0FLWiw4REFBQ1o7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNPO29DQUNDQyxNQUFLO29DQUNMN0IsTUFBSztvQ0FDTDhCLGFBQVk7b0NBQ1p2QixPQUFPVCxLQUFLSSxLQUFLO29DQUNqQjZCLFVBQVUxQjtvQ0FDVmdCLFdBQVU7b0NBQ1ZXLFFBQVE7Ozs7Ozs7Ozs7OzBDQUtaLDhEQUFDWjtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ087b0NBQ0NDLE1BQUs7b0NBQ0w3QixNQUFLO29DQUNMOEIsYUFBWTtvQ0FDWnZCLE9BQU9ULEtBQUtLLFdBQVc7b0NBQ3ZCNEIsVUFBVTFCO29DQUNWZ0IsV0FBVTs7Ozs7Ozs7Ozs7MENBS2QsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDWTtvQ0FDQ2pDLE1BQUs7b0NBQ0w4QixhQUFZO29DQUNaSSxNQUFLO29DQUNMM0IsT0FBT1QsS0FBS00sT0FBTztvQ0FDbkIyQixVQUFVMUI7b0NBQ1ZnQixXQUFVO29DQUNWVyxRQUFROzs7Ozs7Ozs7OzswQ0FLWiw4REFBQ1o7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNjO29DQUNDTixNQUFLO29DQUNMUixXQUFVOzhDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZjtHQWpJZ0J4QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb250YWN0LmpzeD8xZDA1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGhvbmU6IFwiXCIsXG4gICAgY29tcGFueU5hbWU6IFwiXCIsXG4gICAgbWVzc2FnZTogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXREYXRhKHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNlbmRFbWFpbCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvc2VuZCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICBhbGVydChcIkVtYWlsIHNlbnQgc3VjY2Vzc2Z1bGx5IVwiKTtcbiAgICAgIHNldERhdGEoeyBuYW1lOiBcIlwiLCBlbWFpbDogXCJcIiwgcGhvbmU6IFwiXCIsIGNvbXBhbnlOYW1lOiBcIlwiLCBtZXNzYWdlOiBcIlwiIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIkZhaWxlZCB0byBzZW5kIGVtYWlsLlwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIwXCIgaWQ9XCJjb250YWN0LXNlY3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtOFwiPlxuICAgICAgICB7LyogSGVhZGluZyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMlwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LW1lZGl1bSBtYi00XCI+XG4gICAgICAgICAgICBHZXQgaW4gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMCBmb250LXNlbWlib2xkXCI+VG91Y2g8L3NwYW4+IFdpdGggVXNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogRm9ybSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1sZyBteC1hdXRvXCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmRFbWFpbH0+XG4gICAgICAgICAgICB7LyogTmFtZSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy10ZXh0SW5wdXRDdXN0b20gcHktMyBweC00IHRleHQtZ3JheS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNDAwXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBFbWFpbCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuZW1haWx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdGV4dElucHV0Q3VzdG9tIHB5LTMgcHgtNCB0ZXh0LWdyYXktNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTQwMFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogUGhvbmUgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaG9uZSBudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLnBob25lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXRleHRJbnB1dEN1c3RvbSBweS0zIHB4LTQgdGV4dC1ncmF5LTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS00MDBcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIENvbXBhbnkgTmFtZSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbXBhbnlOYW1lXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbXBhbnkgbmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuY29tcGFueU5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdGV4dElucHV0Q3VzdG9tIHB5LTMgcHgtNCB0ZXh0LWdyYXktNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTQwMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIE1lc3NhZ2UgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgcm93cz1cIjRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdGV4dElucHV0Q3VzdG9tIHB5LTMgcHgtNCB0ZXh0LWdyYXktNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTQwMFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFN1Ym1pdCBCdXR0b24gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTYwMCByb3VuZGVkLWxnIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcHktMi41IHB4LTYgaG92ZXI6YmctYmx1ZS01MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWN0IiwiZGF0YSIsInNldERhdGEiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsImNvbXBhbnlOYW1lIiwibWVzc2FnZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInNlbmRFbWFpbCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImgyIiwic3BhbiIsInAiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJ0ZXh0YXJlYSIsInJvd3MiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/contact.jsx\n"));

/***/ })

});