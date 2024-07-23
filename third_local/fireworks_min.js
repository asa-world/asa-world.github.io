!function() {
    var n = document.querySelector(".fireworks");
    if (("false" !== n.getAttribute("mobile") || !/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) && n) {
        !function() {
            n = this,
            e = function() {
                "use strict";
                var n = {
                    update: null,
                    begin: null,
                    loopBegin: null,
                    changeBegin: null,
                    change: null,
                    changeComplete: null,
                    loopComplete: null,
                    complete: null,
                    loop: 1,
                    direction: "normal",
                    autoplay: !0,
                    timelineOffset: 0
                }
                  , e = {
                    duration: 1e3,
                    delay: 0,
                    endDelay: 0,
                    easing: "easeOutElastic(1, .5)",
                    round: 0
                }
                  , t = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"]
                  , r = {
                    CSS: {},
                    springs: {}
                };
                function a(n, e, t) {
                    return Math.min(Math.max(n, e), t)
                }
                function i(n, e) {
                    return n.indexOf(e) > -1
                }
                function o(n, e) {
                    return n.apply(null, e)
                }
                var u = {
                    arr: function(n) {
                        return Array.isArray(n)
                    },
                    obj: function(n) {
                        return i(Object.prototype.toString.call(n), "Object")
                    },
                    pth: function(n) {
                        return u.obj(n) && n.hasOwnProperty("totalLength")
                    },
                    svg: function(n) {
                        return n instanceof SVGElement
                    },
                    inp: function(n) {
                        return n instanceof HTMLInputElement
                    },
                    dom: function(n) {
                        return n.nodeType || u.svg(n)
                    },
                    str: function(n) {
                        return "string" == typeof n
                    },
                    fnc: function(n) {
                        return "function" == typeof n
                    },
                    und: function(n) {
                        return void 0 === n
                    },
                    nil: function(n) {
                        return u.und(n) || null === n
                    },
                    hex: function(n) {
                        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)
                    },
                    rgb: function(n) {
                        return /^rgb/.test(n)
                    },
                    hsl: function(n) {
                        return /^hsl/.test(n)
                    },
                    col: function(n) {
                        return u.hex(n) || u.rgb(n) || u.hsl(n)
                    },
                    key: function(t) {
                        return !n.hasOwnProperty(t) && !e.hasOwnProperty(t) && "targets" !== t && "keyframes" !== t
                    }
                };
                function c(n) {
                    var e = /\(([^)]+)\)/.exec(n);
                    return e ? e[1].split(",").map((function(n) {
                        return parseFloat(n)
                    }
                    )) : []
                }
                function s(n, e) {
                    var t = c(n)
                      , i = a(u.und(t[0]) ? 1 : t[0], .1, 100)
                      , o = a(u.und(t[1]) ? 100 : t[1], .1, 100)
                      , s = a(u.und(t[2]) ? 10 : t[2], .1, 100)
                      , l = a(u.und(t[3]) ? 0 : t[3], .1, 100)
                      , f = Math.sqrt(o / i)
                      , d = s / (2 * Math.sqrt(o * i))
                      , p = d < 1 ? f * Math.sqrt(1 - d * d) : 0
                      , h = 1
                      , g = d < 1 ? (d * f - l) / p : -l + f;
                    function m(n) {
                        var t = e ? e * n / 1e3 : n;
                        return t = d < 1 ? Math.exp(-t * d * f) * (h * Math.cos(p * t) + g * Math.sin(p * t)) : (h + g * t) * Math.exp(-t * f),
                        0 === n || 1 === n ? n : 1 - t
                    }
                    return e ? m : function() {
                        var e = r.springs[n];
                        if (e)
                            return e;
                        for (var t = 0, a = 0; ; )
                            if (1 === m(t += 1 / 6)) {
                                if (++a >= 16)
                                    break
                            } else
                                a = 0;
                        var i = t * (1 / 6) * 1e3;
                        return r.springs[n] = i,
                        i
                    }
                }
                function l(n) {
                    return void 0 === n && (n = 10),
                    function(e) {
                        return Math.ceil(a(e, 1e-6, 1) * n) * (1 / n)
                    }
                }
                var f, d, p = function() {
                    var n = 11
                      , e = 1 / (n - 1);
                    function t(n, e) {
                        return 1 - 3 * e + 3 * n
                    }
                    function r(n, e) {
                        return 3 * e - 6 * n
                    }
                    function a(n) {
                        return 3 * n
                    }
                    function i(n, e, i) {
                        return ((t(e, i) * n + r(e, i)) * n + a(e)) * n
                    }
                    function o(n, e, i) {
                        return 3 * t(e, i) * n * n + 2 * r(e, i) * n + a(e)
                    }
                    return function(t, r, a, u) {
                        if (0 <= t && t <= 1 && 0 <= a && a <= 1) {
                            var c = new Float32Array(n);
                            if (t !== r || a !== u)
                                for (var s = 0; s < n; ++s)
                                    c[s] = i(s * e, t, a);
                            return function(n) {
                                return t === r && a === u || 0 === n || 1 === n ? n : i(l(n), r, u)
                            }
                        }
                        function l(r) {
                            for (var u = 0, s = 1, l = n - 1; s !== l && c[s] <= r; ++s)
                                u += e;
                            var f = u + (r - c[--s]) / (c[s + 1] - c[s]) * e
                              , d = o(f, t, a);
                            return d >= .001 ? function(n, e, t, r) {
                                for (var a = 0; a < 4; ++a) {
                                    var u = o(e, t, r);
                                    if (0 === u)
                                        return e;
                                    e -= (i(e, t, r) - n) / u
                                }
                                return e
                            }(r, f, t, a) : 0 === d ? f : function(n, e, t, r, a) {
                                for (var o, u, c = 0; (o = i(u = e + (t - e) / 2, r, a) - n) > 0 ? t = u : e = u,
                                Math.abs(o) > 1e-7 && ++c < 10; )
                                    ;
                                return u
                            }(r, u, u + e, t, a)
                        }
                    }
                }(), h = (f = {
                    linear: function() {
                        return function(n) {
                            return n
                        }
                    }
                },
                d = {
                    Sine: function() {
                        return function(n) {
                            return 1 - Math.cos(n * Math.PI / 2)
                        }
                    },
                    Circ: function() {
                        return function(n) {
                            return 1 - Math.sqrt(1 - n * n)
                        }
                    },
                    Back: function() {
                        return function(n) {
                            return n * n * (3 * n - 2)
                        }
                    },
                    Bounce: function() {
                        return function(n) {
                            for (var e, t = 4; n < ((e = Math.pow(2, --t)) - 1) / 11; )
                                ;
                            return 1 / Math.pow(4, 3 - t) - 7.5625 * Math.pow((3 * e - 2) / 22 - n, 2)
                        }
                    },
                    Elastic: function(n, e) {
                        void 0 === n && (n = 1),
                        void 0 === e && (e = .5);
                        var t = a(n, 1, 10)
                          , r = a(e, .1, 2);
                        return function(n) {
                            return 0 === n || 1 === n ? n : -t * Math.pow(2, 10 * (n - 1)) * Math.sin((n - 1 - r / (2 * Math.PI) * Math.asin(1 / t)) * (2 * Math.PI) / r)
                        }
                    }
                },
                ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach((function(n, e) {
                    d[n] = function() {
                        return function(n) {
                            return Math.pow(n, e + 2)
                        }
                    }
                }
                )),
                Object.keys(d).forEach((function(n) {
                    var e = d[n];
                    f["easeIn" + n] = e,
                    f["easeOut" + n] = function(n, t) {
                        return function(r) {
                            return 1 - e(n, t)(1 - r)
                        }
                    }
                    ,
                    f["easeInOut" + n] = function(n, t) {
                        return function(r) {
                            return r < .5 ? e(n, t)(2 * r) / 2 : 1 - e(n, t)(-2 * r + 2) / 2
                        }
                    }
                    ,
                    f["easeOutIn" + n] = function(n, t) {
                        return function(r) {
                            return r < .5 ? (1 - e(n, t)(1 - 2 * r)) / 2 : (e(n, t)(2 * r - 1) + 1) / 2
                        }
                    }
                }
                )),
                f);
                function g(n, e) {
                    if (u.fnc(n))
                        return n;
                    var t = n.split("(")[0]
                      , r = h[t]
                      , a = c(n);
                    switch (t) {
                    case "spring":
                        return s(n, e);
                    case "cubicBezier":
                        return o(p, a);
                    case "steps":
                        return o(l, a);
                    default:
                        return o(r, a)
                    }
                }
                function m(n) {
                    try {
                        return document.querySelectorAll(n)
                    } catch (n) {
                        return
                    }
                }
                function v(n, e) {
                    for (var t = n.length, r = arguments.length >= 2 ? arguments[1] : void 0, a = [], i = 0; i < t; i++)
                        if (i in n) {
                            var o = n[i];
                            e.call(r, o, i, n) && a.push(o)
                        }
                    return a
                }
                function y(n) {
                    return n.reduce((function(n, e) {
                        return n.concat(u.arr(e) ? y(e) : e)
                    }
                    ), [])
                }
                function b(n) {
                    return u.arr(n) ? n : (u.str(n) && (n = m(n) || n),
                    n instanceof NodeList || n instanceof HTMLCollection ? [].slice.call(n) : [n])
                }
                function w(n, e) {
                    return n.some((function(n) {
                        return n === e
                    }
                    ))
                }
                function x(n) {
                    var e = {};
                    for (var t in n)
                        e[t] = n[t];
                    return e
                }
                function M(n, e) {
                    var t = x(n);
                    for (var r in n)
                        t[r] = e.hasOwnProperty(r) ? e[r] : n[r];
                    return t
                }
                function P(n, e) {
                    var t = x(n);
                    for (var r in e)
                        t[r] = u.und(n[r]) ? e[r] : n[r];
                    return t
                }
                function k(n) {
                    return u.rgb(n) ? (t = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e = n)) ? "rgba(" + t[1] + ",1)" : e : u.hex(n) ? (r = n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(n, e, t, r) {
                        return e + e + t + t + r + r
                    }
                    )),
                    a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),
                    "rgba(" + parseInt(a[1], 16) + "," + parseInt(a[2], 16) + "," + parseInt(a[3], 16) + ",1)") : u.hsl(n) ? function(n) {
                        var e, t, r, a = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n), i = parseInt(a[1], 10) / 360, o = parseInt(a[2], 10) / 100, u = parseInt(a[3], 10) / 100, c = a[4] || 1;
                        function s(n, e, t) {
                            return t < 0 && (t += 1),
                            t > 1 && (t -= 1),
                            t < 1 / 6 ? n + 6 * (e - n) * t : t < .5 ? e : t < 2 / 3 ? n + (e - n) * (2 / 3 - t) * 6 : n
                        }
                        if (0 == o)
                            e = t = r = u;
                        else {
                            var l = u < .5 ? u * (1 + o) : u + o - u * o
                              , f = 2 * u - l;
                            e = s(f, l, i + 1 / 3),
                            t = s(f, l, i),
                            r = s(f, l, i - 1 / 3)
                        }
                        return "rgba(" + 255 * e + "," + 255 * t + "," + 255 * r + "," + c + ")"
                    }(n) : void 0;
                    var e, t, r, a
                }
                function C(n) {
                    var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);
                    if (e)
                        return e[1]
                }
                function O(n, e) {
                    return u.fnc(n) ? n(e.target, e.id, e.total) : n
                }
                function I(n, e) {
                    return n.getAttribute(e)
                }
                function B(n, e, t) {
                    if (w([t, "deg", "rad", "turn"], C(e)))
                        return e;
                    var a = r.CSS[e + t];
                    if (!u.und(a))
                        return a;
                    var i = document.createElement(n.tagName)
                      , o = n.parentNode && n.parentNode !== document ? n.parentNode : document.body;
                    o.appendChild(i),
                    i.style.position = "absolute",
                    i.style.width = 100 + t;
                    var c = 100 / i.offsetWidth;
                    o.removeChild(i);
                    var s = c * parseFloat(e);
                    return r.CSS[e + t] = s,
                    s
                }
                function F(n, e, t) {
                    if (e in n.style) {
                        var r = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                          , a = n.style[e] || getComputedStyle(n).getPropertyValue(r) || "0";
                        return t ? B(n, a, t) : a
                    }
                }
                function A(n, e) {
                    return u.dom(n) && !u.inp(n) && (!u.nil(I(n, e)) || u.svg(n) && n[e]) ? "attribute" : u.dom(n) && w(t, e) ? "transform" : u.dom(n) && "transform" !== e && F(n, e) ? "css" : null != n[e] ? "object" : void 0
                }
                function D(n) {
                    if (u.dom(n)) {
                        for (var e, t = n.style.transform || "", r = /(\w+)\(([^)]*)\)/g, a = new Map; e = r.exec(t); )
                            a.set(e[1], e[2]);
                        return a
                    }
                }
                function T(n, e, t, r) {
                    var a, o = i(e, "scale") ? 1 : 0 + (i(a = e, "translate") || "perspective" === a ? "px" : i(a, "rotate") || i(a, "skew") ? "deg" : void 0), u = D(n).get(e) || o;
                    return t && (t.transforms.list.set(e, u),
                    t.transforms.last = e),
                    r ? B(n, u, r) : u
                }
                function E(n, e, t, r) {
                    switch (A(n, e)) {
                    case "transform":
                        return T(n, e, r, t);
                    case "css":
                        return F(n, e, t);
                    case "attribute":
                        return I(n, e);
                    default:
                        return n[e] || 0
                    }
                }
                function S(n, e) {
                    var t = /^(\*=|\+=|-=)/.exec(n);
                    if (!t)
                        return n;
                    var r = C(n) || 0
                      , a = parseFloat(e)
                      , i = parseFloat(n.replace(t[0], ""));
                    switch (t[0][0]) {
                    case "+":
                        return a + i + r;
                    case "-":
                        return a - i + r;
                    case "*":
                        return a * i + r
                    }
                }
                function N(n, e) {
                    if (u.col(n))
                        return k(n);
                    if (/\s/g.test(n))
                        return n;
                    var t = C(n)
                      , r = t ? n.substr(0, n.length - t.length) : n;
                    return e ? r + e : r
                }
                function L(n, e) {
                    return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2))
                }
                function W(n) {
                    for (var e, t = n.points, r = 0, a = 0; a < t.numberOfItems; a++) {
                        var i = t.getItem(a);
                        a > 0 && (r += L(e, i)),
                        e = i
                    }
                    return r
                }
                function j(n) {
                    if (n.getTotalLength)
                        return n.getTotalLength();
                    switch (n.tagName.toLowerCase()) {
                    case "circle":
                        return i = n,
                        2 * Math.PI * I(i, "r");
                    case "rect":
                        return 2 * I(a = n, "width") + 2 * I(a, "height");
                    case "line":
                        return L({
                            x: I(r = n, "x1"),
                            y: I(r, "y1")
                        }, {
                            x: I(r, "x2"),
                            y: I(r, "y2")
                        });
                    case "polyline":
                        return W(n);
                    case "polygon":
                        return t = (e = n).points,
                        W(e) + L(t.getItem(t.numberOfItems - 1), t.getItem(0))
                    }
                    var e, t, r, a, i
                }
                function q(n, e) {
                    var t = e || {}
                      , r = t.el || function(n) {
                        for (var e = n.parentNode; u.svg(e) && u.svg(e.parentNode); )
                            e = e.parentNode;
                        return e
                    }(n)
                      , a = r.getBoundingClientRect()
                      , i = I(r, "viewBox")
                      , o = a.width
                      , c = a.height
                      , s = t.viewBox || (i ? i.split(" ") : [0, 0, o, c]);
                    return {
                        el: r,
                        viewBox: s,
                        x: s[0] / 1,
                        y: s[1] / 1,
                        w: o,
                        h: c,
                        vW: s[2],
                        vH: s[3]
                    }
                }
                function H(n, e, t) {
                    function r(t) {
                        void 0 === t && (t = 0);
                        var r = e + t >= 1 ? e + t : 0;
                        return n.el.getPointAtLength(r)
                    }
                    var a = q(n.el, n.svg)
                      , i = r()
                      , o = r(-1)
                      , u = r(1)
                      , c = t ? 1 : a.w / a.vW
                      , s = t ? 1 : a.h / a.vH;
                    switch (n.property) {
                    case "x":
                        return (i.x - a.x) * c;
                    case "y":
                        return (i.y - a.y) * s;
                    case "angle":
                        return 180 * Math.atan2(u.y - o.y, u.x - o.x) / Math.PI
                    }
                }
                function V(n, e) {
                    var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g
                      , r = N(u.pth(n) ? n.totalLength : n, e) + "";
                    return {
                        original: r,
                        numbers: r.match(t) ? r.match(t).map(Number) : [0],
                        strings: u.str(n) || e ? r.split(t) : []
                    }
                }
                function $(n) {
                    return v(n ? y(u.arr(n) ? n.map(b) : b(n)) : [], (function(n, e, t) {
                        return t.indexOf(n) === e
                    }
                    ))
                }
                function X(n) {
                    var e = $(n);
                    return e.map((function(n, t) {
                        return {
                            target: n,
                            id: t,
                            total: e.length,
                            transforms: {
                                list: D(n)
                            }
                        }
                    }
                    ))
                }
                function Y(n, e) {
                    var t = x(e);
                    if (/^spring/.test(t.easing) && (t.duration = s(t.easing)),
                    u.arr(n)) {
                        var r = n.length;
                        2 !== r || u.obj(n[0]) ? u.fnc(e.duration) || (t.duration = e.duration / r) : n = {
                            value: n
                        }
                    }
                    var a = u.arr(n) ? n : [n];
                    return a.map((function(n, t) {
                        var r = u.obj(n) && !u.pth(n) ? n : {
                            value: n
                        };
                        return u.und(r.delay) && (r.delay = t ? 0 : e.delay),
                        u.und(r.endDelay) && (r.endDelay = t === a.length - 1 ? e.endDelay : 0),
                        r
                    }
                    )).map((function(n) {
                        return P(n, t)
                    }
                    ))
                }
                function G(n, e) {
                    var t = []
                      , r = e.keyframes;
                    for (var a in r && (e = P(function(n) {
                        for (var e = v(y(n.map((function(n) {
                            return Object.keys(n)
                        }
                        ))), (function(n) {
                            return u.key(n)
                        }
                        )).reduce((function(n, e) {
                            return n.indexOf(e) < 0 && n.push(e),
                            n
                        }
                        ), []), t = {}, r = function(r) {
                            var a = e[r];
                            t[a] = n.map((function(n) {
                                var e = {};
                                for (var t in n)
                                    u.key(t) ? t == a && (e.value = n[t]) : e[t] = n[t];
                                return e
                            }
                            ))
                        }, a = 0; a < e.length; a++)
                            r(a);
                        return t
                    }(r), e)),
                    e)
                        u.key(a) && t.push({
                            name: a,
                            tweens: Y(e[a], n)
                        });
                    return t
                }
                function R(n, e) {
                    var t;
                    return n.tweens.map((function(r) {
                        var a = function(n, e) {
                            var t = {};
                            for (var r in n) {
                                var a = O(n[r], e);
                                u.arr(a) && 1 === (a = a.map((function(n) {
                                    return O(n, e)
                                }
                                ))).length && (a = a[0]),
                                t[r] = a
                            }
                            return t.duration = parseFloat(t.duration),
                            t.delay = parseFloat(t.delay),
                            t
                        }(r, e)
                          , i = a.value
                          , o = u.arr(i) ? i[1] : i
                          , c = C(o)
                          , s = E(e.target, n.name, c, e)
                          , l = t ? t.to.original : s
                          , f = u.arr(i) ? i[0] : l
                          , d = C(f) || C(s)
                          , p = c || d;
                        return u.und(o) && (o = l),
                        a.from = V(f, p),
                        a.to = V(S(o, f), p),
                        a.start = t ? t.end : 0,
                        a.end = a.start + a.delay + a.duration + a.endDelay,
                        a.easing = g(a.easing, a.duration),
                        a.isPath = u.pth(i),
                        a.isPathTargetInsideSVG = a.isPath && u.svg(e.target),
                        a.isColor = u.col(a.from.original),
                        a.isColor && (a.round = 1),
                        t = a,
                        a
                    }
                    ))
                }
                var Z = {
                    css: function(n, e, t) {
                        return n.style[e] = t
                    },
                    attribute: function(n, e, t) {
                        return n.setAttribute(e, t)
                    },
                    object: function(n, e, t) {
                        return n[e] = t
                    },
                    transform: function(n, e, t, r, a) {
                        if (r.list.set(e, t),
                        e === r.last || a) {
                            var i = "";
                            r.list.forEach((function(n, e) {
                                i += e + "(" + n + ") "
                            }
                            )),
                            n.style.transform = i
                        }
                    }
                };
                function z(n, e) {
                    X(n).forEach((function(n) {
                        for (var t in e) {
                            var r = O(e[t], n)
                              , a = n.target
                              , i = C(r)
                              , o = E(a, t, i, n)
                              , u = S(N(r, i || C(o)), o)
                              , c = A(a, t);
                            Z[c](a, t, u, n.transforms, !0)
                        }
                    }
                    ))
                }
                function Q(n, e) {
                    return v(y(n.map((function(n) {
                        return e.map((function(e) {
                            return function(n, e) {
                                var t = A(n.target, e.name);
                                if (t) {
                                    var r = R(e, n)
                                      , a = r[r.length - 1];
                                    return {
                                        type: t,
                                        property: e.name,
                                        animatable: n,
                                        tweens: r,
                                        duration: a.end,
                                        delay: r[0].delay,
                                        endDelay: a.endDelay
                                    }
                                }
                            }(n, e)
                        }
                        ))
                    }
                    ))), (function(n) {
                        return !u.und(n)
                    }
                    ))
                }
                function _(n, e) {
                    var t = n.length
                      , r = function(n) {
                        return n.timelineOffset ? n.timelineOffset : 0
                    }
                      , a = {};
                    return a.duration = t ? Math.max.apply(Math, n.map((function(n) {
                        return r(n) + n.duration
                    }
                    ))) : e.duration,
                    a.delay = t ? Math.min.apply(Math, n.map((function(n) {
                        return r(n) + n.delay
                    }
                    ))) : e.delay,
                    a.endDelay = t ? a.duration - Math.max.apply(Math, n.map((function(n) {
                        return r(n) + n.duration - n.endDelay
                    }
                    ))) : e.endDelay,
                    a
                }
                var J = 0
                  , K = []
                  , U = function() {
                    var n;
                    function e(t) {
                        for (var r = K.length, a = 0; a < r; ) {
                            var i = K[a];
                            i.paused ? (K.splice(a, 1),
                            r--) : (i.tick(t),
                            a++)
                        }
                        n = a > 0 ? requestAnimationFrame(e) : void 0
                    }
                    return "undefined" != typeof document && document.addEventListener("visibilitychange", (function() {
                        en.suspendWhenDocumentHidden && (nn() ? n = cancelAnimationFrame(n) : (K.forEach((function(n) {
                            return n._onDocumentVisibility()
                        }
                        )),
                        U()))
                    }
                    )),
                    function() {
                        n || nn() && en.suspendWhenDocumentHidden || !(K.length > 0) || (n = requestAnimationFrame(e))
                    }
                }();
                function nn() {
                    return !!document && document.hidden
                }
                function en(t) {
                    void 0 === t && (t = {});
                    var r, i = 0, o = 0, u = 0, c = 0, s = null;
                    function l(n) {
                        var e = window.Promise && new Promise((function(n) {
                            return s = n
                        }
                        ));
                        return n.finished = e,
                        e
                    }
                    var f, d, p, h, g, m, y, b, w = (d = M(n, f = t),
                    h = G(p = M(e, f), f),
                    y = _(m = Q(g = X(f.targets), h), p),
                    b = J,
                    J++,
                    P(d, {
                        id: b,
                        children: [],
                        animatables: g,
                        animations: m,
                        duration: y.duration,
                        delay: y.delay,
                        endDelay: y.endDelay
                    }));
                    function x() {
                        var n = w.direction;
                        "alternate" !== n && (w.direction = "normal" !== n ? "normal" : "reverse"),
                        w.reversed = !w.reversed,
                        r.forEach((function(n) {
                            return n.reversed = w.reversed
                        }
                        ))
                    }
                    function k(n) {
                        return w.reversed ? w.duration - n : n
                    }
                    function C() {
                        i = 0,
                        o = k(w.currentTime) * (1 / en.speed)
                    }
                    function O(n, e) {
                        e && e.seek(n - e.timelineOffset)
                    }
                    function I(n) {
                        for (var e = 0, t = w.animations, r = t.length; e < r; ) {
                            var i = t[e]
                              , o = i.animatable
                              , u = i.tweens
                              , c = u.length - 1
                              , s = u[c];
                            c && (s = v(u, (function(e) {
                                return n < e.end
                            }
                            ))[0] || s);
                            for (var l = a(n - s.start - s.delay, 0, s.duration) / s.duration, f = isNaN(l) ? 1 : s.easing(l), d = s.to.strings, p = s.round, h = [], g = s.to.numbers.length, m = void 0, y = 0; y < g; y++) {
                                var b = void 0
                                  , x = s.to.numbers[y]
                                  , M = s.from.numbers[y] || 0;
                                b = s.isPath ? H(s.value, f * x, s.isPathTargetInsideSVG) : M + f * (x - M),
                                p && (s.isColor && y > 2 || (b = Math.round(b * p) / p)),
                                h.push(b)
                            }
                            var P = d.length;
                            if (P) {
                                m = d[0];
                                for (var k = 0; k < P; k++) {
                                    d[k];
                                    var C = d[k + 1]
                                      , O = h[k];
                                    isNaN(O) || (m += C ? O + C : O + " ")
                                }
                            } else
                                m = h[0];
                            Z[i.type](o.target, i.property, m, o.transforms),
                            i.currentValue = m,
                            e++
                        }
                    }
                    function B(n) {
                        w[n] && !w.passThrough && w[n](w)
                    }
                    function F(n) {
                        var e = w.duration
                          , t = w.delay
                          , f = e - w.endDelay
                          , d = k(n);
                        w.progress = a(d / e * 100, 0, 100),
                        w.reversePlayback = d < w.currentTime,
                        r && function(n) {
                            if (w.reversePlayback)
                                for (var e = c; e--; )
                                    O(n, r[e]);
                            else
                                for (var t = 0; t < c; t++)
                                    O(n, r[t])
                        }(d),
                        !w.began && w.currentTime > 0 && (w.began = !0,
                        B("begin")),
                        !w.loopBegan && w.currentTime > 0 && (w.loopBegan = !0,
                        B("loopBegin")),
                        d <= t && 0 !== w.currentTime && I(0),
                        (d >= f && w.currentTime !== e || !e) && I(e),
                        d > t && d < f ? (w.changeBegan || (w.changeBegan = !0,
                        w.changeCompleted = !1,
                        B("changeBegin")),
                        B("change"),
                        I(d)) : w.changeBegan && (w.changeCompleted = !0,
                        w.changeBegan = !1,
                        B("changeComplete")),
                        w.currentTime = a(d, 0, e),
                        w.began && B("update"),
                        n >= e && (o = 0,
                        w.remaining && !0 !== w.remaining && w.remaining--,
                        w.remaining ? (i = u,
                        B("loopComplete"),
                        w.loopBegan = !1,
                        "alternate" === w.direction && x()) : (w.paused = !0,
                        w.completed || (w.completed = !0,
                        B("loopComplete"),
                        B("complete"),
                        !w.passThrough && "Promise"in window && (s(),
                        l(w)))))
                    }
                    return l(w),
                    w.reset = function() {
                        var n = w.direction;
                        w.passThrough = !1,
                        w.currentTime = 0,
                        w.progress = 0,
                        w.paused = !0,
                        w.began = !1,
                        w.loopBegan = !1,
                        w.changeBegan = !1,
                        w.completed = !1,
                        w.changeCompleted = !1,
                        w.reversePlayback = !1,
                        w.reversed = "reverse" === n,
                        w.remaining = w.loop,
                        r = w.children;
                        for (var e = c = r.length; e--; )
                            w.children[e].reset();
                        (w.reversed && !0 !== w.loop || "alternate" === n && 1 === w.loop) && w.remaining++,
                        I(w.reversed ? w.duration : 0)
                    }
                    ,
                    w._onDocumentVisibility = C,
                    w.set = function(n, e) {
                        return z(n, e),
                        w
                    }
                    ,
                    w.tick = function(n) {
                        u = n,
                        i || (i = u),
                        F((u + (o - i)) * en.speed)
                    }
                    ,
                    w.seek = function(n) {
                        F(k(n))
                    }
                    ,
                    w.pause = function() {
                        w.paused = !0,
                        C()
                    }
                    ,
                    w.play = function() {
                        w.paused && (w.completed && w.reset(),
                        w.paused = !1,
                        K.push(w),
                        C(),
                        U())
                    }
                    ,
                    w.reverse = function() {
                        x(),
                        w.completed = !w.reversed,
                        C()
                    }
                    ,
                    w.restart = function() {
                        w.reset(),
                        w.play()
                    }
                    ,
                    w.remove = function(n) {
                        rn($(n), w)
                    }
                    ,
                    w.reset(),
                    w.autoplay && w.play(),
                    w
                }
                function tn(n, e) {
                    for (var t = e.length; t--; )
                        w(n, e[t].animatable.target) && e.splice(t, 1)
                }
                function rn(n, e) {
                    var t = e.animations
                      , r = e.children;
                    tn(n, t);
                    for (var a = r.length; a--; ) {
                        var i = r[a]
                          , o = i.animations;
                        tn(n, o),
                        o.length || i.children.length || r.splice(a, 1)
                    }
                    t.length || r.length || e.pause()
                }
                return en.version = "3.2.1",
                en.speed = 1,
                en.suspendWhenDocumentHidden = !0,
                en.running = K,
                en.remove = function(n) {
                    for (var e = $(n), t = K.length; t--; )
                        rn(e, K[t])
                }
                ,
                en.get = E,
                en.set = z,
                en.convertPx = B,
                en.path = function(n, e) {
                    var t = u.str(n) ? m(n)[0] : n
                      , r = e || 100;
                    return function(n) {
                        return {
                            property: n,
                            el: t,
                            svg: q(t),
                            totalLength: j(t) * (r / 100)
                        }
                    }
                }
                ,
                en.setDashoffset = function(n) {
                    var e = j(n);
                    return n.setAttribute("stroke-dasharray", e),
                    e
                }
                ,
                en.stagger = function(n, e) {
                    void 0 === e && (e = {});
                    var t = e.direction || "normal"
                      , r = e.easing ? g(e.easing) : null
                      , a = e.grid
                      , i = e.axis
                      , o = e.from || 0
                      , c = "first" === o
                      , s = "center" === o
                      , l = "last" === o
                      , f = u.arr(n)
                      , d = f ? parseFloat(n[0]) : parseFloat(n)
                      , p = f ? parseFloat(n[1]) : 0
                      , h = C(f ? n[1] : n) || 0
                      , m = e.start || 0 + (f ? d : 0)
                      , v = []
                      , y = 0;
                    return function(n, e, u) {
                        if (c && (o = 0),
                        s && (o = (u - 1) / 2),
                        l && (o = u - 1),
                        !v.length) {
                            for (var g = 0; g < u; g++) {
                                if (a) {
                                    var b = s ? (a[0] - 1) / 2 : o % a[0]
                                      , w = s ? (a[1] - 1) / 2 : Math.floor(o / a[0])
                                      , x = b - g % a[0]
                                      , M = w - Math.floor(g / a[0])
                                      , P = Math.sqrt(x * x + M * M);
                                    "x" === i && (P = -x),
                                    "y" === i && (P = -M),
                                    v.push(P)
                                } else
                                    v.push(Math.abs(o - g));
                                y = Math.max.apply(Math, v)
                            }
                            r && (v = v.map((function(n) {
                                return r(n / y) * y
                            }
                            ))),
                            "reverse" === t && (v = v.map((function(n) {
                                return i ? n < 0 ? -1 * n : -n : Math.abs(y - n)
                            }
                            )))
                        }
                        return m + (f ? (p - d) / y : d) * (Math.round(100 * v[e]) / 100) + h
                    }
                }
                ,
                en.timeline = function(n) {
                    void 0 === n && (n = {});
                    var t = en(n);
                    return t.duration = 0,
                    t.add = function(r, a) {
                        var i = K.indexOf(t)
                          , o = t.children;
                        function c(n) {
                            n.passThrough = !0
                        }
                        i > -1 && K.splice(i, 1);
                        for (var s = 0; s < o.length; s++)
                            c(o[s]);
                        var l = P(r, M(e, n));
                        l.targets = l.targets || n.targets;
                        var f = t.duration;
                        l.autoplay = !1,
                        l.direction = t.direction,
                        l.timelineOffset = u.und(a) ? f : S(a, f),
                        c(t),
                        t.seek(l.timelineOffset);
                        var d = en(l);
                        c(d),
                        o.push(d);
                        var p = _(o, n);
                        return t.delay = p.delay,
                        t.endDelay = p.endDelay,
                        t.duration = p.duration,
                        t.seek(0),
                        t.reset(),
                        t.autoplay && t.play(),
                        t
                    }
                    ,
                    t
                }
                ,
                en.easing = g,
                en.penner = h,
                en.random = function(n, e) {
                    return Math.floor(Math.random() * (e - n + 1)) + n
                }
                ,
                en
            }
            ,
            "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : n.anime = e();
            var n, e
        }();
        var e = n.getContext("2d")
          , t = 30
          , r = 0
          , a = 0
          , i = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"]
          , o = function(n, e, t) {
            let r;
            return function() {
                const a = this
                  , i = arguments
                  , o = function() {
                    r = null,
                    t || n.apply(a, i)
                }
                  , u = t && !r;
                clearTimeout(r),
                r = setTimeout(o, e),
                u && n.apply(a, i)
            }
        }((function() {
            n.width = window.innerWidth,
            n.height = window.innerHeight,
            n.style.width = window.innerWidth + "px",
            n.style.height = window.innerHeight + "px",
            n.getContext("2d").scale(1, 1)
        }
        ), 500)
          , u = anime({
            duration: 1 / 0,
            update: function() {
                e.clearRect(0, 0, n.width, n.height)
            }
        });
        document.addEventListener("mousedown", (function(i) {
            "sidebar" !== i.target.id && "toggle-sidebar" !== i.target.id && "A" !== i.target.nodeName && "IMG" !== i.target.nodeName && (u.play(),
            function(e) {
                r = (e.clientX || e.touches[0].clientX) - n.getBoundingClientRect().left,
                a = e.clientY || e.touches[0].clientY - n.getBoundingClientRect().top
            }(i),
            function(n, r) {
                for (var a = function(n, t) {
                    var r = {};
                    return r.x = n,
                    r.y = t,
                    r.color = "#F00",
                    r.radius = .1,
                    r.alpha = .5,
                    r.lineWidth = 6,
                    r.draw = function() {
                        e.globalAlpha = r.alpha,
                        e.beginPath(),
                        e.arc(r.x, r.y, r.radius, 0, 2 * Math.PI, !0),
                        e.lineWidth = r.lineWidth,
                        e.strokeStyle = r.color,
                        e.stroke(),
                        e.globalAlpha = 1
                    }
                    ,
                    r
                }(n, r), i = [], o = 0; o < t; o++)
                    i.push(c(n, r));
                anime.timeline().add({
                    targets: i,
                    x: function(n) {
                        return n.endPos.x
                    },
                    y: function(n) {
                        return n.endPos.y
                    },
                    radius: .1,
                    duration: anime.random(1200, 1800),
                    easing: "easeOutExpo",
                    update: s
                }).add({
                    targets: a,
                    radius: anime.random(80, 160),
                    lineWidth: 0,
                    alpha: {
                        value: 0,
                        easing: "linear",
                        duration: anime.random(600, 800)
                    },
                    duration: anime.random(1200, 1800),
                    easing: "easeOutExpo",
                    update: s
                }, 0)
            }(r, a))
        }
        ), !1),
        o(),
        window.addEventListener("resize", o, !1)
    }
    function c(n, t) {
        var r = {};
        return r.x = n,
        r.y = t,
        r.color = i[anime.random(0, i.length - 1)],
        r.radius = anime.random(16, 32),
        r.endPos = function(n) {
            var e = anime.random(0, 360) * Math.PI / 180
              , t = anime.random(50, 180)
              , r = [-1, 1][anime.random(0, 1)] * t;
            return {
                x: n.x + r * Math.cos(e),
                y: n.y + r * Math.sin(e)
            }
        }(r),
        r.draw = function() {
            e.beginPath(),
            e.arc(r.x, r.y, r.radius, 0, 2 * Math.PI, !0),
            e.fillStyle = r.color,
            e.fill()
        }
        ,
        r
    }
    function s(n) {
        for (var e = 0; e < n.animatables.length; e++)
            n.animatables[e].target.draw()
    }
}();
