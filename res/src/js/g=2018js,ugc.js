/* Minify: at least one missing file. See http://code.google.com/p/minify/wiki/Debugging */

;/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e, t) {
    function _(e) {
        var t = M[e] = {};
        return v.each(e.split(y), function(e, n) {
            t[n] = !0
        }),
        t
    }
    function H(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r
                } catch (s) {}
                v.data(e, n, r)
            } else
                r = t
        }
        return r
    }
    function B(e) {
        var t;
        for (t in e) {
            if (t === "data" && v.isEmptyObject(e[t]))
                continue;
            if (t !== "toJSON")
                return !1
        }
        return !0
    }
    function et() {
        return !1
    }
    function tt() {
        return !0
    }
    function ut(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }
    function at(e, t) {
        do
            e = e[t];
        while (e && e.nodeType !== 1);return e
    }
    function ft(e, t, n) {
        t = t || 0;
        if (v.isFunction(t))
            return v.grep(e, function(e, r) {
                var i = !!t.call(e, r, e);
                return i === n
            });
        if (t.nodeType)
            return v.grep(e, function(e, r) {
                return e === t === n
            });
        if (typeof t == "string") {
            var r = v.grep(e, function(e) {
                return e.nodeType === 1
            });
            if (it.test(t))
                return v.filter(t, r, !n);
            t = v.filter(t, r)
        }
        return v.grep(e, function(e, r) {
            return v.inArray(e, t) >= 0 === n
        })
    }
    function lt(e) {
        var t = ct.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length)
                n.createElement(t.pop());
        return n
    }
    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function At(e, t) {
        if (t.nodeType !== 1 || !v.hasData(e))
            return;
        var n, r, i, s = v._data(e), o = v._data(t, s), u = s.events;
        if (u) {
            delete o.handle,
            o.events = {};
            for (n in u)
                for (r = 0,
                i = u[n].length; r < i; r++)
                    v.event.add(t, n, u[n][r])
        }
        o.data && (o.data = v.extend({}, o.data))
    }
    function Ot(e, t) {
        var n;
        if (t.nodeType !== 1)
            return;
        t.clearAttributes && t.clearAttributes(),
        t.mergeAttributes && t.mergeAttributes(e),
        n = t.nodeName.toLowerCase(),
        n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML),
        v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
        t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text),
        t.removeAttribute(v.expando)
    }
    function Mt(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }
    function _t(e) {
        Et.test(e.type) && (e.defaultChecked = e.checked)
    }
    function Qt(e, t) {
        if (t in e)
            return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1)
          , r = t
          , i = Jt.length;
        while (i--) {
            t = Jt[i] + n;
            if (t in e)
                return t
        }
        return r
    }
    function Gt(e, t) {
        return e = t || e,
        v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e)
    }
    function Yt(e, t) {
        var n, r, i = [], s = 0, o = e.length;
        for (; s < o; s++) {
            n = e[s];
            if (!n.style)
                continue;
            i[s] = v._data(n, "olddisplay"),
            t ? (!i[s] && n.style.display === "none" && (n.style.display = ""),
            n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"),
            !i[s] && r !== "none" && v._data(n, "olddisplay", r))
        }
        for (s = 0; s < o; s++) {
            n = e[s];
            if (!n.style)
                continue;
            if (!t || n.style.display === "none" || n.style.display === "")
                n.style.display = t ? i[s] || "" : "none"
        }
        return e
    }
    function Zt(e, t, n) {
        var r = Rt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function en(e, t, n, r) {
        var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0
          , s = 0;
        for (; i < 4; i += 2)
            n === "margin" && (s += v.css(e, n + $t[i], !0)),
            r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0),
            n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0,
            n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
        return s
    }
    function tn(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight
          , i = !0
          , s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
        if (r <= 0 || r == null) {
            r = Dt(e, t);
            if (r < 0 || r == null)
                r = e.style[t];
            if (Ut.test(r))
                return r;
            i = s && (v.support.boxSizingReliable || r === e.style[t]),
            r = parseFloat(r) || 0
        }
        return r + en(e, t, n || (s ? "border" : "content"), i) + "px"
    }
    function nn(e) {
        if (Wt[e])
            return Wt[e];
        var t = v("<" + e + ">").appendTo(i.body)
          , n = t.css("display");
        t.remove();
        if (n === "none" || n === "") {
            Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!Ht || !Pt.createElement)
                Ht = (Pt.contentWindow || Pt.contentDocument).document,
                Ht.write("<!doctype html><html><body>"),
                Ht.close();
            t = Ht.body.appendChild(Ht.createElement(e)),
            n = Dt(t, "display"),
            i.body.removeChild(Pt)
        }
        return Wt[e] = n,
        n
    }
    function fn(e, t, n, r) {
        var i;
        if (v.isArray(t))
            v.each(t, function(t, i) {
                n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
            });
        else if (!n && v.type(t) === "object")
            for (i in t)
                fn(e + "[" + i + "]", t[i], n, r);
        else
            r(e, t)
    }
    function Cn(e) {
        return function(t, n) {
            typeof t != "string" && (n = t,
            t = "*");
            var r, i, s, o = t.toLowerCase().split(y), u = 0, a = o.length;
            if (v.isFunction(n))
                for (; u < a; u++)
                    r = o[u],
                    s = /^\+/.test(r),
                    s && (r = r.substr(1) || "*"),
                    i = e[r] = e[r] || [],
                    i[s ? "unshift" : "push"](n)
        }
    }
    function kn(e, n, r, i, s, o) {
        s = s || n.dataTypes[0],
        o = o || {},
        o[s] = !0;
        var u, a = e[s], f = 0, l = a ? a.length : 0, c = e === Sn;
        for (; f < l && (c || !u); f++)
            u = a[f](n, r, i),
            typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u),
            u = kn(e, n, r, i, u, o)));
        return (c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)),
        u
    }
    function Ln(e, n) {
        var r, i, s = v.ajaxSettings.flatOptions || {};
        for (r in n)
            n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && v.extend(!0, e, i)
    }
    function An(e, n, r) {
        var i, s, o, u, a = e.contents, f = e.dataTypes, l = e.responseFields;
        for (s in l)
            s in r && (n[l[s]] = r[s]);
        while (f[0] === "*")
            f.shift(),
            i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i)
            for (s in a)
                if (a[s] && a[s].test(i)) {
                    f.unshift(s);
                    break
                }
        if (f[0]in r)
            o = f[0];
        else {
            for (s in r) {
                if (!f[0] || e.converters[s + " " + f[0]]) {
                    o = s;
                    break
                }
                u || (u = s)
            }
            o = o || u
        }
        if (o)
            return o !== f[0] && f.unshift(o),
            r[o]
    }
    function On(e, t) {
        var n, r, i, s, o = e.dataTypes.slice(), u = o[0], a = {}, f = 0;
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (o[1])
            for (n in e.converters)
                a[n.toLowerCase()] = e.converters[n];
        for (; i = o[++f]; )
            if (i !== "*") {
                if (u !== "*" && u !== i) {
                    n = a[u + " " + i] || a["* " + i];
                    if (!n)
                        for (r in a) {
                            s = r.split(" ");
                            if (s[1] === i) {
                                n = a[u + " " + s[0]] || a["* " + s[0]];
                                if (n) {
                                    n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0],
                                    o.splice(f--, 0, i));
                                    break
                                }
                            }
                        }
                    if (n !== !0)
                        if (n && e["throws"])
                            t = n(t);
                        else
                            try {
                                t = n(t)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: n ? l : "No conversion from " + u + " to " + i
                                }
                            }
                }
                u = i
            }
        return {
            state: "success",
            data: t
        }
    }
    function Fn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function In() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function $n() {
        return setTimeout(function() {
            qn = t
        }, 0),
        qn = v.now()
    }
    function Jn(e, t) {
        v.each(t, function(t, n) {
            var r = (Vn[t] || []).concat(Vn["*"])
              , i = 0
              , s = r.length;
            for (; i < s; i++)
                if (r[i].call(e, t, n))
                    return
        })
    }
    function Kn(e, t, n) {
        var r, i = 0, s = 0, o = Xn.length, u = v.Deferred().always(function() {
            delete a.elem
        }), a = function() {
            var t = qn || $n()
              , n = Math.max(0, f.startTime + f.duration - t)
              , r = n / f.duration || 0
              , i = 1 - r
              , s = 0
              , o = f.tweens.length;
            for (; s < o; s++)
                f.tweens[s].run(i);
            return u.notifyWith(e, [f, i, n]),
            i < 1 && o ? n : (u.resolveWith(e, [f]),
            !1)
        }, f = u.promise({
            elem: e,
            props: v.extend({}, t),
            opts: v.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: qn || $n(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n, r) {
                var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , r = t ? f.tweens.length : 0;
                for (; n < r; n++)
                    f.tweens[n].run(1);
                return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]),
                this
            }
        }), l = f.props;
        Qn(l, f.opts.specialEasing);
        for (; i < o; i++) {
            r = Xn[i].call(f, e, l, f.opts);
            if (r)
                return r
        }
        return Jn(f, l),
        v.isFunction(f.opts.start) && f.opts.start.call(e, f),
        v.fx.timer(v.extend(a, {
            anim: f,
            queue: f.opts.queue,
            elem: e
        })),
        f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    function Qn(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = v.camelCase(n),
            i = t[r],
            s = e[n],
            v.isArray(s) && (i = s[1],
            s = e[n] = s[0]),
            n !== r && (e[r] = s,
            delete e[n]),
            o = v.cssHooks[r];
            if (o && "expand"in o) {
                s = o.expand(s),
                delete e[r];
                for (n in s)
                    n in e || (e[n] = s[n],
                    t[n] = i)
            } else
                t[r] = i
        }
    }
    function Gn(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this, p = e.style, d = {}, m = [], g = e.nodeType && Gt(e);
        n.queue || (l = v._queueHooks(e, "fx"),
        l.unqueued == null && (l.unqueued = 0,
        c = l.empty.fire,
        l.empty.fire = function() {
            l.unqueued || c()
        }
        ),
        l.unqueued++,
        h.always(function() {
            h.always(function() {
                l.unqueued--,
                v.queue(e, "fx").length || l.empty.fire()
            })
        })),
        e.nodeType === 1 && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
        v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)),
        n.overflow && (p.overflow = "hidden",
        v.support.shrinkWrapBlocks || h.done(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            s = t[r];
            if (Un.exec(s)) {
                delete t[r],
                a = a || s === "toggle";
                if (s === (g ? "hide" : "show"))
                    continue;
                m.push(r)
            }
        }
        o = m.length;
        if (o) {
            u = v._data(e, "fxshow") || v._data(e, "fxshow", {}),
            "hidden"in u && (g = u.hidden),
            a && (u.hidden = !g),
            g ? v(e).show() : h.done(function() {
                v(e).hide()
            }),
            h.done(function() {
                var t;
                v.removeData(e, "fxshow", !0);
                for (t in d)
                    v.style(e, t, d[t])
            });
            for (r = 0; r < o; r++)
                i = m[r],
                f = h.createTween(i, g ? u[i] : 0),
                d[i] = u[i] || v.style(e, i),
                i in u || (u[i] = f.start,
                g && (f.end = f.start,
                f.start = i === "width" || i === "height" ? 1 : 0))
        }
    }
    function Yn(e, t, n, r, i) {
        return new Yn.prototype.init(e,t,n,r,i)
    }
    function Zn(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t)
            n = $t[i],
            r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function tr(e) {
        return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = e.document, s = e.location, o = e.navigator, u = e.jQuery, a = e.$, f = Array.prototype.push, l = Array.prototype.slice, c = Array.prototype.indexOf, h = Object.prototype.toString, p = Object.prototype.hasOwnProperty, d = String.prototype.trim, v = function(e, t) {
        return new v.fn.init(e,t,n)
    }, m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, g = /\S/, y = /\s+/, b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, S = /^[\],:{}\s]*$/, x = /(?:^|:|,)(?:\s*\[)+/g, T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, C = /^-ms-/, k = /-([\da-z])/gi, L = function(e, t) {
        return (t + "").toUpperCase()
    }, A = function() {
        i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1),
        v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A),
        v.ready())
    }, O = {};
    v.fn = v.prototype = {
        constructor: v,
        init: function(e, n, r) {
            var s, o, u, a;
            if (!e)
                return this;
            if (e.nodeType)
                return this.context = this[0] = e,
                this.length = 1,
                this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);
                if (s && (s[1] || !n)) {
                    if (s[1])
                        return n = n instanceof v ? n[0] : n,
                        a = n && n.nodeType ? n.ownerDocument || n : i,
                        e = v.parseHTML(s[1], a, !0),
                        E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0),
                        v.merge(this, e);
                    o = i.getElementById(s[2]);
                    if (o && o.parentNode) {
                        if (o.id !== s[2])
                            return r.find(e);
                        this.length = 1,
                        this[0] = o
                    }
                    return this.context = i,
                    this.selector = e,
                    this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector,
            this.context = e.context),
            v.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return l.call(this)
        },
        get: function(e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function(e, t, n) {
            var r = v.merge(this.constructor(), e);
            return r.prevObject = this,
            r.context = this.context,
            t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"),
            r
        },
        each: function(e, t) {
            return v.each(this, e, t)
        },
        ready: function(e) {
            return v.ready.promise().done(e),
            this
        },
        eq: function(e) {
            return e = +e,
            e === -1 ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","))
        },
        map: function(e) {
            return this.pushStack(v.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: [].sort,
        splice: [].splice
    },
    v.fn.init.prototype = v.fn,
    v.extend = v.fn.extend = function() {
        var e, n, r, i, s, o, u = arguments[0] || {}, a = 1, f = arguments.length, l = !1;
        typeof u == "boolean" && (l = u,
        u = arguments[1] || {},
        a = 2),
        typeof u != "object" && !v.isFunction(u) && (u = {}),
        f === a && (u = this,
        --a);
        for (; a < f; a++)
            if ((e = arguments[a]) != null)
                for (n in e) {
                    r = u[n],
                    i = e[n];
                    if (u === i)
                        continue;
                    l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1,
                    o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {},
                    u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i)
                }
        return u
    }
    ,
    v.extend({
        noConflict: function(t) {
            return e.$ === v && (e.$ = a),
            t && e.jQuery === v && (e.jQuery = u),
            v
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? v.readyWait++ : v.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? --v.readyWait : v.isReady)
                return;
            if (!i.body)
                return setTimeout(v.ready, 1);
            v.isReady = !0;
            if (e !== !0 && --v.readyWait > 0)
                return;
            r.resolveWith(i, [v]),
            v.fn.trigger && v(i).trigger("ready").off("ready")
        },
        isFunction: function(e) {
            return v.type(e) === "function"
        },
        isArray: Array.isArray || function(e) {
            return v.type(e) === "array"
        }
        ,
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return e == null ? String(e) : O[h.call(e)] || "object"
        },
        isPlainObject: function(e) {
            if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e))
                return !1;
            try {
                if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e)
                ;
            return r === t || p.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            var r;
            return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t,
            t = 0),
            t = t || i,
            (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []),
            v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)))
        },
        parseJSON: function(t) {
            if (!t || typeof t != "string")
                return null;
            t = v.trim(t);
            if (e.JSON && e.JSON.parse)
                return e.JSON.parse(t);
            if (S.test(t.replace(T, "@").replace(N, "]").replace(x, "")))
                return (new Function("return " + t))();
            v.error("Invalid JSON: " + t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || typeof n != "string")
                return null;
            try {
                e.DOMParser ? (i = new DOMParser,
                r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
                r.async = "false",
                r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && g.test(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(C, "ms-").replace(k, L)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, n, r) {
            var i, s = 0, o = e.length, u = o === t || v.isFunction(e);
            if (r) {
                if (u) {
                    for (i in e)
                        if (n.apply(e[i], r) === !1)
                            break
                } else
                    for (; s < o; )
                        if (n.apply(e[s++], r) === !1)
                            break
            } else if (u) {
                for (i in e)
                    if (n.call(e[i], i, e[i]) === !1)
                        break
            } else
                for (; s < o; )
                    if (n.call(e[s], s, e[s++]) === !1)
                        break;
            return e
        },
        trim: d && !d.call("\ufeff\u00a0") ? function(e) {
            return e == null ? "" : d.call(e)
        }
        : function(e) {
            return e == null ? "" : (e + "").replace(b, "")
        }
        ,
        makeArray: function(e, t) {
            var n, r = t || [];
            return e != null && (n = v.type(e),
            e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)),
            r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (c)
                    return c.call(t, e, n);
                r = t.length,
                n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length
              , i = e.length
              , s = 0;
            if (typeof r == "number")
                for (; s < r; s++)
                    e[i++] = n[s];
            else
                while (n[s] !== t)
                    e[i++] = n[s++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [], s = 0, o = e.length;
            n = !!n;
            for (; s < o; s++)
                r = !!t(e[s], s),
                n !== r && i.push(e[s]);
            return i
        },
        map: function(e, n, r) {
            var i, s, o = [], u = 0, a = e.length, f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
            if (f)
                for (; u < a; u++)
                    i = n(e[u], u, r),
                    i != null && (o[o.length] = i);
            else
                for (s in e)
                    i = n(e[s], s, r),
                    i != null && (o[o.length] = i);
            return o.concat.apply([], o)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, s;
            return typeof n == "string" && (r = e[n],
            n = e,
            e = r),
            v.isFunction(e) ? (i = l.call(arguments, 2),
            s = function() {
                return e.apply(n, i.concat(l.call(arguments)))
            }
            ,
            s.guid = e.guid = e.guid || v.guid++,
            s) : t
        },
        access: function(e, n, r, i, s, o, u) {
            var a, f = r == null, l = 0, c = e.length;
            if (r && typeof r == "object") {
                for (l in r)
                    v.access(e, n, l, r[l], 1, o, i);
                s = 1
            } else if (i !== t) {
                a = u === t && v.isFunction(i),
                f && (a ? (a = n,
                n = function(e, t, n) {
                    return a.call(v(e), n)
                }
                ) : (n.call(e, i),
                n = null));
                if (n)
                    for (; l < c; l++)
                        n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
                s = 1
            }
            return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
        },
        now: function() {
            return (new Date).getTime()
        }
    }),
    v.ready.promise = function(t) {
        if (!r) {
            r = v.Deferred();
            if (i.readyState === "complete")
                setTimeout(v.ready, 1);
            else if (i.addEventListener)
                i.addEventListener("DOMContentLoaded", A, !1),
                e.addEventListener("load", v.ready, !1);
            else {
                i.attachEvent("onreadystatechange", A),
                e.attachEvent("onload", v.ready);
                var n = !1;
                try {
                    n = e.frameElement == null && i.documentElement
                } catch (s) {}
                n && n.doScroll && function o() {
                    if (!v.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        v.ready()
                    }
                }()
            }
        }
        return r.promise(t)
    }
    ,
    v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        O["[object " + t + "]"] = t.toLowerCase()
    }),
    n = v(i);
    var M = {};
    v.Callbacks = function(e) {
        e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
        var n, r, i, s, o, u, a = [], f = !e.once && [], l = function(t) {
            n = e.memory && t,
            r = !0,
            u = s || 0,
            s = 0,
            o = a.length,
            i = !0;
            for (; a && u < o; u++)
                if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
            i = !1,
            a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
        }, c = {
            add: function() {
                if (a) {
                    var t = a.length;
                    (function r(t) {
                        v.each(t, function(t, n) {
                            var i = v.type(n);
                            i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n)
                        })
                    }
                    )(arguments),
                    i ? o = a.length : n && (s = t,
                    l(n))
                }
                return this
            },
            remove: function() {
                return a && v.each(arguments, function(e, t) {
                    var n;
                    while ((n = v.inArray(t, a, n)) > -1)
                        a.splice(n, 1),
                        i && (n <= o && o--,
                        n <= u && u--)
                }),
                this
            },
            has: function(e) {
                return v.inArray(e, a) > -1
            },
            empty: function() {
                return a = [],
                this
            },
            disable: function() {
                return a = f = n = t,
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return f = t,
                n || c.disable(),
                this
            },
            locked: function() {
                return !f
            },
            fireWith: function(e, t) {
                return t = t || [],
                t = [e, t.slice ? t.slice() : t],
                a && (!r || f) && (i ? f.push(t) : l(t)),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return c
    }
    ,
    v.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", v.Callbacks("once memory"), "resolved"], ["reject", "fail", v.Callbacks("once memory"), "rejected"], ["notify", "progress", v.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return v.Deferred(function(n) {
                        v.each(t, function(t, r) {
                            var s = r[0]
                              , o = e[t];
                            i[r[1]](v.isFunction(o) ? function() {
                                var e = o.apply(this, arguments);
                                e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
                            }
                            : n[s])
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return e != null ? v.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            v.each(t, function(e, s) {
                var o = s[2]
                  , u = s[3];
                r[s[1]] = o.add,
                u && o.add(function() {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock),
                i[s[0]] = o.fire,
                i[s[0] + "With"] = o.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t = 0, n = l.call(arguments), r = n.length, i = r !== 1 || e && v.isFunction(e.promise) ? r : 0, s = i === 1 ? e : v.Deferred(), o = function(e, t, n) {
                return function(r) {
                    t[e] = this,
                    n[e] = arguments.length > 1 ? l.call(arguments) : r,
                    n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                }
            }, u, a, f;
            if (r > 1) {
                u = new Array(r),
                a = new Array(r),
                f = new Array(r);
                for (; t < r; t++)
                    n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n),
            s.promise()
        }
    }),
    v.support = function() {
        var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
        p.setAttribute("className", "t"),
        p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = p.getElementsByTagName("*"),
        r = p.getElementsByTagName("a")[0];
        if (!n || !r || !n.length)
            return {};
        s = i.createElement("select"),
        o = s.appendChild(i.createElement("option")),
        u = p.getElementsByTagName("input")[0],
        r.style.cssText = "top:1px;float:left;opacity:.5",
        t = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: u.value === "on",
            optSelected: o.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!i.createElement("form").enctype,
            html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: i.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        },
        u.checked = !0,
        t.noCloneChecked = u.cloneNode(!0).checked,
        s.disabled = !0,
        t.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }
        !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function() {
            t.noCloneEvent = !1
        }
        ),
        p.cloneNode(!0).fireEvent("onclick"),
        p.detachEvent("onclick", h)),
        u = i.createElement("input"),
        u.value = "t",
        u.setAttribute("type", "radio"),
        t.radioValue = u.value === "t",
        u.setAttribute("checked", "checked"),
        u.setAttribute("name", "t"),
        p.appendChild(u),
        a = i.createDocumentFragment(),
        a.appendChild(p.lastChild),
        t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.appendChecked = u.checked,
        a.removeChild(u),
        a.appendChild(p);
        if (p.attachEvent)
            for (l in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                f = "on" + l,
                c = f in p,
                c || (p.setAttribute(f, "return;"),
                c = typeof p[f] == "function"),
                t[l + "Bubbles"] = c;
        return v(function() {
            var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;", a = i.getElementsByTagName("body")[0];
            if (!a)
                return;
            n = i.createElement("div"),
            n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",
            a.insertBefore(n, a.firstChild),
            r = i.createElement("div"),
            n.appendChild(r),
            r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            s = r.getElementsByTagName("td"),
            s[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            c = s[0].offsetHeight === 0,
            s[0].style.display = "",
            s[1].style.display = "none",
            t.reliableHiddenOffsets = c && s[0].offsetHeight === 0,
            r.innerHTML = "",
            r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            t.boxSizing = r.offsetWidth === 4,
            t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1,
            e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%",
            t.boxSizingReliable = (e.getComputedStyle(r, null) || {
                width: "4px"
            }).width === "4px",
            o = i.createElement("div"),
            o.style.cssText = r.style.cssText = u,
            o.style.marginRight = o.style.width = "0",
            r.style.width = "1px",
            r.appendChild(o),
            t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)),
            typeof r.style.zoom != "undefined" && (r.innerHTML = "",
            r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1",
            t.inlineBlockNeedsLayout = r.offsetWidth === 3,
            r.style.display = "block",
            r.style.overflow = "visible",
            r.innerHTML = "<div></div>",
            r.firstChild.style.width = "5px",
            t.shrinkWrapBlocks = r.offsetWidth !== 3,
            n.style.zoom = 1),
            a.removeChild(n),
            n = r = s = o = null
        }),
        a.removeChild(p),
        n = r = s = o = u = a = p = null,
        t
    }();
    var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
      , P = /([A-Z])/g;
    v.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando],
            !!e && !B(e)
        },
        data: function(e, n, r, i) {
            if (!v.acceptData(e))
                return;
            var s, o, u = v.expando, a = typeof n == "string", f = e.nodeType, l = f ? v.cache : e, c = f ? e[u] : e[u] && u;
            if ((!c || !l[c] || !i && !l[c].data) && a && r === t)
                return;
            c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u),
            l[c] || (l[c] = {},
            f || (l[c].toJSON = v.noop));
            if (typeof n == "object" || typeof n == "function")
                i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
            return s = l[c],
            i || (s.data || (s.data = {}),
            s = s.data),
            r !== t && (s[v.camelCase(n)] = r),
            a ? (o = s[n],
            o == null && (o = s[v.camelCase(n)])) : o = s,
            o
        },
        removeData: function(e, t, n) {
            if (!v.acceptData(e))
                return;
            var r, i, s, o = e.nodeType, u = o ? v.cache : e, a = o ? e[v.expando] : v.expando;
            if (!u[a])
                return;
            if (t) {
                r = n ? u[a] : u[a].data;
                if (r) {
                    v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t),
                    t in r ? t = [t] : t = t.split(" ")));
                    for (i = 0,
                    s = t.length; i < s; i++)
                        delete r[t[i]];
                    if (!(n ? B : v.isEmptyObject)(r))
                        return
                }
            }
            if (!n) {
                delete u[a].data;
                if (!B(u[a]))
                    return
            }
            o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
        },
        _data: function(e, t, n) {
            return v.data(e, t, n, !0)
        },
        acceptData: function(e) {
            var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    v.fn.extend({
        data: function(e, n) {
            var r, i, s, o, u, a = this[0], f = 0, l = null;
            if (e === t) {
                if (this.length) {
                    l = v.data(a);
                    if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
                        s = a.attributes;
                        for (u = s.length; f < u; f++)
                            o = s[f].name,
                            o.indexOf("data-") || (o = v.camelCase(o.substring(5)),
                            H(a, o, l[o]));
                        v._data(a, "parsedAttrs", !0)
                    }
                }
                return l
            }
            return typeof e == "object" ? this.each(function() {
                v.data(this, e)
            }) : (r = e.split(".", 2),
            r[1] = r[1] ? "." + r[1] : "",
            i = r[1] + "!",
            v.access(this, function(n) {
                if (n === t)
                    return l = this.triggerHandler("getData" + i, [r[0]]),
                    l === t && a && (l = v.data(a, e),
                    l = H(a, e, l)),
                    l === t && r[1] ? this.data(r[0]) : l;
                r[1] = n,
                this.each(function() {
                    var t = v(this);
                    t.triggerHandler("setData" + i, r),
                    v.data(this, e, n),
                    t.triggerHandler("changeData" + i, r)
                })
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function(e) {
            return this.each(function() {
                v.removeData(this, e)
            })
        }
    }),
    v.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = v._data(e, t),
                n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = v.queue(e, t)
              , r = n.length
              , i = n.shift()
              , s = v._queueHooks(e, t)
              , o = function() {
                v.dequeue(e, t)
            };
            i === "inprogress" && (i = n.shift(),
            r--),
            i && (t === "fx" && n.unshift("inprogress"),
            delete s.stop,
            i.call(e, o, s)),
            !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return v._data(e, n) || v._data(e, n, {
                empty: v.Callbacks("once memory").add(function() {
                    v.removeData(e, t + "queue", !0),
                    v.removeData(e, n, !0)
                })
            })
        }
    }),
    v.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return typeof e != "string" && (n = e,
            e = "fx",
            r--),
            arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = v.queue(this, e, n);
                v._queueHooks(this, e),
                e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                v.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = v.fx ? v.fx.speeds[e] || e : e,
            t = t || "fx",
            this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1, s = v.Deferred(), o = this, u = this.length, a = function() {
                --i || s.resolveWith(o, [o])
            };
            typeof e != "string" && (n = e,
            e = t),
            e = e || "fx";
            while (u--)
                r = v._data(o[u], e + "queueHooks"),
                r && r.empty && (i++,
                r.empty.add(a));
            return a(),
            s.promise(n)
        }
    });
    var j, F, I, q = /[\t\r\n]/g, R = /\r/g, U = /^(?:button|input)$/i, z = /^(?:button|input|object|select|textarea)$/i, W = /^a(?:rea|)$/i, X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, V = v.support.getSetAttribute;
    v.fn.extend({
        attr: function(e, t) {
            return v.access(this, v.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                v.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return v.access(this, v.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = v.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, s, o, u;
            if (v.isFunction(e))
                return this.each(function(t) {
                    v(this).addClass(e.call(this, t, this.className))
                });
            if (e && typeof e == "string") {
                t = e.split(y);
                for (n = 0,
                r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1)
                        if (!i.className && t.length === 1)
                            i.className = e;
                        else {
                            s = " " + i.className + " ";
                            for (o = 0,
                            u = t.length; o < u; o++)
                                s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
                            i.className = v.trim(s)
                        }
                }
            }
            return this
        },
        removeClass: function(e) {
            var n, r, i, s, o, u, a;
            if (v.isFunction(e))
                return this.each(function(t) {
                    v(this).removeClass(e.call(this, t, this.className))
                });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(y);
                for (u = 0,
                a = this.length; u < a; u++) {
                    i = this[u];
                    if (i.nodeType === 1 && i.className) {
                        r = (" " + i.className + " ").replace(q, " ");
                        for (s = 0,
                        o = n.length; s < o; s++)
                            while (r.indexOf(" " + n[s] + " ") >= 0)
                                r = r.replace(" " + n[s] + " ", " ");
                        i.className = e ? v.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = typeof t == "boolean";
            return v.isFunction(e) ? this.each(function(n) {
                v(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if (n === "string") {
                    var i, s = 0, o = v(this), u = t, a = e.split(y);
                    while (i = a[s++])
                        u = r ? u : !o.hasClass(i),
                        o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean")
                    this.className && v._data(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || ""
            })
        },
        hasClass: function(e) {
            var t = " " + e + " "
              , n = 0
              , r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s)
                    return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()],
                    n && "get"in n && (r = n.get(s, "value")) !== t ? r : (r = s.value,
                    typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
                return
            }
            return i = v.isFunction(e),
            this.each(function(r) {
                var s, o = v(this);
                if (this.nodeType !== 1)
                    return;
                i ? s = e.call(this, r, o.val()) : s = e,
                s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function(e) {
                    return e == null ? "" : e + ""
                })),
                n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set"in n) || n.set(this, s, "value") === t)
                    this.value = s
            })
        }
    }),
    v.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, s = e.type === "select-one" || i < 0, o = s ? null : [], u = s ? i + 1 : r.length, a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (v.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
                            t = v(n).val();
                            if (s)
                                return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function(e, t) {
                    var n = v.makeArray(t);
                    return v(e).find("option").each(function() {
                        this.selected = v.inArray(v(this).val(), n) >= 0
                    }),
                    n.length || (e.selectedIndex = -1),
                    n
                }
            }
        },
        attrFn: {},
        attr: function(e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2)
                return;
            if (i && v.isFunction(v.fn[n]))
                return v(e)[n](r);
            if (typeof e.getAttribute == "undefined")
                return v.prop(e, n, r);
            u = a !== 1 || !v.isXMLDoc(e),
            u && (n = n.toLowerCase(),
            o = v.attrHooks[n] || (X.test(n) ? F : j));
            if (r !== t) {
                if (r === null) {
                    v.removeAttr(e, n);
                    return
                }
                return o && "set"in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""),
                r)
            }
            return o && "get"in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n),
            s === null ? t : s)
        },
        removeAttr: function(e, t) {
            var n, r, i, s, o = 0;
            if (t && e.nodeType === 1) {
                r = t.split(y);
                for (; o < r.length; o++)
                    i = r[o],
                    i && (n = v.propFix[i] || i,
                    s = X.test(i),
                    s || v.attr(e, i, ""),
                    e.removeAttribute(V ? i : n),
                    s && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (U.test(e.nodeName) && e.parentNode)
                        v.error("type property can't be changed");
                    else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    if (j && v.nodeName(e, "button"))
                        return j.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2)
                return;
            return o = u !== 1 || !v.isXMLDoc(e),
            o && (n = v.propFix[n] || n,
            s = v.propHooks[n]),
            r !== t ? s && "set"in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get"in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }),
    F = {
        get: function(e, n) {
            var r, i = v.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var r;
            return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n,
            r in e && (e[r] = !0),
            e.setAttribute(n, n.toLowerCase())),
            n
        }
    },
    V || (I = {
        name: !0,
        id: !0,
        coords: !0
    },
    j = v.valHooks.button = {
        get: function(e, n) {
            var r;
            return r = e.getAttributeNode(n),
            r && (I[n] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = i.createAttribute(n),
            e.setAttributeNode(r)),
            r.value = t + ""
        }
    },
    v.each(["width", "height"], function(e, t) {
        v.attrHooks[t] = v.extend(v.attrHooks[t], {
            set: function(e, n) {
                if (n === "")
                    return e.setAttribute(t, "auto"),
                    n
            }
        })
    }),
    v.attrHooks.contenteditable = {
        get: j.get,
        set: function(e, t, n) {
            t === "" && (t = "false"),
            j.set(e, t, n)
        }
    }),
    v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function(e, n) {
        v.attrHooks[n] = v.extend(v.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }),
    v.support.style || (v.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    })),
    v.support.enctype || (v.propFix.enctype = "encoding"),
    v.support.checkOn || v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = {
            get: function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }),
    v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = v.extend(v.valHooks[this], {
            set: function(e, t) {
                if (v.isArray(t))
                    return e.checked = v.inArray(v(e).val(), t) >= 0
            }
        })
    });
    var $ = /^(?:textarea|input|select)$/i
      , J = /^([^\.]*|)(?:\.(.+)|)$/
      , K = /(?:^|\s)hover(\.\S+|)\b/
      , Q = /^key/
      , G = /^(?:mouse|contextmenu)|click/
      , Y = /^(?:focusinfocus|focusoutblur)$/
      , Z = function(e) {
        return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1")
    };
    v.event = {
        add: function(e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, d, m, g;
            if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e)))
                return;
            r.handler && (d = r,
            r = d.handler,
            s = d.selector),
            r.guid || (r.guid = v.guid++),
            a = o.events,
            a || (o.events = a = {}),
            u = o.handle,
            u || (o.handle = u = function(e) {
                return typeof v == "undefined" || !!e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments)
            }
            ,
            u.elem = e),
            n = v.trim(Z(n)).split(" ");
            for (f = 0; f < n.length; f++) {
                l = J.exec(n[f]) || [],
                c = l[1],
                h = (l[2] || "").split(".").sort(),
                g = v.event.special[c] || {},
                c = (s ? g.delegateType : g.bindType) || c,
                g = v.event.special[c] || {},
                p = v.extend({
                    type: c,
                    origType: l[1],
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: s,
                    needsContext: s && v.expr.match.needsContext.test(s),
                    namespace: h.join(".")
                }, d),
                m = a[c];
                if (!m) {
                    m = a[c] = [],
                    m.delegateCount = 0;
                    if (!g.setup || g.setup.call(e, i, h, u) === !1)
                        e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                }
                g.add && (g.add.call(e, p),
                p.handler.guid || (p.handler.guid = r.guid)),
                s ? m.splice(m.delegateCount++, 0, p) : m.push(p),
                v.event.global[c] = !0
            }
            e = null
        },
        global: {},
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, m, g = v.hasData(e) && v._data(e);
            if (!g || !(h = g.events))
                return;
            t = v.trim(Z(t || "")).split(" ");
            for (s = 0; s < t.length; s++) {
                o = J.exec(t[s]) || [],
                u = a = o[1],
                f = o[2];
                if (!u) {
                    for (u in h)
                        v.event.remove(e, u + t[s], n, r, !0);
                    continue
                }
                p = v.event.special[u] || {},
                u = (r ? p.delegateType : p.bindType) || u,
                d = h[u] || [],
                l = d.length,
                f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (c = 0; c < d.length; c++)
                    m = d[c],
                    (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1),
                    m.selector && d.delegateCount--,
                    p.remove && p.remove.call(e, m));
                d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle),
                delete h[u])
            }
            v.isEmptyObject(h) && (delete g.handle,
            v.removeData(e, "events", !0))
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(n, r, s, o) {
            if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
                var u, a, f, l, c, h, p, d, m, g, y = n.type || n, b = [];
                if (Y.test(y + v.event.triggered))
                    return;
                y.indexOf("!") >= 0 && (y = y.slice(0, -1),
                a = !0),
                y.indexOf(".") >= 0 && (b = y.split("."),
                y = b.shift(),
                b.sort());
                if ((!s || v.event.customEvent[y]) && !v.event.global[y])
                    return;
                n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y,n) : new v.Event(y),
                n.type = y,
                n.isTrigger = !0,
                n.exclusive = a,
                n.namespace = b.join("."),
                n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                h = y.indexOf(":") < 0 ? "on" + y : "";
                if (!s) {
                    u = v.cache;
                    for (f in u)
                        u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
                    return
                }
                n.result = t,
                n.target || (n.target = s),
                r = r != null ? v.makeArray(r) : [],
                r.unshift(n),
                p = v.event.special[y] || {};
                if (p.trigger && p.trigger.apply(s, r) === !1)
                    return;
                m = [[s, p.bindType || y]];
                if (!o && !p.noBubble && !v.isWindow(s)) {
                    g = p.delegateType || y,
                    l = Y.test(g + y) ? s : s.parentNode;
                    for (c = s; l; l = l.parentNode)
                        m.push([l, g]),
                        c = l;
                    c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g])
                }
                for (f = 0; f < m.length && !n.isPropagationStopped(); f++)
                    l = m[f][0],
                    n.type = m[f][1],
                    d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"),
                    d && d.apply(l, r),
                    d = h && l[h],
                    d && v.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();
                return n.type = y,
                !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h],
                c && (s[h] = null),
                v.event.triggered = y,
                s[y](),
                v.event.triggered = t,
                c && (s[h] = c)),
                n.result
            }
            return
        },
        dispatch: function(n) {
            n = v.event.fix(n || e.event);
            var r, i, s, o, u, a, f, c, h, p, d = (v._data(this, "events") || {})[n.type] || [], m = d.delegateCount, g = l.call(arguments), y = !n.exclusive && !n.namespace, b = v.event.special[n.type] || {}, w = [];
            g[0] = n,
            n.delegateTarget = this;
            if (b.preDispatch && b.preDispatch.call(this, n) === !1)
                return;
            if (m && (!n.button || n.type !== "click"))
                for (s = n.target; s != this; s = s.parentNode || this)
                    if (s.disabled !== !0 || n.type !== "click") {
                        u = {},
                        f = [];
                        for (r = 0; r < m; r++)
                            c = d[r],
                            h = c.selector,
                            u[h] === t && (u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [s]).length),
                            u[h] && f.push(c);
                        f.length && w.push({
                            elem: s,
                            matches: f
                        })
                    }
            d.length > m && w.push({
                elem: this,
                matches: d.slice(m)
            });
            for (r = 0; r < w.length && !n.isPropagationStopped(); r++) {
                a = w[r],
                n.currentTarget = a.elem;
                for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
                    c = a.matches[i];
                    if (y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace))
                        n.data = c.data,
                        n.handleObj = c,
                        o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g),
                        o !== t && (n.result = o,
                        o === !1 && (n.preventDefault(),
                        n.stopPropagation()))
                }
            }
            return b.postDispatch && b.postDispatch.call(this, n),
            n.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, s, o, u = n.button, a = n.fromElement;
                return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i,
                s = r.documentElement,
                o = r.body,
                e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0),
                e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a),
                !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[v.expando])
                return e;
            var t, n, r = e, s = v.event.fixHooks[e.type] || {}, o = s.props ? this.props.concat(s.props) : this.props;
            e = v.Event(r);
            for (t = o.length; t; )
                n = o[--t],
                e[n] = r[n];
            return e.target || (e.target = r.srcElement || i),
            e.target.nodeType === 3 && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            s.filter ? s.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(e, t, n) {
                    v.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function(e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = v.extend(new v.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    v.event.handle = v.event.dispatch,
    v.removeEvent = i.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null),
        e.detachEvent(r, n))
    }
    ,
    v.Event = function(e, t) {
        if (!(this instanceof v.Event))
            return new v.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e,
        t && v.extend(this, t),
        this.timeStamp = e && e.timeStamp || v.now(),
        this[v.expando] = !0
    }
    ,
    v.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = tt;
            var e = this.originalEvent;
            if (!e)
                return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function() {
            this.isPropagationStopped = tt;
            var e = this.originalEvent;
            if (!e)
                return;
            e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = tt,
            this.stopPropagation()
        },
        isDefaultPrevented: et,
        isPropagationStopped: et,
        isImmediatePropagationStopped: et
    },
    v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        v.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, s = e.handleObj, o = s.selector;
                if (!i || i !== r && !v.contains(r, i))
                    e.type = s.origType,
                    n = s.handler.apply(this, arguments),
                    e.type = t;
                return n
            }
        }
    }),
    v.support.submitBubbles || (v.event.special.submit = {
        setup: function() {
            if (v.nodeName(this, "form"))
                return !1;
            v.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target
                  , r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
                r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                v._data(r, "_submit_attached", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            if (v.nodeName(this, "form"))
                return !1;
            v.event.remove(this, "._submit")
        }
    }),
    v.support.changeBubbles || (v.event.special.change = {
        setup: function() {
            if ($.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio")
                    v.event.add(this, "propertychange._change", function(e) {
                        e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }),
                    v.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1),
                        v.event.simulate("change", this, e, !0)
                    });
                return !1
            }
            v.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0)
                }),
                v._data(t, "_change_attached", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox")
                return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return v.event.remove(this, "._change"),
            !$.test(this.nodeName)
        }
    }),
    v.support.focusinBubbles || v.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0
          , r = function(e) {
            v.event.simulate(t, e.target, v.event.fix(e), !0)
        };
        v.event.special[t] = {
            setup: function() {
                n++ === 0 && i.addEventListener(e, r, !0)
            },
            teardown: function() {
                --n === 0 && i.removeEventListener(e, r, !0)
            }
        }
    }),
    v.fn.extend({
        on: function(e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n,
                n = t);
                for (u in e)
                    this.on(u, n, r, e[u], s);
                return this
            }
            r == null && i == null ? (i = n,
            r = n = t) : i == null && (typeof n == "string" ? (i = r,
            r = t) : (i = r,
            r = n,
            n = t));
            if (i === !1)
                i = et;
            else if (!i)
                return this;
            return s === 1 && (o = i,
            i = function(e) {
                return v().off(e),
                o.apply(this, arguments)
            }
            ,
            i.guid = o.guid || (o.guid = v.guid++)),
            this.each(function() {
                v.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if (typeof e == "object") {
                for (s in e)
                    this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function")
                r = n,
                n = t;
            return r === !1 && (r = et),
            this.each(function() {
                v.event.remove(this, e, r, n)
            })
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        live: function(e, t, n) {
            return v(this.context).on(e, this.selector, t, n),
            this
        },
        die: function(e, t) {
            return v(this.context).off(e, this.selector || "**", t),
            this
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                v.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            if (this[0])
                return v.event.trigger(e, t, this[0], !0)
        },
        toggle: function(e) {
            var t = arguments
              , n = e.guid || v.guid++
              , r = 0
              , i = function(n) {
                var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
                return v._data(this, "lastToggle" + e.guid, i + 1),
                n.preventDefault(),
                t[i].apply(this, arguments) || !1
            };
            i.guid = n;
            while (r < t.length)
                t[r++].guid = n;
            return this.click(i)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        v.fn[t] = function(e, n) {
            return n == null && (n = e,
            e = null),
            arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
        ,
        Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks),
        G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks)
    }),
    function(e, t) {
        function nt(e, t, n, r) {
            n = n || [],
            t = t || g;
            var i, s, a, f, l = t.nodeType;
            if (!e || typeof e != "string")
                return n;
            if (l !== 1 && l !== 9)
                return [];
            a = o(t);
            if (!a && !r)
                if (i = R.exec(e))
                    if (f = i[1]) {
                        if (l === 9) {
                            s = t.getElementById(f);
                            if (!s || !s.parentNode)
                                return n;
                            if (s.id === f)
                                return n.push(s),
                                n
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && u(t, s) && s.id === f)
                            return n.push(s),
                            n
                    } else {
                        if (i[2])
                            return S.apply(n, x.call(t.getElementsByTagName(e), 0)),
                            n;
                        if ((f = i[3]) && Z && t.getElementsByClassName)
                            return S.apply(n, x.call(t.getElementsByClassName(f), 0)),
                            n
                    }
            return vt(e.replace(j, "$1"), t, n, r, a)
        }
        function rt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }
        function it(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }
        function st(e) {
            return N(function(t) {
                return t = +t,
                N(function(n, r) {
                    var i, s = e([], n.length, t), o = s.length;
                    while (o--)
                        n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function ot(e, t, n) {
            if (e === t)
                return n;
            var r = e.nextSibling;
            while (r) {
                if (r === t)
                    return -1;
                r = r.nextSibling
            }
            return 1
        }
        function ut(e, t) {
            var n, r, s, o, u, a, f, l = L[d][e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            u = e,
            a = [],
            f = i.preFilter;
            while (u) {
                if (!n || (r = F.exec(u)))
                    r && (u = u.slice(r[0].length) || u),
                    a.push(s = []);
                n = !1;
                if (r = I.exec(u))
                    s.push(n = new m(r.shift())),
                    u = u.slice(n.length),
                    n.type = r[0].replace(j, " ");
                for (o in i.filter)
                    (r = J[o].exec(u)) && (!f[o] || (r = f[o](r))) && (s.push(n = new m(r.shift())),
                    u = u.slice(n.length),
                    n.type = o,
                    n.matches = r);
                if (!n)
                    break
            }
            return t ? u.length : u ? nt.error(e) : L(e, a).slice(0)
        }
        function at(e, t, r) {
            var i = t.dir
              , s = r && t.dir === "parentNode"
              , o = w++;
            return t.first ? function(t, n, r) {
                while (t = t[i])
                    if (s || t.nodeType === 1)
                        return e(t, n, r)
            }
            : function(t, r, u) {
                if (!u) {
                    var a, f = b + " " + o + " ", l = f + n;
                    while (t = t[i])
                        if (s || t.nodeType === 1) {
                            if ((a = t[d]) === l)
                                return t.sizset;
                            if (typeof a == "string" && a.indexOf(f) === 0) {
                                if (t.sizset)
                                    return t
                            } else {
                                t[d] = l;
                                if (e(t, r, u))
                                    return t.sizset = !0,
                                    t;
                                t.sizset = !1
                            }
                        }
                } else
                    while (t = t[i])
                        if (s || t.nodeType === 1)
                            if (e(t, r, u))
                                return t
            }
        }
        function ft(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function lt(e, t, n, r, i) {
            var s, o = [], u = 0, a = e.length, f = t != null;
            for (; u < a; u++)
                if (s = e[u])
                    if (!n || n(s, r, i))
                        o.push(s),
                        f && t.push(u);
            return o
        }
        function ct(e, t, n, r, i, s) {
            return r && !r[d] && (r = ct(r)),
            i && !i[d] && (i = ct(i, s)),
            N(function(s, o, u, a) {
                var f, l, c, h = [], p = [], d = o.length, v = s || dt(t || "*", u.nodeType ? [u] : u, []), m = e && (s || !t) ? lt(v, h, e, u, a) : v, g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = lt(g, p),
                    r(f, [], u, a),
                    l = f.length;
                    while (l--)
                        if (c = f[l])
                            g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [],
                            l = g.length;
                            while (l--)
                                (c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)
                            (c = g[l]) && (f = i ? T.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else
                    g = lt(g === o ? g.splice(d, g.length) : g),
                    i ? i(null, o, g, a) : S.apply(o, g)
            })
        }
        function ht(e) {
            var t, n, r, s = e.length, o = i.relative[e[0].type], u = o || i.relative[" "], a = o ? 1 : 0, f = at(function(e) {
                return e === t
            }, u, !0), l = at(function(e) {
                return T.call(t, e) > -1
            }, u, !0), h = [function(e, n, r) {
                return !o && (r || n !== c) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r))
            }
            ];
            for (; a < s; a++)
                if (n = i.relative[e[a].type])
                    h = [at(ft(h), n)];
                else {
                    n = i.filter[e[a].type].apply(null, e[a].matches);
                    if (n[d]) {
                        r = ++a;
                        for (; r < s; r++)
                            if (i.relative[e[r].type])
                                break;
                        return ct(a > 1 && ft(h), a > 1 && e.slice(0, a - 1).join("").replace(j, "$1"), n, a < r && ht(e.slice(a, r)), r < s && ht(e = e.slice(r)), r < s && e.join(""))
                    }
                    h.push(n)
                }
            return ft(h)
        }
        function pt(e, t) {
            var r = t.length > 0
              , s = e.length > 0
              , o = function(u, a, f, l, h) {
                var p, d, v, m = [], y = 0, w = "0", x = u && [], T = h != null, N = c, C = u || s && i.find.TAG("*", h && a.parentNode || a), k = b += N == null ? 1 : Math.E;
                T && (c = a !== g && a,
                n = o.el);
                for (; (p = C[w]) != null; w++) {
                    if (s && p) {
                        for (d = 0; v = e[d]; d++)
                            if (v(p, a, f)) {
                                l.push(p);
                                break
                            }
                        T && (b = k,
                        n = ++o.el)
                    }
                    r && ((p = !v && p) && y--,
                    u && x.push(p))
                }
                y += w;
                if (r && w !== y) {
                    for (d = 0; v = t[d]; d++)
                        v(x, m, a, f);
                    if (u) {
                        if (y > 0)
                            while (w--)
                                !x[w] && !m[w] && (m[w] = E.call(l));
                        m = lt(m)
                    }
                    S.apply(l, m),
                    T && !u && m.length > 0 && y + t.length > 1 && nt.uniqueSort(l)
                }
                return T && (b = k,
                c = N),
                x
            };
            return o.el = 0,
            r ? N(o) : o
        }
        function dt(e, t, n) {
            var r = 0
              , i = t.length;
            for (; r < i; r++)
                nt(e, t[r], n);
            return n
        }
        function vt(e, t, n, r, s) {
            var o, u, f, l, c, h = ut(e), p = h.length;
            if (!r && h.length === 1) {
                u = h[0] = h[0].slice(0);
                if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && !s && i.relative[u[1].type]) {
                    t = i.find.ID(f.matches[0].replace($, ""), t, s)[0];
                    if (!t)
                        return n;
                    e = e.slice(u.shift().length)
                }
                for (o = J.POS.test(e) ? -1 : u.length - 1; o >= 0; o--) {
                    f = u[o];
                    if (i.relative[l = f.type])
                        break;
                    if (c = i.find[l])
                        if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
                            u.splice(o, 1),
                            e = r.length && u.join("");
                            if (!e)
                                return S.apply(n, x.call(r, 0)),
                                n;
                            break
                        }
                }
            }
            return a(e, h)(r, t, s, n, z.test(e)),
            n
        }
        function mt() {}
        var n, r, i, s, o, u, a, f, l, c, h = !0, p = "undefined", d = ("sizcache" + Math.random()).replace(".", ""), m = String, g = e.document, y = g.documentElement, b = 0, w = 0, E = [].pop, S = [].push, x = [].slice, T = [].indexOf || function(e) {
            var t = 0
              , n = this.length;
            for (; t < n; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , N = function(e, t) {
            return e[d] = t == null || t,
            e
        }, C = function() {
            var e = {}
              , t = [];
            return N(function(n, r) {
                return t.push(n) > i.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }, e)
        }, k = C(), L = C(), A = C(), O = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", _ = M.replace("w", "w#"), D = "([*^$|!~]?=)", P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]", H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)", B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$","g"), F = new RegExp("^" + O + "*," + O + "*"), I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"), q = new RegExp(H), R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, U = /^:not/, z = /[\x20\t\r\n\f]*[+~]/, W = /:not\($/, X = /h\d/i, V = /input|select|textarea|button/i, $ = /\\(?!\\)/g, J = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + H),
            POS: new RegExp(B,"i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)","i"),
            needsContext: new RegExp("^" + O + "*[>+~]|" + B,"i")
        }, K = function(e) {
            var t = g.createElement("div");
            try {
                return e(t)
            } catch (n) {
                return !1
            } finally {
                t = null
            }
        }, Q = K(function(e) {
            return e.appendChild(g.createComment("")),
            !e.getElementsByTagName("*").length
        }), G = K(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#"
        }), Y = K(function(e) {
            e.innerHTML = "<select></select>";
            var t = typeof e.lastChild.getAttribute("multiple");
            return t !== "boolean" && t !== "string"
        }), Z = K(function(e) {
            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
            !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e",
            e.getElementsByClassName("e").length === 2)
        }), et = K(function(e) {
            e.id = d + 0,
            e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>",
            y.insertBefore(e, y.firstChild);
            var t = g.getElementsByName && g.getElementsByName(d).length === 2 + g.getElementsByName(d + 0).length;
            return r = !g.getElementById(d),
            y.removeChild(e),
            t
        });
        try {
            x.call(y.childNodes, 0)[0].nodeType
        } catch (tt) {
            x = function(e) {
                var t, n = [];
                for (; t = this[e]; e++)
                    n.push(t);
                return n
            }
        }
        nt.matches = function(e, t) {
            return nt(e, null, null, t)
        }
        ,
        nt.matchesSelector = function(e, t) {
            return nt(t, null, null, [e]).length > 0
        }
        ,
        s = nt.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (i === 1 || i === 9 || i === 11) {
                    if (typeof e.textContent == "string")
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += s(e)
                } else if (i === 3 || i === 4)
                    return e.nodeValue
            } else
                for (; t = e[r]; r++)
                    n += s(t);
            return n
        }
        ,
        o = nt.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }
        ,
        u = nt.contains = y.contains ? function(e, t) {
            var n = e.nodeType === 9 ? e.documentElement : e
              , r = t && t.parentNode;
            return e === r || !!(r && r.nodeType === 1 && n.contains && n.contains(r))
        }
        : y.compareDocumentPosition ? function(e, t) {
            return t && !!(e.compareDocumentPosition(t) & 16)
        }
        : function(e, t) {
            while (t = t.parentNode)
                if (t === e)
                    return !0;
            return !1
        }
        ,
        nt.attr = function(e, t) {
            var n, r = o(e);
            return r || (t = t.toLowerCase()),
            (n = i.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t),
            n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
        }
        ,
        i = nt.selectors = {
            cacheLength: 50,
            createPseudo: N,
            match: J,
            attrHandle: G ? {} : {
                href: function(e) {
                    return e.getAttribute("href", 2)
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            find: {
                ID: r ? function(e, t, n) {
                    if (typeof t.getElementById !== p && !n) {
                        var r = t.getElementById(e);
                        return r && r.parentNode ? [r] : []
                    }
                }
                : function(e, n, r) {
                    if (typeof n.getElementById !== p && !r) {
                        var i = n.getElementById(e);
                        return i ? i.id === e || typeof i.getAttributeNode !== p && i.getAttributeNode("id").value === e ? [i] : t : []
                    }
                }
                ,
                TAG: Q ? function(e, t) {
                    if (typeof t.getElementsByTagName !== p)
                        return t.getElementsByTagName(e)
                }
                : function(e, t) {
                    var n = t.getElementsByTagName(e);
                    if (e === "*") {
                        var r, i = [], s = 0;
                        for (; r = n[s]; s++)
                            r.nodeType === 1 && i.push(r);
                        return i
                    }
                    return n
                }
                ,
                NAME: et && function(e, t) {
                    if (typeof t.getElementsByName !== p)
                        return t.getElementsByName(name)
                }
                ,
                CLASS: Z && function(e, t, n) {
                    if (typeof t.getElementsByClassName !== p && !n)
                        return t.getElementsByClassName(e)
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace($, ""),
                    e[3] = (e[4] || e[5] || "").replace($, ""),
                    e[2] === "~=" && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    e[1] === "nth" ? (e[2] || nt.error(e[0]),
                    e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")),
                    e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n;
                    if (J.CHILD.test(e[0]))
                        return null;
                    if (e[3])
                        e[2] = e[3];
                    else if (t = e[4])
                        q.test(t) && (n = ut(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n),
                        e[0] = e[0].slice(0, n)),
                        e[2] = t;
                    return e.slice(0, 3)
                }
            },
            filter: {
                ID: r ? function(e) {
                    return e = e.replace($, ""),
                    function(t) {
                        return t.getAttribute("id") === e
                    }
                }
                : function(e) {
                    return e = e.replace($, ""),
                    function(t) {
                        var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }
                ,
                TAG: function(e) {
                    return e === "*" ? function() {
                        return !0
                    }
                    : (e = e.replace($, "").toLowerCase(),
                    function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                    )
                },
                CLASS: function(e) {
                    var t = k[d][e + " "];
                    return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && k(e, function(e) {
                        return t.test(e.className || typeof e.getAttribute !== p && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r, i) {
                        var s = nt.attr(r, e);
                        return s == null ? t === "!=" : t ? (s += "",
                        t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r) {
                    return e === "nth" ? function(e) {
                        var t, i, s = e.parentNode;
                        if (n === 1 && r === 0)
                            return !0;
                        if (s) {
                            i = 0;
                            for (t = s.firstChild; t; t = t.nextSibling)
                                if (t.nodeType === 1) {
                                    i++;
                                    if (e === t)
                                        break
                                }
                        }
                        return i -= r,
                        i === n || i % n === 0 && i / n >= 0
                    }
                    : function(t) {
                        var n = t;
                        switch (e) {
                        case "only":
                        case "first":
                            while (n = n.previousSibling)
                                if (n.nodeType === 1)
                                    return !1;
                            if (e === "first")
                                return !0;
                            n = t;
                        case "last":
                            while (n = n.nextSibling)
                                if (n.nodeType === 1)
                                    return !1;
                            return !0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + e);
                    return r[d] ? r(t) : r.length > 1 ? (n = [e, e, "", t],
                    i.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function(e, n) {
                        var i, s = r(e, t), o = s.length;
                        while (o--)
                            i = T.call(e, s[o]),
                            e[i] = !(n[i] = s[o])
                    }) : function(e) {
                        return r(e, 0, n)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: N(function(e) {
                    var t = []
                      , n = []
                      , r = a(e.replace(j, "$1"));
                    return r[d] ? N(function(e, t, n, i) {
                        var s, o = r(e, null, i, []), u = e.length;
                        while (u--)
                            if (s = o[u])
                                e[u] = !(t[u] = s)
                    }) : function(e, i, s) {
                        return t[0] = e,
                        r(t, null, s, n),
                        !n.pop()
                    }
                }),
                has: N(function(e) {
                    return function(t) {
                        return nt(e, t).length > 0
                    }
                }),
                contains: N(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                    }
                }),
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                parent: function(e) {
                    return !i.pseudos.empty(e)
                },
                empty: function(e) {
                    var t;
                    e = e.firstChild;
                    while (e) {
                        if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4)
                            return !1;
                        e = e.nextSibling
                    }
                    return !0
                },
                header: function(e) {
                    return X.test(e.nodeName)
                },
                text: function(e) {
                    var t, n;
                    return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
                },
                radio: rt("radio"),
                checkbox: rt("checkbox"),
                file: rt("file"),
                password: rt("password"),
                image: rt("image"),
                submit: it("submit"),
                reset: it("reset"),
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                input: function(e) {
                    return V.test(e.nodeName)
                },
                focus: function(e) {
                    var t = e.ownerDocument;
                    return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                active: function(e) {
                    return e === e.ownerDocument.activeElement
                },
                first: st(function() {
                    return [0]
                }),
                last: st(function(e, t) {
                    return [t - 1]
                }),
                eq: st(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: st(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: st(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: st(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: st(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        },
        f = y.compareDocumentPosition ? function(e, t) {
            return e === t ? (l = !0,
            0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
        }
        : function(e, t) {
            if (e === t)
                return l = !0,
                0;
            if (e.sourceIndex && t.sourceIndex)
                return e.sourceIndex - t.sourceIndex;
            var n, r, i = [], s = [], o = e.parentNode, u = t.parentNode, a = o;
            if (o === u)
                return ot(e, t);
            if (!o)
                return -1;
            if (!u)
                return 1;
            while (a)
                i.unshift(a),
                a = a.parentNode;
            a = u;
            while (a)
                s.unshift(a),
                a = a.parentNode;
            n = i.length,
            r = s.length;
            for (var f = 0; f < n && f < r; f++)
                if (i[f] !== s[f])
                    return ot(i[f], s[f]);
            return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1)
        }
        ,
        [0, 0].sort(f),
        h = !l,
        nt.uniqueSort = function(e) {
            var t, n = [], r = 1, i = 0;
            l = h,
            e.sort(f);
            if (l) {
                for (; t = e[r]; r++)
                    t === e[r - 1] && (i = n.push(r));
                while (i--)
                    e.splice(n[i], 1)
            }
            return e
        }
        ,
        nt.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        a = nt.compile = function(e, t) {
            var n, r = [], i = [], s = A[d][e + " "];
            if (!s) {
                t || (t = ut(e)),
                n = t.length;
                while (n--)
                    s = ht(t[n]),
                    s[d] ? r.push(s) : i.push(s);
                s = A(e, pt(i, r))
            }
            return s
        }
        ,
        g.querySelectorAll && function() {
            var e, t = vt, n = /'|\\/g, r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, i = [":focus"], s = [":active"], u = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
            K(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                e.querySelectorAll(":checked").length || i.push(":checked")
            }),
            K(function(e) {
                e.innerHTML = "<p test=''></p>",
                e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + O + "*(?:\"\"|'')"),
                e.innerHTML = "<input type='hidden'/>",
                e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled")
            }),
            i = new RegExp(i.join("|")),
            vt = function(e, r, s, o, u) {
                if (!o && !u && !i.test(e)) {
                    var a, f, l = !0, c = d, h = r, p = r.nodeType === 9 && e;
                    if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                        a = ut(e),
                        (l = r.getAttribute("id")) ? c = l.replace(n, "\\$&") : r.setAttribute("id", c),
                        c = "[id='" + c + "'] ",
                        f = a.length;
                        while (f--)
                            a[f] = c + a[f].join("");
                        h = z.test(e) && r.parentNode || r,
                        p = a.join(",")
                    }
                    if (p)
                        try {
                            return S.apply(s, x.call(h.querySelectorAll(p), 0)),
                            s
                        } catch (v) {} finally {
                            l || r.removeAttribute("id")
                        }
                }
                return t(e, r, s, o, u)
            }
            ,
            u && (K(function(t) {
                e = u.call(t, "div");
                try {
                    u.call(t, "[test!='']:sizzle"),
                    s.push("!=", H)
                } catch (n) {}
            }),
            s = new RegExp(s.join("|")),
            nt.matchesSelector = function(t, n) {
                n = n.replace(r, "='$1']");
                if (!o(t) && !s.test(n) && !i.test(n))
                    try {
                        var a = u.call(t, n);
                        if (a || e || t.document && t.document.nodeType !== 11)
                            return a
                    } catch (f) {}
                return nt(n, null, null, [t]).length > 0
            }
            )
        }(),
        i.pseudos.nth = i.pseudos.eq,
        i.filters = mt.prototype = i.pseudos,
        i.setFilters = new mt,
        nt.attr = v.attr,
        v.find = nt,
        v.expr = nt.selectors,
        v.expr[":"] = v.expr.pseudos,
        v.unique = nt.uniqueSort,
        v.text = nt.getText,
        v.isXMLDoc = nt.isXML,
        v.contains = nt.contains
    }(e);
    var nt = /Until$/
      , rt = /^(?:parents|prev(?:Until|All))/
      , it = /^.[^:#\[\.,]*$/
      , st = v.expr.match.needsContext
      , ot = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    v.fn.extend({
        find: function(e) {
            var t, n, r, i, s, o, u = this;
            if (typeof e != "string")
                return v(e).filter(function() {
                    for (t = 0,
                    n = u.length; t < n; t++)
                        if (v.contains(u[t], this))
                            return !0
                });
            o = this.pushStack("", "find", e);
            for (t = 0,
            n = this.length; t < n; t++) {
                r = o.length,
                v.find(e, this[t], o);
                if (t > 0)
                    for (i = r; i < o.length; i++)
                        for (s = 0; s < r; s++)
                            if (o[s] === o[i]) {
                                o.splice(i--, 1);
                                break
                            }
            }
            return o
        },
        has: function(e) {
            var t, n = v(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (v.contains(this, n[t]))
                        return !0
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(ft(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, s = [], o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return s = s.length > 1 ? v.unique(s) : s,
            this.pushStack(s, "closest", e)
        },
        index: function(e) {
            return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e)
              , r = v.merge(this.get(), n);
            return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    v.fn.andSelf = v.fn.addBack,
    v.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return v.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return v.dir(e, "parentNode", n)
        },
        next: function(e) {
            return at(e, "nextSibling")
        },
        prev: function(e) {
            return at(e, "previousSibling")
        },
        nextAll: function(e) {
            return v.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return v.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return v.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return v.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return v.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return v.sibling(e.firstChild)
        },
        contents: function(e) {
            return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes)
        }
    }, function(e, t) {
        v.fn[e] = function(n, r) {
            var i = v.map(this, t, n);
            return nt.test(e) || (r = n),
            r && typeof r == "string" && (i = v.filter(r, i)),
            i = this.length > 1 && !ot[e] ? v.unique(i) : i,
            this.length > 1 && rt.test(e) && (i = i.reverse()),
            this.pushStack(i, e, l.call(arguments).join(","))
        }
    }),
    v.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"),
            t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t)
        },
        dir: function(e, n, r) {
            var i = []
              , s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r)))
                s.nodeType === 1 && i.push(s),
                s = s[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling)
                e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , ht = / jQuery\d+="(?:null|\d+)"/g
      , pt = /^\s+/
      , dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , vt = /<([\w:]+)/
      , mt = /<tbody/i
      , gt = /<|&#?\w+;/
      , yt = /<(?:script|style|link)/i
      , bt = /<(?:script|object|embed|option|style)/i
      , wt = new RegExp("<(?:" + ct + ")[\\s/>]","i")
      , Et = /^(?:checkbox|radio)$/
      , St = /checked\s*(?:[^=]|=\s*.checked.)/i
      , xt = /\/(java|ecma)script/i
      , Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g
      , Nt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }
      , Ct = lt(i)
      , kt = Ct.appendChild(i.createElement("div"));
    Nt.optgroup = Nt.option,
    Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead,
    Nt.th = Nt.td,
    v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]),
    v.fn.extend({
        text: function(e) {
            return v.access(this, function(e) {
                return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (v.isFunction(e))
                return this.each(function(t) {
                    v(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = v(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1)
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return v.isFunction(e) ? this.each(function(t) {
                v(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = v(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = v.isFunction(e);
            return this.each(function(n) {
                v(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                v.nodeName(this, "body") || v(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            if (!ut(this[0]))
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                });
            if (arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(e, this), "before", this.selector)
            }
        },
        after: function() {
            if (!ut(this[0]))
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
            if (arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(this, e), "after", this.selector)
            }
        },
        remove: function(e, t) {
            var n, r = 0;
            for (; (n = this[r]) != null; r++)
                if (!e || v.filter(e, [n]).length)
                    !t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")),
                    v.cleanData([n])),
                    n.parentNode && n.parentNode.removeChild(n);
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; (e = this[t]) != null; t++) {
                e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));
                while (e.firstChild)
                    e.removeChild(e.firstChild)
            }
            return this
        },
        clone: function(e, t) {
            return e = e == null ? !1 : e,
            t = t == null ? e : t,
            this.map(function() {
                return v.clone(this, e, t)
            })
        },
        html: function(e) {
            return v.access(this, function(e) {
                var n = this[0] || {}
                  , r = 0
                  , i = this.length;
                if (e === t)
                    return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
                if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(dt, "<$1></$2>");
                    try {
                        for (; r < i; r++)
                            n = this[r] || {},
                            n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")),
                            n.innerHTML = e);
                        n = 0
                    } catch (s) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function(t) {
                var n = v(this)
                  , r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : (typeof e != "string" && (e = v(e).detach()),
            this.each(function() {
                var t = this.nextSibling
                  , n = this.parentNode;
                v(this).remove(),
                t ? v(t).before(e) : v(n).append(e)
            }))
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            e = [].concat.apply([], e);
            var i, s, o, u, a = 0, f = e[0], l = [], c = this.length;
            if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f))
                return this.each(function() {
                    v(this).domManip(e, n, r)
                });
            if (v.isFunction(f))
                return this.each(function(i) {
                    var s = v(this);
                    e[0] = f.call(this, i, n ? s.html() : t),
                    s.domManip(e, n, r)
                });
            if (this[0]) {
                i = v.buildFragment(e, this, l),
                o = i.fragment,
                s = o.firstChild,
                o.childNodes.length === 1 && (o = s);
                if (s) {
                    n = n && v.nodeName(s, "tr");
                    for (u = i.cacheable || c - 1; a < c; a++)
                        r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0))
                }
                o = s = null,
                l.length && v.each(l, function(e, t) {
                    t.src ? v.ajax ? v.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")),
                    t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }),
    v.buildFragment = function(e, n, r) {
        var s, o, u, a = e[0];
        return n = n || i,
        n = !n.nodeType && n[0] || n,
        n = n.ownerDocument || n,
        e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0,
        s = v.fragments[a],
        u = s !== t),
        s || (s = n.createDocumentFragment(),
        v.clean(e, n, s, r),
        o && (v.fragments[a] = u && s)),
        {
            fragment: s,
            cacheable: o
        }
    }
    ,
    v.fragments = {},
    v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        v.fn[e] = function(n) {
            var r, i = 0, s = [], o = v(n), u = o.length, a = this.length === 1 && this[0].parentNode;
            if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1)
                return o[t](this[0]),
                this;
            for (; i < u; i++)
                r = (i > 0 ? this.clone(!0) : this).get(),
                v(o[i])[t](r),
                s = s.concat(r);
            return this.pushStack(s, e, o.selector)
        }
    }),
    v.extend({
        clone: function(e, t, n) {
            var r, i, s, o;
            v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML,
            kt.removeChild(o = kt.firstChild));
            if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
                Ot(e, o),
                r = Mt(e),
                i = Mt(o);
                for (s = 0; r[s]; ++s)
                    i[s] && Ot(r[s], i[s])
            }
            if (t) {
                At(e, o);
                if (n) {
                    r = Mt(e),
                    i = Mt(o);
                    for (s = 0; r[s]; ++s)
                        At(r[s], i[s])
                }
            }
            return r = i = null,
            o
        },
        clean: function(e, t, n, r) {
            var s, o, u, a, f, l, c, h, p, d, m, g, y = t === i && Ct, b = [];
            if (!t || typeof t.createDocumentFragment == "undefined")
                t = i;
            for (s = 0; (u = e[s]) != null; s++) {
                typeof u == "number" && (u += "");
                if (!u)
                    continue;
                if (typeof u == "string")
                    if (!gt.test(u))
                        u = t.createTextNode(u);
                    else {
                        y = y || lt(t),
                        c = t.createElement("div"),
                        y.appendChild(c),
                        u = u.replace(dt, "<$1></$2>"),
                        a = (vt.exec(u) || ["", ""])[1].toLowerCase(),
                        f = Nt[a] || Nt._default,
                        l = f[0],
                        c.innerHTML = f[1] + u + f[2];
                        while (l--)
                            c = c.lastChild;
                        if (!v.support.tbody) {
                            h = mt.test(u),
                            p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
                            for (o = p.length - 1; o >= 0; --o)
                                v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o])
                        }
                        !v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild),
                        u = c.childNodes,
                        c.parentNode.removeChild(c)
                    }
                u.nodeType ? b.push(u) : v.merge(b, u)
            }
            c && (u = c = y = null);
            if (!v.support.appendChecked)
                for (s = 0; (u = b[s]) != null; s++)
                    v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
            if (n) {
                m = function(e) {
                    if (!e.type || xt.test(e.type))
                        return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                }
                ;
                for (s = 0; (u = b[s]) != null; s++)
                    if (!v.nodeName(u, "script") || !m(u))
                        n.appendChild(u),
                        typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m),
                        b.splice.apply(b, [s + 1, 0].concat(g)),
                        s += g.length)
            }
            return b
        },
        cleanData: function(e, t) {
            var n, r, i, s, o = 0, u = v.expando, a = v.cache, f = v.support.deleteExpando, l = v.event.special;
            for (; (i = e[o]) != null; o++)
                if (t || v.acceptData(i)) {
                    r = i[u],
                    n = r && a[r];
                    if (n) {
                        if (n.events)
                            for (s in n.events)
                                l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
                        a[r] && (delete a[r],
                        f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null,
                        v.deletedIds.push(r))
                    }
                }
        }
    }),
    function() {
        var e, t;
        v.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }
        ,
        e = v.uaMatch(o.userAgent),
        t = {},
        e.browser && (t[e.browser] = !0,
        t.version = e.version),
        t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0),
        v.browser = t,
        v.sub = function() {
            function e(t, n) {
                return new e.fn.init(t,n)
            }
            v.extend(!0, e, this),
            e.superclass = this,
            e.fn = e.prototype = this(),
            e.fn.constructor = e,
            e.sub = this.sub,
            e.fn.init = function(r, i) {
                return i && i instanceof v && !(i instanceof e) && (i = e(i)),
                v.fn.init.call(this, r, i, t)
            }
            ,
            e.fn.init.prototype = e.fn;
            var t = e(i);
            return e
        }
    }();
    var Dt, Pt, Ht, Bt = /alpha\([^)]*\)/i, jt = /opacity=([^)]*)/, Ft = /^(top|right|bottom|left)$/, It = /^(none|table(?!-c[ea]).+)/, qt = /^margin/, Rt = new RegExp("^(" + m + ")(.*)$","i"), Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$","i"), zt = new RegExp("^([-+])=(" + m + ")","i"), Wt = {
        BODY: "block"
    }, Xt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Vt = {
        letterSpacing: 0,
        fontWeight: 400
    }, $t = ["Top", "Right", "Bottom", "Left"], Jt = ["Webkit", "O", "Moz", "ms"], Kt = v.fn.toggle;
    v.fn.extend({
        css: function(e, n) {
            return v.access(this, function(e, n, r) {
                return r !== t ? v.style(e, n, r) : v.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return Yt(this, !0)
        },
        hide: function() {
            return Yt(this)
        },
        toggle: function(e, t) {
            var n = typeof e == "boolean";
            return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function() {
                (n ? e : Gt(this)) ? v(this).show() : v(this).hide()
            })
        }
    }),
    v.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Dt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": v.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)
                return;
            var s, o, u, a = v.camelCase(n), f = e.style;
            n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)),
            u = v.cssHooks[n] || v.cssHooks[a];
            if (r === t)
                return u && "get"in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r,
            o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)),
            o = "number");
            if (r == null || o === "number" && isNaN(r))
                return;
            o === "number" && !v.cssNumber[a] && (r += "px");
            if (!u || !("set"in u) || (r = u.set(e, r, i)) !== t)
                try {
                    f[n] = r
                } catch (l) {}
        },
        css: function(e, n, r, i) {
            var s, o, u, a = v.camelCase(n);
            return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)),
            u = v.cssHooks[n] || v.cssHooks[a],
            u && "get"in u && (s = u.get(e, !0, i)),
            s === t && (s = Dt(e, n)),
            s === "normal" && n in Vt && (s = Vt[n]),
            r || i !== t ? (o = parseFloat(s),
            r || v.isNumeric(o) ? o || 0 : s) : s
        },
        swap: function(e, t, n) {
            var r, i, s = {};
            for (i in t)
                s[i] = e.style[i],
                e.style[i] = t[i];
            r = n.call(e);
            for (i in t)
                e.style[i] = s[i];
            return r
        }
    }),
    e.getComputedStyle ? Dt = function(t, n) {
        var r, i, s, o, u = e.getComputedStyle(t, null), a = t.style;
        return u && (r = u.getPropertyValue(n) || u[n],
        r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)),
        Ut.test(r) && qt.test(n) && (i = a.width,
        s = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = r,
        r = u.width,
        a.width = i,
        a.minWidth = s,
        a.maxWidth = o)),
        r
    }
    : i.documentElement.currentStyle && (Dt = function(e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t], s = e.style;
        return i == null && s && s[t] && (i = s[t]),
        Ut.test(i) && !Ft.test(t) && (n = s.left,
        r = e.runtimeStyle && e.runtimeStyle.left,
        r && (e.runtimeStyle.left = e.currentStyle.left),
        s.left = t === "fontSize" ? "1em" : i,
        i = s.pixelLeft + "px",
        s.left = n,
        r && (e.runtimeStyle.left = r)),
        i === "" ? "auto" : i
    }
    ),
    v.each(["height", "width"], function(e, t) {
        v.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function() {
                        return tn(e, t, r)
                    }) : tn(e, t, r)
            },
            set: function(e, n, r) {
                return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0)
            }
        }
    }),
    v.support.opacity || (v.cssHooks.opacity = {
        get: function(e, t) {
            return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , r = e.currentStyle
              , i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : ""
              , s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (r && !r.filter)
                    return
            }
            n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i
        }
    }),
    v(function() {
        v.support.reliableMarginRight || (v.cssHooks.marginRight = {
            get: function(e, t) {
                return v.swap(e, {
                    display: "inline-block"
                }, function() {
                    if (t)
                        return Dt(e, "marginRight")
                })
            }
        }),
        !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function(e, t) {
            v.cssHooks[t] = {
                get: function(e, n) {
                    if (n) {
                        var r = Dt(e, t);
                        return Ut.test(r) ? v(e).position()[t] + "px" : r
                    }
                }
            }
        })
    }),
    v.expr && v.expr.filters && (v.expr.filters.hidden = function(e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none"
    }
    ,
    v.expr.filters.visible = function(e) {
        return !v.expr.filters.hidden(e)
    }
    ),
    v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        v.cssHooks[e + t] = {
            expand: function(n) {
                var r, i = typeof n == "string" ? n.split(" ") : [n], s = {};
                for (r = 0; r < 4; r++)
                    s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
                return s
            }
        },
        qt.test(e) || (v.cssHooks[e + t].set = Zt)
    });
    var rn = /%20/g
      , sn = /\[\]$/
      , on = /\r?\n/g
      , un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
      , an = /^(?:select|textarea)/i;
    v.fn.extend({
        serialize: function() {
            return v.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? v.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type))
            }).map(function(e, t) {
                var n = v(this).val();
                return n == null ? null : v.isArray(n) ? v.map(n, function(e, n) {
                    return {
                        name: t.name,
                        value: e.replace(on, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }),
    v.param = function(e, n) {
        var r, i = [], s = function(e, t) {
            t = v.isFunction(t) ? t() : t == null ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
        if (v.isArray(e) || e.jquery && !v.isPlainObject(e))
            v.each(e, function() {
                s(this.name, this.value)
            });
        else
            for (r in e)
                fn(r, e[r], n, s);
        return i.join("&").replace(rn, "+")
    }
    ;
    var ln, cn, hn = /#.*$/, pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, vn = /^(?:GET|HEAD)$/, mn = /^\/\//, gn = /\?/, yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bn = /([?&])_=[^&]*/, wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, En = v.fn.load, Sn = {}, xn = {}, Tn = ["*/"] + ["*"];
    try {
        cn = s.href
    } catch (Nn) {
        cn = i.createElement("a"),
        cn.href = "",
        cn = cn.href
    }
    ln = wn.exec(cn.toLowerCase()) || [],
    v.fn.load = function(e, n, r) {
        if (typeof e != "string" && En)
            return En.apply(this, arguments);
        if (!this.length)
            return this;
        var i, s, o, u = this, a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length),
        e = e.slice(0, a)),
        v.isFunction(n) ? (r = n,
        n = t) : n && typeof n == "object" && (s = "POST"),
        v.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n,
            complete: function(e, t) {
                r && u.each(r, o || [e.responseText, t, e])
            }
        }).done(function(e) {
            o = arguments,
            u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e)
        }),
        this
    }
    ,
    v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        v.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    v.each(["get", "post"], function(e, n) {
        v[n] = function(e, r, i, s) {
            return v.isFunction(r) && (s = s || i,
            i = r,
            r = t),
            v.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }),
    v.extend({
        getScript: function(e, n) {
            return v.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return v.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? Ln(e, v.ajaxSettings) : (t = e,
            e = v.ajaxSettings),
            Ln(e, t),
            e
        },
        ajaxSettings: {
            url: cn,
            isLocal: dn.test(ln[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Tn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": v.parseJSON,
                "text xml": v.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Cn(Sn),
        ajaxTransport: Cn(xn),
        ajax: function(e, n) {
            function T(e, n, s, a) {
                var l, y, b, w, S, T = n;
                if (E === 2)
                    return;
                E = 2,
                u && clearTimeout(u),
                o = t,
                i = a || "",
                x.readyState = e > 0 ? 4 : 0,
                s && (w = An(c, x, s));
                if (e >= 200 && e < 300 || e === 304)
                    c.ifModified && (S = x.getResponseHeader("Last-Modified"),
                    S && (v.lastModified[r] = S),
                    S = x.getResponseHeader("Etag"),
                    S && (v.etag[r] = S)),
                    e === 304 ? (T = "notmodified",
                    l = !0) : (l = On(c, w),
                    T = l.state,
                    y = l.data,
                    b = l.error,
                    l = !b);
                else {
                    b = T;
                    if (!T || e)
                        T = "error",
                        e < 0 && (e = 0)
                }
                x.status = e,
                x.statusText = (n || T) + "",
                l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]),
                x.statusCode(g),
                g = t,
                f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]),
                m.fireWith(h, [x, T]),
                f && (p.trigger("ajaxComplete", [x, c]),
                --v.active || v.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e,
            e = t),
            n = n || {};
            var r, i, s, o, u, a, f, l, c = v.ajaxSetup({}, n), h = c.context || c, p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event, d = v.Deferred(), m = v.Callbacks("once memory"), g = c.statusCode || {}, b = {}, w = {}, E = 0, S = "canceled", x = {
                readyState: 0,
                setRequestHeader: function(e, t) {
                    if (!E) {
                        var n = e.toLowerCase();
                        e = w[n] = w[n] || e,
                        b[e] = t
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return E === 2 ? i : null
                },
                getResponseHeader: function(e) {
                    var n;
                    if (E === 2) {
                        if (!s) {
                            s = {};
                            while (n = pn.exec(i))
                                s[n[1].toLowerCase()] = n[2]
                        }
                        n = s[e.toLowerCase()]
                    }
                    return n === t ? null : n
                },
                overrideMimeType: function(e) {
                    return E || (c.mimeType = e),
                    this
                },
                abort: function(e) {
                    return e = e || S,
                    o && o.abort(e),
                    T(0, e),
                    this
                }
            };
            d.promise(x),
            x.success = x.done,
            x.error = x.fail,
            x.complete = m.add,
            x.statusCode = function(e) {
                if (e) {
                    var t;
                    if (E < 2)
                        for (t in e)
                            g[t] = [g[t], e[t]];
                    else
                        t = e[x.status],
                        x.always(t)
                }
                return this
            }
            ,
            c.url = ((e || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//"),
            c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y),
            c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()),
            c.crossDomain = !(!a || a[1] === ln[1] && a[2] === ln[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443)))),
            c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)),
            kn(Sn, c, n, x);
            if (E === 2)
                return x;
            f = c.global,
            c.type = c.type.toUpperCase(),
            c.hasContent = !vn.test(c.type),
            f && v.active++ === 0 && v.event.trigger("ajaxStart");
            if (!c.hasContent) {
                c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data,
                delete c.data),
                r = c.url;
                if (c.cache === !1) {
                    var N = v.now()
                      , C = c.url.replace(bn, "$1_=" + N);
                    c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "")
                }
            }
            (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType),
            c.ifModified && (r = r || c.url,
            v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]),
            v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])),
            x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers)
                x.setRequestHeader(l, c.headers[l]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                S = "abort";
                for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    x[l](c[l]);
                o = kn(xn, c, n, x);
                if (!o)
                    T(-1, "No Transport");
                else {
                    x.readyState = 1,
                    f && p.trigger("ajaxSend", [x, c]),
                    c.async && c.timeout > 0 && (u = setTimeout(function() {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        E = 1,
                        o.send(b, T)
                    } catch (k) {
                        if (!(E < 2))
                            throw k;
                        T(-1, k)
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Mn = []
      , _n = /\?/
      , Dn = /(=)\?(?=&|$)|\?\?/
      , Pn = v.now();
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Mn.pop() || v.expando + "_" + Pn++;
            return this[e] = !0,
            e
        }
    }),
    v.ajaxPrefilter("json jsonp", function(n, r, i) {
        var s, o, u, a = n.data, f = n.url, l = n.jsonp !== !1, c = l && Dn.test(f), h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);
        if (n.dataTypes[0] === "jsonp" || c || h)
            return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
            o = e[s],
            c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s),
            n.converters["script json"] = function() {
                return u || v.error(s + " was not called"),
                u[0]
            }
            ,
            n.dataTypes[0] = "json",
            e[s] = function() {
                u = arguments
            }
            ,
            i.always(function() {
                e[s] = o,
                n[s] && (n.jsonpCallback = r.jsonpCallback,
                Mn.push(s)),
                u && v.isFunction(o) && o(u[0]),
                u = o = t
            }),
            "script"
    }),
    v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return v.globalEval(e),
                e
            }
        }
    }),
    v.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    v.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
            return {
                send: function(s, o) {
                    n = i.createElement("script"),
                    n.async = "async",
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, i) {
                        if (i || !n.readyState || /loaded|complete/.test(n.readyState))
                            n.onload = n.onreadystatechange = null,
                            r && n.parentNode && r.removeChild(n),
                            n = t,
                            i || o(200, "success")
                    }
                    ,
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Hn, Bn = e.ActiveXObject ? function() {
        for (var e in Hn)
            Hn[e](0, 1)
    }
    : !1, jn = 0;
    v.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && Fn() || In()
    }
    : Fn,
    function(e) {
        v.extend(v.support, {
            ajax: !!e,
            cors: !!e && "withCredentials"in e
        })
    }(v.ajaxSettings.xhr()),
    v.support.ajax && v.ajaxTransport(function(n) {
        if (!n.crossDomain || v.support.cors) {
            var r;
            return {
                send: function(i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields)
                        for (u in n.xhrFields)
                            a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType),
                    !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i)
                            a.setRequestHeader(u, i[u])
                    } catch (f) {}
                    a.send(n.hasContent && n.data || null),
                    r = function(e, i) {
                        var u, f, l, c, h;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t,
                                o && (a.onreadystatechange = v.noop,
                                Bn && delete Hn[o]);
                                if (i)
                                    a.readyState !== 4 && a.abort();
                                else {
                                    u = a.status,
                                    l = a.getAllResponseHeaders(),
                                    c = {},
                                    h = a.responseXML,
                                    h && h.documentElement && (c.xml = h);
                                    try {
                                        c.text = a.responseText
                                    } catch (p) {}
                                    try {
                                        f = a.statusText
                                    } catch (p) {
                                        f = ""
                                    }
                                    !u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch (d) {
                            i || s(-1, d)
                        }
                        c && s(u, f, c, l)
                    }
                    ,
                    n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++jn,
                    Bn && (Hn || (Hn = {},
                    v(e).unload(Bn)),
                    Hn[o] = r),
                    a.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(0, 1)
                }
            }
        }
    });
    var qn, Rn, Un = /^(?:toggle|show|hide)$/, zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$","i"), Wn = /queueHooks$/, Xn = [Gn], Vn = {
        "*": [function(e, t) {
            var n, r, i = this.createTween(e, t), s = zn.exec(t), o = i.cur(), u = +o || 0, a = 1, f = 20;
            if (s) {
                n = +s[2],
                r = s[3] || (v.cssNumber[e] ? "" : "px");
                if (r !== "px" && u) {
                    u = v.css(i.elem, e, !0) || n || 1;
                    do
                        a = a || ".5",
                        u /= a,
                        v.style(i.elem, e, u + r);
                    while (a !== (a = i.cur() / o) && a !== 1 && --f)
                }
                i.unit = r,
                i.start = u,
                i.end = s[1] ? u + (s[1] + 1) * n : n
            }
            return i
        }
        ]
    };
    v.Animation = v.extend(Kn, {
        tweener: function(e, t) {
            v.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; r < i; r++)
                n = e[r],
                Vn[n] = Vn[n] || [],
                Vn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Xn.unshift(e) : Xn.push(e)
        }
    }),
    v.Tween = Yn,
    Yn.prototype = {
        constructor: Yn,
        init: function(e, t, n, r, i, s) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = s || (v.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Yn.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yn.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Yn.propHooks[this.prop];
            return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Yn.propHooks._default.set(this),
            this
        }
    },
    Yn.prototype.init.prototype = Yn.prototype,
    Yn.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""),
                !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function(e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    v.each(["toggle", "show", "hide"], function(e, t) {
        var n = v.fn[t];
        v.fn[t] = function(r, i, s) {
            return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s)
        }
    }),
    v.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Gt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = v.isEmptyObject(e)
              , s = v.speed(t, n, r)
              , o = function() {
                var t = Kn(this, v.extend({}, e), s);
                i && t.stop(!0)
            };
            return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return typeof e != "string" && (r = n,
            n = e,
            e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , n = e != null && e + "queueHooks"
                  , s = v.timers
                  , o = v._data(this);
                if (n)
                    o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o)
                        o[n] && o[n].stop && Wn.test(n) && i(o[n]);
                for (n = s.length; n--; )
                    s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r),
                    t = !1,
                    s.splice(n, 1));
                (t || !r) && v.dequeue(this, e)
            })
        }
    }),
    v.each({
        slideDown: Zn("show"),
        slideUp: Zn("hide"),
        slideToggle: Zn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        v.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    v.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? v.extend({}, e) : {
            complete: n || !n && t || v.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !v.isFunction(t) && t
        };
        r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
        if (r.queue == null || r.queue === !0)
            r.queue = "fx";
        return r.old = r.complete,
        r.complete = function() {
            v.isFunction(r.old) && r.old.call(this),
            r.queue && v.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    v.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    v.timers = [],
    v.fx = Yn.prototype.init,
    v.fx.tick = function() {
        var e, n = v.timers, r = 0;
        qn = v.now();
        for (; r < n.length; r++)
            e = n[r],
            !e() && n[r] === e && n.splice(r--, 1);
        n.length || v.fx.stop(),
        qn = t
    }
    ,
    v.fx.timer = function(e) {
        e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval))
    }
    ,
    v.fx.interval = 13,
    v.fx.stop = function() {
        clearInterval(Rn),
        Rn = null
    }
    ,
    v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    v.fx.step = {},
    v.expr && v.expr.filters && (v.expr.filters.animated = function(e) {
        return v.grep(v.timers, function(t) {
            return e === t.elem
        }).length
    }
    );
    var er = /^(?:body|html)$/i;
    v.fn.offset = function(e) {
        if (arguments.length)
            return e === t ? this : this.each(function(t) {
                v.offset.setOffset(this, e, t)
            });
        var n, r, i, s, o, u, a, f = {
            top: 0,
            left: 0
        }, l = this[0], c = l && l.ownerDocument;
        if (!c)
            return;
        return (r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement,
        v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()),
        i = tr(c),
        s = n.clientTop || r.clientTop || 0,
        o = n.clientLeft || r.clientLeft || 0,
        u = i.pageYOffset || n.scrollTop,
        a = i.pageXOffset || n.scrollLeft,
        {
            top: f.top + u - s,
            left: f.left + a - o
        }) : f)
    }
    ,
    v.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop
              , n = e.offsetLeft;
            return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0,
            n += parseFloat(v.css(e, "marginLeft")) || 0),
            {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var r = v.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = v(e), s = i.offset(), o = v.css(e, "top"), u = v.css(e, "left"), a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1, f = {}, l = {}, c, h;
            a ? (l = i.position(),
            c = l.top,
            h = l.left) : (c = parseFloat(o) || 0,
            h = parseFloat(u) || 0),
            v.isFunction(t) && (t = t.call(e, n, s)),
            t.top != null && (f.top = t.top - s.top + c),
            t.left != null && (f.left = t.left - s.left + h),
            "using"in t ? t.using.call(e, f) : i.css(f)
        }
    },
    v.fn.extend({
        position: function() {
            if (!this[0])
                return;
            var e = this[0]
              , t = this.offsetParent()
              , n = this.offset()
              , r = er.test(t[0].nodeName) ? {
                top: 0,
                left: 0
            } : t.offset();
            return n.top -= parseFloat(v.css(e, "marginTop")) || 0,
            n.left -= parseFloat(v.css(e, "marginLeft")) || 0,
            r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0,
            r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0,
            {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || i.body;
                while (e && !er.test(e.nodeName) && v.css(e, "position") === "static")
                    e = e.offsetParent;
                return e || i.body
            })
        }
    }),
    v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        v.fn[e] = function(i) {
            return v.access(this, function(e, i, s) {
                var o = tr(e);
                if (s === t)
                    return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }),
    v.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        v.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            v.fn[i] = function(i, s) {
                var o = arguments.length && (r || typeof i != "boolean")
                  , u = r || (i === !0 || s === !0 ? "margin" : "border");
                return v.access(this, function(n, r, i) {
                    var s;
                    return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement,
                    Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }),
    e.jQuery = e.$ = v,
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return v
    })
}
)(window);
;function Common_Substr(str, len) {
    str = Common_Trim(str);
    if (str.length > len) {
        return str.substring(0, len) + "...";
    } else {
        return str;
    }
}
function Common_Trim(str) {
    str = str.replace(/(^\n+)|(\n+$)/g, "").replace(/(^\s*)|(\s*$)/g, "");
    return str;
}
function Common_SetCookie(name, value, expire, path) {
    expire = expire || 10 * 12 * 30 * 24 * 60 * 60 * 1000;
    path = path || '/';
    var date = new Date();
    date.setTime(date.getTime() + expire);
    document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + date.toUTCString() + "; path=" + path;
}
function Common_GetCookies(name) {
    var re = "(?:; )?" + encodeURIComponent(name) + "=([^;]*);?";
    re = new RegExp(re);
    if (re.test(document.cookie)) {
        return decodeURIComponent(RegExp.$1);
    }
    return '';
}
function unsetCookie(name, path, domain, secure) {
    Common_SetCookie(name, "", new Date(0));
}
String.encodeHtml = function(str) {
    var res = [];
    for (var i = 0; i < str.length; i++)
        res[i] = str.charCodeAt(i);
    return "&#" + res.join(";&#") + ";";
}
;
function BaseEncode() {
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    this.encode = function(input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    }
    _utf8_encode = function(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
}
var Common_Layer = (function() {
    var creatLayer = function(id, title, text, iconClass, width) {
        var html = '<div id="commonLayer_' + id + '" class="common_layer">' + '<div class="common_layer_title"><span>' + title + '</span><a href="javascript:;" class="close"></a></div>' + '<div class="common_layer_wrap">' + '<table><tr>' + '<th style="width:' + width + 'px"><i class="' + iconClass + '"></i></th>' + '<td>' + text + '</td>' + '</tr></table>' + '</div>' + '<div class="common_layer_btn"><a href="javascript:;" class="submit">确定</a><a href="javascript:;" class="cancel">取消</a></div>' + '</div>';
        var $layer = $(html);
        $("body").append($layer);
        return $layer;
    }
      , _event_close = function($layer) {
        $layer.find(".close").click(function() {
            Common_Layer.layer_close($layer);
            return false;
        });
    }
    _event_btn = function(id, $layer) {
        eval('window.Common_Layer_Submit_' + id + ' = function(){ }');
        eval('window.Common_Layer_Cancel_' + id + ' = function(){ Common_Layer.layer_close($layer); }');
        $(".common_layer_btn .submit", $layer).click(function() {
            eval('Common_Layer_Submit_' + id + '()');
            return false;
        });
        $(".common_layer_btn .cancel", $layer).click(function() {
            eval('Common_Layer_Cancel_' + id + '($layer)');
            return false;
        });
    }
    ;
    var creatTip = function(id, text, iconClass) {
        var html = '<div id="commonTip_' + id + '" class="common_tip"><span class="left"></span>' + '<div class="common_tip_wrap"><i class="' + iconClass + '"></i><span>' + text + '</span></div>' + '<span class="right"></span></div>';
        var $tip = $(html);
        $("body").append($tip);
        return $tip;
    }
      , _tip_position = function($tip) {
        var left = parseInt($tip.width() / 2) + parseInt(100);
        $tip.css({
            "margin-left": "-" + left + "px"
        });
    }
      , _auto_close = function($tip) {
        setTimeout(function() {
            $tip.fadeOut('normal');
        }, 1 * 1000);
    };
    return {
        init_layer: function(id, text, title, iconClass, width) {
            if (typeof id == "undefined")
                return false;
            Common_Layer.layer_close();
            if (typeof title == "undefined" || title == "")
                title = "提示";
            if (typeof width == "undefined")
                width = 95;
            if (typeof text == "undefined")
                text = "";
            if (typeof iconClass == "undefined")
                iconClass = "";
            var $layer = creatLayer(id, title, text, iconClass, width);
            _event_close($layer);
            _event_btn(id, $layer);
            return $layer;
        },
        init_layer_width: function(id, text, width) {
            if (typeof id == "undefined")
                return false;
            $layer = this.init_layer(id, text, "", "", width);
            return $layer;
        },
        layer_close: function($layer) {
            if (typeof $layer == "undefined") {
                $(".common_layer", document).remove();
            } else {
                $layer.remove();
            }
        },
        init_tip: function(id, text, iconClass) {
            if (typeof id == "undefined")
                return false;
            Common_Layer.tip_close();
            if (typeof text == "undefined")
                text = "";
            if (typeof iconClass == "undefined")
                iconClass = "";
            var $tip = creatTip(id, text, iconClass);
            _tip_position($tip);
            if (iconClass != "icon4-loadding")
                _auto_close($tip);
            return $tip;
        },
        tip_close: function($tip) {
            if (typeof $tip == "undefined") {
                $(".common_tip", document).stop().remove();
            } else {
                $tip.stop().remove();
            }
        }
    };
}
)();
var funPlaceholder = function(element) {
    var placeholder = '';
    if (element && (placeholder = element.getAttribute("placeholder"))) {
        element.onfocus = function() {
            if (this.value === placeholder) {
                this.value = "";
            }
            this.style.color = '';
        }
        ;
        element.onblur = function() {
            if (this.value === "") {
                this.value = placeholder;
                this.style.color = 'graytext';
            }
        }
        ;
        var isSupport = 'placeholder'in document.createElement('input');
        if (element.value === "" && !isSupport) {
            element.value = placeholder;
            element.style.color = 'graytext';
        }
    }
};
document.onkeydown = function(e) {
    var code;
    if (!e) {
        var e = window.event;
    }
    if (e.keyCode) {
        code = e.keyCode;
    } else if (e.which) {
        code = e.which;
    }
    if ((event.keyCode == 8) && ((event.srcElement.type != "text" && event.srcElement.type != "textarea" && event.srcElement.type != "password") || event.srcElement.readOnly == true)) {
        event.keyCode = 0;
        event.returnValue = false;
    }
    return true;
}
;
function cursorMoveEnd(obj) {
    obj.focus();
    var len = obj.value.length;
    if (document.selection) {
        var sel = obj.createTextRange();
        sel.moveStart('character', len);
        sel.collapse();
        sel.select();
    } else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {
        obj.selectionStart = obj.selectionEnd = len;
    }
}
function getCursortPosition(ctrl) {
    var CaretPos = 0;
    if (document.selection) {
        ctrl.focus();
        var Sel = document.selection.createRange();
        Sel.moveStart('character', -ctrl.value.length);
        CaretPos = Sel.text.length;
    } else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
        CaretPos = ctrl.selectionStart;
    }
    return (CaretPos);
}
function setCaretPosition(ctrl, pos) {
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);
    } else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}
(function($) {
    $.fn.insertContent = function(myValue, t) {
        var $t = $(this)[0];
        if (document.selection) {
            this.focus();
            var sel = document.selection.createRange();
            sel.text = myValue;
            this.focus();
            sel.moveStart('character', -l);
            var wee = sel.text.length;
            if (arguments.length == 2) {
                var l = $t.value.length;
                sel.moveEnd("character", wee + t);
                t <= 0 ? sel.moveStart("character", wee - 2 * t - myValue.length) : sel.moveStart("character", wee - t - myValue.length);
            }
        } else if ($t.selectionStart || $t.selectionStart == '0') {
            var startPos = $t.selectionStart;
            var endPos = $t.selectionEnd;
            var scrollTop = $t.scrollTop;
            $t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
            this.focus();
            $t.selectionStart = startPos + myValue.length;
            $t.selectionEnd = startPos + myValue.length;
            $t.scrollTop = scrollTop;
            if (arguments.length == 2) {
                this.focus();
            }
        } else {
            this.value += myValue;
            this.focus();
        }
    }
    ;
}
)(jQuery);
function savePos(textBox) {
    var start = 0
      , end = 0;
    if (typeof (textBox.selectionStart) == "number") {
        start = textBox.selectionStart;
        end = textBox.selectionEnd;
    } else if (document.selection) {
        var range = document.selection.createRange();
        if (range.parentElement().id == textBox.id) {
            var range_all = document.body.createTextRange();
            range_all.moveToElementText(textBox);
            for (start = 0; range_all.compareEndPoints("StartToStart", range) < 0; start++)
                range_all.moveStart('character', 1);
            for (var i = 0; i <= start; i++) {
                if (textBox.value.charAt(i) == 'n')
                    start++;
            }
            var range_all = document.body.createTextRange();
            range_all.moveToElementText(textBox);
            for (end = 0; range_all.compareEndPoints('StartToEnd', range) < 0; end++)
                range_all.moveStart('character', 1);
            for (var i = 0; i <= end; i++) {
                if (textBox.value.charAt(i) == 'n')
                    end++;
            }
        }
    }
    return {
        "start": start,
        "end": end
    }
}
function UrlSearch() {
    var name, value;
    var str = location.href;
    var num = str.indexOf("?")
    str = str.substr(num + 1);
    var arr = str.split("&");
    for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
            name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            this[name] = value;
        }
    }
}
function IEVersion() {
    var userAgent = navigator.userAgent;
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6;
        }
    } else if (isEdge) {
        return 'edge';
    } else if (isIE11) {
        return 11;
    } else {
        return -1;
    }
}
function uesBapayOrjump(data) {
    var type = data.type ? data.type : "vip";
    var typeid = data.typeid ? data.typeid : "";
    var pst = data.pst ? data.pst : "pay_pcdownload";
    var newUrl = data.url ? data.url : '';
    var url = '';
    var lowIEJump = data.lowIEJump ? data.lowIEJump : false;
    var isie = IEVersion();
    if (lowIEJump) {
        if (checkVersionLt('11.1.0.0') || isie == 6 || isie == 7) {
            needjump();
        } else {
            client.OpenPaymentWindow(type, typeid);
        }
    } else {
        if (checkVersionLt('11.1.0.0')) {
            needjump()
        } else {
            client.OpenPaymentWindow(type, typeid);
        }
    }
    function needjump() {
        if (!newUrl) {
            if (type == "vip" || type == 'buy_vip') {
                url = 'http://music.taihe.com/vip/payment/cloud?type=add&level=gold&pst=' + pst;
            } else if (type == "album") {
                url = 'http://music.taihe.com/live/album/' + typeid + '?from=music_client';
            } else if (type == "song") {}
        } else {
            url = newUrl;
        }
        client.loginJump(url);
    }
}
function isUseByBdpayForVip(type) {
    if (checkVersionLt('11.1.0.0')) {
        client.ShowPayWnd();
    } else {
        type = type ? type : 'vip';
        client.OpenPaymentWindow(type, '');
    }
}
function isUseByBdpayForSinglePoint(songs) {
    var isie = IEVersion();
    if (checkVersionLt('11.1.0.0')) {
        client.openSinglePointPayWnd(songs);
    } else {
        var song = songs[0];
        var resource_type_ext = song.resource_type_ext ? song.resource_type_ext : 3;
        var song_id = song.song_id ? song.song_id : '';
        var album_id = song.album_id ? song.album_id : '';
        var publishtime = song.publishtime ? song.publishtime : '';
        if (song.error_code == 22469 && (resource_type_ext == 5 || resource_type_ext == 6)) {
            if (client.sucess)
                client.openSinglePointPayWnd(songs);
            return false;
        }
        if (resource_type_ext == 4 && album_id) {
            client.OpenPaymentWindow('album', album_id);
        }
        if (resource_type_ext == 3 && song_id) {
            client.OpenPaymentWindow('song', song_id);
        }
    }
}
;(function() {
    var monkey = "";
    var IMG_URL = "http://qianclick.qianqian.com/v.gif?pid=337";
    $.ClickMonkey = function(options, auto) {
        var clientInfo = {};
        try {
            var player = window.external.BaiduMusic;
            var clientInfo = player.ClientInfo;
            clientInfo = $.parseJSON(clientInfo);
        } catch (e) {}
        var defaults = {
            auto: auto,
            params: {
                cht: 0,
                ref: "musicwindow",
                ci: (String(getCookies("BAIDUID")).split(":"))[0],
                type: "click",
                ver: "undefined" == typeof clientInfo.client_version ? "" : clientInfo.client_version,
                uid: "undefined" == typeof clientInfo.user_id ? "" : clientInfo.user_id,
                cid: "undefined" == typeof clientInfo.ci ? "" : clientInfo.ci,
                viptype: "undefined" == typeof clientInfo.vip_level ? 0 : clientInfo.vip_level
            }
        };
        var op = $.extend(defaults.params, options);
        if (defaults.auto) {
            addEvent(document.body, 'mousedown', function(ev) {
                var ev = window.event || ev;
                var el = ev.srcElement || ev.target;
                if (el.tagName.toUpperCase() != "A") {
                    if (el.parentNode.tagName.toUpperCase() == "A") {
                        el = el.parentNode
                    } else {
                        if (!(el.tagName.toUpperCase() == "INPUT" && (el.type.toLowerCase() == 'checkbox' || el.type.toLowerCase() == 'radio'))) {
                            return
                        }
                    }
                }
                lg(op);
            });
        } else {
            lg(op);
        }
        return {
            log: ex_call
        }
    }
    ;
    var PREFIX = "bd_clickmonkey";
    var TH_PREFIX = "th_clickmonkey";
    var lg = function(param) {
        var da = (new Date()).getTime();
        var o = window[PREFIX + da] = new Image();
        var str = "";
        for (var i in param) {
            str += ("&" + i + "=" + param[i])
        }
        o.src = IMG_URL + "&r=" + da + str;
        o.onload = o.onerror = function() {
            o = null
        }
    };
    var enc = function(s) {
        return encodeURIComponent(s)
    };
    var addEvent = function(elm, evType, fn, useCapture) {
        if (elm.addEventListener) {
            elm.addEventListener(evType, fn, useCapture);
            return true
        } else if (elm.attachEvent) {
            var r = elm.attachEvent("on" + evType, fn);
            return r
        }
    };
    var ex_call = function(s, hr, ht) {
        lg(obj);
    }
    var getCookies = function(name) {
        var re = "(?:; )?" + encodeURIComponent(name) + "=([^;]*);?";
        re = new RegExp(re);
        if (re.test(document.cookie)) {
            return decodeURIComponent(RegExp.$1);
        }
        return '';
    }
}
)(jQuery);
(function($) {
    var rotateLeft = function(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    var addUnsigned = function(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4)
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        if (lX4 | lY4) {
            if (lResult & 0x40000000)
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            else
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    var F = function(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    var G = function(x, y, z) {
        return (x & z) | (y & (~z));
    }
    var H = function(x, y, z) {
        return (x ^ y ^ z);
    }
    var I = function(x, y, z) {
        return (y ^ (x | (~z)));
    }
    var FF = function(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };
    var GG = function(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };
    var HH = function(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };
    var II = function(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };
    var convertToWordArray = function(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWordsTempOne = lMessageLength + 8;
        var lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - (lNumberOfWordsTempOne % 64)) / 64;
        var lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };
    var wordToHex = function(lValue) {
        var WordToHexValue = "", WordToHexValueTemp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValueTemp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
        }
        return WordToHexValue;
    };
    var uTF8Encode = function(string) {
        string = string.replace(/\x0d\x0a/g, "\x0a");
        var output = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                output += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                output += String.fromCharCode((c >> 6) | 192);
                output += String.fromCharCode((c & 63) | 128);
            } else {
                output += String.fromCharCode((c >> 12) | 224);
                output += String.fromCharCode(((c >> 6) & 63) | 128);
                output += String.fromCharCode((c & 63) | 128);
            }
        }
        return output;
    };
    $.extend({
        md5: function(string) {
            var x = Array();
            var k, AA, BB, CC, DD, a, b, c, d;
            var S11 = 7
              , S12 = 12
              , S13 = 17
              , S14 = 22;
            var S21 = 5
              , S22 = 9
              , S23 = 14
              , S24 = 20;
            var S31 = 4
              , S32 = 11
              , S33 = 16
              , S34 = 23;
            var S41 = 6
              , S42 = 10
              , S43 = 15
              , S44 = 21;
            string = uTF8Encode(string);
            x = convertToWordArray(string);
            a = 0x67452301;
            b = 0xEFCDAB89;
            c = 0x98BADCFE;
            d = 0x10325476;
            for (k = 0; k < x.length; k += 16) {
                AA = a;
                BB = b;
                CC = c;
                DD = d;
                a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
                d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
                c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
                b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
                a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
                d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
                c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
                b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
                a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
                d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
                c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
                b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
                a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
                d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
                c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
                b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
                a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
                d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
                c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
                b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
                a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
                d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
                c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
                b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
                a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
                d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
                c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
                b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
                a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
                d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
                c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
                b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
                a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
                d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
                c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
                b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
                a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
                d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
                c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
                b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
                a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
                d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
                c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
                b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
                a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
                d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
                c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
                b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
                a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
                d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
                c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
                b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
                a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
                d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
                c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
                b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
                a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
                d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
                c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
                b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
                a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
                d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
                c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
                b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
                a = addUnsigned(a, AA);
                b = addUnsigned(b, BB);
                c = addUnsigned(c, CC);
                d = addUnsigned(d, DD);
            }
            var tempValue = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
            return tempValue.toLowerCase();
        }
    });
}
)(jQuery);
;var CryptoJS = CryptoJS || function(u, p) {
    var d = {}
      , l = d.lib = {}
      , s = function() {}
      , t = l.Base = {
        extend: function(a) {
            s.prototype = this;
            var c = new s;
            a && c.mixIn(a);
            c.hasOwnProperty("init") || (c.init = function() {
                c.$super.init.apply(this, arguments)
            }
            );
            c.init.prototype = c;
            c.$super = this;
            return c
        },
        create: function() {
            var a = this.extend();
            a.init.apply(a, arguments);
            return a
        },
        init: function() {},
        mixIn: function(a) {
            for (var c in a)
                a.hasOwnProperty(c) && (this[c] = a[c]);
            a.hasOwnProperty("toString") && (this.toString = a.toString)
        },
        clone: function() {
            return this.init.prototype.extend(this)
        }
    }
      , r = l.WordArray = t.extend({
        init: function(a, c) {
            a = this.words = a || [];
            this.sigBytes = c != p ? c : 4 * a.length
        },
        toString: function(a) {
            return (a || v).stringify(this)
        },
        concat: function(a) {
            var c = this.words
              , e = a.words
              , j = this.sigBytes;
            a = a.sigBytes;
            this.clamp();
            if (j % 4)
                for (var k = 0; k < a; k++)
                    c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
            else if (65535 < e.length)
                for (k = 0; k < a; k += 4)
                    c[j + k >>> 2] = e[k >>> 2];
            else
                c.push.apply(c, e);
            this.sigBytes += a;
            return this
        },
        clamp: function() {
            var a = this.words
              , c = this.sigBytes;
            a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
            a.length = u.ceil(c / 4)
        },
        clone: function() {
            var a = t.clone.call(this);
            a.words = this.words.slice(0);
            return a
        },
        random: function(a) {
            for (var c = [], e = 0; e < a; e += 4)
                c.push(4294967296 * u.random() | 0);
            return new r.init(c,a)
        }
    })
      , w = d.enc = {}
      , v = w.Hex = {
        stringify: function(a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) {
                var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                e.push((k >>> 4).toString(16));
                e.push((k & 15).toString(16))
            }
            return e.join("")
        },
        parse: function(a) {
            for (var c = a.length, e = [], j = 0; j < c; j += 2)
                e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
            return new r.init(e,c / 2)
        }
    }
      , b = w.Latin1 = {
        stringify: function(a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++)
                e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
            return e.join("")
        },
        parse: function(a) {
            for (var c = a.length, e = [], j = 0; j < c; j++)
                e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
            return new r.init(e,c)
        }
    }
      , x = w.Utf8 = {
        stringify: function(a) {
            try {
                return decodeURIComponent(escape(b.stringify(a)))
            } catch (c) {
                throw Error("Malformed UTF-8 data");
            }
        },
        parse: function(a) {
            return b.parse(unescape(encodeURIComponent(a)))
        }
    }
      , q = l.BufferedBlockAlgorithm = t.extend({
        reset: function() {
            this._data = new r.init;
            this._nDataBytes = 0
        },
        _append: function(a) {
            "string" == typeof a && (a = x.parse(a));
            this._data.concat(a);
            this._nDataBytes += a.sigBytes
        },
        _process: function(a) {
            var c = this._data
              , e = c.words
              , j = c.sigBytes
              , k = this.blockSize
              , b = j / (4 * k)
              , b = a ? u.ceil(b) : u.max((b | 0) - this._minBufferSize, 0);
            a = b * k;
            j = u.min(4 * a, j);
            if (a) {
                for (var q = 0; q < a; q += k)
                    this._doProcessBlock(e, q);
                q = e.splice(0, a);
                c.sigBytes -= j
            }
            return new r.init(q,j)
        },
        clone: function() {
            var a = t.clone.call(this);
            a._data = this._data.clone();
            return a
        },
        _minBufferSize: 0
    });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function() {
            q.reset.call(this);
            this._doReset()
        },
        update: function(a) {
            this._append(a);
            this._process();
            return this
        },
        finalize: function(a) {
            a && this._append(a);
            return this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(a) {
            return function(b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        _createHmacHelper: function(a) {
            return function(b, e) {
                return (new n.HMAC.init(a,e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function() {
    var u = CryptoJS
      , p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function(d) {
            var l = d.words
              , p = d.sigBytes
              , t = this._map;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + 0.75 * v < p; v++)
                    d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))
                for (; d.length % 4; )
                    d.push(l);
            return d.join("")
        },
        parse: function(d) {
            var l = d.length
              , s = this._map
              , t = s.charAt(64);
            t && (t = d.indexOf(t),
            -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++)
                if (w % 4) {
                    var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4)
                      , b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++
                }
            return p.create(t, r)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
}
)();
(function(u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++)
        b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        _doReset: function() {
            this._hash = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function(q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a
                  , e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this._hash.words
              , c = q[n + 0]
              , e = q[n + 1]
              , j = q[n + 2]
              , k = q[n + 3]
              , z = q[n + 4]
              , r = q[n + 5]
              , t = q[n + 6]
              , w = q[n + 7]
              , v = q[n + 8]
              , A = q[n + 9]
              , B = q[n + 10]
              , C = q[n + 11]
              , u = q[n + 12]
              , D = q[n + 13]
              , E = q[n + 14]
              , x = q[n + 15]
              , f = a[0]
              , m = a[1]
              , g = a[2]
              , h = a[3]
              , f = p(f, m, g, h, c, 7, b[0])
              , h = p(h, f, m, g, e, 12, b[1])
              , g = p(g, h, f, m, j, 17, b[2])
              , m = p(m, g, h, f, k, 22, b[3])
              , f = p(f, m, g, h, z, 7, b[4])
              , h = p(h, f, m, g, r, 12, b[5])
              , g = p(g, h, f, m, t, 17, b[6])
              , m = p(m, g, h, f, w, 22, b[7])
              , f = p(f, m, g, h, v, 7, b[8])
              , h = p(h, f, m, g, A, 12, b[9])
              , g = p(g, h, f, m, B, 17, b[10])
              , m = p(m, g, h, f, C, 22, b[11])
              , f = p(f, m, g, h, u, 7, b[12])
              , h = p(h, f, m, g, D, 12, b[13])
              , g = p(g, h, f, m, E, 17, b[14])
              , m = p(m, g, h, f, x, 22, b[15])
              , f = d(f, m, g, h, e, 5, b[16])
              , h = d(h, f, m, g, t, 9, b[17])
              , g = d(g, h, f, m, C, 14, b[18])
              , m = d(m, g, h, f, c, 20, b[19])
              , f = d(f, m, g, h, r, 5, b[20])
              , h = d(h, f, m, g, B, 9, b[21])
              , g = d(g, h, f, m, x, 14, b[22])
              , m = d(m, g, h, f, z, 20, b[23])
              , f = d(f, m, g, h, A, 5, b[24])
              , h = d(h, f, m, g, E, 9, b[25])
              , g = d(g, h, f, m, k, 14, b[26])
              , m = d(m, g, h, f, v, 20, b[27])
              , f = d(f, m, g, h, D, 5, b[28])
              , h = d(h, f, m, g, j, 9, b[29])
              , g = d(g, h, f, m, w, 14, b[30])
              , m = d(m, g, h, f, u, 20, b[31])
              , f = l(f, m, g, h, r, 4, b[32])
              , h = l(h, f, m, g, v, 11, b[33])
              , g = l(g, h, f, m, C, 16, b[34])
              , m = l(m, g, h, f, E, 23, b[35])
              , f = l(f, m, g, h, e, 4, b[36])
              , h = l(h, f, m, g, z, 11, b[37])
              , g = l(g, h, f, m, w, 16, b[38])
              , m = l(m, g, h, f, B, 23, b[39])
              , f = l(f, m, g, h, D, 4, b[40])
              , h = l(h, f, m, g, c, 11, b[41])
              , g = l(g, h, f, m, k, 16, b[42])
              , m = l(m, g, h, f, t, 23, b[43])
              , f = l(f, m, g, h, A, 4, b[44])
              , h = l(h, f, m, g, u, 11, b[45])
              , g = l(g, h, f, m, x, 16, b[46])
              , m = l(m, g, h, f, j, 23, b[47])
              , f = s(f, m, g, h, c, 6, b[48])
              , h = s(h, f, m, g, w, 10, b[49])
              , g = s(g, h, f, m, E, 15, b[50])
              , m = s(m, g, h, f, r, 21, b[51])
              , f = s(f, m, g, h, u, 6, b[52])
              , h = s(h, f, m, g, k, 10, b[53])
              , g = s(g, h, f, m, B, 15, b[54])
              , m = s(m, g, h, f, e, 21, b[55])
              , f = s(f, m, g, h, v, 6, b[56])
              , h = s(h, f, m, g, x, 10, b[57])
              , g = s(g, h, f, m, t, 15, b[58])
              , m = s(m, g, h, f, D, 21, b[59])
              , f = s(f, m, g, h, z, 6, b[60])
              , h = s(h, f, m, g, C, 10, b[61])
              , g = s(g, h, f, m, j, 15, b[62])
              , m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        _doFinalize: function() {
            var b = this._data
              , n = b.words
              , a = 8 * this._nDataBytes
              , c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this._process();
            b = this._hash;
            n = b.words;
            for (a = 0; 4 > a; a++)
                c = n[a],
                n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function() {
            var b = v.clone.call(this);
            b._hash = this._hash.clone();
            return b
        }
    });
    t.MD5 = v._createHelper(r);
    t.HmacMD5 = v._createHmacHelper(r)
}
)(Math);
(function() {
    var u = CryptoJS
      , p = u.lib
      , d = p.Base
      , l = p.WordArray
      , p = u.algo
      , s = p.EvpKDF = d.extend({
        cfg: d.extend({
            keySize: 4,
            hasher: p.MD5,
            iterations: 1
        }),
        init: function(d) {
            this.cfg = this.cfg.extend(d)
        },
        compute: function(d, r) {
            for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q; ) {
                n && s.update(n);
                var n = s.update(d).finalize(r);
                s.reset();
                for (var a = 1; a < p; a++)
                    n = s.finalize(n),
                    s.reset();
                b.concat(n)
            }
            b.sigBytes = 4 * q;
            return b
        }
    });
    u.EvpKDF = function(d, l, p) {
        return s.create(p).compute(d, l)
    }
}
)();
CryptoJS.lib.Cipher || function(u) {
    var p = CryptoJS
      , d = p.lib
      , l = d.Base
      , s = d.WordArray
      , t = d.BufferedBlockAlgorithm
      , r = p.enc.Base64
      , w = p.algo.EvpKDF
      , v = d.Cipher = t.extend({
        cfg: l.extend(),
        createEncryptor: function(e, a) {
            return this.create(this._ENC_XFORM_MODE, e, a)
        },
        createDecryptor: function(e, a) {
            return this.create(this._DEC_XFORM_MODE, e, a)
        },
        init: function(e, a, b) {
            this.cfg = this.cfg.extend(b);
            this._xformMode = e;
            this._key = a;
            this.reset()
        },
        reset: function() {
            t.reset.call(this);
            this._doReset()
        },
        process: function(e) {
            this._append(e);
            return this._process()
        },
        finalize: function(e) {
            e && this._append(e);
            return this._doFinalize()
        },
        keySize: 4,
        ivSize: 4,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: function(e) {
            return {
                encrypt: function(b, k, d) {
                    return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                },
                decrypt: function(b, k, d) {
                    return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                }
            }
        }
    });
    d.StreamCipher = v.extend({
        _doFinalize: function() {
            return this._process(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {}
      , x = function(e, a, b) {
        var c = this._iv;
        c ? this._iv = u : c = this._prevBlock;
        for (var d = 0; d < b; d++)
            e[a + d] ^= c[d]
    }
      , q = (d.BlockCipherMode = l.extend({
        createEncryptor: function(e, a) {
            return this.Encryptor.create(e, a)
        },
        createDecryptor: function(e, a) {
            return this.Decryptor.create(e, a)
        },
        init: function(e, a) {
            this._cipher = e;
            this._iv = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function(e, a) {
            var b = this._cipher
              , c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this._prevBlock = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function(e, a) {
            var b = this._cipher
              , c = b.blockSize
              , d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this._prevBlock = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function(a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4)
                l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function(a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function() {
            v.reset.call(this);
            var a = this.cfg
              , b = a.iv
              , a = a.mode;
            if (this._xformMode == this._ENC_XFORM_MODE)
                var c = a.createEncryptor;
            else
                c = a.createDecryptor,
                this._minBufferSize = 1;
            this._mode = c.call(a, this, b && b.words)
        },
        _doProcessBlock: function(a, b) {
            this._mode.processBlock(a, b)
        },
        _doFinalize: function() {
            var a = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                a.pad(this._data, this.blockSize);
                var b = this._process(!0)
            } else
                b = this._process(!0),
                a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
        init: function(a) {
            this.mixIn(a)
        },
        toString: function(a) {
            return (a || this.formatter).stringify(this)
        }
    })
      , b = (p.format = {}).OpenSSL = {
        stringify: function(a) {
            var b = a.ciphertext;
            a = a.salt;
            return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
        },
        parse: function(a) {
            a = r.parse(a);
            var b = a.words;
            if (1398893684 == b[0] && 1701076831 == b[1]) {
                var c = s.create(b.slice(2, 4));
                b.splice(0, 4);
                a.sigBytes -= 16
            }
            return n.create({
                ciphertext: a,
                salt: c
            })
        }
    }
      , a = d.SerializableCipher = l.extend({
        cfg: l.extend({
            format: b
        }),
        encrypt: function(a, b, c, d) {
            d = this.cfg.extend(d);
            var l = a.createEncryptor(c, d);
            b = l.finalize(b);
            l = l.cfg;
            return n.create({
                ciphertext: b,
                key: c,
                iv: l.iv,
                algorithm: a,
                mode: l.mode,
                padding: l.padding,
                blockSize: a.blockSize,
                formatter: d.format
            })
        },
        decrypt: function(a, b, c, d) {
            d = this.cfg.extend(d);
            b = this._parse(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        },
        _parse: function(a, b) {
            return "string" == typeof a ? b.parse(a, this) : a
        }
    })
      , p = (p.kdf = {}).OpenSSL = {
        execute: function(a, b, c, d) {
            d || (d = s.random(8));
            a = w.create({
                keySize: b + c
            }).compute(a, d);
            c = s.create(a.words.slice(b), 4 * c);
            a.sigBytes = 4 * b;
            return n.create({
                key: a,
                iv: c,
                salt: d
            })
        }
    }
      , c = d.PasswordBasedCipher = a.extend({
        cfg: a.cfg.extend({
            kdf: p
        }),
        encrypt: function(b, c, d, l) {
            l = this.cfg.extend(l);
            d = l.kdf.execute(d, b.keySize, b.ivSize);
            l.iv = d.iv;
            b = a.encrypt.call(this, b, c, d.key, l);
            b.mixIn(d);
            return b
        },
        decrypt: function(b, c, d, l) {
            l = this.cfg.extend(l);
            c = this._parse(c, l.format);
            d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
            l.iv = d.iv;
            return a.decrypt.call(this, b, c, d.key, l)
        }
    })
}();
(function() {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++)
        a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4
          , k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e]
          , F = a[z]
          , G = a[F]
          , y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]],
        j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
      , d = d.AES = p.extend({
        _doReset: function() {
            for (var a = this._key, c = a.words, d = a.sigBytes / 4, a = 4 * ((this._nRounds = d + 6) + 1), e = this._keySchedule = [], j = 0; j < a; j++)
                if (j < d)
                    e[j] = c[j];
                else {
                    var k = e[j - 1];
                    j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24,
                    k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255],
                    k ^= H[j / d | 0] << 24);
                    e[j] = e[j - d] ^ k
                }
            c = this._invKeySchedule = [];
            for (d = 0; d < a; d++)
                j = a - d,
                k = d % 4 ? e[j] : e[j - 4],
                c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
        },
        encryptBlock: function(a, b) {
            this._doCryptBlock(a, b, this._keySchedule, t, r, w, v, l)
        },
        decryptBlock: function(a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this._doCryptBlock(a, c, this._invKeySchedule, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d
        },
        _doCryptBlock: function(a, b, c, d, e, j, l, f) {
            for (var m = this._nRounds, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++)
                var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++]
                  , s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++]
                  , t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++]
                  , n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++]
                  , g = q
                  , h = s
                  , k = t;
            q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
            s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
            t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
            n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
            a[b] = q;
            a[b + 1] = s;
            a[b + 2] = t;
            a[b + 3] = n
        },
        keySize: 8
    });
    u.AES = p._createHelper(d)
}
)();
;if (typeof JSON !== "object") {
    JSON = {};
}
(function() {
    "use strict";
    var rx_one = /^[\],:{}\s]*$/;
    var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
    var rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    function f(n) {
        return n < 10 ? "0" + n : n;
    }
    function this_value() {
        return this.valueOf();
    }
    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
        }
        ;
        Boolean.prototype.toJSON = this_value;
        Number.prototype.toJSON = this_value;
        String.prototype.toJSON = this_value;
    }
    var gap;
    var indent;
    var meta;
    var rep;
    function quote(string) {
        rx_escapable.lastIndex = 0;
        return rx_escapable.test(string) ? "\"" + string.replace(rx_escapable, function(a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        }) + "\"" : "\"" + string + "\"";
    }
    function str(key, holder) {
        var i;
        var k;
        var v;
        var length;
        var mind = gap;
        var partial;
        var value = holder[key];
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
            value = value.toJSON(key);
        }
        if (typeof rep === "function") {
            value = rep.call(holder, key, value);
        }
        switch (typeof value) {
        case "string":
            return quote(value);
        case "number":
            return isFinite(value) ? String(value) : "null";
        case "boolean":
        case "null":
            return String(value);
        case "object":
            if (!value) {
                return "null";
            }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === "[object Array]") {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || "null";
                }
                v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                gap = mind;
                return v;
            }
            if (rep && typeof rep === "object") {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === "string") {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v);
                        }
                    }
                }
            } else {
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v);
                        }
                    }
                }
            }
            v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
            gap = mind;
            return v;
        }
    }
    if (typeof JSON.stringify !== "function") {
        meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            "\"": "\\\"",
            "\\": "\\\\"
        };
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " ";
                }
            } else if (typeof space === "string") {
                indent = space;
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify");
            }
            return str("", {
                "": value
            });
        }
        ;
    }
    if (typeof JSON.parse !== "function") {
        JSON.parse = function(text, reviver) {
            var j;
            function walk(holder, key) {
                var k;
                var v;
                var value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }
            text = String(text);
            rx_dangerous.lastIndex = 0;
            if (rx_dangerous.test(text)) {
                text = text.replace(rx_dangerous, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }
            if (rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) {
                j = eval("(" + text + ")");
                return (typeof reviver === "function") ? walk({
                    "": j
                }, "") : j;
            }
            throw new SyntaxError("JSON.parse");
        }
        ;
    }
}());
;/*!art-template - Template Engine | http://aui.github.com/artTemplate/*/
!function() {
    function a(a) {
        return a.replace(t, "").replace(u, ",").replace(v, "").replace(w, "").replace(x, "").split(y)
    }
    function b(a) {
        return "'" + a.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
    }
    function c(c, d) {
        function e(a) {
            return m += a.split(/\n/).length - 1,
            k && (a = a.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")),
            a && (a = s[1] + b(a) + s[2] + "\n"),
            a
        }
        function f(b) {
            var c = m;
            if (j ? b = j(b, d) : g && (b = b.replace(/\n/g, function() {
                return m++,
                "$line=" + m + ";"
            })),
            0 === b.indexOf("=")) {
                var e = l && !/^=[=#]/.test(b);
                if (b = b.replace(/^=[=#]?|[\s;]*$/g, ""),
                e) {
                    var f = b.replace(/\s*\([^\)]+\)/, "");
                    n[f] || /^(include|print)$/.test(f) || (b = "$escape(" + b + ")")
                } else
                    b = "$string(" + b + ")";
                b = s[1] + b + s[2]
            }
            return g && (b = "$line=" + c + ";" + b),
            r(a(b), function(a) {
                if (a && !p[a]) {
                    var b;
                    b = "print" === a ? u : "include" === a ? v : n[a] ? "$utils." + a : o[a] ? "$helpers." + a : "$data." + a,
                    w += a + "=" + b + ",",
                    p[a] = !0
                }
            }),
            b + "\n"
        }
        var g = d.debug
          , h = d.openTag
          , i = d.closeTag
          , j = d.parser
          , k = d.compress
          , l = d.escape
          , m = 1
          , p = {
            $data: 1,
            $filename: 1,
            $utils: 1,
            $helpers: 1,
            $out: 1,
            $line: 1
        }
          , q = "".trim
          , s = q ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"]
          , t = q ? "$out+=text;return $out;" : "$out.push(text);"
          , u = "function(){var text=''.concat.apply('',arguments);" + t + "}"
          , v = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + t + "}"
          , w = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (g ? "$line=0," : "")
          , x = s[0]
          , y = "return new String(" + s[3] + ");";
        r(c.split(h), function(a) {
            a = a.split(i);
            var b = a[0]
              , c = a[1];
            1 === a.length ? x += e(b) : (x += f(b),
            c && (x += e(c)))
        });
        var z = w + x + y;
        g && (z = "try{" + z + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + b(c) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");
        try {
            var A = new Function("$data","$filename",z);
            return A.prototype = n,
            A
        } catch (B) {
            throw B.temp = "function anonymous($data,$filename) {" + z + "}",
            B
        }
    }
    var d = function(a, b) {
        return "string" == typeof b ? q(b, {
            filename: a
        }) : g(a, b)
    };
    d.version = "3.0.0",
    d.config = function(a, b) {
        e[a] = b
    }
    ;
    var e = d.defaults = {
        openTag: "<%",
        closeTag: "%>",
        escape: !0,
        cache: !0,
        compress: !1,
        parser: null
    }
      , f = d.cache = {};
    d.render = function(a, b) {
        return q(a, b)
    }
    ;
    var g = d.renderFile = function(a, b) {
        var c = d.get(a) || p({
            filename: a,
            name: "Render Error",
            message: "Template not found"
        });
        return b ? c(b) : c
    }
    ;
    d.get = function(a) {
        var b;
        if (f[a])
            b = f[a];
        else if ("object" == typeof document) {
            var c = document.getElementById(a);
            if (c) {
                var d = (c.value || c.innerHTML).replace(/^\s*|\s*$/g, "");
                b = q(d, {
                    filename: a
                })
            }
        }
        return b
    }
    ;
    var h = function(a, b) {
        return "string" != typeof a && (b = typeof a,
        "number" === b ? a += "" : a = "function" === b ? h(a.call(a)) : ""),
        a
    }
      , i = {
        "<": "&#60;",
        ">": "&#62;",
        '"': "&#34;",
        "'": "&#39;",
        "&": "&#38;"
    }
      , j = function(a) {
        return i[a]
    }
      , k = function(a) {
        return h(a).replace(/&(?![\w#]+;)|[<>"']/g, j)
    }
      , l = Array.isArray || function(a) {
        return "[object Array]" === {}.toString.call(a)
    }
      , m = function(a, b) {
        var c, d;
        if (l(a))
            for (c = 0,
            d = a.length; d > c; c++)
                b.call(a, a[c], c, a);
        else
            for (c in a)
                b.call(a, a[c], c)
    }
      , n = d.utils = {
        $helpers: {},
        $include: g,
        $string: h,
        $escape: k,
        $each: m
    };
    d.helper = function(a, b) {
        o[a] = b
    }
    ;
    var o = d.helpers = n.$helpers;
    d.onerror = function(a) {
        var b = "Template Error\n\n";
        for (var c in a)
            b += "<" + c + ">\n" + a[c] + "\n\n";
        "object" == typeof console && console.error(b)
    }
    ;
    var p = function(a) {
        return d.onerror(a),
        function() {
            return "{Template Error}"
        }
    }
      , q = d.compile = function(a, b) {
        function d(c) {
            try {
                return new i(c,h) + ""
            } catch (d) {
                return b.debug ? p(d)() : (b.debug = !0,
                q(a, b)(c))
            }
        }
        b = b || {};
        for (var g in e)
            void 0 === b[g] && (b[g] = e[g]);
        var h = b.filename;
        try {
            var i = c(a, b)
        } catch (j) {
            return j.filename = h || "anonymous",
            j.name = "Syntax Error",
            p(j)
        }
        return d.prototype = i.prototype,
        d.toString = function() {
            return i.toString()
        }
        ,
        h && b.cache && (f[h] = d),
        d
    }
      , r = n.$each
      , s = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined"
      , t = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g
      , u = /[^\w$]+/g
      , v = new RegExp(["\\b" + s.replace(/,/g, "\\b|\\b") + "\\b"].join("|"),"g")
      , w = /^\d[^,]*|,\d[^,]*/g
      , x = /^,+|,+$/g
      , y = /^$|,+/;
    e.openTag = "{{",
    e.closeTag = "}}";
    var z = function(a, b) {
        var c = b.split(":")
          , d = c.shift()
          , e = c.join(":") || "";
        return e && (e = ", " + e),
        "$helpers." + d + "(" + a + e + ")"
    };
    e.parser = function(a) {
        a = a.replace(/^\s/, "");
        var b = a.split(" ")
          , c = b.shift()
          , e = b.join(" ");
        switch (c) {
        case "if":
            a = "if(" + e + "){";
            break;
        case "else":
            b = "if" === b.shift() ? " if(" + b.join(" ") + ")" : "",
            a = "}else" + b + "{";
            break;
        case "/if":
            a = "}";
            break;
        case "each":
            var f = b[0] || "$data"
              , g = b[1] || "as"
              , h = b[2] || "$value"
              , i = b[3] || "$index"
              , j = h + "," + i;
            "as" !== g && (f = "[]"),
            a = "$each(" + f + ",function(" + j + "){";
            break;
        case "/each":
            a = "});";
            break;
        case "echo":
            a = "print(" + e + ");";
            break;
        case "print":
        case "include":
            a = c + "(" + b.join(",") + ");";
            break;
        default:
            if (/^\s*\|\s*[\w\$]/.test(e)) {
                var k = !0;
                0 === a.indexOf("#") && (a = a.substr(1),
                k = !1);
                for (var l = 0, m = a.split("|"), n = m.length, o = m[l++]; n > l; l++)
                    o = z(o, m[l]);
                a = (k ? "=" : "=#") + o
            } else
                a = d.helpers[c] ? "=#" + c + "(" + b.join(",") + ");" : "=" + a
        }
        return a
    }
    ,
    "function" == typeof define ? define(function() {
        return d
    }) : "undefined" != typeof exports ? module.exports = d : this.template = d
}();
;function UGC() {
    this.api = '/v1/restserver/ting?';
    this.host = "";
    this.SUCCESS_CODE = 22000;
    this.size = 20;
    this.timeout = 4000;
    this.ajaxFun = function(paramsJson) {
        var bduss = ""
          , token = ""
          , version = "10.1.8";
        if (client.sucess) {
            token = client.getClientInfo().token_;
            bduss = client.getClientInfo().bduss;
            version = client.getClientInfo().client_version;
        }
        var type = paramsJson.type ? paramsJson : 'get';
        if (paramsJson.url == '') {
            this.output('ajax缺少url参数');
            return false;
        }
        var url = paramsJson.url + '&time=' + (+new Date());
        var isNeedPassEncode = (typeof paramsJson.isNeedPassEncode != 'undefined') ? paramsJson.isNeedPassEncode : true;
        var data = paramsJson.data ? paramsJson.data : '';
        data = $.extend({
            "from": "qianqianmini",
            "version": version
        }, data);
        if (bduss) {
            data = $.extend({
                "bduss": bduss
            }, data);
        } else if (token) {
            data = $.extend({
                "token_": token
            }, data);
        }
        if (isNeedPassEncode) {
            data = aesPassEncod(data);
        }
        var beforeSendFun = paramsJson.beforeSendFun ? paramsJson.beforeSendFun : '';
        var errorFun = paramsJson.errorFun ? paramsJson.errorFun : this.ajaxError;
        var timeout = this.timeout;
        var async = typeof paramsJson.async != 'undefined' ? paramsJson.async : true;
        return $.ajax({
            type: type,
            url: url,
            async: async,
            dataType: "json",
            data: data,
            timeout: timeout,
            beforeSend: beforeSendFun,
            error: errorFun
        });
    }
    ;
    this.ajaxError = function(jqXHR, textStatus, errorThrown) {
        if (textStatus == "timeout") {
            Common_Layer.init_tip('addSuccess', "网络似乎没连好，请检查连接", 'icon2');
        }
    }
    this.output = function(errormsg) {
        alert(errormsg);
    }
    ;
    this.isLogin = function() {
        var isNeedLogin = typeof arguments[0] != "undefined" ? arguments[0] : true;
        var client = new Client();
        if (client.sucess) {
            clientInfo = client.getClientInfo();
            var bduss = clientInfo.bduss
              , token_ = clientInfo.token_;
            if ((typeof bduss == "undefined" || bduss == "") && (typeof token_ == "undefined" || token_ == "")) {
                if (isNeedLogin)
                    client.clientLogin(0);
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }
    ;
    this.getAllBiaoshiIcon = function() {
        var params = {
            "url": this.api + 'method=baidu.ting.song.getBiaoShiPic',
            "data": {},
            "async": false
        };
        return this.ajaxFun(params);
    }
    ;
    this.pagnation = function(containerId, options) {
        var args = $.extend({
            pageCount: 10,
            current: 1,
            backFn: function() {}
        }, options);
        if (args.pageCount > 1) {
            $("#" + containerId).find('.page_num').createPage(args);
        }
    }
    ;
    this.generateCacheKey = function(_url, _data) {
        return _url + $.param(_data);
    }
    ;
    this.setProxyCache = function(_url, _data) {
        var cacheKey = generateCacheKey(_url, _data);
        return cache[cacheKey] = {
            res: res,
            cacheStartTime: +new Date()
        };
    }
    ;
    this.getProxyCahce = function(_url, _data) {
        var cacheKey = _url + $.param(_data)
          , cacheItem = cache[cacheKey]
          , isCacheValid = false;
        if (cacheItem) {
            var curTime = +new Date();
            if (curTime - cacheItem.cacheStartTime <= cacheInterval) {
                isCacheValid = true;
            } else {
                delete cache[cacheKey];
            }
        }
        if (isCacheValid) {
            var $defer = $.Deferred();
            setTimeout(function() {
                $defer.resolve(cacheItem.res);
            }, 10);
            return $.when($defer);
        }
        return Ajax[i].apply(Ajax, arguments).done(function(res) {
            cache[cacheKey] = {
                res: res,
                cacheStartTime: +new Date()
            }
        });
    }
    ;
}
function aesPassEncod(jsonData) {
    var timestamp = Math.floor(new Date().getTime() / 1000);
    var privateKey = $.md5('baidu_taihe_music_secret_key' + timestamp)
      , privateKey = privateKey.substr(8, 16)
      , iv = privateKey;
    var arrData = []
      , strData = '';
    for (var key in jsonData) {
        arrData.push(key);
    }
    arrData.sort();
    for (var i = 0; i < arrData.length; i++) {
        var key = arrData[i];
        strData += (i === 0 ? '' : '&') + key + '=' + encodeURIComponent(jsonData[key]);
    }
    var JsonFormatter = {
        stringify: function(cipherParams) {
            var jsonObj = {
                ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)
            };
            if (cipherParams.iv) {
                jsonObj.iv = cipherParams.iv.toString();
            }
            if (cipherParams.salt) {
                jsonObj.s = cipherParams.salt.toString();
            }
            return jsonObj;
        },
        parse: function(jsonStr) {
            var jsonObj = JSON.parse(jsonStr);
            var cipherParams = CryptoJS.lib.CipherParams.create({
                ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct)
            });
            if (jsonObj.iv) {
                cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv)
            }
            if (jsonObj.s) {
                cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s)
            }
            return cipherParams;
        }
    };
    var key = CryptoJS.enc.Utf8.parse(privateKey);
    var iv = CryptoJS.enc.Utf8.parse(privateKey);
    var encrypted = CryptoJS.AES.encrypt(strData, key, {
        iv: iv,
        blockSize: 16,
        mode: CryptoJS.mode.CBC,
        format: JsonFormatter
    });
    var ciphertext = encrypted.toString().ct;
    var sign = $.md5('baidu_taihe_music' + ciphertext + timestamp);
    var jsonRet = {
        timestamp: timestamp,
        param: ciphertext,
        sign: sign
    };
    return jsonRet;
}
;function MsgInterface() {
    this.errorJson = {
        "22001": "添加失败，请稍后再试",
        "22102": "没有合适的匹配结果",
        "22005": "参数错误",
        "22231": "抱歉,我们发现您填写的文字中涉及限制内容,请修改后再尝试发送~",
        "22452": "请您先登录",
        "22709": "字数不能超过120字",
        "22011": "您发布的太频繁了，请稍后再发",
        "22716": "该用户被封禁"
    };
    this.size = 20;
    this.addComment = function(options) {
        if (!this.isLogin()) {
            return false;
        }
        var data = $.extend({
            "comm_content": "",
            "type_id": "",
            "type": ""
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcmsg.addComment',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
    this.getCommentListByType = function(options) {
        var data = $.extend({
            "type_id": "",
            "type": "",
            "size": this.size,
            "offset": "0"
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcmsg.getCommentListByType',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
    this.delMsg = function(options) {
        if (!this.isLogin()) {
            return false;
        }
        var data = $.extend({
            "type_id": "",
            "comm_id": "",
            "type": "1"
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcmsg.delMsg',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
    this.isOwer = function(options) {
        var params = $.extend({
            "url": this.api + 'method=baidu.ting.ugcmsg.isOwer',
            "data": {
                "type_id": "",
                "reply_id": ""
            }
        }, options);
        return this.ajaxFun(params);
    }
    ;
    this.getMsgStates = function(options) {
        var data = $.extend({
            "size": this.size,
            "offset": "0"
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcmsg.getMsgStates',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
    this.recvMessage = function(options) {
        var data = $.extend({
            "msg_type": "",
            "size": this.size,
            "order": "",
            "msg_id": "",
            "timestamp": "",
            "dst_uid": "",
            "app": "qianqianmini"
        }, options.data);
        var beforeSendFun = options.beforeSendFun;
        var params = {
            "url": this.api + 'method=baidu.ting.ugcmsg.recvMessage',
            "data": data,
            "beforeSendFun": beforeSendFun
        };
        return this.ajaxFun(params);
    }
    ;
    this.getContactList = function(options) {
        var data = $.extend({
            "size": this.size,
            "msg_id": "",
            "app": "qianqianmini",
            "last_uid": ""
        }, options.data);
        var beforeSendFun = options.beforeSendFun;
        var params = $.extend({
            "url": this.api + 'method=baidu.ting.ugcmsg.getContactList',
            "data": data,
            "beforeSendFun": beforeSendFun
        }, options);
        return this.ajaxFun(params);
    }
    ;
    this.getLastUser = function(options) {
        var data = options.data;
        var beforeSendFun = options.beforeSendFun;
        var params = {
            "url": this.api + 'method=baidu.ting.ugcmsg.getLastUser',
            "data": data,
            "beforeSendFun": beforeSendFun
        };
        return this.ajaxFun(params);
    }
    ;
    this.delMessage = function(data) {
        var params = {
            "url": this.api + 'method=baidu.ting.ugcmsg.delMessage',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
}
MsgInterface.prototype = new UGC();
;function FavorInterface() {
    this.errorJson = {
        "22001": "操作失败",
        "22005": "参数错误",
        "22009": "没有权限",
        "22452": "请您先登录",
        "22688": "您已经点过赞了"
    };
    this.addFav = function(options) {
        if (!this.isLogin()) {
            return false;
        }
        var data = $.extend({
            "type_id": "",
            "type": "1",
            "author_id": ""
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcfav.addFav',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
    this.delFav = function(options) {
        if (!this.isLogin()) {
            return false;
        }
        var data = $.extend({
            "comm_id": "",
            "type_id": "",
            "type": ""
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcfav.delFav',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
    this.getList = function(options) {
        if (!this.isLogin()) {
            return false;
        }
        var params = $.extend({
            "url": this.api + 'method=baidu.ting.ugcmsg.getInfoOfVip',
            "data": {
                "type_id": "",
                "type": "",
                "size": "",
                "offset": ""
            }
        }, options);
        return this.ajaxFun(params);
    }
}
FavorInterface.prototype = new UGC();
;function FeedBackInterface() {
    this.errorJson = {
        "22001": "举报失败",
        "22005": "参数错误",
        "22452": "请您先登录",
        "22711": "已成功举报"
    };
    this.getlist = function() {
        var params = {
            "url": this.api + 'method=baidu.ting.ugcfeedback.getlist'
        }
        return this.ajaxFun(params);
    }
    ;
    this.addInfo = function(options) {
        if (!this.isLogin()) {
            return false;
        }
        var data = $.extend({
            "report_id": "",
            "msg_id": "",
            "type": "",
            "report_content": "",
            "report_tag": "",
            "type_id": ""
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcfeedback.addInfo',
            "data": data
        }
        return this.ajaxFun(params);
    }
    ;
}
FeedBackInterface.prototype = new UGC();
;function DiyInterface() {
    this.errorJson = {
        "1": "api错误",
        "2": "api错误2"
    };
    this.size = 20;
    this.getChanneldiy = function(options) {
        var data = $.extend({
            "channelname": "全部",
            "size": this.size,
            "offset": "0",
            "order_type": "1"
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcdiy.getChanneldiy',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
    this.getChannels = function(options) {
        var data = $.extend({
            'type': 'diy'
        }, options);
        var params = $.extend({
            "url": this.api + 'method=baidu.ting.ugcdiy.getChannels',
            "data": data
        }, options);
        return this.ajaxFun(params);
    }
    ;
    this.addCountNum = function(options) {
        var data = $.extend({
            "list_id": "",
            "type": ""
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcdiy.addCountNum',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
    this.sortDiySongs = function(options) {
        var params = $.extend({
            "url": this.api + 'method=baidu.ting.ugcdiy.sortDiy',
            "data": {
                "list_id": "",
                "song_ids": ""
            }
        }, options);
        return this.ajaxFun(params);
    }
    ;
    this.countNum = function(options) {
        var params = $.extend({
            "url": this.api + 'method=baidu.ting.ugcdiy.countNum',
            "data": {
                "list_id": ""
            }
        }, options);
        return this.ajaxFun(params);
    }
    ;
    this.listSong = function(options) {
        var data = $.extend({
            "list_id": "",
            "num": "20",
            "start": "0",
            "version": ""
        })
        var params = $.extend({
            "url": this.api + 'method=baidu.ting.ugcdiy.listSong',
            "data": data
        });
        return this.ajaxFun(params);
    }
    ;
    this.userList = function(options) {
        var data = $.extend({
            "source": "",
            "type": "",
            "offset": "0",
            "size": this.size,
            "user_id": ""
        }, options.data);
        var beforeSendFun = options.beforeSendFun ? options.beforeSendFun : '';
        var params = {
            "url": this.api + 'method=baidu.ting.ugcdiy.userList',
            "data": data,
            "beforeSendFun": beforeSendFun
        };
        return this.ajaxFun(params);
    }
    ;
    this.addFavoriteDiy = function(options) {
        if (!this.isLogin()) {
            return false;
        }
        var data = $.extend({
            "list_id": "",
            "source": ""
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcdiy.addFavoriteDiy',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
    this.deleteFavoriteDiy = function(options) {
        if (!this.isLogin()) {
            return false;
        }
        var data = $.extend({
            "list_id": "",
            "source": ""
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcdiy.deleteFavoriteDiy',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
    this.getBaseInfo = function(options) {
        var data = $.extend({
            "list_id": "",
            "size": "100",
            "offset": "0",
            "withsong": "1",
            "withcount": "1"
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcdiy.getBaseInfo',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
    this.asyncGetBaseInfo = function() {
        var data = $.extend({
            "list_id": "",
            "size": "100",
            "offset": "0",
            "withsong": "1",
            "withcount": "1"
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcdiy.getBaseInfo',
            "data": data,
            "async": false
        };
        return this.ajaxFun(params);
    }
    ;
    this.getAlbumInfo = function(options) {
        var data = $.extend({
            "album_id": ""
        }, options.data);
        var async = options.async;
        var params = {
            "url": this.api + 'method=baidu.ting.album.getAlbumInfo',
            "data": data,
            "async": async,
            "isNeedPassEncode": false
        };
        return this.ajaxFun(params);
    }
    ;
    this.getArtistInfo = function(options) {
        var data = $.extend({
            "artistid": ""
        }, options.data);
        var async = options.async;
        var params = {
            "url": this.api + 'method=baidu.ting.artist.getInfo',
            "data": data,
            "async": async,
            "isNeedPassEncode": false
        };
        return this.ajaxFun(params);
    }
    ;
    this.getSongInfo = function(options) {
        var data = $.extend({
            "songid": ""
        }, options.data);
        var async = options.async;
        var params = {
            "url": this.api + 'method=baidu.ting.song.baseInfo',
            "data": data,
            "async": async,
            "isNeedPassEncode": false
        };
        return this.ajaxFun(params);
    }
}
DiyInterface.prototype = new UGC();
;function ugcfriendInterface() {
    this.errorJson = {
        "22001": "操作失败",
        "22005": "参数错误",
        "22231": "内容含有黄反",
        "22452": "用户未登录",
        "22700": "字数不能超过120字",
        "22011": "您发布的太频繁了，请稍后再发",
        "22704": "话题字数超限啦",
        "22715": "转发的原动态已被删除",
        "22716": "该用户被封禁"
    };
    this.size = 10;
    this.addMsgInfo = function(options) {
        if (!this.isLogin()) {
            return false;
        }
        var data = $.extend({
            "msg": "",
            "topic": "",
            "msg_users": "",
            "pic": "",
            "content_type": "",
            "content_id": "",
            "typeid": "",
            "msg_parent_id": "",
            "topicid": ""
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcfriend.addMsgInfo',
            "data": options,
            "beforeSendFun": function() {
                Common_Layer.init_tip('addSuccess', "正在发布", 'icon4-loadding');
            }
        };
        return this.ajaxFun(params);
    }
    ;
    this.getDetail = function(options) {
        var data = $.extend({
            "msgid": "",
            "offset": "0",
            "size": this.size
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcfriend.getDetail',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
    this.delMsgInfo = function(options) {
        var data = $.extend({
            "msgid": ""
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcfriend.delMsgInfo',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
    this.getListOfUser = function(options) {
        var data = $.extend({
            "author_id": "",
            "size": "",
            "offset": ""
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcfriend.getListOfUser',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
    this.getList = function(options) {
        var data = options.data;
        var beforeSendFun = options.beforeSendFun;
        var params = {
            "url": this.api + 'method=baidu.ting.ugcfriend.getList',
            "data": data,
            "beforeSendFun": beforeSendFun
        };
        return this.ajaxFun(params);
    }
    ;
    this.doFriend = function(options) {
        if (!this.isLogin()) {
            return false;
        }
        var data = $.extend({
            "fid": "",
            "type": ""
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcfriend.doFriend',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
    this.getFriOrFunList = function(options) {
        if (!this.isLogin()) {
            return false;
        }
        var data = $.extend({
            "author_id": "",
            "type": "1",
            "size": "200",
            "offset": "0"
        }, options.data);
        var beforeSendFun = options.beforeSendFun;
        var params = {
            "url": this.api + 'method=baidu.ting.ugcfriend.getFriOrFunList',
            "data": data,
            "beforeSendFun": beforeSendFun
        };
        return this.ajaxFun(params);
    }
    ;
    this.getRecAttenteList = function(options) {
        var data = $.extend({
            "size": '',
            "offset": ''
        }, options);
        var params = {
            "url": this.api + 'method=ting.baidu.recommend.getRecAttenteList',
            "data": data,
            "beforeSendFun": function() {
                $('#commentContainer').html('<div class="loadding"><img src="/2018/resources/images/ugcs/loadding.gif" /></div>');
            }
        };
        return this.ajaxFun(params);
    }
    ;
    this.addFav = function(options) {
        if (!this.isLogin()) {
            return false;
        }
        var data = $.extend({
            "type_id": "",
            "type": "",
            "comm_id": "",
            "author_id": ""
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcfav.addFav',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
    this.delFav = function(options) {
        if (!this.isLogin()) {
            return false;
        }
        var data = $.extend({
            "type_id": "",
            "type": "",
            "comm_id": ""
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcfav.delFav',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
    this.getFriendList = function(options) {
        var data = options.data;
        var beforeSendFun = options.beforeSendFun;
        var params = {
            "url": this.api + 'method=baidu.ting.ugcfriend.getFriendList',
            "data": data,
            "beforeSendFun": beforeSendFun
        };
        return this.ajaxFun(params);
    }
    ;
    this.doSearchMusic = function(options) {
        var paramsdata = options.data;
        var data = $.extend({
            "query": "",
            "offset": "0"
        }, paramsdata);
        var beforeSendFun = options.beforeSendFun;
        var params = {
            "url": this.api + 'method=baidu.ting.search.merge',
            "data": data,
            "beforeSendFun": beforeSendFun,
            "isNeedPassEncode": false
        };
        return this.ajaxFun(params);
    }
    ;
}
ugcfriendInterface.prototype = new UGC();
;function ugcTopicInterface() {
    this.errorJson = {
        "22001": "操作失败",
        "22005": "参数错误",
        "22231": "内容含有黄反",
        "22452": "用户未登录",
        "22700": "字数不能超过120字"
    };
    this.size = 10;
    this.getRecList = function(options) {
        var data = $.extend({
            "typeid": "1",
            "offset": "0",
            "size": this.size
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugctopic.getRecList',
            "data": options,
            "beforeSendFun": function() {
                $('.loadding').html('<img src="/2018/resources/images/ugcs/loadding.gif" style="width:16px;height:16px;" />');
            }
        };
        return this.ajaxFun(params);
    }
    ;
    this.getSuggestions = function(options) {
        var data = $.extend({
            "query": "",
            "version": "10.1.0",
            "from": "qianqianmini"
        }, options.data);
        var beforeSendFun = options.beforeSendFun ? options.beforeSendFun : "";
        var params = {
            "url": this.api + 'method=baidu.ting.ugctopic.getSuggestions',
            "data": data,
            "beforeSendFun": beforeSendFun
        };
        return this.ajaxFun(params);
    }
    ;
    this.getDetail = function(options) {
        var data = options.data
          , beforeSendFun = options.beforeSendFun;
        data = $.extend({
            "withinfo": 1,
            "offset": 0,
            "size": this.size
        }, data);
        var params = {
            "url": this.api + 'method=baidu.ting.ugctopic.getDetail',
            "data": data,
            "beforeSendFun": beforeSendFun
        };
        return this.ajaxFun(params);
    }
    ;
}
ugcTopicInterface.prototype = new UGC();
;function ugccenterInterface() {
    this.errorJson = {
        "1": "api错误",
        "2": "api错误2"
    };
    this.size = 20;
    this.getUserBaseInfo = function(options) {
        var data = $.extend({
            "withcount": 1
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugccenter.getUserBaseInfo',
            "data": data,
            "beforeSendFun": function() {
                $('#commentContainer').html('<div class="loadding"><img src="/2018/resources/images/ugcs/loadding.gif" /></div>');
            }
        };
        return this.ajaxFun(params);
    }
    ;
    this.getAnsyncUserBaseInfo = function(options) {
        var data = $.extend({
            "withcount": 1
        }, options.data);
        var async = options.async;
        var params = {
            "url": this.api + 'method=baidu.ting.ugccenter.getUserBaseInfo',
            "data": data,
            "async": async
        };
        return this.ajaxFun(params);
    }
    ;
    this.userList = function(options) {
        var data = $.extend({
            "withcount": 1,
            "source": "",
            "type": "",
            "offset": "",
            "size": "",
            "user_id": ""
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcdiy.userList',
            "data": data,
            "beforeSendFun": function() {
                $('#commentContainer').html('<div class="loadding"><img src="/2018/resources/images/ugcs/loadding.gif" /></div>');
            }
        };
        return this.ajaxFun(params);
    }
    ;
    this.getFriOrFunList = function(options) {
        var data = $.extend({
            "author_id": "",
            "size": "",
            "offset": "",
            "type": ""
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcfriend.getFriOrFunList',
            "data": data,
            "beforeSendFun": function() {
                $('#commentContainer').html('<div class="loadding"><img src="/2018/resources/images/ugcs/loadding.gif" /></div>');
            }
        };
        return this.ajaxFun(params);
    }
    ;
    this.getListOfUser = function(options) {
        var data = $.extend({
            "author_id": "",
            "size": "",
            "offset": ""
        }, options);
        var params = {
            "url": this.api + 'method=baidu.ting.ugcfriend.getListOfUser',
            "data": data,
            "beforeSendFun": function() {
                $('#commentContainer').html('<div class="loadding"><img src="/2018/resources/images/ugcs/loadding.gif" /></div>');
            }
        };
        return this.ajaxFun(params);
    }
    ;
    this.getSetting = function() {
        var params = {
            "url": this.api + 'method=baidu.ting.ugccenter.getSetting'
        };
        return this.ajaxFun(params);
    }
    ;
    this.checkFollRedPoint = function(data) {
        var params = {
            "url": this.api + 'method=baidu.ting.ugccenter.checkFollRedPoint',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
    this.getBuyRecord = function(data) {
        var params = {
            "url": this.api + 'method=baidu.ting.ugccenter.getBuyRecord',
            "data": data
        };
        return this.ajaxFun(params);
    }
    ;
}
ugccenterInterface.prototype = new UGC();
;template.helper('formatTime', function(timestamp, format) {
    var date = new Date(parseInt(timestamp) * 1000);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if (format == 'Y.m.d') {
        return year + "." + month + "." + day;
    } else if (format == 'm.d') {
        return month + "." + day;
    } else {
        return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    }
});
template.helper('splitTag', function(str, delimiter) {
    var data = str.split(delimiter);
    var tagStr = '';
    if ($.isArray(data) && data.length > 0) {
        $.each(data, function(index, item) {
            tagStr += '<a href="javascript:;">' + item + '</a>';
        });
    }
    return tagStr;
});
template.helper('getIcon', function(all_rate) {
    var html = ""
    if (all_rate == "") {
        html = '';
        return html;
    } else {
        var arr = all_rate.split(',');
        var lastrate = arr[arr.length - 1];
        if (lastrate == "flac") {
            html = '<i class="sq" title="无损品质"></i>';
            return html;
        }
        if (lastrate >= 320) {
            html = '<i class="hq" title="超高品质"></i>';
            return html;
        }
        return html;
    }
})
template.helper('residueNum', function(num) {
    var numStr = null;
    var residue = num / 10000;
    if (num > 9999) {
        var num2 = residue.toFixed(1);
        numStr = num2 + '万';
    } else {
        numStr = num;
    }
    return numStr;
})
template.helper('procesNum', function(num) {
    var gdNum = null;
    if (num >= 999) {
        gdNum = '999+';
    } else {
        gdNum = num;
    }
    return gdNum;
})
template.helper('compareTime', function(timestamp, type) {
    var now_time = (new Date()).getTime() / 1000;
    var differ_time = parseInt(now_time - timestamp);
    if (differ_time < 60 * 60) {
        var differ = Math.ceil((differ_time) / 60);
        if (type == 'talk') {
            var diff_str = differ > 5 ? differ + '分钟前' : " ";
        } else {
            var diff_str = differ > 0 ? differ + '分钟前' : "刚刚";
        }
        return diff_str;
    } else if (differ_time < 24 * 60 * 60) {
        return fomat_time(timestamp, 'H:i');
    } else if (differ_time > 24 * 60 * 60 && differ_time < 365 * 24 * 60 * 60) {
        return fomat_time(timestamp, 'm-d');
    } else if (differ_time > 365 * 24 * 60 * 60) {
        return fomat_time(timestamp, 'Y-m-d');
    }
});
function fomat_time(timestamp, format) {
    var date = new Date(parseInt(timestamp) * 1000);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (hour < 10) {
        hour = '0' + hour;
    }
    var now_date = (new Date()).getDate();
    var now_year = (new Date()).getFullYear();
    if (format == 'Y-m-d') {
        return year + "年" + month + "月" + day + "日" + " " + hour + ":" + minute;
    } else if (format == 'm-d') {
        if (now_year - year == 0) {
            return month + "月" + day + "日" + " " + hour + ":" + minute;
        } else {
            return year + "年" + month + "月" + day + "日" + " " + hour + ":" + minute;
        }
    } else if (format == 'H:i') {
        if (now_date - day == 0) {
            return hour + ":" + minute;
        } else {
            return month + "月" + day + "日" + " " + hour + ":" + minute;
        }
    }
}
template.helper('getAuthoritem', function(item, delimiter) {
    var allId = item.all_artist_id;
    var allAuthor = item.author;
    var idArr = allId.split(delimiter);
    var authorArr = allAuthor.split(delimiter);
    var Str = '';
    if ($.isArray(idArr) && idArr.length > 0) {
        $.each(idArr, function(index, item) {
            var dotStr = ",";
            if (index == (idArr.length - 1)) {
                dotStr = "";
            }
            Str += '<a href="javascript:;" class="artist" title="' + authorArr[index] + '" data-artistid="' + idArr[index] + '" data-uid="0">' + authorArr[index] + '</a>' + dotStr;
        })
    }
    return Str;
});
template.helper('getAtUserList', function(item, delimiter) {
    var contentStr = '';
    if (item.comment) {
        contentStr = htmlEncodeJQ(item.comment);
    } else if (item.msg) {
        contentStr = htmlEncodeScriptJQ(item.msg);
    }
    contentStr = parseEmotion(contentStr);
    if (typeof contentStr != 'undefined') {
        var data = contentStr.split(delimiter);
        var msg_users = item.msg_users;
        if (typeof msg_users == 'undefined') {
            return contentStr;
        }
        if ($.isArray(msg_users) && msg_users.length > 0) {
            $.each(msg_users, function(index, item) {
                if (item.username != "") {
                    var start_index = contentStr.indexOf('@' + item.username);
                    if (start_index > -1) {
                        var regExpUsername = stripscript(item.username);
                        var regExp = new RegExp("@" + regExpUsername + " ","g");
                        contentStr = contentStr.replace(regExp, "<a style='color:#E13228;' class='at_uname person-link' data-username='" + item.username + "'>@" + item.username + "</a>");
                    }
                }
            });
        }
    }
    if (item.msg && item.msg.indexOf('\n') > -1) {
        contentStr = nl2br(contentStr);
    }
    return contentStr;
});
function stripscript(s) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;'\\[\\].<>/?~]");
    var rs = "";
    for (var i = 0; i < s.length; i++) {
        var char = s.substr(i, 1);
        rs = rs + char.replace(pattern, '\\' + char);
    }
    return rs;
}
function htmlEncodeScriptJQ(s) {
    var pattern = new RegExp("[<>]");
    var rs = "";
    for (var i = 0; i < s.length; i++) {
        var char = s.substr(i, 1);
        rs = rs + char.replace(pattern, '\\' + char);
    }
    return rs;
}
function nl2br(content) {
    content = content.replaceAll("\n", "<br />");
    return content;
}
String.prototype.replaceAll = function(s1, s2) {
    return this.replace(new RegExp(s1,"gm"), s2);
}
template.helper('encodeURIComponent', function(item) {
    return encodeURIComponent(item);
});
template.helper('commentEscape', function(str) {
    str = htmlEncodeJQ(str);
    var content = parseEmotion(str);
    return content;
});
function htmlEncodeJQ(str) {
    return $('<span/>').text(str).html();
}
function htmlDecodeJQ(str) {
    return $('<span/>').html(str).text();
}
function escapeQuote(str) {
    return str.replace(/"/g, "'");
}
template.helper('parseEmotion', function(content) {
    var content = parseEmotion(content);
    return content;
});
template.helper('userAction', function(num) {
    var action = '';
    if (num == 1) {
        action = '赞';
    } else if (num == 2) {
        action = '收藏';
    } else if (num == 3) {
        action = '推荐';
    } else if (num == 4) {
        action = '作者删除';
    }
    return action;
})
template.helper('contType', function(num) {
    var cont_type = '';
    if (num == 0) {
        cont_type = '单曲';
    } else if (num == 1) {
        cont_type = '歌单';
    } else if (num == 2) {
        cont_type = '专辑';
    } else if (num == 3) {
        cont_type = '艺人';
    } else if (num == 4) {
        cont_type = '评论';
    } else if (num == 5) {
        cont_type = '动态';
    } else if (num == 6) {
        cont_type = '话题';
    } else if (num == 7) {
        cont_type = '文本';
    }
    return cont_type;
})
template.helper('musicType', function(num) {
    var action = '';
    if (num == 0) {
        action = '单曲';
    } else if (num == 1) {
        action = '歌单';
    } else if (num == 2) {
        action = '专辑';
    } else if (num == 3) {
        action = '歌手';
    }
    return action;
})
template.helper('plType', function(num) {
    var action = '';
    if (num == 1) {
        action = 'Songlist';
    } else if (num == 2) {
        action = 'Song';
    } else if (num == 3) {
        action = 'Album';
    } else if (num == 4) {
        action = 'Dynamics';
    } else if (num == 5) {
        action = 'Topic'
    }
    ;return action;
});
template.helper('intoString', function(msg_users_data) {
    var msg_users_str = "";
    $.each(msg_users_data, function(index, item) {
        var dotStr = ',';
        if (index + 1 == msg_users_data.length) {
            dotStr = ''
        }
        msg_users_str += '{"userid":"' + item.userid + '","username":"' + item.username + '"}' + dotStr;
    })
    msg_users_str = '[' + msg_users_str + ']';
    return msg_users_str;
})
template.helper('userType', function(str) {
    var userClass = '';
    var typeArr = str.split('');
    var viptype = typeArr[0];
    var darentype = typeArr[1];
    var renztype = typeArr[2];
    if (renztype == 1) {
        userClass = "renz_icon";
    } else {
        if (darentype == 1) {
            userClass = "daren_icon";
        } else {
            if (viptype == 0) {
                userClass = "";
            } else if (viptype == 1) {
                userClass = "ptvip_icon"
            } else if (viptype == 2) {
                userClass = "bjvip_icon"
            }
        }
    }
    return userClass;
})
template.helper('vipType', function(str) {
    var userClass = '';
    var typeArr = str.split('');
    var viptype = typeArr[0];
    if (viptype == 0) {
        userClass = "";
    } else if (viptype == 1) {
        userClass = "ptvip_icon";
    } else if (viptype == 2) {
        userClass = "bjvip_icon";
    }
    return userClass;
})
template.helper('birthTime', function(timestamp) {
    var time = "";
    var data = new Date(parseInt(timestamp) * 1000).getFullYear();
    var year = parseInt(data);
    if (year >= 2010) {
        time = "10后";
    } else {
        if (year >= 2000) {
            time = "00后";
        } else {
            if (year >= 1990) {
                time = "90后";
            } else {
                if (year >= 1980) {
                    time = "80后";
                } else {
                    if (year >= 1970) {
                        time = "70后";
                    } else {
                        if (year >= 1960) {
                            time = "60后";
                        } else {
                            if (year >= 1950) {
                                time = "50后";
                            } else {
                                if (year >= 1940) {
                                    time = "40后";
                                } else {
                                    time = "长青树";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return time;
});
template.helper('changeEllipsis', function(str, num) {
    var strAndEllipsis = "";
    var count = 0;
    var numi = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 0x4e00 && str.charCodeAt(i) <= 0x9fa5) {
            count += 2;
        } else {
            count += 1;
        }
        if (count >= num) {
            numi = i;
            strAndEllipsis = str.substring(0, (numi - 3)) + '...';
            return strAndEllipsis;
        }
    }
    if (count < num) {
        strAndEllipsis = str;
    }
    return strAndEllipsis;
});
template.helper('getCommentType', function(source_type) {
    var commenttypedata = {
        "0": 2,
        "1": 1,
        "2": 3,
        "3": "7",
        "5": 4,
        "6": 5
    };
    return commenttypedata[source_type];
});
template.helper('getJumpType', function(source_type) {
    var typedata = {
        "4": 5,
        "2": 0,
        "3": 2
    };
    if (typeof typedata[source_type] != "undefined") {
        return typedata[source_type];
    } else {
        return source_type;
    }
});
template.helper('getDefaultAvatar', function(avatar) {
    if (avatar == "" || typeof avatar == 'undefined') {
        return '/2018/resources/images/ugcs/default_avatar.png';
    } else {
        return avatar;
    }
});
template.helper('getMusicDefaultPic', function(pic) {
    if (pic == "" || typeof pic == 'undefined') {
        return '/2018/resources/images/ugcs/default.png';
    } else {
        return pic;
    }
});
template.helper('escapequot', function(s) {
    var pattern = new RegExp('"');
    var rs = "";
    for (var i = 0; i < s.length; i++) {
        var char = s.substr(i, 1);
        rs = rs + char.replace(pattern, '\\' + char);
    }
    return rs;
});
template.helper('jsonIntoString', function(jsondata) {
    var song_id = jsondata.song_id
      , song_title = jsondata.title
      , artist_id = jsondata.artist_id
      , song_artist = jsondata.author
      , album_id = jsondata.album_id
      , album_title = jsondata.album_title
      , has_mv = jsondata.has_mv
      , album_image_url = jsondata.pic_s500
      , del_status = jsondata.del_status
      , copy_type = jsondata.copy_type
      , biaoshi = jsondata.biaoshi;
    var songdata = {
        "song_id": song_id,
        "song_title": song_title,
        "artist_id": artist_id,
        "song_artist": song_artist,
        "album_id": album_id,
        "album_title": album_title,
        "copy_type": copy_type,
        "has_mv": has_mv,
        "album_image_url": album_image_url,
        "del_status": del_status,
        "biaoshi": biaoshi
    };
    return JSON.stringify(songdata);
});
template.helper('getBiaoshiIcon', function(biaoshiStr) {
    if ($.trim(biaoshiStr).length > 0) {
        var biaoshiArr = biaoshiStr.split(',');
        var allBiaoshiIcons = ['sole', 'pay', 'first', 'presell', 'lossless'];
        var biaoshiIconStr = "";
        $.each(biaoshiArr, function(index, item) {
            if ($.inArray(item, allBiaoshiIcons) > -1) {
                biaoshiIconStr += '<a class="biaoshi ' + item + '"></a>';
            }
        });
        return biaoshiIconStr;
    }
});
template.helper('getBiaoshiLen', function(biaoshiStr) {
    var len = 0;
    if ($.trim(biaoshiStr).length > 0) {
        var biaoshiArr = biaoshiStr.split(',');
        len = biaoshiArr.length;
    }
    return len;
});
;(function($) {
    var ms = {
        init: function(obj, args) {
            return (function() {
                ms.fillHtml(obj, args);
                ms.bindEvent(obj, args);
            }
            )();
        },
        fillHtml: function(obj, args) {
            return (function() {
                obj.empty();
                if (args.current > 1) {
                    obj.append('<a href="javascript:;" class="pre">上一页</a>');
                } else {
                    obj.remove('.pre');
                    obj.append('<span class="disabled">上一页</span>');
                }
                if (args.current != 1 && args.current >= 4 && args.pageCount != 4) {
                    obj.append('<a href="javascript:;" class="num">' + 1 + '</a>');
                }
                if (args.current - 2 > 2 && args.current <= args.pageCount && args.pageCount > 5) {
                    obj.append('<span class="ellipsis">...</span>');
                }
                var start = args.current - 2
                  , end = args.current + 2;
                if ((start > 1 && args.current < 4) || args.current == 1) {
                    end++;
                }
                if (args.current > args.pageCount - 4 && args.current >= args.pageCount) {
                    start--;
                }
                for (; start <= end; start++) {
                    if (start <= args.pageCount && start >= 1) {
                        if (start != args.current) {
                            obj.append('<a href="javascript:;" class="num">' + start + '</a>');
                        } else {
                            obj.append('<a class="num visited">' + start + '</a>');
                        }
                    }
                }
                if (args.current + 2 < args.pageCount - 1 && args.current >= 1 && args.pageCount > 5) {
                    obj.append('<span class="ellipsis">...</span>');
                }
                if (args.current != args.pageCount && args.current < args.pageCount - 2 && args.pageCount != 4) {
                    obj.append('<a href="javascript:;" class="num">' + args.pageCount + '</a>');
                }
                if (args.current < args.pageCount) {
                    obj.append('<a href="javascript:;" class="next">下一页</a>');
                } else {
                    obj.remove('.next');
                    obj.append('<span class="disabled">下一页</span>');
                }
            }
            )();
        },
        bindEvent: function(obj, args) {
            return (function() {
                obj.on("click", "a.num", function() {
                    $('.scroll-bar').remove();
                    $('.scroll_wrap').css('top', '0');
                    $("#useScroll").ttScroll();
                    var current = parseInt($(this).text());
                    ms.fillHtml(obj, {
                        "current": current,
                        "pageCount": args.pageCount
                    });
                    if (typeof (args.backFn) == "function") {
                        args.backFn(current);
                    }
                });
                obj.on("click", "a.pre", function() {
                    $('.scroll-bar').remove();
                    $('.scroll_wrap').css('top', '0');
                    $("#useScroll").ttScroll();
                    var current = parseInt(obj.children("a.visited").text());
                    ms.fillHtml(obj, {
                        "current": current - 1,
                        "pageCount": args.pageCount
                    });
                    if (typeof (args.backFn) == "function") {
                        args.backFn(current - 1);
                    }
                });
                obj.on("click", "a.next", function() {
                    $('.scroll-bar').remove();
                    $('.scroll_wrap').css('top', '0');
                    $("#useScroll").ttScroll();
                    var current = parseInt(obj.children("a.visited").text());
                    ms.fillHtml(obj, {
                        "current": current + 1,
                        "pageCount": args.pageCount
                    });
                    if (typeof (args.backFn) == "function") {
                        args.backFn(current + 1);
                    }
                });
            }
            )();
        }
    }
    $.fn.createPage = function(options) {
        var args = $.extend({
            pageCount: 10,
            current: 1,
            backFn: function() {}
        }, options);
        ms.init(this, args);
    }
}
)(jQuery);
;$('.common-links').unbind('click').on('click', '.play-song', function(event) {
    event.stopPropagation();
    if ($(this).hasClass('offline')) {
        Common_Layer.init_tip('addSuccess', "该歌曲已下线", 'icon2');
        return false;
    } else {
        var songs = [];
        var song = $(this).data('song');
        songs.push(song);
        playSongs(songs);
    }
});
$('.common-links').delegate('.offline', 'click', function() {
    if ($(this).hasClass('song')) {
        Common_Layer.init_tip('addSuccess', "该歌曲已下线", 'icon2');
    }
})
$('.common-links').delegate('.singer-link', 'click', function(event) {
    event.stopPropagation();
    if ($(this).hasClass('offline')) {
        return false;
    } else {
        var singerid = $(this).data('artistid');
        var uid = 0;
        globalLinks.singerPerson(singerid, uid);
    }
});
$('.common-links').delegate('.album-link', 'click', function(event) {
    event.stopPropagation();
    if ($(this).hasClass('offline')) {
        Common_Layer.init_tip('addSuccess', "该专辑已下线", 'icon2');
        return false;
    } else {
        var albumid = $(this).data('albumid');
        globalLinks.album(albumid);
    }
});
$('.common-links').delegate('.gedan-link', 'click', function(event) {
    event.stopPropagation();
    if ($(this).hasClass('offline')) {
        Common_Layer.init_tip('addSuccess', "该歌单已被删除了", 'icon2');
        return false;
    } else {
        var gedan_id = $(this).data('gid');
        globalLinks.gedanList(gedan_id);
    }
});
$('.common-links').delegate('.album-link', 'click', function(event) {
    event.stopPropagation();
    if ($(this).hasClass('offline')) {
        Common_Layer.init_tip('addSuccess', "该专辑已下线", 'icon2');
        return false;
    } else {
        var album_id = $(this).data('albumid');
        globalLinks.album(album_id);
    }
});
$('.common-links').delegate('.person-link', 'click', function(event) {
    event.stopPropagation();
    var username = $(this).data('username');
    if ($(this).closest('.collect_gedan_comment_container').length > 0) {
        if (client.sucess)
            client.NavigateToUserCenter(username);
        return false;
    }
    if (username) {
        globalLinks.personal(username);
    } else {
        Common_Layer.init_tip('addSuccess', "用户名为空，无法跳转", 'icon2');
        return false;
    }
});
$('.common-links').delegate('.topic-link', 'click', function(event) {
    event.stopPropagation();
    var topicid = $(this).data('topicid');
    globalLinks.ugctopicInfo(topicid);
})
$('.common-links').delegate('.dynamicInfo-link', 'click', function(event) {
    event.stopPropagation();
    if ($(this).has('.outline').length > 0) {
        Common_Layer.init_tip('addSuccess', "该条动态已被删除", 'icon3');
        return false;
    } else {
        if ($(this).data('msgid')) {
            var msgid = $(this).data('msgid');
        } else {
            var msgid = $(this).closest('li').data('msgid');
        }
        globalLinks.dynamicsInfo(msgid);
    }
});
$('.hot_topic .more .more_btn').click(function(event) {
    event.stopPropagation();
    globalLinks.ugctopic();
});
$('.hot_topic ul').delegate('li', 'click', function(event) {
    event.stopPropagation();
    var topicid = $(this).data('topicid');
    globalLinks.ugctopicInfo(topicid);
});
$('.use_msg').delegate('.user_con_num a', 'click', function(event) {
    event.stopPropagation();
    var nickname = $(this).parents('.user_con_num').data('username');
    if ($(this).hasClass('dynamics_btn')) {
        globalLinks.personalDynamics(nickname);
    } else if ($(this).hasClass('fans_btn')) {
        globalLinks.fans(nickname);
    } else if ($(this).hasClass('follow_btn')) {
        globalLinks.follow(nickname);
    }
});
(function() {
    $.fn.table = function(sCheckBox) {
        var checkBoxFlag = true;
        if (typeof sCheckBox == "undefined")
            checkBoxFlag = false;
        var $rcBangdan_trMark = $(".main_table tr.on");
        var rcBangdan_shiftIndex = $rcBangdan_trMark.index($rcBangdan_trMark.eq(0));
        var btnHidden = true;
        $(".main_table").delegate('tr', {
            hover: function() {
                $(this).unbind('mousedown');
            },
            mousemove: function() {
                $(this).addClass('tr_hover');
                if ($(this).hasClass('offline')) {
                    return false;
                }
                $(".fct .fct_btn", this).css("display", "block");
            },
            mouseout: function() {
                $(this).removeClass('tr_hover');
                $(".fct .fct_btn", this).css("display", "none");
            },
            mousedown: function(event) {
                event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
                var $rcBangdan_trMark_not = $();
                var $rcBangdan_trMark_add = $();
                var index = $(".main_table tr").index(this);
                var thisFlag = $rcBangdan_trMark.index(this) > -1 ? true : false;
                if (event.which == 1) {
                    if (event.shiftKey == 1) {
                        if (rcBangdan_shiftIndex < 0) {
                            $rcBangdan_trMark_add = $(this);
                            rcBangdan_shiftIndex = index;
                        } else {
                            var begin = rcBangdan_shiftIndex < index ? rcBangdan_shiftIndex : index;
                            var end = (rcBangdan_shiftIndex > index ? rcBangdan_shiftIndex : index) + 1;
                            var $trMark = $(".main_table tr").slice(begin, end);
                            $rcBangdan_trMark_not = $rcBangdan_trMark.not($trMark);
                            $rcBangdan_trMark_add = $trMark.not($rcBangdan_trMark);
                        }
                    } else if (event.ctrlKey == 1) {
                        if (thisFlag) {
                            $rcBangdan_trMark_not = $(this);
                            btnHidden = false;
                        } else {
                            $rcBangdan_trMark_add = $(this);
                        }
                        rcBangdan_shiftIndex = index;
                    } else {
                        $rcBangdan_trMark_not = $rcBangdan_trMark;
                        if (thisFlag) {
                            $rcBangdan_trMark_not = $rcBangdan_trMark_not.not(this);
                        } else {
                            $rcBangdan_trMark_add = $(this);
                        }
                        rcBangdan_shiftIndex = index;
                    }
                } else if (event.which == 3) {
                    if ($(this).hasClass('offline')) {
                        return false;
                    }
                    if (thisFlag) {
                        tableMouseRightEvent(event);
                    } else {
                        $rcBangdan_trMark_not = $rcBangdan_trMark;
                        $rcBangdan_trMark_add = $(this);
                        rcBangdan_shiftIndex = index;
                        tableMouseRightEvent(event);
                    }
                    $.ClickMonkey({
                        type: "click",
                        act: "musicwindowmore",
                        pos: "musicwindowmore_right"
                    });
                }
                doTrMark($rcBangdan_trMark_not, $rcBangdan_trMark_add, btnHidden);
            },
            dblclick: function() {
                var $tr = $(this);
                if ($(this).hasClass('offline') && $(this).data('copytype') != '0') {
                    Common_Layer.init_tip('addSuccess', "该歌曲已下线~", "icon2");
                    return false;
                }
                if ($(this).data('copytype') == '0') {
                    Common_Layer.init_tip('addSuccess', "应版权方要求，该歌曲暂时无法播放", "icon2");
                    return false;
                }
                if ($(this).data('copytype') == '2') {
                    Common_Layer.init_tip('addSuccess', "您好，应版权方要求，该歌曲下载后，即可播放哦~", "icon3");
                    return false;
                }
                var song = $tr.data("song");
                playSong(song);
                return false;
            }
        })
        if (checkBoxFlag) {
            $("#selectAll").unbind('click').click(function() {
                var $rcBangdan_trMark_not = $();
                var $rcBangdan_trMark_add = $();
                if ($(this).attr("checked")) {
                    $rcBangdan_trMark_add = $(".main_table tr").not($rcBangdan_trMark)
                } else {
                    $rcBangdan_trMark_not = $rcBangdan_trMark;
                }
                doTrMark($rcBangdan_trMark_not, $rcBangdan_trMark_add, btnHidden);
            });
            $(sCheckBox, ".main_table tr").unbind('mousedown').mousedown(function(event) {
                if (event.which == 1) {
                    event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
                    var $rcBangdan_trMark_not = $();
                    var $rcBangdan_trMark_add = $();
                    var $thisTr = $(this).parents("tr").eq(0);
                    if ($(this).attr("checked")) {
                        $rcBangdan_trMark_not = $thisTr;
                        $(sCheckBox, $thisTr).removeClass("visited_hover");
                        btnHidden = false;
                    } else {
                        $rcBangdan_trMark_add = $thisTr;
                        $(sCheckBox, $thisTr).addClass("visited_hover");
                    }
                    doTrMark($rcBangdan_trMark_not, $rcBangdan_trMark_add, btnHidden);
                }
            }).dblclick(function() {
                event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
                return false;
            });
        }
        function doTrMark($rcBangdan_trMark_not, $rcBangdan_trMark_add, btnHidden) {
            if ($rcBangdan_trMark_not.length > 0) {
                $rcBangdan_trMark_not.removeClass("on");
                if (checkBoxFlag) {
                    $(sCheckBox, $rcBangdan_trMark_not).attr("checked", false).removeClass("visited");
                }
                $rcBangdan_trMark = $rcBangdan_trMark.not($rcBangdan_trMark_not);
            }
            if ($rcBangdan_trMark_add.length > 0) {
                $rcBangdan_trMark_add.addClass("on");
                if (checkBoxFlag) {
                    $(sCheckBox, $rcBangdan_trMark_add).attr("checked", true).addClass("visited");
                }
                $rcBangdan_trMark = $rcBangdan_trMark.add($rcBangdan_trMark_add);
            }
            if (checkBoxFlag) {
                var allFlag = ($rcBangdan_trMark.length == $(".main_table tr").length);
                if (allFlag)
                    $("#selectAll").addClass("visited").attr("checked", true);
                else
                    $("#selectAll").removeClass("visited").attr("checked", false);
            }
        }
        $(".main_table").delegate('.u_title a.artist', 'click', function() {
            $(this).unbind();
            var artist_id = $(this).data("artistid");
            var uid = $(this).data("uid");
            globalLinks.singerPerson(artist_id, uid);
            return false;
        });
        $(".main_table .u_title a.search").unbind().click(function() {
            var query = $(this).data("query");
            globalLinks.searchSongs(query);
            return false;
        });
        $(".main_table").delegate('.a_title a', 'click', function() {
            $(this).unbind();
            var album_id = $(this).data("albumid");
            globalLinks.album(album_id);
            return false;
        });
        $(".main_table").delegate('.fct_btn .play', 'click', function() {
            $(this).unbind();
            var $tr = $(this).parents("tr").eq(0);
            var copy_type = $tr.data('copytype');
            if (copy_type == 2) {
                Common_Layer.init_tip('addSuccess', "您好，应版权方要求，该歌曲下载后，即可播放哦~", "icon3");
                return false;
            }
            var song = $tr.data("song");
            playSong(song);
            if ($(this).data('page') == 'recommend_new') {
                $.ClickMonkey({
                    "page": "recommend",
                    "pos": "xhot_list",
                    "sub": "play"
                });
            } else if ($(this).data('page') == 'recommend_hot') {
                $.ClickMonkey({
                    "page": "recommend",
                    "pos": "rhot_list",
                    "sub": "play"
                });
            }
            return false;
        });
        $(".main_table").delegate('.fct_btn .phone', 'click', function() {
            $(this).unbind();
            if (!$(this).hasClass('disable')) {
                var $tr = $(this).parents("tr").eq(0);
                var song = $tr.data("song");
                if (client.sucess)
                    client.sendPhone(new Array(song));
            }
            $.ClickMonkey({
                type: "click",
                act: "mutil_toapp"
            });
            return false;
        });
        $(".main_table").delegate('.fct_btn .more', {
            mouseup: function(event) {
                $(this).unbind()
                event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
            },
            click: function(event) {
                $(this).unbind()
                tableMouseRightEvent(event);
                if ($(this).data('page') == 'recommend_new') {
                    $.ClickMonkey({
                        "page": "recommend",
                        "pos": "xhot_list",
                        "sub": "moreinfo"
                    });
                } else if ($(this).data('page') == 'recommend_hot') {
                    $.ClickMonkey({
                        "page": "recommend",
                        "pos": "rhot_list",
                        "sub": "moreinfo"
                    });
                } else {
                    $.ClickMonkey({
                        type: "click",
                        act: "musicwindowmore",
                        pos: "musicwindowmore_left"
                    });
                }
                return false;
            }
        });
        $(".main_table").delegate('.lossless', 'click', function() {
            var $tr = $(this).parents("tr").eq(0);
            if ($tr.hasClass('offline')) {
                return false;
            }
            var song = $tr.data("song");
            downloadSong(song);
            return false;
        });
        $(".main_table").delegate('.mv_icon', 'click', function() {
            var $tr = $(this).parents("tr").eq(0);
            var song = $tr.data("song");
            playMV(song);
            return false;
        });
        $('.event_main_table_btn,.event_ugc_main_btn').delegate('.event_play_all', 'click', function() {
            var $trs = $(".main_table tr");
            var songs = [];
            $.each($trs, function() {
                song = $(this).data("song");
                songs.push(song);
            });
            playSongs(songs);
            return false;
        });
        $('.event_main_table_btn,.event_ugc_main_btn').delegate('.event_add_all', 'click', function() {
            var $trs = $(".main_table tr");
            var songs = [];
            $.each($trs, function() {
                song = $(this).data("song");
                if (!$(this).hasClass('offline')) {
                    songs.push(song);
                }
            });
            if (songs.length > 1) {
                addSongs(songs);
            } else if (songs.length == 1) {
                addSong(songs[0]);
            }
            return false;
        });
        function downTextByVersion() {
            var downName = "";
            if (checkVersionGt('10.2.2') && (checkVersionLt('11.0.3'))) {
                downNameTxt = '缓存';
            } else {
                downNameTxt = '下载';
            }
            $('.event_main_table_btn .event_download_all,.event_ugc_main_btn .event_download_all').attr('title', downNameTxt + '列表中全部歌曲');
            $('.event_main_table_btn .event_download_all i,.event_ugc_main_btn .event_download_all i').html(downNameTxt + '全部');
        }
        downTextByVersion();
        $('.event_main_table_btn,.event_ugc_main_btn').delegate('.event_download_all', 'click', function() {
            if ($(this).hasClass('isSingle')) {
                Common_Layer.init_tip('addSuccess', "应版权方要求，该歌曲暂时无法下载", "icon2");
            } else {
                var $trs = $(".main_table tr");
                var songs = [];
                var tencent_counter = 0;
                $.each($trs, function() {
                    if (!$(this).hasClass('offline')) {
                        song = $(this).data("song");
                        songs.push(song);
                    }
                });
                if (tencent_counter > 0 && songs.length < 1) {
                    Common_Layer.init_tip('addSuccess', "您好，应版权方要求，全部歌曲仅供播放，不能下载哦~", "icon3");
                    return false;
                }
                if (songs.length > 1) {
                    openDownloadPage(songs);
                } else {
                    downloadSong(songs[0]);
                }
            }
            return false;
        });
        $('.event_main_table_btn,.event_ugc_main_btn').delegate('.event_phone_all', 'click', function() {
            var $trs = $(".main_table tr");
            var songs = [];
            $.each($trs, function() {
                if (!$(this).hasClass('offline')) {
                    song = $(this).data("song");
                    songs.push(song);
                }
            });
            if (client.sucess)
                client.sendPhone(songs);
            return false;
        });
        $('.event_main_table_btn,.event_ugc_main_btn').delegate('.event_save_list', 'click', function() {
            var _self = $(this);
            var $trs = $(".main_table tr");
            var songs = [];
            $.each($trs, function() {
                song = $(this).data("song");
                songs.push(song);
            });
            songs = linkEmptyData(songs, "");
            var title = $(this).data("title");
            title = encodeURIComponent(title);
            if (client.sucess) {
                if (checkVersionGt('10.1.0')) {
                    var gedanObj = new DiyInterface()
                      , list_id = $(this).data('id')
                      , type = $(this).data('type');
                    var data = {
                        "list_id": list_id,
                        "source": type
                    };
                    var iscollect = $(this).data('iscollect');
                    var This = this;
                    if (iscollect == 0) {
                        gedanObj.addFavoriteDiy(data).done(function(jsondata) {
                            var error_code = jsondata.error_code;
                            if (error_code == 22000) {
                                client.ugcCollectSongs(list_id, title, type, 1);
                                $(This).addClass('collect_all').removeClass('no_collect_all');
                                Common_Layer.init_tip('addSuccess', "收藏成功");
                                $(This).data('iscollect', '1');
                                var current_nums = parseInt($(This).find('i').text());
                                if (!$.isNumeric(current_nums)) {
                                    current_nums = 0;
                                }
                                var nums = current_nums + 1;
                                $(This).find('i').text(nums);
                            } else if (error_code == 22713) {
                                Common_Layer.init_tip('addSuccess', "收藏成功");
                            } else {
                                Common_Layer.init_tip('addSuccess', "收藏失败", "icon2");
                            }
                        });
                    } else if (iscollect == 1) {
                        gedanObj.deleteFavoriteDiy(data).done(function(jsondata) {
                            var error_code = jsondata.error_code;
                            if (error_code == 22000) {
                                client.ugcCollectSongs(list_id, title, type, 0);
                                $(This).addClass('no_collect_all').removeClass('collect_all');
                                $(This).data('iscollect', '0');
                                Common_Layer.init_tip('addSuccess', "取消成功");
                                var current_nums = parseInt($(This).find('i').text());
                                if (!$.isNumeric(current_nums)) {
                                    current_nums = 0;
                                }
                                var nums = current_nums - 1;
                                nums = (nums == 0) ? '收藏' : nums;
                                $(This).find('i').text(nums);
                            } else {
                                Common_Layer.init_tip('addSuccess', "取消失败", "icon2");
                            }
                        });
                    }
                } else {
                    if (_self.hasClass('gedan_collect_btn')) {
                        client.newSongList(1, songs, 4, title, false);
                    } else {
                        client.newSongList(1, songs, 4, title);
                    }
                }
            }
            return false;
        });
    }
    ;
}
)(jQuery);
function tableMouseRightEvent(event) {
    setTimeout(function() {
        $(event).ttRmenu();
    }, 10);
}
;(function() {
    var Option = {};
    var $Rmenu = $()
      , $Rmenu_second = $()
      , $Rmenu_second_li = $();
    var Rmenu_second_data = new Array();
    var _timeout = null
      , _timeout1 = null;
    $.fn.ttRmenu = function(options) {
        var downName = "";
        if (checkVersionGt('10.2.2') && (checkVersionLt('11.0.3'))) {
            downName = "缓存";
        } else {
            downName = "下载";
        }
        var defaults = {
            box: 'body',
            append: '.main_body',
            delScrollHeight: true,
            menu_1: [{
                "ul": [{
                    "index": 0,
                    "name": downName,
                    "hasSecond": false,
                    "classTag": "download",
                    "copy_type": true
                }, {
                    "index": 1,
                    "name": "添加到",
                    "hasSecond": true
                }, {
                    "index": 2,
                    "name": "收藏",
                    "hasSecond": false,
                    "classTag": "collect"
                }, {
                    "index": 3,
                    "name": "分享",
                    "hasSecond": false,
                    "classTag": "share",
                    "only": true
                }, {
                    "index": 4,
                    "name": "发送到手机",
                    "hasSecond": true,
                    "copy_type": true
                }]
            }],
            menu_2: [{
                "index": 1,
                "second": [{
                    "ul": [{
                        "name": "试听列表",
                        "classTag": "add"
                    }],
                    "hasScroll": false,
                    "getMenu": false
                }, {
                    "ul": [],
                    "hasScroll": true,
                    "getMenu": true
                }, {
                    "ul": [{
                        "name": "新建本地歌单",
                        "classTag": "newLocalList"
                    }, {
                        "name": "新建云歌单",
                        "classTag": "newYunList"
                    }],
                    "hasScroll": false,
                    "getMenu": false
                }]
            }, {
                "index": 4,
                "second": [{
                    "ul": [{
                        "name": "通过WiFi连接发送",
                        "classTag": "phone"
                    }, {
                        "name": "通过登录帐号发送",
                        "classTag": "phoneLogin",
                        "only": true
                    }],
                    "hasScroll": false,
                    "getMenu": false
                }]
            }]
        };
        Option = $.extend(defaults, options);
        var event = this[0];
        $.fn.ttRmenu.hide();
        $Rmenu = $(".r-menu").eq(0);
        $Rmenu = draw_menu_1(Option.menu_1);
        position_menu_1(event.clientX, event.clientY);
        event_menu_1($('.r-menu-border.first', $Rmenu));
        $(document).unbind('mousedown').unbind('mouseup');
        $(document).mousedown(function(event) {
            if (event.which == 3) {
                $.fn.ttRmenu.hide();
            }
        }).mouseup(function(event) {
            if (event.which != 3) {
                setTimeout(function() {
                    $.fn.ttRmenu.hide()
                }, 10);
            }
        });
        return false;
    }
    ;
    $.fn.ttRmenu.menu2 = function(menu) {
        $Rmenu_second = $(".r-menu-border.second", $Rmenu);
        var html = '';
        for (var m = 0; m < menu.length; m++) {
            if (m == 0)
                html += '<ul>';
            var li = menu[m];
            html += '<li class="songList" data-menu="' + String.encodeHtml(JSON.stringify(li)) + '"><a href="javascript:;">' + li.name + '</a></li>'
            if (m == menu.length - 1)
                html += '</ul>';
        }
        if (html != "") {
            $("#rmenuScroll", $Rmenu_second).empty().html(html);
            var ie6 = !-[1, ] && !window.XMLHttpRequest;
            if (ie6) {
                $("#rmenuScroll", $Rmenu_second).height() > 128 ? $("#rmenuScroll", $Rmenu_second).height("128") : "";
            }
            $("#rmenuScroll", $Rmenu_second).ttScroll_Rmenu();
        } else {
            $("#rmenuScroll", $Rmenu_second).empty();
            $("#rmenuScroll", $Rmenu_second).next("b.line").remove();
        }
        Rmenu_second_data = menu;
        position_menu_2($Rmenu_second, 0, parseInt($(".r-menu-border.first", $Rmenu).height()));
        event_menu_2($Rmenu_second);
    }
    ;
    $.fn.ttRmenu.hide = function() {
        $Rmenu_second.remove();
        $Rmenu.remove();
        return false;
    }
    ;
    var draw_border = function(contentHtml, secondIndex) {
        var html = '<table class="r-menu-border';
        if (typeof secondIndex != "undefined" && secondIndex > 0) {
            html += ' second second_' + secondIndex;
        } else {
            html += ' first';
        }
        html += '">' + '<tr><th class="lt"></th><td class="t"></td><th class="rt"></th></tr>' + '<tr><td class="l"></td><td class="r-menu-content">' + '<div class="content">' + contentHtml + '</div>' + '</td><td class="r"></td></tr>' + '<tr><th class="lb"></th><td class="b"></td><th class="rb"></th></tr>' + '</table>';
        return html;
    };
    var draw_menu_1 = function(menu_1) {
        var $trs = $(".main_table tr.on");
        var isDownload = false;
        $.each($trs, function() {
            song = $(this).data("song");
            if (song.copy_type == 1 || song.copy_type == 2) {
                isDownload = true;
                return false;
            }
        });
        if ($Rmenu.html() == "undefined" || $Rmenu.html() == null || $Rmenu.html() == "") {
            var html = '<div class="r-menu" oncontextmenu="return false">';
            var firstHtml = '';
            if (menu_1.length > 0) {
                if (checkVersionGt('10.1.0') && checkVersionLt('11.1.3.2')) {
                    menu_1[0].ul[2].name = "喜欢";
                }
                for (var m = 0; m < menu_1.length; m++) {
                    firstHtml += '<ul>';
                    var ul = menu_1[m].ul;
                    for (var u = 0; u < ul.length; u++) {
                        var li = ul[u];
                        firstHtml += '<li data-index="' + li.index + '"  class="' + li.classTag;
                        if (li.hasSecond) {
                            firstHtml += ' second';
                        }
                        if (li.copy_type && !isDownload) {
                            firstHtml += ' disable';
                        }
                        if (li.only && $trs.length > 1) {
                            firstHtml += ' disable';
                        }
                        firstHtml += '"><a href="javascript:;">' + li.name + '</a></li>';
                    }
                    firstHtml += '</ul>';
                    if (m != menu_1.length - 1) {
                        firstHtml += '<b class="line"></b>';
                    }
                }
                html += draw_border(firstHtml);
            }
            html += '</div>';
            $Rmenu = $(html).appendTo($(Option.append));
        }
        return $Rmenu;
    }
      , position_menu_1 = function(x, y) {
        var scrollHeight = 0;
        if (Option.delScrollHeight) {
            try {
                scrollHeight = $.fn.ttScroll.scrollHeight();
            } catch (e) {}
        }
        var left = x + 2;
        var top = y - scrollHeight - 2;
        if (window.location.pathname == "/2018/app/download/downloadBatch.html") {
            top -= 65;
        }
        var right = parseInt(x + $Rmenu.width())
          , right_border = parseInt($(Option.box).width());
        var bottom = y + $Rmenu.height()
          , bottom_border = $(Option.box).height();
        if ($('#header').length > 0) {
            bottom = bottom + $('#header').height();
            top = top - $('#header').height();
        }
        if ($('.mCSB_container').length > 0) {
            var window_scroll_top = parseInt($('.mCSB_container').css('top'));
            top = top - window_scroll_top;
        }
        if (right > right_border) {
            left -= $Rmenu.width() - 4;
        }
        if (bottom > bottom_border) {
            top -= $Rmenu.height() - 4;
        }
        $Rmenu.css({
            "left": left + "px",
            "top": top + "px"
        }).css({
            "display": "block"
        });
    }
      , event_menu_1 = function($menu) {
        $('ul li', $menu).unbind().hover(function() {
            if (!$(this).hasClass("disable"))
                $(this).addClass("hover");
            clearTimeout(_timeout);
            $Rmenu_second = $('.r-menu-border.second', $Rmenu).eq(0);
            if ($(this).hasClass('second') && !$(this).hasClass('disable')) {
                if ($Rmenu_second.length > 0) {
                    clearTimeout(_timeout1);
                    $Rmenu_second.remove();
                }
                $Rmenu_second_li = $(this);
                var index = $Rmenu_second_li.data('index');
                _timeout = setTimeout(function() {
                    draw_menu_2(Option.menu_2, index);
                }, 300);
            } else {
                clearTimeout(_timeout1);
                $Rmenu_second.remove();
                $Rmenu_second_li = $();
                $('ul li.second', $menu).removeClass("hover");
            }
        }, function() {
            clearTimeout(_timeout);
            $Rmenu_second = $('.r-menu-border.second', $Rmenu).eq(0);
            if ($(this).hasClass('second')) {
                _timeout1 = setTimeout(function() {
                    $Rmenu_second.remove();
                    $Rmenu_second_li = $();
                    $('ul li.second', $menu).removeClass("hover");
                }, 100);
            } else {
                $(this).removeClass("hover");
            }
        });
        $('ul li.second', $menu).mouseup(function(event) {
            event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
        }).click(function() {
            return false;
        });
        $('.download', $menu).unbind("click").click(function() {
            if (!$(this).hasClass('disable')) {
                var $trs = $(".main_table tr.on");
                var songs = [];
                $.each($trs, function() {
                    song = $(this).data("song");
                    if (!$(this).hasClass('offline')) {
                        if (song.copy_type == 1 || song.copy_type == 2) {
                            songs.push(song);
                        }
                    }
                });
                if (songs.length == 1) {
                    downloadSong(songs[0]);
                } else {
                    openDownloadPage(songs);
                }
            }
        });
        $('.collect', $menu).unbind("click").click(function() {
            var $trs = $(".main_table tr.on");
            var songIds = []
              , songs = [];
            $.each($trs, function() {
                song = $(this).data("song");
                songIds.push(song.song_id);
                songs.push(song);
            });
            collectSongs(songIds, songs);
        });
        $('.share', $menu).unbind("click").click(function() {
            if (!$(this).hasClass('disable')) {
                var $tr = $(".main_table tr.on").eq(0);
                var song = $tr.data("song");
                if (checkVersionGt('10.1.0')) {
                    if (client.sucess)
                        client.openShareWindow(song);
                } else {
                    shareSong(song);
                }
            }
        });
        $('.addCloud', $menu).unbind("click").click(function() {
            var $trs = $(".main_table tr.on");
            var songs = [];
            $.each($trs, function() {
                song = $(this).data("song");
                songs.push(song);
            });
            addSongs(songs);
        });
        $('.deleteCloud', $menu).unbind("click").click(function() {
            var $trs = $(".main_table tr.on");
            var songIds = [];
            $.each($trs, function() {
                song = $(this).data("song");
                songIds.push(song.song_id);
            });
            try {
                deleteCloud(songIds);
            } catch (e) {}
        });
    };
    var draw_menu_2 = function(menu_2, index) {
        var $trs = $(".main_table tr.on");
        var secondHtml = '';
        var getMemu = false;
        var $Rmenu_second = $('.r-menu-border.second_' + index, $Rmenu);
        if ($Rmenu_second.html() == null || $Rmenu_second.html() == "") {
            for (var i = 0; i < menu_2.length; i++) {
                if (index == 1 && checkVersionGt('10.1.0')) {
                    menu_2[i].second[2].ul.length = 1;
                    menu_2[i].second[2].ul[0].name = "新建歌单";
                    menu_2[i].second[2].ul[0].classTag = "newYunList";
                }
                if (menu_2[i].index == index) {
                    var menu = menu_2[i].second;
                    for (var m = 0; m < menu.length; m++) {
                        if (menu[m].hasScroll) {
                            secondHtml += '<div id="rmenuScroll">'
                        }
                        if (menu[m].getMenu) {
                            secondHtml += '<div id="load"></div>'
                            getMemu = true;
                        } else {
                            var ul = menu[m].ul;
                            secondHtml += '<ul>';
                            for (var u = 0; u < ul.length; u++) {
                                var li = ul[u];
                                secondHtml += '<li class="' + li.classTag;
                                if (li.only && $trs.length > 1) {
                                    secondHtml += ' disable';
                                }
                                secondHtml += '"><a href="javascript:;">' + li.name + '</a></li>';
                            }
                            secondHtml += '</ul>';
                        }
                        if (menu[m].hasScroll) {
                            secondHtml += '</div>'
                        }
                        if (m != menu.length - 1) {
                            secondHtml += '<b class="line"></b>';
                        }
                    }
                    break;
                }
            }
            secondHtml = draw_border(secondHtml, index);
            $Rmenu_second = $(secondHtml).appendTo($Rmenu);
            position_menu_2($Rmenu_second, 0, parseInt($(".r-menu-border.first", $Rmenu).height()));
            event_menu_2($Rmenu_second);
        } else {
            getMemu = true;
        }
        if (getMemu) {
            var client = new Client();
            if (client.sucess)
                client.getMenu();
        }
        return $Rmenu_second;
    }
      , position_menu_2 = function($Rmenu_second, x, y) {
        var left = x + $Rmenu_second_li.width();
        var top = -y + ($Rmenu_second_li.offset().top - $Rmenu.offset().top);
        var right = $Rmenu.offset().left + left + $Rmenu_second.width()
          , right_border = parseInt($(Option.box).width());
        var bottom = $Rmenu_second_li.offset().top + $Rmenu_second.height()
          , bottom_border = parseInt($(Option.box).height());
        if (right > right_border) {
            left = x - $Rmenu_second.width() + 6;
        }
        if (bottom > bottom_border) {
            top = top - $Rmenu_second.height() + $Rmenu_second_li.height();
        }
        $Rmenu_second.css({
            "left": left + "px",
            "top": top + "px"
        });
    }
      , event_menu_2 = function($menu) {
        $menu.unbind().mouseover(function() {
            clearTimeout(_timeout1);
            $(this).show();
        });
        $('ul li', $menu).unbind().hover(function() {
            if (!$(this).hasClass("disable"))
                $(this).addClass("hover");
        }, function() {
            $(this).removeClass("hover");
        });
        $('.add', $menu).unbind('click').click(function() {
            var $trs = $(".main_table tr.on");
            var songs = [];
            $.each($trs, function() {
                if (!$(this).hasClass('offline')) {
                    song = $(this).data("song");
                    songs.push(song);
                }
            });
            addSongs(songs);
            return false;
        });
        $('.newLocalList', $menu).unbind('click').click(function() {
            var $trs = $(".main_table tr.on");
            var songs = [];
            $.each($trs, function() {
                if (!$(this).hasClass('offline')) {
                    song = $(this).data("song");
                    songs.push(song);
                }
            });
            if (client.sucess)
                client.newSongList(0, songs, 2);
        });
        $('.newYunList', $menu).unbind('click').click(function() {
            var $trs = $(".main_table tr.on");
            var songs = [];
            $.each($trs, function() {
                if (!$(this).hasClass('offline')) {
                    song = $(this).data("song");
                    songs.push(song);
                }
            });
            songs = linkEmptyData(songs, "");
            if (client.sucess)
                client.newSongList(1, songs, 2);
        });
        $('.songList', $menu).unbind('click').click(function() {
            var $trs = $(".main_table tr.on");
            var songs = [];
            $.each($trs, function() {
                if (!$(this).hasClass('offline')) {
                    song = $(this).data("song");
                    songs.push(song);
                }
            });
            var menu = $(this).data("menu");
            if (menu.type == 5) {
                songs = linkEmptyData(songs, "");
            }
            if (client.sucess)
                client.addSongToList(menu.type, menu.id, songs);
        });
        $('.phone', $menu).unbind("click").click(function() {
            if (!$(this).hasClass('disable')) {
                var $trs = $(".main_table tr.on");
                var songs = [];
                $.each($trs, function() {
                    if (!$(this).hasClass('offline')) {
                        song = $(this).data("song");
                        if (song.copy_type == 1 || song.copy_type == 2) {
                            songs.push(song);
                        }
                    }
                });
                if (songs.length > 0 && client.sucess)
                    client.sendPhone(songs);
                $.ClickMonkey({
                    type: "click",
                    act: "mutil_toapp"
                });
            }
        });
        $('.phoneLogin', $menu).unbind("click").click(function() {
            if (!$(this).hasClass('disable')) {
                var $tr = $(".main_table tr.on").eq(0);
                var song = $tr.data("song");
                if (client.sucess) {
                    try {
                        client.sendPhoneLogin(new Array(song));
                    } catch (e) {
                        updownCommonLayer("通过帐号发送到手机");
                    }
                }
                $.ClickMonkey({
                    type: "click",
                    page: "online",
                    pos: "menu_login"
                });
            }
        });
    };
}
)(jQuery);
;(function() {
    $.fn.pagenum = function(options) {
        var defaults = {
            link_url: document.location.href,
            total: 0,
            size: 0,
            page: 1,
            neighbor: 2,
            neighbor_plugin: 1,
            static: true
        };
        var Option = $.extend(defaults, options);
        Option.total = parseInt(Option.total);
        Option.size = parseInt(Option.size);
        Option.page = parseInt(Option.page);
        if (!Option.total || !Option.size || Option.total <= Option.size) {
            return;
        }
        var pagen = Math.ceil(Option.total / Option.size);
        Option.page = Option.page < 1 ? 1 : Option.page;
        if (Option.page > pagen) {
            return;
        }
        $page = $(this);
        var pre_html = ''
          , next_html = '';
        var pre_url = getUrl(Option.link_url, Option.static, Option.page - 1);
        var next_url = getUrl(Option.link_url, Option.static, Option.page + 1);
        if (Option.page == 1) {
            pre_html = '<a href="javascript:;" class="pre disable"></a>';
            next_html = '<a href="' + next_url + '" class="next"></a>';
        } else if (Option.page == pagen) {
            pre_html = '<a href="' + pre_url + '" class="pre"></a>';
            next_html = '<a href="javascript:;" class="next disable"></a>';
        } else {
            pre_html = '<a href="' + pre_url + '" class="pre"></a>';
            next_html = '<a href="' + next_url + '" class="next"></a>';
        }
        var start = Option.page - Option.neighbor;
        var end = Option.page + Option.neighbor;
        if (start < 0) {
            end += Option.neighbor_plugin;
        }
        if (end > pagen + 1) {
            start -= Option.neighbor_plugin;
        }
        var num_html = '';
        var left_ellipsis = false
          , right_ellipsis = false;
        for (var n = 1; n <= pagen; n++) {
            var url = getUrl(Option.link_url, Option.static, n);
            if (n == Option.page) {
                num_html += '<a href="javascript:;" class="num visited">' + n + '</a>';
                continue;
            }
            if (n == 1 || n == pagen) {
                num_html += '<a href="' + url + '" class="num">' + n + '</a>';
                continue;
            }
            if (n < start) {
                if (!left_ellipsis) {
                    num_html += '<span class="ellipsis"></span>';
                    left_ellipsis = true;
                }
                continue;
            }
            if (n > end) {
                if (!right_ellipsis) {
                    num_html += '<span class="ellipsis"></span>';
                    right_ellipsis = true;
                }
                continue;
            }
            num_html += '<a href="' + url + '" class="num">' + n + '</a>';
        }
        var page_num_html = '<div class="page_num">' + pre_html + num_html + next_html + '</div>';
        $page.html(page_num_html);
        $("a.num", $page).hover(function() {
            if (!$(this).hasClass("visited"))
                $(this).addClass("hovernum");
        }, function() {
            $(this).removeClass("hovernum");
        });
        $("a.pre", $page).hover(function() {
            if (!$(this).hasClass("visited"))
                $(this).addClass("hoverpre");
        }, function() {
            $(this).removeClass("hoverpre");
        });
        $("a.next", $page).hover(function() {
            if (!$(this).hasClass("visited"))
                $(this).addClass("hovernext");
        }, function() {
            $(this).removeClass("hovernext");
        });
    }
    var getStaticUrl = function(staticUrl, nn) {
        var staticArray = staticUrl.split("_");
        var url = "";
        for (var n = 0; n < staticArray.length; n++) {
            if (n > 0)
                url += "_";
            if (n == staticArray.length - 1)
                url += nn + ".html";
            else
                url += staticArray[n];
        }
        return url;
    }
      , getUrl = function(url, static, n) {
        var reUrl = "";
        if (static) {
            reUrl = getStaticUrl(url, n);
        } else {
            if (url.indexOf('page=') > -1) {
                reUrl = url.replace(/(page=)(\d*$)/, "$1" + n);
            } else {
                reUrl = url + "&page=" + n;
            }
        }
        try {
            reUrl = String.encodeHtml(reUrl);
        } catch (e) {}
        return reUrl;
    };
}
)(jQuery);
;(function($) {
    $.fn.lazyload = function(options) {
        var settings = {
            "threshold": 0,
            "failurelimit": 0,
            "event": "scroll",
            "effect": "fadeIn",
            "effectspeed": "fast",
            "effect_default": "show",
            "effectspeed_default": 0,
            "effectnum": 0,
            "container": window
        };
        options && $.extend(settings, options);
        var elements = this;
        return "scroll" == settings.event && $(settings.container).live(settings.event, function(event, loadn) {
            var num = 0
              , counter = 0
              , effectnum = settings.effectnum > 0 ? settings.effectnum : elements.length;
            elements.each(function(n) {
                if (num >= effectnum) {
                    return !1;
                } else if (!$.abovethetop(this, settings) && !$.leftofbegin(this, settings))
                    if (!$.belowthefold(this, settings) && !$.rightoffold(this, settings)) {
                        $(this).trigger("appear", loadn);
                        num++;
                    } else if (counter++ >= settings.failurelimit) {
                        return !1;
                    }
            });
            var temp = $.grep(elements, function(element) {
                return !element.loaded;
            });
            elements = $(temp);
        }),
        this.each(function() {
            var self = this;
            $(self).one("appear", function(event, loadn) {
                this.loaded || $('<img class="lazylod" />').bind("load", function() {
                    if (loadn == 1) {
                        $(self).attr("src", $(self).attr("key"));
                    } else {
                        $(self).hide().attr("src", $(self).attr("key"))[settings.effect](settings.effectspeed);
                    }
                }).attr("src", $(self).attr("key")),
                self.loaded = !0;
            });
        }),
        $(settings.container).trigger(settings.event, 1),
        this;
    }
    ,
    $.belowthefold = function(element, settings) {
        if (settings.container === undefined || settings.container === window)
            var fold = $(window).height() + $(window).scrollTop();
        else
            var fold = $(settings.container).offset().top + $(settings.container).height();
        return fold <= $(element).offset().top - settings.threshold;
    }
    ,
    $.rightoffold = function(element, settings) {
        if (settings.container === undefined || settings.container === window)
            var fold = $(window).width() + $(window).scrollLeft();
        else
            var fold = $(settings.container).offset().left + $(settings.container).width();
        return fold <= $(element).offset().left - settings.threshold;
    }
    ,
    $.abovethetop = function(element, settings) {
        if (settings.container === undefined || settings.container === window)
            var fold = $(window).scrollTop();
        else
            var fold = $(settings.container).offset().top;
        return fold >= $(element).offset().top + settings.threshold + $(element).height();
    }
    ,
    $.leftofbegin = function(element, settings) {
        if (settings.container === undefined || settings.container === window)
            var fold = $(window).scrollLeft();
        else
            var fold = $(settings.container).offset().left;
        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    }
    ,
    $.extend($.expr[":"], {
        "below-the-fold": "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold": "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold": "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold": "!$.rightoffold(a, {threshold : 0, container: window})"
    });
}
)(jQuery);
;(function() {
    var Option = {};
    var Max_length = 0;
    var $Scroll = {
        scroll_box: null,
        wrap_box: null,
        scroll_bar: null
    };
    var ScrollBar_Interval = null;
    var lazy_timeout = null;
    var resizeTimer = null;
    $.fn.ttScroll = function(options, alias) {
        if (alias && alias != "") {
            eval('$(this).ttScroll' + alias + '(options);');
            return;
        }
        var defaults = {
            display: 'auto',
            png: false
        };
        var $scroll_box = $(this);
        var flag = createScroll($scroll_box);
        if (!flag) {
            return;
        }
        Option = $.extend(defaults, options);
        if (Option.png && !-[1, ] && !window.XMLHttpRequest) {
            DD_belatedPNG.fix('.png');
        }
        var $bar_m = $('.bar-m', $Scroll.scroll_bar).eq(0);
        $bar_m.mouseover(function() {
            $(this).addClass("barHover");
        }).mouseout(function() {
            $(this).removeClass("barHover");
        }).mousedown(barMMousedown);
        $bar_m.click(function(event) {
            (event || window.event).cancelBubble = true;
        });
        $Scroll.scroll_bar.mousedown(scrollBarMousedown);
        $Scroll.scroll_bar.mouseup(function(event) {
            clearInterval(ScrollBar_Interval);
        });
        $Scroll.scroll_box.mouseover(function(event) {
            $Scroll.scroll_box.unbind();
            event = event || window.event;
            addHandler(this, "mousewheel", wrapBoxMousewheel);
            addHandler(this, "DOMMouseScroll", wrapBoxMousewheel);
        });
    }
    ;
    $.fn.ttScroll.resize = (function(el) {
        $(window).resize(function() {
            if (resizeTimer) {
                clearTimeout(resizeTimer);
            }
            resizeTimer = setTimeout(update, 1000 / 16);
        })
    }
    )();
    var update = function(event) {
        $scroll_box = $('#useScroll');
        $wrap_box = $('.scroll_wrap').eq(0);
        var $scroll_bar = null;
        if ($scroll_box.height() < $wrap_box.height()) {
            if (!$('.bar-m').length > 0 || $('.scroll-bar').css('display') == 'none') {
                createScroll($scroll_box);
                var $bar_m = $('.bar-m', $Scroll.scroll_bar).eq(0);
                $bar_m.mouseover(function() {
                    $(this).addClass("barHover");
                }).mouseout(function() {
                    $(this).removeClass("barHover");
                }).mousedown(barMMousedown);
                $bar_m.click(function(event) {
                    (event || window.event).cancelBubble = true;
                });
                $Scroll.scroll_bar.mousedown(scrollBarMousedown);
                $Scroll.scroll_bar.mouseup(function(event) {
                    clearInterval(ScrollBar_Interval);
                });
                $Scroll.scroll_box.mouseover(function(event) {
                    $Scroll.scroll_box.unbind();
                    event = event || window.event;
                    addHandler(this, "mousewheel", wrapBoxMousewheel);
                    addHandler(this, "DOMMouseScroll", wrapBoxMousewheel);
                });
            } else {
                var pre_height = $('.bar-m').height();
                var size_data = getScrollSize($scroll_box, $wrap_box);
                Max_length = size_data.scroll_height - size_data.bar_height;
                $('.scroll-bar').height(size_data.scroll_height);
                $(".bar-m", $Scroll.scroll_bar).height(size_data.bar_height);
                var cur_height = $('.bar-m').height();
                var offset = pre_height - cur_height;
                togetherMove(offset, 1);
            }
        } else {
            $('.scroll-bar').remove();
            setScroll($scroll_box, $wrap_box, $scroll_bar);
            $('.scroll_wrap').css('top', '0');
        }
    };
    var barMMousedown = function(event) {
        var $bar_m = $('.bar-m', $Scroll.scroll_bar).eq(0);
        var event = event || window.event;
        if ($.browser.msie) {
            $bar_m[0].setCapture();
        }
        var disL = event.clientY - parseInt($('.bar-m', $Scroll.scroll_bar).css('top'));
        $(document).mousemove(function(event) {
            var event = event || window.event;
            $bar_m.addClass("barHover");
            var iL = Math.floor(event.clientY - disL);
            iL <= 0 && (iL = 0);
            iL >= Max_length && (iL = Max_length);
            $bar_m.css("top", iL + "px");
            var iScale = iL / Max_length;
            var iTarget = parseInt(($Scroll.scroll_box.height() - $Scroll.wrap_box.height()) * iScale);
            doMove($Scroll.wrap_box, iTarget, 1);
            return false;
        });
        $(document).mouseup(function() {
            $(document).unbind('mousemove');
            $bar_m.removeClass("barHover");
            if ($.browser.msie) {
                $bar_m[0].releaseCapture();
            }
        });
        return false;
    };
    var scrollBarMousedown = function(event) {
        var $bar_m = $('.bar-m', $Scroll.scroll_bar).eq(0);
        event = event || window.event;
        var top = $(this).offset().top;
        var height = $bar_m.height();
        var targetFlag = (event.clientY - top) > (parseInt($bar_m.css("top")) + height);
        var iTarget = targetFlag ? height : -height;
        iTarget = parseInt($(".bar-m", $Scroll.scroll_bar).css("top")) + iTarget;
        togetherMove(iTarget, 1);
        ScrollBar_Interval = setInterval(function() {
            var iTarget = 0;
            if (targetFlag && ((event.clientY - top) > (parseInt($bar_m.css("top")) + $bar_m.height()))) {
                iTarget = height;
            } else if (!targetFlag && ((event.clientY - top) < parseInt($bar_m.css("top")))) {
                iTarget = -height;
            } else {
                clearInterval(ScrollBar_Interval);
                return;
            }
            iTarget = parseInt($(".bar-m", $Scroll.scroll_bar).css("top")) + iTarget;
            togetherMove(iTarget, 1);
        }, 100);
    };
    var wrapBoxMousewheel = function() {
        event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
        var delta = 0;
        if (!event)
            event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
        } else if (event.detail) {
            delta = -event.detail / 3;
        }
        var pec = Max_length / $Scroll.wrap_box.height();
        var iTarget = delta > 0 ? ((-200 * pec) < -1 ? (-200 * pec) : -1) : ((200 * pec) > 1 ? (200 * pec) : 1);
        iTarget = parseInt($(".bar-m", $Scroll.scroll_bar).css("top")) + iTarget;
        togetherMove(iTarget, 2);
    };
    $.fn.ttScroll.scrollHeight = function() {
        if ($Scroll.wrap_box == null) {
            return 0;
        } else {
            var top = $Scroll.wrap_box.css("top");
            return parseInt(top);
        }
    }
    ;
    var setScroll = function(scroll_box, wrap_box, scroll_bar) {
        $Scroll.scroll_box = scroll_box;
        $Scroll.wrap_box = wrap_box;
        $Scroll.scroll_bar = scroll_bar;
    };
    var createScroll = function($scroll_box) {
        $scroll_box.css({
            "position": "relative",
            "overflow": "hidden"
        });
        var $wrap_box = $(".scroll_wrap", $scroll_box);
        if ($wrap_box.length == 0) {
            $scroll_box.wrapInner('<div class="scroll_wrap" style="position:relative;top:0;"></div>');
            $wrap_box = $('.scroll_wrap', $scroll_box).eq(0);
        }
        var $scroll_bar = null;
        var size_data = getScrollSize($scroll_box, $wrap_box);
        if (size_data.scroll_height > size_data.bar_height) {
            var scroll_bar_html = '<div class="scroll-bar" style="top:0;right:0;height:' + size_data.scroll_height + 'px;">' + '<div class="bar-m" style="height:' + (size_data.bar_height) + 'px;">' + '<div class="l"></div>' + '<div class="r"></div>' + '</div></div>';
            $scroll_bar = $(scroll_bar_html);
            $scroll_box.append($scroll_bar);
            setScroll($scroll_box, $wrap_box, $scroll_bar);
            var topNavHeight = 0;
            if ($('#header') && $scroll_box.prev().is('#header')) {
                topNavHeight = $('#header').height();
            }
            Max_length = size_data.scroll_height - size_data.bar_height - topNavHeight;
            return true;
        } else {
            return false;
        }
    }
      , getScrollSize = function($scroll_box, $wrap_box) {
        var scroll_height = $scroll_box.height();
        var data = {
            "scroll_height": parseInt(scroll_height),
            "bar_height": parseInt(scroll_height / $wrap_box.height() * scroll_height)
        };
        return data;
    };
    var togetherMove = function(iTarget, buffer) {
        if (iTarget <= 0) {
            iTarget = 0
        } else if (iTarget >= Max_length) {
            iTarget = Max_length;
        }
        iScale = iTarget / Max_length;
        doMove($Scroll.wrap_box, parseInt(($Scroll.scroll_box.height() - $Scroll.wrap_box.height()) * iScale), buffer);
        doMove($(".bar-m", $Scroll.scroll_bar), parseInt(iTarget), buffer);
    }
      , doMove = function($obj, iTarget, buffer) {
        try {
            $.fn.ttRmenu.hide();
        } catch (e) {}
        var iPos = parseInt($obj.css("top"));
        var iSpeed = (iTarget - iPos) / (buffer || 5);
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        iPos == iTarget ? null : $obj.css("top", iPos + iSpeed + "px");
        try {
            clearTimeout(lazy_timeout);
            lazy_timeout = setTimeout(function() {
                $Scroll.scroll_box.trigger("scroll", 2);
            }, 100);
        } catch (e) {}
        return false;
    };
    var addHandler = function(element, type, handler) {
        return element.addEventListener ? element.addEventListener(type, handler, false) : element.attachEvent("on" + type, handler)
    };
}
)(jQuery);
(function() {
    var Option = {};
    var Max_length = 0;
    var $Scroll = {
        scroll_box: null,
        wrap_box: null,
        scroll_bar: null
    };
    var ScrollBar_Interval = null;
    $.fn.ttScroll_Rmenu = function(options) {
        var defaults = {
            display: 'auto',
            png: false
        }
        var $scroll_box = $(this);
        var flag = createScroll($scroll_box);
        if (!flag) {
            return;
        }
        Option = $.extend(defaults, options);
        if (Option.png && !-[1, ] && !window.XMLHttpRequest) {
            DD_belatedPNG.fix('.png');
        }
        var $bar_m = $('.bar-m', $Scroll.scroll_bar).eq(0);
        $bar_m.mouseover(function() {
            $(this).addClass("barHover");
        }).mouseout(function() {
            $(this).removeClass("barHover");
        }).mousedown(function(event) {
            var event = event || window.event;
            if ($.browser.msie) {
                $bar_m[0].setCapture();
            }
            var disL = event.clientY - parseInt($('.bar-m', $Scroll.scroll_bar).css('top'));
            $(document).mousemove(function(event) {
                var event = event || window.event;
                $bar_m.addClass("barHover");
                var iL = Math.floor(event.clientY - disL);
                iL <= 0 && (iL = 0);
                iL >= Max_length && (iL = Max_length);
                $bar_m.css("top", iL + "px");
                var iScale = iL / Max_length;
                var iTarget = parseInt(($Scroll.scroll_box.height() - $Scroll.wrap_box.height()) * iScale);
                doMove($Scroll.wrap_box, iTarget, 1);
                return false;
            });
            $(document).unbind("mouseup").mouseup(function(event) {
                $(document).unbind("mousemove");
                $bar_m.removeClass("barHover");
                if ($.browser.msie) {
                    $bar_m[0].releaseCapture();
                }
                $(document).unbind("mouseup").mouseup(function(event) {
                    try {
                        if (event.which != 3)
                            setTimeout(function() {
                                $.fn.ttRmenu.hide()
                            }, 10);
                    } catch (e) {}
                });
            });
            return false;
        });
        $bar_m.click(function(event) {
            (event || window.event).cancelBubble = true;
        });
        $Scroll.scroll_bar.mousedown(function(event) {
            event = event || window.event;
            var top = $(this).offset().top;
            var height = $bar_m.height();
            var targetFlag = (event.clientY - top) > (parseInt($bar_m.css("top")) + height);
            var iTarget = targetFlag ? height : -height;
            iTarget = parseInt($(".bar-m", $Scroll.scroll_bar).css("top")) + iTarget;
            togetherMove(iTarget, 1);
            ScrollBar_Interval = setInterval(function() {
                var iTarget = 0;
                if (targetFlag && ((event.clientY - top) > (parseInt($bar_m.css("top")) + $bar_m.height()))) {
                    iTarget = height;
                } else if (!targetFlag && ((event.clientY - top) < parseInt($bar_m.css("top")))) {
                    iTarget = -height;
                } else {
                    clearInterval(ScrollBar_Interval);
                    return;
                }
                iTarget = parseInt($(".bar-m", $Scroll.scroll_bar).css("top")) + iTarget;
                togetherMove(iTarget, 1);
            }, 100);
            $(document).unbind("mouseup").mouseup(function(event) {
                $(document).unbind("mouseup").mouseup(function(event) {
                    try {
                        if (event.which != 3)
                            setTimeout(function() {
                                $.fn.ttRmenu.hide()
                            }, 10);
                    } catch (e) {}
                });
            });
        });
        $Scroll.scroll_bar.mouseup(function(event) {
            clearInterval(ScrollBar_Interval);
        });
        $Scroll.scroll_box.mouseover(function(event) {
            $Scroll.scroll_box.unbind();
            event = event || window.event;
            function mouseWheel(event) {
                event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
                var delta = 0;
                if (!event)
                    event = window.event;
                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120;
                } else if (event.detail) {
                    delta = -event.detail / 3;
                }
                var pec = Max_length / $Scroll.wrap_box.height();
                var iTarget = delta > 0 ? ((-50 * pec) < -1 ? (-50 * pec) : -1) : ((50 * pec) > 1 ? (50 * pec) : 1);
                var iTarget = parseInt($(".bar-m", $Scroll.scroll_bar).css("top")) + iTarget;
                togetherMove(iTarget, 2);
            }
            addHandler(this, "mousewheel", mouseWheel);
            addHandler(this, "DOMMouseScroll", mouseWheel);
        });
    }
    ;
    var setScroll = function(scroll_box, wrap_box, scroll_bar) {
        $Scroll.scroll_box = scroll_box;
        $Scroll.wrap_box = wrap_box;
        $Scroll.scroll_bar = scroll_bar;
    };
    var createScroll = function($scroll_box) {
        $scroll_box.css({
            "position": "relative",
            "overflow": "hidden"
        });
        var $wrap_box = $(".scroll_wrap", $scroll_box);
        if ($wrap_box.length == 0) {
            $scroll_box.wrapInner('<div class="scroll_wrap" style="position:relative;top:0;"></div>');
            $wrap_box = $('.scroll_wrap', $scroll_box).eq(0);
        }
        var $scroll_bar = null;
        var size_data = getScrollSize($scroll_box, $wrap_box);
        if (size_data.scroll_height > size_data.bar_height) {
            var scroll_bar_html = '<div class="scroll-bar no-bg" style="top:0;right:0;height:' + size_data.scroll_height + 'px;">' + '<div class="bar-m" style="height:' + (size_data.bar_height) + 'px;">' + '<div class="l"></div>' + '<div class="r"></div>' + '</div></div>';
            $scroll_bar = $(scroll_bar_html);
            $scroll_box.append($scroll_bar);
            setScroll($scroll_box, $wrap_box, $scroll_bar);
            Max_length = size_data.scroll_height - size_data.bar_height;
            return true;
        } else {
            return false;
        }
    }
      , getScrollSize = function($scroll_box, $wrap_box) {
        var scroll_height = $scroll_box.height();
        var bar_height = parseInt(scroll_height / $wrap_box.height() * scroll_height);
        var data = {
            "scroll_height": parseInt(scroll_height),
            "bar_height": bar_height < 15 ? 15 : bar_height
        }
        return data;
    };
    var togetherMove = function(iTarget, buffer) {
        if (iTarget <= 0) {
            iTarget = 0
        } else if (iTarget >= Max_length) {
            iTarget = Max_length;
        }
        iScale = iTarget / Max_length;
        doMove($Scroll.wrap_box, parseInt(($Scroll.scroll_box.height() - $Scroll.wrap_box.height()) * iScale), buffer);
        doMove($(".bar-m", $Scroll.scroll_bar), parseInt(iTarget), buffer);
    }
      , doMove = function($obj, iTarget, buffer) {
        var iPos = parseInt($obj.css("top"));
        var iSpeed = (iTarget - iPos) / (buffer || 5);
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        iPos == iTarget ? null : $obj.css("top", iPos + iSpeed + "px");
        return false;
    };
    var addHandler = function(element, type, handler) {
        return element.addEventListener ? element.addEventListener(type, handler, false) : element.attachEvent("on" + type, handler)
    };
}
)(jQuery);
(function() {
    var Option = {};
    var Max_length = 0;
    var $Scroll = {
        scroll_box: null,
        wrap_box: null,
        scroll_bar: null
    };
    var ScrollBar_Interval = null;
    $.fn.ttScroll_Box = function(options) {
        var defaults = {
            display: 'auto',
            png: false
        }
        var $scroll_box = $(this);
        var flag = createScroll($scroll_box);
        if (!flag) {
            return;
        }
        Option = $.extend(defaults, options);
        if (Option.png && !-[1, ] && !window.XMLHttpRequest) {
            DD_belatedPNG.fix('.png');
        }
        var $bar_m = $('.bar-m', $Scroll.scroll_bar).eq(0);
        $bar_m.mouseover(function() {
            $(this).addClass("barHover");
        }).mouseout(function() {
            $(this).removeClass("barHover");
        }).mousedown(function(event) {
            var event = event || window.event;
            if ($.browser.msie) {
                $bar_m[0].setCapture();
            }
            var disL = event.clientY - parseInt($('.bar-m', $Scroll.scroll_bar).css('top'));
            $(document).mousemove(function(event) {
                var event = event || window.event;
                $bar_m.addClass("barHover");
                var iL = Math.floor(event.clientY - disL);
                iL <= 0 && (iL = 0);
                iL >= Max_length && (iL = Max_length);
                $bar_m.css("top", iL + "px");
                var iScale = iL / Max_length;
                var iTarget = parseInt(($Scroll.scroll_box.height() - $Scroll.wrap_box.height()) * iScale);
                doMove($Scroll.wrap_box, iTarget, 1);
                return false;
            });
            $(document).unbind("mouseup").mouseup(function(event) {
                $(document).unbind("mousemove");
                $bar_m.removeClass("barHover");
                if ($.browser.msie) {
                    $bar_m[0].releaseCapture();
                }
                $(document).unbind("mouseup").mouseup(function(event) {
                    try {
                        if (event.which != 3)
                            setTimeout(function() {
                                $.fn.ttRmenu.hide()
                            }, 10);
                    } catch (e) {}
                });
            });
            return false;
        });
        $bar_m.click(function(event) {
            (event || window.event).cancelBubble = true;
        });
        $Scroll.scroll_bar.mousedown(function(event) {
            event = event || window.event;
            var top = $(this).offset().top;
            var height = $bar_m.height();
            var targetFlag = (event.clientY - top) > (parseInt($bar_m.css("top")) + height);
            var iTarget = targetFlag ? height : -height;
            iTarget = parseInt($(".bar-m", $Scroll.scroll_bar).css("top")) + iTarget;
            togetherMove(iTarget, 1);
            ScrollBar_Interval = setInterval(function() {
                var iTarget = 0;
                if (targetFlag && ((event.clientY - top) > (parseInt($bar_m.css("top")) + $bar_m.height()))) {
                    iTarget = height;
                } else if (!targetFlag && ((event.clientY - top) < parseInt($bar_m.css("top")))) {
                    iTarget = -height;
                } else {
                    clearInterval(ScrollBar_Interval);
                    return;
                }
                iTarget = parseInt($(".bar-m", $Scroll.scroll_bar).css("top")) + iTarget;
                togetherMove(iTarget, 1);
            }, 100);
            $(document).unbind("mouseup").mouseup(function(event) {
                $(document).unbind("mouseup").mouseup(function(event) {
                    try {
                        if (event.which != 3)
                            setTimeout(function() {
                                $.fn.ttRmenu.hide()
                            }, 10);
                    } catch (e) {}
                });
            });
        });
        $Scroll.scroll_bar.mouseup(function(event) {
            clearInterval(ScrollBar_Interval);
        });
        $Scroll.scroll_box.mouseover(function(event) {
            $Scroll.scroll_box.unbind();
            event = event || window.event;
            function mouseWheel(event) {
                event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
                var delta = 0;
                if (!event)
                    event = window.event;
                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120;
                } else if (event.detail) {
                    delta = -event.detail / 3;
                }
                var pec = Max_length / $Scroll.wrap_box.height();
                var iTarget = delta > 0 ? ((-50 * pec) < -1 ? (-50 * pec) : -1) : ((50 * pec) > 1 ? (50 * pec) : 1);
                var iTarget = parseInt($(".bar-m", $Scroll.scroll_bar).css("top")) + iTarget;
                togetherMove(iTarget, 2);
            }
            addHandler(this, "mousewheel", mouseWheel);
            addHandler(this, "DOMMouseScroll", mouseWheel);
        });
    }
    ;
    var setScroll = function(scroll_box, wrap_box, scroll_bar) {
        $Scroll.scroll_box = scroll_box;
        $Scroll.wrap_box = wrap_box;
        $Scroll.scroll_bar = scroll_bar;
    };
    var createScroll = function($scroll_box) {
        $scroll_box.css({
            "position": "relative",
            "overflow": "hidden"
        });
        var $wrap_box = $(".scroll_wrap", $scroll_box);
        if ($wrap_box.length == 0) {
            $scroll_box.wrapInner('<div class="scroll_wrap" style="position:relative;top:0;"></div>');
            $wrap_box = $('.scroll_wrap', $scroll_box).eq(0);
        }
        var $scroll_bar = null;
        var size_data = getScrollSize($scroll_box, $wrap_box);
        if (size_data.scroll_height > size_data.bar_height) {
            var scroll_bar_html = '<div class="scroll-bar no-bg" style="top:0;right:0;height:' + size_data.scroll_height + 'px;">' + '<div class="bar-m" style="height:' + (size_data.bar_height) + 'px;">' + '<div class="l"></div>' + '<div class="r"></div>' + '</div></div>';
            $scroll_bar = $(scroll_bar_html);
            $scroll_box.append($scroll_bar);
            setScroll($scroll_box, $wrap_box, $scroll_bar);
            Max_length = size_data.scroll_height - size_data.bar_height;
            return true;
        } else {
            return false;
        }
    }
      , getScrollSize = function($scroll_box, $wrap_box) {
        var scroll_height = $scroll_box.height();
        var bar_height = parseInt(scroll_height / $wrap_box.height() * scroll_height);
        var data = {
            "scroll_height": parseInt(scroll_height),
            "bar_height": bar_height < 15 ? 15 : bar_height
        }
        return data;
    };
    var togetherMove = function(iTarget, buffer) {
        if (iTarget <= 0) {
            iTarget = 0
        } else if (iTarget >= Max_length) {
            iTarget = Max_length;
        }
        iScale = iTarget / Max_length;
        doMove($Scroll.wrap_box, parseInt(($Scroll.scroll_box.height() - $Scroll.wrap_box.height()) * iScale), buffer);
        doMove($(".bar-m", $Scroll.scroll_bar), parseInt(iTarget), buffer);
    }
      , doMove = function($obj, iTarget, buffer) {
        var iPos = parseInt($obj.css("top"));
        var iSpeed = (iTarget - iPos) / (buffer || 5);
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        iPos == iTarget ? null : $obj.css("top", iPos + iSpeed + "px");
        return false;
    };
    var addHandler = function(element, type, handler) {
        return element.addEventListener ? element.addEventListener(type, handler, false) : element.attachEvent("on" + type, handler)
    };
}
)(jQuery);
