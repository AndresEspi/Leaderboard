/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  "use strict";
  var t = {
      424: (t, e, n) => {
        n.d(e, { Z: () => c });
        var r = n(81),
          o = n.n(r),
          a = n(645),
          i = n.n(a)()(o());
        i.push([
          t.id,
          "body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  font-family: system-ui, sans-serif;\n}\n\n.header-container {\n  margin-bottom: 30px;\n  text-align: center;\n}\n\n.web-title {\n  font-size: 50px;\n  font-weight: 600;\n  margin-left: -217px;\n}\n\n.main-section {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  gap: 50px;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.board-container {\n  flex: 1.5;\n  border: 3px solid black;\n  border-radius: 3px;\n  padding: 10px;\n}\n\n.board-title {\n  display: flex;\n  justify-content: space-between;\n}\n\n.subtitle {\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.button {\n  background-color: transparent;\n  border: 2px solid black;\n  padding: 5px 15px;\n  font-weight: 600;\n  transition: all 0.2s;\n  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.9);\n  cursor: pointer;\n}\n\n.button:hover {\n  background-color: #efefef;\n}\n\n.scores {\n  width: 100%;\n}\n\n.scores-row {\n  padding: 5px 0;\n  border-bottom: 1px solid black;\n}\n\n.row-description {\n  font-weight: 600;\n  margin: 0;\n}\n\n.odd-row {\n  background-color: #eaeaea;\n}\n\n.form-container {\n  flex: 1;\n  max-width: 500px;\n}\n\n.add-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  max-width: 300px;\n}\n\n.input-style {\n  padding: 5px 10px;\n  border: 2px solid black;\n  border-radius: 2px;\n  width: 100%;\n  max-width: 250px;\n}\n\n.add-btn {\n  width: fit-content;\n}\n",
          "",
        ]);
        const c = i;
      },
      645: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, a) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0];
                  null != u && (i[u] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var l = [].concat(t[s]);
                (r && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      81: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      379: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var a = {}, i = [], c = 0; c < t.length; c++) {
            var u = t[c],
              s = r.base ? u[0] + r.base : u[0],
              l = a[s] || 0,
              f = "".concat(s, " ").concat(l);
            a[s] = l + 1;
            var p = n(f),
              d = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(d);
            else {
              var h = o(d, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: f, updater: h, references: 1 });
            }
            i.push(f);
          }
          return i;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var a = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var i = 0; i < a.length; i++) {
              var c = n(a[i]);
              e[c].references--;
            }
            for (var u = r(t, o), s = 0; s < a.length; s++) {
              var l = n(a[s]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            a = u;
          };
        };
      },
      569: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      565: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      795: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      589: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { id: r, exports: {} });
    return t[r](a, a.exports, n), a.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      var t = n(379),
        e = n.n(t),
        r = n(795),
        o = n.n(r),
        a = n(569),
        i = n.n(a),
        c = n(565),
        u = n.n(c),
        s = n(216),
        l = n.n(s),
        f = n(589),
        p = n.n(f),
        d = n(424),
        h = {};
      function v(t) {
        return (
          (v =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          v(t)
        );
      }
      function y() {
        y = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          i = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, o) {
          var a = e && e.prototype instanceof p ? e : p,
            i = Object.create(a.prototype),
            c = new O(o || []);
          return r(i, "_invoke", { value: L(t, n, c) }), i;
        }
        function l(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = s;
        var f = {};
        function p() {}
        function d() {}
        function h() {}
        var m = {};
        u(m, a, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          x = g && g(g(T([])));
        x && x !== e && n.call(x, a) && (m = x);
        var b = (h.prototype = p.prototype = Object.create(m));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function E(t, e) {
          function o(r, a, i, c) {
            var u = l(t[r], t, a);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == v(f) && n.call(f, "__await")
                ? e.resolve(f.__await).then(
                    function (t) {
                      o("next", t, i, c);
                    },
                    function (t) {
                      o("throw", t, i, c);
                    }
                  )
                : e.resolve(f).then(
                    function (t) {
                      (s.value = t), i(s);
                    },
                    function (t) {
                      return o("throw", t, i, c);
                    }
                  );
            }
            c(u.arg);
          }
          var a;
          r(this, "_invoke", {
            value: function (t, n) {
              function r() {
                return new e(function (e, r) {
                  o(t, n, e, r);
                });
              }
              return (a = a ? a.then(r, r) : r());
            },
          });
        }
        function L(t, e, n) {
          var r = "suspendedStart";
          return function (o, a) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === o) throw a;
              return { value: void 0, done: !0 };
            }
            for (n.method = o, n.arg = a; ; ) {
              var i = n.delegate;
              if (i) {
                var c = j(i, n);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var u = l(t, e, n);
              if ("normal" === u.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: n.done };
              }
              "throw" === u.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
            }
          };
        }
        function j(t, e) {
          var n = e.method,
            r = t.iterator[n];
          if (void 0 === r)
            return (
              (e.delegate = null),
              ("throw" === n &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                j(t, e),
                "throw" === e.method)) ||
                ("return" !== n &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              f
            );
          var o = l(r, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), f
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function S(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(k, this),
            this.reset(!0);
        }
        function T(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function e() {
                  for (; ++r < t.length; )
                    if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: _ };
        }
        function _() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = h),
          r(b, "constructor", { value: h, configurable: !0 }),
          r(h, "constructor", { value: d, configurable: !0 }),
          (d.displayName = u(h, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === d || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, h)
                : ((t.__proto__ = h), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(b)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(E.prototype),
          u(E.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, n, r, o, a) {
            void 0 === a && (a = Promise);
            var i = new E(s(e, n, r, o), a);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          w(b),
          u(b, c, "Generator"),
          u(b, a, function () {
            return this;
          }),
          u(b, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = T),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(S),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return r("end");
                if (a.tryLoc <= this.prev) {
                  var c = n.call(a, "catchLoc"),
                    u = n.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), S(n), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    S(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: T(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      function m(t, e, n, r, o, a, i) {
        try {
          var c = t[a](i),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function g(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = t.apply(e, n);
            function i(t) {
              m(a, r, o, i, c, "next", t);
            }
            function c(t) {
              m(a, r, o, i, c, "throw", t);
            }
            i(void 0);
          });
        };
      }
      (h.styleTagTransform = p()),
        (h.setAttributes = u()),
        (h.insert = i().bind(null, "head")),
        (h.domAPI = o()),
        (h.insertStyleElement = l()),
        e()(d.Z, h),
        d.Z && d.Z.locals && d.Z.locals;
      var x = (function () {
          var t = g(
            y().mark(function t(e) {
              var n, r;
              return y().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        fetch(
                          "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/".concat(
                            e,
                            "/scores/"
                          )
                        )
                      );
                    case 2:
                      return (n = t.sent), (t.next = 5), n.json();
                    case 5:
                      return (r = t.sent), t.abrupt("return", r.result);
                    case 7:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        b = (function () {
          var t = g(
            y().mark(function t(e, n, r) {
              var o, a;
              return y().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        fetch(
                          "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/".concat(
                            e,
                            "/scores/"
                          ),
                          {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ user: n, score: r }),
                          }
                        )
                      );
                    case 2:
                      return (o = t.sent), (t.next = 5), o.json();
                    case 5:
                      return (a = t.sent), t.abrupt("return", a.result);
                    case 7:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e, n, r) {
            return t.apply(this, arguments);
          };
        })(),
        w = "GameByLuis";
      document.getElementById("refresh-btn").addEventListener(
        "click",
        g(
          y().mark(function t() {
            var e, n;
            return y().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), x(w);
                  case 2:
                    (e = t.sent),
                      ((n = document.getElementById("scores")).innerHTML = ""),
                      e.forEach(function (t) {
                        var r = document.createElement("div");
                        r.classList.add("scores-row"),
                          e.indexOf(t) % 2 == 1 && r.classList.add("odd-row");
                        var o = document.createElement("p");
                        o.classList.add("row-description"),
                          (o.textContent = ""
                            .concat(t.user, ": ")
                            .concat(t.score)),
                          r.appendChild(o),
                          n.appendChild(r);
                      });
                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )
      ),
        document.getElementById("add-form").addEventListener(
          "submit",
          (function () {
            var t = g(
              y().mark(function t(e) {
                var n, r, o, a;
                return y().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          (e.preventDefault(),
                          (n = document.getElementById("name")),
                          (r = document.getElementById("score")),
                          (o = n.value),
                          (a = parseInt(r.value, 10)),
                          !(Number.isNaN(a) || a <= 0))
                        ) {
                          t.next = 8;
                          break;
                        }
                        return (
                          alert("Please enter a valid score."),
                          t.abrupt("return")
                        );
                      case 8:
                        return (t.next = 10), b(w, o, a);
                      case 10:
                        (n.value = ""),
                          (r.value = ""),
                          console.log("Score submitted successfully!");
                      case 13:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })()
        );
    })();
})();
