/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
export const id = "src_panels_lovelace_entity-rows_hui-update-entity-row_ts";
export const ids = ["src_panels_lovelace_entity-rows_hui-update-entity-row_ts"];
export const modules = {

/***/ "./src/panels/lovelace/entity-rows/hui-update-entity-row.ts":
/*!******************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-update-entity-row.ts ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/decorate */ \"./node_modules/@babel/runtime/helpers/esm/decorate.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var _data_update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/update */ \"./src/data/update.ts\");\n/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/has-changed */ \"./src/panels/lovelace/common/has-changed.ts\");\n/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ \"./src/panels/lovelace/components/hui-generic-entity-row.ts\");\n/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hui-warning */ \"./src/panels/lovelace/components/hui-warning.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_5__]);\n_components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nlet HuiUpdateEntityRow = (0,_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.customElement)(\"hui-update-entity-row\")], function (_initialize, _LitElement) {\n  class HuiUpdateEntityRow extends _LitElement {\n    constructor(...args) {\n      super(...args);\n      _initialize(this);\n    }\n  }\n  return {\n    F: HuiUpdateEntityRow,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.state)()],\n      key: \"_config\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"setConfig\",\n      value: function setConfig(config) {\n        if (!config) {\n          throw new Error(\"Invalid configuration\");\n        }\n        this._config = config;\n      }\n    }, {\n      kind: \"method\",\n      key: \"shouldUpdate\",\n      value: function shouldUpdate(changedProps) {\n        return (0,_common_has_changed__WEBPACK_IMPORTED_MODULE_4__.hasConfigOrEntityChanged)(this, changedProps);\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        if (!this._config || !this.hass) {\n          return lit__WEBPACK_IMPORTED_MODULE_1__.nothing;\n        }\n        const stateObj = this.hass.states[this._config.entity];\n        if (!stateObj) {\n          return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`\n        <hui-warning>\n          ${(0,_components_hui_warning__WEBPACK_IMPORTED_MODULE_6__.createEntityNotFoundWarning)(this.hass, this._config.entity)}\n        </hui-warning>\n      `;\n        }\n        return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`\n      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>\n        ${(0,_data_update__WEBPACK_IMPORTED_MODULE_3__.computeUpdateStateDisplay)(stateObj, this.hass)}\n      </hui-generic-entity-row>\n    `;\n      }\n    }, {\n      kind: \"get\",\n      static: true,\n      key: \"styles\",\n      value: function styles() {\n        return (0,lit__WEBPACK_IMPORTED_MODULE_1__.css)`\n      div {\n        text-align: right;\n      }\n      .pointer {\n        cursor: pointer;\n      }\n    `;\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_1__.LitElement);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VudGl0eS1yb3dzL2h1aS11cGRhdGUtZW50aXR5LXJvdy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFrREE7QUFBQTtBQUFBO0FBbERBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWFzc2lzdGFudC1mcm9udGVuZC8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZW50aXR5LXJvd3MvaHVpLXVwZGF0ZS1lbnRpdHktcm93LnRzPzU2YjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ1NTUmVzdWx0R3JvdXAsXG4gIExpdEVsZW1lbnQsXG4gIFByb3BlcnR5VmFsdWVzLFxuICBjc3MsXG4gIGh0bWwsXG4gIG5vdGhpbmcsXG59IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gXCJsaXQvZGVjb3JhdG9yc1wiO1xuaW1wb3J0IHsgVXBkYXRlRW50aXR5LCBjb21wdXRlVXBkYXRlU3RhdGVEaXNwbGF5IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvdXBkYXRlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBFbnRpdGllc0NhcmRFbnRpdHlDb25maWcgfSBmcm9tIFwiLi4vY2FyZHMvdHlwZXNcIjtcbmltcG9ydCB7IGhhc0NvbmZpZ09yRW50aXR5Q2hhbmdlZCB9IGZyb20gXCIuLi9jb21tb24vaGFzLWNoYW5nZWRcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaHVpLWdlbmVyaWMtZW50aXR5LXJvd1wiO1xuaW1wb3J0IHsgY3JlYXRlRW50aXR5Tm90Rm91bmRXYXJuaW5nIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaHVpLXdhcm5pbmdcIjtcbmltcG9ydCB7IExvdmVsYWNlUm93IH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktdXBkYXRlLWVudGl0eS1yb3dcIilcbmNsYXNzIEh1aVVwZGF0ZUVudGl0eVJvdyBleHRlbmRzIExpdEVsZW1lbnQgaW1wbGVtZW50cyBMb3ZlbGFjZVJvdyB7XG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogZmFsc2UgfSkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBzdGF0ZSgpIHByaXZhdGUgX2NvbmZpZz86IEVudGl0aWVzQ2FyZEVudGl0eUNvbmZpZztcblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogRW50aXRpZXNDYXJkRW50aXR5Q29uZmlnKTogdm9pZCB7XG4gICAgaWYgKCFjb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29uZmlndXJhdGlvblwiKTtcbiAgICB9XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNob3VsZFVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGhhc0NvbmZpZ09yRW50aXR5Q2hhbmdlZCh0aGlzLCBjaGFuZ2VkUHJvcHMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm4gbm90aGluZztcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcy5zdGF0ZXNbdGhpcy5fY29uZmlnLmVudGl0eV0gYXNcbiAgICAgIHwgVXBkYXRlRW50aXR5XG4gICAgICB8IHVuZGVmaW5lZDtcblxuICAgIGlmICghc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aHVpLXdhcm5pbmc+XG4gICAgICAgICAgJHtjcmVhdGVFbnRpdHlOb3RGb3VuZFdhcm5pbmcodGhpcy5oYXNzLCB0aGlzLl9jb25maWcuZW50aXR5KX1cbiAgICAgICAgPC9odWktd2FybmluZz5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aHVpLWdlbmVyaWMtZW50aXR5LXJvdyAuaGFzcz0ke3RoaXMuaGFzc30gLmNvbmZpZz0ke3RoaXMuX2NvbmZpZ30+XG4gICAgICAgICR7Y29tcHV0ZVVwZGF0ZVN0YXRlRGlzcGxheShzdGF0ZU9iaiwgdGhpcy5oYXNzKX1cbiAgICAgIDwvaHVpLWdlbmVyaWMtZW50aXR5LXJvdz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0R3JvdXAge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBkaXYge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICAgIC5wb2ludGVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS11cGRhdGUtZW50aXR5LXJvd1wiOiBIdWlVcGRhdGVFbnRpdHlSb3c7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/panels/lovelace/entity-rows/hui-update-entity-row.ts\n");

/***/ })

};
