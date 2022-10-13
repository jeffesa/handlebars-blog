/* eslint-disable */

// import Cookies from 'js-cookie'

// export class LgpdModal {
//   constructor () {
//     this.accept = Array.from(document.querySelectorAll('.lgpd-rect-button'))
//     this.lgpdBanner = Array.from(document.querySelectorAll('#lgpd-banner'))
//     if(!Cookies.get('lgpd2')) {
//       console.log('cookie not exists')
//       this.lgpdBanner[0].classList.add('active')
//     }
//     this.accept.map((el) => {
//       el.addEventListener('click', this.toggleAccept.bind(this))
//     })
//   }

//   toggleAccept (e) {
//     this.lgpdBanner[0].classList.remove('active')
//     Cookies.set('lgpd2', 0)
//   }
// }

export class LgpdModal {
  constructor () {
    // const getLGPD = sessionStorage.getItem('lgpd-all') === 'true' || sessionStorage.getItem('lgpd-performance') === 'true' || sessionStorage.getItem('lgpd-marketing') === 'true'
    // console.log(getLGPD)

    // LGPD
    ! function (t) {
      "function" == typeof define && define.amd ? define(t) : t()
    }(function () {
      "use strict";
      var c = {
        list: []
      },
        l = {
          all: !1,
          necessary: !1,
          functional: !1,
          performance: !1,
          marketing: !1
        },
        o = "lgpd2",
        r = "lgpd-";

      function u(t, e) {
        var i, n = 1 < arguments.length && void 0 !== e ? e : 365,
          r = new Date;
        r.setTime(r.getTime() + -864e5), i = "; expires=" + r.toGMTString(), document.cookie = o + "=-1" + i + "; path=/", (r = new Date).setTime(r.getTime() + 24 * n * 60 * 60 * 1e3), i = "; expires=" + r.toGMTString(), document.cookie = o + "=" + (t || "") + i + "; path=/", a(t)
      }

      function d() {
        var t = "; ".concat(document.cookie).split("; ".concat(o, "="));
        if (2 === t.length) {
          var e = t.pop().split(";").shift();
          return a(e), e
        }
      }

      function s(t) {
        return -1 != (t.className || "").indexOf(r)
      }

      function a(t) {
        l.all = !1, l.necessary = !1, l.functional = !1, l.performance = !1, l.marketing = !1;
        var e = t.split("_").map(function (t) {
          return Number(t)
        });
        e.forEach(function (t) {
          switch (t) {
            case -1:
              l.all = !1;
              break;
            case 0:
              l.all = !0;
              break;
            case 1:
              l.necessary = !0;
              break;
            case 2:
              l.functional = !0;
              break;
            case 3:
              l.performance = !0;
              break;
            case 4:
              l.marketing = !0
          }
        }), l.all = -1 != e.indexOf(0) && l.all, sessionStorage.setItem("lgpd-all", l.all), sessionStorage.setItem("lgpd-necessary", l.necessary), sessionStorage.setItem("lgpd-functional", l.functional), sessionStorage.setItem("lgpd-performance", l.performance), sessionStorage.setItem("lgpd-marketing", l.marketing)
      }
      var f = document.createElement,
        h = {
          src: Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, "src"),
          type: Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, "type")
        };
      document.createElement = function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        if ("script" !== e[0].toLowerCase()) return f.bind(document).apply(void 0, e);
        var n = f.bind(document).apply(void 0, e);
        try {
          Object.defineProperties(n, {
            src: {
              get: function () {
                return h.src.get.call(this)
              },
              set: function (t) {
                s(n) && h.type.set.call(this, "text/plain"), h.src.set.call(this, t)
              }
            },
            type: {
              set: function (t) {
                var e = s(n) ? "text/plain" : t;
                h.type.set.call(this, e)
              }
            }
          }), n.setAttribute = function (t, e) {
            "type" === t || "src" === t ? n[t] = e : HTMLScriptElement.prototype.setAttribute.call(n, t, e)
          }
        } catch (t) { }
        return n
      }, String.prototype.startsWith || (String.prototype.startsWith = function (t, e) {
        return e = e || 0, this.indexOf(t, e) === e
      });
      var t, e, p = new MutationObserver(function (t) {
        t.forEach(function (t) {
          t.addedNodes.forEach(function (t) {
            if (1 === t.nodeType && "script" === t.tagName.toLowerCase()) {
              var e = t.type || "",
                i = t.className || "";
              if (-1 != i.indexOf(r) && "text/plain" === e.toLowerCase()) {
                if (l.all) return void g(t);
                v(i) ? g(t) : (n = t, c.list.push(n), n.type = "text/plain", n.addEventListener("beforescriptexecute", function t(e) {
                  "text/plain" === n.getAttribute("type") && e.preventDefault(), n.removeEventListener("beforescriptexecute", t)
                }), n.parentElement && n.parentElement.removeChild(n))
              }
            }
            var n
          })
        })
      });

      function v(t) {
        var e = d() || "";
        if (-1 != e.indexOf("0")) return 1;
        var i, n = !1;
        t.split(" ").map(function (t) {
          i = t.split(r)[1], -1 != e.indexOf(i) && (n = !0)
        });
        return n
      }

      function g(t) {
        t.type = "text/javascript", t.parentElement && t.parentElement.removeChild(t), m(t)
      }

      function m(t) {
        var e = document.createElement("script");
        for (var i in t.src && e.setAttribute("src", t.src), e.setAttribute("type", "application/javascript"), e.innerHTML = t.innerHTML, t) i.startsWith("on") && (e[i] = t[i]);
        document.head.appendChild(e)
      }

      function Vr(t) {
        return (Vr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
      }

      function i(t, e) {
        e = e || {
          bubbles: !1,
          cancelable: !1,
          detail: void 0
        };
        var i = document.createEvent("CustomEvent");
        return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
      }
      t = void 0, e = function () {
        var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

        function e(t, e) {
          return t(e = {
            exports: {}
          }, e.exports), e.exports
        }

        function i(t) {
          return t && t.Math == Math && t
        }

        function g(t) {
          try {
            return !!t()
          } catch (t) {
            return !0
          }
        }

        function y(t, e) {
          return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
          }
        }

        function r(t) {
          return C.call(t).slice(8, -1)
        }

        function c(t) {
          if (null == t) throw TypeError("Can't call method on " + t);
          return t
        }

        function u(t) {
          return j(c(t))
        }

        function m(t) {
          return "object" == Vr(t) ? null !== t : "function" == typeof t
        }

        function n(t, e) {
          if (!m(t)) return t;
          var i, n;
          if (e && "function" == typeof (i = t.toString) && !m(n = i.call(t))) return n;
          if ("function" == typeof (i = t.valueOf) && !m(n = i.call(t))) return n;
          if (!e && "function" == typeof (i = t.toString) && !m(n = i.call(t))) return n;
          throw TypeError("Can't convert object to primitive value")
        }

        function d(t, e) {
          return z.call(t, e)
        }

        function o(t) {
          return I ? R.createElement(t) : {}
        }

        function O(t) {
          if (!m(t)) throw TypeError(String(t) + " is not an object");
          return t
        }

        function f(e, i) {
          try {
            F(_, e, i)
          } catch (t) {
            _[e] = i
          }
          return i
        }

        function a(t) {
          return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++G + X).toString(36)
        }

        function s(t) {
          return Y[t] || (Y[t] = a(t))
        }
        var l, h, p, v, b, x, E, w, S = "object",
          _ = i(("undefined" == typeof globalThis ? "undefined" : Vr(globalThis)) == S && globalThis) || i(("undefined" == typeof window ? "undefined" : Vr(window)) == S && window) || i(("undefined" == typeof self ? "undefined" : Vr(self)) == S && self) || i(Vr(t) == S && t) || Function("return this")(),
          k = !g(function () {
            return 7 != Object.defineProperty({}, "a", {
              get: function () {
                return 7
              }
            }).a
          }),
          A = {}.propertyIsEnumerable,
          L = Object.getOwnPropertyDescriptor,
          M = {
            f: L && !A.call({
              1: 2
            }, 1) ? function (t) {
              var e = L(this, t);
              return !!e && e.enumerable
            } : A
          },
          C = {}.toString,
          T = "".split,
          j = g(function () {
            return !Object("z").propertyIsEnumerable(0)
          }) ? function (t) {
            return "String" == r(t) ? T.call(t, "") : Object(t)
          } : Object,
          z = {}.hasOwnProperty,
          R = _.document,
          I = m(R) && m(R.createElement),
          W = !k && !g(function () {
            return 7 != Object.defineProperty(o("div"), "a", {
              get: function () {
                return 7
              }
            }).a
          }),
          N = Object.getOwnPropertyDescriptor,
          D = {
            f: k ? N : function (t, e) {
              if (t = u(t), e = n(e, !0), W) try {
                return N(t, e)
              } catch (t) { }
              if (d(t, e)) return y(!M.f.call(t, e), t[e])
            }
          },
          P = Object.defineProperty,
          B = {
            f: k ? P : function (t, e, i) {
              if (O(t), e = n(e, !0), O(i), W) try {
                return P(t, e, i)
              } catch (t) { }
              if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
              return "value" in i && (t[e] = i.value), t
            }
          },
          F = k ? function (t, e, i) {
            return B.f(t, e, y(1, i))
          } : function (t, e, i) {
            return t[e] = i, t
          },
          V = e(function (t) {
            var i = _["__core-js_shared__"] || f("__core-js_shared__", {});
            (t.exports = function (t, e) {
              return i[t] || (i[t] = void 0 !== e ? e : {})
            })("versions", []).push({
              version: "3.2.1",
              mode: "global",
              copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
            })
          }),
          q = V("native-function-to-string", Function.toString),
          H = _.WeakMap,
          $ = "function" == typeof H && /native code/.test(q.call(H)),
          G = 0,
          X = Math.random(),
          Y = V("keys"),
          U = {},
          Q = _.WeakMap;
        E = $ ? (l = new Q, h = l.get, p = l.has, v = l.set, b = function (t, e) {
          return v.call(l, t, e), e
        }, x = function (t) {
          return h.call(l, t) || {}
        }, function (t) {
          return p.call(l, t)
        }) : (w = s("state"), U[w] = !0, b = function (t, e) {
          return F(t, w, e), e
        }, x = function (t) {
          return d(t, w) ? t[w] : {}
        }, function (t) {
          return d(t, w)
        });

        function Z(t) {
          return "function" == typeof t ? t : void 0
        }

        function K(t, e) {
          return arguments.length < 2 ? Z(pt[t]) || Z(_[t]) : pt[t] && pt[t][e] || _[t] && _[t][e]
        }

        function J(t) {
          return isNaN(t = +t) ? 0 : (0 < t ? gt : vt)(t)
        }

        function tt(t) {
          return 0 < t ? mt(J(t), 9007199254740991) : 0
        }

        function et(l) {
          return function (t, e, i) {
            var n, r, o, s = u(t),
              a = tt(s.length),
              c = (r = a, (o = J(i)) < 0 ? bt(o + r, 0) : yt(o, r));
            if (l && e != e) {
              for (; c < a;)
                if ((n = s[c++]) != n) return !0
            } else
              for (; c < a; c++)
                if ((l || c in s) && s[c] === e) return l || c || 0;
            return !l && -1
          }
        }

        function it(t, e) {
          var i, n = u(t),
            r = 0,
            o = [];
          for (i in n) !d(U, i) && d(n, i) && o.push(i);
          for (; e.length > r;) d(n, i = e[r++]) && (~xt(o, i) || o.push(i));
          return o
        }

        function nt(t, e) {
          var i = Lt[At(t)];
          return i == Ct || i != Mt && ("function" == typeof e ? g(e) : !!e)
        }

        function rt(t, e) {
          var i, n, r, o, s, a = t.target,
            c = t.global,
            l = t.stat;
          if (i = c ? _ : l ? _[a] || f(a, {}) : (_[a] || {}).prototype)
            for (n in e) {
              if (o = e[n], r = t.noTargetGet ? (s = jt(i, n)) && s.value : i[n], !Tt(c ? n : a + (l ? "." : "#") + n, t.forced) && void 0 !== r) {
                if (Vr(o) == Vr(r)) continue;
                ! function (t, e) {
                  for (var i = _t(e), n = B.f, r = D.f, o = 0; o < i.length; o++) {
                    var s = i[o];
                    d(t, s) || n(t, s, r(e, s))
                  }
                }(o, r)
              } (t.sham || r && r.sham) && F(o, "sham", !0), ht(i, n, o, t)
            }
        }

        function ot(t) {
          if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
          return t
        }

        function st(n, r, t) {
          if (ot(n), void 0 === r) return n;
          switch (t) {
            case 0:
              return function () {
                return n.call(r)
              };
            case 1:
              return function (t) {
                return n.call(r, t)
              };
            case 2:
              return function (t, e) {
                return n.call(r, t, e)
              };
            case 3:
              return function (t, e, i) {
                return n.call(r, t, e, i)
              }
          }
          return function () {
            return n.apply(r, arguments)
          }
        }

        function at(t) {
          return Object(c(t))
        }

        function ct(t) {
          return Wt[t] || (Wt[t] = Rt && It[t] || (Rt ? It : a)("Symbol." + t))
        }

        function lt(t, e) {
          var i;
          return zt(t) && ("function" == typeof (i = t.constructor) && (i === Array || zt(i.prototype)) || m(i) && null === (i = i[Nt])) && (i = void 0), new (void 0 === i ? Array : i)(0 === e ? 0 : e)
        }

        function ut(h) {
          var p = 1 == h,
            v = 2 == h,
            g = 3 == h,
            m = 4 == h,
            b = 6 == h,
            y = 5 == h || b;
          return function (t, e, i, n) {
            for (var r, o, s = at(t), a = j(s), c = st(e, i, 3), l = tt(a.length), u = 0, d = n || lt, f = p ? d(t, l) : v ? d(t, 0) : void 0; u < l; u++)
              if ((y || u in a) && (o = c(r = a[u], u, s), h))
                if (p) f[u] = o;
                else if (o) switch (h) {
                  case 3:
                    return !0;
                  case 5:
                    return r;
                  case 6:
                    return u;
                  case 2:
                    Dt.call(f, r)
                } else if (m) return !1;
            return b ? -1 : g || m ? m : f
          }
        }

        function dt(t, e) {
          var i = [][t];
          return !i || !g(function () {
            i.call(null, e || function () {
              throw 1
            }, 1)
          })
        }
        var ft = {
          set: b,
          get: x,
          has: E,
          enforce: function (t) {
            return E(t) ? x(t) : b(t, {})
          },
          getterFor: function (i) {
            return function (t) {
              var e;
              if (!m(t) || (e = x(t)).type !== i) throw TypeError("Incompatible receiver, " + i + " required");
              return e
            }
          }
        },
          ht = e(function (t) {
            var e = ft.get,
              a = ft.enforce,
              c = String(q).split("toString");
            V("inspectSource", function (t) {
              return q.call(t)
            }), (t.exports = function (t, e, i, n) {
              var r = !!n && !!n.unsafe,
                o = !!n && !!n.enumerable,
                s = !!n && !!n.noTargetGet;
              "function" == typeof i && ("string" != typeof e || d(i, "name") || F(i, "name", e), a(i).source = c.join("string" == typeof e ? e : "")), t !== _ ? (r ? !s && t[e] && (o = !0) : delete t[e], o ? t[e] = i : F(t, e, i)) : o ? t[e] = i : f(e, i)
            })(Function.prototype, "toString", function () {
              return "function" == typeof this && e(this).source || q.call(this)
            })
          }),
          pt = _,
          vt = Math.ceil,
          gt = Math.floor,
          mt = Math.min,
          bt = Math.max,
          yt = Math.min,
          xt = (et(!0), et(!1)),
          Et = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
          wt = Et.concat("length", "prototype"),
          Ot = {
            f: Object.getOwnPropertyNames || function (t) {
              return it(t, wt)
            }
          },
          St = {
            f: Object.getOwnPropertySymbols
          },
          _t = K("Reflect", "ownKeys") || function (t) {
            var e = Ot.f(O(t)),
              i = St.f;
            return i ? e.concat(i(t)) : e
          },
          kt = /#|\.prototype\./,
          At = nt.normalize = function (t) {
            return String(t).replace(kt, ".").toLowerCase()
          },
          Lt = nt.data = {},
          Mt = nt.NATIVE = "N",
          Ct = nt.POLYFILL = "P",
          Tt = nt,
          jt = D.f,
          zt = Array.isArray || function (t) {
            return "Array" == r(t)
          },
          Rt = !!Object.getOwnPropertySymbols && !g(function () {
            return !String(Symbol())
          }),
          It = _.Symbol,
          Wt = V("wks"),
          Nt = ct("species"),
          Dt = [].push,
          Pt = {
            forEach: ut(0),
            map: ut(1),
            filter: ut(2),
            some: ut(3),
            every: ut(4),
            find: ut(5),
            findIndex: ut(6)
          },
          Bt = Pt.forEach,
          Ft = dt("forEach") ? function (t) {
            return Bt(this, t, 1 < arguments.length ? arguments[1] : void 0)
          } : [].forEach;
        rt({
          target: "Array",
          proto: !0,
          forced: [].forEach != Ft
        }, {
          forEach: Ft
        });
        var Vt = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0
        };
        for (var qt in Vt) {
          var Ht = _[qt],
            $t = Ht && Ht.prototype;
          if ($t && $t.forEach !== Ft) try {
            F($t, "forEach", Ft)
          } catch (t) {
            $t.forEach = Ft
          }
        }
        var Gt = !("undefined" == typeof window || !window.document || !window.document.createElement),
          Xt = ct("species"),
          Yt = Pt.filter;
        rt({
          target: "Array",
          proto: !0,
          forced: !!g(function () {
            var t = [];
            return (t.constructor = {})[Xt] = function () {
              return {
                foo: 1
              }
            }, 1 !== t.filter(Boolean).foo
          })
        }, {
          filter: function (t, e) {
            return Yt(this, t, 1 < arguments.length ? e : void 0)
          }
        });

        function Ut() { }
        var Qt = Object.keys || function (t) {
          return it(t, Et)
        },
          Zt = k ? Object.defineProperties : function (t, e) {
            O(t);
            for (var i, n = Qt(e), r = n.length, o = 0; o < r;) B.f(t, i = n[o++], e[i]);
            return t
          },
          Kt = K("document", "documentElement"),
          Jt = s("IE_PROTO"),
          te = function () {
            var t, e = o("iframe"),
              i = Et.length;
            for (e.style.display = "none", Kt.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), te = t.F; i--;) delete te.prototype[Et[i]];
            return te()
          },
          ee = Object.create || function (t, e) {
            var i;
            return null !== t ? (Ut.prototype = O(t), i = new Ut, Ut.prototype = null, i[Jt] = t) : i = te(), void 0 === e ? i : Zt(i, e)
          };
        U[Jt] = !0;
        var ie = ct("unscopables"),
          ne = Array.prototype;
        null == ne[ie] && F(ne, ie, ee(null));

        function re(t) {
          ne[ie][t] = !0
        }
        var oe, se, ae, ce = {},
          le = !g(function () {
            function t() { }
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
          }),
          ue = s("IE_PROTO"),
          de = Object.prototype,
          fe = le ? Object.getPrototypeOf : function (t) {
            return t = at(t), d(t, ue) ? t[ue] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? de : null
          },
          he = ct("iterator"),
          pe = !1;
        [].keys && ("next" in (ae = [].keys()) ? (se = fe(fe(ae))) !== Object.prototype && (oe = se) : pe = !0), null == oe && (oe = {}), d(oe, he) || F(oe, he, function () {
          return this
        });

        function ve(t, e, i) {
          t && !d(t = i ? t : t.prototype, Ee) && xe(t, Ee, {
            configurable: !0,
            value: e
          })
        }

        function ge() {
          return this
        }

        function me() {
          return this
        }

        function be(t, e, i, n, r, o, s) {
          var a, c;

          function l(t) {
            if (t === r && m) return m;
            if (!_e && t in v) return v[t];
            switch (t) {
              case "keys":
              case "values":
              case "entries":
                return function () {
                  return new i(this, t)
                }
            }
            return function () {
              return new i(this)
            }
          }
          c = e + " Iterator", (a = i).prototype = ee(we, {
            next: y(1, n)
          }), ve(a, c, !1), ce[c] = ge;
          var u, d, f, h = e + " Iterator",
            p = !1,
            v = t.prototype,
            g = v[ke] || v["@@iterator"] || r && v[r],
            m = !_e && g || l(r),
            b = "Array" == e && v.entries || g;
          if (b && (u = fe(b.call(new t)), Se !== Object.prototype && u.next && (fe(u) !== Se && (Oe ? Oe(u, Se) : "function" != typeof u[ke] && F(u, ke, me)), ve(u, h, !0))), "values" == r && g && "values" !== g.name && (p = !0, m = function () {
            return g.call(this)
          }), v[ke] !== m && F(v, ke, m), ce[e] = m, r)
            if (d = {
              values: l("values"),
              keys: o ? m : l("keys"),
              entries: l("entries")
            }, s)
              for (f in d) !_e && !p && f in v || ht(v, f, d[f]);
            else rt({
              target: e,
              proto: !0,
              forced: _e || p
            }, d);
          return d
        }
        var ye = {
          IteratorPrototype: oe,
          BUGGY_SAFARI_ITERATORS: pe
        },
          xe = B.f,
          Ee = ct("toStringTag"),
          we = ye.IteratorPrototype,
          Oe = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var i, n = !1,
              t = {};
            try {
              (i = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []), n = t instanceof Array
            } catch (i) { }
            return function (t, e) {
              return O(t),
                function (t) {
                  if (!m(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
                }(e), n ? i.call(t, e) : t.__proto__ = e, t
            }
          }() : void 0),
          Se = ye.IteratorPrototype,
          _e = ye.BUGGY_SAFARI_ITERATORS,
          ke = ct("iterator"),
          Ae = ft.set,
          Le = ft.getterFor("Array Iterator"),
          Me = be(Array, "Array", function (t, e) {
            Ae(this, {
              type: "Array Iterator",
              target: u(t),
              index: 0,
              kind: e
            })
          }, function () {
            var t = Le(this),
              e = t.target,
              i = t.kind,
              n = t.index++;
            return !e || n >= e.length ? {
              value: t.target = void 0,
              done: !0
            } : "keys" == i ? {
              value: n,
              done: !1
            } : "values" == i ? {
              value: e[n],
              done: !1
            } : {
              value: [n, e[n]],
              done: !1
            }
          }, "values");
        ce.Arguments = ce.Array, re("keys"), re("values"), re("entries");
        var Ce = Object.assign,
          Te = !Ce || g(function () {
            var t = {},
              e = {},
              i = Symbol();
            return t[i] = 7, "abcdefghijklmnopqrst".split("").forEach(function (t) {
              e[t] = t
            }), 7 != Ce({}, t)[i] || "abcdefghijklmnopqrst" != Qt(Ce({}, e)).join("")
          }) ? function (t, e) {
            for (var i = at(t), n = arguments.length, r = 1, o = St.f, s = M.f; r < n;)
              for (var a, c = j(arguments[r++]), l = o ? Qt(c).concat(o(c)) : Qt(c), u = l.length, d = 0; d < u;) a = l[d++], k && !s.call(c, a) || (i[a] = c[a]);
            return i
          } : Ce;
        rt({
          target: "Object",
          stat: !0,
          forced: Object.assign !== Te
        }, {
          assign: Te
        });

        function je(t) {
          var e, i, n;
          return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (i = function (t, e) {
            try {
              return t[e]
            } catch (t) { }
          }(e = Object(t), ze)) ? i : Re ? r(e) : "Object" == (n = r(e)) && "function" == typeof e.callee ? "Arguments" : n
        }
        var ze = ct("toStringTag"),
          Re = "Arguments" == r(function () {
            return arguments
          }()),
          Ie = {};
        Ie[ct("toStringTag")] = "z";
        var We = "[object z]" !== String(Ie) ? function () {
          return "[object " + je(this) + "]"
        } : Ie.toString,
          Ne = Object.prototype;
        We !== Ne.toString && ht(Ne, "toString", We, {
          unsafe: !0
        });

        function De(i) {
          return function (t) {
            var e = String(c(t));
            return 1 & i && (e = e.replace(Fe, "")), 2 & i && (e = e.replace(Ve, "")), e
          }
        }
        var Pe = "\t\n\v\f\r                　\u2028\u2029\ufeff",
          Be = "[" + Pe + "]",
          Fe = RegExp("^" + Be + Be + "*"),
          Ve = RegExp(Be + Be + "*$"),
          qe = (De(1), De(2), De(3)),
          He = _.parseInt,
          $e = /^[+-]?0[Xx]/,
          Ge = 8 !== He(Pe + "08") || 22 !== He(Pe + "0x16") ? function (t, e) {
            var i = qe(String(t));
            return He(i, e >>> 0 || ($e.test(i) ? 16 : 10))
          } : He;
        rt({
          global: !0,
          forced: parseInt != Ge
        }, {
          parseInt: Ge
        });

        function Xe(a) {
          return function (t, e) {
            var i, n, r = String(c(t)),
              o = J(e),
              s = r.length;
            return o < 0 || s <= o ? a ? "" : void 0 : (i = r.charCodeAt(o)) < 55296 || 56319 < i || o + 1 === s || (n = r.charCodeAt(o + 1)) < 56320 || 57343 < n ? a ? r.charAt(o) : i : a ? r.slice(o, o + 2) : n - 56320 + (i - 55296 << 10) + 65536
          }
        }
        var Ye = {
          codeAt: Xe(!1),
          charAt: Xe(!0)
        },
          Ue = Ye.charAt,
          Qe = ft.set,
          Ze = ft.getterFor("String Iterator");
        be(String, "String", function (t) {
          Qe(this, {
            type: "String Iterator",
            string: String(t),
            index: 0
          })
        }, function () {
          var t, e = Ze(this),
            i = e.string,
            n = e.index;
          return n >= i.length ? {
            value: void 0,
            done: !0
          } : (t = Ue(i, n), e.index += t.length, {
            value: t,
            done: !1
          })
        });

        function Ke(t, e, i) {
          for (var n in e) ht(t, n, e[n], i);
          return t
        }

        function Je(t, e, i) {
          if (!(t instanceof e)) throw TypeError("Incorrect " + (i ? i + " " : "") + "invocation");
          return t
        }
        var ti = !g(function () {
          return Object.isExtensible(Object.preventExtensions({}))
        }),
          ei = e(function (t) {
            function i(t) {
              e(t, n, {
                value: {
                  objectID: "O" + ++r,
                  weakData: {}
                }
              })
            }
            var e = B.f,
              n = a("meta"),
              r = 0,
              o = Object.isExtensible || function () {
                return !0
              },
              s = t.exports = {
                REQUIRED: !1,
                fastKey: function (t, e) {
                  if (!m(t)) return "symbol" == Vr(t) ? t : ("string" == typeof t ? "S" : "P") + t;
                  if (!d(t, n)) {
                    if (!o(t)) return "F";
                    if (!e) return "E";
                    i(t)
                  }
                  return t[n].objectID
                },
                getWeakData: function (t, e) {
                  if (!d(t, n)) {
                    if (!o(t)) return !0;
                    if (!e) return !1;
                    i(t)
                  }
                  return t[n].weakData
                },
                onFreeze: function (t) {
                  return ti && s.REQUIRED && o(t) && !d(t, n) && i(t), t
                }
              };
            U[n] = !0
          }),
          ii = (ei.REQUIRED, ei.fastKey, ei.getWeakData, ei.onFreeze, ct("iterator")),
          ni = Array.prototype,
          ri = ct("iterator"),
          oi = e(function (t) {
            function f(t, e) {
              this.stopped = t, this.result = e
            } (t.exports = function (t, e, i, n, r) {
              var o, s, a, c, l, u, d = st(e, i, n ? 2 : 1);
              if (r) o = t;
              else {
                if ("function" != typeof (s = function () {
                  if (null != t) return t[ri] || t["@@iterator"] || ce[je(t)]
                }())) throw TypeError("Target is not iterable");
                if (void 0 !== s && (ce.Array === s || ni[ii] === s)) {
                  for (a = 0, c = tt(t.length); a < c; a++)
                    if ((l = n ? d(O(u = t[a])[0], u[1]) : d(t[a])) && l instanceof f) return l;
                  return new f(!1)
                }
                o = s.call(t)
              }
              for (; !(u = o.next()).done;)
                if ((l = function (t, e, i, n) {
                  try {
                    return n ? e(O(i)[0], i[1]) : e(i)
                  } catch (e) {
                    var r = t.return;
                    throw void 0 !== r && O(r.call(t)), e
                  }
                }(o, d, u.value, n)) && l instanceof f) return l;
              return new f(!1)
            }).stop = function (t) {
              return new f(!0, t)
            }
          }),
          si = ct("iterator"),
          ai = !1;
        try {
          var ci = 0,
            li = {
              next: function () {
                return {
                  done: !!ci++
                }
              },
              return: function () {
                ai = !0
              }
            };
          li[si] = function () {
            return this
          }, Array.from(li, function () {
            throw 2
          })
        } catch (t) { }

        function ui(a, t, e, c, n) {
          function i(t) {
            var i = f[t];
            ht(f, t, "add" == t ? function (t) {
              return i.call(this, 0 === t ? 0 : t), this
            } : "delete" == t ? function (t) {
              return !(n && !m(t)) && i.call(this, 0 === t ? 0 : t)
            } : "get" == t ? function (t) {
              return n && !m(t) ? void 0 : i.call(this, 0 === t ? 0 : t)
            } : "has" == t ? function (t) {
              return !(n && !m(t)) && i.call(this, 0 === t ? 0 : t)
            } : function (t, e) {
              return i.call(this, 0 === t ? 0 : t, e), this
            })
          }
          var r, o, s, l, u, d = _[a],
            f = d && d.prototype,
            h = d,
            p = c ? "set" : "add",
            v = {};
          return Tt(a, "function" != typeof d || !(n || f.forEach && !g(function () {
            (new d).entries().next()
          }))) ? (h = e.getConstructor(t, a, c, p), ei.REQUIRED = !0) : Tt(a, !0) && (o = (r = new h)[p](n ? {} : -0, 1) != r, s = g(function () {
            r.has(1)
          }), l = function () {
            if (!ai) return !1;
            var t = !1;
            try {
              var e = {};
              e[si] = function () {
                return {
                  next: function () {
                    return {
                      done: t = !0
                    }
                  }
                }
              }, new d(e)
            } catch (t) { }
            return t
          }(), u = !n && g(function () {
            for (var t = new d, e = 5; e--;) t[p](e, e);
            return !t.has(-0)
          }), l || (((h = t(function (t, e) {
            Je(t, h, a);
            var i, n, r, o, s = (i = new d, n = h, Oe && "function" == typeof (r = t.constructor) && r !== n && m(o = r.prototype) && o !== n.prototype && Oe(i, o), i);
            return null != e && oi(e, s[p], s, c), s
          })).prototype = f).constructor = h), (s || u) && (i("delete"), i("has"), c && i("get")), (u || o) && i(p), n && f.clear && delete f.clear), v[a] = h, rt({
            global: !0,
            forced: h != d
          }, v), ve(h, a), n || e.setStrong(h, a, c), h
        }

        function di(t) {
          return t.frozen || (t.frozen = new yi)
        }

        function fi(t, e) {
          return gi(t.entries, function (t) {
            return t[0] === e
          })
        }
        var hi = ei.getWeakData,
          pi = ft.set,
          vi = ft.getterFor,
          gi = Pt.find,
          mi = Pt.findIndex,
          bi = 0,
          yi = function () {
            this.entries = []
          };
        yi.prototype = {
          get: function (t) {
            var e = fi(this, t);
            if (e) return e[1]
          },
          has: function (t) {
            return !!fi(this, t)
          },
          set: function (t, e) {
            var i = fi(this, t);
            i ? i[1] = e : this.entries.push([t, e])
          },
          delete: function (e) {
            var t = mi(this.entries, function (t) {
              return t[0] === e
            });
            return ~t && this.entries.splice(t, 1), !!~t
          }
        };
        var xi = {
          getConstructor: function (t, i, n, r) {
            function o(t, e, i) {
              var n = a(t),
                r = hi(O(e), !0);
              return !0 === r ? di(n).set(e, i) : r[n.id] = i, t
            }
            var s = t(function (t, e) {
              Je(t, s, i), pi(t, {
                type: i,
                id: bi++,
                frozen: void 0
              }), null != e && oi(e, t[r], t, n)
            }),
              a = vi(i);
            return Ke(s.prototype, {
              delete: function (t) {
                var e = a(this);
                if (!m(t)) return !1;
                var i = hi(t);
                return !0 === i ? di(e).delete(t) : i && d(i, e.id) && delete i[e.id]
              },
              has: function (t) {
                var e = a(this);
                if (!m(t)) return !1;
                var i = hi(t);
                return !0 === i ? di(e).has(t) : i && d(i, e.id)
              }
            }), Ke(s.prototype, n ? {
              get: function (t) {
                var e = a(this);
                if (m(t)) {
                  var i = hi(t);
                  return !0 === i ? di(e).get(t) : i ? i[e.id] : void 0
                }
              },
              set: function (t, e) {
                return o(this, t, e)
              }
            } : {
              add: function (t) {
                return o(this, t, !0)
              }
            }), s
          }
        },
          Ei = (e(function (t) {
            function e(t) {
              return function () {
                return t(this, arguments.length ? arguments[0] : void 0)
              }
            }
            var n, i, r, o, s, a, c = ft.enforce,
              l = !_.ActiveXObject && "ActiveXObject" in _,
              u = Object.isExtensible,
              d = t.exports = ui("WeakMap", e, xi, !0, !0);
            $ && l && (n = xi.getConstructor(e, "WeakMap", !0), ei.REQUIRED = !0, i = d.prototype, r = i.delete, o = i.has, s = i.get, a = i.set, Ke(i, {
              delete: function (t) {
                if (!m(t) || u(t)) return r.call(this, t);
                var e = c(this);
                return e.frozen || (e.frozen = new n), r.call(this, t) || e.frozen.delete(t)
              },
              has: function (t) {
                if (!m(t) || u(t)) return o.call(this, t);
                var e = c(this);
                return e.frozen || (e.frozen = new n), o.call(this, t) || e.frozen.has(t)
              },
              get: function (t) {
                if (!m(t) || u(t)) return s.call(this, t);
                var e = c(this);
                return e.frozen || (e.frozen = new n), o.call(this, t) ? s.call(this, t) : e.frozen.get(t)
              },
              set: function (t, e) {
                var i;
                return m(t) && !u(t) ? ((i = c(this)).frozen || (i.frozen = new n), o.call(this, t) ? a.call(this, t, e) : i.frozen.set(t, e)) : a.call(this, t, e), this
              }
            }))
          }), ct("iterator")),
          wi = ct("toStringTag"),
          Oi = Me.values;
        for (var Si in Vt) {
          var _i = _[Si],
            ki = _i && _i.prototype;
          if (ki) {
            if (ki[Ei] !== Oi) try {
              F(ki, Ei, Oi)
            } catch (t) {
              ki[Ei] = Oi
            }
            if (ki[wi] || F(ki, wi, Si), Vt[Si])
              for (var Ai in Me)
                if (ki[Ai] !== Me[Ai]) try {
                  F(ki, Ai, Me[Ai])
                } catch (t) {
                  ki[Ai] = Me[Ai]
                }
          }
        }

        function Li() {
          return Pi.Date.now()
        }
        var Mi = "Expected a function",
          Ci = NaN,
          Ti = "[object Symbol]",
          ji = /^\s+|\s+$/g,
          zi = /^[-+]0x[0-9a-f]+$/i,
          Ri = /^0b[01]+$/i,
          Ii = /^0o[0-7]+$/i,
          Wi = parseInt,
          Ni = "object" == Vr(t) && t && t.Object === Object && t,
          Di = "object" == ("undefined" == typeof self ? "undefined" : Vr(self)) && self && self.Object === Object && self,
          Pi = Ni || Di || Function("return this")(),
          Bi = Object.prototype.toString,
          Fi = Math.max,
          Vi = Math.min;

        function qi(n, r, t) {
          var o, s, i, a, c, l, u = 0,
            d = !1,
            f = !1,
            e = !0;
          if ("function" != typeof n) throw new TypeError(Mi);

          function h(t) {
            var e = o,
              i = s;
            return o = s = void 0, u = t, a = n.apply(i, e)
          }

          function p(t) {
            var e = t - l;
            return void 0 === l || r <= e || e < 0 || f && i <= t - u
          }

          function v() {
            var t, e = Li();
            if (p(e)) return g(e);
            c = setTimeout(v, (t = r - (e - l), f ? Vi(t, i - (e - u)) : t))
          }

          function g(t) {
            return c = void 0, e && o ? h(t) : (o = s = void 0, a)
          }

          function m() {
            var t, e = Li(),
              i = p(e);
            if (o = arguments, s = this, l = e, i) {
              if (void 0 === c) return u = t = l, c = setTimeout(v, r), d ? h(t) : a;
              if (f) return c = setTimeout(v, r), h(l)
            }
            return void 0 === c && (c = setTimeout(v, r)), a
          }
          return r = $i(r) || 0, Hi(t) && (d = !!t.leading, i = (f = "maxWait" in t) ? Fi($i(t.maxWait) || 0, r) : i, e = "trailing" in t ? !!t.trailing : e), m.cancel = function () {
            void 0 !== c && clearTimeout(c), o = l = s = c = void (u = 0)
          }, m.flush = function () {
            return void 0 === c ? a : g(Li())
          }, m
        }

        function Hi(t) {
          var e = Vr(t);
          return t && ("object" == e || "function" == e)
        }

        function $i(t) {
          if ("number" == typeof t) return t;
          if ("symbol" == Vr(e = t) || e && "object" == Vr(e) && Bi.call(e) == Ti) return Ci;
          var e, i;
          if (Hi(t) && (t = Hi(i = "function" == typeof t.valueOf ? t.valueOf() : t) ? i + "" : i), "string" != typeof t) return 0 === t ? t : +t;
          t = t.replace(ji, "");
          var n = Ri.test(t);
          return n || Ii.test(t) ? Wi(t.slice(2), n ? 2 : 8) : zi.test(t) ? Ci : +t
        }

        function Gi() {
          return en.Date.now()
        }
        var Xi = function (t, e, i) {
          var n = !0,
            r = !0;
          if ("function" != typeof t) throw new TypeError(Mi);
          return Hi(i) && (n = "leading" in i ? !!i.leading : n, r = "trailing" in i ? !!i.trailing : r), qi(t, e, {
            leading: n,
            maxWait: e,
            trailing: r
          })
        },
          Yi = /^\s+|\s+$/g,
          Ui = /^[-+]0x[0-9a-f]+$/i,
          Qi = /^0b[01]+$/i,
          Zi = /^0o[0-7]+$/i,
          Ki = parseInt,
          Ji = "object" == Vr(t) && t && t.Object === Object && t,
          tn = "object" == ("undefined" == typeof self ? "undefined" : Vr(self)) && self && self.Object === Object && self,
          en = Ji || tn || Function("return this")(),
          nn = Object.prototype.toString,
          rn = Math.max,
          on = Math.min;

        function sn(t) {
          var e = Vr(t);
          return t && ("object" == e || "function" == e)
        }

        function an(t) {
          if ("number" == typeof t) return t;
          if ("symbol" == Vr(e = t) || e && "object" == Vr(e) && "[object Symbol]" == nn.call(e)) return NaN;
          var e, i;
          if (sn(t) && (t = sn(i = "function" == typeof t.valueOf ? t.valueOf() : t) ? i + "" : i), "string" != typeof t) return 0 === t ? t : +t;
          t = t.replace(Yi, "");
          var n = Qi.test(t);
          return n || Zi.test(t) ? Ki(t.slice(2), n ? 2 : 8) : Ui.test(t) ? NaN : +t
        }
        var cn, ln = function (n, r, t) {
          var o, s, i, a, c, l, u = 0,
            d = !1,
            f = !1,
            e = !0;
          if ("function" != typeof n) throw new TypeError("Expected a function");

          function h(t) {
            var e = o,
              i = s;
            return o = s = void 0, u = t, a = n.apply(i, e)
          }

          function p(t) {
            var e = t - l;
            return void 0 === l || r <= e || e < 0 || f && i <= t - u
          }

          function v() {
            var t, e = Gi();
            if (p(e)) return g(e);
            c = setTimeout(v, (t = r - (e - l), f ? on(t, i - (e - u)) : t))
          }

          function g(t) {
            return c = void 0, e && o ? h(t) : (o = s = void 0, a)
          }

          function m() {
            var t, e = Gi(),
              i = p(e);
            if (o = arguments, s = this, l = e, i) {
              if (void 0 === c) return u = t = l, c = setTimeout(v, r), d ? h(t) : a;
              if (f) return c = setTimeout(v, r), h(l)
            }
            return void 0 === c && (c = setTimeout(v, r)), a
          }
          return r = an(r) || 0, sn(t) && (d = !!t.leading, i = (f = "maxWait" in t) ? rn(an(t.maxWait) || 0, r) : i, e = "trailing" in t ? !!t.trailing : e), m.cancel = function () {
            void 0 !== c && clearTimeout(c), o = l = s = c = void (u = 0)
          }, m.flush = function () {
            return void 0 === c ? a : g(Gi())
          }, m
        },
          un = "Expected a function",
          dn = "__lodash_hash_undefined__",
          fn = "[object Function]",
          hn = "[object GeneratorFunction]",
          pn = /^\[object .+?Constructor\]$/,
          vn = "object" == Vr(t) && t && t.Object === Object && t,
          gn = "object" == ("undefined" == typeof self ? "undefined" : Vr(self)) && self && self.Object === Object && self,
          mn = vn || gn || Function("return this")(),
          bn = Array.prototype,
          yn = Function.prototype,
          xn = Object.prototype,
          En = mn["__core-js_shared__"],
          wn = (cn = /[^.]+$/.exec(En && En.keys && En.keys.IE_PROTO || "")) ? "Symbol(src)_1." + cn : "",
          On = yn.toString,
          Sn = xn.hasOwnProperty,
          _n = xn.toString,
          kn = RegExp("^" + On.call(Sn).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          An = bn.splice,
          Ln = In(mn, "Map"),
          Mn = In(Object, "create");

        function Cn(t) {
          var e = -1,
            i = t ? t.length : 0;
          for (this.clear(); ++e < i;) {
            var n = t[e];
            this.set(n[0], n[1])
          }
        }

        function Tn(t) {
          var e = -1,
            i = t ? t.length : 0;
          for (this.clear(); ++e < i;) {
            var n = t[e];
            this.set(n[0], n[1])
          }
        }

        function jn(t) {
          var e = -1,
            i = t ? t.length : 0;
          for (this.clear(); ++e < i;) {
            var n = t[e];
            this.set(n[0], n[1])
          }
        }

        function zn(t, e) {
          for (var i, n = t.length; n--;)
            if ((i = t[n][0]) === e || i != i && e != e) return n;
          return -1
        }

        function Rn(t, e) {
          var i, n, r = t.__data__;
          return ("string" == (n = Vr(i = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== i : null === i) ? r["string" == typeof e ? "string" : "hash"] : r.map
        }

        function In(t, e) {
          var i, n, r, o = null == t ? void 0 : t[e];
          return !Nn(i = o) || wn && wn in i || !((r = Nn(n = i) ? _n.call(n) : "") == fn || r == hn || function (t) {
            var e = !1;
            if (null != t && "function" != typeof t.toString) try {
              e = !!(t + "")
            } catch (t) { }
            return e
          }(i) ? kn : pn).test(function (t) {
            if (null != t) {
              try {
                return On.call(t)
              } catch (t) { }
              try {
                return t + ""
              } catch (t) { }
            }
            return ""
          }(i)) ? void 0 : o
        }

        function Wn(r, o) {
          if ("function" != typeof r || o && "function" != typeof o) throw new TypeError(un);

          function s() {
            var t = arguments,
              e = o ? o.apply(this, t) : t[0],
              i = s.cache;
            if (i.has(e)) return i.get(e);
            var n = r.apply(this, t);
            return s.cache = i.set(e, n), n
          }
          return s.cache = new (Wn.Cache || jn), s
        }

        function Nn(t) {
          var e = Vr(t);
          return t && ("object" == e || "function" == e)
        }
        Cn.prototype.clear = function () {
          this.__data__ = Mn ? Mn(null) : {}
        }, Cn.prototype.delete = function (t) {
          return this.has(t) && delete this.__data__[t]
        }, Cn.prototype.get = function (t) {
          var e = this.__data__;
          if (Mn) {
            var i = e[t];
            return i === dn ? void 0 : i
          }
          return Sn.call(e, t) ? e[t] : void 0
        }, Cn.prototype.has = function (t) {
          var e = this.__data__;
          return Mn ? void 0 !== e[t] : Sn.call(e, t)
        }, Cn.prototype.set = function (t, e) {
          return this.__data__[t] = Mn && void 0 === e ? dn : e, this
        }, Tn.prototype.clear = function () {
          this.__data__ = []
        }, Tn.prototype.delete = function (t) {
          var e = this.__data__,
            i = zn(e, t);
          return !(i < 0 || (i == e.length - 1 ? e.pop() : An.call(e, i, 1), 0))
        }, Tn.prototype.get = function (t) {
          var e = this.__data__,
            i = zn(e, t);
          return i < 0 ? void 0 : e[i][1]
        }, Tn.prototype.has = function (t) {
          return -1 < zn(this.__data__, t)
        }, Tn.prototype.set = function (t, e) {
          var i = this.__data__,
            n = zn(i, t);
          return n < 0 ? i.push([t, e]) : i[n][1] = e, this
        }, jn.prototype.clear = function () {
          this.__data__ = {
            hash: new Cn,
            map: new (Ln || Tn),
            string: new Cn
          }
        }, jn.prototype.delete = function (t) {
          return Rn(this, t).delete(t)
        }, jn.prototype.get = function (t) {
          return Rn(this, t).get(t)
        }, jn.prototype.has = function (t) {
          return Rn(this, t).has(t)
        }, jn.prototype.set = function (t, e) {
          return Rn(this, t).set(t, e), this
        }, Wn.Cache = jn;

        function Dn(t, e) {
          for (var i = 0, n = Object.keys(e); i < n.length; i++) {
            var r = n[i];
            Object.defineProperty(t, r, {
              value: e[r],
              enumerable: !1,
              writable: !1,
              configurable: !0
            })
          }
          return t
        }
        var Pn = Wn,
          Bn = function () {
            if ("undefined" != typeof Map) return Map;

            function n(t, i) {
              var n = -1;
              return t.some(function (t, e) {
                return t[0] === i && (n = e, !0)
              }), n
            }
            return Object.defineProperty(t.prototype, "size", {
              get: function () {
                return this.__entries__.length
              },
              enumerable: !0,
              configurable: !0
            }), t.prototype.get = function (t) {
              var e = n(this.__entries__, t),
                i = this.__entries__[e];
              return i && i[1]
            }, t.prototype.set = function (t, e) {
              var i = n(this.__entries__, t);
              ~i ? this.__entries__[i][1] = e : this.__entries__.push([t, e])
            }, t.prototype.delete = function (t) {
              var e = this.__entries__,
                i = n(e, t);
              ~i && e.splice(i, 1)
            }, t.prototype.has = function (t) {
              return !!~n(this.__entries__, t)
            }, t.prototype.clear = function () {
              this.__entries__.splice(0)
            }, t.prototype.forEach = function (t, e) {
              void 0 === e && (e = null);
              for (var i = 0, n = this.__entries__; i < n.length; i++) {
                var r = n[i];
                t.call(e, r[1], r[0])
              }
            }, t;

            function t() {
              this.__entries__ = []
            }
          }(),
          Fn = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
          Vn = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
          qn = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Vn) : function (t) {
            return setTimeout(function () {
              return t(Date.now())
            }, 1e3 / 60)
          },
          Hn = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
          $n = "undefined" != typeof MutationObserver,
          Gn = (Un.prototype.addObserver = function (t) {
            ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
          }, Un.prototype.removeObserver = function (t) {
            var e = this.observers_,
              i = e.indexOf(t);
            ~i && e.splice(i, 1), !e.length && this.connected_ && this.disconnect_()
          }, Un.prototype.refresh = function () {
            this.updateObservers_() && this.refresh()
          }, Un.prototype.updateObservers_ = function () {
            var t = this.observers_.filter(function (t) {
              return t.gatherActive(), t.hasActive()
            });
            return t.forEach(function (t) {
              return t.broadcastActive()
            }), 0 < t.length
          }, Un.prototype.connect_ = function () {
            Fn && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), $n ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
              attributes: !0,
              childList: !0,
              characterData: !0,
              subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
          }, Un.prototype.disconnect_ = function () {
            Fn && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
          }, Un.prototype.onTransitionEnd_ = function (t) {
            var e = t.propertyName,
              i = void 0 === e ? "" : e;
            Hn.some(function (t) {
              return !!~i.indexOf(t)
            }) && this.refresh()
          }, Un.getInstance = function () {
            return this.instance_ || (this.instance_ = new Un), this.instance_
          }, Un.instance_ = null, Un),
          Xn = function (t) {
            return t && t.ownerDocument && t.ownerDocument.defaultView || Vn
          },
          Yn = tr(0, 0, 0, 0);

        function Un() {
          function t() {
            o && (o = !1, n()), s && i()
          }

          function e() {
            qn(t)
          }

          function i() {
            var t = Date.now();
            if (o) {
              if (t - a < 2) return;
              s = !0
            } else s = !(o = !0), setTimeout(e, r);
            a = t
          }
          var n, r, o, s, a;
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = (n = this.refresh.bind(this), s = o = !(r = 20), a = 0, i)
        }

        function Qn(t) {
          return parseFloat(t) || 0
        }

        function Zn(i) {
          for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
          return t.reduce(function (t, e) {
            return t + Qn(i["border-" + e + "-width"])
          }, 0)
        }
        var Kn = "undefined" != typeof SVGGraphicsElement ? function (t) {
          return t instanceof Xn(t).SVGGraphicsElement
        } : function (t) {
          return t instanceof Xn(t).SVGElement && "function" == typeof t.getBBox
        };

        function Jn(t) {
          return Fn ? Kn(t) ? tr(0, 0, (e = t.getBBox()).width, e.height) : function (t) {
            var e = t.clientWidth,
              i = t.clientHeight;
            if (!e && !i) return Yn;
            var n, r, o = Xn(t).getComputedStyle(t),
              s = function (t) {
                for (var e = {}, i = 0, n = ["top", "right", "bottom", "left"]; i < n.length; i++) {
                  var r = n[i],
                    o = t["padding-" + r];
                  e[r] = Qn(o)
                }
                return e
              }(o),
              a = s.left + s.right,
              c = s.top + s.bottom,
              l = Qn(o.width),
              u = Qn(o.height);
            return "border-box" === o.boxSizing && (Math.round(l + a) !== e && (l -= Zn(o, "left", "right") + a), Math.round(u + c) !== i && (u -= Zn(o, "top", "bottom") + c)), t !== Xn(t).document.documentElement && (n = Math.round(l + a) - e, r = Math.round(u + c) - i, 1 !== Math.abs(n) && (l -= n), 1 !== Math.abs(r) && (u -= r)), tr(s.left, s.top, l, u)
          }(t) : Yn;
          var e
        }

        function tr(t, e, i, n) {
          return {
            x: t,
            y: e,
            width: i,
            height: n
          }
        }

        function er(t, e) {
          var i, n, r, o, s, a, c = (i = e.x, n = e.y, r = e.width, o = e.height, s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, a = Object.create(s.prototype), Dn(a, {
            x: i,
            y: n,
            width: r,
            height: o,
            top: n,
            right: i + r,
            bottom: o + n,
            left: i
          }), a);
          Dn(this, {
            target: t,
            contentRect: c
          })
        }

        function ir(t) {
          if (!(this instanceof ir)) throw new TypeError("Cannot call a class as a function.");
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          var e = Gn.getInstance(),
            i = new rr(t, e, this);
          or.set(this, i)
        }
        var nr = (ar.prototype.isActive = function () {
          var t = Jn(this.target);
          return (this.contentRect_ = t).width !== this.broadcastWidth || t.height !== this.broadcastHeight
        }, ar.prototype.broadcastRect = function () {
          var t = this.contentRect_;
          return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
        }, ar),
          rr = (sr.prototype.observe = function (t) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(t instanceof Xn(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
              var e = this.observations_;
              e.has(t) || (e.set(t, new nr(t)), this.controller_.addObserver(this), this.controller_.refresh())
            }
          }, sr.prototype.unobserve = function (t) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(t instanceof Xn(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
              var e = this.observations_;
              e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
            }
          }, sr.prototype.disconnect = function () {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
          }, sr.prototype.gatherActive = function () {
            var e = this;
            this.clearActive(), this.observations_.forEach(function (t) {
              t.isActive() && e.activeObservations_.push(t)
            })
          }, sr.prototype.broadcastActive = function () {
            var t, e;
            this.hasActive() && (t = this.callbackCtx_, e = this.activeObservations_.map(function (t) {
              return new er(t.target, t.broadcastRect())
            }), this.callback_.call(t, e, t), this.clearActive())
          }, sr.prototype.clearActive = function () {
            this.activeObservations_.splice(0)
          }, sr.prototype.hasActive = function () {
            return 0 < this.activeObservations_.length
          }, sr),
          or = new ("undefined" != typeof WeakMap ? WeakMap : Bn);

        function sr(t, e, i) {
          if (this.activeObservations_ = [], this.observations_ = new Bn, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = t, this.controller_ = e, this.callbackCtx_ = i
        }

        function ar(t) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = tr(0, 0, 0, 0), this.target = t
        } ["observe", "unobserve", "disconnect"].forEach(function (e) {
          ir.prototype[e] = function () {
            var t;
            return (t = or.get(this))[e].apply(t, arguments)
          }
        });
        var cr = void 0 !== Vn.ResizeObserver ? Vn.ResizeObserver : ir,
          lr = null,
          ur = null;

        function dr() {
          if (null === lr) {
            if ("undefined" == typeof document) return lr = 0;
            var t = document.body,
              e = document.createElement("div");
            e.classList.add("simplebar-hide-scrollbar"), t.appendChild(e);
            var i = e.getBoundingClientRect().right;
            t.removeChild(e), lr = i
          }
          return lr
        }
        Gt && window.addEventListener("resize", function () {
          ur !== window.devicePixelRatio && (ur = window.devicePixelRatio, lr = null)
        });

        function fr(l) {
          return function (t, e, i, n) {
            ot(e);
            var r = at(t),
              o = j(r),
              s = tt(r.length),
              a = l ? s - 1 : 0,
              c = l ? -1 : 1;
            if (i < 2)
              for (; ;) {
                if (a in o) {
                  n = o[a], a += c;
                  break
                }
                if (a += c, l ? a < 0 : s <= a) throw TypeError("Reduce of empty array with no initial value")
              }
            for (; l ? 0 <= a : a < s; a += c) a in o && (n = e(n, o[a], a, r));
            return n
          }
        }
        var hr = [fr(!1), fr(!0)][0];
        rt({
          target: "Array",
          proto: !0,
          forced: dt("reduce")
        }, {
          reduce: function (t, e) {
            return hr(this, t, arguments.length, 1 < arguments.length ? e : void 0)
          }
        });
        var pr = B.f,
          vr = Function.prototype,
          gr = vr.toString,
          mr = /^\s*function ([^ (]*)/;
        !k || "name" in vr || pr(vr, "name", {
          configurable: !0,
          get: function () {
            try {
              return gr.call(this).match(mr)[1]
            } catch (t) {
              return ""
            }
          }
        });
        var br, yr, xr = RegExp.prototype.exec,
          Er = String.prototype.replace,
          wr = xr,
          Or = (br = /a/, yr = /b*/g, xr.call(br, "a"), xr.call(yr, "a"), 0 !== br.lastIndex || 0 !== yr.lastIndex),
          Sr = void 0 !== /()??/.exec("")[1];
        (Or || Sr) && (wr = function (t) {
          var e, i, n, r, o = this;
          return Sr && (i = new RegExp("^" + o.source + "$(?!\\s)", function () {
            var t = O(this),
              e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
          }.call(o))), Or && (e = o.lastIndex), n = xr.call(o, t), Or && n && (o.lastIndex = o.global ? n.index + n[0].length : e), Sr && n && 1 < n.length && Er.call(n[0], i, function () {
            for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (n[r] = void 0)
          }), n
        });
        var _r = wr;
        rt({
          target: "RegExp",
          proto: !0,
          forced: /./.exec !== _r
        }, {
          exec: _r
        });

        function kr(i, t, e, n) {
          var o, r, s, a, c = ct(i),
            l = !g(function () {
              var t = {};
              return t[c] = function () {
                return 7
              }, 7 != ""[i](t)
            }),
            u = l && !g(function () {
              var t = !1,
                e = /a/;
              return e.exec = function () {
                return t = !0, null
              }, "split" === i && (e.constructor = {}, e.constructor[Mr] = function () {
                return e
              }), e[c](""), !t
            });
          l && u && ("replace" !== i || Cr) && ("split" !== i || Tr) || (o = /./[c], s = (r = e(c, ""[i], function (t, e, i, n, r) {
            return e.exec === _r ? l && !r ? {
              done: !0,
              value: o.call(e, i, n)
            } : {
              done: !0,
              value: t.call(i, e, n)
            } : {
              done: !1
            }
          }))[0], a = r[1], ht(String.prototype, i, s), ht(RegExp.prototype, c, 2 == t ? function (t, e) {
            return a.call(t, this, e)
          } : function (t) {
            return a.call(t, this)
          }), n && F(RegExp.prototype[c], "sham", !0))
        }

        function Ar(t, e, i) {
          return e + (i ? jr(t, e).length : 1)
        }

        function Lr(t, e) {
          var i = t.exec;
          if ("function" == typeof i) {
            var n = i.call(t, e);
            if ("object" != Vr(n)) throw TypeError("RegExp exec method returned something other than an Object or null");
            return n
          }
          if ("RegExp" !== r(t)) throw TypeError("RegExp#exec called on incompatible receiver");
          return _r.call(t, e)
        }
        var Mr = ct("species"),
          Cr = !g(function () {
            var t = /./;
            return t.exec = function () {
              var t = [];
              return t.groups = {
                a: "7"
              }, t
            }, "7" !== "".replace(t, "$<a>")
          }),
          Tr = !g(function () {
            var t = /(?:)/,
              e = t.exec;
            t.exec = function () {
              return e.apply(this, arguments)
            };
            var i = "ab".split(t);
            return 2 !== i.length || "a" !== i[0] || "b" !== i[1]
          }),
          jr = Ye.charAt;
        kr("match", 1, function (n, l, u) {
          return [function (t) {
            var e = c(this),
              i = null == t ? void 0 : t[n];
            return void 0 !== i ? i.call(t, e) : new RegExp(t)[n](String(e))
          }, function (t) {
            var e = u(l, t, this);
            if (e.done) return e.value;
            var i = O(t),
              n = String(this);
            if (!i.global) return Lr(i, n);
            for (var r, o = i.unicode, s = [], a = i.lastIndex = 0; null !== (r = Lr(i, n));) {
              var c = String(r[0]);
              "" === (s[a] = c) && (i.lastIndex = Ar(n, tt(i.lastIndex), o)), a++
            }
            return 0 === a ? null : s
          }]
        });
        var zr = Math.max,
          Rr = Math.min,
          Ir = Math.floor,
          Wr = /\$([$&'`]|\d\d?|<[^>]*>)/g,
          Nr = /\$([$&'`]|\d\d?)/g;
        kr("replace", 2, function (r, E, w) {
          return [function (t, e) {
            var i = c(this),
              n = null == t ? void 0 : t[r];
            return void 0 !== n ? n.call(t, i, e) : E.call(String(i), t, e)
          }, function (t, e) {
            var i = w(E, t, this, e);
            if (i.done) return i.value;
            var n = O(t),
              r = String(this),
              o = "function" == typeof e;
            o || (e = String(e));
            var s, a = n.global;
            a && (s = n.unicode, n.lastIndex = 0);
            for (var c = []; ;) {
              var l = Lr(n, r);
              if (null === l) break;
              if (c.push(l), !a) break;
              "" === String(l[0]) && (n.lastIndex = Ar(r, tt(n.lastIndex), s))
            }
            for (var u, d = "", f = 0, h = 0; h < c.length; h++) {
              l = c[h];
              for (var p = String(l[0]), v = zr(Rr(J(l.index), r.length), 0), g = [], m = 1; m < l.length; m++) g.push(void 0 === (u = l[m]) ? u : String(u));
              var b, y = l.groups,
                x = o ? (b = [p].concat(g, v, r), void 0 !== y && b.push(y), String(e.apply(void 0, b))) : function (o, s, a, c, l, t) {
                  var u = a + o.length,
                    d = c.length,
                    e = Nr;
                  return void 0 !== l && (l = at(l), e = Wr), E.call(t, e, function (t, e) {
                    var i;
                    switch (e.charAt(0)) {
                      case "$":
                        return "$";
                      case "&":
                        return o;
                      case "`":
                        return s.slice(0, a);
                      case "'":
                        return s.slice(u);
                      case "<":
                        i = l[e.slice(1, -1)];
                        break;
                      default:
                        var n = +e;
                        if (0 == n) return t;
                        if (d < n) {
                          var r = Ir(n / 10);
                          return 0 !== r && r <= d ? void 0 === c[r - 1] ? e.charAt(1) : c[r - 1] + e.charAt(1) : t
                        }
                        i = c[n - 1]
                    }
                    return void 0 === i ? "" : i
                  })
                }(p, r, v, g, y, e);
              f <= v && (d += r.slice(f, v) + x, f = v + p.length)
            }
            return d + r.slice(f)
          }]
        });

        function Dr(t) {
          return Array.prototype.reduce.call(t, function (t, e) {
            var i = e.name.match(/data-simplebar-(.+)/);
            if (i) {
              var n = i[1].replace(/\W+(.)/g, function (t, e) {
                return e.toUpperCase()
              });
              switch (e.value) {
                case "true":
                  t[n] = !0;
                  break;
                case "false":
                  t[n] = !1;
                  break;
                case void 0:
                  t[n] = !0;
                  break;
                default:
                  t[n] = e.value
              }
            }
            return t
          }, {})
        }

        function Pr(t) {
          return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window
        }

        function Br(t) {
          return t && t.ownerDocument ? t.ownerDocument : document
        }
        var Fr = function () {
          function c(t, e) {
            var a = this;
            this.onScroll = function () {
              var t = Pr(a.el);
              a.scrollXTicking || (t.requestAnimationFrame(a.scrollX), a.scrollXTicking = !0), a.scrollYTicking || (t.requestAnimationFrame(a.scrollY), a.scrollYTicking = !0)
            }, this.scrollX = function () {
              a.axis.x.isOverflowing && (a.showScrollbar("x"), a.positionScrollbar("x")), a.scrollXTicking = !1
            }, this.scrollY = function () {
              a.axis.y.isOverflowing && (a.showScrollbar("y"), a.positionScrollbar("y")), a.scrollYTicking = !1
            }, this.onMouseEnter = function () {
              a.showScrollbar("x"), a.showScrollbar("y")
            }, this.onMouseMove = function (t) {
              a.mouseX = t.clientX, a.mouseY = t.clientY, (a.axis.x.isOverflowing || a.axis.x.forceVisible) && a.onMouseMoveForAxis("x"), (a.axis.y.isOverflowing || a.axis.y.forceVisible) && a.onMouseMoveForAxis("y")
            }, this.onMouseLeave = function () {
              a.onMouseMove.cancel(), (a.axis.x.isOverflowing || a.axis.x.forceVisible) && a.onMouseLeaveForAxis("x"), (a.axis.y.isOverflowing || a.axis.y.forceVisible) && a.onMouseLeaveForAxis("y"), a.mouseX = -1, a.mouseY = -1
            }, this.onWindowResize = function () {
              a.scrollbarWidth = a.getScrollbarWidth(), a.hideNativeScrollbar()
            }, this.hideScrollbars = function () {
              a.axis.x.track.rect = a.axis.x.track.el.getBoundingClientRect(), a.axis.y.track.rect = a.axis.y.track.el.getBoundingClientRect(), a.isWithinBounds(a.axis.y.track.rect) || (a.axis.y.scrollbar.el.classList.remove(a.classNames.visible), a.axis.y.isVisible = !1), a.isWithinBounds(a.axis.x.track.rect) || (a.axis.x.scrollbar.el.classList.remove(a.classNames.visible), a.axis.x.isVisible = !1)
            }, this.onPointerEvent = function (t) {
              var e, i;
              a.axis.x.track.rect = a.axis.x.track.el.getBoundingClientRect(), a.axis.y.track.rect = a.axis.y.track.el.getBoundingClientRect(), (a.axis.x.isOverflowing || a.axis.x.forceVisible) && (e = a.isWithinBounds(a.axis.x.track.rect)), (a.axis.y.isOverflowing || a.axis.y.forceVisible) && (i = a.isWithinBounds(a.axis.y.track.rect)), (e || i) && (t.preventDefault(), t.stopPropagation(), "mousedown" === t.type && (e && (a.axis.x.scrollbar.rect = a.axis.x.scrollbar.el.getBoundingClientRect(), a.isWithinBounds(a.axis.x.scrollbar.rect) ? a.onDragStart(t, "x") : a.onTrackClick(t, "x")), i && (a.axis.y.scrollbar.rect = a.axis.y.scrollbar.el.getBoundingClientRect(), a.isWithinBounds(a.axis.y.scrollbar.rect) ? a.onDragStart(t, "y") : a.onTrackClick(t, "y"))))
            }, this.drag = function (t) {
              var e = a.axis[a.draggedAxis].track,
                i = e.rect[a.axis[a.draggedAxis].sizeAttr],
                n = a.axis[a.draggedAxis].scrollbar,
                r = a.contentWrapperEl[a.axis[a.draggedAxis].scrollSizeAttr],
                o = parseInt(a.elStyles[a.axis[a.draggedAxis].sizeAttr], 10);
              t.preventDefault(), t.stopPropagation();
              var s = (("y" === a.draggedAxis ? t.pageY : t.pageX) - e.rect[a.axis[a.draggedAxis].offsetAttr] - a.axis[a.draggedAxis].dragOffset) / (i - n.size) * (r - o);
              "x" === a.draggedAxis && (s = a.isRtl && c.getRtlHelpers().isRtlScrollbarInverted ? s - (i + n.size) : s, s = a.isRtl && c.getRtlHelpers().isRtlScrollingInverted ? -s : s), a.contentWrapperEl[a.axis[a.draggedAxis].scrollOffsetAttr] = s
            }, this.onEndDrag = function (t) {
              var e = Br(a.el),
                i = Pr(a.el);
              t.preventDefault(), t.stopPropagation(), a.el.classList.remove(a.classNames.dragging), e.removeEventListener("mousemove", a.drag, !0), e.removeEventListener("mouseup", a.onEndDrag, !0), a.removePreventClickId = i.setTimeout(function () {
                e.removeEventListener("click", a.preventClick, !0), e.removeEventListener("dblclick", a.preventClick, !0), a.removePreventClickId = null
              })
            }, this.preventClick = function (t) {
              t.preventDefault(), t.stopPropagation()
            }, this.el = t, this.minScrollbarWidth = 20, this.options = Object.assign({}, c.defaultOptions, {}, e), this.classNames = Object.assign({}, c.defaultOptions.classNames, {}, this.options.classNames), this.axis = {
              x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {}
              },
              y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {}
              }
            }, this.removePreventClickId = null, c.instances.has(this.el) || (this.recalculate = Xi(this.recalculate.bind(this), 64), this.onMouseMove = Xi(this.onMouseMove.bind(this), 64), this.hideScrollbars = ln(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = ln(this.onWindowResize.bind(this), 64, {
              leading: !0
            }), c.getRtlHelpers = Pn(c.getRtlHelpers), this.init())
          }
          c.getRtlHelpers = function () {
            var t = document.createElement("div");
            t.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
            var e = t.firstElementChild;
            document.body.appendChild(e);
            var i = e.firstElementChild;
            e.scrollLeft = 0;
            var n = c.getOffset(e),
              r = c.getOffset(i);
            e.scrollLeft = 999;
            var o = c.getOffset(i);
            return {
              isRtlScrollingInverted: n.left !== r.left && r.left - o.left != 0,
              isRtlScrollbarInverted: n.left !== r.left
            }
          }, c.getOffset = function (t) {
            var e = t.getBoundingClientRect(),
              i = Br(t),
              n = Pr(t);
            return {
              top: e.top + (n.pageYOffset || i.documentElement.scrollTop),
              left: e.left + (n.pageXOffset || i.documentElement.scrollLeft)
            }
          };
          var t = c.prototype;
          return t.init = function () {
            c.instances.set(this.el, this), Gt && (this.initDOM(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners())
          }, t.initDOM = function () {
            var t, e, i = this;
            if (Array.prototype.filter.call(this.el.children, function (t) {
              return t.classList.contains(i.classNames.wrapper)
            }).length) this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper), this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl), this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
            else {
              for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
              this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl)
            }
            this.axis.x.track.el && this.axis.y.track.el || (t = document.createElement("div"), e = document.createElement("div"), t.classList.add(this.classNames.track), e.classList.add(this.classNames.scrollbar), t.appendChild(e), this.axis.x.track.el = t.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = t.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el)), this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar), this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)), this.el.setAttribute("data-simplebar", "init")
          }, t.initListeners = function () {
            var e = this,
              t = Pr(this.el);
            this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach(function (t) {
              e.el.addEventListener(t, e.onPointerEvent, !0)
            }), ["touchstart", "touchend", "touchmove"].forEach(function (t) {
              e.el.addEventListener(t, e.onPointerEvent, {
                capture: !0,
                passive: !0
              })
            }), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.addEventListener("scroll", this.onScroll), t.addEventListener("resize", this.onWindowResize);
            var i = !1,
              n = t.ResizeObserver || cr;
            this.resizeObserver = new n(function () {
              i && e.recalculate()
            }), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), t.requestAnimationFrame(function () {
              i = !0
            }), this.mutationObserver = new t.MutationObserver(this.recalculate), this.mutationObserver.observe(this.contentEl, {
              childList: !0,
              subtree: !0,
              characterData: !0
            })
          }, t.recalculate = function () {
            var t = Pr(this.el);
            this.elStyles = t.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction;
            var e = this.contentEl.offsetWidth,
              i = this.heightAutoObserverEl.offsetHeight <= 1,
              n = this.heightAutoObserverEl.offsetWidth <= 1 || 0 < e,
              r = this.contentWrapperEl.offsetWidth,
              o = this.elStyles.overflowX,
              s = this.elStyles.overflowY;
            this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft, this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
            var a = this.contentEl.scrollHeight,
              c = this.contentEl.scrollWidth;
            this.contentWrapperEl.style.height = i ? "auto" : "100%", this.placeholderEl.style.width = n ? (e || c) + "px" : "auto", this.placeholderEl.style.height = a + "px";
            var l = this.contentWrapperEl.offsetHeight;
            this.axis.x.isOverflowing = 0 !== e && e < c, this.axis.y.isOverflowing = l < a, this.axis.x.isOverflowing = "hidden" !== o && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== s && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar();
            var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
              d = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            this.axis.x.isOverflowing = this.axis.x.isOverflowing && r - d < c, this.axis.y.isOverflowing = this.axis.y.isOverflowing && l - u < a, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px", this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px", this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y")
          }, t.getScrollbarSize = function (t) {
            if (void 0 === t && (t = "y"), !this.axis[t].isOverflowing) return 0;
            var e = this.contentEl[this.axis[t].scrollSizeAttr],
              i = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
              n = i / e,
              r = Math.max(~~(n * i), this.options.scrollbarMinSize);
            return this.options.scrollbarMaxSize && (r = Math.min(r, this.options.scrollbarMaxSize)), r
          }, t.positionScrollbar = function (t) {
            var e, i, n, r, o, s, a;
            void 0 === t && (t = "y"), this.axis[t].isOverflowing && (e = this.contentWrapperEl[this.axis[t].scrollSizeAttr], i = this.axis[t].track.el[this.axis[t].offsetSizeAttr], n = parseInt(this.elStyles[this.axis[t].sizeAttr], 10), r = this.axis[t].scrollbar, o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr], s = (o = "x" === t && this.isRtl && c.getRtlHelpers().isRtlScrollingInverted ? -o : o) / (e - n), a = ~~((i - r.size) * s), a = "x" === t && this.isRtl && c.getRtlHelpers().isRtlScrollbarInverted ? a + (i - r.size) : a, r.el.style.transform = "x" === t ? "translate3d(" + a + "px, 0, 0)" : "translate3d(0, " + a + "px, 0)")
          }, t.toggleTrackVisibility = function (t) {
            void 0 === t && (t = "y");
            var e = this.axis[t].track.el,
              i = this.axis[t].scrollbar.el;
            this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll") : (e.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden"), this.axis[t].isOverflowing ? i.style.display = "block" : i.style.display = "none"
          }, t.hideNativeScrollbar = function () {
            this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0
          }, t.onMouseMoveForAxis = function (t) {
            void 0 === t && (t = "y"), this.axis[t].track.rect = this.axis[t].track.el.getBoundingClientRect(), this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[t].scrollbar.rect) ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[t].track.rect) ? (this.showScrollbar(t), this.axis[t].track.el.classList.add(this.classNames.hover)) : this.axis[t].track.el.classList.remove(this.classNames.hover)
          }, t.onMouseLeaveForAxis = function (t) {
            void 0 === t && (t = "y"), this.axis[t].track.el.classList.remove(this.classNames.hover), this.axis[t].scrollbar.el.classList.remove(this.classNames.hover)
          }, t.showScrollbar = function (t) {
            void 0 === t && (t = "y");
            var e = this.axis[t].scrollbar.el;
            this.axis[t].isVisible || (e.classList.add(this.classNames.visible), this.axis[t].isVisible = !0), this.options.autoHide && this.hideScrollbars()
          }, t.onDragStart = function (t, e) {
            void 0 === e && (e = "y");
            var i = Br(this.el),
              n = Pr(this.el),
              r = this.axis[e].scrollbar,
              o = "y" === e ? t.pageY : t.pageX;
            this.axis[e].dragOffset = o - r.rect[this.axis[e].offsetAttr], this.draggedAxis = e, this.el.classList.add(this.classNames.dragging), i.addEventListener("mousemove", this.drag, !0), i.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (i.addEventListener("click", this.preventClick, !0), i.addEventListener("dblclick", this.preventClick, !0)) : (n.clearTimeout(this.removePreventClickId), this.removePreventClickId = null)
          }, t.onTrackClick = function (t, n) {
            var r, e, i, o, s, a, c = this;
            void 0 === n && (n = "y"), this.options.clickOnTrack && (r = Pr(this.el), this.axis[n].scrollbar.rect = this.axis[n].scrollbar.el.getBoundingClientRect(), e = this.axis[n].scrollbar.rect[this.axis[n].offsetAttr], i = parseInt(this.elStyles[this.axis[n].sizeAttr], 10), o = this.contentWrapperEl[this.axis[n].scrollOffsetAttr], s = ("y" === n ? this.mouseY - e : this.mouseX - e) < 0 ? -1 : 1, a = -1 == s ? o - i : o + i, function t() {
              var e, i; - 1 == s ? a < o && (o -= 40, c.contentWrapperEl.scrollTo(((e = {})[c.axis[n].offsetAttr] = o, e)), r.requestAnimationFrame(t)) : o < a && (o += 40, c.contentWrapperEl.scrollTo(((i = {})[c.axis[n].offsetAttr] = o, i)), r.requestAnimationFrame(t))
            }())
          }, t.getContentElement = function () {
            return this.contentEl
          }, t.getScrollElement = function () {
            return this.contentWrapperEl
          }, t.getScrollbarWidth = function () {
            try {
              return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : dr()
            } catch (t) {
              return dr()
            }
          }, t.removeListeners = function () {
            var e = this,
              t = Pr(this.el);
            this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach(function (t) {
              e.el.removeEventListener(t, e.onPointerEvent, !0)
            }), ["touchstart", "touchend", "touchmove"].forEach(function (t) {
              e.el.removeEventListener(t, e.onPointerEvent, {
                capture: !0,
                passive: !0
              })
            }), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.removeEventListener("scroll", this.onScroll), t.removeEventListener("resize", this.onWindowResize), this.mutationObserver.disconnect(), this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel()
          }, t.unMount = function () {
            this.removeListeners(), c.instances.delete(this.el)
          }, t.isWithinBounds = function (t) {
            return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height
          }, t.findChild = function (t, e) {
            var i = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
            return Array.prototype.filter.call(t.children, function (t) {
              return i.call(t, e)
            })[0]
          }, c
        }();
        return Fr.defaultOptions = {
          autoHide: !0,
          forceVisible: !1,
          clickOnTrack: !0,
          classNames: {
            contentEl: "simplebar-content",
            contentWrapper: "simplebar-content-wrapper",
            offset: "simplebar-offset",
            mask: "simplebar-mask",
            wrapper: "simplebar-wrapper",
            placeholder: "simplebar-placeholder",
            scrollbar: "simplebar-scrollbar",
            track: "simplebar-track",
            heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
            heightAutoObserverEl: "simplebar-height-auto-observer",
            visible: "simplebar-visible",
            horizontal: "simplebar-horizontal",
            vertical: "simplebar-vertical",
            hover: "simplebar-hover",
            dragging: "simplebar-dragging"
          },
          scrollbarMinSize: 25,
          scrollbarMaxSize: 0,
          timeout: 1e3
        }, Fr.instances = new WeakMap, Fr.initDOMLoadedElements = function () {
          document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function (t) {
            "init" === t.getAttribute("data-simplebar") || Fr.instances.has(t) || new Fr(t, Dr(t.attributes))
          })
        }, Fr.removeObserver = function () {
          this.globalObserver.disconnect()
        }, Fr.initHtmlApi = function () {
          this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(Fr.handleMutations), this.globalObserver.observe(document, {
            childList: !0,
            subtree: !0
          })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements))
        }, Fr.handleMutations = function (t) {
          t.forEach(function (t) {
            Array.prototype.forEach.call(t.addedNodes, function (t) {
              1 === t.nodeType && (t.hasAttribute("data-simplebar") ? Fr.instances.has(t) || new Fr(t, Dr(t.attributes)) : Array.prototype.forEach.call(t.querySelectorAll("[data-simplebar]"), function (t) {
                "init" === t.getAttribute("data-simplebar") || Fr.instances.has(t) || new Fr(t, Dr(t.attributes))
              }))
            }), Array.prototype.forEach.call(t.removedNodes, function (t) {
              1 === t.nodeType && (t.hasAttribute('[data-simplebar="init"]') ? Fr.instances.has(t) && Fr.instances.get(t).unMount() : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'), function (t) {
                Fr.instances.has(t) && Fr.instances.get(t).unMount()
              }))
            })
          })
        }, Fr.getOptions = Dr, Gt && Fr.initHtmlApi(), Fr
      }, "object" == ("undefined" == typeof exports ? "undefined" : Vr(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).SimpleBar = e(), "function" != typeof window.CustomEvent && (i.prototype = window.Event.prototype, window.CustomEvent = i),
        function () {
          var i = this;

          function n(t) {
            0 < arguments.length && void 0 !== t && !t || function () {
              for (var t = c.list.length - 1; 0 <= t; t--) {
                var e = c.list[t];
                e && v(e.className) && (m(e), c.list.splice(t, 1))
              }
            }(), window.dispatchEvent(new CustomEvent("lgpdUpdate", {
              bubbles: !0,
              detail: l
            }))
          }

          function r(t, e) {
            l.all = !0, u("0"), e || s(), n()
          }

          function o(t) {
            t && (t.preventDefault(), t.stopImmediatePropagation()), document.getElementById("lgpd-modal").classList.toggle("active")
          }

          function s(t) {
            t && (t.preventDefault(), t.stopImmediatePropagation()), document.getElementById("lgpd-banner").classList.toggle("active")
          }

          function a(t) {
            var e;
            document.getElementsByClassName("lgpd-toggle").forEach(function (t) {
              t.checked = !1
            }), e = "", document.getElementsByClassName("lgpd-toggle").forEach(function (t) {
              t.checked && (e += "".concat(t.getAttribute("data-type"), "_"))
            }), u(e = (e = e.length <= 0 ? "-1_" : e).slice(0, -1)), n(), o(), s()
          }
          // p.observe(document.documentElement, {
          //   childList: !0,
          //   subtree: !0
          // }), d() && n(), window.onload = function (t) {
          //   var e = document.createElement("div");
          //   e.innerHTML = '<div id="lgpd-banner"><div class="lgpd-modal-background" role="presentation"></div><div class="lgpd-modal-message"><div class="lgpd-message"> Este site usa cookies e dados pessoais de acordo com nossos <a class="lgpd-terms" href="http://cielo.com.br/termos-condicoes-de-uso/" target="_blank" rel="noopener">termos de uso e política de privacidade</a>.<br><br>Ao clicar em “Entendi”, você concorda em armazenar cookies em seu dispositivo para melhorar a navegação e uso do site, além de autorizar as ações de marketing. Você pode também <a id="lgpd-customize" href="#">customizar</a> suas preferências.</div><button id="lgpd-banner-accept-all" class="lgpd-rect-button">Entendi</button><div id="lgpd-banner-close" class="lgpd-close" hidden><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893Z" fill="#00AEEF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#00AEEF"/></svg></div></div></div><div id="lgpd-modal"><div role="presentation" class="lgpd-modal-background"></div><div id="lgpd-scroll-container" class="lgpd-scroll-container" data-simplebar data-simplebar-auto-hide="false"><div id="lgpd-modal-close" class="lgpd-close"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893Z" fill="#5A646E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#5A646E"/></svg></div><div class="lgpd-title">Termos de Privacidade</div><div class="lgpd-content"> A CIELO respeita a sua privacidade. Qualquer informação que você nos forneça será tratada com o mais alto nível de cuidado e segurança, sendo utilizada apenas de acordo com os limites estabelecidos neste documento. <a class="lgpd-terms" href="http://cielo.com.br/termos-condicoes-de-uso/" target="_blank" rel="noopener">Saiba mais sobre os Termos de Privacidade</a> </div><div class="lgpd-title">Cookies</div><div class="lgpd-content"> Os cookies permitem que as páginas da CIELO se lembrem de suas escolhas, para proporcionar uma experiência personalizada. Também, possibilitam que os Usuários assistam a vídeos e utilizem ferramentas sociais, campos para comentários, dentre outros. </div> <div class="lgpd-title">Se você negar o uso de cookies</div><div class="lgpd-content"> A sua navegação poderá ser afetada em performance, carregamento das páginas, preferências de navegação, direcionamento de conteúdos relevantes e de seu interesse. </div><div class="lgpd-title">Cookies Necessários <input type="checkbox" disabled class="toggle lgpd-toggle" checked data-type="1"> </div><div class="lgpd-content"> Os cookies são essenciais para que os websites da CIELO carreguem adequadamente e permitam que você navegue corretamente, bem como faça o uso de todas as funcionalidades disponíveis. </div><div class="lgpd-title">Cookies Funcionais <input type="checkbox" class="toggle lgpd-toggle" checked data-type="2"> </div><div class="lgpd-content"> Os cookies permitem que as páginas da CIELO se lembrem de suas escolhas, para proporcionar uma experiência personalizada. Também, possibilitam que os Usuários assistam a vídeos e utilizem ferramentas sociais, campos para comentários, dentre outros. </div><div aria-hidden="true" class="lgpd-title"></div><div class="lgpd-content"> </div><div class="lgpd-title">Cookies Desempenho <input type="checkbox" class="toggle lgpd-toggle" checked data-type="3"> </div><div class="lgpd-content"> Os cookies nos ajudam a entender como os visitantes interagem com as páginas da CIELO, fornecendo informações sobre as áreas visitadas, o tempo de visita ao site e quaisquer problemas encontrados, como mensagens de erro. </div><div class="lgpd-title">Cookies Marketing <input type="checkbox" class="toggle lgpd-toggle" checked data-type="4"> </div><div class="lgpd-content"> Os cookies são utilizados para fornecer mais conteúdo relevante e do interesse dos Usuários. <br>Podem ser utilizados para apresentar publicidade com um maior direcionamento ou limitar o número a que esta é veiculada, nas páginas da CIELO Também, permitem a medição da eficácia de uma campanha publicitária lançada. </div><button id="lgpd-modal-all" class="lgpd-rect-button">Aceito tudo</button> <button id="lgpd-modal-none" class="lgpd-rect-button light">Recuso tudo</button> </div></div>', document.body.appendChild(e), d() || document.getElementById("lgpd-banner").classList.toggle("active"), document.getElementById("lgpd-banner-close").addEventListener("click", s.bind(i)), document.getElementById("lgpd-banner-accept-all").addEventListener("click", r.bind(i)), document.getElementById("lgpd-customize").addEventListener("click", o.bind(i)), document.getElementById("lgpd-modal-close").addEventListener("click", o.bind(i)), document.getElementById("lgpd-modal-all").addEventListener("click", function (t) {
          //     document.getElementsByClassName("lgpd-toggle").forEach(function (t) {
          //       t.checked = !0
          //     }), r(), o()
          //   }.bind(i)), document.getElementById("lgpd-modal-none").addEventListener("click", a.bind(i)), window.addEventListener("lgpdAcceptAll", function (t) {
          //     r(0, !0)
          //   });
          //   new SimpleBar(document.getElementById("lgpd-scroll-container"))
          // }

          var e = document.createElement("div");
          e.innerHTML = '<div id="lgpd-banner"><div class="lgpd-modal-background" role="presentation"></div><div class="lgpd-modal-message"><div class="lgpd-message"> Este site usa cookies e dados pessoais de acordo com nossos <a class="lgpd-terms" href="http://cielo.com.br/termos-condicoes-de-uso/" target="_blank" rel="noopener">termos de uso e política de privacidade</a>.<br><br>Ao clicar em “Entendi”, você concorda em armazenar cookies em seu dispositivo para melhorar a navegação e uso do site, além de autorizar as ações de marketing. Você pode também <a id="lgpd-customize" href="#">customizar</a> suas preferências.</div><button id="lgpd-banner-accept-all" class="lgpd-rect-button">Entendi</button><div id="lgpd-banner-close" class="lgpd-close" hidden><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893Z" fill="#00AEEF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#00AEEF"/></svg></div></div></div><div id="lgpd-modal"><div role="presentation" class="lgpd-modal-background"></div><div id="lgpd-scroll-container" class="lgpd-scroll-container" data-simplebar data-simplebar-auto-hide="false"><div id="lgpd-modal-close" class="lgpd-close"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893Z" fill="#5A646E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#5A646E"/></svg></div><div class="lgpd-title">Termos de Privacidade</div><div class="lgpd-content"> A CIELO respeita a sua privacidade. Qualquer informação que você nos forneça será tratada com o mais alto nível de cuidado e segurança, sendo utilizada apenas de acordo com os limites estabelecidos neste documento. <a class="lgpd-terms" href="http://cielo.com.br/termos-condicoes-de-uso/" target="_blank" rel="noopener">Saiba mais sobre os Termos de Privacidade</a> </div><div class="lgpd-title">Cookies</div><div class="lgpd-content"> Os cookies permitem que as páginas da CIELO se lembrem de suas escolhas, para proporcionar uma experiência personalizada. Também, possibilitam que os Usuários assistam a vídeos e utilizem ferramentas sociais, campos para comentários, dentre outros. </div> <div class="lgpd-title">Se você negar o uso de cookies</div><div class="lgpd-content"> A sua navegação poderá ser afetada em performance, carregamento das páginas, preferências de navegação, direcionamento de conteúdos relevantes e de seu interesse. </div><div class="lgpd-title">Cookies Necessários <input type="checkbox" disabled class="toggle lgpd-toggle" checked data-type="1"> </div><div class="lgpd-content"> Os cookies são essenciais para que os websites da CIELO carreguem adequadamente e permitam que você navegue corretamente, bem como faça o uso de todas as funcionalidades disponíveis. </div><div class="lgpd-title">Cookies Funcionais <input type="checkbox" class="toggle lgpd-toggle" checked data-type="2"> </div><div class="lgpd-content"> Os cookies permitem que as páginas da CIELO se lembrem de suas escolhas, para proporcionar uma experiência personalizada. Também, possibilitam que os Usuários assistam a vídeos e utilizem ferramentas sociais, campos para comentários, dentre outros. </div><div aria-hidden="true" class="lgpd-title"></div><div class="lgpd-content"> </div><div class="lgpd-title">Cookies Desempenho <input type="checkbox" class="toggle lgpd-toggle" checked data-type="3"> </div><div class="lgpd-content"> Os cookies nos ajudam a entender como os visitantes interagem com as páginas da CIELO, fornecendo informações sobre as áreas visitadas, o tempo de visita ao site e quaisquer problemas encontrados, como mensagens de erro. </div><div class="lgpd-title">Cookies Marketing <input type="checkbox" class="toggle lgpd-toggle" checked data-type="4"> </div><div class="lgpd-content"> Os cookies são utilizados para fornecer mais conteúdo relevante e do interesse dos Usuários. <br>Podem ser utilizados para apresentar publicidade com um maior direcionamento ou limitar o número a que esta é veiculada, nas páginas da CIELO Também, permitem a medição da eficácia de uma campanha publicitária lançada. </div><button id="lgpd-modal-all" class="lgpd-rect-button">Aceito tudo</button> <button id="lgpd-modal-none" class="lgpd-rect-button light">Recuso tudo</button> </div></div>', document.body.appendChild(e), d() || document.getElementById("lgpd-banner").classList.toggle("active"), document.getElementById("lgpd-banner-close").addEventListener("click", s.bind(i)), document.getElementById("lgpd-banner-accept-all").addEventListener("click", r.bind(i)), document.getElementById("lgpd-customize").addEventListener("click", o.bind(i)), document.getElementById("lgpd-modal-close").addEventListener("click", o.bind(i)), document.getElementById("lgpd-modal-all").addEventListener("click", function (t) {
            document.getElementsByClassName("lgpd-toggle").forEach(function (t) {
              t.checked = !0
            }), r(), o()
          }.bind(i)), document.getElementById("lgpd-modal-none").addEventListener("click", a.bind(i)), window.addEventListener("lgpdAcceptAll", function (t) {
            r(0, !0)
          });    
        }()
    });
  }
}
