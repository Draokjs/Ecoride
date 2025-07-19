(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _styles_Homepage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Homepage.css */ "./assets/styles/Homepage.css");
/* harmony import */ var _styles_Login_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Login.css */ "./assets/styles/Login.css");
/* harmony import */ var _styles_Register_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Register.css */ "./assets/styles/Register.css");
/* harmony import */ var _styles_Style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Style.scss */ "./assets/styles/Style.scss");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min.js */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_7__);









var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive \\.js$"));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./assets/controllers sync recursive \\.js$":
/*!****************************************!*\
  !*** ./assets/controllers/ sync \.js$ ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./csrf_protection_controller.js": "./assets/controllers/csrf_protection_controller.js",
	"./hello_controller.js": "./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive \\.js$";

/***/ }),

/***/ "./assets/controllers/csrf_protection_controller.js":
/*!**********************************************************!*\
  !*** ./assets/controllers/csrf_protection_controller.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// assets/controllers/csrf_protection_controller.js

var nameCheck = /^[-_a-zA-Z0-9]{4,22}$/;
var tokenCheck = /^[-_\/+a-zA-Z0-9]{24,}$/;
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;
      console.log('CSRF protection controller connected');
      document.addEventListener('submit', function (event) {
        _this.generateCsrfToken(event.target);
      }, true);
      document.addEventListener('turbo:submit-start', function (event) {
        var headers = _this.generateCsrfHeaders(event.detail.formSubmission.formElement);
        Object.keys(headers).forEach(function (key) {
          event.detail.formSubmission.fetchRequest.headers[key] = headers[key];
        });
      });
      document.addEventListener('turbo:submit-end', function (event) {
        _this.removeCsrfToken(event.detail.formSubmission.formElement);
      });
    }
  }, {
    key: "generateCsrfToken",
    value: function generateCsrfToken(formElement) {
      var csrfField = formElement.querySelector('input[data-controller="csrf-protection"], input[name="_csrf_token"]');
      if (!csrfField) return;
      var csrfCookie = csrfField.getAttribute('data-csrf-protection-cookie-value');
      var csrfToken = csrfField.value;
      if (!csrfCookie && nameCheck.test(csrfToken)) {
        csrfField.setAttribute('data-csrf-protection-cookie-value', csrfCookie = csrfToken);
        csrfField.defaultValue = csrfToken = btoa(String.fromCharCode.apply(null, (window.crypto || window.msCrypto).getRandomValues(new Uint8Array(18))));
        csrfField.dispatchEvent(new Event('change', {
          bubbles: true
        }));
      }
      if (csrfCookie && tokenCheck.test(csrfToken)) {
        var cookie = "".concat(csrfCookie, "_").concat(csrfToken, "=").concat(csrfCookie, "; path=/; samesite=strict");
        document.cookie = window.location.protocol === 'https:' ? "__Host-".concat(cookie, "; secure") : cookie;
      }
    }
  }, {
    key: "generateCsrfHeaders",
    value: function generateCsrfHeaders(formElement) {
      var headers = {};
      var csrfField = formElement.querySelector('input[data-controller="csrf-protection"], input[name="_csrf_token"]');
      if (!csrfField) return headers;
      var csrfCookie = csrfField.getAttribute('data-csrf-protection-cookie-value');
      if (tokenCheck.test(csrfField.value) && nameCheck.test(csrfCookie)) {
        headers[csrfCookie] = csrfField.value;
      }
      return headers;
    }
  }, {
    key: "removeCsrfToken",
    value: function removeCsrfToken(formElement) {
      var csrfField = formElement.querySelector('input[data-controller="csrf-protection"], input[name="_csrf_token"]');
      if (!csrfField) return;
      var csrfCookie = csrfField.getAttribute('data-csrf-protection-cookie-value');
      if (tokenCheck.test(csrfField.value) && nameCheck.test(csrfCookie)) {
        var cookie = "".concat(csrfCookie, "_").concat(csrfField.value, "=0; path=/; samesite=strict; max-age=0");
        document.cookie = window.location.protocol === 'https:' ? "__Host-".concat(cookie, "; secure") : cookie;
      }
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);


/***/ }),

/***/ "./assets/controllers/hello_controller.js":
/*!************************************************!*\
  !*** ./assets/controllers/hello_controller.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      console.log('CSRF protection controller connected');
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);


/***/ }),

/***/ "./assets/styles/Homepage.css":
/*!************************************!*\
  !*** ./assets/styles/Homepage.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Login.css":
/*!*********************************!*\
  !*** ./assets/styles/Login.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Register.css":
/*!************************************!*\
  !*** ./assets/styles/Register.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Style.scss":
/*!**********************************!*\
  !*** ./assets/styles/Style.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@hotwired/stimulus/dist/stimulus.js":
/*!**********************************************************!*\
  !*** ./node_modules/@hotwired/stimulus/dist/stimulus.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Application: () => (/* binding */ Application),
/* harmony export */   AttributeObserver: () => (/* binding */ AttributeObserver),
/* harmony export */   Context: () => (/* binding */ Context),
/* harmony export */   Controller: () => (/* binding */ Controller),
/* harmony export */   ElementObserver: () => (/* binding */ ElementObserver),
/* harmony export */   IndexedMultimap: () => (/* binding */ IndexedMultimap),
/* harmony export */   Multimap: () => (/* binding */ Multimap),
/* harmony export */   SelectorObserver: () => (/* binding */ SelectorObserver),
/* harmony export */   StringMapObserver: () => (/* binding */ StringMapObserver),
/* harmony export */   TokenListObserver: () => (/* binding */ TokenListObserver),
/* harmony export */   ValueListObserver: () => (/* binding */ ValueListObserver),
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   defaultSchema: () => (/* binding */ defaultSchema),
/* harmony export */   del: () => (/* binding */ del),
/* harmony export */   fetch: () => (/* binding */ fetch),
/* harmony export */   prune: () => (/* binding */ prune)
/* harmony export */ });
/*
Stimulus 3.2.1
Copyright © 2023 Basecamp, LLC
 */
class EventListener {
    constructor(eventTarget, eventName, eventOptions) {
        this.eventTarget = eventTarget;
        this.eventName = eventName;
        this.eventOptions = eventOptions;
        this.unorderedBindings = new Set();
    }
    connect() {
        this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
    }
    disconnect() {
        this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
    }
    bindingConnected(binding) {
        this.unorderedBindings.add(binding);
    }
    bindingDisconnected(binding) {
        this.unorderedBindings.delete(binding);
    }
    handleEvent(event) {
        const extendedEvent = extendEvent(event);
        for (const binding of this.bindings) {
            if (extendedEvent.immediatePropagationStopped) {
                break;
            }
            else {
                binding.handleEvent(extendedEvent);
            }
        }
    }
    hasBindings() {
        return this.unorderedBindings.size > 0;
    }
    get bindings() {
        return Array.from(this.unorderedBindings).sort((left, right) => {
            const leftIndex = left.index, rightIndex = right.index;
            return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
        });
    }
}
function extendEvent(event) {
    if ("immediatePropagationStopped" in event) {
        return event;
    }
    else {
        const { stopImmediatePropagation } = event;
        return Object.assign(event, {
            immediatePropagationStopped: false,
            stopImmediatePropagation() {
                this.immediatePropagationStopped = true;
                stopImmediatePropagation.call(this);
            },
        });
    }
}

class Dispatcher {
    constructor(application) {
        this.application = application;
        this.eventListenerMaps = new Map();
        this.started = false;
    }
    start() {
        if (!this.started) {
            this.started = true;
            this.eventListeners.forEach((eventListener) => eventListener.connect());
        }
    }
    stop() {
        if (this.started) {
            this.started = false;
            this.eventListeners.forEach((eventListener) => eventListener.disconnect());
        }
    }
    get eventListeners() {
        return Array.from(this.eventListenerMaps.values()).reduce((listeners, map) => listeners.concat(Array.from(map.values())), []);
    }
    bindingConnected(binding) {
        this.fetchEventListenerForBinding(binding).bindingConnected(binding);
    }
    bindingDisconnected(binding, clearEventListeners = false) {
        this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
        if (clearEventListeners)
            this.clearEventListenersForBinding(binding);
    }
    handleError(error, message, detail = {}) {
        this.application.handleError(error, `Error ${message}`, detail);
    }
    clearEventListenersForBinding(binding) {
        const eventListener = this.fetchEventListenerForBinding(binding);
        if (!eventListener.hasBindings()) {
            eventListener.disconnect();
            this.removeMappedEventListenerFor(binding);
        }
    }
    removeMappedEventListenerFor(binding) {
        const { eventTarget, eventName, eventOptions } = binding;
        const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
        const cacheKey = this.cacheKey(eventName, eventOptions);
        eventListenerMap.delete(cacheKey);
        if (eventListenerMap.size == 0)
            this.eventListenerMaps.delete(eventTarget);
    }
    fetchEventListenerForBinding(binding) {
        const { eventTarget, eventName, eventOptions } = binding;
        return this.fetchEventListener(eventTarget, eventName, eventOptions);
    }
    fetchEventListener(eventTarget, eventName, eventOptions) {
        const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
        const cacheKey = this.cacheKey(eventName, eventOptions);
        let eventListener = eventListenerMap.get(cacheKey);
        if (!eventListener) {
            eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
            eventListenerMap.set(cacheKey, eventListener);
        }
        return eventListener;
    }
    createEventListener(eventTarget, eventName, eventOptions) {
        const eventListener = new EventListener(eventTarget, eventName, eventOptions);
        if (this.started) {
            eventListener.connect();
        }
        return eventListener;
    }
    fetchEventListenerMapForEventTarget(eventTarget) {
        let eventListenerMap = this.eventListenerMaps.get(eventTarget);
        if (!eventListenerMap) {
            eventListenerMap = new Map();
            this.eventListenerMaps.set(eventTarget, eventListenerMap);
        }
        return eventListenerMap;
    }
    cacheKey(eventName, eventOptions) {
        const parts = [eventName];
        Object.keys(eventOptions)
            .sort()
            .forEach((key) => {
            parts.push(`${eventOptions[key] ? "" : "!"}${key}`);
        });
        return parts.join(":");
    }
}

const defaultActionDescriptorFilters = {
    stop({ event, value }) {
        if (value)
            event.stopPropagation();
        return true;
    },
    prevent({ event, value }) {
        if (value)
            event.preventDefault();
        return true;
    },
    self({ event, value, element }) {
        if (value) {
            return element === event.target;
        }
        else {
            return true;
        }
    },
};
const descriptorPattern = /^(?:(?:([^.]+?)\+)?(.+?)(?:\.(.+?))?(?:@(window|document))?->)?(.+?)(?:#([^:]+?))(?::(.+))?$/;
function parseActionDescriptorString(descriptorString) {
    const source = descriptorString.trim();
    const matches = source.match(descriptorPattern) || [];
    let eventName = matches[2];
    let keyFilter = matches[3];
    if (keyFilter && !["keydown", "keyup", "keypress"].includes(eventName)) {
        eventName += `.${keyFilter}`;
        keyFilter = "";
    }
    return {
        eventTarget: parseEventTarget(matches[4]),
        eventName,
        eventOptions: matches[7] ? parseEventOptions(matches[7]) : {},
        identifier: matches[5],
        methodName: matches[6],
        keyFilter: matches[1] || keyFilter,
    };
}
function parseEventTarget(eventTargetName) {
    if (eventTargetName == "window") {
        return window;
    }
    else if (eventTargetName == "document") {
        return document;
    }
}
function parseEventOptions(eventOptions) {
    return eventOptions
        .split(":")
        .reduce((options, token) => Object.assign(options, { [token.replace(/^!/, "")]: !/^!/.test(token) }), {});
}
function stringifyEventTarget(eventTarget) {
    if (eventTarget == window) {
        return "window";
    }
    else if (eventTarget == document) {
        return "document";
    }
}

function camelize(value) {
    return value.replace(/(?:[_-])([a-z0-9])/g, (_, char) => char.toUpperCase());
}
function namespaceCamelize(value) {
    return camelize(value.replace(/--/g, "-").replace(/__/g, "_"));
}
function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
function dasherize(value) {
    return value.replace(/([A-Z])/g, (_, char) => `-${char.toLowerCase()}`);
}
function tokenize(value) {
    return value.match(/[^\s]+/g) || [];
}

function isSomething(object) {
    return object !== null && object !== undefined;
}
function hasProperty(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
}

const allModifiers = ["meta", "ctrl", "alt", "shift"];
class Action {
    constructor(element, index, descriptor, schema) {
        this.element = element;
        this.index = index;
        this.eventTarget = descriptor.eventTarget || element;
        this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
        this.eventOptions = descriptor.eventOptions || {};
        this.identifier = descriptor.identifier || error("missing identifier");
        this.methodName = descriptor.methodName || error("missing method name");
        this.keyFilter = descriptor.keyFilter || "";
        this.schema = schema;
    }
    static forToken(token, schema) {
        return new this(token.element, token.index, parseActionDescriptorString(token.content), schema);
    }
    toString() {
        const eventFilter = this.keyFilter ? `.${this.keyFilter}` : "";
        const eventTarget = this.eventTargetName ? `@${this.eventTargetName}` : "";
        return `${this.eventName}${eventFilter}${eventTarget}->${this.identifier}#${this.methodName}`;
    }
    shouldIgnoreKeyboardEvent(event) {
        if (!this.keyFilter) {
            return false;
        }
        const filters = this.keyFilter.split("+");
        if (this.keyFilterDissatisfied(event, filters)) {
            return true;
        }
        const standardFilter = filters.filter((key) => !allModifiers.includes(key))[0];
        if (!standardFilter) {
            return false;
        }
        if (!hasProperty(this.keyMappings, standardFilter)) {
            error(`contains unknown key filter: ${this.keyFilter}`);
        }
        return this.keyMappings[standardFilter].toLowerCase() !== event.key.toLowerCase();
    }
    shouldIgnoreMouseEvent(event) {
        if (!this.keyFilter) {
            return false;
        }
        const filters = [this.keyFilter];
        if (this.keyFilterDissatisfied(event, filters)) {
            return true;
        }
        return false;
    }
    get params() {
        const params = {};
        const pattern = new RegExp(`^data-${this.identifier}-(.+)-param$`, "i");
        for (const { name, value } of Array.from(this.element.attributes)) {
            const match = name.match(pattern);
            const key = match && match[1];
            if (key) {
                params[camelize(key)] = typecast(value);
            }
        }
        return params;
    }
    get eventTargetName() {
        return stringifyEventTarget(this.eventTarget);
    }
    get keyMappings() {
        return this.schema.keyMappings;
    }
    keyFilterDissatisfied(event, filters) {
        const [meta, ctrl, alt, shift] = allModifiers.map((modifier) => filters.includes(modifier));
        return event.metaKey !== meta || event.ctrlKey !== ctrl || event.altKey !== alt || event.shiftKey !== shift;
    }
}
const defaultEventNames = {
    a: () => "click",
    button: () => "click",
    form: () => "submit",
    details: () => "toggle",
    input: (e) => (e.getAttribute("type") == "submit" ? "click" : "input"),
    select: () => "change",
    textarea: () => "input",
};
function getDefaultEventNameForElement(element) {
    const tagName = element.tagName.toLowerCase();
    if (tagName in defaultEventNames) {
        return defaultEventNames[tagName](element);
    }
}
function error(message) {
    throw new Error(message);
}
function typecast(value) {
    try {
        return JSON.parse(value);
    }
    catch (o_O) {
        return value;
    }
}

class Binding {
    constructor(context, action) {
        this.context = context;
        this.action = action;
    }
    get index() {
        return this.action.index;
    }
    get eventTarget() {
        return this.action.eventTarget;
    }
    get eventOptions() {
        return this.action.eventOptions;
    }
    get identifier() {
        return this.context.identifier;
    }
    handleEvent(event) {
        const actionEvent = this.prepareActionEvent(event);
        if (this.willBeInvokedByEvent(event) && this.applyEventModifiers(actionEvent)) {
            this.invokeWithEvent(actionEvent);
        }
    }
    get eventName() {
        return this.action.eventName;
    }
    get method() {
        const method = this.controller[this.methodName];
        if (typeof method == "function") {
            return method;
        }
        throw new Error(`Action "${this.action}" references undefined method "${this.methodName}"`);
    }
    applyEventModifiers(event) {
        const { element } = this.action;
        const { actionDescriptorFilters } = this.context.application;
        const { controller } = this.context;
        let passes = true;
        for (const [name, value] of Object.entries(this.eventOptions)) {
            if (name in actionDescriptorFilters) {
                const filter = actionDescriptorFilters[name];
                passes = passes && filter({ name, value, event, element, controller });
            }
            else {
                continue;
            }
        }
        return passes;
    }
    prepareActionEvent(event) {
        return Object.assign(event, { params: this.action.params });
    }
    invokeWithEvent(event) {
        const { target, currentTarget } = event;
        try {
            this.method.call(this.controller, event);
            this.context.logDebugActivity(this.methodName, { event, target, currentTarget, action: this.methodName });
        }
        catch (error) {
            const { identifier, controller, element, index } = this;
            const detail = { identifier, controller, element, index, event };
            this.context.handleError(error, `invoking action "${this.action}"`, detail);
        }
    }
    willBeInvokedByEvent(event) {
        const eventTarget = event.target;
        if (event instanceof KeyboardEvent && this.action.shouldIgnoreKeyboardEvent(event)) {
            return false;
        }
        if (event instanceof MouseEvent && this.action.shouldIgnoreMouseEvent(event)) {
            return false;
        }
        if (this.element === eventTarget) {
            return true;
        }
        else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
            return this.scope.containsElement(eventTarget);
        }
        else {
            return this.scope.containsElement(this.action.element);
        }
    }
    get controller() {
        return this.context.controller;
    }
    get methodName() {
        return this.action.methodName;
    }
    get element() {
        return this.scope.element;
    }
    get scope() {
        return this.context.scope;
    }
}

class ElementObserver {
    constructor(element, delegate) {
        this.mutationObserverInit = { attributes: true, childList: true, subtree: true };
        this.element = element;
        this.started = false;
        this.delegate = delegate;
        this.elements = new Set();
        this.mutationObserver = new MutationObserver((mutations) => this.processMutations(mutations));
    }
    start() {
        if (!this.started) {
            this.started = true;
            this.mutationObserver.observe(this.element, this.mutationObserverInit);
            this.refresh();
        }
    }
    pause(callback) {
        if (this.started) {
            this.mutationObserver.disconnect();
            this.started = false;
        }
        callback();
        if (!this.started) {
            this.mutationObserver.observe(this.element, this.mutationObserverInit);
            this.started = true;
        }
    }
    stop() {
        if (this.started) {
            this.mutationObserver.takeRecords();
            this.mutationObserver.disconnect();
            this.started = false;
        }
    }
    refresh() {
        if (this.started) {
            const matches = new Set(this.matchElementsInTree());
            for (const element of Array.from(this.elements)) {
                if (!matches.has(element)) {
                    this.removeElement(element);
                }
            }
            for (const element of Array.from(matches)) {
                this.addElement(element);
            }
        }
    }
    processMutations(mutations) {
        if (this.started) {
            for (const mutation of mutations) {
                this.processMutation(mutation);
            }
        }
    }
    processMutation(mutation) {
        if (mutation.type == "attributes") {
            this.processAttributeChange(mutation.target, mutation.attributeName);
        }
        else if (mutation.type == "childList") {
            this.processRemovedNodes(mutation.removedNodes);
            this.processAddedNodes(mutation.addedNodes);
        }
    }
    processAttributeChange(element, attributeName) {
        if (this.elements.has(element)) {
            if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
                this.delegate.elementAttributeChanged(element, attributeName);
            }
            else {
                this.removeElement(element);
            }
        }
        else if (this.matchElement(element)) {
            this.addElement(element);
        }
    }
    processRemovedNodes(nodes) {
        for (const node of Array.from(nodes)) {
            const element = this.elementFromNode(node);
            if (element) {
                this.processTree(element, this.removeElement);
            }
        }
    }
    processAddedNodes(nodes) {
        for (const node of Array.from(nodes)) {
            const element = this.elementFromNode(node);
            if (element && this.elementIsActive(element)) {
                this.processTree(element, this.addElement);
            }
        }
    }
    matchElement(element) {
        return this.delegate.matchElement(element);
    }
    matchElementsInTree(tree = this.element) {
        return this.delegate.matchElementsInTree(tree);
    }
    processTree(tree, processor) {
        for (const element of this.matchElementsInTree(tree)) {
            processor.call(this, element);
        }
    }
    elementFromNode(node) {
        if (node.nodeType == Node.ELEMENT_NODE) {
            return node;
        }
    }
    elementIsActive(element) {
        if (element.isConnected != this.element.isConnected) {
            return false;
        }
        else {
            return this.element.contains(element);
        }
    }
    addElement(element) {
        if (!this.elements.has(element)) {
            if (this.elementIsActive(element)) {
                this.elements.add(element);
                if (this.delegate.elementMatched) {
                    this.delegate.elementMatched(element);
                }
            }
        }
    }
    removeElement(element) {
        if (this.elements.has(element)) {
            this.elements.delete(element);
            if (this.delegate.elementUnmatched) {
                this.delegate.elementUnmatched(element);
            }
        }
    }
}

class AttributeObserver {
    constructor(element, attributeName, delegate) {
        this.attributeName = attributeName;
        this.delegate = delegate;
        this.elementObserver = new ElementObserver(element, this);
    }
    get element() {
        return this.elementObserver.element;
    }
    get selector() {
        return `[${this.attributeName}]`;
    }
    start() {
        this.elementObserver.start();
    }
    pause(callback) {
        this.elementObserver.pause(callback);
    }
    stop() {
        this.elementObserver.stop();
    }
    refresh() {
        this.elementObserver.refresh();
    }
    get started() {
        return this.elementObserver.started;
    }
    matchElement(element) {
        return element.hasAttribute(this.attributeName);
    }
    matchElementsInTree(tree) {
        const match = this.matchElement(tree) ? [tree] : [];
        const matches = Array.from(tree.querySelectorAll(this.selector));
        return match.concat(matches);
    }
    elementMatched(element) {
        if (this.delegate.elementMatchedAttribute) {
            this.delegate.elementMatchedAttribute(element, this.attributeName);
        }
    }
    elementUnmatched(element) {
        if (this.delegate.elementUnmatchedAttribute) {
            this.delegate.elementUnmatchedAttribute(element, this.attributeName);
        }
    }
    elementAttributeChanged(element, attributeName) {
        if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
            this.delegate.elementAttributeValueChanged(element, attributeName);
        }
    }
}

function add(map, key, value) {
    fetch(map, key).add(value);
}
function del(map, key, value) {
    fetch(map, key).delete(value);
    prune(map, key);
}
function fetch(map, key) {
    let values = map.get(key);
    if (!values) {
        values = new Set();
        map.set(key, values);
    }
    return values;
}
function prune(map, key) {
    const values = map.get(key);
    if (values != null && values.size == 0) {
        map.delete(key);
    }
}

class Multimap {
    constructor() {
        this.valuesByKey = new Map();
    }
    get keys() {
        return Array.from(this.valuesByKey.keys());
    }
    get values() {
        const sets = Array.from(this.valuesByKey.values());
        return sets.reduce((values, set) => values.concat(Array.from(set)), []);
    }
    get size() {
        const sets = Array.from(this.valuesByKey.values());
        return sets.reduce((size, set) => size + set.size, 0);
    }
    add(key, value) {
        add(this.valuesByKey, key, value);
    }
    delete(key, value) {
        del(this.valuesByKey, key, value);
    }
    has(key, value) {
        const values = this.valuesByKey.get(key);
        return values != null && values.has(value);
    }
    hasKey(key) {
        return this.valuesByKey.has(key);
    }
    hasValue(value) {
        const sets = Array.from(this.valuesByKey.values());
        return sets.some((set) => set.has(value));
    }
    getValuesForKey(key) {
        const values = this.valuesByKey.get(key);
        return values ? Array.from(values) : [];
    }
    getKeysForValue(value) {
        return Array.from(this.valuesByKey)
            .filter(([_key, values]) => values.has(value))
            .map(([key, _values]) => key);
    }
}

class IndexedMultimap extends Multimap {
    constructor() {
        super();
        this.keysByValue = new Map();
    }
    get values() {
        return Array.from(this.keysByValue.keys());
    }
    add(key, value) {
        super.add(key, value);
        add(this.keysByValue, value, key);
    }
    delete(key, value) {
        super.delete(key, value);
        del(this.keysByValue, value, key);
    }
    hasValue(value) {
        return this.keysByValue.has(value);
    }
    getKeysForValue(value) {
        const set = this.keysByValue.get(value);
        return set ? Array.from(set) : [];
    }
}

class SelectorObserver {
    constructor(element, selector, delegate, details) {
        this._selector = selector;
        this.details = details;
        this.elementObserver = new ElementObserver(element, this);
        this.delegate = delegate;
        this.matchesByElement = new Multimap();
    }
    get started() {
        return this.elementObserver.started;
    }
    get selector() {
        return this._selector;
    }
    set selector(selector) {
        this._selector = selector;
        this.refresh();
    }
    start() {
        this.elementObserver.start();
    }
    pause(callback) {
        this.elementObserver.pause(callback);
    }
    stop() {
        this.elementObserver.stop();
    }
    refresh() {
        this.elementObserver.refresh();
    }
    get element() {
        return this.elementObserver.element;
    }
    matchElement(element) {
        const { selector } = this;
        if (selector) {
            const matches = element.matches(selector);
            if (this.delegate.selectorMatchElement) {
                return matches && this.delegate.selectorMatchElement(element, this.details);
            }
            return matches;
        }
        else {
            return false;
        }
    }
    matchElementsInTree(tree) {
        const { selector } = this;
        if (selector) {
            const match = this.matchElement(tree) ? [tree] : [];
            const matches = Array.from(tree.querySelectorAll(selector)).filter((match) => this.matchElement(match));
            return match.concat(matches);
        }
        else {
            return [];
        }
    }
    elementMatched(element) {
        const { selector } = this;
        if (selector) {
            this.selectorMatched(element, selector);
        }
    }
    elementUnmatched(element) {
        const selectors = this.matchesByElement.getKeysForValue(element);
        for (const selector of selectors) {
            this.selectorUnmatched(element, selector);
        }
    }
    elementAttributeChanged(element, _attributeName) {
        const { selector } = this;
        if (selector) {
            const matches = this.matchElement(element);
            const matchedBefore = this.matchesByElement.has(selector, element);
            if (matches && !matchedBefore) {
                this.selectorMatched(element, selector);
            }
            else if (!matches && matchedBefore) {
                this.selectorUnmatched(element, selector);
            }
        }
    }
    selectorMatched(element, selector) {
        this.delegate.selectorMatched(element, selector, this.details);
        this.matchesByElement.add(selector, element);
    }
    selectorUnmatched(element, selector) {
        this.delegate.selectorUnmatched(element, selector, this.details);
        this.matchesByElement.delete(selector, element);
    }
}

class StringMapObserver {
    constructor(element, delegate) {
        this.element = element;
        this.delegate = delegate;
        this.started = false;
        this.stringMap = new Map();
        this.mutationObserver = new MutationObserver((mutations) => this.processMutations(mutations));
    }
    start() {
        if (!this.started) {
            this.started = true;
            this.mutationObserver.observe(this.element, { attributes: true, attributeOldValue: true });
            this.refresh();
        }
    }
    stop() {
        if (this.started) {
            this.mutationObserver.takeRecords();
            this.mutationObserver.disconnect();
            this.started = false;
        }
    }
    refresh() {
        if (this.started) {
            for (const attributeName of this.knownAttributeNames) {
                this.refreshAttribute(attributeName, null);
            }
        }
    }
    processMutations(mutations) {
        if (this.started) {
            for (const mutation of mutations) {
                this.processMutation(mutation);
            }
        }
    }
    processMutation(mutation) {
        const attributeName = mutation.attributeName;
        if (attributeName) {
            this.refreshAttribute(attributeName, mutation.oldValue);
        }
    }
    refreshAttribute(attributeName, oldValue) {
        const key = this.delegate.getStringMapKeyForAttribute(attributeName);
        if (key != null) {
            if (!this.stringMap.has(attributeName)) {
                this.stringMapKeyAdded(key, attributeName);
            }
            const value = this.element.getAttribute(attributeName);
            if (this.stringMap.get(attributeName) != value) {
                this.stringMapValueChanged(value, key, oldValue);
            }
            if (value == null) {
                const oldValue = this.stringMap.get(attributeName);
                this.stringMap.delete(attributeName);
                if (oldValue)
                    this.stringMapKeyRemoved(key, attributeName, oldValue);
            }
            else {
                this.stringMap.set(attributeName, value);
            }
        }
    }
    stringMapKeyAdded(key, attributeName) {
        if (this.delegate.stringMapKeyAdded) {
            this.delegate.stringMapKeyAdded(key, attributeName);
        }
    }
    stringMapValueChanged(value, key, oldValue) {
        if (this.delegate.stringMapValueChanged) {
            this.delegate.stringMapValueChanged(value, key, oldValue);
        }
    }
    stringMapKeyRemoved(key, attributeName, oldValue) {
        if (this.delegate.stringMapKeyRemoved) {
            this.delegate.stringMapKeyRemoved(key, attributeName, oldValue);
        }
    }
    get knownAttributeNames() {
        return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
    }
    get currentAttributeNames() {
        return Array.from(this.element.attributes).map((attribute) => attribute.name);
    }
    get recordedAttributeNames() {
        return Array.from(this.stringMap.keys());
    }
}

class TokenListObserver {
    constructor(element, attributeName, delegate) {
        this.attributeObserver = new AttributeObserver(element, attributeName, this);
        this.delegate = delegate;
        this.tokensByElement = new Multimap();
    }
    get started() {
        return this.attributeObserver.started;
    }
    start() {
        this.attributeObserver.start();
    }
    pause(callback) {
        this.attributeObserver.pause(callback);
    }
    stop() {
        this.attributeObserver.stop();
    }
    refresh() {
        this.attributeObserver.refresh();
    }
    get element() {
        return this.attributeObserver.element;
    }
    get attributeName() {
        return this.attributeObserver.attributeName;
    }
    elementMatchedAttribute(element) {
        this.tokensMatched(this.readTokensForElement(element));
    }
    elementAttributeValueChanged(element) {
        const [unmatchedTokens, matchedTokens] = this.refreshTokensForElement(element);
        this.tokensUnmatched(unmatchedTokens);
        this.tokensMatched(matchedTokens);
    }
    elementUnmatchedAttribute(element) {
        this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
    }
    tokensMatched(tokens) {
        tokens.forEach((token) => this.tokenMatched(token));
    }
    tokensUnmatched(tokens) {
        tokens.forEach((token) => this.tokenUnmatched(token));
    }
    tokenMatched(token) {
        this.delegate.tokenMatched(token);
        this.tokensByElement.add(token.element, token);
    }
    tokenUnmatched(token) {
        this.delegate.tokenUnmatched(token);
        this.tokensByElement.delete(token.element, token);
    }
    refreshTokensForElement(element) {
        const previousTokens = this.tokensByElement.getValuesForKey(element);
        const currentTokens = this.readTokensForElement(element);
        const firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(([previousToken, currentToken]) => !tokensAreEqual(previousToken, currentToken));
        if (firstDifferingIndex == -1) {
            return [[], []];
        }
        else {
            return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
        }
    }
    readTokensForElement(element) {
        const attributeName = this.attributeName;
        const tokenString = element.getAttribute(attributeName) || "";
        return parseTokenString(tokenString, element, attributeName);
    }
}
function parseTokenString(tokenString, element, attributeName) {
    return tokenString
        .trim()
        .split(/\s+/)
        .filter((content) => content.length)
        .map((content, index) => ({ element, attributeName, content, index }));
}
function zip(left, right) {
    const length = Math.max(left.length, right.length);
    return Array.from({ length }, (_, index) => [left[index], right[index]]);
}
function tokensAreEqual(left, right) {
    return left && right && left.index == right.index && left.content == right.content;
}

class ValueListObserver {
    constructor(element, attributeName, delegate) {
        this.tokenListObserver = new TokenListObserver(element, attributeName, this);
        this.delegate = delegate;
        this.parseResultsByToken = new WeakMap();
        this.valuesByTokenByElement = new WeakMap();
    }
    get started() {
        return this.tokenListObserver.started;
    }
    start() {
        this.tokenListObserver.start();
    }
    stop() {
        this.tokenListObserver.stop();
    }
    refresh() {
        this.tokenListObserver.refresh();
    }
    get element() {
        return this.tokenListObserver.element;
    }
    get attributeName() {
        return this.tokenListObserver.attributeName;
    }
    tokenMatched(token) {
        const { element } = token;
        const { value } = this.fetchParseResultForToken(token);
        if (value) {
            this.fetchValuesByTokenForElement(element).set(token, value);
            this.delegate.elementMatchedValue(element, value);
        }
    }
    tokenUnmatched(token) {
        const { element } = token;
        const { value } = this.fetchParseResultForToken(token);
        if (value) {
            this.fetchValuesByTokenForElement(element).delete(token);
            this.delegate.elementUnmatchedValue(element, value);
        }
    }
    fetchParseResultForToken(token) {
        let parseResult = this.parseResultsByToken.get(token);
        if (!parseResult) {
            parseResult = this.parseToken(token);
            this.parseResultsByToken.set(token, parseResult);
        }
        return parseResult;
    }
    fetchValuesByTokenForElement(element) {
        let valuesByToken = this.valuesByTokenByElement.get(element);
        if (!valuesByToken) {
            valuesByToken = new Map();
            this.valuesByTokenByElement.set(element, valuesByToken);
        }
        return valuesByToken;
    }
    parseToken(token) {
        try {
            const value = this.delegate.parseValueForToken(token);
            return { value };
        }
        catch (error) {
            return { error };
        }
    }
}

class BindingObserver {
    constructor(context, delegate) {
        this.context = context;
        this.delegate = delegate;
        this.bindingsByAction = new Map();
    }
    start() {
        if (!this.valueListObserver) {
            this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this);
            this.valueListObserver.start();
        }
    }
    stop() {
        if (this.valueListObserver) {
            this.valueListObserver.stop();
            delete this.valueListObserver;
            this.disconnectAllActions();
        }
    }
    get element() {
        return this.context.element;
    }
    get identifier() {
        return this.context.identifier;
    }
    get actionAttribute() {
        return this.schema.actionAttribute;
    }
    get schema() {
        return this.context.schema;
    }
    get bindings() {
        return Array.from(this.bindingsByAction.values());
    }
    connectAction(action) {
        const binding = new Binding(this.context, action);
        this.bindingsByAction.set(action, binding);
        this.delegate.bindingConnected(binding);
    }
    disconnectAction(action) {
        const binding = this.bindingsByAction.get(action);
        if (binding) {
            this.bindingsByAction.delete(action);
            this.delegate.bindingDisconnected(binding);
        }
    }
    disconnectAllActions() {
        this.bindings.forEach((binding) => this.delegate.bindingDisconnected(binding, true));
        this.bindingsByAction.clear();
    }
    parseValueForToken(token) {
        const action = Action.forToken(token, this.schema);
        if (action.identifier == this.identifier) {
            return action;
        }
    }
    elementMatchedValue(element, action) {
        this.connectAction(action);
    }
    elementUnmatchedValue(element, action) {
        this.disconnectAction(action);
    }
}

class ValueObserver {
    constructor(context, receiver) {
        this.context = context;
        this.receiver = receiver;
        this.stringMapObserver = new StringMapObserver(this.element, this);
        this.valueDescriptorMap = this.controller.valueDescriptorMap;
    }
    start() {
        this.stringMapObserver.start();
        this.invokeChangedCallbacksForDefaultValues();
    }
    stop() {
        this.stringMapObserver.stop();
    }
    get element() {
        return this.context.element;
    }
    get controller() {
        return this.context.controller;
    }
    getStringMapKeyForAttribute(attributeName) {
        if (attributeName in this.valueDescriptorMap) {
            return this.valueDescriptorMap[attributeName].name;
        }
    }
    stringMapKeyAdded(key, attributeName) {
        const descriptor = this.valueDescriptorMap[attributeName];
        if (!this.hasValue(key)) {
            this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), descriptor.writer(descriptor.defaultValue));
        }
    }
    stringMapValueChanged(value, name, oldValue) {
        const descriptor = this.valueDescriptorNameMap[name];
        if (value === null)
            return;
        if (oldValue === null) {
            oldValue = descriptor.writer(descriptor.defaultValue);
        }
        this.invokeChangedCallback(name, value, oldValue);
    }
    stringMapKeyRemoved(key, attributeName, oldValue) {
        const descriptor = this.valueDescriptorNameMap[key];
        if (this.hasValue(key)) {
            this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), oldValue);
        }
        else {
            this.invokeChangedCallback(key, descriptor.writer(descriptor.defaultValue), oldValue);
        }
    }
    invokeChangedCallbacksForDefaultValues() {
        for (const { key, name, defaultValue, writer } of this.valueDescriptors) {
            if (defaultValue != undefined && !this.controller.data.has(key)) {
                this.invokeChangedCallback(name, writer(defaultValue), undefined);
            }
        }
    }
    invokeChangedCallback(name, rawValue, rawOldValue) {
        const changedMethodName = `${name}Changed`;
        const changedMethod = this.receiver[changedMethodName];
        if (typeof changedMethod == "function") {
            const descriptor = this.valueDescriptorNameMap[name];
            try {
                const value = descriptor.reader(rawValue);
                let oldValue = rawOldValue;
                if (rawOldValue) {
                    oldValue = descriptor.reader(rawOldValue);
                }
                changedMethod.call(this.receiver, value, oldValue);
            }
            catch (error) {
                if (error instanceof TypeError) {
                    error.message = `Stimulus Value "${this.context.identifier}.${descriptor.name}" - ${error.message}`;
                }
                throw error;
            }
        }
    }
    get valueDescriptors() {
        const { valueDescriptorMap } = this;
        return Object.keys(valueDescriptorMap).map((key) => valueDescriptorMap[key]);
    }
    get valueDescriptorNameMap() {
        const descriptors = {};
        Object.keys(this.valueDescriptorMap).forEach((key) => {
            const descriptor = this.valueDescriptorMap[key];
            descriptors[descriptor.name] = descriptor;
        });
        return descriptors;
    }
    hasValue(attributeName) {
        const descriptor = this.valueDescriptorNameMap[attributeName];
        const hasMethodName = `has${capitalize(descriptor.name)}`;
        return this.receiver[hasMethodName];
    }
}

class TargetObserver {
    constructor(context, delegate) {
        this.context = context;
        this.delegate = delegate;
        this.targetsByName = new Multimap();
    }
    start() {
        if (!this.tokenListObserver) {
            this.tokenListObserver = new TokenListObserver(this.element, this.attributeName, this);
            this.tokenListObserver.start();
        }
    }
    stop() {
        if (this.tokenListObserver) {
            this.disconnectAllTargets();
            this.tokenListObserver.stop();
            delete this.tokenListObserver;
        }
    }
    tokenMatched({ element, content: name }) {
        if (this.scope.containsElement(element)) {
            this.connectTarget(element, name);
        }
    }
    tokenUnmatched({ element, content: name }) {
        this.disconnectTarget(element, name);
    }
    connectTarget(element, name) {
        var _a;
        if (!this.targetsByName.has(name, element)) {
            this.targetsByName.add(name, element);
            (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.targetConnected(element, name));
        }
    }
    disconnectTarget(element, name) {
        var _a;
        if (this.targetsByName.has(name, element)) {
            this.targetsByName.delete(name, element);
            (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.targetDisconnected(element, name));
        }
    }
    disconnectAllTargets() {
        for (const name of this.targetsByName.keys) {
            for (const element of this.targetsByName.getValuesForKey(name)) {
                this.disconnectTarget(element, name);
            }
        }
    }
    get attributeName() {
        return `data-${this.context.identifier}-target`;
    }
    get element() {
        return this.context.element;
    }
    get scope() {
        return this.context.scope;
    }
}

function readInheritableStaticArrayValues(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor(constructor);
    return Array.from(ancestors.reduce((values, constructor) => {
        getOwnStaticArrayValues(constructor, propertyName).forEach((name) => values.add(name));
        return values;
    }, new Set()));
}
function readInheritableStaticObjectPairs(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor(constructor);
    return ancestors.reduce((pairs, constructor) => {
        pairs.push(...getOwnStaticObjectPairs(constructor, propertyName));
        return pairs;
    }, []);
}
function getAncestorsForConstructor(constructor) {
    const ancestors = [];
    while (constructor) {
        ancestors.push(constructor);
        constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors.reverse();
}
function getOwnStaticArrayValues(constructor, propertyName) {
    const definition = constructor[propertyName];
    return Array.isArray(definition) ? definition : [];
}
function getOwnStaticObjectPairs(constructor, propertyName) {
    const definition = constructor[propertyName];
    return definition ? Object.keys(definition).map((key) => [key, definition[key]]) : [];
}

class OutletObserver {
    constructor(context, delegate) {
        this.started = false;
        this.context = context;
        this.delegate = delegate;
        this.outletsByName = new Multimap();
        this.outletElementsByName = new Multimap();
        this.selectorObserverMap = new Map();
        this.attributeObserverMap = new Map();
    }
    start() {
        if (!this.started) {
            this.outletDefinitions.forEach((outletName) => {
                this.setupSelectorObserverForOutlet(outletName);
                this.setupAttributeObserverForOutlet(outletName);
            });
            this.started = true;
            this.dependentContexts.forEach((context) => context.refresh());
        }
    }
    refresh() {
        this.selectorObserverMap.forEach((observer) => observer.refresh());
        this.attributeObserverMap.forEach((observer) => observer.refresh());
    }
    stop() {
        if (this.started) {
            this.started = false;
            this.disconnectAllOutlets();
            this.stopSelectorObservers();
            this.stopAttributeObservers();
        }
    }
    stopSelectorObservers() {
        if (this.selectorObserverMap.size > 0) {
            this.selectorObserverMap.forEach((observer) => observer.stop());
            this.selectorObserverMap.clear();
        }
    }
    stopAttributeObservers() {
        if (this.attributeObserverMap.size > 0) {
            this.attributeObserverMap.forEach((observer) => observer.stop());
            this.attributeObserverMap.clear();
        }
    }
    selectorMatched(element, _selector, { outletName }) {
        const outlet = this.getOutlet(element, outletName);
        if (outlet) {
            this.connectOutlet(outlet, element, outletName);
        }
    }
    selectorUnmatched(element, _selector, { outletName }) {
        const outlet = this.getOutletFromMap(element, outletName);
        if (outlet) {
            this.disconnectOutlet(outlet, element, outletName);
        }
    }
    selectorMatchElement(element, { outletName }) {
        const selector = this.selector(outletName);
        const hasOutlet = this.hasOutlet(element, outletName);
        const hasOutletController = element.matches(`[${this.schema.controllerAttribute}~=${outletName}]`);
        if (selector) {
            return hasOutlet && hasOutletController && element.matches(selector);
        }
        else {
            return false;
        }
    }
    elementMatchedAttribute(_element, attributeName) {
        const outletName = this.getOutletNameFromOutletAttributeName(attributeName);
        if (outletName) {
            this.updateSelectorObserverForOutlet(outletName);
        }
    }
    elementAttributeValueChanged(_element, attributeName) {
        const outletName = this.getOutletNameFromOutletAttributeName(attributeName);
        if (outletName) {
            this.updateSelectorObserverForOutlet(outletName);
        }
    }
    elementUnmatchedAttribute(_element, attributeName) {
        const outletName = this.getOutletNameFromOutletAttributeName(attributeName);
        if (outletName) {
            this.updateSelectorObserverForOutlet(outletName);
        }
    }
    connectOutlet(outlet, element, outletName) {
        var _a;
        if (!this.outletElementsByName.has(outletName, element)) {
            this.outletsByName.add(outletName, outlet);
            this.outletElementsByName.add(outletName, element);
            (_a = this.selectorObserverMap.get(outletName)) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.outletConnected(outlet, element, outletName));
        }
    }
    disconnectOutlet(outlet, element, outletName) {
        var _a;
        if (this.outletElementsByName.has(outletName, element)) {
            this.outletsByName.delete(outletName, outlet);
            this.outletElementsByName.delete(outletName, element);
            (_a = this.selectorObserverMap
                .get(outletName)) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.outletDisconnected(outlet, element, outletName));
        }
    }
    disconnectAllOutlets() {
        for (const outletName of this.outletElementsByName.keys) {
            for (const element of this.outletElementsByName.getValuesForKey(outletName)) {
                for (const outlet of this.outletsByName.getValuesForKey(outletName)) {
                    this.disconnectOutlet(outlet, element, outletName);
                }
            }
        }
    }
    updateSelectorObserverForOutlet(outletName) {
        const observer = this.selectorObserverMap.get(outletName);
        if (observer) {
            observer.selector = this.selector(outletName);
        }
    }
    setupSelectorObserverForOutlet(outletName) {
        const selector = this.selector(outletName);
        const selectorObserver = new SelectorObserver(document.body, selector, this, { outletName });
        this.selectorObserverMap.set(outletName, selectorObserver);
        selectorObserver.start();
    }
    setupAttributeObserverForOutlet(outletName) {
        const attributeName = this.attributeNameForOutletName(outletName);
        const attributeObserver = new AttributeObserver(this.scope.element, attributeName, this);
        this.attributeObserverMap.set(outletName, attributeObserver);
        attributeObserver.start();
    }
    selector(outletName) {
        return this.scope.outlets.getSelectorForOutletName(outletName);
    }
    attributeNameForOutletName(outletName) {
        return this.scope.schema.outletAttributeForScope(this.identifier, outletName);
    }
    getOutletNameFromOutletAttributeName(attributeName) {
        return this.outletDefinitions.find((outletName) => this.attributeNameForOutletName(outletName) === attributeName);
    }
    get outletDependencies() {
        const dependencies = new Multimap();
        this.router.modules.forEach((module) => {
            const constructor = module.definition.controllerConstructor;
            const outlets = readInheritableStaticArrayValues(constructor, "outlets");
            outlets.forEach((outlet) => dependencies.add(outlet, module.identifier));
        });
        return dependencies;
    }
    get outletDefinitions() {
        return this.outletDependencies.getKeysForValue(this.identifier);
    }
    get dependentControllerIdentifiers() {
        return this.outletDependencies.getValuesForKey(this.identifier);
    }
    get dependentContexts() {
        const identifiers = this.dependentControllerIdentifiers;
        return this.router.contexts.filter((context) => identifiers.includes(context.identifier));
    }
    hasOutlet(element, outletName) {
        return !!this.getOutlet(element, outletName) || !!this.getOutletFromMap(element, outletName);
    }
    getOutlet(element, outletName) {
        return this.application.getControllerForElementAndIdentifier(element, outletName);
    }
    getOutletFromMap(element, outletName) {
        return this.outletsByName.getValuesForKey(outletName).find((outlet) => outlet.element === element);
    }
    get scope() {
        return this.context.scope;
    }
    get schema() {
        return this.context.schema;
    }
    get identifier() {
        return this.context.identifier;
    }
    get application() {
        return this.context.application;
    }
    get router() {
        return this.application.router;
    }
}

class Context {
    constructor(module, scope) {
        this.logDebugActivity = (functionName, detail = {}) => {
            const { identifier, controller, element } = this;
            detail = Object.assign({ identifier, controller, element }, detail);
            this.application.logDebugActivity(this.identifier, functionName, detail);
        };
        this.module = module;
        this.scope = scope;
        this.controller = new module.controllerConstructor(this);
        this.bindingObserver = new BindingObserver(this, this.dispatcher);
        this.valueObserver = new ValueObserver(this, this.controller);
        this.targetObserver = new TargetObserver(this, this);
        this.outletObserver = new OutletObserver(this, this);
        try {
            this.controller.initialize();
            this.logDebugActivity("initialize");
        }
        catch (error) {
            this.handleError(error, "initializing controller");
        }
    }
    connect() {
        this.bindingObserver.start();
        this.valueObserver.start();
        this.targetObserver.start();
        this.outletObserver.start();
        try {
            this.controller.connect();
            this.logDebugActivity("connect");
        }
        catch (error) {
            this.handleError(error, "connecting controller");
        }
    }
    refresh() {
        this.outletObserver.refresh();
    }
    disconnect() {
        try {
            this.controller.disconnect();
            this.logDebugActivity("disconnect");
        }
        catch (error) {
            this.handleError(error, "disconnecting controller");
        }
        this.outletObserver.stop();
        this.targetObserver.stop();
        this.valueObserver.stop();
        this.bindingObserver.stop();
    }
    get application() {
        return this.module.application;
    }
    get identifier() {
        return this.module.identifier;
    }
    get schema() {
        return this.application.schema;
    }
    get dispatcher() {
        return this.application.dispatcher;
    }
    get element() {
        return this.scope.element;
    }
    get parentElement() {
        return this.element.parentElement;
    }
    handleError(error, message, detail = {}) {
        const { identifier, controller, element } = this;
        detail = Object.assign({ identifier, controller, element }, detail);
        this.application.handleError(error, `Error ${message}`, detail);
    }
    targetConnected(element, name) {
        this.invokeControllerMethod(`${name}TargetConnected`, element);
    }
    targetDisconnected(element, name) {
        this.invokeControllerMethod(`${name}TargetDisconnected`, element);
    }
    outletConnected(outlet, element, name) {
        this.invokeControllerMethod(`${namespaceCamelize(name)}OutletConnected`, outlet, element);
    }
    outletDisconnected(outlet, element, name) {
        this.invokeControllerMethod(`${namespaceCamelize(name)}OutletDisconnected`, outlet, element);
    }
    invokeControllerMethod(methodName, ...args) {
        const controller = this.controller;
        if (typeof controller[methodName] == "function") {
            controller[methodName](...args);
        }
    }
}

function bless(constructor) {
    return shadow(constructor, getBlessedProperties(constructor));
}
function shadow(constructor, properties) {
    const shadowConstructor = extend(constructor);
    const shadowProperties = getShadowProperties(constructor.prototype, properties);
    Object.defineProperties(shadowConstructor.prototype, shadowProperties);
    return shadowConstructor;
}
function getBlessedProperties(constructor) {
    const blessings = readInheritableStaticArrayValues(constructor, "blessings");
    return blessings.reduce((blessedProperties, blessing) => {
        const properties = blessing(constructor);
        for (const key in properties) {
            const descriptor = blessedProperties[key] || {};
            blessedProperties[key] = Object.assign(descriptor, properties[key]);
        }
        return blessedProperties;
    }, {});
}
function getShadowProperties(prototype, properties) {
    return getOwnKeys(properties).reduce((shadowProperties, key) => {
        const descriptor = getShadowedDescriptor(prototype, properties, key);
        if (descriptor) {
            Object.assign(shadowProperties, { [key]: descriptor });
        }
        return shadowProperties;
    }, {});
}
function getShadowedDescriptor(prototype, properties, key) {
    const shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
    const shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;
    if (!shadowedByValue) {
        const descriptor = Object.getOwnPropertyDescriptor(properties, key).value;
        if (shadowingDescriptor) {
            descriptor.get = shadowingDescriptor.get || descriptor.get;
            descriptor.set = shadowingDescriptor.set || descriptor.set;
        }
        return descriptor;
    }
}
const getOwnKeys = (() => {
    if (typeof Object.getOwnPropertySymbols == "function") {
        return (object) => [...Object.getOwnPropertyNames(object), ...Object.getOwnPropertySymbols(object)];
    }
    else {
        return Object.getOwnPropertyNames;
    }
})();
const extend = (() => {
    function extendWithReflect(constructor) {
        function extended() {
            return Reflect.construct(constructor, arguments, new.target);
        }
        extended.prototype = Object.create(constructor.prototype, {
            constructor: { value: extended },
        });
        Reflect.setPrototypeOf(extended, constructor);
        return extended;
    }
    function testReflectExtension() {
        const a = function () {
            this.a.call(this);
        };
        const b = extendWithReflect(a);
        b.prototype.a = function () { };
        return new b();
    }
    try {
        testReflectExtension();
        return extendWithReflect;
    }
    catch (error) {
        return (constructor) => class extended extends constructor {
        };
    }
})();

function blessDefinition(definition) {
    return {
        identifier: definition.identifier,
        controllerConstructor: bless(definition.controllerConstructor),
    };
}

class Module {
    constructor(application, definition) {
        this.application = application;
        this.definition = blessDefinition(definition);
        this.contextsByScope = new WeakMap();
        this.connectedContexts = new Set();
    }
    get identifier() {
        return this.definition.identifier;
    }
    get controllerConstructor() {
        return this.definition.controllerConstructor;
    }
    get contexts() {
        return Array.from(this.connectedContexts);
    }
    connectContextForScope(scope) {
        const context = this.fetchContextForScope(scope);
        this.connectedContexts.add(context);
        context.connect();
    }
    disconnectContextForScope(scope) {
        const context = this.contextsByScope.get(scope);
        if (context) {
            this.connectedContexts.delete(context);
            context.disconnect();
        }
    }
    fetchContextForScope(scope) {
        let context = this.contextsByScope.get(scope);
        if (!context) {
            context = new Context(this, scope);
            this.contextsByScope.set(scope, context);
        }
        return context;
    }
}

class ClassMap {
    constructor(scope) {
        this.scope = scope;
    }
    has(name) {
        return this.data.has(this.getDataKey(name));
    }
    get(name) {
        return this.getAll(name)[0];
    }
    getAll(name) {
        const tokenString = this.data.get(this.getDataKey(name)) || "";
        return tokenize(tokenString);
    }
    getAttributeName(name) {
        return this.data.getAttributeNameForKey(this.getDataKey(name));
    }
    getDataKey(name) {
        return `${name}-class`;
    }
    get data() {
        return this.scope.data;
    }
}

class DataMap {
    constructor(scope) {
        this.scope = scope;
    }
    get element() {
        return this.scope.element;
    }
    get identifier() {
        return this.scope.identifier;
    }
    get(key) {
        const name = this.getAttributeNameForKey(key);
        return this.element.getAttribute(name);
    }
    set(key, value) {
        const name = this.getAttributeNameForKey(key);
        this.element.setAttribute(name, value);
        return this.get(key);
    }
    has(key) {
        const name = this.getAttributeNameForKey(key);
        return this.element.hasAttribute(name);
    }
    delete(key) {
        if (this.has(key)) {
            const name = this.getAttributeNameForKey(key);
            this.element.removeAttribute(name);
            return true;
        }
        else {
            return false;
        }
    }
    getAttributeNameForKey(key) {
        return `data-${this.identifier}-${dasherize(key)}`;
    }
}

class Guide {
    constructor(logger) {
        this.warnedKeysByObject = new WeakMap();
        this.logger = logger;
    }
    warn(object, key, message) {
        let warnedKeys = this.warnedKeysByObject.get(object);
        if (!warnedKeys) {
            warnedKeys = new Set();
            this.warnedKeysByObject.set(object, warnedKeys);
        }
        if (!warnedKeys.has(key)) {
            warnedKeys.add(key);
            this.logger.warn(message, object);
        }
    }
}

function attributeValueContainsToken(attributeName, token) {
    return `[${attributeName}~="${token}"]`;
}

class TargetSet {
    constructor(scope) {
        this.scope = scope;
    }
    get element() {
        return this.scope.element;
    }
    get identifier() {
        return this.scope.identifier;
    }
    get schema() {
        return this.scope.schema;
    }
    has(targetName) {
        return this.find(targetName) != null;
    }
    find(...targetNames) {
        return targetNames.reduce((target, targetName) => target || this.findTarget(targetName) || this.findLegacyTarget(targetName), undefined);
    }
    findAll(...targetNames) {
        return targetNames.reduce((targets, targetName) => [
            ...targets,
            ...this.findAllTargets(targetName),
            ...this.findAllLegacyTargets(targetName),
        ], []);
    }
    findTarget(targetName) {
        const selector = this.getSelectorForTargetName(targetName);
        return this.scope.findElement(selector);
    }
    findAllTargets(targetName) {
        const selector = this.getSelectorForTargetName(targetName);
        return this.scope.findAllElements(selector);
    }
    getSelectorForTargetName(targetName) {
        const attributeName = this.schema.targetAttributeForScope(this.identifier);
        return attributeValueContainsToken(attributeName, targetName);
    }
    findLegacyTarget(targetName) {
        const selector = this.getLegacySelectorForTargetName(targetName);
        return this.deprecate(this.scope.findElement(selector), targetName);
    }
    findAllLegacyTargets(targetName) {
        const selector = this.getLegacySelectorForTargetName(targetName);
        return this.scope.findAllElements(selector).map((element) => this.deprecate(element, targetName));
    }
    getLegacySelectorForTargetName(targetName) {
        const targetDescriptor = `${this.identifier}.${targetName}`;
        return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
    }
    deprecate(element, targetName) {
        if (element) {
            const { identifier } = this;
            const attributeName = this.schema.targetAttribute;
            const revisedAttributeName = this.schema.targetAttributeForScope(identifier);
            this.guide.warn(element, `target:${targetName}`, `Please replace ${attributeName}="${identifier}.${targetName}" with ${revisedAttributeName}="${targetName}". ` +
                `The ${attributeName} attribute is deprecated and will be removed in a future version of Stimulus.`);
        }
        return element;
    }
    get guide() {
        return this.scope.guide;
    }
}

class OutletSet {
    constructor(scope, controllerElement) {
        this.scope = scope;
        this.controllerElement = controllerElement;
    }
    get element() {
        return this.scope.element;
    }
    get identifier() {
        return this.scope.identifier;
    }
    get schema() {
        return this.scope.schema;
    }
    has(outletName) {
        return this.find(outletName) != null;
    }
    find(...outletNames) {
        return outletNames.reduce((outlet, outletName) => outlet || this.findOutlet(outletName), undefined);
    }
    findAll(...outletNames) {
        return outletNames.reduce((outlets, outletName) => [...outlets, ...this.findAllOutlets(outletName)], []);
    }
    getSelectorForOutletName(outletName) {
        const attributeName = this.schema.outletAttributeForScope(this.identifier, outletName);
        return this.controllerElement.getAttribute(attributeName);
    }
    findOutlet(outletName) {
        const selector = this.getSelectorForOutletName(outletName);
        if (selector)
            return this.findElement(selector, outletName);
    }
    findAllOutlets(outletName) {
        const selector = this.getSelectorForOutletName(outletName);
        return selector ? this.findAllElements(selector, outletName) : [];
    }
    findElement(selector, outletName) {
        const elements = this.scope.queryElements(selector);
        return elements.filter((element) => this.matchesElement(element, selector, outletName))[0];
    }
    findAllElements(selector, outletName) {
        const elements = this.scope.queryElements(selector);
        return elements.filter((element) => this.matchesElement(element, selector, outletName));
    }
    matchesElement(element, selector, outletName) {
        const controllerAttribute = element.getAttribute(this.scope.schema.controllerAttribute) || "";
        return element.matches(selector) && controllerAttribute.split(" ").includes(outletName);
    }
}

class Scope {
    constructor(schema, element, identifier, logger) {
        this.targets = new TargetSet(this);
        this.classes = new ClassMap(this);
        this.data = new DataMap(this);
        this.containsElement = (element) => {
            return element.closest(this.controllerSelector) === this.element;
        };
        this.schema = schema;
        this.element = element;
        this.identifier = identifier;
        this.guide = new Guide(logger);
        this.outlets = new OutletSet(this.documentScope, element);
    }
    findElement(selector) {
        return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
    }
    findAllElements(selector) {
        return [
            ...(this.element.matches(selector) ? [this.element] : []),
            ...this.queryElements(selector).filter(this.containsElement),
        ];
    }
    queryElements(selector) {
        return Array.from(this.element.querySelectorAll(selector));
    }
    get controllerSelector() {
        return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
    }
    get isDocumentScope() {
        return this.element === document.documentElement;
    }
    get documentScope() {
        return this.isDocumentScope
            ? this
            : new Scope(this.schema, document.documentElement, this.identifier, this.guide.logger);
    }
}

class ScopeObserver {
    constructor(element, schema, delegate) {
        this.element = element;
        this.schema = schema;
        this.delegate = delegate;
        this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
        this.scopesByIdentifierByElement = new WeakMap();
        this.scopeReferenceCounts = new WeakMap();
    }
    start() {
        this.valueListObserver.start();
    }
    stop() {
        this.valueListObserver.stop();
    }
    get controllerAttribute() {
        return this.schema.controllerAttribute;
    }
    parseValueForToken(token) {
        const { element, content: identifier } = token;
        return this.parseValueForElementAndIdentifier(element, identifier);
    }
    parseValueForElementAndIdentifier(element, identifier) {
        const scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
        let scope = scopesByIdentifier.get(identifier);
        if (!scope) {
            scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
            scopesByIdentifier.set(identifier, scope);
        }
        return scope;
    }
    elementMatchedValue(element, value) {
        const referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
        this.scopeReferenceCounts.set(value, referenceCount);
        if (referenceCount == 1) {
            this.delegate.scopeConnected(value);
        }
    }
    elementUnmatchedValue(element, value) {
        const referenceCount = this.scopeReferenceCounts.get(value);
        if (referenceCount) {
            this.scopeReferenceCounts.set(value, referenceCount - 1);
            if (referenceCount == 1) {
                this.delegate.scopeDisconnected(value);
            }
        }
    }
    fetchScopesByIdentifierForElement(element) {
        let scopesByIdentifier = this.scopesByIdentifierByElement.get(element);
        if (!scopesByIdentifier) {
            scopesByIdentifier = new Map();
            this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
        }
        return scopesByIdentifier;
    }
}

class Router {
    constructor(application) {
        this.application = application;
        this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
        this.scopesByIdentifier = new Multimap();
        this.modulesByIdentifier = new Map();
    }
    get element() {
        return this.application.element;
    }
    get schema() {
        return this.application.schema;
    }
    get logger() {
        return this.application.logger;
    }
    get controllerAttribute() {
        return this.schema.controllerAttribute;
    }
    get modules() {
        return Array.from(this.modulesByIdentifier.values());
    }
    get contexts() {
        return this.modules.reduce((contexts, module) => contexts.concat(module.contexts), []);
    }
    start() {
        this.scopeObserver.start();
    }
    stop() {
        this.scopeObserver.stop();
    }
    loadDefinition(definition) {
        this.unloadIdentifier(definition.identifier);
        const module = new Module(this.application, definition);
        this.connectModule(module);
        const afterLoad = definition.controllerConstructor.afterLoad;
        if (afterLoad) {
            afterLoad.call(definition.controllerConstructor, definition.identifier, this.application);
        }
    }
    unloadIdentifier(identifier) {
        const module = this.modulesByIdentifier.get(identifier);
        if (module) {
            this.disconnectModule(module);
        }
    }
    getContextForElementAndIdentifier(element, identifier) {
        const module = this.modulesByIdentifier.get(identifier);
        if (module) {
            return module.contexts.find((context) => context.element == element);
        }
    }
    proposeToConnectScopeForElementAndIdentifier(element, identifier) {
        const scope = this.scopeObserver.parseValueForElementAndIdentifier(element, identifier);
        if (scope) {
            this.scopeObserver.elementMatchedValue(scope.element, scope);
        }
        else {
            console.error(`Couldn't find or create scope for identifier: "${identifier}" and element:`, element);
        }
    }
    handleError(error, message, detail) {
        this.application.handleError(error, message, detail);
    }
    createScopeForElementAndIdentifier(element, identifier) {
        return new Scope(this.schema, element, identifier, this.logger);
    }
    scopeConnected(scope) {
        this.scopesByIdentifier.add(scope.identifier, scope);
        const module = this.modulesByIdentifier.get(scope.identifier);
        if (module) {
            module.connectContextForScope(scope);
        }
    }
    scopeDisconnected(scope) {
        this.scopesByIdentifier.delete(scope.identifier, scope);
        const module = this.modulesByIdentifier.get(scope.identifier);
        if (module) {
            module.disconnectContextForScope(scope);
        }
    }
    connectModule(module) {
        this.modulesByIdentifier.set(module.identifier, module);
        const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
        scopes.forEach((scope) => module.connectContextForScope(scope));
    }
    disconnectModule(module) {
        this.modulesByIdentifier.delete(module.identifier);
        const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
        scopes.forEach((scope) => module.disconnectContextForScope(scope));
    }
}

const defaultSchema = {
    controllerAttribute: "data-controller",
    actionAttribute: "data-action",
    targetAttribute: "data-target",
    targetAttributeForScope: (identifier) => `data-${identifier}-target`,
    outletAttributeForScope: (identifier, outlet) => `data-${identifier}-${outlet}-outlet`,
    keyMappings: Object.assign(Object.assign({ enter: "Enter", tab: "Tab", esc: "Escape", space: " ", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", home: "Home", end: "End", page_up: "PageUp", page_down: "PageDown" }, objectFromEntries("abcdefghijklmnopqrstuvwxyz".split("").map((c) => [c, c]))), objectFromEntries("0123456789".split("").map((n) => [n, n]))),
};
function objectFromEntries(array) {
    return array.reduce((memo, [k, v]) => (Object.assign(Object.assign({}, memo), { [k]: v })), {});
}

class Application {
    constructor(element = document.documentElement, schema = defaultSchema) {
        this.logger = console;
        this.debug = false;
        this.logDebugActivity = (identifier, functionName, detail = {}) => {
            if (this.debug) {
                this.logFormattedMessage(identifier, functionName, detail);
            }
        };
        this.element = element;
        this.schema = schema;
        this.dispatcher = new Dispatcher(this);
        this.router = new Router(this);
        this.actionDescriptorFilters = Object.assign({}, defaultActionDescriptorFilters);
    }
    static start(element, schema) {
        const application = new this(element, schema);
        application.start();
        return application;
    }
    async start() {
        await domReady();
        this.logDebugActivity("application", "starting");
        this.dispatcher.start();
        this.router.start();
        this.logDebugActivity("application", "start");
    }
    stop() {
        this.logDebugActivity("application", "stopping");
        this.dispatcher.stop();
        this.router.stop();
        this.logDebugActivity("application", "stop");
    }
    register(identifier, controllerConstructor) {
        this.load({ identifier, controllerConstructor });
    }
    registerActionOption(name, filter) {
        this.actionDescriptorFilters[name] = filter;
    }
    load(head, ...rest) {
        const definitions = Array.isArray(head) ? head : [head, ...rest];
        definitions.forEach((definition) => {
            if (definition.controllerConstructor.shouldLoad) {
                this.router.loadDefinition(definition);
            }
        });
    }
    unload(head, ...rest) {
        const identifiers = Array.isArray(head) ? head : [head, ...rest];
        identifiers.forEach((identifier) => this.router.unloadIdentifier(identifier));
    }
    get controllers() {
        return this.router.contexts.map((context) => context.controller);
    }
    getControllerForElementAndIdentifier(element, identifier) {
        const context = this.router.getContextForElementAndIdentifier(element, identifier);
        return context ? context.controller : null;
    }
    handleError(error, message, detail) {
        var _a;
        this.logger.error(`%s\n\n%o\n\n%o`, message, error, detail);
        (_a = window.onerror) === null || _a === void 0 ? void 0 : _a.call(window, message, "", 0, 0, error);
    }
    logFormattedMessage(identifier, functionName, detail = {}) {
        detail = Object.assign({ application: this }, detail);
        this.logger.groupCollapsed(`${identifier} #${functionName}`);
        this.logger.log("details:", Object.assign({}, detail));
        this.logger.groupEnd();
    }
}
function domReady() {
    return new Promise((resolve) => {
        if (document.readyState == "loading") {
            document.addEventListener("DOMContentLoaded", () => resolve());
        }
        else {
            resolve();
        }
    });
}

function ClassPropertiesBlessing(constructor) {
    const classes = readInheritableStaticArrayValues(constructor, "classes");
    return classes.reduce((properties, classDefinition) => {
        return Object.assign(properties, propertiesForClassDefinition(classDefinition));
    }, {});
}
function propertiesForClassDefinition(key) {
    return {
        [`${key}Class`]: {
            get() {
                const { classes } = this;
                if (classes.has(key)) {
                    return classes.get(key);
                }
                else {
                    const attribute = classes.getAttributeName(key);
                    throw new Error(`Missing attribute "${attribute}"`);
                }
            },
        },
        [`${key}Classes`]: {
            get() {
                return this.classes.getAll(key);
            },
        },
        [`has${capitalize(key)}Class`]: {
            get() {
                return this.classes.has(key);
            },
        },
    };
}

function OutletPropertiesBlessing(constructor) {
    const outlets = readInheritableStaticArrayValues(constructor, "outlets");
    return outlets.reduce((properties, outletDefinition) => {
        return Object.assign(properties, propertiesForOutletDefinition(outletDefinition));
    }, {});
}
function getOutletController(controller, element, identifier) {
    return controller.application.getControllerForElementAndIdentifier(element, identifier);
}
function getControllerAndEnsureConnectedScope(controller, element, outletName) {
    let outletController = getOutletController(controller, element, outletName);
    if (outletController)
        return outletController;
    controller.application.router.proposeToConnectScopeForElementAndIdentifier(element, outletName);
    outletController = getOutletController(controller, element, outletName);
    if (outletController)
        return outletController;
}
function propertiesForOutletDefinition(name) {
    const camelizedName = namespaceCamelize(name);
    return {
        [`${camelizedName}Outlet`]: {
            get() {
                const outletElement = this.outlets.find(name);
                const selector = this.outlets.getSelectorForOutletName(name);
                if (outletElement) {
                    const outletController = getControllerAndEnsureConnectedScope(this, outletElement, name);
                    if (outletController)
                        return outletController;
                    throw new Error(`The provided outlet element is missing an outlet controller "${name}" instance for host controller "${this.identifier}"`);
                }
                throw new Error(`Missing outlet element "${name}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${selector}".`);
            },
        },
        [`${camelizedName}Outlets`]: {
            get() {
                const outlets = this.outlets.findAll(name);
                if (outlets.length > 0) {
                    return outlets
                        .map((outletElement) => {
                        const outletController = getControllerAndEnsureConnectedScope(this, outletElement, name);
                        if (outletController)
                            return outletController;
                        console.warn(`The provided outlet element is missing an outlet controller "${name}" instance for host controller "${this.identifier}"`, outletElement);
                    })
                        .filter((controller) => controller);
                }
                return [];
            },
        },
        [`${camelizedName}OutletElement`]: {
            get() {
                const outletElement = this.outlets.find(name);
                const selector = this.outlets.getSelectorForOutletName(name);
                if (outletElement) {
                    return outletElement;
                }
                else {
                    throw new Error(`Missing outlet element "${name}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${selector}".`);
                }
            },
        },
        [`${camelizedName}OutletElements`]: {
            get() {
                return this.outlets.findAll(name);
            },
        },
        [`has${capitalize(camelizedName)}Outlet`]: {
            get() {
                return this.outlets.has(name);
            },
        },
    };
}

function TargetPropertiesBlessing(constructor) {
    const targets = readInheritableStaticArrayValues(constructor, "targets");
    return targets.reduce((properties, targetDefinition) => {
        return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
    }, {});
}
function propertiesForTargetDefinition(name) {
    return {
        [`${name}Target`]: {
            get() {
                const target = this.targets.find(name);
                if (target) {
                    return target;
                }
                else {
                    throw new Error(`Missing target element "${name}" for "${this.identifier}" controller`);
                }
            },
        },
        [`${name}Targets`]: {
            get() {
                return this.targets.findAll(name);
            },
        },
        [`has${capitalize(name)}Target`]: {
            get() {
                return this.targets.has(name);
            },
        },
    };
}

function ValuePropertiesBlessing(constructor) {
    const valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
    const propertyDescriptorMap = {
        valueDescriptorMap: {
            get() {
                return valueDefinitionPairs.reduce((result, valueDefinitionPair) => {
                    const valueDescriptor = parseValueDefinitionPair(valueDefinitionPair, this.identifier);
                    const attributeName = this.data.getAttributeNameForKey(valueDescriptor.key);
                    return Object.assign(result, { [attributeName]: valueDescriptor });
                }, {});
            },
        },
    };
    return valueDefinitionPairs.reduce((properties, valueDefinitionPair) => {
        return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
    }, propertyDescriptorMap);
}
function propertiesForValueDefinitionPair(valueDefinitionPair, controller) {
    const definition = parseValueDefinitionPair(valueDefinitionPair, controller);
    const { key, name, reader: read, writer: write } = definition;
    return {
        [name]: {
            get() {
                const value = this.data.get(key);
                if (value !== null) {
                    return read(value);
                }
                else {
                    return definition.defaultValue;
                }
            },
            set(value) {
                if (value === undefined) {
                    this.data.delete(key);
                }
                else {
                    this.data.set(key, write(value));
                }
            },
        },
        [`has${capitalize(name)}`]: {
            get() {
                return this.data.has(key) || definition.hasCustomDefaultValue;
            },
        },
    };
}
function parseValueDefinitionPair([token, typeDefinition], controller) {
    return valueDescriptorForTokenAndTypeDefinition({
        controller,
        token,
        typeDefinition,
    });
}
function parseValueTypeConstant(constant) {
    switch (constant) {
        case Array:
            return "array";
        case Boolean:
            return "boolean";
        case Number:
            return "number";
        case Object:
            return "object";
        case String:
            return "string";
    }
}
function parseValueTypeDefault(defaultValue) {
    switch (typeof defaultValue) {
        case "boolean":
            return "boolean";
        case "number":
            return "number";
        case "string":
            return "string";
    }
    if (Array.isArray(defaultValue))
        return "array";
    if (Object.prototype.toString.call(defaultValue) === "[object Object]")
        return "object";
}
function parseValueTypeObject(payload) {
    const { controller, token, typeObject } = payload;
    const hasType = isSomething(typeObject.type);
    const hasDefault = isSomething(typeObject.default);
    const fullObject = hasType && hasDefault;
    const onlyType = hasType && !hasDefault;
    const onlyDefault = !hasType && hasDefault;
    const typeFromObject = parseValueTypeConstant(typeObject.type);
    const typeFromDefaultValue = parseValueTypeDefault(payload.typeObject.default);
    if (onlyType)
        return typeFromObject;
    if (onlyDefault)
        return typeFromDefaultValue;
    if (typeFromObject !== typeFromDefaultValue) {
        const propertyPath = controller ? `${controller}.${token}` : token;
        throw new Error(`The specified default value for the Stimulus Value "${propertyPath}" must match the defined type "${typeFromObject}". The provided default value of "${typeObject.default}" is of type "${typeFromDefaultValue}".`);
    }
    if (fullObject)
        return typeFromObject;
}
function parseValueTypeDefinition(payload) {
    const { controller, token, typeDefinition } = payload;
    const typeObject = { controller, token, typeObject: typeDefinition };
    const typeFromObject = parseValueTypeObject(typeObject);
    const typeFromDefaultValue = parseValueTypeDefault(typeDefinition);
    const typeFromConstant = parseValueTypeConstant(typeDefinition);
    const type = typeFromObject || typeFromDefaultValue || typeFromConstant;
    if (type)
        return type;
    const propertyPath = controller ? `${controller}.${typeDefinition}` : token;
    throw new Error(`Unknown value type "${propertyPath}" for "${token}" value`);
}
function defaultValueForDefinition(typeDefinition) {
    const constant = parseValueTypeConstant(typeDefinition);
    if (constant)
        return defaultValuesByType[constant];
    const hasDefault = hasProperty(typeDefinition, "default");
    const hasType = hasProperty(typeDefinition, "type");
    const typeObject = typeDefinition;
    if (hasDefault)
        return typeObject.default;
    if (hasType) {
        const { type } = typeObject;
        const constantFromType = parseValueTypeConstant(type);
        if (constantFromType)
            return defaultValuesByType[constantFromType];
    }
    return typeDefinition;
}
function valueDescriptorForTokenAndTypeDefinition(payload) {
    const { token, typeDefinition } = payload;
    const key = `${dasherize(token)}-value`;
    const type = parseValueTypeDefinition(payload);
    return {
        type,
        key,
        name: camelize(key),
        get defaultValue() {
            return defaultValueForDefinition(typeDefinition);
        },
        get hasCustomDefaultValue() {
            return parseValueTypeDefault(typeDefinition) !== undefined;
        },
        reader: readers[type],
        writer: writers[type] || writers.default,
    };
}
const defaultValuesByType = {
    get array() {
        return [];
    },
    boolean: false,
    number: 0,
    get object() {
        return {};
    },
    string: "",
};
const readers = {
    array(value) {
        const array = JSON.parse(value);
        if (!Array.isArray(array)) {
            throw new TypeError(`expected value of type "array" but instead got value "${value}" of type "${parseValueTypeDefault(array)}"`);
        }
        return array;
    },
    boolean(value) {
        return !(value == "0" || String(value).toLowerCase() == "false");
    },
    number(value) {
        return Number(value.replace(/_/g, ""));
    },
    object(value) {
        const object = JSON.parse(value);
        if (object === null || typeof object != "object" || Array.isArray(object)) {
            throw new TypeError(`expected value of type "object" but instead got value "${value}" of type "${parseValueTypeDefault(object)}"`);
        }
        return object;
    },
    string(value) {
        return value;
    },
};
const writers = {
    default: writeString,
    array: writeJSON,
    object: writeJSON,
};
function writeJSON(value) {
    return JSON.stringify(value);
}
function writeString(value) {
    return `${value}`;
}

class Controller {
    constructor(context) {
        this.context = context;
    }
    static get shouldLoad() {
        return true;
    }
    static afterLoad(_identifier, _application) {
        return;
    }
    get application() {
        return this.context.application;
    }
    get scope() {
        return this.context.scope;
    }
    get element() {
        return this.scope.element;
    }
    get identifier() {
        return this.scope.identifier;
    }
    get targets() {
        return this.scope.targets;
    }
    get outlets() {
        return this.scope.outlets;
    }
    get classes() {
        return this.scope.classes;
    }
    get data() {
        return this.scope.data;
    }
    initialize() {
    }
    connect() {
    }
    disconnect() {
    }
    dispatch(eventName, { target = this.element, detail = {}, prefix = this.identifier, bubbles = true, cancelable = true, } = {}) {
        const type = prefix ? `${prefix}:${eventName}` : eventName;
        const event = new CustomEvent(type, { detail, bubbles, cancelable });
        target.dispatchEvent(event);
        return event;
    }
}
Controller.blessings = [
    ClassPropertiesBlessing,
    TargetPropertiesBlessing,
    ValuePropertiesBlessing,
    OutletPropertiesBlessing,
];
Controller.targets = [];
Controller.outlets = [];
Controller.values = {};




/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startStimulusApp: () => (/* binding */ startStimulusApp)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _webpack_loader_symfony_stimulus_bridge_controllers_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webpack/loader!@symfony/stimulus-bridge/controllers.json */ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json");



//#region node_modules/.pnpm/@hotwired+stimulus-webpack-helpers@1.0.1_@hotwired+stimulus@3.2.2/node_modules/@hotwired/stimulus-webpack-helpers/dist/stimulus-webpack-helpers.js
function definitionsFromContext(context) {
	return context.keys().map((key) => definitionForModuleWithContextAndKey(context, key)).filter((value) => value);
}
function definitionForModuleWithContextAndKey(context, key) {
	const identifier = identifierForContextKey(key);
	if (identifier) return definitionForModuleAndIdentifier(context(key), identifier);
}
function definitionForModuleAndIdentifier(module, identifier) {
	const controllerConstructor = module.default;
	if (typeof controllerConstructor == "function") return {
		identifier,
		controllerConstructor
	};
}
function identifierForContextKey(key) {
	const logicalName = (key.match(/^(?:\.\/)?(.+)(?:[_-]controller\..+?)$/) || [])[1];
	if (logicalName) return logicalName.replace(/_/g, "-").replace(/\//g, "--");
}

//#endregion
//#region src/index.ts
function startStimulusApp(context) {
	const application = _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Application.start();
	if (true) application.debug = true;
	if (context) application.load(definitionsFromContext(context));
	for (const controllerName in _webpack_loader_symfony_stimulus_bridge_controllers_json__WEBPACK_IMPORTED_MODULE_1__["default"]) {
		if (!Object.prototype.hasOwnProperty.call(_webpack_loader_symfony_stimulus_bridge_controllers_json__WEBPACK_IMPORTED_MODULE_1__["default"], controllerName)) continue;
		application.register(controllerName, _webpack_loader_symfony_stimulus_bridge_controllers_json__WEBPACK_IMPORTED_MODULE_1__["default"][controllerName]);
	}
	return application;
}

//#endregion


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js ***!
  \****************************************************************/
/***/ (function(module) {

/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";const t=new Map,e={set(e,i,n){t.has(e)||t.set(e,new Map);const s=t.get(e);s.has(i)||0===s.size?s.set(i,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(e,i)=>t.has(e)&&t.get(e).get(i)||null,remove(e,i){if(!t.has(e))return;const n=t.get(e);n.delete(i),0===n.size&&t.delete(e)}},i="transitionend",n=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,((t,e)=>`#${CSS.escape(e)}`))),t),s=t=>{t.dispatchEvent(new Event(i))},o=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),r=t=>o(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(n(t)):null,a=t=>{if(!o(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},l=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),c=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c(t.parentNode):null},h=()=>{},d=t=>{t.offsetHeight},u=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,f=[],p=()=>"rtl"===document.documentElement.dir,m=t=>{var e;e=()=>{const e=u();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of f)t()})),f.push(e)):e()},g=(t,e=[],i=t)=>"function"==typeof t?t.call(...e):i,_=(t,e,n=!0)=>{if(!n)return void g(t);const o=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let r=!1;const a=({target:n})=>{n===e&&(r=!0,e.removeEventListener(i,a),g(t))};e.addEventListener(i,a),setTimeout((()=>{r||s(e)}),o)},b=(t,e,i,n)=>{const s=t.length;let o=t.indexOf(e);return-1===o?!i&&n?t[s-1]:t[0]:(o+=i?1:-1,n&&(o=(o+s)%s),t[Math.max(0,Math.min(o,s-1))])},v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,w=/::\d+$/,A={};let E=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},C=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${E++}`||t.uidEvent||E++}function x(t){const e=O(t);return t.uidEvent=e,A[e]=A[e]||{},A[e]}function k(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function L(t,e,i){const n="string"==typeof e,s=n?i:e||i;let o=I(t);return C.has(o)||(o=t),[n,s,o]}function S(t,e,i,n,s){if("string"!=typeof e||!t)return;let[o,r,a]=L(e,i,n);if(e in T){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=x(t),c=l[a]||(l[a]={}),h=k(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=O(r,e.replace(v,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return P(s,{delegateTarget:r}),n.oneOff&&N.off(t,s.type,e,i),i.apply(r,[s])}}(t,i,r):function(t,e){return function i(n){return P(n,{delegateTarget:t}),i.oneOff&&N.off(t,n.type,e),e.apply(t,[n])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function D(t,e,i,n,s){const o=k(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function $(t,e,i,n){const s=e[i]||{};for(const[o,r]of Object.entries(s))o.includes(n)&&D(t,e,i,r.callable,r.delegationSelector)}function I(t){return t=t.replace(y,""),T[t]||t}const N={on(t,e,i,n){S(t,e,i,n,!1)},one(t,e,i,n){S(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=L(e,i,n),a=r!==e,l=x(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))$(t,l,i,e.slice(1));for(const[i,n]of Object.entries(c)){const s=i.replace(w,"");a&&!e.includes(s)||D(t,l,r,n.callable,n.delegationSelector)}}else{if(!Object.keys(c).length)return;D(t,l,r,o,s?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=u();let s=null,o=!0,r=!0,a=!1;e!==I(e)&&n&&(s=n.Event(e,i),n(t).trigger(s),o=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());const l=P(new Event(e,{bubbles:o,cancelable:!0}),i);return a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&s&&s.preventDefault(),l}};function P(t,e={}){for(const[i,n]of Object.entries(e))try{t[i]=n}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>n})}return t}function j(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function M(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const F={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${M(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${M(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const n of i){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1),e[i]=j(t.dataset[n])}return e},getDataAttribute:(t,e)=>j(t.getAttribute(`data-bs-${M(e)}`))};class H{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=o(e)?F.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...o(e)?F.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[n,s]of Object.entries(e)){const e=t[n],r=o(e)?"element":null==(i=e)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)}var i}}class W extends H{constructor(t,i){super(),(t=r(t))&&(this._element=t,this._config=this._getConfig(i),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),N.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){_(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return e.get(r(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.7"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const B=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e?e.split(",").map((t=>n(t))).join(","):null},z={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let n=t.parentNode.closest(e);for(;n;)i.push(n),n=n.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!l(t)&&a(t)))},getSelectorFromElement(t){const e=B(t);return e&&z.findOne(e)?e:null},getElementFromSelector(t){const e=B(t);return e?z.findOne(e):null},getMultipleElementsFromSelector(t){const e=B(t);return e?z.find(e):[]}},R=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,n=t.NAME;N.on(document,i,`[data-bs-dismiss="${n}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),l(this))return;const s=z.getElementFromSelector(this)||this.closest(`.${n}`);t.getOrCreateInstance(s)[e]()}))},q=".bs.alert",V=`close${q}`,K=`closed${q}`;class Q extends W{static get NAME(){return"alert"}close(){if(N.trigger(this._element,V).defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),N.trigger(this._element,K),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=Q.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}R(Q,"close"),m(Q);const X='[data-bs-toggle="button"]';class Y extends W{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=Y.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}N.on(document,"click.bs.button.data-api",X,(t=>{t.preventDefault();const e=t.target.closest(X);Y.getOrCreateInstance(e).toggle()})),m(Y);const U=".bs.swipe",G=`touchstart${U}`,J=`touchmove${U}`,Z=`touchend${U}`,tt=`pointerdown${U}`,et=`pointerup${U}`,it={endCallback:null,leftCallback:null,rightCallback:null},nt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class st extends H{constructor(t,e){super(),this._element=t,t&&st.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return it}static get DefaultType(){return nt}static get NAME(){return"swipe"}dispose(){N.off(this._element,U)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),g(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&g(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(N.on(this._element,tt,(t=>this._start(t))),N.on(this._element,et,(t=>this._end(t))),this._element.classList.add("pointer-event")):(N.on(this._element,G,(t=>this._start(t))),N.on(this._element,J,(t=>this._move(t))),N.on(this._element,Z,(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const ot=".bs.carousel",rt=".data-api",at="ArrowLeft",lt="ArrowRight",ct="next",ht="prev",dt="left",ut="right",ft=`slide${ot}`,pt=`slid${ot}`,mt=`keydown${ot}`,gt=`mouseenter${ot}`,_t=`mouseleave${ot}`,bt=`dragstart${ot}`,vt=`load${ot}${rt}`,yt=`click${ot}${rt}`,wt="carousel",At="active",Et=".active",Tt=".carousel-item",Ct=Et+Tt,Ot={[at]:ut,[lt]:dt},xt={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},kt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Lt extends W{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=z.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===wt&&this.cycle()}static get Default(){return xt}static get DefaultType(){return kt}static get NAME(){return"carousel"}next(){this._slide(ct)}nextWhenVisible(){!document.hidden&&a(this._element)&&this.next()}prev(){this._slide(ht)}pause(){this._isSliding&&s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?N.one(this._element,pt,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void N.one(this._element,pt,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const n=t>i?ct:ht;this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&N.on(this._element,mt,(t=>this._keydown(t))),"hover"===this._config.pause&&(N.on(this._element,gt,(()=>this.pause())),N.on(this._element,_t,(()=>this._maybeEnableCycle()))),this._config.touch&&st.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of z.find(".carousel-item img",this._element))N.on(t,bt,(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(dt)),rightCallback:()=>this._slide(this._directionToOrder(ut)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new st(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Ot[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=z.findOne(Et,this._indicatorsElement);e.classList.remove(At),e.removeAttribute("aria-current");const i=z.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(At),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),n=t===ct,s=e||b(this._getItems(),i,n,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),r=e=>N.trigger(this._element,e,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r(ft).defaultPrevented)return;if(!i||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const l=n?"carousel-item-start":"carousel-item-end",c=n?"carousel-item-next":"carousel-item-prev";s.classList.add(c),d(s),i.classList.add(l),s.classList.add(l),this._queueCallback((()=>{s.classList.remove(l,c),s.classList.add(At),i.classList.remove(At,c,l),this._isSliding=!1,r(pt)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return z.findOne(Ct,this._element)}_getItems(){return z.find(Tt,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return p()?t===dt?ht:ct:t===dt?ct:ht}_orderToDirection(t){return p()?t===ht?dt:ut:t===ht?ut:dt}static jQueryInterface(t){return this.each((function(){const e=Lt.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}N.on(document,yt,"[data-bs-slide], [data-bs-slide-to]",(function(t){const e=z.getElementFromSelector(this);if(!e||!e.classList.contains(wt))return;t.preventDefault();const i=Lt.getOrCreateInstance(e),n=this.getAttribute("data-bs-slide-to");return n?(i.to(n),void i._maybeEnableCycle()):"next"===F.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),N.on(window,vt,(()=>{const t=z.find('[data-bs-ride="carousel"]');for(const e of t)Lt.getOrCreateInstance(e)})),m(Lt);const St=".bs.collapse",Dt=`show${St}`,$t=`shown${St}`,It=`hide${St}`,Nt=`hidden${St}`,Pt=`click${St}.data-api`,jt="show",Mt="collapse",Ft="collapsing",Ht=`:scope .${Mt} .${Mt}`,Wt='[data-bs-toggle="collapse"]',Bt={parent:null,toggle:!0},zt={parent:"(null|element)",toggle:"boolean"};class Rt extends W{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=z.find(Wt);for(const t of i){const e=z.getSelectorFromElement(t),i=z.find(e).filter((t=>t===this._element));null!==e&&i.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Bt}static get DefaultType(){return zt}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>Rt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(N.trigger(this._element,Dt).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(Mt),this._element.classList.add(Ft),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Ft),this._element.classList.add(Mt,jt),this._element.style[e]="",N.trigger(this._element,$t)}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(N.trigger(this._element,It).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,d(this._element),this._element.classList.add(Ft),this._element.classList.remove(Mt,jt);for(const t of this._triggerArray){const e=z.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Ft),this._element.classList.add(Mt),N.trigger(this._element,Nt)}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(jt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=r(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Wt);for(const e of t){const t=z.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=z.find(Ht,this._config.parent);return z.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=Rt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}N.on(document,Pt,Wt,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of z.getMultipleElementsFromSelector(this))Rt.getOrCreateInstance(t,{toggle:!1}).toggle()})),m(Rt);var qt="top",Vt="bottom",Kt="right",Qt="left",Xt="auto",Yt=[qt,Vt,Kt,Qt],Ut="start",Gt="end",Jt="clippingParents",Zt="viewport",te="popper",ee="reference",ie=Yt.reduce((function(t,e){return t.concat([e+"-"+Ut,e+"-"+Gt])}),[]),ne=[].concat(Yt,[Xt]).reduce((function(t,e){return t.concat([e,e+"-"+Ut,e+"-"+Gt])}),[]),se="beforeRead",oe="read",re="afterRead",ae="beforeMain",le="main",ce="afterMain",he="beforeWrite",de="write",ue="afterWrite",fe=[se,oe,re,ae,le,ce,he,de,ue];function pe(t){return t?(t.nodeName||"").toLowerCase():null}function me(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ge(t){return t instanceof me(t).Element||t instanceof Element}function _e(t){return t instanceof me(t).HTMLElement||t instanceof HTMLElement}function be(t){return"undefined"!=typeof ShadowRoot&&(t instanceof me(t).ShadowRoot||t instanceof ShadowRoot)}const ve={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];_e(s)&&pe(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});_e(n)&&pe(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function ye(t){return t.split("-")[0]}var we=Math.max,Ae=Math.min,Ee=Math.round;function Te(){var t=navigator.userAgentData;return null!=t&&t.brands&&Array.isArray(t.brands)?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function Ce(){return!/^((?!chrome|android).)*safari/i.test(Te())}function Oe(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1);var n=t.getBoundingClientRect(),s=1,o=1;e&&_e(t)&&(s=t.offsetWidth>0&&Ee(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&Ee(n.height)/t.offsetHeight||1);var r=(ge(t)?me(t):window).visualViewport,a=!Ce()&&i,l=(n.left+(a&&r?r.offsetLeft:0))/s,c=(n.top+(a&&r?r.offsetTop:0))/o,h=n.width/s,d=n.height/o;return{width:h,height:d,top:c,right:l+h,bottom:c+d,left:l,x:l,y:c}}function xe(t){var e=Oe(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function ke(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&be(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Le(t){return me(t).getComputedStyle(t)}function Se(t){return["table","td","th"].indexOf(pe(t))>=0}function De(t){return((ge(t)?t.ownerDocument:t.document)||window.document).documentElement}function $e(t){return"html"===pe(t)?t:t.assignedSlot||t.parentNode||(be(t)?t.host:null)||De(t)}function Ie(t){return _e(t)&&"fixed"!==Le(t).position?t.offsetParent:null}function Ne(t){for(var e=me(t),i=Ie(t);i&&Se(i)&&"static"===Le(i).position;)i=Ie(i);return i&&("html"===pe(i)||"body"===pe(i)&&"static"===Le(i).position)?e:i||function(t){var e=/firefox/i.test(Te());if(/Trident/i.test(Te())&&_e(t)&&"fixed"===Le(t).position)return null;var i=$e(t);for(be(i)&&(i=i.host);_e(i)&&["html","body"].indexOf(pe(i))<0;){var n=Le(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function Pe(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function je(t,e,i){return we(t,Ae(e,i))}function Me(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function Fe(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}const He={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=ye(i.placement),l=Pe(a),c=[Qt,Kt].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return Me("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:Fe(t,Yt))}(s.padding,i),d=xe(o),u="y"===l?qt:Qt,f="y"===l?Vt:Kt,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],m=r[l]-i.rects.reference[l],g=Ne(o),_=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=p/2-m/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,A=je(v,w,y),E=l;i.modifiersData[n]=((e={})[E]=A,e.centerOffset=A-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&ke(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function We(t){return t.split("-")[1]}var Be={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ze(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=t.isFixed,u=r.x,f=void 0===u?0:u,p=r.y,m=void 0===p?0:p,g="function"==typeof h?h({x:f,y:m}):{x:f,y:m};f=g.x,m=g.y;var _=r.hasOwnProperty("x"),b=r.hasOwnProperty("y"),v=Qt,y=qt,w=window;if(c){var A=Ne(i),E="clientHeight",T="clientWidth";A===me(i)&&"static"!==Le(A=De(i)).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth"),(s===qt||(s===Qt||s===Kt)&&o===Gt)&&(y=Vt,m-=(d&&A===w&&w.visualViewport?w.visualViewport.height:A[E])-n.height,m*=l?1:-1),s!==Qt&&(s!==qt&&s!==Vt||o!==Gt)||(v=Kt,f-=(d&&A===w&&w.visualViewport?w.visualViewport.width:A[T])-n.width,f*=l?1:-1)}var C,O=Object.assign({position:a},c&&Be),x=!0===h?function(t,e){var i=t.x,n=t.y,s=e.devicePixelRatio||1;return{x:Ee(i*s)/s||0,y:Ee(n*s)/s||0}}({x:f,y:m},me(i)):{x:f,y:m};return f=x.x,m=x.y,l?Object.assign({},O,((C={})[y]=b?"0":"",C[v]=_?"0":"",C.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",C)):Object.assign({},O,((e={})[y]=b?m+"px":"",e[v]=_?f+"px":"",e.transform="",e))}const Re={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:ye(e.placement),variation:We(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,ze(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,ze(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var qe={passive:!0};const Ve={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=me(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,qe)})),a&&l.addEventListener("resize",i.update,qe),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,qe)})),a&&l.removeEventListener("resize",i.update,qe)}},data:{}};var Ke={left:"right",right:"left",bottom:"top",top:"bottom"};function Qe(t){return t.replace(/left|right|bottom|top/g,(function(t){return Ke[t]}))}var Xe={start:"end",end:"start"};function Ye(t){return t.replace(/start|end/g,(function(t){return Xe[t]}))}function Ue(t){var e=me(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ge(t){return Oe(De(t)).left+Ue(t).scrollLeft}function Je(t){var e=Le(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Ze(t){return["html","body","#document"].indexOf(pe(t))>=0?t.ownerDocument.body:_e(t)&&Je(t)?t:Ze($e(t))}function ti(t,e){var i;void 0===e&&(e=[]);var n=Ze(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=me(n),r=s?[o].concat(o.visualViewport||[],Je(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(ti($e(r)))}function ei(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function ii(t,e,i){return e===Zt?ei(function(t,e){var i=me(t),n=De(t),s=i.visualViewport,o=n.clientWidth,r=n.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;var c=Ce();(c||!c&&"fixed"===e)&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a+Ge(t),y:l}}(t,i)):ge(e)?function(t,e){var i=Oe(t,!1,"fixed"===e);return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}(e,i):ei(function(t){var e,i=De(t),n=Ue(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=we(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=we(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+Ge(t),l=-n.scrollTop;return"rtl"===Le(s||i).direction&&(a+=we(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(De(t)))}function ni(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?ye(s):null,r=s?We(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case qt:e={x:a,y:i.y-n.height};break;case Vt:e={x:a,y:i.y+i.height};break;case Kt:e={x:i.x+i.width,y:l};break;case Qt:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?Pe(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case Ut:e[c]=e[c]-(i[h]/2-n[h]/2);break;case Gt:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function si(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.strategy,r=void 0===o?t.strategy:o,a=i.boundary,l=void 0===a?Jt:a,c=i.rootBoundary,h=void 0===c?Zt:c,d=i.elementContext,u=void 0===d?te:d,f=i.altBoundary,p=void 0!==f&&f,m=i.padding,g=void 0===m?0:m,_=Me("number"!=typeof g?g:Fe(g,Yt)),b=u===te?ee:te,v=t.rects.popper,y=t.elements[p?b:u],w=function(t,e,i,n){var s="clippingParents"===e?function(t){var e=ti($e(t)),i=["absolute","fixed"].indexOf(Le(t).position)>=0&&_e(t)?Ne(t):t;return ge(i)?e.filter((function(t){return ge(t)&&ke(t,i)&&"body"!==pe(t)})):[]}(t):[].concat(e),o=[].concat(s,[i]),r=o[0],a=o.reduce((function(e,i){var s=ii(t,i,n);return e.top=we(s.top,e.top),e.right=Ae(s.right,e.right),e.bottom=Ae(s.bottom,e.bottom),e.left=we(s.left,e.left),e}),ii(t,r,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(ge(y)?y:y.contextElement||De(t.elements.popper),l,h,r),A=Oe(t.elements.reference),E=ni({reference:A,element:v,placement:s}),T=ei(Object.assign({},v,E)),C=u===te?T:A,O={top:w.top-C.top+_.top,bottom:C.bottom-w.bottom+_.bottom,left:w.left-C.left+_.left,right:C.right-w.right+_.right},x=t.modifiersData.offset;if(u===te&&x){var k=x[s];Object.keys(O).forEach((function(t){var e=[Kt,Vt].indexOf(t)>=0?1:-1,i=[qt,Vt].indexOf(t)>=0?"y":"x";O[t]+=k[i]*e}))}return O}function oi(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?ne:l,h=We(n),d=h?a?ie:ie.filter((function(t){return We(t)===h})):Yt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=si(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[ye(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}const ri={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,m=i.allowedAutoPlacements,g=e.options.placement,_=ye(g),b=l||(_!==g&&p?function(t){if(ye(t)===Xt)return[];var e=Qe(t);return[Ye(t),e,Ye(e)]}(g):[Qe(g)]),v=[g].concat(b).reduce((function(t,i){return t.concat(ye(i)===Xt?oi(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:m}):i)}),[]),y=e.rects.reference,w=e.rects.popper,A=new Map,E=!0,T=v[0],C=0;C<v.length;C++){var O=v[C],x=ye(O),k=We(O)===Ut,L=[qt,Vt].indexOf(x)>=0,S=L?"width":"height",D=si(e,{placement:O,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),$=L?k?Kt:Qt:k?Vt:qt;y[S]>w[S]&&($=Qe($));var I=Qe($),N=[];if(o&&N.push(D[x]<=0),a&&N.push(D[$]<=0,D[I]<=0),N.every((function(t){return t}))){T=O,E=!1;break}A.set(O,N)}if(E)for(var P=function(t){var e=v.find((function(e){var i=A.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},j=p?3:1;j>0&&"break"!==P(j);j--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ai(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function li(t){return[qt,Kt,Vt,Qt].some((function(e){return t[e]>=0}))}const ci={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=si(e,{elementContext:"reference"}),a=si(e,{altBoundary:!0}),l=ai(r,n),c=ai(a,s,o),h=li(l),d=li(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},hi={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=ne.reduce((function(t,i){return t[i]=function(t,e,i){var n=ye(t),s=[Qt,qt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[Qt,Kt].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},di={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=ni({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})},data:{}},ui={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,m=void 0===p?0:p,g=si(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=ye(e.placement),b=We(e.placement),v=!b,y=Pe(_),w="x"===y?"y":"x",A=e.modifiersData.popperOffsets,E=e.rects.reference,T=e.rects.popper,C="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,O="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),x=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(A){if(o){var L,S="y"===y?qt:Qt,D="y"===y?Vt:Kt,$="y"===y?"height":"width",I=A[y],N=I+g[S],P=I-g[D],j=f?-T[$]/2:0,M=b===Ut?E[$]:T[$],F=b===Ut?-T[$]:-E[$],H=e.elements.arrow,W=f&&H?xe(H):{width:0,height:0},B=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=B[S],R=B[D],q=je(0,E[$],W[$]),V=v?E[$]/2-j-q-z-O.mainAxis:M-q-z-O.mainAxis,K=v?-E[$]/2+j+q+R+O.mainAxis:F+q+R+O.mainAxis,Q=e.elements.arrow&&Ne(e.elements.arrow),X=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,Y=null!=(L=null==x?void 0:x[y])?L:0,U=I+K-Y,G=je(f?Ae(N,I+V-Y-X):N,I,f?we(P,U):P);A[y]=G,k[y]=G-I}if(a){var J,Z="x"===y?qt:Qt,tt="x"===y?Vt:Kt,et=A[w],it="y"===w?"height":"width",nt=et+g[Z],st=et-g[tt],ot=-1!==[qt,Qt].indexOf(_),rt=null!=(J=null==x?void 0:x[w])?J:0,at=ot?nt:et-E[it]-T[it]-rt+O.altAxis,lt=ot?et+E[it]+T[it]-rt-O.altAxis:st,ct=f&&ot?function(t,e,i){var n=je(t,e,i);return n>i?i:n}(at,et,lt):je(f?at:nt,et,f?lt:st);A[w]=ct,k[w]=ct-et}e.modifiersData[n]=k}},requiresIfExists:["offset"]};function fi(t,e,i){void 0===i&&(i=!1);var n,s,o=_e(e),r=_e(e)&&function(t){var e=t.getBoundingClientRect(),i=Ee(e.width)/t.offsetWidth||1,n=Ee(e.height)/t.offsetHeight||1;return 1!==i||1!==n}(e),a=De(e),l=Oe(t,r,i),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(o||!o&&!i)&&(("body"!==pe(e)||Je(a))&&(c=(n=e)!==me(n)&&_e(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:Ue(n)),_e(e)?((h=Oe(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=Ge(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}function pi(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||s(t)})),n}var mi={placement:"bottom",modifiers:[],strategy:"absolute"};function gi(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function _i(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?mi:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},mi,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:ge(t)?ti(t):t.contextElement?ti(t.contextElement):[],popper:ti(e)};var r,c,u=function(t){var e=pi(t);return fe.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(gi(e,i)){a.rects={reference:fi(e,Ne(i),"fixed"===a.options.strategy),popper:xe(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!gi(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var bi=_i(),vi=_i({defaultModifiers:[Ve,di,Re,ve]}),yi=_i({defaultModifiers:[Ve,di,Re,ve,hi,ri,ui,He,ci]});const wi=Object.freeze(Object.defineProperty({__proto__:null,afterMain:ce,afterRead:re,afterWrite:ue,applyStyles:ve,arrow:He,auto:Xt,basePlacements:Yt,beforeMain:ae,beforeRead:se,beforeWrite:he,bottom:Vt,clippingParents:Jt,computeStyles:Re,createPopper:yi,createPopperBase:bi,createPopperLite:vi,detectOverflow:si,end:Gt,eventListeners:Ve,flip:ri,hide:ci,left:Qt,main:le,modifierPhases:fe,offset:hi,placements:ne,popper:te,popperGenerator:_i,popperOffsets:di,preventOverflow:ui,read:oe,reference:ee,right:Kt,start:Ut,top:qt,variationPlacements:ie,viewport:Zt,write:de},Symbol.toStringTag,{value:"Module"})),Ai="dropdown",Ei=".bs.dropdown",Ti=".data-api",Ci="ArrowUp",Oi="ArrowDown",xi=`hide${Ei}`,ki=`hidden${Ei}`,Li=`show${Ei}`,Si=`shown${Ei}`,Di=`click${Ei}${Ti}`,$i=`keydown${Ei}${Ti}`,Ii=`keyup${Ei}${Ti}`,Ni="show",Pi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',ji=`${Pi}.${Ni}`,Mi=".dropdown-menu",Fi=p()?"top-end":"top-start",Hi=p()?"top-start":"top-end",Wi=p()?"bottom-end":"bottom-start",Bi=p()?"bottom-start":"bottom-end",zi=p()?"left-start":"right-start",Ri=p()?"right-start":"left-start",qi={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Vi={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Ki extends W{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=z.next(this._element,Mi)[0]||z.prev(this._element,Mi)[0]||z.findOne(Mi,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return qi}static get DefaultType(){return Vi}static get NAME(){return Ai}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!N.trigger(this._element,Li,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))N.on(t,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ni),this._element.classList.add(Ni),N.trigger(this._element,Si,t)}}hide(){if(l(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!N.trigger(this._element,xi,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.off(t,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ni),this._element.classList.remove(Ni),this._element.setAttribute("aria-expanded","false"),F.removeDataAttribute(this._menu,"popper"),N.trigger(this._element,ki,t),this._element.focus()}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!o(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${Ai.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===wi)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let t=this._element;"parent"===this._config.reference?t=this._parent:o(this._config.reference)?t=r(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=yi(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Ni)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return zi;if(t.classList.contains("dropstart"))return Ri;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?Hi:Fi:e?Bi:Wi}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(F.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...g(this._config.popperConfig,[void 0,t])}}_selectMenuItem({key:t,target:e}){const i=z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>a(t)));i.length&&b(i,e,t===Oi,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=Ki.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=z.find(ji);for(const i of e){const e=Ki.getInstance(i);if(!e||!1===e._config.autoClose)continue;const n=t.composedPath(),s=n.includes(e._menu);if(n.includes(e._element)||"inside"===e._config.autoClose&&!s||"outside"===e._config.autoClose&&s)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,n=[Ci,Oi].includes(t.key);if(!n&&!i)return;if(e&&!i)return;t.preventDefault();const s=this.matches(Pi)?this:z.prev(this,Pi)[0]||z.next(this,Pi)[0]||z.findOne(Pi,t.delegateTarget.parentNode),o=Ki.getOrCreateInstance(s);if(n)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}N.on(document,$i,Pi,Ki.dataApiKeydownHandler),N.on(document,$i,Mi,Ki.dataApiKeydownHandler),N.on(document,Di,Ki.clearMenus),N.on(document,Ii,Ki.clearMenus),N.on(document,Di,Pi,(function(t){t.preventDefault(),Ki.getOrCreateInstance(this).toggle()})),m(Ki);const Qi="backdrop",Xi="show",Yi=`mousedown.bs.${Qi}`,Ui={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Gi={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ji extends H{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Ui}static get DefaultType(){return Gi}static get NAME(){return Qi}show(t){if(!this._config.isVisible)return void g(t);this._append();const e=this._getElement();this._config.isAnimated&&d(e),e.classList.add(Xi),this._emulateAnimation((()=>{g(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(Xi),this._emulateAnimation((()=>{this.dispose(),g(t)}))):g(t)}dispose(){this._isAppended&&(N.off(this._element,Yi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=r(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),N.on(t,Yi,(()=>{g(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){_(t,this._getElement(),this._config.isAnimated)}}const Zi=".bs.focustrap",tn=`focusin${Zi}`,en=`keydown.tab${Zi}`,nn="backward",sn={autofocus:!0,trapElement:null},on={autofocus:"boolean",trapElement:"element"};class rn extends H{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return sn}static get DefaultType(){return on}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),N.off(document,Zi),N.on(document,tn,(t=>this._handleFocusin(t))),N.on(document,en,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,N.off(document,Zi))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=z.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===nn?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?nn:"forward")}}const an=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ln=".sticky-top",cn="padding-right",hn="margin-right";class dn{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,cn,(e=>e+t)),this._setElementAttributes(an,cn,(e=>e+t)),this._setElementAttributes(ln,hn,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,cn),this._resetElementAttributes(an,cn),this._resetElementAttributes(ln,hn)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&F.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=F.getDataAttribute(t,e);null!==i?(F.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(o(t))e(t);else for(const i of z.find(t,this._element))e(i)}}const un=".bs.modal",fn=`hide${un}`,pn=`hidePrevented${un}`,mn=`hidden${un}`,gn=`show${un}`,_n=`shown${un}`,bn=`resize${un}`,vn=`click.dismiss${un}`,yn=`mousedown.dismiss${un}`,wn=`keydown.dismiss${un}`,An=`click${un}.data-api`,En="modal-open",Tn="show",Cn="modal-static",On={backdrop:!0,focus:!0,keyboard:!0},xn={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class kn extends W{constructor(t,e){super(t,e),this._dialog=z.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new dn,this._addEventListeners()}static get Default(){return On}static get DefaultType(){return xn}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||N.trigger(this._element,gn,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(En),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(N.trigger(this._element,fn).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Tn),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){N.off(window,un),N.off(this._dialog,un),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ji({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new rn({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=z.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),d(this._element),this._element.classList.add(Tn),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,N.trigger(this._element,_n,{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){N.on(this._element,wn,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),N.on(window,bn,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),N.on(this._element,yn,(t=>{N.one(this._element,vn,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(En),this._resetAdjustments(),this._scrollBar.reset(),N.trigger(this._element,mn)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(N.trigger(this._element,pn).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(Cn)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(Cn),this._queueCallback((()=>{this._element.classList.remove(Cn),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=p()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=p()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=kn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}N.on(document,An,'[data-bs-toggle="modal"]',(function(t){const e=z.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),N.one(e,gn,(t=>{t.defaultPrevented||N.one(e,mn,(()=>{a(this)&&this.focus()}))}));const i=z.findOne(".modal.show");i&&kn.getInstance(i).hide(),kn.getOrCreateInstance(e).toggle(this)})),R(kn),m(kn);const Ln=".bs.offcanvas",Sn=".data-api",Dn=`load${Ln}${Sn}`,$n="show",In="showing",Nn="hiding",Pn=".offcanvas.show",jn=`show${Ln}`,Mn=`shown${Ln}`,Fn=`hide${Ln}`,Hn=`hidePrevented${Ln}`,Wn=`hidden${Ln}`,Bn=`resize${Ln}`,zn=`click${Ln}${Sn}`,Rn=`keydown.dismiss${Ln}`,qn={backdrop:!0,keyboard:!0,scroll:!1},Vn={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Kn extends W{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return qn}static get DefaultType(){return Vn}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||N.trigger(this._element,jn,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new dn).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(In),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add($n),this._element.classList.remove(In),N.trigger(this._element,Mn,{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(N.trigger(this._element,Fn).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Nn),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove($n,Nn),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new dn).reset(),N.trigger(this._element,Wn)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new Ji({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():N.trigger(this._element,Hn)}:null})}_initializeFocusTrap(){return new rn({trapElement:this._element})}_addEventListeners(){N.on(this._element,Rn,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():N.trigger(this._element,Hn))}))}static jQueryInterface(t){return this.each((function(){const e=Kn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}N.on(document,zn,'[data-bs-toggle="offcanvas"]',(function(t){const e=z.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this))return;N.one(e,Wn,(()=>{a(this)&&this.focus()}));const i=z.findOne(Pn);i&&i!==e&&Kn.getInstance(i).hide(),Kn.getOrCreateInstance(e).toggle(this)})),N.on(window,Dn,(()=>{for(const t of z.find(Pn))Kn.getOrCreateInstance(t).show()})),N.on(window,Bn,(()=>{for(const t of z.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&Kn.getOrCreateInstance(t).hide()})),R(Kn),m(Kn);const Qn={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Xn=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Yn=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Un=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!Xn.has(i)||Boolean(Yn.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},Gn={allowList:Qn,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Jn={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Zn={entry:"(string|element|function|null)",selector:"(string|element)"};class ts extends H{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Gn}static get DefaultType(){return Jn}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Zn)}_setContent(t,e,i){const n=z.findOne(i,t);n&&((e=this._resolvePossibleFunction(e))?o(e)?this._putElementInTemplate(r(e),n):this._config.html?n.innerHTML=this._maybeSanitize(e):n.textContent=e:n.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...n.body.querySelectorAll("*"));for(const t of s){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const n=[].concat(...t.attributes),s=[].concat(e["*"]||[],e[i]||[]);for(const e of n)Un(e,s)||t.removeAttribute(e.nodeName)}return n.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return g(t,[void 0,this])}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const es=new Set(["sanitize","allowList","sanitizeFn"]),is="fade",ns="show",ss=".tooltip-inner",os=".modal",rs="hide.bs.modal",as="hover",ls="focus",cs="click",hs={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},ds={allowList:Qn,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},us={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class fs extends W{constructor(t,e){if(void 0===wi)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return ds}static get DefaultType(){return us}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),N.off(this._element.closest(os),rs,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=N.trigger(this._element,this.constructor.eventName("show")),e=(c(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:n}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),N.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(ns),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.on(t,"mouseover",h);this._queueCallback((()=>{N.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!N.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(ns),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.off(t,"mouseover",h);this._activeTrigger[cs]=!1,this._activeTrigger[ls]=!1,this._activeTrigger[as]=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),N.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(is,ns),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(is),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new ts({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[ss]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(is)}_isShown(){return this.tip&&this.tip.classList.contains(ns)}_createPopper(t){const e=g(this._config.placement,[this,t,this._element]),i=hs[e.toUpperCase()];return yi(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return g(t,[this._element,this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,...g(this._config.popperConfig,[void 0,e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)N.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger[cs]=!(e._isShown()&&e._activeTrigger[cs]),e.toggle()}));else if("manual"!==e){const t=e===as?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===as?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");N.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?ls:as]=!0,e._enter()})),N.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?ls:as]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},N.on(this._element.closest(os),rs,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=F.getDataAttributes(this._element);for(const t of Object.keys(e))es.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:r(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=fs.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m(fs);const ps=".popover-header",ms=".popover-body",gs={...fs.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},_s={...fs.DefaultType,content:"(null|string|element|function)"};class bs extends fs{static get Default(){return gs}static get DefaultType(){return _s}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[ps]:this._getTitle(),[ms]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=bs.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m(bs);const vs=".bs.scrollspy",ys=`activate${vs}`,ws=`click${vs}`,As=`load${vs}.data-api`,Es="active",Ts="[href]",Cs=".nav-link",Os=`${Cs}, .nav-item > ${Cs}, .list-group-item`,xs={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},ks={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Ls extends W{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return xs}static get DefaultType(){return ks}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=r(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(N.off(this._config.target,ws),N.on(this._config.target,ws,Ts,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,n=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:n,behavior:"smooth"});i.scrollTop=n}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},n=(this._rootElement||document.documentElement).scrollTop,s=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&t){if(i(o),!n)return}else s||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=z.find(Ts,this._config.target);for(const e of t){if(!e.hash||l(e))continue;const t=z.findOne(decodeURI(e.hash),this._element);a(t)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Es),this._activateParents(t),N.trigger(this._element,ys,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))z.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(Es);else for(const e of z.parents(t,".nav, .list-group"))for(const t of z.prev(e,Os))t.classList.add(Es)}_clearActiveClass(t){t.classList.remove(Es);const e=z.find(`${Ts}.${Es}`,t);for(const t of e)t.classList.remove(Es)}static jQueryInterface(t){return this.each((function(){const e=Ls.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(window,As,(()=>{for(const t of z.find('[data-bs-spy="scroll"]'))Ls.getOrCreateInstance(t)})),m(Ls);const Ss=".bs.tab",Ds=`hide${Ss}`,$s=`hidden${Ss}`,Is=`show${Ss}`,Ns=`shown${Ss}`,Ps=`click${Ss}`,js=`keydown${Ss}`,Ms=`load${Ss}`,Fs="ArrowLeft",Hs="ArrowRight",Ws="ArrowUp",Bs="ArrowDown",zs="Home",Rs="End",qs="active",Vs="fade",Ks="show",Qs=".dropdown-toggle",Xs=`:not(${Qs})`,Ys='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Us=`.nav-link${Xs}, .list-group-item${Xs}, [role="tab"]${Xs}, ${Ys}`,Gs=`.${qs}[data-bs-toggle="tab"], .${qs}[data-bs-toggle="pill"], .${qs}[data-bs-toggle="list"]`;class Js extends W{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),N.on(this._element,js,(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?N.trigger(e,Ds,{relatedTarget:t}):null;N.trigger(t,Is,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(qs),this._activate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),N.trigger(t,Ns,{relatedTarget:e})):t.classList.add(Ks)}),t,t.classList.contains(Vs)))}_deactivate(t,e){t&&(t.classList.remove(qs),t.blur(),this._deactivate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),N.trigger(t,$s,{relatedTarget:e})):t.classList.remove(Ks)}),t,t.classList.contains(Vs)))}_keydown(t){if(![Fs,Hs,Ws,Bs,zs,Rs].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter((t=>!l(t)));let i;if([zs,Rs].includes(t.key))i=e[t.key===zs?0:e.length-1];else{const n=[Hs,Bs].includes(t.key);i=b(e,t.target,n,!0)}i&&(i.focus({preventScroll:!0}),Js.getOrCreateInstance(i).show())}_getChildren(){return z.find(Us,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=z.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const n=(t,n)=>{const s=z.findOne(t,i);s&&s.classList.toggle(n,e)};n(Qs,qs),n(".dropdown-menu",Ks),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(qs)}_getInnerElement(t){return t.matches(Us)?t:z.findOne(Us,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=Js.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(document,Ps,Ys,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this)||Js.getOrCreateInstance(this).show()})),N.on(window,Ms,(()=>{for(const t of z.find(Gs))Js.getOrCreateInstance(t)})),m(Js);const Zs=".bs.toast",to=`mouseover${Zs}`,eo=`mouseout${Zs}`,io=`focusin${Zs}`,no=`focusout${Zs}`,so=`hide${Zs}`,oo=`hidden${Zs}`,ro=`show${Zs}`,ao=`shown${Zs}`,lo="hide",co="show",ho="showing",uo={animation:"boolean",autohide:"boolean",delay:"number"},fo={animation:!0,autohide:!0,delay:5e3};class po extends W{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return fo}static get DefaultType(){return uo}static get NAME(){return"toast"}show(){N.trigger(this._element,ro).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(lo),d(this._element),this._element.classList.add(co,ho),this._queueCallback((()=>{this._element.classList.remove(ho),N.trigger(this._element,ao),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(N.trigger(this._element,so).defaultPrevented||(this._element.classList.add(ho),this._queueCallback((()=>{this._element.classList.add(lo),this._element.classList.remove(ho,co),N.trigger(this._element,oo)}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(co),super.dispose()}isShown(){return this._element.classList.contains(co)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){N.on(this._element,to,(t=>this._onInteraction(t,!0))),N.on(this._element,eo,(t=>this._onInteraction(t,!1))),N.on(this._element,io,(t=>this._onInteraction(t,!0))),N.on(this._element,no,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=po.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return R(po),m(po),{Alert:Q,Button:Y,Carousel:Lt,Collapse:Rt,Dropdown:Ki,Modal:kn,Offcanvas:Kn,Popover:bs,ScrollSpy:Ls,Tab:Js,Toast:po,Tooltip:fs}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MERBQVU7Ozs7Ozs7Ozs7Ozs7QUNYdkM7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkJBQTJCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyxxREFBcUQsUUFBUTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdUNBQXVDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVDQUF1QztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCwyQ0FBMkM7QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx3Q0FBd0M7QUFDNUU7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixVQUFVO0FBQzFCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixVQUFVO0FBQzFCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrQ0FBa0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLEtBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsd0JBQXdCLEdBQUcsZ0JBQWdCLE1BQU0sY0FBYztBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDRCQUE0QjtBQUNoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsWUFBWTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFlBQVk7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxZQUFZO0FBQ2hEO0FBQ0E7QUFDQSx3REFBd0QsZ0NBQWdDLElBQUksV0FBVztBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLFlBQVk7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQsb0JBQW9CLGtDQUFrQztBQUN0RCxxQ0FBcUMsaUNBQWlDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLGdCQUFnQixrQ0FBa0M7QUFDbEQsaUNBQWlDLGlDQUFpQztBQUNsRSxxREFBcUQsUUFBUTtBQUM3RDtBQUNBO0FBQ0EsdUNBQXVDLEtBQUs7QUFDNUM7QUFDQTtBQUNBLHVDQUF1QyxLQUFLO0FBQzVDO0FBQ0E7QUFDQSx1Q0FBdUMsd0JBQXdCO0FBQy9EO0FBQ0E7QUFDQSx1Q0FBdUMsd0JBQXdCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxtQkFBbUI7QUFDakU7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsS0FBSztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQixHQUFHLGVBQWU7QUFDekQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxjQUFjLEtBQUssTUFBTTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdCQUFnQixHQUFHLFdBQVc7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0EsK0NBQStDLFdBQVcscUJBQXFCLGNBQWMsSUFBSSxXQUFXLEdBQUcsV0FBVyxTQUFTLHFCQUFxQixJQUFJLFdBQVc7QUFDdkssdUJBQXVCLGVBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrQkFBK0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLFdBQVc7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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aUJBQWlCLGdDQUFnQyxvQkFBb0IsdUNBQXVDLG9CQUFvQixtREFBbUQsMEJBQTBCLDZCQUE2QixxQ0FBcUMsdUJBQXVCLCtGQUErRixFQUFFLElBQUksUUFBUSxJQUFJLGlDQUFpQyxxR0FBcUcsd0JBQXdCLG9EQUFvRCxTQUFTLG9DQUFvQyxHQUFHLGdCQUFnQixHQUFHLGVBQWUsR0FBRyxnQkFBZ0IsR0FBRyxZQUFZLEdBQUcsY0FBYyxHQUFHLFlBQVksR0FBRyxhQUFhLEdBQUcsdUNBQXVDLHNEQUFzRCxLQUFLLG9DQUFvQyxtQkFBbUIsaUJBQWlCLGdIQUFnSCxxQkFBcUIsVUFBVSx5QkFBeUIsVUFBVSxrQkFBa0IsY0FBYyxPQUFPLGlQQUFpUCx5RkFBeUYseUNBQXlDLE9BQU8sMEhBQTBILGtHQUFrRywwQ0FBMEMsVUFBVSx3RkFBd0YsVUFBVSw0Q0FBNEMscUJBQXFCLGlIQUFpSCxZQUFZLHdCQUF3QixvQkFBb0IsZUFBZSwyREFBMkQsTUFBTSw0REFBNEQsc0NBQXNDLHdCQUF3Qix3RUFBd0UsZ0JBQWdCLHdOQUF3TixnQkFBZ0IsK0NBQStDLDBCQUEwQiw2QkFBNkIsdUNBQXVDLHVCQUF1Qix5REFBeUQsRUFBRSxJQUFJLFlBQVksSUFBSSxvQkFBb0IsK0hBQStIO0FBQ3BwOUUsZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy8gc3luYyBcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2NzcmZfcHJvdGVjdGlvbl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvSG9tZXBhZ2UuY3NzP2IwNDgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9Mb2dpbi5jc3M/ZmY5OCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL1JlZ2lzdGVyLmNzcz82ZjA4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvU3R5bGUuc2Nzcz9iNzZkIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz82YmU2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaG90d2lyZWQvc3RpbXVsdXMvZGlzdC9zdGltdWx1cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcz9lOTY3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcclxuXHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZXMvSG9tZXBhZ2UuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy9Mb2dpbi5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL1JlZ2lzdGVyLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvU3R5bGUuc2Nzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcbmltcG9ydCAnQHBvcHBlcmpzL2NvcmUnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzJztcclxuXHJcbmNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KCcuL2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLmpzJC8pKTtcclxuZXhwb3J0IGRlZmF1bHQgYXBwO1xyXG5cclxuXHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9jc3JmX3Byb3RlY3Rpb25fY29udHJvbGxlci5qc1wiOiBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzL2NzcmZfcHJvdGVjdGlvbl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLmpzJFwiOyIsIi8vIGFzc2V0cy9jb250cm9sbGVycy9jc3JmX3Byb3RlY3Rpb25fY29udHJvbGxlci5qc1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuXHJcbmNvbnN0IG5hbWVDaGVjayA9IC9eWy1fYS16QS1aMC05XXs0LDIyfSQvO1xyXG5jb25zdCB0b2tlbkNoZWNrID0gL15bLV9cXC8rYS16QS1aMC05XXsyNCx9JC87XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ1NSRiBwcm90ZWN0aW9uIGNvbnRyb2xsZXIgY29ubmVjdGVkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVDc3JmVG9rZW4oZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICB9LCB0cnVlKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHVyYm86c3VibWl0LXN0YXJ0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdlbmVyYXRlQ3NyZkhlYWRlcnMoZXZlbnQuZGV0YWlsLmZvcm1TdWJtaXNzaW9uLmZvcm1FbGVtZW50KTtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoaGVhZGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5kZXRhaWwuZm9ybVN1Ym1pc3Npb24uZmV0Y2hSZXF1ZXN0LmhlYWRlcnNba2V5XSA9IGhlYWRlcnNba2V5XTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3R1cmJvOnN1Ym1pdC1lbmQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDc3JmVG9rZW4oZXZlbnQuZGV0YWlsLmZvcm1TdWJtaXNzaW9uLmZvcm1FbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUNzcmZUb2tlbihmb3JtRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGNzcmZGaWVsZCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtY29udHJvbGxlcj1cImNzcmYtcHJvdGVjdGlvblwiXSwgaW5wdXRbbmFtZT1cIl9jc3JmX3Rva2VuXCJdJyk7XHJcbiAgICAgICAgaWYgKCFjc3JmRmllbGQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGNzcmZDb29raWUgPSBjc3JmRmllbGQuZ2V0QXR0cmlidXRlKCdkYXRhLWNzcmYtcHJvdGVjdGlvbi1jb29raWUtdmFsdWUnKTtcclxuICAgICAgICBsZXQgY3NyZlRva2VuID0gY3NyZkZpZWxkLnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoIWNzcmZDb29raWUgJiYgbmFtZUNoZWNrLnRlc3QoY3NyZlRva2VuKSkge1xyXG4gICAgICAgICAgICBjc3JmRmllbGQuc2V0QXR0cmlidXRlKCdkYXRhLWNzcmYtcHJvdGVjdGlvbi1jb29raWUtdmFsdWUnLCBjc3JmQ29va2llID0gY3NyZlRva2VuKTtcclxuICAgICAgICAgICAgY3NyZkZpZWxkLmRlZmF1bHRWYWx1ZSA9IGNzcmZUb2tlbiA9IGJ0b2EoU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCAod2luZG93LmNyeXB0byB8fCB3aW5kb3cubXNDcnlwdG8pLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxOCkpKSk7XHJcbiAgICAgICAgICAgIGNzcmZGaWVsZC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJywgeyBidWJibGVzOiB0cnVlIH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjc3JmQ29va2llICYmIHRva2VuQ2hlY2sudGVzdChjc3JmVG9rZW4pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZSA9IGAke2NzcmZDb29raWV9XyR7Y3NyZlRva2VufT0ke2NzcmZDb29raWV9OyBwYXRoPS87IHNhbWVzaXRlPXN0cmljdGA7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyBgX19Ib3N0LSR7Y29va2llfTsgc2VjdXJlYCA6IGNvb2tpZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVDc3JmSGVhZGVycyhmb3JtRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcclxuICAgICAgICBjb25zdCBjc3JmRmllbGQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtkYXRhLWNvbnRyb2xsZXI9XCJjc3JmLXByb3RlY3Rpb25cIl0sIGlucHV0W25hbWU9XCJfY3NyZl90b2tlblwiXScpO1xyXG4gICAgICAgIGlmICghY3NyZkZpZWxkKSByZXR1cm4gaGVhZGVycztcclxuXHJcbiAgICAgICAgY29uc3QgY3NyZkNvb2tpZSA9IGNzcmZGaWVsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3NyZi1wcm90ZWN0aW9uLWNvb2tpZS12YWx1ZScpO1xyXG4gICAgICAgIGlmICh0b2tlbkNoZWNrLnRlc3QoY3NyZkZpZWxkLnZhbHVlKSAmJiBuYW1lQ2hlY2sudGVzdChjc3JmQ29va2llKSkge1xyXG4gICAgICAgICAgICBoZWFkZXJzW2NzcmZDb29raWVdID0gY3NyZkZpZWxkLnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ3NyZlRva2VuKGZvcm1FbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgY3NyZkZpZWxkID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS1jb250cm9sbGVyPVwiY3NyZi1wcm90ZWN0aW9uXCJdLCBpbnB1dFtuYW1lPVwiX2NzcmZfdG9rZW5cIl0nKTtcclxuICAgICAgICBpZiAoIWNzcmZGaWVsZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBjc3JmQ29va2llID0gY3NyZkZpZWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1jc3JmLXByb3RlY3Rpb24tY29va2llLXZhbHVlJyk7XHJcbiAgICAgICAgaWYgKHRva2VuQ2hlY2sudGVzdChjc3JmRmllbGQudmFsdWUpICYmIG5hbWVDaGVjay50ZXN0KGNzcmZDb29raWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZSA9IGAke2NzcmZDb29raWV9XyR7Y3NyZkZpZWxkLnZhbHVlfT0wOyBwYXRoPS87IHNhbWVzaXRlPXN0cmljdDsgbWF4LWFnZT0wYDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyA/IGBfX0hvc3QtJHtjb29raWV9OyBzZWN1cmVgIDogY29va2llO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuXHJcbi8qXHJcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxyXG4gKlxyXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxyXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcclxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcclxuICpcclxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ1NSRiBwcm90ZWN0aW9uIGNvbnRyb2xsZXIgY29ubmVjdGVkJyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKlxuU3RpbXVsdXMgMy4yLjFcbkNvcHlyaWdodCDCqSAyMDIzIEJhc2VjYW1wLCBMTENcbiAqL1xuY2xhc3MgRXZlbnRMaXN0ZW5lciB7XG4gICAgY29uc3RydWN0b3IoZXZlbnRUYXJnZXQsIGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZXZlbnRUYXJnZXQgPSBldmVudFRhcmdldDtcbiAgICAgICAgdGhpcy5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgICAgIHRoaXMuZXZlbnRPcHRpb25zID0gZXZlbnRPcHRpb25zO1xuICAgICAgICB0aGlzLnVub3JkZXJlZEJpbmRpbmdzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIHRoaXMsIHRoaXMuZXZlbnRPcHRpb25zKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5ldmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCB0aGlzLCB0aGlzLmV2ZW50T3B0aW9ucyk7XG4gICAgfVxuICAgIGJpbmRpbmdDb25uZWN0ZWQoYmluZGluZykge1xuICAgICAgICB0aGlzLnVub3JkZXJlZEJpbmRpbmdzLmFkZChiaW5kaW5nKTtcbiAgICB9XG4gICAgYmluZGluZ0Rpc2Nvbm5lY3RlZChiaW5kaW5nKSB7XG4gICAgICAgIHRoaXMudW5vcmRlcmVkQmluZGluZ3MuZGVsZXRlKGJpbmRpbmcpO1xuICAgIH1cbiAgICBoYW5kbGVFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCBleHRlbmRlZEV2ZW50ID0gZXh0ZW5kRXZlbnQoZXZlbnQpO1xuICAgICAgICBmb3IgKGNvbnN0IGJpbmRpbmcgb2YgdGhpcy5iaW5kaW5ncykge1xuICAgICAgICAgICAgaWYgKGV4dGVuZGVkRXZlbnQuaW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nLmhhbmRsZUV2ZW50KGV4dGVuZGVkRXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGhhc0JpbmRpbmdzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bm9yZGVyZWRCaW5kaW5ncy5zaXplID4gMDtcbiAgICB9XG4gICAgZ2V0IGJpbmRpbmdzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnVub3JkZXJlZEJpbmRpbmdzKS5zb3J0KChsZWZ0LCByaWdodCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVmdEluZGV4ID0gbGVmdC5pbmRleCwgcmlnaHRJbmRleCA9IHJpZ2h0LmluZGV4O1xuICAgICAgICAgICAgcmV0dXJuIGxlZnRJbmRleCA8IHJpZ2h0SW5kZXggPyAtMSA6IGxlZnRJbmRleCA+IHJpZ2h0SW5kZXggPyAxIDogMDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZXh0ZW5kRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoXCJpbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWRcIiBpbiBldmVudCkge1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCB7IHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiB9ID0gZXZlbnQ7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGV2ZW50LCB7XG4gICAgICAgICAgICBpbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6IGZhbHNlLFxuICAgICAgICAgICAgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgRGlzcGF0Y2hlciB7XG4gICAgY29uc3RydWN0b3IoYXBwbGljYXRpb24pIHtcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvbiA9IGFwcGxpY2F0aW9uO1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJNYXBzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiBldmVudExpc3RlbmVyLmNvbm5lY3QoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IGV2ZW50TGlzdGVuZXIuZGlzY29ubmVjdCgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgZXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZXZlbnRMaXN0ZW5lck1hcHMudmFsdWVzKCkpLnJlZHVjZSgobGlzdGVuZXJzLCBtYXApID0+IGxpc3RlbmVycy5jb25jYXQoQXJyYXkuZnJvbShtYXAudmFsdWVzKCkpKSwgW10pO1xuICAgIH1cbiAgICBiaW5kaW5nQ29ubmVjdGVkKGJpbmRpbmcpIHtcbiAgICAgICAgdGhpcy5mZXRjaEV2ZW50TGlzdGVuZXJGb3JCaW5kaW5nKGJpbmRpbmcpLmJpbmRpbmdDb25uZWN0ZWQoYmluZGluZyk7XG4gICAgfVxuICAgIGJpbmRpbmdEaXNjb25uZWN0ZWQoYmluZGluZywgY2xlYXJFdmVudExpc3RlbmVycyA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hFdmVudExpc3RlbmVyRm9yQmluZGluZyhiaW5kaW5nKS5iaW5kaW5nRGlzY29ubmVjdGVkKGJpbmRpbmcpO1xuICAgICAgICBpZiAoY2xlYXJFdmVudExpc3RlbmVycylcbiAgICAgICAgICAgIHRoaXMuY2xlYXJFdmVudExpc3RlbmVyc0ZvckJpbmRpbmcoYmluZGluZyk7XG4gICAgfVxuICAgIGhhbmRsZUVycm9yKGVycm9yLCBtZXNzYWdlLCBkZXRhaWwgPSB7fSkge1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLmhhbmRsZUVycm9yKGVycm9yLCBgRXJyb3IgJHttZXNzYWdlfWAsIGRldGFpbCk7XG4gICAgfVxuICAgIGNsZWFyRXZlbnRMaXN0ZW5lcnNGb3JCaW5kaW5nKGJpbmRpbmcpIHtcbiAgICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZmV0Y2hFdmVudExpc3RlbmVyRm9yQmluZGluZyhiaW5kaW5nKTtcbiAgICAgICAgaWYgKCFldmVudExpc3RlbmVyLmhhc0JpbmRpbmdzKCkpIHtcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVNYXBwZWRFdmVudExpc3RlbmVyRm9yKGJpbmRpbmcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZU1hcHBlZEV2ZW50TGlzdGVuZXJGb3IoYmluZGluZykge1xuICAgICAgICBjb25zdCB7IGV2ZW50VGFyZ2V0LCBldmVudE5hbWUsIGV2ZW50T3B0aW9ucyB9ID0gYmluZGluZztcbiAgICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lck1hcCA9IHRoaXMuZmV0Y2hFdmVudExpc3RlbmVyTWFwRm9yRXZlbnRUYXJnZXQoZXZlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBjYWNoZUtleSA9IHRoaXMuY2FjaGVLZXkoZXZlbnROYW1lLCBldmVudE9wdGlvbnMpO1xuICAgICAgICBldmVudExpc3RlbmVyTWFwLmRlbGV0ZShjYWNoZUtleSk7XG4gICAgICAgIGlmIChldmVudExpc3RlbmVyTWFwLnNpemUgPT0gMClcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lck1hcHMuZGVsZXRlKGV2ZW50VGFyZ2V0KTtcbiAgICB9XG4gICAgZmV0Y2hFdmVudExpc3RlbmVyRm9yQmluZGluZyhiaW5kaW5nKSB7XG4gICAgICAgIGNvbnN0IHsgZXZlbnRUYXJnZXQsIGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zIH0gPSBiaW5kaW5nO1xuICAgICAgICByZXR1cm4gdGhpcy5mZXRjaEV2ZW50TGlzdGVuZXIoZXZlbnRUYXJnZXQsIGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zKTtcbiAgICB9XG4gICAgZmV0Y2hFdmVudExpc3RlbmVyKGV2ZW50VGFyZ2V0LCBldmVudE5hbWUsIGV2ZW50T3B0aW9ucykge1xuICAgICAgICBjb25zdCBldmVudExpc3RlbmVyTWFwID0gdGhpcy5mZXRjaEV2ZW50TGlzdGVuZXJNYXBGb3JFdmVudFRhcmdldChldmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gdGhpcy5jYWNoZUtleShldmVudE5hbWUsIGV2ZW50T3B0aW9ucyk7XG4gICAgICAgIGxldCBldmVudExpc3RlbmVyID0gZXZlbnRMaXN0ZW5lck1hcC5nZXQoY2FjaGVLZXkpO1xuICAgICAgICBpZiAoIWV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUYXJnZXQsIGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zKTtcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXJNYXAuc2V0KGNhY2hlS2V5LCBldmVudExpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbiAgICB9XG4gICAgY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFRhcmdldCwgZXZlbnROYW1lLCBldmVudE9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IG5ldyBFdmVudExpc3RlbmVyKGV2ZW50VGFyZ2V0LCBldmVudE5hbWUsIGV2ZW50T3B0aW9ucyk7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXIuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmVudExpc3RlbmVyO1xuICAgIH1cbiAgICBmZXRjaEV2ZW50TGlzdGVuZXJNYXBGb3JFdmVudFRhcmdldChldmVudFRhcmdldCkge1xuICAgICAgICBsZXQgZXZlbnRMaXN0ZW5lck1hcCA9IHRoaXMuZXZlbnRMaXN0ZW5lck1hcHMuZ2V0KGV2ZW50VGFyZ2V0KTtcbiAgICAgICAgaWYgKCFldmVudExpc3RlbmVyTWFwKSB7XG4gICAgICAgICAgICBldmVudExpc3RlbmVyTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyTWFwcy5zZXQoZXZlbnRUYXJnZXQsIGV2ZW50TGlzdGVuZXJNYXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmVudExpc3RlbmVyTWFwO1xuICAgIH1cbiAgICBjYWNoZUtleShldmVudE5hbWUsIGV2ZW50T3B0aW9ucykge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IFtldmVudE5hbWVdO1xuICAgICAgICBPYmplY3Qua2V5cyhldmVudE9wdGlvbnMpXG4gICAgICAgICAgICAuc29ydCgpXG4gICAgICAgICAgICAuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBwYXJ0cy5wdXNoKGAke2V2ZW50T3B0aW9uc1trZXldID8gXCJcIiA6IFwiIVwifSR7a2V5fWApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcnRzLmpvaW4oXCI6XCIpO1xuICAgIH1cbn1cblxuY29uc3QgZGVmYXVsdEFjdGlvbkRlc2NyaXB0b3JGaWx0ZXJzID0ge1xuICAgIHN0b3AoeyBldmVudCwgdmFsdWUgfSkge1xuICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBwcmV2ZW50KHsgZXZlbnQsIHZhbHVlIH0pIHtcbiAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBzZWxmKHsgZXZlbnQsIHZhbHVlLCBlbGVtZW50IH0pIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudCA9PT0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxufTtcbmNvbnN0IGRlc2NyaXB0b3JQYXR0ZXJuID0gL14oPzooPzooW14uXSs/KVxcKyk/KC4rPykoPzpcXC4oLis/KSk/KD86QCh3aW5kb3d8ZG9jdW1lbnQpKT8tPik/KC4rPykoPzojKFteOl0rPykpKD86OiguKykpPyQvO1xuZnVuY3Rpb24gcGFyc2VBY3Rpb25EZXNjcmlwdG9yU3RyaW5nKGRlc2NyaXB0b3JTdHJpbmcpIHtcbiAgICBjb25zdCBzb3VyY2UgPSBkZXNjcmlwdG9yU3RyaW5nLnRyaW0oKTtcbiAgICBjb25zdCBtYXRjaGVzID0gc291cmNlLm1hdGNoKGRlc2NyaXB0b3JQYXR0ZXJuKSB8fCBbXTtcbiAgICBsZXQgZXZlbnROYW1lID0gbWF0Y2hlc1syXTtcbiAgICBsZXQga2V5RmlsdGVyID0gbWF0Y2hlc1szXTtcbiAgICBpZiAoa2V5RmlsdGVyICYmICFbXCJrZXlkb3duXCIsIFwia2V5dXBcIiwgXCJrZXlwcmVzc1wiXS5pbmNsdWRlcyhldmVudE5hbWUpKSB7XG4gICAgICAgIGV2ZW50TmFtZSArPSBgLiR7a2V5RmlsdGVyfWA7XG4gICAgICAgIGtleUZpbHRlciA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGV2ZW50VGFyZ2V0OiBwYXJzZUV2ZW50VGFyZ2V0KG1hdGNoZXNbNF0pLFxuICAgICAgICBldmVudE5hbWUsXG4gICAgICAgIGV2ZW50T3B0aW9uczogbWF0Y2hlc1s3XSA/IHBhcnNlRXZlbnRPcHRpb25zKG1hdGNoZXNbN10pIDoge30sXG4gICAgICAgIGlkZW50aWZpZXI6IG1hdGNoZXNbNV0sXG4gICAgICAgIG1ldGhvZE5hbWU6IG1hdGNoZXNbNl0sXG4gICAgICAgIGtleUZpbHRlcjogbWF0Y2hlc1sxXSB8fCBrZXlGaWx0ZXIsXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlRXZlbnRUYXJnZXQoZXZlbnRUYXJnZXROYW1lKSB7XG4gICAgaWYgKGV2ZW50VGFyZ2V0TmFtZSA9PSBcIndpbmRvd1wiKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50VGFyZ2V0TmFtZSA9PSBcImRvY3VtZW50XCIpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBhcnNlRXZlbnRPcHRpb25zKGV2ZW50T3B0aW9ucykge1xuICAgIHJldHVybiBldmVudE9wdGlvbnNcbiAgICAgICAgLnNwbGl0KFwiOlwiKVxuICAgICAgICAucmVkdWNlKChvcHRpb25zLCB0b2tlbikgPT4gT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7IFt0b2tlbi5yZXBsYWNlKC9eIS8sIFwiXCIpXTogIS9eIS8udGVzdCh0b2tlbikgfSksIHt9KTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeUV2ZW50VGFyZ2V0KGV2ZW50VGFyZ2V0KSB7XG4gICAgaWYgKGV2ZW50VGFyZ2V0ID09IHdpbmRvdykge1xuICAgICAgICByZXR1cm4gXCJ3aW5kb3dcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnRUYXJnZXQgPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIFwiZG9jdW1lbnRcIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNhbWVsaXplKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyg/OltfLV0pKFthLXowLTldKS9nLCAoXywgY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcbn1cbmZ1bmN0aW9uIG5hbWVzcGFjZUNhbWVsaXplKHZhbHVlKSB7XG4gICAgcmV0dXJuIGNhbWVsaXplKHZhbHVlLnJlcGxhY2UoLy0tL2csIFwiLVwiKS5yZXBsYWNlKC9fXy9nLCBcIl9cIikpO1xufVxuZnVuY3Rpb24gY2FwaXRhbGl6ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xufVxuZnVuY3Rpb24gZGFzaGVyaXplKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyhbQS1aXSkvZywgKF8sIGNoYXIpID0+IGAtJHtjaGFyLnRvTG93ZXJDYXNlKCl9YCk7XG59XG5mdW5jdGlvbiB0b2tlbml6ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5tYXRjaCgvW15cXHNdKy9nKSB8fCBbXTtcbn1cblxuZnVuY3Rpb24gaXNTb21ldGhpbmcob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGhhc1Byb3BlcnR5KG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpO1xufVxuXG5jb25zdCBhbGxNb2RpZmllcnMgPSBbXCJtZXRhXCIsIFwiY3RybFwiLCBcImFsdFwiLCBcInNoaWZ0XCJdO1xuY2xhc3MgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBpbmRleCwgZGVzY3JpcHRvciwgc2NoZW1hKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5ldmVudFRhcmdldCA9IGRlc2NyaXB0b3IuZXZlbnRUYXJnZXQgfHwgZWxlbWVudDtcbiAgICAgICAgdGhpcy5ldmVudE5hbWUgPSBkZXNjcmlwdG9yLmV2ZW50TmFtZSB8fCBnZXREZWZhdWx0RXZlbnROYW1lRm9yRWxlbWVudChlbGVtZW50KSB8fCBlcnJvcihcIm1pc3NpbmcgZXZlbnQgbmFtZVwiKTtcbiAgICAgICAgdGhpcy5ldmVudE9wdGlvbnMgPSBkZXNjcmlwdG9yLmV2ZW50T3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdGhpcy5pZGVudGlmaWVyID0gZGVzY3JpcHRvci5pZGVudGlmaWVyIHx8IGVycm9yKFwibWlzc2luZyBpZGVudGlmaWVyXCIpO1xuICAgICAgICB0aGlzLm1ldGhvZE5hbWUgPSBkZXNjcmlwdG9yLm1ldGhvZE5hbWUgfHwgZXJyb3IoXCJtaXNzaW5nIG1ldGhvZCBuYW1lXCIpO1xuICAgICAgICB0aGlzLmtleUZpbHRlciA9IGRlc2NyaXB0b3Iua2V5RmlsdGVyIHx8IFwiXCI7XG4gICAgICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICAgIH1cbiAgICBzdGF0aWMgZm9yVG9rZW4odG9rZW4sIHNjaGVtYSkge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXModG9rZW4uZWxlbWVudCwgdG9rZW4uaW5kZXgsIHBhcnNlQWN0aW9uRGVzY3JpcHRvclN0cmluZyh0b2tlbi5jb250ZW50KSwgc2NoZW1hKTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50RmlsdGVyID0gdGhpcy5rZXlGaWx0ZXIgPyBgLiR7dGhpcy5rZXlGaWx0ZXJ9YCA6IFwiXCI7XG4gICAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gdGhpcy5ldmVudFRhcmdldE5hbWUgPyBgQCR7dGhpcy5ldmVudFRhcmdldE5hbWV9YCA6IFwiXCI7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmV2ZW50TmFtZX0ke2V2ZW50RmlsdGVyfSR7ZXZlbnRUYXJnZXR9LT4ke3RoaXMuaWRlbnRpZmllcn0jJHt0aGlzLm1ldGhvZE5hbWV9YDtcbiAgICB9XG4gICAgc2hvdWxkSWdub3JlS2V5Ym9hcmRFdmVudChldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMua2V5RmlsdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlsdGVycyA9IHRoaXMua2V5RmlsdGVyLnNwbGl0KFwiK1wiKTtcbiAgICAgICAgaWYgKHRoaXMua2V5RmlsdGVyRGlzc2F0aXNmaWVkKGV2ZW50LCBmaWx0ZXJzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhbmRhcmRGaWx0ZXIgPSBmaWx0ZXJzLmZpbHRlcigoa2V5KSA9PiAhYWxsTW9kaWZpZXJzLmluY2x1ZGVzKGtleSkpWzBdO1xuICAgICAgICBpZiAoIXN0YW5kYXJkRmlsdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoYXNQcm9wZXJ0eSh0aGlzLmtleU1hcHBpbmdzLCBzdGFuZGFyZEZpbHRlcikpIHtcbiAgICAgICAgICAgIGVycm9yKGBjb250YWlucyB1bmtub3duIGtleSBmaWx0ZXI6ICR7dGhpcy5rZXlGaWx0ZXJ9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMua2V5TWFwcGluZ3Nbc3RhbmRhcmRGaWx0ZXJdLnRvTG93ZXJDYXNlKCkgIT09IGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBzaG91bGRJZ25vcmVNb3VzZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5rZXlGaWx0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWx0ZXJzID0gW3RoaXMua2V5RmlsdGVyXTtcbiAgICAgICAgaWYgKHRoaXMua2V5RmlsdGVyRGlzc2F0aXNmaWVkKGV2ZW50LCBmaWx0ZXJzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBnZXQgcGFyYW1zKCkge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoYF5kYXRhLSR7dGhpcy5pZGVudGlmaWVyfS0oLispLXBhcmFtJGAsIFwiaVwiKTtcbiAgICAgICAgZm9yIChjb25zdCB7IG5hbWUsIHZhbHVlIH0gb2YgQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQuYXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gbmFtZS5tYXRjaChwYXR0ZXJuKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tjYW1lbGl6ZShrZXkpXSA9IHR5cGVjYXN0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cbiAgICBnZXQgZXZlbnRUYXJnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gc3RyaW5naWZ5RXZlbnRUYXJnZXQodGhpcy5ldmVudFRhcmdldCk7XG4gICAgfVxuICAgIGdldCBrZXlNYXBwaW5ncygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmtleU1hcHBpbmdzO1xuICAgIH1cbiAgICBrZXlGaWx0ZXJEaXNzYXRpc2ZpZWQoZXZlbnQsIGZpbHRlcnMpIHtcbiAgICAgICAgY29uc3QgW21ldGEsIGN0cmwsIGFsdCwgc2hpZnRdID0gYWxsTW9kaWZpZXJzLm1hcCgobW9kaWZpZXIpID0+IGZpbHRlcnMuaW5jbHVkZXMobW9kaWZpZXIpKTtcbiAgICAgICAgcmV0dXJuIGV2ZW50Lm1ldGFLZXkgIT09IG1ldGEgfHwgZXZlbnQuY3RybEtleSAhPT0gY3RybCB8fCBldmVudC5hbHRLZXkgIT09IGFsdCB8fCBldmVudC5zaGlmdEtleSAhPT0gc2hpZnQ7XG4gICAgfVxufVxuY29uc3QgZGVmYXVsdEV2ZW50TmFtZXMgPSB7XG4gICAgYTogKCkgPT4gXCJjbGlja1wiLFxuICAgIGJ1dHRvbjogKCkgPT4gXCJjbGlja1wiLFxuICAgIGZvcm06ICgpID0+IFwic3VibWl0XCIsXG4gICAgZGV0YWlsczogKCkgPT4gXCJ0b2dnbGVcIixcbiAgICBpbnB1dDogKGUpID0+IChlLmdldEF0dHJpYnV0ZShcInR5cGVcIikgPT0gXCJzdWJtaXRcIiA/IFwiY2xpY2tcIiA6IFwiaW5wdXRcIiksXG4gICAgc2VsZWN0OiAoKSA9PiBcImNoYW5nZVwiLFxuICAgIHRleHRhcmVhOiAoKSA9PiBcImlucHV0XCIsXG59O1xuZnVuY3Rpb24gZ2V0RGVmYXVsdEV2ZW50TmFtZUZvckVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodGFnTmFtZSBpbiBkZWZhdWx0RXZlbnROYW1lcykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdEV2ZW50TmFtZXNbdGFnTmFtZV0oZWxlbWVudCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbn1cbmZ1bmN0aW9uIHR5cGVjYXN0KHZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAob19PKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG5cbmNsYXNzIEJpbmRpbmcge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGFjdGlvbikge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICB9XG4gICAgZ2V0IGluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb24uaW5kZXg7XG4gICAgfVxuICAgIGdldCBldmVudFRhcmdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9uLmV2ZW50VGFyZ2V0O1xuICAgIH1cbiAgICBnZXQgZXZlbnRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb24uZXZlbnRPcHRpb25zO1xuICAgIH1cbiAgICBnZXQgaWRlbnRpZmllcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5pZGVudGlmaWVyO1xuICAgIH1cbiAgICBoYW5kbGVFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCBhY3Rpb25FdmVudCA9IHRoaXMucHJlcGFyZUFjdGlvbkV2ZW50KGV2ZW50KTtcbiAgICAgICAgaWYgKHRoaXMud2lsbEJlSW52b2tlZEJ5RXZlbnQoZXZlbnQpICYmIHRoaXMuYXBwbHlFdmVudE1vZGlmaWVycyhhY3Rpb25FdmVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW52b2tlV2l0aEV2ZW50KGFjdGlvbkV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgZXZlbnROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb24uZXZlbnROYW1lO1xuICAgIH1cbiAgICBnZXQgbWV0aG9kKCkge1xuICAgICAgICBjb25zdCBtZXRob2QgPSB0aGlzLmNvbnRyb2xsZXJbdGhpcy5tZXRob2ROYW1lXTtcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRob2QgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQWN0aW9uIFwiJHt0aGlzLmFjdGlvbn1cIiByZWZlcmVuY2VzIHVuZGVmaW5lZCBtZXRob2QgXCIke3RoaXMubWV0aG9kTmFtZX1cImApO1xuICAgIH1cbiAgICBhcHBseUV2ZW50TW9kaWZpZXJzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcy5hY3Rpb247XG4gICAgICAgIGNvbnN0IHsgYWN0aW9uRGVzY3JpcHRvckZpbHRlcnMgfSA9IHRoaXMuY29udGV4dC5hcHBsaWNhdGlvbjtcbiAgICAgICAgY29uc3QgeyBjb250cm9sbGVyIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGxldCBwYXNzZXMgPSB0cnVlO1xuICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5ldmVudE9wdGlvbnMpKSB7XG4gICAgICAgICAgICBpZiAobmFtZSBpbiBhY3Rpb25EZXNjcmlwdG9yRmlsdGVycykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IGFjdGlvbkRlc2NyaXB0b3JGaWx0ZXJzW25hbWVdO1xuICAgICAgICAgICAgICAgIHBhc3NlcyA9IHBhc3NlcyAmJiBmaWx0ZXIoeyBuYW1lLCB2YWx1ZSwgZXZlbnQsIGVsZW1lbnQsIGNvbnRyb2xsZXIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFzc2VzO1xuICAgIH1cbiAgICBwcmVwYXJlQWN0aW9uRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZXZlbnQsIHsgcGFyYW1zOiB0aGlzLmFjdGlvbi5wYXJhbXMgfSk7XG4gICAgfVxuICAgIGludm9rZVdpdGhFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCB7IHRhcmdldCwgY3VycmVudFRhcmdldCB9ID0gZXZlbnQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLm1ldGhvZC5jYWxsKHRoaXMuY29udHJvbGxlciwgZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmxvZ0RlYnVnQWN0aXZpdHkodGhpcy5tZXRob2ROYW1lLCB7IGV2ZW50LCB0YXJnZXQsIGN1cnJlbnRUYXJnZXQsIGFjdGlvbjogdGhpcy5tZXRob2ROYW1lIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgeyBpZGVudGlmaWVyLCBjb250cm9sbGVyLCBlbGVtZW50LCBpbmRleCB9ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbCA9IHsgaWRlbnRpZmllciwgY29udHJvbGxlciwgZWxlbWVudCwgaW5kZXgsIGV2ZW50IH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuaGFuZGxlRXJyb3IoZXJyb3IsIGBpbnZva2luZyBhY3Rpb24gXCIke3RoaXMuYWN0aW9ufVwiYCwgZGV0YWlsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3aWxsQmVJbnZva2VkQnlFdmVudChldmVudCkge1xuICAgICAgICBjb25zdCBldmVudFRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCAmJiB0aGlzLmFjdGlvbi5zaG91bGRJZ25vcmVLZXlib2FyZEV2ZW50KGV2ZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgJiYgdGhpcy5hY3Rpb24uc2hvdWxkSWdub3JlTW91c2VFdmVudChldmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50ID09PSBldmVudFRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnRUYXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50ICYmIHRoaXMuZWxlbWVudC5jb250YWlucyhldmVudFRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmNvbnRhaW5zRWxlbWVudChldmVudFRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5jb250YWluc0VsZW1lbnQodGhpcy5hY3Rpb24uZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGNvbnRyb2xsZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuY29udHJvbGxlcjtcbiAgICB9XG4gICAgZ2V0IG1ldGhvZE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbi5tZXRob2ROYW1lO1xuICAgIH1cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IHNjb3BlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnNjb3BlO1xuICAgIH1cbn1cblxuY2xhc3MgRWxlbWVudE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkZWxlZ2F0ZSkge1xuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXJJbml0ID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4gdGhpcy5wcm9jZXNzTXV0YXRpb25zKG11dGF0aW9ucykpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHRoaXMubXV0YXRpb25PYnNlcnZlckluaXQpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGF1c2UoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHRoaXMubXV0YXRpb25PYnNlcnZlckluaXQpO1xuICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWZyZXNoKCkge1xuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbmV3IFNldCh0aGlzLm1hdGNoRWxlbWVudHNJblRyZWUoKSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnRzKSkge1xuICAgICAgICAgICAgICAgIGlmICghbWF0Y2hlcy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBBcnJheS5mcm9tKG1hdGNoZXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTXV0YXRpb24obXV0YXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByb2Nlc3NNdXRhdGlvbihtdXRhdGlvbikge1xuICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PSBcImF0dHJpYnV0ZXNcIikge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQXR0cmlidXRlQ2hhbmdlKG11dGF0aW9uLnRhcmdldCwgbXV0YXRpb24uYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobXV0YXRpb24udHlwZSA9PSBcImNoaWxkTGlzdFwiKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZW1vdmVkTm9kZXMobXV0YXRpb24ucmVtb3ZlZE5vZGVzKTtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0FkZGVkTm9kZXMobXV0YXRpb24uYWRkZWROb2Rlcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvY2Vzc0F0dHJpYnV0ZUNoYW5nZShlbGVtZW50LCBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuZWxlbWVudEF0dHJpYnV0ZUNoYW5nZWQgJiYgdGhpcy5tYXRjaEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlLmVsZW1lbnRBdHRyaWJ1dGVDaGFuZ2VkKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMubWF0Y2hFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvY2Vzc1JlbW92ZWROb2Rlcyhub2Rlcykge1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgQXJyYXkuZnJvbShub2RlcykpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRGcm9tTm9kZShub2RlKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzVHJlZShlbGVtZW50LCB0aGlzLnJlbW92ZUVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByb2Nlc3NBZGRlZE5vZGVzKG5vZGVzKSB7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKG5vZGVzKSkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudEZyb21Ob2RlKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgdGhpcy5lbGVtZW50SXNBY3RpdmUoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NUcmVlKGVsZW1lbnQsIHRoaXMuYWRkRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWF0Y2hFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUubWF0Y2hFbGVtZW50KGVsZW1lbnQpO1xuICAgIH1cbiAgICBtYXRjaEVsZW1lbnRzSW5UcmVlKHRyZWUgPSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUubWF0Y2hFbGVtZW50c0luVHJlZSh0cmVlKTtcbiAgICB9XG4gICAgcHJvY2Vzc1RyZWUodHJlZSwgcHJvY2Vzc29yKSB7XG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0aGlzLm1hdGNoRWxlbWVudHNJblRyZWUodHJlZSkpIHtcbiAgICAgICAgICAgIHByb2Nlc3Nvci5jYWxsKHRoaXMsIGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnRGcm9tTm9kZShub2RlKSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbGVtZW50SXNBY3RpdmUoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5pc0Nvbm5lY3RlZCAhPSB0aGlzLmVsZW1lbnQuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY29udGFpbnMoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnRJc0FjdGl2ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuYWRkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlbGVnYXRlLmVsZW1lbnRNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuZWxlbWVudE1hdGNoZWQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuZWxlbWVudFVubWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuZWxlbWVudFVubWF0Y2hlZChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQXR0cmlidXRlT2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUsIGRlbGVnYXRlKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZU5hbWU7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgdGhpcy5lbGVtZW50T2JzZXJ2ZXIgPSBuZXcgRWxlbWVudE9ic2VydmVyKGVsZW1lbnQsIHRoaXMpO1xuICAgIH1cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudE9ic2VydmVyLmVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBzZWxlY3RvcigpIHtcbiAgICAgICAgcmV0dXJuIGBbJHt0aGlzLmF0dHJpYnV0ZU5hbWV9XWA7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRPYnNlcnZlci5zdGFydCgpO1xuICAgIH1cbiAgICBwYXVzZShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmVsZW1lbnRPYnNlcnZlci5wYXVzZShjYWxsYmFjayk7XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudE9ic2VydmVyLnN0b3AoKTtcbiAgICB9XG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50T2JzZXJ2ZXIucmVmcmVzaCgpO1xuICAgIH1cbiAgICBnZXQgc3RhcnRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudE9ic2VydmVyLnN0YXJ0ZWQ7XG4gICAgfVxuICAgIG1hdGNoRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSh0aGlzLmF0dHJpYnV0ZU5hbWUpO1xuICAgIH1cbiAgICBtYXRjaEVsZW1lbnRzSW5UcmVlKHRyZWUpIHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLm1hdGNoRWxlbWVudCh0cmVlKSA/IFt0cmVlXSA6IFtdO1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gQXJyYXkuZnJvbSh0cmVlLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3RvcikpO1xuICAgICAgICByZXR1cm4gbWF0Y2guY29uY2F0KG1hdGNoZXMpO1xuICAgIH1cbiAgICBlbGVtZW50TWF0Y2hlZChlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlbGVnYXRlLmVsZW1lbnRNYXRjaGVkQXR0cmlidXRlKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlLmVsZW1lbnRNYXRjaGVkQXR0cmlidXRlKGVsZW1lbnQsIHRoaXMuYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxlbWVudFVubWF0Y2hlZChlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlbGVnYXRlLmVsZW1lbnRVbm1hdGNoZWRBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuZWxlbWVudFVubWF0Y2hlZEF0dHJpYnV0ZShlbGVtZW50LCB0aGlzLmF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnRBdHRyaWJ1dGVDaGFuZ2VkKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuZWxlbWVudEF0dHJpYnV0ZVZhbHVlQ2hhbmdlZCAmJiB0aGlzLmF0dHJpYnV0ZU5hbWUgPT0gYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5lbGVtZW50QXR0cmlidXRlVmFsdWVDaGFuZ2VkKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGQobWFwLCBrZXksIHZhbHVlKSB7XG4gICAgZmV0Y2gobWFwLCBrZXkpLmFkZCh2YWx1ZSk7XG59XG5mdW5jdGlvbiBkZWwobWFwLCBrZXksIHZhbHVlKSB7XG4gICAgZmV0Y2gobWFwLCBrZXkpLmRlbGV0ZSh2YWx1ZSk7XG4gICAgcHJ1bmUobWFwLCBrZXkpO1xufVxuZnVuY3Rpb24gZmV0Y2gobWFwLCBrZXkpIHtcbiAgICBsZXQgdmFsdWVzID0gbWFwLmdldChrZXkpO1xuICAgIGlmICghdmFsdWVzKSB7XG4gICAgICAgIHZhbHVlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgbWFwLnNldChrZXksIHZhbHVlcyk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG59XG5mdW5jdGlvbiBwcnVuZShtYXAsIGtleSkge1xuICAgIGNvbnN0IHZhbHVlcyA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAodmFsdWVzICE9IG51bGwgJiYgdmFsdWVzLnNpemUgPT0gMCkge1xuICAgICAgICBtYXAuZGVsZXRlKGtleSk7XG4gICAgfVxufVxuXG5jbGFzcyBNdWx0aW1hcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWVzQnlLZXkgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIGdldCBrZXlzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnZhbHVlc0J5S2V5LmtleXMoKSk7XG4gICAgfVxuICAgIGdldCB2YWx1ZXMoKSB7XG4gICAgICAgIGNvbnN0IHNldHMgPSBBcnJheS5mcm9tKHRoaXMudmFsdWVzQnlLZXkudmFsdWVzKCkpO1xuICAgICAgICByZXR1cm4gc2V0cy5yZWR1Y2UoKHZhbHVlcywgc2V0KSA9PiB2YWx1ZXMuY29uY2F0KEFycmF5LmZyb20oc2V0KSksIFtdKTtcbiAgICB9XG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIGNvbnN0IHNldHMgPSBBcnJheS5mcm9tKHRoaXMudmFsdWVzQnlLZXkudmFsdWVzKCkpO1xuICAgICAgICByZXR1cm4gc2V0cy5yZWR1Y2UoKHNpemUsIHNldCkgPT4gc2l6ZSArIHNldC5zaXplLCAwKTtcbiAgICB9XG4gICAgYWRkKGtleSwgdmFsdWUpIHtcbiAgICAgICAgYWRkKHRoaXMudmFsdWVzQnlLZXksIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgICBkZWxldGUoa2V5LCB2YWx1ZSkge1xuICAgICAgICBkZWwodGhpcy52YWx1ZXNCeUtleSwga2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIGhhcyhrZXksIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzQnlLZXkuZ2V0KGtleSk7XG4gICAgICAgIHJldHVybiB2YWx1ZXMgIT0gbnVsbCAmJiB2YWx1ZXMuaGFzKHZhbHVlKTtcbiAgICB9XG4gICAgaGFzS2V5KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNCeUtleS5oYXMoa2V5KTtcbiAgICB9XG4gICAgaGFzVmFsdWUodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgc2V0cyA9IEFycmF5LmZyb20odGhpcy52YWx1ZXNCeUtleS52YWx1ZXMoKSk7XG4gICAgICAgIHJldHVybiBzZXRzLnNvbWUoKHNldCkgPT4gc2V0Lmhhcyh2YWx1ZSkpO1xuICAgIH1cbiAgICBnZXRWYWx1ZXNGb3JLZXkoa2V5KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzQnlLZXkuZ2V0KGtleSk7XG4gICAgICAgIHJldHVybiB2YWx1ZXMgPyBBcnJheS5mcm9tKHZhbHVlcykgOiBbXTtcbiAgICB9XG4gICAgZ2V0S2V5c0ZvclZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMudmFsdWVzQnlLZXkpXG4gICAgICAgICAgICAuZmlsdGVyKChbX2tleSwgdmFsdWVzXSkgPT4gdmFsdWVzLmhhcyh2YWx1ZSkpXG4gICAgICAgICAgICAubWFwKChba2V5LCBfdmFsdWVzXSkgPT4ga2V5KTtcbiAgICB9XG59XG5cbmNsYXNzIEluZGV4ZWRNdWx0aW1hcCBleHRlbmRzIE11bHRpbWFwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5rZXlzQnlWYWx1ZSA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlcygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5rZXlzQnlWYWx1ZS5rZXlzKCkpO1xuICAgIH1cbiAgICBhZGQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBzdXBlci5hZGQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIGFkZCh0aGlzLmtleXNCeVZhbHVlLCB2YWx1ZSwga2V5KTtcbiAgICB9XG4gICAgZGVsZXRlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgc3VwZXIuZGVsZXRlKGtleSwgdmFsdWUpO1xuICAgICAgICBkZWwodGhpcy5rZXlzQnlWYWx1ZSwgdmFsdWUsIGtleSk7XG4gICAgfVxuICAgIGhhc1ZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmtleXNCeVZhbHVlLmhhcyh2YWx1ZSk7XG4gICAgfVxuICAgIGdldEtleXNGb3JWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBjb25zdCBzZXQgPSB0aGlzLmtleXNCeVZhbHVlLmdldCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBzZXQgPyBBcnJheS5mcm9tKHNldCkgOiBbXTtcbiAgICB9XG59XG5cbmNsYXNzIFNlbGVjdG9yT2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHNlbGVjdG9yLCBkZWxlZ2F0ZSwgZGV0YWlscykge1xuICAgICAgICB0aGlzLl9zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICAgICAgICB0aGlzLmVsZW1lbnRPYnNlcnZlciA9IG5ldyBFbGVtZW50T2JzZXJ2ZXIoZWxlbWVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgdGhpcy5tYXRjaGVzQnlFbGVtZW50ID0gbmV3IE11bHRpbWFwKCk7XG4gICAgfVxuICAgIGdldCBzdGFydGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50T2JzZXJ2ZXIuc3RhcnRlZDtcbiAgICB9XG4gICAgZ2V0IHNlbGVjdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0b3I7XG4gICAgfVxuICAgIHNldCBzZWxlY3RvcihzZWxlY3Rvcikge1xuICAgICAgICB0aGlzLl9zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudE9ic2VydmVyLnN0YXJ0KCk7XG4gICAgfVxuICAgIHBhdXNlKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudE9ic2VydmVyLnBhdXNlKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50T2JzZXJ2ZXIuc3RvcCgpO1xuICAgIH1cbiAgICByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRPYnNlcnZlci5yZWZyZXNoKCk7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50T2JzZXJ2ZXIuZWxlbWVudDtcbiAgICB9XG4gICAgbWF0Y2hFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgeyBzZWxlY3RvciB9ID0gdGhpcztcbiAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRlbGVnYXRlLnNlbGVjdG9yTWF0Y2hFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXMgJiYgdGhpcy5kZWxlZ2F0ZS5zZWxlY3Rvck1hdGNoRWxlbWVudChlbGVtZW50LCB0aGlzLmRldGFpbHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWF0Y2hFbGVtZW50c0luVHJlZSh0cmVlKSB7XG4gICAgICAgIGNvbnN0IHsgc2VsZWN0b3IgfSA9IHRoaXM7XG4gICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLm1hdGNoRWxlbWVudCh0cmVlKSA/IFt0cmVlXSA6IFtdO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IEFycmF5LmZyb20odHJlZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuZmlsdGVyKChtYXRjaCkgPT4gdGhpcy5tYXRjaEVsZW1lbnQobWF0Y2gpKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaC5jb25jYXQobWF0Y2hlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxlbWVudE1hdGNoZWQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCB7IHNlbGVjdG9yIH0gPSB0aGlzO1xuICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0b3JNYXRjaGVkKGVsZW1lbnQsIHNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbGVtZW50VW5tYXRjaGVkKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0gdGhpcy5tYXRjaGVzQnlFbGVtZW50LmdldEtleXNGb3JWYWx1ZShlbGVtZW50KTtcbiAgICAgICAgZm9yIChjb25zdCBzZWxlY3RvciBvZiBzZWxlY3RvcnMpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0b3JVbm1hdGNoZWQoZWxlbWVudCwgc2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnRBdHRyaWJ1dGVDaGFuZ2VkKGVsZW1lbnQsIF9hdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHsgc2VsZWN0b3IgfSA9IHRoaXM7XG4gICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMubWF0Y2hFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlZEJlZm9yZSA9IHRoaXMubWF0Y2hlc0J5RWxlbWVudC5oYXMoc2VsZWN0b3IsIGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiYgIW1hdGNoZWRCZWZvcmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdG9yTWF0Y2hlZChlbGVtZW50LCBzZWxlY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghbWF0Y2hlcyAmJiBtYXRjaGVkQmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RvclVubWF0Y2hlZChlbGVtZW50LCBzZWxlY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VsZWN0b3JNYXRjaGVkKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuc2VsZWN0b3JNYXRjaGVkKGVsZW1lbnQsIHNlbGVjdG9yLCB0aGlzLmRldGFpbHMpO1xuICAgICAgICB0aGlzLm1hdGNoZXNCeUVsZW1lbnQuYWRkKHNlbGVjdG9yLCBlbGVtZW50KTtcbiAgICB9XG4gICAgc2VsZWN0b3JVbm1hdGNoZWQoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5zZWxlY3RvclVubWF0Y2hlZChlbGVtZW50LCBzZWxlY3RvciwgdGhpcy5kZXRhaWxzKTtcbiAgICAgICAgdGhpcy5tYXRjaGVzQnlFbGVtZW50LmRlbGV0ZShzZWxlY3RvciwgZWxlbWVudCk7XG4gICAgfVxufVxuXG5jbGFzcyBTdHJpbmdNYXBPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgZGVsZWdhdGUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdHJpbmdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHRoaXMucHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbnMpKTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLnRha2VSZWNvcmRzKCk7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGVOYW1lIG9mIHRoaXMua25vd25BdHRyaWJ1dGVOYW1lcykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc011dGF0aW9uKG11dGF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9jZXNzTXV0YXRpb24obXV0YXRpb24pIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWU7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgbXV0YXRpb24ub2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlZnJlc2hBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5kZWxlZ2F0ZS5nZXRTdHJpbmdNYXBLZXlGb3JBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIGlmIChrZXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0cmluZ01hcC5oYXMoYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZ01hcEtleUFkZGVkKGtleSwgYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpbmdNYXAuZ2V0KGF0dHJpYnV0ZU5hbWUpICE9IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdHJpbmdNYXBWYWx1ZUNoYW5nZWQodmFsdWUsIGtleSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuc3RyaW5nTWFwLmdldChhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZ01hcC5kZWxldGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0cmluZ01hcEtleVJlbW92ZWQoa2V5LCBhdHRyaWJ1dGVOYW1lLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZ01hcC5zZXQoYXR0cmlidXRlTmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0cmluZ01hcEtleUFkZGVkKGtleSwgYXR0cmlidXRlTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZS5zdHJpbmdNYXBLZXlBZGRlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5zdHJpbmdNYXBLZXlBZGRlZChrZXksIGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0cmluZ01hcFZhbHVlQ2hhbmdlZCh2YWx1ZSwga2V5LCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZS5zdHJpbmdNYXBWYWx1ZUNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuc3RyaW5nTWFwVmFsdWVDaGFuZ2VkKHZhbHVlLCBrZXksIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdHJpbmdNYXBLZXlSZW1vdmVkKGtleSwgYXR0cmlidXRlTmFtZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuc3RyaW5nTWFwS2V5UmVtb3ZlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5zdHJpbmdNYXBLZXlSZW1vdmVkKGtleSwgYXR0cmlidXRlTmFtZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBrbm93bkF0dHJpYnV0ZU5hbWVzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMuY3VycmVudEF0dHJpYnV0ZU5hbWVzLmNvbmNhdCh0aGlzLnJlY29yZGVkQXR0cmlidXRlTmFtZXMpKSk7XG4gICAgfVxuICAgIGdldCBjdXJyZW50QXR0cmlidXRlTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5hdHRyaWJ1dGVzKS5tYXAoKGF0dHJpYnV0ZSkgPT4gYXR0cmlidXRlLm5hbWUpO1xuICAgIH1cbiAgICBnZXQgcmVjb3JkZWRBdHRyaWJ1dGVOYW1lcygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5zdHJpbmdNYXAua2V5cygpKTtcbiAgICB9XG59XG5cbmNsYXNzIFRva2VuTGlzdE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBhdHRyaWJ1dGVOYW1lLCBkZWxlZ2F0ZSkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZU9ic2VydmVyID0gbmV3IEF0dHJpYnV0ZU9ic2VydmVyKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUsIHRoaXMpO1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIHRoaXMudG9rZW5zQnlFbGVtZW50ID0gbmV3IE11bHRpbWFwKCk7XG4gICAgfVxuICAgIGdldCBzdGFydGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVPYnNlcnZlci5zdGFydGVkO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVPYnNlcnZlci5zdGFydCgpO1xuICAgIH1cbiAgICBwYXVzZShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZU9ic2VydmVyLnBhdXNlKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVPYnNlcnZlci5zdG9wKCk7XG4gICAgfVxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXIucmVmcmVzaCgpO1xuICAgIH1cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXIuZWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IGF0dHJpYnV0ZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZU9ic2VydmVyLmF0dHJpYnV0ZU5hbWU7XG4gICAgfVxuICAgIGVsZW1lbnRNYXRjaGVkQXR0cmlidXRlKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy50b2tlbnNNYXRjaGVkKHRoaXMucmVhZFRva2Vuc0ZvckVsZW1lbnQoZWxlbWVudCkpO1xuICAgIH1cbiAgICBlbGVtZW50QXR0cmlidXRlVmFsdWVDaGFuZ2VkKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgW3VubWF0Y2hlZFRva2VucywgbWF0Y2hlZFRva2Vuc10gPSB0aGlzLnJlZnJlc2hUb2tlbnNGb3JFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICB0aGlzLnRva2Vuc1VubWF0Y2hlZCh1bm1hdGNoZWRUb2tlbnMpO1xuICAgICAgICB0aGlzLnRva2Vuc01hdGNoZWQobWF0Y2hlZFRva2Vucyk7XG4gICAgfVxuICAgIGVsZW1lbnRVbm1hdGNoZWRBdHRyaWJ1dGUoZWxlbWVudCkge1xuICAgICAgICB0aGlzLnRva2Vuc1VubWF0Y2hlZCh0aGlzLnRva2Vuc0J5RWxlbWVudC5nZXRWYWx1ZXNGb3JLZXkoZWxlbWVudCkpO1xuICAgIH1cbiAgICB0b2tlbnNNYXRjaGVkKHRva2Vucykge1xuICAgICAgICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHRoaXMudG9rZW5NYXRjaGVkKHRva2VuKSk7XG4gICAgfVxuICAgIHRva2Vuc1VubWF0Y2hlZCh0b2tlbnMpIHtcbiAgICAgICAgdG9rZW5zLmZvckVhY2goKHRva2VuKSA9PiB0aGlzLnRva2VuVW5tYXRjaGVkKHRva2VuKSk7XG4gICAgfVxuICAgIHRva2VuTWF0Y2hlZCh0b2tlbikge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLnRva2VuTWF0Y2hlZCh0b2tlbik7XG4gICAgICAgIHRoaXMudG9rZW5zQnlFbGVtZW50LmFkZCh0b2tlbi5lbGVtZW50LCB0b2tlbik7XG4gICAgfVxuICAgIHRva2VuVW5tYXRjaGVkKHRva2VuKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUudG9rZW5Vbm1hdGNoZWQodG9rZW4pO1xuICAgICAgICB0aGlzLnRva2Vuc0J5RWxlbWVudC5kZWxldGUodG9rZW4uZWxlbWVudCwgdG9rZW4pO1xuICAgIH1cbiAgICByZWZyZXNoVG9rZW5zRm9yRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVG9rZW5zID0gdGhpcy50b2tlbnNCeUVsZW1lbnQuZ2V0VmFsdWVzRm9yS2V5KGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBjdXJyZW50VG9rZW5zID0gdGhpcy5yZWFkVG9rZW5zRm9yRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgZmlyc3REaWZmZXJpbmdJbmRleCA9IHppcChwcmV2aW91c1Rva2VucywgY3VycmVudFRva2VucykuZmluZEluZGV4KChbcHJldmlvdXNUb2tlbiwgY3VycmVudFRva2VuXSkgPT4gIXRva2Vuc0FyZUVxdWFsKHByZXZpb3VzVG9rZW4sIGN1cnJlbnRUb2tlbikpO1xuICAgICAgICBpZiAoZmlyc3REaWZmZXJpbmdJbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIFtbXSwgW11dO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtwcmV2aW91c1Rva2Vucy5zbGljZShmaXJzdERpZmZlcmluZ0luZGV4KSwgY3VycmVudFRva2Vucy5zbGljZShmaXJzdERpZmZlcmluZ0luZGV4KV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVhZFRva2Vuc0ZvckVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lO1xuICAgICAgICBjb25zdCB0b2tlblN0cmluZyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpIHx8IFwiXCI7XG4gICAgICAgIHJldHVybiBwYXJzZVRva2VuU3RyaW5nKHRva2VuU3RyaW5nLCBlbGVtZW50LCBhdHRyaWJ1dGVOYW1lKTtcbiAgICB9XG59XG5mdW5jdGlvbiBwYXJzZVRva2VuU3RyaW5nKHRva2VuU3RyaW5nLCBlbGVtZW50LCBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgcmV0dXJuIHRva2VuU3RyaW5nXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KC9cXHMrLylcbiAgICAgICAgLmZpbHRlcigoY29udGVudCkgPT4gY29udGVudC5sZW5ndGgpXG4gICAgICAgIC5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiAoeyBlbGVtZW50LCBhdHRyaWJ1dGVOYW1lLCBjb250ZW50LCBpbmRleCB9KSk7XG59XG5mdW5jdGlvbiB6aXAobGVmdCwgcmlnaHQpIHtcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLm1heChsZWZ0Lmxlbmd0aCwgcmlnaHQubGVuZ3RoKTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aCB9LCAoXywgaW5kZXgpID0+IFtsZWZ0W2luZGV4XSwgcmlnaHRbaW5kZXhdXSk7XG59XG5mdW5jdGlvbiB0b2tlbnNBcmVFcXVhbChsZWZ0LCByaWdodCkge1xuICAgIHJldHVybiBsZWZ0ICYmIHJpZ2h0ICYmIGxlZnQuaW5kZXggPT0gcmlnaHQuaW5kZXggJiYgbGVmdC5jb250ZW50ID09IHJpZ2h0LmNvbnRlbnQ7XG59XG5cbmNsYXNzIFZhbHVlTGlzdE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBhdHRyaWJ1dGVOYW1lLCBkZWxlZ2F0ZSkge1xuICAgICAgICB0aGlzLnRva2VuTGlzdE9ic2VydmVyID0gbmV3IFRva2VuTGlzdE9ic2VydmVyKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUsIHRoaXMpO1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIHRoaXMucGFyc2VSZXN1bHRzQnlUb2tlbiA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIHRoaXMudmFsdWVzQnlUb2tlbkJ5RWxlbWVudCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgfVxuICAgIGdldCBzdGFydGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbkxpc3RPYnNlcnZlci5zdGFydGVkO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy50b2tlbkxpc3RPYnNlcnZlci5zdGFydCgpO1xuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnRva2VuTGlzdE9ic2VydmVyLnN0b3AoKTtcbiAgICB9XG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy50b2tlbkxpc3RPYnNlcnZlci5yZWZyZXNoKCk7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbkxpc3RPYnNlcnZlci5lbGVtZW50O1xuICAgIH1cbiAgICBnZXQgYXR0cmlidXRlTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5MaXN0T2JzZXJ2ZXIuYXR0cmlidXRlTmFtZTtcbiAgICB9XG4gICAgdG9rZW5NYXRjaGVkKHRva2VuKSB7XG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdG9rZW47XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuZmV0Y2hQYXJzZVJlc3VsdEZvclRva2VuKHRva2VuKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoVmFsdWVzQnlUb2tlbkZvckVsZW1lbnQoZWxlbWVudCkuc2V0KHRva2VuLCB2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlLmVsZW1lbnRNYXRjaGVkVmFsdWUoZWxlbWVudCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRva2VuVW5tYXRjaGVkKHRva2VuKSB7XG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdG9rZW47XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuZmV0Y2hQYXJzZVJlc3VsdEZvclRva2VuKHRva2VuKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoVmFsdWVzQnlUb2tlbkZvckVsZW1lbnQoZWxlbWVudCkuZGVsZXRlKHRva2VuKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuZWxlbWVudFVubWF0Y2hlZFZhbHVlKGVsZW1lbnQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmZXRjaFBhcnNlUmVzdWx0Rm9yVG9rZW4odG9rZW4pIHtcbiAgICAgICAgbGV0IHBhcnNlUmVzdWx0ID0gdGhpcy5wYXJzZVJlc3VsdHNCeVRva2VuLmdldCh0b2tlbik7XG4gICAgICAgIGlmICghcGFyc2VSZXN1bHQpIHtcbiAgICAgICAgICAgIHBhcnNlUmVzdWx0ID0gdGhpcy5wYXJzZVRva2VuKHRva2VuKTtcbiAgICAgICAgICAgIHRoaXMucGFyc2VSZXN1bHRzQnlUb2tlbi5zZXQodG9rZW4sIHBhcnNlUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyc2VSZXN1bHQ7XG4gICAgfVxuICAgIGZldGNoVmFsdWVzQnlUb2tlbkZvckVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBsZXQgdmFsdWVzQnlUb2tlbiA9IHRoaXMudmFsdWVzQnlUb2tlbkJ5RWxlbWVudC5nZXQoZWxlbWVudCk7XG4gICAgICAgIGlmICghdmFsdWVzQnlUb2tlbikge1xuICAgICAgICAgICAgdmFsdWVzQnlUb2tlbiA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzQnlUb2tlbkJ5RWxlbWVudC5zZXQoZWxlbWVudCwgdmFsdWVzQnlUb2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlc0J5VG9rZW47XG4gICAgfVxuICAgIHBhcnNlVG9rZW4odG9rZW4pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kZWxlZ2F0ZS5wYXJzZVZhbHVlRm9yVG9rZW4odG9rZW4pO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWUgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIEJpbmRpbmdPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgZGVsZWdhdGUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICB0aGlzLmJpbmRpbmdzQnlBY3Rpb24gPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAoIXRoaXMudmFsdWVMaXN0T2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVMaXN0T2JzZXJ2ZXIgPSBuZXcgVmFsdWVMaXN0T2JzZXJ2ZXIodGhpcy5lbGVtZW50LCB0aGlzLmFjdGlvbkF0dHJpYnV0ZSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlTGlzdE9ic2VydmVyLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVMaXN0T2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVMaXN0T2JzZXJ2ZXIuc3RvcCgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMudmFsdWVMaXN0T2JzZXJ2ZXI7XG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RBbGxBY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuZWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IGlkZW50aWZpZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuaWRlbnRpZmllcjtcbiAgICB9XG4gICAgZ2V0IGFjdGlvbkF0dHJpYnV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmFjdGlvbkF0dHJpYnV0ZTtcbiAgICB9XG4gICAgZ2V0IHNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5zY2hlbWE7XG4gICAgfVxuICAgIGdldCBiaW5kaW5ncygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5iaW5kaW5nc0J5QWN0aW9uLnZhbHVlcygpKTtcbiAgICB9XG4gICAgY29ubmVjdEFjdGlvbihhY3Rpb24pIHtcbiAgICAgICAgY29uc3QgYmluZGluZyA9IG5ldyBCaW5kaW5nKHRoaXMuY29udGV4dCwgYWN0aW9uKTtcbiAgICAgICAgdGhpcy5iaW5kaW5nc0J5QWN0aW9uLnNldChhY3Rpb24sIGJpbmRpbmcpO1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmJpbmRpbmdDb25uZWN0ZWQoYmluZGluZyk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RBY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGJpbmRpbmcgPSB0aGlzLmJpbmRpbmdzQnlBY3Rpb24uZ2V0KGFjdGlvbik7XG4gICAgICAgIGlmIChiaW5kaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmRpbmdzQnlBY3Rpb24uZGVsZXRlKGFjdGlvbik7XG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlLmJpbmRpbmdEaXNjb25uZWN0ZWQoYmluZGluZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzY29ubmVjdEFsbEFjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuYmluZGluZ3MuZm9yRWFjaCgoYmluZGluZykgPT4gdGhpcy5kZWxlZ2F0ZS5iaW5kaW5nRGlzY29ubmVjdGVkKGJpbmRpbmcsIHRydWUpKTtcbiAgICAgICAgdGhpcy5iaW5kaW5nc0J5QWN0aW9uLmNsZWFyKCk7XG4gICAgfVxuICAgIHBhcnNlVmFsdWVGb3JUb2tlbih0b2tlbikge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBBY3Rpb24uZm9yVG9rZW4odG9rZW4sIHRoaXMuc2NoZW1hKTtcbiAgICAgICAgaWYgKGFjdGlvbi5pZGVudGlmaWVyID09IHRoaXMuaWRlbnRpZmllcikge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbGVtZW50TWF0Y2hlZFZhbHVlKGVsZW1lbnQsIGFjdGlvbikge1xuICAgICAgICB0aGlzLmNvbm5lY3RBY3Rpb24oYWN0aW9uKTtcbiAgICB9XG4gICAgZWxlbWVudFVubWF0Y2hlZFZhbHVlKGVsZW1lbnQsIGFjdGlvbikge1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RBY3Rpb24oYWN0aW9uKTtcbiAgICB9XG59XG5cbmNsYXNzIFZhbHVlT2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHJlY2VpdmVyKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMucmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICAgICAgdGhpcy5zdHJpbmdNYXBPYnNlcnZlciA9IG5ldyBTdHJpbmdNYXBPYnNlcnZlcih0aGlzLmVsZW1lbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLnZhbHVlRGVzY3JpcHRvck1hcCA9IHRoaXMuY29udHJvbGxlci52YWx1ZURlc2NyaXB0b3JNYXA7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnN0cmluZ01hcE9ic2VydmVyLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuaW52b2tlQ2hhbmdlZENhbGxiYWNrc0ZvckRlZmF1bHRWYWx1ZXMoKTtcbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zdHJpbmdNYXBPYnNlcnZlci5zdG9wKCk7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBjb250cm9sbGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmNvbnRyb2xsZXI7XG4gICAgfVxuICAgIGdldFN0cmluZ01hcEtleUZvckF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVOYW1lIGluIHRoaXMudmFsdWVEZXNjcmlwdG9yTWFwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZURlc2NyaXB0b3JNYXBbYXR0cmlidXRlTmFtZV0ubmFtZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdHJpbmdNYXBLZXlBZGRlZChrZXksIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHRoaXMudmFsdWVEZXNjcmlwdG9yTWFwW2F0dHJpYnV0ZU5hbWVdO1xuICAgICAgICBpZiAoIXRoaXMuaGFzVmFsdWUoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5pbnZva2VDaGFuZ2VkQ2FsbGJhY2soa2V5LCBkZXNjcmlwdG9yLndyaXRlcih0aGlzLnJlY2VpdmVyW2tleV0pLCBkZXNjcmlwdG9yLndyaXRlcihkZXNjcmlwdG9yLmRlZmF1bHRWYWx1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0cmluZ01hcFZhbHVlQ2hhbmdlZCh2YWx1ZSwgbmFtZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHRoaXMudmFsdWVEZXNjcmlwdG9yTmFtZU1hcFtuYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAob2xkVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlID0gZGVzY3JpcHRvci53cml0ZXIoZGVzY3JpcHRvci5kZWZhdWx0VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW52b2tlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuICAgIHN0cmluZ01hcEtleVJlbW92ZWQoa2V5LCBhdHRyaWJ1dGVOYW1lLCBvbGRWYWx1ZSkge1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gdGhpcy52YWx1ZURlc2NyaXB0b3JOYW1lTWFwW2tleV07XG4gICAgICAgIGlmICh0aGlzLmhhc1ZhbHVlKGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuaW52b2tlQ2hhbmdlZENhbGxiYWNrKGtleSwgZGVzY3JpcHRvci53cml0ZXIodGhpcy5yZWNlaXZlcltrZXldKSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnZva2VDaGFuZ2VkQ2FsbGJhY2soa2V5LCBkZXNjcmlwdG9yLndyaXRlcihkZXNjcmlwdG9yLmRlZmF1bHRWYWx1ZSksIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbnZva2VDaGFuZ2VkQ2FsbGJhY2tzRm9yRGVmYXVsdFZhbHVlcygpIHtcbiAgICAgICAgZm9yIChjb25zdCB7IGtleSwgbmFtZSwgZGVmYXVsdFZhbHVlLCB3cml0ZXIgfSBvZiB0aGlzLnZhbHVlRGVzY3JpcHRvcnMpIHtcbiAgICAgICAgICAgIGlmIChkZWZhdWx0VmFsdWUgIT0gdW5kZWZpbmVkICYmICF0aGlzLmNvbnRyb2xsZXIuZGF0YS5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIHdyaXRlcihkZWZhdWx0VmFsdWUpLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGludm9rZUNoYW5nZWRDYWxsYmFjayhuYW1lLCByYXdWYWx1ZSwgcmF3T2xkVmFsdWUpIHtcbiAgICAgICAgY29uc3QgY2hhbmdlZE1ldGhvZE5hbWUgPSBgJHtuYW1lfUNoYW5nZWRgO1xuICAgICAgICBjb25zdCBjaGFuZ2VkTWV0aG9kID0gdGhpcy5yZWNlaXZlcltjaGFuZ2VkTWV0aG9kTmFtZV07XG4gICAgICAgIGlmICh0eXBlb2YgY2hhbmdlZE1ldGhvZCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB0aGlzLnZhbHVlRGVzY3JpcHRvck5hbWVNYXBbbmFtZV07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZGVzY3JpcHRvci5yZWFkZXIocmF3VmFsdWUpO1xuICAgICAgICAgICAgICAgIGxldCBvbGRWYWx1ZSA9IHJhd09sZFZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChyYXdPbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZSA9IGRlc2NyaXB0b3IucmVhZGVyKHJhd09sZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hhbmdlZE1ldGhvZC5jYWxsKHRoaXMucmVjZWl2ZXIsIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSA9IGBTdGltdWx1cyBWYWx1ZSBcIiR7dGhpcy5jb250ZXh0LmlkZW50aWZpZXJ9LiR7ZGVzY3JpcHRvci5uYW1lfVwiIC0gJHtlcnJvci5tZXNzYWdlfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldCB2YWx1ZURlc2NyaXB0b3JzKCkge1xuICAgICAgICBjb25zdCB7IHZhbHVlRGVzY3JpcHRvck1hcCB9ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlRGVzY3JpcHRvck1hcCkubWFwKChrZXkpID0+IHZhbHVlRGVzY3JpcHRvck1hcFtrZXldKTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlRGVzY3JpcHRvck5hbWVNYXAoKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3JzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMudmFsdWVEZXNjcmlwdG9yTWFwKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB0aGlzLnZhbHVlRGVzY3JpcHRvck1hcFtrZXldO1xuICAgICAgICAgICAgZGVzY3JpcHRvcnNbZGVzY3JpcHRvci5uYW1lXSA9IGRlc2NyaXB0b3I7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGVzY3JpcHRvcnM7XG4gICAgfVxuICAgIGhhc1ZhbHVlKGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHRoaXMudmFsdWVEZXNjcmlwdG9yTmFtZU1hcFthdHRyaWJ1dGVOYW1lXTtcbiAgICAgICAgY29uc3QgaGFzTWV0aG9kTmFtZSA9IGBoYXMke2NhcGl0YWxpemUoZGVzY3JpcHRvci5uYW1lKX1gO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWNlaXZlcltoYXNNZXRob2ROYW1lXTtcbiAgICB9XG59XG5cbmNsYXNzIFRhcmdldE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBkZWxlZ2F0ZSkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIHRoaXMudGFyZ2V0c0J5TmFtZSA9IG5ldyBNdWx0aW1hcCgpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRva2VuTGlzdE9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLnRva2VuTGlzdE9ic2VydmVyID0gbmV3IFRva2VuTGlzdE9ic2VydmVyKHRoaXMuZWxlbWVudCwgdGhpcy5hdHRyaWJ1dGVOYW1lLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMudG9rZW5MaXN0T2JzZXJ2ZXIuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy50b2tlbkxpc3RPYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0QWxsVGFyZ2V0cygpO1xuICAgICAgICAgICAgdGhpcy50b2tlbkxpc3RPYnNlcnZlci5zdG9wKCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy50b2tlbkxpc3RPYnNlcnZlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2tlbk1hdGNoZWQoeyBlbGVtZW50LCBjb250ZW50OiBuYW1lIH0pIHtcbiAgICAgICAgaWYgKHRoaXMuc2NvcGUuY29udGFpbnNFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RUYXJnZXQoZWxlbWVudCwgbmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9rZW5Vbm1hdGNoZWQoeyBlbGVtZW50LCBjb250ZW50OiBuYW1lIH0pIHtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0VGFyZ2V0KGVsZW1lbnQsIG5hbWUpO1xuICAgIH1cbiAgICBjb25uZWN0VGFyZ2V0KGVsZW1lbnQsIG5hbWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0c0J5TmFtZS5oYXMobmFtZSwgZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0c0J5TmFtZS5hZGQobmFtZSwgZWxlbWVudCk7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLnRva2VuTGlzdE9ic2VydmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGF1c2UoKCkgPT4gdGhpcy5kZWxlZ2F0ZS50YXJnZXRDb25uZWN0ZWQoZWxlbWVudCwgbmFtZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RUYXJnZXQoZWxlbWVudCwgbmFtZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldHNCeU5hbWUuaGFzKG5hbWUsIGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldHNCeU5hbWUuZGVsZXRlKG5hbWUsIGVsZW1lbnQpO1xuICAgICAgICAgICAgKF9hID0gdGhpcy50b2tlbkxpc3RPYnNlcnZlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhdXNlKCgpID0+IHRoaXMuZGVsZWdhdGUudGFyZ2V0RGlzY29ubmVjdGVkKGVsZW1lbnQsIG5hbWUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNjb25uZWN0QWxsVGFyZ2V0cygpIHtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIHRoaXMudGFyZ2V0c0J5TmFtZS5rZXlzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdGhpcy50YXJnZXRzQnlOYW1lLmdldFZhbHVlc0ZvcktleShuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdFRhcmdldChlbGVtZW50LCBuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgYXR0cmlidXRlTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIGBkYXRhLSR7dGhpcy5jb250ZXh0LmlkZW50aWZpZXJ9LXRhcmdldGA7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBzY29wZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5zY29wZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlYWRJbmhlcml0YWJsZVN0YXRpY0FycmF5VmFsdWVzKGNvbnN0cnVjdG9yLCBwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBhbmNlc3RvcnMgPSBnZXRBbmNlc3RvcnNGb3JDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYW5jZXN0b3JzLnJlZHVjZSgodmFsdWVzLCBjb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgICBnZXRPd25TdGF0aWNBcnJheVZhbHVlcyhjb25zdHJ1Y3RvciwgcHJvcGVydHlOYW1lKS5mb3JFYWNoKChuYW1lKSA9PiB2YWx1ZXMuYWRkKG5hbWUpKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9LCBuZXcgU2V0KCkpKTtcbn1cbmZ1bmN0aW9uIHJlYWRJbmhlcml0YWJsZVN0YXRpY09iamVjdFBhaXJzKGNvbnN0cnVjdG9yLCBwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBhbmNlc3RvcnMgPSBnZXRBbmNlc3RvcnNGb3JDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIGFuY2VzdG9ycy5yZWR1Y2UoKHBhaXJzLCBjb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgICBwYWlycy5wdXNoKC4uLmdldE93blN0YXRpY09iamVjdFBhaXJzKGNvbnN0cnVjdG9yLCBwcm9wZXJ0eU5hbWUpKTtcbiAgICAgICAgcmV0dXJuIHBhaXJzO1xuICAgIH0sIFtdKTtcbn1cbmZ1bmN0aW9uIGdldEFuY2VzdG9yc0ZvckNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKSB7XG4gICAgY29uc3QgYW5jZXN0b3JzID0gW107XG4gICAgd2hpbGUgKGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGFuY2VzdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgY29uc3RydWN0b3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoY29uc3RydWN0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gYW5jZXN0b3JzLnJldmVyc2UoKTtcbn1cbmZ1bmN0aW9uIGdldE93blN0YXRpY0FycmF5VmFsdWVzKGNvbnN0cnVjdG9yLCBwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gY29uc3RydWN0b3JbcHJvcGVydHlOYW1lXTtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShkZWZpbml0aW9uKSA/IGRlZmluaXRpb24gOiBbXTtcbn1cbmZ1bmN0aW9uIGdldE93blN0YXRpY09iamVjdFBhaXJzKGNvbnN0cnVjdG9yLCBwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gY29uc3RydWN0b3JbcHJvcGVydHlOYW1lXTtcbiAgICByZXR1cm4gZGVmaW5pdGlvbiA/IE9iamVjdC5rZXlzKGRlZmluaXRpb24pLm1hcCgoa2V5KSA9PiBba2V5LCBkZWZpbml0aW9uW2tleV1dKSA6IFtdO1xufVxuXG5jbGFzcyBPdXRsZXRPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgZGVsZWdhdGUpIHtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgdGhpcy5vdXRsZXRzQnlOYW1lID0gbmV3IE11bHRpbWFwKCk7XG4gICAgICAgIHRoaXMub3V0bGV0RWxlbWVudHNCeU5hbWUgPSBuZXcgTXVsdGltYXAoKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvck9ic2VydmVyTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZU9ic2VydmVyTWFwID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3V0bGV0RGVmaW5pdGlvbnMuZm9yRWFjaCgob3V0bGV0TmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBTZWxlY3Rvck9ic2VydmVyRm9yT3V0bGV0KG91dGxldE5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBBdHRyaWJ1dGVPYnNlcnZlckZvck91dGxldChvdXRsZXROYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZGVwZW5kZW50Q29udGV4dHMuZm9yRWFjaCgoY29udGV4dCkgPT4gY29udGV4dC5yZWZyZXNoKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3JPYnNlcnZlck1hcC5mb3JFYWNoKChvYnNlcnZlcikgPT4gb2JzZXJ2ZXIucmVmcmVzaCgpKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVPYnNlcnZlck1hcC5mb3JFYWNoKChvYnNlcnZlcikgPT4gb2JzZXJ2ZXIucmVmcmVzaCgpKTtcbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RBbGxPdXRsZXRzKCk7XG4gICAgICAgICAgICB0aGlzLnN0b3BTZWxlY3Rvck9ic2VydmVycygpO1xuICAgICAgICAgICAgdGhpcy5zdG9wQXR0cmlidXRlT2JzZXJ2ZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcFNlbGVjdG9yT2JzZXJ2ZXJzKCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rvck9ic2VydmVyTWFwLnNpemUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdG9yT2JzZXJ2ZXJNYXAuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IG9ic2VydmVyLnN0b3AoKSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdG9yT2JzZXJ2ZXJNYXAuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdG9wQXR0cmlidXRlT2JzZXJ2ZXJzKCkge1xuICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGVPYnNlcnZlck1hcC5zaXplID4gMCkge1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVPYnNlcnZlck1hcC5mb3JFYWNoKChvYnNlcnZlcikgPT4gb2JzZXJ2ZXIuc3RvcCgpKTtcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXJNYXAuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxlY3Rvck1hdGNoZWQoZWxlbWVudCwgX3NlbGVjdG9yLCB7IG91dGxldE5hbWUgfSkge1xuICAgICAgICBjb25zdCBvdXRsZXQgPSB0aGlzLmdldE91dGxldChlbGVtZW50LCBvdXRsZXROYW1lKTtcbiAgICAgICAgaWYgKG91dGxldCkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0T3V0bGV0KG91dGxldCwgZWxlbWVudCwgb3V0bGV0TmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VsZWN0b3JVbm1hdGNoZWQoZWxlbWVudCwgX3NlbGVjdG9yLCB7IG91dGxldE5hbWUgfSkge1xuICAgICAgICBjb25zdCBvdXRsZXQgPSB0aGlzLmdldE91dGxldEZyb21NYXAoZWxlbWVudCwgb3V0bGV0TmFtZSk7XG4gICAgICAgIGlmIChvdXRsZXQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdE91dGxldChvdXRsZXQsIGVsZW1lbnQsIG91dGxldE5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlbGVjdG9yTWF0Y2hFbGVtZW50KGVsZW1lbnQsIHsgb3V0bGV0TmFtZSB9KSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gdGhpcy5zZWxlY3RvcihvdXRsZXROYW1lKTtcbiAgICAgICAgY29uc3QgaGFzT3V0bGV0ID0gdGhpcy5oYXNPdXRsZXQoZWxlbWVudCwgb3V0bGV0TmFtZSk7XG4gICAgICAgIGNvbnN0IGhhc091dGxldENvbnRyb2xsZXIgPSBlbGVtZW50Lm1hdGNoZXMoYFske3RoaXMuc2NoZW1hLmNvbnRyb2xsZXJBdHRyaWJ1dGV9fj0ke291dGxldE5hbWV9XWApO1xuICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBoYXNPdXRsZXQgJiYgaGFzT3V0bGV0Q29udHJvbGxlciAmJiBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnRNYXRjaGVkQXR0cmlidXRlKF9lbGVtZW50LCBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IG91dGxldE5hbWUgPSB0aGlzLmdldE91dGxldE5hbWVGcm9tT3V0bGV0QXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgaWYgKG91dGxldE5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0b3JPYnNlcnZlckZvck91dGxldChvdXRsZXROYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbGVtZW50QXR0cmlidXRlVmFsdWVDaGFuZ2VkKF9lbGVtZW50LCBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IG91dGxldE5hbWUgPSB0aGlzLmdldE91dGxldE5hbWVGcm9tT3V0bGV0QXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgaWYgKG91dGxldE5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0b3JPYnNlcnZlckZvck91dGxldChvdXRsZXROYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbGVtZW50VW5tYXRjaGVkQXR0cmlidXRlKF9lbGVtZW50LCBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IG91dGxldE5hbWUgPSB0aGlzLmdldE91dGxldE5hbWVGcm9tT3V0bGV0QXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgaWYgKG91dGxldE5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0b3JPYnNlcnZlckZvck91dGxldChvdXRsZXROYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25uZWN0T3V0bGV0KG91dGxldCwgZWxlbWVudCwgb3V0bGV0TmFtZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghdGhpcy5vdXRsZXRFbGVtZW50c0J5TmFtZS5oYXMob3V0bGV0TmFtZSwgZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMub3V0bGV0c0J5TmFtZS5hZGQob3V0bGV0TmFtZSwgb3V0bGV0KTtcbiAgICAgICAgICAgIHRoaXMub3V0bGV0RWxlbWVudHNCeU5hbWUuYWRkKG91dGxldE5hbWUsIGVsZW1lbnQpO1xuICAgICAgICAgICAgKF9hID0gdGhpcy5zZWxlY3Rvck9ic2VydmVyTWFwLmdldChvdXRsZXROYW1lKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhdXNlKCgpID0+IHRoaXMuZGVsZWdhdGUub3V0bGV0Q29ubmVjdGVkKG91dGxldCwgZWxlbWVudCwgb3V0bGV0TmFtZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RPdXRsZXQob3V0bGV0LCBlbGVtZW50LCBvdXRsZXROYW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRoaXMub3V0bGV0RWxlbWVudHNCeU5hbWUuaGFzKG91dGxldE5hbWUsIGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLm91dGxldHNCeU5hbWUuZGVsZXRlKG91dGxldE5hbWUsIG91dGxldCk7XG4gICAgICAgICAgICB0aGlzLm91dGxldEVsZW1lbnRzQnlOYW1lLmRlbGV0ZShvdXRsZXROYW1lLCBlbGVtZW50KTtcbiAgICAgICAgICAgIChfYSA9IHRoaXMuc2VsZWN0b3JPYnNlcnZlck1hcFxuICAgICAgICAgICAgICAgIC5nZXQob3V0bGV0TmFtZSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYXVzZSgoKSA9PiB0aGlzLmRlbGVnYXRlLm91dGxldERpc2Nvbm5lY3RlZChvdXRsZXQsIGVsZW1lbnQsIG91dGxldE5hbWUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNjb25uZWN0QWxsT3V0bGV0cygpIHtcbiAgICAgICAgZm9yIChjb25zdCBvdXRsZXROYW1lIG9mIHRoaXMub3V0bGV0RWxlbWVudHNCeU5hbWUua2V5cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRoaXMub3V0bGV0RWxlbWVudHNCeU5hbWUuZ2V0VmFsdWVzRm9yS2V5KG91dGxldE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBvdXRsZXQgb2YgdGhpcy5vdXRsZXRzQnlOYW1lLmdldFZhbHVlc0ZvcktleShvdXRsZXROYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RPdXRsZXQob3V0bGV0LCBlbGVtZW50LCBvdXRsZXROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlU2VsZWN0b3JPYnNlcnZlckZvck91dGxldChvdXRsZXROYW1lKSB7XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5zZWxlY3Rvck9ic2VydmVyTWFwLmdldChvdXRsZXROYW1lKTtcbiAgICAgICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5zZWxlY3RvciA9IHRoaXMuc2VsZWN0b3Iob3V0bGV0TmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0dXBTZWxlY3Rvck9ic2VydmVyRm9yT3V0bGV0KG91dGxldE5hbWUpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLnNlbGVjdG9yKG91dGxldE5hbWUpO1xuICAgICAgICBjb25zdCBzZWxlY3Rvck9ic2VydmVyID0gbmV3IFNlbGVjdG9yT2JzZXJ2ZXIoZG9jdW1lbnQuYm9keSwgc2VsZWN0b3IsIHRoaXMsIHsgb3V0bGV0TmFtZSB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvck9ic2VydmVyTWFwLnNldChvdXRsZXROYW1lLCBzZWxlY3Rvck9ic2VydmVyKTtcbiAgICAgICAgc2VsZWN0b3JPYnNlcnZlci5zdGFydCgpO1xuICAgIH1cbiAgICBzZXR1cEF0dHJpYnV0ZU9ic2VydmVyRm9yT3V0bGV0KG91dGxldE5hbWUpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZUZvck91dGxldE5hbWUob3V0bGV0TmFtZSk7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZU9ic2VydmVyID0gbmV3IEF0dHJpYnV0ZU9ic2VydmVyKHRoaXMuc2NvcGUuZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXJNYXAuc2V0KG91dGxldE5hbWUsIGF0dHJpYnV0ZU9ic2VydmVyKTtcbiAgICAgICAgYXR0cmlidXRlT2JzZXJ2ZXIuc3RhcnQoKTtcbiAgICB9XG4gICAgc2VsZWN0b3Iob3V0bGV0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5vdXRsZXRzLmdldFNlbGVjdG9yRm9yT3V0bGV0TmFtZShvdXRsZXROYW1lKTtcbiAgICB9XG4gICAgYXR0cmlidXRlTmFtZUZvck91dGxldE5hbWUob3V0bGV0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5zY2hlbWEub3V0bGV0QXR0cmlidXRlRm9yU2NvcGUodGhpcy5pZGVudGlmaWVyLCBvdXRsZXROYW1lKTtcbiAgICB9XG4gICAgZ2V0T3V0bGV0TmFtZUZyb21PdXRsZXRBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3V0bGV0RGVmaW5pdGlvbnMuZmluZCgob3V0bGV0TmFtZSkgPT4gdGhpcy5hdHRyaWJ1dGVOYW1lRm9yT3V0bGV0TmFtZShvdXRsZXROYW1lKSA9PT0gYXR0cmlidXRlTmFtZSk7XG4gICAgfVxuICAgIGdldCBvdXRsZXREZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IG5ldyBNdWx0aW1hcCgpO1xuICAgICAgICB0aGlzLnJvdXRlci5tb2R1bGVzLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSBtb2R1bGUuZGVmaW5pdGlvbi5jb250cm9sbGVyQ29uc3RydWN0b3I7XG4gICAgICAgICAgICBjb25zdCBvdXRsZXRzID0gcmVhZEluaGVyaXRhYmxlU3RhdGljQXJyYXlWYWx1ZXMoY29uc3RydWN0b3IsIFwib3V0bGV0c1wiKTtcbiAgICAgICAgICAgIG91dGxldHMuZm9yRWFjaCgob3V0bGV0KSA9PiBkZXBlbmRlbmNpZXMuYWRkKG91dGxldCwgbW9kdWxlLmlkZW50aWZpZXIpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkZXBlbmRlbmNpZXM7XG4gICAgfVxuICAgIGdldCBvdXRsZXREZWZpbml0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3V0bGV0RGVwZW5kZW5jaWVzLmdldEtleXNGb3JWYWx1ZSh0aGlzLmlkZW50aWZpZXIpO1xuICAgIH1cbiAgICBnZXQgZGVwZW5kZW50Q29udHJvbGxlcklkZW50aWZpZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vdXRsZXREZXBlbmRlbmNpZXMuZ2V0VmFsdWVzRm9yS2V5KHRoaXMuaWRlbnRpZmllcik7XG4gICAgfVxuICAgIGdldCBkZXBlbmRlbnRDb250ZXh0cygpIHtcbiAgICAgICAgY29uc3QgaWRlbnRpZmllcnMgPSB0aGlzLmRlcGVuZGVudENvbnRyb2xsZXJJZGVudGlmaWVycztcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLmNvbnRleHRzLmZpbHRlcigoY29udGV4dCkgPT4gaWRlbnRpZmllcnMuaW5jbHVkZXMoY29udGV4dC5pZGVudGlmaWVyKSk7XG4gICAgfVxuICAgIGhhc091dGxldChlbGVtZW50LCBvdXRsZXROYW1lKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuZ2V0T3V0bGV0KGVsZW1lbnQsIG91dGxldE5hbWUpIHx8ICEhdGhpcy5nZXRPdXRsZXRGcm9tTWFwKGVsZW1lbnQsIG91dGxldE5hbWUpO1xuICAgIH1cbiAgICBnZXRPdXRsZXQoZWxlbWVudCwgb3V0bGV0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi5nZXRDb250cm9sbGVyRm9yRWxlbWVudEFuZElkZW50aWZpZXIoZWxlbWVudCwgb3V0bGV0TmFtZSk7XG4gICAgfVxuICAgIGdldE91dGxldEZyb21NYXAoZWxlbWVudCwgb3V0bGV0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vdXRsZXRzQnlOYW1lLmdldFZhbHVlc0ZvcktleShvdXRsZXROYW1lKS5maW5kKChvdXRsZXQpID0+IG91dGxldC5lbGVtZW50ID09PSBlbGVtZW50KTtcbiAgICB9XG4gICAgZ2V0IHNjb3BlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnNjb3BlO1xuICAgIH1cbiAgICBnZXQgc2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnNjaGVtYTtcbiAgICB9XG4gICAgZ2V0IGlkZW50aWZpZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuaWRlbnRpZmllcjtcbiAgICB9XG4gICAgZ2V0IGFwcGxpY2F0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmFwcGxpY2F0aW9uO1xuICAgIH1cbiAgICBnZXQgcm91dGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi5yb3V0ZXI7XG4gICAgfVxufVxuXG5jbGFzcyBDb250ZXh0IHtcbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGUsIHNjb3BlKSB7XG4gICAgICAgIHRoaXMubG9nRGVidWdBY3Rpdml0eSA9IChmdW5jdGlvbk5hbWUsIGRldGFpbCA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGlkZW50aWZpZXIsIGNvbnRyb2xsZXIsIGVsZW1lbnQgfSA9IHRoaXM7XG4gICAgICAgICAgICBkZXRhaWwgPSBPYmplY3QuYXNzaWduKHsgaWRlbnRpZmllciwgY29udHJvbGxlciwgZWxlbWVudCB9LCBkZXRhaWwpO1xuICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5sb2dEZWJ1Z0FjdGl2aXR5KHRoaXMuaWRlbnRpZmllciwgZnVuY3Rpb25OYW1lLCBkZXRhaWwpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1vZHVsZSA9IG1vZHVsZTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgbW9kdWxlLmNvbnRyb2xsZXJDb25zdHJ1Y3Rvcih0aGlzKTtcbiAgICAgICAgdGhpcy5iaW5kaW5nT2JzZXJ2ZXIgPSBuZXcgQmluZGluZ09ic2VydmVyKHRoaXMsIHRoaXMuZGlzcGF0Y2hlcik7XG4gICAgICAgIHRoaXMudmFsdWVPYnNlcnZlciA9IG5ldyBWYWx1ZU9ic2VydmVyKHRoaXMsIHRoaXMuY29udHJvbGxlcik7XG4gICAgICAgIHRoaXMudGFyZ2V0T2JzZXJ2ZXIgPSBuZXcgVGFyZ2V0T2JzZXJ2ZXIodGhpcywgdGhpcyk7XG4gICAgICAgIHRoaXMub3V0bGV0T2JzZXJ2ZXIgPSBuZXcgT3V0bGV0T2JzZXJ2ZXIodGhpcywgdGhpcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgICAgdGhpcy5sb2dEZWJ1Z0FjdGl2aXR5KFwiaW5pdGlhbGl6ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsIFwiaW5pdGlhbGl6aW5nIGNvbnRyb2xsZXJcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5iaW5kaW5nT2JzZXJ2ZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy52YWx1ZU9ic2VydmVyLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMudGFyZ2V0T2JzZXJ2ZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5vdXRsZXRPYnNlcnZlci5zdGFydCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLmNvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMubG9nRGVidWdBY3Rpdml0eShcImNvbm5lY3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCBcImNvbm5lY3RpbmcgY29udHJvbGxlclwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLm91dGxldE9ic2VydmVyLnJlZnJlc2goKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmxvZ0RlYnVnQWN0aXZpdHkoXCJkaXNjb25uZWN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgXCJkaXNjb25uZWN0aW5nIGNvbnRyb2xsZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vdXRsZXRPYnNlcnZlci5zdG9wKCk7XG4gICAgICAgIHRoaXMudGFyZ2V0T2JzZXJ2ZXIuc3RvcCgpO1xuICAgICAgICB0aGlzLnZhbHVlT2JzZXJ2ZXIuc3RvcCgpO1xuICAgICAgICB0aGlzLmJpbmRpbmdPYnNlcnZlci5zdG9wKCk7XG4gICAgfVxuICAgIGdldCBhcHBsaWNhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLmFwcGxpY2F0aW9uO1xuICAgIH1cbiAgICBnZXQgaWRlbnRpZmllcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLmlkZW50aWZpZXI7XG4gICAgfVxuICAgIGdldCBzY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLnNjaGVtYTtcbiAgICB9XG4gICAgZ2V0IGRpc3BhdGNoZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLmRpc3BhdGNoZXI7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5lbGVtZW50O1xuICAgIH1cbiAgICBnZXQgcGFyZW50RWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICBoYW5kbGVFcnJvcihlcnJvciwgbWVzc2FnZSwgZGV0YWlsID0ge30pIHtcbiAgICAgICAgY29uc3QgeyBpZGVudGlmaWVyLCBjb250cm9sbGVyLCBlbGVtZW50IH0gPSB0aGlzO1xuICAgICAgICBkZXRhaWwgPSBPYmplY3QuYXNzaWduKHsgaWRlbnRpZmllciwgY29udHJvbGxlciwgZWxlbWVudCB9LCBkZXRhaWwpO1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLmhhbmRsZUVycm9yKGVycm9yLCBgRXJyb3IgJHttZXNzYWdlfWAsIGRldGFpbCk7XG4gICAgfVxuICAgIHRhcmdldENvbm5lY3RlZChlbGVtZW50LCBuYW1lKSB7XG4gICAgICAgIHRoaXMuaW52b2tlQ29udHJvbGxlck1ldGhvZChgJHtuYW1lfVRhcmdldENvbm5lY3RlZGAsIGVsZW1lbnQpO1xuICAgIH1cbiAgICB0YXJnZXREaXNjb25uZWN0ZWQoZWxlbWVudCwgbmFtZSkge1xuICAgICAgICB0aGlzLmludm9rZUNvbnRyb2xsZXJNZXRob2QoYCR7bmFtZX1UYXJnZXREaXNjb25uZWN0ZWRgLCBlbGVtZW50KTtcbiAgICB9XG4gICAgb3V0bGV0Q29ubmVjdGVkKG91dGxldCwgZWxlbWVudCwgbmFtZSkge1xuICAgICAgICB0aGlzLmludm9rZUNvbnRyb2xsZXJNZXRob2QoYCR7bmFtZXNwYWNlQ2FtZWxpemUobmFtZSl9T3V0bGV0Q29ubmVjdGVkYCwgb3V0bGV0LCBlbGVtZW50KTtcbiAgICB9XG4gICAgb3V0bGV0RGlzY29ubmVjdGVkKG91dGxldCwgZWxlbWVudCwgbmFtZSkge1xuICAgICAgICB0aGlzLmludm9rZUNvbnRyb2xsZXJNZXRob2QoYCR7bmFtZXNwYWNlQ2FtZWxpemUobmFtZSl9T3V0bGV0RGlzY29ubmVjdGVkYCwgb3V0bGV0LCBlbGVtZW50KTtcbiAgICB9XG4gICAgaW52b2tlQ29udHJvbGxlck1ldGhvZChtZXRob2ROYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSB0aGlzLmNvbnRyb2xsZXI7XG4gICAgICAgIGlmICh0eXBlb2YgY29udHJvbGxlclttZXRob2ROYW1lXSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXJbbWV0aG9kTmFtZV0oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJsZXNzKGNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIHNoYWRvdyhjb25zdHJ1Y3RvciwgZ2V0Qmxlc3NlZFByb3BlcnRpZXMoY29uc3RydWN0b3IpKTtcbn1cbmZ1bmN0aW9uIHNoYWRvdyhjb25zdHJ1Y3RvciwgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHNoYWRvd0NvbnN0cnVjdG9yID0gZXh0ZW5kKGNvbnN0cnVjdG9yKTtcbiAgICBjb25zdCBzaGFkb3dQcm9wZXJ0aWVzID0gZ2V0U2hhZG93UHJvcGVydGllcyhjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3BlcnRpZXMpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHNoYWRvd0NvbnN0cnVjdG9yLnByb3RvdHlwZSwgc2hhZG93UHJvcGVydGllcyk7XG4gICAgcmV0dXJuIHNoYWRvd0NvbnN0cnVjdG9yO1xufVxuZnVuY3Rpb24gZ2V0Qmxlc3NlZFByb3BlcnRpZXMoY29uc3RydWN0b3IpIHtcbiAgICBjb25zdCBibGVzc2luZ3MgPSByZWFkSW5oZXJpdGFibGVTdGF0aWNBcnJheVZhbHVlcyhjb25zdHJ1Y3RvciwgXCJibGVzc2luZ3NcIik7XG4gICAgcmV0dXJuIGJsZXNzaW5ncy5yZWR1Y2UoKGJsZXNzZWRQcm9wZXJ0aWVzLCBibGVzc2luZykgPT4ge1xuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gYmxlc3NpbmcoY29uc3RydWN0b3IpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gYmxlc3NlZFByb3BlcnRpZXNba2V5XSB8fCB7fTtcbiAgICAgICAgICAgIGJsZXNzZWRQcm9wZXJ0aWVzW2tleV0gPSBPYmplY3QuYXNzaWduKGRlc2NyaXB0b3IsIHByb3BlcnRpZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJsZXNzZWRQcm9wZXJ0aWVzO1xuICAgIH0sIHt9KTtcbn1cbmZ1bmN0aW9uIGdldFNoYWRvd1Byb3BlcnRpZXMocHJvdG90eXBlLCBwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIGdldE93bktleXMocHJvcGVydGllcykucmVkdWNlKChzaGFkb3dQcm9wZXJ0aWVzLCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IGdldFNoYWRvd2VkRGVzY3JpcHRvcihwcm90b3R5cGUsIHByb3BlcnRpZXMsIGtleSk7XG4gICAgICAgIGlmIChkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHNoYWRvd1Byb3BlcnRpZXMsIHsgW2tleV06IGRlc2NyaXB0b3IgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoYWRvd1Byb3BlcnRpZXM7XG4gICAgfSwge30pO1xufVxuZnVuY3Rpb24gZ2V0U2hhZG93ZWREZXNjcmlwdG9yKHByb3RvdHlwZSwgcHJvcGVydGllcywga2V5KSB7XG4gICAgY29uc3Qgc2hhZG93aW5nRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlLCBrZXkpO1xuICAgIGNvbnN0IHNoYWRvd2VkQnlWYWx1ZSA9IHNoYWRvd2luZ0Rlc2NyaXB0b3IgJiYgXCJ2YWx1ZVwiIGluIHNoYWRvd2luZ0Rlc2NyaXB0b3I7XG4gICAgaWYgKCFzaGFkb3dlZEJ5VmFsdWUpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvcGVydGllcywga2V5KS52YWx1ZTtcbiAgICAgICAgaWYgKHNoYWRvd2luZ0Rlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3IuZ2V0ID0gc2hhZG93aW5nRGVzY3JpcHRvci5nZXQgfHwgZGVzY3JpcHRvci5nZXQ7XG4gICAgICAgICAgICBkZXNjcmlwdG9yLnNldCA9IHNoYWRvd2luZ0Rlc2NyaXB0b3Iuc2V0IHx8IGRlc2NyaXB0b3Iuc2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICAgIH1cbn1cbmNvbnN0IGdldE93bktleXMgPSAoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIChvYmplY3QpID0+IFsuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmplY3QpLCAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCldO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICAgIH1cbn0pKCk7XG5jb25zdCBleHRlbmQgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGV4dGVuZFdpdGhSZWZsZWN0KGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGZ1bmN0aW9uIGV4dGVuZGVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuY29uc3RydWN0KGNvbnN0cnVjdG9yLCBhcmd1bWVudHMsIG5ldy50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGV4dGVuZGVkLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoY29uc3RydWN0b3IucHJvdG90eXBlLCB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogZXh0ZW5kZWQgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIFJlZmxlY3Quc2V0UHJvdG90eXBlT2YoZXh0ZW5kZWQsIGNvbnN0cnVjdG9yKTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZGVkO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0UmVmbGVjdEV4dGVuc2lvbigpIHtcbiAgICAgICAgY29uc3QgYSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuYS5jYWxsKHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBiID0gZXh0ZW5kV2l0aFJlZmxlY3QoYSk7XG4gICAgICAgIGIucHJvdG90eXBlLmEgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIHJldHVybiBuZXcgYigpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICB0ZXN0UmVmbGVjdEV4dGVuc2lvbigpO1xuICAgICAgICByZXR1cm4gZXh0ZW5kV2l0aFJlZmxlY3Q7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gKGNvbnN0cnVjdG9yKSA9PiBjbGFzcyBleHRlbmRlZCBleHRlbmRzIGNvbnN0cnVjdG9yIHtcbiAgICAgICAgfTtcbiAgICB9XG59KSgpO1xuXG5mdW5jdGlvbiBibGVzc0RlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkZW50aWZpZXI6IGRlZmluaXRpb24uaWRlbnRpZmllcixcbiAgICAgICAgY29udHJvbGxlckNvbnN0cnVjdG9yOiBibGVzcyhkZWZpbml0aW9uLmNvbnRyb2xsZXJDb25zdHJ1Y3RvciksXG4gICAgfTtcbn1cblxuY2xhc3MgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcihhcHBsaWNhdGlvbiwgZGVmaW5pdGlvbikge1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uID0gYXBwbGljYXRpb247XG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbiA9IGJsZXNzRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcbiAgICAgICAgdGhpcy5jb250ZXh0c0J5U2NvcGUgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZENvbnRleHRzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBnZXQgaWRlbnRpZmllcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5pZGVudGlmaWVyO1xuICAgIH1cbiAgICBnZXQgY29udHJvbGxlckNvbnN0cnVjdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uLmNvbnRyb2xsZXJDb25zdHJ1Y3RvcjtcbiAgICB9XG4gICAgZ2V0IGNvbnRleHRzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmNvbm5lY3RlZENvbnRleHRzKTtcbiAgICB9XG4gICAgY29ubmVjdENvbnRleHRGb3JTY29wZShzY29wZSkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5mZXRjaENvbnRleHRGb3JTY29wZShzY29wZSk7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkQ29udGV4dHMuYWRkKGNvbnRleHQpO1xuICAgICAgICBjb250ZXh0LmNvbm5lY3QoKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdENvbnRleHRGb3JTY29wZShzY29wZSkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0c0J5U2NvcGUuZ2V0KHNjb3BlKTtcbiAgICAgICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGVkQ29udGV4dHMuZGVsZXRlKGNvbnRleHQpO1xuICAgICAgICAgICAgY29udGV4dC5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hDb250ZXh0Rm9yU2NvcGUoc2NvcGUpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzQnlTY29wZS5nZXQoc2NvcGUpO1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0aGlzLCBzY29wZSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRzQnlTY29wZS5zZXQoc2NvcGUsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbn1cblxuY2xhc3MgQ2xhc3NNYXAge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB9XG4gICAgaGFzKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5oYXModGhpcy5nZXREYXRhS2V5KG5hbWUpKTtcbiAgICB9XG4gICAgZ2V0KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWxsKG5hbWUpWzBdO1xuICAgIH1cbiAgICBnZXRBbGwobmFtZSkge1xuICAgICAgICBjb25zdCB0b2tlblN0cmluZyA9IHRoaXMuZGF0YS5nZXQodGhpcy5nZXREYXRhS2V5KG5hbWUpKSB8fCBcIlwiO1xuICAgICAgICByZXR1cm4gdG9rZW5pemUodG9rZW5TdHJpbmcpO1xuICAgIH1cbiAgICBnZXRBdHRyaWJ1dGVOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5nZXRBdHRyaWJ1dGVOYW1lRm9yS2V5KHRoaXMuZ2V0RGF0YUtleShuYW1lKSk7XG4gICAgfVxuICAgIGdldERhdGFLZXkobmFtZSkge1xuICAgICAgICByZXR1cm4gYCR7bmFtZX0tY2xhc3NgO1xuICAgIH1cbiAgICBnZXQgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZGF0YTtcbiAgICB9XG59XG5cbmNsYXNzIERhdGFNYXAge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBpZGVudGlmaWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5pZGVudGlmaWVyO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZU5hbWVGb3JLZXkoa2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZU5hbWVGb3JLZXkoa2V5KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChrZXkpO1xuICAgIH1cbiAgICBoYXMoa2V5KSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZU5hbWVGb3JLZXkoa2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuICAgIGRlbGV0ZShrZXkpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZU5hbWVGb3JLZXkoa2V5KTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRBdHRyaWJ1dGVOYW1lRm9yS2V5KGtleSkge1xuICAgICAgICByZXR1cm4gYGRhdGEtJHt0aGlzLmlkZW50aWZpZXJ9LSR7ZGFzaGVyaXplKGtleSl9YDtcbiAgICB9XG59XG5cbmNsYXNzIEd1aWRlIHtcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXIpIHtcbiAgICAgICAgdGhpcy53YXJuZWRLZXlzQnlPYmplY3QgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICB9XG4gICAgd2FybihvYmplY3QsIGtleSwgbWVzc2FnZSkge1xuICAgICAgICBsZXQgd2FybmVkS2V5cyA9IHRoaXMud2FybmVkS2V5c0J5T2JqZWN0LmdldChvYmplY3QpO1xuICAgICAgICBpZiAoIXdhcm5lZEtleXMpIHtcbiAgICAgICAgICAgIHdhcm5lZEtleXMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICB0aGlzLndhcm5lZEtleXNCeU9iamVjdC5zZXQob2JqZWN0LCB3YXJuZWRLZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXdhcm5lZEtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHdhcm5lZEtleXMuYWRkKGtleSk7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuKG1lc3NhZ2UsIG9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGF0dHJpYnV0ZVZhbHVlQ29udGFpbnNUb2tlbihhdHRyaWJ1dGVOYW1lLCB0b2tlbikge1xuICAgIHJldHVybiBgWyR7YXR0cmlidXRlTmFtZX1+PVwiJHt0b2tlbn1cIl1gO1xufVxuXG5jbGFzcyBUYXJnZXRTZXQge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBpZGVudGlmaWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5pZGVudGlmaWVyO1xuICAgIH1cbiAgICBnZXQgc2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5zY2hlbWE7XG4gICAgfVxuICAgIGhhcyh0YXJnZXROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmQodGFyZ2V0TmFtZSkgIT0gbnVsbDtcbiAgICB9XG4gICAgZmluZCguLi50YXJnZXROYW1lcykge1xuICAgICAgICByZXR1cm4gdGFyZ2V0TmFtZXMucmVkdWNlKCh0YXJnZXQsIHRhcmdldE5hbWUpID0+IHRhcmdldCB8fCB0aGlzLmZpbmRUYXJnZXQodGFyZ2V0TmFtZSkgfHwgdGhpcy5maW5kTGVnYWN5VGFyZ2V0KHRhcmdldE5hbWUpLCB1bmRlZmluZWQpO1xuICAgIH1cbiAgICBmaW5kQWxsKC4uLnRhcmdldE5hbWVzKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXROYW1lcy5yZWR1Y2UoKHRhcmdldHMsIHRhcmdldE5hbWUpID0+IFtcbiAgICAgICAgICAgIC4uLnRhcmdldHMsXG4gICAgICAgICAgICAuLi50aGlzLmZpbmRBbGxUYXJnZXRzKHRhcmdldE5hbWUpLFxuICAgICAgICAgICAgLi4udGhpcy5maW5kQWxsTGVnYWN5VGFyZ2V0cyh0YXJnZXROYW1lKSxcbiAgICAgICAgXSwgW10pO1xuICAgIH1cbiAgICBmaW5kVGFyZ2V0KHRhcmdldE5hbWUpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLmdldFNlbGVjdG9yRm9yVGFyZ2V0TmFtZSh0YXJnZXROYW1lKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZmluZEVsZW1lbnQoc2VsZWN0b3IpO1xuICAgIH1cbiAgICBmaW5kQWxsVGFyZ2V0cyh0YXJnZXROYW1lKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gdGhpcy5nZXRTZWxlY3RvckZvclRhcmdldE5hbWUodGFyZ2V0TmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmZpbmRBbGxFbGVtZW50cyhzZWxlY3Rvcik7XG4gICAgfVxuICAgIGdldFNlbGVjdG9yRm9yVGFyZ2V0TmFtZSh0YXJnZXROYW1lKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSB0aGlzLnNjaGVtYS50YXJnZXRBdHRyaWJ1dGVGb3JTY29wZSh0aGlzLmlkZW50aWZpZXIpO1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlVmFsdWVDb250YWluc1Rva2VuKGF0dHJpYnV0ZU5hbWUsIHRhcmdldE5hbWUpO1xuICAgIH1cbiAgICBmaW5kTGVnYWN5VGFyZ2V0KHRhcmdldE5hbWUpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLmdldExlZ2FjeVNlbGVjdG9yRm9yVGFyZ2V0TmFtZSh0YXJnZXROYW1lKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwcmVjYXRlKHRoaXMuc2NvcGUuZmluZEVsZW1lbnQoc2VsZWN0b3IpLCB0YXJnZXROYW1lKTtcbiAgICB9XG4gICAgZmluZEFsbExlZ2FjeVRhcmdldHModGFyZ2V0TmFtZSkge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMuZ2V0TGVnYWN5U2VsZWN0b3JGb3JUYXJnZXROYW1lKHRhcmdldE5hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5maW5kQWxsRWxlbWVudHMoc2VsZWN0b3IpLm1hcCgoZWxlbWVudCkgPT4gdGhpcy5kZXByZWNhdGUoZWxlbWVudCwgdGFyZ2V0TmFtZSkpO1xuICAgIH1cbiAgICBnZXRMZWdhY3lTZWxlY3RvckZvclRhcmdldE5hbWUodGFyZ2V0TmFtZSkge1xuICAgICAgICBjb25zdCB0YXJnZXREZXNjcmlwdG9yID0gYCR7dGhpcy5pZGVudGlmaWVyfS4ke3RhcmdldE5hbWV9YDtcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlQ29udGFpbnNUb2tlbih0aGlzLnNjaGVtYS50YXJnZXRBdHRyaWJ1dGUsIHRhcmdldERlc2NyaXB0b3IpO1xuICAgIH1cbiAgICBkZXByZWNhdGUoZWxlbWVudCwgdGFyZ2V0TmFtZSkge1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IHRoaXMuc2NoZW1hLnRhcmdldEF0dHJpYnV0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJldmlzZWRBdHRyaWJ1dGVOYW1lID0gdGhpcy5zY2hlbWEudGFyZ2V0QXR0cmlidXRlRm9yU2NvcGUoaWRlbnRpZmllcik7XG4gICAgICAgICAgICB0aGlzLmd1aWRlLndhcm4oZWxlbWVudCwgYHRhcmdldDoke3RhcmdldE5hbWV9YCwgYFBsZWFzZSByZXBsYWNlICR7YXR0cmlidXRlTmFtZX09XCIke2lkZW50aWZpZXJ9LiR7dGFyZ2V0TmFtZX1cIiB3aXRoICR7cmV2aXNlZEF0dHJpYnV0ZU5hbWV9PVwiJHt0YXJnZXROYW1lfVwiLiBgICtcbiAgICAgICAgICAgICAgICBgVGhlICR7YXR0cmlidXRlTmFtZX0gYXR0cmlidXRlIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uIG9mIFN0aW11bHVzLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBnZXQgZ3VpZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmd1aWRlO1xuICAgIH1cbn1cblxuY2xhc3MgT3V0bGV0U2V0IHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgY29udHJvbGxlckVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXJFbGVtZW50ID0gY29udHJvbGxlckVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5lbGVtZW50O1xuICAgIH1cbiAgICBnZXQgaWRlbnRpZmllcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuaWRlbnRpZmllcjtcbiAgICB9XG4gICAgZ2V0IHNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuc2NoZW1hO1xuICAgIH1cbiAgICBoYXMob3V0bGV0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5maW5kKG91dGxldE5hbWUpICE9IG51bGw7XG4gICAgfVxuICAgIGZpbmQoLi4ub3V0bGV0TmFtZXMpIHtcbiAgICAgICAgcmV0dXJuIG91dGxldE5hbWVzLnJlZHVjZSgob3V0bGV0LCBvdXRsZXROYW1lKSA9PiBvdXRsZXQgfHwgdGhpcy5maW5kT3V0bGV0KG91dGxldE5hbWUpLCB1bmRlZmluZWQpO1xuICAgIH1cbiAgICBmaW5kQWxsKC4uLm91dGxldE5hbWVzKSB7XG4gICAgICAgIHJldHVybiBvdXRsZXROYW1lcy5yZWR1Y2UoKG91dGxldHMsIG91dGxldE5hbWUpID0+IFsuLi5vdXRsZXRzLCAuLi50aGlzLmZpbmRBbGxPdXRsZXRzKG91dGxldE5hbWUpXSwgW10pO1xuICAgIH1cbiAgICBnZXRTZWxlY3RvckZvck91dGxldE5hbWUob3V0bGV0TmFtZSkge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gdGhpcy5zY2hlbWEub3V0bGV0QXR0cmlidXRlRm9yU2NvcGUodGhpcy5pZGVudGlmaWVyLCBvdXRsZXROYW1lKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbGxlckVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgIH1cbiAgICBmaW5kT3V0bGV0KG91dGxldE5hbWUpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLmdldFNlbGVjdG9yRm9yT3V0bGV0TmFtZShvdXRsZXROYW1lKTtcbiAgICAgICAgaWYgKHNlbGVjdG9yKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZEVsZW1lbnQoc2VsZWN0b3IsIG91dGxldE5hbWUpO1xuICAgIH1cbiAgICBmaW5kQWxsT3V0bGV0cyhvdXRsZXROYW1lKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gdGhpcy5nZXRTZWxlY3RvckZvck91dGxldE5hbWUob3V0bGV0TmFtZSk7XG4gICAgICAgIHJldHVybiBzZWxlY3RvciA/IHRoaXMuZmluZEFsbEVsZW1lbnRzKHNlbGVjdG9yLCBvdXRsZXROYW1lKSA6IFtdO1xuICAgIH1cbiAgICBmaW5kRWxlbWVudChzZWxlY3Rvciwgb3V0bGV0TmFtZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuc2NvcGUucXVlcnlFbGVtZW50cyhzZWxlY3Rvcik7XG4gICAgICAgIHJldHVybiBlbGVtZW50cy5maWx0ZXIoKGVsZW1lbnQpID0+IHRoaXMubWF0Y2hlc0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3IsIG91dGxldE5hbWUpKVswXTtcbiAgICB9XG4gICAgZmluZEFsbEVsZW1lbnRzKHNlbGVjdG9yLCBvdXRsZXROYW1lKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5zY29wZS5xdWVyeUVsZW1lbnRzKHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzLmZpbHRlcigoZWxlbWVudCkgPT4gdGhpcy5tYXRjaGVzRWxlbWVudChlbGVtZW50LCBzZWxlY3Rvciwgb3V0bGV0TmFtZSkpO1xuICAgIH1cbiAgICBtYXRjaGVzRWxlbWVudChlbGVtZW50LCBzZWxlY3Rvciwgb3V0bGV0TmFtZSkge1xuICAgICAgICBjb25zdCBjb250cm9sbGVyQXR0cmlidXRlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUodGhpcy5zY29wZS5zY2hlbWEuY29udHJvbGxlckF0dHJpYnV0ZSkgfHwgXCJcIjtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikgJiYgY29udHJvbGxlckF0dHJpYnV0ZS5zcGxpdChcIiBcIikuaW5jbHVkZXMob3V0bGV0TmFtZSk7XG4gICAgfVxufVxuXG5jbGFzcyBTY29wZSB7XG4gICAgY29uc3RydWN0b3Ioc2NoZW1hLCBlbGVtZW50LCBpZGVudGlmaWVyLCBsb2dnZXIpIHtcbiAgICAgICAgdGhpcy50YXJnZXRzID0gbmV3IFRhcmdldFNldCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gbmV3IENsYXNzTWFwKHRoaXMpO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgRGF0YU1hcCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb250YWluc0VsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdCh0aGlzLmNvbnRyb2xsZXJTZWxlY3RvcikgPT09IHRoaXMuZWxlbWVudDtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gICAgICAgIHRoaXMuZ3VpZGUgPSBuZXcgR3VpZGUobG9nZ2VyKTtcbiAgICAgICAgdGhpcy5vdXRsZXRzID0gbmV3IE91dGxldFNldCh0aGlzLmRvY3VtZW50U2NvcGUsIGVsZW1lbnQpO1xuICAgIH1cbiAgICBmaW5kRWxlbWVudChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpID8gdGhpcy5lbGVtZW50IDogdGhpcy5xdWVyeUVsZW1lbnRzKHNlbGVjdG9yKS5maW5kKHRoaXMuY29udGFpbnNFbGVtZW50KTtcbiAgICB9XG4gICAgZmluZEFsbEVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi4odGhpcy5lbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpID8gW3RoaXMuZWxlbWVudF0gOiBbXSksXG4gICAgICAgICAgICAuLi50aGlzLnF1ZXJ5RWxlbWVudHMoc2VsZWN0b3IpLmZpbHRlcih0aGlzLmNvbnRhaW5zRWxlbWVudCksXG4gICAgICAgIF07XG4gICAgfVxuICAgIHF1ZXJ5RWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgICB9XG4gICAgZ2V0IGNvbnRyb2xsZXJTZWxlY3RvcigpIHtcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlQ29udGFpbnNUb2tlbih0aGlzLnNjaGVtYS5jb250cm9sbGVyQXR0cmlidXRlLCB0aGlzLmlkZW50aWZpZXIpO1xuICAgIH1cbiAgICBnZXQgaXNEb2N1bWVudFNjb3BlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBkb2N1bWVudFNjb3BlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0RvY3VtZW50U2NvcGVcbiAgICAgICAgICAgID8gdGhpc1xuICAgICAgICAgICAgOiBuZXcgU2NvcGUodGhpcy5zY2hlbWEsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdGhpcy5pZGVudGlmaWVyLCB0aGlzLmd1aWRlLmxvZ2dlcik7XG4gICAgfVxufVxuXG5jbGFzcyBTY29wZU9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBzY2hlbWEsIGRlbGVnYXRlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIHRoaXMudmFsdWVMaXN0T2JzZXJ2ZXIgPSBuZXcgVmFsdWVMaXN0T2JzZXJ2ZXIodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRyb2xsZXJBdHRyaWJ1dGUsIHRoaXMpO1xuICAgICAgICB0aGlzLnNjb3Blc0J5SWRlbnRpZmllckJ5RWxlbWVudCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIHRoaXMuc2NvcGVSZWZlcmVuY2VDb3VudHMgPSBuZXcgV2Vha01hcCgpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy52YWx1ZUxpc3RPYnNlcnZlci5zdGFydCgpO1xuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnZhbHVlTGlzdE9ic2VydmVyLnN0b3AoKTtcbiAgICB9XG4gICAgZ2V0IGNvbnRyb2xsZXJBdHRyaWJ1dGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb250cm9sbGVyQXR0cmlidXRlO1xuICAgIH1cbiAgICBwYXJzZVZhbHVlRm9yVG9rZW4odG9rZW4pIHtcbiAgICAgICAgY29uc3QgeyBlbGVtZW50LCBjb250ZW50OiBpZGVudGlmaWVyIH0gPSB0b2tlbjtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VWYWx1ZUZvckVsZW1lbnRBbmRJZGVudGlmaWVyKGVsZW1lbnQsIGlkZW50aWZpZXIpO1xuICAgIH1cbiAgICBwYXJzZVZhbHVlRm9yRWxlbWVudEFuZElkZW50aWZpZXIoZWxlbWVudCwgaWRlbnRpZmllcikge1xuICAgICAgICBjb25zdCBzY29wZXNCeUlkZW50aWZpZXIgPSB0aGlzLmZldGNoU2NvcGVzQnlJZGVudGlmaWVyRm9yRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgbGV0IHNjb3BlID0gc2NvcGVzQnlJZGVudGlmaWVyLmdldChpZGVudGlmaWVyKTtcbiAgICAgICAgaWYgKCFzY29wZSkge1xuICAgICAgICAgICAgc2NvcGUgPSB0aGlzLmRlbGVnYXRlLmNyZWF0ZVNjb3BlRm9yRWxlbWVudEFuZElkZW50aWZpZXIoZWxlbWVudCwgaWRlbnRpZmllcik7XG4gICAgICAgICAgICBzY29wZXNCeUlkZW50aWZpZXIuc2V0KGlkZW50aWZpZXIsIHNjb3BlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NvcGU7XG4gICAgfVxuICAgIGVsZW1lbnRNYXRjaGVkVmFsdWUoZWxlbWVudCwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlQ291bnQgPSAodGhpcy5zY29wZVJlZmVyZW5jZUNvdW50cy5nZXQodmFsdWUpIHx8IDApICsgMTtcbiAgICAgICAgdGhpcy5zY29wZVJlZmVyZW5jZUNvdW50cy5zZXQodmFsdWUsIHJlZmVyZW5jZUNvdW50KTtcbiAgICAgICAgaWYgKHJlZmVyZW5jZUNvdW50ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuc2NvcGVDb25uZWN0ZWQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnRVbm1hdGNoZWRWYWx1ZShlbGVtZW50LCB2YWx1ZSkge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VDb3VudCA9IHRoaXMuc2NvcGVSZWZlcmVuY2VDb3VudHMuZ2V0KHZhbHVlKTtcbiAgICAgICAgaWYgKHJlZmVyZW5jZUNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlUmVmZXJlbmNlQ291bnRzLnNldCh2YWx1ZSwgcmVmZXJlbmNlQ291bnQgLSAxKTtcbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VDb3VudCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5zY29wZURpc2Nvbm5lY3RlZCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hTY29wZXNCeUlkZW50aWZpZXJGb3JFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgbGV0IHNjb3Blc0J5SWRlbnRpZmllciA9IHRoaXMuc2NvcGVzQnlJZGVudGlmaWVyQnlFbGVtZW50LmdldChlbGVtZW50KTtcbiAgICAgICAgaWYgKCFzY29wZXNCeUlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHNjb3Blc0J5SWRlbnRpZmllciA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHRoaXMuc2NvcGVzQnlJZGVudGlmaWVyQnlFbGVtZW50LnNldChlbGVtZW50LCBzY29wZXNCeUlkZW50aWZpZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY29wZXNCeUlkZW50aWZpZXI7XG4gICAgfVxufVxuXG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGFwcGxpY2F0aW9uKSB7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb24gPSBhcHBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy5zY29wZU9ic2VydmVyID0gbmV3IFNjb3BlT2JzZXJ2ZXIodGhpcy5lbGVtZW50LCB0aGlzLnNjaGVtYSwgdGhpcyk7XG4gICAgICAgIHRoaXMuc2NvcGVzQnlJZGVudGlmaWVyID0gbmV3IE11bHRpbWFwKCk7XG4gICAgICAgIHRoaXMubW9kdWxlc0J5SWRlbnRpZmllciA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLmVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBzY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLnNjaGVtYTtcbiAgICB9XG4gICAgZ2V0IGxvZ2dlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24ubG9nZ2VyO1xuICAgIH1cbiAgICBnZXQgY29udHJvbGxlckF0dHJpYnV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnRyb2xsZXJBdHRyaWJ1dGU7XG4gICAgfVxuICAgIGdldCBtb2R1bGVzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLm1vZHVsZXNCeUlkZW50aWZpZXIudmFsdWVzKCkpO1xuICAgIH1cbiAgICBnZXQgY29udGV4dHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZXMucmVkdWNlKChjb250ZXh0cywgbW9kdWxlKSA9PiBjb250ZXh0cy5jb25jYXQobW9kdWxlLmNvbnRleHRzKSwgW10pO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5zY29wZU9ic2VydmVyLnN0YXJ0KCk7XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuc2NvcGVPYnNlcnZlci5zdG9wKCk7XG4gICAgfVxuICAgIGxvYWREZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICAgICAgdGhpcy51bmxvYWRJZGVudGlmaWVyKGRlZmluaXRpb24uaWRlbnRpZmllcik7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG5ldyBNb2R1bGUodGhpcy5hcHBsaWNhdGlvbiwgZGVmaW5pdGlvbik7XG4gICAgICAgIHRoaXMuY29ubmVjdE1vZHVsZShtb2R1bGUpO1xuICAgICAgICBjb25zdCBhZnRlckxvYWQgPSBkZWZpbml0aW9uLmNvbnRyb2xsZXJDb25zdHJ1Y3Rvci5hZnRlckxvYWQ7XG4gICAgICAgIGlmIChhZnRlckxvYWQpIHtcbiAgICAgICAgICAgIGFmdGVyTG9hZC5jYWxsKGRlZmluaXRpb24uY29udHJvbGxlckNvbnN0cnVjdG9yLCBkZWZpbml0aW9uLmlkZW50aWZpZXIsIHRoaXMuYXBwbGljYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVubG9hZElkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLm1vZHVsZXNCeUlkZW50aWZpZXIuZ2V0KGlkZW50aWZpZXIpO1xuICAgICAgICBpZiAobW9kdWxlKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RNb2R1bGUobW9kdWxlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDb250ZXh0Rm9yRWxlbWVudEFuZElkZW50aWZpZXIoZWxlbWVudCwgaWRlbnRpZmllcikge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLm1vZHVsZXNCeUlkZW50aWZpZXIuZ2V0KGlkZW50aWZpZXIpO1xuICAgICAgICBpZiAobW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlLmNvbnRleHRzLmZpbmQoKGNvbnRleHQpID0+IGNvbnRleHQuZWxlbWVudCA9PSBlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9wb3NlVG9Db25uZWN0U2NvcGVGb3JFbGVtZW50QW5kSWRlbnRpZmllcihlbGVtZW50LCBpZGVudGlmaWVyKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcy5zY29wZU9ic2VydmVyLnBhcnNlVmFsdWVGb3JFbGVtZW50QW5kSWRlbnRpZmllcihlbGVtZW50LCBpZGVudGlmaWVyKTtcbiAgICAgICAgaWYgKHNjb3BlKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlT2JzZXJ2ZXIuZWxlbWVudE1hdGNoZWRWYWx1ZShzY29wZS5lbGVtZW50LCBzY29wZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBDb3VsZG4ndCBmaW5kIG9yIGNyZWF0ZSBzY29wZSBmb3IgaWRlbnRpZmllcjogXCIke2lkZW50aWZpZXJ9XCIgYW5kIGVsZW1lbnQ6YCwgZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlRXJyb3IoZXJyb3IsIG1lc3NhZ2UsIGRldGFpbCkge1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLmhhbmRsZUVycm9yKGVycm9yLCBtZXNzYWdlLCBkZXRhaWwpO1xuICAgIH1cbiAgICBjcmVhdGVTY29wZUZvckVsZW1lbnRBbmRJZGVudGlmaWVyKGVsZW1lbnQsIGlkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTY29wZSh0aGlzLnNjaGVtYSwgZWxlbWVudCwgaWRlbnRpZmllciwgdGhpcy5sb2dnZXIpO1xuICAgIH1cbiAgICBzY29wZUNvbm5lY3RlZChzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3Blc0J5SWRlbnRpZmllci5hZGQoc2NvcGUuaWRlbnRpZmllciwgc2NvcGUpO1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLm1vZHVsZXNCeUlkZW50aWZpZXIuZ2V0KHNjb3BlLmlkZW50aWZpZXIpO1xuICAgICAgICBpZiAobW9kdWxlKSB7XG4gICAgICAgICAgICBtb2R1bGUuY29ubmVjdENvbnRleHRGb3JTY29wZShzY29wZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2NvcGVEaXNjb25uZWN0ZWQoc2NvcGUpIHtcbiAgICAgICAgdGhpcy5zY29wZXNCeUlkZW50aWZpZXIuZGVsZXRlKHNjb3BlLmlkZW50aWZpZXIsIHNjb3BlKTtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5tb2R1bGVzQnlJZGVudGlmaWVyLmdldChzY29wZS5pZGVudGlmaWVyKTtcbiAgICAgICAgaWYgKG1vZHVsZSkge1xuICAgICAgICAgICAgbW9kdWxlLmRpc2Nvbm5lY3RDb250ZXh0Rm9yU2NvcGUoc2NvcGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbm5lY3RNb2R1bGUobW9kdWxlKSB7XG4gICAgICAgIHRoaXMubW9kdWxlc0J5SWRlbnRpZmllci5zZXQobW9kdWxlLmlkZW50aWZpZXIsIG1vZHVsZSk7XG4gICAgICAgIGNvbnN0IHNjb3BlcyA9IHRoaXMuc2NvcGVzQnlJZGVudGlmaWVyLmdldFZhbHVlc0ZvcktleShtb2R1bGUuaWRlbnRpZmllcik7XG4gICAgICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gbW9kdWxlLmNvbm5lY3RDb250ZXh0Rm9yU2NvcGUoc2NvcGUpKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdE1vZHVsZShtb2R1bGUpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzQnlJZGVudGlmaWVyLmRlbGV0ZShtb2R1bGUuaWRlbnRpZmllcik7XG4gICAgICAgIGNvbnN0IHNjb3BlcyA9IHRoaXMuc2NvcGVzQnlJZGVudGlmaWVyLmdldFZhbHVlc0ZvcktleShtb2R1bGUuaWRlbnRpZmllcik7XG4gICAgICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gbW9kdWxlLmRpc2Nvbm5lY3RDb250ZXh0Rm9yU2NvcGUoc2NvcGUpKTtcbiAgICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY2hlbWEgPSB7XG4gICAgY29udHJvbGxlckF0dHJpYnV0ZTogXCJkYXRhLWNvbnRyb2xsZXJcIixcbiAgICBhY3Rpb25BdHRyaWJ1dGU6IFwiZGF0YS1hY3Rpb25cIixcbiAgICB0YXJnZXRBdHRyaWJ1dGU6IFwiZGF0YS10YXJnZXRcIixcbiAgICB0YXJnZXRBdHRyaWJ1dGVGb3JTY29wZTogKGlkZW50aWZpZXIpID0+IGBkYXRhLSR7aWRlbnRpZmllcn0tdGFyZ2V0YCxcbiAgICBvdXRsZXRBdHRyaWJ1dGVGb3JTY29wZTogKGlkZW50aWZpZXIsIG91dGxldCkgPT4gYGRhdGEtJHtpZGVudGlmaWVyfS0ke291dGxldH0tb3V0bGV0YCxcbiAgICBrZXlNYXBwaW5nczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgZW50ZXI6IFwiRW50ZXJcIiwgdGFiOiBcIlRhYlwiLCBlc2M6IFwiRXNjYXBlXCIsIHNwYWNlOiBcIiBcIiwgdXA6IFwiQXJyb3dVcFwiLCBkb3duOiBcIkFycm93RG93blwiLCBsZWZ0OiBcIkFycm93TGVmdFwiLCByaWdodDogXCJBcnJvd1JpZ2h0XCIsIGhvbWU6IFwiSG9tZVwiLCBlbmQ6IFwiRW5kXCIsIHBhZ2VfdXA6IFwiUGFnZVVwXCIsIHBhZ2VfZG93bjogXCJQYWdlRG93blwiIH0sIG9iamVjdEZyb21FbnRyaWVzKFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIi5zcGxpdChcIlwiKS5tYXAoKGMpID0+IFtjLCBjXSkpKSwgb2JqZWN0RnJvbUVudHJpZXMoXCIwMTIzNDU2Nzg5XCIuc3BsaXQoXCJcIikubWFwKChuKSA9PiBbbiwgbl0pKSksXG59O1xuZnVuY3Rpb24gb2JqZWN0RnJvbUVudHJpZXMoYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChtZW1vLCBbaywgdl0pID0+IChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG1lbW8pLCB7IFtrXTogdiB9KSksIHt9KTtcbn1cblxuY2xhc3MgQXBwbGljYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHNjaGVtYSA9IGRlZmF1bHRTY2hlbWEpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xuICAgICAgICB0aGlzLmRlYnVnID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9nRGVidWdBY3Rpdml0eSA9IChpZGVudGlmaWVyLCBmdW5jdGlvbk5hbWUsIGRldGFpbCA9IHt9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nRm9ybWF0dGVkTWVzc2FnZShpZGVudGlmaWVyLCBmdW5jdGlvbk5hbWUsIGRldGFpbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIgPSBuZXcgRGlzcGF0Y2hlcih0aGlzKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSBuZXcgUm91dGVyKHRoaXMpO1xuICAgICAgICB0aGlzLmFjdGlvbkRlc2NyaXB0b3JGaWx0ZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdEFjdGlvbkRlc2NyaXB0b3JGaWx0ZXJzKTtcbiAgICB9XG4gICAgc3RhdGljIHN0YXJ0KGVsZW1lbnQsIHNjaGVtYSkge1xuICAgICAgICBjb25zdCBhcHBsaWNhdGlvbiA9IG5ldyB0aGlzKGVsZW1lbnQsIHNjaGVtYSk7XG4gICAgICAgIGFwcGxpY2F0aW9uLnN0YXJ0KCk7XG4gICAgICAgIHJldHVybiBhcHBsaWNhdGlvbjtcbiAgICB9XG4gICAgYXN5bmMgc3RhcnQoKSB7XG4gICAgICAgIGF3YWl0IGRvbVJlYWR5KCk7XG4gICAgICAgIHRoaXMubG9nRGVidWdBY3Rpdml0eShcImFwcGxpY2F0aW9uXCIsIFwic3RhcnRpbmdcIik7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5zdGFydCgpO1xuICAgICAgICB0aGlzLnJvdXRlci5zdGFydCgpO1xuICAgICAgICB0aGlzLmxvZ0RlYnVnQWN0aXZpdHkoXCJhcHBsaWNhdGlvblwiLCBcInN0YXJ0XCIpO1xuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmxvZ0RlYnVnQWN0aXZpdHkoXCJhcHBsaWNhdGlvblwiLCBcInN0b3BwaW5nXCIpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuc3RvcCgpO1xuICAgICAgICB0aGlzLnJvdXRlci5zdG9wKCk7XG4gICAgICAgIHRoaXMubG9nRGVidWdBY3Rpdml0eShcImFwcGxpY2F0aW9uXCIsIFwic3RvcFwiKTtcbiAgICB9XG4gICAgcmVnaXN0ZXIoaWRlbnRpZmllciwgY29udHJvbGxlckNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHRoaXMubG9hZCh7IGlkZW50aWZpZXIsIGNvbnRyb2xsZXJDb25zdHJ1Y3RvciB9KTtcbiAgICB9XG4gICAgcmVnaXN0ZXJBY3Rpb25PcHRpb24obmFtZSwgZmlsdGVyKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uRGVzY3JpcHRvckZpbHRlcnNbbmFtZV0gPSBmaWx0ZXI7XG4gICAgfVxuICAgIGxvYWQoaGVhZCwgLi4ucmVzdCkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9ucyA9IEFycmF5LmlzQXJyYXkoaGVhZCkgPyBoZWFkIDogW2hlYWQsIC4uLnJlc3RdO1xuICAgICAgICBkZWZpbml0aW9ucy5mb3JFYWNoKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbi5jb250cm9sbGVyQ29uc3RydWN0b3Iuc2hvdWxkTG9hZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLmxvYWREZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdW5sb2FkKGhlYWQsIC4uLnJlc3QpIHtcbiAgICAgICAgY29uc3QgaWRlbnRpZmllcnMgPSBBcnJheS5pc0FycmF5KGhlYWQpID8gaGVhZCA6IFtoZWFkLCAuLi5yZXN0XTtcbiAgICAgICAgaWRlbnRpZmllcnMuZm9yRWFjaCgoaWRlbnRpZmllcikgPT4gdGhpcy5yb3V0ZXIudW5sb2FkSWRlbnRpZmllcihpZGVudGlmaWVyKSk7XG4gICAgfVxuICAgIGdldCBjb250cm9sbGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLmNvbnRleHRzLm1hcCgoY29udGV4dCkgPT4gY29udGV4dC5jb250cm9sbGVyKTtcbiAgICB9XG4gICAgZ2V0Q29udHJvbGxlckZvckVsZW1lbnRBbmRJZGVudGlmaWVyKGVsZW1lbnQsIGlkZW50aWZpZXIpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMucm91dGVyLmdldENvbnRleHRGb3JFbGVtZW50QW5kSWRlbnRpZmllcihlbGVtZW50LCBpZGVudGlmaWVyKTtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQgPyBjb250ZXh0LmNvbnRyb2xsZXIgOiBudWxsO1xuICAgIH1cbiAgICBoYW5kbGVFcnJvcihlcnJvciwgbWVzc2FnZSwgZGV0YWlsKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYCVzXFxuXFxuJW9cXG5cXG4lb2AsIG1lc3NhZ2UsIGVycm9yLCBkZXRhaWwpO1xuICAgICAgICAoX2EgPSB3aW5kb3cub25lcnJvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwod2luZG93LCBtZXNzYWdlLCBcIlwiLCAwLCAwLCBlcnJvcik7XG4gICAgfVxuICAgIGxvZ0Zvcm1hdHRlZE1lc3NhZ2UoaWRlbnRpZmllciwgZnVuY3Rpb25OYW1lLCBkZXRhaWwgPSB7fSkge1xuICAgICAgICBkZXRhaWwgPSBPYmplY3QuYXNzaWduKHsgYXBwbGljYXRpb246IHRoaXMgfSwgZGV0YWlsKTtcbiAgICAgICAgdGhpcy5sb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYCR7aWRlbnRpZmllcn0gIyR7ZnVuY3Rpb25OYW1lfWApO1xuICAgICAgICB0aGlzLmxvZ2dlci5sb2coXCJkZXRhaWxzOlwiLCBPYmplY3QuYXNzaWduKHt9LCBkZXRhaWwpKTtcbiAgICAgICAgdGhpcy5sb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkb21SZWFkeSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHJlc29sdmUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gQ2xhc3NQcm9wZXJ0aWVzQmxlc3NpbmcoY29uc3RydWN0b3IpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gcmVhZEluaGVyaXRhYmxlU3RhdGljQXJyYXlWYWx1ZXMoY29uc3RydWN0b3IsIFwiY2xhc3Nlc1wiKTtcbiAgICByZXR1cm4gY2xhc3Nlcy5yZWR1Y2UoKHByb3BlcnRpZXMsIGNsYXNzRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCBwcm9wZXJ0aWVzRm9yQ2xhc3NEZWZpbml0aW9uKGNsYXNzRGVmaW5pdGlvbikpO1xuICAgIH0sIHt9KTtcbn1cbmZ1bmN0aW9uIHByb3BlcnRpZXNGb3JDbGFzc0RlZmluaXRpb24oa2V5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgW2Ake2tleX1DbGFzc2BdOiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmIChjbGFzc2VzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc2VzLmdldChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gY2xhc3Nlcy5nZXRBdHRyaWJ1dGVOYW1lKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBhdHRyaWJ1dGUgXCIke2F0dHJpYnV0ZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtgJHtrZXl9Q2xhc3Nlc2BdOiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3Nlcy5nZXRBbGwoa2V5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtgaGFzJHtjYXBpdGFsaXplKGtleSl9Q2xhc3NgXToge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNsYXNzZXMuaGFzKGtleSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIE91dGxldFByb3BlcnRpZXNCbGVzc2luZyhjb25zdHJ1Y3Rvcikge1xuICAgIGNvbnN0IG91dGxldHMgPSByZWFkSW5oZXJpdGFibGVTdGF0aWNBcnJheVZhbHVlcyhjb25zdHJ1Y3RvciwgXCJvdXRsZXRzXCIpO1xuICAgIHJldHVybiBvdXRsZXRzLnJlZHVjZSgocHJvcGVydGllcywgb3V0bGV0RGVmaW5pdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCBwcm9wZXJ0aWVzRm9yT3V0bGV0RGVmaW5pdGlvbihvdXRsZXREZWZpbml0aW9uKSk7XG4gICAgfSwge30pO1xufVxuZnVuY3Rpb24gZ2V0T3V0bGV0Q29udHJvbGxlcihjb250cm9sbGVyLCBlbGVtZW50LCBpZGVudGlmaWVyKSB7XG4gICAgcmV0dXJuIGNvbnRyb2xsZXIuYXBwbGljYXRpb24uZ2V0Q29udHJvbGxlckZvckVsZW1lbnRBbmRJZGVudGlmaWVyKGVsZW1lbnQsIGlkZW50aWZpZXIpO1xufVxuZnVuY3Rpb24gZ2V0Q29udHJvbGxlckFuZEVuc3VyZUNvbm5lY3RlZFNjb3BlKGNvbnRyb2xsZXIsIGVsZW1lbnQsIG91dGxldE5hbWUpIHtcbiAgICBsZXQgb3V0bGV0Q29udHJvbGxlciA9IGdldE91dGxldENvbnRyb2xsZXIoY29udHJvbGxlciwgZWxlbWVudCwgb3V0bGV0TmFtZSk7XG4gICAgaWYgKG91dGxldENvbnRyb2xsZXIpXG4gICAgICAgIHJldHVybiBvdXRsZXRDb250cm9sbGVyO1xuICAgIGNvbnRyb2xsZXIuYXBwbGljYXRpb24ucm91dGVyLnByb3Bvc2VUb0Nvbm5lY3RTY29wZUZvckVsZW1lbnRBbmRJZGVudGlmaWVyKGVsZW1lbnQsIG91dGxldE5hbWUpO1xuICAgIG91dGxldENvbnRyb2xsZXIgPSBnZXRPdXRsZXRDb250cm9sbGVyKGNvbnRyb2xsZXIsIGVsZW1lbnQsIG91dGxldE5hbWUpO1xuICAgIGlmIChvdXRsZXRDb250cm9sbGVyKVxuICAgICAgICByZXR1cm4gb3V0bGV0Q29udHJvbGxlcjtcbn1cbmZ1bmN0aW9uIHByb3BlcnRpZXNGb3JPdXRsZXREZWZpbml0aW9uKG5hbWUpIHtcbiAgICBjb25zdCBjYW1lbGl6ZWROYW1lID0gbmFtZXNwYWNlQ2FtZWxpemUobmFtZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgW2Ake2NhbWVsaXplZE5hbWV9T3V0bGV0YF06IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRsZXRFbGVtZW50ID0gdGhpcy5vdXRsZXRzLmZpbmQobmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLm91dGxldHMuZ2V0U2VsZWN0b3JGb3JPdXRsZXROYW1lKG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChvdXRsZXRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dGxldENvbnRyb2xsZXIgPSBnZXRDb250cm9sbGVyQW5kRW5zdXJlQ29ubmVjdGVkU2NvcGUodGhpcywgb3V0bGV0RWxlbWVudCwgbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvdXRsZXRDb250cm9sbGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dGxldENvbnRyb2xsZXI7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHByb3ZpZGVkIG91dGxldCBlbGVtZW50IGlzIG1pc3NpbmcgYW4gb3V0bGV0IGNvbnRyb2xsZXIgXCIke25hbWV9XCIgaW5zdGFuY2UgZm9yIGhvc3QgY29udHJvbGxlciBcIiR7dGhpcy5pZGVudGlmaWVyfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBvdXRsZXQgZWxlbWVudCBcIiR7bmFtZX1cIiBmb3IgaG9zdCBjb250cm9sbGVyIFwiJHt0aGlzLmlkZW50aWZpZXJ9XCIuIFN0aW11bHVzIGNvdWxkbid0IGZpbmQgYSBtYXRjaGluZyBvdXRsZXQgZWxlbWVudCB1c2luZyBzZWxlY3RvciBcIiR7c2VsZWN0b3J9XCIuYCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbYCR7Y2FtZWxpemVkTmFtZX1PdXRsZXRzYF06IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRsZXRzID0gdGhpcy5vdXRsZXRzLmZpbmRBbGwobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG91dGxldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3V0bGV0c1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgob3V0bGV0RWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0bGV0Q29udHJvbGxlciA9IGdldENvbnRyb2xsZXJBbmRFbnN1cmVDb25uZWN0ZWRTY29wZSh0aGlzLCBvdXRsZXRFbGVtZW50LCBuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRsZXRDb250cm9sbGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvdXRsZXRDb250cm9sbGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBUaGUgcHJvdmlkZWQgb3V0bGV0IGVsZW1lbnQgaXMgbWlzc2luZyBhbiBvdXRsZXQgY29udHJvbGxlciBcIiR7bmFtZX1cIiBpbnN0YW5jZSBmb3IgaG9zdCBjb250cm9sbGVyIFwiJHt0aGlzLmlkZW50aWZpZXJ9XCJgLCBvdXRsZXRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGNvbnRyb2xsZXIpID0+IGNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbYCR7Y2FtZWxpemVkTmFtZX1PdXRsZXRFbGVtZW50YF06IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRsZXRFbGVtZW50ID0gdGhpcy5vdXRsZXRzLmZpbmQobmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLm91dGxldHMuZ2V0U2VsZWN0b3JGb3JPdXRsZXROYW1lKG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChvdXRsZXRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdXRsZXRFbGVtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIG91dGxldCBlbGVtZW50IFwiJHtuYW1lfVwiIGZvciBob3N0IGNvbnRyb2xsZXIgXCIke3RoaXMuaWRlbnRpZmllcn1cIi4gU3RpbXVsdXMgY291bGRuJ3QgZmluZCBhIG1hdGNoaW5nIG91dGxldCBlbGVtZW50IHVzaW5nIHNlbGVjdG9yIFwiJHtzZWxlY3Rvcn1cIi5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbYCR7Y2FtZWxpemVkTmFtZX1PdXRsZXRFbGVtZW50c2BdOiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3V0bGV0cy5maW5kQWxsKG5hbWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW2BoYXMke2NhcGl0YWxpemUoY2FtZWxpemVkTmFtZSl9T3V0bGV0YF06IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vdXRsZXRzLmhhcyhuYW1lKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gVGFyZ2V0UHJvcGVydGllc0JsZXNzaW5nKGNvbnN0cnVjdG9yKSB7XG4gICAgY29uc3QgdGFyZ2V0cyA9IHJlYWRJbmhlcml0YWJsZVN0YXRpY0FycmF5VmFsdWVzKGNvbnN0cnVjdG9yLCBcInRhcmdldHNcIik7XG4gICAgcmV0dXJuIHRhcmdldHMucmVkdWNlKChwcm9wZXJ0aWVzLCB0YXJnZXREZWZpbml0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHByb3BlcnRpZXNGb3JUYXJnZXREZWZpbml0aW9uKHRhcmdldERlZmluaXRpb24pKTtcbiAgICB9LCB7fSk7XG59XG5mdW5jdGlvbiBwcm9wZXJ0aWVzRm9yVGFyZ2V0RGVmaW5pdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgW2Ake25hbWV9VGFyZ2V0YF06IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnRhcmdldHMuZmluZChuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgdGFyZ2V0IGVsZW1lbnQgXCIke25hbWV9XCIgZm9yIFwiJHt0aGlzLmlkZW50aWZpZXJ9XCIgY29udHJvbGxlcmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtgJHtuYW1lfVRhcmdldHNgXToge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRhcmdldHMuZmluZEFsbChuYW1lKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtgaGFzJHtjYXBpdGFsaXplKG5hbWUpfVRhcmdldGBdOiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5oYXMobmFtZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIFZhbHVlUHJvcGVydGllc0JsZXNzaW5nKGNvbnN0cnVjdG9yKSB7XG4gICAgY29uc3QgdmFsdWVEZWZpbml0aW9uUGFpcnMgPSByZWFkSW5oZXJpdGFibGVTdGF0aWNPYmplY3RQYWlycyhjb25zdHJ1Y3RvciwgXCJ2YWx1ZXNcIik7XG4gICAgY29uc3QgcHJvcGVydHlEZXNjcmlwdG9yTWFwID0ge1xuICAgICAgICB2YWx1ZURlc2NyaXB0b3JNYXA6IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVEZWZpbml0aW9uUGFpcnMucmVkdWNlKChyZXN1bHQsIHZhbHVlRGVmaW5pdGlvblBhaXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVEZXNjcmlwdG9yID0gcGFyc2VWYWx1ZURlZmluaXRpb25QYWlyKHZhbHVlRGVmaW5pdGlvblBhaXIsIHRoaXMuaWRlbnRpZmllcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmRhdGEuZ2V0QXR0cmlidXRlTmFtZUZvcktleSh2YWx1ZURlc2NyaXB0b3Iua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7IFthdHRyaWJ1dGVOYW1lXTogdmFsdWVEZXNjcmlwdG9yIH0pO1xuICAgICAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gdmFsdWVEZWZpbml0aW9uUGFpcnMucmVkdWNlKChwcm9wZXJ0aWVzLCB2YWx1ZURlZmluaXRpb25QYWlyKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHByb3BlcnRpZXNGb3JWYWx1ZURlZmluaXRpb25QYWlyKHZhbHVlRGVmaW5pdGlvblBhaXIpKTtcbiAgICB9LCBwcm9wZXJ0eURlc2NyaXB0b3JNYXApO1xufVxuZnVuY3Rpb24gcHJvcGVydGllc0ZvclZhbHVlRGVmaW5pdGlvblBhaXIodmFsdWVEZWZpbml0aW9uUGFpciwgY29udHJvbGxlcikge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBwYXJzZVZhbHVlRGVmaW5pdGlvblBhaXIodmFsdWVEZWZpbml0aW9uUGFpciwgY29udHJvbGxlcik7XG4gICAgY29uc3QgeyBrZXksIG5hbWUsIHJlYWRlcjogcmVhZCwgd3JpdGVyOiB3cml0ZSB9ID0gZGVmaW5pdGlvbjtcbiAgICByZXR1cm4ge1xuICAgICAgICBbbmFtZV06IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYWQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb24uZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc2V0KGtleSwgd3JpdGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbYGhhcyR7Y2FwaXRhbGl6ZShuYW1lKX1gXToge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuaGFzKGtleSkgfHwgZGVmaW5pdGlvbi5oYXNDdXN0b21EZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH07XG59XG5mdW5jdGlvbiBwYXJzZVZhbHVlRGVmaW5pdGlvblBhaXIoW3Rva2VuLCB0eXBlRGVmaW5pdGlvbl0sIGNvbnRyb2xsZXIpIHtcbiAgICByZXR1cm4gdmFsdWVEZXNjcmlwdG9yRm9yVG9rZW5BbmRUeXBlRGVmaW5pdGlvbih7XG4gICAgICAgIGNvbnRyb2xsZXIsXG4gICAgICAgIHRva2VuLFxuICAgICAgICB0eXBlRGVmaW5pdGlvbixcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHBhcnNlVmFsdWVUeXBlQ29uc3RhbnQoY29uc3RhbnQpIHtcbiAgICBzd2l0Y2ggKGNvbnN0YW50KSB7XG4gICAgICAgIGNhc2UgQXJyYXk6XG4gICAgICAgICAgICByZXR1cm4gXCJhcnJheVwiO1xuICAgICAgICBjYXNlIEJvb2xlYW46XG4gICAgICAgICAgICByZXR1cm4gXCJib29sZWFuXCI7XG4gICAgICAgIGNhc2UgTnVtYmVyOlxuICAgICAgICAgICAgcmV0dXJuIFwibnVtYmVyXCI7XG4gICAgICAgIGNhc2UgT2JqZWN0OlxuICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0XCI7XG4gICAgICAgIGNhc2UgU3RyaW5nOlxuICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCI7XG4gICAgfVxufVxuZnVuY3Rpb24gcGFyc2VWYWx1ZVR5cGVEZWZhdWx0KGRlZmF1bHRWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiYm9vbGVhblwiO1xuICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJudW1iZXJcIjtcbiAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCI7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGRlZmF1bHRWYWx1ZSkpXG4gICAgICAgIHJldHVybiBcImFycmF5XCI7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkZWZhdWx0VmFsdWUpID09PSBcIltvYmplY3QgT2JqZWN0XVwiKVxuICAgICAgICByZXR1cm4gXCJvYmplY3RcIjtcbn1cbmZ1bmN0aW9uIHBhcnNlVmFsdWVUeXBlT2JqZWN0KHBheWxvYWQpIHtcbiAgICBjb25zdCB7IGNvbnRyb2xsZXIsIHRva2VuLCB0eXBlT2JqZWN0IH0gPSBwYXlsb2FkO1xuICAgIGNvbnN0IGhhc1R5cGUgPSBpc1NvbWV0aGluZyh0eXBlT2JqZWN0LnR5cGUpO1xuICAgIGNvbnN0IGhhc0RlZmF1bHQgPSBpc1NvbWV0aGluZyh0eXBlT2JqZWN0LmRlZmF1bHQpO1xuICAgIGNvbnN0IGZ1bGxPYmplY3QgPSBoYXNUeXBlICYmIGhhc0RlZmF1bHQ7XG4gICAgY29uc3Qgb25seVR5cGUgPSBoYXNUeXBlICYmICFoYXNEZWZhdWx0O1xuICAgIGNvbnN0IG9ubHlEZWZhdWx0ID0gIWhhc1R5cGUgJiYgaGFzRGVmYXVsdDtcbiAgICBjb25zdCB0eXBlRnJvbU9iamVjdCA9IHBhcnNlVmFsdWVUeXBlQ29uc3RhbnQodHlwZU9iamVjdC50eXBlKTtcbiAgICBjb25zdCB0eXBlRnJvbURlZmF1bHRWYWx1ZSA9IHBhcnNlVmFsdWVUeXBlRGVmYXVsdChwYXlsb2FkLnR5cGVPYmplY3QuZGVmYXVsdCk7XG4gICAgaWYgKG9ubHlUeXBlKVxuICAgICAgICByZXR1cm4gdHlwZUZyb21PYmplY3Q7XG4gICAgaWYgKG9ubHlEZWZhdWx0KVxuICAgICAgICByZXR1cm4gdHlwZUZyb21EZWZhdWx0VmFsdWU7XG4gICAgaWYgKHR5cGVGcm9tT2JqZWN0ICE9PSB0eXBlRnJvbURlZmF1bHRWYWx1ZSkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVBhdGggPSBjb250cm9sbGVyID8gYCR7Y29udHJvbGxlcn0uJHt0b2tlbn1gIDogdG9rZW47XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHNwZWNpZmllZCBkZWZhdWx0IHZhbHVlIGZvciB0aGUgU3RpbXVsdXMgVmFsdWUgXCIke3Byb3BlcnR5UGF0aH1cIiBtdXN0IG1hdGNoIHRoZSBkZWZpbmVkIHR5cGUgXCIke3R5cGVGcm9tT2JqZWN0fVwiLiBUaGUgcHJvdmlkZWQgZGVmYXVsdCB2YWx1ZSBvZiBcIiR7dHlwZU9iamVjdC5kZWZhdWx0fVwiIGlzIG9mIHR5cGUgXCIke3R5cGVGcm9tRGVmYXVsdFZhbHVlfVwiLmApO1xuICAgIH1cbiAgICBpZiAoZnVsbE9iamVjdClcbiAgICAgICAgcmV0dXJuIHR5cGVGcm9tT2JqZWN0O1xufVxuZnVuY3Rpb24gcGFyc2VWYWx1ZVR5cGVEZWZpbml0aW9uKHBheWxvYWQpIHtcbiAgICBjb25zdCB7IGNvbnRyb2xsZXIsIHRva2VuLCB0eXBlRGVmaW5pdGlvbiB9ID0gcGF5bG9hZDtcbiAgICBjb25zdCB0eXBlT2JqZWN0ID0geyBjb250cm9sbGVyLCB0b2tlbiwgdHlwZU9iamVjdDogdHlwZURlZmluaXRpb24gfTtcbiAgICBjb25zdCB0eXBlRnJvbU9iamVjdCA9IHBhcnNlVmFsdWVUeXBlT2JqZWN0KHR5cGVPYmplY3QpO1xuICAgIGNvbnN0IHR5cGVGcm9tRGVmYXVsdFZhbHVlID0gcGFyc2VWYWx1ZVR5cGVEZWZhdWx0KHR5cGVEZWZpbml0aW9uKTtcbiAgICBjb25zdCB0eXBlRnJvbUNvbnN0YW50ID0gcGFyc2VWYWx1ZVR5cGVDb25zdGFudCh0eXBlRGVmaW5pdGlvbik7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVGcm9tT2JqZWN0IHx8IHR5cGVGcm9tRGVmYXVsdFZhbHVlIHx8IHR5cGVGcm9tQ29uc3RhbnQ7XG4gICAgaWYgKHR5cGUpXG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIGNvbnN0IHByb3BlcnR5UGF0aCA9IGNvbnRyb2xsZXIgPyBgJHtjb250cm9sbGVyfS4ke3R5cGVEZWZpbml0aW9ufWAgOiB0b2tlbjtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdmFsdWUgdHlwZSBcIiR7cHJvcGVydHlQYXRofVwiIGZvciBcIiR7dG9rZW59XCIgdmFsdWVgKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRWYWx1ZUZvckRlZmluaXRpb24odHlwZURlZmluaXRpb24pIHtcbiAgICBjb25zdCBjb25zdGFudCA9IHBhcnNlVmFsdWVUeXBlQ29uc3RhbnQodHlwZURlZmluaXRpb24pO1xuICAgIGlmIChjb25zdGFudClcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZXNCeVR5cGVbY29uc3RhbnRdO1xuICAgIGNvbnN0IGhhc0RlZmF1bHQgPSBoYXNQcm9wZXJ0eSh0eXBlRGVmaW5pdGlvbiwgXCJkZWZhdWx0XCIpO1xuICAgIGNvbnN0IGhhc1R5cGUgPSBoYXNQcm9wZXJ0eSh0eXBlRGVmaW5pdGlvbiwgXCJ0eXBlXCIpO1xuICAgIGNvbnN0IHR5cGVPYmplY3QgPSB0eXBlRGVmaW5pdGlvbjtcbiAgICBpZiAoaGFzRGVmYXVsdClcbiAgICAgICAgcmV0dXJuIHR5cGVPYmplY3QuZGVmYXVsdDtcbiAgICBpZiAoaGFzVHlwZSkge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IHR5cGVPYmplY3Q7XG4gICAgICAgIGNvbnN0IGNvbnN0YW50RnJvbVR5cGUgPSBwYXJzZVZhbHVlVHlwZUNvbnN0YW50KHR5cGUpO1xuICAgICAgICBpZiAoY29uc3RhbnRGcm9tVHlwZSlcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVzQnlUeXBlW2NvbnN0YW50RnJvbVR5cGVdO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZURlZmluaXRpb247XG59XG5mdW5jdGlvbiB2YWx1ZURlc2NyaXB0b3JGb3JUb2tlbkFuZFR5cGVEZWZpbml0aW9uKHBheWxvYWQpIHtcbiAgICBjb25zdCB7IHRva2VuLCB0eXBlRGVmaW5pdGlvbiB9ID0gcGF5bG9hZDtcbiAgICBjb25zdCBrZXkgPSBgJHtkYXNoZXJpemUodG9rZW4pfS12YWx1ZWA7XG4gICAgY29uc3QgdHlwZSA9IHBhcnNlVmFsdWVUeXBlRGVmaW5pdGlvbihwYXlsb2FkKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlLFxuICAgICAgICBrZXksXG4gICAgICAgIG5hbWU6IGNhbWVsaXplKGtleSksXG4gICAgICAgIGdldCBkZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlRm9yRGVmaW5pdGlvbih0eXBlRGVmaW5pdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBoYXNDdXN0b21EZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VWYWx1ZVR5cGVEZWZhdWx0KHR5cGVEZWZpbml0aW9uKSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB9LFxuICAgICAgICByZWFkZXI6IHJlYWRlcnNbdHlwZV0sXG4gICAgICAgIHdyaXRlcjogd3JpdGVyc1t0eXBlXSB8fCB3cml0ZXJzLmRlZmF1bHQsXG4gICAgfTtcbn1cbmNvbnN0IGRlZmF1bHRWYWx1ZXNCeVR5cGUgPSB7XG4gICAgZ2V0IGFycmF5KCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfSxcbiAgICBib29sZWFuOiBmYWxzZSxcbiAgICBudW1iZXI6IDAsXG4gICAgZ2V0IG9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0sXG4gICAgc3RyaW5nOiBcIlwiLFxufTtcbmNvbnN0IHJlYWRlcnMgPSB7XG4gICAgYXJyYXkodmFsdWUpIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgZXhwZWN0ZWQgdmFsdWUgb2YgdHlwZSBcImFycmF5XCIgYnV0IGluc3RlYWQgZ290IHZhbHVlIFwiJHt2YWx1ZX1cIiBvZiB0eXBlIFwiJHtwYXJzZVZhbHVlVHlwZURlZmF1bHQoYXJyYXkpfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH0sXG4gICAgYm9vbGVhbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gISh2YWx1ZSA9PSBcIjBcIiB8fCBTdHJpbmcodmFsdWUpLnRvTG93ZXJDYXNlKCkgPT0gXCJmYWxzZVwiKTtcbiAgICB9LFxuICAgIG51bWJlcih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHZhbHVlLnJlcGxhY2UoL18vZywgXCJcIikpO1xuICAgIH0sXG4gICAgb2JqZWN0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG9iamVjdCA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICBpZiAob2JqZWN0ID09PSBudWxsIHx8IHR5cGVvZiBvYmplY3QgIT0gXCJvYmplY3RcIiB8fCBBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYGV4cGVjdGVkIHZhbHVlIG9mIHR5cGUgXCJvYmplY3RcIiBidXQgaW5zdGVhZCBnb3QgdmFsdWUgXCIke3ZhbHVlfVwiIG9mIHR5cGUgXCIke3BhcnNlVmFsdWVUeXBlRGVmYXVsdChvYmplY3QpfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9LFxuICAgIHN0cmluZyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbn07XG5jb25zdCB3cml0ZXJzID0ge1xuICAgIGRlZmF1bHQ6IHdyaXRlU3RyaW5nLFxuICAgIGFycmF5OiB3cml0ZUpTT04sXG4gICAgb2JqZWN0OiB3cml0ZUpTT04sXG59O1xuZnVuY3Rpb24gd3JpdGVKU09OKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHdyaXRlU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIGAke3ZhbHVlfWA7XG59XG5cbmNsYXNzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBzaG91bGRMb2FkKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIGFmdGVyTG9hZChfaWRlbnRpZmllciwgX2FwcGxpY2F0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2V0IGFwcGxpY2F0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmFwcGxpY2F0aW9uO1xuICAgIH1cbiAgICBnZXQgc2NvcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuc2NvcGU7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5lbGVtZW50O1xuICAgIH1cbiAgICBnZXQgaWRlbnRpZmllcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuaWRlbnRpZmllcjtcbiAgICB9XG4gICAgZ2V0IHRhcmdldHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLnRhcmdldHM7XG4gICAgfVxuICAgIGdldCBvdXRsZXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5vdXRsZXRzO1xuICAgIH1cbiAgICBnZXQgY2xhc3NlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuY2xhc3NlcztcbiAgICB9XG4gICAgZ2V0IGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmRhdGE7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgfVxuICAgIGRpc3BhdGNoKGV2ZW50TmFtZSwgeyB0YXJnZXQgPSB0aGlzLmVsZW1lbnQsIGRldGFpbCA9IHt9LCBwcmVmaXggPSB0aGlzLmlkZW50aWZpZXIsIGJ1YmJsZXMgPSB0cnVlLCBjYW5jZWxhYmxlID0gdHJ1ZSwgfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBwcmVmaXggPyBgJHtwcmVmaXh9OiR7ZXZlbnROYW1lfWAgOiBldmVudE5hbWU7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIHsgZGV0YWlsLCBidWJibGVzLCBjYW5jZWxhYmxlIH0pO1xuICAgICAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG59XG5Db250cm9sbGVyLmJsZXNzaW5ncyA9IFtcbiAgICBDbGFzc1Byb3BlcnRpZXNCbGVzc2luZyxcbiAgICBUYXJnZXRQcm9wZXJ0aWVzQmxlc3NpbmcsXG4gICAgVmFsdWVQcm9wZXJ0aWVzQmxlc3NpbmcsXG4gICAgT3V0bGV0UHJvcGVydGllc0JsZXNzaW5nLFxuXTtcbkNvbnRyb2xsZXIudGFyZ2V0cyA9IFtdO1xuQ29udHJvbGxlci5vdXRsZXRzID0gW107XG5Db250cm9sbGVyLnZhbHVlcyA9IHt9O1xuXG5leHBvcnQgeyBBcHBsaWNhdGlvbiwgQXR0cmlidXRlT2JzZXJ2ZXIsIENvbnRleHQsIENvbnRyb2xsZXIsIEVsZW1lbnRPYnNlcnZlciwgSW5kZXhlZE11bHRpbWFwLCBNdWx0aW1hcCwgU2VsZWN0b3JPYnNlcnZlciwgU3RyaW5nTWFwT2JzZXJ2ZXIsIFRva2VuTGlzdE9ic2VydmVyLCBWYWx1ZUxpc3RPYnNlcnZlciwgYWRkLCBkZWZhdWx0U2NoZW1hLCBkZWwsIGZldGNoLCBwcnVuZSB9O1xuIiwiaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XG5pbXBvcnQgc3ltZm9ueUNvbnRyb2xsZXJzIGZyb20gXCIuL3dlYnBhY2svbG9hZGVyIUBzeW1mb255L3N0aW11bHVzLWJyaWRnZS9jb250cm9sbGVycy5qc29uXCI7XG5cbi8vI3JlZ2lvbiBub2RlX21vZHVsZXMvLnBucG0vQGhvdHdpcmVkK3N0aW11bHVzLXdlYnBhY2staGVscGVyc0AxLjAuMV9AaG90d2lyZWQrc3RpbXVsdXNAMy4yLjIvbm9kZV9tb2R1bGVzL0Bob3R3aXJlZC9zdGltdWx1cy13ZWJwYWNrLWhlbHBlcnMvZGlzdC9zdGltdWx1cy13ZWJwYWNrLWhlbHBlcnMuanNcbmZ1bmN0aW9uIGRlZmluaXRpb25zRnJvbUNvbnRleHQoY29udGV4dCkge1xuXHRyZXR1cm4gY29udGV4dC5rZXlzKCkubWFwKChrZXkpID0+IGRlZmluaXRpb25Gb3JNb2R1bGVXaXRoQ29udGV4dEFuZEtleShjb250ZXh0LCBrZXkpKS5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSk7XG59XG5mdW5jdGlvbiBkZWZpbml0aW9uRm9yTW9kdWxlV2l0aENvbnRleHRBbmRLZXkoY29udGV4dCwga2V5KSB7XG5cdGNvbnN0IGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRm9yQ29udGV4dEtleShrZXkpO1xuXHRpZiAoaWRlbnRpZmllcikgcmV0dXJuIGRlZmluaXRpb25Gb3JNb2R1bGVBbmRJZGVudGlmaWVyKGNvbnRleHQoa2V5KSwgaWRlbnRpZmllcik7XG59XG5mdW5jdGlvbiBkZWZpbml0aW9uRm9yTW9kdWxlQW5kSWRlbnRpZmllcihtb2R1bGUsIGlkZW50aWZpZXIpIHtcblx0Y29uc3QgY29udHJvbGxlckNvbnN0cnVjdG9yID0gbW9kdWxlLmRlZmF1bHQ7XG5cdGlmICh0eXBlb2YgY29udHJvbGxlckNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHtcblx0XHRpZGVudGlmaWVyLFxuXHRcdGNvbnRyb2xsZXJDb25zdHJ1Y3RvclxuXHR9O1xufVxuZnVuY3Rpb24gaWRlbnRpZmllckZvckNvbnRleHRLZXkoa2V5KSB7XG5cdGNvbnN0IGxvZ2ljYWxOYW1lID0gKGtleS5tYXRjaCgvXig/OlxcLlxcLyk/KC4rKSg/OltfLV1jb250cm9sbGVyXFwuLis/KSQvKSB8fCBbXSlbMV07XG5cdGlmIChsb2dpY2FsTmFtZSkgcmV0dXJuIGxvZ2ljYWxOYW1lLnJlcGxhY2UoL18vZywgXCItXCIpLnJlcGxhY2UoL1xcLy9nLCBcIi0tXCIpO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvaW5kZXgudHNcbmZ1bmN0aW9uIHN0YXJ0U3RpbXVsdXNBcHAoY29udGV4dCkge1xuXHRjb25zdCBhcHBsaWNhdGlvbiA9IEFwcGxpY2F0aW9uLnN0YXJ0KCk7XG5cdGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSBhcHBsaWNhdGlvbi5kZWJ1ZyA9IHRydWU7XG5cdGlmIChjb250ZXh0KSBhcHBsaWNhdGlvbi5sb2FkKGRlZmluaXRpb25zRnJvbUNvbnRleHQoY29udGV4dCkpO1xuXHRmb3IgKGNvbnN0IGNvbnRyb2xsZXJOYW1lIGluIHN5bWZvbnlDb250cm9sbGVycykge1xuXHRcdGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHN5bWZvbnlDb250cm9sbGVycywgY29udHJvbGxlck5hbWUpKSBjb250aW51ZTtcblx0XHRhcHBsaWNhdGlvbi5yZWdpc3Rlcihjb250cm9sbGVyTmFtZSwgc3ltZm9ueUNvbnRyb2xsZXJzW2NvbnRyb2xsZXJOYW1lXSk7XG5cdH1cblx0cmV0dXJuIGFwcGxpY2F0aW9uO1xufVxuXG4vLyNlbmRyZWdpb25cbmV4cG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfTsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qIVxuICAqIEJvb3RzdHJhcCB2NS4zLjcgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gICogQ29weXJpZ2h0IDIwMTEtMjAyNSBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICAqL1xuIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5ib290c3RyYXA9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2NvbnN0IHQ9bmV3IE1hcCxlPXtzZXQoZSxpLG4pe3QuaGFzKGUpfHx0LnNldChlLG5ldyBNYXApO2NvbnN0IHM9dC5nZXQoZSk7cy5oYXMoaSl8fDA9PT1zLnNpemU/cy5zZXQoaSxuKTpjb25zb2xlLmVycm9yKGBCb290c3RyYXAgZG9lc24ndCBhbGxvdyBtb3JlIHRoYW4gb25lIGluc3RhbmNlIHBlciBlbGVtZW50LiBCb3VuZCBpbnN0YW5jZTogJHtBcnJheS5mcm9tKHMua2V5cygpKVswXX0uYCl9LGdldDooZSxpKT0+dC5oYXMoZSkmJnQuZ2V0KGUpLmdldChpKXx8bnVsbCxyZW1vdmUoZSxpKXtpZighdC5oYXMoZSkpcmV0dXJuO2NvbnN0IG49dC5nZXQoZSk7bi5kZWxldGUoaSksMD09PW4uc2l6ZSYmdC5kZWxldGUoZSl9fSxpPVwidHJhbnNpdGlvbmVuZFwiLG49dD0+KHQmJndpbmRvdy5DU1MmJndpbmRvdy5DU1MuZXNjYXBlJiYodD10LnJlcGxhY2UoLyMoW15cXHNcIiMnXSspL2csKCh0LGUpPT5gIyR7Q1NTLmVzY2FwZShlKX1gKSkpLHQpLHM9dD0+e3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoaSkpfSxvPXQ9PiEoIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0KSYmKHZvaWQgMCE9PXQuanF1ZXJ5JiYodD10WzBdKSx2b2lkIDAhPT10Lm5vZGVUeXBlKSxyPXQ9Pm8odCk/dC5qcXVlcnk/dFswXTp0Olwic3RyaW5nXCI9PXR5cGVvZiB0JiZ0Lmxlbmd0aD4wP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobih0KSk6bnVsbCxhPXQ9PntpZighbyh0KXx8MD09PXQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpcmV0dXJuITE7Y29uc3QgZT1cInZpc2libGVcIj09PWdldENvbXB1dGVkU3R5bGUodCkuZ2V0UHJvcGVydHlWYWx1ZShcInZpc2liaWxpdHlcIiksaT10LmNsb3Nlc3QoXCJkZXRhaWxzOm5vdChbb3Blbl0pXCIpO2lmKCFpKXJldHVybiBlO2lmKGkhPT10KXtjb25zdCBlPXQuY2xvc2VzdChcInN1bW1hcnlcIik7aWYoZSYmZS5wYXJlbnROb2RlIT09aSlyZXR1cm4hMTtpZihudWxsPT09ZSlyZXR1cm4hMX1yZXR1cm4gZX0sbD10PT4hdHx8dC5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFfHwhIXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIil8fCh2b2lkIDAhPT10LmRpc2FibGVkP3QuZGlzYWJsZWQ6dC5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSYmXCJmYWxzZVwiIT09dC5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSksYz10PT57aWYoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpcmV0dXJuIG51bGw7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdC5nZXRSb290Tm9kZSl7Y29uc3QgZT10LmdldFJvb3ROb2RlKCk7cmV0dXJuIGUgaW5zdGFuY2VvZiBTaGFkb3dSb290P2U6bnVsbH1yZXR1cm4gdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q/dDp0LnBhcmVudE5vZGU/Yyh0LnBhcmVudE5vZGUpOm51bGx9LGg9KCk9Pnt9LGQ9dD0+e3Qub2Zmc2V0SGVpZ2h0fSx1PSgpPT53aW5kb3cualF1ZXJ5JiYhZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWJzLW5vLWpxdWVyeVwiKT93aW5kb3cualF1ZXJ5Om51bGwsZj1bXSxwPSgpPT5cInJ0bFwiPT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpcixtPXQ9Pnt2YXIgZTtlPSgpPT57Y29uc3QgZT11KCk7aWYoZSl7Y29uc3QgaT10Lk5BTUUsbj1lLmZuW2ldO2UuZm5baV09dC5qUXVlcnlJbnRlcmZhY2UsZS5mbltpXS5Db25zdHJ1Y3Rvcj10LGUuZm5baV0ubm9Db25mbGljdD0oKT0+KGUuZm5baV09bix0LmpRdWVyeUludGVyZmFjZSl9fSxcImxvYWRpbmdcIj09PWRvY3VtZW50LnJlYWR5U3RhdGU/KGYubGVuZ3RofHxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgoKT0+e2Zvcihjb25zdCB0IG9mIGYpdCgpfSkpLGYucHVzaChlKSk6ZSgpfSxnPSh0LGU9W10saT10KT0+XCJmdW5jdGlvblwiPT10eXBlb2YgdD90LmNhbGwoLi4uZSk6aSxfPSh0LGUsbj0hMCk9PntpZighbilyZXR1cm4gdm9pZCBnKHQpO2NvbnN0IG89KHQ9PntpZighdClyZXR1cm4gMDtsZXR7dHJhbnNpdGlvbkR1cmF0aW9uOmUsdHJhbnNpdGlvbkRlbGF5Oml9PXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpO2NvbnN0IG49TnVtYmVyLnBhcnNlRmxvYXQoZSkscz1OdW1iZXIucGFyc2VGbG9hdChpKTtyZXR1cm4gbnx8cz8oZT1lLnNwbGl0KFwiLFwiKVswXSxpPWkuc3BsaXQoXCIsXCIpWzBdLDFlMyooTnVtYmVyLnBhcnNlRmxvYXQoZSkrTnVtYmVyLnBhcnNlRmxvYXQoaSkpKTowfSkoZSkrNTtsZXQgcj0hMTtjb25zdCBhPSh7dGFyZ2V0Om59KT0+e249PT1lJiYocj0hMCxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoaSxhKSxnKHQpKX07ZS5hZGRFdmVudExpc3RlbmVyKGksYSksc2V0VGltZW91dCgoKCk9PntyfHxzKGUpfSksbyl9LGI9KHQsZSxpLG4pPT57Y29uc3Qgcz10Lmxlbmd0aDtsZXQgbz10LmluZGV4T2YoZSk7cmV0dXJuLTE9PT1vPyFpJiZuP3Rbcy0xXTp0WzBdOihvKz1pPzE6LTEsbiYmKG89KG8rcyklcyksdFtNYXRoLm1heCgwLE1hdGgubWluKG8scy0xKSldKX0sdj0vW14uXSooPz1cXC4uKilcXC58LiovLHk9L1xcLi4qLyx3PS86OlxcZCskLyxBPXt9O2xldCBFPTE7Y29uc3QgVD17bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwifSxDPW5ldyBTZXQoW1wiY2xpY2tcIixcImRibGNsaWNrXCIsXCJtb3VzZXVwXCIsXCJtb3VzZWRvd25cIixcImNvbnRleHRtZW51XCIsXCJtb3VzZXdoZWVsXCIsXCJET01Nb3VzZVNjcm9sbFwiLFwibW91c2VvdmVyXCIsXCJtb3VzZW91dFwiLFwibW91c2Vtb3ZlXCIsXCJzZWxlY3RzdGFydFwiLFwic2VsZWN0ZW5kXCIsXCJrZXlkb3duXCIsXCJrZXlwcmVzc1wiLFwia2V5dXBcIixcIm9yaWVudGF0aW9uY2hhbmdlXCIsXCJ0b3VjaHN0YXJ0XCIsXCJ0b3VjaG1vdmVcIixcInRvdWNoZW5kXCIsXCJ0b3VjaGNhbmNlbFwiLFwicG9pbnRlcmRvd25cIixcInBvaW50ZXJtb3ZlXCIsXCJwb2ludGVydXBcIixcInBvaW50ZXJsZWF2ZVwiLFwicG9pbnRlcmNhbmNlbFwiLFwiZ2VzdHVyZXN0YXJ0XCIsXCJnZXN0dXJlY2hhbmdlXCIsXCJnZXN0dXJlZW5kXCIsXCJmb2N1c1wiLFwiYmx1clwiLFwiY2hhbmdlXCIsXCJyZXNldFwiLFwic2VsZWN0XCIsXCJzdWJtaXRcIixcImZvY3VzaW5cIixcImZvY3Vzb3V0XCIsXCJsb2FkXCIsXCJ1bmxvYWRcIixcImJlZm9yZXVubG9hZFwiLFwicmVzaXplXCIsXCJtb3ZlXCIsXCJET01Db250ZW50TG9hZGVkXCIsXCJyZWFkeXN0YXRlY2hhbmdlXCIsXCJlcnJvclwiLFwiYWJvcnRcIixcInNjcm9sbFwiXSk7ZnVuY3Rpb24gTyh0LGUpe3JldHVybiBlJiZgJHtlfTo6JHtFKyt9YHx8dC51aWRFdmVudHx8RSsrfWZ1bmN0aW9uIHgodCl7Y29uc3QgZT1PKHQpO3JldHVybiB0LnVpZEV2ZW50PWUsQVtlXT1BW2VdfHx7fSxBW2VdfWZ1bmN0aW9uIGsodCxlLGk9bnVsbCl7cmV0dXJuIE9iamVjdC52YWx1ZXModCkuZmluZCgodD0+dC5jYWxsYWJsZT09PWUmJnQuZGVsZWdhdGlvblNlbGVjdG9yPT09aSkpfWZ1bmN0aW9uIEwodCxlLGkpe2NvbnN0IG49XCJzdHJpbmdcIj09dHlwZW9mIGUscz1uP2k6ZXx8aTtsZXQgbz1JKHQpO3JldHVybiBDLmhhcyhvKXx8KG89dCksW24scyxvXX1mdW5jdGlvbiBTKHQsZSxpLG4scyl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGV8fCF0KXJldHVybjtsZXRbbyxyLGFdPUwoZSxpLG4pO2lmKGUgaW4gVCl7Y29uc3QgdD10PT5mdW5jdGlvbihlKXtpZighZS5yZWxhdGVkVGFyZ2V0fHxlLnJlbGF0ZWRUYXJnZXQhPT1lLmRlbGVnYXRlVGFyZ2V0JiYhZS5kZWxlZ2F0ZVRhcmdldC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpKXJldHVybiB0LmNhbGwodGhpcyxlKX07cj10KHIpfWNvbnN0IGw9eCh0KSxjPWxbYV18fChsW2FdPXt9KSxoPWsoYyxyLG8/aTpudWxsKTtpZihoKXJldHVybiB2b2lkKGgub25lT2ZmPWgub25lT2ZmJiZzKTtjb25zdCBkPU8ocixlLnJlcGxhY2UodixcIlwiKSksdT1vP2Z1bmN0aW9uKHQsZSxpKXtyZXR1cm4gZnVuY3Rpb24gbihzKXtjb25zdCBvPXQucXVlcnlTZWxlY3RvckFsbChlKTtmb3IobGV0e3RhcmdldDpyfT1zO3ImJnIhPT10aGlzO3I9ci5wYXJlbnROb2RlKWZvcihjb25zdCBhIG9mIG8paWYoYT09PXIpcmV0dXJuIFAocyx7ZGVsZWdhdGVUYXJnZXQ6cn0pLG4ub25lT2ZmJiZOLm9mZih0LHMudHlwZSxlLGkpLGkuYXBwbHkocixbc10pfX0odCxpLHIpOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uIGkobil7cmV0dXJuIFAobix7ZGVsZWdhdGVUYXJnZXQ6dH0pLGkub25lT2ZmJiZOLm9mZih0LG4udHlwZSxlKSxlLmFwcGx5KHQsW25dKX19KHQscik7dS5kZWxlZ2F0aW9uU2VsZWN0b3I9bz9pOm51bGwsdS5jYWxsYWJsZT1yLHUub25lT2ZmPXMsdS51aWRFdmVudD1kLGNbZF09dSx0LmFkZEV2ZW50TGlzdGVuZXIoYSx1LG8pfWZ1bmN0aW9uIEQodCxlLGksbixzKXtjb25zdCBvPWsoZVtpXSxuLHMpO28mJih0LnJlbW92ZUV2ZW50TGlzdGVuZXIoaSxvLEJvb2xlYW4ocykpLGRlbGV0ZSBlW2ldW28udWlkRXZlbnRdKX1mdW5jdGlvbiAkKHQsZSxpLG4pe2NvbnN0IHM9ZVtpXXx8e307Zm9yKGNvbnN0W28scl1vZiBPYmplY3QuZW50cmllcyhzKSlvLmluY2x1ZGVzKG4pJiZEKHQsZSxpLHIuY2FsbGFibGUsci5kZWxlZ2F0aW9uU2VsZWN0b3IpfWZ1bmN0aW9uIEkodCl7cmV0dXJuIHQ9dC5yZXBsYWNlKHksXCJcIiksVFt0XXx8dH1jb25zdCBOPXtvbih0LGUsaSxuKXtTKHQsZSxpLG4sITEpfSxvbmUodCxlLGksbil7Uyh0LGUsaSxuLCEwKX0sb2ZmKHQsZSxpLG4pe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlfHwhdClyZXR1cm47Y29uc3RbcyxvLHJdPUwoZSxpLG4pLGE9ciE9PWUsbD14KHQpLGM9bFtyXXx8e30saD1lLnN0YXJ0c1dpdGgoXCIuXCIpO2lmKHZvaWQgMD09PW8pe2lmKGgpZm9yKGNvbnN0IGkgb2YgT2JqZWN0LmtleXMobCkpJCh0LGwsaSxlLnNsaWNlKDEpKTtmb3IoY29uc3RbaSxuXW9mIE9iamVjdC5lbnRyaWVzKGMpKXtjb25zdCBzPWkucmVwbGFjZSh3LFwiXCIpO2EmJiFlLmluY2x1ZGVzKHMpfHxEKHQsbCxyLG4uY2FsbGFibGUsbi5kZWxlZ2F0aW9uU2VsZWN0b3IpfX1lbHNle2lmKCFPYmplY3Qua2V5cyhjKS5sZW5ndGgpcmV0dXJuO0QodCxsLHIsbyxzP2k6bnVsbCl9fSx0cmlnZ2VyKHQsZSxpKXtpZihcInN0cmluZ1wiIT10eXBlb2YgZXx8IXQpcmV0dXJuIG51bGw7Y29uc3Qgbj11KCk7bGV0IHM9bnVsbCxvPSEwLHI9ITAsYT0hMTtlIT09SShlKSYmbiYmKHM9bi5FdmVudChlLGkpLG4odCkudHJpZ2dlcihzKSxvPSFzLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkscj0hcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpLGE9cy5pc0RlZmF1bHRQcmV2ZW50ZWQoKSk7Y29uc3QgbD1QKG5ldyBFdmVudChlLHtidWJibGVzOm8sY2FuY2VsYWJsZTohMH0pLGkpO3JldHVybiBhJiZsLnByZXZlbnREZWZhdWx0KCksciYmdC5kaXNwYXRjaEV2ZW50KGwpLGwuZGVmYXVsdFByZXZlbnRlZCYmcyYmcy5wcmV2ZW50RGVmYXVsdCgpLGx9fTtmdW5jdGlvbiBQKHQsZT17fSl7Zm9yKGNvbnN0W2ksbl1vZiBPYmplY3QuZW50cmllcyhlKSl0cnl7dFtpXT1ufWNhdGNoKGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse2NvbmZpZ3VyYWJsZTohMCxnZXQ6KCk9Pm59KX1yZXR1cm4gdH1mdW5jdGlvbiBqKHQpe2lmKFwidHJ1ZVwiPT09dClyZXR1cm4hMDtpZihcImZhbHNlXCI9PT10KXJldHVybiExO2lmKHQ9PT1OdW1iZXIodCkudG9TdHJpbmcoKSlyZXR1cm4gTnVtYmVyKHQpO2lmKFwiXCI9PT10fHxcIm51bGxcIj09PXQpcmV0dXJuIG51bGw7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHQpcmV0dXJuIHQ7dHJ5e3JldHVybiBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudCh0KSl9Y2F0Y2goZSl7cmV0dXJuIHR9fWZ1bmN0aW9uIE0odCl7cmV0dXJuIHQucmVwbGFjZSgvW0EtWl0vZywodD0+YC0ke3QudG9Mb3dlckNhc2UoKX1gKSl9Y29uc3QgRj17c2V0RGF0YUF0dHJpYnV0ZSh0LGUsaSl7dC5zZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtNKGUpfWAsaSl9LHJlbW92ZURhdGFBdHRyaWJ1dGUodCxlKXt0LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS1icy0ke00oZSl9YCl9LGdldERhdGFBdHRyaWJ1dGVzKHQpe2lmKCF0KXJldHVybnt9O2NvbnN0IGU9e30saT1PYmplY3Qua2V5cyh0LmRhdGFzZXQpLmZpbHRlcigodD0+dC5zdGFydHNXaXRoKFwiYnNcIikmJiF0LnN0YXJ0c1dpdGgoXCJic0NvbmZpZ1wiKSkpO2Zvcihjb25zdCBuIG9mIGkpe2xldCBpPW4ucmVwbGFjZSgvXmJzLyxcIlwiKTtpPWkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkraS5zbGljZSgxKSxlW2ldPWoodC5kYXRhc2V0W25dKX1yZXR1cm4gZX0sZ2V0RGF0YUF0dHJpYnV0ZToodCxlKT0+aih0LmdldEF0dHJpYnV0ZShgZGF0YS1icy0ke00oZSl9YCkpfTtjbGFzcyBIe3N0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybnt9fXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm57fX1zdGF0aWMgZ2V0IE5BTUUoKXt0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHRvIGltcGxlbWVudCB0aGUgc3RhdGljIG1ldGhvZCBcIk5BTUVcIiwgZm9yIGVhY2ggY29tcG9uZW50IScpfV9nZXRDb25maWcodCl7cmV0dXJuIHQ9dGhpcy5fbWVyZ2VDb25maWdPYmoodCksdD10aGlzLl9jb25maWdBZnRlck1lcmdlKHQpLHRoaXMuX3R5cGVDaGVja0NvbmZpZyh0KSx0fV9jb25maWdBZnRlck1lcmdlKHQpe3JldHVybiB0fV9tZXJnZUNvbmZpZ09iaih0LGUpe2NvbnN0IGk9byhlKT9GLmdldERhdGFBdHRyaWJ1dGUoZSxcImNvbmZpZ1wiKTp7fTtyZXR1cm57Li4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LC4uLlwib2JqZWN0XCI9PXR5cGVvZiBpP2k6e30sLi4ubyhlKT9GLmdldERhdGFBdHRyaWJ1dGVzKGUpOnt9LC4uLlwib2JqZWN0XCI9PXR5cGVvZiB0P3Q6e319fV90eXBlQ2hlY2tDb25maWcodCxlPXRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpe2Zvcihjb25zdFtuLHNdb2YgT2JqZWN0LmVudHJpZXMoZSkpe2NvbnN0IGU9dFtuXSxyPW8oZSk/XCJlbGVtZW50XCI6bnVsbD09KGk9ZSk/YCR7aX1gOk9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpKS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKTtpZighbmV3IFJlZ0V4cChzKS50ZXN0KHIpKXRocm93IG5ldyBUeXBlRXJyb3IoYCR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCIke259XCIgcHJvdmlkZWQgdHlwZSBcIiR7cn1cIiBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7c31cIi5gKX12YXIgaX19Y2xhc3MgVyBleHRlbmRzIEh7Y29uc3RydWN0b3IodCxpKXtzdXBlcigpLCh0PXIodCkpJiYodGhpcy5fZWxlbWVudD10LHRoaXMuX2NvbmZpZz10aGlzLl9nZXRDb25maWcoaSksZS5zZXQodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLHRoaXMpKX1kaXNwb3NlKCl7ZS5yZW1vdmUodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKSxOLm9mZih0aGlzLl9lbGVtZW50LHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKTtmb3IoY29uc3QgdCBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSl0aGlzW3RdPW51bGx9X3F1ZXVlQ2FsbGJhY2sodCxlLGk9ITApe18odCxlLGkpfV9nZXRDb25maWcodCl7cmV0dXJuIHQ9dGhpcy5fbWVyZ2VDb25maWdPYmoodCx0aGlzLl9lbGVtZW50KSx0PXRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UodCksdGhpcy5fdHlwZUNoZWNrQ29uZmlnKHQpLHR9c3RhdGljIGdldEluc3RhbmNlKHQpe3JldHVybiBlLmdldChyKHQpLHRoaXMuREFUQV9LRVkpfXN0YXRpYyBnZXRPckNyZWF0ZUluc3RhbmNlKHQsZT17fSl7cmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UodCl8fG5ldyB0aGlzKHQsXCJvYmplY3RcIj09dHlwZW9mIGU/ZTpudWxsKX1zdGF0aWMgZ2V0IFZFUlNJT04oKXtyZXR1cm5cIjUuMy43XCJ9c3RhdGljIGdldCBEQVRBX0tFWSgpe3JldHVybmBicy4ke3RoaXMuTkFNRX1gfXN0YXRpYyBnZXQgRVZFTlRfS0VZKCl7cmV0dXJuYC4ke3RoaXMuREFUQV9LRVl9YH1zdGF0aWMgZXZlbnROYW1lKHQpe3JldHVybmAke3R9JHt0aGlzLkVWRU5UX0tFWX1gfX1jb25zdCBCPXQ9PntsZXQgZT10LmdldEF0dHJpYnV0ZShcImRhdGEtYnMtdGFyZ2V0XCIpO2lmKCFlfHxcIiNcIj09PWUpe2xldCBpPXQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtpZighaXx8IWkuaW5jbHVkZXMoXCIjXCIpJiYhaS5zdGFydHNXaXRoKFwiLlwiKSlyZXR1cm4gbnVsbDtpLmluY2x1ZGVzKFwiI1wiKSYmIWkuc3RhcnRzV2l0aChcIiNcIikmJihpPWAjJHtpLnNwbGl0KFwiI1wiKVsxXX1gKSxlPWkmJlwiI1wiIT09aT9pLnRyaW0oKTpudWxsfXJldHVybiBlP2Uuc3BsaXQoXCIsXCIpLm1hcCgodD0+bih0KSkpLmpvaW4oXCIsXCIpOm51bGx9LHo9e2ZpbmQ6KHQsZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpPT5bXS5jb25jYXQoLi4uRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbC5jYWxsKGUsdCkpLGZpbmRPbmU6KHQsZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpPT5FbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yLmNhbGwoZSx0KSxjaGlsZHJlbjoodCxlKT0+W10uY29uY2F0KC4uLnQuY2hpbGRyZW4pLmZpbHRlcigodD0+dC5tYXRjaGVzKGUpKSkscGFyZW50cyh0LGUpe2NvbnN0IGk9W107bGV0IG49dC5wYXJlbnROb2RlLmNsb3Nlc3QoZSk7Zm9yKDtuOylpLnB1c2gobiksbj1uLnBhcmVudE5vZGUuY2xvc2VzdChlKTtyZXR1cm4gaX0scHJldih0LGUpe2xldCBpPXQucHJldmlvdXNFbGVtZW50U2libGluZztmb3IoO2k7KXtpZihpLm1hdGNoZXMoZSkpcmV0dXJuW2ldO2k9aS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nfXJldHVybltdfSxuZXh0KHQsZSl7bGV0IGk9dC5uZXh0RWxlbWVudFNpYmxpbmc7Zm9yKDtpOyl7aWYoaS5tYXRjaGVzKGUpKXJldHVybltpXTtpPWkubmV4dEVsZW1lbnRTaWJsaW5nfXJldHVybltdfSxmb2N1c2FibGVDaGlsZHJlbih0KXtjb25zdCBlPVtcImFcIixcImJ1dHRvblwiLFwiaW5wdXRcIixcInRleHRhcmVhXCIsXCJzZWxlY3RcIixcImRldGFpbHNcIixcIlt0YWJpbmRleF1cIiwnW2NvbnRlbnRlZGl0YWJsZT1cInRydWVcIl0nXS5tYXAoKHQ9PmAke3R9Om5vdChbdGFiaW5kZXhePVwiLVwiXSlgKSkuam9pbihcIixcIik7cmV0dXJuIHRoaXMuZmluZChlLHQpLmZpbHRlcigodD0+IWwodCkmJmEodCkpKX0sZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0KXtjb25zdCBlPUIodCk7cmV0dXJuIGUmJnouZmluZE9uZShlKT9lOm51bGx9LGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodCl7Y29uc3QgZT1CKHQpO3JldHVybiBlP3ouZmluZE9uZShlKTpudWxsfSxnZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yKHQpe2NvbnN0IGU9Qih0KTtyZXR1cm4gZT96LmZpbmQoZSk6W119fSxSPSh0LGU9XCJoaWRlXCIpPT57Y29uc3QgaT1gY2xpY2suZGlzbWlzcyR7dC5FVkVOVF9LRVl9YCxuPXQuTkFNRTtOLm9uKGRvY3VtZW50LGksYFtkYXRhLWJzLWRpc21pc3M9XCIke259XCJdYCwoZnVuY3Rpb24oaSl7aWYoW1wiQVwiLFwiQVJFQVwiXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpJiZpLnByZXZlbnREZWZhdWx0KCksbCh0aGlzKSlyZXR1cm47Y29uc3Qgcz16LmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyl8fHRoaXMuY2xvc2VzdChgLiR7bn1gKTt0LmdldE9yQ3JlYXRlSW5zdGFuY2UocylbZV0oKX0pKX0scT1cIi5icy5hbGVydFwiLFY9YGNsb3NlJHtxfWAsSz1gY2xvc2VkJHtxfWA7Y2xhc3MgUSBleHRlbmRzIFd7c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJhbGVydFwifWNsb3NlKCl7aWYoTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsVikuZGVmYXVsdFByZXZlbnRlZClyZXR1cm47dGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtjb25zdCB0PXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFkZVwiKTt0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+dGhpcy5fZGVzdHJveUVsZW1lbnQoKSksdGhpcy5fZWxlbWVudCx0KX1fZGVzdHJveUVsZW1lbnQoKXt0aGlzLl9lbGVtZW50LnJlbW92ZSgpLE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LEspLHRoaXMuZGlzcG9zZSgpfXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPVEuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7aWYodm9pZCAwPT09ZVt0XXx8dC5zdGFydHNXaXRoKFwiX1wiKXx8XCJjb25zdHJ1Y3RvclwiPT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke3R9XCJgKTtlW3RdKHRoaXMpfX0pKX19UihRLFwiY2xvc2VcIiksbShRKTtjb25zdCBYPSdbZGF0YS1icy10b2dnbGU9XCJidXR0b25cIl0nO2NsYXNzIFkgZXh0ZW5kcyBXe3N0YXRpYyBnZXQgTkFNRSgpe3JldHVyblwiYnV0dG9uXCJ9dG9nZ2xlKCl7dGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLXByZXNzZWRcIix0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIikpfXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPVkuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKTtcInRvZ2dsZVwiPT09dCYmZVt0XSgpfSkpfX1OLm9uKGRvY3VtZW50LFwiY2xpY2suYnMuYnV0dG9uLmRhdGEtYXBpXCIsWCwodD0+e3QucHJldmVudERlZmF1bHQoKTtjb25zdCBlPXQudGFyZ2V0LmNsb3Nlc3QoWCk7WS5nZXRPckNyZWF0ZUluc3RhbmNlKGUpLnRvZ2dsZSgpfSkpLG0oWSk7Y29uc3QgVT1cIi5icy5zd2lwZVwiLEc9YHRvdWNoc3RhcnQke1V9YCxKPWB0b3VjaG1vdmUke1V9YCxaPWB0b3VjaGVuZCR7VX1gLHR0PWBwb2ludGVyZG93biR7VX1gLGV0PWBwb2ludGVydXAke1V9YCxpdD17ZW5kQ2FsbGJhY2s6bnVsbCxsZWZ0Q2FsbGJhY2s6bnVsbCxyaWdodENhbGxiYWNrOm51bGx9LG50PXtlbmRDYWxsYmFjazpcIihmdW5jdGlvbnxudWxsKVwiLGxlZnRDYWxsYmFjazpcIihmdW5jdGlvbnxudWxsKVwiLHJpZ2h0Q2FsbGJhY2s6XCIoZnVuY3Rpb258bnVsbClcIn07Y2xhc3Mgc3QgZXh0ZW5kcyBIe2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIoKSx0aGlzLl9lbGVtZW50PXQsdCYmc3QuaXNTdXBwb3J0ZWQoKSYmKHRoaXMuX2NvbmZpZz10aGlzLl9nZXRDb25maWcoZSksdGhpcy5fZGVsdGFYPTAsdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHM9Qm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50KSx0aGlzLl9pbml0RXZlbnRzKCkpfXN0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiBpdH1zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIG50fXN0YXRpYyBnZXQgTkFNRSgpe3JldHVyblwic3dpcGVcIn1kaXNwb3NlKCl7Ti5vZmYodGhpcy5fZWxlbWVudCxVKX1fc3RhcnQodCl7dGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHM/dGhpcy5fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaCh0KSYmKHRoaXMuX2RlbHRhWD10LmNsaWVudFgpOnRoaXMuX2RlbHRhWD10LnRvdWNoZXNbMF0uY2xpZW50WH1fZW5kKHQpe3RoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2godCkmJih0aGlzLl9kZWx0YVg9dC5jbGllbnRYLXRoaXMuX2RlbHRhWCksdGhpcy5faGFuZGxlU3dpcGUoKSxnKHRoaXMuX2NvbmZpZy5lbmRDYWxsYmFjayl9X21vdmUodCl7dGhpcy5fZGVsdGFYPXQudG91Y2hlcyYmdC50b3VjaGVzLmxlbmd0aD4xPzA6dC50b3VjaGVzWzBdLmNsaWVudFgtdGhpcy5fZGVsdGFYfV9oYW5kbGVTd2lwZSgpe2NvbnN0IHQ9TWF0aC5hYnModGhpcy5fZGVsdGFYKTtpZih0PD00MClyZXR1cm47Y29uc3QgZT10L3RoaXMuX2RlbHRhWDt0aGlzLl9kZWx0YVg9MCxlJiZnKGU+MD90aGlzLl9jb25maWcucmlnaHRDYWxsYmFjazp0aGlzLl9jb25maWcubGVmdENhbGxiYWNrKX1faW5pdEV2ZW50cygpe3RoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzPyhOLm9uKHRoaXMuX2VsZW1lbnQsdHQsKHQ9PnRoaXMuX3N0YXJ0KHQpKSksTi5vbih0aGlzLl9lbGVtZW50LGV0LCh0PT50aGlzLl9lbmQodCkpKSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwb2ludGVyLWV2ZW50XCIpKTooTi5vbih0aGlzLl9lbGVtZW50LEcsKHQ9PnRoaXMuX3N0YXJ0KHQpKSksTi5vbih0aGlzLl9lbGVtZW50LEosKHQ9PnRoaXMuX21vdmUodCkpKSxOLm9uKHRoaXMuX2VsZW1lbnQsWiwodD0+dGhpcy5fZW5kKHQpKSkpfV9ldmVudElzUG9pbnRlclBlblRvdWNoKHQpe3JldHVybiB0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cyYmKFwicGVuXCI9PT10LnBvaW50ZXJUeXBlfHxcInRvdWNoXCI9PT10LnBvaW50ZXJUeXBlKX1zdGF0aWMgaXNTdXBwb3J0ZWQoKXtyZXR1cm5cIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50fHxuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHM+MH19Y29uc3Qgb3Q9XCIuYnMuY2Fyb3VzZWxcIixydD1cIi5kYXRhLWFwaVwiLGF0PVwiQXJyb3dMZWZ0XCIsbHQ9XCJBcnJvd1JpZ2h0XCIsY3Q9XCJuZXh0XCIsaHQ9XCJwcmV2XCIsZHQ9XCJsZWZ0XCIsdXQ9XCJyaWdodFwiLGZ0PWBzbGlkZSR7b3R9YCxwdD1gc2xpZCR7b3R9YCxtdD1ga2V5ZG93biR7b3R9YCxndD1gbW91c2VlbnRlciR7b3R9YCxfdD1gbW91c2VsZWF2ZSR7b3R9YCxidD1gZHJhZ3N0YXJ0JHtvdH1gLHZ0PWBsb2FkJHtvdH0ke3J0fWAseXQ9YGNsaWNrJHtvdH0ke3J0fWAsd3Q9XCJjYXJvdXNlbFwiLEF0PVwiYWN0aXZlXCIsRXQ9XCIuYWN0aXZlXCIsVHQ9XCIuY2Fyb3VzZWwtaXRlbVwiLEN0PUV0K1R0LE90PXtbYXRdOnV0LFtsdF06ZHR9LHh0PXtpbnRlcnZhbDo1ZTMsa2V5Ym9hcmQ6ITAscGF1c2U6XCJob3ZlclwiLHJpZGU6ITEsdG91Y2g6ITAsd3JhcDohMH0sa3Q9e2ludGVydmFsOlwiKG51bWJlcnxib29sZWFuKVwiLGtleWJvYXJkOlwiYm9vbGVhblwiLHBhdXNlOlwiKHN0cmluZ3xib29sZWFuKVwiLHJpZGU6XCIoYm9vbGVhbnxzdHJpbmcpXCIsdG91Y2g6XCJib29sZWFuXCIsd3JhcDpcImJvb2xlYW5cIn07Y2xhc3MgTHQgZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIodCxlKSx0aGlzLl9pbnRlcnZhbD1udWxsLHRoaXMuX2FjdGl2ZUVsZW1lbnQ9bnVsbCx0aGlzLl9pc1NsaWRpbmc9ITEsdGhpcy50b3VjaFRpbWVvdXQ9bnVsbCx0aGlzLl9zd2lwZUhlbHBlcj1udWxsLHRoaXMuX2luZGljYXRvcnNFbGVtZW50PXouZmluZE9uZShcIi5jYXJvdXNlbC1pbmRpY2F0b3JzXCIsdGhpcy5fZWxlbWVudCksdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKSx0aGlzLl9jb25maWcucmlkZT09PXd0JiZ0aGlzLmN5Y2xlKCl9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIHh0fXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4ga3R9c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJjYXJvdXNlbFwifW5leHQoKXt0aGlzLl9zbGlkZShjdCl9bmV4dFdoZW5WaXNpYmxlKCl7IWRvY3VtZW50LmhpZGRlbiYmYSh0aGlzLl9lbGVtZW50KSYmdGhpcy5uZXh0KCl9cHJldigpe3RoaXMuX3NsaWRlKGh0KX1wYXVzZSgpe3RoaXMuX2lzU2xpZGluZyYmcyh0aGlzLl9lbGVtZW50KSx0aGlzLl9jbGVhckludGVydmFsKCl9Y3ljbGUoKXt0aGlzLl9jbGVhckludGVydmFsKCksdGhpcy5fdXBkYXRlSW50ZXJ2YWwoKSx0aGlzLl9pbnRlcnZhbD1zZXRJbnRlcnZhbCgoKCk9PnRoaXMubmV4dFdoZW5WaXNpYmxlKCkpLHRoaXMuX2NvbmZpZy5pbnRlcnZhbCl9X21heWJlRW5hYmxlQ3ljbGUoKXt0aGlzLl9jb25maWcucmlkZSYmKHRoaXMuX2lzU2xpZGluZz9OLm9uZSh0aGlzLl9lbGVtZW50LHB0LCgoKT0+dGhpcy5jeWNsZSgpKSk6dGhpcy5jeWNsZSgpKX10byh0KXtjb25zdCBlPXRoaXMuX2dldEl0ZW1zKCk7aWYodD5lLmxlbmd0aC0xfHx0PDApcmV0dXJuO2lmKHRoaXMuX2lzU2xpZGluZylyZXR1cm4gdm9pZCBOLm9uZSh0aGlzLl9lbGVtZW50LHB0LCgoKT0+dGhpcy50byh0KSkpO2NvbnN0IGk9dGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2dldEFjdGl2ZSgpKTtpZihpPT09dClyZXR1cm47Y29uc3Qgbj10Pmk/Y3Q6aHQ7dGhpcy5fc2xpZGUobixlW3RdKX1kaXNwb3NlKCl7dGhpcy5fc3dpcGVIZWxwZXImJnRoaXMuX3N3aXBlSGVscGVyLmRpc3Bvc2UoKSxzdXBlci5kaXNwb3NlKCl9X2NvbmZpZ0FmdGVyTWVyZ2UodCl7cmV0dXJuIHQuZGVmYXVsdEludGVydmFsPXQuaW50ZXJ2YWwsdH1fYWRkRXZlbnRMaXN0ZW5lcnMoKXt0aGlzLl9jb25maWcua2V5Ym9hcmQmJk4ub24odGhpcy5fZWxlbWVudCxtdCwodD0+dGhpcy5fa2V5ZG93bih0KSkpLFwiaG92ZXJcIj09PXRoaXMuX2NvbmZpZy5wYXVzZSYmKE4ub24odGhpcy5fZWxlbWVudCxndCwoKCk9PnRoaXMucGF1c2UoKSkpLE4ub24odGhpcy5fZWxlbWVudCxfdCwoKCk9PnRoaXMuX21heWJlRW5hYmxlQ3ljbGUoKSkpKSx0aGlzLl9jb25maWcudG91Y2gmJnN0LmlzU3VwcG9ydGVkKCkmJnRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKX1fYWRkVG91Y2hFdmVudExpc3RlbmVycygpe2Zvcihjb25zdCB0IG9mIHouZmluZChcIi5jYXJvdXNlbC1pdGVtIGltZ1wiLHRoaXMuX2VsZW1lbnQpKU4ub24odCxidCwodD0+dC5wcmV2ZW50RGVmYXVsdCgpKSk7Y29uc3QgdD17bGVmdENhbGxiYWNrOigpPT50aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKGR0KSkscmlnaHRDYWxsYmFjazooKT0+dGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcih1dCkpLGVuZENhbGxiYWNrOigpPT57XCJob3ZlclwiPT09dGhpcy5fY29uZmlnLnBhdXNlJiYodGhpcy5wYXVzZSgpLHRoaXMudG91Y2hUaW1lb3V0JiZjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpLHRoaXMudG91Y2hUaW1lb3V0PXNldFRpbWVvdXQoKCgpPT50aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCkpLDUwMCt0aGlzLl9jb25maWcuaW50ZXJ2YWwpKX19O3RoaXMuX3N3aXBlSGVscGVyPW5ldyBzdCh0aGlzLl9lbGVtZW50LHQpfV9rZXlkb3duKHQpe2lmKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QodC50YXJnZXQudGFnTmFtZSkpcmV0dXJuO2NvbnN0IGU9T3RbdC5rZXldO2UmJih0LnByZXZlbnREZWZhdWx0KCksdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihlKSkpfV9nZXRJdGVtSW5kZXgodCl7cmV0dXJuIHRoaXMuX2dldEl0ZW1zKCkuaW5kZXhPZih0KX1fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudCh0KXtpZighdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpcmV0dXJuO2NvbnN0IGU9ei5maW5kT25lKEV0LHRoaXMuX2luZGljYXRvcnNFbGVtZW50KTtlLmNsYXNzTGlzdC5yZW1vdmUoQXQpLGUucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIpO2NvbnN0IGk9ei5maW5kT25lKGBbZGF0YS1icy1zbGlkZS10bz1cIiR7dH1cIl1gLHRoaXMuX2luZGljYXRvcnNFbGVtZW50KTtpJiYoaS5jbGFzc0xpc3QuYWRkKEF0KSxpLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLFwidHJ1ZVwiKSl9X3VwZGF0ZUludGVydmFsKCl7Y29uc3QgdD10aGlzLl9hY3RpdmVFbGVtZW50fHx0aGlzLl9nZXRBY3RpdmUoKTtpZighdClyZXR1cm47Y29uc3QgZT1OdW1iZXIucGFyc2VJbnQodC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLWludGVydmFsXCIpLDEwKTt0aGlzLl9jb25maWcuaW50ZXJ2YWw9ZXx8dGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbH1fc2xpZGUodCxlPW51bGwpe2lmKHRoaXMuX2lzU2xpZGluZylyZXR1cm47Y29uc3QgaT10aGlzLl9nZXRBY3RpdmUoKSxuPXQ9PT1jdCxzPWV8fGIodGhpcy5fZ2V0SXRlbXMoKSxpLG4sdGhpcy5fY29uZmlnLndyYXApO2lmKHM9PT1pKXJldHVybjtjb25zdCBvPXRoaXMuX2dldEl0ZW1JbmRleChzKSxyPWU9Pk4udHJpZ2dlcih0aGlzLl9lbGVtZW50LGUse3JlbGF0ZWRUYXJnZXQ6cyxkaXJlY3Rpb246dGhpcy5fb3JkZXJUb0RpcmVjdGlvbih0KSxmcm9tOnRoaXMuX2dldEl0ZW1JbmRleChpKSx0bzpvfSk7aWYocihmdCkuZGVmYXVsdFByZXZlbnRlZClyZXR1cm47aWYoIWl8fCFzKXJldHVybjtjb25zdCBhPUJvb2xlYW4odGhpcy5faW50ZXJ2YWwpO3RoaXMucGF1c2UoKSx0aGlzLl9pc1NsaWRpbmc9ITAsdGhpcy5fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChvKSx0aGlzLl9hY3RpdmVFbGVtZW50PXM7Y29uc3QgbD1uP1wiY2Fyb3VzZWwtaXRlbS1zdGFydFwiOlwiY2Fyb3VzZWwtaXRlbS1lbmRcIixjPW4/XCJjYXJvdXNlbC1pdGVtLW5leHRcIjpcImNhcm91c2VsLWl0ZW0tcHJldlwiO3MuY2xhc3NMaXN0LmFkZChjKSxkKHMpLGkuY2xhc3NMaXN0LmFkZChsKSxzLmNsYXNzTGlzdC5hZGQobCksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9PntzLmNsYXNzTGlzdC5yZW1vdmUobCxjKSxzLmNsYXNzTGlzdC5hZGQoQXQpLGkuY2xhc3NMaXN0LnJlbW92ZShBdCxjLGwpLHRoaXMuX2lzU2xpZGluZz0hMSxyKHB0KX0pLGksdGhpcy5faXNBbmltYXRlZCgpKSxhJiZ0aGlzLmN5Y2xlKCl9X2lzQW5pbWF0ZWQoKXtyZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzbGlkZVwiKX1fZ2V0QWN0aXZlKCl7cmV0dXJuIHouZmluZE9uZShDdCx0aGlzLl9lbGVtZW50KX1fZ2V0SXRlbXMoKXtyZXR1cm4gei5maW5kKFR0LHRoaXMuX2VsZW1lbnQpfV9jbGVhckludGVydmFsKCl7dGhpcy5faW50ZXJ2YWwmJihjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKSx0aGlzLl9pbnRlcnZhbD1udWxsKX1fZGlyZWN0aW9uVG9PcmRlcih0KXtyZXR1cm4gcCgpP3Q9PT1kdD9odDpjdDp0PT09ZHQ/Y3Q6aHR9X29yZGVyVG9EaXJlY3Rpb24odCl7cmV0dXJuIHAoKT90PT09aHQ/ZHQ6dXQ6dD09PWh0P3V0OmR0fXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPUx0LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyx0KTtpZihcIm51bWJlclwiIT10eXBlb2YgdCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWVbdF18fHQuc3RhcnRzV2l0aChcIl9cIil8fFwiY29uc3RydWN0b3JcIj09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHt0fVwiYCk7ZVt0XSgpfX1lbHNlIGUudG8odCl9KSl9fU4ub24oZG9jdW1lbnQseXQsXCJbZGF0YS1icy1zbGlkZV0sIFtkYXRhLWJzLXNsaWRlLXRvXVwiLChmdW5jdGlvbih0KXtjb25zdCBlPXouZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKTtpZighZXx8IWUuY2xhc3NMaXN0LmNvbnRhaW5zKHd0KSlyZXR1cm47dC5wcmV2ZW50RGVmYXVsdCgpO2NvbnN0IGk9THQuZ2V0T3JDcmVhdGVJbnN0YW5jZShlKSxuPXRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1icy1zbGlkZS10b1wiKTtyZXR1cm4gbj8oaS50byhuKSx2b2lkIGkuX21heWJlRW5hYmxlQ3ljbGUoKSk6XCJuZXh0XCI9PT1GLmdldERhdGFBdHRyaWJ1dGUodGhpcyxcInNsaWRlXCIpPyhpLm5leHQoKSx2b2lkIGkuX21heWJlRW5hYmxlQ3ljbGUoKSk6KGkucHJldigpLHZvaWQgaS5fbWF5YmVFbmFibGVDeWNsZSgpKX0pKSxOLm9uKHdpbmRvdyx2dCwoKCk9Pntjb25zdCB0PXouZmluZCgnW2RhdGEtYnMtcmlkZT1cImNhcm91c2VsXCJdJyk7Zm9yKGNvbnN0IGUgb2YgdClMdC5nZXRPckNyZWF0ZUluc3RhbmNlKGUpfSkpLG0oTHQpO2NvbnN0IFN0PVwiLmJzLmNvbGxhcHNlXCIsRHQ9YHNob3cke1N0fWAsJHQ9YHNob3duJHtTdH1gLEl0PWBoaWRlJHtTdH1gLE50PWBoaWRkZW4ke1N0fWAsUHQ9YGNsaWNrJHtTdH0uZGF0YS1hcGlgLGp0PVwic2hvd1wiLE10PVwiY29sbGFwc2VcIixGdD1cImNvbGxhcHNpbmdcIixIdD1gOnNjb3BlIC4ke010fSAuJHtNdH1gLFd0PSdbZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXScsQnQ9e3BhcmVudDpudWxsLHRvZ2dsZTohMH0senQ9e3BhcmVudDpcIihudWxsfGVsZW1lbnQpXCIsdG9nZ2xlOlwiYm9vbGVhblwifTtjbGFzcyBSdCBleHRlbmRzIFd7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpLHRoaXMuX2lzVHJhbnNpdGlvbmluZz0hMSx0aGlzLl90cmlnZ2VyQXJyYXk9W107Y29uc3QgaT16LmZpbmQoV3QpO2Zvcihjb25zdCB0IG9mIGkpe2NvbnN0IGU9ei5nZXRTZWxlY3RvckZyb21FbGVtZW50KHQpLGk9ei5maW5kKGUpLmZpbHRlcigodD0+dD09PXRoaXMuX2VsZW1lbnQpKTtudWxsIT09ZSYmaS5sZW5ndGgmJnRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKHQpfXRoaXMuX2luaXRpYWxpemVDaGlsZHJlbigpLHRoaXMuX2NvbmZpZy5wYXJlbnR8fHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl90cmlnZ2VyQXJyYXksdGhpcy5faXNTaG93bigpKSx0aGlzLl9jb25maWcudG9nZ2xlJiZ0aGlzLnRvZ2dsZSgpfXN0YXRpYyBnZXQgRGVmYXVsdCgpe3JldHVybiBCdH1zdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCl7cmV0dXJuIHp0fXN0YXRpYyBnZXQgTkFNRSgpe3JldHVyblwiY29sbGFwc2VcIn10b2dnbGUoKXt0aGlzLl9pc1Nob3duKCk/dGhpcy5oaWRlKCk6dGhpcy5zaG93KCl9c2hvdygpe2lmKHRoaXMuX2lzVHJhbnNpdGlvbmluZ3x8dGhpcy5faXNTaG93bigpKXJldHVybjtsZXQgdD1bXTtpZih0aGlzLl9jb25maWcucGFyZW50JiYodD10aGlzLl9nZXRGaXJzdExldmVsQ2hpbGRyZW4oXCIuY29sbGFwc2Uuc2hvdywgLmNvbGxhcHNlLmNvbGxhcHNpbmdcIikuZmlsdGVyKCh0PT50IT09dGhpcy5fZWxlbWVudCkpLm1hcCgodD0+UnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0LHt0b2dnbGU6ITF9KSkpKSx0Lmxlbmd0aCYmdFswXS5faXNUcmFuc2l0aW9uaW5nKXJldHVybjtpZihOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxEdCkuZGVmYXVsdFByZXZlbnRlZClyZXR1cm47Zm9yKGNvbnN0IGUgb2YgdCllLmhpZGUoKTtjb25zdCBlPXRoaXMuX2dldERpbWVuc2lvbigpO3RoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShNdCksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKEZ0KSx0aGlzLl9lbGVtZW50LnN0eWxlW2VdPTAsdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwhMCksdGhpcy5faXNUcmFuc2l0aW9uaW5nPSEwO2NvbnN0IGk9YHNjcm9sbCR7ZVswXS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSl9YDt0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2lzVHJhbnNpdGlvbmluZz0hMSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoRnQpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChNdCxqdCksdGhpcy5fZWxlbWVudC5zdHlsZVtlXT1cIlwiLE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LCR0KX0pLHRoaXMuX2VsZW1lbnQsITApLHRoaXMuX2VsZW1lbnQuc3R5bGVbZV09YCR7dGhpcy5fZWxlbWVudFtpXX1weGB9aGlkZSgpe2lmKHRoaXMuX2lzVHJhbnNpdGlvbmluZ3x8IXRoaXMuX2lzU2hvd24oKSlyZXR1cm47aWYoTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsSXQpLmRlZmF1bHRQcmV2ZW50ZWQpcmV0dXJuO2NvbnN0IHQ9dGhpcy5fZ2V0RGltZW5zaW9uKCk7dGhpcy5fZWxlbWVudC5zdHlsZVt0XT1gJHt0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW3RdfXB4YCxkKHRoaXMuX2VsZW1lbnQpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChGdCksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKE10LGp0KTtmb3IoY29uc3QgdCBvZiB0aGlzLl90cmlnZ2VyQXJyYXkpe2NvbnN0IGU9ei5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHQpO2UmJiF0aGlzLl9pc1Nob3duKGUpJiZ0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW3RdLCExKX10aGlzLl9pc1RyYW5zaXRpb25pbmc9ITAsdGhpcy5fZWxlbWVudC5zdHlsZVt0XT1cIlwiLHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCgpPT57dGhpcy5faXNUcmFuc2l0aW9uaW5nPSExLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShGdCksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKE10KSxOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxOdCl9KSx0aGlzLl9lbGVtZW50LCEwKX1faXNTaG93bih0PXRoaXMuX2VsZW1lbnQpe3JldHVybiB0LmNsYXNzTGlzdC5jb250YWlucyhqdCl9X2NvbmZpZ0FmdGVyTWVyZ2UodCl7cmV0dXJuIHQudG9nZ2xlPUJvb2xlYW4odC50b2dnbGUpLHQucGFyZW50PXIodC5wYXJlbnQpLHR9X2dldERpbWVuc2lvbigpe3JldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNvbGxhcHNlLWhvcml6b250YWxcIik/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJ9X2luaXRpYWxpemVDaGlsZHJlbigpe2lmKCF0aGlzLl9jb25maWcucGFyZW50KXJldHVybjtjb25zdCB0PXRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihXdCk7Zm9yKGNvbnN0IGUgb2YgdCl7Y29uc3QgdD16LmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZSk7dCYmdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFtlXSx0aGlzLl9pc1Nob3duKHQpKX19X2dldEZpcnN0TGV2ZWxDaGlsZHJlbih0KXtjb25zdCBlPXouZmluZChIdCx0aGlzLl9jb25maWcucGFyZW50KTtyZXR1cm4gei5maW5kKHQsdGhpcy5fY29uZmlnLnBhcmVudCkuZmlsdGVyKCh0PT4hZS5pbmNsdWRlcyh0KSkpfV9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModCxlKXtpZih0Lmxlbmd0aClmb3IoY29uc3QgaSBvZiB0KWkuY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlZFwiLCFlKSxpLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIixlKX1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe2NvbnN0IGU9e307cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQmJi9zaG93fGhpZGUvLnRlc3QodCkmJihlLnRvZ2dsZT0hMSksdGhpcy5lYWNoKChmdW5jdGlvbigpe2NvbnN0IGk9UnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZih2b2lkIDA9PT1pW3RdKXRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7dH1cImApO2lbdF0oKX19KSl9fU4ub24oZG9jdW1lbnQsUHQsV3QsKGZ1bmN0aW9uKHQpeyhcIkFcIj09PXQudGFyZ2V0LnRhZ05hbWV8fHQuZGVsZWdhdGVUYXJnZXQmJlwiQVwiPT09dC5kZWxlZ2F0ZVRhcmdldC50YWdOYW1lKSYmdC5wcmV2ZW50RGVmYXVsdCgpO2Zvcihjb25zdCB0IG9mIHouZ2V0TXVsdGlwbGVFbGVtZW50c0Zyb21TZWxlY3Rvcih0aGlzKSlSdC5nZXRPckNyZWF0ZUluc3RhbmNlKHQse3RvZ2dsZTohMX0pLnRvZ2dsZSgpfSkpLG0oUnQpO3ZhciBxdD1cInRvcFwiLFZ0PVwiYm90dG9tXCIsS3Q9XCJyaWdodFwiLFF0PVwibGVmdFwiLFh0PVwiYXV0b1wiLFl0PVtxdCxWdCxLdCxRdF0sVXQ9XCJzdGFydFwiLEd0PVwiZW5kXCIsSnQ9XCJjbGlwcGluZ1BhcmVudHNcIixadD1cInZpZXdwb3J0XCIsdGU9XCJwb3BwZXJcIixlZT1cInJlZmVyZW5jZVwiLGllPVl0LnJlZHVjZSgoZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5jb25jYXQoW2UrXCItXCIrVXQsZStcIi1cIitHdF0pfSksW10pLG5lPVtdLmNvbmNhdChZdCxbWHRdKS5yZWR1Y2UoKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuY29uY2F0KFtlLGUrXCItXCIrVXQsZStcIi1cIitHdF0pfSksW10pLHNlPVwiYmVmb3JlUmVhZFwiLG9lPVwicmVhZFwiLHJlPVwiYWZ0ZXJSZWFkXCIsYWU9XCJiZWZvcmVNYWluXCIsbGU9XCJtYWluXCIsY2U9XCJhZnRlck1haW5cIixoZT1cImJlZm9yZVdyaXRlXCIsZGU9XCJ3cml0ZVwiLHVlPVwiYWZ0ZXJXcml0ZVwiLGZlPVtzZSxvZSxyZSxhZSxsZSxjZSxoZSxkZSx1ZV07ZnVuY3Rpb24gcGUodCl7cmV0dXJuIHQ/KHQubm9kZU5hbWV8fFwiXCIpLnRvTG93ZXJDYXNlKCk6bnVsbH1mdW5jdGlvbiBtZSh0KXtpZihudWxsPT10KXJldHVybiB3aW5kb3c7aWYoXCJbb2JqZWN0IFdpbmRvd11cIiE9PXQudG9TdHJpbmcoKSl7dmFyIGU9dC5vd25lckRvY3VtZW50O3JldHVybiBlJiZlLmRlZmF1bHRWaWV3fHx3aW5kb3d9cmV0dXJuIHR9ZnVuY3Rpb24gZ2UodCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBtZSh0KS5FbGVtZW50fHx0IGluc3RhbmNlb2YgRWxlbWVudH1mdW5jdGlvbiBfZSh0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIG1lKHQpLkhUTUxFbGVtZW50fHx0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnR9ZnVuY3Rpb24gYmUodCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNoYWRvd1Jvb3QmJih0IGluc3RhbmNlb2YgbWUodCkuU2hhZG93Um9vdHx8dCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpfWNvbnN0IHZlPXtuYW1lOlwiYXBwbHlTdHlsZXNcIixlbmFibGVkOiEwLHBoYXNlOlwid3JpdGVcIixmbjpmdW5jdGlvbih0KXt2YXIgZT10LnN0YXRlO09iamVjdC5rZXlzKGUuZWxlbWVudHMpLmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZhciBpPWUuc3R5bGVzW3RdfHx7fSxuPWUuYXR0cmlidXRlc1t0XXx8e30scz1lLmVsZW1lbnRzW3RdO19lKHMpJiZwZShzKSYmKE9iamVjdC5hc3NpZ24ocy5zdHlsZSxpKSxPYmplY3Qua2V5cyhuKS5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgZT1uW3RdOyExPT09ZT9zLnJlbW92ZUF0dHJpYnV0ZSh0KTpzLnNldEF0dHJpYnV0ZSh0LCEwPT09ZT9cIlwiOmUpfSkpKX0pKX0sZWZmZWN0OmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsaT17cG9wcGVyOntwb3NpdGlvbjplLm9wdGlvbnMuc3RyYXRlZ3ksbGVmdDpcIjBcIix0b3A6XCIwXCIsbWFyZ2luOlwiMFwifSxhcnJvdzp7cG9zaXRpb246XCJhYnNvbHV0ZVwifSxyZWZlcmVuY2U6e319O3JldHVybiBPYmplY3QuYXNzaWduKGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLGkucG9wcGVyKSxlLnN0eWxlcz1pLGUuZWxlbWVudHMuYXJyb3cmJk9iamVjdC5hc3NpZ24oZS5lbGVtZW50cy5hcnJvdy5zdHlsZSxpLmFycm93KSxmdW5jdGlvbigpe09iamVjdC5rZXlzKGUuZWxlbWVudHMpLmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZhciBuPWUuZWxlbWVudHNbdF0scz1lLmF0dHJpYnV0ZXNbdF18fHt9LG89T2JqZWN0LmtleXMoZS5zdHlsZXMuaGFzT3duUHJvcGVydHkodCk/ZS5zdHlsZXNbdF06aVt0XSkucmVkdWNlKChmdW5jdGlvbih0LGUpe3JldHVybiB0W2VdPVwiXCIsdH0pLHt9KTtfZShuKSYmcGUobikmJihPYmplY3QuYXNzaWduKG4uc3R5bGUsbyksT2JqZWN0LmtleXMocykuZm9yRWFjaCgoZnVuY3Rpb24odCl7bi5yZW1vdmVBdHRyaWJ1dGUodCl9KSkpfSkpfX0scmVxdWlyZXM6W1wiY29tcHV0ZVN0eWxlc1wiXX07ZnVuY3Rpb24geWUodCl7cmV0dXJuIHQuc3BsaXQoXCItXCIpWzBdfXZhciB3ZT1NYXRoLm1heCxBZT1NYXRoLm1pbixFZT1NYXRoLnJvdW5kO2Z1bmN0aW9uIFRlKCl7dmFyIHQ9bmF2aWdhdG9yLnVzZXJBZ2VudERhdGE7cmV0dXJuIG51bGwhPXQmJnQuYnJhbmRzJiZBcnJheS5pc0FycmF5KHQuYnJhbmRzKT90LmJyYW5kcy5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiB0LmJyYW5kK1wiL1wiK3QudmVyc2lvbn0pKS5qb2luKFwiIFwiKTpuYXZpZ2F0b3IudXNlckFnZW50fWZ1bmN0aW9uIENlKCl7cmV0dXJuIS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QoVGUoKSl9ZnVuY3Rpb24gT2UodCxlLGkpe3ZvaWQgMD09PWUmJihlPSExKSx2b2lkIDA9PT1pJiYoaT0hMSk7dmFyIG49dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxzPTEsbz0xO2UmJl9lKHQpJiYocz10Lm9mZnNldFdpZHRoPjAmJkVlKG4ud2lkdGgpL3Qub2Zmc2V0V2lkdGh8fDEsbz10Lm9mZnNldEhlaWdodD4wJiZFZShuLmhlaWdodCkvdC5vZmZzZXRIZWlnaHR8fDEpO3ZhciByPShnZSh0KT9tZSh0KTp3aW5kb3cpLnZpc3VhbFZpZXdwb3J0LGE9IUNlKCkmJmksbD0obi5sZWZ0KyhhJiZyP3Iub2Zmc2V0TGVmdDowKSkvcyxjPShuLnRvcCsoYSYmcj9yLm9mZnNldFRvcDowKSkvbyxoPW4ud2lkdGgvcyxkPW4uaGVpZ2h0L287cmV0dXJue3dpZHRoOmgsaGVpZ2h0OmQsdG9wOmMscmlnaHQ6bCtoLGJvdHRvbTpjK2QsbGVmdDpsLHg6bCx5OmN9fWZ1bmN0aW9uIHhlKHQpe3ZhciBlPU9lKHQpLGk9dC5vZmZzZXRXaWR0aCxuPXQub2Zmc2V0SGVpZ2h0O3JldHVybiBNYXRoLmFicyhlLndpZHRoLWkpPD0xJiYoaT1lLndpZHRoKSxNYXRoLmFicyhlLmhlaWdodC1uKTw9MSYmKG49ZS5oZWlnaHQpLHt4OnQub2Zmc2V0TGVmdCx5OnQub2Zmc2V0VG9wLHdpZHRoOmksaGVpZ2h0Om59fWZ1bmN0aW9uIGtlKHQsZSl7dmFyIGk9ZS5nZXRSb290Tm9kZSYmZS5nZXRSb290Tm9kZSgpO2lmKHQuY29udGFpbnMoZSkpcmV0dXJuITA7aWYoaSYmYmUoaSkpe3ZhciBuPWU7ZG97aWYobiYmdC5pc1NhbWVOb2RlKG4pKXJldHVybiEwO249bi5wYXJlbnROb2RlfHxuLmhvc3R9d2hpbGUobil9cmV0dXJuITF9ZnVuY3Rpb24gTGUodCl7cmV0dXJuIG1lKHQpLmdldENvbXB1dGVkU3R5bGUodCl9ZnVuY3Rpb24gU2UodCl7cmV0dXJuW1widGFibGVcIixcInRkXCIsXCJ0aFwiXS5pbmRleE9mKHBlKHQpKT49MH1mdW5jdGlvbiBEZSh0KXtyZXR1cm4oKGdlKHQpP3Qub3duZXJEb2N1bWVudDp0LmRvY3VtZW50KXx8d2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnR9ZnVuY3Rpb24gJGUodCl7cmV0dXJuXCJodG1sXCI9PT1wZSh0KT90OnQuYXNzaWduZWRTbG90fHx0LnBhcmVudE5vZGV8fChiZSh0KT90Lmhvc3Q6bnVsbCl8fERlKHQpfWZ1bmN0aW9uIEllKHQpe3JldHVybiBfZSh0KSYmXCJmaXhlZFwiIT09TGUodCkucG9zaXRpb24/dC5vZmZzZXRQYXJlbnQ6bnVsbH1mdW5jdGlvbiBOZSh0KXtmb3IodmFyIGU9bWUodCksaT1JZSh0KTtpJiZTZShpKSYmXCJzdGF0aWNcIj09PUxlKGkpLnBvc2l0aW9uOylpPUllKGkpO3JldHVybiBpJiYoXCJodG1sXCI9PT1wZShpKXx8XCJib2R5XCI9PT1wZShpKSYmXCJzdGF0aWNcIj09PUxlKGkpLnBvc2l0aW9uKT9lOml8fGZ1bmN0aW9uKHQpe3ZhciBlPS9maXJlZm94L2kudGVzdChUZSgpKTtpZigvVHJpZGVudC9pLnRlc3QoVGUoKSkmJl9lKHQpJiZcImZpeGVkXCI9PT1MZSh0KS5wb3NpdGlvbilyZXR1cm4gbnVsbDt2YXIgaT0kZSh0KTtmb3IoYmUoaSkmJihpPWkuaG9zdCk7X2UoaSkmJltcImh0bWxcIixcImJvZHlcIl0uaW5kZXhPZihwZShpKSk8MDspe3ZhciBuPUxlKGkpO2lmKFwibm9uZVwiIT09bi50cmFuc2Zvcm18fFwibm9uZVwiIT09bi5wZXJzcGVjdGl2ZXx8XCJwYWludFwiPT09bi5jb250YWlufHwtMSE9PVtcInRyYW5zZm9ybVwiLFwicGVyc3BlY3RpdmVcIl0uaW5kZXhPZihuLndpbGxDaGFuZ2UpfHxlJiZcImZpbHRlclwiPT09bi53aWxsQ2hhbmdlfHxlJiZuLmZpbHRlciYmXCJub25lXCIhPT1uLmZpbHRlcilyZXR1cm4gaTtpPWkucGFyZW50Tm9kZX1yZXR1cm4gbnVsbH0odCl8fGV9ZnVuY3Rpb24gUGUodCl7cmV0dXJuW1widG9wXCIsXCJib3R0b21cIl0uaW5kZXhPZih0KT49MD9cInhcIjpcInlcIn1mdW5jdGlvbiBqZSh0LGUsaSl7cmV0dXJuIHdlKHQsQWUoZSxpKSl9ZnVuY3Rpb24gTWUodCl7cmV0dXJuIE9iamVjdC5hc3NpZ24oe30se3RvcDowLHJpZ2h0OjAsYm90dG9tOjAsbGVmdDowfSx0KX1mdW5jdGlvbiBGZSh0LGUpe3JldHVybiBlLnJlZHVjZSgoZnVuY3Rpb24oZSxpKXtyZXR1cm4gZVtpXT10LGV9KSx7fSl9Y29uc3QgSGU9e25hbWU6XCJhcnJvd1wiLGVuYWJsZWQ6ITAscGhhc2U6XCJtYWluXCIsZm46ZnVuY3Rpb24odCl7dmFyIGUsaT10LnN0YXRlLG49dC5uYW1lLHM9dC5vcHRpb25zLG89aS5lbGVtZW50cy5hcnJvdyxyPWkubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLGE9eWUoaS5wbGFjZW1lbnQpLGw9UGUoYSksYz1bUXQsS3RdLmluZGV4T2YoYSk+PTA/XCJoZWlnaHRcIjpcIndpZHRoXCI7aWYobyYmcil7dmFyIGg9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTWUoXCJudW1iZXJcIiE9dHlwZW9mKHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90KE9iamVjdC5hc3NpZ24oe30sZS5yZWN0cyx7cGxhY2VtZW50OmUucGxhY2VtZW50fSkpOnQpP3Q6RmUodCxZdCkpfShzLnBhZGRpbmcsaSksZD14ZShvKSx1PVwieVwiPT09bD9xdDpRdCxmPVwieVwiPT09bD9WdDpLdCxwPWkucmVjdHMucmVmZXJlbmNlW2NdK2kucmVjdHMucmVmZXJlbmNlW2xdLXJbbF0taS5yZWN0cy5wb3BwZXJbY10sbT1yW2xdLWkucmVjdHMucmVmZXJlbmNlW2xdLGc9TmUobyksXz1nP1wieVwiPT09bD9nLmNsaWVudEhlaWdodHx8MDpnLmNsaWVudFdpZHRofHwwOjAsYj1wLzItbS8yLHY9aFt1XSx5PV8tZFtjXS1oW2ZdLHc9Xy8yLWRbY10vMitiLEE9amUodix3LHkpLEU9bDtpLm1vZGlmaWVyc0RhdGFbbl09KChlPXt9KVtFXT1BLGUuY2VudGVyT2Zmc2V0PUEtdyxlKX19LGVmZmVjdDpmdW5jdGlvbih0KXt2YXIgZT10LnN0YXRlLGk9dC5vcHRpb25zLmVsZW1lbnQsbj12b2lkIDA9PT1pP1wiW2RhdGEtcG9wcGVyLWFycm93XVwiOmk7bnVsbCE9biYmKFwic3RyaW5nXCIhPXR5cGVvZiBufHwobj1lLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKG4pKSkmJmtlKGUuZWxlbWVudHMucG9wcGVyLG4pJiYoZS5lbGVtZW50cy5hcnJvdz1uKX0scmVxdWlyZXM6W1wicG9wcGVyT2Zmc2V0c1wiXSxyZXF1aXJlc0lmRXhpc3RzOltcInByZXZlbnRPdmVyZmxvd1wiXX07ZnVuY3Rpb24gV2UodCl7cmV0dXJuIHQuc3BsaXQoXCItXCIpWzFdfXZhciBCZT17dG9wOlwiYXV0b1wiLHJpZ2h0OlwiYXV0b1wiLGJvdHRvbTpcImF1dG9cIixsZWZ0OlwiYXV0b1wifTtmdW5jdGlvbiB6ZSh0KXt2YXIgZSxpPXQucG9wcGVyLG49dC5wb3BwZXJSZWN0LHM9dC5wbGFjZW1lbnQsbz10LnZhcmlhdGlvbixyPXQub2Zmc2V0cyxhPXQucG9zaXRpb24sbD10LmdwdUFjY2VsZXJhdGlvbixjPXQuYWRhcHRpdmUsaD10LnJvdW5kT2Zmc2V0cyxkPXQuaXNGaXhlZCx1PXIueCxmPXZvaWQgMD09PXU/MDp1LHA9ci55LG09dm9pZCAwPT09cD8wOnAsZz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBoP2goe3g6Zix5Om19KTp7eDpmLHk6bX07Zj1nLngsbT1nLnk7dmFyIF89ci5oYXNPd25Qcm9wZXJ0eShcInhcIiksYj1yLmhhc093blByb3BlcnR5KFwieVwiKSx2PVF0LHk9cXQsdz13aW5kb3c7aWYoYyl7dmFyIEE9TmUoaSksRT1cImNsaWVudEhlaWdodFwiLFQ9XCJjbGllbnRXaWR0aFwiO0E9PT1tZShpKSYmXCJzdGF0aWNcIiE9PUxlKEE9RGUoaSkpLnBvc2l0aW9uJiZcImFic29sdXRlXCI9PT1hJiYoRT1cInNjcm9sbEhlaWdodFwiLFQ9XCJzY3JvbGxXaWR0aFwiKSwocz09PXF0fHwocz09PVF0fHxzPT09S3QpJiZvPT09R3QpJiYoeT1WdCxtLT0oZCYmQT09PXcmJncudmlzdWFsVmlld3BvcnQ/dy52aXN1YWxWaWV3cG9ydC5oZWlnaHQ6QVtFXSktbi5oZWlnaHQsbSo9bD8xOi0xKSxzIT09UXQmJihzIT09cXQmJnMhPT1WdHx8byE9PUd0KXx8KHY9S3QsZi09KGQmJkE9PT13JiZ3LnZpc3VhbFZpZXdwb3J0P3cudmlzdWFsVmlld3BvcnQud2lkdGg6QVtUXSktbi53aWR0aCxmKj1sPzE6LTEpfXZhciBDLE89T2JqZWN0LmFzc2lnbih7cG9zaXRpb246YX0sYyYmQmUpLHg9ITA9PT1oP2Z1bmN0aW9uKHQsZSl7dmFyIGk9dC54LG49dC55LHM9ZS5kZXZpY2VQaXhlbFJhdGlvfHwxO3JldHVybnt4OkVlKGkqcykvc3x8MCx5OkVlKG4qcykvc3x8MH19KHt4OmYseTptfSxtZShpKSk6e3g6Zix5Om19O3JldHVybiBmPXgueCxtPXgueSxsP09iamVjdC5hc3NpZ24oe30sTywoKEM9e30pW3ldPWI/XCIwXCI6XCJcIixDW3ZdPV8/XCIwXCI6XCJcIixDLnRyYW5zZm9ybT0ody5kZXZpY2VQaXhlbFJhdGlvfHwxKTw9MT9cInRyYW5zbGF0ZShcIitmK1wicHgsIFwiK20rXCJweClcIjpcInRyYW5zbGF0ZTNkKFwiK2YrXCJweCwgXCIrbStcInB4LCAwKVwiLEMpKTpPYmplY3QuYXNzaWduKHt9LE8sKChlPXt9KVt5XT1iP20rXCJweFwiOlwiXCIsZVt2XT1fP2YrXCJweFwiOlwiXCIsZS50cmFuc2Zvcm09XCJcIixlKSl9Y29uc3QgUmU9e25hbWU6XCJjb21wdXRlU3R5bGVzXCIsZW5hYmxlZDohMCxwaGFzZTpcImJlZm9yZVdyaXRlXCIsZm46ZnVuY3Rpb24odCl7dmFyIGU9dC5zdGF0ZSxpPXQub3B0aW9ucyxuPWkuZ3B1QWNjZWxlcmF0aW9uLHM9dm9pZCAwPT09bnx8bixvPWkuYWRhcHRpdmUscj12b2lkIDA9PT1vfHxvLGE9aS5yb3VuZE9mZnNldHMsbD12b2lkIDA9PT1hfHxhLGM9e3BsYWNlbWVudDp5ZShlLnBsYWNlbWVudCksdmFyaWF0aW9uOldlKGUucGxhY2VtZW50KSxwb3BwZXI6ZS5lbGVtZW50cy5wb3BwZXIscG9wcGVyUmVjdDplLnJlY3RzLnBvcHBlcixncHVBY2NlbGVyYXRpb246cyxpc0ZpeGVkOlwiZml4ZWRcIj09PWUub3B0aW9ucy5zdHJhdGVneX07bnVsbCE9ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMmJihlLnN0eWxlcy5wb3BwZXI9T2JqZWN0LmFzc2lnbih7fSxlLnN0eWxlcy5wb3BwZXIsemUoT2JqZWN0LmFzc2lnbih7fSxjLHtvZmZzZXRzOmUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLHBvc2l0aW9uOmUub3B0aW9ucy5zdHJhdGVneSxhZGFwdGl2ZTpyLHJvdW5kT2Zmc2V0czpsfSkpKSksbnVsbCE9ZS5tb2RpZmllcnNEYXRhLmFycm93JiYoZS5zdHlsZXMuYXJyb3c9T2JqZWN0LmFzc2lnbih7fSxlLnN0eWxlcy5hcnJvdyx6ZShPYmplY3QuYXNzaWduKHt9LGMse29mZnNldHM6ZS5tb2RpZmllcnNEYXRhLmFycm93LHBvc2l0aW9uOlwiYWJzb2x1dGVcIixhZGFwdGl2ZTohMSxyb3VuZE9mZnNldHM6bH0pKSkpLGUuYXR0cmlidXRlcy5wb3BwZXI9T2JqZWN0LmFzc2lnbih7fSxlLmF0dHJpYnV0ZXMucG9wcGVyLHtcImRhdGEtcG9wcGVyLXBsYWNlbWVudFwiOmUucGxhY2VtZW50fSl9LGRhdGE6e319O3ZhciBxZT17cGFzc2l2ZTohMH07Y29uc3QgVmU9e25hbWU6XCJldmVudExpc3RlbmVyc1wiLGVuYWJsZWQ6ITAscGhhc2U6XCJ3cml0ZVwiLGZuOmZ1bmN0aW9uKCl7fSxlZmZlY3Q6ZnVuY3Rpb24odCl7dmFyIGU9dC5zdGF0ZSxpPXQuaW5zdGFuY2Usbj10Lm9wdGlvbnMscz1uLnNjcm9sbCxvPXZvaWQgMD09PXN8fHMscj1uLnJlc2l6ZSxhPXZvaWQgMD09PXJ8fHIsbD1tZShlLmVsZW1lbnRzLnBvcHBlciksYz1bXS5jb25jYXQoZS5zY3JvbGxQYXJlbnRzLnJlZmVyZW5jZSxlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtyZXR1cm4gbyYmYy5mb3JFYWNoKChmdW5jdGlvbih0KXt0LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixpLnVwZGF0ZSxxZSl9KSksYSYmbC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsaS51cGRhdGUscWUpLGZ1bmN0aW9uKCl7byYmYy5mb3JFYWNoKChmdW5jdGlvbih0KXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixpLnVwZGF0ZSxxZSl9KSksYSYmbC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsaS51cGRhdGUscWUpfX0sZGF0YTp7fX07dmFyIEtlPXtsZWZ0OlwicmlnaHRcIixyaWdodDpcImxlZnRcIixib3R0b206XCJ0b3BcIix0b3A6XCJib3R0b21cIn07ZnVuY3Rpb24gUWUodCl7cmV0dXJuIHQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csKGZ1bmN0aW9uKHQpe3JldHVybiBLZVt0XX0pKX12YXIgWGU9e3N0YXJ0OlwiZW5kXCIsZW5kOlwic3RhcnRcIn07ZnVuY3Rpb24gWWUodCl7cmV0dXJuIHQucmVwbGFjZSgvc3RhcnR8ZW5kL2csKGZ1bmN0aW9uKHQpe3JldHVybiBYZVt0XX0pKX1mdW5jdGlvbiBVZSh0KXt2YXIgZT1tZSh0KTtyZXR1cm57c2Nyb2xsTGVmdDplLnBhZ2VYT2Zmc2V0LHNjcm9sbFRvcDplLnBhZ2VZT2Zmc2V0fX1mdW5jdGlvbiBHZSh0KXtyZXR1cm4gT2UoRGUodCkpLmxlZnQrVWUodCkuc2Nyb2xsTGVmdH1mdW5jdGlvbiBKZSh0KXt2YXIgZT1MZSh0KSxpPWUub3ZlcmZsb3csbj1lLm92ZXJmbG93WCxzPWUub3ZlcmZsb3dZO3JldHVybi9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbi8udGVzdChpK3Mrbil9ZnVuY3Rpb24gWmUodCl7cmV0dXJuW1wiaHRtbFwiLFwiYm9keVwiLFwiI2RvY3VtZW50XCJdLmluZGV4T2YocGUodCkpPj0wP3Qub3duZXJEb2N1bWVudC5ib2R5Ol9lKHQpJiZKZSh0KT90OlplKCRlKHQpKX1mdW5jdGlvbiB0aSh0LGUpe3ZhciBpO3ZvaWQgMD09PWUmJihlPVtdKTt2YXIgbj1aZSh0KSxzPW49PT0obnVsbD09KGk9dC5vd25lckRvY3VtZW50KT92b2lkIDA6aS5ib2R5KSxvPW1lKG4pLHI9cz9bb10uY29uY2F0KG8udmlzdWFsVmlld3BvcnR8fFtdLEplKG4pP246W10pOm4sYT1lLmNvbmNhdChyKTtyZXR1cm4gcz9hOmEuY29uY2F0KHRpKCRlKHIpKSl9ZnVuY3Rpb24gZWkodCl7cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sdCx7bGVmdDp0LngsdG9wOnQueSxyaWdodDp0LngrdC53aWR0aCxib3R0b206dC55K3QuaGVpZ2h0fSl9ZnVuY3Rpb24gaWkodCxlLGkpe3JldHVybiBlPT09WnQ/ZWkoZnVuY3Rpb24odCxlKXt2YXIgaT1tZSh0KSxuPURlKHQpLHM9aS52aXN1YWxWaWV3cG9ydCxvPW4uY2xpZW50V2lkdGgscj1uLmNsaWVudEhlaWdodCxhPTAsbD0wO2lmKHMpe289cy53aWR0aCxyPXMuaGVpZ2h0O3ZhciBjPUNlKCk7KGN8fCFjJiZcImZpeGVkXCI9PT1lKSYmKGE9cy5vZmZzZXRMZWZ0LGw9cy5vZmZzZXRUb3ApfXJldHVybnt3aWR0aDpvLGhlaWdodDpyLHg6YStHZSh0KSx5Omx9fSh0LGkpKTpnZShlKT9mdW5jdGlvbih0LGUpe3ZhciBpPU9lKHQsITEsXCJmaXhlZFwiPT09ZSk7cmV0dXJuIGkudG9wPWkudG9wK3QuY2xpZW50VG9wLGkubGVmdD1pLmxlZnQrdC5jbGllbnRMZWZ0LGkuYm90dG9tPWkudG9wK3QuY2xpZW50SGVpZ2h0LGkucmlnaHQ9aS5sZWZ0K3QuY2xpZW50V2lkdGgsaS53aWR0aD10LmNsaWVudFdpZHRoLGkuaGVpZ2h0PXQuY2xpZW50SGVpZ2h0LGkueD1pLmxlZnQsaS55PWkudG9wLGl9KGUsaSk6ZWkoZnVuY3Rpb24odCl7dmFyIGUsaT1EZSh0KSxuPVVlKHQpLHM9bnVsbD09KGU9dC5vd25lckRvY3VtZW50KT92b2lkIDA6ZS5ib2R5LG89d2UoaS5zY3JvbGxXaWR0aCxpLmNsaWVudFdpZHRoLHM/cy5zY3JvbGxXaWR0aDowLHM/cy5jbGllbnRXaWR0aDowKSxyPXdlKGkuc2Nyb2xsSGVpZ2h0LGkuY2xpZW50SGVpZ2h0LHM/cy5zY3JvbGxIZWlnaHQ6MCxzP3MuY2xpZW50SGVpZ2h0OjApLGE9LW4uc2Nyb2xsTGVmdCtHZSh0KSxsPS1uLnNjcm9sbFRvcDtyZXR1cm5cInJ0bFwiPT09TGUoc3x8aSkuZGlyZWN0aW9uJiYoYSs9d2UoaS5jbGllbnRXaWR0aCxzP3MuY2xpZW50V2lkdGg6MCktbykse3dpZHRoOm8saGVpZ2h0OnIseDphLHk6bH19KERlKHQpKSl9ZnVuY3Rpb24gbmkodCl7dmFyIGUsaT10LnJlZmVyZW5jZSxuPXQuZWxlbWVudCxzPXQucGxhY2VtZW50LG89cz95ZShzKTpudWxsLHI9cz9XZShzKTpudWxsLGE9aS54K2kud2lkdGgvMi1uLndpZHRoLzIsbD1pLnkraS5oZWlnaHQvMi1uLmhlaWdodC8yO3N3aXRjaChvKXtjYXNlIHF0OmU9e3g6YSx5OmkueS1uLmhlaWdodH07YnJlYWs7Y2FzZSBWdDplPXt4OmEseTppLnkraS5oZWlnaHR9O2JyZWFrO2Nhc2UgS3Q6ZT17eDppLngraS53aWR0aCx5Omx9O2JyZWFrO2Nhc2UgUXQ6ZT17eDppLngtbi53aWR0aCx5Omx9O2JyZWFrO2RlZmF1bHQ6ZT17eDppLngseTppLnl9fXZhciBjPW8/UGUobyk6bnVsbDtpZihudWxsIT1jKXt2YXIgaD1cInlcIj09PWM/XCJoZWlnaHRcIjpcIndpZHRoXCI7c3dpdGNoKHIpe2Nhc2UgVXQ6ZVtjXT1lW2NdLShpW2hdLzItbltoXS8yKTticmVhaztjYXNlIEd0OmVbY109ZVtjXSsoaVtoXS8yLW5baF0vMil9fXJldHVybiBlfWZ1bmN0aW9uIHNpKHQsZSl7dm9pZCAwPT09ZSYmKGU9e30pO3ZhciBpPWUsbj1pLnBsYWNlbWVudCxzPXZvaWQgMD09PW4/dC5wbGFjZW1lbnQ6bixvPWkuc3RyYXRlZ3kscj12b2lkIDA9PT1vP3Quc3RyYXRlZ3k6byxhPWkuYm91bmRhcnksbD12b2lkIDA9PT1hP0p0OmEsYz1pLnJvb3RCb3VuZGFyeSxoPXZvaWQgMD09PWM/WnQ6YyxkPWkuZWxlbWVudENvbnRleHQsdT12b2lkIDA9PT1kP3RlOmQsZj1pLmFsdEJvdW5kYXJ5LHA9dm9pZCAwIT09ZiYmZixtPWkucGFkZGluZyxnPXZvaWQgMD09PW0/MDptLF89TWUoXCJudW1iZXJcIiE9dHlwZW9mIGc/ZzpGZShnLFl0KSksYj11PT09dGU/ZWU6dGUsdj10LnJlY3RzLnBvcHBlcix5PXQuZWxlbWVudHNbcD9iOnVdLHc9ZnVuY3Rpb24odCxlLGksbil7dmFyIHM9XCJjbGlwcGluZ1BhcmVudHNcIj09PWU/ZnVuY3Rpb24odCl7dmFyIGU9dGkoJGUodCkpLGk9W1wiYWJzb2x1dGVcIixcImZpeGVkXCJdLmluZGV4T2YoTGUodCkucG9zaXRpb24pPj0wJiZfZSh0KT9OZSh0KTp0O3JldHVybiBnZShpKT9lLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIGdlKHQpJiZrZSh0LGkpJiZcImJvZHlcIiE9PXBlKHQpfSkpOltdfSh0KTpbXS5jb25jYXQoZSksbz1bXS5jb25jYXQocyxbaV0pLHI9b1swXSxhPW8ucmVkdWNlKChmdW5jdGlvbihlLGkpe3ZhciBzPWlpKHQsaSxuKTtyZXR1cm4gZS50b3A9d2Uocy50b3AsZS50b3ApLGUucmlnaHQ9QWUocy5yaWdodCxlLnJpZ2h0KSxlLmJvdHRvbT1BZShzLmJvdHRvbSxlLmJvdHRvbSksZS5sZWZ0PXdlKHMubGVmdCxlLmxlZnQpLGV9KSxpaSh0LHIsbikpO3JldHVybiBhLndpZHRoPWEucmlnaHQtYS5sZWZ0LGEuaGVpZ2h0PWEuYm90dG9tLWEudG9wLGEueD1hLmxlZnQsYS55PWEudG9wLGF9KGdlKHkpP3k6eS5jb250ZXh0RWxlbWVudHx8RGUodC5lbGVtZW50cy5wb3BwZXIpLGwsaCxyKSxBPU9lKHQuZWxlbWVudHMucmVmZXJlbmNlKSxFPW5pKHtyZWZlcmVuY2U6QSxlbGVtZW50OnYscGxhY2VtZW50OnN9KSxUPWVpKE9iamVjdC5hc3NpZ24oe30sdixFKSksQz11PT09dGU/VDpBLE89e3RvcDp3LnRvcC1DLnRvcCtfLnRvcCxib3R0b206Qy5ib3R0b20tdy5ib3R0b20rXy5ib3R0b20sbGVmdDp3LmxlZnQtQy5sZWZ0K18ubGVmdCxyaWdodDpDLnJpZ2h0LXcucmlnaHQrXy5yaWdodH0seD10Lm1vZGlmaWVyc0RhdGEub2Zmc2V0O2lmKHU9PT10ZSYmeCl7dmFyIGs9eFtzXTtPYmplY3Qua2V5cyhPKS5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgZT1bS3QsVnRdLmluZGV4T2YodCk+PTA/MTotMSxpPVtxdCxWdF0uaW5kZXhPZih0KT49MD9cInlcIjpcInhcIjtPW3RdKz1rW2ldKmV9KSl9cmV0dXJuIE99ZnVuY3Rpb24gb2kodCxlKXt2b2lkIDA9PT1lJiYoZT17fSk7dmFyIGk9ZSxuPWkucGxhY2VtZW50LHM9aS5ib3VuZGFyeSxvPWkucm9vdEJvdW5kYXJ5LHI9aS5wYWRkaW5nLGE9aS5mbGlwVmFyaWF0aW9ucyxsPWkuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLGM9dm9pZCAwPT09bD9uZTpsLGg9V2UobiksZD1oP2E/aWU6aWUuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gV2UodCk9PT1ofSkpOll0LHU9ZC5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBjLmluZGV4T2YodCk+PTB9KSk7MD09PXUubGVuZ3RoJiYodT1kKTt2YXIgZj11LnJlZHVjZSgoZnVuY3Rpb24oZSxpKXtyZXR1cm4gZVtpXT1zaSh0LHtwbGFjZW1lbnQ6aSxib3VuZGFyeTpzLHJvb3RCb3VuZGFyeTpvLHBhZGRpbmc6cn0pW3llKGkpXSxlfSkse30pO3JldHVybiBPYmplY3Qua2V5cyhmKS5zb3J0KChmdW5jdGlvbih0LGUpe3JldHVybiBmW3RdLWZbZV19KSl9Y29uc3Qgcmk9e25hbWU6XCJmbGlwXCIsZW5hYmxlZDohMCxwaGFzZTpcIm1haW5cIixmbjpmdW5jdGlvbih0KXt2YXIgZT10LnN0YXRlLGk9dC5vcHRpb25zLG49dC5uYW1lO2lmKCFlLm1vZGlmaWVyc0RhdGFbbl0uX3NraXApe2Zvcih2YXIgcz1pLm1haW5BeGlzLG89dm9pZCAwPT09c3x8cyxyPWkuYWx0QXhpcyxhPXZvaWQgMD09PXJ8fHIsbD1pLmZhbGxiYWNrUGxhY2VtZW50cyxjPWkucGFkZGluZyxoPWkuYm91bmRhcnksZD1pLnJvb3RCb3VuZGFyeSx1PWkuYWx0Qm91bmRhcnksZj1pLmZsaXBWYXJpYXRpb25zLHA9dm9pZCAwPT09Znx8ZixtPWkuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLGc9ZS5vcHRpb25zLnBsYWNlbWVudCxfPXllKGcpLGI9bHx8KF8hPT1nJiZwP2Z1bmN0aW9uKHQpe2lmKHllKHQpPT09WHQpcmV0dXJuW107dmFyIGU9UWUodCk7cmV0dXJuW1llKHQpLGUsWWUoZSldfShnKTpbUWUoZyldKSx2PVtnXS5jb25jYXQoYikucmVkdWNlKChmdW5jdGlvbih0LGkpe3JldHVybiB0LmNvbmNhdCh5ZShpKT09PVh0P29pKGUse3BsYWNlbWVudDppLGJvdW5kYXJ5Omgscm9vdEJvdW5kYXJ5OmQscGFkZGluZzpjLGZsaXBWYXJpYXRpb25zOnAsYWxsb3dlZEF1dG9QbGFjZW1lbnRzOm19KTppKX0pLFtdKSx5PWUucmVjdHMucmVmZXJlbmNlLHc9ZS5yZWN0cy5wb3BwZXIsQT1uZXcgTWFwLEU9ITAsVD12WzBdLEM9MDtDPHYubGVuZ3RoO0MrKyl7dmFyIE89dltDXSx4PXllKE8pLGs9V2UoTyk9PT1VdCxMPVtxdCxWdF0uaW5kZXhPZih4KT49MCxTPUw/XCJ3aWR0aFwiOlwiaGVpZ2h0XCIsRD1zaShlLHtwbGFjZW1lbnQ6Tyxib3VuZGFyeTpoLHJvb3RCb3VuZGFyeTpkLGFsdEJvdW5kYXJ5OnUscGFkZGluZzpjfSksJD1MP2s/S3Q6UXQ6az9WdDpxdDt5W1NdPndbU10mJigkPVFlKCQpKTt2YXIgST1RZSgkKSxOPVtdO2lmKG8mJk4ucHVzaChEW3hdPD0wKSxhJiZOLnB1c2goRFskXTw9MCxEW0ldPD0wKSxOLmV2ZXJ5KChmdW5jdGlvbih0KXtyZXR1cm4gdH0pKSl7VD1PLEU9ITE7YnJlYWt9QS5zZXQoTyxOKX1pZihFKWZvcih2YXIgUD1mdW5jdGlvbih0KXt2YXIgZT12LmZpbmQoKGZ1bmN0aW9uKGUpe3ZhciBpPUEuZ2V0KGUpO2lmKGkpcmV0dXJuIGkuc2xpY2UoMCx0KS5ldmVyeSgoZnVuY3Rpb24odCl7cmV0dXJuIHR9KSl9KSk7aWYoZSlyZXR1cm4gVD1lLFwiYnJlYWtcIn0saj1wPzM6MTtqPjAmJlwiYnJlYWtcIiE9PVAoaik7ai0tKTtlLnBsYWNlbWVudCE9PVQmJihlLm1vZGlmaWVyc0RhdGFbbl0uX3NraXA9ITAsZS5wbGFjZW1lbnQ9VCxlLnJlc2V0PSEwKX19LHJlcXVpcmVzSWZFeGlzdHM6W1wib2Zmc2V0XCJdLGRhdGE6e19za2lwOiExfX07ZnVuY3Rpb24gYWkodCxlLGkpe3JldHVybiB2b2lkIDA9PT1pJiYoaT17eDowLHk6MH0pLHt0b3A6dC50b3AtZS5oZWlnaHQtaS55LHJpZ2h0OnQucmlnaHQtZS53aWR0aCtpLngsYm90dG9tOnQuYm90dG9tLWUuaGVpZ2h0K2kueSxsZWZ0OnQubGVmdC1lLndpZHRoLWkueH19ZnVuY3Rpb24gbGkodCl7cmV0dXJuW3F0LEt0LFZ0LFF0XS5zb21lKChmdW5jdGlvbihlKXtyZXR1cm4gdFtlXT49MH0pKX1jb25zdCBjaT17bmFtZTpcImhpZGVcIixlbmFibGVkOiEwLHBoYXNlOlwibWFpblwiLHJlcXVpcmVzSWZFeGlzdHM6W1wicHJldmVudE92ZXJmbG93XCJdLGZuOmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsaT10Lm5hbWUsbj1lLnJlY3RzLnJlZmVyZW5jZSxzPWUucmVjdHMucG9wcGVyLG89ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdyxyPXNpKGUse2VsZW1lbnRDb250ZXh0OlwicmVmZXJlbmNlXCJ9KSxhPXNpKGUse2FsdEJvdW5kYXJ5OiEwfSksbD1haShyLG4pLGM9YWkoYSxzLG8pLGg9bGkobCksZD1saShjKTtlLm1vZGlmaWVyc0RhdGFbaV09e3JlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0czpsLHBvcHBlckVzY2FwZU9mZnNldHM6Yyxpc1JlZmVyZW5jZUhpZGRlbjpoLGhhc1BvcHBlckVzY2FwZWQ6ZH0sZS5hdHRyaWJ1dGVzLnBvcHBlcj1PYmplY3QuYXNzaWduKHt9LGUuYXR0cmlidXRlcy5wb3BwZXIse1wiZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlblwiOmgsXCJkYXRhLXBvcHBlci1lc2NhcGVkXCI6ZH0pfX0saGk9e25hbWU6XCJvZmZzZXRcIixlbmFibGVkOiEwLHBoYXNlOlwibWFpblwiLHJlcXVpcmVzOltcInBvcHBlck9mZnNldHNcIl0sZm46ZnVuY3Rpb24odCl7dmFyIGU9dC5zdGF0ZSxpPXQub3B0aW9ucyxuPXQubmFtZSxzPWkub2Zmc2V0LG89dm9pZCAwPT09cz9bMCwwXTpzLHI9bmUucmVkdWNlKChmdW5jdGlvbih0LGkpe3JldHVybiB0W2ldPWZ1bmN0aW9uKHQsZSxpKXt2YXIgbj15ZSh0KSxzPVtRdCxxdF0uaW5kZXhPZihuKT49MD8tMToxLG89XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pKE9iamVjdC5hc3NpZ24oe30sZSx7cGxhY2VtZW50OnR9KSk6aSxyPW9bMF0sYT1vWzFdO3JldHVybiByPXJ8fDAsYT0oYXx8MCkqcyxbUXQsS3RdLmluZGV4T2Yobik+PTA/e3g6YSx5OnJ9Ont4OnIseTphfX0oaSxlLnJlY3RzLG8pLHR9KSx7fSksYT1yW2UucGxhY2VtZW50XSxsPWEueCxjPWEueTtudWxsIT1lLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyYmKGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLngrPWwsZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueSs9YyksZS5tb2RpZmllcnNEYXRhW25dPXJ9fSxkaT17bmFtZTpcInBvcHBlck9mZnNldHNcIixlbmFibGVkOiEwLHBoYXNlOlwicmVhZFwiLGZuOmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsaT10Lm5hbWU7ZS5tb2RpZmllcnNEYXRhW2ldPW5pKHtyZWZlcmVuY2U6ZS5yZWN0cy5yZWZlcmVuY2UsZWxlbWVudDplLnJlY3RzLnBvcHBlcixwbGFjZW1lbnQ6ZS5wbGFjZW1lbnR9KX0sZGF0YTp7fX0sdWk9e25hbWU6XCJwcmV2ZW50T3ZlcmZsb3dcIixlbmFibGVkOiEwLHBoYXNlOlwibWFpblwiLGZuOmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsaT10Lm9wdGlvbnMsbj10Lm5hbWUscz1pLm1haW5BeGlzLG89dm9pZCAwPT09c3x8cyxyPWkuYWx0QXhpcyxhPXZvaWQgMCE9PXImJnIsbD1pLmJvdW5kYXJ5LGM9aS5yb290Qm91bmRhcnksaD1pLmFsdEJvdW5kYXJ5LGQ9aS5wYWRkaW5nLHU9aS50ZXRoZXIsZj12b2lkIDA9PT11fHx1LHA9aS50ZXRoZXJPZmZzZXQsbT12b2lkIDA9PT1wPzA6cCxnPXNpKGUse2JvdW5kYXJ5Omwscm9vdEJvdW5kYXJ5OmMscGFkZGluZzpkLGFsdEJvdW5kYXJ5Omh9KSxfPXllKGUucGxhY2VtZW50KSxiPVdlKGUucGxhY2VtZW50KSx2PSFiLHk9UGUoXyksdz1cInhcIj09PXk/XCJ5XCI6XCJ4XCIsQT1lLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxFPWUucmVjdHMucmVmZXJlbmNlLFQ9ZS5yZWN0cy5wb3BwZXIsQz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBtP20oT2JqZWN0LmFzc2lnbih7fSxlLnJlY3RzLHtwbGFjZW1lbnQ6ZS5wbGFjZW1lbnR9KSk6bSxPPVwibnVtYmVyXCI9PXR5cGVvZiBDP3ttYWluQXhpczpDLGFsdEF4aXM6Q306T2JqZWN0LmFzc2lnbih7bWFpbkF4aXM6MCxhbHRBeGlzOjB9LEMpLHg9ZS5tb2RpZmllcnNEYXRhLm9mZnNldD9lLm1vZGlmaWVyc0RhdGEub2Zmc2V0W2UucGxhY2VtZW50XTpudWxsLGs9e3g6MCx5OjB9O2lmKEEpe2lmKG8pe3ZhciBMLFM9XCJ5XCI9PT15P3F0OlF0LEQ9XCJ5XCI9PT15P1Z0Okt0LCQ9XCJ5XCI9PT15P1wiaGVpZ2h0XCI6XCJ3aWR0aFwiLEk9QVt5XSxOPUkrZ1tTXSxQPUktZ1tEXSxqPWY/LVRbJF0vMjowLE09Yj09PVV0P0VbJF06VFskXSxGPWI9PT1VdD8tVFskXTotRVskXSxIPWUuZWxlbWVudHMuYXJyb3csVz1mJiZIP3hlKEgpOnt3aWR0aDowLGhlaWdodDowfSxCPWUubW9kaWZpZXJzRGF0YVtcImFycm93I3BlcnNpc3RlbnRcIl0/ZS5tb2RpZmllcnNEYXRhW1wiYXJyb3cjcGVyc2lzdGVudFwiXS5wYWRkaW5nOnt0b3A6MCxyaWdodDowLGJvdHRvbTowLGxlZnQ6MH0sej1CW1NdLFI9QltEXSxxPWplKDAsRVskXSxXWyRdKSxWPXY/RVskXS8yLWotcS16LU8ubWFpbkF4aXM6TS1xLXotTy5tYWluQXhpcyxLPXY/LUVbJF0vMitqK3ErUitPLm1haW5BeGlzOkYrcStSK08ubWFpbkF4aXMsUT1lLmVsZW1lbnRzLmFycm93JiZOZShlLmVsZW1lbnRzLmFycm93KSxYPVE/XCJ5XCI9PT15P1EuY2xpZW50VG9wfHwwOlEuY2xpZW50TGVmdHx8MDowLFk9bnVsbCE9KEw9bnVsbD09eD92b2lkIDA6eFt5XSk/TDowLFU9SStLLVksRz1qZShmP0FlKE4sSStWLVktWCk6TixJLGY/d2UoUCxVKTpQKTtBW3ldPUcsa1t5XT1HLUl9aWYoYSl7dmFyIEosWj1cInhcIj09PXk/cXQ6UXQsdHQ9XCJ4XCI9PT15P1Z0Okt0LGV0PUFbd10saXQ9XCJ5XCI9PT13P1wiaGVpZ2h0XCI6XCJ3aWR0aFwiLG50PWV0K2dbWl0sc3Q9ZXQtZ1t0dF0sb3Q9LTEhPT1bcXQsUXRdLmluZGV4T2YoXykscnQ9bnVsbCE9KEo9bnVsbD09eD92b2lkIDA6eFt3XSk/SjowLGF0PW90P250OmV0LUVbaXRdLVRbaXRdLXJ0K08uYWx0QXhpcyxsdD1vdD9ldCtFW2l0XStUW2l0XS1ydC1PLmFsdEF4aXM6c3QsY3Q9ZiYmb3Q/ZnVuY3Rpb24odCxlLGkpe3ZhciBuPWplKHQsZSxpKTtyZXR1cm4gbj5pP2k6bn0oYXQsZXQsbHQpOmplKGY/YXQ6bnQsZXQsZj9sdDpzdCk7QVt3XT1jdCxrW3ddPWN0LWV0fWUubW9kaWZpZXJzRGF0YVtuXT1rfX0scmVxdWlyZXNJZkV4aXN0czpbXCJvZmZzZXRcIl19O2Z1bmN0aW9uIGZpKHQsZSxpKXt2b2lkIDA9PT1pJiYoaT0hMSk7dmFyIG4scyxvPV9lKGUpLHI9X2UoZSkmJmZ1bmN0aW9uKHQpe3ZhciBlPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksaT1FZShlLndpZHRoKS90Lm9mZnNldFdpZHRofHwxLG49RWUoZS5oZWlnaHQpL3Qub2Zmc2V0SGVpZ2h0fHwxO3JldHVybiAxIT09aXx8MSE9PW59KGUpLGE9RGUoZSksbD1PZSh0LHIsaSksYz17c2Nyb2xsTGVmdDowLHNjcm9sbFRvcDowfSxoPXt4OjAseTowfTtyZXR1cm4ob3x8IW8mJiFpKSYmKChcImJvZHlcIiE9PXBlKGUpfHxKZShhKSkmJihjPShuPWUpIT09bWUobikmJl9lKG4pP3tzY3JvbGxMZWZ0OihzPW4pLnNjcm9sbExlZnQsc2Nyb2xsVG9wOnMuc2Nyb2xsVG9wfTpVZShuKSksX2UoZSk/KChoPU9lKGUsITApKS54Kz1lLmNsaWVudExlZnQsaC55Kz1lLmNsaWVudFRvcCk6YSYmKGgueD1HZShhKSkpLHt4OmwubGVmdCtjLnNjcm9sbExlZnQtaC54LHk6bC50b3ArYy5zY3JvbGxUb3AtaC55LHdpZHRoOmwud2lkdGgsaGVpZ2h0OmwuaGVpZ2h0fX1mdW5jdGlvbiBwaSh0KXt2YXIgZT1uZXcgTWFwLGk9bmV3IFNldCxuPVtdO2Z1bmN0aW9uIHModCl7aS5hZGQodC5uYW1lKSxbXS5jb25jYXQodC5yZXF1aXJlc3x8W10sdC5yZXF1aXJlc0lmRXhpc3RzfHxbXSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7aWYoIWkuaGFzKHQpKXt2YXIgbj1lLmdldCh0KTtuJiZzKG4pfX0pKSxuLnB1c2godCl9cmV0dXJuIHQuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZS5zZXQodC5uYW1lLHQpfSkpLHQuZm9yRWFjaCgoZnVuY3Rpb24odCl7aS5oYXModC5uYW1lKXx8cyh0KX0pKSxufXZhciBtaT17cGxhY2VtZW50OlwiYm90dG9tXCIsbW9kaWZpZXJzOltdLHN0cmF0ZWd5OlwiYWJzb2x1dGVcIn07ZnVuY3Rpb24gZ2koKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxlPW5ldyBBcnJheSh0KSxpPTA7aTx0O2krKyllW2ldPWFyZ3VtZW50c1tpXTtyZXR1cm4hZS5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4hKHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KX0pKX1mdW5jdGlvbiBfaSh0KXt2b2lkIDA9PT10JiYodD17fSk7dmFyIGU9dCxpPWUuZGVmYXVsdE1vZGlmaWVycyxuPXZvaWQgMD09PWk/W106aSxzPWUuZGVmYXVsdE9wdGlvbnMsbz12b2lkIDA9PT1zP21pOnM7cmV0dXJuIGZ1bmN0aW9uKHQsZSxpKXt2b2lkIDA9PT1pJiYoaT1vKTt2YXIgcyxyLGE9e3BsYWNlbWVudDpcImJvdHRvbVwiLG9yZGVyZWRNb2RpZmllcnM6W10sb3B0aW9uczpPYmplY3QuYXNzaWduKHt9LG1pLG8pLG1vZGlmaWVyc0RhdGE6e30sZWxlbWVudHM6e3JlZmVyZW5jZTp0LHBvcHBlcjplfSxhdHRyaWJ1dGVzOnt9LHN0eWxlczp7fX0sbD1bXSxjPSExLGg9e3N0YXRlOmEsc2V0T3B0aW9uczpmdW5jdGlvbihpKXt2YXIgcz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2koYS5vcHRpb25zKTppO2QoKSxhLm9wdGlvbnM9T2JqZWN0LmFzc2lnbih7fSxvLGEub3B0aW9ucyxzKSxhLnNjcm9sbFBhcmVudHM9e3JlZmVyZW5jZTpnZSh0KT90aSh0KTp0LmNvbnRleHRFbGVtZW50P3RpKHQuY29udGV4dEVsZW1lbnQpOltdLHBvcHBlcjp0aShlKX07dmFyIHIsYyx1PWZ1bmN0aW9uKHQpe3ZhciBlPXBpKHQpO3JldHVybiBmZS5yZWR1Y2UoKGZ1bmN0aW9uKHQsaSl7cmV0dXJuIHQuY29uY2F0KGUuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdC5waGFzZT09PWl9KSkpfSksW10pfSgocj1bXS5jb25jYXQobixhLm9wdGlvbnMubW9kaWZpZXJzKSxjPXIucmVkdWNlKChmdW5jdGlvbih0LGUpe3ZhciBpPXRbZS5uYW1lXTtyZXR1cm4gdFtlLm5hbWVdPWk/T2JqZWN0LmFzc2lnbih7fSxpLGUse29wdGlvbnM6T2JqZWN0LmFzc2lnbih7fSxpLm9wdGlvbnMsZS5vcHRpb25zKSxkYXRhOk9iamVjdC5hc3NpZ24oe30saS5kYXRhLGUuZGF0YSl9KTplLHR9KSx7fSksT2JqZWN0LmtleXMoYykubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gY1t0XX0pKSkpO3JldHVybiBhLm9yZGVyZWRNb2RpZmllcnM9dS5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiB0LmVuYWJsZWR9KSksYS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZhciBlPXQubmFtZSxpPXQub3B0aW9ucyxuPXZvaWQgMD09PWk/e306aSxzPXQuZWZmZWN0O2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHMpe3ZhciBvPXMoe3N0YXRlOmEsbmFtZTplLGluc3RhbmNlOmgsb3B0aW9uczpufSk7bC5wdXNoKG98fGZ1bmN0aW9uKCl7fSl9fSkpLGgudXBkYXRlKCl9LGZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7aWYoIWMpe3ZhciB0PWEuZWxlbWVudHMsZT10LnJlZmVyZW5jZSxpPXQucG9wcGVyO2lmKGdpKGUsaSkpe2EucmVjdHM9e3JlZmVyZW5jZTpmaShlLE5lKGkpLFwiZml4ZWRcIj09PWEub3B0aW9ucy5zdHJhdGVneSkscG9wcGVyOnhlKGkpfSxhLnJlc2V0PSExLGEucGxhY2VtZW50PWEub3B0aW9ucy5wbGFjZW1lbnQsYS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiBhLm1vZGlmaWVyc0RhdGFbdC5uYW1lXT1PYmplY3QuYXNzaWduKHt9LHQuZGF0YSl9KSk7Zm9yKHZhciBuPTA7bjxhLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoO24rKylpZighMCE9PWEucmVzZXQpe3ZhciBzPWEub3JkZXJlZE1vZGlmaWVyc1tuXSxvPXMuZm4scj1zLm9wdGlvbnMsbD12b2lkIDA9PT1yP3t9OnIsZD1zLm5hbWU7XCJmdW5jdGlvblwiPT10eXBlb2YgbyYmKGE9byh7c3RhdGU6YSxvcHRpb25zOmwsbmFtZTpkLGluc3RhbmNlOmh9KXx8YSl9ZWxzZSBhLnJlc2V0PSExLG49LTF9fX0sdXBkYXRlOihzPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbih0KXtoLmZvcmNlVXBkYXRlKCksdChhKX0pKX0sZnVuY3Rpb24oKXtyZXR1cm4gcnx8KHI9bmV3IFByb21pc2UoKGZ1bmN0aW9uKHQpe1Byb21pc2UucmVzb2x2ZSgpLnRoZW4oKGZ1bmN0aW9uKCl7cj12b2lkIDAsdChzKCkpfSkpfSkpKSxyfSksZGVzdHJveTpmdW5jdGlvbigpe2QoKSxjPSEwfX07aWYoIWdpKHQsZSkpcmV0dXJuIGg7ZnVuY3Rpb24gZCgpe2wuZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIHQoKX0pKSxsPVtdfXJldHVybiBoLnNldE9wdGlvbnMoaSkudGhlbigoZnVuY3Rpb24odCl7IWMmJmkub25GaXJzdFVwZGF0ZSYmaS5vbkZpcnN0VXBkYXRlKHQpfSkpLGh9fXZhciBiaT1faSgpLHZpPV9pKHtkZWZhdWx0TW9kaWZpZXJzOltWZSxkaSxSZSx2ZV19KSx5aT1faSh7ZGVmYXVsdE1vZGlmaWVyczpbVmUsZGksUmUsdmUsaGkscmksdWksSGUsY2ldfSk7Y29uc3Qgd2k9T2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydHkoe19fcHJvdG9fXzpudWxsLGFmdGVyTWFpbjpjZSxhZnRlclJlYWQ6cmUsYWZ0ZXJXcml0ZTp1ZSxhcHBseVN0eWxlczp2ZSxhcnJvdzpIZSxhdXRvOlh0LGJhc2VQbGFjZW1lbnRzOll0LGJlZm9yZU1haW46YWUsYmVmb3JlUmVhZDpzZSxiZWZvcmVXcml0ZTpoZSxib3R0b206VnQsY2xpcHBpbmdQYXJlbnRzOkp0LGNvbXB1dGVTdHlsZXM6UmUsY3JlYXRlUG9wcGVyOnlpLGNyZWF0ZVBvcHBlckJhc2U6YmksY3JlYXRlUG9wcGVyTGl0ZTp2aSxkZXRlY3RPdmVyZmxvdzpzaSxlbmQ6R3QsZXZlbnRMaXN0ZW5lcnM6VmUsZmxpcDpyaSxoaWRlOmNpLGxlZnQ6UXQsbWFpbjpsZSxtb2RpZmllclBoYXNlczpmZSxvZmZzZXQ6aGkscGxhY2VtZW50czpuZSxwb3BwZXI6dGUscG9wcGVyR2VuZXJhdG9yOl9pLHBvcHBlck9mZnNldHM6ZGkscHJldmVudE92ZXJmbG93OnVpLHJlYWQ6b2UscmVmZXJlbmNlOmVlLHJpZ2h0Okt0LHN0YXJ0OlV0LHRvcDpxdCx2YXJpYXRpb25QbGFjZW1lbnRzOmllLHZpZXdwb3J0Olp0LHdyaXRlOmRlfSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSksQWk9XCJkcm9wZG93blwiLEVpPVwiLmJzLmRyb3Bkb3duXCIsVGk9XCIuZGF0YS1hcGlcIixDaT1cIkFycm93VXBcIixPaT1cIkFycm93RG93blwiLHhpPWBoaWRlJHtFaX1gLGtpPWBoaWRkZW4ke0VpfWAsTGk9YHNob3cke0VpfWAsU2k9YHNob3duJHtFaX1gLERpPWBjbGljayR7RWl9JHtUaX1gLCRpPWBrZXlkb3duJHtFaX0ke1RpfWAsSWk9YGtleXVwJHtFaX0ke1RpfWAsTmk9XCJzaG93XCIsUGk9J1tkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJdOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJyxqaT1gJHtQaX0uJHtOaX1gLE1pPVwiLmRyb3Bkb3duLW1lbnVcIixGaT1wKCk/XCJ0b3AtZW5kXCI6XCJ0b3Atc3RhcnRcIixIaT1wKCk/XCJ0b3Atc3RhcnRcIjpcInRvcC1lbmRcIixXaT1wKCk/XCJib3R0b20tZW5kXCI6XCJib3R0b20tc3RhcnRcIixCaT1wKCk/XCJib3R0b20tc3RhcnRcIjpcImJvdHRvbS1lbmRcIix6aT1wKCk/XCJsZWZ0LXN0YXJ0XCI6XCJyaWdodC1zdGFydFwiLFJpPXAoKT9cInJpZ2h0LXN0YXJ0XCI6XCJsZWZ0LXN0YXJ0XCIscWk9e2F1dG9DbG9zZTohMCxib3VuZGFyeTpcImNsaXBwaW5nUGFyZW50c1wiLGRpc3BsYXk6XCJkeW5hbWljXCIsb2Zmc2V0OlswLDJdLHBvcHBlckNvbmZpZzpudWxsLHJlZmVyZW5jZTpcInRvZ2dsZVwifSxWaT17YXV0b0Nsb3NlOlwiKGJvb2xlYW58c3RyaW5nKVwiLGJvdW5kYXJ5OlwiKHN0cmluZ3xlbGVtZW50KVwiLGRpc3BsYXk6XCJzdHJpbmdcIixvZmZzZXQ6XCIoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKVwiLHBvcHBlckNvbmZpZzpcIihudWxsfG9iamVjdHxmdW5jdGlvbilcIixyZWZlcmVuY2U6XCIoc3RyaW5nfGVsZW1lbnR8b2JqZWN0KVwifTtjbGFzcyBLaSBleHRlbmRzIFd7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpLHRoaXMuX3BvcHBlcj1udWxsLHRoaXMuX3BhcmVudD10aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsdGhpcy5fbWVudT16Lm5leHQodGhpcy5fZWxlbWVudCxNaSlbMF18fHoucHJldih0aGlzLl9lbGVtZW50LE1pKVswXXx8ei5maW5kT25lKE1pLHRoaXMuX3BhcmVudCksdGhpcy5faW5OYXZiYXI9dGhpcy5fZGV0ZWN0TmF2YmFyKCl9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIHFpfXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4gVml9c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuIEFpfXRvZ2dsZSgpe3JldHVybiB0aGlzLl9pc1Nob3duKCk/dGhpcy5oaWRlKCk6dGhpcy5zaG93KCl9c2hvdygpe2lmKGwodGhpcy5fZWxlbWVudCl8fHRoaXMuX2lzU2hvd24oKSlyZXR1cm47Y29uc3QgdD17cmVsYXRlZFRhcmdldDp0aGlzLl9lbGVtZW50fTtpZighTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsTGksdCkuZGVmYXVsdFByZXZlbnRlZCl7aWYodGhpcy5fY3JlYXRlUG9wcGVyKCksXCJvbnRvdWNoc3RhcnRcImluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCYmIXRoaXMuX3BhcmVudC5jbG9zZXN0KFwiLm5hdmJhci1uYXZcIikpZm9yKGNvbnN0IHQgb2ZbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpTi5vbih0LFwibW91c2VvdmVyXCIsaCk7dGhpcy5fZWxlbWVudC5mb2N1cygpLHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCEwKSx0aGlzLl9tZW51LmNsYXNzTGlzdC5hZGQoTmkpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChOaSksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsU2ksdCl9fWhpZGUoKXtpZihsKHRoaXMuX2VsZW1lbnQpfHwhdGhpcy5faXNTaG93bigpKXJldHVybjtjb25zdCB0PXtyZWxhdGVkVGFyZ2V0OnRoaXMuX2VsZW1lbnR9O3RoaXMuX2NvbXBsZXRlSGlkZSh0KX1kaXNwb3NlKCl7dGhpcy5fcG9wcGVyJiZ0aGlzLl9wb3BwZXIuZGVzdHJveSgpLHN1cGVyLmRpc3Bvc2UoKX11cGRhdGUoKXt0aGlzLl9pbk5hdmJhcj10aGlzLl9kZXRlY3ROYXZiYXIoKSx0aGlzLl9wb3BwZXImJnRoaXMuX3BvcHBlci51cGRhdGUoKX1fY29tcGxldGVIaWRlKHQpe2lmKCFOLnRyaWdnZXIodGhpcy5fZWxlbWVudCx4aSx0KS5kZWZhdWx0UHJldmVudGVkKXtpZihcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KWZvcihjb25zdCB0IG9mW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKU4ub2ZmKHQsXCJtb3VzZW92ZXJcIixoKTt0aGlzLl9wb3BwZXImJnRoaXMuX3BvcHBlci5kZXN0cm95KCksdGhpcy5fbWVudS5jbGFzc0xpc3QucmVtb3ZlKE5pKSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoTmkpLHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIiksRi5yZW1vdmVEYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsXCJwb3BwZXJcIiksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsa2ksdCksdGhpcy5fZWxlbWVudC5mb2N1cygpfX1fZ2V0Q29uZmlnKHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZih0PXN1cGVyLl9nZXRDb25maWcodCkpLnJlZmVyZW5jZSYmIW8odC5yZWZlcmVuY2UpJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0LnJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtBaS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwicmVmZXJlbmNlXCIgcHJvdmlkZWQgdHlwZSBcIm9iamVjdFwiIHdpdGhvdXQgYSByZXF1aXJlZCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiIG1ldGhvZC5gKTtyZXR1cm4gdH1fY3JlYXRlUG9wcGVyKCl7aWYodm9pZCAwPT09d2kpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkJvb3RzdHJhcCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnL2RvY3MvdjIvKVwiKTtsZXQgdD10aGlzLl9lbGVtZW50O1wicGFyZW50XCI9PT10aGlzLl9jb25maWcucmVmZXJlbmNlP3Q9dGhpcy5fcGFyZW50Om8odGhpcy5fY29uZmlnLnJlZmVyZW5jZSk/dD1yKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpOlwib2JqZWN0XCI9PXR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlJiYodD10aGlzLl9jb25maWcucmVmZXJlbmNlKTtjb25zdCBlPXRoaXMuX2dldFBvcHBlckNvbmZpZygpO3RoaXMuX3BvcHBlcj15aSh0LHRoaXMuX21lbnUsZSl9X2lzU2hvd24oKXtyZXR1cm4gdGhpcy5fbWVudS5jbGFzc0xpc3QuY29udGFpbnMoTmkpfV9nZXRQbGFjZW1lbnQoKXtjb25zdCB0PXRoaXMuX3BhcmVudDtpZih0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3BlbmRcIikpcmV0dXJuIHppO2lmKHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcHN0YXJ0XCIpKXJldHVybiBSaTtpZih0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3B1cC1jZW50ZXJcIikpcmV0dXJuXCJ0b3BcIjtpZih0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLWNlbnRlclwiKSlyZXR1cm5cImJvdHRvbVwiO2NvbnN0IGU9XCJlbmRcIj09PWdldENvbXB1dGVkU3R5bGUodGhpcy5fbWVudSkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tYnMtcG9zaXRpb25cIikudHJpbSgpO3JldHVybiB0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3B1cFwiKT9lP0hpOkZpOmU/Qmk6V2l9X2RldGVjdE5hdmJhcigpe3JldHVybiBudWxsIT09dGhpcy5fZWxlbWVudC5jbG9zZXN0KFwiLm5hdmJhclwiKX1fZ2V0T2Zmc2V0KCl7Y29uc3R7b2Zmc2V0OnR9PXRoaXMuX2NvbmZpZztyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD90LnNwbGl0KFwiLFwiKS5tYXAoKHQ9Pk51bWJlci5wYXJzZUludCh0LDEwKSkpOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/ZT0+dChlLHRoaXMuX2VsZW1lbnQpOnR9X2dldFBvcHBlckNvbmZpZygpe2NvbnN0IHQ9e3BsYWNlbWVudDp0aGlzLl9nZXRQbGFjZW1lbnQoKSxtb2RpZmllcnM6W3tuYW1lOlwicHJldmVudE92ZXJmbG93XCIsb3B0aW9uczp7Ym91bmRhcnk6dGhpcy5fY29uZmlnLmJvdW5kYXJ5fX0se25hbWU6XCJvZmZzZXRcIixvcHRpb25zOntvZmZzZXQ6dGhpcy5fZ2V0T2Zmc2V0KCl9fV19O3JldHVybih0aGlzLl9pbk5hdmJhcnx8XCJzdGF0aWNcIj09PXRoaXMuX2NvbmZpZy5kaXNwbGF5KSYmKEYuc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LFwicG9wcGVyXCIsXCJzdGF0aWNcIiksdC5tb2RpZmllcnM9W3tuYW1lOlwiYXBwbHlTdHlsZXNcIixlbmFibGVkOiExfV0pLHsuLi50LC4uLmcodGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyxbdm9pZCAwLHRdKX19X3NlbGVjdE1lbnVJdGVtKHtrZXk6dCx0YXJnZXQ6ZX0pe2NvbnN0IGk9ei5maW5kKFwiLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZClcIix0aGlzLl9tZW51KS5maWx0ZXIoKHQ9PmEodCkpKTtpLmxlbmd0aCYmYihpLGUsdD09PU9pLCFpLmluY2x1ZGVzKGUpKS5mb2N1cygpfXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPUtpLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyx0KTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7aWYodm9pZCAwPT09ZVt0XSl0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke3R9XCJgKTtlW3RdKCl9fSkpfXN0YXRpYyBjbGVhck1lbnVzKHQpe2lmKDI9PT10LmJ1dHRvbnx8XCJrZXl1cFwiPT09dC50eXBlJiZcIlRhYlwiIT09dC5rZXkpcmV0dXJuO2NvbnN0IGU9ei5maW5kKGppKTtmb3IoY29uc3QgaSBvZiBlKXtjb25zdCBlPUtpLmdldEluc3RhbmNlKGkpO2lmKCFlfHwhMT09PWUuX2NvbmZpZy5hdXRvQ2xvc2UpY29udGludWU7Y29uc3Qgbj10LmNvbXBvc2VkUGF0aCgpLHM9bi5pbmNsdWRlcyhlLl9tZW51KTtpZihuLmluY2x1ZGVzKGUuX2VsZW1lbnQpfHxcImluc2lkZVwiPT09ZS5fY29uZmlnLmF1dG9DbG9zZSYmIXN8fFwib3V0c2lkZVwiPT09ZS5fY29uZmlnLmF1dG9DbG9zZSYmcyljb250aW51ZTtpZihlLl9tZW51LmNvbnRhaW5zKHQudGFyZ2V0KSYmKFwia2V5dXBcIj09PXQudHlwZSYmXCJUYWJcIj09PXQua2V5fHwvaW5wdXR8c2VsZWN0fG9wdGlvbnx0ZXh0YXJlYXxmb3JtL2kudGVzdCh0LnRhcmdldC50YWdOYW1lKSkpY29udGludWU7Y29uc3Qgbz17cmVsYXRlZFRhcmdldDplLl9lbGVtZW50fTtcImNsaWNrXCI9PT10LnR5cGUmJihvLmNsaWNrRXZlbnQ9dCksZS5fY29tcGxldGVIaWRlKG8pfX1zdGF0aWMgZGF0YUFwaUtleWRvd25IYW5kbGVyKHQpe2NvbnN0IGU9L2lucHV0fHRleHRhcmVhL2kudGVzdCh0LnRhcmdldC50YWdOYW1lKSxpPVwiRXNjYXBlXCI9PT10LmtleSxuPVtDaSxPaV0uaW5jbHVkZXModC5rZXkpO2lmKCFuJiYhaSlyZXR1cm47aWYoZSYmIWkpcmV0dXJuO3QucHJldmVudERlZmF1bHQoKTtjb25zdCBzPXRoaXMubWF0Y2hlcyhQaSk/dGhpczp6LnByZXYodGhpcyxQaSlbMF18fHoubmV4dCh0aGlzLFBpKVswXXx8ei5maW5kT25lKFBpLHQuZGVsZWdhdGVUYXJnZXQucGFyZW50Tm9kZSksbz1LaS5nZXRPckNyZWF0ZUluc3RhbmNlKHMpO2lmKG4pcmV0dXJuIHQuc3RvcFByb3BhZ2F0aW9uKCksby5zaG93KCksdm9pZCBvLl9zZWxlY3RNZW51SXRlbSh0KTtvLl9pc1Nob3duKCkmJih0LnN0b3BQcm9wYWdhdGlvbigpLG8uaGlkZSgpLHMuZm9jdXMoKSl9fU4ub24oZG9jdW1lbnQsJGksUGksS2kuZGF0YUFwaUtleWRvd25IYW5kbGVyKSxOLm9uKGRvY3VtZW50LCRpLE1pLEtpLmRhdGFBcGlLZXlkb3duSGFuZGxlciksTi5vbihkb2N1bWVudCxEaSxLaS5jbGVhck1lbnVzKSxOLm9uKGRvY3VtZW50LElpLEtpLmNsZWFyTWVudXMpLE4ub24oZG9jdW1lbnQsRGksUGksKGZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSxLaS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpLnRvZ2dsZSgpfSkpLG0oS2kpO2NvbnN0IFFpPVwiYmFja2Ryb3BcIixYaT1cInNob3dcIixZaT1gbW91c2Vkb3duLmJzLiR7UWl9YCxVaT17Y2xhc3NOYW1lOlwibW9kYWwtYmFja2Ryb3BcIixjbGlja0NhbGxiYWNrOm51bGwsaXNBbmltYXRlZDohMSxpc1Zpc2libGU6ITAscm9vdEVsZW1lbnQ6XCJib2R5XCJ9LEdpPXtjbGFzc05hbWU6XCJzdHJpbmdcIixjbGlja0NhbGxiYWNrOlwiKGZ1bmN0aW9ufG51bGwpXCIsaXNBbmltYXRlZDpcImJvb2xlYW5cIixpc1Zpc2libGU6XCJib29sZWFuXCIscm9vdEVsZW1lbnQ6XCIoZWxlbWVudHxzdHJpbmcpXCJ9O2NsYXNzIEppIGV4dGVuZHMgSHtjb25zdHJ1Y3Rvcih0KXtzdXBlcigpLHRoaXMuX2NvbmZpZz10aGlzLl9nZXRDb25maWcodCksdGhpcy5faXNBcHBlbmRlZD0hMSx0aGlzLl9lbGVtZW50PW51bGx9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIFVpfXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4gR2l9c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuIFFpfXNob3codCl7aWYoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpcmV0dXJuIHZvaWQgZyh0KTt0aGlzLl9hcHBlbmQoKTtjb25zdCBlPXRoaXMuX2dldEVsZW1lbnQoKTt0aGlzLl9jb25maWcuaXNBbmltYXRlZCYmZChlKSxlLmNsYXNzTGlzdC5hZGQoWGkpLHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCgpPT57Zyh0KX0pKX1oaWRlKHQpe3RoaXMuX2NvbmZpZy5pc1Zpc2libGU/KHRoaXMuX2dldEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKFhpKSx0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgoKT0+e3RoaXMuZGlzcG9zZSgpLGcodCl9KSkpOmcodCl9ZGlzcG9zZSgpe3RoaXMuX2lzQXBwZW5kZWQmJihOLm9mZih0aGlzLl9lbGVtZW50LFlpKSx0aGlzLl9lbGVtZW50LnJlbW92ZSgpLHRoaXMuX2lzQXBwZW5kZWQ9ITEpfV9nZXRFbGVtZW50KCl7aWYoIXRoaXMuX2VsZW1lbnQpe2NvbnN0IHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmNsYXNzTmFtZT10aGlzLl9jb25maWcuY2xhc3NOYW1lLHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkJiZ0LmNsYXNzTGlzdC5hZGQoXCJmYWRlXCIpLHRoaXMuX2VsZW1lbnQ9dH1yZXR1cm4gdGhpcy5fZWxlbWVudH1fY29uZmlnQWZ0ZXJNZXJnZSh0KXtyZXR1cm4gdC5yb290RWxlbWVudD1yKHQucm9vdEVsZW1lbnQpLHR9X2FwcGVuZCgpe2lmKHRoaXMuX2lzQXBwZW5kZWQpcmV0dXJuO2NvbnN0IHQ9dGhpcy5fZ2V0RWxlbWVudCgpO3RoaXMuX2NvbmZpZy5yb290RWxlbWVudC5hcHBlbmQodCksTi5vbih0LFlpLCgoKT0+e2codGhpcy5fY29uZmlnLmNsaWNrQ2FsbGJhY2spfSkpLHRoaXMuX2lzQXBwZW5kZWQ9ITB9X2VtdWxhdGVBbmltYXRpb24odCl7Xyh0LHRoaXMuX2dldEVsZW1lbnQoKSx0aGlzLl9jb25maWcuaXNBbmltYXRlZCl9fWNvbnN0IFppPVwiLmJzLmZvY3VzdHJhcFwiLHRuPWBmb2N1c2luJHtaaX1gLGVuPWBrZXlkb3duLnRhYiR7Wml9YCxubj1cImJhY2t3YXJkXCIsc249e2F1dG9mb2N1czohMCx0cmFwRWxlbWVudDpudWxsfSxvbj17YXV0b2ZvY3VzOlwiYm9vbGVhblwiLHRyYXBFbGVtZW50OlwiZWxlbWVudFwifTtjbGFzcyBybiBleHRlbmRzIEh7Y29uc3RydWN0b3IodCl7c3VwZXIoKSx0aGlzLl9jb25maWc9dGhpcy5fZ2V0Q29uZmlnKHQpLHRoaXMuX2lzQWN0aXZlPSExLHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb249bnVsbH1zdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4gc259c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybiBvbn1zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cImZvY3VzdHJhcFwifWFjdGl2YXRlKCl7dGhpcy5faXNBY3RpdmV8fCh0aGlzLl9jb25maWcuYXV0b2ZvY3VzJiZ0aGlzLl9jb25maWcudHJhcEVsZW1lbnQuZm9jdXMoKSxOLm9mZihkb2N1bWVudCxaaSksTi5vbihkb2N1bWVudCx0biwodD0+dGhpcy5faGFuZGxlRm9jdXNpbih0KSkpLE4ub24oZG9jdW1lbnQsZW4sKHQ9PnRoaXMuX2hhbmRsZUtleWRvd24odCkpKSx0aGlzLl9pc0FjdGl2ZT0hMCl9ZGVhY3RpdmF0ZSgpe3RoaXMuX2lzQWN0aXZlJiYodGhpcy5faXNBY3RpdmU9ITEsTi5vZmYoZG9jdW1lbnQsWmkpKX1faGFuZGxlRm9jdXNpbih0KXtjb25zdHt0cmFwRWxlbWVudDplfT10aGlzLl9jb25maWc7aWYodC50YXJnZXQ9PT1kb2N1bWVudHx8dC50YXJnZXQ9PT1lfHxlLmNvbnRhaW5zKHQudGFyZ2V0KSlyZXR1cm47Y29uc3QgaT16LmZvY3VzYWJsZUNoaWxkcmVuKGUpOzA9PT1pLmxlbmd0aD9lLmZvY3VzKCk6dGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbj09PW5uP2lbaS5sZW5ndGgtMV0uZm9jdXMoKTppWzBdLmZvY3VzKCl9X2hhbmRsZUtleWRvd24odCl7XCJUYWJcIj09PXQua2V5JiYodGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbj10LnNoaWZ0S2V5P25uOlwiZm9yd2FyZFwiKX19Y29uc3QgYW49XCIuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wXCIsbG49XCIuc3RpY2t5LXRvcFwiLGNuPVwicGFkZGluZy1yaWdodFwiLGhuPVwibWFyZ2luLXJpZ2h0XCI7Y2xhc3MgZG57Y29uc3RydWN0b3IoKXt0aGlzLl9lbGVtZW50PWRvY3VtZW50LmJvZHl9Z2V0V2lkdGgoKXtjb25zdCB0PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtyZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGgtdCl9aGlkZSgpe2NvbnN0IHQ9dGhpcy5nZXRXaWR0aCgpO3RoaXMuX2Rpc2FibGVPdmVyRmxvdygpLHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsY24sKGU9PmUrdCkpLHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKGFuLGNuLChlPT5lK3QpKSx0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhsbixobiwoZT0+ZS10KSl9cmVzZXQoKXt0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsXCJvdmVyZmxvd1wiKSx0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsY24pLHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoYW4sY24pLHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMobG4saG4pfWlzT3ZlcmZsb3dpbmcoKXtyZXR1cm4gdGhpcy5nZXRXaWR0aCgpPjB9X2Rpc2FibGVPdmVyRmxvdygpe3RoaXMuX3NhdmVJbml0aWFsQXR0cmlidXRlKHRoaXMuX2VsZW1lbnQsXCJvdmVyZmxvd1wiKSx0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCJ9X3NldEVsZW1lbnRBdHRyaWJ1dGVzKHQsZSxpKXtjb25zdCBuPXRoaXMuZ2V0V2lkdGgoKTt0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHQsKHQ9PntpZih0IT09dGhpcy5fZWxlbWVudCYmd2luZG93LmlubmVyV2lkdGg+dC5jbGllbnRXaWR0aCtuKXJldHVybjt0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZSh0LGUpO2NvbnN0IHM9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCkuZ2V0UHJvcGVydHlWYWx1ZShlKTt0LnN0eWxlLnNldFByb3BlcnR5KGUsYCR7aShOdW1iZXIucGFyc2VGbG9hdChzKSl9cHhgKX0pKX1fc2F2ZUluaXRpYWxBdHRyaWJ1dGUodCxlKXtjb25zdCBpPXQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShlKTtpJiZGLnNldERhdGFBdHRyaWJ1dGUodCxlLGkpfV9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHQsZSl7dGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayh0LCh0PT57Y29uc3QgaT1GLmdldERhdGFBdHRyaWJ1dGUodCxlKTtudWxsIT09aT8oRi5yZW1vdmVEYXRhQXR0cmlidXRlKHQsZSksdC5zdHlsZS5zZXRQcm9wZXJ0eShlLGkpKTp0LnN0eWxlLnJlbW92ZVByb3BlcnR5KGUpfSkpfV9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHQsZSl7aWYobyh0KSllKHQpO2Vsc2UgZm9yKGNvbnN0IGkgb2Ygei5maW5kKHQsdGhpcy5fZWxlbWVudCkpZShpKX19Y29uc3QgdW49XCIuYnMubW9kYWxcIixmbj1gaGlkZSR7dW59YCxwbj1gaGlkZVByZXZlbnRlZCR7dW59YCxtbj1gaGlkZGVuJHt1bn1gLGduPWBzaG93JHt1bn1gLF9uPWBzaG93biR7dW59YCxibj1gcmVzaXplJHt1bn1gLHZuPWBjbGljay5kaXNtaXNzJHt1bn1gLHluPWBtb3VzZWRvd24uZGlzbWlzcyR7dW59YCx3bj1ga2V5ZG93bi5kaXNtaXNzJHt1bn1gLEFuPWBjbGljayR7dW59LmRhdGEtYXBpYCxFbj1cIm1vZGFsLW9wZW5cIixUbj1cInNob3dcIixDbj1cIm1vZGFsLXN0YXRpY1wiLE9uPXtiYWNrZHJvcDohMCxmb2N1czohMCxrZXlib2FyZDohMH0seG49e2JhY2tkcm9wOlwiKGJvb2xlYW58c3RyaW5nKVwiLGZvY3VzOlwiYm9vbGVhblwiLGtleWJvYXJkOlwiYm9vbGVhblwifTtjbGFzcyBrbiBleHRlbmRzIFd7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpLHRoaXMuX2RpYWxvZz16LmZpbmRPbmUoXCIubW9kYWwtZGlhbG9nXCIsdGhpcy5fZWxlbWVudCksdGhpcy5fYmFja2Ryb3A9dGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKCksdGhpcy5fZm9jdXN0cmFwPXRoaXMuX2luaXRpYWxpemVGb2N1c1RyYXAoKSx0aGlzLl9pc1Nob3duPSExLHRoaXMuX2lzVHJhbnNpdGlvbmluZz0hMSx0aGlzLl9zY3JvbGxCYXI9bmV3IGRuLHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCl9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIE9ufXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4geG59c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJtb2RhbFwifXRvZ2dsZSh0KXtyZXR1cm4gdGhpcy5faXNTaG93bj90aGlzLmhpZGUoKTp0aGlzLnNob3codCl9c2hvdyh0KXt0aGlzLl9pc1Nob3dufHx0aGlzLl9pc1RyYW5zaXRpb25pbmd8fE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LGduLHtyZWxhdGVkVGFyZ2V0OnR9KS5kZWZhdWx0UHJldmVudGVkfHwodGhpcy5faXNTaG93bj0hMCx0aGlzLl9pc1RyYW5zaXRpb25pbmc9ITAsdGhpcy5fc2Nyb2xsQmFyLmhpZGUoKSxkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoRW4pLHRoaXMuX2FkanVzdERpYWxvZygpLHRoaXMuX2JhY2tkcm9wLnNob3coKCgpPT50aGlzLl9zaG93RWxlbWVudCh0KSkpKX1oaWRlKCl7dGhpcy5faXNTaG93biYmIXRoaXMuX2lzVHJhbnNpdGlvbmluZyYmKE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LGZuKS5kZWZhdWx0UHJldmVudGVkfHwodGhpcy5faXNTaG93bj0hMSx0aGlzLl9pc1RyYW5zaXRpb25pbmc9ITAsdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoVG4pLHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCgpPT50aGlzLl9oaWRlTW9kYWwoKSksdGhpcy5fZWxlbWVudCx0aGlzLl9pc0FuaW1hdGVkKCkpKSl9ZGlzcG9zZSgpe04ub2ZmKHdpbmRvdyx1biksTi5vZmYodGhpcy5fZGlhbG9nLHVuKSx0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKCksdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKSxzdXBlci5kaXNwb3NlKCl9aGFuZGxlVXBkYXRlKCl7dGhpcy5fYWRqdXN0RGlhbG9nKCl9X2luaXRpYWxpemVCYWNrRHJvcCgpe3JldHVybiBuZXcgSmkoe2lzVmlzaWJsZTpCb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCksaXNBbmltYXRlZDp0aGlzLl9pc0FuaW1hdGVkKCl9KX1faW5pdGlhbGl6ZUZvY3VzVHJhcCgpe3JldHVybiBuZXcgcm4oe3RyYXBFbGVtZW50OnRoaXMuX2VsZW1lbnR9KX1fc2hvd0VsZW1lbnQodCl7ZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLl9lbGVtZW50KXx8ZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5fZWxlbWVudCksdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIix0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpLHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1tb2RhbFwiLCEwKSx0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZShcInJvbGVcIixcImRpYWxvZ1wiKSx0aGlzLl9lbGVtZW50LnNjcm9sbFRvcD0wO2NvbnN0IGU9ei5maW5kT25lKFwiLm1vZGFsLWJvZHlcIix0aGlzLl9kaWFsb2cpO2UmJihlLnNjcm9sbFRvcD0wKSxkKHRoaXMuX2VsZW1lbnQpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChUbiksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9Pnt0aGlzLl9jb25maWcuZm9jdXMmJnRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpLHRoaXMuX2lzVHJhbnNpdGlvbmluZz0hMSxOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxfbix7cmVsYXRlZFRhcmdldDp0fSl9KSx0aGlzLl9kaWFsb2csdGhpcy5faXNBbmltYXRlZCgpKX1fYWRkRXZlbnRMaXN0ZW5lcnMoKXtOLm9uKHRoaXMuX2VsZW1lbnQsd24sKHQ9PntcIkVzY2FwZVwiPT09dC5rZXkmJih0aGlzLl9jb25maWcua2V5Ym9hcmQ/dGhpcy5oaWRlKCk6dGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpKX0pKSxOLm9uKHdpbmRvdyxibiwoKCk9Pnt0aGlzLl9pc1Nob3duJiYhdGhpcy5faXNUcmFuc2l0aW9uaW5nJiZ0aGlzLl9hZGp1c3REaWFsb2coKX0pKSxOLm9uKHRoaXMuX2VsZW1lbnQseW4sKHQ9PntOLm9uZSh0aGlzLl9lbGVtZW50LHZuLChlPT57dGhpcy5fZWxlbWVudD09PXQudGFyZ2V0JiZ0aGlzLl9lbGVtZW50PT09ZS50YXJnZXQmJihcInN0YXRpY1wiIT09dGhpcy5fY29uZmlnLmJhY2tkcm9wP3RoaXMuX2NvbmZpZy5iYWNrZHJvcCYmdGhpcy5oaWRlKCk6dGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpKX0pKX0pKX1faGlkZU1vZGFsKCl7dGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwhMCksdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLW1vZGFsXCIpLHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwicm9sZVwiKSx0aGlzLl9pc1RyYW5zaXRpb25pbmc9ITEsdGhpcy5fYmFja2Ryb3AuaGlkZSgoKCk9Pntkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoRW4pLHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKSx0aGlzLl9zY3JvbGxCYXIucmVzZXQoKSxOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxtbil9KSl9X2lzQW5pbWF0ZWQoKXtyZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJmYWRlXCIpfV90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCl7aWYoTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQscG4pLmRlZmF1bHRQcmV2ZW50ZWQpcmV0dXJuO2NvbnN0IHQ9dGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQ+ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxlPXRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZO1wiaGlkZGVuXCI9PT1lfHx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbil8fCh0fHwodGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1k9XCJoaWRkZW5cIiksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENuKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDbiksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9Pnt0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WT1lfSksdGhpcy5fZGlhbG9nKX0pLHRoaXMuX2RpYWxvZyksdGhpcy5fZWxlbWVudC5mb2N1cygpKX1fYWRqdXN0RGlhbG9nKCl7Y29uc3QgdD10aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodD5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LGU9dGhpcy5fc2Nyb2xsQmFyLmdldFdpZHRoKCksaT1lPjA7aWYoaSYmIXQpe2NvbnN0IHQ9cCgpP1wicGFkZGluZ0xlZnRcIjpcInBhZGRpbmdSaWdodFwiO3RoaXMuX2VsZW1lbnQuc3R5bGVbdF09YCR7ZX1weGB9aWYoIWkmJnQpe2NvbnN0IHQ9cCgpP1wicGFkZGluZ1JpZ2h0XCI6XCJwYWRkaW5nTGVmdFwiO3RoaXMuX2VsZW1lbnQuc3R5bGVbdF09YCR7ZX1weGB9fV9yZXNldEFkanVzdG1lbnRzKCl7dGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdD1cIlwiLHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0PVwiXCJ9c3RhdGljIGpRdWVyeUludGVyZmFjZSh0LGUpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgaT1rbi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsdCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWlbdF0pdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHt0fVwiYCk7aVt0XShlKX19KSl9fU4ub24oZG9jdW1lbnQsQW4sJ1tkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCJdJywoZnVuY3Rpb24odCl7Y29uc3QgZT16LmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcyk7W1wiQVwiLFwiQVJFQVwiXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpJiZ0LnByZXZlbnREZWZhdWx0KCksTi5vbmUoZSxnbiwodD0+e3QuZGVmYXVsdFByZXZlbnRlZHx8Ti5vbmUoZSxtbiwoKCk9PnthKHRoaXMpJiZ0aGlzLmZvY3VzKCl9KSl9KSk7Y29uc3QgaT16LmZpbmRPbmUoXCIubW9kYWwuc2hvd1wiKTtpJiZrbi5nZXRJbnN0YW5jZShpKS5oaWRlKCksa24uZ2V0T3JDcmVhdGVJbnN0YW5jZShlKS50b2dnbGUodGhpcyl9KSksUihrbiksbShrbik7Y29uc3QgTG49XCIuYnMub2ZmY2FudmFzXCIsU249XCIuZGF0YS1hcGlcIixEbj1gbG9hZCR7TG59JHtTbn1gLCRuPVwic2hvd1wiLEluPVwic2hvd2luZ1wiLE5uPVwiaGlkaW5nXCIsUG49XCIub2ZmY2FudmFzLnNob3dcIixqbj1gc2hvdyR7TG59YCxNbj1gc2hvd24ke0xufWAsRm49YGhpZGUke0xufWAsSG49YGhpZGVQcmV2ZW50ZWQke0xufWAsV249YGhpZGRlbiR7TG59YCxCbj1gcmVzaXplJHtMbn1gLHpuPWBjbGljayR7TG59JHtTbn1gLFJuPWBrZXlkb3duLmRpc21pc3Mke0xufWAscW49e2JhY2tkcm9wOiEwLGtleWJvYXJkOiEwLHNjcm9sbDohMX0sVm49e2JhY2tkcm9wOlwiKGJvb2xlYW58c3RyaW5nKVwiLGtleWJvYXJkOlwiYm9vbGVhblwiLHNjcm9sbDpcImJvb2xlYW5cIn07Y2xhc3MgS24gZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIodCxlKSx0aGlzLl9pc1Nob3duPSExLHRoaXMuX2JhY2tkcm9wPXRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpLHRoaXMuX2ZvY3VzdHJhcD10aGlzLl9pbml0aWFsaXplRm9jdXNUcmFwKCksdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKX1zdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4gcW59c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybiBWbn1zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cIm9mZmNhbnZhc1wifXRvZ2dsZSh0KXtyZXR1cm4gdGhpcy5faXNTaG93bj90aGlzLmhpZGUoKTp0aGlzLnNob3codCl9c2hvdyh0KXt0aGlzLl9pc1Nob3dufHxOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxqbix7cmVsYXRlZFRhcmdldDp0fSkuZGVmYXVsdFByZXZlbnRlZHx8KHRoaXMuX2lzU2hvd249ITAsdGhpcy5fYmFja2Ryb3Auc2hvdygpLHRoaXMuX2NvbmZpZy5zY3JvbGx8fChuZXcgZG4pLmhpZGUoKSx0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbW9kYWxcIiwhMCksdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJkaWFsb2dcIiksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKEluKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2NvbmZpZy5zY3JvbGwmJiF0aGlzLl9jb25maWcuYmFja2Ryb3B8fHRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgkbiksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKEluKSxOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxNbix7cmVsYXRlZFRhcmdldDp0fSl9KSx0aGlzLl9lbGVtZW50LCEwKSl9aGlkZSgpe3RoaXMuX2lzU2hvd24mJihOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxGbikuZGVmYXVsdFByZXZlbnRlZHx8KHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKCksdGhpcy5fZWxlbWVudC5ibHVyKCksdGhpcy5faXNTaG93bj0hMSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoTm4pLHRoaXMuX2JhY2tkcm9wLmhpZGUoKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgkbixObiksdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLW1vZGFsXCIpLHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwicm9sZVwiKSx0aGlzLl9jb25maWcuc2Nyb2xsfHwobmV3IGRuKS5yZXNldCgpLE4udHJpZ2dlcih0aGlzLl9lbGVtZW50LFduKX0pLHRoaXMuX2VsZW1lbnQsITApKSl9ZGlzcG9zZSgpe3RoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKSx0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpLHN1cGVyLmRpc3Bvc2UoKX1faW5pdGlhbGl6ZUJhY2tEcm9wKCl7Y29uc3QgdD1Cb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCk7cmV0dXJuIG5ldyBKaSh7Y2xhc3NOYW1lOlwib2ZmY2FudmFzLWJhY2tkcm9wXCIsaXNWaXNpYmxlOnQsaXNBbmltYXRlZDohMCxyb290RWxlbWVudDp0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsY2xpY2tDYWxsYmFjazp0PygpPT57XCJzdGF0aWNcIiE9PXRoaXMuX2NvbmZpZy5iYWNrZHJvcD90aGlzLmhpZGUoKTpOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxIbil9Om51bGx9KX1faW5pdGlhbGl6ZUZvY3VzVHJhcCgpe3JldHVybiBuZXcgcm4oe3RyYXBFbGVtZW50OnRoaXMuX2VsZW1lbnR9KX1fYWRkRXZlbnRMaXN0ZW5lcnMoKXtOLm9uKHRoaXMuX2VsZW1lbnQsUm4sKHQ9PntcIkVzY2FwZVwiPT09dC5rZXkmJih0aGlzLl9jb25maWcua2V5Ym9hcmQ/dGhpcy5oaWRlKCk6Ti50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsSG4pKX0pKX1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT1Lbi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsdCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWVbdF18fHQuc3RhcnRzV2l0aChcIl9cIil8fFwiY29uc3RydWN0b3JcIj09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHt0fVwiYCk7ZVt0XSh0aGlzKX19KSl9fU4ub24oZG9jdW1lbnQsem4sJ1tkYXRhLWJzLXRvZ2dsZT1cIm9mZmNhbnZhc1wiXScsKGZ1bmN0aW9uKHQpe2NvbnN0IGU9ei5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpO2lmKFtcIkFcIixcIkFSRUFcIl0uaW5jbHVkZXModGhpcy50YWdOYW1lKSYmdC5wcmV2ZW50RGVmYXVsdCgpLGwodGhpcykpcmV0dXJuO04ub25lKGUsV24sKCgpPT57YSh0aGlzKSYmdGhpcy5mb2N1cygpfSkpO2NvbnN0IGk9ei5maW5kT25lKFBuKTtpJiZpIT09ZSYmS24uZ2V0SW5zdGFuY2UoaSkuaGlkZSgpLEtuLmdldE9yQ3JlYXRlSW5zdGFuY2UoZSkudG9nZ2xlKHRoaXMpfSkpLE4ub24od2luZG93LERuLCgoKT0+e2Zvcihjb25zdCB0IG9mIHouZmluZChQbikpS24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0KS5zaG93KCl9KSksTi5vbih3aW5kb3csQm4sKCgpPT57Zm9yKGNvbnN0IHQgb2Ygei5maW5kKFwiW2FyaWEtbW9kYWxdW2NsYXNzKj1zaG93XVtjbGFzcyo9b2ZmY2FudmFzLV1cIikpXCJmaXhlZFwiIT09Z2V0Q29tcHV0ZWRTdHlsZSh0KS5wb3NpdGlvbiYmS24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0KS5oaWRlKCl9KSksUihLbiksbShLbik7Y29uc3QgUW49e1wiKlwiOltcImNsYXNzXCIsXCJkaXJcIixcImlkXCIsXCJsYW5nXCIsXCJyb2xlXCIsL15hcmlhLVtcXHctXSokL2ldLGE6W1widGFyZ2V0XCIsXCJocmVmXCIsXCJ0aXRsZVwiLFwicmVsXCJdLGFyZWE6W10sYjpbXSxicjpbXSxjb2w6W10sY29kZTpbXSxkZDpbXSxkaXY6W10sZGw6W10sZHQ6W10sZW06W10saHI6W10saDE6W10saDI6W10saDM6W10saDQ6W10saDU6W10saDY6W10saTpbXSxpbWc6W1wic3JjXCIsXCJzcmNzZXRcIixcImFsdFwiLFwidGl0bGVcIixcIndpZHRoXCIsXCJoZWlnaHRcIl0sbGk6W10sb2w6W10scDpbXSxwcmU6W10sczpbXSxzbWFsbDpbXSxzcGFuOltdLHN1YjpbXSxzdXA6W10sc3Ryb25nOltdLHU6W10sdWw6W119LFhuPW5ldyBTZXQoW1wiYmFja2dyb3VuZFwiLFwiY2l0ZVwiLFwiaHJlZlwiLFwiaXRlbXR5cGVcIixcImxvbmdkZXNjXCIsXCJwb3N0ZXJcIixcInNyY1wiLFwieGxpbms6aHJlZlwiXSksWW49L14oPyFqYXZhc2NyaXB0OikoPzpbYS16MC05Ky4tXSs6fFteJjovPyNdKig/OlsvPyNdfCQpKS9pLFVuPSh0LGUpPT57Y29uc3QgaT10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGUuaW5jbHVkZXMoaSk/IVhuLmhhcyhpKXx8Qm9vbGVhbihZbi50ZXN0KHQubm9kZVZhbHVlKSk6ZS5maWx0ZXIoKHQ9PnQgaW5zdGFuY2VvZiBSZWdFeHApKS5zb21lKCh0PT50LnRlc3QoaSkpKX0sR249e2FsbG93TGlzdDpRbixjb250ZW50Ont9LGV4dHJhQ2xhc3M6XCJcIixodG1sOiExLHNhbml0aXplOiEwLHNhbml0aXplRm46bnVsbCx0ZW1wbGF0ZTpcIjxkaXY+PC9kaXY+XCJ9LEpuPXthbGxvd0xpc3Q6XCJvYmplY3RcIixjb250ZW50Olwib2JqZWN0XCIsZXh0cmFDbGFzczpcIihzdHJpbmd8ZnVuY3Rpb24pXCIsaHRtbDpcImJvb2xlYW5cIixzYW5pdGl6ZTpcImJvb2xlYW5cIixzYW5pdGl6ZUZuOlwiKG51bGx8ZnVuY3Rpb24pXCIsdGVtcGxhdGU6XCJzdHJpbmdcIn0sWm49e2VudHJ5OlwiKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9ufG51bGwpXCIsc2VsZWN0b3I6XCIoc3RyaW5nfGVsZW1lbnQpXCJ9O2NsYXNzIHRzIGV4dGVuZHMgSHtjb25zdHJ1Y3Rvcih0KXtzdXBlcigpLHRoaXMuX2NvbmZpZz10aGlzLl9nZXRDb25maWcodCl9c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIEdufXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4gSm59c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJUZW1wbGF0ZUZhY3RvcnlcIn1nZXRDb250ZW50KCl7cmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fY29uZmlnLmNvbnRlbnQpLm1hcCgodD0+dGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odCkpKS5maWx0ZXIoQm9vbGVhbil9aGFzQ29udGVudCgpe3JldHVybiB0aGlzLmdldENvbnRlbnQoKS5sZW5ndGg+MH1jaGFuZ2VDb250ZW50KHQpe3JldHVybiB0aGlzLl9jaGVja0NvbnRlbnQodCksdGhpcy5fY29uZmlnLmNvbnRlbnQ9ey4uLnRoaXMuX2NvbmZpZy5jb250ZW50LC4uLnR9LHRoaXN9dG9IdG1sKCl7Y29uc3QgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3QuaW5uZXJIVE1MPXRoaXMuX21heWJlU2FuaXRpemUodGhpcy5fY29uZmlnLnRlbXBsYXRlKTtmb3IoY29uc3RbZSxpXW9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZy5jb250ZW50KSl0aGlzLl9zZXRDb250ZW50KHQsaSxlKTtjb25zdCBlPXQuY2hpbGRyZW5bMF0saT10aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuZXh0cmFDbGFzcyk7cmV0dXJuIGkmJmUuY2xhc3NMaXN0LmFkZCguLi5pLnNwbGl0KFwiIFwiKSksZX1fdHlwZUNoZWNrQ29uZmlnKHQpe3N1cGVyLl90eXBlQ2hlY2tDb25maWcodCksdGhpcy5fY2hlY2tDb250ZW50KHQuY29udGVudCl9X2NoZWNrQ29udGVudCh0KXtmb3IoY29uc3RbZSxpXW9mIE9iamVjdC5lbnRyaWVzKHQpKXN1cGVyLl90eXBlQ2hlY2tDb25maWcoe3NlbGVjdG9yOmUsZW50cnk6aX0sWm4pfV9zZXRDb250ZW50KHQsZSxpKXtjb25zdCBuPXouZmluZE9uZShpLHQpO24mJigoZT10aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihlKSk/byhlKT90aGlzLl9wdXRFbGVtZW50SW5UZW1wbGF0ZShyKGUpLG4pOnRoaXMuX2NvbmZpZy5odG1sP24uaW5uZXJIVE1MPXRoaXMuX21heWJlU2FuaXRpemUoZSk6bi50ZXh0Q29udGVudD1lOm4ucmVtb3ZlKCkpfV9tYXliZVNhbml0aXplKHQpe3JldHVybiB0aGlzLl9jb25maWcuc2FuaXRpemU/ZnVuY3Rpb24odCxlLGkpe2lmKCF0Lmxlbmd0aClyZXR1cm4gdDtpZihpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBpKXJldHVybiBpKHQpO2NvbnN0IG49KG5ldyB3aW5kb3cuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcodCxcInRleHQvaHRtbFwiKSxzPVtdLmNvbmNhdCguLi5uLmJvZHkucXVlcnlTZWxlY3RvckFsbChcIipcIikpO2Zvcihjb25zdCB0IG9mIHMpe2NvbnN0IGk9dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO2lmKCFPYmplY3Qua2V5cyhlKS5pbmNsdWRlcyhpKSl7dC5yZW1vdmUoKTtjb250aW51ZX1jb25zdCBuPVtdLmNvbmNhdCguLi50LmF0dHJpYnV0ZXMpLHM9W10uY29uY2F0KGVbXCIqXCJdfHxbXSxlW2ldfHxbXSk7Zm9yKGNvbnN0IGUgb2YgbilVbihlLHMpfHx0LnJlbW92ZUF0dHJpYnV0ZShlLm5vZGVOYW1lKX1yZXR1cm4gbi5ib2R5LmlubmVySFRNTH0odCx0aGlzLl9jb25maWcuYWxsb3dMaXN0LHRoaXMuX2NvbmZpZy5zYW5pdGl6ZUZuKTp0fV9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0KXtyZXR1cm4gZyh0LFt2b2lkIDAsdGhpc10pfV9wdXRFbGVtZW50SW5UZW1wbGF0ZSh0LGUpe2lmKHRoaXMuX2NvbmZpZy5odG1sKXJldHVybiBlLmlubmVySFRNTD1cIlwiLHZvaWQgZS5hcHBlbmQodCk7ZS50ZXh0Q29udGVudD10LnRleHRDb250ZW50fX1jb25zdCBlcz1uZXcgU2V0KFtcInNhbml0aXplXCIsXCJhbGxvd0xpc3RcIixcInNhbml0aXplRm5cIl0pLGlzPVwiZmFkZVwiLG5zPVwic2hvd1wiLHNzPVwiLnRvb2x0aXAtaW5uZXJcIixvcz1cIi5tb2RhbFwiLHJzPVwiaGlkZS5icy5tb2RhbFwiLGFzPVwiaG92ZXJcIixscz1cImZvY3VzXCIsY3M9XCJjbGlja1wiLGhzPXtBVVRPOlwiYXV0b1wiLFRPUDpcInRvcFwiLFJJR0hUOnAoKT9cImxlZnRcIjpcInJpZ2h0XCIsQk9UVE9NOlwiYm90dG9tXCIsTEVGVDpwKCk/XCJyaWdodFwiOlwibGVmdFwifSxkcz17YWxsb3dMaXN0OlFuLGFuaW1hdGlvbjohMCxib3VuZGFyeTpcImNsaXBwaW5nUGFyZW50c1wiLGNvbnRhaW5lcjohMSxjdXN0b21DbGFzczpcIlwiLGRlbGF5OjAsZmFsbGJhY2tQbGFjZW1lbnRzOltcInRvcFwiLFwicmlnaHRcIixcImJvdHRvbVwiLFwibGVmdFwiXSxodG1sOiExLG9mZnNldDpbMCw2XSxwbGFjZW1lbnQ6XCJ0b3BcIixwb3BwZXJDb25maWc6bnVsbCxzYW5pdGl6ZTohMCxzYW5pdGl6ZUZuOm51bGwsc2VsZWN0b3I6ITEsdGVtcGxhdGU6JzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+Jyx0aXRsZTpcIlwiLHRyaWdnZXI6XCJob3ZlciBmb2N1c1wifSx1cz17YWxsb3dMaXN0Olwib2JqZWN0XCIsYW5pbWF0aW9uOlwiYm9vbGVhblwiLGJvdW5kYXJ5OlwiKHN0cmluZ3xlbGVtZW50KVwiLGNvbnRhaW5lcjpcIihzdHJpbmd8ZWxlbWVudHxib29sZWFuKVwiLGN1c3RvbUNsYXNzOlwiKHN0cmluZ3xmdW5jdGlvbilcIixkZWxheTpcIihudW1iZXJ8b2JqZWN0KVwiLGZhbGxiYWNrUGxhY2VtZW50czpcImFycmF5XCIsaHRtbDpcImJvb2xlYW5cIixvZmZzZXQ6XCIoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKVwiLHBsYWNlbWVudDpcIihzdHJpbmd8ZnVuY3Rpb24pXCIscG9wcGVyQ29uZmlnOlwiKG51bGx8b2JqZWN0fGZ1bmN0aW9uKVwiLHNhbml0aXplOlwiYm9vbGVhblwiLHNhbml0aXplRm46XCIobnVsbHxmdW5jdGlvbilcIixzZWxlY3RvcjpcIihzdHJpbmd8Ym9vbGVhbilcIix0ZW1wbGF0ZTpcInN0cmluZ1wiLHRpdGxlOlwiKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKVwiLHRyaWdnZXI6XCJzdHJpbmdcIn07Y2xhc3MgZnMgZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKHQsZSl7aWYodm9pZCAwPT09d2kpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkJvb3RzdHJhcCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcvZG9jcy92Mi8pXCIpO3N1cGVyKHQsZSksdGhpcy5faXNFbmFibGVkPSEwLHRoaXMuX3RpbWVvdXQ9MCx0aGlzLl9pc0hvdmVyZWQ9bnVsbCx0aGlzLl9hY3RpdmVUcmlnZ2VyPXt9LHRoaXMuX3BvcHBlcj1udWxsLHRoaXMuX3RlbXBsYXRlRmFjdG9yeT1udWxsLHRoaXMuX25ld0NvbnRlbnQ9bnVsbCx0aGlzLnRpcD1udWxsLHRoaXMuX3NldExpc3RlbmVycygpLHRoaXMuX2NvbmZpZy5zZWxlY3Rvcnx8dGhpcy5fZml4VGl0bGUoKX1zdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4gZHN9c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybiB1c31zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cInRvb2x0aXBcIn1lbmFibGUoKXt0aGlzLl9pc0VuYWJsZWQ9ITB9ZGlzYWJsZSgpe3RoaXMuX2lzRW5hYmxlZD0hMX10b2dnbGVFbmFibGVkKCl7dGhpcy5faXNFbmFibGVkPSF0aGlzLl9pc0VuYWJsZWR9dG9nZ2xlKCl7dGhpcy5faXNFbmFibGVkJiYodGhpcy5faXNTaG93bigpP3RoaXMuX2xlYXZlKCk6dGhpcy5fZW50ZXIoKSl9ZGlzcG9zZSgpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KSxOLm9mZih0aGlzLl9lbGVtZW50LmNsb3Nlc3Qob3MpLHJzLHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpLHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1icy1vcmlnaW5hbC10aXRsZVwiKSYmdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1icy1vcmlnaW5hbC10aXRsZVwiKSksdGhpcy5fZGlzcG9zZVBvcHBlcigpLHN1cGVyLmRpc3Bvc2UoKX1zaG93KCl7aWYoXCJub25lXCI9PT10aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkpdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHNcIik7aWYoIXRoaXMuX2lzV2l0aENvbnRlbnQoKXx8IXRoaXMuX2lzRW5hYmxlZClyZXR1cm47Y29uc3QgdD1OLnRyaWdnZXIodGhpcy5fZWxlbWVudCx0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShcInNob3dcIikpLGU9KGModGhpcy5fZWxlbWVudCl8fHRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpO2lmKHQuZGVmYXVsdFByZXZlbnRlZHx8IWUpcmV0dXJuO3RoaXMuX2Rpc3Bvc2VQb3BwZXIoKTtjb25zdCBpPXRoaXMuX2dldFRpcEVsZW1lbnQoKTt0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkYnlcIixpLmdldEF0dHJpYnV0ZShcImlkXCIpKTtjb25zdHtjb250YWluZXI6bn09dGhpcy5fY29uZmlnO2lmKHRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy50aXApfHwobi5hcHBlbmQoaSksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoXCJpbnNlcnRlZFwiKSkpLHRoaXMuX3BvcHBlcj10aGlzLl9jcmVhdGVQb3BwZXIoaSksaS5jbGFzc0xpc3QuYWRkKG5zKSxcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KWZvcihjb25zdCB0IG9mW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKU4ub24odCxcIm1vdXNlb3ZlclwiLGgpO3RoaXMuX3F1ZXVlQ2FsbGJhY2soKCgpPT57Ti50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoXCJzaG93blwiKSksITE9PT10aGlzLl9pc0hvdmVyZWQmJnRoaXMuX2xlYXZlKCksdGhpcy5faXNIb3ZlcmVkPSExfSksdGhpcy50aXAsdGhpcy5faXNBbmltYXRlZCgpKX1oaWRlKCl7aWYodGhpcy5faXNTaG93bigpJiYhTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoXCJoaWRlXCIpKS5kZWZhdWx0UHJldmVudGVkKXtpZih0aGlzLl9nZXRUaXBFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZShucyksXCJvbnRvdWNoc3RhcnRcImluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClmb3IoY29uc3QgdCBvZltdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSlOLm9mZih0LFwibW91c2VvdmVyXCIsaCk7dGhpcy5fYWN0aXZlVHJpZ2dlcltjc109ITEsdGhpcy5fYWN0aXZlVHJpZ2dlcltsc109ITEsdGhpcy5fYWN0aXZlVHJpZ2dlclthc109ITEsdGhpcy5faXNIb3ZlcmVkPW51bGwsdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9Pnt0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCl8fCh0aGlzLl9pc0hvdmVyZWR8fHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKSx0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkYnlcIiksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoXCJoaWRkZW5cIikpKX0pLHRoaXMudGlwLHRoaXMuX2lzQW5pbWF0ZWQoKSl9fXVwZGF0ZSgpe3RoaXMuX3BvcHBlciYmdGhpcy5fcG9wcGVyLnVwZGF0ZSgpfV9pc1dpdGhDb250ZW50KCl7cmV0dXJuIEJvb2xlYW4odGhpcy5fZ2V0VGl0bGUoKSl9X2dldFRpcEVsZW1lbnQoKXtyZXR1cm4gdGhpcy50aXB8fCh0aGlzLnRpcD10aGlzLl9jcmVhdGVUaXBFbGVtZW50KHRoaXMuX25ld0NvbnRlbnR8fHRoaXMuX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpKSksdGhpcy50aXB9X2NyZWF0ZVRpcEVsZW1lbnQodCl7Y29uc3QgZT10aGlzLl9nZXRUZW1wbGF0ZUZhY3RvcnkodCkudG9IdG1sKCk7aWYoIWUpcmV0dXJuIG51bGw7ZS5jbGFzc0xpc3QucmVtb3ZlKGlzLG5zKSxlLmNsYXNzTGlzdC5hZGQoYGJzLSR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hdXRvYCk7Y29uc3QgaT0odD0+e2Rve3QrPU1hdGguZmxvb3IoMWU2Kk1hdGgucmFuZG9tKCkpfXdoaWxlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQpKTtyZXR1cm4gdH0pKHRoaXMuY29uc3RydWN0b3IuTkFNRSkudG9TdHJpbmcoKTtyZXR1cm4gZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLGkpLHRoaXMuX2lzQW5pbWF0ZWQoKSYmZS5jbGFzc0xpc3QuYWRkKGlzKSxlfXNldENvbnRlbnQodCl7dGhpcy5fbmV3Q29udGVudD10LHRoaXMuX2lzU2hvd24oKSYmKHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKSx0aGlzLnNob3coKSl9X2dldFRlbXBsYXRlRmFjdG9yeSh0KXtyZXR1cm4gdGhpcy5fdGVtcGxhdGVGYWN0b3J5P3RoaXMuX3RlbXBsYXRlRmFjdG9yeS5jaGFuZ2VDb250ZW50KHQpOnRoaXMuX3RlbXBsYXRlRmFjdG9yeT1uZXcgdHMoey4uLnRoaXMuX2NvbmZpZyxjb250ZW50OnQsZXh0cmFDbGFzczp0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuY3VzdG9tQ2xhc3MpfSksdGhpcy5fdGVtcGxhdGVGYWN0b3J5fV9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKXtyZXR1cm57W3NzXTp0aGlzLl9nZXRUaXRsZSgpfX1fZ2V0VGl0bGUoKXtyZXR1cm4gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLnRpdGxlKXx8dGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLW9yaWdpbmFsLXRpdGxlXCIpfV9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQodCl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3IuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0LmRlbGVnYXRlVGFyZ2V0LHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpfV9pc0FuaW1hdGVkKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5hbmltYXRpb258fHRoaXMudGlwJiZ0aGlzLnRpcC5jbGFzc0xpc3QuY29udGFpbnMoaXMpfV9pc1Nob3duKCl7cmV0dXJuIHRoaXMudGlwJiZ0aGlzLnRpcC5jbGFzc0xpc3QuY29udGFpbnMobnMpfV9jcmVhdGVQb3BwZXIodCl7Y29uc3QgZT1nKHRoaXMuX2NvbmZpZy5wbGFjZW1lbnQsW3RoaXMsdCx0aGlzLl9lbGVtZW50XSksaT1oc1tlLnRvVXBwZXJDYXNlKCldO3JldHVybiB5aSh0aGlzLl9lbGVtZW50LHQsdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKGkpKX1fZ2V0T2Zmc2V0KCl7Y29uc3R7b2Zmc2V0OnR9PXRoaXMuX2NvbmZpZztyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD90LnNwbGl0KFwiLFwiKS5tYXAoKHQ9Pk51bWJlci5wYXJzZUludCh0LDEwKSkpOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/ZT0+dChlLHRoaXMuX2VsZW1lbnQpOnR9X3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHQpe3JldHVybiBnKHQsW3RoaXMuX2VsZW1lbnQsdGhpcy5fZWxlbWVudF0pfV9nZXRQb3BwZXJDb25maWcodCl7Y29uc3QgZT17cGxhY2VtZW50OnQsbW9kaWZpZXJzOlt7bmFtZTpcImZsaXBcIixvcHRpb25zOntmYWxsYmFja1BsYWNlbWVudHM6dGhpcy5fY29uZmlnLmZhbGxiYWNrUGxhY2VtZW50c319LHtuYW1lOlwib2Zmc2V0XCIsb3B0aW9uczp7b2Zmc2V0OnRoaXMuX2dldE9mZnNldCgpfX0se25hbWU6XCJwcmV2ZW50T3ZlcmZsb3dcIixvcHRpb25zOntib3VuZGFyeTp0aGlzLl9jb25maWcuYm91bmRhcnl9fSx7bmFtZTpcImFycm93XCIsb3B0aW9uczp7ZWxlbWVudDpgLiR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hcnJvd2B9fSx7bmFtZTpcInByZVNldFBsYWNlbWVudFwiLGVuYWJsZWQ6ITAscGhhc2U6XCJiZWZvcmVNYWluXCIsZm46dD0+e3RoaXMuX2dldFRpcEVsZW1lbnQoKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBvcHBlci1wbGFjZW1lbnRcIix0LnN0YXRlLnBsYWNlbWVudCl9fV19O3JldHVybnsuLi5lLC4uLmcodGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyxbdm9pZCAwLGVdKX19X3NldExpc3RlbmVycygpe2NvbnN0IHQ9dGhpcy5fY29uZmlnLnRyaWdnZXIuc3BsaXQoXCIgXCIpO2Zvcihjb25zdCBlIG9mIHQpaWYoXCJjbGlja1wiPT09ZSlOLm9uKHRoaXMuX2VsZW1lbnQsdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoXCJjbGlja1wiKSx0aGlzLl9jb25maWcuc2VsZWN0b3IsKHQ9Pntjb25zdCBlPXRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldCh0KTtlLl9hY3RpdmVUcmlnZ2VyW2NzXT0hKGUuX2lzU2hvd24oKSYmZS5fYWN0aXZlVHJpZ2dlcltjc10pLGUudG9nZ2xlKCl9KSk7ZWxzZSBpZihcIm1hbnVhbFwiIT09ZSl7Y29uc3QgdD1lPT09YXM/dGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoXCJtb3VzZWVudGVyXCIpOnRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKFwiZm9jdXNpblwiKSxpPWU9PT1hcz90aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShcIm1vdXNlbGVhdmVcIik6dGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoXCJmb2N1c291dFwiKTtOLm9uKHRoaXMuX2VsZW1lbnQsdCx0aGlzLl9jb25maWcuc2VsZWN0b3IsKHQ9Pntjb25zdCBlPXRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldCh0KTtlLl9hY3RpdmVUcmlnZ2VyW1wiZm9jdXNpblwiPT09dC50eXBlP2xzOmFzXT0hMCxlLl9lbnRlcigpfSkpLE4ub24odGhpcy5fZWxlbWVudCxpLHRoaXMuX2NvbmZpZy5zZWxlY3RvciwodD0+e2NvbnN0IGU9dGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KHQpO2UuX2FjdGl2ZVRyaWdnZXJbXCJmb2N1c291dFwiPT09dC50eXBlP2xzOmFzXT1lLl9lbGVtZW50LmNvbnRhaW5zKHQucmVsYXRlZFRhcmdldCksZS5fbGVhdmUoKX0pKX10aGlzLl9oaWRlTW9kYWxIYW5kbGVyPSgpPT57dGhpcy5fZWxlbWVudCYmdGhpcy5oaWRlKCl9LE4ub24odGhpcy5fZWxlbWVudC5jbG9zZXN0KG9zKSxycyx0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKX1fZml4VGl0bGUoKXtjb25zdCB0PXRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKFwidGl0bGVcIik7dCYmKHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8dGhpcy5fZWxlbWVudC50ZXh0Q29udGVudC50cmltKCl8fHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLHQpLHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1icy1vcmlnaW5hbC10aXRsZVwiLHQpLHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwidGl0bGVcIikpfV9lbnRlcigpe3RoaXMuX2lzU2hvd24oKXx8dGhpcy5faXNIb3ZlcmVkP3RoaXMuX2lzSG92ZXJlZD0hMDoodGhpcy5faXNIb3ZlcmVkPSEwLHRoaXMuX3NldFRpbWVvdXQoKCgpPT57dGhpcy5faXNIb3ZlcmVkJiZ0aGlzLnNob3coKX0pLHRoaXMuX2NvbmZpZy5kZWxheS5zaG93KSl9X2xlYXZlKCl7dGhpcy5faXNXaXRoQWN0aXZlVHJpZ2dlcigpfHwodGhpcy5faXNIb3ZlcmVkPSExLHRoaXMuX3NldFRpbWVvdXQoKCgpPT57dGhpcy5faXNIb3ZlcmVkfHx0aGlzLmhpZGUoKX0pLHRoaXMuX2NvbmZpZy5kZWxheS5oaWRlKSl9X3NldFRpbWVvdXQodCxlKXtjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCksdGhpcy5fdGltZW91dD1zZXRUaW1lb3V0KHQsZSl9X2lzV2l0aEFjdGl2ZVRyaWdnZXIoKXtyZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLl9hY3RpdmVUcmlnZ2VyKS5pbmNsdWRlcyghMCl9X2dldENvbmZpZyh0KXtjb25zdCBlPUYuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCk7Zm9yKGNvbnN0IHQgb2YgT2JqZWN0LmtleXMoZSkpZXMuaGFzKHQpJiZkZWxldGUgZVt0XTtyZXR1cm4gdD17Li4uZSwuLi5cIm9iamVjdFwiPT10eXBlb2YgdCYmdD90Ont9fSx0PXRoaXMuX21lcmdlQ29uZmlnT2JqKHQpLHQ9dGhpcy5fY29uZmlnQWZ0ZXJNZXJnZSh0KSx0aGlzLl90eXBlQ2hlY2tDb25maWcodCksdH1fY29uZmlnQWZ0ZXJNZXJnZSh0KXtyZXR1cm4gdC5jb250YWluZXI9ITE9PT10LmNvbnRhaW5lcj9kb2N1bWVudC5ib2R5OnIodC5jb250YWluZXIpLFwibnVtYmVyXCI9PXR5cGVvZiB0LmRlbGF5JiYodC5kZWxheT17c2hvdzp0LmRlbGF5LGhpZGU6dC5kZWxheX0pLFwibnVtYmVyXCI9PXR5cGVvZiB0LnRpdGxlJiYodC50aXRsZT10LnRpdGxlLnRvU3RyaW5nKCkpLFwibnVtYmVyXCI9PXR5cGVvZiB0LmNvbnRlbnQmJih0LmNvbnRlbnQ9dC5jb250ZW50LnRvU3RyaW5nKCkpLHR9X2dldERlbGVnYXRlQ29uZmlnKCl7Y29uc3QgdD17fTtmb3IoY29uc3RbZSxpXW9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZykpdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2VdIT09aSYmKHRbZV09aSk7cmV0dXJuIHQuc2VsZWN0b3I9ITEsdC50cmlnZ2VyPVwibWFudWFsXCIsdH1fZGlzcG9zZVBvcHBlcigpe3RoaXMuX3BvcHBlciYmKHRoaXMuX3BvcHBlci5kZXN0cm95KCksdGhpcy5fcG9wcGVyPW51bGwpLHRoaXMudGlwJiYodGhpcy50aXAucmVtb3ZlKCksdGhpcy50aXA9bnVsbCl9c3RhdGljIGpRdWVyeUludGVyZmFjZSh0KXtyZXR1cm4gdGhpcy5lYWNoKChmdW5jdGlvbigpe2NvbnN0IGU9ZnMuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLHQpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZih2b2lkIDA9PT1lW3RdKXRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7dH1cImApO2VbdF0oKX19KSl9fW0oZnMpO2NvbnN0IHBzPVwiLnBvcG92ZXItaGVhZGVyXCIsbXM9XCIucG9wb3Zlci1ib2R5XCIsZ3M9ey4uLmZzLkRlZmF1bHQsY29udGVudDpcIlwiLG9mZnNldDpbMCw4XSxwbGFjZW1lbnQ6XCJyaWdodFwiLHRlbXBsYXRlOic8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInBvcG92ZXItYXJyb3dcIj48L2Rpdj48aDMgY2xhc3M9XCJwb3BvdmVyLWhlYWRlclwiPjwvaDM+PGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPjwvZGl2PjwvZGl2PicsdHJpZ2dlcjpcImNsaWNrXCJ9LF9zPXsuLi5mcy5EZWZhdWx0VHlwZSxjb250ZW50OlwiKG51bGx8c3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pXCJ9O2NsYXNzIGJzIGV4dGVuZHMgZnN7c3RhdGljIGdldCBEZWZhdWx0KCl7cmV0dXJuIGdzfXN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKXtyZXR1cm4gX3N9c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJwb3BvdmVyXCJ9X2lzV2l0aENvbnRlbnQoKXtyZXR1cm4gdGhpcy5fZ2V0VGl0bGUoKXx8dGhpcy5fZ2V0Q29udGVudCgpfV9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKXtyZXR1cm57W3BzXTp0aGlzLl9nZXRUaXRsZSgpLFttc106dGhpcy5fZ2V0Q29udGVudCgpfX1fZ2V0Q29udGVudCgpe3JldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuY29udGVudCl9c3RhdGljIGpRdWVyeUludGVyZmFjZSh0KXtyZXR1cm4gdGhpcy5lYWNoKChmdW5jdGlvbigpe2NvbnN0IGU9YnMuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLHQpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZih2b2lkIDA9PT1lW3RdKXRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7dH1cImApO2VbdF0oKX19KSl9fW0oYnMpO2NvbnN0IHZzPVwiLmJzLnNjcm9sbHNweVwiLHlzPWBhY3RpdmF0ZSR7dnN9YCx3cz1gY2xpY2ske3ZzfWAsQXM9YGxvYWQke3ZzfS5kYXRhLWFwaWAsRXM9XCJhY3RpdmVcIixUcz1cIltocmVmXVwiLENzPVwiLm5hdi1saW5rXCIsT3M9YCR7Q3N9LCAubmF2LWl0ZW0gPiAke0NzfSwgLmxpc3QtZ3JvdXAtaXRlbWAseHM9e29mZnNldDpudWxsLHJvb3RNYXJnaW46XCIwcHggMHB4IC0yNSVcIixzbW9vdGhTY3JvbGw6ITEsdGFyZ2V0Om51bGwsdGhyZXNob2xkOlsuMSwuNSwxXX0sa3M9e29mZnNldDpcIihudW1iZXJ8bnVsbClcIixyb290TWFyZ2luOlwic3RyaW5nXCIsc21vb3RoU2Nyb2xsOlwiYm9vbGVhblwiLHRhcmdldDpcImVsZW1lbnRcIix0aHJlc2hvbGQ6XCJhcnJheVwifTtjbGFzcyBMcyBleHRlbmRzIFd7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpLHRoaXMuX3RhcmdldExpbmtzPW5ldyBNYXAsdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zPW5ldyBNYXAsdGhpcy5fcm9vdEVsZW1lbnQ9XCJ2aXNpYmxlXCI9PT1nZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW1lbnQpLm92ZXJmbG93WT9udWxsOnRoaXMuX2VsZW1lbnQsdGhpcy5fYWN0aXZlVGFyZ2V0PW51bGwsdGhpcy5fb2JzZXJ2ZXI9bnVsbCx0aGlzLl9wcmV2aW91c1Njcm9sbERhdGE9e3Zpc2libGVFbnRyeVRvcDowLHBhcmVudFNjcm9sbFRvcDowfSx0aGlzLnJlZnJlc2goKX1zdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4geHN9c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybiBrc31zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cInNjcm9sbHNweVwifXJlZnJlc2goKXt0aGlzLl9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzKCksdGhpcy5fbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwoKSx0aGlzLl9vYnNlcnZlcj90aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk6dGhpcy5fb2JzZXJ2ZXI9dGhpcy5fZ2V0TmV3T2JzZXJ2ZXIoKTtmb3IoY29uc3QgdCBvZiB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMudmFsdWVzKCkpdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0KX1kaXNwb3NlKCl7dGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpLHN1cGVyLmRpc3Bvc2UoKX1fY29uZmlnQWZ0ZXJNZXJnZSh0KXtyZXR1cm4gdC50YXJnZXQ9cih0LnRhcmdldCl8fGRvY3VtZW50LmJvZHksdC5yb290TWFyZ2luPXQub2Zmc2V0P2Ake3Qub2Zmc2V0fXB4IDBweCAtMzAlYDp0LnJvb3RNYXJnaW4sXCJzdHJpbmdcIj09dHlwZW9mIHQudGhyZXNob2xkJiYodC50aHJlc2hvbGQ9dC50aHJlc2hvbGQuc3BsaXQoXCIsXCIpLm1hcCgodD0+TnVtYmVyLnBhcnNlRmxvYXQodCkpKSksdH1fbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwoKXt0aGlzLl9jb25maWcuc21vb3RoU2Nyb2xsJiYoTi5vZmYodGhpcy5fY29uZmlnLnRhcmdldCx3cyksTi5vbih0aGlzLl9jb25maWcudGFyZ2V0LHdzLFRzLCh0PT57Y29uc3QgZT10aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuZ2V0KHQudGFyZ2V0Lmhhc2gpO2lmKGUpe3QucHJldmVudERlZmF1bHQoKTtjb25zdCBpPXRoaXMuX3Jvb3RFbGVtZW50fHx3aW5kb3csbj1lLm9mZnNldFRvcC10aGlzLl9lbGVtZW50Lm9mZnNldFRvcDtpZihpLnNjcm9sbFRvKXJldHVybiB2b2lkIGkuc2Nyb2xsVG8oe3RvcDpuLGJlaGF2aW9yOlwic21vb3RoXCJ9KTtpLnNjcm9sbFRvcD1ufX0pKSl9X2dldE5ld09ic2VydmVyKCl7Y29uc3QgdD17cm9vdDp0aGlzLl9yb290RWxlbWVudCx0aHJlc2hvbGQ6dGhpcy5fY29uZmlnLnRocmVzaG9sZCxyb290TWFyZ2luOnRoaXMuX2NvbmZpZy5yb290TWFyZ2lufTtyZXR1cm4gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKCh0PT50aGlzLl9vYnNlcnZlckNhbGxiYWNrKHQpKSx0KX1fb2JzZXJ2ZXJDYWxsYmFjayh0KXtjb25zdCBlPXQ9PnRoaXMuX3RhcmdldExpbmtzLmdldChgIyR7dC50YXJnZXQuaWR9YCksaT10PT57dGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcD10LnRhcmdldC5vZmZzZXRUb3AsdGhpcy5fcHJvY2VzcyhlKHQpKX0sbj0odGhpcy5fcm9vdEVsZW1lbnR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuc2Nyb2xsVG9wLHM9bj49dGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnBhcmVudFNjcm9sbFRvcDt0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEucGFyZW50U2Nyb2xsVG9wPW47Zm9yKGNvbnN0IG8gb2YgdCl7aWYoIW8uaXNJbnRlcnNlY3Rpbmcpe3RoaXMuX2FjdGl2ZVRhcmdldD1udWxsLHRoaXMuX2NsZWFyQWN0aXZlQ2xhc3MoZShvKSk7Y29udGludWV9Y29uc3QgdD1vLnRhcmdldC5vZmZzZXRUb3A+PXRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS52aXNpYmxlRW50cnlUb3A7aWYocyYmdCl7aWYoaShvKSwhbilyZXR1cm59ZWxzZSBzfHx0fHxpKG8pfX1faW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpe3RoaXMuX3RhcmdldExpbmtzPW5ldyBNYXAsdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zPW5ldyBNYXA7Y29uc3QgdD16LmZpbmQoVHMsdGhpcy5fY29uZmlnLnRhcmdldCk7Zm9yKGNvbnN0IGUgb2YgdCl7aWYoIWUuaGFzaHx8bChlKSljb250aW51ZTtjb25zdCB0PXouZmluZE9uZShkZWNvZGVVUkkoZS5oYXNoKSx0aGlzLl9lbGVtZW50KTthKHQpJiYodGhpcy5fdGFyZ2V0TGlua3Muc2V0KGRlY29kZVVSSShlLmhhc2gpLGUpLHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy5zZXQoZS5oYXNoLHQpKX19X3Byb2Nlc3ModCl7dGhpcy5fYWN0aXZlVGFyZ2V0IT09dCYmKHRoaXMuX2NsZWFyQWN0aXZlQ2xhc3ModGhpcy5fY29uZmlnLnRhcmdldCksdGhpcy5fYWN0aXZlVGFyZ2V0PXQsdC5jbGFzc0xpc3QuYWRkKEVzKSx0aGlzLl9hY3RpdmF0ZVBhcmVudHModCksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQseXMse3JlbGF0ZWRUYXJnZXQ6dH0pKX1fYWN0aXZhdGVQYXJlbnRzKHQpe2lmKHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24taXRlbVwiKSl6LmZpbmRPbmUoXCIuZHJvcGRvd24tdG9nZ2xlXCIsdC5jbG9zZXN0KFwiLmRyb3Bkb3duXCIpKS5jbGFzc0xpc3QuYWRkKEVzKTtlbHNlIGZvcihjb25zdCBlIG9mIHoucGFyZW50cyh0LFwiLm5hdiwgLmxpc3QtZ3JvdXBcIikpZm9yKGNvbnN0IHQgb2Ygei5wcmV2KGUsT3MpKXQuY2xhc3NMaXN0LmFkZChFcyl9X2NsZWFyQWN0aXZlQ2xhc3ModCl7dC5jbGFzc0xpc3QucmVtb3ZlKEVzKTtjb25zdCBlPXouZmluZChgJHtUc30uJHtFc31gLHQpO2Zvcihjb25zdCB0IG9mIGUpdC5jbGFzc0xpc3QucmVtb3ZlKEVzKX1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT1Mcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsdCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWVbdF18fHQuc3RhcnRzV2l0aChcIl9cIil8fFwiY29uc3RydWN0b3JcIj09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHt0fVwiYCk7ZVt0XSgpfX0pKX19Ti5vbih3aW5kb3csQXMsKCgpPT57Zm9yKGNvbnN0IHQgb2Ygei5maW5kKCdbZGF0YS1icy1zcHk9XCJzY3JvbGxcIl0nKSlMcy5nZXRPckNyZWF0ZUluc3RhbmNlKHQpfSkpLG0oTHMpO2NvbnN0IFNzPVwiLmJzLnRhYlwiLERzPWBoaWRlJHtTc31gLCRzPWBoaWRkZW4ke1NzfWAsSXM9YHNob3cke1NzfWAsTnM9YHNob3duJHtTc31gLFBzPWBjbGljayR7U3N9YCxqcz1ga2V5ZG93biR7U3N9YCxNcz1gbG9hZCR7U3N9YCxGcz1cIkFycm93TGVmdFwiLEhzPVwiQXJyb3dSaWdodFwiLFdzPVwiQXJyb3dVcFwiLEJzPVwiQXJyb3dEb3duXCIsenM9XCJIb21lXCIsUnM9XCJFbmRcIixxcz1cImFjdGl2ZVwiLFZzPVwiZmFkZVwiLEtzPVwic2hvd1wiLFFzPVwiLmRyb3Bkb3duLXRvZ2dsZVwiLFhzPWA6bm90KCR7UXN9KWAsWXM9J1tkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXScsVXM9YC5uYXYtbGluayR7WHN9LCAubGlzdC1ncm91cC1pdGVtJHtYc30sIFtyb2xlPVwidGFiXCJdJHtYc30sICR7WXN9YCxHcz1gLiR7cXN9W2RhdGEtYnMtdG9nZ2xlPVwidGFiXCJdLCAuJHtxc31bZGF0YS1icy10b2dnbGU9XCJwaWxsXCJdLCAuJHtxc31bZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdYDtjbGFzcyBKcyBleHRlbmRzIFd7Y29uc3RydWN0b3IodCl7c3VwZXIodCksdGhpcy5fcGFyZW50PXRoaXMuX2VsZW1lbnQuY2xvc2VzdCgnLmxpc3QtZ3JvdXAsIC5uYXYsIFtyb2xlPVwidGFibGlzdFwiXScpLHRoaXMuX3BhcmVudCYmKHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzKHRoaXMuX3BhcmVudCx0aGlzLl9nZXRDaGlsZHJlbigpKSxOLm9uKHRoaXMuX2VsZW1lbnQsanMsKHQ9PnRoaXMuX2tleWRvd24odCkpKSl9c3RhdGljIGdldCBOQU1FKCl7cmV0dXJuXCJ0YWJcIn1zaG93KCl7Y29uc3QgdD10aGlzLl9lbGVtZW50O2lmKHRoaXMuX2VsZW1Jc0FjdGl2ZSh0KSlyZXR1cm47Y29uc3QgZT10aGlzLl9nZXRBY3RpdmVFbGVtKCksaT1lP04udHJpZ2dlcihlLERzLHtyZWxhdGVkVGFyZ2V0OnR9KTpudWxsO04udHJpZ2dlcih0LElzLHtyZWxhdGVkVGFyZ2V0OmV9KS5kZWZhdWx0UHJldmVudGVkfHxpJiZpLmRlZmF1bHRQcmV2ZW50ZWR8fCh0aGlzLl9kZWFjdGl2YXRlKGUsdCksdGhpcy5fYWN0aXZhdGUodCxlKSl9X2FjdGl2YXRlKHQsZSl7dCYmKHQuY2xhc3NMaXN0LmFkZChxcyksdGhpcy5fYWN0aXZhdGUoei5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHQpKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e1widGFiXCI9PT10LmdldEF0dHJpYnV0ZShcInJvbGVcIik/KHQucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIiksdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsITApLHRoaXMuX3RvZ2dsZURyb3BEb3duKHQsITApLE4udHJpZ2dlcih0LE5zLHtyZWxhdGVkVGFyZ2V0OmV9KSk6dC5jbGFzc0xpc3QuYWRkKEtzKX0pLHQsdC5jbGFzc0xpc3QuY29udGFpbnMoVnMpKSl9X2RlYWN0aXZhdGUodCxlKXt0JiYodC5jbGFzc0xpc3QucmVtb3ZlKHFzKSx0LmJsdXIoKSx0aGlzLl9kZWFjdGl2YXRlKHouZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0KSksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9PntcInRhYlwiPT09dC5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpPyh0LnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwhMSksdC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLFwiLTFcIiksdGhpcy5fdG9nZ2xlRHJvcERvd24odCwhMSksTi50cmlnZ2VyKHQsJHMse3JlbGF0ZWRUYXJnZXQ6ZX0pKTp0LmNsYXNzTGlzdC5yZW1vdmUoS3MpfSksdCx0LmNsYXNzTGlzdC5jb250YWlucyhWcykpKX1fa2V5ZG93bih0KXtpZighW0ZzLEhzLFdzLEJzLHpzLFJzXS5pbmNsdWRlcyh0LmtleSkpcmV0dXJuO3Quc3RvcFByb3BhZ2F0aW9uKCksdC5wcmV2ZW50RGVmYXVsdCgpO2NvbnN0IGU9dGhpcy5fZ2V0Q2hpbGRyZW4oKS5maWx0ZXIoKHQ9PiFsKHQpKSk7bGV0IGk7aWYoW3pzLFJzXS5pbmNsdWRlcyh0LmtleSkpaT1lW3Qua2V5PT09enM/MDplLmxlbmd0aC0xXTtlbHNle2NvbnN0IG49W0hzLEJzXS5pbmNsdWRlcyh0LmtleSk7aT1iKGUsdC50YXJnZXQsbiwhMCl9aSYmKGkuZm9jdXMoe3ByZXZlbnRTY3JvbGw6ITB9KSxKcy5nZXRPckNyZWF0ZUluc3RhbmNlKGkpLnNob3coKSl9X2dldENoaWxkcmVuKCl7cmV0dXJuIHouZmluZChVcyx0aGlzLl9wYXJlbnQpfV9nZXRBY3RpdmVFbGVtKCl7cmV0dXJuIHRoaXMuX2dldENoaWxkcmVuKCkuZmluZCgodD0+dGhpcy5fZWxlbUlzQWN0aXZlKHQpKSl8fG51bGx9X3NldEluaXRpYWxBdHRyaWJ1dGVzKHQsZSl7dGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModCxcInJvbGVcIixcInRhYmxpc3RcIik7Zm9yKGNvbnN0IHQgb2YgZSl0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQodCl9X3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZCh0KXt0PXRoaXMuX2dldElubmVyRWxlbWVudCh0KTtjb25zdCBlPXRoaXMuX2VsZW1Jc0FjdGl2ZSh0KSxpPXRoaXMuX2dldE91dGVyRWxlbWVudCh0KTt0LnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIixlKSxpIT09dCYmdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoaSxcInJvbGVcIixcInByZXNlbnRhdGlvblwiKSxlfHx0LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsXCItMVwiKSx0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyh0LFwicm9sZVwiLFwidGFiXCIpLHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbCh0KX1fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsKHQpe2NvbnN0IGU9ei5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHQpO2UmJih0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhlLFwicm9sZVwiLFwidGFicGFuZWxcIiksdC5pZCYmdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoZSxcImFyaWEtbGFiZWxsZWRieVwiLGAke3QuaWR9YCkpfV90b2dnbGVEcm9wRG93bih0LGUpe2NvbnN0IGk9dGhpcy5fZ2V0T3V0ZXJFbGVtZW50KHQpO2lmKCFpLmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duXCIpKXJldHVybjtjb25zdCBuPSh0LG4pPT57Y29uc3Qgcz16LmZpbmRPbmUodCxpKTtzJiZzLmNsYXNzTGlzdC50b2dnbGUobixlKX07bihRcyxxcyksbihcIi5kcm9wZG93bi1tZW51XCIsS3MpLGkuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLGUpfV9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyh0LGUsaSl7dC5oYXNBdHRyaWJ1dGUoZSl8fHQuc2V0QXR0cmlidXRlKGUsaSl9X2VsZW1Jc0FjdGl2ZSh0KXtyZXR1cm4gdC5jbGFzc0xpc3QuY29udGFpbnMocXMpfV9nZXRJbm5lckVsZW1lbnQodCl7cmV0dXJuIHQubWF0Y2hlcyhVcyk/dDp6LmZpbmRPbmUoVXMsdCl9X2dldE91dGVyRWxlbWVudCh0KXtyZXR1cm4gdC5jbG9zZXN0KFwiLm5hdi1pdGVtLCAubGlzdC1ncm91cC1pdGVtXCIpfHx0fXN0YXRpYyBqUXVlcnlJbnRlcmZhY2UodCl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtjb25zdCBlPUpzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcyk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWVbdF18fHQuc3RhcnRzV2l0aChcIl9cIil8fFwiY29uc3RydWN0b3JcIj09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHt0fVwiYCk7ZVt0XSgpfX0pKX19Ti5vbihkb2N1bWVudCxQcyxZcywoZnVuY3Rpb24odCl7W1wiQVwiLFwiQVJFQVwiXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpJiZ0LnByZXZlbnREZWZhdWx0KCksbCh0aGlzKXx8SnMuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS5zaG93KCl9KSksTi5vbih3aW5kb3csTXMsKCgpPT57Zm9yKGNvbnN0IHQgb2Ygei5maW5kKEdzKSlKcy5nZXRPckNyZWF0ZUluc3RhbmNlKHQpfSkpLG0oSnMpO2NvbnN0IFpzPVwiLmJzLnRvYXN0XCIsdG89YG1vdXNlb3ZlciR7WnN9YCxlbz1gbW91c2VvdXQke1pzfWAsaW89YGZvY3VzaW4ke1pzfWAsbm89YGZvY3Vzb3V0JHtac31gLHNvPWBoaWRlJHtac31gLG9vPWBoaWRkZW4ke1pzfWAscm89YHNob3cke1pzfWAsYW89YHNob3duJHtac31gLGxvPVwiaGlkZVwiLGNvPVwic2hvd1wiLGhvPVwic2hvd2luZ1wiLHVvPXthbmltYXRpb246XCJib29sZWFuXCIsYXV0b2hpZGU6XCJib29sZWFuXCIsZGVsYXk6XCJudW1iZXJcIn0sZm89e2FuaW1hdGlvbjohMCxhdXRvaGlkZTohMCxkZWxheTo1ZTN9O2NsYXNzIHBvIGV4dGVuZHMgV3tjb25zdHJ1Y3Rvcih0LGUpe3N1cGVyKHQsZSksdGhpcy5fdGltZW91dD1udWxsLHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb249ITEsdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbj0hMSx0aGlzLl9zZXRMaXN0ZW5lcnMoKX1zdGF0aWMgZ2V0IERlZmF1bHQoKXtyZXR1cm4gZm99c3RhdGljIGdldCBEZWZhdWx0VHlwZSgpe3JldHVybiB1b31zdGF0aWMgZ2V0IE5BTUUoKXtyZXR1cm5cInRvYXN0XCJ9c2hvdygpe04udHJpZ2dlcih0aGlzLl9lbGVtZW50LHJvKS5kZWZhdWx0UHJldmVudGVkfHwodGhpcy5fY2xlYXJUaW1lb3V0KCksdGhpcy5fY29uZmlnLmFuaW1hdGlvbiYmdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZmFkZVwiKSx0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobG8pLGQodGhpcy5fZWxlbWVudCksdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvLGhvKSx0aGlzLl9xdWV1ZUNhbGxiYWNrKCgoKT0+e3RoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShobyksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsYW8pLHRoaXMuX21heWJlU2NoZWR1bGVIaWRlKCl9KSx0aGlzLl9lbGVtZW50LHRoaXMuX2NvbmZpZy5hbmltYXRpb24pKX1oaWRlKCl7dGhpcy5pc1Nob3duKCkmJihOLnRyaWdnZXIodGhpcy5fZWxlbWVudCxzbykuZGVmYXVsdFByZXZlbnRlZHx8KHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChobyksdGhpcy5fcXVldWVDYWxsYmFjaygoKCk9Pnt0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQobG8pLHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShobyxjbyksTi50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsb28pfSksdGhpcy5fZWxlbWVudCx0aGlzLl9jb25maWcuYW5pbWF0aW9uKSkpfWRpc3Bvc2UoKXt0aGlzLl9jbGVhclRpbWVvdXQoKSx0aGlzLmlzU2hvd24oKSYmdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNvKSxzdXBlci5kaXNwb3NlKCl9aXNTaG93bigpe3JldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbyl9X21heWJlU2NoZWR1bGVIaWRlKCl7dGhpcy5fY29uZmlnLmF1dG9oaWRlJiYodGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbnx8dGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbnx8KHRoaXMuX3RpbWVvdXQ9c2V0VGltZW91dCgoKCk9Pnt0aGlzLmhpZGUoKX0pLHRoaXMuX2NvbmZpZy5kZWxheSkpKX1fb25JbnRlcmFjdGlvbih0LGUpe3N3aXRjaCh0LnR5cGUpe2Nhc2VcIm1vdXNlb3ZlclwiOmNhc2VcIm1vdXNlb3V0XCI6dGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbj1lO2JyZWFrO2Nhc2VcImZvY3VzaW5cIjpjYXNlXCJmb2N1c291dFwiOnRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb249ZX1pZihlKXJldHVybiB2b2lkIHRoaXMuX2NsZWFyVGltZW91dCgpO2NvbnN0IGk9dC5yZWxhdGVkVGFyZ2V0O3RoaXMuX2VsZW1lbnQ9PT1pfHx0aGlzLl9lbGVtZW50LmNvbnRhaW5zKGkpfHx0aGlzLl9tYXliZVNjaGVkdWxlSGlkZSgpfV9zZXRMaXN0ZW5lcnMoKXtOLm9uKHRoaXMuX2VsZW1lbnQsdG8sKHQ9PnRoaXMuX29uSW50ZXJhY3Rpb24odCwhMCkpKSxOLm9uKHRoaXMuX2VsZW1lbnQsZW8sKHQ9PnRoaXMuX29uSW50ZXJhY3Rpb24odCwhMSkpKSxOLm9uKHRoaXMuX2VsZW1lbnQsaW8sKHQ9PnRoaXMuX29uSW50ZXJhY3Rpb24odCwhMCkpKSxOLm9uKHRoaXMuX2VsZW1lbnQsbm8sKHQ9PnRoaXMuX29uSW50ZXJhY3Rpb24odCwhMSkpKX1fY2xlYXJUaW1lb3V0KCl7Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpLHRoaXMuX3RpbWVvdXQ9bnVsbH1zdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Y29uc3QgZT1wby5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsdCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2lmKHZvaWQgMD09PWVbdF0pdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHt0fVwiYCk7ZVt0XSh0aGlzKX19KSl9fXJldHVybiBSKHBvKSxtKHBvKSx7QWxlcnQ6USxCdXR0b246WSxDYXJvdXNlbDpMdCxDb2xsYXBzZTpSdCxEcm9wZG93bjpLaSxNb2RhbDprbixPZmZjYW52YXM6S24sUG9wb3ZlcjpicyxTY3JvbGxTcHk6THMsVGFiOkpzLFRvYXN0OnBvLFRvb2x0aXA6ZnN9fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vdHN0cmFwLmJ1bmRsZS5taW4uanMubWFwIl0sIm5hbWVzIjpbInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsIkNvbnRyb2xsZXIiLCJuYW1lQ2hlY2siLCJ0b2tlbkNoZWNrIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJfdGhpcyIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImdlbmVyYXRlQ3NyZlRva2VuIiwidGFyZ2V0IiwiaGVhZGVycyIsImdlbmVyYXRlQ3NyZkhlYWRlcnMiLCJkZXRhaWwiLCJmb3JtU3VibWlzc2lvbiIsImZvcm1FbGVtZW50IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJmZXRjaFJlcXVlc3QiLCJyZW1vdmVDc3JmVG9rZW4iLCJjc3JmRmllbGQiLCJxdWVyeVNlbGVjdG9yIiwiY3NyZkNvb2tpZSIsImdldEF0dHJpYnV0ZSIsImNzcmZUb2tlbiIsInRlc3QiLCJzZXRBdHRyaWJ1dGUiLCJkZWZhdWx0VmFsdWUiLCJidG9hIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYXBwbHkiLCJ3aW5kb3ciLCJjcnlwdG8iLCJtc0NyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQ4QXJyYXkiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY29va2llIiwiY29uY2F0IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImRlZmF1bHQiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9