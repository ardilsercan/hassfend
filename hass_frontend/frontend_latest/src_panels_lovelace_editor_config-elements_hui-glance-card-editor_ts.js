/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
export const id = "src_panels_lovelace_editor_config-elements_hui-glance-card-editor_ts";
export const ids = ["src_panels_lovelace_editor_config-elements_hui-glance-card-editor_ts"];
export const modules = {

/***/ "./src/panels/lovelace/components/types.ts":
/*!*************************************************!*\
  !*** ./src/panels/lovelace/components/types.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TIMESTAMP_RENDERING_FORMATS: () => (/* binding */ TIMESTAMP_RENDERING_FORMATS)\n/* harmony export */ });\nconst TIMESTAMP_RENDERING_FORMATS = [\"relative\", \"total\", \"date\", \"time\", \"datetime\"];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbXBvbmVudHMvdHlwZXMudHMiLCJtYXBwaW5ncyI6Ijs7OztBQVNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbXBvbmVudHMvdHlwZXMudHM/MWM4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb3ZlbGFjZUNhcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZS9jb25maWcvY2FyZFwiO1xuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSBcIi4uL2NvbW1vbi92YWxpZGF0ZS1jb25kaXRpb25cIjtcbmltcG9ydCB7IExvdmVsYWNlRWxlbWVudENvbmZpZyB9IGZyb20gXCIuLi9lbGVtZW50cy90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmRpdGlvbmFsQmFzZUNvbmZpZyBleHRlbmRzIExvdmVsYWNlQ2FyZENvbmZpZyB7XG4gIGNhcmQ6IExvdmVsYWNlQ2FyZENvbmZpZyB8IExvdmVsYWNlRWxlbWVudENvbmZpZztcbiAgY29uZGl0aW9uczogQ29uZGl0aW9uW107XG59XG5cbmV4cG9ydCBjb25zdCBUSU1FU1RBTVBfUkVOREVSSU5HX0ZPUk1BVFMgPSBbXG4gIFwicmVsYXRpdmVcIixcbiAgXCJ0b3RhbFwiLFxuICBcImRhdGVcIixcbiAgXCJ0aW1lXCIsXG4gIFwiZGF0ZXRpbWVcIixcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIFRpbWVzdGFtcFJlbmRlcmluZ0Zvcm1hdCA9XG4gICh0eXBlb2YgVElNRVNUQU1QX1JFTkRFUklOR19GT1JNQVRTKVtudW1iZXJdO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/panels/lovelace/components/types.ts\n");

/***/ }),

/***/ "./src/panels/lovelace/editor/config-elements/hui-glance-card-editor.ts":
/*!******************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/hui-glance-card-editor.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HuiGlanceCardEditor: () => (/* binding */ HuiGlanceCardEditor)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/decorate */ \"./node_modules/@babel/runtime/helpers/esm/decorate.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var superstruct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! superstruct */ \"./node_modules/superstruct/dist/index.mjs\");\n/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ \"./src/common/dom/fire_event.ts\");\n/* harmony import */ var _components_ha_form_ha_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-form/ha-form */ \"./src/components/ha-form/ha-form.ts\");\n/* harmony import */ var _components_hui_entity_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hui-entity-editor */ \"./src/panels/lovelace/components/hui-entity-editor.ts\");\n/* harmony import */ var _process_editor_entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../process-editor-entities */ \"./src/panels/lovelace/editor/process-editor-entities.ts\");\n/* harmony import */ var _structs_base_card_struct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../structs/base-card-struct */ \"./src/panels/lovelace/editor/structs/base-card-struct.ts\");\n/* harmony import */ var _structs_entities_struct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../structs/entities-struct */ \"./src/panels/lovelace/editor/structs/entities-struct.ts\");\n\n\n\n\n\n\n\n\n\n\nconst cardConfigStruct = (0,superstruct__WEBPACK_IMPORTED_MODULE_9__.assign)(_structs_base_card_struct__WEBPACK_IMPORTED_MODULE_7__.baseLovelaceCardConfig, (0,superstruct__WEBPACK_IMPORTED_MODULE_9__.object)({\n  title: (0,superstruct__WEBPACK_IMPORTED_MODULE_9__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_9__.union)([(0,superstruct__WEBPACK_IMPORTED_MODULE_9__.string)(), (0,superstruct__WEBPACK_IMPORTED_MODULE_9__.number)()])),\n  theme: (0,superstruct__WEBPACK_IMPORTED_MODULE_9__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_9__.string)()),\n  columns: (0,superstruct__WEBPACK_IMPORTED_MODULE_9__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_9__.number)()),\n  show_name: (0,superstruct__WEBPACK_IMPORTED_MODULE_9__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_9__.boolean)()),\n  show_state: (0,superstruct__WEBPACK_IMPORTED_MODULE_9__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_9__.boolean)()),\n  show_icon: (0,superstruct__WEBPACK_IMPORTED_MODULE_9__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_9__.boolean)()),\n  state_color: (0,superstruct__WEBPACK_IMPORTED_MODULE_9__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_9__.boolean)()),\n  entities: (0,superstruct__WEBPACK_IMPORTED_MODULE_9__.array)(_structs_entities_struct__WEBPACK_IMPORTED_MODULE_8__.entitiesConfigStruct)\n}));\nconst SCHEMA = [{\n  name: \"title\",\n  selector: {\n    text: {}\n  }\n}, {\n  name: \"\",\n  type: \"grid\",\n  schema: [{\n    name: \"columns\",\n    selector: {\n      number: {\n        min: 1,\n        mode: \"box\"\n      }\n    }\n  }, {\n    name: \"theme\",\n    selector: {\n      theme: {}\n    }\n  }]\n}, {\n  name: \"\",\n  type: \"grid\",\n  column_min_width: \"100px\",\n  schema: [{\n    name: \"show_name\",\n    selector: {\n      boolean: {}\n    }\n  }, {\n    name: \"show_icon\",\n    selector: {\n      boolean: {}\n    }\n  }, {\n    name: \"show_state\",\n    selector: {\n      boolean: {}\n    }\n  }]\n}, {\n  name: \"state_color\",\n  selector: {\n    boolean: {}\n  }\n}];\nlet HuiGlanceCardEditor = (0,_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.customElement)(\"hui-glance-card-editor\")], function (_initialize, _LitElement) {\n  class HuiGlanceCardEditor extends _LitElement {\n    constructor(...args) {\n      super(...args);\n      _initialize(this);\n    }\n  }\n  return {\n    F: HuiGlanceCardEditor,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.state)()],\n      key: \"_config\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.state)()],\n      key: \"_configEntities\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"setConfig\",\n      value: function setConfig(config) {\n        (0,superstruct__WEBPACK_IMPORTED_MODULE_9__.assert)(config, cardConfigStruct);\n        this._config = config;\n        this._configEntities = (0,_process_editor_entities__WEBPACK_IMPORTED_MODULE_6__.processEditorEntities)(config.entities);\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        if (!this.hass || !this._config) {\n          return lit__WEBPACK_IMPORTED_MODULE_1__.nothing;\n        }\n        const data = {\n          show_name: true,\n          show_icon: true,\n          show_state: true,\n          ...this._config\n        };\n        return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`\n      <ha-form\n        .hass=${this.hass}\n        .data=${data}\n        .schema=${SCHEMA}\n        .computeLabel=${this._computeLabelCallback}\n        @value-changed=${this._valueChanged}\n      ></ha-form>\n      <hui-entity-editor\n        .hass=${this.hass}\n        .entities=${this._configEntities}\n        @entities-changed=${this._entitiesChanged}\n      ></hui-entity-editor>\n    `;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_valueChanged\",\n      value: function _valueChanged(ev) {\n        const config = ev.detail.value;\n        (0,_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__.fireEvent)(this, \"config-changed\", {\n          config\n        });\n      }\n    }, {\n      kind: \"method\",\n      key: \"_entitiesChanged\",\n      value: function _entitiesChanged(ev) {\n        let config = this._config;\n        config = {\n          ...config,\n          entities: ev.detail.entities\n        };\n        this._configEntities = (0,_process_editor_entities__WEBPACK_IMPORTED_MODULE_6__.processEditorEntities)(this._config.entities);\n        (0,_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__.fireEvent)(this, \"config-changed\", {\n          config\n        });\n      }\n    }, {\n      kind: \"field\",\n      key: \"_computeLabelCallback\",\n      value() {\n        return schema => {\n          switch (schema.name) {\n            case \"theme\":\n              return `${this.hass.localize(\"ui.panel.lovelace.editor.card.generic.theme\")} (${this.hass.localize(\"ui.panel.lovelace.editor.card.config.optional\")})`;\n            case \"columns\":\n              return this.hass.localize(`ui.panel.lovelace.editor.card.glance.${schema.name}`);\n            default:\n              return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${schema.name}`);\n          }\n        };\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_1__.LitElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jb25maWctZWxlbWVudHMvaHVpLWdsYW5jZS1jYXJkLWVkaXRvci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQXdFQTtBQUFBO0FBQUE7QUEzRUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWFzc2lzdGFudC1mcm9udGVuZC8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL2NvbmZpZy1lbGVtZW50cy9odWktZ2xhbmNlLWNhcmQtZWRpdG9yLnRzP2JjYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCwgbm90aGluZyB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gXCJsaXQvZGVjb3JhdG9yc1wiO1xuaW1wb3J0IHtcbiAgYXJyYXksXG4gIGFzc2VydCxcbiAgYXNzaWduLFxuICBib29sZWFuLFxuICBudW1iZXIsXG4gIG9iamVjdCxcbiAgb3B0aW9uYWwsXG4gIHN0cmluZyxcbiAgdW5pb24sXG59IGZyb20gXCJzdXBlcnN0cnVjdFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mb3JtL2hhLWZvcm1cIjtcbmltcG9ydCB0eXBlIHsgU2NoZW1hVW5pb24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mb3JtL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENvbmZpZ0VudGl0eSwgR2xhbmNlQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi9jYXJkcy90eXBlc1wiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktZW50aXR5LWVkaXRvclwiO1xuaW1wb3J0IHR5cGUgeyBMb3ZlbGFjZUNhcmRFZGl0b3IgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHByb2Nlc3NFZGl0b3JFbnRpdGllcyB9IGZyb20gXCIuLi9wcm9jZXNzLWVkaXRvci1lbnRpdGllc1wiO1xuaW1wb3J0IHsgYmFzZUxvdmVsYWNlQ2FyZENvbmZpZyB9IGZyb20gXCIuLi9zdHJ1Y3RzL2Jhc2UtY2FyZC1zdHJ1Y3RcIjtcbmltcG9ydCB7IGVudGl0aWVzQ29uZmlnU3RydWN0IH0gZnJvbSBcIi4uL3N0cnVjdHMvZW50aXRpZXMtc3RydWN0XCI7XG5cbmNvbnN0IGNhcmRDb25maWdTdHJ1Y3QgPSBhc3NpZ24oXG4gIGJhc2VMb3ZlbGFjZUNhcmRDb25maWcsXG4gIG9iamVjdCh7XG4gICAgdGl0bGU6IG9wdGlvbmFsKHVuaW9uKFtzdHJpbmcoKSwgbnVtYmVyKCldKSksXG4gICAgdGhlbWU6IG9wdGlvbmFsKHN0cmluZygpKSxcbiAgICBjb2x1bW5zOiBvcHRpb25hbChudW1iZXIoKSksXG4gICAgc2hvd19uYW1lOiBvcHRpb25hbChib29sZWFuKCkpLFxuICAgIHNob3dfc3RhdGU6IG9wdGlvbmFsKGJvb2xlYW4oKSksXG4gICAgc2hvd19pY29uOiBvcHRpb25hbChib29sZWFuKCkpLFxuICAgIHN0YXRlX2NvbG9yOiBvcHRpb25hbChib29sZWFuKCkpLFxuICAgIGVudGl0aWVzOiBhcnJheShlbnRpdGllc0NvbmZpZ1N0cnVjdCksXG4gIH0pXG4pO1xuXG5jb25zdCBTQ0hFTUEgPSBbXG4gIHsgbmFtZTogXCJ0aXRsZVwiLCBzZWxlY3RvcjogeyB0ZXh0OiB7fSB9IH0sXG4gIHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIHR5cGU6IFwiZ3JpZFwiLFxuICAgIHNjaGVtYTogW1xuICAgICAgeyBuYW1lOiBcImNvbHVtbnNcIiwgc2VsZWN0b3I6IHsgbnVtYmVyOiB7IG1pbjogMSwgbW9kZTogXCJib3hcIiB9IH0gfSxcbiAgICAgIHsgbmFtZTogXCJ0aGVtZVwiLCBzZWxlY3RvcjogeyB0aGVtZToge30gfSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIHR5cGU6IFwiZ3JpZFwiLFxuICAgIGNvbHVtbl9taW5fd2lkdGg6IFwiMTAwcHhcIixcbiAgICBzY2hlbWE6IFtcbiAgICAgIHsgbmFtZTogXCJzaG93X25hbWVcIiwgc2VsZWN0b3I6IHsgYm9vbGVhbjoge30gfSB9LFxuICAgICAgeyBuYW1lOiBcInNob3dfaWNvblwiLCBzZWxlY3RvcjogeyBib29sZWFuOiB7fSB9IH0sXG4gICAgICB7IG5hbWU6IFwic2hvd19zdGF0ZVwiLCBzZWxlY3RvcjogeyBib29sZWFuOiB7fSB9IH0sXG4gICAgXSxcbiAgfSxcbiAgeyBuYW1lOiBcInN0YXRlX2NvbG9yXCIsIHNlbGVjdG9yOiB7IGJvb2xlYW46IHt9IH0gfSxcbl0gYXMgY29uc3Q7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWdsYW5jZS1jYXJkLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aUdsYW5jZUNhcmRFZGl0b3JcbiAgZXh0ZW5kcyBMaXRFbGVtZW50XG4gIGltcGxlbWVudHMgTG92ZWxhY2VDYXJkRWRpdG9yXG57XG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogZmFsc2UgfSkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBzdGF0ZSgpIHByaXZhdGUgX2NvbmZpZz86IEdsYW5jZUNhcmRDb25maWc7XG5cbiAgQHN0YXRlKCkgcHJpdmF0ZSBfY29uZmlnRW50aXRpZXM/OiBDb25maWdFbnRpdHlbXTtcblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogR2xhbmNlQ2FyZENvbmZpZyk6IHZvaWQge1xuICAgIGFzc2VydChjb25maWcsIGNhcmRDb25maWdTdHJ1Y3QpO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLl9jb25maWdFbnRpdGllcyA9IHByb2Nlc3NFZGl0b3JFbnRpdGllcyhjb25maWcuZW50aXRpZXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm4gbm90aGluZztcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc2hvd19uYW1lOiB0cnVlLFxuICAgICAgc2hvd19pY29uOiB0cnVlLFxuICAgICAgc2hvd19zdGF0ZTogdHJ1ZSxcbiAgICAgIC4uLnRoaXMuX2NvbmZpZyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtZm9ybVxuICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgLmRhdGE9JHtkYXRhfVxuICAgICAgICAuc2NoZW1hPSR7U0NIRU1BfVxuICAgICAgICAuY29tcHV0ZUxhYmVsPSR7dGhpcy5fY29tcHV0ZUxhYmVsQ2FsbGJhY2t9XG4gICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgPjwvaGEtZm9ybT5cbiAgICAgIDxodWktZW50aXR5LWVkaXRvclxuICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgLmVudGl0aWVzPSR7dGhpcy5fY29uZmlnRW50aXRpZXN9XG4gICAgICAgIEBlbnRpdGllcy1jaGFuZ2VkPSR7dGhpcy5fZW50aXRpZXNDaGFuZ2VkfVxuICAgICAgPjwvaHVpLWVudGl0eS1lZGl0b3I+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjb25maWcgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiY29uZmlnLWNoYW5nZWRcIiwgeyBjb25maWcgfSk7XG4gIH1cblxuICBwcml2YXRlIF9lbnRpdGllc0NoYW5nZWQoZXY6IEN1c3RvbUV2ZW50KTogdm9pZCB7XG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuX2NvbmZpZyE7XG4gICAgY29uZmlnID0geyAuLi5jb25maWcsIGVudGl0aWVzOiBldi5kZXRhaWwuZW50aXRpZXMhIH07XG5cbiAgICB0aGlzLl9jb25maWdFbnRpdGllcyA9IHByb2Nlc3NFZGl0b3JFbnRpdGllcyh0aGlzLl9jb25maWchLmVudGl0aWVzKTtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVMYWJlbENhbGxiYWNrID0gKHNjaGVtYTogU2NoZW1hVW5pb248dHlwZW9mIFNDSEVNQT4pID0+IHtcbiAgICBzd2l0Y2ggKHNjaGVtYS5uYW1lKSB7XG4gICAgICBjYXNlIFwidGhlbWVcIjpcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLnRoZW1lXCJcbiAgICAgICAgKX0gKCR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICl9KWA7XG4gICAgICBjYXNlIFwiY29sdW1uc1wiOlxuICAgICAgICByZXR1cm4gdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICBgdWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2xhbmNlLiR7c2NoZW1hLm5hbWV9YFxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgYHVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMuJHtzY2hlbWEubmFtZX1gXG4gICAgICAgICk7XG4gICAgfVxuICB9O1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWdsYW5jZS1jYXJkLWVkaXRvclwiOiBIdWlHbGFuY2VDYXJkRWRpdG9yO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/panels/lovelace/editor/config-elements/hui-glance-card-editor.ts\n");

/***/ }),

/***/ "./src/panels/lovelace/editor/structs/action-struct.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/editor/structs/action-struct.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   actionConfigStruct: () => (/* binding */ actionConfigStruct),\n/* harmony export */   actionConfigStructType: () => (/* binding */ actionConfigStructType)\n/* harmony export */ });\n/* harmony import */ var superstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superstruct */ \"./node_modules/superstruct/dist/index.mjs\");\n\nconst actionConfigStructUser = (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.object)({\n  user: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.string)()\n});\nconst actionConfigStructConfirmation = (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.union)([(0,superstruct__WEBPACK_IMPORTED_MODULE_0__.boolean)(), (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.object)({\n  text: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_0__.string)()),\n  excemptions: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_0__.array)(actionConfigStructUser))\n})]);\nconst actionConfigStructUrl = (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.object)({\n  action: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.literal)(\"url\"),\n  url_path: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.string)(),\n  confirmation: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.optional)(actionConfigStructConfirmation)\n});\nconst actionConfigStructService = (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.object)({\n  action: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.literal)(\"call-service\"),\n  service: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.string)(),\n  service_data: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_0__.object)()),\n  data: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_0__.object)()),\n  target: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_0__.object)({\n    entity_id: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_0__.union)([(0,superstruct__WEBPACK_IMPORTED_MODULE_0__.string)(), (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_0__.string)())])),\n    device_id: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_0__.union)([(0,superstruct__WEBPACK_IMPORTED_MODULE_0__.string)(), (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_0__.string)())])),\n    area_id: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_0__.union)([(0,superstruct__WEBPACK_IMPORTED_MODULE_0__.string)(), (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_0__.string)())]))\n  })),\n  confirmation: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.optional)(actionConfigStructConfirmation)\n});\nconst actionConfigStructNavigate = (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.object)({\n  action: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.literal)(\"navigate\"),\n  navigation_path: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.string)(),\n  navigation_replace: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_0__.boolean)()),\n  confirmation: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.optional)(actionConfigStructConfirmation)\n});\nconst actionConfigStructAssist = (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.type)({\n  action: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.literal)(\"assist\"),\n  pipeline_id: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_0__.string)()),\n  start_listening: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_0__.boolean)())\n});\nconst actionConfigStructType = (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.object)({\n  action: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.enums)([\"none\", \"toggle\", \"more-info\", \"call-service\", \"url\", \"navigate\", \"assist\"]),\n  confirmation: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.optional)(actionConfigStructConfirmation)\n});\nconst actionConfigStruct = (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.dynamic)(value => {\n  if (value && typeof value === \"object\" && \"action\" in value) {\n    switch (value.action) {\n      case \"call-service\":\n        {\n          return actionConfigStructService;\n        }\n      case \"navigate\":\n        {\n          return actionConfigStructNavigate;\n        }\n      case \"url\":\n        {\n          return actionConfigStructUrl;\n        }\n      case \"assist\":\n        {\n          return actionConfigStructAssist;\n        }\n    }\n  }\n  return actionConfigStructType;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9zdHJ1Y3RzL2FjdGlvbi1zdHJ1Y3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9zdHJ1Y3RzL2FjdGlvbi1zdHJ1Y3QudHM/OTNhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhcnJheSxcbiAgYm9vbGVhbixcbiAgZHluYW1pYyxcbiAgZW51bXMsXG4gIGxpdGVyYWwsXG4gIG9iamVjdCxcbiAgb3B0aW9uYWwsXG4gIHN0cmluZyxcbiAgdHlwZSxcbiAgdW5pb24sXG59IGZyb20gXCJzdXBlcnN0cnVjdFwiO1xuaW1wb3J0IHsgQmFzZUFjdGlvbkNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2xvdmVsYWNlL2NvbmZpZy9hY3Rpb25cIjtcblxuY29uc3QgYWN0aW9uQ29uZmlnU3RydWN0VXNlciA9IG9iamVjdCh7XG4gIHVzZXI6IHN0cmluZygpLFxufSk7XG5cbmNvbnN0IGFjdGlvbkNvbmZpZ1N0cnVjdENvbmZpcm1hdGlvbiA9IHVuaW9uKFtcbiAgYm9vbGVhbigpLFxuICBvYmplY3Qoe1xuICAgIHRleHQ6IG9wdGlvbmFsKHN0cmluZygpKSxcbiAgICBleGNlbXB0aW9uczogb3B0aW9uYWwoYXJyYXkoYWN0aW9uQ29uZmlnU3RydWN0VXNlcikpLFxuICB9KSxcbl0pO1xuXG5jb25zdCBhY3Rpb25Db25maWdTdHJ1Y3RVcmwgPSBvYmplY3Qoe1xuICBhY3Rpb246IGxpdGVyYWwoXCJ1cmxcIiksXG4gIHVybF9wYXRoOiBzdHJpbmcoKSxcbiAgY29uZmlybWF0aW9uOiBvcHRpb25hbChhY3Rpb25Db25maWdTdHJ1Y3RDb25maXJtYXRpb24pLFxufSk7XG5cbmNvbnN0IGFjdGlvbkNvbmZpZ1N0cnVjdFNlcnZpY2UgPSBvYmplY3Qoe1xuICBhY3Rpb246IGxpdGVyYWwoXCJjYWxsLXNlcnZpY2VcIiksXG4gIHNlcnZpY2U6IHN0cmluZygpLFxuICBzZXJ2aWNlX2RhdGE6IG9wdGlvbmFsKG9iamVjdCgpKSxcbiAgZGF0YTogb3B0aW9uYWwob2JqZWN0KCkpLFxuICB0YXJnZXQ6IG9wdGlvbmFsKFxuICAgIG9iamVjdCh7XG4gICAgICBlbnRpdHlfaWQ6IG9wdGlvbmFsKHVuaW9uKFtzdHJpbmcoKSwgYXJyYXkoc3RyaW5nKCkpXSkpLFxuICAgICAgZGV2aWNlX2lkOiBvcHRpb25hbCh1bmlvbihbc3RyaW5nKCksIGFycmF5KHN0cmluZygpKV0pKSxcbiAgICAgIGFyZWFfaWQ6IG9wdGlvbmFsKHVuaW9uKFtzdHJpbmcoKSwgYXJyYXkoc3RyaW5nKCkpXSkpLFxuICAgIH0pXG4gICksXG4gIGNvbmZpcm1hdGlvbjogb3B0aW9uYWwoYWN0aW9uQ29uZmlnU3RydWN0Q29uZmlybWF0aW9uKSxcbn0pO1xuXG5jb25zdCBhY3Rpb25Db25maWdTdHJ1Y3ROYXZpZ2F0ZSA9IG9iamVjdCh7XG4gIGFjdGlvbjogbGl0ZXJhbChcIm5hdmlnYXRlXCIpLFxuICBuYXZpZ2F0aW9uX3BhdGg6IHN0cmluZygpLFxuICBuYXZpZ2F0aW9uX3JlcGxhY2U6IG9wdGlvbmFsKGJvb2xlYW4oKSksXG4gIGNvbmZpcm1hdGlvbjogb3B0aW9uYWwoYWN0aW9uQ29uZmlnU3RydWN0Q29uZmlybWF0aW9uKSxcbn0pO1xuXG5jb25zdCBhY3Rpb25Db25maWdTdHJ1Y3RBc3Npc3QgPSB0eXBlKHtcbiAgYWN0aW9uOiBsaXRlcmFsKFwiYXNzaXN0XCIpLFxuICBwaXBlbGluZV9pZDogb3B0aW9uYWwoc3RyaW5nKCkpLFxuICBzdGFydF9saXN0ZW5pbmc6IG9wdGlvbmFsKGJvb2xlYW4oKSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbkNvbmZpZ1N0cnVjdFR5cGUgPSBvYmplY3Qoe1xuICBhY3Rpb246IGVudW1zKFtcbiAgICBcIm5vbmVcIixcbiAgICBcInRvZ2dsZVwiLFxuICAgIFwibW9yZS1pbmZvXCIsXG4gICAgXCJjYWxsLXNlcnZpY2VcIixcbiAgICBcInVybFwiLFxuICAgIFwibmF2aWdhdGVcIixcbiAgICBcImFzc2lzdFwiLFxuICBdKSxcbiAgY29uZmlybWF0aW9uOiBvcHRpb25hbChhY3Rpb25Db25maWdTdHJ1Y3RDb25maXJtYXRpb24pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25Db25maWdTdHJ1Y3QgPSBkeW5hbWljPGFueT4oKHZhbHVlKSA9PiB7XG4gIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgXCJhY3Rpb25cIiBpbiB2YWx1ZSkge1xuICAgIHN3aXRjaCAoKHZhbHVlIGFzIEJhc2VBY3Rpb25Db25maWcpLmFjdGlvbiEpIHtcbiAgICAgIGNhc2UgXCJjYWxsLXNlcnZpY2VcIjoge1xuICAgICAgICByZXR1cm4gYWN0aW9uQ29uZmlnU3RydWN0U2VydmljZTtcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJuYXZpZ2F0ZVwiOiB7XG4gICAgICAgIHJldHVybiBhY3Rpb25Db25maWdTdHJ1Y3ROYXZpZ2F0ZTtcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJ1cmxcIjoge1xuICAgICAgICByZXR1cm4gYWN0aW9uQ29uZmlnU3RydWN0VXJsO1xuICAgICAgfVxuICAgICAgY2FzZSBcImFzc2lzdFwiOiB7XG4gICAgICAgIHJldHVybiBhY3Rpb25Db25maWdTdHJ1Y3RBc3Npc3Q7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFjdGlvbkNvbmZpZ1N0cnVjdFR5cGU7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/panels/lovelace/editor/structs/action-struct.ts\n");

/***/ }),

/***/ "./src/panels/lovelace/editor/structs/base-card-struct.ts":
/*!****************************************************************!*\
  !*** ./src/panels/lovelace/editor/structs/base-card-struct.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   baseLovelaceCardConfig: () => (/* binding */ baseLovelaceCardConfig)\n/* harmony export */ });\n/* harmony import */ var superstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superstruct */ \"./node_modules/superstruct/dist/index.mjs\");\n\nconst baseLovelaceCardConfig = (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.object)({\n  type: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.string)(),\n  view_layout: (0,superstruct__WEBPACK_IMPORTED_MODULE_0__.any)()\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9zdHJ1Y3RzL2Jhc2UtY2FyZC1zdHJ1Y3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9zdHJ1Y3RzL2Jhc2UtY2FyZC1zdHJ1Y3QudHM/ZjM3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvYmplY3QsIHN0cmluZywgYW55IH0gZnJvbSBcInN1cGVyc3RydWN0XCI7XG5cbmV4cG9ydCBjb25zdCBiYXNlTG92ZWxhY2VDYXJkQ29uZmlnID0gb2JqZWN0KHtcbiAgdHlwZTogc3RyaW5nKCksXG4gIHZpZXdfbGF5b3V0OiBhbnkoKSxcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/panels/lovelace/editor/structs/base-card-struct.ts\n");

/***/ }),

/***/ "./src/panels/lovelace/editor/structs/entities-struct.ts":
/*!***************************************************************!*\
  !*** ./src/panels/lovelace/editor/structs/entities-struct.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   entitiesConfigStruct: () => (/* binding */ entitiesConfigStruct)\n/* harmony export */ });\n/* harmony import */ var superstruct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! superstruct */ \"./node_modules/superstruct/dist/index.mjs\");\n/* harmony import */ var _components_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/types */ \"./src/panels/lovelace/components/types.ts\");\n/* harmony import */ var _action_struct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-struct */ \"./src/panels/lovelace/editor/structs/action-struct.ts\");\n\n\n\nconst entitiesConfigStruct = (0,superstruct__WEBPACK_IMPORTED_MODULE_2__.union)([(0,superstruct__WEBPACK_IMPORTED_MODULE_2__.object)({\n  entity: (0,superstruct__WEBPACK_IMPORTED_MODULE_2__.string)(),\n  name: (0,superstruct__WEBPACK_IMPORTED_MODULE_2__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_2__.string)()),\n  icon: (0,superstruct__WEBPACK_IMPORTED_MODULE_2__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_2__.string)()),\n  image: (0,superstruct__WEBPACK_IMPORTED_MODULE_2__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_2__.string)()),\n  secondary_info: (0,superstruct__WEBPACK_IMPORTED_MODULE_2__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_2__.string)()),\n  format: (0,superstruct__WEBPACK_IMPORTED_MODULE_2__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_2__.enums)(_components_types__WEBPACK_IMPORTED_MODULE_0__.TIMESTAMP_RENDERING_FORMATS)),\n  state_color: (0,superstruct__WEBPACK_IMPORTED_MODULE_2__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_2__.boolean)()),\n  tap_action: (0,superstruct__WEBPACK_IMPORTED_MODULE_2__.optional)(_action_struct__WEBPACK_IMPORTED_MODULE_1__.actionConfigStruct),\n  hold_action: (0,superstruct__WEBPACK_IMPORTED_MODULE_2__.optional)(_action_struct__WEBPACK_IMPORTED_MODULE_1__.actionConfigStruct),\n  double_tap_action: (0,superstruct__WEBPACK_IMPORTED_MODULE_2__.optional)(_action_struct__WEBPACK_IMPORTED_MODULE_1__.actionConfigStruct)\n}), (0,superstruct__WEBPACK_IMPORTED_MODULE_2__.string)()]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9zdHJ1Y3RzL2VudGl0aWVzLXN0cnVjdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9zdHJ1Y3RzL2VudGl0aWVzLXN0cnVjdC50cz9mN2E4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVuaW9uLCBvYmplY3QsIHN0cmluZywgb3B0aW9uYWwsIGJvb2xlYW4sIGVudW1zIH0gZnJvbSBcInN1cGVyc3RydWN0XCI7XG5pbXBvcnQgeyBUSU1FU1RBTVBfUkVOREVSSU5HX0ZPUk1BVFMgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90eXBlc1wiO1xuaW1wb3J0IHsgYWN0aW9uQ29uZmlnU3RydWN0IH0gZnJvbSBcIi4vYWN0aW9uLXN0cnVjdFwiO1xuXG5leHBvcnQgY29uc3QgZW50aXRpZXNDb25maWdTdHJ1Y3QgPSB1bmlvbihbXG4gIG9iamVjdCh7XG4gICAgZW50aXR5OiBzdHJpbmcoKSxcbiAgICBuYW1lOiBvcHRpb25hbChzdHJpbmcoKSksXG4gICAgaWNvbjogb3B0aW9uYWwoc3RyaW5nKCkpLFxuICAgIGltYWdlOiBvcHRpb25hbChzdHJpbmcoKSksXG4gICAgc2Vjb25kYXJ5X2luZm86IG9wdGlvbmFsKHN0cmluZygpKSxcbiAgICBmb3JtYXQ6IG9wdGlvbmFsKGVudW1zKFRJTUVTVEFNUF9SRU5ERVJJTkdfRk9STUFUUykpLFxuICAgIHN0YXRlX2NvbG9yOiBvcHRpb25hbChib29sZWFuKCkpLFxuICAgIHRhcF9hY3Rpb246IG9wdGlvbmFsKGFjdGlvbkNvbmZpZ1N0cnVjdCksXG4gICAgaG9sZF9hY3Rpb246IG9wdGlvbmFsKGFjdGlvbkNvbmZpZ1N0cnVjdCksXG4gICAgZG91YmxlX3RhcF9hY3Rpb246IG9wdGlvbmFsKGFjdGlvbkNvbmZpZ1N0cnVjdCksXG4gIH0pLFxuICBzdHJpbmcoKSxcbl0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/panels/lovelace/editor/structs/entities-struct.ts\n");

/***/ })

};
