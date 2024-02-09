/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
export const id = "src_components_ha-textfield_ts-src_panels_lovelace_common_compute-unused-entities_ts";
export const ids = ["src_components_ha-textfield_ts-src_panels_lovelace_common_compute-unused-entities_ts"];
export const modules = {

/***/ "./src/components/ha-textfield.ts":
/*!****************************************!*\
  !*** ./src/components/ha-textfield.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HaTextField: () => (/* binding */ HaTextField)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/decorate */ \"./node_modules/@babel/runtime/helpers/esm/decorate.js\");\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/esm/get.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _material_mwc_textfield_mwc_textfield_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-textfield/mwc-textfield-base */ \"./node_modules/@material/mwc-textfield/mwc-textfield-base.js\");\n/* harmony import */ var _material_mwc_textfield_mwc_textfield_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/mwc-textfield/mwc-textfield.css */ \"./node_modules/@material/mwc-textfield/mwc-textfield.css.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var _common_dom_get_main_window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/dom/get_main_window */ \"./src/common/dom/get_main_window.ts\");\n\n\n\n\n\n\n\n\nlet HaTextField = (0,_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_6__.customElement)(\"ha-textfield\")], function (_initialize, _TextFieldBase) {\n  class HaTextField extends _TextFieldBase {\n    constructor(...args) {\n      super(...args);\n      _initialize(this);\n    }\n  }\n  return {\n    F: HaTextField,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_6__.property)({\n        type: Boolean\n      })],\n      key: \"invalid\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_6__.property)({\n        attribute: \"error-message\"\n      })],\n      key: \"errorMessage\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_6__.property)({\n        type: Boolean\n      })],\n      key: \"icon\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_6__.property)({\n        type: Boolean\n      })],\n      key: \"iconTrailing\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_6__.property)()],\n      key: \"autocomplete\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_6__.property)()],\n      key: \"autocorrect\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_6__.property)({\n        attribute: \"input-spellcheck\"\n      })],\n      key: \"inputSpellcheck\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_6__.query)(\"input\")],\n      key: \"formElement\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"updated\",\n      value:\n      // @ts-ignore\n\n      // @ts-ignore\n\n      function updated(changedProperties) {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HaTextField.prototype), \"updated\", this).call(this, changedProperties);\n        if (changedProperties.has(\"invalid\") && (this.invalid || changedProperties.get(\"invalid\") !== undefined) || changedProperties.has(\"errorMessage\")) {\n          this.setCustomValidity(this.invalid ? this.errorMessage || \"Invalid\" : \"\");\n          this.reportValidity();\n        }\n        if (changedProperties.has(\"autocomplete\")) {\n          if (this.autocomplete) {\n            this.formElement.setAttribute(\"autocomplete\", this.autocomplete);\n          } else {\n            this.formElement.removeAttribute(\"autocomplete\");\n          }\n        }\n        if (changedProperties.has(\"autocorrect\")) {\n          if (this.autocorrect) {\n            this.formElement.setAttribute(\"autocorrect\", this.autocorrect);\n          } else {\n            this.formElement.removeAttribute(\"autocorrect\");\n          }\n        }\n        if (changedProperties.has(\"inputSpellcheck\")) {\n          if (this.inputSpellcheck) {\n            this.formElement.setAttribute(\"spellcheck\", this.inputSpellcheck);\n          } else {\n            this.formElement.removeAttribute(\"spellcheck\");\n          }\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"renderIcon\",\n      value: function renderIcon(_icon, isTrailingIcon = false) {\n        const type = isTrailingIcon ? \"trailing\" : \"leading\";\n        return (0,lit__WEBPACK_IMPORTED_MODULE_5__.html)`\n      <span\n        class=\"mdc-text-field__icon mdc-text-field__icon--${type}\"\n        tabindex=${isTrailingIcon ? 1 : -1}\n      >\n        <slot name=\"${type}Icon\"></slot>\n      </span>\n    `;\n      }\n    }, {\n      kind: \"field\",\n      static: true,\n      key: \"styles\",\n      value() {\n        return [_material_mwc_textfield_mwc_textfield_css__WEBPACK_IMPORTED_MODULE_4__.styles, (0,lit__WEBPACK_IMPORTED_MODULE_5__.css)`\n      .mdc-text-field__input {\n        width: var(--ha-textfield-input-width, 100%);\n      }\n      .mdc-text-field:not(.mdc-text-field--with-leading-icon) {\n        padding: var(--text-field-padding, 0px 16px);\n      }\n      .mdc-text-field__affix--suffix {\n        padding-left: var(--text-field-suffix-padding-left, 12px);\n        padding-right: var(--text-field-suffix-padding-right, 0px);\n        padding-inline-start: var(--text-field-suffix-padding-left, 12px);\n        padding-inline-end: var(--text-field-suffix-padding-right, 0px);\n        direction: var(--direction);\n      }\n      .mdc-text-field--with-leading-icon {\n        padding-inline-start: var(--text-field-suffix-padding-left, 0px);\n        padding-inline-end: var(--text-field-suffix-padding-right, 16px);\n        direction: var(--direction);\n      }\n\n      .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon {\n        padding-left: var(--text-field-suffix-padding-left, 0px);\n        padding-right: var(--text-field-suffix-padding-right, 0px);\n        padding-inline-start: var(--text-field-suffix-padding-left, 0px);\n        padding-inline-end: var(--text-field-suffix-padding-right, 0px);\n      }\n      .mdc-text-field:not(.mdc-text-field--disabled)\n        .mdc-text-field__affix--suffix {\n        color: var(--secondary-text-color);\n      }\n\n      .mdc-text-field__icon {\n        color: var(--secondary-text-color);\n      }\n\n      .mdc-text-field__icon--leading {\n        margin-inline-start: 16px;\n        margin-inline-end: 8px;\n        direction: var(--direction);\n      }\n\n      .mdc-text-field__icon--trailing {\n        padding: var(--textfield-icon-trailing-padding, 12px);\n      }\n\n      .mdc-floating-label:not(.mdc-floating-label--float-above) {\n        text-overflow: ellipsis;\n        width: inherit;\n        padding-right: 30px;\n        padding-inline-end: 30px;\n        padding-inline-start: initial;\n        box-sizing: border-box;\n        direction: var(--direction);\n      }\n\n      input {\n        text-align: var(--text-field-text-align, start);\n      }\n\n      /* Edge, hide reveal password icon */\n      ::-ms-reveal {\n        display: none;\n      }\n\n      /* Chrome, Safari, Edge, Opera */\n      :host([no-spinner]) input::-webkit-outer-spin-button,\n      :host([no-spinner]) input::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n      }\n\n      /* Firefox */\n      :host([no-spinner]) input[type=\"number\"] {\n        -moz-appearance: textfield;\n      }\n\n      .mdc-text-field__ripple {\n        overflow: hidden;\n      }\n\n      .mdc-text-field {\n        overflow: var(--text-field-overflow);\n      }\n\n      .mdc-floating-label {\n        inset-inline-start: 16px !important;\n        inset-inline-end: initial !important;\n        transform-origin: var(--float-start);\n        direction: var(--direction);\n        text-align: var(--float-start);\n      }\n\n      .mdc-text-field--with-leading-icon.mdc-text-field--filled\n        .mdc-floating-label {\n        max-width: calc(\n          100% - 48px - var(--text-field-suffix-padding-left, 0px)\n        );\n        inset-inline-start: calc(\n          48px + var(--text-field-suffix-padding-left, 0px)\n        ) !important;\n        inset-inline-end: initial !important;\n        direction: var(--direction);\n      }\n\n      .mdc-text-field__input[type=\"number\"] {\n        direction: var(--direction);\n      }\n      .mdc-text-field__affix--prefix {\n        padding-right: var(--text-field-prefix-padding-right, 2px);\n        padding-inline-end: var(--text-field-prefix-padding-right, 2px);\n        padding-inline-start: initial;\n      }\n\n      .mdc-text-field:not(.mdc-text-field--disabled)\n        .mdc-text-field__affix--prefix {\n        color: var(--mdc-text-field-label-ink-color);\n      }\n    `,\n        // safari workaround - must be explicit\n        _common_dom_get_main_window__WEBPACK_IMPORTED_MODULE_7__.mainWindow.document.dir === \"rtl\" ? (0,lit__WEBPACK_IMPORTED_MODULE_5__.css)`\n          .mdc-text-field__affix--suffix,\n          .mdc-text-field--with-leading-icon,\n          .mdc-text-field__icon--leading,\n          .mdc-floating-label,\n          .mdc-text-field--with-leading-icon.mdc-text-field--filled\n            .mdc-floating-label,\n          .mdc-text-field__input[type=\"number\"] {\n            direction: rtl;\n          }\n        ` : (0,lit__WEBPACK_IMPORTED_MODULE_5__.css)``];\n      }\n    }]\n  };\n}, _material_mwc_textfield_mwc_textfield_base__WEBPACK_IMPORTED_MODULE_3__.TextFieldBase);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oYS10ZXh0ZmllbGQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQThNQTtBQUFBO0FBQUE7QUE5TUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYkE7O0FBR0E7O0FBWUE7QUFDQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWFzc2lzdGFudC1mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL2hhLXRleHRmaWVsZC50cz9lOTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRGaWVsZEJhc2UgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy10ZXh0ZmllbGQvbXdjLXRleHRmaWVsZC1iYXNlXCI7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy10ZXh0ZmllbGQvbXdjLXRleHRmaWVsZC5jc3NcIjtcbmltcG9ydCB7IFRlbXBsYXRlUmVzdWx0LCBodG1sLCBQcm9wZXJ0eVZhbHVlcywgY3NzIH0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIHF1ZXJ5IH0gZnJvbSBcImxpdC9kZWNvcmF0b3JzXCI7XG5pbXBvcnQgeyBtYWluV2luZG93IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZ2V0X21haW5fd2luZG93XCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtdGV4dGZpZWxkXCIpXG5leHBvcnQgY2xhc3MgSGFUZXh0RmllbGQgZXh0ZW5kcyBUZXh0RmllbGRCYXNlIHtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgaW52YWxpZCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogXCJlcnJvci1tZXNzYWdlXCIgfSkgcHVibGljIGVycm9yTWVzc2FnZT86IHN0cmluZztcblxuICAvLyBAdHMtaWdub3JlXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIGljb24gPSBmYWxzZTtcblxuICAvLyBAdHMtaWdub3JlXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIGljb25UcmFpbGluZyA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBhdXRvY29tcGxldGU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGF1dG9jb3JyZWN0Pzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogXCJpbnB1dC1zcGVsbGNoZWNrXCIgfSlcbiAgcHVibGljIGlucHV0U3BlbGxjaGVjaz86IHN0cmluZztcblxuICBAcXVlcnkoXCJpbnB1dFwiKSBwdWJsaWMgZm9ybUVsZW1lbnQhOiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIG92ZXJyaWRlIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgaWYgKFxuICAgICAgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcImludmFsaWRcIikgJiZcbiAgICAgICAgKHRoaXMuaW52YWxpZCB8fCBjaGFuZ2VkUHJvcGVydGllcy5nZXQoXCJpbnZhbGlkXCIpICE9PSB1bmRlZmluZWQpKSB8fFxuICAgICAgY2hhbmdlZFByb3BlcnRpZXMuaGFzKFwiZXJyb3JNZXNzYWdlXCIpXG4gICAgKSB7XG4gICAgICB0aGlzLnNldEN1c3RvbVZhbGlkaXR5KFxuICAgICAgICB0aGlzLmludmFsaWQgPyB0aGlzLmVycm9yTWVzc2FnZSB8fCBcIkludmFsaWRcIiA6IFwiXCJcbiAgICAgICk7XG4gICAgICB0aGlzLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJhdXRvY29tcGxldGVcIikpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZSkge1xuICAgICAgICB0aGlzLmZvcm1FbGVtZW50LnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCB0aGlzLmF1dG9jb21wbGV0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvcm1FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcImF1dG9jb3JyZWN0XCIpKSB7XG4gICAgICBpZiAodGhpcy5hdXRvY29ycmVjdCkge1xuICAgICAgICB0aGlzLmZvcm1FbGVtZW50LnNldEF0dHJpYnV0ZShcImF1dG9jb3JyZWN0XCIsIHRoaXMuYXV0b2NvcnJlY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb3JtRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJhdXRvY29ycmVjdFwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcImlucHV0U3BlbGxjaGVja1wiKSkge1xuICAgICAgaWYgKHRoaXMuaW5wdXRTcGVsbGNoZWNrKSB7XG4gICAgICAgIHRoaXMuZm9ybUVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3BlbGxjaGVja1wiLCB0aGlzLmlucHV0U3BlbGxjaGVjayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvcm1FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInNwZWxsY2hlY2tcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlbmRlckljb24oXG4gICAgX2ljb246IHN0cmluZyxcbiAgICBpc1RyYWlsaW5nSWNvbiA9IGZhbHNlXG4gICk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBjb25zdCB0eXBlID0gaXNUcmFpbGluZ0ljb24gPyBcInRyYWlsaW5nXCIgOiBcImxlYWRpbmdcIjtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPHNwYW5cbiAgICAgICAgY2xhc3M9XCJtZGMtdGV4dC1maWVsZF9faWNvbiBtZGMtdGV4dC1maWVsZF9faWNvbi0tJHt0eXBlfVwiXG4gICAgICAgIHRhYmluZGV4PSR7aXNUcmFpbGluZ0ljb24gPyAxIDogLTF9XG4gICAgICA+XG4gICAgICAgIDxzbG90IG5hbWU9XCIke3R5cGV9SWNvblwiPjwvc2xvdD5cbiAgICAgIDwvc3Bhbj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIG92ZXJyaWRlIHN0eWxlcyA9IFtcbiAgICBzdHlsZXMsXG4gICAgY3NzYFxuICAgICAgLm1kYy10ZXh0LWZpZWxkX19pbnB1dCB7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1oYS10ZXh0ZmllbGQtaW5wdXQtd2lkdGgsIDEwMCUpO1xuICAgICAgfVxuICAgICAgLm1kYy10ZXh0LWZpZWxkOm5vdCgubWRjLXRleHQtZmllbGQtLXdpdGgtbGVhZGluZy1pY29uKSB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXRleHQtZmllbGQtcGFkZGluZywgMHB4IDE2cHgpO1xuICAgICAgfVxuICAgICAgLm1kYy10ZXh0LWZpZWxkX19hZmZpeC0tc3VmZml4IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS10ZXh0LWZpZWxkLXN1ZmZpeC1wYWRkaW5nLWxlZnQsIDEycHgpO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS10ZXh0LWZpZWxkLXN1ZmZpeC1wYWRkaW5nLXJpZ2h0LCAwcHgpO1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tdGV4dC1maWVsZC1zdWZmaXgtcGFkZGluZy1sZWZ0LCAxMnB4KTtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS10ZXh0LWZpZWxkLXN1ZmZpeC1wYWRkaW5nLXJpZ2h0LCAwcHgpO1xuICAgICAgICBkaXJlY3Rpb246IHZhcigtLWRpcmVjdGlvbik7XG4gICAgICB9XG4gICAgICAubWRjLXRleHQtZmllbGQtLXdpdGgtbGVhZGluZy1pY29uIHtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXRleHQtZmllbGQtc3VmZml4LXBhZGRpbmctbGVmdCwgMHB4KTtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS10ZXh0LWZpZWxkLXN1ZmZpeC1wYWRkaW5nLXJpZ2h0LCAxNnB4KTtcbiAgICAgICAgZGlyZWN0aW9uOiB2YXIoLS1kaXJlY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICAubWRjLXRleHQtZmllbGQtLXdpdGgtbGVhZGluZy1pY29uLm1kYy10ZXh0LWZpZWxkLS13aXRoLXRyYWlsaW5nLWljb24ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXRleHQtZmllbGQtc3VmZml4LXBhZGRpbmctbGVmdCwgMHB4KTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tdGV4dC1maWVsZC1zdWZmaXgtcGFkZGluZy1yaWdodCwgMHB4KTtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXRleHQtZmllbGQtc3VmZml4LXBhZGRpbmctbGVmdCwgMHB4KTtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS10ZXh0LWZpZWxkLXN1ZmZpeC1wYWRkaW5nLXJpZ2h0LCAwcHgpO1xuICAgICAgfVxuICAgICAgLm1kYy10ZXh0LWZpZWxkOm5vdCgubWRjLXRleHQtZmllbGQtLWRpc2FibGVkKVxuICAgICAgICAubWRjLXRleHQtZmllbGRfX2FmZml4LS1zdWZmaXgge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAubWRjLXRleHQtZmllbGRfX2ljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAubWRjLXRleHQtZmllbGRfX2ljb24tLWxlYWRpbmcge1xuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxNnB4O1xuICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogOHB4O1xuICAgICAgICBkaXJlY3Rpb246IHZhcigtLWRpcmVjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtdGV4dC1maWVsZF9faWNvbi0tdHJhaWxpbmcge1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS10ZXh0ZmllbGQtaWNvbi10cmFpbGluZy1wYWRkaW5nLCAxMnB4KTtcbiAgICAgIH1cblxuICAgICAgLm1kYy1mbG9hdGluZy1sYWJlbDpub3QoLm1kYy1mbG9hdGluZy1sYWJlbC0tZmxvYXQtYWJvdmUpIHtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBpbml0aWFsO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBkaXJlY3Rpb246IHZhcigtLWRpcmVjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlucHV0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogdmFyKC0tdGV4dC1maWVsZC10ZXh0LWFsaWduLCBzdGFydCk7XG4gICAgICB9XG5cbiAgICAgIC8qIEVkZ2UsIGhpZGUgcmV2ZWFsIHBhc3N3b3JkIGljb24gKi9cbiAgICAgIDo6LW1zLXJldmVhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xuICAgICAgOmhvc3QoW25vLXNwaW5uZXJdKSBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgICAgIDpob3N0KFtuby1zcGlubmVyXSkgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgLyogRmlyZWZveCAqL1xuICAgICAgOmhvc3QoW25vLXNwaW5uZXJdKSBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtdGV4dC1maWVsZF9fcmlwcGxlIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLm1kYy10ZXh0LWZpZWxkIHtcbiAgICAgICAgb3ZlcmZsb3c6IHZhcigtLXRleHQtZmllbGQtb3ZlcmZsb3cpO1xuICAgICAgfVxuXG4gICAgICAubWRjLWZsb2F0aW5nLWxhYmVsIHtcbiAgICAgICAgaW5zZXQtaW5saW5lLXN0YXJ0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGluc2V0LWlubGluZS1lbmQ6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdmFyKC0tZmxvYXQtc3RhcnQpO1xuICAgICAgICBkaXJlY3Rpb246IHZhcigtLWRpcmVjdGlvbik7XG4gICAgICAgIHRleHQtYWxpZ246IHZhcigtLWZsb2F0LXN0YXJ0KTtcbiAgICAgIH1cblxuICAgICAgLm1kYy10ZXh0LWZpZWxkLS13aXRoLWxlYWRpbmctaWNvbi5tZGMtdGV4dC1maWVsZC0tZmlsbGVkXG4gICAgICAgIC5tZGMtZmxvYXRpbmctbGFiZWwge1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoXG4gICAgICAgICAgMTAwJSAtIDQ4cHggLSB2YXIoLS10ZXh0LWZpZWxkLXN1ZmZpeC1wYWRkaW5nLWxlZnQsIDBweClcbiAgICAgICAgKTtcbiAgICAgICAgaW5zZXQtaW5saW5lLXN0YXJ0OiBjYWxjKFxuICAgICAgICAgIDQ4cHggKyB2YXIoLS10ZXh0LWZpZWxkLXN1ZmZpeC1wYWRkaW5nLWxlZnQsIDBweClcbiAgICAgICAgKSAhaW1wb3J0YW50O1xuICAgICAgICBpbnNldC1pbmxpbmUtZW5kOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICAgICAgIGRpcmVjdGlvbjogdmFyKC0tZGlyZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgLm1kYy10ZXh0LWZpZWxkX19pbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgICAgICAgZGlyZWN0aW9uOiB2YXIoLS1kaXJlY3Rpb24pO1xuICAgICAgfVxuICAgICAgLm1kYy10ZXh0LWZpZWxkX19hZmZpeC0tcHJlZml4IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tdGV4dC1maWVsZC1wcmVmaXgtcGFkZGluZy1yaWdodCwgMnB4KTtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS10ZXh0LWZpZWxkLXByZWZpeC1wYWRkaW5nLXJpZ2h0LCAycHgpO1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogaW5pdGlhbDtcbiAgICAgIH1cblxuICAgICAgLm1kYy10ZXh0LWZpZWxkOm5vdCgubWRjLXRleHQtZmllbGQtLWRpc2FibGVkKVxuICAgICAgICAubWRjLXRleHQtZmllbGRfX2FmZml4LS1wcmVmaXgge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWRjLXRleHQtZmllbGQtbGFiZWwtaW5rLWNvbG9yKTtcbiAgICAgIH1cbiAgICBgLFxuICAgIC8vIHNhZmFyaSB3b3JrYXJvdW5kIC0gbXVzdCBiZSBleHBsaWNpdFxuICAgIG1haW5XaW5kb3cuZG9jdW1lbnQuZGlyID09PSBcInJ0bFwiXG4gICAgICA/IGNzc2BcbiAgICAgICAgICAubWRjLXRleHQtZmllbGRfX2FmZml4LS1zdWZmaXgsXG4gICAgICAgICAgLm1kYy10ZXh0LWZpZWxkLS13aXRoLWxlYWRpbmctaWNvbixcbiAgICAgICAgICAubWRjLXRleHQtZmllbGRfX2ljb24tLWxlYWRpbmcsXG4gICAgICAgICAgLm1kYy1mbG9hdGluZy1sYWJlbCxcbiAgICAgICAgICAubWRjLXRleHQtZmllbGQtLXdpdGgtbGVhZGluZy1pY29uLm1kYy10ZXh0LWZpZWxkLS1maWxsZWRcbiAgICAgICAgICAgIC5tZGMtZmxvYXRpbmctbGFiZWwsXG4gICAgICAgICAgLm1kYy10ZXh0LWZpZWxkX19pbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICAgIH1cbiAgICAgICAgYFxuICAgICAgOiBjc3NgYCxcbiAgXTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXRleHRmaWVsZFwiOiBIYVRleHRGaWVsZDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ha-textfield.ts\n");

/***/ }),

/***/ "./src/panels/lovelace/common/compute-unused-entities.ts":
/*!***************************************************************!*\
  !*** ./src/panels/lovelace/common/compute-unused-entities.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EXCLUDED_DOMAINS: () => (/* binding */ EXCLUDED_DOMAINS),\n/* harmony export */   calcUnusedEntities: () => (/* binding */ calcUnusedEntities),\n/* harmony export */   computeUnusedEntities: () => (/* binding */ computeUnusedEntities),\n/* harmony export */   computeUsedEntities: () => (/* binding */ computeUsedEntities)\n/* harmony export */ });\nconst EXCLUDED_DOMAINS = [\"zone\", \"persistent_notification\"];\nconst addFromAction = (entities, actionConfig) => {\n  var _actionConfig$target, _actionConfig$service, _actionConfig$data, _ref, _actionConfig$service2, _actionConfig$service3, _actionConfig$data2, _actionConfig$target2;\n  if (actionConfig.action !== \"call-service\" || !((_actionConfig$target = actionConfig.target) !== null && _actionConfig$target !== void 0 && _actionConfig$target.entity_id) && !((_actionConfig$service = actionConfig.service_data) !== null && _actionConfig$service !== void 0 && _actionConfig$service.entity_id) && !((_actionConfig$data = actionConfig.data) !== null && _actionConfig$data !== void 0 && _actionConfig$data.entity_id)) {\n    return;\n  }\n  let entityIds = (_ref = (_actionConfig$service2 = (_actionConfig$service3 = actionConfig.service_data) === null || _actionConfig$service3 === void 0 ? void 0 : _actionConfig$service3.entity_id) !== null && _actionConfig$service2 !== void 0 ? _actionConfig$service2 : (_actionConfig$data2 = actionConfig.data) === null || _actionConfig$data2 === void 0 ? void 0 : _actionConfig$data2.entity_id) !== null && _ref !== void 0 ? _ref : (_actionConfig$target2 = actionConfig.target) === null || _actionConfig$target2 === void 0 ? void 0 : _actionConfig$target2.entity_id;\n  if (!Array.isArray(entityIds)) {\n    entityIds = [entityIds];\n  }\n  for (const entityId of entityIds) {\n    entities.add(entityId);\n  }\n};\nconst addEntityId = (entities, entity) => {\n  if (typeof entity === \"string\") {\n    entities.add(entity);\n    return;\n  }\n  if (entity.entity) {\n    entities.add(entity.entity);\n  }\n  if (entity.camera_image) {\n    entities.add(entity.camera_image);\n  }\n  if (entity.tap_action) {\n    addFromAction(entities, entity.tap_action);\n  }\n  if (entity.hold_action) {\n    addFromAction(entities, entity.hold_action);\n  }\n};\nconst addEntities = (entities, obj) => {\n  if (obj.entity) {\n    addEntityId(entities, obj.entity);\n  }\n  if (obj.entities && Array.isArray(obj.entities)) {\n    obj.entities.forEach(entity => addEntityId(entities, entity));\n  }\n  if (obj.card) {\n    addEntities(entities, obj.card);\n  }\n  if (obj.cards && Array.isArray(obj.cards)) {\n    obj.cards.forEach(card => addEntities(entities, card));\n  }\n  if (obj.elements && Array.isArray(obj.elements)) {\n    obj.elements.forEach(card => addEntities(entities, card));\n  }\n  if (obj.badges && Array.isArray(obj.badges)) {\n    obj.badges.forEach(badge => addEntityId(entities, badge));\n  }\n};\nconst computeUsedEntities = config => {\n  const entities = new Set();\n  config.views.forEach(view => addEntities(entities, view));\n  return entities;\n};\nconst calcUnusedEntities = (hass, usedEntities) => {\n  const unusedEntities = new Set();\n  for (const entity of Object.keys(hass.states)) {\n    if (!usedEntities.has(entity) && !EXCLUDED_DOMAINS.includes(entity.split(\".\", 1)[0])) {\n      unusedEntities.add(entity);\n    }\n  }\n  return unusedEntities;\n};\nconst computeUnusedEntities = (hass, config) => {\n  const usedEntities = computeUsedEntities(config);\n  const unusedEntities = calcUnusedEntities(hass, usedEntities);\n  return unusedEntities;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9jb21wdXRlLXVudXNlZC1lbnRpdGllcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7QUFFQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtYXNzaXN0YW50LWZyb250ZW5kLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vY29tcHV0ZS11bnVzZWQtZW50aXRpZXMudHM/Y2JkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25Db25maWcgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZS9jb25maWcvYWN0aW9uXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2xvdmVsYWNlL2NvbmZpZy90eXBlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgRVhDTFVERURfRE9NQUlOUyA9IFtcInpvbmVcIiwgXCJwZXJzaXN0ZW50X25vdGlmaWNhdGlvblwiXTtcblxuY29uc3QgYWRkRnJvbUFjdGlvbiA9IChlbnRpdGllczogU2V0PHN0cmluZz4sIGFjdGlvbkNvbmZpZzogQWN0aW9uQ29uZmlnKSA9PiB7XG4gIGlmIChcbiAgICBhY3Rpb25Db25maWcuYWN0aW9uICE9PSBcImNhbGwtc2VydmljZVwiIHx8XG4gICAgKCFhY3Rpb25Db25maWcudGFyZ2V0Py5lbnRpdHlfaWQgJiZcbiAgICAgICFhY3Rpb25Db25maWcuc2VydmljZV9kYXRhPy5lbnRpdHlfaWQgJiZcbiAgICAgICFhY3Rpb25Db25maWcuZGF0YT8uZW50aXR5X2lkKVxuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGVudGl0eUlkcyA9XG4gICAgYWN0aW9uQ29uZmlnLnNlcnZpY2VfZGF0YT8uZW50aXR5X2lkID8/XG4gICAgYWN0aW9uQ29uZmlnLmRhdGE/LmVudGl0eV9pZCA/P1xuICAgIGFjdGlvbkNvbmZpZy50YXJnZXQ/LmVudGl0eV9pZDtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGVudGl0eUlkcykpIHtcbiAgICBlbnRpdHlJZHMgPSBbZW50aXR5SWRzXTtcbiAgfVxuICBmb3IgKGNvbnN0IGVudGl0eUlkIG9mIGVudGl0eUlkcyBhcyBBcnJheTxzdHJpbmc+KSB7XG4gICAgZW50aXRpZXMuYWRkKGVudGl0eUlkKTtcbiAgfVxufTtcblxuY29uc3QgYWRkRW50aXR5SWQgPSAoZW50aXRpZXM6IFNldDxzdHJpbmc+LCBlbnRpdHkpID0+IHtcbiAgaWYgKHR5cGVvZiBlbnRpdHkgPT09IFwic3RyaW5nXCIpIHtcbiAgICBlbnRpdGllcy5hZGQoZW50aXR5KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZW50aXR5LmVudGl0eSkge1xuICAgIGVudGl0aWVzLmFkZChlbnRpdHkuZW50aXR5KTtcbiAgfVxuICBpZiAoZW50aXR5LmNhbWVyYV9pbWFnZSkge1xuICAgIGVudGl0aWVzLmFkZChlbnRpdHkuY2FtZXJhX2ltYWdlKTtcbiAgfVxuICBpZiAoZW50aXR5LnRhcF9hY3Rpb24pIHtcbiAgICBhZGRGcm9tQWN0aW9uKGVudGl0aWVzLCBlbnRpdHkudGFwX2FjdGlvbik7XG4gIH1cbiAgaWYgKGVudGl0eS5ob2xkX2FjdGlvbikge1xuICAgIGFkZEZyb21BY3Rpb24oZW50aXRpZXMsIGVudGl0eS5ob2xkX2FjdGlvbik7XG4gIH1cbn07XG5cbmNvbnN0IGFkZEVudGl0aWVzID0gKGVudGl0aWVzOiBTZXQ8c3RyaW5nPiwgb2JqKSA9PiB7XG4gIGlmIChvYmouZW50aXR5KSB7XG4gICAgYWRkRW50aXR5SWQoZW50aXRpZXMsIG9iai5lbnRpdHkpO1xuICB9XG4gIGlmIChvYmouZW50aXRpZXMgJiYgQXJyYXkuaXNBcnJheShvYmouZW50aXRpZXMpKSB7XG4gICAgb2JqLmVudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4gYWRkRW50aXR5SWQoZW50aXRpZXMsIGVudGl0eSkpO1xuICB9XG4gIGlmIChvYmouY2FyZCkge1xuICAgIGFkZEVudGl0aWVzKGVudGl0aWVzLCBvYmouY2FyZCk7XG4gIH1cbiAgaWYgKG9iai5jYXJkcyAmJiBBcnJheS5pc0FycmF5KG9iai5jYXJkcykpIHtcbiAgICBvYmouY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4gYWRkRW50aXRpZXMoZW50aXRpZXMsIGNhcmQpKTtcbiAgfVxuICBpZiAob2JqLmVsZW1lbnRzICYmIEFycmF5LmlzQXJyYXkob2JqLmVsZW1lbnRzKSkge1xuICAgIG9iai5lbGVtZW50cy5mb3JFYWNoKChjYXJkKSA9PiBhZGRFbnRpdGllcyhlbnRpdGllcywgY2FyZCkpO1xuICB9XG4gIGlmIChvYmouYmFkZ2VzICYmIEFycmF5LmlzQXJyYXkob2JqLmJhZGdlcykpIHtcbiAgICBvYmouYmFkZ2VzLmZvckVhY2goKGJhZGdlKSA9PiBhZGRFbnRpdHlJZChlbnRpdGllcywgYmFkZ2UpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVVc2VkRW50aXRpZXMgPSAoY29uZmlnOiBMb3ZlbGFjZUNvbmZpZyk6IFNldDxzdHJpbmc+ID0+IHtcbiAgY29uc3QgZW50aXRpZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgY29uZmlnLnZpZXdzLmZvckVhY2goKHZpZXcpID0+IGFkZEVudGl0aWVzKGVudGl0aWVzLCB2aWV3KSk7XG4gIHJldHVybiBlbnRpdGllcztcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjVW51c2VkRW50aXRpZXMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHVzZWRFbnRpdGllczogU2V0PHN0cmluZz5cbik6IFNldDxzdHJpbmc+ID0+IHtcbiAgY29uc3QgdW51c2VkRW50aXRpZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xuXG4gIGZvciAoY29uc3QgZW50aXR5IG9mIE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKSkge1xuICAgIGlmIChcbiAgICAgICF1c2VkRW50aXRpZXMuaGFzKGVudGl0eSkgJiZcbiAgICAgICFFWENMVURFRF9ET01BSU5TLmluY2x1ZGVzKGVudGl0eS5zcGxpdChcIi5cIiwgMSlbMF0pXG4gICAgKSB7XG4gICAgICB1bnVzZWRFbnRpdGllcy5hZGQoZW50aXR5KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW51c2VkRW50aXRpZXM7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVVudXNlZEVudGl0aWVzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb25maWc6IExvdmVsYWNlQ29uZmlnXG4pOiBTZXQ8c3RyaW5nPiA9PiB7XG4gIGNvbnN0IHVzZWRFbnRpdGllcyA9IGNvbXB1dGVVc2VkRW50aXRpZXMoY29uZmlnKTtcbiAgY29uc3QgdW51c2VkRW50aXRpZXMgPSBjYWxjVW51c2VkRW50aXRpZXMoaGFzcywgdXNlZEVudGl0aWVzKTtcbiAgcmV0dXJuIHVudXNlZEVudGl0aWVzO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/panels/lovelace/common/compute-unused-entities.ts\n");

/***/ })

};
