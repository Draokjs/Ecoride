"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["csrf_protection_controller"],{

/***/ "./assets/controllers/csrf_protection_controller.js":
/*!**********************************************************!*\
  !*** ./assets/controllers/csrf_protection_controller.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/@hotwired/stimulus/dist/stimulus.js":
/*!**********************************************************!*\
  !*** ./node_modules/@hotwired/stimulus/dist/stimulus.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/controllers/csrf_protection_controller.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW9CLHlDQUF5QztBQUM3RCw2QkFBNkI7QUFDN0IsZ0VBQWdFLFlBQVk7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsMkNBQTJDO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUYsWUFBWTtBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQsb0JBQW9CLGtDQUFrQztBQUN0RCxxQ0FBcUMsaUNBQWlDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLGdCQUFnQixrQ0FBa0M7QUFDbEQsaUNBQWlDLGlDQUFpQztBQUNs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLCtCQUErQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGtDQUFrQyxpRUFBaUUsSUFBSTtBQUNqSSxpQ0FBaUMsT0FBTyxHQUFHLFVBQVU7QUFDckQsOENBQThDLDZCQUE2QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2NzcmZfcHJvdGVjdGlvbl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaG90d2lyZWQvc3RpbXVsdXMvZGlzdC9zdGltdWx1cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhc3NldHMvY29udHJvbGxlcnMvY3NyZl9wcm90ZWN0aW9uX2NvbnRyb2xsZXIuanNcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG5jb25zdCBuYW1lQ2hlY2sgPSAvXlstX2EtekEtWjAtOV17NCwyMn0kLztcclxuY29uc3QgdG9rZW5DaGVjayA9IC9eWy1fXFwvK2EtekEtWjAtOV17MjQsfSQvO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NTUkYgcHJvdGVjdGlvbiBjb250cm9sbGVyIGNvbm5lY3RlZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ3NyZlRva2VuKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3R1cmJvOnN1Ym1pdC1zdGFydCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5nZW5lcmF0ZUNzcmZIZWFkZXJzKGV2ZW50LmRldGFpbC5mb3JtU3VibWlzc2lvbi5mb3JtRWxlbWVudCk7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGhlYWRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuZGV0YWlsLmZvcm1TdWJtaXNzaW9uLmZldGNoUmVxdWVzdC5oZWFkZXJzW2tleV0gPSBoZWFkZXJzW2tleV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0dXJibzpzdWJtaXQtZW5kJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ3NyZlRva2VuKGV2ZW50LmRldGFpbC5mb3JtU3VibWlzc2lvbi5mb3JtRWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVDc3JmVG9rZW4oZm9ybUVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBjc3JmRmllbGQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtkYXRhLWNvbnRyb2xsZXI9XCJjc3JmLXByb3RlY3Rpb25cIl0sIGlucHV0W25hbWU9XCJfY3NyZl90b2tlblwiXScpO1xyXG4gICAgICAgIGlmICghY3NyZkZpZWxkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBjc3JmQ29va2llID0gY3NyZkZpZWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1jc3JmLXByb3RlY3Rpb24tY29va2llLXZhbHVlJyk7XHJcbiAgICAgICAgbGV0IGNzcmZUb2tlbiA9IGNzcmZGaWVsZC52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKCFjc3JmQ29va2llICYmIG5hbWVDaGVjay50ZXN0KGNzcmZUb2tlbikpIHtcclxuICAgICAgICAgICAgY3NyZkZpZWxkLnNldEF0dHJpYnV0ZSgnZGF0YS1jc3JmLXByb3RlY3Rpb24tY29va2llLXZhbHVlJywgY3NyZkNvb2tpZSA9IGNzcmZUb2tlbik7XHJcbiAgICAgICAgICAgIGNzcmZGaWVsZC5kZWZhdWx0VmFsdWUgPSBjc3JmVG9rZW4gPSBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgKHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvKS5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMTgpKSkpO1xyXG4gICAgICAgICAgICBjc3JmRmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScsIHsgYnViYmxlczogdHJ1ZSB9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3NyZkNvb2tpZSAmJiB0b2tlbkNoZWNrLnRlc3QoY3NyZlRva2VuKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb29raWUgPSBgJHtjc3JmQ29va2llfV8ke2NzcmZUb2tlbn09JHtjc3JmQ29va2llfTsgcGF0aD0vOyBzYW1lc2l0ZT1zdHJpY3RgO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonID8gYF9fSG9zdC0ke2Nvb2tpZX07IHNlY3VyZWAgOiBjb29raWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlQ3NyZkhlYWRlcnMoZm9ybUVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0ge307XHJcbiAgICAgICAgY29uc3QgY3NyZkZpZWxkID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS1jb250cm9sbGVyPVwiY3NyZi1wcm90ZWN0aW9uXCJdLCBpbnB1dFtuYW1lPVwiX2NzcmZfdG9rZW5cIl0nKTtcclxuICAgICAgICBpZiAoIWNzcmZGaWVsZCkgcmV0dXJuIGhlYWRlcnM7XHJcblxyXG4gICAgICAgIGNvbnN0IGNzcmZDb29raWUgPSBjc3JmRmllbGQuZ2V0QXR0cmlidXRlKCdkYXRhLWNzcmYtcHJvdGVjdGlvbi1jb29raWUtdmFsdWUnKTtcclxuICAgICAgICBpZiAodG9rZW5DaGVjay50ZXN0KGNzcmZGaWVsZC52YWx1ZSkgJiYgbmFtZUNoZWNrLnRlc3QoY3NyZkNvb2tpZSkpIHtcclxuICAgICAgICAgICAgaGVhZGVyc1tjc3JmQ29va2llXSA9IGNzcmZGaWVsZC52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNzcmZUb2tlbihmb3JtRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGNzcmZGaWVsZCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtY29udHJvbGxlcj1cImNzcmYtcHJvdGVjdGlvblwiXSwgaW5wdXRbbmFtZT1cIl9jc3JmX3Rva2VuXCJdJyk7XHJcbiAgICAgICAgaWYgKCFjc3JmRmllbGQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgY3NyZkNvb2tpZSA9IGNzcmZGaWVsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3NyZi1wcm90ZWN0aW9uLWNvb2tpZS12YWx1ZScpO1xyXG4gICAgICAgIGlmICh0b2tlbkNoZWNrLnRlc3QoY3NyZkZpZWxkLnZhbHVlKSAmJiBuYW1lQ2hlY2sudGVzdChjc3JmQ29va2llKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb29raWUgPSBgJHtjc3JmQ29va2llfV8ke2NzcmZGaWVsZC52YWx1ZX09MDsgcGF0aD0vOyBzYW1lc2l0ZT1zdHJpY3Q7IG1heC1hZ2U9MGA7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyBgX19Ib3N0LSR7Y29va2llfTsgc2VjdXJlYCA6IGNvb2tpZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuU3RpbXVsdXMgMy4yLjFcclxuQ29weXJpZ2h0IMKpIDIwMjMgQmFzZWNhbXAsIExMQ1xyXG4gKi9cclxuY2xhc3MgRXZlbnRMaXN0ZW5lciB7XHJcbiAgICBjb25zdHJ1Y3RvcihldmVudFRhcmdldCwgZXZlbnROYW1lLCBldmVudE9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0ID0gZXZlbnRUYXJnZXQ7XHJcbiAgICAgICAgdGhpcy5ldmVudE5hbWUgPSBldmVudE5hbWU7XHJcbiAgICAgICAgdGhpcy5ldmVudE9wdGlvbnMgPSBldmVudE9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy51bm9yZGVyZWRCaW5kaW5ncyA9IG5ldyBTZXQoKTtcclxuICAgIH1cclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCB0aGlzLCB0aGlzLmV2ZW50T3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBkaXNjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgdGhpcywgdGhpcy5ldmVudE9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgYmluZGluZ0Nvbm5lY3RlZChiaW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy51bm9yZGVyZWRCaW5kaW5ncy5hZGQoYmluZGluZyk7XHJcbiAgICB9XHJcbiAgICBiaW5kaW5nRGlzY29ubmVjdGVkKGJpbmRpbmcpIHtcclxuICAgICAgICB0aGlzLnVub3JkZXJlZEJpbmRpbmdzLmRlbGV0ZShiaW5kaW5nKTtcclxuICAgIH1cclxuICAgIGhhbmRsZUV2ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5kZWRFdmVudCA9IGV4dGVuZEV2ZW50KGV2ZW50KTtcclxuICAgICAgICBmb3IgKGNvbnN0IGJpbmRpbmcgb2YgdGhpcy5iaW5kaW5ncykge1xyXG4gICAgICAgICAgICBpZiAoZXh0ZW5kZWRFdmVudC5pbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmluZGluZy5oYW5kbGVFdmVudChleHRlbmRlZEV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhc0JpbmRpbmdzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVub3JkZXJlZEJpbmRpbmdzLnNpemUgPiAwO1xyXG4gICAgfVxyXG4gICAgZ2V0IGJpbmRpbmdzKCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMudW5vcmRlcmVkQmluZGluZ3MpLnNvcnQoKGxlZnQsIHJpZ2h0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlZnRJbmRleCA9IGxlZnQuaW5kZXgsIHJpZ2h0SW5kZXggPSByaWdodC5pbmRleDtcclxuICAgICAgICAgICAgcmV0dXJuIGxlZnRJbmRleCA8IHJpZ2h0SW5kZXggPyAtMSA6IGxlZnRJbmRleCA+IHJpZ2h0SW5kZXggPyAxIDogMDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBleHRlbmRFdmVudChldmVudCkge1xyXG4gICAgaWYgKFwiaW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkXCIgaW4gZXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gZXZlbnQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCB7IHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiB9ID0gZXZlbnQ7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZXZlbnQsIHtcclxuICAgICAgICAgICAgaW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIERpc3BhdGNoZXIge1xyXG4gICAgY29uc3RydWN0b3IoYXBwbGljYXRpb24pIHtcclxuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uID0gYXBwbGljYXRpb247XHJcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyTWFwcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGFydGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4gZXZlbnRMaXN0ZW5lci5jb25uZWN0KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiBldmVudExpc3RlbmVyLmRpc2Nvbm5lY3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZXZlbnRMaXN0ZW5lck1hcHMudmFsdWVzKCkpLnJlZHVjZSgobGlzdGVuZXJzLCBtYXApID0+IGxpc3RlbmVycy5jb25jYXQoQXJyYXkuZnJvbShtYXAudmFsdWVzKCkpKSwgW10pO1xyXG4gICAgfVxyXG4gICAgYmluZGluZ0Nvbm5lY3RlZChiaW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5mZXRjaEV2ZW50TGlzdGVuZXJGb3JCaW5kaW5nKGJpbmRpbmcpLmJpbmRpbmdDb25uZWN0ZWQoYmluZGluZyk7XHJcbiAgICB9XHJcbiAgICBiaW5kaW5nRGlzY29ubmVjdGVkKGJpbmRpbmcsIGNsZWFyRXZlbnRMaXN0ZW5lcnMgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuZmV0Y2hFdmVudExpc3RlbmVyRm9yQmluZGluZyhiaW5kaW5nKS5iaW5kaW5nRGlzY29ubmVjdGVkKGJpbmRpbmcpO1xyXG4gICAgICAgIGlmIChjbGVhckV2ZW50TGlzdGVuZXJzKVxyXG4gICAgICAgICAgICB0aGlzLmNsZWFyRXZlbnRMaXN0ZW5lcnNGb3JCaW5kaW5nKGJpbmRpbmcpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlRXJyb3IoZXJyb3IsIG1lc3NhZ2UsIGRldGFpbCA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5oYW5kbGVFcnJvcihlcnJvciwgYEVycm9yICR7bWVzc2FnZX1gLCBkZXRhaWwpO1xyXG4gICAgfVxyXG4gICAgY2xlYXJFdmVudExpc3RlbmVyc0ZvckJpbmRpbmcoYmluZGluZykge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmZldGNoRXZlbnRMaXN0ZW5lckZvckJpbmRpbmcoYmluZGluZyk7XHJcbiAgICAgICAgaWYgKCFldmVudExpc3RlbmVyLmhhc0JpbmRpbmdzKCkpIHtcclxuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlTWFwcGVkRXZlbnRMaXN0ZW5lckZvcihiaW5kaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVNYXBwZWRFdmVudExpc3RlbmVyRm9yKGJpbmRpbmcpIHtcclxuICAgICAgICBjb25zdCB7IGV2ZW50VGFyZ2V0LCBldmVudE5hbWUsIGV2ZW50T3B0aW9ucyB9ID0gYmluZGluZztcclxuICAgICAgICBjb25zdCBldmVudExpc3RlbmVyTWFwID0gdGhpcy5mZXRjaEV2ZW50TGlzdGVuZXJNYXBGb3JFdmVudFRhcmdldChldmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgY2FjaGVLZXkgPSB0aGlzLmNhY2hlS2V5KGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zKTtcclxuICAgICAgICBldmVudExpc3RlbmVyTWFwLmRlbGV0ZShjYWNoZUtleSk7XHJcbiAgICAgICAgaWYgKGV2ZW50TGlzdGVuZXJNYXAuc2l6ZSA9PSAwKVxyXG4gICAgICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJNYXBzLmRlbGV0ZShldmVudFRhcmdldCk7XHJcbiAgICB9XHJcbiAgICBmZXRjaEV2ZW50TGlzdGVuZXJGb3JCaW5kaW5nKGJpbmRpbmcpIHtcclxuICAgICAgICBjb25zdCB7IGV2ZW50VGFyZ2V0LCBldmVudE5hbWUsIGV2ZW50T3B0aW9ucyB9ID0gYmluZGluZztcclxuICAgICAgICByZXR1cm4gdGhpcy5mZXRjaEV2ZW50TGlzdGVuZXIoZXZlbnRUYXJnZXQsIGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zKTtcclxuICAgIH1cclxuICAgIGZldGNoRXZlbnRMaXN0ZW5lcihldmVudFRhcmdldCwgZXZlbnROYW1lLCBldmVudE9wdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBldmVudExpc3RlbmVyTWFwID0gdGhpcy5mZXRjaEV2ZW50TGlzdGVuZXJNYXBGb3JFdmVudFRhcmdldChldmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgY2FjaGVLZXkgPSB0aGlzLmNhY2hlS2V5KGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zKTtcclxuICAgICAgICBsZXQgZXZlbnRMaXN0ZW5lciA9IGV2ZW50TGlzdGVuZXJNYXAuZ2V0KGNhY2hlS2V5KTtcclxuICAgICAgICBpZiAoIWV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lciA9IHRoaXMuY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFRhcmdldCwgZXZlbnROYW1lLCBldmVudE9wdGlvbnMpO1xyXG4gICAgICAgICAgICBldmVudExpc3RlbmVyTWFwLnNldChjYWNoZUtleSwgZXZlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBldmVudExpc3RlbmVyO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFRhcmdldCwgZXZlbnROYW1lLCBldmVudE9wdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBldmVudExpc3RlbmVyID0gbmV3IEV2ZW50TGlzdGVuZXIoZXZlbnRUYXJnZXQsIGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zKTtcclxuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XHJcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXIuY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcclxuICAgIH1cclxuICAgIGZldGNoRXZlbnRMaXN0ZW5lck1hcEZvckV2ZW50VGFyZ2V0KGV2ZW50VGFyZ2V0KSB7XHJcbiAgICAgICAgbGV0IGV2ZW50TGlzdGVuZXJNYXAgPSB0aGlzLmV2ZW50TGlzdGVuZXJNYXBzLmdldChldmVudFRhcmdldCk7XHJcbiAgICAgICAgaWYgKCFldmVudExpc3RlbmVyTWFwKSB7XHJcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXJNYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lck1hcHMuc2V0KGV2ZW50VGFyZ2V0LCBldmVudExpc3RlbmVyTWFwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50TGlzdGVuZXJNYXA7XHJcbiAgICB9XHJcbiAgICBjYWNoZUtleShldmVudE5hbWUsIGV2ZW50T3B0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gW2V2ZW50TmFtZV07XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZXZlbnRPcHRpb25zKVxyXG4gICAgICAgICAgICAuc29ydCgpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgcGFydHMucHVzaChgJHtldmVudE9wdGlvbnNba2V5XSA/IFwiXCIgOiBcIiFcIn0ke2tleX1gKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcGFydHMuam9pbihcIjpcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRBY3Rpb25EZXNjcmlwdG9yRmlsdGVycyA9IHtcclxuICAgIHN0b3AoeyBldmVudCwgdmFsdWUgfSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSlcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgcHJldmVudCh7IGV2ZW50LCB2YWx1ZSB9KSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKVxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICAgIHNlbGYoeyBldmVudCwgdmFsdWUsIGVsZW1lbnQgfSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudCA9PT0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufTtcclxuY29uc3QgZGVzY3JpcHRvclBhdHRlcm4gPSAvXig/Oig/OihbXi5dKz8pXFwrKT8oLis/KSg/OlxcLiguKz8pKT8oPzpAKHdpbmRvd3xkb2N1bWVudCkpPy0+KT8oLis/KSg/OiMoW146XSs/KSkoPzo6KC4rKSk/JC87XHJcbmZ1bmN0aW9uIHBhcnNlQWN0aW9uRGVzY3JpcHRvclN0cmluZyhkZXNjcmlwdG9yU3RyaW5nKSB7XHJcbiAgICBjb25zdCBzb3VyY2UgPSBkZXNjcmlwdG9yU3RyaW5nLnRyaW0oKTtcclxuICAgIGNvbnN0IG1hdGNoZXMgPSBzb3VyY2UubWF0Y2goZGVzY3JpcHRvclBhdHRlcm4pIHx8IFtdO1xyXG4gICAgbGV0IGV2ZW50TmFtZSA9IG1hdGNoZXNbMl07XHJcbiAgICBsZXQga2V5RmlsdGVyID0gbWF0Y2hlc1szXTtcclxuICAgIGlmIChrZXlGaWx0ZXIgJiYgIVtcImtleWRvd25cIiwgXCJrZXl1cFwiLCBcImtleXByZXNzXCJdLmluY2x1ZGVzKGV2ZW50TmFtZSkpIHtcclxuICAgICAgICBldmVudE5hbWUgKz0gYC4ke2tleUZpbHRlcn1gO1xyXG4gICAgICAgIGtleUZpbHRlciA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGV2ZW50VGFyZ2V0OiBwYXJzZUV2ZW50VGFyZ2V0KG1hdGNoZXNbNF0pLFxyXG4gICAgICAgIGV2ZW50TmFtZSxcclxuICAgICAgICBldmVudE9wdGlvbnM6IG1hdGNoZXNbN10gPyBwYXJzZUV2ZW50T3B0aW9ucyhtYXRjaGVzWzddKSA6IHt9LFxyXG4gICAgICAgIGlkZW50aWZpZXI6IG1hdGNoZXNbNV0sXHJcbiAgICAgICAgbWV0aG9kTmFtZTogbWF0Y2hlc1s2XSxcclxuICAgICAgICBrZXlGaWx0ZXI6IG1hdGNoZXNbMV0gfHwga2V5RmlsdGVyLFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBwYXJzZUV2ZW50VGFyZ2V0KGV2ZW50VGFyZ2V0TmFtZSkge1xyXG4gICAgaWYgKGV2ZW50VGFyZ2V0TmFtZSA9PSBcIndpbmRvd1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGV2ZW50VGFyZ2V0TmFtZSA9PSBcImRvY3VtZW50XCIpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcGFyc2VFdmVudE9wdGlvbnMoZXZlbnRPcHRpb25zKSB7XHJcbiAgICByZXR1cm4gZXZlbnRPcHRpb25zXHJcbiAgICAgICAgLnNwbGl0KFwiOlwiKVxyXG4gICAgICAgIC5yZWR1Y2UoKG9wdGlvbnMsIHRva2VuKSA9PiBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHsgW3Rva2VuLnJlcGxhY2UoL14hLywgXCJcIildOiAhL14hLy50ZXN0KHRva2VuKSB9KSwge30pO1xyXG59XHJcbmZ1bmN0aW9uIHN0cmluZ2lmeUV2ZW50VGFyZ2V0KGV2ZW50VGFyZ2V0KSB7XHJcbiAgICBpZiAoZXZlbnRUYXJnZXQgPT0gd2luZG93KSB7XHJcbiAgICAgICAgcmV0dXJuIFwid2luZG93XCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChldmVudFRhcmdldCA9PSBkb2N1bWVudCkge1xyXG4gICAgICAgIHJldHVybiBcImRvY3VtZW50XCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbWVsaXplKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvKD86W18tXSkoW2EtejAtOV0pL2csIChfLCBjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcbmZ1bmN0aW9uIG5hbWVzcGFjZUNhbWVsaXplKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gY2FtZWxpemUodmFsdWUucmVwbGFjZSgvLS0vZywgXCItXCIpLnJlcGxhY2UoL19fL2csIFwiX1wiKSk7XHJcbn1cclxuZnVuY3Rpb24gY2FwaXRhbGl6ZSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XHJcbn1cclxuZnVuY3Rpb24gZGFzaGVyaXplKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvKFtBLVpdKS9nLCAoXywgY2hhcikgPT4gYC0ke2NoYXIudG9Mb3dlckNhc2UoKX1gKTtcclxufVxyXG5mdW5jdGlvbiB0b2tlbml6ZSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlLm1hdGNoKC9bXlxcc10rL2cpIHx8IFtdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1NvbWV0aGluZyhvYmplY3QpIHtcclxuICAgIHJldHVybiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0ICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuZnVuY3Rpb24gaGFzUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcclxufVxyXG5cclxuY29uc3QgYWxsTW9kaWZpZXJzID0gW1wibWV0YVwiLCBcImN0cmxcIiwgXCJhbHRcIiwgXCJzaGlmdFwiXTtcclxuY2xhc3MgQWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGluZGV4LCBkZXNjcmlwdG9yLCBzY2hlbWEpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0ID0gZGVzY3JpcHRvci5ldmVudFRhcmdldCB8fCBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZXZlbnROYW1lID0gZGVzY3JpcHRvci5ldmVudE5hbWUgfHwgZ2V0RGVmYXVsdEV2ZW50TmFtZUZvckVsZW1lbnQoZWxlbWVudCkgfHwgZXJyb3IoXCJtaXNzaW5nIGV2ZW50IG5hbWVcIik7XHJcbiAgICAgICAgdGhpcy5ldmVudE9wdGlvbnMgPSBkZXNjcmlwdG9yLmV2ZW50T3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB0aGlzLmlkZW50aWZpZXIgPSBkZXNjcmlwdG9yLmlkZW50aWZpZXIgfHwgZXJyb3IoXCJtaXNzaW5nIGlkZW50aWZpZXJcIik7XHJcbiAgICAgICAgdGhpcy5tZXRob2ROYW1lID0gZGVzY3JpcHRvci5tZXRob2ROYW1lIHx8IGVycm9yKFwibWlzc2luZyBtZXRob2QgbmFtZVwiKTtcclxuICAgICAgICB0aGlzLmtleUZpbHRlciA9IGRlc2NyaXB0b3Iua2V5RmlsdGVyIHx8IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZm9yVG9rZW4odG9rZW4sIHNjaGVtYSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgdGhpcyh0b2tlbi5lbGVtZW50LCB0b2tlbi5pbmRleCwgcGFyc2VBY3Rpb25EZXNjcmlwdG9yU3RyaW5nKHRva2VuLmNvbnRlbnQpLCBzY2hlbWEpO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRGaWx0ZXIgPSB0aGlzLmtleUZpbHRlciA/IGAuJHt0aGlzLmtleUZpbHRlcn1gIDogXCJcIjtcclxuICAgICAgICBjb25zdCBldmVudFRhcmdldCA9IHRoaXMuZXZlbnRUYXJnZXROYW1lID8gYEAke3RoaXMuZXZlbnRUYXJnZXROYW1lfWAgOiBcIlwiO1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmV2ZW50TmFtZX0ke2V2ZW50RmlsdGVyfSR7ZXZlbnRUYXJnZXR9LT4ke3RoaXMuaWRlbnRpZmllcn0jJHt0aGlzLm1ldGhvZE5hbWV9YDtcclxuICAgIH1cclxuICAgIHNob3VsZElnbm9yZUtleWJvYXJkRXZlbnQoZXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMua2V5RmlsdGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZmlsdGVycyA9IHRoaXMua2V5RmlsdGVyLnNwbGl0KFwiK1wiKTtcclxuICAgICAgICBpZiAodGhpcy5rZXlGaWx0ZXJEaXNzYXRpc2ZpZWQoZXZlbnQsIGZpbHRlcnMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdGFuZGFyZEZpbHRlciA9IGZpbHRlcnMuZmlsdGVyKChrZXkpID0+ICFhbGxNb2RpZmllcnMuaW5jbHVkZXMoa2V5KSlbMF07XHJcbiAgICAgICAgaWYgKCFzdGFuZGFyZEZpbHRlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaGFzUHJvcGVydHkodGhpcy5rZXlNYXBwaW5ncywgc3RhbmRhcmRGaWx0ZXIpKSB7XHJcbiAgICAgICAgICAgIGVycm9yKGBjb250YWlucyB1bmtub3duIGtleSBmaWx0ZXI6ICR7dGhpcy5rZXlGaWx0ZXJ9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmtleU1hcHBpbmdzW3N0YW5kYXJkRmlsdGVyXS50b0xvd2VyQ2FzZSgpICE9PSBldmVudC5rZXkudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuICAgIHNob3VsZElnbm9yZU1vdXNlRXZlbnQoZXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMua2V5RmlsdGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZmlsdGVycyA9IFt0aGlzLmtleUZpbHRlcl07XHJcbiAgICAgICAgaWYgKHRoaXMua2V5RmlsdGVyRGlzc2F0aXNmaWVkKGV2ZW50LCBmaWx0ZXJzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBhcmFtcygpIHtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcclxuICAgICAgICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cChgXmRhdGEtJHt0aGlzLmlkZW50aWZpZXJ9LSguKyktcGFyYW0kYCwgXCJpXCIpO1xyXG4gICAgICAgIGZvciAoY29uc3QgeyBuYW1lLCB2YWx1ZSB9IG9mIEFycmF5LmZyb20odGhpcy5lbGVtZW50LmF0dHJpYnV0ZXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gbmFtZS5tYXRjaChwYXR0ZXJuKTtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gbWF0Y2ggJiYgbWF0Y2hbMV07XHJcbiAgICAgICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtc1tjYW1lbGl6ZShrZXkpXSA9IHR5cGVjYXN0KHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFyYW1zO1xyXG4gICAgfVxyXG4gICAgZ2V0IGV2ZW50VGFyZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5naWZ5RXZlbnRUYXJnZXQodGhpcy5ldmVudFRhcmdldCk7XHJcbiAgICB9XHJcbiAgICBnZXQga2V5TWFwcGluZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmtleU1hcHBpbmdzO1xyXG4gICAgfVxyXG4gICAga2V5RmlsdGVyRGlzc2F0aXNmaWVkKGV2ZW50LCBmaWx0ZXJzKSB7XHJcbiAgICAgICAgY29uc3QgW21ldGEsIGN0cmwsIGFsdCwgc2hpZnRdID0gYWxsTW9kaWZpZXJzLm1hcCgobW9kaWZpZXIpID0+IGZpbHRlcnMuaW5jbHVkZXMobW9kaWZpZXIpKTtcclxuICAgICAgICByZXR1cm4gZXZlbnQubWV0YUtleSAhPT0gbWV0YSB8fCBldmVudC5jdHJsS2V5ICE9PSBjdHJsIHx8IGV2ZW50LmFsdEtleSAhPT0gYWx0IHx8IGV2ZW50LnNoaWZ0S2V5ICE9PSBzaGlmdDtcclxuICAgIH1cclxufVxyXG5jb25zdCBkZWZhdWx0RXZlbnROYW1lcyA9IHtcclxuICAgIGE6ICgpID0+IFwiY2xpY2tcIixcclxuICAgIGJ1dHRvbjogKCkgPT4gXCJjbGlja1wiLFxyXG4gICAgZm9ybTogKCkgPT4gXCJzdWJtaXRcIixcclxuICAgIGRldGFpbHM6ICgpID0+IFwidG9nZ2xlXCIsXHJcbiAgICBpbnB1dDogKGUpID0+IChlLmdldEF0dHJpYnV0ZShcInR5cGVcIikgPT0gXCJzdWJtaXRcIiA/IFwiY2xpY2tcIiA6IFwiaW5wdXRcIiksXHJcbiAgICBzZWxlY3Q6ICgpID0+IFwiY2hhbmdlXCIsXHJcbiAgICB0ZXh0YXJlYTogKCkgPT4gXCJpbnB1dFwiLFxyXG59O1xyXG5mdW5jdGlvbiBnZXREZWZhdWx0RXZlbnROYW1lRm9yRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICBjb25zdCB0YWdOYW1lID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBpZiAodGFnTmFtZSBpbiBkZWZhdWx0RXZlbnROYW1lcykge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0RXZlbnROYW1lc1t0YWdOYW1lXShlbGVtZW50KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbn1cclxuZnVuY3Rpb24gdHlwZWNhc3QodmFsdWUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKG9fTykge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQmluZGluZyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IGluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbi5pbmRleDtcclxuICAgIH1cclxuICAgIGdldCBldmVudFRhcmdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb24uZXZlbnRUYXJnZXQ7XHJcbiAgICB9XHJcbiAgICBnZXQgZXZlbnRPcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbi5ldmVudE9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBnZXQgaWRlbnRpZmllcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmlkZW50aWZpZXI7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVFdmVudChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbkV2ZW50ID0gdGhpcy5wcmVwYXJlQWN0aW9uRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLndpbGxCZUludm9rZWRCeUV2ZW50KGV2ZW50KSAmJiB0aGlzLmFwcGx5RXZlbnRNb2RpZmllcnMoYWN0aW9uRXZlbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW52b2tlV2l0aEV2ZW50KGFjdGlvbkV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgZXZlbnROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbi5ldmVudE5hbWU7XHJcbiAgICB9XHJcbiAgICBnZXQgbWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMuY29udHJvbGxlclt0aGlzLm1ldGhvZE5hbWVdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFjdGlvbiBcIiR7dGhpcy5hY3Rpb259XCIgcmVmZXJlbmNlcyB1bmRlZmluZWQgbWV0aG9kIFwiJHt0aGlzLm1ldGhvZE5hbWV9XCJgKTtcclxuICAgIH1cclxuICAgIGFwcGx5RXZlbnRNb2RpZmllcnMoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB7IGVsZW1lbnQgfSA9IHRoaXMuYWN0aW9uO1xyXG4gICAgICAgIGNvbnN0IHsgYWN0aW9uRGVzY3JpcHRvckZpbHRlcnMgfSA9IHRoaXMuY29udGV4dC5hcHBsaWNhdGlvbjtcclxuICAgICAgICBjb25zdCB7IGNvbnRyb2xsZXIgfSA9IHRoaXMuY29udGV4dDtcclxuICAgICAgICBsZXQgcGFzc2VzID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5ldmVudE9wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgIGlmIChuYW1lIGluIGFjdGlvbkRlc2NyaXB0b3JGaWx0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBhY3Rpb25EZXNjcmlwdG9yRmlsdGVyc1tuYW1lXTtcclxuICAgICAgICAgICAgICAgIHBhc3NlcyA9IHBhc3NlcyAmJiBmaWx0ZXIoeyBuYW1lLCB2YWx1ZSwgZXZlbnQsIGVsZW1lbnQsIGNvbnRyb2xsZXIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFzc2VzO1xyXG4gICAgfVxyXG4gICAgcHJlcGFyZUFjdGlvbkV2ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZXZlbnQsIHsgcGFyYW1zOiB0aGlzLmFjdGlvbi5wYXJhbXMgfSk7XHJcbiAgICB9XHJcbiAgICBpbnZva2VXaXRoRXZlbnQoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB7IHRhcmdldCwgY3VycmVudFRhcmdldCB9ID0gZXZlbnQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5tZXRob2QuY2FsbCh0aGlzLmNvbnRyb2xsZXIsIGV2ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmxvZ0RlYnVnQWN0aXZpdHkodGhpcy5tZXRob2ROYW1lLCB7IGV2ZW50LCB0YXJnZXQsIGN1cnJlbnRUYXJnZXQsIGFjdGlvbjogdGhpcy5tZXRob2ROYW1lIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBpZGVudGlmaWVyLCBjb250cm9sbGVyLCBlbGVtZW50LCBpbmRleCB9ID0gdGhpcztcclxuICAgICAgICAgICAgY29uc3QgZGV0YWlsID0geyBpZGVudGlmaWVyLCBjb250cm9sbGVyLCBlbGVtZW50LCBpbmRleCwgZXZlbnQgfTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmhhbmRsZUVycm9yKGVycm9yLCBgaW52b2tpbmcgYWN0aW9uIFwiJHt0aGlzLmFjdGlvbn1cImAsIGRldGFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2lsbEJlSW52b2tlZEJ5RXZlbnQoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBldmVudFRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50ICYmIHRoaXMuYWN0aW9uLnNob3VsZElnbm9yZUtleWJvYXJkRXZlbnQoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCAmJiB0aGlzLmFjdGlvbi5zaG91bGRJZ25vcmVNb3VzZUV2ZW50KGV2ZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgPT09IGV2ZW50VGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChldmVudFRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgdGhpcy5lbGVtZW50LmNvbnRhaW5zKGV2ZW50VGFyZ2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5jb250YWluc0VsZW1lbnQoZXZlbnRUYXJnZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuY29udGFpbnNFbGVtZW50KHRoaXMuYWN0aW9uLmVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBjb250cm9sbGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuY29udHJvbGxlcjtcclxuICAgIH1cclxuICAgIGdldCBtZXRob2ROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbi5tZXRob2ROYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0IGVsZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZWxlbWVudDtcclxuICAgIH1cclxuICAgIGdldCBzY29wZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnNjb3BlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBFbGVtZW50T2JzZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgZGVsZWdhdGUpIHtcclxuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXJJbml0ID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHRoaXMucHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbnMpKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGFydGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwgdGhpcy5tdXRhdGlvbk9ic2VydmVySW5pdCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBhdXNlKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHRoaXMubXV0YXRpb25PYnNlcnZlckluaXQpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBuZXcgU2V0KHRoaXMubWF0Y2hFbGVtZW50c0luVHJlZSgpKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIEFycmF5LmZyb20odGhpcy5lbGVtZW50cykpIHtcclxuICAgICAgICAgICAgICAgIGlmICghbWF0Y2hlcy5oYXMoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIEFycmF5LmZyb20obWF0Y2hlcykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTXV0YXRpb24obXV0YXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvY2Vzc011dGF0aW9uKG11dGF0aW9uKSB7XHJcbiAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT0gXCJhdHRyaWJ1dGVzXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQXR0cmlidXRlQ2hhbmdlKG11dGF0aW9uLnRhcmdldCwgbXV0YXRpb24uYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG11dGF0aW9uLnR5cGUgPT0gXCJjaGlsZExpc3RcIikge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZW1vdmVkTm9kZXMobXV0YXRpb24ucmVtb3ZlZE5vZGVzKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQWRkZWROb2RlcyhtdXRhdGlvbi5hZGRlZE5vZGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm9jZXNzQXR0cmlidXRlQ2hhbmdlKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuZWxlbWVudEF0dHJpYnV0ZUNoYW5nZWQgJiYgdGhpcy5tYXRjaEVsZW1lbnQoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuZWxlbWVudEF0dHJpYnV0ZUNoYW5nZWQoZWxlbWVudCwgYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5tYXRjaEVsZW1lbnQoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb2Nlc3NSZW1vdmVkTm9kZXMobm9kZXMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgQXJyYXkuZnJvbShub2RlcykpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudEZyb21Ob2RlKG5vZGUpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzVHJlZShlbGVtZW50LCB0aGlzLnJlbW92ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvY2Vzc0FkZGVkTm9kZXMobm9kZXMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgQXJyYXkuZnJvbShub2RlcykpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudEZyb21Ob2RlKG5vZGUpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiB0aGlzLmVsZW1lbnRJc0FjdGl2ZShlbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzVHJlZShlbGVtZW50LCB0aGlzLmFkZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWF0Y2hFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5tYXRjaEVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBtYXRjaEVsZW1lbnRzSW5UcmVlKHRyZWUgPSB0aGlzLmVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5tYXRjaEVsZW1lbnRzSW5UcmVlKHRyZWUpO1xyXG4gICAgfVxyXG4gICAgcHJvY2Vzc1RyZWUodHJlZSwgcHJvY2Vzc29yKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRoaXMubWF0Y2hFbGVtZW50c0luVHJlZSh0cmVlKSkge1xyXG4gICAgICAgICAgICBwcm9jZXNzb3IuY2FsbCh0aGlzLCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbGVtZW50RnJvbU5vZGUobm9kZSkge1xyXG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsZW1lbnRJc0FjdGl2ZShlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaXNDb25uZWN0ZWQgIT0gdGhpcy5lbGVtZW50LmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY29udGFpbnMoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50SXNBY3RpdmUoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuYWRkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuZWxlbWVudE1hdGNoZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlLmVsZW1lbnRNYXRjaGVkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZS5lbGVtZW50VW5tYXRjaGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlLmVsZW1lbnRVbm1hdGNoZWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEF0dHJpYnV0ZU9ic2VydmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUsIGRlbGVnYXRlKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlTmFtZTtcclxuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50T2JzZXJ2ZXIgPSBuZXcgRWxlbWVudE9ic2VydmVyKGVsZW1lbnQsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGVsZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudE9ic2VydmVyLmVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBnZXQgc2VsZWN0b3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBbJHt0aGlzLmF0dHJpYnV0ZU5hbWV9XWA7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRPYnNlcnZlci5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgcGF1c2UoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRPYnNlcnZlci5wYXVzZShjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudE9ic2VydmVyLnN0b3AoKTtcclxuICAgIH1cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50T2JzZXJ2ZXIucmVmcmVzaCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHN0YXJ0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudE9ic2VydmVyLnN0YXJ0ZWQ7XHJcbiAgICB9XHJcbiAgICBtYXRjaEVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSh0aGlzLmF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgfVxyXG4gICAgbWF0Y2hFbGVtZW50c0luVHJlZSh0cmVlKSB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLm1hdGNoRWxlbWVudCh0cmVlKSA/IFt0cmVlXSA6IFtdO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBBcnJheS5mcm9tKHRyZWUucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNlbGVjdG9yKSk7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoLmNvbmNhdChtYXRjaGVzKTtcclxuICAgIH1cclxuICAgIGVsZW1lbnRNYXRjaGVkKGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZS5lbGVtZW50TWF0Y2hlZEF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlLmVsZW1lbnRNYXRjaGVkQXR0cmlidXRlKGVsZW1lbnQsIHRoaXMuYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxlbWVudFVubWF0Y2hlZChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuZWxlbWVudFVubWF0Y2hlZEF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlLmVsZW1lbnRVbm1hdGNoZWRBdHRyaWJ1dGUoZWxlbWVudCwgdGhpcy5hdHRyaWJ1dGVOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbGVtZW50QXR0cmlidXRlQ2hhbmdlZChlbGVtZW50LCBhdHRyaWJ1dGVOYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuZWxlbWVudEF0dHJpYnV0ZVZhbHVlQ2hhbmdlZCAmJiB0aGlzLmF0dHJpYnV0ZU5hbWUgPT0gYXR0cmlidXRlTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlLmVsZW1lbnRBdHRyaWJ1dGVWYWx1ZUNoYW5nZWQoZWxlbWVudCwgYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGQobWFwLCBrZXksIHZhbHVlKSB7XHJcbiAgICBmZXRjaChtYXAsIGtleSkuYWRkKHZhbHVlKTtcclxufVxyXG5mdW5jdGlvbiBkZWwobWFwLCBrZXksIHZhbHVlKSB7XHJcbiAgICBmZXRjaChtYXAsIGtleSkuZGVsZXRlKHZhbHVlKTtcclxuICAgIHBydW5lKG1hcCwga2V5KTtcclxufVxyXG5mdW5jdGlvbiBmZXRjaChtYXAsIGtleSkge1xyXG4gICAgbGV0IHZhbHVlcyA9IG1hcC5nZXQoa2V5KTtcclxuICAgIGlmICghdmFsdWVzKSB7XHJcbiAgICAgICAgdmFsdWVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIG1hcC5zZXQoa2V5LCB2YWx1ZXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlcztcclxufVxyXG5mdW5jdGlvbiBwcnVuZShtYXAsIGtleSkge1xyXG4gICAgY29uc3QgdmFsdWVzID0gbWFwLmdldChrZXkpO1xyXG4gICAgaWYgKHZhbHVlcyAhPSBudWxsICYmIHZhbHVlcy5zaXplID09IDApIHtcclxuICAgICAgICBtYXAuZGVsZXRlKGtleSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE11bHRpbWFwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudmFsdWVzQnlLZXkgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcbiAgICBnZXQga2V5cygpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnZhbHVlc0J5S2V5LmtleXMoKSk7XHJcbiAgICB9XHJcbiAgICBnZXQgdmFsdWVzKCkge1xyXG4gICAgICAgIGNvbnN0IHNldHMgPSBBcnJheS5mcm9tKHRoaXMudmFsdWVzQnlLZXkudmFsdWVzKCkpO1xyXG4gICAgICAgIHJldHVybiBzZXRzLnJlZHVjZSgodmFsdWVzLCBzZXQpID0+IHZhbHVlcy5jb25jYXQoQXJyYXkuZnJvbShzZXQpKSwgW10pO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNpemUoKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0cyA9IEFycmF5LmZyb20odGhpcy52YWx1ZXNCeUtleS52YWx1ZXMoKSk7XHJcbiAgICAgICAgcmV0dXJuIHNldHMucmVkdWNlKChzaXplLCBzZXQpID0+IHNpemUgKyBzZXQuc2l6ZSwgMCk7XHJcbiAgICB9XHJcbiAgICBhZGQoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGFkZCh0aGlzLnZhbHVlc0J5S2V5LCBrZXksIHZhbHVlKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZShrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgZGVsKHRoaXMudmFsdWVzQnlLZXksIGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaGFzKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlc0J5S2V5LmdldChrZXkpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZXMgIT0gbnVsbCAmJiB2YWx1ZXMuaGFzKHZhbHVlKTtcclxuICAgIH1cclxuICAgIGhhc0tleShrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNCeUtleS5oYXMoa2V5KTtcclxuICAgIH1cclxuICAgIGhhc1ZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0cyA9IEFycmF5LmZyb20odGhpcy52YWx1ZXNCeUtleS52YWx1ZXMoKSk7XHJcbiAgICAgICAgcmV0dXJuIHNldHMuc29tZSgoc2V0KSA9PiBzZXQuaGFzKHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICBnZXRWYWx1ZXNGb3JLZXkoa2V5KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXNCeUtleS5nZXQoa2V5KTtcclxuICAgICAgICByZXR1cm4gdmFsdWVzID8gQXJyYXkuZnJvbSh2YWx1ZXMpIDogW107XHJcbiAgICB9XHJcbiAgICBnZXRLZXlzRm9yVmFsdWUodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnZhbHVlc0J5S2V5KVxyXG4gICAgICAgICAgICAuZmlsdGVyKChbX2tleSwgdmFsdWVzXSkgPT4gdmFsdWVzLmhhcyh2YWx1ZSkpXHJcbiAgICAgICAgICAgIC5tYXAoKFtrZXksIF92YWx1ZXNdKSA9PiBrZXkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBJbmRleGVkTXVsdGltYXAgZXh0ZW5kcyBNdWx0aW1hcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMua2V5c0J5VmFsdWUgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgdmFsdWVzKCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMua2V5c0J5VmFsdWUua2V5cygpKTtcclxuICAgIH1cclxuICAgIGFkZChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgc3VwZXIuYWRkKGtleSwgdmFsdWUpO1xyXG4gICAgICAgIGFkZCh0aGlzLmtleXNCeVZhbHVlLCB2YWx1ZSwga2V5KTtcclxuICAgIH1cclxuICAgIGRlbGV0ZShrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgc3VwZXIuZGVsZXRlKGtleSwgdmFsdWUpO1xyXG4gICAgICAgIGRlbCh0aGlzLmtleXNCeVZhbHVlLCB2YWx1ZSwga2V5KTtcclxuICAgIH1cclxuICAgIGhhc1ZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5c0J5VmFsdWUuaGFzKHZhbHVlKTtcclxuICAgIH1cclxuICAgIGdldEtleXNGb3JWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHNldCA9IHRoaXMua2V5c0J5VmFsdWUuZ2V0KHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gc2V0ID8gQXJyYXkuZnJvbShzZXQpIDogW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFNlbGVjdG9yT2JzZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgc2VsZWN0b3IsIGRlbGVnYXRlLCBkZXRhaWxzKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuICAgICAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudE9ic2VydmVyID0gbmV3IEVsZW1lbnRPYnNlcnZlcihlbGVtZW50LCB0aGlzKTtcclxuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XHJcbiAgICAgICAgdGhpcy5tYXRjaGVzQnlFbGVtZW50ID0gbmV3IE11bHRpbWFwKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgc3RhcnRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50T2JzZXJ2ZXIuc3RhcnRlZDtcclxuICAgIH1cclxuICAgIGdldCBzZWxlY3RvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0b3I7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VsZWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50T2JzZXJ2ZXIuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHBhdXNlKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50T2JzZXJ2ZXIucGF1c2UoY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRPYnNlcnZlci5zdG9wKCk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudE9ic2VydmVyLnJlZnJlc2goKTtcclxuICAgIH1cclxuICAgIGdldCBlbGVtZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRPYnNlcnZlci5lbGVtZW50O1xyXG4gICAgfVxyXG4gICAgbWF0Y2hFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCB7IHNlbGVjdG9yIH0gPSB0aGlzO1xyXG4gICAgICAgIGlmIChzZWxlY3Rvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuc2VsZWN0b3JNYXRjaEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVzICYmIHRoaXMuZGVsZWdhdGUuc2VsZWN0b3JNYXRjaEVsZW1lbnQoZWxlbWVudCwgdGhpcy5kZXRhaWxzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtYXRjaEVsZW1lbnRzSW5UcmVlKHRyZWUpIHtcclxuICAgICAgICBjb25zdCB7IHNlbGVjdG9yIH0gPSB0aGlzO1xyXG4gICAgICAgIGlmIChzZWxlY3Rvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IHRoaXMubWF0Y2hFbGVtZW50KHRyZWUpID8gW3RyZWVdIDogW107XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBBcnJheS5mcm9tKHRyZWUucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpLmZpbHRlcigobWF0Y2gpID0+IHRoaXMubWF0Y2hFbGVtZW50KG1hdGNoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaC5jb25jYXQobWF0Y2hlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxlbWVudE1hdGNoZWQoZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHsgc2VsZWN0b3IgfSA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0b3JNYXRjaGVkKGVsZW1lbnQsIHNlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbGVtZW50VW5tYXRjaGVkKGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSB0aGlzLm1hdGNoZXNCeUVsZW1lbnQuZ2V0S2V5c0ZvclZhbHVlKGVsZW1lbnQpO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2VsZWN0b3Igb2Ygc2VsZWN0b3JzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0b3JVbm1hdGNoZWQoZWxlbWVudCwgc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsZW1lbnRBdHRyaWJ1dGVDaGFuZ2VkKGVsZW1lbnQsIF9hdHRyaWJ1dGVOYW1lKSB7XHJcbiAgICAgICAgY29uc3QgeyBzZWxlY3RvciB9ID0gdGhpcztcclxuICAgICAgICBpZiAoc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMubWF0Y2hFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVkQmVmb3JlID0gdGhpcy5tYXRjaGVzQnlFbGVtZW50LmhhcyhzZWxlY3RvciwgZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVzICYmICFtYXRjaGVkQmVmb3JlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdG9yTWF0Y2hlZChlbGVtZW50LCBzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIW1hdGNoZXMgJiYgbWF0Y2hlZEJlZm9yZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RvclVubWF0Y2hlZChlbGVtZW50LCBzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3Rvck1hdGNoZWQoZWxlbWVudCwgc2VsZWN0b3IpIHtcclxuICAgICAgICB0aGlzLmRlbGVnYXRlLnNlbGVjdG9yTWF0Y2hlZChlbGVtZW50LCBzZWxlY3RvciwgdGhpcy5kZXRhaWxzKTtcclxuICAgICAgICB0aGlzLm1hdGNoZXNCeUVsZW1lbnQuYWRkKHNlbGVjdG9yLCBlbGVtZW50KTtcclxuICAgIH1cclxuICAgIHNlbGVjdG9yVW5tYXRjaGVkKGVsZW1lbnQsIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5zZWxlY3RvclVubWF0Y2hlZChlbGVtZW50LCBzZWxlY3RvciwgdGhpcy5kZXRhaWxzKTtcclxuICAgICAgICB0aGlzLm1hdGNoZXNCeUVsZW1lbnQuZGVsZXRlKHNlbGVjdG9yLCBlbGVtZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU3RyaW5nTWFwT2JzZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgZGVsZWdhdGUpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcclxuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0cmluZ01hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB0aGlzLnByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25zKSk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYXR0cmlidXRlTmFtZSBvZiB0aGlzLmtub3duQXR0cmlidXRlTmFtZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTXV0YXRpb24obXV0YXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvY2Vzc011dGF0aW9uKG11dGF0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWU7XHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG11dGF0aW9uLm9sZFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWZyZXNoQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5kZWxlZ2F0ZS5nZXRTdHJpbmdNYXBLZXlGb3JBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgaWYgKGtleSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdHJpbmdNYXAuaGFzKGF0dHJpYnV0ZU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZ01hcEtleUFkZGVkKGtleSwgYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpbmdNYXAuZ2V0KGF0dHJpYnV0ZU5hbWUpICE9IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZ01hcFZhbHVlQ2hhbmdlZCh2YWx1ZSwga2V5LCBvbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5zdHJpbmdNYXAuZ2V0KGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHJpbmdNYXAuZGVsZXRlKGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RyaW5nTWFwS2V5UmVtb3ZlZChrZXksIGF0dHJpYnV0ZU5hbWUsIG9sZFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RyaW5nTWFwLnNldChhdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdHJpbmdNYXBLZXlBZGRlZChrZXksIGF0dHJpYnV0ZU5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZS5zdHJpbmdNYXBLZXlBZGRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlLnN0cmluZ01hcEtleUFkZGVkKGtleSwgYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RyaW5nTWFwVmFsdWVDaGFuZ2VkKHZhbHVlLCBrZXksIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuc3RyaW5nTWFwVmFsdWVDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuc3RyaW5nTWFwVmFsdWVDaGFuZ2VkKHZhbHVlLCBrZXksIG9sZFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdHJpbmdNYXBLZXlSZW1vdmVkKGtleSwgYXR0cmlidXRlTmFtZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZS5zdHJpbmdNYXBLZXlSZW1vdmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuc3RyaW5nTWFwS2V5UmVtb3ZlZChrZXksIGF0dHJpYnV0ZU5hbWUsIG9sZFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQga25vd25BdHRyaWJ1dGVOYW1lcygpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMuY3VycmVudEF0dHJpYnV0ZU5hbWVzLmNvbmNhdCh0aGlzLnJlY29yZGVkQXR0cmlidXRlTmFtZXMpKSk7XHJcbiAgICB9XHJcbiAgICBnZXQgY3VycmVudEF0dHJpYnV0ZU5hbWVzKCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5hdHRyaWJ1dGVzKS5tYXAoKGF0dHJpYnV0ZSkgPT4gYXR0cmlidXRlLm5hbWUpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJlY29yZGVkQXR0cmlidXRlTmFtZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5zdHJpbmdNYXAua2V5cygpKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgVG9rZW5MaXN0T2JzZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgZGVsZWdhdGUpIHtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZU9ic2VydmVyID0gbmV3IEF0dHJpYnV0ZU9ic2VydmVyKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcclxuICAgICAgICB0aGlzLnRva2Vuc0J5RWxlbWVudCA9IG5ldyBNdWx0aW1hcCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHN0YXJ0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXIuc3RhcnRlZDtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXIuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHBhdXNlKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVPYnNlcnZlci5wYXVzZShjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXIuc3RvcCgpO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZU9ic2VydmVyLnJlZnJlc2goKTtcclxuICAgIH1cclxuICAgIGdldCBlbGVtZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZU9ic2VydmVyLmVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBnZXQgYXR0cmlidXRlTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVPYnNlcnZlci5hdHRyaWJ1dGVOYW1lO1xyXG4gICAgfVxyXG4gICAgZWxlbWVudE1hdGNoZWRBdHRyaWJ1dGUoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMudG9rZW5zTWF0Y2hlZCh0aGlzLnJlYWRUb2tlbnNGb3JFbGVtZW50KGVsZW1lbnQpKTtcclxuICAgIH1cclxuICAgIGVsZW1lbnRBdHRyaWJ1dGVWYWx1ZUNoYW5nZWQoZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IFt1bm1hdGNoZWRUb2tlbnMsIG1hdGNoZWRUb2tlbnNdID0gdGhpcy5yZWZyZXNoVG9rZW5zRm9yRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICB0aGlzLnRva2Vuc1VubWF0Y2hlZCh1bm1hdGNoZWRUb2tlbnMpO1xyXG4gICAgICAgIHRoaXMudG9rZW5zTWF0Y2hlZChtYXRjaGVkVG9rZW5zKTtcclxuICAgIH1cclxuICAgIGVsZW1lbnRVbm1hdGNoZWRBdHRyaWJ1dGUoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMudG9rZW5zVW5tYXRjaGVkKHRoaXMudG9rZW5zQnlFbGVtZW50LmdldFZhbHVlc0ZvcktleShlbGVtZW50KSk7XHJcbiAgICB9XHJcbiAgICB0b2tlbnNNYXRjaGVkKHRva2Vucykge1xyXG4gICAgICAgIHRva2Vucy5mb3JFYWNoKCh0b2tlbikgPT4gdGhpcy50b2tlbk1hdGNoZWQodG9rZW4pKTtcclxuICAgIH1cclxuICAgIHRva2Vuc1VubWF0Y2hlZCh0b2tlbnMpIHtcclxuICAgICAgICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHRoaXMudG9rZW5Vbm1hdGNoZWQodG9rZW4pKTtcclxuICAgIH1cclxuICAgIHRva2VuTWF0Y2hlZCh0b2tlbikge1xyXG4gICAgICAgIHRoaXMuZGVsZWdhdGUudG9rZW5NYXRjaGVkKHRva2VuKTtcclxuICAgICAgICB0aGlzLnRva2Vuc0J5RWxlbWVudC5hZGQodG9rZW4uZWxlbWVudCwgdG9rZW4pO1xyXG4gICAgfVxyXG4gICAgdG9rZW5Vbm1hdGNoZWQodG9rZW4pIHtcclxuICAgICAgICB0aGlzLmRlbGVnYXRlLnRva2VuVW5tYXRjaGVkKHRva2VuKTtcclxuICAgICAgICB0aGlzLnRva2Vuc0J5RWxlbWVudC5kZWxldGUodG9rZW4uZWxlbWVudCwgdG9rZW4pO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaFRva2Vuc0ZvckVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzVG9rZW5zID0gdGhpcy50b2tlbnNCeUVsZW1lbnQuZ2V0VmFsdWVzRm9yS2V5KGVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb2tlbnMgPSB0aGlzLnJlYWRUb2tlbnNGb3JFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0RGlmZmVyaW5nSW5kZXggPSB6aXAocHJldmlvdXNUb2tlbnMsIGN1cnJlbnRUb2tlbnMpLmZpbmRJbmRleCgoW3ByZXZpb3VzVG9rZW4sIGN1cnJlbnRUb2tlbl0pID0+ICF0b2tlbnNBcmVFcXVhbChwcmV2aW91c1Rva2VuLCBjdXJyZW50VG9rZW4pKTtcclxuICAgICAgICBpZiAoZmlyc3REaWZmZXJpbmdJbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1tdLCBbXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gW3ByZXZpb3VzVG9rZW5zLnNsaWNlKGZpcnN0RGlmZmVyaW5nSW5kZXgpLCBjdXJyZW50VG9rZW5zLnNsaWNlKGZpcnN0RGlmZmVyaW5nSW5kZXgpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWFkVG9rZW5zRm9yRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZTtcclxuICAgICAgICBjb25zdCB0b2tlblN0cmluZyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpIHx8IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlVG9rZW5TdHJpbmcodG9rZW5TdHJpbmcsIGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHBhcnNlVG9rZW5TdHJpbmcodG9rZW5TdHJpbmcsIGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUpIHtcclxuICAgIHJldHVybiB0b2tlblN0cmluZ1xyXG4gICAgICAgIC50cmltKClcclxuICAgICAgICAuc3BsaXQoL1xccysvKVxyXG4gICAgICAgIC5maWx0ZXIoKGNvbnRlbnQpID0+IGNvbnRlbnQubGVuZ3RoKVxyXG4gICAgICAgIC5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiAoeyBlbGVtZW50LCBhdHRyaWJ1dGVOYW1lLCBjb250ZW50LCBpbmRleCB9KSk7XHJcbn1cclxuZnVuY3Rpb24gemlwKGxlZnQsIHJpZ2h0KSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLm1heChsZWZ0Lmxlbmd0aCwgcmlnaHQubGVuZ3RoKTtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoIH0sIChfLCBpbmRleCkgPT4gW2xlZnRbaW5kZXhdLCByaWdodFtpbmRleF1dKTtcclxufVxyXG5mdW5jdGlvbiB0b2tlbnNBcmVFcXVhbChsZWZ0LCByaWdodCkge1xyXG4gICAgcmV0dXJuIGxlZnQgJiYgcmlnaHQgJiYgbGVmdC5pbmRleCA9PSByaWdodC5pbmRleCAmJiBsZWZ0LmNvbnRlbnQgPT0gcmlnaHQuY29udGVudDtcclxufVxyXG5cclxuY2xhc3MgVmFsdWVMaXN0T2JzZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgZGVsZWdhdGUpIHtcclxuICAgICAgICB0aGlzLnRva2VuTGlzdE9ic2VydmVyID0gbmV3IFRva2VuTGlzdE9ic2VydmVyKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcclxuICAgICAgICB0aGlzLnBhcnNlUmVzdWx0c0J5VG9rZW4gPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgICAgIHRoaXMudmFsdWVzQnlUb2tlbkJ5RWxlbWVudCA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgc3RhcnRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbkxpc3RPYnNlcnZlci5zdGFydGVkO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy50b2tlbkxpc3RPYnNlcnZlci5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLnRva2VuTGlzdE9ic2VydmVyLnN0b3AoKTtcclxuICAgIH1cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgdGhpcy50b2tlbkxpc3RPYnNlcnZlci5yZWZyZXNoKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgZWxlbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbkxpc3RPYnNlcnZlci5lbGVtZW50O1xyXG4gICAgfVxyXG4gICAgZ2V0IGF0dHJpYnV0ZU5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5MaXN0T2JzZXJ2ZXIuYXR0cmlidXRlTmFtZTtcclxuICAgIH1cclxuICAgIHRva2VuTWF0Y2hlZCh0b2tlbikge1xyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdG9rZW47XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5mZXRjaFBhcnNlUmVzdWx0Rm9yVG9rZW4odG9rZW4pO1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoVmFsdWVzQnlUb2tlbkZvckVsZW1lbnQoZWxlbWVudCkuc2V0KHRva2VuLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuZWxlbWVudE1hdGNoZWRWYWx1ZShlbGVtZW50LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9rZW5Vbm1hdGNoZWQodG9rZW4pIHtcclxuICAgICAgICBjb25zdCB7IGVsZW1lbnQgfSA9IHRva2VuO1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuZmV0Y2hQYXJzZVJlc3VsdEZvclRva2VuKHRva2VuKTtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5mZXRjaFZhbHVlc0J5VG9rZW5Gb3JFbGVtZW50KGVsZW1lbnQpLmRlbGV0ZSh0b2tlbik7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuZWxlbWVudFVubWF0Y2hlZFZhbHVlKGVsZW1lbnQsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFBhcnNlUmVzdWx0Rm9yVG9rZW4odG9rZW4pIHtcclxuICAgICAgICBsZXQgcGFyc2VSZXN1bHQgPSB0aGlzLnBhcnNlUmVzdWx0c0J5VG9rZW4uZ2V0KHRva2VuKTtcclxuICAgICAgICBpZiAoIXBhcnNlUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHBhcnNlUmVzdWx0ID0gdGhpcy5wYXJzZVRva2VuKHRva2VuKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJzZVJlc3VsdHNCeVRva2VuLnNldCh0b2tlbiwgcGFyc2VSZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFyc2VSZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBmZXRjaFZhbHVlc0J5VG9rZW5Gb3JFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgdmFsdWVzQnlUb2tlbiA9IHRoaXMudmFsdWVzQnlUb2tlbkJ5RWxlbWVudC5nZXQoZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKCF2YWx1ZXNCeVRva2VuKSB7XHJcbiAgICAgICAgICAgIHZhbHVlc0J5VG9rZW4gPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzQnlUb2tlbkJ5RWxlbWVudC5zZXQoZWxlbWVudCwgdmFsdWVzQnlUb2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZXNCeVRva2VuO1xyXG4gICAgfVxyXG4gICAgcGFyc2VUb2tlbih0b2tlbikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kZWxlZ2F0ZS5wYXJzZVZhbHVlRm9yVG9rZW4odG9rZW4pO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3IgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEJpbmRpbmdPYnNlcnZlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBkZWxlZ2F0ZSkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xyXG4gICAgICAgIHRoaXMuYmluZGluZ3NCeUFjdGlvbiA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy52YWx1ZUxpc3RPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlTGlzdE9ic2VydmVyID0gbmV3IFZhbHVlTGlzdE9ic2VydmVyKHRoaXMuZWxlbWVudCwgdGhpcy5hY3Rpb25BdHRyaWJ1dGUsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlTGlzdE9ic2VydmVyLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZUxpc3RPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlTGlzdE9ic2VydmVyLnN0b3AoKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMudmFsdWVMaXN0T2JzZXJ2ZXI7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgZWxlbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBnZXQgaWRlbnRpZmllcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmlkZW50aWZpZXI7XHJcbiAgICB9XHJcbiAgICBnZXQgYWN0aW9uQXR0cmlidXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5hY3Rpb25BdHRyaWJ1dGU7XHJcbiAgICB9XHJcbiAgICBnZXQgc2NoZW1hKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuc2NoZW1hO1xyXG4gICAgfVxyXG4gICAgZ2V0IGJpbmRpbmdzKCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuYmluZGluZ3NCeUFjdGlvbi52YWx1ZXMoKSk7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0QWN0aW9uKGFjdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGJpbmRpbmcgPSBuZXcgQmluZGluZyh0aGlzLmNvbnRleHQsIGFjdGlvbik7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nc0J5QWN0aW9uLnNldChhY3Rpb24sIGJpbmRpbmcpO1xyXG4gICAgICAgIHRoaXMuZGVsZWdhdGUuYmluZGluZ0Nvbm5lY3RlZChiaW5kaW5nKTtcclxuICAgIH1cclxuICAgIGRpc2Nvbm5lY3RBY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgYmluZGluZyA9IHRoaXMuYmluZGluZ3NCeUFjdGlvbi5nZXQoYWN0aW9uKTtcclxuICAgICAgICBpZiAoYmluZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmJpbmRpbmdzQnlBY3Rpb24uZGVsZXRlKGFjdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuYmluZGluZ0Rpc2Nvbm5lY3RlZChiaW5kaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXNjb25uZWN0QWxsQWN0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmJpbmRpbmdzLmZvckVhY2goKGJpbmRpbmcpID0+IHRoaXMuZGVsZWdhdGUuYmluZGluZ0Rpc2Nvbm5lY3RlZChiaW5kaW5nLCB0cnVlKSk7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nc0J5QWN0aW9uLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBwYXJzZVZhbHVlRm9yVG9rZW4odG9rZW4pIHtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBBY3Rpb24uZm9yVG9rZW4odG9rZW4sIHRoaXMuc2NoZW1hKTtcclxuICAgICAgICBpZiAoYWN0aW9uLmlkZW50aWZpZXIgPT0gdGhpcy5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxlbWVudE1hdGNoZWRWYWx1ZShlbGVtZW50LCBhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmNvbm5lY3RBY3Rpb24oYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGVsZW1lbnRVbm1hdGNoZWRWYWx1ZShlbGVtZW50LCBhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RBY3Rpb24oYWN0aW9uKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgVmFsdWVPYnNlcnZlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCByZWNlaXZlcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5yZWNlaXZlciA9IHJlY2VpdmVyO1xyXG4gICAgICAgIHRoaXMuc3RyaW5nTWFwT2JzZXJ2ZXIgPSBuZXcgU3RyaW5nTWFwT2JzZXJ2ZXIodGhpcy5lbGVtZW50LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnZhbHVlRGVzY3JpcHRvck1hcCA9IHRoaXMuY29udHJvbGxlci52YWx1ZURlc2NyaXB0b3JNYXA7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnN0cmluZ01hcE9ic2VydmVyLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5pbnZva2VDaGFuZ2VkQ2FsbGJhY2tzRm9yRGVmYXVsdFZhbHVlcygpO1xyXG4gICAgfVxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLnN0cmluZ01hcE9ic2VydmVyLnN0b3AoKTtcclxuICAgIH1cclxuICAgIGdldCBlbGVtZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuZWxlbWVudDtcclxuICAgIH1cclxuICAgIGdldCBjb250cm9sbGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuY29udHJvbGxlcjtcclxuICAgIH1cclxuICAgIGdldFN0cmluZ01hcEtleUZvckF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSB7XHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUgaW4gdGhpcy52YWx1ZURlc2NyaXB0b3JNYXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVEZXNjcmlwdG9yTWFwW2F0dHJpYnV0ZU5hbWVdLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RyaW5nTWFwS2V5QWRkZWQoa2V5LCBhdHRyaWJ1dGVOYW1lKSB7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHRoaXMudmFsdWVEZXNjcmlwdG9yTWFwW2F0dHJpYnV0ZU5hbWVdO1xyXG4gICAgICAgIGlmICghdGhpcy5oYXNWYWx1ZShrZXkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW52b2tlQ2hhbmdlZENhbGxiYWNrKGtleSwgZGVzY3JpcHRvci53cml0ZXIodGhpcy5yZWNlaXZlcltrZXldKSwgZGVzY3JpcHRvci53cml0ZXIoZGVzY3JpcHRvci5kZWZhdWx0VmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdHJpbmdNYXBWYWx1ZUNoYW5nZWQodmFsdWUsIG5hbWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHRoaXMudmFsdWVEZXNjcmlwdG9yTmFtZU1hcFtuYW1lXTtcclxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAob2xkVmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLndyaXRlcihkZXNjcmlwdG9yLmRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW52b2tlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIHZhbHVlLCBvbGRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBzdHJpbmdNYXBLZXlSZW1vdmVkKGtleSwgYXR0cmlidXRlTmFtZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gdGhpcy52YWx1ZURlc2NyaXB0b3JOYW1lTWFwW2tleV07XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzVmFsdWUoa2V5KSkge1xyXG4gICAgICAgICAgICB0aGlzLmludm9rZUNoYW5nZWRDYWxsYmFjayhrZXksIGRlc2NyaXB0b3Iud3JpdGVyKHRoaXMucmVjZWl2ZXJba2V5XSksIG9sZFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW52b2tlQ2hhbmdlZENhbGxiYWNrKGtleSwgZGVzY3JpcHRvci53cml0ZXIoZGVzY3JpcHRvci5kZWZhdWx0VmFsdWUpLCBvbGRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW52b2tlQ2hhbmdlZENhbGxiYWNrc0ZvckRlZmF1bHRWYWx1ZXMoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCB7IGtleSwgbmFtZSwgZGVmYXVsdFZhbHVlLCB3cml0ZXIgfSBvZiB0aGlzLnZhbHVlRGVzY3JpcHRvcnMpIHtcclxuICAgICAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZSAhPSB1bmRlZmluZWQgJiYgIXRoaXMuY29udHJvbGxlci5kYXRhLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludm9rZUNoYW5nZWRDYWxsYmFjayhuYW1lLCB3cml0ZXIoZGVmYXVsdFZhbHVlKSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGludm9rZUNoYW5nZWRDYWxsYmFjayhuYW1lLCByYXdWYWx1ZSwgcmF3T2xkVmFsdWUpIHtcclxuICAgICAgICBjb25zdCBjaGFuZ2VkTWV0aG9kTmFtZSA9IGAke25hbWV9Q2hhbmdlZGA7XHJcbiAgICAgICAgY29uc3QgY2hhbmdlZE1ldGhvZCA9IHRoaXMucmVjZWl2ZXJbY2hhbmdlZE1ldGhvZE5hbWVdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2hhbmdlZE1ldGhvZCA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHRoaXMudmFsdWVEZXNjcmlwdG9yTmFtZU1hcFtuYW1lXTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZGVzY3JpcHRvci5yZWFkZXIocmF3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9sZFZhbHVlID0gcmF3T2xkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAocmF3T2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZSA9IGRlc2NyaXB0b3IucmVhZGVyKHJhd09sZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNoYW5nZWRNZXRob2QuY2FsbCh0aGlzLnJlY2VpdmVyLCB2YWx1ZSwgb2xkVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSA9IGBTdGltdWx1cyBWYWx1ZSBcIiR7dGhpcy5jb250ZXh0LmlkZW50aWZpZXJ9LiR7ZGVzY3JpcHRvci5uYW1lfVwiIC0gJHtlcnJvci5tZXNzYWdlfWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCB2YWx1ZURlc2NyaXB0b3JzKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWVEZXNjcmlwdG9yTWFwIH0gPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZURlc2NyaXB0b3JNYXApLm1hcCgoa2V5KSA9PiB2YWx1ZURlc2NyaXB0b3JNYXBba2V5XSk7XHJcbiAgICB9XHJcbiAgICBnZXQgdmFsdWVEZXNjcmlwdG9yTmFtZU1hcCgpIHtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdG9ycyA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMudmFsdWVEZXNjcmlwdG9yTWFwKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHRoaXMudmFsdWVEZXNjcmlwdG9yTWFwW2tleV07XHJcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzW2Rlc2NyaXB0b3IubmFtZV0gPSBkZXNjcmlwdG9yO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkZXNjcmlwdG9ycztcclxuICAgIH1cclxuICAgIGhhc1ZhbHVlKGF0dHJpYnV0ZU5hbWUpIHtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gdGhpcy52YWx1ZURlc2NyaXB0b3JOYW1lTWFwW2F0dHJpYnV0ZU5hbWVdO1xyXG4gICAgICAgIGNvbnN0IGhhc01ldGhvZE5hbWUgPSBgaGFzJHtjYXBpdGFsaXplKGRlc2NyaXB0b3IubmFtZSl9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWNlaXZlcltoYXNNZXRob2ROYW1lXTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgVGFyZ2V0T2JzZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgZGVsZWdhdGUpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcclxuICAgICAgICB0aGlzLnRhcmdldHNCeU5hbWUgPSBuZXcgTXVsdGltYXAoKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy50b2tlbkxpc3RPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLnRva2VuTGlzdE9ic2VydmVyID0gbmV3IFRva2VuTGlzdE9ic2VydmVyKHRoaXMuZWxlbWVudCwgdGhpcy5hdHRyaWJ1dGVOYW1lLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy50b2tlbkxpc3RPYnNlcnZlci5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9rZW5MaXN0T2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0QWxsVGFyZ2V0cygpO1xyXG4gICAgICAgICAgICB0aGlzLnRva2VuTGlzdE9ic2VydmVyLnN0b3AoKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMudG9rZW5MaXN0T2JzZXJ2ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9rZW5NYXRjaGVkKHsgZWxlbWVudCwgY29udGVudDogbmFtZSB9KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcGUuY29udGFpbnNFbGVtZW50KGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdFRhcmdldChlbGVtZW50LCBuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b2tlblVubWF0Y2hlZCh7IGVsZW1lbnQsIGNvbnRlbnQ6IG5hbWUgfSkge1xyXG4gICAgICAgIHRoaXMuZGlzY29ubmVjdFRhcmdldChlbGVtZW50LCBuYW1lKTtcclxuICAgIH1cclxuICAgIGNvbm5lY3RUYXJnZXQoZWxlbWVudCwgbmFtZSkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0c0J5TmFtZS5oYXMobmFtZSwgZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRzQnlOYW1lLmFkZChuYW1lLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgKF9hID0gdGhpcy50b2tlbkxpc3RPYnNlcnZlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhdXNlKCgpID0+IHRoaXMuZGVsZWdhdGUudGFyZ2V0Q29ubmVjdGVkKGVsZW1lbnQsIG5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXNjb25uZWN0VGFyZ2V0KGVsZW1lbnQsIG5hbWUpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0c0J5TmFtZS5oYXMobmFtZSwgZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRzQnlOYW1lLmRlbGV0ZShuYW1lLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgKF9hID0gdGhpcy50b2tlbkxpc3RPYnNlcnZlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhdXNlKCgpID0+IHRoaXMuZGVsZWdhdGUudGFyZ2V0RGlzY29ubmVjdGVkKGVsZW1lbnQsIG5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXNjb25uZWN0QWxsVGFyZ2V0cygpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgdGhpcy50YXJnZXRzQnlOYW1lLmtleXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRoaXMudGFyZ2V0c0J5TmFtZS5nZXRWYWx1ZXNGb3JLZXkobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdFRhcmdldChlbGVtZW50LCBuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBhdHRyaWJ1dGVOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBgZGF0YS0ke3RoaXMuY29udGV4dC5pZGVudGlmaWVyfS10YXJnZXRgO1xyXG4gICAgfVxyXG4gICAgZ2V0IGVsZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5lbGVtZW50O1xyXG4gICAgfVxyXG4gICAgZ2V0IHNjb3BlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuc2NvcGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRJbmhlcml0YWJsZVN0YXRpY0FycmF5VmFsdWVzKGNvbnN0cnVjdG9yLCBwcm9wZXJ0eU5hbWUpIHtcclxuICAgIGNvbnN0IGFuY2VzdG9ycyA9IGdldEFuY2VzdG9yc0ZvckNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKTtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKGFuY2VzdG9ycy5yZWR1Y2UoKHZhbHVlcywgY29uc3RydWN0b3IpID0+IHtcclxuICAgICAgICBnZXRPd25TdGF0aWNBcnJheVZhbHVlcyhjb25zdHJ1Y3RvciwgcHJvcGVydHlOYW1lKS5mb3JFYWNoKChuYW1lKSA9PiB2YWx1ZXMuYWRkKG5hbWUpKTtcclxuICAgICAgICByZXR1cm4gdmFsdWVzO1xyXG4gICAgfSwgbmV3IFNldCgpKSk7XHJcbn1cclxuZnVuY3Rpb24gcmVhZEluaGVyaXRhYmxlU3RhdGljT2JqZWN0UGFpcnMoY29uc3RydWN0b3IsIHByb3BlcnR5TmFtZSkge1xyXG4gICAgY29uc3QgYW5jZXN0b3JzID0gZ2V0QW5jZXN0b3JzRm9yQ29uc3RydWN0b3IoY29uc3RydWN0b3IpO1xyXG4gICAgcmV0dXJuIGFuY2VzdG9ycy5yZWR1Y2UoKHBhaXJzLCBjb25zdHJ1Y3RvcikgPT4ge1xyXG4gICAgICAgIHBhaXJzLnB1c2goLi4uZ2V0T3duU3RhdGljT2JqZWN0UGFpcnMoY29uc3RydWN0b3IsIHByb3BlcnR5TmFtZSkpO1xyXG4gICAgICAgIHJldHVybiBwYWlycztcclxuICAgIH0sIFtdKTtcclxufVxyXG5mdW5jdGlvbiBnZXRBbmNlc3RvcnNGb3JDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xyXG4gICAgY29uc3QgYW5jZXN0b3JzID0gW107XHJcbiAgICB3aGlsZSAoY29uc3RydWN0b3IpIHtcclxuICAgICAgICBhbmNlc3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgY29uc3RydWN0b3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoY29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFuY2VzdG9ycy5yZXZlcnNlKCk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0T3duU3RhdGljQXJyYXlWYWx1ZXMoY29uc3RydWN0b3IsIHByb3BlcnR5TmFtZSkge1xyXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IGNvbnN0cnVjdG9yW3Byb3BlcnR5TmFtZV07XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShkZWZpbml0aW9uKSA/IGRlZmluaXRpb24gOiBbXTtcclxufVxyXG5mdW5jdGlvbiBnZXRPd25TdGF0aWNPYmplY3RQYWlycyhjb25zdHJ1Y3RvciwgcHJvcGVydHlOYW1lKSB7XHJcbiAgICBjb25zdCBkZWZpbml0aW9uID0gY29uc3RydWN0b3JbcHJvcGVydHlOYW1lXTtcclxuICAgIHJldHVybiBkZWZpbml0aW9uID8gT2JqZWN0LmtleXMoZGVmaW5pdGlvbikubWFwKChrZXkpID0+IFtrZXksIGRlZmluaXRpb25ba2V5XV0pIDogW107XHJcbn1cclxuXHJcbmNsYXNzIE91dGxldE9ic2VydmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGRlbGVnYXRlKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XHJcbiAgICAgICAgdGhpcy5vdXRsZXRzQnlOYW1lID0gbmV3IE11bHRpbWFwKCk7XHJcbiAgICAgICAgdGhpcy5vdXRsZXRFbGVtZW50c0J5TmFtZSA9IG5ldyBNdWx0aW1hcCgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3JPYnNlcnZlck1hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZU9ic2VydmVyTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vdXRsZXREZWZpbml0aW9ucy5mb3JFYWNoKChvdXRsZXROYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHVwU2VsZWN0b3JPYnNlcnZlckZvck91dGxldChvdXRsZXROYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBBdHRyaWJ1dGVPYnNlcnZlckZvck91dGxldChvdXRsZXROYW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGVwZW5kZW50Q29udGV4dHMuZm9yRWFjaCgoY29udGV4dCkgPT4gY29udGV4dC5yZWZyZXNoKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rvck9ic2VydmVyTWFwLmZvckVhY2goKG9ic2VydmVyKSA9PiBvYnNlcnZlci5yZWZyZXNoKCkpO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXJNYXAuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IG9ic2VydmVyLnJlZnJlc2goKSk7XHJcbiAgICB9XHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdEFsbE91dGxldHMoKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wU2VsZWN0b3JPYnNlcnZlcnMoKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wQXR0cmlidXRlT2JzZXJ2ZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RvcFNlbGVjdG9yT2JzZXJ2ZXJzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdG9yT2JzZXJ2ZXJNYXAuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rvck9ic2VydmVyTWFwLmZvckVhY2goKG9ic2VydmVyKSA9PiBvYnNlcnZlci5zdG9wKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdG9yT2JzZXJ2ZXJNYXAuY2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdG9wQXR0cmlidXRlT2JzZXJ2ZXJzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZU9ic2VydmVyTWFwLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXJNYXAuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IG9ic2VydmVyLnN0b3AoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXJNYXAuY2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3Rvck1hdGNoZWQoZWxlbWVudCwgX3NlbGVjdG9yLCB7IG91dGxldE5hbWUgfSkge1xyXG4gICAgICAgIGNvbnN0IG91dGxldCA9IHRoaXMuZ2V0T3V0bGV0KGVsZW1lbnQsIG91dGxldE5hbWUpO1xyXG4gICAgICAgIGlmIChvdXRsZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0T3V0bGV0KG91dGxldCwgZWxlbWVudCwgb3V0bGV0TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VsZWN0b3JVbm1hdGNoZWQoZWxlbWVudCwgX3NlbGVjdG9yLCB7IG91dGxldE5hbWUgfSkge1xyXG4gICAgICAgIGNvbnN0IG91dGxldCA9IHRoaXMuZ2V0T3V0bGV0RnJvbU1hcChlbGVtZW50LCBvdXRsZXROYW1lKTtcclxuICAgICAgICBpZiAob3V0bGV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdE91dGxldChvdXRsZXQsIGVsZW1lbnQsIG91dGxldE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbGVjdG9yTWF0Y2hFbGVtZW50KGVsZW1lbnQsIHsgb3V0bGV0TmFtZSB9KSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLnNlbGVjdG9yKG91dGxldE5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGhhc091dGxldCA9IHRoaXMuaGFzT3V0bGV0KGVsZW1lbnQsIG91dGxldE5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGhhc091dGxldENvbnRyb2xsZXIgPSBlbGVtZW50Lm1hdGNoZXMoYFske3RoaXMuc2NoZW1hLmNvbnRyb2xsZXJBdHRyaWJ1dGV9fj0ke291dGxldE5hbWV9XWApO1xyXG4gICAgICAgIGlmIChzZWxlY3Rvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gaGFzT3V0bGV0ICYmIGhhc091dGxldENvbnRyb2xsZXIgJiYgZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbGVtZW50TWF0Y2hlZEF0dHJpYnV0ZShfZWxlbWVudCwgYXR0cmlidXRlTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IG91dGxldE5hbWUgPSB0aGlzLmdldE91dGxldE5hbWVGcm9tT3V0bGV0QXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKTtcclxuICAgICAgICBpZiAob3V0bGV0TmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdG9yT2JzZXJ2ZXJGb3JPdXRsZXQob3V0bGV0TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxlbWVudEF0dHJpYnV0ZVZhbHVlQ2hhbmdlZChfZWxlbWVudCwgYXR0cmlidXRlTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IG91dGxldE5hbWUgPSB0aGlzLmdldE91dGxldE5hbWVGcm9tT3V0bGV0QXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKTtcclxuICAgICAgICBpZiAob3V0bGV0TmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdG9yT2JzZXJ2ZXJGb3JPdXRsZXQob3V0bGV0TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxlbWVudFVubWF0Y2hlZEF0dHJpYnV0ZShfZWxlbWVudCwgYXR0cmlidXRlTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IG91dGxldE5hbWUgPSB0aGlzLmdldE91dGxldE5hbWVGcm9tT3V0bGV0QXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKTtcclxuICAgICAgICBpZiAob3V0bGV0TmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdG9yT2JzZXJ2ZXJGb3JPdXRsZXQob3V0bGV0TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29ubmVjdE91dGxldChvdXRsZXQsIGVsZW1lbnQsIG91dGxldE5hbWUpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgaWYgKCF0aGlzLm91dGxldEVsZW1lbnRzQnlOYW1lLmhhcyhvdXRsZXROYW1lLCBlbGVtZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLm91dGxldHNCeU5hbWUuYWRkKG91dGxldE5hbWUsIG91dGxldCk7XHJcbiAgICAgICAgICAgIHRoaXMub3V0bGV0RWxlbWVudHNCeU5hbWUuYWRkKG91dGxldE5hbWUsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAoX2EgPSB0aGlzLnNlbGVjdG9yT2JzZXJ2ZXJNYXAuZ2V0KG91dGxldE5hbWUpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGF1c2UoKCkgPT4gdGhpcy5kZWxlZ2F0ZS5vdXRsZXRDb25uZWN0ZWQob3V0bGV0LCBlbGVtZW50LCBvdXRsZXROYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGlzY29ubmVjdE91dGxldChvdXRsZXQsIGVsZW1lbnQsIG91dGxldE5hbWUpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgaWYgKHRoaXMub3V0bGV0RWxlbWVudHNCeU5hbWUuaGFzKG91dGxldE5hbWUsIGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0bGV0c0J5TmFtZS5kZWxldGUob3V0bGV0TmFtZSwgb3V0bGV0KTtcclxuICAgICAgICAgICAgdGhpcy5vdXRsZXRFbGVtZW50c0J5TmFtZS5kZWxldGUob3V0bGV0TmFtZSwgZWxlbWVudCk7XHJcbiAgICAgICAgICAgIChfYSA9IHRoaXMuc2VsZWN0b3JPYnNlcnZlck1hcFxyXG4gICAgICAgICAgICAgICAgLmdldChvdXRsZXROYW1lKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhdXNlKCgpID0+IHRoaXMuZGVsZWdhdGUub3V0bGV0RGlzY29ubmVjdGVkKG91dGxldCwgZWxlbWVudCwgb3V0bGV0TmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRpc2Nvbm5lY3RBbGxPdXRsZXRzKCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qgb3V0bGV0TmFtZSBvZiB0aGlzLm91dGxldEVsZW1lbnRzQnlOYW1lLmtleXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRoaXMub3V0bGV0RWxlbWVudHNCeU5hbWUuZ2V0VmFsdWVzRm9yS2V5KG91dGxldE5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG91dGxldCBvZiB0aGlzLm91dGxldHNCeU5hbWUuZ2V0VmFsdWVzRm9yS2V5KG91dGxldE5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0T3V0bGV0KG91dGxldCwgZWxlbWVudCwgb3V0bGV0TmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVTZWxlY3Rvck9ic2VydmVyRm9yT3V0bGV0KG91dGxldE5hbWUpIHtcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IHRoaXMuc2VsZWN0b3JPYnNlcnZlck1hcC5nZXQob3V0bGV0TmFtZSk7XHJcbiAgICAgICAgaWYgKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLnNlbGVjdG9yID0gdGhpcy5zZWxlY3RvcihvdXRsZXROYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXR1cFNlbGVjdG9yT2JzZXJ2ZXJGb3JPdXRsZXQob3V0bGV0TmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gdGhpcy5zZWxlY3RvcihvdXRsZXROYW1lKTtcclxuICAgICAgICBjb25zdCBzZWxlY3Rvck9ic2VydmVyID0gbmV3IFNlbGVjdG9yT2JzZXJ2ZXIoZG9jdW1lbnQuYm9keSwgc2VsZWN0b3IsIHRoaXMsIHsgb3V0bGV0TmFtZSB9KTtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yT2JzZXJ2ZXJNYXAuc2V0KG91dGxldE5hbWUsIHNlbGVjdG9yT2JzZXJ2ZXIpO1xyXG4gICAgICAgIHNlbGVjdG9yT2JzZXJ2ZXIuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHNldHVwQXR0cmlidXRlT2JzZXJ2ZXJGb3JPdXRsZXQob3V0bGV0TmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWVGb3JPdXRsZXROYW1lKG91dGxldE5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZU9ic2VydmVyID0gbmV3IEF0dHJpYnV0ZU9ic2VydmVyKHRoaXMuc2NvcGUuZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVPYnNlcnZlck1hcC5zZXQob3V0bGV0TmFtZSwgYXR0cmlidXRlT2JzZXJ2ZXIpO1xyXG4gICAgICAgIGF0dHJpYnV0ZU9ic2VydmVyLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RvcihvdXRsZXROYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUub3V0bGV0cy5nZXRTZWxlY3RvckZvck91dGxldE5hbWUob3V0bGV0TmFtZSk7XHJcbiAgICB9XHJcbiAgICBhdHRyaWJ1dGVOYW1lRm9yT3V0bGV0TmFtZShvdXRsZXROYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuc2NoZW1hLm91dGxldEF0dHJpYnV0ZUZvclNjb3BlKHRoaXMuaWRlbnRpZmllciwgb3V0bGV0TmFtZSk7XHJcbiAgICB9XHJcbiAgICBnZXRPdXRsZXROYW1lRnJvbU91dGxldEF0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm91dGxldERlZmluaXRpb25zLmZpbmQoKG91dGxldE5hbWUpID0+IHRoaXMuYXR0cmlidXRlTmFtZUZvck91dGxldE5hbWUob3V0bGV0TmFtZSkgPT09IGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgfVxyXG4gICAgZ2V0IG91dGxldERlcGVuZGVuY2llcygpIHtcclxuICAgICAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSBuZXcgTXVsdGltYXAoKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5tb2R1bGVzLmZvckVhY2goKG1vZHVsZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IG1vZHVsZS5kZWZpbml0aW9uLmNvbnRyb2xsZXJDb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgY29uc3Qgb3V0bGV0cyA9IHJlYWRJbmhlcml0YWJsZVN0YXRpY0FycmF5VmFsdWVzKGNvbnN0cnVjdG9yLCBcIm91dGxldHNcIik7XHJcbiAgICAgICAgICAgIG91dGxldHMuZm9yRWFjaCgob3V0bGV0KSA9PiBkZXBlbmRlbmNpZXMuYWRkKG91dGxldCwgbW9kdWxlLmlkZW50aWZpZXIpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZGVwZW5kZW5jaWVzO1xyXG4gICAgfVxyXG4gICAgZ2V0IG91dGxldERlZmluaXRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm91dGxldERlcGVuZGVuY2llcy5nZXRLZXlzRm9yVmFsdWUodGhpcy5pZGVudGlmaWVyKTtcclxuICAgIH1cclxuICAgIGdldCBkZXBlbmRlbnRDb250cm9sbGVySWRlbnRpZmllcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3V0bGV0RGVwZW5kZW5jaWVzLmdldFZhbHVlc0ZvcktleSh0aGlzLmlkZW50aWZpZXIpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRlcGVuZGVudENvbnRleHRzKCkge1xyXG4gICAgICAgIGNvbnN0IGlkZW50aWZpZXJzID0gdGhpcy5kZXBlbmRlbnRDb250cm9sbGVySWRlbnRpZmllcnM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLmNvbnRleHRzLmZpbHRlcigoY29udGV4dCkgPT4gaWRlbnRpZmllcnMuaW5jbHVkZXMoY29udGV4dC5pZGVudGlmaWVyKSk7XHJcbiAgICB9XHJcbiAgICBoYXNPdXRsZXQoZWxlbWVudCwgb3V0bGV0TmFtZSkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuZ2V0T3V0bGV0KGVsZW1lbnQsIG91dGxldE5hbWUpIHx8ICEhdGhpcy5nZXRPdXRsZXRGcm9tTWFwKGVsZW1lbnQsIG91dGxldE5hbWUpO1xyXG4gICAgfVxyXG4gICAgZ2V0T3V0bGV0KGVsZW1lbnQsIG91dGxldE5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi5nZXRDb250cm9sbGVyRm9yRWxlbWVudEFuZElkZW50aWZpZXIoZWxlbWVudCwgb3V0bGV0TmFtZSk7XHJcbiAgICB9XHJcbiAgICBnZXRPdXRsZXRGcm9tTWFwKGVsZW1lbnQsIG91dGxldE5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vdXRsZXRzQnlOYW1lLmdldFZhbHVlc0ZvcktleShvdXRsZXROYW1lKS5maW5kKChvdXRsZXQpID0+IG91dGxldC5lbGVtZW50ID09PSBlbGVtZW50KTtcclxuICAgIH1cclxuICAgIGdldCBzY29wZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnNjb3BlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNjaGVtYSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnNjaGVtYTtcclxuICAgIH1cclxuICAgIGdldCBpZGVudGlmaWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuaWRlbnRpZmllcjtcclxuICAgIH1cclxuICAgIGdldCBhcHBsaWNhdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmFwcGxpY2F0aW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJvdXRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi5yb3V0ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENvbnRleHQge1xyXG4gICAgY29uc3RydWN0b3IobW9kdWxlLCBzY29wZSkge1xyXG4gICAgICAgIHRoaXMubG9nRGVidWdBY3Rpdml0eSA9IChmdW5jdGlvbk5hbWUsIGRldGFpbCA9IHt9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaWRlbnRpZmllciwgY29udHJvbGxlciwgZWxlbWVudCB9ID0gdGhpcztcclxuICAgICAgICAgICAgZGV0YWlsID0gT2JqZWN0LmFzc2lnbih7IGlkZW50aWZpZXIsIGNvbnRyb2xsZXIsIGVsZW1lbnQgfSwgZGV0YWlsKTtcclxuICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5sb2dEZWJ1Z0FjdGl2aXR5KHRoaXMuaWRlbnRpZmllciwgZnVuY3Rpb25OYW1lLCBkZXRhaWwpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBtb2R1bGUuY29udHJvbGxlckNvbnN0cnVjdG9yKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYmluZGluZ09ic2VydmVyID0gbmV3IEJpbmRpbmdPYnNlcnZlcih0aGlzLCB0aGlzLmRpc3BhdGNoZXIpO1xyXG4gICAgICAgIHRoaXMudmFsdWVPYnNlcnZlciA9IG5ldyBWYWx1ZU9ic2VydmVyKHRoaXMsIHRoaXMuY29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy50YXJnZXRPYnNlcnZlciA9IG5ldyBUYXJnZXRPYnNlcnZlcih0aGlzLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm91dGxldE9ic2VydmVyID0gbmV3IE91dGxldE9ic2VydmVyKHRoaXMsIHRoaXMpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9nRGVidWdBY3Rpdml0eShcImluaXRpYWxpemVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCBcImluaXRpYWxpemluZyBjb250cm9sbGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nT2JzZXJ2ZXIuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnZhbHVlT2JzZXJ2ZXIuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnRhcmdldE9ic2VydmVyLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5vdXRsZXRPYnNlcnZlci5zdGFydCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5jb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9nRGVidWdBY3Rpdml0eShcImNvbm5lY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCBcImNvbm5lY3RpbmcgY29udHJvbGxlclwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIHRoaXMub3V0bGV0T2JzZXJ2ZXIucmVmcmVzaCgpO1xyXG4gICAgfVxyXG4gICAgZGlzY29ubmVjdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ0RlYnVnQWN0aXZpdHkoXCJkaXNjb25uZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgXCJkaXNjb25uZWN0aW5nIGNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3V0bGV0T2JzZXJ2ZXIuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0T2JzZXJ2ZXIuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMudmFsdWVPYnNlcnZlci5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nT2JzZXJ2ZXIuc3RvcCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGFwcGxpY2F0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZS5hcHBsaWNhdGlvbjtcclxuICAgIH1cclxuICAgIGdldCBpZGVudGlmaWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZS5pZGVudGlmaWVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNjaGVtYSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi5zY2hlbWE7XHJcbiAgICB9XHJcbiAgICBnZXQgZGlzcGF0Y2hlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi5kaXNwYXRjaGVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IGVsZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZWxlbWVudDtcclxuICAgIH1cclxuICAgIGdldCBwYXJlbnRFbGVtZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIH1cclxuICAgIGhhbmRsZUVycm9yKGVycm9yLCBtZXNzYWdlLCBkZXRhaWwgPSB7fSkge1xyXG4gICAgICAgIGNvbnN0IHsgaWRlbnRpZmllciwgY29udHJvbGxlciwgZWxlbWVudCB9ID0gdGhpcztcclxuICAgICAgICBkZXRhaWwgPSBPYmplY3QuYXNzaWduKHsgaWRlbnRpZmllciwgY29udHJvbGxlciwgZWxlbWVudCB9LCBkZXRhaWwpO1xyXG4gICAgICAgIHRoaXMuYXBwbGljYXRpb24uaGFuZGxlRXJyb3IoZXJyb3IsIGBFcnJvciAke21lc3NhZ2V9YCwgZGV0YWlsKTtcclxuICAgIH1cclxuICAgIHRhcmdldENvbm5lY3RlZChlbGVtZW50LCBuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5pbnZva2VDb250cm9sbGVyTWV0aG9kKGAke25hbWV9VGFyZ2V0Q29ubmVjdGVkYCwgZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICB0YXJnZXREaXNjb25uZWN0ZWQoZWxlbWVudCwgbmFtZSkge1xyXG4gICAgICAgIHRoaXMuaW52b2tlQ29udHJvbGxlck1ldGhvZChgJHtuYW1lfVRhcmdldERpc2Nvbm5lY3RlZGAsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgb3V0bGV0Q29ubmVjdGVkKG91dGxldCwgZWxlbWVudCwgbmFtZSkge1xyXG4gICAgICAgIHRoaXMuaW52b2tlQ29udHJvbGxlck1ldGhvZChgJHtuYW1lc3BhY2VDYW1lbGl6ZShuYW1lKX1PdXRsZXRDb25uZWN0ZWRgLCBvdXRsZXQsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgb3V0bGV0RGlzY29ubmVjdGVkKG91dGxldCwgZWxlbWVudCwgbmFtZSkge1xyXG4gICAgICAgIHRoaXMuaW52b2tlQ29udHJvbGxlck1ldGhvZChgJHtuYW1lc3BhY2VDYW1lbGl6ZShuYW1lKX1PdXRsZXREaXNjb25uZWN0ZWRgLCBvdXRsZXQsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgaW52b2tlQ29udHJvbGxlck1ldGhvZChtZXRob2ROYW1lLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IHRoaXMuY29udHJvbGxlcjtcclxuICAgICAgICBpZiAodHlwZW9mIGNvbnRyb2xsZXJbbWV0aG9kTmFtZV0gPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJbbWV0aG9kTmFtZV0oLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBibGVzcyhjb25zdHJ1Y3Rvcikge1xyXG4gICAgcmV0dXJuIHNoYWRvdyhjb25zdHJ1Y3RvciwgZ2V0Qmxlc3NlZFByb3BlcnRpZXMoY29uc3RydWN0b3IpKTtcclxufVxyXG5mdW5jdGlvbiBzaGFkb3coY29uc3RydWN0b3IsIHByb3BlcnRpZXMpIHtcclxuICAgIGNvbnN0IHNoYWRvd0NvbnN0cnVjdG9yID0gZXh0ZW5kKGNvbnN0cnVjdG9yKTtcclxuICAgIGNvbnN0IHNoYWRvd1Byb3BlcnRpZXMgPSBnZXRTaGFkb3dQcm9wZXJ0aWVzKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvcGVydGllcyk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzaGFkb3dDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHNoYWRvd1Byb3BlcnRpZXMpO1xyXG4gICAgcmV0dXJuIHNoYWRvd0NvbnN0cnVjdG9yO1xyXG59XHJcbmZ1bmN0aW9uIGdldEJsZXNzZWRQcm9wZXJ0aWVzKGNvbnN0cnVjdG9yKSB7XHJcbiAgICBjb25zdCBibGVzc2luZ3MgPSByZWFkSW5oZXJpdGFibGVTdGF0aWNBcnJheVZhbHVlcyhjb25zdHJ1Y3RvciwgXCJibGVzc2luZ3NcIik7XHJcbiAgICByZXR1cm4gYmxlc3NpbmdzLnJlZHVjZSgoYmxlc3NlZFByb3BlcnRpZXMsIGJsZXNzaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IGJsZXNzaW5nKGNvbnN0cnVjdG9yKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBibGVzc2VkUHJvcGVydGllc1trZXldIHx8IHt9O1xyXG4gICAgICAgICAgICBibGVzc2VkUHJvcGVydGllc1trZXldID0gT2JqZWN0LmFzc2lnbihkZXNjcmlwdG9yLCBwcm9wZXJ0aWVzW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmxlc3NlZFByb3BlcnRpZXM7XHJcbiAgICB9LCB7fSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0U2hhZG93UHJvcGVydGllcyhwcm90b3R5cGUsIHByb3BlcnRpZXMpIHtcclxuICAgIHJldHVybiBnZXRPd25LZXlzKHByb3BlcnRpZXMpLnJlZHVjZSgoc2hhZG93UHJvcGVydGllcywga2V5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IGdldFNoYWRvd2VkRGVzY3JpcHRvcihwcm90b3R5cGUsIHByb3BlcnRpZXMsIGtleSk7XHJcbiAgICAgICAgaWYgKGRlc2NyaXB0b3IpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzaGFkb3dQcm9wZXJ0aWVzLCB7IFtrZXldOiBkZXNjcmlwdG9yIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2hhZG93UHJvcGVydGllcztcclxuICAgIH0sIHt9KTtcclxufVxyXG5mdW5jdGlvbiBnZXRTaGFkb3dlZERlc2NyaXB0b3IocHJvdG90eXBlLCBwcm9wZXJ0aWVzLCBrZXkpIHtcclxuICAgIGNvbnN0IHNoYWRvd2luZ0Rlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwga2V5KTtcclxuICAgIGNvbnN0IHNoYWRvd2VkQnlWYWx1ZSA9IHNoYWRvd2luZ0Rlc2NyaXB0b3IgJiYgXCJ2YWx1ZVwiIGluIHNoYWRvd2luZ0Rlc2NyaXB0b3I7XHJcbiAgICBpZiAoIXNoYWRvd2VkQnlWYWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3BlcnRpZXMsIGtleSkudmFsdWU7XHJcbiAgICAgICAgaWYgKHNoYWRvd2luZ0Rlc2NyaXB0b3IpIHtcclxuICAgICAgICAgICAgZGVzY3JpcHRvci5nZXQgPSBzaGFkb3dpbmdEZXNjcmlwdG9yLmdldCB8fCBkZXNjcmlwdG9yLmdldDtcclxuICAgICAgICAgICAgZGVzY3JpcHRvci5zZXQgPSBzaGFkb3dpbmdEZXNjcmlwdG9yLnNldCB8fCBkZXNjcmlwdG9yLnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgZ2V0T3duS2V5cyA9ICgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIChvYmplY3QpID0+IFsuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmplY3QpLCAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCldO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xyXG4gICAgfVxyXG59KSgpO1xyXG5jb25zdCBleHRlbmQgPSAoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gZXh0ZW5kV2l0aFJlZmxlY3QoY29uc3RydWN0b3IpIHtcclxuICAgICAgICBmdW5jdGlvbiBleHRlbmRlZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuY29uc3RydWN0KGNvbnN0cnVjdG9yLCBhcmd1bWVudHMsIG5ldy50YXJnZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHRlbmRlZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogZXh0ZW5kZWQgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSZWZsZWN0LnNldFByb3RvdHlwZU9mKGV4dGVuZGVkLCBjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZGVkO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdGVzdFJlZmxlY3RFeHRlbnNpb24oKSB7XHJcbiAgICAgICAgY29uc3QgYSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5hLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBiID0gZXh0ZW5kV2l0aFJlZmxlY3QoYSk7XHJcbiAgICAgICAgYi5wcm90b3R5cGUuYSA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgICAgICByZXR1cm4gbmV3IGIoKTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgdGVzdFJlZmxlY3RFeHRlbnNpb24oKTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kV2l0aFJlZmxlY3Q7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gKGNvbnN0cnVjdG9yKSA9PiBjbGFzcyBleHRlbmRlZCBleHRlbmRzIGNvbnN0cnVjdG9yIHtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYmxlc3NEZWZpbml0aW9uKGRlZmluaXRpb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWRlbnRpZmllcjogZGVmaW5pdGlvbi5pZGVudGlmaWVyLFxyXG4gICAgICAgIGNvbnRyb2xsZXJDb25zdHJ1Y3RvcjogYmxlc3MoZGVmaW5pdGlvbi5jb250cm9sbGVyQ29uc3RydWN0b3IpLFxyXG4gICAgfTtcclxufVxyXG5cclxuY2xhc3MgTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcGxpY2F0aW9uLCBkZWZpbml0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvbiA9IGFwcGxpY2F0aW9uO1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbiA9IGJsZXNzRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcclxuICAgICAgICB0aGlzLmNvbnRleHRzQnlTY29wZSA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRDb250ZXh0cyA9IG5ldyBTZXQoKTtcclxuICAgIH1cclxuICAgIGdldCBpZGVudGlmaWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmluaXRpb24uaWRlbnRpZmllcjtcclxuICAgIH1cclxuICAgIGdldCBjb250cm9sbGVyQ29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5jb250cm9sbGVyQ29uc3RydWN0b3I7XHJcbiAgICB9XHJcbiAgICBnZXQgY29udGV4dHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5jb25uZWN0ZWRDb250ZXh0cyk7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0Q29udGV4dEZvclNjb3BlKHNjb3BlKSB7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZmV0Y2hDb250ZXh0Rm9yU2NvcGUoc2NvcGUpO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkQ29udGV4dHMuYWRkKGNvbnRleHQpO1xyXG4gICAgICAgIGNvbnRleHQuY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gICAgZGlzY29ubmVjdENvbnRleHRGb3JTY29wZShzY29wZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzQnlTY29wZS5nZXQoc2NvcGUpO1xyXG4gICAgICAgIGlmIChjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGVkQ29udGV4dHMuZGVsZXRlKGNvbnRleHQpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaENvbnRleHRGb3JTY29wZShzY29wZSkge1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0c0J5U2NvcGUuZ2V0KHNjb3BlKTtcclxuICAgICAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgICAgICAgY29udGV4dCA9IG5ldyBDb250ZXh0KHRoaXMsIHNjb3BlKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0c0J5U2NvcGUuc2V0KHNjb3BlLCBjb250ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENsYXNzTWFwIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjb3BlKSB7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgfVxyXG4gICAgaGFzKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmhhcyh0aGlzLmdldERhdGFLZXkobmFtZSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0KG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGwobmFtZSlbMF07XHJcbiAgICB9XHJcbiAgICBnZXRBbGwobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuU3RyaW5nID0gdGhpcy5kYXRhLmdldCh0aGlzLmdldERhdGFLZXkobmFtZSkpIHx8IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIHRva2VuaXplKHRva2VuU3RyaW5nKTtcclxuICAgIH1cclxuICAgIGdldEF0dHJpYnV0ZU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZ2V0QXR0cmlidXRlTmFtZUZvcktleSh0aGlzLmdldERhdGFLZXkobmFtZSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YUtleShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke25hbWV9LWNsYXNzYDtcclxuICAgIH1cclxuICAgIGdldCBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIERhdGFNYXAge1xyXG4gICAgY29uc3RydWN0b3Ioc2NvcGUpIHtcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICB9XHJcbiAgICBnZXQgZWxlbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5lbGVtZW50O1xyXG4gICAgfVxyXG4gICAgZ2V0IGlkZW50aWZpZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuaWRlbnRpZmllcjtcclxuICAgIH1cclxuICAgIGdldChrZXkpIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXRBdHRyaWJ1dGVOYW1lRm9yS2V5KGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XHJcbiAgICB9XHJcbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZU5hbWVGb3JLZXkoa2V5KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoa2V5KTtcclxuICAgIH1cclxuICAgIGhhcyhrZXkpIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXRBdHRyaWJ1dGVOYW1lRm9yS2V5KGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGUoa2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlTmFtZUZvcktleShrZXkpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRBdHRyaWJ1dGVOYW1lRm9yS2V5KGtleSkge1xyXG4gICAgICAgIHJldHVybiBgZGF0YS0ke3RoaXMuaWRlbnRpZmllcn0tJHtkYXNoZXJpemUoa2V5KX1gO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBHdWlkZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXIpIHtcclxuICAgICAgICB0aGlzLndhcm5lZEtleXNCeU9iamVjdCA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XHJcbiAgICB9XHJcbiAgICB3YXJuKG9iamVjdCwga2V5LCBtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IHdhcm5lZEtleXMgPSB0aGlzLndhcm5lZEtleXNCeU9iamVjdC5nZXQob2JqZWN0KTtcclxuICAgICAgICBpZiAoIXdhcm5lZEtleXMpIHtcclxuICAgICAgICAgICAgd2FybmVkS2V5cyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdGhpcy53YXJuZWRLZXlzQnlPYmplY3Quc2V0KG9iamVjdCwgd2FybmVkS2V5cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghd2FybmVkS2V5cy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICB3YXJuZWRLZXlzLmFkZChrZXkpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuKG1lc3NhZ2UsIG9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRyaWJ1dGVWYWx1ZUNvbnRhaW5zVG9rZW4oYXR0cmlidXRlTmFtZSwgdG9rZW4pIHtcclxuICAgIHJldHVybiBgWyR7YXR0cmlidXRlTmFtZX1+PVwiJHt0b2tlbn1cIl1gO1xyXG59XHJcblxyXG5jbGFzcyBUYXJnZXRTZXQge1xyXG4gICAgY29uc3RydWN0b3Ioc2NvcGUpIHtcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICB9XHJcbiAgICBnZXQgZWxlbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5lbGVtZW50O1xyXG4gICAgfVxyXG4gICAgZ2V0IGlkZW50aWZpZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuaWRlbnRpZmllcjtcclxuICAgIH1cclxuICAgIGdldCBzY2hlbWEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuc2NoZW1hO1xyXG4gICAgfVxyXG4gICAgaGFzKHRhcmdldE5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maW5kKHRhcmdldE5hbWUpICE9IG51bGw7XHJcbiAgICB9XHJcbiAgICBmaW5kKC4uLnRhcmdldE5hbWVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldE5hbWVzLnJlZHVjZSgodGFyZ2V0LCB0YXJnZXROYW1lKSA9PiB0YXJnZXQgfHwgdGhpcy5maW5kVGFyZ2V0KHRhcmdldE5hbWUpIHx8IHRoaXMuZmluZExlZ2FjeVRhcmdldCh0YXJnZXROYW1lKSwgdW5kZWZpbmVkKTtcclxuICAgIH1cclxuICAgIGZpbmRBbGwoLi4udGFyZ2V0TmFtZXMpIHtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0TmFtZXMucmVkdWNlKCh0YXJnZXRzLCB0YXJnZXROYW1lKSA9PiBbXHJcbiAgICAgICAgICAgIC4uLnRhcmdldHMsXHJcbiAgICAgICAgICAgIC4uLnRoaXMuZmluZEFsbFRhcmdldHModGFyZ2V0TmFtZSksXHJcbiAgICAgICAgICAgIC4uLnRoaXMuZmluZEFsbExlZ2FjeVRhcmdldHModGFyZ2V0TmFtZSksXHJcbiAgICAgICAgXSwgW10pO1xyXG4gICAgfVxyXG4gICAgZmluZFRhcmdldCh0YXJnZXROYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLmdldFNlbGVjdG9yRm9yVGFyZ2V0TmFtZSh0YXJnZXROYW1lKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5maW5kRWxlbWVudChzZWxlY3Rvcik7XHJcbiAgICB9XHJcbiAgICBmaW5kQWxsVGFyZ2V0cyh0YXJnZXROYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLmdldFNlbGVjdG9yRm9yVGFyZ2V0TmFtZSh0YXJnZXROYW1lKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5maW5kQWxsRWxlbWVudHMoc2VsZWN0b3IpO1xyXG4gICAgfVxyXG4gICAgZ2V0U2VsZWN0b3JGb3JUYXJnZXROYW1lKHRhcmdldE5hbWUpIHtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gdGhpcy5zY2hlbWEudGFyZ2V0QXR0cmlidXRlRm9yU2NvcGUodGhpcy5pZGVudGlmaWVyKTtcclxuICAgICAgICByZXR1cm4gYXR0cmlidXRlVmFsdWVDb250YWluc1Rva2VuKGF0dHJpYnV0ZU5hbWUsIHRhcmdldE5hbWUpO1xyXG4gICAgfVxyXG4gICAgZmluZExlZ2FjeVRhcmdldCh0YXJnZXROYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLmdldExlZ2FjeVNlbGVjdG9yRm9yVGFyZ2V0TmFtZSh0YXJnZXROYW1lKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXByZWNhdGUodGhpcy5zY29wZS5maW5kRWxlbWVudChzZWxlY3RvciksIHRhcmdldE5hbWUpO1xyXG4gICAgfVxyXG4gICAgZmluZEFsbExlZ2FjeVRhcmdldHModGFyZ2V0TmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gdGhpcy5nZXRMZWdhY3lTZWxlY3RvckZvclRhcmdldE5hbWUodGFyZ2V0TmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZmluZEFsbEVsZW1lbnRzKHNlbGVjdG9yKS5tYXAoKGVsZW1lbnQpID0+IHRoaXMuZGVwcmVjYXRlKGVsZW1lbnQsIHRhcmdldE5hbWUpKTtcclxuICAgIH1cclxuICAgIGdldExlZ2FjeVNlbGVjdG9yRm9yVGFyZ2V0TmFtZSh0YXJnZXROYW1lKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RGVzY3JpcHRvciA9IGAke3RoaXMuaWRlbnRpZmllcn0uJHt0YXJnZXROYW1lfWA7XHJcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlQ29udGFpbnNUb2tlbih0aGlzLnNjaGVtYS50YXJnZXRBdHRyaWJ1dGUsIHRhcmdldERlc2NyaXB0b3IpO1xyXG4gICAgfVxyXG4gICAgZGVwcmVjYXRlKGVsZW1lbnQsIHRhcmdldE5hbWUpIHtcclxuICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSB0aGlzLnNjaGVtYS50YXJnZXRBdHRyaWJ1dGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHJldmlzZWRBdHRyaWJ1dGVOYW1lID0gdGhpcy5zY2hlbWEudGFyZ2V0QXR0cmlidXRlRm9yU2NvcGUoaWRlbnRpZmllcik7XHJcbiAgICAgICAgICAgIHRoaXMuZ3VpZGUud2FybihlbGVtZW50LCBgdGFyZ2V0OiR7dGFyZ2V0TmFtZX1gLCBgUGxlYXNlIHJlcGxhY2UgJHthdHRyaWJ1dGVOYW1lfT1cIiR7aWRlbnRpZmllcn0uJHt0YXJnZXROYW1lfVwiIHdpdGggJHtyZXZpc2VkQXR0cmlidXRlTmFtZX09XCIke3RhcmdldE5hbWV9XCIuIGAgK1xyXG4gICAgICAgICAgICAgICAgYFRoZSAke2F0dHJpYnV0ZU5hbWV9IGF0dHJpYnV0ZSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbiBvZiBTdGltdWx1cy5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBnZXQgZ3VpZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZ3VpZGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE91dGxldFNldCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgY29udHJvbGxlckVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyRWxlbWVudCA9IGNvbnRyb2xsZXJFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgZ2V0IGVsZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZWxlbWVudDtcclxuICAgIH1cclxuICAgIGdldCBpZGVudGlmaWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmlkZW50aWZpZXI7XHJcbiAgICB9XHJcbiAgICBnZXQgc2NoZW1hKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLnNjaGVtYTtcclxuICAgIH1cclxuICAgIGhhcyhvdXRsZXROYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZChvdXRsZXROYW1lKSAhPSBudWxsO1xyXG4gICAgfVxyXG4gICAgZmluZCguLi5vdXRsZXROYW1lcykge1xyXG4gICAgICAgIHJldHVybiBvdXRsZXROYW1lcy5yZWR1Y2UoKG91dGxldCwgb3V0bGV0TmFtZSkgPT4gb3V0bGV0IHx8IHRoaXMuZmluZE91dGxldChvdXRsZXROYW1lKSwgdW5kZWZpbmVkKTtcclxuICAgIH1cclxuICAgIGZpbmRBbGwoLi4ub3V0bGV0TmFtZXMpIHtcclxuICAgICAgICByZXR1cm4gb3V0bGV0TmFtZXMucmVkdWNlKChvdXRsZXRzLCBvdXRsZXROYW1lKSA9PiBbLi4ub3V0bGV0cywgLi4udGhpcy5maW5kQWxsT3V0bGV0cyhvdXRsZXROYW1lKV0sIFtdKTtcclxuICAgIH1cclxuICAgIGdldFNlbGVjdG9yRm9yT3V0bGV0TmFtZShvdXRsZXROYW1lKSB7XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IHRoaXMuc2NoZW1hLm91dGxldEF0dHJpYnV0ZUZvclNjb3BlKHRoaXMuaWRlbnRpZmllciwgb3V0bGV0TmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbGxlckVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgfVxyXG4gICAgZmluZE91dGxldChvdXRsZXROYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLmdldFNlbGVjdG9yRm9yT3V0bGV0TmFtZShvdXRsZXROYW1lKTtcclxuICAgICAgICBpZiAoc2VsZWN0b3IpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmRFbGVtZW50KHNlbGVjdG9yLCBvdXRsZXROYW1lKTtcclxuICAgIH1cclxuICAgIGZpbmRBbGxPdXRsZXRzKG91dGxldE5hbWUpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMuZ2V0U2VsZWN0b3JGb3JPdXRsZXROYW1lKG91dGxldE5hbWUpO1xyXG4gICAgICAgIHJldHVybiBzZWxlY3RvciA/IHRoaXMuZmluZEFsbEVsZW1lbnRzKHNlbGVjdG9yLCBvdXRsZXROYW1lKSA6IFtdO1xyXG4gICAgfVxyXG4gICAgZmluZEVsZW1lbnQoc2VsZWN0b3IsIG91dGxldE5hbWUpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuc2NvcGUucXVlcnlFbGVtZW50cyhzZWxlY3Rvcik7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzLmZpbHRlcigoZWxlbWVudCkgPT4gdGhpcy5tYXRjaGVzRWxlbWVudChlbGVtZW50LCBzZWxlY3Rvciwgb3V0bGV0TmFtZSkpWzBdO1xyXG4gICAgfVxyXG4gICAgZmluZEFsbEVsZW1lbnRzKHNlbGVjdG9yLCBvdXRsZXROYW1lKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLnNjb3BlLnF1ZXJ5RWxlbWVudHMoc2VsZWN0b3IpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50cy5maWx0ZXIoKGVsZW1lbnQpID0+IHRoaXMubWF0Y2hlc0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3IsIG91dGxldE5hbWUpKTtcclxuICAgIH1cclxuICAgIG1hdGNoZXNFbGVtZW50KGVsZW1lbnQsIHNlbGVjdG9yLCBvdXRsZXROYW1lKSB7XHJcbiAgICAgICAgY29uc3QgY29udHJvbGxlckF0dHJpYnV0ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKHRoaXMuc2NvcGUuc2NoZW1hLmNvbnRyb2xsZXJBdHRyaWJ1dGUpIHx8IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikgJiYgY29udHJvbGxlckF0dHJpYnV0ZS5zcGxpdChcIiBcIikuaW5jbHVkZXMob3V0bGV0TmFtZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFNjb3BlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjaGVtYSwgZWxlbWVudCwgaWRlbnRpZmllciwgbG9nZ2VyKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRzID0gbmV3IFRhcmdldFNldCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNsYXNzZXMgPSBuZXcgQ2xhc3NNYXAodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IERhdGFNYXAodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluc0VsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KHRoaXMuY29udHJvbGxlclNlbGVjdG9yKSA9PT0gdGhpcy5lbGVtZW50O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xyXG4gICAgICAgIHRoaXMuZ3VpZGUgPSBuZXcgR3VpZGUobG9nZ2VyKTtcclxuICAgICAgICB0aGlzLm91dGxldHMgPSBuZXcgT3V0bGV0U2V0KHRoaXMuZG9jdW1lbnRTY29wZSwgZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBmaW5kRWxlbWVudChzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikgPyB0aGlzLmVsZW1lbnQgOiB0aGlzLnF1ZXJ5RWxlbWVudHMoc2VsZWN0b3IpLmZpbmQodGhpcy5jb250YWluc0VsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZmluZEFsbEVsZW1lbnRzKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgLi4uKHRoaXMuZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSA/IFt0aGlzLmVsZW1lbnRdIDogW10pLFxyXG4gICAgICAgICAgICAuLi50aGlzLnF1ZXJ5RWxlbWVudHMoc2VsZWN0b3IpLmZpbHRlcih0aGlzLmNvbnRhaW5zRWxlbWVudCksXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgIHF1ZXJ5RWxlbWVudHMoc2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvbnRyb2xsZXJTZWxlY3RvcigpIHtcclxuICAgICAgICByZXR1cm4gYXR0cmlidXRlVmFsdWVDb250YWluc1Rva2VuKHRoaXMuc2NoZW1hLmNvbnRyb2xsZXJBdHRyaWJ1dGUsIHRoaXMuaWRlbnRpZmllcik7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNEb2N1bWVudFNjb3BlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIH1cclxuICAgIGdldCBkb2N1bWVudFNjb3BlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzRG9jdW1lbnRTY29wZVxyXG4gICAgICAgICAgICA/IHRoaXNcclxuICAgICAgICAgICAgOiBuZXcgU2NvcGUodGhpcy5zY2hlbWEsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdGhpcy5pZGVudGlmaWVyLCB0aGlzLmd1aWRlLmxvZ2dlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFNjb3BlT2JzZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgc2NoZW1hLCBkZWxlZ2F0ZSkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XHJcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xyXG4gICAgICAgIHRoaXMudmFsdWVMaXN0T2JzZXJ2ZXIgPSBuZXcgVmFsdWVMaXN0T2JzZXJ2ZXIodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRyb2xsZXJBdHRyaWJ1dGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2NvcGVzQnlJZGVudGlmaWVyQnlFbGVtZW50ID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICB0aGlzLnNjb3BlUmVmZXJlbmNlQ291bnRzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMudmFsdWVMaXN0T2JzZXJ2ZXIuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZUxpc3RPYnNlcnZlci5zdG9wKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgY29udHJvbGxlckF0dHJpYnV0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEuY29udHJvbGxlckF0dHJpYnV0ZTtcclxuICAgIH1cclxuICAgIHBhcnNlVmFsdWVGb3JUb2tlbih0b2tlbikge1xyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgY29udGVudDogaWRlbnRpZmllciB9ID0gdG9rZW47XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VWYWx1ZUZvckVsZW1lbnRBbmRJZGVudGlmaWVyKGVsZW1lbnQsIGlkZW50aWZpZXIpO1xyXG4gICAgfVxyXG4gICAgcGFyc2VWYWx1ZUZvckVsZW1lbnRBbmRJZGVudGlmaWVyKGVsZW1lbnQsIGlkZW50aWZpZXIpIHtcclxuICAgICAgICBjb25zdCBzY29wZXNCeUlkZW50aWZpZXIgPSB0aGlzLmZldGNoU2NvcGVzQnlJZGVudGlmaWVyRm9yRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICBsZXQgc2NvcGUgPSBzY29wZXNCeUlkZW50aWZpZXIuZ2V0KGlkZW50aWZpZXIpO1xyXG4gICAgICAgIGlmICghc2NvcGUpIHtcclxuICAgICAgICAgICAgc2NvcGUgPSB0aGlzLmRlbGVnYXRlLmNyZWF0ZVNjb3BlRm9yRWxlbWVudEFuZElkZW50aWZpZXIoZWxlbWVudCwgaWRlbnRpZmllcik7XHJcbiAgICAgICAgICAgIHNjb3Blc0J5SWRlbnRpZmllci5zZXQoaWRlbnRpZmllciwgc2NvcGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2NvcGU7XHJcbiAgICB9XHJcbiAgICBlbGVtZW50TWF0Y2hlZFZhbHVlKGVsZW1lbnQsIHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlQ291bnQgPSAodGhpcy5zY29wZVJlZmVyZW5jZUNvdW50cy5nZXQodmFsdWUpIHx8IDApICsgMTtcclxuICAgICAgICB0aGlzLnNjb3BlUmVmZXJlbmNlQ291bnRzLnNldCh2YWx1ZSwgcmVmZXJlbmNlQ291bnQpO1xyXG4gICAgICAgIGlmIChyZWZlcmVuY2VDb3VudCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuc2NvcGVDb25uZWN0ZWQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsZW1lbnRVbm1hdGNoZWRWYWx1ZShlbGVtZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZUNvdW50ID0gdGhpcy5zY29wZVJlZmVyZW5jZUNvdW50cy5nZXQodmFsdWUpO1xyXG4gICAgICAgIGlmIChyZWZlcmVuY2VDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3BlUmVmZXJlbmNlQ291bnRzLnNldCh2YWx1ZSwgcmVmZXJlbmNlQ291bnQgLSAxKTtcclxuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZUNvdW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuc2NvcGVEaXNjb25uZWN0ZWQodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hTY29wZXNCeUlkZW50aWZpZXJGb3JFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgc2NvcGVzQnlJZGVudGlmaWVyID0gdGhpcy5zY29wZXNCeUlkZW50aWZpZXJCeUVsZW1lbnQuZ2V0KGVsZW1lbnQpO1xyXG4gICAgICAgIGlmICghc2NvcGVzQnlJZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIHNjb3Blc0J5SWRlbnRpZmllciA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgdGhpcy5zY29wZXNCeUlkZW50aWZpZXJCeUVsZW1lbnQuc2V0KGVsZW1lbnQsIHNjb3Blc0J5SWRlbnRpZmllcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzY29wZXNCeUlkZW50aWZpZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHBsaWNhdGlvbikge1xyXG4gICAgICAgIHRoaXMuYXBwbGljYXRpb24gPSBhcHBsaWNhdGlvbjtcclxuICAgICAgICB0aGlzLnNjb3BlT2JzZXJ2ZXIgPSBuZXcgU2NvcGVPYnNlcnZlcih0aGlzLmVsZW1lbnQsIHRoaXMuc2NoZW1hLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNjb3Blc0J5SWRlbnRpZmllciA9IG5ldyBNdWx0aW1hcCgpO1xyXG4gICAgICAgIHRoaXMubW9kdWxlc0J5SWRlbnRpZmllciA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuICAgIGdldCBlbGVtZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLmVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBnZXQgc2NoZW1hKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLnNjaGVtYTtcclxuICAgIH1cclxuICAgIGdldCBsb2dnZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24ubG9nZ2VyO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvbnRyb2xsZXJBdHRyaWJ1dGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnRyb2xsZXJBdHRyaWJ1dGU7XHJcbiAgICB9XHJcbiAgICBnZXQgbW9kdWxlcygpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLm1vZHVsZXNCeUlkZW50aWZpZXIudmFsdWVzKCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvbnRleHRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZXMucmVkdWNlKChjb250ZXh0cywgbW9kdWxlKSA9PiBjb250ZXh0cy5jb25jYXQobW9kdWxlLmNvbnRleHRzKSwgW10pO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zY29wZU9ic2VydmVyLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcGVPYnNlcnZlci5zdG9wKCk7XHJcbiAgICB9XHJcbiAgICBsb2FkRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XHJcbiAgICAgICAgdGhpcy51bmxvYWRJZGVudGlmaWVyKGRlZmluaXRpb24uaWRlbnRpZmllcik7XHJcbiAgICAgICAgY29uc3QgbW9kdWxlID0gbmV3IE1vZHVsZSh0aGlzLmFwcGxpY2F0aW9uLCBkZWZpbml0aW9uKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RNb2R1bGUobW9kdWxlKTtcclxuICAgICAgICBjb25zdCBhZnRlckxvYWQgPSBkZWZpbml0aW9uLmNvbnRyb2xsZXJDb25zdHJ1Y3Rvci5hZnRlckxvYWQ7XHJcbiAgICAgICAgaWYgKGFmdGVyTG9hZCkge1xyXG4gICAgICAgICAgICBhZnRlckxvYWQuY2FsbChkZWZpbml0aW9uLmNvbnRyb2xsZXJDb25zdHJ1Y3RvciwgZGVmaW5pdGlvbi5pZGVudGlmaWVyLCB0aGlzLmFwcGxpY2F0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1bmxvYWRJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcclxuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLm1vZHVsZXNCeUlkZW50aWZpZXIuZ2V0KGlkZW50aWZpZXIpO1xyXG4gICAgICAgIGlmIChtb2R1bGUpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0TW9kdWxlKG1vZHVsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0Q29udGV4dEZvckVsZW1lbnRBbmRJZGVudGlmaWVyKGVsZW1lbnQsIGlkZW50aWZpZXIpIHtcclxuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLm1vZHVsZXNCeUlkZW50aWZpZXIuZ2V0KGlkZW50aWZpZXIpO1xyXG4gICAgICAgIGlmIChtb2R1bGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZHVsZS5jb250ZXh0cy5maW5kKChjb250ZXh0KSA9PiBjb250ZXh0LmVsZW1lbnQgPT0gZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvcG9zZVRvQ29ubmVjdFNjb3BlRm9yRWxlbWVudEFuZElkZW50aWZpZXIoZWxlbWVudCwgaWRlbnRpZmllcikge1xyXG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcy5zY29wZU9ic2VydmVyLnBhcnNlVmFsdWVGb3JFbGVtZW50QW5kSWRlbnRpZmllcihlbGVtZW50LCBpZGVudGlmaWVyKTtcclxuICAgICAgICBpZiAoc2NvcGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29wZU9ic2VydmVyLmVsZW1lbnRNYXRjaGVkVmFsdWUoc2NvcGUuZWxlbWVudCwgc2NvcGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQ291bGRuJ3QgZmluZCBvciBjcmVhdGUgc2NvcGUgZm9yIGlkZW50aWZpZXI6IFwiJHtpZGVudGlmaWVyfVwiIGFuZCBlbGVtZW50OmAsIGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUVycm9yKGVycm9yLCBtZXNzYWdlLCBkZXRhaWwpIHtcclxuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLmhhbmRsZUVycm9yKGVycm9yLCBtZXNzYWdlLCBkZXRhaWwpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlU2NvcGVGb3JFbGVtZW50QW5kSWRlbnRpZmllcihlbGVtZW50LCBpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTY29wZSh0aGlzLnNjaGVtYSwgZWxlbWVudCwgaWRlbnRpZmllciwgdGhpcy5sb2dnZXIpO1xyXG4gICAgfVxyXG4gICAgc2NvcGVDb25uZWN0ZWQoc2NvcGUpIHtcclxuICAgICAgICB0aGlzLnNjb3Blc0J5SWRlbnRpZmllci5hZGQoc2NvcGUuaWRlbnRpZmllciwgc2NvcGUpO1xyXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMubW9kdWxlc0J5SWRlbnRpZmllci5nZXQoc2NvcGUuaWRlbnRpZmllcik7XHJcbiAgICAgICAgaWYgKG1vZHVsZSkge1xyXG4gICAgICAgICAgICBtb2R1bGUuY29ubmVjdENvbnRleHRGb3JTY29wZShzY29wZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2NvcGVEaXNjb25uZWN0ZWQoc2NvcGUpIHtcclxuICAgICAgICB0aGlzLnNjb3Blc0J5SWRlbnRpZmllci5kZWxldGUoc2NvcGUuaWRlbnRpZmllciwgc2NvcGUpO1xyXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMubW9kdWxlc0J5SWRlbnRpZmllci5nZXQoc2NvcGUuaWRlbnRpZmllcik7XHJcbiAgICAgICAgaWYgKG1vZHVsZSkge1xyXG4gICAgICAgICAgICBtb2R1bGUuZGlzY29ubmVjdENvbnRleHRGb3JTY29wZShzY29wZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29ubmVjdE1vZHVsZShtb2R1bGUpIHtcclxuICAgICAgICB0aGlzLm1vZHVsZXNCeUlkZW50aWZpZXIuc2V0KG1vZHVsZS5pZGVudGlmaWVyLCBtb2R1bGUpO1xyXG4gICAgICAgIGNvbnN0IHNjb3BlcyA9IHRoaXMuc2NvcGVzQnlJZGVudGlmaWVyLmdldFZhbHVlc0ZvcktleShtb2R1bGUuaWRlbnRpZmllcik7XHJcbiAgICAgICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiBtb2R1bGUuY29ubmVjdENvbnRleHRGb3JTY29wZShzY29wZSkpO1xyXG4gICAgfVxyXG4gICAgZGlzY29ubmVjdE1vZHVsZShtb2R1bGUpIHtcclxuICAgICAgICB0aGlzLm1vZHVsZXNCeUlkZW50aWZpZXIuZGVsZXRlKG1vZHVsZS5pZGVudGlmaWVyKTtcclxuICAgICAgICBjb25zdCBzY29wZXMgPSB0aGlzLnNjb3Blc0J5SWRlbnRpZmllci5nZXRWYWx1ZXNGb3JLZXkobW9kdWxlLmlkZW50aWZpZXIpO1xyXG4gICAgICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gbW9kdWxlLmRpc2Nvbm5lY3RDb250ZXh0Rm9yU2NvcGUoc2NvcGUpKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFNjaGVtYSA9IHtcclxuICAgIGNvbnRyb2xsZXJBdHRyaWJ1dGU6IFwiZGF0YS1jb250cm9sbGVyXCIsXHJcbiAgICBhY3Rpb25BdHRyaWJ1dGU6IFwiZGF0YS1hY3Rpb25cIixcclxuICAgIHRhcmdldEF0dHJpYnV0ZTogXCJkYXRhLXRhcmdldFwiLFxyXG4gICAgdGFyZ2V0QXR0cmlidXRlRm9yU2NvcGU6IChpZGVudGlmaWVyKSA9PiBgZGF0YS0ke2lkZW50aWZpZXJ9LXRhcmdldGAsXHJcbiAgICBvdXRsZXRBdHRyaWJ1dGVGb3JTY29wZTogKGlkZW50aWZpZXIsIG91dGxldCkgPT4gYGRhdGEtJHtpZGVudGlmaWVyfS0ke291dGxldH0tb3V0bGV0YCxcclxuICAgIGtleU1hcHBpbmdzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBlbnRlcjogXCJFbnRlclwiLCB0YWI6IFwiVGFiXCIsIGVzYzogXCJFc2NhcGVcIiwgc3BhY2U6IFwiIFwiLCB1cDogXCJBcnJvd1VwXCIsIGRvd246IFwiQXJyb3dEb3duXCIsIGxlZnQ6IFwiQXJyb3dMZWZ0XCIsIHJpZ2h0OiBcIkFycm93UmlnaHRcIiwgaG9tZTogXCJIb21lXCIsIGVuZDogXCJFbmRcIiwgcGFnZV91cDogXCJQYWdlVXBcIiwgcGFnZV9kb3duOiBcIlBhZ2VEb3duXCIgfSwgb2JqZWN0RnJvbUVudHJpZXMoXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiLnNwbGl0KFwiXCIpLm1hcCgoYykgPT4gW2MsIGNdKSkpLCBvYmplY3RGcm9tRW50cmllcyhcIjAxMjM0NTY3ODlcIi5zcGxpdChcIlwiKS5tYXAoKG4pID0+IFtuLCBuXSkpKSxcclxufTtcclxuZnVuY3Rpb24gb2JqZWN0RnJvbUVudHJpZXMoYXJyYXkpIHtcclxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKG1lbW8sIFtrLCB2XSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbWVtbyksIHsgW2tdOiB2IH0pKSwge30pO1xyXG59XHJcblxyXG5jbGFzcyBBcHBsaWNhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBzY2hlbWEgPSBkZWZhdWx0U2NoZW1hKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xyXG4gICAgICAgIHRoaXMuZGVidWcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvZ0RlYnVnQWN0aXZpdHkgPSAoaWRlbnRpZmllciwgZnVuY3Rpb25OYW1lLCBkZXRhaWwgPSB7fSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWJ1Zykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dGb3JtYXR0ZWRNZXNzYWdlKGlkZW50aWZpZXIsIGZ1bmN0aW9uTmFtZSwgZGV0YWlsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoZXIgPSBuZXcgRGlzcGF0Y2hlcih0aGlzKTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IG5ldyBSb3V0ZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25EZXNjcmlwdG9yRmlsdGVycyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRBY3Rpb25EZXNjcmlwdG9yRmlsdGVycyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc3RhcnQoZWxlbWVudCwgc2NoZW1hKSB7XHJcbiAgICAgICAgY29uc3QgYXBwbGljYXRpb24gPSBuZXcgdGhpcyhlbGVtZW50LCBzY2hlbWEpO1xyXG4gICAgICAgIGFwcGxpY2F0aW9uLnN0YXJ0KCk7XHJcbiAgICAgICAgcmV0dXJuIGFwcGxpY2F0aW9uO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3RhcnQoKSB7XHJcbiAgICAgICAgYXdhaXQgZG9tUmVhZHkoKTtcclxuICAgICAgICB0aGlzLmxvZ0RlYnVnQWN0aXZpdHkoXCJhcHBsaWNhdGlvblwiLCBcInN0YXJ0aW5nXCIpO1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5sb2dEZWJ1Z0FjdGl2aXR5KFwiYXBwbGljYXRpb25cIiwgXCJzdGFydFwiKTtcclxuICAgIH1cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dEZWJ1Z0FjdGl2aXR5KFwiYXBwbGljYXRpb25cIiwgXCJzdG9wcGluZ1wiKTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmxvZ0RlYnVnQWN0aXZpdHkoXCJhcHBsaWNhdGlvblwiLCBcInN0b3BcIik7XHJcbiAgICB9XHJcbiAgICByZWdpc3RlcihpZGVudGlmaWVyLCBjb250cm9sbGVyQ29uc3RydWN0b3IpIHtcclxuICAgICAgICB0aGlzLmxvYWQoeyBpZGVudGlmaWVyLCBjb250cm9sbGVyQ29uc3RydWN0b3IgfSk7XHJcbiAgICB9XHJcbiAgICByZWdpc3RlckFjdGlvbk9wdGlvbihuYW1lLCBmaWx0ZXIpIHtcclxuICAgICAgICB0aGlzLmFjdGlvbkRlc2NyaXB0b3JGaWx0ZXJzW25hbWVdID0gZmlsdGVyO1xyXG4gICAgfVxyXG4gICAgbG9hZChoZWFkLCAuLi5yZXN0KSB7XHJcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbnMgPSBBcnJheS5pc0FycmF5KGhlYWQpID8gaGVhZCA6IFtoZWFkLCAuLi5yZXN0XTtcclxuICAgICAgICBkZWZpbml0aW9ucy5mb3JFYWNoKChkZWZpbml0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uLmNvbnRyb2xsZXJDb25zdHJ1Y3Rvci5zaG91bGRMb2FkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5sb2FkRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdW5sb2FkKGhlYWQsIC4uLnJlc3QpIHtcclxuICAgICAgICBjb25zdCBpZGVudGlmaWVycyA9IEFycmF5LmlzQXJyYXkoaGVhZCkgPyBoZWFkIDogW2hlYWQsIC4uLnJlc3RdO1xyXG4gICAgICAgIGlkZW50aWZpZXJzLmZvckVhY2goKGlkZW50aWZpZXIpID0+IHRoaXMucm91dGVyLnVubG9hZElkZW50aWZpZXIoaWRlbnRpZmllcikpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvbnRyb2xsZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlci5jb250ZXh0cy5tYXAoKGNvbnRleHQpID0+IGNvbnRleHQuY29udHJvbGxlcik7XHJcbiAgICB9XHJcbiAgICBnZXRDb250cm9sbGVyRm9yRWxlbWVudEFuZElkZW50aWZpZXIoZWxlbWVudCwgaWRlbnRpZmllcikge1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLnJvdXRlci5nZXRDb250ZXh0Rm9yRWxlbWVudEFuZElkZW50aWZpZXIoZWxlbWVudCwgaWRlbnRpZmllcik7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQgPyBjb250ZXh0LmNvbnRyb2xsZXIgOiBudWxsO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlRXJyb3IoZXJyb3IsIG1lc3NhZ2UsIGRldGFpbCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihgJXNcXG5cXG4lb1xcblxcbiVvYCwgbWVzc2FnZSwgZXJyb3IsIGRldGFpbCk7XHJcbiAgICAgICAgKF9hID0gd2luZG93Lm9uZXJyb3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHdpbmRvdywgbWVzc2FnZSwgXCJcIiwgMCwgMCwgZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgbG9nRm9ybWF0dGVkTWVzc2FnZShpZGVudGlmaWVyLCBmdW5jdGlvbk5hbWUsIGRldGFpbCA9IHt9KSB7XHJcbiAgICAgICAgZGV0YWlsID0gT2JqZWN0LmFzc2lnbih7IGFwcGxpY2F0aW9uOiB0aGlzIH0sIGRldGFpbCk7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYCR7aWRlbnRpZmllcn0gIyR7ZnVuY3Rpb25OYW1lfWApO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhcImRldGFpbHM6XCIsIE9iamVjdC5hc3NpZ24oe30sIGRldGFpbCkpO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmdyb3VwRW5kKCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZG9tUmVhZHkoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PSBcImxvYWRpbmdcIikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiByZXNvbHZlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDbGFzc1Byb3BlcnRpZXNCbGVzc2luZyhjb25zdHJ1Y3Rvcikge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHJlYWRJbmhlcml0YWJsZVN0YXRpY0FycmF5VmFsdWVzKGNvbnN0cnVjdG9yLCBcImNsYXNzZXNcIik7XHJcbiAgICByZXR1cm4gY2xhc3Nlcy5yZWR1Y2UoKHByb3BlcnRpZXMsIGNsYXNzRGVmaW5pdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHByb3BlcnRpZXNGb3JDbGFzc0RlZmluaXRpb24oY2xhc3NEZWZpbml0aW9uKSk7XHJcbiAgICB9LCB7fSk7XHJcbn1cclxuZnVuY3Rpb24gcHJvcGVydGllc0ZvckNsYXNzRGVmaW5pdGlvbihrZXkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgW2Ake2tleX1DbGFzc2BdOiB7XHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGlmIChjbGFzc2VzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzZXMuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBjbGFzc2VzLmdldEF0dHJpYnV0ZU5hbWUoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgYXR0cmlidXRlIFwiJHthdHRyaWJ1dGV9XCJgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtgJHtrZXl9Q2xhc3Nlc2BdOiB7XHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNsYXNzZXMuZ2V0QWxsKGtleSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbYGhhcyR7Y2FwaXRhbGl6ZShrZXkpfUNsYXNzYF06IHtcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3Nlcy5oYXMoa2V5KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gT3V0bGV0UHJvcGVydGllc0JsZXNzaW5nKGNvbnN0cnVjdG9yKSB7XHJcbiAgICBjb25zdCBvdXRsZXRzID0gcmVhZEluaGVyaXRhYmxlU3RhdGljQXJyYXlWYWx1ZXMoY29uc3RydWN0b3IsIFwib3V0bGV0c1wiKTtcclxuICAgIHJldHVybiBvdXRsZXRzLnJlZHVjZSgocHJvcGVydGllcywgb3V0bGV0RGVmaW5pdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHByb3BlcnRpZXNGb3JPdXRsZXREZWZpbml0aW9uKG91dGxldERlZmluaXRpb24pKTtcclxuICAgIH0sIHt9KTtcclxufVxyXG5mdW5jdGlvbiBnZXRPdXRsZXRDb250cm9sbGVyKGNvbnRyb2xsZXIsIGVsZW1lbnQsIGlkZW50aWZpZXIpIHtcclxuICAgIHJldHVybiBjb250cm9sbGVyLmFwcGxpY2F0aW9uLmdldENvbnRyb2xsZXJGb3JFbGVtZW50QW5kSWRlbnRpZmllcihlbGVtZW50LCBpZGVudGlmaWVyKTtcclxufVxyXG5mdW5jdGlvbiBnZXRDb250cm9sbGVyQW5kRW5zdXJlQ29ubmVjdGVkU2NvcGUoY29udHJvbGxlciwgZWxlbWVudCwgb3V0bGV0TmFtZSkge1xyXG4gICAgbGV0IG91dGxldENvbnRyb2xsZXIgPSBnZXRPdXRsZXRDb250cm9sbGVyKGNvbnRyb2xsZXIsIGVsZW1lbnQsIG91dGxldE5hbWUpO1xyXG4gICAgaWYgKG91dGxldENvbnRyb2xsZXIpXHJcbiAgICAgICAgcmV0dXJuIG91dGxldENvbnRyb2xsZXI7XHJcbiAgICBjb250cm9sbGVyLmFwcGxpY2F0aW9uLnJvdXRlci5wcm9wb3NlVG9Db25uZWN0U2NvcGVGb3JFbGVtZW50QW5kSWRlbnRpZmllcihlbGVtZW50LCBvdXRsZXROYW1lKTtcclxuICAgIG91dGxldENvbnRyb2xsZXIgPSBnZXRPdXRsZXRDb250cm9sbGVyKGNvbnRyb2xsZXIsIGVsZW1lbnQsIG91dGxldE5hbWUpO1xyXG4gICAgaWYgKG91dGxldENvbnRyb2xsZXIpXHJcbiAgICAgICAgcmV0dXJuIG91dGxldENvbnRyb2xsZXI7XHJcbn1cclxuZnVuY3Rpb24gcHJvcGVydGllc0Zvck91dGxldERlZmluaXRpb24obmFtZSkge1xyXG4gICAgY29uc3QgY2FtZWxpemVkTmFtZSA9IG5hbWVzcGFjZUNhbWVsaXplKG5hbWUpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBbYCR7Y2FtZWxpemVkTmFtZX1PdXRsZXRgXToge1xyXG4gICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRsZXRFbGVtZW50ID0gdGhpcy5vdXRsZXRzLmZpbmQobmFtZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMub3V0bGV0cy5nZXRTZWxlY3RvckZvck91dGxldE5hbWUobmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAob3V0bGV0RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dGxldENvbnRyb2xsZXIgPSBnZXRDb250cm9sbGVyQW5kRW5zdXJlQ29ubmVjdGVkU2NvcGUodGhpcywgb3V0bGV0RWxlbWVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG91dGxldENvbnRyb2xsZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvdXRsZXRDb250cm9sbGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHByb3ZpZGVkIG91dGxldCBlbGVtZW50IGlzIG1pc3NpbmcgYW4gb3V0bGV0IGNvbnRyb2xsZXIgXCIke25hbWV9XCIgaW5zdGFuY2UgZm9yIGhvc3QgY29udHJvbGxlciBcIiR7dGhpcy5pZGVudGlmaWVyfVwiYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3Npbmcgb3V0bGV0IGVsZW1lbnQgXCIke25hbWV9XCIgZm9yIGhvc3QgY29udHJvbGxlciBcIiR7dGhpcy5pZGVudGlmaWVyfVwiLiBTdGltdWx1cyBjb3VsZG4ndCBmaW5kIGEgbWF0Y2hpbmcgb3V0bGV0IGVsZW1lbnQgdXNpbmcgc2VsZWN0b3IgXCIke3NlbGVjdG9yfVwiLmApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW2Ake2NhbWVsaXplZE5hbWV9T3V0bGV0c2BdOiB7XHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG91dGxldHMgPSB0aGlzLm91dGxldHMuZmluZEFsbChuYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChvdXRsZXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3V0bGV0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChvdXRsZXRFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dGxldENvbnRyb2xsZXIgPSBnZXRDb250cm9sbGVyQW5kRW5zdXJlQ29ubmVjdGVkU2NvcGUodGhpcywgb3V0bGV0RWxlbWVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRsZXRDb250cm9sbGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dGxldENvbnRyb2xsZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlIHByb3ZpZGVkIG91dGxldCBlbGVtZW50IGlzIG1pc3NpbmcgYW4gb3V0bGV0IGNvbnRyb2xsZXIgXCIke25hbWV9XCIgaW5zdGFuY2UgZm9yIGhvc3QgY29udHJvbGxlciBcIiR7dGhpcy5pZGVudGlmaWVyfVwiYCwgb3V0bGV0RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoY29udHJvbGxlcikgPT4gY29udHJvbGxlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbYCR7Y2FtZWxpemVkTmFtZX1PdXRsZXRFbGVtZW50YF06IHtcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0bGV0RWxlbWVudCA9IHRoaXMub3V0bGV0cy5maW5kKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLm91dGxldHMuZ2V0U2VsZWN0b3JGb3JPdXRsZXROYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG91dGxldEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3V0bGV0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBvdXRsZXQgZWxlbWVudCBcIiR7bmFtZX1cIiBmb3IgaG9zdCBjb250cm9sbGVyIFwiJHt0aGlzLmlkZW50aWZpZXJ9XCIuIFN0aW11bHVzIGNvdWxkbid0IGZpbmQgYSBtYXRjaGluZyBvdXRsZXQgZWxlbWVudCB1c2luZyBzZWxlY3RvciBcIiR7c2VsZWN0b3J9XCIuYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbYCR7Y2FtZWxpemVkTmFtZX1PdXRsZXRFbGVtZW50c2BdOiB7XHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm91dGxldHMuZmluZEFsbChuYW1lKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtgaGFzJHtjYXBpdGFsaXplKGNhbWVsaXplZE5hbWUpfU91dGxldGBdOiB7XHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm91dGxldHMuaGFzKG5hbWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBUYXJnZXRQcm9wZXJ0aWVzQmxlc3NpbmcoY29uc3RydWN0b3IpIHtcclxuICAgIGNvbnN0IHRhcmdldHMgPSByZWFkSW5oZXJpdGFibGVTdGF0aWNBcnJheVZhbHVlcyhjb25zdHJ1Y3RvciwgXCJ0YXJnZXRzXCIpO1xyXG4gICAgcmV0dXJuIHRhcmdldHMucmVkdWNlKChwcm9wZXJ0aWVzLCB0YXJnZXREZWZpbml0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywgcHJvcGVydGllc0ZvclRhcmdldERlZmluaXRpb24odGFyZ2V0RGVmaW5pdGlvbikpO1xyXG4gICAgfSwge30pO1xyXG59XHJcbmZ1bmN0aW9uIHByb3BlcnRpZXNGb3JUYXJnZXREZWZpbml0aW9uKG5hbWUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgW2Ake25hbWV9VGFyZ2V0YF06IHtcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy50YXJnZXRzLmZpbmQobmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyB0YXJnZXQgZWxlbWVudCBcIiR7bmFtZX1cIiBmb3IgXCIke3RoaXMuaWRlbnRpZmllcn1cIiBjb250cm9sbGVyYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbYCR7bmFtZX1UYXJnZXRzYF06IHtcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5maW5kQWxsKG5hbWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW2BoYXMke2NhcGl0YWxpemUobmFtZSl9VGFyZ2V0YF06IHtcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5oYXMobmFtZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFZhbHVlUHJvcGVydGllc0JsZXNzaW5nKGNvbnN0cnVjdG9yKSB7XHJcbiAgICBjb25zdCB2YWx1ZURlZmluaXRpb25QYWlycyA9IHJlYWRJbmhlcml0YWJsZVN0YXRpY09iamVjdFBhaXJzKGNvbnN0cnVjdG9yLCBcInZhbHVlc1wiKTtcclxuICAgIGNvbnN0IHByb3BlcnR5RGVzY3JpcHRvck1hcCA9IHtcclxuICAgICAgICB2YWx1ZURlc2NyaXB0b3JNYXA6IHtcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlRGVmaW5pdGlvblBhaXJzLnJlZHVjZSgocmVzdWx0LCB2YWx1ZURlZmluaXRpb25QYWlyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVEZXNjcmlwdG9yID0gcGFyc2VWYWx1ZURlZmluaXRpb25QYWlyKHZhbHVlRGVmaW5pdGlvblBhaXIsIHRoaXMuaWRlbnRpZmllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IHRoaXMuZGF0YS5nZXRBdHRyaWJ1dGVOYW1lRm9yS2V5KHZhbHVlRGVzY3JpcHRvci5rZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHJlc3VsdCwgeyBbYXR0cmlidXRlTmFtZV06IHZhbHVlRGVzY3JpcHRvciB9KTtcclxuICAgICAgICAgICAgICAgIH0sIHt9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIHJldHVybiB2YWx1ZURlZmluaXRpb25QYWlycy5yZWR1Y2UoKHByb3BlcnRpZXMsIHZhbHVlRGVmaW5pdGlvblBhaXIpID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCBwcm9wZXJ0aWVzRm9yVmFsdWVEZWZpbml0aW9uUGFpcih2YWx1ZURlZmluaXRpb25QYWlyKSk7XHJcbiAgICB9LCBwcm9wZXJ0eURlc2NyaXB0b3JNYXApO1xyXG59XHJcbmZ1bmN0aW9uIHByb3BlcnRpZXNGb3JWYWx1ZURlZmluaXRpb25QYWlyKHZhbHVlRGVmaW5pdGlvblBhaXIsIGNvbnRyb2xsZXIpIHtcclxuICAgIGNvbnN0IGRlZmluaXRpb24gPSBwYXJzZVZhbHVlRGVmaW5pdGlvblBhaXIodmFsdWVEZWZpbml0aW9uUGFpciwgY29udHJvbGxlcik7XHJcbiAgICBjb25zdCB7IGtleSwgbmFtZSwgcmVhZGVyOiByZWFkLCB3cml0ZXI6IHdyaXRlIH0gPSBkZWZpbml0aW9uO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBbbmFtZV06IHtcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVhZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbi5kZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc2V0KGtleSwgd3JpdGUodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtgaGFzJHtjYXBpdGFsaXplKG5hbWUpfWBdOiB7XHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuaGFzKGtleSkgfHwgZGVmaW5pdGlvbi5oYXNDdXN0b21EZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gcGFyc2VWYWx1ZURlZmluaXRpb25QYWlyKFt0b2tlbiwgdHlwZURlZmluaXRpb25dLCBjb250cm9sbGVyKSB7XHJcbiAgICByZXR1cm4gdmFsdWVEZXNjcmlwdG9yRm9yVG9rZW5BbmRUeXBlRGVmaW5pdGlvbih7XHJcbiAgICAgICAgY29udHJvbGxlcixcclxuICAgICAgICB0b2tlbixcclxuICAgICAgICB0eXBlRGVmaW5pdGlvbixcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHBhcnNlVmFsdWVUeXBlQ29uc3RhbnQoY29uc3RhbnQpIHtcclxuICAgIHN3aXRjaCAoY29uc3RhbnQpIHtcclxuICAgICAgICBjYXNlIEFycmF5OlxyXG4gICAgICAgICAgICByZXR1cm4gXCJhcnJheVwiO1xyXG4gICAgICAgIGNhc2UgQm9vbGVhbjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiYm9vbGVhblwiO1xyXG4gICAgICAgIGNhc2UgTnVtYmVyOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJudW1iZXJcIjtcclxuICAgICAgICBjYXNlIE9iamVjdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0XCI7XHJcbiAgICAgICAgY2FzZSBTdHJpbmc6XHJcbiAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHBhcnNlVmFsdWVUeXBlRGVmYXVsdChkZWZhdWx0VmFsdWUpIHtcclxuICAgIHN3aXRjaCAodHlwZW9mIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgIGNhc2UgXCJib29sZWFuXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcImJvb2xlYW5cIjtcclxuICAgICAgICBjYXNlIFwibnVtYmVyXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIm51bWJlclwiO1xyXG4gICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCI7XHJcbiAgICB9XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkZWZhdWx0VmFsdWUpKVxyXG4gICAgICAgIHJldHVybiBcImFycmF5XCI7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRlZmF1bHRWYWx1ZSkgPT09IFwiW29iamVjdCBPYmplY3RdXCIpXHJcbiAgICAgICAgcmV0dXJuIFwib2JqZWN0XCI7XHJcbn1cclxuZnVuY3Rpb24gcGFyc2VWYWx1ZVR5cGVPYmplY3QocGF5bG9hZCkge1xyXG4gICAgY29uc3QgeyBjb250cm9sbGVyLCB0b2tlbiwgdHlwZU9iamVjdCB9ID0gcGF5bG9hZDtcclxuICAgIGNvbnN0IGhhc1R5cGUgPSBpc1NvbWV0aGluZyh0eXBlT2JqZWN0LnR5cGUpO1xyXG4gICAgY29uc3QgaGFzRGVmYXVsdCA9IGlzU29tZXRoaW5nKHR5cGVPYmplY3QuZGVmYXVsdCk7XHJcbiAgICBjb25zdCBmdWxsT2JqZWN0ID0gaGFzVHlwZSAmJiBoYXNEZWZhdWx0O1xyXG4gICAgY29uc3Qgb25seVR5cGUgPSBoYXNUeXBlICYmICFoYXNEZWZhdWx0O1xyXG4gICAgY29uc3Qgb25seURlZmF1bHQgPSAhaGFzVHlwZSAmJiBoYXNEZWZhdWx0O1xyXG4gICAgY29uc3QgdHlwZUZyb21PYmplY3QgPSBwYXJzZVZhbHVlVHlwZUNvbnN0YW50KHR5cGVPYmplY3QudHlwZSk7XHJcbiAgICBjb25zdCB0eXBlRnJvbURlZmF1bHRWYWx1ZSA9IHBhcnNlVmFsdWVUeXBlRGVmYXVsdChwYXlsb2FkLnR5cGVPYmplY3QuZGVmYXVsdCk7XHJcbiAgICBpZiAob25seVR5cGUpXHJcbiAgICAgICAgcmV0dXJuIHR5cGVGcm9tT2JqZWN0O1xyXG4gICAgaWYgKG9ubHlEZWZhdWx0KVxyXG4gICAgICAgIHJldHVybiB0eXBlRnJvbURlZmF1bHRWYWx1ZTtcclxuICAgIGlmICh0eXBlRnJvbU9iamVjdCAhPT0gdHlwZUZyb21EZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0eVBhdGggPSBjb250cm9sbGVyID8gYCR7Y29udHJvbGxlcn0uJHt0b2tlbn1gIDogdG9rZW47XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgc3BlY2lmaWVkIGRlZmF1bHQgdmFsdWUgZm9yIHRoZSBTdGltdWx1cyBWYWx1ZSBcIiR7cHJvcGVydHlQYXRofVwiIG11c3QgbWF0Y2ggdGhlIGRlZmluZWQgdHlwZSBcIiR7dHlwZUZyb21PYmplY3R9XCIuIFRoZSBwcm92aWRlZCBkZWZhdWx0IHZhbHVlIG9mIFwiJHt0eXBlT2JqZWN0LmRlZmF1bHR9XCIgaXMgb2YgdHlwZSBcIiR7dHlwZUZyb21EZWZhdWx0VmFsdWV9XCIuYCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZnVsbE9iamVjdClcclxuICAgICAgICByZXR1cm4gdHlwZUZyb21PYmplY3Q7XHJcbn1cclxuZnVuY3Rpb24gcGFyc2VWYWx1ZVR5cGVEZWZpbml0aW9uKHBheWxvYWQpIHtcclxuICAgIGNvbnN0IHsgY29udHJvbGxlciwgdG9rZW4sIHR5cGVEZWZpbml0aW9uIH0gPSBwYXlsb2FkO1xyXG4gICAgY29uc3QgdHlwZU9iamVjdCA9IHsgY29udHJvbGxlciwgdG9rZW4sIHR5cGVPYmplY3Q6IHR5cGVEZWZpbml0aW9uIH07XHJcbiAgICBjb25zdCB0eXBlRnJvbU9iamVjdCA9IHBhcnNlVmFsdWVUeXBlT2JqZWN0KHR5cGVPYmplY3QpO1xyXG4gICAgY29uc3QgdHlwZUZyb21EZWZhdWx0VmFsdWUgPSBwYXJzZVZhbHVlVHlwZURlZmF1bHQodHlwZURlZmluaXRpb24pO1xyXG4gICAgY29uc3QgdHlwZUZyb21Db25zdGFudCA9IHBhcnNlVmFsdWVUeXBlQ29uc3RhbnQodHlwZURlZmluaXRpb24pO1xyXG4gICAgY29uc3QgdHlwZSA9IHR5cGVGcm9tT2JqZWN0IHx8IHR5cGVGcm9tRGVmYXVsdFZhbHVlIHx8IHR5cGVGcm9tQ29uc3RhbnQ7XHJcbiAgICBpZiAodHlwZSlcclxuICAgICAgICByZXR1cm4gdHlwZTtcclxuICAgIGNvbnN0IHByb3BlcnR5UGF0aCA9IGNvbnRyb2xsZXIgPyBgJHtjb250cm9sbGVyfS4ke3R5cGVEZWZpbml0aW9ufWAgOiB0b2tlbjtcclxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB2YWx1ZSB0eXBlIFwiJHtwcm9wZXJ0eVBhdGh9XCIgZm9yIFwiJHt0b2tlbn1cIiB2YWx1ZWApO1xyXG59XHJcbmZ1bmN0aW9uIGRlZmF1bHRWYWx1ZUZvckRlZmluaXRpb24odHlwZURlZmluaXRpb24pIHtcclxuICAgIGNvbnN0IGNvbnN0YW50ID0gcGFyc2VWYWx1ZVR5cGVDb25zdGFudCh0eXBlRGVmaW5pdGlvbik7XHJcbiAgICBpZiAoY29uc3RhbnQpXHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZXNCeVR5cGVbY29uc3RhbnRdO1xyXG4gICAgY29uc3QgaGFzRGVmYXVsdCA9IGhhc1Byb3BlcnR5KHR5cGVEZWZpbml0aW9uLCBcImRlZmF1bHRcIik7XHJcbiAgICBjb25zdCBoYXNUeXBlID0gaGFzUHJvcGVydHkodHlwZURlZmluaXRpb24sIFwidHlwZVwiKTtcclxuICAgIGNvbnN0IHR5cGVPYmplY3QgPSB0eXBlRGVmaW5pdGlvbjtcclxuICAgIGlmIChoYXNEZWZhdWx0KVxyXG4gICAgICAgIHJldHVybiB0eXBlT2JqZWN0LmRlZmF1bHQ7XHJcbiAgICBpZiAoaGFzVHlwZSkge1xyXG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gdHlwZU9iamVjdDtcclxuICAgICAgICBjb25zdCBjb25zdGFudEZyb21UeXBlID0gcGFyc2VWYWx1ZVR5cGVDb25zdGFudCh0eXBlKTtcclxuICAgICAgICBpZiAoY29uc3RhbnRGcm9tVHlwZSlcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZXNCeVR5cGVbY29uc3RhbnRGcm9tVHlwZV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHlwZURlZmluaXRpb247XHJcbn1cclxuZnVuY3Rpb24gdmFsdWVEZXNjcmlwdG9yRm9yVG9rZW5BbmRUeXBlRGVmaW5pdGlvbihwYXlsb2FkKSB7XHJcbiAgICBjb25zdCB7IHRva2VuLCB0eXBlRGVmaW5pdGlvbiB9ID0gcGF5bG9hZDtcclxuICAgIGNvbnN0IGtleSA9IGAke2Rhc2hlcml6ZSh0b2tlbil9LXZhbHVlYDtcclxuICAgIGNvbnN0IHR5cGUgPSBwYXJzZVZhbHVlVHlwZURlZmluaXRpb24ocGF5bG9hZCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIG5hbWU6IGNhbWVsaXplKGtleSksXHJcbiAgICAgICAgZ2V0IGRlZmF1bHRWYWx1ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZUZvckRlZmluaXRpb24odHlwZURlZmluaXRpb24pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0IGhhc0N1c3RvbURlZmF1bHRWYWx1ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlVmFsdWVUeXBlRGVmYXVsdCh0eXBlRGVmaW5pdGlvbikgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlYWRlcjogcmVhZGVyc1t0eXBlXSxcclxuICAgICAgICB3cml0ZXI6IHdyaXRlcnNbdHlwZV0gfHwgd3JpdGVycy5kZWZhdWx0LFxyXG4gICAgfTtcclxufVxyXG5jb25zdCBkZWZhdWx0VmFsdWVzQnlUeXBlID0ge1xyXG4gICAgZ2V0IGFycmF5KCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH0sXHJcbiAgICBib29sZWFuOiBmYWxzZSxcclxuICAgIG51bWJlcjogMCxcclxuICAgIGdldCBvYmplY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfSxcclxuICAgIHN0cmluZzogXCJcIixcclxufTtcclxuY29uc3QgcmVhZGVycyA9IHtcclxuICAgIGFycmF5KHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBKU09OLnBhcnNlKHZhbHVlKTtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYGV4cGVjdGVkIHZhbHVlIG9mIHR5cGUgXCJhcnJheVwiIGJ1dCBpbnN0ZWFkIGdvdCB2YWx1ZSBcIiR7dmFsdWV9XCIgb2YgdHlwZSBcIiR7cGFyc2VWYWx1ZVR5cGVEZWZhdWx0KGFycmF5KX1cImApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9LFxyXG4gICAgYm9vbGVhbih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAhKHZhbHVlID09IFwiMFwiIHx8IFN0cmluZyh2YWx1ZSkudG9Mb3dlckNhc2UoKSA9PSBcImZhbHNlXCIpO1xyXG4gICAgfSxcclxuICAgIG51bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBOdW1iZXIodmFsdWUucmVwbGFjZSgvXy9nLCBcIlwiKSk7XHJcbiAgICB9LFxyXG4gICAgb2JqZWN0KHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gSlNPTi5wYXJzZSh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKG9iamVjdCA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqZWN0ICE9IFwib2JqZWN0XCIgfHwgQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYGV4cGVjdGVkIHZhbHVlIG9mIHR5cGUgXCJvYmplY3RcIiBidXQgaW5zdGVhZCBnb3QgdmFsdWUgXCIke3ZhbHVlfVwiIG9mIHR5cGUgXCIke3BhcnNlVmFsdWVUeXBlRGVmYXVsdChvYmplY3QpfVwiYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICB9LFxyXG4gICAgc3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfSxcclxufTtcclxuY29uc3Qgd3JpdGVycyA9IHtcclxuICAgIGRlZmF1bHQ6IHdyaXRlU3RyaW5nLFxyXG4gICAgYXJyYXk6IHdyaXRlSlNPTixcclxuICAgIG9iamVjdDogd3JpdGVKU09OLFxyXG59O1xyXG5mdW5jdGlvbiB3cml0ZUpTT04odmFsdWUpIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbn1cclxuZnVuY3Rpb24gd3JpdGVTdHJpbmcodmFsdWUpIHtcclxuICAgIHJldHVybiBgJHt2YWx1ZX1gO1xyXG59XHJcblxyXG5jbGFzcyBDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldCBzaG91bGRMb2FkKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFmdGVyTG9hZChfaWRlbnRpZmllciwgX2FwcGxpY2F0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZ2V0IGFwcGxpY2F0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuYXBwbGljYXRpb247XHJcbiAgICB9XHJcbiAgICBnZXQgc2NvcGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5zY29wZTtcclxuICAgIH1cclxuICAgIGdldCBlbGVtZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBnZXQgaWRlbnRpZmllcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5pZGVudGlmaWVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IHRhcmdldHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUudGFyZ2V0cztcclxuICAgIH1cclxuICAgIGdldCBvdXRsZXRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLm91dGxldHM7XHJcbiAgICB9XHJcbiAgICBnZXQgY2xhc3NlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5jbGFzc2VzO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZGF0YTtcclxuICAgIH1cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgfVxyXG4gICAgZGlzY29ubmVjdCgpIHtcclxuICAgIH1cclxuICAgIGRpc3BhdGNoKGV2ZW50TmFtZSwgeyB0YXJnZXQgPSB0aGlzLmVsZW1lbnQsIGRldGFpbCA9IHt9LCBwcmVmaXggPSB0aGlzLmlkZW50aWZpZXIsIGJ1YmJsZXMgPSB0cnVlLCBjYW5jZWxhYmxlID0gdHJ1ZSwgfSA9IHt9KSB7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHByZWZpeCA/IGAke3ByZWZpeH06JHtldmVudE5hbWV9YCA6IGV2ZW50TmFtZTtcclxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCh0eXBlLCB7IGRldGFpbCwgYnViYmxlcywgY2FuY2VsYWJsZSB9KTtcclxuICAgICAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xyXG4gICAgfVxyXG59XHJcbkNvbnRyb2xsZXIuYmxlc3NpbmdzID0gW1xyXG4gICAgQ2xhc3NQcm9wZXJ0aWVzQmxlc3NpbmcsXHJcbiAgICBUYXJnZXRQcm9wZXJ0aWVzQmxlc3NpbmcsXHJcbiAgICBWYWx1ZVByb3BlcnRpZXNCbGVzc2luZyxcclxuICAgIE91dGxldFByb3BlcnRpZXNCbGVzc2luZyxcclxuXTtcclxuQ29udHJvbGxlci50YXJnZXRzID0gW107XHJcbkNvbnRyb2xsZXIub3V0bGV0cyA9IFtdO1xyXG5Db250cm9sbGVyLnZhbHVlcyA9IHt9O1xyXG5cclxuZXhwb3J0IHsgQXBwbGljYXRpb24sIEF0dHJpYnV0ZU9ic2VydmVyLCBDb250ZXh0LCBDb250cm9sbGVyLCBFbGVtZW50T2JzZXJ2ZXIsIEluZGV4ZWRNdWx0aW1hcCwgTXVsdGltYXAsIFNlbGVjdG9yT2JzZXJ2ZXIsIFN0cmluZ01hcE9ic2VydmVyLCBUb2tlbkxpc3RPYnNlcnZlciwgVmFsdWVMaXN0T2JzZXJ2ZXIsIGFkZCwgZGVmYXVsdFNjaGVtYSwgZGVsLCBmZXRjaCwgcHJ1bmUgfTtcclxuIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJuYW1lQ2hlY2siLCJ0b2tlbkNoZWNrIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJfdGhpcyIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImdlbmVyYXRlQ3NyZlRva2VuIiwidGFyZ2V0IiwiaGVhZGVycyIsImdlbmVyYXRlQ3NyZkhlYWRlcnMiLCJkZXRhaWwiLCJmb3JtU3VibWlzc2lvbiIsImZvcm1FbGVtZW50IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJmZXRjaFJlcXVlc3QiLCJyZW1vdmVDc3JmVG9rZW4iLCJjc3JmRmllbGQiLCJxdWVyeVNlbGVjdG9yIiwiY3NyZkNvb2tpZSIsImdldEF0dHJpYnV0ZSIsImNzcmZUb2tlbiIsInRlc3QiLCJzZXRBdHRyaWJ1dGUiLCJkZWZhdWx0VmFsdWUiLCJidG9hIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYXBwbHkiLCJ3aW5kb3ciLCJjcnlwdG8iLCJtc0NyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQ4QXJyYXkiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY29va2llIiwiY29uY2F0IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9