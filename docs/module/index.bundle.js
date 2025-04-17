/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token, expected ( (46:14)\n\n\u001b[0m \u001b[90m 44 | \u001b[39m      \u001b[36mtry\u001b[39m {\n \u001b[90m 45 | \u001b[39m        parentNode \u001b[33m=\u001b[39m node\u001b[33m.\u001b[39mparentNode\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 46 | \u001b[39m      } \u001b[36mcatch\u001b[39m {\n \u001b[90m    | \u001b[39m              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 47 | \u001b[39m        \u001b[36mreturn\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 48 | \u001b[39m      }\n \u001b[90m 49 | \u001b[39m      \u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mfind(parentNode\u001b[33m,\u001b[39m bubble)\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (28:18)\n\n\u001b[0m \u001b[90m 26 | \u001b[39m\n \u001b[90m 27 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mQuill\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 28 | \u001b[39m  static \u001b[33mDEFAULTS\u001b[39m \u001b[33m=\u001b[39m {\n \u001b[90m    | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 29 | \u001b[39m    bounds\u001b[33m:\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 30 | \u001b[39m    modules\u001b[33m:\u001b[39m {\n \u001b[90m 31 | \u001b[39m      clipboard\u001b[33m:\u001b[39m \u001b[36mtrue\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Range = exports.Parchment = exports.OpIterator = exports.Op = exports.Module = exports.Delta = exports.AttributeMap = undefined;

var _core = __webpack_require__(21);

Object.defineProperty(exports, 'AttributeMap', {
  enumerable: true,
  get: function get() {
    return _core.AttributeMap;
  }
});
Object.defineProperty(exports, 'Delta', {
  enumerable: true,
  get: function get() {
    return _core.Delta;
  }
});
Object.defineProperty(exports, 'Module', {
  enumerable: true,
  get: function get() {
    return _core.Module;
  }
});
Object.defineProperty(exports, 'Op', {
  enumerable: true,
  get: function get() {
    return _core.Op;
  }
});
Object.defineProperty(exports, 'OpIterator', {
  enumerable: true,
  get: function get() {
    return _core.OpIterator;
  }
});
Object.defineProperty(exports, 'Parchment', {
  enumerable: true,
  get: function get() {
    return _core.Parchment;
  }
});
Object.defineProperty(exports, 'Range', {
  enumerable: true,
  get: function get() {
    return _core.Range;
  }
});

var _core2 = _interopRequireDefault(_core);

var _align = __webpack_require__(32);

var _direction = __webpack_require__(33);

var _indent = __webpack_require__(34);

var _indent2 = _interopRequireDefault(_indent);

var _blockquote = __webpack_require__(35);

var _blockquote2 = _interopRequireDefault(_blockquote);

var _header = __webpack_require__(36);

var _header2 = _interopRequireDefault(_header);

var _list = __webpack_require__(37);

var _list2 = _interopRequireDefault(_list);

var _background = __webpack_require__(38);

var _color = __webpack_require__(18);

var _font = __webpack_require__(39);

var _size = __webpack_require__(40);

var _bold = __webpack_require__(41);

var _bold2 = _interopRequireDefault(_bold);

var _italic = __webpack_require__(42);

var _italic2 = _interopRequireDefault(_italic);

var _link = __webpack_require__(43);

var _link2 = _interopRequireDefault(_link);

var _script = __webpack_require__(44);

var _script2 = _interopRequireDefault(_script);

var _strike = __webpack_require__(45);

var _strike2 = _interopRequireDefault(_strike);

var _underline = __webpack_require__(46);

var _underline2 = _interopRequireDefault(_underline);

var _formula = __webpack_require__(47);

var _formula2 = _interopRequireDefault(_formula);

var _image = __webpack_require__(48);

var _image2 = _interopRequireDefault(_image);

var _video = __webpack_require__(49);

var _video2 = _interopRequireDefault(_video);

var _code = __webpack_require__(19);

var _code2 = _interopRequireDefault(_code);

var _syntax = __webpack_require__(50);

var _syntax2 = _interopRequireDefault(_syntax);

var _table = __webpack_require__(51);

var _table2 = _interopRequireDefault(_table);

var _toolbar = __webpack_require__(53);

var _toolbar2 = _interopRequireDefault(_toolbar);

var _icons = __webpack_require__(54);

var _icons2 = _interopRequireDefault(_icons);

var _picker = __webpack_require__(8);

var _picker2 = _interopRequireDefault(_picker);

var _colorPicker = __webpack_require__(55);

var _colorPicker2 = _interopRequireDefault(_colorPicker);

var _iconPicker = __webpack_require__(56);

var _iconPicker2 = _interopRequireDefault(_iconPicker);

var _tooltip = __webpack_require__(57);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _bubble = __webpack_require__(58);

var _bubble2 = _interopRequireDefault(_bubble);

var _snow = __webpack_require__(59);

var _snow2 = _interopRequireDefault(_snow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core2.default.register({
  'attributors/attribute/direction': _direction.DirectionAttribute,
  'attributors/class/align': _align.AlignClass,
  'attributors/class/background': _background.BackgroundClass,
  'attributors/class/color': _color.ColorClass,
  'attributors/class/direction': _direction.DirectionClass,
  'attributors/class/font': _font.FontClass,
  'attributors/class/size': _size.SizeClass,
  'attributors/style/align': _align.AlignStyle,
  'attributors/style/background': _background.BackgroundStyle,
  'attributors/style/color': _color.ColorStyle,
  'attributors/style/direction': _direction.DirectionStyle,
  'attributors/style/font': _font.FontStyle,
  'attributors/style/size': _size.SizeStyle
}, true);
_core2.default.register({
  'formats/align': _align.AlignClass,
  'formats/direction': _direction.DirectionClass,
  'formats/indent': _indent2.default,
  'formats/background': _background.BackgroundStyle,
  'formats/color': _color.ColorStyle,
  'formats/font': _font.FontClass,
  'formats/size': _size.SizeClass,
  'formats/blockquote': _blockquote2.default,
  'formats/code-block': _code2.default,
  'formats/header': _header2.default,
  'formats/list': _list2.default,
  'formats/bold': _bold2.default,
  'formats/code': _code.Code,
  'formats/italic': _italic2.default,
  'formats/link': _link2.default,
  'formats/script': _script2.default,
  'formats/strike': _strike2.default,
  'formats/underline': _underline2.default,
  'formats/formula': _formula2.default,
  'formats/image': _image2.default,
  'formats/video': _video2.default,
  'modules/syntax': _syntax2.default,
  'modules/table': _table2.default,
  'modules/toolbar': _toolbar2.default,
  'themes/bubble': _bubble2.default,
  'themes/snow': _snow2.default,
  'ui/icons': _icons2.default,
  'ui/picker': _picker2.default,
  'ui/icon-picker': _iconPicker2.default,
  'ui/color-picker': _colorPicker2.default,
  'ui/tooltip': _tooltip2.default
}, true);
exports.default = _core2.default;
//# sourceMappingURL=quill.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (2:18)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mModule\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 2 | \u001b[39m  static \u001b[33mDEFAULTS\u001b[39m \u001b[33m=\u001b[39m {}\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 3 | \u001b[39m  constructor(quill) {\n \u001b[90m 4 | \u001b[39m    let options \u001b[33m=\u001b[39m arguments\u001b[33m.\u001b[39mlength \u001b[33m>\u001b[39m \u001b[35m1\u001b[39m \u001b[33m&&\u001b[39m arguments[\u001b[35m1\u001b[39m] \u001b[33m!==\u001b[39m undefined \u001b[33m?\u001b[39m arguments[\u001b[35m1\u001b[39m] \u001b[33m:\u001b[39m {}\u001b[33m;\u001b[39m\n \u001b[90m 5 | \u001b[39m    \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mquill \u001b[33m=\u001b[39m quill\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (8:8)\n\n\u001b[0m \u001b[90m  6 | \u001b[39m\u001b[36mconst\u001b[39m \u001b[33mNEWLINE_LENGTH\u001b[39m \u001b[33m=\u001b[39m \u001b[35m1\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m  7 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mBlock\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mBlockBlot\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  8 | \u001b[39m  cache \u001b[33m=\u001b[39m {}\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m  9 | \u001b[39m  delta() {\n \u001b[90m 10 | \u001b[39m    \u001b[36mif\u001b[39m (\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcache\u001b[33m.\u001b[39mdelta \u001b[33m==\u001b[39m \u001b[36mnull\u001b[39m) {\n \u001b[90m 11 | \u001b[39m      \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcache\u001b[33m.\u001b[39mdelta \u001b[33m=\u001b[39m blockDelta(\u001b[36mthis\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeText = exports.default = undefined;

var _parchment = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_TextBlot) {
  _inherits(Text, _TextBlot);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  return Text;
}(_parchment.TextBlot);

// https://lodash.com/docs#escape


var entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
function escapeText(text) {
  return text.replace(/[&<>"']/g, function (s) {
    return entityMap[s];
  });
}
exports.default = Text;
exports.escapeText = escapeText;
//# sourceMappingURL=text.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeMap = exports.OpIterator = exports.Op = void 0;
var _diff = __webpack_require__(27);
var cloneDeep = __webpack_require__(14);
var isEqual = __webpack_require__(16);
var AttributeMap_1 = __webpack_require__(28);
exports.AttributeMap = AttributeMap_1.default;
var Op_1 = __webpack_require__(17);
exports.Op = Op_1.default;
var OpIterator_1 = __webpack_require__(29);
exports.OpIterator = OpIterator_1.default;
var NULL_CHARACTER = String.fromCharCode(0); // Placeholder char for embed in diff()
var getEmbedTypeAndData = function getEmbedTypeAndData(a, b) {
    if ((typeof a === "undefined" ? "undefined" : _typeof(a)) !== 'object' || a === null) {
        throw new Error("cannot retain a " + (typeof a === "undefined" ? "undefined" : _typeof(a)));
    }
    if ((typeof b === "undefined" ? "undefined" : _typeof(b)) !== 'object' || b === null) {
        throw new Error("cannot retain a " + (typeof b === "undefined" ? "undefined" : _typeof(b)));
    }
    var embedType = Object.keys(a)[0];
    if (!embedType || embedType !== Object.keys(b)[0]) {
        throw new Error("embed types not matched: " + embedType + " != " + Object.keys(b)[0]);
    }
    return [embedType, a[embedType], b[embedType]];
};

var Delta = function () {
    function Delta(ops) {
        _classCallCheck(this, Delta);

        // Assume we are given a well formed ops
        if (Array.isArray(ops)) {
            this.ops = ops;
        } else if (ops != null && Array.isArray(ops.ops)) {
            this.ops = ops.ops;
        } else {
            this.ops = [];
        }
    }

    _createClass(Delta, [{
        key: "insert",
        value: function insert(arg, attributes) {
            var newOp = {};
            if (typeof arg === 'string' && arg.length === 0) {
                return this;
            }
            newOp.insert = arg;
            if (attributes != null && (typeof attributes === "undefined" ? "undefined" : _typeof(attributes)) === 'object' && Object.keys(attributes).length > 0) {
                newOp.attributes = attributes;
            }
            return this.push(newOp);
        }
    }, {
        key: "delete",
        value: function _delete(length) {
            if (length <= 0) {
                return this;
            }
            return this.push({ delete: length });
        }
    }, {
        key: "retain",
        value: function retain(length, attributes) {
            if (typeof length === 'number' && length <= 0) {
                return this;
            }
            var newOp = { retain: length };
            if (attributes != null && (typeof attributes === "undefined" ? "undefined" : _typeof(attributes)) === 'object' && Object.keys(attributes).length > 0) {
                newOp.attributes = attributes;
            }
            return this.push(newOp);
        }
    }, {
        key: "push",
        value: function push(newOp) {
            var index = this.ops.length;
            var lastOp = this.ops[index - 1];
            newOp = cloneDeep(newOp);
            if ((typeof lastOp === "undefined" ? "undefined" : _typeof(lastOp)) === 'object') {
                if (typeof newOp.delete === 'number' && typeof lastOp.delete === 'number') {
                    this.ops[index - 1] = { delete: lastOp.delete + newOp.delete };
                    return this;
                }
                // Since it does not matter if we insert before or after deleting at the same index,
                // always prefer to insert first
                if (typeof lastOp.delete === 'number' && newOp.insert != null) {
                    index -= 1;
                    lastOp = this.ops[index - 1];
                    if ((typeof lastOp === "undefined" ? "undefined" : _typeof(lastOp)) !== 'object') {
                        this.ops.unshift(newOp);
                        return this;
                    }
                }
                if (isEqual(newOp.attributes, lastOp.attributes)) {
                    if (typeof newOp.insert === 'string' && typeof lastOp.insert === 'string') {
                        this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
                        if (_typeof(newOp.attributes) === 'object') {
                            this.ops[index - 1].attributes = newOp.attributes;
                        }
                        return this;
                    } else if (typeof newOp.retain === 'number' && typeof lastOp.retain === 'number') {
                        this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
                        if (_typeof(newOp.attributes) === 'object') {
                            this.ops[index - 1].attributes = newOp.attributes;
                        }
                        return this;
                    }
                }
            }
            if (index === this.ops.length) {
                this.ops.push(newOp);
            } else {
                this.ops.splice(index, 0, newOp);
            }
            return this;
        }
    }, {
        key: "chop",
        value: function chop() {
            var lastOp = this.ops[this.ops.length - 1];
            if (lastOp && typeof lastOp.retain === 'number' && !lastOp.attributes) {
                this.ops.pop();
            }
            return this;
        }
    }, {
        key: "filter",
        value: function filter(predicate) {
            return this.ops.filter(predicate);
        }
    }, {
        key: "forEach",
        value: function forEach(predicate) {
            this.ops.forEach(predicate);
        }
    }, {
        key: "map",
        value: function map(predicate) {
            return this.ops.map(predicate);
        }
    }, {
        key: "partition",
        value: function partition(predicate) {
            var passed = [];
            var failed = [];
            this.forEach(function (op) {
                var target = predicate(op) ? passed : failed;
                target.push(op);
            });
            return [passed, failed];
        }
    }, {
        key: "reduce",
        value: function reduce(predicate, initialValue) {
            return this.ops.reduce(predicate, initialValue);
        }
    }, {
        key: "changeLength",
        value: function changeLength() {
            return this.reduce(function (length, elem) {
                if (elem.insert) {
                    return length + Op_1.default.length(elem);
                } else if (elem.delete) {
                    return length - elem.delete;
                }
                return length;
            }, 0);
        }
    }, {
        key: "length",
        value: function length() {
            return this.reduce(function (length, elem) {
                return length + Op_1.default.length(elem);
            }, 0);
        }
    }, {
        key: "slice",
        value: function slice() {
            var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;

            var ops = [];
            var iter = new OpIterator_1.default(this.ops);
            var index = 0;
            while (index < end && iter.hasNext()) {
                var nextOp = void 0;
                if (index < start) {
                    nextOp = iter.next(start - index);
                } else {
                    nextOp = iter.next(end - index);
                    ops.push(nextOp);
                }
                index += Op_1.default.length(nextOp);
            }
            return new Delta(ops);
        }
    }, {
        key: "compose",
        value: function compose(other) {
            var thisIter = new OpIterator_1.default(this.ops);
            var otherIter = new OpIterator_1.default(other.ops);
            var ops = [];
            var firstOther = otherIter.peek();
            if (firstOther != null && typeof firstOther.retain === 'number' && firstOther.attributes == null) {
                var firstLeft = firstOther.retain;
                while (thisIter.peekType() === 'insert' && thisIter.peekLength() <= firstLeft) {
                    firstLeft -= thisIter.peekLength();
                    ops.push(thisIter.next());
                }
                if (firstOther.retain - firstLeft > 0) {
                    otherIter.next(firstOther.retain - firstLeft);
                }
            }
            var delta = new Delta(ops);
            while (thisIter.hasNext() || otherIter.hasNext()) {
                if (otherIter.peekType() === 'insert') {
                    delta.push(otherIter.next());
                } else if (thisIter.peekType() === 'delete') {
                    delta.push(thisIter.next());
                } else {
                    var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
                    var thisOp = thisIter.next(length);
                    var otherOp = otherIter.next(length);
                    if (otherOp.retain) {
                        var newOp = {};
                        if (typeof thisOp.retain === 'number') {
                            newOp.retain = typeof otherOp.retain === 'number' ? length : otherOp.retain;
                        } else {
                            if (typeof otherOp.retain === 'number') {
                                if (thisOp.retain == null) {
                                    newOp.insert = thisOp.insert;
                                } else {
                                    newOp.retain = thisOp.retain;
                                }
                            } else {
                                var action = thisOp.retain == null ? 'insert' : 'retain';

                                var _getEmbedTypeAndData = getEmbedTypeAndData(thisOp[action], otherOp.retain),
                                    _getEmbedTypeAndData2 = _slicedToArray(_getEmbedTypeAndData, 3),
                                    embedType = _getEmbedTypeAndData2[0],
                                    thisData = _getEmbedTypeAndData2[1],
                                    otherData = _getEmbedTypeAndData2[2];

                                var handler = Delta.getHandler(embedType);
                                newOp[action] = _defineProperty({}, embedType, handler.compose(thisData, otherData, action === 'retain'));
                            }
                        }
                        // Preserve null when composing with a retain, otherwise remove it for inserts
                        var attributes = AttributeMap_1.default.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
                        if (attributes) {
                            newOp.attributes = attributes;
                        }
                        delta.push(newOp);
                        // Optimization if rest of other is just retain
                        if (!otherIter.hasNext() && isEqual(delta.ops[delta.ops.length - 1], newOp)) {
                            var rest = new Delta(thisIter.rest());
                            return delta.concat(rest).chop();
                        }
                        // Other op should be delete, we could be an insert or retain
                        // Insert + delete cancels out
                    } else if (typeof otherOp.delete === 'number' && (typeof thisOp.retain === 'number' || _typeof(thisOp.retain) === 'object' && thisOp.retain !== null)) {
                        delta.push(otherOp);
                    }
                }
            }
            return delta.chop();
        }
    }, {
        key: "concat",
        value: function concat(other) {
            var delta = new Delta(this.ops.slice());
            if (other.ops.length > 0) {
                delta.push(other.ops[0]);
                delta.ops = delta.ops.concat(other.ops.slice(1));
            }
            return delta;
        }
    }, {
        key: "diff",
        value: function diff(other, cursor) {
            if (this.ops === other.ops) {
                return new Delta();
            }
            var strings = [this, other].map(function (delta) {
                return delta.map(function (op) {
                    if (op.insert != null) {
                        return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
                    }
                    var prep = delta === other ? 'on' : 'with';
                    throw new Error('diff() called ' + prep + ' non-document');
                }).join('');
            });
            var retDelta = new Delta();
            var diffResult = _diff(strings[0], strings[1], cursor, true);
            var thisIter = new OpIterator_1.default(this.ops);
            var otherIter = new OpIterator_1.default(other.ops);
            diffResult.forEach(function (component) {
                var length = component[1].length;
                while (length > 0) {
                    var opLength = 0;
                    switch (component[0]) {
                        case _diff.INSERT:
                            opLength = Math.min(otherIter.peekLength(), length);
                            retDelta.push(otherIter.next(opLength));
                            break;
                        case _diff.DELETE:
                            opLength = Math.min(length, thisIter.peekLength());
                            thisIter.next(opLength);
                            retDelta.delete(opLength);
                            break;
                        case _diff.EQUAL:
                            opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
                            var thisOp = thisIter.next(opLength);
                            var otherOp = otherIter.next(opLength);
                            if (isEqual(thisOp.insert, otherOp.insert)) {
                                retDelta.retain(opLength, AttributeMap_1.default.diff(thisOp.attributes, otherOp.attributes));
                            } else {
                                retDelta.push(otherOp).delete(opLength);
                            }
                            break;
                    }
                    length -= opLength;
                }
            });
            return retDelta.chop();
        }
    }, {
        key: "eachLine",
        value: function eachLine(predicate) {
            var newline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '\n';

            var iter = new OpIterator_1.default(this.ops);
            var line = new Delta();
            var i = 0;
            while (iter.hasNext()) {
                if (iter.peekType() !== 'insert') {
                    return;
                }
                var thisOp = iter.peek();
                var start = Op_1.default.length(thisOp) - iter.peekLength();
                var index = typeof thisOp.insert === 'string' ? thisOp.insert.indexOf(newline, start) - start : -1;
                if (index < 0) {
                    line.push(iter.next());
                } else if (index > 0) {
                    line.push(iter.next(index));
                } else {
                    if (predicate(line, iter.next(1).attributes || {}, i) === false) {
                        return;
                    }
                    i += 1;
                    line = new Delta();
                }
            }
            if (line.length() > 0) {
                predicate(line, {}, i);
            }
        }
    }, {
        key: "invert",
        value: function invert(base) {
            var inverted = new Delta();
            this.reduce(function (baseIndex, op) {
                if (op.insert) {
                    inverted.delete(Op_1.default.length(op));
                } else if (typeof op.retain === 'number' && op.attributes == null) {
                    inverted.retain(op.retain);
                    return baseIndex + op.retain;
                } else if (op.delete || typeof op.retain === 'number') {
                    var length = op.delete || op.retain;
                    var slice = base.slice(baseIndex, baseIndex + length);
                    slice.forEach(function (baseOp) {
                        if (op.delete) {
                            inverted.push(baseOp);
                        } else if (op.retain && op.attributes) {
                            inverted.retain(Op_1.default.length(baseOp), AttributeMap_1.default.invert(op.attributes, baseOp.attributes));
                        }
                    });
                    return baseIndex + length;
                } else if (_typeof(op.retain) === 'object' && op.retain !== null) {
                    var _slice = base.slice(baseIndex, baseIndex + 1);
                    var baseOp = new OpIterator_1.default(_slice.ops).next();

                    var _getEmbedTypeAndData3 = getEmbedTypeAndData(op.retain, baseOp.insert),
                        _getEmbedTypeAndData4 = _slicedToArray(_getEmbedTypeAndData3, 3),
                        embedType = _getEmbedTypeAndData4[0],
                        opData = _getEmbedTypeAndData4[1],
                        baseOpData = _getEmbedTypeAndData4[2];

                    var handler = Delta.getHandler(embedType);
                    inverted.retain(_defineProperty({}, embedType, handler.invert(opData, baseOpData)), AttributeMap_1.default.invert(op.attributes, baseOp.attributes));
                    return baseIndex + 1;
                }
                return baseIndex;
            }, 0);
            return inverted.chop();
        }
    }, {
        key: "transform",
        value: function transform(arg) {
            var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            priority = !!priority;
            if (typeof arg === 'number') {
                return this.transformPosition(arg, priority);
            }
            var other = arg;
            var thisIter = new OpIterator_1.default(this.ops);
            var otherIter = new OpIterator_1.default(other.ops);
            var delta = new Delta();
            while (thisIter.hasNext() || otherIter.hasNext()) {
                if (thisIter.peekType() === 'insert' && (priority || otherIter.peekType() !== 'insert')) {
                    delta.retain(Op_1.default.length(thisIter.next()));
                } else if (otherIter.peekType() === 'insert') {
                    delta.push(otherIter.next());
                } else {
                    var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
                    var thisOp = thisIter.next(length);
                    var otherOp = otherIter.next(length);
                    if (thisOp.delete) {
                        // Our delete either makes their delete redundant or removes their retain
                        continue;
                    } else if (otherOp.delete) {
                        delta.push(otherOp);
                    } else {
                        var thisData = thisOp.retain;
                        var otherData = otherOp.retain;
                        var transformedData = (typeof otherData === "undefined" ? "undefined" : _typeof(otherData)) === 'object' && otherData !== null ? otherData : length;
                        if ((typeof thisData === "undefined" ? "undefined" : _typeof(thisData)) === 'object' && thisData !== null && (typeof otherData === "undefined" ? "undefined" : _typeof(otherData)) === 'object' && otherData !== null) {
                            var embedType = Object.keys(thisData)[0];
                            if (embedType === Object.keys(otherData)[0]) {
                                var handler = Delta.getHandler(embedType);
                                if (handler) {
                                    transformedData = _defineProperty({}, embedType, handler.transform(thisData[embedType], otherData[embedType], priority));
                                }
                            }
                        }
                        // We retain either their retain or insert
                        delta.retain(transformedData, AttributeMap_1.default.transform(thisOp.attributes, otherOp.attributes, priority));
                    }
                }
            }
            return delta.chop();
        }
    }, {
        key: "transformPosition",
        value: function transformPosition(index) {
            var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            priority = !!priority;
            var thisIter = new OpIterator_1.default(this.ops);
            var offset = 0;
            while (thisIter.hasNext() && offset <= index) {
                var length = thisIter.peekLength();
                var nextType = thisIter.peekType();
                thisIter.next();
                if (nextType === 'delete') {
                    index -= Math.min(length, index - offset);
                    continue;
                } else if (nextType === 'insert' && (offset < index || !priority)) {
                    index += length;
                }
                offset += length;
            }
            return index;
        }
    }], [{
        key: "registerEmbed",
        value: function registerEmbed(embedType, handler) {
            this.handlers[embedType] = handler;
        }
    }, {
        key: "unregisterEmbed",
        value: function unregisterEmbed(embedType) {
            delete this.handlers[embedType];
        }
    }, {
        key: "getHandler",
        value: function getHandler(embedType) {
            var handler = this.handlers[embedType];
            if (!handler) {
                throw new Error("no handlers for embed type \"" + embedType + "\"");
            }
            return handler;
        }
    }]);

    return Delta;
}();

Delta.Op = Op_1.default;
Delta.OpIterator = OpIterator_1.default;
Delta.AttributeMap = AttributeMap_1.default;
Delta.handlers = {};
exports.default = Delta;
if (( false ? "undefined" : _typeof(module)) === 'object') {
    module.exports = Delta;
    module.exports.default = Delta;
}
//# sourceMappingURL=Delta.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DropdownIcon = "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke\" points=\"7 11 9 13 11 11 7 11\"/><polygon class=\"ql-stroke\" points=\"7 7 9 5 11 7 7 7\"/></svg>";
var optionsCounter = 0;
function toggleAriaAttribute(element, attribute) {
  element.setAttribute(attribute, '' + !(element.getAttribute(attribute) === 'true'));
}

var Picker = function () {
  function Picker(select) {
    var _this = this;

    _classCallCheck(this, Picker);

    this.select = select;
    this.container = document.createElement('span');
    this.buildPicker();
    this.select.style.display = 'none';
    // @ts-expect-error Fix me later
    this.select.parentNode.insertBefore(this.container, this.select);
    this.label.addEventListener('mousedown', function () {
      _this.togglePicker();
    });
    this.label.addEventListener('keydown', function (event) {
      switch (event.key) {
        case 'Enter':
          _this.togglePicker();
          break;
        case 'Escape':
          _this.escape();
          event.preventDefault();
          break;
        default:
      }
    });
    this.select.addEventListener('change', this.update.bind(this));
  }

  _createClass(Picker, [{
    key: 'togglePicker',
    value: function togglePicker() {
      this.container.classList.toggle('ql-expanded');
      // Toggle aria-expanded and aria-hidden to make the picker accessible
      toggleAriaAttribute(this.label, 'aria-expanded');
      // @ts-expect-error
      toggleAriaAttribute(this.options, 'aria-hidden');
    }
  }, {
    key: 'buildItem',
    value: function buildItem(option) {
      var _this2 = this;

      var item = document.createElement('span');
      // @ts-expect-error
      item.tabIndex = '0';
      item.setAttribute('role', 'button');
      item.classList.add('ql-picker-item');
      var value = option.getAttribute('value');
      if (value) {
        item.setAttribute('data-value', value);
      }
      if (option.textContent) {
        item.setAttribute('data-label', option.textContent);
      }
      item.addEventListener('click', function () {
        _this2.selectItem(item, true);
      });
      item.addEventListener('keydown', function (event) {
        switch (event.key) {
          case 'Enter':
            _this2.selectItem(item, true);
            event.preventDefault();
            break;
          case 'Escape':
            _this2.escape();
            event.preventDefault();
            break;
          default:
        }
      });
      return item;
    }
  }, {
    key: 'buildLabel',
    value: function buildLabel() {
      var label = document.createElement('span');
      label.classList.add('ql-picker-label');
      label.innerHTML = DropdownIcon;
      // @ts-expect-error
      label.tabIndex = '0';
      label.setAttribute('role', 'button');
      label.setAttribute('aria-expanded', 'false');
      this.container.appendChild(label);
      return label;
    }
  }, {
    key: 'buildOptions',
    value: function buildOptions() {
      var _this3 = this;

      var options = document.createElement('span');
      options.classList.add('ql-picker-options');

      // Don't want screen readers to read this until options are visible
      options.setAttribute('aria-hidden', 'true');
      // @ts-expect-error
      options.tabIndex = '-1';

      // Need a unique id for aria-controls
      options.id = 'ql-picker-options-' + optionsCounter;
      optionsCounter += 1;
      this.label.setAttribute('aria-controls', options.id);

      // @ts-expect-error
      this.options = options;
      Array.from(this.select.options).forEach(function (option) {
        var item = _this3.buildItem(option);
        options.appendChild(item);
        if (option.selected === true) {
          _this3.selectItem(item);
        }
      });
      this.container.appendChild(options);
    }
  }, {
    key: 'buildPicker',
    value: function buildPicker() {
      var _this4 = this;

      Array.from(this.select.attributes).forEach(function (item) {
        _this4.container.setAttribute(item.name, item.value);
      });
      this.container.classList.add('ql-picker');
      this.label = this.buildLabel();
      this.buildOptions();
    }
  }, {
    key: 'escape',
    value: function escape() {
      var _this5 = this;

      // Close menu and return focus to trigger label
      this.close();
      // Need setTimeout for accessibility to ensure that the browser executes
      // focus on the next process thread and after any DOM content changes
      setTimeout(function () {
        return _this5.label.focus();
      }, 1);
    }
  }, {
    key: 'close',
    value: function close() {
      this.container.classList.remove('ql-expanded');
      this.label.setAttribute('aria-expanded', 'false');
      // @ts-expect-error
      this.options.setAttribute('aria-hidden', 'true');
    }
  }, {
    key: 'selectItem',
    value: function selectItem(item) {
      var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var selected = this.container.querySelector('.ql-selected');
      if (item === selected) return;
      if (selected != null) {
        selected.classList.remove('ql-selected');
      }
      if (item == null) return;
      item.classList.add('ql-selected');
      // @ts-expect-error Fix me later
      this.select.selectedIndex = Array.from(item.parentNode.children).indexOf(item);
      if (item.hasAttribute('data-value')) {
        // @ts-expect-error Fix me later
        this.label.setAttribute('data-value', item.getAttribute('data-value'));
      } else {
        this.label.removeAttribute('data-value');
      }
      if (item.hasAttribute('data-label')) {
        // @ts-expect-error Fix me later
        this.label.setAttribute('data-label', item.getAttribute('data-label'));
      } else {
        this.label.removeAttribute('data-label');
      }
      if (trigger) {
        this.select.dispatchEvent(new Event('change'));
        this.close();
      }
    }
  }, {
    key: 'update',
    value: function update() {
      var option = void 0;
      if (this.select.selectedIndex > -1) {
        var item =
        // @ts-expect-error Fix me later
        this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];
        option = this.select.options[this.select.selectedIndex];
        // @ts-expect-error
        this.selectItem(item);
      } else {
        this.selectItem(null);
      }
      var isActive = option != null && option !== this.select.querySelector('option[selected]');
      this.label.classList.toggle('ql-active', isActive);
    }
  }]);

  return Picker;
}();

exports.default = Picker;
//# sourceMappingURL=picker.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parchment = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Break = function (_EmbedBlot) {
  _inherits(Break, _EmbedBlot);

  function Break() {
    _classCallCheck(this, Break);

    return _possibleConstructorReturn(this, (Break.__proto__ || Object.getPrototypeOf(Break)).apply(this, arguments));
  }

  _createClass(Break, [{
    key: 'optimize',
    value: function optimize() {
      if (this.prev || this.next) {
        this.remove();
      }
    }
  }, {
    key: 'length',
    value: function length() {
      return 0;
    }
  }, {
    key: 'value',
    value: function value() {
      return '';
    }
  }], [{
    key: 'value',
    value: function value() {
      return undefined;
    }
  }]);

  return Break;
}(_parchment.EmbedBlot);

Break.blotName = 'break';
Break.tagName = 'BR';
exports.default = Break;
//# sourceMappingURL=break.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parchment = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_ContainerBlot) {
  _inherits(Container, _ContainerBlot);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  return Container;
}(_parchment.ContainerBlot);

exports.default = Container;
//# sourceMappingURL=container.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (4:18)\n\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mTextBlot\u001b[39m from \u001b[32m'./text.js'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 3 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mCursor\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mEmbedBlot\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 | \u001b[39m  static blotName \u001b[33m=\u001b[39m \u001b[32m'cursor'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 5 | \u001b[39m  static className \u001b[33m=\u001b[39m \u001b[32m'ql-cursor'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 6 | \u001b[39m  static tagName \u001b[33m=\u001b[39m \u001b[32m'span'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 7 | \u001b[39m  static \u001b[33mCONTENTS\u001b[39m \u001b[33m=\u001b[39m \u001b[32m'\\uFEFF'\u001b[39m\u001b[33m;\u001b[39m \u001b[90m// Zero width no break space\u001b[39m\u001b[0m\n");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (5:25)\n\n\u001b[0m \u001b[90m 3 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mText\u001b[39m from \u001b[32m'./text.js'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 4 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mInline\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mInlineBlot\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 5 | \u001b[39m  static allowedChildren \u001b[33m=\u001b[39m [\u001b[33mInline\u001b[39m\u001b[33m,\u001b[39m \u001b[33mBreak\u001b[39m\u001b[33m,\u001b[39m \u001b[33mEmbedBlot\u001b[39m\u001b[33m,\u001b[39m \u001b[33mText\u001b[39m]\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m                         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 6 | \u001b[39m  \u001b[90m// Lower index means deeper in the DOM tree, since not found (-1) is for embeds\u001b[39m\n \u001b[90m 7 | \u001b[39m  static order \u001b[33m=\u001b[39m [\u001b[32m'cursor'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'inline'\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 8 | \u001b[39m  \u001b[90m// Must be lower\u001b[39m\u001b[0m\n");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (27:18)\n\n\u001b[0m \u001b[90m 25 | \u001b[39m}\u001b[33m,\u001b[39m {})\u001b[33m;\u001b[39m\n \u001b[90m 26 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mClipboard\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mModule\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 27 | \u001b[39m  static \u001b[33mDEFAULTS\u001b[39m \u001b[33m=\u001b[39m {\n \u001b[90m    | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 28 | \u001b[39m    matchers\u001b[33m:\u001b[39m []\n \u001b[90m 29 | \u001b[39m  }\u001b[33m;\u001b[39m\n \u001b[90m 30 | \u001b[39m  constructor(quill\u001b[33m,\u001b[39m options) {\u001b[0m\n");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    _Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor());
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor());
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag:case float64Tag:
    case int8Tag:case int16Tag:case int32Tag:
    case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15), __webpack_require__(2)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    _Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15), __webpack_require__(2)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
var Op;
(function (Op) {
    function length(op) {
        if (typeof op.delete === 'number') {
            return op.delete;
        } else if (typeof op.retain === 'number') {
            return op.retain;
        } else if (_typeof(op.retain) === 'object' && op.retain !== null) {
            return 1;
        } else {
            return typeof op.insert === 'string' ? op.insert.length : 1;
        }
    }
    Op.length = length;
})(Op || (Op = {}));
exports.default = Op;
//# sourceMappingURL=Op.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorStyle = exports.ColorClass = exports.ColorAttributor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorAttributor = function (_StyleAttributor) {
  _inherits(ColorAttributor, _StyleAttributor);

  function ColorAttributor() {
    _classCallCheck(this, ColorAttributor);

    return _possibleConstructorReturn(this, (ColorAttributor.__proto__ || Object.getPrototypeOf(ColorAttributor)).apply(this, arguments));
  }

  _createClass(ColorAttributor, [{
    key: 'value',
    value: function value(domNode) {
      var value = _get(ColorAttributor.prototype.__proto__ || Object.getPrototypeOf(ColorAttributor.prototype), 'value', this).call(this, domNode);
      if (!value.startsWith('rgb(')) return value;
      value = value.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');
      var hex = value.split(',').map(function (component) {
        return ('00' + parseInt(component, 10).toString(16)).slice(-2);
      }).join('');
      return '#' + hex;
    }
  }]);

  return ColorAttributor;
}(_parchment.StyleAttributor);

var ColorClass = new _parchment.ClassAttributor('color', 'ql-color', {
  scope: _parchment.Scope.INLINE
});
var ColorStyle = new ColorAttributor('color', 'color', {
  scope: _parchment.Scope.INLINE
});
exports.ColorAttributor = ColorAttributor;
exports.ColorClass = ColorClass;
exports.ColorStyle = ColorStyle;
//# sourceMappingURL=color.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (26:13)\n\n\u001b[0m \u001b[90m 24 | \u001b[39m}\n \u001b[90m 25 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mCodeBlock\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mBlock\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 26 | \u001b[39m  static \u001b[33mTAB\u001b[39m \u001b[33m=\u001b[39m \u001b[32m'  '\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 27 | \u001b[39m  static register() {\n \u001b[90m 28 | \u001b[39m    \u001b[33mQuill\u001b[39m\u001b[33m.\u001b[39mregister(\u001b[33mCodeBlockContainer\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 29 | \u001b[39m  }\u001b[0m\n");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _quill = __webpack_require__(3);

var _quill2 = _interopRequireDefault(_quill);

var _markdownShortcuts = __webpack_require__(60);

var _markdownShortcuts2 = _interopRequireDefault(_markdownShortcuts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_quill2.default.register('modules/markdownShortcuts', _markdownShortcuts2.default);

new _quill2.default('#editor', {
  theme: 'snow',
  modules: {
    markdownShortcuts: {}
  }
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Range = exports.Parchment = exports.AttributeMap = exports.OpIterator = exports.Op = exports.Delta = exports.Module = undefined;

var _module = __webpack_require__(4);

Object.defineProperty(exports, 'Module', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_module).default;
  }
});

var _quill = __webpack_require__(1);

var _quill2 = _interopRequireDefault(_quill);

var _block = __webpack_require__(5);

var _block2 = _interopRequireDefault(_block);

var _break = __webpack_require__(9);

var _break2 = _interopRequireDefault(_break);

var _container = __webpack_require__(10);

var _container2 = _interopRequireDefault(_container);

var _cursor = __webpack_require__(11);

var _cursor2 = _interopRequireDefault(_cursor);

var _embed = __webpack_require__(22);

var _embed2 = _interopRequireDefault(_embed);

var _inline = __webpack_require__(12);

var _inline2 = _interopRequireDefault(_inline);

var _scroll = __webpack_require__(23);

var _scroll2 = _interopRequireDefault(_scroll);

var _text = __webpack_require__(6);

var _text2 = _interopRequireDefault(_text);

var _clipboard = __webpack_require__(13);

var _clipboard2 = _interopRequireDefault(_clipboard);

var _history = __webpack_require__(24);

var _history2 = _interopRequireDefault(_history);

var _keyboard = __webpack_require__(25);

var _keyboard2 = _interopRequireDefault(_keyboard);

var _uploader = __webpack_require__(26);

var _uploader2 = _interopRequireDefault(_uploader);

var _quillDelta = __webpack_require__(7);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _input = __webpack_require__(30);

var _input2 = _interopRequireDefault(_input);

var _uiNode = __webpack_require__(31);

var _uiNode2 = _interopRequireDefault(_uiNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Delta = _quillDelta2.default;
exports.Op = _quillDelta.Op;
exports.OpIterator = _quillDelta.OpIterator;
exports.AttributeMap = _quillDelta.AttributeMap;
exports.Parchment = _quill.Parchment;
exports.Range = _quill.Range;

_quill2.default.register({
  'blots/block': _block2.default,
  'blots/block/embed': _block.BlockEmbed,
  'blots/break': _break2.default,
  'blots/container': _container2.default,
  'blots/cursor': _cursor2.default,
  'blots/embed': _embed2.default,
  'blots/inline': _inline2.default,
  'blots/scroll': _scroll2.default,
  'blots/text': _text2.default,
  'modules/clipboard': _clipboard2.default,
  'modules/history': _history2.default,
  'modules/keyboard': _keyboard2.default,
  'modules/uploader': _uploader2.default,
  'modules/input': _input2.default,
  'modules/uiNode': _uiNode2.default
});
exports.default = _quill2.default;
//# sourceMappingURL=core.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

var _text = __webpack_require__(6);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GUARD_TEXT = '\uFEFF';

var Embed = function (_EmbedBlot) {
  _inherits(Embed, _EmbedBlot);

  function Embed(scroll, node) {
    _classCallCheck(this, Embed);

    var _this = _possibleConstructorReturn(this, (Embed.__proto__ || Object.getPrototypeOf(Embed)).call(this, scroll, node));

    _this.contentNode = document.createElement('span');
    _this.contentNode.setAttribute('contenteditable', 'false');
    Array.from(_this.domNode.childNodes).forEach(function (childNode) {
      _this.contentNode.appendChild(childNode);
    });
    _this.leftGuard = document.createTextNode(GUARD_TEXT);
    _this.rightGuard = document.createTextNode(GUARD_TEXT);
    _this.domNode.appendChild(_this.leftGuard);
    _this.domNode.appendChild(_this.contentNode);
    _this.domNode.appendChild(_this.rightGuard);
    return _this;
  }

  _createClass(Embed, [{
    key: 'index',
    value: function index(node, offset) {
      if (node === this.leftGuard) return 0;
      if (node === this.rightGuard) return 1;
      return _get(Embed.prototype.__proto__ || Object.getPrototypeOf(Embed.prototype), 'index', this).call(this, node, offset);
    }
  }, {
    key: 'restore',
    value: function restore(node) {
      var range = null;
      var textNode = void 0;
      var text = node.data.split(GUARD_TEXT).join('');
      if (node === this.leftGuard) {
        if (this.prev instanceof _text2.default) {
          var prevLength = this.prev.length();
          this.prev.insertAt(prevLength, text);
          range = {
            startNode: this.prev.domNode,
            startOffset: prevLength + text.length
          };
        } else {
          textNode = document.createTextNode(text);
          this.parent.insertBefore(this.scroll.create(textNode), this);
          range = {
            startNode: textNode,
            startOffset: text.length
          };
        }
      } else if (node === this.rightGuard) {
        if (this.next instanceof _text2.default) {
          this.next.insertAt(0, text);
          range = {
            startNode: this.next.domNode,
            startOffset: text.length
          };
        } else {
          textNode = document.createTextNode(text);
          this.parent.insertBefore(this.scroll.create(textNode), this.next);
          range = {
            startNode: textNode,
            startOffset: text.length
          };
        }
      }
      node.data = GUARD_TEXT;
      return range;
    }
  }, {
    key: 'update',
    value: function update(mutations, context) {
      var _this2 = this;

      mutations.forEach(function (mutation) {
        if (mutation.type === 'characterData' && (mutation.target === _this2.leftGuard || mutation.target === _this2.rightGuard)) {
          var range = _this2.restore(mutation.target);
          if (range) context.range = range;
        }
      });
    }
  }]);

  return Embed;
}(_parchment.EmbedBlot);

exports.default = Embed;
//# sourceMappingURL=embed.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (14:18)\n\n\u001b[0m \u001b[90m 12 | \u001b[39m}\n \u001b[90m 13 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mScroll\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mScrollBlot\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 | \u001b[39m  static blotName \u001b[33m=\u001b[39m \u001b[32m'scroll'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 15 | \u001b[39m  static className \u001b[33m=\u001b[39m \u001b[32m'ql-editor'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 16 | \u001b[39m  static tagName \u001b[33m=\u001b[39m \u001b[32m'DIV'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 17 | \u001b[39m  static defaultChild \u001b[33m=\u001b[39m \u001b[33mBlock\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (5:18)\n\n\u001b[0m \u001b[90m 3 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mQuill\u001b[39m from \u001b[32m'../core/quill.js'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 4 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mHistory\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mModule\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 5 | \u001b[39m  static \u001b[33mDEFAULTS\u001b[39m \u001b[33m=\u001b[39m {\n \u001b[90m   | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 6 | \u001b[39m    delay\u001b[33m:\u001b[39m \u001b[35m1000\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 7 | \u001b[39m    maxStack\u001b[33m:\u001b[39m \u001b[35m100\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 8 | \u001b[39m    userOnly\u001b[33m:\u001b[39m \u001b[36mfalse\u001b[39m\u001b[0m\n");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (108:8)\n\n\u001b[0m \u001b[90m 106 | \u001b[39m    keys\u001b[33m.\u001b[39mforEach(key \u001b[33m=>\u001b[39m {\n \u001b[90m 107 | \u001b[39m      \u001b[36mconst\u001b[39m singleBinding \u001b[33m=\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 108 | \u001b[39m        \u001b[33m...\u001b[39mbinding\u001b[33m,\u001b[39m\n \u001b[90m     | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 109 | \u001b[39m        key\u001b[33m,\u001b[39m\n \u001b[90m 110 | \u001b[39m        \u001b[33m...\u001b[39mcontext\u001b[33m,\u001b[39m\n \u001b[90m 111 | \u001b[39m        \u001b[33m...\u001b[39mhandler\u001b[0m\n");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (23:27)\n\n\u001b[0m \u001b[90m 21 | \u001b[39m      \u001b[36mif\u001b[39m (normalized) {\n \u001b[90m 22 | \u001b[39m        \u001b[36mconst\u001b[39m range \u001b[33m=\u001b[39m quill\u001b[33m.\u001b[39mselection\u001b[33m.\u001b[39mnormalizedToRange(normalized)\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 23 | \u001b[39m        \u001b[36mif\u001b[39m (e\u001b[33m.\u001b[39mdataTransfer\u001b[33m?\u001b[39m\u001b[33m.\u001b[39mfiles) {\n \u001b[90m    | \u001b[39m                           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 24 | \u001b[39m          \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mupload(range\u001b[33m,\u001b[39m e\u001b[33m.\u001b[39mdataTransfer\u001b[33m.\u001b[39mfiles)\u001b[33m;\u001b[39m\n \u001b[90m 25 | \u001b[39m        }\n \u001b[90m 26 | \u001b[39m      }\u001b[0m\n");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This library modifies the diff-patch-match library by Neil Fraser
 * by removing the patch and match functionality and certain advanced
 * options in the diff function. The original license is as follows:
 *
 * ===
 *
 * Diff Match and Patch
 *
 * Copyright 2006 Google Inc.
 * http://code.google.com/p/google-diff-match-patch/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The data structure representing a diff is an array of tuples:
 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
 */
var DIFF_DELETE = -1;
var DIFF_INSERT = 1;
var DIFF_EQUAL = 0;

/**
 * Find the differences between two texts.  Simplifies the problem by stripping
 * any common prefix or suffix off the texts before diffing.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {Int|Object} [cursor_pos] Edit position in text1 or object with more info
 * @param {boolean} [cleanup] Apply semantic cleanup before returning.
 * @return {Array} Array of diff tuples.
 */
function diff_main(text1, text2, cursor_pos, cleanup, _fix_unicode) {
  // Check for equality
  if (text1 === text2) {
    if (text1) {
      return [[DIFF_EQUAL, text1]];
    }
    return [];
  }

  if (cursor_pos != null) {
    var editdiff = find_cursor_edit_diff(text1, text2, cursor_pos);
    if (editdiff) {
      return editdiff;
    }
  }

  // Trim off common prefix (speedup).
  var commonlength = diff_commonPrefix(text1, text2);
  var commonprefix = text1.substring(0, commonlength);
  text1 = text1.substring(commonlength);
  text2 = text2.substring(commonlength);

  // Trim off common suffix (speedup).
  commonlength = diff_commonSuffix(text1, text2);
  var commonsuffix = text1.substring(text1.length - commonlength);
  text1 = text1.substring(0, text1.length - commonlength);
  text2 = text2.substring(0, text2.length - commonlength);

  // Compute the diff on the middle block.
  var diffs = diff_compute_(text1, text2);

  // Restore the prefix and suffix.
  if (commonprefix) {
    diffs.unshift([DIFF_EQUAL, commonprefix]);
  }
  if (commonsuffix) {
    diffs.push([DIFF_EQUAL, commonsuffix]);
  }
  diff_cleanupMerge(diffs, _fix_unicode);
  if (cleanup) {
    diff_cleanupSemantic(diffs);
  }
  return diffs;
}

/**
 * Find the differences between two texts.  Assumes that the texts do not
 * have any common prefix or suffix.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 */
function diff_compute_(text1, text2) {
  var diffs;

  if (!text1) {
    // Just add some text (speedup).
    return [[DIFF_INSERT, text2]];
  }

  if (!text2) {
    // Just delete some text (speedup).
    return [[DIFF_DELETE, text1]];
  }

  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  var i = longtext.indexOf(shorttext);
  if (i !== -1) {
    // Shorter text is inside the longer text (speedup).
    diffs = [[DIFF_INSERT, longtext.substring(0, i)], [DIFF_EQUAL, shorttext], [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
    // Swap insertions for deletions if diff is reversed.
    if (text1.length > text2.length) {
      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
    }
    return diffs;
  }

  if (shorttext.length === 1) {
    // Single character string.
    // After the previous speedup, the character can't be an equality.
    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
  }

  // Check to see if the problem can be split in two.
  var hm = diff_halfMatch_(text1, text2);
  if (hm) {
    // A half-match was found, sort out the return data.
    var text1_a = hm[0];
    var text1_b = hm[1];
    var text2_a = hm[2];
    var text2_b = hm[3];
    var mid_common = hm[4];
    // Send both pairs off for separate processing.
    var diffs_a = diff_main(text1_a, text2_a);
    var diffs_b = diff_main(text1_b, text2_b);
    // Merge the results.
    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
  }

  return diff_bisect_(text1, text2);
}

/**
 * Find the 'middle snake' of a diff, split the problem in two
 * and return the recursively constructed diff.
 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 * @private
 */
function diff_bisect_(text1, text2) {
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length;
  var max_d = Math.ceil((text1_length + text2_length) / 2);
  var v_offset = max_d;
  var v_length = 2 * max_d;
  var v1 = new Array(v_length);
  var v2 = new Array(v_length);
  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
  // integers and undefined.
  for (var x = 0; x < v_length; x++) {
    v1[x] = -1;
    v2[x] = -1;
  }
  v1[v_offset + 1] = 0;
  v2[v_offset + 1] = 0;
  var delta = text1_length - text2_length;
  // If the total number of characters is odd, then the front path will collide
  // with the reverse path.
  var front = delta % 2 !== 0;
  // Offsets for start and end of k loop.
  // Prevents mapping of space beyond the grid.
  var k1start = 0;
  var k1end = 0;
  var k2start = 0;
  var k2end = 0;
  for (var d = 0; d < max_d; d++) {
    // Walk the front path one step.
    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
      var k1_offset = v_offset + k1;
      var x1;
      if (k1 === -d || k1 !== d && v1[k1_offset - 1] < v1[k1_offset + 1]) {
        x1 = v1[k1_offset + 1];
      } else {
        x1 = v1[k1_offset - 1] + 1;
      }
      var y1 = x1 - k1;
      while (x1 < text1_length && y1 < text2_length && text1.charAt(x1) === text2.charAt(y1)) {
        x1++;
        y1++;
      }
      v1[k1_offset] = x1;
      if (x1 > text1_length) {
        // Ran off the right of the graph.
        k1end += 2;
      } else if (y1 > text2_length) {
        // Ran off the bottom of the graph.
        k1start += 2;
      } else if (front) {
        var k2_offset = v_offset + delta - k1;
        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] !== -1) {
          // Mirror x2 onto top-left coordinate system.
          var x2 = text1_length - v2[k2_offset];
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }

    // Walk the reverse path one step.
    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
      var k2_offset = v_offset + k2;
      var x2;
      if (k2 === -d || k2 !== d && v2[k2_offset - 1] < v2[k2_offset + 1]) {
        x2 = v2[k2_offset + 1];
      } else {
        x2 = v2[k2_offset - 1] + 1;
      }
      var y2 = x2 - k2;
      while (x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) === text2.charAt(text2_length - y2 - 1)) {
        x2++;
        y2++;
      }
      v2[k2_offset] = x2;
      if (x2 > text1_length) {
        // Ran off the left of the graph.
        k2end += 2;
      } else if (y2 > text2_length) {
        // Ran off the top of the graph.
        k2start += 2;
      } else if (!front) {
        var k1_offset = v_offset + delta - k2;
        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] !== -1) {
          var x1 = v1[k1_offset];
          var y1 = v_offset + x1 - k1_offset;
          // Mirror x2 onto top-left coordinate system.
          x2 = text1_length - x2;
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }
  }
  // Diff took too long and hit the deadline or
  // number of diffs equals number of characters, no commonality at all.
  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
}

/**
 * Given the location of the 'middle snake', split the diff in two parts
 * and recurse.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} x Index of split point in text1.
 * @param {number} y Index of split point in text2.
 * @return {Array} Array of diff tuples.
 */
function diff_bisectSplit_(text1, text2, x, y) {
  var text1a = text1.substring(0, x);
  var text2a = text2.substring(0, y);
  var text1b = text1.substring(x);
  var text2b = text2.substring(y);

  // Compute both diffs serially.
  var diffs = diff_main(text1a, text2a);
  var diffsb = diff_main(text1b, text2b);

  return diffs.concat(diffsb);
}

/**
 * Determine the common prefix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the start of each
 *     string.
 */
function diff_commonPrefix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerstart = 0;
  while (pointermin < pointermid) {
    if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
      pointermin = pointermid;
      pointerstart = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }

  if (is_surrogate_pair_start(text1.charCodeAt(pointermid - 1))) {
    pointermid--;
  }

  return pointermid;
}

/**
 * Determine if the suffix of one string is the prefix of another.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of the first
 *     string and the start of the second string.
 * @private
 */
function diff_commonOverlap_(text1, text2) {
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length;
  // Eliminate the null case.
  if (text1_length == 0 || text2_length == 0) {
    return 0;
  }
  // Truncate the longer string.
  if (text1_length > text2_length) {
    text1 = text1.substring(text1_length - text2_length);
  } else if (text1_length < text2_length) {
    text2 = text2.substring(0, text1_length);
  }
  var text_length = Math.min(text1_length, text2_length);
  // Quick check for the worst case.
  if (text1 == text2) {
    return text_length;
  }

  // Start by looking for a single character match
  // and increase length until no match is found.
  // Performance analysis: http://neil.fraser.name/news/2010/11/04/
  var best = 0;
  var length = 1;
  while (true) {
    var pattern = text1.substring(text_length - length);
    var found = text2.indexOf(pattern);
    if (found == -1) {
      return best;
    }
    length += found;
    if (found == 0 || text1.substring(text_length - length) == text2.substring(0, length)) {
      best = length;
      length++;
    }
  }
}

/**
 * Determine the common suffix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of each string.
 */
function diff_commonSuffix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.slice(-1) !== text2.slice(-1)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerend = 0;
  while (pointermin < pointermid) {
    if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
      pointermin = pointermid;
      pointerend = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }

  if (is_surrogate_pair_end(text1.charCodeAt(text1.length - pointermid))) {
    pointermid--;
  }

  return pointermid;
}

/**
 * Do the two texts share a substring which is at least half the length of the
 * longer text?
 * This speedup can produce non-minimal diffs.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {Array.<string>} Five element Array, containing the prefix of
 *     text1, the suffix of text1, the prefix of text2, the suffix of
 *     text2 and the common middle.  Or null if there was no match.
 */
function diff_halfMatch_(text1, text2) {
  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
    return null; // Pointless.
  }

  /**
   * Does a substring of shorttext exist within longtext such that the substring
   * is at least half the length of longtext?
   * Closure, but does not reference any external variables.
   * @param {string} longtext Longer string.
   * @param {string} shorttext Shorter string.
   * @param {number} i Start index of quarter length substring within longtext.
   * @return {Array.<string>} Five element Array, containing the prefix of
   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
   *     of shorttext and the common middle.  Or null if there was no match.
   * @private
   */
  function diff_halfMatchI_(longtext, shorttext, i) {
    // Start with a 1/4 length substring at position i as a seed.
    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
    var j = -1;
    var best_common = "";
    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
    while ((j = shorttext.indexOf(seed, j + 1)) !== -1) {
      var prefixLength = diff_commonPrefix(longtext.substring(i), shorttext.substring(j));
      var suffixLength = diff_commonSuffix(longtext.substring(0, i), shorttext.substring(0, j));
      if (best_common.length < suffixLength + prefixLength) {
        best_common = shorttext.substring(j - suffixLength, j) + shorttext.substring(j, j + prefixLength);
        best_longtext_a = longtext.substring(0, i - suffixLength);
        best_longtext_b = longtext.substring(i + prefixLength);
        best_shorttext_a = shorttext.substring(0, j - suffixLength);
        best_shorttext_b = shorttext.substring(j + prefixLength);
      }
    }
    if (best_common.length * 2 >= longtext.length) {
      return [best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b, best_common];
    } else {
      return null;
    }
  }

  // First check if the second quarter is the seed for a half-match.
  var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));
  // Check again based on the third quarter.
  var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));
  var hm;
  if (!hm1 && !hm2) {
    return null;
  } else if (!hm2) {
    hm = hm1;
  } else if (!hm1) {
    hm = hm2;
  } else {
    // Both matched.  Select the longest.
    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
  }

  // A half-match was found, sort out the return data.
  var text1_a, text1_b, text2_a, text2_b;
  if (text1.length > text2.length) {
    text1_a = hm[0];
    text1_b = hm[1];
    text2_a = hm[2];
    text2_b = hm[3];
  } else {
    text2_a = hm[0];
    text2_b = hm[1];
    text1_a = hm[2];
    text1_b = hm[3];
  }
  var mid_common = hm[4];
  return [text1_a, text1_b, text2_a, text2_b, mid_common];
}

/**
 * Reduce the number of edits by eliminating semantically trivial equalities.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */
function diff_cleanupSemantic(diffs) {
  var changes = false;
  var equalities = []; // Stack of indices where equalities are found.
  var equalitiesLength = 0; // Keeping our own length var is faster in JS.
  /** @type {?string} */
  var lastequality = null;
  // Always equal to diffs[equalities[equalitiesLength - 1]][1]
  var pointer = 0; // Index of current position.
  // Number of characters that changed prior to the equality.
  var length_insertions1 = 0;
  var length_deletions1 = 0;
  // Number of characters that changed after the equality.
  var length_insertions2 = 0;
  var length_deletions2 = 0;
  while (pointer < diffs.length) {
    if (diffs[pointer][0] == DIFF_EQUAL) {
      // Equality found.
      equalities[equalitiesLength++] = pointer;
      length_insertions1 = length_insertions2;
      length_deletions1 = length_deletions2;
      length_insertions2 = 0;
      length_deletions2 = 0;
      lastequality = diffs[pointer][1];
    } else {
      // An insertion or deletion.
      if (diffs[pointer][0] == DIFF_INSERT) {
        length_insertions2 += diffs[pointer][1].length;
      } else {
        length_deletions2 += diffs[pointer][1].length;
      }
      // Eliminate an equality that is smaller or equal to the edits on both
      // sides of it.
      if (lastequality && lastequality.length <= Math.max(length_insertions1, length_deletions1) && lastequality.length <= Math.max(length_insertions2, length_deletions2)) {
        // Duplicate record.
        diffs.splice(equalities[equalitiesLength - 1], 0, [DIFF_DELETE, lastequality]);
        // Change second copy to insert.
        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
        // Throw away the equality we just deleted.
        equalitiesLength--;
        // Throw away the previous equality (it needs to be reevaluated).
        equalitiesLength--;
        pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
        length_insertions1 = 0; // Reset the counters.
        length_deletions1 = 0;
        length_insertions2 = 0;
        length_deletions2 = 0;
        lastequality = null;
        changes = true;
      }
    }
    pointer++;
  }

  // Normalize the diff.
  if (changes) {
    diff_cleanupMerge(diffs);
  }
  diff_cleanupSemanticLossless(diffs);

  // Find any overlaps between deletions and insertions.
  // e.g: <del>abcxxx</del><ins>xxxdef</ins>
  //   -> <del>abc</del>xxx<ins>def</ins>
  // e.g: <del>xxxabc</del><ins>defxxx</ins>
  //   -> <ins>def</ins>xxx<del>abc</del>
  // Only extract an overlap if it is as big as the edit ahead or behind it.
  pointer = 1;
  while (pointer < diffs.length) {
    if (diffs[pointer - 1][0] == DIFF_DELETE && diffs[pointer][0] == DIFF_INSERT) {
      var deletion = diffs[pointer - 1][1];
      var insertion = diffs[pointer][1];
      var overlap_length1 = diff_commonOverlap_(deletion, insertion);
      var overlap_length2 = diff_commonOverlap_(insertion, deletion);
      if (overlap_length1 >= overlap_length2) {
        if (overlap_length1 >= deletion.length / 2 || overlap_length1 >= insertion.length / 2) {
          // Overlap found.  Insert an equality and trim the surrounding edits.
          diffs.splice(pointer, 0, [DIFF_EQUAL, insertion.substring(0, overlap_length1)]);
          diffs[pointer - 1][1] = deletion.substring(0, deletion.length - overlap_length1);
          diffs[pointer + 1][1] = insertion.substring(overlap_length1);
          pointer++;
        }
      } else {
        if (overlap_length2 >= deletion.length / 2 || overlap_length2 >= insertion.length / 2) {
          // Reverse overlap found.
          // Insert an equality and swap and trim the surrounding edits.
          diffs.splice(pointer, 0, [DIFF_EQUAL, deletion.substring(0, overlap_length2)]);
          diffs[pointer - 1][0] = DIFF_INSERT;
          diffs[pointer - 1][1] = insertion.substring(0, insertion.length - overlap_length2);
          diffs[pointer + 1][0] = DIFF_DELETE;
          diffs[pointer + 1][1] = deletion.substring(overlap_length2);
          pointer++;
        }
      }
      pointer++;
    }
    pointer++;
  }
}

var nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
var whitespaceRegex_ = /\s/;
var linebreakRegex_ = /[\r\n]/;
var blanklineEndRegex_ = /\n\r?\n$/;
var blanklineStartRegex_ = /^\r?\n\r?\n/;

/**
 * Look for single edits surrounded on both sides by equalities
 * which can be shifted sideways to align the edit to a word boundary.
 * e.g: The c<ins>at c</ins>ame. -> The <ins>cat </ins>came.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */
function diff_cleanupSemanticLossless(diffs) {
  /**
   * Given two strings, compute a score representing whether the internal
   * boundary falls on logical boundaries.
   * Scores range from 6 (best) to 0 (worst).
   * Closure, but does not reference any external variables.
   * @param {string} one First string.
   * @param {string} two Second string.
   * @return {number} The score.
   * @private
   */
  function diff_cleanupSemanticScore_(one, two) {
    if (!one || !two) {
      // Edges are the best.
      return 6;
    }

    // Each port of this function behaves slightly differently due to
    // subtle differences in each language's definition of things like
    // 'whitespace'.  Since this function's purpose is largely cosmetic,
    // the choice has been made to use each language's native features
    // rather than force total conformity.
    var char1 = one.charAt(one.length - 1);
    var char2 = two.charAt(0);
    var nonAlphaNumeric1 = char1.match(nonAlphaNumericRegex_);
    var nonAlphaNumeric2 = char2.match(nonAlphaNumericRegex_);
    var whitespace1 = nonAlphaNumeric1 && char1.match(whitespaceRegex_);
    var whitespace2 = nonAlphaNumeric2 && char2.match(whitespaceRegex_);
    var lineBreak1 = whitespace1 && char1.match(linebreakRegex_);
    var lineBreak2 = whitespace2 && char2.match(linebreakRegex_);
    var blankLine1 = lineBreak1 && one.match(blanklineEndRegex_);
    var blankLine2 = lineBreak2 && two.match(blanklineStartRegex_);

    if (blankLine1 || blankLine2) {
      // Five points for blank lines.
      return 5;
    } else if (lineBreak1 || lineBreak2) {
      // Four points for line breaks.
      return 4;
    } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
      // Three points for end of sentences.
      return 3;
    } else if (whitespace1 || whitespace2) {
      // Two points for whitespace.
      return 2;
    } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
      // One point for non-alphanumeric.
      return 1;
    }
    return 0;
  }

  var pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      var equality1 = diffs[pointer - 1][1];
      var edit = diffs[pointer][1];
      var equality2 = diffs[pointer + 1][1];

      // First, shift the edit as far left as possible.
      var commonOffset = diff_commonSuffix(equality1, edit);
      if (commonOffset) {
        var commonString = edit.substring(edit.length - commonOffset);
        equality1 = equality1.substring(0, equality1.length - commonOffset);
        edit = commonString + edit.substring(0, edit.length - commonOffset);
        equality2 = commonString + equality2;
      }

      // Second, step character by character right, looking for the best fit.
      var bestEquality1 = equality1;
      var bestEdit = edit;
      var bestEquality2 = equality2;
      var bestScore = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
      while (edit.charAt(0) === equality2.charAt(0)) {
        equality1 += edit.charAt(0);
        edit = edit.substring(1) + equality2.charAt(0);
        equality2 = equality2.substring(1);
        var score = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
        // The >= encourages trailing rather than leading whitespace on edits.
        if (score >= bestScore) {
          bestScore = score;
          bestEquality1 = equality1;
          bestEdit = edit;
          bestEquality2 = equality2;
        }
      }

      if (diffs[pointer - 1][1] != bestEquality1) {
        // We have an improvement, save it back to the diff.
        if (bestEquality1) {
          diffs[pointer - 1][1] = bestEquality1;
        } else {
          diffs.splice(pointer - 1, 1);
          pointer--;
        }
        diffs[pointer][1] = bestEdit;
        if (bestEquality2) {
          diffs[pointer + 1][1] = bestEquality2;
        } else {
          diffs.splice(pointer + 1, 1);
          pointer--;
        }
      }
    }
    pointer++;
  }
}

/**
 * Reorder and merge like edit sections.  Merge equalities.
 * Any edit section can move as long as it doesn't cross an equality.
 * @param {Array} diffs Array of diff tuples.
 * @param {boolean} fix_unicode Whether to normalize to a unicode-correct diff
 */
function diff_cleanupMerge(diffs, fix_unicode) {
  diffs.push([DIFF_EQUAL, ""]); // Add a dummy entry at the end.
  var pointer = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = "";
  var text_insert = "";
  var commonlength;
  while (pointer < diffs.length) {
    if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
      diffs.splice(pointer, 1);
      continue;
    }
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:
        count_insert++;
        text_insert += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_EQUAL:
        var previous_equality = pointer - count_insert - count_delete - 1;
        if (fix_unicode) {
          // prevent splitting of unicode surrogate pairs.  when fix_unicode is true,
          // we assume that the old and new text in the diff are complete and correct
          // unicode-encoded JS strings, but the tuple boundaries may fall between
          // surrogate pairs.  we fix this by shaving off stray surrogates from the end
          // of the previous equality and the beginning of this equality.  this may create
          // empty equalities or a common prefix or suffix.  for example, if AB and AC are
          // emojis, `[[0, 'A'], [-1, 'BA'], [0, 'C']]` would turn into deleting 'ABAC' and
          // inserting 'AC', and then the common suffix 'AC' will be eliminated.  in this
          // particular case, both equalities go away, we absorb any previous inequalities,
          // and we keep scanning for the next equality before rewriting the tuples.
          if (previous_equality >= 0 && ends_with_pair_start(diffs[previous_equality][1])) {
            var stray = diffs[previous_equality][1].slice(-1);
            diffs[previous_equality][1] = diffs[previous_equality][1].slice(0, -1);
            text_delete = stray + text_delete;
            text_insert = stray + text_insert;
            if (!diffs[previous_equality][1]) {
              // emptied out previous equality, so delete it and include previous delete/insert
              diffs.splice(previous_equality, 1);
              pointer--;
              var k = previous_equality - 1;
              if (diffs[k] && diffs[k][0] === DIFF_INSERT) {
                count_insert++;
                text_insert = diffs[k][1] + text_insert;
                k--;
              }
              if (diffs[k] && diffs[k][0] === DIFF_DELETE) {
                count_delete++;
                text_delete = diffs[k][1] + text_delete;
                k--;
              }
              previous_equality = k;
            }
          }
          if (starts_with_pair_end(diffs[pointer][1])) {
            var stray = diffs[pointer][1].charAt(0);
            diffs[pointer][1] = diffs[pointer][1].slice(1);
            text_delete += stray;
            text_insert += stray;
          }
        }
        if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
          // for empty equality not at end, wait for next equality
          diffs.splice(pointer, 1);
          break;
        }
        if (text_delete.length > 0 || text_insert.length > 0) {
          // note that diff_commonPrefix and diff_commonSuffix are unicode-aware
          if (text_delete.length > 0 && text_insert.length > 0) {
            // Factor out any common prefixes.
            commonlength = diff_commonPrefix(text_insert, text_delete);
            if (commonlength !== 0) {
              if (previous_equality >= 0) {
                diffs[previous_equality][1] += text_insert.substring(0, commonlength);
              } else {
                diffs.splice(0, 0, [DIFF_EQUAL, text_insert.substring(0, commonlength)]);
                pointer++;
              }
              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            }
            // Factor out any common suffixes.
            commonlength = diff_commonSuffix(text_insert, text_delete);
            if (commonlength !== 0) {
              diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
              text_insert = text_insert.substring(0, text_insert.length - commonlength);
              text_delete = text_delete.substring(0, text_delete.length - commonlength);
            }
          }
          // Delete the offending records and add the merged ones.
          var n = count_insert + count_delete;
          if (text_delete.length === 0 && text_insert.length === 0) {
            diffs.splice(pointer - n, n);
            pointer = pointer - n;
          } else if (text_delete.length === 0) {
            diffs.splice(pointer - n, n, [DIFF_INSERT, text_insert]);
            pointer = pointer - n + 1;
          } else if (text_insert.length === 0) {
            diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete]);
            pointer = pointer - n + 1;
          } else {
            diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);
            pointer = pointer - n + 2;
          }
        }
        if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {
          // Merge this equality with the previous one.
          diffs[pointer - 1][1] += diffs[pointer][1];
          diffs.splice(pointer, 1);
        } else {
          pointer++;
        }
        count_insert = 0;
        count_delete = 0;
        text_delete = "";
        text_insert = "";
        break;
    }
  }
  if (diffs[diffs.length - 1][1] === "") {
    diffs.pop(); // Remove the dummy entry at the end.
  }

  // Second pass: look for single edits surrounded on both sides by equalities
  // which can be shifted sideways to eliminate an equality.
  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
  var changes = false;
  pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) === diffs[pointer - 1][1]) {
        // Shift the edit over the previous equality.
        diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
        diffs.splice(pointer - 1, 1);
        changes = true;
      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
        // Shift the edit over the next equality.
        diffs[pointer - 1][1] += diffs[pointer + 1][1];
        diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
        diffs.splice(pointer + 1, 1);
        changes = true;
      }
    }
    pointer++;
  }
  // If shifts were made, the diff needs reordering and another shift sweep.
  if (changes) {
    diff_cleanupMerge(diffs, fix_unicode);
  }
}

function is_surrogate_pair_start(charCode) {
  return charCode >= 0xd800 && charCode <= 0xdbff;
}

function is_surrogate_pair_end(charCode) {
  return charCode >= 0xdc00 && charCode <= 0xdfff;
}

function starts_with_pair_end(str) {
  return is_surrogate_pair_end(str.charCodeAt(0));
}

function ends_with_pair_start(str) {
  return is_surrogate_pair_start(str.charCodeAt(str.length - 1));
}

function remove_empty_tuples(tuples) {
  var ret = [];
  for (var i = 0; i < tuples.length; i++) {
    if (tuples[i][1].length > 0) {
      ret.push(tuples[i]);
    }
  }
  return ret;
}

function make_edit_splice(before, oldMiddle, newMiddle, after) {
  if (ends_with_pair_start(before) || starts_with_pair_end(after)) {
    return null;
  }
  return remove_empty_tuples([[DIFF_EQUAL, before], [DIFF_DELETE, oldMiddle], [DIFF_INSERT, newMiddle], [DIFF_EQUAL, after]]);
}

function find_cursor_edit_diff(oldText, newText, cursor_pos) {
  // note: this runs after equality check has ruled out exact equality
  var oldRange = typeof cursor_pos === "number" ? { index: cursor_pos, length: 0 } : cursor_pos.oldRange;
  var newRange = typeof cursor_pos === "number" ? null : cursor_pos.newRange;
  // take into account the old and new selection to generate the best diff
  // possible for a text edit.  for example, a text change from "xxx" to "xx"
  // could be a delete or forwards-delete of any one of the x's, or the
  // result of selecting two of the x's and typing "x".
  var oldLength = oldText.length;
  var newLength = newText.length;
  if (oldRange.length === 0 && (newRange === null || newRange.length === 0)) {
    // see if we have an insert or delete before or after cursor
    var oldCursor = oldRange.index;
    var oldBefore = oldText.slice(0, oldCursor);
    var oldAfter = oldText.slice(oldCursor);
    var maybeNewCursor = newRange ? newRange.index : null;
    editBefore: {
      // is this an insert or delete right before oldCursor?
      var newCursor = oldCursor + newLength - oldLength;
      if (maybeNewCursor !== null && maybeNewCursor !== newCursor) {
        break editBefore;
      }
      if (newCursor < 0 || newCursor > newLength) {
        break editBefore;
      }
      var newBefore = newText.slice(0, newCursor);
      var newAfter = newText.slice(newCursor);
      if (newAfter !== oldAfter) {
        break editBefore;
      }
      var prefixLength = Math.min(oldCursor, newCursor);
      var oldPrefix = oldBefore.slice(0, prefixLength);
      var newPrefix = newBefore.slice(0, prefixLength);
      if (oldPrefix !== newPrefix) {
        break editBefore;
      }
      var oldMiddle = oldBefore.slice(prefixLength);
      var newMiddle = newBefore.slice(prefixLength);
      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldAfter);
    }
    editAfter: {
      // is this an insert or delete right after oldCursor?
      if (maybeNewCursor !== null && maybeNewCursor !== oldCursor) {
        break editAfter;
      }
      var cursor = oldCursor;
      var newBefore = newText.slice(0, cursor);
      var newAfter = newText.slice(cursor);
      if (newBefore !== oldBefore) {
        break editAfter;
      }
      var suffixLength = Math.min(oldLength - cursor, newLength - cursor);
      var oldSuffix = oldAfter.slice(oldAfter.length - suffixLength);
      var newSuffix = newAfter.slice(newAfter.length - suffixLength);
      if (oldSuffix !== newSuffix) {
        break editAfter;
      }
      var oldMiddle = oldAfter.slice(0, oldAfter.length - suffixLength);
      var newMiddle = newAfter.slice(0, newAfter.length - suffixLength);
      return make_edit_splice(oldBefore, oldMiddle, newMiddle, oldSuffix);
    }
  }
  if (oldRange.length > 0 && newRange && newRange.length === 0) {
    replaceRange: {
      // see if diff could be a splice of the old selection range
      var oldPrefix = oldText.slice(0, oldRange.index);
      var oldSuffix = oldText.slice(oldRange.index + oldRange.length);
      var prefixLength = oldPrefix.length;
      var suffixLength = oldSuffix.length;
      if (newLength < prefixLength + suffixLength) {
        break replaceRange;
      }
      var newPrefix = newText.slice(0, prefixLength);
      var newSuffix = newText.slice(newLength - suffixLength);
      if (oldPrefix !== newPrefix || oldSuffix !== newSuffix) {
        break replaceRange;
      }
      var oldMiddle = oldText.slice(prefixLength, oldLength - suffixLength);
      var newMiddle = newText.slice(prefixLength, newLength - suffixLength);
      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldSuffix);
    }
  }

  return null;
}

function diff(text1, text2, cursor_pos, cleanup) {
  // only pass fix_unicode=true at the top level, not when diff_main is
  // recursively invoked
  return diff_main(text1, text2, cursor_pos, cleanup, true);
}

diff.INSERT = DIFF_INSERT;
diff.DELETE = DIFF_DELETE;
diff.EQUAL = DIFF_EQUAL;

module.exports = diff;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
var cloneDeep = __webpack_require__(14);
var isEqual = __webpack_require__(16);
var AttributeMap;
(function (AttributeMap) {
    function compose() {
        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var keepNull = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if ((typeof a === "undefined" ? "undefined" : _typeof(a)) !== 'object') {
            a = {};
        }
        if ((typeof b === "undefined" ? "undefined" : _typeof(b)) !== 'object') {
            b = {};
        }
        var attributes = cloneDeep(b);
        if (!keepNull) {
            attributes = Object.keys(attributes).reduce(function (copy, key) {
                if (attributes[key] != null) {
                    copy[key] = attributes[key];
                }
                return copy;
            }, {});
        }
        for (var key in a) {
            if (a[key] !== undefined && b[key] === undefined) {
                attributes[key] = a[key];
            }
        }
        return Object.keys(attributes).length > 0 ? attributes : undefined;
    }
    AttributeMap.compose = compose;
    function diff() {
        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if ((typeof a === "undefined" ? "undefined" : _typeof(a)) !== 'object') {
            a = {};
        }
        if ((typeof b === "undefined" ? "undefined" : _typeof(b)) !== 'object') {
            b = {};
        }
        var attributes = Object.keys(a).concat(Object.keys(b)).reduce(function (attrs, key) {
            if (!isEqual(a[key], b[key])) {
                attrs[key] = b[key] === undefined ? null : b[key];
            }
            return attrs;
        }, {});
        return Object.keys(attributes).length > 0 ? attributes : undefined;
    }
    AttributeMap.diff = diff;
    function invert() {
        var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        attr = attr || {};
        var baseInverted = Object.keys(base).reduce(function (memo, key) {
            if (base[key] !== attr[key] && attr[key] !== undefined) {
                memo[key] = base[key];
            }
            return memo;
        }, {});
        return Object.keys(attr).reduce(function (memo, key) {
            if (attr[key] !== base[key] && base[key] === undefined) {
                memo[key] = null;
            }
            return memo;
        }, baseInverted);
    }
    AttributeMap.invert = invert;
    function transform(a, b) {
        var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if ((typeof a === "undefined" ? "undefined" : _typeof(a)) !== 'object') {
            return b;
        }
        if ((typeof b === "undefined" ? "undefined" : _typeof(b)) !== 'object') {
            return undefined;
        }
        if (!priority) {
            return b; // b simply overwrites us without priority
        }
        var attributes = Object.keys(b).reduce(function (attrs, key) {
            if (a[key] === undefined) {
                attrs[key] = b[key]; // null is a valid value
            }
            return attrs;
        }, {});
        return Object.keys(attributes).length > 0 ? attributes : undefined;
    }
    AttributeMap.transform = transform;
})(AttributeMap || (AttributeMap = {}));
exports.default = AttributeMap;
//# sourceMappingURL=AttributeMap.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Op_1 = __webpack_require__(17);

var Iterator = function () {
    function Iterator(ops) {
        _classCallCheck(this, Iterator);

        this.ops = ops;
        this.index = 0;
        this.offset = 0;
    }

    _createClass(Iterator, [{
        key: "hasNext",
        value: function hasNext() {
            return this.peekLength() < Infinity;
        }
    }, {
        key: "next",
        value: function next(length) {
            if (!length) {
                length = Infinity;
            }
            var nextOp = this.ops[this.index];
            if (nextOp) {
                var offset = this.offset;
                var opLength = Op_1.default.length(nextOp);
                if (length >= opLength - offset) {
                    length = opLength - offset;
                    this.index += 1;
                    this.offset = 0;
                } else {
                    this.offset += length;
                }
                if (typeof nextOp.delete === 'number') {
                    return { delete: length };
                } else {
                    var retOp = {};
                    if (nextOp.attributes) {
                        retOp.attributes = nextOp.attributes;
                    }
                    if (typeof nextOp.retain === 'number') {
                        retOp.retain = length;
                    } else if (_typeof(nextOp.retain) === 'object' && nextOp.retain !== null) {
                        // offset should === 0, length should === 1
                        retOp.retain = nextOp.retain;
                    } else if (typeof nextOp.insert === 'string') {
                        retOp.insert = nextOp.insert.substr(offset, length);
                    } else {
                        // offset should === 0, length should === 1
                        retOp.insert = nextOp.insert;
                    }
                    return retOp;
                }
            } else {
                return { retain: Infinity };
            }
        }
    }, {
        key: "peek",
        value: function peek() {
            return this.ops[this.index];
        }
    }, {
        key: "peekLength",
        value: function peekLength() {
            if (this.ops[this.index]) {
                // Should never return 0 if our index is being managed correctly
                return Op_1.default.length(this.ops[this.index]) - this.offset;
            } else {
                return Infinity;
            }
        }
    }, {
        key: "peekType",
        value: function peekType() {
            var op = this.ops[this.index];
            if (op) {
                if (typeof op.delete === 'number') {
                    return 'delete';
                } else if (typeof op.retain === 'number' || _typeof(op.retain) === 'object' && op.retain !== null) {
                    return 'retain';
                } else {
                    return 'insert';
                }
            }
            return 'retain';
        }
    }, {
        key: "rest",
        value: function rest() {
            if (!this.hasNext()) {
                return [];
            } else if (this.offset === 0) {
                return this.ops.slice(this.index);
            } else {
                var offset = this.offset;
                var index = this.index;
                var next = this.next();
                var rest = this.ops.slice(this.index);
                this.offset = offset;
                this.index = index;
                return [next].concat(rest);
            }
        }
    }]);

    return Iterator;
}();

exports.default = Iterator;
//# sourceMappingURL=OpIterator.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (77:25)\n\n\u001b[0m \u001b[90m 75 | \u001b[39m    \u001b[36mreturn\u001b[39m event\u001b[33m.\u001b[39mdata\u001b[33m;\u001b[39m\n \u001b[90m 76 | \u001b[39m  }\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 77 | \u001b[39m  \u001b[36mif\u001b[39m (event\u001b[33m.\u001b[39mdataTransfer\u001b[33m?\u001b[39m\u001b[33m.\u001b[39mtypes\u001b[33m.\u001b[39mincludes(\u001b[32m'text/plain'\u001b[39m)) {\n \u001b[90m    | \u001b[39m                         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 78 | \u001b[39m    \u001b[36mreturn\u001b[39m event\u001b[33m.\u001b[39mdataTransfer\u001b[33m.\u001b[39mgetData(\u001b[32m'text/plain'\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 79 | \u001b[39m  }\n \u001b[90m 80 | \u001b[39m  \u001b[36mreturn\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (23:14)\n\n\u001b[0m \u001b[90m 21 | \u001b[39m}\u001b[33m;\u001b[39m\n \u001b[90m 22 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mUINode\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mModule\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 23 | \u001b[39m  isListening \u001b[33m=\u001b[39m \u001b[36mfalse\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 24 | \u001b[39m  selectionChangeDeadline \u001b[33m=\u001b[39m \u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 25 | \u001b[39m  constructor(quill\u001b[33m,\u001b[39m options) {\n \u001b[90m 26 | \u001b[39m    \u001b[36msuper\u001b[39m(quill\u001b[33m,\u001b[39m options)\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlignStyle = exports.AlignClass = exports.AlignAttribute = undefined;

var _parchment = __webpack_require__(0);

var config = {
  scope: _parchment.Scope.BLOCK,
  whitelist: ['right', 'center', 'justify']
};
var AlignAttribute = new _parchment.Attributor('align', 'align', config);
var AlignClass = new _parchment.ClassAttributor('align', 'ql-align', config);
var AlignStyle = new _parchment.StyleAttributor('align', 'text-align', config);
exports.AlignAttribute = AlignAttribute;
exports.AlignClass = AlignClass;
exports.AlignStyle = AlignStyle;
//# sourceMappingURL=align.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirectionStyle = exports.DirectionClass = exports.DirectionAttribute = undefined;

var _parchment = __webpack_require__(0);

var config = {
  scope: _parchment.Scope.BLOCK,
  whitelist: ['rtl']
};
var DirectionAttribute = new _parchment.Attributor('direction', 'dir', config);
var DirectionClass = new _parchment.ClassAttributor('direction', 'ql-direction', config);
var DirectionStyle = new _parchment.StyleAttributor('direction', 'direction', config);
exports.DirectionAttribute = DirectionAttribute;
exports.DirectionClass = DirectionClass;
exports.DirectionStyle = DirectionStyle;
//# sourceMappingURL=direction.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndentAttributor = function (_ClassAttributor) {
  _inherits(IndentAttributor, _ClassAttributor);

  function IndentAttributor() {
    _classCallCheck(this, IndentAttributor);

    return _possibleConstructorReturn(this, (IndentAttributor.__proto__ || Object.getPrototypeOf(IndentAttributor)).apply(this, arguments));
  }

  _createClass(IndentAttributor, [{
    key: 'add',
    value: function add(node, value) {
      var normalizedValue = 0;
      if (value === '+1' || value === '-1') {
        var indent = this.value(node) || 0;
        normalizedValue = value === '+1' ? indent + 1 : indent - 1;
      } else if (typeof value === 'number') {
        normalizedValue = value;
      }
      if (normalizedValue === 0) {
        this.remove(node);
        return true;
      }
      return _get(IndentAttributor.prototype.__proto__ || Object.getPrototypeOf(IndentAttributor.prototype), 'add', this).call(this, node, normalizedValue.toString());
    }
  }, {
    key: 'canAdd',
    value: function canAdd(node, value) {
      return _get(IndentAttributor.prototype.__proto__ || Object.getPrototypeOf(IndentAttributor.prototype), 'canAdd', this).call(this, node, value) || _get(IndentAttributor.prototype.__proto__ || Object.getPrototypeOf(IndentAttributor.prototype), 'canAdd', this).call(this, node, parseInt(value, 10));
    }
  }, {
    key: 'value',
    value: function value(node) {
      return parseInt(_get(IndentAttributor.prototype.__proto__ || Object.getPrototypeOf(IndentAttributor.prototype), 'value', this).call(this, node), 10) || undefined; // Don't return NaN
    }
  }]);

  return IndentAttributor;
}(_parchment.ClassAttributor);

var IndentClass = new IndentAttributor('indent', 'ql-indent', {
  scope: _parchment.Scope.BLOCK,
  // @ts-expect-error
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});
exports.default = IndentClass;
//# sourceMappingURL=indent.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (3:18)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mBlock\u001b[39m from \u001b[32m'../blots/block.js'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 2 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mBlockquote\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mBlock\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 | \u001b[39m  static blotName \u001b[33m=\u001b[39m \u001b[32m'blockquote'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 4 | \u001b[39m  static tagName \u001b[33m=\u001b[39m \u001b[32m'blockquote'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 5 | \u001b[39m}\n \u001b[90m 6 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[33mBlockquote\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (3:18)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mBlock\u001b[39m from \u001b[32m'../blots/block.js'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 2 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mHeader\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mBlock\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 | \u001b[39m  static blotName \u001b[33m=\u001b[39m \u001b[32m'header'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 4 | \u001b[39m  static tagName \u001b[33m=\u001b[39m [\u001b[32m'H1'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'H2'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'H3'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'H4'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'H5'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'H6'\u001b[39m]\u001b[33m;\u001b[39m\n \u001b[90m 5 | \u001b[39m  static formats(domNode) {\n \u001b[90m 6 | \u001b[39m    \u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtagName\u001b[33m.\u001b[39mindexOf(domNode\u001b[33m.\u001b[39mtagName) \u001b[33m+\u001b[39m \u001b[35m1\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ListContainer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _block = __webpack_require__(5);

var _block2 = _interopRequireDefault(_block);

var _container = __webpack_require__(10);

var _container2 = _interopRequireDefault(_container);

var _quill = __webpack_require__(1);

var _quill2 = _interopRequireDefault(_quill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListContainer = function (_Container) {
  _inherits(ListContainer, _Container);

  function ListContainer() {
    _classCallCheck(this, ListContainer);

    return _possibleConstructorReturn(this, (ListContainer.__proto__ || Object.getPrototypeOf(ListContainer)).apply(this, arguments));
  }

  return ListContainer;
}(_container2.default);

ListContainer.blotName = 'list-container';
ListContainer.tagName = 'OL';

var ListItem = function (_Block) {
  _inherits(ListItem, _Block);

  _createClass(ListItem, null, [{
    key: 'create',
    value: function create(value) {
      var node = _get(ListItem.__proto__ || Object.getPrototypeOf(ListItem), 'create', this).call(this);
      node.setAttribute('data-list', value);
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      return domNode.getAttribute('data-list') || undefined;
    }
  }, {
    key: 'register',
    value: function register() {
      _quill2.default.register(ListContainer);
    }
  }]);

  function ListItem(scroll, domNode) {
    _classCallCheck(this, ListItem);

    var _this2 = _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, scroll, domNode));

    var ui = domNode.ownerDocument.createElement('span');
    var listEventHandler = function listEventHandler(e) {
      if (!scroll.isEnabled()) return;
      var format = _this2.statics.formats(domNode, scroll);
      if (format === 'checked') {
        _this2.format('list', 'unchecked');
        e.preventDefault();
      } else if (format === 'unchecked') {
        _this2.format('list', 'checked');
        e.preventDefault();
      }
    };
    ui.addEventListener('mousedown', listEventHandler);
    ui.addEventListener('touchstart', listEventHandler);
    _this2.attachUI(ui);
    return _this2;
  }

  _createClass(ListItem, [{
    key: 'format',
    value: function format(name, value) {
      if (name === this.statics.blotName && value) {
        this.domNode.setAttribute('data-list', value);
      } else {
        _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'format', this).call(this, name, value);
      }
    }
  }]);

  return ListItem;
}(_block2.default);

ListItem.blotName = 'list';
ListItem.tagName = 'LI';
ListContainer.allowedChildren = [ListItem];
ListItem.requiredContainer = ListContainer;
exports.ListContainer = ListContainer;
exports.default = ListItem;
//# sourceMappingURL=list.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundStyle = exports.BackgroundClass = undefined;

var _parchment = __webpack_require__(0);

var _color = __webpack_require__(18);

var BackgroundClass = new _parchment.ClassAttributor('background', 'ql-bg', {
  scope: _parchment.Scope.INLINE
});
var BackgroundStyle = new _color.ColorAttributor('background', 'background-color', {
  scope: _parchment.Scope.INLINE
});
exports.BackgroundClass = BackgroundClass;
exports.BackgroundStyle = BackgroundStyle;
//# sourceMappingURL=background.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontClass = exports.FontStyle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var config = {
  scope: _parchment.Scope.INLINE,
  whitelist: ['serif', 'monospace']
};
var FontClass = new _parchment.ClassAttributor('font', 'ql-font', config);

var FontStyleAttributor = function (_StyleAttributor) {
  _inherits(FontStyleAttributor, _StyleAttributor);

  function FontStyleAttributor() {
    _classCallCheck(this, FontStyleAttributor);

    return _possibleConstructorReturn(this, (FontStyleAttributor.__proto__ || Object.getPrototypeOf(FontStyleAttributor)).apply(this, arguments));
  }

  _createClass(FontStyleAttributor, [{
    key: 'value',
    value: function value(node) {
      return _get(FontStyleAttributor.prototype.__proto__ || Object.getPrototypeOf(FontStyleAttributor.prototype), 'value', this).call(this, node).replace(/["']/g, '');
    }
  }]);

  return FontStyleAttributor;
}(_parchment.StyleAttributor);

var FontStyle = new FontStyleAttributor('font', 'font-family', config);
exports.FontStyle = FontStyle;
exports.FontClass = FontClass;
//# sourceMappingURL=font.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SizeStyle = exports.SizeClass = undefined;

var _parchment = __webpack_require__(0);

var SizeClass = new _parchment.ClassAttributor('size', 'ql-size', {
  scope: _parchment.Scope.INLINE,
  whitelist: ['small', 'large', 'huge']
});
var SizeStyle = new _parchment.StyleAttributor('size', 'font-size', {
  scope: _parchment.Scope.INLINE,
  whitelist: ['10px', '18px', '32px']
});
exports.SizeClass = SizeClass;
exports.SizeStyle = SizeStyle;
//# sourceMappingURL=size.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (3:18)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mInline\u001b[39m from \u001b[32m'../blots/inline.js'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 2 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mBold\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mInline\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 | \u001b[39m  static blotName \u001b[33m=\u001b[39m \u001b[32m'bold'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 4 | \u001b[39m  static tagName \u001b[33m=\u001b[39m [\u001b[32m'STRONG'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'B'\u001b[39m]\u001b[33m;\u001b[39m\n \u001b[90m 5 | \u001b[39m  static create() {\n \u001b[90m 6 | \u001b[39m    \u001b[36mreturn\u001b[39m \u001b[36msuper\u001b[39m\u001b[33m.\u001b[39mcreate()\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (3:18)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mBold\u001b[39m from \u001b[32m'./bold.js'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 2 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mItalic\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mBold\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 | \u001b[39m  static blotName \u001b[33m=\u001b[39m \u001b[32m'italic'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 4 | \u001b[39m  static tagName \u001b[33m=\u001b[39m [\u001b[32m'EM'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'I'\u001b[39m]\u001b[33m;\u001b[39m\n \u001b[90m 5 | \u001b[39m}\n \u001b[90m 6 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[33mItalic\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (3:18)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mInline\u001b[39m from \u001b[32m'../blots/inline.js'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 2 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mLink\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mInline\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 | \u001b[39m  static blotName \u001b[33m=\u001b[39m \u001b[32m'link'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 4 | \u001b[39m  static tagName \u001b[33m=\u001b[39m \u001b[32m'A'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 5 | \u001b[39m  static \u001b[33mSANITIZED_URL\u001b[39m \u001b[33m=\u001b[39m \u001b[32m'about:blank'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 6 | \u001b[39m  static \u001b[33mPROTOCOL_WHITELIST\u001b[39m \u001b[33m=\u001b[39m [\u001b[32m'http'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'https'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'mailto'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'tel'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'sms'\u001b[39m]\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (3:18)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mInline\u001b[39m from \u001b[32m'../blots/inline.js'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 2 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mScript\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mInline\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 | \u001b[39m  static blotName \u001b[33m=\u001b[39m \u001b[32m'script'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 4 | \u001b[39m  static tagName \u001b[33m=\u001b[39m [\u001b[32m'SUB'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'SUP'\u001b[39m]\u001b[33m;\u001b[39m\n \u001b[90m 5 | \u001b[39m  static create(value) {\n \u001b[90m 6 | \u001b[39m    \u001b[36mif\u001b[39m (value \u001b[33m===\u001b[39m \u001b[32m'super'\u001b[39m) {\u001b[0m\n");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (3:18)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mBold\u001b[39m from \u001b[32m'./bold.js'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 2 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mStrike\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mBold\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 | \u001b[39m  static blotName \u001b[33m=\u001b[39m \u001b[32m'strike'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 4 | \u001b[39m  static tagName \u001b[33m=\u001b[39m [\u001b[32m'S'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'STRIKE'\u001b[39m]\u001b[33m;\u001b[39m\n \u001b[90m 5 | \u001b[39m}\n \u001b[90m 6 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[33mStrike\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (3:18)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mInline\u001b[39m from \u001b[32m'../blots/inline.js'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 2 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mUnderline\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mInline\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 | \u001b[39m  static blotName \u001b[33m=\u001b[39m \u001b[32m'underline'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 4 | \u001b[39m  static tagName \u001b[33m=\u001b[39m \u001b[32m'U'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 5 | \u001b[39m}\n \u001b[90m 6 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[33mUnderline\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (3:18)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mEmbed\u001b[39m from \u001b[32m'../blots/embed.js'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 2 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mFormula\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mEmbed\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 | \u001b[39m  static blotName \u001b[33m=\u001b[39m \u001b[32m'formula'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 4 | \u001b[39m  static className \u001b[33m=\u001b[39m \u001b[32m'ql-formula'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 5 | \u001b[39m  static tagName \u001b[33m=\u001b[39m \u001b[32m'SPAN'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 6 | \u001b[39m  static create(value) {\u001b[0m\n");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (5:18)\n\n\u001b[0m \u001b[90m 3 | \u001b[39m\u001b[36mconst\u001b[39m \u001b[33mATTRIBUTES\u001b[39m \u001b[33m=\u001b[39m [\u001b[32m'alt'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'height'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'width'\u001b[39m]\u001b[33m;\u001b[39m\n \u001b[90m 4 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mImage\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mEmbedBlot\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 5 | \u001b[39m  static blotName \u001b[33m=\u001b[39m \u001b[32m'image'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 6 | \u001b[39m  static tagName \u001b[33m=\u001b[39m \u001b[32m'IMG'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 7 | \u001b[39m  static create(value) {\n \u001b[90m 8 | \u001b[39m    \u001b[36mconst\u001b[39m node \u001b[33m=\u001b[39m \u001b[36msuper\u001b[39m\u001b[33m.\u001b[39mcreate(value)\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (5:18)\n\n\u001b[0m \u001b[90m 3 | \u001b[39m\u001b[36mconst\u001b[39m \u001b[33mATTRIBUTES\u001b[39m \u001b[33m=\u001b[39m [\u001b[32m'height'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'width'\u001b[39m]\u001b[33m;\u001b[39m\n \u001b[90m 4 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mVideo\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mBlockEmbed\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 5 | \u001b[39m  static blotName \u001b[33m=\u001b[39m \u001b[32m'video'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 6 | \u001b[39m  static className \u001b[33m=\u001b[39m \u001b[32m'ql-video'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 7 | \u001b[39m  static tagName \u001b[33m=\u001b[39m \u001b[32m'IFRAME'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 8 | \u001b[39m  static create(value) {\u001b[0m\n");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CodeToken = exports.CodeBlock = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _quillDelta = __webpack_require__(7);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __webpack_require__(0);

var _inline = __webpack_require__(12);

var _inline2 = _interopRequireDefault(_inline);

var _quill = __webpack_require__(1);

var _quill2 = _interopRequireDefault(_quill);

var _module = __webpack_require__(4);

var _module2 = _interopRequireDefault(_module);

var _block = __webpack_require__(5);

var _break = __webpack_require__(9);

var _break2 = _interopRequireDefault(_break);

var _cursor = __webpack_require__(11);

var _cursor2 = _interopRequireDefault(_cursor);

var _text = __webpack_require__(6);

var _text2 = _interopRequireDefault(_text);

var _code = __webpack_require__(19);

var _code2 = _interopRequireDefault(_code);

var _clipboard = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TokenAttributor = new _parchment.ClassAttributor('code-token', 'hljs', {
  scope: _parchment.Scope.INLINE
});

var CodeToken = function (_Inline) {
  _inherits(CodeToken, _Inline);

  _createClass(CodeToken, null, [{
    key: 'formats',
    value: function formats(node, scroll) {
      while (node != null && node !== scroll.domNode) {
        if (node.classList && node.classList.contains(_code2.default.className)) {
          // @ts-expect-error
          return _get(CodeToken.__proto__ || Object.getPrototypeOf(CodeToken), 'formats', this).call(this, node, scroll);
        }
        // @ts-expect-error
        node = node.parentNode;
      }
      return undefined;
    }
  }]);

  function CodeToken(scroll, domNode, value) {
    _classCallCheck(this, CodeToken);

    var _this = _possibleConstructorReturn(this, (CodeToken.__proto__ || Object.getPrototypeOf(CodeToken)).call(this, scroll, domNode, value));
    // @ts-expect-error


    TokenAttributor.add(_this.domNode, value);
    return _this;
  }

  _createClass(CodeToken, [{
    key: 'format',
    value: function format(_format, value) {
      if (_format !== CodeToken.blotName) {
        _get(CodeToken.prototype.__proto__ || Object.getPrototypeOf(CodeToken.prototype), 'format', this).call(this, _format, value);
      } else if (value) {
        TokenAttributor.add(this.domNode, value);
      } else {
        TokenAttributor.remove(this.domNode);
        this.domNode.classList.remove(this.statics.className);
      }
    }
  }, {
    key: 'optimize',
    value: function optimize() {
      // @ts-expect-error
      _get(CodeToken.prototype.__proto__ || Object.getPrototypeOf(CodeToken.prototype), 'optimize', this).apply(this, arguments);
      if (!TokenAttributor.value(this.domNode)) {
        this.unwrap();
      }
    }
  }]);

  return CodeToken;
}(_inline2.default);

CodeToken.blotName = 'code-token';
CodeToken.className = 'ql-token';

var SyntaxCodeBlock = function (_CodeBlock) {
  _inherits(SyntaxCodeBlock, _CodeBlock);

  function SyntaxCodeBlock() {
    _classCallCheck(this, SyntaxCodeBlock);

    return _possibleConstructorReturn(this, (SyntaxCodeBlock.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock)).apply(this, arguments));
  }

  _createClass(SyntaxCodeBlock, [{
    key: 'format',
    // Syntax module will register

    value: function format(name, value) {
      if (name === this.statics.blotName && value) {
        // @ts-expect-error
        this.domNode.setAttribute('data-language', value);
      } else {
        _get(SyntaxCodeBlock.prototype.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock.prototype), 'format', this).call(this, name, value);
      }
    }
  }, {
    key: 'replaceWith',
    value: function replaceWith(name, value) {
      this.formatAt(0, this.length(), CodeToken.blotName, false);
      return _get(SyntaxCodeBlock.prototype.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock.prototype), 'replaceWith', this).call(this, name, value);
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var domNode = _get(SyntaxCodeBlock.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock), 'create', this).call(this, value);
      if (typeof value === 'string') {
        domNode.setAttribute('data-language', value);
      }
      return domNode;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      // @ts-expect-error
      return domNode.getAttribute('data-language') || 'plain';
    }
  }, {
    key: 'register',
    value: function register() {}
  }]);

  return SyntaxCodeBlock;
}(_code2.default);

var SyntaxCodeBlockContainer = function (_CodeBlockContainer) {
  _inherits(SyntaxCodeBlockContainer, _CodeBlockContainer);

  function SyntaxCodeBlockContainer() {
    _classCallCheck(this, SyntaxCodeBlockContainer);

    return _possibleConstructorReturn(this, (SyntaxCodeBlockContainer.__proto__ || Object.getPrototypeOf(SyntaxCodeBlockContainer)).apply(this, arguments));
  }

  _createClass(SyntaxCodeBlockContainer, [{
    key: 'attach',
    value: function attach() {
      _get(SyntaxCodeBlockContainer.prototype.__proto__ || Object.getPrototypeOf(SyntaxCodeBlockContainer.prototype), 'attach', this).call(this);
      this.forceNext = false;
      // @ts-expect-error
      this.scroll.emitMount(this);
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      if (name === SyntaxCodeBlock.blotName) {
        this.forceNext = true;
        this.children.forEach(function (child) {
          // @ts-expect-error
          child.format(name, value);
        });
      }
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      if (name === SyntaxCodeBlock.blotName) {
        this.forceNext = true;
      }
      _get(SyntaxCodeBlockContainer.prototype.__proto__ || Object.getPrototypeOf(SyntaxCodeBlockContainer.prototype), 'formatAt', this).call(this, index, length, name, value);
    }
  }, {
    key: 'highlight',
    value: function highlight(_highlight) {
      var _this4 = this;

      var forced = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.children.head == null) return;
      var nodes = Array.from(this.domNode.childNodes).filter(function (node) {
        return node !== _this4.uiNode;
      });
      var text = nodes.map(function (node) {
        return node.textContent;
      }).join('\n') + '\n';
      var language = SyntaxCodeBlock.formats(this.children.head.domNode);
      if (forced || this.forceNext || this.cachedText !== text) {
        if (text.trim().length > 0 || this.cachedText == null) {
          var oldDelta = this.children.reduce(function (delta, child) {
            // @ts-expect-error
            return delta.concat((0, _block.blockDelta)(child, false));
          }, new _quillDelta2.default());
          var delta = _highlight(text, language);
          oldDelta.diff(delta).reduce(function (index, _ref) {
            var retain = _ref.retain,
                attributes = _ref.attributes;
            // Should be all retains

            if (!retain) return index;
            if (attributes) {
              Object.keys(attributes).forEach(function (format) {
                if ([SyntaxCodeBlock.blotName, CodeToken.blotName].includes(format)) {
                  // @ts-expect-error
                  _this4.formatAt(index, retain, format, attributes[format]);
                }
              });
            }
            // @ts-expect-error
            return index + retain;
          }, 0);
        }
        this.cachedText = text;
        this.forceNext = false;
      }
    }
  }, {
    key: 'html',
    value: function html(index, length) {
      var _children$find = this.children.find(index),
          _children$find2 = _slicedToArray(_children$find, 1),
          codeBlock = _children$find2[0];

      var language = codeBlock ? SyntaxCodeBlock.formats(codeBlock.domNode) : 'plain';
      return '<pre data-language="' + language + '">\n' + (0, _text.escapeText)(this.code(index, length)) + '\n</pre>';
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      _get(SyntaxCodeBlockContainer.prototype.__proto__ || Object.getPrototypeOf(SyntaxCodeBlockContainer.prototype), 'optimize', this).call(this, context);
      if (this.parent != null && this.children.head != null && this.uiNode != null) {
        var language = SyntaxCodeBlock.formats(this.children.head.domNode);
        // @ts-expect-error
        if (language !== this.uiNode.value) {
          // @ts-expect-error
          this.uiNode.value = language;
        }
      }
    }
  }]);

  return SyntaxCodeBlockContainer;
}(_code.CodeBlockContainer);

SyntaxCodeBlockContainer.allowedChildren = [SyntaxCodeBlock];
SyntaxCodeBlock.requiredContainer = SyntaxCodeBlockContainer;
SyntaxCodeBlock.allowedChildren = [CodeToken, _cursor2.default, _text2.default, _break2.default];
var highlight = function highlight(lib, language, text) {
  if (typeof lib.versionString === 'string') {
    var majorVersion = lib.versionString.split('.')[0];
    if (parseInt(majorVersion, 10) >= 11) {
      return lib.highlight(text, {
        language: language
      }).value;
    }
  }
  return lib.highlight(language, text).value;
};

var Syntax = function (_Module) {
  _inherits(Syntax, _Module);

  _createClass(Syntax, null, [{
    key: 'register',
    value: function register() {
      _quill2.default.register(CodeToken, true);
      _quill2.default.register(SyntaxCodeBlock, true);
      _quill2.default.register(SyntaxCodeBlockContainer, true);
    }
  }]);

  function Syntax(quill, options) {
    _classCallCheck(this, Syntax);

    var _this5 = _possibleConstructorReturn(this, (Syntax.__proto__ || Object.getPrototypeOf(Syntax)).call(this, quill, options));

    if (_this5.options.hljs == null) {
      throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');
    }
    // @ts-expect-error Fix me later
    _this5.languages = _this5.options.languages.reduce(function (memo, _ref2) {
      var key = _ref2.key;

      memo[key] = true;
      return memo;
    }, {});
    _this5.highlightBlot = _this5.highlightBlot.bind(_this5);
    _this5.initListener();
    _this5.initTimer();
    return _this5;
  }

  _createClass(Syntax, [{
    key: 'initListener',
    value: function initListener() {
      var _this6 = this;

      this.quill.on(_quill2.default.events.SCROLL_BLOT_MOUNT, function (blot) {
        if (!(blot instanceof SyntaxCodeBlockContainer)) return;
        var select = _this6.quill.root.ownerDocument.createElement('select');
        // @ts-expect-error Fix me later
        _this6.options.languages.forEach(function (_ref3) {
          var key = _ref3.key,
              label = _ref3.label;

          var option = select.ownerDocument.createElement('option');
          option.textContent = label;
          option.setAttribute('value', key);
          select.appendChild(option);
        });
        select.addEventListener('change', function () {
          blot.format(SyntaxCodeBlock.blotName, select.value);
          _this6.quill.root.focus(); // Prevent scrolling
          _this6.highlight(blot, true);
        });
        if (blot.uiNode == null) {
          blot.attachUI(select);
          if (blot.children.head) {
            select.value = SyntaxCodeBlock.formats(blot.children.head.domNode);
          }
        }
      });
    }
  }, {
    key: 'initTimer',
    value: function initTimer() {
      var _this7 = this;

      var timer = null;
      this.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function () {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(function () {
          _this7.highlight();
          timer = null;
        }, _this7.options.interval);
      });
    }
  }, {
    key: 'highlight',
    value: function highlight() {
      var _this8 = this;

      var blot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.quill.selection.composing) return;
      this.quill.update(_quill2.default.sources.USER);
      var range = this.quill.getSelection();
      var blots = blot == null ? this.quill.scroll.descendants(SyntaxCodeBlockContainer) : [blot];
      blots.forEach(function (container) {
        container.highlight(_this8.highlightBlot, force);
      });
      this.quill.update(_quill2.default.sources.SILENT);
      if (range != null) {
        this.quill.setSelection(range, _quill2.default.sources.SILENT);
      }
    }
  }, {
    key: 'highlightBlot',
    value: function highlightBlot(text) {
      var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'plain';
      language = this.languages[language] ? language : 'plain';
      if (language === 'plain') {
        return (0, _text.escapeText)(text).split('\n').reduce(function (delta, line, i) {
          if (i !== 0) {
            delta.insert('\n', _defineProperty({}, _code2.default.blotName, language));
          }
          return delta.insert(line);
        }, new _quillDelta2.default());
      }
      var container = this.quill.root.ownerDocument.createElement('div');
      container.classList.add(_code2.default.className);
      container.innerHTML = highlight(this.options.hljs, language, text);
      return (0, _clipboard.traverse)(this.quill.scroll, container, [function (node, delta) {
        // @ts-expect-error
        var value = TokenAttributor.value(node);
        if (value) {
          return delta.compose(new _quillDelta2.default().retain(delta.length(), _defineProperty({}, CodeToken.blotName, value)));
        }
        return delta;
      }], [function (node, delta) {
        // @ts-expect-error
        return node.data.split('\n').reduce(function (memo, nodeText, i) {
          if (i !== 0) memo.insert('\n', _defineProperty({}, _code2.default.blotName, language));
          return memo.insert(nodeText);
        }, delta);
      }], new WeakMap());
    }
  }]);

  return Syntax;
}(_module2.default);

Syntax.DEFAULTS = {
  hljs: function () {
    return window.hljs;
  }(),
  interval: 1000,
  languages: [{
    key: 'plain',
    label: 'Plain'
  }, {
    key: 'bash',
    label: 'Bash'
  }, {
    key: 'cpp',
    label: 'C++'
  }, {
    key: 'cs',
    label: 'C#'
  }, {
    key: 'css',
    label: 'CSS'
  }, {
    key: 'diff',
    label: 'Diff'
  }, {
    key: 'xml',
    label: 'HTML/XML'
  }, {
    key: 'java',
    label: 'Java'
  }, {
    key: 'javascript',
    label: 'JavaScript'
  }, {
    key: 'markdown',
    label: 'Markdown'
  }, {
    key: 'php',
    label: 'PHP'
  }, {
    key: 'python',
    label: 'Python'
  }, {
    key: 'ruby',
    label: 'Ruby'
  }, {
    key: 'sql',
    label: 'SQL'
  }]
};
exports.CodeBlock = SyntaxCodeBlock;
exports.CodeToken = CodeToken;
exports.default = Syntax;
//# sourceMappingURL=syntax.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _quillDelta = __webpack_require__(7);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _quill = __webpack_require__(1);

var _quill2 = _interopRequireDefault(_quill);

var _module = __webpack_require__(4);

var _module2 = _interopRequireDefault(_module);

var _table = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_Module) {
  _inherits(Table, _Module);

  _createClass(Table, null, [{
    key: 'register',
    value: function register() {
      _quill2.default.register(_table.TableCell);
      _quill2.default.register(_table.TableRow);
      _quill2.default.register(_table.TableBody);
      _quill2.default.register(_table.TableContainer);
    }
  }]);

  function Table() {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));

    _this.listenBalanceCells();
    return _this;
  }

  _createClass(Table, [{
    key: 'balanceTables',
    value: function balanceTables() {
      this.quill.scroll.descendants(_table.TableContainer).forEach(function (table) {
        table.balanceCells();
      });
    }
  }, {
    key: 'deleteColumn',
    value: function deleteColumn() {
      var _getTable = this.getTable(),
          _getTable2 = _slicedToArray(_getTable, 3),
          table = _getTable2[0],
          cell = _getTable2[2];

      if (cell == null) return;
      // @ts-expect-error
      table.deleteColumn(cell.cellOffset());
      this.quill.update(_quill2.default.sources.USER);
    }
  }, {
    key: 'deleteRow',
    value: function deleteRow() {
      var _getTable3 = this.getTable(),
          _getTable4 = _slicedToArray(_getTable3, 2),
          row = _getTable4[1];

      if (row == null) return;
      row.remove();
      this.quill.update(_quill2.default.sources.USER);
    }
  }, {
    key: 'deleteTable',
    value: function deleteTable() {
      var _getTable5 = this.getTable(),
          _getTable6 = _slicedToArray(_getTable5, 1),
          table = _getTable6[0];

      if (table == null) return;
      // @ts-expect-error
      var offset = table.offset();
      // @ts-expect-error
      table.remove();
      this.quill.update(_quill2.default.sources.USER);
      this.quill.setSelection(offset, _quill2.default.sources.SILENT);
    }
  }, {
    key: 'getTable',
    value: function getTable() {
      var range = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.quill.getSelection();
      if (range == null) return [null, null, null, -1];

      var _quill$getLine = this.quill.getLine(range.index),
          _quill$getLine2 = _slicedToArray(_quill$getLine, 2),
          cell = _quill$getLine2[0],
          offset = _quill$getLine2[1];

      if (cell == null || cell.statics.blotName !== _table.TableCell.blotName) {
        return [null, null, null, -1];
      }
      var row = cell.parent;
      var table = row.parent.parent;
      // @ts-expect-error
      return [table, row, cell, offset];
    }
  }, {
    key: 'insertColumn',
    value: function insertColumn(offset) {
      var range = this.quill.getSelection();
      if (!range) return;

      var _getTable7 = this.getTable(range),
          _getTable8 = _slicedToArray(_getTable7, 3),
          table = _getTable8[0],
          row = _getTable8[1],
          cell = _getTable8[2];

      if (cell == null) return;
      var column = cell.cellOffset();
      table.insertColumn(column + offset);
      this.quill.update(_quill2.default.sources.USER);
      var shift = row.rowOffset();
      if (offset === 0) {
        shift += 1;
      }
      this.quill.setSelection(range.index + shift, range.length, _quill2.default.sources.SILENT);
    }
  }, {
    key: 'insertColumnLeft',
    value: function insertColumnLeft() {
      this.insertColumn(0);
    }
  }, {
    key: 'insertColumnRight',
    value: function insertColumnRight() {
      this.insertColumn(1);
    }
  }, {
    key: 'insertRow',
    value: function insertRow(offset) {
      var range = this.quill.getSelection();
      if (!range) return;

      var _getTable9 = this.getTable(range),
          _getTable10 = _slicedToArray(_getTable9, 3),
          table = _getTable10[0],
          row = _getTable10[1],
          cell = _getTable10[2];

      if (cell == null) return;
      var index = row.rowOffset();
      table.insertRow(index + offset);
      this.quill.update(_quill2.default.sources.USER);
      if (offset > 0) {
        this.quill.setSelection(range, _quill2.default.sources.SILENT);
      } else {
        this.quill.setSelection(range.index + row.children.length, range.length, _quill2.default.sources.SILENT);
      }
    }
  }, {
    key: 'insertRowAbove',
    value: function insertRowAbove() {
      this.insertRow(0);
    }
  }, {
    key: 'insertRowBelow',
    value: function insertRowBelow() {
      this.insertRow(1);
    }
  }, {
    key: 'insertTable',
    value: function insertTable(rows, columns) {
      var range = this.quill.getSelection();
      if (range == null) return;
      var delta = new Array(rows).fill(0).reduce(function (memo) {
        var text = new Array(columns).fill('\n').join('');
        return memo.insert(text, {
          table: (0, _table.tableId)()
        });
      }, new _quillDelta2.default().retain(range.index));
      this.quill.updateContents(delta, _quill2.default.sources.USER);
      this.quill.setSelection(range.index, _quill2.default.sources.SILENT);
      this.balanceTables();
    }
  }, {
    key: 'listenBalanceCells',
    value: function listenBalanceCells() {
      var _this2 = this;

      this.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function (mutations) {
        mutations.some(function (mutation) {
          if (['TD', 'TR', 'TBODY', 'TABLE'].includes(mutation.target.tagName)) {
            _this2.quill.once(_quill2.default.events.TEXT_CHANGE, function (delta, old, source) {
              if (source !== _quill2.default.sources.USER) return;
              _this2.balanceTables();
            });
            return true;
          }
          return false;
        });
      });
    }
  }]);

  return Table;
}(_module2.default);

exports.default = Table;
//# sourceMappingURL=table.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (4:18)\n\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mContainer\u001b[39m from \u001b[32m'../blots/container.js'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 3 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mTableCell\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mBlock\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 | \u001b[39m  static blotName \u001b[33m=\u001b[39m \u001b[32m'table'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 5 | \u001b[39m  static tagName \u001b[33m=\u001b[39m \u001b[32m'TD'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 6 | \u001b[39m  static create(value) {\n \u001b[90m 7 | \u001b[39m    \u001b[36mconst\u001b[39m node \u001b[33m=\u001b[39m \u001b[36msuper\u001b[39m\u001b[33m.\u001b[39mcreate()\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (14:22)\n\n\u001b[0m \u001b[90m 12 | \u001b[39m      container\u001b[33m.\u001b[39msetAttribute(\u001b[32m'role'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'toolbar'\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 13 | \u001b[39m      addControls(container\u001b[33m,\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mcontainer)\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 | \u001b[39m      quill\u001b[33m.\u001b[39mcontainer\u001b[33m?\u001b[39m\u001b[33m.\u001b[39mparentNode\u001b[33m?\u001b[39m\u001b[33m.\u001b[39minsertBefore(container\u001b[33m,\u001b[39m quill\u001b[33m.\u001b[39mcontainer)\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m                      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 15 | \u001b[39m      \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcontainer \u001b[33m=\u001b[39m container\u001b[33m;\u001b[39m\n \u001b[90m 16 | \u001b[39m    } \u001b[36melse\u001b[39m \u001b[36mif\u001b[39m (\u001b[36mtypeof\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mcontainer \u001b[33m===\u001b[39m \u001b[32m'string'\u001b[39m) {\n \u001b[90m 17 | \u001b[39m      \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcontainer \u001b[33m=\u001b[39m document\u001b[33m.\u001b[39mquerySelector(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39moptions\u001b[33m.\u001b[39mcontainer)\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var alignLeftIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"13\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"9\" y1=\"4\" y2=\"4\"/></svg>";
var alignCenterIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"14\" x2=\"4\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"12\" x2=\"6\" y1=\"4\" y2=\"4\"/></svg>";
var alignRightIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"5\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"9\" y1=\"4\" y2=\"4\"/></svg>";
var alignJustifyIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"4\" y2=\"4\"/></svg>";
var backgroundIcon = "<svg viewbox=\"0 0 18 18\"><g class=\"ql-fill ql-color-label\"><polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"/><rect height=\"1\" width=\"1\" x=\"4\" y=\"4\"/><polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"6\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"4\" y=\"7\"/><polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"12\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"9\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"15\"/><polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"8\"/><path d=\"M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z\"/><path d=\"M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z\"/><path d=\"M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z\"/><rect height=\"1\" width=\"1\" x=\"12\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"11\" y=\"3\"/><path d=\"M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"3\"/><rect height=\"1\" width=\"1\" x=\"6\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"5\" y=\"3\"/><rect height=\"1\" width=\"1\" x=\"9\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"14\"/><polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"/><rect height=\"1\" width=\"1\" x=\"13\" y=\"7\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"6\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"8\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"9\"/><path d=\"M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"3\"/><polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"12\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"13\" y=\"4\"/><polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"/><rect height=\"1\" width=\"1\" x=\"9\" y=\"14\"/><rect height=\"1\" width=\"1\" x=\"8\" y=\"15\"/><path d=\"M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z\"/><rect height=\"1\" width=\"1\" x=\"5\" y=\"15\"/><path d=\"M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z\"/><rect height=\"1\" width=\"1\" x=\"11\" y=\"15\"/><path d=\"M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"15\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"11\"/></g><polyline class=\"ql-stroke\" points=\"5.5 13 9 5 12.5 13\"/><line class=\"ql-stroke\" x1=\"11.63\" x2=\"6.38\" y1=\"11\" y2=\"11\"/></svg>";
var blockquoteIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-fill ql-stroke\" height=\"3\" width=\"3\" x=\"4\" y=\"5\"/><rect class=\"ql-fill ql-stroke\" height=\"3\" width=\"3\" x=\"11\" y=\"5\"/><path class=\"ql-even ql-fill ql-stroke\" d=\"M7,8c0,4.031-3,5-3,5\"/><path class=\"ql-even ql-fill ql-stroke\" d=\"M14,8c0,4.031-3,5-3,5\"/></svg>";
var boldIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-stroke\" d=\"M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z\"/><path class=\"ql-stroke\" d=\"M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z\"/></svg>";
var cleanIcon = "<svg class=\"\" viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"5\" x2=\"13\" y1=\"3\" y2=\"3\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"9.35\" y1=\"12\" y2=\"3\"/><line class=\"ql-stroke\" x1=\"11\" x2=\"15\" y1=\"11\" y2=\"15\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"11\" y1=\"11\" y2=\"15\"/><rect class=\"ql-fill\" height=\"1\" rx=\"0.5\" ry=\"0.5\" width=\"7\" x=\"2\" y=\"14\"/></svg>";
var codeIcon = "<svg viewbox=\"0 0 18 18\"><polyline class=\"ql-even ql-stroke\" points=\"5 7 3 9 5 11\"/><polyline class=\"ql-even ql-stroke\" points=\"13 7 15 9 13 11\"/><line class=\"ql-stroke\" x1=\"10\" x2=\"8\" y1=\"5\" y2=\"13\"/></svg>";
var colorIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-color-label ql-stroke ql-transparent\" x1=\"3\" x2=\"15\" y1=\"15\" y2=\"15\"/><polyline class=\"ql-stroke\" points=\"5.5 11 9 3 12.5 11\"/><line class=\"ql-stroke\" x1=\"11.63\" x2=\"6.38\" y1=\"9\" y2=\"9\"/></svg>";
var directionLeftToRightIcon = "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke ql-fill\" points=\"3 11 5 9 3 7 3 11\"/><line class=\"ql-stroke ql-fill\" x1=\"15\" x2=\"11\" y1=\"4\" y2=\"4\"/><path class=\"ql-fill\" d=\"M11,3a3,3,0,0,0,0,6h1V3H11Z\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"11\" y=\"4\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"13\" y=\"4\"/></svg>";
var directionRightToLeftIcon = "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke ql-fill\" points=\"15 12 13 10 15 8 15 12\"/><line class=\"ql-stroke ql-fill\" x1=\"9\" x2=\"5\" y1=\"4\" y2=\"4\"/><path class=\"ql-fill\" d=\"M5,3A3,3,0,0,0,5,9H6V3H5Z\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"5\" y=\"4\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"7\" y=\"4\"/></svg>";
var formulaIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z\"/><rect class=\"ql-fill\" height=\"1.6\" rx=\"0.8\" ry=\"0.8\" width=\"5\" x=\"5.15\" y=\"6.2\"/><path class=\"ql-fill\" d=\"M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z\"/></svg>";
var headerIcon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z\"/></svg>";
var header2Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>";
var header3Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>";
var header4Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z\"/></svg>";
var header5Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>";
var header6Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z\"/></svg>";
var italicIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"13\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"5\" x2=\"11\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"8\" x2=\"10\" y1=\"14\" y2=\"4\"/></svg>";
var imageIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"10\" width=\"12\" x=\"3\" y=\"4\"/><circle class=\"ql-fill\" cx=\"6\" cy=\"7\" r=\"1\"/><polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"/></svg>";
var indentIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-fill ql-stroke\" points=\"3 7 3 11 5 9 3 7\"/></svg>";
var outdentIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-stroke\" points=\"5 7 5 11 3 9 5 7\"/></svg>";
var linkIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"11\" y1=\"7\" y2=\"11\"/><path class=\"ql-even ql-stroke\" d=\"M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z\"/><path class=\"ql-even ql-stroke\" d=\"M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z\"/></svg>";
var listBulletIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"14\" y2=\"14\"/></svg>";
var listCheckIcon = "<svg class=\"\" viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"4\" y2=\"4\"/><polyline class=\"ql-stroke\" points=\"3 4 4 5 6 3\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"14\" y2=\"14\"/><polyline class=\"ql-stroke\" points=\"3 14 4 15 6 13\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-stroke\" points=\"3 9 4 10 6 8\"/></svg>";
var listOrderedIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke ql-thin\" x1=\"2.5\" x2=\"4.5\" y1=\"5.5\" y2=\"5.5\"/><path class=\"ql-fill\" d=\"M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z\"/><path class=\"ql-stroke ql-thin\" d=\"M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156\"/><path class=\"ql-stroke ql-thin\" d=\"M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109\"/></svg>";
var subscriptIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z\"/><path class=\"ql-fill\" d=\"M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z\"/></svg>";
var superscriptIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z\"/><path class=\"ql-fill\" d=\"M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z\"/></svg>";
var strikeIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke ql-thin\" x1=\"15.5\" x2=\"2.5\" y1=\"8.5\" y2=\"9.5\"/><path class=\"ql-fill\" d=\"M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z\"/><path class=\"ql-fill\" d=\"M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z\"/></svg>";
var tableIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"12\" width=\"12\" x=\"3\" y=\"3\"/><rect class=\"ql-fill\" height=\"2\" width=\"3\" x=\"5\" y=\"5\"/><rect class=\"ql-fill\" height=\"2\" width=\"4\" x=\"9\" y=\"5\"/><g class=\"ql-fill ql-transparent\"><rect height=\"2\" width=\"3\" x=\"5\" y=\"8\"/><rect height=\"2\" width=\"4\" x=\"9\" y=\"8\"/><rect height=\"2\" width=\"3\" x=\"5\" y=\"11\"/><rect height=\"2\" width=\"4\" x=\"9\" y=\"11\"/></g></svg>";
var underlineIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-stroke\" d=\"M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3\"/><rect class=\"ql-fill\" height=\"1\" rx=\"0.5\" ry=\"0.5\" width=\"12\" x=\"3\" y=\"15\"/></svg>";
var videoIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"12\" width=\"12\" x=\"3\" y=\"3\"/><rect class=\"ql-fill\" height=\"12\" width=\"1\" x=\"5\" y=\"3\"/><rect class=\"ql-fill\" height=\"12\" width=\"1\" x=\"12\" y=\"3\"/><rect class=\"ql-fill\" height=\"2\" width=\"8\" x=\"5\" y=\"8\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"5\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"7\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"10\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"12\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"5\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"7\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"10\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"12\"/></svg>";
exports.default = {
  align: {
    '': alignLeftIcon,
    center: alignCenterIcon,
    right: alignRightIcon,
    justify: alignJustifyIcon
  },
  background: backgroundIcon,
  blockquote: blockquoteIcon,
  bold: boldIcon,
  clean: cleanIcon,
  code: codeIcon,
  'code-block': codeIcon,
  color: colorIcon,
  direction: {
    '': directionLeftToRightIcon,
    rtl: directionRightToLeftIcon
  },
  formula: formulaIcon,
  header: {
    '1': headerIcon,
    '2': header2Icon,
    '3': header3Icon,
    '4': header4Icon,
    '5': header5Icon,
    '6': header6Icon
  },
  italic: italicIcon,
  image: imageIcon,
  indent: {
    '+1': indentIcon,
    '-1': outdentIcon
  },
  link: linkIcon,
  list: {
    bullet: listBulletIcon,
    check: listCheckIcon,
    ordered: listOrderedIcon
  },
  script: {
    sub: subscriptIcon,
    super: superscriptIcon
  },
  strike: strikeIcon,
  table: tableIcon,
  underline: underlineIcon,
  video: videoIcon
};
//# sourceMappingURL=icons.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _picker = __webpack_require__(8);

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorPicker = function (_Picker) {
  _inherits(ColorPicker, _Picker);

  function ColorPicker(select, label) {
    _classCallCheck(this, ColorPicker);

    var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, select));

    _this.label.innerHTML = label;
    _this.container.classList.add('ql-color-picker');
    Array.from(_this.container.querySelectorAll('.ql-picker-item')).slice(0, 7).forEach(function (item) {
      item.classList.add('ql-primary');
    });
    return _this;
  }

  _createClass(ColorPicker, [{
    key: 'buildItem',
    value: function buildItem(option) {
      var item = _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'buildItem', this).call(this, option);
      item.style.backgroundColor = option.getAttribute('value') || '';
      return item;
    }
  }, {
    key: 'selectItem',
    value: function selectItem(item, trigger) {
      _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'selectItem', this).call(this, item, trigger);
      var colorLabel = this.label.querySelector('.ql-color-label');
      var value = item ? item.getAttribute('data-value') || '' : '';
      if (colorLabel) {
        if (colorLabel.tagName === 'line') {
          colorLabel.style.stroke = value;
        } else {
          colorLabel.style.fill = value;
        }
      }
    }
  }]);

  return ColorPicker;
}(_picker2.default);

exports.default = ColorPicker;
//# sourceMappingURL=color-picker.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _picker = __webpack_require__(8);

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconPicker = function (_Picker) {
  _inherits(IconPicker, _Picker);

  function IconPicker(select, icons) {
    _classCallCheck(this, IconPicker);

    var _this = _possibleConstructorReturn(this, (IconPicker.__proto__ || Object.getPrototypeOf(IconPicker)).call(this, select));

    _this.container.classList.add('ql-icon-picker');
    Array.from(_this.container.querySelectorAll('.ql-picker-item')).forEach(function (item) {
      item.innerHTML = icons[item.getAttribute('data-value') || ''];
    });
    _this.defaultItem = _this.container.querySelector('.ql-selected');
    _this.selectItem(_this.defaultItem);
    return _this;
  }

  _createClass(IconPicker, [{
    key: 'selectItem',
    value: function selectItem(target, trigger) {
      _get(IconPicker.prototype.__proto__ || Object.getPrototypeOf(IconPicker.prototype), 'selectItem', this).call(this, target, trigger);
      var item = target || this.defaultItem;
      if (item != null) {
        if (this.label.innerHTML === item.innerHTML) return;
        this.label.innerHTML = item.innerHTML;
      }
    }
  }]);

  return IconPicker;
}(_picker2.default);

exports.default = IconPicker;
//# sourceMappingURL=icon-picker.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isScrollable = function isScrollable(el) {
  var _getComputedStyle = getComputedStyle(el, null),
      overflowY = _getComputedStyle.overflowY;

  return overflowY !== 'visible' && overflowY !== 'clip';
};

var Tooltip = function () {
  function Tooltip(quill, boundsContainer) {
    var _this = this;

    _classCallCheck(this, Tooltip);

    this.quill = quill;
    this.boundsContainer = boundsContainer || document.body;
    this.root = quill.addContainer('ql-tooltip');
    // @ts-expect-error
    this.root.innerHTML = this.constructor.TEMPLATE;
    if (isScrollable(this.quill.root)) {
      this.quill.root.addEventListener('scroll', function () {
        _this.root.style.marginTop = -1 * _this.quill.root.scrollTop + 'px';
      });
    }
    this.hide();
  }

  _createClass(Tooltip, [{
    key: 'hide',
    value: function hide() {
      this.root.classList.add('ql-hidden');
    }
  }, {
    key: 'position',
    value: function position(reference) {
      var left = reference.left + reference.width / 2 - this.root.offsetWidth / 2;
      // root.scrollTop should be 0 if scrollContainer !== root
      var top = reference.bottom + this.quill.root.scrollTop;
      this.root.style.left = left + 'px';
      this.root.style.top = top + 'px';
      this.root.classList.remove('ql-flip');
      var containerBounds = this.boundsContainer.getBoundingClientRect();
      var rootBounds = this.root.getBoundingClientRect();
      var shift = 0;
      if (rootBounds.right > containerBounds.right) {
        shift = containerBounds.right - rootBounds.right;
        this.root.style.left = left + shift + 'px';
      }
      if (rootBounds.left < containerBounds.left) {
        shift = containerBounds.left - rootBounds.left;
        this.root.style.left = left + shift + 'px';
      }
      if (rootBounds.bottom > containerBounds.bottom) {
        var height = rootBounds.bottom - rootBounds.top;
        var verticalShift = reference.bottom - reference.top + height;
        this.root.style.top = top - verticalShift + 'px';
        this.root.classList.add('ql-flip');
      }
      return shift;
    }
  }, {
    key: 'show',
    value: function show() {
      this.root.classList.remove('ql-editing');
      this.root.classList.remove('ql-hidden');
    }
  }]);

  return Tooltip;
}();

exports.default = Tooltip;
//# sourceMappingURL=tooltip.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (13:18)\n\n\u001b[0m \u001b[90m 11 | \u001b[39m}\u001b[33m,\u001b[39m \u001b[32m'blockquote'\u001b[39m]]\u001b[33m;\u001b[39m\n \u001b[90m 12 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mBubbleTooltip\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mBaseTooltip\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 13 | \u001b[39m  static \u001b[33mTEMPLATE\u001b[39m \u001b[33m=\u001b[39m [\u001b[32m'<span class=\"ql-tooltip-arrow\"></span>'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'<div class=\"ql-tooltip-editor\">'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'<input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\">'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'<a class=\"ql-close\"></a>'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'</div>'\u001b[39m]\u001b[33m.\u001b[39mjoin(\u001b[32m''\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 14 | \u001b[39m  constructor(quill\u001b[33m,\u001b[39m bounds) {\n \u001b[90m 15 | \u001b[39m    \u001b[36msuper\u001b[39m(quill\u001b[33m,\u001b[39m bounds)\u001b[33m;\u001b[39m\n \u001b[90m 16 | \u001b[39m    \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mquill\u001b[33m.\u001b[39mon(\u001b[33mEmitter\u001b[39m\u001b[33m.\u001b[39mevents\u001b[33m.\u001b[39m\u001b[33mEDITOR_CHANGE\u001b[39m\u001b[33m,\u001b[39m (type\u001b[33m,\u001b[39m range\u001b[33m,\u001b[39m oldRange\u001b[33m,\u001b[39m source) \u001b[33m=>\u001b[39m {\u001b[0m\n");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (16:18)\n\n\u001b[0m \u001b[90m 14 | \u001b[39m}]\u001b[33m,\u001b[39m [\u001b[32m'clean'\u001b[39m]]\u001b[33m;\u001b[39m\n \u001b[90m 15 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mSnowTooltip\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mBaseTooltip\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 16 | \u001b[39m  static \u001b[33mTEMPLATE\u001b[39m \u001b[33m=\u001b[39m [\u001b[32m'<a class=\"ql-preview\" rel=\"noopener noreferrer\" target=\"_blank\" href=\"about:blank\"></a>'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'<input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\">'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'<a class=\"ql-action\"></a>'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'<a class=\"ql-remove\"></a>'\u001b[39m]\u001b[33m.\u001b[39mjoin(\u001b[32m''\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 17 | \u001b[39m  preview \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mroot\u001b[33m.\u001b[39mquerySelector(\u001b[32m'a.ql-preview'\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 18 | \u001b[39m  listen() {\n \u001b[90m 19 | \u001b[39m    \u001b[36msuper\u001b[39m\u001b[33m.\u001b[39mlisten()\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(3));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["MarkdownShortcuts"] = factory(require("quill"));else root["MarkdownShortcuts"] = factory(root["quill"]);
})(typeof self !== 'undefined' ? self : undefined, function (__WEBPACK_EXTERNAL_MODULE_0__) {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 1);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports) {

      module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;_e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }return _arr;
        }return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }(); // Quill.js Plugin - Markdown Shortcuts
      // This is a module for the Quill.js WYSIWYG editor (https://quilljs.com/)
      // which converts text entered as markdown to rich text.
      //
      // v0.0.5
      //
      // Author: Patrick Lee (me@patricklee.nyc)
      //
      // (c) Copyright 2017 Patrick Lee (me@patricklee.nyc).
      // Permission is hereby granted, free of charge, to any person obtaining a copy
      // of this software and associated documentation files (the "Software"), to deal
      // in the Software without restriction, including without limitation the rights
      // to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      // copies of the Software, and to permit persons to whom the Software is
      // furnished to do so, subject to the following conditions:
      //
      // The above copyright notice and this permission notice shall be included in
      // all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      // OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      // THE SOFTWARE.
      //


      var _quill = __webpack_require__(0);

      var _quill2 = _interopRequireDefault(_quill);

      var _hr = __webpack_require__(2);

      var _hr2 = _interopRequireDefault(_hr);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      _quill2.default.register('formats/horizontal', _hr2.default);

      var MarkdownShortcuts = function () {
        function MarkdownShortcuts(quill, options) {
          var _this = this;

          _classCallCheck(this, MarkdownShortcuts);

          this.quill = quill;
          this.options = options;

          this.ignoreTags = ['PRE'];
          this.matches = [{
            name: 'header',
            pattern: /^(#){1,6}\s/g,
            action: function action(text, selection, pattern) {
              var match = pattern.exec(text);
              if (!match) return;
              var size = match[0].length;
              // Need to defer this action https://github.com/quilljs/quill/issues/1134
              setTimeout(function () {
                _this.quill.formatLine(selection.index, 0, 'header', size - 1);
                _this.quill.deleteText(selection.index - size, size);
              }, 0);
            }
          }, {
            name: 'blockquote',
            pattern: /^(>)\s/g,
            action: function action(text, selection) {
              // Need to defer this action https://github.com/quilljs/quill/issues/1134
              setTimeout(function () {
                _this.quill.formatLine(selection.index, 1, 'blockquote', true);
                _this.quill.deleteText(selection.index - 2, 2);
              }, 0);
            }
          }, {
            name: 'code-block',
            pattern: /^`{3}(?:\s|\n)/g,
            action: function action(text, selection) {
              // Need to defer this action https://github.com/quilljs/quill/issues/1134
              setTimeout(function () {
                _this.quill.formatLine(selection.index, 1, 'code-block', true);
                _this.quill.deleteText(selection.index - 4, 4);
              }, 0);
            }
          }, {
            name: 'bolditalic',
            pattern: /(?:\*|_){3}(.+?)(?:\*|_){3}/g,
            action: function action(text, selection, pattern, lineStart) {
              var match = pattern.exec(text);

              var annotatedText = match[0];
              var matchedText = match[1];
              var startIndex = lineStart + match.index;

              if (text.match(/^([*_ \n]+)$/g)) return;

              setTimeout(function () {
                _this.quill.deleteText(startIndex, annotatedText.length);
                _this.quill.insertText(startIndex, matchedText, { bold: true, italic: true });
                _this.quill.format('bold', false);
              }, 0);
            }
          }, {
            name: 'bold',
            pattern: /(?:\*|_){2}(.+?)(?:\*|_){2}/g,
            action: function action(text, selection, pattern, lineStart) {
              var match = pattern.exec(text);

              var annotatedText = match[0];
              var matchedText = match[1];
              var startIndex = lineStart + match.index;

              if (text.match(/^([*_ \n]+)$/g)) return;

              setTimeout(function () {
                _this.quill.deleteText(startIndex, annotatedText.length);
                _this.quill.insertText(startIndex, matchedText, { bold: true });
                _this.quill.format('bold', false);
              }, 0);
            }
          }, {
            name: 'italic',
            pattern: /(?:\*|_){1}(.+?)(?:\*|_){1}/g,
            action: function action(text, selection, pattern, lineStart) {
              var match = pattern.exec(text);

              var annotatedText = match[0];
              var matchedText = match[1];
              var startIndex = lineStart + match.index;

              if (text.match(/^([*_ \n]+)$/g)) return;

              setTimeout(function () {
                _this.quill.deleteText(startIndex, annotatedText.length);
                _this.quill.insertText(startIndex, matchedText, { italic: true });
                _this.quill.format('italic', false);
              }, 0);
            }
          }, {
            name: 'strikethrough',
            pattern: /(?:~~)(.+?)(?:~~)/g,
            action: function action(text, selection, pattern, lineStart) {
              var match = pattern.exec(text);

              var annotatedText = match[0];
              var matchedText = match[1];
              var startIndex = lineStart + match.index;

              if (text.match(/^([*_ \n]+)$/g)) return;

              setTimeout(function () {
                _this.quill.deleteText(startIndex, annotatedText.length);
                _this.quill.insertText(startIndex, matchedText, { strike: true });
                _this.quill.format('strike', false);
              }, 0);
            }
          }, {
            name: 'code',
            pattern: /(?:`)(.+?)(?:`)/g,
            action: function action(text, selection, pattern, lineStart) {
              var match = pattern.exec(text);

              var annotatedText = match[0];
              var matchedText = match[1];
              var startIndex = lineStart + match.index;

              if (text.match(/^([*_ \n]+)$/g)) return;

              setTimeout(function () {
                _this.quill.deleteText(startIndex, annotatedText.length);
                _this.quill.insertText(startIndex, matchedText, { code: true });
                _this.quill.format('code', false);
                _this.quill.insertText(_this.quill.getSelection(), ' ');
              }, 0);
            }
          }, {
            name: 'hr',
            pattern: /^([-*]\s?){3}/g,
            action: function action(text, selection) {
              var startIndex = selection.index - text.length;
              setTimeout(function () {
                _this.quill.deleteText(startIndex, text.length);

                _this.quill.insertEmbed(startIndex + 1, 'hr', true, _quill2.default.sources.USER);
                _this.quill.insertText(startIndex + 2, "\n", _quill2.default.sources.SILENT);
                _this.quill.setSelection(startIndex + 2, _quill2.default.sources.SILENT);
              }, 0);
            }
          }, {
            name: 'plus-ul',
            // Quill 1.3.5 already treat * as another trigger for bullet lists
            pattern: /^\+\s$/g,
            action: function action(text, selection, pattern) {
              setTimeout(function () {
                _this.quill.formatLine(selection.index, 1, 'list', 'unordered');
                _this.quill.deleteText(selection.index - 2, 2);
              }, 0);
            }
          }, {
            name: 'image',
            pattern: /(?:!\[(.+?)\])(?:\((.+?)\))/g,
            action: function action(text, selection, pattern) {
              var startIndex = text.search(pattern);
              var matchedText = text.match(pattern)[0];
              // const hrefText = text.match(/(?:!\[(.*?)\])/g)[0]
              var hrefLink = text.match(/(?:\((.*?)\))/g)[0];
              var start = selection.index - matchedText.length - 1;
              if (startIndex !== -1) {
                setTimeout(function () {
                  _this.quill.deleteText(start, matchedText.length);
                  _this.quill.insertEmbed(start, 'image', hrefLink.slice(1, hrefLink.length - 1));
                }, 0);
              }
            }
          }, {
            name: 'link',
            pattern: /(?:\[(.+?)\])(?:\((.+?)\))/g,
            action: function action(text, selection, pattern) {
              var startIndex = text.search(pattern);
              var matchedText = text.match(pattern)[0];
              var hrefText = text.match(/(?:\[(.*?)\])/g)[0];
              var hrefLink = text.match(/(?:\((.*?)\))/g)[0];
              var start = selection.index - matchedText.length - 1;
              if (startIndex !== -1) {
                setTimeout(function () {
                  _this.quill.deleteText(start, matchedText.length);
                  _this.quill.insertText(start, hrefText.slice(1, hrefText.length - 1), 'link', hrefLink.slice(1, hrefLink.length - 1));
                }, 0);
              }
            }
          }];

          // Handler that looks for insert deltas that match specific characters
          this.quill.on('text-change', function (delta, oldContents, source) {
            for (var i = 0; i < delta.ops.length; i++) {
              if (delta.ops[i].hasOwnProperty('insert')) {
                if (delta.ops[i].insert === ' ') {
                  _this.onSpace();
                } else if (delta.ops[i].insert === '\n') {
                  _this.onEnter();
                }
              }
            }
          });
        }

        _createClass(MarkdownShortcuts, [{
          key: 'isValid',
          value: function isValid(text, tagName) {
            return typeof text !== 'undefined' && text && this.ignoreTags.indexOf(tagName) === -1;
          }
        }, {
          key: 'onSpace',
          value: function onSpace() {
            var selection = this.quill.getSelection();
            if (!selection) return;

            var _quill$getLine = this.quill.getLine(selection.index),
                _quill$getLine2 = _slicedToArray(_quill$getLine, 2),
                line = _quill$getLine2[0],
                offset = _quill$getLine2[1];

            var text = line.domNode.textContent;
            var lineStart = selection.index - offset;
            if (this.isValid(text, line.domNode.tagName)) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = this.matches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var match = _step.value;

                  var matchedText = text.match(match.pattern);
                  if (matchedText) {
                    // We need to replace only matched text not the whole line
                    match.action(text, selection, match.pattern, lineStart);
                    return;
                  }
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            }
          }
        }, {
          key: 'onEnter',
          value: function onEnter() {
            var selection = this.quill.getSelection();
            if (!selection) return;

            var _quill$getLine3 = this.quill.getLine(selection.index),
                _quill$getLine4 = _slicedToArray(_quill$getLine3, 2),
                line = _quill$getLine4[0],
                offset = _quill$getLine4[1];

            var text = line.domNode.textContent + ' ';
            var lineStart = selection.index - offset;
            selection.length = selection.index++;
            if (this.isValid(text, line.domNode.tagName)) {
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = this.matches[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var match = _step2.value;

                  var matchedText = text.match(match.pattern);
                  if (matchedText) {
                    match.action(text, selection, match.pattern, lineStart);
                    return;
                  }
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            }
          }
        }]);

        return MarkdownShortcuts;
      }();

      if (window.Quill) {
        window.Quill.register('modules/markdownShortcuts', MarkdownShortcuts);
      }

      module.exports = MarkdownShortcuts;

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _quill = __webpack_require__(0);

      var _quill2 = _interopRequireDefault(_quill);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var BlockEmbed = _quill2.default.import('blots/block/embed');

      var HorizontalRule = function (_BlockEmbed) {
        _inherits(HorizontalRule, _BlockEmbed);

        function HorizontalRule() {
          _classCallCheck(this, HorizontalRule);

          return _possibleConstructorReturn(this, (HorizontalRule.__proto__ || Object.getPrototypeOf(HorizontalRule)).apply(this, arguments));
        }

        return HorizontalRule;
      }(BlockEmbed);

      HorizontalRule.blotName = 'hr';
      HorizontalRule.tagName = 'hr';

      exports.default = HorizontalRule;

      /***/
    }]
    /******/)
  );
});
//# sourceMappingURL=markdownShortcuts.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ })
/******/ ]);
//# sourceMappingURL=index.bundle.js.map