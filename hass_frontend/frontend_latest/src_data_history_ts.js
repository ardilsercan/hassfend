/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
export const id = "src_data_history_ts";
export const ids = ["src_data_history_ts"];
export const modules = {

/***/ "./src/data/history.ts":
/*!*****************************!*\
  !*** ./src/data/history.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computeGroupKey: () => (/* binding */ computeGroupKey),\n/* harmony export */   computeHistory: () => (/* binding */ computeHistory),\n/* harmony export */   entityIdHistoryNeedsAttributes: () => (/* binding */ entityIdHistoryNeedsAttributes),\n/* harmony export */   fetchDateWS: () => (/* binding */ fetchDateWS),\n/* harmony export */   subscribeHistory: () => (/* binding */ subscribeHistory),\n/* harmony export */   subscribeHistoryStatesTimeWindow: () => (/* binding */ subscribeHistoryStatesTimeWindow)\n/* harmony export */ });\n/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/compute_domain */ \"./src/common/entity/compute_domain.ts\");\n/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_display */ \"./src/common/entity/compute_state_display.ts\");\n/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entity/compute_state_name */ \"./src/common/entity/compute_state_name.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_1__]);\n_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst DOMAINS_USE_LAST_UPDATED = [\"climate\", \"humidifier\", \"water_heater\"];\nconst NEED_ATTRIBUTE_DOMAINS = [\"climate\", \"humidifier\", \"input_datetime\", \"thermostat\", \"water_heater\", \"person\", \"device_tracker\"];\nconst LINE_ATTRIBUTES_TO_KEEP = [\"temperature\", \"current_temperature\", \"target_temp_low\", \"target_temp_high\", \"hvac_action\", \"humidity\", \"mode\", \"action\", \"current_humidity\"];\nconst entityIdHistoryNeedsAttributes = (hass, entityId) => !hass.states[entityId] || NEED_ATTRIBUTE_DOMAINS.includes((0,_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_0__.computeDomain)(entityId));\nconst fetchDateWS = (hass, startTime, endTime, entityIds) => {\n  const params = {\n    type: \"history/history_during_period\",\n    start_time: startTime.toISOString(),\n    end_time: endTime.toISOString(),\n    minimal_response: true,\n    no_attributes: !entityIds.some(entityId => entityIdHistoryNeedsAttributes(hass, entityId))\n  };\n  if (entityIds.length !== 0) {\n    return hass.callWS({\n      ...params,\n      entity_ids: entityIds\n    });\n  }\n  return hass.callWS(params);\n};\nconst subscribeHistory = (hass, callbackFunction, startTime, endTime, entityIds) => {\n  const params = {\n    type: \"history/stream\",\n    entity_ids: entityIds,\n    start_time: startTime.toISOString(),\n    end_time: endTime.toISOString(),\n    minimal_response: true,\n    no_attributes: !entityIds.some(entityId => entityIdHistoryNeedsAttributes(hass, entityId))\n  };\n  const stream = new HistoryStream(hass);\n  return hass.connection.subscribeMessage(message => callbackFunction(stream.processMessage(message)), params);\n};\nclass HistoryStream {\n  constructor(hass, hoursToShow) {\n    this.hass = void 0;\n    this.hoursToShow = void 0;\n    this.combinedHistory = void 0;\n    this.hass = hass;\n    this.hoursToShow = hoursToShow;\n    this.combinedHistory = {};\n  }\n  processMessage(streamMessage) {\n    if (!this.combinedHistory || !Object.keys(this.combinedHistory).length) {\n      this.combinedHistory = streamMessage.states;\n      return this.combinedHistory;\n    }\n    if (!Object.keys(streamMessage.states).length) {\n      // Empty messages are still sent to\n      // indicate no more historical events\n      return this.combinedHistory;\n    }\n    const purgeBeforePythonTime = this.hoursToShow ? (new Date().getTime() - 60 * 60 * this.hoursToShow * 1000) / 1000 : undefined;\n    const newHistory = {};\n    for (const entityId of Object.keys(this.combinedHistory)) {\n      newHistory[entityId] = [];\n    }\n    for (const entityId of Object.keys(streamMessage.states)) {\n      newHistory[entityId] = [];\n    }\n    for (const entityId of Object.keys(newHistory)) {\n      if (entityId in this.combinedHistory && entityId in streamMessage.states) {\n        const entityCombinedHistory = this.combinedHistory[entityId];\n        const lastEntityCombinedHistory = entityCombinedHistory[entityCombinedHistory.length - 1];\n        newHistory[entityId] = entityCombinedHistory.concat(streamMessage.states[entityId]);\n        if (streamMessage.states[entityId][0].lu < lastEntityCombinedHistory.lu) {\n          // If the history is out of order we have to sort it.\n          newHistory[entityId] = newHistory[entityId].sort((a, b) => a.lu - b.lu);\n        }\n      } else if (entityId in this.combinedHistory) {\n        newHistory[entityId] = this.combinedHistory[entityId];\n      } else {\n        newHistory[entityId] = streamMessage.states[entityId];\n      }\n      // Remove old history\n      if (purgeBeforePythonTime && entityId in this.combinedHistory) {\n        const expiredStates = newHistory[entityId].filter(state => state.lu < purgeBeforePythonTime);\n        if (!expiredStates.length) {\n          continue;\n        }\n        newHistory[entityId] = newHistory[entityId].filter(state => state.lu >= purgeBeforePythonTime);\n        if (newHistory[entityId].length && newHistory[entityId][0].lu === purgeBeforePythonTime) {\n          continue;\n        }\n        // Update the first entry to the start time state\n        // as we need to preserve the start time state and\n        // only expire the rest of the history as it ages.\n        const lastExpiredState = expiredStates[expiredStates.length - 1];\n        lastExpiredState.lu = purgeBeforePythonTime;\n        newHistory[entityId].unshift(lastExpiredState);\n      }\n    }\n    this.combinedHistory = newHistory;\n    return this.combinedHistory;\n  }\n}\nconst subscribeHistoryStatesTimeWindow = (hass, callbackFunction, hoursToShow, entityIds, minimalResponse = true, significantChangesOnly = true, noAttributes) => {\n  const params = {\n    type: \"history/stream\",\n    entity_ids: entityIds,\n    start_time: new Date(new Date().getTime() - 60 * 60 * hoursToShow * 1000).toISOString(),\n    minimal_response: minimalResponse,\n    significant_changes_only: significantChangesOnly,\n    no_attributes: noAttributes !== null && noAttributes !== void 0 ? noAttributes : !entityIds.some(entityId => entityIdHistoryNeedsAttributes(hass, entityId))\n  };\n  const stream = new HistoryStream(hass, hoursToShow);\n  return hass.connection.subscribeMessage(message => callbackFunction(stream.processMessage(message)), params);\n};\nconst equalState = (obj1, obj2) => obj1.state === obj2.state && (\n// Only compare attributes if both states have an attributes object.\n// When `minimal_response` is sent, only the first and last state\n// will have attributes except for domains in DOMAINS_USE_LAST_UPDATED.\n!obj1.attributes || !obj2.attributes || LINE_ATTRIBUTES_TO_KEEP.every(attr => obj1.attributes[attr] === obj2.attributes[attr]));\nconst processTimelineEntity = (localize, locale, config, entities, entityId, states, current_state) => {\n  const data = [];\n  const first = states[0];\n  for (const state of states) {\n    if (data.length > 0 && state.s === data[data.length - 1].state) {\n      continue;\n    }\n    const currentAttributes = {};\n    if (current_state !== null && current_state !== void 0 && current_state.attributes.device_class) {\n      currentAttributes.device_class = current_state === null || current_state === void 0 ? void 0 : current_state.attributes.device_class;\n    }\n    data.push({\n      state_localize: (0,_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_1__.computeStateDisplayFromEntityAttributes)(localize, locale, config, entities[entityId], entityId, {\n        ...(state.a || first.a),\n        ...currentAttributes\n      }, state.s),\n      state: state.s,\n      // lc (last_changed) may be omitted if its the same\n      // as lu (last_updated).\n      last_changed: (state.lc ? state.lc : state.lu) * 1000\n    });\n  }\n  return {\n    name: (0,_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__.computeStateNameFromEntityAttributes)(entityId, (current_state === null || current_state === void 0 ? void 0 : current_state.attributes) || first.a),\n    entity_id: entityId,\n    data\n  };\n};\nconst processLineChartEntities = (unit, device_class, entities, hassEntities) => {\n  const data = [];\n  Object.keys(entities).forEach(entityId => {\n    const states = entities[entityId];\n    const first = states[0];\n    const domain = (0,_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_0__.computeDomain)(entityId);\n    const processedStates = [];\n    for (const state of states) {\n      let processedState;\n      if (DOMAINS_USE_LAST_UPDATED.includes(domain)) {\n        processedState = {\n          state: state.s,\n          last_changed: state.lu * 1000,\n          attributes: {}\n        };\n        for (const attr of LINE_ATTRIBUTES_TO_KEEP) {\n          if (attr in state.a) {\n            processedState.attributes[attr] = state.a[attr];\n          }\n        }\n      } else {\n        processedState = {\n          state: state.s,\n          // lc (last_changed) may be omitted if its the same\n          // as lu (last_updated).\n          last_changed: (state.lc ? state.lc : state.lu) * 1000,\n          attributes: {}\n        };\n      }\n      if (processedStates.length > 1 && equalState(processedState, processedStates[processedStates.length - 1]) && equalState(processedState, processedStates[processedStates.length - 2])) {\n        continue;\n      }\n      processedStates.push(processedState);\n    }\n    const attributes = entityId in hassEntities ? hassEntities[entityId].attributes : \"friendly_name\" in first.a ? first.a : undefined;\n    data.push({\n      domain,\n      name: (0,_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__.computeStateNameFromEntityAttributes)(entityId, attributes || {}),\n      entity_id: entityId,\n      states: processedStates\n    });\n  });\n  return {\n    unit,\n    device_class,\n    identifier: Object.keys(entities).join(\"\"),\n    data\n  };\n};\nconst NUMERICAL_DOMAINS = [\"counter\", \"input_number\", \"number\"];\nconst isNumericFromDomain = domain => NUMERICAL_DOMAINS.includes(domain);\nconst isNumericFromAttributes = attributes => \"unit_of_measurement\" in attributes || \"state_class\" in attributes;\nconst isNumericSensorEntity = (stateObj, sensorNumericalDeviceClasses) => stateObj.attributes.device_class != null && sensorNumericalDeviceClasses.includes(stateObj.attributes.device_class);\nconst BLANK_UNIT = \" \";\nconst computeHistory = (hass, stateHistory, localize, sensorNumericalDeviceClasses, splitDeviceClasses = false) => {\n  const lineChartDevices = {};\n  const timelineDevices = [];\n  if (!stateHistory) {\n    return {\n      line: [],\n      timeline: []\n    };\n  }\n  Object.keys(stateHistory).forEach(entityId => {\n    var _ref;\n    const stateInfo = stateHistory[entityId];\n    if (stateInfo.length === 0) {\n      return;\n    }\n    const domain = (0,_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_0__.computeDomain)(entityId);\n    const currentState = entityId in hass.states ? hass.states[entityId] : undefined;\n    const numericStateFromHistory = currentState || isNumericFromDomain(domain) ? undefined : stateInfo.find(state => state.a && isNumericFromAttributes(state.a));\n    let unit;\n    const isNumeric = isNumericFromDomain(domain) || currentState != null && isNumericFromAttributes(currentState.attributes) || currentState != null && domain === \"sensor\" && isNumericSensorEntity(currentState, sensorNumericalDeviceClasses) || numericStateFromHistory != null;\n    if (isNumeric) {\n      unit = (currentState === null || currentState === void 0 ? void 0 : currentState.attributes.unit_of_measurement) || (numericStateFromHistory === null || numericStateFromHistory === void 0 ? void 0 : numericStateFromHistory.a.unit_of_measurement) || BLANK_UNIT;\n    } else {\n      unit = {\n        zone: localize(\"ui.dialogs.more_info_control.zone.graph_unit\"),\n        climate: hass.config.unit_system.temperature,\n        humidifier: \"%\",\n        water_heater: hass.config.unit_system.temperature\n      }[domain];\n    }\n    const specialDomainClasses = {\n      climate: \"temperature\",\n      humidifier: \"humidity\",\n      water_heater: \"temperature\"\n    };\n    const deviceClass = specialDomainClasses[domain] || ((_ref = (currentState === null || currentState === void 0 ? void 0 : currentState.attributes) || (numericStateFromHistory === null || numericStateFromHistory === void 0 ? void 0 : numericStateFromHistory.a)) === null || _ref === void 0 ? void 0 : _ref.device_class);\n    const key = computeGroupKey(unit, deviceClass, splitDeviceClasses);\n    if (!unit) {\n      timelineDevices.push(processTimelineEntity(localize, hass.locale, hass.config, hass.entities, entityId, stateInfo, currentState));\n    } else if (key && key in lineChartDevices && entityId in lineChartDevices[key]) {\n      lineChartDevices[key][entityId].push(...stateInfo);\n    } else if (key) {\n      if (!(key in lineChartDevices)) {\n        lineChartDevices[key] = {};\n      }\n      lineChartDevices[key][entityId] = stateInfo;\n    }\n  });\n  const unitStates = Object.keys(lineChartDevices).map(key => {\n    const splitKey = key.split(\"_\");\n    const unit = splitKey[0];\n    const deviceClass = splitKey[1] || undefined;\n    return processLineChartEntities(unit, deviceClass, lineChartDevices[key], hass.states);\n  });\n  return {\n    line: unitStates,\n    timeline: timelineDevices\n  };\n};\nconst computeGroupKey = (unit, device_class, splitDeviceClasses) => splitDeviceClasses ? `${unit}_${device_class || \"\"}` : unit;\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9oaXN0b3J5LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFTQTtBQXVFQTtBQU9BO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFPQTtBQUFBO0FBTkE7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUdBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFHQTtBQU9BO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBT0E7QUFFQTtBQVNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBV0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvZGF0YS9oaXN0b3J5LnRzPzM1MDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSGFzc0NvbmZpZyxcbiAgSGFzc0VudGl0aWVzLFxuICBIYXNzRW50aXR5LFxuICBIYXNzRW50aXR5QXR0cmlidXRlQmFzZSxcbn0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEaXNwbGF5RnJvbUVudGl0eUF0dHJpYnV0ZXMgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2Rpc3BsYXlcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWVGcm9tRW50aXR5QXR0cmlidXRlcyB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEZyb250ZW5kTG9jYWxlRGF0YSB9IGZyb20gXCIuL3RyYW5zbGF0aW9uXCI7XG5cbmNvbnN0IERPTUFJTlNfVVNFX0xBU1RfVVBEQVRFRCA9IFtcImNsaW1hdGVcIiwgXCJodW1pZGlmaWVyXCIsIFwid2F0ZXJfaGVhdGVyXCJdO1xuY29uc3QgTkVFRF9BVFRSSUJVVEVfRE9NQUlOUyA9IFtcbiAgXCJjbGltYXRlXCIsXG4gIFwiaHVtaWRpZmllclwiLFxuICBcImlucHV0X2RhdGV0aW1lXCIsXG4gIFwidGhlcm1vc3RhdFwiLFxuICBcIndhdGVyX2hlYXRlclwiLFxuICBcInBlcnNvblwiLFxuICBcImRldmljZV90cmFja2VyXCIsXG5dO1xuY29uc3QgTElORV9BVFRSSUJVVEVTX1RPX0tFRVAgPSBbXG4gIFwidGVtcGVyYXR1cmVcIixcbiAgXCJjdXJyZW50X3RlbXBlcmF0dXJlXCIsXG4gIFwidGFyZ2V0X3RlbXBfbG93XCIsXG4gIFwidGFyZ2V0X3RlbXBfaGlnaFwiLFxuICBcImh2YWNfYWN0aW9uXCIsXG4gIFwiaHVtaWRpdHlcIixcbiAgXCJtb2RlXCIsXG4gIFwiYWN0aW9uXCIsXG4gIFwiY3VycmVudF9odW1pZGl0eVwiLFxuXTtcblxuZXhwb3J0IGludGVyZmFjZSBMaW5lQ2hhcnRTdGF0ZSB7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIGxhc3RfY2hhbmdlZDogbnVtYmVyO1xuICBhdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgYW55Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5lQ2hhcnRFbnRpdHkge1xuICBkb21haW46IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgc3RhdGVzOiBMaW5lQ2hhcnRTdGF0ZVtdO1xuICBzdGF0aXN0aWNzPzogTGluZUNoYXJ0U3RhdGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5lQ2hhcnRVbml0IHtcbiAgdW5pdDogc3RyaW5nO1xuICBkZXZpY2VfY2xhc3M/OiBzdHJpbmc7XG4gIGlkZW50aWZpZXI6IHN0cmluZztcbiAgZGF0YTogTGluZUNoYXJ0RW50aXR5W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGltZWxpbmVTdGF0ZSB7XG4gIHN0YXRlX2xvY2FsaXplOiBzdHJpbmc7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIGxhc3RfY2hhbmdlZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVsaW5lRW50aXR5IHtcbiAgbmFtZTogc3RyaW5nO1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgZGF0YTogVGltZWxpbmVTdGF0ZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhpc3RvcnlSZXN1bHQge1xuICBsaW5lOiBMaW5lQ2hhcnRVbml0W107XG4gIHRpbWVsaW5lOiBUaW1lbGluZUVudGl0eVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhpc3RvcnlTdGF0ZXMge1xuICBbZW50aXR5SWQ6IHN0cmluZ106IEVudGl0eUhpc3RvcnlTdGF0ZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eUhpc3RvcnlTdGF0ZSB7XG4gIC8qKiBzdGF0ZSAqL1xuICBzOiBzdHJpbmc7XG4gIC8qKiBhdHRyaWJ1dGVzICovXG4gIGE6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIC8qKiBsYXN0X2NoYW5nZWQ7IGlmIHNldCwgYWxzbyBhcHBsaWVzIHRvIGx1ICovXG4gIGxjOiBudW1iZXI7XG4gIC8qKiBsYXN0X3VwZGF0ZWQgKi9cbiAgbHU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIaXN0b3J5U3RyZWFtTWVzc2FnZSB7XG4gIHN0YXRlczogSGlzdG9yeVN0YXRlcztcbiAgc3RhcnRfdGltZT86IG51bWJlcjsgLy8gU3RhcnQgdGltZSBvZiB0aGlzIGhpc3RvcmljYWwgY2h1bmtcbiAgZW5kX3RpbWU/OiBudW1iZXI7IC8vIEVuZCB0aW1lIG9mIHRoaXMgaGlzdG9yaWNhbCBjaHVua1xufVxuXG5leHBvcnQgY29uc3QgZW50aXR5SWRIaXN0b3J5TmVlZHNBdHRyaWJ1dGVzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pID0+XG4gICFoYXNzLnN0YXRlc1tlbnRpdHlJZF0gfHxcbiAgTkVFRF9BVFRSSUJVVEVfRE9NQUlOUy5pbmNsdWRlcyhjb21wdXRlRG9tYWluKGVudGl0eUlkKSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaERhdGVXUyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgc3RhcnRUaW1lOiBEYXRlLFxuICBlbmRUaW1lOiBEYXRlLFxuICBlbnRpdHlJZHM6IHN0cmluZ1tdXG4pID0+IHtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIHR5cGU6IFwiaGlzdG9yeS9oaXN0b3J5X2R1cmluZ19wZXJpb2RcIixcbiAgICBzdGFydF90aW1lOiBzdGFydFRpbWUudG9JU09TdHJpbmcoKSxcbiAgICBlbmRfdGltZTogZW5kVGltZS50b0lTT1N0cmluZygpLFxuICAgIG1pbmltYWxfcmVzcG9uc2U6IHRydWUsXG4gICAgbm9fYXR0cmlidXRlczogIWVudGl0eUlkcy5zb21lKChlbnRpdHlJZCkgPT5cbiAgICAgIGVudGl0eUlkSGlzdG9yeU5lZWRzQXR0cmlidXRlcyhoYXNzLCBlbnRpdHlJZClcbiAgICApLFxuICB9O1xuICBpZiAoZW50aXR5SWRzLmxlbmd0aCAhPT0gMCkge1xuICAgIHJldHVybiBoYXNzLmNhbGxXUzxIaXN0b3J5U3RhdGVzPih7IC4uLnBhcmFtcywgZW50aXR5X2lkczogZW50aXR5SWRzIH0pO1xuICB9XG4gIHJldHVybiBoYXNzLmNhbGxXUzxIaXN0b3J5U3RhdGVzPihwYXJhbXMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUhpc3RvcnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGNhbGxiYWNrRnVuY3Rpb246IChkYXRhOiBIaXN0b3J5U3RhdGVzKSA9PiB2b2lkLFxuICBzdGFydFRpbWU6IERhdGUsXG4gIGVuZFRpbWU6IERhdGUsXG4gIGVudGl0eUlkczogc3RyaW5nW11cbik6IFByb21pc2U8KCkgPT4gUHJvbWlzZTx2b2lkPj4gPT4ge1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgdHlwZTogXCJoaXN0b3J5L3N0cmVhbVwiLFxuICAgIGVudGl0eV9pZHM6IGVudGl0eUlkcyxcbiAgICBzdGFydF90aW1lOiBzdGFydFRpbWUudG9JU09TdHJpbmcoKSxcbiAgICBlbmRfdGltZTogZW5kVGltZS50b0lTT1N0cmluZygpLFxuICAgIG1pbmltYWxfcmVzcG9uc2U6IHRydWUsXG4gICAgbm9fYXR0cmlidXRlczogIWVudGl0eUlkcy5zb21lKChlbnRpdHlJZCkgPT5cbiAgICAgIGVudGl0eUlkSGlzdG9yeU5lZWRzQXR0cmlidXRlcyhoYXNzLCBlbnRpdHlJZClcbiAgICApLFxuICB9O1xuICBjb25zdCBzdHJlYW0gPSBuZXcgSGlzdG9yeVN0cmVhbShoYXNzKTtcbiAgcmV0dXJuIGhhc3MuY29ubmVjdGlvbi5zdWJzY3JpYmVNZXNzYWdlPEhpc3RvcnlTdHJlYW1NZXNzYWdlPihcbiAgICAobWVzc2FnZSkgPT4gY2FsbGJhY2tGdW5jdGlvbihzdHJlYW0ucHJvY2Vzc01lc3NhZ2UobWVzc2FnZSkpLFxuICAgIHBhcmFtc1xuICApO1xufTtcblxuY2xhc3MgSGlzdG9yeVN0cmVhbSB7XG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgaG91cnNUb1Nob3c/OiBudW1iZXI7XG5cbiAgY29tYmluZWRIaXN0b3J5OiBIaXN0b3J5U3RhdGVzO1xuXG4gIGNvbnN0cnVjdG9yKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGhvdXJzVG9TaG93PzogbnVtYmVyKSB7XG4gICAgdGhpcy5oYXNzID0gaGFzcztcbiAgICB0aGlzLmhvdXJzVG9TaG93ID0gaG91cnNUb1Nob3c7XG4gICAgdGhpcy5jb21iaW5lZEhpc3RvcnkgPSB7fTtcbiAgfVxuXG4gIHByb2Nlc3NNZXNzYWdlKHN0cmVhbU1lc3NhZ2U6IEhpc3RvcnlTdHJlYW1NZXNzYWdlKTogSGlzdG9yeVN0YXRlcyB7XG4gICAgaWYgKCF0aGlzLmNvbWJpbmVkSGlzdG9yeSB8fCAhT2JqZWN0LmtleXModGhpcy5jb21iaW5lZEhpc3RvcnkpLmxlbmd0aCkge1xuICAgICAgdGhpcy5jb21iaW5lZEhpc3RvcnkgPSBzdHJlYW1NZXNzYWdlLnN0YXRlcztcbiAgICAgIHJldHVybiB0aGlzLmNvbWJpbmVkSGlzdG9yeTtcbiAgICB9XG4gICAgaWYgKCFPYmplY3Qua2V5cyhzdHJlYW1NZXNzYWdlLnN0YXRlcykubGVuZ3RoKSB7XG4gICAgICAvLyBFbXB0eSBtZXNzYWdlcyBhcmUgc3RpbGwgc2VudCB0b1xuICAgICAgLy8gaW5kaWNhdGUgbm8gbW9yZSBoaXN0b3JpY2FsIGV2ZW50c1xuICAgICAgcmV0dXJuIHRoaXMuY29tYmluZWRIaXN0b3J5O1xuICAgIH1cbiAgICBjb25zdCBwdXJnZUJlZm9yZVB5dGhvblRpbWUgPSB0aGlzLmhvdXJzVG9TaG93XG4gICAgICA/IChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIDYwICogNjAgKiB0aGlzLmhvdXJzVG9TaG93ICogMTAwMCkgLyAxMDAwXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBuZXdIaXN0b3J5OiBIaXN0b3J5U3RhdGVzID0ge307XG4gICAgZm9yIChjb25zdCBlbnRpdHlJZCBvZiBPYmplY3Qua2V5cyh0aGlzLmNvbWJpbmVkSGlzdG9yeSkpIHtcbiAgICAgIG5ld0hpc3RvcnlbZW50aXR5SWRdID0gW107XG4gICAgfVxuICAgIGZvciAoY29uc3QgZW50aXR5SWQgb2YgT2JqZWN0LmtleXMoc3RyZWFtTWVzc2FnZS5zdGF0ZXMpKSB7XG4gICAgICBuZXdIaXN0b3J5W2VudGl0eUlkXSA9IFtdO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGVudGl0eUlkIG9mIE9iamVjdC5rZXlzKG5ld0hpc3RvcnkpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGVudGl0eUlkIGluIHRoaXMuY29tYmluZWRIaXN0b3J5ICYmXG4gICAgICAgIGVudGl0eUlkIGluIHN0cmVhbU1lc3NhZ2Uuc3RhdGVzXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZW50aXR5Q29tYmluZWRIaXN0b3J5ID0gdGhpcy5jb21iaW5lZEhpc3RvcnlbZW50aXR5SWRdO1xuICAgICAgICBjb25zdCBsYXN0RW50aXR5Q29tYmluZWRIaXN0b3J5ID1cbiAgICAgICAgICBlbnRpdHlDb21iaW5lZEhpc3RvcnlbZW50aXR5Q29tYmluZWRIaXN0b3J5Lmxlbmd0aCAtIDFdO1xuICAgICAgICBuZXdIaXN0b3J5W2VudGl0eUlkXSA9IGVudGl0eUNvbWJpbmVkSGlzdG9yeS5jb25jYXQoXG4gICAgICAgICAgc3RyZWFtTWVzc2FnZS5zdGF0ZXNbZW50aXR5SWRdXG4gICAgICAgICk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzdHJlYW1NZXNzYWdlLnN0YXRlc1tlbnRpdHlJZF1bMF0ubHUgPCBsYXN0RW50aXR5Q29tYmluZWRIaXN0b3J5Lmx1XG4gICAgICAgICkge1xuICAgICAgICAgIC8vIElmIHRoZSBoaXN0b3J5IGlzIG91dCBvZiBvcmRlciB3ZSBoYXZlIHRvIHNvcnQgaXQuXG4gICAgICAgICAgbmV3SGlzdG9yeVtlbnRpdHlJZF0gPSBuZXdIaXN0b3J5W2VudGl0eUlkXS5zb3J0KFxuICAgICAgICAgICAgKGEsIGIpID0+IGEubHUgLSBiLmx1XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbnRpdHlJZCBpbiB0aGlzLmNvbWJpbmVkSGlzdG9yeSkge1xuICAgICAgICBuZXdIaXN0b3J5W2VudGl0eUlkXSA9IHRoaXMuY29tYmluZWRIaXN0b3J5W2VudGl0eUlkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0hpc3RvcnlbZW50aXR5SWRdID0gc3RyZWFtTWVzc2FnZS5zdGF0ZXNbZW50aXR5SWRdO1xuICAgICAgfVxuICAgICAgLy8gUmVtb3ZlIG9sZCBoaXN0b3J5XG4gICAgICBpZiAocHVyZ2VCZWZvcmVQeXRob25UaW1lICYmIGVudGl0eUlkIGluIHRoaXMuY29tYmluZWRIaXN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGV4cGlyZWRTdGF0ZXMgPSBuZXdIaXN0b3J5W2VudGl0eUlkXS5maWx0ZXIoXG4gICAgICAgICAgKHN0YXRlKSA9PiBzdGF0ZS5sdSA8IHB1cmdlQmVmb3JlUHl0aG9uVGltZVxuICAgICAgICApO1xuICAgICAgICBpZiAoIWV4cGlyZWRTdGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbmV3SGlzdG9yeVtlbnRpdHlJZF0gPSBuZXdIaXN0b3J5W2VudGl0eUlkXS5maWx0ZXIoXG4gICAgICAgICAgKHN0YXRlKSA9PiBzdGF0ZS5sdSA+PSBwdXJnZUJlZm9yZVB5dGhvblRpbWVcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG5ld0hpc3RvcnlbZW50aXR5SWRdLmxlbmd0aCAmJlxuICAgICAgICAgIG5ld0hpc3RvcnlbZW50aXR5SWRdWzBdLmx1ID09PSBwdXJnZUJlZm9yZVB5dGhvblRpbWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBmaXJzdCBlbnRyeSB0byB0aGUgc3RhcnQgdGltZSBzdGF0ZVxuICAgICAgICAvLyBhcyB3ZSBuZWVkIHRvIHByZXNlcnZlIHRoZSBzdGFydCB0aW1lIHN0YXRlIGFuZFxuICAgICAgICAvLyBvbmx5IGV4cGlyZSB0aGUgcmVzdCBvZiB0aGUgaGlzdG9yeSBhcyBpdCBhZ2VzLlxuICAgICAgICBjb25zdCBsYXN0RXhwaXJlZFN0YXRlID0gZXhwaXJlZFN0YXRlc1tleHBpcmVkU3RhdGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICBsYXN0RXhwaXJlZFN0YXRlLmx1ID0gcHVyZ2VCZWZvcmVQeXRob25UaW1lO1xuICAgICAgICBuZXdIaXN0b3J5W2VudGl0eUlkXS51bnNoaWZ0KGxhc3RFeHBpcmVkU3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNvbWJpbmVkSGlzdG9yeSA9IG5ld0hpc3Rvcnk7XG4gICAgcmV0dXJuIHRoaXMuY29tYmluZWRIaXN0b3J5O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVIaXN0b3J5U3RhdGVzVGltZVdpbmRvdyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgY2FsbGJhY2tGdW5jdGlvbjogKGRhdGE6IEhpc3RvcnlTdGF0ZXMpID0+IHZvaWQsXG4gIGhvdXJzVG9TaG93OiBudW1iZXIsXG4gIGVudGl0eUlkczogc3RyaW5nW10sXG4gIG1pbmltYWxSZXNwb25zZSA9IHRydWUsXG4gIHNpZ25pZmljYW50Q2hhbmdlc09ubHkgPSB0cnVlLFxuICBub0F0dHJpYnV0ZXM/OiBib29sZWFuXG4pOiBQcm9taXNlPCgpID0+IFByb21pc2U8dm9pZD4+ID0+IHtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIHR5cGU6IFwiaGlzdG9yeS9zdHJlYW1cIixcbiAgICBlbnRpdHlfaWRzOiBlbnRpdHlJZHMsXG4gICAgc3RhcnRfdGltZTogbmV3IERhdGUoXG4gICAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIDYwICogNjAgKiBob3Vyc1RvU2hvdyAqIDEwMDBcbiAgICApLnRvSVNPU3RyaW5nKCksXG4gICAgbWluaW1hbF9yZXNwb25zZTogbWluaW1hbFJlc3BvbnNlLFxuICAgIHNpZ25pZmljYW50X2NoYW5nZXNfb25seTogc2lnbmlmaWNhbnRDaGFuZ2VzT25seSxcbiAgICBub19hdHRyaWJ1dGVzOlxuICAgICAgbm9BdHRyaWJ1dGVzID8/XG4gICAgICAhZW50aXR5SWRzLnNvbWUoKGVudGl0eUlkKSA9PlxuICAgICAgICBlbnRpdHlJZEhpc3RvcnlOZWVkc0F0dHJpYnV0ZXMoaGFzcywgZW50aXR5SWQpXG4gICAgICApLFxuICB9O1xuICBjb25zdCBzdHJlYW0gPSBuZXcgSGlzdG9yeVN0cmVhbShoYXNzLCBob3Vyc1RvU2hvdyk7XG4gIHJldHVybiBoYXNzLmNvbm5lY3Rpb24uc3Vic2NyaWJlTWVzc2FnZTxIaXN0b3J5U3RyZWFtTWVzc2FnZT4oXG4gICAgKG1lc3NhZ2UpID0+IGNhbGxiYWNrRnVuY3Rpb24oc3RyZWFtLnByb2Nlc3NNZXNzYWdlKG1lc3NhZ2UpKSxcbiAgICBwYXJhbXNcbiAgKTtcbn07XG5cbmNvbnN0IGVxdWFsU3RhdGUgPSAob2JqMTogTGluZUNoYXJ0U3RhdGUsIG9iajI6IExpbmVDaGFydFN0YXRlKSA9PlxuICBvYmoxLnN0YXRlID09PSBvYmoyLnN0YXRlICYmXG4gIC8vIE9ubHkgY29tcGFyZSBhdHRyaWJ1dGVzIGlmIGJvdGggc3RhdGVzIGhhdmUgYW4gYXR0cmlidXRlcyBvYmplY3QuXG4gIC8vIFdoZW4gYG1pbmltYWxfcmVzcG9uc2VgIGlzIHNlbnQsIG9ubHkgdGhlIGZpcnN0IGFuZCBsYXN0IHN0YXRlXG4gIC8vIHdpbGwgaGF2ZSBhdHRyaWJ1dGVzIGV4Y2VwdCBmb3IgZG9tYWlucyBpbiBET01BSU5TX1VTRV9MQVNUX1VQREFURUQuXG4gICghb2JqMS5hdHRyaWJ1dGVzIHx8XG4gICAgIW9iajIuYXR0cmlidXRlcyB8fFxuICAgIExJTkVfQVRUUklCVVRFU19UT19LRUVQLmV2ZXJ5KFxuICAgICAgKGF0dHIpID0+IG9iajEuYXR0cmlidXRlcyFbYXR0cl0gPT09IG9iajIuYXR0cmlidXRlcyFbYXR0cl1cbiAgICApKTtcblxuY29uc3QgcHJvY2Vzc1RpbWVsaW5lRW50aXR5ID0gKFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBsb2NhbGU6IEZyb250ZW5kTG9jYWxlRGF0YSxcbiAgY29uZmlnOiBIYXNzQ29uZmlnLFxuICBlbnRpdGllczogSG9tZUFzc2lzdGFudFtcImVudGl0aWVzXCJdLFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICBzdGF0ZXM6IEVudGl0eUhpc3RvcnlTdGF0ZVtdLFxuICBjdXJyZW50X3N0YXRlOiBIYXNzRW50aXR5IHwgdW5kZWZpbmVkXG4pOiBUaW1lbGluZUVudGl0eSA9PiB7XG4gIGNvbnN0IGRhdGE6IFRpbWVsaW5lU3RhdGVbXSA9IFtdO1xuICBjb25zdCBmaXJzdDogRW50aXR5SGlzdG9yeVN0YXRlID0gc3RhdGVzWzBdO1xuICBmb3IgKGNvbnN0IHN0YXRlIG9mIHN0YXRlcykge1xuICAgIGlmIChkYXRhLmxlbmd0aCA+IDAgJiYgc3RhdGUucyA9PT0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdLnN0YXRlKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50QXR0cmlidXRlczogSGFzc0VudGl0eUF0dHJpYnV0ZUJhc2UgPSB7fTtcbiAgICBpZiAoY3VycmVudF9zdGF0ZT8uYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MpIHtcbiAgICAgIGN1cnJlbnRBdHRyaWJ1dGVzLmRldmljZV9jbGFzcyA9IGN1cnJlbnRfc3RhdGU/LmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzO1xuICAgIH1cblxuICAgIGRhdGEucHVzaCh7XG4gICAgICBzdGF0ZV9sb2NhbGl6ZTogY29tcHV0ZVN0YXRlRGlzcGxheUZyb21FbnRpdHlBdHRyaWJ1dGVzKFxuICAgICAgICBsb2NhbGl6ZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIGVudGl0aWVzW2VudGl0eUlkXSxcbiAgICAgICAgZW50aXR5SWQsXG4gICAgICAgIHtcbiAgICAgICAgICAuLi4oc3RhdGUuYSB8fCBmaXJzdC5hKSxcbiAgICAgICAgICAuLi5jdXJyZW50QXR0cmlidXRlcyxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGUuc1xuICAgICAgKSxcbiAgICAgIHN0YXRlOiBzdGF0ZS5zLFxuICAgICAgLy8gbGMgKGxhc3RfY2hhbmdlZCkgbWF5IGJlIG9taXR0ZWQgaWYgaXRzIHRoZSBzYW1lXG4gICAgICAvLyBhcyBsdSAobGFzdF91cGRhdGVkKS5cbiAgICAgIGxhc3RfY2hhbmdlZDogKHN0YXRlLmxjID8gc3RhdGUubGMgOiBzdGF0ZS5sdSkgKiAxMDAwLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjb21wdXRlU3RhdGVOYW1lRnJvbUVudGl0eUF0dHJpYnV0ZXMoXG4gICAgICBlbnRpdHlJZCxcbiAgICAgIGN1cnJlbnRfc3RhdGU/LmF0dHJpYnV0ZXMgfHwgZmlyc3QuYVxuICAgICksXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgICBkYXRhLFxuICB9O1xufTtcblxuY29uc3QgcHJvY2Vzc0xpbmVDaGFydEVudGl0aWVzID0gKFxuICB1bml0OiBzdHJpbmcsXG4gIGRldmljZV9jbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBlbnRpdGllczogSGlzdG9yeVN0YXRlcyxcbiAgaGFzc0VudGl0aWVzOiBIYXNzRW50aXRpZXNcbik6IExpbmVDaGFydFVuaXQgPT4ge1xuICBjb25zdCBkYXRhOiBMaW5lQ2hhcnRFbnRpdHlbXSA9IFtdO1xuXG4gIE9iamVjdC5rZXlzKGVudGl0aWVzKS5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlcyA9IGVudGl0aWVzW2VudGl0eUlkXTtcbiAgICBjb25zdCBmaXJzdDogRW50aXR5SGlzdG9yeVN0YXRlID0gc3RhdGVzWzBdO1xuICAgIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVEb21haW4oZW50aXR5SWQpO1xuICAgIGNvbnN0IHByb2Nlc3NlZFN0YXRlczogTGluZUNoYXJ0U3RhdGVbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBzdGF0ZSBvZiBzdGF0ZXMpIHtcbiAgICAgIGxldCBwcm9jZXNzZWRTdGF0ZTogTGluZUNoYXJ0U3RhdGU7XG5cbiAgICAgIGlmIChET01BSU5TX1VTRV9MQVNUX1VQREFURUQuaW5jbHVkZXMoZG9tYWluKSkge1xuICAgICAgICBwcm9jZXNzZWRTdGF0ZSA9IHtcbiAgICAgICAgICBzdGF0ZTogc3RhdGUucyxcbiAgICAgICAgICBsYXN0X2NoYW5nZWQ6IHN0YXRlLmx1ICogMTAwMCxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGNvbnN0IGF0dHIgb2YgTElORV9BVFRSSUJVVEVTX1RPX0tFRVApIHtcbiAgICAgICAgICBpZiAoYXR0ciBpbiBzdGF0ZS5hKSB7XG4gICAgICAgICAgICBwcm9jZXNzZWRTdGF0ZS5hdHRyaWJ1dGVzIVthdHRyXSA9IHN0YXRlLmFbYXR0cl07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzZWRTdGF0ZSA9IHtcbiAgICAgICAgICBzdGF0ZTogc3RhdGUucyxcbiAgICAgICAgICAvLyBsYyAobGFzdF9jaGFuZ2VkKSBtYXkgYmUgb21pdHRlZCBpZiBpdHMgdGhlIHNhbWVcbiAgICAgICAgICAvLyBhcyBsdSAobGFzdF91cGRhdGVkKS5cbiAgICAgICAgICBsYXN0X2NoYW5nZWQ6IChzdGF0ZS5sYyA/IHN0YXRlLmxjIDogc3RhdGUubHUpICogMTAwMCxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwcm9jZXNzZWRTdGF0ZXMubGVuZ3RoID4gMSAmJlxuICAgICAgICBlcXVhbFN0YXRlKFxuICAgICAgICAgIHByb2Nlc3NlZFN0YXRlLFxuICAgICAgICAgIHByb2Nlc3NlZFN0YXRlc1twcm9jZXNzZWRTdGF0ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgKSAmJlxuICAgICAgICBlcXVhbFN0YXRlKHByb2Nlc3NlZFN0YXRlLCBwcm9jZXNzZWRTdGF0ZXNbcHJvY2Vzc2VkU3RhdGVzLmxlbmd0aCAtIDJdKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwcm9jZXNzZWRTdGF0ZXMucHVzaChwcm9jZXNzZWRTdGF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9XG4gICAgICBlbnRpdHlJZCBpbiBoYXNzRW50aXRpZXNcbiAgICAgICAgPyBoYXNzRW50aXRpZXNbZW50aXR5SWRdLmF0dHJpYnV0ZXNcbiAgICAgICAgOiBcImZyaWVuZGx5X25hbWVcIiBpbiBmaXJzdC5hXG4gICAgICAgICAgPyBmaXJzdC5hXG4gICAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBkYXRhLnB1c2goe1xuICAgICAgZG9tYWluLFxuICAgICAgbmFtZTogY29tcHV0ZVN0YXRlTmFtZUZyb21FbnRpdHlBdHRyaWJ1dGVzKGVudGl0eUlkLCBhdHRyaWJ1dGVzIHx8IHt9KSxcbiAgICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gICAgICBzdGF0ZXM6IHByb2Nlc3NlZFN0YXRlcyxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICB1bml0LFxuICAgIGRldmljZV9jbGFzcyxcbiAgICBpZGVudGlmaWVyOiBPYmplY3Qua2V5cyhlbnRpdGllcykuam9pbihcIlwiKSxcbiAgICBkYXRhLFxuICB9O1xufTtcblxuY29uc3QgTlVNRVJJQ0FMX0RPTUFJTlMgPSBbXCJjb3VudGVyXCIsIFwiaW5wdXRfbnVtYmVyXCIsIFwibnVtYmVyXCJdO1xuXG5jb25zdCBpc051bWVyaWNGcm9tRG9tYWluID0gKGRvbWFpbjogc3RyaW5nKSA9PlxuICBOVU1FUklDQUxfRE9NQUlOUy5pbmNsdWRlcyhkb21haW4pO1xuXG5jb25zdCBpc051bWVyaWNGcm9tQXR0cmlidXRlcyA9IChhdHRyaWJ1dGVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSA9PlxuICBcInVuaXRfb2ZfbWVhc3VyZW1lbnRcIiBpbiBhdHRyaWJ1dGVzIHx8IFwic3RhdGVfY2xhc3NcIiBpbiBhdHRyaWJ1dGVzO1xuXG5jb25zdCBpc051bWVyaWNTZW5zb3JFbnRpdHkgPSAoXG4gIHN0YXRlT2JqOiBIYXNzRW50aXR5LFxuICBzZW5zb3JOdW1lcmljYWxEZXZpY2VDbGFzc2VzOiBzdHJpbmdbXVxuKSA9PlxuICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcyAhPSBudWxsICYmXG4gIHNlbnNvck51bWVyaWNhbERldmljZUNsYXNzZXMuaW5jbHVkZXMoc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MpO1xuXG5jb25zdCBCTEFOS19VTklUID0gXCIgXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlSGlzdG9yeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgc3RhdGVIaXN0b3J5OiBIaXN0b3J5U3RhdGVzLFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBzZW5zb3JOdW1lcmljYWxEZXZpY2VDbGFzc2VzOiBzdHJpbmdbXSxcbiAgc3BsaXREZXZpY2VDbGFzc2VzID0gZmFsc2Vcbik6IEhpc3RvcnlSZXN1bHQgPT4ge1xuICBjb25zdCBsaW5lQ2hhcnREZXZpY2VzOiB7IFt1bml0OiBzdHJpbmddOiBIaXN0b3J5U3RhdGVzIH0gPSB7fTtcbiAgY29uc3QgdGltZWxpbmVEZXZpY2VzOiBUaW1lbGluZUVudGl0eVtdID0gW107XG4gIGlmICghc3RhdGVIaXN0b3J5KSB7XG4gICAgcmV0dXJuIHsgbGluZTogW10sIHRpbWVsaW5lOiBbXSB9O1xuICB9XG4gIE9iamVjdC5rZXlzKHN0YXRlSGlzdG9yeSkuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBzdGF0ZUluZm8gPSBzdGF0ZUhpc3RvcnlbZW50aXR5SWRdO1xuICAgIGlmIChzdGF0ZUluZm8ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZG9tYWluID0gY29tcHV0ZURvbWFpbihlbnRpdHlJZCk7XG5cbiAgICBjb25zdCBjdXJyZW50U3RhdGUgPVxuICAgICAgZW50aXR5SWQgaW4gaGFzcy5zdGF0ZXMgPyBoYXNzLnN0YXRlc1tlbnRpdHlJZF0gOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgbnVtZXJpY1N0YXRlRnJvbUhpc3RvcnkgPVxuICAgICAgY3VycmVudFN0YXRlIHx8IGlzTnVtZXJpY0Zyb21Eb21haW4oZG9tYWluKVxuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6IHN0YXRlSW5mby5maW5kKFxuICAgICAgICAgICAgKHN0YXRlKSA9PiBzdGF0ZS5hICYmIGlzTnVtZXJpY0Zyb21BdHRyaWJ1dGVzKHN0YXRlLmEpXG4gICAgICAgICAgKTtcblxuICAgIGxldCB1bml0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCBpc051bWVyaWMgPVxuICAgICAgaXNOdW1lcmljRnJvbURvbWFpbihkb21haW4pIHx8XG4gICAgICAoY3VycmVudFN0YXRlICE9IG51bGwgJiZcbiAgICAgICAgaXNOdW1lcmljRnJvbUF0dHJpYnV0ZXMoY3VycmVudFN0YXRlLmF0dHJpYnV0ZXMpKSB8fFxuICAgICAgKGN1cnJlbnRTdGF0ZSAhPSBudWxsICYmXG4gICAgICAgIGRvbWFpbiA9PT0gXCJzZW5zb3JcIiAmJlxuICAgICAgICBpc051bWVyaWNTZW5zb3JFbnRpdHkoY3VycmVudFN0YXRlLCBzZW5zb3JOdW1lcmljYWxEZXZpY2VDbGFzc2VzKSkgfHxcbiAgICAgIG51bWVyaWNTdGF0ZUZyb21IaXN0b3J5ICE9IG51bGw7XG5cbiAgICBpZiAoaXNOdW1lcmljKSB7XG4gICAgICB1bml0ID1cbiAgICAgICAgY3VycmVudFN0YXRlPy5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnQgfHxcbiAgICAgICAgbnVtZXJpY1N0YXRlRnJvbUhpc3Rvcnk/LmEudW5pdF9vZl9tZWFzdXJlbWVudCB8fFxuICAgICAgICBCTEFOS19VTklUO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0ID0ge1xuICAgICAgICB6b25lOiBsb2NhbGl6ZShcInVpLmRpYWxvZ3MubW9yZV9pbmZvX2NvbnRyb2wuem9uZS5ncmFwaF91bml0XCIpLFxuICAgICAgICBjbGltYXRlOiBoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZSxcbiAgICAgICAgaHVtaWRpZmllcjogXCIlXCIsXG4gICAgICAgIHdhdGVyX2hlYXRlcjogaGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmUsXG4gICAgICB9W2RvbWFpbl07XG4gICAgfVxuXG4gICAgY29uc3Qgc3BlY2lhbERvbWFpbkNsYXNzZXMgPSB7XG4gICAgICBjbGltYXRlOiBcInRlbXBlcmF0dXJlXCIsXG4gICAgICBodW1pZGlmaWVyOiBcImh1bWlkaXR5XCIsXG4gICAgICB3YXRlcl9oZWF0ZXI6IFwidGVtcGVyYXR1cmVcIixcbiAgICB9O1xuXG4gICAgY29uc3QgZGV2aWNlQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZCA9XG4gICAgICBzcGVjaWFsRG9tYWluQ2xhc3Nlc1tkb21haW5dIHx8XG4gICAgICAoY3VycmVudFN0YXRlPy5hdHRyaWJ1dGVzIHx8IG51bWVyaWNTdGF0ZUZyb21IaXN0b3J5Py5hKT8uZGV2aWNlX2NsYXNzO1xuXG4gICAgY29uc3Qga2V5ID0gY29tcHV0ZUdyb3VwS2V5KHVuaXQsIGRldmljZUNsYXNzLCBzcGxpdERldmljZUNsYXNzZXMpO1xuXG4gICAgaWYgKCF1bml0KSB7XG4gICAgICB0aW1lbGluZURldmljZXMucHVzaChcbiAgICAgICAgcHJvY2Vzc1RpbWVsaW5lRW50aXR5KFxuICAgICAgICAgIGxvY2FsaXplLFxuICAgICAgICAgIGhhc3MubG9jYWxlLFxuICAgICAgICAgIGhhc3MuY29uZmlnLFxuICAgICAgICAgIGhhc3MuZW50aXRpZXMsXG4gICAgICAgICAgZW50aXR5SWQsXG4gICAgICAgICAgc3RhdGVJbmZvLFxuICAgICAgICAgIGN1cnJlbnRTdGF0ZVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBrZXkgJiZcbiAgICAgIGtleSBpbiBsaW5lQ2hhcnREZXZpY2VzICYmXG4gICAgICBlbnRpdHlJZCBpbiBsaW5lQ2hhcnREZXZpY2VzW2tleV1cbiAgICApIHtcbiAgICAgIGxpbmVDaGFydERldmljZXNba2V5XVtlbnRpdHlJZF0ucHVzaCguLi5zdGF0ZUluZm8pO1xuICAgIH0gZWxzZSBpZiAoa2V5KSB7XG4gICAgICBpZiAoIShrZXkgaW4gbGluZUNoYXJ0RGV2aWNlcykpIHtcbiAgICAgICAgbGluZUNoYXJ0RGV2aWNlc1trZXldID0ge307XG4gICAgICB9XG4gICAgICBsaW5lQ2hhcnREZXZpY2VzW2tleV1bZW50aXR5SWRdID0gc3RhdGVJbmZvO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdW5pdFN0YXRlcyA9IE9iamVjdC5rZXlzKGxpbmVDaGFydERldmljZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgY29uc3Qgc3BsaXRLZXkgPSBrZXkuc3BsaXQoXCJfXCIpO1xuICAgIGNvbnN0IHVuaXQgPSBzcGxpdEtleVswXTtcbiAgICBjb25zdCBkZXZpY2VDbGFzcyA9IHNwbGl0S2V5WzFdIHx8IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcHJvY2Vzc0xpbmVDaGFydEVudGl0aWVzKFxuICAgICAgdW5pdCxcbiAgICAgIGRldmljZUNsYXNzLFxuICAgICAgbGluZUNoYXJ0RGV2aWNlc1trZXldLFxuICAgICAgaGFzcy5zdGF0ZXNcbiAgICApO1xuICB9KTtcblxuICByZXR1cm4geyBsaW5lOiB1bml0U3RhdGVzLCB0aW1lbGluZTogdGltZWxpbmVEZXZpY2VzIH07XG59O1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZUdyb3VwS2V5ID0gKFxuICB1bml0OiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIGRldmljZV9jbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBzcGxpdERldmljZUNsYXNzZXM6IGJvb2xlYW5cbikgPT4gKHNwbGl0RGV2aWNlQ2xhc3NlcyA/IGAke3VuaXR9XyR7ZGV2aWNlX2NsYXNzIHx8IFwiXCJ9YCA6IHVuaXQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/data/history.ts\n");

/***/ })

};
