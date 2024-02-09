/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
export const id = "src_state-control_humidifier_ha-state-control-humidifier-humidity_ts";
export const ids = ["src_state-control_humidifier_ha-state-control-humidifier-humidity_ts"];
export const modules = {

/***/ "./src/state-control/humidifier/ha-state-control-humidifier-humidity.ts":
/*!******************************************************************************!*\
  !*** ./src/state-control/humidifier/ha-state-control-humidifier-humidity.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HaStateControlHumidifierHumidity: () => (/* binding */ HaStateControlHumidifierHumidity)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/decorate */ \"./node_modules/@babel/runtime/helpers/esm/decorate.js\");\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/esm/get.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var lit_directives_style_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit/directives/style-map */ \"./node_modules/lit/directives/style-map.js\");\n/* harmony import */ var _common_entity_state_active__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/entity/state_active */ \"./src/common/entity/state_active.ts\");\n/* harmony import */ var _common_entity_state_color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/entity/state_color */ \"./src/common/entity/state_color.ts\");\n/* harmony import */ var _common_number_clamp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/number/clamp */ \"./src/common/number/clamp.ts\");\n/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/util/debounce */ \"./src/common/util/debounce.ts\");\n/* harmony import */ var _components_ha_big_number__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ha-big-number */ \"./src/components/ha-big-number.ts\");\n/* harmony import */ var _components_ha_control_circular_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ha-control-circular-slider */ \"./src/components/ha-control-circular-slider.ts\");\n/* harmony import */ var _components_ha_outlined_icon_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ha-outlined-icon-button */ \"./src/components/ha-outlined-icon-button.ts\");\n/* harmony import */ var _components_ha_svg_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/ha-svg-icon */ \"./src/components/ha-svg-icon.ts\");\n/* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../data/entity */ \"./src/data/entity.ts\");\n/* harmony import */ var _data_entity_attributes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../data/entity_attributes */ \"./src/data/entity_attributes.ts\");\n/* harmony import */ var _data_humidifier__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../data/humidifier */ \"./src/data/humidifier.ts\");\n/* harmony import */ var _state_control_circular_slider_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../state-control-circular-slider-style */ \"./src/state-control/state-control-circular-slider-style.ts\");\n\n\n\nconst mdiMinus = \"M19,13H5V11H19V13Z\";\nconst mdiPlus = \"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z\";\nconst mdiThermostat = \"M16.95,16.95L14.83,14.83C15.55,14.1 16,13.1 16,12C16,11.26 15.79,10.57 15.43,10L17.6,7.81C18.5,9 19,10.43 19,12C19,13.93 18.22,15.68 16.95,16.95M12,5C13.57,5 15,5.5 16.19,6.4L14,8.56C13.43,8.21 12.74,8 12,8A4,4 0 0,0 8,12C8,13.1 8.45,14.1 9.17,14.83L7.05,16.95C5.78,15.68 5,13.93 5,12A7,7 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z\";\nconst mdiWaterPercent = \"M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nlet HaStateControlHumidifierHumidity = (0,_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.customElement)(\"ha-state-control-humidifier-humidity\")], function (_initialize, _LitElement) {\n  class HaStateControlHumidifierHumidity extends _LitElement {\n    constructor(...args) {\n      super(...args);\n      _initialize(this);\n    }\n  }\n  return {\n    F: HaStateControlHumidifierHumidity,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        attribute: false\n      })],\n      key: \"stateObj\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        attribute: \"show-secondary\",\n        type: Boolean\n      })],\n      key: \"showSecondary\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        attribute: \"use-current-as-primary\",\n        type: Boolean\n      })],\n      key: \"showCurrentAsPrimary\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        type: Boolean,\n        attribute: \"prevent-interaction-on-scroll\"\n      })],\n      key: \"preventInteractionOnScroll\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.state)()],\n      key: \"_targetHumidity\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      key: \"_sizeController\",\n      value() {\n        return (0,_state_control_circular_slider_style__WEBPACK_IMPORTED_MODULE_17__.createStateControlCircularSliderController)(this);\n      }\n    }, {\n      kind: \"method\",\n      key: \"willUpdate\",\n      value: function willUpdate(changedProp) {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HaStateControlHumidifierHumidity.prototype), \"willUpdate\", this).call(this, changedProp);\n        if (changedProp.has(\"stateObj\")) {\n          this._targetHumidity = this.stateObj.attributes.humidity;\n        }\n      }\n    }, {\n      kind: \"get\",\n      key: \"_step\",\n      value: function _step() {\n        return 1;\n      }\n    }, {\n      kind: \"get\",\n      key: \"_min\",\n      value: function _min() {\n        var _this$stateObj$attrib;\n        return (_this$stateObj$attrib = this.stateObj.attributes.min_humidity) !== null && _this$stateObj$attrib !== void 0 ? _this$stateObj$attrib : 0;\n      }\n    }, {\n      kind: \"get\",\n      key: \"_max\",\n      value: function _max() {\n        var _this$stateObj$attrib2;\n        return (_this$stateObj$attrib2 = this.stateObj.attributes.max_humidity) !== null && _this$stateObj$attrib2 !== void 0 ? _this$stateObj$attrib2 : 100;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_valueChanged\",\n      value: function _valueChanged(ev) {\n        const value = ev.detail.value;\n        if (isNaN(value)) return;\n        this._targetHumidity = value;\n        this._callService();\n      }\n    }, {\n      kind: \"method\",\n      key: \"_valueChanging\",\n      value: function _valueChanging(ev) {\n        const value = ev.detail.value;\n        if (isNaN(value)) return;\n        this._targetHumidity = value;\n      }\n    }, {\n      kind: \"field\",\n      key: \"_debouncedCallService\",\n      value() {\n        return (0,_common_util_debounce__WEBPACK_IMPORTED_MODULE_9__.debounce)(() => this._callService(), 1000);\n      }\n    }, {\n      kind: \"method\",\n      key: \"_callService\",\n      value: function _callService() {\n        this.hass.callService(\"humidifier\", \"set_humidity\", {\n          entity_id: this.stateObj.entity_id,\n          humidity: this._targetHumidity\n        });\n      }\n    }, {\n      kind: \"method\",\n      key: \"_handleButton\",\n      value: function _handleButton(ev) {\n        var _this$_targetHumidity;\n        const step = ev.currentTarget.step;\n        let humidity = (_this$_targetHumidity = this._targetHumidity) !== null && _this$_targetHumidity !== void 0 ? _this$_targetHumidity : this._min;\n        humidity += step;\n        humidity = (0,_common_number_clamp__WEBPACK_IMPORTED_MODULE_8__.clamp)(humidity, this._min, this._max);\n        this._targetHumidity = humidity;\n        this._debouncedCallService();\n      }\n    }, {\n      kind: \"method\",\n      key: \"_renderLabel\",\n      value: function _renderLabel() {\n        if (this.stateObj.state === _data_entity__WEBPACK_IMPORTED_MODULE_14__.UNAVAILABLE) {\n          return (0,lit__WEBPACK_IMPORTED_MODULE_3__.html)`\n        <p class=\"label disabled\">\n          ${this.hass.formatEntityState(this.stateObj, _data_entity__WEBPACK_IMPORTED_MODULE_14__.UNAVAILABLE)}\n        </p>\n      `;\n        }\n        const action = this.stateObj.attributes.action;\n        const isHumidityDisplayed = this.stateObj.attributes.current_humidity != null && this.showCurrentAsPrimary || this._targetHumidity != null && !this.showCurrentAsPrimary;\n        return (0,lit__WEBPACK_IMPORTED_MODULE_3__.html)`\n      <p class=\"label\">\n        ${action && action !== \"off\" ? this.hass.formatEntityAttributeValue(this.stateObj, \"action\") : isHumidityDisplayed ? this.hass.formatEntityState(this.stateObj) : lit__WEBPACK_IMPORTED_MODULE_3__.nothing}\n      </p>\n    `;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_renderButtons\",\n      value: function _renderButtons() {\n        return (0,lit__WEBPACK_IMPORTED_MODULE_3__.html)`\n      <div class=\"buttons\">\n        <ha-outlined-icon-button\n          .step=${-this._step}\n          @click=${this._handleButton}\n        >\n          <ha-svg-icon .path=${mdiMinus}></ha-svg-icon>\n        </ha-outlined-icon-button>\n        <ha-outlined-icon-button\n          .step=${this._step}\n          @click=${this._handleButton}\n        >\n          <ha-svg-icon .path=${mdiPlus}></ha-svg-icon>\n        </ha-outlined-icon-button>\n      </div>\n    `;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_renderPrimary\",\n      value: function _renderPrimary() {\n        const currentHumidity = this.stateObj.attributes.current_humidity;\n        if (currentHumidity != null && this.showCurrentAsPrimary) {\n          return this._renderCurrent(currentHumidity, \"big\");\n        }\n        if (this._targetHumidity != null && !this.showCurrentAsPrimary) {\n          return this._renderTarget(this._targetHumidity, \"big\");\n        }\n        if (this.stateObj.state !== _data_entity__WEBPACK_IMPORTED_MODULE_14__.UNAVAILABLE) {\n          return (0,lit__WEBPACK_IMPORTED_MODULE_3__.html)`\n        <p class=\"primary-state\">\n          ${this.hass.formatEntityState(this.stateObj)}\n        </p>\n      `;\n        }\n        return lit__WEBPACK_IMPORTED_MODULE_3__.nothing;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_renderSecondary\",\n      value: function _renderSecondary() {\n        if (!this.showSecondary) {\n          return (0,lit__WEBPACK_IMPORTED_MODULE_3__.html)`<p class=\"label\"></p>`;\n        }\n        const currentHumidity = this.stateObj.attributes.current_humidity;\n        if (currentHumidity != null && !this.showCurrentAsPrimary) {\n          return (0,lit__WEBPACK_IMPORTED_MODULE_3__.html)`\n        <p class=\"label\">\n          <ha-svg-icon .path=${mdiWaterPercent}></ha-svg-icon>\n          ${this._renderCurrent(currentHumidity, \"normal\")}\n        </p>\n      `;\n        }\n        if (this._targetHumidity != null && this.showCurrentAsPrimary) {\n          return (0,lit__WEBPACK_IMPORTED_MODULE_3__.html)`\n        <p class=\"label\">\n          <ha-svg-icon .path=${mdiThermostat}></ha-svg-icon>\n          ${this._renderCurrent(this._targetHumidity, \"normal\")}\n        </p>\n      `;\n        }\n        return (0,lit__WEBPACK_IMPORTED_MODULE_3__.html)`<p class=\"label\"></p>`;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_renderTarget\",\n      value: function _renderTarget(humidity, style) {\n        const formatOptions = {\n          maximumFractionDigits: 0\n        };\n        if (style === \"big\") {\n          return (0,lit__WEBPACK_IMPORTED_MODULE_3__.html)`\n        <ha-big-number\n          .value=${humidity}\n          .unit=${_data_entity_attributes__WEBPACK_IMPORTED_MODULE_15__.DOMAIN_ATTRIBUTES_UNITS.humidifier.current_humidity}\n          .hass=${this.hass}\n          .formatOptions=${formatOptions}\n          unit-position=\"bottom\"\n        ></ha-big-number>\n      `;\n        }\n        return (0,lit__WEBPACK_IMPORTED_MODULE_3__.html)`\n      ${this.hass.formatEntityAttributeValue(this.stateObj, \"humidity\", humidity)}\n    `;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_renderCurrent\",\n      value: function _renderCurrent(humidity, style) {\n        const formatOptions = {\n          maximumFractionDigits: 1\n        };\n        if (style === \"big\") {\n          return (0,lit__WEBPACK_IMPORTED_MODULE_3__.html)`\n        <ha-big-number\n          .value=${humidity}\n          .unit=${_data_entity_attributes__WEBPACK_IMPORTED_MODULE_15__.DOMAIN_ATTRIBUTES_UNITS.humidifier.current_humidity}\n          .hass=${this.hass}\n          .formatOptions=${formatOptions}\n          unit-position=\"bottom\"\n        ></ha-big-number>\n      `;\n        }\n        return (0,lit__WEBPACK_IMPORTED_MODULE_3__.html)`\n      ${this.hass.formatEntityAttributeValue(this.stateObj, \"current_humidity\", humidity)}\n    `;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_renderInfo\",\n      value: function _renderInfo() {\n        return (0,lit__WEBPACK_IMPORTED_MODULE_3__.html)`\n      <div class=\"info\">\n        ${this._renderLabel()}${this._renderPrimary()}${this._renderSecondary()}\n      </div>\n    `;\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        const stateColor = (0,_common_entity_state_color__WEBPACK_IMPORTED_MODULE_7__.stateColorCss)(this.stateObj);\n        const active = (0,_common_entity_state_active__WEBPACK_IMPORTED_MODULE_6__.stateActive)(this.stateObj);\n        const action = this.stateObj.attributes.action;\n        let actionColor;\n        if (action && action !== \"idle\" && action !== \"off\" && active) {\n          actionColor = (0,_common_entity_state_color__WEBPACK_IMPORTED_MODULE_7__.stateColorCss)(this.stateObj, _data_humidifier__WEBPACK_IMPORTED_MODULE_16__.HUMIDIFIER_ACTION_MODE[action]);\n        }\n        const targetHumidity = this._targetHumidity;\n        const currentHumidity = this.stateObj.attributes.current_humidity;\n        const containerSizeClass = this._sizeController.value ? ` ${this._sizeController.value}` : \"\";\n        if (targetHumidity != null && this.stateObj.state !== _data_entity__WEBPACK_IMPORTED_MODULE_14__.UNAVAILABLE) {\n          const inverted = this.stateObj.attributes.device_class === _data_humidifier__WEBPACK_IMPORTED_MODULE_16__.HumidifierEntityDeviceClass.DEHUMIDIFIER;\n          return (0,lit__WEBPACK_IMPORTED_MODULE_3__.html)`\n        <div\n          class=\"container${containerSizeClass}\"\n          style=${(0,lit_directives_style_map__WEBPACK_IMPORTED_MODULE_5__.styleMap)({\n            \"--state-color\": stateColor,\n            \"--action-color\": actionColor\n          })}\n        >\n          <ha-control-circular-slider\n            .preventInteractionOnScroll=${this.preventInteractionOnScroll}\n            .inactive=${!active}\n            .mode=${inverted ? \"end\" : \"start\"}\n            .value=${targetHumidity}\n            .min=${this._min}\n            .max=${this._max}\n            .step=${this._step}\n            .current=${currentHumidity}\n            @value-changed=${this._valueChanged}\n            @value-changing=${this._valueChanging}\n          >\n          </ha-control-circular-slider>\n          ${this._renderInfo()} ${this._renderButtons()}\n        </div>\n      `;\n        }\n        return (0,lit__WEBPACK_IMPORTED_MODULE_3__.html)`\n      <div\n        class=\"container${containerSizeClass}\"\n        style=${(0,lit_directives_style_map__WEBPACK_IMPORTED_MODULE_5__.styleMap)({\n          \"--state-color\": stateColor,\n          \"--action-color\": actionColor\n        })}\n      >\n        <ha-control-circular-slider\n          .preventInteractionOnScroll=${this.preventInteractionOnScroll}\n          .current=${currentHumidity}\n          .min=${this._min}\n          .max=${this._max}\n          .step=${this._step}\n          disabled\n        >\n        </ha-control-circular-slider>\n        ${this._renderInfo()}\n      </div>\n    `;\n      }\n    }, {\n      kind: \"get\",\n      static: true,\n      key: \"styles\",\n      value: function styles() {\n        return _state_control_circular_slider_style__WEBPACK_IMPORTED_MODULE_17__.stateControlCircularSliderStyle;\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_3__.LitElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGUtY29udHJvbC9odW1pZGlmaWVyL2hhLXN0YXRlLWNvbnRyb2wtaHVtaWRpZmllci1odW1pZGl0eS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQTZTQTtBQUFBO0FBQUE7QUE3U0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWFzc2lzdGFudC1mcm9udGVuZC8uL3NyYy9zdGF0ZS1jb250cm9sL2h1bWlkaWZpZXIvaGEtc3RhdGUtY29udHJvbC1odW1pZGlmaWVyLWh1bWlkaXR5LnRzPzcwNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWRpTWludXMsIG1kaVBsdXMsIG1kaVRoZXJtb3N0YXQsIG1kaVdhdGVyUGVyY2VudCB9IGZyb20gXCJAbWRpL2pzXCI7XG5pbXBvcnQgeyBDU1NSZXN1bHRHcm91cCwgTGl0RWxlbWVudCwgUHJvcGVydHlWYWx1ZXMsIGh0bWwsIG5vdGhpbmcgfSBmcm9tIFwibGl0XCI7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tIFwibGl0L2RlY29yYXRvcnNcIjtcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSBcImxpdC9kaXJlY3RpdmVzL3N0eWxlLW1hcFwiO1xuaW1wb3J0IHsgc3RhdGVBY3RpdmUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9zdGF0ZV9hY3RpdmVcIjtcbmltcG9ydCB7IHN0YXRlQ29sb3JDc3MgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9zdGF0ZV9jb2xvclwiO1xuaW1wb3J0IHsgY2xhbXAgfSBmcm9tIFwiLi4vLi4vY29tbW9uL251bWJlci9jbGFtcFwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtYmlnLW51bWJlclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jb250cm9sLWNpcmN1bGFyLXNsaWRlclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1vdXRsaW5lZC1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1zdmctaWNvblwiO1xuaW1wb3J0IHsgVU5BVkFJTEFCTEUgfSBmcm9tIFwiLi4vLi4vZGF0YS9lbnRpdHlcIjtcbmltcG9ydCB7IERPTUFJTl9BVFRSSUJVVEVTX1VOSVRTIH0gZnJvbSBcIi4uLy4uL2RhdGEvZW50aXR5X2F0dHJpYnV0ZXNcIjtcbmltcG9ydCB7XG4gIEhVTUlESUZJRVJfQUNUSU9OX01PREUsXG4gIEh1bWlkaWZpZXJFbnRpdHksXG4gIEh1bWlkaWZpZXJFbnRpdHlEZXZpY2VDbGFzcyxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvaHVtaWRpZmllclwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgY3JlYXRlU3RhdGVDb250cm9sQ2lyY3VsYXJTbGlkZXJDb250cm9sbGVyLFxuICBzdGF0ZUNvbnRyb2xDaXJjdWxhclNsaWRlclN0eWxlLFxufSBmcm9tIFwiLi4vc3RhdGUtY29udHJvbC1jaXJjdWxhci1zbGlkZXItc3R5bGVcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1zdGF0ZS1jb250cm9sLWh1bWlkaWZpZXItaHVtaWRpdHlcIilcbmV4cG9ydCBjbGFzcyBIYVN0YXRlQ29udHJvbEh1bWlkaWZpZXJIdW1pZGl0eSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IGZhbHNlIH0pIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IGZhbHNlIH0pIHB1YmxpYyBzdGF0ZU9iaiE6IEh1bWlkaWZpZXJFbnRpdHk7XG5cbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBcInNob3ctc2Vjb25kYXJ5XCIsIHR5cGU6IEJvb2xlYW4gfSlcbiAgcHVibGljIHNob3dTZWNvbmRhcnkgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IFwidXNlLWN1cnJlbnQtYXMtcHJpbWFyeVwiLCB0eXBlOiBCb29sZWFuIH0pXG4gIHB1YmxpYyBzaG93Q3VycmVudEFzUHJpbWFyeSA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogXCJwcmV2ZW50LWludGVyYWN0aW9uLW9uLXNjcm9sbFwiIH0pXG4gIHB1YmxpYyBwcmV2ZW50SW50ZXJhY3Rpb25PblNjcm9sbCA9IGZhbHNlO1xuXG4gIEBzdGF0ZSgpIHByaXZhdGUgX3RhcmdldEh1bWlkaXR5PzogbnVtYmVyO1xuXG4gIHByaXZhdGUgX3NpemVDb250cm9sbGVyID0gY3JlYXRlU3RhdGVDb250cm9sQ2lyY3VsYXJTbGlkZXJDb250cm9sbGVyKHRoaXMpO1xuXG4gIHByb3RlY3RlZCB3aWxsVXBkYXRlKGNoYW5nZWRQcm9wOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLndpbGxVcGRhdGUoY2hhbmdlZFByb3ApO1xuICAgIGlmIChjaGFuZ2VkUHJvcC5oYXMoXCJzdGF0ZU9ialwiKSkge1xuICAgICAgdGhpcy5fdGFyZ2V0SHVtaWRpdHkgPSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuaHVtaWRpdHk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3N0ZXAoKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBwcml2YXRlIGdldCBfbWluKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMubWluX2h1bWlkaXR5ID8/IDA7XG4gIH1cblxuICBwcml2YXRlIGdldCBfbWF4KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X2h1bWlkaXR5ID8/IDEwMDtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IChldi5kZXRhaWwgYXMgYW55KS52YWx1ZTtcbiAgICBpZiAoaXNOYU4odmFsdWUpKSByZXR1cm47XG4gICAgdGhpcy5fdGFyZ2V0SHVtaWRpdHkgPSB2YWx1ZTtcbiAgICB0aGlzLl9jYWxsU2VydmljZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2luZyhldjogQ3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IChldi5kZXRhaWwgYXMgYW55KS52YWx1ZTtcbiAgICBpZiAoaXNOYU4odmFsdWUpKSByZXR1cm47XG4gICAgdGhpcy5fdGFyZ2V0SHVtaWRpdHkgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2RlYm91bmNlZENhbGxTZXJ2aWNlID0gZGVib3VuY2UoKCkgPT4gdGhpcy5fY2FsbFNlcnZpY2UoKSwgMTAwMCk7XG5cbiAgcHJpdmF0ZSBfY2FsbFNlcnZpY2UoKSB7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiaHVtaWRpZmllclwiLCBcInNldF9odW1pZGl0eVwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmohLmVudGl0eV9pZCxcbiAgICAgIGh1bWlkaXR5OiB0aGlzLl90YXJnZXRIdW1pZGl0eSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUJ1dHRvbihldikge1xuICAgIGNvbnN0IHN0ZXAgPSBldi5jdXJyZW50VGFyZ2V0LnN0ZXAgYXMgbnVtYmVyO1xuXG4gICAgbGV0IGh1bWlkaXR5ID0gdGhpcy5fdGFyZ2V0SHVtaWRpdHkgPz8gdGhpcy5fbWluO1xuICAgIGh1bWlkaXR5ICs9IHN0ZXA7XG4gICAgaHVtaWRpdHkgPSBjbGFtcChodW1pZGl0eSwgdGhpcy5fbWluLCB0aGlzLl9tYXgpO1xuXG4gICAgdGhpcy5fdGFyZ2V0SHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgICB0aGlzLl9kZWJvdW5jZWRDYWxsU2VydmljZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVuZGVyTGFiZWwoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFVOQVZBSUxBQkxFKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPHAgY2xhc3M9XCJsYWJlbCBkaXNhYmxlZFwiPlxuICAgICAgICAgICR7dGhpcy5oYXNzLmZvcm1hdEVudGl0eVN0YXRlKHRoaXMuc3RhdGVPYmosIFVOQVZBSUxBQkxFKX1cbiAgICAgICAgPC9wPlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYWN0aW9uO1xuXG4gICAgY29uc3QgaXNIdW1pZGl0eURpc3BsYXllZCA9XG4gICAgICAodGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmN1cnJlbnRfaHVtaWRpdHkgIT0gbnVsbCAmJlxuICAgICAgICB0aGlzLnNob3dDdXJyZW50QXNQcmltYXJ5KSB8fFxuICAgICAgKHRoaXMuX3RhcmdldEh1bWlkaXR5ICE9IG51bGwgJiYgIXRoaXMuc2hvd0N1cnJlbnRBc1ByaW1hcnkpO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cCBjbGFzcz1cImxhYmVsXCI+XG4gICAgICAgICR7YWN0aW9uICYmIGFjdGlvbiAhPT0gXCJvZmZcIlxuICAgICAgICAgID8gdGhpcy5oYXNzLmZvcm1hdEVudGl0eUF0dHJpYnV0ZVZhbHVlKHRoaXMuc3RhdGVPYmosIFwiYWN0aW9uXCIpXG4gICAgICAgICAgOiBpc0h1bWlkaXR5RGlzcGxheWVkXG4gICAgICAgICAgICA/IHRoaXMuaGFzcy5mb3JtYXRFbnRpdHlTdGF0ZSh0aGlzLnN0YXRlT2JqKVxuICAgICAgICAgICAgOiBub3RoaW5nfVxuICAgICAgPC9wPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJCdXR0b25zKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgPGhhLW91dGxpbmVkLWljb24tYnV0dG9uXG4gICAgICAgICAgLnN0ZXA9JHstdGhpcy5fc3RlcH1cbiAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9oYW5kbGVCdXR0b259XG4gICAgICAgID5cbiAgICAgICAgICA8aGEtc3ZnLWljb24gLnBhdGg9JHttZGlNaW51c30+PC9oYS1zdmctaWNvbj5cbiAgICAgICAgPC9oYS1vdXRsaW5lZC1pY29uLWJ1dHRvbj5cbiAgICAgICAgPGhhLW91dGxpbmVkLWljb24tYnV0dG9uXG4gICAgICAgICAgLnN0ZXA9JHt0aGlzLl9zdGVwfVxuICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2hhbmRsZUJ1dHRvbn1cbiAgICAgICAgPlxuICAgICAgICAgIDxoYS1zdmctaWNvbiAucGF0aD0ke21kaVBsdXN9PjwvaGEtc3ZnLWljb24+XG4gICAgICAgIDwvaGEtb3V0bGluZWQtaWNvbi1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVuZGVyUHJpbWFyeSgpIHtcbiAgICBjb25zdCBjdXJyZW50SHVtaWRpdHkgPSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuY3VycmVudF9odW1pZGl0eTtcblxuICAgIGlmIChjdXJyZW50SHVtaWRpdHkgIT0gbnVsbCAmJiB0aGlzLnNob3dDdXJyZW50QXNQcmltYXJ5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVuZGVyQ3VycmVudChjdXJyZW50SHVtaWRpdHksIFwiYmlnXCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90YXJnZXRIdW1pZGl0eSAhPSBudWxsICYmICF0aGlzLnNob3dDdXJyZW50QXNQcmltYXJ5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVuZGVyVGFyZ2V0KHRoaXMuX3RhcmdldEh1bWlkaXR5ISwgXCJiaWdcIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGVPYmouc3RhdGUgIT09IFVOQVZBSUxBQkxFKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPHAgY2xhc3M9XCJwcmltYXJ5LXN0YXRlXCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MuZm9ybWF0RW50aXR5U3RhdGUodGhpcy5zdGF0ZU9iail9XG4gICAgICAgIDwvcD5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vdGhpbmc7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJTZWNvbmRhcnkoKSB7XG4gICAgaWYgKCF0aGlzLnNob3dTZWNvbmRhcnkpIHtcbiAgICAgIHJldHVybiBodG1sYDxwIGNsYXNzPVwibGFiZWxcIj48L3A+YDtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50SHVtaWRpdHkgPSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuY3VycmVudF9odW1pZGl0eTtcblxuICAgIGlmIChjdXJyZW50SHVtaWRpdHkgIT0gbnVsbCAmJiAhdGhpcy5zaG93Q3VycmVudEFzUHJpbWFyeSkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj5cbiAgICAgICAgICA8aGEtc3ZnLWljb24gLnBhdGg9JHttZGlXYXRlclBlcmNlbnR9PjwvaGEtc3ZnLWljb24+XG4gICAgICAgICAgJHt0aGlzLl9yZW5kZXJDdXJyZW50KGN1cnJlbnRIdW1pZGl0eSwgXCJub3JtYWxcIil9XG4gICAgICAgIDwvcD5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RhcmdldEh1bWlkaXR5ICE9IG51bGwgJiYgdGhpcy5zaG93Q3VycmVudEFzUHJpbWFyeSkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxwIGNsYXNzPVwibGFiZWxcIj5cbiAgICAgICAgICA8aGEtc3ZnLWljb24gLnBhdGg9JHttZGlUaGVybW9zdGF0fT48L2hhLXN2Zy1pY29uPlxuICAgICAgICAgICR7dGhpcy5fcmVuZGVyQ3VycmVudCh0aGlzLl90YXJnZXRIdW1pZGl0eSwgXCJub3JtYWxcIil9XG4gICAgICAgIDwvcD5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgPHAgY2xhc3M9XCJsYWJlbFwiPjwvcD5gO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVuZGVyVGFyZ2V0KGh1bWlkaXR5OiBudW1iZXIsIHN0eWxlOiBcIm5vcm1hbFwiIHwgXCJiaWdcIikge1xuICAgIGNvbnN0IGZvcm1hdE9wdGlvbnM6IEludGwuTnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCxcbiAgICB9O1xuICAgIGlmIChzdHlsZSA9PT0gXCJiaWdcIikge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxoYS1iaWctbnVtYmVyXG4gICAgICAgICAgLnZhbHVlPSR7aHVtaWRpdHl9XG4gICAgICAgICAgLnVuaXQ9JHtET01BSU5fQVRUUklCVVRFU19VTklUUy5odW1pZGlmaWVyLmN1cnJlbnRfaHVtaWRpdHl9XG4gICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgLmZvcm1hdE9wdGlvbnM9JHtmb3JtYXRPcHRpb25zfVxuICAgICAgICAgIHVuaXQtcG9zaXRpb249XCJib3R0b21cIlxuICAgICAgICA+PC9oYS1iaWctbnVtYmVyPlxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5oYXNzLmZvcm1hdEVudGl0eUF0dHJpYnV0ZVZhbHVlKFxuICAgICAgICB0aGlzLnN0YXRlT2JqLFxuICAgICAgICBcImh1bWlkaXR5XCIsXG4gICAgICAgIGh1bWlkaXR5XG4gICAgICApfVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJDdXJyZW50KGh1bWlkaXR5OiBudW1iZXIsIHN0eWxlOiBcIm5vcm1hbFwiIHwgXCJiaWdcIikge1xuICAgIGNvbnN0IGZvcm1hdE9wdGlvbnM6IEludGwuTnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSxcbiAgICB9O1xuICAgIGlmIChzdHlsZSA9PT0gXCJiaWdcIikge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxoYS1iaWctbnVtYmVyXG4gICAgICAgICAgLnZhbHVlPSR7aHVtaWRpdHl9XG4gICAgICAgICAgLnVuaXQ9JHtET01BSU5fQVRUUklCVVRFU19VTklUUy5odW1pZGlmaWVyLmN1cnJlbnRfaHVtaWRpdHl9XG4gICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgLmZvcm1hdE9wdGlvbnM9JHtmb3JtYXRPcHRpb25zfVxuICAgICAgICAgIHVuaXQtcG9zaXRpb249XCJib3R0b21cIlxuICAgICAgICA+PC9oYS1iaWctbnVtYmVyPlxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5oYXNzLmZvcm1hdEVudGl0eUF0dHJpYnV0ZVZhbHVlKFxuICAgICAgICB0aGlzLnN0YXRlT2JqLFxuICAgICAgICBcImN1cnJlbnRfaHVtaWRpdHlcIixcbiAgICAgICAgaHVtaWRpdHlcbiAgICAgICl9XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbmRlckluZm8oKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAke3RoaXMuX3JlbmRlckxhYmVsKCl9JHt0aGlzLl9yZW5kZXJQcmltYXJ5KCl9JHt0aGlzLl9yZW5kZXJTZWNvbmRhcnkoKX1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0YXRlQ29sb3IgPSBzdGF0ZUNvbG9yQ3NzKHRoaXMuc3RhdGVPYmopO1xuICAgIGNvbnN0IGFjdGl2ZSA9IHN0YXRlQWN0aXZlKHRoaXMuc3RhdGVPYmopO1xuXG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmFjdGlvbjtcblxuICAgIGxldCBhY3Rpb25Db2xvcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIGlmIChhY3Rpb24gJiYgYWN0aW9uICE9PSBcImlkbGVcIiAmJiBhY3Rpb24gIT09IFwib2ZmXCIgJiYgYWN0aXZlKSB7XG4gICAgICBhY3Rpb25Db2xvciA9IHN0YXRlQ29sb3JDc3MoXG4gICAgICAgIHRoaXMuc3RhdGVPYmosXG4gICAgICAgIEhVTUlESUZJRVJfQUNUSU9OX01PREVbYWN0aW9uXVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXRIdW1pZGl0eSA9IHRoaXMuX3RhcmdldEh1bWlkaXR5O1xuICAgIGNvbnN0IGN1cnJlbnRIdW1pZGl0eSA9IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5jdXJyZW50X2h1bWlkaXR5O1xuXG4gICAgY29uc3QgY29udGFpbmVyU2l6ZUNsYXNzID0gdGhpcy5fc2l6ZUNvbnRyb2xsZXIudmFsdWVcbiAgICAgID8gYCAke3RoaXMuX3NpemVDb250cm9sbGVyLnZhbHVlfWBcbiAgICAgIDogXCJcIjtcblxuICAgIGlmICh0YXJnZXRIdW1pZGl0eSAhPSBudWxsICYmIHRoaXMuc3RhdGVPYmouc3RhdGUgIT09IFVOQVZBSUxBQkxFKSB7XG4gICAgICBjb25zdCBpbnZlcnRlZCA9XG4gICAgICAgIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MgPT09XG4gICAgICAgIEh1bWlkaWZpZXJFbnRpdHlEZXZpY2VDbGFzcy5ERUhVTUlESUZJRVI7XG5cbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjb250YWluZXIke2NvbnRhaW5lclNpemVDbGFzc31cIlxuICAgICAgICAgIHN0eWxlPSR7c3R5bGVNYXAoe1xuICAgICAgICAgICAgXCItLXN0YXRlLWNvbG9yXCI6IHN0YXRlQ29sb3IsXG4gICAgICAgICAgICBcIi0tYWN0aW9uLWNvbG9yXCI6IGFjdGlvbkNvbG9yLFxuICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPGhhLWNvbnRyb2wtY2lyY3VsYXItc2xpZGVyXG4gICAgICAgICAgICAucHJldmVudEludGVyYWN0aW9uT25TY3JvbGw9JHt0aGlzLnByZXZlbnRJbnRlcmFjdGlvbk9uU2Nyb2xsfVxuICAgICAgICAgICAgLmluYWN0aXZlPSR7IWFjdGl2ZX1cbiAgICAgICAgICAgIC5tb2RlPSR7aW52ZXJ0ZWQgPyBcImVuZFwiIDogXCJzdGFydFwifVxuICAgICAgICAgICAgLnZhbHVlPSR7dGFyZ2V0SHVtaWRpdHl9XG4gICAgICAgICAgICAubWluPSR7dGhpcy5fbWlufVxuICAgICAgICAgICAgLm1heD0ke3RoaXMuX21heH1cbiAgICAgICAgICAgIC5zdGVwPSR7dGhpcy5fc3RlcH1cbiAgICAgICAgICAgIC5jdXJyZW50PSR7Y3VycmVudEh1bWlkaXR5fVxuICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdpbmc9JHt0aGlzLl92YWx1ZUNoYW5naW5nfVxuICAgICAgICAgID5cbiAgICAgICAgICA8L2hhLWNvbnRyb2wtY2lyY3VsYXItc2xpZGVyPlxuICAgICAgICAgICR7dGhpcy5fcmVuZGVySW5mbygpfSAke3RoaXMuX3JlbmRlckJ1dHRvbnMoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImNvbnRhaW5lciR7Y29udGFpbmVyU2l6ZUNsYXNzfVwiXG4gICAgICAgIHN0eWxlPSR7c3R5bGVNYXAoe1xuICAgICAgICAgIFwiLS1zdGF0ZS1jb2xvclwiOiBzdGF0ZUNvbG9yLFxuICAgICAgICAgIFwiLS1hY3Rpb24tY29sb3JcIjogYWN0aW9uQ29sb3IsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8aGEtY29udHJvbC1jaXJjdWxhci1zbGlkZXJcbiAgICAgICAgICAucHJldmVudEludGVyYWN0aW9uT25TY3JvbGw9JHt0aGlzLnByZXZlbnRJbnRlcmFjdGlvbk9uU2Nyb2xsfVxuICAgICAgICAgIC5jdXJyZW50PSR7Y3VycmVudEh1bWlkaXR5fVxuICAgICAgICAgIC5taW49JHt0aGlzLl9taW59XG4gICAgICAgICAgLm1heD0ke3RoaXMuX21heH1cbiAgICAgICAgICAuc3RlcD0ke3RoaXMuX3N0ZXB9XG4gICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgPlxuICAgICAgICA8L2hhLWNvbnRyb2wtY2lyY3VsYXItc2xpZGVyPlxuICAgICAgICAke3RoaXMuX3JlbmRlckluZm8oKX1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRHcm91cCB7XG4gICAgcmV0dXJuIHN0YXRlQ29udHJvbENpcmN1bGFyU2xpZGVyU3R5bGU7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXN0YXRlLWNvbnRyb2wtaHVtaWRpZmllci1odW1pZGl0eVwiOiBIYVN0YXRlQ29udHJvbEh1bWlkaWZpZXJIdW1pZGl0eTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/state-control/humidifier/ha-state-control-humidifier-humidity.ts\n");

/***/ })

};
