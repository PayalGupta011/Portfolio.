(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function Zm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var of = { exports: {} },
  Ds = {},
  lf = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ri = Symbol.for("react.element"),
  Jm = Symbol.for("react.portal"),
  eg = Symbol.for("react.fragment"),
  tg = Symbol.for("react.strict_mode"),
  ng = Symbol.for("react.profiler"),
  rg = Symbol.for("react.provider"),
  ig = Symbol.for("react.context"),
  sg = Symbol.for("react.forward_ref"),
  og = Symbol.for("react.suspense"),
  lg = Symbol.for("react.memo"),
  ag = Symbol.for("react.lazy"),
  Ru = Symbol.iterator;
function ug(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ru && e[Ru]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var af = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  uf = Object.assign,
  cf = {};
function Jn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = cf),
    (this.updater = n || af));
}
Jn.prototype.isReactComponent = {};
Jn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function df() {}
df.prototype = Jn.prototype;
function Zl(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = cf),
    (this.updater = n || af));
}
var Jl = (Zl.prototype = new df());
Jl.constructor = Zl;
uf(Jl, Jn.prototype);
Jl.isPureReactComponent = !0;
var Mu = Array.isArray,
  ff = Object.prototype.hasOwnProperty,
  ea = { current: null },
  hf = { key: !0, ref: !0, __self: !0, __source: !0 };
function pf(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      ff.call(t, r) && !hf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: ri,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: ea.current,
  };
}
function cg(e, t) {
  return {
    $$typeof: ri,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ta(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ri;
}
function dg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Nu = /\/+/g;
function to(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? dg("" + e.key)
    : t.toString(36);
}
function Vi(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ri:
          case Jm:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + to(o, 0) : r),
      Mu(i)
        ? ((n = ""),
          e != null && (n = e.replace(Nu, "$&/") + "/"),
          Vi(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (ta(i) &&
            (i = cg(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Nu, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Mu(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + to(s, l);
      o += Vi(s, t, n, a, i);
    }
  else if (((a = ug(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      ((s = s.value), (a = r + to(s, l++)), (o += Vi(s, t, n, a, i)));
  else if (s === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function gi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Vi(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function fg(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var we = { current: null },
  zi = { transition: null },
  hg = {
    ReactCurrentDispatcher: we,
    ReactCurrentBatchConfig: zi,
    ReactCurrentOwner: ea,
  };
function mf() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = {
  map: gi,
  forEach: function (e, t, n) {
    gi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      gi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      gi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ta(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
L.Component = Jn;
L.Fragment = eg;
L.Profiler = ng;
L.PureComponent = Zl;
L.StrictMode = tg;
L.Suspense = og;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hg;
L.act = mf;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = uf({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = ea.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      ff.call(t, a) &&
        !hf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: ri, type: e.type, key: i, ref: s, props: r, _owner: o };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: ig,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: rg, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = pf;
L.createFactory = function (e) {
  var t = pf.bind(null, e);
  return ((t.type = e), t);
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: sg, render: e };
};
L.isValidElement = ta;
L.lazy = function (e) {
  return { $$typeof: ag, _payload: { _status: -1, _result: e }, _init: fg };
};
L.memo = function (e, t) {
  return { $$typeof: lg, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = zi.transition;
  zi.transition = {};
  try {
    e();
  } finally {
    zi.transition = t;
  }
};
L.unstable_act = mf;
L.useCallback = function (e, t) {
  return we.current.useCallback(e, t);
};
L.useContext = function (e) {
  return we.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return we.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return we.current.useEffect(e, t);
};
L.useId = function () {
  return we.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return we.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return we.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return we.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return we.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return we.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return we.current.useRef(e);
};
L.useState = function (e) {
  return we.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return we.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return we.current.useTransition();
};
L.version = "18.3.1";
lf.exports = L;
var T = lf.exports;
const pg = Zm(T);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mg = T,
  gg = Symbol.for("react.element"),
  yg = Symbol.for("react.fragment"),
  vg = Object.prototype.hasOwnProperty,
  xg = mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  wg = { key: !0, ref: !0, __self: !0, __source: !0 };
function gf(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) vg.call(t, r) && !wg.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: gg,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: xg.current,
  };
}
Ds.Fragment = yg;
Ds.jsx = gf;
Ds.jsxs = gf;
of.exports = Ds;
var u = of.exports,
  Wo = {},
  yf = { exports: {} },
  Me = {},
  vf = { exports: {} },
  xf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, M) {
    var N = P.length;
    P.push(M);
    e: for (; 0 < N; ) {
      var q = (N - 1) >>> 1,
        se = P[q];
      if (0 < i(se, M)) ((P[q] = M), (P[N] = se), (N = q));
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var M = P[0],
      N = P.pop();
    if (N !== M) {
      P[0] = N;
      e: for (var q = 0, se = P.length, pi = se >>> 1; q < pi; ) {
        var Wt = 2 * (q + 1) - 1,
          eo = P[Wt],
          Ht = Wt + 1,
          mi = P[Ht];
        if (0 > i(eo, N))
          Ht < se && 0 > i(mi, eo)
            ? ((P[q] = mi), (P[Ht] = N), (q = Ht))
            : ((P[q] = eo), (P[Wt] = N), (q = Wt));
        else if (Ht < se && 0 > i(mi, N)) ((P[q] = mi), (P[Ht] = N), (q = Ht));
        else break e;
      }
    }
    return M;
  }
  function i(P, M) {
    var N = P.sortIndex - M.sortIndex;
    return N !== 0 ? N : P.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    c = [],
    d = 1,
    f = null,
    h = 3,
    y = !1,
    v = !1,
    x = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(P) {
    for (var M = n(c); M !== null; ) {
      if (M.callback === null) r(c);
      else if (M.startTime <= P)
        (r(c), (M.sortIndex = M.expirationTime), t(a, M));
      else break;
      M = n(c);
    }
  }
  function w(P) {
    if (((x = !1), g(P), !v))
      if (n(a) !== null) ((v = !0), hi(S));
      else {
        var M = n(c);
        M !== null && te(w, M.startTime - P);
      }
  }
  function S(P, M) {
    ((v = !1), x && ((x = !1), m(j), (j = -1)), (y = !0));
    var N = h;
    try {
      for (
        g(M), f = n(a);
        f !== null && (!(f.expirationTime > M) || (P && !ie()));
      ) {
        var q = f.callback;
        if (typeof q == "function") {
          ((f.callback = null), (h = f.priorityLevel));
          var se = q(f.expirationTime <= M);
          ((M = e.unstable_now()),
            typeof se == "function" ? (f.callback = se) : f === n(a) && r(a),
            g(M));
        } else r(a);
        f = n(a);
      }
      if (f !== null) var pi = !0;
      else {
        var Wt = n(c);
        (Wt !== null && te(w, Wt.startTime - M), (pi = !1));
      }
      return pi;
    } finally {
      ((f = null), (h = N), (y = !1));
    }
  }
  var E = !1,
    F = null,
    j = -1,
    B = 5,
    R = -1;
  function ie() {
    return !(e.unstable_now() - R < B);
  }
  function yt() {
    if (F !== null) {
      var P = e.unstable_now();
      R = P;
      var M = !0;
      try {
        M = F(!0, P);
      } finally {
        M ? Ut() : ((E = !1), (F = null));
      }
    } else E = !1;
  }
  var Ut;
  if (typeof p == "function")
    Ut = function () {
      p(yt);
    };
  else if (typeof MessageChannel < "u") {
    var ir = new MessageChannel(),
      Du = ir.port2;
    ((ir.port1.onmessage = yt),
      (Ut = function () {
        Du.postMessage(null);
      }));
  } else
    Ut = function () {
      k(yt, 0);
    };
  function hi(P) {
    ((F = P), E || ((E = !0), Ut()));
  }
  function te(P, M) {
    j = k(function () {
      P(e.unstable_now());
    }, M);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), hi(S));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (B = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (P) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = h;
      }
      var N = h;
      h = M;
      try {
        return P();
      } finally {
        h = N;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, M) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var N = h;
      h = P;
      try {
        return M();
      } finally {
        h = N;
      }
    }),
    (e.unstable_scheduleCallback = function (P, M, N) {
      var q = e.unstable_now();
      switch (
        (typeof N == "object" && N !== null
          ? ((N = N.delay), (N = typeof N == "number" && 0 < N ? q + N : q))
          : (N = q),
        P)
      ) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return (
        (se = N + se),
        (P = {
          id: d++,
          callback: M,
          priorityLevel: P,
          startTime: N,
          expirationTime: se,
          sortIndex: -1,
        }),
        N > q
          ? ((P.sortIndex = N),
            t(c, P),
            n(a) === null &&
              P === n(c) &&
              (x ? (m(j), (j = -1)) : (x = !0), te(w, N - q)))
          : ((P.sortIndex = se), t(a, P), v || y || ((v = !0), hi(S))),
        P
      );
    }),
    (e.unstable_shouldYield = ie),
    (e.unstable_wrapCallback = function (P) {
      var M = h;
      return function () {
        var N = h;
        h = M;
        try {
          return P.apply(this, arguments);
        } finally {
          h = N;
        }
      };
    }));
})(xf);
vf.exports = xf;
var Sg = vf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kg = T,
  De = Sg;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var wf = new Set(),
  Br = {};
function fn(e, t) {
  (Wn(e, t), Wn(e + "Capture", t));
}
function Wn(e, t) {
  for (Br[e] = t, e = 0; e < t.length; e++) wf.add(t[e]);
}
var dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ho = Object.prototype.hasOwnProperty,
  jg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Bu = {},
  Lu = {};
function Cg(e) {
  return Ho.call(Lu, e)
    ? !0
    : Ho.call(Bu, e)
      ? !1
      : jg.test(e)
        ? (Lu[e] = !0)
        : ((Bu[e] = !0), !1);
}
function Eg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Fg(e, t, n, r) {
  if (t === null || typeof t > "u" || Eg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Se(e, t, n, r, i, s, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o));
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  de[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  de[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  de[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  de[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  de[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  de[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  de[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var na = /[\-:]([a-z])/g;
function ra(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(na, ra);
    de[t] = new Se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(na, ra);
    de[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(na, ra);
  de[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  de[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new Se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  de[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ia(e, t, n, r) {
  var i = de.hasOwnProperty(t) ? de[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Fg(t, n, i, r) && (n = null),
    r || i === null
      ? Cg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var gt = kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yi = Symbol.for("react.element"),
  wn = Symbol.for("react.portal"),
  Sn = Symbol.for("react.fragment"),
  sa = Symbol.for("react.strict_mode"),
  $o = Symbol.for("react.profiler"),
  Sf = Symbol.for("react.provider"),
  kf = Symbol.for("react.context"),
  oa = Symbol.for("react.forward_ref"),
  Ko = Symbol.for("react.suspense"),
  Go = Symbol.for("react.suspense_list"),
  la = Symbol.for("react.memo"),
  wt = Symbol.for("react.lazy"),
  jf = Symbol.for("react.offscreen"),
  Vu = Symbol.iterator;
function sr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Vu && e[Vu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  no;
function mr(e) {
  if (no === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      no = (t && t[1]) || "";
    }
  return (
    `
` +
    no +
    e
  );
}
var ro = !1;
function io(e, t) {
  if (!e || ro) return "";
  ro = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];
      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    ((ro = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? mr(e) : "";
}
function Tg(e) {
  switch (e.tag) {
    case 5:
      return mr(e.type);
    case 16:
      return mr("Lazy");
    case 13:
      return mr("Suspense");
    case 19:
      return mr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = io(e.type, !1)), e);
    case 11:
      return ((e = io(e.type.render, !1)), e);
    case 1:
      return ((e = io(e.type, !0)), e);
    default:
      return "";
  }
}
function Qo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Sn:
      return "Fragment";
    case wn:
      return "Portal";
    case $o:
      return "Profiler";
    case sa:
      return "StrictMode";
    case Ko:
      return "Suspense";
    case Go:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case kf:
        return (e.displayName || "Context") + ".Consumer";
      case Sf:
        return (e._context.displayName || "Context") + ".Provider";
      case oa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case la:
        return (
          (t = e.displayName || null),
          t !== null ? t : Qo(e.type) || "Memo"
        );
      case wt:
        ((t = e._payload), (e = e._init));
        try {
          return Qo(e(t));
        } catch {}
    }
  return null;
}
function Pg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qo(t);
    case 8:
      return t === sa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Nt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Cf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function bg(e) {
  var t = Cf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          ((r = "" + o), s.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function vi(e) {
  e._valueTracker || (e._valueTracker = bg(e));
}
function Ef(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Cf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ji(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Yo(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function zu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Nt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Ff(e, t) {
  ((t = t.checked), t != null && ia(e, "checked", t, !1));
}
function Xo(e, t) {
  Ff(e, t);
  var n = Nt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? qo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && qo(e, t.type, Nt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function _u(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function qo(e, t, n) {
  (t !== "number" || Ji(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var gr = Array.isArray;
function Vn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Nt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Zo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Iu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (gr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Nt(n) };
}
function Tf(e, t) {
  var n = Nt(t.value),
    r = Nt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Ou(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Pf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Jo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Pf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var xi,
  bf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        xi = xi || document.createElement("div"),
          xi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = xi.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var kr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ag = ["Webkit", "ms", "Moz", "O"];
Object.keys(kr).forEach(function (e) {
  Ag.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (kr[t] = kr[e]));
  });
});
function Af(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (kr.hasOwnProperty(e) && kr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Df(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Af(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var Dg = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function el(e, t) {
  if (t) {
    if (Dg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function tl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var nl = null;
function aa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var rl = null,
  zn = null,
  _n = null;
function Uu(e) {
  if ((e = oi(e))) {
    if (typeof rl != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Ls(t)), rl(e.stateNode, e.type, t));
  }
}
function Rf(e) {
  zn ? (_n ? _n.push(e) : (_n = [e])) : (zn = e);
}
function Mf() {
  if (zn) {
    var e = zn,
      t = _n;
    if (((_n = zn = null), Uu(e), t)) for (e = 0; e < t.length; e++) Uu(t[e]);
  }
}
function Nf(e, t) {
  return e(t);
}
function Bf() {}
var so = !1;
function Lf(e, t, n) {
  if (so) return e(t, n);
  so = !0;
  try {
    return Nf(e, t, n);
  } finally {
    ((so = !1), (zn !== null || _n !== null) && (Bf(), Mf()));
  }
}
function Vr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ls(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var il = !1;
if (dt)
  try {
    var or = {};
    (Object.defineProperty(or, "passive", {
      get: function () {
        il = !0;
      },
    }),
      window.addEventListener("test", or, or),
      window.removeEventListener("test", or, or));
  } catch {
    il = !1;
  }
function Rg(e, t, n, r, i, s, o, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var jr = !1,
  es = null,
  ts = !1,
  sl = null,
  Mg = {
    onError: function (e) {
      ((jr = !0), (es = e));
    },
  };
function Ng(e, t, n, r, i, s, o, l, a) {
  ((jr = !1), (es = null), Rg.apply(Mg, arguments));
}
function Bg(e, t, n, r, i, s, o, l, a) {
  if ((Ng.apply(this, arguments), jr)) {
    if (jr) {
      var c = es;
      ((jr = !1), (es = null));
    } else throw Error(C(198));
    ts || ((ts = !0), (sl = c));
  }
}
function hn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Vf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Wu(e) {
  if (hn(e) !== e) throw Error(C(188));
}
function Lg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = hn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return (Wu(i), e);
        if (s === r) return (Wu(i), t);
        s = s.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) ((n = i), (r = s));
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          ((o = !0), (n = i), (r = s));
          break;
        }
        if (l === r) {
          ((o = !0), (r = i), (n = s));
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            ((o = !0), (n = s), (r = i));
            break;
          }
          if (l === r) {
            ((o = !0), (r = s), (n = i));
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function zf(e) {
  return ((e = Lg(e)), e !== null ? _f(e) : null);
}
function _f(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = _f(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var If = De.unstable_scheduleCallback,
  Hu = De.unstable_cancelCallback,
  Vg = De.unstable_shouldYield,
  zg = De.unstable_requestPaint,
  J = De.unstable_now,
  _g = De.unstable_getCurrentPriorityLevel,
  ua = De.unstable_ImmediatePriority,
  Of = De.unstable_UserBlockingPriority,
  ns = De.unstable_NormalPriority,
  Ig = De.unstable_LowPriority,
  Uf = De.unstable_IdlePriority,
  Rs = null,
  et = null;
function Og(e) {
  if (et && typeof et.onCommitFiberRoot == "function")
    try {
      et.onCommitFiberRoot(Rs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : Hg,
  Ug = Math.log,
  Wg = Math.LN2;
function Hg(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ug(e) / Wg) | 0)) | 0);
}
var wi = 64,
  Si = 4194304;
function yr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function rs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = yr(l)) : ((s &= o), s !== 0 && (r = yr(s)));
  } else ((o = n & ~i), o !== 0 ? (r = yr(o)) : s !== 0 && (r = yr(s)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Qe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function $g(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Kg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;
  ) {
    var o = 31 - Qe(s),
      l = 1 << o,
      a = i[o];
    (a === -1
      ? (!(l & n) || l & r) && (i[o] = $g(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l));
  }
}
function ol(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Wf() {
  var e = wi;
  return ((wi <<= 1), !(wi & 4194240) && (wi = 64), e);
}
function oo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ii(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Qe(t)),
    (e[t] = n));
}
function Gg(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Qe(n),
      s = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s));
  }
}
function ca(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Qe(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var _ = 0;
function Hf(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var $f,
  da,
  Kf,
  Gf,
  Qf,
  ll = !1,
  ki = [],
  Ft = null,
  Tt = null,
  Pt = null,
  zr = new Map(),
  _r = new Map(),
  kt = [],
  Qg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function $u(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ft = null;
      break;
    case "dragenter":
    case "dragleave":
      Tt = null;
      break;
    case "mouseover":
    case "mouseout":
      Pt = null;
      break;
    case "pointerover":
    case "pointerout":
      zr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _r.delete(t.pointerId);
  }
}
function lr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = oi(t)), t !== null && da(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Yg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((Ft = lr(Ft, e, t, n, r, i)), !0);
    case "dragenter":
      return ((Tt = lr(Tt, e, t, n, r, i)), !0);
    case "mouseover":
      return ((Pt = lr(Pt, e, t, n, r, i)), !0);
    case "pointerover":
      var s = i.pointerId;
      return (zr.set(s, lr(zr.get(s) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (s = i.pointerId),
        _r.set(s, lr(_r.get(s) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function Yf(e) {
  var t = Jt(e.target);
  if (t !== null) {
    var n = hn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Vf(n)), t !== null)) {
          ((e.blockedOn = t),
            Qf(e.priority, function () {
              Kf(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function _i(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = al(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((nl = r), n.target.dispatchEvent(r), (nl = null));
    } else return ((t = oi(n)), t !== null && da(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Ku(e, t, n) {
  _i(e) && n.delete(t);
}
function Xg() {
  ((ll = !1),
    Ft !== null && _i(Ft) && (Ft = null),
    Tt !== null && _i(Tt) && (Tt = null),
    Pt !== null && _i(Pt) && (Pt = null),
    zr.forEach(Ku),
    _r.forEach(Ku));
}
function ar(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ll ||
      ((ll = !0),
      De.unstable_scheduleCallback(De.unstable_NormalPriority, Xg)));
}
function Ir(e) {
  function t(i) {
    return ar(i, e);
  }
  if (0 < ki.length) {
    ar(ki[0], e);
    for (var n = 1; n < ki.length; n++) {
      var r = ki[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ft !== null && ar(Ft, e),
      Tt !== null && ar(Tt, e),
      Pt !== null && ar(Pt, e),
      zr.forEach(t),
      _r.forEach(t),
      n = 0;
    n < kt.length;
    n++
  )
    ((r = kt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < kt.length && ((n = kt[0]), n.blockedOn === null); )
    (Yf(n), n.blockedOn === null && kt.shift());
}
var In = gt.ReactCurrentBatchConfig,
  is = !0;
function qg(e, t, n, r) {
  var i = _,
    s = In.transition;
  In.transition = null;
  try {
    ((_ = 1), fa(e, t, n, r));
  } finally {
    ((_ = i), (In.transition = s));
  }
}
function Zg(e, t, n, r) {
  var i = _,
    s = In.transition;
  In.transition = null;
  try {
    ((_ = 4), fa(e, t, n, r));
  } finally {
    ((_ = i), (In.transition = s));
  }
}
function fa(e, t, n, r) {
  if (is) {
    var i = al(e, t, n, r);
    if (i === null) (yo(e, t, r, ss, n), $u(e, r));
    else if (Yg(i, e, t, n, r)) r.stopPropagation();
    else if (($u(e, r), t & 4 && -1 < Qg.indexOf(e))) {
      for (; i !== null; ) {
        var s = oi(i);
        if (
          (s !== null && $f(s),
          (s = al(e, t, n, r)),
          s === null && yo(e, t, r, ss, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else yo(e, t, r, null, n);
  }
}
var ss = null;
function al(e, t, n, r) {
  if (((ss = null), (e = aa(r)), (e = Jt(e)), e !== null))
    if (((t = hn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Vf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ss = e), null);
}
function Xf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (_g()) {
        case ua:
          return 1;
        case Of:
          return 4;
        case ns:
        case Ig:
          return 16;
        case Uf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ct = null,
  ha = null,
  Ii = null;
function qf() {
  if (Ii) return Ii;
  var e,
    t = ha,
    n = t.length,
    r,
    i = "value" in Ct ? Ct.value : Ct.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Ii = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Oi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ji() {
  return !0;
}
function Gu() {
  return !1;
}
function Ne(e) {
  function t(n, r, i, s, o) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null));
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? ji
        : Gu),
      (this.isPropagationStopped = Gu),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ji));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ji));
      },
      persist: function () {},
      isPersistent: ji,
    }),
    t
  );
}
var er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pa = Ne(er),
  si = Q({}, er, { view: 0, detail: 0 }),
  Jg = Ne(si),
  lo,
  ao,
  ur,
  Ms = Q({}, si, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ma,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ur &&
            (ur && e.type === "mousemove"
              ? ((lo = e.screenX - ur.screenX), (ao = e.screenY - ur.screenY))
              : (ao = lo = 0),
            (ur = e)),
          lo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ao;
    },
  }),
  Qu = Ne(Ms),
  e0 = Q({}, Ms, { dataTransfer: 0 }),
  t0 = Ne(e0),
  n0 = Q({}, si, { relatedTarget: 0 }),
  uo = Ne(n0),
  r0 = Q({}, er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  i0 = Ne(r0),
  s0 = Q({}, er, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  o0 = Ne(s0),
  l0 = Q({}, er, { data: 0 }),
  Yu = Ne(l0),
  a0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  u0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  c0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function d0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = c0[e]) ? !!t[e] : !1;
}
function ma() {
  return d0;
}
var f0 = Q({}, si, {
    key: function (e) {
      if (e.key) {
        var t = a0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Oi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? u0[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ma,
    charCode: function (e) {
      return e.type === "keypress" ? Oi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Oi(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  h0 = Ne(f0),
  p0 = Q({}, Ms, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Xu = Ne(p0),
  m0 = Q({}, si, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ma,
  }),
  g0 = Ne(m0),
  y0 = Q({}, er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  v0 = Ne(y0),
  x0 = Q({}, Ms, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  w0 = Ne(x0),
  S0 = [9, 13, 27, 32],
  ga = dt && "CompositionEvent" in window,
  Cr = null;
dt && "documentMode" in document && (Cr = document.documentMode);
var k0 = dt && "TextEvent" in window && !Cr,
  Zf = dt && (!ga || (Cr && 8 < Cr && 11 >= Cr)),
  qu = " ",
  Zu = !1;
function Jf(e, t) {
  switch (e) {
    case "keyup":
      return S0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function eh(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var kn = !1;
function j0(e, t) {
  switch (e) {
    case "compositionend":
      return eh(t);
    case "keypress":
      return t.which !== 32 ? null : ((Zu = !0), qu);
    case "textInput":
      return ((e = t.data), e === qu && Zu ? null : e);
    default:
      return null;
  }
}
function C0(e, t) {
  if (kn)
    return e === "compositionend" || (!ga && Jf(e, t))
      ? ((e = qf()), (Ii = ha = Ct = null), (kn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Zf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var E0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ju(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!E0[e.type] : t === "textarea";
}
function th(e, t, n, r) {
  (Rf(r),
    (t = os(t, "onChange")),
    0 < t.length &&
      ((n = new pa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Er = null,
  Or = null;
function F0(e) {
  fh(e, 0);
}
function Ns(e) {
  var t = En(e);
  if (Ef(t)) return e;
}
function T0(e, t) {
  if (e === "change") return t;
}
var nh = !1;
if (dt) {
  var co;
  if (dt) {
    var fo = "oninput" in document;
    if (!fo) {
      var ec = document.createElement("div");
      (ec.setAttribute("oninput", "return;"),
        (fo = typeof ec.oninput == "function"));
    }
    co = fo;
  } else co = !1;
  nh = co && (!document.documentMode || 9 < document.documentMode);
}
function tc() {
  Er && (Er.detachEvent("onpropertychange", rh), (Or = Er = null));
}
function rh(e) {
  if (e.propertyName === "value" && Ns(Or)) {
    var t = [];
    (th(t, Or, e, aa(e)), Lf(F0, t));
  }
}
function P0(e, t, n) {
  e === "focusin"
    ? (tc(), (Er = t), (Or = n), Er.attachEvent("onpropertychange", rh))
    : e === "focusout" && tc();
}
function b0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ns(Or);
}
function A0(e, t) {
  if (e === "click") return Ns(t);
}
function D0(e, t) {
  if (e === "input" || e === "change") return Ns(t);
}
function R0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xe = typeof Object.is == "function" ? Object.is : R0;
function Ur(e, t) {
  if (Xe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ho.call(t, i) || !Xe(e[i], t[i])) return !1;
  }
  return !0;
}
function nc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function rc(e, t) {
  var n = nc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = nc(n);
  }
}
function ih(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? ih(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function sh() {
  for (var e = window, t = Ji(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ji(e.document);
  }
  return t;
}
function ya(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function M0(e) {
  var t = sh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ih(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ya(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        ((r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = rc(n, s)));
        var o = rc(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var N0 = dt && "documentMode" in document && 11 >= document.documentMode,
  jn = null,
  ul = null,
  Fr = null,
  cl = !1;
function ic(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  cl ||
    jn == null ||
    jn !== Ji(r) ||
    ((r = jn),
    "selectionStart" in r && ya(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Fr && Ur(Fr, r)) ||
      ((Fr = r),
      (r = os(ul, "onSelect")),
      0 < r.length &&
        ((t = new pa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = jn))));
}
function Ci(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Cn = {
    animationend: Ci("Animation", "AnimationEnd"),
    animationiteration: Ci("Animation", "AnimationIteration"),
    animationstart: Ci("Animation", "AnimationStart"),
    transitionend: Ci("Transition", "TransitionEnd"),
  },
  ho = {},
  oh = {};
dt &&
  ((oh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Cn.animationend.animation,
    delete Cn.animationiteration.animation,
    delete Cn.animationstart.animation),
  "TransitionEvent" in window || delete Cn.transitionend.transition);
function Bs(e) {
  if (ho[e]) return ho[e];
  if (!Cn[e]) return e;
  var t = Cn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in oh) return (ho[e] = t[n]);
  return e;
}
var lh = Bs("animationend"),
  ah = Bs("animationiteration"),
  uh = Bs("animationstart"),
  ch = Bs("transitionend"),
  dh = new Map(),
  sc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function zt(e, t) {
  (dh.set(e, t), fn(t, [e]));
}
for (var po = 0; po < sc.length; po++) {
  var mo = sc[po],
    B0 = mo.toLowerCase(),
    L0 = mo[0].toUpperCase() + mo.slice(1);
  zt(B0, "on" + L0);
}
zt(lh, "onAnimationEnd");
zt(ah, "onAnimationIteration");
zt(uh, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(ch, "onTransitionEnd");
Wn("onMouseEnter", ["mouseout", "mouseover"]);
Wn("onMouseLeave", ["mouseout", "mouseover"]);
Wn("onPointerEnter", ["pointerout", "pointerover"]);
Wn("onPointerLeave", ["pointerout", "pointerover"]);
fn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
fn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
fn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
fn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var vr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  V0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));
function oc(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Bg(r, t, void 0, e), (e.currentTarget = null));
}
function fh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            c = l.currentTarget;
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e;
          (oc(i, l, c), (s = a));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (c = l.currentTarget),
            (l = l.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          (oc(i, l, c), (s = a));
        }
    }
  }
  if (ts) throw ((e = sl), (ts = !1), (sl = null), e);
}
function O(e, t) {
  var n = t[ml];
  n === void 0 && (n = t[ml] = new Set());
  var r = e + "__bubble";
  n.has(r) || (hh(t, e, 2, !1), n.add(r));
}
function go(e, t, n) {
  var r = 0;
  (t && (r |= 4), hh(n, e, r, t));
}
var Ei = "_reactListening" + Math.random().toString(36).slice(2);
function Wr(e) {
  if (!e[Ei]) {
    ((e[Ei] = !0),
      wf.forEach(function (n) {
        n !== "selectionchange" && (V0.has(n) || go(n, !1, e), go(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ei] || ((t[Ei] = !0), go("selectionchange", !1, t));
  }
}
function hh(e, t, n, r) {
  switch (Xf(t)) {
    case 1:
      var i = qg;
      break;
    case 4:
      i = Zg;
      break;
    default:
      i = fa;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !il ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function yo(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Jt(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Lf(function () {
    var c = s,
      d = aa(n),
      f = [];
    e: {
      var h = dh.get(e);
      if (h !== void 0) {
        var y = pa,
          v = e;
        switch (e) {
          case "keypress":
            if (Oi(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = h0;
            break;
          case "focusin":
            ((v = "focus"), (y = uo));
            break;
          case "focusout":
            ((v = "blur"), (y = uo));
            break;
          case "beforeblur":
          case "afterblur":
            y = uo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Qu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = t0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = g0;
            break;
          case lh:
          case ah:
          case uh:
            y = i0;
            break;
          case ch:
            y = v0;
            break;
          case "scroll":
            y = Jg;
            break;
          case "wheel":
            y = w0;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = o0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Xu;
        }
        var x = (t & 4) !== 0,
          k = !x && e === "scroll",
          m = x ? (h !== null ? h + "Capture" : null) : h;
        x = [];
        for (var p = c, g; p !== null; ) {
          g = p;
          var w = g.stateNode;
          if (
            (g.tag === 5 &&
              w !== null &&
              ((g = w),
              m !== null && ((w = Vr(p, m)), w != null && x.push(Hr(p, w, g)))),
            k)
          )
            break;
          p = p.return;
        }
        0 < x.length &&
          ((h = new y(h, v, null, n, d)), f.push({ event: h, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h &&
            n !== nl &&
            (v = n.relatedTarget || n.fromElement) &&
            (Jt(v) || v[ft]))
        )
          break e;
        if (
          (y || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = c),
              (v = v ? Jt(v) : null),
              v !== null &&
                ((k = hn(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = c)),
          y !== v)
        ) {
          if (
            ((x = Qu),
            (w = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Xu),
              (w = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (k = y == null ? h : En(y)),
            (g = v == null ? h : En(v)),
            (h = new x(w, p + "leave", y, n, d)),
            (h.target = k),
            (h.relatedTarget = g),
            (w = null),
            Jt(d) === c &&
              ((x = new x(m, p + "enter", v, n, d)),
              (x.target = g),
              (x.relatedTarget = k),
              (w = x)),
            (k = w),
            y && v)
          )
            t: {
              for (x = y, m = v, p = 0, g = x; g; g = mn(g)) p++;
              for (g = 0, w = m; w; w = mn(w)) g++;
              for (; 0 < p - g; ) ((x = mn(x)), p--);
              for (; 0 < g - p; ) ((m = mn(m)), g--);
              for (; p--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                ((x = mn(x)), (m = mn(m)));
              }
              x = null;
            }
          else x = null;
          (y !== null && lc(f, h, y, x, !1),
            v !== null && k !== null && lc(f, k, v, x, !0));
        }
      }
      e: {
        if (
          ((h = c ? En(c) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var S = T0;
        else if (Ju(h))
          if (nh) S = D0;
          else {
            S = b0;
            var E = P0;
          }
        else
          (y = h.nodeName) &&
            y.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (S = A0);
        if (S && (S = S(e, c))) {
          th(f, S, n, d);
          break e;
        }
        (E && E(e, h, c),
          e === "focusout" &&
            (E = h._wrapperState) &&
            E.controlled &&
            h.type === "number" &&
            qo(h, "number", h.value));
      }
      switch (((E = c ? En(c) : window), e)) {
        case "focusin":
          (Ju(E) || E.contentEditable === "true") &&
            ((jn = E), (ul = c), (Fr = null));
          break;
        case "focusout":
          Fr = ul = jn = null;
          break;
        case "mousedown":
          cl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((cl = !1), ic(f, n, d));
          break;
        case "selectionchange":
          if (N0) break;
        case "keydown":
        case "keyup":
          ic(f, n, d);
      }
      var F;
      if (ga)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        kn
          ? Jf(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      (j &&
        (Zf &&
          n.locale !== "ko" &&
          (kn || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && kn && (F = qf())
            : ((Ct = d),
              (ha = "value" in Ct ? Ct.value : Ct.textContent),
              (kn = !0))),
        (E = os(c, j)),
        0 < E.length &&
          ((j = new Yu(j, e, null, n, d)),
          f.push({ event: j, listeners: E }),
          F ? (j.data = F) : ((F = eh(n)), F !== null && (j.data = F)))),
        (F = k0 ? j0(e, n) : C0(e, n)) &&
          ((c = os(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Yu("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = F))));
    }
    fh(f, t);
  });
}
function Hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function os(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    (i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Vr(e, n)),
      s != null && r.unshift(Hr(e, s, i)),
      (s = Vr(e, t)),
      s != null && r.push(Hr(e, s, i))),
      (e = e.return));
  }
  return r;
}
function mn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function lc(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      c = l.stateNode;
    if (a !== null && a === r) break;
    (l.tag === 5 &&
      c !== null &&
      ((l = c),
      i
        ? ((a = Vr(n, s)), a != null && o.unshift(Hr(n, a, l)))
        : i || ((a = Vr(n, s)), a != null && o.push(Hr(n, a, l)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var z0 = /\r\n?/g,
  _0 = /\u0000|\uFFFD/g;
function ac(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      z0,
      `
`,
    )
    .replace(_0, "");
}
function Fi(e, t, n) {
  if (((t = ac(t)), ac(e) !== t && n)) throw Error(C(425));
}
function ls() {}
var dl = null,
  fl = null;
function hl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var pl = typeof setTimeout == "function" ? setTimeout : void 0,
  I0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  uc = typeof Promise == "function" ? Promise : void 0,
  O0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof uc < "u"
        ? function (e) {
            return uc.resolve(null).then(e).catch(U0);
          }
        : pl;
function U0(e) {
  setTimeout(function () {
    throw e;
  });
}
function vo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), Ir(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ir(t);
}
function bt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function cc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var tr = Math.random().toString(36).slice(2),
  Je = "__reactFiber$" + tr,
  $r = "__reactProps$" + tr,
  ft = "__reactContainer$" + tr,
  ml = "__reactEvents$" + tr,
  W0 = "__reactListeners$" + tr,
  H0 = "__reactHandles$" + tr;
function Jt(e) {
  var t = e[Je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ft] || n[Je])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = cc(e); e !== null; ) {
          if ((n = e[Je])) return n;
          e = cc(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function oi(e) {
  return (
    (e = e[Je] || e[ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function En(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Ls(e) {
  return e[$r] || null;
}
var gl = [],
  Fn = -1;
function _t(e) {
  return { current: e };
}
function U(e) {
  0 > Fn || ((e.current = gl[Fn]), (gl[Fn] = null), Fn--);
}
function I(e, t) {
  (Fn++, (gl[Fn] = e.current), (e.current = t));
}
var Bt = {},
  ye = _t(Bt),
  Ce = _t(!1),
  ln = Bt;
function Hn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ee(e) {
  return ((e = e.childContextTypes), e != null);
}
function as() {
  (U(Ce), U(ye));
}
function dc(e, t, n) {
  if (ye.current !== Bt) throw Error(C(168));
  (I(ye, t), I(Ce, n));
}
function ph(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, Pg(e) || "Unknown", i));
  return Q({}, n, r);
}
function us(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Bt),
    (ln = ye.current),
    I(ye, e),
    I(Ce, Ce.current),
    !0
  );
}
function fc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  (n
    ? ((e = ph(e, t, ln)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(Ce),
      U(ye),
      I(ye, e))
    : U(Ce),
    I(Ce, n));
}
var st = null,
  Vs = !1,
  xo = !1;
function mh(e) {
  st === null ? (st = [e]) : st.push(e);
}
function $0(e) {
  ((Vs = !0), mh(e));
}
function It() {
  if (!xo && st !== null) {
    xo = !0;
    var e = 0,
      t = _;
    try {
      var n = st;
      for (_ = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((st = null), (Vs = !1));
    } catch (i) {
      throw (st !== null && (st = st.slice(e + 1)), If(ua, It), i);
    } finally {
      ((_ = t), (xo = !1));
    }
  }
  return null;
}
var Tn = [],
  Pn = 0,
  cs = null,
  ds = 0,
  Ve = [],
  ze = 0,
  an = null,
  ot = 1,
  lt = "";
function Yt(e, t) {
  ((Tn[Pn++] = ds), (Tn[Pn++] = cs), (cs = e), (ds = t));
}
function gh(e, t, n) {
  ((Ve[ze++] = ot), (Ve[ze++] = lt), (Ve[ze++] = an), (an = e));
  var r = ot;
  e = lt;
  var i = 32 - Qe(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var s = 32 - Qe(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    ((s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (ot = (1 << (32 - Qe(t) + i)) | (n << i) | r),
      (lt = s + e));
  } else ((ot = (1 << s) | (n << i) | r), (lt = e));
}
function va(e) {
  e.return !== null && (Yt(e, 1), gh(e, 1, 0));
}
function xa(e) {
  for (; e === cs; )
    ((cs = Tn[--Pn]), (Tn[Pn] = null), (ds = Tn[--Pn]), (Tn[Pn] = null));
  for (; e === an; )
    ((an = Ve[--ze]),
      (Ve[ze] = null),
      (lt = Ve[--ze]),
      (Ve[ze] = null),
      (ot = Ve[--ze]),
      (Ve[ze] = null));
}
var be = null,
  Pe = null,
  H = !1,
  Ge = null;
function yh(e, t) {
  var n = _e(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function hc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (be = e), (Pe = bt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (be = e), (Pe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = an !== null ? { id: ot, overflow: lt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = _e(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (be = e),
            (Pe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function yl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function vl(e) {
  if (H) {
    var t = Pe;
    if (t) {
      var n = t;
      if (!hc(e, t)) {
        if (yl(e)) throw Error(C(418));
        t = bt(n.nextSibling);
        var r = be;
        t && hc(e, t)
          ? yh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (be = e));
      }
    } else {
      if (yl(e)) throw Error(C(418));
      ((e.flags = (e.flags & -4097) | 2), (H = !1), (be = e));
    }
  }
}
function pc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  be = e;
}
function Ti(e) {
  if (e !== be) return !1;
  if (!H) return (pc(e), (H = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !hl(e.type, e.memoizedProps))),
    t && (t = Pe))
  ) {
    if (yl(e)) throw (vh(), Error(C(418)));
    for (; t; ) (yh(e, t), (t = bt(t.nextSibling)));
  }
  if ((pc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Pe = bt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Pe = null;
    }
  } else Pe = be ? bt(e.stateNode.nextSibling) : null;
  return !0;
}
function vh() {
  for (var e = Pe; e; ) e = bt(e.nextSibling);
}
function $n() {
  ((Pe = be = null), (H = !1));
}
function wa(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
var K0 = gt.ReactCurrentBatchConfig;
function cr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Pi(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function mc(e) {
  var t = e._init;
  return t(e._payload);
}
function xh(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) (t(m, p), (p = p.sibling));
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      (p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling));
    return m;
  }
  function i(m, p) {
    return ((m = Mt(m, p)), (m.index = 0), (m.sibling = null), m);
  }
  function s(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function o(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function l(m, p, g, w) {
    return p === null || p.tag !== 6
      ? ((p = Fo(g, m.mode, w)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function a(m, p, g, w) {
    var S = g.type;
    return S === Sn
      ? d(m, p, g.props.children, w, g.key)
      : p !== null &&
          (p.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === wt &&
              mc(S) === p.type))
        ? ((w = i(p, g.props)), (w.ref = cr(m, p, g)), (w.return = m), w)
        : ((w = Qi(g.type, g.key, g.props, null, m.mode, w)),
          (w.ref = cr(m, p, g)),
          (w.return = m),
          w);
  }
  function c(m, p, g, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = To(g, m.mode, w)), (p.return = m), p)
      : ((p = i(p, g.children || [])), (p.return = m), p);
  }
  function d(m, p, g, w, S) {
    return p === null || p.tag !== 7
      ? ((p = sn(g, m.mode, w, S)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function f(m, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return ((p = Fo("" + p, m.mode, g)), (p.return = m), p);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case yi:
          return (
            (g = Qi(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = cr(m, null, p)),
            (g.return = m),
            g
          );
        case wn:
          return ((p = To(p, m.mode, g)), (p.return = m), p);
        case wt:
          var w = p._init;
          return f(m, w(p._payload), g);
      }
      if (gr(p) || sr(p))
        return ((p = sn(p, m.mode, g, null)), (p.return = m), p);
      Pi(m, p);
    }
    return null;
  }
  function h(m, p, g, w) {
    var S = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return S !== null ? null : l(m, p, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case yi:
          return g.key === S ? a(m, p, g, w) : null;
        case wn:
          return g.key === S ? c(m, p, g, w) : null;
        case wt:
          return ((S = g._init), h(m, p, S(g._payload), w));
      }
      if (gr(g) || sr(g)) return S !== null ? null : d(m, p, g, w, null);
      Pi(m, g);
    }
    return null;
  }
  function y(m, p, g, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return ((m = m.get(g) || null), l(p, m, "" + w, S));
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case yi:
          return (
            (m = m.get(w.key === null ? g : w.key) || null),
            a(p, m, w, S)
          );
        case wn:
          return (
            (m = m.get(w.key === null ? g : w.key) || null),
            c(p, m, w, S)
          );
        case wt:
          var E = w._init;
          return y(m, p, g, E(w._payload), S);
      }
      if (gr(w) || sr(w)) return ((m = m.get(g) || null), d(p, m, w, S, null));
      Pi(p, w);
    }
    return null;
  }
  function v(m, p, g, w) {
    for (
      var S = null, E = null, F = p, j = (p = 0), B = null;
      F !== null && j < g.length;
      j++
    ) {
      F.index > j ? ((B = F), (F = null)) : (B = F.sibling);
      var R = h(m, F, g[j], w);
      if (R === null) {
        F === null && (F = B);
        break;
      }
      (e && F && R.alternate === null && t(m, F),
        (p = s(R, p, j)),
        E === null ? (S = R) : (E.sibling = R),
        (E = R),
        (F = B));
    }
    if (j === g.length) return (n(m, F), H && Yt(m, j), S);
    if (F === null) {
      for (; j < g.length; j++)
        ((F = f(m, g[j], w)),
          F !== null &&
            ((p = s(F, p, j)),
            E === null ? (S = F) : (E.sibling = F),
            (E = F)));
      return (H && Yt(m, j), S);
    }
    for (F = r(m, F); j < g.length; j++)
      ((B = y(F, m, j, g[j], w)),
        B !== null &&
          (e && B.alternate !== null && F.delete(B.key === null ? j : B.key),
          (p = s(B, p, j)),
          E === null ? (S = B) : (E.sibling = B),
          (E = B)));
    return (
      e &&
        F.forEach(function (ie) {
          return t(m, ie);
        }),
      H && Yt(m, j),
      S
    );
  }
  function x(m, p, g, w) {
    var S = sr(g);
    if (typeof S != "function") throw Error(C(150));
    if (((g = S.call(g)), g == null)) throw Error(C(151));
    for (
      var E = (S = null), F = p, j = (p = 0), B = null, R = g.next();
      F !== null && !R.done;
      j++, R = g.next()
    ) {
      F.index > j ? ((B = F), (F = null)) : (B = F.sibling);
      var ie = h(m, F, R.value, w);
      if (ie === null) {
        F === null && (F = B);
        break;
      }
      (e && F && ie.alternate === null && t(m, F),
        (p = s(ie, p, j)),
        E === null ? (S = ie) : (E.sibling = ie),
        (E = ie),
        (F = B));
    }
    if (R.done) return (n(m, F), H && Yt(m, j), S);
    if (F === null) {
      for (; !R.done; j++, R = g.next())
        ((R = f(m, R.value, w)),
          R !== null &&
            ((p = s(R, p, j)),
            E === null ? (S = R) : (E.sibling = R),
            (E = R)));
      return (H && Yt(m, j), S);
    }
    for (F = r(m, F); !R.done; j++, R = g.next())
      ((R = y(F, m, j, R.value, w)),
        R !== null &&
          (e && R.alternate !== null && F.delete(R.key === null ? j : R.key),
          (p = s(R, p, j)),
          E === null ? (S = R) : (E.sibling = R),
          (E = R)));
    return (
      e &&
        F.forEach(function (yt) {
          return t(m, yt);
        }),
      H && Yt(m, j),
      S
    );
  }
  function k(m, p, g, w) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Sn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case yi:
          e: {
            for (var S = g.key, E = p; E !== null; ) {
              if (E.key === S) {
                if (((S = g.type), S === Sn)) {
                  if (E.tag === 7) {
                    (n(m, E.sibling),
                      (p = i(E, g.props.children)),
                      (p.return = m),
                      (m = p));
                    break e;
                  }
                } else if (
                  E.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === wt &&
                    mc(S) === E.type)
                ) {
                  (n(m, E.sibling),
                    (p = i(E, g.props)),
                    (p.ref = cr(m, E, g)),
                    (p.return = m),
                    (m = p));
                  break e;
                }
                n(m, E);
                break;
              } else t(m, E);
              E = E.sibling;
            }
            g.type === Sn
              ? ((p = sn(g.props.children, m.mode, w, g.key)),
                (p.return = m),
                (m = p))
              : ((w = Qi(g.type, g.key, g.props, null, m.mode, w)),
                (w.ref = cr(m, p, g)),
                (w.return = m),
                (m = w));
          }
          return o(m);
        case wn:
          e: {
            for (E = g.key; p !== null; ) {
              if (p.key === E)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  (n(m, p.sibling),
                    (p = i(p, g.children || [])),
                    (p.return = m),
                    (m = p));
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            ((p = To(g, m.mode, w)), (p.return = m), (m = p));
          }
          return o(m);
        case wt:
          return ((E = g._init), k(m, p, E(g._payload), w));
      }
      if (gr(g)) return v(m, p, g, w);
      if (sr(g)) return x(m, p, g, w);
      Pi(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, g)), (p.return = m), (m = p))
          : (n(m, p), (p = Fo(g, m.mode, w)), (p.return = m), (m = p)),
        o(m))
      : n(m, p);
  }
  return k;
}
var Kn = xh(!0),
  wh = xh(!1),
  fs = _t(null),
  hs = null,
  bn = null,
  Sa = null;
function ka() {
  Sa = bn = hs = null;
}
function ja(e) {
  var t = fs.current;
  (U(fs), (e._currentValue = t));
}
function xl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function On(e, t) {
  ((hs = e),
    (Sa = bn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (je = !0), (e.firstContext = null)));
}
function Oe(e) {
  var t = e._currentValue;
  if (Sa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), bn === null)) {
      if (hs === null) throw Error(C(308));
      ((bn = e), (hs.dependencies = { lanes: 0, firstContext: e }));
    } else bn = bn.next = e;
  return t;
}
var en = null;
function Ca(e) {
  en === null ? (en = [e]) : en.push(e);
}
function Sh(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ca(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    ht(e, r)
  );
}
function ht(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var St = !1;
function Ea(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function kh(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function at(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function At(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), z & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      ht(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ca(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    ht(e, n)
  );
}
function Ui(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ca(e, n));
  }
}
function gc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (i = s = o) : (s = s.next = o), (n = n.next));
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function ps(e, t, n, r) {
  var i = e.updateQueue;
  St = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      c = a.next;
    ((a.next = null), o === null ? (s = c) : (o.next = c), (o = a));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== o &&
        (l === null ? (d.firstBaseUpdate = c) : (l.next = c),
        (d.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var f = i.baseState;
    ((o = 0), (d = c = a = null), (l = s));
    do {
      var h = l.lane,
        y = l.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = e,
            x = l;
          switch (((h = t), (y = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                f = v.call(y, f, h);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (h = typeof v == "function" ? v.call(y, f, h) : v),
                h == null)
              )
                break e;
              f = Q({}, f, h);
              break e;
            case 2:
              St = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [l]) : h.push(l));
      } else
        ((y = {
          eventTime: y,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((c = d = y), (a = f)) : (d = d.next = y),
          (o |= h));
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        ((h = l),
          (l = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((o |= i.lane), (i = i.next));
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    ((cn |= o), (e.lanes = o), (e.memoizedState = f));
  }
}
function yc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(C(191, i));
        i.call(r);
      }
    }
}
var li = {},
  tt = _t(li),
  Kr = _t(li),
  Gr = _t(li);
function tn(e) {
  if (e === li) throw Error(C(174));
  return e;
}
function Fa(e, t) {
  switch ((I(Gr, t), I(Kr, e), I(tt, li), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Jo(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Jo(t, e)));
  }
  (U(tt), I(tt, t));
}
function Gn() {
  (U(tt), U(Kr), U(Gr));
}
function jh(e) {
  tn(Gr.current);
  var t = tn(tt.current),
    n = Jo(t, e.type);
  t !== n && (I(Kr, e), I(tt, n));
}
function Ta(e) {
  Kr.current === e && (U(tt), U(Kr));
}
var $ = _t(0);
function ms(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var wo = [];
function Pa() {
  for (var e = 0; e < wo.length; e++)
    wo[e]._workInProgressVersionPrimary = null;
  wo.length = 0;
}
var Wi = gt.ReactCurrentDispatcher,
  So = gt.ReactCurrentBatchConfig,
  un = 0,
  G = null,
  ne = null,
  oe = null,
  gs = !1,
  Tr = !1,
  Qr = 0,
  G0 = 0;
function fe() {
  throw Error(C(321));
}
function ba(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Xe(e[n], t[n])) return !1;
  return !0;
}
function Aa(e, t, n, r, i, s) {
  if (
    ((un = s),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Wi.current = e === null || e.memoizedState === null ? q0 : Z0),
    (e = n(r, i)),
    Tr)
  ) {
    s = 0;
    do {
      if (((Tr = !1), (Qr = 0), 25 <= s)) throw Error(C(301));
      ((s += 1),
        (oe = ne = null),
        (t.updateQueue = null),
        (Wi.current = J0),
        (e = n(r, i)));
    } while (Tr);
  }
  if (
    ((Wi.current = ys),
    (t = ne !== null && ne.next !== null),
    (un = 0),
    (oe = ne = G = null),
    (gs = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Da() {
  var e = Qr !== 0;
  return ((Qr = 0), e);
}
function Ze() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (oe === null ? (G.memoizedState = oe = e) : (oe = oe.next = e), oe);
}
function Ue() {
  if (ne === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var t = oe === null ? G.memoizedState : oe.next;
  if (t !== null) ((oe = t), (ne = e));
  else {
    if (e === null) throw Error(C(310));
    ((ne = e),
      (e = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
        next: null,
      }),
      oe === null ? (G.memoizedState = oe = e) : (oe = oe.next = e));
  }
  return oe;
}
function Yr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ko(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = ne,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      ((i.next = s.next), (s.next = o));
    }
    ((r.baseQueue = i = s), (n.pending = null));
  }
  if (i !== null) {
    ((s = i.next), (r = r.baseState));
    var l = (o = null),
      a = null,
      c = s;
    do {
      var d = c.lane;
      if ((un & d) === d)
        (a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (a === null ? ((l = a = f), (o = r)) : (a = a.next = f),
          (G.lanes |= d),
          (cn |= d));
      }
      c = c.next;
    } while (c !== null && c !== s);
    (a === null ? (o = r) : (a.next = l),
      Xe(r, t.memoizedState) || (je = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((s = i.lane), (G.lanes |= s), (cn |= s), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function jo(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do ((s = e(s, o.action)), (o = o.next));
    while (o !== i);
    (Xe(s, t.memoizedState) || (je = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function Ch() {}
function Eh(e, t) {
  var n = G,
    r = Ue(),
    i = t(),
    s = !Xe(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (je = !0)),
    (r = r.queue),
    Ra(Ph.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Xr(9, Th.bind(null, n, r, i, t), void 0, null),
      le === null)
    )
      throw Error(C(349));
    un & 30 || Fh(n, t, i);
  }
  return i;
}
function Fh(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Th(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), bh(t) && Ah(e));
}
function Ph(e, t, n) {
  return n(function () {
    bh(t) && Ah(e);
  });
}
function bh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xe(e, n);
  } catch {
    return !0;
  }
}
function Ah(e) {
  var t = ht(e, 1);
  t !== null && Ye(t, e, 1, -1);
}
function vc(e) {
  var t = Ze();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = X0.bind(null, G, e)),
    [t.memoizedState, e]
  );
}
function Xr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Dh() {
  return Ue().memoizedState;
}
function Hi(e, t, n, r) {
  var i = Ze();
  ((G.flags |= e),
    (i.memoizedState = Xr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function zs(e, t, n, r) {
  var i = Ue();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ne !== null) {
    var o = ne.memoizedState;
    if (((s = o.destroy), r !== null && ba(r, o.deps))) {
      i.memoizedState = Xr(t, n, s, r);
      return;
    }
  }
  ((G.flags |= e), (i.memoizedState = Xr(1 | t, n, s, r)));
}
function xc(e, t) {
  return Hi(8390656, 8, e, t);
}
function Ra(e, t) {
  return zs(2048, 8, e, t);
}
function Rh(e, t) {
  return zs(4, 2, e, t);
}
function Mh(e, t) {
  return zs(4, 4, e, t);
}
function Nh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Bh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    zs(4, 4, Nh.bind(null, t, e), n)
  );
}
function Ma() {}
function Lh(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ba(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Vh(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ba(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function zh(e, t, n) {
  return un & 21
    ? (Xe(n, t) || ((n = Wf()), (G.lanes |= n), (cn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (je = !0)), (e.memoizedState = n));
}
function Q0(e, t) {
  var n = _;
  ((_ = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = So.transition;
  So.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((_ = n), (So.transition = r));
  }
}
function _h() {
  return Ue().memoizedState;
}
function Y0(e, t, n) {
  var r = Rt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ih(e))
  )
    Oh(t, n);
  else if (((n = Sh(e, t, n, r)), n !== null)) {
    var i = xe();
    (Ye(n, e, r, i), Uh(n, t, r));
  }
}
function X0(e, t, n) {
  var r = Rt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ih(e)) Oh(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Xe(l, o))) {
          var a = t.interleaved;
          (a === null
            ? ((i.next = i), Ca(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Sh(e, t, i, r)),
      n !== null && ((i = xe()), Ye(n, e, r, i), Uh(n, t, r)));
  }
}
function Ih(e) {
  var t = e.alternate;
  return e === G || (t !== null && t === G);
}
function Oh(e, t) {
  Tr = gs = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Uh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ca(e, n));
  }
}
var ys = {
    readContext: Oe,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1,
  },
  q0 = {
    readContext: Oe,
    useCallback: function (e, t) {
      return ((Ze().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Oe,
    useEffect: xc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Hi(4194308, 4, Nh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Hi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ze();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ze();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Y0.bind(null, G, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ze();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: vc,
    useDebugValue: Ma,
    useDeferredValue: function (e) {
      return (Ze().memoizedState = e);
    },
    useTransition: function () {
      var e = vc(!1),
        t = e[0];
      return ((e = Q0.bind(null, e[1])), (Ze().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        i = Ze();
      if (H) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(C(349));
        un & 30 || Fh(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        xc(Ph.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Xr(9, Th.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ze(),
        t = le.identifierPrefix;
      if (H) {
        var n = lt,
          r = ot;
        ((n = (r & ~(1 << (32 - Qe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Qr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = G0++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Z0 = {
    readContext: Oe,
    useCallback: Lh,
    useContext: Oe,
    useEffect: Ra,
    useImperativeHandle: Bh,
    useInsertionEffect: Rh,
    useLayoutEffect: Mh,
    useMemo: Vh,
    useReducer: ko,
    useRef: Dh,
    useState: function () {
      return ko(Yr);
    },
    useDebugValue: Ma,
    useDeferredValue: function (e) {
      var t = Ue();
      return zh(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = ko(Yr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: Ch,
    useSyncExternalStore: Eh,
    useId: _h,
    unstable_isNewReconciler: !1,
  },
  J0 = {
    readContext: Oe,
    useCallback: Lh,
    useContext: Oe,
    useEffect: Ra,
    useImperativeHandle: Bh,
    useInsertionEffect: Rh,
    useLayoutEffect: Mh,
    useMemo: Vh,
    useReducer: jo,
    useRef: Dh,
    useState: function () {
      return jo(Yr);
    },
    useDebugValue: Ma,
    useDeferredValue: function (e) {
      var t = Ue();
      return ne === null ? (t.memoizedState = e) : zh(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = jo(Yr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: Ch,
    useSyncExternalStore: Eh,
    useId: _h,
    unstable_isNewReconciler: !1,
  };
function $e(e, t) {
  if (e && e.defaultProps) {
    ((t = Q({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function wl(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var _s = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? hn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = Rt(e),
      s = at(r, i);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = At(e, s, i)),
      t !== null && (Ye(t, e, i, r), Ui(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = Rt(e),
      s = at(r, i);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = At(e, s, i)),
      t !== null && (Ye(t, e, i, r), Ui(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = xe(),
      r = Rt(e),
      i = at(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = At(e, i, r)),
      t !== null && (Ye(t, e, r, n), Ui(t, e, r)));
  },
};
function wc(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Ur(n, r) || !Ur(i, s)
        : !0
  );
}
function Wh(e, t, n) {
  var r = !1,
    i = Bt,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Oe(s))
      : ((i = Ee(t) ? ln : ye.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Hn(e, i) : Bt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = _s),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Sc(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && _s.enqueueReplaceState(t, t.state, null));
}
function Sl(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), Ea(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (i.context = Oe(s))
    : ((s = Ee(t) ? ln : ye.current), (i.context = Hn(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (wl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && _s.enqueueReplaceState(i, i.state, null),
      ps(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function Qn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Tg(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Co(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function kl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ey = typeof WeakMap == "function" ? WeakMap : Map;
function Hh(e, t, n) {
  ((n = at(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (xs || ((xs = !0), (Rl = r)), kl(e, t));
    }),
    n
  );
}
function $h(e, t, n) {
  ((n = at(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        kl(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (kl(e, t),
          typeof r != "function" &&
            (Dt === null ? (Dt = new Set([this])) : Dt.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function kc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ey();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = py.bind(null, e, t, n)), t.then(e, e));
}
function jc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Cc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = at(-1, 1)), (t.tag = 2), At(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ty = gt.ReactCurrentOwner,
  je = !1;
function ve(e, t, n, r) {
  t.child = e === null ? wh(t, null, n, r) : Kn(t, e.child, n, r);
}
function Ec(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    On(t, i),
    (r = Aa(e, t, n, r, s, i)),
    (n = Da()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        pt(e, t, i))
      : (H && n && va(t), (t.flags |= 1), ve(e, t, r, i), t.child)
  );
}
function Fc(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Oa(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Kh(e, t, s, r, i))
      : ((e = Qi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ur), n(o, r) && e.ref === t.ref)
    )
      return pt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Mt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Kh(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Ur(s, r) && e.ref === t.ref)
      if (((je = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (je = !0);
      else return ((t.lanes = e.lanes), pt(e, t, i));
  }
  return jl(e, t, n, r, i);
}
function Gh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(Dn, Te),
        (Te |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          I(Dn, Te),
          (Te |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        I(Dn, Te),
        (Te |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      I(Dn, Te),
      (Te |= r));
  return (ve(e, t, i, n), t.child);
}
function Qh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function jl(e, t, n, r, i) {
  var s = Ee(n) ? ln : ye.current;
  return (
    (s = Hn(t, s)),
    On(t, i),
    (n = Aa(e, t, n, r, s, i)),
    (r = Da()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        pt(e, t, i))
      : (H && r && va(t), (t.flags |= 1), ve(e, t, n, i), t.child)
  );
}
function Tc(e, t, n, r, i) {
  if (Ee(n)) {
    var s = !0;
    us(t);
  } else s = !1;
  if ((On(t, i), t.stateNode === null))
    ($i(e, t), Wh(t, n, r), Sl(t, n, r, i), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Oe(c))
      : ((c = Ee(n) ? ln : ye.current), (c = Hn(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || a !== c) && Sc(t, o, r, c)),
      (St = !1));
    var h = t.memoizedState;
    ((o.state = h),
      ps(t, r, o, i),
      (a = t.memoizedState),
      l !== r || h !== a || Ce.current || St
        ? (typeof d == "function" && (wl(t, n, d, r), (a = t.memoizedState)),
          (l = St || wc(t, n, l, r, h, a, c))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = c),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      kh(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : $e(t.type, l)),
      (o.props = c),
      (f = t.pendingProps),
      (h = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Oe(a))
        : ((a = Ee(n) ? ln : ye.current), (a = Hn(t, a))));
    var y = n.getDerivedStateFromProps;
    ((d =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== f || h !== a) && Sc(t, o, r, a)),
      (St = !1),
      (h = t.memoizedState),
      (o.state = h),
      ps(t, r, o, i));
    var v = t.memoizedState;
    l !== f || h !== v || Ce.current || St
      ? (typeof y == "function" && (wl(t, n, y, r), (v = t.memoizedState)),
        (c = St || wc(t, n, c, r, h, v, a) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = a),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Cl(e, t, n, r, s, i);
}
function Cl(e, t, n, r, i, s) {
  Qh(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (i && fc(t, n, !1), pt(e, t, s));
  ((r = t.stateNode), (ty.current = t));
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Kn(t, e.child, null, s)), (t.child = Kn(t, null, l, s)))
      : ve(e, t, l, s),
    (t.memoizedState = r.state),
    i && fc(t, n, !0),
    t.child
  );
}
function Yh(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? dc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && dc(e, t.context, !1),
    Fa(e, t.containerInfo));
}
function Pc(e, t, n, r, i) {
  return ($n(), wa(i), (t.flags |= 256), ve(e, t, n, r), t.child);
}
var El = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Xh(e, t, n) {
  var r = t.pendingProps,
    i = $.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    I($, i & 1),
    e === null)
  )
    return (
      vl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Us(o, r, 0, null)),
              (e = sn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Fl(n)),
              (t.memoizedState = El),
              e)
            : Na(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return ny(e, t, o, r, l, i, n);
  if (s) {
    ((s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling));
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Mt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = Mt(l, s)) : ((s = sn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Fl(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = El),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Mt(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Na(e, t) {
  return (
    (t = Us({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function bi(e, t, n, r) {
  return (
    r !== null && wa(r),
    Kn(t, e.child, null, n),
    (e = Na(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ny(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Co(Error(C(422)))), bi(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (i = t.mode),
          (r = Us({ mode: "visible", children: r.children }, i, 0, null)),
          (s = sn(s, i, o, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && Kn(t, e.child, null, o),
          (t.child.memoizedState = Fl(o)),
          (t.memoizedState = El),
          s);
  if (!(t.mode & 1)) return bi(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (
      (r = l),
      (s = Error(C(419))),
      (r = Co(s, r, void 0)),
      bi(e, t, o, r)
    );
  }
  if (((l = (o & e.childLanes) !== 0), je || l)) {
    if (((r = le), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), ht(e, i), Ye(r, e, i, -1)));
    }
    return (Ia(), (r = Co(Error(C(421)))), bi(e, t, o, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = my.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Pe = bt(i.nextSibling)),
      (be = t),
      (H = !0),
      (Ge = null),
      e !== null &&
        ((Ve[ze++] = ot),
        (Ve[ze++] = lt),
        (Ve[ze++] = an),
        (ot = e.id),
        (lt = e.overflow),
        (an = t)),
      (t = Na(t, r.children)),
      (t.flags |= 4096),
      t);
}
function bc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), xl(e.return, t, n));
}
function Eo(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function qh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((ve(e, t, r.children, n), (r = $.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bc(e, n, t);
        else if (e.tag === 19) bc(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((I($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && ms(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Eo(t, !1, i, n, s));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ms(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        Eo(t, !0, n, null, s);
        break;
      case "together":
        Eo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $i(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function pt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (cn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Mt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Mt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function ry(e, t, n) {
  switch (t.tag) {
    case 3:
      (Yh(t), $n());
      break;
    case 5:
      jh(t);
      break;
    case 1:
      Ee(t.type) && us(t);
      break;
    case 4:
      Fa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (I(fs, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Xh(e, t, n)
            : (I($, $.current & 1),
              (e = pt(e, t, n)),
              e !== null ? e.sibling : null);
      I($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return qh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        I($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Gh(e, t, n));
  }
  return pt(e, t, n);
}
var Zh, Tl, Jh, ep;
Zh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Tl = function () {};
Jh = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), tn(tt.current));
    var s = null;
    switch (n) {
      case "input":
        ((i = Yo(e, i)), (r = Yo(e, r)), (s = []));
        break;
      case "select":
        ((i = Q({}, i, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((i = Zo(e, i)), (r = Zo(e, r)), (s = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ls);
    }
    el(n, r);
    var o;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var l = i[c];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Br.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((l = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && a !== l && (a != null || l != null))
      )
        if (c === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else (n || (s || (s = []), s.push(c, n)), (n = a));
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(c, a))
            : c === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (s = s || []).push(c, "" + a)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (Br.hasOwnProperty(c)
                  ? (a != null && c === "onScroll" && O("scroll", e),
                    s || l === a || (s = []))
                  : (s = s || []).push(c, a));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
ep = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function dr(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function iy(e, t, n) {
  var r = t.pendingProps;
  switch ((xa(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (he(t), null);
    case 1:
      return (Ee(t.type) && as(), he(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Gn(),
        U(Ce),
        U(ye),
        Pa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ti(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ge !== null && (Bl(Ge), (Ge = null)))),
        Tl(e, t),
        he(t),
        null
      );
    case 5:
      Ta(t);
      var i = tn(Gr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Jh(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return (he(t), null);
        }
        if (((e = tn(tt.current)), Ti(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[Je] = t), (r[$r] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (O("cancel", r), O("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              O("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < vr.length; i++) O(vr[i], r);
              break;
            case "source":
              O("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (O("error", r), O("load", r));
              break;
            case "details":
              O("toggle", r);
              break;
            case "input":
              (zu(r, s), O("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                O("invalid", r));
              break;
            case "textarea":
              (Iu(r, s), O("invalid", r));
          }
          (el(n, s), (i = null));
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Fi(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Fi(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Br.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  O("scroll", r);
            }
          switch (n) {
            case "input":
              (vi(r), _u(r, s, !0));
              break;
            case "textarea":
              (vi(r), Ou(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ls);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Pf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Je] = t),
            (e[$r] = r),
            Zh(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = tl(n, r)), n)) {
              case "dialog":
                (O("cancel", e), O("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (O("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < vr.length; i++) O(vr[i], e);
                i = r;
                break;
              case "source":
                (O("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (O("error", e), O("load", e), (i = r));
                break;
              case "details":
                (O("toggle", e), (i = r));
                break;
              case "input":
                (zu(e, r), (i = Yo(e, r)), O("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Q({}, r, { value: void 0 })),
                  O("invalid", e));
                break;
              case "textarea":
                (Iu(e, r), (i = Zo(e, r)), O("invalid", e));
                break;
              default:
                i = r;
            }
            (el(n, i), (l = i));
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? Df(e, a)
                  : s === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && bf(e, a))
                    : s === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Lr(e, a)
                        : typeof a == "number" && Lr(e, "" + a)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (Br.hasOwnProperty(s)
                          ? a != null && s === "onScroll" && O("scroll", e)
                          : a != null && ia(e, s, a, o));
              }
            switch (n) {
              case "input":
                (vi(e), _u(e, r, !1));
                break;
              case "textarea":
                (vi(e), Ou(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Nt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Vn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Vn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ls);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (he(t), null);
    case 6:
      if (e && t.stateNode != null) ep(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = tn(Gr.current)), tn(tt.current), Ti(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Je] = t),
            (s = r.nodeValue !== n) && ((e = be), e !== null))
          )
            switch (e.tag) {
              case 3:
                Fi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Fi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Je] = t),
            (t.stateNode = r));
      }
      return (he(t), null);
    case 13:
      if (
        (U($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && Pe !== null && t.mode & 1 && !(t.flags & 128))
          (vh(), $n(), (t.flags |= 98560), (s = !1));
        else if (((s = Ti(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(C(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(C(317));
            s[Je] = t;
          } else
            ($n(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (he(t), (s = !1));
        } else (Ge !== null && (Bl(Ge), (Ge = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? re === 0 && (re = 3) : Ia())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return (
        Gn(),
        Tl(e, t),
        e === null && Wr(t.stateNode.containerInfo),
        he(t),
        null
      );
    case 10:
      return (ja(t.type._context), he(t), null);
    case 17:
      return (Ee(t.type) && as(), he(t), null);
    case 19:
      if ((U($), (s = t.memoizedState), s === null)) return (he(t), null);
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) dr(s, !1);
        else {
          if (re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ms(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    dr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (I($, ($.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            J() > Yn &&
            ((t.flags |= 128), (r = !0), dr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ms(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              dr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !H)
            )
              return (he(t), null);
          } else
            2 * J() - s.renderingStartTime > Yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), dr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = J()),
          (t.sibling = null),
          (n = $.current),
          I($, r ? (n & 1) | 2 : n & 1),
          t)
        : (he(t), null);
    case 22:
    case 23:
      return (
        _a(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Te & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : he(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function sy(e, t) {
  switch ((xa(t), t.tag)) {
    case 1:
      return (
        Ee(t.type) && as(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Gn(),
        U(Ce),
        U(ye),
        Pa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Ta(t), null);
    case 13:
      if ((U($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        $n();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (U($), null);
    case 4:
      return (Gn(), null);
    case 10:
      return (ja(t.type._context), null);
    case 22:
    case 23:
      return (_a(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Ai = !1,
  me = !1,
  oy = typeof WeakSet == "function" ? WeakSet : Set,
  b = null;
function An(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function Pl(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var Ac = !1;
function ly(e, t) {
  if (((dl = is), (e = sh()), ya(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            c = 0,
            d = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (a = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (y = f.firstChild) !== null;
            )
              ((h = f), (f = y));
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++c === i && (l = o),
                h === s && ++d === r && (a = o),
                (y = f.nextSibling) !== null)
              )
                break;
              ((f = h), (h = f.parentNode));
            }
            f = y;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (fl = { focusedElem: e, selectionRange: n }, is = !1, b = t; b !== null; )
    if (((t = b), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (b = e));
    else
      for (; b !== null; ) {
        t = b;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    k = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : $e(t.type, x),
                      k,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (w) {
          X(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (b = e));
          break;
        }
        b = t.return;
      }
  return ((v = Ac), (Ac = !1), v);
}
function Pr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        ((i.destroy = void 0), s !== void 0 && Pl(t, n, s));
      }
      i = i.next;
    } while (i !== r);
  }
}
function Is(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function tp(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), tp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Je], delete t[$r], delete t[ml], delete t[W0], delete t[H0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function np(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Dc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || np(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Al(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ls)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Al(e, t, n), e = e.sibling; e !== null; )
      (Al(e, t, n), (e = e.sibling));
}
function Dl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Dl(e, t, n), e = e.sibling; e !== null; )
      (Dl(e, t, n), (e = e.sibling));
}
var ae = null,
  Ke = !1;
function vt(e, t, n) {
  for (n = n.child; n !== null; ) (rp(e, t, n), (n = n.sibling));
}
function rp(e, t, n) {
  if (et && typeof et.onCommitFiberUnmount == "function")
    try {
      et.onCommitFiberUnmount(Rs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || An(n, t);
    case 6:
      var r = ae,
        i = Ke;
      ((ae = null),
        vt(e, t, n),
        (ae = r),
        (Ke = i),
        ae !== null &&
          (Ke
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode)));
      break;
    case 18:
      ae !== null &&
        (Ke
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? vo(e.parentNode, n)
              : e.nodeType === 1 && vo(e, n),
            Ir(e))
          : vo(ae, n.stateNode));
      break;
    case 4:
      ((r = ae),
        (i = Ke),
        (ae = n.stateNode.containerInfo),
        (Ke = !0),
        vt(e, t, n),
        (ae = r),
        (Ke = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          ((s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Pl(n, t, o),
            (i = i.next));
        } while (i !== r);
      }
      vt(e, t, n);
      break;
    case 1:
      if (
        !me &&
        (An(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (l) {
          X(n, t, l);
        }
      vt(e, t, n);
      break;
    case 21:
      vt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), vt(e, t, n), (me = r))
        : vt(e, t, n);
      break;
    default:
      vt(e, t, n);
  }
}
function Rc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new oy()),
      t.forEach(function (r) {
        var i = gy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function We(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ((ae = l.stateNode), (Ke = !1));
              break e;
            case 3:
              ((ae = l.stateNode.containerInfo), (Ke = !0));
              break e;
            case 4:
              ((ae = l.stateNode.containerInfo), (Ke = !0));
              break e;
          }
          l = l.return;
        }
        if (ae === null) throw Error(C(160));
        (rp(s, o, i), (ae = null), (Ke = !1));
        var a = i.alternate;
        (a !== null && (a.return = null), (i.return = null));
      } catch (c) {
        X(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (ip(t, e), (t = t.sibling));
}
function ip(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((We(t, e), qe(e), r & 4)) {
        try {
          (Pr(3, e, e.return), Is(3, e));
        } catch (x) {
          X(e, e.return, x);
        }
        try {
          Pr(5, e, e.return);
        } catch (x) {
          X(e, e.return, x);
        }
      }
      break;
    case 1:
      (We(t, e), qe(e), r & 512 && n !== null && An(n, n.return));
      break;
    case 5:
      if (
        (We(t, e),
        qe(e),
        r & 512 && n !== null && An(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Lr(i, "");
        } catch (x) {
          X(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (l === "input" && s.type === "radio" && s.name != null && Ff(i, s),
              tl(l, o));
            var c = tl(l, s);
            for (o = 0; o < a.length; o += 2) {
              var d = a[o],
                f = a[o + 1];
              d === "style"
                ? Df(i, f)
                : d === "dangerouslySetInnerHTML"
                  ? bf(i, f)
                  : d === "children"
                    ? Lr(i, f)
                    : ia(i, d, f, c);
            }
            switch (l) {
              case "input":
                Xo(i, s);
                break;
              case "textarea":
                Tf(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var y = s.value;
                y != null
                  ? Vn(i, !!s.multiple, y, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Vn(i, !!s.multiple, s.defaultValue, !0)
                      : Vn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[$r] = s;
          } catch (x) {
            X(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((We(t, e), qe(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        ((i = e.stateNode), (s = e.memoizedProps));
        try {
          i.nodeValue = s;
        } catch (x) {
          X(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (We(t, e), qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ir(t.containerInfo);
        } catch (x) {
          X(e, e.return, x);
        }
      break;
    case 4:
      (We(t, e), qe(e));
      break;
    case 13:
      (We(t, e),
        qe(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Va = J())),
        r & 4 && Rc(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (c = me) || d), We(t, e), (me = c)) : We(t, e),
        qe(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (b = e, d = e.child; d !== null; ) {
            for (f = b = d; b !== null; ) {
              switch (((h = b), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pr(4, h, h.return);
                  break;
                case 1:
                  An(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    ((r = h), (n = h.return));
                    try {
                      ((t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount());
                    } catch (x) {
                      X(r, n, x);
                    }
                  }
                  break;
                case 5:
                  An(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Nc(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (b = y)) : Nc(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                ((i = f.stateNode),
                  c
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Af("display", o))));
              } catch (x) {
                X(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (x) {
                X(e, e.return, x);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (d === f && (d = null), (f = f.return));
          }
          (d === f && (d = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (We(t, e), qe(e), r & 4 && Rc(e));
      break;
    case 21:
      break;
    default:
      (We(t, e), qe(e));
  }
}
function qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (np(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Lr(i, ""), (r.flags &= -33));
          var s = Dc(e);
          Dl(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = Dc(e);
          Al(e, l, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (a) {
      X(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ay(e, t, n) {
  ((b = e), sp(e));
}
function sp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; b !== null; ) {
    var i = b,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ai;
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || me;
        l = Ai;
        var c = me;
        if (((Ai = o), (me = a) && !c))
          for (b = i; b !== null; )
            ((o = b),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Bc(i)
                : a !== null
                  ? ((a.return = o), (b = a))
                  : Bc(i));
        for (; s !== null; ) ((b = s), sp(s), (s = s.sibling));
        ((b = i), (Ai = l), (me = c));
      }
      Mc(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (b = s)) : Mc(e);
  }
}
function Mc(e) {
  for (; b !== null; ) {
    var t = b;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Is(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : $e(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && yc(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                yc(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Ir(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        me || (t.flags & 512 && bl(t));
      } catch (h) {
        X(t, t.return, h);
      }
    }
    if (t === e) {
      b = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (b = n));
      break;
    }
    b = t.return;
  }
}
function Nc(e) {
  for (; b !== null; ) {
    var t = b;
    if (t === e) {
      b = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (b = n));
      break;
    }
    b = t.return;
  }
}
function Bc(e) {
  for (; b !== null; ) {
    var t = b;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Is(4, t);
          } catch (a) {
            X(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              X(t, i, a);
            }
          }
          var s = t.return;
          try {
            bl(t);
          } catch (a) {
            X(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            bl(t);
          } catch (a) {
            X(t, o, a);
          }
      }
    } catch (a) {
      X(t, t.return, a);
    }
    if (t === e) {
      b = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      ((l.return = t.return), (b = l));
      break;
    }
    b = t.return;
  }
}
var uy = Math.ceil,
  vs = gt.ReactCurrentDispatcher,
  Ba = gt.ReactCurrentOwner,
  Ie = gt.ReactCurrentBatchConfig,
  z = 0,
  le = null,
  ee = null,
  ce = 0,
  Te = 0,
  Dn = _t(0),
  re = 0,
  qr = null,
  cn = 0,
  Os = 0,
  La = 0,
  br = null,
  ke = null,
  Va = 0,
  Yn = 1 / 0,
  it = null,
  xs = !1,
  Rl = null,
  Dt = null,
  Di = !1,
  Et = null,
  ws = 0,
  Ar = 0,
  Ml = null,
  Ki = -1,
  Gi = 0;
function xe() {
  return z & 6 ? J() : Ki !== -1 ? Ki : (Ki = J());
}
function Rt(e) {
  return e.mode & 1
    ? z & 2 && ce !== 0
      ? ce & -ce
      : K0.transition !== null
        ? (Gi === 0 && (Gi = Wf()), Gi)
        : ((e = _),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Xf(e.type))),
          e)
    : 1;
}
function Ye(e, t, n, r) {
  if (50 < Ar) throw ((Ar = 0), (Ml = null), Error(C(185)));
  (ii(e, n, r),
    (!(z & 2) || e !== le) &&
      (e === le && (!(z & 2) && (Os |= n), re === 4 && jt(e, ce)),
      Fe(e, r),
      n === 1 && z === 0 && !(t.mode & 1) && ((Yn = J() + 500), Vs && It())));
}
function Fe(e, t) {
  var n = e.callbackNode;
  Kg(e, t);
  var r = rs(e, e === le ? ce : 0);
  if (r === 0)
    (n !== null && Hu(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Hu(n), t === 1))
      (e.tag === 0 ? $0(Lc.bind(null, e)) : mh(Lc.bind(null, e)),
        O0(function () {
          !(z & 6) && It();
        }),
        (n = null));
    else {
      switch (Hf(r)) {
        case 1:
          n = ua;
          break;
        case 4:
          n = Of;
          break;
        case 16:
          n = ns;
          break;
        case 536870912:
          n = Uf;
          break;
        default:
          n = ns;
      }
      n = hp(n, op.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function op(e, t) {
  if (((Ki = -1), (Gi = 0), z & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Un() && e.callbackNode !== n) return null;
  var r = rs(e, e === le ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ss(e, r);
  else {
    t = r;
    var i = z;
    z |= 2;
    var s = ap();
    (le !== e || ce !== t) && ((it = null), (Yn = J() + 500), rn(e, t));
    do
      try {
        fy();
        break;
      } catch (l) {
        lp(e, l);
      }
    while (!0);
    (ka(),
      (vs.current = s),
      (z = i),
      ee !== null ? (t = 0) : ((le = null), (ce = 0), (t = re)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ol(e)), i !== 0 && ((r = i), (t = Nl(e, i)))), t === 1)
    )
      throw ((n = qr), rn(e, 0), jt(e, r), Fe(e, J()), n);
    if (t === 6) jt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !cy(i) &&
          ((t = Ss(e, r)),
          t === 2 && ((s = ol(e)), s !== 0 && ((r = s), (t = Nl(e, s)))),
          t === 1))
      )
        throw ((n = qr), rn(e, 0), jt(e, r), Fe(e, J()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Xt(e, ke, it);
          break;
        case 3:
          if (
            (jt(e, r), (r & 130023424) === r && ((t = Va + 500 - J()), 10 < t))
          ) {
            if (rs(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (xe(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = pl(Xt.bind(null, e, ke, it), t);
            break;
          }
          Xt(e, ke, it);
          break;
        case 4:
          if ((jt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Qe(r);
            ((s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s));
          }
          if (
            ((r = i),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * uy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = pl(Xt.bind(null, e, ke, it), r);
            break;
          }
          Xt(e, ke, it);
          break;
        case 5:
          Xt(e, ke, it);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return (Fe(e, J()), e.callbackNode === n ? op.bind(null, e) : null);
}
function Nl(e, t) {
  var n = br;
  return (
    e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
    (e = Ss(e, t)),
    e !== 2 && ((t = ke), (ke = n), t !== null && Bl(t)),
    e
  );
}
function Bl(e) {
  ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function cy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Xe(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function jt(e, t) {
  for (
    t &= ~La,
      t &= ~Os,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Qe(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Lc(e) {
  if (z & 6) throw Error(C(327));
  Un();
  var t = rs(e, 0);
  if (!(t & 1)) return (Fe(e, J()), null);
  var n = Ss(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ol(e);
    r !== 0 && ((t = r), (n = Nl(e, r)));
  }
  if (n === 1) throw ((n = qr), rn(e, 0), jt(e, t), Fe(e, J()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Xt(e, ke, it),
    Fe(e, J()),
    null
  );
}
function za(e, t) {
  var n = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    ((z = n), z === 0 && ((Yn = J() + 500), Vs && It()));
  }
}
function dn(e) {
  Et !== null && Et.tag === 0 && !(z & 6) && Un();
  var t = z;
  z |= 1;
  var n = Ie.transition,
    r = _;
  try {
    if (((Ie.transition = null), (_ = 1), e)) return e();
  } finally {
    ((_ = r), (Ie.transition = n), (z = t), !(z & 6) && It());
  }
}
function _a() {
  ((Te = Dn.current), U(Dn));
}
function rn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), I0(n)), ee !== null))
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch ((xa(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && as());
          break;
        case 3:
          (Gn(), U(Ce), U(ye), Pa());
          break;
        case 5:
          Ta(r);
          break;
        case 4:
          Gn();
          break;
        case 13:
          U($);
          break;
        case 19:
          U($);
          break;
        case 10:
          ja(r.type._context);
          break;
        case 22:
        case 23:
          _a();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (ee = e = Mt(e.current, null)),
    (ce = Te = t),
    (re = 0),
    (qr = null),
    (La = Os = cn = 0),
    (ke = br = null),
    en !== null)
  ) {
    for (t = 0; t < en.length; t++)
      if (((n = en[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          ((s.next = i), (r.next = o));
        }
        n.pending = r;
      }
    en = null;
  }
  return e;
}
function lp(e, t) {
  do {
    var n = ee;
    try {
      if ((ka(), (Wi.current = ys), gs)) {
        for (var r = G.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        gs = !1;
      }
      if (
        ((un = 0),
        (oe = ne = G = null),
        (Tr = !1),
        (Qr = 0),
        (Ba.current = null),
        n === null || n.return === null)
      ) {
        ((re = 1), (qr = t), (ee = null));
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          a = t;
        if (
          ((t = ce),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            d = l,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = jc(o);
          if (y !== null) {
            ((y.flags &= -257),
              Cc(y, o, l, s, t),
              y.mode & 1 && kc(s, c, t),
              (t = y),
              (a = c));
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              (x.add(a), (t.updateQueue = x));
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              (kc(s, c, t), Ia());
              break e;
            }
            a = Error(C(426));
          }
        } else if (H && l.mode & 1) {
          var k = jc(o);
          if (k !== null) {
            (!(k.flags & 65536) && (k.flags |= 256),
              Cc(k, o, l, s, t),
              wa(Qn(a, l)));
            break e;
          }
        }
        ((s = a = Qn(a, l)),
          re !== 4 && (re = 2),
          br === null ? (br = [s]) : br.push(s),
          (s = o));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var m = Hh(s, a, t);
              gc(s, m);
              break e;
            case 1:
              l = a;
              var p = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Dt === null || !Dt.has(g))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var w = $h(s, l, t);
                gc(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      cp(n);
    } catch (S) {
      ((t = S), ee === n && n !== null && (ee = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function ap() {
  var e = vs.current;
  return ((vs.current = ys), e === null ? ys : e);
}
function Ia() {
  ((re === 0 || re === 3 || re === 2) && (re = 4),
    le === null || (!(cn & 268435455) && !(Os & 268435455)) || jt(le, ce));
}
function Ss(e, t) {
  var n = z;
  z |= 2;
  var r = ap();
  (le !== e || ce !== t) && ((it = null), rn(e, t));
  do
    try {
      dy();
      break;
    } catch (i) {
      lp(e, i);
    }
  while (!0);
  if ((ka(), (z = n), (vs.current = r), ee !== null)) throw Error(C(261));
  return ((le = null), (ce = 0), re);
}
function dy() {
  for (; ee !== null; ) up(ee);
}
function fy() {
  for (; ee !== null && !Vg(); ) up(ee);
}
function up(e) {
  var t = fp(e.alternate, e, Te);
  ((e.memoizedProps = e.pendingProps),
    t === null ? cp(e) : (ee = t),
    (Ba.current = null));
}
function cp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = sy(n, t)), n !== null)) {
        ((n.flags &= 32767), (ee = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((re = 6), (ee = null));
        return;
      }
    } else if (((n = iy(n, t, Te)), n !== null)) {
      ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function Xt(e, t, n) {
  var r = _,
    i = Ie.transition;
  try {
    ((Ie.transition = null), (_ = 1), hy(e, t, n, r));
  } finally {
    ((Ie.transition = i), (_ = r));
  }
  return null;
}
function hy(e, t, n, r) {
  do Un();
  while (Et !== null);
  if (z & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (Gg(e, s),
    e === le && ((ee = le = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Di ||
      ((Di = !0),
      hp(ns, function () {
        return (Un(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = Ie.transition), (Ie.transition = null));
    var o = _;
    _ = 1;
    var l = z;
    ((z |= 4),
      (Ba.current = null),
      ly(e, n),
      ip(n, e),
      M0(fl),
      (is = !!dl),
      (fl = dl = null),
      (e.current = n),
      ay(n),
      zg(),
      (z = l),
      (_ = o),
      (Ie.transition = s));
  } else e.current = n;
  if (
    (Di && ((Di = !1), (Et = e), (ws = i)),
    (s = e.pendingLanes),
    s === 0 && (Dt = null),
    Og(n.stateNode),
    Fe(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (xs) throw ((xs = !1), (e = Rl), (Rl = null), e);
  return (
    ws & 1 && e.tag !== 0 && Un(),
    (s = e.pendingLanes),
    s & 1 ? (e === Ml ? Ar++ : ((Ar = 0), (Ml = e))) : (Ar = 0),
    It(),
    null
  );
}
function Un() {
  if (Et !== null) {
    var e = Hf(ws),
      t = Ie.transition,
      n = _;
    try {
      if (((Ie.transition = null), (_ = 16 > e ? 16 : e), Et === null))
        var r = !1;
      else {
        if (((e = Et), (Et = null), (ws = 0), z & 6)) throw Error(C(331));
        var i = z;
        for (z |= 4, b = e.current; b !== null; ) {
          var s = b,
            o = s.child;
          if (b.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (b = c; b !== null; ) {
                  var d = b;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pr(8, d, s);
                  }
                  var f = d.child;
                  if (f !== null) ((f.return = d), (b = f));
                  else
                    for (; b !== null; ) {
                      d = b;
                      var h = d.sibling,
                        y = d.return;
                      if ((tp(d), d === c)) {
                        b = null;
                        break;
                      }
                      if (h !== null) {
                        ((h.return = y), (b = h));
                        break;
                      }
                      b = y;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var k = x.sibling;
                    ((x.sibling = null), (x = k));
                  } while (x !== null);
                }
              }
              b = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) ((o.return = s), (b = o));
          else
            e: for (; b !== null; ) {
              if (((s = b), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pr(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                ((m.return = s.return), (b = m));
                break e;
              }
              b = s.return;
            }
        }
        var p = e.current;
        for (b = p; b !== null; ) {
          o = b;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) ((g.return = o), (b = g));
          else
            e: for (o = p; b !== null; ) {
              if (((l = b), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Is(9, l);
                  }
                } catch (S) {
                  X(l, l.return, S);
                }
              if (l === o) {
                b = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                ((w.return = l.return), (b = w));
                break e;
              }
              b = l.return;
            }
        }
        if (
          ((z = i), It(), et && typeof et.onPostCommitFiberRoot == "function")
        )
          try {
            et.onPostCommitFiberRoot(Rs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((_ = n), (Ie.transition = t));
    }
  }
  return !1;
}
function Vc(e, t, n) {
  ((t = Qn(n, t)),
    (t = Hh(e, t, 1)),
    (e = At(e, t, 1)),
    (t = xe()),
    e !== null && (ii(e, 1, t), Fe(e, t)));
}
function X(e, t, n) {
  if (e.tag === 3) Vc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Vc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Dt === null || !Dt.has(r)))
        ) {
          ((e = Qn(n, e)),
            (e = $h(t, e, 1)),
            (t = At(t, e, 1)),
            (e = xe()),
            t !== null && (ii(t, 1, e), Fe(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function py(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (ce & n) === n &&
      (re === 4 || (re === 3 && (ce & 130023424) === ce && 500 > J() - Va)
        ? rn(e, 0)
        : (La |= n)),
    Fe(e, t));
}
function dp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Si), (Si <<= 1), !(Si & 130023424) && (Si = 4194304))
      : (t = 1));
  var n = xe();
  ((e = ht(e, t)), e !== null && (ii(e, t, n), Fe(e, n)));
}
function my(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), dp(e, n));
}
function gy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  (r !== null && r.delete(t), dp(e, n));
}
var fp;
fp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ce.current) je = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((je = !1), ry(e, t, n));
      je = !!(e.flags & 131072);
    }
  else ((je = !1), H && t.flags & 1048576 && gh(t, ds, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ($i(e, t), (e = t.pendingProps));
      var i = Hn(t, ye.current);
      (On(t, n), (i = Aa(null, t, r, e, i, n)));
      var s = Da();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((s = !0), us(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ea(t),
            (i.updater = _s),
            (t.stateNode = i),
            (i._reactInternals = t),
            Sl(t, r, e, n),
            (t = Cl(null, t, r, !0, s, n)))
          : ((t.tag = 0), H && s && va(t), ve(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          ($i(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = vy(r)),
          (e = $e(r, e)),
          i)
        ) {
          case 0:
            t = jl(null, t, r, e, n);
            break e;
          case 1:
            t = Tc(null, t, r, e, n);
            break e;
          case 11:
            t = Ec(null, t, r, e, n);
            break e;
          case 14:
            t = Fc(null, t, r, $e(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        jl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        Tc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Yh(t), e === null)) throw Error(C(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          kh(e, t),
          ps(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ((i = Qn(Error(C(423)), t)), (t = Pc(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = Qn(Error(C(424)), t)), (t = Pc(e, t, r, n, i)));
            break e;
          } else
            for (
              Pe = bt(t.stateNode.containerInfo.firstChild),
                be = t,
                H = !0,
                Ge = null,
                n = wh(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if (($n(), r === i)) {
            t = pt(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        jh(t),
        e === null && vl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        hl(r, i) ? (o = null) : s !== null && hl(r, s) && (t.flags |= 32),
        Qh(e, t),
        ve(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && vl(t), null);
    case 13:
      return Xh(e, t, n);
    case 4:
      return (
        Fa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Kn(t, null, r, n)) : ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        Ec(e, t, r, i, n)
      );
    case 7:
      return (ve(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ve(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ve(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          I(fs, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Xe(s.value, o)) {
            if (s.children === i.children && !Ce.current) {
              t = pt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      ((a = at(-1, n & -n)), (a.tag = 2));
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        (d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (c.pending = a));
                      }
                    }
                    ((s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      xl(s.return, n, t),
                      (l.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(C(341));
                ((o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  xl(o, n, t),
                  (o = s.sibling));
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    ((s.return = o.return), (o = s));
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        (ve(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        On(t, n),
        (i = Oe(i)),
        (r = r(i)),
        (t.flags |= 1),
        ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = $e(r, t.pendingProps)),
        (i = $e(r.type, i)),
        Fc(e, t, r, i, n)
      );
    case 15:
      return Kh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        $i(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), us(t)) : (e = !1),
        On(t, n),
        Wh(t, r, i),
        Sl(t, r, i, n),
        Cl(null, t, r, !0, e, n)
      );
    case 19:
      return qh(e, t, n);
    case 22:
      return Gh(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function hp(e, t) {
  return If(e, t);
}
function yy(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function _e(e, t, n, r) {
  return new yy(e, t, n, r);
}
function Oa(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function vy(e) {
  if (typeof e == "function") return Oa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === oa)) return 11;
    if (e === la) return 14;
  }
  return 2;
}
function Mt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = _e(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Qi(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) Oa(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Sn:
        return sn(n.children, i, s, t);
      case sa:
        ((o = 8), (i |= 8));
        break;
      case $o:
        return (
          (e = _e(12, n, t, i | 2)),
          (e.elementType = $o),
          (e.lanes = s),
          e
        );
      case Ko:
        return ((e = _e(13, n, t, i)), (e.elementType = Ko), (e.lanes = s), e);
      case Go:
        return ((e = _e(19, n, t, i)), (e.elementType = Go), (e.lanes = s), e);
      case jf:
        return Us(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Sf:
              o = 10;
              break e;
            case kf:
              o = 9;
              break e;
            case oa:
              o = 11;
              break e;
            case la:
              o = 14;
              break e;
            case wt:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = _e(o, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function sn(e, t, n, r) {
  return ((e = _e(7, e, r, t)), (e.lanes = n), e);
}
function Us(e, t, n, r) {
  return (
    (e = _e(22, e, r, t)),
    (e.elementType = jf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Fo(e, t, n) {
  return ((e = _e(6, e, null, t)), (e.lanes = n), e);
}
function To(e, t, n) {
  return (
    (t = _e(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function xy(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = oo(0)),
    (this.expirationTimes = oo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = oo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function Ua(e, t, n, r, i, s, o, l, a) {
  return (
    (e = new xy(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = _e(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ea(s),
    e
  );
}
function wy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function pp(e) {
  if (!e) return Bt;
  e = e._reactInternals;
  e: {
    if (hn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return ph(e, n, t);
  }
  return t;
}
function mp(e, t, n, r, i, s, o, l, a) {
  return (
    (e = Ua(n, r, !0, e, i, s, o, l, a)),
    (e.context = pp(null)),
    (n = e.current),
    (r = xe()),
    (i = Rt(n)),
    (s = at(r, i)),
    (s.callback = t ?? null),
    At(n, s, i),
    (e.current.lanes = i),
    ii(e, i, r),
    Fe(e, r),
    e
  );
}
function Ws(e, t, n, r) {
  var i = t.current,
    s = xe(),
    o = Rt(i);
  return (
    (n = pp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = at(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = At(i, t, o)),
    e !== null && (Ye(e, i, o, s), Ui(e, i, o)),
    o
  );
}
function ks(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function zc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wa(e, t) {
  (zc(e, t), (e = e.alternate) && zc(e, t));
}
function Sy() {
  return null;
}
var gp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ha(e) {
  this._internalRoot = e;
}
Hs.prototype.render = Ha.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Ws(e, t, null, null);
};
Hs.prototype.unmount = Ha.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (dn(function () {
      Ws(null, e, null, null);
    }),
      (t[ft] = null));
  }
};
function Hs(e) {
  this._internalRoot = e;
}
Hs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Gf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++);
    (kt.splice(n, 0, e), n === 0 && Yf(e));
  }
};
function $a(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function $s(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function _c() {}
function ky(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = ks(o);
        s.call(c);
      };
    }
    var o = mp(t, r, e, 0, null, !1, !1, "", _c);
    return (
      (e._reactRootContainer = o),
      (e[ft] = o.current),
      Wr(e.nodeType === 8 ? e.parentNode : e),
      dn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = ks(a);
      l.call(c);
    };
  }
  var a = Ua(e, 0, !1, null, null, !1, !1, "", _c);
  return (
    (e._reactRootContainer = a),
    (e[ft] = a.current),
    Wr(e.nodeType === 8 ? e.parentNode : e),
    dn(function () {
      Ws(t, a, n, r);
    }),
    a
  );
}
function Ks(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = ks(o);
        l.call(a);
      };
    }
    Ws(t, o, e, i);
  } else o = ky(n, t, e, i, r);
  return ks(o);
}
$f = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yr(t.pendingLanes);
        n !== 0 &&
          (ca(t, n | 1), Fe(t, J()), !(z & 6) && ((Yn = J() + 500), It()));
      }
      break;
    case 13:
      (dn(function () {
        var r = ht(e, 1);
        if (r !== null) {
          var i = xe();
          Ye(r, e, 1, i);
        }
      }),
        Wa(e, 1));
  }
};
da = function (e) {
  if (e.tag === 13) {
    var t = ht(e, 134217728);
    if (t !== null) {
      var n = xe();
      Ye(t, e, 134217728, n);
    }
    Wa(e, 134217728);
  }
};
Kf = function (e) {
  if (e.tag === 13) {
    var t = Rt(e),
      n = ht(e, t);
    if (n !== null) {
      var r = xe();
      Ye(n, e, t, r);
    }
    Wa(e, t);
  }
};
Gf = function () {
  return _;
};
Qf = function (e, t) {
  var n = _;
  try {
    return ((_ = e), t());
  } finally {
    _ = n;
  }
};
rl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Xo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ls(r);
            if (!i) throw Error(C(90));
            (Ef(r), Xo(r, i));
          }
        }
      }
      break;
    case "textarea":
      Tf(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Vn(e, !!n.multiple, t, !1));
  }
};
Nf = za;
Bf = dn;
var jy = { usingClientEntryPoint: !1, Events: [oi, En, Ls, Rf, Mf, za] },
  fr = {
    findFiberByHostInstance: Jt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Cy = {
    bundleType: fr.bundleType,
    version: fr.version,
    rendererPackageName: fr.rendererPackageName,
    rendererConfig: fr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = zf(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: fr.findFiberByHostInstance || Sy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ri.isDisabled && Ri.supportsFiber)
    try {
      ((Rs = Ri.inject(Cy)), (et = Ri));
    } catch {}
}
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jy;
Me.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$a(t)) throw Error(C(200));
  return wy(e, t, null, n);
};
Me.createRoot = function (e, t) {
  if (!$a(e)) throw Error(C(299));
  var n = !1,
    r = "",
    i = gp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ua(e, 1, !1, null, null, n, !1, r, i)),
    (e[ft] = t.current),
    Wr(e.nodeType === 8 ? e.parentNode : e),
    new Ha(t)
  );
};
Me.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return ((e = zf(t)), (e = e === null ? null : e.stateNode), e);
};
Me.flushSync = function (e) {
  return dn(e);
};
Me.hydrate = function (e, t, n) {
  if (!$s(t)) throw Error(C(200));
  return Ks(null, e, t, !0, n);
};
Me.hydrateRoot = function (e, t, n) {
  if (!$a(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = gp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = mp(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[ft] = t.current),
    Wr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new Hs(t);
};
Me.render = function (e, t, n) {
  if (!$s(t)) throw Error(C(200));
  return Ks(null, e, t, !1, n);
};
Me.unmountComponentAtNode = function (e) {
  if (!$s(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (dn(function () {
        Ks(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[ft] = null));
        });
      }),
      !0)
    : !1;
};
Me.unstable_batchedUpdates = za;
Me.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!$s(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Ks(e, t, n, !1, r);
};
Me.version = "18.3.1-next-f1338f8080-20240426";
function yp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yp);
    } catch (e) {
      console.error(e);
    }
}
(yp(), (yf.exports = Me));
var Ey = yf.exports,
  Ic = Ey;
((Wo.createRoot = Ic.createRoot), (Wo.hydrateRoot = Ic.hydrateRoot));
const Ka = T.createContext({});
function Ga(e) {
  const t = T.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const Gs = T.createContext(null),
  Qa = T.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class Fy extends T.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      ((r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Ty({ children: e, isPresent: t }) {
  const n = T.useId(),
    r = T.useRef(null),
    i = T.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: s } = T.useContext(Qa);
  return (
    T.useInsertionEffect(() => {
      const { width: o, height: l, top: a, left: c } = i.current;
      if (t || !r.current || !o || !l) return;
      r.current.dataset.motionPopId = n;
      const d = document.createElement("style");
      return (
        s && (d.nonce = s),
        document.head.appendChild(d),
        d.sheet &&
          d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${l}px !important;
            top: ${a}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(d);
        }
      );
    }, [t]),
    u.jsx(Fy, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: T.cloneElement(e, { ref: r }),
    })
  );
}
const Py = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
}) => {
  const l = Ga(by),
    a = T.useId(),
    c = T.useCallback(
      (f) => {
        l.set(f, !0);
        for (const h of l.values()) if (!h) return;
        r && r();
      },
      [l, r],
    ),
    d = T.useMemo(
      () => ({
        id: a,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: c,
        register: (f) => (l.set(f, !1), () => l.delete(f)),
      }),
      s ? [Math.random(), c] : [n, c],
    );
  return (
    T.useMemo(() => {
      l.forEach((f, h) => l.set(h, !1));
    }, [n]),
    T.useEffect(() => {
      !n && !l.size && r && r();
    }, [n]),
    o === "popLayout" && (e = u.jsx(Ty, { isPresent: n, children: e })),
    u.jsx(Gs.Provider, { value: d, children: e })
  );
};
function by() {
  return new Map();
}
function vp(e = !0) {
  const t = T.useContext(Gs);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    s = T.useId();
  T.useEffect(() => {
    e && i(s);
  }, [e]);
  const o = T.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Mi = (e) => e.key || "";
function Oc(e) {
  const t = [];
  return (
    T.Children.forEach(e, (n) => {
      T.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Ya = typeof window < "u",
  xp = Ya ? T.useLayoutEffect : T.useEffect,
  Ay = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: s = "sync",
    propagate: o = !1,
  }) => {
    const [l, a] = vp(o),
      c = T.useMemo(() => Oc(e), [e]),
      d = o && !l ? [] : c.map(Mi),
      f = T.useRef(!0),
      h = T.useRef(c),
      y = Ga(() => new Map()),
      [v, x] = T.useState(c),
      [k, m] = T.useState(c);
    xp(() => {
      ((f.current = !1), (h.current = c));
      for (let w = 0; w < k.length; w++) {
        const S = Mi(k[w]);
        d.includes(S) ? y.delete(S) : y.get(S) !== !0 && y.set(S, !1);
      }
    }, [k, d.length, d.join("-")]);
    const p = [];
    if (c !== v) {
      let w = [...c];
      for (let S = 0; S < k.length; S++) {
        const E = k[S],
          F = Mi(E);
        d.includes(F) || (w.splice(S, 0, E), p.push(E));
      }
      (s === "wait" && p.length && (w = p), m(Oc(w)), x(c));
      return;
    }
    const { forceRender: g } = T.useContext(Ka);
    return u.jsx(u.Fragment, {
      children: k.map((w) => {
        const S = Mi(w),
          E = o && !l ? !1 : c === k || d.includes(S),
          F = () => {
            if (y.has(S)) y.set(S, !0);
            else return;
            let j = !0;
            (y.forEach((B) => {
              B || (j = !1);
            }),
              j &&
                (g == null || g(),
                m(h.current),
                o && (a == null || a()),
                r && r()));
          };
        return u.jsx(
          Py,
          {
            isPresent: E,
            initial: !f.current || n ? void 0 : !1,
            custom: E ? void 0 : t,
            presenceAffectsLayout: i,
            mode: s,
            onExitComplete: E ? void 0 : F,
            children: w,
          },
          S,
        );
      }),
    });
  },
  Ae = (e) => e;
let wp = Ae;
function Xa(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Xn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  ut = (e) => e * 1e3,
  ct = (e) => e / 1e3,
  Dy = { useManualTiming: !1 };
function Ry(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(c) {
    (s.has(c) && (a.schedule(c), e()), c(o));
  }
  const a = {
    schedule: (c, d = !1, f = !1) => {
      const y = f && r ? t : n;
      return (d && s.add(c), y.has(c) || y.add(c), c);
    },
    cancel: (c) => {
      (n.delete(c), s.delete(c));
    },
    process: (c) => {
      if (((o = c), r)) {
        i = !0;
        return;
      }
      ((r = !0),
        ([t, n] = [n, t]),
        t.forEach(l),
        t.clear(),
        (r = !1),
        i && ((i = !1), a.process(c)));
    },
  };
  return a;
}
const Ni = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  My = 40;
function Sp(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = Ni.reduce((m, p) => ((m[p] = Ry(s)), m), {}),
    {
      read: l,
      resolveKeyframes: a,
      update: c,
      preRender: d,
      render: f,
      postRender: h,
    } = o,
    y = () => {
      const m = performance.now();
      ((n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, My), 1)),
        (i.timestamp = m),
        (i.isProcessing = !0),
        l.process(i),
        a.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        h.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(y)));
    },
    v = () => {
      ((n = !0), (r = !0), i.isProcessing || e(y));
    };
  return {
    schedule: Ni.reduce((m, p) => {
      const g = o[p];
      return (
        (m[p] = (w, S = !1, E = !1) => (n || v(), g.schedule(w, S, E))),
        m
      );
    }, {}),
    cancel: (m) => {
      for (let p = 0; p < Ni.length; p++) o[Ni[p]].cancel(m);
    },
    state: i,
    steps: o,
  };
}
const {
    schedule: W,
    cancel: Lt,
    state: ue,
    steps: Po,
  } = Sp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ae, !0),
  kp = T.createContext({ strict: !1 }),
  Uc = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  qn = {};
for (const e in Uc) qn[e] = { isEnabled: (t) => Uc[e].some((n) => !!t[n]) };
function Ny(e) {
  for (const t in e) qn[t] = { ...qn[t], ...e[t] };
}
const By = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function js(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    By.has(e)
  );
}
let jp = (e) => !js(e);
function Ly(e) {
  e && (jp = (t) => (t.startsWith("on") ? !js(t) : e(t)));
}
try {
  Ly(require("@emotion/is-prop-valid").default);
} catch {}
function Vy(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((jp(i) ||
        (n === !0 && js(i)) ||
        (!t && !js(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function zy(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
const Qs = T.createContext({});
function Zr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ys(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const qa = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Za = ["initial", ...qa];
function Xs(e) {
  return Ys(e.animate) || Za.some((t) => Zr(e[t]));
}
function Cp(e) {
  return !!(Xs(e) || e.variants);
}
function _y(e, t) {
  if (Xs(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Zr(n) ? n : void 0,
      animate: Zr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Iy(e) {
  const { initial: t, animate: n } = _y(e, T.useContext(Qs));
  return T.useMemo(() => ({ initial: t, animate: n }), [Wc(t), Wc(n)]);
}
function Wc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Oy = Symbol.for("motionComponentSymbol");
function Rn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Uy(e, t, n) {
  return T.useCallback(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Rn(n) && (n.current = r)));
    },
    [t],
  );
}
const Ja = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Wy = "framerAppearId",
  Ep = "data-" + Ja(Wy),
  { schedule: eu } = Sp(queueMicrotask, !1),
  Fp = T.createContext({});
function Hy(e, t, n, r, i) {
  var s, o;
  const { visualElement: l } = T.useContext(Qs),
    a = T.useContext(kp),
    c = T.useContext(Gs),
    d = T.useContext(Qa).reducedMotion,
    f = T.useRef(null);
  ((r = r || a.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: l,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: d,
      })));
  const h = f.current,
    y = T.useContext(Fp);
  h &&
    !h.projection &&
    i &&
    (h.type === "html" || h.type === "svg") &&
    $y(f.current, n, i, y);
  const v = T.useRef(!1);
  T.useInsertionEffect(() => {
    h && v.current && h.update(n, c);
  });
  const x = n[Ep],
    k = T.useRef(
      !!x &&
        !(
          !((s = window.MotionHandoffIsComplete) === null || s === void 0) &&
          s.call(window, x)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, x)),
    );
  return (
    xp(() => {
      h &&
        ((v.current = !0),
        (window.MotionIsMounted = !0),
        h.updateFeatures(),
        eu.render(h.render),
        k.current && h.animationState && h.animationState.animateChanges());
    }),
    T.useEffect(() => {
      h &&
        (!k.current && h.animationState && h.animationState.animateChanges(),
        k.current &&
          (queueMicrotask(() => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) === null ||
              m === void 0 ||
              m.call(window, x);
          }),
          (k.current = !1)));
    }),
    h
  );
}
function $y(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: l,
    layoutScroll: a,
    layoutRoot: c,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Tp(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (l && Rn(l)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: a,
      layoutRoot: c,
    }));
}
function Tp(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Tp(e.parent);
}
function Ky({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  var s, o;
  e && Ny(e);
  function l(c, d) {
    let f;
    const h = { ...T.useContext(Qa), ...c, layoutId: Gy(c) },
      { isStatic: y } = h,
      v = Iy(c),
      x = r(c, y);
    if (!y && Ya) {
      Qy();
      const k = Yy(h);
      ((f = k.MeasureLayout),
        (v.visualElement = Hy(i, x, h, t, k.ProjectionNode)));
    }
    return u.jsxs(Qs.Provider, {
      value: v,
      children: [
        f && v.visualElement
          ? u.jsx(f, { visualElement: v.visualElement, ...h })
          : null,
        n(i, c, Uy(x, v.visualElement, d), x, y, v.visualElement),
      ],
    });
  }
  l.displayName = `motion.${typeof i == "string" ? i : `create(${(o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !== null && o !== void 0 ? o : ""})`}`;
  const a = T.forwardRef(l);
  return ((a[Oy] = i), a);
}
function Gy({ layoutId: e }) {
  const t = T.useContext(Ka).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Qy(e, t) {
  T.useContext(kp).strict;
}
function Yy(e) {
  const { drag: t, layout: n } = qn;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const Xy = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function tu(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Xy.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Hc(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function nu(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Hc(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = Hc(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
const Ll = (e) => Array.isArray(e),
  qy = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Zy = (e) => (Ll(e) ? e[e.length - 1] || 0 : e),
  ge = (e) => !!(e && e.getVelocity);
function Yi(e) {
  const t = ge(e) ? e.get() : e;
  return qy(t) ? t.toValue() : t;
}
function Jy(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  s,
) {
  const o = { latestValues: ev(r, i, s, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (l) => n({ props: r, current: l, ...o })),
      (o.onUpdate = (l) => n(l))),
    o
  );
}
const Pp = (e) => (t, n) => {
  const r = T.useContext(Qs),
    i = T.useContext(Gs),
    s = () => Jy(e, t, r, i);
  return n ? s() : Ga(s);
};
function ev(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const h in s) i[h] = Yi(s[h]);
  let { initial: o, animate: l } = e;
  const a = Xs(e),
    c = Cp(e);
  t &&
    c &&
    !a &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), l === void 0 && (l = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || o === !1;
  const f = d ? l : o;
  if (f && typeof f != "boolean" && !Ys(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let y = 0; y < h.length; y++) {
      const v = nu(e, h[y]);
      if (v) {
        const { transitionEnd: x, transition: k, ...m } = v;
        for (const p in m) {
          let g = m[p];
          if (Array.isArray(g)) {
            const w = d ? g.length - 1 : 0;
            g = g[w];
          }
          g !== null && (i[p] = g);
        }
        for (const p in x) i[p] = x[p];
      }
    }
  }
  return i;
}
const nr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  pn = new Set(nr),
  bp = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Ap = bp("--"),
  tv = bp("var(--"),
  ru = (e) => (tv(e) ? nv.test(e.split("/*")[0].trim()) : !1),
  nv =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Dp = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  mt = (e, t, n) => (n > t ? t : n < e ? e : n),
  rr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Jr = { ...rr, transform: (e) => mt(0, 1, e) },
  Bi = { ...rr, default: 1 },
  ai = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  xt = ai("deg"),
  nt = ai("%"),
  D = ai("px"),
  rv = ai("vh"),
  iv = ai("vw"),
  $c = {
    ...nt,
    parse: (e) => nt.parse(e) / 100,
    transform: (e) => nt.transform(e * 100),
  },
  sv = {
    borderWidth: D,
    borderTopWidth: D,
    borderRightWidth: D,
    borderBottomWidth: D,
    borderLeftWidth: D,
    borderRadius: D,
    radius: D,
    borderTopLeftRadius: D,
    borderTopRightRadius: D,
    borderBottomRightRadius: D,
    borderBottomLeftRadius: D,
    width: D,
    maxWidth: D,
    height: D,
    maxHeight: D,
    top: D,
    right: D,
    bottom: D,
    left: D,
    padding: D,
    paddingTop: D,
    paddingRight: D,
    paddingBottom: D,
    paddingLeft: D,
    margin: D,
    marginTop: D,
    marginRight: D,
    marginBottom: D,
    marginLeft: D,
    backgroundPositionX: D,
    backgroundPositionY: D,
  },
  ov = {
    rotate: xt,
    rotateX: xt,
    rotateY: xt,
    rotateZ: xt,
    scale: Bi,
    scaleX: Bi,
    scaleY: Bi,
    scaleZ: Bi,
    skew: xt,
    skewX: xt,
    skewY: xt,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: Jr,
    originX: $c,
    originY: $c,
    originZ: D,
  },
  Kc = { ...rr, transform: Math.round },
  iu = {
    ...sv,
    ...ov,
    zIndex: Kc,
    size: D,
    fillOpacity: Jr,
    strokeOpacity: Jr,
    numOctaves: Kc,
  },
  lv = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  av = nr.length;
function uv(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < av; s++) {
    const o = nr[s],
      l = e[o];
    if (l === void 0) continue;
    let a = !0;
    if (
      (typeof l == "number"
        ? (a = l === (o.startsWith("scale") ? 1 : 0))
        : (a = parseFloat(l) === 0),
      !a || n)
    ) {
      const c = Dp(l, iu[o]);
      if (!a) {
        i = !1;
        const d = lv[o] || o;
        r += `${d}(${c}) `;
      }
      n && (t[o] = c);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r);
}
function su(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    l = !1;
  for (const a in t) {
    const c = t[a];
    if (pn.has(a)) {
      o = !0;
      continue;
    } else if (Ap(a)) {
      i[a] = c;
      continue;
    } else {
      const d = Dp(c, iu[a]);
      a.startsWith("origin") ? ((l = !0), (s[a] = d)) : (r[a] = d);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = uv(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    l)
  ) {
    const { originX: a = "50%", originY: c = "50%", originZ: d = 0 } = s;
    r.transformOrigin = `${a} ${c} ${d}`;
  }
}
const cv = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  dv = { offset: "strokeDashoffset", array: "strokeDasharray" };
function fv(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? cv : dv;
  e[s.offset] = D.transform(-r);
  const o = D.transform(t),
    l = D.transform(n);
  e[s.array] = `${o} ${l}`;
}
function Gc(e, t, n) {
  return typeof e == "string" ? e : D.transform(t + n * e);
}
function hv(e, t, n) {
  const r = Gc(t, e.x, e.width),
    i = Gc(n, e.y, e.height);
  return `${r} ${i}`;
}
function ou(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...c
  },
  d,
  f,
) {
  if ((su(e, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: h, style: y, dimensions: v } = e;
  (h.transform && (v && (y.transform = h.transform), delete h.transform),
    v &&
      (i !== void 0 || s !== void 0 || y.transform) &&
      (y.transformOrigin = hv(
        v,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5,
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    o !== void 0 && fv(h, o, l, a, !1));
}
const lu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Rp = () => ({ ...lu(), attrs: {} }),
  au = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Mp(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const Np = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Bp(e, t, n, r) {
  Mp(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Np.has(i) ? i : Ja(i), t.attrs[i]);
}
const Cs = {};
function pv(e) {
  Object.assign(Cs, e);
}
function Lp(e, { layout: t, layoutId: n }) {
  return (
    pn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Cs[e] || e === "opacity"))
  );
}
function uu(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (ge(i[o]) ||
      (t.style && ge(t.style[o])) ||
      Lp(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return s;
}
function Vp(e, t, n) {
  const r = uu(e, t, n);
  for (const i in e)
    if (ge(e[i]) || ge(t[i])) {
      const s =
        nr.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function mv(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Qc = ["x", "y", "width", "height", "cx", "cy", "r"],
  gv = {
    useVisualState: Pp({
      scrapeMotionValuesFromProps: Vp,
      createRenderState: Rp,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: i,
      }) => {
        if (!n) return;
        let s = !!e.drag;
        if (!s) {
          for (const l in i)
            if (pn.has(l)) {
              s = !0;
              break;
            }
        }
        if (!s) return;
        let o = !t;
        if (t)
          for (let l = 0; l < Qc.length; l++) {
            const a = Qc[l];
            e[a] !== t[a] && (o = !0);
          }
        o &&
          W.read(() => {
            (mv(n, r),
              W.render(() => {
                (ou(r, i, au(n.tagName), e.transformTemplate), Bp(n, r));
              }));
          });
      },
    }),
  },
  yv = {
    useVisualState: Pp({
      scrapeMotionValuesFromProps: uu,
      createRenderState: lu,
    }),
  };
function zp(e, t, n) {
  for (const r in t) !ge(t[r]) && !Lp(r, n) && (e[r] = t[r]);
}
function vv({ transformTemplate: e }, t) {
  return T.useMemo(() => {
    const n = lu();
    return (su(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function xv(e, t) {
  const n = e.style || {},
    r = {};
  return (zp(r, n, e), Object.assign(r, vv(e, t)), r);
}
function wv(e, t) {
  const n = {},
    r = xv(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function Sv(e, t, n, r) {
  const i = T.useMemo(() => {
    const s = Rp();
    return (
      ou(s, t, au(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    (zp(s, e.style, e), (i.style = { ...s, ...i.style }));
  }
  return i;
}
function kv(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const a = (tu(n) ? Sv : wv)(r, s, o, n),
      c = Vy(r, typeof n == "string", e),
      d = n !== T.Fragment ? { ...c, ...a, ref: i } : {},
      { children: f } = r,
      h = T.useMemo(() => (ge(f) ? f.get() : f), [f]);
    return T.createElement(n, { ...d, children: h });
  };
}
function jv(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(tu(r) ? gv : yv),
      preloadedFeatures: e,
      useRender: kv(i),
      createVisualElement: t,
      Component: r,
    };
    return Ky(o);
  };
}
function _p(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function qs(e, t, n) {
  const r = e.getProps();
  return nu(r, t, n !== void 0 ? n : r.custom, e);
}
const Cv = Xa(() => window.ScrollTimeline !== void 0);
class Ev {
  constructor(t) {
    ((this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean)));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t)),
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => {
      if (Cv() && i.attachTimeline) return i.attachTimeline(t);
      if (typeof n == "function") return n(i);
    });
    return () => {
      r.forEach((i, s) => {
        (i && i(), this.animations[s].stop());
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class Fv extends Ev {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function cu(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Vl = 2e4;
function Ip(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Vl; ) ((t += n), (r = e.next(t)));
  return t >= Vl ? 1 / 0 : t;
}
function du(e) {
  return typeof e == "function";
}
function Yc(e, t) {
  ((e.timeline = t), (e.onfinish = null));
}
const fu = (e) => Array.isArray(e) && typeof e[0] == "number",
  Tv = { linearEasing: void 0 };
function Pv(e, t) {
  const n = Xa(e);
  return () => {
    var r;
    return (r = Tv[t]) !== null && r !== void 0 ? r : n();
  };
}
const Es = Pv(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Op = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++) r += e(Xn(0, i - 1, s)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function Up(e) {
  return !!(
    (typeof e == "function" && Es()) ||
    !e ||
    (typeof e == "string" && (e in zl || Es())) ||
    fu(e) ||
    (Array.isArray(e) && e.every(Up))
  );
}
const xr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  zl = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: xr([0, 0.65, 0.55, 1]),
    circOut: xr([0.55, 0, 1, 0.45]),
    backIn: xr([0.31, 0.01, 0.66, -0.59]),
    backOut: xr([0.33, 1.53, 0.69, 0.99]),
  };
function Wp(e, t) {
  if (e)
    return typeof e == "function" && Es()
      ? Op(e, t)
      : fu(e)
        ? xr(e)
        : Array.isArray(e)
          ? e.map((n) => Wp(n, t) || zl.easeOut)
          : zl[e];
}
const He = { x: !1, y: !1 };
function Hp() {
  return He.x || He.y;
}
function bv(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let i = document;
    const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
function $p(e, t) {
  const n = bv(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Xc(e) {
  return (t) => {
    t.pointerType === "touch" || Hp() || e(t);
  };
}
function Av(e, t, n = {}) {
  const [r, i, s] = $p(e, n),
    o = Xc((l) => {
      const { target: a } = l,
        c = t(l);
      if (typeof c != "function" || !a) return;
      const d = Xc((f) => {
        (c(f), a.removeEventListener("pointerleave", d));
      });
      a.addEventListener("pointerleave", d, i);
    });
  return (
    r.forEach((l) => {
      l.addEventListener("pointerenter", o, i);
    }),
    s
  );
}
const Kp = (e, t) => (t ? (e === t ? !0 : Kp(e, t.parentElement)) : !1),
  hu = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  Dv = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Rv(e) {
  return Dv.has(e.tagName) || e.tabIndex !== -1;
}
const wr = new WeakSet();
function qc(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function bo(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const Mv = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = qc(() => {
    if (wr.has(n)) return;
    bo(n, "down");
    const i = qc(() => {
        bo(n, "up");
      }),
      s = () => bo(n, "cancel");
    (n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function Zc(e) {
  return hu(e) && !Hp();
}
function Nv(e, t, n = {}) {
  const [r, i, s] = $p(e, n),
    o = (l) => {
      const a = l.currentTarget;
      if (!Zc(l) || wr.has(a)) return;
      wr.add(a);
      const c = t(l),
        d = (y, v) => {
          (window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", h),
            !(!Zc(y) || !wr.has(a)) &&
              (wr.delete(a), typeof c == "function" && c(y, { success: v })));
        },
        f = (y) => {
          d(y, n.useGlobalTarget || Kp(a, y.target));
        },
        h = (y) => {
          d(y, !1);
        };
      (window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", h, i));
    };
  return (
    r.forEach((l) => {
      (!Rv(l) && l.getAttribute("tabindex") === null && (l.tabIndex = 0),
        (n.useGlobalTarget ? window : l).addEventListener("pointerdown", o, i),
        l.addEventListener("focus", (c) => Mv(c, i), i));
    }),
    s
  );
}
function Bv(e) {
  return e === "x" || e === "y"
    ? He[e]
      ? null
      : ((He[e] = !0),
        () => {
          He[e] = !1;
        })
    : He.x || He.y
      ? null
      : ((He.x = He.y = !0),
        () => {
          He.x = He.y = !1;
        });
}
const Gp = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...nr,
]);
let Xi;
function Lv() {
  Xi = void 0;
}
const rt = {
  now: () => (
    Xi === void 0 &&
      rt.set(
        ue.isProcessing || Dy.useManualTiming
          ? ue.timestamp
          : performance.now(),
      ),
    Xi
  ),
  set: (e) => {
    ((Xi = e), queueMicrotask(Lv));
  },
};
function pu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function mu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class gu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (pu(this.subscriptions, t), () => mu(this.subscriptions, t));
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Qp(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Jc = 30,
  Vv = (e) => !isNaN(parseFloat(e));
class zv {
  constructor(t, n = {}) {
    ((this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = rt.now();
        (this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = rt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = Vv(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new gu());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            W.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = rt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Jc
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Jc);
    return Qp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function ei(e, t) {
  return new zv(e, t);
}
function _v(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ei(n));
}
function Iv(e, t) {
  const n = qs(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const l = Zy(s[o]);
    _v(e, o, l);
  }
}
function Ov(e) {
  return !!(ge(e) && e.add);
}
function _l(e, t) {
  const n = e.getValue("willChange");
  if (Ov(n)) return n.add(t);
}
function Yp(e) {
  return e.props[Ep];
}
const Xp = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Uv = 1e-7,
  Wv = 12;
function Hv(e, t, n, r, i) {
  let s,
    o,
    l = 0;
  do ((o = t + (n - t) / 2), (s = Xp(o, r, i) - e), s > 0 ? (n = o) : (t = o));
  while (Math.abs(s) > Uv && ++l < Wv);
  return o;
}
function ui(e, t, n, r) {
  if (e === t && n === r) return Ae;
  const i = (s) => Hv(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : Xp(i(s), t, r));
}
const qp = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Zp = (e) => (t) => 1 - e(1 - t),
  Jp = ui(0.33, 1.53, 0.69, 0.99),
  yu = Zp(Jp),
  em = qp(yu),
  tm = (e) =>
    (e *= 2) < 1 ? 0.5 * yu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  vu = (e) => 1 - Math.sin(Math.acos(e)),
  nm = Zp(vu),
  rm = qp(vu),
  im = (e) => /^0[^.\s]+$/u.test(e);
function $v(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || im(e)
      : !0;
}
const Dr = (e) => Math.round(e * 1e5) / 1e5,
  xu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Kv(e) {
  return e == null;
}
const Gv =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  wu = (e, t) => (n) =>
    !!(
      (typeof n == "string" && Gv.test(n) && n.startsWith(e)) ||
      (t && !Kv(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  sm = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, l] = r.match(xu);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  Qv = (e) => mt(0, 255, e),
  Ao = { ...rr, transform: (e) => Math.round(Qv(e)) },
  nn = {
    test: wu("rgb", "red"),
    parse: sm("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ao.transform(e) +
      ", " +
      Ao.transform(t) +
      ", " +
      Ao.transform(n) +
      ", " +
      Dr(Jr.transform(r)) +
      ")",
  };
function Yv(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Il = { test: wu("#"), parse: Yv, transform: nn.transform },
  Mn = {
    test: wu("hsl", "hue"),
    parse: sm("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      nt.transform(Dr(t)) +
      ", " +
      nt.transform(Dr(n)) +
      ", " +
      Dr(Jr.transform(r)) +
      ")",
  },
  pe = {
    test: (e) => nn.test(e) || Il.test(e) || Mn.test(e),
    parse: (e) =>
      nn.test(e) ? nn.parse(e) : Mn.test(e) ? Mn.parse(e) : Il.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? nn.transform(e)
          : Mn.transform(e),
  },
  Xv =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function qv(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(xu)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Xv)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const om = "number",
  lm = "color",
  Zv = "var",
  Jv = "var(",
  ed = "${}",
  e1 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ti(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const l = t
    .replace(
      e1,
      (a) => (
        pe.test(a)
          ? (r.color.push(s), i.push(lm), n.push(pe.parse(a)))
          : a.startsWith(Jv)
            ? (r.var.push(s), i.push(Zv), n.push(a))
            : (r.number.push(s), i.push(om), n.push(parseFloat(a))),
        ++s,
        ed
      ),
    )
    .split(ed);
  return { values: n, split: l, indexes: r, types: i };
}
function am(e) {
  return ti(e).values;
}
function um(e) {
  const { split: t, types: n } = ti(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const l = n[o];
        l === om
          ? (s += Dr(i[o]))
          : l === lm
            ? (s += pe.transform(i[o]))
            : (s += i[o]);
      }
    return s;
  };
}
const t1 = (e) => (typeof e == "number" ? 0 : e);
function n1(e) {
  const t = am(e);
  return um(e)(t.map(t1));
}
const Vt = {
    test: qv,
    parse: am,
    createTransformer: um,
    getAnimatableNone: n1,
  },
  r1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function i1(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(xu) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = r1.has(t) ? 1 : 0;
  return (r !== n && (s *= 100), t + "(" + s + i + ")");
}
const s1 = /\b([a-z-]*)\(.*?\)/gu,
  Ol = {
    ...Vt,
    getAnimatableNone: (e) => {
      const t = e.match(s1);
      return t ? t.map(i1).join(" ") : e;
    },
  },
  o1 = {
    ...iu,
    color: pe,
    backgroundColor: pe,
    outlineColor: pe,
    fill: pe,
    stroke: pe,
    borderColor: pe,
    borderTopColor: pe,
    borderRightColor: pe,
    borderBottomColor: pe,
    borderLeftColor: pe,
    filter: Ol,
    WebkitFilter: Ol,
  },
  Su = (e) => o1[e];
function cm(e, t) {
  let n = Su(e);
  return (
    n !== Ol && (n = Vt),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const l1 = new Set(["auto", "none", "0"]);
function a1(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    (typeof s == "string" && !l1.has(s) && ti(s).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (const s of t) e[s] = cm(n, i);
}
const td = (e) => e === rr || e === D,
  nd = (e, t) => parseFloat(e.split(", ")[t]),
  rd =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return nd(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? nd(s[1], e) : 0;
      }
    },
  u1 = new Set(["x", "y", "z"]),
  c1 = nr.filter((e) => !u1.has(e));
function d1(e) {
  const t = [];
  return (
    c1.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Zn = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: rd(4, 13),
  y: rd(5, 14),
};
Zn.translateX = Zn.x;
Zn.translateY = Zn.y;
const on = new Set();
let Ul = !1,
  Wl = !1;
function dm() {
  if (Wl) {
    const e = Array.from(on).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const i = d1(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var l;
            (l = r.getValue(s)) === null || l === void 0 || l.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((Wl = !1), (Ul = !1), on.forEach((e) => e.complete()), on.clear());
}
function fm() {
  on.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Wl = !0));
  });
}
function f1() {
  (fm(), dm());
}
class ku {
  constructor(t, n, r, i, s, o = !1) {
    ((this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o));
  }
  scheduleResolve() {
    ((this.isScheduled = !0),
      this.isAsync
        ? (on.add(this), Ul || ((Ul = !0), W.read(fm), W.resolveKeyframes(dm)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            l = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const a = r.readValue(n, l);
            a != null && (t[0] = a);
          }
          (t[0] === void 0 && (t[0] = l), i && o === void 0 && i.set(t[0]));
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    ((this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      on.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), on.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const hm = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  h1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function p1(e) {
  const t = h1.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function pm(e, t, n = 1) {
  const [r, i] = p1(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return hm(o) ? parseFloat(o) : o;
  }
  return ru(i) ? pm(i, t, n + 1) : i;
}
const mm = (e) => (t) => t.test(e),
  m1 = { test: (e) => e === "auto", parse: (e) => e },
  gm = [rr, D, nt, xt, iv, rv, m1],
  id = (e) => gm.find(mm(e));
class ym extends ku {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let a = 0; a < t.length; a++) {
      let c = t[a];
      if (typeof c == "string" && ((c = c.trim()), ru(c))) {
        const d = pm(c, n.current);
        (d !== void 0 && (t[a] = d),
          a === t.length - 1 && (this.finalKeyframe = c));
      }
    }
    if ((this.resolveNoneKeyframes(), !Gp.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = id(i),
      l = id(s);
    if (o !== l)
      if (td(o) && td(l))
        for (let a = 0; a < t.length; a++) {
          const c = t[a];
          typeof c == "string" && (t[a] = parseFloat(c));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) $v(t[i]) && r.push(i);
    r.length && a1(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Zn[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      l = i[o];
    ((i[o] = Zn[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([a, c]) => {
          n.getValue(a).set(c);
        }),
      this.resolveNoneKeyframes());
  }
}
const sd = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Vt.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function g1(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function y1(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = sd(i, t),
    l = sd(s, t);
  return !o || !l ? !1 : g1(e) || ((n === "spring" || du(n)) && r);
}
const v1 = (e) => e !== null;
function Zs(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(v1),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const x1 = 40;
class vm {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...l
  }) {
    ((this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = rt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...l,
      }),
      this.updateFinishedPromise());
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > x1
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (
      !this._resolved && !this.hasAttemptedResolve && f1(),
      this._resolved
    );
  }
  onKeyframesResolved(t, n) {
    ((this.resolvedAt = rt.now()), (this.hasAttemptedResolve = !0));
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: l,
      onUpdate: a,
      isGenerator: c,
    } = this.options;
    if (!c && !y1(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        (a && a(Zs(t, this.options, n)),
          l && l(),
          this.resolveFinishedPromise());
        return;
      }
    const d = this.initPlayback(t, n);
    d !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...d }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    ((this.options.type = "keyframes"), (this.options.ease = "linear"));
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const K = (e, t, n) => e + (t - e) * n;
function Do(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function w1({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    ((i = Do(a, l, e + 1 / 3)), (s = Do(a, l, e)), (o = Do(a, l, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Fs(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Ro = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  S1 = [Il, nn, Mn],
  k1 = (e) => S1.find((t) => t.test(e));
function od(e) {
  const t = k1(e);
  if (!t) return !1;
  let n = t.parse(e);
  return (t === Mn && (n = w1(n)), n);
}
const ld = (e, t) => {
    const n = od(e),
      r = od(t);
    if (!n || !r) return Fs(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = Ro(n.red, r.red, s)),
      (i.green = Ro(n.green, r.green, s)),
      (i.blue = Ro(n.blue, r.blue, s)),
      (i.alpha = K(n.alpha, r.alpha, s)),
      nn.transform(i)
    );
  },
  j1 = (e, t) => (n) => t(e(n)),
  ci = (...e) => e.reduce(j1),
  Hl = new Set(["none", "hidden"]);
function C1(e, t) {
  return Hl.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function E1(e, t) {
  return (n) => K(e, t, n);
}
function ju(e) {
  return typeof e == "number"
    ? E1
    : typeof e == "string"
      ? ru(e)
        ? Fs
        : pe.test(e)
          ? ld
          : P1
      : Array.isArray(e)
        ? xm
        : typeof e == "object"
          ? pe.test(e)
            ? ld
            : F1
          : Fs;
}
function xm(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => ju(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function F1(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = ju(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function T1(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      l = e.indexes[o][i[o]],
      a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    ((r[s] = a), i[o]++);
  }
  return r;
}
const P1 = (e, t) => {
  const n = Vt.createTransformer(t),
    r = ti(e),
    i = ti(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Hl.has(e) && !i.values.length) || (Hl.has(t) && !r.values.length)
      ? C1(e, t)
      : ci(xm(T1(r, i), i.values), n)
    : Fs(e, t);
};
function wm(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? K(e, t, n)
    : ju(e)(e, t);
}
const b1 = 5;
function Sm(e, t, n) {
  const r = Math.max(t - b1, 0);
  return Qp(n - e(r), t - r);
}
const Y = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Mo = 0.001;
function A1({
  duration: e = Y.duration,
  bounce: t = Y.bounce,
  velocity: n = Y.velocity,
  mass: r = Y.mass,
}) {
  let i,
    s,
    o = 1 - t;
  ((o = mt(Y.minDamping, Y.maxDamping, o)),
    (e = mt(Y.minDuration, Y.maxDuration, ct(e))),
    o < 1
      ? ((i = (c) => {
          const d = c * o,
            f = d * e,
            h = d - n,
            y = $l(c, o),
            v = Math.exp(-f);
          return Mo - (h / y) * v;
        }),
        (s = (c) => {
          const f = c * o * e,
            h = f * n + n,
            y = Math.pow(o, 2) * Math.pow(c, 2) * e,
            v = Math.exp(-f),
            x = $l(Math.pow(c, 2), o);
          return ((-i(c) + Mo > 0 ? -1 : 1) * ((h - y) * v)) / x;
        }))
      : ((i = (c) => {
          const d = Math.exp(-c * e),
            f = (c - n) * e + 1;
          return -Mo + d * f;
        }),
        (s = (c) => {
          const d = Math.exp(-c * e),
            f = (n - c) * (e * e);
          return d * f;
        })));
  const l = 5 / e,
    a = R1(i, s, l);
  if (((e = ut(e)), isNaN(a)))
    return { stiffness: Y.stiffness, damping: Y.damping, duration: e };
  {
    const c = Math.pow(a, 2) * r;
    return { stiffness: c, damping: o * 2 * Math.sqrt(r * c), duration: e };
  }
}
const D1 = 12;
function R1(e, t, n) {
  let r = n;
  for (let i = 1; i < D1; i++) r = r - e(r) / t(r);
  return r;
}
function $l(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const M1 = ["duration", "bounce"],
  N1 = ["stiffness", "damping", "mass"];
function ad(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function B1(e) {
  let t = {
    velocity: Y.velocity,
    stiffness: Y.stiffness,
    damping: Y.damping,
    mass: Y.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!ad(e, N1) && ad(e, M1))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * mt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: Y.mass, stiffness: i, damping: s };
    } else {
      const n = A1(e);
      ((t = { ...t, ...n, mass: Y.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function km(e = Y.visualDuration, t = Y.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    l = { done: !1, value: s },
    {
      stiffness: a,
      damping: c,
      mass: d,
      duration: f,
      velocity: h,
      isResolvedFromDuration: y,
    } = B1({ ...n, velocity: -ct(n.velocity || 0) }),
    v = h || 0,
    x = c / (2 * Math.sqrt(a * d)),
    k = o - s,
    m = ct(Math.sqrt(a / d)),
    p = Math.abs(k) < 5;
  (r || (r = p ? Y.restSpeed.granular : Y.restSpeed.default),
    i || (i = p ? Y.restDelta.granular : Y.restDelta.default));
  let g;
  if (x < 1) {
    const S = $l(m, x);
    g = (E) => {
      const F = Math.exp(-x * m * E);
      return (
        o - F * (((v + x * m * k) / S) * Math.sin(S * E) + k * Math.cos(S * E))
      );
    };
  } else if (x === 1) g = (S) => o - Math.exp(-m * S) * (k + (v + m * k) * S);
  else {
    const S = m * Math.sqrt(x * x - 1);
    g = (E) => {
      const F = Math.exp(-x * m * E),
        j = Math.min(S * E, 300);
      return (
        o - (F * ((v + x * m * k) * Math.sinh(j) + S * k * Math.cosh(j))) / S
      );
    };
  }
  const w = {
    calculatedDuration: (y && f) || null,
    next: (S) => {
      const E = g(S);
      if (y) l.done = S >= f;
      else {
        let F = 0;
        x < 1 && (F = S === 0 ? ut(v) : Sm(g, S, E));
        const j = Math.abs(F) <= r,
          B = Math.abs(o - E) <= i;
        l.done = j && B;
      }
      return ((l.value = l.done ? o : E), l);
    },
    toString: () => {
      const S = Math.min(Ip(w), Vl),
        E = Op((F) => w.next(S * F).value, S, 30);
      return S + "ms " + E;
    },
  };
  return w;
}
function ud({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: l,
  max: a,
  restDelta: c = 0.5,
  restSpeed: d,
}) {
  const f = e[0],
    h = { done: !1, value: f },
    y = (j) => (l !== void 0 && j < l) || (a !== void 0 && j > a),
    v = (j) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - j) < Math.abs(a - j)
          ? l
          : a;
  let x = n * t;
  const k = f + x,
    m = o === void 0 ? k : o(k);
  m !== k && (x = m - f);
  const p = (j) => -x * Math.exp(-j / r),
    g = (j) => m + p(j),
    w = (j) => {
      const B = p(j),
        R = g(j);
      ((h.done = Math.abs(B) <= c), (h.value = h.done ? m : R));
    };
  let S, E;
  const F = (j) => {
    y(h.value) &&
      ((S = j),
      (E = km({
        keyframes: [h.value, v(h.value)],
        velocity: Sm(g, j, h.value),
        damping: i,
        stiffness: s,
        restDelta: c,
        restSpeed: d,
      })));
  };
  return (
    F(0),
    {
      calculatedDuration: null,
      next: (j) => {
        let B = !1;
        return (
          !E && S === void 0 && ((B = !0), w(j), F(j)),
          S !== void 0 && j >= S ? E.next(j - S) : (!B && w(j), h)
        );
      },
    }
  );
}
const L1 = ui(0.42, 0, 1, 1),
  V1 = ui(0, 0, 0.58, 1),
  jm = ui(0.42, 0, 0.58, 1),
  z1 = (e) => Array.isArray(e) && typeof e[0] != "number",
  _1 = {
    linear: Ae,
    easeIn: L1,
    easeInOut: jm,
    easeOut: V1,
    circIn: vu,
    circInOut: rm,
    circOut: nm,
    backIn: yu,
    backInOut: em,
    backOut: Jp,
    anticipate: tm,
  },
  cd = (e) => {
    if (fu(e)) {
      wp(e.length === 4);
      const [t, n, r, i] = e;
      return ui(t, n, r, i);
    } else if (typeof e == "string") return _1[e];
    return e;
  };
function I1(e, t, n) {
  const r = [],
    i = n || wm,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let l = i(e[o], e[o + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[o] || Ae : t;
      l = ci(a, l);
    }
    r.push(l);
  }
  return r;
}
function O1(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((wp(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const l = I1(t, r, i),
    a = l.length,
    c = (d) => {
      if (o && d < e[0]) return t[0];
      let f = 0;
      if (a > 1) for (; f < e.length - 2 && !(d < e[f + 1]); f++);
      const h = Xn(e[f], e[f + 1], d);
      return l[f](h);
    };
  return n ? (d) => c(mt(e[0], e[s - 1], d)) : c;
}
function U1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Xn(0, t, r);
    e.push(K(n, 1, i));
  }
}
function W1(e) {
  const t = [0];
  return (U1(t, e.length - 1), t);
}
function H1(e, t) {
  return e.map((n) => n * t);
}
function $1(e, t) {
  return e.map(() => t || jm).splice(0, e.length - 1);
}
function Ts({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = z1(r) ? r.map(cd) : cd(r),
    s = { done: !1, value: t[0] },
    o = H1(n && n.length === t.length ? n : W1(t), e),
    l = O1(o, t, { ease: Array.isArray(i) ? i : $1(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((s.value = l(a)), (s.done = a >= e), s),
  };
}
const K1 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => W.update(t, !0),
      stop: () => Lt(t),
      now: () => (ue.isProcessing ? ue.timestamp : rt.now()),
    };
  },
  G1 = { decay: ud, inertia: ud, tween: Ts, keyframes: Ts, spring: km },
  Q1 = (e) => e / 100;
class Cu extends vm {
  constructor(t) {
    (super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      }));
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
      o = (i == null ? void 0 : i.KeyframeResolver) || ku,
      l = (a, c) => this.onKeyframesResolved(a, c);
    ((this.resolver = new o(s, l, n, r, i)), this.resolver.scheduleResolve());
  }
  flatten() {
    (super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes),
        ));
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      l = du(n) ? n : G1[n] || Ts;
    let a, c;
    l !== Ts &&
      typeof t[0] != "number" &&
      ((a = ci(Q1, wm(t[0], t[1]))), (t = [0, 100]));
    const d = l({ ...this.options, keyframes: t });
    (s === "mirror" &&
      (c = l({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      d.calculatedDuration === null && (d.calculatedDuration = Ip(d)));
    const { calculatedDuration: f } = d,
      h = f + i,
      y = h * (r + 1) - i;
    return {
      generator: d,
      mirroredGenerator: c,
      mapPercentToKeyframes: a,
      calculatedDuration: f,
      resolvedDuration: h,
      totalDuration: y,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    (this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState));
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: j } = this.options;
      return { done: !0, value: j[j.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: l,
      keyframes: a,
      calculatedDuration: c,
      totalDuration: d,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: h,
      repeat: y,
      repeatType: v,
      repeatDelay: x,
      onUpdate: k,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - d / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed));
    const m = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? m < 0 : m > d;
    ((this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = d));
    let g = this.currentTime,
      w = s;
    if (y) {
      const j = Math.min(this.currentTime, d) / f;
      let B = Math.floor(j),
        R = j % 1;
      (!R && j >= 1 && (R = 1),
        R === 1 && B--,
        (B = Math.min(B, y + 1)),
        !!(B % 2) &&
          (v === "reverse"
            ? ((R = 1 - R), x && (R -= x / f))
            : v === "mirror" && (w = o)),
        (g = mt(0, 1, R) * f));
    }
    const S = p ? { done: !1, value: a[0] } : w.next(g);
    l && (S.value = l(S.value));
    let { done: E } = S;
    !p &&
      c !== null &&
      (E = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const F =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && E));
    return (
      F && i !== void 0 && (S.value = Zs(a, this.options, i)),
      k && k(S.value),
      F && this.finish(),
      S
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? ct(t.calculatedDuration) : 0;
  }
  get time() {
    return ct(this.currentTime);
  }
  set time(t) {
    ((t = ut(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = ct(this.currentTime)));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = K1, onPlay: n, startTime: r } = this.options;
    (this.driver || (this.driver = t((s) => this.tick(s))), n && n());
    const i = this.driver.now();
    (this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = i)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    ((this.state = "paused"),
      (this.holdTime =
        (t = this.currentTime) !== null && t !== void 0 ? t : 0));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.teardown(), (this.state = "finished"));
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    (this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel());
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
}
const Y1 = new Set(["opacity", "clipPath", "filter", "transform"]);
function X1(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: l = "easeInOut",
    times: a,
  } = {},
) {
  const c = { [t]: n };
  a && (c.offset = a);
  const d = Wp(l, i);
  return (
    Array.isArray(d) && (c.easing = d),
    e.animate(c, {
      delay: r,
      duration: i,
      easing: Array.isArray(d) ? "linear" : d,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const q1 = Xa(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Ps = 10,
  Z1 = 2e4;
function J1(e) {
  return du(e.type) || e.type === "spring" || !Up(e.ease);
}
function ex(e, t) {
  const n = new Cu({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < Z1; ) ((r = n.sample(s)), i.push(r.value), (s += Ps));
  return { times: void 0, keyframes: i, duration: s - Ps, ease: "linear" };
}
const Cm = { anticipate: tm, backInOut: em, circInOut: rm };
function tx(e) {
  return e in Cm;
}
class dd extends vm {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    ((this.resolver = new ym(
      s,
      (o, l) => this.onKeyframesResolved(o, l),
      n,
      r,
      i,
    )),
      this.resolver.scheduleResolve());
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: i,
      ease: s,
      type: o,
      motionValue: l,
      name: a,
      startTime: c,
    } = this.options;
    if (!l.owner || !l.owner.current) return !1;
    if (
      (typeof s == "string" && Es() && tx(s) && (s = Cm[s]), J1(this.options))
    ) {
      const {
          onComplete: f,
          onUpdate: h,
          motionValue: y,
          element: v,
          ...x
        } = this.options,
        k = ex(t, x);
      ((t = k.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = k.duration),
        (i = k.times),
        (s = k.ease),
        (o = "keyframes"));
    }
    const d = X1(l.owner.current, a, t, {
      ...this.options,
      duration: r,
      times: i,
      ease: s,
    });
    return (
      (d.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Yc(d, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: f } = this.options;
            (l.set(Zs(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise());
          }),
      { animation: d, duration: r, times: i, type: o, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return ct(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return ct(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = ut(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Ae;
      const { animation: r } = n;
      Yc(r, t);
    }
    return Ae;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    (n.playState === "finished" && this.updateFinishedPromise(), n.play());
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    (this.resolveFinishedPromise(), this.updateFinishedPromise());
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: o,
      times: l,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: c,
          onUpdate: d,
          onComplete: f,
          element: h,
          ...y
        } = this.options,
        v = new Cu({
          ...y,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: l,
          isGenerator: !0,
        }),
        x = ut(this.time);
      c.setWithVelocity(v.sample(x - Ps).value, v.sample(x).value, Ps);
    }
    const { onStop: a } = this.options;
    (a && a(), this.cancel());
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: l,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: a, transformTemplate: c } = n.owner.getProps();
    return (
      q1() &&
      r &&
      Y1.has(r) &&
      !a &&
      !c &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      l !== "inertia"
    );
  }
}
const nx = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  rx = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  ix = { type: "keyframes", duration: 0.8 },
  sx = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  ox = (e, { keyframes: t }) =>
    t.length > 2
      ? ix
      : pn.has(e)
        ? e.startsWith("scale")
          ? rx(t[1])
          : nx
        : sx;
function lx({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: l,
  from: a,
  elapsed: c,
  ...d
}) {
  return !!Object.keys(d).length;
}
const Eu =
  (e, t, n, r = {}, i, s) =>
  (o) => {
    const l = cu(r, e) || {},
      a = l.delay || r.delay || 0;
    let { elapsed: c = 0 } = r;
    c = c - ut(a);
    let d = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...l,
      delay: -c,
      onUpdate: (h) => {
        (t.set(h), l.onUpdate && l.onUpdate(h));
      },
      onComplete: () => {
        (o(), l.onComplete && l.onComplete());
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    (lx(l) || (d = { ...d, ...ox(e, d) }),
      d.duration && (d.duration = ut(d.duration)),
      d.repeatDelay && (d.repeatDelay = ut(d.repeatDelay)),
      d.from !== void 0 && (d.keyframes[0] = d.from));
    let f = !1;
    if (
      ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
        ((d.duration = 0), d.delay === 0 && (f = !0)),
      f && !s && t.get() !== void 0)
    ) {
      const h = Zs(d.keyframes, l);
      if (h !== void 0)
        return (
          W.update(() => {
            (d.onUpdate(h), d.onComplete());
          }),
          new Fv([])
        );
    }
    return !s && dd.supports(d) ? new dd(d) : new Cu(d);
  };
function ax({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function Em(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  r && (o = r);
  const c = [],
    d = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const h = e.getValue(
        f,
        (s = e.latestValues[f]) !== null && s !== void 0 ? s : null,
      ),
      y = a[f];
    if (y === void 0 || (d && ax(d, f))) continue;
    const v = { delay: n, ...cu(o || {}, f) };
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const m = Yp(e);
      if (m) {
        const p = window.MotionHandoffAnimation(m, f, W);
        p !== null && ((v.startTime = p), (x = !0));
      }
    }
    (_l(e, f),
      h.start(
        Eu(f, h, y, e.shouldReduceMotion && Gp.has(f) ? { type: !1 } : v, e, x),
      ));
    const k = h.animation;
    k && c.push(k);
  }
  return (
    l &&
      Promise.all(c).then(() => {
        W.update(() => {
          l && Iv(e, l);
        });
      }),
    c
  );
}
function Kl(e, t, n = {}) {
  var r;
  const i = qs(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0,
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(Em(e, i, n)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: d = 0,
              staggerChildren: f,
              staggerDirection: h,
            } = s;
            return ux(e, t, d + c, f, h, n);
          }
        : () => Promise.resolve(),
    { when: a } = s;
  if (a) {
    const [c, d] = a === "beforeChildren" ? [o, l] : [l, o];
    return c().then(() => d());
  } else return Promise.all([o(), l(n.delay)]);
}
function ux(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (c = 0) => c * r : (c = 0) => l - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(cx)
      .forEach((c, d) => {
        (c.notify("AnimationStart", t),
          o.push(
            Kl(c, t, { ...s, delay: n + a(d) }).then(() =>
              c.notify("AnimationComplete", t),
            ),
          ));
      }),
    Promise.all(o)
  );
}
function cx(e, t) {
  return e.sortNodePosition(t);
}
function dx(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Kl(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Kl(e, t, n);
  else {
    const i = typeof t == "function" ? qs(e, t, n.custom) : t;
    r = Promise.all(Em(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const fx = Za.length;
function Fm(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Fm(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < fx; n++) {
    const r = Za[n],
      i = e.props[r];
    (Zr(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const hx = [...qa].reverse(),
  px = qa.length;
function mx(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => dx(e, n, r)));
}
function gx(e) {
  let t = mx(e),
    n = fd(),
    r = !0;
  const i = (a) => (c, d) => {
    var f;
    const h = qs(
      e,
      d,
      a === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0,
    );
    if (h) {
      const { transition: y, transitionEnd: v, ...x } = h;
      c = { ...c, ...x, ...v };
    }
    return c;
  };
  function s(a) {
    t = a(e);
  }
  function o(a) {
    const { props: c } = e,
      d = Fm(e.parent) || {},
      f = [],
      h = new Set();
    let y = {},
      v = 1 / 0;
    for (let k = 0; k < px; k++) {
      const m = hx[k],
        p = n[m],
        g = c[m] !== void 0 ? c[m] : d[m],
        w = Zr(g),
        S = m === a ? p.isActive : null;
      S === !1 && (v = k);
      let E = g === d[m] && g !== c[m] && w;
      if (
        (E && r && e.manuallyAnimateOnMount && (E = !1),
        (p.protectedKeys = { ...y }),
        (!p.isActive && S === null) ||
          (!g && !p.prevProp) ||
          Ys(g) ||
          typeof g == "boolean")
      )
        continue;
      const F = yx(p.prevProp, g);
      let j = F || (m === a && p.isActive && !E && w) || (k > v && w),
        B = !1;
      const R = Array.isArray(g) ? g : [g];
      let ie = R.reduce(i(m), {});
      S === !1 && (ie = {});
      const { prevResolvedValues: yt = {} } = p,
        Ut = { ...yt, ...ie },
        ir = (te) => {
          ((j = !0),
            h.has(te) && ((B = !0), h.delete(te)),
            (p.needsAnimating[te] = !0));
          const P = e.getValue(te);
          P && (P.liveStyle = !1);
        };
      for (const te in Ut) {
        const P = ie[te],
          M = yt[te];
        if (y.hasOwnProperty(te)) continue;
        let N = !1;
        (Ll(P) && Ll(M) ? (N = !_p(P, M)) : (N = P !== M),
          N
            ? P != null
              ? ir(te)
              : h.add(te)
            : P !== void 0 && h.has(te)
              ? ir(te)
              : (p.protectedKeys[te] = !0));
      }
      ((p.prevProp = g),
        (p.prevResolvedValues = ie),
        p.isActive && (y = { ...y, ...ie }),
        r && e.blockInitialAnimation && (j = !1),
        j &&
          (!(E && F) || B) &&
          f.push(...R.map((te) => ({ animation: te, options: { type: m } }))));
    }
    if (h.size) {
      const k = {};
      (h.forEach((m) => {
        const p = e.getBaseTarget(m),
          g = e.getValue(m);
        (g && (g.liveStyle = !0), (k[m] = p ?? null));
      }),
        f.push({ animation: k }));
    }
    let x = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(f) : Promise.resolve()
    );
  }
  function l(a, c) {
    var d;
    if (n[a].isActive === c) return Promise.resolve();
    ((d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((h) => {
        var y;
        return (y = h.animationState) === null || y === void 0
          ? void 0
          : y.setActive(a, c);
      }),
      (n[a].isActive = c));
    const f = o(a);
    for (const h in n) n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: o,
    setActive: l,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      ((n = fd()), (r = !0));
    },
  };
}
function yx(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !_p(t, e) : !1;
}
function $t(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function fd() {
  return {
    animate: $t(!0),
    whileInView: $t(),
    whileHover: $t(),
    whileTap: $t(),
    whileDrag: $t(),
    whileFocus: $t(),
    exit: $t(),
  };
}
class Ot {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
class vx extends Ot {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = gx(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ys(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this));
  }
}
let xx = 0;
class wx extends Ot {
  constructor() {
    (super(...arguments), (this.id = xx++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const Sx = { animation: { Feature: vx }, exit: { Feature: wx } };
function ni(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function di(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const kx = (e) => (t) => hu(t) && e(t, di(t));
function Rr(e, t, n, r) {
  return ni(e, t, kx(n), r);
}
const hd = (e, t) => Math.abs(e - t);
function jx(e, t) {
  const n = hd(e.x, t.x),
    r = hd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Tm {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = Bo(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          y = jx(f.offset, { x: 0, y: 0 }) >= 3;
        if (!h && !y) return;
        const { point: v } = f,
          { timestamp: x } = ue;
        this.history.push({ ...v, timestamp: x });
        const { onStart: k, onMove: m } = this.handlers;
        (h ||
          (k && k(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, f));
      }),
      (this.handlePointerMove = (f, h) => {
        ((this.lastMoveEvent = f),
          (this.lastMoveEventInfo = No(h, this.transformPagePoint)),
          W.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (f, h) => {
        this.end();
        const { onEnd: y, onSessionEnd: v, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const k = Bo(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : No(h, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && y && y(f, k), v && v(f, k));
      }),
      !hu(t))
    )
      return;
    ((this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window));
    const o = di(t),
      l = No(o, this.transformPagePoint),
      { point: a } = l,
      { timestamp: c } = ue;
    this.history = [{ ...a, timestamp: c }];
    const { onSessionStart: d } = n;
    (d && d(t, Bo(l, this.history)),
      (this.removeListeners = ci(
        Rr(this.contextWindow, "pointermove", this.handlePointerMove),
        Rr(this.contextWindow, "pointerup", this.handlePointerUp),
        Rr(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), Lt(this.updatePoint));
  }
}
function No(e, t) {
  return t ? { point: t(e.point) } : e;
}
function pd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Bo({ point: e }, t) {
  return {
    point: e,
    delta: pd(e, Pm(t)),
    offset: pd(e, Cx(t)),
    velocity: Ex(t, 0.1),
  };
}
function Cx(e) {
  return e[0];
}
function Pm(e) {
  return e[e.length - 1];
}
function Ex(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Pm(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > ut(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = ct(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
const bm = 1e-4,
  Fx = 1 - bm,
  Tx = 1 + bm,
  Am = 0.01,
  Px = 0 - Am,
  bx = 0 + Am;
function Re(e) {
  return e.max - e.min;
}
function Ax(e, t, n) {
  return Math.abs(e - t) <= n;
}
function md(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = K(t.min, t.max, e.origin)),
    (e.scale = Re(n) / Re(t)),
    (e.translate = K(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Fx && e.scale <= Tx) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Px && e.translate <= bx) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Mr(e, t, n, r) {
  (md(e.x, t.x, n.x, r ? r.originX : void 0),
    md(e.y, t.y, n.y, r ? r.originY : void 0));
}
function gd(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + Re(t)));
}
function Dx(e, t, n) {
  (gd(e.x, t.x, n.x), gd(e.y, t.y, n.y));
}
function yd(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + Re(t)));
}
function Nr(e, t, n) {
  (yd(e.x, t.x, n.x), yd(e.y, t.y, n.y));
}
function Rx(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? K(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function vd(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function Mx(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: vd(e.x, n, i), y: vd(e.y, t, r) };
}
function xd(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function Nx(e, t) {
  return { x: xd(e.x, t.x), y: xd(e.y, t.y) };
}
function Bx(e, t) {
  let n = 0.5;
  const r = Re(e),
    i = Re(t);
  return (
    i > r
      ? (n = Xn(t.min, t.max - r, e.min))
      : r > i && (n = Xn(e.min, e.max - i, t.min)),
    mt(0, 1, n)
  );
}
function Lx(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Gl = 0.35;
function Vx(e = Gl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Gl),
    { x: wd(e, "left", "right"), y: wd(e, "top", "bottom") }
  );
}
function wd(e, t, n) {
  return { min: Sd(e, t), max: Sd(e, n) };
}
function Sd(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const kd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Nn = () => ({ x: kd(), y: kd() }),
  jd = () => ({ min: 0, max: 0 }),
  Z = () => ({ x: jd(), y: jd() });
function Le(e) {
  return [e("x"), e("y")];
}
function Dm({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function zx({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function _x(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Lo(e) {
  return e === void 0 || e === 1;
}
function Ql({ scale: e, scaleX: t, scaleY: n }) {
  return !Lo(e) || !Lo(t) || !Lo(n);
}
function qt(e) {
  return (
    Ql(e) ||
    Rm(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Rm(e) {
  return Cd(e.x) || Cd(e.y);
}
function Cd(e) {
  return e && e !== "0%";
}
function bs(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Ed(e, t, n, r, i) {
  return (i !== void 0 && (e = bs(e, i, r)), bs(e, n, r) + t);
}
function Yl(e, t = 0, n = 1, r, i) {
  ((e.min = Ed(e.min, t, n, r, i)), (e.max = Ed(e.max, t, n, r, i)));
}
function Mm(e, { x: t, y: n }) {
  (Yl(e.x, t.translate, t.scale, t.originPoint),
    Yl(e.y, n.translate, n.scale, n.originPoint));
}
const Fd = 0.999999999999,
  Td = 1.0000000000001;
function Ix(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let l = 0; l < i; l++) {
    ((s = n[l]), (o = s.projectionDelta));
    const { visualElement: a } = s.options;
    (a && a.props.style && a.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Ln(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Mm(e, o)),
      r && qt(s.latestValues) && Ln(e, s.latestValues));
  }
  (t.x < Td && t.x > Fd && (t.x = 1), t.y < Td && t.y > Fd && (t.y = 1));
}
function Bn(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function Pd(e, t, n, r, i = 0.5) {
  const s = K(e.min, e.max, i);
  Yl(e, t, n, s, r);
}
function Ln(e, t) {
  (Pd(e.x, t.x, t.scaleX, t.scale, t.originX),
    Pd(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function Nm(e, t) {
  return Dm(_x(e.getBoundingClientRect(), t));
}
function Ox(e, t, n) {
  const r = Nm(e, n),
    { scroll: i } = t;
  return (i && (Bn(r.x, i.offset.x), Bn(r.y, i.offset.y)), r);
}
const Bm = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Ux = new WeakMap();
class Wx {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Z()),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (d) => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(di(d).point));
      },
      s = (d, f) => {
        const { drag: h, dragPropagation: y, onDragStart: v } = this.getProps();
        if (
          h &&
          !y &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Bv(h)),
          !this.openDragLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Le((k) => {
            let m = this.getAxisMotionValue(k).get() || 0;
            if (nt.test(m)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const g = p.layout.layoutBox[k];
                g && (m = Re(g) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[k] = m;
          }),
          v && W.postRender(() => v(d, f)),
          _l(this.visualElement, "transform"));
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      o = (d, f) => {
        const {
          dragPropagation: h,
          dragDirectionLock: y,
          onDirectionLock: v,
          onDrag: x,
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const { offset: k } = f;
        if (y && this.currentDirection === null) {
          ((this.currentDirection = Hx(k)),
            this.currentDirection !== null && v && v(this.currentDirection));
          return;
        }
        (this.updateAxis("x", f.point, k),
          this.updateAxis("y", f.point, k),
          this.visualElement.render(),
          x && x(d, f));
      },
      l = (d, f) => this.stop(d, f),
      a = () =>
        Le((d) => {
          var f;
          return (
            this.getAnimationState(d) === "paused" &&
            ((f = this.getAxisMotionValue(d).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Tm(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: l,
        resumeAnimation: a,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: Bm(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && W.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Li(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (o = Rx(o, this.constraints[t], this.elastic[t])),
      s.set(o));
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      s = this.constraints;
    (n && Rn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
        ? (this.constraints = Mx(i.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = Vx(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Le((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = Lx(i.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Rn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = Ox(r, i.root, this.visualElement.getTransformPagePoint());
    let o = Nx(i.layout.layoutBox, s);
    if (n) {
      const l = n(zx(o));
      ((this.hasMutatedConstraints = !!l), l && (o = Dm(l)));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      c = Le((d) => {
        if (!Li(d, n, this.currentDirection)) return;
        let f = (a && a[d]) || {};
        o && (f = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          y = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: h,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f,
          };
        return this.startAxisValueAnimation(d, v);
      });
    return Promise.all(c).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      _l(this.visualElement, t),
      r.start(Eu(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Le((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Le((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Le((n) => {
      const { drag: r } = this.getProps();
      if (!Li(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: l } = i.layout.layoutBox[n];
        s.set(t[n] - K(o, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Rn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Le((o) => {
      const l = this.getAxisMotionValue(o);
      if (l && this.constraints !== !1) {
        const a = l.get();
        i[o] = Bx({ min: a, max: a }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Le((o) => {
        if (!Li(o, t, null)) return;
        const l = this.getAxisMotionValue(o),
          { min: a, max: c } = this.constraints[o];
        l.set(K(a, c, i[o]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Ux.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Rr(t, "pointerdown", (a) => {
        const { drag: c, dragListener: d = !0 } = this.getProps();
        c && d && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        Rn(a) && a.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      W.read(r));
    const o = ni(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (Le((d) => {
              const f = this.getAxisMotionValue(d);
              f &&
                ((this.originPoint[d] += a[d].translate),
                f.set(f.get() + a[d].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (o(), n(), s(), l && l());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = Gl,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: l,
    };
  }
}
function Li(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Hx(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class $x extends Ot {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = Ae),
      (this.removeListeners = Ae),
      (this.controls = new Wx(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ae));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const bd = (e) => (t, n) => {
  e && W.postRender(() => e(t, n));
};
class Kx extends Ot {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Ae));
  }
  onPointerDown(t) {
    this.session = new Tm(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Bm(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: bd(t),
      onStart: bd(n),
      onMove: r,
      onEnd: (s, o) => {
        (delete this.session, i && W.postRender(() => i(s, o)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Rr(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const qi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ad(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const hr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (D.test(e)) e = parseFloat(e);
        else return e;
      const n = Ad(e, t.target.x),
        r = Ad(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  Gx = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Vt.parse(e);
      if (i.length > 5) return r;
      const s = Vt.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      ((i[0 + o] /= l), (i[1 + o] /= a));
      const c = K(l, a, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= c),
        typeof i[3 + o] == "number" && (i[3 + o] /= c),
        s(i)
      );
    },
  };
class Qx extends T.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    (pv(Yx),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (qi.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              W.postRender(() => {
                const l = o.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      eu.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Lm(e) {
  const [t, n] = vp(),
    r = T.useContext(Ka);
  return u.jsx(Qx, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: T.useContext(Fp),
    isPresent: t,
    safeToRemove: n,
  });
}
const Yx = {
  borderRadius: {
    ...hr,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: hr,
  borderTopRightRadius: hr,
  borderBottomLeftRadius: hr,
  borderBottomRightRadius: hr,
  boxShadow: Gx,
};
function Xx(e, t, n) {
  const r = ge(e) ? e : ei(e);
  return (r.start(Eu("", r, t, n)), r.animation);
}
function qx(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const Zx = (e, t) => e.depth - t.depth;
class Jx {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (pu(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (mu(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(Zx),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function e2(e, t) {
  const n = rt.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (Lt(r), e(s - t));
    };
  return (W.read(r, !0), () => Lt(r));
}
const Vm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  t2 = Vm.length,
  Dd = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Rd = (e) => typeof e == "number" || D.test(e);
function n2(e, t, n, r, i, s) {
  i
    ? ((e.opacity = K(0, n.opacity !== void 0 ? n.opacity : 1, r2(r))),
      (e.opacityExit = K(t.opacity !== void 0 ? t.opacity : 1, 0, i2(r))))
    : s &&
      (e.opacity = K(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let o = 0; o < t2; o++) {
    const l = `border${Vm[o]}Radius`;
    let a = Md(t, l),
      c = Md(n, l);
    if (a === void 0 && c === void 0) continue;
    (a || (a = 0),
      c || (c = 0),
      a === 0 || c === 0 || Rd(a) === Rd(c)
        ? ((e[l] = Math.max(K(Dd(a), Dd(c), r), 0)),
          (nt.test(c) || nt.test(a)) && (e[l] += "%"))
        : (e[l] = c));
  }
  (t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r));
}
function Md(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const r2 = zm(0, 0.5, nm),
  i2 = zm(0.5, 0.95, Ae);
function zm(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Xn(e, t, r)));
}
function Nd(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function Be(e, t) {
  (Nd(e.x, t.x), Nd(e.y, t.y));
}
function Bd(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function Ld(e, t, n, r, i) {
  return (
    (e -= t),
    (e = bs(e, 1 / n, r)),
    i !== void 0 && (e = bs(e, 1 / i, r)),
    e
  );
}
function s2(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (nt.test(t) &&
      ((t = parseFloat(t)), (t = K(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let l = K(s.min, s.max, r);
  (e === s && (l -= t),
    (e.min = Ld(e.min, t, n, l, i)),
    (e.max = Ld(e.max, t, n, l, i)));
}
function Vd(e, t, [n, r, i], s, o) {
  s2(e, t[n], t[r], t[i], t.scale, s, o);
}
const o2 = ["x", "scaleX", "originX"],
  l2 = ["y", "scaleY", "originY"];
function zd(e, t, n, r) {
  (Vd(e.x, t, o2, n ? n.x : void 0, r ? r.x : void 0),
    Vd(e.y, t, l2, n ? n.y : void 0, r ? r.y : void 0));
}
function _d(e) {
  return e.translate === 0 && e.scale === 1;
}
function _m(e) {
  return _d(e.x) && _d(e.y);
}
function Id(e, t) {
  return e.min === t.min && e.max === t.max;
}
function a2(e, t) {
  return Id(e.x, t.x) && Id(e.y, t.y);
}
function Od(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Im(e, t) {
  return Od(e.x, t.x) && Od(e.y, t.y);
}
function Ud(e) {
  return Re(e.x) / Re(e.y);
}
function Wd(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class u2 {
  constructor() {
    this.members = [];
  }
  add(t) {
    (pu(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (mu(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function c2(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: c,
      rotate: d,
      rotateX: f,
      rotateY: h,
      skewX: y,
      skewY: v,
    } = n;
    (c && (r = `perspective(${c}px) ${r}`),
      d && (r += `rotate(${d}deg) `),
      f && (r += `rotateX(${f}deg) `),
      h && (r += `rotateY(${h}deg) `),
      y && (r += `skewX(${y}deg) `),
      v && (r += `skewY(${v}deg) `));
  }
  const l = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return ((l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none");
}
const Zt = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Sr = typeof window < "u" && window.MotionDebug !== void 0,
  Vo = ["", "X", "Y", "Z"],
  d2 = { visibility: "hidden" },
  Hd = 1e3;
let f2 = 0;
function zo(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Om(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Yp(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", W, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Om(r);
}
function Um({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, l = t == null ? void 0 : t()) {
      ((this.id = f2++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            Sr &&
              (Zt.totalNodes =
                Zt.resolvedTargetDeltas =
                Zt.recalculatedProjection =
                  0),
            this.nodes.forEach(m2),
            this.nodes.forEach(w2),
            this.nodes.forEach(S2),
            this.nodes.forEach(g2),
            Sr && window.MotionDebug.record(Zt));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0));
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Jx());
    }
    addEventListener(o, l) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new gu()),
        this.eventHandlers.get(o).add(l)
      );
    }
    notifyListeners(o, ...l) {
      const a = this.eventHandlers.get(o);
      a && a.notify(...l);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = qx(o)), (this.instance = o));
      const { layoutId: a, layout: c, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (c || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const h = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          ((this.root.updateBlockedByResize = !0),
            f && f(),
            (f = e2(h, 250)),
            qi.hasAnimatedSinceResize &&
              ((qi.hasAnimatedSinceResize = !1), this.nodes.forEach(Kd)));
        });
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          d &&
          (a || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: h,
              hasRelativeTargetChanged: y,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const x =
                  this.options.transition || d.getDefaultTransition() || F2,
                { onLayoutAnimationStart: k, onLayoutAnimationComplete: m } =
                  d.getProps(),
                p = !this.targetLayout || !Im(this.targetLayout, v) || y,
                g = !h && y;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (h && (p || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, g));
                const w = { ...cu(x, "layout"), onPlay: k, onComplete: m };
                ((d.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w));
              } else
                (h || Kd(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = v;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const o = this.getStack();
      (o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Lt(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(k2),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Om(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        ((f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1));
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const c = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = c
        ? c(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach($d));
        return;
      }
      (this.isUpdating || this.nodes.forEach(v2),
        (this.isUpdating = !1),
        this.nodes.forEach(x2),
        this.nodes.forEach(h2),
        this.nodes.forEach(p2),
        this.clearAllSnapshots());
      const l = rt.now();
      ((ue.delta = mt(0, 1e3 / 60, l - ue.timestamp)),
        (ue.timestamp = l),
        (ue.isProcessing = !0),
        Po.update.process(ue),
        Po.preRender.process(ue),
        Po.render.process(ue),
        (ue.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), eu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(y2), this.sharedNodes.forEach(j2));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        W.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      W.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const o = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = Z()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (l = !1),
        l)
      ) {
        const a = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: a,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : a,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        l = this.projectionDelta && !_m(this.projectionDelta),
        a = this.getTransformTemplate(),
        c = a ? a(this.latestValues, "") : void 0,
        d = c !== this.prevTransformTemplateValue;
      o &&
        (l || qt(this.latestValues) || d) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        o && (a = this.removeTransform(a)),
        T2(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: l } = this.options;
      if (!l) return Z();
      const a = l.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(P2)
        )
      ) {
        const { scroll: d } = this.root;
        d && (Bn(a.x, d.offset.x), Bn(a.y, d.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = Z();
      if (
        (Be(a, o), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
      )
        return a;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c],
          { scroll: f, options: h } = d;
        d !== this.root &&
          f &&
          h.layoutScroll &&
          (f.wasRoot && Be(a, o), Bn(a.x, f.offset.x), Bn(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(o, l = !1) {
      const a = Z();
      Be(a, o);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (!l &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          Ln(a, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
          qt(d.latestValues) && Ln(a, d.latestValues));
      }
      return (qt(this.latestValues) && Ln(a, this.latestValues), a);
    }
    removeTransform(o) {
      const l = Z();
      Be(l, o);
      for (let a = 0; a < this.path.length; a++) {
        const c = this.path[a];
        if (!c.instance || !qt(c.latestValues)) continue;
        Ql(c.latestValues) && c.updateSnapshot();
        const d = Z(),
          f = c.measurePageBox();
        (Be(d, f),
          zd(l, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d));
      }
      return (qt(this.latestValues) && zd(l, this.latestValues), l);
    }
    setTargetDelta(o) {
      ((this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ue.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var l;
      const a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      const c = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: h } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (
          ((this.resolvedRelativeTargetAt = ue.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1
            ? ((this.relativeParent = y),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Z()),
              (this.relativeTargetOrigin = Z()),
              Nr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                y.layout.layoutBox,
              ),
              Be(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Z()), (this.targetWithTransforms = Z())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Dx(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Be(this.target, this.layout.layoutBox),
                  Mm(this.target, this.targetDelta))
                : Be(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y &&
            !!y.resumingFrom == !!this.resumingFrom &&
            !y.options.layoutScroll &&
            y.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = y),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Z()),
                (this.relativeTargetOrigin = Z()),
                Nr(this.relativeTargetOrigin, this.target, y.target),
                Be(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Sr && Zt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Ql(this.parent.latestValues) ||
          Rm(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (c = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === ue.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(d || f))
      )
        return;
      Be(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        y = this.treeScale.y;
      (Ix(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((l.target = l.layout.layoutBox), (l.targetWithTransforms = Z())));
      const { target: v } = l;
      if (!v) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Bd(this.prevProjectionDelta.x, this.projectionDelta.x),
          Bd(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Mr(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== h ||
          this.treeScale.y !== y ||
          !Wd(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Wd(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        Sr && Zt.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var l;
      if (
        ((l = this.options.visualElement) === null ||
          l === void 0 ||
          l.scheduleRender(),
        o)
      ) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Nn()),
        (this.projectionDelta = Nn()),
        (this.projectionDeltaWithTransform = Nn()));
    }
    setAnimationOrigin(o, l = !1) {
      const a = this.snapshot,
        c = a ? a.latestValues : {},
        d = { ...this.latestValues },
        f = Nn();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l));
      const h = Z(),
        y = a ? a.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        x = y !== v,
        k = this.getStack(),
        m = !k || k.members.length <= 1,
        p = !!(x && !m && this.options.crossfade === !0 && !this.path.some(E2));
      this.animationProgress = 0;
      let g;
      ((this.mixTargetDelta = (w) => {
        const S = w / 1e3;
        (Gd(f.x, o.x, S),
          Gd(f.y, o.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Nr(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            C2(this.relativeTarget, this.relativeTargetOrigin, h, S),
            g && a2(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = Z()),
            Be(g, this.relativeTarget)),
          x &&
            ((this.animationValues = d), n2(d, c, this.latestValues, S, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(o) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Lt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = W.update(() => {
          ((qi.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Xx(0, Hd, {
              ...o,
              onUpdate: (l) => {
                (this.mixTargetDelta(l), o.onUpdate && o.onUpdate(l));
              },
              onComplete: () => {
                (o.onComplete && o.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      (o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Hd),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: c,
        latestValues: d,
      } = o;
      if (!(!l || !a || !c)) {
        if (
          this !== o &&
          this.layout &&
          c &&
          Wm(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          a = this.target || Z();
          const f = Re(this.layout.layoutBox.x);
          ((a.x.min = o.target.x.min), (a.x.max = a.x.min + f));
          const h = Re(this.layout.layoutBox.y);
          ((a.y.min = o.target.y.min), (a.y.max = a.y.min + h));
        }
        (Be(l, a),
          Ln(l, d),
          Mr(this.projectionDeltaWithTransform, this.layoutCorrected, l, d));
      }
    }
    registerSharedNode(o, l) {
      (this.sharedNodes.has(o) || this.sharedNodes.set(o, new u2()),
        this.sharedNodes.get(o).add(l));
      const c = l.options.initialPromotionConfig;
      l.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: l } = this.options;
      return l
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: l } = this.options;
      return l
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: l, preserveFollowOpacity: a } = {}) {
      const c = this.getStack();
      (c && c.promote(this, a),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l }));
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let l = !1;
      const { latestValues: a } = o;
      if (
        ((a.z ||
          a.rotate ||
          a.rotateX ||
          a.rotateY ||
          a.rotateZ ||
          a.skewX ||
          a.skewY) &&
          (l = !0),
        !l)
      )
        return;
      const c = {};
      a.z && zo("z", o, c, this.animationValues);
      for (let d = 0; d < Vo.length; d++)
        (zo(`rotate${Vo[d]}`, o, c, this.animationValues),
          zo(`skew${Vo[d]}`, o, c, this.animationValues));
      o.render();
      for (const d in c)
        (o.setStaticValue(d, c[d]),
          this.animationValues && (this.animationValues[d] = c[d]));
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var l, a;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return d2;
      const c = { visibility: "" },
        d = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = Yi(o == null ? void 0 : o.pointerEvents) || ""),
          (c.transform = d ? d(this.latestValues, "") : "none"),
          c
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = Yi(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !qt(this.latestValues) &&
            ((x.transform = d ? d({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const h = f.animationValues || f.latestValues;
      (this.applyTransformsToTarget(),
        (c.transform = c2(
          this.projectionDeltaWithTransform,
          this.treeScale,
          h,
        )),
        d && (c.transform = d(h, c.transform)));
      const { x: y, y: v } = this.projectionDelta;
      ((c.transformOrigin = `${y.origin * 100}% ${v.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (a =
                    (l = h.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : h.opacityExit)
          : (c.opacity =
              f === this
                ? h.opacity !== void 0
                  ? h.opacity
                  : ""
                : h.opacityExit !== void 0
                  ? h.opacityExit
                  : 0));
      for (const x in Cs) {
        if (h[x] === void 0) continue;
        const { correct: k, applyTo: m } = Cs[x],
          p = c.transform === "none" ? h[x] : k(h[x], f);
        if (m) {
          const g = m.length;
          for (let w = 0; w < g; w++) c[m[w]] = p;
        } else c[x] = p;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents =
            f === this
              ? Yi(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((o) => {
        var l;
        return (l = o.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach($d),
        this.root.sharedNodes.clear());
    }
  };
}
function h2(e) {
  e.updateLayout();
}
function p2(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? Le((f) => {
          const h = o ? n.measuredBox[f] : n.layoutBox[f],
            y = Re(h);
          ((h.min = r[f].min), (h.max = h.min + y));
        })
      : Wm(s, n.layoutBox, r) &&
        Le((f) => {
          const h = o ? n.measuredBox[f] : n.layoutBox[f],
            y = Re(r[f]);
          ((h.max = h.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + y)));
        });
    const l = Nn();
    Mr(l, r, n.layoutBox);
    const a = Nn();
    o ? Mr(a, e.applyTransform(i, !0), n.measuredBox) : Mr(a, r, n.layoutBox);
    const c = !_m(l);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: y } = f;
        if (h && y) {
          const v = Z();
          Nr(v, n.layoutBox, h.layoutBox);
          const x = Z();
          (Nr(x, r, y.layoutBox),
            Im(v, x) || (d = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = f)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function m2(e) {
  (Sr && Zt.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
}
function g2(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function y2(e) {
  e.clearSnapshot();
}
function $d(e) {
  e.clearMeasurements();
}
function v2(e) {
  e.isLayoutDirty = !1;
}
function x2(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function Kd(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function w2(e) {
  e.resolveTargetDelta();
}
function S2(e) {
  e.calcProjection();
}
function k2(e) {
  e.resetSkewAndRotation();
}
function j2(e) {
  e.removeLeadSnapshot();
}
function Gd(e, t, n) {
  ((e.translate = K(t.translate, 0, n)),
    (e.scale = K(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Qd(e, t, n, r) {
  ((e.min = K(t.min, n.min, r)), (e.max = K(t.max, n.max, r)));
}
function C2(e, t, n, r) {
  (Qd(e.x, t.x, n.x, r), Qd(e.y, t.y, n.y, r));
}
function E2(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const F2 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Yd = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Xd = Yd("applewebkit/") && !Yd("chrome/") ? Math.round : Ae;
function qd(e) {
  ((e.min = Xd(e.min)), (e.max = Xd(e.max)));
}
function T2(e) {
  (qd(e.x), qd(e.y));
}
function Wm(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Ax(Ud(t), Ud(n), 0.2))
  );
}
function P2(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const b2 = Um({
    attachResizeListener: (e, t) => ni(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  _o = { current: void 0 },
  Hm = Um({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!_o.current) {
        const e = new b2({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (_o.current = e));
      }
      return _o.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  A2 = {
    pan: { Feature: Kx },
    drag: { Feature: $x, ProjectionNode: Hm, MeasureLayout: Lm },
  };
function Zd(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && W.postRender(() => s(t, di(t)));
}
class D2 extends Ot {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = Av(
        t,
        (n) => (Zd(this.node, n, "Start"), (r) => Zd(this.node, r, "End")),
      ));
  }
  unmount() {}
}
class R2 extends Ot {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = ci(
      ni(this.node.current, "focus", () => this.onFocus()),
      ni(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Jd(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && W.postRender(() => s(t, di(t)));
}
class M2 extends Ot {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = Nv(
        t,
        (n) => (
          Jd(this.node, n, "Start"),
          (r, { success: i }) => Jd(this.node, r, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const Xl = new WeakMap(),
  Io = new WeakMap(),
  N2 = (e) => {
    const t = Xl.get(e.target);
    t && t(e);
  },
  B2 = (e) => {
    e.forEach(N2);
  };
function L2({ root: e, ...t }) {
  const n = e || document;
  Io.has(n) || Io.set(n, {});
  const r = Io.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(B2, { root: e, ...t })),
    r[i]
  );
}
function V2(e, t, n) {
  const r = L2(t);
  return (
    Xl.set(e, n),
    r.observe(e),
    () => {
      (Xl.delete(e), r.unobserve(e));
    }
  );
}
const z2 = { some: 0, all: 1 };
class _2 extends Ot {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : z2[i],
      },
      l = (a) => {
        const { isIntersecting: c } = a;
        if (
          this.isInView === c ||
          ((this.isInView = c), s && !c && this.hasEnteredView)
        )
          return;
        (c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c));
        const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(),
          h = c ? d : f;
        h && h(a);
      };
    return V2(this.node.current, o, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(I2(t, n)) && this.startObserver();
  }
  unmount() {}
}
function I2({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const O2 = {
    inView: { Feature: _2 },
    tap: { Feature: M2 },
    focus: { Feature: R2 },
    hover: { Feature: D2 },
  },
  U2 = { layout: { ProjectionNode: Hm, MeasureLayout: Lm } },
  ql = { current: null },
  $m = { current: !1 };
function W2() {
  if ((($m.current = !0), !!Ya))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (ql.current = e.matches);
      (e.addListener(t), t());
    } else ql.current = !1;
}
const H2 = [...gm, pe, Vt],
  $2 = (e) => H2.find(mm(e)),
  ef = new WeakMap();
function K2(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (ge(i)) e.addValue(r, i);
    else if (ge(s)) e.addValue(r, ei(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, ei(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const tf = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class G2 {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    l = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = ku),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const y = rt.now();
        this.renderScheduledAt < y &&
          ((this.renderScheduledAt = y), W.render(this.render, !1, !0));
      }));
    const { latestValues: a, renderState: c, onUpdate: d } = o;
    ((this.onUpdate = d),
      (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = l),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = Xs(n)),
      (this.isVariantNode = Cp(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: f, ...h } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const y in h) {
      const v = h[y];
      a[y] !== void 0 && ge(v) && v.set(a[y], !1);
    }
  }
  mount(t) {
    ((this.current = t),
      ef.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      $m.current || W2(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : ql.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (ef.delete(this.current),
      this.projection && this.projection.unmount(),
      Lt(this.notifyUpdate),
      Lt(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = pn.has(t),
      i = n.on("change", (l) => {
        ((this.latestValues[t] = l),
          this.props.onUpdate && W.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0));
      }),
      s = n.on("renderRequest", this.scheduleRender);
    let o;
    (window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (i(), s(), o && o(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in qn) {
      const n = qn[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Z();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < tf.length; r++) {
      const i = tf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    ((this.prevMotionValues = K2(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this));
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = ei(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
            r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (hm(i) || im(i))
          ? (i = parseFloat(i))
          : !$2(i) && Vt.test(n) && (i = cm(t, n)),
        this.setBaseTarget(t, ge(i) ? i.get() : i)),
      ge(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = nu(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !ge(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new gu()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Km extends G2 {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = ym));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ge(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function Q2(e) {
  return window.getComputedStyle(e);
}
class Y2 extends Km {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Mp));
  }
  readValueFromInstance(t, n) {
    if (pn.has(n)) {
      const r = Su(n);
      return (r && r.default) || 0;
    } else {
      const r = Q2(t),
        i = (Ap(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Nm(t, n);
  }
  build(t, n, r) {
    su(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return uu(t, n, r);
  }
}
class X2 extends Km {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Z));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (pn.has(n)) {
      const r = Su(n);
      return (r && r.default) || 0;
    }
    return ((n = Np.has(n) ? n : Ja(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Vp(t, n, r);
  }
  build(t, n, r) {
    ou(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Bp(t, n, r, i);
  }
  mount(t) {
    ((this.isSVGTag = au(t.tagName)), super.mount(t));
  }
}
const q2 = (e, t) =>
    tu(e) ? new X2(t) : new Y2(t, { allowProjection: e !== T.Fragment }),
  Z2 = jv({ ...Sx, ...O2, ...A2, ...U2 }, q2),
  A = zy(Z2);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J2 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Gm = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ew = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tw = T.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = "",
      children: s,
      iconNode: o,
      ...l
    },
    a,
  ) =>
    T.createElement(
      "svg",
      {
        ref: a,
        ...ew,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Gm("lucide", i),
        ...l,
      },
      [
        ...o.map(([c, d]) => T.createElement(c, d)),
        ...(Array.isArray(s) ? s : [s]),
      ],
    ),
);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V = (e, t) => {
  const n = T.forwardRef(({ className: r, ...i }, s) =>
    T.createElement(tw, {
      ref: s,
      iconNode: t,
      className: Gm(`lucide-${J2(e)}`, r),
      ...i,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nw = V("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qm = V("BookOpen", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ym = V("Briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
  ],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rw = V("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iw = V("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fu = V("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sw = V("CircleHelp", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ow = V("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Js = V("CodeXml", [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lw = V("Cpu", [
  [
    "rect",
    { width: "16", height: "16", x: "4", y: "4", rx: "2", key: "14l7u7" },
  ],
  ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" }],
  ["path", { d: "M15 2v2", key: "13l42r" }],
  ["path", { d: "M15 20v2", key: "15mkzm" }],
  ["path", { d: "M2 15h2", key: "1gxd5l" }],
  ["path", { d: "M2 9h2", key: "1bbxkp" }],
  ["path", { d: "M20 15h2", key: "19e6y8" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M9 2v2", key: "165o2o" }],
  ["path", { d: "M9 20v2", key: "i2bqo8" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aw = V("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tu = V("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fi = V("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uw = V("GraduationCap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0",
    },
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pu = V("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cw = V("Layers", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw",
    },
  ],
  [
    "path",
    { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" },
  ],
  [
    "path",
    { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" },
  ],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xm = V("Lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb",
    },
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bu = V("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dw = V("Lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const As = V("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fw = V("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hw = V("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qm = V("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pw = V("MonitorPlay", [
  [
    "path",
    {
      d: "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",
      key: "1pctta",
    },
  ],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  [
    "rect",
    { x: "2", y: "3", width: "20", height: "14", rx: "2", key: "x3v2xh" },
  ],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mw = V("PenTool", [
  [
    "path",
    {
      d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
      key: "nt11vn",
    },
  ],
  [
    "path",
    {
      d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
      key: "15qc1e",
    },
  ],
  ["path", { d: "m2.3 2.3 7.286 7.286", key: "1wuzzi" }],
  ["circle", { cx: "11", cy: "11", r: "2", key: "xmgehs" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gw = V("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Au = V("Rocket", [
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      key: "m3kijz",
    },
  ],
  [
    "path",
    {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      key: "1fmvmk",
    },
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oo = V("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yw = V("Server", [
  [
    "rect",
    {
      width: "20",
      height: "8",
      x: "2",
      y: "2",
      rx: "2",
      ry: "2",
      key: "ngkwjq",
    },
  ],
  [
    "rect",
    {
      width: "20",
      height: "8",
      x: "2",
      y: "14",
      rx: "2",
      ry: "2",
      key: "iecqi9",
    },
  ],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vw = V("Star", [
  [
    "polygon",
    {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6",
    },
  ],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xw = V("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ww = V("Terminal", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sw = V("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kw = V("Trophy", [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  [
    "path",
    {
      d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
      key: "1nw9bq",
    },
  ],
  [
    "path",
    {
      d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
      key: "1np0yb",
    },
  ],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jw = V("Wrench", [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      key: "cbrjhi",
    },
  ],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cw = V("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ew = V("Zap", [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ]),
  nf = ["Home", "About", "Projects", "Skills", "Contact"];
function Fw() {
  const [e, t] = T.useState(!1),
    [n, r] = T.useState(!1),
    [i, s] = T.useState("Home");
  T.useEffect(() => {
    const l = () => t(window.scrollY > 20);
    return (
      window.addEventListener("scroll", l),
      () => window.removeEventListener("scroll", l)
    );
  }, []);
  const o = (l) => {
    (s(l), r(!1));
    const a = document.getElementById(l.toLowerCase());
    a && a.scrollIntoView({ behavior: "smooth" });
  };
  return u.jsxs("div", {
    className: "fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4",
    children: [
      u.jsxs(A.nav, {
        initial: { y: -80, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, ease: "easeOut" },
        className: `w-full max-w-6xl rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 ${e ? "bg-white/90 backdrop-blur-xl shadow-glass border border-white/60" : "bg-white/70 backdrop-blur-md shadow-glass border border-white/40"}`,
        children: [
          u.jsxs("div", {
            className: "flex items-center gap-2 cursor-pointer",
            onClick: () => o("Home"),
            children: [
              u.jsx("div", {
                className:
                  "w-9 h-9 bg-primary rounded-lg flex items-center justify-center",
                children: u.jsx("span", {
                  className: "text-white font-bold text-sm",
                  children: "SK",
                }),
              }),
              u.jsx("span", {
                className: "font-bold text-primary text-lg hidden sm:block",
                children: "•",
              }),
            ],
          }),
          u.jsx("ul", {
            className: "hidden md:flex items-center gap-1",
            children: nf.map((l) =>
              u.jsx(
                "li",
                {
                  children: u.jsx("button", {
                    onClick: () => o(l),
                    className: `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${i === l ? "text-primary font-semibold" : "text-secondary-text hover:text-dark-text hover:bg-blue-50"}`,
                    children: l,
                  }),
                },
                l,
              ),
            ),
          }),
          u.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              u.jsx("button", {
                onClick: () => o("Contact"),
                className:
                  "hidden sm:inline-flex btn-primary text-sm py-2 px-5",
                children: "Hire Me",
              }),
              u.jsx("button", {
                onClick: () => r(!n),
                className:
                  "md:hidden p-2 rounded-lg text-secondary-text hover:bg-blue-50",
                children: n ? u.jsx(Cw, { size: 20 }) : u.jsx(hw, { size: 20 }),
              }),
            ],
          }),
        ],
      }),
      u.jsx(Ay, {
        children:
          n &&
          u.jsxs(A.div, {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
            transition: { duration: 0.2 },
            className:
              "absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-glass-md border border-white/60 p-4 flex flex-col gap-1 md:hidden",
            children: [
              nf.map((l) =>
                u.jsx(
                  "button",
                  {
                    onClick: () => o(l),
                    className:
                      "text-left px-4 py-3 rounded-xl text-sm font-medium text-secondary-text hover:text-primary hover:bg-blue-50 transition-all",
                    children: l,
                  },
                  l,
                ),
              ),
              u.jsx("button", {
                onClick: () => o("Contact"),
                className: "btn-primary justify-center mt-2 text-sm py-3",
                children: "Hire Me",
              }),
            ],
          }),
      }),
    ],
  });
}
const Tw = [
    { icon: fi, href: "https://github.com/Saniyakhan10", label: "GitHub" },
    {
      icon: bu,
      href: "https://www.linkedin.com/in/saniya-khan-996759367/",
      label: "LinkedIn",
    },
    {
      icon: Pu,
      href: "https://instagram.com/_saniya_khan801",
      label: "Instagram",
    },
    { icon: As, href: "mailto:khansaniya54700@gmail.com", label: "Email" },
  ],
  gn = (e = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: "easeOut", delay: e },
  });
function Pw() {
  const [e, t] = T.useState(!1);
  return e
    ? u.jsx("div", {
        className:
          "w-full h-full bg-gradient-to-br from-primary via-blue-500 to-indigo-600 flex items-center justify-center",
        children: u.jsx("span", {
          className: "text-white font-extrabold select-none",
          style: { fontSize: "5rem" },
          children: "SK",
        }),
      })
    : u.jsx("img", {
        src: "/images/sanu.jpeg",
        alt: "Saniya Khan",
        onError: () => t(!0),
        className: "w-full h-full object-cover object-top",
      });
}
function bw() {
  return u.jsxs("section", {
    id: "home",
    className: "relative min-h-screen flex items-center overflow-hidden",
    style: { background: "#EFF6FF" },
    children: [
      u.jsx("div", {
        className: "absolute top-0 right-0 rounded-full pointer-events-none",
        style: {
          width: 380,
          height: 380,
          background:
            "radial-gradient(circle, #93C5FD 0%, #BFDBFE 50%, transparent 75%)",
          filter: "blur(2px)",
          opacity: 0.75,
          transform: "translate(25%, -25%)",
        },
      }),
      u.jsx("div", {
        className: "absolute bottom-0 left-0 rounded-full pointer-events-none",
        style: {
          width: 320,
          height: 320,
          background:
            "radial-gradient(circle, #60A5FA 0%, #93C5FD 45%, transparent 72%)",
          filter: "blur(4px)",
          opacity: 0.55,
          transform: "translate(-35%, 35%)",
        },
      }),
      u.jsx("div", {
        className: "absolute pointer-events-none",
        style: {
          width: 130,
          height: 130,
          bottom: 32,
          left: "48%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #93C5FD 0%, #BFDBFE 55%, transparent 78%)",
          opacity: 0.6,
        },
      }),
      u.jsx("div", {
        className:
          "relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16",
        children: u.jsxs("div", {
          className: "relative rounded-3xl overflow-hidden",
          style: {
            background: "rgba(255,255,255,0.82)",
            border: "1px solid rgba(255,255,255,0.85)",
            boxShadow: "0 8px 40px rgba(59,130,246,0.10)",
            backdropFilter: "blur(14px)",
          },
          children: [
            u.jsx("div", {
              className: "absolute left-6 top-10 pointer-events-none",
              style: { opacity: 0.35 },
              children: [...Array(6)].map((e, t) =>
                u.jsx(
                  "div",
                  {
                    className: "flex gap-3 mb-3",
                    children: [...Array(5)].map((n, r) =>
                      u.jsx(
                        "div",
                        {
                          className: "rounded-full bg-blue-400",
                          style: { width: 4, height: 4 },
                        },
                        r,
                      ),
                    ),
                  },
                  t,
                ),
              ),
            }),
            u.jsx("div", {
              className: "absolute right-6 bottom-8 pointer-events-none",
              style: { opacity: 0.28 },
              children: [...Array(5)].map((e, t) =>
                u.jsx(
                  "div",
                  {
                    className: "flex gap-3 mb-3",
                    children: [...Array(5)].map((n, r) =>
                      u.jsx(
                        "div",
                        {
                          className: "rounded-full bg-blue-400",
                          style: { width: 4, height: 4 },
                        },
                        r,
                      ),
                    ),
                  },
                  t,
                ),
              ),
            }),
            u.jsx("div", {
              className: "absolute pointer-events-none",
              style: {
                width: 90,
                height: 90,
                top: 20,
                right: 80,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, #60A5FA 0%, #BFDBFE 60%, transparent 80%)",
                opacity: 0.55,
              },
            }),
            u.jsx("div", {
              className: "absolute w-2 h-2 rounded-full bg-blue-500 opacity-70",
              style: { top: "42%", left: "46%" },
            }),
            u.jsx("div", {
              className: "absolute w-2 h-2 rounded-full bg-blue-400 opacity-60",
              style: { bottom: "22%", right: "12%" },
            }),
            u.jsxs("div", {
              className:
                "grid lg:grid-cols-2 gap-8 items-center px-10 py-12 md:px-16 md:py-16",
              children: [
                u.jsxs("div", {
                  className: "order-2 lg:order-1",
                  children: [
                    u.jsx(A.p, {
                      ...gn(0),
                      className: "text-slate-500 text-base font-medium mb-1",
                      children: "Hello, I'm",
                    }),
                    u.jsx(A.h1, {
                      ...gn(0.1),
                      className:
                        "font-extrabold text-dark-text leading-tight mb-3",
                      style: { fontSize: "clamp(2.4rem, 5vw, 3.5rem)" },
                      children: "Saniya Khan",
                    }),
                    u.jsxs(A.div, {
                      ...gn(0.2),
                      className: "flex flex-wrap items-center gap-2 mb-5",
                      children: [
                        u.jsx("span", {
                          className: "text-lg font-semibold text-slate-500",
                          children: "Aspiring",
                        }),
                        u.jsx("span", {
                          className: "text-lg font-bold text-primary",
                          children: "Full Stack Developer",
                        }),
                      ],
                    }),
                    u.jsx(A.p, {
                      ...gn(0.3),
                      className:
                        "text-slate-500 text-sm md:text-base leading-relaxed mb-8 max-w-sm",
                      children:
                        "I build clean, responsive and user-friendly websites that bring ideas to life.",
                    }),
                    u.jsxs(A.div, {
                      ...gn(0.4),
                      className: "flex flex-wrap gap-4 mb-10",
                      children: [
                        u.jsxs("button", {
                          id: "hero-view-work",
                          onClick: () => {
                            var e;
                            return (e = document.getElementById("projects")) ==
                              null
                              ? void 0
                              : e.scrollIntoView({ behavior: "smooth" });
                          },
                          className:
                            "inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-blue-glow hover:-translate-y-0.5 text-sm",
                          children: ["View My Work ", u.jsx(nw, { size: 15 })],
                        }),
                        u.jsxs("a", {
                          id: "hero-download-cv",
                          href: "https://drive.google.com/file/d/1e6AjhXMkA6Eb-5USriBEwss8zgY45TuX/view?usp=drivesdk",
                          target: "_blank",
                          rel: "noreferrer",
                          className:
                            "inline-flex items-center gap-2 border-2 border-slate-200 hover:border-primary text-slate-600 hover:text-primary font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 text-sm",
                          children: ["Download CV ", u.jsx(aw, { size: 15 })],
                        }),
                      ],
                    }),
                    u.jsxs(A.div, {
                      ...gn(0.5),
                      children: [
                        u.jsx("p", {
                          className:
                            "text-xs text-slate-400 uppercase tracking-widest font-medium mb-3",
                          children: "Find me on",
                        }),
                        u.jsx("div", {
                          className: "flex items-center gap-2.5",
                          children: Tw.map(({ icon: e, href: t, label: n }) =>
                            u.jsx(
                              "a",
                              {
                                href: t,
                                target: "_blank",
                                rel: "noreferrer",
                                "aria-label": n,
                                className:
                                  "w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-primary hover:text-primary text-slate-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-sm",
                                children: u.jsx(e, { size: 16 }),
                              },
                              n,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className:
                    "order-1 lg:order-2 flex items-center justify-center relative py-6",
                  children: [
                    u.jsx("div", {
                      className:
                        "absolute rounded-full w-[240px] h-[240px] md:w-[300px] md:h-[300px]",
                      style: {
                        background:
                          "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
                        border: "1px solid #BFDBFE",
                      },
                    }),
                    u.jsx(A.div, {
                      initial: { opacity: 0, scale: 0.88 },
                      animate: { opacity: 1, scale: 1 },
                      transition: {
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.25,
                      },
                      className:
                        "relative z-10 w-[200px] h-[200px] md:w-[240px] md:h-[240px]",
                      children: u.jsx("div", {
                        className: "w-full h-full rounded-full overflow-hidden",
                        style: {
                          border: "4px solid white",
                          boxShadow:
                            "0 0 0 6px #DBEAFE, 0 12px 40px rgba(59,130,246,0.20)",
                        },
                        children: u.jsx(Pw, {}),
                      }),
                    }),
                    u.jsxs(A.div, {
                      initial: { opacity: 0, y: 12 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 1, duration: 0.5 },
                      className:
                        "absolute bottom-2 right-4 md:right-0 flex items-center gap-2 bg-white border border-slate-100 rounded-full px-4 py-2 shadow-md z-20",
                      children: [
                        u.jsx("span", {
                          className:
                            "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse",
                        }),
                        u.jsx("span", {
                          className: "text-xs font-semibold text-slate-700",
                          children: "Available for work",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const Kt = (e = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0 },
    transition: { duration: 0.6, ease: "easeOut", delay: e },
  }),
  rf = [
    {
      num: "01",
      title: "The Beginning",
      icon: Au,
      desc: "Everything started with curiosity and tiny experiments. YouTube tutorials, late nights, and a lot of passion turned into my first lines of code.",
    },
    {
      num: "02",
      title: "Where I Am Now",
      icon: Ym,
      desc: "I'm a BCA student and aspiring Full Stack Developer. I build scalable web applications, explore new technologies, and constantly grow.",
    },
    {
      num: "03",
      title: "Where I'm Going",
      icon: xw,
      desc: "My vision is to build impactful tech products and create meaningful digital experiences that solve real-world problems.",
    },
  ],
  Aw = [
    { label: "Developer", icon: Js, color: "#3B82F6" },
    { label: "Learner", icon: uw, color: "#8B5CF6" },
    { label: "Creative Thinker", icon: Xm, color: "#F59E0B" },
  ];
function Dw() {
  const [e, t] = T.useState(!1);
  return e
    ? u.jsx("div", {
        className:
          "w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 flex items-center justify-center",
        children: u.jsx("span", {
          className: "text-white font-extrabold select-none",
          style: { fontSize: "3rem" },
          children: "SK",
        }),
      })
    : u.jsx("img", {
        src: "/images/sanu.jpeg",
        alt: "Saniya Khan",
        onError: () => t(!0),
        className: "w-full h-full object-cover object-top",
      });
}
function Uo({ icon: e, stat: t, label: n }) {
  return u.jsxs("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      background: "rgba(255,255,255,0.97)",
      border: "1px solid #DBEAFE",
      boxShadow: "0 4px 16px rgba(59,130,246,0.12)",
      borderRadius: 12,
      padding: "7px 11px",
      backdropFilter: "blur(12px)",
      minWidth: 112,
    },
    children: [
      u.jsx("div", {
        style: {
          width: 28,
          height: 28,
          background: "#EFF6FF",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        },
        children: u.jsx(e, { size: 14, color: "#3B82F6" }),
      }),
      u.jsxs("div", {
        children: [
          u.jsx("p", {
            style: {
              fontWeight: 800,
              fontSize: 14,
              color: "#0F172A",
              lineHeight: 1,
            },
            children: t,
          }),
          u.jsx("p", {
            style: {
              fontSize: 10,
              color: "#64748B",
              marginTop: 2,
              lineHeight: 1.2,
            },
            children: n,
          }),
        ],
      }),
    ],
  });
}
function Rw() {
  return u.jsxs("section", {
    id: "about",
    className: "relative overflow-hidden",
    style: { background: "#EFF6FF", paddingTop: 100, paddingBottom: 100 },
    children: [
      u.jsx("div", {
        className: "absolute top-0 right-0 rounded-full pointer-events-none",
        style: {
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, #93C5FD 0%, #BFDBFE 50%, transparent 75%)",
          filter: "blur(2px)",
          opacity: 0.7,
          transform: "translate(28%, -28%)",
        },
      }),
      u.jsx("div", {
        className: "absolute bottom-0 left-0 rounded-full pointer-events-none",
        style: {
          width: 340,
          height: 340,
          background:
            "radial-gradient(circle, #60A5FA 0%, #93C5FD 45%, transparent 72%)",
          filter: "blur(5px)",
          opacity: 0.5,
          transform: "translate(-38%, 38%)",
        },
      }),
      u.jsx("div", {
        className:
          "relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        children: u.jsxs("div", {
          style: {
            background: "rgba(255,255,255,0.88)",
            border: "1px solid rgba(255,255,255,0.90)",
            boxShadow: "0 8px 48px rgba(59,130,246,0.10)",
            backdropFilter: "blur(16px)",
            borderRadius: 28,
            position: "relative",
            overflow: "visible",
          },
          children: [
            u.jsx("div", {
              style: {
                position: "absolute",
                top: 28,
                right: 28,
                opacity: 0.22,
                pointerEvents: "none",
              },
              children: [...Array(5)].map((e, t) =>
                u.jsx(
                  "div",
                  {
                    style: { display: "flex", gap: 10, marginBottom: 10 },
                    children: [...Array(7)].map((n, r) =>
                      u.jsx(
                        "div",
                        {
                          style: {
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            background: "#3B82F6",
                          },
                        },
                        r,
                      ),
                    ),
                  },
                  t,
                ),
              ),
            }),
            u.jsx("div", {
              style: {
                position: "absolute",
                bottom: 28,
                left: 28,
                opacity: 0.15,
                pointerEvents: "none",
              },
              children: [...Array(4)].map((e, t) =>
                u.jsx(
                  "div",
                  {
                    style: { display: "flex", gap: 10, marginBottom: 10 },
                    children: [...Array(6)].map((n, r) =>
                      u.jsx(
                        "div",
                        {
                          style: {
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            background: "#3B82F6",
                          },
                        },
                        r,
                      ),
                    ),
                  },
                  t,
                ),
              ),
            }),
            u.jsx("div", {
              style: {
                position: "absolute",
                top: "42%",
                right: "5%",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#60A5FA",
                opacity: 0.55,
              },
            }),
            u.jsx("div", {
              style: {
                position: "absolute",
                bottom: "22%",
                right: "14%",
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#93C5FD",
                opacity: 0.45,
              },
            }),
            u.jsxs("div", {
              className:
                "about-grid grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 md:p-10 lg:p-14",
              children: [
                u.jsxs("div", {
                  children: [
                    u.jsx(A.span, {
                      ...Kt(0),
                      className: "section-badge",
                      children: "About Me",
                    }),
                    u.jsx(A.h2, {
                      ...Kt(0.08),
                      style: {
                        fontSize: 32,
                        fontWeight: 800,
                        color: "#0F172A",
                        lineHeight: 1.15,
                        marginBottom: 0,
                      },
                      children: "My Story. My Drive.",
                    }),
                    u.jsx(A.h2, {
                      ...Kt(0.13),
                      className: "gradient-text",
                      style: {
                        fontSize: 32,
                        fontWeight: 800,
                        lineHeight: 1.2,
                        marginBottom: 10,
                      },
                      children: "My Vision.",
                    }),
                    u.jsx(A.div, {
                      ...Kt(0.17),
                      style: {
                        width: 48,
                        height: 3,
                        background: "#3B82F6",
                        borderRadius: 99,
                        marginBottom: 12,
                      },
                    }),
                    u.jsx(A.p, {
                      ...Kt(0.22),
                      style: {
                        color: "#64748B",
                        fontSize: 13,
                        lineHeight: 1.65,
                        marginBottom: 20,
                        maxWidth: 420,
                      },
                      children:
                        "I don't just write code — I build digital experiences, empower people, and create impact through technology and education.",
                    }),
                    u.jsx("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 0,
                      },
                      children: rf.map(
                        ({ num: e, title: t, icon: n, desc: r }, i) =>
                          u.jsxs(
                            A.div,
                            {
                              ...Kt(0.28 + i * 0.1),
                              style: {
                                display: "flex",
                                gap: 14,
                                paddingBottom: 14,
                                position: "relative",
                              },
                              children: [
                                u.jsxs("div", {
                                  style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    flexShrink: 0,
                                  },
                                  children: [
                                    u.jsx("div", {
                                      style: {
                                        width: 34,
                                        height: 34,
                                        borderRadius: 10,
                                        background: "#EFF6FF",
                                        border: "1.5px solid #BFDBFE",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow:
                                          "0 2px 8px rgba(59,130,246,0.08)",
                                        flexShrink: 0,
                                      },
                                      children: u.jsx(n, {
                                        size: 15,
                                        color: "#3B82F6",
                                      }),
                                    }),
                                    i < rf.length - 1 &&
                                      u.jsx("div", {
                                        style: {
                                          width: 1.5,
                                          flex: 1,
                                          background:
                                            "linear-gradient(to bottom, #93C5FD, transparent)",
                                          marginTop: 4,
                                          minHeight: 16,
                                        },
                                      }),
                                  ],
                                }),
                                u.jsxs("div", {
                                  style: { paddingTop: 2 },
                                  children: [
                                    u.jsx("p", {
                                      style: {
                                        fontSize: 10,
                                        fontWeight: 700,
                                        color: "#3B82F6",
                                        marginBottom: 2,
                                        letterSpacing: "0.04em",
                                      },
                                      children: e,
                                    }),
                                    u.jsx("h4", {
                                      style: {
                                        fontWeight: 700,
                                        fontSize: 13,
                                        color: "#0F172A",
                                        marginBottom: 3,
                                      },
                                      children: t,
                                    }),
                                    u.jsx("p", {
                                      style: {
                                        color: "#64748B",
                                        fontSize: 12,
                                        lineHeight: 1.6,
                                      },
                                      children: r,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e,
                          ),
                      ),
                    }),
                  ],
                }),
                u.jsxs("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                  },
                  children: [
                    u.jsx(A.div, {
                      initial: { opacity: 0, y: -16 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      transition: { delay: 0.45, duration: 0.5 },
                      style: { alignSelf: "flex-end", marginRight: 8 },
                      children: u.jsx(Uo, {
                        icon: Ym,
                        stat: "2+",
                        label: "Years Experience",
                      }),
                    }),
                    u.jsxs("div", {
                      style: {
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                      },
                      children: [
                        u.jsx("div", {
                          style: {
                            position: "absolute",
                            width: 220,
                            height: 220,
                            borderRadius: "50%",
                            background:
                              "linear-gradient(145deg, #DBEAFE 0%, #EFF6FF 55%, #BFDBFE 100%)",
                            border: "1.5px solid #BFDBFE",
                            boxShadow: "0 8px 28px rgba(59,130,246,0.12)",
                          },
                        }),
                        u.jsxs("svg", {
                          style: {
                            position: "absolute",
                            pointerEvents: "none",
                          },
                          width: "250",
                          height: "250",
                          viewBox: "0 0 250 250",
                          fill: "none",
                          children: [
                            u.jsx("circle", {
                              cx: "125",
                              cy: "125",
                              r: "119",
                              stroke: "#93C5FD",
                              strokeWidth: "1.2",
                              strokeDasharray: "6 9",
                              opacity: "0.50",
                            }),
                            u.jsx("circle", {
                              cx: "125",
                              cy: "125",
                              r: "108",
                              stroke: "#BFDBFE",
                              strokeWidth: "1",
                              strokeDasharray: "4 12",
                              opacity: "0.35",
                            }),
                          ],
                        }),
                        u.jsx("div", {
                          style: {
                            position: "absolute",
                            top: 12,
                            left: "16%",
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            background: "#60A5FA",
                            opacity: 0.6,
                          },
                        }),
                        u.jsx("div", {
                          style: {
                            position: "absolute",
                            top: 22,
                            right: "14%",
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: "#93C5FD",
                            opacity: 0.5,
                          },
                        }),
                        u.jsx("div", {
                          style: {
                            position: "absolute",
                            bottom: 18,
                            left: "12%",
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: "#60A5FA",
                            opacity: 0.4,
                          },
                        }),
                        u.jsx("div", {
                          style: {
                            position: "absolute",
                            bottom: 30,
                            right: "10%",
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#3B82F6",
                            opacity: 0.45,
                          },
                        }),
                        u.jsx(A.div, {
                          initial: { opacity: 0, x: -24 },
                          whileInView: { opacity: 1, x: 0 },
                          viewport: { once: !0 },
                          transition: { delay: 0.6, duration: 0.5 },
                          style: {
                            position: "absolute",
                            left: -10,
                            zIndex: 20,
                          },
                          children: u.jsx(Uo, {
                            icon: Js,
                            stat: "10+",
                            label: "Projects Delivered",
                          }),
                        }),
                        u.jsx(A.div, {
                          initial: { opacity: 0, scale: 0.88 },
                          whileInView: { opacity: 1, scale: 1 },
                          viewport: { once: !0 },
                          transition: {
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.25,
                          },
                          style: {
                            position: "relative",
                            zIndex: 10,
                            width: 175,
                            height: 175,
                          },
                          children: u.jsx("div", {
                            style: {
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                              overflow: "hidden",
                              border: "3px solid white",
                              boxShadow:
                                "0 0 0 6px #DBEAFE, 0 10px 32px rgba(59,130,246,0.18)",
                            },
                            children: u.jsx(Dw, {}),
                          }),
                        }),
                      ],
                    }),
                    u.jsx(A.div, {
                      initial: { opacity: 0, y: 16 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      transition: { delay: 0.72, duration: 0.5 },
                      style: { alignSelf: "flex-end", marginRight: 8 },
                      children: u.jsx(Uo, {
                        icon: Au,
                        stat: "Startup",
                        label: "Founder",
                      }),
                    }),
                    u.jsxs(A.div, {
                      ...Kt(0.9),
                      style: { textAlign: "center", marginTop: 4 },
                      children: [
                        u.jsxs("p", {
                          style: {
                            fontSize: 12,
                            color: "#64748B",
                            marginBottom: 7,
                          },
                          children: [
                            "I wear ",
                            u.jsx("span", {
                              style: { color: "#3B82F6", fontWeight: 600 },
                              children: "multiple",
                            }),
                            " hats",
                          ],
                        }),
                        u.jsx("div", {
                          style: {
                            display: "flex",
                            gap: 6,
                            flexWrap: "wrap",
                            justifyContent: "center",
                          },
                          children: Aw.map(({ label: e, icon: t, color: n }) =>
                            u.jsxs(
                              "span",
                              {
                                style: {
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: 5,
                                  padding: "5px 11px",
                                  borderRadius: 99,
                                  fontSize: 11,
                                  fontWeight: 600,
                                  background: n + "14",
                                  color: n,
                                  border: `1px solid ${n}28`,
                                },
                                children: [u.jsx(t, { size: 11 }), e],
                              },
                              e,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      u.jsx("style", {
        children: `
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            padding: 40px 28px !important;
            gap: 40px !important;
          }
        }
      `,
      }),
    ],
  });
}
const yn = (e = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0 },
    transition: { duration: 0.6, ease: "easeOut", delay: e },
  }),
  Mw = [
    { name: "React", icon: "devicon-react-original colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  ],
  Nw = [
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Express.js", icon: "devicon-express-original" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "Firebase", icon: "devicon-firebase-plain colored" },
    { name: "REST API", icon: "devicon-fastapi-plain colored" },
    { name: "JWT", icon: "devicon-nodejs-plain" },
  ],
  Bw = [
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "VS Code", icon: "devicon-vscode-plain colored" },
    { name: "Vercel", icon: "devicon-vercel-original" },
    { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
    { name: "Figma", icon: "devicon-figma-plain colored" },
  ],
  Lw = [
    {
      title: "Frontend",
      icon: Js,
      bg: "#EFF6FF",
      desc: "Building responsive and interactive user interfaces.",
      items: Mw,
    },
    {
      title: "Backend",
      icon: yw,
      bg: "#F0FDF4",
      desc: "Building robust APIs and scalable backend systems.",
      items: Nw,
    },
    {
      title: "Tools & Platforms",
      icon: jw,
      bg: "#EFF6FF",
      desc: "Tools and platforms that help me build faster and better.",
      items: Bw,
    },
  ],
  sf = [
    "Sass",
    "EMailJS",
    "Postman",
    "Netlify",
    "Railway",
    "Cloudinary",
    "ESLint",
    "MUI",
    "Framer Motion",
    "Figma",
    "AWS",
    "Sass",
    "EMailJS",
    "Postman",
    "Netlify",
    "Railway",
    "Cloudinary",
    "ESLint",
    "MUI",
    "Framer Motion",
    "Figma",
    "AWS",
  ];
function Vw({ name: e, icon: t }) {
  return u.jsxs("div", {
    style: { display: "flex", alignItems: "center", gap: 7 },
    children: [
      u.jsx("div", {
        style: {
          width: 28,
          height: 28,
          borderRadius: 8,
          background: "#EFF6FF",
          border: "1.5px solid #BFDBFE",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(59,130,246,0.08)",
          flexShrink: 0,
        },
        children: u.jsx("i", { className: t, style: { fontSize: 14 } }),
      }),
      u.jsx("span", {
        style: { fontSize: 11, fontWeight: 600, color: "#1E293B" },
        children: e,
      }),
    ],
  });
}
function zw() {
  return u.jsxs("section", {
    id: "skills",
    className: "relative overflow-hidden",
    style: { background: "#EFF6FF", paddingTop: 75, paddingBottom: 75 },
    children: [
      u.jsx("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css",
      }),
      u.jsx("div", {
        className: "absolute top-0 right-0 rounded-full pointer-events-none",
        style: {
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, #93C5FD 0%, #BFDBFE 50%, transparent 75%)",
          filter: "blur(2px)",
          opacity: 0.7,
          transform: "translate(28%, -28%)",
        },
      }),
      u.jsx("div", {
        className: "absolute bottom-0 left-0 rounded-full pointer-events-none",
        style: {
          width: 340,
          height: 340,
          background:
            "radial-gradient(circle, #60A5FA 0%, #93C5FD 45%, transparent 72%)",
          filter: "blur(5px)",
          opacity: 0.5,
          transform: "translate(-38%, 38%)",
        },
      }),
      u.jsx("div", {
        className:
          "relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        children: u.jsxs("div", {
          className:
            "relative overflow-visible rounded-[28px] p-6 sm:p-8 md:p-11",
          style: {
            background: "rgba(255,255,255,0.88)",
            border: "1px solid rgba(255,255,255,0.90)",
            boxShadow: "0 8px 48px rgba(59,130,246,0.10)",
            backdropFilter: "blur(16px)",
          },
          children: [
            u.jsx("div", {
              style: {
                position: "absolute",
                top: 28,
                right: 28,
                opacity: 0.22,
                pointerEvents: "none",
              },
              children: [...Array(5)].map((e, t) =>
                u.jsx(
                  "div",
                  {
                    style: { display: "flex", gap: 10, marginBottom: 10 },
                    children: [...Array(7)].map((n, r) =>
                      u.jsx(
                        "div",
                        {
                          style: {
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            background: "#3B82F6",
                          },
                        },
                        r,
                      ),
                    ),
                  },
                  t,
                ),
              ),
            }),
            u.jsx("div", {
              style: {
                position: "absolute",
                bottom: 28,
                left: 28,
                opacity: 0.15,
                pointerEvents: "none",
              },
              children: [...Array(4)].map((e, t) =>
                u.jsx(
                  "div",
                  {
                    style: { display: "flex", gap: 10, marginBottom: 10 },
                    children: [...Array(6)].map((n, r) =>
                      u.jsx(
                        "div",
                        {
                          style: {
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            background: "#3B82F6",
                          },
                        },
                        r,
                      ),
                    ),
                  },
                  t,
                ),
              ),
            }),
            u.jsx("div", {
              style: {
                position: "absolute",
                top: "42%",
                right: "5%",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#60A5FA",
                opacity: 0.55,
              },
            }),
            u.jsx("div", {
              style: {
                position: "absolute",
                bottom: "22%",
                right: "14%",
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#93C5FD",
                opacity: 0.45,
              },
            }),
            u.jsxs("div", {
              style: { textAlign: "center", marginBottom: 24 },
              children: [
                u.jsx(A.span, {
                  ...yn(0),
                  className: "section-badge",
                  children: "My Skills",
                }),
                u.jsxs(A.h2, {
                  ...yn(0.08),
                  style: {
                    fontSize: 28,
                    fontWeight: 800,
                    color: "#0F172A",
                    lineHeight: 1.15,
                    marginBottom: 0,
                  },
                  children: [
                    "Skills &",
                    " ",
                    u.jsx("span", {
                      className: "gradient-text",
                      children: "Technologies",
                    }),
                  ],
                }),
                u.jsx(A.div, {
                  ...yn(0.14),
                  style: {
                    width: 36,
                    height: 2,
                    background: "#3B82F6",
                    borderRadius: 99,
                    margin: "6px auto 8px",
                  },
                }),
                u.jsx(A.p, {
                  ...yn(0.2),
                  style: {
                    color: "#64748B",
                    fontSize: 12,
                    lineHeight: 1.6,
                    maxWidth: 460,
                    margin: "0 auto",
                  },
                  children:
                    "Technologies I use to build scalable, modern and efficient applications.",
                }),
              ],
            }),
            u.jsx("div", {
              className:
                "skills-grid grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",
              children: Lw.map(({ title: e, icon: t, desc: n, items: r }, i) =>
                u.jsxs(
                  A.div,
                  {
                    ...yn(0.1 * i + 0.25),
                    style: {
                      background: "rgba(255,255,255,0.95)",
                      border: "1px solid #DBEAFE",
                      borderRadius: 16,
                      padding: "20px 18px",
                      boxShadow: "0 4px 20px rgba(59,130,246,0.07)",
                    },
                    children: [
                      u.jsxs("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginBottom: 5,
                        },
                        children: [
                          u.jsx("div", {
                            style: {
                              width: 30,
                              height: 30,
                              borderRadius: 8,
                              background: "#EFF6FF",
                              border: "1.5px solid #BFDBFE",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 2px 8px rgba(59,130,246,0.08)",
                            },
                            children: u.jsx(t, { size: 14, color: "#3B82F6" }),
                          }),
                          u.jsx("h3", {
                            style: {
                              fontWeight: 700,
                              fontSize: 13,
                              color: "#0F172A",
                            },
                            children: e,
                          }),
                        ],
                      }),
                      u.jsx("p", {
                        style: {
                          color: "#64748B",
                          fontSize: 10.5,
                          lineHeight: 1.5,
                          marginBottom: 10,
                        },
                        children: n,
                      }),
                      u.jsx("div", {
                        className: "grid grid-cols-2 gap-2 mt-2",
                        children: r.map((s) => u.jsx(Vw, { ...s }, s.name)),
                      }),
                      u.jsx("div", {
                        style: {
                          marginTop: 10,
                          width: 28,
                          height: 2,
                          background: "#3B82F6",
                          borderRadius: 99,
                        },
                      }),
                    ],
                  },
                  e,
                ),
              ),
            }),
            u.jsxs(A.div, {
              ...yn(0.55),
              style: {
                background: "rgba(255,255,255,0.80)",
                backdropFilter: "blur(12px)",
                borderRadius: 18,
                border: "1px solid #DBEAFE",
                boxShadow: "0 4px 16px rgba(59,130,246,0.06)",
                padding: "12px 0 10px",
                overflow: "hidden",
                position: "relative",
              },
              children: [
                u.jsx("p", {
                  style: {
                    textAlign: "center",
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#64748B",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  },
                  children: "Other Technologies",
                }),
                u.jsx("div", {
                  style: { overflow: "hidden" },
                  children: u.jsx("div", {
                    className: "marquee-track",
                    children: [...sf, ...sf].map((e, t) =>
                      u.jsx(
                        "span",
                        {
                          style: {
                            display: "inline-flex",
                            alignItems: "center",
                            margin: "0 8px",
                            padding: "5px 14px",
                            borderRadius: 99,
                            background: "#EFF6FF",
                            color: "#3B82F6",
                            fontSize: 11,
                            fontWeight: 600,
                            border: "1px solid #BFDBFE",
                            whiteSpace: "nowrap",
                          },
                          children: e,
                        },
                        t,
                      ),
                    ),
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      u.jsx("style", {
        children: `
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `,
      }),
    ],
  });
}
const xn = (e = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0 },
    transition: { duration: 0.6, ease: "easeOut", delay: e },
  }),
  _w = [
    {
      num: "01",
      title: "Techno Skill Platform",
      desc: "Coding education platform for beginners — learn, practice projects & build real dev skills.",
      icons: [
        { cls: "devicon-react-original colored", title: "React" },
        { cls: "devicon-javascript-plain colored", title: "JavaScript" },
        { cls: "devicon-tailwindcss-plain colored", title: "Tailwind CSS" },
        { cls: "devicon-firebase-plain colored", title: "Firebase" },
      ],
      gradient: "from-blue-500 to-indigo-600",
      img: "/images/technoskill.png",
      live: "https://saniyakhan10.github.io/Techno-Skill/",
      github: "https://github.com/saniyakhan10",
    },
    {
      num: "02",
      title: "Finance Assessment App",
      desc: "Finance dashboard for managing data with analytics sections & a professional user experience.",
      icons: [
        { cls: "devicon-react-original colored", title: "React" },
        { cls: "devicon-tailwindcss-plain colored", title: "Tailwind CSS" },
        { cls: "devicon-javascript-plain colored", title: "JavaScript" },
        { cls: "devicon-vercel-original", title: "Vercel" },
      ],
      gradient: "from-violet-500 to-purple-600",
      img: "/images/sharemarket.png",
      live: "https://finance-assessment-emol.vercel.app/",
      github: "https://github.com/saniyakhan10",
    },
    {
      num: "03",
      title: "Personal Portfolio",
      desc: "Sleek portfolio showcasing projects & skills with smooth Framer Motion animations.",
      icons: [
        { cls: "devicon-react-original colored", title: "React" },
        { cls: "devicon-tailwindcss-plain colored", title: "Tailwind CSS" },
        { cls: "devicon-javascript-plain colored", title: "JavaScript" },
      ],
      gradient: "from-emerald-500 to-teal-600",
      img: "/images/techno.png",
      live: "https://gorgeous-moonbeam-5b099a.netlify.app",
      github: "https://github.com/saniyakhan10",
    },
    {
      num: "04",
      title: "Grilli Restaurant",
      desc: "Premium restaurant landing page with modern food sections & smooth scroll interactions.",
      icons: [
        { cls: "devicon-html5-plain colored", title: "HTML5" },
        { cls: "devicon-css3-plain colored", title: "CSS3" },
        { cls: "devicon-javascript-plain colored", title: "JavaScript" },
      ],
      gradient: "from-orange-400 to-rose-500",
      img: "/images/grill.png",
      live: "https://saniyakhan10.github.io/grilli/",
      github: "https://github.com/saniyakhan10",
    },
  ],
  Gt = {
    title: "Techno Skill Platform",
    desc: "Online platform to learn coding with structured, project-based experiences for beginners.",
    problem:
      "Beginners lack one place with quality coding resources, structured learning & hands-on projects.",
    solution:
      "Built interactive courses & practice projects with a clean, beginner-friendly UI.",
    techIcons: [
      { cls: "devicon-react-original colored", title: "React" },
      { cls: "devicon-javascript-plain colored", title: "JavaScript" },
      { cls: "devicon-tailwindcss-plain colored", title: "Tailwind CSS" },
      { cls: "devicon-firebase-plain colored", title: "Firebase" },
    ],
    impact: [
      "Beginner-friendly interactive UX",
      "Firebase real-time data integration",
    ],
    live: "https://saniyakhan10.github.io/Techno-Skill/",
  };
function Iw({ project: e, index: t }) {
  return u.jsxs(A.div, {
    ...xn(0.1 * t + 0.15),
    style: {
      background: "rgba(255,255,255,0.97)",
      border: "1px solid #DBEAFE",
      borderRadius: 20,
      overflow: "hidden",
      boxShadow: "0 4px 24px rgba(59,130,246,0.08)",
      display: "flex",
      flexDirection: "column",
      transition: "transform 0.25s ease, box-shadow 0.25s ease",
    },
    whileHover: { y: -6, boxShadow: "0 12px 36px rgba(59,130,246,0.16)" },
    children: [
      u.jsxs("div", {
        className: e.img ? "bg-blue-50" : `bg-gradient-to-br ${e.gradient}`,
        style: {
          position: "relative",
          height: 110,
          overflow: "hidden",
          flexShrink: 0,
        },
        children: [
          e.img
            ? u.jsx("img", {
                src: e.img,
                alt: e.title,
                style: { width: "100%", height: "100%", objectFit: "cover" },
                onError: (n) => {
                  ((n.target.style.display = "none"),
                    (n.target.nextSibling.style.display = "block"));
                },
              })
            : null,
          u.jsxs("div", {
            style: {
              display: e.img ? "none" : "block",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              background:
                "linear-gradient(to bottom right, var(--tw-gradient-stops))",
            },
            className: e.gradient,
            children: [
              u.jsx("div", {
                style: {
                  position: "absolute",
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.12)",
                  top: -20,
                  right: -20,
                },
              }),
              u.jsx("div", {
                style: {
                  position: "absolute",
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.10)",
                  bottom: -14,
                  left: -14,
                },
              }),
              u.jsx("div", {
                style: {
                  position: "absolute",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  bottom: 10,
                  right: 30,
                },
              }),
              u.jsx("svg", {
                style: {
                  position: "absolute",
                  bottom: -20,
                  left: "50%",
                  transform: "translateX(-50%)",
                  pointerEvents: "none",
                },
                width: "130",
                height: "70",
                viewBox: "0 0 130 70",
                fill: "none",
                children: u.jsx("circle", {
                  cx: "65",
                  cy: "65",
                  r: "58",
                  stroke: "rgba(255,255,255,0.25)",
                  strokeWidth: "1",
                  strokeDasharray: "4 7",
                }),
              }),
            ],
          }),
          u.jsx("span", {
            style: {
              position: "absolute",
              top: 8,
              left: 10,
              fontSize: 10,
              fontWeight: 800,
              color: "rgba(255,255,255,0.95)",
              background: "rgba(15,23,42,0.4)",
              backdropFilter: "blur(4px)",
              borderRadius: 99,
              padding: "1px 7px",
              zIndex: 10,
            },
            children: e.num,
          }),
        ],
      }),
      u.jsxs("div", {
        style: {
          padding: "8px 12px 10px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        },
        children: [
          u.jsx("h3", {
            style: {
              fontWeight: 700,
              fontSize: 12,
              color: "#0F172A",
              marginBottom: 3,
            },
            children: e.title,
          }),
          u.jsx("p", {
            style: {
              color: "#64748B",
              fontSize: 10,
              lineHeight: 1.5,
              marginBottom: 6,
              flex: 1,
            },
            children: e.desc,
          }),
          u.jsx("div", {
            style: { display: "flex", gap: 5, marginBottom: 6 },
            children: e.icons.map((n) =>
              u.jsx(
                "div",
                {
                  title: n.title,
                  style: {
                    width: 22,
                    height: 22,
                    borderRadius: 6,
                    background: "#EFF6FF",
                    border: "1px solid #DBEAFE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  },
                  children: u.jsx("i", {
                    className: n.cls,
                    style: { fontSize: 12 },
                  }),
                },
                n.title,
              ),
            ),
          }),
          u.jsxs("div", {
            style: { display: "flex", gap: 6 },
            children: [
              u.jsxs("a", {
                href: e.live,
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                  flex: 1,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 3,
                  background: "#3B82F6",
                  color: "#fff",
                  fontSize: 9,
                  fontWeight: 700,
                  padding: "4px 6px",
                  borderRadius: 7,
                  textDecoration: "none",
                  boxShadow: "0 2px 8px rgba(59,130,246,0.22)",
                },
                children: ["Live Demo ", u.jsx(Tu, { size: 9 })],
              }),
              u.jsxs("a", {
                href: e.github,
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                  flex: 1,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 3,
                  background: "#fff",
                  color: "#1E293B",
                  fontSize: 9,
                  fontWeight: 700,
                  padding: "4px 6px",
                  borderRadius: 7,
                  textDecoration: "none",
                  border: "1.5px solid #DBEAFE",
                },
                children: [u.jsx(fi, { size: 9 }), " GitHub"],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ow() {
  return u.jsxs("section", {
    id: "projects",
    className: "relative overflow-hidden",
    style: { background: "#EFF6FF", paddingTop: 60, paddingBottom: 60 },
    children: [
      u.jsx("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css",
      }),
      u.jsx("div", {
        className: "absolute top-0 right-0 rounded-full pointer-events-none",
        style: {
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, #93C5FD 0%, #BFDBFE 50%, transparent 75%)",
          filter: "blur(2px)",
          opacity: 0.7,
          transform: "translate(28%, -28%)",
        },
      }),
      u.jsx("div", {
        className: "absolute bottom-0 left-0 rounded-full pointer-events-none",
        style: {
          width: 340,
          height: 340,
          background:
            "radial-gradient(circle, #60A5FA 0%, #93C5FD 45%, transparent 72%)",
          filter: "blur(5px)",
          opacity: 0.5,
          transform: "translate(-38%, 38%)",
        },
      }),
      u.jsx("div", {
        className:
          "relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        children: u.jsxs("div", {
          style: {
            background: "rgba(255,255,255,0.88)",
            border: "1px solid rgba(255,255,255,0.90)",
            boxShadow: "0 8px 48px rgba(59,130,246,0.10)",
            backdropFilter: "blur(16px)",
            borderRadius: 28,
            position: "relative",
            overflow: "visible",
            padding: "28px 40px",
          },
          children: [
            u.jsx("div", {
              style: {
                position: "absolute",
                top: 28,
                right: 28,
                opacity: 0.22,
                pointerEvents: "none",
              },
              children: [...Array(5)].map((e, t) =>
                u.jsx(
                  "div",
                  {
                    style: { display: "flex", gap: 10, marginBottom: 10 },
                    children: [...Array(7)].map((n, r) =>
                      u.jsx(
                        "div",
                        {
                          style: {
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            background: "#3B82F6",
                          },
                        },
                        r,
                      ),
                    ),
                  },
                  t,
                ),
              ),
            }),
            u.jsx("div", {
              style: {
                position: "absolute",
                bottom: 28,
                left: 28,
                opacity: 0.15,
                pointerEvents: "none",
              },
              children: [...Array(4)].map((e, t) =>
                u.jsx(
                  "div",
                  {
                    style: { display: "flex", gap: 10, marginBottom: 10 },
                    children: [...Array(6)].map((n, r) =>
                      u.jsx(
                        "div",
                        {
                          style: {
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            background: "#3B82F6",
                          },
                        },
                        r,
                      ),
                    ),
                  },
                  t,
                ),
              ),
            }),
            u.jsx("div", {
              style: {
                position: "absolute",
                top: "42%",
                right: "5%",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#60A5FA",
                opacity: 0.55,
              },
            }),
            u.jsx("div", {
              style: {
                position: "absolute",
                bottom: "22%",
                right: "14%",
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#93C5FD",
                opacity: 0.45,
              },
            }),
            u.jsxs("div", {
              style: { textAlign: "center", marginBottom: 16 },
              children: [
                u.jsx(A.span, {
                  ...xn(0),
                  className: "section-badge",
                  children: "My Work",
                }),
                u.jsxs(A.h2, {
                  ...xn(0.08),
                  style: {
                    fontSize: 24,
                    fontWeight: 800,
                    color: "#0F172A",
                    lineHeight: 1.15,
                    marginBottom: 0,
                  },
                  children: [
                    "Featured",
                    " ",
                    u.jsx("span", {
                      className: "gradient-text",
                      children: "Projects",
                    }),
                  ],
                }),
                u.jsx(A.div, {
                  ...xn(0.14),
                  style: {
                    width: 36,
                    height: 2,
                    background: "#3B82F6",
                    borderRadius: 99,
                    margin: "6px auto 8px",
                  },
                }),
                u.jsx(A.p, {
                  ...xn(0.2),
                  style: {
                    color: "#64748B",
                    fontSize: 11,
                    lineHeight: 1.5,
                    maxWidth: 460,
                    margin: "0 auto",
                  },
                  children:
                    "A collection of my best work that solves real-world problems.",
                }),
              ],
            }),
            u.jsx("div", {
              className:
                "projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4",
              children: _w.map((e, t) =>
                u.jsx(Iw, { project: e, index: t }, e.title),
              ),
            }),
            u.jsxs(A.div, {
              ...xn(0.55),
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-[20px] bg-white/95 border border-blue-100 shadow-[0_4px_24px_rgba(59,130,246,0.08)]",
              children: [
                u.jsxs("div", {
                  style: {
                    background:
                      "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
                    padding: "14px 16px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  },
                  children: [
                    u.jsxs("div", {
                      children: [
                        u.jsx("p", {
                          style: {
                            color: "#BFDBFE",
                            fontSize: 9,
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            marginBottom: 4,
                          },
                          children: "Case Study",
                        }),
                        u.jsx("h3", {
                          style: {
                            color: "#fff",
                            fontWeight: 800,
                            fontSize: 13,
                            lineHeight: 1.3,
                            marginBottom: 5,
                          },
                          children: Gt.title,
                        }),
                        u.jsx("p", {
                          style: {
                            color: "#BFDBFE",
                            fontSize: 10,
                            lineHeight: 1.5,
                          },
                          children: Gt.desc,
                        }),
                      ],
                    }),
                    u.jsxs("a", {
                      href: Gt.live,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        background: "rgba(255,255,255,0.20)",
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: 700,
                        padding: "5px 10px",
                        borderRadius: 8,
                        textDecoration: "none",
                        marginTop: 10,
                        transition: "background 0.2s",
                        width: "fit-content",
                      },
                      children: ["View Live ", u.jsx(Tu, { size: 11 })],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  style: {
                    padding: "12px 14px",
                    borderLeft: "1px solid #DBEAFE",
                  },
                  children: [
                    u.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 10,
                      },
                      children: [
                        u.jsx("div", {
                          style: {
                            width: 28,
                            height: 28,
                            borderRadius: 8,
                            background: "#FFF7ED",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          },
                          children: u.jsx("span", {
                            style: { fontSize: 13 },
                            children: "⚡",
                          }),
                        }),
                        u.jsx("h4", {
                          style: {
                            fontWeight: 700,
                            fontSize: 12,
                            color: "#0F172A",
                          },
                          children: "Problem",
                        }),
                      ],
                    }),
                    u.jsx("p", {
                      style: {
                        color: "#64748B",
                        fontSize: 10,
                        lineHeight: 1.55,
                      },
                      children: Gt.problem,
                    }),
                  ],
                }),
                u.jsxs("div", {
                  style: {
                    padding: "12px 14px",
                    borderLeft: "1px solid #DBEAFE",
                  },
                  children: [
                    u.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 8,
                      },
                      children: [
                        u.jsx("div", {
                          style: {
                            width: 28,
                            height: 28,
                            borderRadius: 8,
                            background: "#F0FDF4",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          },
                          children: u.jsx("span", {
                            style: { fontSize: 13 },
                            children: "✅",
                          }),
                        }),
                        u.jsx("h4", {
                          style: {
                            fontWeight: 700,
                            fontSize: 12,
                            color: "#0F172A",
                          },
                          children: "Solution",
                        }),
                      ],
                    }),
                    u.jsx("p", {
                      style: {
                        color: "#64748B",
                        fontSize: 10,
                        lineHeight: 1.55,
                        marginBottom: 8,
                      },
                      children: Gt.solution,
                    }),
                    u.jsx("div", {
                      style: { display: "flex", gap: 5 },
                      children: Gt.techIcons.map((e) =>
                        u.jsx(
                          "div",
                          {
                            title: e.title,
                            style: {
                              width: 26,
                              height: 26,
                              borderRadius: 7,
                              background: "#EFF6FF",
                              border: "1px solid #DBEAFE",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            },
                            children: u.jsx("i", {
                              className: e.cls,
                              style: { fontSize: 14 },
                            }),
                          },
                          e.title,
                        ),
                      ),
                    }),
                  ],
                }),
                u.jsxs("div", {
                  style: {
                    padding: "12px 14px",
                    borderLeft: "1px solid #DBEAFE",
                  },
                  children: [
                    u.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 10,
                      },
                      children: [
                        u.jsx("div", {
                          style: {
                            width: 28,
                            height: 28,
                            borderRadius: 8,
                            background: "#EFF6FF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          },
                          children: u.jsx("span", {
                            style: { fontSize: 13 },
                            children: "📈",
                          }),
                        }),
                        u.jsx("h4", {
                          style: {
                            fontWeight: 700,
                            fontSize: 12,
                            color: "#0F172A",
                          },
                          children: "Impact",
                        }),
                      ],
                    }),
                    u.jsx("ul", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                      },
                      children: Gt.impact.map((e) =>
                        u.jsxs(
                          "li",
                          {
                            style: {
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 5,
                              fontSize: 10,
                              color: "#64748B",
                            },
                            children: [
                              u.jsx(Fu, {
                                size: 12,
                                color: "#3B82F6",
                                style: { flexShrink: 0, marginTop: 1 },
                              }),
                              e,
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      u.jsx("style", {
        children: `
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `,
      }),
    ],
  });
}
const Zi = (e = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0 },
    transition: { duration: 0.6, ease: "easeOut", delay: e },
  }),
  Uw = [
    {
      num: "01",
      title: "Techno Skill Platform",
      desc: "A real-time coding education platform for beginners to monitor key concepts and performance.",
      img: "/images/technoskill.png",
      problem:
        "Beginners struggle to track coding resources in a single place. Existing tools were either complex or too fragmented.",
      approach: [
        "Built a clean & intuitive UI",
        "Integrated real-time data using Firebase",
        "Focused on structured learning & scalability",
      ],
      challenges: [
        "Handling large real-time data updates",
        "Creating reusable & scalable components",
        "Ensuring cross-device compatibility",
      ],
      impact: [
        "40% faster learning insights",
        "Improved structure for beginners",
        "95% positive feedback from early users",
      ],
      live: "https://saniyakhan10.github.io/Techno-Skill/",
      github: "https://github.com/saniyakhan10",
    },
    {
      num: "02",
      title: "Finance Assessment App",
      desc: "A full-stack finance assessment dashboard with data management, secure analytics and professional tracking.",
      img: "/images/sharemarket.png",
      problem:
        "Finance teams needed an affordable management solution with easy data visualization and secure analytics.",
      approach: [
        "Built with modern tech stack [React]",
        "Integrated secure data handling",
        "Designed responsive & user-friendly UI",
      ],
      challenges: [
        "Implementing secure data flows",
        "Managing financial data efficiently",
        "Optimizing performance for large metrics",
      ],
      impact: [
        "Launched analytics successfully",
        "Smooth professional experience",
        "Increased user satisfaction & clarity",
      ],
      live: "https://finance-assessment-emol.vercel.app/",
      github: "https://github.com/saniyakhan10",
    },
    {
      num: "03",
      title: "Personal Portfolio",
      desc: "A sleek portfolio website showcasing projects and skills with smooth UI interactions and animations.",
      img: "/images/techno.png",
      problem:
        "Needed a premium personal brand presence to showcase work effectively without looking generic or cluttered.",
      approach: [
        "Designed with glassmorphism UI",
        "Integrated Framer Motion for smooth feel",
        "Focused on high-performance rendering",
      ],
      challenges: [
        "Balancing animations with performance",
        "Maintaining consistency across sections",
        "Perfecting mobile responsive layouts",
      ],
      impact: [
        "Premium modern aesthetic achieved",
        "Fast load times across all devices",
        "Highly engaging user experience",
      ],
      live: "https://gorgeous-moonbeam-5b099a.netlify.app",
      github: "https://github.com/saniyakhan10",
    },
  ];
function Ww({ cs: e, index: t }) {
  return u.jsxs(A.div, {
    ...Zi(0.1 * t),
    style: {
      background: "rgba(255,255,255,0.95)",
      border: "1px solid #EFF6FF",
      borderRadius: 24,
      padding: 24,
      boxShadow: "0 8px 40px rgba(59,130,246,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: 28,
      marginBottom: 24,
    },
    className: "md:flex-row",
    children: [
      u.jsx("div", {
        style: {
          background: "#F8FAFC",
          borderRadius: 16,
          padding: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        className: "md:w-[35%] flex-shrink-0",
        children: u.jsx("img", {
          src: e.img,
          alt: e.title,
          style: {
            width: "100%",
            height: "auto",
            borderRadius: 8,
            boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
          },
        }),
      }),
      u.jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "4px 0",
        },
        children: [
          u.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              borderBottom: "1px solid #F1F5F9",
              paddingBottom: 20,
              marginBottom: 20,
            },
            className: "flex-col md:flex-row gap-4 md:gap-0",
            children: [
              u.jsxs("div", {
                style: { display: "flex", gap: 16, alignItems: "flex-start" },
                children: [
                  u.jsx("div", {
                    style: {
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "#2563EB",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: 13,
                      flexShrink: 0,
                      marginTop: 2,
                    },
                    children: e.num,
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("h3", {
                        style: {
                          fontSize: 18,
                          fontWeight: 800,
                          color: "#0F172A",
                          marginBottom: 6,
                        },
                        children: e.title,
                      }),
                      u.jsx("p", {
                        style: {
                          color: "#64748B",
                          fontSize: 12,
                          lineHeight: 1.6,
                          maxWidth: 450,
                        },
                        children: e.desc,
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                style: { display: "flex", gap: 12 },
                children: [
                  u.jsxs("a", {
                    href: e.live,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: {
                      background: "#2563EB",
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 600,
                      padding: "8px 14px",
                      borderRadius: 8,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      transition: "background 0.2s",
                    },
                    children: ["Live Demo ", u.jsx(Tu, { size: 12 })],
                  }),
                  u.jsxs("a", {
                    href: e.github,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: {
                      background: "#fff",
                      color: "#0F172A",
                      fontSize: 11,
                      fontWeight: 600,
                      padding: "8px 14px",
                      borderRadius: 8,
                      textDecoration: "none",
                      border: "1px solid #E2E8F0",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      transition: "background 0.2s",
                    },
                    children: [u.jsx(fi, { size: 12 }), " GitHub"],
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            style: { display: "grid", gap: 20 },
            className: "grid-cols-2 md:grid-cols-4",
            children: [
              u.jsxs("div", {
                children: [
                  u.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 12,
                    },
                    children: [
                      u.jsx("div", {
                        style: {
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          border: "1.5px solid #E0E7FF",
                          color: "#3B82F6",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                        children: u.jsx(sw, { size: 13, strokeWidth: 2.5 }),
                      }),
                      u.jsx("h4", {
                        style: {
                          fontWeight: 700,
                          fontSize: 12,
                          color: "#0F172A",
                        },
                        children: "Problem",
                      }),
                    ],
                  }),
                  u.jsx("p", {
                    style: { color: "#64748B", fontSize: 11, lineHeight: 1.65 },
                    children: e.problem,
                  }),
                ],
              }),
              u.jsxs("div", {
                children: [
                  u.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 12,
                    },
                    children: [
                      u.jsx("div", {
                        style: {
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          border: "1.5px solid #E0E7FF",
                          color: "#3B82F6",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                        children: u.jsx(Xm, { size: 13, strokeWidth: 2.5 }),
                      }),
                      u.jsx("h4", {
                        style: {
                          fontWeight: 700,
                          fontSize: 12,
                          color: "#0F172A",
                        },
                        children: "My Approach",
                      }),
                    ],
                  }),
                  u.jsx("ul", {
                    style: { display: "flex", flexDirection: "column", gap: 6 },
                    children: e.approach.map((n, r) =>
                      u.jsxs(
                        "li",
                        {
                          style: {
                            display: "flex",
                            gap: 6,
                            fontSize: 11,
                            color: "#64748B",
                            lineHeight: 1.5,
                          },
                          children: [
                            u.jsx("span", {
                              style: {
                                color: "#0F172A",
                                fontSize: 14,
                                lineHeight: 1,
                              },
                              children: "•",
                            }),
                            " ",
                            n,
                          ],
                        },
                        r,
                      ),
                    ),
                  }),
                ],
              }),
              u.jsxs("div", {
                children: [
                  u.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 12,
                    },
                    children: [
                      u.jsx("div", {
                        style: {
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          border: "1.5px solid #E0E7FF",
                          color: "#3B82F6",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                        children: u.jsx(Sw, { size: 13, strokeWidth: 2.5 }),
                      }),
                      u.jsx("h4", {
                        style: {
                          fontWeight: 700,
                          fontSize: 12,
                          color: "#0F172A",
                        },
                        children: "Challenges",
                      }),
                    ],
                  }),
                  u.jsx("ul", {
                    style: { display: "flex", flexDirection: "column", gap: 6 },
                    children: e.challenges.map((n, r) =>
                      u.jsxs(
                        "li",
                        {
                          style: {
                            display: "flex",
                            gap: 6,
                            fontSize: 11,
                            color: "#64748B",
                            lineHeight: 1.5,
                          },
                          children: [
                            u.jsx("span", {
                              style: {
                                color: "#0F172A",
                                fontSize: 14,
                                lineHeight: 1,
                              },
                              children: "•",
                            }),
                            " ",
                            n,
                          ],
                        },
                        r,
                      ),
                    ),
                  }),
                ],
              }),
              u.jsxs("div", {
                children: [
                  u.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 12,
                    },
                    children: [
                      u.jsx("div", {
                        style: {
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          border: "1.5px solid #E0E7FF",
                          color: "#3B82F6",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                        children: u.jsx(kw, { size: 13, strokeWidth: 2.5 }),
                      }),
                      u.jsx("h4", {
                        style: {
                          fontWeight: 700,
                          fontSize: 12,
                          color: "#0F172A",
                        },
                        children: "Final Outcome",
                      }),
                    ],
                  }),
                  u.jsx("ul", {
                    style: { display: "flex", flexDirection: "column", gap: 6 },
                    children: e.impact.map((n, r) =>
                      u.jsxs(
                        "li",
                        {
                          style: {
                            display: "flex",
                            gap: 6,
                            fontSize: 11,
                            color: "#64748B",
                            lineHeight: 1.5,
                          },
                          children: [
                            u.jsx("span", {
                              style: {
                                color: "#0F172A",
                                fontSize: 14,
                                lineHeight: 1,
                              },
                              children: "•",
                            }),
                            " ",
                            n,
                          ],
                        },
                        r,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Hw() {
  return u.jsxs("section", {
    id: "casestudies",
    className: "relative overflow-hidden",
    style: { background: "#EFF6FF", paddingTop: 80, paddingBottom: 80 },
    children: [
      u.jsx("div", {
        style: {
          position: "absolute",
          top: -100,
          left: -100,
          width: 300,
          height: 300,
          background: "radial-gradient(circle, #BFDBFE 0%, transparent 70%)",
          opacity: 0.5,
          pointerEvents: "none",
        },
      }),
      u.jsx("div", {
        style: {
          position: "absolute",
          bottom: -100,
          right: -100,
          width: 400,
          height: 400,
          background: "radial-gradient(circle, #DBEAFE 0%, transparent 70%)",
          opacity: 0.5,
          pointerEvents: "none",
        },
      }),
      u.jsxs("div", {
        style: {
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 10,
        },
        children: [
          u.jsxs("div", {
            style: { textAlign: "center", marginBottom: 48 },
            children: [
              u.jsx(A.span, {
                ...Zi(0),
                style: {
                  display: "inline-block",
                  background: "#E0E7FF",
                  color: "#3B82F6",
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "6px 16px",
                  borderRadius: 99,
                  marginBottom: 16,
                },
                children: "Case Studies",
              }),
              u.jsxs(A.h2, {
                ...Zi(0.1),
                style: {
                  fontSize: 32,
                  fontWeight: 800,
                  color: "#0F172A",
                  marginBottom: 12,
                },
                children: [
                  "Projects ",
                  u.jsxs("span", {
                    style: { color: "#2563EB", position: "relative" },
                    children: [
                      "Case Studies",
                      u.jsx("svg", {
                        style: {
                          position: "absolute",
                          bottom: -8,
                          left: 0,
                          width: "100%",
                        },
                        height: "4",
                        viewBox: "0 0 100 4",
                        preserveAspectRatio: "none",
                        children: u.jsx("path", {
                          d: "M0 2 Q 50 4 100 2",
                          stroke: "#3B82F6",
                          strokeWidth: "3",
                          fill: "none",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              u.jsx(A.p, {
                ...Zi(0.2),
                style: {
                  color: "#64748B",
                  fontSize: 14,
                  fontWeight: 500,
                  marginTop: 16,
                },
                children:
                  "Real problems. Thoughtful solutions. Impact that matters.",
              }),
            ],
          }),
          u.jsx("div", {
            children: Uw.map((e, t) => u.jsx(Ww, { cs: e, index: t }, e.title)),
          }),
        ],
      }),
    ],
  });
}
const vn = (e = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0 },
    transition: { duration: 0.6, ease: "easeOut", delay: e },
  }),
  $w = [
    {
      value: "10+",
      label: "Projects Built",
      sub: "Full-stack & Frontend",
      icon: cw,
      color: "bg-blue-50 text-primary",
      gradient: "from-blue-50 to-blue-100",
    },
    {
      value: "14+",
      label: "Technologies",
      sub: "Learned & Applied",
      icon: lw,
      color: "bg-violet-50 text-violet-600",
      gradient: "from-violet-50 to-violet-100",
    },
    {
      value: "100+",
      label: "Coding Hours",
      sub: "Practice & Projects",
      icon: ww,
      color: "bg-emerald-50 text-emerald-600",
      gradient: "from-emerald-50 to-emerald-100",
    },
    {
      value: "1+",
      label: "Year Learning",
      sub: "Continuous Growth",
      icon: Qm,
      color: "bg-amber-50 text-amber-600",
      gradient: "from-amber-50 to-amber-100",
    },
  ],
  Kw = [
    { num: "10+", label: "Projects Completed" },
    { num: "14+", label: "Technologies Mastered" },
    { num: "100+", label: "Coding Hours" },
    { num: "95%", label: "Client Satisfaction" },
    { num: "1+", label: "Years Experience" },
  ];
function Gw() {
  return u.jsxs("section", {
    id: "achievements",
    className: "section-py relative overflow-hidden",
    style: { background: "#EFF6FF", paddingTop: 60, paddingBottom: 60 },
    children: [
      u.jsx("div", {
        className:
          "absolute top-0 right-0 w-80 h-80 bg-blue-200 float-blob opacity-30",
        style: { transform: "translate(30%, -30%)" },
      }),
      u.jsx("div", {
        className:
          "absolute bottom-0 left-0 w-72 h-72 bg-blue-300 float-blob opacity-20",
        style: { transform: "translate(-30%, 30%)" },
      }),
      u.jsx("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        children: u.jsxs("div", {
          className: "relative rounded-[28px] p-6 sm:p-8 md:p-10",
          style: {
            background: "rgba(255,255,255,0.88)",
            border: "1px solid rgba(255,255,255,0.90)",
            boxShadow: "0 8px 48px rgba(59,130,246,0.10)",
            backdropFilter: "blur(16px)",
          },
          children: [
            u.jsx("div", {
              style: {
                position: "absolute",
                top: 20,
                right: 20,
                opacity: 0.2,
                pointerEvents: "none",
              },
              children: u.jsx("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 10px)",
                  gap: "10px",
                },
                children: [...Array(20)].map((e, t) =>
                  u.jsx(
                    "div",
                    {
                      style: {
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "#3B82F6",
                      },
                    },
                    t,
                  ),
                ),
              }),
            }),
            u.jsxs("div", {
              className: "text-center mb-6",
              children: [
                u.jsx(A.span, {
                  ...vn(0),
                  className: "section-badge",
                  children: "Achievements",
                }),
                u.jsxs(A.h2, {
                  ...vn(0.1),
                  className: "section-heading",
                  children: [
                    "Achievements & ",
                    u.jsx("span", {
                      className: "gradient-text",
                      children: "Highlights",
                    }),
                  ],
                }),
                u.jsx(A.div, {
                  ...vn(0.15),
                  style: {
                    width: 36,
                    height: 2,
                    background: "#3B82F6",
                    borderRadius: 99,
                    margin: "8px auto",
                  },
                }),
                u.jsx(A.p, {
                  ...vn(0.2),
                  style: {
                    color: "#64748B",
                    fontSize: 11,
                    maxWidth: 460,
                    margin: "0 auto",
                  },
                  children:
                    "A snapshot of my journey — the numbers that reflect my dedication and growth.",
                }),
              ],
            }),
            u.jsx("div", {
              className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
              children: $w.map(
                (
                  {
                    value: e,
                    label: t,
                    sub: n,
                    icon: r,
                    color: i,
                    gradient: s,
                  },
                  o,
                ) =>
                  u.jsxs(
                    A.div,
                    {
                      ...vn(0.1 * o + 0.2),
                      className:
                        "card p-4 border border-blue-50 text-center group bg-white rounded-xl shadow-sm",
                      children: [
                        u.jsx("div", {
                          className: `w-12 h-12 rounded-xl bg-gradient-to-br ${s} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`,
                          children: u.jsx(r, {
                            size: 20,
                            className: i.split(" ")[1],
                          }),
                        }),
                        u.jsx("h3", {
                          className:
                            "text-2xl font-extrabold text-dark-text mb-1",
                          children: e,
                        }),
                        u.jsx("p", {
                          className: "font-semibold text-dark-text text-xs",
                          children: t,
                        }),
                        u.jsx("p", {
                          className: "text-secondary-text text-[10px] mt-0.5",
                          children: n,
                        }),
                      ],
                    },
                    t,
                  ),
              ),
            }),
            u.jsx(A.div, {
              ...vn(0.6),
              className:
                "bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 md:p-5",
              children: u.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-5 gap-4",
                children: Kw.map(({ num: e, label: t }, n) =>
                  u.jsxs(
                    "div",
                    {
                      className: "text-center",
                      children: [
                        u.jsx("p", {
                          className: "text-xl font-extrabold text-white mb-0.5",
                          children: e,
                        }),
                        u.jsx("p", {
                          className: "text-blue-100 text-[10px] font-medium",
                          children: t,
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const pr = (e = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0 },
    transition: { duration: 0.6, ease: "easeOut", delay: e },
  }),
  Qw = [
    {
      stars: 5,
      text: "Saniya built our website from scratch. Her attention to detail, clean code, and modern design skills exceeded all our expectations.",
      name: "Sanket Rahangdale",
      role: "Startup Founder",
      img: "/images/sanket.jpeg",
      tag: "Verified Client",
    },
    {
      stars: 5,
      text: "Working with her was an amazing experience. She understood our requirements perfectly and delivered a fast, responsive app on time.",
      name: "Chandu Bopche",
      role: "Project Manager",
      img: "/images/chandu.jpeg",
      tag: "Verified Client",
    },
    {
      stars: 5,
      text: "A talented developer with great communication skills. The portfolio website she built was stunning and the code quality was top-notch.",
      name: "Mohit Awsare",
      role: "Tech Lead",
      img: "/images/mohit.jpeg",
      tag: "Verified Client",
    },
  ],
  Yw = [
    { name: "Learnify", icon: Qm, color: "#3B82F6" },
    { name: "BuildCraft", icon: mw, color: "#F97316" },
    { name: "DevBoost", icon: Js, color: "#6366F1" },
    { name: "CodeMentor", icon: pw, color: "#10B981" },
    { name: "StartX", icon: Au, color: "#8B5CF6" },
  ];
function Xw() {
  return u.jsxs("section", {
    id: "testimonials",
    className: "relative overflow-hidden",
    style: { background: "#EFF6FF", paddingTop: 60, paddingBottom: 60 },
    children: [
      u.jsx("div", {
        style: {
          position: "absolute",
          top: -50,
          left: -50,
          width: 300,
          height: 300,
          background: "radial-gradient(circle, #BFDBFE 0%, transparent 70%)",
          opacity: 0.5,
          pointerEvents: "none",
        },
      }),
      u.jsx("div", {
        style: {
          position: "absolute",
          bottom: -50,
          right: -50,
          width: 300,
          height: 300,
          background: "radial-gradient(circle, #DBEAFE 0%, transparent 70%)",
          opacity: 0.5,
          pointerEvents: "none",
        },
      }),
      u.jsx("div", {
        style: {
          maxWidth: 1100,
          margin: "0 auto",
          px: 20,
          position: "relative",
          zIndex: 10,
        },
        children: u.jsxs("div", {
          className: "relative rounded-[28px] p-6 sm:p-8 md:p-10",
          style: {
            background: "rgba(255,255,255,0.88)",
            border: "1px solid rgba(255,255,255,0.90)",
            boxShadow: "0 8px 48px rgba(59,130,246,0.10)",
            backdropFilter: "blur(16px)",
          },
          children: [
            u.jsx("div", {
              style: {
                position: "absolute",
                top: 20,
                left: 20,
                opacity: 0.2,
                pointerEvents: "none",
              },
              children: u.jsx("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 10px)",
                  gap: "10px",
                },
                children: [...Array(20)].map((e, t) =>
                  u.jsx(
                    "div",
                    {
                      style: {
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "#3B82F6",
                      },
                    },
                    t,
                  ),
                ),
              }),
            }),
            u.jsxs("div", {
              style: { textAlign: "center", marginBottom: 24 },
              children: [
                u.jsx(A.span, {
                  ...pr(0),
                  style: {
                    display: "inline-block",
                    background: "#E0E7FF",
                    color: "#3B82F6",
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "6px 16px",
                    borderRadius: 99,
                    marginBottom: 12,
                  },
                  children: "Testimonials",
                }),
                u.jsxs(A.h2, {
                  ...pr(0.1),
                  style: {
                    fontSize: 32,
                    fontWeight: 800,
                    color: "#0F172A",
                    marginBottom: 12,
                  },
                  children: [
                    "What People ",
                    u.jsxs("span", {
                      style: { color: "#2563EB", position: "relative" },
                      children: [
                        "Say",
                        u.jsx("svg", {
                          style: {
                            position: "absolute",
                            bottom: -8,
                            left: 0,
                            width: "100%",
                          },
                          height: "4",
                          viewBox: "0 0 100 4",
                          preserveAspectRatio: "none",
                          children: u.jsx("path", {
                            d: "M0 2 Q 50 4 100 2",
                            stroke: "#3B82F6",
                            strokeWidth: "3",
                            fill: "none",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsx(A.p, {
                  ...pr(0.2),
                  style: {
                    color: "#64748B",
                    fontSize: 13,
                    fontWeight: 500,
                    marginTop: 16,
                    maxWidth: 400,
                    margin: "16px auto 0",
                  },
                  children:
                    "Real feedback from clients, students and collaborators who've worked with me.",
                }),
              ],
            }),
            u.jsx("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-7",
              children: Qw.map((e, t) =>
                u.jsxs(
                  A.div,
                  {
                    ...pr(0.1 * t + 0.1),
                    style: {
                      background: "#FFFFFF",
                      borderRadius: 16,
                      padding: "16px 20px",
                      boxShadow: "0 8px 30px rgba(59,130,246,0.05)",
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid #F1F5F9",
                    },
                    children: [
                      u.jsxs("div", {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 10,
                        },
                        children: [
                          u.jsx("div", {
                            style: {
                              color: "#93C5FD",
                              fontSize: 32,
                              fontFamily: "serif",
                              lineHeight: 0.5,
                              paddingTop: 12,
                            },
                            children: '"',
                          }),
                          u.jsx("div", {
                            style: { display: "flex", gap: 2 },
                            children: [...Array(e.stars)].map((n, r) =>
                              u.jsx(
                                vw,
                                { size: 12, color: "#3B82F6", fill: "#3B82F6" },
                                r,
                              ),
                            ),
                          }),
                        ],
                      }),
                      u.jsx("p", {
                        style: {
                          color: "#475569",
                          fontSize: 11,
                          lineHeight: 1.5,
                          flex: 1,
                          marginBottom: 12,
                          minHeight: 48,
                        },
                        children: e.text,
                      }),
                      u.jsx("div", {
                        style: {
                          width: "100%",
                          height: 1,
                          background: "#F1F5F9",
                          marginBottom: 12,
                        },
                      }),
                      u.jsxs("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        },
                        children: [
                          u.jsx("div", {
                            style: {
                              width: 36,
                              height: 36,
                              borderRadius: "50%",
                              overflow: "hidden",
                              flexShrink: 0,
                              border: "1px solid #E0E7FF",
                            },
                            children: u.jsx("img", {
                              src: e.img,
                              alt: e.name,
                              style: {
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              },
                            }),
                          }),
                          u.jsxs("div", {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              gap: 1,
                            },
                            children: [
                              u.jsx("p", {
                                style: {
                                  fontSize: 12,
                                  fontWeight: 700,
                                  color: "#0F172A",
                                },
                                children: e.name,
                              }),
                              u.jsx("p", {
                                style: {
                                  fontSize: 10,
                                  color: "#3B82F6",
                                  fontWeight: 500,
                                },
                                children: e.role,
                              }),
                              u.jsxs("div", {
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 3,
                                  marginTop: 1,
                                },
                                children: [
                                  u.jsx(Fu, {
                                    size: 10,
                                    color: "#3B82F6",
                                    fill: "#EFF6FF",
                                  }),
                                  u.jsx("span", {
                                    style: {
                                      fontSize: 9,
                                      color: "#3B82F6",
                                      fontWeight: 600,
                                    },
                                    children: e.tag,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  e.name,
                ),
              ),
            }),
            u.jsxs(A.div, {
              ...pr(0.3),
              style: { textAlign: "center" },
              children: [
                u.jsx("p", {
                  style: {
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#3B82F6",
                    marginBottom: 16,
                  },
                  children: "Trusted by Clients & Students Worldwide",
                }),
                u.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 16,
                  },
                  children: [
                    u.jsx("div", {
                      style: { color: "#3B82F6", cursor: "pointer" },
                      children: u.jsx(rw, { size: 20 }),
                    }),
                    u.jsx("div", {
                      style: {
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 16,
                      },
                      children: Yw.map((e) =>
                        u.jsxs(
                          "div",
                          {
                            style: {
                              background: "#FFFFFF",
                              padding: "10px 20px",
                              borderRadius: 12,
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                              boxShadow: "0 4px 14px rgba(59,130,246,0.04)",
                              border: "1px solid #F1F5F9",
                            },
                            children: [
                              u.jsx(e.icon, { size: 18, color: e.color }),
                              u.jsx("span", {
                                style: {
                                  fontSize: 13,
                                  fontWeight: 700,
                                  color: "#0F172A",
                                },
                                children: e.name,
                              }),
                            ],
                          },
                          e.name,
                        ),
                      ),
                    }),
                    u.jsx("div", {
                      style: { color: "#3B82F6", cursor: "pointer" },
                      children: u.jsx(iw, { size: 20 }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const Qt = (e = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: !0 },
  transition: { duration: 0.6, ease: "easeOut", delay: e },
});
function qw() {
  const [e, t] = T.useState({ name: "", email: "", subject: "", message: "" }),
    [n, r] = T.useState(!1),
    i = (o) => t({ ...e, [o.target.name]: o.target.value }),
    s = (o) => {
      (o.preventDefault(),
        r(!0),
        setTimeout(() => r(!1), 3e3),
        t({ name: "", email: "", subject: "", message: "" }));
    };
  return u.jsxs("section", {
    id: "contact",
    className: "relative overflow-hidden",
    style: { background: "#EFF6FF", paddingTop: 20, paddingBottom: 20 },
    children: [
      u.jsx("div", {
        style: {
          position: "absolute",
          top: -50,
          left: -50,
          width: 300,
          height: 300,
          background: "radial-gradient(circle, #BFDBFE 0%, transparent 70%)",
          opacity: 0.5,
          pointerEvents: "none",
        },
      }),
      u.jsx("div", {
        style: {
          position: "absolute",
          bottom: -50,
          right: -50,
          width: 300,
          height: 300,
          background: "radial-gradient(circle, #DBEAFE 0%, transparent 70%)",
          opacity: 0.5,
          pointerEvents: "none",
        },
      }),
      u.jsx("div", {
        style: {
          maxWidth: 1050,
          margin: "0 auto",
          padding: "0 16px",
          position: "relative",
          zIndex: 10,
        },
        children: u.jsxs("div", {
          className: "relative rounded-[20px] p-4 sm:p-6 md:p-8",
          style: {
            background: "rgba(255,255,255,0.88)",
            border: "1px solid rgba(255,255,255,0.90)",
            boxShadow: "0 8px 48px rgba(59,130,246,0.10)",
            backdropFilter: "blur(16px)",
          },
          children: [
            u.jsx("div", {
              style: {
                position: "absolute",
                top: 12,
                right: 16,
                opacity: 0.2,
                pointerEvents: "none",
              },
              children: u.jsx("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 8px)",
                  gap: "8px",
                },
                children: [...Array(20)].map((o, l) =>
                  u.jsx(
                    "div",
                    {
                      style: {
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "#3B82F6",
                      },
                    },
                    l,
                  ),
                ),
              }),
            }),
            u.jsxs("div", {
              style: { textAlign: "center", marginBottom: 16 },
              children: [
                u.jsxs(A.div, {
                  ...Qt(0),
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "#E0E7FF",
                    color: "#3B82F6",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "6px 14px",
                    borderRadius: 99,
                    marginBottom: 10,
                  },
                  children: [u.jsx(Oo, { size: 12 }), " Get In Touch"],
                }),
                u.jsxs(A.h2, {
                  ...Qt(0.1),
                  style: {
                    fontSize: 24,
                    fontWeight: 800,
                    color: "#0F172A",
                    marginBottom: 4,
                    lineHeight: 1.2,
                  },
                  children: [
                    "Let's Build Something ",
                    u.jsxs("span", {
                      style: { color: "#2563EB", position: "relative" },
                      children: [
                        "Amazing Together",
                        u.jsx("svg", {
                          style: {
                            position: "absolute",
                            bottom: -4,
                            left: 0,
                            width: "100%",
                          },
                          height: "3",
                          viewBox: "0 0 100 3",
                          preserveAspectRatio: "none",
                          children: u.jsx("path", {
                            d: "M0 1.5 Q 50 3 100 1.5",
                            stroke: "#3B82F6",
                            strokeWidth: "2.5",
                            fill: "none",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs(A.p, {
                  ...Qt(0.2),
                  style: {
                    color: "#64748B",
                    fontSize: 11,
                    fontWeight: 500,
                    marginTop: 8,
                  },
                  children: [
                    "Have a project in mind or want to collaborate?",
                    u.jsx("br", {}),
                    "I'd love to hear from you!",
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-3 gap-3 mb-3",
              children: [
                u.jsxs(A.div, {
                  ...Qt(0.2),
                  style: {
                    background: "#FFFFFF",
                    borderRadius: 16,
                    padding: 16,
                    boxShadow: "0 8px 30px rgba(59,130,246,0.05)",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #F1F5F9",
                  },
                  children: [
                    u.jsx("h3", {
                      style: {
                        fontSize: 15,
                        fontWeight: 800,
                        color: "#0F172A",
                        marginBottom: 16,
                      },
                      children: "Let's Connect",
                    }),
                    u.jsx("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        flex: 1,
                      },
                      children: [
                        {
                          icon: As,
                          label: "Email",
                          value: "khansaniya54700@gmail.com",
                        },
                        {
                          icon: gw,
                          label: "WhatsApp",
                          value: "+91 8817287741",
                        },
                        {
                          icon: fw,
                          label: "Location",
                          value: "Madhya Pradesh, India",
                        },
                        {
                          icon: ow,
                          label: "Response Time",
                          value: "Within 24 Hours",
                        },
                      ].map((o, l) =>
                        u.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              gap: 12,
                              alignItems: "center",
                            },
                            children: [
                              u.jsx("div", {
                                style: {
                                  width: 32,
                                  height: 32,
                                  borderRadius: "50%",
                                  background: "#EFF6FF",
                                  color: "#3B82F6",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                },
                                children: u.jsx(o.icon, { size: 14 }),
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("p", {
                                    style: {
                                      fontSize: 11,
                                      fontWeight: 700,
                                      color: "#0F172A",
                                      marginBottom: 2,
                                    },
                                    children: o.label,
                                  }),
                                  u.jsx("p", {
                                    style: { fontSize: 10, color: "#64748B" },
                                    children: o.value,
                                  }),
                                ],
                              }),
                            ],
                          },
                          l,
                        ),
                      ),
                    }),
                    u.jsxs("a", {
                      href: "https://wa.me/918817287741",
                      target: "_blank",
                      rel: "noreferrer",
                      style: {
                        background: "#EFF6FF",
                        borderRadius: 12,
                        padding: "12px",
                        display: "flex",
                        gap: 10,
                        alignItems: "center",
                        textDecoration: "none",
                        marginTop: 20,
                        border: "1px solid #DBEAFE",
                      },
                      children: [
                        u.jsx("div", {
                          style: {
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            background: "#FFFFFF",
                            color: "#3B82F6",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          },
                          children: u.jsx(qm, {
                            size: 18,
                            fill: "#3B82F6",
                            color: "#3B82F6",
                          }),
                        }),
                        u.jsxs("div", {
                          children: [
                            u.jsx("p", {
                              style: {
                                fontSize: 12,
                                fontWeight: 700,
                                color: "#3B82F6",
                              },
                              children: "Chat on WhatsApp",
                            }),
                            u.jsx("p", {
                              style: { fontSize: 9, color: "#60A5FA" },
                              children: "Let's discuss your project",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs(A.div, {
                  ...Qt(0.3),
                  style: {
                    background: "#FFFFFF",
                    borderRadius: 16,
                    padding: 16,
                    boxShadow: "0 8px 30px rgba(59,130,246,0.05)",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #F1F5F9",
                  },
                  children: [
                    u.jsx("h3", {
                      style: {
                        fontSize: 15,
                        fontWeight: 800,
                        color: "#0F172A",
                        marginBottom: 16,
                      },
                      children: "Send Me a Message",
                    }),
                    u.jsxs("form", {
                      onSubmit: s,
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        flex: 1,
                      },
                      children: [
                        u.jsxs("div", {
                          className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                          children: [
                            u.jsx("input", {
                              type: "text",
                              name: "name",
                              value: e.name,
                              onChange: i,
                              required: !0,
                              placeholder: "Your Name",
                              style: {
                                width: "100%",
                                padding: "8px 12px",
                                borderRadius: 8,
                                border: "1px solid #E2E8F0",
                                fontSize: 11,
                                outline: "none",
                                background: "#F8FAFC",
                              },
                            }),
                            u.jsx("input", {
                              type: "email",
                              name: "email",
                              value: e.email,
                              onChange: i,
                              required: !0,
                              placeholder: "Your Email",
                              style: {
                                width: "100%",
                                padding: "8px 12px",
                                borderRadius: 8,
                                border: "1px solid #E2E8F0",
                                fontSize: 11,
                                outline: "none",
                                background: "#F8FAFC",
                              },
                            }),
                          ],
                        }),
                        u.jsx("input", {
                          type: "text",
                          name: "subject",
                          value: e.subject,
                          onChange: i,
                          placeholder: "Subject (Optional)",
                          style: {
                            width: "100%",
                            padding: "8px 12px",
                            borderRadius: 8,
                            border: "1px solid #E2E8F0",
                            fontSize: 11,
                            outline: "none",
                            background: "#F8FAFC",
                          },
                        }),
                        u.jsx("textarea", {
                          name: "message",
                          value: e.message,
                          onChange: i,
                          required: !0,
                          placeholder: "Your Message",
                          rows: 3,
                          style: {
                            width: "100%",
                            padding: "8px 12px",
                            borderRadius: 8,
                            border: "1px solid #E2E8F0",
                            fontSize: 11,
                            outline: "none",
                            background: "#F8FAFC",
                            resize: "none",
                            flex: 1,
                          },
                        }),
                        u.jsxs("button", {
                          type: "submit",
                          style: {
                            background: "#2563EB",
                            color: "#fff",
                            padding: "10px",
                            borderRadius: 8,
                            border: "none",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            marginTop: 4,
                          },
                          children: [
                            u.jsxs("div", {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                                fontSize: 12,
                                fontWeight: 700,
                              },
                              children: [
                                u.jsx(Oo, { size: 14 }),
                                " ",
                                n ? "Message Sent!" : "Send Message",
                              ],
                            }),
                            u.jsx("span", {
                              style: {
                                fontSize: 9,
                                color: "#BFDBFE",
                                marginTop: 2,
                                fontWeight: 500,
                              },
                              children:
                                "I'll get back to you as soon as possible!",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs(A.div, {
                  ...Qt(0.4),
                  style: {
                    background: "#FFFFFF",
                    borderRadius: 16,
                    padding: 16,
                    boxShadow: "0 8px 30px rgba(59,130,246,0.05)",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #F1F5F9",
                  },
                  children: [
                    u.jsxs("div", {
                      style: {
                        height: 80,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 12,
                        position: "relative",
                      },
                      children: [
                        u.jsxs("div", {
                          style: {
                            width: 56,
                            height: 56,
                            background: "#E0E7FF",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                          },
                          children: [
                            u.jsx(As, { size: 24, color: "#3B82F6" }),
                            u.jsx(A.div, {
                              animate: { y: [-3, 3, -3] },
                              transition: { repeat: 1 / 0, duration: 3 },
                              style: {
                                position: "absolute",
                                top: -8,
                                right: -8,
                                color: "#60A5FA",
                              },
                              children: u.jsx(Oo, {
                                size: 18,
                                fill: "#60A5FA",
                              }),
                            }),
                          ],
                        }),
                        u.jsx("div", {
                          style: {
                            position: "absolute",
                            right: 40,
                            top: 20,
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#93C5FD",
                          },
                        }),
                        u.jsx("div", {
                          style: {
                            position: "absolute",
                            left: 40,
                            bottom: 20,
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: "#BFDBFE",
                          },
                        }),
                      ],
                    }),
                    u.jsxs("h3", {
                      style: {
                        fontSize: 15,
                        fontWeight: 800,
                        color: "#0F172A",
                        marginBottom: 6,
                      },
                      children: [
                        "Let's turn your ideas into ",
                        u.jsx("span", {
                          style: { color: "#2563EB" },
                          children: "real-world solutions.",
                        }),
                      ],
                    }),
                    u.jsx("p", {
                      style: {
                        color: "#64748B",
                        fontSize: 11,
                        lineHeight: 1.4,
                        marginBottom: 16,
                        flex: 1,
                      },
                      children:
                        "Whether it's a website, app or a product idea, I'm here to help you bring it to life.",
                    }),
                    u.jsx("div", {
                      className: "grid grid-cols-3 gap-2",
                      children: [
                        { icon: Ew, label: "Fast Response" },
                        { icon: dw, label: "Secure Comm." },
                        { icon: Fu, label: "100% Satisfaction" },
                      ].map((o, l) =>
                        u.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              textAlign: "center",
                              gap: 6,
                            },
                            children: [
                              u.jsx("div", {
                                style: {
                                  width: 28,
                                  height: 28,
                                  borderRadius: "50%",
                                  border: "1px solid #E0E7FF",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: "#3B82F6",
                                },
                                children: u.jsx(o.icon, { size: 12 }),
                              }),
                              u.jsx("span", {
                                style: {
                                  fontSize: 9,
                                  color: "#475569",
                                  fontWeight: 600,
                                  lineHeight: 1.2,
                                },
                                children: o.label,
                              }),
                            ],
                          },
                          l,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs(A.div, {
              ...Qt(0.5),
              style: {
                background: "#FFFFFF",
                borderRadius: 12,
                padding: "10px 16px",
                boxShadow: "0 4px 20px rgba(59,130,246,0.05)",
                border: "1px solid #F1F5F9",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
              },
              children: [
                u.jsx("h4", {
                  style: { fontSize: 11, fontWeight: 700, color: "#0F172A" },
                  children: "Connect With Me",
                }),
                u.jsx("div", {
                  style: {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 12,
                  },
                  children: [
                    {
                      icon: fi,
                      label: "GitHub",
                      color: "#0F172A",
                      bg: "#F1F5F9",
                      href: "https://github.com/Saniyakhan10",
                    },
                    {
                      icon: bu,
                      label: "LinkedIn",
                      color: "#0A66C2",
                      bg: "#EFF6FF",
                      href: "https://www.linkedin.com/in/saniya-khan-996759367/",
                    },
                    {
                      icon: Pu,
                      label: "Instagram",
                      color: "#E1306C",
                      bg: "#FEF2F2",
                      href: "https://instagram.com/_saniya_khan801",
                    },
                  ].map((o, l) =>
                    u.jsx(
                      "a",
                      {
                        href: o.href,
                        target: "_blank",
                        rel: "noreferrer",
                        title: o.label,
                        style: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          background: o.bg,
                          textDecoration: "none",
                        },
                        children: u.jsx(o.icon, { size: 16, color: o.color }),
                      },
                      l,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const Zw = ["Home", "About", "Projects", "Skills", "Contact"],
  Jw = ["Resume / CV", "GitHub Repos", "Design System", "Blog (Soon)"],
  eS = [
    "Frontend Development",
    "Backend Development",
    "Full Stack Apps",
    "UI/UX Consulting",
  ],
  tS = [
    { icon: fi, href: "https://github.com/Saniyakhan10", label: "GitHub" },
    {
      icon: bu,
      href: "https://www.linkedin.com/in/saniya-khan-996759367/",
      label: "LinkedIn",
    },
    {
      icon: Pu,
      href: "https://instagram.com/_saniya_khan801",
      label: "Instagram",
    },
    { icon: As, href: "mailto:khansaniya54700@gmail.com", label: "Email" },
  ],
  nS = (e) => {
    const t = document.getElementById(e.toLowerCase());
    t && t.scrollIntoView({ behavior: "smooth" });
  };
function rS() {
  return u.jsxs("footer", {
    className: "relative bg-slate-900 overflow-hidden",
    children: [
      u.jsx("div", {
        className:
          "absolute top-0 left-1/4 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-10 pointer-events-none",
      }),
      u.jsx("div", {
        className:
          "absolute bottom-0 right-1/4 w-48 h-48 bg-indigo-600 rounded-full blur-3xl opacity-10 pointer-events-none",
      }),
      u.jsxs("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
        children: [
          u.jsxs("div", {
            className:
              "bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-xl p-8 md:p-10 mb-8",
            children: [
              u.jsxs("div", {
                className:
                  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10",
                children: [
                  u.jsxs("div", {
                    className: "col-span-1 sm:col-span-2 lg:col-span-1",
                    children: [
                      u.jsxs("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [
                          u.jsx("div", {
                            className:
                              "w-9 h-9 bg-primary rounded-lg flex items-center justify-center",
                            children: u.jsx("span", {
                              className: "text-white font-bold text-sm",
                              children: "SK",
                            }),
                          }),
                          u.jsx("span", {
                            className: "text-white font-bold text-lg",
                            children: "Saniya Khan",
                          }),
                        ],
                      }),
                      u.jsx("p", {
                        className:
                          "text-slate-400 text-sm leading-relaxed mb-5",
                        children:
                          "Aspiring Full Stack Developer crafting elegant digital experiences with modern technologies.",
                      }),
                      u.jsx("div", {
                        className: "flex gap-2 flex-wrap",
                        children: tS.map(({ icon: e, href: t, label: n }) =>
                          u.jsx(
                            "a",
                            {
                              href: t,
                              target: "_blank",
                              rel: "noreferrer",
                              "aria-label": n,
                              className:
                                "w-8 h-8 rounded-lg bg-slate-700 hover:bg-primary text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5",
                              children: u.jsx(e, { size: 15 }),
                            },
                            n,
                          ),
                        ),
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsxs("h4", {
                        className:
                          "text-white font-semibold text-sm mb-4 flex items-center gap-2",
                        children: [
                          u.jsx("span", {
                            className: "w-1 h-4 bg-primary rounded-full",
                          }),
                          "Quick Links",
                        ],
                      }),
                      u.jsx("ul", {
                        className: "space-y-2.5",
                        children: Zw.map((e) =>
                          u.jsx(
                            "li",
                            {
                              children: u.jsxs("button", {
                                onClick: () => nS(e),
                                className:
                                  "text-slate-400 hover:text-primary text-sm transition-colors duration-200 flex items-center gap-1.5 group",
                                children: [
                                  u.jsx("span", {
                                    className:
                                      "w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity",
                                  }),
                                  e,
                                ],
                              }),
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsxs("h4", {
                        className:
                          "text-white font-semibold text-sm mb-4 flex items-center gap-2",
                        children: [
                          u.jsx("span", {
                            className: "w-1 h-4 bg-primary rounded-full",
                          }),
                          "Resources",
                        ],
                      }),
                      u.jsx("ul", {
                        className: "space-y-2.5",
                        children: Jw.map((e) =>
                          u.jsx(
                            "li",
                            {
                              children: u.jsxs("a", {
                                href: "#",
                                className:
                                  "text-slate-400 hover:text-primary text-sm transition-colors duration-200 flex items-center gap-1.5 group",
                                children: [
                                  u.jsx("span", {
                                    className:
                                      "w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity",
                                  }),
                                  e,
                                ],
                              }),
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsxs("h4", {
                        className:
                          "text-white font-semibold text-sm mb-4 flex items-center gap-2",
                        children: [
                          u.jsx("span", {
                            className: "w-1 h-4 bg-primary rounded-full",
                          }),
                          "Services",
                        ],
                      }),
                      u.jsx("ul", {
                        className: "space-y-2.5",
                        children: eS.map((e) =>
                          u.jsx(
                            "li",
                            {
                              children: u.jsxs("a", {
                                href: "#",
                                className:
                                  "text-slate-400 hover:text-primary text-sm transition-colors duration-200 flex items-center gap-1.5 group",
                                children: [
                                  u.jsx("span", {
                                    className:
                                      "w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity",
                                  }),
                                  e,
                                ],
                              }),
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                className:
                  "border-t border-slate-700/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4",
                children: [
                  u.jsxs("p", {
                    className: "text-slate-400 text-sm",
                    children: [
                      "📧 ",
                      u.jsx("a", {
                        href: "mailto:khansaniya54700@gmail.com",
                        className: "text-primary hover:underline",
                        children: "khansaniya54700@gmail.com",
                      }),
                      "  📍 Madhya Pradesh, India",
                    ],
                  }),
                  u.jsxs("a", {
                    href: "https://wa.me/918817287741",
                    target: "_blank",
                    rel: "noreferrer",
                    className:
                      "inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5",
                    children: [u.jsx(qm, { size: 16 }), "Chat on WhatsApp"],
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className:
              "flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-xs",
            children: [
              u.jsxs("p", {
                children: [
                  "© ",
                  new Date().getFullYear(),
                  " Saniya Khan. All rights reserved.",
                ],
              }),
              u.jsxs("div", {
                className: "flex items-center gap-1",
                children: [
                  u.jsx("span", { children: "Built with" }),
                  u.jsx("span", {
                    className: "text-primary font-medium",
                    children: "React",
                  }),
                  u.jsx("span", { children: "+" }),
                  u.jsx("span", {
                    className: "text-primary font-medium",
                    children: "Tailwind CSS",
                  }),
                  u.jsx("span", { children: "+" }),
                  u.jsx("span", {
                    className: "text-primary font-medium",
                    children: "Framer Motion",
                  }),
                  u.jsx("span", { className: "ml-1", children: "⚡" }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function iS() {
  return u.jsxs("div", {
    className: "font-poppins bg-bg-main min-h-screen overflow-x-hidden",
    children: [
      u.jsx(Fw, {}),
      u.jsxs("main", {
        children: [
          u.jsx(bw, {}),
          u.jsx(Rw, {}),
          u.jsx(zw, {}),
          u.jsx(Ow, {}),
          u.jsx(Hw, {}),
          u.jsx(Gw, {}),
          u.jsx(Xw, {}),
          u.jsx(qw, {}),
        ],
      }),
      u.jsx(rS, {}),
    ],
  });
}
Wo.createRoot(document.getElementById("root")).render(
  u.jsx(pg.StrictMode, { children: u.jsx(iS, {}) }),
);
