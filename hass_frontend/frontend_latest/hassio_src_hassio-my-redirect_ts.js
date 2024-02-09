/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
export const id = "hassio_src_hassio-my-redirect_ts";
export const ids = ["hassio_src_hassio-my-redirect_ts"];
export const modules = {

/***/ "./hassio/src/hassio-my-redirect.ts":
/*!******************************************!*\
  !*** ./hassio/src/hassio-my-redirect.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   REDIRECTS: () => (/* binding */ REDIRECTS)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/decorate */ \"./node_modules/@babel/runtime/helpers/esm/decorate.js\");\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/esm/get.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @braintree/sanitize-url */ \"./node_modules/@braintree/sanitize-url/dist/index.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var _src_common_navigate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/common/navigate */ \"./src/common/navigate.ts\");\n/* harmony import */ var _src_common_url_search_params__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/common/url/search-params */ \"./src/common/url/search-params.ts\");\n/* harmony import */ var _src_layouts_hass_error_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/layouts/hass-error-screen */ \"./src/layouts/hass-error-screen.ts\");\n\n\n\n\n\n\n\n\n\nconst REDIRECTS = {\n  supervisor: {\n    redirect: \"/hassio/dashboard\"\n  },\n  supervisor_logs: {\n    redirect: \"/hassio/system\"\n  },\n  supervisor_info: {\n    redirect: \"/hassio/system\"\n  },\n  supervisor_snapshots: {\n    redirect: \"/hassio/backups\"\n  },\n  supervisor_backups: {\n    redirect: \"/hassio/backups\"\n  },\n  supervisor_store: {\n    redirect: \"/hassio/store\"\n  },\n  supervisor_addons: {\n    redirect: \"/hassio/dashboard\"\n  },\n  supervisor_addon: {\n    redirect: \"/hassio/addon\",\n    params: {\n      addon: \"string\"\n    },\n    optional_params: {\n      repository_url: \"url\"\n    }\n  },\n  supervisor_ingress: {\n    redirect: \"/hassio/ingress\",\n    params: {\n      addon: \"string\"\n    }\n  },\n  supervisor_add_addon_repository: {\n    redirect: \"/hassio/store\",\n    params: {\n      repository_url: \"url\"\n    }\n  }\n};\nlet HassioMyRedirect = (0,_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_5__.customElement)(\"hassio-my-redirect\")], function (_initialize, _LitElement) {\n  class HassioMyRedirect extends _LitElement {\n    constructor(...args) {\n      super(...args);\n      _initialize(this);\n    }\n  }\n  return {\n    F: HassioMyRedirect,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_5__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_5__.property)({\n        attribute: false\n      })],\n      key: \"supervisor\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_5__.property)({\n        attribute: false\n      })],\n      key: \"route\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_5__.state)()],\n      key: \"_error\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"connectedCallback\",\n      value: function connectedCallback() {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HassioMyRedirect.prototype), \"connectedCallback\", this).call(this);\n        const path = this.route.path.substr(1);\n        const redirect = REDIRECTS[path];\n        if (!redirect) {\n          this._error = this.supervisor.localize(\"my.not_supported\", {\n            link: (0,lit__WEBPACK_IMPORTED_MODULE_4__.html)`<a\n          target=\"_blank\"\n          rel=\"noreferrer noopener\"\n          href=\"https://my.home-assistant.io/faq.html#supported-pages\"\n        >\n          ${this.supervisor.localize(\"my.faq_link\")}\n        </a>`\n          });\n          return;\n        }\n        let url;\n        try {\n          url = this._createRedirectUrl(redirect);\n        } catch (err) {\n          this._error = this.supervisor.localize(\"my.error\");\n          return;\n        }\n        (0,_src_common_navigate__WEBPACK_IMPORTED_MODULE_6__.navigate)(url, {\n          replace: true\n        });\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        if (this._error) {\n          return (0,lit__WEBPACK_IMPORTED_MODULE_4__.html)`<hass-error-screen\n        .error=${this._error}\n      ></hass-error-screen>`;\n        }\n        return lit__WEBPACK_IMPORTED_MODULE_4__.nothing;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_createRedirectUrl\",\n      value: function _createRedirectUrl(redirect) {\n        const params = this._createRedirectParams(redirect);\n        return `${redirect.redirect}${params}`;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_createRedirectParams\",\n      value: function _createRedirectParams(redirect) {\n        const params = (0,_src_common_url_search_params__WEBPACK_IMPORTED_MODULE_7__.extractSearchParamsObject)();\n        if (!redirect.params && !Object.keys(params).length) {\n          return \"\";\n        }\n        const resultParams = {};\n        Object.entries(redirect.params || {}).forEach(([key, type]) => {\n          if (!params[key] || !this._checkParamType(type, params[key])) {\n            throw Error();\n          }\n          resultParams[key] = params[key];\n        });\n        Object.entries(redirect.optional_params || {}).forEach(([key, type]) => {\n          if (params[key]) {\n            if (!this._checkParamType(type, params[key])) {\n              throw Error();\n            }\n            resultParams[key] = params[key];\n          }\n        });\n        return `?${(0,_src_common_url_search_params__WEBPACK_IMPORTED_MODULE_7__.createSearchParam)(resultParams)}`;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_checkParamType\",\n      value: function _checkParamType(type, value) {\n        if (type === \"string\") {\n          return true;\n        }\n        if (type === \"url\") {\n          return value && value === (0,_braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_3__.sanitizeUrl)(value);\n        }\n        return false;\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_4__.LitElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oYXNzaW8vc3JjL2hhc3Npby1teS1yZWRpcmVjdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQW9GQTtBQUFBO0FBQUE7QUFwRkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9oYXNzaW8vc3JjL2hhc3Npby1teS1yZWRpcmVjdC50cz82NTdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNhbml0aXplVXJsIH0gZnJvbSBcIkBicmFpbnRyZWUvc2FuaXRpemUtdXJsXCI7XG5pbXBvcnQgeyBodG1sLCBMaXRFbGVtZW50LCBUZW1wbGF0ZVJlc3VsdCwgbm90aGluZyB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gXCJsaXQvZGVjb3JhdG9yc1wiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vc3JjL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlU2VhcmNoUGFyYW0sXG4gIGV4dHJhY3RTZWFyY2hQYXJhbXNPYmplY3QsXG59IGZyb20gXCIuLi8uLi9zcmMvY29tbW9uL3VybC9zZWFyY2gtcGFyYW1zXCI7XG5pbXBvcnQgeyBTdXBlcnZpc29yIH0gZnJvbSBcIi4uLy4uL3NyYy9kYXRhL3N1cGVydmlzb3Ivc3VwZXJ2aXNvclwiO1xuaW1wb3J0IFwiLi4vLi4vc3JjL2xheW91dHMvaGFzcy1lcnJvci1zY3JlZW5cIjtcbmltcG9ydCB7XG4gIFBhcmFtVHlwZSxcbiAgUmVkaXJlY3QsXG4gIFJlZGlyZWN0cyxcbn0gZnJvbSBcIi4uLy4uL3NyYy9wYW5lbHMvbXkvaGEtcGFuZWwtbXlcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIFJvdXRlIH0gZnJvbSBcIi4uLy4uL3NyYy90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgUkVESVJFQ1RTOiBSZWRpcmVjdHMgPSB7XG4gIHN1cGVydmlzb3I6IHtcbiAgICByZWRpcmVjdDogXCIvaGFzc2lvL2Rhc2hib2FyZFwiLFxuICB9LFxuICBzdXBlcnZpc29yX2xvZ3M6IHtcbiAgICByZWRpcmVjdDogXCIvaGFzc2lvL3N5c3RlbVwiLFxuICB9LFxuICBzdXBlcnZpc29yX2luZm86IHtcbiAgICByZWRpcmVjdDogXCIvaGFzc2lvL3N5c3RlbVwiLFxuICB9LFxuICBzdXBlcnZpc29yX3NuYXBzaG90czoge1xuICAgIHJlZGlyZWN0OiBcIi9oYXNzaW8vYmFja3Vwc1wiLFxuICB9LFxuICBzdXBlcnZpc29yX2JhY2t1cHM6IHtcbiAgICByZWRpcmVjdDogXCIvaGFzc2lvL2JhY2t1cHNcIixcbiAgfSxcbiAgc3VwZXJ2aXNvcl9zdG9yZToge1xuICAgIHJlZGlyZWN0OiBcIi9oYXNzaW8vc3RvcmVcIixcbiAgfSxcbiAgc3VwZXJ2aXNvcl9hZGRvbnM6IHtcbiAgICByZWRpcmVjdDogXCIvaGFzc2lvL2Rhc2hib2FyZFwiLFxuICB9LFxuICBzdXBlcnZpc29yX2FkZG9uOiB7XG4gICAgcmVkaXJlY3Q6IFwiL2hhc3Npby9hZGRvblwiLFxuICAgIHBhcmFtczoge1xuICAgICAgYWRkb246IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBvcHRpb25hbF9wYXJhbXM6IHtcbiAgICAgIHJlcG9zaXRvcnlfdXJsOiBcInVybFwiLFxuICAgIH0sXG4gIH0sXG4gIHN1cGVydmlzb3JfaW5ncmVzczoge1xuICAgIHJlZGlyZWN0OiBcIi9oYXNzaW8vaW5ncmVzc1wiLFxuICAgIHBhcmFtczoge1xuICAgICAgYWRkb246IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgfSxcbiAgc3VwZXJ2aXNvcl9hZGRfYWRkb25fcmVwb3NpdG9yeToge1xuICAgIHJlZGlyZWN0OiBcIi9oYXNzaW8vc3RvcmVcIixcbiAgICBwYXJhbXM6IHtcbiAgICAgIHJlcG9zaXRvcnlfdXJsOiBcInVybFwiLFxuICAgIH0sXG4gIH0sXG59O1xuXG5AY3VzdG9tRWxlbWVudChcImhhc3Npby1teS1yZWRpcmVjdFwiKVxuY2xhc3MgSGFzc2lvTXlSZWRpcmVjdCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IGZhbHNlIH0pIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IGZhbHNlIH0pIHB1YmxpYyBzdXBlcnZpc29yITogU3VwZXJ2aXNvcjtcblxuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IGZhbHNlIH0pIHB1YmxpYyByb3V0ZSE6IFJvdXRlO1xuXG4gIEBzdGF0ZSgpIHB1YmxpYyBfZXJyb3I/OiBUZW1wbGF0ZVJlc3VsdCB8IHN0cmluZztcblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLnJvdXRlLnBhdGguc3Vic3RyKDEpO1xuICAgIGNvbnN0IHJlZGlyZWN0ID0gUkVESVJFQ1RTW3BhdGhdO1xuXG4gICAgaWYgKCFyZWRpcmVjdCkge1xuICAgICAgdGhpcy5fZXJyb3IgPSB0aGlzLnN1cGVydmlzb3IubG9jYWxpemUoXCJteS5ub3Rfc3VwcG9ydGVkXCIsIHtcbiAgICAgICAgbGluazogaHRtbGA8YVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbXkuaG9tZS1hc3Npc3RhbnQuaW8vZmFxLmh0bWwjc3VwcG9ydGVkLXBhZ2VzXCJcbiAgICAgICAgPlxuICAgICAgICAgICR7dGhpcy5zdXBlcnZpc29yLmxvY2FsaXplKFwibXkuZmFxX2xpbmtcIil9XG4gICAgICAgIDwvYT5gLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHVybDogc3RyaW5nO1xuICAgIHRyeSB7XG4gICAgICB1cmwgPSB0aGlzLl9jcmVhdGVSZWRpcmVjdFVybChyZWRpcmVjdCk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gdGhpcy5zdXBlcnZpc29yLmxvY2FsaXplKFwibXkuZXJyb3JcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmF2aWdhdGUodXJsLCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLl9lcnJvcikge1xuICAgICAgcmV0dXJuIGh0bWxgPGhhc3MtZXJyb3Itc2NyZWVuXG4gICAgICAgIC5lcnJvcj0ke3RoaXMuX2Vycm9yfVxuICAgICAgPjwvaGFzcy1lcnJvci1zY3JlZW4+YDtcbiAgICB9XG4gICAgcmV0dXJuIG5vdGhpbmc7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVSZWRpcmVjdFVybChyZWRpcmVjdDogUmVkaXJlY3QpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuX2NyZWF0ZVJlZGlyZWN0UGFyYW1zKHJlZGlyZWN0KTtcbiAgICByZXR1cm4gYCR7cmVkaXJlY3QucmVkaXJlY3R9JHtwYXJhbXN9YDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVJlZGlyZWN0UGFyYW1zKHJlZGlyZWN0OiBSZWRpcmVjdCk6IHN0cmluZyB7XG4gICAgY29uc3QgcGFyYW1zID0gZXh0cmFjdFNlYXJjaFBhcmFtc09iamVjdCgpO1xuICAgIGlmICghcmVkaXJlY3QucGFyYW1zICYmICFPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdFBhcmFtcyA9IHt9O1xuICAgIE9iamVjdC5lbnRyaWVzKHJlZGlyZWN0LnBhcmFtcyB8fCB7fSkuZm9yRWFjaCgoW2tleSwgdHlwZV0pID0+IHtcbiAgICAgIGlmICghcGFyYW1zW2tleV0gfHwgIXRoaXMuX2NoZWNrUGFyYW1UeXBlKHR5cGUsIHBhcmFtc1trZXldKSkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfVxuICAgICAgcmVzdWx0UGFyYW1zW2tleV0gPSBwYXJhbXNba2V5XTtcbiAgICB9KTtcbiAgICBPYmplY3QuZW50cmllcyhyZWRpcmVjdC5vcHRpb25hbF9wYXJhbXMgfHwge30pLmZvckVhY2goKFtrZXksIHR5cGVdKSA9PiB7XG4gICAgICBpZiAocGFyYW1zW2tleV0pIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jaGVja1BhcmFtVHlwZSh0eXBlLCBwYXJhbXNba2V5XSkpIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFBhcmFtc1trZXldID0gcGFyYW1zW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGA/JHtjcmVhdGVTZWFyY2hQYXJhbShyZXN1bHRQYXJhbXMpfWA7XG4gIH1cblxuICBwcml2YXRlIF9jaGVja1BhcmFtVHlwZSh0eXBlOiBQYXJhbVR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBcInVybFwiKSB7XG4gICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUgPT09IHNhbml0aXplVXJsKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYXNzaW8tbXktcmVkaXJlY3RcIjogSGFzc2lvTXlSZWRpcmVjdDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hassio/src/hassio-my-redirect.ts\n");

/***/ })

};
