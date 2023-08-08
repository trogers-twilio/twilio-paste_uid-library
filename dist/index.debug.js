"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  UIDFork: () => UIDFork,
  uid: () => uid,
  useUID: () => useUID2,
  useUIDSeed: () => useUIDSeed2
});
module.exports = __toCommonJS(src_exports);
var import_react3 = __toESM(require("react"));

// ../../../node_modules/react-uid/dist/es2015/Control.js
var React3 = __toESM(require("react"));
var import_react2 = require("react");

// ../../../node_modules/react-uid/dist/es2015/context.js
var React = __toESM(require("react"));

// ../../../node_modules/react-uid/dist/es2015/uid.js
var generateUID = function() {
  var counter2 = 1;
  var map = /* @__PURE__ */ new WeakMap();
  var uid2 = function(item, index) {
    if (typeof item === "number" || typeof item === "string") {
      return index ? "idx-".concat(index) : "val-".concat(item);
    }
    if (!map.has(item)) {
      map.set(item, counter2++);
      return uid2(item);
    }
    return "uid" + map.get(item);
  };
  return uid2;
};
var uid = generateUID();

// ../../../node_modules/react-uid/dist/es2015/context.js
var createSource = function(prefix) {
  if (prefix === void 0) {
    prefix = "";
  }
  return {
    value: 1,
    prefix,
    uid: generateUID()
  };
};
var counter = createSource();
var source = React.createContext(createSource());
var getId = function(source2) {
  return source2.value++;
};
var getPrefix = function(source2) {
  return source2 ? source2.prefix : "";
};

// ../../../node_modules/react-uid/dist/es2015/hooks.js
var React2 = __toESM(require("react"));
var import_react = require("react");
var generateUID2 = function(context) {
  var quartz = context || counter;
  var prefix = getPrefix(quartz);
  var id = getId(quartz);
  var uid2 = prefix + id;
  var gen = function(item) {
    return uid2 + quartz.uid(item);
  };
  return { uid: uid2, gen };
};
var useUIDState = function() {
  if (false) {
    if (!("useContext" in React2)) {
      throw new Error("Hooks API requires React 16.8+");
    }
  }
  var context = (0, import_react.useContext)(source);
  var uid2 = (0, import_react.useState)(function() {
    return generateUID2(context);
  })[0];
  return uid2;
};
var useUID = function() {
  var uid2 = useUIDState().uid;
  return uid2;
};
var useUIDSeed = function() {
  var gen = useUIDState().gen;
  return gen;
};

// ../../../node_modules/react-uid/dist/es2015/Control.js
var UIDFork = function(_a) {
  var children = _a.children, _b = _a.prefix, prefix = _b === void 0 ? "" : _b;
  var id = useUID();
  var valueSource = (0, import_react2.useState)(function() {
    return createSource(id + "-" + prefix);
  })[0];
  return React3.createElement(source.Provider, { value: valueSource }, children);
};

// src/index.tsx
console.debug("*** THIS IS MY FORKED PASTE PACKAGE AT TROGERS-TWILIO ***");
var useId = "useId";
var maybeReactUseId = import_react3.default[useId];
var useUID2 = maybeReactUseId !== void 0 ? maybeReactUseId : useUID;
var useUIDSeed2 = maybeReactUseId !== void 0 ? () => {
  const id = maybeReactUseId();
  return (seed) => `${id}-${seed}`;
} : useUIDSeed;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UIDFork,
  uid,
  useUID,
  useUIDSeed
});
