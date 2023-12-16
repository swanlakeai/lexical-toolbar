'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var client = require('react-dom/client');
var link = require('@lexical/link');
var list = require('@lexical/list');
var LexicalComposer = require('@lexical/react/LexicalComposer');
var richText = require('@lexical/rich-text');
var lexical = require('lexical');
var LexicalHistoryPlugin = require('@lexical/react/LexicalHistoryPlugin');
var LexicalAutoFocusPlugin = require('@lexical/react/LexicalAutoFocusPlugin');
var LexicalCheckListPlugin = require('@lexical/react/LexicalCheckListPlugin');
var LexicalClearEditorPlugin = require('@lexical/react/LexicalClearEditorPlugin');
var LexicalHashtagPlugin = require('@lexical/react/LexicalHashtagPlugin');
var LexicalLinkPlugin = require('@lexical/react/LexicalLinkPlugin');
var LexicalListPlugin = require('@lexical/react/LexicalListPlugin');
var LexicalTablePlugin = require('@lexical/react/LexicalTablePlugin');
var code = require('@lexical/code');
var LexicalComposerContext = require('@lexical/react/LexicalComposerContext');
var reactDom = require('react-dom');
var selection = require('@lexical/selection');
var utils = require('@lexical/utils');
var LexicalAutoLinkPlugin$1 = require('@lexical/react/LexicalAutoLinkPlugin');
require('katex/dist/katex.css');
var katex = _interopDefault(require('katex'));
var useLexicalNodeSelection = require('@lexical/react/useLexicalNodeSelection');
var excalidraw = require('@excalidraw/excalidraw');
var LexicalHorizontalRuleNode = require('@lexical/react/LexicalHorizontalRuleNode');
var LexicalNestedComposer = require('@lexical/react/LexicalNestedComposer');
var useLexicalTextEntity = require('@lexical/react/useLexicalTextEntity');
var table = require('@lexical/table');
var LexicalDecoratorBlockNode = require('@lexical/react/LexicalDecoratorBlockNode');
var LexicalBlockWithAlignableContents = require('@lexical/react/LexicalBlockWithAlignableContents');
var hashtag = require('@lexical/hashtag');
var mark = require('@lexical/mark');
var overflow = require('@lexical/overflow');

var hostName = window.location.hostname;
var isDevPlayground = hostName !== 'playground.lexical.dev' && hostName !== 'lexical-playground.vercel.app';
var DEFAULT_SETTINGS = {
  disableBeforeInput: false,
  emptyEditor: isDevPlayground,
  isAutocomplete: false,
  isCharLimit: false,
  isCharLimitUtf8: false,
  isCollab: false,
  isMaxLength: false,
  isRichText: true,
  measureTypingPerf: false,
  showNestedEditorTreeView: false,
  showTreeView: true
};

var urlSearchParams = /*#__PURE__*/new URLSearchParams(window.location.search);
for (var _i = 0, _Object$keys = /*#__PURE__*/Object.keys(DEFAULT_SETTINGS); _i < _Object$keys.length; _i++) {
  var param = _Object$keys[_i];
  if (urlSearchParams.has(param)) {
    try {
      var _urlSearchParams$get;
      var value = /*#__PURE__*/JSON.parse((_urlSearchParams$get = /*#__PURE__*/urlSearchParams.get(param)) != null ? _urlSearchParams$get : 'true');
      DEFAULT_SETTINGS[param] = /*#__PURE__*/Boolean(value);
    } catch (error) {
      console.warn("Unable to parse query parameter \"" + param + "\"");
    }
  }
}
if (DEFAULT_SETTINGS.disableBeforeInput) {
  delete window.InputEvent.prototype.getTargetRanges;
}

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Context = /*#__PURE__*/React.createContext({
  setOption: function setOption(name, value) {
    return;
  },
  settings: DEFAULT_SETTINGS
});
var SettingsContext = function SettingsContext(_ref) {
  var children = _ref.children;
  var _useState = React.useState(DEFAULT_SETTINGS),
    settings = _useState[0],
    setSettings = _useState[1];
  var setOption = React.useCallback(function (setting, value) {
    setSettings(function (options) {
      var _extends2;
      return _extends({}, options, (_extends2 = {}, _extends2[setting] = value, _extends2));
    });
    if (DEFAULT_SETTINGS[setting] === value) {
      setURLParam(setting, null);
    } else {
      setURLParam(setting, value);
    }
  }, []);
  var contextValue = React.useMemo(function () {
    return {
      setOption: setOption,
      settings: settings
    };
  }, [setOption, settings]);
  return React.createElement(Context.Provider, {
    value: contextValue
  }, children);
};
var useSettings = function useSettings() {
  return React.useContext(Context);
};
function setURLParam(param, value) {
  var url = new URL(window.location.href);
  var params = new URLSearchParams(url.search);
  if (value !== null) {
    if (params.has(param)) {
      params.set(param, String(value));
    } else {
      params.append(param, String(value));
    }
  } else {
    if (params.has(param)) {
      params["delete"](param);
    }
  }
  url.search = params.toString();
  window.history.pushState(null, '', url.toString());
}

var Context$1 = /*#__PURE__*/React.createContext({});
var SharedHistoryContext = function SharedHistoryContext(_ref) {
  var children = _ref.children;
  var historyContext = React.useMemo(function () {
    return {
      historyState: LexicalHistoryPlugin.createEmptyHistoryState()
    };
  }, []);
  return React.createElement(Context$1.Provider, {
    value: historyContext
  }, children);
};
var useSharedHistoryContext = function useSharedHistoryContext() {
  return React.useContext(Context$1);
};

function PortalImpl(_ref) {
  var onClose = _ref.onClose,
    children = _ref.children,
    title = _ref.title,
    closeOnClickOutside = _ref.closeOnClickOutside;
  var modalRef = React.useRef(null);
  React.useEffect(function () {
    if (modalRef.current !== null) {
      modalRef.current.focus();
    }
  }, []);
  React.useEffect(function () {
    var modalOverlayElement = null;
    var handler = function handler(event) {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    var clickOutsideHandler = function clickOutsideHandler(event) {
      var target = event.target;
      if (modalRef.current !== null && !modalRef.current.contains(target) && closeOnClickOutside) {
        onClose();
      }
    };
    if (modalRef.current !== null) {
      var _modalRef$current;
      modalOverlayElement = (_modalRef$current = modalRef.current) == null ? void 0 : _modalRef$current.parentElement;
      if (modalOverlayElement !== null) {
        var _modalOverlayElement;
        (_modalOverlayElement = modalOverlayElement) == null || _modalOverlayElement.addEventListener('click', clickOutsideHandler);
      }
    }
    window.addEventListener('keydown', handler);
    return function () {
      window.removeEventListener('keydown', handler);
      if (modalOverlayElement !== null) {
        var _modalOverlayElement2;
        (_modalOverlayElement2 = modalOverlayElement) == null || _modalOverlayElement2.removeEventListener('click', clickOutsideHandler);
      }
    };
  }, [closeOnClickOutside, onClose]);
  return React.createElement("div", {
    className: "Modal__overlay",
    role: "dialog"
  }, React.createElement("div", {
    className: "Modal__modal",
    tabIndex: -1,
    ref: modalRef
  }, React.createElement("h2", {
    className: "Modal__title"
  }, title), React.createElement("button", {
    className: "Modal__closeButton",
    "aria-label": "Close modal",
    type: "button",
    onClick: onClose
  }, "X"), React.createElement("div", {
    className: "Modal__content"
  }, children)));
}
function Modal(_ref2) {
  var onClose = _ref2.onClose,
    children = _ref2.children,
    title = _ref2.title,
    _ref2$closeOnClickOut = _ref2.closeOnClickOutside,
    closeOnClickOutside = _ref2$closeOnClickOut === void 0 ? false : _ref2$closeOnClickOut;
  return reactDom.createPortal(React.createElement(PortalImpl, {
    onClose: onClose,
    title: title,
    closeOnClickOutside: closeOnClickOutside
  }, children), document.body);
}

function useModal() {
  var _useState = React.useState(null),
    modalContent = _useState[0],
    setModalContent = _useState[1];
  var onClose = React.useCallback(function () {
    setModalContent(null);
  }, []);
  var modal = React.useMemo(function () {
    if (modalContent === null) {
      return null;
    }
    var title = modalContent.title,
      content = modalContent.content,
      closeOnClickOutside = modalContent.closeOnClickOutside;
    return React.createElement(Modal, {
      onClose: onClose,
      title: title,
      closeOnClickOutside: closeOnClickOutside
    }, content);
  }, [modalContent, onClose]);
  var showModal = React.useCallback(function (title, getContent, closeOnClickOutside) {
    if (closeOnClickOutside === void 0) {
      closeOnClickOutside = false;
    }
    setModalContent({
      closeOnClickOutside: closeOnClickOutside,
      content: getContent(onClose),
      title: title
    });
  }, [onClose]);
  return [modal, showModal];
}

function joinClasses() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args.filter(Boolean).join(' ');
}

function Button(_ref) {
  var dataTestId = _ref['data-test-id'],
    children = _ref.children,
    className = _ref.className,
    onClick = _ref.onClick,
    disabled = _ref.disabled,
    small = _ref.small,
    title = _ref.title;
  return React.createElement("button", Object.assign({
    disabled: disabled,
    className: joinClasses('Button__root', disabled && 'Button__disabled', small && 'Button__small', className),
    onClick: onClick,
    title: title,
    "aria-label": title
  }, dataTestId && {
    'data-test-id': dataTestId
  }), children);
}

function ActionsPlugin(_ref) {
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  var _useState = React.useState(false);
  var _useState2 = React.useState(false);
  var _useState3 = React.useState(true),
    isEditorEmpty = _useState3[0],
    setIsEditorEmpty = _useState3[1];
  var _useModal = useModal(),
    modal = _useModal[0],
    showModal = _useModal[1];
  React.useEffect(function () {
    return editor.registerUpdateListener(function () {
      editor.getEditorState().read(function () {
        var root = lexical.$getRoot();
        var children = root.getChildren();
        if (children.length > 1) {
          setIsEditorEmpty(false);
        } else {
          if (lexical.$isParagraphNode(children[0])) {
            var paragraphChildren = children[0].getChildren();
            setIsEditorEmpty(paragraphChildren.length === 0);
          } else {
            setIsEditorEmpty(false);
          }
        }
      });
    });
  }, [editor]);
  var handleMarkdownToggle = React.useCallback(function () {
    editor.update(function () {
      var root = lexical.$getRoot();
      var firstChild = root.getFirstChild();
      if (code.$isCodeNode(firstChild) && firstChild.getLanguage() === 'markdown') ;
      root.selectEnd();
    });
  }, [editor]);
  return React.createElement("div", {
    className: "actions"
  }, React.createElement("button", {
    className: "action-button clear",
    disabled: isEditorEmpty,
    onClick: function onClick() {
      showModal('Clear editor', function (onClose) {
        return React.createElement(ShowClearDialog, {
          editor: editor,
          onClose: onClose
        });
      });
    },
    title: "Clear",
    "aria-label": "Clear editor contents"
  }, React.createElement("i", {
    className: "clear"
  })), React.createElement("button", {
    className: "action-button",
    onClick: handleMarkdownToggle,
    title: "Convert From Markdown",
    "aria-label": "Convert from markdown"
  }, React.createElement("i", {
    className: "markdown"
  })), modal);
}
function ShowClearDialog(_ref2) {
  var editor = _ref2.editor,
    onClose = _ref2.onClose;
  return React.createElement(React.Fragment, null, "Are you sure you want to clear the editor?", React.createElement("div", {
    className: "Modal__content"
  }, React.createElement(Button, {
    onClick: function onClick() {
      editor.focus();
      onClose();
    }
  }, "Cancel")));
}

var AutocompleteNode = /*#__PURE__*/function (_DecoratorNode) {
  _inheritsLoose(AutocompleteNode, _DecoratorNode);
  function AutocompleteNode(uuid, key) {
    var _this;
    _this = _DecoratorNode.call(this, key) || this;
    _this.__uuid = uuid;
    return _this;
  }
  AutocompleteNode.clone = function clone(node) {
    return new AutocompleteNode(node.__key);
  };
  AutocompleteNode.getType = function getType() {
    return 'autocomplete';
  };
  AutocompleteNode.importJSON = function importJSON(serializedNode) {
    var node = $createAutocompleteNode(serializedNode.uuid);
    return node;
  };
  var _proto = AutocompleteNode.prototype;
  _proto.exportJSON = function exportJSON() {
    return _extends({}, _DecoratorNode.prototype.exportJSON.call(this), {
      type: 'autocomplete',
      uuid: this.__uuid,
      version: 1
    });
  };
  _proto.updateDOM = function updateDOM(prevNode, dom, config) {
    return false;
  };
  _proto.createDOM = function createDOM(config) {
    return document.createElement('span');
  };
  _proto.decorate = function decorate() {
    if (this.__uuid !== uuid) {
      return null;
    }
    return React.createElement(AutocompleteComponent, null);
  };
  return AutocompleteNode;
}(lexical.DecoratorNode);
function $createAutocompleteNode(uuid) {
  return new AutocompleteNode(uuid);
}
function AutocompleteComponent() {
  return React.createElement("span", {
    style: {
      color: '#ccc'
    },
    spellCheck: "false"
  });
}

var elements = /*#__PURE__*/new WeakMap();
function readTouch(e) {
  var touch = e.changedTouches[0];
  if (touch === undefined) {
    return null;
  }
  return [touch.clientX, touch.clientY];
}
function addListener(element, cb) {
  var elementValues = elements.get(element);
  if (elementValues === undefined) {
    var listeners = new Set();
    var handleTouchstart = function handleTouchstart(e) {
      if (elementValues !== undefined) {
        elementValues.start = readTouch(e);
      }
    };
    var handleTouchend = function handleTouchend(e) {
      if (elementValues === undefined) {
        return;
      }
      var start = elementValues.start;
      if (start === null) {
        return;
      }
      var end = readTouch(e);
      for (var _iterator = _createForOfIteratorHelperLoose(listeners), _step; !(_step = _iterator()).done;) {
        var listener = _step.value;
        if (end !== null) {
          listener([end[0] - start[0], end[1] - start[1]], e);
        }
      }
    };
    element.addEventListener('touchstart', handleTouchstart);
    element.addEventListener('touchend', handleTouchend);
    elementValues = {
      handleTouchend: handleTouchend,
      handleTouchstart: handleTouchstart,
      listeners: listeners,
      start: null
    };
    elements.set(element, elementValues);
  }
  elementValues.listeners.add(cb);
  return function () {
    return deleteListener(element, cb);
  };
}
function deleteListener(element, cb) {
  var elementValues = elements.get(element);
  if (elementValues === undefined) {
    return;
  }
  var listeners = elementValues.listeners;
  listeners["delete"](cb);
  if (listeners.size === 0) {
    elements["delete"](element);
    element.removeEventListener('touchstart', elementValues.handleTouchstart);
    element.removeEventListener('touchend', elementValues.handleTouchend);
  }
}
function addSwipeRightListener(element, cb) {
  return addListener(element, function (force, e) {
    var x = force[0],
      y = force[1];
    if (x > 0 && x > Math.abs(y)) {
      cb(x, e);
    }
  });
}

var uuid = /*#__PURE__*/Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
function useQuery() {
  return React.useCallback(function (searchText) {
    var server = new AutocompleteServer();
    console.time('query');
    var response = server.query(searchText);
    console.timeEnd('query');
    return response;
  }, []);
}
function AutocompletePlugin() {
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  var query = useQuery();
  React.useEffect(function () {
    var autocompleteNodeKey = null;
    var lastSuggestion = null;
    function $clearSuggestion() {
      lastSuggestion = null;
    }
    function handleAutocompleteNodeTransform(node) {
      var key = node.getKey();
      if (node.__uuid === uuid && key !== autocompleteNodeKey) {
        $clearSuggestion();
      }
    }
    function handleUpdate() {
      editor.update(function () {
        var selection = lexical.$getSelection();
        $clearSuggestion();
      });
    }
    function $handleAutocompleteIntent() {
      if (lastSuggestion === null || autocompleteNodeKey === null) {
        return false;
      }
      var autocompleteNode = lexical.$getNodeByKey(autocompleteNodeKey);
      if (autocompleteNode === null) {
        return false;
      }
      var textNode = lexical.$createTextNode(lastSuggestion);
      autocompleteNode.replace(textNode);
      textNode.selectNext();
      $clearSuggestion();
      return true;
    }
    function $handleKeypressCommand(e) {
      if ($handleAutocompleteIntent()) {
        e.preventDefault();
        return true;
      }
      return false;
    }
    function handleSwipeRight(_force, e) {
      editor.update(function () {
        if ($handleAutocompleteIntent()) {
          e.preventDefault();
        }
      });
    }
    function unmountSuggestion() {
      editor.update(function () {
        $clearSuggestion();
      });
    }
    var rootElem = editor.getRootElement();
    return utils.mergeRegister.apply(void 0, [editor.registerNodeTransform(AutocompleteNode, handleAutocompleteNodeTransform), editor.registerUpdateListener(handleUpdate), editor.registerCommand(lexical.KEY_TAB_COMMAND, $handleKeypressCommand, lexical.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical.KEY_ARROW_RIGHT_COMMAND, $handleKeypressCommand, lexical.COMMAND_PRIORITY_LOW)].concat(rootElem !== null ? [addSwipeRightListener(rootElem, handleSwipeRight)] : [], [unmountSuggestion]));
  }, [editor, query]);
  return null;
}
var AutocompleteServer = function AutocompleteServer() {
  var _this = this;
  this.DATABASE = DICTIONARY;
  this.LATENCY = 200;
  this.query = function (searchText) {
    var isDismissed = false;
    var dismiss = function dismiss() {
      isDismissed = true;
    };
    var promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (isDismissed) {
          return reject('Dismissed');
        }
        var searchTextLength = searchText.length;
        if (searchText === '' || searchTextLength < 4) {
          return resolve(null);
        }
        var char0 = searchText.charCodeAt(0);
        var isCapitalized = char0 >= 65 && char0 <= 90;
        var caseInsensitiveSearchText = isCapitalized ? String.fromCharCode(char0 + 32) + searchText.substring(1) : searchText;
        var match = _this.DATABASE.find(function (dictionaryWord) {
          var _dictionaryWord$start;
          return (_dictionaryWord$start = dictionaryWord.startsWith(caseInsensitiveSearchText)) != null ? _dictionaryWord$start : null;
        });
        if (match === undefined) {
          return resolve(null);
        }
        var matchCapitalized = isCapitalized ? String.fromCharCode(match.charCodeAt(0) - 32) + match.substring(1) : match;
        var autocompleteChunk = matchCapitalized.substring(searchTextLength);
        if (autocompleteChunk === '') {
          return resolve(null);
        }
        return resolve(autocompleteChunk);
      }, _this.LATENCY);
    });
    return {
      dismiss: dismiss,
      promise: promise
    };
  };
};
var DICTIONARY = ['information', 'available', 'copyright', 'university', 'management', 'international', 'development', 'education', 'community', 'technology', 'following', 'resources', 'including', 'directory', 'government', 'department', 'description', 'insurance', 'different', 'categories', 'conditions', 'accessories', 'september', 'questions', 'application', 'financial', 'equipment', 'performance', 'experience', 'important', 'activities', 'additional', 'something', 'professional', 'committee', 'washington', 'california', 'reference', 'companies', 'computers', 'president', 'australia', 'discussion', 'entertainment', 'agreement', 'marketing', 'association', 'collection', 'solutions', 'electronics', 'technical', 'microsoft', 'conference', 'environment', 'statement', 'downloads', 'applications', 'requirements', 'individual', 'subscribe', 'everything', 'production', 'commercial', 'advertising', 'treatment', 'newsletter', 'knowledge', 'currently', 'construction', 'registered', 'protection', 'engineering', 'published', 'corporate', 'customers', 'materials', 'countries', 'standards', 'political', 'advertise', 'environmental', 'availability', 'employment', 'commission', 'administration', 'institute', 'sponsored', 'electronic', 'condition', 'effective', 'organization', 'selection', 'corporation', 'executive', 'necessary', 'according', 'particular', 'facilities', 'opportunities', 'appropriate', 'statistics', 'investment', 'christmas', 'registration', 'furniture', 'wednesday', 'structure', 'distribution', 'industrial', 'potential', 'responsible', 'communications', 'associated', 'foundation', 'documents', 'communication', 'independent', 'operating', 'developed', 'telephone', 'population', 'navigation', 'operations', 'therefore', 'christian', 'understand', 'publications', 'worldwide', 'connection', 'publisher', 'introduction', 'properties', 'accommodation', 'excellent', 'opportunity', 'assessment', 'especially', 'interface', 'operation', 'restaurants', 'beautiful', 'locations', 'significant', 'technologies', 'manufacturer', 'providing', 'authority', 'considered', 'programme', 'enterprise', 'educational', 'employees', 'alternative', 'processing', 'responsibility', 'resolution', 'publication', 'relations', 'photography', 'components', 'assistance', 'completed', 'organizations', 'otherwise', 'transportation', 'disclaimer', 'membership', 'recommended', 'background', 'character', 'maintenance', 'functions', 'trademarks', 'phentermine', 'submitted', 'television', 'interested', 'throughout', 'established', 'programming', 'regarding', 'instructions', 'increased', 'understanding', 'beginning', 'associates', 'instruments', 'businesses', 'specified', 'restaurant', 'procedures', 'relationship', 'traditional', 'sometimes', 'themselves', 'transport', 'interesting', 'evaluation', 'implementation', 'galleries', 'references', 'presented', 'literature', 'respective', 'definition', 'secretary', 'networking', 'australian', 'magazines', 'francisco', 'individuals', 'guidelines', 'installation', 'described', 'attention', 'difference', 'regulations', 'certificate', 'directions', 'documentation', 'automotive', 'successful', 'communities', 'situation', 'publishing', 'emergency', 'developing', 'determine', 'temperature', 'announcements', 'historical', 'ringtones', 'difficult', 'scientific', 'satellite', 'particularly', 'functional', 'monitoring', 'architecture', 'recommend', 'dictionary', 'accounting', 'manufacturing', 'professor', 'generally', 'continued', 'techniques', 'permission', 'generation', 'component', 'guarantee', 'processes', 'interests', 'paperback', 'classifieds', 'supported', 'competition', 'providers', 'characters', 'thousands', 'apartments', 'generated', 'administrative', 'practices', 'reporting', 'essential', 'affiliate', 'immediately', 'designated', 'integrated', 'configuration', 'comprehensive', 'universal', 'presentation', 'languages', 'compliance', 'improvement', 'pennsylvania', 'challenge', 'acceptance', 'strategies', 'affiliates', 'multimedia', 'certified', 'computing', 'interactive', 'procedure', 'leadership', 'religious', 'breakfast', 'developer', 'approximately', 'recommendations', 'comparison', 'automatically', 'minnesota', 'adventure', 'institutions', 'assistant', 'advertisement', 'headlines', 'yesterday', 'determined', 'wholesale', 'extension', 'statements', 'completely', 'electrical', 'applicable', 'manufacturers', 'classical', 'dedicated', 'direction', 'basketball', 'wisconsin', 'personnel', 'identified', 'professionals', 'advantage', 'newsletters', 'estimated', 'anonymous', 'miscellaneous', 'integration', 'interview', 'framework', 'installed', 'massachusetts', 'associate', 'frequently', 'discussions', 'laboratory', 'destination', 'intelligence', 'specifications', 'tripadvisor', 'residential', 'decisions', 'industries', 'partnership', 'editorial', 'expression', 'provisions', 'principles', 'suggestions', 'replacement', 'strategic', 'economics', 'compatible', 'apartment', 'netherlands', 'consulting', 'recreation', 'participants', 'favorites', 'translation', 'estimates', 'protected', 'philadelphia', 'officials', 'contained', 'legislation', 'parameters', 'relationships', 'tennessee', 'representative', 'frequency', 'introduced', 'departments', 'residents', 'displayed', 'performed', 'administrator', 'addresses', 'permanent', 'agriculture', 'constitutes', 'portfolio', 'practical', 'delivered', 'collectibles', 'infrastructure', 'exclusive', 'originally', 'utilities', 'philosophy', 'regulation', 'reduction', 'nutrition', 'recording', 'secondary', 'wonderful', 'announced', 'prevention', 'mentioned', 'automatic', 'healthcare', 'maintained', 'increasing', 'connected', 'directors', 'participation', 'containing', 'combination', 'amendment', 'guaranteed', 'libraries', 'distributed', 'singapore', 'enterprises', 'convention', 'principal', 'certification', 'previously', 'buildings', 'household', 'batteries', 'positions', 'subscription', 'contemporary', 'panasonic', 'permalink', 'signature', 'provision', 'certainly', 'newspaper', 'liability', 'trademark', 'trackback', 'americans', 'promotion', 'conversion', 'reasonable', 'broadband', 'influence', 'importance', 'webmaster', 'prescription', 'specifically', 'represent', 'conservation', 'louisiana', 'javascript', 'marketplace', 'evolution', 'certificates', 'objectives', 'suggested', 'concerned', 'structures', 'encyclopedia', 'continuing', 'interracial', 'competitive', 'suppliers', 'preparation', 'receiving', 'accordance', 'discussed', 'elizabeth', 'reservations', 'playstation', 'instruction', 'annotation', 'differences', 'establish', 'expressed', 'paragraph', 'mathematics', 'compensation', 'conducted', 'percentage', 'mississippi', 'requested', 'connecticut', 'personals', 'immediate', 'agricultural', 'supporting', 'collections', 'participate', 'specialist', 'experienced', 'investigation', 'institution', 'searching', 'proceedings', 'transmission', 'characteristics', 'experiences', 'extremely', 'verzeichnis', 'contracts', 'concerning', 'developers', 'equivalent', 'chemistry', 'neighborhood', 'variables', 'continues', 'curriculum', 'psychology', 'responses', 'circumstances', 'identification', 'appliances', 'elementary', 'unlimited', 'printable', 'enforcement', 'hardcover', 'celebrity', 'chocolate', 'hampshire', 'bluetooth', 'controlled', 'requirement', 'authorities', 'representatives', 'pregnancy', 'biography', 'attractions', 'transactions', 'authorized', 'retirement', 'financing', 'efficiency', 'efficient', 'commitment', 'specialty', 'interviews', 'qualified', 'discovery', 'classified', 'confidence', 'lifestyle', 'consistent', 'clearance', 'connections', 'inventory', 'converter', 'organisation', 'objective', 'indicated', 'securities', 'volunteer', 'democratic', 'switzerland', 'parameter', 'processor', 'dimensions', 'contribute', 'challenges', 'recognition', 'submission', 'encourage', 'regulatory', 'inspection', 'consumers', 'territory', 'transaction', 'manchester', 'contributions', 'continuous', 'resulting', 'cambridge', 'initiative', 'execution', 'disability', 'increases', 'contractor', 'examination', 'indicates', 'committed', 'extensive', 'affordable', 'candidate', 'databases', 'outstanding', 'perspective', 'messenger', 'tournament', 'consideration', 'discounts', 'catalogue', 'publishers', 'caribbean', 'reservation', 'remaining', 'depending', 'expansion', 'purchased', 'performing', 'collected', 'absolutely', 'featuring', 'implement', 'scheduled', 'calculator', 'significantly', 'temporary', 'sufficient', 'awareness', 'vancouver', 'contribution', 'measurement', 'constitution', 'packaging', 'consultation', 'northwest', 'classroom', 'democracy', 'wallpaper', 'merchandise', 'resistance', 'baltimore', 'candidates', 'charlotte', 'biological', 'transition', 'preferences', 'instrument', 'classification', 'physician', 'hollywood', 'wikipedia', 'spiritual', 'photographs', 'relatively', 'satisfaction', 'represents', 'pittsburgh', 'preferred', 'intellectual', 'comfortable', 'interaction', 'listening', 'effectively', 'experimental', 'revolution', 'consolidation', 'landscape', 'dependent', 'mechanical', 'consultants', 'applicant', 'cooperation', 'acquisition', 'implemented', 'directories', 'recognized', 'notification', 'licensing', 'textbooks', 'diversity', 'cleveland', 'investments', 'accessibility', 'sensitive', 'templates', 'completion', 'universities', 'technique', 'contractors', 'subscriptions', 'calculate', 'alexander', 'broadcast', 'converted', 'anniversary', 'improvements', 'specification', 'accessible', 'accessory', 'typically', 'representation', 'arrangements', 'conferences', 'uniprotkb', 'consumption', 'birmingham', 'afternoon', 'consultant', 'controller', 'ownership', 'committees', 'legislative', 'researchers', 'unsubscribe', 'molecular', 'residence', 'attorneys', 'operators', 'sustainable', 'philippines', 'statistical', 'innovation', 'employers', 'definitions', 'elections', 'stainless', 'newspapers', 'hospitals', 'exception', 'successfully', 'indonesia', 'primarily', 'capabilities', 'recommendation', 'recruitment', 'organized', 'improving', 'expensive', 'organisations', 'explained', 'programmes', 'expertise', 'mechanism', 'jewellery', 'eventually', 'agreements', 'considering', 'innovative', 'conclusion', 'disorders', 'collaboration', 'detection', 'formation', 'engineers', 'proposals', 'moderator', 'tutorials', 'settlement', 'collectables', 'fantastic', 'governments', 'purchasing', 'appointed', 'operational', 'corresponding', 'descriptions', 'determination', 'animation', 'productions', 'telecommunications', 'instructor', 'approaches', 'highlights', 'designers', 'melbourne', 'scientists', 'blackjack', 'argentina', 'possibility', 'commissioner', 'dangerous', 'reliability', 'unfortunately', 'respectively', 'volunteers', 'attachment', 'appointment', 'workshops', 'hurricane', 'represented', 'mortgages', 'responsibilities', 'carefully', 'productivity', 'investors', 'underground', 'diagnosis', 'principle', 'vacations', 'calculated', 'appearance', 'incorporated', 'notebooks', 'algorithm', 'valentine', 'involving', 'investing', 'christopher', 'admission', 'terrorism', 'parliament', 'situations', 'allocated', 'corrections', 'structural', 'municipal', 'describes', 'disabilities', 'substance', 'prohibited', 'addressed', 'simulation', 'initiatives', 'concentration', 'interpretation', 'bankruptcy', 'optimization', 'substances', 'discovered', 'restrictions', 'participating', 'exhibition', 'composition', 'nationwide', 'definitely', 'existence', 'commentary', 'limousines', 'developments', 'immigration', 'destinations', 'necessarily', 'attribute', 'apparently', 'surrounding', 'mountains', 'popularity', 'postposted', 'coordinator', 'obviously', 'fundamental', 'substantial', 'progressive', 'championship', 'sacramento', 'impossible', 'depression', 'testimonials', 'memorabilia', 'cartridge', 'explanation', 'cincinnati', 'subsection', 'electricity', 'permitted', 'workplace', 'confirmed', 'wallpapers', 'infection', 'eligibility', 'involvement', 'placement', 'observations', 'vbulletin', 'subsequent', 'motorcycle', 'disclosure', 'establishment', 'presentations', 'undergraduate', 'occupation', 'donations', 'associations', 'citysearch', 'radiation', 'seriously', 'elsewhere', 'pollution', 'conservative', 'guestbook', 'effectiveness', 'demonstrate', 'atmosphere', 'experiment', 'purchases', 'federation', 'assignment', 'chemicals', 'everybody', 'nashville', 'counseling', 'acceptable', 'satisfied', 'measurements', 'milwaukee', 'medication', 'warehouse', 'shareware', 'violation', 'configure', 'stability', 'southwest', 'institutional', 'expectations', 'independence', 'metabolism', 'personally', 'excellence', 'somewhere', 'attributes', 'recognize', 'screening', 'thumbnail', 'forgotten', 'intelligent', 'edinburgh', 'obligation', 'regardless', 'restricted', 'republican', 'merchants', 'attendance', 'arguments', 'amsterdam', 'adventures', 'announcement', 'appreciate', 'regularly', 'mechanisms', 'customize', 'tradition', 'indicators', 'emissions', 'physicians', 'complaint', 'experiments', 'afghanistan', 'scholarship', 'governance', 'supplements', 'camcorder', 'implementing', 'ourselves', 'conversation', 'capability', 'producing', 'precision', 'contributed', 'reproduction', 'ingredients', 'franchise', 'complaints', 'promotions', 'rehabilitation', 'maintaining', 'environments', 'reception', 'correctly', 'consequences', 'geography', 'appearing', 'integrity', 'discrimination', 'processed', 'implications', 'functionality', 'intermediate', 'emotional', 'platforms', 'overnight', 'geographic', 'preliminary', 'districts', 'introduce', 'promotional', 'chevrolet', 'specialists', 'generator', 'suspension', 'correction', 'authentication', 'communicate', 'supplement', 'showtimes', 'promoting', 'machinery', 'bandwidth', 'probability', 'dimension', 'schedules', 'admissions', 'quarterly', 'illustrated', 'continental', 'alternate', 'achievement', 'limitations', 'automated', 'passenger', 'convenient', 'orientation', 'childhood', 'flexibility', 'jurisdiction', 'displaying', 'encouraged', 'cartridges', 'declaration', 'automation', 'advantages', 'preparing', 'recipient', 'extensions', 'athletics', 'southeast', 'alternatives', 'determining', 'personalized', 'conditioning', 'partnerships', 'destruction', 'increasingly', 'migration', 'basically', 'conventional', 'applicants', 'occupational', 'adjustment', 'treatments', 'camcorders', 'difficulty', 'collective', 'coalition', 'enrollment', 'producers', 'collector', 'interfaces', 'advertisers', 'representing', 'observation', 'restoration', 'convenience', 'returning', 'opposition', 'container', 'defendant', 'confirmation', 'supervisor', 'peripherals', 'bestsellers', 'departure', 'minneapolis', 'interactions', 'intervention', 'attraction', 'modification', 'customized', 'understood', 'assurance', 'happening', 'amendments', 'metropolitan', 'compilation', 'verification', 'attractive', 'recordings', 'jefferson', 'gardening', 'obligations', 'orchestra', 'polyphonic', 'outsourcing', 'adjustable', 'allocation', 'discipline', 'demonstrated', 'identifying', 'alphabetical', 'dispatched', 'installing', 'voluntary', 'photographer', 'messaging', 'constructed', 'additions', 'requiring', 'engagement', 'refinance', 'calendars', 'arrangement', 'conclusions', 'bibliography', 'compatibility', 'furthermore', 'cooperative', 'measuring', 'jacksonville', 'headquarters', 'transfers', 'transformation', 'attachments', 'administrators', 'personality', 'facilitate', 'subscriber', 'priorities', 'bookstore', 'parenting', 'incredible', 'commonwealth', 'pharmaceutical', 'manhattan', 'workforce', 'organizational', 'portuguese', 'everywhere', 'discharge', 'halloween', 'hazardous', 'methodology', 'housewares', 'reputation', 'resistant', 'democrats', 'recycling', 'qualifications', 'slideshow', 'variation', 'transferred', 'photograph', 'distributor', 'underlying', 'wrestling', 'photoshop', 'gathering', 'projection', 'mathematical', 'specialized', 'diagnostic', 'indianapolis', 'corporations', 'criticism', 'automobile', 'confidential', 'statutory', 'accommodations', 'northeast', 'downloaded', 'paintings', 'injection', 'yorkshire', 'populations', 'protective', 'initially', 'indicator', 'eliminate', 'sunglasses', 'preference', 'threshold', 'venezuela', 'exploration', 'sequences', 'astronomy', 'translate', 'announces', 'compression', 'establishing', 'constitutional', 'perfectly', 'instantly', 'litigation', 'submissions', 'broadcasting', 'horizontal', 'terrorist', 'informational', 'ecommerce', 'suffering', 'prospective', 'ultimately', 'artificial', 'spectacular', 'coordination', 'connector', 'affiliated', 'activation', 'naturally', 'subscribers', 'mitsubishi', 'underwear', 'potentially', 'constraints', 'inclusive', 'dimensional', 'considerable', 'selecting', 'processors', 'pantyhose', 'difficulties', 'complexity', 'constantly', 'barcelona', 'presidential', 'documentary', 'territories', 'palestinian', 'legislature', 'hospitality', 'procurement', 'theoretical', 'exercises', 'surveillance', 'protocols', 'highlight', 'substitute', 'inclusion', 'hopefully', 'brilliant', 'evaluated', 'assignments', 'termination', 'households', 'authentic', 'montgomery', 'architectural', 'louisville', 'macintosh', 'movements', 'amenities', 'virtually', 'authorization', 'projector', 'comparative', 'psychological', 'surprised', 'genealogy', 'expenditure', 'liverpool', 'connectivity', 'algorithms', 'similarly', 'collaborative', 'excluding', 'commander', 'suggestion', 'spotlight', 'investigate', 'connecting', 'logistics', 'proportion', 'significance', 'symposium', 'essentials', 'protecting', 'transmitted', 'screenshots', 'intensive', 'switching', 'correspondence', 'supervision', 'expenditures', 'separation', 'testimony', 'celebrities', 'mandatory', 'boundaries', 'syndication', 'celebration', 'filtering', 'luxembourg', 'offensive', 'deployment', 'colleagues', 'separated', 'directive', 'governing', 'retailers', 'occasionally', 'attending', 'recruiting', 'instructional', 'traveling', 'permissions', 'biotechnology', 'prescribed', 'catherine', 'reproduced', 'calculation', 'consolidated', 'occasions', 'equations', 'exceptional', 'respondents', 'considerations', 'queensland', 'musicians', 'composite', 'unavailable', 'essentially', 'designing', 'assessments', 'brunswick', 'sensitivity', 'preservation', 'streaming', 'intensity', 'technological', 'syndicate', 'antivirus', 'addressing', 'discounted', 'bangladesh', 'constitute', 'concluded', 'desperate', 'demonstration', 'governmental', 'manufactured', 'graduation', 'variations', 'addiction', 'springfield', 'synthesis', 'undefined', 'unemployment', 'enhancement', 'newcastle', 'performances', 'societies', 'brazilian', 'identical', 'petroleum', 'norwegian', 'retention', 'exchanges', 'soundtrack', 'wondering', 'profession', 'separately', 'physiology', 'collecting', 'participant', 'scholarships', 'recreational', 'dominican', 'friendship', 'expanding', 'provincial', 'investigations', 'medications', 'rochester', 'advertiser', 'encryption', 'downloadable', 'sophisticated', 'possession', 'laboratories', 'vegetables', 'thumbnails', 'stockings', 'respondent', 'destroyed', 'manufacture', 'wordpress', 'vulnerability', 'accountability', 'celebrate', 'accredited', 'appliance', 'compressed', 'scheduling', 'perspectives', 'mortality', 'christians', 'therapeutic', 'impressive', 'accordingly', 'architect', 'challenging', 'microwave', 'accidents', 'relocation', 'contributors', 'violations', 'temperatures', 'competitions', 'discretion', 'cosmetics', 'repository', 'concentrations', 'christianity', 'negotiations', 'realistic', 'generating', 'christina', 'congressional', 'photographic', 'modifications', 'millennium', 'achieving', 'fisheries', 'exceptions', 'reactions', 'macromedia', 'companion', 'divisions', 'additionally', 'fellowship', 'victorian', 'copyrights', 'lithuania', 'mastercard', 'chronicles', 'obtaining', 'distribute', 'decorative', 'enlargement', 'campaigns', 'conjunction', 'instances', 'indigenous', 'validation', 'corruption', 'incentives', 'cholesterol', 'differential', 'scientist', 'starsmerchant', 'arthritis', 'nevertheless', 'practitioners', 'transcript', 'inflation', 'compounds', 'contracting', 'structured', 'reasonably', 'graduates', 'recommends', 'controlling', 'distributors', 'arlington', 'particles', 'extraordinary', 'indicating', 'coordinate', 'exclusively', 'limitation', 'widescreen', 'illustration', 'construct', 'inquiries', 'inspiration', 'affecting', 'downloading', 'aggregate', 'forecasts', 'complicated', 'shopzilla', 'decorating', 'expressions', 'shakespeare', 'connectors', 'conflicts', 'travelers', 'offerings', 'incorrect', 'furnishings', 'guatemala', 'perception', 'renaissance', 'pathology', 'ordinance', 'photographers', 'infections', 'configured', 'festivals', 'possibilities', 'contributing', 'analytical', 'circulation', 'assumption', 'jerusalem', 'transexuales', 'invention', 'technician', 'executives', 'enquiries', 'cognitive', 'exploring', 'registrar', 'supporters', 'withdrawal', 'predicted', 'saskatchewan', 'cancellation', 'ministers', 'veterinary', 'prostores', 'relevance', 'incentive', 'butterfly', 'mechanics', 'numerical', 'reflection', 'accompanied', 'invitation', 'princeton', 'spirituality', 'meanwhile', 'proprietary', 'childrens', 'thumbzilla', 'porcelain', 'pichunter', 'translated', 'columnists', 'consensus', 'delivering', 'journalism', 'intention', 'undertaken', 'statewide', 'semiconductor', 'illustrations', 'happiness', 'substantially', 'identifier', 'calculations', 'conducting', 'accomplished', 'calculators', 'impression', 'correlation', 'fragrance', 'neighbors', 'transparent', 'charleston', 'champions', 'selections', 'projectors', 'inappropriate', 'comparing', 'vocational', 'pharmacies', 'introducing', 'appreciated', 'albuquerque', 'distinguished', 'projected', 'assumptions', 'shareholders', 'developmental', 'regulated', 'anticipated', 'completing', 'comparable', 'confusion', 'copyrighted', 'warranties', 'documented', 'paperbacks', 'keyboards', 'vulnerable', 'reflected', 'respiratory', 'notifications', 'transexual', 'mainstream', 'evaluating', 'subcommittee', 'maternity', 'journalists', 'foundations', 'volleyball', 'liabilities', 'decreased', 'tolerance', 'creativity', 'describing', 'lightning', 'quotations', 'inspector', 'bookmarks', 'behavioral', 'riverside', 'bathrooms', 'abilities', 'initiated', 'nonprofit', 'lancaster', 'suspended', 'containers', 'attitudes', 'simultaneously', 'integrate', 'sociology', 'screenshot', 'exhibitions', 'confident', 'retrieved', 'officially', 'consortium', 'recipients', 'delicious', 'traditions', 'periodically', 'hungarian', 'referring', 'transform', 'educators', 'vegetable', 'humanities', 'independently', 'alignment', 'henderson', 'britannica', 'competitors', 'visibility', 'consciousness', 'encounter', 'resolutions', 'accessing', 'attempted', 'witnesses', 'administered', 'strengthen', 'frederick', 'aggressive', 'advertisements', 'sublimedirectory', 'disturbed', 'determines', 'sculpture', 'motivation', 'pharmacology', 'passengers', 'quantities', 'petersburg', 'consistently', 'powerpoint', 'obituaries', 'punishment', 'appreciation', 'subsequently', 'providence', 'restriction', 'incorporate', 'backgrounds', 'treasurer', 'lightweight', 'transcription', 'complications', 'scripting', 'remembered', 'synthetic', 'testament', 'specifics', 'partially', 'wilderness', 'generations', 'tournaments', 'sponsorship', 'headphones', 'proceeding', 'volkswagen', 'uncertainty', 'breakdown', 'reconstruction', 'subsidiary', 'strengths', 'encouraging', 'furnished', 'terrorists', 'comparisons', 'beneficial', 'distributions', 'viewpicture', 'threatened', 'republicans', 'discusses', 'responded', 'abstracts', 'prediction', 'pharmaceuticals', 'thesaurus', 'individually', 'battlefield', 'literally', 'ecological', 'appraisal', 'consisting', 'submitting', 'citations', 'geographical', 'mozambique', 'disclaimers', 'championships', 'sheffield', 'finishing', 'wellington', 'prospects', 'bulgarian', 'aboriginal', 'remarkable', 'preventing', 'productive', 'boulevard', 'compliant', 'penalties', 'imagination', 'refurbished', 'activated', 'conferencing', 'armstrong', 'politicians', 'trackbacks', 'accommodate', 'christine', 'accepting', 'precipitation', 'isolation', 'sustained', 'approximate', 'programmer', 'greetings', 'inherited', 'incomplete', 'chronicle', 'legitimate', 'biographies', 'investigator', 'plaintiff', 'prisoners', 'mediterranean', 'nightlife', 'architects', 'entrepreneur', 'freelance', 'excessive', 'screensaver', 'valuation', 'unexpected', 'cigarette', 'characteristic', 'metallica', 'consequently', 'appointments', 'narrative', 'academics', 'quantitative', 'screensavers', 'subdivision', 'distinction', 'livestock', 'exemption', 'sustainability', 'formatting', 'nutritional', 'nicaragua', 'affiliation', 'relatives', 'satisfactory', 'revolutionary', 'bracelets', 'telephony', 'breathing', 'thickness', 'adjustments', 'graphical', 'discussing', 'aerospace', 'meaningful', 'maintains', 'shortcuts', 'voyeurweb', 'extending', 'specifies', 'accreditation', 'blackberry', 'meditation', 'microphone', 'macedonia', 'combining', 'instrumental', 'organizing', 'moderators', 'kazakhstan', 'standings', 'partition', 'invisible', 'translations', 'commodity', 'kilometers', 'thanksgiving', 'guarantees', 'indication', 'congratulations', 'cigarettes', 'controllers', 'consultancy', 'conventions', 'coordinates', 'responding', 'physically', 'stakeholders', 'hydrocodone', 'consecutive', 'attempting', 'representations', 'competing', 'peninsula', 'accurately', 'considers', 'ministries', 'vacancies', 'parliamentary', 'acknowledge', 'thoroughly', 'nottingham', 'identifies', 'questionnaire', 'qualification', 'modelling', 'miniature', 'interstate', 'consequence', 'systematic', 'perceived', 'madagascar', 'presenting', 'troubleshooting', 'uzbekistan', 'centuries', 'magnitude', 'richardson', 'fragrances', 'vocabulary', 'earthquake', 'fundraising', 'geological', 'assessing', 'introduces', 'webmasters', 'computational', 'acdbentity', 'participated', 'handhelds', 'answering', 'impressed', 'conspiracy', 'organizer', 'combinations', 'preceding', 'cumulative', 'amplifier', 'arbitrary', 'prominent', 'lexington', 'contacted', 'recorders', 'occasional', 'innovations', 'postcards', 'reviewing', 'explicitly', 'transsexual', 'citizenship', 'informative', 'girlfriend', 'bloomberg', 'hierarchy', 'influenced', 'abandoned', 'complement', 'mauritius', 'checklist', 'requesting', 'lauderdale', 'scenarios', 'extraction', 'elevation', 'utilization', 'beverages', 'calibration', 'efficiently', 'entertaining', 'prerequisite', 'hypothesis', 'medicines', 'regression', 'enhancements', 'renewable', 'intersection', 'passwords', 'consistency', 'collectors', 'azerbaijan', 'astrology', 'occurring', 'supplemental', 'travelling', 'induction', 'precisely', 'spreading', 'provinces', 'widespread', 'incidence', 'incidents', 'enhancing', 'interference', 'palestine', 'listprice', 'atmospheric', 'knowledgestorm', 'referenced', 'publicity', 'proposition', 'allowance', 'designation', 'duplicate', 'criterion', 'civilization', 'vietnamese', 'tremendous', 'corrected', 'encountered', 'internationally', 'surrounded', 'creatures', 'commented', 'accomplish', 'vegetarian', 'newfoundland', 'investigated', 'ambassador', 'stephanie', 'contacting', 'vegetation', 'findarticles', 'specially', 'infectious', 'continuity', 'phenomenon', 'conscious', 'referrals', 'differently', 'integrating', 'revisions', 'reasoning', 'charitable', 'annotated', 'convinced', 'burlington', 'replacing', 'researcher', 'watershed', 'occupations', 'acknowledged', 'equilibrium', 'characterized', 'privilege', 'qualifying', 'estimation', 'pediatric', 'techrepublic', 'institutes', 'brochures', 'traveller', 'appropriations', 'suspected', 'benchmark', 'beginners', 'instructors', 'highlighted', 'stationery', 'unauthorized', 'competent', 'contributor', 'demonstrates', 'gradually', 'desirable', 'journalist', 'afterwards', 'religions', 'explosion', 'signatures', 'disciplines', 'daughters', 'conversations', 'simplified', 'motherboard', 'bibliographic', 'champagne', 'deviation', 'superintendent', 'housewives', 'influences', 'inspections', 'irrigation', 'hydraulic', 'robertson', 'penetration', 'conviction', 'omissions', 'retrieval', 'qualities', 'prototype', 'importantly', 'apparatus', 'explaining', 'nomination', 'empirical', 'dependence', 'sexuality', 'polyester', 'commitments', 'suggesting', 'remainder', 'privileges', 'televisions', 'specializing', 'commodities', 'motorcycles', 'concentrate', 'reproductive', 'molecules', 'refrigerator', 'intervals', 'sentences', 'exclusion', 'workstation', 'holocaust', 'receivers', 'disposition', 'navigator', 'investigators', 'marijuana', 'cathedral', 'fairfield', 'fascinating', 'landscapes', 'lafayette', 'computation', 'cardiovascular', 'salvation', 'predictions', 'accompanying', 'selective', 'arbitration', 'configuring', 'editorials', 'sacrifice', 'removable', 'convergence', 'gibraltar', 'anthropology', 'malpractice', 'reporters', 'necessity', 'rendering', 'hepatitis', 'nationally', 'waterproof', 'specialties', 'humanitarian', 'invitations', 'functioning', 'economies', 'alexandria', 'bacterial', 'undertake', 'continuously', 'achievements', 'convertible', 'secretariat', 'paragraphs', 'adolescent', 'nominations', 'cancelled', 'introductory', 'reservoir', 'occurrence', 'worcester', 'demographic', 'disciplinary', 'respected', 'portraits', 'interpreted', 'evaluations', 'elimination', 'hypothetical', 'immigrants', 'complimentary', 'helicopter', 'performer', 'commissions', 'powerseller', 'graduated', 'surprising', 'unnecessary', 'dramatically', 'yugoslavia', 'characterization', 'likelihood', 'fundamentals', 'contamination', 'endangered', 'compromise', 'expiration', 'namespace', 'peripheral', 'negotiation', 'opponents', 'nominated', 'confidentiality', 'electoral', 'changelog', 'alternatively', 'greensboro', 'controversial', 'recovered', 'upgrading', 'frontpage', 'demanding', 'defensive', 'forbidden', 'programmers', 'monitored', 'installations', 'deutschland', 'practitioner', 'motivated', 'smithsonian', 'examining', 'revelation', 'delegation', 'dictionaries', 'greenhouse', 'transparency', 'currencies', 'survivors', 'positioning', 'descending', 'temporarily', 'frequencies', 'reflections', 'municipality', 'detective', 'experiencing', 'fireplace', 'endorsement', 'psychiatry', 'persistent', 'summaries', 'looksmart', 'magnificent', 'colleague', 'adaptation', 'paintball', 'enclosure', 'supervisors', 'westminster', 'distances', 'absorption', 'treasures', 'transcripts', 'disappointed', 'continually', 'communist', 'collectible', 'entrepreneurs', 'creations', 'acquisitions', 'biodiversity', 'excitement', 'presently', 'mysterious', 'librarian', 'subsidiaries', 'stockholm', 'indonesian', 'therapist', 'promising', 'relaxation', 'thereafter', 'commissioners', 'forwarding', 'nightmare', 'reductions', 'southampton', 'organisms', 'telescope', 'portsmouth', 'advancement', 'harassment', 'generators', 'generates', 'replication', 'inexpensive', 'receptors', 'interventions', 'huntington', 'internship', 'aluminium', 'snowboard', 'beastality', 'evanescence', 'coordinated', 'shipments', 'antarctica', 'chancellor', 'controversy', 'legendary', 'beautifully', 'antibodies', 'examinations', 'immunology', 'departmental', 'terminology', 'gentleman', 'reproduce', 'convicted', 'roommates', 'threatening', 'spokesman', 'activists', 'frankfurt', 'encourages', 'assembled', 'restructuring', 'terminals', 'simulations', 'sufficiently', 'conditional', 'crossword', 'conceptual', 'liechtenstein', 'translator', 'automobiles', 'continent', 'longitude', 'challenged', 'telecharger', 'insertion', 'instrumentation', 'constraint', 'groundwater', 'strengthening', 'insulation', 'infringement', 'subjective', 'swaziland', 'varieties', 'mediawiki', 'configurations'];

var URL_MATCHER = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
var EMAIL_MATCHER = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
var MATCHERS = [function (text) {
  var match = URL_MATCHER.exec(text);
  return match && {
    index: match.index,
    length: match[0].length,
    text: match[0],
    url: match[0]
  };
}, function (text) {
  var match = EMAIL_MATCHER.exec(text);
  return match && {
    index: match.index,
    length: match[0].length,
    text: match[0],
    url: "mailto:" + match[0]
  };
}];
function LexicalAutoLinkPlugin() {
  return React.createElement(LexicalAutoLinkPlugin$1.AutoLinkPlugin, {
    matchers: MATCHERS
  });
}

function ClickableLinkPlugin(_ref) {
  var filter = _ref.filter,
    _ref$newTab = _ref.newTab,
    newTab = _ref$newTab === void 0 ? true : _ref$newTab;
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  React.useEffect(function () {
    function onClick(e) {
      var event = e;
      var linkDomNode = getLinkDomNode(event, editor);
      if (linkDomNode === null) {
        return;
      }
      var href = linkDomNode.getAttribute('href');
      if (linkDomNode.getAttribute('contenteditable') === 'false' || href === undefined) {
        return;
      }
      var selection = editor.getEditorState().read(lexical.$getSelection);
      if (lexical.$isRangeSelection(selection) && !selection.isCollapsed()) {
        return;
      }
      var linkNode = null;
      editor.update(function () {
        var maybeLinkNode = lexical.$getNearestNodeFromDOMNode(linkDomNode);
        if (link.$isLinkNode(maybeLinkNode)) {
          linkNode = maybeLinkNode;
        }
      });
      if (linkNode === null || filter !== undefined && !filter(event, linkNode)) {
        return;
      }
      try {
        if (href !== null) {
          window.open(href, newTab || event.metaKey || event.ctrlKey ? '_blank' : '_self');
        }
      } catch (_unused) {}
    }
    return editor.registerRootListener(function (rootElement, prevRootElement) {
      if (prevRootElement !== null) {
        prevRootElement.removeEventListener('click', onClick);
      }
      if (rootElement !== null) {
        rootElement.addEventListener('click', onClick);
      }
    });
  }, [editor, filter, newTab]);
  return null;
}
function isLinkDomNode(domNode) {
  return domNode.nodeName.toLowerCase() === 'a';
}
function getLinkDomNode(event, editor) {
  return editor.getEditorState().read(function () {
    var domNode = event.target;
    if (isLinkDomNode(domNode)) {
      return domNode;
    }
    if (domNode.parentNode && isLinkDomNode(domNode.parentNode)) {
      return domNode.parentNode;
    }
    return null;
  });
}

function CodeHighlightPlugin() {
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  React.useEffect(function () {
    return code.registerCodeHighlighting(editor);
  }, [editor]);
  return null;
}

var EmojiNode = /*#__PURE__*/function (_TextNode) {
  _inheritsLoose(EmojiNode, _TextNode);
  function EmojiNode(className, text, key) {
    var _this;
    _this = _TextNode.call(this, text, key) || this;
    _this.__className = className;
    return _this;
  }
  EmojiNode.getType = function getType() {
    return 'emoji';
  };
  EmojiNode.clone = function clone(node) {
    return new EmojiNode(node.__className, node.__text, node.__key);
  };
  var _proto = EmojiNode.prototype;
  _proto.createDOM = function createDOM(config) {
    var dom = document.createElement('span');
    var inner = _TextNode.prototype.createDOM.call(this, config);
    dom.className = this.__className;
    inner.className = 'emoji-inner';
    dom.appendChild(inner);
    return dom;
  };
  _proto.updateDOM = function updateDOM(prevNode, dom, config) {
    var inner = dom.firstChild;
    if (inner === null) {
      return true;
    }
    _TextNode.prototype.updateDOM.call(this, prevNode, inner, config);
    return false;
  };
  EmojiNode.importJSON = function importJSON(serializedNode) {
    var node = $createEmojiNode(serializedNode.className, serializedNode.text);
    node.setFormat(serializedNode.format);
    node.setDetail(serializedNode.detail);
    node.setMode(serializedNode.mode);
    node.setStyle(serializedNode.style);
    return node;
  };
  _proto.exportJSON = function exportJSON() {
    return _extends({}, _TextNode.prototype.exportJSON.call(this), {
      className: this.getClassName(),
      type: 'emoji'
    });
  };
  _proto.getClassName = function getClassName() {
    var self = this.getLatest();
    return self.__className;
  };
  return EmojiNode;
}(lexical.TextNode);
function $createEmojiNode(className, emojiText) {
  return new EmojiNode(className, emojiText).setMode('token');
}

var emojis = /*#__PURE__*/new Map([[':)', ['emoji happysmile', '🙂']], [':D', ['emoji veryhappysmile', '😀']], [':(', ['emoji unhappysmile', '🙁']], ['<3', ['emoji heart', '❤']], ['🙂', ['emoji happysmile', '🙂']], ['😀', ['emoji veryhappysmile', '😀']], ['🙁', ['emoji unhappysmile', '🙁']], ['❤', ['emoji heart', '❤']]]);
function findAndTransformEmoji(node) {
  var text = node.getTextContent();
  for (var i = 0; i < text.length; i++) {
    var emojiData = emojis.get(text[i]) || emojis.get(text.slice(i, i + 2));
    if (emojiData !== undefined) {
      var emojiStyle = emojiData[0],
        emojiText = emojiData[1];
      var targetNode = void 0;
      if (i === 0) {
        var _node$splitText = node.splitText(i + 2);
        targetNode = _node$splitText[0];
      } else {
        var _node$splitText2 = node.splitText(i, i + 2);
        targetNode = _node$splitText2[1];
      }
      var emojiNode = $createEmojiNode(emojiStyle, emojiText);
      targetNode.replace(emojiNode);
      return emojiNode;
    }
  }
  return null;
}
function textNodeTransform(node) {
  var targetNode = node;
  while (targetNode !== null) {
    if (!targetNode.isSimpleText()) {
      return;
    }
    targetNode = findAndTransformEmoji(targetNode);
  }
}
function useEmojis(editor) {
  React.useEffect(function () {
    if (!editor.hasNodes([EmojiNode])) {
      throw new Error('EmojisPlugin: EmojiNode not registered on editor');
    }
    return editor.registerNodeTransform(lexical.TextNode, textNodeTransform);
  }, [editor]);
}
function EmojisPlugin() {
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  useEmojis(editor);
  return null;
}

function EquationEditor(_ref) {
  var equation = _ref.equation,
    setEquation = _ref.setEquation,
    inline = _ref.inline,
    inputRef = _ref.inputRef;
  var onChange = function onChange(event) {
    setEquation(event.target.value);
  };
  var props = {
    equation: equation,
    inputRef: inputRef,
    onChange: onChange
  };
  return inline ? React.createElement(InlineEquationEditor, Object.assign({}, props, {
    inputRef: inputRef
  })) : React.createElement(BlockEquationEditor, Object.assign({}, props, {
    inputRef: inputRef
  }));
}
function InlineEquationEditor(_ref2) {
  var equation = _ref2.equation,
    onChange = _ref2.onChange,
    inputRef = _ref2.inputRef;
  return React.createElement("span", {
    className: "EquationEditor_inputBackground"
  }, React.createElement("span", {
    className: "EquationEditor_dollarSign"
  }, "$"), React.createElement("input", {
    className: "EquationEditor_inlineEditor",
    value: equation,
    onChange: onChange,
    autoFocus: true,
    ref: inputRef
  }), React.createElement("span", {
    className: "EquationEditor_dollarSign"
  }, "$"));
}
function BlockEquationEditor(_ref3) {
  var equation = _ref3.equation,
    onChange = _ref3.onChange,
    inputRef = _ref3.inputRef;
  return React.createElement("div", {
    className: "EquationEditor_inputBackground"
  }, React.createElement("span", {
    className: "EquationEditor_dollarSign"
  }, '$$\n'), React.createElement("textarea", {
    className: "EquationEditor_blockEditor",
    value: equation,
    onChange: onChange,
    ref: inputRef
  }), React.createElement("span", {
    className: "EquationEditor_dollarSign"
  }, '\n$$'));
}

function KatexRenderer(_ref) {
  var equation = _ref.equation,
    inline = _ref.inline,
    onClick = _ref.onClick;
  var katexElementRef = React.useRef(null);
  React.useEffect(function () {
    var katexElement = katexElementRef.current;
    if (katexElement !== null) {
      katex.render(equation, katexElement, {
        displayMode: !inline,
        errorColor: '#cc0000',
        output: 'html',
        strict: 'warn',
        throwOnError: false,
        trust: false
      });
    }
  }, [equation, inline]);
  return React.createElement(React.Fragment, null, React.createElement("span", {
    className: "spacer"
  }, " "), React.createElement("span", {
    role: "button",
    tabIndex: -1,
    onClick: onClick,
    ref: katexElementRef
  }), React.createElement("span", {
    className: "spacer"
  }, " "));
}

function EquationComponent(_ref) {
  var equation = _ref.equation,
    inline = _ref.inline,
    nodeKey = _ref.nodeKey;
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  var _useState = React.useState(equation),
    equationValue = _useState[0],
    setEquationValue = _useState[1];
  var _useState2 = React.useState(false),
    showEquationEditor = _useState2[0],
    setShowEquationEditor = _useState2[1];
  var inputRef = React.useRef(null);
  var onHide = React.useCallback(function (restoreSelection) {
    setShowEquationEditor(false);
    editor.update(function () {
      var node = lexical.$getNodeByKey(nodeKey);
      if ($isEquationNode(node)) {
        node.setEquation(equationValue);
        if (restoreSelection) {
          node.selectNext(0, 0);
        }
      }
    });
  }, [editor, equationValue, nodeKey]);
  React.useEffect(function () {
    if (showEquationEditor) {
      return utils.mergeRegister(editor.registerCommand(lexical.SELECTION_CHANGE_COMMAND, function (payload) {
        var activeElement = document.activeElement;
        var inputElem = inputRef.current;
        if (inputElem !== activeElement) {
          onHide();
        }
        return false;
      }, lexical.COMMAND_PRIORITY_HIGH), editor.registerCommand(lexical.KEY_ESCAPE_COMMAND, function (payload) {
        var activeElement = document.activeElement;
        var inputElem = inputRef.current;
        if (inputElem === activeElement) {
          onHide(true);
          return true;
        }
        return false;
      }, lexical.COMMAND_PRIORITY_HIGH));
    }
  }, [editor, onHide, showEquationEditor]);
  return React.createElement(React.Fragment, null, showEquationEditor ? React.createElement(EquationEditor, {
    equation: equationValue,
    setEquation: setEquationValue,
    inline: inline,
    inputRef: inputRef
  }) : React.createElement(KatexRenderer, {
    equation: equationValue,
    inline: inline,
    onClick: function onClick() {
      setShowEquationEditor(true);
    }
  }));
}
var EquationNode = /*#__PURE__*/function (_DecoratorNode) {
  _inheritsLoose(EquationNode, _DecoratorNode);
  function EquationNode(equation, inline, key) {
    var _this;
    _this = _DecoratorNode.call(this, key) || this;
    _this.__equation = equation;
    _this.__inline = inline != null ? inline : false;
    return _this;
  }
  EquationNode.getType = function getType() {
    return 'equation';
  };
  EquationNode.clone = function clone(node) {
    return new EquationNode(node.__equation, node.__inline, node.__key);
  };
  EquationNode.importJSON = function importJSON(serializedNode) {
    var node = $createEquationNode(serializedNode.equation, serializedNode.inline);
    return node;
  };
  var _proto = EquationNode.prototype;
  _proto.exportJSON = function exportJSON() {
    return {
      equation: this.getEquation(),
      inline: this.__inline,
      type: 'equation',
      version: 1
    };
  };
  _proto.createDOM = function createDOM(_config) {
    return document.createElement(this.__inline ? 'span' : 'div');
  };
  _proto.updateDOM = function updateDOM(prevNode) {
    return this.__inline !== prevNode.__inline;
  };
  _proto.getEquation = function getEquation() {
    return this.__equation;
  };
  _proto.setEquation = function setEquation(equation) {
    var writable = this.getWritable();
    writable.__equation = equation;
  };
  _proto.decorate = function decorate() {
    return React.createElement(EquationComponent, {
      equation: this.__equation,
      inline: this.__inline,
      nodeKey: this.__key
    });
  };
  return EquationNode;
}(lexical.DecoratorNode);
function $createEquationNode(equation, inline) {
  if (equation === void 0) {
    equation = '';
  }
  if (inline === void 0) {
    inline = false;
  }
  var equationNode = new EquationNode(equation, inline);
  return equationNode;
}
function $isEquationNode(node) {
  return node instanceof EquationNode;
}

var INSERT_EQUATION_COMMAND = /*#__PURE__*/lexical.createCommand();
function EquationsPlugin() {
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  React.useEffect(function () {
    if (!editor.hasNodes([EquationNode])) {
      throw new Error('EquationsPlugins: EquationsNode not registered on editor');
    }
    return editor.registerCommand(INSERT_EQUATION_COMMAND, function (payload) {
      var equation = payload.equation,
        inline = payload.inline;
      var selection = lexical.$getSelection();
      if (lexical.$isRangeSelection(selection)) {
        var equationNode = $createEquationNode(equation, inline);
        selection.insertNodes([equationNode]);
      }
      return true;
    }, lexical.COMMAND_PRIORITY_EDITOR);
  }, [editor]);
  return null;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
var Direction = {
  east: 1 << 0,
  north: 1 << 3,
  south: 1 << 1,
  west: 1 << 2
};
function ImageResizer(_ref) {
  var onResizeStart = _ref.onResizeStart,
    onResizeEnd = _ref.onResizeEnd,
    imageRef = _ref.imageRef,
    maxWidth = _ref.maxWidth,
    editor = _ref.editor,
    showCaption = _ref.showCaption,
    setShowCaption = _ref.setShowCaption;
  var buttonRef = React.useRef(null);
  var controlWrapperRef = React.useRef(null);
  var userSelect = React.useRef({
    priority: '',
    value: 'default'
  });
  var positioningRef = React.useRef({
    currentHeight: 0,
    currentWidth: 0,
    direction: 0,
    isResizing: false,
    ratio: 0,
    startHeight: 0,
    startWidth: 0,
    startX: 0,
    startY: 0
  });
  var editorRootElement = editor.getRootElement();
  var maxWidthContainer = maxWidth ? maxWidth : editorRootElement !== null ? editorRootElement.getBoundingClientRect().width - 20 : 100;
  var maxHeightContainer = editorRootElement !== null ? editorRootElement.getBoundingClientRect().height - 20 : 100;
  var minWidth = 100;
  var minHeight = 100;
  var setStartCursor = function setStartCursor(direction) {
    var ew = direction === Direction.east || direction === Direction.west;
    var ns = direction === Direction.north || direction === Direction.south;
    var nwse = direction & Direction.north && direction & Direction.west || direction & Direction.south && direction & Direction.east;
    var cursorDir = ew ? 'ew' : ns ? 'ns' : nwse ? 'nwse' : 'nesw';
    if (editorRootElement !== null) {
      editorRootElement.style.setProperty('cursor', cursorDir + "-resize", 'important');
    }
    if (document.body !== null) {
      document.body.style.setProperty('cursor', cursorDir + "-resize", 'important');
      userSelect.current.value = document.body.style.getPropertyValue('-webkit-user-select');
      userSelect.current.priority = document.body.style.getPropertyPriority('-webkit-user-select');
      document.body.style.setProperty('-webkit-user-select', "none", 'important');
    }
  };
  var setEndCursor = function setEndCursor() {
    if (editorRootElement !== null) {
      editorRootElement.style.setProperty('cursor', 'default');
    }
    if (document.body !== null) {
      document.body.style.setProperty('cursor', 'default');
      document.body.style.setProperty('-webkit-user-select', userSelect.current.value, userSelect.current.priority);
    }
  };
  var handlePointerDown = function handlePointerDown(event, direction) {
    var image = imageRef.current;
    var controlWrapper = controlWrapperRef.current;
    if (image !== null && controlWrapper !== null) {
      var _image$getBoundingCli = image.getBoundingClientRect(),
        width = _image$getBoundingCli.width,
        height = _image$getBoundingCli.height;
      var positioning = positioningRef.current;
      positioning.startWidth = width;
      positioning.startHeight = height;
      positioning.ratio = width / height;
      positioning.currentWidth = width;
      positioning.currentHeight = height;
      positioning.startX = event.clientX;
      positioning.startY = event.clientY;
      positioning.isResizing = true;
      positioning.direction = direction;
      setStartCursor(direction);
      onResizeStart();
      controlWrapper.classList.add('image-control-wrapper--resizing');
      image.style.height = height + "px";
      image.style.width = width + "px";
      document.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('pointerup', handlePointerUp);
    }
  };
  var handlePointerMove = function handlePointerMove(event) {
    var image = imageRef.current;
    var positioning = positioningRef.current;
    var isHorizontal = positioning.direction & (Direction.east | Direction.west);
    var isVertical = positioning.direction & (Direction.south | Direction.north);
    if (image !== null && positioning.isResizing) {
      if (isHorizontal && isVertical) {
        var diff = Math.floor(positioning.startX - event.clientX);
        diff = positioning.direction & Direction.east ? -diff : diff;
        var width = clamp(positioning.startWidth + diff, minWidth, maxWidthContainer);
        var height = width / positioning.ratio;
        image.style.width = width + "px";
        image.style.height = height + "px";
        positioning.currentHeight = height;
        positioning.currentWidth = width;
      } else if (isVertical) {
        var _diff = Math.floor(positioning.startY - event.clientY);
        _diff = positioning.direction & Direction.south ? -_diff : _diff;
        var _height = clamp(positioning.startHeight + _diff, minHeight, maxHeightContainer);
        image.style.height = _height + "px";
        positioning.currentHeight = _height;
      } else {
        var _diff2 = Math.floor(positioning.startX - event.clientX);
        _diff2 = positioning.direction & Direction.east ? -_diff2 : _diff2;
        var _width = clamp(positioning.startWidth + _diff2, minWidth, maxWidthContainer);
        image.style.width = _width + "px";
        positioning.currentWidth = _width;
      }
    }
  };
  var handlePointerUp = function handlePointerUp() {
    var image = imageRef.current;
    var positioning = positioningRef.current;
    var controlWrapper = controlWrapperRef.current;
    if (image !== null && controlWrapper !== null && positioning.isResizing) {
      var width = positioning.currentWidth;
      var height = positioning.currentHeight;
      positioning.startWidth = 0;
      positioning.startHeight = 0;
      positioning.ratio = 0;
      positioning.startX = 0;
      positioning.startY = 0;
      positioning.currentWidth = 0;
      positioning.currentHeight = 0;
      positioning.isResizing = false;
      controlWrapper.classList.remove('image-control-wrapper--resizing');
      setEndCursor();
      onResizeEnd(width, height);
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    }
  };
  return React.createElement("div", {
    ref: controlWrapperRef
  }, !showCaption && React.createElement("button", {
    className: "image-caption-button",
    ref: buttonRef,
    onClick: function onClick() {
      setShowCaption(!showCaption);
    }
  }, "Add Caption"), React.createElement("div", {
    className: "image-resizer image-resizer-n",
    onPointerDown: function onPointerDown(event) {
      handlePointerDown(event, Direction.north);
    }
  }), React.createElement("div", {
    className: "image-resizer image-resizer-ne",
    onPointerDown: function onPointerDown(event) {
      handlePointerDown(event, Direction.north | Direction.east);
    }
  }), React.createElement("div", {
    className: "image-resizer image-resizer-e",
    onPointerDown: function onPointerDown(event) {
      handlePointerDown(event, Direction.east);
    }
  }), React.createElement("div", {
    className: "image-resizer image-resizer-se",
    onPointerDown: function onPointerDown(event) {
      handlePointerDown(event, Direction.south | Direction.east);
    }
  }), React.createElement("div", {
    className: "image-resizer image-resizer-s",
    onPointerDown: function onPointerDown(event) {
      handlePointerDown(event, Direction.south);
    }
  }), React.createElement("div", {
    className: "image-resizer image-resizer-sw",
    onPointerDown: function onPointerDown(event) {
      handlePointerDown(event, Direction.south | Direction.west);
    }
  }), React.createElement("div", {
    className: "image-resizer image-resizer-w",
    onPointerDown: function onPointerDown(event) {
      handlePointerDown(event, Direction.west);
    }
  }), React.createElement("div", {
    className: "image-resizer image-resizer-nw",
    onPointerDown: function onPointerDown(event) {
      handlePointerDown(event, Direction.north | Direction.west);
    }
  }));
}

var removeStyleFromSvg_HACK = function removeStyleFromSvg_HACK(svg) {
  var _svg$firstElementChil;
  var styleTag = svg == null || (_svg$firstElementChil = svg.firstElementChild) == null ? void 0 : _svg$firstElementChil.firstElementChild;
  var viewBox = svg.getAttribute('viewBox');
  if (viewBox != null) {
    var viewBoxDimensions = viewBox.split(' ');
    svg.setAttribute('width', viewBoxDimensions[2]);
    svg.setAttribute('height', viewBoxDimensions[3]);
  }
  if (styleTag && styleTag.tagName === 'style') {
    styleTag.remove();
  }
};
function ExcalidrawImage(_ref) {
  var _Svg$outerHTML;
  var elements = _ref.elements,
    imageContainerRef = _ref.imageContainerRef,
    _ref$appState = _ref.appState,
    appState = _ref$appState === void 0 ? null : _ref$appState,
    _ref$rootClassName = _ref.rootClassName,
    rootClassName = _ref$rootClassName === void 0 ? null : _ref$rootClassName;
  var _useState = React.useState(null),
    Svg = _useState[0],
    setSvg = _useState[1];
  React.useEffect(function () {
    var setContent = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var svg;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(appState === null)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              _context.next = 4;
              return excalidraw.exportToSvg({
                appState: appState,
                elements: elements,
                files: null
              });
            case 4:
              svg = _context.sent;
              removeStyleFromSvg_HACK(svg);
              svg.setAttribute('width', '100%');
              svg.setAttribute('height', '100%');
              svg.setAttribute('display', 'block');
              setSvg(svg);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function setContent() {
        return _ref2.apply(this, arguments);
      };
    }();
    setContent();
  }, [elements, appState]);
  return React.createElement("div", {
    ref: imageContainerRef,
    className: rootClassName != null ? rootClassName : '',
    dangerouslySetInnerHTML: {
      __html: (_Svg$outerHTML = Svg == null ? void 0 : Svg.outerHTML) != null ? _Svg$outerHTML : ''
    }
  });
}

function ExcalidrawComponent(_ref) {
  var nodeKey = _ref.nodeKey,
    data = _ref.data;
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  var imageContainerRef = React.useRef(null);
  var buttonRef = React.useRef(null);
  var _useLexicalNodeSelect = useLexicalNodeSelection.useLexicalNodeSelection(nodeKey),
    isSelected = _useLexicalNodeSelect[0],
    setSelected = _useLexicalNodeSelect[1],
    clearSelection = _useLexicalNodeSelect[2];
  var _useState = React.useState(false),
    isResizing = _useState[0],
    setIsResizing = _useState[1];
  var onDelete = React.useCallback(function (event) {
    if (isSelected && lexical.$isNodeSelection(lexical.$getSelection())) {
      event.preventDefault();
      editor.update(function () {
        var node = lexical.$getNodeByKey(nodeKey);
        if ($isExcalidrawNode(node)) {
          node.remove();
        }
        setSelected(false);
      });
    }
    return false;
  }, [editor, isSelected, nodeKey, setSelected]);
  React.useEffect(function () {
    return utils.mergeRegister(editor.registerCommand(lexical.CLICK_COMMAND, function (event) {
      var buttonElem = buttonRef.current;
      var eventTarget = event.target;
      if (isResizing) {
        return true;
      }
      if (buttonElem !== null && buttonElem.contains(eventTarget)) {
        if (!event.shiftKey) {
          clearSelection();
        }
        setSelected(!isSelected);
        return true;
      }
      return false;
    }, lexical.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical.KEY_DELETE_COMMAND, onDelete, lexical.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical.KEY_BACKSPACE_COMMAND, onDelete, lexical.COMMAND_PRIORITY_LOW));
  }, [clearSelection, editor, isSelected, isResizing, onDelete, setSelected]);
  var deleteNode = React.useCallback(function () {
    return editor.update(function () {
      var node = lexical.$getNodeByKey(nodeKey);
      if ($isExcalidrawNode(node)) {
        node.remove();
      }
    });
  }, [editor, nodeKey]);
  var onResizeStart = function onResizeStart() {
    setIsResizing(true);
  };
  var onResizeEnd = function onResizeEnd() {
    setTimeout(function () {
      setIsResizing(false);
    }, 200);
  };
  var elements = React.useMemo(function () {
    return JSON.parse(data);
  }, [data]);
  return React.createElement(React.Fragment, null, elements.length > 0 && React.createElement("button", {
    ref: buttonRef,
    className: "excalidraw-button " + (isSelected ? 'selected' : '')
  }, React.createElement(ExcalidrawImage, {
    imageContainerRef: imageContainerRef,
    className: "image",
    elements: elements
  }), (isSelected || isResizing) && React.createElement(ImageResizer, {
    showCaption: true,
    setShowCaption: function setShowCaption() {
      return null;
    },
    imageRef: imageContainerRef,
    editor: editor,
    onResizeStart: onResizeStart,
    onResizeEnd: onResizeEnd
  })));
}
function convertExcalidrawElement(domNode) {
  var excalidrawData = domNode.getAttribute('data-lexical-excalidraw-json');
  if (excalidrawData) {
    var node = $createExcalidrawNode();
    node.__data = excalidrawData;
    return {
      node: node
    };
  }
  return null;
}
var ExcalidrawNode = /*#__PURE__*/function (_DecoratorNode) {
  _inheritsLoose(ExcalidrawNode, _DecoratorNode);
  function ExcalidrawNode(data, key) {
    var _this;
    if (data === void 0) {
      data = '[]';
    }
    _this = _DecoratorNode.call(this, key) || this;
    _this.__data = data;
    return _this;
  }
  ExcalidrawNode.getType = function getType() {
    return 'excalidraw';
  };
  ExcalidrawNode.clone = function clone(node) {
    return new ExcalidrawNode(node.__data, node.__key);
  };
  ExcalidrawNode.importJSON = function importJSON(serializedNode) {
    return new ExcalidrawNode(serializedNode.data);
  };
  var _proto = ExcalidrawNode.prototype;
  _proto.exportJSON = function exportJSON() {
    return {
      data: this.__data,
      type: 'excalidraw',
      version: 1
    };
  };
  _proto.createDOM = function createDOM(config) {
    var span = document.createElement('span');
    var theme = config.theme;
    var className = theme.image;
    if (className !== undefined) {
      span.className = className;
    }
    return span;
  };
  _proto.updateDOM = function updateDOM() {
    return false;
  };
  ExcalidrawNode.importDOM = function importDOM() {
    return {
      span: function span(domNode) {
        if (!domNode.hasAttribute('data-lexical-excalidraw-json')) {
          return null;
        }
        return {
          conversion: convertExcalidrawElement,
          priority: 1
        };
      }
    };
  };
  _proto.exportDOM = function exportDOM(editor) {
    var element = document.createElement('span');
    var content = editor.getElementByKey(this.getKey());
    if (content !== null) {
      var svg = content.querySelector('svg');
      if (svg !== null) {
        element.innerHTML = svg.outerHTML;
      }
    }
    element.setAttribute('data-lexical-excalidraw-json', this.__data);
    return {
      element: element
    };
  };
  _proto.setData = function setData(data) {
    var self = this.getWritable();
    self.__data = data;
  };
  _proto.decorate = function decorate(editor, config) {
    return React.createElement(ExcalidrawComponent, {
      nodeKey: this.getKey(),
      data: this.__data
    });
  };
  return ExcalidrawNode;
}(lexical.DecoratorNode);
function $createExcalidrawNode() {
  return new ExcalidrawNode();
}
function $isExcalidrawNode(node) {
  return node instanceof ExcalidrawNode;
}

var INSERT_EXCALIDRAW_COMMAND = /*#__PURE__*/lexical.createCommand();
function ExcalidrawPlugin() {
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  React.useEffect(function () {
    if (!editor.hasNodes([ExcalidrawNode])) {
      throw new Error('ExcalidrawPlugin: ExcalidrawNode not registered on editor');
    }
    return editor.registerCommand(INSERT_EXCALIDRAW_COMMAND, function () {
      var selection = lexical.$getSelection();
      if (lexical.$isRangeSelection(selection)) {
        var excalidrawNode = $createExcalidrawNode();
        selection.insertNodes([excalidrawNode]);
      }
      return true;
    }, lexical.COMMAND_PRIORITY_EDITOR);
  }, [editor]);
  return null;
}

function HorizontalRulePlugin() {
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  React.useEffect(function () {
    return editor.registerCommand(LexicalHorizontalRuleNode.INSERT_HORIZONTAL_RULE_COMMAND, function (type) {
      var selection = lexical.$getSelection();
      if (!lexical.$isRangeSelection(selection)) {
        return false;
      }
      var focusNode = selection.focus.getNode();
      if (focusNode !== null) {
        var horizontalRuleNode = LexicalHorizontalRuleNode.$createHorizontalRuleNode();
        selection.insertParagraph();
        selection.focus.getNode().getTopLevelElementOrThrow().insertBefore(horizontalRuleNode);
      }
      return true;
    }, lexical.COMMAND_PRIORITY_EDITOR);
  }, [editor]);
  return null;
}

var getSelection = function getSelection() {
  return window.getSelection();
};

var KeywordNode = /*#__PURE__*/function (_TextNode) {
  _inheritsLoose(KeywordNode, _TextNode);
  function KeywordNode() {
    return _TextNode.apply(this, arguments) || this;
  }
  KeywordNode.getType = function getType() {
    return 'keyword';
  };
  KeywordNode.clone = function clone(node) {
    return new KeywordNode(node.__text, node.__key);
  };
  KeywordNode.importJSON = function importJSON(serializedNode) {
    var node = $createKeywordNode(serializedNode.text);
    node.setFormat(serializedNode.format);
    node.setDetail(serializedNode.detail);
    node.setMode(serializedNode.mode);
    node.setStyle(serializedNode.style);
    return node;
  };
  var _proto = KeywordNode.prototype;
  _proto.exportJSON = function exportJSON() {
    return _extends({}, _TextNode.prototype.exportJSON.call(this), {
      type: 'keyword',
      version: 1
    });
  };
  _proto.createDOM = function createDOM(config) {
    var dom = _TextNode.prototype.createDOM.call(this, config);
    dom.style.cursor = 'default';
    dom.className = 'keyword';
    return dom;
  };
  _proto.canInsertTextBefore = function canInsertTextBefore() {
    return false;
  };
  _proto.canInsertTextAfter = function canInsertTextAfter() {
    return false;
  };
  _proto.isTextEntity = function isTextEntity() {
    return true;
  };
  return KeywordNode;
}(lexical.TextNode);
function $createKeywordNode(keyword) {
  return new KeywordNode(keyword);
}

var KEYWORDS_REGEX = /(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])(congrats|congratulations|gratuluju|gratuluji|gratulujeme|blahopřeju|blahopřeji|blahopřejeme|Til lykke|Tillykke|Glückwunsch|Gratuliere|felicitaciones|enhorabuena|paljon onnea|onnittelut|Félicitations|gratula|gratulálok|gratulálunk|congratulazioni|complimenti|おめでとう|おめでとうございます|축하해|축하해요|gratulerer|Gefeliciteerd|gratulacje|Parabéns|parabéns|felicitações|felicitări|мои поздравления|поздравляем|поздравляю|gratulujem|blahoželám|ยินดีด้วย|ขอแสดงความยินดี|tebrikler|tebrik ederim|恭喜|祝贺你|恭喜你|恭喜|恭喜|baie geluk|veels geluk|অভিনন্দন|Čestitam|Čestitke|Čestitamo|Συγχαρητήρια|Μπράβο|અભિનંદન|badhai|बधाई|अभिनंदन|Честитам|Свака част|hongera|வாழ்த்துகள்|வாழ்த்துக்கள்|అభినందనలు|അഭിനന്ദനങ്ങൾ|Chúc mừng|מזל טוב|mazel tov|mazal tov)(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])/i;
function KeywordsPlugin() {
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  React.useEffect(function () {
    if (!editor.hasNodes([KeywordNode])) {
      throw new Error('KeywordsPlugin: KeywordNode not registered on editor');
    }
  }, [editor]);
  var createKeywordNode = React.useCallback(function (textNode) {
    return $createKeywordNode(textNode.getTextContent());
  }, []);
  var getKeywordMatch = React.useCallback(function (text) {
    var matchArr = KEYWORDS_REGEX.exec(text);
    if (matchArr === null) {
      return null;
    }
    var hashtagLength = matchArr[2].length;
    var startOffset = matchArr.index + matchArr[1].length;
    var endOffset = startOffset + hashtagLength;
    return {
      end: endOffset,
      start: startOffset
    };
  }, []);
  useLexicalTextEntity.useLexicalTextEntity(getKeywordMatch, KeywordNode, createKeywordNode);
  return null;
}

var CAN_USE_DOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';

var useLayoutEffectImpl = CAN_USE_DOM ? React.useLayoutEffect : React.useEffect;

function convertMentionElement(domNode) {
  var textContent = domNode.textContent;
  if (textContent !== null) {
    var node = $createMentionNode(textContent);
    return {
      node: node
    };
  }
  return null;
}
var mentionStyle = 'background-color: rgba(24, 119, 232, 0.2)';
var MentionNode = /*#__PURE__*/function (_TextNode) {
  _inheritsLoose(MentionNode, _TextNode);
  function MentionNode(mentionName, text, key) {
    var _this;
    _this = _TextNode.call(this, text != null ? text : mentionName, key) || this;
    _this.__mention = mentionName;
    return _this;
  }
  MentionNode.getType = function getType() {
    return 'mention';
  };
  MentionNode.clone = function clone(node) {
    return new MentionNode(node.__mention, node.__text, node.__key);
  };
  MentionNode.importJSON = function importJSON(serializedNode) {
    var node = $createMentionNode(serializedNode.mentionName);
    node.setTextContent(serializedNode.text);
    node.setFormat(serializedNode.format);
    node.setDetail(serializedNode.detail);
    node.setMode(serializedNode.mode);
    node.setStyle(serializedNode.style);
    return node;
  };
  var _proto = MentionNode.prototype;
  _proto.exportJSON = function exportJSON() {
    return _extends({}, _TextNode.prototype.exportJSON.call(this), {
      mentionName: this.__mention,
      type: 'mention',
      version: 1
    });
  };
  _proto.createDOM = function createDOM(config) {
    var dom = _TextNode.prototype.createDOM.call(this, config);
    dom.style.cssText = mentionStyle;
    dom.className = 'mention';
    return dom;
  };
  _proto.exportDOM = function exportDOM() {
    var element = document.createElement('span');
    element.setAttribute('data-lexical-mention', 'true');
    element.textContent = this.__text;
    return {
      element: element
    };
  };
  MentionNode.importDOM = function importDOM() {
    return {
      span: function span(domNode) {
        if (!domNode.hasAttribute('data-lexical-mention')) {
          return null;
        }
        return {
          conversion: convertMentionElement,
          priority: 1
        };
      }
    };
  };
  _proto.isTextEntity = function isTextEntity() {
    return true;
  };
  return MentionNode;
}(lexical.TextNode);
function $createMentionNode(mentionName) {
  var mentionNode = new MentionNode(mentionName);
  mentionNode.setMode('segmented').toggleDirectionless();
  return mentionNode;
}

var PUNCTUATION = '\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%\'"~=<>_:;';
var NAME = '\\b[A-Z][^\\s' + PUNCTUATION + ']';
var DocumentMentionsRegex = {
  NAME: NAME,
  PUNCTUATION: PUNCTUATION
};
var CapitalizedNameMentionsRegex = /*#__PURE__*/new RegExp('(^|[^#])((?:' + DocumentMentionsRegex.NAME + '{' + 1 + ',})$)');
var PUNC = DocumentMentionsRegex.PUNCTUATION;
var TRIGGERS = /*#__PURE__*/['@', "\\uff20"].join('');
var VALID_CHARS = '[^' + TRIGGERS + PUNC + '\\s]';
var VALID_JOINS = '(?:' + '\\.[ |$]|' + ' |' + '[' + PUNC + ']|' + ')';
var LENGTH_LIMIT = 75;
var AtSignMentionsRegex = /*#__PURE__*/new RegExp('(^|\\s|\\()(' + '[' + TRIGGERS + ']' + '((?:' + VALID_CHARS + VALID_JOINS + '){0,' + LENGTH_LIMIT + '})' + ')$');
var ALIAS_LENGTH_LIMIT = 50;
var AtSignMentionsRegexAliasRegex = /*#__PURE__*/new RegExp('(^|\\s|\\()(' + '[' + TRIGGERS + ']' + '((?:' + VALID_CHARS + '){0,' + ALIAS_LENGTH_LIMIT + '})' + ')$');
var SUGGESTION_LIST_LENGTH_LIMIT = 5;
var mentionsCache = /*#__PURE__*/new Map();
var dummyMentionsData = ['Aayla Secura', 'Adi Gallia', 'Admiral Dodd Rancit', 'Admiral Firmus Piett', 'Admiral Gial Ackbar', 'Admiral Ozzel', 'Admiral Raddus', 'Admiral Terrinald Screed', 'Admiral Trench', 'Admiral U.O. Statura', 'Agen Kolar', 'Agent Kallus', 'Aiolin and Morit Astarte', 'Aks Moe', 'Almec', 'Alton Kastle', 'Amee', 'AP-5', 'Armitage Hux', 'Artoo', 'Arvel Crynyd', 'Asajj Ventress', 'Aurra Sing', 'AZI-3', 'Bala-Tik', 'Barada', 'Bargwill Tomder', 'Baron Papanoida', 'Barriss Offee', 'Baze Malbus', 'Bazine Netal', 'BB-8', 'BB-9E', 'Ben Quadinaros', 'Berch Teller', 'Beru Lars', 'Bib Fortuna', 'Biggs Darklighter', 'Black Krrsantan', 'Bo-Katan Kryze', 'Boba Fett', 'Bobbajo', 'Bodhi Rook', 'Borvo the Hutt', 'Boss Nass', 'Bossk', 'Breha Antilles-Organa', 'Bren Derlin', 'Brendol Hux', 'BT-1', 'C-3PO', 'C1-10P', 'Cad Bane', 'Caluan Ematt', 'Captain Gregor', 'Captain Phasma', 'Captain Quarsh Panaka', 'Captain Rex', 'Carlist Rieekan', 'Casca Panzoro', 'Cassian Andor', 'Cassio Tagge', 'Cham Syndulla', 'Che Amanwe Papanoida', 'Chewbacca', 'Chi Eekway Papanoida', 'Chief Chirpa', 'Chirrut Îmwe', 'Ciena Ree', 'Cin Drallig', 'Clegg Holdfast', 'Cliegg Lars', 'Coleman Kcaj', 'Coleman Trebor', 'Colonel Kaplan', 'Commander Bly', 'Commander Cody (CC-2224)', 'Commander Fil (CC-3714)', 'Commander Fox', 'Commander Gree', 'Commander Jet', 'Commander Wolffe', 'Conan Antonio Motti', 'Conder Kyl', 'Constable Zuvio', 'Cordé', 'Cpatain Typho', 'Crix Madine', 'Cut Lawquane', 'Dak Ralter', 'Dapp', 'Darth Bane', 'Darth Maul', 'Darth Tyranus', 'Daultay Dofine', 'Del Meeko', 'Delian Mors', 'Dengar', 'Depa Billaba', 'Derek Klivian', 'Dexter Jettster', 'Dineé Ellberger', 'DJ', 'Doctor Aphra', 'Doctor Evazan', 'Dogma', 'Dormé', 'Dr. Cylo', 'Droidbait', 'Droopy McCool', 'Dryden Vos', 'Dud Bolt', 'Ebe E. Endocott', 'Echuu Shen-Jon', 'Eeth Koth', 'Eighth Brother', 'Eirtaé', 'Eli Vanto', 'Ellé', 'Ello Asty', 'Embo', 'Eneb Ray', 'Enfys Nest', 'EV-9D9', 'Evaan Verlaine', 'Even Piell', 'Ezra Bridger', 'Faro Argyus', 'Feral', 'Fifth Brother', 'Finis Valorum', 'Finn', 'Fives', 'FN-1824', 'FN-2003', 'Fodesinbeed Annodue', 'Fulcrum', 'FX-7', 'GA-97', 'Galen Erso', 'Gallius Rax', 'Garazeb "Zeb" Orrelios', 'Gardulla the Hutt', 'Garrick Versio', 'Garven Dreis', 'Gavyn Sykes', 'Gideon Hask', 'Gizor Dellso', 'Gonk droid', 'Grand Inquisitor', 'Greeata Jendowanian', 'Greedo', 'Greer Sonnel', 'Grievous', 'Grummgar', 'Gungi', 'Hammerhead', 'Han Solo', 'Harter Kalonia', 'Has Obbit', 'Hera Syndulla', 'Hevy', 'Hondo Ohnaka', 'Huyang', 'Iden Versio', 'IG-88', 'Ima-Gun Di', 'Inquisitors', 'Inspector Thanoth', 'Jabba', 'Jacen Syndulla', 'Jan Dodonna', 'Jango Fett', 'Janus Greejatus', 'Jar Jar Binks', 'Jas Emari', 'Jaxxon', 'Jek Tono Porkins', 'Jeremoch Colton', 'Jira', 'Jobal Naberrie', 'Jocasta Nu', 'Joclad Danva', 'Joh Yowza', 'Jom Barell', 'Joph Seastriker', 'Jova Tarkin', 'Jubnuk', 'Jyn Erso', 'K-2SO', 'Kanan Jarrus', 'Karbin', 'Karina the Great', 'Kes Dameron', 'Ketsu Onyo', 'Ki-Adi-Mundi', 'King Katuunko', 'Kit Fisto', 'Kitster Banai', 'Klaatu', 'Klik-Klak', 'Korr Sella', 'Kylo Ren', 'L3-37', 'Lama Su', 'Lando Calrissian', 'Lanever Villecham', 'Leia Organa', 'Letta Turmond', 'Lieutenant Kaydel Ko Connix', 'Lieutenant Thire', 'Lobot', 'Logray', 'Lok Durd', 'Longo Two-Guns', 'Lor San Tekka', 'Lorth Needa', 'Lott Dod', 'Luke Skywalker', 'Lumat', 'Luminara Unduli', 'Lux Bonteri', 'Lyn Me', 'Lyra Erso', 'Mace Windu', 'Malakili', 'Mama the Hutt', 'Mars Guo', 'Mas Amedda', 'Mawhonic', 'Max Rebo', 'Maximilian Veers', 'Maz Kanata', 'ME-8D9', 'Meena Tills', 'Mercurial Swift', 'Mina Bonteri', 'Miraj Scintel', 'Mister Bones', 'Mod Terrik', 'Moden Canady', 'Mon Mothma', 'Moradmin Bast', 'Moralo Eval', 'Morley', 'Mother Talzin', 'Nahdar Vebb', 'Nahdonnis Praji', 'Nien Nunb', 'Niima the Hutt', 'Nines', 'Norra Wexley', 'Nute Gunray', 'Nuvo Vindi', 'Obi-Wan Kenobi', 'Odd Ball', 'Ody Mandrell', 'Omi', 'Onaconda Farr', 'Oola', 'OOM-9', 'Oppo Rancisis', 'Orn Free Taa', 'Oro Dassyne', 'Orrimarko', 'Osi Sobeck', 'Owen Lars', 'Pablo-Jill', 'Padmé Amidala', 'Pagetti Rook', 'Paige Tico', 'Paploo', 'Petty Officer Thanisson', 'Pharl McQuarrie', 'Plo Koon', 'Po Nudo', 'Poe Dameron', 'Poggle the Lesser', 'Pong Krell', 'Pooja Naberrie', 'PZ-4CO', 'Quarrie', 'Quay Tolsite', 'Queen Apailana', 'Queen Jamillia', 'Queen Neeyutnee', 'Qui-Gon Jinn', 'Quiggold', 'Quinlan Vos', 'R2-D2', 'R2-KT', 'R3-S6', 'R4-P17', 'R5-D4', 'RA-7', 'Rabé', 'Rako Hardeen', 'Ransolm Casterfo', 'Rappertunie', 'Ratts Tyerell', 'Raymus Antilles', 'Ree-Yees', 'Reeve Panzoro', 'Rey', 'Ric Olié', 'Riff Tamson', 'Riley', 'Rinnriyin Di', 'Rio Durant', 'Rogue Squadron', 'Romba', 'Roos Tarpals', 'Rose Tico', 'Rotta the Hutt', 'Rukh', 'Rune Haako', 'Rush Clovis', 'Ruwee Naberrie', 'Ryoo Naberrie', 'Sabé', 'Sabine Wren', 'Saché', 'Saelt-Marae', 'Saesee Tiin', 'Salacious B. Crumb', 'San Hill', 'Sana Starros', 'Sarco Plank', 'Sarkli', 'Satine Kryze', 'Savage Opress', 'Sebulba', 'Senator Organa', 'Sergeant Kreel', 'Seventh Sister', 'Shaak Ti', 'Shara Bey', 'Shmi Skywalker', 'Shu Mai', 'Sidon Ithano', 'Sifo-Dyas', 'Sim Aloo', 'Siniir Rath Velus', 'Sio Bibble', 'Sixth Brother', 'Slowen Lo', 'Sly Moore', 'Snaggletooth', 'Snap Wexley', 'Snoke', 'Sola Naberrie', 'Sora Bulq', 'Strono Tuggs', 'Sy Snootles', 'Tallissan Lintra', 'Tarfful', 'Tasu Leech', 'Taun We', 'TC-14', 'Tee Watt Kaa', 'Teebo', 'Teedo', 'Teemto Pagalies', 'Temiri Blagg', 'Tessek', 'Tey How', 'Thane Kyrell', 'The Bendu', 'The Smuggler', 'Thrawn', 'Tiaan Jerjerrod', 'Tion Medon', 'Tobias Beckett', 'Tulon Voidgazer', 'Tup', 'U9-C4', 'Unkar Plutt', 'Val Beckett', 'Vanden Willard', 'Vice Admiral Amilyn Holdo', 'Vober Dand', 'WAC-47', 'Wag Too', 'Wald', 'Walrus Man', 'Warok', 'Wat Tambor', 'Watto', 'Wedge Antilles', 'Wes Janson', 'Wicket W. Warrick', 'Wilhuff Tarkin', 'Wollivan', 'Wuher', 'Wullf Yularen', 'Xamuel Lennox', 'Yaddle', 'Yarael Poof', 'Yoda', 'Zam Wesell', 'Zev Senesca', 'Ziro the Hutt', 'Zuckuss'];
var dummyLookupService = {
  search: function search(string, callback) {
    setTimeout(function () {
      var results = dummyMentionsData.filter(function (mention) {
        return mention.toLowerCase().includes(string.toLowerCase());
      });
      if (results.length === 0) {
        callback(null);
      } else {
        callback(results);
      }
    }, 500);
  }
};
function useMentionLookupService(mentionString) {
  var _useState = React.useState(null),
    results = _useState[0],
    setResults = _useState[1];
  React.useEffect(function () {
    var cachedResults = mentionsCache.get(mentionString);
    if (cachedResults === null) {
      return;
    } else if (cachedResults !== undefined) {
      setResults(cachedResults);
      return;
    }
    mentionsCache.set(mentionString, null);
    dummyLookupService.search(mentionString, function (newResults) {
      mentionsCache.set(mentionString, newResults);
      setResults(newResults);
    });
  }, [mentionString]);
  return results;
}
function MentionsTypeaheadItem(_ref) {
  var index = _ref.index,
    isSelected = _ref.isSelected,
    onClick = _ref.onClick,
    onMouseEnter = _ref.onMouseEnter,
    result = _ref.result;
  var liRef = React.useRef(null);
  var className = 'item';
  if (isSelected) {
    className += ' selected';
  }
  return React.createElement("li", {
    key: result,
    tabIndex: -1,
    className: className,
    ref: liRef,
    role: "option",
    "aria-selected": isSelected,
    id: 'typeahead-item-' + index,
    onMouseEnter: onMouseEnter,
    onClick: onClick
  }, result);
}
function MentionsTypeahead(_ref2) {
  var close = _ref2.close,
    editor = _ref2.editor,
    resolution = _ref2.resolution;
  var divRef = React.useRef(null);
  var match = resolution.match;
  var results = useMentionLookupService(match.matchingString);
  var _useState2 = React.useState(null),
    selectedIndex = _useState2[0],
    setSelectedIndex = _useState2[1];
  React.useEffect(function () {
    var div = divRef.current;
    var rootElement = editor.getRootElement();
    if (results !== null && div !== null && rootElement !== null) {
      var range = resolution.range;
      var _range$getBoundingCli = range.getBoundingClientRect(),
        left = _range$getBoundingCli.left,
        top = _range$getBoundingCli.top,
        height = _range$getBoundingCli.height;
      div.style.top = top + height + 2 + "px";
      div.style.left = left - 14 + "px";
      div.style.display = 'block';
      rootElement.setAttribute('aria-controls', 'mentions-typeahead');
      return function () {
        div.style.display = 'none';
        rootElement.removeAttribute('aria-controls');
      };
    }
  }, [editor, resolution, results]);
  var applyCurrentSelected = React.useCallback(function () {
    if (results === null || selectedIndex === null) {
      return;
    }
    var selectedEntry = results[selectedIndex];
    close();
    createMentionNodeFromSearchResult(editor, selectedEntry, match);
  }, [close, match, editor, results, selectedIndex]);
  var updateSelectedIndex = React.useCallback(function (index) {
    var rootElem = editor.getRootElement();
    if (rootElem !== null) {
      rootElem.setAttribute('aria-activedescendant', 'typeahead-item-' + index);
      setSelectedIndex(index);
    }
  }, [editor]);
  React.useEffect(function () {
    return function () {
      var rootElem = editor.getRootElement();
      if (rootElem !== null) {
        rootElem.removeAttribute('aria-activedescendant');
      }
    };
  }, [editor]);
  useLayoutEffectImpl(function () {
    if (results === null) {
      setSelectedIndex(null);
    } else if (selectedIndex === null) {
      updateSelectedIndex(0);
    }
  }, [results, selectedIndex, updateSelectedIndex]);
  React.useEffect(function () {
    return utils.mergeRegister(editor.registerCommand(lexical.KEY_ARROW_DOWN_COMMAND, function (payload) {
      var event = payload;
      if (results !== null && selectedIndex !== null) {
        if (selectedIndex < SUGGESTION_LIST_LENGTH_LIMIT - 1 && selectedIndex !== results.length - 1) {
          updateSelectedIndex(selectedIndex + 1);
        }
        event.preventDefault();
        event.stopImmediatePropagation();
      }
      return true;
    }, lexical.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical.KEY_ARROW_UP_COMMAND, function (payload) {
      var event = payload;
      if (results !== null && selectedIndex !== null) {
        if (selectedIndex !== 0) {
          updateSelectedIndex(selectedIndex - 1);
        }
        event.preventDefault();
        event.stopImmediatePropagation();
      }
      return true;
    }, lexical.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical.KEY_ESCAPE_COMMAND, function (payload) {
      var event = payload;
      if (results === null || selectedIndex === null) {
        return false;
      }
      event.preventDefault();
      event.stopImmediatePropagation();
      close();
      return true;
    }, lexical.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical.KEY_TAB_COMMAND, function (payload) {
      var event = payload;
      if (results === null || selectedIndex === null) {
        return false;
      }
      event.preventDefault();
      event.stopImmediatePropagation();
      applyCurrentSelected();
      return true;
    }, lexical.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical.KEY_ENTER_COMMAND, function (event) {
      if (results === null || selectedIndex === null) {
        return false;
      }
      if (event !== null) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
      applyCurrentSelected();
      return true;
    }, lexical.COMMAND_PRIORITY_LOW));
  }, [applyCurrentSelected, close, editor, results, selectedIndex, updateSelectedIndex]);
  if (results === null) {
    return null;
  }
  return React.createElement("div", {
    "aria-label": "Suggested mentions",
    id: "mentions-typeahead",
    ref: divRef,
    role: "listbox"
  }, React.createElement("ul", null, results.slice(0, SUGGESTION_LIST_LENGTH_LIMIT).map(function (result, i) {
    return React.createElement(MentionsTypeaheadItem, {
      index: i,
      isSelected: i === selectedIndex,
      onClick: function onClick() {
        setSelectedIndex(i);
        applyCurrentSelected();
      },
      onMouseEnter: function onMouseEnter() {
        setSelectedIndex(i);
      },
      key: result,
      result: result
    });
  })));
}
function checkForCapitalizedNameMentions(text, minMatchLength) {
  var match = CapitalizedNameMentionsRegex.exec(text);
  if (match !== null) {
    var maybeLeadingWhitespace = match[1];
    var matchingString = match[2];
    if (matchingString != null && matchingString.length >= minMatchLength) {
      return {
        leadOffset: match.index + maybeLeadingWhitespace.length,
        matchingString: matchingString,
        replaceableString: matchingString
      };
    }
  }
  return null;
}
function checkForAtSignMentions(text, minMatchLength) {
  var match = AtSignMentionsRegex.exec(text);
  if (match === null) {
    match = AtSignMentionsRegexAliasRegex.exec(text);
  }
  if (match !== null) {
    var maybeLeadingWhitespace = match[1];
    var matchingString = match[3];
    if (matchingString.length >= minMatchLength) {
      return {
        leadOffset: match.index + maybeLeadingWhitespace.length,
        matchingString: matchingString,
        replaceableString: match[2]
      };
    }
  }
  return null;
}
function getPossibleMentionMatch(text) {
  var match = checkForAtSignMentions(text, 1);
  return match === null ? checkForCapitalizedNameMentions(text, 3) : match;
}
function getTextUpToAnchor(selection) {
  var anchor = selection.anchor;
  if (anchor.type !== 'text') {
    return null;
  }
  var anchorNode = anchor.getNode();
  if (!anchorNode.isSimpleText()) {
    return null;
  }
  var anchorOffset = anchor.offset;
  return anchorNode.getTextContent().slice(0, anchorOffset);
}
function tryToPositionRange(match, range) {
  var domSelection = window.getSelection();
  if (domSelection === null || !domSelection.isCollapsed) {
    return false;
  }
  var anchorNode = domSelection.anchorNode;
  var startOffset = match.leadOffset;
  var endOffset = domSelection.anchorOffset;
  try {
    if (anchorNode) {
      range.setStart(anchorNode, startOffset);
      range.setEnd(anchorNode, endOffset);
    }
  } catch (error) {
    return false;
  }
  return true;
}
function getMentionsTextToSearch(editor) {
  var text = null;
  editor.getEditorState().read(function () {
    var selection = lexical.$getSelection();
    if (!lexical.$isRangeSelection(selection)) {
      return;
    }
    text = getTextUpToAnchor(selection);
  });
  return text;
}
function getMentionOffset(documentText, entryText, offset) {
  var triggerOffset = offset;
  for (var ii = triggerOffset; ii <= entryText.length; ii++) {
    if (documentText.substr(-ii) === entryText.substr(0, ii)) {
      triggerOffset = ii;
    }
  }
  return triggerOffset;
}
function createMentionNodeFromSearchResult(editor, entryText, match) {
  editor.update(function () {
    var selection = lexical.$getSelection();
    if (!lexical.$isRangeSelection(selection) || !selection.isCollapsed()) {
      return;
    }
    var anchor = selection.anchor;
    if (anchor.type !== 'text') {
      return;
    }
    var anchorNode = anchor.getNode();
    if (!anchorNode.isSimpleText()) {
      return;
    }
    var selectionOffset = anchor.offset;
    var textContent = anchorNode.getTextContent().slice(0, selectionOffset);
    var characterOffset = match.replaceableString.length;
    var mentionOffset = getMentionOffset(textContent, entryText, characterOffset);
    var startOffset = selectionOffset - mentionOffset;
    if (startOffset < 0) {
      return;
    }
    var nodeToReplace;
    if (startOffset === 0) {
      var _anchorNode$splitText = anchorNode.splitText(selectionOffset);
      nodeToReplace = _anchorNode$splitText[0];
    } else {
      var _anchorNode$splitText2 = anchorNode.splitText(startOffset, selectionOffset);
      nodeToReplace = _anchorNode$splitText2[1];
    }
    var mentionNode = $createMentionNode(entryText);
    nodeToReplace.replace(mentionNode);
    mentionNode.select();
  });
}
function isSelectionOnEntityBoundary(editor, offset) {
  if (offset !== 0) {
    return false;
  }
  return editor.getEditorState().read(function () {
    var selection = lexical.$getSelection();
    if (lexical.$isRangeSelection(selection)) {
      var anchor = selection.anchor;
      var anchorNode = anchor.getNode();
      var prevSibling = anchorNode.getPreviousSibling();
      return lexical.$isTextNode(prevSibling) && prevSibling.isTextEntity();
    }
    return false;
  });
}
function useMentions(editor) {
  var _useState3 = React.useState(null),
    resolution = _useState3[0],
    setResolution = _useState3[1];
  React.useEffect(function () {
    if (!editor.hasNodes([MentionNode])) {
      throw new Error('MentionsPlugin: MentionNode not registered on editor');
    }
  }, [editor]);
  React.useEffect(function () {
    var activeRange = document.createRange();
    var previousText = null;
    var updateListener = function updateListener() {
      var range = activeRange;
      var text = getMentionsTextToSearch(editor);
      if (text === previousText || range === null) {
        return;
      }
      previousText = text;
      if (text === null) {
        return;
      }
      var match = getPossibleMentionMatch(text);
      if (match !== null && !isSelectionOnEntityBoundary(editor, match.leadOffset)) {
        var isRangePositioned = tryToPositionRange(match, range);
        if (isRangePositioned !== null) {
          React.startTransition(function () {
            return setResolution({
              match: match,
              range: range
            });
          });
          return;
        }
      }
      React.startTransition(function () {
        return setResolution(null);
      });
    };
    var removeUpdateListener = editor.registerUpdateListener(updateListener);
    return function () {
      activeRange = null;
      removeUpdateListener();
    };
  }, [editor]);
  var closeTypeahead = React.useCallback(function () {
    setResolution(null);
  }, []);
  return resolution === null || editor === null ? null : reactDom.createPortal(React.createElement(MentionsTypeahead, {
    close: closeTypeahead,
    resolution: resolution,
    editor: editor
  }), document.body);
}
function MentionsPlugin() {
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  return useMentions(editor);
}

function TableActionMenu(_ref) {
  var onClose = _ref.onClose,
    _tableCellNode = _ref.tableCellNode,
    setIsMenuOpen = _ref.setIsMenuOpen,
    contextRef = _ref.contextRef;
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  var dropDownRef = React.useRef(null);
  var _useState = React.useState(_tableCellNode),
    tableCellNode = _useState[0],
    updateTableCellNode = _useState[1];
  var _useState2 = React.useState({
      columns: 1,
      rows: 1
    }),
    selectionCounts = _useState2[0];
  React.useEffect(function () {
    return editor.registerMutationListener(table.TableCellNode, function (nodeMutations) {
      var nodeUpdated = nodeMutations.get(tableCellNode.getKey()) === 'updated';
      if (nodeUpdated) {
        editor.getEditorState().read(function () {
          updateTableCellNode(tableCellNode.getLatest());
        });
      }
    });
  }, [editor, tableCellNode]);
  React.useEffect(function () {
    editor.getEditorState().read(function () {
      var selection = lexical.$getSelection();
    });
  }, [editor]);
  React.useEffect(function () {
    var menuButtonElement = contextRef.current;
    var dropDownElement = dropDownRef.current;
    if (menuButtonElement != null && dropDownElement != null) {
      var menuButtonRect = menuButtonElement.getBoundingClientRect();
      dropDownElement.style.opacity = '1';
      dropDownElement.style.left = menuButtonRect.left + menuButtonRect.width + window.pageXOffset + 5 + "px";
      dropDownElement.style.top = menuButtonRect.top + window.pageYOffset + "px";
    }
  }, [contextRef, dropDownRef]);
  React.useEffect(function () {
    function handleClickOutside(event) {
      if (dropDownRef.current != null && contextRef.current != null && !dropDownRef.current.contains(event.target) && !contextRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener('click', handleClickOutside);
    return function () {
      return window.removeEventListener('click', handleClickOutside);
    };
  }, [setIsMenuOpen, contextRef]);
  var clearTableSelection = React.useCallback(function () {
    editor.update(function () {
      if (tableCellNode.isAttached()) {
        var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
        var tableElement = editor.getElementByKey(tableNode.getKey());
        if (!tableElement) {
          throw new Error('Expected to find tableElement in DOM');
        }
        var tableSelection = table.getTableSelectionFromTableElement(tableElement);
        if (tableSelection !== null) {
          tableSelection.clearHighlight();
        }
        tableNode.markDirty();
        updateTableCellNode(tableCellNode.getLatest());
      }
      lexical.$setSelection(null);
    });
  }, [editor, tableCellNode]);
  var insertTableRowAtSelection = React.useCallback(function (shouldInsertAfter) {
    editor.update(function () {
      var selection = lexical.$getSelection();
      var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var grid = table.$getElementGridForTableNode(editor, tableNode);
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, selectionCounts.rows, clearTableSelection, onClose]);
  var insertTableColumnAtSelection = React.useCallback(function (shouldInsertAfter) {
    editor.update(function () {
      var selection = lexical.$getSelection();
      var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, selectionCounts.columns, clearTableSelection, onClose]);
  var deleteTableRowAtSelection = React.useCallback(function () {
    editor.update(function () {
      var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableRowIndex = table.$getTableRowIndexFromTableCellNode(tableCellNode);
      table.$removeTableRowAtIndex(tableNode, tableRowIndex);
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  var deleteTableAtSelection = React.useCallback(function () {
    editor.update(function () {
      var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      tableNode.remove();
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  var deleteTableColumnAtSelection = React.useCallback(function () {
    editor.update(function () {
      var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableColumnIndex = table.$getTableColumnIndexFromTableCellNode(tableCellNode);
      table.$deleteTableColumn(tableNode, tableColumnIndex);
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  var toggleTableRowIsHeader = React.useCallback(function () {
    editor.update(function () {
      var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableRowIndex = table.$getTableRowIndexFromTableCellNode(tableCellNode);
      var tableRows = tableNode.getChildren();
      if (tableRowIndex >= tableRows.length || tableRowIndex < 0) {
        throw new Error('Expected table cell to be inside of table row.');
      }
      var tableRow = tableRows[tableRowIndex];
      if (!table.$isTableRowNode(tableRow)) {
        throw new Error('Expected table row');
      }
      tableRow.getChildren().forEach(function (tableCell) {
        if (!table.$isTableCellNode(tableCell)) {
          throw new Error('Expected table cell');
        }
        tableCell.toggleHeaderStyle(table.TableCellHeaderStates.ROW);
      });
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  var toggleTableColumnIsHeader = React.useCallback(function () {
    editor.update(function () {
      var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableColumnIndex = table.$getTableColumnIndexFromTableCellNode(tableCellNode);
      var tableRows = tableNode.getChildren();
      for (var r = 0; r < tableRows.length; r++) {
        var tableRow = tableRows[r];
        if (!table.$isTableRowNode(tableRow)) {
          throw new Error('Expected table row');
        }
        var tableCells = tableRow.getChildren();
        if (tableColumnIndex >= tableCells.length || tableColumnIndex < 0) {
          throw new Error('Expected table cell to be inside of table row.');
        }
        var tableCell = tableCells[tableColumnIndex];
        if (!table.$isTableCellNode(tableCell)) {
          throw new Error('Expected table cell');
        }
        tableCell.toggleHeaderStyle(table.TableCellHeaderStates.COLUMN);
      }
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  return reactDom.createPortal(React.createElement("div", {
    className: "dropdown",
    ref: dropDownRef,
    onClick: function onClick(e) {
      e.stopPropagation();
    }
  }, React.createElement("button", {
    className: "item",
    onClick: function onClick() {
      return insertTableRowAtSelection(false);
    }
  }, React.createElement("span", {
    className: "text"
  }, "Insert", ' ', selectionCounts.rows === 1 ? 'row' : selectionCounts.rows + " rows", ' ', "above")), React.createElement("button", {
    className: "item",
    onClick: function onClick() {
      return insertTableRowAtSelection(true);
    }
  }, React.createElement("span", {
    className: "text"
  }, "Insert", ' ', selectionCounts.rows === 1 ? 'row' : selectionCounts.rows + " rows", ' ', "below")), React.createElement("hr", null), React.createElement("button", {
    className: "item",
    onClick: function onClick() {
      return insertTableColumnAtSelection(false);
    }
  }, React.createElement("span", {
    className: "text"
  }, "Insert", ' ', selectionCounts.columns === 1 ? 'column' : selectionCounts.columns + " columns", ' ', "left")), React.createElement("button", {
    className: "item",
    onClick: function onClick() {
      return insertTableColumnAtSelection(true);
    }
  }, React.createElement("span", {
    className: "text"
  }, "Insert", ' ', selectionCounts.columns === 1 ? 'column' : selectionCounts.columns + " columns", ' ', "right")), React.createElement("hr", null), React.createElement("button", {
    className: "item",
    onClick: function onClick() {
      return deleteTableColumnAtSelection();
    }
  }, React.createElement("span", {
    className: "text"
  }, "Delete column")), React.createElement("button", {
    className: "item",
    onClick: function onClick() {
      return deleteTableRowAtSelection();
    }
  }, React.createElement("span", {
    className: "text"
  }, "Delete row")), React.createElement("button", {
    className: "item",
    onClick: function onClick() {
      return deleteTableAtSelection();
    }
  }, React.createElement("span", {
    className: "text"
  }, "Delete table")), React.createElement("hr", null), React.createElement("button", {
    className: "item",
    onClick: function onClick() {
      return toggleTableRowIsHeader();
    }
  }, React.createElement("span", {
    className: "text"
  }, (tableCellNode.__headerState & table.TableCellHeaderStates.ROW) === table.TableCellHeaderStates.ROW ? 'Remove' : 'Add', ' ', "row header")), React.createElement("button", {
    className: "item",
    onClick: function onClick() {
      return toggleTableColumnIsHeader();
    }
  }, React.createElement("span", {
    className: "text"
  }, (tableCellNode.__headerState & table.TableCellHeaderStates.COLUMN) === table.TableCellHeaderStates.COLUMN ? 'Remove' : 'Add', ' ', "column header"))), document.body);
}
function TableCellActionMenuContainer() {
  var _useLexicalComposerCo2 = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo2[0];
  var menuButtonRef = React.useRef(null);
  var menuRootRef = React.useRef(null);
  var _useState3 = React.useState(false),
    isMenuOpen = _useState3[0],
    setIsMenuOpen = _useState3[1];
  var _useState4 = React.useState(null),
    tableCellNode = _useState4[0],
    setTableMenuCellNode = _useState4[1];
  var moveMenu = React.useCallback(function () {
    var menu = menuButtonRef.current;
    var selection = lexical.$getSelection();
    var nativeSelection = window.getSelection();
    var activeElement = document.activeElement;
    if (selection == null || menu == null) {
      setTableMenuCellNode(null);
      return;
    }
    var rootElement = editor.getRootElement();
    if (lexical.$isRangeSelection(selection) && rootElement !== null && nativeSelection !== null && rootElement.contains(nativeSelection.anchorNode)) {
      var tableCellNodeFromSelection = table.$getTableCellNodeFromLexicalNode(selection.anchor.getNode());
      if (tableCellNodeFromSelection == null) {
        setTableMenuCellNode(null);
        return;
      }
      var tableCellParentNodeDOM = editor.getElementByKey(tableCellNodeFromSelection.getKey());
      if (tableCellParentNodeDOM == null) {
        setTableMenuCellNode(null);
        return;
      }
      setTableMenuCellNode(tableCellNodeFromSelection);
    } else if (!activeElement) {
      setTableMenuCellNode(null);
    }
  }, [editor]);
  React.useEffect(function () {
    return editor.registerUpdateListener(function () {
      editor.getEditorState().read(function () {
        moveMenu();
      });
    });
  });
  React.useEffect(function () {
    var menuButtonDOM = menuButtonRef.current;
    if (menuButtonDOM != null && tableCellNode != null) {
      var tableCellNodeDOM = editor.getElementByKey(tableCellNode.getKey());
      if (tableCellNodeDOM != null) {
        var tableCellRect = tableCellNodeDOM.getBoundingClientRect();
        var menuRect = menuButtonDOM.getBoundingClientRect();
        menuButtonDOM.style.opacity = '1';
        menuButtonDOM.style.left = tableCellRect.left + window.pageXOffset - menuRect.width + tableCellRect.width - 10 + "px";
        menuButtonDOM.style.top = tableCellRect.top + window.pageYOffset + 5 + "px";
      } else {
        menuButtonDOM.style.opacity = '0';
      }
    }
  }, [menuButtonRef, tableCellNode, editor]);
  var prevTableCellDOM = React.useRef(tableCellNode);
  React.useEffect(function () {
    if (prevTableCellDOM.current !== tableCellNode) {
      setIsMenuOpen(false);
    }
    prevTableCellDOM.current = tableCellNode;
  }, [prevTableCellDOM, tableCellNode]);
  return React.createElement("div", {
    className: "table-cell-action-button-container",
    ref: menuButtonRef
  }, tableCellNode != null && React.createElement(React.Fragment, null, React.createElement("button", {
    className: "table-cell-action-button chevron-down",
    onClick: function onClick(e) {
      e.stopPropagation();
      setIsMenuOpen(!isMenuOpen);
    },
    ref: menuRootRef
  }, React.createElement("i", {
    className: "chevron-down"
  })), isMenuOpen && React.createElement(TableActionMenu, {
    contextRef: menuRootRef,
    setIsMenuOpen: setIsMenuOpen,
    onClose: function onClose() {
      return setIsMenuOpen(false);
    },
    tableCellNode: tableCellNode
  })));
}
function TableActionMenuPlugin() {
  return reactDom.createPortal(React.createElement(TableCellActionMenuContainer, null), document.body);
}

var imageCache = /*#__PURE__*/new Set();
function useSuspenseImage(src) {
  if (!imageCache.has(src)) {
    throw new Promise(function (resolve) {
      var img = new Image();
      img.src = src;
      img.onload = function () {
        imageCache.add(src);
        resolve(null);
      };
    });
  }
}
function convertImageElement(domNode) {
  if (domNode instanceof HTMLImageElement) {
    var altText = domNode.alt,
      src = domNode.src;
    var node = $createImageNode({
      altText: altText,
      src: src
    });
    return {
      node: node
    };
  }
  return null;
}
function LazyImage(_ref) {
  var altText = _ref.altText,
    className = _ref.className,
    imageRef = _ref.imageRef,
    src = _ref.src,
    width = _ref.width,
    height = _ref.height,
    maxWidth = _ref.maxWidth;
  useSuspenseImage(src);
  return React.createElement("img", {
    className: className || undefined,
    src: src,
    alt: altText,
    ref: imageRef,
    style: {
      height: height,
      maxWidth: maxWidth,
      width: width
    },
    draggable: "false"
  });
}
function ImageComponent(_ref2) {
  var src = _ref2.src,
    altText = _ref2.altText,
    nodeKey = _ref2.nodeKey,
    width = _ref2.width,
    height = _ref2.height,
    maxWidth = _ref2.maxWidth,
    resizable = _ref2.resizable,
    showCaption = _ref2.showCaption,
    caption = _ref2.caption;
  var ref = React.useRef(null);
  var _useLexicalNodeSelect = useLexicalNodeSelection.useLexicalNodeSelection(nodeKey),
    isSelected = _useLexicalNodeSelect[0],
    setSelected = _useLexicalNodeSelect[1],
    clearSelection = _useLexicalNodeSelect[2];
  var _useState = React.useState(false),
    isResizing = _useState[0],
    setIsResizing = _useState[1];
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  var _useState2 = React.useState(null),
    selection = _useState2[0];
  var onDelete = React.useCallback(function (payload) {
    if (isSelected && lexical.$isNodeSelection(lexical.$getSelection())) {
      var event = payload;
      event.preventDefault();
      var node = lexical.$getNodeByKey(nodeKey);
      if ($isImageNode(node)) {
        node.remove();
      }
      setSelected(false);
    }
    return false;
  }, [isSelected, nodeKey, setSelected]);
  React.useEffect(function () {
    return utils.mergeRegister(editor.registerCommand(lexical.CLICK_COMMAND, function (payload) {
      var event = payload;
      if (isResizing) {
        return true;
      }
      if (event.target === ref.current) {
        if (!event.shiftKey) {
          clearSelection();
        }
        setSelected(!isSelected);
        return true;
      }
      return false;
    }, lexical.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical.KEY_DELETE_COMMAND, onDelete, lexical.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical.KEY_BACKSPACE_COMMAND, onDelete, lexical.COMMAND_PRIORITY_LOW));
  }, [clearSelection, editor, isResizing, isSelected, nodeKey, onDelete, setSelected]);
  var setShowCaption = function setShowCaption() {
    editor.update(function () {
      var node = lexical.$getNodeByKey(nodeKey);
      if ($isImageNode(node)) {
        node.setShowCaption(true);
      }
    });
  };
  var onResizeEnd = function onResizeEnd(nextWidth, nextHeight) {
    setTimeout(function () {
      setIsResizing(false);
    }, 200);
    editor.update(function () {
      var node = lexical.$getNodeByKey(nodeKey);
      if ($isImageNode(node)) {
        node.setWidthAndHeight(nextWidth, nextHeight);
      }
    });
  };
  var onResizeStart = function onResizeStart() {
    setIsResizing(true);
  };
  var _useSharedHistoryCont = useSharedHistoryContext();
  var _useSettings = useSettings();
  var draggable = isSelected && lexical.$isNodeSelection(selection);
  var isFocused = lexical.$isNodeSelection(selection) && (isSelected || isResizing);
  return React.createElement(React.Suspense, {
    fallback: null
  }, React.createElement(React.Fragment, null, React.createElement("div", {
    draggable: draggable
  }, React.createElement(LazyImage, {
    className: isFocused ? 'focused' : null,
    src: src,
    altText: altText,
    imageRef: ref,
    width: width,
    height: height,
    maxWidth: maxWidth
  })), showCaption && React.createElement("div", {
    className: "image-caption-container"
  }, React.createElement(LexicalNestedComposer.LexicalNestedComposer, {
    initialEditor: caption
  }, React.createElement(MentionsPlugin, null), React.createElement(LexicalTablePlugin.TablePlugin, null), React.createElement(TableActionMenuPlugin, null), React.createElement(ImagesPlugin, null), React.createElement(LexicalLinkPlugin.LinkPlugin, null), React.createElement(EmojisPlugin, null), React.createElement(LexicalHashtagPlugin.HashtagPlugin, null), React.createElement(KeywordsPlugin, null))), resizable && isFocused && React.createElement(ImageResizer, {
    showCaption: showCaption,
    setShowCaption: setShowCaption,
    editor: editor,
    imageRef: ref,
    maxWidth: maxWidth,
    onResizeStart: onResizeStart,
    onResizeEnd: onResizeEnd
  })));
}
var ImageNode = /*#__PURE__*/function (_DecoratorNode) {
  _inheritsLoose(ImageNode, _DecoratorNode);
  function ImageNode(src, altText, maxWidth, width, height, showCaption, caption, key) {
    var _this;
    _this = _DecoratorNode.call(this, key) || this;
    _this.__src = src;
    _this.__altText = altText;
    _this.__maxWidth = maxWidth;
    _this.__width = width || 'inherit';
    _this.__height = height || 'inherit';
    _this.__showCaption = showCaption || false;
    _this.__caption = caption || lexical.createEditor();
    return _this;
  }
  ImageNode.getType = function getType() {
    return 'image';
  };
  ImageNode.clone = function clone(node) {
    return new ImageNode(node.__src, node.__altText, node.__maxWidth, node.__width, node.__height, node.__showCaption, node.__caption, node.__key);
  };
  ImageNode.importJSON = function importJSON(serializedNode) {
    var altText = serializedNode.altText,
      height = serializedNode.height,
      width = serializedNode.width,
      maxWidth = serializedNode.maxWidth,
      caption = serializedNode.caption,
      src = serializedNode.src,
      showCaption = serializedNode.showCaption;
    var node = $createImageNode({
      altText: altText,
      height: height,
      maxWidth: maxWidth,
      showCaption: showCaption,
      src: src,
      width: width
    });
    var nestedEditor = node.__caption;
    var editorState = nestedEditor.parseEditorState(caption.editorState);
    if (!editorState.isEmpty()) {
      nestedEditor.setEditorState(editorState);
    }
    return node;
  };
  var _proto = ImageNode.prototype;
  _proto.exportDOM = function exportDOM() {
    var element = document.createElement('img');
    element.setAttribute('src', this.__src);
    element.setAttribute('alt', this.__altText);
    return {
      element: element
    };
  };
  ImageNode.importDOM = function importDOM() {
    return {
      img: function img(node) {
        return {
          conversion: convertImageElement,
          priority: 0
        };
      }
    };
  };
  _proto.exportJSON = function exportJSON() {
    return {
      altText: this.getAltText(),
      caption: this.__caption.toJSON(),
      height: this.__height === 'inherit' ? 0 : this.__height,
      maxWidth: this.__maxWidth,
      showCaption: this.__showCaption,
      src: this.getSrc(),
      type: 'image',
      version: 1,
      width: this.__width === 'inherit' ? 0 : this.__width
    };
  };
  _proto.setWidthAndHeight = function setWidthAndHeight(width, height) {
    var writable = this.getWritable();
    writable.__width = width;
    writable.__height = height;
  };
  _proto.setShowCaption = function setShowCaption(showCaption) {
    var writable = this.getWritable();
    writable.__showCaption = showCaption;
  };
  _proto.createDOM = function createDOM(config) {
    var span = document.createElement('span');
    var theme = config.theme;
    var className = theme.image;
    if (className !== undefined) {
      span.className = className;
    }
    return span;
  };
  _proto.updateDOM = function updateDOM() {
    return false;
  };
  _proto.getSrc = function getSrc() {
    return this.__src;
  };
  _proto.getAltText = function getAltText() {
    return this.__altText;
  };
  _proto.decorate = function decorate() {
    return React.createElement(ImageComponent, {
      src: this.__src,
      altText: this.__altText,
      width: this.__width,
      height: this.__height,
      maxWidth: this.__maxWidth,
      nodeKey: this.getKey(),
      showCaption: this.__showCaption,
      caption: this.__caption,
      resizable: true
    });
  };
  return ImageNode;
}(lexical.DecoratorNode);
function $createImageNode(_ref3) {
  var altText = _ref3.altText,
    height = _ref3.height,
    _ref3$maxWidth = _ref3.maxWidth,
    maxWidth = _ref3$maxWidth === void 0 ? 500 : _ref3$maxWidth,
    src = _ref3.src,
    width = _ref3.width,
    showCaption = _ref3.showCaption,
    caption = _ref3.caption,
    key = _ref3.key;
  return new ImageNode(src, altText, maxWidth, width, height, showCaption, caption, key);
}
function $isImageNode(node) {
  return node instanceof ImageNode;
}

var INSERT_IMAGE_COMMAND = /*#__PURE__*/lexical.createCommand();
function ImagesPlugin() {
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  React.useEffect(function () {
    if (!editor.hasNodes([ImageNode])) {
      throw new Error('ImagesPlugin: ImageNode not registered on editor');
    }
    return utils.mergeRegister(editor.registerCommand(INSERT_IMAGE_COMMAND, function (payload) {
      var selection = lexical.$getSelection();
      if (lexical.$isRangeSelection(selection)) {
        if (lexical.$isRootNode(selection.anchor.getNode())) {
          selection.insertParagraph();
        }
        var imageNode = $createImageNode(payload);
        selection.insertNodes([imageNode]);
      }
      return true;
    }, lexical.COMMAND_PRIORITY_EDITOR), editor.registerCommand(lexical.DRAGSTART_COMMAND, function (event) {
      return onDragStart(event);
    }, lexical.COMMAND_PRIORITY_HIGH), editor.registerCommand(lexical.DRAGOVER_COMMAND, function (event) {
      return onDragover(event);
    }, lexical.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical.DROP_COMMAND, function (event) {
      return onDrop(event, editor);
    }, lexical.COMMAND_PRIORITY_HIGH));
  }, [editor]);
  return null;
}
var TRANSPARENT_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
var img = /*#__PURE__*/document.createElement('img');
img.src = TRANSPARENT_IMAGE;
function onDragStart(event) {
  var node = getImageNodeInSelection();
  if (!node) {
    return false;
  }
  var dataTransfer = event.dataTransfer;
  if (!dataTransfer) {
    return false;
  }
  dataTransfer.setData('text/plain', '_');
  dataTransfer.setDragImage(img, 0, 0);
  dataTransfer.setData('application/x-lexical-drag', JSON.stringify({
    data: {
      altText: node.__altText,
      caption: node.__caption,
      height: node.__height,
      key: node.getKey(),
      maxWidth: node.__maxWidth,
      showCaption: node.__showCaption,
      src: node.__src,
      width: node.__width
    },
    type: 'image'
  }));
  return true;
}
function onDragover(event) {
  var node = getImageNodeInSelection();
  if (!node) {
    return false;
  }
  if (!canDropImage(event)) {
    event.preventDefault();
  }
  return true;
}
function onDrop(event, editor) {
  var node = getImageNodeInSelection();
  if (!node) {
    return false;
  }
  var data = getDragImageData(event);
  if (!data) {
    return false;
  }
  event.preventDefault();
  if (canDropImage(event)) {
    var range = getDragSelection(event);
    node.remove();
    var rangeSelection = lexical.$createRangeSelection();
    if (range !== null && range !== undefined) {
      rangeSelection.applyDOMRange(range);
    }
    lexical.$setSelection(rangeSelection);
    editor.dispatchCommand(INSERT_IMAGE_COMMAND, data);
  }
  return true;
}
function getImageNodeInSelection() {
  var selection = lexical.$getSelection();
  if (!lexical.$isNodeSelection(selection)) {
    return null;
  }
  var nodes = selection.getNodes();
  var node = nodes[0];
  return $isImageNode(node) ? node : null;
}
function getDragImageData(event) {
  var _event$dataTransfer;
  var dragData = (_event$dataTransfer = event.dataTransfer) == null ? void 0 : _event$dataTransfer.getData('application/x-lexical-drag');
  if (!dragData) {
    return null;
  }
  var _JSON$parse = JSON.parse(dragData),
    type = _JSON$parse.type,
    data = _JSON$parse.data;
  if (type !== 'image') {
    return null;
  }
  return data;
}
function canDropImage(event) {
  var target = event.target;
  return !!(target && target instanceof HTMLElement && !target.closest('code, span.editor-image') && target.parentElement && target.parentElement.closest('div.ContentEditable__root'));
}
function getDragSelection(event) {
  var range;
  var domSelection = getSelection();
  if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(event.clientX, event.clientY);
  } else if (event.rangeParent && domSelection !== null) {
    domSelection.collapse(event.rangeParent, event.rangeOffset || 0);
    range = domSelection.getRangeAt(0);
  } else {
    throw Error("Cannot get the selection when dragging");
  }
  return range;
}

function getElementNodesInSelection(selection) {
  var nodesInSelection = selection.getNodes();
  if (nodesInSelection.length === 0) {
    return new Set([selection.anchor.getNode().getParentOrThrow(), selection.focus.getNode().getParentOrThrow()]);
  }
  return new Set(nodesInSelection.map(function (n) {
    return lexical.$isElementNode(n) ? n : n.getParentOrThrow();
  }));
}
function isIndentPermitted(maxDepth) {
  var selection = lexical.$getSelection();
  if (!lexical.$isRangeSelection(selection)) {
    return false;
  }
  var elementNodesInSelection = getElementNodesInSelection(selection);
  var totalDepth = 0;
  for (var _iterator = _createForOfIteratorHelperLoose(elementNodesInSelection), _step; !(_step = _iterator()).done;) {
    var elementNode = _step.value;
    if (list.$isListNode(elementNode)) {
      totalDepth = Math.max(list.$getListDepth(elementNode) + 1, totalDepth);
    } else if (list.$isListItemNode(elementNode)) {
      var parent = elementNode.getParent();
      if (!list.$isListNode(parent)) {
        throw new Error('ListMaxIndentLevelPlugin: A ListItemNode must have a ListNode for a parent.');
      }
      totalDepth = Math.max(list.$getListDepth(parent) + 1, totalDepth);
    }
  }
  return totalDepth <= maxDepth;
}
function ListMaxIndentLevelPlugin(_ref) {
  var maxDepth = _ref.maxDepth;
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  React.useEffect(function () {
    return editor.registerCommand(lexical.INDENT_CONTENT_COMMAND, function () {
      return !isIndentPermitted(maxDepth != null ? maxDepth : 7);
    }, lexical.COMMAND_PRIORITY_CRITICAL);
  }, [editor, maxDepth]);
  return null;
}

function MaxLengthPlugin(_ref) {
  var maxLength = _ref.maxLength;
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  React.useEffect(function () {
    var lastRestoredEditorState = null;
    return editor.registerNodeTransform(lexical.RootNode, function (rootNode) {
      var selection$1 = lexical.$getSelection();
      if (!lexical.$isRangeSelection(selection$1) || !selection$1.isCollapsed()) {
        return;
      }
      var prevEditorState = editor.getEditorState();
      var prevTextContent = prevEditorState.read(function () {
        return rootNode.getTextContent();
      });
      var textContent = rootNode.getTextContent();
      if (prevTextContent !== textContent) {
        var textLength = textContent.length;
        var delCount = textLength - maxLength;
        var anchor = selection$1.anchor;
        if (delCount > 0) {
          if (prevTextContent.length === maxLength && lastRestoredEditorState !== prevEditorState) {
            lastRestoredEditorState = prevEditorState;
            utils.$restoreEditorState(editor, prevEditorState);
          } else {
            selection.trimTextContentFromAnchor(editor, anchor, delCount);
          }
        }
      }
    });
  }, [editor, maxLength]);
  return null;
}

function createUID() {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
}
function createPollOption(text) {
  if (text === void 0) {
    text = '';
  }
  return {
    text: text,
    uid: createUID(),
    votes: []
  };
}
function cloneOption(option, text, votes) {
  return {
    text: text,
    uid: option.uid,
    votes: votes || Array.from(option.votes)
  };
}
function getTotalVotes(options) {
  return options.reduce(function (totalVotes, next) {
    return totalVotes + next.votes.length;
  }, 0);
}
function PollOptionComponent(_ref) {
  var option = _ref.option,
    index = _ref.index,
    options = _ref.options,
    totalVotes = _ref.totalVotes,
    withPollNode = _ref.withPollNode;
  var checkboxRef = React.useRef(null);
  var votesArray = option.votes;
  var votes = votesArray.length;
  var text = option.text;
  return React.createElement("div", {
    className: "PollNode__optionContainer"
  }, React.createElement("div", {
    className: "PollNode__optionInputWrapper"
  }, React.createElement("div", {
    className: "PollNode__optionInputVotes",
    style: {
      width: (votes === 0 ? 0 : votes / totalVotes * 100) + "%"
    }
  }), React.createElement("span", {
    className: "PollNode__optionInputVotesCount"
  }, votes > 0 && (votes === 1 ? '1 vote' : votes + " votes")), React.createElement("input", {
    className: "PollNode__optionInput",
    type: "text",
    value: text,
    onChange: function onChange(e) {
      withPollNode(function (node) {
        node.setOptionText(option, e.target.value);
      });
    },
    placeholder: "Option " + (index + 1)
  })), React.createElement("button", {
    disabled: options.length < 3,
    className: joinClasses('PollNode__optionDelete', options.length < 3 && 'PollNode__optionDeleteDisabled'),
    "arial-label": "Remove",
    onClick: function onClick() {
      withPollNode(function (node) {
        node.deleteOption(option);
      });
    }
  }));
}
function PollComponent(_ref2) {
  var question = _ref2.question,
    options = _ref2.options,
    nodeKey = _ref2.nodeKey;
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  var totalVotes = React.useMemo(function () {
    return getTotalVotes(options);
  }, [options]);
  var _useLexicalNodeSelect = useLexicalNodeSelection.useLexicalNodeSelection(nodeKey),
    isSelected = _useLexicalNodeSelect[0],
    setSelected = _useLexicalNodeSelect[1],
    clearSelection = _useLexicalNodeSelect[2];
  var _useState = React.useState(null),
    selection = _useState[0];
  var ref = React.useRef(null);
  var onDelete = React.useCallback(function (payload) {
    if (isSelected && lexical.$isNodeSelection(lexical.$getSelection())) {
      var event = payload;
      event.preventDefault();
      var node = lexical.$getNodeByKey(nodeKey);
      if ($isPollNode(node)) {
        node.remove();
      }
      setSelected(false);
    }
    return false;
  }, [isSelected, nodeKey, setSelected]);
  React.useEffect(function () {
    return utils.mergeRegister(editor.registerCommand(lexical.CLICK_COMMAND, function (payload) {
      var event = payload;
      if (event.target === ref.current) {
        if (!event.shiftKey) {
          clearSelection();
        }
        setSelected(!isSelected);
        return true;
      }
      return false;
    }, lexical.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical.KEY_DELETE_COMMAND, onDelete, lexical.COMMAND_PRIORITY_LOW), editor.registerCommand(lexical.KEY_BACKSPACE_COMMAND, onDelete, lexical.COMMAND_PRIORITY_LOW));
  }, [clearSelection, editor, isSelected, nodeKey, onDelete, setSelected]);
  var withPollNode = function withPollNode(cb) {
    editor.update(function () {
      var node = lexical.$getNodeByKey(nodeKey);
      if ($isPollNode(node)) {
        cb(node);
      }
    });
  };
  var addOption = function addOption() {
    withPollNode(function (node) {
      node.addOption(createPollOption());
    });
  };
  var isFocused = lexical.$isNodeSelection(selection) && isSelected;
  return React.createElement("div", {
    className: "PollNode__container " + (isFocused ? 'focused' : ''),
    ref: ref
  }, React.createElement("div", {
    className: "PollNode__inner"
  }, React.createElement("h2", {
    className: "PollNode__heading"
  }, question), options.map(function (option, index) {
    var key = option.uid;
    return React.createElement(PollOptionComponent, {
      key: key,
      withPollNode: withPollNode,
      option: option,
      index: index,
      options: options,
      totalVotes: totalVotes
    });
  }), React.createElement("div", {
    className: "PollNode__footer"
  }, React.createElement(Button, {
    onClick: addOption,
    small: true
  }, "Add Option"))));
}
function convertPollElement(domNode) {
  var question = domNode.getAttribute('data-lexical-poll-question');
  if (question !== null) {
    var node = $createPollNode(question);
    return {
      node: node
    };
  }
  return null;
}
var PollNode = /*#__PURE__*/function (_DecoratorNode) {
  _inheritsLoose(PollNode, _DecoratorNode);
  function PollNode(question, options, key) {
    var _this;
    _this = _DecoratorNode.call(this, key) || this;
    _this.__question = question;
    _this.__options = options || [createPollOption(), createPollOption()];
    return _this;
  }
  PollNode.getType = function getType() {
    return 'poll';
  };
  PollNode.clone = function clone(node) {
    return new PollNode(node.__question, node.__options, node.__key);
  };
  PollNode.importJSON = function importJSON(serializedNode) {
    var node = $createPollNode(serializedNode.question);
    serializedNode.options.forEach(node.addOption);
    return node;
  };
  var _proto = PollNode.prototype;
  _proto.exportJSON = function exportJSON() {
    return {
      options: this.__options,
      question: this.__question,
      type: 'poll',
      version: 1
    };
  };
  _proto.addOption = function addOption(option) {
    var self = this.getWritable();
    var options = Array.from(self.__options);
    options.push(option);
    self.__options = options;
  };
  _proto.deleteOption = function deleteOption(option) {
    var self = this.getWritable();
    var options = Array.from(self.__options);
    var index = options.indexOf(option);
    options.splice(index, 1);
    self.__options = options;
  };
  _proto.setOptionText = function setOptionText(option, text) {
    var self = this.getWritable();
    var clonedOption = cloneOption(option, text);
    var options = Array.from(self.__options);
    var index = options.indexOf(option);
    options[index] = clonedOption;
    self.__options = options;
  };
  _proto.toggleVote = function toggleVote(option, clientID) {
    var self = this.getWritable();
    var votes = option.votes;
    var votesClone = Array.from(votes);
    var voteIndex = votes.indexOf(clientID);
    if (voteIndex === -1) {
      votesClone.push(clientID);
    } else {
      votesClone.splice(voteIndex, 1);
    }
    var clonedOption = cloneOption(option, option.text, votesClone);
    var options = Array.from(self.__options);
    var index = options.indexOf(option);
    options[index] = clonedOption;
    self.__options = options;
  };
  PollNode.importDOM = function importDOM() {
    return {
      span: function span(domNode) {
        if (!domNode.hasAttribute('data-lexical-poll-question')) {
          return null;
        }
        return {
          conversion: convertPollElement,
          priority: 2
        };
      }
    };
  };
  _proto.exportDOM = function exportDOM() {
    var element = document.createElement('span');
    element.setAttribute('data-lexical-poll-question', this.__question);
    return {
      element: element
    };
  };
  _proto.createDOM = function createDOM() {
    var elem = document.createElement('span');
    elem.style.display = 'inline-block';
    return elem;
  };
  _proto.updateDOM = function updateDOM() {
    return false;
  };
  _proto.decorate = function decorate() {
    return React.createElement(PollComponent, {
      question: this.__question,
      options: this.__options,
      nodeKey: this.__key
    });
  };
  return PollNode;
}(lexical.DecoratorNode);
function $createPollNode(question) {
  return new PollNode(question);
}
function $isPollNode(node) {
  return node instanceof PollNode;
}

var INSERT_POLL_COMMAND = /*#__PURE__*/lexical.createCommand();
function PollPlugin() {
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  React.useEffect(function () {
    if (!editor.hasNodes([PollNode])) {
      throw new Error('PollPlugin: PollNode not registered on editor');
    }
    return editor.registerCommand(INSERT_POLL_COMMAND, function (payload) {
      var selection = lexical.$getSelection();
      if (lexical.$isRangeSelection(selection)) {
        var question = payload;
        var pollNode = $createPollNode(question);
        if (lexical.$isRootNode(selection.anchor.getNode())) {
          selection.insertParagraph();
        }
        selection.insertNodes([pollNode]);
      }
      return true;
    }, lexical.COMMAND_PRIORITY_EDITOR);
  }, [editor]);
  return null;
}

var getElement = function getElement() {
  var element = document.getElementById('report-container');
  if (element === null) {
    element = document.createElement('div');
    element.id = 'report-container';
    element.style.position = 'fixed';
    element.style.top = '50%';
    element.style.left = '50%';
    element.style.fontSize = '32px';
    element.style.transform = 'translate(-50%, -50px)';
    element.style.padding = '20px';
    element.style.background = 'rgba(240, 240, 240, 0.4)';
    element.style.borderRadius = '20px';
    if (document.body) {
      document.body.appendChild(element);
    }
  }
  return element;
};
function useReport() {
  var timer = React.useRef(null);
  var cleanup = React.useCallback(function () {
    if (timer !== null) {
      clearTimeout(timer.current);
    }
    if (document.body) {
      document.body.removeChild(getElement());
    }
  }, []);
  React.useEffect(function () {
    return cleanup;
  }, [cleanup]);
  return React.useCallback(function (content) {
    console.log(content);
    var element = getElement();
    clearTimeout(timer.current);
    element.innerHTML = content;
    timer.current = setTimeout(cleanup, 1000);
    return timer.current;
  }, [cleanup]);
}

var SPEECH_TO_TEXT_COMMAND = /*#__PURE__*/lexical.createCommand();
var VOICE_COMMANDS = {
  '\n': function _(_ref) {
    var selection = _ref.selection;
    selection.insertParagraph();
  },
  redo: function redo(_ref2) {
    var editor = _ref2.editor;
    editor.dispatchCommand(lexical.REDO_COMMAND, undefined);
  },
  undo: function undo(_ref3) {
    var editor = _ref3.editor;
    editor.dispatchCommand(lexical.UNDO_COMMAND, undefined);
  }
};
var SUPPORT_SPEECH_RECOGNITION = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
function SpeechToTextPlugin() {
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  var _useState = React.useState(false),
    isEnabled = _useState[0],
    setIsEnabled = _useState[1];
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = React.useRef(null);
  var report = useReport();
  React.useEffect(function () {
    if (isEnabled && recognition.current === null) {
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.interimResults = true;
      recognition.current.addEventListener('result', function (event) {
        var resultItem = event.results.item(event.resultIndex);
        var _resultItem$item = resultItem.item(0),
          transcript = _resultItem$item.transcript;
        report(transcript);
        if (!resultItem.isFinal) {
          return;
        }
        editor.update(function () {
          var selection = lexical.$getSelection();
          if (lexical.$isRangeSelection(selection)) {
            var command = VOICE_COMMANDS[transcript.toLowerCase().trim()];
            if (command) {
              command({
                editor: editor,
                selection: selection
              });
            } else if (transcript.match(/\s*\n\s*/)) {
              selection.insertParagraph();
            } else {
              selection.insertText(transcript);
            }
          }
        });
      });
    }
    if (recognition.current) {
      if (isEnabled) {
        recognition.current.start();
      } else {
        recognition.current.stop();
      }
    }
    return function () {
      if (recognition.current !== null) {
        recognition.current.stop();
      }
    };
  }, [SpeechRecognition, editor, isEnabled, report]);
  React.useEffect(function () {
    return editor.registerCommand(SPEECH_TO_TEXT_COMMAND, function (_isEnabled) {
      setIsEnabled(_isEnabled);
      return true;
    }, lexical.COMMAND_PRIORITY_EDITOR);
  }, [editor]);
  return null;
}
var SpeechToTextPlugin$1 = SUPPORT_SPEECH_RECOGNITION ? SpeechToTextPlugin : function () {
  return null;
};

var COMMAND_PRIORITY_LOW = 1;
var TAB_TO_FOCUS_INTERVAL = 100;
var lastTabKeyDownTimestamp = 0;
var hasRegisteredKeyDownListener = false;
function registerKeyTimeStampTracker() {
  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 9) {
      lastTabKeyDownTimestamp = event.timeStamp;
    }
  }, true);
}
function TabFocusPlugin() {
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  React.useEffect(function () {
    if (!hasRegisteredKeyDownListener) {
      registerKeyTimeStampTracker();
      hasRegisteredKeyDownListener = true;
    }
    return editor.registerCommand(lexical.FOCUS_COMMAND, function (event) {
      var selection = lexical.$getSelection();
      if (lexical.$isRangeSelection(selection)) {
        if (lastTabKeyDownTimestamp + TAB_TO_FOCUS_INTERVAL > event.timeStamp) {
          lexical.$setSelection(selection.clone());
        }
      }
      return false;
    }, COMMAND_PRIORITY_LOW);
  }, [editor]);
  return null;
}

var MIN_ROW_HEIGHT = 33;
var MIN_COLUMN_WIDTH = 50;
function TableCellResizer(_ref) {
  var editor = _ref.editor;
  var targetRef = React.useRef(null);
  var resizerRef = React.useRef(null);
  var tableRectRef = React.useRef(null);
  var mouseStartPosRef = React.useRef(null);
  var _useState = React.useState(null),
    mouseCurrentPos = _useState[0],
    updateMouseCurrentPos = _useState[1];
  var _useState2 = React.useState(null),
    activeCell = _useState2[0],
    updateActiveCell = _useState2[1];
  var _useState3 = React.useState(false),
    isSelectingGrid = _useState3[0];
  var _useState4 = React.useState(null),
    draggingDirection = _useState4[0],
    updateDraggingDirection = _useState4[1];
  React.useEffect(function () {
    return editor.registerCommand(lexical.SELECTION_CHANGE_COMMAND, function (payload) {
      var selection = lexical.$getSelection();
      return false;
    }, lexical.COMMAND_PRIORITY_HIGH);
  });
  var resetState = React.useCallback(function () {
    updateActiveCell(null);
    targetRef.current = null;
    updateDraggingDirection(null);
    mouseStartPosRef.current = null;
    tableRectRef.current = null;
  }, []);
  React.useEffect(function () {
    var onMouseMove = function onMouseMove(event) {
      setTimeout(function () {
        var target = event.target;
        if (draggingDirection) {
          updateMouseCurrentPos({
            x: event.clientX,
            y: event.clientY
          });
          return;
        }
        if (resizerRef.current && resizerRef.current.contains(target)) {
          return;
        }
        if (targetRef.current !== target) {
          targetRef.current = target;
          var cell = table.getCellFromTarget(target);
          if (cell && activeCell !== cell) {
            editor.update(function () {
              var tableCellNode = lexical.$getNearestNodeFromDOMNode(cell.elem);
              if (!tableCellNode) {
                throw new Error('TableCellResizer: Table cell node not found.');
              }
              var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
              var tableElement = editor.getElementByKey(tableNode.getKey());
              if (!tableElement) {
                throw new Error('TableCellResizer: Table element not found.');
              }
              targetRef.current = target;
              tableRectRef.current = tableElement.getBoundingClientRect();
              updateActiveCell(cell);
            });
          } else if (cell == null) {
            resetState();
          }
        }
      }, 0);
    };
    document.addEventListener('mousemove', onMouseMove);
    return function () {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [activeCell, draggingDirection, editor, resetState]);
  var isHeightChanging = function isHeightChanging(direction) {
    if (direction === 'bottom') return true;
    return false;
  };
  var updateRowHeight = React.useCallback(function (newHeight) {
    if (!activeCell) {
      throw new Error('TableCellResizer: Expected active cell.');
    }
    editor.update(function () {
      var tableCellNode = lexical.$getNearestNodeFromDOMNode(activeCell.elem);
      if (!table.$isTableCellNode(tableCellNode)) {
        throw new Error('TableCellResizer: Table cell node not found.');
      }
      var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableRowIndex = table.$getTableRowIndexFromTableCellNode(tableCellNode);
      var tableRows = tableNode.getChildren();
      if (tableRowIndex >= tableRows.length || tableRowIndex < 0) {
        throw new Error('Expected table cell to be inside of table row.');
      }
      var tableRow = tableRows[tableRowIndex];
      if (!table.$isTableRowNode(tableRow)) {
        throw new Error('Expected table row');
      }
      tableRow.setHeight(newHeight);
    });
  }, [activeCell, editor]);
  var updateColumnWidth = React.useCallback(function (newWidth) {
    if (!activeCell) {
      throw new Error('TableCellResizer: Expected active cell.');
    }
    editor.update(function () {
      var tableCellNode = lexical.$getNearestNodeFromDOMNode(activeCell.elem);
      if (!table.$isTableCellNode(tableCellNode)) {
        throw new Error('TableCellResizer: Table cell node not found.');
      }
      var tableNode = table.$getTableNodeFromLexicalNodeOrThrow(tableCellNode);
      var tableColumnIndex = table.$getTableColumnIndexFromTableCellNode(tableCellNode);
      var tableRows = tableNode.getChildren();
      for (var r = 0; r < tableRows.length; r++) {
        var tableRow = tableRows[r];
        if (!table.$isTableRowNode(tableRow)) {
          throw new Error('Expected table row');
        }
        var tableCells = tableRow.getChildren();
        if (tableColumnIndex >= tableCells.length || tableColumnIndex < 0) {
          throw new Error('Expected table cell to be inside of table row.');
        }
        var tableCell = tableCells[tableColumnIndex];
        if (!table.$isTableCellNode(tableCell)) {
          throw new Error('Expected table cell');
        }
        tableCell.setWidth(newWidth);
      }
    });
  }, [activeCell, editor]);
  var toggleResize = React.useCallback(function (direction) {
    return function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (!activeCell) {
        throw new Error('TableCellResizer: Expected active cell.');
      }
      if (draggingDirection === direction && mouseStartPosRef.current) {
        var _mouseStartPosRef$cur = mouseStartPosRef.current,
          x = _mouseStartPosRef$cur.x,
          y = _mouseStartPosRef$cur.y;
        if (activeCell === null) {
          return;
        }
        var _activeCell$elem$getB = activeCell.elem.getBoundingClientRect(),
          height = _activeCell$elem$getB.height,
          width = _activeCell$elem$getB.width;
        if (isHeightChanging(direction)) {
          var heightChange = Math.abs(event.clientY - y);
          var isShrinking = direction === 'bottom' && y > event.clientY;
          updateRowHeight(Math.max(isShrinking ? height - heightChange : heightChange + height, MIN_ROW_HEIGHT));
        } else {
          var widthChange = Math.abs(event.clientX - x);
          var _isShrinking = direction === 'right' && x > event.clientX;
          updateColumnWidth(Math.max(_isShrinking ? width - widthChange : widthChange + width, MIN_COLUMN_WIDTH));
        }
        resetState();
      } else {
        mouseStartPosRef.current = {
          x: event.clientX,
          y: event.clientY
        };
        updateMouseCurrentPos(mouseStartPosRef.current);
        updateDraggingDirection(direction);
      }
    };
  }, [activeCell, draggingDirection, resetState, updateColumnWidth, updateRowHeight]);
  var getResizers = React.useCallback(function () {
    if (activeCell) {
      var _activeCell$elem$getB2 = activeCell.elem.getBoundingClientRect(),
        height = _activeCell$elem$getB2.height,
        width = _activeCell$elem$getB2.width,
        top = _activeCell$elem$getB2.top,
        left = _activeCell$elem$getB2.left;
      var styles = {
        bottom: {
          backgroundColor: 'none',
          cursor: 'row-resize',
          height: '10px',
          left: window.pageXOffset + left + "px",
          top: window.pageYOffset + top + height + "px",
          width: width + "px"
        },
        right: {
          backgroundColor: 'none',
          cursor: 'col-resize',
          height: height + "px",
          left: window.pageXOffset + left + width + "px",
          top: window.pageYOffset + top + "px",
          width: '10px'
        }
      };
      var tableRect = tableRectRef.current;
      if (draggingDirection && mouseCurrentPos && tableRect) {
        if (isHeightChanging(draggingDirection)) {
          styles[draggingDirection].left = window.pageXOffset + tableRect.left + "px";
          styles[draggingDirection].top = window.pageYOffset + mouseCurrentPos.y + "px";
          styles[draggingDirection].height = '3px';
          styles[draggingDirection].width = tableRect.width + "px";
        } else {
          styles[draggingDirection].top = window.pageYOffset + tableRect.top + "px";
          styles[draggingDirection].left = window.pageXOffset + mouseCurrentPos.x + "px";
          styles[draggingDirection].width = '3px';
          styles[draggingDirection].height = tableRect.height + "px";
        }
        styles[draggingDirection].backgroundColor = '#adf';
      }
      return styles;
    }
    return {
      bottom: null,
      left: null,
      right: null,
      top: null
    };
  }, [activeCell, draggingDirection, mouseCurrentPos]);
  var resizerStyles = getResizers();
  return React.createElement("div", {
    ref: resizerRef
  }, activeCell != null && !isSelectingGrid && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "TableCellResizer__resizer TableCellResizer__ui",
    style: resizerStyles.right || undefined,
    onMouseDown: toggleResize('right'),
    onMouseUp: toggleResize('right')
  }), React.createElement("div", {
    className: "TableCellResizer__resizer TableCellResizer__ui",
    style: resizerStyles.bottom || undefined,
    onMouseDown: toggleResize('bottom'),
    onMouseUp: toggleResize('bottom')
  })));
}
function TableCellResizerPlugin() {
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  return React.useMemo(function () {
    return reactDom.createPortal(React.createElement(TableCellResizer, {
      editor: editor
    }), document.body);
  }, [editor]);
}

function setPopupPosition(editor, rect, rootElementRect) {
  var top = rect.top - 8 + window.pageYOffset;
  var left = rect.left + 340 + window.pageXOffset - editor.offsetWidth + rect.width;
  if (left + editor.offsetWidth > rootElementRect.right) {
    left = rect.right - editor.offsetWidth;
    top = rect.top - 50 + window.pageYOffset;
  }
  if (left < 0) {
    left = rect.left;
    top = rect.bottom + 20;
  }
  if (rect.width >= rootElementRect.width - 25) {
    left = rect.left;
    top = rect.top - 50 + window.pageYOffset;
  }
  if (top < rootElementRect.top) {
    top = rect.bottom + 20;
  }
  editor.style.opacity = '1';
  editor.style.top = top + "px";
  editor.style.left = left + "px";
}
function TextFormatFloatingToolbar(_ref) {
  var editor = _ref.editor,
    isLink = _ref.isLink,
    isBold = _ref.isBold,
    isItalic = _ref.isItalic,
    isUnderline = _ref.isUnderline,
    isCode = _ref.isCode,
    isStrikethrough = _ref.isStrikethrough,
    isSubscript = _ref.isSubscript,
    isSuperscript = _ref.isSuperscript;
  var popupCharStylesEditorRef = React.useRef(null);
  var insertLink = React.useCallback(function () {
    if (!isLink) {
      editor.dispatchCommand(link.TOGGLE_LINK_COMMAND, 'https://');
    } else {
      editor.dispatchCommand(link.TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink]);
  var updateTextFormatFloatingToolbar = React.useCallback(function () {
    var selection = lexical.$getSelection();
    var popupCharStylesEditorElem = popupCharStylesEditorRef.current;
    var nativeSelection = window.getSelection();
    if (popupCharStylesEditorElem === null) {
      return;
    }
    var rootElement = editor.getRootElement();
    if (selection !== null && nativeSelection !== null && !nativeSelection.isCollapsed && rootElement !== null && rootElement.contains(nativeSelection.anchorNode)) {
      var domRange = nativeSelection.getRangeAt(0);
      var rootElementRect = rootElement.getBoundingClientRect();
      var rect;
      if (nativeSelection.anchorNode === rootElement) {
        var inner = rootElement;
        while (inner.firstElementChild != null) {
          inner = inner.firstElementChild;
        }
        rect = inner.getBoundingClientRect();
      } else {
        rect = domRange.getBoundingClientRect();
      }
      setPopupPosition(popupCharStylesEditorElem, rect, rootElementRect);
    }
  }, [editor]);
  React.useEffect(function () {
    var onResize = function onResize() {
      editor.getEditorState().read(function () {
        updateTextFormatFloatingToolbar();
      });
    };
    window.addEventListener('resize', onResize);
    return function () {
      window.removeEventListener('resize', onResize);
    };
  }, [editor, updateTextFormatFloatingToolbar]);
  React.useEffect(function () {
    editor.getEditorState().read(function () {
      updateTextFormatFloatingToolbar();
    });
    return utils.mergeRegister(editor.registerUpdateListener(function (_ref2) {
      var editorState = _ref2.editorState;
      editorState.read(function () {
        updateTextFormatFloatingToolbar();
      });
    }), editor.registerCommand(lexical.SELECTION_CHANGE_COMMAND, function () {
      updateTextFormatFloatingToolbar();
      return false;
    }, lexical.COMMAND_PRIORITY_LOW));
  }, [editor, updateTextFormatFloatingToolbar]);
  return React.createElement("div", {
    ref: popupCharStylesEditorRef,
    className: "floating-text-format-popup"
  }, React.createElement("button", {
    onClick: function onClick() {
      editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'bold');
    },
    className: 'popup-item spaced ' + (isBold ? 'active' : ''),
    "aria-label": "Format text as bold"
  }, React.createElement("i", {
    className: "format bold"
  })), React.createElement("button", {
    onClick: function onClick() {
      editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'italic');
    },
    className: 'popup-item spaced ' + (isItalic ? 'active' : ''),
    "aria-label": "Format text as italics"
  }, React.createElement("i", {
    className: "format italic"
  })), React.createElement("button", {
    onClick: function onClick() {
      editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'underline');
    },
    className: 'popup-item spaced ' + (isUnderline ? 'active' : ''),
    "aria-label": "Format text to underlined"
  }, React.createElement("i", {
    className: "format underline"
  })), React.createElement("button", {
    onClick: function onClick() {
      editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'strikethrough');
    },
    className: 'popup-item spaced ' + (isStrikethrough ? 'active' : ''),
    "aria-label": "Format text with a strikethrough"
  }, React.createElement("i", {
    className: "format strikethrough"
  })), React.createElement("button", {
    onClick: function onClick() {
      editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'subscript');
    },
    className: 'popup-item spaced ' + (isSubscript ? 'active' : ''),
    title: "Subscript",
    "aria-label": "Format Subscript"
  }, React.createElement("i", {
    className: "format subscript"
  })), React.createElement("button", {
    onClick: function onClick() {
      editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'superscript');
    },
    className: 'popup-item spaced ' + (isSuperscript ? 'active' : ''),
    title: "Superscript",
    "aria-label": "Format Superscript"
  }, React.createElement("i", {
    className: "format superscript"
  })), React.createElement("button", {
    onClick: function onClick() {
      editor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'code');
    },
    className: 'popup-item spaced ' + (isCode ? 'active' : ''),
    "aria-label": "Insert code block"
  }, React.createElement("i", {
    className: "format code"
  })), React.createElement("button", {
    onClick: insertLink,
    className: 'popup-item spaced ' + (isLink ? 'active' : ''),
    "aria-label": "Insert link"
  }, React.createElement("i", {
    className: "format link"
  })));
}
function getSelectedNode(selection$1) {
  var anchor = selection$1.anchor;
  var focus = selection$1.focus;
  var anchorNode = selection$1.anchor.getNode();
  var focusNode = selection$1.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  var isBackward = selection$1.isBackward();
  if (isBackward) {
    return selection.$isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return selection.$isAtNodeEnd(anchor) ? focusNode : anchorNode;
  }
}
function useTextFormatFloatingToolbar(editor) {
  var _useState = React.useState(false),
    isText = _useState[0],
    setIsText = _useState[1];
  var _useState2 = React.useState(false),
    isLink = _useState2[0],
    setIsLink = _useState2[1];
  var _useState3 = React.useState(false),
    isBold = _useState3[0],
    setIsBold = _useState3[1];
  var _useState4 = React.useState(false),
    isItalic = _useState4[0],
    setIsItalic = _useState4[1];
  var _useState5 = React.useState(false),
    isUnderline = _useState5[0],
    setIsUnderline = _useState5[1];
  var _useState6 = React.useState(false),
    isStrikethrough = _useState6[0],
    setIsStrikethrough = _useState6[1];
  var _useState7 = React.useState(false),
    isSubscript = _useState7[0],
    setIsSubscript = _useState7[1];
  var _useState8 = React.useState(false),
    isSuperscript = _useState8[0],
    setIsSuperscript = _useState8[1];
  var _useState9 = React.useState(false),
    isCode = _useState9[0],
    setIsCode = _useState9[1];
  var updatePopup = React.useCallback(function () {
    editor.getEditorState().read(function () {
      if (editor.isComposing()) {
        return;
      }
      var selection = lexical.$getSelection();
      var nativeSelection = window.getSelection();
      var rootElement = editor.getRootElement();
      if (nativeSelection !== null && (!lexical.$isRangeSelection(selection) || rootElement === null || !rootElement.contains(nativeSelection.anchorNode))) {
        setIsText(false);
        return;
      }
      if (!lexical.$isRangeSelection(selection)) {
        return;
      }
      var node = getSelectedNode(selection);
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
      setIsSubscript(selection.hasFormat('subscript'));
      setIsSuperscript(selection.hasFormat('superscript'));
      setIsCode(selection.hasFormat('code'));
      var parent = node.getParent();
      if (link.$isLinkNode(parent) || link.$isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }
      if (!code.$isCodeHighlightNode(selection.anchor.getNode()) && selection.getTextContent() !== '') {
        setIsText(lexical.$isTextNode(node));
      } else {
        setIsText(false);
      }
    });
  }, [editor]);
  React.useEffect(function () {
    document.addEventListener('selectionchange', updatePopup);
    return function () {
      document.removeEventListener('selectionchange', updatePopup);
    };
  }, [updatePopup]);
  React.useEffect(function () {
    return editor.registerUpdateListener(function () {
      updatePopup();
    });
  }, [editor, updatePopup]);
  if (!isText || isLink) {
    return null;
  }
  return reactDom.createPortal(React.createElement(TextFormatFloatingToolbar, {
    editor: editor,
    isLink: isLink,
    isBold: isBold,
    isItalic: isItalic,
    isStrikethrough: isStrikethrough,
    isSubscript: isSubscript,
    isSuperscript: isSuperscript,
    isUnderline: isUnderline,
    isCode: isCode
  }), document.body);
}
function TextFormatFloatingToolbarPlugin() {
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  return useTextFormatFloatingToolbar(editor);
}

var CAN_USE_DOM$1 = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
var IS_APPLE = CAN_USE_DOM$1 && /*#__PURE__*/ /Mac|iPod|iPhone|iPad/.test(navigator.platform);

function positionSticky(stickyElem, positioning) {
  var style = stickyElem.style;
  var rootElementRect = positioning.rootElementRect;
  var rectLeft = rootElementRect !== null ? rootElementRect.left : 0;
  var rectTop = rootElementRect !== null ? rootElementRect.top : 0;
  style.top = rectTop + positioning.y + 'px';
  style.left = rectLeft + positioning.x + 'px';
}
function StickyComponent(_ref) {
  var x = _ref.x,
    y = _ref.y,
    nodeKey = _ref.nodeKey,
    color = _ref.color;
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  var stickyContainerRef = React.useRef(null);
  var positioningRef = React.useRef({
    isDragging: false,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  });
  React.useEffect(function () {
    var position = positioningRef.current;
    position.x = x;
    position.y = y;
    var stickyContainer = stickyContainerRef.current;
    if (stickyContainer !== null) {
      positionSticky(stickyContainer, position);
    }
  }, [x, y]);
  React.useEffect(function () {
    var stickyContainer = stickyContainerRef.current;
    if (stickyContainer !== null) {
      setTimeout(function () {
        stickyContainer.style.setProperty('transition', 'top 0.3s ease 0s, left 0.3s ease 0s');
      }, 500);
    }
  }, []);
  var handlePointerMove = function handlePointerMove(event) {
    var stickyContainer = stickyContainerRef.current;
    var positioning = positioningRef.current;
    var rootElementRect = positioning.rootElementRect;
    if (stickyContainer !== null && positioning.isDragging && rootElementRect !== null) {
      positioning.x = event.pageX - positioning.offsetX - rootElementRect.left;
      positioning.y = event.pageY - positioning.offsetY - rootElementRect.top;
      positionSticky(stickyContainer, positioning);
    }
  };
  var handlePointerUp = function handlePointerUp(event) {
    var stickyContainer = stickyContainerRef.current;
    var positioning = positioningRef.current;
    if (stickyContainer !== null) {
      positioning.isDragging = false;
      stickyContainer.classList.remove('dragging');
      editor.update(function () {
        var node = lexical.$getNodeByKey(nodeKey);
        if ($isStickyNode(node)) {
          node.setPosition(positioning.x, positioning.y);
        }
      });
    }
    document.removeEventListener('pointermove', handlePointerMove);
    document.removeEventListener('pointerup', handlePointerUp);
  };
  var handleDelete = function handleDelete() {
    editor.update(function () {
      var node = lexical.$getNodeByKey(nodeKey);
      if ($isStickyNode(node)) {
        node.remove();
      }
    });
  };
  var handleColorChange = function handleColorChange() {
    editor.update(function () {
      var node = lexical.$getNodeByKey(nodeKey);
      if ($isStickyNode(node)) {
        node.toggleColor();
      }
    });
  };
  var _useSharedHistoryCont = useSharedHistoryContext();
  return React.createElement("div", {
    ref: stickyContainerRef,
    className: "sticky-note-container"
  }, React.createElement("div", {
    className: "sticky-note " + color,
    onPointerDown: function onPointerDown(event) {
      var stickyContainer = stickyContainerRef.current;
      if (stickyContainer == null || event.button === 2 || event.target !== stickyContainer.firstChild) {
        return;
      }
      var stickContainer = stickyContainer;
      var positioning = positioningRef.current;
      if (stickContainer !== null) {
        var _stickContainer$getBo = stickContainer.getBoundingClientRect(),
          top = _stickContainer$getBo.top,
          left = _stickContainer$getBo.left;
        positioning.offsetX = event.clientX - left;
        positioning.offsetY = event.clientY - top;
        positioning.isDragging = true;
        stickContainer.classList.add('dragging');
        document.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('pointerup', handlePointerUp);
        event.preventDefault();
      }
    }
  }, React.createElement("button", {
    onClick: handleDelete,
    className: "delete",
    "aria-label": "Delete sticky note",
    title: "Delete"
  }, "X"), React.createElement("button", {
    onClick: handleColorChange,
    className: "color",
    "aria-label": "Change sticky note color",
    title: "Color"
  }, React.createElement("i", {
    className: "bucket"
  }))));
}
var StickyNode = /*#__PURE__*/function (_DecoratorNode) {
  _inheritsLoose(StickyNode, _DecoratorNode);
  function StickyNode(x, y, color, caption, key) {
    var _this;
    _this = _DecoratorNode.call(this, key) || this;
    _this.__x = x;
    _this.__y = y;
    _this.__caption = caption || lexical.createEditor();
    _this.__color = color;
    return _this;
  }
  StickyNode.getType = function getType() {
    return 'sticky';
  };
  StickyNode.clone = function clone(node) {
    return new StickyNode(node.__x, node.__y, node.__color, node.__caption, node.__key);
  };
  StickyNode.importJSON = function importJSON(serializedNode) {
    return new StickyNode(serializedNode.xOffset, serializedNode.yOffset, serializedNode.color, serializedNode.caption);
  };
  var _proto = StickyNode.prototype;
  _proto.exportJSON = function exportJSON() {
    return {
      caption: this.__caption,
      color: this.__color,
      type: 'sticky',
      version: 1,
      xOffset: this.__x,
      yOffset: this.__y
    };
  };
  _proto.createDOM = function createDOM(config) {
    var div = document.createElement('div');
    div.style.display = 'contents';
    return div;
  };
  _proto.updateDOM = function updateDOM() {
    return false;
  };
  _proto.setPosition = function setPosition(x, y) {
    var writable = this.getWritable();
    writable.__x = x;
    writable.__y = y;
    lexical.$setSelection(null);
  };
  _proto.toggleColor = function toggleColor() {
    var writable = this.getWritable();
    writable.__color = writable.__color === 'pink' ? 'yellow' : 'pink';
  };
  _proto.decorate = function decorate(editor, config) {
    return reactDom.createPortal(React.createElement(StickyComponent, {
      color: this.__color,
      x: this.__x,
      y: this.__y,
      nodeKey: this.getKey(),
      caption: this.__caption
    }), document.body);
  };
  _proto.isIsolated = function isIsolated() {
    return true;
  };
  return StickyNode;
}(lexical.DecoratorNode);
function $isStickyNode(node) {
  return node instanceof StickyNode;
}
function $createStickyNode(xOffset, yOffset) {
  return new StickyNode(xOffset, yOffset, 'yellow');
}

var DropDownContext = /*#__PURE__*/React.createContext(null);
function DropDownItem(_ref) {
  var children = _ref.children,
    className = _ref.className,
    onClick = _ref.onClick,
    title = _ref.title;
  var ref = React.useRef(null);
  var dropDownContext = React.useContext(DropDownContext);
  if (dropDownContext === null) {
    throw new Error('DropDownItem must be used within a DropDown');
  }
  var registerItem = dropDownContext.registerItem;
  React.useEffect(function () {
    if (ref && ref.current) {
      registerItem(ref);
    }
  }, [ref, registerItem]);
  return React.createElement("button", {
    className: className,
    onClick: onClick,
    ref: ref,
    title: title
  }, children);
}
function DropDownItems(_ref2) {
  var children = _ref2.children,
    dropDownRef = _ref2.dropDownRef,
    onClose = _ref2.onClose;
  var _useState = React.useState(),
    items = _useState[0],
    setItems = _useState[1];
  var _useState2 = React.useState(),
    highlightedItem = _useState2[0],
    setHighlightedItem = _useState2[1];
  var registerItem = React.useCallback(function (itemRef) {
    setItems(function (prev) {
      return prev ? [].concat(prev, [itemRef]) : [itemRef];
    });
  }, [setItems]);
  var handleKeyDown = function handleKeyDown(event) {
    if (!items) return;
    var key = event.key;
    if (['Escape', 'ArrowUp', 'ArrowDown', 'Tab'].includes(key)) {
      event.preventDefault();
    }
    if (key === 'Escape' || key === 'Tab') {
      onClose();
    } else if (key === 'ArrowUp') {
      setHighlightedItem(function (prev) {
        if (!prev) return items[0];
        var index = items.indexOf(prev) - 1;
        return items[index === -1 ? items.length - 1 : index];
      });
    } else if (key === 'ArrowDown') {
      setHighlightedItem(function (prev) {
        if (!prev) return items[0];
        return items[items.indexOf(prev) + 1];
      });
    }
  };
  var contextValue = React.useMemo(function () {
    return {
      registerItem: registerItem
    };
  }, [registerItem]);
  React.useEffect(function () {
    if (items && !highlightedItem) {
      setHighlightedItem(items[0]);
    }
    if (highlightedItem && highlightedItem.current) {
      highlightedItem.current.focus();
    }
  }, [items, highlightedItem]);
  return React.createElement(DropDownContext.Provider, {
    value: contextValue
  }, React.createElement("div", {
    className: "dropdown",
    ref: dropDownRef,
    onKeyDown: handleKeyDown
  }, children));
}
function DropDown(_ref3) {
  var buttonLabel = _ref3.buttonLabel,
    buttonAriaLabel = _ref3.buttonAriaLabel,
    buttonClassName = _ref3.buttonClassName,
    buttonIconClassName = _ref3.buttonIconClassName,
    children = _ref3.children,
    stopCloseOnClickSelf = _ref3.stopCloseOnClickSelf;
  var dropDownRef = React.useRef(null);
  var buttonRef = React.useRef(null);
  var _useState3 = React.useState(false),
    showDropDown = _useState3[0],
    setShowDropDown = _useState3[1];
  var handleClose = function handleClose() {
    setShowDropDown(false);
    if (buttonRef && buttonRef.current) {
      buttonRef.current.focus();
    }
  };
  React.useEffect(function () {
    var button = buttonRef.current;
    var dropDown = dropDownRef.current;
    if (showDropDown && button !== null && dropDown !== null) {
      var _button$getBoundingCl = button.getBoundingClientRect(),
        top = _button$getBoundingCl.top,
        left = _button$getBoundingCl.left;
      dropDown.style.top = top + 40 + "px";
      dropDown.style.left = Math.min(left, window.innerWidth - dropDown.offsetWidth - 20) + "px";
    }
  }, [dropDownRef, buttonRef, showDropDown]);
  React.useEffect(function () {
    var button = buttonRef.current;
    if (button !== null && showDropDown) {
      var handle = function handle(event) {
        var target = event.target;
        if (stopCloseOnClickSelf) {
          if (dropDownRef.current && dropDownRef.current.contains(target)) return;
        }
        if (!button.contains(target)) {
          setShowDropDown(false);
        }
      };
      document.addEventListener('click', handle);
      return function () {
        document.removeEventListener('click', handle);
      };
    }
  }, [dropDownRef, buttonRef, showDropDown, stopCloseOnClickSelf]);
  return React.createElement(React.Fragment, null, React.createElement("button", {
    "aria-label": buttonAriaLabel || buttonLabel,
    className: buttonClassName,
    onClick: function onClick() {
      return setShowDropDown(!showDropDown);
    },
    ref: buttonRef
  }, buttonIconClassName && React.createElement("span", {
    className: buttonIconClassName
  }), buttonLabel && React.createElement("span", {
    className: "text dropdown-button-text"
  }, buttonLabel), React.createElement("i", {
    className: "chevron-down"
  })), showDropDown && reactDom.createPortal(React.createElement(DropDownItems, {
    dropDownRef: dropDownRef,
    onClose: handleClose
  }, children), document.body));
}

function TextInput(_ref) {
  var label = _ref.label,
    value = _ref.value,
    _onChange = _ref.onChange,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
    dataTestId = _ref['data-test-id'];
  return React.createElement("div", {
    className: "Input__wrapper"
  }, React.createElement("label", {
    className: "Input__label"
  }, label), React.createElement("input", {
    type: "text",
    className: "Input__input",
    placeholder: placeholder,
    value: value,
    onChange: function onChange(e) {
      _onChange(e.target.value);
    },
    "data-test-id": dataTestId
  }));
}

var _excluded = ["color", "children", "onChange"];
var basicColors = ['#d0021b', '#f5a623', '#f8e71c', '#8b572a', '#7ed321', '#417505', '#bd10e0', '#9013fe', '#4a90e2', '#50e3c2', '#b8e986', '#000000', '#4a4a4a', '#9b9b9b', '#ffffff'];
var WIDTH = 214;
var HEIGHT = 150;
function ColorPicker(_ref) {
  var color = _ref.color,
    children = _ref.children,
    onChange = _ref.onChange,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _useState = React.useState(transformColor('hex', color)),
    selfColor = _useState[0],
    setSelfColor = _useState[1];
  var _useState2 = React.useState(color),
    inputColor = _useState2[0],
    setInputColor = _useState2[1];
  var innerDivRef = React.useRef(null);
  var saturationPosition = React.useMemo(function () {
    return {
      x: selfColor.hsv.s / 100 * WIDTH,
      y: (100 - selfColor.hsv.v) / 100 * HEIGHT
    };
  }, [selfColor.hsv.s, selfColor.hsv.v]);
  var huePosition = React.useMemo(function () {
    return {
      x: selfColor.hsv.h / 360 * WIDTH
    };
  }, [selfColor.hsv]);
  var onSetHex = function onSetHex(hex) {
    setInputColor(hex);
    if (/^#[0-9A-Fa-f]{6}$/i.test(hex)) {
      var newColor = transformColor('hex', hex);
      setSelfColor(newColor);
    }
  };
  var onMoveSaturation = function onMoveSaturation(_ref2) {
    var x = _ref2.x,
      y = _ref2.y;
    var newHsv = _extends({}, selfColor.hsv, {
      s: x / WIDTH * 100,
      v: 100 - y / HEIGHT * 100
    });
    var newColor = transformColor('hsv', newHsv);
    setSelfColor(newColor);
    setInputColor(newColor.hex);
  };
  var onMoveHue = function onMoveHue(_ref3) {
    var x = _ref3.x;
    var newHsv = _extends({}, selfColor.hsv, {
      h: x / WIDTH * 360
    });
    var newColor = transformColor('hsv', newHsv);
    setSelfColor(newColor);
    setInputColor(newColor.hex);
  };
  React.useEffect(function () {
    if (innerDivRef.current !== null && onChange) {
      onChange(selfColor.hex);
      setInputColor(selfColor.hex);
    }
  }, [selfColor, onChange]);
  React.useEffect(function () {
    if (color === undefined) return;
    var newColor = transformColor('hex', color);
    setSelfColor(newColor);
    setInputColor(newColor.hex);
  }, [color]);
  return React.createElement(DropDown, Object.assign({}, rest, {
    stopCloseOnClickSelf: true
  }), React.createElement("div", {
    className: "color-picker-wrapper",
    style: {
      width: WIDTH
    },
    ref: innerDivRef
  }, React.createElement(TextInput, {
    label: "Hex",
    onChange: onSetHex,
    value: inputColor
  }), React.createElement("div", {
    className: "color-picker-basic-color"
  }, basicColors.map(function (basicColor) {
    return React.createElement("button", {
      className: basicColor === selfColor.hex ? ' active' : '',
      key: basicColor,
      style: {
        backgroundColor: basicColor
      },
      onClick: function onClick() {
        setInputColor(basicColor);
        setSelfColor(transformColor('hex', basicColor));
      }
    });
  })), React.createElement(MoveWrapper, {
    className: "color-picker-saturation",
    style: {
      backgroundColor: "hsl(" + selfColor.hsv.h + ", 100%, 50%)"
    },
    onChange: onMoveSaturation
  }, React.createElement("div", {
    className: "color-picker-saturation_cursor",
    style: {
      backgroundColor: selfColor.hex,
      left: saturationPosition.x,
      top: saturationPosition.y
    }
  })), React.createElement(MoveWrapper, {
    className: "color-picker-hue",
    onChange: onMoveHue
  }, React.createElement("div", {
    className: "color-picker-hue_cursor",
    style: {
      backgroundColor: "hsl(" + selfColor.hsv.h + ", 100%, 50%)",
      left: huePosition.x
    }
  })), React.createElement("div", {
    className: "color-picker-color",
    style: {
      backgroundColor: selfColor.hex
    }
  })), children);
}
function MoveWrapper(_ref4) {
  var className = _ref4.className,
    style = _ref4.style,
    onChange = _ref4.onChange,
    children = _ref4.children;
  var divRef = React.useRef(null);
  var move = function move(e) {
    if (divRef.current) {
      var div = divRef.current;
      var _div$getBoundingClien = div.getBoundingClientRect(),
        width = _div$getBoundingClien.width,
        height = _div$getBoundingClien.height,
        left = _div$getBoundingClien.left,
        top = _div$getBoundingClien.top;
      var x = clamp$1(e.clientX - left, width, 0);
      var y = clamp$1(e.clientY - top, height, 0);
      onChange({
        x: x,
        y: y
      });
    }
  };
  var onMouseDown = function onMouseDown(e) {
    if (e.button !== 0) return;
    move(e);
    var onMouseMove = function onMouseMove(_e) {
      move(_e);
    };
    var onMouseUp = function onMouseUp(_e) {
      document.removeEventListener('mousemove', onMouseMove, false);
      document.removeEventListener('mouseup', onMouseUp, false);
      move(_e);
    };
    document.addEventListener('mousemove', onMouseMove, false);
    document.addEventListener('mouseup', onMouseUp, false);
  };
  return React.createElement("div", {
    ref: divRef,
    className: className,
    style: style,
    onMouseDown: onMouseDown
  }, children);
}
function clamp$1(value, max, min) {
  return value > max ? max : value < min ? min : value;
}
function toHex(value) {
  if (!value.startsWith('#')) {
    var ctx = document.createElement('canvas').getContext('2d');
    if (!ctx) {
      throw new Error('2d context not supported or canvas already initialized');
    }
    ctx.fillStyle = value;
    return ctx.fillStyle;
  } else if (value.length === 4 || value.length === 5) {
    value = value.split('').map(function (v, i) {
      return i ? v + v : '#';
    }).join('');
    return value;
  } else if (value.length === 7 || value.length === 9) {
    return value;
  }
  return '#000000';
}
function hex2rgb(hex) {
  var rbgArr = (hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) {
    return '#' + r + r + g + g + b + b;
  }).substring(1).match(/.{2}/g) || []).map(function (x) {
    return parseInt(x, 16);
  });
  return {
    b: rbgArr[2],
    g: rbgArr[1],
    r: rbgArr[0]
  };
}
function rgb2hsv(_ref5) {
  var r = _ref5.r,
    g = _ref5.g,
    b = _ref5.b;
  r /= 255;
  g /= 255;
  b /= 255;
  var max = Math.max(r, g, b);
  var d = max - Math.min(r, g, b);
  var h = d ? (max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? 2 + (b - r) / d : 4 + (r - g) / d) * 60 : 0;
  var s = max ? d / max * 100 : 0;
  var v = max * 100;
  return {
    h: h,
    s: s,
    v: v
  };
}
function hsv2rgb(_ref6) {
  var h = _ref6.h,
    s = _ref6.s,
    v = _ref6.v;
  s /= 100;
  v /= 100;
  var i = ~~(h / 60);
  var f = h / 60 - i;
  var p = v * (1 - s);
  var q = v * (1 - s * f);
  var t = v * (1 - s * (1 - f));
  var index = i % 6;
  var r = Math.round([v, q, p, p, t, v][index] * 255);
  var g = Math.round([t, v, v, q, p, p][index] * 255);
  var b = Math.round([p, p, t, v, v, q][index] * 255);
  return {
    b: b,
    g: g,
    r: r
  };
}
function rgb2hex(_ref7) {
  var b = _ref7.b,
    g = _ref7.g,
    r = _ref7.r;
  return '#' + [r, g, b].map(function (x) {
    return x.toString(16).padStart(2, '0');
  }).join('');
}
function transformColor(format, color) {
  var hex = toHex('#121212');
  var rgb = hex2rgb(hex);
  var hsv = rgb2hsv(rgb);
  if (format === 'hex') {
    var value = color;
    hex = toHex(value);
    rgb = hex2rgb(hex);
    hsv = rgb2hsv(rgb);
  } else if (format === 'rgb') {
    var _value = color;
    rgb = _value;
    hex = rgb2hex(rgb);
    hsv = rgb2hsv(rgb);
  } else if (format === 'hsv') {
    var _value2 = color;
    hsv = _value2;
    rgb = hsv2rgb(hsv);
    hex = rgb2hex(rgb);
  }
  return {
    hex: hex,
    hsv: hsv,
    rgb: rgb
  };
}

function FileInput(_ref) {
  var accept = _ref.accept,
    label = _ref.label,
    _onChange = _ref.onChange,
    dataTestId = _ref['data-test-id'];
  return React.createElement("div", {
    className: "Input__wrapper"
  }, React.createElement("label", {
    className: "Input__label"
  }, label), React.createElement("input", {
    type: "file",
    accept: accept,
    className: "Input__input",
    onChange: function onChange(e) {
      return _onChange(e.target.files);
    },
    "data-test-id": dataTestId
  }));
}

function KatexEquationAlterer(_ref) {
  var onConfirm = _ref.onConfirm,
    _ref$initialEquation = _ref.initialEquation,
    initialEquation = _ref$initialEquation === void 0 ? '' : _ref$initialEquation;
  var _useState = React.useState(initialEquation),
    equation = _useState[0],
    setEquation = _useState[1];
  var _useState2 = React.useState(true),
    inline = _useState2[0],
    setInline = _useState2[1];
  var onClick = React.useCallback(function () {
    onConfirm(equation, inline);
  }, [onConfirm, equation, inline]);
  var onCheckboxChange = React.useCallback(function () {
    setInline(!inline);
  }, [setInline, inline]);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "KatexEquationAlterer_defaultRow"
  }, "Inline", React.createElement("input", {
    type: "checkbox",
    checked: inline,
    onChange: onCheckboxChange
  })), React.createElement("div", {
    className: "KatexEquationAlterer_defaultRow"
  }, "Equation "), React.createElement("div", {
    className: "KatexEquationAlterer_centerRow"
  }, inline ? React.createElement("input", {
    onChange: function onChange(event) {
      setEquation(event.target.value);
    },
    value: equation,
    className: "KatexEquationAlterer_textArea"
  }) : React.createElement("textarea", {
    onChange: function onChange(event) {
      setEquation(event.target.value);
    },
    value: equation,
    className: "KatexEquationAlterer_textArea"
  })), React.createElement("div", {
    className: "KatexEquationAlterer_defaultRow"
  }, "Visualization "), React.createElement("div", {
    className: "KatexEquationAlterer_centerRow"
  }, React.createElement(KatexRenderer, {
    equation: equation,
    inline: false,
    onClick: function onClick() {
      return null;
    }
  })), React.createElement("div", {
    className: "KatexEquationAlterer_dialogActions"
  }, React.createElement(Button, {
    onClick: onClick
  }, "Confirm")));
}

var PREVIEW_CACHE = {};
var URL_MATCHER$1 = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
function useSuspenseRequest(url) {
  var cached = PREVIEW_CACHE[url];
  if (!url.match(URL_MATCHER$1)) {
    return {
      preview: null
    };
  }
  if (!cached) {
    cached = PREVIEW_CACHE[url] = fetch("/api/link-preview?url=" + encodeURI(url)).then(function (response) {
      return response.json();
    }).then(function (preview) {
      PREVIEW_CACHE[url] = preview;
      return preview;
    })["catch"](function () {
      PREVIEW_CACHE[url] = {
        preview: null
      };
    });
  }
  if (cached instanceof Promise) {
    throw cached;
  }
  return cached;
}
function LinkPreviewContent(_ref) {
  var url = _ref.url;
  var _useSuspenseRequest = useSuspenseRequest(url),
    preview = _useSuspenseRequest.preview;
  if (preview === null) {
    return null;
  }
  return React.createElement("div", {
    className: "LinkPreview__container"
  }, preview.img && React.createElement("div", {
    className: "LinkPreview__imageWrapper"
  }, React.createElement("img", {
    src: preview.img,
    alt: preview.title,
    className: "LinkPreview__image"
  })), preview.domain && React.createElement("div", {
    className: "LinkPreview__domain"
  }, preview.domain), preview.title && React.createElement("div", {
    className: "LinkPreview__title"
  }, preview.title), preview.description && React.createElement("div", {
    className: "LinkPreview__description"
  }, preview.description));
}
function Glimmer(props) {
  return React.createElement("div", Object.assign({
    className: "LinkPreview__glimmer"
  }, props, {
    style: _extends({
      animationDelay: String((props.index || 0) * 300)
    }, props.style || {})
  }));
}
function LinkPreview(_ref2) {
  var url = _ref2.url;
  return React.createElement(React.Suspense, {
    fallback: React.createElement(React.Fragment, null, React.createElement(Glimmer, {
      style: {
        height: '80px'
      },
      index: 0
    }), React.createElement(Glimmer, {
      style: {
        width: '60%'
      },
      index: 1
    }), React.createElement(Glimmer, {
      style: {
        width: '80%'
      },
      index: 2
    }))
  }, React.createElement(LinkPreviewContent, {
    url: url
  }));
}

var WIDGET_SCRIPT_URL = 'https://platform.twitter.com/widgets.js';
var getHasScriptCached = function getHasScriptCached() {
  return document.querySelector("script[src=\"" + WIDGET_SCRIPT_URL + "\"]");
};
function convertTweetElement(domNode) {
  var id = domNode.getAttribute('data-lexical-tweet-id');
  if (id) {
    var node = $createTweetNode(id);
    return {
      node: node
    };
  }
  return null;
}
function TweetComponent(_ref) {
  var className = _ref.className,
    format = _ref.format,
    loadingComponent = _ref.loadingComponent,
    nodeKey = _ref.nodeKey,
    onError = _ref.onError,
    onLoad = _ref.onLoad,
    tweetID = _ref.tweetID;
  var containerRef = React.useRef(null);
  var previousTweetIDRef = React.useRef('');
  var _useState = React.useState(false),
    isLoading = _useState[0],
    setIsLoading = _useState[1];
  var createTweet = React.useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return window.twttr.widgets.createTweet(tweetID, containerRef.current);
        case 3:
          setIsLoading(false);
          if (onLoad) {
            onLoad();
          }
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          if (onError) {
            onError(String(_context.t0));
          }
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  })), [onError, onLoad, tweetID]);
  React.useEffect(function () {
    if (tweetID !== previousTweetIDRef.current) {
      setIsLoading(true);
      if (!getHasScriptCached()) {
        var _document$body;
        var script = document.createElement('script');
        script.src = WIDGET_SCRIPT_URL;
        script.async = true;
        (_document$body = document.body) == null || _document$body.appendChild(script);
        script.onload = createTweet;
        if (onError) {
          script.onerror = onError;
        }
      } else {
        createTweet();
      }
      if (previousTweetIDRef) {
        previousTweetIDRef.current = tweetID;
      }
    }
  }, [createTweet, onError, tweetID]);
  return React.createElement(LexicalBlockWithAlignableContents.BlockWithAlignableContents, {
    className: className,
    format: format,
    nodeKey: nodeKey
  }, isLoading ? loadingComponent : null, React.createElement("div", {
    style: {
      display: 'inline-block',
      width: '550px'
    },
    ref: containerRef
  }));
}
var TweetNode = /*#__PURE__*/function (_DecoratorBlockNode) {
  _inheritsLoose(TweetNode, _DecoratorBlockNode);
  function TweetNode(id, format, key) {
    var _this;
    _this = _DecoratorBlockNode.call(this, format, key) || this;
    _this.__id = id;
    return _this;
  }
  TweetNode.getType = function getType() {
    return 'tweet';
  };
  TweetNode.clone = function clone(node) {
    return new TweetNode(node.__id, node.__format, node.__key);
  };
  TweetNode.importJSON = function importJSON(serializedNode) {
    var node = $createTweetNode(serializedNode.id);
    node.setFormat(serializedNode.format);
    return node;
  };
  var _proto = TweetNode.prototype;
  _proto.exportJSON = function exportJSON() {
    return _extends({}, _DecoratorBlockNode.prototype.exportJSON.call(this), {
      id: this.getId(),
      type: 'tweet',
      version: 1
    });
  };
  TweetNode.importDOM = function importDOM() {
    return {
      div: function div(domNode) {
        if (!domNode.hasAttribute('data-lexical-tweet-id')) {
          return null;
        }
        return {
          conversion: convertTweetElement,
          priority: 2
        };
      }
    };
  };
  _proto.exportDOM = function exportDOM() {
    var element = document.createElement('div');
    element.setAttribute('data-lexical-tweet-id', this.__id);
    return {
      element: element
    };
  };
  _proto.getId = function getId() {
    return this.__id;
  };
  _proto.decorate = function decorate(editor, config) {
    var embedBlockTheme = config.theme.embedBlock || {};
    var className = {
      base: embedBlockTheme.base || '',
      focus: embedBlockTheme.focus || ''
    };
    return React.createElement(TweetComponent, {
      className: className,
      format: this.__format,
      loadingComponent: "Loading...",
      nodeKey: this.getKey(),
      tweetID: this.__id
    });
  };
  _proto.isTopLevel = function isTopLevel() {
    return true;
  };
  return TweetNode;
}(LexicalDecoratorBlockNode.DecoratorBlockNode);
function $createTweetNode(tweetID) {
  return new TweetNode(tweetID);
}

var INSERT_TWEET_COMMAND = /*#__PURE__*/lexical.createCommand();
function TwitterPlugin() {
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  React.useEffect(function () {
    if (!editor.hasNodes([TweetNode])) {
      throw new Error('TwitterPlugin: TweetNode not registered on editor');
    }
    return editor.registerCommand(INSERT_TWEET_COMMAND, function (payload) {
      var selection = lexical.$getSelection();
      var tweetNode = $createTweetNode(payload);
      var paragraphNode = lexical.$createParagraphNode();
      tweetNode.insertAfter(paragraphNode);
      paragraphNode.select();
      return true;
    }, lexical.COMMAND_PRIORITY_EDITOR);
  }, [editor]);
  return null;
}

function YouTubeComponent(_ref) {
  var className = _ref.className,
    format = _ref.format,
    nodeKey = _ref.nodeKey,
    videoID = _ref.videoID;
  return React.createElement(LexicalBlockWithAlignableContents.BlockWithAlignableContents, {
    className: className,
    format: format,
    nodeKey: nodeKey
  }, React.createElement("iframe", {
    width: "560",
    height: "315",
    src: "https://www.youtube.com/embed/" + videoID,
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    title: "YouTube video"
  }));
}
var YouTubeNode = /*#__PURE__*/function (_DecoratorBlockNode) {
  _inheritsLoose(YouTubeNode, _DecoratorBlockNode);
  function YouTubeNode(id, format, key) {
    var _this;
    _this = _DecoratorBlockNode.call(this, format, key) || this;
    _this.__id = id;
    return _this;
  }
  YouTubeNode.getType = function getType() {
    return 'youtube';
  };
  YouTubeNode.clone = function clone(node) {
    return new YouTubeNode(node.__id, node.__format, node.__key);
  };
  YouTubeNode.importJSON = function importJSON(serializedNode) {
    var node = $createYouTubeNode(serializedNode.videoID);
    node.setFormat(serializedNode.format);
    return node;
  };
  var _proto = YouTubeNode.prototype;
  _proto.exportJSON = function exportJSON() {
    return _extends({}, _DecoratorBlockNode.prototype.exportJSON.call(this), {
      type: 'youtube',
      version: 1,
      videoID: this.__id
    });
  };
  _proto.updateDOM = function updateDOM() {
    return false;
  };
  _proto.decorate = function decorate(_editor, config) {
    var embedBlockTheme = config.theme.embedBlock || {};
    var className = {
      base: embedBlockTheme.base || '',
      focus: embedBlockTheme.focus || ''
    };
    return React.createElement(YouTubeComponent, {
      className: className,
      format: this.__format,
      nodeKey: this.getKey(),
      videoID: this.__id
    });
  };
  _proto.isTopLevel = function isTopLevel() {
    return true;
  };
  return YouTubeNode;
}(LexicalDecoratorBlockNode.DecoratorBlockNode);
function $createYouTubeNode(videoID) {
  return new YouTubeNode(videoID);
}

var INSERT_YOUTUBE_COMMAND = /*#__PURE__*/lexical.createCommand();
function YouTubePlugin() {
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  React.useEffect(function () {
    if (!editor.hasNodes([YouTubeNode])) {
      throw new Error('YouTubePlugin: YouTubeNode not registered on editor');
    }
    return editor.registerCommand(INSERT_YOUTUBE_COMMAND, function (payload) {
      var selection = lexical.$getSelection();
      var youTubeNode = $createYouTubeNode(payload);
      var paragraphNode = lexical.$createParagraphNode();
      youTubeNode.insertAfter(paragraphNode);
      paragraphNode.select();
      return true;
    }, lexical.COMMAND_PRIORITY_EDITOR);
  }, [editor]);
  return null;
}

var blockTypeToBlockName = {
  bullet: 'Bulleted List',
  check: 'Check List',
  code: 'Code Block',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
  h4: 'Heading 4',
  h5: 'Heading 5',
  h6: 'Heading 6',
  number: 'Numbered List',
  paragraph: 'Normal',
  quote: 'Quote'
};
var CODE_LANGUAGE_OPTIONS = [['', '- Select language -'], ['c', 'C'], ['clike', 'C-like'], ['css', 'CSS'], ['html', 'HTML'], ['js', 'JavaScript'], ['markdown', 'Markdown'], ['objc', 'Objective-C'], ['plain', 'Plain Text'], ['py', 'Python'], ['rust', 'Rust'], ['sql', 'SQL'], ['swift', 'Swift'], ['xml', 'XML']];
var CODE_LANGUAGE_MAP = {
  javascript: 'js',
  md: 'markdown',
  plaintext: 'plain',
  python: 'py',
  text: 'plain'
};
function getSelectedNode$1(selection$1) {
  var anchor = selection$1.anchor;
  var focus = selection$1.focus;
  var anchorNode = selection$1.anchor.getNode();
  var focusNode = selection$1.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  var isBackward = selection$1.isBackward();
  if (isBackward) {
    return selection.$isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return selection.$isAtNodeEnd(anchor) ? focusNode : anchorNode;
  }
}
function positionEditorElement(editor, rect, rootElement) {
  if (rect === null) {
    editor.style.opacity = '0';
    editor.style.top = '-1000px';
    editor.style.left = '-1000px';
  } else {
    editor.style.opacity = '1';
    editor.style.top = rect.top + rect.height + window.pageYOffset + 10 + "px";
    var left = rect.left - editor.offsetWidth / 2 + rect.width / 2;
    var rootElementRect = rootElement.getBoundingClientRect();
    if (rootElementRect.left > left) {
      editor.style.left = rect.left + window.pageXOffset + "px";
    } else if (left + editor.offsetWidth > rootElementRect.right) {
      editor.style.left = rect.right + window.pageXOffset - editor.offsetWidth + "px";
    }
  }
}
function FloatingLinkEditor(_ref) {
  var editor = _ref.editor;
  var editorRef = React.useRef(null);
  var inputRef = React.useRef(null);
  var _useState = React.useState(''),
    linkUrl = _useState[0],
    setLinkUrl = _useState[1];
  var _useState2 = React.useState(false),
    isEditMode = _useState2[0],
    setEditMode = _useState2[1];
  var _useState3 = React.useState(null),
    lastSelection = _useState3[0],
    setLastSelection = _useState3[1];
  var updateLinkEditor = React.useCallback(function () {
    var selection = lexical.$getSelection();
    if (lexical.$isRangeSelection(selection)) {
      var node = getSelectedNode$1(selection);
      var parent = node.getParent();
      if (link.$isLinkNode(parent)) {
        setLinkUrl(parent.getURL());
      } else if (link.$isLinkNode(node)) {
        setLinkUrl(node.getURL());
      } else {
        setLinkUrl('');
      }
    }
    var editorElem = editorRef.current;
    var nativeSelection = window.getSelection();
    var activeElement = document.activeElement;
    if (editorElem === null) {
      return;
    }
    var rootElement = editor.getRootElement();
    if (selection !== null && nativeSelection !== null && !nativeSelection.isCollapsed && rootElement !== null && rootElement.contains(nativeSelection.anchorNode)) {
      var domRange = nativeSelection.getRangeAt(0);
      var rect;
      if (nativeSelection.anchorNode === rootElement) {
        var inner = rootElement;
        while (inner.firstElementChild != null) {
          inner = inner.firstElementChild;
        }
        rect = inner.getBoundingClientRect();
      } else {
        rect = domRange.getBoundingClientRect();
      }
      positionEditorElement(editorElem, rect, rootElement);
    } else if (!activeElement || activeElement.className !== 'link-input') {
      if (rootElement !== null) {
        positionEditorElement(editorElem, null, rootElement);
      }
      setLastSelection(null);
      setEditMode(false);
      setLinkUrl('');
    }
    return true;
  }, [editor]);
  React.useEffect(function () {
    var onResize = function onResize() {
      editor.getEditorState().read(function () {
        updateLinkEditor();
      });
    };
    window.addEventListener('resize', onResize);
    return function () {
      window.removeEventListener('resize', onResize);
    };
  }, [editor, updateLinkEditor]);
  React.useEffect(function () {
    return utils.mergeRegister(editor.registerUpdateListener(function (_ref2) {
      var editorState = _ref2.editorState;
      editorState.read(function () {
        updateLinkEditor();
      });
    }), editor.registerCommand(lexical.SELECTION_CHANGE_COMMAND, function () {
      updateLinkEditor();
      return true;
    }, lexical.COMMAND_PRIORITY_LOW));
  }, [editor, updateLinkEditor]);
  React.useEffect(function () {
    editor.getEditorState().read(function () {
      updateLinkEditor();
    });
  }, [editor, updateLinkEditor]);
  React.useEffect(function () {
    if (isEditMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditMode]);
  return React.createElement("div", {
    ref: editorRef,
    className: "link-editor"
  }, isEditMode ? React.createElement("input", {
    ref: inputRef,
    className: "link-input",
    value: linkUrl,
    onChange: function onChange(event) {
      setLinkUrl(event.target.value);
    },
    onKeyDown: function onKeyDown(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (lastSelection !== null) {
          if (linkUrl !== '') {
            editor.dispatchCommand(link.TOGGLE_LINK_COMMAND, linkUrl);
          }
          setEditMode(false);
        }
      } else if (event.key === 'Escape') {
        event.preventDefault();
        setEditMode(false);
      }
    }
  }) : React.createElement(React.Fragment, null, React.createElement("div", {
    className: "link-input"
  }, React.createElement("a", {
    href: linkUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, linkUrl), React.createElement("div", {
    className: "link-edit",
    role: "button",
    tabIndex: 0,
    onMouseDown: function onMouseDown(event) {
      return event.preventDefault();
    },
    onClick: function onClick() {
      setEditMode(true);
    }
  })), React.createElement(LinkPreview, {
    url: linkUrl
  })));
}
function InsertImageUriDialogBody(_ref3) {
  var _onClick = _ref3.onClick;
  var _useState4 = React.useState(''),
    src = _useState4[0],
    setSrc = _useState4[1];
  var _useState5 = React.useState(''),
    altText = _useState5[0],
    setAltText = _useState5[1];
  var isDisabled = src === '';
  return React.createElement(React.Fragment, null, React.createElement(TextInput, {
    label: "Image URL",
    placeholder: "i.e. https://source.unsplash.com/random",
    onChange: setSrc,
    value: src,
    "data-test-id": "image-modal-url-input"
  }), React.createElement(TextInput, {
    label: "Alt Text",
    placeholder: "Random unsplash image",
    onChange: setAltText,
    value: altText,
    "data-test-id": "image-modal-alt-text-input"
  }), React.createElement("div", {
    className: "ToolbarPlugin__dialogActions"
  }, React.createElement(Button, {
    "data-test-id": "image-modal-confirm-btn",
    disabled: isDisabled,
    onClick: function onClick() {
      return _onClick({
        altText: altText,
        src: src
      });
    }
  }, "Confirm")));
}
function InsertImageUploadedDialogBody(_ref4) {
  var _onClick2 = _ref4.onClick;
  var _useState6 = React.useState(''),
    src = _useState6[0],
    setSrc = _useState6[1];
  var _useState7 = React.useState(''),
    altText = _useState7[0],
    setAltText = _useState7[1];
  var isDisabled = src === '';
  var loadImage = function loadImage(files) {
    var reader = new FileReader();
    reader.onload = function () {
      if (typeof reader.result === 'string') {
        setSrc(reader.result);
      }
      return '';
    };
    if (files !== null) {
      reader.readAsDataURL(files[0]);
    }
  };
  return React.createElement(React.Fragment, null, React.createElement(FileInput, {
    label: "Image Upload",
    onChange: loadImage,
    accept: "image/*",
    "data-test-id": "image-modal-file-upload"
  }), React.createElement(TextInput, {
    label: "Alt Text",
    placeholder: "Descriptive alternative text",
    onChange: setAltText,
    value: altText,
    "data-test-id": "image-modal-alt-text-input"
  }), React.createElement("div", {
    className: "ToolbarPlugin__dialogActions"
  }, React.createElement(Button, {
    "data-test-id": "image-modal-file-upload-btn",
    disabled: isDisabled,
    onClick: function onClick() {
      return _onClick2({
        altText: altText,
        src: src
      });
    }
  }, "Confirm")));
}
function InsertImageDialog(_ref5) {
  var activeEditor = _ref5.activeEditor,
    onClose = _ref5.onClose;
  var _useState8 = React.useState(null),
    mode = _useState8[0],
    setMode = _useState8[1];
  var onClick = function onClick(payload) {
    activeEditor.dispatchCommand(INSERT_IMAGE_COMMAND, payload);
    onClose();
  };
  return React.createElement(React.Fragment, null, !mode && React.createElement("div", {
    className: "ToolbarPlugin__dialogButtonsList"
  }, React.createElement(Button, {
    "data-test-id": "image-modal-option-url",
    onClick: function onClick() {
      return setMode('url');
    }
  }, "URL"), React.createElement(Button, {
    "data-test-id": "image-modal-option-file",
    onClick: function onClick() {
      return setMode('file');
    }
  }, "File")), mode === 'url' && React.createElement(InsertImageUriDialogBody, {
    onClick: onClick
  }), mode === 'file' && React.createElement(InsertImageUploadedDialogBody, {
    onClick: onClick
  }));
}
function InsertTableDialog(_ref6) {
  var activeEditor = _ref6.activeEditor,
    onClose = _ref6.onClose;
  var _useState9 = React.useState('5'),
    rows = _useState9[0],
    setRows = _useState9[1];
  var _useState10 = React.useState('5'),
    columns = _useState10[0],
    setColumns = _useState10[1];
  var onClick = function onClick() {
    activeEditor.dispatchCommand(table.INSERT_TABLE_COMMAND, {
      columns: columns,
      rows: rows
    });
    onClose();
  };
  return React.createElement(React.Fragment, null, React.createElement(TextInput, {
    label: "No of rows",
    onChange: setRows,
    value: rows
  }), React.createElement(TextInput, {
    label: "No of columns",
    onChange: setColumns,
    value: columns
  }), React.createElement("div", {
    className: "ToolbarPlugin__dialogActions",
    "data-test-id": "table-model-confirm-insert"
  }, React.createElement(Button, {
    onClick: onClick
  }, "Confirm")));
}
function InsertPollDialog(_ref7) {
  var activeEditor = _ref7.activeEditor,
    onClose = _ref7.onClose;
  var _useState11 = React.useState(''),
    question = _useState11[0],
    setQuestion = _useState11[1];
  var onClick = function onClick() {
    activeEditor.dispatchCommand(INSERT_POLL_COMMAND, question);
    onClose();
  };
  return React.createElement(React.Fragment, null, React.createElement(TextInput, {
    label: "Question",
    onChange: setQuestion,
    value: question
  }), React.createElement("div", {
    className: "ToolbarPlugin__dialogActions"
  }, React.createElement(Button, {
    disabled: question.trim() === '',
    onClick: onClick
  }, "Confirm")));
}
var VALID_TWITTER_URL = /twitter.com\/[0-9a-zA-Z]{1,20}\/status\/([0-9]*)/g;
function InsertTweetDialog(_ref8) {
  var activeEditor = _ref8.activeEditor,
    onClose = _ref8.onClose;
  var _useState12 = React.useState(''),
    text = _useState12[0],
    setText = _useState12[1];
  var onClick = function onClick() {
    var _text$split;
    var tweetID = (_text$split = text.split('status/')) == null || (_text$split = _text$split[1]) == null || (_text$split = _text$split.split('?')) == null ? void 0 : _text$split[0];
    activeEditor.dispatchCommand(INSERT_TWEET_COMMAND, tweetID);
    onClose();
  };
  var isDisabled = text === '' || !text.match(VALID_TWITTER_URL);
  return React.createElement(React.Fragment, null, React.createElement(TextInput, {
    label: "Tweet URL",
    placeholder: "i.e. https://twitter.com/jack/status/20",
    onChange: setText,
    value: text
  }), React.createElement("div", {
    className: "ToolbarPlugin__dialogActions"
  }, React.createElement(Button, {
    disabled: isDisabled,
    onClick: onClick
  }, "Confirm")));
}
var YOUTUBE_ID_PARSER = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
var parseYouTubeVideoID = function parseYouTubeVideoID(url) {
  var urlMatches = url.match(YOUTUBE_ID_PARSER);
  return (urlMatches == null ? void 0 : urlMatches[2].length) === 11 ? urlMatches[2] : null;
};
function InsertYouTubeDialog(_ref9) {
  var activeEditor = _ref9.activeEditor,
    onClose = _ref9.onClose;
  var _useState13 = React.useState(''),
    text = _useState13[0],
    setText = _useState13[1];
  var onClick = function onClick() {
    var videoID = parseYouTubeVideoID(text);
    if (videoID) {
      activeEditor.dispatchCommand(INSERT_YOUTUBE_COMMAND, videoID);
    }
    onClose();
  };
  var isDisabled = text === '' || !parseYouTubeVideoID(text);
  return React.createElement(React.Fragment, null, React.createElement(TextInput, {
    "data-test-id": "youtube-embed-modal-url",
    label: "YouTube URL",
    placeholder: "i.e. https://www.youtube.com/watch?v=jNQXAC9IVRw",
    onChange: setText,
    value: text
  }), React.createElement("div", {
    className: "ToolbarPlugin__dialogActions"
  }, React.createElement(Button, {
    "data-test-id": "youtube-embed-modal-submit-btn",
    disabled: isDisabled,
    onClick: onClick
  }, "Confirm")));
}
function InsertEquationDialog(_ref10) {
  var activeEditor = _ref10.activeEditor,
    onClose = _ref10.onClose;
  var onEquationConfirm = React.useCallback(function (equation, inline) {
    activeEditor.dispatchCommand(INSERT_EQUATION_COMMAND, {
      equation: equation,
      inline: inline
    });
    onClose();
  }, [activeEditor, onClose]);
  return React.createElement(KatexEquationAlterer, {
    onConfirm: onEquationConfirm
  });
}
function dropDownActiveClass(active) {
  if (active) return 'active dropdown-item-active';else return '';
}
function BlockFormatDropDown(_ref11) {
  var editor = _ref11.editor,
    blockType = _ref11.blockType;
  var formatParagraph = function formatParagraph() {
    if (blockType !== 'paragraph') {
      editor.update(function () {
        var selection = lexical.$getSelection();
        if (lexical.$isRangeSelection(selection)) ;
      });
    }
  };
  var formatHeading = function formatHeading(headingSize) {
    if (blockType !== headingSize) {
      editor.update(function () {
        var selection = lexical.$getSelection();
        if (lexical.$isRangeSelection(selection)) ;
      });
    }
  };
  var formatBulletList = function formatBulletList() {
    if (blockType !== 'bullet') {
      editor.dispatchCommand(list.INSERT_UNORDERED_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(list.REMOVE_LIST_COMMAND, undefined);
    }
  };
  var formatCheckList = function formatCheckList() {
    if (blockType !== 'check') {
      editor.dispatchCommand(list.INSERT_CHECK_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(list.REMOVE_LIST_COMMAND, undefined);
    }
  };
  var formatNumberedList = function formatNumberedList() {
    if (blockType !== 'number') {
      editor.dispatchCommand(list.INSERT_ORDERED_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(list.REMOVE_LIST_COMMAND, undefined);
    }
  };
  var formatQuote = function formatQuote() {
    if (blockType !== 'quote') {
      editor.update(function () {
        var selection = lexical.$getSelection();
        if (lexical.$isRangeSelection(selection)) ;
      });
    }
  };
  var formatCode = function formatCode() {
    if (blockType !== 'code') {
      editor.update(function () {
        var selection = lexical.$getSelection();
        if (lexical.$isRangeSelection(selection)) {
          if (selection.isCollapsed()) ; else {
            var textContent = selection.getTextContent();
            var codeNode = code.$createCodeNode();
            selection.insertNodes([codeNode]);
            selection.insertRawText(textContent);
          }
        }
      });
    }
  };
  return React.createElement(DropDown, {
    buttonClassName: "toolbar-item block-controls",
    buttonIconClassName: 'icon block-type ' + blockType,
    buttonLabel: blockTypeToBlockName[blockType],
    buttonAriaLabel: "Formatting options for text style"
  }, React.createElement(DropDownItem, {
    className: 'item ' + dropDownActiveClass(blockType === 'paragraph'),
    onClick: formatParagraph
  }, React.createElement("i", {
    className: "icon paragraph"
  }), React.createElement("span", {
    className: "text"
  }, "Normal")), React.createElement(DropDownItem, {
    className: 'item ' + dropDownActiveClass(blockType === 'h1'),
    onClick: function onClick() {
      return formatHeading('h1');
    }
  }, React.createElement("i", {
    className: "icon h1"
  }), React.createElement("span", {
    className: "text"
  }, "Heading 1")), React.createElement(DropDownItem, {
    className: 'item ' + dropDownActiveClass(blockType === 'h2'),
    onClick: function onClick() {
      return formatHeading('h2');
    }
  }, React.createElement("i", {
    className: "icon h2"
  }), React.createElement("span", {
    className: "text"
  }, "Heading 2")), React.createElement(DropDownItem, {
    className: 'item ' + dropDownActiveClass(blockType === 'h3'),
    onClick: function onClick() {
      return formatHeading('h3');
    }
  }, React.createElement("i", {
    className: "icon h3"
  }), React.createElement("span", {
    className: "text"
  }, "Heading 3")), React.createElement(DropDownItem, {
    className: 'item ' + dropDownActiveClass(blockType === 'bullet'),
    onClick: formatBulletList
  }, React.createElement("i", {
    className: "icon bullet-list"
  }), React.createElement("span", {
    className: "text"
  }, "Bullet List")), React.createElement(DropDownItem, {
    className: 'item ' + dropDownActiveClass(blockType === 'number'),
    onClick: formatNumberedList
  }, React.createElement("i", {
    className: "icon numbered-list"
  }), React.createElement("span", {
    className: "text"
  }, "Numbered List")), React.createElement(DropDownItem, {
    className: 'item ' + dropDownActiveClass(blockType === 'check'),
    onClick: formatCheckList
  }, React.createElement("i", {
    className: "icon check-list"
  }), React.createElement("span", {
    className: "text"
  }, "Check List")), React.createElement(DropDownItem, {
    className: 'item ' + dropDownActiveClass(blockType === 'quote'),
    onClick: formatQuote
  }, React.createElement("i", {
    className: "icon quote"
  }), React.createElement("span", {
    className: "text"
  }, "Quote")), React.createElement(DropDownItem, {
    className: 'item ' + dropDownActiveClass(blockType === 'code'),
    onClick: formatCode
  }, React.createElement("i", {
    className: "icon code"
  }), React.createElement("span", {
    className: "text"
  }, "Code Block")));
}
function Divider() {
  return React.createElement("div", {
    className: "divider"
  });
}
function Select(_ref12) {
  var onChange = _ref12.onChange,
    className = _ref12.className,
    options = _ref12.options,
    value = _ref12.value;
  return React.createElement("select", {
    className: className,
    onChange: onChange,
    value: value
  }, options.map(function (_ref13) {
    var option = _ref13[0],
      text = _ref13[1];
    return React.createElement("option", {
      key: option,
      value: option
    }, text);
  }));
}
function ToolbarPlugin() {
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  var _useState14 = React.useState(editor),
    activeEditor = _useState14[0],
    setActiveEditor = _useState14[1];
  var _useState15 = React.useState('paragraph'),
    blockType = _useState15[0],
    setBlockType = _useState15[1];
  var _useState16 = React.useState(null),
    selectedElementKey = _useState16[0],
    setSelectedElementKey = _useState16[1];
  var _useState17 = React.useState('15px'),
    fontSize = _useState17[0],
    setFontSize = _useState17[1];
  var _useState18 = React.useState('#000'),
    fontColor = _useState18[0],
    setFontColor = _useState18[1];
  var _useState19 = React.useState('#fff'),
    bgColor = _useState19[0],
    setBgColor = _useState19[1];
  var _useState20 = React.useState('Arial'),
    fontFamily = _useState20[0],
    setFontFamily = _useState20[1];
  var _useState21 = React.useState(false),
    isLink = _useState21[0],
    setIsLink = _useState21[1];
  var _useState22 = React.useState(false),
    isBold = _useState22[0],
    setIsBold = _useState22[1];
  var _useState23 = React.useState(false),
    isItalic = _useState23[0],
    setIsItalic = _useState23[1];
  var _useState24 = React.useState(false),
    isUnderline = _useState24[0],
    setIsUnderline = _useState24[1];
  var _useState25 = React.useState(false),
    isStrikethrough = _useState25[0],
    setIsStrikethrough = _useState25[1];
  var _useState26 = React.useState(false),
    isSubscript = _useState26[0],
    setIsSubscript = _useState26[1];
  var _useState27 = React.useState(false),
    isSuperscript = _useState27[0],
    setIsSuperscript = _useState27[1];
  var _useState28 = React.useState(false),
    isCode = _useState28[0],
    setIsCode = _useState28[1];
  var _useState29 = React.useState(false),
    canUndo = _useState29[0],
    setCanUndo = _useState29[1];
  var _useState30 = React.useState(false),
    canRedo = _useState30[0],
    setCanRedo = _useState30[1];
  var _useModal = useModal(),
    modal = _useModal[0],
    showModal = _useModal[1];
  var _useState31 = React.useState(false),
    isRTL = _useState31[0],
    setIsRTL = _useState31[1];
  var _useState32 = React.useState(''),
    codeLanguage = _useState32[0],
    setCodeLanguage = _useState32[1];
  var updateToolbar = React.useCallback(function () {
    var selection$1 = lexical.$getSelection();
    if (lexical.$isRangeSelection(selection$1)) {
      var anchorNode = selection$1.anchor.getNode();
      var element = anchorNode.getKey() === 'root' ? anchorNode : anchorNode.getTopLevelElementOrThrow();
      var elementKey = element.getKey();
      var elementDOM = activeEditor.getElementByKey(elementKey);
      setIsBold(selection$1.hasFormat('bold'));
      setIsItalic(selection$1.hasFormat('italic'));
      setIsUnderline(selection$1.hasFormat('underline'));
      setIsStrikethrough(selection$1.hasFormat('strikethrough'));
      setIsSubscript(selection$1.hasFormat('subscript'));
      setIsSuperscript(selection$1.hasFormat('superscript'));
      setIsCode(selection$1.hasFormat('code'));
      setIsRTL(selection.$isParentElementRTL(selection$1));
      var node = getSelectedNode$1(selection$1);
      var parent = node.getParent();
      if (link.$isLinkNode(parent) || link.$isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }
      if (elementDOM !== null) {
        setSelectedElementKey(elementKey);
        if (list.$isListNode(element)) {
          var parentList = utils.$getNearestNodeOfType(anchorNode, list.ListNode);
          var type = parentList ? parentList.getListType() : element.getListType();
          setBlockType(type);
        } else {
          var _type = richText.$isHeadingNode(element) ? element.getTag() : element.getType();
          if (_type in blockTypeToBlockName) {
            setBlockType(_type);
          }
          if (code.$isCodeNode(element)) {
            var language = element.getLanguage();
            setCodeLanguage(language ? CODE_LANGUAGE_MAP[language] || language : '');
            return;
          }
        }
      }
      setFontSize(selection.$getSelectionStyleValueForProperty(selection$1, 'font-size', '15px'));
      setFontColor(selection.$getSelectionStyleValueForProperty(selection$1, 'color', '#000'));
      setBgColor(selection.$getSelectionStyleValueForProperty(selection$1, 'background-color', '#fff'));
      setFontFamily(selection.$getSelectionStyleValueForProperty(selection$1, 'font-family', 'Arial'));
    }
  }, [activeEditor]);
  React.useEffect(function () {
    return editor.registerCommand(lexical.SELECTION_CHANGE_COMMAND, function (_payload, newEditor) {
      updateToolbar();
      setActiveEditor(newEditor);
      return false;
    }, lexical.COMMAND_PRIORITY_CRITICAL);
  }, [editor, updateToolbar]);
  React.useEffect(function () {
    return utils.mergeRegister(activeEditor.registerUpdateListener(function (_ref14) {
      var editorState = _ref14.editorState;
      editorState.read(function () {
        updateToolbar();
      });
    }), activeEditor.registerCommand(lexical.CAN_UNDO_COMMAND, function (payload) {
      setCanUndo(payload);
      return false;
    }, lexical.COMMAND_PRIORITY_CRITICAL), activeEditor.registerCommand(lexical.CAN_REDO_COMMAND, function (payload) {
      setCanRedo(payload);
      return false;
    }, lexical.COMMAND_PRIORITY_CRITICAL));
  }, [activeEditor, updateToolbar]);
  var applyStyleText = React.useCallback(function (styles) {
    activeEditor.update(function () {
      var selection$1 = lexical.$getSelection();
      if (lexical.$isRangeSelection(selection$1)) {
        selection.$patchStyleText(selection$1, styles);
      }
    });
  }, [activeEditor]);
  var clearFormatting = React.useCallback(function () {
    activeEditor.update(function () {
      var selection$1 = lexical.$getSelection();
      if (lexical.$isRangeSelection(selection$1)) {
        selection.$selectAll(selection$1);
        selection$1.getNodes().forEach(function (node) {
          if (lexical.$isTextNode(node)) {
            node.setFormat(0);
            node.setStyle('');
            utils.$getNearestBlockElementAncestorOrThrow(node).setFormat('');
          }
          if (LexicalDecoratorBlockNode.$isDecoratorBlockNode(node)) {
            node.setFormat('');
          }
        });
      }
    });
  }, [activeEditor]);
  var onFontSizeSelect = React.useCallback(function (e) {
    applyStyleText({
      'font-size': e.target.value
    });
  }, [applyStyleText]);
  var onFontColorSelect = React.useCallback(function (value) {
    applyStyleText({
      color: value
    });
  }, [applyStyleText]);
  var onBgColorSelect = React.useCallback(function (value) {
    applyStyleText({
      'background-color': value
    });
  }, [applyStyleText]);
  var onFontFamilySelect = React.useCallback(function (e) {
    applyStyleText({
      'font-family': e.target.value
    });
  }, [applyStyleText]);
  var insertLink = React.useCallback(function () {
    if (!isLink) {
      editor.dispatchCommand(link.TOGGLE_LINK_COMMAND, 'https://');
    } else {
      editor.dispatchCommand(link.TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink]);
  var onCodeLanguageSelect = React.useCallback(function (e) {
    activeEditor.update(function () {
      if (selectedElementKey !== null) {
        var node = lexical.$getNodeByKey(selectedElementKey);
        if (code.$isCodeNode(node)) {
          node.setLanguage(e.target.value);
        }
      }
    });
  }, [activeEditor, selectedElementKey]);
  return React.createElement("div", {
    className: "toolbar"
  }, React.createElement("button", {
    disabled: !canUndo,
    onClick: function onClick() {
      activeEditor.dispatchCommand(lexical.UNDO_COMMAND, undefined);
    },
    title: IS_APPLE ? 'Undo (⌘Z)' : 'Undo (Ctrl+Z)',
    className: "toolbar-item spaced",
    "aria-label": "Undo"
  }, React.createElement("i", {
    className: "format undo"
  })), React.createElement("button", {
    disabled: !canRedo,
    onClick: function onClick() {
      activeEditor.dispatchCommand(lexical.REDO_COMMAND, undefined);
    },
    title: IS_APPLE ? 'Redo (⌘Y)' : 'Undo (Ctrl+Y)',
    className: "toolbar-item",
    "aria-label": "Redo"
  }, React.createElement("i", {
    className: "format redo"
  })), React.createElement(Divider, null), blockType in blockTypeToBlockName && activeEditor === editor && React.createElement(React.Fragment, null, React.createElement(BlockFormatDropDown, {
    blockType: blockType,
    editor: editor
  }), React.createElement(Divider, null)), blockType === 'code' ? React.createElement(React.Fragment, null, React.createElement(Select, {
    className: "toolbar-item code-language",
    onChange: onCodeLanguageSelect,
    options: CODE_LANGUAGE_OPTIONS,
    value: codeLanguage
  }), React.createElement("i", {
    className: "chevron-down inside"
  })) : React.createElement(React.Fragment, null, React.createElement(React.Fragment, null, React.createElement(Select, {
    className: "toolbar-item font-family",
    onChange: onFontFamilySelect,
    options: [['Arial', 'Arial'], ['Courier New', 'Courier New'], ['Georgia', 'Georgia'], ['Times New Roman', 'Times New Roman'], ['Trebuchet MS', 'Trebuchet MS'], ['Verdana', 'Verdana']],
    value: fontFamily
  }), React.createElement("i", {
    className: "chevron-down inside"
  })), React.createElement(React.Fragment, null, React.createElement(Select, {
    className: "toolbar-item font-size",
    onChange: onFontSizeSelect,
    options: [['10px', '10px'], ['11px', '11px'], ['12px', '12px'], ['13px', '13px'], ['14px', '14px'], ['15px', '15px'], ['16px', '16px'], ['17px', '17px'], ['18px', '18px'], ['19px', '19px'], ['20px', '20px']],
    value: fontSize
  }), React.createElement("i", {
    className: "chevron-down inside"
  })), React.createElement(Divider, null), React.createElement("button", {
    onClick: function onClick() {
      activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'bold');
    },
    className: 'toolbar-item spaced ' + (isBold ? 'active' : ''),
    title: IS_APPLE ? 'Bold (⌘B)' : 'Bold (Ctrl+B)',
    "aria-label": "Format text as bold. Shortcut: " + (IS_APPLE ? '⌘B' : 'Ctrl+B')
  }, React.createElement("i", {
    className: "format bold"
  })), React.createElement("button", {
    onClick: function onClick() {
      activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'italic');
    },
    className: 'toolbar-item spaced ' + (isItalic ? 'active' : ''),
    title: IS_APPLE ? 'Italic (⌘I)' : 'Italic (Ctrl+I)',
    "aria-label": "Format text as italics. Shortcut: " + (IS_APPLE ? '⌘I' : 'Ctrl+I')
  }, React.createElement("i", {
    className: "format italic"
  })), React.createElement("button", {
    onClick: function onClick() {
      activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'underline');
    },
    className: 'toolbar-item spaced ' + (isUnderline ? 'active' : ''),
    title: IS_APPLE ? 'Underline (⌘U)' : 'Underline (Ctrl+U)',
    "aria-label": "Format text to underlined. Shortcut: " + (IS_APPLE ? '⌘U' : 'Ctrl+U')
  }, React.createElement("i", {
    className: "format underline"
  })), React.createElement("button", {
    onClick: function onClick() {
      activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'code');
    },
    className: 'toolbar-item spaced ' + (isCode ? 'active' : ''),
    title: "Insert code block",
    "aria-label": "Insert code block"
  }, React.createElement("i", {
    className: "format code"
  })), React.createElement("button", {
    onClick: insertLink,
    className: 'toolbar-item spaced ' + (isLink ? 'active' : ''),
    "aria-label": "Insert link",
    title: "Insert link"
  }, React.createElement("i", {
    className: "format link"
  })), isLink && reactDom.createPortal(React.createElement(FloatingLinkEditor, {
    editor: activeEditor
  }), document.body), React.createElement(ColorPicker, {
    buttonClassName: "toolbar-item color-picker",
    buttonAriaLabel: "Formatting text color",
    buttonIconClassName: "icon font-color",
    color: fontColor,
    onChange: onFontColorSelect,
    title: "text color"
  }), React.createElement(ColorPicker, {
    buttonClassName: "toolbar-item color-picker",
    buttonAriaLabel: "Formatting background color",
    buttonIconClassName: "icon bg-color",
    color: bgColor,
    onChange: onBgColorSelect,
    title: "bg color"
  }), React.createElement(DropDown, {
    buttonClassName: "toolbar-item spaced",
    buttonLabel: "",
    buttonAriaLabel: "Formatting options for additional text styles",
    buttonIconClassName: "icon dropdown-more"
  }, React.createElement(DropDownItem, {
    onClick: function onClick() {
      activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'strikethrough');
    },
    className: 'item ' + dropDownActiveClass(isStrikethrough),
    title: "Strikethrough",
    "aria-label": "Format text with a strikethrough"
  }, React.createElement("i", {
    className: "icon strikethrough"
  }), React.createElement("span", {
    className: "text"
  }, "Strikethrough")), React.createElement(DropDownItem, {
    onClick: function onClick() {
      activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'subscript');
    },
    className: 'item ' + dropDownActiveClass(isSubscript),
    title: "Subscript",
    "aria-label": "Format text with a subscript"
  }, React.createElement("i", {
    className: "icon subscript"
  }), React.createElement("span", {
    className: "text"
  }, "Subscript")), React.createElement(DropDownItem, {
    onClick: function onClick() {
      activeEditor.dispatchCommand(lexical.FORMAT_TEXT_COMMAND, 'superscript');
    },
    className: 'item ' + dropDownActiveClass(isSuperscript),
    title: "Superscript",
    "aria-label": "Format text with a superscript"
  }, React.createElement("i", {
    className: "icon superscript"
  }), React.createElement("span", {
    className: "text"
  }, "Superscript")), React.createElement(DropDownItem, {
    onClick: clearFormatting,
    className: "item",
    title: "Clear text formatting",
    "aria-label": "Clear all text formatting"
  }, React.createElement("i", {
    className: "icon clear"
  }), React.createElement("span", {
    className: "text"
  }, "Clear Formatting"))), React.createElement(Divider, null), React.createElement(DropDown, {
    buttonClassName: "toolbar-item spaced",
    buttonLabel: "Insert",
    buttonAriaLabel: "Insert specialized editor node",
    buttonIconClassName: "icon plus"
  }, React.createElement(DropDownItem, {
    onClick: function onClick() {
      activeEditor.dispatchCommand(LexicalHorizontalRuleNode.INSERT_HORIZONTAL_RULE_COMMAND, undefined);
    },
    className: "item"
  }, React.createElement("i", {
    className: "icon horizontal-rule"
  }), React.createElement("span", {
    className: "text"
  }, "Horizontal Rule")), React.createElement(DropDownItem, {
    onClick: function onClick() {
      showModal('Insert Image', function (onClose) {
        return React.createElement(InsertImageDialog, {
          activeEditor: activeEditor,
          onClose: onClose
        });
      });
    },
    className: "item"
  }, React.createElement("i", {
    className: "icon image"
  }), React.createElement("span", {
    className: "text"
  }, "Image")), React.createElement(DropDownItem, {
    onClick: function onClick() {
      activeEditor.dispatchCommand(INSERT_EXCALIDRAW_COMMAND, undefined);
    },
    className: "item"
  }, React.createElement("i", {
    className: "icon diagram-2"
  }), React.createElement("span", {
    className: "text"
  }, "Excalidraw")), React.createElement(DropDownItem, {
    onClick: function onClick() {
      showModal('Insert Table', function (onClose) {
        return React.createElement(InsertTableDialog, {
          activeEditor: activeEditor,
          onClose: onClose
        });
      });
    },
    className: "item"
  }, React.createElement("i", {
    className: "icon table"
  }), React.createElement("span", {
    className: "text"
  }, "Table")), React.createElement(DropDownItem, {
    onClick: function onClick() {
      showModal('Insert Poll', function (onClose) {
        return React.createElement(InsertPollDialog, {
          activeEditor: activeEditor,
          onClose: onClose
        });
      });
    },
    className: "item"
  }, React.createElement("i", {
    className: "icon poll"
  }), React.createElement("span", {
    className: "text"
  }, "Poll")), React.createElement(DropDownItem, {
    onClick: function onClick() {
      showModal('Insert Tweet', function (onClose) {
        return React.createElement(InsertTweetDialog, {
          activeEditor: activeEditor,
          onClose: onClose
        });
      });
    },
    className: "item"
  }, React.createElement("i", {
    className: "icon tweet"
  }), React.createElement("span", {
    className: "text"
  }, "Tweet")), React.createElement(DropDownItem, {
    onClick: function onClick() {
      showModal('Insert YouTube Video', function (onClose) {
        return React.createElement(InsertYouTubeDialog, {
          activeEditor: activeEditor,
          onClose: onClose
        });
      });
    },
    className: "item"
  }, React.createElement("i", {
    className: "icon youtube"
  }), React.createElement("span", {
    className: "text"
  }, "YouTube Video")), React.createElement(DropDownItem, {
    onClick: function onClick() {
      showModal('Insert Equation', function (onClose) {
        return React.createElement(InsertEquationDialog, {
          activeEditor: activeEditor,
          onClose: onClose
        });
      });
    },
    className: "item"
  }, React.createElement("i", {
    className: "icon equation"
  }), React.createElement("span", {
    className: "text"
  }, "Equation")), React.createElement(DropDownItem, {
    onClick: function onClick() {
      editor.update(function () {
        var root = lexical.$getRoot();
        var stickyNode = $createStickyNode(0, 0);
        root.append(stickyNode);
      });
    },
    className: "item"
  }, React.createElement("i", {
    className: "icon sticky"
  }), React.createElement("span", {
    className: "text"
  }, "Sticky Note")))), React.createElement(Divider, null), React.createElement(DropDown, {
    buttonLabel: "Align",
    buttonIconClassName: "icon left-align",
    buttonClassName: "toolbar-item spaced alignment",
    buttonAriaLabel: "Formatting options for text alignment"
  }, React.createElement(DropDownItem, {
    onClick: function onClick() {
      activeEditor.dispatchCommand(lexical.FORMAT_ELEMENT_COMMAND, 'left');
    },
    className: "item"
  }, React.createElement("i", {
    className: "icon left-align"
  }), React.createElement("span", {
    className: "text"
  }, "Left Align")), React.createElement(DropDownItem, {
    onClick: function onClick() {
      activeEditor.dispatchCommand(lexical.FORMAT_ELEMENT_COMMAND, 'center');
    },
    className: "item"
  }, React.createElement("i", {
    className: "icon center-align"
  }), React.createElement("span", {
    className: "text"
  }, "Center Align")), React.createElement(DropDownItem, {
    onClick: function onClick() {
      activeEditor.dispatchCommand(lexical.FORMAT_ELEMENT_COMMAND, 'right');
    },
    className: "item"
  }, React.createElement("i", {
    className: "icon right-align"
  }), React.createElement("span", {
    className: "text"
  }, "Right Align")), React.createElement(DropDownItem, {
    onClick: function onClick() {
      activeEditor.dispatchCommand(lexical.FORMAT_ELEMENT_COMMAND, 'justify');
    },
    className: "item"
  }, React.createElement("i", {
    className: "icon justify-align"
  }), React.createElement("span", {
    className: "text"
  }, "Justify Align")), React.createElement(Divider, null), React.createElement(DropDownItem, {
    onClick: function onClick() {
      activeEditor.dispatchCommand(lexical.OUTDENT_CONTENT_COMMAND, undefined);
    },
    className: "item"
  }, React.createElement("i", {
    className: 'icon ' + (isRTL ? 'indent' : 'outdent')
  }), React.createElement("span", {
    className: "text"
  }, "Outdent")), React.createElement(DropDownItem, {
    onClick: function onClick() {
      activeEditor.dispatchCommand(lexical.INDENT_CONTENT_COMMAND, undefined);
    },
    className: "item"
  }, React.createElement("i", {
    className: 'icon ' + (isRTL ? 'outdent' : 'indent')
  }), React.createElement("span", {
    className: "text"
  }, "Indent"))), modal);
}

function Placeholder(_ref) {
  var children = _ref.children,
    className = _ref.className;
  return React.createElement("div", {
    className: className || 'Placeholder__root'
  }, children);
}

function Editor() {
  var _useSharedHistoryCont = useSharedHistoryContext(),
    historyState = _useSharedHistoryCont.historyState;
  var _useSettings = useSettings(),
    _useSettings$settings = _useSettings.settings,
    isCollab = _useSettings$settings.isCollab,
    isAutocomplete = _useSettings$settings.isAutocomplete,
    isMaxLength = _useSettings$settings.isMaxLength,
    isRichText = _useSettings$settings.isRichText,
    showTreeView = _useSettings$settings.showTreeView;
  var text = isCollab ? 'Enter some collaborative rich text...' : isRichText ? 'Enter some rich text...' : 'Enter some plain text...';
  var placeholder = React.createElement(Placeholder, null, text);
  var scrollRef = React.useRef(null);
  return React.createElement(React.Fragment, null, isRichText && React.createElement(ToolbarPlugin, null), React.createElement("div", {
    className: "editor-container " + (showTreeView ? 'tree-view' : '') + " " + (!isRichText ? 'plain-text' : ''),
    ref: scrollRef
  }, isMaxLength && React.createElement(MaxLengthPlugin, {
    maxLength: 30
  }), React.createElement(LexicalAutoFocusPlugin.AutoFocusPlugin, null), React.createElement(LexicalClearEditorPlugin.ClearEditorPlugin, null), React.createElement(MentionsPlugin, null), React.createElement(EmojisPlugin, null), React.createElement(LexicalHashtagPlugin.HashtagPlugin, null), React.createElement(KeywordsPlugin, null), React.createElement(SpeechToTextPlugin$1, null), React.createElement(LexicalAutoLinkPlugin, null), isRichText ? React.createElement(React.Fragment, null, React.createElement(CodeHighlightPlugin, null), React.createElement(LexicalListPlugin.ListPlugin, null), React.createElement(LexicalCheckListPlugin.CheckListPlugin, null), React.createElement(ListMaxIndentLevelPlugin, {
    maxDepth: 7
  }), React.createElement(LexicalTablePlugin.TablePlugin, null), React.createElement(TableActionMenuPlugin, null), React.createElement(TableCellResizerPlugin, null), React.createElement(ImagesPlugin, null), React.createElement(LexicalLinkPlugin.LinkPlugin, null), React.createElement(PollPlugin, null), React.createElement(TwitterPlugin, null), React.createElement(YouTubePlugin, null), React.createElement(ClickableLinkPlugin, null), React.createElement(HorizontalRulePlugin, null), React.createElement(TextFormatFloatingToolbarPlugin, null), React.createElement(EquationsPlugin, null), React.createElement(ExcalidrawPlugin, null), React.createElement(TabFocusPlugin, null)) : React.createElement(React.Fragment, null, React.createElement(LexicalHistoryPlugin.HistoryPlugin, {
    externalHistoryState: historyState
  })), isAutocomplete && React.createElement(AutocompletePlugin, null), React.createElement(ActionsPlugin, {
    isRichText: isRichText
  })));
}

var TypeaheadNode = /*#__PURE__*/function (_TextNode) {
  _inheritsLoose(TypeaheadNode, _TextNode);
  function TypeaheadNode() {
    return _TextNode.apply(this, arguments) || this;
  }
  TypeaheadNode.clone = function clone(node) {
    return new TypeaheadNode(node.__text, node.__key);
  };
  TypeaheadNode.getType = function getType() {
    return 'typeahead';
  };
  var _proto = TypeaheadNode.prototype;
  _proto.exportJSON = function exportJSON() {
    return _extends({}, _TextNode.prototype.exportJSON.call(this), {
      type: 'typeahead',
      version: 1
    });
  };
  _proto.createDOM = function createDOM(config) {
    var dom = _TextNode.prototype.createDOM.call(this, config);
    dom.style.cssText = 'color: #ccc;';
    return dom;
  };
  return TypeaheadNode;
}(lexical.TextNode);

var PlaygroundNodes = [richText.HeadingNode, list.ListNode, list.ListItemNode, richText.QuoteNode, code.CodeNode, table.TableNode, table.TableCellNode, table.TableRowNode, hashtag.HashtagNode, code.CodeHighlightNode, link.AutoLinkNode, link.LinkNode, overflow.OverflowNode, PollNode, StickyNode, ImageNode, MentionNode, EmojiNode, ExcalidrawNode, EquationNode, AutocompleteNode, TypeaheadNode, KeywordNode, LexicalHorizontalRuleNode.HorizontalRuleNode, TweetNode, YouTubeNode, mark.MarkNode];

var copy = function copy(text) {
  var _document$body, _document$body2;
  var textArea = document.createElement('textarea');
  textArea.value = text || '';
  textArea.style.position = 'absolute';
  textArea.style.opacity = '0';
  (_document$body = document.body) == null || _document$body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    var result = document.execCommand('copy');
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  (_document$body2 = document.body) == null || _document$body2.removeChild(textArea);
};
var download = function download(filename, text) {
  var _document$body3, _document$body4;
  var a = document.createElement('a');
  a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text || ''));
  a.setAttribute('download', filename);
  a.style.display = 'none';
  (_document$body3 = document.body) == null || _document$body3.appendChild(a);
  a.click();
  (_document$body4 = document.body) == null || _document$body4.removeChild(a);
};
var formatStep = function formatStep(step) {
  var formatOneStep = function formatOneStep(name, value) {
    switch (name) {
      case 'click':
        {
          return "      await page.mouse.click(" + value.x + ", " + value.y + ");";
        }
      case 'press':
        {
          return "      await page.keyboard.press('" + value + "');";
        }
      case 'keydown':
        {
          return "      await page.keyboard.keydown('" + value + "');";
        }
      case 'keyup':
        {
          return "      await page.keyboard.keyup('" + value + "');";
        }
      case 'type':
        {
          return "      await page.keyboard.type('" + value + "');";
        }
      case 'selectAll':
        {
          return "      await selectAll(page);";
        }
      case 'snapshot':
        {
          return "      await assertHTMLSnapshot(page);\n      await assertSelection(page, {\n        anchorPath: [" + value.anchorPath.toString() + "],\n        anchorOffset: " + value.anchorOffset + ",\n        focusPath: [" + value.focusPath.toString() + "],\n        focusOffset: " + value.focusOffset + ",\n      });\n";
        }
      default:
        return "";
    }
  };
  var formattedStep = formatOneStep(step.name, step.value);
  switch (step.count) {
    case 1:
      return formattedStep;
    case 2:
      return [formattedStep, formattedStep].join("\n");
    default:
      return "      await repeat(" + step.count + ", async () => {\n  " + formattedStep + "\n      );";
  }
};
function isSelectAll(event) {
  return event.keyCode === 65 && (IS_APPLE ? event.metaKey : event.ctrlKey);
}
function sanitizeSelection(selection) {
  var anchorNode = selection.anchorNode,
    focusNode = selection.focusNode;
  var anchorOffset = selection.anchorOffset,
    focusOffset = selection.focusOffset;
  if (anchorOffset !== 0) {
    anchorOffset--;
  }
  if (focusOffset !== 0) {
    focusOffset--;
  }
  return {
    anchorNode: anchorNode,
    anchorOffset: anchorOffset,
    focusNode: focusNode,
    focusOffset: focusOffset
  };
}
function getPathFromNodeToEditor(node, rootElement) {
  var currentNode = node;
  var path = [];
  while (currentNode !== rootElement) {
    var _currentNode2;
    if (currentNode !== null && currentNode !== undefined) {
      var _currentNode$parentNo, _currentNode;
      path.unshift(Array.from((_currentNode$parentNo = (_currentNode = currentNode) == null || (_currentNode = _currentNode.parentNode) == null ? void 0 : _currentNode.childNodes) != null ? _currentNode$parentNo : []).indexOf(currentNode));
    }
    currentNode = (_currentNode2 = currentNode) == null ? void 0 : _currentNode2.parentNode;
  }
  return path;
}
var keyPresses = /*#__PURE__*/new Set(['Enter', 'Backspace', 'Delete', 'Escape', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']);
function useTestRecorder(editor) {
  var _useState = React.useState([]),
    steps = _useState[0],
    setSteps = _useState[1];
  var _useState2 = React.useState(false),
    isRecording = _useState2[0],
    setIsRecording = _useState2[1];
  var _useState3 = React.useState(''),
    setCurrentInnerHTML = _useState3[1];
  var _useState4 = React.useState(''),
    templatedTest = _useState4[0],
    setTemplatedTest = _useState4[1];
  var previousSelectionRef = React.useRef(null);
  var skipNextSelectionChangeRef = React.useRef(false);
  var preRef = React.useRef(null);
  var getCurrentEditor = React.useCallback(function () {
    return editor;
  }, [editor]);
  var generateTestContent = React.useCallback(function () {
    var rootElement = editor.getRootElement();
    var browserSelection = window.getSelection();
    if (rootElement == null || browserSelection == null || browserSelection.anchorNode == null || browserSelection.focusNode == null || !rootElement.contains(browserSelection.anchorNode) || !rootElement.contains(browserSelection.focusNode)) {
      return null;
    }
    return "\n/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\nimport {\n  initializeE2E,\n  assertHTMLSnapshot,\n  assertSelection,\n  repeat,\n} from '../utils';\nimport {selectAll} from '../keyboardShortcuts';\nimport { RangeSelection } from 'lexical';\nimport { NodeSelection } from 'lexical';\n\ndescribe('Test case', () => {\n  initializeE2E((e2e) => {\n    it('Should pass this test', async () => {\n      const {page} = e2e;\n\n      await page.focus('div[contenteditable=\"true\"]');\n" + steps.map(formatStep).join("\n") + "\n    });\n});\n    ";
  }, [editor, steps]);
  var pushStep = React.useCallback(function (name, value) {
    setSteps(function (currentSteps) {
      var currentIndex = steps.length - 1;
      var lastStep = steps[currentIndex];
      if (lastStep) {
        if (lastStep.name === name) {
          if (name === 'type') {
            return [].concat(steps.slice(0, currentIndex), [_extends({}, lastStep, {
              value: lastStep.value + value
            })]);
          } else {
            if (lastStep.value === value) {
              return [].concat(steps.slice(0, currentIndex), [_extends({}, lastStep, {
                count: lastStep.count + 1
              })]);
            }
          }
        }
      }
      return [].concat(currentSteps, [{
        count: 1,
        name: name,
        value: value
      }]);
    });
  }, [steps, setSteps]);
  useLayoutEffectImpl(function () {
    var onKeyDown = function onKeyDown(event) {
      if (!isRecording) {
        return;
      }
      var key = event.key;
      if (isSelectAll(event)) {
        pushStep('selectAll', '');
      } else if (keyPresses.has(key)) {
        pushStep('press', event.key);
      } else if ([].concat(key).length > 1) {
        pushStep('keydown', event.key);
      } else {
        pushStep('type', event.key);
      }
    };
    var onKeyUp = function onKeyUp(event) {
      if (!isRecording) {
        return;
      }
      var key = event.key;
      if (!keyPresses.has(key) && [].concat(key).length > 1) {
        pushStep('keyup', event.key);
      }
    };
    return editor.registerRootListener(function (rootElement, prevRootElement) {
      if (prevRootElement !== null) {
        prevRootElement.removeEventListener('keydown', onKeyDown);
        prevRootElement.removeEventListener('keyup', onKeyUp);
      }
      if (rootElement !== null) {
        rootElement.addEventListener('keydown', onKeyDown);
        rootElement.addEventListener('keyup', onKeyUp);
      }
    });
  }, [editor, isRecording, pushStep]);
  useLayoutEffectImpl(function () {
    if (preRef.current) {
      preRef.current.scrollTo(0, preRef.current.scrollHeight);
    }
  }, [generateTestContent]);
  React.useEffect(function () {
    if (steps) {
      var testContent = generateTestContent();
      if (testContent !== null) {
        setTemplatedTest(testContent);
      }
      if (preRef.current) {
        preRef.current.scrollTo(0, preRef.current.scrollHeight);
      }
    }
  }, [generateTestContent, steps]);
  React.useEffect(function () {
    var removeUpdateListener = editor.registerUpdateListener(function (_ref) {
      var editorState = _ref.editorState,
        dirtyLeaves = _ref.dirtyLeaves,
        dirtyElements = _ref.dirtyElements;
      if (!isRecording) {
        return;
      }
      var currentSelection = editorState._selection;
      var previousSelection = previousSelectionRef.current;
      var skipNextSelectionChange = skipNextSelectionChangeRef.current;
      if (previousSelection !== currentSelection) {
        if (dirtyLeaves.size === 0 && dirtyElements.size === 0 && !skipNextSelectionChange) {
          var browserSelection = window.getSelection();
          if (browserSelection && (browserSelection.anchorNode == null || browserSelection.focusNode == null)) {
            return;
          }
        }
      }
      skipNextSelectionChangeRef.current = false;
      var testContent = generateTestContent();
      if (testContent !== null) {
        setTemplatedTest(testContent);
      }
    });
    return removeUpdateListener;
  }, [editor, generateTestContent, isRecording, pushStep]);
  React.useEffect(function () {
    if (!isRecording) {
      return;
    }
    var removeUpdateListener = editor.registerUpdateListener(function () {
      var rootElement = editor.getRootElement();
      if (rootElement !== null) {
        setCurrentInnerHTML(rootElement == null ? void 0 : rootElement.innerHTML);
      }
    });
    return removeUpdateListener;
  }, [editor, isRecording]);
  var toggleEditorSelection = React.useCallback(function (currentEditor) {
    if (!isRecording) {
      currentEditor.update(function () {
        var root = lexical.$getRoot();
        root.clear();
        var text = lexical.$createTextNode();
        root.append(lexical.$createParagraphNode().append(text));
        text.select();
      });
      setSteps([]);
    }
    setIsRecording(function (currentIsRecording) {
      return !currentIsRecording;
    });
  }, [isRecording]);
  var onSnapshotClick = React.useCallback(function () {
    if (!isRecording) {
      return;
    }
    var browserSelection = window.getSelection();
    if (browserSelection === null || browserSelection.anchorNode == null || browserSelection.focusNode == null) {
      return;
    }
    var _sanitizeSelection = sanitizeSelection(browserSelection),
      anchorNode = _sanitizeSelection.anchorNode,
      anchorOffset = _sanitizeSelection.anchorOffset,
      focusNode = _sanitizeSelection.focusNode,
      focusOffset = _sanitizeSelection.focusOffset;
    var rootElement = getCurrentEditor().getRootElement();
    var anchorPath;
    if (anchorNode !== null) {
      anchorPath = getPathFromNodeToEditor(anchorNode, rootElement);
    }
    var focusPath;
    if (focusNode !== null) {
      focusPath = getPathFromNodeToEditor(focusNode, rootElement);
    }
    pushStep('snapshot', {
      anchorNode: anchorNode,
      anchorOffset: anchorOffset,
      anchorPath: anchorPath,
      focusNode: focusNode,
      focusOffset: focusOffset,
      focusPath: focusPath
    });
  }, [pushStep, isRecording, getCurrentEditor]);
  var onCopyClick = React.useCallback(function () {
    copy(generateTestContent());
  }, [generateTestContent]);
  var onDownloadClick = React.useCallback(function () {
    download('test.js', generateTestContent());
  }, [generateTestContent]);
  var button = React.createElement("button", {
    id: "test-recorder-button",
    className: "editor-dev-button " + (isRecording ? 'active' : ''),
    onClick: function onClick() {
      return toggleEditorSelection(getCurrentEditor());
    },
    title: isRecording ? 'Disable test recorder' : 'Enable test recorder'
  });
  var output = isRecording ? React.createElement("div", {
    className: "test-recorder-output"
  }, React.createElement("div", {
    className: "test-recorder-toolbar"
  }, React.createElement("button", {
    className: "test-recorder-button",
    id: "test-recorder-button-snapshot",
    title: "Insert snapshot",
    onClick: onSnapshotClick
  }), React.createElement("button", {
    className: "test-recorder-button",
    id: "test-recorder-button-copy",
    title: "Copy to clipboard",
    onClick: onCopyClick
  }), React.createElement("button", {
    className: "test-recorder-button",
    id: "test-recorder-button-download",
    title: "Download as a file",
    onClick: onDownloadClick
  })), React.createElement("pre", {
    id: "test-recorder",
    ref: preRef
  }, templatedTest)) : null;
  return [button, output];
}
function TestRecorderPlugin() {
  var _useLexicalComposerCo = LexicalComposerContext.useLexicalComposerContext(),
    editor = _useLexicalComposerCo[0];
  var _useTestRecorder = useTestRecorder(editor),
    testRecorderButton = _useTestRecorder[0],
    testRecorderOutput = _useTestRecorder[1];
  return React.createElement(React.Fragment, null, testRecorderButton, testRecorderOutput);
}

function Switch(_ref) {
  var checked = _ref.checked,
    onClick = _ref.onClick,
    text = _ref.text,
    id = _ref.id;
  var buttonId = React.useMemo(function () {
    return 'id_' + Math.floor(Math.random() * 10000);
  }, []);
  return React.createElement("div", {
    className: "switch",
    id: id
  }, React.createElement("label", {
    htmlFor: buttonId
  }, text), React.createElement("button", {
    role: "switch",
    "aria-checked": checked,
    id: buttonId,
    onClick: onClick
  }, React.createElement("span", null)));
}

function Settings() {
  var windowLocation = window.location;
  var _useSettings = useSettings(),
    setOption = _useSettings.setOption,
    _useSettings$settings = _useSettings.settings,
    measureTypingPerf = _useSettings$settings.measureTypingPerf,
    isCollab = _useSettings$settings.isCollab,
    isRichText = _useSettings$settings.isRichText,
    isMaxLength = _useSettings$settings.isMaxLength,
    isCharLimit = _useSettings$settings.isCharLimit,
    isCharLimitUtf8 = _useSettings$settings.isCharLimitUtf8,
    isAutocomplete = _useSettings$settings.isAutocomplete,
    showTreeView = _useSettings$settings.showTreeView,
    showNestedEditorTreeView = _useSettings$settings.showNestedEditorTreeView,
    disableBeforeInput = _useSettings$settings.disableBeforeInput;
  var _useState = React.useState(false),
    showSettings = _useState[0],
    setShowSettings = _useState[1];
  var _useMemo = React.useMemo(function () {
      var parentWindow = window.parent;
      var _search = windowLocation.search;
      var _isSplitScreen = parentWindow && parentWindow.location.pathname === '/split/';
      return [_isSplitScreen, _search];
    }, [windowLocation]),
    isSplitScreen = _useMemo[0],
    search = _useMemo[1];
  return React.createElement(React.Fragment, null, React.createElement("button", {
    id: "options-button",
    className: "editor-dev-button " + (showSettings ? 'active' : ''),
    onClick: function onClick() {
      return setShowSettings(!showSettings);
    }
  }), showSettings ? React.createElement("div", {
    className: "switches"
  }, isRichText && isDevPlayground && React.createElement(Switch, {
    onClick: function onClick() {
      setOption('isCollab', !isCollab);
      window.location.reload();
    },
    checked: isCollab,
    text: "Collaboration"
  }), isDevPlayground && React.createElement(Switch, {
    onClick: function onClick() {
      if (isSplitScreen) {
        window.parent.location.href = "/" + search;
      } else {
        window.location.href = "/split/" + search;
      }
    },
    checked: isSplitScreen,
    text: "Split Screen"
  }), React.createElement(Switch, {
    onClick: function onClick() {
      return setOption('measureTypingPerf', !measureTypingPerf);
    },
    checked: measureTypingPerf,
    text: "Measure Perf"
  }), React.createElement(Switch, {
    onClick: function onClick() {
      return setOption('showTreeView', !showTreeView);
    },
    checked: showTreeView,
    text: "Debug View"
  }), React.createElement(Switch, {
    onClick: function onClick() {
      return setOption('showNestedEditorTreeView', !showNestedEditorTreeView);
    },
    checked: showNestedEditorTreeView,
    text: "Nested Editors Debug View"
  }), React.createElement(Switch, {
    onClick: function onClick() {
      setOption('isRichText', !isRichText);
      setOption('isCollab', false);
    },
    checked: isRichText,
    text: "Rich Text"
  }), React.createElement(Switch, {
    onClick: function onClick() {
      return setOption('isCharLimit', !isCharLimit);
    },
    checked: isCharLimit,
    text: "Char Limit"
  }), React.createElement(Switch, {
    onClick: function onClick() {
      return setOption('isCharLimitUtf8', !isCharLimitUtf8);
    },
    checked: isCharLimitUtf8,
    text: "Char Limit (UTF-8)"
  }), React.createElement(Switch, {
    onClick: function onClick() {
      return setOption('isMaxLength', !isMaxLength);
    },
    checked: isMaxLength,
    text: "Max Length"
  }), React.createElement(Switch, {
    onClick: function onClick() {
      return setOption('isAutocomplete', !isAutocomplete);
    },
    checked: isAutocomplete,
    text: "Autocomplete"
  }), React.createElement(Switch, {
    onClick: function onClick() {
      setOption('disableBeforeInput', !disableBeforeInput);
      setTimeout(function () {
        return window.location.reload();
      }, 500);
    },
    checked: disableBeforeInput,
    text: "Legacy Events"
  })) : null);
}

var theme = {
  characterLimit: 'PlaygroundEditorTheme__characterLimit',
  code: 'PlaygroundEditorTheme__code',
  codeHighlight: {
    atrule: 'PlaygroundEditorTheme__tokenAttr',
    attr: 'PlaygroundEditorTheme__tokenAttr',
    "boolean": 'PlaygroundEditorTheme__tokenProperty',
    builtin: 'PlaygroundEditorTheme__tokenSelector',
    cdata: 'PlaygroundEditorTheme__tokenComment',
    "char": 'PlaygroundEditorTheme__tokenSelector',
    "class": 'PlaygroundEditorTheme__tokenFunction',
    'class-name': 'PlaygroundEditorTheme__tokenFunction',
    comment: 'PlaygroundEditorTheme__tokenComment',
    constant: 'PlaygroundEditorTheme__tokenProperty',
    deleted: 'PlaygroundEditorTheme__tokenProperty',
    doctype: 'PlaygroundEditorTheme__tokenComment',
    entity: 'PlaygroundEditorTheme__tokenOperator',
    "function": 'PlaygroundEditorTheme__tokenFunction',
    important: 'PlaygroundEditorTheme__tokenVariable',
    inserted: 'PlaygroundEditorTheme__tokenSelector',
    keyword: 'PlaygroundEditorTheme__tokenAttr',
    namespace: 'PlaygroundEditorTheme__tokenVariable',
    number: 'PlaygroundEditorTheme__tokenProperty',
    operator: 'PlaygroundEditorTheme__tokenOperator',
    prolog: 'PlaygroundEditorTheme__tokenComment',
    property: 'PlaygroundEditorTheme__tokenProperty',
    punctuation: 'PlaygroundEditorTheme__tokenPunctuation',
    regex: 'PlaygroundEditorTheme__tokenVariable',
    selector: 'PlaygroundEditorTheme__tokenSelector',
    string: 'PlaygroundEditorTheme__tokenSelector',
    symbol: 'PlaygroundEditorTheme__tokenProperty',
    tag: 'PlaygroundEditorTheme__tokenProperty',
    url: 'PlaygroundEditorTheme__tokenOperator',
    variable: 'PlaygroundEditorTheme__tokenVariable'
  },
  embedBlock: {
    base: 'PlaygroundEditorTheme__embedBlock',
    focus: 'PlaygroundEditorTheme__embedBlockFocus'
  },
  hashtag: 'PlaygroundEditorTheme__hashtag',
  heading: {
    h1: 'PlaygroundEditorTheme__h1',
    h2: 'PlaygroundEditorTheme__h2',
    h3: 'PlaygroundEditorTheme__h3',
    h4: 'PlaygroundEditorTheme__h4',
    h5: 'PlaygroundEditorTheme__h5',
    h6: 'PlaygroundEditorTheme__h6'
  },
  image: 'editor-image',
  link: 'PlaygroundEditorTheme__link',
  list: {
    listitem: 'PlaygroundEditorTheme__listItem',
    listitemChecked: 'PlaygroundEditorTheme__listItemChecked',
    listitemUnchecked: 'PlaygroundEditorTheme__listItemUnchecked',
    nested: {
      listitem: 'PlaygroundEditorTheme__nestedListItem'
    },
    olDepth: ['PlaygroundEditorTheme__ol1', 'PlaygroundEditorTheme__ol2', 'PlaygroundEditorTheme__ol3', 'PlaygroundEditorTheme__ol4', 'PlaygroundEditorTheme__ol5'],
    ul: 'PlaygroundEditorTheme__ul'
  },
  ltr: 'PlaygroundEditorTheme__ltr',
  mark: 'PlaygroundEditorTheme__mark',
  markOverlap: 'PlaygroundEditorTheme__markOverlap',
  paragraph: 'PlaygroundEditorTheme__paragraph',
  quote: 'PlaygroundEditorTheme__quote',
  rtl: 'PlaygroundEditorTheme__rtl',
  table: 'PlaygroundEditorTheme__table',
  tableCell: 'PlaygroundEditorTheme__tableCell',
  tableCellHeader: 'PlaygroundEditorTheme__tableCellHeader',
  text: {
    bold: 'PlaygroundEditorTheme__textBold',
    code: 'PlaygroundEditorTheme__textCode',
    italic: 'PlaygroundEditorTheme__textItalic',
    strikethrough: 'PlaygroundEditorTheme__textStrikethrough',
    subscript: 'PlaygroundEditorTheme__textSubscript',
    superscript: 'PlaygroundEditorTheme__textSuperscript',
    underline: 'PlaygroundEditorTheme__textUnderline',
    underlineStrikethrough: 'PlaygroundEditorTheme__textUnderlineStrikethrough'
  }
};

console.warn('If you are profiling the playground app, please ensure you turn off the debug view. You can disable it by pressing on the settings control in the bottom-left of your screen and toggling the debug view setting.');
function prepopulatedRichText() {
  var root = lexical.$getRoot();
  if (root.getFirstChild() === null) {
    var heading = richText.$createHeadingNode('h1');
    heading.append(lexical.$createTextNode('Welcome to the playground'));
    root.append(heading);
    var quote = richText.$createQuoteNode();
    quote.append(lexical.$createTextNode("In case you were wondering what the black box at the bottom is \u2013 it's the debug view, showing the current state of editor. " + "You can disable it by pressing on the settings control in the bottom-left of your screen and toggling the debug view setting."));
    root.append(quote);
    var paragraph = lexical.$createParagraphNode();
    paragraph.append(lexical.$createTextNode('The playground is a demo environment built with '), lexical.$createTextNode('@lexical/react').toggleFormat('code'), lexical.$createTextNode('.'), lexical.$createTextNode(' Try typing in '), lexical.$createTextNode('some text').toggleFormat('bold'), lexical.$createTextNode(' with '), lexical.$createTextNode('different').toggleFormat('italic'), lexical.$createTextNode(' formats.'));
    root.append(paragraph);
    var paragraph2 = lexical.$createParagraphNode();
    paragraph2.append(lexical.$createTextNode('Make sure to check out the various plugins in the toolbar. You can also use #hashtags or @-mentions too!'));
    root.append(paragraph2);
    var paragraph3 = lexical.$createParagraphNode();
    paragraph3.append(lexical.$createTextNode("If you'd like to find out more about Lexical, you can:"));
    root.append(paragraph3);
    var list$1 = list.$createListNode('bullet');
    list$1.append(list.$createListItemNode().append(lexical.$createTextNode("Visit the "), link.$createLinkNode('https://lexical.dev/').append(lexical.$createTextNode('Lexical website')), lexical.$createTextNode(" for documentation and more information.")), list.$createListItemNode().append(lexical.$createTextNode("Check out the code on our "), link.$createLinkNode('https://github.com/facebook/lexical').append(lexical.$createTextNode('GitHub repository')), lexical.$createTextNode(".")), list.$createListItemNode().append(lexical.$createTextNode("Playground code can be found "), link.$createLinkNode('https://github.com/facebook/lexical/tree/main/packages/lexical-playground').append(lexical.$createTextNode('here')), lexical.$createTextNode(".")), list.$createListItemNode().append(lexical.$createTextNode("Join our "), link.$createLinkNode('https://discord.com/invite/KmG4wQnnD9').append(lexical.$createTextNode('Discord Server')), lexical.$createTextNode(" and chat with the team.")));
    root.append(list$1);
    var paragraph4 = lexical.$createParagraphNode();
    paragraph4.append(lexical.$createTextNode("Lastly, we're constantly adding cool new features to this playground. So make sure you check back here when you next get a chance :)."));
    root.append(paragraph4);
  }
}
function App() {
  var _useSettings = useSettings(),
    _useSettings$settings = _useSettings.settings,
    isCollab = _useSettings$settings.isCollab,
    emptyEditor = _useSettings$settings.emptyEditor;
  var initialConfig = {
    editorState: isCollab ? null : emptyEditor ? undefined : prepopulatedRichText,
    namespace: 'Playground',
    nodes: [].concat(PlaygroundNodes),
    onError: function onError(error) {
      throw error;
    },
    theme: theme
  };
  return React.createElement(LexicalComposer.LexicalComposer, {
    initialConfig: initialConfig
  }, React.createElement(SharedHistoryContext, null, React.createElement("header", null, React.createElement("a", {
    href: "https://lexical.dev",
    target: "_blank",
    rel: "noopener"
  })), React.createElement("div", {
    className: "editor-shell"
  }, React.createElement(Editor, null)), React.createElement(Settings, null), isDevPlayground ? React.createElement(TestRecorderPlugin, null) : null));
}
function PlaygroundApp() {
  return React.createElement(SettingsContext, null, React.createElement(App, null), React.createElement("a", {
    href: "https://github.com/facebook/lexical/tree/main/packages/lexical-playground",
    className: "github-corner",
    "aria-label": "View source on GitHub"
  }, React.createElement("svg", {
    width: "80",
    height: "80",
    viewBox: "0 0 250 250",
    style: {
      border: '0',
      color: '#eee',
      fill: '#222',
      left: '0',
      position: 'absolute',
      top: '0',
      transform: 'scale(-1,1)'
    },
    "aria-hidden": "true"
  }, React.createElement("path", {
    d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
  }), React.createElement("path", {
    d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
    fill: "currentColor",
    style: {
      transformOrigin: '130px 106px'
    },
    className: "octo-arm"
  }), React.createElement("path", {
    d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
    fill: "currentColor",
    className: "octo-body"
  }))));
}

var showErrorOverlay = function showErrorOverlay(err) {
  var ErrorOverlay = customElements.get('vite-error-overlay');
  if (!ErrorOverlay) {
    return;
  }
  var overlay = new ErrorOverlay(err);
  var body = document.body;
  if (body !== null) {
    body.appendChild(overlay);
  }
};
window.addEventListener('error', showErrorOverlay);
window.addEventListener('unhandledrejection', function (_ref) {
  var reason = _ref.reason;
  return showErrorOverlay(reason);
});
client.createRoot(document.getElementById('root')).render(React.createElement(React.StrictMode, null, React.createElement(PlaygroundApp, null)));
//# sourceMappingURL=text-page.cjs.development.js.map
