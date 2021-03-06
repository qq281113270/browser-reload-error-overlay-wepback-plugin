/*
 * @Date: 2022-05-12 17:59:30
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-05-13 15:21:51
 * @FilePath: /webpack-cli/@webpack-cli/client/definePlugin/browser-reload-error-overlay-wepback-plugin/ansiToHtml.js
 * @Description: 
 */
(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        "use strict";

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

        function _createForOfIteratorHelper(o, allowArrayLike) {
          var it =
            (typeof Symbol !== "undefined" && o[Symbol.iterator]) ||
            o["@@iterator"];
          if (!it) {
            if (
              Array.isArray(o) ||
              (it = _unsupportedIterableToArray(o)) ||
              (allowArrayLike && o && typeof o.length === "number")
            ) {
              if (it) o = it;
              var i = 0;
              var F = function F() {};
              return {
                s: F,
                n: function n() {
                  if (i >= o.length) return { done: true };
                  return { done: false, value: o[i++] };
                },
                e: function e(_e) {
                  throw _e;
                },
                f: F,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var normalCompletion = true,
            didErr = false,
            err;
          return {
            s: function s() {
              it = it.call(o);
            },
            n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e2) {
              didErr = true;
              err = _e2;
            },
            f: function f() {
              try {
                if (!normalCompletion && it["return"] != null) it["return"]();
              } finally {
                if (didErr) throw err;
              }
            },
          };
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        var entities = require("entities");

        var defaults = {
          fg: "#FFF",
          bg: "#000",
          newline: false,
          escapeXML: false,
          stream: false,
          colors: getDefaultColors(),
        };

        function getDefaultColors() {
          var colors = {
            0: "#000",
            1: "#A00",
            2: "#0A0",
            3: "#A50",
            4: "#00A",
            5: "#A0A",
            6: "#0AA",
            7: "#AAA",
            8: "#555",
            9: "#F55",
            10: "#5F5",
            11: "#FF5",
            12: "#55F",
            13: "#F5F",
            14: "#5FF",
            15: "#FFF",
          };
          range(0, 5).forEach(function (red) {
            range(0, 5).forEach(function (green) {
              range(0, 5).forEach(function (blue) {
                return setStyleColor(red, green, blue, colors);
              });
            });
          });
          range(0, 23).forEach(function (gray) {
            var c = gray + 232;
            var l = toHexString(gray * 10 + 8);
            colors[c] = "#" + l + l + l;
          });
          return colors;
        }
        /**
         * @param {number} red
         * @param {number} green
         * @param {number} blue
         * @param {object} colors
         */

        function setStyleColor(red, green, blue, colors) {
          var c = 16 + red * 36 + green * 6 + blue;
          var r = red > 0 ? red * 40 + 55 : 0;
          var g = green > 0 ? green * 40 + 55 : 0;
          var b = blue > 0 ? blue * 40 + 55 : 0;
          colors[c] = toColorHexString([r, g, b]);
        }
        /**
         * Converts from a number like 15 to a hex string like 'F'
         * @param {number} num
         * @returns {string}
         */

        function toHexString(num) {
          var str = num.toString(16);

          while (str.length < 2) {
            str = "0" + str;
          }

          return str;
        }
        /**
         * Converts from an array of numbers like [15, 15, 15] to a hex string like 'FFF'
         * @param {[red, green, blue]} ref
         * @returns {string}
         */

        function toColorHexString(ref) {
          var results = [];

          var _iterator = _createForOfIteratorHelper(ref),
            _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var r = _step.value;
              results.push(toHexString(r));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return "#" + results.join("");
        }
        /**
         * @param {Array} stack
         * @param {string} token
         * @param {*} data
         * @param {object} options
         */

        function generateOutput(stack, token, data, options) {
          var result;

          if (token === "text") {
            result = pushText(data, options);
          } else if (token === "display") {
            result = handleDisplay(stack, data, options);
          } else if (token === "xterm256Foreground") {
            result = pushForegroundColor(stack, options.colors[data]);
          } else if (token === "xterm256Background") {
            result = pushBackgroundColor(stack, options.colors[data]);
          } else if (token === "rgb") {
            result = handleRgb(stack, data);
          }

          return result;
        }
        /**
         * @param {Array} stack
         * @param {string} data
         * @returns {*}
         */

        function handleRgb(stack, data) {
          data = data.substring(2).slice(0, -1);
          var operation = +data.substr(0, 2);
          var color = data.substring(5).split(";");
          var rgb = color
            .map(function (value) {
              return ("0" + Number(value).toString(16)).substr(-2);
            })
            .join("");
          return pushStyle(
            stack,
            (operation === 38 ? "color:#" : "background-color:#") + rgb
          );
        }
        /**
         * @param {Array} stack
         * @param {number} code
         * @param {object} options
         * @returns {*}
         */

        function handleDisplay(stack, code, options) {
          code = parseInt(code, 10);
          var codeMap = {
            "-1": function _() {
              return "<br/>";
            },
            0: function _() {
              return stack.length && resetStyles(stack);
            },
            1: function _() {
              return pushTag(stack, "b");
            },
            3: function _() {
              return pushTag(stack, "i");
            },
            4: function _() {
              return pushTag(stack, "u");
            },
            8: function _() {
              return pushStyle(stack, "display:none");
            },
            9: function _() {
              return pushTag(stack, "strike");
            },
            22: function _() {
              return pushStyle(
                stack,
                "font-weight:normal;text-decoration:none;font-style:normal"
              );
            },
            23: function _() {
              return closeTag(stack, "i");
            },
            24: function _() {
              return closeTag(stack, "u");
            },
            39: function _() {
              return pushForegroundColor(stack, options.fg);
            },
            49: function _() {
              return pushBackgroundColor(stack, options.bg);
            },
            53: function _() {
              return pushStyle(stack, "text-decoration:overline");
            },
          };
          var result;

          if (codeMap[code]) {
            result = codeMap[code]();
          } else if (4 < code && code < 7) {
            result = pushTag(stack, "blink");
          } else if (29 < code && code < 38) {
            result = pushForegroundColor(stack, options.colors[code - 30]);
          } else if (39 < code && code < 48) {
            result = pushBackgroundColor(stack, options.colors[code - 40]);
          } else if (89 < code && code < 98) {
            result = pushForegroundColor(
              stack,
              options.colors[8 + (code - 90)]
            );
          } else if (99 < code && code < 108) {
            result = pushBackgroundColor(
              stack,
              options.colors[8 + (code - 100)]
            );
          }

          return result;
        }
        /**
         * Clear all the styles
         * @returns {string}
         */

        function resetStyles(stack) {
          var stackClone = stack.slice(0);
          stack.length = 0;
          return stackClone
            .reverse()
            .map(function (tag) {
              return "</" + tag + ">";
            })
            .join("");
        }
        /**
         * Creates an array of numbers ranging from low to high
         * @param {number} low
         * @param {number} high
         * @returns {Array}
         * @example range(3, 7); // creates [3, 4, 5, 6, 7]
         */

        function range(low, high) {
          var results = [];

          for (var j = low; j <= high; j++) {
            results.push(j);
          }

          return results;
        }
        /**
         * Returns a new function that is true if value is NOT the same category
         * @param {string} category
         * @returns {function}
         */

        function notCategory(category) {
          return function (e) {
            return (
              (category === null || e.category !== category) &&
              category !== "all"
            );
          };
        }
        /**
         * Converts a code into an ansi token type
         * @param {number} code
         * @returns {string}
         */

        function categoryForCode(code) {
          code = parseInt(code, 10);
          var result = null;

          if (code === 0) {
            result = "all";
          } else if (code === 1) {
            result = "bold";
          } else if (2 < code && code < 5) {
            result = "underline";
          } else if (4 < code && code < 7) {
            result = "blink";
          } else if (code === 8) {
            result = "hide";
          } else if (code === 9) {
            result = "strike";
          } else if (
            (29 < code && code < 38) ||
            code === 39 ||
            (89 < code && code < 98)
          ) {
            result = "foreground-color";
          } else if (
            (39 < code && code < 48) ||
            code === 49 ||
            (99 < code && code < 108)
          ) {
            result = "background-color";
          }

          return result;
        }
        /**
         * @param {string} text
         * @param {object} options
         * @returns {string}
         */

        function pushText(text, options) {
          if (options.escapeXML) {
            return entities.encodeXML(text);
          }

          return text;
        }
        /**
         * @param {Array} stack
         * @param {string} tag
         * @param {string} [style='']
         * @returns {string}
         */

        function pushTag(stack, tag, style) {
          if (!style) {
            style = "";
          }

          stack.push(tag);
          return "<"
            .concat(tag)
            .concat(style ? ' style="'.concat(style, '"') : "", ">");
        }
        /**
         * @param {Array} stack
         * @param {string} style
         * @returns {string}
         */

        function pushStyle(stack, style) {
          return pushTag(stack, "span", style);
        }

        function pushForegroundColor(stack, color) {
          return pushTag(stack, "span", "color:" + color);
        }

        function pushBackgroundColor(stack, color) {
          return pushTag(stack, "span", "background-color:" + color);
        }
        /**
         * @param {Array} stack
         * @param {string} style
         * @returns {string}
         */

        function closeTag(stack, style) {
          var last;

          if (stack.slice(-1)[0] === style) {
            last = stack.pop();
          }

          if (last) {
            return "</" + style + ">";
          }
        }
        /**
         * @param {string} text
         * @param {object} options
         * @param {function} callback
         * @returns {Array}
         */

        function tokenize(text, options, callback) {
          var ansiMatch = false;
          var ansiHandler = 3;

          function remove() {
            return "";
          }

          function removeXterm256Foreground(m, g1) {
            callback("xterm256Foreground", g1);
            return "";
          }

          function removeXterm256Background(m, g1) {
            callback("xterm256Background", g1);
            return "";
          }

          function newline(m) {
            if (options.newline) {
              callback("display", -1);
            } else {
              callback("text", m);
            }

            return "";
          }

          function ansiMess(m, g1) {
            ansiMatch = true;

            if (g1.trim().length === 0) {
              g1 = "0";
            }

            g1 = g1.trimRight(";").split(";");

            var _iterator2 = _createForOfIteratorHelper(g1),
              _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var g = _step2.value;
                callback("display", g);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return "";
          }

          function realText(m) {
            callback("text", m);
            return "";
          }

          function rgb(m) {
            callback("rgb", m);
            return "";
          }
          /* eslint no-control-regex:0 */

          var tokens = [
            {
              pattern: /^\x08+/,
              sub: remove,
            },
            {
              pattern: /^\x1b\[[012]?K/,
              sub: remove,
            },
            {
              pattern: /^\x1b\[\(B/,
              sub: remove,
            },
            {
              pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/,
              sub: rgb,
            },
            {
              pattern: /^\x1b\[38;5;(\d+)m/,
              sub: removeXterm256Foreground,
            },
            {
              pattern: /^\x1b\[48;5;(\d+)m/,
              sub: removeXterm256Background,
            },
            {
              pattern: /^\n/,
              sub: newline,
            },
            {
              pattern: /^\r+\n/,
              sub: newline,
            },
            {
              pattern: /^\r/,
              sub: newline,
            },
            {
              pattern: /^\x1b\[((?:\d{1,3};?)+|)m/,
              sub: ansiMess,
            },
            {
              // CSI n J
              // ED - Erase in Display Clears part of the screen.
              // If n is 0 (or missing), clear from cursor to end of screen.
              // If n is 1, clear from cursor to beginning of the screen.
              // If n is 2, clear entire screen (and moves cursor to upper left on DOS ANSI.SYS).
              // If n is 3, clear entire screen and delete all lines saved in the scrollback buffer
              //   (this feature was added for xterm and is supported by other terminal applications).
              pattern: /^\x1b\[\d?J/,
              sub: remove,
            },
            {
              // CSI n ; m f
              // HVP - Horizontal Vertical Position Same as CUP
              pattern: /^\x1b\[\d{0,3};\d{0,3}f/,
              sub: remove,
            },
            {
              // catch-all for CSI sequences?
              pattern: /^\x1b\[?[\d;]{0,3}/,
              sub: remove,
            },
            {
              /**
               * extracts real text - not containing:
               * - `\x1b' - ESC - escape (Ascii 27)
               * - '\x08' - BS - backspace (Ascii 8)
               * - `\n` - Newline - linefeed (LF) (ascii 10)
               * - `\r` - Windows Carriage Return (CR)
               */
              pattern: /^(([^\x1b\x08\r\n])+)/,
              sub: realText,
            },
          ];

          function process(handler, i) {
            if (i > ansiHandler && ansiMatch) {
              return;
            }

            ansiMatch = false;
            text = text.replace(handler.pattern, handler.sub);
          }

          var results1 = [];
          var _text = text,
            length = _text.length;

          outer: while (length > 0) {
            for (var i = 0, o = 0, len = tokens.length; o < len; i = ++o) {
              var handler = tokens[i];
              process(handler, i);

              if (text.length !== length) {
                // We matched a token and removed it from the text. We need to
                // start matching *all* tokens against the new text.
                length = text.length;
                continue outer;
              }
            }

            if (text.length === length) {
              break;
            }

            results1.push(0);
            length = text.length;
          }

          return results1;
        }
        /**
         * If streaming, then the stack is "sticky"
         *
         * @param {Array} stickyStack
         * @param {string} token
         * @param {*} data
         * @returns {Array}
         */

        function updateStickyStack(stickyStack, token, data) {
          if (token !== "text") {
            stickyStack = stickyStack.filter(
              notCategory(categoryForCode(data))
            );
            stickyStack.push({
              token: token,
              data: data,
              category: categoryForCode(data),
            });
          }

          return stickyStack;
        }

        var Filter = /*#__PURE__*/ (function () {
          /**
           * @param {object} options
           * @param {string=} options.fg The default foreground color used when reset color codes are encountered.
           * @param {string=} options.bg The default background color used when reset color codes are encountered.
           * @param {boolean=} options.newline Convert newline characters to `<br/>`.
           * @param {boolean=} options.escapeXML Generate HTML/XML entities.
           * @param {boolean=} options.stream Save style state across invocations of `toHtml()`.
           * @param {(string[] | {[code: number]: string})=} options.colors Can override specific colors or the entire ANSI palette.
           */
          function Filter(options) {
            _classCallCheck(this, Filter);

            options = options || {};

            if (options.colors) {
              options.colors = Object.assign(
                {},
                defaults.colors,
                options.colors
              );
            }

            this.options = Object.assign({}, defaults, options);
            this.stack = [];
            this.stickyStack = [];
          }
          /**
           * @param {string | string[]} input
           * @returns {string}
           */

          _createClass(Filter, [
            {
              key: "toHtml",
              value: function toHtml(input) {
                var _this = this;

                input = typeof input === "string" ? [input] : input;
                var stack = this.stack,
                  options = this.options;
                var buf = [];
                this.stickyStack.forEach(function (element) {
                  var output = generateOutput(
                    stack,
                    element.token,
                    element.data,
                    options
                  );

                  if (output) {
                    buf.push(output);
                  }
                });
                tokenize(input.join(""), options, function (token, data) {
                  var output = generateOutput(stack, token, data, options);

                  if (output) {
                    buf.push(output);
                  }

                  if (options.stream) {
                    _this.stickyStack = updateStickyStack(
                      _this.stickyStack,
                      token,
                      data
                    );
                  }
                });

                if (stack.length) {
                  buf.push(resetStyles(stack));
                }

                return buf.join("");
              },
            },
          ]);

          return Filter;
        })();

        window.ansiToHtml = Filter;
      },
      { entities: 5 },
    ],
    2: [
      function (require, module, exports) {
        "use strict";
        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.decodeHTML =
          exports.decodeHTMLStrict =
          exports.decodeXML =
            void 0;
        var entities_json_1 = __importDefault(require("./maps/entities.json"));
        var legacy_json_1 = __importDefault(require("./maps/legacy.json"));
        var xml_json_1 = __importDefault(require("./maps/xml.json"));
        var decode_codepoint_1 = __importDefault(require("./decode_codepoint"));
        var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
        exports.decodeXML = getStrictDecoder(xml_json_1.default);
        exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
        function getStrictDecoder(map) {
          var replace = getReplacer(map);
          return function (str) {
            return String(str).replace(strictEntityRe, replace);
          };
        }
        var sorter = function (a, b) {
          return a < b ? 1 : -1;
        };
        exports.decodeHTML = (function () {
          var legacy = Object.keys(legacy_json_1.default).sort(sorter);
          var keys = Object.keys(entities_json_1.default).sort(sorter);
          for (var i = 0, j = 0; i < keys.length; i++) {
            if (legacy[j] === keys[i]) {
              keys[i] += ";?";
              j++;
            } else {
              keys[i] += ";";
            }
          }
          var re = new RegExp(
            "&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)",
            "g"
          );
          var replace = getReplacer(entities_json_1.default);
          function replacer(str) {
            if (str.substr(-1) !== ";") str += ";";
            return replace(str);
          }
          // TODO consider creating a merged map
          return function (str) {
            return String(str).replace(re, replacer);
          };
        })();
        function getReplacer(map) {
          return function replace(str) {
            if (str.charAt(1) === "#") {
              var secondChar = str.charAt(2);
              if (secondChar === "X" || secondChar === "x") {
                return decode_codepoint_1.default(parseInt(str.substr(3), 16));
              }
              return decode_codepoint_1.default(parseInt(str.substr(2), 10));
            }
            // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
            return map[str.slice(1, -1)] || str;
          };
        }
      },
      {
        "./decode_codepoint": 3,
        "./maps/entities.json": 7,
        "./maps/legacy.json": 8,
        "./maps/xml.json": 9,
      },
    ],
    3: [
      function (require, module, exports) {
        "use strict";
        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, "__esModule", { value: true });
        var decode_json_1 = __importDefault(require("./maps/decode.json"));
        // Adapted from https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
        var fromCodePoint =
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          String.fromCodePoint ||
          function (codePoint) {
            var output = "";
            if (codePoint > 0xffff) {
              codePoint -= 0x10000;
              output += String.fromCharCode(
                ((codePoint >>> 10) & 0x3ff) | 0xd800
              );
              codePoint = 0xdc00 | (codePoint & 0x3ff);
            }
            output += String.fromCharCode(codePoint);
            return output;
          };
        function decodeCodePoint(codePoint) {
          if (
            (codePoint >= 0xd800 && codePoint <= 0xdfff) ||
            codePoint > 0x10ffff
          ) {
            return "\uFFFD";
          }
          if (codePoint in decode_json_1.default) {
            codePoint = decode_json_1.default[codePoint];
          }
          return fromCodePoint(codePoint);
        }
        exports.default = decodeCodePoint;
      },
      { "./maps/decode.json": 6 },
    ],
    4: [
      function (require, module, exports) {
        "use strict";
        var __importDefault =
          (this && this.__importDefault) ||
          function (mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.escapeUTF8 =
          exports.escape =
          exports.encodeNonAsciiHTML =
          exports.encodeHTML =
          exports.encodeXML =
            void 0;
        var xml_json_1 = __importDefault(require("./maps/xml.json"));
        var inverseXML = getInverseObj(xml_json_1.default);
        var xmlReplacer = getInverseReplacer(inverseXML);
        /**
         * Encodes all non-ASCII characters, as well as characters not valid in XML
         * documents using XML entities.
         *
         * If a character has no equivalent entity, a
         * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
         */
        exports.encodeXML = getASCIIEncoder(inverseXML);
        var entities_json_1 = __importDefault(require("./maps/entities.json"));
        var inverseHTML = getInverseObj(entities_json_1.default);
        var htmlReplacer = getInverseReplacer(inverseHTML);
        /**
         * Encodes all entities and non-ASCII characters in the input.
         *
         * This includes characters that are valid ASCII characters in HTML documents.
         * For example `#` will be encoded as `&num;`. To get a more compact output,
         * consider using the `encodeNonAsciiHTML` function.
         *
         * If a character has no equivalent entity, a
         * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
         */
        exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
        /**
         * Encodes all non-ASCII characters, as well as characters not valid in HTML
         * documents using HTML entities.
         *
         * If a character has no equivalent entity, a
         * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
         */
        exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
        function getInverseObj(obj) {
          return Object.keys(obj)
            .sort()
            .reduce(function (inverse, name) {
              inverse[obj[name]] = "&" + name + ";";
              return inverse;
            }, {});
        }
        function getInverseReplacer(inverse) {
          var single = [];
          var multiple = [];
          for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
            var k = _a[_i];
            if (k.length === 1) {
              // Add value to single array
              single.push("\\" + k);
            } else {
              // Add value to multiple array
              multiple.push(k);
            }
          }
          // Add ranges to single characters.
          single.sort();
          for (var start = 0; start < single.length - 1; start++) {
            // Find the end of a run of characters
            var end = start;
            while (
              end < single.length - 1 &&
              single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)
            ) {
              end += 1;
            }
            var count = 1 + end - start;
            // We want to replace at least three characters
            if (count < 3) continue;
            single.splice(start, count, single[start] + "-" + single[end]);
          }
          multiple.unshift("[" + single.join("") + "]");
          return new RegExp(multiple.join("|"), "g");
        }
        // /[^\0-\x7F]/gu
        var reNonASCII =
          /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
        var getCodePoint =
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          String.prototype.codePointAt != null
            ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              function (str) {
                return str.codePointAt(0);
              }
            : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
              function (c) {
                return (
                  (c.charCodeAt(0) - 0xd800) * 0x400 +
                  c.charCodeAt(1) -
                  0xdc00 +
                  0x10000
                );
              };
        function singleCharReplacer(c) {
          return (
            "&#x" +
            (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0))
              .toString(16)
              .toUpperCase() +
            ";"
          );
        }
        function getInverse(inverse, re) {
          return function (data) {
            return data
              .replace(re, function (name) {
                return inverse[name];
              })
              .replace(reNonASCII, singleCharReplacer);
          };
        }
        var reEscapeChars = new RegExp(
          xmlReplacer.source + "|" + reNonASCII.source,
          "g"
        );
        /**
         * Encodes all non-ASCII characters, as well as characters not valid in XML
         * documents using numeric hexadecimal reference (eg. `&#xfc;`).
         *
         * Have a look at `escapeUTF8` if you want a more concise output at the expense
         * of reduced transportability.
         *
         * @param data String to escape.
         */
        function escape(data) {
          return data.replace(reEscapeChars, singleCharReplacer);
        }
        exports.escape = escape;
        /**
         * Encodes all characters not valid in XML documents using numeric hexadecimal
         * reference (eg. `&#xfc;`).
         *
         * Note that the output will be character-set dependent.
         *
         * @param data String to escape.
         */
        function escapeUTF8(data) {
          return data.replace(xmlReplacer, singleCharReplacer);
        }
        exports.escapeUTF8 = escapeUTF8;
        function getASCIIEncoder(obj) {
          return function (data) {
            return data.replace(reEscapeChars, function (c) {
              return obj[c] || singleCharReplacer(c);
            });
          };
        }
      },
      { "./maps/entities.json": 7, "./maps/xml.json": 9 },
    ],
    5: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.decodeXMLStrict =
          exports.decodeHTML5Strict =
          exports.decodeHTML4Strict =
          exports.decodeHTML5 =
          exports.decodeHTML4 =
          exports.decodeHTMLStrict =
          exports.decodeHTML =
          exports.decodeXML =
          exports.encodeHTML5 =
          exports.encodeHTML4 =
          exports.escapeUTF8 =
          exports.escape =
          exports.encodeNonAsciiHTML =
          exports.encodeHTML =
          exports.encodeXML =
          exports.encode =
          exports.decodeStrict =
          exports.decode =
            void 0;
        var decode_1 = require("./decode");
        var encode_1 = require("./encode");
        /**
         * Decodes a string with entities.
         *
         * @param data String to decode.
         * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
         * @deprecated Use `decodeXML` or `decodeHTML` directly.
         */
        function decode(data, level) {
          return (
            !level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML
          )(data);
        }
        exports.decode = decode;
        /**
         * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
         *
         * @param data String to decode.
         * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
         * @deprecated Use `decodeHTMLStrict` or `decodeXML` directly.
         */
        function decodeStrict(data, level) {
          return (
            !level || level <= 0
              ? decode_1.decodeXML
              : decode_1.decodeHTMLStrict
          )(data);
        }
        exports.decodeStrict = decodeStrict;
        /**
         * Encodes a string with entities.
         *
         * @param data String to encode.
         * @param level Optional level to encode at. 0 = XML, 1 = HTML. Default is 0.
         * @deprecated Use `encodeHTML`, `encodeXML` or `encodeNonAsciiHTML` directly.
         */
        function encode(data, level) {
          return (
            !level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML
          )(data);
        }
        exports.encode = encode;
        var encode_2 = require("./encode");
        Object.defineProperty(exports, "encodeXML", {
          enumerable: true,
          get: function () {
            return encode_2.encodeXML;
          },
        });
        Object.defineProperty(exports, "encodeHTML", {
          enumerable: true,
          get: function () {
            return encode_2.encodeHTML;
          },
        });
        Object.defineProperty(exports, "encodeNonAsciiHTML", {
          enumerable: true,
          get: function () {
            return encode_2.encodeNonAsciiHTML;
          },
        });
        Object.defineProperty(exports, "escape", {
          enumerable: true,
          get: function () {
            return encode_2.escape;
          },
        });
        Object.defineProperty(exports, "escapeUTF8", {
          enumerable: true,
          get: function () {
            return encode_2.escapeUTF8;
          },
        });
        // Legacy aliases (deprecated)
        Object.defineProperty(exports, "encodeHTML4", {
          enumerable: true,
          get: function () {
            return encode_2.encodeHTML;
          },
        });
        Object.defineProperty(exports, "encodeHTML5", {
          enumerable: true,
          get: function () {
            return encode_2.encodeHTML;
          },
        });
        var decode_2 = require("./decode");
        Object.defineProperty(exports, "decodeXML", {
          enumerable: true,
          get: function () {
            return decode_2.decodeXML;
          },
        });
        Object.defineProperty(exports, "decodeHTML", {
          enumerable: true,
          get: function () {
            return decode_2.decodeHTML;
          },
        });
        Object.defineProperty(exports, "decodeHTMLStrict", {
          enumerable: true,
          get: function () {
            return decode_2.decodeHTMLStrict;
          },
        });
        // Legacy aliases (deprecated)
        Object.defineProperty(exports, "decodeHTML4", {
          enumerable: true,
          get: function () {
            return decode_2.decodeHTML;
          },
        });
        Object.defineProperty(exports, "decodeHTML5", {
          enumerable: true,
          get: function () {
            return decode_2.decodeHTML;
          },
        });
        Object.defineProperty(exports, "decodeHTML4Strict", {
          enumerable: true,
          get: function () {
            return decode_2.decodeHTMLStrict;
          },
        });
        Object.defineProperty(exports, "decodeHTML5Strict", {
          enumerable: true,
          get: function () {
            return decode_2.decodeHTMLStrict;
          },
        });
        Object.defineProperty(exports, "decodeXMLStrict", {
          enumerable: true,
          get: function () {
            return decode_2.decodeXML;
          },
        });
      },
      { "./decode": 2, "./encode": 4 },
    ],
    6: [
      function (require, module, exports) {
        module.exports = {
          0: 65533,
          128: 8364,
          130: 8218,
          131: 402,
          132: 8222,
          133: 8230,
          134: 8224,
          135: 8225,
          136: 710,
          137: 8240,
          138: 352,
          139: 8249,
          140: 338,
          142: 381,
          145: 8216,
          146: 8217,
          147: 8220,
          148: 8221,
          149: 8226,
          150: 8211,
          151: 8212,
          152: 732,
          153: 8482,
          154: 353,
          155: 8250,
          156: 339,
          158: 382,
          159: 376,
        };
      },
      {},
    ],
    7: [
      function (require, module, exports) {
        module.exports = {
          Aacute: "??",
          aacute: "??",
          Abreve: "??",
          abreve: "??",
          ac: "???",
          acd: "???",
          acE: "?????",
          Acirc: "??",
          acirc: "??",
          acute: "??",
          Acy: "??",
          acy: "??",
          AElig: "??",
          aelig: "??",
          af: "???",
          Afr: "????",
          afr: "????",
          Agrave: "??",
          agrave: "??",
          alefsym: "???",
          aleph: "???",
          Alpha: "??",
          alpha: "??",
          Amacr: "??",
          amacr: "??",
          amalg: "???",
          amp: "&",
          AMP: "&",
          andand: "???",
          And: "???",
          and: "???",
          andd: "???",
          andslope: "???",
          andv: "???",
          ang: "???",
          ange: "???",
          angle: "???",
          angmsdaa: "???",
          angmsdab: "???",
          angmsdac: "???",
          angmsdad: "???",
          angmsdae: "???",
          angmsdaf: "???",
          angmsdag: "???",
          angmsdah: "???",
          angmsd: "???",
          angrt: "???",
          angrtvb: "???",
          angrtvbd: "???",
          angsph: "???",
          angst: "??",
          angzarr: "???",
          Aogon: "??",
          aogon: "??",
          Aopf: "????",
          aopf: "????",
          apacir: "???",
          ap: "???",
          apE: "???",
          ape: "???",
          apid: "???",
          apos: "'",
          ApplyFunction: "???",
          approx: "???",
          approxeq: "???",
          Aring: "??",
          aring: "??",
          Ascr: "????",
          ascr: "????",
          Assign: "???",
          ast: "*",
          asymp: "???",
          asympeq: "???",
          Atilde: "??",
          atilde: "??",
          Auml: "??",
          auml: "??",
          awconint: "???",
          awint: "???",
          backcong: "???",
          backepsilon: "??",
          backprime: "???",
          backsim: "???",
          backsimeq: "???",
          Backslash: "???",
          Barv: "???",
          barvee: "???",
          barwed: "???",
          Barwed: "???",
          barwedge: "???",
          bbrk: "???",
          bbrktbrk: "???",
          bcong: "???",
          Bcy: "??",
          bcy: "??",
          bdquo: "???",
          becaus: "???",
          because: "???",
          Because: "???",
          bemptyv: "???",
          bepsi: "??",
          bernou: "???",
          Bernoullis: "???",
          Beta: "??",
          beta: "??",
          beth: "???",
          between: "???",
          Bfr: "????",
          bfr: "????",
          bigcap: "???",
          bigcirc: "???",
          bigcup: "???",
          bigodot: "???",
          bigoplus: "???",
          bigotimes: "???",
          bigsqcup: "???",
          bigstar: "???",
          bigtriangledown: "???",
          bigtriangleup: "???",
          biguplus: "???",
          bigvee: "???",
          bigwedge: "???",
          bkarow: "???",
          blacklozenge: "???",
          blacksquare: "???",
          blacktriangle: "???",
          blacktriangledown: "???",
          blacktriangleleft: "???",
          blacktriangleright: "???",
          blank: "???",
          blk12: "???",
          blk14: "???",
          blk34: "???",
          block: "???",
          bne: "=???",
          bnequiv: "??????",
          bNot: "???",
          bnot: "???",
          Bopf: "????",
          bopf: "????",
          bot: "???",
          bottom: "???",
          bowtie: "???",
          boxbox: "???",
          boxdl: "???",
          boxdL: "???",
          boxDl: "???",
          boxDL: "???",
          boxdr: "???",
          boxdR: "???",
          boxDr: "???",
          boxDR: "???",
          boxh: "???",
          boxH: "???",
          boxhd: "???",
          boxHd: "???",
          boxhD: "???",
          boxHD: "???",
          boxhu: "???",
          boxHu: "???",
          boxhU: "???",
          boxHU: "???",
          boxminus: "???",
          boxplus: "???",
          boxtimes: "???",
          boxul: "???",
          boxuL: "???",
          boxUl: "???",
          boxUL: "???",
          boxur: "???",
          boxuR: "???",
          boxUr: "???",
          boxUR: "???",
          boxv: "???",
          boxV: "???",
          boxvh: "???",
          boxvH: "???",
          boxVh: "???",
          boxVH: "???",
          boxvl: "???",
          boxvL: "???",
          boxVl: "???",
          boxVL: "???",
          boxvr: "???",
          boxvR: "???",
          boxVr: "???",
          boxVR: "???",
          bprime: "???",
          breve: "??",
          Breve: "??",
          brvbar: "??",
          bscr: "????",
          Bscr: "???",
          bsemi: "???",
          bsim: "???",
          bsime: "???",
          bsolb: "???",
          bsol: "\\",
          bsolhsub: "???",
          bull: "???",
          bullet: "???",
          bump: "???",
          bumpE: "???",
          bumpe: "???",
          Bumpeq: "???",
          bumpeq: "???",
          Cacute: "??",
          cacute: "??",
          capand: "???",
          capbrcup: "???",
          capcap: "???",
          cap: "???",
          Cap: "???",
          capcup: "???",
          capdot: "???",
          CapitalDifferentialD: "???",
          caps: "??????",
          caret: "???",
          caron: "??",
          Cayleys: "???",
          ccaps: "???",
          Ccaron: "??",
          ccaron: "??",
          Ccedil: "??",
          ccedil: "??",
          Ccirc: "??",
          ccirc: "??",
          Cconint: "???",
          ccups: "???",
          ccupssm: "???",
          Cdot: "??",
          cdot: "??",
          cedil: "??",
          Cedilla: "??",
          cemptyv: "???",
          cent: "??",
          centerdot: "??",
          CenterDot: "??",
          cfr: "????",
          Cfr: "???",
          CHcy: "??",
          chcy: "??",
          check: "???",
          checkmark: "???",
          Chi: "??",
          chi: "??",
          circ: "??",
          circeq: "???",
          circlearrowleft: "???",
          circlearrowright: "???",
          circledast: "???",
          circledcirc: "???",
          circleddash: "???",
          CircleDot: "???",
          circledR: "??",
          circledS: "???",
          CircleMinus: "???",
          CirclePlus: "???",
          CircleTimes: "???",
          cir: "???",
          cirE: "???",
          cire: "???",
          cirfnint: "???",
          cirmid: "???",
          cirscir: "???",
          ClockwiseContourIntegral: "???",
          CloseCurlyDoubleQuote: "???",
          CloseCurlyQuote: "???",
          clubs: "???",
          clubsuit: "???",
          colon: ":",
          Colon: "???",
          Colone: "???",
          colone: "???",
          coloneq: "???",
          comma: ",",
          commat: "@",
          comp: "???",
          compfn: "???",
          complement: "???",
          complexes: "???",
          cong: "???",
          congdot: "???",
          Congruent: "???",
          conint: "???",
          Conint: "???",
          ContourIntegral: "???",
          copf: "????",
          Copf: "???",
          coprod: "???",
          Coproduct: "???",
          copy: "??",
          COPY: "??",
          copysr: "???",
          CounterClockwiseContourIntegral: "???",
          crarr: "???",
          cross: "???",
          Cross: "???",
          Cscr: "????",
          cscr: "????",
          csub: "???",
          csube: "???",
          csup: "???",
          csupe: "???",
          ctdot: "???",
          cudarrl: "???",
          cudarrr: "???",
          cuepr: "???",
          cuesc: "???",
          cularr: "???",
          cularrp: "???",
          cupbrcap: "???",
          cupcap: "???",
          CupCap: "???",
          cup: "???",
          Cup: "???",
          cupcup: "???",
          cupdot: "???",
          cupor: "???",
          cups: "??????",
          curarr: "???",
          curarrm: "???",
          curlyeqprec: "???",
          curlyeqsucc: "???",
          curlyvee: "???",
          curlywedge: "???",
          curren: "??",
          curvearrowleft: "???",
          curvearrowright: "???",
          cuvee: "???",
          cuwed: "???",
          cwconint: "???",
          cwint: "???",
          cylcty: "???",
          dagger: "???",
          Dagger: "???",
          daleth: "???",
          darr: "???",
          Darr: "???",
          dArr: "???",
          dash: "???",
          Dashv: "???",
          dashv: "???",
          dbkarow: "???",
          dblac: "??",
          Dcaron: "??",
          dcaron: "??",
          Dcy: "??",
          dcy: "??",
          ddagger: "???",
          ddarr: "???",
          DD: "???",
          dd: "???",
          DDotrahd: "???",
          ddotseq: "???",
          deg: "??",
          Del: "???",
          Delta: "??",
          delta: "??",
          demptyv: "???",
          dfisht: "???",
          Dfr: "????",
          dfr: "????",
          dHar: "???",
          dharl: "???",
          dharr: "???",
          DiacriticalAcute: "??",
          DiacriticalDot: "??",
          DiacriticalDoubleAcute: "??",
          DiacriticalGrave: "`",
          DiacriticalTilde: "??",
          diam: "???",
          diamond: "???",
          Diamond: "???",
          diamondsuit: "???",
          diams: "???",
          die: "??",
          DifferentialD: "???",
          digamma: "??",
          disin: "???",
          div: "??",
          divide: "??",
          divideontimes: "???",
          divonx: "???",
          DJcy: "??",
          djcy: "??",
          dlcorn: "???",
          dlcrop: "???",
          dollar: "$",
          Dopf: "????",
          dopf: "????",
          Dot: "??",
          dot: "??",
          DotDot: "???",
          doteq: "???",
          doteqdot: "???",
          DotEqual: "???",
          dotminus: "???",
          dotplus: "???",
          dotsquare: "???",
          doublebarwedge: "???",
          DoubleContourIntegral: "???",
          DoubleDot: "??",
          DoubleDownArrow: "???",
          DoubleLeftArrow: "???",
          DoubleLeftRightArrow: "???",
          DoubleLeftTee: "???",
          DoubleLongLeftArrow: "???",
          DoubleLongLeftRightArrow: "???",
          DoubleLongRightArrow: "???",
          DoubleRightArrow: "???",
          DoubleRightTee: "???",
          DoubleUpArrow: "???",
          DoubleUpDownArrow: "???",
          DoubleVerticalBar: "???",
          DownArrowBar: "???",
          downarrow: "???",
          DownArrow: "???",
          Downarrow: "???",
          DownArrowUpArrow: "???",
          DownBreve: "??",
          downdownarrows: "???",
          downharpoonleft: "???",
          downharpoonright: "???",
          DownLeftRightVector: "???",
          DownLeftTeeVector: "???",
          DownLeftVectorBar: "???",
          DownLeftVector: "???",
          DownRightTeeVector: "???",
          DownRightVectorBar: "???",
          DownRightVector: "???",
          DownTeeArrow: "???",
          DownTee: "???",
          drbkarow: "???",
          drcorn: "???",
          drcrop: "???",
          Dscr: "????",
          dscr: "????",
          DScy: "??",
          dscy: "??",
          dsol: "???",
          Dstrok: "??",
          dstrok: "??",
          dtdot: "???",
          dtri: "???",
          dtrif: "???",
          duarr: "???",
          duhar: "???",
          dwangle: "???",
          DZcy: "??",
          dzcy: "??",
          dzigrarr: "???",
          Eacute: "??",
          eacute: "??",
          easter: "???",
          Ecaron: "??",
          ecaron: "??",
          Ecirc: "??",
          ecirc: "??",
          ecir: "???",
          ecolon: "???",
          Ecy: "??",
          ecy: "??",
          eDDot: "???",
          Edot: "??",
          edot: "??",
          eDot: "???",
          ee: "???",
          efDot: "???",
          Efr: "????",
          efr: "????",
          eg: "???",
          Egrave: "??",
          egrave: "??",
          egs: "???",
          egsdot: "???",
          el: "???",
          Element: "???",
          elinters: "???",
          ell: "???",
          els: "???",
          elsdot: "???",
          Emacr: "??",
          emacr: "??",
          empty: "???",
          emptyset: "???",
          EmptySmallSquare: "???",
          emptyv: "???",
          EmptyVerySmallSquare: "???",
          emsp13: "???",
          emsp14: "???",
          emsp: "???",
          ENG: "??",
          eng: "??",
          ensp: "???",
          Eogon: "??",
          eogon: "??",
          Eopf: "????",
          eopf: "????",
          epar: "???",
          eparsl: "???",
          eplus: "???",
          epsi: "??",
          Epsilon: "??",
          epsilon: "??",
          epsiv: "??",
          eqcirc: "???",
          eqcolon: "???",
          eqsim: "???",
          eqslantgtr: "???",
          eqslantless: "???",
          Equal: "???",
          equals: "=",
          EqualTilde: "???",
          equest: "???",
          Equilibrium: "???",
          equiv: "???",
          equivDD: "???",
          eqvparsl: "???",
          erarr: "???",
          erDot: "???",
          escr: "???",
          Escr: "???",
          esdot: "???",
          Esim: "???",
          esim: "???",
          Eta: "??",
          eta: "??",
          ETH: "??",
          eth: "??",
          Euml: "??",
          euml: "??",
          euro: "???",
          excl: "!",
          exist: "???",
          Exists: "???",
          expectation: "???",
          exponentiale: "???",
          ExponentialE: "???",
          fallingdotseq: "???",
          Fcy: "??",
          fcy: "??",
          female: "???",
          ffilig: "???",
          fflig: "???",
          ffllig: "???",
          Ffr: "????",
          ffr: "????",
          filig: "???",
          FilledSmallSquare: "???",
          FilledVerySmallSquare: "???",
          fjlig: "fj",
          flat: "???",
          fllig: "???",
          fltns: "???",
          fnof: "??",
          Fopf: "????",
          fopf: "????",
          forall: "???",
          ForAll: "???",
          fork: "???",
          forkv: "???",
          Fouriertrf: "???",
          fpartint: "???",
          frac12: "??",
          frac13: "???",
          frac14: "??",
          frac15: "???",
          frac16: "???",
          frac18: "???",
          frac23: "???",
          frac25: "???",
          frac34: "??",
          frac35: "???",
          frac38: "???",
          frac45: "???",
          frac56: "???",
          frac58: "???",
          frac78: "???",
          frasl: "???",
          frown: "???",
          fscr: "????",
          Fscr: "???",
          gacute: "??",
          Gamma: "??",
          gamma: "??",
          Gammad: "??",
          gammad: "??",
          gap: "???",
          Gbreve: "??",
          gbreve: "??",
          Gcedil: "??",
          Gcirc: "??",
          gcirc: "??",
          Gcy: "??",
          gcy: "??",
          Gdot: "??",
          gdot: "??",
          ge: "???",
          gE: "???",
          gEl: "???",
          gel: "???",
          geq: "???",
          geqq: "???",
          geqslant: "???",
          gescc: "???",
          ges: "???",
          gesdot: "???",
          gesdoto: "???",
          gesdotol: "???",
          gesl: "??????",
          gesles: "???",
          Gfr: "????",
          gfr: "????",
          gg: "???",
          Gg: "???",
          ggg: "???",
          gimel: "???",
          GJcy: "??",
          gjcy: "??",
          gla: "???",
          gl: "???",
          glE: "???",
          glj: "???",
          gnap: "???",
          gnapprox: "???",
          gne: "???",
          gnE: "???",
          gneq: "???",
          gneqq: "???",
          gnsim: "???",
          Gopf: "????",
          gopf: "????",
          grave: "`",
          GreaterEqual: "???",
          GreaterEqualLess: "???",
          GreaterFullEqual: "???",
          GreaterGreater: "???",
          GreaterLess: "???",
          GreaterSlantEqual: "???",
          GreaterTilde: "???",
          Gscr: "????",
          gscr: "???",
          gsim: "???",
          gsime: "???",
          gsiml: "???",
          gtcc: "???",
          gtcir: "???",
          gt: ">",
          GT: ">",
          Gt: "???",
          gtdot: "???",
          gtlPar: "???",
          gtquest: "???",
          gtrapprox: "???",
          gtrarr: "???",
          gtrdot: "???",
          gtreqless: "???",
          gtreqqless: "???",
          gtrless: "???",
          gtrsim: "???",
          gvertneqq: "??????",
          gvnE: "??????",
          Hacek: "??",
          hairsp: "???",
          half: "??",
          hamilt: "???",
          HARDcy: "??",
          hardcy: "??",
          harrcir: "???",
          harr: "???",
          hArr: "???",
          harrw: "???",
          Hat: "^",
          hbar: "???",
          Hcirc: "??",
          hcirc: "??",
          hearts: "???",
          heartsuit: "???",
          hellip: "???",
          hercon: "???",
          hfr: "????",
          Hfr: "???",
          HilbertSpace: "???",
          hksearow: "???",
          hkswarow: "???",
          hoarr: "???",
          homtht: "???",
          hookleftarrow: "???",
          hookrightarrow: "???",
          hopf: "????",
          Hopf: "???",
          horbar: "???",
          HorizontalLine: "???",
          hscr: "????",
          Hscr: "???",
          hslash: "???",
          Hstrok: "??",
          hstrok: "??",
          HumpDownHump: "???",
          HumpEqual: "???",
          hybull: "???",
          hyphen: "???",
          Iacute: "??",
          iacute: "??",
          ic: "???",
          Icirc: "??",
          icirc: "??",
          Icy: "??",
          icy: "??",
          Idot: "??",
          IEcy: "??",
          iecy: "??",
          iexcl: "??",
          iff: "???",
          ifr: "????",
          Ifr: "???",
          Igrave: "??",
          igrave: "??",
          ii: "???",
          iiiint: "???",
          iiint: "???",
          iinfin: "???",
          iiota: "???",
          IJlig: "??",
          ijlig: "??",
          Imacr: "??",
          imacr: "??",
          image: "???",
          ImaginaryI: "???",
          imagline: "???",
          imagpart: "???",
          imath: "??",
          Im: "???",
          imof: "???",
          imped: "??",
          Implies: "???",
          incare: "???",
          in: "???",
          infin: "???",
          infintie: "???",
          inodot: "??",
          intcal: "???",
          int: "???",
          Int: "???",
          integers: "???",
          Integral: "???",
          intercal: "???",
          Intersection: "???",
          intlarhk: "???",
          intprod: "???",
          InvisibleComma: "???",
          InvisibleTimes: "???",
          IOcy: "??",
          iocy: "??",
          Iogon: "??",
          iogon: "??",
          Iopf: "????",
          iopf: "????",
          Iota: "??",
          iota: "??",
          iprod: "???",
          iquest: "??",
          iscr: "????",
          Iscr: "???",
          isin: "???",
          isindot: "???",
          isinE: "???",
          isins: "???",
          isinsv: "???",
          isinv: "???",
          it: "???",
          Itilde: "??",
          itilde: "??",
          Iukcy: "??",
          iukcy: "??",
          Iuml: "??",
          iuml: "??",
          Jcirc: "??",
          jcirc: "??",
          Jcy: "??",
          jcy: "??",
          Jfr: "????",
          jfr: "????",
          jmath: "??",
          Jopf: "????",
          jopf: "????",
          Jscr: "????",
          jscr: "????",
          Jsercy: "??",
          jsercy: "??",
          Jukcy: "??",
          jukcy: "??",
          Kappa: "??",
          kappa: "??",
          kappav: "??",
          Kcedil: "??",
          kcedil: "??",
          Kcy: "??",
          kcy: "??",
          Kfr: "????",
          kfr: "????",
          kgreen: "??",
          KHcy: "??",
          khcy: "??",
          KJcy: "??",
          kjcy: "??",
          Kopf: "????",
          kopf: "????",
          Kscr: "????",
          kscr: "????",
          lAarr: "???",
          Lacute: "??",
          lacute: "??",
          laemptyv: "???",
          lagran: "???",
          Lambda: "??",
          lambda: "??",
          lang: "???",
          Lang: "???",
          langd: "???",
          langle: "???",
          lap: "???",
          Laplacetrf: "???",
          laquo: "??",
          larrb: "???",
          larrbfs: "???",
          larr: "???",
          Larr: "???",
          lArr: "???",
          larrfs: "???",
          larrhk: "???",
          larrlp: "???",
          larrpl: "???",
          larrsim: "???",
          larrtl: "???",
          latail: "???",
          lAtail: "???",
          lat: "???",
          late: "???",
          lates: "??????",
          lbarr: "???",
          lBarr: "???",
          lbbrk: "???",
          lbrace: "{",
          lbrack: "[",
          lbrke: "???",
          lbrksld: "???",
          lbrkslu: "???",
          Lcaron: "??",
          lcaron: "??",
          Lcedil: "??",
          lcedil: "??",
          lceil: "???",
          lcub: "{",
          Lcy: "??",
          lcy: "??",
          ldca: "???",
          ldquo: "???",
          ldquor: "???",
          ldrdhar: "???",
          ldrushar: "???",
          ldsh: "???",
          le: "???",
          lE: "???",
          LeftAngleBracket: "???",
          LeftArrowBar: "???",
          leftarrow: "???",
          LeftArrow: "???",
          Leftarrow: "???",
          LeftArrowRightArrow: "???",
          leftarrowtail: "???",
          LeftCeiling: "???",
          LeftDoubleBracket: "???",
          LeftDownTeeVector: "???",
          LeftDownVectorBar: "???",
          LeftDownVector: "???",
          LeftFloor: "???",
          leftharpoondown: "???",
          leftharpoonup: "???",
          leftleftarrows: "???",
          leftrightarrow: "???",
          LeftRightArrow: "???",
          Leftrightarrow: "???",
          leftrightarrows: "???",
          leftrightharpoons: "???",
          leftrightsquigarrow: "???",
          LeftRightVector: "???",
          LeftTeeArrow: "???",
          LeftTee: "???",
          LeftTeeVector: "???",
          leftthreetimes: "???",
          LeftTriangleBar: "???",
          LeftTriangle: "???",
          LeftTriangleEqual: "???",
          LeftUpDownVector: "???",
          LeftUpTeeVector: "???",
          LeftUpVectorBar: "???",
          LeftUpVector: "???",
          LeftVectorBar: "???",
          LeftVector: "???",
          lEg: "???",
          leg: "???",
          leq: "???",
          leqq: "???",
          leqslant: "???",
          lescc: "???",
          les: "???",
          lesdot: "???",
          lesdoto: "???",
          lesdotor: "???",
          lesg: "??????",
          lesges: "???",
          lessapprox: "???",
          lessdot: "???",
          lesseqgtr: "???",
          lesseqqgtr: "???",
          LessEqualGreater: "???",
          LessFullEqual: "???",
          LessGreater: "???",
          lessgtr: "???",
          LessLess: "???",
          lesssim: "???",
          LessSlantEqual: "???",
          LessTilde: "???",
          lfisht: "???",
          lfloor: "???",
          Lfr: "????",
          lfr: "????",
          lg: "???",
          lgE: "???",
          lHar: "???",
          lhard: "???",
          lharu: "???",
          lharul: "???",
          lhblk: "???",
          LJcy: "??",
          ljcy: "??",
          llarr: "???",
          ll: "???",
          Ll: "???",
          llcorner: "???",
          Lleftarrow: "???",
          llhard: "???",
          lltri: "???",
          Lmidot: "??",
          lmidot: "??",
          lmoustache: "???",
          lmoust: "???",
          lnap: "???",
          lnapprox: "???",
          lne: "???",
          lnE: "???",
          lneq: "???",
          lneqq: "???",
          lnsim: "???",
          loang: "???",
          loarr: "???",
          lobrk: "???",
          longleftarrow: "???",
          LongLeftArrow: "???",
          Longleftarrow: "???",
          longleftrightarrow: "???",
          LongLeftRightArrow: "???",
          Longleftrightarrow: "???",
          longmapsto: "???",
          longrightarrow: "???",
          LongRightArrow: "???",
          Longrightarrow: "???",
          looparrowleft: "???",
          looparrowright: "???",
          lopar: "???",
          Lopf: "????",
          lopf: "????",
          loplus: "???",
          lotimes: "???",
          lowast: "???",
          lowbar: "_",
          LowerLeftArrow: "???",
          LowerRightArrow: "???",
          loz: "???",
          lozenge: "???",
          lozf: "???",
          lpar: "(",
          lparlt: "???",
          lrarr: "???",
          lrcorner: "???",
          lrhar: "???",
          lrhard: "???",
          lrm: "???",
          lrtri: "???",
          lsaquo: "???",
          lscr: "????",
          Lscr: "???",
          lsh: "???",
          Lsh: "???",
          lsim: "???",
          lsime: "???",
          lsimg: "???",
          lsqb: "[",
          lsquo: "???",
          lsquor: "???",
          Lstrok: "??",
          lstrok: "??",
          ltcc: "???",
          ltcir: "???",
          lt: "<",
          LT: "<",
          Lt: "???",
          ltdot: "???",
          lthree: "???",
          ltimes: "???",
          ltlarr: "???",
          ltquest: "???",
          ltri: "???",
          ltrie: "???",
          ltrif: "???",
          ltrPar: "???",
          lurdshar: "???",
          luruhar: "???",
          lvertneqq: "??????",
          lvnE: "??????",
          macr: "??",
          male: "???",
          malt: "???",
          maltese: "???",
          Map: "???",
          map: "???",
          mapsto: "???",
          mapstodown: "???",
          mapstoleft: "???",
          mapstoup: "???",
          marker: "???",
          mcomma: "???",
          Mcy: "??",
          mcy: "??",
          mdash: "???",
          mDDot: "???",
          measuredangle: "???",
          MediumSpace: "???",
          Mellintrf: "???",
          Mfr: "????",
          mfr: "????",
          mho: "???",
          micro: "??",
          midast: "*",
          midcir: "???",
          mid: "???",
          middot: "??",
          minusb: "???",
          minus: "???",
          minusd: "???",
          minusdu: "???",
          MinusPlus: "???",
          mlcp: "???",
          mldr: "???",
          mnplus: "???",
          models: "???",
          Mopf: "????",
          mopf: "????",
          mp: "???",
          mscr: "????",
          Mscr: "???",
          mstpos: "???",
          Mu: "??",
          mu: "??",
          multimap: "???",
          mumap: "???",
          nabla: "???",
          Nacute: "??",
          nacute: "??",
          nang: "??????",
          nap: "???",
          napE: "?????",
          napid: "?????",
          napos: "??",
          napprox: "???",
          natural: "???",
          naturals: "???",
          natur: "???",
          nbsp: "??",
          nbump: "?????",
          nbumpe: "?????",
          ncap: "???",
          Ncaron: "??",
          ncaron: "??",
          Ncedil: "??",
          ncedil: "??",
          ncong: "???",
          ncongdot: "?????",
          ncup: "???",
          Ncy: "??",
          ncy: "??",
          ndash: "???",
          nearhk: "???",
          nearr: "???",
          neArr: "???",
          nearrow: "???",
          ne: "???",
          nedot: "?????",
          NegativeMediumSpace: "???",
          NegativeThickSpace: "???",
          NegativeThinSpace: "???",
          NegativeVeryThinSpace: "???",
          nequiv: "???",
          nesear: "???",
          nesim: "?????",
          NestedGreaterGreater: "???",
          NestedLessLess: "???",
          NewLine: "\n",
          nexist: "???",
          nexists: "???",
          Nfr: "????",
          nfr: "????",
          ngE: "?????",
          nge: "???",
          ngeq: "???",
          ngeqq: "?????",
          ngeqslant: "?????",
          nges: "?????",
          nGg: "?????",
          ngsim: "???",
          nGt: "??????",
          ngt: "???",
          ngtr: "???",
          nGtv: "?????",
          nharr: "???",
          nhArr: "???",
          nhpar: "???",
          ni: "???",
          nis: "???",
          nisd: "???",
          niv: "???",
          NJcy: "??",
          njcy: "??",
          nlarr: "???",
          nlArr: "???",
          nldr: "???",
          nlE: "?????",
          nle: "???",
          nleftarrow: "???",
          nLeftarrow: "???",
          nleftrightarrow: "???",
          nLeftrightarrow: "???",
          nleq: "???",
          nleqq: "?????",
          nleqslant: "?????",
          nles: "?????",
          nless: "???",
          nLl: "?????",
          nlsim: "???",
          nLt: "??????",
          nlt: "???",
          nltri: "???",
          nltrie: "???",
          nLtv: "?????",
          nmid: "???",
          NoBreak: "???",
          NonBreakingSpace: "??",
          nopf: "????",
          Nopf: "???",
          Not: "???",
          not: "??",
          NotCongruent: "???",
          NotCupCap: "???",
          NotDoubleVerticalBar: "???",
          NotElement: "???",
          NotEqual: "???",
          NotEqualTilde: "?????",
          NotExists: "???",
          NotGreater: "???",
          NotGreaterEqual: "???",
          NotGreaterFullEqual: "?????",
          NotGreaterGreater: "?????",
          NotGreaterLess: "???",
          NotGreaterSlantEqual: "?????",
          NotGreaterTilde: "???",
          NotHumpDownHump: "?????",
          NotHumpEqual: "?????",
          notin: "???",
          notindot: "?????",
          notinE: "?????",
          notinva: "???",
          notinvb: "???",
          notinvc: "???",
          NotLeftTriangleBar: "?????",
          NotLeftTriangle: "???",
          NotLeftTriangleEqual: "???",
          NotLess: "???",
          NotLessEqual: "???",
          NotLessGreater: "???",
          NotLessLess: "?????",
          NotLessSlantEqual: "?????",
          NotLessTilde: "???",
          NotNestedGreaterGreater: "?????",
          NotNestedLessLess: "?????",
          notni: "???",
          notniva: "???",
          notnivb: "???",
          notnivc: "???",
          NotPrecedes: "???",
          NotPrecedesEqual: "?????",
          NotPrecedesSlantEqual: "???",
          NotReverseElement: "???",
          NotRightTriangleBar: "?????",
          NotRightTriangle: "???",
          NotRightTriangleEqual: "???",
          NotSquareSubset: "?????",
          NotSquareSubsetEqual: "???",
          NotSquareSuperset: "?????",
          NotSquareSupersetEqual: "???",
          NotSubset: "??????",
          NotSubsetEqual: "???",
          NotSucceeds: "???",
          NotSucceedsEqual: "?????",
          NotSucceedsSlantEqual: "???",
          NotSucceedsTilde: "?????",
          NotSuperset: "??????",
          NotSupersetEqual: "???",
          NotTilde: "???",
          NotTildeEqual: "???",
          NotTildeFullEqual: "???",
          NotTildeTilde: "???",
          NotVerticalBar: "???",
          nparallel: "???",
          npar: "???",
          nparsl: "??????",
          npart: "?????",
          npolint: "???",
          npr: "???",
          nprcue: "???",
          nprec: "???",
          npreceq: "?????",
          npre: "?????",
          nrarrc: "?????",
          nrarr: "???",
          nrArr: "???",
          nrarrw: "?????",
          nrightarrow: "???",
          nRightarrow: "???",
          nrtri: "???",
          nrtrie: "???",
          nsc: "???",
          nsccue: "???",
          nsce: "?????",
          Nscr: "????",
          nscr: "????",
          nshortmid: "???",
          nshortparallel: "???",
          nsim: "???",
          nsime: "???",
          nsimeq: "???",
          nsmid: "???",
          nspar: "???",
          nsqsube: "???",
          nsqsupe: "???",
          nsub: "???",
          nsubE: "?????",
          nsube: "???",
          nsubset: "??????",
          nsubseteq: "???",
          nsubseteqq: "?????",
          nsucc: "???",
          nsucceq: "?????",
          nsup: "???",
          nsupE: "?????",
          nsupe: "???",
          nsupset: "??????",
          nsupseteq: "???",
          nsupseteqq: "?????",
          ntgl: "???",
          Ntilde: "??",
          ntilde: "??",
          ntlg: "???",
          ntriangleleft: "???",
          ntrianglelefteq: "???",
          ntriangleright: "???",
          ntrianglerighteq: "???",
          Nu: "??",
          nu: "??",
          num: "#",
          numero: "???",
          numsp: "???",
          nvap: "??????",
          nvdash: "???",
          nvDash: "???",
          nVdash: "???",
          nVDash: "???",
          nvge: "??????",
          nvgt: ">???",
          nvHarr: "???",
          nvinfin: "???",
          nvlArr: "???",
          nvle: "??????",
          nvlt: "<???",
          nvltrie: "??????",
          nvrArr: "???",
          nvrtrie: "??????",
          nvsim: "??????",
          nwarhk: "???",
          nwarr: "???",
          nwArr: "???",
          nwarrow: "???",
          nwnear: "???",
          Oacute: "??",
          oacute: "??",
          oast: "???",
          Ocirc: "??",
          ocirc: "??",
          ocir: "???",
          Ocy: "??",
          ocy: "??",
          odash: "???",
          Odblac: "??",
          odblac: "??",
          odiv: "???",
          odot: "???",
          odsold: "???",
          OElig: "??",
          oelig: "??",
          ofcir: "???",
          Ofr: "????",
          ofr: "????",
          ogon: "??",
          Ograve: "??",
          ograve: "??",
          ogt: "???",
          ohbar: "???",
          ohm: "??",
          oint: "???",
          olarr: "???",
          olcir: "???",
          olcross: "???",
          oline: "???",
          olt: "???",
          Omacr: "??",
          omacr: "??",
          Omega: "??",
          omega: "??",
          Omicron: "??",
          omicron: "??",
          omid: "???",
          ominus: "???",
          Oopf: "????",
          oopf: "????",
          opar: "???",
          OpenCurlyDoubleQuote: "???",
          OpenCurlyQuote: "???",
          operp: "???",
          oplus: "???",
          orarr: "???",
          Or: "???",
          or: "???",
          ord: "???",
          order: "???",
          orderof: "???",
          ordf: "??",
          ordm: "??",
          origof: "???",
          oror: "???",
          orslope: "???",
          orv: "???",
          oS: "???",
          Oscr: "????",
          oscr: "???",
          Oslash: "??",
          oslash: "??",
          osol: "???",
          Otilde: "??",
          otilde: "??",
          otimesas: "???",
          Otimes: "???",
          otimes: "???",
          Ouml: "??",
          ouml: "??",
          ovbar: "???",
          OverBar: "???",
          OverBrace: "???",
          OverBracket: "???",
          OverParenthesis: "???",
          para: "??",
          parallel: "???",
          par: "???",
          parsim: "???",
          parsl: "???",
          part: "???",
          PartialD: "???",
          Pcy: "??",
          pcy: "??",
          percnt: "%",
          period: ".",
          permil: "???",
          perp: "???",
          pertenk: "???",
          Pfr: "????",
          pfr: "????",
          Phi: "??",
          phi: "??",
          phiv: "??",
          phmmat: "???",
          phone: "???",
          Pi: "??",
          pi: "??",
          pitchfork: "???",
          piv: "??",
          planck: "???",
          planckh: "???",
          plankv: "???",
          plusacir: "???",
          plusb: "???",
          pluscir: "???",
          plus: "+",
          plusdo: "???",
          plusdu: "???",
          pluse: "???",
          PlusMinus: "??",
          plusmn: "??",
          plussim: "???",
          plustwo: "???",
          pm: "??",
          Poincareplane: "???",
          pointint: "???",
          popf: "????",
          Popf: "???",
          pound: "??",
          prap: "???",
          Pr: "???",
          pr: "???",
          prcue: "???",
          precapprox: "???",
          prec: "???",
          preccurlyeq: "???",
          Precedes: "???",
          PrecedesEqual: "???",
          PrecedesSlantEqual: "???",
          PrecedesTilde: "???",
          preceq: "???",
          precnapprox: "???",
          precneqq: "???",
          precnsim: "???",
          pre: "???",
          prE: "???",
          precsim: "???",
          prime: "???",
          Prime: "???",
          primes: "???",
          prnap: "???",
          prnE: "???",
          prnsim: "???",
          prod: "???",
          Product: "???",
          profalar: "???",
          profline: "???",
          profsurf: "???",
          prop: "???",
          Proportional: "???",
          Proportion: "???",
          propto: "???",
          prsim: "???",
          prurel: "???",
          Pscr: "????",
          pscr: "????",
          Psi: "??",
          psi: "??",
          puncsp: "???",
          Qfr: "????",
          qfr: "????",
          qint: "???",
          qopf: "????",
          Qopf: "???",
          qprime: "???",
          Qscr: "????",
          qscr: "????",
          quaternions: "???",
          quatint: "???",
          quest: "?",
          questeq: "???",
          quot: '"',
          QUOT: '"',
          rAarr: "???",
          race: "?????",
          Racute: "??",
          racute: "??",
          radic: "???",
          raemptyv: "???",
          rang: "???",
          Rang: "???",
          rangd: "???",
          range: "???",
          rangle: "???",
          raquo: "??",
          rarrap: "???",
          rarrb: "???",
          rarrbfs: "???",
          rarrc: "???",
          rarr: "???",
          Rarr: "???",
          rArr: "???",
          rarrfs: "???",
          rarrhk: "???",
          rarrlp: "???",
          rarrpl: "???",
          rarrsim: "???",
          Rarrtl: "???",
          rarrtl: "???",
          rarrw: "???",
          ratail: "???",
          rAtail: "???",
          ratio: "???",
          rationals: "???",
          rbarr: "???",
          rBarr: "???",
          RBarr: "???",
          rbbrk: "???",
          rbrace: "}",
          rbrack: "]",
          rbrke: "???",
          rbrksld: "???",
          rbrkslu: "???",
          Rcaron: "??",
          rcaron: "??",
          Rcedil: "??",
          rcedil: "??",
          rceil: "???",
          rcub: "}",
          Rcy: "??",
          rcy: "??",
          rdca: "???",
          rdldhar: "???",
          rdquo: "???",
          rdquor: "???",
          rdsh: "???",
          real: "???",
          realine: "???",
          realpart: "???",
          reals: "???",
          Re: "???",
          rect: "???",
          reg: "??",
          REG: "??",
          ReverseElement: "???",
          ReverseEquilibrium: "???",
          ReverseUpEquilibrium: "???",
          rfisht: "???",
          rfloor: "???",
          rfr: "????",
          Rfr: "???",
          rHar: "???",
          rhard: "???",
          rharu: "???",
          rharul: "???",
          Rho: "??",
          rho: "??",
          rhov: "??",
          RightAngleBracket: "???",
          RightArrowBar: "???",
          rightarrow: "???",
          RightArrow: "???",
          Rightarrow: "???",
          RightArrowLeftArrow: "???",
          rightarrowtail: "???",
          RightCeiling: "???",
          RightDoubleBracket: "???",
          RightDownTeeVector: "???",
          RightDownVectorBar: "???",
          RightDownVector: "???",
          RightFloor: "???",
          rightharpoondown: "???",
          rightharpoonup: "???",
          rightleftarrows: "???",
          rightleftharpoons: "???",
          rightrightarrows: "???",
          rightsquigarrow: "???",
          RightTeeArrow: "???",
          RightTee: "???",
          RightTeeVector: "???",
          rightthreetimes: "???",
          RightTriangleBar: "???",
          RightTriangle: "???",
          RightTriangleEqual: "???",
          RightUpDownVector: "???",
          RightUpTeeVector: "???",
          RightUpVectorBar: "???",
          RightUpVector: "???",
          RightVectorBar: "???",
          RightVector: "???",
          ring: "??",
          risingdotseq: "???",
          rlarr: "???",
          rlhar: "???",
          rlm: "???",
          rmoustache: "???",
          rmoust: "???",
          rnmid: "???",
          roang: "???",
          roarr: "???",
          robrk: "???",
          ropar: "???",
          ropf: "????",
          Ropf: "???",
          roplus: "???",
          rotimes: "???",
          RoundImplies: "???",
          rpar: ")",
          rpargt: "???",
          rppolint: "???",
          rrarr: "???",
          Rrightarrow: "???",
          rsaquo: "???",
          rscr: "????",
          Rscr: "???",
          rsh: "???",
          Rsh: "???",
          rsqb: "]",
          rsquo: "???",
          rsquor: "???",
          rthree: "???",
          rtimes: "???",
          rtri: "???",
          rtrie: "???",
          rtrif: "???",
          rtriltri: "???",
          RuleDelayed: "???",
          ruluhar: "???",
          rx: "???",
          Sacute: "??",
          sacute: "??",
          sbquo: "???",
          scap: "???",
          Scaron: "??",
          scaron: "??",
          Sc: "???",
          sc: "???",
          sccue: "???",
          sce: "???",
          scE: "???",
          Scedil: "??",
          scedil: "??",
          Scirc: "??",
          scirc: "??",
          scnap: "???",
          scnE: "???",
          scnsim: "???",
          scpolint: "???",
          scsim: "???",
          Scy: "??",
          scy: "??",
          sdotb: "???",
          sdot: "???",
          sdote: "???",
          searhk: "???",
          searr: "???",
          seArr: "???",
          searrow: "???",
          sect: "??",
          semi: ";",
          seswar: "???",
          setminus: "???",
          setmn: "???",
          sext: "???",
          Sfr: "????",
          sfr: "????",
          sfrown: "???",
          sharp: "???",
          SHCHcy: "??",
          shchcy: "??",
          SHcy: "??",
          shcy: "??",
          ShortDownArrow: "???",
          ShortLeftArrow: "???",
          shortmid: "???",
          shortparallel: "???",
          ShortRightArrow: "???",
          ShortUpArrow: "???",
          shy: "??",
          Sigma: "??",
          sigma: "??",
          sigmaf: "??",
          sigmav: "??",
          sim: "???",
          simdot: "???",
          sime: "???",
          simeq: "???",
          simg: "???",
          simgE: "???",
          siml: "???",
          simlE: "???",
          simne: "???",
          simplus: "???",
          simrarr: "???",
          slarr: "???",
          SmallCircle: "???",
          smallsetminus: "???",
          smashp: "???",
          smeparsl: "???",
          smid: "???",
          smile: "???",
          smt: "???",
          smte: "???",
          smtes: "??????",
          SOFTcy: "??",
          softcy: "??",
          solbar: "???",
          solb: "???",
          sol: "/",
          Sopf: "????",
          sopf: "????",
          spades: "???",
          spadesuit: "???",
          spar: "???",
          sqcap: "???",
          sqcaps: "??????",
          sqcup: "???",
          sqcups: "??????",
          Sqrt: "???",
          sqsub: "???",
          sqsube: "???",
          sqsubset: "???",
          sqsubseteq: "???",
          sqsup: "???",
          sqsupe: "???",
          sqsupset: "???",
          sqsupseteq: "???",
          square: "???",
          Square: "???",
          SquareIntersection: "???",
          SquareSubset: "???",
          SquareSubsetEqual: "???",
          SquareSuperset: "???",
          SquareSupersetEqual: "???",
          SquareUnion: "???",
          squarf: "???",
          squ: "???",
          squf: "???",
          srarr: "???",
          Sscr: "????",
          sscr: "????",
          ssetmn: "???",
          ssmile: "???",
          sstarf: "???",
          Star: "???",
          star: "???",
          starf: "???",
          straightepsilon: "??",
          straightphi: "??",
          strns: "??",
          sub: "???",
          Sub: "???",
          subdot: "???",
          subE: "???",
          sube: "???",
          subedot: "???",
          submult: "???",
          subnE: "???",
          subne: "???",
          subplus: "???",
          subrarr: "???",
          subset: "???",
          Subset: "???",
          subseteq: "???",
          subseteqq: "???",
          SubsetEqual: "???",
          subsetneq: "???",
          subsetneqq: "???",
          subsim: "???",
          subsub: "???",
          subsup: "???",
          succapprox: "???",
          succ: "???",
          succcurlyeq: "???",
          Succeeds: "???",
          SucceedsEqual: "???",
          SucceedsSlantEqual: "???",
          SucceedsTilde: "???",
          succeq: "???",
          succnapprox: "???",
          succneqq: "???",
          succnsim: "???",
          succsim: "???",
          SuchThat: "???",
          sum: "???",
          Sum: "???",
          sung: "???",
          sup1: "??",
          sup2: "??",
          sup3: "??",
          sup: "???",
          Sup: "???",
          supdot: "???",
          supdsub: "???",
          supE: "???",
          supe: "???",
          supedot: "???",
          Superset: "???",
          SupersetEqual: "???",
          suphsol: "???",
          suphsub: "???",
          suplarr: "???",
          supmult: "???",
          supnE: "???",
          supne: "???",
          supplus: "???",
          supset: "???",
          Supset: "???",
          supseteq: "???",
          supseteqq: "???",
          supsetneq: "???",
          supsetneqq: "???",
          supsim: "???",
          supsub: "???",
          supsup: "???",
          swarhk: "???",
          swarr: "???",
          swArr: "???",
          swarrow: "???",
          swnwar: "???",
          szlig: "??",
          Tab: "\t",
          target: "???",
          Tau: "??",
          tau: "??",
          tbrk: "???",
          Tcaron: "??",
          tcaron: "??",
          Tcedil: "??",
          tcedil: "??",
          Tcy: "??",
          tcy: "??",
          tdot: "???",
          telrec: "???",
          Tfr: "????",
          tfr: "????",
          there4: "???",
          therefore: "???",
          Therefore: "???",
          Theta: "??",
          theta: "??",
          thetasym: "??",
          thetav: "??",
          thickapprox: "???",
          thicksim: "???",
          ThickSpace: "??????",
          ThinSpace: "???",
          thinsp: "???",
          thkap: "???",
          thksim: "???",
          THORN: "??",
          thorn: "??",
          tilde: "??",
          Tilde: "???",
          TildeEqual: "???",
          TildeFullEqual: "???",
          TildeTilde: "???",
          timesbar: "???",
          timesb: "???",
          times: "??",
          timesd: "???",
          tint: "???",
          toea: "???",
          topbot: "???",
          topcir: "???",
          top: "???",
          Topf: "????",
          topf: "????",
          topfork: "???",
          tosa: "???",
          tprime: "???",
          trade: "???",
          TRADE: "???",
          triangle: "???",
          triangledown: "???",
          triangleleft: "???",
          trianglelefteq: "???",
          triangleq: "???",
          triangleright: "???",
          trianglerighteq: "???",
          tridot: "???",
          trie: "???",
          triminus: "???",
          TripleDot: "???",
          triplus: "???",
          trisb: "???",
          tritime: "???",
          trpezium: "???",
          Tscr: "????",
          tscr: "????",
          TScy: "??",
          tscy: "??",
          TSHcy: "??",
          tshcy: "??",
          Tstrok: "??",
          tstrok: "??",
          twixt: "???",
          twoheadleftarrow: "???",
          twoheadrightarrow: "???",
          Uacute: "??",
          uacute: "??",
          uarr: "???",
          Uarr: "???",
          uArr: "???",
          Uarrocir: "???",
          Ubrcy: "??",
          ubrcy: "??",
          Ubreve: "??",
          ubreve: "??",
          Ucirc: "??",
          ucirc: "??",
          Ucy: "??",
          ucy: "??",
          udarr: "???",
          Udblac: "??",
          udblac: "??",
          udhar: "???",
          ufisht: "???",
          Ufr: "????",
          ufr: "????",
          Ugrave: "??",
          ugrave: "??",
          uHar: "???",
          uharl: "???",
          uharr: "???",
          uhblk: "???",
          ulcorn: "???",
          ulcorner: "???",
          ulcrop: "???",
          ultri: "???",
          Umacr: "??",
          umacr: "??",
          uml: "??",
          UnderBar: "_",
          UnderBrace: "???",
          UnderBracket: "???",
          UnderParenthesis: "???",
          Union: "???",
          UnionPlus: "???",
          Uogon: "??",
          uogon: "??",
          Uopf: "????",
          uopf: "????",
          UpArrowBar: "???",
          uparrow: "???",
          UpArrow: "???",
          Uparrow: "???",
          UpArrowDownArrow: "???",
          updownarrow: "???",
          UpDownArrow: "???",
          Updownarrow: "???",
          UpEquilibrium: "???",
          upharpoonleft: "???",
          upharpoonright: "???",
          uplus: "???",
          UpperLeftArrow: "???",
          UpperRightArrow: "???",
          upsi: "??",
          Upsi: "??",
          upsih: "??",
          Upsilon: "??",
          upsilon: "??",
          UpTeeArrow: "???",
          UpTee: "???",
          upuparrows: "???",
          urcorn: "???",
          urcorner: "???",
          urcrop: "???",
          Uring: "??",
          uring: "??",
          urtri: "???",
          Uscr: "????",
          uscr: "????",
          utdot: "???",
          Utilde: "??",
          utilde: "??",
          utri: "???",
          utrif: "???",
          uuarr: "???",
          Uuml: "??",
          uuml: "??",
          uwangle: "???",
          vangrt: "???",
          varepsilon: "??",
          varkappa: "??",
          varnothing: "???",
          varphi: "??",
          varpi: "??",
          varpropto: "???",
          varr: "???",
          vArr: "???",
          varrho: "??",
          varsigma: "??",
          varsubsetneq: "??????",
          varsubsetneqq: "??????",
          varsupsetneq: "??????",
          varsupsetneqq: "??????",
          vartheta: "??",
          vartriangleleft: "???",
          vartriangleright: "???",
          vBar: "???",
          Vbar: "???",
          vBarv: "???",
          Vcy: "??",
          vcy: "??",
          vdash: "???",
          vDash: "???",
          Vdash: "???",
          VDash: "???",
          Vdashl: "???",
          veebar: "???",
          vee: "???",
          Vee: "???",
          veeeq: "???",
          vellip: "???",
          verbar: "|",
          Verbar: "???",
          vert: "|",
          Vert: "???",
          VerticalBar: "???",
          VerticalLine: "|",
          VerticalSeparator: "???",
          VerticalTilde: "???",
          VeryThinSpace: "???",
          Vfr: "????",
          vfr: "????",
          vltri: "???",
          vnsub: "??????",
          vnsup: "??????",
          Vopf: "????",
          vopf: "????",
          vprop: "???",
          vrtri: "???",
          Vscr: "????",
          vscr: "????",
          vsubnE: "??????",
          vsubne: "??????",
          vsupnE: "??????",
          vsupne: "??????",
          Vvdash: "???",
          vzigzag: "???",
          Wcirc: "??",
          wcirc: "??",
          wedbar: "???",
          wedge: "???",
          Wedge: "???",
          wedgeq: "???",
          weierp: "???",
          Wfr: "????",
          wfr: "????",
          Wopf: "????",
          wopf: "????",
          wp: "???",
          wr: "???",
          wreath: "???",
          Wscr: "????",
          wscr: "????",
          xcap: "???",
          xcirc: "???",
          xcup: "???",
          xdtri: "???",
          Xfr: "????",
          xfr: "????",
          xharr: "???",
          xhArr: "???",
          Xi: "??",
          xi: "??",
          xlarr: "???",
          xlArr: "???",
          xmap: "???",
          xnis: "???",
          xodot: "???",
          Xopf: "????",
          xopf: "????",
          xoplus: "???",
          xotime: "???",
          xrarr: "???",
          xrArr: "???",
          Xscr: "????",
          xscr: "????",
          xsqcup: "???",
          xuplus: "???",
          xutri: "???",
          xvee: "???",
          xwedge: "???",
          Yacute: "??",
          yacute: "??",
          YAcy: "??",
          yacy: "??",
          Ycirc: "??",
          ycirc: "??",
          Ycy: "??",
          ycy: "??",
          yen: "??",
          Yfr: "????",
          yfr: "????",
          YIcy: "??",
          yicy: "??",
          Yopf: "????",
          yopf: "????",
          Yscr: "????",
          yscr: "????",
          YUcy: "??",
          yucy: "??",
          yuml: "??",
          Yuml: "??",
          Zacute: "??",
          zacute: "??",
          Zcaron: "??",
          zcaron: "??",
          Zcy: "??",
          zcy: "??",
          Zdot: "??",
          zdot: "??",
          zeetrf: "???",
          ZeroWidthSpace: "???",
          Zeta: "??",
          zeta: "??",
          zfr: "????",
          Zfr: "???",
          ZHcy: "??",
          zhcy: "??",
          zigrarr: "???",
          zopf: "????",
          Zopf: "???",
          Zscr: "????",
          zscr: "????",
          zwj: "???",
          zwnj: "???",
        };
      },
      {},
    ],
    8: [
      function (require, module, exports) {
        module.exports = {
          Aacute: "??",
          aacute: "??",
          Acirc: "??",
          acirc: "??",
          acute: "??",
          AElig: "??",
          aelig: "??",
          Agrave: "??",
          agrave: "??",
          amp: "&",
          AMP: "&",
          Aring: "??",
          aring: "??",
          Atilde: "??",
          atilde: "??",
          Auml: "??",
          auml: "??",
          brvbar: "??",
          Ccedil: "??",
          ccedil: "??",
          cedil: "??",
          cent: "??",
          copy: "??",
          COPY: "??",
          curren: "??",
          deg: "??",
          divide: "??",
          Eacute: "??",
          eacute: "??",
          Ecirc: "??",
          ecirc: "??",
          Egrave: "??",
          egrave: "??",
          ETH: "??",
          eth: "??",
          Euml: "??",
          euml: "??",
          frac12: "??",
          frac14: "??",
          frac34: "??",
          gt: ">",
          GT: ">",
          Iacute: "??",
          iacute: "??",
          Icirc: "??",
          icirc: "??",
          iexcl: "??",
          Igrave: "??",
          igrave: "??",
          iquest: "??",
          Iuml: "??",
          iuml: "??",
          laquo: "??",
          lt: "<",
          LT: "<",
          macr: "??",
          micro: "??",
          middot: "??",
          nbsp: "??",
          not: "??",
          Ntilde: "??",
          ntilde: "??",
          Oacute: "??",
          oacute: "??",
          Ocirc: "??",
          ocirc: "??",
          Ograve: "??",
          ograve: "??",
          ordf: "??",
          ordm: "??",
          Oslash: "??",
          oslash: "??",
          Otilde: "??",
          otilde: "??",
          Ouml: "??",
          ouml: "??",
          para: "??",
          plusmn: "??",
          pound: "??",
          quot: '"',
          QUOT: '"',
          raquo: "??",
          reg: "??",
          REG: "??",
          sect: "??",
          shy: "??",
          sup1: "??",
          sup2: "??",
          sup3: "??",
          szlig: "??",
          THORN: "??",
          thorn: "??",
          times: "??",
          Uacute: "??",
          uacute: "??",
          Ucirc: "??",
          ucirc: "??",
          Ugrave: "??",
          ugrave: "??",
          uml: "??",
          Uuml: "??",
          uuml: "??",
          Yacute: "??",
          yacute: "??",
          yen: "??",
          yuml: "??",
        };
      },
      {},
    ],
    9: [
      function (require, module, exports) {
        module.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
      },
      {},
    ],
  },
  {},
  [1]
);
