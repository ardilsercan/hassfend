/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
export const id = "src_panels_custom_ha-panel-custom_ts";
export const ids = ["src_panels_custom_ha-panel-custom_ts"];
export const modules = {

/***/ "./src/common/dom/load_resource.ts":
/*!*****************************************!*\
  !*** ./src/common/dom/load_resource.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadCSS: () => (/* binding */ loadCSS),\n/* harmony export */   loadImg: () => (/* binding */ loadImg),\n/* harmony export */   loadJS: () => (/* binding */ loadJS),\n/* harmony export */   loadModule: () => (/* binding */ loadModule)\n/* harmony export */ });\n// Load a resource and get a promise when loading done.\n// From: https://davidwalsh.name/javascript-loader\n\nconst _load = (tag, url, type) =>\n// This promise will be used by Promise.all to determine success or failure\nnew Promise((resolve, reject) => {\n  const element = document.createElement(tag);\n  let attr = \"src\";\n  let parent = \"body\";\n\n  // Important success and error for the promise\n  element.onload = () => resolve(url);\n  element.onerror = () => reject(url);\n\n  // Need to set different attributes depending on tag type\n  switch (tag) {\n    case \"script\":\n      element.async = true;\n      if (type) {\n        element.type = type;\n      }\n      break;\n    case \"link\":\n      element.type = \"text/css\";\n      element.rel = \"stylesheet\";\n      attr = \"href\";\n      parent = \"head\";\n  }\n\n  // Inject into document to kick off loading\n  element[attr] = url;\n  document[parent].appendChild(element);\n});\nconst loadCSS = url => _load(\"link\", url);\nconst loadJS = url => _load(\"script\", url);\nconst loadImg = url => _load(\"img\", url);\nconst loadModule = url => _load(\"script\", url, \"module\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2RvbS9sb2FkX3Jlc291cmNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvY29tbW9uL2RvbS9sb2FkX3Jlc291cmNlLnRzPzVjMzYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTG9hZCBhIHJlc291cmNlIGFuZCBnZXQgYSBwcm9taXNlIHdoZW4gbG9hZGluZyBkb25lLlxuLy8gRnJvbTogaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1sb2FkZXJcblxuY29uc3QgX2xvYWQgPSAodGFnOiBcImxpbmtcIiB8IFwic2NyaXB0XCIgfCBcImltZ1wiLCB1cmw6IHN0cmluZywgdHlwZT86IFwibW9kdWxlXCIpID0+XG4gIC8vIFRoaXMgcHJvbWlzZSB3aWxsIGJlIHVzZWQgYnkgUHJvbWlzZS5hbGwgdG8gZGV0ZXJtaW5lIHN1Y2Nlc3Mgb3IgZmFpbHVyZVxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBsZXQgYXR0ciA9IFwic3JjXCI7XG4gICAgbGV0IHBhcmVudCA9IFwiYm9keVwiO1xuXG4gICAgLy8gSW1wb3J0YW50IHN1Y2Nlc3MgYW5kIGVycm9yIGZvciB0aGUgcHJvbWlzZVxuICAgIGVsZW1lbnQub25sb2FkID0gKCkgPT4gcmVzb2x2ZSh1cmwpO1xuICAgIGVsZW1lbnQub25lcnJvciA9ICgpID0+IHJlamVjdCh1cmwpO1xuXG4gICAgLy8gTmVlZCB0byBzZXQgZGlmZmVyZW50IGF0dHJpYnV0ZXMgZGVwZW5kaW5nIG9uIHRhZyB0eXBlXG4gICAgc3dpdGNoICh0YWcpIHtcbiAgICAgIGNhc2UgXCJzY3JpcHRcIjpcbiAgICAgICAgKGVsZW1lbnQgYXMgSFRNTFNjcmlwdEVsZW1lbnQpLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAoZWxlbWVudCBhcyBIVE1MU2NyaXB0RWxlbWVudCkudHlwZSA9IHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGlua1wiOlxuICAgICAgICAoZWxlbWVudCBhcyBIVE1MTGlua0VsZW1lbnQpLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgICAgIChlbGVtZW50IGFzIEhUTUxMaW5rRWxlbWVudCkucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gICAgICAgIGF0dHIgPSBcImhyZWZcIjtcbiAgICAgICAgcGFyZW50ID0gXCJoZWFkXCI7XG4gICAgfVxuXG4gICAgLy8gSW5qZWN0IGludG8gZG9jdW1lbnQgdG8ga2ljayBvZmYgbG9hZGluZ1xuICAgIGVsZW1lbnRbYXR0cl0gPSB1cmw7XG4gICAgZG9jdW1lbnRbcGFyZW50XS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfSk7XG5leHBvcnQgY29uc3QgbG9hZENTUyA9ICh1cmw6IHN0cmluZykgPT4gX2xvYWQoXCJsaW5rXCIsIHVybCk7XG5leHBvcnQgY29uc3QgbG9hZEpTID0gKHVybDogc3RyaW5nKSA9PiBfbG9hZChcInNjcmlwdFwiLCB1cmwpO1xuZXhwb3J0IGNvbnN0IGxvYWRJbWcgPSAodXJsOiBzdHJpbmcpID0+IF9sb2FkKFwiaW1nXCIsIHVybCk7XG5leHBvcnQgY29uc3QgbG9hZE1vZHVsZSA9ICh1cmw6IHN0cmluZykgPT4gX2xvYWQoXCJzY3JpcHRcIiwgdXJsLCBcIm1vZHVsZVwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/dom/load_resource.ts\n");

/***/ }),

/***/ "./src/panels/custom/ha-panel-custom.ts":
/*!**********************************************!*\
  !*** ./src/panels/custom/ha-panel-custom.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HaPanelCustom: () => (/* binding */ HaPanelCustom)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/decorate */ \"./node_modules/@babel/runtime/helpers/esm/decorate.js\");\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/esm/get.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/navigate */ \"./src/common/navigate.ts\");\n/* harmony import */ var _common_util_deep_equal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/util/deep-equal */ \"./src/common/util/deep-equal.ts\");\n/* harmony import */ var _util_custom_panel_create_custom_panel_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/custom-panel/create-custom-panel-element */ \"./src/util/custom-panel/create-custom-panel-element.ts\");\n/* harmony import */ var _util_custom_panel_load_custom_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/custom-panel/load-custom-panel */ \"./src/util/custom-panel/load-custom-panel.ts\");\n/* harmony import */ var _util_custom_panel_set_custom_panel_properties__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../util/custom-panel/set-custom-panel-properties */ \"./src/util/custom-panel/set-custom-panel-properties.ts\");\n\n\n\n\n\n\n\n\n\n\nlet HaPanelCustom = (0,_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(null, function (_initialize, _ReactiveElement) {\n  class HaPanelCustom extends _ReactiveElement {\n    constructor(...args) {\n      super(...args);\n      _initialize(this);\n    }\n  }\n  return {\n    F: HaPanelCustom,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        type: Boolean\n      })],\n      key: \"narrow\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        attribute: false\n      })],\n      key: \"route\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        attribute: false\n      })],\n      key: \"panel\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      key: \"_setProperties\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"createRenderRoot\",\n      value: function createRenderRoot() {\n        return this;\n      }\n\n      // Since navigate fires events on `window`, we need to expose this as a function\n      // to allow custom panels to forward their location changes to the main window\n      // instead of their iframe window.\n    }, {\n      kind: \"field\",\n      key: \"navigate\",\n      value() {\n        return (path, options) => (0,_common_navigate__WEBPACK_IMPORTED_MODULE_5__.navigate)(path, options);\n      }\n    }, {\n      kind: \"method\",\n      key: \"registerIframe\",\n      value: function registerIframe(initialize, setProperties) {\n        initialize(this.panel, {\n          hass: this.hass,\n          narrow: this.narrow,\n          route: this.route\n        });\n        this._setProperties = setProperties;\n      }\n    }, {\n      kind: \"method\",\n      key: \"disconnectedCallback\",\n      value: function disconnectedCallback() {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HaPanelCustom.prototype), \"disconnectedCallback\", this).call(this);\n        this._cleanupPanel();\n      }\n    }, {\n      kind: \"method\",\n      key: \"update\",\n      value: function update(changedProps) {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HaPanelCustom.prototype), \"update\", this).call(this, changedProps);\n        if (changedProps.has(\"panel\")) {\n          // Clean up old things if we had a panel and the new one is different.\n          const oldPanel = changedProps.get(\"panel\");\n          if (!(0,_common_util_deep_equal__WEBPACK_IMPORTED_MODULE_6__.deepEqual)(oldPanel, this.panel)) {\n            if (oldPanel) {\n              this._cleanupPanel();\n            }\n            this._createPanel(this.panel);\n            return;\n          }\n        }\n        if (!this._setProperties) {\n          return;\n        }\n        const props = {};\n        // @ts-ignore\n        for (const key of changedProps.keys()) {\n          props[key] = this[key];\n        }\n        this._setProperties(props);\n      }\n    }, {\n      kind: \"method\",\n      key: \"_cleanupPanel\",\n      value: function _cleanupPanel() {\n        delete window.customPanel;\n        this._setProperties = undefined;\n        while (this.lastChild) {\n          this.removeChild(this.lastChild);\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"_createPanel\",\n      value: function _createPanel(panel) {\n        const config = panel.config._panel_custom;\n        const panelUrl = (0,_util_custom_panel_load_custom_panel__WEBPACK_IMPORTED_MODULE_8__.getUrl)(config);\n        const tempA = document.createElement(\"a\");\n        tempA.href = panelUrl.url;\n        if (!config.trust_external && ![\"localhost\", \"127.0.0.1\", location.hostname].includes(tempA.hostname)) {\n          if (!confirm(`${this.hass.localize(\"ui.panel.custom.external_panel.question_trust\", {\n            name: config.name,\n            link: tempA.href\n          })}\n\n           ${this.hass.localize(\"ui.panel.custom.external_panel.complete_access\")}\n\n           (${this.hass.localize(\"ui.panel.custom.external_panel.hide_message\")})`)) {\n            return;\n          }\n        }\n        if (!config.embed_iframe) {\n          (0,_util_custom_panel_load_custom_panel__WEBPACK_IMPORTED_MODULE_8__.loadCustomPanel)(config).then(() => {\n            const element = (0,_util_custom_panel_create_custom_panel_element__WEBPACK_IMPORTED_MODULE_7__.createCustomPanelElement)(config);\n            this._setProperties = props => (0,_util_custom_panel_set_custom_panel_properties__WEBPACK_IMPORTED_MODULE_9__.setCustomPanelProperties)(element, props);\n            (0,_util_custom_panel_set_custom_panel_properties__WEBPACK_IMPORTED_MODULE_9__.setCustomPanelProperties)(element, {\n              panel,\n              hass: this.hass,\n              narrow: this.narrow,\n              route: this.route\n            });\n            this.appendChild(element);\n          }, () => {\n            alert(`Unable to load custom panel from ${tempA.href}`);\n          });\n          return;\n        }\n        window.customPanel = this;\n        const titleAttr = this.panel.title ? `title=\"${this.panel.title}\"` : \"\";\n        this.innerHTML = `\n      <style>\n        iframe {\n          border: 0;\n          width: 100%;\n          height: 100%;\n          display: block;\n          background-color: var(--primary-background-color);\n        }\n      </style>\n      <iframe ${titleAttr}></iframe>`.trim();\n        const iframeDoc = this.querySelector(\"iframe\").contentWindow.document;\n        iframeDoc.open();\n        iframeDoc.write(`<!doctype html><script src='${window.customPanelJS}'></script>`);\n        iframeDoc.close();\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_3__.ReactiveElement);\ncustomElements.define(\"ha-panel-custom\", HaPanelCustom);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2N1c3RvbS9oYS1wYW5lbC1jdXN0b20udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJJQTtBQUFBO0FBQUE7QUEzSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFJQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWFzc2lzdGFudC1mcm9udGVuZC8uL3NyYy9wYW5lbHMvY3VzdG9tL2hhLXBhbmVsLWN1c3RvbS50cz81NjVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5VmFsdWVzLCBSZWFjdGl2ZUVsZW1lbnQgfSBmcm9tIFwibGl0XCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCJsaXQvZGVjb3JhdG9yc1wiO1xuaW1wb3J0IHsgbmF2aWdhdGUsIE5hdmlnYXRlT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9jb21tb24vbmF2aWdhdGVcIjtcbmltcG9ydCB7IGRlZXBFcXVhbCB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbC9kZWVwLWVxdWFsXCI7XG5pbXBvcnQgeyBDdXN0b21QYW5lbEluZm8gfSBmcm9tIFwiLi4vLi4vZGF0YS9wYW5lbF9jdXN0b21cIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIFJvdXRlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVDdXN0b21QYW5lbEVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbC9jdXN0b20tcGFuZWwvY3JlYXRlLWN1c3RvbS1wYW5lbC1lbGVtZW50XCI7XG5pbXBvcnQge1xuICBnZXRVcmwsXG4gIGxvYWRDdXN0b21QYW5lbCxcbn0gZnJvbSBcIi4uLy4uL3V0aWwvY3VzdG9tLXBhbmVsL2xvYWQtY3VzdG9tLXBhbmVsXCI7XG5pbXBvcnQgeyBzZXRDdXN0b21QYW5lbFByb3BlcnRpZXMgfSBmcm9tIFwiLi4vLi4vdXRpbC9jdXN0b20tcGFuZWwvc2V0LWN1c3RvbS1wYW5lbC1wcm9wZXJ0aWVzXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1wYW5lbC1jdXN0b21cIjogSGFQYW5lbEN1c3RvbTtcbiAgfVxuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBjdXN0b21QYW5lbDogSGFQYW5lbEN1c3RvbSB8IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSGFQYW5lbEN1c3RvbSBleHRlbmRzIFJlYWN0aXZlRWxlbWVudCB7XG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogZmFsc2UgfSkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIG5hcnJvdyA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogZmFsc2UgfSkgcHVibGljIHJvdXRlITogUm91dGU7XG5cbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBmYWxzZSB9KSBwdWJsaWMgcGFuZWwhOiBDdXN0b21QYW5lbEluZm87XG5cbiAgcHJpdmF0ZSBfc2V0UHJvcGVydGllcz86IChwcm9wczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IHZvaWQgfCB1bmRlZmluZWQ7XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVJlbmRlclJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBTaW5jZSBuYXZpZ2F0ZSBmaXJlcyBldmVudHMgb24gYHdpbmRvd2AsIHdlIG5lZWQgdG8gZXhwb3NlIHRoaXMgYXMgYSBmdW5jdGlvblxuICAvLyB0byBhbGxvdyBjdXN0b20gcGFuZWxzIHRvIGZvcndhcmQgdGhlaXIgbG9jYXRpb24gY2hhbmdlcyB0byB0aGUgbWFpbiB3aW5kb3dcbiAgLy8gaW5zdGVhZCBvZiB0aGVpciBpZnJhbWUgd2luZG93LlxuICBwdWJsaWMgbmF2aWdhdGUgPSAocGF0aDogc3RyaW5nLCBvcHRpb25zPzogTmF2aWdhdGVPcHRpb25zKSA9PlxuICAgIG5hdmlnYXRlKHBhdGgsIG9wdGlvbnMpO1xuXG4gIHB1YmxpYyByZWdpc3RlcklmcmFtZShpbml0aWFsaXplLCBzZXRQcm9wZXJ0aWVzKSB7XG4gICAgaW5pdGlhbGl6ZSh0aGlzLnBhbmVsLCB7XG4gICAgICBoYXNzOiB0aGlzLmhhc3MsXG4gICAgICBuYXJyb3c6IHRoaXMubmFycm93LFxuICAgICAgcm91dGU6IHRoaXMucm91dGUsXG4gICAgfSk7XG4gICAgdGhpcy5fc2V0UHJvcGVydGllcyA9IHNldFByb3BlcnRpZXM7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9jbGVhbnVwUGFuZWwoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGUoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcHMpO1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwicGFuZWxcIikpIHtcbiAgICAgIC8vIENsZWFuIHVwIG9sZCB0aGluZ3MgaWYgd2UgaGFkIGEgcGFuZWwgYW5kIHRoZSBuZXcgb25lIGlzIGRpZmZlcmVudC5cbiAgICAgIGNvbnN0IG9sZFBhbmVsID0gY2hhbmdlZFByb3BzLmdldChcInBhbmVsXCIpIGFzIEN1c3RvbVBhbmVsSW5mbyB8IHVuZGVmaW5lZDtcbiAgICAgIGlmICghZGVlcEVxdWFsKG9sZFBhbmVsLCB0aGlzLnBhbmVsKSkge1xuICAgICAgICBpZiAob2xkUGFuZWwpIHtcbiAgICAgICAgICB0aGlzLl9jbGVhbnVwUGFuZWwoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jcmVhdGVQYW5lbCh0aGlzLnBhbmVsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuX3NldFByb3BlcnRpZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSB7fTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZm9yIChjb25zdCBrZXkgb2YgY2hhbmdlZFByb3BzLmtleXMoKSkge1xuICAgICAgcHJvcHNba2V5XSA9IHRoaXNba2V5XTtcbiAgICB9XG4gICAgdGhpcy5fc2V0UHJvcGVydGllcyhwcm9wcyk7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhbnVwUGFuZWwoKSB7XG4gICAgZGVsZXRlIHdpbmRvdy5jdXN0b21QYW5lbDtcbiAgICB0aGlzLl9zZXRQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgIHdoaWxlICh0aGlzLmxhc3RDaGlsZCkge1xuICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlUGFuZWwocGFuZWw6IEN1c3RvbVBhbmVsSW5mbykge1xuICAgIGNvbnN0IGNvbmZpZyA9IHBhbmVsLmNvbmZpZyEuX3BhbmVsX2N1c3RvbTtcbiAgICBjb25zdCBwYW5lbFVybCA9IGdldFVybChjb25maWcpO1xuXG4gICAgY29uc3QgdGVtcEEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICB0ZW1wQS5ocmVmID0gcGFuZWxVcmwudXJsO1xuXG4gICAgaWYgKFxuICAgICAgIWNvbmZpZy50cnVzdF9leHRlcm5hbCAmJlxuICAgICAgIVtcImxvY2FsaG9zdFwiLCBcIjEyNy4wLjAuMVwiLCBsb2NhdGlvbi5ob3N0bmFtZV0uaW5jbHVkZXModGVtcEEuaG9zdG5hbWUpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjb25maXJtKFxuICAgICAgICAgIGAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY3VzdG9tLmV4dGVybmFsX3BhbmVsLnF1ZXN0aW9uX3RydXN0XCIsXG4gICAgICAgICAgICB7IG5hbWU6IGNvbmZpZy5uYW1lLCBsaW5rOiB0ZW1wQS5ocmVmIH1cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgIFwidWkucGFuZWwuY3VzdG9tLmV4dGVybmFsX3BhbmVsLmNvbXBsZXRlX2FjY2Vzc1wiXG4gICAgICAgICAgICl9XG5cbiAgICAgICAgICAgKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgIFwidWkucGFuZWwuY3VzdG9tLmV4dGVybmFsX3BhbmVsLmhpZGVfbWVzc2FnZVwiXG4gICAgICAgICAgICl9KWBcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNvbmZpZy5lbWJlZF9pZnJhbWUpIHtcbiAgICAgIGxvYWRDdXN0b21QYW5lbChjb25maWcpLnRoZW4oXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ3VzdG9tUGFuZWxFbGVtZW50KGNvbmZpZyk7XG4gICAgICAgICAgdGhpcy5fc2V0UHJvcGVydGllcyA9IChwcm9wcykgPT5cbiAgICAgICAgICAgIHNldEN1c3RvbVBhbmVsUHJvcGVydGllcyhlbGVtZW50LCBwcm9wcyk7XG4gICAgICAgICAgc2V0Q3VzdG9tUGFuZWxQcm9wZXJ0aWVzKGVsZW1lbnQsIHtcbiAgICAgICAgICAgIHBhbmVsLFxuICAgICAgICAgICAgaGFzczogdGhpcy5oYXNzLFxuICAgICAgICAgICAgbmFycm93OiB0aGlzLm5hcnJvdyxcbiAgICAgICAgICAgIHJvdXRlOiB0aGlzLnJvdXRlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBhbGVydChgVW5hYmxlIHRvIGxvYWQgY3VzdG9tIHBhbmVsIGZyb20gJHt0ZW1wQS5ocmVmfWApO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5jdXN0b21QYW5lbCA9IHRoaXM7XG4gICAgY29uc3QgdGl0bGVBdHRyID0gdGhpcy5wYW5lbC50aXRsZSA/IGB0aXRsZT1cIiR7dGhpcy5wYW5lbC50aXRsZX1cImAgOiBcIlwiO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBpZnJhbWUge1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxpZnJhbWUgJHt0aXRsZUF0dHJ9PjwvaWZyYW1lPmAudHJpbSgpO1xuICAgIGNvbnN0IGlmcmFtZURvYyA9IHRoaXMucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKSEuY29udGVudFdpbmRvdyEuZG9jdW1lbnQ7XG4gICAgaWZyYW1lRG9jLm9wZW4oKTtcbiAgICBpZnJhbWVEb2Mud3JpdGUoXG4gICAgICBgPCFkb2N0eXBlIGh0bWw+PHNjcmlwdCBzcmM9JyR7d2luZG93LmN1c3RvbVBhbmVsSlN9Jz48L3NjcmlwdD5gXG4gICAgKTtcbiAgICBpZnJhbWVEb2MuY2xvc2UoKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYW5lbC1jdXN0b21cIiwgSGFQYW5lbEN1c3RvbSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/panels/custom/ha-panel-custom.ts\n");

/***/ }),

/***/ "./src/util/custom-panel/create-custom-panel-element.ts":
/*!**************************************************************!*\
  !*** ./src/util/custom-panel/create-custom-panel-element.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCustomPanelElement: () => (/* binding */ createCustomPanelElement)\n/* harmony export */ });\nconst createCustomPanelElement = panelConfig => {\n  // Legacy support. Custom panels used to have to define element ha-panel-{name}\n  const tagName = \"html_url\" in panelConfig ? `ha-panel-${panelConfig.name}` : panelConfig.name;\n  return document.createElement(tagName);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC9jdXN0b20tcGFuZWwvY3JlYXRlLWN1c3RvbS1wYW5lbC1lbGVtZW50LnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvdXRpbC9jdXN0b20tcGFuZWwvY3JlYXRlLWN1c3RvbS1wYW5lbC1lbGVtZW50LnRzP2RkZmUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNyZWF0ZUN1c3RvbVBhbmVsRWxlbWVudCA9IChwYW5lbENvbmZpZykgPT4ge1xuICAvLyBMZWdhY3kgc3VwcG9ydC4gQ3VzdG9tIHBhbmVscyB1c2VkIHRvIGhhdmUgdG8gZGVmaW5lIGVsZW1lbnQgaGEtcGFuZWwte25hbWV9XG4gIGNvbnN0IHRhZ05hbWUgPVxuICAgIFwiaHRtbF91cmxcIiBpbiBwYW5lbENvbmZpZ1xuICAgICAgPyBgaGEtcGFuZWwtJHtwYW5lbENvbmZpZy5uYW1lfWBcbiAgICAgIDogcGFuZWxDb25maWcubmFtZTtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/util/custom-panel/create-custom-panel-element.ts\n");

/***/ }),

/***/ "./src/util/custom-panel/load-custom-panel.ts":
/*!****************************************************!*\
  !*** ./src/util/custom-panel/load-custom-panel.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUrl: () => (/* binding */ getUrl),\n/* harmony export */   loadCustomPanel: () => (/* binding */ loadCustomPanel)\n/* harmony export */ });\n/* harmony import */ var _common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/load_resource */ \"./src/common/dom/load_resource.ts\");\n\n// Make sure we only import every JS-based panel once (HTML import has this built-in)\nconst JS_CACHE = {};\nconst getUrl = panelConfig => {\n  if (panelConfig.html_url) {\n    return {\n      type: \"html\",\n      url: panelConfig.html_url\n    };\n  }\n\n  // if both module and JS provided, base url on frontend build\n  if (panelConfig.module_url && panelConfig.js_url) {\n    if (true) {\n      return {\n        type: \"module\",\n        url: panelConfig.module_url\n      };\n    }\n    return {\n      type: \"js\",\n      url: panelConfig.js_url\n    };\n  }\n  if (panelConfig.module_url) {\n    return {\n      type: \"module\",\n      url: panelConfig.module_url\n    };\n  }\n  return {\n    type: \"js\",\n    url: panelConfig.js_url\n  };\n};\nconst loadCustomPanel = panelConfig => {\n  const panelSource = getUrl(panelConfig);\n  if (panelSource.type === \"js\") {\n    if (!(panelSource.url in JS_CACHE)) {\n      JS_CACHE[panelSource.url] = (0,_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__.loadJS)(panelSource.url);\n    }\n    return JS_CACHE[panelSource.url];\n  }\n  if (panelSource.type === \"module\") {\n    return (0,_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__.loadModule)(panelSource.url);\n  }\n  return Promise.reject(\"No valid url found in panel config.\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC9jdXN0b20tcGFuZWwvbG9hZC1jdXN0b20tcGFuZWwudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWFzc2lzdGFudC1mcm9udGVuZC8uL3NyYy91dGlsL2N1c3RvbS1wYW5lbC9sb2FkLWN1c3RvbS1wYW5lbC50cz82YzUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRKUywgbG9hZE1vZHVsZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2xvYWRfcmVzb3VyY2VcIjtcbmltcG9ydCB7IEN1c3RvbVBhbmVsQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2RhdGEvcGFuZWxfY3VzdG9tXCI7XG5cbi8vIE1ha2Ugc3VyZSB3ZSBvbmx5IGltcG9ydCBldmVyeSBKUy1iYXNlZCBwYW5lbCBvbmNlIChIVE1MIGltcG9ydCBoYXMgdGhpcyBidWlsdC1pbilcbmNvbnN0IEpTX0NBQ0hFID0ge307XG5cbmV4cG9ydCBjb25zdCBnZXRVcmwgPSAoXG4gIHBhbmVsQ29uZmlnOiBDdXN0b21QYW5lbENvbmZpZ1xuKTogeyB0eXBlOiBcIm1vZHVsZVwiIHwgXCJodG1sXCIgfCBcImpzXCI7IHVybDogc3RyaW5nIH0gPT4ge1xuICBpZiAocGFuZWxDb25maWcuaHRtbF91cmwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJodG1sXCIsXG4gICAgICB1cmw6IHBhbmVsQ29uZmlnLmh0bWxfdXJsLFxuICAgIH07XG4gIH1cblxuICAvLyBpZiBib3RoIG1vZHVsZSBhbmQgSlMgcHJvdmlkZWQsIGJhc2UgdXJsIG9uIGZyb250ZW5kIGJ1aWxkXG4gIGlmIChwYW5lbENvbmZpZy5tb2R1bGVfdXJsICYmIHBhbmVsQ29uZmlnLmpzX3VybCkge1xuICAgIGlmIChfX0JVSUxEX18gPT09IFwibGF0ZXN0XCIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibW9kdWxlXCIsXG4gICAgICAgIHVybDogcGFuZWxDb25maWcubW9kdWxlX3VybCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwianNcIixcbiAgICAgIHVybDogcGFuZWxDb25maWcuanNfdXJsLFxuICAgIH07XG4gIH1cblxuICBpZiAocGFuZWxDb25maWcubW9kdWxlX3VybCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcIm1vZHVsZVwiLFxuICAgICAgdXJsOiBwYW5lbENvbmZpZy5tb2R1bGVfdXJsLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IFwianNcIixcbiAgICB1cmw6IHBhbmVsQ29uZmlnLmpzX3VybCEsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZEN1c3RvbVBhbmVsID0gKFxuICBwYW5lbENvbmZpZzogQ3VzdG9tUGFuZWxDb25maWdcbik6IFByb21pc2U8dW5rbm93bj4gPT4ge1xuICBjb25zdCBwYW5lbFNvdXJjZSA9IGdldFVybChwYW5lbENvbmZpZyk7XG5cbiAgaWYgKHBhbmVsU291cmNlLnR5cGUgPT09IFwianNcIikge1xuICAgIGlmICghKHBhbmVsU291cmNlLnVybCBpbiBKU19DQUNIRSkpIHtcbiAgICAgIEpTX0NBQ0hFW3BhbmVsU291cmNlLnVybF0gPSBsb2FkSlMocGFuZWxTb3VyY2UudXJsKTtcbiAgICB9XG4gICAgcmV0dXJuIEpTX0NBQ0hFW3BhbmVsU291cmNlLnVybF07XG4gIH1cbiAgaWYgKHBhbmVsU291cmNlLnR5cGUgPT09IFwibW9kdWxlXCIpIHtcbiAgICByZXR1cm4gbG9hZE1vZHVsZShwYW5lbFNvdXJjZS51cmwpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlamVjdChcIk5vIHZhbGlkIHVybCBmb3VuZCBpbiBwYW5lbCBjb25maWcuXCIpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/util/custom-panel/load-custom-panel.ts\n");

/***/ }),

/***/ "./src/util/custom-panel/set-custom-panel-properties.ts":
/*!**************************************************************!*\
  !*** ./src/util/custom-panel/set-custom-panel-properties.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setCustomPanelProperties: () => (/* binding */ setCustomPanelProperties)\n/* harmony export */ });\nconst setCustomPanelProperties = (root, properties) => {\n  if (\"setProperties\" in root) {\n    root.setProperties(properties);\n  } else {\n    Object.keys(properties).forEach(key => {\n      root[key] = properties[key];\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC9jdXN0b20tcGFuZWwvc2V0LWN1c3RvbS1wYW5lbC1wcm9wZXJ0aWVzLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWFzc2lzdGFudC1mcm9udGVuZC8uL3NyYy91dGlsL2N1c3RvbS1wYW5lbC9zZXQtY3VzdG9tLXBhbmVsLXByb3BlcnRpZXMudHM/ODQwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0Q3VzdG9tUGFuZWxQcm9wZXJ0aWVzID0gKHJvb3QsIHByb3BlcnRpZXMpID0+IHtcbiAgaWYgKFwic2V0UHJvcGVydGllc1wiIGluIHJvb3QpIHtcbiAgICByb290LnNldFByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH0gZWxzZSB7XG4gICAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICByb290W2tleV0gPSBwcm9wZXJ0aWVzW2tleV07XG4gICAgfSk7XG4gIH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/util/custom-panel/set-custom-panel-properties.ts\n");

/***/ })

};
