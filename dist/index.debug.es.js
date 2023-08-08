// src/index.tsx
import React4 from "react";

// ../../../node_modules/react-uid/dist/es2015/Control.js
import * as React3 from "react";
import { useState as useState2 } from "react";

// ../../../node_modules/react-uid/dist/es2015/context.js
import * as React from "react";

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
import * as React2 from "react";
import { useContext, useState } from "react";
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
  var context = useContext(source);
  var uid2 = useState(function() {
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
  var valueSource = useState2(function() {
    return createSource(id + "-" + prefix);
  })[0];
  return React3.createElement(source.Provider, { value: valueSource }, children);
};

// src/index.tsx
console.debug("*** THIS IS MY FORKED PASTE PACKAGE AT TROGERS-TWILIO ***");
var useId = "useId";
var maybeReactUseId = React4[useId];
var useUID2 = maybeReactUseId !== void 0 ? maybeReactUseId : useUID;
var useUIDSeed2 = maybeReactUseId !== void 0 ? () => {
  const id = maybeReactUseId();
  return (seed) => `${id}-${seed}`;
} : useUIDSeed;
export {
  UIDFork,
  uid,
  useUID2 as useUID,
  useUIDSeed2 as useUIDSeed
};
