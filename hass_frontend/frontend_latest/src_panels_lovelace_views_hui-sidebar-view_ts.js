/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
export const id = "src_panels_lovelace_views_hui-sidebar-view_ts";
export const ids = ["src_panels_lovelace_views_hui-sidebar-view_ts"];
export const modules = {

/***/ "./src/panels/lovelace/views/hui-sidebar-view.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/views/hui-sidebar-view.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SideBarView: () => (/* binding */ SideBarView)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/decorate */ \"./node_modules/@babel/runtime/helpers/esm/decorate.js\");\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/esm/get.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/dom/fire_event */ \"./src/common/dom/fire_event.ts\");\n/* harmony import */ var _editor_config_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../editor/config-util */ \"./src/panels/lovelace/editor/config-util.ts\");\n\n\n\nconst mdiArrowLeft = \"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z\";\nconst mdiArrowRight = \"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z\";\nconst mdiPlus = \"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z\";\n\n\n\n\nlet SideBarView = (0,_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(null, function (_initialize, _LitElement) {\n  class SideBarView extends _LitElement {\n    constructor(...args) {\n      super(...args);\n      _initialize(this);\n    }\n  }\n  return {\n    F: SideBarView,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        attribute: false\n      })],\n      key: \"lovelace\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        type: Number\n      })],\n      key: \"index\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        type: Boolean\n      })],\n      key: \"isStrategy\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        attribute: false\n      })],\n      key: \"cards\",\n      value() {\n        return [];\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.state)()],\n      key: \"_config\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      key: \"_mqlListenerRef\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      key: \"_mql\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"connectedCallback\",\n      value: function connectedCallback() {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(SideBarView.prototype), \"connectedCallback\", this).call(this);\n        this._mql = window.matchMedia(\"(min-width: 760px)\");\n        this._mqlListenerRef = this._createCards.bind(this);\n        this._mql.addListener(this._mqlListenerRef);\n      }\n    }, {\n      kind: \"method\",\n      key: \"disconnectedCallback\",\n      value: function disconnectedCallback() {\n        var _this$_mql;\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(SideBarView.prototype), \"disconnectedCallback\", this).call(this);\n        (_this$_mql = this._mql) === null || _this$_mql === void 0 || _this$_mql.removeListener(this._mqlListenerRef);\n        this._mqlListenerRef = undefined;\n        this._mql = undefined;\n      }\n    }, {\n      kind: \"method\",\n      key: \"setConfig\",\n      value: function setConfig(config) {\n        this._config = config;\n      }\n    }, {\n      kind: \"method\",\n      key: \"willUpdate\",\n      value: function willUpdate(changedProperties) {\n        var _this$lovelace, _this$lovelace2, _this$lovelace3;\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(SideBarView.prototype), \"willUpdate\", this).call(this, changedProperties);\n        if ((_this$lovelace = this.lovelace) !== null && _this$lovelace !== void 0 && _this$lovelace.editMode) {\n          __webpack_require__.e(/*! import() */ \"src_panels_lovelace_views_default-view-editable_ts\").then(__webpack_require__.bind(__webpack_require__, /*! ./default-view-editable */ \"./src/panels/lovelace/views/default-view-editable.ts\"));\n        }\n        if (changedProperties.has(\"cards\")) {\n          this._createCards();\n        }\n        if (!changedProperties.has(\"lovelace\") && !changedProperties.has(\"_config\")) {\n          return;\n        }\n        const oldLovelace = changedProperties.get(\"lovelace\");\n        if (!changedProperties.has(\"cards\") && (oldLovelace === null || oldLovelace === void 0 ? void 0 : oldLovelace.config) !== ((_this$lovelace2 = this.lovelace) === null || _this$lovelace2 === void 0 ? void 0 : _this$lovelace2.config) || oldLovelace && (oldLovelace === null || oldLovelace === void 0 ? void 0 : oldLovelace.editMode) !== ((_this$lovelace3 = this.lovelace) === null || _this$lovelace3 === void 0 ? void 0 : _this$lovelace3.editMode)) {\n          this._createCards();\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        var _this$lovelace4, _this$lovelace5;\n        return (0,lit__WEBPACK_IMPORTED_MODULE_3__.html)`\n      <div\n        class=\"container ${(_this$lovelace4 = this.lovelace) !== null && _this$lovelace4 !== void 0 && _this$lovelace4.editMode ? \"edit-mode\" : \"\"}\"\n      ></div>\n      ${(_this$lovelace5 = this.lovelace) !== null && _this$lovelace5 !== void 0 && _this$lovelace5.editMode ? (0,lit__WEBPACK_IMPORTED_MODULE_3__.html)`\n            <ha-fab\n              .label=${this.hass.localize(\"ui.panel.lovelace.editor.edit_card.add\")}\n              extended\n              @click=${this._addCard}\n            >\n              <ha-svg-icon slot=\"icon\" .path=${mdiPlus}></ha-svg-icon>\n            </ha-fab>\n          ` : \"\"}\n    `;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_addCard\",\n      value: function _addCard() {\n        (0,_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__.fireEvent)(this, \"ll-create-card\");\n      }\n    }, {\n      kind: \"method\",\n      key: \"_createCards\",\n      value: function _createCards() {\n        var _this$_mql2;\n        const mainDiv = document.createElement(\"div\");\n        mainDiv.id = \"main\";\n        let sidebarDiv;\n        if ((_this$_mql2 = this._mql) !== null && _this$_mql2 !== void 0 && _this$_mql2.matches) {\n          sidebarDiv = document.createElement(\"div\");\n          sidebarDiv.id = \"sidebar\";\n        } else {\n          sidebarDiv = mainDiv;\n        }\n        if (this.hasUpdated) {\n          const oldMain = this.renderRoot.querySelector(\"#main\");\n          const oldSidebar = this.renderRoot.querySelector(\"#sidebar\");\n          const container = this.renderRoot.querySelector(\".container\");\n          if (oldMain) {\n            container.removeChild(oldMain);\n          }\n          if (oldSidebar) {\n            container.removeChild(oldSidebar);\n          }\n          container.appendChild(mainDiv);\n          container.appendChild(sidebarDiv);\n        } else {\n          this.updateComplete.then(() => {\n            const container = this.renderRoot.querySelector(\".container\");\n            container.appendChild(mainDiv);\n            container.appendChild(sidebarDiv);\n          });\n        }\n        this.cards.forEach((card, idx) => {\n          var _this$_config, _this$lovelace6, _cardConfig$view_layo3;\n          const cardConfig = (_this$_config = this._config) === null || _this$_config === void 0 || (_this$_config = _this$_config.cards) === null || _this$_config === void 0 ? void 0 : _this$_config[idx];\n          let element;\n          if (this.isStrategy || !((_this$lovelace6 = this.lovelace) !== null && _this$lovelace6 !== void 0 && _this$lovelace6.editMode)) {\n            card.editMode = false;\n            element = card;\n          } else {\n            var _cardConfig$view_layo;\n            element = document.createElement(\"hui-card-options\");\n            element.hass = this.hass;\n            element.lovelace = this.lovelace;\n            element.path = [this.index, idx];\n            card.editMode = true;\n            const movePositionButton = document.createElement(\"ha-icon-button\");\n            movePositionButton.slot = \"buttons\";\n            const moveIcon = document.createElement(\"ha-svg-icon\");\n            moveIcon.path = (cardConfig === null || cardConfig === void 0 || (_cardConfig$view_layo = cardConfig.view_layout) === null || _cardConfig$view_layo === void 0 ? void 0 : _cardConfig$view_layo.position) !== \"sidebar\" ? mdiArrowRight : mdiArrowLeft;\n            movePositionButton.appendChild(moveIcon);\n            movePositionButton.addEventListener(\"click\", () => {\n              var _cardConfig$view_layo2;\n              this.lovelace.saveConfig((0,_editor_config_util__WEBPACK_IMPORTED_MODULE_6__.replaceCard)(this.lovelace.config, [this.index, idx], {\n                ...cardConfig,\n                view_layout: {\n                  position: (cardConfig === null || cardConfig === void 0 || (_cardConfig$view_layo2 = cardConfig.view_layout) === null || _cardConfig$view_layo2 === void 0 ? void 0 : _cardConfig$view_layo2.position) !== \"sidebar\" ? \"sidebar\" : \"main\"\n                }\n              }));\n            });\n            element.appendChild(movePositionButton);\n            element.appendChild(card);\n          }\n          if ((cardConfig === null || cardConfig === void 0 || (_cardConfig$view_layo3 = cardConfig.view_layout) === null || _cardConfig$view_layo3 === void 0 ? void 0 : _cardConfig$view_layo3.position) !== \"sidebar\") {\n            mainDiv.appendChild(element);\n          } else {\n            sidebarDiv.appendChild(element);\n          }\n        });\n      }\n    }, {\n      kind: \"get\",\n      static: true,\n      key: \"styles\",\n      value: function styles() {\n        return (0,lit__WEBPACK_IMPORTED_MODULE_3__.css)`\n      :host {\n        display: block;\n        padding-top: 4px;\n      }\n\n      .container {\n        display: flex;\n        justify-content: center;\n        margin-left: 4px;\n        margin-right: 4px;\n      }\n\n      .container.edit-mode {\n        margin-bottom: 72px;\n      }\n\n      #main {\n        max-width: 1620px;\n        flex-grow: 2;\n      }\n\n      #sidebar {\n        flex-grow: 1;\n        flex-shrink: 0;\n        max-width: 380px;\n      }\n\n      .container > div {\n        min-width: 0;\n        box-sizing: border-box;\n      }\n\n      .container > div > *:not([hidden]) {\n        display: block;\n        margin: var(--masonry-view-card-margin, 4px 4px 8px);\n      }\n\n      @media (max-width: 500px) {\n        .container > div > * {\n          margin-left: 0;\n          margin-right: 0;\n        }\n      }\n\n      ha-fab {\n        position: fixed;\n        right: calc(16px + env(safe-area-inset-right));\n        bottom: calc(16px + env(safe-area-inset-bottom));\n        inset-inline-end: calc(16px + env(safe-area-inset-right));\n        inset-inline-start: initial;\n        z-index: 1;\n      }\n    `;\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_3__.LitElement);\ncustomElements.define(\"hui-sidebar-view\", SideBarView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL3ZpZXdzL2h1aS1zaWRlYmFyLXZpZXcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQVFBO0FBQ0E7QUFNQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlPQTtBQUFBO0FBQUE7QUFqT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBSUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvcGFuZWxzL2xvdmVsYWNlL3ZpZXdzL2h1aS1zaWRlYmFyLXZpZXcudHM/ZGU5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZGlBcnJvd0xlZnQsIG1kaUFycm93UmlnaHQsIG1kaVBsdXMgfSBmcm9tIFwiQG1kaS9qc1wiO1xuaW1wb3J0IHtcbiAgQ1NTUmVzdWx0R3JvdXAsXG4gIExpdEVsZW1lbnQsXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgY3NzLFxuICBodG1sLFxufSBmcm9tIFwibGl0XCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tIFwibGl0L2RlY29yYXRvcnNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB0eXBlIHsgTG92ZWxhY2VWaWV3RWxlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgdHlwZSB7IExvdmVsYWNlVmlld0NvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2xvdmVsYWNlL2NvbmZpZy92aWV3XCI7XG5pbXBvcnQgdHlwZSB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEh1aUVycm9yQ2FyZCB9IGZyb20gXCIuLi9jYXJkcy9odWktZXJyb3ItY2FyZFwiO1xuaW1wb3J0IHsgSHVpQ2FyZE9wdGlvbnMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9odWktY2FyZC1vcHRpb25zXCI7XG5pbXBvcnQgeyByZXBsYWNlQ2FyZCB9IGZyb20gXCIuLi9lZGl0b3IvY29uZmlnLXV0aWxcIjtcbmltcG9ydCB0eXBlIHsgTG92ZWxhY2UsIExvdmVsYWNlQ2FyZCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgU2lkZUJhclZpZXcgZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgTG92ZWxhY2VWaWV3RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogZmFsc2UgfSkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogZmFsc2UgfSkgcHVibGljIGxvdmVsYWNlPzogTG92ZWxhY2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pIHB1YmxpYyBpbmRleD86IG51bWJlcjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBpc1N0cmF0ZWd5ID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBmYWxzZSB9KSBwdWJsaWMgY2FyZHM6IEFycmF5PFxuICAgIExvdmVsYWNlQ2FyZCB8IEh1aUVycm9yQ2FyZFxuICA+ID0gW107XG5cbiAgQHN0YXRlKCkgcHJpdmF0ZSBfY29uZmlnPzogTG92ZWxhY2VWaWV3Q29uZmlnO1xuXG4gIHByaXZhdGUgX21xbExpc3RlbmVyUmVmPzogKCkgPT4gdm9pZDtcblxuICBwcml2YXRlIF9tcWw/OiBNZWRpYVF1ZXJ5TGlzdDtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9tcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDc2MHB4KVwiKTtcbiAgICB0aGlzLl9tcWxMaXN0ZW5lclJlZiA9IHRoaXMuX2NyZWF0ZUNhcmRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fbXFsLmFkZExpc3RlbmVyKHRoaXMuX21xbExpc3RlbmVyUmVmKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX21xbD8ucmVtb3ZlTGlzdGVuZXIodGhpcy5fbXFsTGlzdGVuZXJSZWYhKTtcbiAgICB0aGlzLl9tcWxMaXN0ZW5lclJlZiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9tcWwgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogTG92ZWxhY2VWaWV3Q29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHVibGljIHdpbGxVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIud2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICBpZiAodGhpcy5sb3ZlbGFjZT8uZWRpdE1vZGUpIHtcbiAgICAgIGltcG9ydChcIi4vZGVmYXVsdC12aWV3LWVkaXRhYmxlXCIpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJjYXJkc1wiKSkge1xuICAgICAgdGhpcy5fY3JlYXRlQ2FyZHMoKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAhY2hhbmdlZFByb3BlcnRpZXMuaGFzKFwibG92ZWxhY2VcIikgJiZcbiAgICAgICFjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJfY29uZmlnXCIpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgb2xkTG92ZWxhY2UgPSBjaGFuZ2VkUHJvcGVydGllcy5nZXQoXCJsb3ZlbGFjZVwiKSBhc1xuICAgICAgfCBMb3ZlbGFjZVxuICAgICAgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoXG4gICAgICAoIWNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcImNhcmRzXCIpICYmXG4gICAgICAgIG9sZExvdmVsYWNlPy5jb25maWcgIT09IHRoaXMubG92ZWxhY2U/LmNvbmZpZykgfHxcbiAgICAgIChvbGRMb3ZlbGFjZSAmJiBvbGRMb3ZlbGFjZT8uZWRpdE1vZGUgIT09IHRoaXMubG92ZWxhY2U/LmVkaXRNb2RlKVxuICAgICkge1xuICAgICAgdGhpcy5fY3JlYXRlQ2FyZHMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJjb250YWluZXIgJHt0aGlzLmxvdmVsYWNlPy5lZGl0TW9kZSA/IFwiZWRpdC1tb2RlXCIgOiBcIlwifVwiXG4gICAgICA+PC9kaXY+XG4gICAgICAke3RoaXMubG92ZWxhY2U/LmVkaXRNb2RlXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxoYS1mYWJcbiAgICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5lZGl0X2NhcmQuYWRkXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgZXh0ZW5kZWRcbiAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fYWRkQ2FyZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGhhLXN2Zy1pY29uIHNsb3Q9XCJpY29uXCIgLnBhdGg9JHttZGlQbHVzfT48L2hhLXN2Zy1pY29uPlxuICAgICAgICAgICAgPC9oYS1mYWI+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCJ9XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZENhcmQoKTogdm9pZCB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwibGwtY3JlYXRlLWNhcmRcIik7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVDYXJkcygpOiB2b2lkIHtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluRGl2LmlkID0gXCJtYWluXCI7XG5cbiAgICBsZXQgc2lkZWJhckRpdjogSFRNTERpdkVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuX21xbD8ubWF0Y2hlcykge1xuICAgICAgc2lkZWJhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzaWRlYmFyRGl2LmlkID0gXCJzaWRlYmFyXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZGViYXJEaXYgPSBtYWluRGl2O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc1VwZGF0ZWQpIHtcbiAgICAgIGNvbnN0IG9sZE1haW4gPSB0aGlzLnJlbmRlclJvb3QucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICAgICAgY29uc3Qgb2xkU2lkZWJhciA9IHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnJlbmRlclJvb3QucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIikhO1xuICAgICAgaWYgKG9sZE1haW4pIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG9sZE1haW4pO1xuICAgICAgfVxuICAgICAgaWYgKG9sZFNpZGViYXIpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG9sZFNpZGViYXIpO1xuICAgICAgfVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5EaXYpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXJEaXYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnJlbmRlclJvb3QucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIikhO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyRGl2KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuY2FyZHMuZm9yRWFjaCgoY2FyZDogTG92ZWxhY2VDYXJkLCBpZHgpID0+IHtcbiAgICAgIGNvbnN0IGNhcmRDb25maWcgPSB0aGlzLl9jb25maWc/LmNhcmRzPy5baWR4XTtcbiAgICAgIGxldCBlbGVtZW50OiBMb3ZlbGFjZUNhcmQgfCBIdWlDYXJkT3B0aW9ucztcbiAgICAgIGlmICh0aGlzLmlzU3RyYXRlZ3kgfHwgIXRoaXMubG92ZWxhY2U/LmVkaXRNb2RlKSB7XG4gICAgICAgIGNhcmQuZWRpdE1vZGUgPSBmYWxzZTtcbiAgICAgICAgZWxlbWVudCA9IGNhcmQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImh1aS1jYXJkLW9wdGlvbnNcIik7XG4gICAgICAgIGVsZW1lbnQuaGFzcyA9IHRoaXMuaGFzcztcbiAgICAgICAgZWxlbWVudC5sb3ZlbGFjZSA9IHRoaXMubG92ZWxhY2U7XG4gICAgICAgIGVsZW1lbnQucGF0aCA9IFt0aGlzLmluZGV4ISwgaWR4XTtcbiAgICAgICAgY2FyZC5lZGl0TW9kZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IG1vdmVQb3NpdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoYS1pY29uLWJ1dHRvblwiKTtcbiAgICAgICAgbW92ZVBvc2l0aW9uQnV0dG9uLnNsb3QgPSBcImJ1dHRvbnNcIjtcbiAgICAgICAgY29uc3QgbW92ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGEtc3ZnLWljb25cIik7XG4gICAgICAgIG1vdmVJY29uLnBhdGggPVxuICAgICAgICAgIGNhcmRDb25maWc/LnZpZXdfbGF5b3V0Py5wb3NpdGlvbiAhPT0gXCJzaWRlYmFyXCJcbiAgICAgICAgICAgID8gbWRpQXJyb3dSaWdodFxuICAgICAgICAgICAgOiBtZGlBcnJvd0xlZnQ7XG4gICAgICAgIG1vdmVQb3NpdGlvbkJ1dHRvbi5hcHBlbmRDaGlsZChtb3ZlSWNvbik7XG4gICAgICAgIG1vdmVQb3NpdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG92ZWxhY2UhLnNhdmVDb25maWcoXG4gICAgICAgICAgICByZXBsYWNlQ2FyZCh0aGlzLmxvdmVsYWNlIS5jb25maWcsIFt0aGlzLmluZGV4ISwgaWR4XSwge1xuICAgICAgICAgICAgICAuLi5jYXJkQ29uZmlnISxcbiAgICAgICAgICAgICAgdmlld19sYXlvdXQ6IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgIGNhcmRDb25maWc/LnZpZXdfbGF5b3V0Py5wb3NpdGlvbiAhPT0gXCJzaWRlYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInNpZGViYXJcIlxuICAgICAgICAgICAgICAgICAgICA6IFwibWFpblwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChtb3ZlUG9zaXRpb25CdXR0b24pO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgfVxuICAgICAgaWYgKGNhcmRDb25maWc/LnZpZXdfbGF5b3V0Py5wb3NpdGlvbiAhPT0gXCJzaWRlYmFyXCIpIHtcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGViYXJEaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRHcm91cCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXIuZWRpdC1tb2RlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNzJweDtcbiAgICAgIH1cblxuICAgICAgI21haW4ge1xuICAgICAgICBtYXgtd2lkdGg6IDE2MjBweDtcbiAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgfVxuXG4gICAgICAjc2lkZWJhciB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIG1heC13aWR0aDogMzgwcHg7XG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXIgPiBkaXYge1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXIgPiBkaXYgPiAqOm5vdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1tYXNvbnJ5LXZpZXctY2FyZC1tYXJnaW4sIDRweCA0cHggOHB4KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgIC5jb250YWluZXIgPiBkaXYgPiAqIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaGEtZmFiIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICByaWdodDogY2FsYygxNnB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkpO1xuICAgICAgICBib3R0b206IGNhbGMoMTZweCArIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSk7XG4gICAgICAgIGluc2V0LWlubGluZS1lbmQ6IGNhbGMoMTZweCArIGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpKTtcbiAgICAgICAgaW5zZXQtaW5saW5lLXN0YXJ0OiBpbml0aWFsO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1zaWRlYmFyLXZpZXdcIjogU2lkZUJhclZpZXc7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaHVpLXNpZGViYXItdmlld1wiLCBTaWRlQmFyVmlldyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/panels/lovelace/views/hui-sidebar-view.ts\n");

/***/ })

};
