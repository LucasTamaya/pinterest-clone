import { p as process } from '../common/process-2545f00a.js';
import { r as react } from '../common/index-0a5a8570.js';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf,
    setPrototypeOf = _a === void 0 ? function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
} : _a;

var InvariantError =
/** @class */
function (_super) {
  __extends(InvariantError, _super);

  function InvariantError(message) {
    if (message === void 0) {
      message = genericMessage;
    }

    var _this = _super.call(this, typeof message === "number" ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;

    _this.framesToPop = 1;
    _this.name = genericMessage;
    setPrototypeOf(_this, InvariantError.prototype);
    return _this;
  }

  return InvariantError;
}(Error);

function invariant(condition, message) {
  if (!condition) {
    throw new InvariantError(message);
  }
}

var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");

function wrapConsoleMethod(name) {
  return function () {
    if (verbosityLevels.indexOf(name) >= verbosityLevel) {
      // Default to console.log if this host environment happens not to provide
      // all the console.* methods we need.
      var method = console[name] || console.log;
      return method.apply(console, arguments);
    }
  };
}

(function (invariant) {
  invariant.debug = wrapConsoleMethod("debug");
  invariant.log = wrapConsoleMethod("log");
  invariant.warn = wrapConsoleMethod("warn");
  invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));

function maybe(thunk) {
  try {
    return thunk();
  } catch (_a) {}
}

var global$1 = maybe(function () {
  return globalThis;
}) || maybe(function () {
  return window;
}) || maybe(function () {
  return self;
}) || maybe(function () {
  return global;
}) || maybe(function () {
  return maybe.constructor("return this")();
});

var __ = "__";
var GLOBAL_KEY = [__, __].join("DEV");

function getDEV() {
  try {
    return Boolean(__DEV__);
  } catch (_a) {
    Object.defineProperty(global$1, GLOBAL_KEY, {
      value: maybe(function () {
        return "production";
      }) !== "production",
      enumerable: false,
      configurable: true,
      writable: true
    });
    return global$1[GLOBAL_KEY];
  }
}

var DEV = getDEV();

function maybe$1(thunk) {
  try {
    return thunk();
  } catch (_) {}
}

var safeGlobal = maybe$1(function () {
  return globalThis;
}) || maybe$1(function () {
  return window;
}) || maybe$1(function () {
  return self;
}) || maybe$1(function () {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
maybe$1(function () {
  return maybe$1.constructor("return this")();
});
var needToRemove = false;
function install() {
  if (safeGlobal && !maybe$1(function () {
    return "production";
  }) && !maybe$1(function () {
    return process;
  })) {
    Object.defineProperty(safeGlobal, "process", {
      value: {
        env: {
          // This default needs to be "production" instead of "development", to
          // avoid the problem https://github.com/graphql/graphql-js/pull/2894
          // will eventually solve, once merged and released.
          NODE_ENV: "production"
        }
      },
      // Let anyone else change global.process as they see fit, but hide it from
      // Object.keys(global) enumeration.
      configurable: true,
      enumerable: false,
      writable: true
    });
    needToRemove = true;
  }
} // Call install() at least once, when this module is imported.

install();
function remove() {
  if (needToRemove) {
    delete safeGlobal.process;
    needToRemove = false;
  }
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */


function isObjectLike(value) {
  return _typeof(value) == 'object' && value !== null;
}

// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator

var SYMBOL_TO_STRING_TAG = typeof Symbol === 'function' && Symbol.toStringTag != null ? Symbol.toStringTag : '@@toStringTag';

/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printLocation(location) {
  return printSourceLocation(location.source, getLocation(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = sourceLocation.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = sourceLocation.line + lineOffset;
  var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = sourceLocation.column + columnOffset;
  var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
  var lines = body.split(/\r\n|[\n\r]/g);
  var locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    var subLineIndex = Math.floor(columnNum / 80);
    var subLineColumnNum = columnNum % 80;
    var subLines = [];

    for (var i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }

    return locationStr + printPrefixedLines([["".concat(lineNum), subLines[0]]].concat(subLines.slice(1, subLineIndex + 1).map(function (subLine) {
      return ['', subLine];
    }), [[' ', whitespace(subLineColumnNum - 1) + '^'], ['', subLines[subLineIndex + 1]]]));
  }

  return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
    var prefix = _ref2[0];
    return prefix.length;
  }));
  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return leftPad(padLen, prefix) + (line ? ' | ' + line : ' |');
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function leftPad(len, str) {
  return whitespace(len - str.length) + str;
}

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

var GraphQLError = /*#__PURE__*/function (_Error) {
  _inherits(GraphQLError, _Error);

  var _super = _createSuper(GraphQLError);
  /**
   * An array of { line, column } locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */

  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */

  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */

  /**
   * The original error thrown from a field resolver during execution.
   */

  /**
   * Extension fields to add to the formatted error.
   */


  function GraphQLError(message, nodes, source, positions, path, originalError, extensions) {
    var _nodeLocations, _nodeLocations2, _nodeLocations3;

    var _this;

    _classCallCheck(this, GraphQLError);

    _this = _super.call(this, message);
    _this.name = 'GraphQLError';
    _this.originalError = originalError !== null && originalError !== void 0 ? originalError : undefined; // Compute list of blame nodes.

    _this.nodes = undefinedIfEmpty(Array.isArray(nodes) ? nodes : nodes ? [nodes] : undefined);
    var nodeLocations = [];

    for (var _i2 = 0, _ref3 = (_this$nodes = _this.nodes) !== null && _this$nodes !== void 0 ? _this$nodes : []; _i2 < _ref3.length; _i2++) {
      var _this$nodes;

      var _ref4 = _ref3[_i2];
      var loc = _ref4.loc;

      if (loc != null) {
        nodeLocations.push(loc);
      }
    }

    nodeLocations = undefinedIfEmpty(nodeLocations); // Compute locations in the source for the given nodes/positions.

    _this.source = source !== null && source !== void 0 ? source : (_nodeLocations = nodeLocations) === null || _nodeLocations === void 0 ? void 0 : _nodeLocations[0].source;
    _this.positions = positions !== null && positions !== void 0 ? positions : (_nodeLocations2 = nodeLocations) === null || _nodeLocations2 === void 0 ? void 0 : _nodeLocations2.map(function (loc) {
      return loc.start;
    });
    _this.locations = positions && source ? positions.map(function (pos) {
      return getLocation(source, pos);
    }) : (_nodeLocations3 = nodeLocations) === null || _nodeLocations3 === void 0 ? void 0 : _nodeLocations3.map(function (loc) {
      return getLocation(loc.source, loc.start);
    });
    _this.path = path !== null && path !== void 0 ? path : undefined;
    var originalExtensions = originalError === null || originalError === void 0 ? void 0 : originalError.extensions;

    if (extensions == null && isObjectLike(originalExtensions)) {
      _this.extensions = _objectSpread({}, originalExtensions);
    } else {
      _this.extensions = extensions !== null && extensions !== void 0 ? extensions : {};
    } // By being enumerable, JSON.stringify will include bellow properties in the resulting output.
    // This ensures that the simplest possible GraphQL service adheres to the spec.


    Object.defineProperties(_assertThisInitialized(_this), {
      message: {
        enumerable: true
      },
      locations: {
        enumerable: _this.locations != null
      },
      path: {
        enumerable: _this.path != null
      },
      extensions: {
        enumerable: _this.extensions != null && Object.keys(_this.extensions).length > 0
      },
      name: {
        enumerable: false
      },
      nodes: {
        enumerable: false
      },
      source: {
        enumerable: false
      },
      positions: {
        enumerable: false
      },
      originalError: {
        enumerable: false
      }
    }); // Include (non-enumerable) stack trace.

    if (originalError !== null && originalError !== void 0 && originalError.stack) {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
      return _possibleConstructorReturn(_this);
    } // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')


    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), GraphQLError);
    } else {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }

    return _this;
  }

  _createClass(GraphQLError, [{
    key: "toString",
    value: function toString() {
      return printError(this);
    } // FIXME: workaround to not break chai comparisons, should be remove in v16
    // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet

  }, {
    key: SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'Object';
    }
  }]);

  return GraphQLError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function undefinedIfEmpty(array) {
  return array === undefined || array.length === 0 ? undefined : array;
}
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */


function printError(error) {
  var output = error.message;

  if (error.nodes) {
    for (var _i4 = 0, _error$nodes2 = error.nodes; _i4 < _error$nodes2.length; _i4++) {
      var node = _error$nodes2[_i4];

      if (node.loc) {
        output += '\n\n' + printLocation(node.loc);
      }
    }
  } else if (error.source && error.locations) {
    for (var _i6 = 0, _error$locations2 = error.locations; _i6 < _error$locations2.length; _i6++) {
      var location = _error$locations2[_i6];
      output += '\n\n' + printSourceLocation(error.source, location);
    }
  }

  return output;
}

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new GraphQLError("Syntax Error: ".concat(description), undefined, source, [position]);
}

/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */

function invariant$1(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message != null ? message : 'Unexpected invariant triggered.');
  }
}

// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;

/**
 * The `defineInspect()` function defines `inspect()` prototype method as alias of `toJSON`
 */

function defineInspect(classObject) {
  var fn = classObject.prototype.toJSON;
  typeof fn === 'function' || invariant$1(0);
  classObject.prototype.inspect = fn; // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2317')

  if (nodejsCustomInspectSymbol) {
    classObject.prototype[nodejsCustomInspectSymbol] = fn;
  }
}

/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */

var Location = /*#__PURE__*/function () {
  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The Token at which this Node begins.
   */

  /**
   * The Token at which this Node ends.
   */

  /**
   * The Source document the AST represents.
   */
  function Location(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }

  var _proto = Location.prototype;

  _proto.toJSON = function toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  };

  return Location;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

defineInspect(Location);
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */

var Token = /*#__PURE__*/function () {
  /**
   * The kind of Token.
   */

  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The 1-indexed line number on which this Token appears.
   */

  /**
   * The 1-indexed column number at which this Token begins.
   */

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   */

  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  function Token(kind, start, end, line, column, prev, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = prev;
    this.next = null;
  }

  var _proto2 = Token.prototype;

  _proto2.toJSON = function toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  };

  return Token;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

defineInspect(Token);
/**
 * @internal
 */

function isNode(maybeNode) {
  return maybeNode != null && typeof maybeNode.kind === 'string';
}
/**
 * The list of all possible AST node types.
 */

/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */

function _typeof$2(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$2 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$2 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$2(obj);
}
var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (_typeof$2(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);

  if (customInspectFn !== undefined) {
    var customValue = customInspectFn.call(value); // check for infinite recursion

    if (customValue !== value) {
      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(nodejsCustomInspectSymbol)];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}

function devAssert(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message);
  }
}

/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */
// See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
// See: https://webpack.js.org/guides/production/

var instanceOf =  // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
// eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  return value instanceof constructor;
} ;

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}
/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */

var Source = /*#__PURE__*/function () {
  function Source(body) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GraphQL request';
    var locationOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      line: 1,
      column: 1
    };
    typeof body === 'string' || devAssert(0, "Body must be a string. Received: ".concat(inspect(body), "."));
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || devAssert(0, 'line in locationOffset is 1-indexed and must be positive.');
    this.locationOffset.column > 0 || devAssert(0, 'column in locationOffset is 1-indexed and must be positive.');
  } // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet


  _createClass$1(Source, [{
    key: SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'Source';
    }
  }]);

  return Source;
}();
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */
// eslint-disable-next-line no-redeclare

function isSource(source) {
  return instanceOf(source, Source);
}

/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */
function dedentBlockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = getBlockStringIndentation(rawString);

  if (commonIndent !== 0) {
    for (var i = 1; i < lines.length; i++) {
      lines[i] = lines[i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  var startLine = 0;

  while (startLine < lines.length && isBlank(lines[startLine])) {
    ++startLine;
  }

  var endLine = lines.length;

  while (endLine > startLine && isBlank(lines[endLine - 1])) {
    --endLine;
  } // Return a string of the lines joined with U+000A.


  return lines.slice(startLine, endLine).join('\n');
}

function isBlank(str) {
  for (var i = 0; i < str.length; ++i) {
    if (str[i] !== ' ' && str[i] !== '\t') {
      return false;
    }
  }

  return true;
}
/**
 * @internal
 */


function getBlockStringIndentation(value) {
  var _commonIndent;

  var isFirstLine = true;
  var isEmptyLine = true;
  var indent = 0;
  var commonIndent = null;

  for (var i = 0; i < value.length; ++i) {
    switch (value.charCodeAt(i)) {
      case 13:
        //  \r
        if (value.charCodeAt(i + 1) === 10) {
          ++i; // skip \r\n as one symbol
        }

      // falls through

      case 10:
        //  \n
        isFirstLine = false;
        isEmptyLine = true;
        indent = 0;
        break;

      case 9: //   \t

      case 32:
        //  <space>
        ++indent;
        break;

      default:
        if (isEmptyLine && !isFirstLine && (commonIndent === null || indent < commonIndent)) {
          commonIndent = indent;
        }

        isEmptyLine = false;
    }
  }

  return (_commonIndent = commonIndent) !== null && _commonIndent !== void 0 ? _commonIndent : 0;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */

function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSingleLine = value.indexOf('\n') === -1;
  var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
  var hasTrailingQuote = value[value.length - 1] === '"';
  var hasTrailingSlash = value[value.length - 1] === '\\';
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
  var result = ''; // Format a multi-line block quote to account for leading space.

  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += '\n' + indentation;
  }

  result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

  if (printAsMultipleLines) {
    result += '\n';
  }

  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}

/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */

var Lexer = /*#__PURE__*/function () {
  /**
   * The previously focused non-ignored token.
   */

  /**
   * The currently focused non-ignored token.
   */

  /**
   * The (1-indexed) line containing the current token.
   */

  /**
   * The character offset at which the current line begins.
   */
  function Lexer(source) {
    var startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0, null);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */


  var _proto = Lexer.prototype;

  _proto.advance = function advance() {
    this.lastToken = this.token;
    var token = this.token = this.lookahead();
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  ;

  _proto.lookahead = function lookahead() {
    var token = this.token;

    if (token.kind !== TokenKind.EOF) {
      do {
        var _token$next; // Note: next is only mutable during parsing, so we cast to allow this.


        token = (_token$next = token.next) !== null && _token$next !== void 0 ? _token$next : token.next = readToken(this, token);
      } while (token.kind === TokenKind.COMMENT);
    }

    return token;
  };

  return Lexer;
}();
/**
 * @internal
 */

function isPunctuatorTokenKind(kind) {
  return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
}

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? TokenKind.EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = prev.end;

  while (pos < bodyLength) {
    var code = body.charCodeAt(pos);
    var _line = lexer.line;

    var _col = 1 + pos - lexer.lineStart; // SourceCharacter


    switch (code) {
      case 0xfeff: // <BOM>

      case 9: //   \t

      case 32: //  <space>

      case 44:
        //  ,
        ++pos;
        continue;

      case 10:
        //  \n
        ++pos;
        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 13:
        //  \r
        if (body.charCodeAt(pos + 1) === 10) {
          pos += 2;
        } else {
          ++pos;
        }

        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 33:
        //  !
        return new Token(TokenKind.BANG, pos, pos + 1, _line, _col, prev);

      case 35:
        //  #
        return readComment(source, pos, _line, _col, prev);

      case 36:
        //  $
        return new Token(TokenKind.DOLLAR, pos, pos + 1, _line, _col, prev);

      case 38:
        //  &
        return new Token(TokenKind.AMP, pos, pos + 1, _line, _col, prev);

      case 40:
        //  (
        return new Token(TokenKind.PAREN_L, pos, pos + 1, _line, _col, prev);

      case 41:
        //  )
        return new Token(TokenKind.PAREN_R, pos, pos + 1, _line, _col, prev);

      case 46:
        //  .
        if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
          return new Token(TokenKind.SPREAD, pos, pos + 3, _line, _col, prev);
        }

        break;

      case 58:
        //  :
        return new Token(TokenKind.COLON, pos, pos + 1, _line, _col, prev);

      case 61:
        //  =
        return new Token(TokenKind.EQUALS, pos, pos + 1, _line, _col, prev);

      case 64:
        //  @
        return new Token(TokenKind.AT, pos, pos + 1, _line, _col, prev);

      case 91:
        //  [
        return new Token(TokenKind.BRACKET_L, pos, pos + 1, _line, _col, prev);

      case 93:
        //  ]
        return new Token(TokenKind.BRACKET_R, pos, pos + 1, _line, _col, prev);

      case 123:
        // {
        return new Token(TokenKind.BRACE_L, pos, pos + 1, _line, _col, prev);

      case 124:
        // |
        return new Token(TokenKind.PIPE, pos, pos + 1, _line, _col, prev);

      case 125:
        // }
        return new Token(TokenKind.BRACE_R, pos, pos + 1, _line, _col, prev);

      case 34:
        //  "
        if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
          return readBlockString(source, pos, _line, _col, prev, lexer);
        }

        return readString(source, pos, _line, _col, prev);

      case 45: //  -

      case 48: //  0

      case 49: //  1

      case 50: //  2

      case 51: //  3

      case 52: //  4

      case 53: //  5

      case 54: //  6

      case 55: //  7

      case 56: //  8

      case 57:
        //  9
        return readNumber(source, pos, code, _line, _col, prev);

      case 65: //  A

      case 66: //  B

      case 67: //  C

      case 68: //  D

      case 69: //  E

      case 70: //  F

      case 71: //  G

      case 72: //  H

      case 73: //  I

      case 74: //  J

      case 75: //  K

      case 76: //  L

      case 77: //  M

      case 78: //  N

      case 79: //  O

      case 80: //  P

      case 81: //  Q

      case 82: //  R

      case 83: //  S

      case 84: //  T

      case 85: //  U

      case 86: //  V

      case 87: //  W

      case 88: //  X

      case 89: //  Y

      case 90: //  Z

      case 95: //  _

      case 97: //  a

      case 98: //  b

      case 99: //  c

      case 100: // d

      case 101: // e

      case 102: // f

      case 103: // g

      case 104: // h

      case 105: // i

      case 106: // j

      case 107: // k

      case 108: // l

      case 109: // m

      case 110: // n

      case 111: // o

      case 112: // p

      case 113: // q

      case 114: // r

      case 115: // s

      case 116: // t

      case 117: // u

      case 118: // v

      case 119: // w

      case 120: // x

      case 121: // y

      case 122:
        // z
        return readName(source, pos, _line, _col, prev);
    }

    throw syntaxError(source, pos, unexpectedCharacterMessage(code));
  }

  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;
  return new Token(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = body.charCodeAt(++position);
  } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new Token(TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = body.charCodeAt(++position);
  }

  if (code === 48) {
    // 0
    code = body.charCodeAt(++position);

    if (code >= 48 && code <= 57) {
      throw syntaxError(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = body.charCodeAt(++position);

    if (code === 43 || code === 45) {
      // + -
      code = body.charCodeAt(++position);
    }

    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or NameStart


  if (code === 46 || isNameStart(code)) {
    throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
  }

  return new Token(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = body.charCodeAt(++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return new Token(TokenKind.STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += body.slice(chunkStart, position - 1);
      code = body.charCodeAt(position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          {
            // uXXXX
            var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

            if (charCode < 0) {
              var invalidSequence = body.slice(position + 1, position + 5);
              throw syntaxError(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
            }

            value += String.fromCharCode(charCode);
            position += 4;
            break;
          }

        default:
          throw syntaxError(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw syntaxError(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev, lexer) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
    // Closing Triple-Quote (""")
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      rawValue += body.slice(chunkStart, position);
      return new Token(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, dedentBlockStringValue(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else if ( // Escape Triple-Quote (\""")
    code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      rawValue += body.slice(chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw syntaxError(source, position, 'Unterminated string.');
}
/**
 * Converts four hexadecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new Token(TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
} // _ A-Z a-z


function isNameStart(code) {
  return code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122;
}

/**
 * Configuration options to control parser behavior
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */

function parse(source, options) {
  var parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */

var Parser = /*#__PURE__*/function () {
  function Parser(source, options) {
    var sourceObj = isSource(source) ? source : new Source(source);
    this._lexer = new Lexer(sourceObj);
    this._options = options;
  }
  /**
   * Converts a name lex token into a name parse node.
   */


  var _proto = Parser.prototype;

  _proto.parseName = function parseName() {
    var token = this.expectToken(TokenKind.NAME);
    return {
      kind: Kind.NAME,
      value: token.value,
      loc: this.loc(token)
    };
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */
  ;

  _proto.parseDocument = function parseDocument() {
    var start = this._lexer.token;
    return {
      kind: Kind.DOCUMENT,
      definitions: this.many(TokenKind.SOF, this.parseDefinition, TokenKind.EOF),
      loc: this.loc(start)
    };
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   */
  ;

  _proto.parseDefinition = function parseDefinition() {
    if (this.peek(TokenKind.NAME)) {
      switch (this._lexer.token.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();

        case 'schema':
        case 'scalar':
        case 'type':
        case 'interface':
        case 'union':
        case 'enum':
        case 'input':
        case 'directive':
          return this.parseTypeSystemDefinition();

        case 'extend':
          return this.parseTypeSystemExtension();
      }
    } else if (this.peek(TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    } else if (this.peekDescription()) {
      return this.parseTypeSystemDefinition();
    }

    throw this.unexpected();
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  ;

  _proto.parseOperationDefinition = function parseOperationDefinition() {
    var start = this._lexer.token;

    if (this.peek(TokenKind.BRACE_L)) {
      return {
        kind: Kind.OPERATION_DEFINITION,
        operation: 'query',
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    var operation = this.parseOperationType();
    var name;

    if (this.peek(TokenKind.NAME)) {
      name = this.parseName();
    }

    return {
      kind: Kind.OPERATION_DEFINITION,
      operation: operation,
      name: name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * OperationType : one of query mutation subscription
   */
  ;

  _proto.parseOperationType = function parseOperationType() {
    var operationToken = this.expectToken(TokenKind.NAME);

    switch (operationToken.value) {
      case 'query':
        return 'query';

      case 'mutation':
        return 'mutation';

      case 'subscription':
        return 'subscription';
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  ;

  _proto.parseVariableDefinitions = function parseVariableDefinitions() {
    return this.optionalMany(TokenKind.PAREN_L, this.parseVariableDefinition, TokenKind.PAREN_R);
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseVariableDefinition = function parseVariableDefinition() {
    var start = this._lexer.token;
    return {
      kind: Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseValueLiteral(true) : undefined,
      directives: this.parseDirectives(true),
      loc: this.loc(start)
    };
  }
  /**
   * Variable : $ Name
   */
  ;

  _proto.parseVariable = function parseVariable() {
    var start = this._lexer.token;
    this.expectToken(TokenKind.DOLLAR);
    return {
      kind: Kind.VARIABLE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  }
  /**
   * SelectionSet : { Selection+ }
   */
  ;

  _proto.parseSelectionSet = function parseSelectionSet() {
    var start = this._lexer.token;
    return {
      kind: Kind.SELECTION_SET,
      selections: this.many(TokenKind.BRACE_L, this.parseSelection, TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  ;

  _proto.parseSelection = function parseSelection() {
    return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  ;

  _proto.parseField = function parseField() {
    var start = this._lexer.token;
    var nameOrAlias = this.parseName();
    var alias;
    var name;

    if (this.expectOptionalToken(TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return {
      kind: Kind.FIELD,
      alias: alias,
      name: name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined,
      loc: this.loc(start)
    };
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  ;

  _proto.parseArguments = function parseArguments(isConst) {
    var item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseArgument = function parseArgument() {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return {
      kind: Kind.ARGUMENT,
      name: name,
      value: this.parseValueLiteral(false),
      loc: this.loc(start)
    };
  };

  _proto.parseConstArgument = function parseConstArgument() {
    var start = this._lexer.token;
    return {
      kind: Kind.ARGUMENT,
      name: this.parseName(),
      value: (this.expectToken(TokenKind.COLON), this.parseValueLiteral(true)),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  ;

  _proto.parseFragment = function parseFragment() {
    var start = this._lexer.token;
    this.expectToken(TokenKind.SPREAD);
    var hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
      return {
        kind: Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
        loc: this.loc(start)
      };
    }

    return {
      kind: Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  ;

  _proto.parseFragmentDefinition = function parseFragmentDefinition() {
    var _this$_options;

    var start = this._lexer.token;
    this.expectKeyword('fragment'); // Experimental support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.experimentalFragmentVariables) === true) {
      return {
        kind: Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    return {
      kind: Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentName : Name but not `on`
   */
  ;

  _proto.parseFragmentName = function parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  ;

  _proto.parseValueLiteral = function parseValueLiteral(isConst) {
    var token = this._lexer.token;

    switch (token.kind) {
      case TokenKind.BRACKET_L:
        return this.parseList(isConst);

      case TokenKind.BRACE_L:
        return this.parseObject(isConst);

      case TokenKind.INT:
        this._lexer.advance();

        return {
          kind: Kind.INT,
          value: token.value,
          loc: this.loc(token)
        };

      case TokenKind.FLOAT:
        this._lexer.advance();

        return {
          kind: Kind.FLOAT,
          value: token.value,
          loc: this.loc(token)
        };

      case TokenKind.STRING:
      case TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();

      case TokenKind.NAME:
        this._lexer.advance();

        switch (token.value) {
          case 'true':
            return {
              kind: Kind.BOOLEAN,
              value: true,
              loc: this.loc(token)
            };

          case 'false':
            return {
              kind: Kind.BOOLEAN,
              value: false,
              loc: this.loc(token)
            };

          case 'null':
            return {
              kind: Kind.NULL,
              loc: this.loc(token)
            };

          default:
            return {
              kind: Kind.ENUM,
              value: token.value,
              loc: this.loc(token)
            };
        }

      case TokenKind.DOLLAR:
        if (!isConst) {
          return this.parseVariable();
        }

        break;
    }

    throw this.unexpected();
  };

  _proto.parseStringLiteral = function parseStringLiteral() {
    var token = this._lexer.token;

    this._lexer.advance();

    return {
      kind: Kind.STRING,
      value: token.value,
      block: token.kind === TokenKind.BLOCK_STRING,
      loc: this.loc(token)
    };
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  ;

  _proto.parseList = function parseList(isConst) {
    var _this = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this.parseValueLiteral(isConst);
    };

    return {
      kind: Kind.LIST,
      values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   */
  ;

  _proto.parseObject = function parseObject(isConst) {
    var _this2 = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this2.parseObjectField(isConst);
    };

    return {
      kind: Kind.OBJECT,
      fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseObjectField = function parseObjectField(isConst) {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return {
      kind: Kind.OBJECT_FIELD,
      name: name,
      value: this.parseValueLiteral(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */
  ;

  _proto.parseDirectives = function parseDirectives(isConst) {
    var directives = [];

    while (this.peek(TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }
  /**
   * Directive[Const] : @ Name Arguments[?Const]?
   */
  ;

  _proto.parseDirective = function parseDirective(isConst) {
    var start = this._lexer.token;
    this.expectToken(TokenKind.AT);
    return {
      kind: Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  ;

  _proto.parseTypeReference = function parseTypeReference() {
    var start = this._lexer.token;
    var type;

    if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
      type = this.parseTypeReference();
      this.expectToken(TokenKind.BRACKET_R);
      type = {
        kind: Kind.LIST_TYPE,
        type: type,
        loc: this.loc(start)
      };
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(TokenKind.BANG)) {
      return {
        kind: Kind.NON_NULL_TYPE,
        type: type,
        loc: this.loc(start)
      };
    }

    return type;
  }
  /**
   * NamedType : Name
   */
  ;

  _proto.parseNamedType = function parseNamedType() {
    var start = this._lexer.token;
    return {
      kind: Kind.NAMED_TYPE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Type Definition section.

  /**
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
    // Many definitions begin with a description and require a lookahead.
    var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;

    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }
    }

    throw this.unexpected(keywordToken);
  };

  _proto.peekDescription = function peekDescription() {
    return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  ;

  _proto.parseDescription = function parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   */
  ;

  _proto.parseSchemaDefinition = function parseSchemaDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.many(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
    return {
      kind: Kind.SCHEMA_DEFINITION,
      description: description,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  ;

  _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
    var start = this._lexer.token;
    var operation = this.parseOperationType();
    this.expectToken(TokenKind.COLON);
    var type = this.parseNamedType();
    return {
      kind: Kind.OPERATION_TYPE_DEFINITION,
      operation: operation,
      type: type,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  ;

  _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: Kind.SCALAR_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: Kind.OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  ;

  _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
    var _this$_options2;

    if (!this.expectOptionalKeyword('implements')) {
      return [];
    }

    if (((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.allowLegacySDLImplementsInterfaces) === true) {
      var types = []; // Optional leading ampersand

      this.expectOptionalToken(TokenKind.AMP);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(TokenKind.AMP) || this.peek(TokenKind.NAME));

      return types;
    }

    return this.delimitedMany(TokenKind.AMP, this.parseNamedType);
  }
  /**
   * FieldsDefinition : { FieldDefinition+ }
   */
  ;

  _proto.parseFieldsDefinition = function parseFieldsDefinition() {
    var _this$_options3; // Legacy support for the SDL?


    if (((_this$_options3 = this._options) === null || _this$_options3 === void 0 ? void 0 : _this$_options3.allowLegacySDLEmptyFields) === true && this.peek(TokenKind.BRACE_L) && this._lexer.lookahead().kind === TokenKind.BRACE_R) {
      this._lexer.advance();

      this._lexer.advance();

      return [];
    }

    return this.optionalMany(TokenKind.BRACE_L, this.parseFieldDefinition, TokenKind.BRACE_R);
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  ;

  _proto.parseFieldDefinition = function parseFieldDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    this.expectToken(TokenKind.COLON);
    var type = this.parseTypeReference();
    var directives = this.parseDirectives(true);
    return {
      kind: Kind.FIELD_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      type: type,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  ;

  _proto.parseArgumentDefs = function parseArgumentDefs() {
    return this.optionalMany(TokenKind.PAREN_L, this.parseInputValueDef, TokenKind.PAREN_R);
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseInputValueDef = function parseInputValueDef() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    this.expectToken(TokenKind.COLON);
    var type = this.parseTypeReference();
    var defaultValue;

    if (this.expectOptionalToken(TokenKind.EQUALS)) {
      defaultValue = this.parseValueLiteral(true);
    }

    var directives = this.parseDirectives(true);
    return {
      kind: Kind.INPUT_VALUE_DEFINITION,
      description: description,
      name: name,
      type: type,
      defaultValue: defaultValue,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: Kind.INTERFACE_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  ;

  _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();
    return {
      kind: Kind.UNION_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  ;

  _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
    return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  ;

  _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();
    return {
      kind: Kind.ENUM_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * EnumValuesDefinition : { EnumValueDefinition+ }
   */
  ;

  _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
    return this.optionalMany(TokenKind.BRACE_L, this.parseEnumValueDefinition, TokenKind.BRACE_R);
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   *
   * EnumValue : Name
   */
  ;

  _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: Kind.ENUM_VALUE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  ;

  _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();
    return {
      kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InputFieldsDefinition : { InputValueDefinition+ }
   */
  ;

  _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
    return this.optionalMany(TokenKind.BRACE_L, this.parseInputValueDef, TokenKind.BRACE_R);
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
    var keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   */
  ;

  _proto.parseSchemaExtension = function parseSchemaExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.optionalMany(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.SCHEMA_EXTENSION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  ;

  _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.SCALAR_TYPE_EXTENSION,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  ;

  _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.OBJECT_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  ;

  _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.INTERFACE_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  ;

  _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.UNION_TYPE_EXTENSION,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  ;

  _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.ENUM_TYPE_EXTENSION,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  ;

  _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   */
  ;

  _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(TokenKind.AT);
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    var repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    var locations = this.parseDirectiveLocations();
    return {
      kind: Kind.DIRECTIVE_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      repeatable: repeatable,
      locations: locations,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  ;

  _proto.parseDirectiveLocations = function parseDirectiveLocations() {
    return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  ;

  _proto.parseDirectiveLocation = function parseDirectiveLocation() {
    var start = this._lexer.token;
    var name = this.parseName();

    if (DirectiveLocation[name.value] !== undefined) {
      return name;
    }

    throw this.unexpected(start);
  } // Core parsing utility functions

  /**
   * Returns a location object, used to identify the place in the source that created a given parsed object.
   */
  ;

  _proto.loc = function loc(startToken) {
    var _this$_options4;

    if (((_this$_options4 = this._options) === null || _this$_options4 === void 0 ? void 0 : _this$_options4.noLocation) !== true) {
      return new Location(startToken, this._lexer.lastToken, this._lexer.source);
    }
  }
  /**
   * Determines if the next token is of a given kind
   */
  ;

  _proto.peek = function peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectToken = function expectToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    throw syntaxError(this._lexer.source, token.start, "Expected ".concat(getTokenKindDesc(kind), ", found ").concat(getTokenDesc(token), "."));
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and return undefined.
   */
  ;

  _proto.expectOptionalToken = function expectOptionalToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    return undefined;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectKeyword = function expectKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === TokenKind.NAME && token.value === value) {
      this._lexer.advance();
    } else {
      throw syntaxError(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token), "."));
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  ;

  _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === TokenKind.NAME && token.value === value) {
      this._lexer.advance();

      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  ;

  _proto.unexpected = function unexpected(atToken) {
    var token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return syntaxError(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token), "."));
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.any = function any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      var nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.many = function many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  ;

  _proto.delimitedMany = function delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));

    return nodes;
  };

  return Parser;
}();
/**
 * A helper function to describe a token as a string for debugging.
 */

function getTokenDesc(token) {
  var value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? " \"".concat(value, "\"") : '');
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */


function getTokenKindDesc(kind) {
  return isPunctuatorTokenKind(kind) ? "\"".concat(kind, "\"") : kind;
}

/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */

var QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['description', 'directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields']
};
var BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */

function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;
  /* eslint-disable no-undef-init */

  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};

          for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            clone[k] = node[k];
          }

          node = clone;
        }

        var editOffset = 0;

        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];

          if (inArray) {
            editKey -= editOffset;
          }

          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;

      if (node === null || node === undefined) {
        continue;
      }

      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;

    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error("Invalid AST Node: ".concat(inspect(node), "."));
      }

      var visitFn = getVisitFn(visitor, node.kind, isLeaving);

      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);

          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      var _visitorKeys$node$kin;

      stack = {
        inArray: inArray,
        index: index,
        keys: keys,
        edits: edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */

function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];

  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }

    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }

      var specificKindVisitor = specificVisitor[kind];

      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}

/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */

function print(ast) {
  return visit(ast, {
    leave: printDocASTReducer
  });
}
var MAX_LINE_LENGTH = 80; // TODO: provide better type coverage in future

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },
  // Document
  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet; // Anonymous queries with no directives or variable definitions can use
    // the query short form.

    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue,
        directives = _ref.directives;
    return variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '));
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    var prefix = wrap('', alias, ': ') + name;
    var argsLine = prefix + wrap('(', join(args, ', '), ')');

    if (argsLine.length > MAX_LINE_LENGTH) {
      argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
    }

    return join([argsLine, join(directives, ' '), selectionSet], ' ');
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },
  // Fragments
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (// Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      "fragment ".concat(name).concat(wrap('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },
  // Value
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? printBlockString(value, key === 'description' ? '' : '  ') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },
  // Directive
  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },
  // Type
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },
  // Type System Definitions
  SchemaDefinition: addDescription(function (_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  }),
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },
  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),
  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '));
  }),
  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  }),
  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        interfaces = _ref26.interfaces,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),
  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),
  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),
  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),
  DirectiveDefinition: addDescription(function (_ref31) {
    var name = _ref31.name,
        args = _ref31.arguments,
        repeatable = _ref31.repeatable,
        locations = _ref31.locations;
    return 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ');
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives,
        operationTypes = _ref32.operationTypes;
    return join(['extend schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name,
        interfaces = _ref34.interfaces,
        directives = _ref34.directives,
        fields = _ref34.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name,
        interfaces = _ref35.interfaces,
        directives = _ref35.directives,
        fields = _ref35.fields;
    return join(['extend interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        types = _ref36.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name,
        directives = _ref37.directives,
        values = _ref37.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name,
        directives = _ref38.directives,
        fields = _ref38.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  }
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */


function join(maybeArray) {
  var _maybeArray$filter$jo;

  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function (x) {
    return x;
  }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : '';
}
/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */


function block(array) {
  return wrap('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */


function wrap(start, maybeString) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return maybeString != null && maybeString !== '' ? start + maybeString + end : '';
}

function indent(str) {
  return wrap('  ', str.replace(/\n/g, '\n  '));
}

function isMultiline(str) {
  return str.indexOf('\n') !== -1;
}

function hasMultilineItems(maybeArray) {
  return maybeArray != null && maybeArray.some(isMultiline);
}

function removeTemporaryGlobals() {
  return typeof Source === "function" ? remove() : remove();
}

function checkDEV() {
  __DEV__ ? invariant("boolean" === typeof DEV, DEV) : invariant("boolean" === typeof DEV, 36);
}
removeTemporaryGlobals();
checkDEV();

function shouldInclude(_a, variables) {
  var directives = _a.directives;

  if (!directives || !directives.length) {
    return true;
  }

  return getInclusionDirectives(directives).every(function (_a) {
    var directive = _a.directive,
        ifArgument = _a.ifArgument;
    var evaledValue = false;

    if (ifArgument.value.kind === 'Variable') {
      evaledValue = variables && variables[ifArgument.value.name.value];
      __DEV__ ? invariant(evaledValue !== void 0, "Invalid variable referenced in @".concat(directive.name.value, " directive.")) : invariant(evaledValue !== void 0, 37);
    } else {
      evaledValue = ifArgument.value.value;
    }

    return directive.name.value === 'skip' ? !evaledValue : evaledValue;
  });
}
function getDirectiveNames(root) {
  var names = [];
  visit(root, {
    Directive: function (node) {
      names.push(node.name.value);
    }
  });
  return names;
}
function hasDirectives(names, root) {
  return getDirectiveNames(root).some(function (name) {
    return names.indexOf(name) > -1;
  });
}
function hasClientExports(document) {
  return document && hasDirectives(['client'], document) && hasDirectives(['export'], document);
}

function isInclusionDirective(_a) {
  var value = _a.name.value;
  return value === 'skip' || value === 'include';
}

function getInclusionDirectives(directives) {
  var result = [];

  if (directives && directives.length) {
    directives.forEach(function (directive) {
      if (!isInclusionDirective(directive)) return;
      var directiveArguments = directive.arguments;
      var directiveName = directive.name.value;
      __DEV__ ? invariant(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @".concat(directiveName, " directive.")) : invariant(directiveArguments && directiveArguments.length === 1, 38);
      var ifArgument = directiveArguments[0];
      __DEV__ ? invariant(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @".concat(directiveName, " directive.")) : invariant(ifArgument.name && ifArgument.name.value === 'if', 39);
      var ifValue = ifArgument.value;
      __DEV__ ? invariant(ifValue && (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), "Argument for the @".concat(directiveName, " directive must be a variable or a boolean value.")) : invariant(ifValue && (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), 40);
      result.push({
        directive: directive,
        ifArgument: ifArgument
      });
    });
  }

  return result;
}

function getFragmentQueryDocument(document, fragmentName) {
  var actualFragmentName = fragmentName;
  var fragments = [];
  document.definitions.forEach(function (definition) {
    if (definition.kind === 'OperationDefinition') {
      throw __DEV__ ? new InvariantError("Found a ".concat(definition.operation, " operation").concat(definition.name ? " named '".concat(definition.name.value, "'") : '', ". ") + 'No operations are allowed when using a fragment as a query. Only fragments are allowed.') : new InvariantError(41);
    }

    if (definition.kind === 'FragmentDefinition') {
      fragments.push(definition);
    }
  });

  if (typeof actualFragmentName === 'undefined') {
    __DEV__ ? invariant(fragments.length === 1, "Found ".concat(fragments.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : invariant(fragments.length === 1, 42);
    actualFragmentName = fragments[0].name.value;
  }

  var query = __assign(__assign({}, document), {
    definitions: __spreadArray([{
      kind: 'OperationDefinition',
      operation: 'query',
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{
          kind: 'FragmentSpread',
          name: {
            kind: 'Name',
            value: actualFragmentName
          }
        }]
      }
    }], document.definitions, true)
  });

  return query;
}
function createFragmentMap(fragments) {
  if (fragments === void 0) {
    fragments = [];
  }

  var symTable = {};
  fragments.forEach(function (fragment) {
    symTable[fragment.name.value] = fragment;
  });
  return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
  switch (selection.kind) {
    case 'InlineFragment':
      return selection;

    case 'FragmentSpread':
      {
        var fragment = fragmentMap && fragmentMap[selection.name.value];
        __DEV__ ? invariant(fragment, "No fragment named ".concat(selection.name.value, ".")) : invariant(fragment, 43);
        return fragment;
      }

    default:
      return null;
  }
}

function isNonNullObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function makeReference(id) {
  return {
    __ref: String(id)
  };
}
function isReference(obj) {
  return Boolean(obj && typeof obj === 'object' && typeof obj.__ref === 'string');
}
function isDocumentNode(value) {
  return isNonNullObject(value) && value.kind === "Document" && Array.isArray(value.definitions);
}

function isStringValue(value) {
  return value.kind === 'StringValue';
}

function isBooleanValue(value) {
  return value.kind === 'BooleanValue';
}

function isIntValue(value) {
  return value.kind === 'IntValue';
}

function isFloatValue(value) {
  return value.kind === 'FloatValue';
}

function isVariable(value) {
  return value.kind === 'Variable';
}

function isObjectValue(value) {
  return value.kind === 'ObjectValue';
}

function isListValue(value) {
  return value.kind === 'ListValue';
}

function isEnumValue(value) {
  return value.kind === 'EnumValue';
}

function isNullValue(value) {
  return value.kind === 'NullValue';
}

function valueToObjectRepresentation(argObj, name, value, variables) {
  if (isIntValue(value) || isFloatValue(value)) {
    argObj[name.value] = Number(value.value);
  } else if (isBooleanValue(value) || isStringValue(value)) {
    argObj[name.value] = value.value;
  } else if (isObjectValue(value)) {
    var nestedArgObj_1 = {};
    value.fields.map(function (obj) {
      return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
    });
    argObj[name.value] = nestedArgObj_1;
  } else if (isVariable(value)) {
    var variableValue = (variables || {})[value.name.value];
    argObj[name.value] = variableValue;
  } else if (isListValue(value)) {
    argObj[name.value] = value.values.map(function (listValue) {
      var nestedArgArrayObj = {};
      valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
      return nestedArgArrayObj[name.value];
    });
  } else if (isEnumValue(value)) {
    argObj[name.value] = value.value;
  } else if (isNullValue(value)) {
    argObj[name.value] = null;
  } else {
    throw __DEV__ ? new InvariantError("The inline argument \"".concat(name.value, "\" of kind \"").concat(value.kind, "\"") + 'is not supported. Use variables instead of inline arguments to ' + 'overcome this limitation.') : new InvariantError(52);
  }
}
function storeKeyNameFromField(field, variables) {
  var directivesObj = null;

  if (field.directives) {
    directivesObj = {};
    field.directives.forEach(function (directive) {
      directivesObj[directive.name.value] = {};

      if (directive.arguments) {
        directive.arguments.forEach(function (_a) {
          var name = _a.name,
              value = _a.value;
          return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
        });
      }
    });
  }

  var argObj = null;

  if (field.arguments && field.arguments.length) {
    argObj = {};
    field.arguments.forEach(function (_a) {
      var name = _a.name,
          value = _a.value;
      return valueToObjectRepresentation(argObj, name, value, variables);
    });
  }

  return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = ['connection', 'include', 'skip', 'client', 'rest', 'export'];
var getStoreKeyName = Object.assign(function (fieldName, args, directives) {
  if (args && directives && directives['connection'] && directives['connection']['key']) {
    if (directives['connection']['filter'] && directives['connection']['filter'].length > 0) {
      var filterKeys = directives['connection']['filter'] ? directives['connection']['filter'] : [];
      filterKeys.sort();
      var filteredArgs_1 = {};
      filterKeys.forEach(function (key) {
        filteredArgs_1[key] = args[key];
      });
      return "".concat(directives['connection']['key'], "(").concat(stringify(filteredArgs_1), ")");
    } else {
      return directives['connection']['key'];
    }
  }

  var completeFieldName = fieldName;

  if (args) {
    var stringifiedArgs = stringify(args);
    completeFieldName += "(".concat(stringifiedArgs, ")");
  }

  if (directives) {
    Object.keys(directives).forEach(function (key) {
      if (KNOWN_DIRECTIVES.indexOf(key) !== -1) return;

      if (directives[key] && Object.keys(directives[key]).length) {
        completeFieldName += "@".concat(key, "(").concat(stringify(directives[key]), ")");
      } else {
        completeFieldName += "@".concat(key);
      }
    });
  }

  return completeFieldName;
}, {
  setStringify: function (s) {
    var previous = stringify;
    stringify = s;
    return previous;
  }
});

var stringify = function defaultStringify(value) {
  return JSON.stringify(value, stringifyReplacer);
};

function stringifyReplacer(_key, value) {
  if (isNonNullObject(value) && !Array.isArray(value)) {
    value = Object.keys(value).sort().reduce(function (copy, key) {
      copy[key] = value[key];
      return copy;
    }, {});
  }

  return value;
}

function argumentsObjectFromField(field, variables) {
  if (field.arguments && field.arguments.length) {
    var argObj_1 = {};
    field.arguments.forEach(function (_a) {
      var name = _a.name,
          value = _a.value;
      return valueToObjectRepresentation(argObj_1, name, value, variables);
    });
    return argObj_1;
  }

  return null;
}
function resultKeyNameFromField(field) {
  return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
  if (typeof result.__typename === 'string') {
    return result.__typename;
  }

  for (var _i = 0, _a = selectionSet.selections; _i < _a.length; _i++) {
    var selection = _a[_i];

    if (isField(selection)) {
      if (selection.name.value === '__typename') {
        return result[resultKeyNameFromField(selection)];
      }
    } else {
      var typename = getTypenameFromResult(result, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);

      if (typeof typename === 'string') {
        return typename;
      }
    }
  }
}
function isField(selection) {
  return selection.kind === 'Field';
}
function isInlineFragment(selection) {
  return selection.kind === 'InlineFragment';
}

function checkDocument(doc) {
  __DEV__ ? invariant(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : invariant(doc && doc.kind === 'Document', 44);
  var operations = doc.definitions.filter(function (d) {
    return d.kind !== 'FragmentDefinition';
  }).map(function (definition) {
    if (definition.kind !== 'OperationDefinition') {
      throw __DEV__ ? new InvariantError("Schema type definitions not allowed in queries. Found: \"".concat(definition.kind, "\"")) : new InvariantError(45);
    }

    return definition;
  });
  __DEV__ ? invariant(operations.length <= 1, "Ambiguous GraphQL document: contains ".concat(operations.length, " operations")) : invariant(operations.length <= 1, 46);
  return doc;
}
function getOperationDefinition(doc) {
  checkDocument(doc);
  return doc.definitions.filter(function (definition) {
    return definition.kind === 'OperationDefinition';
  })[0];
}
function getOperationName(doc) {
  return doc.definitions.filter(function (definition) {
    return definition.kind === 'OperationDefinition' && definition.name;
  }).map(function (x) {
    return x.name.value;
  })[0] || null;
}
function getFragmentDefinitions(doc) {
  return doc.definitions.filter(function (definition) {
    return definition.kind === 'FragmentDefinition';
  });
}
function getQueryDefinition(doc) {
  var queryDef = getOperationDefinition(doc);
  __DEV__ ? invariant(queryDef && queryDef.operation === 'query', 'Must contain a query definition.') : invariant(queryDef && queryDef.operation === 'query', 47);
  return queryDef;
}
function getFragmentDefinition(doc) {
  __DEV__ ? invariant(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : invariant(doc.kind === 'Document', 48);
  __DEV__ ? invariant(doc.definitions.length <= 1, 'Fragment must have exactly one definition.') : invariant(doc.definitions.length <= 1, 49);
  var fragmentDef = doc.definitions[0];
  __DEV__ ? invariant(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.') : invariant(fragmentDef.kind === 'FragmentDefinition', 50);
  return fragmentDef;
}
function getMainDefinition(queryDoc) {
  checkDocument(queryDoc);
  var fragmentDefinition;

  for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
    var definition = _a[_i];

    if (definition.kind === 'OperationDefinition') {
      var operation = definition.operation;

      if (operation === 'query' || operation === 'mutation' || operation === 'subscription') {
        return definition;
      }
    }

    if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
      fragmentDefinition = definition;
    }
  }

  if (fragmentDefinition) {
    return fragmentDefinition;
  }

  throw __DEV__ ? new InvariantError('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.') : new InvariantError(51);
}
function getDefaultValues(definition) {
  var defaultValues = Object.create(null);
  var defs = definition && definition.variableDefinitions;

  if (defs && defs.length) {
    defs.forEach(function (def) {
      if (def.defaultValue) {
        valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
      }
    });
  }

  return defaultValues;
}

function filterInPlace(array, test, context) {
  var target = 0;
  array.forEach(function (elem, i) {
    if (test.call(this, elem, i, array)) {
      array[target++] = elem;
    }
  }, context);
  array.length = target;
  return array;
}

var TYPENAME_FIELD = {
  kind: 'Field',
  name: {
    kind: 'Name',
    value: '__typename'
  }
};

function isEmpty(op, fragments) {
  return op.selectionSet.selections.every(function (selection) {
    return selection.kind === 'FragmentSpread' && isEmpty(fragments[selection.name.value], fragments);
  });
}

function nullIfDocIsEmpty(doc) {
  return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc))) ? null : doc;
}

function getDirectiveMatcher(directives) {
  return function directiveMatcher(directive) {
    return directives.some(function (dir) {
      return dir.name && dir.name === directive.name.value || dir.test && dir.test(directive);
    });
  };
}

function removeDirectivesFromDocument(directives, doc) {
  var variablesInUse = Object.create(null);
  var variablesToRemove = [];
  var fragmentSpreadsInUse = Object.create(null);
  var fragmentSpreadsToRemove = [];
  var modifiedDoc = nullIfDocIsEmpty(visit(doc, {
    Variable: {
      enter: function (node, _key, parent) {
        if (parent.kind !== 'VariableDefinition') {
          variablesInUse[node.name.value] = true;
        }
      }
    },
    Field: {
      enter: function (node) {
        if (directives && node.directives) {
          var shouldRemoveField = directives.some(function (directive) {
            return directive.remove;
          });

          if (shouldRemoveField && node.directives && node.directives.some(getDirectiveMatcher(directives))) {
            if (node.arguments) {
              node.arguments.forEach(function (arg) {
                if (arg.value.kind === 'Variable') {
                  variablesToRemove.push({
                    name: arg.value.name.value
                  });
                }
              });
            }

            if (node.selectionSet) {
              getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function (frag) {
                fragmentSpreadsToRemove.push({
                  name: frag.name.value
                });
              });
            }

            return null;
          }
        }
      }
    },
    FragmentSpread: {
      enter: function (node) {
        fragmentSpreadsInUse[node.name.value] = true;
      }
    },
    Directive: {
      enter: function (node) {
        if (getDirectiveMatcher(directives)(node)) {
          return null;
        }
      }
    }
  }));

  if (modifiedDoc && filterInPlace(variablesToRemove, function (v) {
    return !!v.name && !variablesInUse[v.name];
  }).length) {
    modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
  }

  if (modifiedDoc && filterInPlace(fragmentSpreadsToRemove, function (fs) {
    return !!fs.name && !fragmentSpreadsInUse[fs.name];
  }).length) {
    modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
  }

  return modifiedDoc;
}
var addTypenameToDocument = Object.assign(function (doc) {
  return visit(checkDocument(doc), {
    SelectionSet: {
      enter: function (node, _key, parent) {
        if (parent && parent.kind === 'OperationDefinition') {
          return;
        }

        var selections = node.selections;

        if (!selections) {
          return;
        }

        var skip = selections.some(function (selection) {
          return isField(selection) && (selection.name.value === '__typename' || selection.name.value.lastIndexOf('__', 0) === 0);
        });

        if (skip) {
          return;
        }

        var field = parent;

        if (isField(field) && field.directives && field.directives.some(function (d) {
          return d.name.value === 'export';
        })) {
          return;
        }

        return __assign(__assign({}, node), {
          selections: __spreadArray(__spreadArray([], selections, true), [TYPENAME_FIELD], false)
        });
      }
    }
  });
}, {
  added: function (field) {
    return field === TYPENAME_FIELD;
  }
});
var connectionRemoveConfig = {
  test: function (directive) {
    var willRemove = directive.name.value === 'connection';

    if (willRemove) {
      if (!directive.arguments || !directive.arguments.some(function (arg) {
        return arg.name.value === 'key';
      })) {
        __DEV__ && invariant.warn('Removing an @connection directive even though it does not have a key. ' + 'You may want to use the key parameter to specify a store key.');
      }
    }

    return willRemove;
  }
};
function removeConnectionDirectiveFromDocument(doc) {
  return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
}

function getArgumentMatcher(config) {
  return function argumentMatcher(argument) {
    return config.some(function (aConfig) {
      return argument.value && argument.value.kind === 'Variable' && argument.value.name && (aConfig.name === argument.value.name.value || aConfig.test && aConfig.test(argument));
    });
  };
}

function removeArgumentsFromDocument(config, doc) {
  var argMatcher = getArgumentMatcher(config);
  return nullIfDocIsEmpty(visit(doc, {
    OperationDefinition: {
      enter: function (node) {
        return __assign(__assign({}, node), {
          variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function (varDef) {
            return !config.some(function (arg) {
              return arg.name === varDef.variable.name.value;
            });
          }) : []
        });
      }
    },
    Field: {
      enter: function (node) {
        var shouldRemoveField = config.some(function (argConfig) {
          return argConfig.remove;
        });

        if (shouldRemoveField) {
          var argMatchCount_1 = 0;

          if (node.arguments) {
            node.arguments.forEach(function (arg) {
              if (argMatcher(arg)) {
                argMatchCount_1 += 1;
              }
            });
          }

          if (argMatchCount_1 === 1) {
            return null;
          }
        }
      }
    },
    Argument: {
      enter: function (node) {
        if (argMatcher(node)) {
          return null;
        }
      }
    }
  }));
}
function removeFragmentSpreadFromDocument(config, doc) {
  function enter(node) {
    if (config.some(function (def) {
      return def.name === node.name.value;
    })) {
      return null;
    }
  }

  return nullIfDocIsEmpty(visit(doc, {
    FragmentSpread: {
      enter: enter
    },
    FragmentDefinition: {
      enter: enter
    }
  }));
}

function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
  var allFragments = [];
  selectionSet.selections.forEach(function (selection) {
    if ((isField(selection) || isInlineFragment(selection)) && selection.selectionSet) {
      getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function (frag) {
        return allFragments.push(frag);
      });
    } else if (selection.kind === 'FragmentSpread') {
      allFragments.push(selection);
    }
  });
  return allFragments;
}

function buildQueryFromSelectionSet(document) {
  var definition = getMainDefinition(document);
  var definitionOperation = definition.operation;

  if (definitionOperation === 'query') {
    return document;
  }

  var modifiedDoc = visit(document, {
    OperationDefinition: {
      enter: function (node) {
        return __assign(__assign({}, node), {
          operation: 'query'
        });
      }
    }
  });
  return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
  checkDocument(document);
  var modifiedDoc = removeDirectivesFromDocument([{
    test: function (directive) {
      return directive.name.value === 'client';
    },
    remove: true
  }], document);

  if (modifiedDoc) {
    modifiedDoc = visit(modifiedDoc, {
      FragmentDefinition: {
        enter: function (node) {
          if (node.selectionSet) {
            var isTypenameOnly = node.selectionSet.selections.every(function (selection) {
              return isField(selection) && selection.name.value === '__typename';
            });

            if (isTypenameOnly) {
              return null;
            }
          }
        }
      }
    });
  }

  return modifiedDoc;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeDeep() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
  var target = sources[0] || {};
  var count = sources.length;

  if (count > 1) {
    var merger = new DeepMerger();

    for (var i = 1; i < count; ++i) {
      target = merger.merge(target, sources[i]);
    }
  }

  return target;
}

var defaultReconciler = function (target, source, property) {
  return this.merge(target[property], source[property]);
};

var DeepMerger = function () {
  function DeepMerger(reconciler) {
    if (reconciler === void 0) {
      reconciler = defaultReconciler;
    }

    this.reconciler = reconciler;
    this.isObject = isNonNullObject;
    this.pastCopies = new Set();
  }

  DeepMerger.prototype.merge = function (target, source) {
    var _this = this;

    var context = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      context[_i - 2] = arguments[_i];
    }

    if (isNonNullObject(source) && isNonNullObject(target)) {
      Object.keys(source).forEach(function (sourceKey) {
        if (hasOwnProperty.call(target, sourceKey)) {
          var targetValue = target[sourceKey];

          if (source[sourceKey] !== targetValue) {
            var result = _this.reconciler.apply(_this, __spreadArray([target, source, sourceKey], context, false));

            if (result !== targetValue) {
              target = _this.shallowCopyForMerge(target);
              target[sourceKey] = result;
            }
          }
        } else {
          target = _this.shallowCopyForMerge(target);
          target[sourceKey] = source[sourceKey];
        }
      });
      return target;
    }

    return source;
  };

  DeepMerger.prototype.shallowCopyForMerge = function (value) {
    if (isNonNullObject(value)) {
      if (this.pastCopies.has(value)) {
        if (!Object.isFrozen(value)) return value;
        this.pastCopies.delete(value);
      }

      if (Array.isArray(value)) {
        value = value.slice(0);
      } else {
        value = __assign({
          __proto__: Object.getPrototypeOf(value)
        }, value);
      }

      this.pastCopies.add(value);
    }

    return value;
  };

  return DeepMerger;
}();

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

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$2(Constructor, staticProps);
  return Constructor;
} // === Symbol Support ===


var hasSymbols = function () {
  return typeof Symbol === 'function';
};

var hasSymbol = function (name) {
  return hasSymbols() && Boolean(Symbol[name]);
};

var getSymbol = function (name) {
  return hasSymbol(name) ? Symbol[name] : '@@' + name;
};

if (hasSymbols() && !hasSymbol('observable')) {
  Symbol.observable = Symbol('observable');
}

var SymbolIterator = getSymbol('iterator');
var SymbolObservable = getSymbol('observable');
var SymbolSpecies = getSymbol('species'); // === Abstract Operations ===

function getMethod(obj, key) {
  var value = obj[key];
  if (value == null) return undefined;
  if (typeof value !== 'function') throw new TypeError(value + ' is not a function');
  return value;
}

function getSpecies(obj) {
  var ctor = obj.constructor;

  if (ctor !== undefined) {
    ctor = ctor[SymbolSpecies];

    if (ctor === null) {
      ctor = undefined;
    }
  }

  return ctor !== undefined ? ctor : Observable;
}

function isObservable(x) {
  return x instanceof Observable; // SPEC: Brand check
}

function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function () {
      throw e;
    });
  }
}

function enqueue(fn) {
  Promise.resolve().then(function () {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}

function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === undefined) return;
  subscription._cleanup = undefined;

  if (!cleanup) {
    return;
  }

  try {
    if (typeof cleanup === 'function') {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, 'unsubscribe');

      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}

function closeSubscription(subscription) {
  subscription._observer = undefined;
  subscription._queue = undefined;
  subscription._state = 'closed';
}

function flushSubscription(subscription) {
  var queue = subscription._queue;

  if (!queue) {
    return;
  }

  subscription._queue = undefined;
  subscription._state = 'ready';

  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === 'closed') break;
  }
}

function notifySubscription(subscription, type, value) {
  subscription._state = 'running';
  var observer = subscription._observer;

  try {
    var m = getMethod(observer, type);

    switch (type) {
      case 'next':
        if (m) m.call(observer, value);
        break;

      case 'error':
        closeSubscription(subscription);
        if (m) m.call(observer, value);else throw value;
        break;

      case 'complete':
        closeSubscription(subscription);
        if (m) m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }

  if (subscription._state === 'closed') cleanupSubscription(subscription);else if (subscription._state === 'running') subscription._state = 'ready';
}

function onNotify(subscription, type, value) {
  if (subscription._state === 'closed') return;

  if (subscription._state === 'buffering') {
    subscription._queue.push({
      type: type,
      value: value
    });

    return;
  }

  if (subscription._state !== 'ready') {
    subscription._state = 'buffering';
    subscription._queue = [{
      type: type,
      value: value
    }];
    enqueue(function () {
      return flushSubscription(subscription);
    });
    return;
  }

  notifySubscription(subscription, type, value);
}

var Subscription = /*#__PURE__*/function () {
  function Subscription(observer, subscriber) {
    // ASSERT: observer is an object
    // ASSERT: subscriber is callable
    this._cleanup = undefined;
    this._observer = observer;
    this._queue = undefined;
    this._state = 'initializing';
    var subscriptionObserver = new SubscriptionObserver(this);

    try {
      this._cleanup = subscriber.call(undefined, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }

    if (this._state === 'initializing') this._state = 'ready';
  }

  var _proto = Subscription.prototype;

  _proto.unsubscribe = function unsubscribe() {
    if (this._state !== 'closed') {
      closeSubscription(this);
      cleanupSubscription(this);
    }
  };

  _createClass$2(Subscription, [{
    key: "closed",
    get: function () {
      return this._state === 'closed';
    }
  }]);

  return Subscription;
}();

var SubscriptionObserver = /*#__PURE__*/function () {
  function SubscriptionObserver(subscription) {
    this._subscription = subscription;
  }

  var _proto2 = SubscriptionObserver.prototype;

  _proto2.next = function next(value) {
    onNotify(this._subscription, 'next', value);
  };

  _proto2.error = function error(value) {
    onNotify(this._subscription, 'error', value);
  };

  _proto2.complete = function complete() {
    onNotify(this._subscription, 'complete');
  };

  _createClass$2(SubscriptionObserver, [{
    key: "closed",
    get: function () {
      return this._subscription._state === 'closed';
    }
  }]);

  return SubscriptionObserver;
}();

var Observable = /*#__PURE__*/function () {
  function Observable(subscriber) {
    if (!(this instanceof Observable)) throw new TypeError('Observable cannot be called as a function');
    if (typeof subscriber !== 'function') throw new TypeError('Observable initializer must be a function');
    this._subscriber = subscriber;
  }

  var _proto3 = Observable.prototype;

  _proto3.subscribe = function subscribe(observer) {
    if (typeof observer !== 'object' || observer === null) {
      observer = {
        next: observer,
        error: arguments[1],
        complete: arguments[2]
      };
    }

    return new Subscription(observer, this._subscriber);
  };

  _proto3.forEach = function forEach(fn) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      if (typeof fn !== 'function') {
        reject(new TypeError(fn + ' is not a function'));
        return;
      }

      function done() {
        subscription.unsubscribe();
        resolve();
      }

      var subscription = _this.subscribe({
        next: function (value) {
          try {
            fn(value, done);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  };

  _proto3.map = function map(fn) {
    var _this2 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    return new C(function (observer) {
      return _this2.subscribe({
        next: function (value) {
          try {
            value = fn(value);
          } catch (e) {
            return observer.error(e);
          }

          observer.next(value);
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          observer.complete();
        }
      });
    });
  };

  _proto3.filter = function filter(fn) {
    var _this3 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    return new C(function (observer) {
      return _this3.subscribe({
        next: function (value) {
          try {
            if (!fn(value)) return;
          } catch (e) {
            return observer.error(e);
          }

          observer.next(value);
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          observer.complete();
        }
      });
    });
  };

  _proto3.reduce = function reduce(fn) {
    var _this4 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    var hasSeed = arguments.length > 1;
    var hasValue = false;
    var seed = arguments[1];
    var acc = seed;
    return new C(function (observer) {
      return _this4.subscribe({
        next: function (value) {
          var first = !hasValue;
          hasValue = true;

          if (!first || hasSeed) {
            try {
              acc = fn(acc, value);
            } catch (e) {
              return observer.error(e);
            }
          } else {
            acc = value;
          }
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          if (!hasValue && !hasSeed) return observer.error(new TypeError('Cannot reduce an empty sequence'));
          observer.next(acc);
          observer.complete();
        }
      });
    });
  };

  _proto3.concat = function concat() {
    var _this5 = this;

    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }

    var C = getSpecies(this);
    return new C(function (observer) {
      var subscription;
      var index = 0;

      function startNext(next) {
        subscription = next.subscribe({
          next: function (v) {
            observer.next(v);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            if (index === sources.length) {
              subscription = undefined;
              observer.complete();
            } else {
              startNext(C.from(sources[index++]));
            }
          }
        });
      }

      startNext(_this5);
      return function () {
        if (subscription) {
          subscription.unsubscribe();
          subscription = undefined;
        }
      };
    });
  };

  _proto3.flatMap = function flatMap(fn) {
    var _this6 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    return new C(function (observer) {
      var subscriptions = [];

      var outer = _this6.subscribe({
        next: function (value) {
          if (fn) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }
          }

          var inner = C.from(value).subscribe({
            next: function (value) {
              observer.next(value);
            },
            error: function (e) {
              observer.error(e);
            },
            complete: function () {
              var i = subscriptions.indexOf(inner);
              if (i >= 0) subscriptions.splice(i, 1);
              completeIfDone();
            }
          });
          subscriptions.push(inner);
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          completeIfDone();
        }
      });

      function completeIfDone() {
        if (outer.closed && subscriptions.length === 0) observer.complete();
      }

      return function () {
        subscriptions.forEach(function (s) {
          return s.unsubscribe();
        });
        outer.unsubscribe();
      };
    });
  };

  _proto3[SymbolObservable] = function () {
    return this;
  };

  Observable.from = function from(x) {
    var C = typeof this === 'function' ? this : Observable;
    if (x == null) throw new TypeError(x + ' is not an object');
    var method = getMethod(x, SymbolObservable);

    if (method) {
      var observable = method.call(x);
      if (Object(observable) !== observable) throw new TypeError(observable + ' is not an object');
      if (isObservable(observable) && observable.constructor === C) return observable;
      return new C(function (observer) {
        return observable.subscribe(observer);
      });
    }

    if (hasSymbol('iterator')) {
      method = getMethod(x, SymbolIterator);

      if (method) {
        return new C(function (observer) {
          enqueue(function () {
            if (observer.closed) return;

            for (var _iterator = _createForOfIteratorHelperLoose(method.call(x)), _step; !(_step = _iterator()).done;) {
              var item = _step.value;
              observer.next(item);
              if (observer.closed) return;
            }

            observer.complete();
          });
        });
      }
    }

    if (Array.isArray(x)) {
      return new C(function (observer) {
        enqueue(function () {
          if (observer.closed) return;

          for (var i = 0; i < x.length; ++i) {
            observer.next(x[i]);
            if (observer.closed) return;
          }

          observer.complete();
        });
      });
    }

    throw new TypeError(x + ' is not observable');
  };

  Observable.of = function of() {
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }

    var C = typeof this === 'function' ? this : Observable;
    return new C(function (observer) {
      enqueue(function () {
        if (observer.closed) return;

        for (var i = 0; i < items.length; ++i) {
          observer.next(items[i]);
          if (observer.closed) return;
        }

        observer.complete();
      });
    });
  };

  _createClass$2(Observable, null, [{
    key: SymbolSpecies,
    get: function () {
      return this;
    }
  }]);

  return Observable;
}();

if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol('extensions'), {
    value: {
      symbol: SymbolObservable,
      hostReportError: hostReportError
    },
    configurable: true
  });
}

function symbolObservablePonyfill(root) {
  var result;
  var Symbol = root.Symbol;

  if (typeof Symbol === 'function') {
    if (Symbol.observable) {
      result = Symbol.observable;
    } else {
      if (typeof Symbol.for === 'function') {
        // This just needs to be something that won't trample other user's Symbol.for use
        // It also will guide people to the source of their issues, if this is problematic.
        // META: It's a resource locator!
        result = Symbol.for('https://github.com/benlesh/symbol-observable');
      } else {
        // Symbol.for didn't exist! The best we can do at this point is a totally 
        // unique symbol. Note that the string argument here is a descriptor, not
        // an identifier. This symbol is unique.
        result = Symbol('https://github.com/benlesh/symbol-observable');
      }

      try {
        Symbol.observable = result;
      } catch (err) {// Do nothing. In some environments, users have frozen `Symbol` for security reasons,
        // if it is frozen assigning to it will throw. In this case, we don't care, because
        // they will need to use the returned value from the ponyfill.
      }
    }
  } else {
    result = '@@observable';
  }

  return result;
}

/* global window */
var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = symbolObservablePonyfill(root);

var prototype = Observable.prototype;
var fakeObsSymbol = '@@observable';

if (!prototype[fakeObsSymbol]) {
  prototype[fakeObsSymbol] = function () {
    return this;
  };
}

var toString = Object.prototype.toString;
function cloneDeep(value) {
  return cloneDeepHelper(value);
}

function cloneDeepHelper(val, seen) {
  switch (toString.call(val)) {
    case "[object Array]":
      {
        seen = seen || new Map();
        if (seen.has(val)) return seen.get(val);
        var copy_1 = val.slice(0);
        seen.set(val, copy_1);
        copy_1.forEach(function (child, i) {
          copy_1[i] = cloneDeepHelper(child, seen);
        });
        return copy_1;
      }

    case "[object Object]":
      {
        seen = seen || new Map();
        if (seen.has(val)) return seen.get(val);
        var copy_2 = Object.create(Object.getPrototypeOf(val));
        seen.set(val, copy_2);
        Object.keys(val).forEach(function (key) {
          copy_2[key] = cloneDeepHelper(val[key], seen);
        });
        return copy_2;
      }

    default:
      return val;
  }
}

function deepFreeze(value) {
  var workSet = new Set([value]);
  workSet.forEach(function (obj) {
    if (isNonNullObject(obj) && shallowFreeze(obj) === obj) {
      Object.getOwnPropertyNames(obj).forEach(function (name) {
        if (isNonNullObject(obj[name])) workSet.add(obj[name]);
      });
    }
  });
  return value;
}

function shallowFreeze(obj) {
  if (__DEV__ && !Object.isFrozen(obj)) {
    try {
      Object.freeze(obj);
    } catch (e) {
      if (e instanceof TypeError) return null;
      throw e;
    }
  }

  return obj;
}

function maybeDeepFreeze(obj) {
  if (__DEV__) {
    deepFreeze(obj);
  }

  return obj;
}

function iterateObserversSafely(observers, method, argument) {
  var observersWithMethod = [];
  observers.forEach(function (obs) {
    return obs[method] && observersWithMethod.push(obs);
  });
  observersWithMethod.forEach(function (obs) {
    return obs[method](argument);
  });
}

function asyncMap(observable, mapFn, catchFn) {
  return new Observable(function (observer) {
    var next = observer.next,
        error = observer.error,
        complete = observer.complete;
    var activeCallbackCount = 0;
    var completed = false;
    var promiseQueue = {
      then: function (callback) {
        return new Promise(function (resolve) {
          return resolve(callback());
        });
      }
    };

    function makeCallback(examiner, delegate) {
      if (examiner) {
        return function (arg) {
          ++activeCallbackCount;

          var both = function () {
            return examiner(arg);
          };

          promiseQueue = promiseQueue.then(both, both).then(function (result) {
            --activeCallbackCount;
            next && next.call(observer, result);

            if (completed) {
              handler.complete();
            }
          }, function (error) {
            --activeCallbackCount;
            throw error;
          }).catch(function (caught) {
            error && error.call(observer, caught);
          });
        };
      } else {
        return function (arg) {
          return delegate && delegate.call(observer, arg);
        };
      }
    }

    var handler = {
      next: makeCallback(mapFn, next),
      error: makeCallback(catchFn, error),
      complete: function () {
        completed = true;

        if (!activeCallbackCount) {
          complete && complete.call(observer);
        }
      }
    };
    var sub = observable.subscribe(handler);
    return function () {
      return sub.unsubscribe();
    };
  });
}

var canUseWeakMap = typeof WeakMap === 'function' && !(typeof navigator === 'object' && navigator.product === 'ReactNative');
var canUseWeakSet = typeof WeakSet === 'function';
var canUseSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function';

function fixObservableSubclass(subclass) {
  function set(key) {
    Object.defineProperty(subclass, key, {
      value: Observable
    });
  }

  if (canUseSymbol && Symbol.species) {
    set(Symbol.species);
  }

  set("@@species");
  return subclass;
}

function isPromiseLike(value) {
  return value && typeof value.then === "function";
}

var Concast = function (_super) {
  __extends(Concast, _super);

  function Concast(sources) {
    var _this = _super.call(this, function (observer) {
      _this.addObserver(observer);

      return function () {
        return _this.removeObserver(observer);
      };
    }) || this;

    _this.observers = new Set();
    _this.addCount = 0;
    _this.promise = new Promise(function (resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
    _this.handlers = {
      next: function (result) {
        if (_this.sub !== null) {
          _this.latest = ["next", result];
          iterateObserversSafely(_this.observers, "next", result);
        }
      },
      error: function (error) {
        var sub = _this.sub;

        if (sub !== null) {
          if (sub) setTimeout(function () {
            return sub.unsubscribe();
          });
          _this.sub = null;
          _this.latest = ["error", error];

          _this.reject(error);

          iterateObserversSafely(_this.observers, "error", error);
        }
      },
      complete: function () {
        if (_this.sub !== null) {
          var value = _this.sources.shift();

          if (!value) {
            _this.sub = null;

            if (_this.latest && _this.latest[0] === "next") {
              _this.resolve(_this.latest[1]);
            } else {
              _this.resolve();
            }

            iterateObserversSafely(_this.observers, "complete");
          } else if (isPromiseLike(value)) {
            value.then(function (obs) {
              return _this.sub = obs.subscribe(_this.handlers);
            });
          } else {
            _this.sub = value.subscribe(_this.handlers);
          }
        }
      }
    };

    _this.cancel = function (reason) {
      _this.reject(reason);

      _this.sources = [];

      _this.handlers.complete();
    };

    _this.promise.catch(function (_) {});

    if (typeof sources === "function") {
      sources = [new Observable(sources)];
    }

    if (isPromiseLike(sources)) {
      sources.then(function (iterable) {
        return _this.start(iterable);
      }, _this.handlers.error);
    } else {
      _this.start(sources);
    }

    return _this;
  }

  Concast.prototype.start = function (sources) {
    if (this.sub !== void 0) return;
    this.sources = Array.from(sources);
    this.handlers.complete();
  };

  Concast.prototype.deliverLastMessage = function (observer) {
    if (this.latest) {
      var nextOrError = this.latest[0];
      var method = observer[nextOrError];

      if (method) {
        method.call(observer, this.latest[1]);
      }

      if (this.sub === null && nextOrError === "next" && observer.complete) {
        observer.complete();
      }
    }
  };

  Concast.prototype.addObserver = function (observer) {
    if (!this.observers.has(observer)) {
      this.deliverLastMessage(observer);
      this.observers.add(observer);
      ++this.addCount;
    }
  };

  Concast.prototype.removeObserver = function (observer, quietly) {
    if (this.observers.delete(observer) && --this.addCount < 1 && !quietly) {
      this.handlers.error(new Error("Observable cancelled prematurely"));
    }
  };

  Concast.prototype.cleanup = function (callback) {
    var _this = this;

    var called = false;

    var once = function () {
      if (!called) {
        called = true;

        _this.observers.delete(observer);

        callback();
      }
    };

    var observer = {
      next: once,
      error: once,
      complete: once
    };
    var count = this.addCount;
    this.addObserver(observer);
    this.addCount = count;
  };

  return Concast;
}(Observable);
fixObservableSubclass(Concast);

function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

function graphQLResultHasError(result) {
  return result.errors && result.errors.length > 0 || false;
}

function compact() {
  var objects = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    objects[_i] = arguments[_i];
  }

  var result = Object.create(null);
  objects.forEach(function (obj) {
    if (!obj) return;
    Object.keys(obj).forEach(function (key) {
      var value = obj[key];

      if (value !== void 0) {
        result[key] = value;
      }
    });
  });
  return result;
}

var prefixCounts = new Map();
function makeUniqueId(prefix) {
  var count = prefixCounts.get(prefix) || 1;
  prefixCounts.set(prefix, count + 1);
  return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}

function stringifyForDisplay(value) {
  var undefId = makeUniqueId("stringifyForDisplay");
  return JSON.stringify(value, function (key, value) {
    return value === void 0 ? undefId : value;
  }).split(JSON.stringify(undefId)).join("<undefined>");
}

function fromError(errorValue) {
  return new Observable(function (observer) {
    observer.error(errorValue);
  });
}

var throwServerError = function (response, result, message) {
  var error = new Error(message);
  error.name = 'ServerError';
  error.response = response;
  error.statusCode = response.status;
  error.result = result;
  throw error;
};

function validateOperation(operation) {
  var OPERATION_FIELDS = ['query', 'operationName', 'variables', 'extensions', 'context'];

  for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
    var key = _a[_i];

    if (OPERATION_FIELDS.indexOf(key) < 0) {
      throw __DEV__ ? new InvariantError("illegal argument: ".concat(key)) : new InvariantError(24);
    }
  }

  return operation;
}

function createOperation(starting, operation) {
  var context = __assign({}, starting);

  var setContext = function (next) {
    if (typeof next === 'function') {
      context = __assign(__assign({}, context), next(context));
    } else {
      context = __assign(__assign({}, context), next);
    }
  };

  var getContext = function () {
    return __assign({}, context);
  };

  Object.defineProperty(operation, 'setContext', {
    enumerable: false,
    value: setContext
  });
  Object.defineProperty(operation, 'getContext', {
    enumerable: false,
    value: getContext
  });
  return operation;
}

function transformOperation(operation) {
  var transformedOperation = {
    variables: operation.variables || {},
    extensions: operation.extensions || {},
    operationName: operation.operationName,
    query: operation.query
  };

  if (!transformedOperation.operationName) {
    transformedOperation.operationName = typeof transformedOperation.query !== 'string' ? getOperationName(transformedOperation.query) || undefined : '';
  }

  return transformedOperation;
}

function passthrough(op, forward) {
  return forward ? forward(op) : Observable.of();
}

function toLink(handler) {
  return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}

function isTerminating(link) {
  return link.request.length <= 1;
}

var LinkError = function (_super) {
  __extends(LinkError, _super);

  function LinkError(message, link) {
    var _this = _super.call(this, message) || this;

    _this.link = link;
    return _this;
  }

  return LinkError;
}(Error);

var ApolloLink = function () {
  function ApolloLink(request) {
    if (request) this.request = request;
  }

  ApolloLink.empty = function () {
    return new ApolloLink(function () {
      return Observable.of();
    });
  };

  ApolloLink.from = function (links) {
    if (links.length === 0) return ApolloLink.empty();
    return links.map(toLink).reduce(function (x, y) {
      return x.concat(y);
    });
  };

  ApolloLink.split = function (test, left, right) {
    var leftLink = toLink(left);
    var rightLink = toLink(right || new ApolloLink(passthrough));

    if (isTerminating(leftLink) && isTerminating(rightLink)) {
      return new ApolloLink(function (operation) {
        return test(operation) ? leftLink.request(operation) || Observable.of() : rightLink.request(operation) || Observable.of();
      });
    } else {
      return new ApolloLink(function (operation, forward) {
        return test(operation) ? leftLink.request(operation, forward) || Observable.of() : rightLink.request(operation, forward) || Observable.of();
      });
    }
  };

  ApolloLink.execute = function (link, operation) {
    return link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || Observable.of();
  };

  ApolloLink.concat = function (first, second) {
    var firstLink = toLink(first);

    if (isTerminating(firstLink)) {
      __DEV__ && invariant.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
      return firstLink;
    }

    var nextLink = toLink(second);

    if (isTerminating(nextLink)) {
      return new ApolloLink(function (operation) {
        return firstLink.request(operation, function (op) {
          return nextLink.request(op) || Observable.of();
        }) || Observable.of();
      });
    } else {
      return new ApolloLink(function (operation, forward) {
        return firstLink.request(operation, function (op) {
          return nextLink.request(op, forward) || Observable.of();
        }) || Observable.of();
      });
    }
  };

  ApolloLink.prototype.split = function (test, left, right) {
    return this.concat(ApolloLink.split(test, left, right || new ApolloLink(passthrough)));
  };

  ApolloLink.prototype.concat = function (next) {
    return ApolloLink.concat(this, next);
  };

  ApolloLink.prototype.request = function (operation, forward) {
    throw __DEV__ ? new InvariantError('request is not implemented') : new InvariantError(19);
  };

  ApolloLink.prototype.onError = function (error, observer) {
    if (observer && observer.error) {
      observer.error(error);
      return false;
    }

    throw error;
  };

  ApolloLink.prototype.setOnError = function (fn) {
    this.onError = fn;
    return this;
  };

  return ApolloLink;
}();

var execute = ApolloLink.execute;

var version = '3.5.10';

var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function parseAndCheckHttpResponse(operations) {
  return function (response) {
    return response.text().then(function (bodyText) {
      try {
        return JSON.parse(bodyText);
      } catch (err) {
        var parseError = err;
        parseError.name = 'ServerParseError';
        parseError.response = response;
        parseError.statusCode = response.status;
        parseError.bodyText = bodyText;
        throw parseError;
      }
    }).then(function (result) {
      if (response.status >= 300) {
        throwServerError(response, result, "Response not successful: Received status code ".concat(response.status));
      }

      if (!Array.isArray(result) && !hasOwnProperty$1.call(result, 'data') && !hasOwnProperty$1.call(result, 'errors')) {
        throwServerError(response, result, "Server response was missing for query '".concat(Array.isArray(operations) ? operations.map(function (op) {
          return op.operationName;
        }) : operations.operationName, "'."));
      }

      return result;
    });
  };
}

var serializeFetchParameter = function (p, label) {
  var serialized;

  try {
    serialized = JSON.stringify(p);
  } catch (e) {
    var parseError = __DEV__ ? new InvariantError("Network request failed. ".concat(label, " is not serializable: ").concat(e.message)) : new InvariantError(21);
    parseError.parseError = e;
    throw parseError;
  }

  return serialized;
};

var defaultHttpOptions = {
  includeQuery: true,
  includeExtensions: false
};
var defaultHeaders = {
  accept: '*/*',
  'content-type': 'application/json'
};
var defaultOptions = {
  method: 'POST'
};
var fallbackHttpConfig = {
  http: defaultHttpOptions,
  headers: defaultHeaders,
  options: defaultOptions
};
var defaultPrinter = function (ast, printer) {
  return printer(ast);
};
function selectHttpOptionsAndBodyInternal(operation, printer) {
  var configs = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    configs[_i - 2] = arguments[_i];
  }

  var options = {};
  var http = {};
  configs.forEach(function (config) {
    options = __assign(__assign(__assign({}, options), config.options), {
      headers: __assign(__assign({}, options.headers), headersToLowerCase(config.headers))
    });

    if (config.credentials) {
      options.credentials = config.credentials;
    }

    http = __assign(__assign({}, http), config.http);
  });
  var operationName = operation.operationName,
      extensions = operation.extensions,
      variables = operation.variables,
      query = operation.query;
  var body = {
    operationName: operationName,
    variables: variables
  };
  if (http.includeExtensions) body.extensions = extensions;
  if (http.includeQuery) body.query = printer(query, print);
  return {
    options: options,
    body: body
  };
}

function headersToLowerCase(headers) {
  if (headers) {
    var normalized_1 = Object.create(null);
    Object.keys(Object(headers)).forEach(function (name) {
      normalized_1[name.toLowerCase()] = headers[name];
    });
    return normalized_1;
  }

  return headers;
}

var checkFetcher = function (fetcher) {
  if (!fetcher && typeof fetch === 'undefined') {
    throw __DEV__ ? new InvariantError("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ") : new InvariantError(20);
  }
};

var createSignalIfSupported = function () {
  if (typeof AbortController === 'undefined') return {
    controller: false,
    signal: false
  };
  var controller = new AbortController();
  var signal = controller.signal;
  return {
    controller: controller,
    signal: signal
  };
};

var selectURI = function (operation, fallbackURI) {
  var context = operation.getContext();
  var contextURI = context.uri;

  if (contextURI) {
    return contextURI;
  } else if (typeof fallbackURI === 'function') {
    return fallbackURI(operation);
  } else {
    return fallbackURI || '/graphql';
  }
};

function rewriteURIForGET(chosenURI, body) {
  var queryParams = [];

  var addQueryParam = function (key, value) {
    queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
  };

  if ('query' in body) {
    addQueryParam('query', body.query);
  }

  if (body.operationName) {
    addQueryParam('operationName', body.operationName);
  }

  if (body.variables) {
    var serializedVariables = void 0;

    try {
      serializedVariables = serializeFetchParameter(body.variables, 'Variables map');
    } catch (parseError) {
      return {
        parseError: parseError
      };
    }

    addQueryParam('variables', serializedVariables);
  }

  if (body.extensions) {
    var serializedExtensions = void 0;

    try {
      serializedExtensions = serializeFetchParameter(body.extensions, 'Extensions map');
    } catch (parseError) {
      return {
        parseError: parseError
      };
    }

    addQueryParam('extensions', serializedExtensions);
  }

  var fragment = '',
      preFragment = chosenURI;
  var fragmentStart = chosenURI.indexOf('#');

  if (fragmentStart !== -1) {
    fragment = chosenURI.substr(fragmentStart);
    preFragment = chosenURI.substr(0, fragmentStart);
  }

  var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
  var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
  return {
    newURI: newURI
  };
}

var backupFetch = maybe(function () {
  return fetch;
});
var createHttpLink = function (linkOptions) {
  if (linkOptions === void 0) {
    linkOptions = {};
  }

  var _a = linkOptions.uri,
      uri = _a === void 0 ? '/graphql' : _a,
      preferredFetch = linkOptions.fetch,
      _b = linkOptions.print,
      print = _b === void 0 ? defaultPrinter : _b,
      includeExtensions = linkOptions.includeExtensions,
      useGETForQueries = linkOptions.useGETForQueries,
      _c = linkOptions.includeUnusedVariables,
      includeUnusedVariables = _c === void 0 ? false : _c,
      requestOptions = __rest(linkOptions, ["uri", "fetch", "print", "includeExtensions", "useGETForQueries", "includeUnusedVariables"]);

  if (__DEV__) {
    checkFetcher(preferredFetch || backupFetch);
  }

  var linkConfig = {
    http: {
      includeExtensions: includeExtensions
    },
    options: requestOptions.fetchOptions,
    credentials: requestOptions.credentials,
    headers: requestOptions.headers
  };
  return new ApolloLink(function (operation) {
    var chosenURI = selectURI(operation, uri);
    var context = operation.getContext();
    var clientAwarenessHeaders = {};

    if (context.clientAwareness) {
      var _a = context.clientAwareness,
          name_1 = _a.name,
          version = _a.version;

      if (name_1) {
        clientAwarenessHeaders['apollographql-client-name'] = name_1;
      }

      if (version) {
        clientAwarenessHeaders['apollographql-client-version'] = version;
      }
    }

    var contextHeaders = __assign(__assign({}, clientAwarenessHeaders), context.headers);

    var contextConfig = {
      http: context.http,
      options: context.fetchOptions,
      credentials: context.credentials,
      headers: contextHeaders
    };

    var _b = selectHttpOptionsAndBodyInternal(operation, print, fallbackHttpConfig, linkConfig, contextConfig),
        options = _b.options,
        body = _b.body;

    if (body.variables && !includeUnusedVariables) {
      var unusedNames_1 = new Set(Object.keys(body.variables));
      visit(operation.query, {
        Variable: function (node, _key, parent) {
          if (parent && parent.kind !== 'VariableDefinition') {
            unusedNames_1.delete(node.name.value);
          }
        }
      });

      if (unusedNames_1.size) {
        body.variables = __assign({}, body.variables);
        unusedNames_1.forEach(function (name) {
          delete body.variables[name];
        });
      }
    }

    var controller;

    if (!options.signal) {
      var _c = createSignalIfSupported(),
          _controller = _c.controller,
          signal = _c.signal;

      controller = _controller;
      if (controller) options.signal = signal;
    }

    var definitionIsMutation = function (d) {
      return d.kind === 'OperationDefinition' && d.operation === 'mutation';
    };

    if (useGETForQueries && !operation.query.definitions.some(definitionIsMutation)) {
      options.method = 'GET';
    }

    if (options.method === 'GET') {
      var _d = rewriteURIForGET(chosenURI, body),
          newURI = _d.newURI,
          parseError = _d.parseError;

      if (parseError) {
        return fromError(parseError);
      }

      chosenURI = newURI;
    } else {
      try {
        options.body = serializeFetchParameter(body, 'Payload');
      } catch (parseError) {
        return fromError(parseError);
      }
    }

    return new Observable(function (observer) {
      var currentFetch = preferredFetch || maybe(function () {
        return fetch;
      }) || backupFetch;
      currentFetch(chosenURI, options).then(function (response) {
        operation.setContext({
          response: response
        });
        return response;
      }).then(parseAndCheckHttpResponse(operation)).then(function (result) {
        observer.next(result);
        observer.complete();
        return result;
      }).catch(function (err) {
        if (err.name === 'AbortError') return;

        if (err.result && err.result.errors && err.result.data) {
          observer.next(err.result);
        }

        observer.error(err);
      });
      return function () {
        if (controller) controller.abort();
      };
    });
  });
};

var HttpLink = function (_super) {
  __extends(HttpLink, _super);

  function HttpLink(options) {
    if (options === void 0) {
      options = {};
    }

    var _this = _super.call(this, createHttpLink(options).request) || this;

    _this.options = options;
    return _this;
  }

  return HttpLink;
}(ApolloLink);

var _a$1 = Object.prototype,
    toString$1 = _a$1.toString,
    hasOwnProperty$2 = _a$1.hasOwnProperty;
var fnToStr = Function.prototype.toString;
var previousComparisons = new Map();
/**
 * Performs a deep equality check on two JavaScript values, tolerating cycles.
 */

function equal(a, b) {
  try {
    return check(a, b);
  } finally {
    previousComparisons.clear();
  }
}

function check(a, b) {
  // If the two values are strictly equal, our job is easy.
  if (a === b) {
    return true;
  } // Object.prototype.toString returns a representation of the runtime type of
  // the given value that is considerably more precise than typeof.


  var aTag = toString$1.call(a);
  var bTag = toString$1.call(b); // If the runtime types of a and b are different, they could maybe be equal
  // under some interpretation of equality, but for simplicity and performance
  // we just return false instead.

  if (aTag !== bTag) {
    return false;
  }

  switch (aTag) {
    case '[object Array]':
      // Arrays are a lot like other objects, but we can cheaply compare their
      // lengths as a short-cut before comparing their elements.
      if (a.length !== b.length) return false;
    // Fall through to object case...

    case '[object Object]':
      {
        if (previouslyCompared(a, b)) return true;
        var aKeys = definedKeys(a);
        var bKeys = definedKeys(b); // If `a` and `b` have a different number of enumerable keys, they
        // must be different.

        var keyCount = aKeys.length;
        if (keyCount !== bKeys.length) return false; // Now make sure they have the same keys.

        for (var k = 0; k < keyCount; ++k) {
          if (!hasOwnProperty$2.call(b, aKeys[k])) {
            return false;
          }
        } // Finally, check deep equality of all child properties.


        for (var k = 0; k < keyCount; ++k) {
          var key = aKeys[k];

          if (!check(a[key], b[key])) {
            return false;
          }
        }

        return true;
      }

    case '[object Error]':
      return a.name === b.name && a.message === b.message;

    case '[object Number]':
      // Handle NaN, which is !== itself.
      if (a !== a) return b !== b;
    // Fall through to shared +a === +b case...

    case '[object Boolean]':
    case '[object Date]':
      return +a === +b;

    case '[object RegExp]':
    case '[object String]':
      return a == "" + b;

    case '[object Map]':
    case '[object Set]':
      {
        if (a.size !== b.size) return false;
        if (previouslyCompared(a, b)) return true;
        var aIterator = a.entries();
        var isMap = aTag === '[object Map]';

        while (true) {
          var info = aIterator.next();
          if (info.done) break; // If a instanceof Set, aValue === aKey.

          var _a = info.value,
              aKey = _a[0],
              aValue = _a[1]; // So this works the same way for both Set and Map.

          if (!b.has(aKey)) {
            return false;
          } // However, we care about deep equality of values only when dealing
          // with Map structures.


          if (isMap && !check(aValue, b.get(aKey))) {
            return false;
          }
        }

        return true;
      }

    case '[object Uint16Array]':
    case '[object Uint8Array]': // Buffer, in Node.js.

    case '[object Uint32Array]':
    case '[object Int32Array]':
    case '[object Int8Array]':
    case '[object Int16Array]':
    case '[object ArrayBuffer]':
      // DataView doesn't need these conversions, but the equality check is
      // otherwise the same.
      a = new Uint8Array(a);
      b = new Uint8Array(b);
    // Fall through...

    case '[object DataView]':
      {
        var len = a.byteLength;

        if (len === b.byteLength) {
          while (len-- && a[len] === b[len]) {// Keep looping as long as the bytes are equal.
          }
        }

        return len === -1;
      }

    case '[object AsyncFunction]':
    case '[object GeneratorFunction]':
    case '[object AsyncGeneratorFunction]':
    case '[object Function]':
      {
        var aCode = fnToStr.call(a);

        if (aCode !== fnToStr.call(b)) {
          return false;
        } // We consider non-native functions equal if they have the same code
        // (native functions require === because their code is censored).
        // Note that this behavior is not entirely sound, since !== function
        // objects with the same code can behave differently depending on
        // their closure scope. However, any function can behave differently
        // depending on the values of its input arguments (including this)
        // and its calling context (including its closure scope), even
        // though the function object is === to itself; and it is entirely
        // possible for functions that are not === to behave exactly the
        // same under all conceivable circumstances. Because none of these
        // factors are statically decidable in JavaScript, JS function
        // equality is not well-defined. This ambiguity allows us to
        // consider the best possible heuristic among various imperfect
        // options, and equating non-native functions that have the same
        // code has enormous practical benefits, such as when comparing
        // functions that are repeatedly passed as fresh function
        // expressions within objects that are otherwise deeply equal. Since
        // any function created from the same syntactic expression (in the
        // same code location) will always stringify to the same code
        // according to fnToStr.call, we can reasonably expect these
        // repeatedly passed function expressions to have the same code, and
        // thus behave "the same" (with all the caveats mentioned above),
        // even though the runtime function objects are !== to one another.


        return !endsWith(aCode, nativeCodeSuffix);
      }
  } // Otherwise the values are not equal.


  return false;
}

function definedKeys(obj) {
  // Remember that the second argument to Array.prototype.filter will be
  // used as `this` within the callback function.
  return Object.keys(obj).filter(isDefinedKey, obj);
}

function isDefinedKey(key) {
  return this[key] !== void 0;
}

var nativeCodeSuffix = "{ [native code] }";

function endsWith(full, suffix) {
  var fromIndex = full.length - suffix.length;
  return fromIndex >= 0 && full.indexOf(suffix, fromIndex) === fromIndex;
}

function previouslyCompared(a, b) {
  // Though cyclic references can make an object graph appear infinite from the
  // perspective of a depth-first traversal, the graph still contains a finite
  // number of distinct object references. We use the previousComparisons cache
  // to avoid comparing the same pair of object references more than once, which
  // guarantees termination (even if we end up comparing every object in one
  // graph to every object in the other graph, which is extremely unlikely),
  // while still allowing weird isomorphic structures (like rings with different
  // lengths) a chance to pass the equality test.
  var bSet = previousComparisons.get(a);

  if (bSet) {
    // Return true here because we can be sure false will be returned somewhere
    // else if the objects are not equivalent.
    if (bSet.has(b)) return true;
  } else {
    previousComparisons.set(a, bSet = new Set());
  }

  bSet.add(b);
  return false;
}

// A [trie](https://en.wikipedia.org/wiki/Trie) data structure that holds
// object keys weakly, yet can also hold non-object keys, unlike the
// native `WeakMap`.
// If no makeData function is supplied, the looked-up data will be an empty,
// null-prototype Object.
var defaultMakeData = function () {
  return Object.create(null);
}; // Useful for processing arguments objects as well as arrays.


var _a$2 = Array.prototype,
    forEach = _a$2.forEach,
    slice = _a$2.slice;

var Trie =
/** @class */
function () {
  function Trie(weakness, makeData) {
    if (weakness === void 0) {
      weakness = true;
    }

    if (makeData === void 0) {
      makeData = defaultMakeData;
    }

    this.weakness = weakness;
    this.makeData = makeData;
  }

  Trie.prototype.lookup = function () {
    var array = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      array[_i] = arguments[_i];
    }

    return this.lookupArray(array);
  };

  Trie.prototype.lookupArray = function (array) {
    var node = this;
    forEach.call(array, function (key) {
      return node = node.getChildTrie(key);
    });
    return node.data || (node.data = this.makeData(slice.call(array)));
  };

  Trie.prototype.getChildTrie = function (key) {
    var map = this.weakness && isObjRef(key) ? this.weak || (this.weak = new WeakMap()) : this.strong || (this.strong = new Map());
    var child = map.get(key);
    if (!child) map.set(key, child = new Trie(this.weakness, this.makeData));
    return child;
  };

  return Trie;
}();

function isObjRef(value) {
  switch (typeof value) {
    case "object":
      if (value === null) break;
    // Fall through to return true...

    case "function":
      return true;
  }

  return false;
}

// This currentContext variable will only be used if the makeSlotClass
// function is called, which happens only if this is the first copy of the
// @wry/context package to be imported.
var currentContext = null; // This unique internal object is used to denote the absence of a value
// for a given Slot, and is never exposed to outside code.

var MISSING_VALUE = {};
var idCounter = 1; // Although we can't do anything about the cost of duplicated code from
// accidentally bundling multiple copies of the @wry/context package, we can
// avoid creating the Slot class more than once using makeSlotClass.

var makeSlotClass = function () {
  return (
    /** @class */
    function () {
      function Slot() {
        // If you have a Slot object, you can find out its slot.id, but you cannot
        // guess the slot.id of a Slot you don't have access to, thanks to the
        // randomized suffix.
        this.id = ["slot", idCounter++, Date.now(), Math.random().toString(36).slice(2)].join(":");
      }

      Slot.prototype.hasValue = function () {
        for (var context_1 = currentContext; context_1; context_1 = context_1.parent) {
          // We use the Slot object iself as a key to its value, which means the
          // value cannot be obtained without a reference to the Slot object.
          if (this.id in context_1.slots) {
            var value = context_1.slots[this.id];
            if (value === MISSING_VALUE) break;

            if (context_1 !== currentContext) {
              // Cache the value in currentContext.slots so the next lookup will
              // be faster. This caching is safe because the tree of contexts and
              // the values of the slots are logically immutable.
              currentContext.slots[this.id] = value;
            }

            return true;
          }
        }

        if (currentContext) {
          // If a value was not found for this Slot, it's never going to be found
          // no matter how many times we look it up, so we might as well cache
          // the absence of the value, too.
          currentContext.slots[this.id] = MISSING_VALUE;
        }

        return false;
      };

      Slot.prototype.getValue = function () {
        if (this.hasValue()) {
          return currentContext.slots[this.id];
        }
      };

      Slot.prototype.withValue = function (value, callback, // Given the prevalence of arrow functions, specifying arguments is likely
      // to be much more common than specifying `this`, hence this ordering:
      args, thisArg) {
        var _a;

        var slots = (_a = {
          __proto__: null
        }, _a[this.id] = value, _a);
        var parent = currentContext;
        currentContext = {
          parent: parent,
          slots: slots
        };

        try {
          // Function.prototype.apply allows the arguments array argument to be
          // omitted or undefined, so args! is fine here.
          return callback.apply(thisArg, args);
        } finally {
          currentContext = parent;
        }
      }; // Capture the current context and wrap a callback function so that it
      // reestablishes the captured context when called.


      Slot.bind = function (callback) {
        var context = currentContext;
        return function () {
          var saved = currentContext;

          try {
            currentContext = context;
            return callback.apply(this, arguments);
          } finally {
            currentContext = saved;
          }
        };
      }; // Immediately run a callback function without any captured context.


      Slot.noContext = function (callback, // Given the prevalence of arrow functions, specifying arguments is likely
      // to be much more common than specifying `this`, hence this ordering:
      args, thisArg) {
        if (currentContext) {
          var saved = currentContext;

          try {
            currentContext = null; // Function.prototype.apply allows the arguments array argument to be
            // omitted or undefined, so args! is fine here.

            return callback.apply(thisArg, args);
          } finally {
            currentContext = saved;
          }
        } else {
          return callback.apply(thisArg, args);
        }
      };

      return Slot;
    }()
  );
}; // We store a single global implementation of the Slot class as a permanent
// non-enumerable symbol property of the Array constructor. This obfuscation
// does nothing to prevent access to the Slot class, but at least it ensures
// the implementation (i.e. currentContext) cannot be tampered with, and all
// copies of the @wry/context package (hopefully just one) will share the
// same Slot implementation. Since the first copy of the @wry/context package
// to be imported wins, this technique imposes a very high cost for any
// future breaking changes to the Slot class.


var globalKey = "@wry/context:Slot";
var host = Array;

var Slot = host[globalKey] || function () {
  var Slot = makeSlotClass();

  try {
    Object.defineProperty(host, globalKey, {
      value: host[globalKey] = Slot,
      enumerable: false,
      writable: false,
      configurable: false
    });
  } finally {
    return Slot;
  }
}();

var bind = Slot.bind,
    noContext = Slot.noContext;

function defaultDispose() {}

var Cache =
/** @class */
function () {
  function Cache(max, dispose) {
    if (max === void 0) {
      max = Infinity;
    }

    if (dispose === void 0) {
      dispose = defaultDispose;
    }

    this.max = max;
    this.dispose = dispose;
    this.map = new Map();
    this.newest = null;
    this.oldest = null;
  }

  Cache.prototype.has = function (key) {
    return this.map.has(key);
  };

  Cache.prototype.get = function (key) {
    var node = this.getNode(key);
    return node && node.value;
  };

  Cache.prototype.getNode = function (key) {
    var node = this.map.get(key);

    if (node && node !== this.newest) {
      var older = node.older,
          newer = node.newer;

      if (newer) {
        newer.older = older;
      }

      if (older) {
        older.newer = newer;
      }

      node.older = this.newest;
      node.older.newer = node;
      node.newer = null;
      this.newest = node;

      if (node === this.oldest) {
        this.oldest = newer;
      }
    }

    return node;
  };

  Cache.prototype.set = function (key, value) {
    var node = this.getNode(key);

    if (node) {
      return node.value = value;
    }

    node = {
      key: key,
      value: value,
      newer: null,
      older: this.newest
    };

    if (this.newest) {
      this.newest.newer = node;
    }

    this.newest = node;
    this.oldest = this.oldest || node;
    this.map.set(key, node);
    return node.value;
  };

  Cache.prototype.clean = function () {
    while (this.oldest && this.map.size > this.max) {
      this.delete(this.oldest.key);
    }
  };

  Cache.prototype.delete = function (key) {
    var node = this.map.get(key);

    if (node) {
      if (node === this.newest) {
        this.newest = node.older;
      }

      if (node === this.oldest) {
        this.oldest = node.newer;
      }

      if (node.newer) {
        node.newer.older = node.older;
      }

      if (node.older) {
        node.older.newer = node.newer;
      }

      this.map.delete(key);
      this.dispose(node.value, key);
      return true;
    }

    return false;
  };

  return Cache;
}();

var parentEntrySlot = new Slot();

var _a$3;

var hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var // This Array.from polyfill is restricted to working with Set<any> for now,
// but we can improve the polyfill and add other input types, as needed. Note
// that this fallback implementation will only be used if the host environment
// does not support a native Array.from function. In most modern JS runtimes,
// the toArray function exported here will be === Array.from.
toArray = (_a$3 = Array.from, _a$3 === void 0 ? function (collection) {
  var array = [];
  collection.forEach(function (item) {
    return array.push(item);
  });
  return array;
} : _a$3);

function maybeUnsubscribe(entryOrDep) {
  var unsubscribe = entryOrDep.unsubscribe;

  if (typeof unsubscribe === "function") {
    entryOrDep.unsubscribe = void 0;
    unsubscribe();
  }
}

var emptySetPool = [];
var POOL_TARGET_SIZE = 100; // Since this package might be used browsers, we should avoid using the
// Node built-in assert module.

function assert(condition, optionalMessage) {
  if (!condition) {
    throw new Error(optionalMessage || "assertion failure");
  }
}

function valueIs(a, b) {
  var len = a.length;
  return (// Unknown values are not equal to each other.
    len > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    len === b.length && // The underlying value or exception must be the same.
    a[len - 1] === b[len - 1]
  );
}

function valueGet(value) {
  switch (value.length) {
    case 0:
      throw new Error("unknown value");

    case 1:
      return value[0];

    case 2:
      throw value[1];
  }
}

function valueCopy(value) {
  return value.slice(0);
}

var Entry =
/** @class */
function () {
  function Entry(fn) {
    this.fn = fn;
    this.parents = new Set();
    this.childValues = new Map(); // When this Entry has children that are dirty, this property becomes
    // a Set containing other Entry objects, borrowed from emptySetPool.
    // When the set becomes empty, it gets recycled back to emptySetPool.

    this.dirtyChildren = null;
    this.dirty = true;
    this.recomputing = false;
    this.value = [];
    this.deps = null;
    ++Entry.count;
  }

  Entry.prototype.peek = function () {
    if (this.value.length === 1 && !mightBeDirty(this)) {
      rememberParent(this);
      return this.value[0];
    }
  }; // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.


  Entry.prototype.recompute = function (args) {
    assert(!this.recomputing, "already recomputing");
    rememberParent(this);
    return mightBeDirty(this) ? reallyRecompute(this, args) : valueGet(this.value);
  };

  Entry.prototype.setDirty = function () {
    if (this.dirty) return;
    this.dirty = true;
    this.value.length = 0;
    reportDirty(this); // We can go ahead and unsubscribe here, since any further dirty
    // notifications we receive will be redundant, and unsubscribing may
    // free up some resources, e.g. file watchers.

    maybeUnsubscribe(this);
  };

  Entry.prototype.dispose = function () {
    var _this = this;

    this.setDirty(); // Sever any dependency relationships with our own children, so those
    // children don't retain this parent Entry in their child.parents sets,
    // thereby preventing it from being fully garbage collected.

    forgetChildren(this); // Because this entry has been kicked out of the cache (in index.js),
    // we've lost the ability to find out if/when this entry becomes dirty,
    // whether that happens through a subscription, because of a direct call
    // to entry.setDirty(), or because one of its children becomes dirty.
    // Because of this loss of future information, we have to assume the
    // worst (that this entry might have become dirty very soon), so we must
    // immediately mark this entry's parents as dirty. Normally we could
    // just call entry.setDirty() rather than calling parent.setDirty() for
    // each parent, but that would leave this entry in parent.childValues
    // and parent.dirtyChildren, which would prevent the child from being
    // truly forgotten.

    eachParent(this, function (parent, child) {
      parent.setDirty();
      forgetChild(parent, _this);
    });
  };

  Entry.prototype.forget = function () {
    // The code that creates Entry objects in index.ts will replace this method
    // with one that actually removes the Entry from the cache, which will also
    // trigger the entry.dispose method.
    this.dispose();
  };

  Entry.prototype.dependOn = function (dep) {
    dep.add(this);

    if (!this.deps) {
      this.deps = emptySetPool.pop() || new Set();
    }

    this.deps.add(dep);
  };

  Entry.prototype.forgetDeps = function () {
    var _this = this;

    if (this.deps) {
      toArray(this.deps).forEach(function (dep) {
        return dep.delete(_this);
      });
      this.deps.clear();
      emptySetPool.push(this.deps);
      this.deps = null;
    }
  };

  Entry.count = 0;
  return Entry;
}();

function rememberParent(child) {
  var parent = parentEntrySlot.getValue();

  if (parent) {
    child.parents.add(parent);

    if (!parent.childValues.has(child)) {
      parent.childValues.set(child, []);
    }

    if (mightBeDirty(child)) {
      reportDirtyChild(parent, child);
    } else {
      reportCleanChild(parent, child);
    }

    return parent;
  }
}

function reallyRecompute(entry, args) {
  forgetChildren(entry); // Set entry as the parent entry while calling recomputeNewValue(entry).

  parentEntrySlot.withValue(entry, recomputeNewValue, [entry, args]);

  if (maybeSubscribe(entry, args)) {
    // If we successfully recomputed entry.value and did not fail to
    // (re)subscribe, then this Entry is no longer explicitly dirty.
    setClean(entry);
  }

  return valueGet(entry.value);
}

function recomputeNewValue(entry, args) {
  entry.recomputing = true; // Set entry.value as unknown.

  entry.value.length = 0;

  try {
    // If entry.fn succeeds, entry.value will become a normal Value.
    entry.value[0] = entry.fn.apply(null, args);
  } catch (e) {
    // If entry.fn throws, entry.value will become exceptional.
    entry.value[1] = e;
  } // Either way, this line is always reached.


  entry.recomputing = false;
}

function mightBeDirty(entry) {
  return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}

function setClean(entry) {
  entry.dirty = false;

  if (mightBeDirty(entry)) {
    // This Entry may still have dirty children, in which case we can't
    // let our parents know we're clean just yet.
    return;
  }

  reportClean(entry);
}

function reportDirty(child) {
  eachParent(child, reportDirtyChild);
}

function reportClean(child) {
  eachParent(child, reportCleanChild);
}

function eachParent(child, callback) {
  var parentCount = child.parents.size;

  if (parentCount) {
    var parents = toArray(child.parents);

    for (var i = 0; i < parentCount; ++i) {
      callback(parents[i], child);
    }
  }
} // Let a parent Entry know that one of its children may be dirty.


function reportDirtyChild(parent, child) {
  // Must have called rememberParent(child) before calling
  // reportDirtyChild(parent, child).
  assert(parent.childValues.has(child));
  assert(mightBeDirty(child));
  var parentWasClean = !mightBeDirty(parent);

  if (!parent.dirtyChildren) {
    parent.dirtyChildren = emptySetPool.pop() || new Set();
  } else if (parent.dirtyChildren.has(child)) {
    // If we already know this child is dirty, then we must have already
    // informed our own parents that we are dirty, so we can terminate
    // the recursion early.
    return;
  }

  parent.dirtyChildren.add(child); // If parent was clean before, it just became (possibly) dirty (according to
  // mightBeDirty), since we just added child to parent.dirtyChildren.

  if (parentWasClean) {
    reportDirty(parent);
  }
} // Let a parent Entry know that one of its children is no longer dirty.


function reportCleanChild(parent, child) {
  // Must have called rememberChild(child) before calling
  // reportCleanChild(parent, child).
  assert(parent.childValues.has(child));
  assert(!mightBeDirty(child));
  var childValue = parent.childValues.get(child);

  if (childValue.length === 0) {
    parent.childValues.set(child, valueCopy(child.value));
  } else if (!valueIs(childValue, child.value)) {
    parent.setDirty();
  }

  removeDirtyChild(parent, child);

  if (mightBeDirty(parent)) {
    return;
  }

  reportClean(parent);
}

function removeDirtyChild(parent, child) {
  var dc = parent.dirtyChildren;

  if (dc) {
    dc.delete(child);

    if (dc.size === 0) {
      if (emptySetPool.length < POOL_TARGET_SIZE) {
        emptySetPool.push(dc);
      }

      parent.dirtyChildren = null;
    }
  }
} // Removes all children from this entry and returns an array of the
// removed children.


function forgetChildren(parent) {
  if (parent.childValues.size > 0) {
    parent.childValues.forEach(function (_value, child) {
      forgetChild(parent, child);
    });
  } // Remove this parent Entry from any sets to which it was added by the
  // addToSet method.


  parent.forgetDeps(); // After we forget all our children, this.dirtyChildren must be empty
  // and therefore must have been reset to null.

  assert(parent.dirtyChildren === null);
}

function forgetChild(parent, child) {
  child.parents.delete(parent);
  parent.childValues.delete(child);
  removeDirtyChild(parent, child);
}

function maybeSubscribe(entry, args) {
  if (typeof entry.subscribe === "function") {
    try {
      maybeUnsubscribe(entry); // Prevent double subscriptions.

      entry.unsubscribe = entry.subscribe.apply(null, args);
    } catch (e) {
      // If this Entry has a subscribe function and it threw an exception
      // (or an unsubscribe function it previously returned now throws),
      // return false to indicate that we were not able to subscribe (or
      // unsubscribe), and this Entry should remain dirty.
      entry.setDirty();
      return false;
    }
  } // Returning true indicates either that there was no entry.subscribe
  // function or that it succeeded.


  return true;
}

var EntryMethods = {
  setDirty: true,
  dispose: true,
  forget: true
};

function dep(options) {
  var depsByKey = new Map();
  var subscribe = options && options.subscribe;

  function depend(key) {
    var parent = parentEntrySlot.getValue();

    if (parent) {
      var dep_1 = depsByKey.get(key);

      if (!dep_1) {
        depsByKey.set(key, dep_1 = new Set());
      }

      parent.dependOn(dep_1);

      if (typeof subscribe === "function") {
        maybeUnsubscribe(dep_1);
        dep_1.unsubscribe = subscribe(key);
      }
    }
  }

  depend.dirty = function dirty(key, entryMethodName) {
    var dep = depsByKey.get(key);

    if (dep) {
      var m_1 = entryMethodName && hasOwnProperty$3.call(EntryMethods, entryMethodName) ? entryMethodName : "setDirty"; // We have to use toArray(dep).forEach instead of dep.forEach, because
      // modifying a Set while iterating over it can cause elements in the Set
      // to be removed from the Set before they've been iterated over.

      toArray(dep).forEach(function (entry) {
        return entry[m_1]();
      });
      depsByKey.delete(key);
      maybeUnsubscribe(dep);
    }
  };

  return depend;
}

function makeDefaultMakeCacheKeyFunction() {
  var keyTrie = new Trie(typeof WeakMap === "function");
  return function () {
    return keyTrie.lookupArray(arguments);
  };
} // The defaultMakeCacheKey function is remarkably powerful, because it gives
// a unique object for any shallow-identical list of arguments. If you need
// to implement a custom makeCacheKey function, you may find it helpful to
// delegate the final work to defaultMakeCacheKey, which is why we export it
// here. However, you may want to avoid defaultMakeCacheKey if your runtime
// does not support WeakMap, or you have the ability to return a string key.
// In those cases, just write your own custom makeCacheKey functions.


var defaultMakeCacheKey = makeDefaultMakeCacheKeyFunction();
var caches = new Set();

function wrap$1(originalFunction, options) {
  if (options === void 0) {
    options = Object.create(null);
  }

  var cache = new Cache(options.max || Math.pow(2, 16), function (entry) {
    return entry.dispose();
  });
  var keyArgs = options.keyArgs;
  var makeCacheKey = options.makeCacheKey || makeDefaultMakeCacheKeyFunction();

  var optimistic = function () {
    var key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);

    if (key === void 0) {
      return originalFunction.apply(null, arguments);
    }

    var entry = cache.get(key);

    if (!entry) {
      cache.set(key, entry = new Entry(originalFunction));
      entry.subscribe = options.subscribe; // Give the Entry the ability to trigger cache.delete(key), even though
      // the Entry itself does not know about key or cache.

      entry.forget = function () {
        return cache.delete(key);
      };
    }

    var value = entry.recompute(Array.prototype.slice.call(arguments)); // Move this entry to the front of the least-recently used queue,
    // since we just finished computing its value.

    cache.set(key, entry);
    caches.add(cache); // Clean up any excess entries in the cache, but only if there is no
    // active parent entry, meaning we're not in the middle of a larger
    // computation that might be flummoxed by the cleaning.

    if (!parentEntrySlot.hasValue()) {
      caches.forEach(function (cache) {
        return cache.clean();
      });
      caches.clear();
    }

    return value;
  };

  Object.defineProperty(optimistic, "size", {
    get: function () {
      return cache["map"].size;
    },
    configurable: false,
    enumerable: false
  });

  function dirtyKey(key) {
    var entry = cache.get(key);

    if (entry) {
      entry.setDirty();
    }
  }

  optimistic.dirtyKey = dirtyKey;

  optimistic.dirty = function dirty() {
    dirtyKey(makeCacheKey.apply(null, arguments));
  };

  function peekKey(key) {
    var entry = cache.get(key);

    if (entry) {
      return entry.peek();
    }
  }

  optimistic.peekKey = peekKey;

  optimistic.peek = function peek() {
    return peekKey(makeCacheKey.apply(null, arguments));
  };

  function forgetKey(key) {
    return cache.delete(key);
  }

  optimistic.forgetKey = forgetKey;

  optimistic.forget = function forget() {
    return forgetKey(makeCacheKey.apply(null, arguments));
  };

  optimistic.makeCacheKey = makeCacheKey;
  optimistic.getKey = keyArgs ? function getKey() {
    return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
  } : makeCacheKey;
  return Object.freeze(optimistic);
}

var ApolloCache = function () {
  function ApolloCache() {
    this.getFragmentDoc = wrap$1(getFragmentQueryDocument);
  }

  ApolloCache.prototype.batch = function (options) {
    var _this = this;

    var optimisticId = typeof options.optimistic === "string" ? options.optimistic : options.optimistic === false ? null : void 0;
    var updateResult;
    this.performTransaction(function () {
      return updateResult = options.update(_this);
    }, optimisticId);
    return updateResult;
  };

  ApolloCache.prototype.recordOptimisticTransaction = function (transaction, optimisticId) {
    this.performTransaction(transaction, optimisticId);
  };

  ApolloCache.prototype.transformDocument = function (document) {
    return document;
  };

  ApolloCache.prototype.identify = function (object) {
    return;
  };

  ApolloCache.prototype.gc = function () {
    return [];
  };

  ApolloCache.prototype.modify = function (options) {
    return false;
  };

  ApolloCache.prototype.transformForLink = function (document) {
    return document;
  };

  ApolloCache.prototype.readQuery = function (options, optimistic) {
    if (optimistic === void 0) {
      optimistic = !!options.optimistic;
    }

    return this.read(__assign(__assign({}, options), {
      rootId: options.id || 'ROOT_QUERY',
      optimistic: optimistic
    }));
  };

  ApolloCache.prototype.readFragment = function (options, optimistic) {
    if (optimistic === void 0) {
      optimistic = !!options.optimistic;
    }

    return this.read(__assign(__assign({}, options), {
      query: this.getFragmentDoc(options.fragment, options.fragmentName),
      rootId: options.id,
      optimistic: optimistic
    }));
  };

  ApolloCache.prototype.writeQuery = function (_a) {
    var id = _a.id,
        data = _a.data,
        options = __rest(_a, ["id", "data"]);

    return this.write(Object.assign(options, {
      dataId: id || 'ROOT_QUERY',
      result: data
    }));
  };

  ApolloCache.prototype.writeFragment = function (_a) {
    var id = _a.id,
        data = _a.data,
        fragment = _a.fragment,
        fragmentName = _a.fragmentName,
        options = __rest(_a, ["id", "data", "fragment", "fragmentName"]);

    return this.write(Object.assign(options, {
      query: this.getFragmentDoc(fragment, fragmentName),
      dataId: id,
      result: data
    }));
  };

  ApolloCache.prototype.updateQuery = function (options, update) {
    return this.batch({
      update: function (cache) {
        var value = cache.readQuery(options);
        var data = update(value);
        if (data === void 0 || data === null) return value;
        cache.writeQuery(__assign(__assign({}, options), {
          data: data
        }));
        return data;
      }
    });
  };

  ApolloCache.prototype.updateFragment = function (options, update) {
    return this.batch({
      update: function (cache) {
        var value = cache.readFragment(options);
        var data = update(value);
        if (data === void 0 || data === null) return value;
        cache.writeFragment(__assign(__assign({}, options), {
          data: data
        }));
        return data;
      }
    });
  };

  return ApolloCache;
}();

var MissingFieldError = function () {
  function MissingFieldError(message, path, query, variables) {
    this.message = message;
    this.path = path;
    this.query = query;
    this.variables = variables;
  }

  return MissingFieldError;
}();

var hasOwn = Object.prototype.hasOwnProperty;
function defaultDataIdFromObject(_a, context) {
  var __typename = _a.__typename,
      id = _a.id,
      _id = _a._id;

  if (typeof __typename === "string") {
    if (context) {
      context.keyObject = id !== void 0 ? {
        id: id
      } : _id !== void 0 ? {
        _id: _id
      } : void 0;
    }

    if (id === void 0) id = _id;

    if (id !== void 0) {
      return "".concat(__typename, ":").concat(typeof id === "number" || typeof id === "string" ? id : JSON.stringify(id));
    }
  }
}
var defaultConfig = {
  dataIdFromObject: defaultDataIdFromObject,
  addTypename: true,
  resultCaching: true,
  canonizeResults: false
};
function normalizeConfig(config) {
  return compact(defaultConfig, config);
}
function shouldCanonizeResults(config) {
  var value = config.canonizeResults;
  return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store, objectOrReference) {
  return isReference(objectOrReference) ? store.get(objectOrReference.__ref, "__typename") : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
  var match = storeFieldName.match(TypeOrFieldNameRegExp);
  return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
  if (isNonNullObject(result)) {
    return isArray(result) ? result.every(function (item) {
      return selectionSetMatchesResult(selectionSet, item, variables);
    }) : selectionSet.selections.every(function (field) {
      if (isField(field) && shouldInclude(field, variables)) {
        var key = resultKeyNameFromField(field);
        return hasOwn.call(result, key) && (!field.selectionSet || selectionSetMatchesResult(field.selectionSet, result[key], variables));
      }

      return true;
    });
  }

  return false;
}
function storeValueIsStoreObject(value) {
  return isNonNullObject(value) && !isReference(value) && !isArray(value);
}
function makeProcessedFieldsMerger() {
  return new DeepMerger();
}
var isArray = function (a) {
  return Array.isArray(a);
};

var DELETE = Object.create(null);

var delModifier = function () {
  return DELETE;
};

var INVALIDATE = Object.create(null);

var EntityStore = function () {
  function EntityStore(policies, group) {
    var _this = this;

    this.policies = policies;
    this.group = group;
    this.data = Object.create(null);
    this.rootIds = Object.create(null);
    this.refs = Object.create(null);

    this.getFieldValue = function (objectOrReference, storeFieldName) {
      return maybeDeepFreeze(isReference(objectOrReference) ? _this.get(objectOrReference.__ref, storeFieldName) : objectOrReference && objectOrReference[storeFieldName]);
    };

    this.canRead = function (objOrRef) {
      return isReference(objOrRef) ? _this.has(objOrRef.__ref) : typeof objOrRef === "object";
    };

    this.toReference = function (objOrIdOrRef, mergeIntoStore) {
      if (typeof objOrIdOrRef === "string") {
        return makeReference(objOrIdOrRef);
      }

      if (isReference(objOrIdOrRef)) {
        return objOrIdOrRef;
      }

      var id = _this.policies.identify(objOrIdOrRef)[0];

      if (id) {
        var ref = makeReference(id);

        if (mergeIntoStore) {
          _this.merge(id, objOrIdOrRef);
        }

        return ref;
      }
    };
  }

  EntityStore.prototype.toObject = function () {
    return __assign({}, this.data);
  };

  EntityStore.prototype.has = function (dataId) {
    return this.lookup(dataId, true) !== void 0;
  };

  EntityStore.prototype.get = function (dataId, fieldName) {
    this.group.depend(dataId, fieldName);

    if (hasOwn.call(this.data, dataId)) {
      var storeObject = this.data[dataId];

      if (storeObject && hasOwn.call(storeObject, fieldName)) {
        return storeObject[fieldName];
      }
    }

    if (fieldName === "__typename" && hasOwn.call(this.policies.rootTypenamesById, dataId)) {
      return this.policies.rootTypenamesById[dataId];
    }

    if (this instanceof Layer) {
      return this.parent.get(dataId, fieldName);
    }
  };

  EntityStore.prototype.lookup = function (dataId, dependOnExistence) {
    if (dependOnExistence) this.group.depend(dataId, "__exists");

    if (hasOwn.call(this.data, dataId)) {
      return this.data[dataId];
    }

    if (this instanceof Layer) {
      return this.parent.lookup(dataId, dependOnExistence);
    }

    if (this.policies.rootTypenamesById[dataId]) {
      return Object.create(null);
    }
  };

  EntityStore.prototype.merge = function (older, newer) {
    var _this = this;

    var dataId;
    if (isReference(older)) older = older.__ref;
    if (isReference(newer)) newer = newer.__ref;
    var existing = typeof older === "string" ? this.lookup(dataId = older) : older;
    var incoming = typeof newer === "string" ? this.lookup(dataId = newer) : newer;
    if (!incoming) return;
    __DEV__ ? invariant(typeof dataId === "string", "store.merge expects a string ID") : invariant(typeof dataId === "string", 1);
    var merged = new DeepMerger(storeObjectReconciler).merge(existing, incoming);
    this.data[dataId] = merged;

    if (merged !== existing) {
      delete this.refs[dataId];

      if (this.group.caching) {
        var fieldsToDirty_1 = Object.create(null);
        if (!existing) fieldsToDirty_1.__exists = 1;
        Object.keys(incoming).forEach(function (storeFieldName) {
          if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
            fieldsToDirty_1[storeFieldName] = 1;
            var fieldName = fieldNameFromStoreName(storeFieldName);

            if (fieldName !== storeFieldName && !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
              fieldsToDirty_1[fieldName] = 1;
            }

            if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
              delete merged[storeFieldName];
            }
          }
        });

        if (fieldsToDirty_1.__typename && !(existing && existing.__typename) && this.policies.rootTypenamesById[dataId] === merged.__typename) {
          delete fieldsToDirty_1.__typename;
        }

        Object.keys(fieldsToDirty_1).forEach(function (fieldName) {
          return _this.group.dirty(dataId, fieldName);
        });
      }
    }
  };

  EntityStore.prototype.modify = function (dataId, fields) {
    var _this = this;

    var storeObject = this.lookup(dataId);

    if (storeObject) {
      var changedFields_1 = Object.create(null);
      var needToMerge_1 = false;
      var allDeleted_1 = true;
      var sharedDetails_1 = {
        DELETE: DELETE,
        INVALIDATE: INVALIDATE,
        isReference: isReference,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function (fieldNameOrOptions, from) {
          return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
            fieldName: fieldNameOrOptions,
            from: from || makeReference(dataId)
          } : fieldNameOrOptions, {
            store: _this
          });
        }
      };
      Object.keys(storeObject).forEach(function (storeFieldName) {
        var fieldName = fieldNameFromStoreName(storeFieldName);
        var fieldValue = storeObject[storeFieldName];
        if (fieldValue === void 0) return;
        var modify = typeof fields === "function" ? fields : fields[storeFieldName] || fields[fieldName];

        if (modify) {
          var newValue = modify === delModifier ? DELETE : modify(maybeDeepFreeze(fieldValue), __assign(__assign({}, sharedDetails_1), {
            fieldName: fieldName,
            storeFieldName: storeFieldName,
            storage: _this.getStorage(dataId, storeFieldName)
          }));

          if (newValue === INVALIDATE) {
            _this.group.dirty(dataId, storeFieldName);
          } else {
            if (newValue === DELETE) newValue = void 0;

            if (newValue !== fieldValue) {
              changedFields_1[storeFieldName] = newValue;
              needToMerge_1 = true;
              fieldValue = newValue;
            }
          }
        }

        if (fieldValue !== void 0) {
          allDeleted_1 = false;
        }
      });

      if (needToMerge_1) {
        this.merge(dataId, changedFields_1);

        if (allDeleted_1) {
          if (this instanceof Layer) {
            this.data[dataId] = void 0;
          } else {
            delete this.data[dataId];
          }

          this.group.dirty(dataId, "__exists");
        }

        return true;
      }
    }

    return false;
  };

  EntityStore.prototype.delete = function (dataId, fieldName, args) {
    var _a;

    var storeObject = this.lookup(dataId);

    if (storeObject) {
      var typename = this.getFieldValue(storeObject, "__typename");
      var storeFieldName = fieldName && args ? this.policies.getStoreFieldName({
        typename: typename,
        fieldName: fieldName,
        args: args
      }) : fieldName;
      return this.modify(dataId, storeFieldName ? (_a = {}, _a[storeFieldName] = delModifier, _a) : delModifier);
    }

    return false;
  };

  EntityStore.prototype.evict = function (options, limit) {
    var evicted = false;

    if (options.id) {
      if (hasOwn.call(this.data, options.id)) {
        evicted = this.delete(options.id, options.fieldName, options.args);
      }

      if (this instanceof Layer && this !== limit) {
        evicted = this.parent.evict(options, limit) || evicted;
      }

      if (options.fieldName || evicted) {
        this.group.dirty(options.id, options.fieldName || "__exists");
      }
    }

    return evicted;
  };

  EntityStore.prototype.clear = function () {
    this.replace(null);
  };

  EntityStore.prototype.extract = function () {
    var _this = this;

    var obj = this.toObject();
    var extraRootIds = [];
    this.getRootIdSet().forEach(function (id) {
      if (!hasOwn.call(_this.policies.rootTypenamesById, id)) {
        extraRootIds.push(id);
      }
    });

    if (extraRootIds.length) {
      obj.__META = {
        extraRootIds: extraRootIds.sort()
      };
    }

    return obj;
  };

  EntityStore.prototype.replace = function (newData) {
    var _this = this;

    Object.keys(this.data).forEach(function (dataId) {
      if (!(newData && hasOwn.call(newData, dataId))) {
        _this.delete(dataId);
      }
    });

    if (newData) {
      var __META = newData.__META,
          rest_1 = __rest(newData, ["__META"]);

      Object.keys(rest_1).forEach(function (dataId) {
        _this.merge(dataId, rest_1[dataId]);
      });

      if (__META) {
        __META.extraRootIds.forEach(this.retain, this);
      }
    }
  };

  EntityStore.prototype.retain = function (rootId) {
    return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
  };

  EntityStore.prototype.release = function (rootId) {
    if (this.rootIds[rootId] > 0) {
      var count = --this.rootIds[rootId];
      if (!count) delete this.rootIds[rootId];
      return count;
    }

    return 0;
  };

  EntityStore.prototype.getRootIdSet = function (ids) {
    if (ids === void 0) {
      ids = new Set();
    }

    Object.keys(this.rootIds).forEach(ids.add, ids);

    if (this instanceof Layer) {
      this.parent.getRootIdSet(ids);
    } else {
      Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
    }

    return ids;
  };

  EntityStore.prototype.gc = function () {
    var _this = this;

    var ids = this.getRootIdSet();
    var snapshot = this.toObject();
    ids.forEach(function (id) {
      if (hasOwn.call(snapshot, id)) {
        Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
        delete snapshot[id];
      }
    });
    var idsToRemove = Object.keys(snapshot);

    if (idsToRemove.length) {
      var root_1 = this;

      while (root_1 instanceof Layer) root_1 = root_1.parent;

      idsToRemove.forEach(function (id) {
        return root_1.delete(id);
      });
    }

    return idsToRemove;
  };

  EntityStore.prototype.findChildRefIds = function (dataId) {
    if (!hasOwn.call(this.refs, dataId)) {
      var found_1 = this.refs[dataId] = Object.create(null);
      var root = this.data[dataId];
      if (!root) return found_1;
      var workSet_1 = new Set([root]);
      workSet_1.forEach(function (obj) {
        if (isReference(obj)) {
          found_1[obj.__ref] = true;
        }

        if (isNonNullObject(obj)) {
          Object.keys(obj).forEach(function (key) {
            var child = obj[key];

            if (isNonNullObject(child)) {
              workSet_1.add(child);
            }
          });
        }
      });
    }

    return this.refs[dataId];
  };

  EntityStore.prototype.makeCacheKey = function () {
    return this.group.keyMaker.lookupArray(arguments);
  };

  return EntityStore;
}();

var CacheGroup = function () {
  function CacheGroup(caching, parent) {
    if (parent === void 0) {
      parent = null;
    }

    this.caching = caching;
    this.parent = parent;
    this.d = null;
    this.resetCaching();
  }

  CacheGroup.prototype.resetCaching = function () {
    this.d = this.caching ? dep() : null;
    this.keyMaker = new Trie(canUseWeakMap);
  };

  CacheGroup.prototype.depend = function (dataId, storeFieldName) {
    if (this.d) {
      this.d(makeDepKey(dataId, storeFieldName));
      var fieldName = fieldNameFromStoreName(storeFieldName);

      if (fieldName !== storeFieldName) {
        this.d(makeDepKey(dataId, fieldName));
      }

      if (this.parent) {
        this.parent.depend(dataId, storeFieldName);
      }
    }
  };

  CacheGroup.prototype.dirty = function (dataId, storeFieldName) {
    if (this.d) {
      this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
    }
  };

  return CacheGroup;
}();

function makeDepKey(dataId, storeFieldName) {
  return storeFieldName + '#' + dataId;
}

function maybeDependOnExistenceOfEntity(store, entityId) {
  if (supportsResultCaching(store)) {
    store.group.depend(entityId, "__exists");
  }
}

(function (EntityStore) {
  var Root = function (_super) {
    __extends(Root, _super);

    function Root(_a) {
      var policies = _a.policies,
          _b = _a.resultCaching,
          resultCaching = _b === void 0 ? true : _b,
          seed = _a.seed;

      var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;

      _this.stump = new Stump(_this);
      _this.storageTrie = new Trie(canUseWeakMap);
      if (seed) _this.replace(seed);
      return _this;
    }

    Root.prototype.addLayer = function (layerId, replay) {
      return this.stump.addLayer(layerId, replay);
    };

    Root.prototype.removeLayer = function () {
      return this;
    };

    Root.prototype.getStorage = function () {
      return this.storageTrie.lookupArray(arguments);
    };

    return Root;
  }(EntityStore);

  EntityStore.Root = Root;
})(EntityStore || (EntityStore = {}));

var Layer = function (_super) {
  __extends(Layer, _super);

  function Layer(id, parent, replay, group) {
    var _this = _super.call(this, parent.policies, group) || this;

    _this.id = id;
    _this.parent = parent;
    _this.replay = replay;
    _this.group = group;
    replay(_this);
    return _this;
  }

  Layer.prototype.addLayer = function (layerId, replay) {
    return new Layer(layerId, this, replay, this.group);
  };

  Layer.prototype.removeLayer = function (layerId) {
    var _this = this;

    var parent = this.parent.removeLayer(layerId);

    if (layerId === this.id) {
      if (this.group.caching) {
        Object.keys(this.data).forEach(function (dataId) {
          var ownStoreObject = _this.data[dataId];
          var parentStoreObject = parent["lookup"](dataId);

          if (!parentStoreObject) {
            _this.delete(dataId);
          } else if (!ownStoreObject) {
            _this.group.dirty(dataId, "__exists");

            Object.keys(parentStoreObject).forEach(function (storeFieldName) {
              _this.group.dirty(dataId, storeFieldName);
            });
          } else if (ownStoreObject !== parentStoreObject) {
            Object.keys(ownStoreObject).forEach(function (storeFieldName) {
              if (!equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                _this.group.dirty(dataId, storeFieldName);
              }
            });
          }
        });
      }

      return parent;
    }

    if (parent === this.parent) return this;
    return parent.addLayer(this.id, this.replay);
  };

  Layer.prototype.toObject = function () {
    return __assign(__assign({}, this.parent.toObject()), this.data);
  };

  Layer.prototype.findChildRefIds = function (dataId) {
    var fromParent = this.parent.findChildRefIds(dataId);
    return hasOwn.call(this.data, dataId) ? __assign(__assign({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
  };

  Layer.prototype.getStorage = function () {
    var p = this.parent;

    while (p.parent) p = p.parent;

    return p.getStorage.apply(p, arguments);
  };

  return Layer;
}(EntityStore);

var Stump = function (_super) {
  __extends(Stump, _super);

  function Stump(root) {
    return _super.call(this, "EntityStore.Stump", root, function () {}, new CacheGroup(root.group.caching, root.group)) || this;
  }

  Stump.prototype.removeLayer = function () {
    return this;
  };

  Stump.prototype.merge = function () {
    return this.parent.merge.apply(this.parent, arguments);
  };

  return Stump;
}(Layer);

function storeObjectReconciler(existingObject, incomingObject, property) {
  var existingValue = existingObject[property];
  var incomingValue = incomingObject[property];
  return equal(existingValue, incomingValue) ? existingValue : incomingValue;
}

function supportsResultCaching(store) {
  return !!(store instanceof EntityStore && store.group.caching);
}

function shallowCopy(value) {
  if (isNonNullObject(value)) {
    return isArray(value) ? value.slice(0) : __assign({
      __proto__: Object.getPrototypeOf(value)
    }, value);
  }

  return value;
}

var ObjectCanon = function () {
  function ObjectCanon() {
    this.known = new (canUseWeakSet ? WeakSet : Set)();
    this.pool = new Trie(canUseWeakMap);
    this.passes = new WeakMap();
    this.keysByJSON = new Map();
    this.empty = this.admit({});
  }

  ObjectCanon.prototype.isKnown = function (value) {
    return isNonNullObject(value) && this.known.has(value);
  };

  ObjectCanon.prototype.pass = function (value) {
    if (isNonNullObject(value)) {
      var copy = shallowCopy(value);
      this.passes.set(copy, value);
      return copy;
    }

    return value;
  };

  ObjectCanon.prototype.admit = function (value) {
    var _this = this;

    if (isNonNullObject(value)) {
      var original = this.passes.get(value);
      if (original) return original;
      var proto = Object.getPrototypeOf(value);

      switch (proto) {
        case Array.prototype:
          {
            if (this.known.has(value)) return value;
            var array = value.map(this.admit, this);
            var node = this.pool.lookupArray(array);

            if (!node.array) {
              this.known.add(node.array = array);

              if (__DEV__) {
                Object.freeze(array);
              }
            }

            return node.array;
          }

        case null:
        case Object.prototype:
          {
            if (this.known.has(value)) return value;
            var proto_1 = Object.getPrototypeOf(value);
            var array_1 = [proto_1];
            var keys = this.sortedKeys(value);
            array_1.push(keys.json);
            var firstValueIndex_1 = array_1.length;
            keys.sorted.forEach(function (key) {
              array_1.push(_this.admit(value[key]));
            });
            var node = this.pool.lookupArray(array_1);

            if (!node.object) {
              var obj_1 = node.object = Object.create(proto_1);
              this.known.add(obj_1);
              keys.sorted.forEach(function (key, i) {
                obj_1[key] = array_1[firstValueIndex_1 + i];
              });

              if (__DEV__) {
                Object.freeze(obj_1);
              }
            }

            return node.object;
          }
      }
    }

    return value;
  };

  ObjectCanon.prototype.sortedKeys = function (obj) {
    var keys = Object.keys(obj);
    var node = this.pool.lookupArray(keys);

    if (!node.keys) {
      keys.sort();
      var json = JSON.stringify(keys);

      if (!(node.keys = this.keysByJSON.get(json))) {
        this.keysByJSON.set(json, node.keys = {
          sorted: keys,
          json: json
        });
      }
    }

    return node.keys;
  };

  return ObjectCanon;
}();
var canonicalStringify = Object.assign(function (value) {
  if (isNonNullObject(value)) {
    if (stringifyCanon === void 0) {
      resetCanonicalStringify();
    }

    var canonical = stringifyCanon.admit(value);
    var json = stringifyCache.get(canonical);

    if (json === void 0) {
      stringifyCache.set(canonical, json = JSON.stringify(canonical));
    }

    return json;
  }

  return JSON.stringify(value);
}, {
  reset: resetCanonicalStringify
});
var stringifyCanon;
var stringifyCache;

function resetCanonicalStringify() {
  stringifyCanon = new ObjectCanon();
  stringifyCache = new (canUseWeakMap ? WeakMap : Map)();
}

function execSelectionSetKeyArgs(options) {
  return [options.selectionSet, options.objectOrReference, options.context, options.context.canonizeResults];
}

var StoreReader = function () {
  function StoreReader(config) {
    var _this = this;

    this.knownResults = new (canUseWeakMap ? WeakMap : Map)();
    this.config = compact(config, {
      addTypename: config.addTypename !== false,
      canonizeResults: shouldCanonizeResults(config)
    });
    this.canon = config.canon || new ObjectCanon();
    this.executeSelectionSet = wrap$1(function (options) {
      var _a;

      var canonizeResults = options.context.canonizeResults;
      var peekArgs = execSelectionSetKeyArgs(options);
      peekArgs[3] = !canonizeResults;

      var other = (_a = _this.executeSelectionSet).peek.apply(_a, peekArgs);

      if (other) {
        if (canonizeResults) {
          return __assign(__assign({}, other), {
            result: _this.canon.admit(other.result)
          });
        }

        return other;
      }

      maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
      return _this.execSelectionSetImpl(options);
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: execSelectionSetKeyArgs,
      makeCacheKey: function (selectionSet, parent, context, canonizeResults) {
        if (supportsResultCaching(context.store)) {
          return context.store.makeCacheKey(selectionSet, isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
        }
      }
    });
    this.executeSubSelectedArray = wrap$1(function (options) {
      maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
      return _this.execSubSelectedArrayImpl(options);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function (_a) {
        var field = _a.field,
            array = _a.array,
            context = _a.context;

        if (supportsResultCaching(context.store)) {
          return context.store.makeCacheKey(field, array, context.varString);
        }
      }
    });
  }

  StoreReader.prototype.resetCanon = function () {
    this.canon = new ObjectCanon();
  };

  StoreReader.prototype.diffQueryAgainstStore = function (_a) {
    var store = _a.store,
        query = _a.query,
        _b = _a.rootId,
        rootId = _b === void 0 ? 'ROOT_QUERY' : _b,
        variables = _a.variables,
        _c = _a.returnPartialData,
        returnPartialData = _c === void 0 ? true : _c,
        _d = _a.canonizeResults,
        canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
    var policies = this.config.cache.policies;
    variables = __assign(__assign({}, getDefaultValues(getQueryDefinition(query))), variables);
    var rootRef = makeReference(rootId);
    var merger = new DeepMerger();
    var execResult = this.executeSelectionSet({
      selectionSet: getMainDefinition(query).selectionSet,
      objectOrReference: rootRef,
      enclosingRef: rootRef,
      context: {
        store: store,
        query: query,
        policies: policies,
        variables: variables,
        varString: canonicalStringify(variables),
        canonizeResults: canonizeResults,
        fragmentMap: createFragmentMap(getFragmentDefinitions(query)),
        merge: function (a, b) {
          return merger.merge(a, b);
        }
      }
    });
    var missing;

    if (execResult.missing) {
      missing = [new MissingFieldError(firstMissing(execResult.missing), execResult.missing, query, variables)];

      if (!returnPartialData) {
        throw missing[0];
      }
    }

    return {
      result: execResult.result,
      complete: !missing,
      missing: missing
    };
  };

  StoreReader.prototype.isFresh = function (result, parent, selectionSet, context) {
    if (supportsResultCaching(context.store) && this.knownResults.get(result) === selectionSet) {
      var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result));

      if (latest && result === latest.result) {
        return true;
      }
    }

    return false;
  };

  StoreReader.prototype.execSelectionSetImpl = function (_a) {
    var _this = this;

    var selectionSet = _a.selectionSet,
        objectOrReference = _a.objectOrReference,
        enclosingRef = _a.enclosingRef,
        context = _a.context;

    if (isReference(objectOrReference) && !context.policies.rootTypenamesById[objectOrReference.__ref] && !context.store.has(objectOrReference.__ref)) {
      return {
        result: this.canon.empty,
        missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object")
      };
    }

    var variables = context.variables,
        policies = context.policies,
        store = context.store;
    var typename = store.getFieldValue(objectOrReference, "__typename");
    var result = {};
    var missing;

    if (this.config.addTypename && typeof typename === "string" && !policies.rootIdsByTypename[typename]) {
      result = {
        __typename: typename
      };
    }

    function handleMissing(result, resultName) {
      var _a;

      if (result.missing) {
        missing = context.merge(missing, (_a = {}, _a[resultName] = result.missing, _a));
      }

      return result.result;
    }

    var workSet = new Set(selectionSet.selections);
    workSet.forEach(function (selection) {
      var _a, _b;

      if (!shouldInclude(selection, variables)) return;

      if (isField(selection)) {
        var fieldValue = policies.readField({
          fieldName: selection.name.value,
          field: selection,
          variables: context.variables,
          from: objectOrReference
        }, context);
        var resultName = resultKeyNameFromField(selection);

        if (fieldValue === void 0) {
          if (!addTypenameToDocument.added(selection)) {
            missing = context.merge(missing, (_a = {}, _a[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat(isReference(objectOrReference) ? objectOrReference.__ref + " object" : "object " + JSON.stringify(objectOrReference, null, 2)), _a));
          }
        } else if (isArray(fieldValue)) {
          fieldValue = handleMissing(_this.executeSubSelectedArray({
            field: selection,
            array: fieldValue,
            enclosingRef: enclosingRef,
            context: context
          }), resultName);
        } else if (!selection.selectionSet) {
          if (context.canonizeResults) {
            fieldValue = _this.canon.pass(fieldValue);
          }
        } else if (fieldValue != null) {
          fieldValue = handleMissing(_this.executeSelectionSet({
            selectionSet: selection.selectionSet,
            objectOrReference: fieldValue,
            enclosingRef: isReference(fieldValue) ? fieldValue : enclosingRef,
            context: context
          }), resultName);
        }

        if (fieldValue !== void 0) {
          result = context.merge(result, (_b = {}, _b[resultName] = fieldValue, _b));
        }
      } else {
        var fragment = getFragmentFromSelection(selection, context.fragmentMap);

        if (fragment && policies.fragmentMatches(fragment, typename)) {
          fragment.selectionSet.selections.forEach(workSet.add, workSet);
        }
      }
    });
    var finalResult = {
      result: result,
      missing: missing
    };
    var frozen = context.canonizeResults ? this.canon.admit(finalResult) : maybeDeepFreeze(finalResult);

    if (frozen.result) {
      this.knownResults.set(frozen.result, selectionSet);
    }

    return frozen;
  };

  StoreReader.prototype.execSubSelectedArrayImpl = function (_a) {
    var _this = this;

    var field = _a.field,
        array = _a.array,
        enclosingRef = _a.enclosingRef,
        context = _a.context;
    var missing;

    function handleMissing(childResult, i) {
      var _a;

      if (childResult.missing) {
        missing = context.merge(missing, (_a = {}, _a[i] = childResult.missing, _a));
      }

      return childResult.result;
    }

    if (field.selectionSet) {
      array = array.filter(context.store.canRead);
    }

    array = array.map(function (item, i) {
      if (item === null) {
        return null;
      }

      if (isArray(item)) {
        return handleMissing(_this.executeSubSelectedArray({
          field: field,
          array: item,
          enclosingRef: enclosingRef,
          context: context
        }), i);
      }

      if (field.selectionSet) {
        return handleMissing(_this.executeSelectionSet({
          selectionSet: field.selectionSet,
          objectOrReference: item,
          enclosingRef: isReference(item) ? item : enclosingRef,
          context: context
        }), i);
      }

      if (__DEV__) {
        assertSelectionSetForIdValue(context.store, field, item);
      }

      return item;
    });
    return {
      result: context.canonizeResults ? this.canon.admit(array) : array,
      missing: missing
    };
  };

  return StoreReader;
}();

function firstMissing(tree) {
  try {
    JSON.stringify(tree, function (_, value) {
      if (typeof value === "string") throw value;
      return value;
    });
  } catch (result) {
    return result;
  }
}

function assertSelectionSetForIdValue(store, field, fieldValue) {
  if (!field.selectionSet) {
    var workSet_1 = new Set([fieldValue]);
    workSet_1.forEach(function (value) {
      if (isNonNullObject(value)) {
        __DEV__ ? invariant(!isReference(value), "Missing selection set for object of type ".concat(getTypenameFromStoreObject(store, value), " returned for query field ").concat(field.name.value)) : invariant(!isReference(value), 5);
        Object.values(value).forEach(workSet_1.add, workSet_1);
      }
    });
  }
}

var cacheSlot = new Slot();
var cacheInfoMap = new WeakMap();

function getCacheInfo(cache) {
  var info = cacheInfoMap.get(cache);

  if (!info) {
    cacheInfoMap.set(cache, info = {
      vars: new Set(),
      dep: dep()
    });
  }

  return info;
}

function forgetCache(cache) {
  getCacheInfo(cache).vars.forEach(function (rv) {
    return rv.forgetCache(cache);
  });
}
function recallCache(cache) {
  getCacheInfo(cache).vars.forEach(function (rv) {
    return rv.attachCache(cache);
  });
}
function makeVar(value) {
  var caches = new Set();
  var listeners = new Set();

  var rv = function (newValue) {
    if (arguments.length > 0) {
      if (value !== newValue) {
        value = newValue;
        caches.forEach(function (cache) {
          getCacheInfo(cache).dep.dirty(rv);
          broadcast(cache);
        });
        var oldListeners = Array.from(listeners);
        listeners.clear();
        oldListeners.forEach(function (listener) {
          return listener(value);
        });
      }
    } else {
      var cache = cacheSlot.getValue();

      if (cache) {
        attach(cache);
        getCacheInfo(cache).dep(rv);
      }
    }

    return value;
  };

  rv.onNextChange = function (listener) {
    listeners.add(listener);
    return function () {
      listeners.delete(listener);
    };
  };

  var attach = rv.attachCache = function (cache) {
    caches.add(cache);
    getCacheInfo(cache).vars.add(rv);
    return rv;
  };

  rv.forgetCache = function (cache) {
    return caches.delete(cache);
  };

  return rv;
}

function broadcast(cache) {
  if (cache.broadcastWatches) {
    cache.broadcastWatches();
  }
}

var specifierInfoCache = Object.create(null);

function lookupSpecifierInfo(spec) {
  var cacheKey = JSON.stringify(spec);
  return specifierInfoCache[cacheKey] || (specifierInfoCache[cacheKey] = Object.create(null));
}

function keyFieldsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyFieldsFn || (info.keyFieldsFn = function (object, context) {
    var extract = function (from, key) {
      return context.readField(key, from);
    };

    var keyObject = context.keyObject = collectSpecifierPaths(specifier, function (schemaKeyPath) {
      var extracted = extractKeyPath(context.storeObject, schemaKeyPath, extract);

      if (extracted === void 0 && object !== context.storeObject && hasOwn.call(object, schemaKeyPath[0])) {
        extracted = extractKeyPath(object, schemaKeyPath, extractKey);
      }

      __DEV__ ? invariant(extracted !== void 0, "Missing field '".concat(schemaKeyPath.join('.'), "' while extracting keyFields from ").concat(JSON.stringify(object))) : invariant(extracted !== void 0, 2);
      return extracted;
    });
    return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
  });
}
function keyArgsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyArgsFn || (info.keyArgsFn = function (args, _a) {
    var field = _a.field,
        variables = _a.variables,
        fieldName = _a.fieldName;
    var collected = collectSpecifierPaths(specifier, function (keyPath) {
      var firstKey = keyPath[0];
      var firstChar = firstKey.charAt(0);

      if (firstChar === "@") {
        if (field && isNonEmptyArray(field.directives)) {
          var directiveName_1 = firstKey.slice(1);
          var d = field.directives.find(function (d) {
            return d.name.value === directiveName_1;
          });
          var directiveArgs = d && argumentsObjectFromField(d, variables);
          return directiveArgs && extractKeyPath(directiveArgs, keyPath.slice(1));
        }

        return;
      }

      if (firstChar === "$") {
        var variableName = firstKey.slice(1);

        if (variables && hasOwn.call(variables, variableName)) {
          var varKeyPath = keyPath.slice(0);
          varKeyPath[0] = variableName;
          return extractKeyPath(variables, varKeyPath);
        }

        return;
      }

      if (args) {
        return extractKeyPath(args, keyPath);
      }
    });
    var suffix = JSON.stringify(collected);

    if (args || suffix !== "{}") {
      fieldName += ":" + suffix;
    }

    return fieldName;
  });
}
function collectSpecifierPaths(specifier, extractor) {
  var merger = new DeepMerger();
  return getSpecifierPaths(specifier).reduce(function (collected, path) {
    var _a;

    var toMerge = extractor(path);

    if (toMerge !== void 0) {
      for (var i = path.length - 1; i >= 0; --i) {
        toMerge = (_a = {}, _a[path[i]] = toMerge, _a);
      }

      collected = merger.merge(collected, toMerge);
    }

    return collected;
  }, Object.create(null));
}
function getSpecifierPaths(spec) {
  var info = lookupSpecifierInfo(spec);

  if (!info.paths) {
    var paths_1 = info.paths = [];
    var currentPath_1 = [];
    spec.forEach(function (s, i) {
      if (isArray(s)) {
        getSpecifierPaths(s).forEach(function (p) {
          return paths_1.push(currentPath_1.concat(p));
        });
        currentPath_1.length = 0;
      } else {
        currentPath_1.push(s);

        if (!isArray(spec[i + 1])) {
          paths_1.push(currentPath_1.slice(0));
          currentPath_1.length = 0;
        }
      }
    });
  }

  return info.paths;
}

function extractKey(object, key) {
  return object[key];
}

function extractKeyPath(object, path, extract) {
  extract = extract || extractKey;
  return normalize(path.reduce(function reducer(obj, key) {
    return isArray(obj) ? obj.map(function (child) {
      return reducer(child, key);
    }) : obj && extract(obj, key);
  }, object));
}

function normalize(value) {
  if (isNonNullObject(value)) {
    if (isArray(value)) {
      return value.map(normalize);
    }

    return collectSpecifierPaths(Object.keys(value).sort(), function (path) {
      return extractKeyPath(value, path);
    });
  }

  return value;
}

getStoreKeyName.setStringify(canonicalStringify);

function argsFromFieldSpecifier(spec) {
  return spec.args !== void 0 ? spec.args : spec.field ? argumentsObjectFromField(spec.field, spec.variables) : null;
}

var nullKeyFieldsFn = function () {
  return void 0;
};

var simpleKeyArgsFn = function (_args, context) {
  return context.fieldName;
};

var mergeTrueFn = function (existing, incoming, _a) {
  var mergeObjects = _a.mergeObjects;
  return mergeObjects(existing, incoming);
};

var mergeFalseFn = function (_, incoming) {
  return incoming;
};

var Policies = function () {
  function Policies(config) {
    this.config = config;
    this.typePolicies = Object.create(null);
    this.toBeAdded = Object.create(null);
    this.supertypeMap = new Map();
    this.fuzzySubtypes = new Map();
    this.rootIdsByTypename = Object.create(null);
    this.rootTypenamesById = Object.create(null);
    this.usingPossibleTypes = false;
    this.config = __assign({
      dataIdFromObject: defaultDataIdFromObject
    }, config);
    this.cache = this.config.cache;
    this.setRootTypename("Query");
    this.setRootTypename("Mutation");
    this.setRootTypename("Subscription");

    if (config.possibleTypes) {
      this.addPossibleTypes(config.possibleTypes);
    }

    if (config.typePolicies) {
      this.addTypePolicies(config.typePolicies);
    }
  }

  Policies.prototype.identify = function (object, partialContext) {
    var _a;

    var policies = this;
    var typename = partialContext && (partialContext.typename || ((_a = partialContext.storeObject) === null || _a === void 0 ? void 0 : _a.__typename)) || object.__typename;

    if (typename === this.rootTypenamesById.ROOT_QUERY) {
      return ["ROOT_QUERY"];
    }

    var storeObject = partialContext && partialContext.storeObject || object;

    var context = __assign(__assign({}, partialContext), {
      typename: typename,
      storeObject: storeObject,
      readField: partialContext && partialContext.readField || function () {
        var options = normalizeReadFieldOptions(arguments, storeObject);
        return policies.readField(options, {
          store: policies.cache["data"],
          variables: options.variables
        });
      }
    });

    var id;
    var policy = typename && this.getTypePolicy(typename);
    var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;

    while (keyFn) {
      var specifierOrId = keyFn(object, context);

      if (isArray(specifierOrId)) {
        keyFn = keyFieldsFnFromSpecifier(specifierOrId);
      } else {
        id = specifierOrId;
        break;
      }
    }

    id = id ? String(id) : void 0;
    return context.keyObject ? [id, context.keyObject] : [id];
  };

  Policies.prototype.addTypePolicies = function (typePolicies) {
    var _this = this;

    Object.keys(typePolicies).forEach(function (typename) {
      var _a = typePolicies[typename],
          queryType = _a.queryType,
          mutationType = _a.mutationType,
          subscriptionType = _a.subscriptionType,
          incoming = __rest(_a, ["queryType", "mutationType", "subscriptionType"]);

      if (queryType) _this.setRootTypename("Query", typename);
      if (mutationType) _this.setRootTypename("Mutation", typename);
      if (subscriptionType) _this.setRootTypename("Subscription", typename);

      if (hasOwn.call(_this.toBeAdded, typename)) {
        _this.toBeAdded[typename].push(incoming);
      } else {
        _this.toBeAdded[typename] = [incoming];
      }
    });
  };

  Policies.prototype.updateTypePolicy = function (typename, incoming) {
    var _this = this;

    var existing = this.getTypePolicy(typename);
    var keyFields = incoming.keyFields,
        fields = incoming.fields;

    function setMerge(existing, merge) {
      existing.merge = typeof merge === "function" ? merge : merge === true ? mergeTrueFn : merge === false ? mergeFalseFn : existing.merge;
    }

    setMerge(existing, incoming.merge);
    existing.keyFn = keyFields === false ? nullKeyFieldsFn : isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) : typeof keyFields === "function" ? keyFields : existing.keyFn;

    if (fields) {
      Object.keys(fields).forEach(function (fieldName) {
        var existing = _this.getFieldPolicy(typename, fieldName, true);

        var incoming = fields[fieldName];

        if (typeof incoming === "function") {
          existing.read = incoming;
        } else {
          var keyArgs = incoming.keyArgs,
              read = incoming.read,
              merge = incoming.merge;
          existing.keyFn = keyArgs === false ? simpleKeyArgsFn : isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) : typeof keyArgs === "function" ? keyArgs : existing.keyFn;

          if (typeof read === "function") {
            existing.read = read;
          }

          setMerge(existing, merge);
        }

        if (existing.read && existing.merge) {
          existing.keyFn = existing.keyFn || simpleKeyArgsFn;
        }
      });
    }
  };

  Policies.prototype.setRootTypename = function (which, typename) {
    if (typename === void 0) {
      typename = which;
    }

    var rootId = "ROOT_" + which.toUpperCase();
    var old = this.rootTypenamesById[rootId];

    if (typename !== old) {
      __DEV__ ? invariant(!old || old === which, "Cannot change root ".concat(which, " __typename more than once")) : invariant(!old || old === which, 3);
      if (old) delete this.rootIdsByTypename[old];
      this.rootIdsByTypename[typename] = rootId;
      this.rootTypenamesById[rootId] = typename;
    }
  };

  Policies.prototype.addPossibleTypes = function (possibleTypes) {
    var _this = this;

    this.usingPossibleTypes = true;
    Object.keys(possibleTypes).forEach(function (supertype) {
      _this.getSupertypeSet(supertype, true);

      possibleTypes[supertype].forEach(function (subtype) {
        _this.getSupertypeSet(subtype, true).add(supertype);

        var match = subtype.match(TypeOrFieldNameRegExp);

        if (!match || match[0] !== subtype) {
          _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
        }
      });
    });
  };

  Policies.prototype.getTypePolicy = function (typename) {
    var _this = this;

    if (!hasOwn.call(this.typePolicies, typename)) {
      var policy_1 = this.typePolicies[typename] = Object.create(null);
      policy_1.fields = Object.create(null);
      var supertypes = this.supertypeMap.get(typename);

      if (supertypes && supertypes.size) {
        supertypes.forEach(function (supertype) {
          var _a = _this.getTypePolicy(supertype),
              fields = _a.fields,
              rest = __rest(_a, ["fields"]);

          Object.assign(policy_1, rest);
          Object.assign(policy_1.fields, fields);
        });
      }
    }

    var inbox = this.toBeAdded[typename];

    if (inbox && inbox.length) {
      inbox.splice(0).forEach(function (policy) {
        _this.updateTypePolicy(typename, policy);
      });
    }

    return this.typePolicies[typename];
  };

  Policies.prototype.getFieldPolicy = function (typename, fieldName, createIfMissing) {
    if (typename) {
      var fieldPolicies = this.getTypePolicy(typename).fields;
      return fieldPolicies[fieldName] || createIfMissing && (fieldPolicies[fieldName] = Object.create(null));
    }
  };

  Policies.prototype.getSupertypeSet = function (subtype, createIfMissing) {
    var supertypeSet = this.supertypeMap.get(subtype);

    if (!supertypeSet && createIfMissing) {
      this.supertypeMap.set(subtype, supertypeSet = new Set());
    }

    return supertypeSet;
  };

  Policies.prototype.fragmentMatches = function (fragment, typename, result, variables) {
    var _this = this;

    if (!fragment.typeCondition) return true;
    if (!typename) return false;
    var supertype = fragment.typeCondition.name.value;
    if (typename === supertype) return true;

    if (this.usingPossibleTypes && this.supertypeMap.has(supertype)) {
      var typenameSupertypeSet = this.getSupertypeSet(typename, true);
      var workQueue_1 = [typenameSupertypeSet];

      var maybeEnqueue_1 = function (subtype) {
        var supertypeSet = _this.getSupertypeSet(subtype, false);

        if (supertypeSet && supertypeSet.size && workQueue_1.indexOf(supertypeSet) < 0) {
          workQueue_1.push(supertypeSet);
        }
      };

      var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
      var checkingFuzzySubtypes = false;

      for (var i = 0; i < workQueue_1.length; ++i) {
        var supertypeSet = workQueue_1[i];

        if (supertypeSet.has(supertype)) {
          if (!typenameSupertypeSet.has(supertype)) {
            if (checkingFuzzySubtypes) {
              __DEV__ && invariant.warn("Inferring subtype ".concat(typename, " of supertype ").concat(supertype));
            }

            typenameSupertypeSet.add(supertype);
          }

          return true;
        }

        supertypeSet.forEach(maybeEnqueue_1);

        if (needToCheckFuzzySubtypes && i === workQueue_1.length - 1 && selectionSetMatchesResult(fragment.selectionSet, result, variables)) {
          needToCheckFuzzySubtypes = false;
          checkingFuzzySubtypes = true;
          this.fuzzySubtypes.forEach(function (regExp, fuzzyString) {
            var match = typename.match(regExp);

            if (match && match[0] === typename) {
              maybeEnqueue_1(fuzzyString);
            }
          });
        }
      }
    }

    return false;
  };

  Policies.prototype.hasKeyArgs = function (typename, fieldName) {
    var policy = this.getFieldPolicy(typename, fieldName, false);
    return !!(policy && policy.keyFn);
  };

  Policies.prototype.getStoreFieldName = function (fieldSpec) {
    var typename = fieldSpec.typename,
        fieldName = fieldSpec.fieldName;
    var policy = this.getFieldPolicy(typename, fieldName, false);
    var storeFieldName;
    var keyFn = policy && policy.keyFn;

    if (keyFn && typename) {
      var context = {
        typename: typename,
        fieldName: fieldName,
        field: fieldSpec.field || null,
        variables: fieldSpec.variables
      };
      var args = argsFromFieldSpecifier(fieldSpec);

      while (keyFn) {
        var specifierOrString = keyFn(args, context);

        if (isArray(specifierOrString)) {
          keyFn = keyArgsFnFromSpecifier(specifierOrString);
        } else {
          storeFieldName = specifierOrString || fieldName;
          break;
        }
      }
    }

    if (storeFieldName === void 0) {
      storeFieldName = fieldSpec.field ? storeKeyNameFromField(fieldSpec.field, fieldSpec.variables) : getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
    }

    if (storeFieldName === false) {
      return fieldName;
    }

    return fieldName === fieldNameFromStoreName(storeFieldName) ? storeFieldName : fieldName + ":" + storeFieldName;
  };

  Policies.prototype.readField = function (options, context) {
    var objectOrReference = options.from;
    if (!objectOrReference) return;
    var nameOrField = options.field || options.fieldName;
    if (!nameOrField) return;

    if (options.typename === void 0) {
      var typename = context.store.getFieldValue(objectOrReference, "__typename");
      if (typename) options.typename = typename;
    }

    var storeFieldName = this.getStoreFieldName(options);
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
    var policy = this.getFieldPolicy(options.typename, fieldName, false);
    var read = policy && policy.read;

    if (read) {
      var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(isReference(objectOrReference) ? objectOrReference.__ref : objectOrReference, storeFieldName));
      return cacheSlot.withValue(this.cache, read, [existing, readOptions]);
    }

    return existing;
  };

  Policies.prototype.getReadFunction = function (typename, fieldName) {
    var policy = this.getFieldPolicy(typename, fieldName, false);
    return policy && policy.read;
  };

  Policies.prototype.getMergeFunction = function (parentTypename, fieldName, childTypename) {
    var policy = this.getFieldPolicy(parentTypename, fieldName, false);
    var merge = policy && policy.merge;

    if (!merge && childTypename) {
      policy = this.getTypePolicy(childTypename);
      merge = policy && policy.merge;
    }

    return merge;
  };

  Policies.prototype.runMergeFunction = function (existing, incoming, _a, context, storage) {
    var field = _a.field,
        typename = _a.typename,
        merge = _a.merge;

    if (merge === mergeTrueFn) {
      return makeMergeObjectsFunction(context.store)(existing, incoming);
    }

    if (merge === mergeFalseFn) {
      return incoming;
    }

    if (context.overwrite) {
      existing = void 0;
    }

    return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, {
      typename: typename,
      fieldName: field.name.value,
      field: field,
      variables: context.variables
    }, context, storage || Object.create(null)));
  };

  return Policies;
}();

function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
  var storeFieldName = policies.getStoreFieldName(fieldSpec);
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var variables = fieldSpec.variables || context.variables;
  var _a = context.store,
      toReference = _a.toReference,
      canRead = _a.canRead;
  return {
    args: argsFromFieldSpecifier(fieldSpec),
    field: fieldSpec.field || null,
    fieldName: fieldName,
    storeFieldName: storeFieldName,
    variables: variables,
    isReference: isReference,
    toReference: toReference,
    storage: storage,
    cache: policies.cache,
    canRead: canRead,
    readField: function () {
      return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, context), context);
    },
    mergeObjects: makeMergeObjectsFunction(context.store)
  };
}

function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
  var fieldNameOrOptions = readFieldArgs[0],
      from = readFieldArgs[1],
      argc = readFieldArgs.length;
  var options;

  if (typeof fieldNameOrOptions === "string") {
    options = {
      fieldName: fieldNameOrOptions,
      from: argc > 1 ? from : objectOrReference
    };
  } else {
    options = __assign({}, fieldNameOrOptions);

    if (!hasOwn.call(options, "from")) {
      options.from = objectOrReference;
    }
  }

  if (__DEV__ && options.from === void 0) {
    __DEV__ && invariant.warn("Undefined 'from' passed to readField with arguments ".concat(stringifyForDisplay(Array.from(readFieldArgs))));
  }

  if (void 0 === options.variables) {
    options.variables = variables;
  }

  return options;
}

function makeMergeObjectsFunction(store) {
  return function mergeObjects(existing, incoming) {
    if (isArray(existing) || isArray(incoming)) {
      throw __DEV__ ? new InvariantError("Cannot automatically merge arrays") : new InvariantError(4);
    }

    if (isNonNullObject(existing) && isNonNullObject(incoming)) {
      var eType = store.getFieldValue(existing, "__typename");
      var iType = store.getFieldValue(incoming, "__typename");
      var typesDiffer = eType && iType && eType !== iType;

      if (typesDiffer) {
        return incoming;
      }

      if (isReference(existing) && storeValueIsStoreObject(incoming)) {
        store.merge(existing.__ref, incoming);
        return existing;
      }

      if (storeValueIsStoreObject(existing) && isReference(incoming)) {
        store.merge(existing, incoming.__ref);
        return incoming;
      }

      if (storeValueIsStoreObject(existing) && storeValueIsStoreObject(incoming)) {
        return __assign(__assign({}, existing), incoming);
      }
    }

    return incoming;
  };
}

function getContextFlavor(context, clientOnly, deferred) {
  var key = "".concat(clientOnly).concat(deferred);
  var flavored = context.flavors.get(key);

  if (!flavored) {
    context.flavors.set(key, flavored = context.clientOnly === clientOnly && context.deferred === deferred ? context : __assign(__assign({}, context), {
      clientOnly: clientOnly,
      deferred: deferred
    }));
  }

  return flavored;
}

var StoreWriter = function () {
  function StoreWriter(cache, reader) {
    this.cache = cache;
    this.reader = reader;
  }

  StoreWriter.prototype.writeToStore = function (store, _a) {
    var _this = this;

    var query = _a.query,
        result = _a.result,
        dataId = _a.dataId,
        variables = _a.variables,
        overwrite = _a.overwrite;
    var operationDefinition = getOperationDefinition(query);
    var merger = makeProcessedFieldsMerger();
    variables = __assign(__assign({}, getDefaultValues(operationDefinition)), variables);
    var context = {
      store: store,
      written: Object.create(null),
      merge: function (existing, incoming) {
        return merger.merge(existing, incoming);
      },
      variables: variables,
      varString: canonicalStringify(variables),
      fragmentMap: createFragmentMap(getFragmentDefinitions(query)),
      overwrite: !!overwrite,
      incomingById: new Map(),
      clientOnly: false,
      deferred: false,
      flavors: new Map()
    };
    var ref = this.processSelectionSet({
      result: result || Object.create(null),
      dataId: dataId,
      selectionSet: operationDefinition.selectionSet,
      mergeTree: {
        map: new Map()
      },
      context: context
    });

    if (!isReference(ref)) {
      throw __DEV__ ? new InvariantError("Could not identify object ".concat(JSON.stringify(result))) : new InvariantError(6);
    }

    context.incomingById.forEach(function (_a, dataId) {
      var storeObject = _a.storeObject,
          mergeTree = _a.mergeTree,
          fieldNodeSet = _a.fieldNodeSet;
      var entityRef = makeReference(dataId);

      if (mergeTree && mergeTree.map.size) {
        var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);

        if (isReference(applied)) {
          return;
        }

        storeObject = applied;
      }

      if (__DEV__ && !context.overwrite) {
        var fieldsWithSelectionSets_1 = Object.create(null);
        fieldNodeSet.forEach(function (field) {
          if (field.selectionSet) {
            fieldsWithSelectionSets_1[field.name.value] = true;
          }
        });

        var hasSelectionSet_1 = function (storeFieldName) {
          return fieldsWithSelectionSets_1[fieldNameFromStoreName(storeFieldName)] === true;
        };

        var hasMergeFunction_1 = function (storeFieldName) {
          var childTree = mergeTree && mergeTree.map.get(storeFieldName);
          return Boolean(childTree && childTree.info && childTree.info.merge);
        };

        Object.keys(storeObject).forEach(function (storeFieldName) {
          if (hasSelectionSet_1(storeFieldName) && !hasMergeFunction_1(storeFieldName)) {
            warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
          }
        });
      }

      store.merge(dataId, storeObject);
    });
    store.retain(ref.__ref);
    return ref;
  };

  StoreWriter.prototype.processSelectionSet = function (_a) {
    var _this = this;

    var dataId = _a.dataId,
        result = _a.result,
        selectionSet = _a.selectionSet,
        context = _a.context,
        mergeTree = _a.mergeTree;
    var policies = this.cache.policies;
    var incoming = Object.create(null);
    var typename = dataId && policies.rootTypenamesById[dataId] || getTypenameFromResult(result, selectionSet, context.fragmentMap) || dataId && context.store.get(dataId, "__typename");

    if ("string" === typeof typename) {
      incoming.__typename = typename;
    }

    var readField = function () {
      var options = normalizeReadFieldOptions(arguments, incoming, context.variables);

      if (isReference(options.from)) {
        var info = context.incomingById.get(options.from.__ref);

        if (info) {
          var result_1 = policies.readField(__assign(__assign({}, options), {
            from: info.storeObject
          }), context);

          if (result_1 !== void 0) {
            return result_1;
          }
        }
      }

      return policies.readField(options, context);
    };

    var fieldNodeSet = new Set();
    this.flattenFields(selectionSet, result, context, typename).forEach(function (context, field) {
      var _a;

      var resultFieldKey = resultKeyNameFromField(field);
      var value = result[resultFieldKey];
      fieldNodeSet.add(field);

      if (value !== void 0) {
        var storeFieldName = policies.getStoreFieldName({
          typename: typename,
          fieldName: field.name.value,
          field: field,
          variables: context.variables
        });
        var childTree = getChildMergeTree(mergeTree, storeFieldName);

        var incomingValue = _this.processFieldValue(value, field, field.selectionSet ? getContextFlavor(context, false, false) : context, childTree);

        var childTypename = void 0;

        if (field.selectionSet && (isReference(incomingValue) || storeValueIsStoreObject(incomingValue))) {
          childTypename = readField("__typename", incomingValue);
        }

        var merge = policies.getMergeFunction(typename, field.name.value, childTypename);

        if (merge) {
          childTree.info = {
            field: field,
            typename: typename,
            merge: merge
          };
        } else {
          maybeRecycleChildMergeTree(mergeTree, storeFieldName);
        }

        incoming = context.merge(incoming, (_a = {}, _a[storeFieldName] = incomingValue, _a));
      } else if (__DEV__ && !context.clientOnly && !context.deferred && !addTypenameToDocument.added(field) && !policies.getReadFunction(typename, field.name.value)) {
        __DEV__ && invariant.error("Missing field '".concat(resultKeyNameFromField(field), "' while writing result ").concat(JSON.stringify(result, null, 2)).substring(0, 1000));
      }
    });

    try {
      var _b = policies.identify(result, {
        typename: typename,
        selectionSet: selectionSet,
        fragmentMap: context.fragmentMap,
        storeObject: incoming,
        readField: readField
      }),
          id = _b[0],
          keyObject = _b[1];

      dataId = dataId || id;

      if (keyObject) {
        incoming = context.merge(incoming, keyObject);
      }
    } catch (e) {
      if (!dataId) throw e;
    }

    if ("string" === typeof dataId) {
      var dataRef = makeReference(dataId);
      var sets = context.written[dataId] || (context.written[dataId] = []);
      if (sets.indexOf(selectionSet) >= 0) return dataRef;
      sets.push(selectionSet);

      if (this.reader && this.reader.isFresh(result, dataRef, selectionSet, context)) {
        return dataRef;
      }

      var previous_1 = context.incomingById.get(dataId);

      if (previous_1) {
        previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
        previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
        fieldNodeSet.forEach(function (field) {
          return previous_1.fieldNodeSet.add(field);
        });
      } else {
        context.incomingById.set(dataId, {
          storeObject: incoming,
          mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
          fieldNodeSet: fieldNodeSet
        });
      }

      return dataRef;
    }

    return incoming;
  };

  StoreWriter.prototype.processFieldValue = function (value, field, context, mergeTree) {
    var _this = this;

    if (!field.selectionSet || value === null) {
      return __DEV__ ? cloneDeep(value) : value;
    }

    if (isArray(value)) {
      return value.map(function (item, i) {
        var value = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));

        maybeRecycleChildMergeTree(mergeTree, i);
        return value;
      });
    }

    return this.processSelectionSet({
      result: value,
      selectionSet: field.selectionSet,
      context: context,
      mergeTree: mergeTree
    });
  };

  StoreWriter.prototype.flattenFields = function (selectionSet, result, context, typename) {
    if (typename === void 0) {
      typename = getTypenameFromResult(result, selectionSet, context.fragmentMap);
    }

    var fieldMap = new Map();
    var policies = this.cache.policies;
    var limitingTrie = new Trie(false);

    (function flatten(selectionSet, inheritedContext) {
      var visitedNode = limitingTrie.lookup(selectionSet, inheritedContext.clientOnly, inheritedContext.deferred);
      if (visitedNode.visited) return;
      visitedNode.visited = true;
      selectionSet.selections.forEach(function (selection) {
        if (!shouldInclude(selection, context.variables)) return;
        var clientOnly = inheritedContext.clientOnly,
            deferred = inheritedContext.deferred;

        if (!(clientOnly && deferred) && isNonEmptyArray(selection.directives)) {
          selection.directives.forEach(function (dir) {
            var name = dir.name.value;
            if (name === "client") clientOnly = true;

            if (name === "defer") {
              var args = argumentsObjectFromField(dir, context.variables);

              if (!args || args.if !== false) {
                deferred = true;
              }
            }
          });
        }

        if (isField(selection)) {
          var existing = fieldMap.get(selection);

          if (existing) {
            clientOnly = clientOnly && existing.clientOnly;
            deferred = deferred && existing.deferred;
          }

          fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
        } else {
          var fragment = getFragmentFromSelection(selection, context.fragmentMap);

          if (fragment && policies.fragmentMatches(fragment, typename, result, context.variables)) {
            flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
          }
        }
      });
    })(selectionSet, context);

    return fieldMap;
  };

  StoreWriter.prototype.applyMerges = function (mergeTree, existing, incoming, context, getStorageArgs) {
    var _a;

    var _this = this;

    if (mergeTree.map.size && !isReference(incoming)) {
      var e_1 = !isArray(incoming) && (isReference(existing) || storeValueIsStoreObject(existing)) ? existing : void 0;
      var i_1 = incoming;

      if (e_1 && !getStorageArgs) {
        getStorageArgs = [isReference(e_1) ? e_1.__ref : e_1];
      }

      var changedFields_1;

      var getValue_1 = function (from, name) {
        return isArray(from) ? typeof name === "number" ? from[name] : void 0 : context.store.getFieldValue(from, String(name));
      };

      mergeTree.map.forEach(function (childTree, storeFieldName) {
        var eVal = getValue_1(e_1, storeFieldName);
        var iVal = getValue_1(i_1, storeFieldName);
        if (void 0 === iVal) return;

        if (getStorageArgs) {
          getStorageArgs.push(storeFieldName);
        }

        var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);

        if (aVal !== iVal) {
          changedFields_1 = changedFields_1 || new Map();
          changedFields_1.set(storeFieldName, aVal);
        }

        if (getStorageArgs) {
          invariant(getStorageArgs.pop() === storeFieldName);
        }
      });

      if (changedFields_1) {
        incoming = isArray(i_1) ? i_1.slice(0) : __assign({}, i_1);
        changedFields_1.forEach(function (value, name) {
          incoming[name] = value;
        });
      }
    }

    if (mergeTree.info) {
      return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a = context.store).getStorage.apply(_a, getStorageArgs));
    }

    return incoming;
  };

  return StoreWriter;
}();
var emptyMergeTreePool = [];

function getChildMergeTree(_a, name) {
  var map = _a.map;

  if (!map.has(name)) {
    map.set(name, emptyMergeTreePool.pop() || {
      map: new Map()
    });
  }

  return map.get(name);
}

function mergeMergeTrees(left, right) {
  if (left === right || !right || mergeTreeIsEmpty(right)) return left;
  if (!left || mergeTreeIsEmpty(left)) return right;
  var info = left.info && right.info ? __assign(__assign({}, left.info), right.info) : left.info || right.info;
  var needToMergeMaps = left.map.size && right.map.size;
  var map = needToMergeMaps ? new Map() : left.map.size ? left.map : right.map;
  var merged = {
    info: info,
    map: map
  };

  if (needToMergeMaps) {
    var remainingRightKeys_1 = new Set(right.map.keys());
    left.map.forEach(function (leftTree, key) {
      merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
      remainingRightKeys_1.delete(key);
    });
    remainingRightKeys_1.forEach(function (key) {
      merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
    });
  }

  return merged;
}

function mergeTreeIsEmpty(tree) {
  return !tree || !(tree.info || tree.map.size);
}

function maybeRecycleChildMergeTree(_a, name) {
  var map = _a.map;
  var childTree = map.get(name);

  if (childTree && mergeTreeIsEmpty(childTree)) {
    emptyMergeTreePool.push(childTree);
    map.delete(name);
  }
}

var warnings = new Set();

function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
  var getChild = function (objOrRef) {
    var child = store.getFieldValue(objOrRef, storeFieldName);
    return typeof child === "object" && child;
  };

  var existing = getChild(existingRef);
  if (!existing) return;
  var incoming = getChild(incomingObj);
  if (!incoming) return;
  if (isReference(existing)) return;
  if (equal(existing, incoming)) return;

  if (Object.keys(existing).every(function (key) {
    return store.getFieldValue(incoming, key) !== void 0;
  })) {
    return;
  }

  var parentType = store.getFieldValue(existingRef, "__typename") || store.getFieldValue(incomingObj, "__typename");
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var typeDotName = "".concat(parentType, ".").concat(fieldName);
  if (warnings.has(typeDotName)) return;
  warnings.add(typeDotName);
  var childTypenames = [];

  if (!isArray(existing) && !isArray(incoming)) {
    [existing, incoming].forEach(function (child) {
      var typename = store.getFieldValue(child, "__typename");

      if (typeof typename === "string" && !childTypenames.includes(typename)) {
        childTypenames.push(typename);
      }
    });
  }

  __DEV__ && invariant.warn("Cache data may be lost when replacing the ".concat(fieldName, " field of a ").concat(parentType, " object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(childTypenames.length ? "either ensure all objects of type " + childTypenames.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(typeDotName, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(existing).slice(0, 1000), "\n  incoming: ").concat(JSON.stringify(incoming).slice(0, 1000), "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"));
}

var InMemoryCache = function (_super) {
  __extends(InMemoryCache, _super);

  function InMemoryCache(config) {
    if (config === void 0) {
      config = {};
    }

    var _this = _super.call(this) || this;

    _this.watches = new Set();
    _this.typenameDocumentCache = new Map();
    _this.makeVar = makeVar;
    _this.txCount = 0;
    _this.config = normalizeConfig(config);
    _this.addTypename = !!_this.config.addTypename;
    _this.policies = new Policies({
      cache: _this,
      dataIdFromObject: _this.config.dataIdFromObject,
      possibleTypes: _this.config.possibleTypes,
      typePolicies: _this.config.typePolicies
    });

    _this.init();

    return _this;
  }

  InMemoryCache.prototype.init = function () {
    var rootStore = this.data = new EntityStore.Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = rootStore.stump;
    this.resetResultCache();
  };

  InMemoryCache.prototype.resetResultCache = function (resetResultIdentities) {
    var _this = this;

    var previousReader = this.storeReader;
    this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: shouldCanonizeResults(this.config),
      canon: resetResultIdentities ? void 0 : previousReader && previousReader.canon
    }));
    this.maybeBroadcastWatch = wrap$1(function (c, options) {
      return _this.broadcastWatch(c, options);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function (c) {
        var store = c.optimistic ? _this.optimisticData : _this.data;

        if (supportsResultCaching(store)) {
          var optimistic = c.optimistic,
              rootId = c.rootId,
              variables = c.variables;
          return store.makeCacheKey(c.query, c.callback, canonicalStringify({
            optimistic: optimistic,
            rootId: rootId,
            variables: variables
          }));
        }
      }
    });
    new Set([this.data.group, this.optimisticData.group]).forEach(function (group) {
      return group.resetCaching();
    });
  };

  InMemoryCache.prototype.restore = function (data) {
    this.init();
    if (data) this.data.replace(data);
    return this;
  };

  InMemoryCache.prototype.extract = function (optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }

    return (optimistic ? this.optimisticData : this.data).extract();
  };

  InMemoryCache.prototype.read = function (options) {
    var _a = options.returnPartialData,
        returnPartialData = _a === void 0 ? false : _a;

    try {
      return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), {
        store: options.optimistic ? this.optimisticData : this.data,
        config: this.config,
        returnPartialData: returnPartialData
      })).result || null;
    } catch (e) {
      if (e instanceof MissingFieldError) {
        return null;
      }

      throw e;
    }
  };

  InMemoryCache.prototype.write = function (options) {
    try {
      ++this.txCount;
      return this.storeWriter.writeToStore(this.data, options);
    } finally {
      if (! --this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };

  InMemoryCache.prototype.modify = function (options) {
    if (hasOwn.call(options, "id") && !options.id) {
      return false;
    }

    var store = options.optimistic ? this.optimisticData : this.data;

    try {
      ++this.txCount;
      return store.modify(options.id || "ROOT_QUERY", options.fields);
    } finally {
      if (! --this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };

  InMemoryCache.prototype.diff = function (options) {
    return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), {
      store: options.optimistic ? this.optimisticData : this.data,
      rootId: options.id || "ROOT_QUERY",
      config: this.config
    }));
  };

  InMemoryCache.prototype.watch = function (watch) {
    var _this = this;

    if (!this.watches.size) {
      recallCache(this);
    }

    this.watches.add(watch);

    if (watch.immediate) {
      this.maybeBroadcastWatch(watch);
    }

    return function () {
      if (_this.watches.delete(watch) && !_this.watches.size) {
        forgetCache(_this);
      }

      _this.maybeBroadcastWatch.forget(watch);
    };
  };

  InMemoryCache.prototype.gc = function (options) {
    canonicalStringify.reset();
    var ids = this.optimisticData.gc();

    if (options && !this.txCount) {
      if (options.resetResultCache) {
        this.resetResultCache(options.resetResultIdentities);
      } else if (options.resetResultIdentities) {
        this.storeReader.resetCanon();
      }
    }

    return ids;
  };

  InMemoryCache.prototype.retain = function (rootId, optimistic) {
    return (optimistic ? this.optimisticData : this.data).retain(rootId);
  };

  InMemoryCache.prototype.release = function (rootId, optimistic) {
    return (optimistic ? this.optimisticData : this.data).release(rootId);
  };

  InMemoryCache.prototype.identify = function (object) {
    if (isReference(object)) return object.__ref;

    try {
      return this.policies.identify(object)[0];
    } catch (e) {
      __DEV__ && invariant.warn(e);
    }
  };

  InMemoryCache.prototype.evict = function (options) {
    if (!options.id) {
      if (hasOwn.call(options, "id")) {
        return false;
      }

      options = __assign(__assign({}, options), {
        id: "ROOT_QUERY"
      });
    }

    try {
      ++this.txCount;
      return this.optimisticData.evict(options, this.data);
    } finally {
      if (! --this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };

  InMemoryCache.prototype.reset = function (options) {
    var _this = this;

    this.init();
    canonicalStringify.reset();

    if (options && options.discardWatches) {
      this.watches.forEach(function (watch) {
        return _this.maybeBroadcastWatch.forget(watch);
      });
      this.watches.clear();
      forgetCache(this);
    } else {
      this.broadcastWatches();
    }

    return Promise.resolve();
  };

  InMemoryCache.prototype.removeOptimistic = function (idToRemove) {
    var newOptimisticData = this.optimisticData.removeLayer(idToRemove);

    if (newOptimisticData !== this.optimisticData) {
      this.optimisticData = newOptimisticData;
      this.broadcastWatches();
    }
  };

  InMemoryCache.prototype.batch = function (options) {
    var _this = this;

    var update = options.update,
        _a = options.optimistic,
        optimistic = _a === void 0 ? true : _a,
        removeOptimistic = options.removeOptimistic,
        onWatchUpdated = options.onWatchUpdated;
    var updateResult;

    var perform = function (layer) {
      var _a = _this,
          data = _a.data,
          optimisticData = _a.optimisticData;
      ++_this.txCount;

      if (layer) {
        _this.data = _this.optimisticData = layer;
      }

      try {
        return updateResult = update(_this);
      } finally {
        --_this.txCount;
        _this.data = data;
        _this.optimisticData = optimisticData;
      }
    };

    var alreadyDirty = new Set();

    if (onWatchUpdated && !this.txCount) {
      this.broadcastWatches(__assign(__assign({}, options), {
        onWatchUpdated: function (watch) {
          alreadyDirty.add(watch);
          return false;
        }
      }));
    }

    if (typeof optimistic === 'string') {
      this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
    } else if (optimistic === false) {
      perform(this.data);
    } else {
      perform();
    }

    if (typeof removeOptimistic === "string") {
      this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
    }

    if (onWatchUpdated && alreadyDirty.size) {
      this.broadcastWatches(__assign(__assign({}, options), {
        onWatchUpdated: function (watch, diff) {
          var result = onWatchUpdated.call(this, watch, diff);

          if (result !== false) {
            alreadyDirty.delete(watch);
          }

          return result;
        }
      }));

      if (alreadyDirty.size) {
        alreadyDirty.forEach(function (watch) {
          return _this.maybeBroadcastWatch.dirty(watch);
        });
      }
    } else {
      this.broadcastWatches(options);
    }

    return updateResult;
  };

  InMemoryCache.prototype.performTransaction = function (update, optimisticId) {
    return this.batch({
      update: update,
      optimistic: optimisticId || optimisticId !== null
    });
  };

  InMemoryCache.prototype.transformDocument = function (document) {
    if (this.addTypename) {
      var result = this.typenameDocumentCache.get(document);

      if (!result) {
        result = addTypenameToDocument(document);
        this.typenameDocumentCache.set(document, result);
        this.typenameDocumentCache.set(result, result);
      }

      return result;
    }

    return document;
  };

  InMemoryCache.prototype.broadcastWatches = function (options) {
    var _this = this;

    if (!this.txCount) {
      this.watches.forEach(function (c) {
        return _this.maybeBroadcastWatch(c, options);
      });
    }
  };

  InMemoryCache.prototype.broadcastWatch = function (c, options) {
    var lastDiff = c.lastDiff;
    var diff = this.diff(c);

    if (options) {
      if (c.optimistic && typeof options.optimistic === "string") {
        diff.fromOptimisticTransaction = true;
      }

      if (options.onWatchUpdated && options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
        return;
      }
    }

    if (!lastDiff || !equal(lastDiff.result, diff.result)) {
      c.callback(c.lastDiff = diff, lastDiff);
    }
  };

  return InMemoryCache;
}(ApolloCache);

function isApolloError(err) {
  return err.hasOwnProperty('graphQLErrors');
}

var generateErrorMessage = function (err) {
  var message = '';

  if (isNonEmptyArray(err.graphQLErrors) || isNonEmptyArray(err.clientErrors)) {
    var errors = (err.graphQLErrors || []).concat(err.clientErrors || []);
    errors.forEach(function (error) {
      var errorMessage = error ? error.message : 'Error message not found.';
      message += "".concat(errorMessage, "\n");
    });
  }

  if (err.networkError) {
    message += "".concat(err.networkError.message, "\n");
  }

  message = message.replace(/\n$/, '');
  return message;
};

var ApolloError = function (_super) {
  __extends(ApolloError, _super);

  function ApolloError(_a) {
    var graphQLErrors = _a.graphQLErrors,
        clientErrors = _a.clientErrors,
        networkError = _a.networkError,
        errorMessage = _a.errorMessage,
        extraInfo = _a.extraInfo;

    var _this = _super.call(this, errorMessage) || this;

    _this.graphQLErrors = graphQLErrors || [];
    _this.clientErrors = clientErrors || [];
    _this.networkError = networkError || null;
    _this.message = errorMessage || generateErrorMessage(_this);
    _this.extraInfo = extraInfo;
    _this.__proto__ = ApolloError.prototype;
    return _this;
  }

  return ApolloError;
}(Error);

var NetworkStatus;

(function (NetworkStatus) {
  NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
  NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
  NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
  NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
  NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
  NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
  NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));

function isNetworkRequestInFlight(networkStatus) {
  return networkStatus ? networkStatus < 7 : false;
}

var assign = Object.assign,
    hasOwnProperty$4 = Object.hasOwnProperty;
var warnedAboutUpdateQuery = false;

var ObservableQuery = function (_super) {
  __extends(ObservableQuery, _super);

  function ObservableQuery(_a) {
    var queryManager = _a.queryManager,
        queryInfo = _a.queryInfo,
        options = _a.options;

    var _this = _super.call(this, function (observer) {
      try {
        var subObserver = observer._subscription._observer;

        if (subObserver && !subObserver.error) {
          subObserver.error = defaultSubscriptionObserverErrorCallback;
        }
      } catch (_a) {}

      var first = !_this.observers.size;

      _this.observers.add(observer);

      var last = _this.last;

      if (last && last.error) {
        observer.error && observer.error(last.error);
      } else if (last && last.result) {
        observer.next && observer.next(last.result);
      }

      if (first) {
        _this.reobserve().catch(function () {});
      }

      return function () {
        if (_this.observers.delete(observer) && !_this.observers.size) {
          _this.tearDownQuery();
        }
      };
    }) || this;

    _this.observers = new Set();
    _this.subscriptions = new Set();
    _this.isTornDown = false;
    _this.options = options;
    _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
    var opDef = getOperationDefinition(options.query);
    _this.queryName = opDef && opDef.name && opDef.name.value;
    _this.initialFetchPolicy = options.fetchPolicy || "cache-first";
    _this.queryManager = queryManager;
    _this.queryInfo = queryInfo;
    return _this;
  }

  Object.defineProperty(ObservableQuery.prototype, "variables", {
    get: function () {
      return this.options.variables;
    },
    enumerable: false,
    configurable: true
  });

  ObservableQuery.prototype.result = function () {
    var _this = this;

    return new Promise(function (resolve, reject) {
      var observer = {
        next: function (result) {
          resolve(result);

          _this.observers.delete(observer);

          if (!_this.observers.size) {
            _this.queryManager.removeQuery(_this.queryId);
          }

          setTimeout(function () {
            subscription.unsubscribe();
          }, 0);
        },
        error: reject
      };

      var subscription = _this.subscribe(observer);
    });
  };

  ObservableQuery.prototype.getCurrentResult = function (saveAsLastResult) {
    if (saveAsLastResult === void 0) {
      saveAsLastResult = true;
    }

    var lastResult = this.getLastResult(true);
    var networkStatus = this.queryInfo.networkStatus || lastResult && lastResult.networkStatus || NetworkStatus.ready;

    var result = __assign(__assign({}, lastResult), {
      loading: isNetworkRequestInFlight(networkStatus),
      networkStatus: networkStatus
    });

    var _a = this.options.fetchPolicy,
        fetchPolicy = _a === void 0 ? "cache-first" : _a;

    if (fetchPolicy === 'network-only' || fetchPolicy === 'no-cache' || fetchPolicy === 'standby' || this.queryManager.transform(this.options.query).hasForcedResolvers) ; else {
      var diff = this.queryInfo.getDiff();

      if (diff.complete || this.options.returnPartialData) {
        result.data = diff.result;
      }

      if (equal(result.data, {})) {
        result.data = void 0;
      }

      if (diff.complete) {
        delete result.partial;

        if (diff.complete && result.networkStatus === NetworkStatus.loading && (fetchPolicy === 'cache-first' || fetchPolicy === 'cache-only')) {
          result.networkStatus = NetworkStatus.ready;
          result.loading = false;
        }
      } else {
        result.partial = true;
      }

      if (__DEV__ && !diff.complete && !this.options.partialRefetch && !result.loading && !result.data && !result.error) {
        logMissingFieldErrors(diff.missing);
      }
    }

    if (saveAsLastResult) {
      this.updateLastResult(result);
    }

    return result;
  };

  ObservableQuery.prototype.isDifferentFromLastResult = function (newResult) {
    return !this.last || !equal(this.last.result, newResult);
  };

  ObservableQuery.prototype.getLast = function (key, variablesMustMatch) {
    var last = this.last;

    if (last && last[key] && (!variablesMustMatch || equal(last.variables, this.variables))) {
      return last[key];
    }
  };

  ObservableQuery.prototype.getLastResult = function (variablesMustMatch) {
    return this.getLast("result", variablesMustMatch);
  };

  ObservableQuery.prototype.getLastError = function (variablesMustMatch) {
    return this.getLast("error", variablesMustMatch);
  };

  ObservableQuery.prototype.resetLastResults = function () {
    delete this.last;
    this.isTornDown = false;
  };

  ObservableQuery.prototype.resetQueryStoreErrors = function () {
    this.queryManager.resetErrors(this.queryId);
  };

  ObservableQuery.prototype.refetch = function (variables) {
    var _a;

    var reobserveOptions = {
      pollInterval: 0
    };
    var fetchPolicy = this.options.fetchPolicy;

    if (fetchPolicy === 'cache-and-network') {
      reobserveOptions.fetchPolicy = fetchPolicy;
    } else if (fetchPolicy === 'no-cache') {
      reobserveOptions.fetchPolicy = 'no-cache';
    } else {
      reobserveOptions.fetchPolicy = 'network-only';
    }

    if (__DEV__ && variables && hasOwnProperty$4.call(variables, "variables")) {
      var queryDef = getQueryDefinition(this.options.query);
      var vars = queryDef.variableDefinitions;

      if (!vars || !vars.some(function (v) {
        return v.variable.name.value === "variables";
      })) {
        __DEV__ && invariant.warn("Called refetch(".concat(JSON.stringify(variables), ") for query ").concat(((_a = queryDef.name) === null || _a === void 0 ? void 0 : _a.value) || JSON.stringify(queryDef), ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"));
      }
    }

    if (variables && !equal(this.options.variables, variables)) {
      reobserveOptions.variables = this.options.variables = __assign(__assign({}, this.options.variables), variables);
    }

    this.queryInfo.resetLastWrite();
    return this.reobserve(reobserveOptions, NetworkStatus.refetch);
  };

  ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
    var _this = this;

    var combinedOptions = __assign(__assign({}, fetchMoreOptions.query ? fetchMoreOptions : __assign(__assign(__assign({}, this.options), fetchMoreOptions), {
      variables: __assign(__assign({}, this.options.variables), fetchMoreOptions.variables)
    })), {
      fetchPolicy: "no-cache"
    });

    var qid = this.queryManager.generateQueryId();

    if (combinedOptions.notifyOnNetworkStatusChange) {
      this.queryInfo.networkStatus = NetworkStatus.fetchMore;
      this.observe();
    }

    return this.queryManager.fetchQuery(qid, combinedOptions, NetworkStatus.fetchMore).then(function (fetchMoreResult) {
      var data = fetchMoreResult.data;
      var updateQuery = fetchMoreOptions.updateQuery;

      if (updateQuery) {
        if (__DEV__ && !warnedAboutUpdateQuery) {
          __DEV__ && invariant.warn("The updateQuery callback for fetchMore is deprecated, and will be removed\nin the next major version of Apollo Client.\n\nPlease convert updateQuery functions to field policies with appropriate\nread and merge functions, or use/adapt a helper function (such as\nconcatPagination, offsetLimitPagination, or relayStylePagination) from\n@apollo/client/utilities.\n\nThe field policy system handles pagination more effectively than a\nhand-written updateQuery function, and you only need to define the policy\nonce, rather than every time you call fetchMore.");
          warnedAboutUpdateQuery = true;
        }

        _this.updateQuery(function (previous) {
          return updateQuery(previous, {
            fetchMoreResult: data,
            variables: combinedOptions.variables
          });
        });
      } else {
        _this.queryManager.cache.writeQuery({
          query: combinedOptions.query,
          variables: combinedOptions.variables,
          data: data
        });
      }

      return fetchMoreResult;
    }).finally(function () {
      _this.queryManager.stopQuery(qid);

      _this.reobserve();
    });
  };

  ObservableQuery.prototype.subscribeToMore = function (options) {
    var _this = this;

    var subscription = this.queryManager.startGraphQLSubscription({
      query: options.document,
      variables: options.variables,
      context: options.context
    }).subscribe({
      next: function (subscriptionData) {
        var updateQuery = options.updateQuery;

        if (updateQuery) {
          _this.updateQuery(function (previous, _a) {
            var variables = _a.variables;
            return updateQuery(previous, {
              subscriptionData: subscriptionData,
              variables: variables
            });
          });
        }
      },
      error: function (err) {
        if (options.onError) {
          options.onError(err);
          return;
        }

        __DEV__ && invariant.error('Unhandled GraphQL subscription error', err);
      }
    });
    this.subscriptions.add(subscription);
    return function () {
      if (_this.subscriptions.delete(subscription)) {
        subscription.unsubscribe();
      }
    };
  };

  ObservableQuery.prototype.setOptions = function (newOptions) {
    return this.reobserve(newOptions);
  };

  ObservableQuery.prototype.setVariables = function (variables) {
    if (equal(this.variables, variables)) {
      return this.observers.size ? this.result() : Promise.resolve();
    }

    this.options.variables = variables;

    if (!this.observers.size) {
      return Promise.resolve();
    }

    return this.reobserve({
      fetchPolicy: this.initialFetchPolicy,
      variables: variables
    }, NetworkStatus.setVariables);
  };

  ObservableQuery.prototype.updateQuery = function (mapFn) {
    var queryManager = this.queryManager;
    var result = queryManager.cache.diff({
      query: this.options.query,
      variables: this.variables,
      returnPartialData: true,
      optimistic: false
    }).result;
    var newResult = mapFn(result, {
      variables: this.variables
    });

    if (newResult) {
      queryManager.cache.writeQuery({
        query: this.options.query,
        data: newResult,
        variables: this.variables
      });
      queryManager.broadcastQueries();
    }
  };

  ObservableQuery.prototype.startPolling = function (pollInterval) {
    this.options.pollInterval = pollInterval;
    this.updatePolling();
  };

  ObservableQuery.prototype.stopPolling = function () {
    this.options.pollInterval = 0;
    this.updatePolling();
  };

  ObservableQuery.prototype.fetch = function (options, newNetworkStatus) {
    this.queryManager.setObservableQuery(this);
    return this.queryManager.fetchQueryObservable(this.queryId, options, newNetworkStatus);
  };

  ObservableQuery.prototype.updatePolling = function () {
    var _this = this;

    if (this.queryManager.ssrMode) {
      return;
    }

    var _a = this,
        pollingInfo = _a.pollingInfo,
        pollInterval = _a.options.pollInterval;

    if (!pollInterval) {
      if (pollingInfo) {
        clearTimeout(pollingInfo.timeout);
        delete this.pollingInfo;
      }

      return;
    }

    if (pollingInfo && pollingInfo.interval === pollInterval) {
      return;
    }

    __DEV__ ? invariant(pollInterval, 'Attempted to start a polling query without a polling interval.') : invariant(pollInterval, 10);
    var info = pollingInfo || (this.pollingInfo = {});
    info.interval = pollInterval;

    var maybeFetch = function () {
      if (_this.pollingInfo) {
        if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus)) {
          _this.reobserve({
            fetchPolicy: "network-only"
          }, NetworkStatus.poll).then(poll, poll);
        } else {
          poll();
        }
      }
    };

    var poll = function () {
      var info = _this.pollingInfo;

      if (info) {
        clearTimeout(info.timeout);
        info.timeout = setTimeout(maybeFetch, info.interval);
      }
    };

    poll();
  };

  ObservableQuery.prototype.updateLastResult = function (newResult, variables) {
    if (variables === void 0) {
      variables = this.variables;
    }

    this.last = __assign(__assign({}, this.last), {
      result: this.queryManager.assumeImmutableResults ? newResult : cloneDeep(newResult),
      variables: variables
    });

    if (!isNonEmptyArray(newResult.errors)) {
      delete this.last.error;
    }

    return this.last;
  };

  ObservableQuery.prototype.reobserve = function (newOptions, newNetworkStatus) {
    var _this = this;

    this.isTornDown = false;
    var useDisposableConcast = newNetworkStatus === NetworkStatus.refetch || newNetworkStatus === NetworkStatus.fetchMore || newNetworkStatus === NetworkStatus.poll;
    var oldVariables = this.options.variables;
    var options = useDisposableConcast ? compact(this.options, newOptions) : assign(this.options, compact(newOptions));

    if (!useDisposableConcast) {
      this.updatePolling();

      if (newOptions && newOptions.variables && !newOptions.fetchPolicy && !equal(newOptions.variables, oldVariables)) {
        options.fetchPolicy = this.initialFetchPolicy;

        if (newNetworkStatus === void 0) {
          newNetworkStatus = NetworkStatus.setVariables;
        }
      }
    }

    var variables = options.variables && __assign({}, options.variables);

    var concast = this.fetch(options, newNetworkStatus);
    var observer = {
      next: function (result) {
        _this.reportResult(result, variables);
      },
      error: function (error) {
        _this.reportError(error, variables);
      }
    };

    if (!useDisposableConcast) {
      if (this.concast && this.observer) {
        this.concast.removeObserver(this.observer, true);
      }

      this.concast = concast;
      this.observer = observer;
    }

    concast.addObserver(observer);
    return concast.promise;
  };

  ObservableQuery.prototype.observe = function () {
    this.reportResult(this.getCurrentResult(false), this.variables);
  };

  ObservableQuery.prototype.reportResult = function (result, variables) {
    var lastError = this.getLastError();

    if (lastError || this.isDifferentFromLastResult(result)) {
      if (lastError || !result.partial || this.options.returnPartialData) {
        this.updateLastResult(result, variables);
      }

      iterateObserversSafely(this.observers, 'next', result);
    }
  };

  ObservableQuery.prototype.reportError = function (error, variables) {
    var errorResult = __assign(__assign({}, this.getLastResult()), {
      error: error,
      errors: error.graphQLErrors,
      networkStatus: NetworkStatus.error,
      loading: false
    });

    this.updateLastResult(errorResult, variables);
    iterateObserversSafely(this.observers, 'error', this.last.error = error);
  };

  ObservableQuery.prototype.hasObservers = function () {
    return this.observers.size > 0;
  };

  ObservableQuery.prototype.tearDownQuery = function () {
    if (this.isTornDown) return;

    if (this.concast && this.observer) {
      this.concast.removeObserver(this.observer);
      delete this.concast;
      delete this.observer;
    }

    this.stopPolling();
    this.subscriptions.forEach(function (sub) {
      return sub.unsubscribe();
    });
    this.subscriptions.clear();
    this.queryManager.stopQuery(this.queryId);
    this.observers.clear();
    this.isTornDown = true;
  };

  return ObservableQuery;
}(Observable);
fixObservableSubclass(ObservableQuery);

function defaultSubscriptionObserverErrorCallback(error) {
  __DEV__ && invariant.error('Unhandled error', error.message, error.stack);
}

function logMissingFieldErrors(missing) {
  if (__DEV__ && missing) {
    __DEV__ && invariant.debug("Missing cache result fields: ".concat(JSON.stringify(missing)), missing);
  }
}
function applyNextFetchPolicy(options) {
  var _a = options.fetchPolicy,
      fetchPolicy = _a === void 0 ? "cache-first" : _a,
      nextFetchPolicy = options.nextFetchPolicy;

  if (nextFetchPolicy) {
    options.fetchPolicy = typeof nextFetchPolicy === "function" ? nextFetchPolicy.call(options, fetchPolicy) : nextFetchPolicy;
  }
}

var LocalState = function () {
  function LocalState(_a) {
    var cache = _a.cache,
        client = _a.client,
        resolvers = _a.resolvers,
        fragmentMatcher = _a.fragmentMatcher;
    this.cache = cache;

    if (client) {
      this.client = client;
    }

    if (resolvers) {
      this.addResolvers(resolvers);
    }

    if (fragmentMatcher) {
      this.setFragmentMatcher(fragmentMatcher);
    }
  }

  LocalState.prototype.addResolvers = function (resolvers) {
    var _this = this;

    this.resolvers = this.resolvers || {};

    if (Array.isArray(resolvers)) {
      resolvers.forEach(function (resolverGroup) {
        _this.resolvers = mergeDeep(_this.resolvers, resolverGroup);
      });
    } else {
      this.resolvers = mergeDeep(this.resolvers, resolvers);
    }
  };

  LocalState.prototype.setResolvers = function (resolvers) {
    this.resolvers = {};
    this.addResolvers(resolvers);
  };

  LocalState.prototype.getResolvers = function () {
    return this.resolvers || {};
  };

  LocalState.prototype.runResolvers = function (_a) {
    var document = _a.document,
        remoteResult = _a.remoteResult,
        context = _a.context,
        variables = _a.variables,
        _b = _a.onlyRunForcedResolvers,
        onlyRunForcedResolvers = _b === void 0 ? false : _b;
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_c) {
        if (document) {
          return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function (localResult) {
            return __assign(__assign({}, remoteResult), {
              data: localResult.result
            });
          })];
        }

        return [2, remoteResult];
      });
    });
  };

  LocalState.prototype.setFragmentMatcher = function (fragmentMatcher) {
    this.fragmentMatcher = fragmentMatcher;
  };

  LocalState.prototype.getFragmentMatcher = function () {
    return this.fragmentMatcher;
  };

  LocalState.prototype.clientQuery = function (document) {
    if (hasDirectives(['client'], document)) {
      if (this.resolvers) {
        return document;
      }
    }

    return null;
  };

  LocalState.prototype.serverQuery = function (document) {
    return removeClientSetsFromDocument(document);
  };

  LocalState.prototype.prepareContext = function (context) {
    var cache = this.cache;
    return __assign(__assign({}, context), {
      cache: cache,
      getCacheKey: function (obj) {
        return cache.identify(obj);
      }
    });
  };

  LocalState.prototype.addExportedVariables = function (document, variables, context) {
    if (variables === void 0) {
      variables = {};
    }

    if (context === void 0) {
      context = {};
    }

    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        if (document) {
          return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function (data) {
            return __assign(__assign({}, variables), data.exportedVariables);
          })];
        }

        return [2, __assign({}, variables)];
      });
    });
  };

  LocalState.prototype.shouldForceResolvers = function (document) {
    var forceResolvers = false;
    visit(document, {
      Directive: {
        enter: function (node) {
          if (node.name.value === 'client' && node.arguments) {
            forceResolvers = node.arguments.some(function (arg) {
              return arg.name.value === 'always' && arg.value.kind === 'BooleanValue' && arg.value.value === true;
            });

            if (forceResolvers) {
              return BREAK;
            }
          }
        }
      }
    });
    return forceResolvers;
  };

  LocalState.prototype.buildRootValueFromCache = function (document, variables) {
    return this.cache.diff({
      query: buildQueryFromSelectionSet(document),
      variables: variables,
      returnPartialData: true,
      optimistic: false
    }).result;
  };

  LocalState.prototype.resolveDocument = function (document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
    if (context === void 0) {
      context = {};
    }

    if (variables === void 0) {
      variables = {};
    }

    if (fragmentMatcher === void 0) {
      fragmentMatcher = function () {
        return true;
      };
    }

    if (onlyRunForcedResolvers === void 0) {
      onlyRunForcedResolvers = false;
    }

    return __awaiter(this, void 0, void 0, function () {
      var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a, cache, client, execContext;

      return __generator(this, function (_b) {
        mainDefinition = getMainDefinition(document);
        fragments = getFragmentDefinitions(document);
        fragmentMap = createFragmentMap(fragments);
        definitionOperation = mainDefinition.operation;
        defaultOperationType = definitionOperation ? definitionOperation.charAt(0).toUpperCase() + definitionOperation.slice(1) : 'Query';
        _a = this, cache = _a.cache, client = _a.client;
        execContext = {
          fragmentMap: fragmentMap,
          context: __assign(__assign({}, context), {
            cache: cache,
            client: client
          }),
          variables: variables,
          fragmentMatcher: fragmentMatcher,
          defaultOperationType: defaultOperationType,
          exportedVariables: {},
          onlyRunForcedResolvers: onlyRunForcedResolvers
        };
        return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function (result) {
          return {
            result: result,
            exportedVariables: execContext.exportedVariables
          };
        })];
      });
    });
  };

  LocalState.prototype.resolveSelectionSet = function (selectionSet, rootValue, execContext) {
    return __awaiter(this, void 0, void 0, function () {
      var fragmentMap, context, variables, resultsToMerge, execute;

      var _this = this;

      return __generator(this, function (_a) {
        fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
        resultsToMerge = [rootValue];

        execute = function (selection) {
          return __awaiter(_this, void 0, void 0, function () {
            var fragment, typeCondition;
            return __generator(this, function (_a) {
              if (!shouldInclude(selection, variables)) {
                return [2];
              }

              if (isField(selection)) {
                return [2, this.resolveField(selection, rootValue, execContext).then(function (fieldResult) {
                  var _a;

                  if (typeof fieldResult !== 'undefined') {
                    resultsToMerge.push((_a = {}, _a[resultKeyNameFromField(selection)] = fieldResult, _a));
                  }
                })];
              }

              if (isInlineFragment(selection)) {
                fragment = selection;
              } else {
                fragment = fragmentMap[selection.name.value];
                __DEV__ ? invariant(fragment, "No fragment named ".concat(selection.name.value)) : invariant(fragment, 9);
              }

              if (fragment && fragment.typeCondition) {
                typeCondition = fragment.typeCondition.name.value;

                if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                  return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function (fragmentResult) {
                    resultsToMerge.push(fragmentResult);
                  })];
                }
              }

              return [2];
            });
          });
        };

        return [2, Promise.all(selectionSet.selections.map(execute)).then(function () {
          return mergeDeepArray(resultsToMerge);
        })];
      });
    });
  };

  LocalState.prototype.resolveField = function (field, rootValue, execContext) {
    return __awaiter(this, void 0, void 0, function () {
      var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;

      var _this = this;

      return __generator(this, function (_a) {
        variables = execContext.variables;
        fieldName = field.name.value;
        aliasedFieldName = resultKeyNameFromField(field);
        aliasUsed = fieldName !== aliasedFieldName;
        defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
        resultPromise = Promise.resolve(defaultResult);

        if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
          resolverType = rootValue.__typename || execContext.defaultOperationType;
          resolverMap = this.resolvers && this.resolvers[resolverType];

          if (resolverMap) {
            resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];

            if (resolve) {
              resultPromise = Promise.resolve(cacheSlot.withValue(this.cache, resolve, [rootValue, argumentsObjectFromField(field, variables), execContext.context, {
                field: field,
                fragmentMap: execContext.fragmentMap
              }]));
            }
          }
        }

        return [2, resultPromise.then(function (result) {
          if (result === void 0) {
            result = defaultResult;
          }

          if (field.directives) {
            field.directives.forEach(function (directive) {
              if (directive.name.value === 'export' && directive.arguments) {
                directive.arguments.forEach(function (arg) {
                  if (arg.name.value === 'as' && arg.value.kind === 'StringValue') {
                    execContext.exportedVariables[arg.value.value] = result;
                  }
                });
              }
            });
          }

          if (!field.selectionSet) {
            return result;
          }

          if (result == null) {
            return result;
          }

          if (Array.isArray(result)) {
            return _this.resolveSubSelectedArray(field, result, execContext);
          }

          if (field.selectionSet) {
            return _this.resolveSelectionSet(field.selectionSet, result, execContext);
          }
        })];
      });
    });
  };

  LocalState.prototype.resolveSubSelectedArray = function (field, result, execContext) {
    var _this = this;

    return Promise.all(result.map(function (item) {
      if (item === null) {
        return null;
      }

      if (Array.isArray(item)) {
        return _this.resolveSubSelectedArray(field, item, execContext);
      }

      if (field.selectionSet) {
        return _this.resolveSelectionSet(field.selectionSet, item, execContext);
      }
    }));
  };

  return LocalState;
}();

var destructiveMethodCounts = new (canUseWeakMap ? WeakMap : Map)();

function wrapDestructiveCacheMethod(cache, methodName) {
  var original = cache[methodName];

  if (typeof original === "function") {
    cache[methodName] = function () {
      destructiveMethodCounts.set(cache, (destructiveMethodCounts.get(cache) + 1) % 1e15);
      return original.apply(this, arguments);
    };
  }
}

function cancelNotifyTimeout(info) {
  if (info["notifyTimeout"]) {
    clearTimeout(info["notifyTimeout"]);
    info["notifyTimeout"] = void 0;
  }
}

var QueryInfo = function () {
  function QueryInfo(queryManager, queryId) {
    if (queryId === void 0) {
      queryId = queryManager.generateQueryId();
    }

    this.queryId = queryId;
    this.listeners = new Set();
    this.document = null;
    this.lastRequestId = 1;
    this.subscriptions = new Set();
    this.stopped = false;
    this.dirty = false;
    this.observableQuery = null;
    var cache = this.cache = queryManager.cache;

    if (!destructiveMethodCounts.has(cache)) {
      destructiveMethodCounts.set(cache, 0);
      wrapDestructiveCacheMethod(cache, "evict");
      wrapDestructiveCacheMethod(cache, "modify");
      wrapDestructiveCacheMethod(cache, "reset");
    }
  }

  QueryInfo.prototype.init = function (query) {
    var networkStatus = query.networkStatus || NetworkStatus.loading;

    if (this.variables && this.networkStatus !== NetworkStatus.loading && !equal(this.variables, query.variables)) {
      networkStatus = NetworkStatus.setVariables;
    }

    if (!equal(query.variables, this.variables)) {
      this.lastDiff = void 0;
    }

    Object.assign(this, {
      document: query.document,
      variables: query.variables,
      networkError: null,
      graphQLErrors: this.graphQLErrors || [],
      networkStatus: networkStatus
    });

    if (query.observableQuery) {
      this.setObservableQuery(query.observableQuery);
    }

    if (query.lastRequestId) {
      this.lastRequestId = query.lastRequestId;
    }

    return this;
  };

  QueryInfo.prototype.reset = function () {
    cancelNotifyTimeout(this);
    this.lastDiff = void 0;
    this.dirty = false;
  };

  QueryInfo.prototype.getDiff = function (variables) {
    if (variables === void 0) {
      variables = this.variables;
    }

    var options = this.getDiffOptions(variables);

    if (this.lastDiff && equal(options, this.lastDiff.options)) {
      return this.lastDiff.diff;
    }

    this.updateWatch(this.variables = variables);
    var oq = this.observableQuery;

    if (oq && oq.options.fetchPolicy === "no-cache") {
      return {
        complete: false
      };
    }

    var diff = this.cache.diff(options);
    this.updateLastDiff(diff, options);
    return diff;
  };

  QueryInfo.prototype.updateLastDiff = function (diff, options) {
    this.lastDiff = diff ? {
      diff: diff,
      options: options || this.getDiffOptions()
    } : void 0;
  };

  QueryInfo.prototype.getDiffOptions = function (variables) {
    var _a;

    if (variables === void 0) {
      variables = this.variables;
    }

    return {
      query: this.document,
      variables: variables,
      returnPartialData: true,
      optimistic: true,
      canonizeResults: (_a = this.observableQuery) === null || _a === void 0 ? void 0 : _a.options.canonizeResults
    };
  };

  QueryInfo.prototype.setDiff = function (diff) {
    var _this = this;

    var oldDiff = this.lastDiff && this.lastDiff.diff;
    this.updateLastDiff(diff);

    if (!this.dirty && !equal(oldDiff && oldDiff.result, diff && diff.result)) {
      this.dirty = true;

      if (!this.notifyTimeout) {
        this.notifyTimeout = setTimeout(function () {
          return _this.notify();
        }, 0);
      }
    }
  };

  QueryInfo.prototype.setObservableQuery = function (oq) {
    var _this = this;

    if (oq === this.observableQuery) return;

    if (this.oqListener) {
      this.listeners.delete(this.oqListener);
    }

    this.observableQuery = oq;

    if (oq) {
      oq["queryInfo"] = this;
      this.listeners.add(this.oqListener = function () {
        if (_this.getDiff().fromOptimisticTransaction) {
          oq["observe"]();
        } else {
          oq.reobserve();
        }
      });
    } else {
      delete this.oqListener;
    }
  };

  QueryInfo.prototype.notify = function () {
    var _this = this;

    cancelNotifyTimeout(this);

    if (this.shouldNotify()) {
      this.listeners.forEach(function (listener) {
        return listener(_this);
      });
    }

    this.dirty = false;
  };

  QueryInfo.prototype.shouldNotify = function () {
    if (!this.dirty || !this.listeners.size) {
      return false;
    }

    if (isNetworkRequestInFlight(this.networkStatus) && this.observableQuery) {
      var fetchPolicy = this.observableQuery.options.fetchPolicy;

      if (fetchPolicy !== "cache-only" && fetchPolicy !== "cache-and-network") {
        return false;
      }
    }

    return true;
  };

  QueryInfo.prototype.stop = function () {
    if (!this.stopped) {
      this.stopped = true;
      this.reset();
      this.cancel();
      this.cancel = QueryInfo.prototype.cancel;
      this.subscriptions.forEach(function (sub) {
        return sub.unsubscribe();
      });
      var oq = this.observableQuery;
      if (oq) oq.stopPolling();
    }
  };

  QueryInfo.prototype.cancel = function () {};

  QueryInfo.prototype.updateWatch = function (variables) {
    var _this = this;

    if (variables === void 0) {
      variables = this.variables;
    }

    var oq = this.observableQuery;

    if (oq && oq.options.fetchPolicy === "no-cache") {
      return;
    }

    var watchOptions = __assign(__assign({}, this.getDiffOptions(variables)), {
      watcher: this,
      callback: function (diff) {
        return _this.setDiff(diff);
      }
    });

    if (!this.lastWatch || !equal(watchOptions, this.lastWatch)) {
      this.cancel();
      this.cancel = this.cache.watch(this.lastWatch = watchOptions);
    }
  };

  QueryInfo.prototype.resetLastWrite = function () {
    this.lastWrite = void 0;
  };

  QueryInfo.prototype.shouldWrite = function (result, variables) {
    var lastWrite = this.lastWrite;
    return !(lastWrite && lastWrite.dmCount === destructiveMethodCounts.get(this.cache) && equal(variables, lastWrite.variables) && equal(result.data, lastWrite.result.data));
  };

  QueryInfo.prototype.markResult = function (result, options, cacheWriteBehavior) {
    var _this = this;

    this.graphQLErrors = isNonEmptyArray(result.errors) ? result.errors : [];
    this.reset();

    if (options.fetchPolicy === 'no-cache') {
      this.updateLastDiff({
        result: result.data,
        complete: true
      }, this.getDiffOptions(options.variables));
    } else if (cacheWriteBehavior !== 0) {
      if (shouldWriteResult(result, options.errorPolicy)) {
        this.cache.performTransaction(function (cache) {
          if (_this.shouldWrite(result, options.variables)) {
            cache.writeQuery({
              query: _this.document,
              data: result.data,
              variables: options.variables,
              overwrite: cacheWriteBehavior === 1
            });
            _this.lastWrite = {
              result: result,
              variables: options.variables,
              dmCount: destructiveMethodCounts.get(_this.cache)
            };
          } else {
            if (_this.lastDiff && _this.lastDiff.diff.complete) {
              result.data = _this.lastDiff.diff.result;
              return;
            }
          }

          var diffOptions = _this.getDiffOptions(options.variables);

          var diff = cache.diff(diffOptions);

          if (!_this.stopped) {
            _this.updateWatch(options.variables);
          }

          _this.updateLastDiff(diff, diffOptions);

          if (diff.complete) {
            result.data = diff.result;
          }
        });
      } else {
        this.lastWrite = void 0;
      }
    }
  };

  QueryInfo.prototype.markReady = function () {
    this.networkError = null;
    return this.networkStatus = NetworkStatus.ready;
  };

  QueryInfo.prototype.markError = function (error) {
    this.networkStatus = NetworkStatus.error;
    this.lastWrite = void 0;
    this.reset();

    if (error.graphQLErrors) {
      this.graphQLErrors = error.graphQLErrors;
    }

    if (error.networkError) {
      this.networkError = error.networkError;
    }

    return error;
  };

  return QueryInfo;
}();
function shouldWriteResult(result, errorPolicy) {
  if (errorPolicy === void 0) {
    errorPolicy = "none";
  }

  var ignoreErrors = errorPolicy === "ignore" || errorPolicy === "all";
  var writeWithErrors = !graphQLResultHasError(result);

  if (!writeWithErrors && ignoreErrors && result.data) {
    writeWithErrors = true;
  }

  return writeWithErrors;
}

var hasOwnProperty$5 = Object.prototype.hasOwnProperty;

var QueryManager = function () {
  function QueryManager(_a) {
    var cache = _a.cache,
        link = _a.link,
        _b = _a.queryDeduplication,
        queryDeduplication = _b === void 0 ? false : _b,
        onBroadcast = _a.onBroadcast,
        _c = _a.ssrMode,
        ssrMode = _c === void 0 ? false : _c,
        _d = _a.clientAwareness,
        clientAwareness = _d === void 0 ? {} : _d,
        localState = _a.localState,
        assumeImmutableResults = _a.assumeImmutableResults;
    this.clientAwareness = {};
    this.queries = new Map();
    this.fetchCancelFns = new Map();
    this.transformCache = new (canUseWeakMap ? WeakMap : Map)();
    this.queryIdCounter = 1;
    this.requestIdCounter = 1;
    this.mutationIdCounter = 1;
    this.inFlightLinkObservables = new Map();
    this.cache = cache;
    this.link = link;
    this.queryDeduplication = queryDeduplication;
    this.clientAwareness = clientAwareness;
    this.localState = localState || new LocalState({
      cache: cache
    });
    this.ssrMode = ssrMode;
    this.assumeImmutableResults = !!assumeImmutableResults;

    if (this.onBroadcast = onBroadcast) {
      this.mutationStore = Object.create(null);
    }
  }

  QueryManager.prototype.stop = function () {
    var _this = this;

    this.queries.forEach(function (_info, queryId) {
      _this.stopQueryNoBroadcast(queryId);
    });
    this.cancelPendingFetches(__DEV__ ? new InvariantError('QueryManager stopped while query was in flight') : new InvariantError(11));
  };

  QueryManager.prototype.cancelPendingFetches = function (error) {
    this.fetchCancelFns.forEach(function (cancel) {
      return cancel(error);
    });
    this.fetchCancelFns.clear();
  };

  QueryManager.prototype.mutate = function (_a) {
    var mutation = _a.mutation,
        variables = _a.variables,
        optimisticResponse = _a.optimisticResponse,
        updateQueries = _a.updateQueries,
        _b = _a.refetchQueries,
        refetchQueries = _b === void 0 ? [] : _b,
        _c = _a.awaitRefetchQueries,
        awaitRefetchQueries = _c === void 0 ? false : _c,
        updateWithProxyFn = _a.update,
        onQueryUpdated = _a.onQueryUpdated,
        _d = _a.errorPolicy,
        errorPolicy = _d === void 0 ? 'none' : _d,
        _e = _a.fetchPolicy,
        fetchPolicy = _e === void 0 ? 'network-only' : _e,
        keepRootFields = _a.keepRootFields,
        context = _a.context;
    return __awaiter(this, void 0, void 0, function () {
      var mutationId, mutationStoreValue, self;
      return __generator(this, function (_f) {
        switch (_f.label) {
          case 0:
            __DEV__ ? invariant(mutation, 'mutation option is required. You must specify your GraphQL document in the mutation option.') : invariant(mutation, 12);
            __DEV__ ? invariant(fetchPolicy === 'network-only' || fetchPolicy === 'no-cache', "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : invariant(fetchPolicy === 'network-only' || fetchPolicy === 'no-cache', 13);
            mutationId = this.generateMutationId();
            mutation = this.transform(mutation).document;
            variables = this.getVariables(mutation, variables);
            if (!this.transform(mutation).hasClientExports) return [3, 2];
            return [4, this.localState.addExportedVariables(mutation, variables, context)];

          case 1:
            variables = _f.sent();
            _f.label = 2;

          case 2:
            mutationStoreValue = this.mutationStore && (this.mutationStore[mutationId] = {
              mutation: mutation,
              variables: variables,
              loading: true,
              error: null
            });

            if (optimisticResponse) {
              this.markMutationOptimistic(optimisticResponse, {
                mutationId: mutationId,
                document: mutation,
                variables: variables,
                fetchPolicy: fetchPolicy,
                errorPolicy: errorPolicy,
                context: context,
                updateQueries: updateQueries,
                update: updateWithProxyFn,
                keepRootFields: keepRootFields
              });
            }

            this.broadcastQueries();
            self = this;
            return [2, new Promise(function (resolve, reject) {
              return asyncMap(self.getObservableFromLink(mutation, __assign(__assign({}, context), {
                optimisticResponse: optimisticResponse
              }), variables, false), function (result) {
                if (graphQLResultHasError(result) && errorPolicy === 'none') {
                  throw new ApolloError({
                    graphQLErrors: result.errors
                  });
                }

                if (mutationStoreValue) {
                  mutationStoreValue.loading = false;
                  mutationStoreValue.error = null;
                }

                var storeResult = __assign({}, result);

                if (typeof refetchQueries === "function") {
                  refetchQueries = refetchQueries(storeResult);
                }

                if (errorPolicy === 'ignore' && graphQLResultHasError(storeResult)) {
                  delete storeResult.errors;
                }

                return self.markMutationResult({
                  mutationId: mutationId,
                  result: storeResult,
                  document: mutation,
                  variables: variables,
                  fetchPolicy: fetchPolicy,
                  errorPolicy: errorPolicy,
                  context: context,
                  update: updateWithProxyFn,
                  updateQueries: updateQueries,
                  awaitRefetchQueries: awaitRefetchQueries,
                  refetchQueries: refetchQueries,
                  removeOptimistic: optimisticResponse ? mutationId : void 0,
                  onQueryUpdated: onQueryUpdated,
                  keepRootFields: keepRootFields
                });
              }).subscribe({
                next: function (storeResult) {
                  self.broadcastQueries();
                  resolve(storeResult);
                },
                error: function (err) {
                  if (mutationStoreValue) {
                    mutationStoreValue.loading = false;
                    mutationStoreValue.error = err;
                  }

                  if (optimisticResponse) {
                    self.cache.removeOptimistic(mutationId);
                  }

                  self.broadcastQueries();
                  reject(err instanceof ApolloError ? err : new ApolloError({
                    networkError: err
                  }));
                }
              });
            })];
        }
      });
    });
  };

  QueryManager.prototype.markMutationResult = function (mutation, cache) {
    var _this = this;

    if (cache === void 0) {
      cache = this.cache;
    }

    var result = mutation.result;
    var cacheWrites = [];
    var skipCache = mutation.fetchPolicy === "no-cache";

    if (!skipCache && shouldWriteResult(result, mutation.errorPolicy)) {
      cacheWrites.push({
        result: result.data,
        dataId: 'ROOT_MUTATION',
        query: mutation.document,
        variables: mutation.variables
      });
      var updateQueries_1 = mutation.updateQueries;

      if (updateQueries_1) {
        this.queries.forEach(function (_a, queryId) {
          var observableQuery = _a.observableQuery;
          var queryName = observableQuery && observableQuery.queryName;

          if (!queryName || !hasOwnProperty$5.call(updateQueries_1, queryName)) {
            return;
          }

          var updater = updateQueries_1[queryName];

          var _b = _this.queries.get(queryId),
              document = _b.document,
              variables = _b.variables;

          var _c = cache.diff({
            query: document,
            variables: variables,
            returnPartialData: true,
            optimistic: false
          }),
              currentQueryResult = _c.result,
              complete = _c.complete;

          if (complete && currentQueryResult) {
            var nextQueryResult = updater(currentQueryResult, {
              mutationResult: result,
              queryName: document && getOperationName(document) || void 0,
              queryVariables: variables
            });

            if (nextQueryResult) {
              cacheWrites.push({
                result: nextQueryResult,
                dataId: 'ROOT_QUERY',
                query: document,
                variables: variables
              });
            }
          }
        });
      }
    }

    if (cacheWrites.length > 0 || mutation.refetchQueries || mutation.update || mutation.onQueryUpdated || mutation.removeOptimistic) {
      var results_1 = [];
      this.refetchQueries({
        updateCache: function (cache) {
          if (!skipCache) {
            cacheWrites.forEach(function (write) {
              return cache.write(write);
            });
          }

          var update = mutation.update;

          if (update) {
            if (!skipCache) {
              var diff = cache.diff({
                id: "ROOT_MUTATION",
                query: _this.transform(mutation.document).asQuery,
                variables: mutation.variables,
                optimistic: false,
                returnPartialData: true
              });

              if (diff.complete) {
                result = __assign(__assign({}, result), {
                  data: diff.result
                });
              }
            }

            update(cache, result, {
              context: mutation.context,
              variables: mutation.variables
            });
          }

          if (!skipCache && !mutation.keepRootFields) {
            cache.modify({
              id: 'ROOT_MUTATION',
              fields: function (value, _a) {
                var fieldName = _a.fieldName,
                    DELETE = _a.DELETE;
                return fieldName === "__typename" ? value : DELETE;
              }
            });
          }
        },
        include: mutation.refetchQueries,
        optimistic: false,
        removeOptimistic: mutation.removeOptimistic,
        onQueryUpdated: mutation.onQueryUpdated || null
      }).forEach(function (result) {
        return results_1.push(result);
      });

      if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
        return Promise.all(results_1).then(function () {
          return result;
        });
      }
    }

    return Promise.resolve(result);
  };

  QueryManager.prototype.markMutationOptimistic = function (optimisticResponse, mutation) {
    var _this = this;

    var data = typeof optimisticResponse === "function" ? optimisticResponse(mutation.variables) : optimisticResponse;
    return this.cache.recordOptimisticTransaction(function (cache) {
      try {
        _this.markMutationResult(__assign(__assign({}, mutation), {
          result: {
            data: data
          }
        }), cache);
      } catch (error) {
        __DEV__ && invariant.error(error);
      }
    }, mutation.mutationId);
  };

  QueryManager.prototype.fetchQuery = function (queryId, options, networkStatus) {
    return this.fetchQueryObservable(queryId, options, networkStatus).promise;
  };

  QueryManager.prototype.getQueryStore = function () {
    var store = Object.create(null);
    this.queries.forEach(function (info, queryId) {
      store[queryId] = {
        variables: info.variables,
        networkStatus: info.networkStatus,
        networkError: info.networkError,
        graphQLErrors: info.graphQLErrors
      };
    });
    return store;
  };

  QueryManager.prototype.resetErrors = function (queryId) {
    var queryInfo = this.queries.get(queryId);

    if (queryInfo) {
      queryInfo.networkError = undefined;
      queryInfo.graphQLErrors = [];
    }
  };

  QueryManager.prototype.transform = function (document) {
    var transformCache = this.transformCache;

    if (!transformCache.has(document)) {
      var transformed = this.cache.transformDocument(document);
      var forLink = removeConnectionDirectiveFromDocument(this.cache.transformForLink(transformed));
      var clientQuery = this.localState.clientQuery(transformed);
      var serverQuery = forLink && this.localState.serverQuery(forLink);
      var cacheEntry_1 = {
        document: transformed,
        hasClientExports: hasClientExports(transformed),
        hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
        clientQuery: clientQuery,
        serverQuery: serverQuery,
        defaultVars: getDefaultValues(getOperationDefinition(transformed)),
        asQuery: __assign(__assign({}, transformed), {
          definitions: transformed.definitions.map(function (def) {
            if (def.kind === "OperationDefinition" && def.operation !== "query") {
              return __assign(__assign({}, def), {
                operation: "query"
              });
            }

            return def;
          })
        })
      };

      var add = function (doc) {
        if (doc && !transformCache.has(doc)) {
          transformCache.set(doc, cacheEntry_1);
        }
      };

      add(document);
      add(transformed);
      add(clientQuery);
      add(serverQuery);
    }

    return transformCache.get(document);
  };

  QueryManager.prototype.getVariables = function (document, variables) {
    return __assign(__assign({}, this.transform(document).defaultVars), variables);
  };

  QueryManager.prototype.watchQuery = function (options) {
    options = __assign(__assign({}, options), {
      variables: this.getVariables(options.query, options.variables)
    });

    if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
      options.notifyOnNetworkStatusChange = false;
    }

    var queryInfo = new QueryInfo(this);
    var observable = new ObservableQuery({
      queryManager: this,
      queryInfo: queryInfo,
      options: options
    });
    this.queries.set(observable.queryId, queryInfo);
    queryInfo.init({
      document: options.query,
      observableQuery: observable,
      variables: options.variables
    });
    return observable;
  };

  QueryManager.prototype.query = function (options, queryId) {
    var _this = this;

    if (queryId === void 0) {
      queryId = this.generateQueryId();
    }

    __DEV__ ? invariant(options.query, 'query option is required. You must specify your GraphQL document ' + 'in the query option.') : invariant(options.query, 14);
    __DEV__ ? invariant(options.query.kind === 'Document', 'You must wrap the query string in a "gql" tag.') : invariant(options.query.kind === 'Document', 15);
    __DEV__ ? invariant(!options.returnPartialData, 'returnPartialData option only supported on watchQuery.') : invariant(!options.returnPartialData, 16);
    __DEV__ ? invariant(!options.pollInterval, 'pollInterval option only supported on watchQuery.') : invariant(!options.pollInterval, 17);
    return this.fetchQuery(queryId, options).finally(function () {
      return _this.stopQuery(queryId);
    });
  };

  QueryManager.prototype.generateQueryId = function () {
    return String(this.queryIdCounter++);
  };

  QueryManager.prototype.generateRequestId = function () {
    return this.requestIdCounter++;
  };

  QueryManager.prototype.generateMutationId = function () {
    return String(this.mutationIdCounter++);
  };

  QueryManager.prototype.stopQueryInStore = function (queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.broadcastQueries();
  };

  QueryManager.prototype.stopQueryInStoreNoBroadcast = function (queryId) {
    var queryInfo = this.queries.get(queryId);
    if (queryInfo) queryInfo.stop();
  };

  QueryManager.prototype.clearStore = function (options) {
    if (options === void 0) {
      options = {
        discardWatches: true
      };
    }

    this.cancelPendingFetches(__DEV__ ? new InvariantError('Store reset while query was in flight (not completed in link chain)') : new InvariantError(18));
    this.queries.forEach(function (queryInfo) {
      if (queryInfo.observableQuery) {
        queryInfo.networkStatus = NetworkStatus.loading;
      } else {
        queryInfo.stop();
      }
    });

    if (this.mutationStore) {
      this.mutationStore = Object.create(null);
    }

    return this.cache.reset(options);
  };

  QueryManager.prototype.getObservableQueries = function (include) {
    var _this = this;

    if (include === void 0) {
      include = "active";
    }

    var queries = new Map();
    var queryNamesAndDocs = new Map();
    var legacyQueryOptions = new Set();

    if (Array.isArray(include)) {
      include.forEach(function (desc) {
        if (typeof desc === "string") {
          queryNamesAndDocs.set(desc, false);
        } else if (isDocumentNode(desc)) {
          queryNamesAndDocs.set(_this.transform(desc).document, false);
        } else if (isNonNullObject(desc) && desc.query) {
          legacyQueryOptions.add(desc);
        }
      });
    }

    this.queries.forEach(function (_a, queryId) {
      var oq = _a.observableQuery,
          document = _a.document;

      if (oq) {
        if (include === "all") {
          queries.set(queryId, oq);
          return;
        }

        var queryName = oq.queryName,
            fetchPolicy = oq.options.fetchPolicy;

        if (fetchPolicy === "standby" || include === "active" && !oq.hasObservers()) {
          return;
        }

        if (include === "active" || queryName && queryNamesAndDocs.has(queryName) || document && queryNamesAndDocs.has(document)) {
          queries.set(queryId, oq);
          if (queryName) queryNamesAndDocs.set(queryName, true);
          if (document) queryNamesAndDocs.set(document, true);
        }
      }
    });

    if (legacyQueryOptions.size) {
      legacyQueryOptions.forEach(function (options) {
        var queryId = makeUniqueId("legacyOneTimeQuery");

        var queryInfo = _this.getQuery(queryId).init({
          document: options.query,
          variables: options.variables
        });

        var oq = new ObservableQuery({
          queryManager: _this,
          queryInfo: queryInfo,
          options: __assign(__assign({}, options), {
            fetchPolicy: "network-only"
          })
        });
        invariant(oq.queryId === queryId);
        queryInfo.setObservableQuery(oq);
        queries.set(queryId, oq);
      });
    }

    if (__DEV__ && queryNamesAndDocs.size) {
      queryNamesAndDocs.forEach(function (included, nameOrDoc) {
        if (!included) {
          __DEV__ && invariant.warn("Unknown query ".concat(typeof nameOrDoc === "string" ? "named " : "").concat(JSON.stringify(nameOrDoc, null, 2), " requested in refetchQueries options.include array"));
        }
      });
    }

    return queries;
  };

  QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
    var _this = this;

    if (includeStandby === void 0) {
      includeStandby = false;
    }

    var observableQueryPromises = [];
    this.getObservableQueries(includeStandby ? "all" : "active").forEach(function (observableQuery, queryId) {
      var fetchPolicy = observableQuery.options.fetchPolicy;
      observableQuery.resetLastResults();

      if (includeStandby || fetchPolicy !== "standby" && fetchPolicy !== "cache-only") {
        observableQueryPromises.push(observableQuery.refetch());
      }

      _this.getQuery(queryId).setDiff(null);
    });
    this.broadcastQueries();
    return Promise.all(observableQueryPromises);
  };

  QueryManager.prototype.setObservableQuery = function (observableQuery) {
    this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
  };

  QueryManager.prototype.startGraphQLSubscription = function (_a) {
    var _this = this;

    var query = _a.query,
        fetchPolicy = _a.fetchPolicy,
        errorPolicy = _a.errorPolicy,
        variables = _a.variables,
        _b = _a.context,
        context = _b === void 0 ? {} : _b;
    query = this.transform(query).document;
    variables = this.getVariables(query, variables);

    var makeObservable = function (variables) {
      return _this.getObservableFromLink(query, context, variables).map(function (result) {
        if (fetchPolicy !== 'no-cache') {
          if (shouldWriteResult(result, errorPolicy)) {
            _this.cache.write({
              query: query,
              result: result.data,
              dataId: 'ROOT_SUBSCRIPTION',
              variables: variables
            });
          }

          _this.broadcastQueries();
        }

        if (graphQLResultHasError(result)) {
          throw new ApolloError({
            graphQLErrors: result.errors
          });
        }

        return result;
      });
    };

    if (this.transform(query).hasClientExports) {
      var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
      return new Observable(function (observer) {
        var sub = null;
        observablePromise_1.then(function (observable) {
          return sub = observable.subscribe(observer);
        }, observer.error);
        return function () {
          return sub && sub.unsubscribe();
        };
      });
    }

    return makeObservable(variables);
  };

  QueryManager.prototype.stopQuery = function (queryId) {
    this.stopQueryNoBroadcast(queryId);
    this.broadcastQueries();
  };

  QueryManager.prototype.stopQueryNoBroadcast = function (queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.removeQuery(queryId);
  };

  QueryManager.prototype.removeQuery = function (queryId) {
    this.fetchCancelFns.delete(queryId);
    this.getQuery(queryId).stop();
    this.queries.delete(queryId);
  };

  QueryManager.prototype.broadcastQueries = function () {
    if (this.onBroadcast) this.onBroadcast();
    this.queries.forEach(function (info) {
      return info.notify();
    });
  };

  QueryManager.prototype.getLocalState = function () {
    return this.localState;
  };

  QueryManager.prototype.getObservableFromLink = function (query, context, variables, deduplication) {
    var _this = this;

    var _a;

    if (deduplication === void 0) {
      deduplication = (_a = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a !== void 0 ? _a : this.queryDeduplication;
    }

    var observable;
    var serverQuery = this.transform(query).serverQuery;

    if (serverQuery) {
      var _b = this,
          inFlightLinkObservables_1 = _b.inFlightLinkObservables,
          link = _b.link;

      var operation = {
        query: serverQuery,
        variables: variables,
        operationName: getOperationName(serverQuery) || void 0,
        context: this.prepareContext(__assign(__assign({}, context), {
          forceFetch: !deduplication
        }))
      };
      context = operation.context;

      if (deduplication) {
        var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
        inFlightLinkObservables_1.set(serverQuery, byVariables_1);
        var varJson_1 = canonicalStringify(variables);
        observable = byVariables_1.get(varJson_1);

        if (!observable) {
          var concast = new Concast([execute(link, operation)]);
          byVariables_1.set(varJson_1, observable = concast);
          concast.cleanup(function () {
            if (byVariables_1.delete(varJson_1) && byVariables_1.size < 1) {
              inFlightLinkObservables_1.delete(serverQuery);
            }
          });
        }
      } else {
        observable = new Concast([execute(link, operation)]);
      }
    } else {
      observable = new Concast([Observable.of({
        data: {}
      })]);
      context = this.prepareContext(context);
    }

    var clientQuery = this.transform(query).clientQuery;

    if (clientQuery) {
      observable = asyncMap(observable, function (result) {
        return _this.localState.runResolvers({
          document: clientQuery,
          remoteResult: result,
          context: context,
          variables: variables
        });
      });
    }

    return observable;
  };

  QueryManager.prototype.getResultsFromLink = function (queryInfo, cacheWriteBehavior, options) {
    var requestId = queryInfo.lastRequestId = this.generateRequestId();
    return asyncMap(this.getObservableFromLink(queryInfo.document, options.context, options.variables), function (result) {
      var hasErrors = isNonEmptyArray(result.errors);

      if (requestId >= queryInfo.lastRequestId) {
        if (hasErrors && options.errorPolicy === "none") {
          throw queryInfo.markError(new ApolloError({
            graphQLErrors: result.errors
          }));
        }

        queryInfo.markResult(result, options, cacheWriteBehavior);
        queryInfo.markReady();
      }

      var aqr = {
        data: result.data,
        loading: false,
        networkStatus: queryInfo.networkStatus || NetworkStatus.ready
      };

      if (hasErrors && options.errorPolicy !== "ignore") {
        aqr.errors = result.errors;
      }

      return aqr;
    }, function (networkError) {
      var error = isApolloError(networkError) ? networkError : new ApolloError({
        networkError: networkError
      });

      if (requestId >= queryInfo.lastRequestId) {
        queryInfo.markError(error);
      }

      throw error;
    });
  };

  QueryManager.prototype.fetchQueryObservable = function (queryId, options, networkStatus) {
    var _this = this;

    if (networkStatus === void 0) {
      networkStatus = NetworkStatus.loading;
    }

    var query = this.transform(options.query).document;
    var variables = this.getVariables(query, options.variables);
    var queryInfo = this.getQuery(queryId);
    var _a = options.fetchPolicy,
        fetchPolicy = _a === void 0 ? "cache-first" : _a,
        _b = options.errorPolicy,
        errorPolicy = _b === void 0 ? "none" : _b,
        _c = options.returnPartialData,
        returnPartialData = _c === void 0 ? false : _c,
        _d = options.notifyOnNetworkStatusChange,
        notifyOnNetworkStatusChange = _d === void 0 ? false : _d,
        _e = options.context,
        context = _e === void 0 ? {} : _e;
    var normalized = Object.assign({}, options, {
      query: query,
      variables: variables,
      fetchPolicy: fetchPolicy,
      errorPolicy: errorPolicy,
      returnPartialData: returnPartialData,
      notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
      context: context
    });

    var fromVariables = function (variables) {
      normalized.variables = variables;
      return _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
    };

    this.fetchCancelFns.set(queryId, function (reason) {
      setTimeout(function () {
        return concast.cancel(reason);
      });
    });
    var concast = new Concast(this.transform(normalized.query).hasClientExports ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables) : fromVariables(normalized.variables));
    concast.cleanup(function () {
      _this.fetchCancelFns.delete(queryId);

      applyNextFetchPolicy(options);
    });
    return concast;
  };

  QueryManager.prototype.refetchQueries = function (_a) {
    var _this = this;

    var updateCache = _a.updateCache,
        include = _a.include,
        _b = _a.optimistic,
        optimistic = _b === void 0 ? false : _b,
        _c = _a.removeOptimistic,
        removeOptimistic = _c === void 0 ? optimistic ? makeUniqueId("refetchQueries") : void 0 : _c,
        onQueryUpdated = _a.onQueryUpdated;
    var includedQueriesById = new Map();

    if (include) {
      this.getObservableQueries(include).forEach(function (oq, queryId) {
        includedQueriesById.set(queryId, {
          oq: oq,
          lastDiff: _this.getQuery(queryId).getDiff()
        });
      });
    }

    var results = new Map();

    if (updateCache) {
      this.cache.batch({
        update: updateCache,
        optimistic: optimistic && removeOptimistic || false,
        removeOptimistic: removeOptimistic,
        onWatchUpdated: function (watch, diff, lastDiff) {
          var oq = watch.watcher instanceof QueryInfo && watch.watcher.observableQuery;

          if (oq) {
            if (onQueryUpdated) {
              includedQueriesById.delete(oq.queryId);
              var result = onQueryUpdated(oq, diff, lastDiff);

              if (result === true) {
                result = oq.refetch();
              }

              if (result !== false) {
                results.set(oq, result);
              }

              return result;
            }

            if (onQueryUpdated !== null) {
              includedQueriesById.set(oq.queryId, {
                oq: oq,
                lastDiff: lastDiff,
                diff: diff
              });
            }
          }
        }
      });
    }

    if (includedQueriesById.size) {
      includedQueriesById.forEach(function (_a, queryId) {
        var oq = _a.oq,
            lastDiff = _a.lastDiff,
            diff = _a.diff;
        var result;

        if (onQueryUpdated) {
          if (!diff) {
            var info = oq["queryInfo"];
            info.reset();
            diff = info.getDiff();
          }

          result = onQueryUpdated(oq, diff, lastDiff);
        }

        if (!onQueryUpdated || result === true) {
          result = oq.refetch();
        }

        if (result !== false) {
          results.set(oq, result);
        }

        if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
          _this.stopQueryNoBroadcast(queryId);
        }
      });
    }

    if (removeOptimistic) {
      this.cache.removeOptimistic(removeOptimistic);
    }

    return results;
  };

  QueryManager.prototype.fetchQueryByPolicy = function (queryInfo, _a, networkStatus) {
    var _this = this;

    var query = _a.query,
        variables = _a.variables,
        fetchPolicy = _a.fetchPolicy,
        refetchWritePolicy = _a.refetchWritePolicy,
        errorPolicy = _a.errorPolicy,
        returnPartialData = _a.returnPartialData,
        context = _a.context,
        notifyOnNetworkStatusChange = _a.notifyOnNetworkStatusChange;
    var oldNetworkStatus = queryInfo.networkStatus;
    queryInfo.init({
      document: query,
      variables: variables,
      networkStatus: networkStatus
    });

    var readCache = function () {
      return queryInfo.getDiff(variables);
    };

    var resultsFromCache = function (diff, networkStatus) {
      if (networkStatus === void 0) {
        networkStatus = queryInfo.networkStatus || NetworkStatus.loading;
      }

      var data = diff.result;

      if (__DEV__ && !returnPartialData && !equal(data, {})) {
        logMissingFieldErrors(diff.missing);
      }

      var fromData = function (data) {
        return Observable.of(__assign({
          data: data,
          loading: isNetworkRequestInFlight(networkStatus),
          networkStatus: networkStatus
        }, diff.complete ? null : {
          partial: true
        }));
      };

      if (data && _this.transform(query).hasForcedResolvers) {
        return _this.localState.runResolvers({
          document: query,
          remoteResult: {
            data: data
          },
          context: context,
          variables: variables,
          onlyRunForcedResolvers: true
        }).then(function (resolved) {
          return fromData(resolved.data || void 0);
        });
      }

      return fromData(data);
    };

    var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 : networkStatus === NetworkStatus.refetch && refetchWritePolicy !== "merge" ? 1 : 2;

    var resultsFromLink = function () {
      return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
        variables: variables,
        context: context,
        fetchPolicy: fetchPolicy,
        errorPolicy: errorPolicy
      });
    };

    var shouldNotify = notifyOnNetworkStatusChange && typeof oldNetworkStatus === "number" && oldNetworkStatus !== networkStatus && isNetworkRequestInFlight(networkStatus);

    switch (fetchPolicy) {
      default:
      case "cache-first":
        {
          var diff = readCache();

          if (diff.complete) {
            return [resultsFromCache(diff, queryInfo.markReady())];
          }

          if (returnPartialData || shouldNotify) {
            return [resultsFromCache(diff), resultsFromLink()];
          }

          return [resultsFromLink()];
        }

      case "cache-and-network":
        {
          var diff = readCache();

          if (diff.complete || returnPartialData || shouldNotify) {
            return [resultsFromCache(diff), resultsFromLink()];
          }

          return [resultsFromLink()];
        }

      case "cache-only":
        return [resultsFromCache(readCache(), queryInfo.markReady())];

      case "network-only":
        if (shouldNotify) {
          return [resultsFromCache(readCache()), resultsFromLink()];
        }

        return [resultsFromLink()];

      case "no-cache":
        if (shouldNotify) {
          return [resultsFromCache(queryInfo.getDiff()), resultsFromLink()];
        }

        return [resultsFromLink()];

      case "standby":
        return [];
    }
  };

  QueryManager.prototype.getQuery = function (queryId) {
    if (queryId && !this.queries.has(queryId)) {
      this.queries.set(queryId, new QueryInfo(this, queryId));
    }

    return this.queries.get(queryId);
  };

  QueryManager.prototype.prepareContext = function (context) {
    if (context === void 0) {
      context = {};
    }

    var newContext = this.localState.prepareContext(context);
    return __assign(__assign({}, newContext), {
      clientAwareness: this.clientAwareness
    });
  };

  return QueryManager;
}();

var hasSuggestedDevtools = false;
function mergeOptions(defaults, options) {
  return compact(defaults, options, options.variables && {
    variables: __assign(__assign({}, defaults.variables), options.variables)
  });
}

var ApolloClient = function () {
  function ApolloClient(options) {
    var _this = this;

    this.defaultOptions = {};
    this.resetStoreCallbacks = [];
    this.clearStoreCallbacks = [];
    var uri = options.uri,
        credentials = options.credentials,
        headers = options.headers,
        cache = options.cache,
        _a = options.ssrMode,
        ssrMode = _a === void 0 ? false : _a,
        _b = options.ssrForceFetchDelay,
        ssrForceFetchDelay = _b === void 0 ? 0 : _b,
        _c = options.connectToDevTools,
        connectToDevTools = _c === void 0 ? typeof window === 'object' && !window.__APOLLO_CLIENT__ && __DEV__ : _c,
        _d = options.queryDeduplication,
        queryDeduplication = _d === void 0 ? true : _d,
        defaultOptions = options.defaultOptions,
        _e = options.assumeImmutableResults,
        assumeImmutableResults = _e === void 0 ? false : _e,
        resolvers = options.resolvers,
        typeDefs = options.typeDefs,
        fragmentMatcher = options.fragmentMatcher,
        clientAwarenessName = options.name,
        clientAwarenessVersion = options.version;
    var link = options.link;

    if (!link) {
      link = uri ? new HttpLink({
        uri: uri,
        credentials: credentials,
        headers: headers
      }) : ApolloLink.empty();
    }

    if (!cache) {
      throw __DEV__ ? new InvariantError("To initialize Apollo Client, you must specify a 'cache' property " + "in the options object. \n" + "For more information, please visit: https://go.apollo.dev/c/docs") : new InvariantError(7);
    }

    this.link = link;
    this.cache = cache;
    this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
    this.queryDeduplication = queryDeduplication;
    this.defaultOptions = defaultOptions || {};
    this.typeDefs = typeDefs;

    if (ssrForceFetchDelay) {
      setTimeout(function () {
        return _this.disableNetworkFetches = false;
      }, ssrForceFetchDelay);
    }

    this.watchQuery = this.watchQuery.bind(this);
    this.query = this.query.bind(this);
    this.mutate = this.mutate.bind(this);
    this.resetStore = this.resetStore.bind(this);
    this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);

    if (connectToDevTools && typeof window === 'object') {
      window.__APOLLO_CLIENT__ = this;
    }

    if (!hasSuggestedDevtools && __DEV__) {
      hasSuggestedDevtools = true;

      if (typeof window !== 'undefined' && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
        var nav = window.navigator;
        var ua = nav && nav.userAgent;
        var url = void 0;

        if (typeof ua === "string") {
          if (ua.indexOf("Chrome/") > -1) {
            url = "https://chrome.google.com/webstore/detail/" + "apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
          } else if (ua.indexOf("Firefox/") > -1) {
            url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
          }
        }

        if (url) {
          __DEV__ && invariant.log("Download the Apollo DevTools for a better development " + "experience: " + url);
        }
      }
    }

    this.version = version;
    this.localState = new LocalState({
      cache: cache,
      client: this,
      resolvers: resolvers,
      fragmentMatcher: fragmentMatcher
    });
    this.queryManager = new QueryManager({
      cache: this.cache,
      link: this.link,
      queryDeduplication: queryDeduplication,
      ssrMode: ssrMode,
      clientAwareness: {
        name: clientAwarenessName,
        version: clientAwarenessVersion
      },
      localState: this.localState,
      assumeImmutableResults: assumeImmutableResults,
      onBroadcast: connectToDevTools ? function () {
        if (_this.devToolsHookCb) {
          _this.devToolsHookCb({
            action: {},
            state: {
              queries: _this.queryManager.getQueryStore(),
              mutations: _this.queryManager.mutationStore || {}
            },
            dataWithOptimisticResults: _this.cache.extract(true)
          });
        }
      } : void 0
    });
  }

  ApolloClient.prototype.stop = function () {
    this.queryManager.stop();
  };

  ApolloClient.prototype.watchQuery = function (options) {
    if (this.defaultOptions.watchQuery) {
      options = mergeOptions(this.defaultOptions.watchQuery, options);
    }

    if (this.disableNetworkFetches && (options.fetchPolicy === 'network-only' || options.fetchPolicy === 'cache-and-network')) {
      options = __assign(__assign({}, options), {
        fetchPolicy: 'cache-first'
      });
    }

    return this.queryManager.watchQuery(options);
  };

  ApolloClient.prototype.query = function (options) {
    if (this.defaultOptions.query) {
      options = mergeOptions(this.defaultOptions.query, options);
    }

    __DEV__ ? invariant(options.fetchPolicy !== 'cache-and-network', 'The cache-and-network fetchPolicy does not work with client.query, because ' + 'client.query can only return a single result. Please use client.watchQuery ' + 'to receive multiple results from the cache and the network, or consider ' + 'using a different fetchPolicy, such as cache-first or network-only.') : invariant(options.fetchPolicy !== 'cache-and-network', 8);

    if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
      options = __assign(__assign({}, options), {
        fetchPolicy: 'cache-first'
      });
    }

    return this.queryManager.query(options);
  };

  ApolloClient.prototype.mutate = function (options) {
    if (this.defaultOptions.mutate) {
      options = mergeOptions(this.defaultOptions.mutate, options);
    }

    return this.queryManager.mutate(options);
  };

  ApolloClient.prototype.subscribe = function (options) {
    return this.queryManager.startGraphQLSubscription(options);
  };

  ApolloClient.prototype.readQuery = function (options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }

    return this.cache.readQuery(options, optimistic);
  };

  ApolloClient.prototype.readFragment = function (options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }

    return this.cache.readFragment(options, optimistic);
  };

  ApolloClient.prototype.writeQuery = function (options) {
    this.cache.writeQuery(options);
    this.queryManager.broadcastQueries();
  };

  ApolloClient.prototype.writeFragment = function (options) {
    this.cache.writeFragment(options);
    this.queryManager.broadcastQueries();
  };

  ApolloClient.prototype.__actionHookForDevTools = function (cb) {
    this.devToolsHookCb = cb;
  };

  ApolloClient.prototype.__requestRaw = function (payload) {
    return execute(this.link, payload);
  };

  ApolloClient.prototype.resetStore = function () {
    var _this = this;

    return Promise.resolve().then(function () {
      return _this.queryManager.clearStore({
        discardWatches: false
      });
    }).then(function () {
      return Promise.all(_this.resetStoreCallbacks.map(function (fn) {
        return fn();
      }));
    }).then(function () {
      return _this.reFetchObservableQueries();
    });
  };

  ApolloClient.prototype.clearStore = function () {
    var _this = this;

    return Promise.resolve().then(function () {
      return _this.queryManager.clearStore({
        discardWatches: true
      });
    }).then(function () {
      return Promise.all(_this.clearStoreCallbacks.map(function (fn) {
        return fn();
      }));
    });
  };

  ApolloClient.prototype.onResetStore = function (cb) {
    var _this = this;

    this.resetStoreCallbacks.push(cb);
    return function () {
      _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) {
        return c !== cb;
      });
    };
  };

  ApolloClient.prototype.onClearStore = function (cb) {
    var _this = this;

    this.clearStoreCallbacks.push(cb);
    return function () {
      _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function (c) {
        return c !== cb;
      });
    };
  };

  ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
    return this.queryManager.reFetchObservableQueries(includeStandby);
  };

  ApolloClient.prototype.refetchQueries = function (options) {
    var map = this.queryManager.refetchQueries(options);
    var queries = [];
    var results = [];
    map.forEach(function (result, obsQuery) {
      queries.push(obsQuery);
      results.push(result);
    });
    var result = Promise.all(results);
    result.queries = queries;
    result.results = results;
    result.catch(function (error) {
      __DEV__ && invariant.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(error));
    });
    return result;
  };

  ApolloClient.prototype.getObservableQueries = function (include) {
    if (include === void 0) {
      include = "active";
    }

    return this.queryManager.getObservableQueries(include);
  };

  ApolloClient.prototype.extract = function (optimistic) {
    return this.cache.extract(optimistic);
  };

  ApolloClient.prototype.restore = function (serializedState) {
    return this.cache.restore(serializedState);
  };

  ApolloClient.prototype.addResolvers = function (resolvers) {
    this.localState.addResolvers(resolvers);
  };

  ApolloClient.prototype.setResolvers = function (resolvers) {
    this.localState.setResolvers(resolvers);
  };

  ApolloClient.prototype.getResolvers = function () {
    return this.localState.getResolvers();
  };

  ApolloClient.prototype.setLocalStateFragmentMatcher = function (fragmentMatcher) {
    this.localState.setFragmentMatcher(fragmentMatcher);
  };

  ApolloClient.prototype.setLink = function (newLink) {
    this.link = this.queryManager.link = newLink;
  };

  return ApolloClient;
}();

var docCache = new Map();
var fragmentSourceMap = new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;

function normalize$1(string) {
  return string.replace(/[\s,]+/g, ' ').trim();
}

function cacheKeyFromLoc(loc) {
  return normalize$1(loc.source.body.substring(loc.start, loc.end));
}

function processFragments(ast) {
  var seenKeys = new Set();
  var definitions = [];
  ast.definitions.forEach(function (fragmentDefinition) {
    if (fragmentDefinition.kind === 'FragmentDefinition') {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
      var sourceKeySet = fragmentSourceMap.get(fragmentName);

      if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\n" + "graphql-tag enforces all fragment names across your application to be unique; read more about\n" + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }
      } else if (!sourceKeySet) {
        fragmentSourceMap.set(fragmentName, sourceKeySet = new Set());
      }

      sourceKeySet.add(sourceKey);

      if (!seenKeys.has(sourceKey)) {
        seenKeys.add(sourceKey);
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  });
  return __assign(__assign({}, ast), {
    definitions: definitions
  });
}

function stripLoc(doc) {
  var workSet = new Set(doc.definitions);
  workSet.forEach(function (node) {
    if (node.loc) delete node.loc;
    Object.keys(node).forEach(function (key) {
      var value = node[key];

      if (value && typeof value === 'object') {
        workSet.add(value);
      }
    });
  });
  var loc = doc.loc;

  if (loc) {
    delete loc.startToken;
    delete loc.endToken;
  }

  return doc;
}

function parseDocument(source) {
  var cacheKey = normalize$1(source);

  if (!docCache.has(cacheKey)) {
    var parsed = parse(source, {
      experimentalFragmentVariables: experimentalFragmentVariables,
      allowLegacyFragmentVariables: experimentalFragmentVariables
    });

    if (!parsed || parsed.kind !== 'Document') {
      throw new Error('Not a valid GraphQL document.');
    }

    docCache.set(cacheKey, stripLoc(processFragments(parsed)));
  }

  return docCache.get(cacheKey);
}

function gql(literals) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  if (typeof literals === 'string') {
    literals = [literals];
  }

  var result = literals[0];
  args.forEach(function (arg, i) {
    if (arg && arg.kind === 'Document') {
      result += arg.loc.source.body;
    } else {
      result += arg;
    }

    result += literals[i + 1];
  });
  return parseDocument(result);
}
function resetCaches() {
  docCache.clear();
  fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
  printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}
var extras = {
  gql: gql,
  resetCaches: resetCaches,
  disableFragmentWarnings: disableFragmentWarnings,
  enableExperimentalFragmentVariables: enableExperimentalFragmentVariables,
  disableExperimentalFragmentVariables: disableExperimentalFragmentVariables
};

(function (gql_1) {
  gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));

gql["default"] = gql;

var contextKey = canUseSymbol ? Symbol.for('__APOLLO_CONTEXT__') : '__APOLLO_CONTEXT__';
function getApolloContext() {
  var context = react.createContext[contextKey];

  if (!context) {
    Object.defineProperty(react.createContext, contextKey, {
      value: context = react.createContext({}),
      enumerable: false,
      writable: false,
      configurable: true
    });
    context.displayName = 'ApolloContext';
  }

  return context;
}

var ApolloProvider = function (_a) {
  var client = _a.client,
      children = _a.children;
  var ApolloContext = getApolloContext();
  return react.createElement(ApolloContext.Consumer, null, function (context) {
    if (context === void 0) {
      context = {};
    }

    if (client && context.client !== client) {
      context = Object.assign({}, context, {
        client: client
      });
    }

    __DEV__ ? invariant(context.client, 'ApolloProvider was not passed a client instance. Make ' + 'sure you pass in your client via the "client" prop.') : invariant(context.client, 26);
    return react.createElement(ApolloContext.Provider, {
      value: context
    }, children);
  });
};

function useApolloClient(override) {
  var context = react.useContext(getApolloContext());
  var client = override || context.client;
  __DEV__ ? invariant(!!client, 'Could not find "client" in the context or passed in as an option. ' + 'Wrap the root component in an <ApolloProvider>, or pass an ApolloClient ' + 'instance in via options.') : invariant(!!client, 29);
  return client;
}

var DocumentType;

(function (DocumentType) {
  DocumentType[DocumentType["Query"] = 0] = "Query";
  DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
  DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(DocumentType || (DocumentType = {}));

var cache = new Map();
function operationName(type) {
  var name;

  switch (type) {
    case DocumentType.Query:
      name = 'Query';
      break;

    case DocumentType.Mutation:
      name = 'Mutation';
      break;

    case DocumentType.Subscription:
      name = 'Subscription';
      break;
  }

  return name;
}
function parser(document) {
  var cached = cache.get(document);
  if (cached) return cached;
  var variables, type, name;
  __DEV__ ? invariant(!!document && !!document.kind, "Argument of ".concat(document, " passed to parser was not a valid GraphQL ") + "DocumentNode. You may need to use 'graphql-tag' or another method " + "to convert your operation into a document") : invariant(!!document && !!document.kind, 30);
  var fragments = document.definitions.filter(function (x) {
    return x.kind === 'FragmentDefinition';
  });
  var queries = document.definitions.filter(function (x) {
    return x.kind === 'OperationDefinition' && x.operation === 'query';
  });
  var mutations = document.definitions.filter(function (x) {
    return x.kind === 'OperationDefinition' && x.operation === 'mutation';
  });
  var subscriptions = document.definitions.filter(function (x) {
    return x.kind === 'OperationDefinition' && x.operation === 'subscription';
  });
  __DEV__ ? invariant(!fragments.length || queries.length || mutations.length || subscriptions.length, "Passing only a fragment to 'graphql' is not yet supported. " + "You must include a query, subscription or mutation as well") : invariant(!fragments.length || queries.length || mutations.length || subscriptions.length, 31);
  __DEV__ ? invariant(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " + "".concat(document, " had ").concat(queries.length, " queries, ").concat(subscriptions.length, " ") + "subscriptions and ".concat(mutations.length, " mutations. ") + "You can use 'compose' to join multiple operation types to a component") : invariant(queries.length + mutations.length + subscriptions.length <= 1, 32);
  type = queries.length ? DocumentType.Query : DocumentType.Mutation;
  if (!queries.length && !mutations.length) type = DocumentType.Subscription;
  var definitions = queries.length ? queries : mutations.length ? mutations : subscriptions;
  __DEV__ ? invariant(definitions.length === 1, "react-apollo only supports one definition per HOC. ".concat(document, " had ") + "".concat(definitions.length, " definitions. ") + "You can use 'compose' to join multiple operation types to a component") : invariant(definitions.length === 1, 33);
  var definition = definitions[0];
  variables = definition.variableDefinitions || [];

  if (definition.name && definition.name.kind === 'Name') {
    name = definition.name.value;
  } else {
    name = 'data';
  }

  var payload = {
    name: name,
    type: type,
    variables: variables
  };
  cache.set(document, payload);
  return payload;
}
function verifyDocumentType(document, type) {
  var operation = parser(document);
  var requiredOperationName = operationName(type);
  var usedOperationName = operationName(operation.type);
  __DEV__ ? invariant(operation.type === type, "Running a ".concat(requiredOperationName, " requires a graphql ") + "".concat(requiredOperationName, ", but a ").concat(usedOperationName, " was used instead.")) : invariant(operation.type === type, 34);
}

function useQuery(query, options) {
  var _a;

  var context = react.useContext(getApolloContext());
  var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
  var defaultWatchQueryOptions = client.defaultOptions.watchQuery;
  verifyDocumentType(query, DocumentType.Query);

  var _b = react.useState(function () {
    var watchQueryOptions = createWatchQueryOptions(query, options, defaultWatchQueryOptions);
    var obsQuery = null;

    if (context.renderPromises) {
      obsQuery = context.renderPromises.getSSRObservable(watchQueryOptions);
    }

    if (!obsQuery) {
      obsQuery = client.watchQuery(watchQueryOptions);

      if (context.renderPromises) {
        context.renderPromises.registerSSRObservable(obsQuery, watchQueryOptions);
      }
    }

    if (context.renderPromises && (options === null || options === void 0 ? void 0 : options.ssr) !== false && !(options === null || options === void 0 ? void 0 : options.skip) && obsQuery.getCurrentResult().loading) {
      context.renderPromises.addQueryPromise({
        getOptions: function () {
          return createWatchQueryOptions(query, options, defaultWatchQueryOptions);
        },
        fetchData: function () {
          return new Promise(function (resolve) {
            var sub = obsQuery.subscribe({
              next: function (result) {
                if (!result.loading) {
                  resolve();
                  sub.unsubscribe();
                }
              },
              error: function () {
                resolve();
                sub.unsubscribe();
              },
              complete: function () {
                resolve();
              }
            });
          });
        }
      }, function () {
        return null;
      });
    }

    return obsQuery;
  }),
      obsQuery = _b[0],
      setObsQuery = _b[1];

  var _c = react.useState(function () {
    var _a, _b;

    var result = obsQuery.getCurrentResult();

    if (!result.loading && options) {
      if (result.error) {
        (_a = options.onError) === null || _a === void 0 ? void 0 : _a.call(options, result.error);
      } else if (result.data) {
        (_b = options.onCompleted) === null || _b === void 0 ? void 0 : _b.call(options, result.data);
      }
    }

    return result;
  }),
      result = _c[0],
      setResult = _c[1];

  var ref = react.useRef({
    client: client,
    query: query,
    options: options,
    result: result,
    previousData: void 0,
    watchQueryOptions: createWatchQueryOptions(query, options, defaultWatchQueryOptions)
  });
  react.useEffect(function () {
    var _a, _b;

    var watchQueryOptions = createWatchQueryOptions(query, options, defaultWatchQueryOptions);
    var nextResult;

    if (ref.current.client !== client || !equal(ref.current.query, query)) {
      var obsQuery_1 = client.watchQuery(watchQueryOptions);
      setObsQuery(obsQuery_1);
      nextResult = obsQuery_1.getCurrentResult();
    } else if (!equal(ref.current.watchQueryOptions, watchQueryOptions)) {
      obsQuery.setOptions(watchQueryOptions).catch(function () {});
      nextResult = obsQuery.getCurrentResult();
      ref.current.watchQueryOptions = watchQueryOptions;
    }

    if (nextResult) {
      var previousResult = ref.current.result;

      if (previousResult.data) {
        ref.current.previousData = previousResult.data;
      }

      setResult(ref.current.result = nextResult);

      if (!nextResult.loading && options) {
        if (nextResult.error) {
          (_a = options.onError) === null || _a === void 0 ? void 0 : _a.call(options, nextResult.error);
        } else if (nextResult.data) {
          (_b = options.onCompleted) === null || _b === void 0 ? void 0 : _b.call(options, nextResult.data);
        }
      }
    }

    Object.assign(ref.current, {
      client: client,
      query: query
    });
  }, [obsQuery, client, query, options]);
  react.useEffect(function () {
    if (context.renderPromises) {
      return;
    }

    var subscription = obsQuery.subscribe(onNext, onError);

    function onNext() {
      var _a, _b;

      var previousResult = ref.current.result;
      var result = obsQuery.getCurrentResult();

      if (previousResult && previousResult.loading === result.loading && previousResult.networkStatus === result.networkStatus && equal(previousResult.data, result.data)) {
        return;
      }

      if (previousResult.data) {
        ref.current.previousData = previousResult.data;
      }

      setResult(ref.current.result = result);

      if (!result.loading) {
        (_b = (_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onCompleted) === null || _b === void 0 ? void 0 : _b.call(_a, result.data);
      }
    }

    function onError(error) {
      var _a, _b;

      var last = obsQuery["last"];
      subscription.unsubscribe();

      try {
        obsQuery.resetLastResults();
        subscription = obsQuery.subscribe(onNext, onError);
      } finally {
        obsQuery["last"] = last;
      }

      if (!error.hasOwnProperty('graphQLErrors')) {
        throw error;
      }

      var previousResult = ref.current.result;

      if (previousResult && previousResult.loading || !equal(error, previousResult.error)) {
        setResult(ref.current.result = {
          data: previousResult.data,
          error: error,
          loading: false,
          networkStatus: NetworkStatus.error
        });
        (_b = (_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onError) === null || _b === void 0 ? void 0 : _b.call(_a, error);
      }
    }

    return function () {
      return subscription.unsubscribe();
    };
  }, [obsQuery, context.renderPromises, client.disableNetworkFetches]);
  var partial;
  _a = result, partial = _a.partial, result = __rest(_a, ["partial"]);
  {
    if (partial && (options === null || options === void 0 ? void 0 : options.partialRefetch) && !result.loading && (!result.data || Object.keys(result.data).length === 0) && obsQuery.options.fetchPolicy !== 'cache-only') {
      result = __assign(__assign({}, result), {
        loading: true,
        networkStatus: NetworkStatus.refetch
      });
      obsQuery.refetch();
    }

    if (context.renderPromises && (options === null || options === void 0 ? void 0 : options.ssr) !== false && !(options === null || options === void 0 ? void 0 : options.skip) && result.loading) {
      obsQuery.setOptions(createWatchQueryOptions(query, options, defaultWatchQueryOptions)).catch(function () {});
    }

    Object.assign(ref.current, {
      options: options
    });
  }

  if ((context.renderPromises || client.disableNetworkFetches) && (options === null || options === void 0 ? void 0 : options.ssr) === false) {
    result = ref.current.result = {
      loading: true,
      data: void 0,
      error: void 0,
      networkStatus: NetworkStatus.loading
    };
  } else if ((options === null || options === void 0 ? void 0 : options.skip) || (options === null || options === void 0 ? void 0 : options.fetchPolicy) === 'standby') {
    result = {
      loading: false,
      data: void 0,
      error: void 0,
      networkStatus: NetworkStatus.ready
    };
  }

  if (result.errors && result.errors.length) {
    result = __assign(__assign({}, result), {
      error: result.error || new ApolloError({
        graphQLErrors: result.errors
      })
    });
  }

  var obsQueryFields = react.useMemo(function () {
    return {
      refetch: obsQuery.refetch.bind(obsQuery),
      fetchMore: obsQuery.fetchMore.bind(obsQuery),
      updateQuery: obsQuery.updateQuery.bind(obsQuery),
      startPolling: obsQuery.startPolling.bind(obsQuery),
      stopPolling: obsQuery.stopPolling.bind(obsQuery),
      subscribeToMore: obsQuery.subscribeToMore.bind(obsQuery)
    };
  }, [obsQuery]);
  return __assign(__assign(__assign({}, obsQueryFields), {
    variables: createWatchQueryOptions(query, options, defaultWatchQueryOptions).variables,
    client: client,
    called: true,
    previousData: ref.current.previousData
  }), result);
}

function createWatchQueryOptions(query, options, defaultOptions) {
  var _a;

  if (options === void 0) {
    options = {};
  }

  var skip = options.skip,
      ssr = options.ssr,
      onCompleted = options.onCompleted,
      onError = options.onError,
      displayName = options.displayName,
      otherOptions = __rest(options, ["skip", "ssr", "onCompleted", "onError", "displayName"]);

  var watchQueryOptions = __assign({
    query: query
  }, otherOptions);

  if (defaultOptions) {
    watchQueryOptions = mergeOptions(defaultOptions, watchQueryOptions);
  }

  if (skip) {
    watchQueryOptions.fetchPolicy = 'standby';
  } else if (((_a = watchQueryOptions.context) === null || _a === void 0 ? void 0 : _a.renderPromises) && (watchQueryOptions.fetchPolicy === 'network-only' || watchQueryOptions.fetchPolicy === 'cache-and-network')) {
    watchQueryOptions.fetchPolicy = 'cache-first';
  } else if (!watchQueryOptions.fetchPolicy) {
    watchQueryOptions.fetchPolicy = 'cache-first';
  }

  if (!watchQueryOptions.variables) {
    watchQueryOptions.variables = {};
  }

  return watchQueryOptions;
}

function useMutation(mutation, options) {
  var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
  verifyDocumentType(mutation, DocumentType.Mutation);

  var _a = react.useState({
    called: false,
    loading: false,
    client: client
  }),
      result = _a[0],
      setResult = _a[1];

  var ref = react.useRef({
    result: result,
    mutationId: 0,
    isMounted: true,
    client: client,
    mutation: mutation,
    options: options
  });
  {
    Object.assign(ref.current, {
      client: client,
      options: options,
      mutation: mutation
    });
  }
  var execute = react.useCallback(function (executeOptions) {
    if (executeOptions === void 0) {
      executeOptions = {};
    }

    var _a = ref.current,
        client = _a.client,
        options = _a.options,
        mutation = _a.mutation;

    var baseOptions = __assign(__assign({}, options), {
      mutation: mutation
    });

    if (!ref.current.result.loading && !baseOptions.ignoreResults) {
      setResult(ref.current.result = {
        loading: true,
        error: void 0,
        data: void 0,
        called: true,
        client: client
      });
    }

    var mutationId = ++ref.current.mutationId;
    var clientOptions = mergeOptions(baseOptions, executeOptions);
    return client.mutate(clientOptions).then(function (response) {
      var _a, _b;

      var data = response.data,
          errors = response.errors;
      var error = errors && errors.length > 0 ? new ApolloError({
        graphQLErrors: errors
      }) : void 0;

      if (mutationId === ref.current.mutationId && !clientOptions.ignoreResults) {
        var result_1 = {
          called: true,
          loading: false,
          data: data,
          error: error,
          client: client
        };

        if (ref.current.isMounted && !equal(ref.current.result, result_1)) {
          setResult(ref.current.result = result_1);
        }
      }

      (_a = baseOptions.onCompleted) === null || _a === void 0 ? void 0 : _a.call(baseOptions, response.data);
      (_b = executeOptions.onCompleted) === null || _b === void 0 ? void 0 : _b.call(executeOptions, response.data);
      return response;
    }).catch(function (error) {
      var _a, _b;

      if (mutationId === ref.current.mutationId && ref.current.isMounted) {
        var result_2 = {
          loading: false,
          error: error,
          data: void 0,
          called: true,
          client: client
        };

        if (!equal(ref.current.result, result_2)) {
          setResult(ref.current.result = result_2);
        }
      }

      if (baseOptions.onError || clientOptions.onError) {
        (_a = baseOptions.onError) === null || _a === void 0 ? void 0 : _a.call(baseOptions, error);
        (_b = executeOptions.onError) === null || _b === void 0 ? void 0 : _b.call(executeOptions, error);
        return {
          data: void 0,
          errors: error
        };
      }

      throw error;
    });
  }, []);
  var reset = react.useCallback(function () {
    setResult({
      called: false,
      loading: false,
      client: client
    });
  }, []);
  react.useEffect(function () {
    return function () {
      ref.current.isMounted = false;
    };
  }, []);
  return [execute, __assign({
    reset: reset
  }, result)];
}

export { ApolloClient, ApolloProvider, InMemoryCache, gql, useMutation, useQuery };
