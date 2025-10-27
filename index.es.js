var od = Object.defineProperty;
var ad = (e, t, n) => t in e ? od(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ke = (e, t, n) => ad(e, typeof t != "symbol" ? t + "" : t, n);
import er, { useState as Ve, useEffect as Et, useRef as on, useMemo as es, Suspense as cd, forwardRef as ud, memo as ld, useCallback as dd, useLayoutEffect as fd } from "react";
import { useXRStore as hd, useXRInputSourceEvent as pd, XRDomOverlay as gd, createXRStore as md, XR as yd, IfInSessionMode as bd } from "@react-three/xr";
import { useFrame as ms, useThree as vu, Canvas as vd } from "@react-three/fiber";
import * as We from "three";
import { BufferGeometry as wd, BufferAttribute as xd } from "three";
import { create as Nr } from "zustand";
import { useMotionValue as wu, useDragControls as Ed, useTransform as Sd, animate as mr, motion as xu } from "framer-motion";
import { Text as Mo, useGLTF as Ad } from "@react-three/drei";
function Cd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jr = { exports: {} }, ur = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bo;
function Rd() {
  if (Bo) return ur;
  Bo = 1;
  var e = er, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(u, p, d) {
    var f, v = {}, y = null, A = null;
    d !== void 0 && (y = "" + d), p.key !== void 0 && (y = "" + p.key), p.ref !== void 0 && (A = p.ref);
    for (f in p) r.call(p, f) && !c.hasOwnProperty(f) && (v[f] = p[f]);
    if (u && u.defaultProps) for (f in p = u.defaultProps, p) v[f] === void 0 && (v[f] = p[f]);
    return { $$typeof: t, type: u, key: y, ref: A, props: v, _owner: i.current };
  }
  return ur.Fragment = n, ur.jsx = a, ur.jsxs = a, ur;
}
var lr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Do;
function kd() {
  return Do || (Do = 1, process.env.NODE_ENV !== "production" && function() {
    var e = er, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), u = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), U = Symbol.iterator, z = "@@iterator";
    function K(M) {
      if (M === null || typeof M != "object")
        return null;
      var se = U && M[U] || M[z];
      return typeof se == "function" ? se : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function B(M) {
      {
        for (var se = arguments.length, he = new Array(se > 1 ? se - 1 : 0), _e = 1; _e < se; _e++)
          he[_e - 1] = arguments[_e];
        q("error", M, he);
      }
    }
    function q(M, se, he) {
      {
        var _e = R.ReactDebugCurrentFrame, Ye = _e.getStackAddendum();
        Ye !== "" && (se += "%s", he = he.concat([Ye]));
        var Pe = he.map(function(ke) {
          return String(ke);
        });
        Pe.unshift("Warning: " + se), Function.prototype.apply.call(console[M], console, Pe);
      }
    }
    var O = !1, j = !1, k = !1, X = !1, ie = !1, te;
    te = Symbol.for("react.module.reference");
    function xe(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === r || M === c || ie || M === i || M === d || M === f || X || M === A || O || j || k || typeof M == "object" && M !== null && (M.$$typeof === y || M.$$typeof === v || M.$$typeof === a || M.$$typeof === u || M.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === te || M.getModuleId !== void 0));
    }
    function fe(M, se, he) {
      var _e = M.displayName;
      if (_e)
        return _e;
      var Ye = se.displayName || se.name || "";
      return Ye !== "" ? he + "(" + Ye + ")" : he;
    }
    function Q(M) {
      return M.displayName || "Context";
    }
    function Te(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
        return M.displayName || M.name || null;
      if (typeof M == "string")
        return M;
      switch (M) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case c:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case u:
            var se = M;
            return Q(se) + ".Consumer";
          case a:
            var he = M;
            return Q(he._context) + ".Provider";
          case p:
            return fe(M, M.render, "ForwardRef");
          case v:
            var _e = M.displayName || null;
            return _e !== null ? _e : Te(M.type) || "Memo";
          case y: {
            var Ye = M, Pe = Ye._payload, ke = Ye._init;
            try {
              return Te(ke(Pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ue = Object.assign, Fe = 0, bt, tn, Ie, Ct, Pt, Ze, cr;
    function Mr() {
    }
    Mr.__reactDisabledLog = !0;
    function Br() {
      {
        if (Fe === 0) {
          bt = console.log, tn = console.info, Ie = console.warn, Ct = console.error, Pt = console.group, Ze = console.groupCollapsed, cr = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: Mr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: M,
            log: M,
            warn: M,
            error: M,
            group: M,
            groupCollapsed: M,
            groupEnd: M
          });
        }
        Fe++;
      }
    }
    function Ss() {
      {
        if (Fe--, Fe === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ue({}, M, {
              value: bt
            }),
            info: ue({}, M, {
              value: tn
            }),
            warn: ue({}, M, {
              value: Ie
            }),
            error: ue({}, M, {
              value: Ct
            }),
            group: ue({}, M, {
              value: Pt
            }),
            groupCollapsed: ue({}, M, {
              value: Ze
            }),
            groupEnd: ue({}, M, {
              value: cr
            })
          });
        }
        Fe < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var m = R.ReactCurrentDispatcher, w;
    function s(M, se, he) {
      {
        if (w === void 0)
          try {
            throw Error();
          } catch (Ye) {
            var _e = Ye.stack.trim().match(/\n( *(at )?)/);
            w = _e && _e[1] || "";
          }
        return `
` + w + M;
      }
    }
    var o = !1, l;
    {
      var h = typeof WeakMap == "function" ? WeakMap : Map;
      l = new h();
    }
    function g(M, se) {
      if (!M || o)
        return "";
      {
        var he = l.get(M);
        if (he !== void 0)
          return he;
      }
      var _e;
      o = !0;
      var Ye = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Pe;
      Pe = m.current, m.current = null, Br();
      try {
        if (se) {
          var ke = function() {
            throw Error();
          };
          if (Object.defineProperty(ke.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ke, []);
            } catch (vt) {
              _e = vt;
            }
            Reflect.construct(M, [], ke);
          } else {
            try {
              ke.call();
            } catch (vt) {
              _e = vt;
            }
            M.call(ke.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (vt) {
            _e = vt;
          }
          M();
        }
      } catch (vt) {
        if (vt && _e && typeof vt.stack == "string") {
          for (var ze = vt.stack.split(`
`), ot = _e.stack.split(`
`), at = ze.length - 1, ct = ot.length - 1; at >= 1 && ct >= 0 && ze[at] !== ot[ct]; )
            ct--;
          for (; at >= 1 && ct >= 0; at--, ct--)
            if (ze[at] !== ot[ct]) {
              if (at !== 1 || ct !== 1)
                do
                  if (at--, ct--, ct < 0 || ze[at] !== ot[ct]) {
                    var Ot = `
` + ze[at].replace(" at new ", " at ");
                    return M.displayName && Ot.includes("<anonymous>") && (Ot = Ot.replace("<anonymous>", M.displayName)), typeof M == "function" && l.set(M, Ot), Ot;
                  }
                while (at >= 1 && ct >= 0);
              break;
            }
        }
      } finally {
        o = !1, m.current = Pe, Ss(), Error.prepareStackTrace = Ye;
      }
      var Yt = M ? M.displayName || M.name : "", Ht = Yt ? s(Yt) : "";
      return typeof M == "function" && l.set(M, Ht), Ht;
    }
    function b(M, se, he) {
      return g(M, !1);
    }
    function x(M) {
      var se = M.prototype;
      return !!(se && se.isReactComponent);
    }
    function E(M, se, he) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return g(M, x(M));
      if (typeof M == "string")
        return s(M);
      switch (M) {
        case d:
          return s("Suspense");
        case f:
          return s("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case p:
            return b(M.render);
          case v:
            return E(M.type, se, he);
          case y: {
            var _e = M, Ye = _e._payload, Pe = _e._init;
            try {
              return E(Pe(Ye), se, he);
            } catch {
            }
          }
        }
      return "";
    }
    var S = Object.prototype.hasOwnProperty, T = {}, D = R.ReactDebugCurrentFrame;
    function _(M) {
      if (M) {
        var se = M._owner, he = E(M.type, M._source, se ? se.type : null);
        D.setExtraStackFrame(he);
      } else
        D.setExtraStackFrame(null);
    }
    function I(M, se, he, _e, Ye) {
      {
        var Pe = Function.call.bind(S);
        for (var ke in M)
          if (Pe(M, ke)) {
            var ze = void 0;
            try {
              if (typeof M[ke] != "function") {
                var ot = Error((_e || "React class") + ": " + he + " type `" + ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ot.name = "Invariant Violation", ot;
              }
              ze = M[ke](se, ke, _e, he, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (at) {
              ze = at;
            }
            ze && !(ze instanceof Error) && (_(Ye), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _e || "React class", he, ke, typeof ze), _(null)), ze instanceof Error && !(ze.message in T) && (T[ze.message] = !0, _(Ye), B("Failed %s type: %s", he, ze.message), _(null));
          }
      }
    }
    var L = Array.isArray;
    function P(M) {
      return L(M);
    }
    function $(M) {
      {
        var se = typeof Symbol == "function" && Symbol.toStringTag, he = se && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return he;
      }
    }
    function H(M) {
      try {
        return V(M), !1;
      } catch {
        return !0;
      }
    }
    function V(M) {
      return "" + M;
    }
    function ne(M) {
      if (H(M))
        return B("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $(M)), V(M);
    }
    var Y = R.ReactCurrentOwner, le = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, re, ee;
    function de(M) {
      if (S.call(M, "ref")) {
        var se = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function pe(M) {
      if (S.call(M, "key")) {
        var se = Object.getOwnPropertyDescriptor(M, "key").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function oe(M, se) {
      typeof M.ref == "string" && Y.current;
    }
    function Ce(M, se) {
      {
        var he = function() {
          re || (re = !0, B("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        he.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: he,
          configurable: !0
        });
      }
    }
    function ge(M, se) {
      {
        var he = function() {
          ee || (ee = !0, B("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        he.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: he,
          configurable: !0
        });
      }
    }
    var Ee = function(M, se, he, _e, Ye, Pe, ke) {
      var ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: M,
        key: se,
        ref: he,
        props: ke,
        // Record the component responsible for creating this element.
        _owner: Pe
      };
      return ze._store = {}, Object.defineProperty(ze._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ze, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _e
      }), Object.defineProperty(ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ye
      }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
    };
    function Xe(M, se, he, _e, Ye) {
      {
        var Pe, ke = {}, ze = null, ot = null;
        he !== void 0 && (ne(he), ze = "" + he), pe(se) && (ne(se.key), ze = "" + se.key), de(se) && (ot = se.ref, oe(se, Ye));
        for (Pe in se)
          S.call(se, Pe) && !le.hasOwnProperty(Pe) && (ke[Pe] = se[Pe]);
        if (M && M.defaultProps) {
          var at = M.defaultProps;
          for (Pe in at)
            ke[Pe] === void 0 && (ke[Pe] = at[Pe]);
        }
        if (ze || ot) {
          var ct = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          ze && Ce(ke, ct), ot && ge(ke, ct);
        }
        return Ee(M, ze, ot, Ye, _e, Y.current, ke);
      }
    }
    var Me = R.ReactCurrentOwner, ye = R.ReactDebugCurrentFrame;
    function Be(M) {
      if (M) {
        var se = M._owner, he = E(M.type, M._source, se ? se.type : null);
        ye.setExtraStackFrame(he);
      } else
        ye.setExtraStackFrame(null);
    }
    var Ne;
    Ne = !1;
    function He(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function De() {
      {
        if (Me.current) {
          var M = Te(Me.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
    }
    function Ue(M) {
      return "";
    }
    var Re = {};
    function Se(M) {
      {
        var se = De();
        if (!se) {
          var he = typeof M == "string" ? M : M.displayName || M.name;
          he && (se = `

Check the top-level render call using <` + he + ">.");
        }
        return se;
      }
    }
    function Oe(M, se) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var he = Se(se);
        if (Re[he])
          return;
        Re[he] = !0;
        var _e = "";
        M && M._owner && M._owner !== Me.current && (_e = " It was passed a child from " + Te(M._owner.type) + "."), Be(M), B('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', he, _e), Be(null);
      }
    }
    function nt(M, se) {
      {
        if (typeof M != "object")
          return;
        if (P(M))
          for (var he = 0; he < M.length; he++) {
            var _e = M[he];
            He(_e) && Oe(_e, se);
          }
        else if (He(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var Ye = K(M);
          if (typeof Ye == "function" && Ye !== M.entries)
            for (var Pe = Ye.call(M), ke; !(ke = Pe.next()).done; )
              He(ke.value) && Oe(ke.value, se);
        }
      }
    }
    function it(M) {
      {
        var se = M.type;
        if (se == null || typeof se == "string")
          return;
        var he;
        if (typeof se == "function")
          he = se.propTypes;
        else if (typeof se == "object" && (se.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        se.$$typeof === v))
          he = se.propTypes;
        else
          return;
        if (he) {
          var _e = Te(se);
          I(he, M.props, "prop", _e, M);
        } else if (se.PropTypes !== void 0 && !Ne) {
          Ne = !0;
          var Ye = Te(se);
          B("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ye || "Unknown");
        }
        typeof se.getDefaultProps == "function" && !se.getDefaultProps.isReactClassApproved && B("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ut(M) {
      {
        for (var se = Object.keys(M.props), he = 0; he < se.length; he++) {
          var _e = se[he];
          if (_e !== "children" && _e !== "key") {
            Be(M), B("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _e), Be(null);
            break;
          }
        }
        M.ref !== null && (Be(M), B("Invalid attribute `ref` supplied to `React.Fragment`."), Be(null));
      }
    }
    var yt = {};
    function Mt(M, se, he, _e, Ye, Pe) {
      {
        var ke = xe(M);
        if (!ke) {
          var ze = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ot = Ue();
          ot ? ze += ot : ze += De();
          var at;
          M === null ? at = "null" : P(M) ? at = "array" : M !== void 0 && M.$$typeof === t ? (at = "<" + (Te(M.type) || "Unknown") + " />", ze = " Did you accidentally export a JSX literal instead of a component?") : at = typeof M, B("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", at, ze);
        }
        var ct = Xe(M, se, he, Ye, Pe);
        if (ct == null)
          return ct;
        if (ke) {
          var Ot = se.children;
          if (Ot !== void 0)
            if (_e)
              if (P(Ot)) {
                for (var Yt = 0; Yt < Ot.length; Yt++)
                  nt(Ot[Yt], M);
                Object.freeze && Object.freeze(Ot);
              } else
                B("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              nt(Ot, M);
        }
        if (S.call(se, "key")) {
          var Ht = Te(M), vt = Object.keys(se).filter(function(Fr) {
            return Fr !== "key";
          }), un = vt.length > 0 ? "{key: someKey, " + vt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!yt[Ht + un]) {
            var Dr = vt.length > 0 ? "{" + vt.join(": ..., ") + ": ...}" : "{}";
            B(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, un, Ht, Dr, Ht), yt[Ht + un] = !0;
          }
        }
        return M === r ? ut(ct) : it(ct), ct;
      }
    }
    function nn(M, se, he) {
      return Mt(M, se, he, !0);
    }
    function cn(M, se, he) {
      return Mt(M, se, he, !1);
    }
    var hn = cn, Xt = nn;
    lr.Fragment = r, lr.jsx = hn, lr.jsxs = Xt;
  }()), lr;
}
var Fo;
function Td() {
  return Fo || (Fo = 1, process.env.NODE_ENV === "production" ? jr.exports = Rd() : jr.exports = kd()), jr.exports;
}
var N = Td();
class Eu extends We.Vector3 {
  constructor(t = [0, 0, 0], n, r) {
    if (typeof t == "number" && n !== void 0 && r !== void 0)
      super(t, n, r);
    else {
      const i = t instanceof We.Vector3 ? [t.x, t.y, t.z] : Array.isArray(t) ? t : [0, 0, 0];
      super(...i);
    }
  }
  addX(t) {
    return this.x += t, this;
  }
  addY(t) {
    return this.y += t, this;
  }
  addZ(t) {
    return this.z += t, this;
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
}
class _d extends We.Euler {
  constructor(t = [0, 0, 0], n, r) {
    if (typeof t == "number" && n !== void 0 && r !== void 0)
      super(t, n, r);
    else {
      const i = t instanceof We.Euler ? [t.x, t.y, t.z] : Array.isArray(t) ? t : [0, 0, 0];
      super(...i);
    }
  }
  addX(t) {
    return this.x += t, this;
  }
  addY(t) {
    return this.y += t, this;
  }
  addZ(t) {
    return this.z += t, this;
  }
  setFromRotationMatrix(t) {
    return super.setFromRotationMatrix(t), this;
  }
  setFromQuaternion(t) {
    return super.setFromQuaternion(t), this;
  }
  toArray() {
    return [this.x, this.y, this.z];
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
}
class dn extends Eu {
  constructor(t = [0, 0, 0], n, r) {
    if (typeof t == "number" && n !== void 0 && r !== void 0)
      super(t, n, r);
    else {
      const i = t instanceof We.Vector3 || Array.isArray(t) ? t : [t, 0, 0];
      super(i);
    }
  }
  /** Returns the modified Position based on addition */
  add(t) {
    return t ? (this.x += t.x, this.y += t.y, this.z += t.z, this) : this;
  }
  /** Returns the modified Position based on subtraction */
  substract(t) {
    return t ? (this.x -= t.x, this.y -= t.y, this.z -= t.z, this) : this;
  }
  /** Returns a new Position instance based on addition */
  addedPosition(t) {
    const n = t instanceof dn ? t : new dn(t);
    return this.clone().add(n);
  }
  /** Returns a new Position instance based on subtraction */
  substractedPosition(t) {
    const n = t instanceof dn ? t : new dn(t);
    return this.clone().substract(n);
  }
  toString() {
    return `Position (x: ${this.x}, y: ${this.y}, z: ${this.z})`;
  }
  toJSON() {
    return { x: this.x, y: this.y, z: this.z };
  }
}
class yn extends _d {
  constructor(t = [0, 0, 0], n, r) {
    if (typeof t == "number" && n !== void 0 && r !== void 0)
      super(t, n, r);
    else {
      const i = t instanceof We.Euler || Array.isArray(t) ? t : [0, t, 0];
      super(i);
    }
  }
  /** Returns the modified Rotation based on addition */
  add(t) {
    return t ? (this.x += t.x, this.y += t.y, this.z += t.z, this) : this;
  }
  /** Returns the modified Rotation based on subtraction */
  substract(t) {
    return t ? (this.x -= t.x, this.y -= t.y, this.z -= t.z, this) : this;
  }
  /** Returns a new Rotation instance based on addition */
  addedRotation(t) {
    const n = t instanceof yn ? t : new yn(t);
    return this.clone().add(n);
  }
  /** Returns a new Rotation instance based on subtraction */
  substractedRotation(t) {
    const n = t instanceof yn ? t : new yn(t);
    return this.clone().substract(n);
  }
  toString() {
    return `Rotation (x: ${this.x}, y: ${this.y}, z: ${this.z})`;
  }
  toJSON() {
    return { x: this.x, y: this.y, z: this.z };
  }
}
class Gr extends Eu {
  constructor(t = [1, 1, 1], n, r) {
    if (typeof t == "number" && n !== void 0 && r !== void 0)
      super(t, n, r);
    else {
      const i = t instanceof We.Vector3 || Array.isArray(t) ? t : [t, t, t];
      super(i);
    }
  }
  toString() {
    return `Scale (x: ${this.x}, y: ${this.y}, z: ${this.z})`;
  }
  toJSON() {
    return { x: this.x, y: this.y, z: this.z };
  }
}
function Su(e, t) {
  const r = e.latitude * Math.PI / 180, i = t.latitude * Math.PI / 180, c = e.longitude * Math.PI / 180, a = t.longitude * Math.PI / 180, u = i - r, p = a - c, d = Math.sin(u / 2) ** 2 + Math.cos(r) * Math.cos(i) * Math.sin(p / 2) ** 2, v = 6371e3 * (2 * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d))), y = v * Math.cos((r + i) / 2), A = v * Math.sin((r + i) / 2), U = (t.altitude ?? 0) - (e.altitude ?? 0);
  return { x: y, y: U, z: A };
}
function Od(e, t) {
  const { x: n, y: r, z: i } = Su(e, t);
  return new dn(n, r, i);
}
function Id(e) {
  let t = "undef";
  return e >= 337.5 || e < 22.5 ? t = "N" : e >= 22.5 && e < 67.5 ? t = "NE" : e >= 67.5 && e < 112.5 ? t = "E" : e >= 112.5 && e < 157.5 ? t = "SE" : e >= 157.5 && e < 202.5 ? t = "S" : e >= 202.5 && e < 247.5 ? t = "SW" : e >= 247.5 && e < 292.5 ? t = "W" : e >= 292.5 && e < 337.5 && (t = "NW"), t;
}
function Au(e, t, n, r) {
  const [i, c] = Ve(0), [a, u] = Ve("undef"), [p, d] = Ve({ alpha: 0, beta: 0, gamma: 0 }), [f, v] = Ve(null);
  return Et(() => {
    if (!i || !p) {
      console.warn("Invalid compass heading.");
      return;
    }
    if (!f) {
      i != 0 && v(i);
      return;
    }
    if (Math.abs(f - i) < 0.1)
      return;
    let y = (i - f + 540) % 360 - 180;
    v((f + y * 0.1 + 360) % 360);
    let A = Id(f);
    u(A);
  }, [i]), Et(() => {
    const y = () => typeof window > "u" ? !1 : window.DeviceOrientationEvent ? !0 : (alert("Your device does not support compass functionality."), c(0), u("N"), !1), A = (K) => {
      var O;
      let R = 0;
      if (K.alpha !== null) {
        const j = ((O = window.screen.orientation) == null ? void 0 : O.angle) || 0;
        R = (360 - K.alpha + j) % 360;
      } else {
        c(0), u("N");
        return;
      }
      const B = 0;
      if (R !== void 0) {
        const j = (R + B + 360) % // + offsetRef.current) %
        360;
        c(j);
        var q = {
          alpha: K.alpha ?? 0,
          beta: K.beta ?? 0,
          gamma: K.gamma ?? 0
        };
        d(q);
      }
    }, U = "deviceorientationabsolute";
    (async () => {
      if (y())
        if (typeof DeviceOrientationEvent < "u" && // @ts-expect-error requestPermission is supported in iOS
        typeof DeviceOrientationEvent.requestPermission == "function")
          try {
            await DeviceOrientationEvent.requestPermission() === "granted" && window.addEventListener(U, A);
          } catch (K) {
            console.error("Error requesting orientation permission:", K);
          }
        else
          return window.addEventListener(U, A), () => window.removeEventListener(U, A);
    })();
  }, []), [i, f, a, p];
}
function Nd(e = 20, t) {
  const n = {
    coords: {
      longitude: 0,
      latitude: 0,
      altitude: 0,
      heading: 0,
      accuracy: 0,
      altitudeAccuracy: null,
      speed: 0,
      toJSON: function() {
        return {
          longitude: this.longitude,
          latitude: this.latitude,
          altitude: this.altitude,
          heading: this.heading,
          accuracy: this.accuracy,
          altitudeAccuracy: this.altitudeAccuracy,
          speed: this.speed
        };
      }
    },
    timestamp: Date.now(),
    toJSON: function() {
      return {
        coords: this.coords,
        timestamp: this.timestamp
      };
    }
  }, [r, i] = Ve(n), [c, a] = Ve(null);
  return Et(() => {
    const u = (f) => {
      if (!(!f.coords.latitude && !f.coords.longitude)) {
        if (i(f), f.coords.accuracy > e)
          return console.log("Received inaccurate geolocation:", f.coords.accuracy), null;
        console.log("Received accurate and valid geolocation:", f), a(f);
      }
    }, p = (f) => {
      console.error("Geolocation error:", f);
    }, d = navigator.geolocation.watchPosition(u, p, {
      enableHighAccuracy: !0,
      maximumAge: 1e4,
      timeout: 5e3
    });
    return () => navigator.geolocation.clearWatch(d);
  }, []), [r, c];
}
function Pd(e, t) {
  const [n, r] = Ve([]);
  return Et(() => {
    e && r((i) => {
      const c = [...i, e.coords];
      return c.length > t ? c.slice(1) : c;
    });
  }, [e]), [n];
}
function Md(e, t) {
  const n = Math.abs(e - t);
  return Math.min(n, 360 - n);
}
function Ci(e) {
  if (e.length < 4) return e;
  const t = [...e].sort((c, a) => c - a), n = t[Math.floor(t.length * 0.25)], r = t[Math.floor(t.length * 0.75)], i = r - n;
  return e.filter((c) => c >= n - 1.5 * i && c <= r + 1.5 * i);
}
function Ri(e) {
  if (e.length === 0) return 0;
  const t = e.map((r, i) => i + 1), n = t.reduce((r, i) => r + i, 0);
  return e.reduce((r, i, c) => r + i * t[c], 0) / n;
}
function Bd(e) {
  if (e.length === 0) return 0;
  const t = [...e].sort((r, i) => r - i), n = Math.floor(t.length / 2);
  return t.length % 2 !== 0 ? t[n] : (t[n - 1] + t[n]) / 2;
}
function Dd(e) {
  const t = new We.Vector3(0, 0, -1).applyQuaternion(e.quaternion);
  t.y = 0, t.normalize();
  const n = Math.atan2(t.x, t.z);
  return 360 - (We.MathUtils.radToDeg(n) + 540) % 360;
}
function Fd(e, t, n, r) {
  const [u, p] = Ve([]), [d, f] = Ve(null), [v, y] = Ve([]), [A, U] = Ve(null), z = on(0), K = on(0), R = on(0);
  return Et(() => {
    if (!t || !n) {
      console.warn("Invalid smoothed compass heading or phone tilt data.");
      return;
    }
    if (
      // Skip update if phone tilt is extreme
      n.beta == null || n.beta < 25 || n.beta > 45
    )
      return;
    function B(xe, fe) {
      const Q = Dd(fe);
      return We.MathUtils.degToRad((540 - xe + Q) % 360);
    }
    const q = B(t, r);
    if (!q) return;
    f(q);
    const O = Date.now();
    if (O - R.current > 250) {
      const xe = [...u, q].slice(-12);
      p(xe), R.current = O;
    }
    if (O - z.current < 1500) return;
    z.current = O;
    const j = Ci(u), k = Ri(j), X = A ? Math.abs(Md(A, k)) : 0, ie = Math.max(2, X / 3), te = O - K.current;
    if ((!A || X > ie || te > 3e3 * 5) && te > 3e3) {
      console.log("Significant rotation drift detected. Updating reference history heading.");
      const xe = [...v, k].slice(-5);
      y(xe);
      const fe = Bd(xe.length > 3 ? xe : [q]);
      U(fe), K.current = O;
    }
  }, [t, n]), [d, A];
}
const Cu = {
  longitude: 0,
  latitude: 0,
  altitude: 0
};
function jd(e, t, n, r) {
  const [i, c] = Ve(Date.now()), [a, u] = Ve(null), [p, d] = Ve(null), [f, v] = Ve([]), [y, A] = Ve(null), [U, z] = Ve(0);
  return Et(() => {
    if (!e || e.length === 0) {
      console.warn("No coordinate history available.");
      return;
    }
    const K = Date.now();
    if (K - U < 1e3) return;
    z(K);
    const R = Ci(e.map((xe) => xe.latitude)), B = Ci(e.map((xe) => xe.longitude)), q = e.reduce((xe, fe) => xe + fe.accuracy, 0) / e.length, O = e.reduce((xe, fe) => xe + (fe.altitudeAccuracy ?? q), 0) / e.length, j = e[e.length - 1], k = e.length < t / 3 ? j : {
      latitude: Ri(R),
      longitude: Ri(B),
      altitude: 0,
      //getExponentialMovingAverage(filteredAltitudes),
      heading: j.heading ?? 0,
      accuracy: q,
      altitudeAccuracy: O,
      speed: j.speed ?? 0,
      toJSON: j.toJSON
    };
    if (y && Math.abs(y.latitude - k.latitude) < 1e-5 && Math.abs(y.longitude - k.longitude) < 1e-5 && Math.abs((y.altitude ?? 0) - (k.altitude ?? 0)) < 0.1)
      return;
    A(k);
    const X = Od(Cu, k);
    if (X.y = 0, u({ coordinates: k, position: X }), e.length < t) return;
    const ie = Math.max(1, k.speed ?? 1), te = Math.max(3, q / 2, ie * 3);
    if (!p)
      d({ coordinates: k, position: X });
    else {
      const xe = p.position.substractedPosition(X), fe = Math.sqrt(xe.x ** 2 + xe.z ** 2) > te, Q = Date.now();
      if (fe) {
        console.log(`Large geolocation drift detected! Waiting ${1e4 / 1e3} seconds for updating reference location...`);
        const ue = [...f, { coordinates: k, position: X }].slice(-7).sort((Fe, bt) => {
          const tn = Math.sqrt(Fe.position.x ** 2 + Fe.position.z ** 2), Ie = Math.sqrt(bt.position.x ** 2 + bt.position.z ** 2);
          return tn - Ie;
        });
        if (ue.length < 3 || Q - i > 1e4) {
          console.log("Updating reference coordinates due to sustained drift:", k);
          const Fe = ue[Math.floor(ue.length / 2)];
          v(ue), d(Fe), c(Q);
        }
      } else
        console.log("Drift has stabilized; stopping reference updates."), c(Q);
    }
  }, [e]), [a, p];
}
function Ld(e, t, n, r) {
  const i = performance.now();
  function c() {
    const a = performance.now() - i, u = Math.min(a / n, 1), p = e + (t - e) * u;
    r(p), u < 1 && requestAnimationFrame(c);
  }
  requestAnimationFrame(c);
}
function Ud(e, t, n, r) {
  const i = performance.now();
  function c() {
    const a = performance.now() - i, u = Math.min(a / n, 1), p = new We.Vector3(
      e.x + (t.x - e.x) * u,
      e.y + (t.y - e.y) * u,
      e.z + (t.z - e.z) * u
    );
    r(p), u < 1 && requestAnimationFrame(c);
  }
  requestAnimationFrame(c);
}
function $d(e, t, n, r) {
  Ud(e, t, n, (i) => {
    r(new dn(...i));
  });
}
function Hd(e) {
  const [t, n, r, i] = Au(), [c, a] = Fd(t, n, i, e);
  return {
    compassHeading: t,
    smoothedHeading: n,
    compassCardinal: r,
    phoneTilt: i,
    currentRotation: c,
    rotationReference: a
  };
}
const ys = Nr((e, t) => ({
  messages: [],
  addScreenMessage: (n, r, i = void 0, c = "white") => (r = r ?? n + Math.random().toString(5), e((a) => a.messages.some((u) => u.id === r) ? a : (i && setTimeout(() => t().removeScreenMessage(r), i), {
    messages: [...a.messages, { id: r, text: n, duration: i, color: c ?? "white" }]
  })), r),
  removeScreenMessage: (n) => e((r) => ({
    messages: r.messages.filter((i) => i.id !== n)
  }))
}));
function zd(e, t = Math.PI / 2, n = 1) {
  const {
    rotationReference: r
  } = Hd(e), [i, c] = Ve(null), { addScreenMessage: a } = ys();
  return Et(() => {
    if (r) {
      if (!i) {
        a("Compass initialized.", "compass_initialized", 3e3, "green"), c(r);
        return;
      }
      Math.abs(r - i) > t ? (a("The compass seems very unstable.", "compass_very_unstable", 3e3, "red"), c(r)) : (Math.abs(r - i) > 2 && a("The compass seems a litte unstable.", "compass_little_unstable", 3e3, "orange"), Ld(i, r, n * 1e3, (u) => {
        c(u);
      }));
    }
  }, [r]), [i ?? 0];
}
function Kd(e = 35, t = 10) {
  const [n, r] = Nd(e), [i] = Pd(r ?? n, t), [c, a] = jd(i, t);
  return {
    currentGeolocation: n,
    locationHistory: i,
    currentWorldPosition: c,
    referenceWorldPosition: a
  };
}
function qd(e = 15, t = 1) {
  const {
    currentWorldPosition: n,
    referenceWorldPosition: r
  } = Kd(35, 10), i = 2, [c, a] = Ve(null), { addScreenMessage: u } = ys();
  return Et(() => {
    if (!(r != null && r.position)) return;
    if (!c) {
      u("GPS position initialized.", "gps_initialized", 3e3, "green"), a(r.position);
      return;
    }
    const p = r.position.distanceTo(c);
    p > e ? (u("The GPS position seems very unstable.", "gps_very_unstable", 3e3, "red"), a(r.position)) : p > i && (u("The GPS position seems a litte unstable.", "gps_little_unstable", 3e3, "orange"), $d(c, r.position, t * 1e3, (d) => {
      a(d);
    }));
  }, [r]), [c ?? (n == null ? void 0 : n.position) ?? new dn()];
}
const Vd = ({ showCardinal: e = !0 }) => {
  const [t, n, r, i] = Au();
  return /* @__PURE__ */ N.jsxs("div", { id: "compass-container", children: [
    /* @__PURE__ */ N.jsxs("div", { id: "compass-arrow-container", style: { transform: `rotate(${-(n ?? t)}deg)` }, children: [
      /* @__PURE__ */ N.jsx("div", { id: "compass-arrow-north" }),
      /* @__PURE__ */ N.jsx("div", { id: "compass-arrow-south" })
    ] }),
    e && r && /* @__PURE__ */ N.jsx("p", { id: "compass-cardinal", children: r })
  ] });
}, Gd = ({ headingInRad: e, cameraPosition: t }) => {
  const n = on(null), r = on(null);
  return ms(() => {
    r.current && (r.current.rotation.z = e);
  }), /* @__PURE__ */ N.jsxs("group", { ref: n, position: [t.x, 0, t.z], rotation: [Math.PI / 2, 0, 0], children: [
    /* @__PURE__ */ N.jsxs("mesh", { children: [
      /* @__PURE__ */ N.jsx("torusGeometry", { args: [0.125, 5e-3, 8, 30] }),
      /* @__PURE__ */ N.jsx("meshStandardMaterial", { color: "gray", metalness: 1, roughness: 0.7 })
    ] }),
    /* @__PURE__ */ N.jsxs("group", { ref: r, children: [
      /* @__PURE__ */ N.jsxs("mesh", { position: [0, -0.05, 0], children: [
        /* @__PURE__ */ N.jsx("cylinderGeometry", { args: [0.04, 0, 0.1, 8] }),
        /* @__PURE__ */ N.jsx("meshStandardMaterial", { color: "blue", metalness: 1, roughness: 0.8 })
      ] }),
      /* @__PURE__ */ N.jsxs("mesh", { position: [0, 0.05, 0], children: [
        /* @__PURE__ */ N.jsx("cylinderGeometry", { args: [0, 0.04, 0.1, 8] }),
        /* @__PURE__ */ N.jsx("meshStandardMaterial", { color: "red", metalness: 1, roughness: 0.8 })
      ] })
    ] })
  ] });
}, As = ({
  isVisible: e,
  headerHeight: t,
  variantName: n,
  onClose: r,
  onMinimize: i,
  children: c,
  fontSize: a
}) => {
  const u = typeof window < "u" ? window.innerHeight : 800, d = [
    1,
    // Closed
    0.915,
    // Minimized
    0.5,
    // Half screen
    t / u
    // Full screen
  ].map((z) => z * u), f = wu(u), v = Ed(), [y, A] = Ve(e), U = Sd(f, (z) => `${u - z}px`);
  return Et(() => {
    e ? (A(!0), mr(f, d[2], { duration: 0.2, ease: "easeOut" })) : mr(f, d[0], {
      duration: 0.2,
      ease: "easeOut",
      onComplete: () => A(!1)
    });
  }, [e]), y ? /* @__PURE__ */ N.jsxs(
    xu.div,
    {
      className: "bottom-sheet",
      style: { y: f, height: U },
      drag: "y",
      dragControls: v,
      dragListener: !1,
      dragConstraints: { top: d[3], bottom: d[1] },
      dragElastic: 0.2,
      dragMomentum: !1,
      onDragEnd: (z, K) => {
        const R = f.get(), B = K.velocity.y, q = Math.sign(B), O = d.filter((k) => q === -1 ? k < R : k > R).sort((k, X) => Math.abs(k - R) - Math.abs(X - R)), j = Math.max(d[3], Math.min(d[1], O[0] ?? d[3]));
        i == null || i(j === d[1]), mr(f, j, { duration: 0.2, ease: "easeOut" });
      },
      children: [
        /* @__PURE__ */ N.jsx(
          "div",
          {
            className: "bottom-sheet-handle",
            onPointerDown: (z) => v.start(z),
            children: /* @__PURE__ */ N.jsx("div", {})
          }
        ),
        /* @__PURE__ */ N.jsx("div", { className: "bottom-sheet-content-header", children: /* @__PURE__ */ N.jsx("div", { className: "minh-100 d-flex flex-column", style: { fontSize: `${a * 0.8}px` }, children: /* @__PURE__ */ N.jsxs("div", { className: "row align-items-center", children: [
          /* @__PURE__ */ N.jsx("div", { className: "col-10", children: /* @__PURE__ */ N.jsx("h3", { children: n }) }),
          /* @__PURE__ */ N.jsx("div", { className: "col-2 d-flex justify-content-end align-items-center", children: /* @__PURE__ */ N.jsx(
            "i",
            {
              className: "fas fa-times",
              onClick: r,
              style: { cursor: "pointer", fontSize: `${a * 0.8}px` }
            }
          ) })
        ] }) }) }),
        /* @__PURE__ */ N.jsx("div", { className: "bottom-sheet-content", children: c })
      ]
    }
  ) : null;
}, Wd = ({ isHelpVisible: e, onToggleHelp: t, onLeave: n, fontSize: r }) => /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
  /* @__PURE__ */ N.jsx("div", { id: "arc-logo-header", className: "py-1 px-3", style: { fontSize: `${r}px` }, children: /* @__PURE__ */ N.jsx("span", { className: "border-0 fw-bold text-uppercase text-dark", children: "ARPAS" }) }),
  /* @__PURE__ */ N.jsxs("div", { id: "arc-header", className: "py-2 px-3", style: { fontSize: `${r}px` }, children: [
    /* @__PURE__ */ N.jsx("button", { className: "border-0 fw-bold text-uppercase text-dark", onClick: n, children: /* @__PURE__ */ N.jsxs("small", { children: [
      /* @__PURE__ */ N.jsx("i", { className: "fas fa-arrow-left", "aria-hidden": "true" }),
      " Leave AR"
    ] }) }),
    /* @__PURE__ */ N.jsx("button", { className: "border-0 fw-bold text-uppercase text-dark", onClick: t, children: /* @__PURE__ */ N.jsx("small", { children: e ? /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
      /* @__PURE__ */ N.jsx("i", { className: "fas fa-times", "aria-hidden": "true" }),
      " Close Help"
    ] }) : /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
      /* @__PURE__ */ N.jsx("i", { className: "fas fa-info-circle" }),
      " Help"
    ] }) }) })
  ] })
] }), Xd = 1e4;
let Cr = "";
function Yd(e) {
  const n = `; ${document.cookie}`.split(`; ${e}=`);
  return n.length === 2 ? n.pop().split(";").shift() : "";
}
function bs(e = {}) {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRFToken": Yd("csrftoken"),
    ...e
  };
}
async function Ki(e, t = {}) {
  const { timeout: n = Xd, headers: r = {}, ...i } = t, c = new AbortController(), a = setTimeout(() => c.abort(), n);
  try {
    const u = await fetch(e, {
      ...i,
      headers: bs(r),
      signal: c.signal
    });
    clearTimeout(a);
    let p;
    const d = u.headers.get("content-type");
    return d && d.includes("application/json") ? p = await u.json() : p = await u.text(), { data: p, status: u.status, ok: u.ok };
  } catch (u) {
    if (clearTimeout(a), u instanceof Error && u.name === "AbortError") {
      const p = `Request timeout after ${n}ms`;
      throw console.error(p), new Error(p);
    }
    throw console.error("Fetch error:", u), u instanceof Error ? u : new Error("Unknown error occurred");
  }
}
async function Ru(e, t = {}) {
  const n = await Ki(e, {
    ...t,
    method: "GET",
    credentials: "include",
    headers: bs(t.headers)
  });
  if (!n.ok) {
    const r = new Error(`GET ${e} failed with status ${n.status}`);
    throw r.status = n.status, console.error("Get error:", r), r;
  }
  return n.data;
}
async function ku(e, t, n = {}) {
  const r = await Ki(e, {
    ...n,
    method: "POST",
    credentials: "include",
    headers: bs(n.headers),
    body: t ? JSON.stringify(t) : void 0
  });
  if (!r.ok) {
    const i = new Error(`POST ${e} failed with status ${r.status}`);
    throw i.status = r.status, console.error(Tu(`POST ${e}`, i, r)), i;
  }
  return r.data;
}
async function Zd(e, t, n = {}) {
  const r = await Ki(e, {
    ...n,
    method: "PATCH",
    credentials: "include",
    headers: bs(n.headers),
    body: t ? JSON.stringify(t) : void 0
  });
  if (!r.ok) {
    const i = new Error(`PATCH ${e} failed with status ${r.status}`);
    throw i.status = r.status, console.error(Tu(`PATCH ${e}`, i, r)), i;
  }
  return r.data;
}
function Tu(e, t, n) {
  if (t) {
    const r = t;
    return r.message = "", e && e.length > 0 && (r.message = e), r.status === 400 ? r.message += " Bad request" : r.status === 401 ? r.message += " Authentication required" : r.status === 403 ? r.message += " Permission denied" : r.status === 404 ? r.message += " Resource not found" : r.status === 422 ? r.message += " Validation error" : r.status === 500 ? r.message += " Server error" : r.message += ` ${t.status}`, n && (r.message += ", response: " + JSON.stringify(n.data)), r.message;
  }
  return "Unknown error occurred";
}
async function Jd(e, t) {
  const n = `${Cr}/api/contenttypes/${e}/objects/${t}/arpas-comments/`, r = await Ru(n);
  return Array.isArray(r == null ? void 0 : r.results) ? r.results : Array.isArray(r) ? r : [];
}
async function Qd(e, t, n, r) {
  const i = `${Cr}/api/contenttypes/${e}/objects/${t}/arpas-comments/`, c = { comment: n, agreed_terms_of_use: !0 };
  return r && (c.parent = r), ku(i, c);
}
async function ef(e, t) {
  const n = `${Cr}/api/contenttypes/${e}/objects/${t}/arpas-ratings/`, r = await Ru(n);
  return Array.isArray(r == null ? void 0 : r.results) ? r.results : Array.isArray(r) ? r : [];
}
async function Lr(e, t, n, r, i, c) {
  const a = i === "like" ? 1 : i === "dislike" ? -1 : 0;
  if (c) {
    const d = `${Cr}/api/contenttypes/${e}/objects/${t}/arpas-ratings/${c}/`, f = { value: a, agreed_terms_of_use: !0 };
    try {
      return await Zd(d, f);
    } catch (v) {
      const y = v == null ? void 0 : v.status;
      if (y === 404 || y === 405)
        console.warn("PATCH rating not supported, falling back to POST", v);
      else
        throw v;
    }
  }
  const u = `${Cr}/api/contenttypes/${e}/objects/${t}/arpas-ratings/`;
  return await ku(u, { target: n, target_id: r, value: a, agreed_terms_of_use: !0 });
}
function jo(e) {
  var t, n;
  return {
    id: e.id,
    objectPk: e.object_pk,
    parentId: e.parent ?? null,
    text: e.comment,
    userName: e.user_name,
    created: e.created,
    likes: ((t = e.ratings) == null ? void 0 : t.positive_ratings) ?? 0,
    dislikes: ((n = e.ratings) == null ? void 0 : n.negative_ratings) ?? 0
  };
}
function Vn(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function tf(e) {
  const t = [], n = [{ node: e, parentId: e.parent ?? null }];
  for (; n.length; ) {
    const { node: r, parentId: i } = n.pop(), c = { ...r, parent: i ?? r.parent ?? null, child_comments: void 0 };
    t.push(c);
    const a = r.child_comments || [];
    for (let u = 0; u < a.length; u++) {
      const p = a[u];
      n.push({ node: p, parentId: r.id });
    }
  }
  return t;
}
const Cn = Nr((e, t) => ({
  variantContentType: 0,
  commentContentType: 0,
  byId: {},
  rootIdsByObject: {},
  childIds: {},
  loadingObjects: /* @__PURE__ */ new Set(),
  setVariantContentType: (n) => {
    e({ variantContentType: n });
  },
  getVariantContentType: () => t().variantContentType,
  setCommentContentType: (n) => {
    e({ commentContentType: n });
  },
  getCommentContentType: () => t().commentContentType,
  initFromScene: (n) => {
    n && e((r) => {
      const i = { ...r.byId }, c = { ...r.rootIdsByObject }, a = { ...r.childIds };
      return n.forEach((u) => {
        const p = `${u.id}`;
        c[p] || (c[p] = []);
        const d = [];
        (u.comments || []).forEach((f) => {
          i[f.id] = {
            id: f.id,
            objectPk: u.id,
            parentId: null,
            text: f.text,
            userName: f.username,
            created: new Date(f.timestamp).toISOString()
          }, d.push(f.id), (f.replies || []).forEach((v) => {
            i[v.id] = {
              id: v.id,
              objectPk: u.id,
              parentId: v.commentId,
              text: v.text,
              userName: v.username,
              created: new Date(v.timestamp).toISOString()
            }, a[v.commentId] || (a[v.commentId] = []), Vn(a[v.commentId], v.id);
          });
        }), c[p] = d.reverse(), Object.keys(a).forEach((f) => {
          const v = Number(f);
          a[v] = a[v].reverse();
        });
      }), { byId: i, rootIdsByObject: c, childIds: a };
    });
  },
  ensureObjectLoaded: (n) => {
    const r = `${n}`, i = t();
    i.loadingObjects.has(r) || (i.loadingObjects.add(r), Jd(i.variantContentType, n).then((c) => {
      const a = [];
      for (const u of c)
        Array.isArray(u.child_comments) && u.child_comments.length ? a.push(...tf(u)) : a.push(u);
      e((u) => {
        const p = { ...u.byId }, d = { ...u.rootIdsByObject }, f = { ...u.childIds }, v = [];
        return a.forEach((y) => {
          const A = jo(y);
          p[A.id] = { ...p[A.id] || {}, ...A, _optimistic: !1, _pending: !1 };
        }), a.forEach((y) => {
          const A = y.id;
          y.parent ? (f[y.parent] || (f[y.parent] = []), Vn(f[y.parent], A)) : v.push(A);
        }), d[r] = v.reverse(), { byId: p, rootIdsByObject: d, childIds: f };
      });
    }).catch((c) => console.debug("Comment refresh failed:", c)).finally(() => {
      e((c) => {
        const a = new Set(c.loadingObjects);
        return a.delete(r), { loadingObjects: a };
      });
    }));
  },
  getCommentRoots: (n) => {
    const r = `${n}`, i = t();
    return (i.rootIdsByObject[r] || []).map((c) => i.byId[c]).filter(Boolean);
  },
  getReplyComments: (n) => {
    const r = t();
    return (r.childIds[n] || []).map((i) => r.byId[i]).filter(Boolean);
  },
  addComment: async (n, r, i) => {
    const c = -Date.now(), a = `${n}`;
    e((u) => {
      const p = { ...u.byId }, d = { ...u.rootIdsByObject }, f = { ...u.childIds };
      return p[c] = {
        id: c,
        objectPk: n,
        parentId: i ?? null,
        text: r,
        likes: 0,
        dislikes: 0,
        _optimistic: !0,
        _pending: !0
      }, i ? (f[i] || (f[i] = []), f[i].unshift(c)) : (d[a] || (d[a] = []), d[a].unshift(c)), i ? (f[i] = (f[i] || []).filter((v) => v !== c), Vn(f[i], c)) : (d[a] = (d[a] || []).filter((v) => v !== c), Vn(d[a], c)), { byId: p, rootIdsByObject: d, childIds: f };
    });
    try {
      const u = await Qd(i === void 0 ? t().variantContentType : t().commentContentType, i ?? n, r, i);
      e((p) => {
        const d = { ...p.byId }, f = { ...p.childIds }, v = { ...p.rootIdsByObject };
        delete d[c];
        const y = jo({ ...u, parent: u.parent ?? i ?? null });
        return d[y.id] = y, y.parentId ? (f[y.parentId] = (f[y.parentId] || []).filter((A) => A !== c && A !== y.id), Vn(f[y.parentId], y.id)) : (v[a] = (v[a] || []).filter((A) => A !== c && A !== y.id), Vn(v[a], y.id)), { byId: d, childIds: f, rootIdsByObject: v };
      });
    } catch (u) {
      e((p) => {
        const d = { ...p.byId }, f = { ...p.childIds }, v = { ...p.rootIdsByObject };
        return delete d[c], i ? f[i] && (f[i] = f[i].filter((y) => y !== c)) : v[a] && (v[a] = v[a].filter((y) => y !== c)), { byId: d, childIds: f, rootIdsByObject: v };
      }), console.warn("Add comment failed:", u);
    }
    await t().ensureObjectLoaded(n);
  }
})), An = (e, t, n, r) => `${e}:${t}:${n}:${r}`;
function dr(e, t) {
  var a, u, p, d;
  const n = An(t.content_type, t.object_pk, t.target, t.target_id), i = { ...e[n] ?? {
    key: n,
    target: t.target,
    contentType: t.content_type,
    objectPk: t.object_pk,
    targetId: t.target_id,
    likes: 0,
    dislikes: 0,
    isLiked: !1,
    isDisliked: !1,
    ratingId: null
  } };
  typeof t.positive_rating_count == "number" ? i.likes = t.positive_rating_count : typeof ((a = t.meta_info) == null ? void 0 : a.positive_ratings_on_same_object) == "number" && (i.likes = t.meta_info.positive_ratings_on_same_object), typeof t.negative_rating_count == "number" ? i.dislikes = t.negative_rating_count : typeof ((u = t.meta_info) == null ? void 0 : u.negative_ratings_on_same_object) == "number" && (i.dislikes = t.meta_info.negative_ratings_on_same_object);
  const c = typeof t.value == "number" ? t.value : typeof ((p = t.meta_info) == null ? void 0 : p.user_rating_on_same_object_value) == "number" ? t.meta_info.user_rating_on_same_object_value : 0;
  i.isLiked = c === 1, i.isDisliked = c === -1, i.ratingId = t.id ?? ((d = t.meta_info) == null ? void 0 : d.user_rating_on_same_object_id) ?? i.ratingId ?? null, e[n] = i;
}
function nf(e, t, n, r) {
  const i = An(t, n, "variant", r.id);
  e[i] = e[i] ?? {
    key: i,
    target: "variant",
    contentType: t,
    objectPk: n,
    targetId: r.id,
    likes: r.likes ?? 0,
    dislikes: r.dislikes ?? 0,
    isLiked: r.isLiked ?? !1,
    isDisliked: r.isDisliked ?? !1
  }, e[i] = {
    ...e[i],
    likes: r.likes ?? e[i].likes,
    dislikes: r.dislikes ?? e[i].dislikes,
    isLiked: r.isLiked ?? e[i].isLiked,
    isDisliked: r.isDisliked ?? e[i].isDisliked
  };
}
function Lo(e, t, n, r) {
  const i = An(t, n, "comment", r.id);
  e[i] = e[i] ?? {
    key: i,
    target: "comment",
    contentType: t,
    objectPk: n,
    targetId: r.id,
    likes: 0,
    dislikes: 0,
    isLiked: !1,
    isDisliked: !1
  }, e[i] = {
    ...e[i],
    likes: r.likes ?? e[i].likes,
    dislikes: r.dislikes ?? e[i].dislikes,
    isLiked: r.isLiked ?? e[i].isLiked,
    isDisliked: r.isDisliked ?? e[i].isDisliked
  };
}
const En = Nr((e, t) => ({
  sceneContentType: 0,
  variantContentType: 0,
  commentContentType: 0,
  byKey: {},
  loadingObjects: /* @__PURE__ */ new Set(),
  setSceneContentType: (n) => {
    e({ sceneContentType: n });
  },
  getSceneContentType: () => t().sceneContentType,
  setVariantContentType: (n) => {
    e({ variantContentType: n });
  },
  getVariantContentType: () => t().variantContentType,
  setCommentContentType: (n) => {
    e({ commentContentType: n });
  },
  getCommentContentType: () => t().commentContentType,
  initFromScene: (n) => {
    n && e((r) => {
      const i = { ...r.byKey };
      return n.forEach((c) => {
        (c.variants || []).forEach((a) => nf(i, t().variantContentType, c.id, a)), (c.comments || []).forEach((a) => {
          Lo(i, t().commentContentType, c.id, a), (a.replies || []).forEach((u) => Lo(i, t().commentContentType, c.id, u));
        });
      }), { byKey: i };
    });
  },
  ensureObjectLoaded: (n) => {
    const r = `${t().variantContentType}:${n}`, i = t().loadingObjects;
    if (i.has(r)) return;
    const c = new Set(i);
    c.add(r), e({ loadingObjects: c }), ef(t().variantContentType, n).then((a) => {
      e((u) => {
        const p = { ...u.byKey };
        return a.forEach((d) => dr(p, d)), { byKey: p };
      });
    }).catch((a) => console.debug("Ratings refresh failed:", a)).finally(() => {
      e((a) => {
        const u = new Set(a.loadingObjects);
        return u.delete(r), { loadingObjects: u };
      });
    });
  },
  getVariantRating: (n, r) => t().byKey[An(t().variantContentType, n, "variant", r)],
  getCommentRating: (n, r) => t().byKey[An(t().commentContentType, n, "comment", r)],
  toggleVariantLike: (n, r) => {
    const i = t().variantContentType, c = An(i, n, "variant", r), a = t().byKey[c], u = !!(a != null && a.isLiked), p = !!(a != null && a.isDisliked);
    e((d) => ({
      byKey: {
        ...d.byKey,
        [c]: {
          key: c,
          target: "variant",
          contentType: i,
          objectPk: n,
          targetId: r,
          likes: ((a == null ? void 0 : a.likes) ?? 0) + (u ? -1 : 1),
          dislikes: ((a == null ? void 0 : a.dislikes) ?? 0) - (p ? 1 : 0),
          isLiked: !u,
          isDisliked: !1,
          ratingId: (a == null ? void 0 : a.ratingId) ?? null
        }
      }
    })), Lr(i, n, "variant", r, u ? "clear" : "like", (a == null ? void 0 : a.ratingId) ?? null).then((d) => {
      if (d && typeof d == "object" && !Array.isArray(d)) {
        const f = {
          ...d,
          target: "variant",
          target_id: r,
          content_type: d.content_type ?? i,
          object_pk: d.object_pk ?? n
        };
        e((v) => {
          const y = { ...v.byKey };
          return dr(y, f), { byKey: y };
        });
      } else if (Array.isArray(d) && d.length) {
        const f = Number(d[0]);
        Number.isNaN(f) ? t().ensureObjectLoaded(n) : e((v) => {
          const y = { ...v.byKey }, A = y[c];
          return A && (y[c] = { ...A, ratingId: f }), { byKey: y };
        });
      } else
        t().ensureObjectLoaded(n);
    }).catch(() => e((d) => ({ byKey: { ...d.byKey, [c]: a } })));
  },
  toggleVariantDislike: (n, r) => {
    const i = t().variantContentType, c = An(i, n, "variant", r), a = t().byKey[c], u = !!(a != null && a.isDisliked), p = !!(a != null && a.isLiked);
    e((d) => ({
      byKey: {
        ...d.byKey,
        [c]: {
          key: c,
          target: "variant",
          contentType: i,
          objectPk: n,
          targetId: r,
          dislikes: ((a == null ? void 0 : a.dislikes) ?? 0) + (u ? -1 : 1),
          likes: ((a == null ? void 0 : a.likes) ?? 0) - (p ? 1 : 0),
          isLiked: !1,
          isDisliked: !u,
          ratingId: (a == null ? void 0 : a.ratingId) ?? null
        }
      }
    })), Lr(i, n, "variant", r, u ? "clear" : "dislike", (a == null ? void 0 : a.ratingId) ?? null).then((d) => {
      if (d && typeof d == "object" && !Array.isArray(d)) {
        const f = {
          ...d,
          target: "variant",
          target_id: r,
          content_type: d.content_type ?? i,
          object_pk: d.object_pk ?? n
        };
        e((v) => {
          const y = { ...v.byKey };
          return dr(y, f), { byKey: y };
        });
      } else if (Array.isArray(d) && d.length) {
        const f = Number(d[0]);
        Number.isNaN(f) ? t().ensureObjectLoaded(n) : e((v) => {
          const y = { ...v.byKey }, A = y[c];
          return A && (y[c] = { ...A, ratingId: f }), { byKey: y };
        });
      } else
        t().ensureObjectLoaded(n);
    }).catch(() => e((d) => ({ byKey: { ...d.byKey, [c]: a } })));
  },
  toggleCommentLike: (n, r) => {
    const i = t().variantContentType, c = An(i, n, "comment", r), a = t().byKey[c], u = !!(a != null && a.isLiked), p = !!(a != null && a.isDisliked);
    e((d) => ({
      byKey: {
        ...d.byKey,
        [c]: {
          key: c,
          target: "comment",
          contentType: i,
          objectPk: n,
          targetId: r,
          likes: ((a == null ? void 0 : a.likes) ?? 0) + (u ? -1 : 1),
          dislikes: ((a == null ? void 0 : a.dislikes) ?? 0) - (p ? 1 : 0),
          isLiked: !u,
          isDisliked: !1,
          ratingId: (a == null ? void 0 : a.ratingId) ?? null
        }
      }
    })), Lr(i, n, "comment", r, u ? "clear" : "like", (a == null ? void 0 : a.ratingId) ?? null).then((d) => {
      if (d && typeof d == "object" && !Array.isArray(d)) {
        const f = {
          ...d,
          target: "comment",
          target_id: r,
          content_type: d.content_type ?? i,
          object_pk: d.object_pk ?? n
        };
        e((v) => {
          const y = { ...v.byKey };
          return dr(y, f), { byKey: y };
        });
      } else if (Array.isArray(d) && d.length) {
        const f = Number(d[0]);
        Number.isNaN(f) ? t().ensureObjectLoaded(n) : e((v) => {
          const y = { ...v.byKey }, A = y[c];
          return A && (y[c] = { ...A, ratingId: f }), { byKey: y };
        });
      } else
        t().ensureObjectLoaded(n);
    }).catch(() => e((d) => ({ byKey: { ...d.byKey, [c]: a } })));
  },
  toggleCommentDislike: (n, r) => {
    const i = t().variantContentType, c = An(i, n, "comment", r), a = t().byKey[c], u = !!(a != null && a.isDisliked), p = !!(a != null && a.isLiked);
    e((d) => ({
      byKey: {
        ...d.byKey,
        [c]: {
          key: c,
          target: "comment",
          contentType: i,
          objectPk: n,
          targetId: r,
          dislikes: ((a == null ? void 0 : a.dislikes) ?? 0) + (u ? -1 : 1),
          likes: ((a == null ? void 0 : a.likes) ?? 0) - (p ? 1 : 0),
          isLiked: !1,
          isDisliked: !u,
          ratingId: (a == null ? void 0 : a.ratingId) ?? null
        }
      }
    })), Lr(i, n, "comment", r, u ? "clear" : "dislike", (a == null ? void 0 : a.ratingId) ?? null).then((d) => {
      if (d && typeof d == "object" && !Array.isArray(d)) {
        const f = {
          ...d,
          target: "comment",
          target_id: r,
          content_type: d.content_type ?? i,
          object_pk: d.object_pk ?? n
        };
        e((v) => {
          const y = { ...v.byKey };
          return dr(y, f), { byKey: y };
        });
      } else if (Array.isArray(d) && d.length) {
        const f = Number(d[0]);
        Number.isNaN(f) ? t().ensureObjectLoaded(n) : e((v) => {
          const y = { ...v.byKey }, A = y[c];
          return A && (y[c] = { ...A, ratingId: f }), { byKey: y };
        });
      } else
        t().ensureObjectLoaded(n);
    }).catch(() => e((d) => ({ byKey: { ...d.byKey, [c]: a } })));
  }
})), qi = Nr((e) => ({
  scene: { id: 0, object_id: 0, content_type: 0, objects: [] },
  setScene: (t) => {
    e({ scene: t }), t != null && t.objects && t.content_type && (Cn.getState().initFromScene(t.objects), En.getState().initFromScene(t.objects));
  }
  // toggleVariantLike: (objectId, variantId) =>
  //     set((state) => ({
  //         scene: {
  //             ...state.scene,
  //             objects: state.scene.objects.map((obj) =>
  //                 obj.id === objectId
  //                     ? {
  //                         ...obj,
  //                         variants: obj.variants.map((variant) =>
  //                             variant.id === variantId
  //                                 ? {
  //                                     ...variant,
  //                                     likes: !variant.isLiked ? variant.likes + 1 : variant.likes - 1,
  //                                     isLiked: !variant.isLiked,
  //                                     // Optionally reset dislike if switching from dislike to like
  //                                     dislikes: variant.isDisliked ? variant.dislikes - 1 : variant.dislikes,
  //                                     isDisliked: false,
  //                                 }
  //                                 : variant
  //                         ),
  //                     }
  //                     : obj
  //             ),
  //         },
  //     })),
  // toggleVariantDislike: (objectId, variantId) =>
  //     set((state) => ({
  //         scene: {
  //             ...state.scene,
  //             objects: state.scene.objects.map((obj) =>
  //                 obj.id === objectId
  //                     ? {
  //                         ...obj,
  //                         variants: obj.variants.map((variant) =>
  //                             variant.id === variantId
  //                                 ? {
  //                                     ...variant,
  //                                     dislikes: !variant.isDisliked ? variant.dislikes + 1 : variant.dislikes - 1,
  //                                     isDisliked: !variant.isDisliked,
  //                                     // Optionally reset like if switching from dislike to like
  //                                     likes: variant.isLiked ? variant.likes - 1 : variant.likes,
  //                                     isLiked: false,
  //                                 }
  //                                 : variant
  //                         ),
  //                     }
  //                     : obj
  //             ),
  //         },
  //     })),
  // postComment: (objectId, comment) =>
  //     set((state) => ({
  //         scene: {
  //             ...state.scene,
  //             objects: state.scene.objects.map((obj) =>
  //                 obj.id === objectId ? { ...obj, comments: [...obj.comments, comment] } : obj
  //             ),
  //         },
  //     })),
  // postCommentReply: (objectId, commentId, reply) =>
  //     set((state) => ({
  //         scene: {
  //             ...state.scene,
  //             objects: state.scene.objects.map((obj) =>
  //                 obj.id === objectId
  //                     ? {
  //                         ...obj,
  //                         comments: obj.comments.map((comment) =>
  //                             comment.id === commentId ? { ...comment, replies: [...comment.replies, reply] } : comment
  //                         ),
  //                     }
  //                     : obj
  //             ),
  //         },
  //     })),
  // toggleCommentLike: (objectId, commentId) =>
  //     set((state) => ({
  //         scene: {
  //             ...state.scene,
  //             objects: state.scene.objects.map((obj) =>
  //                 obj.id === objectId
  //                     ? {
  //                         ...obj,
  //                         comments: obj.comments.map((comment) =>
  //                             comment.id === commentId
  //                                 ? {
  //                                     ...comment,
  //                                     likes: !comment.isLiked ? comment.likes + 1 : comment.likes - 1,
  //                                     isLiked: !comment.isLiked,
  //                                     // Optionally reset dislike if switching from dislike to like
  //                                     dislikes: comment.isDisliked ? comment.dislikes - 1 : comment.dislikes,
  //                                     isDisliked: false,
  //                                 }
  //                                 : comment
  //                         ),
  //                     }
  //                     : obj
  //             ),
  //         },
  //     })),
  // toggleCommentDislike: (objectId, commentId) =>
  //     set((state) => ({
  //         scene: {
  //             ...state.scene,
  //             objects: state.scene.objects.map((obj) =>
  //                 obj.id === objectId
  //                     ? {
  //                         ...obj,
  //                         comments: obj.comments.map((comment) =>
  //                             comment.id === commentId
  //                                 ? {
  //                                     ...comment,
  //                                     dislikes: !comment.isDisliked ? comment.dislikes + 1 : comment.dislikes - 1,
  //                                     isDisliked: !comment.isDisliked,
  //                                     // Optionally reset like if switching from dislike to like
  //                                     likes: comment.isLiked ? comment.likes - 1 : comment.likes,
  //                                     isLiked: false,
  //                                 }
  //                                 : comment
  //                         ),
  //                     }
  //                     : obj
  //             ),
  //         },
  //     })),
})), _u = ({ objectPk: e, commentId: t, forceCloseKeyboard: n }) => {
  const [r, i] = Ve(!1), [c, a] = Ve(""), [u, p] = Ve(!1), d = on(null), f = Cn((j) => j.byId[t]), v = Cn((j) => j.getReplyComments(t)), y = En((j) => j.getCommentRating(e, t)), A = Cn((j) => j.addComment), U = En((j) => j.toggleCommentLike), z = En((j) => j.toggleCommentDislike);
  if (!f) return null;
  const K = f.parentId !== null, R = () => {
    if (p(!0), d.current) {
      const j = d.current.getBoundingClientRect(), k = window.innerHeight * 0.35;
      j.bottom > window.innerHeight - k && setTimeout(() => {
        var X;
        (X = d.current) == null || X.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
    }
  }, B = () => p(!1);
  Et(() => {
    n && B();
  }, [n]);
  const q = (j) => {
    j === "{bksp}" ? a((k) => k.slice(0, -1)) : j === "{space}" ? a((k) => k + " ") : j.startsWith("{") || a((k) => k + j);
  }, O = () => {
    if (K) return;
    const j = c.trim();
    j && (A(e, j, t), a(""), p(!1));
  };
  return /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    /* @__PURE__ */ N.jsx("div", { className: `row top-border ${K && "ps-4 pb-2"}`, children: /* @__PURE__ */ N.jsxs("div", { className: "a4-comments__box pt-3", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "a4-comments__box--user row", children: [
        /* @__PURE__ */ N.jsx("div", { className: "col-2 col-lg-1 a4-comments__user-img", children: /* @__PURE__ */ N.jsx("i", { className: "fas fa-user-circle fa-3x" }) }),
        /* @__PURE__ */ N.jsxs("div", { className: "col-7 col-md-8", children: [
          /* @__PURE__ */ N.jsx("div", { className: "a4-comments__author", children: f.userName || "User" }),
          /* @__PURE__ */ N.jsx("span", { className: "a4-comments__moderator", style: { fontSize: "0.8rem" }, children: !1 }),
          /* @__PURE__ */ N.jsx("time", { className: "a4-comments__submission-date", children: f.created ? f.created : "" })
        ] })
      ] }),
      /* @__PURE__ */ N.jsx("div", { className: "row", children: /* @__PURE__ */ N.jsx("div", { className: "col-12", children: /* @__PURE__ */ N.jsx("div", { className: "a4-comments__text", children: /* @__PURE__ */ N.jsx("p", { style: { opacity: f._pending ? 0.5 : 1 }, children: f.text }) }) }) }),
      /* @__PURE__ */ N.jsx("div", { className: "row", children: /* @__PURE__ */ N.jsxs("div", { className: "col-12 a4-comments__action-bar-container", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "rating", children: [
          /* @__PURE__ */ N.jsxs(
            "button",
            {
              className: `rating-button rating-up${y != null && y.isLiked ? " liked" : ""}`,
              onClick: () => U(e, f.id),
              children: [
                /* @__PURE__ */ N.jsx("i", { className: "far fa-thumbs-up" }),
                (y == null ? void 0 : y.likes) ?? 0
              ]
            }
          ),
          /* @__PURE__ */ N.jsxs(
            "button",
            {
              className: `rating-button rating-down${y != null && y.isDisliked ? " disliked" : ""}`,
              onClick: () => z(e, f.id),
              children: [
                /* @__PURE__ */ N.jsx("i", { className: "far fa-thumbs-down" }),
                (y == null ? void 0 : y.dislikes) ?? 0
              ]
            }
          )
        ] }),
        !K && /* @__PURE__ */ N.jsx("div", { className: "a4-comments__action-bar", children: /* @__PURE__ */ N.jsx(
          "button",
          {
            className: "btn btn--no-border a4-comments__action-bar__btn",
            type: "button",
            onClick: () => i((j) => !j),
            children: r ? /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
              /* @__PURE__ */ N.jsx("i", { className: "fas fa-minus" }),
              " Hide Replies"
            ] }) : /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
              /* @__PURE__ */ N.jsx("i", { className: "far fa-comment" }),
              " ",
              v.length,
              " Replies"
            ] })
          }
        ) })
      ] }) })
    ] }) }),
    !K && r && /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
      v.map((j) => /* @__PURE__ */ N.jsx(
        _u,
        {
          objectPk: e,
          commentId: j.id,
          forceCloseKeyboard: n
        },
        j.id
      )),
      /* @__PURE__ */ N.jsxs("div", { className: "commenting my-0 py-2 ps-3", children: [
        /* @__PURE__ */ N.jsx("h6", { children: "Join the discussion" }),
        /* @__PURE__ */ N.jsxs("div", { className: "form-group commenting__content mb-0", children: [
          /* @__PURE__ */ N.jsxs("label", { children: [
            "Your reply",
            /* @__PURE__ */ N.jsxs(
              "div",
              {
                className: "input-div",
                role: "textbox",
                tabIndex: 0,
                onClick: R,
                children: [
                  c,
                  u && /* @__PURE__ */ N.jsx(
                    "span",
                    {
                      style: {
                        display: "inline-block",
                        width: "1px",
                        backgroundColor: "black",
                        height: "1em"
                      }
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ N.jsx("div", { ref: d, children: /* @__PURE__ */ N.jsx(
            "button",
            {
              className: "btn btn--default btn--full mb-0",
              "data-post-comment": !0,
              onClick: O,
              children: "Reply"
            }
          ) })
        ] })
      ] }),
      u && /* @__PURE__ */ N.jsx("div", { style: { height: "15vh" } })
    ] }),
    /* @__PURE__ */ N.jsx(
      Ou,
      {
        visible: u,
        onSubmit: O,
        onKeyPress: q,
        onRequestClose: B
      }
    )
  ] });
}, rf = ({ objectId: e, variantId: t, headerHeight: n, setCurrentVariant: r, onClose: i, fontSize: c }) => {
  const [a, u] = Ve(!1), [p, d] = Ve(""), [f, v] = Ve(!1), [y, A] = Ve(!1), U = on(null), { scene: z } = qi(), K = Cn((ue) => ue.addComment), R = Cn((ue) => ue.ensureObjectLoaded), B = Cn((ue) => ue.getCommentRoots(e)), q = En((ue) => ue.getVariantRating(e, t)), O = En((ue) => ue.toggleVariantLike), j = En((ue) => ue.toggleVariantDislike), k = z.objects.find((ue) => ue.id === e);
  if (!k)
    return /* @__PURE__ */ N.jsx(As, { isVisible: !1, headerHeight: n, variantName: "", fontSize: c });
  const X = k.variants.find((ue) => ue.id === t);
  if (!X)
    return /* @__PURE__ */ N.jsx(As, { isVisible: !1, headerHeight: n, variantName: "", fontSize: c });
  Et(() => {
    R(e);
  }, [R, e]), Et(() => {
    const ue = (Fe) => {
      (Fe.key.length === 1 || Fe.key === "Enter" || Fe.key === "Backspace") && A(!0);
    };
    return window.addEventListener("keydown", ue), () => window.removeEventListener("keydown", ue);
  }, []);
  const ie = () => O(e, t), te = () => j(e, t), xe = (ue) => {
    ue === "{bksp}" ? d((Fe) => Fe.slice(0, -1)) : ue === "{space}" ? d((Fe) => Fe + " ") : ue.startsWith("{") || d((Fe) => Fe + ue);
  }, fe = () => {
    const ue = p.trim();
    ue && (K(e, ue), d(""), Te());
  }, Q = () => {
    if (v(!0), U.current) {
      const ue = U.current.getBoundingClientRect(), Fe = window.innerHeight * 0.35;
      ue.bottom > window.innerHeight - Fe && setTimeout(() => {
        var bt;
        (bt = U.current) == null || bt.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
    }
  }, Te = () => v(!1);
  return /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxs(
      As,
      {
        isVisible: !0,
        headerHeight: n,
        variantName: X.name,
        onClose: i,
        onMinimize: (ue) => {
          u(ue), ue && Te();
        },
        fontSize: c,
        children: [
          /* @__PURE__ */ N.jsxs("div", { className: "minh-100 d-flex flex-column", style: { fontSize: `${c * 0.8}px` }, children: [
            /* @__PURE__ */ N.jsx("div", { id: "scrollableContentSection", className: "row", children: /* @__PURE__ */ N.jsx("p", { children: X.description }) }),
            k.variants.length > 1 && /* @__PURE__ */ N.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ N.jsx("h4", { children: "Variants" }),
              /* @__PURE__ */ N.jsx("div", { className: "d-flex flex-wrap gap-3", children: k.variants.map((ue) => {
                const Fe = ue.id === X.id;
                return /* @__PURE__ */ N.jsxs(
                  "button",
                  {
                    className: `variant-icon ${Fe ? "active" : ""}`,
                    onClick: () => {
                      Fe || r(e, ue.id);
                    },
                    children: [
                      /* @__PURE__ */ N.jsxs("span", { className: "variant-circle", children: [
                        /* @__PURE__ */ N.jsx("i", { className: "fas fa-circle fa-3x" }),
                        /* @__PURE__ */ N.jsx("span", { className: "variant-circle__label", style: { fontSize: `${c}px` }, children: ue.id })
                      ] }),
                      /* @__PURE__ */ N.jsx("span", { className: "variant-name", children: ue.name })
                    ]
                  },
                  ue.id
                );
              }) })
            ] }),
            /* @__PURE__ */ N.jsx("div", { className: "row top-border", children: /* @__PURE__ */ N.jsxs("div", { className: "col-12 a4-comments__action-bar-container", children: [
              /* @__PURE__ */ N.jsxs("div", { className: "rating", children: [
                /* @__PURE__ */ N.jsxs(
                  "button",
                  {
                    className: `rating-button rating-up${q != null && q.isLiked ? " liked" : ""}`,
                    onClick: ie,
                    children: [
                      /* @__PURE__ */ N.jsx("i", { className: "far fa-thumbs-up" }),
                      (q == null ? void 0 : q.likes) ?? (X == null ? void 0 : X.likes) ?? 0
                    ]
                  }
                ),
                /* @__PURE__ */ N.jsxs(
                  "button",
                  {
                    className: `rating-button rating-down${q != null && q.isDisliked ? " disliked" : ""}`,
                    onClick: te,
                    children: [
                      /* @__PURE__ */ N.jsx("i", { className: "far fa-thumbs-down" }),
                      (q == null ? void 0 : q.dislikes) ?? (X == null ? void 0 : X.dislikes) ?? 0
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ N.jsx("div", { className: "a4-comments__action-bar", children: /* @__PURE__ */ N.jsxs("button", { className: "btn btn--no-border a4-comments__action-bar__btn", type: "button", children: [
                /* @__PURE__ */ N.jsx("i", { className: "far fa-comment" }),
                "Reply"
              ] }) })
            ] }) }),
            /* @__PURE__ */ N.jsxs("div", { id: "discussionSection", className: "commenting my-0", children: [
              /* @__PURE__ */ N.jsx("h4", { children: "Join the discussion" }),
              /* @__PURE__ */ N.jsxs("div", { className: "form-group commenting__content mb-0", children: [
                /* @__PURE__ */ N.jsxs("label", { children: [
                  "Your comment",
                  y ? /* @__PURE__ */ N.jsx(
                    "textarea",
                    {
                      className: "input-div",
                      role: "textbox",
                      value: p,
                      onChange: (ue) => d(ue.target.value),
                      style: { caretColor: "black", whiteSpace: "pre-wrap", width: "100%" },
                      rows: 2
                    }
                  ) : /* @__PURE__ */ N.jsxs(
                    "div",
                    {
                      className: "input-div",
                      role: "textbox",
                      tabIndex: 0,
                      onClick: Q,
                      style: { caretColor: "black", whiteSpace: "pre-wrap" },
                      children: [
                        p,
                        f && /* @__PURE__ */ N.jsx(
                          "span",
                          {
                            style: {
                              display: "inline-block",
                              width: "1px",
                              backgroundColor: "black",
                              height: "1em"
                            }
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ N.jsx("div", { ref: U, children: /* @__PURE__ */ N.jsx(
                  "button",
                  {
                    className: "btn btn--default btn--full mb-0",
                    "data-post-comment": !0,
                    onClick: fe,
                    children: "Post"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ N.jsx("h4", { children: "Discussion" }),
            B.length > 0 ? B.slice().reverse().map((ue) => /* @__PURE__ */ N.jsx(
              _u,
              {
                objectPk: e,
                commentId: ue.id,
                forceCloseKeyboard: a
              },
              ue.id
            )) : /* @__PURE__ */ N.jsx("p", { children: "No comments yet. Be the first to comment!" })
          ] }),
          !y && f && /* @__PURE__ */ N.jsx("div", { style: { height: "15vh" } })
        ]
      }
    ),
    /* @__PURE__ */ N.jsx(
      Ou,
      {
        visible: !y && f,
        onSubmit: fe,
        onKeyPress: xe,
        onRequestClose: Te
      }
    )
  ] });
}, sf = typeof window < "u" ? window.innerWidth : 800, of = 0, Uo = sf, af = ({
  isVisible: e,
  onClose: t,
  onLeave: n,
  children: r,
  headerHeight: i = 0
}) => {
  const c = wu(Uo), [a, u] = Ve(e);
  return Et(() => {
    e ? (u(!0), mr(c, of, { duration: 0.3, ease: "easeOut" })) : mr(c, Uo, {
      duration: 0.3,
      ease: "easeOut",
      onComplete: () => u(!1)
    });
  }, [e]), a ? /* @__PURE__ */ N.jsx(
    xu.div,
    {
      className: "side-sheet d-flex flex-column vh-100",
      style: { x: c, marginTop: i },
      initial: !1,
      children: /* @__PURE__ */ N.jsx("div", { className: "flex-grow-1 overflow-auto px-3 pt-3 d-flex flex-column", children: r })
    }
  ) : null;
}, fr = ({ title: e, children: t, fontSize: n }) => {
  const [r, i] = Ve(!1);
  return /* @__PURE__ */ N.jsxs("div", { className: "accordion", children: [
    /* @__PURE__ */ N.jsx(
      "a",
      {
        className: `accordion__title ${r && "collapsed"}`,
        onClick: () => i((c) => !c),
        "aria-haspopup": "true",
        "aria-expanded": r,
        "data-bs-toggle": "collapse",
        children: /* @__PURE__ */ N.jsxs("h6", { style: { fontSize: `${n}px` }, children: [
          e,
          /* @__PURE__ */ N.jsx("i", { className: "fas fa-chevron-down", "aria-hidden": "true" })
        ] })
      }
    ),
    /* @__PURE__ */ N.jsx("div", { className: `accordion__body collapse ${r && "show"}`, id: "accordion-complib-body", "aria-labelledby": "accordion-complib-title", children: t })
  ] });
}, cf = ({
  isVisible: e,
  onClose: t,
  onLeave: n,
  headerHeight: r,
  fontSize: i
}) => /* @__PURE__ */ N.jsx(
  af,
  {
    isVisible: e,
    onClose: t,
    onLeave: n,
    headerHeight: r,
    children: /* @__PURE__ */ N.jsxs("div", { className: "d-flex flex-column", style: { height: "100%" }, children: [
      /* @__PURE__ */ N.jsxs(
        "div",
        {
          style: {
            position: "sticky",
            top: 0,
            zIndex: 2,
            background: "white",
            padding: "1px 10px 1px 10px",
            fontSize: i
          },
          children: [
            /* @__PURE__ */ N.jsx("h3", { style: { marginBottom: 0, fontSize: `${i * 1.3}px` }, children: "AR Help Guide" }),
            /* @__PURE__ */ N.jsxs("p", { style: { marginBottom: 0, fontSize: `${i}px` }, children: [
              "Welcome to the ",
              /* @__PURE__ */ N.jsxs("strong", { children: [
                "Augmented Reality experience on ",
                /* @__PURE__ */ N.jsx("a", { href: "https://adhocracy.plus/", target: "_blank", rel: "noopener noreferrer", children: "Adhocracy.plus" }),
                "!"
              ] }),
              /* @__PURE__ */ N.jsx("br", {})
            ] })
          ]
        }
      ),
      /* @__PURE__ */ N.jsxs(
        "div",
        {
          className: "flex-grow-1",
          style: {
            fontSize: `${i}px`,
            overflowY: "auto",
            minHeight: 0,
            padding: "1px 10px 1px 10px"
          },
          children: [
            /* @__PURE__ */ N.jsx(fr, { title: "What is Adhocracy.plus AR Beta?", fontSize: i, children: /* @__PURE__ */ N.jsxs("p", { children: [
              /* @__PURE__ */ N.jsx("a", { href: "https://adhocracy.plus/", target: "_blank", rel: "noopener noreferrer", children: "Adhocracy.plus" }),
              " AR Beta is an experimental feature that allows users to interact with Augmented Reality elements in their environment. It is designed to enhance civic engagement by providing immersive experiences for exploring projects, proposals, and ideas in a spatial context."
            ] }) }),
            /* @__PURE__ */ N.jsx(fr, { title: "What is Augmented Reality?", fontSize: i, children: /* @__PURE__ */ N.jsx("p", { children: "Augmented Reality (AR) is a technology that overlays digital content onto the real world through devices like smartphones, tablets, or AR glasses. Unlike virtual reality, AR enhances your physical surroundings by adding interactive elements, such as 3D models, animations, or information panels." }) }),
            /* @__PURE__ */ N.jsx(fr, { title: "Why should I participate?", fontSize: i, children: /* @__PURE__ */ N.jsx("p", { children: "Participating in AR experiences allows you to engage with projects and proposals in a more interactive and visual way. It helps you better understand spatial relationships, visualize ideas, and contribute feedback in a meaningful manner. Plus, it's a fun and innovative way to shape your community!" }) }),
            /* @__PURE__ */ N.jsx(fr, { title: "How do I use AR mode?", fontSize: i, children: /* @__PURE__ */ N.jsxs("p", { children: [
              "To use AR mode:",
              /* @__PURE__ */ N.jsxs("ul", { children: [
                /* @__PURE__ */ N.jsx("li", { children: "Ensure your device supports AR (e.g., ARCore for Android)." }),
                /* @__PURE__ */ N.jsx("li", { children: "Follow the on-screen instructions to explore AR elements in your environment." }),
                /* @__PURE__ */ N.jsx("li", { children: "Interact with objects by tapping or selecting them to view more details." })
              ] })
            ] }) }),
            /* @__PURE__ */ N.jsx(fr, { title: "Tips", fontSize: i, children: /* @__PURE__ */ N.jsxs("p", { children: [
              "Here are some tips for using AR mode effectively:",
              /* @__PURE__ */ N.jsxs("ul", { children: [
                /* @__PURE__ */ N.jsx("li", { children: "Use AR in a well-lit area for better visibility." }),
                /* @__PURE__ */ N.jsx("li", { children: "Move around to explore objects from different angles." })
              ] })
            ] }) }),
            /* @__PURE__ */ N.jsxs("p", { className: "mt-auto pt-3", style: { padding: "1px 10px 1px 10px", fontSize: `${i}px` }, children: [
              "Still need help? Reach out at ",
              /* @__PURE__ */ N.jsx("a", { href: "mailto:support@adhocracy.plus", children: "support@adhocracy.plus" }),
              /* @__PURE__ */ N.jsx("br", {}),
              "Thanks for shaping your city with us!"
            ] })
          ]
        }
      )
    ] })
  }
);
var Wr = { exports: {} };
/*!
 * 
 *   react-simple-keyboard v3.8.75
 *   https://github.com/hodgef/react-simple-keyboard
 *
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
var uf = Wr.exports, $o;
function lf() {
  return $o || ($o = 1, function(e, t) {
    (function(n, r) {
      e.exports = r(er);
    })(uf, function(n) {
      return function() {
        var r = { 442: function(u) {
          u.exports = n;
        }, 548: function(u) {
          u.exports = function() {
            var p = { 34: function(m, w, s) {
              var o = s(4901);
              m.exports = function(l) {
                return typeof l == "object" ? l !== null : o(l);
              };
            }, 81: function(m, w, s) {
              var o = s(9565), l = s(9306), h = s(8551), g = s(6823), b = s(851), x = TypeError;
              m.exports = function(E, S) {
                var T = arguments.length < 2 ? b(E) : S;
                if (l(T)) return h(o(T, E));
                throw new x(g(E) + " is not iterable");
              };
            }, 235: function(m, w, s) {
              var o = s(9213).forEach, l = s(4598)("forEach");
              m.exports = l ? [].forEach : function(h) {
                return o(this, h, arguments.length > 1 ? arguments[1] : void 0);
              };
            }, 283: function(m, w, s) {
              var o = s(9504), l = s(9039), h = s(4901), g = s(9297), b = s(3724), x = s(350).CONFIGURABLE, E = s(3706), S = s(1181), T = S.enforce, D = S.get, _ = String, I = Object.defineProperty, L = o("".slice), P = o("".replace), $ = o([].join), H = b && !l(function() {
                return I(function() {
                }, "length", { value: 8 }).length !== 8;
              }), V = String(String).split("String"), ne = m.exports = function(Y, le, re) {
                L(_(le), 0, 7) === "Symbol(" && (le = "[" + P(_(le), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), re && re.getter && (le = "get " + le), re && re.setter && (le = "set " + le), (!g(Y, "name") || x && Y.name !== le) && (b ? I(Y, "name", { value: le, configurable: !0 }) : Y.name = le), H && re && g(re, "arity") && Y.length !== re.arity && I(Y, "length", { value: re.arity });
                try {
                  re && g(re, "constructor") && re.constructor ? b && I(Y, "prototype", { writable: !1 }) : Y.prototype && (Y.prototype = void 0);
                } catch {
                }
                var ee = T(Y);
                return g(ee, "source") || (ee.source = $(V, typeof le == "string" ? le : "")), Y;
              };
              Function.prototype.toString = ne(function() {
                return h(this) && D(this).source || E(this);
              }, "toString");
            }, 298: function(m, w, s) {
              var o = s(2195), l = s(5397), h = s(8480).f, g = s(7680), b = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
              m.exports.f = function(x) {
                return b && o(x) === "Window" ? function(E) {
                  try {
                    return h(E);
                  } catch {
                    return g(b);
                  }
                }(x) : h(l(x));
              };
            }, 350: function(m, w, s) {
              var o = s(3724), l = s(9297), h = Function.prototype, g = o && Object.getOwnPropertyDescriptor, b = l(h, "name"), x = b && (function() {
              }).name === "something", E = b && (!o || o && g(h, "name").configurable);
              m.exports = { EXISTS: b, PROPER: x, CONFIGURABLE: E };
            }, 397: function(m, w, s) {
              var o = s(7751);
              m.exports = o("document", "documentElement");
            }, 421: function(m) {
              m.exports = {};
            }, 511: function(m, w, s) {
              var o = s(9167), l = s(9297), h = s(1951), g = s(4913).f;
              m.exports = function(b) {
                var x = o.Symbol || (o.Symbol = {});
                l(x, b) || g(x, b, { value: h.f(b) });
              };
            }, 566: function(m, w, s) {
              var o = s(9504), l = s(9306), h = s(34), g = s(9297), b = s(7680), x = s(616), E = Function, S = o([].concat), T = o([].join), D = {};
              m.exports = x ? E.bind : function(_) {
                var I = l(this), L = I.prototype, P = b(arguments, 1), $ = function() {
                  var H = S(P, b(arguments));
                  return this instanceof $ ? function(V, ne, Y) {
                    if (!g(D, ne)) {
                      for (var le = [], re = 0; re < ne; re++) le[re] = "a[" + re + "]";
                      D[ne] = E("C,a", "return new C(" + T(le, ",") + ")");
                    }
                    return D[ne](V, Y);
                  }(I, H.length, H) : I.apply(_, H);
                };
                return h(L) && ($.prototype = L), $;
              };
            }, 597: function(m, w, s) {
              var o = s(9039), l = s(8227), h = s(9519), g = l("species");
              m.exports = function(b) {
                return h >= 51 || !o(function() {
                  var x = [];
                  return (x.constructor = {})[g] = function() {
                    return { foo: 1 };
                  }, x[b](Boolean).foo !== 1;
                });
              };
            }, 616: function(m, w, s) {
              var o = s(9039);
              m.exports = !o(function() {
                var l = (function() {
                }).bind();
                return typeof l != "function" || l.hasOwnProperty("prototype");
              });
            }, 655: function(m, w, s) {
              var o = s(6955), l = String;
              m.exports = function(h) {
                if (o(h) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
                return l(h);
              };
            }, 687: function(m, w, s) {
              var o = s(4913).f, l = s(9297), h = s(8227)("toStringTag");
              m.exports = function(g, b, x) {
                g && !x && (g = g.prototype), g && !l(g, h) && o(g, h, { configurable: !0, value: b });
              };
            }, 706: function(m, w, s) {
              var o = s(350).PROPER, l = s(9039), h = s(7452);
              m.exports = function(g) {
                return l(function() {
                  return !!h[g]() || "​᠎"[g]() !== "​᠎" || o && h[g].name !== g;
                });
              };
            }, 739: function(m, w, s) {
              var o = s(6518), l = s(9039), h = s(8981), g = s(2777);
              o({ target: "Date", proto: !0, arity: 1, forced: l(function() {
                return (/* @__PURE__ */ new Date(NaN)).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function() {
                  return 1;
                } }) !== 1;
              }) }, { toJSON: function(b) {
                var x = h(this), E = g(x, "number");
                return typeof E != "number" || isFinite(E) ? x.toISOString() : null;
              } });
            }, 741: function(m) {
              var w = Math.ceil, s = Math.floor;
              m.exports = Math.trunc || function(o) {
                var l = +o;
                return (l > 0 ? s : w)(l);
              };
            }, 744: function(m, w, s) {
              var o = s(9565), l = s(9504), h = s(9228), g = s(8551), b = s(34), x = s(7750), E = s(2293), S = s(7829), T = s(8014), D = s(655), _ = s(5966), I = s(6682), L = s(8429), P = s(9039), $ = L.UNSUPPORTED_Y, H = Math.min, V = l([].push), ne = l("".slice), Y = !P(function() {
                var re = /(?:)/, ee = re.exec;
                re.exec = function() {
                  return ee.apply(this, arguments);
                };
                var de = "ab".split(re);
                return de.length !== 2 || de[0] !== "a" || de[1] !== "b";
              }), le = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
              h("split", function(re, ee, de) {
                var pe = "0".split(void 0, 0).length ? function(oe, Ce) {
                  return oe === void 0 && Ce === 0 ? [] : o(ee, this, oe, Ce);
                } : ee;
                return [function(oe, Ce) {
                  var ge = x(this), Ee = b(oe) ? _(oe, re) : void 0;
                  return Ee ? o(Ee, oe, ge, Ce) : o(pe, D(ge), oe, Ce);
                }, function(oe, Ce) {
                  var ge = g(this), Ee = D(oe);
                  if (!le) {
                    var Xe = de(pe, ge, Ee, Ce, pe !== ee);
                    if (Xe.done) return Xe.value;
                  }
                  var Me = E(ge, RegExp), ye = ge.unicode, Be = (ge.ignoreCase ? "i" : "") + (ge.multiline ? "m" : "") + (ge.unicode ? "u" : "") + ($ ? "g" : "y"), Ne = new Me($ ? "^(?:" + ge.source + ")" : ge, Be), He = Ce === void 0 ? 4294967295 : Ce >>> 0;
                  if (He === 0) return [];
                  if (Ee.length === 0) return I(Ne, Ee) === null ? [Ee] : [];
                  for (var De = 0, Ue = 0, Re = []; Ue < Ee.length; ) {
                    Ne.lastIndex = $ ? 0 : Ue;
                    var Se, Oe = I(Ne, $ ? ne(Ee, Ue) : Ee);
                    if (Oe === null || (Se = H(T(Ne.lastIndex + ($ ? Ue : 0)), Ee.length)) === De) Ue = S(Ee, Ue, ye);
                    else {
                      if (V(Re, ne(Ee, De, Ue)), Re.length === He) return Re;
                      for (var nt = 1; nt <= Oe.length - 1; nt++) if (V(Re, Oe[nt]), Re.length === He) return Re;
                      Ue = De = Se;
                    }
                  }
                  return V(Re, ne(Ee, De)), Re;
                }];
              }, le || !Y, $);
            }, 757: function(m, w, s) {
              var o = s(7751), l = s(4901), h = s(1625), g = s(7040), b = Object;
              m.exports = g ? function(x) {
                return typeof x == "symbol";
              } : function(x) {
                var E = o("Symbol");
                return l(E) && h(E.prototype, b(x));
              };
            }, 788: function(m, w, s) {
              var o = s(34), l = s(2195), h = s(8227)("match");
              m.exports = function(g) {
                var b;
                return o(g) && ((b = g[h]) !== void 0 ? !!b : l(g) === "RegExp");
              };
            }, 825: function(m, w, s) {
              var o = s(6518), l = s(7751), h = s(8745), g = s(566), b = s(5548), x = s(8551), E = s(34), S = s(2360), T = s(9039), D = l("Reflect", "construct"), _ = Object.prototype, I = [].push, L = T(function() {
                function H() {
                }
                return !(D(function() {
                }, [], H) instanceof H);
              }), P = !T(function() {
                D(function() {
                });
              }), $ = L || P;
              o({ target: "Reflect", stat: !0, forced: $, sham: $ }, { construct: function(H, V) {
                b(H), x(V);
                var ne = arguments.length < 3 ? H : b(arguments[2]);
                if (P && !L) return D(H, V, ne);
                if (H === ne) {
                  switch (V.length) {
                    case 0:
                      return new H();
                    case 1:
                      return new H(V[0]);
                    case 2:
                      return new H(V[0], V[1]);
                    case 3:
                      return new H(V[0], V[1], V[2]);
                    case 4:
                      return new H(V[0], V[1], V[2], V[3]);
                  }
                  var Y = [null];
                  return h(I, Y, V), new (h(g, H, Y))();
                }
                var le = ne.prototype, re = S(E(le) ? le : _), ee = h(H, re, V);
                return E(ee) ? ee : re;
              } });
            }, 851: function(m, w, s) {
              var o = s(6955), l = s(5966), h = s(4117), g = s(6269), b = s(8227)("iterator");
              m.exports = function(x) {
                if (!h(x)) return l(x, b) || l(x, "@@iterator") || g[o(x)];
              };
            }, 926: function(m, w, s) {
              var o = s(9306), l = s(8981), h = s(7055), g = s(6198), b = TypeError, x = "Reduce of empty array with no initial value", E = function(S) {
                return function(T, D, _, I) {
                  var L = l(T), P = h(L), $ = g(L);
                  if (o(D), $ === 0 && _ < 2) throw new b(x);
                  var H = S ? $ - 1 : 0, V = S ? -1 : 1;
                  if (_ < 2) for (; ; ) {
                    if (H in P) {
                      I = P[H], H += V;
                      break;
                    }
                    if (H += V, S ? H < 0 : $ <= H) throw new b(x);
                  }
                  for (; S ? H >= 0 : $ > H; H += V) H in P && (I = D(I, P[H], H, L));
                  return I;
                };
              };
              m.exports = { left: E(!1), right: E(!0) };
            }, 1034: function(m, w, s) {
              var o = s(9565), l = s(9297), h = s(1625), g = s(7979), b = RegExp.prototype;
              m.exports = function(x) {
                var E = x.flags;
                return E !== void 0 || "flags" in b || l(x, "flags") || !h(b, x) ? E : o(g, x);
              };
            }, 1056: function(m, w, s) {
              var o = s(4913).f;
              m.exports = function(l, h, g) {
                g in l || o(l, g, { configurable: !0, get: function() {
                  return h[g];
                }, set: function(b) {
                  h[g] = b;
                } });
              };
            }, 1072: function(m, w, s) {
              var o = s(1828), l = s(8727);
              m.exports = Object.keys || function(h) {
                return o(h, l);
              };
            }, 1088: function(m, w, s) {
              var o = s(6518), l = s(9565), h = s(6395), g = s(350), b = s(4901), x = s(3994), E = s(2787), S = s(2967), T = s(687), D = s(6699), _ = s(6840), I = s(8227), L = s(6269), P = s(7657), $ = g.PROPER, H = g.CONFIGURABLE, V = P.IteratorPrototype, ne = P.BUGGY_SAFARI_ITERATORS, Y = I("iterator"), le = "keys", re = "values", ee = "entries", de = function() {
                return this;
              };
              m.exports = function(pe, oe, Ce, ge, Ee, Xe, Me) {
                x(Ce, oe, ge);
                var ye, Be, Ne, He = function(it) {
                  if (it === Ee && Oe) return Oe;
                  if (!ne && it && it in Re) return Re[it];
                  switch (it) {
                    case le:
                    case re:
                    case ee:
                      return function() {
                        return new Ce(this, it);
                      };
                  }
                  return function() {
                    return new Ce(this);
                  };
                }, De = oe + " Iterator", Ue = !1, Re = pe.prototype, Se = Re[Y] || Re["@@iterator"] || Ee && Re[Ee], Oe = !ne && Se || He(Ee), nt = oe === "Array" && Re.entries || Se;
                if (nt && (ye = E(nt.call(new pe()))) !== Object.prototype && ye.next && (h || E(ye) === V || (S ? S(ye, V) : b(ye[Y]) || _(ye, Y, de)), T(ye, De, !0, !0), h && (L[De] = de)), $ && Ee === re && Se && Se.name !== re && (!h && H ? D(Re, "name", re) : (Ue = !0, Oe = function() {
                  return l(Se, this);
                })), Ee) if (Be = { values: He(re), keys: Xe ? Oe : He(le), entries: He(ee) }, Me) for (Ne in Be) (ne || Ue || !(Ne in Re)) && _(Re, Ne, Be[Ne]);
                else o({ target: oe, proto: !0, forced: ne || Ue }, Be);
                return h && !Me || Re[Y] === Oe || _(Re, Y, Oe, { name: Ee }), L[oe] = Oe, Be;
              };
            }, 1181: function(m, w, s) {
              var o, l, h, g = s(8622), b = s(4576), x = s(34), E = s(6699), S = s(9297), T = s(7629), D = s(6119), _ = s(421), I = "Object already initialized", L = b.TypeError, P = b.WeakMap;
              if (g || T.state) {
                var $ = T.state || (T.state = new P());
                $.get = $.get, $.has = $.has, $.set = $.set, o = function(V, ne) {
                  if ($.has(V)) throw new L(I);
                  return ne.facade = V, $.set(V, ne), ne;
                }, l = function(V) {
                  return $.get(V) || {};
                }, h = function(V) {
                  return $.has(V);
                };
              } else {
                var H = D("state");
                _[H] = !0, o = function(V, ne) {
                  if (S(V, H)) throw new L(I);
                  return ne.facade = V, E(V, H, ne), ne;
                }, l = function(V) {
                  return S(V, H) ? V[H] : {};
                }, h = function(V) {
                  return S(V, H);
                };
              }
              m.exports = { set: o, get: l, has: h, enforce: function(V) {
                return h(V) ? l(V) : o(V, {});
              }, getterFor: function(V) {
                return function(ne) {
                  var Y;
                  if (!x(ne) || (Y = l(ne)).type !== V) throw new L("Incompatible receiver, " + V + " required");
                  return Y;
                };
              } };
            }, 1240: function(m, w, s) {
              var o = s(9504);
              m.exports = o(1 .valueOf);
            }, 1278: function(m, w, s) {
              var o = s(6518), l = s(3724), h = s(5031), g = s(5397), b = s(7347), x = s(4659);
              o({ target: "Object", stat: !0, sham: !l }, { getOwnPropertyDescriptors: function(E) {
                for (var S, T, D = g(E), _ = b.f, I = h(D), L = {}, P = 0; I.length > P; ) (T = _(D, S = I[P++])) !== void 0 && x(L, S, T);
                return L;
              } });
            }, 1291: function(m, w, s) {
              var o = s(741);
              m.exports = function(l) {
                var h = +l;
                return h != h || h === 0 ? 0 : o(h);
              };
            }, 1296: function(m, w, s) {
              var o = s(4495);
              m.exports = o && !!Symbol.for && !!Symbol.keyFor;
            }, 1436: function(m, w, s) {
              var o = s(8227)("match");
              m.exports = function(l) {
                var h = /./;
                try {
                  "/./"[l](h);
                } catch {
                  try {
                    return h[o] = !1, "/./"[l](h);
                  } catch {
                  }
                }
                return !1;
              };
            }, 1469: function(m, w, s) {
              var o = s(7433);
              m.exports = function(l, h) {
                return new (o(l))(h === 0 ? 0 : h);
              };
            }, 1480: function(m, w, s) {
              var o = s(6518), l = s(9039), h = s(298).f;
              o({ target: "Object", stat: !0, forced: l(function() {
                return !Object.getOwnPropertyNames(1);
              }) }, { getOwnPropertyNames: h });
            }, 1510: function(m, w, s) {
              var o = s(6518), l = s(7751), h = s(9297), g = s(655), b = s(5745), x = s(1296), E = b("string-to-symbol-registry"), S = b("symbol-to-string-registry");
              o({ target: "Symbol", stat: !0, forced: !x }, { for: function(T) {
                var D = g(T);
                if (h(E, D)) return E[D];
                var _ = l("Symbol")(D);
                return E[D] = _, S[_] = D, _;
              } });
            }, 1625: function(m, w, s) {
              var o = s(9504);
              m.exports = o({}.isPrototypeOf);
            }, 1699: function(m, w, s) {
              var o = s(6518), l = s(9504), h = s(5749), g = s(7750), b = s(655), x = s(1436), E = l("".indexOf);
              o({ target: "String", proto: !0, forced: !x("includes") }, { includes: function(S) {
                return !!~E(b(g(this)), b(h(S)), arguments.length > 1 ? arguments[1] : void 0);
              } });
            }, 1761: function(m, w, s) {
              var o = s(9565), l = s(9228), h = s(8551), g = s(34), b = s(8014), x = s(655), E = s(7750), S = s(5966), T = s(7829), D = s(6682);
              l("match", function(_, I, L) {
                return [function(P) {
                  var $ = E(this), H = g(P) ? S(P, _) : void 0;
                  return H ? o(H, P, $) : new RegExp(P)[_](x($));
                }, function(P) {
                  var $ = h(this), H = x(P), V = L(I, $, H);
                  if (V.done) return V.value;
                  if (!$.global) return D($, H);
                  var ne = $.unicode;
                  $.lastIndex = 0;
                  for (var Y, le = [], re = 0; (Y = D($, H)) !== null; ) {
                    var ee = x(Y[0]);
                    le[re] = ee, ee === "" && ($.lastIndex = T(H, b($.lastIndex), ne)), re++;
                  }
                  return re === 0 ? null : le;
                }];
              });
            }, 1828: function(m, w, s) {
              var o = s(9504), l = s(9297), h = s(5397), g = s(9617).indexOf, b = s(421), x = o([].push);
              m.exports = function(E, S) {
                var T, D = h(E), _ = 0, I = [];
                for (T in D) !l(b, T) && l(D, T) && x(I, T);
                for (; S.length > _; ) l(D, T = S[_++]) && (~g(I, T) || x(I, T));
                return I;
              };
            }, 1951: function(m, w, s) {
              var o = s(8227);
              w.f = o;
            }, 2008: function(m, w, s) {
              var o = s(6518), l = s(9213).filter;
              o({ target: "Array", proto: !0, forced: !s(597)("filter") }, { filter: function(h) {
                return l(this, h, arguments.length > 1 ? arguments[1] : void 0);
              } });
            }, 2010: function(m, w, s) {
              var o = s(3724), l = s(350).EXISTS, h = s(9504), g = s(2106), b = Function.prototype, x = h(b.toString), E = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/, S = h(E.exec);
              o && !l && g(b, "name", { configurable: !0, get: function() {
                try {
                  return S(E, x(this))[1];
                } catch {
                  return "";
                }
              } });
            }, 2062: function(m, w, s) {
              var o = s(6518), l = s(9213).map;
              o({ target: "Array", proto: !0, forced: !s(597)("map") }, { map: function(h) {
                return l(this, h, arguments.length > 1 ? arguments[1] : void 0);
              } });
            }, 2087: function(m, w, s) {
              var o = s(34), l = Math.floor;
              m.exports = Number.isInteger || function(h) {
                return !o(h) && isFinite(h) && l(h) === h;
              };
            }, 2106: function(m, w, s) {
              var o = s(283), l = s(4913);
              m.exports = function(h, g, b) {
                return b.get && o(b.get, g, { getter: !0 }), b.set && o(b.set, g, { setter: !0 }), l.f(h, g, b);
              };
            }, 2140: function(m, w, s) {
              var o = {};
              o[s(8227)("toStringTag")] = "z", m.exports = String(o) === "[object z]";
            }, 2195: function(m, w, s) {
              var o = s(9504), l = o({}.toString), h = o("".slice);
              m.exports = function(g) {
                return h(l(g), 8, -1);
              };
            }, 2211: function(m, w, s) {
              var o = s(9039);
              m.exports = !o(function() {
                function l() {
                }
                return l.prototype.constructor = null, Object.getPrototypeOf(new l()) !== l.prototype;
              });
            }, 2259: function(m, w, s) {
              s(511)("iterator");
            }, 2293: function(m, w, s) {
              var o = s(8551), l = s(5548), h = s(4117), g = s(8227)("species");
              m.exports = function(b, x) {
                var E, S = o(b).constructor;
                return S === void 0 || h(E = o(S)[g]) ? x : l(E);
              };
            }, 2360: function(m, w, s) {
              var o, l = s(8551), h = s(6801), g = s(8727), b = s(421), x = s(397), E = s(4055), S = s(6119), T = "prototype", D = "script", _ = S("IE_PROTO"), I = function() {
              }, L = function(H) {
                return "<" + D + ">" + H + "</" + D + ">";
              }, P = function(H) {
                H.write(L("")), H.close();
                var V = H.parentWindow.Object;
                return H = null, V;
              }, $ = function() {
                try {
                  o = new ActiveXObject("htmlfile");
                } catch {
                }
                var H, V, ne;
                $ = typeof document < "u" ? document.domain && o ? P(o) : (V = E("iframe"), ne = "java" + D + ":", V.style.display = "none", x.appendChild(V), V.src = String(ne), (H = V.contentWindow.document).open(), H.write(L("document.F=Object")), H.close(), H.F) : P(o);
                for (var Y = g.length; Y--; ) delete $[T][g[Y]];
                return $();
              };
              b[_] = !0, m.exports = Object.create || function(H, V) {
                var ne;
                return H !== null ? (I[T] = l(H), ne = new I(), I[T] = null, ne[_] = H) : ne = $(), V === void 0 ? ne : h.f(ne, V);
              };
            }, 2478: function(m, w, s) {
              var o = s(9504), l = s(8981), h = Math.floor, g = o("".charAt), b = o("".replace), x = o("".slice), E = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, S = /\$([$&'`]|\d{1,2})/g;
              m.exports = function(T, D, _, I, L, P) {
                var $ = _ + T.length, H = I.length, V = S;
                return L !== void 0 && (L = l(L), V = E), b(P, V, function(ne, Y) {
                  var le;
                  switch (g(Y, 0)) {
                    case "$":
                      return "$";
                    case "&":
                      return T;
                    case "`":
                      return x(D, 0, _);
                    case "'":
                      return x(D, $);
                    case "<":
                      le = L[x(Y, 1, -1)];
                      break;
                    default:
                      var re = +Y;
                      if (re === 0) return ne;
                      if (re > H) {
                        var ee = h(re / 10);
                        return ee === 0 ? ne : ee <= H ? I[ee - 1] === void 0 ? g(Y, 1) : I[ee - 1] + g(Y, 1) : ne;
                      }
                      le = I[re - 1];
                  }
                  return le === void 0 ? "" : le;
                });
              };
            }, 2529: function(m) {
              m.exports = function(w, s) {
                return { value: w, done: s };
              };
            }, 2551: function(m, w, s) {
              var o = s(6395), l = s(4576), h = s(9039), g = s(3607);
              m.exports = o || !h(function() {
                if (!(g && g < 535)) {
                  var b = Math.random();
                  __defineSetter__.call(null, b, function() {
                  }), delete l[b];
                }
              });
            }, 2637: function(m, w, s) {
              s(6518)({ target: "Number", stat: !0 }, { isInteger: s(2087) });
            }, 2675: function(m, w, s) {
              s(6761), s(1510), s(7812), s(3110), s(9773);
            }, 2712: function(m, w, s) {
              var o = s(6518), l = s(926).left, h = s(4598), g = s(9519);
              o({ target: "Array", proto: !0, forced: !s(6193) && g > 79 && g < 83 || !h("reduce") }, { reduce: function(b) {
                var x = arguments.length;
                return l(this, b, x, x > 1 ? arguments[1] : void 0);
              } });
            }, 2762: function(m, w, s) {
              var o = s(6518), l = s(3802).trim;
              o({ target: "String", proto: !0, forced: s(706)("trim") }, { trim: function() {
                return l(this);
              } });
            }, 2777: function(m, w, s) {
              var o = s(9565), l = s(34), h = s(757), g = s(5966), b = s(4270), x = s(8227), E = TypeError, S = x("toPrimitive");
              m.exports = function(T, D) {
                if (!l(T) || h(T)) return T;
                var _, I = g(T, S);
                if (I) {
                  if (D === void 0 && (D = "default"), _ = o(I, T, D), !l(_) || h(_)) return _;
                  throw new E("Can't convert object to primitive value");
                }
                return D === void 0 && (D = "number"), b(T, D);
              };
            }, 2787: function(m, w, s) {
              var o = s(9297), l = s(4901), h = s(8981), g = s(6119), b = s(2211), x = g("IE_PROTO"), E = Object, S = E.prototype;
              m.exports = b ? E.getPrototypeOf : function(T) {
                var D = h(T);
                if (o(D, x)) return D[x];
                var _ = D.constructor;
                return l(_) && D instanceof _ ? _.prototype : D instanceof E ? S : null;
              };
            }, 2796: function(m, w, s) {
              var o = s(9039), l = s(4901), h = /#|\.prototype\./, g = function(T, D) {
                var _ = x[b(T)];
                return _ === S || _ !== E && (l(D) ? o(D) : !!D);
              }, b = g.normalize = function(T) {
                return String(T).replace(h, ".").toLowerCase();
              }, x = g.data = {}, E = g.NATIVE = "N", S = g.POLYFILL = "P";
              m.exports = g;
            }, 2839: function(m, w, s) {
              var o = s(4576).navigator, l = o && o.userAgent;
              m.exports = l ? String(l) : "";
            }, 2892: function(m, w, s) {
              var o = s(6518), l = s(6395), h = s(3724), g = s(4576), b = s(9167), x = s(9504), E = s(2796), S = s(9297), T = s(3167), D = s(1625), _ = s(757), I = s(2777), L = s(9039), P = s(8480).f, $ = s(7347).f, H = s(4913).f, V = s(1240), ne = s(3802).trim, Y = "Number", le = g[Y], re = b[Y], ee = le.prototype, de = g.TypeError, pe = x("".slice), oe = x("".charCodeAt), Ce = function(Me) {
                var ye, Be, Ne, He, De, Ue, Re, Se, Oe = I(Me, "number");
                if (_(Oe)) throw new de("Cannot convert a Symbol value to a number");
                if (typeof Oe == "string" && Oe.length > 2) {
                  if (Oe = ne(Oe), (ye = oe(Oe, 0)) === 43 || ye === 45) {
                    if ((Be = oe(Oe, 2)) === 88 || Be === 120) return NaN;
                  } else if (ye === 48) {
                    switch (oe(Oe, 1)) {
                      case 66:
                      case 98:
                        Ne = 2, He = 49;
                        break;
                      case 79:
                      case 111:
                        Ne = 8, He = 55;
                        break;
                      default:
                        return +Oe;
                    }
                    for (Ue = (De = pe(Oe, 2)).length, Re = 0; Re < Ue; Re++) if ((Se = oe(De, Re)) < 48 || Se > He) return NaN;
                    return parseInt(De, Ne);
                  }
                }
                return +Oe;
              }, ge = E(Y, !le(" 0o1") || !le("0b1") || le("+0x1")), Ee = function(Me) {
                var ye, Be = arguments.length < 1 ? 0 : le(function(Ne) {
                  var He = I(Ne, "number");
                  return typeof He == "bigint" ? He : Ce(He);
                }(Me));
                return D(ee, ye = this) && L(function() {
                  V(ye);
                }) ? T(Object(Be), this, Ee) : Be;
              };
              Ee.prototype = ee, ge && !l && (ee.constructor = Ee), o({ global: !0, constructor: !0, wrap: !0, forced: ge }, { Number: Ee });
              var Xe = function(Me, ye) {
                for (var Be, Ne = h ? P(ye) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), He = 0; Ne.length > He; He++) S(ye, Be = Ne[He]) && !S(Me, Be) && H(Me, Be, $(ye, Be));
              };
              l && re && Xe(b[Y], re), (ge || l) && Xe(b[Y], le);
            }, 2953: function(m, w, s) {
              var o = s(4576), l = s(7400), h = s(9296), g = s(3792), b = s(6699), x = s(687), E = s(8227)("iterator"), S = g.values, T = function(_, I) {
                if (_) {
                  if (_[E] !== S) try {
                    b(_, E, S);
                  } catch {
                    _[E] = S;
                  }
                  if (x(_, I, !0), l[I]) {
                    for (var L in g) if (_[L] !== g[L]) try {
                      b(_, L, g[L]);
                    } catch {
                      _[L] = g[L];
                    }
                  }
                }
              };
              for (var D in l) T(o[D] && o[D].prototype, D);
              T(h, "DOMTokenList");
            }, 2967: function(m, w, s) {
              var o = s(6706), l = s(34), h = s(7750), g = s(3506);
              m.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var b, x = !1, E = {};
                try {
                  (b = o(Object.prototype, "__proto__", "set"))(E, []), x = E instanceof Array;
                } catch {
                }
                return function(S, T) {
                  return h(S), g(T), l(S) && (x ? b(S, T) : S.__proto__ = T), S;
                };
              }() : void 0);
            }, 3110: function(m, w, s) {
              var o = s(6518), l = s(7751), h = s(8745), g = s(9565), b = s(9504), x = s(9039), E = s(4901), S = s(757), T = s(7680), D = s(6933), _ = s(4495), I = String, L = l("JSON", "stringify"), P = b(/./.exec), $ = b("".charAt), H = b("".charCodeAt), V = b("".replace), ne = b(1 .toString), Y = /[\uD800-\uDFFF]/g, le = /^[\uD800-\uDBFF]$/, re = /^[\uDC00-\uDFFF]$/, ee = !_ || x(function() {
                var Ce = l("Symbol")("stringify detection");
                return L([Ce]) !== "[null]" || L({ a: Ce }) !== "{}" || L(Object(Ce)) !== "{}";
              }), de = x(function() {
                return L("\uDF06\uD834") !== '"\\udf06\\ud834"' || L("\uDEAD") !== '"\\udead"';
              }), pe = function(Ce, ge) {
                var Ee = T(arguments), Xe = D(ge);
                if (E(Xe) || Ce !== void 0 && !S(Ce)) return Ee[1] = function(Me, ye) {
                  if (E(Xe) && (ye = g(Xe, this, I(Me), ye)), !S(ye)) return ye;
                }, h(L, null, Ee);
              }, oe = function(Ce, ge, Ee) {
                var Xe = $(Ee, ge - 1), Me = $(Ee, ge + 1);
                return P(le, Ce) && !P(re, Me) || P(re, Ce) && !P(le, Xe) ? "\\u" + ne(H(Ce, 0), 16) : Ce;
              };
              L && o({ target: "JSON", stat: !0, arity: 3, forced: ee || de }, { stringify: function(Ce, ge, Ee) {
                var Xe = T(arguments), Me = h(ee ? pe : L, null, Xe);
                return de && typeof Me == "string" ? V(Me, Y, oe) : Me;
              } });
            }, 3167: function(m, w, s) {
              var o = s(4901), l = s(34), h = s(2967);
              m.exports = function(g, b, x) {
                var E, S;
                return h && o(E = b.constructor) && E !== x && l(S = E.prototype) && S !== x.prototype && h(g, S), g;
              };
            }, 3179: function(m, w, s) {
              var o = s(2140), l = s(6955);
              m.exports = o ? {}.toString : function() {
                return "[object " + l(this) + "]";
              };
            }, 3392: function(m, w, s) {
              var o = s(9504), l = 0, h = Math.random(), g = o(1 .toString);
              m.exports = function(b) {
                return "Symbol(" + (b === void 0 ? "" : b) + ")_" + g(++l + h, 36);
              };
            }, 3418: function(m, w, s) {
              var o = s(6518), l = s(7916);
              o({ target: "Array", stat: !0, forced: !s(4428)(function(h) {
                Array.from(h);
              }) }, { from: l });
            }, 3500: function(m, w, s) {
              var o = s(4576), l = s(7400), h = s(9296), g = s(235), b = s(6699), x = function(S) {
                if (S && S.forEach !== g) try {
                  b(S, "forEach", g);
                } catch {
                  S.forEach = g;
                }
              };
              for (var E in l) l[E] && x(o[E] && o[E].prototype);
              x(h);
            }, 3506: function(m, w, s) {
              var o = s(3925), l = String, h = TypeError;
              m.exports = function(g) {
                if (o(g)) return g;
                throw new h("Can't set " + l(g) + " as a prototype");
              };
            }, 3517: function(m, w, s) {
              var o = s(9504), l = s(9039), h = s(4901), g = s(6955), b = s(7751), x = s(3706), E = function() {
              }, S = b("Reflect", "construct"), T = /^\s*(?:class|function)\b/, D = o(T.exec), _ = !T.test(E), I = function(P) {
                if (!h(P)) return !1;
                try {
                  return S(E, [], P), !0;
                } catch {
                  return !1;
                }
              }, L = function(P) {
                if (!h(P)) return !1;
                switch (g(P)) {
                  case "AsyncFunction":
                  case "GeneratorFunction":
                  case "AsyncGeneratorFunction":
                    return !1;
                }
                try {
                  return _ || !!D(T, x(P));
                } catch {
                  return !0;
                }
              };
              L.sham = !0, m.exports = !S || l(function() {
                var P;
                return I(I.call) || !I(Object) || !I(function() {
                  P = !0;
                }) || P;
              }) ? L : I;
            }, 3607: function(m, w, s) {
              var o = s(2839).match(/AppleWebKit\/(\d+)\./);
              m.exports = !!o && +o[1];
            }, 3635: function(m, w, s) {
              var o = s(9039), l = s(4576).RegExp;
              m.exports = o(function() {
                var h = l(".", "s");
                return !(h.dotAll && h.test(`
`) && h.flags === "s");
              });
            }, 3640: function(m, w, s) {
              var o = s(8551), l = s(4270), h = TypeError;
              m.exports = function(g) {
                if (o(this), g === "string" || g === "default") g = "string";
                else if (g !== "number") throw new h("Incorrect hint");
                return l(this, g);
              };
            }, 3706: function(m, w, s) {
              var o = s(9504), l = s(4901), h = s(7629), g = o(Function.toString);
              l(h.inspectSource) || (h.inspectSource = function(b) {
                return g(b);
              }), m.exports = h.inspectSource;
            }, 3709: function(m, w, s) {
              var o = s(2839).match(/firefox\/(\d+)/i);
              m.exports = !!o && +o[1];
            }, 3717: function(m, w) {
              w.f = Object.getOwnPropertySymbols;
            }, 3724: function(m, w, s) {
              var o = s(9039);
              m.exports = !o(function() {
                return Object.defineProperty({}, 1, { get: function() {
                  return 7;
                } })[1] !== 7;
              });
            }, 3763: function(m, w, s) {
              var o = s(2839);
              m.exports = /MSIE|Trident/.test(o);
            }, 3792: function(m, w, s) {
              var o = s(5397), l = s(6469), h = s(6269), g = s(1181), b = s(4913).f, x = s(1088), E = s(2529), S = s(6395), T = s(3724), D = "Array Iterator", _ = g.set, I = g.getterFor(D);
              m.exports = x(Array, "Array", function(P, $) {
                _(this, { type: D, target: o(P), index: 0, kind: $ });
              }, function() {
                var P = I(this), $ = P.target, H = P.index++;
                if (!$ || H >= $.length) return P.target = null, E(void 0, !0);
                switch (P.kind) {
                  case "keys":
                    return E(H, !1);
                  case "values":
                    return E($[H], !1);
                }
                return E([H, $[H]], !1);
              }, "values");
              var L = h.Arguments = h.Array;
              if (l("keys"), l("values"), l("entries"), !S && T && L.name !== "values") try {
                b(L, "name", { value: "values" });
              } catch {
              }
            }, 3802: function(m, w, s) {
              var o = s(9504), l = s(7750), h = s(655), g = s(7452), b = o("".replace), x = RegExp("^[" + g + "]+"), E = RegExp("(^|[^" + g + "])[" + g + "]+$"), S = function(T) {
                return function(D) {
                  var _ = h(l(D));
                  return 1 & T && (_ = b(_, x, "")), 2 & T && (_ = b(_, E, "$1")), _;
                };
              };
              m.exports = { start: S(1), end: S(2), trim: S(3) };
            }, 3851: function(m, w, s) {
              var o = s(6518), l = s(9039), h = s(5397), g = s(7347).f, b = s(3724);
              o({ target: "Object", stat: !0, forced: !b || l(function() {
                g(1);
              }), sham: !b }, { getOwnPropertyDescriptor: function(x, E) {
                return g(h(x), E);
              } });
            }, 3925: function(m, w, s) {
              var o = s(34);
              m.exports = function(l) {
                return o(l) || l === null;
              };
            }, 3994: function(m, w, s) {
              var o = s(7657).IteratorPrototype, l = s(2360), h = s(6980), g = s(687), b = s(6269), x = function() {
                return this;
              };
              m.exports = function(E, S, T, D) {
                var _ = S + " Iterator";
                return E.prototype = l(o, { next: h(+!D, T) }), g(E, _, !1, !0), b[_] = x, E;
              };
            }, 4055: function(m, w, s) {
              var o = s(4576), l = s(34), h = o.document, g = l(h) && l(h.createElement);
              m.exports = function(b) {
                return g ? h.createElement(b) : {};
              };
            }, 4117: function(m) {
              m.exports = function(w) {
                return w == null;
              };
            }, 4209: function(m, w, s) {
              var o = s(8227), l = s(6269), h = o("iterator"), g = Array.prototype;
              m.exports = function(b) {
                return b !== void 0 && (l.Array === b || g[h] === b);
              };
            }, 4213: function(m, w, s) {
              var o = s(3724), l = s(9504), h = s(9565), g = s(9039), b = s(1072), x = s(3717), E = s(8773), S = s(8981), T = s(7055), D = Object.assign, _ = Object.defineProperty, I = l([].concat);
              m.exports = !D || g(function() {
                if (o && D({ b: 1 }, D(_({}, "a", { enumerable: !0, get: function() {
                  _(this, "b", { value: 3, enumerable: !1 });
                } }), { b: 2 })).b !== 1) return !0;
                var L = {}, P = {}, $ = Symbol("assign detection"), H = "abcdefghijklmnopqrst";
                return L[$] = 7, H.split("").forEach(function(V) {
                  P[V] = V;
                }), D({}, L)[$] !== 7 || b(D({}, P)).join("") !== H;
              }) ? function(L, P) {
                for (var $ = S(L), H = arguments.length, V = 1, ne = x.f, Y = E.f; H > V; ) for (var le, re = T(arguments[V++]), ee = ne ? I(b(re), ne(re)) : b(re), de = ee.length, pe = 0; de > pe; ) le = ee[pe++], o && !h(Y, re, le) || ($[le] = re[le]);
                return $;
              } : D;
            }, 4215: function(m, w, s) {
              var o = s(4576), l = s(2839), h = s(2195), g = function(b) {
                return l.slice(0, b.length) === b;
              };
              m.exports = g("Bun/") ? "BUN" : g("Cloudflare-Workers") ? "CLOUDFLARE" : g("Deno/") ? "DENO" : g("Node.js/") ? "NODE" : o.Bun && typeof Bun.version == "string" ? "BUN" : o.Deno && typeof Deno.version == "object" ? "DENO" : h(o.process) === "process" ? "NODE" : o.window && o.document ? "BROWSER" : "REST";
            }, 4270: function(m, w, s) {
              var o = s(9565), l = s(4901), h = s(34), g = TypeError;
              m.exports = function(b, x) {
                var E, S;
                if (x === "string" && l(E = b.toString) && !h(S = o(E, b)) || l(E = b.valueOf) && !h(S = o(E, b)) || x !== "string" && l(E = b.toString) && !h(S = o(E, b))) return S;
                throw new g("Can't convert object to primitive value");
              };
            }, 4376: function(m, w, s) {
              var o = s(2195);
              m.exports = Array.isArray || function(l) {
                return o(l) === "Array";
              };
            }, 4423: function(m, w, s) {
              var o = s(6518), l = s(9617).includes, h = s(9039), g = s(6469);
              o({ target: "Array", proto: !0, forced: h(function() {
                return !Array(1).includes();
              }) }, { includes: function(b) {
                return l(this, b, arguments.length > 1 ? arguments[1] : void 0);
              } }), g("includes");
            }, 4428: function(m, w, s) {
              var o = s(8227)("iterator"), l = !1;
              try {
                var h = 0, g = { next: function() {
                  return { done: !!h++ };
                }, return: function() {
                  l = !0;
                } };
                g[o] = function() {
                  return this;
                }, Array.from(g, function() {
                  throw 2;
                });
              } catch {
              }
              m.exports = function(b, x) {
                try {
                  if (!x && !l) return !1;
                } catch {
                  return !1;
                }
                var E = !1;
                try {
                  var S = {};
                  S[o] = function() {
                    return { next: function() {
                      return { done: E = !0 };
                    } };
                  }, b(S);
                } catch {
                }
                return E;
              };
            }, 4488: function(m, w, s) {
              var o = s(7680), l = Math.floor, h = function(g, b) {
                var x = g.length;
                if (x < 8) for (var E, S, T = 1; T < x; ) {
                  for (S = T, E = g[T]; S && b(g[S - 1], E) > 0; ) g[S] = g[--S];
                  S !== T++ && (g[S] = E);
                }
                else for (var D = l(x / 2), _ = h(o(g, 0, D), b), I = h(o(g, D), b), L = _.length, P = I.length, $ = 0, H = 0; $ < L || H < P; ) g[$ + H] = $ < L && H < P ? b(_[$], I[H]) <= 0 ? _[$++] : I[H++] : $ < L ? _[$++] : I[H++];
                return g;
              };
              m.exports = h;
            }, 4495: function(m, w, s) {
              var o = s(9519), l = s(9039), h = s(4576).String;
              m.exports = !!Object.getOwnPropertySymbols && !l(function() {
                var g = Symbol("symbol detection");
                return !h(g) || !(Object(g) instanceof Symbol) || !Symbol.sham && o && o < 41;
              });
            }, 4527: function(m, w, s) {
              var o = s(3724), l = s(4376), h = TypeError, g = Object.getOwnPropertyDescriptor, b = o && !function() {
                if (this !== void 0) return !0;
                try {
                  Object.defineProperty([], "length", { writable: !1 }).length = 1;
                } catch (x) {
                  return x instanceof TypeError;
                }
              }();
              m.exports = b ? function(x, E) {
                if (l(x) && !g(x, "length").writable) throw new h("Cannot set read only .length");
                return x.length = E;
              } : function(x, E) {
                return x.length = E;
              };
            }, 4554: function(m, w, s) {
              var o = s(6518), l = s(8981), h = s(5610), g = s(1291), b = s(6198), x = s(4527), E = s(6837), S = s(1469), T = s(4659), D = s(4606), _ = s(597)("splice"), I = Math.max, L = Math.min;
              o({ target: "Array", proto: !0, forced: !_ }, { splice: function(P, $) {
                var H, V, ne, Y, le, re, ee = l(this), de = b(ee), pe = h(P, de), oe = arguments.length;
                for (oe === 0 ? H = V = 0 : oe === 1 ? (H = 0, V = de - pe) : (H = oe - 2, V = L(I(g($), 0), de - pe)), E(de + H - V), ne = S(ee, V), Y = 0; Y < V; Y++) (le = pe + Y) in ee && T(ne, Y, ee[le]);
                if (ne.length = V, H < V) {
                  for (Y = pe; Y < de - V; Y++) re = Y + H, (le = Y + V) in ee ? ee[re] = ee[le] : D(ee, re);
                  for (Y = de; Y > de - V + H; Y--) D(ee, Y - 1);
                } else if (H > V) for (Y = de - V; Y > pe; Y--) re = Y + H - 1, (le = Y + V - 1) in ee ? ee[re] = ee[le] : D(ee, re);
                for (Y = 0; Y < H; Y++) ee[Y + pe] = arguments[Y + 2];
                return x(ee, de - V + H), ne;
              } });
            }, 4576: function(m, w, s) {
              var o = function(l) {
                return l && l.Math === Math && l;
              };
              m.exports = o(typeof globalThis == "object" && globalThis) || o(typeof window == "object" && window) || o(typeof self == "object" && self) || o(typeof s.g == "object" && s.g) || o(typeof this == "object" && this) || /* @__PURE__ */ function() {
                return this;
              }() || Function("return this")();
            }, 4598: function(m, w, s) {
              var o = s(9039);
              m.exports = function(l, h) {
                var g = [][l];
                return !!g && o(function() {
                  g.call(null, h || function() {
                    return 1;
                  }, 1);
                });
              };
            }, 4606: function(m, w, s) {
              var o = s(6823), l = TypeError;
              m.exports = function(h, g) {
                if (!delete h[g]) throw new l("Cannot delete property " + o(g) + " of " + o(h));
              };
            }, 4659: function(m, w, s) {
              var o = s(3724), l = s(4913), h = s(6980);
              m.exports = function(g, b, x) {
                o ? l.f(g, b, h(0, x)) : g[b] = x;
              };
            }, 4782: function(m, w, s) {
              var o = s(6518), l = s(4376), h = s(3517), g = s(34), b = s(5610), x = s(6198), E = s(5397), S = s(4659), T = s(8227), D = s(597), _ = s(7680), I = D("slice"), L = T("species"), P = Array, $ = Math.max;
              o({ target: "Array", proto: !0, forced: !I }, { slice: function(H, V) {
                var ne, Y, le, re = E(this), ee = x(re), de = b(H, ee), pe = b(V === void 0 ? ee : V, ee);
                if (l(re) && (ne = re.constructor, (h(ne) && (ne === P || l(ne.prototype)) || g(ne) && (ne = ne[L]) === null) && (ne = void 0), ne === P || ne === void 0)) return _(re, de, pe);
                for (Y = new (ne === void 0 ? P : ne)($(pe - de, 0)), le = 0; de < pe; de++, le++) de in re && S(Y, le, re[de]);
                return Y.length = le, Y;
              } });
            }, 4864: function(m, w, s) {
              var o = s(3724), l = s(4576), h = s(9504), g = s(2796), b = s(3167), x = s(6699), E = s(2360), S = s(8480).f, T = s(1625), D = s(788), _ = s(655), I = s(1034), L = s(8429), P = s(1056), $ = s(6840), H = s(9039), V = s(9297), ne = s(1181).enforce, Y = s(7633), le = s(8227), re = s(3635), ee = s(8814), de = le("match"), pe = l.RegExp, oe = pe.prototype, Ce = l.SyntaxError, ge = h(oe.exec), Ee = h("".charAt), Xe = h("".replace), Me = h("".indexOf), ye = h("".slice), Be = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/, Ne = /a/g, He = /a/g, De = new pe(Ne) !== Ne, Ue = L.MISSED_STICKY, Re = L.UNSUPPORTED_Y;
              if (g("RegExp", o && (!De || Ue || re || ee || H(function() {
                return He[de] = !1, pe(Ne) !== Ne || pe(He) === He || String(pe(Ne, "i")) !== "/a/i";
              })))) {
                for (var Se = function(it, ut) {
                  var yt, Mt, nn, cn, hn, Xt, M = T(oe, this), se = D(it), he = ut === void 0, _e = [], Ye = it;
                  if (!M && se && he && it.constructor === Se) return it;
                  if ((se || T(oe, it)) && (it = it.source, he && (ut = I(Ye))), it = it === void 0 ? "" : _(it), ut = ut === void 0 ? "" : _(ut), Ye = it, re && "dotAll" in Ne && (Mt = !!ut && Me(ut, "s") > -1) && (ut = Xe(ut, /s/g, "")), yt = ut, Ue && "sticky" in Ne && (nn = !!ut && Me(ut, "y") > -1) && Re && (ut = Xe(ut, /y/g, "")), ee && (cn = function(Pe) {
                    for (var ke, ze = Pe.length, ot = 0, at = "", ct = [], Ot = E(null), Yt = !1, Ht = !1, vt = 0, un = ""; ot <= ze; ot++) {
                      if ((ke = Ee(Pe, ot)) === "\\") ke += Ee(Pe, ++ot);
                      else if (ke === "]") Yt = !1;
                      else if (!Yt) switch (!0) {
                        case ke === "[":
                          Yt = !0;
                          break;
                        case ke === "(":
                          if (at += ke, ye(Pe, ot + 1, ot + 3) === "?:") continue;
                          ge(Be, ye(Pe, ot + 1)) && (ot += 2, Ht = !0), vt++;
                          continue;
                        case (ke === ">" && Ht):
                          if (un === "" || V(Ot, un)) throw new Ce("Invalid capture group name");
                          Ot[un] = !0, ct[ct.length] = [un, vt], Ht = !1, un = "";
                          continue;
                      }
                      Ht ? un += ke : at += ke;
                    }
                    return [at, ct];
                  }(it), it = cn[0], _e = cn[1]), hn = b(pe(it, ut), M ? this : oe, Se), (Mt || nn || _e.length) && (Xt = ne(hn), Mt && (Xt.dotAll = !0, Xt.raw = Se(function(Pe) {
                    for (var ke, ze = Pe.length, ot = 0, at = "", ct = !1; ot <= ze; ot++) (ke = Ee(Pe, ot)) !== "\\" ? ct || ke !== "." ? (ke === "[" ? ct = !0 : ke === "]" && (ct = !1), at += ke) : at += "[\\s\\S]" : at += ke + Ee(Pe, ++ot);
                    return at;
                  }(it), yt)), nn && (Xt.sticky = !0), _e.length && (Xt.groups = _e)), it !== Ye) try {
                    x(hn, "source", Ye === "" ? "(?:)" : Ye);
                  } catch {
                  }
                  return hn;
                }, Oe = S(pe), nt = 0; Oe.length > nt; ) P(Se, pe, Oe[nt++]);
                oe.constructor = Se, Se.prototype = oe, $(l, "RegExp", Se, { constructor: !0 });
              }
              Y("RegExp");
            }, 4901: function(m) {
              var w = typeof document == "object" && document.all;
              m.exports = w === void 0 && w !== void 0 ? function(s) {
                return typeof s == "function" || s === w;
              } : function(s) {
                return typeof s == "function";
              };
            }, 4913: function(m, w, s) {
              var o = s(3724), l = s(5917), h = s(8686), g = s(8551), b = s(6969), x = TypeError, E = Object.defineProperty, S = Object.getOwnPropertyDescriptor, T = "enumerable", D = "configurable", _ = "writable";
              w.f = o ? h ? function(I, L, P) {
                if (g(I), L = b(L), g(P), typeof I == "function" && L === "prototype" && "value" in P && _ in P && !P[_]) {
                  var $ = S(I, L);
                  $ && $[_] && (I[L] = P.value, P = { configurable: D in P ? P[D] : $[D], enumerable: T in P ? P[T] : $[T], writable: !1 });
                }
                return E(I, L, P);
              } : E : function(I, L, P) {
                if (g(I), L = b(L), g(P), l) try {
                  return E(I, L, P);
                } catch {
                }
                if ("get" in P || "set" in P) throw new x("Accessors not supported");
                return "value" in P && (I[L] = P.value), I;
              };
            }, 5031: function(m, w, s) {
              var o = s(7751), l = s(9504), h = s(8480), g = s(3717), b = s(8551), x = l([].concat);
              m.exports = o("Reflect", "ownKeys") || function(E) {
                var S = h.f(b(E)), T = g.f;
                return T ? x(S, T(E)) : S;
              };
            }, 5276: function(m, w, s) {
              var o = s(6518), l = s(7476), h = s(9617).indexOf, g = s(4598), b = l([].indexOf), x = !!b && 1 / b([1], 1, -0) < 0;
              o({ target: "Array", proto: !0, forced: x || !g("indexOf") }, { indexOf: function(E) {
                var S = arguments.length > 1 ? arguments[1] : void 0;
                return x ? b(this, E, S) || 0 : h(this, E, S);
              } });
            }, 5397: function(m, w, s) {
              var o = s(7055), l = s(7750);
              m.exports = function(h) {
                return o(l(h));
              };
            }, 5440: function(m, w, s) {
              var o = s(8745), l = s(9565), h = s(9504), g = s(9228), b = s(9039), x = s(8551), E = s(4901), S = s(34), T = s(1291), D = s(8014), _ = s(655), I = s(7750), L = s(7829), P = s(5966), $ = s(2478), H = s(6682), V = s(8227)("replace"), ne = Math.max, Y = Math.min, le = h([].concat), re = h([].push), ee = h("".indexOf), de = h("".slice), pe = "a".replace(/./, "$0") === "$0", oe = !!/./[V] && /./[V]("a", "$0") === "";
              g("replace", function(Ce, ge, Ee) {
                var Xe = oe ? "$" : "$0";
                return [function(Me, ye) {
                  var Be = I(this), Ne = S(Me) ? P(Me, V) : void 0;
                  return Ne ? l(Ne, Me, Be, ye) : l(ge, _(Be), Me, ye);
                }, function(Me, ye) {
                  var Be = x(this), Ne = _(Me);
                  if (typeof ye == "string" && ee(ye, Xe) === -1 && ee(ye, "$<") === -1) {
                    var He = Ee(ge, Be, Ne, ye);
                    if (He.done) return He.value;
                  }
                  var De = E(ye);
                  De || (ye = _(ye));
                  var Ue, Re = Be.global;
                  Re && (Ue = Be.unicode, Be.lastIndex = 0);
                  for (var Se, Oe = []; (Se = H(Be, Ne)) !== null && (re(Oe, Se), Re); ) _(Se[0]) === "" && (Be.lastIndex = L(Ne, D(Be.lastIndex), Ue));
                  for (var nt, it = "", ut = 0, yt = 0; yt < Oe.length; yt++) {
                    for (var Mt, nn = _((Se = Oe[yt])[0]), cn = ne(Y(T(Se.index), Ne.length), 0), hn = [], Xt = 1; Xt < Se.length; Xt++) re(hn, (nt = Se[Xt]) === void 0 ? nt : String(nt));
                    var M = Se.groups;
                    if (De) {
                      var se = le([nn], hn, cn, Ne);
                      M !== void 0 && re(se, M), Mt = _(o(ye, void 0, se));
                    } else Mt = $(nn, Ne, cn, hn, M, ye);
                    cn >= ut && (it += de(Ne, ut, cn) + Mt, ut = cn + nn.length);
                  }
                  return it + de(Ne, ut);
                }];
              }, !!b(function() {
                var Ce = /./;
                return Ce.exec = function() {
                  var ge = [];
                  return ge.groups = { a: "7" }, ge;
                }, "".replace(Ce, "$<a>") !== "7";
              }) || !pe || oe);
            }, 5548: function(m, w, s) {
              var o = s(3517), l = s(6823), h = TypeError;
              m.exports = function(g) {
                if (o(g)) return g;
                throw new h(l(g) + " is not a constructor");
              };
            }, 5610: function(m, w, s) {
              var o = s(1291), l = Math.max, h = Math.min;
              m.exports = function(g, b) {
                var x = o(g);
                return x < 0 ? l(x + b, 0) : h(x, b);
              };
            }, 5700: function(m, w, s) {
              var o = s(511), l = s(8242);
              o("toPrimitive"), l();
            }, 5745: function(m, w, s) {
              var o = s(7629);
              m.exports = function(l, h) {
                return o[l] || (o[l] = h || {});
              };
            }, 5749: function(m, w, s) {
              var o = s(788), l = TypeError;
              m.exports = function(h) {
                if (o(h)) throw new l("The method doesn't accept regular expressions");
                return h;
              };
            }, 5917: function(m, w, s) {
              var o = s(3724), l = s(9039), h = s(4055);
              m.exports = !o && !l(function() {
                return Object.defineProperty(h("div"), "a", { get: function() {
                  return 7;
                } }).a !== 7;
              });
            }, 5966: function(m, w, s) {
              var o = s(9306), l = s(4117);
              m.exports = function(h, g) {
                var b = h[g];
                return l(b) ? void 0 : o(b);
              };
            }, 6080: function(m, w, s) {
              var o = s(7476), l = s(9306), h = s(616), g = o(o.bind);
              m.exports = function(b, x) {
                return l(b), x === void 0 ? b : h ? g(b, x) : function() {
                  return b.apply(x, arguments);
                };
              };
            }, 6099: function(m, w, s) {
              var o = s(2140), l = s(6840), h = s(3179);
              o || l(Object.prototype, "toString", h, { unsafe: !0 });
            }, 6119: function(m, w, s) {
              var o = s(5745), l = s(3392), h = o("keys");
              m.exports = function(g) {
                return h[g] || (h[g] = l(g));
              };
            }, 6193: function(m, w, s) {
              var o = s(4215);
              m.exports = o === "NODE";
            }, 6198: function(m, w, s) {
              var o = s(8014);
              m.exports = function(l) {
                return o(l.length);
              };
            }, 6269: function(m) {
              m.exports = {};
            }, 6319: function(m, w, s) {
              var o = s(8551), l = s(9539);
              m.exports = function(h, g, b, x) {
                try {
                  return x ? g(o(b)[0], b[1]) : g(b);
                } catch (E) {
                  l(h, "throw", E);
                }
              };
            }, 6395: function(m) {
              m.exports = !1;
            }, 6469: function(m, w, s) {
              var o = s(8227), l = s(2360), h = s(4913).f, g = o("unscopables"), b = Array.prototype;
              b[g] === void 0 && h(b, g, { configurable: !0, value: l(null) }), m.exports = function(x) {
                b[g][x] = !0;
              };
            }, 6518: function(m, w, s) {
              var o = s(4576), l = s(7347).f, h = s(6699), g = s(6840), b = s(9433), x = s(7740), E = s(2796);
              m.exports = function(S, T) {
                var D, _, I, L, P, $ = S.target, H = S.global, V = S.stat;
                if (D = H ? o : V ? o[$] || b($, {}) : o[$] && o[$].prototype) for (_ in T) {
                  if (L = T[_], I = S.dontCallGetSet ? (P = l(D, _)) && P.value : D[_], !E(H ? _ : $ + (V ? "." : "#") + _, S.forced) && I !== void 0) {
                    if (typeof L == typeof I) continue;
                    x(L, I);
                  }
                  (S.sham || I && I.sham) && h(L, "sham", !0), g(D, _, L, S);
                }
              };
            }, 6682: function(m, w, s) {
              var o = s(9565), l = s(8551), h = s(4901), g = s(2195), b = s(7323), x = TypeError;
              m.exports = function(E, S) {
                var T = E.exec;
                if (h(T)) {
                  var D = o(T, E, S);
                  return D !== null && l(D), D;
                }
                if (g(E) === "RegExp") return o(b, E, S);
                throw new x("RegExp#exec called on incompatible receiver");
              };
            }, 6699: function(m, w, s) {
              var o = s(3724), l = s(4913), h = s(6980);
              m.exports = o ? function(g, b, x) {
                return l.f(g, b, h(1, x));
              } : function(g, b, x) {
                return g[b] = x, g;
              };
            }, 6706: function(m, w, s) {
              var o = s(9504), l = s(9306);
              m.exports = function(h, g, b) {
                try {
                  return o(l(Object.getOwnPropertyDescriptor(h, g)[b]));
                } catch {
                }
              };
            }, 6761: function(m, w, s) {
              var o = s(6518), l = s(4576), h = s(9565), g = s(9504), b = s(6395), x = s(3724), E = s(4495), S = s(9039), T = s(9297), D = s(1625), _ = s(8551), I = s(5397), L = s(6969), P = s(655), $ = s(6980), H = s(2360), V = s(1072), ne = s(8480), Y = s(298), le = s(3717), re = s(7347), ee = s(4913), de = s(6801), pe = s(8773), oe = s(6840), Ce = s(2106), ge = s(5745), Ee = s(6119), Xe = s(421), Me = s(3392), ye = s(8227), Be = s(1951), Ne = s(511), He = s(8242), De = s(687), Ue = s(1181), Re = s(9213).forEach, Se = Ee("hidden"), Oe = "Symbol", nt = "prototype", it = Ue.set, ut = Ue.getterFor(Oe), yt = Object[nt], Mt = l.Symbol, nn = Mt && Mt[nt], cn = l.RangeError, hn = l.TypeError, Xt = l.QObject, M = re.f, se = ee.f, he = Y.f, _e = pe.f, Ye = g([].push), Pe = ge("symbols"), ke = ge("op-symbols"), ze = ge("wks"), ot = !Xt || !Xt[nt] || !Xt[nt].findChild, at = function($e, Qe, rt) {
                var lt = M(yt, Qe);
                lt && delete yt[Qe], se($e, Qe, rt), lt && $e !== yt && se(yt, Qe, lt);
              }, ct = x && S(function() {
                return H(se({}, "a", { get: function() {
                  return se(this, "a", { value: 7 }).a;
                } })).a !== 7;
              }) ? at : se, Ot = function($e, Qe) {
                var rt = Pe[$e] = H(nn);
                return it(rt, { type: Oe, tag: $e, description: Qe }), x || (rt.description = Qe), rt;
              }, Yt = function($e, Qe, rt) {
                $e === yt && Yt(ke, Qe, rt), _($e);
                var lt = L(Qe);
                return _(rt), T(Pe, lt) ? (rt.enumerable ? (T($e, Se) && $e[Se][lt] && ($e[Se][lt] = !1), rt = H(rt, { enumerable: $(0, !1) })) : (T($e, Se) || se($e, Se, $(1, H(null))), $e[Se][lt] = !0), ct($e, lt, rt)) : se($e, lt, rt);
              }, Ht = function($e, Qe) {
                _($e);
                var rt = I(Qe), lt = V(rt).concat(Fr(rt));
                return Re(lt, function(Bt) {
                  x && !h(vt, rt, Bt) || Yt($e, Bt, rt[Bt]);
                }), $e;
              }, vt = function($e) {
                var Qe = L($e), rt = h(_e, this, Qe);
                return !(this === yt && T(Pe, Qe) && !T(ke, Qe)) && (!(rt || !T(this, Qe) || !T(Pe, Qe) || T(this, Se) && this[Se][Qe]) || rt);
              }, un = function($e, Qe) {
                var rt = I($e), lt = L(Qe);
                if (rt !== yt || !T(Pe, lt) || T(ke, lt)) {
                  var Bt = M(rt, lt);
                  return !Bt || !T(Pe, lt) || T(rt, Se) && rt[Se][lt] || (Bt.enumerable = !0), Bt;
                }
              }, Dr = function($e) {
                var Qe = he(I($e)), rt = [];
                return Re(Qe, function(lt) {
                  T(Pe, lt) || T(Xe, lt) || Ye(rt, lt);
                }), rt;
              }, Fr = function($e) {
                var Qe = $e === yt, rt = he(Qe ? ke : I($e)), lt = [];
                return Re(rt, function(Bt) {
                  !T(Pe, Bt) || Qe && !T(yt, Bt) || Ye(lt, Pe[Bt]);
                }), lt;
              };
              E || (Mt = function() {
                if (D(nn, this)) throw new hn("Symbol is not a constructor");
                var $e = arguments.length && arguments[0] !== void 0 ? P(arguments[0]) : void 0, Qe = Me($e), rt = function(lt) {
                  var Bt = this === void 0 ? l : this;
                  Bt === yt && h(rt, ke, lt), T(Bt, Se) && T(Bt[Se], Qe) && (Bt[Se][Qe] = !1);
                  var No = $(1, lt);
                  try {
                    ct(Bt, Qe, No);
                  } catch (Po) {
                    if (!(Po instanceof cn)) throw Po;
                    at(Bt, Qe, No);
                  }
                };
                return x && ot && ct(yt, Qe, { configurable: !0, set: rt }), Ot(Qe, $e);
              }, oe(nn = Mt[nt], "toString", function() {
                return ut(this).tag;
              }), oe(Mt, "withoutSetter", function($e) {
                return Ot(Me($e), $e);
              }), pe.f = vt, ee.f = Yt, de.f = Ht, re.f = un, ne.f = Y.f = Dr, le.f = Fr, Be.f = function($e) {
                return Ot(ye($e), $e);
              }, x && (Ce(nn, "description", { configurable: !0, get: function() {
                return ut(this).description;
              } }), b || oe(yt, "propertyIsEnumerable", vt, { unsafe: !0 }))), o({ global: !0, constructor: !0, wrap: !0, forced: !E, sham: !E }, { Symbol: Mt }), Re(V(ze), function($e) {
                Ne($e);
              }), o({ target: Oe, stat: !0, forced: !E }, { useSetter: function() {
                ot = !0;
              }, useSimple: function() {
                ot = !1;
              } }), o({ target: "Object", stat: !0, forced: !E, sham: !x }, { create: function($e, Qe) {
                return Qe === void 0 ? H($e) : Ht(H($e), Qe);
              }, defineProperty: Yt, defineProperties: Ht, getOwnPropertyDescriptor: un }), o({ target: "Object", stat: !0, forced: !E }, { getOwnPropertyNames: Dr }), He(), De(Mt, Oe), Xe[Se] = !0;
            }, 6801: function(m, w, s) {
              var o = s(3724), l = s(8686), h = s(4913), g = s(8551), b = s(5397), x = s(1072);
              w.f = o && !l ? Object.defineProperties : function(E, S) {
                g(E);
                for (var T, D = b(S), _ = x(S), I = _.length, L = 0; I > L; ) h.f(E, T = _[L++], D[T]);
                return E;
              };
            }, 6823: function(m) {
              var w = String;
              m.exports = function(s) {
                try {
                  return w(s);
                } catch {
                  return "Object";
                }
              };
            }, 6837: function(m) {
              var w = TypeError;
              m.exports = function(s) {
                if (s > 9007199254740991) throw w("Maximum allowed index exceeded");
                return s;
              };
            }, 6840: function(m, w, s) {
              var o = s(4901), l = s(4913), h = s(283), g = s(9433);
              m.exports = function(b, x, E, S) {
                S || (S = {});
                var T = S.enumerable, D = S.name !== void 0 ? S.name : x;
                if (o(E) && h(E, D, S), S.global) T ? b[x] = E : g(x, E);
                else {
                  try {
                    S.unsafe ? b[x] && (T = !0) : delete b[x];
                  } catch {
                  }
                  T ? b[x] = E : l.f(b, x, { value: E, enumerable: !1, configurable: !S.nonConfigurable, writable: !S.nonWritable });
                }
                return b;
              };
            }, 6910: function(m, w, s) {
              var o = s(6518), l = s(9504), h = s(9306), g = s(8981), b = s(6198), x = s(4606), E = s(655), S = s(9039), T = s(4488), D = s(4598), _ = s(3709), I = s(3763), L = s(9519), P = s(3607), $ = [], H = l($.sort), V = l($.push), ne = S(function() {
                $.sort(void 0);
              }), Y = S(function() {
                $.sort(null);
              }), le = D("sort"), re = !S(function() {
                if (L) return L < 70;
                if (!(_ && _ > 3)) {
                  if (I) return !0;
                  if (P) return P < 603;
                  var ee, de, pe, oe, Ce = "";
                  for (ee = 65; ee < 76; ee++) {
                    switch (de = String.fromCharCode(ee), ee) {
                      case 66:
                      case 69:
                      case 70:
                      case 72:
                        pe = 3;
                        break;
                      case 68:
                      case 71:
                        pe = 4;
                        break;
                      default:
                        pe = 2;
                    }
                    for (oe = 0; oe < 47; oe++) $.push({ k: de + oe, v: pe });
                  }
                  for ($.sort(function(ge, Ee) {
                    return Ee.v - ge.v;
                  }), oe = 0; oe < $.length; oe++) de = $[oe].k.charAt(0), Ce.charAt(Ce.length - 1) !== de && (Ce += de);
                  return Ce !== "DGBEFHACIJK";
                }
              });
              o({ target: "Array", proto: !0, forced: ne || !Y || !le || !re }, { sort: function(ee) {
                ee !== void 0 && h(ee);
                var de = g(this);
                if (re) return ee === void 0 ? H(de) : H(de, ee);
                var pe, oe, Ce = [], ge = b(de);
                for (oe = 0; oe < ge; oe++) oe in de && V(Ce, de[oe]);
                for (T(Ce, /* @__PURE__ */ function(Ee) {
                  return function(Xe, Me) {
                    return Me === void 0 ? -1 : Xe === void 0 ? 1 : Ee !== void 0 ? +Ee(Xe, Me) || 0 : E(Xe) > E(Me) ? 1 : -1;
                  };
                }(ee)), pe = b(Ce), oe = 0; oe < pe; ) de[oe] = Ce[oe++];
                for (; oe < ge; ) x(de, oe++);
                return de;
              } });
            }, 6933: function(m, w, s) {
              var o = s(9504), l = s(4376), h = s(4901), g = s(2195), b = s(655), x = o([].push);
              m.exports = function(E) {
                if (h(E)) return E;
                if (l(E)) {
                  for (var S = E.length, T = [], D = 0; D < S; D++) {
                    var _ = E[D];
                    typeof _ == "string" ? x(T, _) : typeof _ != "number" && g(_) !== "Number" && g(_) !== "String" || x(T, b(_));
                  }
                  var I = T.length, L = !0;
                  return function(P, $) {
                    if (L) return L = !1, $;
                    if (l(this)) return $;
                    for (var H = 0; H < I; H++) if (T[H] === P) return $;
                  };
                }
              };
            }, 6955: function(m, w, s) {
              var o = s(2140), l = s(4901), h = s(2195), g = s(8227)("toStringTag"), b = Object, x = h(/* @__PURE__ */ function() {
                return arguments;
              }()) === "Arguments";
              m.exports = o ? h : function(E) {
                var S, T, D;
                return E === void 0 ? "Undefined" : E === null ? "Null" : typeof (T = function(_, I) {
                  try {
                    return _[I];
                  } catch {
                  }
                }(S = b(E), g)) == "string" ? T : x ? h(S) : (D = h(S)) === "Object" && l(S.callee) ? "Arguments" : D;
              };
            }, 6969: function(m, w, s) {
              var o = s(2777), l = s(757);
              m.exports = function(h) {
                var g = o(h, "string");
                return l(g) ? g : g + "";
              };
            }, 6980: function(m) {
              m.exports = function(w, s) {
                return { enumerable: !(1 & w), configurable: !(2 & w), writable: !(4 & w), value: s };
              };
            }, 7040: function(m, w, s) {
              var o = s(4495);
              m.exports = o && !Symbol.sham && typeof Symbol.iterator == "symbol";
            }, 7055: function(m, w, s) {
              var o = s(9504), l = s(9039), h = s(2195), g = Object, b = o("".split);
              m.exports = l(function() {
                return !g("z").propertyIsEnumerable(0);
              }) ? function(x) {
                return h(x) === "String" ? b(x, "") : g(x);
              } : g;
            }, 7323: function(m, w, s) {
              var o, l, h = s(9565), g = s(9504), b = s(655), x = s(7979), E = s(8429), S = s(5745), T = s(2360), D = s(1181).get, _ = s(3635), I = s(8814), L = S("native-string-replace", String.prototype.replace), P = RegExp.prototype.exec, $ = P, H = g("".charAt), V = g("".indexOf), ne = g("".replace), Y = g("".slice), le = (l = /b*/g, h(P, o = /a/, "a"), h(P, l, "a"), o.lastIndex !== 0 || l.lastIndex !== 0), re = E.BROKEN_CARET, ee = /()??/.exec("")[1] !== void 0;
              (le || ee || re || _ || I) && ($ = function(de) {
                var pe, oe, Ce, ge, Ee, Xe, Me, ye = this, Be = D(ye), Ne = b(de), He = Be.raw;
                if (He) return He.lastIndex = ye.lastIndex, pe = h($, He, Ne), ye.lastIndex = He.lastIndex, pe;
                var De = Be.groups, Ue = re && ye.sticky, Re = h(x, ye), Se = ye.source, Oe = 0, nt = Ne;
                if (Ue && (Re = ne(Re, "y", ""), V(Re, "g") === -1 && (Re += "g"), nt = Y(Ne, ye.lastIndex), ye.lastIndex > 0 && (!ye.multiline || ye.multiline && H(Ne, ye.lastIndex - 1) !== `
`) && (Se = "(?: " + Se + ")", nt = " " + nt, Oe++), oe = new RegExp("^(?:" + Se + ")", Re)), ee && (oe = new RegExp("^" + Se + "$(?!\\s)", Re)), le && (Ce = ye.lastIndex), ge = h(P, Ue ? oe : ye, nt), Ue ? ge ? (ge.input = Y(ge.input, Oe), ge[0] = Y(ge[0], Oe), ge.index = ye.lastIndex, ye.lastIndex += ge[0].length) : ye.lastIndex = 0 : le && ge && (ye.lastIndex = ye.global ? ge.index + ge[0].length : Ce), ee && ge && ge.length > 1 && h(L, ge[0], oe, function() {
                  for (Ee = 1; Ee < arguments.length - 2; Ee++) arguments[Ee] === void 0 && (ge[Ee] = void 0);
                }), ge && De) for (ge.groups = Xe = T(null), Ee = 0; Ee < De.length; Ee++) Xe[(Me = De[Ee])[0]] = ge[Me[1]];
                return ge;
              }), m.exports = $;
            }, 7347: function(m, w, s) {
              var o = s(3724), l = s(9565), h = s(8773), g = s(6980), b = s(5397), x = s(6969), E = s(9297), S = s(5917), T = Object.getOwnPropertyDescriptor;
              w.f = o ? T : function(D, _) {
                if (D = b(D), _ = x(_), S) try {
                  return T(D, _);
                } catch {
                }
                if (E(D, _)) return g(!l(h.f, D, _), D[_]);
              };
            }, 7400: function(m) {
              m.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
            }, 7427: function(m, w, s) {
              var o = s(6518), l = s(3724), h = s(2551), g = s(9306), b = s(8981), x = s(4913);
              l && o({ target: "Object", proto: !0, forced: h }, { __defineGetter__: function(E, S) {
                x.f(b(this), E, { get: g(S), enumerable: !0, configurable: !0 });
              } });
            }, 7433: function(m, w, s) {
              var o = s(4376), l = s(3517), h = s(34), g = s(8227)("species"), b = Array;
              m.exports = function(x) {
                var E;
                return o(x) && (E = x.constructor, (l(E) && (E === b || o(E.prototype)) || h(E) && (E = E[g]) === null) && (E = void 0)), E === void 0 ? b : E;
              };
            }, 7452: function(m) {
              m.exports = `	
\v\f\r                　\u2028\u2029\uFEFF`;
            }, 7476: function(m, w, s) {
              var o = s(2195), l = s(9504);
              m.exports = function(h) {
                if (o(h) === "Function") return l(h);
              };
            }, 7495: function(m, w, s) {
              var o = s(6518), l = s(7323);
              o({ target: "RegExp", proto: !0, forced: /./.exec !== l }, { exec: l });
            }, 7629: function(m, w, s) {
              var o = s(6395), l = s(4576), h = s(9433), g = "__core-js_shared__", b = m.exports = l[g] || h(g, {});
              (b.versions || (b.versions = [])).push({ version: "3.42.0", mode: o ? "pure" : "global", copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.42.0/LICENSE", source: "https://github.com/zloirock/core-js" });
            }, 7633: function(m, w, s) {
              var o = s(7751), l = s(2106), h = s(8227), g = s(3724), b = h("species");
              m.exports = function(x) {
                var E = o(x);
                g && E && !E[b] && l(E, b, { configurable: !0, get: function() {
                  return this;
                } });
              };
            }, 7657: function(m, w, s) {
              var o, l, h, g = s(9039), b = s(4901), x = s(34), E = s(2360), S = s(2787), T = s(6840), D = s(8227), _ = s(6395), I = D("iterator"), L = !1;
              [].keys && ("next" in (h = [].keys()) ? (l = S(S(h))) !== Object.prototype && (o = l) : L = !0), !x(o) || g(function() {
                var P = {};
                return o[I].call(P) !== P;
              }) ? o = {} : _ && (o = E(o)), b(o[I]) || T(o, I, function() {
                return this;
              }), m.exports = { IteratorPrototype: o, BUGGY_SAFARI_ITERATORS: L };
            }, 7680: function(m, w, s) {
              var o = s(9504);
              m.exports = o([].slice);
            }, 7740: function(m, w, s) {
              var o = s(9297), l = s(5031), h = s(7347), g = s(4913);
              m.exports = function(b, x, E) {
                for (var S = l(x), T = g.f, D = h.f, _ = 0; _ < S.length; _++) {
                  var I = S[_];
                  o(b, I) || E && o(E, I) || T(b, I, D(x, I));
                }
              };
            }, 7750: function(m, w, s) {
              var o = s(4117), l = TypeError;
              m.exports = function(h) {
                if (o(h)) throw new l("Can't call method on " + h);
                return h;
              };
            }, 7751: function(m, w, s) {
              var o = s(4576), l = s(4901);
              m.exports = function(h, g) {
                return arguments.length < 2 ? (b = o[h], l(b) ? b : void 0) : o[h] && o[h][g];
                var b;
              };
            }, 7764: function(m, w, s) {
              var o = s(8183).charAt, l = s(655), h = s(1181), g = s(1088), b = s(2529), x = "String Iterator", E = h.set, S = h.getterFor(x);
              g(String, "String", function(T) {
                E(this, { type: x, string: l(T), index: 0 });
              }, function() {
                var T, D = S(this), _ = D.string, I = D.index;
                return I >= _.length ? b(void 0, !0) : (T = o(_, I), D.index += T.length, b(T, !1));
              });
            }, 7812: function(m, w, s) {
              var o = s(6518), l = s(9297), h = s(757), g = s(6823), b = s(5745), x = s(1296), E = b("symbol-to-string-registry");
              o({ target: "Symbol", stat: !0, forced: !x }, { keyFor: function(S) {
                if (!h(S)) throw new TypeError(g(S) + " is not a symbol");
                if (l(E, S)) return E[S];
              } });
            }, 7829: function(m, w, s) {
              var o = s(8183).charAt;
              m.exports = function(l, h, g) {
                return h + (g ? o(l, h).length : 1);
              };
            }, 7916: function(m, w, s) {
              var o = s(6080), l = s(9565), h = s(8981), g = s(6319), b = s(4209), x = s(3517), E = s(6198), S = s(4659), T = s(81), D = s(851), _ = Array;
              m.exports = function(I) {
                var L = h(I), P = x(this), $ = arguments.length, H = $ > 1 ? arguments[1] : void 0, V = H !== void 0;
                V && (H = o(H, $ > 2 ? arguments[2] : void 0));
                var ne, Y, le, re, ee, de, pe = D(L), oe = 0;
                if (!pe || this === _ && b(pe)) for (ne = E(L), Y = P ? new this(ne) : _(ne); ne > oe; oe++) de = V ? H(L[oe], oe) : L[oe], S(Y, oe, de);
                else for (Y = P ? new this() : [], ee = (re = T(L, pe)).next; !(le = l(ee, re)).done; oe++) de = V ? g(re, H, [le.value, oe], !0) : le.value, S(Y, oe, de);
                return Y.length = oe, Y;
              };
            }, 7979: function(m, w, s) {
              var o = s(8551);
              m.exports = function() {
                var l = o(this), h = "";
                return l.hasIndices && (h += "d"), l.global && (h += "g"), l.ignoreCase && (h += "i"), l.multiline && (h += "m"), l.dotAll && (h += "s"), l.unicode && (h += "u"), l.unicodeSets && (h += "v"), l.sticky && (h += "y"), h;
              };
            }, 8014: function(m, w, s) {
              var o = s(1291), l = Math.min;
              m.exports = function(h) {
                var g = o(h);
                return g > 0 ? l(g, 9007199254740991) : 0;
              };
            }, 8183: function(m, w, s) {
              var o = s(9504), l = s(1291), h = s(655), g = s(7750), b = o("".charAt), x = o("".charCodeAt), E = o("".slice), S = function(T) {
                return function(D, _) {
                  var I, L, P = h(g(D)), $ = l(_), H = P.length;
                  return $ < 0 || $ >= H ? T ? "" : void 0 : (I = x(P, $)) < 55296 || I > 56319 || $ + 1 === H || (L = x(P, $ + 1)) < 56320 || L > 57343 ? T ? b(P, $) : I : T ? E(P, $, $ + 2) : L - 56320 + (I - 55296 << 10) + 65536;
                };
              };
              m.exports = { codeAt: S(!1), charAt: S(!0) };
            }, 8227: function(m, w, s) {
              var o = s(4576), l = s(5745), h = s(9297), g = s(3392), b = s(4495), x = s(7040), E = o.Symbol, S = l("wks"), T = x ? E.for || E : E && E.withoutSetter || g;
              m.exports = function(D) {
                return h(S, D) || (S[D] = b && h(E, D) ? E[D] : T("Symbol." + D)), S[D];
              };
            }, 8242: function(m, w, s) {
              var o = s(9565), l = s(7751), h = s(8227), g = s(6840);
              m.exports = function() {
                var b = l("Symbol"), x = b && b.prototype, E = x && x.valueOf, S = h("toPrimitive");
                x && !x[S] && g(x, S, function(T) {
                  return o(E, this);
                }, { arity: 1 });
              };
            }, 8344: function(m, w, s) {
              s(8543);
            }, 8429: function(m, w, s) {
              var o = s(9039), l = s(4576).RegExp, h = o(function() {
                var x = l("a", "y");
                return x.lastIndex = 2, x.exec("abcd") !== null;
              }), g = h || o(function() {
                return !l("a", "y").sticky;
              }), b = h || o(function() {
                var x = l("^r", "gy");
                return x.lastIndex = 2, x.exec("str") !== null;
              });
              m.exports = { BROKEN_CARET: b, MISSED_STICKY: g, UNSUPPORTED_Y: h };
            }, 8480: function(m, w, s) {
              var o = s(1828), l = s(8727).concat("length", "prototype");
              w.f = Object.getOwnPropertyNames || function(h) {
                return o(h, l);
              };
            }, 8543: function(m, w, s) {
              var o = s(6518), l = s(9565), h = s(7476), g = s(3994), b = s(2529), x = s(7750), E = s(8014), S = s(655), T = s(8551), D = s(34), _ = s(2195), I = s(788), L = s(1034), P = s(5966), $ = s(6840), H = s(9039), V = s(8227), ne = s(2293), Y = s(7829), le = s(6682), re = s(1181), ee = s(6395), de = V("matchAll"), pe = "RegExp String", oe = pe + " Iterator", Ce = re.set, ge = re.getterFor(oe), Ee = RegExp.prototype, Xe = TypeError, Me = h("".indexOf), ye = h("".matchAll), Be = !!ye && !H(function() {
                ye("a", /./);
              }), Ne = g(function(De, Ue, Re, Se) {
                Ce(this, { type: oe, regexp: De, string: Ue, global: Re, unicode: Se, done: !1 });
              }, pe, function() {
                var De = ge(this);
                if (De.done) return b(void 0, !0);
                var Ue = De.regexp, Re = De.string, Se = le(Ue, Re);
                return Se === null ? (De.done = !0, b(void 0, !0)) : De.global ? (S(Se[0]) === "" && (Ue.lastIndex = Y(Re, E(Ue.lastIndex), De.unicode)), b(Se, !1)) : (De.done = !0, b(Se, !1));
              }), He = function(De) {
                var Ue, Re, Se, Oe = T(this), nt = S(De), it = ne(Oe, RegExp), ut = S(L(Oe));
                return Ue = new it(it === RegExp ? Oe.source : Oe, ut), Re = !!~Me(ut, "g"), Se = !!~Me(ut, "u"), Ue.lastIndex = E(Oe.lastIndex), new Ne(Ue, nt, Re, Se);
              };
              o({ target: "String", proto: !0, forced: Be }, { matchAll: function(De) {
                var Ue, Re, Se, Oe, nt = x(this);
                if (D(De)) {
                  if (I(De) && (Ue = S(x(L(De))), !~Me(Ue, "g"))) throw new Xe("`.matchAll` does not allow non-global regexes");
                  if (Be) return ye(nt, De);
                  if ((Se = P(De, de)) === void 0 && ee && _(De) === "RegExp" && (Se = He), Se) return l(Se, De, nt);
                } else if (Be) return ye(nt, De);
                return Re = S(nt), Oe = new RegExp(De, "g"), ee ? l(He, Oe, Re) : Oe[de](Re);
              } }), ee || de in Ee || $(Ee, de, He);
            }, 8551: function(m, w, s) {
              var o = s(34), l = String, h = TypeError;
              m.exports = function(g) {
                if (o(g)) return g;
                throw new h(l(g) + " is not an object");
              };
            }, 8598: function(m, w, s) {
              var o = s(6518), l = s(9504), h = s(7055), g = s(5397), b = s(4598), x = l([].join);
              o({ target: "Array", proto: !0, forced: h !== Object || !b("join", ",") }, { join: function(E) {
                return x(g(this), E === void 0 ? "," : E);
              } });
            }, 8622: function(m, w, s) {
              var o = s(4576), l = s(4901), h = o.WeakMap;
              m.exports = l(h) && /native code/.test(String(h));
            }, 8686: function(m, w, s) {
              var o = s(3724), l = s(9039);
              m.exports = o && l(function() {
                return Object.defineProperty(function() {
                }, "prototype", { value: 42, writable: !1 }).prototype !== 42;
              });
            }, 8706: function(m, w, s) {
              var o = s(6518), l = s(9039), h = s(4376), g = s(34), b = s(8981), x = s(6198), E = s(6837), S = s(4659), T = s(1469), D = s(597), _ = s(8227), I = s(9519), L = _("isConcatSpreadable"), P = I >= 51 || !l(function() {
                var H = [];
                return H[L] = !1, H.concat()[0] !== H;
              }), $ = function(H) {
                if (!g(H)) return !1;
                var V = H[L];
                return V !== void 0 ? !!V : h(H);
              };
              o({ target: "Array", proto: !0, arity: 1, forced: !P || !D("concat") }, { concat: function(H) {
                var V, ne, Y, le, re, ee = b(this), de = T(ee, 0), pe = 0;
                for (V = -1, Y = arguments.length; V < Y; V++) if ($(re = V === -1 ? ee : arguments[V])) for (le = x(re), E(pe + le), ne = 0; ne < le; ne++, pe++) ne in re && S(de, pe, re[ne]);
                else E(pe + 1), S(de, pe++, re);
                return de.length = pe, de;
              } });
            }, 8727: function(m) {
              m.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
            }, 8745: function(m, w, s) {
              var o = s(616), l = Function.prototype, h = l.apply, g = l.call;
              m.exports = typeof Reflect == "object" && Reflect.apply || (o ? g.bind(h) : function() {
                return g.apply(h, arguments);
              });
            }, 8773: function(m, w) {
              var s = {}.propertyIsEnumerable, o = Object.getOwnPropertyDescriptor, l = o && !s.call({ 1: 2 }, 1);
              w.f = l ? function(h) {
                var g = o(this, h);
                return !!g && g.enumerable;
              } : s;
            }, 8781: function(m, w, s) {
              var o = s(350).PROPER, l = s(6840), h = s(8551), g = s(655), b = s(9039), x = s(1034), E = "toString", S = RegExp.prototype, T = S[E], D = b(function() {
                return T.call({ source: "a", flags: "b" }) !== "/a/b";
              }), _ = o && T.name !== E;
              (D || _) && l(S, E, function() {
                var I = h(this);
                return "/" + g(I.source) + "/" + g(x(I));
              }, { unsafe: !0 });
            }, 8814: function(m, w, s) {
              var o = s(9039), l = s(4576).RegExp;
              m.exports = o(function() {
                var h = l("(?<a>b)", "g");
                return h.exec("b").groups.a !== "b" || "b".replace(h, "$<a>c") !== "bc";
              });
            }, 8981: function(m, w, s) {
              var o = s(7750), l = Object;
              m.exports = function(h) {
                return l(o(h));
              };
            }, 9039: function(m) {
              m.exports = function(w) {
                try {
                  return !!w();
                } catch {
                  return !0;
                }
              };
            }, 9085: function(m, w, s) {
              var o = s(6518), l = s(4213);
              o({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== l }, { assign: l });
            }, 9167: function(m, w, s) {
              var o = s(4576);
              m.exports = o;
            }, 9213: function(m, w, s) {
              var o = s(6080), l = s(9504), h = s(7055), g = s(8981), b = s(6198), x = s(1469), E = l([].push), S = function(T) {
                var D = T === 1, _ = T === 2, I = T === 3, L = T === 4, P = T === 6, $ = T === 7, H = T === 5 || P;
                return function(V, ne, Y, le) {
                  for (var re, ee, de = g(V), pe = h(de), oe = b(pe), Ce = o(ne, Y), ge = 0, Ee = le || x, Xe = D ? Ee(V, oe) : _ || $ ? Ee(V, 0) : void 0; oe > ge; ge++) if ((H || ge in pe) && (ee = Ce(re = pe[ge], ge, de), T)) if (D) Xe[ge] = ee;
                  else if (ee) switch (T) {
                    case 3:
                      return !0;
                    case 5:
                      return re;
                    case 6:
                      return ge;
                    case 2:
                      E(Xe, re);
                  }
                  else switch (T) {
                    case 4:
                      return !1;
                    case 7:
                      E(Xe, re);
                  }
                  return P ? -1 : I || L ? L : Xe;
                };
              };
              m.exports = { forEach: S(0), map: S(1), filter: S(2), some: S(3), every: S(4), find: S(5), findIndex: S(6), filterReject: S(7) };
            }, 9228: function(m, w, s) {
              s(7495);
              var o = s(9565), l = s(6840), h = s(7323), g = s(9039), b = s(8227), x = s(6699), E = b("species"), S = RegExp.prototype;
              m.exports = function(T, D, _, I) {
                var L = b(T), P = !g(function() {
                  var ne = {};
                  return ne[L] = function() {
                    return 7;
                  }, ""[T](ne) !== 7;
                }), $ = P && !g(function() {
                  var ne = !1, Y = /a/;
                  return T === "split" && ((Y = {}).constructor = {}, Y.constructor[E] = function() {
                    return Y;
                  }, Y.flags = "", Y[L] = /./[L]), Y.exec = function() {
                    return ne = !0, null;
                  }, Y[L](""), !ne;
                });
                if (!P || !$ || _) {
                  var H = /./[L], V = D(L, ""[T], function(ne, Y, le, re, ee) {
                    var de = Y.exec;
                    return de === h || de === S.exec ? P && !ee ? { done: !0, value: o(H, Y, le, re) } : { done: !0, value: o(ne, le, Y, re) } : { done: !1 };
                  });
                  l(String.prototype, T, V[0]), l(S, L, V[1]);
                }
                I && x(S[L], "sham", !0);
              };
            }, 9296: function(m, w, s) {
              var o = s(4055)("span").classList, l = o && o.constructor && o.constructor.prototype;
              m.exports = l === Object.prototype ? void 0 : l;
            }, 9297: function(m, w, s) {
              var o = s(9504), l = s(8981), h = o({}.hasOwnProperty);
              m.exports = Object.hasOwn || function(g, b) {
                return h(l(g), b);
              };
            }, 9306: function(m, w, s) {
              var o = s(4901), l = s(6823), h = TypeError;
              m.exports = function(g) {
                if (o(g)) return g;
                throw new h(l(g) + " is not a function");
              };
            }, 9432: function(m, w, s) {
              var o = s(6518), l = s(8981), h = s(1072);
              o({ target: "Object", stat: !0, forced: s(9039)(function() {
                h(1);
              }) }, { keys: function(g) {
                return h(l(g));
              } });
            }, 9433: function(m, w, s) {
              var o = s(4576), l = Object.defineProperty;
              m.exports = function(h, g) {
                try {
                  l(o, h, { value: g, configurable: !0, writable: !0 });
                } catch {
                  o[h] = g;
                }
                return g;
              };
            }, 9463: function(m, w, s) {
              var o = s(6518), l = s(3724), h = s(4576), g = s(9504), b = s(9297), x = s(4901), E = s(1625), S = s(655), T = s(2106), D = s(7740), _ = h.Symbol, I = _ && _.prototype;
              if (l && x(_) && (!("description" in I) || _().description !== void 0)) {
                var L = {}, P = function() {
                  var re = arguments.length < 1 || arguments[0] === void 0 ? void 0 : S(arguments[0]), ee = E(I, this) ? new _(re) : re === void 0 ? _() : _(re);
                  return re === "" && (L[ee] = !0), ee;
                };
                D(P, _), P.prototype = I, I.constructor = P;
                var $ = String(_("description detection")) === "Symbol(description detection)", H = g(I.valueOf), V = g(I.toString), ne = /^Symbol\((.*)\)[^)]+$/, Y = g("".replace), le = g("".slice);
                T(I, "description", { configurable: !0, get: function() {
                  var re = H(this);
                  if (b(L, re)) return "";
                  var ee = V(re), de = $ ? le(ee, 7, -1) : Y(ee, ne, "$1");
                  return de === "" ? void 0 : de;
                } }), o({ global: !0, constructor: !0, forced: !0 }, { Symbol: P });
              }
            }, 9504: function(m, w, s) {
              var o = s(616), l = Function.prototype, h = l.call, g = o && l.bind.bind(h, h);
              m.exports = o ? g : function(b) {
                return function() {
                  return h.apply(b, arguments);
                };
              };
            }, 9519: function(m, w, s) {
              var o, l, h = s(4576), g = s(2839), b = h.process, x = h.Deno, E = b && b.versions || x && x.version, S = E && E.v8;
              S && (l = (o = S.split("."))[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !l && g && (!(o = g.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = g.match(/Chrome\/(\d+)/)) && (l = +o[1]), m.exports = l;
            }, 9539: function(m, w, s) {
              var o = s(9565), l = s(8551), h = s(5966);
              m.exports = function(g, b, x) {
                var E, S;
                l(g);
                try {
                  if (!(E = h(g, "return"))) {
                    if (b === "throw") throw x;
                    return x;
                  }
                  E = o(E, g);
                } catch (T) {
                  S = !0, E = T;
                }
                if (b === "throw") throw x;
                if (S) throw E;
                return l(E), x;
              };
            }, 9565: function(m, w, s) {
              var o = s(616), l = Function.prototype.call;
              m.exports = o ? l.bind(l) : function() {
                return l.apply(l, arguments);
              };
            }, 9572: function(m, w, s) {
              var o = s(9297), l = s(6840), h = s(3640), g = s(8227)("toPrimitive"), b = Date.prototype;
              o(b, g) || l(b, g, h);
            }, 9617: function(m, w, s) {
              var o = s(5397), l = s(5610), h = s(6198), g = function(b) {
                return function(x, E, S) {
                  var T = o(x), D = h(T);
                  if (D === 0) return !b && -1;
                  var _, I = l(S, D);
                  if (b && E != E) {
                    for (; D > I; ) if ((_ = T[I++]) != _) return !0;
                  } else for (; D > I; I++) if ((b || I in T) && T[I] === E) return b || I || 0;
                  return !b && -1;
                };
              };
              m.exports = { includes: g(!0), indexOf: g(!1) };
            }, 9773: function(m, w, s) {
              var o = s(6518), l = s(4495), h = s(9039), g = s(3717), b = s(8981);
              o({ target: "Object", stat: !0, forced: !l || h(function() {
                g.f(1);
              }) }, { getOwnPropertySymbols: function(x) {
                var E = g.f;
                return E ? E(b(x)) : [];
              } });
            } }, d = {};
            function f(m) {
              var w = d[m];
              if (w !== void 0) return w.exports;
              var s = d[m] = { exports: {} };
              return p[m].call(s.exports, s, s.exports, f), s.exports;
            }
            f.d = function(m, w) {
              for (var s in w) f.o(w, s) && !f.o(m, s) && Object.defineProperty(m, s, { enumerable: !0, get: w[s] });
            }, f.g = function() {
              if (typeof globalThis == "object") return globalThis;
              try {
                return this || new Function("return this")();
              } catch {
                if (typeof window == "object") return window;
              }
            }(), f.o = function(m, w) {
              return Object.prototype.hasOwnProperty.call(m, w);
            }, f.r = function(m) {
              typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(m, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(m, "__esModule", { value: !0 });
            };
            var v = {};
            function y(m) {
              return function(w) {
                if (Array.isArray(w)) return U(w);
              }(m) || function(w) {
                if (typeof Symbol < "u" && w[Symbol.iterator] != null || w["@@iterator"] != null) return Array.from(w);
              }(m) || A(m) || function() {
                throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }();
            }
            function A(m, w) {
              if (m) {
                if (typeof m == "string") return U(m, w);
                var s = {}.toString.call(m).slice(8, -1);
                return s === "Object" && m.constructor && (s = m.constructor.name), s === "Map" || s === "Set" ? Array.from(m) : s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? U(m, w) : void 0;
              }
            }
            function U(m, w) {
              (w == null || w > m.length) && (w = m.length);
              for (var s = 0, o = Array(w); s < w; s++) o[s] = m[s];
              return o;
            }
            function z(m) {
              return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
                return typeof w;
              } : function(w) {
                return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
              }, z(m);
            }
            function K(m, w) {
              for (var s = 0; s < w.length; s++) {
                var o = w[s];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(m, B(o.key), o);
              }
            }
            function R(m, w, s) {
              return (w = B(w)) in m ? Object.defineProperty(m, w, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : m[w] = s, m;
            }
            function B(m) {
              var w = function(s, o) {
                if (z(s) != "object" || !s) return s;
                var l = s[Symbol.toPrimitive];
                if (l !== void 0) {
                  var h = l.call(s, o);
                  if (z(h) != "object") return h;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return (o === "string" ? String : Number)(s);
              }(m, "string");
              return z(w) == "symbol" ? w : w + "";
            }
            f.r(v), f.d(v, { SimpleKeyboard: function() {
              return Br;
            }, default: function() {
              return Ss;
            } }), f(5276), f(8598), f(4782), f(4554), f(2010), f(7427), f(6099), f(7495), f(8781), f(5440), f(744), f(2762), typeof Element > "u" || "remove" in Element.prototype || (Element.prototype.remove = function() {
              this.parentNode && this.parentNode.removeChild(this);
            }), typeof self < "u" && "document" in self && ((!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) && function(m) {
              if ("Element" in m) {
                var w = "classList", s = "prototype", o = m.Element[s], l = Object, h = String[s].trim || function() {
                  return this.replace(/^\s+|\s+$/g, "");
                }, g = Array[s].indexOf || function(_) {
                  for (var I = 0, L = this.length; I < L; I++) if (I in this && this[I] === _) return I;
                  return -1;
                }, b = function(_, I) {
                  this.name = _, this.code = DOMException[_], this.message = I;
                }, x = function(_, I) {
                  if (I === "") throw new b("SYNTAX_ERR", "The token must not be empty.");
                  if (/\s/.test(I)) throw new b("INVALID_CHARACTER_ERR", "The token must not contain space characters.");
                  return g.call(_, I);
                }, E = function(_) {
                  for (var I = h.call(_.getAttribute("class") || ""), L = I ? I.split(/\s+/) : [], P = 0, $ = L.length; P < $; P++) this.push(L[P]);
                  this._updateClassName = function() {
                    _.setAttribute("class", this.toString());
                  };
                }, S = E[s] = [], T = function() {
                  return new E(this);
                };
                if (b[s] = Error[s], S.item = function(_) {
                  return this[_] || null;
                }, S.contains = function(_) {
                  return ~x(this, _ + "");
                }, S.add = function() {
                  var _, I = arguments, L = 0, P = I.length, $ = !1;
                  do
                    ~x(this, _ = I[L] + "") || (this.push(_), $ = !0);
                  while (++L < P);
                  $ && this._updateClassName();
                }, S.remove = function() {
                  var _, I, L = arguments, P = 0, $ = L.length, H = !1;
                  do
                    for (I = x(this, _ = L[P] + ""); ~I; ) this.splice(I, 1), H = !0, I = x(this, _);
                  while (++P < $);
                  H && this._updateClassName();
                }, S.toggle = function(_, I) {
                  var L = this.contains(_), P = L ? I !== !0 && "remove" : I !== !1 && "add";
                  return P && this[P](_), I === !0 || I === !1 ? I : !L;
                }, S.replace = function(_, I) {
                  var L = x(_ + "");
                  ~L && (this.splice(L, 1, I), this._updateClassName());
                }, S.toString = function() {
                  return this.join(" ");
                }, l.defineProperty) {
                  var D = { get: T, enumerable: !0, configurable: !0 };
                  try {
                    l.defineProperty(o, w, D);
                  } catch (_) {
                    _.number !== void 0 && _.number !== -2146823252 || (D.enumerable = !1, l.defineProperty(o, w, D));
                  }
                } else l[s].__defineGetter__ && o.__defineGetter__(w, T);
              }
            }(self), function() {
              var m = document.createElement("_");
              if (m.classList.add("c1", "c2"), !m.classList.contains("c2")) {
                var w = function(o) {
                  var l = DOMTokenList.prototype[o];
                  DOMTokenList.prototype[o] = function(h) {
                    var g, b = arguments.length;
                    for (g = 0; g < b; g++) h = arguments[g], l.call(this, h);
                  };
                };
                w("add"), w("remove");
              }
              if (m.classList.toggle("c3", !1), m.classList.contains("c3")) {
                var s = DOMTokenList.prototype.toggle;
                DOMTokenList.prototype.toggle = function(o, l) {
                  return 1 in arguments && !this.contains(o) == !l ? l : s.call(this, o);
                };
              }
              "replace" in document.createElement("_").classList || (DOMTokenList.prototype.replace = function(o, l) {
                var h = this.toString().split(" "), g = h.indexOf(o + "");
                ~g && (h = h.slice(g), this.remove.apply(this, h), this.add(l), this.add.apply(this, h.slice(1)));
              }), m = null;
            }()), f(2675), f(9463), f(2259), f(5700), f(8706), f(2008), f(3418), f(4423), f(3792), f(2062), f(6910), f(739), f(9572), f(2892), f(9085), f(3851), f(1278), f(9432), f(4864), f(1699), f(7764), f(8344), f(3500), f(2953), f(2712), f(2637), f(1480), f(825), f(1761);
            var q = function() {
              return m = function o(l) {
                var h = l.getOptions, g = l.getCaretPosition, b = l.getCaretPositionEnd, x = l.dispatch;
                (function(E, S) {
                  if (!(E instanceof S)) throw new TypeError("Cannot call a class as a function");
                })(this, o), R(this, "getOptions", void 0), R(this, "getCaretPosition", void 0), R(this, "getCaretPositionEnd", void 0), R(this, "dispatch", void 0), R(this, "maxLengthReached", void 0), R(this, "isStandardButton", function(E) {
                  return E && !(E[0] === "{" && E[E.length - 1] === "}");
                }), this.getOptions = h, this.getCaretPosition = g, this.getCaretPositionEnd = b, this.dispatch = x, o.bindMethods(o, this);
              }, w = [{ key: "getButtonType", value: function(o) {
                return o.includes("{") && o.includes("}") && o !== "{//}" ? "functionBtn" : "standardBtn";
              } }, { key: "getButtonClass", value: function(o) {
                var l = this.getButtonType(o), h = o.replace("{", "").replace("}", ""), g = "";
                return l !== "standardBtn" && (g = " hg-button-".concat(h)), "hg-".concat(l).concat(g);
              } }, { key: "getDefaultDiplay", value: function() {
                return { "{bksp}": "backspace", "{backspace}": "backspace", "{enter}": "< enter", "{shift}": "shift", "{shiftleft}": "shift", "{shiftright}": "shift", "{alt}": "alt", "{s}": "shift", "{tab}": "tab", "{lock}": "caps", "{capslock}": "caps", "{accept}": "Submit", "{space}": " ", "{//}": " ", "{esc}": "esc", "{escape}": "esc", "{f1}": "f1", "{f2}": "f2", "{f3}": "f3", "{f4}": "f4", "{f5}": "f5", "{f6}": "f6", "{f7}": "f7", "{f8}": "f8", "{f9}": "f9", "{f10}": "f10", "{f11}": "f11", "{f12}": "f12", "{numpaddivide}": "/", "{numlock}": "lock", "{arrowup}": "↑", "{arrowleft}": "←", "{arrowdown}": "↓", "{arrowright}": "→", "{prtscr}": "print", "{scrolllock}": "scroll", "{pause}": "pause", "{insert}": "ins", "{home}": "home", "{pageup}": "up", "{delete}": "del", "{forwarddelete}": "del", "{end}": "end", "{pagedown}": "down", "{numpadmultiply}": "*", "{numpadsubtract}": "-", "{numpadadd}": "+", "{numpadenter}": "enter", "{period}": ".", "{numpaddecimal}": ".", "{numpad0}": "0", "{numpad1}": "1", "{numpad2}": "2", "{numpad3}": "3", "{numpad4}": "4", "{numpad5}": "5", "{numpad6}": "6", "{numpad7}": "7", "{numpad8}": "8", "{numpad9}": "9" };
              } }, { key: "getButtonDisplayName", value: function(o, l) {
                return (l = arguments.length > 2 && arguments[2] !== void 0 && arguments[2] ? Object.assign({}, this.getDefaultDiplay(), l) : l || this.getDefaultDiplay())[o] || o;
              } }, { key: "getUpdatedInput", value: function(o, l, h) {
                var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : h, b = arguments.length > 4 && arguments[4] !== void 0 && arguments[4], x = this.getOptions(), E = [h, g, b], S = l;
                return (o === "{bksp}" || o === "{backspace}") && S.length > 0 ? S = this.removeAt.apply(this, [S].concat(E)) : (o === "{delete}" || o === "{forwarddelete}") && S.length > 0 ? S = this.removeForwardsAt.apply(this, [S].concat(E)) : o === "{space}" ? S = this.addStringAt.apply(this, [S, " "].concat(E)) : o !== "{tab}" || typeof x.tabCharOnTab == "boolean" && x.tabCharOnTab === !1 ? o !== "{enter}" && o !== "{numpadenter}" || !x.newLineOnEnter ? o.includes("numpad") && Number.isInteger(Number(o[o.length - 2])) ? S = this.addStringAt.apply(this, [S, o[o.length - 2]].concat(E)) : o === "{numpaddivide}" ? S = this.addStringAt.apply(this, [S, "/"].concat(E)) : o === "{numpadmultiply}" ? S = this.addStringAt.apply(this, [S, "*"].concat(E)) : o === "{numpadsubtract}" ? S = this.addStringAt.apply(this, [S, "-"].concat(E)) : o === "{numpadadd}" ? S = this.addStringAt.apply(this, [S, "+"].concat(E)) : o === "{numpaddecimal}" ? S = this.addStringAt.apply(this, [S, "."].concat(E)) : o === "{" || o === "}" ? S = this.addStringAt.apply(this, [S, o].concat(E)) : o.includes("{") || o.includes("}") || (S = this.addStringAt.apply(this, [S, o].concat(E))) : S = this.addStringAt.apply(this, [S, `
`].concat(E)) : S = this.addStringAt.apply(this, [S, "	"].concat(E)), x.debug && console.log("Input will be: " + S), S;
              } }, { key: "updateCaretPos", value: function(o) {
                var l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], h = this.updateCaretPosAction(o, l);
                this.dispatch(function(g) {
                  g.setCaretPosition(h);
                });
              } }, { key: "updateCaretPosAction", value: function(o) {
                var l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], h = this.getOptions(), g = this.getCaretPosition();
                return g != null && (l ? g > 0 && (g -= o) : g += o), h.debug && console.log("Caret at:", g), g;
              } }, { key: "addStringAt", value: function(o, l) {
                var h, g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : o.length, b = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : o.length, x = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
                return g || g === 0 ? (h = [o.slice(0, g), l, o.slice(b)].join(""), this.isMaxLengthReached() || x && this.updateCaretPos(l.length)) : h = o + l, h;
              } }, { key: "removeAt", value: function(o) {
                var l, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o.length, g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : o.length, b = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
                if (h === 0 && g === 0) return o;
                if (h === g) {
                  var x = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g;
                  h && h >= 0 ? o.substring(h - 2, h).match(x) ? (l = o.substr(0, h - 2) + o.substr(h), b && this.updateCaretPos(2, !0)) : (l = o.substr(0, h - 1) + o.substr(h), b && this.updateCaretPos(1, !0)) : o.slice(-2).match(x) ? (l = o.slice(0, -2), b && this.updateCaretPos(2, !0)) : (l = o.slice(0, -1), b && this.updateCaretPos(1, !0));
                } else l = o.slice(0, h) + o.slice(g), b && this.dispatch(function(E) {
                  E.setCaretPosition(h);
                });
                return l;
              } }, { key: "removeForwardsAt", value: function(o) {
                var l, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o.length, g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : o.length, b = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
                return o != null && o.length && h !== null ? (h === g ? l = o.substring(h, h + 2).match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/g) ? o.substr(0, h) + o.substr(h + 2) : o.substr(0, h) + o.substr(h + 1) : (l = o.slice(0, h) + o.slice(g), b && this.dispatch(function(x) {
                  x.setCaretPosition(h);
                })), l) : o;
              } }, { key: "handleMaxLength", value: function(o, l) {
                var h = this.getOptions(), g = h.maxLength, b = o[h.inputName || "default"], x = l.length - 1 >= g;
                if (l.length <= b.length) return !1;
                if (Number.isInteger(g)) return h.debug && console.log("maxLength (num) reached:", x), x ? (this.maxLengthReached = !0, !0) : (this.maxLengthReached = !1, !1);
                if (z(g) === "object") {
                  var E = l.length - 1 >= g[h.inputName || "default"];
                  return h.debug && console.log("maxLength (obj) reached:", E), E ? (this.maxLengthReached = !0, !0) : (this.maxLengthReached = !1, !1);
                }
              } }, { key: "isMaxLengthReached", value: function() {
                return !!this.maxLengthReached;
              } }, { key: "isTouchDevice", value: function() {
                return "ontouchstart" in window || navigator.maxTouchPoints;
              } }, { key: "pointerEventsSupported", value: function() {
                return !!window.PointerEvent;
              } }, { key: "camelCase", value: function(o) {
                return o ? o.toLowerCase().trim().split(/[.\-_\s]/g).reduce(function(l, h) {
                  return h.length ? l + h[0].toUpperCase() + h.slice(1) : l;
                }) : "";
              } }, { key: "chunkArray", value: function(o, l) {
                return y(Array(Math.ceil(o.length / l))).map(function(h, g) {
                  return o.slice(l * g, l + l * g);
                });
              } }, { key: "escapeRegex", value: function(o) {
                return o.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
              } }, { key: "getRtlOffset", value: function(o, l) {
                var h = o, g = l.indexOf("‫");
                return g < o && g != -1 && h--, l.indexOf("‬") < o && g != -1 && h--, h < 0 ? 0 : h;
              } }, { key: "isConstructor", value: function(o) {
                try {
                  Reflect.construct(String, [], o);
                } catch {
                  return !1;
                }
                return !0;
              } }], s = [{ key: "bindMethods", value: function(o, l) {
                var h, g = function(x, E) {
                  var S = typeof Symbol < "u" && x[Symbol.iterator] || x["@@iterator"];
                  if (!S) {
                    if (Array.isArray(x) || (S = A(x)) || E) {
                      S && (x = S);
                      var T = 0, D = function() {
                      };
                      return { s: D, n: function() {
                        return T >= x.length ? { done: !0 } : { done: !1, value: x[T++] };
                      }, e: function(P) {
                        throw P;
                      }, f: D };
                    }
                    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                  }
                  var _, I = !0, L = !1;
                  return { s: function() {
                    S = S.call(x);
                  }, n: function() {
                    var P = S.next();
                    return I = P.done, P;
                  }, e: function(P) {
                    L = !0, _ = P;
                  }, f: function() {
                    try {
                      I || S.return == null || S.return();
                    } finally {
                      if (L) throw _;
                    }
                  } };
                }(Object.getOwnPropertyNames(o.prototype));
                try {
                  for (g.s(); !(h = g.n()).done; ) {
                    var b = h.value;
                    b === "constructor" || b === "bindMethods" || (l[b] = l[b].bind(l));
                  }
                } catch (x) {
                  g.e(x);
                } finally {
                  g.f();
                }
              } }], w && K(m.prototype, w), s && K(m, s), Object.defineProperty(m, "prototype", { writable: !1 }), m;
              var m, w, s;
            }();
            R(q, "noop", function() {
            });
            var O = q;
            function j(m) {
              return j = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
                return typeof w;
              } : function(w) {
                return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
              }, j(m);
            }
            function k(m, w) {
              for (var s = 0; s < w.length; s++) {
                var o = w[s];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(m, ie(o.key), o);
              }
            }
            function X(m, w, s) {
              return (w = ie(w)) in m ? Object.defineProperty(m, w, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : m[w] = s, m;
            }
            function ie(m) {
              var w = function(s, o) {
                if (j(s) != "object" || !s) return s;
                var l = s[Symbol.toPrimitive];
                if (l !== void 0) {
                  var h = l.call(s, o);
                  if (j(h) != "object") return h;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return (o === "string" ? String : Number)(s);
              }(m, "string");
              return j(w) == "symbol" ? w : w + "";
            }
            var te = function() {
              return m = function o(l) {
                var h = this, g = l.dispatch, b = l.getOptions;
                (function(x, E) {
                  if (!(x instanceof E)) throw new TypeError("Cannot call a class as a function");
                })(this, o), X(this, "getOptions", void 0), X(this, "dispatch", void 0), X(this, "isModifierKey", function(x) {
                  return x.altKey || x.ctrlKey || x.shiftKey || ["Tab", "CapsLock", "Esc", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(x.code || x.key || h.keyCodeToKey(x == null ? void 0 : x.keyCode));
                }), this.dispatch = g, this.getOptions = b, O.bindMethods(o, this);
              }, w = [{ key: "handleHighlightKeyDown", value: function(o) {
                var l = this.getOptions();
                l.physicalKeyboardHighlightPreventDefault && this.isModifierKey(o) && (o.preventDefault(), o.stopImmediatePropagation());
                var h = this.getSimpleKeyboardLayoutKey(o);
                this.dispatch(function(g) {
                  var b, x, E = g.getButtonElement(h), S = g.getButtonElement("{".concat(h, "}"));
                  if (E) b = E, x = h;
                  else {
                    if (!S) return;
                    b = S, x = "{".concat(h, "}");
                  }
                  var T, D, _, I, L = function($) {
                    $.style.background = l.physicalKeyboardHighlightBgColor || "#dadce4", $.style.color = l.physicalKeyboardHighlightTextColor || "black";
                  };
                  if (b) if (Array.isArray(b)) {
                    if (b.forEach(function($) {
                      return L($);
                    }), l.physicalKeyboardHighlightPress) if (l.physicalKeyboardHighlightPressUsePointerEvents) (T = b[0]) === null || T === void 0 || (D = T.onpointerdown) === null || D === void 0 || D.call(T, o);
                    else if (l.physicalKeyboardHighlightPressUseClick) {
                      var P;
                      (P = b[0]) === null || P === void 0 || P.click();
                    } else g.handleButtonClicked(x, o);
                  } else L(b), l.physicalKeyboardHighlightPress && (l.physicalKeyboardHighlightPressUsePointerEvents ? (_ = b) === null || _ === void 0 || (I = _.onpointerdown) === null || I === void 0 || I.call(_, o) : l.physicalKeyboardHighlightPressUseClick ? b.click() : g.handleButtonClicked(x, o));
                });
              } }, { key: "handleHighlightKeyUp", value: function(o) {
                var l = this.getOptions();
                l.physicalKeyboardHighlightPreventDefault && this.isModifierKey(o) && (o.preventDefault(), o.stopImmediatePropagation());
                var h = this.getSimpleKeyboardLayoutKey(o);
                this.dispatch(function(g) {
                  var b, x, E, S = g.getButtonElement(h) || g.getButtonElement("{".concat(h, "}")), T = function(D) {
                    D.removeAttribute && D.removeAttribute("style");
                  };
                  S && (Array.isArray(S) ? (S.forEach(function(D) {
                    return T(D);
                  }), l.physicalKeyboardHighlightPressUsePointerEvents && ((b = S[0]) === null || b === void 0 || (x = b.onpointerup) === null || x === void 0 || x.call(b, o))) : (T(S), l.physicalKeyboardHighlightPressUsePointerEvents && (S == null || (E = S.onpointerup) === null || E === void 0 || E.call(S, o))));
                });
              } }, { key: "getSimpleKeyboardLayoutKey", value: function(o) {
                var l, h = "", g = o.code || o.key || this.keyCodeToKey(o == null ? void 0 : o.keyCode);
                return (h = g != null && g.includes("Numpad") || g != null && g.includes("Shift") || g != null && g.includes("Space") || g != null && g.includes("Backspace") || g != null && g.includes("Control") || g != null && g.includes("Alt") || g != null && g.includes("Meta") ? o.code || "" : o.key || this.keyCodeToKey(o == null ? void 0 : o.keyCode) || "").length > 1 ? (l = h) === null || l === void 0 ? void 0 : l.toLowerCase() : h;
              } }, { key: "keyCodeToKey", value: function(o) {
                return { 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 65: "A", 66: "B", 67: "C", 68: "D", 69: "E", 70: "F", 71: "G", 72: "H", 73: "I", 74: "J", 75: "K", 76: "L", 77: "M", 78: "N", 79: "O", 80: "P", 81: "Q", 82: "R", 83: "S", 84: "T", 85: "U", 86: "V", 87: "W", 88: "X", 89: "Y", 90: "Z", 91: "Meta", 96: "Numpad0", 97: "Numpad1", 98: "Numpad2", 99: "Numpad3", 100: "Numpad4", 101: "Numpad5", 102: "Numpad6", 103: "Numpad7", 104: "Numpad8", 105: "Numpad9", 106: "NumpadMultiply", 107: "NumpadAdd", 109: "NumpadSubtract", 110: "NumpadDecimal", 111: "NumpadDivide", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }[o] || "";
              } }], w && k(m.prototype, w), s && k(m, s), Object.defineProperty(m, "prototype", { writable: !1 }), m;
              var m, w, s;
            }();
            function xe(m) {
              return xe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
                return typeof w;
              } : function(w) {
                return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
              }, xe(m);
            }
            function fe(m, w) {
              for (var s = 0; s < w.length; s++) {
                var o = w[s];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(m, Te(o.key), o);
              }
            }
            function Q(m, w, s) {
              return (w = Te(w)) in m ? Object.defineProperty(m, w, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : m[w] = s, m;
            }
            function Te(m) {
              var w = function(s, o) {
                if (xe(s) != "object" || !s) return s;
                var l = s[Symbol.toPrimitive];
                if (l !== void 0) {
                  var h = l.call(s, o);
                  if (xe(h) != "object") return h;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return (o === "string" ? String : Number)(s);
              }(m, "string");
              return xe(w) == "symbol" ? w : w + "";
            }
            var ue = function() {
              return m = function o(l) {
                var h = l.utilities, g = l.options;
                (function(b, x) {
                  if (!(b instanceof x)) throw new TypeError("Cannot call a class as a function");
                })(this, o), Q(this, "utilities", void 0), Q(this, "options", void 0), Q(this, "candidateBoxElement", void 0), Q(this, "pageIndex", 0), Q(this, "pageSize", void 0), this.utilities = h, this.options = g, O.bindMethods(o, this), this.pageSize = this.utilities.getOptions().layoutCandidatesPageSize || 5;
              }, w = [{ key: "destroy", value: function() {
                this.candidateBoxElement && (this.candidateBoxElement.remove(), this.pageIndex = 0);
              } }, { key: "show", value: function(o) {
                var l = this, h = o.candidateValue, g = o.targetElement, b = o.onSelect;
                if (h && h.length) {
                  var x = this.utilities.chunkArray(h.split(" "), this.pageSize);
                  this.renderPage({ candidateListPages: x, targetElement: g, pageIndex: this.pageIndex, nbPages: x.length, onItemSelected: function(E, S) {
                    b(E, S), l.destroy();
                  } });
                }
              } }, { key: "renderPage", value: function(o) {
                var l, h = this, g = o.candidateListPages, b = o.targetElement, x = o.pageIndex, E = o.nbPages, S = o.onItemSelected;
                (l = this.candidateBoxElement) === null || l === void 0 || l.remove(), this.candidateBoxElement = document.createElement("div"), this.candidateBoxElement.className = "hg-candidate-box";
                var T = document.createElement("ul");
                T.className = "hg-candidate-box-list", g[x].forEach(function(H) {
                  var V, ne = document.createElement("li"), Y = function() {
                    var le = new (h.options.useTouchEvents ? TouchEvent : MouseEvent)("click");
                    return Object.defineProperty(le, "target", { value: ne }), le;
                  };
                  ne.className = "hg-candidate-box-list-item", ne.innerHTML = ((V = h.options.display) === null || V === void 0 ? void 0 : V[H]) || H, h.options.useTouchEvents ? ne.ontouchstart = function(le) {
                    return S(H, le || Y());
                  } : ne.onclick = function() {
                    var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Y();
                    return S(H, le);
                  }, T.appendChild(ne);
                });
                var D = x > 0, _ = document.createElement("div");
                _.classList.add("hg-candidate-box-prev"), D && _.classList.add("hg-candidate-box-btn-active");
                var I = function() {
                  D && h.renderPage({ candidateListPages: g, targetElement: b, pageIndex: x - 1, nbPages: E, onItemSelected: S });
                };
                this.options.useTouchEvents ? _.ontouchstart = I : _.onclick = I, this.candidateBoxElement.appendChild(_), this.candidateBoxElement.appendChild(T);
                var L = x < E - 1, P = document.createElement("div");
                P.classList.add("hg-candidate-box-next"), L && P.classList.add("hg-candidate-box-btn-active");
                var $ = function() {
                  L && h.renderPage({ candidateListPages: g, targetElement: b, pageIndex: x + 1, nbPages: E, onItemSelected: S });
                };
                this.options.useTouchEvents ? P.ontouchstart = $ : P.onclick = $, this.candidateBoxElement.appendChild(P), b.prepend(this.candidateBoxElement);
              } }], w && fe(m.prototype, w), s && fe(m, s), Object.defineProperty(m, "prototype", { writable: !1 }), m;
              var m, w, s;
            }(), Fe = ue;
            function bt(m) {
              return function(w) {
                if (Array.isArray(w)) return tn(w);
              }(m) || function(w) {
                if (typeof Symbol < "u" && w[Symbol.iterator] != null || w["@@iterator"] != null) return Array.from(w);
              }(m) || function(w, s) {
                if (w) {
                  if (typeof w == "string") return tn(w, s);
                  var o = {}.toString.call(w).slice(8, -1);
                  return o === "Object" && w.constructor && (o = w.constructor.name), o === "Map" || o === "Set" ? Array.from(w) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? tn(w, s) : void 0;
                }
              }(m) || function() {
                throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }();
            }
            function tn(m, w) {
              (w == null || w > m.length) && (w = m.length);
              for (var s = 0, o = Array(w); s < w; s++) o[s] = m[s];
              return o;
            }
            function Ie(m) {
              return Ie = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
                return typeof w;
              } : function(w) {
                return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
              }, Ie(m);
            }
            function Ct(m, w) {
              var s = Object.keys(m);
              if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(m);
                w && (o = o.filter(function(l) {
                  return Object.getOwnPropertyDescriptor(m, l).enumerable;
                })), s.push.apply(s, o);
              }
              return s;
            }
            function Pt(m, w) {
              for (var s = 0; s < w.length; s++) {
                var o = w[s];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(m, cr(o.key), o);
              }
            }
            function Ze(m, w, s) {
              return (w = cr(w)) in m ? Object.defineProperty(m, w, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : m[w] = s, m;
            }
            function cr(m) {
              var w = function(s, o) {
                if (Ie(s) != "object" || !s) return s;
                var l = s[Symbol.toPrimitive];
                if (l !== void 0) {
                  var h = l.call(s, o);
                  if (Ie(h) != "object") return h;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return (o === "string" ? String : Number)(s);
              }(m, "string");
              return Ie(w) == "symbol" ? w : w + "";
            }
            var Mr = function() {
              return m = function o(l, h) {
                var g = this;
                if (function(I, L) {
                  if (!(I instanceof L)) throw new TypeError("Cannot call a class as a function");
                }(this, o), Ze(this, "input", void 0), Ze(this, "options", void 0), Ze(this, "utilities", void 0), Ze(this, "caretPosition", void 0), Ze(this, "caretPositionEnd", void 0), Ze(this, "keyboardDOM", void 0), Ze(this, "keyboardPluginClasses", void 0), Ze(this, "keyboardDOMClass", void 0), Ze(this, "buttonElements", void 0), Ze(this, "currentInstanceName", void 0), Ze(this, "allKeyboardInstances", void 0), Ze(this, "keyboardInstanceNames", void 0), Ze(this, "isFirstKeyboardInstance", void 0), Ze(this, "physicalKeyboard", void 0), Ze(this, "modules", void 0), Ze(this, "activeButtonClass", void 0), Ze(this, "holdInteractionTimeout", void 0), Ze(this, "holdTimeout", void 0), Ze(this, "isMouseHold", void 0), Ze(this, "initialized", void 0), Ze(this, "candidateBox", void 0), Ze(this, "keyboardRowsDOM", void 0), Ze(this, "defaultName", "default"), Ze(this, "activeInputElement", null), Ze(this, "handleParams", function(I, L) {
                  var P, $, H;
                  if (typeof I == "string") P = I.split(".").join(""), $ = document.querySelector(".".concat(P)), H = L;
                  else if (I instanceof HTMLDivElement) {
                    if (!I.className) throw console.warn("Any DOM element passed as parameter must have a class."), new Error("KEYBOARD_DOM_CLASS_ERROR");
                    P = I.className.split(" ")[0], $ = I, H = L;
                  } else P = "simple-keyboard", $ = document.querySelector(".".concat(P)), H = I;
                  return { keyboardDOMClass: P, keyboardDOM: $, options: H };
                }), Ze(this, "getOptions", function() {
                  return g.options;
                }), Ze(this, "getCaretPosition", function() {
                  return g.caretPosition;
                }), Ze(this, "getCaretPositionEnd", function() {
                  return g.caretPositionEnd;
                }), Ze(this, "registerModule", function(I, L) {
                  g.modules[I] || (g.modules[I] = {}), L(g.modules[I]);
                }), Ze(this, "getKeyboardClassString", function() {
                  for (var I = arguments.length, L = new Array(I), P = 0; P < I; P++) L[P] = arguments[P];
                  return [g.keyboardDOMClass].concat(L).filter(function($) {
                    return !!$;
                  }).join(" ");
                }), typeof window < "u") {
                  var b = this.handleParams(l, h), x = b.keyboardDOMClass, E = b.keyboardDOM, S = b.options, T = S === void 0 ? {} : S;
                  this.utilities = new O({ getOptions: this.getOptions, getCaretPosition: this.getCaretPosition, getCaretPositionEnd: this.getCaretPositionEnd, dispatch: this.dispatch }), this.caretPosition = null, this.caretPositionEnd = null, this.keyboardDOM = E, this.options = function(I) {
                    for (var L = 1; L < arguments.length; L++) {
                      var P = arguments[L] != null ? arguments[L] : {};
                      L % 2 ? Ct(Object(P), !0).forEach(function($) {
                        Ze(I, $, P[$]);
                      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I, Object.getOwnPropertyDescriptors(P)) : Ct(Object(P)).forEach(function($) {
                        Object.defineProperty(I, $, Object.getOwnPropertyDescriptor(P, $));
                      });
                    }
                    return I;
                  }({ layoutName: "default", theme: "hg-theme-default", inputName: "default", preventMouseDownDefault: !1, enableLayoutCandidates: !0, excludeFromLayout: {} }, T), this.keyboardPluginClasses = "", O.bindMethods(o, this);
                  var D = this.options.inputName, _ = D === void 0 ? this.defaultName : D;
                  if (this.input = {}, this.input[_] = "", this.keyboardDOMClass = x, this.buttonElements = {}, window.SimpleKeyboardInstances || (window.SimpleKeyboardInstances = {}), this.currentInstanceName = this.utilities.camelCase(this.keyboardDOMClass), window.SimpleKeyboardInstances[this.currentInstanceName] = this, this.allKeyboardInstances = window.SimpleKeyboardInstances, this.keyboardInstanceNames = Object.keys(window.SimpleKeyboardInstances), this.isFirstKeyboardInstance = this.keyboardInstanceNames[0] === this.currentInstanceName, this.physicalKeyboard = new te({ dispatch: this.dispatch, getOptions: this.getOptions }), this.candidateBox = this.options.enableLayoutCandidates ? new Fe({ utilities: this.utilities, options: this.options }) : null, !this.keyboardDOM) throw console.warn('".'.concat(x, '" was not found in the DOM.')), new Error("KEYBOARD_DOM_ERROR");
                  this.render(), this.modules = {}, this.loadModules();
                }
              }, w = [{ key: "setCaretPosition", value: function(o) {
                var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o;
                this.caretPosition = o, this.caretPositionEnd = l;
              } }, { key: "getInputCandidates", value: function(o) {
                var l = this, h = this.options, g = h.layoutCandidates, b = h.layoutCandidatesCaseSensitiveMatch;
                if (!g || Ie(g) !== "object") return {};
                var x = Object.keys(g).filter(function(T) {
                  var D = o.substring(0, l.getCaretPositionEnd() || 0) || o, _ = new RegExp("".concat(l.utilities.escapeRegex(T), "$"), b ? "g" : "gi");
                  return !!bt(D.matchAll(_)).length;
                });
                if (x.length > 1) {
                  var E = x.sort(function(T, D) {
                    return D.length - T.length;
                  })[0];
                  return { candidateKey: E, candidateValue: g[E] };
                }
                if (x.length) {
                  var S = x[0];
                  return { candidateKey: S, candidateValue: g[S] };
                }
                return {};
              } }, { key: "showCandidatesBox", value: function(o, l, h) {
                var g = this;
                this.candidateBox && this.candidateBox.show({ candidateValue: l, targetElement: h, onSelect: function(b, x) {
                  var E = g.options, S = E.layoutCandidatesCaseSensitiveMatch, T = E.disableCandidateNormalization, D = E.enableLayoutCandidatesKeyPress, _ = b;
                  T || (_ = b.normalize("NFD")), typeof g.options.beforeInputUpdate == "function" && g.options.beforeInputUpdate(g);
                  var I = g.getInput(g.options.inputName, !0), L = g.getCaretPositionEnd() || 0, P = I.substring(0, L || 0) || I, $ = new RegExp("".concat(g.utilities.escapeRegex(o), "$"), S ? "g" : "gi"), H = P.replace($, _), V = I.replace(P, H), ne = H.length - P.length, Y = (L || I.length) + ne;
                  Y < 0 && (Y = 0), g.setInput(V, g.options.inputName, !0), g.setCaretPosition(Y), D && typeof g.options.onKeyPress == "function" && g.options.onKeyPress(b, x), typeof g.options.onChange == "function" && g.options.onChange(g.getInput(g.options.inputName, !0), x), typeof g.options.onChangeAll == "function" && g.options.onChangeAll(g.getAllInputs(), x);
                } });
              } }, { key: "handleButtonClicked", value: function(o, l) {
                var h = this.options, g = h.inputName, b = g === void 0 ? this.defaultName : g, x = h.debug;
                if (o !== "{//}") {
                  this.input[b] || (this.input[b] = ""), typeof this.options.beforeInputUpdate == "function" && this.options.beforeInputUpdate(this);
                  var E = this.utilities.getUpdatedInput(o, this.input[b], this.caretPosition, this.caretPositionEnd);
                  if (this.utilities.isStandardButton(o) && this.activeInputElement && this.input[b] && this.input[b] === E && this.caretPosition === 0 && this.caretPositionEnd === E.length) return this.setInput("", this.options.inputName, !0), this.setCaretPosition(0), this.activeInputElement.value = "", this.activeInputElement.setSelectionRange(0, 0), void this.handleButtonClicked(o, l);
                  if (typeof this.options.onKeyPress == "function" && this.options.onKeyPress(o, l), this.input[b] !== E && (!this.options.inputPattern || this.options.inputPattern && this.inputPatternIsValid(E))) {
                    if (this.options.maxLength && this.utilities.handleMaxLength(this.input, E)) return;
                    var S = this.utilities.getUpdatedInput(o, this.input[b], this.caretPosition, this.caretPositionEnd, !0);
                    if (this.setInput(S, this.options.inputName, !0), x && console.log("Input changed:", this.getAllInputs()), this.options.debug && console.log("Caret at: ", this.getCaretPosition(), this.getCaretPositionEnd(), "(".concat(this.keyboardDOMClass, ")"), l == null ? void 0 : l.type), this.options.syncInstanceInputs && this.syncInstanceInputs(), typeof this.options.onChange == "function" && this.options.onChange(this.getInput(this.options.inputName, !0), l), typeof this.options.onChangeAll == "function" && this.options.onChangeAll(this.getAllInputs(), l), l != null && l.target && this.options.enableLayoutCandidates) {
                      var T, D = this.getInputCandidates(E), _ = D.candidateKey, I = D.candidateValue;
                      _ && I ? this.showCandidatesBox(_, I, this.keyboardDOM) : (T = this.candidateBox) === null || T === void 0 || T.destroy();
                    }
                  }
                  this.caretPositionEnd && this.caretPosition !== this.caretPositionEnd && (this.setCaretPosition(this.caretPositionEnd, this.caretPositionEnd), this.activeInputElement && this.activeInputElement.setSelectionRange(this.caretPositionEnd, this.caretPositionEnd), this.options.debug && console.log("Caret position aligned", this.caretPosition)), x && console.log("Key pressed:", o);
                }
              } }, { key: "getMouseHold", value: function() {
                return this.isMouseHold;
              } }, { key: "setMouseHold", value: function(o) {
                this.options.syncInstanceInputs ? this.dispatch(function(l) {
                  l.isMouseHold = o;
                }) : this.isMouseHold = o;
              } }, { key: "handleButtonMouseDown", value: function(o, l) {
                var h = this;
                l && (this.options.preventMouseDownDefault && l.preventDefault(), this.options.stopMouseDownPropagation && l.stopPropagation(), l.target.classList.add(this.activeButtonClass)), this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), this.holdTimeout && clearTimeout(this.holdTimeout), this.setMouseHold(!0), this.options.disableButtonHold || (this.holdTimeout = window.setTimeout(function() {
                  (h.getMouseHold() && (!o.includes("{") && !o.includes("}") || o === "{delete}" || o === "{backspace}" || o === "{bksp}" || o === "{space}" || o === "{tab}") || o === "{arrowright}" || o === "{arrowleft}" || o === "{arrowup}" || o === "{arrowdown}") && (h.options.debug && console.log("Button held:", o), h.handleButtonHold(o)), clearTimeout(h.holdTimeout);
                }, 500));
              } }, { key: "handleButtonMouseUp", value: function(o, l) {
                var h = this;
                l && (this.options.preventMouseUpDefault && l.preventDefault && l.preventDefault(), this.options.stopMouseUpPropagation && l.stopPropagation && l.stopPropagation(), !(l.target === this.keyboardDOM || l.target && this.keyboardDOM.contains(l.target) || this.candidateBox && this.candidateBox.candidateBoxElement && (l.target === this.candidateBox.candidateBoxElement || l.target && this.candidateBox.candidateBoxElement.contains(l.target))) && this.candidateBox && this.candidateBox.destroy()), this.recurseButtons(function(g) {
                  g.classList.remove(h.activeButtonClass);
                }), this.setMouseHold(!1), this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), o && typeof this.options.onKeyReleased == "function" && this.options.onKeyReleased(o, l);
              } }, { key: "handleKeyboardContainerMouseDown", value: function(o) {
                this.options.preventMouseDownDefault && o.preventDefault();
              } }, { key: "handleButtonHold", value: function(o) {
                var l = this;
                this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), this.holdInteractionTimeout = window.setTimeout(function() {
                  l.getMouseHold() ? (l.handleButtonClicked(o), l.handleButtonHold(o)) : clearTimeout(l.holdInteractionTimeout);
                }, 100);
              } }, { key: "syncInstanceInputs", value: function() {
                var o = this;
                this.dispatch(function(l) {
                  l.replaceInput(o.input), l.setCaretPosition(o.caretPosition, o.caretPositionEnd);
                });
              } }, { key: "clearInput", value: function() {
                var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.inputName || this.defaultName;
                this.input[o] = "", this.setCaretPosition(0), this.options.syncInstanceInputs && this.syncInstanceInputs();
              } }, { key: "getInput", value: function() {
                var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.inputName || this.defaultName, l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
                return this.options.syncInstanceInputs && !l && this.syncInstanceInputs(), this.options.rtl ? "‫" + this.input[o].replace("‫", "").replace("‬", "") + "‬" : this.input[o];
              } }, { key: "getAllInputs", value: function() {
                var o = this, l = {};
                return Object.keys(this.input).forEach(function(h) {
                  l[h] = o.getInput(h, !0);
                }), l;
              } }, { key: "setInput", value: function(o) {
                var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.inputName || this.defaultName, h = arguments.length > 2 ? arguments[2] : void 0;
                this.input[l] = o, !h && this.options.syncInstanceInputs && this.syncInstanceInputs();
              } }, { key: "replaceInput", value: function(o) {
                this.input = o;
              } }, { key: "setOptions", value: function() {
                var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = this.changedOptions(o);
                this.options = Object.assign(this.options, o), l.length && (this.options.debug && console.log("changedOptions", l), this.onSetOptions(l), this.render());
              } }, { key: "changedOptions", value: function(o) {
                var l = this;
                return Object.keys(o).filter(function(h) {
                  return JSON.stringify(o[h]) !== JSON.stringify(l.options[h]);
                });
              } }, { key: "onSetOptions", value: function() {
                var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                o.includes("layoutName") && this.candidateBox && this.candidateBox.destroy(), (o.includes("layoutCandidatesPageSize") || o.includes("layoutCandidates")) && this.candidateBox && (this.candidateBox.destroy(), this.candidateBox = new Fe({ utilities: this.utilities, options: this.options }));
              } }, { key: "resetRows", value: function() {
                this.keyboardRowsDOM && this.keyboardRowsDOM.remove(), this.keyboardDOM.className = this.keyboardDOMClass, this.keyboardDOM.setAttribute("data-skInstance", this.currentInstanceName), this.buttonElements = {};
              } }, { key: "dispatch", value: function(o) {
                if (!window.SimpleKeyboardInstances) throw console.warn("SimpleKeyboardInstances is not defined. Dispatch cannot be called."), new Error("INSTANCES_VAR_ERROR");
                return Object.keys(window.SimpleKeyboardInstances).forEach(function(l) {
                  o(window.SimpleKeyboardInstances[l], l);
                });
              } }, { key: "addButtonTheme", value: function(o, l) {
                var h = this;
                l && o && (o.split(" ").forEach(function(g) {
                  l.split(" ").forEach(function(b) {
                    h.options.buttonTheme || (h.options.buttonTheme = []);
                    var x = !1;
                    h.options.buttonTheme.map(function(E) {
                      if (E != null && E.class.split(" ").includes(b)) {
                        x = !0;
                        var S = E.buttons.split(" ");
                        S.includes(g) || (x = !0, S.push(g), E.buttons = S.join(" "));
                      }
                      return E;
                    }), x || h.options.buttonTheme.push({ class: b, buttons: o });
                  });
                }), this.render());
              } }, { key: "removeButtonTheme", value: function(o, l) {
                var h = this;
                if (!o && !l) return this.options.buttonTheme = [], void this.render();
                o && Array.isArray(this.options.buttonTheme) && this.options.buttonTheme.length && (o.split(" ").forEach(function(g) {
                  var b;
                  (b = h.options) === null || b === void 0 || (b = b.buttonTheme) === null || b === void 0 || b.map(function(x, E) {
                    if (x && l && l.includes(x.class) || !l) {
                      var S, T, D = (S = x) === null || S === void 0 ? void 0 : S.buttons.split(" ").filter(function(_) {
                        return _ !== g;
                      });
                      x && D != null && D.length ? x.buttons = D.join(" ") : ((T = h.options.buttonTheme) === null || T === void 0 || T.splice(E, 1), x = null);
                    }
                    return x;
                  });
                }), this.render());
              } }, { key: "getButtonElement", value: function(o) {
                var l, h = this.buttonElements[o];
                return h && (l = h.length > 1 ? h : h[0]), l;
              } }, { key: "inputPatternIsValid", value: function(o) {
                var l, h = this.options.inputPattern;
                if ((l = h instanceof RegExp ? h : h[this.options.inputName || this.defaultName]) && o) {
                  var g = l.test(o);
                  return this.options.debug && console.log('inputPattern ("'.concat(l, '"): ').concat(g ? "passed" : "did not pass!")), g;
                }
                return !0;
              } }, { key: "setEventListeners", value: function() {
                if (this.isFirstKeyboardInstance || !this.allKeyboardInstances) {
                  this.options.debug && console.log("Caret handling started (".concat(this.keyboardDOMClass, ")"));
                  var o = this.options.physicalKeyboardHighlightPreventDefault, l = o !== void 0 && o;
                  document.addEventListener("keyup", this.handleKeyUp, l), document.addEventListener("keydown", this.handleKeyDown, l), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("touchend", this.handleTouchEnd), this.options.updateCaretOnSelectionChange && document.addEventListener("selectionchange", this.handleSelectionChange), document.addEventListener("select", this.handleSelect);
                }
              } }, { key: "handleKeyUp", value: function(o) {
                this.caretEventHandler(o), this.options.physicalKeyboardHighlight && this.physicalKeyboard.handleHighlightKeyUp(o);
              } }, { key: "handleKeyDown", value: function(o) {
                this.options.physicalKeyboardHighlight && this.physicalKeyboard.handleHighlightKeyDown(o);
              } }, { key: "handleMouseUp", value: function(o) {
                this.caretEventHandler(o);
              } }, { key: "handleTouchEnd", value: function(o) {
                this.caretEventHandler(o);
              } }, { key: "handleSelect", value: function(o) {
                this.caretEventHandler(o);
              } }, { key: "handleSelectionChange", value: function(o) {
                navigator.userAgent.includes("Firefox") || this.caretEventHandler(o);
              } }, { key: "caretEventHandler", value: function(o) {
                var l, h = this;
                o.target.tagName && (l = o.target.tagName.toLowerCase()), this.dispatch(function(g) {
                  var b = o.target === g.keyboardDOM || o.target && g.keyboardDOM.contains(o.target);
                  if (h.options.syncInstanceInputs && Array.isArray(o.path) && (b = o.path.some(function(S) {
                    var T;
                    return S == null || (T = S.hasAttribute) === null || T === void 0 ? void 0 : T.call(S, "data-skInstance");
                  })), (l === "textarea" || l === "input" && ["text", "search", "url", "tel", "password"].includes(o.target.type)) && !g.options.disableCaretPositioning) {
                    var x = o.target.selectionStart, E = o.target.selectionEnd;
                    g.options.rtl && (x = g.utilities.getRtlOffset(x, g.getInput()), E = g.utilities.getRtlOffset(E, g.getInput())), g.setCaretPosition(x, E), g.activeInputElement = o.target, g.options.debug && console.log("Caret at: ", g.getCaretPosition(), g.getCaretPositionEnd(), o && o.target.tagName.toLowerCase(), "(".concat(g.keyboardDOMClass, ")"), o == null ? void 0 : o.type);
                  } else !g.options.disableCaretPositioning && b || (o == null ? void 0 : o.type) === "selectionchange" || (g.setCaretPosition(null), g.activeInputElement = null, g.options.debug && console.log('Caret position reset due to "'.concat(o == null ? void 0 : o.type, '" event'), o));
                });
              } }, { key: "recurseButtons", value: function(o) {
                var l = this;
                o && Object.keys(this.buttonElements).forEach(function(h) {
                  return l.buttonElements[h].forEach(o);
                });
              } }, { key: "destroy", value: function() {
                this.options.debug && console.log("Destroying simple-keyboard instance: ".concat(this.currentInstanceName));
                var o = this.options.physicalKeyboardHighlightPreventDefault, l = o !== void 0 && o;
                document.removeEventListener("keyup", this.handleKeyUp, l), document.removeEventListener("keydown", this.handleKeyDown, l), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("touchend", this.handleTouchEnd), document.removeEventListener("select", this.handleSelect), this.options.updateCaretOnSelectionChange && document.removeEventListener("selectionchange", this.handleSelectionChange), document.onpointerup = null, document.ontouchend = null, document.ontouchcancel = null, document.onmouseup = null, this.recurseButtons(function(h) {
                  h && (h.onpointerdown = null, h.onpointerup = null, h.onpointercancel = null, h.ontouchstart = null, h.ontouchend = null, h.ontouchcancel = null, h.onclick = null, h.onmousedown = null, h.onmouseup = null, h.remove(), h = null);
                }), this.keyboardDOM.onpointerdown = null, this.keyboardDOM.ontouchstart = null, this.keyboardDOM.onmousedown = null, this.resetRows(), this.candidateBox && (this.candidateBox.destroy(), this.candidateBox = null), this.activeInputElement = null, this.keyboardDOM.removeAttribute("data-skInstance"), this.keyboardDOM.innerHTML = "", window.SimpleKeyboardInstances[this.currentInstanceName] = null, delete window.SimpleKeyboardInstances[this.currentInstanceName], this.initialized = !1;
              } }, { key: "getButtonThemeClasses", value: function(o) {
                var l = this.options.buttonTheme, h = [];
                return Array.isArray(l) && l.forEach(function(g) {
                  if (g && g.class && typeof g.class == "string" && g.buttons && typeof g.buttons == "string") {
                    var b = g.class.split(" ");
                    g.buttons.split(" ").includes(o) && (h = [].concat(bt(h), bt(b)));
                  } else console.warn('Incorrect "buttonTheme". Please check the documentation.', g);
                }), h;
              } }, { key: "setDOMButtonAttributes", value: function(o, l) {
                var h = this.options.buttonAttributes;
                Array.isArray(h) && h.forEach(function(g) {
                  g.attribute && typeof g.attribute == "string" && g.value && typeof g.value == "string" && g.buttons && typeof g.buttons == "string" ? g.buttons.split(" ").includes(o) && l(g.attribute, g.value) : console.warn('Incorrect "buttonAttributes". Please check the documentation.', g);
                });
              } }, { key: "onTouchDeviceDetected", value: function() {
                this.processAutoTouchEvents(), this.disableContextualWindow();
              } }, { key: "disableContextualWindow", value: function() {
                window.oncontextmenu = function(o) {
                  if (o.target.classList.contains("hg-button")) return o.preventDefault(), o.stopPropagation(), !1;
                };
              } }, { key: "processAutoTouchEvents", value: function() {
                this.options.autoUseTouchEvents && (this.options.useTouchEvents = !0, this.options.debug && console.log("autoUseTouchEvents: Touch device detected, useTouchEvents enabled."));
              } }, { key: "onInit", value: function() {
                this.options.debug && console.log("".concat(this.keyboardDOMClass, " Initialized")), this.setEventListeners(), typeof this.options.onInit == "function" && this.options.onInit(this);
              } }, { key: "beforeFirstRender", value: function() {
                this.utilities.isTouchDevice() && this.onTouchDeviceDetected(), typeof this.options.beforeFirstRender == "function" && this.options.beforeFirstRender(this), this.isFirstKeyboardInstance && this.utilities.pointerEventsSupported() && !this.options.useTouchEvents && !this.options.useMouseEvents && this.options.debug && console.log("Using PointerEvents as it is supported by this browser"), this.options.useTouchEvents && this.options.debug && console.log("useTouchEvents has been enabled. Only touch events will be used.");
              } }, { key: "beforeRender", value: function() {
                typeof this.options.beforeRender == "function" && this.options.beforeRender(this);
              } }, { key: "onRender", value: function() {
                typeof this.options.onRender == "function" && this.options.onRender(this);
              } }, { key: "onModulesLoaded", value: function() {
                typeof this.options.onModulesLoaded == "function" && this.options.onModulesLoaded(this);
              } }, { key: "loadModules", value: function() {
                var o = this;
                Array.isArray(this.options.modules) && (this.options.modules.forEach(function(l) {
                  var h = o.utilities.isConstructor(l) ? new l(o) : l(o);
                  h.init && h.init(o);
                }), this.keyboardPluginClasses = "modules-loaded", this.render(), this.onModulesLoaded());
              } }, { key: "getModuleProp", value: function(o, l) {
                return !!this.modules[o] && this.modules[o][l];
              } }, { key: "getModulesList", value: function() {
                return Object.keys(this.modules);
              } }, { key: "parseRowDOMContainers", value: function(o, l, h, g) {
                var b = this, x = Array.from(o.children), E = 0;
                return x.length && h.forEach(function(S, T) {
                  var D = g[T];
                  if (!(D && D > S)) return !1;
                  var _ = S - E, I = D - E, L = document.createElement("div");
                  L.className += "hg-button-container";
                  var P = "".concat(b.options.layoutName, "-r").concat(l, "c").concat(T);
                  L.setAttribute("data-skUID", P);
                  var $ = x.splice(_, I - _ + 1);
                  E += I - _, $.forEach(function(H) {
                    return L.appendChild(H);
                  }), x.splice(_, 0, L), o.innerHTML = "", x.forEach(function(H) {
                    return o.appendChild(H);
                  }), b.options.debug && console.log("rowDOMContainer", $, _, I, E + 1);
                }), o;
              } }, { key: "render", value: function() {
                var o = this;
                this.resetRows(), this.initialized || this.beforeFirstRender(), this.beforeRender();
                var l = "hg-layout-".concat(this.options.layoutName), h = this.options.layout || { default: ["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}", "{tab} q w e r t y u i o p [ ] \\", "{lock} a s d f g h j k l ; ' {enter}", "{shift} z x c v b n m , . / {shift}", ".com @ {space}"], shift: ["~ ! @ # $ % ^ & * ( ) _ + {bksp}", "{tab} Q W E R T Y U I O P { } |", '{lock} A S D F G H J K L : " {enter}', "{shift} Z X C V B N M < > ? {shift}", ".com @ {space}"] }, g = this.options.useTouchEvents || !1, b = g ? "hg-touch-events" : "", x = this.options.useMouseEvents || !1, E = this.options.disableRowButtonContainers;
                this.keyboardDOM.className = this.getKeyboardClassString(this.options.theme, l, this.keyboardPluginClasses, b), this.keyboardDOM.setAttribute("data-skInstance", this.currentInstanceName), this.keyboardRowsDOM = document.createElement("div"), this.keyboardRowsDOM.className = "hg-rows", h[this.options.layoutName || this.defaultName].forEach(function(S, T) {
                  var D = S.split(" ");
                  o.options.excludeFromLayout && o.options.excludeFromLayout[o.options.layoutName || o.defaultName] && (D = D.filter(function(P) {
                    return o.options.excludeFromLayout && !o.options.excludeFromLayout[o.options.layoutName || o.defaultName].includes(P);
                  }));
                  var _ = document.createElement("div");
                  _.className += "hg-row";
                  var I = [], L = [];
                  D.forEach(function(P, $) {
                    var H, V = !E && typeof P == "string" && P.length > 1 && P.indexOf("[") === 0, ne = !E && typeof P == "string" && P.length > 1 && P.indexOf("]") === P.length - 1;
                    V && (I.push($), P = P.replace(/\[/g, "")), ne && (L.push($), P = P.replace(/\]/g, ""));
                    var Y = o.utilities.getButtonClass(P), le = o.utilities.getButtonDisplayName(P, o.options.display, o.options.mergeDisplay), re = o.options.useButtonTag ? "button" : "div", ee = document.createElement(re);
                    ee.className += "hg-button ".concat(Y), (H = ee.classList).add.apply(H, bt(o.getButtonThemeClasses(P))), o.setDOMButtonAttributes(P, function(oe, Ce) {
                      ee.setAttribute(oe, Ce);
                    }), o.activeButtonClass = "hg-activeButton", !o.utilities.pointerEventsSupported() || g || x ? g ? (ee.ontouchstart = function(oe) {
                      o.handleButtonClicked(P, oe), o.handleButtonMouseDown(P, oe);
                    }, ee.ontouchend = function(oe) {
                      o.handleButtonMouseUp(P, oe);
                    }, ee.ontouchcancel = function(oe) {
                      o.handleButtonMouseUp(P, oe);
                    }) : (ee.onclick = function(oe) {
                      o.setMouseHold(!1), typeof o.options.onKeyReleased == "function" || o.options.useMouseEvents && o.options.clickOnMouseDown || o.handleButtonClicked(P, oe);
                    }, ee.onmousedown = function(oe) {
                      (typeof o.options.onKeyReleased == "function" || o.options.useMouseEvents && o.options.clickOnMouseDown) && !o.isMouseHold && o.handleButtonClicked(P, oe), o.handleButtonMouseDown(P, oe);
                    }, ee.onmouseup = function(oe) {
                      o.handleButtonMouseUp(P, oe);
                    }) : (ee.onpointerdown = function(oe) {
                      o.handleButtonClicked(P, oe), o.handleButtonMouseDown(P, oe);
                    }, ee.onpointerup = function(oe) {
                      o.handleButtonMouseUp(P, oe);
                    }, ee.onpointercancel = function(oe) {
                      o.handleButtonMouseUp(P, oe);
                    }), ee.setAttribute("data-skBtn", P);
                    var de = "".concat(o.options.layoutName, "-r").concat(T, "b").concat($);
                    ee.setAttribute("data-skBtnUID", de);
                    var pe = document.createElement("span");
                    pe.innerHTML = le, ee.appendChild(pe), o.buttonElements[P] || (o.buttonElements[P] = []), o.buttonElements[P].push(ee), _.appendChild(ee);
                  }), _ = o.parseRowDOMContainers(_, T, I, L), o.keyboardRowsDOM.appendChild(_);
                }), this.keyboardDOM.appendChild(this.keyboardRowsDOM), this.onRender(), this.initialized || (this.initialized = !0, !this.utilities.pointerEventsSupported() || g || x ? g ? (document.ontouchend = function(S) {
                  return o.handleButtonMouseUp(void 0, S);
                }, document.ontouchcancel = function(S) {
                  return o.handleButtonMouseUp(void 0, S);
                }, this.keyboardDOM.ontouchstart = function(S) {
                  return o.handleKeyboardContainerMouseDown(S);
                }) : g || (document.onmouseup = function(S) {
                  return o.handleButtonMouseUp(void 0, S);
                }, this.keyboardDOM.onmousedown = function(S) {
                  return o.handleKeyboardContainerMouseDown(S);
                }) : (document.onpointerup = function(S) {
                  return o.handleButtonMouseUp(void 0, S);
                }, this.keyboardDOM.onpointerdown = function(S) {
                  return o.handleKeyboardContainerMouseDown(S);
                }), this.onInit());
              } }], w && Pt(m.prototype, w), s && Pt(m, s), Object.defineProperty(m, "prototype", { writable: !1 }), m;
              var m, w, s;
            }(), Br = Mr, Ss = Br;
            return v;
          }();
        }, 981: function() {
          typeof Element > "u" || "remove" in Element.prototype || (Element.prototype.remove = function() {
            this.parentNode && this.parentNode.removeChild(this);
          }), typeof self < "u" && "document" in self && ((!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) && function(u) {
            if ("Element" in u) {
              var p = "classList", d = "prototype", f = u.Element[d], v = Object, y = String[d].trim || function() {
                return this.replace(/^\s+|\s+$/g, "");
              }, A = Array[d].indexOf || function(O) {
                for (var j = 0, k = this.length; j < k; j++) if (j in this && this[j] === O) return j;
                return -1;
              }, U = function(O, j) {
                this.name = O, this.code = DOMException[O], this.message = j;
              }, z = function(O, j) {
                if (j === "") throw new U("SYNTAX_ERR", "The token must not be empty.");
                if (/\s/.test(j)) throw new U("INVALID_CHARACTER_ERR", "The token must not contain space characters.");
                return A.call(O, j);
              }, K = function(O) {
                for (var j = y.call(O.getAttribute("class") || ""), k = j ? j.split(/\s+/) : [], X = 0, ie = k.length; X < ie; X++) this.push(k[X]);
                this._updateClassName = function() {
                  O.setAttribute("class", this.toString());
                };
              }, R = K[d] = [], B = function() {
                return new K(this);
              };
              if (U[d] = Error[d], R.item = function(O) {
                return this[O] || null;
              }, R.contains = function(O) {
                return ~z(this, O + "");
              }, R.add = function() {
                var O, j = arguments, k = 0, X = j.length, ie = !1;
                do
                  ~z(this, O = j[k] + "") || (this.push(O), ie = !0);
                while (++k < X);
                ie && this._updateClassName();
              }, R.remove = function() {
                var O, j, k = arguments, X = 0, ie = k.length, te = !1;
                do
                  for (j = z(this, O = k[X] + ""); ~j; ) this.splice(j, 1), te = !0, j = z(this, O);
                while (++X < ie);
                te && this._updateClassName();
              }, R.toggle = function(O, j) {
                var k = this.contains(O), X = k ? j !== !0 && "remove" : j !== !1 && "add";
                return X && this[X](O), j === !0 || j === !1 ? j : !k;
              }, R.replace = function(O, j) {
                var k = z(O + "");
                ~k && (this.splice(k, 1, j), this._updateClassName());
              }, R.toString = function() {
                return this.join(" ");
              }, v.defineProperty) {
                var q = { get: B, enumerable: !0, configurable: !0 };
                try {
                  v.defineProperty(f, p, q);
                } catch (O) {
                  O.number !== void 0 && O.number !== -2146823252 || (q.enumerable = !1, v.defineProperty(f, p, q));
                }
              } else v[d].__defineGetter__ && f.__defineGetter__(p, B);
            }
          }(self), function() {
            var u = document.createElement("_");
            if (u.classList.add("c1", "c2"), !u.classList.contains("c2")) {
              var p = function(f) {
                var v = DOMTokenList.prototype[f];
                DOMTokenList.prototype[f] = function(y) {
                  var A, U = arguments.length;
                  for (A = 0; A < U; A++) y = arguments[A], v.call(this, y);
                };
              };
              p("add"), p("remove");
            }
            if (u.classList.toggle("c3", !1), u.classList.contains("c3")) {
              var d = DOMTokenList.prototype.toggle;
              DOMTokenList.prototype.toggle = function(f, v) {
                return 1 in arguments && !this.contains(f) == !v ? v : d.call(this, f);
              };
            }
            "replace" in document.createElement("_").classList || (DOMTokenList.prototype.replace = function(f, v) {
              var y = this.toString().split(" "), A = y.indexOf(f + "");
              ~A && (y = y.slice(A), this.remove.apply(this, y), this.add(v), this.add.apply(this, y.slice(1)));
            }), u = null;
          }());
        } }, i = {};
        function c(u) {
          var p = i[u];
          if (p !== void 0) return p.exports;
          var d = i[u] = { exports: {} };
          return r[u].call(d.exports, d, d.exports, c), d.exports;
        }
        c.n = function(u) {
          var p = u && u.__esModule ? function() {
            return u.default;
          } : function() {
            return u;
          };
          return c.d(p, { a: p }), p;
        }, c.d = function(u, p) {
          for (var d in p) c.o(p, d) && !c.o(u, d) && Object.defineProperty(u, d, { enumerable: !0, get: p[d] });
        }, c.o = function(u, p) {
          return Object.prototype.hasOwnProperty.call(u, p);
        }, c.r = function(u) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(u, "__esModule", { value: !0 });
        };
        var a = {};
        return function() {
          c.r(a), c.d(a, { KeyboardReact: function() {
            return z;
          }, default: function() {
            return K;
          } }), c(981);
          var u = c(442), p = c(548), d = c.n(p);
          function f(R) {
            return f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(B) {
              return typeof B;
            } : function(B) {
              return B && typeof Symbol == "function" && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
            }, f(R);
          }
          function v(R, B) {
            var q = Object.keys(R);
            if (Object.getOwnPropertySymbols) {
              var O = Object.getOwnPropertySymbols(R);
              B && (O = O.filter(function(j) {
                return Object.getOwnPropertyDescriptor(R, j).enumerable;
              })), q.push.apply(q, O);
            }
            return q;
          }
          function y(R) {
            for (var B = 1; B < arguments.length; B++) {
              var q = arguments[B] != null ? arguments[B] : {};
              B % 2 ? v(Object(q), !0).forEach(function(O) {
                A(R, O, q[O]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(q)) : v(Object(q)).forEach(function(O) {
                Object.defineProperty(R, O, Object.getOwnPropertyDescriptor(q, O));
              });
            }
            return R;
          }
          function A(R, B, q) {
            return (B = function(O) {
              var j = function(k, X) {
                if (f(k) != "object" || !k) return k;
                var ie = k[Symbol.toPrimitive];
                if (ie !== void 0) {
                  var te = ie.call(k, X);
                  if (f(te) != "object") return te;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return (X === "string" ? String : Number)(k);
              }(O, "string");
              return f(j) == "symbol" ? j : j + "";
            }(B)) in R ? Object.defineProperty(R, B, { value: q, enumerable: !0, configurable: !0, writable: !0 }) : R[B] = q, R;
          }
          var U = function(R) {
            return y(y({}, R), {}, { keyboardRef: null });
          }, z = function(R) {
            var B = R.baseClass || "react-simple-keyboard", q = u.useRef(null), O = u.useRef(null), j = u.useRef(null), k = u.useRef(R);
            return u.useEffect(function() {
              return function() {
                j.current && j.current.destroy(), q.current = !1;
              };
            }, []), u.useEffect(function() {
              var X = function(Q) {
                return y(y({}, Q), {}, { theme: "simple-keyboard ".concat(Q.theme || "hg-theme-default") });
              }(R);
              if (!q.current) {
                q.current = !0, X.debug && console.log("ReactSimpleKeyboard: Init");
                var ie = O.current, te = ".".concat(B);
                j.current = new (d())(ie || te, X), X.keyboardRef && X.keyboardRef(j.current);
              }
              var xe = function(Q, Te) {
                var ue = U(Te), Fe = U(Q);
                return Object.keys(ue).filter(function(bt) {
                  return ue[bt] !== Fe[bt];
                });
              }(k.current, X);
              if (xe.length) {
                var fe = j.current;
                k.current = X, fe == null || fe.setOptions(X), X.debug && console.log("ReactSimpleKeyboard - setOptions called due to updated props:", xe);
              }
            }, [q, B, k, R]), u.createElement("div", { className: B, ref: O });
          }, K = z;
        }(), a;
      }();
    });
  }(Wr)), Wr.exports;
}
var df = lf();
const ff = /* @__PURE__ */ Cd(df), Ou = ({
  visible: e,
  onChange: t,
  onSubmit: n,
  onKeyPress: r,
  onRequestClose: i
}) => {
  const [c, a] = Ve("default"), u = on(null), p = on(null), d = () => {
    p.current !== null && (window.clearInterval(p.current), p.current = null);
  }, f = () => {
    setTimeout(() => {
      d(), p.current = window.setInterval(() => {
        r == null || r("{bksp}");
      }, 50);
    }, 400);
  }, v = (y) => {
    y === "{shift}" && c !== "symbols" ? a((A) => A === "shift" ? "default" : "shift") : y === "{special}" ? a("numbers") : y === "{symbols}" ? a("symbols") : y === "{abc}" ? a("default") : y === "{enter}" ? n == null || n() : y === "←" || y === "→" ? r == null || r(y) : y === "{bksp}" ? r == null || r("{bksp}") : r == null || r(y);
  };
  return Et(() => {
    if (!e) return;
    const y = (z) => {
      const K = z.target;
      u.current && u.current.contains(K) || (K.closest("[data-post-comment]") && (n == null || n()), i == null || i());
    }, A = () => {
      var B;
      const z = (B = u.current) == null ? void 0 : B.querySelector('[data-skbtn="{bksp}"]');
      if (!z) return;
      const K = () => f(), R = () => d();
      return z.addEventListener("mousedown", K), z.addEventListener("touchstart", K, { passive: !0 }), document.addEventListener("mouseup", R), document.addEventListener("touchend", R), document.addEventListener("touchcancel", R), () => {
        z.removeEventListener("mousedown", K), z.removeEventListener("touchstart", K), document.removeEventListener("mouseup", R), document.removeEventListener("touchend", R), document.removeEventListener("touchcancel", R);
      };
    };
    document.addEventListener("mousedown", y);
    const U = A();
    return () => {
      document.removeEventListener("mousedown", y), U && U(), d();
    };
  }, [e, i, c]), e ? /* @__PURE__ */ N.jsx("div", { ref: u, className: "arc-keyboard-container", role: "dialog", "aria-label": "On-screen keyboard", children: /* @__PURE__ */ N.jsx(
    ff,
    {
      theme: "hg-theme-default keyboard-default",
      layoutName: c,
      onChange: t,
      onKeyPress: v,
      layout: {
        default: [
          "q w e r t y u i o p",
          "a s d f g h j k l",
          "{shift} z x c v b n m {bksp}",
          "{special} , {space} . {enter}"
        ],
        shift: [
          "Q W E R T Y U I O P",
          "A S D F G H J K L",
          "{shift} Z X C V B N M {bksp}",
          "{special} , {space} . {enter}"
        ],
        numbers: [
          "1 2 3 4 5 6 7 8 9 0",
          "@ # € _ & - + ( ) /",
          `{symbols} * " ' : ; ! ? {bksp}`,
          "{abc} , {space} . {enter}"
        ],
        symbols: [
          "~ ` | • √ π ÷ × ¶",
          "£ $ ¢ ¥ ^ ° = { }",
          "{special} [ ] < > % © ® ™ {bksp}",
          "{abc} , {space} . {enter}"
        ]
      },
      buttonTheme: [
        { class: "key-mod key-shift fas fa-caret-square-up", buttons: "{shift}" },
        { class: "key-mod key-bksp fas fa-backspace", buttons: "{bksp}" },
        { class: "key-mod key-enter fas fa-arrow-right", buttons: "{enter}" },
        { class: "key-wide key-space", buttons: "{space}" },
        { class: "key-wide key-mode", buttons: "{special} {symbols} {abc}" }
      ],
      display: {
        "{shift}": " ",
        "{space}": " ",
        "{bksp}": " ",
        "{enter}": " ",
        "{special}": "?123",
        "{symbols}": "=\\<",
        "{abc}": "ABC"
      }
    }
  ) }) : null;
}, hf = Nr((e, t) => ({
  locations: {},
  getPosition: (n, r) => {
    const i = `${n},${r}`, c = t().locations[i];
    if (c)
      return c;
    const a = {
      latitude: n,
      longitude: r,
      altitude: 0
    }, { x: u, z: p } = Su(Cu, a), d = new dn(u, 0, p);
    return setTimeout(() => {
      e((f) => ({
        locations: { ...f.locations, [i]: d }
      })), console.log(`Save new ${d} with key: ${i}`);
    }, 0), d;
  }
}));
function pf(e, t, n) {
  var R, B, q;
  const r = e.inputSource, i = t.gl.xr.getReferenceSpace(), c = e.frame.getPose(r.targetRaySpace, i);
  if (!c) return null;
  const { x: a, y: u, z: p } = c.transform.position, { x: d, y: f, z: v, w: y } = c.transform.orientation, A = new We.Vector3(a, u, p), U = new We.Vector3(0, 0, -1).applyQuaternion(new We.Quaternion(d, f, v, y)), K = new We.Raycaster(A, U).intersectObjects(t.scene.children, !0);
  console.log("Intersects:", K);
  for (const O of K) {
    const j = (B = (R = O.object) == null ? void 0 : R.userData) == null ? void 0 : B.sceneObjectId;
    if (j !== void 0)
      return ((q = n.find((k) => k.id === j)) == null ? void 0 : q.id) || null;
  }
  return null;
}
const gf = (e, t, n) => {
  const r = e.coordinates || [0, 0], i = (t == null ? void 0 : t.offset_position) || new dn();
  return n(r[0], r[1]).addedPosition(i);
}, mf = ({
  selectedVariants: e,
  minioClientData: t,
  worldRotation: n,
  worldPosition: r,
  cameraPosition: i
}) => {
  const { scene: c } = qi(), a = hf((p) => p.getPosition), u = es(() => {
    var p;
    return (p = c.objects) == null ? void 0 : p.map((d) => {
      var U;
      if (!d || !d.variants)
        return console.error("Invalid scene object:", d), null;
      const f = d.id, v = e[d.id] ?? ((U = d.variants[0]) == null ? void 0 : U.id), y = d.variants.find((z) => z.id === v);
      if (!y || !y.mesh_id)
        return console.error("Invalid variant:", y), null;
      const A = gf(d, y, a).substractedPosition(r);
      return /* @__PURE__ */ N.jsx(
        "mesh",
        {
          userData: { sceneObjectId: f },
          position: A.toArray(),
          rotation: [
            We.MathUtils.degToRad(-y.offset_rotation[0]),
            We.MathUtils.degToRad(-y.offset_rotation[1]),
            We.MathUtils.degToRad(-y.offset_rotation[2])
          ],
          children: y.mesh_id === "primitive_cube" ? /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
            /* @__PURE__ */ N.jsx("boxGeometry", { args: y.offset_scale }),
            /* @__PURE__ */ N.jsx("meshStandardMaterial", { color: "#248cb5" })
          ] }) : y.mesh_id === "primitive_sphere" ? /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
            /* @__PURE__ */ N.jsx("sphereGeometry", { args: y.offset_scale }),
            /* @__PURE__ */ N.jsx("meshStandardMaterial", { color: "#248cb5" })
          ] }) : /* @__PURE__ */ N.jsx(
            Pw,
            {
              sceneObjectId: f,
              meshObjectId: y.mesh_id,
              meshObjectUrl: y.mesh_url || null,
              scale: y.offset_scale,
              minioData: t
            },
            `${d.id}_${y.id}`
          )
        },
        f
      );
    });
  }, [c.objects, t, e, r, n]);
  return c ? /* @__PURE__ */ N.jsx("group", { rotation: [0, -n - Math.PI / 2, 0], children: u }) : (console.warn("Scene data is null or undefined."), null);
}, yf = (e) => ({
  setHttpHandler(t) {
    e.httpHandler = t;
  },
  httpHandler() {
    return e.httpHandler;
  },
  updateHttpClientConfig(t, n) {
    var r;
    (r = e.httpHandler) == null || r.updateHttpClientConfig(t, n);
  },
  httpHandlerConfigs() {
    return e.httpHandler.httpHandlerConfigs();
  }
}), bf = (e) => ({
  httpHandler: e.httpHandler()
});
var Ho;
(function(e) {
  e.HEADER = "header", e.QUERY = "query";
})(Ho || (Ho = {}));
var zo;
(function(e) {
  e.HEADER = "header", e.QUERY = "query";
})(zo || (zo = {}));
var Rr;
(function(e) {
  e.HTTP = "http", e.HTTPS = "https";
})(Rr || (Rr = {}));
var ts;
(function(e) {
  e.MD5 = "md5", e.CRC32 = "crc32", e.CRC32C = "crc32c", e.SHA1 = "sha1", e.SHA256 = "sha256";
})(ts || (ts = {}));
var Ko;
(function(e) {
  e[e.HEADER = 0] = "HEADER", e[e.TRAILER = 1] = "TRAILER";
})(Ko || (Ko = {}));
const ki = "__smithy_context";
var qo;
(function(e) {
  e.PROFILE = "profile", e.SSO_SESSION = "sso-session", e.SERVICES = "services";
})(qo || (qo = {}));
var Vo;
(function(e) {
  e.HTTP_0_9 = "http/0.9", e.HTTP_1_0 = "http/1.0", e.TDS_8_0 = "tds/8.0";
})(Vo || (Vo = {}));
class Nt {
  constructor(t) {
    this.method = t.method || "GET", this.hostname = t.hostname || "localhost", this.port = t.port, this.query = t.query || {}, this.headers = t.headers || {}, this.body = t.body, this.protocol = t.protocol ? t.protocol.slice(-1) !== ":" ? `${t.protocol}:` : t.protocol : "https:", this.path = t.path ? t.path.charAt(0) !== "/" ? `/${t.path}` : t.path : "/", this.username = t.username, this.password = t.password, this.fragment = t.fragment;
  }
  static clone(t) {
    const n = new Nt({
      ...t,
      headers: { ...t.headers }
    });
    return n.query && (n.query = vf(n.query)), n;
  }
  static isInstance(t) {
    if (!t)
      return !1;
    const n = t;
    return "method" in n && "protocol" in n && "hostname" in n && "path" in n && typeof n.query == "object" && typeof n.headers == "object";
  }
  clone() {
    return Nt.clone(this);
  }
}
function vf(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return {
      ...t,
      [n]: Array.isArray(r) ? [...r] : r
    };
  }, {});
}
class zn {
  constructor(t) {
    this.statusCode = t.statusCode, this.reason = t.reason, this.headers = t.headers || {}, this.body = t.body;
  }
  static isInstance(t) {
    if (!t)
      return !1;
    const n = t;
    return typeof n.statusCode == "number" && typeof n.headers == "object";
  }
}
function wf(e) {
  return (t) => async (n) => {
    var i, c;
    const { request: r } = n;
    return Nt.isInstance(r) && r.body && e.runtime === "node" && ((c = (i = e.requestHandler) == null ? void 0 : i.constructor) == null ? void 0 : c.name) !== "FetchHttpHandler" && (r.headers = {
      ...r.headers,
      Expect: "100-continue"
    }), t({
      ...n,
      request: r
    });
  };
}
const xf = {
  step: "build",
  tags: ["SET_EXPECT_HEADER", "EXPECT_HEADER"],
  name: "addExpectContinueMiddleware",
  override: !0
}, Ef = (e) => ({
  applyToStack: (t) => {
    t.add(wf(e), xf);
  }
}), tr = {
  WHEN_SUPPORTED: "WHEN_SUPPORTED",
  WHEN_REQUIRED: "WHEN_REQUIRED"
}, Sf = tr.WHEN_SUPPORTED, Cs = {
  WHEN_SUPPORTED: "WHEN_SUPPORTED",
  WHEN_REQUIRED: "WHEN_REQUIRED"
}, Af = tr.WHEN_SUPPORTED;
var pt;
(function(e) {
  e.MD5 = "MD5", e.CRC32 = "CRC32", e.CRC32C = "CRC32C", e.CRC64NVME = "CRC64NVME", e.SHA1 = "SHA1", e.SHA256 = "SHA256";
})(pt || (pt = {}));
var Go;
(function(e) {
  e.HEADER = "header", e.TRAILER = "trailer";
})(Go || (Go = {}));
const Ti = pt.CRC32;
var Wo;
(function(e) {
  e.ENV = "env", e.CONFIG = "shared config entry";
})(Wo || (Wo = {}));
function Cf(e, t, n) {
  return e.$source || (e.$source = {}), e.$source[t] = n, e;
}
function kt(e, t, n) {
  e.__aws_sdk_context ? e.__aws_sdk_context.features || (e.__aws_sdk_context.features = {}) : e.__aws_sdk_context = {
    features: {}
  }, e.__aws_sdk_context.features[t] = n;
}
const Xo = (e) => {
  var t, n;
  return zn.isInstance(e) ? ((t = e.headers) == null ? void 0 : t.date) ?? ((n = e.headers) == null ? void 0 : n.Date) : void 0;
}, Vi = (e) => new Date(Date.now() + e), Rf = (e, t) => Math.abs(Vi(t).getTime() - e) >= 3e5, Yo = (e, t) => {
  const n = Date.parse(e);
  return Rf(n, t) ? n - Date.now() : t;
}, yr = (e, t) => {
  if (!t)
    throw new Error(`Property \`${e}\` is not resolved for AWS SDK SigV4Auth`);
  return t;
}, Iu = async (e) => {
  var d, f, v;
  const t = yr("context", e.context), n = yr("config", e.config), r = (v = (f = (d = t.endpointV2) == null ? void 0 : d.properties) == null ? void 0 : f.authSchemes) == null ? void 0 : v[0], c = await yr("signer", n.signer)(r), a = e == null ? void 0 : e.signingRegion, u = e == null ? void 0 : e.signingRegionSet, p = e == null ? void 0 : e.signingName;
  return {
    config: n,
    signer: c,
    signingRegion: a,
    signingRegionSet: u,
    signingName: p
  };
};
class Nu {
  async sign(t, n, r) {
    var v;
    if (!Nt.isInstance(t))
      throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
    const i = await Iu(r), { config: c, signer: a } = i;
    let { signingRegion: u, signingName: p } = i;
    const d = r.context;
    if (((v = d == null ? void 0 : d.authSchemes) == null ? void 0 : v.length) ?? !1) {
      const [y, A] = d.authSchemes;
      (y == null ? void 0 : y.name) === "sigv4a" && (A == null ? void 0 : A.name) === "sigv4" && (u = (A == null ? void 0 : A.signingRegion) ?? u, p = (A == null ? void 0 : A.signingName) ?? p);
    }
    return await a.sign(t, {
      signingDate: Vi(c.systemClockOffset),
      signingRegion: u,
      signingService: p
    });
  }
  errorHandler(t) {
    return (n) => {
      const r = n.ServerTime ?? Xo(n.$response);
      if (r) {
        const i = yr("config", t.config), c = i.systemClockOffset;
        i.systemClockOffset = Yo(r, i.systemClockOffset), i.systemClockOffset !== c && n.$metadata && (n.$metadata.clockSkewCorrected = !0);
      }
      throw n;
    };
  }
  successHandler(t, n) {
    const r = Xo(t);
    if (r) {
      const i = yr("config", n.config);
      i.systemClockOffset = Yo(r, i.systemClockOffset);
    }
  }
}
class kf extends Nu {
  async sign(t, n, r) {
    var y;
    if (!Nt.isInstance(t))
      throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
    const { config: i, signer: c, signingRegion: a, signingRegionSet: u, signingName: p } = await Iu(r), f = (await ((y = i.sigv4aSigningRegionSet) == null ? void 0 : y.call(i)) ?? u ?? [a]).join(",");
    return await c.sign(t, {
      signingDate: Vi(i.systemClockOffset),
      signingRegion: f,
      signingService: p
    });
  }
}
const or = (e) => e[ki] || (e[ki] = {}), bn = (e) => {
  if (typeof e == "function")
    return e;
  const t = Promise.resolve(e);
  return () => t;
}, Tf = (e, t) => {
  if (!t || t.length === 0)
    return e;
  const n = [];
  for (const r of t)
    for (const i of e)
      i.schemeId.split("#")[1] === r && n.push(i);
  for (const r of e)
    n.find(({ schemeId: i }) => i === r.schemeId) || n.push(r);
  return n;
};
function _f(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e)
    t.set(n.schemeId, n);
  return t;
}
const Of = (e, t) => (n, r) => async (i) => {
  var v;
  const c = e.httpAuthSchemeProvider(await t.httpAuthSchemeParametersProvider(e, r, i.input)), a = e.authSchemePreference ? await e.authSchemePreference() : [], u = Tf(c, a), p = _f(e.httpAuthSchemes), d = or(r), f = [];
  for (const y of u) {
    const A = p.get(y.schemeId);
    if (!A) {
      f.push(`HttpAuthScheme \`${y.schemeId}\` was not enabled for this service.`);
      continue;
    }
    const U = A.identityProvider(await t.identityProviderConfigProvider(e));
    if (!U) {
      f.push(`HttpAuthScheme \`${y.schemeId}\` did not have an IdentityProvider configured.`);
      continue;
    }
    const { identityProperties: z = {}, signingProperties: K = {} } = ((v = y.propertiesExtractor) == null ? void 0 : v.call(y, e, r)) || {};
    y.identityProperties = Object.assign(y.identityProperties || {}, z), y.signingProperties = Object.assign(y.signingProperties || {}, K), d.selectedHttpAuthScheme = {
      httpAuthOption: y,
      identity: await U(y.identityProperties),
      signer: A.signer
    };
    break;
  }
  if (!d.selectedHttpAuthScheme)
    throw new Error(f.join(`
`));
  return n(i);
}, If = {
  step: "serialize",
  tags: ["HTTP_AUTH_SCHEME"],
  name: "httpAuthSchemeMiddleware",
  override: !0,
  relation: "before",
  toMiddleware: "endpointV2Middleware"
}, Nf = (e, { httpAuthSchemeParametersProvider: t, identityProviderConfigProvider: n }) => ({
  applyToStack: (r) => {
    r.addRelativeTo(Of(e, {
      httpAuthSchemeParametersProvider: t,
      identityProviderConfigProvider: n
    }), If);
  }
}), Pf = (e, t) => (n, r) => async (i) => {
  var a, u, p, d;
  const { response: c } = await n(i);
  try {
    const f = await t(c, e);
    return {
      response: c,
      output: f
    };
  } catch (f) {
    if (Object.defineProperty(f, "$response", {
      value: c
    }), !("$metadata" in f)) {
      const v = "Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.";
      try {
        f.message += `
  ` + v;
      } catch {
        !r.logger || ((u = (a = r.logger) == null ? void 0 : a.constructor) == null ? void 0 : u.name) === "NoOpLogger" ? console.warn(v) : (d = (p = r.logger) == null ? void 0 : p.warn) == null || d.call(p, v);
      }
      typeof f.$responseBodyText < "u" && f.$response && (f.$response.body = f.$responseBodyText);
      try {
        if (zn.isInstance(c)) {
          const { headers: y = {} } = c, A = Object.entries(y);
          f.$metadata = {
            httpStatusCode: c.statusCode,
            requestId: Rs(/^x-[\w-]+-request-?id$/, A),
            extendedRequestId: Rs(/^x-[\w-]+-id-2$/, A),
            cfId: Rs(/^x-[\w-]+-cf-id$/, A)
          };
        }
      } catch {
      }
    }
    throw f;
  }
}, Rs = (e, t) => (t.find(([n]) => n.match(e)) || [void 0, void 0])[1], Mf = (e, t) => (n, r) => async (i) => {
  var p;
  const c = e, a = (p = r.endpointV2) != null && p.url && c.urlParser ? async () => c.urlParser(r.endpointV2.url) : c.endpoint;
  if (!a)
    throw new Error("No valid endpoint provider available.");
  const u = await t(i.input, { ...e, endpoint: a });
  return n({
    ...i,
    request: u
  });
}, Bf = {
  name: "deserializerMiddleware",
  step: "deserialize",
  tags: ["DESERIALIZER"],
  override: !0
}, Gi = {
  name: "serializerMiddleware",
  step: "serialize",
  tags: ["SERIALIZER"],
  override: !0
};
function Pu(e, t, n) {
  return {
    applyToStack: (r) => {
      r.add(Pf(e, n), Bf), r.add(Mf(e, t), Gi);
    }
  };
}
Gi.name;
const Df = (e) => (t) => {
  throw t;
}, Ff = (e, t) => {
}, jf = (e) => (t, n) => async (r) => {
  if (!Nt.isInstance(r.request))
    return t(r);
  const c = or(n).selectedHttpAuthScheme;
  if (!c)
    throw new Error("No HttpAuthScheme was selected: unable to sign request");
  const { httpAuthOption: { signingProperties: a = {} }, identity: u, signer: p } = c, d = await t({
    ...r,
    request: await p.sign(r.request, u, a)
  }).catch((p.errorHandler || Df)(a));
  return (p.successHandler || Ff)(d.response, a), d;
}, Mu = {
  step: "finalizeRequest",
  tags: ["HTTP_SIGNING"],
  name: "httpSigningMiddleware",
  aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
  override: !0,
  relation: "after",
  toMiddleware: "retryMiddleware"
}, Lf = (e) => ({
  applyToStack: (t) => {
    t.addRelativeTo(jf(), Mu);
  }
}), Jn = (e) => {
  if (typeof e == "function")
    return e;
  const t = Promise.resolve(e);
  return () => t;
}, Pn = {}, ar = new Array(64);
for (let e = 0, t = 65, n = 90; e + t <= n; e++) {
  const r = String.fromCharCode(e + t);
  Pn[r] = e, ar[e] = r;
}
for (let e = 0, t = 97, n = 122; e + t <= n; e++) {
  const r = String.fromCharCode(e + t), i = e + 26;
  Pn[r] = i, ar[i] = r;
}
for (let e = 0; e < 10; e++) {
  Pn[e.toString(10)] = e + 52;
  const t = e.toString(10), n = e + 52;
  Pn[t] = n, ar[n] = t;
}
Pn["+"] = 62;
ar[62] = "+";
Pn["/"] = 63;
ar[63] = "/";
const Qn = 6, br = 8, Uf = 63, Wi = (e) => {
  let t = e.length / 4 * 3;
  e.slice(-2) === "==" ? t -= 2 : e.slice(-1) === "=" && t--;
  const n = new ArrayBuffer(t), r = new DataView(n);
  for (let i = 0; i < e.length; i += 4) {
    let c = 0, a = 0;
    for (let d = i, f = i + 3; d <= f; d++)
      if (e[d] !== "=") {
        if (!(e[d] in Pn))
          throw new TypeError(`Invalid character ${e[d]} in base64 string.`);
        c |= Pn[e[d]] << (f - d) * Qn, a += Qn;
      } else
        c >>= Qn;
    const u = i / 4 * 3;
    c >>= a % br;
    const p = Math.floor(a / br);
    for (let d = 0; d < p; d++) {
      const f = (p - d - 1) * br;
      r.setUint8(u + d, (c & 255 << f) >> f);
    }
  }
  return new Uint8Array(n);
}, Kn = (e) => new TextEncoder().encode(e), nr = (e) => typeof e == "string" ? Kn(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e), Xi = (e) => {
  if (typeof e == "string")
    return e;
  if (typeof e != "object" || typeof e.byteOffset != "number" || typeof e.byteLength != "number")
    throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
  return new TextDecoder("utf-8").decode(e);
};
function vs(e) {
  let t;
  typeof e == "string" ? t = Kn(e) : t = e;
  const n = typeof t == "object" && typeof t.length == "number", r = typeof t == "object" && typeof t.byteOffset == "number" && typeof t.byteLength == "number";
  if (!n && !r)
    throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
  let i = "";
  for (let c = 0; c < t.length; c += 3) {
    let a = 0, u = 0;
    for (let d = c, f = Math.min(c + 3, t.length); d < f; d++)
      a |= t[d] << (f - d - 1) * br, u += br;
    const p = Math.ceil(u / Qn);
    a <<= p * Qn - u;
    for (let d = 1; d <= p; d++) {
      const f = (p - d) * Qn;
      i += ar[(a & Uf << f) >> f];
    }
    i += "==".slice(0, 4 - p);
  }
  return i;
}
function $f(e, t = "utf-8") {
  return t === "base64" ? vs(e) : Xi(e);
}
function Hf(e, t) {
  return t === "base64" ? $n.mutate(Wi(e)) : $n.mutate(Kn(e));
}
class $n extends Uint8Array {
  static fromString(t, n = "utf-8") {
    switch (typeof t) {
      case "string":
        return Hf(t, n);
      default:
        throw new Error(`Unsupported conversion from ${typeof t} to Uint8ArrayBlobAdapter.`);
    }
  }
  static mutate(t) {
    return Object.setPrototypeOf(t, $n.prototype), t;
  }
  transformToString(t = "utf-8") {
    return $f(this, t);
  }
}
const zf = typeof ReadableStream == "function" ? ReadableStream : function() {
};
class Kf extends zf {
}
const _i = (e) => {
  var t;
  return typeof ReadableStream == "function" && (((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.name) === ReadableStream.name || e instanceof ReadableStream);
}, qf = ({ expectedChecksum: e, checksum: t, source: n, checksumSourceLocation: r, base64Encoder: i }) => {
  var p;
  if (!_i(n))
    throw new Error(`@smithy/util-stream: unsupported source type ${((p = n == null ? void 0 : n.constructor) == null ? void 0 : p.name) ?? n} in ChecksumStream.`);
  const c = i ?? vs;
  if (typeof TransformStream != "function")
    throw new Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.");
  const a = new TransformStream({
    start() {
    },
    async transform(d, f) {
      t.update(d), f.enqueue(d);
    },
    async flush(d) {
      const f = await t.digest(), v = c(f);
      if (e !== v) {
        const y = new Error(`Checksum mismatch: expected "${e}" but received "${v}" in response header "${r}".`);
        d.error(y);
      } else
        d.terminate();
    }
  });
  n.pipeThrough(a);
  const u = a.readable;
  return Object.setPrototypeOf(u, Kf.prototype), u;
};
class Vf {
  constructor(t) {
    this.allocByteArray = t, this.byteLength = 0, this.byteArrays = [];
  }
  push(t) {
    this.byteArrays.push(t), this.byteLength += t.byteLength;
  }
  flush() {
    if (this.byteArrays.length === 1) {
      const r = this.byteArrays[0];
      return this.reset(), r;
    }
    const t = this.allocByteArray(this.byteLength);
    let n = 0;
    for (let r = 0; r < this.byteArrays.length; ++r) {
      const i = this.byteArrays[r];
      t.set(i, n), n += i.byteLength;
    }
    return this.reset(), t;
  }
  reset() {
    this.byteArrays = [], this.byteLength = 0;
  }
}
function Gf(e, t, n) {
  const r = e.getReader();
  let i = !1, c = 0;
  const a = ["", new Vf((d) => new Uint8Array(d))];
  let u = -1;
  const p = async (d) => {
    const { value: f, done: v } = await r.read(), y = f;
    if (v) {
      if (u !== -1) {
        const A = ks(a, u);
        vr(A) > 0 && d.enqueue(A);
      }
      d.close();
    } else {
      const A = Yf(y, !1);
      if (u !== A && (u >= 0 && d.enqueue(ks(a, u)), u = A), u === -1) {
        d.enqueue(y);
        return;
      }
      const U = vr(y);
      c += U;
      const z = vr(a[u]);
      if (U >= t && z === 0)
        d.enqueue(y);
      else {
        const K = Xf(a, u, y);
        !i && c > t * 2 && (i = !0, n == null || n.warn(`@smithy/util-stream - stream chunk size ${U} is below threshold of ${t}, automatically buffering.`)), K >= t ? d.enqueue(ks(a, u)) : await p(d);
      }
    }
  };
  return new ReadableStream({
    pull: p
  });
}
const Wf = Gf;
function Xf(e, t, n) {
  switch (t) {
    case 0:
      return e[0] += n, vr(e[0]);
    case 1:
    case 2:
      return e[t].push(n), vr(e[t]);
  }
}
function ks(e, t) {
  switch (t) {
    case 0:
      const n = e[0];
      return e[0] = "", n;
    case 1:
    case 2:
      return e[t].flush();
  }
  throw new Error(`@smithy/util-stream - invalid index ${t} given to flush()`);
}
function vr(e) {
  return (e == null ? void 0 : e.byteLength) ?? (e == null ? void 0 : e.length) ?? 0;
}
function Yf(e, t = !0) {
  return t && typeof Buffer < "u" && e instanceof Buffer ? 2 : e instanceof Uint8Array ? 1 : typeof e == "string" ? 0 : -1;
}
const Zf = (e, t) => {
  const { base64Encoder: n, bodyLengthChecker: r, checksumAlgorithmFn: i, checksumLocationName: c, streamHasher: a } = t, u = n !== void 0 && r !== void 0 && i !== void 0 && c !== void 0 && a !== void 0, p = u ? a(i, e) : void 0, d = e.getReader();
  return new ReadableStream({
    async pull(f) {
      const { value: v, done: y } = await d.read();
      if (y) {
        if (f.enqueue(`0\r
`), u) {
          const A = n(await p);
          f.enqueue(`${c}:${A}\r
`), f.enqueue(`\r
`);
        }
        f.close();
      } else
        f.enqueue(`${(r(v) || 0).toString(16)}\r
${v}\r
`);
    }
  });
};
async function Jf(e, t) {
  let n = 0;
  const r = [], i = e.getReader();
  let c = !1;
  for (; !c; ) {
    const { done: p, value: d } = await i.read();
    if (d && (r.push(d), n += (d == null ? void 0 : d.byteLength) ?? 0), n >= t)
      break;
    c = p;
  }
  i.releaseLock();
  const a = new Uint8Array(Math.min(t, n));
  let u = 0;
  for (const p of r) {
    if (p.byteLength > a.byteLength - u) {
      a.set(p.subarray(0, a.byteLength - u), u);
      break;
    } else
      a.set(p, u);
    u += p.length;
  }
  return a;
}
const Hn = (e) => encodeURIComponent(e).replace(/[!'()*]/g, Qf), Qf = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`;
function eh(e) {
  const t = [];
  for (let n of Object.keys(e).sort()) {
    const r = e[n];
    if (n = Hn(n), Array.isArray(r))
      for (let i = 0, c = r.length; i < c; i++)
        t.push(`${n}=${Hn(r[i])}`);
    else {
      let i = n;
      (r || typeof r == "string") && (i += `=${Hn(r)}`), t.push(i);
    }
  }
  return t.join("&");
}
function Zo(e, t) {
  return new Request(e, t);
}
function th(e = 0) {
  return new Promise((t, n) => {
    e && setTimeout(() => {
      const r = new Error(`Request did not complete within ${e} ms`);
      r.name = "TimeoutError", n(r);
    }, e);
  });
}
const Ts = {
  supported: void 0
};
class Yi {
  static create(t) {
    return typeof (t == null ? void 0 : t.handle) == "function" ? t : new Yi(t);
  }
  constructor(t) {
    typeof t == "function" ? this.configProvider = t().then((n) => n || {}) : (this.config = t ?? {}, this.configProvider = Promise.resolve(this.config)), Ts.supported === void 0 && (Ts.supported = typeof Request < "u" && "keepalive" in Zo("https://[::1]"));
  }
  destroy() {
  }
  async handle(t, { abortSignal: n } = {}) {
    var R;
    this.config || (this.config = await this.configProvider);
    const r = this.config.requestTimeout, i = this.config.keepAlive === !0, c = this.config.credentials;
    if (n != null && n.aborted) {
      const B = new Error("Request aborted");
      return B.name = "AbortError", Promise.reject(B);
    }
    let a = t.path;
    const u = eh(t.query || {});
    u && (a += `?${u}`), t.fragment && (a += `#${t.fragment}`);
    let p = "";
    if (t.username != null || t.password != null) {
      const B = t.username ?? "", q = t.password ?? "";
      p = `${B}:${q}@`;
    }
    const { port: d, method: f } = t, v = `${t.protocol}//${p}${t.hostname}${d ? `:${d}` : ""}${a}`, y = f === "GET" || f === "HEAD" ? void 0 : t.body, A = {
      body: y,
      headers: new Headers(t.headers),
      method: f,
      credentials: c
    };
    (R = this.config) != null && R.cache && (A.cache = this.config.cache), y && (A.duplex = "half"), typeof AbortController < "u" && (A.signal = n), Ts.supported && (A.keepalive = i), typeof this.config.requestInit == "function" && Object.assign(A, this.config.requestInit(t));
    let U = () => {
    };
    const z = Zo(v, A), K = [
      fetch(z).then((B) => {
        const q = B.headers, O = {};
        for (const k of q.entries())
          O[k[0]] = k[1];
        return B.body != null ? {
          response: new zn({
            headers: O,
            reason: B.statusText,
            statusCode: B.status,
            body: B.body
          })
        } : B.blob().then((k) => ({
          response: new zn({
            headers: O,
            reason: B.statusText,
            statusCode: B.status,
            body: k
          })
        }));
      }),
      th(r)
    ];
    return n && K.push(new Promise((B, q) => {
      const O = () => {
        const j = new Error("Request aborted");
        j.name = "AbortError", q(j);
      };
      if (typeof n.addEventListener == "function") {
        const j = n;
        j.addEventListener("abort", O, { once: !0 }), U = () => j.removeEventListener("abort", O);
      } else
        n.onabort = O;
    })), Promise.race(K).finally(U);
  }
  updateHttpClientConfig(t, n) {
    this.config = void 0, this.configProvider = this.configProvider.then((r) => (r[t] = n, r));
  }
  httpHandlerConfigs() {
    return this.config ?? {};
  }
}
const Bu = async (e) => {
  var t;
  return typeof Blob == "function" && e instanceof Blob || ((t = e.constructor) == null ? void 0 : t.name) === "Blob" ? Blob.prototype.arrayBuffer !== void 0 ? new Uint8Array(await e.arrayBuffer()) : nh(e) : rh(e);
};
async function nh(e) {
  const t = await sh(e), n = Wi(t);
  return new Uint8Array(n);
}
async function rh(e) {
  const t = [], n = e.getReader();
  let r = !1, i = 0;
  for (; !r; ) {
    const { done: u, value: p } = await n.read();
    p && (t.push(p), i += p.length), r = u;
  }
  const c = new Uint8Array(i);
  let a = 0;
  for (const u of t)
    c.set(u, a), a += u.length;
  return c;
}
function sh(e) {
  return new Promise((t, n) => {
    const r = new FileReader();
    r.onloadend = () => {
      if (r.readyState !== 2)
        return n(new Error("Reader aborted too early"));
      const i = r.result ?? "", c = i.indexOf(","), a = c > -1 ? c + 1 : i.length;
      t(i.substring(a));
    }, r.onabort = () => n(new Error("Read aborted")), r.onerror = () => n(r.error), r.readAsDataURL(e);
  });
}
const Du = {}, Oi = {};
for (let e = 0; e < 256; e++) {
  let t = e.toString(16).toLowerCase();
  t.length === 1 && (t = `0${t}`), Du[e] = t, Oi[t] = e;
}
function Fu(e) {
  if (e.length % 2 !== 0)
    throw new Error("Hex encoded strings must have an even number length");
  const t = new Uint8Array(e.length / 2);
  for (let n = 0; n < e.length; n += 2) {
    const r = e.slice(n, n + 2).toLowerCase();
    if (r in Oi)
      t[n / 2] = Oi[r];
    else
      throw new Error(`Cannot decode unrecognized sequence ${r} as hexadecimal`);
  }
  return t;
}
function rn(e) {
  let t = "";
  for (let n = 0; n < e.byteLength; n++)
    t += Du[e[n]];
  return t;
}
const Jo = "The stream has already been transformed.", ih = (e) => {
  var i, c;
  if (!Qo(e) && !_i(e)) {
    const a = ((c = (i = e == null ? void 0 : e.__proto__) == null ? void 0 : i.constructor) == null ? void 0 : c.name) || e;
    throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${a}`);
  }
  let t = !1;
  const n = async () => {
    if (t)
      throw new Error(Jo);
    return t = !0, await Bu(e);
  }, r = (a) => {
    if (typeof a.stream != "function")
      throw new Error(`Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.
If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body`);
    return a.stream();
  };
  return Object.assign(e, {
    transformToByteArray: n,
    transformToString: async (a) => {
      const u = await n();
      if (a === "base64")
        return vs(u);
      if (a === "hex")
        return rn(u);
      if (a === void 0 || a === "utf8" || a === "utf-8")
        return Xi(u);
      if (typeof TextDecoder == "function")
        return new TextDecoder(a).decode(u);
      throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
    },
    transformToWebStream: () => {
      if (t)
        throw new Error(Jo);
      if (t = !0, Qo(e))
        return r(e);
      if (_i(e))
        return e;
      throw new Error(`Cannot transform payload to web stream, got ${e}`);
    }
  });
}, Qo = (e) => typeof Blob == "function" && e instanceof Blob;
async function oh(e) {
  return typeof e.stream == "function" && (e = e.stream()), e.tee();
}
const ah = async (e = new Uint8Array(), t) => {
  if (e instanceof Uint8Array)
    return $n.mutate(e);
  if (!e)
    return $n.mutate(new Uint8Array());
  const n = t.streamCollector(e);
  return $n.mutate(await n);
};
function ea(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, function(t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
const ch = (e, t, n, r, i, c) => {
  if (t != null && t[n] !== void 0) {
    const a = r();
    if (a.length <= 0)
      throw new Error("Empty value provided for input HTTP label: " + n + ".");
    e = e.replace(i, c ? a.split("/").map((u) => ea(u)).join("/") : ea(a));
  } else
    throw new Error("No value provided for input HTTP label: " + n + ".");
  return e;
};
function ju(e, t) {
  return new uh(e, t);
}
class uh {
  constructor(t, n) {
    this.input = t, this.context = n, this.query = {}, this.method = "", this.headers = {}, this.path = "", this.body = null, this.hostname = "", this.resolvePathStack = [];
  }
  async build() {
    const { hostname: t, protocol: n = "https", port: r, path: i } = await this.context.endpoint();
    this.path = i;
    for (const c of this.resolvePathStack)
      c(this.path);
    return new Nt({
      protocol: n,
      hostname: this.hostname || t,
      port: r,
      method: this.method,
      path: this.path,
      query: this.query,
      body: this.body,
      headers: this.headers
    });
  }
  hn(t) {
    return this.hostname = t, this;
  }
  bp(t) {
    return this.resolvePathStack.push((n) => {
      this.path = `${n != null && n.endsWith("/") ? n.slice(0, -1) : n || ""}` + t;
    }), this;
  }
  p(t, n, r, i) {
    return this.resolvePathStack.push((c) => {
      this.path = ch(c, this.input, t, n, r, i);
    }), this;
  }
  h(t) {
    return this.headers = t, this;
  }
  q(t) {
    return this.query = t, this;
  }
  b(t) {
    return this.body = t, this;
  }
  m(t) {
    return this.method = t, this;
  }
}
function lh(e, t, n) {
  e.__smithy_context ? e.__smithy_context.features || (e.__smithy_context.features = {}) : e.__smithy_context = {
    features: {}
  }, e.__smithy_context.features[t] = n;
}
class dh {
  constructor(t) {
    this.authSchemes = /* @__PURE__ */ new Map();
    for (const [n, r] of Object.entries(t))
      r !== void 0 && this.authSchemes.set(n, r);
  }
  getIdentityProvider(t) {
    return this.authSchemes.get(t);
  }
}
const fh = (e) => (t) => Lu(t) && t.expiration.getTime() - Date.now() < e, hh = 3e5, ph = fh(hh), Lu = (e) => e.expiration !== void 0, gh = (e, t, n) => {
  if (e === void 0)
    return;
  const r = typeof e != "function" ? async () => Promise.resolve(e) : e;
  let i, c, a, u = !1;
  const p = async (d) => {
    c || (c = r(d));
    try {
      i = await c, a = !0, u = !1;
    } finally {
      c = void 0;
    }
    return i;
  };
  return t === void 0 ? async (d) => ((!a || d != null && d.forceRefresh) && (i = await p(d)), i) : async (d) => ((!a || d != null && d.forceRefresh) && (i = await p(d)), u ? i : n(i) ? (t(i) && await p(d), i) : (u = !0, i));
}, mh = (e, t, n) => {
  let r, i, c, a = !1;
  const u = async () => {
    i || (i = e());
    try {
      r = await i, c = !0, a = !1;
    } finally {
      i = void 0;
    }
    return r;
  };
  return async (p) => ((!c || p != null && p.forceRefresh) && (r = await u()), r);
}, yh = (e) => (e.sigv4aSigningRegionSet = Jn(e.sigv4aSigningRegionSet), e), bh = "X-Amz-Algorithm", vh = "X-Amz-Credential", Uu = "X-Amz-Date", wh = "X-Amz-SignedHeaders", xh = "X-Amz-Expires", $u = "X-Amz-Signature", Hu = "X-Amz-Security-Token", zu = "authorization", Ku = Uu.toLowerCase(), Eh = "date", Sh = [zu, Ku, Eh], Ah = $u.toLowerCase(), Ii = "x-amz-content-sha256", Ch = Hu.toLowerCase(), Rh = {
  authorization: !0,
  "cache-control": !0,
  connection: !0,
  expect: !0,
  from: !0,
  "keep-alive": !0,
  "max-forwards": !0,
  pragma: !0,
  referer: !0,
  te: !0,
  trailer: !0,
  "transfer-encoding": !0,
  upgrade: !0,
  "user-agent": !0,
  "x-amzn-trace-id": !0
}, kh = /^proxy-/, Th = /^sec-/, _s = "AWS4-HMAC-SHA256", _h = "AWS4-HMAC-SHA256-PAYLOAD", Oh = "UNSIGNED-PAYLOAD", Ih = 50, qu = "aws4_request", Nh = 60 * 60 * 24 * 7, Ur = {}, Os = [], Is = (e, t, n) => `${e}/${t}/${n}/${qu}`, Ph = async (e, t, n, r, i) => {
  const c = await ta(e, t.secretAccessKey, t.accessKeyId), a = `${n}:${r}:${i}:${rn(c)}:${t.sessionToken}`;
  if (a in Ur)
    return Ur[a];
  for (Os.push(a); Os.length > Ih; )
    delete Ur[Os.shift()];
  let u = `AWS4${t.secretAccessKey}`;
  for (const p of [n, r, i, qu])
    u = await ta(e, u, p);
  return Ur[a] = u;
}, ta = (e, t, n) => {
  const r = new e(t);
  return r.update(nr(n)), r.digest();
}, na = ({ headers: e }, t, n) => {
  const r = {};
  for (const i of Object.keys(e).sort()) {
    if (e[i] == null)
      continue;
    const c = i.toLowerCase();
    (c in Rh || t != null && t.has(c) || kh.test(c) || Th.test(c)) && (!n || n && !n.has(c)) || (r[c] = e[i].trim().replace(/\s+/g, " "));
  }
  return r;
}, Vu = (e) => typeof ArrayBuffer == "function" && e instanceof ArrayBuffer || Object.prototype.toString.call(e) === "[object ArrayBuffer]", Ns = async ({ headers: e, body: t }, n) => {
  for (const r of Object.keys(e))
    if (r.toLowerCase() === Ii)
      return e[r];
  if (t == null)
    return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  if (typeof t == "string" || ArrayBuffer.isView(t) || Vu(t)) {
    const r = new n();
    return r.update(nr(t)), rn(await r.digest());
  }
  return Oh;
};
class Mh {
  format(t) {
    const n = [];
    for (const c of Object.keys(t)) {
      const a = Kn(c);
      n.push(Uint8Array.from([a.byteLength]), a, this.formatHeaderValue(t[c]));
    }
    const r = new Uint8Array(n.reduce((c, a) => c + a.byteLength, 0));
    let i = 0;
    for (const c of n)
      r.set(c, i), i += c.byteLength;
    return r;
  }
  formatHeaderValue(t) {
    switch (t.type) {
      case "boolean":
        return Uint8Array.from([t.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, t.value]);
      case "short":
        const n = new DataView(new ArrayBuffer(3));
        return n.setUint8(0, 3), n.setInt16(1, t.value, !1), new Uint8Array(n.buffer);
      case "integer":
        const r = new DataView(new ArrayBuffer(5));
        return r.setUint8(0, 4), r.setInt32(1, t.value, !1), new Uint8Array(r.buffer);
      case "long":
        const i = new Uint8Array(9);
        return i[0] = 5, i.set(t.value.bytes, 1), i;
      case "binary":
        const c = new DataView(new ArrayBuffer(3 + t.value.byteLength));
        c.setUint8(0, 6), c.setUint16(1, t.value.byteLength, !1);
        const a = new Uint8Array(c.buffer);
        return a.set(t.value, 3), a;
      case "string":
        const u = Kn(t.value), p = new DataView(new ArrayBuffer(3 + u.byteLength));
        p.setUint8(0, 7), p.setUint16(1, u.byteLength, !1);
        const d = new Uint8Array(p.buffer);
        return d.set(u, 3), d;
      case "timestamp":
        const f = new Uint8Array(9);
        return f[0] = 8, f.set(Dh.fromNumber(t.value.valueOf()).bytes, 1), f;
      case "uuid":
        if (!Bh.test(t.value))
          throw new Error(`Invalid UUID received: ${t.value}`);
        const v = new Uint8Array(17);
        return v[0] = 9, v.set(Fu(t.value.replace(/\-/g, "")), 1), v;
    }
  }
}
var ra;
(function(e) {
  e[e.boolTrue = 0] = "boolTrue", e[e.boolFalse = 1] = "boolFalse", e[e.byte = 2] = "byte", e[e.short = 3] = "short", e[e.integer = 4] = "integer", e[e.long = 5] = "long", e[e.byteArray = 6] = "byteArray", e[e.string = 7] = "string", e[e.timestamp = 8] = "timestamp", e[e.uuid = 9] = "uuid";
})(ra || (ra = {}));
const Bh = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
let Dh = class Gu {
  constructor(t) {
    if (this.bytes = t, t.byteLength !== 8)
      throw new Error("Int64 buffers must be exactly 8 bytes");
  }
  static fromNumber(t) {
    if (t > 9223372036854776e3 || t < -9223372036854776e3)
      throw new Error(`${t} is too large (or, if negative, too small) to represent as an Int64`);
    const n = new Uint8Array(8);
    for (let r = 7, i = Math.abs(Math.round(t)); r > -1 && i > 0; r--, i /= 256)
      n[r] = i;
    return t < 0 && sa(n), new Gu(n);
  }
  valueOf() {
    const t = this.bytes.slice(0), n = t[0] & 128;
    return n && sa(t), parseInt(rn(t), 16) * (n ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
};
function sa(e) {
  for (let t = 0; t < 8; t++)
    e[t] ^= 255;
  for (let t = 7; t > -1 && (e[t]++, e[t] === 0); t--)
    ;
}
const Fh = (e, t) => {
  e = e.toLowerCase();
  for (const n of Object.keys(t))
    if (e === n.toLowerCase())
      return !0;
  return !1;
}, jh = (e, t = {}) => {
  var i, c;
  const { headers: n, query: r = {} } = Nt.clone(e);
  for (const a of Object.keys(n)) {
    const u = a.toLowerCase();
    (u.slice(0, 6) === "x-amz-" && !((i = t.unhoistableHeaders) != null && i.has(u)) || (c = t.hoistableHeaders) != null && c.has(u)) && (r[a] = n[a], delete n[a]);
  }
  return {
    ...e,
    headers: n,
    query: r
  };
}, ia = (e) => {
  e = Nt.clone(e);
  for (const t of Object.keys(e.headers))
    Sh.indexOf(t.toLowerCase()) > -1 && delete e.headers[t];
  return e;
}, Lh = ({ query: e = {} }) => {
  const t = [], n = {};
  for (const r of Object.keys(e)) {
    if (r.toLowerCase() === Ah)
      continue;
    const i = Hn(r);
    t.push(i);
    const c = e[r];
    typeof c == "string" ? n[i] = `${i}=${Hn(c)}` : Array.isArray(c) && (n[i] = c.slice(0).reduce((a, u) => a.concat([`${i}=${Hn(u)}`]), []).sort().join("&"));
  }
  return t.sort().map((r) => n[r]).filter((r) => r).join("&");
}, Uh = (e) => $h(e).toISOString().replace(/\.\d{3}Z$/, "Z"), $h = (e) => typeof e == "number" ? new Date(e * 1e3) : typeof e == "string" ? Number(e) ? new Date(Number(e) * 1e3) : new Date(e) : e;
class Hh {
  constructor({ applyChecksum: t, credentials: n, region: r, service: i, sha256: c, uriEscapePath: a = !0 }) {
    this.service = i, this.sha256 = c, this.uriEscapePath = a, this.applyChecksum = typeof t == "boolean" ? t : !0, this.regionProvider = bn(r), this.credentialProvider = bn(n);
  }
  createCanonicalRequest(t, n, r) {
    const i = Object.keys(n).sort();
    return `${t.method}
${this.getCanonicalPath(t)}
${Lh(t)}
${i.map((c) => `${c}:${n[c]}`).join(`
`)}

${i.join(";")}
${r}`;
  }
  async createStringToSign(t, n, r, i) {
    const c = new this.sha256();
    c.update(nr(r));
    const a = await c.digest();
    return `${i}
${t}
${n}
${rn(a)}`;
  }
  getCanonicalPath({ path: t }) {
    if (this.uriEscapePath) {
      const n = [];
      for (const c of t.split("/"))
        (c == null ? void 0 : c.length) !== 0 && c !== "." && (c === ".." ? n.pop() : n.push(c));
      const r = `${t != null && t.startsWith("/") ? "/" : ""}${n.join("/")}${n.length > 0 && (t != null && t.endsWith("/")) ? "/" : ""}`;
      return Hn(r).replace(/%2F/g, "/");
    }
    return t;
  }
  validateResolvedCredentials(t) {
    if (typeof t != "object" || typeof t.accessKeyId != "string" || typeof t.secretAccessKey != "string")
      throw new Error("Resolved credential object is not valid");
  }
  formatDate(t) {
    const n = Uh(t).replace(/[\-:]/g, "");
    return {
      longDate: n,
      shortDate: n.slice(0, 8)
    };
  }
  getCanonicalHeaderList(t) {
    return Object.keys(t).sort().join(";");
  }
}
class Ni extends Hh {
  constructor({ applyChecksum: t, credentials: n, region: r, service: i, sha256: c, uriEscapePath: a = !0 }) {
    super({
      applyChecksum: t,
      credentials: n,
      region: r,
      service: i,
      sha256: c,
      uriEscapePath: a
    }), this.headerFormatter = new Mh();
  }
  async presign(t, n = {}) {
    const { signingDate: r = /* @__PURE__ */ new Date(), expiresIn: i = 3600, unsignableHeaders: c, unhoistableHeaders: a, signableHeaders: u, hoistableHeaders: p, signingRegion: d, signingService: f } = n, v = await this.credentialProvider();
    this.validateResolvedCredentials(v);
    const y = d ?? await this.regionProvider(), { longDate: A, shortDate: U } = this.formatDate(r);
    if (i > Nh)
      return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
    const z = Is(U, y, f ?? this.service), K = jh(ia(t), { unhoistableHeaders: a, hoistableHeaders: p });
    v.sessionToken && (K.query[Hu] = v.sessionToken), K.query[bh] = _s, K.query[vh] = `${v.accessKeyId}/${z}`, K.query[Uu] = A, K.query[xh] = i.toString(10);
    const R = na(K, c, u);
    return K.query[wh] = this.getCanonicalHeaderList(R), K.query[$u] = await this.getSignature(A, z, this.getSigningKey(v, y, U, f), this.createCanonicalRequest(K, R, await Ns(t, this.sha256))), K;
  }
  async sign(t, n) {
    return typeof t == "string" ? this.signString(t, n) : t.headers && t.payload ? this.signEvent(t, n) : t.message ? this.signMessage(t, n) : this.signRequest(t, n);
  }
  async signEvent({ headers: t, payload: n }, { signingDate: r = /* @__PURE__ */ new Date(), priorSignature: i, signingRegion: c, signingService: a }) {
    const u = c ?? await this.regionProvider(), { shortDate: p, longDate: d } = this.formatDate(r), f = Is(p, u, a ?? this.service), v = await Ns({ headers: {}, body: n }, this.sha256), y = new this.sha256();
    y.update(t);
    const A = rn(await y.digest()), U = [
      _h,
      d,
      f,
      i,
      A,
      v
    ].join(`
`);
    return this.signString(U, { signingDate: r, signingRegion: u, signingService: a });
  }
  async signMessage(t, { signingDate: n = /* @__PURE__ */ new Date(), signingRegion: r, signingService: i }) {
    return this.signEvent({
      headers: this.headerFormatter.format(t.message.headers),
      payload: t.message.body
    }, {
      signingDate: n,
      signingRegion: r,
      signingService: i,
      priorSignature: t.priorSignature
    }).then((a) => ({ message: t.message, signature: a }));
  }
  async signString(t, { signingDate: n = /* @__PURE__ */ new Date(), signingRegion: r, signingService: i } = {}) {
    const c = await this.credentialProvider();
    this.validateResolvedCredentials(c);
    const a = r ?? await this.regionProvider(), { shortDate: u } = this.formatDate(n), p = new this.sha256(await this.getSigningKey(c, a, u, i));
    return p.update(nr(t)), rn(await p.digest());
  }
  async signRequest(t, { signingDate: n = /* @__PURE__ */ new Date(), signableHeaders: r, unsignableHeaders: i, signingRegion: c, signingService: a } = {}) {
    const u = await this.credentialProvider();
    this.validateResolvedCredentials(u);
    const p = c ?? await this.regionProvider(), d = ia(t), { longDate: f, shortDate: v } = this.formatDate(n), y = Is(v, p, a ?? this.service);
    d.headers[Ku] = f, u.sessionToken && (d.headers[Ch] = u.sessionToken);
    const A = await Ns(d, this.sha256);
    !Fh(Ii, d.headers) && this.applyChecksum && (d.headers[Ii] = A);
    const U = na(d, i, r), z = await this.getSignature(f, y, this.getSigningKey(u, p, v, a), this.createCanonicalRequest(d, U, A));
    return d.headers[zu] = `${_s} Credential=${u.accessKeyId}/${y}, SignedHeaders=${this.getCanonicalHeaderList(U)}, Signature=${z}`, d;
  }
  async getSignature(t, n, r, i) {
    const c = await this.createStringToSign(t, n, i, _s), a = new this.sha256(await r);
    return a.update(nr(c)), rn(await a.digest());
  }
  getSigningKey(t, n, r, i) {
    return Ph(this.sha256, t, r, n, i || this.service);
  }
}
const zh = (e) => {
  let t = e.credentials, n = !!e.credentials, r;
  Object.defineProperty(e, "credentials", {
    set(d) {
      d && d !== t && d !== r && (n = !0), t = d;
      const f = Kh(e, {
        credentials: t,
        credentialDefaultProvider: e.credentialDefaultProvider
      }), v = qh(e, f);
      n && !v.attributed ? (r = async (y) => v(y).then((A) => Cf(A, "CREDENTIALS_CODE", "e")), r.memoized = v.memoized, r.configBound = v.configBound, r.attributed = !0) : r = v;
    },
    get() {
      return r;
    },
    enumerable: !0,
    configurable: !0
  }), e.credentials = t;
  const { signingEscapePath: i = !0, systemClockOffset: c = e.systemClockOffset || 0, sha256: a } = e;
  let u;
  return e.signer ? u = Jn(e.signer) : e.regionInfoProvider ? u = () => Jn(e.region)().then(async (d) => [
    await e.regionInfoProvider(d, {
      useFipsEndpoint: await e.useFipsEndpoint(),
      useDualstackEndpoint: await e.useDualstackEndpoint()
    }) || {},
    d
  ]).then(([d, f]) => {
    const { signingRegion: v, signingService: y } = d;
    e.signingRegion = e.signingRegion || v || f, e.signingName = e.signingName || y || e.serviceId;
    const A = {
      ...e,
      credentials: e.credentials,
      region: e.signingRegion,
      service: e.signingName,
      sha256: a,
      uriEscapePath: i
    }, U = e.signerConstructor || Ni;
    return new U(A);
  }) : u = async (d) => {
    d = Object.assign({}, {
      name: "sigv4",
      signingName: e.signingName || e.defaultSigningName,
      signingRegion: await Jn(e.region)(),
      properties: {}
    }, d);
    const f = d.signingRegion, v = d.signingName;
    e.signingRegion = e.signingRegion || f, e.signingName = e.signingName || v || e.serviceId;
    const y = {
      ...e,
      credentials: e.credentials,
      region: e.signingRegion,
      service: e.signingName,
      sha256: a,
      uriEscapePath: i
    }, A = e.signerConstructor || Ni;
    return new A(y);
  }, Object.assign(e, {
    systemClockOffset: c,
    signingEscapePath: i,
    signer: u
  });
};
function Kh(e, { credentials: t, credentialDefaultProvider: n }) {
  let r;
  return t ? t != null && t.memoized ? r = t : r = gh(t, ph, Lu) : n ? r = Jn(n(Object.assign({}, e, {
    parentClientConfig: e
  }))) : r = async () => {
    throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
  }, r.memoized = !0, r;
}
function qh(e, t) {
  if (t.configBound)
    return t;
  const n = async (r) => t({ ...r, callerClientConfig: e });
  return n.memoized = t.memoized, n.configBound = !0, n;
}
const Fn = (e, t) => {
  const n = [];
  if (e && n.push(e), t)
    for (const r of t)
      n.push(r);
  return n;
}, Rn = (e, t) => `${e || "anonymous"}${t && t.length > 0 ? ` (a.k.a. ${t.join(",")})` : ""}`, ns = () => {
  let e = [], t = [], n = !1;
  const r = /* @__PURE__ */ new Set(), i = (v) => v.sort((y, A) => oa[A.step] - oa[y.step] || aa[A.priority || "normal"] - aa[y.priority || "normal"]), c = (v) => {
    let y = !1;
    const A = (U) => {
      const z = Fn(U.name, U.aliases);
      if (z.includes(v)) {
        y = !0;
        for (const K of z)
          r.delete(K);
        return !1;
      }
      return !0;
    };
    return e = e.filter(A), t = t.filter(A), y;
  }, a = (v) => {
    let y = !1;
    const A = (U) => {
      if (U.middleware === v) {
        y = !0;
        for (const z of Fn(U.name, U.aliases))
          r.delete(z);
        return !1;
      }
      return !0;
    };
    return e = e.filter(A), t = t.filter(A), y;
  }, u = (v) => {
    var y;
    return e.forEach((A) => {
      v.add(A.middleware, { ...A });
    }), t.forEach((A) => {
      v.addRelativeTo(A.middleware, { ...A });
    }), (y = v.identifyOnResolve) == null || y.call(v, f.identifyOnResolve()), v;
  }, p = (v) => {
    const y = [];
    return v.before.forEach((A) => {
      A.before.length === 0 && A.after.length === 0 ? y.push(A) : y.push(...p(A));
    }), y.push(v), v.after.reverse().forEach((A) => {
      A.before.length === 0 && A.after.length === 0 ? y.push(A) : y.push(...p(A));
    }), y;
  }, d = (v = !1) => {
    const y = [], A = [], U = {};
    return e.forEach((K) => {
      const R = {
        ...K,
        before: [],
        after: []
      };
      for (const B of Fn(R.name, R.aliases))
        U[B] = R;
      y.push(R);
    }), t.forEach((K) => {
      const R = {
        ...K,
        before: [],
        after: []
      };
      for (const B of Fn(R.name, R.aliases))
        U[B] = R;
      A.push(R);
    }), A.forEach((K) => {
      if (K.toMiddleware) {
        const R = U[K.toMiddleware];
        if (R === void 0) {
          if (v)
            return;
          throw new Error(`${K.toMiddleware} is not found when adding ${Rn(K.name, K.aliases)} middleware ${K.relation} ${K.toMiddleware}`);
        }
        K.relation === "after" && R.after.push(K), K.relation === "before" && R.before.push(K);
      }
    }), i(y).map(p).reduce((K, R) => (K.push(...R), K), []);
  }, f = {
    add: (v, y = {}) => {
      const { name: A, override: U, aliases: z } = y, K = {
        step: "initialize",
        priority: "normal",
        middleware: v,
        ...y
      }, R = Fn(A, z);
      if (R.length > 0) {
        if (R.some((B) => r.has(B))) {
          if (!U)
            throw new Error(`Duplicate middleware name '${Rn(A, z)}'`);
          for (const B of R) {
            const q = e.findIndex((j) => {
              var k;
              return j.name === B || ((k = j.aliases) == null ? void 0 : k.some((X) => X === B));
            });
            if (q === -1)
              continue;
            const O = e[q];
            if (O.step !== K.step || K.priority !== O.priority)
              throw new Error(`"${Rn(O.name, O.aliases)}" middleware with ${O.priority} priority in ${O.step} step cannot be overridden by "${Rn(A, z)}" middleware with ${K.priority} priority in ${K.step} step.`);
            e.splice(q, 1);
          }
        }
        for (const B of R)
          r.add(B);
      }
      e.push(K);
    },
    addRelativeTo: (v, y) => {
      const { name: A, override: U, aliases: z } = y, K = {
        middleware: v,
        ...y
      }, R = Fn(A, z);
      if (R.length > 0) {
        if (R.some((B) => r.has(B))) {
          if (!U)
            throw new Error(`Duplicate middleware name '${Rn(A, z)}'`);
          for (const B of R) {
            const q = t.findIndex((j) => {
              var k;
              return j.name === B || ((k = j.aliases) == null ? void 0 : k.some((X) => X === B));
            });
            if (q === -1)
              continue;
            const O = t[q];
            if (O.toMiddleware !== K.toMiddleware || O.relation !== K.relation)
              throw new Error(`"${Rn(O.name, O.aliases)}" middleware ${O.relation} "${O.toMiddleware}" middleware cannot be overridden by "${Rn(A, z)}" middleware ${K.relation} "${K.toMiddleware}" middleware.`);
            t.splice(q, 1);
          }
        }
        for (const B of R)
          r.add(B);
      }
      t.push(K);
    },
    clone: () => u(ns()),
    use: (v) => {
      v.applyToStack(f);
    },
    remove: (v) => typeof v == "string" ? c(v) : a(v),
    removeByTag: (v) => {
      let y = !1;
      const A = (U) => {
        const { tags: z, name: K, aliases: R } = U;
        if (z && z.includes(v)) {
          const B = Fn(K, R);
          for (const q of B)
            r.delete(q);
          return y = !0, !1;
        }
        return !0;
      };
      return e = e.filter(A), t = t.filter(A), y;
    },
    concat: (v) => {
      var A;
      const y = u(ns());
      return y.use(v), y.identifyOnResolve(n || y.identifyOnResolve() || (((A = v.identifyOnResolve) == null ? void 0 : A.call(v)) ?? !1)), y;
    },
    applyToStack: u,
    identify: () => d(!0).map((v) => {
      const y = v.step ?? v.relation + " " + v.toMiddleware;
      return Rn(v.name, v.aliases) + " - " + y;
    }),
    identifyOnResolve(v) {
      return typeof v == "boolean" && (n = v), n;
    },
    resolve: (v, y) => {
      for (const A of d().map((U) => U.middleware).reverse())
        v = A(v, y);
      return n && console.log(f.identify()), v;
    }
  };
  return f;
}, oa = {
  initialize: 5,
  serialize: 4,
  build: 3,
  finalizeRequest: 2,
  deserialize: 1
}, aa = {
  high: 3,
  normal: 2,
  low: 1
};
class Vh {
  constructor(t) {
    this.config = t, this.middlewareStack = ns();
  }
  send(t, n, r) {
    const i = typeof n != "function" ? n : void 0, c = typeof n == "function" ? n : r, a = i === void 0 && this.config.cacheMiddleware === !0;
    let u;
    if (a) {
      this.handlers || (this.handlers = /* @__PURE__ */ new WeakMap());
      const p = this.handlers;
      p.has(t.constructor) ? u = p.get(t.constructor) : (u = t.resolveMiddleware(this.middlewareStack, this.config, i), p.set(t.constructor, u));
    } else
      delete this.handlers, u = t.resolveMiddleware(this.middlewareStack, this.config, i);
    if (c)
      u(t).then((p) => c(null, p.output), (p) => c(p)).catch(() => {
      });
    else
      return u(t).then((p) => p.output);
  }
  destroy() {
    var t, n, r;
    (r = (n = (t = this.config) == null ? void 0 : t.requestHandler) == null ? void 0 : n.destroy) == null || r.call(n), delete this.handlers;
  }
}
class Zi {
  constructor() {
    this.middlewareStack = ns();
  }
  static classBuilder() {
    return new Gh();
  }
  resolveMiddlewareWithContext(t, n, r, { middlewareFn: i, clientName: c, commandName: a, inputFilterSensitiveLog: u, outputFilterSensitiveLog: p, smithyContext: d, additionalContext: f, CommandCtor: v }) {
    for (const K of i.bind(this)(v, t, n, r))
      this.middlewareStack.use(K);
    const y = t.concat(this.middlewareStack), { logger: A } = n, U = {
      logger: A,
      clientName: c,
      commandName: a,
      inputFilterSensitiveLog: u,
      outputFilterSensitiveLog: p,
      [ki]: {
        commandInstance: this,
        ...d
      },
      ...f
    }, { requestHandler: z } = n;
    return y.resolve((K) => z.handle(K.request, r || {}), U);
  }
}
class Gh {
  constructor() {
    this._init = () => {
    }, this._ep = {}, this._middlewareFn = () => [], this._commandName = "", this._clientName = "", this._additionalContext = {}, this._smithyContext = {}, this._inputFilterSensitiveLog = (t) => t, this._outputFilterSensitiveLog = (t) => t, this._serializer = null, this._deserializer = null;
  }
  init(t) {
    this._init = t;
  }
  ep(t) {
    return this._ep = t, this;
  }
  m(t) {
    return this._middlewareFn = t, this;
  }
  s(t, n, r = {}) {
    return this._smithyContext = {
      service: t,
      operation: n,
      ...r
    }, this;
  }
  c(t = {}) {
    return this._additionalContext = t, this;
  }
  n(t, n) {
    return this._clientName = t, this._commandName = n, this;
  }
  f(t = (r) => r, n = (r) => r) {
    return this._inputFilterSensitiveLog = t, this._outputFilterSensitiveLog = n, this;
  }
  ser(t) {
    return this._serializer = t, this;
  }
  de(t) {
    return this._deserializer = t, this;
  }
  build() {
    const t = this;
    let n;
    return n = class extends Zi {
      static getEndpointParameterInstructions() {
        return t._ep;
      }
      constructor(...[r]) {
        super(), this.serialize = t._serializer, this.deserialize = t._deserializer, this.input = r ?? {}, t._init(this);
      }
      resolveMiddleware(r, i, c) {
        return this.resolveMiddlewareWithContext(r, i, c, {
          CommandCtor: n,
          middlewareFn: t._middlewareFn,
          clientName: t._clientName,
          commandName: t._commandName,
          inputFilterSensitiveLog: t._inputFilterSensitiveLog,
          outputFilterSensitiveLog: t._outputFilterSensitiveLog,
          smithyContext: t._smithyContext,
          additionalContext: t._additionalContext
        });
      }
    };
  }
}
const Mn = "***SensitiveInformation***";
class Zn extends Error {
  constructor(t) {
    super(t.message), Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype), this.name = t.name, this.$fault = t.$fault, this.$metadata = t.$metadata;
  }
  static isInstance(t) {
    if (!t)
      return !1;
    const n = t;
    return Zn.prototype.isPrototypeOf(n) || !!n.$fault && !!n.$metadata && (n.$fault === "client" || n.$fault === "server");
  }
  static [Symbol.hasInstance](t) {
    if (!t)
      return !1;
    const n = t;
    return this === Zn ? Zn.isInstance(t) : Zn.isInstance(t) ? n.name && this.name ? this.prototype.isPrototypeOf(t) || n.name === this.name : this.prototype.isPrototypeOf(t) : !1;
  }
}
const an = (e, t = {}) => {
  Object.entries(t).filter(([, r]) => r !== void 0).forEach(([r, i]) => {
    (e[r] == null || e[r] === "") && (e[r] = i);
  });
  const n = e.message || e.Message || "UnknownError";
  return e.message = n, delete e.Message, e;
}, Wh = ({ output: e, parsedBody: t, exceptionCtor: n, errorCode: r }) => {
  const i = Yh(e), c = i.httpStatusCode ? i.httpStatusCode + "" : void 0, a = new n({
    name: (t == null ? void 0 : t.code) || (t == null ? void 0 : t.Code) || r || c || "UnknownError",
    $fault: "client",
    $metadata: i
  });
  throw an(a, t);
}, Xh = (e) => ({ output: t, parsedBody: n, errorCode: r }) => {
  Wh({ output: t, parsedBody: n, exceptionCtor: e, errorCode: r });
}, Yh = (e) => ({
  httpStatusCode: e.statusCode,
  requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
  extendedRequestId: e.headers["x-amz-id-2"],
  cfId: e.headers["x-amz-cf-id"]
}), Zh = (e) => {
  switch (e) {
    case "standard":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "in-region":
      return {
        retryMode: "standard",
        connectionTimeout: 1100
      };
    case "cross-region":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "mobile":
      return {
        retryMode: "standard",
        connectionTimeout: 3e4
      };
    default:
      return {};
  }
}, Jh = (e) => {
  const t = [];
  for (const n in ts) {
    const r = ts[n];
    e[r] !== void 0 && t.push({
      algorithmId: () => r,
      checksumConstructor: () => e[r]
    });
  }
  return {
    addChecksumAlgorithm(n) {
      t.push(n);
    },
    checksumAlgorithms() {
      return t;
    }
  };
}, Qh = (e) => {
  const t = {};
  return e.checksumAlgorithms().forEach((n) => {
    t[n.algorithmId()] = n.checksumConstructor();
  }), t;
}, ep = (e) => ({
  setRetryStrategy(t) {
    e.retryStrategy = t;
  },
  retryStrategy() {
    return e.retryStrategy;
  }
}), tp = (e) => {
  const t = {};
  return t.retryStrategy = e.retryStrategy(), t;
}, np = (e) => Object.assign(Jh(e), ep(e)), rp = (e) => Object.assign(Qh(e), tp(e)), Wu = (e) => {
  const t = "#text";
  for (const n in e)
    e.hasOwnProperty(n) && e[n][t] !== void 0 ? e[n] = e[n][t] : typeof e[n] == "object" && e[n] !== null && (e[n] = Wu(e[n]));
  return e;
}, wr = (e) => e != null;
class Xu {
  trace() {
  }
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
}
function _t(e, t, n) {
  let r, i, c;
  if (typeof t > "u" && typeof n > "u")
    r = {}, c = e;
  else {
    if (r = e, typeof t == "function")
      return i = t, c = n, sp(r, i, c);
    c = t;
  }
  for (const a of Object.keys(c)) {
    if (!Array.isArray(c[a])) {
      r[a] = c[a];
      continue;
    }
    ip(r, null, c, a);
  }
  return r;
}
const sp = (e, t, n) => _t(e, Object.entries(n).reduce((r, [i, c]) => (Array.isArray(c) ? r[i] = c : typeof c == "function" ? r[i] = [t, c()] : r[i] = [t, c], r), {})), ip = (e, t, n, r) => {
  let [i, c] = n[r];
  if (typeof c == "function") {
    let a;
    const u = i === void 0 && (a = c()) != null, p = typeof i == "function" && !!i(void 0) || typeof i != "function" && !!i;
    u ? e[r] = a : p && (e[r] = c());
  } else {
    const a = i === void 0 && c != null, u = typeof i == "function" && !!i(c) || typeof i != "function" && !!i;
    (a || u) && (e[r] = c);
  }
}, Pi = (e) => {
  switch (e) {
    case "true":
      return !0;
    case "false":
      return !1;
    default:
      throw new Error(`Unable to parse boolean value "${e}"`);
  }
}, op = (e) => {
  if (e != null) {
    if (typeof e == "string") {
      const t = parseFloat(e);
      if (!Number.isNaN(t))
        return String(t) !== String(e) && Zu.warn(Yu(`Expected number but observed string: ${e}`)), t;
    }
    if (typeof e == "number")
      return e;
    throw new TypeError(`Expected number, got ${typeof e}: ${e}`);
  }
}, ap = Math.ceil(2 ** 127 * (2 - 2 ** -23)), ca = (e) => {
  const t = op(e);
  if (t !== void 0 && !Number.isNaN(t) && t !== 1 / 0 && t !== -1 / 0 && Math.abs(t) > ap)
    throw new TypeError(`Expected 32-bit float, got ${e}`);
  return t;
}, Mi = (e) => {
  if (e != null) {
    if (Number.isInteger(e) && !Number.isNaN(e))
      return e;
    throw new TypeError(`Expected integer, got ${typeof e}: ${e}`);
  }
}, ua = (e) => Ji(e, 32), la = (e) => Ji(e, 16), da = (e) => Ji(e, 8), Ji = (e, t) => {
  const n = Mi(e);
  if (n !== void 0 && cp(n, t) !== n)
    throw new TypeError(`Expected ${t}-bit integer, got ${e}`);
  return n;
}, cp = (e, t) => {
  switch (t) {
    case 32:
      return Int32Array.of(e)[0];
    case 16:
      return Int16Array.of(e)[0];
    case 8:
      return Int8Array.of(e)[0];
  }
}, xr = (e, t) => {
  if (e == null)
    throw t ? new TypeError(`Expected a non-null value for ${t}`) : new TypeError("Expected a non-null value");
  return e;
}, up = (e) => {
  if (e == null)
    return;
  if (typeof e == "object" && !Array.isArray(e))
    return e;
  const t = Array.isArray(e) ? "array" : typeof e;
  throw new TypeError(`Expected object, got ${t}: ${e}`);
}, Er = (e) => {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (["boolean", "number", "bigint"].includes(typeof e))
      return Zu.warn(Yu(`Expected string, got ${typeof e}: ${e}`)), String(e);
    throw new TypeError(`Expected string, got ${typeof e}: ${e}`);
  }
}, lp = (e) => ca(typeof e == "string" ? Pr(e) : e), dp = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g, Pr = (e) => {
  const t = e.match(dp);
  if (t === null || t[0].length !== e.length)
    throw new TypeError("Expected real number, got implicit NaN");
  return parseFloat(e);
}, fp = (e) => Mi(typeof e == "string" ? Pr(e) : e), Ps = (e) => ua(typeof e == "string" ? Pr(e) : e), rs = (e) => la(typeof e == "string" ? Pr(e) : e), hp = (e) => da(typeof e == "string" ? Pr(e) : e), Yu = (e) => String(new TypeError(e).stack || e).split(`
`).slice(0, 5).filter((t) => !t.includes("stackTraceWarning")).join(`
`), Zu = {
  warn: console.warn
}, pp = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], Qi = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function Ms(e) {
  const t = e.getUTCFullYear(), n = e.getUTCMonth(), r = e.getUTCDay(), i = e.getUTCDate(), c = e.getUTCHours(), a = e.getUTCMinutes(), u = e.getUTCSeconds(), p = i < 10 ? `0${i}` : `${i}`, d = c < 10 ? `0${c}` : `${c}`, f = a < 10 ? `0${a}` : `${a}`, v = u < 10 ? `0${u}` : `${u}`;
  return `${pp[r]}, ${p} ${Qi[n]} ${t} ${d}:${f}:${v} GMT`;
}
const gp = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/), Ju = (e) => {
  if (e == null)
    return;
  if (typeof e != "string")
    throw new TypeError("RFC-3339 date-times must be expressed as strings");
  const t = gp.exec(e);
  if (!t)
    throw new TypeError("Invalid RFC-3339 date-time value");
  const [n, r, i, c, a, u, p, d, f] = t, v = rs(kr(r)), y = In(i, "month", 1, 12), A = In(c, "day", 1, 31), U = Xr(v, y, A, { hours: a, minutes: u, seconds: p, fractionalMilliseconds: d });
  return f.toUpperCase() != "Z" && U.setTime(U.getTime() - Rp(f)), U;
}, mp = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/), yp = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/), bp = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/), Bi = (e) => {
  if (e == null)
    return;
  if (typeof e != "string")
    throw new TypeError("RFC-7231 date-times must be expressed as strings");
  let t = mp.exec(e);
  if (t) {
    const [n, r, i, c, a, u, p, d] = t;
    return Xr(rs(kr(c)), Bs(i), In(r, "day", 1, 31), { hours: a, minutes: u, seconds: p, fractionalMilliseconds: d });
  }
  if (t = yp.exec(e), t) {
    const [n, r, i, c, a, u, p, d] = t;
    return xp(Xr(vp(c), Bs(i), In(r, "day", 1, 31), {
      hours: a,
      minutes: u,
      seconds: p,
      fractionalMilliseconds: d
    }));
  }
  if (t = bp.exec(e), t) {
    const [n, r, i, c, a, u, p, d] = t;
    return Xr(rs(kr(d)), Bs(r), In(i.trimLeft(), "day", 1, 31), { hours: c, minutes: a, seconds: u, fractionalMilliseconds: p });
  }
  throw new TypeError("Invalid RFC-7231 date-time value");
}, Xr = (e, t, n, r) => {
  const i = t - 1;
  return Sp(e, i, n), new Date(Date.UTC(e, i, n, In(r.hours, "hour", 0, 23), In(r.minutes, "minute", 0, 59), In(r.seconds, "seconds", 0, 60), Cp(r.fractionalMilliseconds)));
}, vp = (e) => {
  const t = (/* @__PURE__ */ new Date()).getUTCFullYear(), n = Math.floor(t / 100) * 100 + rs(kr(e));
  return n < t ? n + 100 : n;
}, wp = 50 * 365 * 24 * 60 * 60 * 1e3, xp = (e) => e.getTime() - (/* @__PURE__ */ new Date()).getTime() > wp ? new Date(Date.UTC(e.getUTCFullYear() - 100, e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds())) : e, Bs = (e) => {
  const t = Qi.indexOf(e);
  if (t < 0)
    throw new TypeError(`Invalid month: ${e}`);
  return t + 1;
}, Ep = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Sp = (e, t, n) => {
  let r = Ep[t];
  if (t === 1 && Ap(e) && (r = 29), n > r)
    throw new TypeError(`Invalid day for ${Qi[t]} in ${e}: ${n}`);
}, Ap = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), In = (e, t, n, r) => {
  const i = hp(kr(e));
  if (i < n || i > r)
    throw new TypeError(`${t} must be between ${n} and ${r}, inclusive`);
  return i;
}, Cp = (e) => e == null ? 0 : lp("0." + e) * 1e3, Rp = (e) => {
  const t = e[0];
  let n = 1;
  if (t == "+")
    n = 1;
  else if (t == "-")
    n = -1;
  else
    throw new TypeError(`Offset direction, ${t}, must be "+" or "-"`);
  const r = Number(e.substring(1, 3)), i = Number(e.substring(4, 6));
  return n * (r * 60 + i) * 60 * 1e3;
}, kr = (e) => {
  let t = 0;
  for (; t < e.length - 1 && e.charAt(t) === "0"; )
    t++;
  return t === 0 ? e : e.slice(t);
}, kp = (e, t) => ah(e, t).then((n) => t.utf8Encoder(n));
var Ds = {}, Fs = {}, fa;
function eo() {
  return fa || (fa = 1, function(e) {
    const t = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", n = t + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", r = "[" + t + "][" + n + "]*", i = new RegExp("^" + r + "$"), c = function(u, p) {
      const d = [];
      let f = p.exec(u);
      for (; f; ) {
        const v = [];
        v.startIndex = p.lastIndex - f[0].length;
        const y = f.length;
        for (let A = 0; A < y; A++)
          v.push(f[A]);
        d.push(v), f = p.exec(u);
      }
      return d;
    }, a = function(u) {
      const p = i.exec(u);
      return !(p === null || typeof p > "u");
    };
    e.isExist = function(u) {
      return typeof u < "u";
    }, e.isEmptyObject = function(u) {
      return Object.keys(u).length === 0;
    }, e.merge = function(u, p, d) {
      if (p) {
        const f = Object.keys(p), v = f.length;
        for (let y = 0; y < v; y++)
          d === "strict" ? u[f[y]] = [p[f[y]]] : u[f[y]] = p[f[y]];
      }
    }, e.getValue = function(u) {
      return e.isExist(u) ? u : "";
    }, e.isName = a, e.getAllMatches = c, e.nameRegexp = r;
  }(Fs)), Fs;
}
var ha;
function Qu() {
  if (ha) return Ds;
  ha = 1;
  const e = eo(), t = {
    allowBooleanAttributes: !1,
    //A tag can have attributes without any value
    unpairedTags: []
  };
  Ds.validate = function(R, B) {
    B = Object.assign({}, t, B);
    const q = [];
    let O = !1, j = !1;
    R[0] === "\uFEFF" && (R = R.substr(1));
    for (let k = 0; k < R.length; k++)
      if (R[k] === "<" && R[k + 1] === "?") {
        if (k += 2, k = r(R, k), k.err) return k;
      } else if (R[k] === "<") {
        let X = k;
        if (k++, R[k] === "!") {
          k = i(R, k);
          continue;
        } else {
          let ie = !1;
          R[k] === "/" && (ie = !0, k++);
          let te = "";
          for (; k < R.length && R[k] !== ">" && R[k] !== " " && R[k] !== "	" && R[k] !== `
` && R[k] !== "\r"; k++)
            te += R[k];
          if (te = te.trim(), te[te.length - 1] === "/" && (te = te.substring(0, te.length - 1), k--), !U(te)) {
            let Q;
            return te.trim().length === 0 ? Q = "Invalid space after '<'." : Q = "Tag '" + te + "' is an invalid name.", y("InvalidTag", Q, z(R, k));
          }
          const xe = u(R, k);
          if (xe === !1)
            return y("InvalidAttr", "Attributes for '" + te + "' have open quote.", z(R, k));
          let fe = xe.value;
          if (k = xe.index, fe[fe.length - 1] === "/") {
            const Q = k - fe.length;
            fe = fe.substring(0, fe.length - 1);
            const Te = d(fe, B);
            if (Te === !0)
              O = !0;
            else
              return y(Te.err.code, Te.err.msg, z(R, Q + Te.err.line));
          } else if (ie)
            if (xe.tagClosed) {
              if (fe.trim().length > 0)
                return y("InvalidTag", "Closing tag '" + te + "' can't have attributes or invalid starting.", z(R, X));
              if (q.length === 0)
                return y("InvalidTag", "Closing tag '" + te + "' has not been opened.", z(R, X));
              {
                const Q = q.pop();
                if (te !== Q.tagName) {
                  let Te = z(R, Q.tagStartPos);
                  return y(
                    "InvalidTag",
                    "Expected closing tag '" + Q.tagName + "' (opened in line " + Te.line + ", col " + Te.col + ") instead of closing tag '" + te + "'.",
                    z(R, X)
                  );
                }
                q.length == 0 && (j = !0);
              }
            } else return y("InvalidTag", "Closing tag '" + te + "' doesn't have proper closing.", z(R, k));
          else {
            const Q = d(fe, B);
            if (Q !== !0)
              return y(Q.err.code, Q.err.msg, z(R, k - fe.length + Q.err.line));
            if (j === !0)
              return y("InvalidXml", "Multiple possible root nodes found.", z(R, k));
            B.unpairedTags.indexOf(te) !== -1 || q.push({ tagName: te, tagStartPos: X }), O = !0;
          }
          for (k++; k < R.length; k++)
            if (R[k] === "<")
              if (R[k + 1] === "!") {
                k++, k = i(R, k);
                continue;
              } else if (R[k + 1] === "?") {
                if (k = r(R, ++k), k.err) return k;
              } else
                break;
            else if (R[k] === "&") {
              const Q = v(R, k);
              if (Q == -1)
                return y("InvalidChar", "char '&' is not expected.", z(R, k));
              k = Q;
            } else if (j === !0 && !n(R[k]))
              return y("InvalidXml", "Extra text at the end", z(R, k));
          R[k] === "<" && k--;
        }
      } else {
        if (n(R[k]))
          continue;
        return y("InvalidChar", "char '" + R[k] + "' is not expected.", z(R, k));
      }
    if (O) {
      if (q.length == 1)
        return y("InvalidTag", "Unclosed tag '" + q[0].tagName + "'.", z(R, q[0].tagStartPos));
      if (q.length > 0)
        return y("InvalidXml", "Invalid '" + JSON.stringify(q.map((k) => k.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
    } else return y("InvalidXml", "Start tag expected.", 1);
    return !0;
  };
  function n(R) {
    return R === " " || R === "	" || R === `
` || R === "\r";
  }
  function r(R, B) {
    const q = B;
    for (; B < R.length; B++)
      if (R[B] == "?" || R[B] == " ") {
        const O = R.substr(q, B - q);
        if (B > 5 && O === "xml")
          return y("InvalidXml", "XML declaration allowed only at the start of the document.", z(R, B));
        if (R[B] == "?" && R[B + 1] == ">") {
          B++;
          break;
        } else
          continue;
      }
    return B;
  }
  function i(R, B) {
    if (R.length > B + 5 && R[B + 1] === "-" && R[B + 2] === "-") {
      for (B += 3; B < R.length; B++)
        if (R[B] === "-" && R[B + 1] === "-" && R[B + 2] === ">") {
          B += 2;
          break;
        }
    } else if (R.length > B + 8 && R[B + 1] === "D" && R[B + 2] === "O" && R[B + 3] === "C" && R[B + 4] === "T" && R[B + 5] === "Y" && R[B + 6] === "P" && R[B + 7] === "E") {
      let q = 1;
      for (B += 8; B < R.length; B++)
        if (R[B] === "<")
          q++;
        else if (R[B] === ">" && (q--, q === 0))
          break;
    } else if (R.length > B + 9 && R[B + 1] === "[" && R[B + 2] === "C" && R[B + 3] === "D" && R[B + 4] === "A" && R[B + 5] === "T" && R[B + 6] === "A" && R[B + 7] === "[") {
      for (B += 8; B < R.length; B++)
        if (R[B] === "]" && R[B + 1] === "]" && R[B + 2] === ">") {
          B += 2;
          break;
        }
    }
    return B;
  }
  const c = '"', a = "'";
  function u(R, B) {
    let q = "", O = "", j = !1;
    for (; B < R.length; B++) {
      if (R[B] === c || R[B] === a)
        O === "" ? O = R[B] : O !== R[B] || (O = "");
      else if (R[B] === ">" && O === "") {
        j = !0;
        break;
      }
      q += R[B];
    }
    return O !== "" ? !1 : {
      value: q,
      index: B,
      tagClosed: j
    };
  }
  const p = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  function d(R, B) {
    const q = e.getAllMatches(R, p), O = {};
    for (let j = 0; j < q.length; j++) {
      if (q[j][1].length === 0)
        return y("InvalidAttr", "Attribute '" + q[j][2] + "' has no space in starting.", K(q[j]));
      if (q[j][3] !== void 0 && q[j][4] === void 0)
        return y("InvalidAttr", "Attribute '" + q[j][2] + "' is without value.", K(q[j]));
      if (q[j][3] === void 0 && !B.allowBooleanAttributes)
        return y("InvalidAttr", "boolean attribute '" + q[j][2] + "' is not allowed.", K(q[j]));
      const k = q[j][2];
      if (!A(k))
        return y("InvalidAttr", "Attribute '" + k + "' is an invalid name.", K(q[j]));
      if (!O.hasOwnProperty(k))
        O[k] = 1;
      else
        return y("InvalidAttr", "Attribute '" + k + "' is repeated.", K(q[j]));
    }
    return !0;
  }
  function f(R, B) {
    let q = /\d/;
    for (R[B] === "x" && (B++, q = /[\da-fA-F]/); B < R.length; B++) {
      if (R[B] === ";")
        return B;
      if (!R[B].match(q))
        break;
    }
    return -1;
  }
  function v(R, B) {
    if (B++, R[B] === ";")
      return -1;
    if (R[B] === "#")
      return B++, f(R, B);
    let q = 0;
    for (; B < R.length; B++, q++)
      if (!(R[B].match(/\w/) && q < 20)) {
        if (R[B] === ";")
          break;
        return -1;
      }
    return B;
  }
  function y(R, B, q) {
    return {
      err: {
        code: R,
        msg: B,
        line: q.line || q,
        col: q.col
      }
    };
  }
  function A(R) {
    return e.isName(R);
  }
  function U(R) {
    return e.isName(R);
  }
  function z(R, B) {
    const q = R.substring(0, B).split(/\r?\n/);
    return {
      line: q.length,
      // column number is last line's length + 1, because column numbering starts at 1:
      col: q[q.length - 1].length + 1
    };
  }
  function K(R) {
    return R.startIndex + R[1].length;
  }
  return Ds;
}
var $r = {}, pa;
function Tp() {
  if (pa) return $r;
  pa = 1;
  const e = {
    preserveOrder: !1,
    attributeNamePrefix: "@_",
    attributesGroupName: !1,
    textNodeName: "#text",
    ignoreAttributes: !0,
    removeNSPrefix: !1,
    // remove NS from tag name or attribute name if true
    allowBooleanAttributes: !1,
    //a tag can have attributes without any value
    //ignoreRootElement : false,
    parseTagValue: !0,
    parseAttributeValue: !1,
    trimValues: !0,
    //Trim string values of tag and attributes
    cdataPropName: !1,
    numberParseOptions: {
      hex: !0,
      leadingZeros: !0,
      eNotation: !0
    },
    tagValueProcessor: function(n, r) {
      return r;
    },
    attributeValueProcessor: function(n, r) {
      return r;
    },
    stopNodes: [],
    //nested tags will not be parsed even for errors
    alwaysCreateTextNode: !1,
    isArray: () => !1,
    commentPropName: !1,
    unpairedTags: [],
    processEntities: !0,
    htmlEntities: !1,
    ignoreDeclaration: !1,
    ignorePiTags: !1,
    transformTagName: !1,
    transformAttributeName: !1,
    updateTag: function(n, r, i) {
      return n;
    }
    // skipEmptyListItem: false
  }, t = function(n) {
    return Object.assign({}, e, n);
  };
  return $r.buildOptions = t, $r.defaultOptions = e, $r;
}
var js, ga;
function _p() {
  if (ga) return js;
  ga = 1;
  class e {
    constructor(n) {
      this.tagname = n, this.child = [], this[":@"] = {};
    }
    add(n, r) {
      n === "__proto__" && (n = "#__proto__"), this.child.push({ [n]: r });
    }
    addChild(n) {
      n.tagname === "__proto__" && (n.tagname = "#__proto__"), n[":@"] && Object.keys(n[":@"]).length > 0 ? this.child.push({ [n.tagname]: n.child, ":@": n[":@"] }) : this.child.push({ [n.tagname]: n.child });
    }
  }
  return js = e, js;
}
var Ls, ma;
function Op() {
  if (ma) return Ls;
  ma = 1;
  const e = eo();
  function t(d, f) {
    const v = {};
    if (d[f + 3] === "O" && d[f + 4] === "C" && d[f + 5] === "T" && d[f + 6] === "Y" && d[f + 7] === "P" && d[f + 8] === "E") {
      f = f + 9;
      let y = 1, A = !1, U = !1, z = "";
      for (; f < d.length; f++)
        if (d[f] === "<" && !U) {
          if (A && i(d, f))
            f += 7, [entityName, val, f] = n(d, f + 1), val.indexOf("&") === -1 && (v[p(entityName)] = {
              regx: RegExp(`&${entityName};`, "g"),
              val
            });
          else if (A && c(d, f)) f += 8;
          else if (A && a(d, f)) f += 8;
          else if (A && u(d, f)) f += 9;
          else if (r) U = !0;
          else throw new Error("Invalid DOCTYPE");
          y++, z = "";
        } else if (d[f] === ">") {
          if (U ? d[f - 1] === "-" && d[f - 2] === "-" && (U = !1, y--) : y--, y === 0)
            break;
        } else d[f] === "[" ? A = !0 : z += d[f];
      if (y !== 0)
        throw new Error("Unclosed DOCTYPE");
    } else
      throw new Error("Invalid Tag instead of DOCTYPE");
    return { entities: v, i: f };
  }
  function n(d, f) {
    let v = "";
    for (; f < d.length && d[f] !== "'" && d[f] !== '"'; f++)
      v += d[f];
    if (v = v.trim(), v.indexOf(" ") !== -1) throw new Error("External entites are not supported");
    const y = d[f++];
    let A = "";
    for (; f < d.length && d[f] !== y; f++)
      A += d[f];
    return [v, A, f];
  }
  function r(d, f) {
    return d[f + 1] === "!" && d[f + 2] === "-" && d[f + 3] === "-";
  }
  function i(d, f) {
    return d[f + 1] === "!" && d[f + 2] === "E" && d[f + 3] === "N" && d[f + 4] === "T" && d[f + 5] === "I" && d[f + 6] === "T" && d[f + 7] === "Y";
  }
  function c(d, f) {
    return d[f + 1] === "!" && d[f + 2] === "E" && d[f + 3] === "L" && d[f + 4] === "E" && d[f + 5] === "M" && d[f + 6] === "E" && d[f + 7] === "N" && d[f + 8] === "T";
  }
  function a(d, f) {
    return d[f + 1] === "!" && d[f + 2] === "A" && d[f + 3] === "T" && d[f + 4] === "T" && d[f + 5] === "L" && d[f + 6] === "I" && d[f + 7] === "S" && d[f + 8] === "T";
  }
  function u(d, f) {
    return d[f + 1] === "!" && d[f + 2] === "N" && d[f + 3] === "O" && d[f + 4] === "T" && d[f + 5] === "A" && d[f + 6] === "T" && d[f + 7] === "I" && d[f + 8] === "O" && d[f + 9] === "N";
  }
  function p(d) {
    if (e.isName(d))
      return d;
    throw new Error(`Invalid entity name ${d}`);
  }
  return Ls = t, Ls;
}
var Us, ya;
function Ip() {
  if (ya) return Us;
  ya = 1;
  const e = /^[-+]?0x[a-fA-F0-9]+$/, t = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, n = {
    hex: !0,
    // oct: false,
    leadingZeros: !0,
    decimalPoint: ".",
    eNotation: !0
    //skipLike: /regex/
  };
  function r(a, u = {}) {
    if (u = Object.assign({}, n, u), !a || typeof a != "string") return a;
    let p = a.trim();
    if (u.skipLike !== void 0 && u.skipLike.test(p)) return a;
    if (a === "0") return 0;
    if (u.hex && e.test(p))
      return c(p, 16);
    if (p.search(/[eE]/) !== -1) {
      const d = p.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
      if (d) {
        if (u.leadingZeros)
          p = (d[1] || "") + d[3];
        else if (!(d[2] === "0" && d[3][0] === ".")) return a;
        return u.eNotation ? Number(p) : a;
      } else
        return a;
    } else {
      const d = t.exec(p);
      if (d) {
        const f = d[1], v = d[2];
        let y = i(d[3]);
        if (!u.leadingZeros && v.length > 0 && f && p[2] !== ".") return a;
        if (!u.leadingZeros && v.length > 0 && !f && p[1] !== ".") return a;
        if (u.leadingZeros && v === a) return 0;
        {
          const A = Number(p), U = "" + A;
          return U.search(/[eE]/) !== -1 ? u.eNotation ? A : a : p.indexOf(".") !== -1 ? U === "0" && y === "" || U === y || f && U === "-" + y ? A : a : v ? y === U || f + y === U ? A : a : p === U || p === f + U ? A : a;
        }
      } else
        return a;
    }
  }
  function i(a) {
    return a && a.indexOf(".") !== -1 && (a = a.replace(/0+$/, ""), a === "." ? a = "0" : a[0] === "." ? a = "0" + a : a[a.length - 1] === "." && (a = a.substr(0, a.length - 1))), a;
  }
  function c(a, u) {
    if (parseInt) return parseInt(a, u);
    if (Number.parseInt) return Number.parseInt(a, u);
    if (window && window.parseInt) return window.parseInt(a, u);
    throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
  }
  return Us = r, Us;
}
var $s, ba;
function Np() {
  if (ba) return $s;
  ba = 1;
  const e = eo(), t = _p(), n = Op(), r = Ip();
  class i {
    constructor(j) {
      this.options = j, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
        apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
        gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
        lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
        quot: { regex: /&(quot|#34|#x22);/g, val: '"' }
      }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = {
        space: { regex: /&(nbsp|#160);/g, val: " " },
        // "lt" : { regex: /&(lt|#60);/g, val: "<" },
        // "gt" : { regex: /&(gt|#62);/g, val: ">" },
        // "amp" : { regex: /&(amp|#38);/g, val: "&" },
        // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
        // "apos" : { regex: /&(apos|#39);/g, val: "'" },
        cent: { regex: /&(cent|#162);/g, val: "¢" },
        pound: { regex: /&(pound|#163);/g, val: "£" },
        yen: { regex: /&(yen|#165);/g, val: "¥" },
        euro: { regex: /&(euro|#8364);/g, val: "€" },
        copyright: { regex: /&(copy|#169);/g, val: "©" },
        reg: { regex: /&(reg|#174);/g, val: "®" },
        inr: { regex: /&(inr|#8377);/g, val: "₹" },
        num_dec: { regex: /&#([0-9]{1,7});/g, val: (k, X) => String.fromCharCode(Number.parseInt(X, 10)) },
        num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (k, X) => String.fromCharCode(Number.parseInt(X, 16)) }
      }, this.addExternalEntities = c, this.parseXml = f, this.parseTextData = a, this.resolveNameSpace = u, this.buildAttributesMap = d, this.isItStopNode = U, this.replaceEntitiesValue = y, this.readStopNodeData = B, this.saveTextToParentTag = A, this.addChild = v;
    }
  }
  function c(O) {
    const j = Object.keys(O);
    for (let k = 0; k < j.length; k++) {
      const X = j[k];
      this.lastEntities[X] = {
        regex: new RegExp("&" + X + ";", "g"),
        val: O[X]
      };
    }
  }
  function a(O, j, k, X, ie, te, xe) {
    if (O !== void 0 && (this.options.trimValues && !X && (O = O.trim()), O.length > 0)) {
      xe || (O = this.replaceEntitiesValue(O));
      const fe = this.options.tagValueProcessor(j, O, k, ie, te);
      return fe == null ? O : typeof fe != typeof O || fe !== O ? fe : this.options.trimValues ? q(O, this.options.parseTagValue, this.options.numberParseOptions) : O.trim() === O ? q(O, this.options.parseTagValue, this.options.numberParseOptions) : O;
    }
  }
  function u(O) {
    if (this.options.removeNSPrefix) {
      const j = O.split(":"), k = O.charAt(0) === "/" ? "/" : "";
      if (j[0] === "xmlns")
        return "";
      j.length === 2 && (O = k + j[1]);
    }
    return O;
  }
  const p = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
  function d(O, j, k) {
    if (!this.options.ignoreAttributes && typeof O == "string") {
      const X = e.getAllMatches(O, p), ie = X.length, te = {};
      for (let xe = 0; xe < ie; xe++) {
        const fe = this.resolveNameSpace(X[xe][1]);
        let Q = X[xe][4], Te = this.options.attributeNamePrefix + fe;
        if (fe.length)
          if (this.options.transformAttributeName && (Te = this.options.transformAttributeName(Te)), Te === "__proto__" && (Te = "#__proto__"), Q !== void 0) {
            this.options.trimValues && (Q = Q.trim()), Q = this.replaceEntitiesValue(Q);
            const ue = this.options.attributeValueProcessor(fe, Q, j);
            ue == null ? te[Te] = Q : typeof ue != typeof Q || ue !== Q ? te[Te] = ue : te[Te] = q(
              Q,
              this.options.parseAttributeValue,
              this.options.numberParseOptions
            );
          } else this.options.allowBooleanAttributes && (te[Te] = !0);
      }
      if (!Object.keys(te).length)
        return;
      if (this.options.attributesGroupName) {
        const xe = {};
        return xe[this.options.attributesGroupName] = te, xe;
      }
      return te;
    }
  }
  const f = function(O) {
    O = O.replace(/\r\n?/g, `
`);
    const j = new t("!xml");
    let k = j, X = "", ie = "";
    for (let te = 0; te < O.length; te++)
      if (O[te] === "<")
        if (O[te + 1] === "/") {
          const fe = K(O, ">", te, "Closing Tag is not closed.");
          let Q = O.substring(te + 2, fe).trim();
          if (this.options.removeNSPrefix) {
            const Fe = Q.indexOf(":");
            Fe !== -1 && (Q = Q.substr(Fe + 1));
          }
          this.options.transformTagName && (Q = this.options.transformTagName(Q)), k && (X = this.saveTextToParentTag(X, k, ie));
          const Te = ie.substring(ie.lastIndexOf(".") + 1);
          if (Q && this.options.unpairedTags.indexOf(Q) !== -1)
            throw new Error(`Unpaired tag can not be used as closing tag: </${Q}>`);
          let ue = 0;
          Te && this.options.unpairedTags.indexOf(Te) !== -1 ? (ue = ie.lastIndexOf(".", ie.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : ue = ie.lastIndexOf("."), ie = ie.substring(0, ue), k = this.tagsNodeStack.pop(), X = "", te = fe;
        } else if (O[te + 1] === "?") {
          let fe = R(O, te, !1, "?>");
          if (!fe) throw new Error("Pi Tag is not closed.");
          if (X = this.saveTextToParentTag(X, k, ie), !(this.options.ignoreDeclaration && fe.tagName === "?xml" || this.options.ignorePiTags)) {
            const Q = new t(fe.tagName);
            Q.add(this.options.textNodeName, ""), fe.tagName !== fe.tagExp && fe.attrExpPresent && (Q[":@"] = this.buildAttributesMap(fe.tagExp, ie, fe.tagName)), this.addChild(k, Q, ie);
          }
          te = fe.closeIndex + 1;
        } else if (O.substr(te + 1, 3) === "!--") {
          const fe = K(O, "-->", te + 4, "Comment is not closed.");
          if (this.options.commentPropName) {
            const Q = O.substring(te + 4, fe - 2);
            X = this.saveTextToParentTag(X, k, ie), k.add(this.options.commentPropName, [{ [this.options.textNodeName]: Q }]);
          }
          te = fe;
        } else if (O.substr(te + 1, 2) === "!D") {
          const fe = n(O, te);
          this.docTypeEntities = fe.entities, te = fe.i;
        } else if (O.substr(te + 1, 2) === "![") {
          const fe = K(O, "]]>", te, "CDATA is not closed.") - 2, Q = O.substring(te + 9, fe);
          X = this.saveTextToParentTag(X, k, ie);
          let Te = this.parseTextData(Q, k.tagname, ie, !0, !1, !0, !0);
          Te == null && (Te = ""), this.options.cdataPropName ? k.add(this.options.cdataPropName, [{ [this.options.textNodeName]: Q }]) : k.add(this.options.textNodeName, Te), te = fe + 2;
        } else {
          let fe = R(O, te, this.options.removeNSPrefix), Q = fe.tagName;
          const Te = fe.rawTagName;
          let ue = fe.tagExp, Fe = fe.attrExpPresent, bt = fe.closeIndex;
          this.options.transformTagName && (Q = this.options.transformTagName(Q)), k && X && k.tagname !== "!xml" && (X = this.saveTextToParentTag(X, k, ie, !1));
          const tn = k;
          if (tn && this.options.unpairedTags.indexOf(tn.tagname) !== -1 && (k = this.tagsNodeStack.pop(), ie = ie.substring(0, ie.lastIndexOf("."))), Q !== j.tagname && (ie += ie ? "." + Q : Q), this.isItStopNode(this.options.stopNodes, ie, Q)) {
            let Ie = "";
            if (ue.length > 0 && ue.lastIndexOf("/") === ue.length - 1)
              Q[Q.length - 1] === "/" ? (Q = Q.substr(0, Q.length - 1), ie = ie.substr(0, ie.length - 1), ue = Q) : ue = ue.substr(0, ue.length - 1), te = fe.closeIndex;
            else if (this.options.unpairedTags.indexOf(Q) !== -1)
              te = fe.closeIndex;
            else {
              const Pt = this.readStopNodeData(O, Te, bt + 1);
              if (!Pt) throw new Error(`Unexpected end of ${Te}`);
              te = Pt.i, Ie = Pt.tagContent;
            }
            const Ct = new t(Q);
            Q !== ue && Fe && (Ct[":@"] = this.buildAttributesMap(ue, ie, Q)), Ie && (Ie = this.parseTextData(Ie, Q, ie, !0, Fe, !0, !0)), ie = ie.substr(0, ie.lastIndexOf(".")), Ct.add(this.options.textNodeName, Ie), this.addChild(k, Ct, ie);
          } else {
            if (ue.length > 0 && ue.lastIndexOf("/") === ue.length - 1) {
              Q[Q.length - 1] === "/" ? (Q = Q.substr(0, Q.length - 1), ie = ie.substr(0, ie.length - 1), ue = Q) : ue = ue.substr(0, ue.length - 1), this.options.transformTagName && (Q = this.options.transformTagName(Q));
              const Ie = new t(Q);
              Q !== ue && Fe && (Ie[":@"] = this.buildAttributesMap(ue, ie, Q)), this.addChild(k, Ie, ie), ie = ie.substr(0, ie.lastIndexOf("."));
            } else {
              const Ie = new t(Q);
              this.tagsNodeStack.push(k), Q !== ue && Fe && (Ie[":@"] = this.buildAttributesMap(ue, ie, Q)), this.addChild(k, Ie, ie), k = Ie;
            }
            X = "", te = bt;
          }
        }
      else
        X += O[te];
    return j.child;
  };
  function v(O, j, k) {
    const X = this.options.updateTag(j.tagname, k, j[":@"]);
    X === !1 || (typeof X == "string" && (j.tagname = X), O.addChild(j));
  }
  const y = function(O) {
    if (this.options.processEntities) {
      for (let j in this.docTypeEntities) {
        const k = this.docTypeEntities[j];
        O = O.replace(k.regx, k.val);
      }
      for (let j in this.lastEntities) {
        const k = this.lastEntities[j];
        O = O.replace(k.regex, k.val);
      }
      if (this.options.htmlEntities)
        for (let j in this.htmlEntities) {
          const k = this.htmlEntities[j];
          O = O.replace(k.regex, k.val);
        }
      O = O.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return O;
  };
  function A(O, j, k, X) {
    return O && (X === void 0 && (X = Object.keys(j.child).length === 0), O = this.parseTextData(
      O,
      j.tagname,
      k,
      !1,
      j[":@"] ? Object.keys(j[":@"]).length !== 0 : !1,
      X
    ), O !== void 0 && O !== "" && j.add(this.options.textNodeName, O), O = ""), O;
  }
  function U(O, j, k) {
    const X = "*." + k;
    for (const ie in O) {
      const te = O[ie];
      if (X === te || j === te) return !0;
    }
    return !1;
  }
  function z(O, j, k = ">") {
    let X, ie = "";
    for (let te = j; te < O.length; te++) {
      let xe = O[te];
      if (X)
        xe === X && (X = "");
      else if (xe === '"' || xe === "'")
        X = xe;
      else if (xe === k[0])
        if (k[1]) {
          if (O[te + 1] === k[1])
            return {
              data: ie,
              index: te
            };
        } else
          return {
            data: ie,
            index: te
          };
      else xe === "	" && (xe = " ");
      ie += xe;
    }
  }
  function K(O, j, k, X) {
    const ie = O.indexOf(j, k);
    if (ie === -1)
      throw new Error(X);
    return ie + j.length - 1;
  }
  function R(O, j, k, X = ">") {
    const ie = z(O, j + 1, X);
    if (!ie) return;
    let te = ie.data;
    const xe = ie.index, fe = te.search(/\s/);
    let Q = te, Te = !0;
    fe !== -1 && (Q = te.substring(0, fe), te = te.substring(fe + 1).trimStart());
    const ue = Q;
    if (k) {
      const Fe = Q.indexOf(":");
      Fe !== -1 && (Q = Q.substr(Fe + 1), Te = Q !== ie.data.substr(Fe + 1));
    }
    return {
      tagName: Q,
      tagExp: te,
      closeIndex: xe,
      attrExpPresent: Te,
      rawTagName: ue
    };
  }
  function B(O, j, k) {
    const X = k;
    let ie = 1;
    for (; k < O.length; k++)
      if (O[k] === "<")
        if (O[k + 1] === "/") {
          const te = K(O, ">", k, `${j} is not closed`);
          if (O.substring(k + 2, te).trim() === j && (ie--, ie === 0))
            return {
              tagContent: O.substring(X, k),
              i: te
            };
          k = te;
        } else if (O[k + 1] === "?")
          k = K(O, "?>", k + 1, "StopNode is not closed.");
        else if (O.substr(k + 1, 3) === "!--")
          k = K(O, "-->", k + 3, "StopNode is not closed.");
        else if (O.substr(k + 1, 2) === "![")
          k = K(O, "]]>", k, "StopNode is not closed.") - 2;
        else {
          const te = R(O, k, ">");
          te && ((te && te.tagName) === j && te.tagExp[te.tagExp.length - 1] !== "/" && ie++, k = te.closeIndex);
        }
  }
  function q(O, j, k) {
    if (j && typeof O == "string") {
      const X = O.trim();
      return X === "true" ? !0 : X === "false" ? !1 : r(O, k);
    } else
      return e.isExist(O) ? O : "";
  }
  return $s = i, $s;
}
var Hs = {}, va;
function Pp() {
  if (va) return Hs;
  va = 1;
  function e(c, a) {
    return t(c, a);
  }
  function t(c, a, u) {
    let p;
    const d = {};
    for (let f = 0; f < c.length; f++) {
      const v = c[f], y = n(v);
      let A = "";
      if (u === void 0 ? A = y : A = u + "." + y, y === a.textNodeName)
        p === void 0 ? p = v[y] : p += "" + v[y];
      else {
        if (y === void 0)
          continue;
        if (v[y]) {
          let U = t(v[y], a, A);
          const z = i(U, a);
          v[":@"] ? r(U, v[":@"], A, a) : Object.keys(U).length === 1 && U[a.textNodeName] !== void 0 && !a.alwaysCreateTextNode ? U = U[a.textNodeName] : Object.keys(U).length === 0 && (a.alwaysCreateTextNode ? U[a.textNodeName] = "" : U = ""), d[y] !== void 0 && d.hasOwnProperty(y) ? (Array.isArray(d[y]) || (d[y] = [d[y]]), d[y].push(U)) : a.isArray(y, A, z) ? d[y] = [U] : d[y] = U;
        }
      }
    }
    return typeof p == "string" ? p.length > 0 && (d[a.textNodeName] = p) : p !== void 0 && (d[a.textNodeName] = p), d;
  }
  function n(c) {
    const a = Object.keys(c);
    for (let u = 0; u < a.length; u++) {
      const p = a[u];
      if (p !== ":@") return p;
    }
  }
  function r(c, a, u, p) {
    if (a) {
      const d = Object.keys(a), f = d.length;
      for (let v = 0; v < f; v++) {
        const y = d[v];
        p.isArray(y, u + "." + y, !0, !0) ? c[y] = [a[y]] : c[y] = a[y];
      }
    }
  }
  function i(c, a) {
    const { textNodeName: u } = a, p = Object.keys(c).length;
    return !!(p === 0 || p === 1 && (c[u] || typeof c[u] == "boolean" || c[u] === 0));
  }
  return Hs.prettify = e, Hs;
}
var zs, wa;
function Mp() {
  if (wa) return zs;
  wa = 1;
  const { buildOptions: e } = Tp(), t = Np(), { prettify: n } = Pp(), r = Qu();
  class i {
    constructor(a) {
      this.externalEntities = {}, this.options = e(a);
    }
    /**
     * Parse XML dats to JS object 
     * @param {string|Buffer} xmlData 
     * @param {boolean|Object} validationOption 
     */
    parse(a, u) {
      if (typeof a != "string") if (a.toString)
        a = a.toString();
      else
        throw new Error("XML data is accepted in String or Bytes[] form.");
      if (u) {
        u === !0 && (u = {});
        const f = r.validate(a, u);
        if (f !== !0)
          throw Error(`${f.err.msg}:${f.err.line}:${f.err.col}`);
      }
      const p = new t(this.options);
      p.addExternalEntities(this.externalEntities);
      const d = p.parseXml(a);
      return this.options.preserveOrder || d === void 0 ? d : n(d, this.options);
    }
    /**
     * Add Entity which is not by default supported by this library
     * @param {string} key 
     * @param {string} value 
     */
    addEntity(a, u) {
      if (u.indexOf("&") !== -1)
        throw new Error("Entity value can't have '&'");
      if (a.indexOf("&") !== -1 || a.indexOf(";") !== -1)
        throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      if (u === "&")
        throw new Error("An entity with value '&' is not permitted");
      this.externalEntities[a] = u;
    }
  }
  return zs = i, zs;
}
var Ks, xa;
function Bp() {
  if (xa) return Ks;
  xa = 1;
  const e = `
`;
  function t(u, p) {
    let d = "";
    return p.format && p.indentBy.length > 0 && (d = e), n(u, p, "", d);
  }
  function n(u, p, d, f) {
    let v = "", y = !1;
    for (let A = 0; A < u.length; A++) {
      const U = u[A], z = r(U);
      if (z === void 0) continue;
      let K = "";
      if (d.length === 0 ? K = z : K = `${d}.${z}`, z === p.textNodeName) {
        let j = U[z];
        c(K, p) || (j = p.tagValueProcessor(z, j), j = a(j, p)), y && (v += f), v += j, y = !1;
        continue;
      } else if (z === p.cdataPropName) {
        y && (v += f), v += `<![CDATA[${U[z][0][p.textNodeName]}]]>`, y = !1;
        continue;
      } else if (z === p.commentPropName) {
        v += f + `<!--${U[z][0][p.textNodeName]}-->`, y = !0;
        continue;
      } else if (z[0] === "?") {
        const j = i(U[":@"], p), k = z === "?xml" ? "" : f;
        let X = U[z][0][p.textNodeName];
        X = X.length !== 0 ? " " + X : "", v += k + `<${z}${X}${j}?>`, y = !0;
        continue;
      }
      let R = f;
      R !== "" && (R += p.indentBy);
      const B = i(U[":@"], p), q = f + `<${z}${B}`, O = n(U[z], p, K, R);
      p.unpairedTags.indexOf(z) !== -1 ? p.suppressUnpairedNode ? v += q + ">" : v += q + "/>" : (!O || O.length === 0) && p.suppressEmptyNode ? v += q + "/>" : O && O.endsWith(">") ? v += q + `>${O}${f}</${z}>` : (v += q + ">", O && f !== "" && (O.includes("/>") || O.includes("</")) ? v += f + p.indentBy + O + f : v += O, v += `</${z}>`), y = !0;
    }
    return v;
  }
  function r(u) {
    const p = Object.keys(u);
    for (let d = 0; d < p.length; d++) {
      const f = p[d];
      if (u.hasOwnProperty(f) && f !== ":@")
        return f;
    }
  }
  function i(u, p) {
    let d = "";
    if (u && !p.ignoreAttributes)
      for (let f in u) {
        if (!u.hasOwnProperty(f)) continue;
        let v = p.attributeValueProcessor(f, u[f]);
        v = a(v, p), v === !0 && p.suppressBooleanAttributes ? d += ` ${f.substr(p.attributeNamePrefix.length)}` : d += ` ${f.substr(p.attributeNamePrefix.length)}="${v}"`;
      }
    return d;
  }
  function c(u, p) {
    u = u.substr(0, u.length - p.textNodeName.length - 1);
    let d = u.substr(u.lastIndexOf(".") + 1);
    for (let f in p.stopNodes)
      if (p.stopNodes[f] === u || p.stopNodes[f] === "*." + d) return !0;
    return !1;
  }
  function a(u, p) {
    if (u && u.length > 0 && p.processEntities)
      for (let d = 0; d < p.entities.length; d++) {
        const f = p.entities[d];
        u = u.replace(f.regex, f.val);
      }
    return u;
  }
  return Ks = t, Ks;
}
var qs, Ea;
function Dp() {
  if (Ea) return qs;
  Ea = 1;
  const e = Bp(), t = {
    attributeNamePrefix: "@_",
    attributesGroupName: !1,
    textNodeName: "#text",
    ignoreAttributes: !0,
    cdataPropName: !1,
    format: !1,
    indentBy: "  ",
    suppressEmptyNode: !1,
    suppressUnpairedNode: !0,
    suppressBooleanAttributes: !0,
    tagValueProcessor: function(a, u) {
      return u;
    },
    attributeValueProcessor: function(a, u) {
      return u;
    },
    preserveOrder: !1,
    commentPropName: !1,
    unpairedTags: [],
    entities: [
      { regex: new RegExp("&", "g"), val: "&amp;" },
      //it must be on top
      { regex: new RegExp(">", "g"), val: "&gt;" },
      { regex: new RegExp("<", "g"), val: "&lt;" },
      { regex: new RegExp("'", "g"), val: "&apos;" },
      { regex: new RegExp('"', "g"), val: "&quot;" }
    ],
    processEntities: !0,
    stopNodes: [],
    // transformTagName: false,
    // transformAttributeName: false,
    oneListGroup: !1
  };
  function n(a) {
    this.options = Object.assign({}, t, a), this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
      return !1;
    } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = c), this.processTextOrObjNode = r, this.options.format ? (this.indentate = i, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
      return "";
    }, this.tagEndChar = ">", this.newLine = "");
  }
  n.prototype.build = function(a) {
    return this.options.preserveOrder ? e(a, this.options) : (Array.isArray(a) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (a = {
      [this.options.arrayNodeName]: a
    }), this.j2x(a, 0).val);
  }, n.prototype.j2x = function(a, u) {
    let p = "", d = "";
    for (let f in a)
      if (Object.prototype.hasOwnProperty.call(a, f))
        if (typeof a[f] > "u")
          this.isAttribute(f) && (d += "");
        else if (a[f] === null)
          this.isAttribute(f) ? d += "" : f[0] === "?" ? d += this.indentate(u) + "<" + f + "?" + this.tagEndChar : d += this.indentate(u) + "<" + f + "/" + this.tagEndChar;
        else if (a[f] instanceof Date)
          d += this.buildTextValNode(a[f], f, "", u);
        else if (typeof a[f] != "object") {
          const v = this.isAttribute(f);
          if (v)
            p += this.buildAttrPairStr(v, "" + a[f]);
          else if (f === this.options.textNodeName) {
            let y = this.options.tagValueProcessor(f, "" + a[f]);
            d += this.replaceEntitiesValue(y);
          } else
            d += this.buildTextValNode(a[f], f, "", u);
        } else if (Array.isArray(a[f])) {
          const v = a[f].length;
          let y = "", A = "";
          for (let U = 0; U < v; U++) {
            const z = a[f][U];
            if (!(typeof z > "u")) if (z === null)
              f[0] === "?" ? d += this.indentate(u) + "<" + f + "?" + this.tagEndChar : d += this.indentate(u) + "<" + f + "/" + this.tagEndChar;
            else if (typeof z == "object")
              if (this.options.oneListGroup) {
                const K = this.j2x(z, u + 1);
                y += K.val, this.options.attributesGroupName && z.hasOwnProperty(this.options.attributesGroupName) && (A += K.attrStr);
              } else
                y += this.processTextOrObjNode(z, f, u);
            else if (this.options.oneListGroup) {
              let K = this.options.tagValueProcessor(f, z);
              K = this.replaceEntitiesValue(K), y += K;
            } else
              y += this.buildTextValNode(z, f, "", u);
          }
          this.options.oneListGroup && (y = this.buildObjectNode(y, f, A, u)), d += y;
        } else if (this.options.attributesGroupName && f === this.options.attributesGroupName) {
          const v = Object.keys(a[f]), y = v.length;
          for (let A = 0; A < y; A++)
            p += this.buildAttrPairStr(v[A], "" + a[f][v[A]]);
        } else
          d += this.processTextOrObjNode(a[f], f, u);
    return { attrStr: p, val: d };
  }, n.prototype.buildAttrPairStr = function(a, u) {
    return u = this.options.attributeValueProcessor(a, "" + u), u = this.replaceEntitiesValue(u), this.options.suppressBooleanAttributes && u === "true" ? " " + a : " " + a + '="' + u + '"';
  };
  function r(a, u, p) {
    const d = this.j2x(a, p + 1);
    return a[this.options.textNodeName] !== void 0 && Object.keys(a).length === 1 ? this.buildTextValNode(a[this.options.textNodeName], u, d.attrStr, p) : this.buildObjectNode(d.val, u, d.attrStr, p);
  }
  n.prototype.buildObjectNode = function(a, u, p, d) {
    if (a === "")
      return u[0] === "?" ? this.indentate(d) + "<" + u + p + "?" + this.tagEndChar : this.indentate(d) + "<" + u + p + this.closeTag(u) + this.tagEndChar;
    {
      let f = "</" + u + this.tagEndChar, v = "";
      return u[0] === "?" && (v = "?", f = ""), (p || p === "") && a.indexOf("<") === -1 ? this.indentate(d) + "<" + u + p + v + ">" + a + f : this.options.commentPropName !== !1 && u === this.options.commentPropName && v.length === 0 ? this.indentate(d) + `<!--${a}-->` + this.newLine : this.indentate(d) + "<" + u + p + v + this.tagEndChar + a + this.indentate(d) + f;
    }
  }, n.prototype.closeTag = function(a) {
    let u = "";
    return this.options.unpairedTags.indexOf(a) !== -1 ? this.options.suppressUnpairedNode || (u = "/") : this.options.suppressEmptyNode ? u = "/" : u = `></${a}`, u;
  }, n.prototype.buildTextValNode = function(a, u, p, d) {
    if (this.options.cdataPropName !== !1 && u === this.options.cdataPropName)
      return this.indentate(d) + `<![CDATA[${a}]]>` + this.newLine;
    if (this.options.commentPropName !== !1 && u === this.options.commentPropName)
      return this.indentate(d) + `<!--${a}-->` + this.newLine;
    if (u[0] === "?")
      return this.indentate(d) + "<" + u + p + "?" + this.tagEndChar;
    {
      let f = this.options.tagValueProcessor(u, a);
      return f = this.replaceEntitiesValue(f), f === "" ? this.indentate(d) + "<" + u + p + this.closeTag(u) + this.tagEndChar : this.indentate(d) + "<" + u + p + ">" + f + "</" + u + this.tagEndChar;
    }
  }, n.prototype.replaceEntitiesValue = function(a) {
    if (a && a.length > 0 && this.options.processEntities)
      for (let u = 0; u < this.options.entities.length; u++) {
        const p = this.options.entities[u];
        a = a.replace(p.regex, p.val);
      }
    return a;
  };
  function i(a) {
    return this.options.indentBy.repeat(a);
  }
  function c(a) {
    return a.startsWith(this.options.attributeNamePrefix) && a !== this.options.textNodeName ? a.substr(this.attrPrefixLen) : !1;
  }
  return qs = n, qs;
}
var Vs, Sa;
function Fp() {
  if (Sa) return Vs;
  Sa = 1;
  const e = Qu(), t = Mp(), n = Dp();
  return Vs = {
    XMLParser: t,
    XMLValidator: e,
    XMLBuilder: n
  }, Vs;
}
var jp = Fp();
const el = (e, t) => kp(e, t).then((n) => {
  if (n.length) {
    const r = new jp.XMLParser({
      attributeNamePrefix: "",
      htmlEntities: !0,
      ignoreAttributes: !1,
      ignoreDeclaration: !0,
      parseTagValue: !1,
      trimValues: !1,
      tagValueProcessor: (p, d) => d.trim() === "" && d.includes(`
`) ? "" : void 0
    });
    r.addEntity("#xD", "\r"), r.addEntity("#10", `
`);
    let i;
    try {
      i = r.parse(n, !0);
    } catch (p) {
      throw p && typeof p == "object" && Object.defineProperty(p, "$responseBodyText", {
        value: n
      }), p;
    }
    const c = "#text", a = Object.keys(i)[0], u = i[a];
    return u[c] && (u[a] = u[c], delete u[c]), Wu(u);
  }
  return {};
}), Lp = async (e, t) => {
  const n = await el(e, t);
  return n.Error && (n.Error.message = n.Error.message ?? n.Error.Message), n;
}, Up = (e, t) => {
  var n;
  if (((n = t == null ? void 0 : t.Error) == null ? void 0 : n.Code) !== void 0)
    return t.Error.Code;
  if ((t == null ? void 0 : t.Code) !== void 0)
    return t.Code;
  if (e.statusCode == 404)
    return "NotFound";
}, Di = [
  pt.CRC32,
  pt.CRC32C,
  pt.CRC64NVME,
  pt.SHA1,
  pt.SHA256
], $p = [
  pt.SHA256,
  pt.SHA1,
  pt.CRC32,
  pt.CRC32C,
  pt.CRC64NVME
], Hp = (e, { requestChecksumRequired: t, requestAlgorithmMember: n, requestChecksumCalculation: r }) => {
  if (!n)
    return r === tr.WHEN_SUPPORTED || t ? Ti : void 0;
  if (!e[n])
    return;
  const i = e[n];
  if (!Di.includes(i))
    throw new Error(`The checksum algorithm "${i}" is not supported by the client. Select one of ${Di}.`);
  return i;
}, to = (e) => e === pt.MD5 ? "content-md5" : `x-amz-checksum-${e.toLowerCase()}`, zp = (e, t) => {
  const n = e.toLowerCase();
  for (const r of Object.keys(t))
    if (n === r.toLowerCase())
      return !0;
  return !1;
}, Kp = (e, t) => {
  const n = e.toLowerCase();
  for (const r of Object.keys(t))
    if (r.toLowerCase().startsWith(n))
      return !0;
  return !1;
}, tl = (e) => e !== void 0 && typeof e != "string" && !ArrayBuffer.isView(e) && !Vu(e);
function no(e, t, n, r) {
  function i(c) {
    return c instanceof n ? c : new n(function(a) {
      a(c);
    });
  }
  return new (n || (n = Promise))(function(c, a) {
    function u(f) {
      try {
        d(r.next(f));
      } catch (v) {
        a(v);
      }
    }
    function p(f) {
      try {
        d(r.throw(f));
      } catch (v) {
        a(v);
      }
    }
    function d(f) {
      f.done ? c(f.value) : i(f.value).then(u, p);
    }
    d((r = r.apply(e, t || [])).next());
  });
}
function ro(e, t) {
  var n = { label: 0, sent: function() {
    if (c[0] & 1) throw c[1];
    return c[1];
  }, trys: [], ops: [] }, r, i, c, a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return a.next = u(0), a.throw = u(1), a.return = u(2), typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(d) {
    return function(f) {
      return p([d, f]);
    };
  }
  function p(d) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, d[0] && (n = 0)), n; ) try {
      if (r = 1, i && (c = d[0] & 2 ? i.return : d[0] ? i.throw || ((c = i.return) && c.call(i), 0) : i.next) && !(c = c.call(i, d[1])).done) return c;
      switch (i = 0, c && (d = [d[0] & 2, c.value]), d[0]) {
        case 0:
        case 1:
          c = d;
          break;
        case 4:
          return n.label++, { value: d[1], done: !1 };
        case 5:
          n.label++, i = d[1], d = [0];
          continue;
        case 7:
          d = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (c = n.trys, !(c = c.length > 0 && c[c.length - 1]) && (d[0] === 6 || d[0] === 2)) {
            n = 0;
            continue;
          }
          if (d[0] === 3 && (!c || d[1] > c[0] && d[1] < c[3])) {
            n.label = d[1];
            break;
          }
          if (d[0] === 6 && n.label < c[1]) {
            n.label = c[1], c = d;
            break;
          }
          if (c && n.label < c[2]) {
            n.label = c[2], n.ops.push(d);
            break;
          }
          c[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      d = t.call(e, n);
    } catch (f) {
      d = [6, f], i = 0;
    } finally {
      r = c = 0;
    }
    if (d[0] & 5) throw d[1];
    return { value: d[0] ? d[1] : void 0, done: !0 };
  }
}
function nl(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
const qp = (e) => new TextEncoder().encode(e);
var Vp = typeof Buffer < "u" && Buffer.from ? function(e) {
  return Buffer.from(e, "utf8");
} : qp;
function Bn(e) {
  return e instanceof Uint8Array ? e : typeof e == "string" ? Vp(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
}
function Tr(e) {
  return typeof e == "string" ? e.length === 0 : e.byteLength === 0;
}
function rl(e) {
  return new Uint8Array([
    (e & 4278190080) >> 24,
    (e & 16711680) >> 16,
    (e & 65280) >> 8,
    e & 255
  ]);
}
function sl(e) {
  if (!Uint32Array.from) {
    for (var t = new Uint32Array(e.length), n = 0; n < e.length; )
      t[n] = e[n], n += 1;
    return t;
  }
  return Uint32Array.from(e);
}
var Gp = (
  /** @class */
  function() {
    function e() {
      this.crc32c = new Aa();
    }
    return e.prototype.update = function(t) {
      Tr(t) || this.crc32c.update(Bn(t));
    }, e.prototype.digest = function() {
      return no(this, void 0, void 0, function() {
        return ro(this, function(t) {
          return [2, rl(this.crc32c.digest())];
        });
      });
    }, e.prototype.reset = function() {
      this.crc32c = new Aa();
    }, e;
  }()
), Aa = (
  /** @class */
  function() {
    function e() {
      this.checksum = 4294967295;
    }
    return e.prototype.update = function(t) {
      var n, r;
      try {
        for (var i = nl(t), c = i.next(); !c.done; c = i.next()) {
          var a = c.value;
          this.checksum = this.checksum >>> 8 ^ Xp[(this.checksum ^ a) & 255];
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          c && !c.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
      return this;
    }, e.prototype.digest = function() {
      return (this.checksum ^ 4294967295) >>> 0;
    }, e;
  }()
), Wp = [
  0,
  4067132163,
  3778769143,
  324072436,
  3348797215,
  904991772,
  648144872,
  3570033899,
  2329499855,
  2024987596,
  1809983544,
  2575936315,
  1296289744,
  3207089363,
  2893594407,
  1578318884,
  274646895,
  3795141740,
  4049975192,
  51262619,
  3619967088,
  632279923,
  922689671,
  3298075524,
  2592579488,
  1760304291,
  2075979607,
  2312596564,
  1562183871,
  2943781820,
  3156637768,
  1313733451,
  549293790,
  3537243613,
  3246849577,
  871202090,
  3878099393,
  357341890,
  102525238,
  4101499445,
  2858735121,
  1477399826,
  1264559846,
  3107202533,
  1845379342,
  2677391885,
  2361733625,
  2125378298,
  820201905,
  3263744690,
  3520608582,
  598981189,
  4151959214,
  85089709,
  373468761,
  3827903834,
  3124367742,
  1213305469,
  1526817161,
  2842354314,
  2107672161,
  2412447074,
  2627466902,
  1861252501,
  1098587580,
  3004210879,
  2688576843,
  1378610760,
  2262928035,
  1955203488,
  1742404180,
  2511436119,
  3416409459,
  969524848,
  714683780,
  3639785095,
  205050476,
  4266873199,
  3976438427,
  526918040,
  1361435347,
  2739821008,
  2954799652,
  1114974503,
  2529119692,
  1691668175,
  2005155131,
  2247081528,
  3690758684,
  697762079,
  986182379,
  3366744552,
  476452099,
  3993867776,
  4250756596,
  255256311,
  1640403810,
  2477592673,
  2164122517,
  1922457750,
  2791048317,
  1412925310,
  1197962378,
  3037525897,
  3944729517,
  427051182,
  170179418,
  4165941337,
  746937522,
  3740196785,
  3451792453,
  1070968646,
  1905808397,
  2213795598,
  2426610938,
  1657317369,
  3053634322,
  1147748369,
  1463399397,
  2773627110,
  4215344322,
  153784257,
  444234805,
  3893493558,
  1021025245,
  3467647198,
  3722505002,
  797665321,
  2197175160,
  1889384571,
  1674398607,
  2443626636,
  1164749927,
  3070701412,
  2757221520,
  1446797203,
  137323447,
  4198817972,
  3910406976,
  461344835,
  3484808360,
  1037989803,
  781091935,
  3705997148,
  2460548119,
  1623424788,
  1939049696,
  2180517859,
  1429367560,
  2807687179,
  3020495871,
  1180866812,
  410100952,
  3927582683,
  4182430767,
  186734380,
  3756733383,
  763408580,
  1053836080,
  3434856499,
  2722870694,
  1344288421,
  1131464017,
  2971354706,
  1708204729,
  2545590714,
  2229949006,
  1988219213,
  680717673,
  3673779818,
  3383336350,
  1002577565,
  4010310262,
  493091189,
  238226049,
  4233660802,
  2987750089,
  1082061258,
  1395524158,
  2705686845,
  1972364758,
  2279892693,
  2494862625,
  1725896226,
  952904198,
  3399985413,
  3656866545,
  731699698,
  4283874585,
  222117402,
  510512622,
  3959836397,
  3280807620,
  837199303,
  582374963,
  3504198960,
  68661723,
  4135334616,
  3844915500,
  390545967,
  1230274059,
  3141532936,
  2825850620,
  1510247935,
  2395924756,
  2091215383,
  1878366691,
  2644384480,
  3553878443,
  565732008,
  854102364,
  3229815391,
  340358836,
  3861050807,
  4117890627,
  119113024,
  1493875044,
  2875275879,
  3090270611,
  1247431312,
  2660249211,
  1828433272,
  2141937292,
  2378227087,
  3811616794,
  291187481,
  34330861,
  4032846830,
  615137029,
  3603020806,
  3314634738,
  939183345,
  1776939221,
  2609017814,
  2295496738,
  2058945313,
  2926798794,
  1545135305,
  1330124605,
  3173225534,
  4084100981,
  17165430,
  307568514,
  3762199681,
  888469610,
  3332340585,
  3587147933,
  665062302,
  2042050490,
  2346497209,
  2559330125,
  1793573966,
  3190661285,
  1279665062,
  1595330642,
  2910671697
], Xp = sl(Wp), Yp = (
  /** @class */
  function() {
    function e() {
      this.crc32 = new ss();
    }
    return e.prototype.update = function(t) {
      Tr(t) || this.crc32.update(Bn(t));
    }, e.prototype.digest = function() {
      return no(this, void 0, void 0, function() {
        return ro(this, function(t) {
          return [2, rl(this.crc32.digest())];
        });
      });
    }, e.prototype.reset = function() {
      this.crc32 = new ss();
    }, e;
  }()
), ss = (
  /** @class */
  function() {
    function e() {
      this.checksum = 4294967295;
    }
    return e.prototype.update = function(t) {
      var n, r;
      try {
        for (var i = nl(t), c = i.next(); !c.done; c = i.next()) {
          var a = c.value;
          this.checksum = this.checksum >>> 8 ^ Jp[(this.checksum ^ a) & 255];
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          c && !c.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
      return this;
    }, e.prototype.digest = function() {
      return (this.checksum ^ 4294967295) >>> 0;
    }, e;
  }()
), Zp = [
  0,
  1996959894,
  3993919788,
  2567524794,
  124634137,
  1886057615,
  3915621685,
  2657392035,
  249268274,
  2044508324,
  3772115230,
  2547177864,
  162941995,
  2125561021,
  3887607047,
  2428444049,
  498536548,
  1789927666,
  4089016648,
  2227061214,
  450548861,
  1843258603,
  4107580753,
  2211677639,
  325883990,
  1684777152,
  4251122042,
  2321926636,
  335633487,
  1661365465,
  4195302755,
  2366115317,
  997073096,
  1281953886,
  3579855332,
  2724688242,
  1006888145,
  1258607687,
  3524101629,
  2768942443,
  901097722,
  1119000684,
  3686517206,
  2898065728,
  853044451,
  1172266101,
  3705015759,
  2882616665,
  651767980,
  1373503546,
  3369554304,
  3218104598,
  565507253,
  1454621731,
  3485111705,
  3099436303,
  671266974,
  1594198024,
  3322730930,
  2970347812,
  795835527,
  1483230225,
  3244367275,
  3060149565,
  1994146192,
  31158534,
  2563907772,
  4023717930,
  1907459465,
  112637215,
  2680153253,
  3904427059,
  2013776290,
  251722036,
  2517215374,
  3775830040,
  2137656763,
  141376813,
  2439277719,
  3865271297,
  1802195444,
  476864866,
  2238001368,
  4066508878,
  1812370925,
  453092731,
  2181625025,
  4111451223,
  1706088902,
  314042704,
  2344532202,
  4240017532,
  1658658271,
  366619977,
  2362670323,
  4224994405,
  1303535960,
  984961486,
  2747007092,
  3569037538,
  1256170817,
  1037604311,
  2765210733,
  3554079995,
  1131014506,
  879679996,
  2909243462,
  3663771856,
  1141124467,
  855842277,
  2852801631,
  3708648649,
  1342533948,
  654459306,
  3188396048,
  3373015174,
  1466479909,
  544179635,
  3110523913,
  3462522015,
  1591671054,
  702138776,
  2966460450,
  3352799412,
  1504918807,
  783551873,
  3082640443,
  3233442989,
  3988292384,
  2596254646,
  62317068,
  1957810842,
  3939845945,
  2647816111,
  81470997,
  1943803523,
  3814918930,
  2489596804,
  225274430,
  2053790376,
  3826175755,
  2466906013,
  167816743,
  2097651377,
  4027552580,
  2265490386,
  503444072,
  1762050814,
  4150417245,
  2154129355,
  426522225,
  1852507879,
  4275313526,
  2312317920,
  282753626,
  1742555852,
  4189708143,
  2394877945,
  397917763,
  1622183637,
  3604390888,
  2714866558,
  953729732,
  1340076626,
  3518719985,
  2797360999,
  1068828381,
  1219638859,
  3624741850,
  2936675148,
  906185462,
  1090812512,
  3747672003,
  2825379669,
  829329135,
  1181335161,
  3412177804,
  3160834842,
  628085408,
  1382605366,
  3423369109,
  3138078467,
  570562233,
  1426400815,
  3317316542,
  2998733608,
  733239954,
  1555261956,
  3268935591,
  3050360625,
  752459403,
  1541320221,
  2607071920,
  3965973030,
  1969922972,
  40735498,
  2617837225,
  3943577151,
  1913087877,
  83908371,
  2512341634,
  3803740692,
  2075208622,
  213261112,
  2463272603,
  3855990285,
  2094854071,
  198958881,
  2262029012,
  4057260610,
  1759359992,
  534414190,
  2176718541,
  4139329115,
  1873836001,
  414664567,
  2282248934,
  4279200368,
  1711684554,
  285281116,
  2405801727,
  4167216745,
  1634467795,
  376229701,
  2685067896,
  3608007406,
  1308918612,
  956543938,
  2808555105,
  3495958263,
  1231636301,
  1047427035,
  2932959818,
  3654703836,
  1088359270,
  936918e3,
  2847714899,
  3736837829,
  1202900863,
  817233897,
  3183342108,
  3401237130,
  1404277552,
  615818150,
  3134207493,
  3453421203,
  1423857449,
  601450431,
  3009837614,
  3294710456,
  1567103746,
  711928724,
  3020668471,
  3272380065,
  1510334235,
  755167117
], Jp = sl(Zp);
const Qp = () => Yp, il = (e, t) => {
  switch (e) {
    case pt.MD5:
      return t.md5;
    case pt.CRC32:
      return Qp();
    case pt.CRC32C:
      return Gp;
    case pt.CRC64NVME:
      throw new Error(`Please check whether you have installed the "@aws-sdk/crc64-nvme-crt" package explicitly. 
You must also register the package by calling [require("@aws-sdk/crc64-nvme-crt");] or an ESM equivalent such as [import "@aws-sdk/crc64-nvme-crt";]. 
For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
    case pt.SHA1:
      return t.sha1;
    case pt.SHA256:
      return t.sha256;
    default:
      throw new Error(`Unsupported checksum algorithm: ${e}`);
  }
}, ol = (e, t) => {
  const n = new e();
  return n.update(nr(t || "")), n.digest();
}, eg = {
  name: "flexibleChecksumsMiddleware",
  step: "build",
  tags: ["BODY_CHECKSUM"],
  override: !0
}, tg = (e, t) => (n, r) => async (i) => {
  if (!Nt.isInstance(i.request) || Kp("x-amz-checksum-", i.request.headers))
    return n(i);
  const { request: c, input: a } = i, { body: u, headers: p } = c, { base64Encoder: d, streamHasher: f } = e, { requestChecksumRequired: v, requestAlgorithmMember: y } = t, A = await e.requestChecksumCalculation(), U = y == null ? void 0 : y.name, z = y == null ? void 0 : y.httpHeader;
  U && !a[U] && (A === tr.WHEN_SUPPORTED || v) && (a[U] = Ti, z && (p[z] = Ti));
  const K = Hp(a, {
    requestChecksumRequired: v,
    requestAlgorithmMember: y == null ? void 0 : y.name,
    requestChecksumCalculation: A
  });
  let R = u, B = p;
  if (K) {
    switch (K) {
      case pt.CRC32:
        kt(r, "FLEXIBLE_CHECKSUMS_REQ_CRC32", "U");
        break;
      case pt.CRC32C:
        kt(r, "FLEXIBLE_CHECKSUMS_REQ_CRC32C", "V");
        break;
      case pt.CRC64NVME:
        kt(r, "FLEXIBLE_CHECKSUMS_REQ_CRC64", "W");
        break;
      case pt.SHA1:
        kt(r, "FLEXIBLE_CHECKSUMS_REQ_SHA1", "X");
        break;
      case pt.SHA256:
        kt(r, "FLEXIBLE_CHECKSUMS_REQ_SHA256", "Y");
        break;
    }
    const O = to(K), j = il(K, e);
    if (tl(u)) {
      const { getAwsChunkedEncodingStream: k, bodyLengthChecker: X } = e;
      R = k(typeof e.requestStreamBufferSize == "number" && e.requestStreamBufferSize >= 8 * 1024 ? Wf(u, e.requestStreamBufferSize, r.logger) : u, {
        base64Encoder: d,
        bodyLengthChecker: X,
        checksumLocationName: O,
        checksumAlgorithmFn: j,
        streamHasher: f
      }), B = {
        ...p,
        "content-encoding": p["content-encoding"] ? `${p["content-encoding"]},aws-chunked` : "aws-chunked",
        "transfer-encoding": "chunked",
        "x-amz-decoded-content-length": p["content-length"],
        "x-amz-content-sha256": "STREAMING-UNSIGNED-PAYLOAD-TRAILER",
        "x-amz-trailer": O
      }, delete B["content-length"];
    } else if (!zp(O, p)) {
      const k = await ol(j, u);
      B = {
        ...p,
        [O]: d(k)
      };
    }
  }
  return await n({
    ...i,
    request: {
      ...c,
      headers: B,
      body: R
    }
  });
}, ng = {
  name: "flexibleChecksumsInputMiddleware",
  toMiddleware: "serializerMiddleware",
  relation: "before",
  tags: ["BODY_CHECKSUM"],
  override: !0
}, rg = (e, t) => (n, r) => async (i) => {
  const c = i.input, { requestValidationModeMember: a } = t, u = await e.requestChecksumCalculation(), p = await e.responseChecksumValidation();
  switch (u) {
    case tr.WHEN_REQUIRED:
      kt(r, "FLEXIBLE_CHECKSUMS_REQ_WHEN_REQUIRED", "a");
      break;
    case tr.WHEN_SUPPORTED:
      kt(r, "FLEXIBLE_CHECKSUMS_REQ_WHEN_SUPPORTED", "Z");
      break;
  }
  switch (p) {
    case Cs.WHEN_REQUIRED:
      kt(r, "FLEXIBLE_CHECKSUMS_RES_WHEN_REQUIRED", "c");
      break;
    case Cs.WHEN_SUPPORTED:
      kt(r, "FLEXIBLE_CHECKSUMS_RES_WHEN_SUPPORTED", "b");
      break;
  }
  return c[a] || p === Cs.WHEN_SUPPORTED && (c[a] = "ENABLED"), n(i);
}, al = (e = []) => {
  const t = [];
  for (const n of $p)
    !e.includes(n) || !Di.includes(n) || t.push(n);
  return t;
}, sg = (e) => {
  const t = e.lastIndexOf("-");
  if (t !== -1) {
    const n = e.slice(t + 1);
    if (!n.startsWith("0")) {
      const r = parseInt(n, 10);
      if (!isNaN(r) && r >= 1 && r <= 1e4)
        return !0;
    }
  }
  return !1;
}, ig = async (e, { checksumAlgorithmFn: t, base64Encoder: n }) => n(await ol(t, e)), og = async (e, { config: t, responseAlgorithms: n, logger: r }) => {
  const i = al(n), { body: c, headers: a } = e;
  for (const u of i) {
    const p = to(u), d = a[p];
    if (d) {
      let f;
      try {
        f = il(u, t);
      } catch (A) {
        if (u === pt.CRC64NVME) {
          r == null || r.warn(`Skipping ${pt.CRC64NVME} checksum validation: ${A.message}`);
          continue;
        }
        throw A;
      }
      const { base64Encoder: v } = t;
      if (tl(c)) {
        e.body = qf({
          expectedChecksum: d,
          checksumSourceLocation: p,
          checksum: new f(),
          source: c,
          base64Encoder: v
        });
        return;
      }
      const y = await ig(c, { checksumAlgorithmFn: f, base64Encoder: v });
      if (y === d)
        break;
      throw new Error(`Checksum mismatch: expected "${y}" but received "${d}" in response header "${p}".`);
    }
  }
}, ag = {
  name: "flexibleChecksumsResponseMiddleware",
  toMiddleware: "deserializerMiddleware",
  relation: "after",
  tags: ["BODY_CHECKSUM"],
  override: !0
}, cg = (e, t) => (n, r) => async (i) => {
  if (!Nt.isInstance(i.request))
    return n(i);
  const c = i.input, a = await n(i), u = a.response, { requestValidationModeMember: p, responseAlgorithms: d } = t;
  if (c[p] === "ENABLED") {
    const { clientName: f, commandName: v } = r;
    if (f === "S3Client" && v === "GetObjectCommand" && al(d).every((A) => {
      const U = to(A), z = u.headers[U];
      return !z || sg(z);
    }))
      return a;
    await og(u, {
      config: e,
      responseAlgorithms: d,
      logger: r.logger
    });
  }
  return a;
}, ug = (e, t) => ({
  applyToStack: (n) => {
    n.add(tg(e, t), eg), n.addRelativeTo(rg(e, t), ng), n.addRelativeTo(cg(e, t), ag);
  }
}), lg = (e) => {
  const { requestChecksumCalculation: t, responseChecksumValidation: n, requestStreamBufferSize: r } = e;
  return Object.assign(e, {
    requestChecksumCalculation: bn(t ?? Sf),
    responseChecksumValidation: bn(n ?? Af),
    requestStreamBufferSize: Number(r ?? 0)
  });
};
const dg = (e) => (t) => async (n) => {
  if (!Nt.isInstance(n.request))
    return t(n);
  const { request: r } = n, { handlerProtocol: i = "" } = e.requestHandler.metadata || {};
  if (i.indexOf("h2") >= 0 && !r.headers[":authority"])
    delete r.headers.host, r.headers[":authority"] = r.hostname + (r.port ? ":" + r.port : "");
  else if (!r.headers.host) {
    let c = r.hostname;
    r.port != null && (c += `:${r.port}`), r.headers.host = c;
  }
  return t(n);
}, fg = {
  name: "hostHeaderMiddleware",
  step: "build",
  priority: "low",
  tags: ["HOST"],
  override: !0
}, hg = (e) => ({
  applyToStack: (t) => {
    t.add(dg(e), fg);
  }
}), pg = () => (e, t) => async (n) => {
  var r, i;
  try {
    const c = await e(n), { clientName: a, commandName: u, logger: p, dynamoDbDocumentClientOptions: d = {} } = t, { overrideInputFilterSensitiveLog: f, overrideOutputFilterSensitiveLog: v } = d, y = f ?? t.inputFilterSensitiveLog, A = v ?? t.outputFilterSensitiveLog, { $metadata: U, ...z } = c.output;
    return (r = p == null ? void 0 : p.info) == null || r.call(p, {
      clientName: a,
      commandName: u,
      input: y(n.input),
      output: A(z),
      metadata: U
    }), c;
  } catch (c) {
    const { clientName: a, commandName: u, logger: p, dynamoDbDocumentClientOptions: d = {} } = t, { overrideInputFilterSensitiveLog: f } = d, v = f ?? t.inputFilterSensitiveLog;
    throw (i = p == null ? void 0 : p.error) == null || i.call(p, {
      clientName: a,
      commandName: u,
      input: v(n.input),
      error: c,
      metadata: c.$metadata
    }), c;
  }
}, gg = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "initialize",
  override: !0
}, mg = (e) => ({
  applyToStack: (t) => {
    t.add(pg(), gg);
  }
}), Gs = "X-Amzn-Trace-Id", yg = "AWS_LAMBDA_FUNCTION_NAME", bg = "_X_AMZN_TRACE_ID", vg = (e) => (t) => async (n) => {
  const { request: r } = n;
  if (!Nt.isInstance(r) || e.runtime !== "node")
    return t(n);
  const i = Object.keys(r.headers ?? {}).find((p) => p.toLowerCase() === Gs.toLowerCase()) ?? Gs;
  if (r.headers.hasOwnProperty(i))
    return t(n);
  const c = process.env[yg], a = process.env[bg], u = (p) => typeof p == "string" && p.length > 0;
  return u(c) && u(a) && (r.headers[Gs] = a), t({
    ...n,
    request: r
  });
}, wg = {
  step: "build",
  tags: ["RECURSION_DETECTION"],
  name: "recursionDetectionMiddleware",
  override: !0,
  priority: "low"
}, xg = (e) => ({
  applyToStack: (t) => {
    t.add(vg(e), wg);
  }
}), Eg = (e) => (t, n) => async (r) => {
  const i = await e.region(), c = e.region;
  let a = () => {
  };
  n.__s3RegionRedirect && (Object.defineProperty(e, "region", {
    writable: !1,
    value: async () => n.__s3RegionRedirect
  }), a = () => Object.defineProperty(e, "region", {
    writable: !0,
    value: c
  }));
  try {
    const u = await t(r);
    if (n.__s3RegionRedirect) {
      a();
      const p = await e.region();
      if (i !== p)
        throw new Error("Region was not restored following S3 region redirect.");
    }
    return u;
  } catch (u) {
    throw a(), u;
  }
}, Sg = {
  tags: ["REGION_REDIRECT", "S3"],
  name: "regionRedirectEndpointMiddleware",
  override: !0,
  relation: "before",
  toMiddleware: "endpointV2Middleware"
};
function Ag(e) {
  return (t, n) => async (r) => {
    var i, c, a;
    try {
      return await t(r);
    } catch (u) {
      if (e.followRegionRedirects && (((i = u == null ? void 0 : u.$metadata) == null ? void 0 : i.httpStatusCode) === 301 || ((c = u == null ? void 0 : u.$metadata) == null ? void 0 : c.httpStatusCode) === 400 && (u == null ? void 0 : u.name) === "IllegalLocationConstraintException")) {
        try {
          const p = u.$response.headers["x-amz-bucket-region"];
          (a = n.logger) == null || a.debug(`Redirecting from ${await e.region()} to ${p}`), n.__s3RegionRedirect = p;
        } catch (p) {
          throw new Error("Region redirect failed: " + p);
        }
        return t(r);
      }
      throw u;
    }
  };
}
const Cg = {
  step: "initialize",
  tags: ["REGION_REDIRECT", "S3"],
  name: "regionRedirectMiddleware",
  override: !0
}, Rg = (e) => ({
  applyToStack: (t) => {
    t.add(Ag(e), Cg), t.addRelativeTo(Eg(e), Sg);
  }
}), kg = (e) => (t, n) => async (r) => {
  var a;
  const i = await t(r), { response: c } = i;
  if (zn.isInstance(c) && c.headers.expires) {
    c.headers.expiresstring = c.headers.expires;
    try {
      Bi(c.headers.expires);
    } catch (u) {
      (a = n.logger) == null || a.warn(`AWS SDK Warning for ${n.clientName}::${n.commandName} response parsing (${c.headers.expires}): ${u}`), delete c.headers.expires;
    }
  }
  return i;
}, Tg = {
  tags: ["S3"],
  name: "s3ExpiresMiddleware",
  override: !0,
  relation: "after",
  toMiddleware: "deserializerMiddleware"
}, _g = (e) => ({
  applyToStack: (t) => {
    t.addRelativeTo(kg(), Tg);
  }
}), ps = class ps {
  constructor(t = {}) {
    Ke(this, "data");
    Ke(this, "lastPurgeTime", Date.now());
    this.data = t;
  }
  get(t) {
    const n = this.data[t];
    if (n)
      return n;
  }
  set(t, n) {
    return this.data[t] = n, n;
  }
  delete(t) {
    delete this.data[t];
  }
  async purgeExpired() {
    const t = Date.now();
    if (!(this.lastPurgeTime + ps.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS > t))
      for (const n in this.data) {
        const r = this.data[n];
        if (!r.isRefreshing) {
          const i = await r.identity;
          i.expiration && i.expiration.getTime() < t && delete this.data[n];
        }
      }
  }
};
Ke(ps, "EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS", 3e4);
let Fi = ps;
class Ws {
  constructor(t, n = !1, r = Date.now()) {
    Ke(this, "_identity");
    Ke(this, "isRefreshing");
    Ke(this, "accessed");
    this._identity = t, this.isRefreshing = n, this.accessed = r;
  }
  get identity() {
    return this.accessed = Date.now(), this._identity;
  }
}
const gs = class gs {
  constructor(t, n = new Fi()) {
    Ke(this, "createSessionFn");
    Ke(this, "cache");
    this.createSessionFn = t, this.cache = n;
  }
  async getS3ExpressIdentity(t, n) {
    const r = n.Bucket, { cache: i } = this, c = i.get(r);
    return c ? c.identity.then((a) => {
      var d, f;
      return (((d = a.expiration) == null ? void 0 : d.getTime()) ?? 0) < Date.now() ? i.set(r, new Ws(this.getIdentity(r))).identity : ((((f = a.expiration) == null ? void 0 : f.getTime()) ?? 0) < Date.now() + gs.REFRESH_WINDOW_MS && !c.isRefreshing && (c.isRefreshing = !0, this.getIdentity(r).then((v) => {
        i.set(r, new Ws(Promise.resolve(v)));
      })), a);
    }) : i.set(r, new Ws(this.getIdentity(r))).identity;
  }
  async getIdentity(t) {
    var i, c;
    await this.cache.purgeExpired().catch((a) => {
      console.warn(`Error while clearing expired entries in S3ExpressIdentityCache: 
` + a);
    });
    const n = await this.createSessionFn(t);
    if (!((i = n.Credentials) != null && i.AccessKeyId) || !((c = n.Credentials) != null && c.SecretAccessKey))
      throw new Error("s3#createSession response credential missing AccessKeyId or SecretAccessKey.");
    return {
      accessKeyId: n.Credentials.AccessKeyId,
      secretAccessKey: n.Credentials.SecretAccessKey,
      sessionToken: n.Credentials.SessionToken,
      expiration: n.Credentials.Expiration ? new Date(n.Credentials.Expiration) : void 0
    };
  }
};
Ke(gs, "REFRESH_WINDOW_MS", 6e4);
let ji = gs;
var Ca;
(function(e) {
  e.ENV = "env", e.CONFIG = "shared config entry";
})(Ca || (Ca = {}));
const Og = "Directory", Ig = "S3Express", Ng = "sigv4-s3express", Li = "X-Amz-S3session-Token", Ui = Li.toLowerCase();
class Pg extends Ni {
  async signWithCredentials(t, n, r) {
    const i = Ra(n);
    t.headers[Ui] = n.sessionToken;
    const c = this;
    return ka(c, i), c.signRequest(t, r ?? {});
  }
  async presignWithCredentials(t, n, r) {
    const i = Ra(n);
    return delete t.headers[Ui], t.headers[Li] = n.sessionToken, t.query = t.query ?? {}, t.query[Li] = n.sessionToken, ka(this, i), this.presign(t, r);
  }
}
function Ra(e) {
  return {
    accessKeyId: e.accessKeyId,
    secretAccessKey: e.secretAccessKey,
    expiration: e.expiration
  };
}
function ka(e, t) {
  const n = setTimeout(() => {
    throw new Error("SignatureV4S3Express credential override was created but not called.");
  }, 10), r = e.credentialProvider, i = () => (clearTimeout(n), e.credentialProvider = r, Promise.resolve(t));
  e.credentialProvider = i;
}
const Mg = (e) => (t, n) => async (r) => {
  var i, c, a, u, p;
  if (n.endpointV2) {
    const d = n.endpointV2, f = ((a = (c = (i = d.properties) == null ? void 0 : i.authSchemes) == null ? void 0 : c[0]) == null ? void 0 : a.name) === Ng;
    if ((((u = d.properties) == null ? void 0 : u.backend) === Ig || ((p = d.properties) == null ? void 0 : p.bucketType) === Og) && (kt(n, "S3_EXPRESS_BUCKET", "J"), n.isS3ExpressBucket = !0), f) {
      const y = r.input.Bucket;
      if (y) {
        const A = await e.s3ExpressIdentityProvider.getS3ExpressIdentity(await e.credentials(), {
          Bucket: y
        });
        n.s3ExpressIdentity = A, Nt.isInstance(r.request) && A.sessionToken && (r.request.headers[Ui] = A.sessionToken);
      }
    }
  }
  return t(r);
}, Bg = {
  name: "s3ExpressMiddleware",
  step: "build",
  tags: ["S3", "S3_EXPRESS"],
  override: !0
}, Dg = (e) => ({
  applyToStack: (t) => {
    t.add(Mg(e), Bg);
  }
}), Fg = async (e, t, n, r) => {
  const i = await r.signWithCredentials(n, e, {});
  if (i.headers["X-Amz-Security-Token"] || i.headers["x-amz-security-token"])
    throw new Error("X-Amz-Security-Token must not be set for s3-express requests.");
  return i;
}, jg = (e) => (t) => {
  throw t;
}, Lg = (e, t) => {
}, Ug = (e) => (t, n) => async (r) => {
  if (!Nt.isInstance(r.request))
    return t(r);
  const c = or(n).selectedHttpAuthScheme;
  if (!c)
    throw new Error("No HttpAuthScheme was selected: unable to sign request");
  const { httpAuthOption: { signingProperties: a = {} }, identity: u, signer: p } = c;
  let d;
  n.s3ExpressIdentity ? d = await Fg(n.s3ExpressIdentity, a, r.request, await e.signer()) : d = await p.sign(r.request, u, a);
  const f = await t({
    ...r,
    request: d
  }).catch((p.errorHandler || jg)(a));
  return (p.successHandler || Lg)(f.response, a), f;
}, $g = (e) => ({
  applyToStack: (t) => {
    t.addRelativeTo(Ug(e), Mu);
  }
}), Hg = (e, { session: t }) => {
  const [n, r] = t, { forcePathStyle: i, useAccelerateEndpoint: c, disableMultiregionAccessPoints: a, followRegionRedirects: u, s3ExpressIdentityProvider: p, bucketEndpoint: d } = e;
  return Object.assign(e, {
    forcePathStyle: i ?? !1,
    useAccelerateEndpoint: c ?? !1,
    disableMultiregionAccessPoints: a ?? !1,
    followRegionRedirects: u ?? !1,
    s3ExpressIdentityProvider: p ?? new ji(async (f) => n().send(new r({
      Bucket: f
    }))),
    bucketEndpoint: d ?? !1
  });
}, zg = {
  CopyObjectCommand: !0,
  UploadPartCopyCommand: !0,
  CompleteMultipartUploadCommand: !0
}, Kg = 3e3, qg = (e) => (t, n) => async (r) => {
  const i = await t(r), { response: c } = i;
  if (!zn.isInstance(c))
    return i;
  const { statusCode: a, body: u } = c;
  if (a < 200 || a >= 300 || !(typeof (u == null ? void 0 : u.stream) == "function" || typeof (u == null ? void 0 : u.pipe) == "function" || typeof (u == null ? void 0 : u.tee) == "function"))
    return i;
  let d = u, f = u;
  u && typeof u == "object" && !(u instanceof Uint8Array) && ([d, f] = await oh(u)), c.body = f;
  const v = await Vg(d, {
    streamCollector: async (A) => Jf(A, Kg)
  });
  typeof (d == null ? void 0 : d.destroy) == "function" && d.destroy();
  const y = e.utf8Encoder(v.subarray(v.length - 16));
  if (v.length === 0 && zg[n.commandName]) {
    const A = new Error("S3 aborted request");
    throw A.name = "InternalError", A;
  }
  return y && y.endsWith("</Error>") && (c.statusCode = 400), i;
}, Vg = (e = new Uint8Array(), t) => e instanceof Uint8Array ? Promise.resolve(e) : t.streamCollector(e) || Promise.resolve(new Uint8Array()), Gg = {
  relation: "after",
  toMiddleware: "deserializerMiddleware",
  tags: ["THROW_200_EXCEPTIONS", "S3"],
  name: "throw200ExceptionsMiddleware",
  override: !0
}, Wg = (e) => ({
  applyToStack: (t) => {
    t.addRelativeTo(qg(e), Gg);
  }
}), Xg = (e) => typeof e == "string" && e.indexOf("arn:") === 0 && e.split(":").length >= 6;
function Yg(e) {
  return (t, n) => async (r) => {
    var i, c, a, u;
    if (e.bucketEndpoint) {
      const p = n.endpointV2;
      if (p) {
        const d = r.input.Bucket;
        if (typeof d == "string")
          try {
            const f = new URL(d);
            n.endpointV2 = {
              ...p,
              url: f
            };
          } catch (f) {
            const v = `@aws-sdk/middleware-sdk-s3: bucketEndpoint=true was set but Bucket=${d} could not be parsed as URL.`;
            throw ((c = (i = n.logger) == null ? void 0 : i.constructor) == null ? void 0 : c.name) === "NoOpLogger" ? console.warn(v) : (u = (a = n.logger) == null ? void 0 : a.warn) == null || u.call(a, v), f;
          }
      }
    }
    return t(r);
  };
}
const Zg = {
  name: "bucketEndpointMiddleware",
  override: !0,
  relation: "after",
  toMiddleware: "endpointV2Middleware"
};
function Jg({ bucketEndpoint: e }) {
  return (t) => async (n) => {
    const { input: { Bucket: r } } = n;
    if (!e && typeof r == "string" && !Xg(r) && r.indexOf("/") >= 0) {
      const i = new Error(`Bucket name shouldn't contain '/', received '${r}'`);
      throw i.name = "InvalidBucketName", i;
    }
    return t({ ...n });
  };
}
const Qg = {
  step: "initialize",
  tags: ["VALIDATE_BUCKET_NAME"],
  name: "validateBucketNameMiddleware",
  override: !0
}, em = (e) => ({
  applyToStack: (t) => {
    t.add(Jg(e), Qg), t.addRelativeTo(Yg(e), Zg);
  }
}), tm = void 0;
function nm(e) {
  return e === void 0 ? !0 : typeof e == "string" && e.length <= 50;
}
function rm(e) {
  const t = Jn(e.userAgentAppId ?? tm), { customUserAgent: n } = e;
  return Object.assign(e, {
    customUserAgent: typeof n == "string" ? [[n]] : n,
    userAgentAppId: async () => {
      var i, c;
      const r = await t();
      if (!nm(r)) {
        const a = ((c = (i = e.logger) == null ? void 0 : i.constructor) == null ? void 0 : c.name) === "NoOpLogger" || !e.logger ? console : e.logger;
        typeof r != "string" ? a == null || a.warn("userAgentAppId must be a string or undefined.") : r.length > 50 && (a == null || a.warn("The provided userAgentAppId exceeds the maximum length of 50 characters."));
      }
      return r;
    }
  });
}
class sm {
  constructor({ size: t, params: n }) {
    this.data = /* @__PURE__ */ new Map(), this.parameters = [], this.capacity = t ?? 50, n && (this.parameters = n);
  }
  get(t, n) {
    const r = this.hash(t);
    if (r === !1)
      return n();
    if (!this.data.has(r)) {
      if (this.data.size > this.capacity + 10) {
        const i = this.data.keys();
        let c = 0;
        for (; ; ) {
          const { value: a, done: u } = i.next();
          if (this.data.delete(a), u || ++c > 10)
            break;
        }
      }
      this.data.set(r, n());
    }
    return this.data.get(r);
  }
  size() {
    return this.data.size;
  }
  hash(t) {
    let n = "";
    const { parameters: r } = this;
    if (r.length === 0)
      return !1;
    for (const i of r) {
      const c = String(t[i] ?? "");
      if (c.includes("|;"))
        return !1;
      n += c + "|;";
    }
    return n;
  }
}
const im = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"), cl = (e) => im.test(e) || e.startsWith("[") && e.endsWith("]"), om = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"), so = (e, t = !1) => {
  if (!t)
    return om.test(e);
  const n = e.split(".");
  for (const r of n)
    if (!so(r))
      return !1;
  return !0;
}, is = {}, _r = "endpoints";
function Dn(e) {
  return typeof e != "object" || e == null ? e : "ref" in e ? `$${Dn(e.ref)}` : "fn" in e ? `${e.fn}(${(e.argv || []).map(Dn).join(", ")})` : JSON.stringify(e, null, 2);
}
class fn extends Error {
  constructor(t) {
    super(t), this.name = "EndpointError";
  }
}
const am = (e, t) => e === t, cm = (e) => {
  const t = e.split("."), n = [];
  for (const r of t) {
    const i = r.indexOf("[");
    if (i !== -1) {
      if (r.indexOf("]") !== r.length - 1)
        throw new fn(`Path: '${e}' does not end with ']'`);
      const c = r.slice(i + 1, -1);
      if (Number.isNaN(parseInt(c)))
        throw new fn(`Invalid array index: '${c}' in path: '${e}'`);
      i !== 0 && n.push(r.slice(0, i)), n.push(c);
    } else
      n.push(r);
  }
  return n;
}, ul = (e, t) => cm(t).reduce((n, r) => {
  if (typeof n != "object")
    throw new fn(`Index '${r}' in '${t}' not found in '${JSON.stringify(e)}'`);
  return Array.isArray(n) ? n[parseInt(r)] : n[r];
}, e), um = (e) => e != null, lm = (e) => !e, Xs = {
  [Rr.HTTP]: 80,
  [Rr.HTTPS]: 443
}, dm = (e) => {
  const t = (() => {
    try {
      if (e instanceof URL)
        return e;
      if (typeof e == "object" && "hostname" in e) {
        const { hostname: y, port: A, protocol: U = "", path: z = "", query: K = {} } = e, R = new URL(`${U}//${y}${A ? `:${A}` : ""}${z}`);
        return R.search = Object.entries(K).map(([B, q]) => `${B}=${q}`).join("&"), R;
      }
      return new URL(e);
    } catch {
      return null;
    }
  })();
  if (!t)
    return console.error(`Unable to parse ${JSON.stringify(e)} as a whatwg URL.`), null;
  const n = t.href, { host: r, hostname: i, pathname: c, protocol: a, search: u } = t;
  if (u)
    return null;
  const p = a.slice(0, -1);
  if (!Object.values(Rr).includes(p))
    return null;
  const d = cl(i), f = n.includes(`${r}:${Xs[p]}`) || typeof e == "string" && e.includes(`${r}:${Xs[p]}`), v = `${r}${f ? `:${Xs[p]}` : ""}`;
  return {
    scheme: p,
    authority: v,
    path: c,
    normalizedPath: c.endsWith("/") ? c : `${c}/`,
    isIp: d
  };
}, fm = (e, t) => e === t, hm = (e, t, n, r) => t >= n || e.length < n ? null : r ? e.substring(e.length - n, e.length - t) : e.substring(t, n), pm = (e) => encodeURIComponent(e).replace(/[!*'()]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), gm = {
  booleanEquals: am,
  getAttr: ul,
  isSet: um,
  isValidHostLabel: so,
  not: lm,
  parseURL: dm,
  stringEquals: fm,
  substring: hm,
  uriEncode: pm
}, ll = (e, t) => {
  const n = [], r = {
    ...t.endpointParams,
    ...t.referenceRecord
  };
  let i = 0;
  for (; i < e.length; ) {
    const c = e.indexOf("{", i);
    if (c === -1) {
      n.push(e.slice(i));
      break;
    }
    n.push(e.slice(i, c));
    const a = e.indexOf("}", c);
    if (a === -1) {
      n.push(e.slice(c));
      break;
    }
    e[c + 1] === "{" && e[a + 1] === "}" && (n.push(e.slice(c + 1, a)), i = a + 2);
    const u = e.substring(c + 1, a);
    if (u.includes("#")) {
      const [p, d] = u.split("#");
      n.push(ul(r[p], d));
    } else
      n.push(r[u]);
    i = a + 1;
  }
  return n.join("");
}, mm = ({ ref: e }, t) => ({
  ...t.endpointParams,
  ...t.referenceRecord
})[e], ws = (e, t, n) => {
  if (typeof e == "string")
    return ll(e, n);
  if (e.fn)
    return dl(e, n);
  if (e.ref)
    return mm(e, n);
  throw new fn(`'${t}': ${String(e)} is not a string, function or reference.`);
}, dl = ({ fn: e, argv: t }, n) => {
  const r = t.map((c) => ["boolean", "number"].includes(typeof c) ? c : ws(c, "arg", n)), i = e.split(".");
  return i[0] in is && i[1] != null ? is[i[0]][i[1]](...r) : gm[e](...r);
}, ym = ({ assign: e, ...t }, n) => {
  var i, c;
  if (e && e in n.referenceRecord)
    throw new fn(`'${e}' is already defined in Reference Record.`);
  const r = dl(t, n);
  return (c = (i = n.logger) == null ? void 0 : i.debug) == null || c.call(i, `${_r} evaluateCondition: ${Dn(t)} = ${Dn(r)}`), {
    result: r === "" ? !0 : !!r,
    ...e != null && { toAssign: { name: e, value: r } }
  };
}, io = (e = [], t) => {
  var r, i;
  const n = {};
  for (const c of e) {
    const { result: a, toAssign: u } = ym(c, {
      ...t,
      referenceRecord: {
        ...t.referenceRecord,
        ...n
      }
    });
    if (!a)
      return { result: a };
    u && (n[u.name] = u.value, (i = (r = t.logger) == null ? void 0 : r.debug) == null || i.call(r, `${_r} assign: ${u.name} := ${Dn(u.value)}`));
  }
  return { result: !0, referenceRecord: n };
}, bm = (e, t) => Object.entries(e).reduce((n, [r, i]) => ({
  ...n,
  [r]: i.map((c) => {
    const a = ws(c, "Header value entry", t);
    if (typeof a != "string")
      throw new fn(`Header '${r}' value '${a}' is not a string`);
    return a;
  })
}), {}), fl = (e, t) => {
  if (Array.isArray(e))
    return e.map((n) => fl(n, t));
  switch (typeof e) {
    case "string":
      return ll(e, t);
    case "object":
      if (e === null)
        throw new fn(`Unexpected endpoint property: ${e}`);
      return hl(e, t);
    case "boolean":
      return e;
    default:
      throw new fn(`Unexpected endpoint property type: ${typeof e}`);
  }
}, hl = (e, t) => Object.entries(e).reduce((n, [r, i]) => ({
  ...n,
  [r]: fl(i, t)
}), {}), vm = (e, t) => {
  const n = ws(e, "Endpoint URL", t);
  if (typeof n == "string")
    try {
      return new URL(n);
    } catch (r) {
      throw console.error(`Failed to construct URL with ${n}`, r), r;
    }
  throw new fn(`Endpoint URL must be a string, got ${typeof n}`);
}, wm = (e, t) => {
  var f, v;
  const { conditions: n, endpoint: r } = e, { result: i, referenceRecord: c } = io(n, t);
  if (!i)
    return;
  const a = {
    ...t,
    referenceRecord: { ...t.referenceRecord, ...c }
  }, { url: u, properties: p, headers: d } = r;
  return (v = (f = t.logger) == null ? void 0 : f.debug) == null || v.call(f, `${_r} Resolving endpoint from template: ${Dn(r)}`), {
    ...d != null && {
      headers: bm(d, a)
    },
    ...p != null && {
      properties: hl(p, a)
    },
    url: vm(u, a)
  };
}, xm = (e, t) => {
  const { conditions: n, error: r } = e, { result: i, referenceRecord: c } = io(n, t);
  if (i)
    throw new fn(ws(r, "Error", {
      ...t,
      referenceRecord: { ...t.referenceRecord, ...c }
    }));
}, Em = (e, t) => {
  const { conditions: n, rules: r } = e, { result: i, referenceRecord: c } = io(n, t);
  if (i)
    return pl(r, {
      ...t,
      referenceRecord: { ...t.referenceRecord, ...c }
    });
}, pl = (e, t) => {
  for (const n of e)
    if (n.type === "endpoint") {
      const r = wm(n, t);
      if (r)
        return r;
    } else if (n.type === "error")
      xm(n, t);
    else if (n.type === "tree") {
      const r = Em(n, t);
      if (r)
        return r;
    } else
      throw new fn(`Unknown endpoint rule: ${n}`);
  throw new fn("Rules evaluation failed");
}, Sm = (e, t) => {
  var d, f, v, y;
  const { endpointParams: n, logger: r } = t, { parameters: i, rules: c } = e;
  (f = (d = t.logger) == null ? void 0 : d.debug) == null || f.call(d, `${_r} Initial EndpointParams: ${Dn(n)}`);
  const a = Object.entries(i).filter(([, A]) => A.default != null).map(([A, U]) => [A, U.default]);
  if (a.length > 0)
    for (const [A, U] of a)
      n[A] = n[A] ?? U;
  const u = Object.entries(i).filter(([, A]) => A.required).map(([A]) => A);
  for (const A of u)
    if (n[A] == null)
      throw new fn(`Missing required parameter: '${A}'`);
  const p = pl(c, { endpointParams: n, logger: r, referenceRecord: {} });
  return (y = (v = t.logger) == null ? void 0 : v.debug) == null || y.call(v, `${_r} Resolved endpoint: ${Dn(p)}`), p;
}, gl = (e, t = !1) => {
  if (t) {
    for (const n of e.split("."))
      if (!gl(n))
        return !1;
    return !0;
  }
  return !(!so(e) || e.length < 3 || e.length > 63 || e !== e.toLowerCase() || cl(e));
}, Ta = ":", Am = "/", Cm = (e) => {
  const t = e.split(Ta);
  if (t.length < 6)
    return null;
  const [n, r, i, c, a, ...u] = t;
  if (n !== "arn" || r === "" || i === "" || u.join(Ta) === "")
    return null;
  const p = u.map((d) => d.split(Am)).flat();
  return {
    partition: r,
    service: i,
    region: c,
    accountId: a,
    resourceId: p
  };
}, Rm = [{ id: "aws", outputs: { dnsSuffix: "amazonaws.com", dualStackDnsSuffix: "api.aws", implicitGlobalRegion: "us-east-1", name: "aws", supportsDualStack: !0, supportsFIPS: !0 }, regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$", regions: { "af-south-1": { description: "Africa (Cape Town)" }, "ap-east-1": { description: "Asia Pacific (Hong Kong)" }, "ap-northeast-1": { description: "Asia Pacific (Tokyo)" }, "ap-northeast-2": { description: "Asia Pacific (Seoul)" }, "ap-northeast-3": { description: "Asia Pacific (Osaka)" }, "ap-south-1": { description: "Asia Pacific (Mumbai)" }, "ap-south-2": { description: "Asia Pacific (Hyderabad)" }, "ap-southeast-1": { description: "Asia Pacific (Singapore)" }, "ap-southeast-2": { description: "Asia Pacific (Sydney)" }, "ap-southeast-3": { description: "Asia Pacific (Jakarta)" }, "ap-southeast-4": { description: "Asia Pacific (Melbourne)" }, "ap-southeast-5": { description: "Asia Pacific (Malaysia)" }, "ap-southeast-7": { description: "Asia Pacific (Thailand)" }, "aws-global": { description: "AWS Standard global region" }, "ca-central-1": { description: "Canada (Central)" }, "ca-west-1": { description: "Canada West (Calgary)" }, "eu-central-1": { description: "Europe (Frankfurt)" }, "eu-central-2": { description: "Europe (Zurich)" }, "eu-north-1": { description: "Europe (Stockholm)" }, "eu-south-1": { description: "Europe (Milan)" }, "eu-south-2": { description: "Europe (Spain)" }, "eu-west-1": { description: "Europe (Ireland)" }, "eu-west-2": { description: "Europe (London)" }, "eu-west-3": { description: "Europe (Paris)" }, "il-central-1": { description: "Israel (Tel Aviv)" }, "me-central-1": { description: "Middle East (UAE)" }, "me-south-1": { description: "Middle East (Bahrain)" }, "mx-central-1": { description: "Mexico (Central)" }, "sa-east-1": { description: "South America (Sao Paulo)" }, "us-east-1": { description: "US East (N. Virginia)" }, "us-east-2": { description: "US East (Ohio)" }, "us-west-1": { description: "US West (N. California)" }, "us-west-2": { description: "US West (Oregon)" } } }, { id: "aws-cn", outputs: { dnsSuffix: "amazonaws.com.cn", dualStackDnsSuffix: "api.amazonwebservices.com.cn", implicitGlobalRegion: "cn-northwest-1", name: "aws-cn", supportsDualStack: !0, supportsFIPS: !0 }, regionRegex: "^cn\\-\\w+\\-\\d+$", regions: { "aws-cn-global": { description: "AWS China global region" }, "cn-north-1": { description: "China (Beijing)" }, "cn-northwest-1": { description: "China (Ningxia)" } } }, { id: "aws-us-gov", outputs: { dnsSuffix: "amazonaws.com", dualStackDnsSuffix: "api.aws", implicitGlobalRegion: "us-gov-west-1", name: "aws-us-gov", supportsDualStack: !0, supportsFIPS: !0 }, regionRegex: "^us\\-gov\\-\\w+\\-\\d+$", regions: { "aws-us-gov-global": { description: "AWS GovCloud (US) global region" }, "us-gov-east-1": { description: "AWS GovCloud (US-East)" }, "us-gov-west-1": { description: "AWS GovCloud (US-West)" } } }, { id: "aws-iso", outputs: { dnsSuffix: "c2s.ic.gov", dualStackDnsSuffix: "c2s.ic.gov", implicitGlobalRegion: "us-iso-east-1", name: "aws-iso", supportsDualStack: !1, supportsFIPS: !0 }, regionRegex: "^us\\-iso\\-\\w+\\-\\d+$", regions: { "aws-iso-global": { description: "AWS ISO (US) global region" }, "us-iso-east-1": { description: "US ISO East" }, "us-iso-west-1": { description: "US ISO WEST" } } }, { id: "aws-iso-b", outputs: { dnsSuffix: "sc2s.sgov.gov", dualStackDnsSuffix: "sc2s.sgov.gov", implicitGlobalRegion: "us-isob-east-1", name: "aws-iso-b", supportsDualStack: !1, supportsFIPS: !0 }, regionRegex: "^us\\-isob\\-\\w+\\-\\d+$", regions: { "aws-iso-b-global": { description: "AWS ISOB (US) global region" }, "us-isob-east-1": { description: "US ISOB East (Ohio)" } } }, { id: "aws-iso-e", outputs: { dnsSuffix: "cloud.adc-e.uk", dualStackDnsSuffix: "cloud.adc-e.uk", implicitGlobalRegion: "eu-isoe-west-1", name: "aws-iso-e", supportsDualStack: !1, supportsFIPS: !0 }, regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$", regions: { "aws-iso-e-global": { description: "AWS ISOE (Europe) global region" }, "eu-isoe-west-1": { description: "EU ISOE West" } } }, { id: "aws-iso-f", outputs: { dnsSuffix: "csp.hci.ic.gov", dualStackDnsSuffix: "csp.hci.ic.gov", implicitGlobalRegion: "us-isof-south-1", name: "aws-iso-f", supportsDualStack: !1, supportsFIPS: !0 }, regionRegex: "^us\\-isof\\-\\w+\\-\\d+$", regions: { "aws-iso-f-global": { description: "AWS ISOF global region" }, "us-isof-east-1": { description: "US ISOF EAST" }, "us-isof-south-1": { description: "US ISOF SOUTH" } } }, { id: "aws-eusc", outputs: { dnsSuffix: "amazonaws.eu", dualStackDnsSuffix: "amazonaws.eu", implicitGlobalRegion: "eusc-de-east-1", name: "aws-eusc", supportsDualStack: !1, supportsFIPS: !0 }, regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$", regions: { "eusc-de-east-1": { description: "EU (Germany)" } } }], km = {
  partitions: Rm
};
let Tm = km;
const _m = (e) => {
  const { partitions: t } = Tm;
  for (const r of t) {
    const { regions: i, outputs: c } = r;
    for (const [a, u] of Object.entries(i))
      if (a === e)
        return {
          ...c,
          ...u
        };
  }
  for (const r of t) {
    const { regionRegex: i, outputs: c } = r;
    if (new RegExp(i).test(e))
      return {
        ...c
      };
  }
  const n = t.find((r) => r.id === "aws");
  if (!n)
    throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
  return {
    ...n.outputs
  };
}, ml = {
  isVirtualHostableS3Bucket: gl,
  parseArn: Cm,
  partition: _m
};
is.aws = ml;
const Om = /\d{12}\.ddb/;
async function Im(e, t, n) {
  var c, a, u, p, d, f, v;
  const r = n.request;
  if (((c = r == null ? void 0 : r.headers) == null ? void 0 : c["smithy-protocol"]) === "rpc-v2-cbor" && kt(e, "PROTOCOL_RPC_V2_CBOR", "M"), typeof t.retryStrategy == "function") {
    const y = await t.retryStrategy();
    typeof y.acquireInitialRetryToken == "function" ? (u = (a = y.constructor) == null ? void 0 : a.name) != null && u.includes("Adaptive") ? kt(e, "RETRY_MODE_ADAPTIVE", "F") : kt(e, "RETRY_MODE_STANDARD", "E") : kt(e, "RETRY_MODE_LEGACY", "D");
  }
  if (typeof t.accountIdEndpointMode == "function") {
    const y = e.endpointV2;
    switch (String((p = y == null ? void 0 : y.url) == null ? void 0 : p.hostname).match(Om) && kt(e, "ACCOUNT_ID_ENDPOINT", "O"), await ((d = t.accountIdEndpointMode) == null ? void 0 : d.call(t))) {
      case "disabled":
        kt(e, "ACCOUNT_ID_MODE_DISABLED", "Q");
        break;
      case "preferred":
        kt(e, "ACCOUNT_ID_MODE_PREFERRED", "P");
        break;
      case "required":
        kt(e, "ACCOUNT_ID_MODE_REQUIRED", "R");
        break;
    }
  }
  const i = (v = (f = e.__smithy_context) == null ? void 0 : f.selectedHttpAuthScheme) == null ? void 0 : v.identity;
  if (i != null && i.$source) {
    const y = i;
    y.accountId && kt(e, "RESOLVED_ACCOUNT_ID", "T");
    for (const [A, U] of Object.entries(y.$source ?? {}))
      kt(e, A, U);
  }
}
const _a = "user-agent", Ys = "x-amz-user-agent", Oa = " ", Zs = "/", Nm = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g, Pm = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g, Ia = "-", Mm = 1024;
function Bm(e) {
  let t = "";
  for (const n in e) {
    const r = e[n];
    if (t.length + r.length + 1 <= Mm) {
      t.length ? t += "," + r : t += r;
      continue;
    }
    break;
  }
  return t;
}
const Dm = (e) => (t, n) => async (r) => {
  var A, U, z, K;
  const { request: i } = r;
  if (!Nt.isInstance(i))
    return t(r);
  const { headers: c } = i, a = ((A = n == null ? void 0 : n.userAgent) == null ? void 0 : A.map(Hr)) || [], u = (await e.defaultUserAgentProvider()).map(Hr);
  await Im(n, e, r);
  const p = n;
  u.push(`m/${Bm(Object.assign({}, (U = n.__smithy_context) == null ? void 0 : U.features, (z = p.__aws_sdk_context) == null ? void 0 : z.features))}`);
  const d = ((K = e == null ? void 0 : e.customUserAgent) == null ? void 0 : K.map(Hr)) || [], f = await e.userAgentAppId();
  f && u.push(Hr([`app/${f}`]));
  const v = [].concat([...u, ...a, ...d]).join(Oa), y = [
    ...u.filter((R) => R.startsWith("aws-sdk-")),
    ...d
  ].join(Oa);
  return e.runtime !== "browser" ? (y && (c[Ys] = c[Ys] ? `${c[_a]} ${y}` : y), c[_a] = v) : c[Ys] = v, t({
    ...r,
    request: i
  });
}, Hr = (e) => {
  var a;
  const t = e[0].split(Zs).map((u) => u.replace(Nm, Ia)).join(Zs), n = (a = e[1]) == null ? void 0 : a.replace(Pm, Ia), r = t.indexOf(Zs), i = t.substring(0, r);
  let c = t.substring(r + 1);
  return i === "api" && (c = c.toLowerCase()), [i, c, n].filter((u) => u && u.length > 0).reduce((u, p, d) => {
    switch (d) {
      case 0:
        return p;
      case 1:
        return `${u}/${p}`;
      default:
        return `${u}#${p}`;
    }
  }, "");
}, Fm = {
  name: "getUserAgentMiddleware",
  step: "build",
  priority: "low",
  tags: ["SET_USER_AGENT", "USER_AGENT"],
  override: !0
}, jm = (e) => ({
  applyToStack: (t) => {
    t.add(Dm(e), Fm);
  }
}), Lm = !1, Um = !1, yl = (e) => typeof e == "string" && (e.startsWith("fips-") || e.endsWith("-fips")), Na = (e) => yl(e) ? ["fips-aws-global", "aws-fips"].includes(e) ? "us-east-1" : e.replace(/fips-(dkr-|prod-)?|-fips/, "") : e, $m = (e) => {
  const { region: t, useFipsEndpoint: n } = e;
  if (!t)
    throw new Error("Region is missing");
  return Object.assign(e, {
    region: async () => {
      if (typeof t == "string")
        return Na(t);
      const r = await t();
      return Na(r);
    },
    useFipsEndpoint: async () => {
      const r = typeof t == "string" ? t : await t();
      return yl(r) ? !0 : typeof n != "function" ? Promise.resolve(!!n) : n();
    }
  });
}, Hm = (e) => Object.assign(e, {
  eventStreamMarshaller: e.eventStreamSerdeProvider(e)
}), Pa = "content-length";
function zm(e) {
  return (t) => async (n) => {
    const r = n.request;
    if (Nt.isInstance(r)) {
      const { body: i, headers: c } = r;
      if (i && Object.keys(c).map((a) => a.toLowerCase()).indexOf(Pa) === -1)
        try {
          const a = e(i);
          r.headers = {
            ...r.headers,
            [Pa]: String(a)
          };
        } catch {
        }
    }
    return t({
      ...n,
      request: r
    });
  };
}
const Km = {
  step: "build",
  tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
  name: "contentLengthMiddleware",
  override: !0
}, qm = (e) => ({
  applyToStack: (t) => {
    t.add(zm(e.bodyLengthChecker), Km);
  }
}), Vm = async (e) => {
  const t = (e == null ? void 0 : e.Bucket) || "";
  if (typeof e.Bucket == "string" && (e.Bucket = t.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"))), Zm(t)) {
    if (e.ForcePathStyle === !0)
      throw new Error("Path-style addressing cannot be used with ARN buckets");
  } else (!Ym(t) || t.indexOf(".") !== -1 && !String(e.Endpoint).startsWith("http:") || t.toLowerCase() !== t || t.length < 3) && (e.ForcePathStyle = !0);
  return e.DisableMultiRegionAccessPoints && (e.disableMultiRegionAccessPoints = !0, e.DisableMRAP = !0), e;
}, Gm = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/, Wm = /(\d+\.){3}\d+/, Xm = /\.\./, Ym = (e) => Gm.test(e) && !Wm.test(e) && !Xm.test(e), Zm = (e) => {
  const [t, n, r, , , i] = e.split(":"), c = t === "arn" && e.split(":").length >= 6, a = !!(c && n && r && i);
  if (c && !a)
    throw new Error(`Invalid ARN: ${e} was an invalid ARN.`);
  return a;
}, Jm = (e, t, n) => {
  const r = async () => {
    const i = n[e] ?? n[t];
    return typeof i == "function" ? i() : i;
  };
  return e === "credentialScope" || t === "CredentialScope" ? async () => {
    const i = typeof n.credentials == "function" ? await n.credentials() : n.credentials;
    return (i == null ? void 0 : i.credentialScope) ?? (i == null ? void 0 : i.CredentialScope);
  } : e === "accountId" || t === "AccountId" ? async () => {
    const i = typeof n.credentials == "function" ? await n.credentials() : n.credentials;
    return (i == null ? void 0 : i.accountId) ?? (i == null ? void 0 : i.AccountId);
  } : e === "endpoint" || t === "endpoint" ? async () => {
    const i = await r();
    if (i && typeof i == "object") {
      if ("url" in i)
        return i.url.href;
      if ("hostname" in i) {
        const { protocol: c, hostname: a, port: u, path: p } = i;
        return `${c}//${a}${u ? ":" + u : ""}${p}`;
      }
    }
    return i;
  } : r;
}, bl = async (e) => {
};
function Qm(e) {
  const t = {};
  if (e = e.replace(/^\?/, ""), e)
    for (const n of e.split("&")) {
      let [r, i = null] = n.split("=");
      r = decodeURIComponent(r), i && (i = decodeURIComponent(i)), r in t ? Array.isArray(t[r]) ? t[r].push(i) : t[r] = [t[r], i] : t[r] = i;
    }
  return t;
}
const os = (e) => {
  if (typeof e == "string")
    return os(new URL(e));
  const { hostname: t, pathname: n, port: r, protocol: i, search: c } = e;
  let a;
  return c && (a = Qm(c)), {
    hostname: t,
    port: r ? parseInt(r) : void 0,
    protocol: i,
    path: n,
    query: a
  };
}, vl = (e) => typeof e == "object" ? "url" in e ? os(e.url) : e : os(e), ey = async (e, t, n, r) => {
  if (!n.endpoint) {
    let a;
    n.serviceConfiguredEndpoint ? a = await n.serviceConfiguredEndpoint() : a = await bl(n.serviceId), a && (n.endpoint = () => Promise.resolve(vl(a)));
  }
  const i = await wl(e, t, n);
  if (typeof n.endpointProvider != "function")
    throw new Error("config.endpointProvider is not set.");
  return n.endpointProvider(i, r);
}, wl = async (e, t, n) => {
  var c;
  const r = {}, i = ((c = t == null ? void 0 : t.getEndpointParameterInstructions) == null ? void 0 : c.call(t)) || {};
  for (const [a, u] of Object.entries(i))
    switch (u.type) {
      case "staticContextParams":
        r[a] = u.value;
        break;
      case "contextParams":
        r[a] = e[u.name];
        break;
      case "clientContextParams":
      case "builtInParams":
        r[a] = await Jm(u.name, a, n)();
        break;
      case "operationContextParams":
        r[a] = u.get(e);
        break;
      default:
        throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(u));
    }
  return Object.keys(i).length === 0 && Object.assign(r, n), String(n.serviceId).toLowerCase() === "s3" && await Vm(r), r;
}, ty = ({ config: e, instructions: t }) => (n, r) => async (i) => {
  var u, p, d;
  e.endpoint && lh(r, "ENDPOINT_OVERRIDE", "N");
  const c = await ey(i.input, {
    getEndpointParameterInstructions() {
      return t;
    }
  }, { ...e }, r);
  r.endpointV2 = c, r.authSchemes = (u = c.properties) == null ? void 0 : u.authSchemes;
  const a = (p = r.authSchemes) == null ? void 0 : p[0];
  if (a) {
    r.signing_region = a.signingRegion, r.signing_service = a.signingName;
    const f = or(r), v = (d = f == null ? void 0 : f.selectedHttpAuthScheme) == null ? void 0 : d.httpAuthOption;
    v && (v.signingProperties = Object.assign(v.signingProperties || {}, {
      signing_region: a.signingRegion,
      signingRegion: a.signingRegion,
      signing_service: a.signingName,
      signingName: a.signingName,
      signingRegionSet: a.signingRegionSet
    }, a.properties));
  }
  return n({
    ...i
  });
}, ny = {
  step: "serialize",
  tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
  name: "endpointV2Middleware",
  override: !0,
  relation: "before",
  toMiddleware: Gi.name
}, xl = (e, t) => ({
  applyToStack: (n) => {
    n.addRelativeTo(ty({
      config: e,
      instructions: t
    }), ny);
  }
}), ry = (e) => {
  const t = e.tls ?? !0, { endpoint: n, useDualstackEndpoint: r, useFipsEndpoint: i } = e, c = n != null ? async () => vl(await bn(n)()) : void 0, u = Object.assign(e, {
    endpoint: c,
    tls: t,
    isCustomEndpoint: !!n,
    useDualstackEndpoint: bn(r ?? !1),
    useFipsEndpoint: bn(i ?? !1)
  });
  let p;
  return u.serviceConfiguredEndpoint = async () => (e.serviceId && !p && (p = bl(e.serviceId)), p), u;
};
var rr;
(function(e) {
  e.STANDARD = "standard", e.ADAPTIVE = "adaptive";
})(rr || (rr = {}));
const as = 3, sy = rr.STANDARD, iy = [
  "BandwidthLimitExceeded",
  "EC2ThrottledException",
  "LimitExceededException",
  "PriorRequestNotComplete",
  "ProvisionedThroughputExceededException",
  "RequestLimitExceeded",
  "RequestThrottled",
  "RequestThrottledException",
  "SlowDown",
  "ThrottledException",
  "Throttling",
  "ThrottlingException",
  "TooManyRequestsException",
  "TransactionInProgressException"
], oy = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"], ay = [500, 502, 503, 504], cy = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"], uy = (e) => {
  var t;
  return (t = e.$metadata) == null ? void 0 : t.clockSkewCorrected;
}, ly = (e) => {
  const t = /* @__PURE__ */ new Set([
    "Failed to fetch",
    "NetworkError when attempting to fetch resource",
    "The Internet connection appears to be offline",
    "Load failed",
    "Network request failed"
  ]);
  return e && e instanceof TypeError ? t.has(e.message) : !1;
}, El = (e) => {
  var t, n;
  return ((t = e.$metadata) == null ? void 0 : t.httpStatusCode) === 429 || iy.includes(e.name) || ((n = e.$retryable) == null ? void 0 : n.throttling) == !0;
}, oo = (e, t = 0) => {
  var n;
  return uy(e) || oy.includes(e.name) || cy.includes((e == null ? void 0 : e.code) || "") || ay.includes(((n = e.$metadata) == null ? void 0 : n.httpStatusCode) || 0) || ly(e) || e.cause !== void 0 && t <= 10 && oo(e.cause, t + 1);
}, dy = (e) => {
  var t;
  if (((t = e.$metadata) == null ? void 0 : t.httpStatusCode) !== void 0) {
    const n = e.$metadata.httpStatusCode;
    return 500 <= n && n <= 599 && !oo(e);
  }
  return !1;
};
class xs {
  constructor(t) {
    this.currentCapacity = 0, this.enabled = !1, this.lastMaxRate = 0, this.measuredTxRate = 0, this.requestCount = 0, this.lastTimestamp = 0, this.timeWindow = 0, this.beta = (t == null ? void 0 : t.beta) ?? 0.7, this.minCapacity = (t == null ? void 0 : t.minCapacity) ?? 1, this.minFillRate = (t == null ? void 0 : t.minFillRate) ?? 0.5, this.scaleConstant = (t == null ? void 0 : t.scaleConstant) ?? 0.4, this.smooth = (t == null ? void 0 : t.smooth) ?? 0.8;
    const n = this.getCurrentTimeInSeconds();
    this.lastThrottleTime = n, this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity;
  }
  getCurrentTimeInSeconds() {
    return Date.now() / 1e3;
  }
  async getSendToken() {
    return this.acquireTokenBucket(1);
  }
  async acquireTokenBucket(t) {
    if (this.enabled) {
      if (this.refillTokenBucket(), t > this.currentCapacity) {
        const n = (t - this.currentCapacity) / this.fillRate * 1e3;
        await new Promise((r) => xs.setTimeoutFn(r, n));
      }
      this.currentCapacity = this.currentCapacity - t;
    }
  }
  refillTokenBucket() {
    const t = this.getCurrentTimeInSeconds();
    if (!this.lastTimestamp) {
      this.lastTimestamp = t;
      return;
    }
    const n = (t - this.lastTimestamp) * this.fillRate;
    this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + n), this.lastTimestamp = t;
  }
  updateClientSendingRate(t) {
    let n;
    if (this.updateMeasuredRate(), El(t)) {
      const i = this.enabled ? Math.min(this.measuredTxRate, this.fillRate) : this.measuredTxRate;
      this.lastMaxRate = i, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), n = this.cubicThrottle(i), this.enableTokenBucket();
    } else
      this.calculateTimeWindow(), n = this.cubicSuccess(this.getCurrentTimeInSeconds());
    const r = Math.min(n, 2 * this.measuredTxRate);
    this.updateTokenBucketRate(r);
  }
  calculateTimeWindow() {
    this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
  }
  cubicThrottle(t) {
    return this.getPrecise(t * this.beta);
  }
  cubicSuccess(t) {
    return this.getPrecise(this.scaleConstant * Math.pow(t - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
  }
  enableTokenBucket() {
    this.enabled = !0;
  }
  updateTokenBucketRate(t) {
    this.refillTokenBucket(), this.fillRate = Math.max(t, this.minFillRate), this.maxCapacity = Math.max(t, this.minCapacity), this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
  }
  updateMeasuredRate() {
    const t = this.getCurrentTimeInSeconds(), n = Math.floor(t * 2) / 2;
    if (this.requestCount++, n > this.lastTxRateBucket) {
      const r = this.requestCount / (n - this.lastTxRateBucket);
      this.measuredTxRate = this.getPrecise(r * this.smooth + this.measuredTxRate * (1 - this.smooth)), this.requestCount = 0, this.lastTxRateBucket = n;
    }
  }
  getPrecise(t) {
    return parseFloat(t.toFixed(8));
  }
}
xs.setTimeoutFn = setTimeout;
const $i = 100, Sl = 20 * 1e3, fy = 500, Ma = 500, hy = 5, py = 10, gy = 1, my = "amz-sdk-invocation-id", yy = "amz-sdk-request", by = () => {
  let e = $i;
  return {
    computeNextBackoffDelay: (r) => Math.floor(Math.min(Sl, Math.random() * 2 ** r * e)),
    setDelayBase: (r) => {
      e = r;
    }
  };
}, Ba = ({ retryDelay: e, retryCount: t, retryCost: n }) => ({
  getRetryCount: () => t,
  getRetryDelay: () => Math.min(Sl, e),
  getRetryCost: () => n
});
class Al {
  constructor(t) {
    this.maxAttempts = t, this.mode = rr.STANDARD, this.capacity = Ma, this.retryBackoffStrategy = by(), this.maxAttemptsProvider = typeof t == "function" ? t : async () => t;
  }
  async acquireInitialRetryToken(t) {
    return Ba({
      retryDelay: $i,
      retryCount: 0
    });
  }
  async refreshRetryTokenForRetry(t, n) {
    const r = await this.getMaxAttempts();
    if (this.shouldRetry(t, n, r)) {
      const i = n.errorType;
      this.retryBackoffStrategy.setDelayBase(i === "THROTTLING" ? fy : $i);
      const c = this.retryBackoffStrategy.computeNextBackoffDelay(t.getRetryCount()), a = n.retryAfterHint ? Math.max(n.retryAfterHint.getTime() - Date.now() || 0, c) : c, u = this.getCapacityCost(i);
      return this.capacity -= u, Ba({
        retryDelay: a,
        retryCount: t.getRetryCount() + 1,
        retryCost: u
      });
    }
    throw new Error("No retry token available");
  }
  recordSuccess(t) {
    this.capacity = Math.max(Ma, this.capacity + (t.getRetryCost() ?? gy));
  }
  getCapacity() {
    return this.capacity;
  }
  async getMaxAttempts() {
    try {
      return await this.maxAttemptsProvider();
    } catch {
      return console.warn(`Max attempts provider could not resolve. Using default of ${as}`), as;
    }
  }
  shouldRetry(t, n, r) {
    return t.getRetryCount() + 1 < r && this.capacity >= this.getCapacityCost(n.errorType) && this.isRetryableError(n.errorType);
  }
  getCapacityCost(t) {
    return t === "TRANSIENT" ? py : hy;
  }
  isRetryableError(t) {
    return t === "THROTTLING" || t === "TRANSIENT";
  }
}
class vy {
  constructor(t, n) {
    this.maxAttemptsProvider = t, this.mode = rr.ADAPTIVE;
    const { rateLimiter: r } = n ?? {};
    this.rateLimiter = r ?? new xs(), this.standardRetryStrategy = new Al(t);
  }
  async acquireInitialRetryToken(t) {
    return await this.rateLimiter.getSendToken(), this.standardRetryStrategy.acquireInitialRetryToken(t);
  }
  async refreshRetryTokenForRetry(t, n) {
    return this.rateLimiter.updateClientSendingRate(n), this.standardRetryStrategy.refreshRetryTokenForRetry(t, n);
  }
  recordSuccess(t) {
    this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(t);
  }
}
let zr;
const wy = new Uint8Array(16);
function xy() {
  if (!zr && (zr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !zr))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return zr(wy);
}
const $t = [];
for (let e = 0; e < 256; ++e)
  $t.push((e + 256).toString(16).slice(1));
function Ey(e, t = 0) {
  return $t[e[t + 0]] + $t[e[t + 1]] + $t[e[t + 2]] + $t[e[t + 3]] + "-" + $t[e[t + 4]] + $t[e[t + 5]] + "-" + $t[e[t + 6]] + $t[e[t + 7]] + "-" + $t[e[t + 8]] + $t[e[t + 9]] + "-" + $t[e[t + 10]] + $t[e[t + 11]] + $t[e[t + 12]] + $t[e[t + 13]] + $t[e[t + 14]] + $t[e[t + 15]];
}
const Sy = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Da = {
  randomUUID: Sy
};
function Ay(e, t, n) {
  if (Da.randomUUID && !e)
    return Da.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || xy)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, Ey(r);
}
const Cy = (e) => e instanceof Error ? e : e instanceof Object ? Object.assign(new Error(), e) : typeof e == "string" ? new Error(e) : new Error(`AWS SDK error wrapper for ${e}`), Ry = (e) => {
  const { retryStrategy: t, retryMode: n, maxAttempts: r } = e, i = bn(r ?? as);
  return Object.assign(e, {
    maxAttempts: i,
    retryStrategy: async () => t || (await bn(n)() === rr.ADAPTIVE ? new vy(i) : new Al(i))
  });
}, ky = (e) => (e == null ? void 0 : e.body) instanceof ReadableStream, Ty = (e) => (t, n) => async (r) => {
  var a;
  let i = await e.retryStrategy();
  const c = await e.maxAttempts();
  if (_y(i)) {
    i = i;
    let u = await i.acquireInitialRetryToken(n.partition_id), p = new Error(), d = 0, f = 0;
    const { request: v } = r, y = Nt.isInstance(v);
    for (y && (v.headers[my] = Ay()); ; )
      try {
        y && (v.headers[yy] = `attempt=${d + 1}; max=${c}`);
        const { response: A, output: U } = await t(r);
        return i.recordSuccess(u), U.$metadata.attempts = d + 1, U.$metadata.totalRetryDelay = f, { response: A, output: U };
      } catch (A) {
        const U = Oy(A);
        if (p = Cy(A), y && ky(v))
          throw (a = n.logger instanceof Xu ? console : n.logger) == null || a.warn("An error was encountered in a non-retryable streaming request."), p;
        try {
          u = await i.refreshRetryTokenForRetry(u, U);
        } catch {
          throw p.$metadata || (p.$metadata = {}), p.$metadata.attempts = d + 1, p.$metadata.totalRetryDelay = f, p;
        }
        d = u.getRetryCount();
        const z = u.getRetryDelay();
        f += z, await new Promise((K) => setTimeout(K, z));
      }
  } else
    return i = i, i != null && i.mode && (n.userAgent = [...n.userAgent || [], ["cfg/retry-mode", i.mode]]), i.retry(t, r);
}, _y = (e) => typeof e.acquireInitialRetryToken < "u" && typeof e.refreshRetryTokenForRetry < "u" && typeof e.recordSuccess < "u", Oy = (e) => {
  const t = {
    error: e,
    errorType: Iy(e)
  }, n = My(e.$response);
  return n && (t.retryAfterHint = n), t;
}, Iy = (e) => El(e) ? "THROTTLING" : oo(e) ? "TRANSIENT" : dy(e) ? "SERVER_ERROR" : "CLIENT_ERROR", Ny = {
  name: "retryMiddleware",
  tags: ["RETRY"],
  step: "finalizeRequest",
  priority: "high",
  override: !0
}, Py = (e) => ({
  applyToStack: (t) => {
    t.add(Ty(e), Ny);
  }
}), My = (e) => {
  if (!zn.isInstance(e))
    return;
  const t = Object.keys(e.headers).find((c) => c.toLowerCase() === "retry-after");
  if (!t)
    return;
  const n = e.headers[t], r = Number(n);
  return Number.isNaN(r) ? new Date(n) : new Date(r * 1e3);
};
class By {
  constructor(t) {
    Ke(this, "sigv4aSigner");
    Ke(this, "sigv4Signer");
    Ke(this, "signerOptions");
    this.sigv4Signer = new Pg(t), this.signerOptions = t;
  }
  async sign(t, n = {}) {
    return n.signingRegion === "*" ? this.getSigv4aSigner().sign(t, n) : this.sigv4Signer.sign(t, n);
  }
  async signWithCredentials(t, n, r = {}) {
    if (r.signingRegion === "*")
      throw this.getSigv4aSigner(), new Error(`signWithCredentials with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
    return this.sigv4Signer.signWithCredentials(t, n, r);
  }
  async presign(t, n = {}) {
    if (n.signingRegion === "*")
      throw this.getSigv4aSigner(), new Error(`presign with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
    return this.sigv4Signer.presign(t, n);
  }
  async presignWithCredentials(t, n, r = {}) {
    if (r.signingRegion === "*")
      throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
    return this.sigv4Signer.presignWithCredentials(t, n, r);
  }
  getSigv4aSigner() {
    if (!this.sigv4aSigner)
      throw this.signerOptions.runtime === "node" ? new Error("Neither CRT nor JS SigV4a implementation is available. Please load either @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt") : new Error("JS SigV4a implementation is not available or not a valid constructor. Please check whether you have installed the @aws-sdk/signature-v4a package explicitly. The CRT implementation is not available for browsers. You must also register the package by calling [require('@aws-sdk/signature-v4a');] or an ESM equivalent such as [import '@aws-sdk/signature-v4a';]. For more information please go to https://github.com/aws/aws-sdk-js-v3#using-javascript-non-crt-implementation-of-sigv4a");
    return this.sigv4aSigner;
  }
}
const ao = "required", C = "type", Z = "rules", F = "conditions", G = "fn", W = "argv", Ae = "ref", qe = "assign", be = "url", ve = "properties", Un = "backend", Gt = "authSchemes", Lt = "disableDoubleEncoding", Ut = "signingName", Qt = "signingRegion", we = "headers", co = "signingRegionSet", Dy = 6, Fy = !1, vn = !0, ln = "isSet", At = "booleanEquals", me = "error", cs = "aws.partition", st = "stringEquals", mt = "getAttr", St = "name", ht = "substring", Fa = "bucketSuffix", uo = "parseURL", ce = "endpoint", J = "tree", us = "aws.isVirtualHostableS3Bucket", ls = "{url#scheme}://{Bucket}.{url#authority}{url#path}", Sn = "not", ja = "accessPointSuffix", Yr = "{url#scheme}://{url#authority}{url#path}", Cl = "hardwareType", Rl = "regionPrefix", La = "bucketAliasSuffix", Hi = "outpostId", qn = "isValidHostLabel", lo = "sigv4a", Or = "s3-outposts", sr = "s3", kl = "{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}", Tl = "https://{Bucket}.s3-accelerate.{partitionResult#dnsSuffix}", Ua = "https://{Bucket}.s3.{partitionResult#dnsSuffix}", _l = "aws.parseArn", Ol = "bucketArn", Il = "arnType", ds = "", fo = "s3-object-lambda", Nl = "accesspoint", ho = "accessPointName", $a = "{url#scheme}://{accessPointName}-{bucketArn#accountId}.{url#authority}{url#path}", Ha = "mrapPartition", za = "outpostType", Ka = "arnPrefix", Pl = "{url#scheme}://{url#authority}{url#normalizedPath}{uri_encoded_bucket}", qa = "https://s3.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", Va = "https://s3.{partitionResult#dnsSuffix}", Gn = { [ao]: !1, [C]: "String" }, Wn = { [ao]: !0, default: !1, [C]: "Boolean" }, hr = { [ao]: !1, [C]: "Boolean" }, gn = { [G]: At, [W]: [{ [Ae]: "Accelerate" }, !0] }, gt = { [G]: At, [W]: [{ [Ae]: "UseFIPS" }, !0] }, ft = { [G]: At, [W]: [{ [Ae]: "UseDualStack" }, !0] }, xt = { [G]: ln, [W]: [{ [Ae]: "Endpoint" }] }, Ml = { [G]: cs, [W]: [{ [Ae]: "Region" }], [qe]: "partitionResult" }, Ga = { [G]: st, [W]: [{ [G]: mt, [W]: [{ [Ae]: "partitionResult" }, St] }, "aws-cn"] }, Sr = { [G]: ln, [W]: [{ [Ae]: "Bucket" }] }, tt = { [Ae]: "Bucket" }, Wa = { [F]: [ft], [me]: "S3Express does not support Dual-stack.", [C]: me }, Xa = { [F]: [gn], [me]: "S3Express does not support S3 Accelerate.", [C]: me }, Ya = { [F]: [xt, { [G]: uo, [W]: [{ [Ae]: "Endpoint" }], [qe]: "url" }], [Z]: [{ [F]: [{ [G]: ln, [W]: [{ [Ae]: "DisableS3ExpressSessionAuth" }] }, { [G]: At, [W]: [{ [Ae]: "DisableS3ExpressSessionAuth" }, !0] }], [Z]: [{ [F]: [{ [G]: At, [W]: [{ [G]: mt, [W]: [{ [Ae]: "url" }, "isIp"] }, !0] }], [Z]: [{ [F]: [{ [G]: "uriEncode", [W]: [tt], [qe]: "uri_encoded_bucket" }], [Z]: [{ [ce]: { [be]: "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}", [ve]: { [Un]: "S3Express", [Gt]: [{ [Lt]: !0, [St]: "sigv4", [Ut]: "s3express", [Qt]: "{Region}" }] }, [we]: {} }, [C]: ce }], [C]: J }], [C]: J }, { [F]: [{ [G]: us, [W]: [tt, !1] }], [Z]: [{ [ce]: { [be]: ls, [ve]: { [Un]: "S3Express", [Gt]: [{ [Lt]: !0, [St]: "sigv4", [Ut]: "s3express", [Qt]: "{Region}" }] }, [we]: {} }, [C]: ce }], [C]: J }, { [me]: "S3Express bucket name is not a valid virtual hostable name.", [C]: me }], [C]: J }, { [F]: [{ [G]: At, [W]: [{ [G]: mt, [W]: [{ [Ae]: "url" }, "isIp"] }, !0] }], [Z]: [{ [F]: [{ [G]: "uriEncode", [W]: [tt], [qe]: "uri_encoded_bucket" }], [Z]: [{ [ce]: { [be]: "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}", [ve]: { [Un]: "S3Express", [Gt]: [{ [Lt]: !0, [St]: "sigv4-s3express", [Ut]: "s3express", [Qt]: "{Region}" }] }, [we]: {} }, [C]: ce }], [C]: J }], [C]: J }, { [F]: [{ [G]: us, [W]: [tt, !1] }], [Z]: [{ [ce]: { [be]: ls, [ve]: { [Un]: "S3Express", [Gt]: [{ [Lt]: !0, [St]: "sigv4-s3express", [Ut]: "s3express", [Qt]: "{Region}" }] }, [we]: {} }, [C]: ce }], [C]: J }, { [me]: "S3Express bucket name is not a valid virtual hostable name.", [C]: me }], [C]: J }, Zt = { [G]: uo, [W]: [{ [Ae]: "Endpoint" }], [qe]: "url" }, Js = { [G]: At, [W]: [{ [G]: mt, [W]: [{ [Ae]: "url" }, "isIp"] }, !0] }, Bl = { [Ae]: "url" }, Dl = { [G]: "uriEncode", [W]: [tt], [qe]: "uri_encoded_bucket" }, Ln = { [Un]: "S3Express", [Gt]: [{ [Lt]: !0, [St]: "sigv4", [Ut]: "s3express", [Qt]: "{Region}" }] }, je = {}, Fl = { [G]: us, [W]: [tt, !1] }, Za = { [me]: "S3Express bucket name is not a valid virtual hostable name.", [C]: me }, Ja = { [G]: ln, [W]: [{ [Ae]: "UseS3ExpressControlEndpoint" }] }, Qa = { [G]: At, [W]: [{ [Ae]: "UseS3ExpressControlEndpoint" }, !0] }, Le = { [G]: Sn, [W]: [xt] }, Kr = { [me]: "Unrecognized S3Express bucket name format.", [C]: me }, ec = { [G]: Sn, [W]: [Sr] }, tc = { [Ae]: Cl }, nc = { [F]: [Le], [me]: "Expected a endpoint to be specified but no endpoint was found", [C]: me }, qr = { [Gt]: [{ [Lt]: !0, [St]: lo, [Ut]: Or, [co]: ["*"] }, { [Lt]: !0, [St]: "sigv4", [Ut]: Or, [Qt]: "{Region}" }] }, Qs = { [G]: At, [W]: [{ [Ae]: "ForcePathStyle" }, !1] }, jy = { [Ae]: "ForcePathStyle" }, Rt = { [G]: At, [W]: [{ [Ae]: "Accelerate" }, !1] }, It = { [G]: st, [W]: [{ [Ae]: "Region" }, "aws-global"] }, Dt = { [Gt]: [{ [Lt]: !0, [St]: "sigv4", [Ut]: sr, [Qt]: "us-east-1" }] }, et = { [G]: Sn, [W]: [It] }, Ft = { [G]: At, [W]: [{ [Ae]: "UseGlobalEndpoint" }, !0] }, rc = { [be]: "https://{Bucket}.s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", [ve]: { [Gt]: [{ [Lt]: !0, [St]: "sigv4", [Ut]: sr, [Qt]: "{Region}" }] }, [we]: {} }, Tt = { [Gt]: [{ [Lt]: !0, [St]: "sigv4", [Ut]: sr, [Qt]: "{Region}" }] }, jt = { [G]: At, [W]: [{ [Ae]: "UseGlobalEndpoint" }, !1] }, Je = { [G]: At, [W]: [{ [Ae]: "UseDualStack" }, !1] }, sc = { [be]: "https://{Bucket}.s3-fips.{Region}.{partitionResult#dnsSuffix}", [ve]: Tt, [we]: {} }, Ge = { [G]: At, [W]: [{ [Ae]: "UseFIPS" }, !1] }, ic = { [be]: "https://{Bucket}.s3-accelerate.dualstack.{partitionResult#dnsSuffix}", [ve]: Tt, [we]: {} }, oc = { [be]: "https://{Bucket}.s3.dualstack.{Region}.{partitionResult#dnsSuffix}", [ve]: Tt, [we]: {} }, ei = { [G]: At, [W]: [{ [G]: mt, [W]: [Bl, "isIp"] }, !1] }, ti = { [be]: kl, [ve]: Tt, [we]: {} }, zi = { [be]: ls, [ve]: Tt, [we]: {} }, ac = { [ce]: zi, [C]: ce }, ni = { [be]: Tl, [ve]: Tt, [we]: {} }, cc = { [be]: "https://{Bucket}.s3.{Region}.{partitionResult#dnsSuffix}", [ve]: Tt, [we]: {} }, Vr = { [me]: "Invalid region: region was not a valid DNS name.", [C]: me }, sn = { [Ae]: Ol }, jl = { [Ae]: Il }, ri = { [G]: mt, [W]: [sn, "service"] }, po = { [Ae]: ho }, uc = { [F]: [ft], [me]: "S3 Object Lambda does not support Dual-stack", [C]: me }, lc = { [F]: [gn], [me]: "S3 Object Lambda does not support S3 Accelerate", [C]: me }, dc = { [F]: [{ [G]: ln, [W]: [{ [Ae]: "DisableAccessPoints" }] }, { [G]: At, [W]: [{ [Ae]: "DisableAccessPoints" }, !0] }], [me]: "Access points are not supported for this operation", [C]: me }, si = { [F]: [{ [G]: ln, [W]: [{ [Ae]: "UseArnRegion" }] }, { [G]: At, [W]: [{ [Ae]: "UseArnRegion" }, !1] }, { [G]: Sn, [W]: [{ [G]: st, [W]: [{ [G]: mt, [W]: [sn, "region"] }, "{Region}"] }] }], [me]: "Invalid configuration: region from ARN `{bucketArn#region}` does not match client region `{Region}` and UseArnRegion is `false`", [C]: me }, Ll = { [G]: mt, [W]: [{ [Ae]: "bucketPartition" }, St] }, Ul = { [G]: mt, [W]: [sn, "accountId"] }, ii = { [Gt]: [{ [Lt]: !0, [St]: "sigv4", [Ut]: fo, [Qt]: "{bucketArn#region}" }] }, fc = { [me]: "Invalid ARN: The access point name may only contain a-z, A-Z, 0-9 and `-`. Found: `{accessPointName}`", [C]: me }, oi = { [me]: "Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: `{bucketArn#accountId}`", [C]: me }, ai = { [me]: "Invalid region in ARN: `{bucketArn#region}` (invalid DNS name)", [C]: me }, ci = { [me]: "Client was configured for partition `{partitionResult#name}` but ARN (`{Bucket}`) has `{bucketPartition#name}`", [C]: me }, hc = { [me]: "Invalid ARN: The ARN may only contain a single resource component after `accesspoint`.", [C]: me }, pc = { [me]: "Invalid ARN: Expected a resource of the format `accesspoint:<accesspoint name>` but no name was provided", [C]: me }, pr = { [Gt]: [{ [Lt]: !0, [St]: "sigv4", [Ut]: sr, [Qt]: "{bucketArn#region}" }] }, gc = { [Gt]: [{ [Lt]: !0, [St]: lo, [Ut]: Or, [co]: ["*"] }, { [Lt]: !0, [St]: "sigv4", [Ut]: Or, [Qt]: "{bucketArn#region}" }] }, mc = { [G]: _l, [W]: [tt] }, yc = { [be]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [ve]: Tt, [we]: {} }, bc = { [be]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [ve]: Tt, [we]: {} }, vc = { [be]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [ve]: Tt, [we]: {} }, ui = { [be]: Pl, [ve]: Tt, [we]: {} }, wc = { [be]: "https://s3.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [ve]: Tt, [we]: {} }, xc = { [Ae]: "UseObjectLambdaEndpoint" }, li = { [Gt]: [{ [Lt]: !0, [St]: "sigv4", [Ut]: fo, [Qt]: "{Region}" }] }, Ec = { [be]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", [ve]: Tt, [we]: {} }, Sc = { [be]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}", [ve]: Tt, [we]: {} }, Ac = { [be]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}", [ve]: Tt, [we]: {} }, di = { [be]: Yr, [ve]: Tt, [we]: {} }, Cc = { [be]: "https://s3.{Region}.{partitionResult#dnsSuffix}", [ve]: Tt, [we]: {} }, fi = [{ [Ae]: "Region" }], Ly = [{ [Ae]: "Endpoint" }], Uy = [tt], Rc = [ft], hi = [gn], Xn = [xt, Zt], kc = [{ [G]: ln, [W]: [{ [Ae]: "DisableS3ExpressSessionAuth" }] }, { [G]: At, [W]: [{ [Ae]: "DisableS3ExpressSessionAuth" }, !0] }], $y = [Dl], Tc = [Fl], pn = [Ml], Yn = [gt], _c = [{ [G]: ht, [W]: [tt, 6, 14, !0], [qe]: "s3expressAvailabilityZoneId" }, { [G]: ht, [W]: [tt, 14, 16, !0], [qe]: "s3expressAvailabilityZoneDelim" }, { [G]: st, [W]: [{ [Ae]: "s3expressAvailabilityZoneDelim" }, "--"] }], wn = [{ [F]: [gt], [ce]: { [be]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [ve]: Ln, [we]: {} }, [C]: ce }, { [ce]: { [be]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [ve]: Ln, [we]: {} }, [C]: ce }], Oc = [{ [G]: ht, [W]: [tt, 6, 15, !0], [qe]: "s3expressAvailabilityZoneId" }, { [G]: ht, [W]: [tt, 15, 17, !0], [qe]: "s3expressAvailabilityZoneDelim" }, { [G]: st, [W]: [{ [Ae]: "s3expressAvailabilityZoneDelim" }, "--"] }], Ic = [{ [G]: ht, [W]: [tt, 6, 19, !0], [qe]: "s3expressAvailabilityZoneId" }, { [G]: ht, [W]: [tt, 19, 21, !0], [qe]: "s3expressAvailabilityZoneDelim" }, { [G]: st, [W]: [{ [Ae]: "s3expressAvailabilityZoneDelim" }, "--"] }], Nc = [{ [G]: ht, [W]: [tt, 6, 20, !0], [qe]: "s3expressAvailabilityZoneId" }, { [G]: ht, [W]: [tt, 20, 22, !0], [qe]: "s3expressAvailabilityZoneDelim" }, { [G]: st, [W]: [{ [Ae]: "s3expressAvailabilityZoneDelim" }, "--"] }], Pc = [{ [G]: ht, [W]: [tt, 6, 26, !0], [qe]: "s3expressAvailabilityZoneId" }, { [G]: ht, [W]: [tt, 26, 28, !0], [qe]: "s3expressAvailabilityZoneDelim" }, { [G]: st, [W]: [{ [Ae]: "s3expressAvailabilityZoneDelim" }, "--"] }], xn = [{ [F]: [gt], [ce]: { [be]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [ve]: { [Un]: "S3Express", [Gt]: [{ [Lt]: !0, [St]: "sigv4-s3express", [Ut]: "s3express", [Qt]: "{Region}" }] }, [we]: {} }, [C]: ce }, { [ce]: { [be]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}", [ve]: { [Un]: "S3Express", [Gt]: [{ [Lt]: !0, [St]: "sigv4-s3express", [Ut]: "s3express", [Qt]: "{Region}" }] }, [we]: {} }, [C]: ce }], Mc = [tt, 0, 7, !0], Bc = [{ [G]: ht, [W]: [tt, 7, 15, !0], [qe]: "s3expressAvailabilityZoneId" }, { [G]: ht, [W]: [tt, 15, 17, !0], [qe]: "s3expressAvailabilityZoneDelim" }, { [G]: st, [W]: [{ [Ae]: "s3expressAvailabilityZoneDelim" }, "--"] }], Dc = [{ [G]: ht, [W]: [tt, 7, 16, !0], [qe]: "s3expressAvailabilityZoneId" }, { [G]: ht, [W]: [tt, 16, 18, !0], [qe]: "s3expressAvailabilityZoneDelim" }, { [G]: st, [W]: [{ [Ae]: "s3expressAvailabilityZoneDelim" }, "--"] }], Fc = [{ [G]: ht, [W]: [tt, 7, 20, !0], [qe]: "s3expressAvailabilityZoneId" }, { [G]: ht, [W]: [tt, 20, 22, !0], [qe]: "s3expressAvailabilityZoneDelim" }, { [G]: st, [W]: [{ [Ae]: "s3expressAvailabilityZoneDelim" }, "--"] }], jc = [{ [G]: ht, [W]: [tt, 7, 21, !0], [qe]: "s3expressAvailabilityZoneId" }, { [G]: ht, [W]: [tt, 21, 23, !0], [qe]: "s3expressAvailabilityZoneDelim" }, { [G]: st, [W]: [{ [Ae]: "s3expressAvailabilityZoneDelim" }, "--"] }], Lc = [{ [G]: ht, [W]: [tt, 7, 27, !0], [qe]: "s3expressAvailabilityZoneId" }, { [G]: ht, [W]: [tt, 27, 29, !0], [qe]: "s3expressAvailabilityZoneDelim" }, { [G]: st, [W]: [{ [Ae]: "s3expressAvailabilityZoneDelim" }, "--"] }], Hy = [Sr], Uc = [{ [G]: qn, [W]: [{ [Ae]: Hi }, !1] }], $c = [{ [G]: st, [W]: [{ [Ae]: Rl }, "beta"] }], zy = ["*"], Hc = [{ [G]: qn, [W]: [{ [Ae]: "Region" }, !1] }], kn = [{ [G]: st, [W]: [{ [Ae]: "Region" }, "us-east-1"] }], pi = [{ [G]: st, [W]: [jl, Nl] }], zc = [{ [G]: mt, [W]: [sn, "resourceId[1]"], [qe]: ho }, { [G]: Sn, [W]: [{ [G]: st, [W]: [po, ds] }] }], Ky = [sn, "resourceId[1]"], gi = [{ [G]: Sn, [W]: [{ [G]: st, [W]: [{ [G]: mt, [W]: [sn, "region"] }, ds] }] }], Kc = [{ [G]: Sn, [W]: [{ [G]: ln, [W]: [{ [G]: mt, [W]: [sn, "resourceId[2]"] }] }] }], qy = [sn, "resourceId[2]"], mi = [{ [G]: cs, [W]: [{ [G]: mt, [W]: [sn, "region"] }], [qe]: "bucketPartition" }], qc = [{ [G]: st, [W]: [Ll, { [G]: mt, [W]: [{ [Ae]: "partitionResult" }, St] }] }], yi = [{ [G]: qn, [W]: [{ [G]: mt, [W]: [sn, "region"] }, !0] }], bi = [{ [G]: qn, [W]: [Ul, !1] }], Vc = [{ [G]: qn, [W]: [po, !1] }], Gc = [{ [G]: qn, [W]: [{ [Ae]: "Region" }, !0] }], Vy = { parameters: { Bucket: Gn, Region: Gn, UseFIPS: Wn, UseDualStack: Wn, Endpoint: Gn, ForcePathStyle: Wn, Accelerate: Wn, UseGlobalEndpoint: Wn, UseObjectLambdaEndpoint: hr, Key: Gn, Prefix: Gn, CopySource: Gn, DisableAccessPoints: hr, DisableMultiRegionAccessPoints: Wn, UseArnRegion: hr, UseS3ExpressControlEndpoint: hr, DisableS3ExpressSessionAuth: hr }, [Z]: [{ [F]: [{ [G]: ln, [W]: fi }], [Z]: [{ [F]: [gn, gt], error: "Accelerate cannot be used with FIPS", [C]: me }, { [F]: [ft, xt], error: "Cannot set dual-stack in combination with a custom endpoint.", [C]: me }, { [F]: [xt, gt], error: "A custom endpoint cannot be combined with FIPS", [C]: me }, { [F]: [xt, gn], error: "A custom endpoint cannot be combined with S3 Accelerate", [C]: me }, { [F]: [gt, Ml, Ga], error: "Partition does not support FIPS", [C]: me }, { [F]: [Sr, { [G]: ht, [W]: [tt, 0, Dy, vn], [qe]: Fa }, { [G]: st, [W]: [{ [Ae]: Fa }, "--x-s3"] }], [Z]: [Wa, Xa, Ya, { [F]: [Ja, Qa], [Z]: [{ [F]: pn, [Z]: [{ [F]: [Dl, Le], [Z]: [{ [F]: Yn, endpoint: { [be]: "https://s3express-control-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [ve]: Ln, [we]: je }, [C]: ce }, { endpoint: { [be]: "https://s3express-control.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [ve]: Ln, [we]: je }, [C]: ce }], [C]: J }], [C]: J }], [C]: J }, { [F]: Tc, [Z]: [{ [F]: pn, [Z]: [{ [F]: kc, [Z]: [{ [F]: _c, [Z]: wn, [C]: J }, { [F]: Oc, [Z]: wn, [C]: J }, { [F]: Ic, [Z]: wn, [C]: J }, { [F]: Nc, [Z]: wn, [C]: J }, { [F]: Pc, [Z]: wn, [C]: J }, Kr], [C]: J }, { [F]: _c, [Z]: xn, [C]: J }, { [F]: Oc, [Z]: xn, [C]: J }, { [F]: Ic, [Z]: xn, [C]: J }, { [F]: Nc, [Z]: xn, [C]: J }, { [F]: Pc, [Z]: xn, [C]: J }, Kr], [C]: J }], [C]: J }, Za], [C]: J }, { [F]: [Sr, { [G]: ht, [W]: Mc, [qe]: ja }, { [G]: st, [W]: [{ [Ae]: ja }, "--xa-s3"] }], [Z]: [Wa, Xa, Ya, { [F]: Tc, [Z]: [{ [F]: pn, [Z]: [{ [F]: kc, [Z]: [{ [F]: Bc, [Z]: wn, [C]: J }, { [F]: Dc, [Z]: wn, [C]: J }, { [F]: Fc, [Z]: wn, [C]: J }, { [F]: jc, [Z]: wn, [C]: J }, { [F]: Lc, [Z]: wn, [C]: J }, Kr], [C]: J }, { [F]: Bc, [Z]: xn, [C]: J }, { [F]: Dc, [Z]: xn, [C]: J }, { [F]: Fc, [Z]: xn, [C]: J }, { [F]: jc, [Z]: xn, [C]: J }, { [F]: Lc, [Z]: xn, [C]: J }, Kr], [C]: J }], [C]: J }, Za], [C]: J }, { [F]: [ec, Ja, Qa], [Z]: [{ [F]: pn, [Z]: [{ [F]: Xn, endpoint: { [be]: Yr, [ve]: Ln, [we]: je }, [C]: ce }, { [F]: Yn, endpoint: { [be]: "https://s3express-control-fips.{Region}.{partitionResult#dnsSuffix}", [ve]: Ln, [we]: je }, [C]: ce }, { endpoint: { [be]: "https://s3express-control.{Region}.{partitionResult#dnsSuffix}", [ve]: Ln, [we]: je }, [C]: ce }], [C]: J }], [C]: J }, { [F]: [Sr, { [G]: ht, [W]: [tt, 49, 50, vn], [qe]: Cl }, { [G]: ht, [W]: [tt, 8, 12, vn], [qe]: Rl }, { [G]: ht, [W]: Mc, [qe]: La }, { [G]: ht, [W]: [tt, 32, 49, vn], [qe]: Hi }, { [G]: cs, [W]: fi, [qe]: "regionPartition" }, { [G]: st, [W]: [{ [Ae]: La }, "--op-s3"] }], [Z]: [{ [F]: Uc, [Z]: [{ [F]: [{ [G]: st, [W]: [tc, "e"] }], [Z]: [{ [F]: $c, [Z]: [nc, { [F]: Xn, endpoint: { [be]: "https://{Bucket}.ec2.{url#authority}", [ve]: qr, [we]: je }, [C]: ce }], [C]: J }, { endpoint: { [be]: "https://{Bucket}.ec2.s3-outposts.{Region}.{regionPartition#dnsSuffix}", [ve]: qr, [we]: je }, [C]: ce }], [C]: J }, { [F]: [{ [G]: st, [W]: [tc, "o"] }], [Z]: [{ [F]: $c, [Z]: [nc, { [F]: Xn, endpoint: { [be]: "https://{Bucket}.op-{outpostId}.{url#authority}", [ve]: qr, [we]: je }, [C]: ce }], [C]: J }, { endpoint: { [be]: "https://{Bucket}.op-{outpostId}.s3-outposts.{Region}.{regionPartition#dnsSuffix}", [ve]: qr, [we]: je }, [C]: ce }], [C]: J }, { error: 'Unrecognized hardware type: "Expected hardware type o or e but got {hardwareType}"', [C]: me }], [C]: J }, { error: "Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`.", [C]: me }], [C]: J }, { [F]: Hy, [Z]: [{ [F]: [xt, { [G]: Sn, [W]: [{ [G]: ln, [W]: [{ [G]: uo, [W]: Ly }] }] }], error: "Custom endpoint `{Endpoint}` was not a valid URI", [C]: me }, { [F]: [Qs, Fl], [Z]: [{ [F]: pn, [Z]: [{ [F]: Hc, [Z]: [{ [F]: [gn, Ga], error: "S3 Accelerate cannot be used in this region", [C]: me }, { [F]: [ft, gt, Rt, Le, It], endpoint: { [be]: "https://{Bucket}.s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}", [ve]: Dt, [we]: je }, [C]: ce }, { [F]: [ft, gt, Rt, Le, et, Ft], [Z]: [{ endpoint: rc, [C]: ce }], [C]: J }, { [F]: [ft, gt, Rt, Le, et, jt], endpoint: rc, [C]: ce }, { [F]: [Je, gt, Rt, Le, It], endpoint: { [be]: "https://{Bucket}.s3-fips.us-east-1.{partitionResult#dnsSuffix}", [ve]: Dt, [we]: je }, [C]: ce }, { [F]: [Je, gt, Rt, Le, et, Ft], [Z]: [{ endpoint: sc, [C]: ce }], [C]: J }, { [F]: [Je, gt, Rt, Le, et, jt], endpoint: sc, [C]: ce }, { [F]: [ft, Ge, gn, Le, It], endpoint: { [be]: "https://{Bucket}.s3-accelerate.dualstack.us-east-1.{partitionResult#dnsSuffix}", [ve]: Dt, [we]: je }, [C]: ce }, { [F]: [ft, Ge, gn, Le, et, Ft], [Z]: [{ endpoint: ic, [C]: ce }], [C]: J }, { [F]: [ft, Ge, gn, Le, et, jt], endpoint: ic, [C]: ce }, { [F]: [ft, Ge, Rt, Le, It], endpoint: { [be]: "https://{Bucket}.s3.dualstack.us-east-1.{partitionResult#dnsSuffix}", [ve]: Dt, [we]: je }, [C]: ce }, { [F]: [ft, Ge, Rt, Le, et, Ft], [Z]: [{ endpoint: oc, [C]: ce }], [C]: J }, { [F]: [ft, Ge, Rt, Le, et, jt], endpoint: oc, [C]: ce }, { [F]: [Je, Ge, Rt, xt, Zt, Js, It], endpoint: { [be]: kl, [ve]: Dt, [we]: je }, [C]: ce }, { [F]: [Je, Ge, Rt, xt, Zt, ei, It], endpoint: { [be]: ls, [ve]: Dt, [we]: je }, [C]: ce }, { [F]: [Je, Ge, Rt, xt, Zt, Js, et, Ft], [Z]: [{ [F]: kn, endpoint: ti, [C]: ce }, { endpoint: ti, [C]: ce }], [C]: J }, { [F]: [Je, Ge, Rt, xt, Zt, ei, et, Ft], [Z]: [{ [F]: kn, endpoint: zi, [C]: ce }, ac], [C]: J }, { [F]: [Je, Ge, Rt, xt, Zt, Js, et, jt], endpoint: ti, [C]: ce }, { [F]: [Je, Ge, Rt, xt, Zt, ei, et, jt], endpoint: zi, [C]: ce }, { [F]: [Je, Ge, gn, Le, It], endpoint: { [be]: Tl, [ve]: Dt, [we]: je }, [C]: ce }, { [F]: [Je, Ge, gn, Le, et, Ft], [Z]: [{ [F]: kn, endpoint: ni, [C]: ce }, { endpoint: ni, [C]: ce }], [C]: J }, { [F]: [Je, Ge, gn, Le, et, jt], endpoint: ni, [C]: ce }, { [F]: [Je, Ge, Rt, Le, It], endpoint: { [be]: Ua, [ve]: Dt, [we]: je }, [C]: ce }, { [F]: [Je, Ge, Rt, Le, et, Ft], [Z]: [{ [F]: kn, endpoint: { [be]: Ua, [ve]: Tt, [we]: je }, [C]: ce }, { endpoint: cc, [C]: ce }], [C]: J }, { [F]: [Je, Ge, Rt, Le, et, jt], endpoint: cc, [C]: ce }], [C]: J }, Vr], [C]: J }], [C]: J }, { [F]: [xt, Zt, { [G]: st, [W]: [{ [G]: mt, [W]: [Bl, "scheme"] }, "http"] }, { [G]: us, [W]: [tt, vn] }, Qs, Ge, Je, Rt], [Z]: [{ [F]: pn, [Z]: [{ [F]: Hc, [Z]: [ac], [C]: J }, Vr], [C]: J }], [C]: J }, { [F]: [Qs, { [G]: _l, [W]: Uy, [qe]: Ol }], [Z]: [{ [F]: [{ [G]: mt, [W]: [sn, "resourceId[0]"], [qe]: Il }, { [G]: Sn, [W]: [{ [G]: st, [W]: [jl, ds] }] }], [Z]: [{ [F]: [{ [G]: st, [W]: [ri, fo] }], [Z]: [{ [F]: pi, [Z]: [{ [F]: zc, [Z]: [uc, lc, { [F]: gi, [Z]: [dc, { [F]: Kc, [Z]: [si, { [F]: mi, [Z]: [{ [F]: pn, [Z]: [{ [F]: qc, [Z]: [{ [F]: yi, [Z]: [{ [F]: [{ [G]: st, [W]: [Ul, ds] }], error: "Invalid ARN: Missing account id", [C]: me }, { [F]: bi, [Z]: [{ [F]: Vc, [Z]: [{ [F]: Xn, endpoint: { [be]: $a, [ve]: ii, [we]: je }, [C]: ce }, { [F]: Yn, endpoint: { [be]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}", [ve]: ii, [we]: je }, [C]: ce }, { endpoint: { [be]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda.{bucketArn#region}.{bucketPartition#dnsSuffix}", [ve]: ii, [we]: je }, [C]: ce }], [C]: J }, fc], [C]: J }, oi], [C]: J }, ai], [C]: J }, ci], [C]: J }], [C]: J }], [C]: J }, hc], [C]: J }, { error: "Invalid ARN: bucket ARN is missing a region", [C]: me }], [C]: J }, pc], [C]: J }, { error: "Invalid ARN: Object Lambda ARNs only support `accesspoint` arn types, but found: `{arnType}`", [C]: me }], [C]: J }, { [F]: pi, [Z]: [{ [F]: zc, [Z]: [{ [F]: gi, [Z]: [{ [F]: pi, [Z]: [{ [F]: gi, [Z]: [dc, { [F]: Kc, [Z]: [si, { [F]: mi, [Z]: [{ [F]: pn, [Z]: [{ [F]: [{ [G]: st, [W]: [Ll, "{partitionResult#name}"] }], [Z]: [{ [F]: yi, [Z]: [{ [F]: [{ [G]: st, [W]: [ri, sr] }], [Z]: [{ [F]: bi, [Z]: [{ [F]: Vc, [Z]: [{ [F]: hi, error: "Access Points do not support S3 Accelerate", [C]: me }, { [F]: [gt, ft], endpoint: { [be]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}", [ve]: pr, [we]: je }, [C]: ce }, { [F]: [gt, Je], endpoint: { [be]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}", [ve]: pr, [we]: je }, [C]: ce }, { [F]: [Ge, ft], endpoint: { [be]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}", [ve]: pr, [we]: je }, [C]: ce }, { [F]: [Ge, Je, xt, Zt], endpoint: { [be]: $a, [ve]: pr, [we]: je }, [C]: ce }, { [F]: [Ge, Je], endpoint: { [be]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.{bucketArn#region}.{bucketPartition#dnsSuffix}", [ve]: pr, [we]: je }, [C]: ce }], [C]: J }, fc], [C]: J }, oi], [C]: J }, { error: "Invalid ARN: The ARN was not for the S3 service, found: {bucketArn#service}", [C]: me }], [C]: J }, ai], [C]: J }, ci], [C]: J }], [C]: J }], [C]: J }, hc], [C]: J }], [C]: J }], [C]: J }, { [F]: [{ [G]: qn, [W]: [po, vn] }], [Z]: [{ [F]: Rc, error: "S3 MRAP does not support dual-stack", [C]: me }, { [F]: Yn, error: "S3 MRAP does not support FIPS", [C]: me }, { [F]: hi, error: "S3 MRAP does not support S3 Accelerate", [C]: me }, { [F]: [{ [G]: At, [W]: [{ [Ae]: "DisableMultiRegionAccessPoints" }, vn] }], error: "Invalid configuration: Multi-Region Access Point ARNs are disabled.", [C]: me }, { [F]: [{ [G]: cs, [W]: fi, [qe]: Ha }], [Z]: [{ [F]: [{ [G]: st, [W]: [{ [G]: mt, [W]: [{ [Ae]: Ha }, St] }, { [G]: mt, [W]: [sn, "partition"] }] }], [Z]: [{ endpoint: { [be]: "https://{accessPointName}.accesspoint.s3-global.{mrapPartition#dnsSuffix}", [ve]: { [Gt]: [{ [Lt]: vn, name: lo, [Ut]: sr, [co]: zy }] }, [we]: je }, [C]: ce }], [C]: J }, { error: "Client was configured for partition `{mrapPartition#name}` but bucket referred to partition `{bucketArn#partition}`", [C]: me }], [C]: J }], [C]: J }, { error: "Invalid Access Point Name", [C]: me }], [C]: J }, pc], [C]: J }, { [F]: [{ [G]: st, [W]: [ri, Or] }], [Z]: [{ [F]: Rc, error: "S3 Outposts does not support Dual-stack", [C]: me }, { [F]: Yn, error: "S3 Outposts does not support FIPS", [C]: me }, { [F]: hi, error: "S3 Outposts does not support S3 Accelerate", [C]: me }, { [F]: [{ [G]: ln, [W]: [{ [G]: mt, [W]: [sn, "resourceId[4]"] }] }], error: "Invalid Arn: Outpost Access Point ARN contains sub resources", [C]: me }, { [F]: [{ [G]: mt, [W]: Ky, [qe]: Hi }], [Z]: [{ [F]: Uc, [Z]: [si, { [F]: mi, [Z]: [{ [F]: pn, [Z]: [{ [F]: qc, [Z]: [{ [F]: yi, [Z]: [{ [F]: bi, [Z]: [{ [F]: [{ [G]: mt, [W]: qy, [qe]: za }], [Z]: [{ [F]: [{ [G]: mt, [W]: [sn, "resourceId[3]"], [qe]: ho }], [Z]: [{ [F]: [{ [G]: st, [W]: [{ [Ae]: za }, Nl] }], [Z]: [{ [F]: Xn, endpoint: { [be]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.{url#authority}", [ve]: gc, [we]: je }, [C]: ce }, { endpoint: { [be]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.s3-outposts.{bucketArn#region}.{bucketPartition#dnsSuffix}", [ve]: gc, [we]: je }, [C]: ce }], [C]: J }, { error: "Expected an outpost type `accesspoint`, found {outpostType}", [C]: me }], [C]: J }, { error: "Invalid ARN: expected an access point name", [C]: me }], [C]: J }, { error: "Invalid ARN: Expected a 4-component resource", [C]: me }], [C]: J }, oi], [C]: J }, ai], [C]: J }, ci], [C]: J }], [C]: J }], [C]: J }, { error: "Invalid ARN: The outpost Id may only contain a-z, A-Z, 0-9 and `-`. Found: `{outpostId}`", [C]: me }], [C]: J }, { error: "Invalid ARN: The Outpost Id was not set", [C]: me }], [C]: J }, { error: "Invalid ARN: Unrecognized format: {Bucket} (type: {arnType})", [C]: me }], [C]: J }, { error: "Invalid ARN: No ARN type specified", [C]: me }], [C]: J }, { [F]: [{ [G]: ht, [W]: [tt, 0, 4, Fy], [qe]: Ka }, { [G]: st, [W]: [{ [Ae]: Ka }, "arn:"] }, { [G]: Sn, [W]: [{ [G]: ln, [W]: [mc] }] }], error: "Invalid ARN: `{Bucket}` was not a valid ARN", [C]: me }, { [F]: [{ [G]: At, [W]: [jy, vn] }, mc], error: "Path-style addressing cannot be used with ARN buckets", [C]: me }, { [F]: $y, [Z]: [{ [F]: pn, [Z]: [{ [F]: [Rt], [Z]: [{ [F]: [ft, Le, gt, It], endpoint: { [be]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [ve]: Dt, [we]: je }, [C]: ce }, { [F]: [ft, Le, gt, et, Ft], [Z]: [{ endpoint: yc, [C]: ce }], [C]: J }, { [F]: [ft, Le, gt, et, jt], endpoint: yc, [C]: ce }, { [F]: [Je, Le, gt, It], endpoint: { [be]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [ve]: Dt, [we]: je }, [C]: ce }, { [F]: [Je, Le, gt, et, Ft], [Z]: [{ endpoint: bc, [C]: ce }], [C]: J }, { [F]: [Je, Le, gt, et, jt], endpoint: bc, [C]: ce }, { [F]: [ft, Le, Ge, It], endpoint: { [be]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [ve]: Dt, [we]: je }, [C]: ce }, { [F]: [ft, Le, Ge, et, Ft], [Z]: [{ endpoint: vc, [C]: ce }], [C]: J }, { [F]: [ft, Le, Ge, et, jt], endpoint: vc, [C]: ce }, { [F]: [Je, xt, Zt, Ge, It], endpoint: { [be]: Pl, [ve]: Dt, [we]: je }, [C]: ce }, { [F]: [Je, xt, Zt, Ge, et, Ft], [Z]: [{ [F]: kn, endpoint: ui, [C]: ce }, { endpoint: ui, [C]: ce }], [C]: J }, { [F]: [Je, xt, Zt, Ge, et, jt], endpoint: ui, [C]: ce }, { [F]: [Je, Le, Ge, It], endpoint: { [be]: qa, [ve]: Dt, [we]: je }, [C]: ce }, { [F]: [Je, Le, Ge, et, Ft], [Z]: [{ [F]: kn, endpoint: { [be]: qa, [ve]: Tt, [we]: je }, [C]: ce }, { endpoint: wc, [C]: ce }], [C]: J }, { [F]: [Je, Le, Ge, et, jt], endpoint: wc, [C]: ce }], [C]: J }, { error: "Path-style addressing cannot be used with S3 Accelerate", [C]: me }], [C]: J }], [C]: J }], [C]: J }, { [F]: [{ [G]: ln, [W]: [xc] }, { [G]: At, [W]: [xc, vn] }], [Z]: [{ [F]: pn, [Z]: [{ [F]: Gc, [Z]: [uc, lc, { [F]: Xn, endpoint: { [be]: Yr, [ve]: li, [we]: je }, [C]: ce }, { [F]: Yn, endpoint: { [be]: "https://s3-object-lambda-fips.{Region}.{partitionResult#dnsSuffix}", [ve]: li, [we]: je }, [C]: ce }, { endpoint: { [be]: "https://s3-object-lambda.{Region}.{partitionResult#dnsSuffix}", [ve]: li, [we]: je }, [C]: ce }], [C]: J }, Vr], [C]: J }], [C]: J }, { [F]: [ec], [Z]: [{ [F]: pn, [Z]: [{ [F]: Gc, [Z]: [{ [F]: [gt, ft, Le, It], endpoint: { [be]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}", [ve]: Dt, [we]: je }, [C]: ce }, { [F]: [gt, ft, Le, et, Ft], [Z]: [{ endpoint: Ec, [C]: ce }], [C]: J }, { [F]: [gt, ft, Le, et, jt], endpoint: Ec, [C]: ce }, { [F]: [gt, Je, Le, It], endpoint: { [be]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}", [ve]: Dt, [we]: je }, [C]: ce }, { [F]: [gt, Je, Le, et, Ft], [Z]: [{ endpoint: Sc, [C]: ce }], [C]: J }, { [F]: [gt, Je, Le, et, jt], endpoint: Sc, [C]: ce }, { [F]: [Ge, ft, Le, It], endpoint: { [be]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}", [ve]: Dt, [we]: je }, [C]: ce }, { [F]: [Ge, ft, Le, et, Ft], [Z]: [{ endpoint: Ac, [C]: ce }], [C]: J }, { [F]: [Ge, ft, Le, et, jt], endpoint: Ac, [C]: ce }, { [F]: [Ge, Je, xt, Zt, It], endpoint: { [be]: Yr, [ve]: Dt, [we]: je }, [C]: ce }, { [F]: [Ge, Je, xt, Zt, et, Ft], [Z]: [{ [F]: kn, endpoint: di, [C]: ce }, { endpoint: di, [C]: ce }], [C]: J }, { [F]: [Ge, Je, xt, Zt, et, jt], endpoint: di, [C]: ce }, { [F]: [Ge, Je, Le, It], endpoint: { [be]: Va, [ve]: Dt, [we]: je }, [C]: ce }, { [F]: [Ge, Je, Le, et, Ft], [Z]: [{ [F]: kn, endpoint: { [be]: Va, [ve]: Tt, [we]: je }, [C]: ce }, { endpoint: Cc, [C]: ce }], [C]: J }, { [F]: [Ge, Je, Le, et, jt], endpoint: Cc, [C]: ce }], [C]: J }, Vr], [C]: J }], [C]: J }], [C]: J }, { error: "A region must be set when sending requests to S3.", [C]: me }] }, Gy = Vy, Wy = new sm({
  size: 50,
  params: [
    "Accelerate",
    "Bucket",
    "DisableAccessPoints",
    "DisableMultiRegionAccessPoints",
    "DisableS3ExpressSessionAuth",
    "Endpoint",
    "ForcePathStyle",
    "Region",
    "UseArnRegion",
    "UseDualStack",
    "UseFIPS",
    "UseGlobalEndpoint",
    "UseObjectLambdaEndpoint",
    "UseS3ExpressControlEndpoint"
  ]
}), $l = (e, t = {}) => Wy.get(e, () => Sm(Gy, {
  endpointParams: e,
  logger: t.logger
}));
is.aws = ml;
const Xy = (e) => async (t, n, r) => {
  var u, p, d;
  if (!r)
    throw new Error("Could not find `input` for `defaultEndpointRuleSetHttpAuthSchemeParametersProvider`");
  const i = await e(t, n, r), c = (d = (p = (u = or(n)) == null ? void 0 : u.commandInstance) == null ? void 0 : p.constructor) == null ? void 0 : d.getEndpointParameterInstructions;
  if (!c)
    throw new Error(`getEndpointParameterInstructions() is not defined on \`${n.commandName}\``);
  const a = await wl(r, { getEndpointParameterInstructions: c }, t);
  return Object.assign(i, a);
}, Yy = async (e, t, n) => ({
  operation: or(t).operation,
  region: await bn(e.region)() || (() => {
    throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
  })()
}), Zy = Xy(Yy);
function Hl(e) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "s3",
      region: e.region
    },
    propertiesExtractor: (t, n) => ({
      signingProperties: {
        config: t,
        context: n
      }
    })
  };
}
function zl(e) {
  return {
    schemeId: "aws.auth#sigv4a",
    signingProperties: {
      name: "s3",
      region: e.region
    },
    propertiesExtractor: (t, n) => ({
      signingProperties: {
        config: t,
        context: n
      }
    })
  };
}
const Jy = (e, t, n) => (i) => {
  var p;
  const a = (p = e(i).properties) == null ? void 0 : p.authSchemes;
  if (!a)
    return t(i);
  const u = [];
  for (const d of a) {
    const { name: f, properties: v = {}, ...y } = d, A = f.toLowerCase();
    f !== A && console.warn(`HttpAuthScheme has been normalized with lowercasing: \`${f}\` to \`${A}\``);
    let U;
    if (A === "sigv4a") {
      if (U = "aws.auth#sigv4a", a.find((B) => {
        const q = B.name.toLowerCase();
        return q !== "sigv4a" && q.startsWith("sigv4");
      }))
        continue;
    } else if (A.startsWith("sigv4"))
      U = "aws.auth#sigv4";
    else
      throw new Error(`Unknown HttpAuthScheme found in \`@smithy.rules#endpointRuleSet\`: \`${A}\``);
    const z = n[U];
    if (!z)
      throw new Error(`Could not find HttpAuthOption create function for \`${U}\``);
    const K = z(i);
    K.schemeId = U, K.signingProperties = { ...K.signingProperties || {}, ...y, ...v }, u.push(K);
  }
  return u;
}, Qy = (e) => {
  const t = [];
  switch (e.operation) {
    default:
      t.push(Hl(e)), t.push(zl(e));
  }
  return t;
}, e0 = Jy($l, Qy, {
  "aws.auth#sigv4": Hl,
  "aws.auth#sigv4a": zl
}), t0 = (e) => {
  const t = zh(e), n = yh(t);
  return Object.assign(n, {
    authSchemePreference: bn(e.authSchemePreference ?? [])
  });
}, n0 = (e) => Object.assign(e, {
  useFipsEndpoint: e.useFipsEndpoint ?? !1,
  useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
  forcePathStyle: e.forcePathStyle ?? !1,
  useAccelerateEndpoint: e.useAccelerateEndpoint ?? !1,
  useGlobalEndpoint: e.useGlobalEndpoint ?? !1,
  disableMultiregionAccessPoints: e.disableMultiregionAccessPoints ?? !1,
  defaultSigningName: "s3"
}), Kl = {
  ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
  UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
  DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
  Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
  DisableS3ExpressSessionAuth: { type: "clientContextParams", name: "disableS3ExpressSessionAuth" },
  UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
};
class Wt extends Zn {
  constructor(t) {
    super(t), Object.setPrototypeOf(this, Wt.prototype);
  }
}
class go extends Wt {
  constructor(n) {
    super({
      name: "NoSuchUpload",
      $fault: "client",
      ...n
    });
    Ke(this, "name", "NoSuchUpload");
    Ke(this, "$fault", "client");
    Object.setPrototypeOf(this, go.prototype);
  }
}
class mo extends Wt {
  constructor(n) {
    super({
      name: "ObjectNotInActiveTierError",
      $fault: "client",
      ...n
    });
    Ke(this, "name", "ObjectNotInActiveTierError");
    Ke(this, "$fault", "client");
    Object.setPrototypeOf(this, mo.prototype);
  }
}
class yo extends Wt {
  constructor(n) {
    super({
      name: "BucketAlreadyExists",
      $fault: "client",
      ...n
    });
    Ke(this, "name", "BucketAlreadyExists");
    Ke(this, "$fault", "client");
    Object.setPrototypeOf(this, yo.prototype);
  }
}
class bo extends Wt {
  constructor(n) {
    super({
      name: "BucketAlreadyOwnedByYou",
      $fault: "client",
      ...n
    });
    Ke(this, "name", "BucketAlreadyOwnedByYou");
    Ke(this, "$fault", "client");
    Object.setPrototypeOf(this, bo.prototype);
  }
}
class vo extends Wt {
  constructor(n) {
    super({
      name: "NoSuchBucket",
      $fault: "client",
      ...n
    });
    Ke(this, "name", "NoSuchBucket");
    Ke(this, "$fault", "client");
    Object.setPrototypeOf(this, vo.prototype);
  }
}
var Wc;
(function(e) {
  e.visit = (t, n) => t.Prefix !== void 0 ? n.Prefix(t.Prefix) : t.Tag !== void 0 ? n.Tag(t.Tag) : t.And !== void 0 ? n.And(t.And) : n._(t.$unknown[0], t.$unknown[1]);
})(Wc || (Wc = {}));
var Xc;
(function(e) {
  e.visit = (t, n) => t.Prefix !== void 0 ? n.Prefix(t.Prefix) : t.Tag !== void 0 ? n.Tag(t.Tag) : t.AccessPointArn !== void 0 ? n.AccessPointArn(t.AccessPointArn) : t.And !== void 0 ? n.And(t.And) : n._(t.$unknown[0], t.$unknown[1]);
})(Xc || (Xc = {}));
class wo extends Wt {
  constructor(n) {
    super({
      name: "InvalidObjectState",
      $fault: "client",
      ...n
    });
    Ke(this, "name", "InvalidObjectState");
    Ke(this, "$fault", "client");
    Ke(this, "StorageClass");
    Ke(this, "AccessTier");
    Object.setPrototypeOf(this, wo.prototype), this.StorageClass = n.StorageClass, this.AccessTier = n.AccessTier;
  }
}
class xo extends Wt {
  constructor(n) {
    super({
      name: "NoSuchKey",
      $fault: "client",
      ...n
    });
    Ke(this, "name", "NoSuchKey");
    Ke(this, "$fault", "client");
    Object.setPrototypeOf(this, xo.prototype);
  }
}
class Eo extends Wt {
  constructor(n) {
    super({
      name: "NotFound",
      $fault: "client",
      ...n
    });
    Ke(this, "name", "NotFound");
    Ke(this, "$fault", "client");
    Object.setPrototypeOf(this, Eo.prototype);
  }
}
const r0 = (e) => ({
  ...e,
  ...e.SecretAccessKey && { SecretAccessKey: Mn },
  ...e.SessionToken && { SessionToken: Mn }
}), s0 = (e) => ({
  ...e,
  ...e.SSEKMSKeyId && { SSEKMSKeyId: Mn },
  ...e.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: Mn },
  ...e.Credentials && { Credentials: r0(e.Credentials) }
}), i0 = (e) => ({
  ...e,
  ...e.SSEKMSKeyId && { SSEKMSKeyId: Mn },
  ...e.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: Mn }
}), o0 = (e) => ({
  ...e,
  ...e.SSEKMSKeyId && { SSEKMSKeyId: Mn }
}), a0 = (e) => ({
  ...e,
  ...e.SSECustomerKey && { SSECustomerKey: Mn }
});
class So extends Wt {
  constructor(n) {
    super({
      name: "EncryptionTypeMismatch",
      $fault: "client",
      ...n
    });
    Ke(this, "name", "EncryptionTypeMismatch");
    Ke(this, "$fault", "client");
    Object.setPrototypeOf(this, So.prototype);
  }
}
class Ao extends Wt {
  constructor(n) {
    super({
      name: "InvalidRequest",
      $fault: "client",
      ...n
    });
    Ke(this, "name", "InvalidRequest");
    Ke(this, "$fault", "client");
    Object.setPrototypeOf(this, Ao.prototype);
  }
}
class Co extends Wt {
  constructor(n) {
    super({
      name: "InvalidWriteOffset",
      $fault: "client",
      ...n
    });
    Ke(this, "name", "InvalidWriteOffset");
    Ke(this, "$fault", "client");
    Object.setPrototypeOf(this, Co.prototype);
  }
}
class Ro extends Wt {
  constructor(n) {
    super({
      name: "TooManyParts",
      $fault: "client",
      ...n
    });
    Ke(this, "name", "TooManyParts");
    Ke(this, "$fault", "client");
    Object.setPrototypeOf(this, Ro.prototype);
  }
}
class ko extends Wt {
  constructor(n) {
    super({
      name: "ObjectAlreadyInActiveTierError",
      $fault: "client",
      ...n
    });
    Ke(this, "name", "ObjectAlreadyInActiveTierError");
    Ke(this, "$fault", "client");
    Object.setPrototypeOf(this, ko.prototype);
  }
}
var Yc;
(function(e) {
  e.visit = (t, n) => t.Records !== void 0 ? n.Records(t.Records) : t.Stats !== void 0 ? n.Stats(t.Stats) : t.Progress !== void 0 ? n.Progress(t.Progress) : t.Cont !== void 0 ? n.Cont(t.Cont) : t.End !== void 0 ? n.End(t.End) : n._(t.$unknown[0], t.$unknown[1]);
})(Yc || (Yc = {}));
const c0 = async (e, t) => {
  const n = ju(e, t), r = _t({}, wr, {
    [Vb]: e[hb],
    [Oo]: e[To],
    [Io]: e[_o],
    [Yl]: e[Wl],
    [Ir]: [() => wr(e[fs]), () => e[fs].toString()]
  });
  n.bp("/"), n.p("Bucket", () => e.Bucket, "{Bucket}", !1);
  const i = _t({
    [jb]: [, ""]
  });
  return n.m("GET").h(r).q(i).b(void 0), n.build();
}, u0 = async (e, t) => {
  const n = ju(e, t), r = _t({}, wr, {
    [Rb]: e[G0],
    [kb]: [() => wr(e[Zc]), () => Ms(e[Zc]).toString()],
    [Tb]: e[W0],
    [_b]: [() => wr(e[Jc]), () => Ms(e[Jc]).toString()],
    [Ib]: e[nb],
    [Zl]: e[Vl],
    [rv]: e[pb],
    [Jl]: e[Gl],
    [ev]: e[lb],
    [Xb]: e[K0],
    [zb]: e[D0]
  });
  n.bp("/{Key+}"), n.p("Bucket", () => e.Bucket, "{Bucket}", !1), n.p("Key", () => e.Key, "{Key+}", !0);
  const i = _t({
    [ov]: [, "GetObject"],
    [Nb]: [, e[sb]],
    [Pb]: [, e[ib]],
    [Mb]: [, e[ob]],
    [Bb]: [, e[ab]],
    [Db]: [, e[cb]],
    [Fb]: [() => e.ResponseExpires !== void 0, () => Ms(e[ub]).toString()],
    [Lb]: [, e[Xl]],
    [Ob]: [() => e.PartNumber !== void 0, () => e[tb].toString()]
  });
  return n.m("GET").h(r).q(i).b(void 0), n.build();
}, l0 = async (e, t) => {
  if (e.statusCode !== 200 && e.statusCode >= 300)
    return ql(e, t);
  const n = _t({
    $metadata: en(e),
    [To]: [, e.headers[Oo]],
    [_o]: [, e.headers[Io]],
    [Wl]: [, e.headers[Yl]],
    [fs]: [() => e.headers[Ir] !== void 0, () => Pi(e.headers[Ir])]
  }), r = xr(up(await el(e.body, t)), "body");
  return r[xi] != null && (n[xi] = R0(r[xi])), n;
}, d0 = async (e, t) => {
  if (e.statusCode !== 200 && e.statusCode >= 300)
    return ql(e, t);
  const n = _t({
    $metadata: en(e),
    [H0]: [() => e.headers[nu] !== void 0, () => Pi(e.headers[nu])],
    [k0]: [, e.headers[yb]],
    [Zr]: [, e.headers[Wb]],
    [fb]: [, e.headers[Jb]],
    [X0]: [() => e.headers[tu] !== void 0, () => xr(Bi(e.headers[tu]))],
    [B0]: [() => e.headers[Qc] !== void 0, () => fp(e.headers[Qc])],
    [V0]: [, e.headers[Ab]],
    [_0]: [, e.headers[Ub]],
    [O0]: [, e.headers[$b]],
    [I0]: [, e.headers[Hb]],
    [j0]: [, e.headers[Kb]],
    [L0]: [, e.headers[qb]],
    [U0]: [, e.headers[Gb]],
    [Y0]: [() => e.headers[ru] !== void 0, () => Ps(e.headers[ru])],
    [Xl]: [, e.headers[sv]],
    [T0]: [, e.headers[bb]],
    [N0]: [, e.headers[vb]],
    [P0]: [, e.headers[wb]],
    [M0]: [, e.headers[xb]],
    [F0]: [, e.headers[Eb]],
    [$0]: [, e.headers[Sb]],
    [z0]: [() => e.headers[eu] !== void 0, () => xr(Bi(e.headers[eu]))],
    [q0]: [, e.headers[Cb]],
    [mb]: [, e.headers[iv]],
    [To]: [, e.headers[Oo]],
    [Vl]: [, e.headers[Zl]],
    [Gl]: [, e.headers[Jl]],
    [_o]: [, e.headers[Io]],
    [fs]: [() => e.headers[Ir] !== void 0, () => Pi(e.headers[Ir])],
    [Jr]: [, e.headers[nv]],
    [rb]: [, e.headers[Qb]],
    [db]: [, e.headers[tv]],
    [eb]: [() => e.headers[su] !== void 0, () => Ps(e.headers[su])],
    [gb]: [() => e.headers[ou] !== void 0, () => Ps(e.headers[ou])],
    [J0]: [, e.headers[Zb]],
    [Q0]: [
      () => e.headers[iu] !== void 0,
      () => xr(Ju(e.headers[iu]))
    ],
    [Z0]: [, e.headers[Yb]],
    Metadata: [
      ,
      Object.keys(e.headers).filter((i) => i.startsWith("x-amz-meta-")).reduce((i, c) => (i[c.substring(11)] = e.headers[c], i), {})
    ]
  }), r = e.body;
  return t.sdkStreamMixin(r), n.Body = r, n;
}, ql = async (e, t) => {
  const n = {
    ...e,
    body: await Lp(e.body, t)
  }, r = Up(e, n.body);
  switch (r) {
    case "NoSuchUpload":
    case "com.amazonaws.s3#NoSuchUpload":
      throw await x0(n);
    case "ObjectNotInActiveTierError":
    case "com.amazonaws.s3#ObjectNotInActiveTierError":
      throw await A0(n);
    case "BucketAlreadyExists":
    case "com.amazonaws.s3#BucketAlreadyExists":
      throw await h0(n);
    case "BucketAlreadyOwnedByYou":
    case "com.amazonaws.s3#BucketAlreadyOwnedByYou":
      throw await p0(n);
    case "NoSuchBucket":
    case "com.amazonaws.s3#NoSuchBucket":
      throw await v0(n);
    case "InvalidObjectState":
    case "com.amazonaws.s3#InvalidObjectState":
      throw await m0(n);
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      throw await w0(n);
    case "NotFound":
    case "com.amazonaws.s3#NotFound":
      throw await E0(n);
    case "EncryptionTypeMismatch":
    case "com.amazonaws.s3#EncryptionTypeMismatch":
      throw await g0(n);
    case "InvalidRequest":
    case "com.amazonaws.s3#InvalidRequest":
      throw await y0(n);
    case "InvalidWriteOffset":
    case "com.amazonaws.s3#InvalidWriteOffset":
      throw await b0(n);
    case "TooManyParts":
    case "com.amazonaws.s3#TooManyParts":
      throw await C0(n);
    case "ObjectAlreadyInActiveTierError":
    case "com.amazonaws.s3#ObjectAlreadyInActiveTierError":
      throw await S0(n);
    default:
      const i = n.body;
      return f0({
        output: e,
        parsedBody: i,
        errorCode: r
      });
  }
}, f0 = Xh(Wt), h0 = async (e, t) => {
  const n = _t({});
  e.body;
  const r = new yo({
    $metadata: en(e),
    ...n
  });
  return an(r, e.body);
}, p0 = async (e, t) => {
  const n = _t({});
  e.body;
  const r = new bo({
    $metadata: en(e),
    ...n
  });
  return an(r, e.body);
}, g0 = async (e, t) => {
  const n = _t({});
  e.body;
  const r = new So({
    $metadata: en(e),
    ...n
  });
  return an(r, e.body);
}, m0 = async (e, t) => {
  const n = _t({}), r = e.body;
  r[wi] != null && (n[wi] = Er(r[wi])), r[Jr] != null && (n[Jr] = Er(r[Jr]));
  const i = new wo({
    $metadata: en(e),
    ...n
  });
  return an(i, e.body);
}, y0 = async (e, t) => {
  const n = _t({});
  e.body;
  const r = new Ao({
    $metadata: en(e),
    ...n
  });
  return an(r, e.body);
}, b0 = async (e, t) => {
  const n = _t({});
  e.body;
  const r = new Co({
    $metadata: en(e),
    ...n
  });
  return an(r, e.body);
}, v0 = async (e, t) => {
  const n = _t({});
  e.body;
  const r = new vo({
    $metadata: en(e),
    ...n
  });
  return an(r, e.body);
}, w0 = async (e, t) => {
  const n = _t({});
  e.body;
  const r = new xo({
    $metadata: en(e),
    ...n
  });
  return an(r, e.body);
}, x0 = async (e, t) => {
  const n = _t({});
  e.body;
  const r = new go({
    $metadata: en(e),
    ...n
  });
  return an(r, e.body);
}, E0 = async (e, t) => {
  const n = _t({});
  e.body;
  const r = new Eo({
    $metadata: en(e),
    ...n
  });
  return an(r, e.body);
}, S0 = async (e, t) => {
  const n = _t({});
  e.body;
  const r = new ko({
    $metadata: en(e),
    ...n
  });
  return an(r, e.body);
}, A0 = async (e, t) => {
  const n = _t({});
  e.body;
  const r = new mo({
    $metadata: en(e),
    ...n
  });
  return an(r, e.body);
}, C0 = async (e, t) => {
  const n = _t({});
  e.body;
  const r = new Ro({
    $metadata: en(e),
    ...n
  });
  return an(r, e.body);
}, R0 = (e, t) => {
  const n = {};
  return e[vi] != null && (n[vi] = Er(e[vi])), e[Ei] != null && (n[Ei] = Er(e[Ei])), e[Si] != null && (n[Si] = Er(e[Si])), e[Zr] != null && (n[Zr] = xr(Ju(e[Zr]))), n;
}, en = (e) => ({
  httpStatusCode: e.statusCode,
  requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
  extendedRequestId: e.headers["x-amz-id-2"],
  cfId: e.headers["x-amz-cf-id"]
}), vi = "AccessKeyId", k0 = "AcceptRanges", wi = "AccessTier", fs = "BucketKeyEnabled", xi = "Credentials", T0 = "CacheControl", _0 = "ChecksumCRC32", O0 = "ChecksumCRC32C", I0 = "ChecksumCRC64NVME", N0 = "ContentDisposition", P0 = "ContentEncoding", M0 = "ContentLanguage", B0 = "ContentLength", D0 = "ChecksumMode", F0 = "ContentRange", j0 = "ChecksumSHA1", L0 = "ChecksumSHA256", U0 = "ChecksumType", $0 = "ContentType", H0 = "DeleteMarker", z0 = "Expires", K0 = "ExpectedBucketOwner", q0 = "ExpiresString", V0 = "ETag", Zr = "Expiration", G0 = "IfMatch", Zc = "IfModifiedSince", W0 = "IfNoneMatch", Jc = "IfUnmodifiedSince", X0 = "LastModified", Y0 = "MissingMeta", Z0 = "ObjectLockLegalHoldStatus", J0 = "ObjectLockMode", Q0 = "ObjectLockRetainUntilDate", eb = "PartsCount", tb = "PartNumber", nb = "Range", rb = "RequestCharged", sb = "ResponseCacheControl", ib = "ResponseContentDisposition", ob = "ResponseContentEncoding", ab = "ResponseContentLanguage", cb = "ResponseContentType", ub = "ResponseExpires", lb = "RequestPayer", db = "ReplicationStatus", fb = "Restore", Ei = "SecretAccessKey", Jr = "StorageClass", hb = "SessionMode", To = "ServerSideEncryption", Vl = "SSECustomerAlgorithm", pb = "SSECustomerKey", Gl = "SSECustomerKeyMD5", Wl = "SSEKMSEncryptionContext", _o = "SSEKMSKeyId", Si = "SessionToken", gb = "TagCount", Xl = "VersionId", mb = "WebsiteRedirectLocation", yb = "accept-ranges", bb = "cache-control", vb = "content-disposition", wb = "content-encoding", xb = "content-language", Qc = "content-length", Eb = "content-range", Sb = "content-type", eu = "expires", Ab = "etag", Cb = "expiresstring", Rb = "if-match", kb = "if-modified-since", Tb = "if-none-match", _b = "if-unmodified-since", tu = "last-modified", Ob = "partNumber", Ib = "range", Nb = "response-cache-control", Pb = "response-content-disposition", Mb = "response-content-encoding", Bb = "response-content-language", Db = "response-content-type", Fb = "response-expires", jb = "session", Lb = "versionId", Ub = "x-amz-checksum-crc32", $b = "x-amz-checksum-crc32c", Hb = "x-amz-checksum-crc64nvme", zb = "x-amz-checksum-mode", Kb = "x-amz-checksum-sha1", qb = "x-amz-checksum-sha256", Vb = "x-amz-create-session-mode", Gb = "x-amz-checksum-type", nu = "x-amz-delete-marker", Wb = "x-amz-expiration", Xb = "x-amz-expected-bucket-owner", ru = "x-amz-missing-meta", su = "x-amz-mp-parts-count", Yb = "x-amz-object-lock-legal-hold", Zb = "x-amz-object-lock-mode", iu = "x-amz-object-lock-retain-until-date", Jb = "x-amz-restore", Qb = "x-amz-request-charged", ev = "x-amz-request-payer", tv = "x-amz-replication-status", nv = "x-amz-storage-class", Oo = "x-amz-server-side-encryption", Io = "x-amz-server-side-encryption-aws-kms-key-id", Ir = "x-amz-server-side-encryption-bucket-key-enabled", Yl = "x-amz-server-side-encryption-context", Zl = "x-amz-server-side-encryption-customer-algorithm", rv = "x-amz-server-side-encryption-customer-key", Jl = "x-amz-server-side-encryption-customer-key-md5", ou = "x-amz-tagging-count", sv = "x-amz-version-id", iv = "x-amz-website-redirect-location", ov = "x-id";
class av extends Zi.classBuilder().ep({
  ...Kl,
  DisableS3ExpressSessionAuth: { type: "staticContextParams", value: !0 },
  Bucket: { type: "contextParams", name: "Bucket" }
}).m(function(t, n, r, i) {
  return [
    Pu(r, this.serialize, this.deserialize),
    xl(r, t.getEndpointParameterInstructions()),
    Wg(r)
  ];
}).s("AmazonS3", "CreateSession", {}).n("S3Client", "CreateSessionCommand").f(i0, s0).ser(c0).de(l0).build() {
}
const cv = "3.817.0", uv = {
  version: cv
}, lv = (e) => new TextEncoder().encode(e);
function au(e) {
  return typeof e == "string" ? e.length === 0 : e.byteLength === 0;
}
var Ql = { name: "SHA-1" }, cu = {
  name: "HMAC",
  hash: Ql
}, dv = new Uint8Array([
  218,
  57,
  163,
  238,
  94,
  107,
  75,
  13,
  50,
  85,
  191,
  239,
  149,
  96,
  24,
  144,
  175,
  216,
  7,
  9
]);
const fv = {};
function Nn() {
  return typeof window < "u" ? window : typeof self < "u" ? self : fv;
}
var hv = (
  /** @class */
  function() {
    function e(t) {
      this.toHash = new Uint8Array(0), t !== void 0 && (this.key = new Promise(function(n, r) {
        Nn().crypto.subtle.importKey("raw", uu(t), cu, !1, ["sign"]).then(n, r);
      }), this.key.catch(function() {
      }));
    }
    return e.prototype.update = function(t) {
      if (!au(t)) {
        var n = uu(t), r = new Uint8Array(this.toHash.byteLength + n.byteLength);
        r.set(this.toHash, 0), r.set(n, this.toHash.byteLength), this.toHash = r;
      }
    }, e.prototype.digest = function() {
      var t = this;
      return this.key ? this.key.then(function(n) {
        return Nn().crypto.subtle.sign(cu, n, t.toHash).then(function(r) {
          return new Uint8Array(r);
        });
      }) : au(this.toHash) ? Promise.resolve(dv) : Promise.resolve().then(function() {
        return Nn().crypto.subtle.digest(Ql, t.toHash);
      }).then(function(n) {
        return Promise.resolve(new Uint8Array(n));
      });
    }, e.prototype.reset = function() {
      this.toHash = new Uint8Array(0);
    }, e;
  }()
);
function uu(e) {
  return typeof e == "string" ? lv(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
}
var pv = [
  "decrypt",
  "digest",
  "encrypt",
  "exportKey",
  "generateKey",
  "importKey",
  "sign",
  "verify"
];
function ed(e) {
  if (gv(e) && typeof e.crypto.subtle == "object") {
    var t = e.crypto.subtle;
    return mv(t);
  }
  return !1;
}
function gv(e) {
  if (typeof e == "object" && typeof e.crypto == "object") {
    var t = e.crypto.getRandomValues;
    return typeof t == "function";
  }
  return !1;
}
function mv(e) {
  return e && pv.every(function(t) {
    return typeof e[t] == "function";
  });
}
var yv = (
  /** @class */
  function() {
    function e(t) {
      if (ed(Nn()))
        this.hash = new hv(t);
      else
        throw new Error("SHA1 not supported");
    }
    return e.prototype.update = function(t, n) {
      this.hash.update(Bn(t));
    }, e.prototype.digest = function() {
      return this.hash.digest();
    }, e.prototype.reset = function() {
      this.hash.reset();
    }, e;
  }()
), td = { name: "SHA-256" }, lu = {
  name: "HMAC",
  hash: td
}, bv = new Uint8Array([
  227,
  176,
  196,
  66,
  152,
  252,
  28,
  20,
  154,
  251,
  244,
  200,
  153,
  111,
  185,
  36,
  39,
  174,
  65,
  228,
  100,
  155,
  147,
  76,
  164,
  149,
  153,
  27,
  120,
  82,
  184,
  85
]), vv = (
  /** @class */
  function() {
    function e(t) {
      this.toHash = new Uint8Array(0), this.secret = t, this.reset();
    }
    return e.prototype.update = function(t) {
      if (!Tr(t)) {
        var n = Bn(t), r = new Uint8Array(this.toHash.byteLength + n.byteLength);
        r.set(this.toHash, 0), r.set(n, this.toHash.byteLength), this.toHash = r;
      }
    }, e.prototype.digest = function() {
      var t = this;
      return this.key ? this.key.then(function(n) {
        return Nn().crypto.subtle.sign(lu, n, t.toHash).then(function(r) {
          return new Uint8Array(r);
        });
      }) : Tr(this.toHash) ? Promise.resolve(bv) : Promise.resolve().then(function() {
        return Nn().crypto.subtle.digest(td, t.toHash);
      }).then(function(n) {
        return Promise.resolve(new Uint8Array(n));
      });
    }, e.prototype.reset = function() {
      var t = this;
      this.toHash = new Uint8Array(0), this.secret && this.secret !== void 0 && (this.key = new Promise(function(n, r) {
        Nn().crypto.subtle.importKey("raw", Bn(t.secret), lu, !1, ["sign"]).then(n, r);
      }), this.key.catch(function() {
      }));
    }, e;
  }()
), mn = 64, wv = 32, xv = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), Ev = [
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
], Sv = Math.pow(2, 53) - 1, Qr = (
  /** @class */
  function() {
    function e() {
      this.state = Int32Array.from(Ev), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1;
    }
    return e.prototype.update = function(t) {
      if (this.finished)
        throw new Error("Attempted to update an already finished hash.");
      var n = 0, r = t.byteLength;
      if (this.bytesHashed += r, this.bytesHashed * 8 > Sv)
        throw new Error("Cannot hash more than 2^53 - 1 bits");
      for (; r > 0; )
        this.buffer[this.bufferLength++] = t[n++], r--, this.bufferLength === mn && (this.hashBuffer(), this.bufferLength = 0);
    }, e.prototype.digest = function() {
      if (!this.finished) {
        var t = this.bytesHashed * 8, n = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength), r = this.bufferLength;
        if (n.setUint8(this.bufferLength++, 128), r % mn >= mn - 8) {
          for (var i = this.bufferLength; i < mn; i++)
            n.setUint8(i, 0);
          this.hashBuffer(), this.bufferLength = 0;
        }
        for (var i = this.bufferLength; i < mn - 8; i++)
          n.setUint8(i, 0);
        n.setUint32(mn - 8, Math.floor(t / 4294967296), !0), n.setUint32(mn - 4, t), this.hashBuffer(), this.finished = !0;
      }
      for (var c = new Uint8Array(wv), i = 0; i < 8; i++)
        c[i * 4] = this.state[i] >>> 24 & 255, c[i * 4 + 1] = this.state[i] >>> 16 & 255, c[i * 4 + 2] = this.state[i] >>> 8 & 255, c[i * 4 + 3] = this.state[i] >>> 0 & 255;
      return c;
    }, e.prototype.hashBuffer = function() {
      for (var t = this, n = t.buffer, r = t.state, i = r[0], c = r[1], a = r[2], u = r[3], p = r[4], d = r[5], f = r[6], v = r[7], y = 0; y < mn; y++) {
        if (y < 16)
          this.temp[y] = (n[y * 4] & 255) << 24 | (n[y * 4 + 1] & 255) << 16 | (n[y * 4 + 2] & 255) << 8 | n[y * 4 + 3] & 255;
        else {
          var A = this.temp[y - 2], U = (A >>> 17 | A << 15) ^ (A >>> 19 | A << 13) ^ A >>> 10;
          A = this.temp[y - 15];
          var z = (A >>> 7 | A << 25) ^ (A >>> 18 | A << 14) ^ A >>> 3;
          this.temp[y] = (U + this.temp[y - 7] | 0) + (z + this.temp[y - 16] | 0);
        }
        var K = (((p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) + (p & d ^ ~p & f) | 0) + (v + (xv[y] + this.temp[y] | 0) | 0) | 0, R = ((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + (i & c ^ i & a ^ c & a) | 0;
        v = f, f = d, d = p, p = u + K | 0, u = a, a = c, c = i, i = K + R | 0;
      }
      r[0] += i, r[1] += c, r[2] += a, r[3] += u, r[4] += p, r[5] += d, r[6] += f, r[7] += v;
    }, e;
  }()
), Av = (
  /** @class */
  function() {
    function e(t) {
      this.secret = t, this.hash = new Qr(), this.reset();
    }
    return e.prototype.update = function(t) {
      if (!(Tr(t) || this.error))
        try {
          this.hash.update(Bn(t));
        } catch (n) {
          this.error = n;
        }
    }, e.prototype.digestSync = function() {
      if (this.error)
        throw this.error;
      return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest();
    }, e.prototype.digest = function() {
      return no(this, void 0, void 0, function() {
        return ro(this, function(t) {
          return [2, this.digestSync()];
        });
      });
    }, e.prototype.reset = function() {
      if (this.hash = new Qr(), this.secret) {
        this.outer = new Qr();
        var t = Cv(this.secret), n = new Uint8Array(mn);
        n.set(t);
        for (var r = 0; r < mn; r++)
          t[r] ^= 54, n[r] ^= 92;
        this.hash.update(t), this.outer.update(n);
        for (var r = 0; r < t.byteLength; r++)
          t[r] = 0;
      }
    }, e;
  }()
);
function Cv(e) {
  var t = Bn(e);
  if (t.byteLength > mn) {
    var n = new Qr();
    n.update(t), t = n.digest();
  }
  var r = new Uint8Array(mn);
  return r.set(t), r;
}
var Rv = (
  /** @class */
  function() {
    function e(t) {
      ed(Nn()) ? this.hash = new vv(t) : this.hash = new Av(t);
    }
    return e.prototype.update = function(t, n) {
      this.hash.update(Bn(t));
    }, e.prototype.digest = function() {
      return this.hash.digest();
    }, e.prototype.reset = function() {
      this.hash.reset();
    }, e;
  }()
);
const kv = {
  "Amazon Silk": "amazon_silk",
  "Android Browser": "android",
  Bada: "bada",
  BlackBerry: "blackberry",
  Chrome: "chrome",
  Chromium: "chromium",
  Electron: "electron",
  Epiphany: "epiphany",
  Firefox: "firefox",
  Focus: "focus",
  Generic: "generic",
  "Google Search": "google_search",
  Googlebot: "googlebot",
  "Internet Explorer": "ie",
  "K-Meleon": "k_meleon",
  Maxthon: "maxthon",
  "Microsoft Edge": "edge",
  "MZ Browser": "mz",
  "NAVER Whale Browser": "naver",
  Opera: "opera",
  "Opera Coast": "opera_coast",
  PhantomJS: "phantomjs",
  Puffin: "puffin",
  QupZilla: "qupzilla",
  QQ: "qq",
  QQLite: "qqlite",
  Safari: "safari",
  Sailfish: "sailfish",
  "Samsung Internet for Android": "samsung_internet",
  SeaMonkey: "seamonkey",
  Sleipnir: "sleipnir",
  Swing: "swing",
  Tizen: "tizen",
  "UC Browser": "uc",
  Vivaldi: "vivaldi",
  "WebOS Browser": "webos",
  WeChat: "wechat",
  "Yandex Browser": "yandex",
  Roku: "roku"
}, nd = {
  amazon_silk: "Amazon Silk",
  android: "Android Browser",
  bada: "Bada",
  blackberry: "BlackBerry",
  chrome: "Chrome",
  chromium: "Chromium",
  electron: "Electron",
  epiphany: "Epiphany",
  firefox: "Firefox",
  focus: "Focus",
  generic: "Generic",
  googlebot: "Googlebot",
  google_search: "Google Search",
  ie: "Internet Explorer",
  k_meleon: "K-Meleon",
  maxthon: "Maxthon",
  edge: "Microsoft Edge",
  mz: "MZ Browser",
  naver: "NAVER Whale Browser",
  opera: "Opera",
  opera_coast: "Opera Coast",
  phantomjs: "PhantomJS",
  puffin: "Puffin",
  qupzilla: "QupZilla",
  qq: "QQ Browser",
  qqlite: "QQ Browser Lite",
  safari: "Safari",
  sailfish: "Sailfish",
  samsung_internet: "Samsung Internet for Android",
  seamonkey: "SeaMonkey",
  sleipnir: "Sleipnir",
  swing: "Swing",
  tizen: "Tizen",
  uc: "UC Browser",
  vivaldi: "Vivaldi",
  webos: "WebOS Browser",
  wechat: "WeChat",
  yandex: "Yandex Browser"
}, wt = {
  tablet: "tablet",
  mobile: "mobile",
  desktop: "desktop",
  tv: "tv"
}, Jt = {
  WindowsPhone: "Windows Phone",
  Windows: "Windows",
  MacOS: "macOS",
  iOS: "iOS",
  Android: "Android",
  WebOS: "WebOS",
  BlackBerry: "BlackBerry",
  Bada: "Bada",
  Tizen: "Tizen",
  Linux: "Linux",
  ChromeOS: "Chrome OS",
  PlayStation4: "PlayStation 4",
  Roku: "Roku"
}, _n = {
  EdgeHTML: "EdgeHTML",
  Blink: "Blink",
  Trident: "Trident",
  Presto: "Presto",
  Gecko: "Gecko",
  WebKit: "WebKit"
};
class ae {
  /**
   * Get first matched item for a string
   * @param {RegExp} regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getFirstMatch(t, n) {
    const r = n.match(t);
    return r && r.length > 0 && r[1] || "";
  }
  /**
   * Get second matched item for a string
   * @param regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getSecondMatch(t, n) {
    const r = n.match(t);
    return r && r.length > 1 && r[2] || "";
  }
  /**
   * Match a regexp and return a constant or undefined
   * @param {RegExp} regexp
   * @param {String} ua
   * @param {*} _const Any const that will be returned if regexp matches the string
   * @return {*}
   */
  static matchAndReturnConst(t, n, r) {
    if (t.test(n))
      return r;
  }
  static getWindowsVersionName(t) {
    switch (t) {
      case "NT":
        return "NT";
      case "XP":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.1":
        return "XP";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return;
    }
  }
  /**
   * Get macOS version name
   *    10.5 - Leopard
   *    10.6 - Snow Leopard
   *    10.7 - Lion
   *    10.8 - Mountain Lion
   *    10.9 - Mavericks
   *    10.10 - Yosemite
   *    10.11 - El Capitan
   *    10.12 - Sierra
   *    10.13 - High Sierra
   *    10.14 - Mojave
   *    10.15 - Catalina
   *
   * @example
   *   getMacOSVersionName("10.14") // 'Mojave'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getMacOSVersionName(t) {
    const n = t.split(".").splice(0, 2).map((r) => parseInt(r, 10) || 0);
    if (n.push(0), n[0] === 10)
      switch (n[1]) {
        case 5:
          return "Leopard";
        case 6:
          return "Snow Leopard";
        case 7:
          return "Lion";
        case 8:
          return "Mountain Lion";
        case 9:
          return "Mavericks";
        case 10:
          return "Yosemite";
        case 11:
          return "El Capitan";
        case 12:
          return "Sierra";
        case 13:
          return "High Sierra";
        case 14:
          return "Mojave";
        case 15:
          return "Catalina";
        default:
          return;
      }
  }
  /**
   * Get Android version name
   *    1.5 - Cupcake
   *    1.6 - Donut
   *    2.0 - Eclair
   *    2.1 - Eclair
   *    2.2 - Froyo
   *    2.x - Gingerbread
   *    3.x - Honeycomb
   *    4.0 - Ice Cream Sandwich
   *    4.1 - Jelly Bean
   *    4.4 - KitKat
   *    5.x - Lollipop
   *    6.x - Marshmallow
   *    7.x - Nougat
   *    8.x - Oreo
   *    9.x - Pie
   *
   * @example
   *   getAndroidVersionName("7.0") // 'Nougat'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getAndroidVersionName(t) {
    const n = t.split(".").splice(0, 2).map((r) => parseInt(r, 10) || 0);
    if (n.push(0), !(n[0] === 1 && n[1] < 5)) {
      if (n[0] === 1 && n[1] < 6) return "Cupcake";
      if (n[0] === 1 && n[1] >= 6) return "Donut";
      if (n[0] === 2 && n[1] < 2) return "Eclair";
      if (n[0] === 2 && n[1] === 2) return "Froyo";
      if (n[0] === 2 && n[1] > 2) return "Gingerbread";
      if (n[0] === 3) return "Honeycomb";
      if (n[0] === 4 && n[1] < 1) return "Ice Cream Sandwich";
      if (n[0] === 4 && n[1] < 4) return "Jelly Bean";
      if (n[0] === 4 && n[1] >= 4) return "KitKat";
      if (n[0] === 5) return "Lollipop";
      if (n[0] === 6) return "Marshmallow";
      if (n[0] === 7) return "Nougat";
      if (n[0] === 8) return "Oreo";
      if (n[0] === 9) return "Pie";
    }
  }
  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  static getVersionPrecision(t) {
    return t.split(".").length;
  }
  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions('1.10.2.1',  '1.8.2.1.90')    // 1
   *   compareVersions('1.010.2.1', '1.09.2.1.90');  // 1
   *   compareVersions('1.10.2.1',  '1.10.2.1');     // 0
   *   compareVersions('1.10.2.1',  '1.0800.2');     // -1
   *   compareVersions('1.10.2.1',  '1.10',  true);  // 0
   *
   * @param {String} versionA versions versions to compare
   * @param {String} versionB versions versions to compare
   * @param {boolean} [isLoose] enable loose comparison
   * @return {Number} comparison result: -1 when versionA is lower,
   * 1 when versionA is bigger, 0 when both equal
   */
  /* eslint consistent-return: 1 */
  static compareVersions(t, n, r = !1) {
    const i = ae.getVersionPrecision(t), c = ae.getVersionPrecision(n);
    let a = Math.max(i, c), u = 0;
    const p = ae.map([t, n], (d) => {
      const f = a - ae.getVersionPrecision(d), v = d + new Array(f + 1).join(".0");
      return ae.map(v.split("."), (y) => new Array(20 - y.length).join("0") + y).reverse();
    });
    for (r && (u = a - Math.min(i, c)), a -= 1; a >= u; ) {
      if (p[0][a] > p[1][a])
        return 1;
      if (p[0][a] === p[1][a]) {
        if (a === u)
          return 0;
        a -= 1;
      } else if (p[0][a] < p[1][a])
        return -1;
    }
  }
  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  static map(t, n) {
    const r = [];
    let i;
    if (Array.prototype.map)
      return Array.prototype.map.call(t, n);
    for (i = 0; i < t.length; i += 1)
      r.push(n(t[i]));
    return r;
  }
  /**
   * Array::find polyfill
   *
   * @param  {Array} arr
   * @param  {Function} predicate
   * @return {Array}
   */
  static find(t, n) {
    let r, i;
    if (Array.prototype.find)
      return Array.prototype.find.call(t, n);
    for (r = 0, i = t.length; r < i; r += 1) {
      const c = t[r];
      if (n(c, r))
        return c;
    }
  }
  /**
   * Object::assign polyfill
   *
   * @param  {Object} obj
   * @param  {Object} ...objs
   * @return {Object}
   */
  static assign(t, ...n) {
    const r = t;
    let i, c;
    if (Object.assign)
      return Object.assign(t, ...n);
    for (i = 0, c = n.length; i < c; i += 1) {
      const a = n[i];
      typeof a == "object" && a !== null && Object.keys(a).forEach((p) => {
        r[p] = a[p];
      });
    }
    return t;
  }
  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('Microsoft Edge') // edge
   *
   * @param  {string} browserName
   * @return {string}
   */
  static getBrowserAlias(t) {
    return kv[t];
  }
  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('edge') // Microsoft Edge
   *
   * @param  {string} browserAlias
   * @return {string}
   */
  static getBrowserTypeByAlias(t) {
    return nd[t] || "";
  }
}
const dt = /version\/(\d+(\.?_?\d+)+)/i, Tv = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe(e) {
      const t = {
        name: "Googlebot"
      }, n = ae.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || ae.getFirstMatch(dt, e);
      return n && (t.version = n), t;
    }
  },
  /* Opera < 13.0 */
  {
    test: [/opera/i],
    describe(e) {
      const t = {
        name: "Opera"
      }, n = ae.getFirstMatch(dt, e) || ae.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  /* Opera > 13.0 */
  {
    test: [/opr\/|opios/i],
    describe(e) {
      const t = {
        name: "Opera"
      }, n = ae.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || ae.getFirstMatch(dt, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/SamsungBrowser/i],
    describe(e) {
      const t = {
        name: "Samsung Internet for Android"
      }, n = ae.getFirstMatch(dt, e) || ae.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/Whale/i],
    describe(e) {
      const t = {
        name: "NAVER Whale Browser"
      }, n = ae.getFirstMatch(dt, e) || ae.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/MZBrowser/i],
    describe(e) {
      const t = {
        name: "MZ Browser"
      }, n = ae.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || ae.getFirstMatch(dt, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/focus/i],
    describe(e) {
      const t = {
        name: "Focus"
      }, n = ae.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || ae.getFirstMatch(dt, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/swing/i],
    describe(e) {
      const t = {
        name: "Swing"
      }, n = ae.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || ae.getFirstMatch(dt, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/coast/i],
    describe(e) {
      const t = {
        name: "Opera Coast"
      }, n = ae.getFirstMatch(dt, e) || ae.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/opt\/\d+(?:.?_?\d+)+/i],
    describe(e) {
      const t = {
        name: "Opera Touch"
      }, n = ae.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || ae.getFirstMatch(dt, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/yabrowser/i],
    describe(e) {
      const t = {
        name: "Yandex Browser"
      }, n = ae.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || ae.getFirstMatch(dt, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/ucbrowser/i],
    describe(e) {
      const t = {
        name: "UC Browser"
      }, n = ae.getFirstMatch(dt, e) || ae.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/Maxthon|mxios/i],
    describe(e) {
      const t = {
        name: "Maxthon"
      }, n = ae.getFirstMatch(dt, e) || ae.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/epiphany/i],
    describe(e) {
      const t = {
        name: "Epiphany"
      }, n = ae.getFirstMatch(dt, e) || ae.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/puffin/i],
    describe(e) {
      const t = {
        name: "Puffin"
      }, n = ae.getFirstMatch(dt, e) || ae.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/sleipnir/i],
    describe(e) {
      const t = {
        name: "Sleipnir"
      }, n = ae.getFirstMatch(dt, e) || ae.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/k-meleon/i],
    describe(e) {
      const t = {
        name: "K-Meleon"
      }, n = ae.getFirstMatch(dt, e) || ae.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/micromessenger/i],
    describe(e) {
      const t = {
        name: "WeChat"
      }, n = ae.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || ae.getFirstMatch(dt, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/qqbrowser/i],
    describe(e) {
      const t = {
        name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
      }, n = ae.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || ae.getFirstMatch(dt, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/msie|trident/i],
    describe(e) {
      const t = {
        name: "Internet Explorer"
      }, n = ae.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/\sedg\//i],
    describe(e) {
      const t = {
        name: "Microsoft Edge"
      }, n = ae.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/edg([ea]|ios)/i],
    describe(e) {
      const t = {
        name: "Microsoft Edge"
      }, n = ae.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/vivaldi/i],
    describe(e) {
      const t = {
        name: "Vivaldi"
      }, n = ae.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/seamonkey/i],
    describe(e) {
      const t = {
        name: "SeaMonkey"
      }, n = ae.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/sailfish/i],
    describe(e) {
      const t = {
        name: "Sailfish"
      }, n = ae.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/silk/i],
    describe(e) {
      const t = {
        name: "Amazon Silk"
      }, n = ae.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/phantom/i],
    describe(e) {
      const t = {
        name: "PhantomJS"
      }, n = ae.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/slimerjs/i],
    describe(e) {
      const t = {
        name: "SlimerJS"
      }, n = ae.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(e) {
      const t = {
        name: "BlackBerry"
      }, n = ae.getFirstMatch(dt, e) || ae.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/(web|hpw)[o0]s/i],
    describe(e) {
      const t = {
        name: "WebOS Browser"
      }, n = ae.getFirstMatch(dt, e) || ae.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/bada/i],
    describe(e) {
      const t = {
        name: "Bada"
      }, n = ae.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/tizen/i],
    describe(e) {
      const t = {
        name: "Tizen"
      }, n = ae.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || ae.getFirstMatch(dt, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/qupzilla/i],
    describe(e) {
      const t = {
        name: "QupZilla"
      }, n = ae.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || ae.getFirstMatch(dt, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/firefox|iceweasel|fxios/i],
    describe(e) {
      const t = {
        name: "Firefox"
      }, n = ae.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/electron/i],
    describe(e) {
      const t = {
        name: "Electron"
      }, n = ae.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/MiuiBrowser/i],
    describe(e) {
      const t = {
        name: "Miui"
      }, n = ae.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/chromium/i],
    describe(e) {
      const t = {
        name: "Chromium"
      }, n = ae.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || ae.getFirstMatch(dt, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/chrome|crios|crmo/i],
    describe(e) {
      const t = {
        name: "Chrome"
      }, n = ae.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/GSA/i],
    describe(e) {
      const t = {
        name: "Google Search"
      }, n = ae.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  /* Android Browser */
  {
    test(e) {
      const t = !e.test(/like android/i), n = e.test(/android/i);
      return t && n;
    },
    describe(e) {
      const t = {
        name: "Android Browser"
      }, n = ae.getFirstMatch(dt, e);
      return n && (t.version = n), t;
    }
  },
  /* PlayStation 4 */
  {
    test: [/playstation 4/i],
    describe(e) {
      const t = {
        name: "PlayStation 4"
      }, n = ae.getFirstMatch(dt, e);
      return n && (t.version = n), t;
    }
  },
  /* Safari */
  {
    test: [/safari|applewebkit/i],
    describe(e) {
      const t = {
        name: "Safari"
      }, n = ae.getFirstMatch(dt, e);
      return n && (t.version = n), t;
    }
  },
  /* Something else */
  {
    test: [/.*/i],
    describe(e) {
      const t = /^(.*)\/(.*) /, n = /^(.*)\/(.*)[ \t]\((.*)/, i = e.search("\\(") !== -1 ? n : t;
      return {
        name: ae.getFirstMatch(i, e),
        version: ae.getSecondMatch(i, e)
      };
    }
  }
], _v = [
  /* Roku */
  {
    test: [/Roku\/DVP/],
    describe(e) {
      const t = ae.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
      return {
        name: Jt.Roku,
        version: t
      };
    }
  },
  /* Windows Phone */
  {
    test: [/windows phone/i],
    describe(e) {
      const t = ae.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
      return {
        name: Jt.WindowsPhone,
        version: t
      };
    }
  },
  /* Windows */
  {
    test: [/windows /i],
    describe(e) {
      const t = ae.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e), n = ae.getWindowsVersionName(t);
      return {
        name: Jt.Windows,
        version: t,
        versionName: n
      };
    }
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe(e) {
      const t = {
        name: Jt.iOS
      }, n = ae.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
      return n && (t.version = n), t;
    }
  },
  /* macOS */
  {
    test: [/macintosh/i],
    describe(e) {
      const t = ae.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."), n = ae.getMacOSVersionName(t), r = {
        name: Jt.MacOS,
        version: t
      };
      return n && (r.versionName = n), r;
    }
  },
  /* iOS */
  {
    test: [/(ipod|iphone|ipad)/i],
    describe(e) {
      const t = ae.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
      return {
        name: Jt.iOS,
        version: t
      };
    }
  },
  /* Android */
  {
    test(e) {
      const t = !e.test(/like android/i), n = e.test(/android/i);
      return t && n;
    },
    describe(e) {
      const t = ae.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e), n = ae.getAndroidVersionName(t), r = {
        name: Jt.Android,
        version: t
      };
      return n && (r.versionName = n), r;
    }
  },
  /* WebOS */
  {
    test: [/(web|hpw)[o0]s/i],
    describe(e) {
      const t = ae.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e), n = {
        name: Jt.WebOS
      };
      return t && t.length && (n.version = t), n;
    }
  },
  /* BlackBerry */
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(e) {
      const t = ae.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || ae.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || ae.getFirstMatch(/\bbb(\d+)/i, e);
      return {
        name: Jt.BlackBerry,
        version: t
      };
    }
  },
  /* Bada */
  {
    test: [/bada/i],
    describe(e) {
      const t = ae.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
      return {
        name: Jt.Bada,
        version: t
      };
    }
  },
  /* Tizen */
  {
    test: [/tizen/i],
    describe(e) {
      const t = ae.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
      return {
        name: Jt.Tizen,
        version: t
      };
    }
  },
  /* Linux */
  {
    test: [/linux/i],
    describe() {
      return {
        name: Jt.Linux
      };
    }
  },
  /* Chrome OS */
  {
    test: [/CrOS/],
    describe() {
      return {
        name: Jt.ChromeOS
      };
    }
  },
  /* Playstation 4 */
  {
    test: [/PlayStation 4/],
    describe(e) {
      const t = ae.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
      return {
        name: Jt.PlayStation4,
        version: t
      };
    }
  }
], Ov = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe() {
      return {
        type: "bot",
        vendor: "Google"
      };
    }
  },
  /* Huawei */
  {
    test: [/huawei/i],
    describe(e) {
      const t = ae.getFirstMatch(/(can-l01)/i, e) && "Nova", n = {
        type: wt.mobile,
        vendor: "Huawei"
      };
      return t && (n.model = t), n;
    }
  },
  /* Nexus Tablet */
  {
    test: [/nexus\s*(?:7|8|9|10).*/i],
    describe() {
      return {
        type: wt.tablet,
        vendor: "Nexus"
      };
    }
  },
  /* iPad */
  {
    test: [/ipad/i],
    describe() {
      return {
        type: wt.tablet,
        vendor: "Apple",
        model: "iPad"
      };
    }
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe() {
      return {
        type: wt.tablet,
        vendor: "Apple",
        model: "iPad"
      };
    }
  },
  /* Amazon Kindle Fire */
  {
    test: [/kftt build/i],
    describe() {
      return {
        type: wt.tablet,
        vendor: "Amazon",
        model: "Kindle Fire HD 7"
      };
    }
  },
  /* Another Amazon Tablet with Silk */
  {
    test: [/silk/i],
    describe() {
      return {
        type: wt.tablet,
        vendor: "Amazon"
      };
    }
  },
  /* Tablet */
  {
    test: [/tablet(?! pc)/i],
    describe() {
      return {
        type: wt.tablet
      };
    }
  },
  /* iPod/iPhone */
  {
    test(e) {
      const t = e.test(/ipod|iphone/i), n = e.test(/like (ipod|iphone)/i);
      return t && !n;
    },
    describe(e) {
      const t = ae.getFirstMatch(/(ipod|iphone)/i, e);
      return {
        type: wt.mobile,
        vendor: "Apple",
        model: t
      };
    }
  },
  /* Nexus Mobile */
  {
    test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
    describe() {
      return {
        type: wt.mobile,
        vendor: "Nexus"
      };
    }
  },
  /* Mobile */
  {
    test: [/[^-]mobi/i],
    describe() {
      return {
        type: wt.mobile
      };
    }
  },
  /* BlackBerry */
  {
    test(e) {
      return e.getBrowserName(!0) === "blackberry";
    },
    describe() {
      return {
        type: wt.mobile,
        vendor: "BlackBerry"
      };
    }
  },
  /* Bada */
  {
    test(e) {
      return e.getBrowserName(!0) === "bada";
    },
    describe() {
      return {
        type: wt.mobile
      };
    }
  },
  /* Windows Phone */
  {
    test(e) {
      return e.getBrowserName() === "windows phone";
    },
    describe() {
      return {
        type: wt.mobile,
        vendor: "Microsoft"
      };
    }
  },
  /* Android Tablet */
  {
    test(e) {
      const t = Number(String(e.getOSVersion()).split(".")[0]);
      return e.getOSName(!0) === "android" && t >= 3;
    },
    describe() {
      return {
        type: wt.tablet
      };
    }
  },
  /* Android Mobile */
  {
    test(e) {
      return e.getOSName(!0) === "android";
    },
    describe() {
      return {
        type: wt.mobile
      };
    }
  },
  /* desktop */
  {
    test(e) {
      return e.getOSName(!0) === "macos";
    },
    describe() {
      return {
        type: wt.desktop,
        vendor: "Apple"
      };
    }
  },
  /* Windows */
  {
    test(e) {
      return e.getOSName(!0) === "windows";
    },
    describe() {
      return {
        type: wt.desktop
      };
    }
  },
  /* Linux */
  {
    test(e) {
      return e.getOSName(!0) === "linux";
    },
    describe() {
      return {
        type: wt.desktop
      };
    }
  },
  /* PlayStation 4 */
  {
    test(e) {
      return e.getOSName(!0) === "playstation 4";
    },
    describe() {
      return {
        type: wt.tv
      };
    }
  },
  /* Roku */
  {
    test(e) {
      return e.getOSName(!0) === "roku";
    },
    describe() {
      return {
        type: wt.tv
      };
    }
  }
], Iv = [
  /* EdgeHTML */
  {
    test(e) {
      return e.getBrowserName(!0) === "microsoft edge";
    },
    describe(e) {
      if (/\sedg\//i.test(e))
        return {
          name: _n.Blink
        };
      const n = ae.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
      return {
        name: _n.EdgeHTML,
        version: n
      };
    }
  },
  /* Trident */
  {
    test: [/trident/i],
    describe(e) {
      const t = {
        name: _n.Trident
      }, n = ae.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  /* Presto */
  {
    test(e) {
      return e.test(/presto/i);
    },
    describe(e) {
      const t = {
        name: _n.Presto
      }, n = ae.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  /* Gecko */
  {
    test(e) {
      const t = e.test(/gecko/i), n = e.test(/like gecko/i);
      return t && !n;
    },
    describe(e) {
      const t = {
        name: _n.Gecko
      }, n = ae.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  /* Blink */
  {
    test: [/(apple)?webkit\/537\.36/i],
    describe() {
      return {
        name: _n.Blink
      };
    }
  },
  /* WebKit */
  {
    test: [/(apple)?webkit/i],
    describe(e) {
      const t = {
        name: _n.WebKit
      }, n = ae.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }
];
class du {
  /**
   * Create instance of Parser
   *
   * @param {String} UA User-Agent string
   * @param {Boolean} [skipParsing=false] parser can skip parsing in purpose of performance
   * improvements if you need to make a more particular parsing
   * like {@link Parser#parseBrowser} or {@link Parser#parsePlatform}
   *
   * @throw {Error} in case of empty UA String
   *
   * @constructor
   */
  constructor(t, n = !1) {
    if (t == null || t === "")
      throw new Error("UserAgent parameter can't be empty");
    this._ua = t, this.parsedResult = {}, n !== !0 && this.parse();
  }
  /**
   * Get UserAgent string of current Parser instance
   * @return {String} User-Agent String of the current <Parser> object
   *
   * @public
   */
  getUA() {
    return this._ua;
  }
  /**
   * Test a UA string for a regexp
   * @param {RegExp} regex
   * @return {Boolean}
   */
  test(t) {
    return t.test(this._ua);
  }
  /**
   * Get parsed browser object
   * @return {Object}
   */
  parseBrowser() {
    this.parsedResult.browser = {};
    const t = ae.find(Tv, (n) => {
      if (typeof n.test == "function")
        return n.test(this);
      if (n.test instanceof Array)
        return n.test.some((r) => this.test(r));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser;
  }
  /**
   * Get parsed browser object
   * @return {Object}
   *
   * @public
   */
  getBrowser() {
    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
  }
  /**
   * Get browser's name
   * @return {String} Browser's name or an empty string
   *
   * @public
   */
  getBrowserName(t) {
    return t ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
  }
  /**
   * Get browser's version
   * @return {String} version of browser
   *
   * @public
   */
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  /**
   * Get OS
   * @return {Object}
   *
   * @example
   * this.getOS();
   * {
   *   name: 'macOS',
   *   version: '10.11.12'
   * }
   */
  getOS() {
    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
  }
  /**
   * Parse OS and save it to this.parsedResult.os
   * @return {*|{}}
   */
  parseOS() {
    this.parsedResult.os = {};
    const t = ae.find(_v, (n) => {
      if (typeof n.test == "function")
        return n.test(this);
      if (n.test instanceof Array)
        return n.test.some((r) => this.test(r));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os;
  }
  /**
   * Get OS name
   * @param {Boolean} [toLowerCase] return lower-cased value
   * @return {String} name of the OS — macOS, Windows, Linux, etc.
   */
  getOSName(t) {
    const { name: n } = this.getOS();
    return t ? String(n).toLowerCase() || "" : n || "";
  }
  /**
   * Get OS version
   * @return {String} full version with dots ('10.11.12', '5.6', etc)
   */
  getOSVersion() {
    return this.getOS().version;
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  getPlatform() {
    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
  }
  /**
   * Get platform name
   * @param {Boolean} [toLowerCase=false]
   * @return {*}
   */
  getPlatformType(t = !1) {
    const { type: n } = this.getPlatform();
    return t ? String(n).toLowerCase() || "" : n || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parsePlatform() {
    this.parsedResult.platform = {};
    const t = ae.find(Ov, (n) => {
      if (typeof n.test == "function")
        return n.test(this);
      if (n.test instanceof Array)
        return n.test.some((r) => this.test(r));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform;
  }
  /**
   * Get parsed engine
   * @return {{}}
   */
  getEngine() {
    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
  }
  /**
   * Get engines's name
   * @return {String} Engines's name or an empty string
   *
   * @public
   */
  getEngineName(t) {
    return t ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parseEngine() {
    this.parsedResult.engine = {};
    const t = ae.find(Iv, (n) => {
      if (typeof n.test == "function")
        return n.test(this);
      if (n.test instanceof Array)
        return n.test.some((r) => this.test(r));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine;
  }
  /**
   * Parse full information about the browser
   * @returns {Parser}
   */
  parse() {
    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
  }
  /**
   * Get parsed result
   * @return {ParsedResult}
   */
  getResult() {
    return ae.assign({}, this.parsedResult);
  }
  /**
   * Check if parsed browser matches certain conditions
   *
   * @param {Object} checkTree It's one or two layered object,
   * which can include a platform or an OS on the first layer
   * and should have browsers specs on the bottom-laying layer
   *
   * @returns {Boolean|undefined} Whether the browser satisfies the set conditions or not.
   * Returns `undefined` when the browser is no described in the checkTree object.
   *
   * @example
   * const browser = Bowser.getParser(window.navigator.userAgent);
   * if (browser.satisfies({chrome: '>118.01.1322' }))
   * // or with os
   * if (browser.satisfies({windows: { chrome: '>118.01.1322' } }))
   * // or with platforms
   * if (browser.satisfies({desktop: { chrome: '>118.01.1322' } }))
   */
  satisfies(t) {
    const n = {};
    let r = 0;
    const i = {};
    let c = 0;
    if (Object.keys(t).forEach((u) => {
      const p = t[u];
      typeof p == "string" ? (i[u] = p, c += 1) : typeof p == "object" && (n[u] = p, r += 1);
    }), r > 0) {
      const u = Object.keys(n), p = ae.find(u, (f) => this.isOS(f));
      if (p) {
        const f = this.satisfies(n[p]);
        if (f !== void 0)
          return f;
      }
      const d = ae.find(
        u,
        (f) => this.isPlatform(f)
      );
      if (d) {
        const f = this.satisfies(n[d]);
        if (f !== void 0)
          return f;
      }
    }
    if (c > 0) {
      const u = Object.keys(i), p = ae.find(u, (d) => this.isBrowser(d, !0));
      if (p !== void 0)
        return this.compareVersion(i[p]);
    }
  }
  /**
   * Check if the browser name equals the passed string
   * @param browserName The string to compare with the browser name
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {boolean}
   */
  isBrowser(t, n = !1) {
    const r = this.getBrowserName().toLowerCase();
    let i = t.toLowerCase();
    const c = ae.getBrowserTypeByAlias(i);
    return n && c && (i = c.toLowerCase()), i === r;
  }
  compareVersion(t) {
    let n = [0], r = t, i = !1;
    const c = this.getBrowserVersion();
    if (typeof c == "string")
      return t[0] === ">" || t[0] === "<" ? (r = t.substr(1), t[1] === "=" ? (i = !0, r = t.substr(2)) : n = [], t[0] === ">" ? n.push(1) : n.push(-1)) : t[0] === "=" ? r = t.substr(1) : t[0] === "~" && (i = !0, r = t.substr(1)), n.indexOf(
        ae.compareVersions(c, r, i)
      ) > -1;
  }
  isOS(t) {
    return this.getOSName(!0) === String(t).toLowerCase();
  }
  isPlatform(t) {
    return this.getPlatformType(!0) === String(t).toLowerCase();
  }
  isEngine(t) {
    return this.getEngineName(!0) === String(t).toLowerCase();
  }
  /**
   * Is anything? Check if the browser is called "anything",
   * the OS called "anything" or the platform called "anything"
   * @param {String} anything
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {Boolean}
   */
  is(t, n = !1) {
    return this.isBrowser(t, n) || this.isOS(t) || this.isPlatform(t);
  }
  /**
   * Check if any of the given values satisfies this.is(anything)
   * @param {String[]} anythings
   * @returns {Boolean}
   */
  some(t = []) {
    return t.some((n) => this.is(n));
  }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */
class rd {
  /**
   * Creates a {@link Parser} instance
   *
   * @param {String} UA UserAgent string
   * @param {Boolean} [skipParsing=false] Will make the Parser postpone parsing until you ask it
   * explicitly. Same as `skipParsing` for {@link Parser}.
   * @returns {Parser}
   * @throws {Error} when UA is not a String
   *
   * @example
   * const parser = Bowser.getParser(window.navigator.userAgent);
   * const result = parser.getResult();
   */
  static getParser(t, n = !1) {
    if (typeof t != "string")
      throw new Error("UserAgent should be a string");
    return new du(t, n);
  }
  /**
   * Creates a {@link Parser} instance and runs {@link Parser.getResult} immediately
   *
   * @param UA
   * @return {ParsedResult}
   *
   * @example
   * const result = Bowser.parse(window.navigator.userAgent);
   */
  static parse(t) {
    return new du(t).getResult();
  }
  static get BROWSER_MAP() {
    return nd;
  }
  static get ENGINE_MAP() {
    return _n;
  }
  static get OS_MAP() {
    return Jt;
  }
  static get PLATFORMS_MAP() {
    return wt;
  }
}
const Nv = ({ serviceId: e, clientVersion: t }) => async (n) => {
  var a, u, p, d, f, v;
  const r = typeof window < "u" && ((a = window == null ? void 0 : window.navigator) != null && a.userAgent) ? rd.parse(window.navigator.userAgent) : void 0, i = [
    ["aws-sdk-js", t],
    ["ua", "2.1"],
    [`os/${((u = r == null ? void 0 : r.os) == null ? void 0 : u.name) || "other"}`, (p = r == null ? void 0 : r.os) == null ? void 0 : p.version],
    ["lang/js"],
    ["md/browser", `${((d = r == null ? void 0 : r.browser) == null ? void 0 : d.name) ?? "unknown"}_${((f = r == null ? void 0 : r.browser) == null ? void 0 : f.version) ?? "unknown"}`]
  ];
  e && i.push([`api/${e}`, t]);
  const c = await ((v = n == null ? void 0 : n.userAgentAppId) == null ? void 0 : v.call(n));
  return c && i.push([`app/${c}`]), i;
};
class Ar {
  constructor(t) {
    if (this.bytes = t, t.byteLength !== 8)
      throw new Error("Int64 buffers must be exactly 8 bytes");
  }
  static fromNumber(t) {
    if (t > 9223372036854776e3 || t < -9223372036854776e3)
      throw new Error(`${t} is too large (or, if negative, too small) to represent as an Int64`);
    const n = new Uint8Array(8);
    for (let r = 7, i = Math.abs(Math.round(t)); r > -1 && i > 0; r--, i /= 256)
      n[r] = i;
    return t < 0 && fu(n), new Ar(n);
  }
  valueOf() {
    const t = this.bytes.slice(0), n = t[0] & 128;
    return n && fu(t), parseInt(rn(t), 16) * (n ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
}
function fu(e) {
  for (let t = 0; t < 8; t++)
    e[t] ^= 255;
  for (let t = 7; t > -1 && (e[t]++, e[t] === 0); t--)
    ;
}
class Pv {
  constructor(t, n) {
    this.toUtf8 = t, this.fromUtf8 = n;
  }
  format(t) {
    const n = [];
    for (const c of Object.keys(t)) {
      const a = this.fromUtf8(c);
      n.push(Uint8Array.from([a.byteLength]), a, this.formatHeaderValue(t[c]));
    }
    const r = new Uint8Array(n.reduce((c, a) => c + a.byteLength, 0));
    let i = 0;
    for (const c of n)
      r.set(c, i), i += c.byteLength;
    return r;
  }
  formatHeaderValue(t) {
    switch (t.type) {
      case "boolean":
        return Uint8Array.from([t.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, t.value]);
      case "short":
        const n = new DataView(new ArrayBuffer(3));
        return n.setUint8(0, 3), n.setInt16(1, t.value, !1), new Uint8Array(n.buffer);
      case "integer":
        const r = new DataView(new ArrayBuffer(5));
        return r.setUint8(0, 4), r.setInt32(1, t.value, !1), new Uint8Array(r.buffer);
      case "long":
        const i = new Uint8Array(9);
        return i[0] = 5, i.set(t.value.bytes, 1), i;
      case "binary":
        const c = new DataView(new ArrayBuffer(3 + t.value.byteLength));
        c.setUint8(0, 6), c.setUint16(1, t.value.byteLength, !1);
        const a = new Uint8Array(c.buffer);
        return a.set(t.value, 3), a;
      case "string":
        const u = this.fromUtf8(t.value), p = new DataView(new ArrayBuffer(3 + u.byteLength));
        p.setUint8(0, 7), p.setUint16(1, u.byteLength, !1);
        const d = new Uint8Array(p.buffer);
        return d.set(u, 3), d;
      case "timestamp":
        const f = new Uint8Array(9);
        return f[0] = 8, f.set(Ar.fromNumber(t.value.valueOf()).bytes, 1), f;
      case "uuid":
        if (!Hv.test(t.value))
          throw new Error(`Invalid UUID received: ${t.value}`);
        const v = new Uint8Array(17);
        return v[0] = 9, v.set(Fu(t.value.replace(/\-/g, "")), 1), v;
    }
  }
  parse(t) {
    const n = {};
    let r = 0;
    for (; r < t.byteLength; ) {
      const i = t.getUint8(r++), c = this.toUtf8(new Uint8Array(t.buffer, t.byteOffset + r, i));
      switch (r += i, t.getUint8(r++)) {
        case 0:
          n[c] = {
            type: pu,
            value: !0
          };
          break;
        case 1:
          n[c] = {
            type: pu,
            value: !1
          };
          break;
        case 2:
          n[c] = {
            type: Mv,
            value: t.getInt8(r++)
          };
          break;
        case 3:
          n[c] = {
            type: Bv,
            value: t.getInt16(r, !1)
          }, r += 2;
          break;
        case 4:
          n[c] = {
            type: Dv,
            value: t.getInt32(r, !1)
          }, r += 4;
          break;
        case 5:
          n[c] = {
            type: Fv,
            value: new Ar(new Uint8Array(t.buffer, t.byteOffset + r, 8))
          }, r += 8;
          break;
        case 6:
          const a = t.getUint16(r, !1);
          r += 2, n[c] = {
            type: jv,
            value: new Uint8Array(t.buffer, t.byteOffset + r, a)
          }, r += a;
          break;
        case 7:
          const u = t.getUint16(r, !1);
          r += 2, n[c] = {
            type: Lv,
            value: this.toUtf8(new Uint8Array(t.buffer, t.byteOffset + r, u))
          }, r += u;
          break;
        case 8:
          n[c] = {
            type: Uv,
            value: new Date(new Ar(new Uint8Array(t.buffer, t.byteOffset + r, 8)).valueOf())
          }, r += 8;
          break;
        case 9:
          const p = new Uint8Array(t.buffer, t.byteOffset + r, 16);
          r += 16, n[c] = {
            type: $v,
            value: `${rn(p.subarray(0, 4))}-${rn(p.subarray(4, 6))}-${rn(p.subarray(6, 8))}-${rn(p.subarray(8, 10))}-${rn(p.subarray(10))}`
          };
          break;
        default:
          throw new Error("Unrecognized header type tag");
      }
    }
    return n;
  }
}
var hu;
(function(e) {
  e[e.boolTrue = 0] = "boolTrue", e[e.boolFalse = 1] = "boolFalse", e[e.byte = 2] = "byte", e[e.short = 3] = "short", e[e.integer = 4] = "integer", e[e.long = 5] = "long", e[e.byteArray = 6] = "byteArray", e[e.string = 7] = "string", e[e.timestamp = 8] = "timestamp", e[e.uuid = 9] = "uuid";
})(hu || (hu = {}));
const pu = "boolean", Mv = "byte", Bv = "short", Dv = "integer", Fv = "long", jv = "binary", Lv = "string", Uv = "timestamp", $v = "uuid", Hv = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/, sd = 4, On = sd * 2, jn = 4, zv = On + jn * 2;
function Kv({ byteLength: e, byteOffset: t, buffer: n }) {
  if (e < zv)
    throw new Error("Provided message too short to accommodate event stream message overhead");
  const r = new DataView(n, t, e), i = r.getUint32(0, !1);
  if (e !== i)
    throw new Error("Reported message length does not match received message length");
  const c = r.getUint32(sd, !1), a = r.getUint32(On, !1), u = r.getUint32(e - jn, !1), p = new ss().update(new Uint8Array(n, t, On));
  if (a !== p.digest())
    throw new Error(`The prelude checksum specified in the message (${a}) does not match the calculated CRC32 checksum (${p.digest()})`);
  if (p.update(new Uint8Array(n, t + On, e - (On + jn))), u !== p.digest())
    throw new Error(`The message checksum (${p.digest()}) did not match the expected value of ${u}`);
  return {
    headers: new DataView(n, t + On + jn, c),
    body: new Uint8Array(n, t + On + jn + c, i - c - (On + jn + jn))
  };
}
class qv {
  constructor(t, n) {
    this.headerMarshaller = new Pv(t, n), this.messageBuffer = [], this.isEndOfStream = !1;
  }
  feed(t) {
    this.messageBuffer.push(this.decode(t));
  }
  endOfStream() {
    this.isEndOfStream = !0;
  }
  getMessage() {
    const t = this.messageBuffer.pop(), n = this.isEndOfStream;
    return {
      getMessage() {
        return t;
      },
      isEndOfStream() {
        return n;
      }
    };
  }
  getAvailableMessages() {
    const t = this.messageBuffer;
    this.messageBuffer = [];
    const n = this.isEndOfStream;
    return {
      getMessages() {
        return t;
      },
      isEndOfStream() {
        return n;
      }
    };
  }
  encode({ headers: t, body: n }) {
    const r = this.headerMarshaller.format(t), i = r.byteLength + n.byteLength + 16, c = new Uint8Array(i), a = new DataView(c.buffer, c.byteOffset, c.byteLength), u = new ss();
    return a.setUint32(0, i, !1), a.setUint32(4, r.byteLength, !1), a.setUint32(8, u.update(c.subarray(0, 8)).digest(), !1), c.set(r, 12), c.set(n, r.byteLength + 12), a.setUint32(i - 4, u.update(c.subarray(8, i - 4)).digest(), !1), c;
  }
  decode(t) {
    const { headers: n, body: r } = Kv(t);
    return { headers: this.headerMarshaller.parse(n), body: r };
  }
  formatHeaders(t) {
    return this.headerMarshaller.format(t);
  }
}
class Vv {
  constructor(t) {
    this.options = t;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const t of this.options.inputStream)
      yield this.options.decoder.decode(t);
  }
}
class Gv {
  constructor(t) {
    this.options = t;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const t of this.options.messageStream)
      yield this.options.encoder.encode(t);
    this.options.includeEndFrame && (yield new Uint8Array(0));
  }
}
class Wv {
  constructor(t) {
    this.options = t;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const t of this.options.messageStream) {
      const n = await this.options.deserializer(t);
      n !== void 0 && (yield n);
    }
  }
}
class Xv {
  constructor(t) {
    this.options = t;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const t of this.options.inputStream)
      yield this.options.serializer(t);
  }
}
function Yv(e) {
  let t = 0, n = 0, r = null, i = null;
  const c = (u) => {
    if (typeof u != "number")
      throw new Error("Attempted to allocate an event message where size was not a number: " + u);
    t = u, n = 4, r = new Uint8Array(u), new DataView(r.buffer).setUint32(0, u, !1);
  }, a = async function* () {
    const u = e[Symbol.asyncIterator]();
    for (; ; ) {
      const { value: p, done: d } = await u.next();
      if (d) {
        if (t)
          if (t === n)
            yield r;
          else
            throw new Error("Truncated event message received.");
        else return;
        return;
      }
      const f = p.length;
      let v = 0;
      for (; v < f; ) {
        if (!r) {
          const A = f - v;
          i || (i = new Uint8Array(4));
          const U = Math.min(4 - n, A);
          if (i.set(p.slice(v, v + U), n), n += U, v += U, n < 4)
            break;
          c(new DataView(i.buffer).getUint32(0, !1)), i = null;
        }
        const y = Math.min(t - n, f - v);
        r.set(p.slice(v, v + y), n), n += y, v += y, t && t === n && (yield r, r = null, t = 0, n = 0);
      }
    }
  };
  return {
    [Symbol.asyncIterator]: a
  };
}
function Zv(e, t) {
  return async function(n) {
    const { value: r } = n.headers[":message-type"];
    if (r === "error") {
      const i = new Error(n.headers[":error-message"].value || "UnknownError");
      throw i.name = n.headers[":error-code"].value, i;
    } else if (r === "exception") {
      const i = n.headers[":exception-type"].value, c = { [i]: n }, a = await e(c);
      if (a.$unknown) {
        const u = new Error(t(n.body));
        throw u.name = i, u;
      }
      throw a[i];
    } else if (r === "event") {
      const i = {
        [n.headers[":event-type"].value]: n
      }, c = await e(i);
      return c.$unknown ? void 0 : c;
    } else
      throw Error(`Unrecognizable event type: ${n.headers[":event-type"].value}`);
  };
}
let Jv = class {
  constructor({ utf8Encoder: t, utf8Decoder: n }) {
    this.eventStreamCodec = new qv(t, n), this.utfEncoder = t;
  }
  deserialize(t, n) {
    const r = Yv(t);
    return new Wv({
      messageStream: new Vv({ inputStream: r, decoder: this.eventStreamCodec }),
      deserializer: Zv(n, this.utfEncoder)
    });
  }
  serialize(t, n) {
    return new Gv({
      messageStream: new Xv({ inputStream: t, serializer: n }),
      encoder: this.eventStreamCodec,
      includeEndFrame: !0
    });
  }
};
const Qv = (e) => ({
  [Symbol.asyncIterator]: async function* () {
    const t = e.getReader();
    try {
      for (; ; ) {
        const { done: n, value: r } = await t.read();
        if (n)
          return;
        yield r;
      }
    } finally {
      t.releaseLock();
    }
  }
}), ew = (e) => {
  const t = e[Symbol.asyncIterator]();
  return new ReadableStream({
    async pull(n) {
      const { done: r, value: i } = await t.next();
      if (r)
        return n.close();
      n.enqueue(i);
    }
  });
};
class tw {
  constructor({ utf8Encoder: t, utf8Decoder: n }) {
    this.universalMarshaller = new Jv({
      utf8Decoder: n,
      utf8Encoder: t
    });
  }
  deserialize(t, n) {
    const r = nw(t) ? Qv(t) : t;
    return this.universalMarshaller.deserialize(r, n);
  }
  serialize(t, n) {
    const r = this.universalMarshaller.serialize(t, n);
    return typeof ReadableStream == "function" ? ew(r) : r;
  }
}
const nw = (e) => typeof ReadableStream == "function" && e instanceof ReadableStream, rw = (e) => new tw(e);
async function sw(e, t, n = 1024 * 1024) {
  const r = e.size;
  let i = 0;
  for (; i < r; ) {
    const c = e.slice(i, Math.min(r, i + n));
    t(new Uint8Array(await c.arrayBuffer())), i += c.size;
  }
}
const iw = async function(t, n) {
  const r = new t();
  return await sw(n, (i) => {
    r.update(i);
  }), r.digest();
}, ow = (e) => () => Promise.reject(e), Tn = 64, aw = 16, cw = [1732584193, 4023233417, 2562383102, 271733878];
class uw {
  constructor() {
    this.reset();
  }
  update(t) {
    if (lw(t))
      return;
    if (this.finished)
      throw new Error("Attempted to update an already finished hash.");
    const n = dw(t);
    let r = 0, { byteLength: i } = n;
    for (this.bytesHashed += i; i > 0; )
      this.buffer.setUint8(this.bufferLength++, n[r++]), i--, this.bufferLength === Tn && (this.hashBuffer(), this.bufferLength = 0);
  }
  async digest() {
    if (!this.finished) {
      const { buffer: n, bufferLength: r, bytesHashed: i } = this, c = i * 8;
      if (n.setUint8(this.bufferLength++, 128), r % Tn >= Tn - 8) {
        for (let a = this.bufferLength; a < Tn; a++)
          n.setUint8(a, 0);
        this.hashBuffer(), this.bufferLength = 0;
      }
      for (let a = this.bufferLength; a < Tn - 8; a++)
        n.setUint8(a, 0);
      n.setUint32(Tn - 8, c >>> 0, !0), n.setUint32(Tn - 4, Math.floor(c / 4294967296), !0), this.hashBuffer(), this.finished = !0;
    }
    const t = new DataView(new ArrayBuffer(aw));
    for (let n = 0; n < 4; n++)
      t.setUint32(n * 4, this.state[n], !0);
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  }
  hashBuffer() {
    const { buffer: t, state: n } = this;
    let r = n[0], i = n[1], c = n[2], a = n[3];
    r = zt(r, i, c, a, t.getUint32(0, !0), 7, 3614090360), a = zt(a, r, i, c, t.getUint32(4, !0), 12, 3905402710), c = zt(c, a, r, i, t.getUint32(8, !0), 17, 606105819), i = zt(i, c, a, r, t.getUint32(12, !0), 22, 3250441966), r = zt(r, i, c, a, t.getUint32(16, !0), 7, 4118548399), a = zt(a, r, i, c, t.getUint32(20, !0), 12, 1200080426), c = zt(c, a, r, i, t.getUint32(24, !0), 17, 2821735955), i = zt(i, c, a, r, t.getUint32(28, !0), 22, 4249261313), r = zt(r, i, c, a, t.getUint32(32, !0), 7, 1770035416), a = zt(a, r, i, c, t.getUint32(36, !0), 12, 2336552879), c = zt(c, a, r, i, t.getUint32(40, !0), 17, 4294925233), i = zt(i, c, a, r, t.getUint32(44, !0), 22, 2304563134), r = zt(r, i, c, a, t.getUint32(48, !0), 7, 1804603682), a = zt(a, r, i, c, t.getUint32(52, !0), 12, 4254626195), c = zt(c, a, r, i, t.getUint32(56, !0), 17, 2792965006), i = zt(i, c, a, r, t.getUint32(60, !0), 22, 1236535329), r = Kt(r, i, c, a, t.getUint32(4, !0), 5, 4129170786), a = Kt(a, r, i, c, t.getUint32(24, !0), 9, 3225465664), c = Kt(c, a, r, i, t.getUint32(44, !0), 14, 643717713), i = Kt(i, c, a, r, t.getUint32(0, !0), 20, 3921069994), r = Kt(r, i, c, a, t.getUint32(20, !0), 5, 3593408605), a = Kt(a, r, i, c, t.getUint32(40, !0), 9, 38016083), c = Kt(c, a, r, i, t.getUint32(60, !0), 14, 3634488961), i = Kt(i, c, a, r, t.getUint32(16, !0), 20, 3889429448), r = Kt(r, i, c, a, t.getUint32(36, !0), 5, 568446438), a = Kt(a, r, i, c, t.getUint32(56, !0), 9, 3275163606), c = Kt(c, a, r, i, t.getUint32(12, !0), 14, 4107603335), i = Kt(i, c, a, r, t.getUint32(32, !0), 20, 1163531501), r = Kt(r, i, c, a, t.getUint32(52, !0), 5, 2850285829), a = Kt(a, r, i, c, t.getUint32(8, !0), 9, 4243563512), c = Kt(c, a, r, i, t.getUint32(28, !0), 14, 1735328473), i = Kt(i, c, a, r, t.getUint32(48, !0), 20, 2368359562), r = qt(r, i, c, a, t.getUint32(20, !0), 4, 4294588738), a = qt(a, r, i, c, t.getUint32(32, !0), 11, 2272392833), c = qt(c, a, r, i, t.getUint32(44, !0), 16, 1839030562), i = qt(i, c, a, r, t.getUint32(56, !0), 23, 4259657740), r = qt(r, i, c, a, t.getUint32(4, !0), 4, 2763975236), a = qt(a, r, i, c, t.getUint32(16, !0), 11, 1272893353), c = qt(c, a, r, i, t.getUint32(28, !0), 16, 4139469664), i = qt(i, c, a, r, t.getUint32(40, !0), 23, 3200236656), r = qt(r, i, c, a, t.getUint32(52, !0), 4, 681279174), a = qt(a, r, i, c, t.getUint32(0, !0), 11, 3936430074), c = qt(c, a, r, i, t.getUint32(12, !0), 16, 3572445317), i = qt(i, c, a, r, t.getUint32(24, !0), 23, 76029189), r = qt(r, i, c, a, t.getUint32(36, !0), 4, 3654602809), a = qt(a, r, i, c, t.getUint32(48, !0), 11, 3873151461), c = qt(c, a, r, i, t.getUint32(60, !0), 16, 530742520), i = qt(i, c, a, r, t.getUint32(8, !0), 23, 3299628645), r = Vt(r, i, c, a, t.getUint32(0, !0), 6, 4096336452), a = Vt(a, r, i, c, t.getUint32(28, !0), 10, 1126891415), c = Vt(c, a, r, i, t.getUint32(56, !0), 15, 2878612391), i = Vt(i, c, a, r, t.getUint32(20, !0), 21, 4237533241), r = Vt(r, i, c, a, t.getUint32(48, !0), 6, 1700485571), a = Vt(a, r, i, c, t.getUint32(12, !0), 10, 2399980690), c = Vt(c, a, r, i, t.getUint32(40, !0), 15, 4293915773), i = Vt(i, c, a, r, t.getUint32(4, !0), 21, 2240044497), r = Vt(r, i, c, a, t.getUint32(32, !0), 6, 1873313359), a = Vt(a, r, i, c, t.getUint32(60, !0), 10, 4264355552), c = Vt(c, a, r, i, t.getUint32(24, !0), 15, 2734768916), i = Vt(i, c, a, r, t.getUint32(52, !0), 21, 1309151649), r = Vt(r, i, c, a, t.getUint32(16, !0), 6, 4149444226), a = Vt(a, r, i, c, t.getUint32(44, !0), 10, 3174756917), c = Vt(c, a, r, i, t.getUint32(8, !0), 15, 718787259), i = Vt(i, c, a, r, t.getUint32(36, !0), 21, 3951481745), n[0] = r + n[0] & 4294967295, n[1] = i + n[1] & 4294967295, n[2] = c + n[2] & 4294967295, n[3] = a + n[3] & 4294967295;
  }
  reset() {
    this.state = Uint32Array.from(cw), this.buffer = new DataView(new ArrayBuffer(Tn)), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1;
  }
}
function Es(e, t, n, r, i, c) {
  return t = (t + e & 4294967295) + (r + c & 4294967295) & 4294967295, (t << i | t >>> 32 - i) + n & 4294967295;
}
function zt(e, t, n, r, i, c, a) {
  return Es(t & n | ~t & r, e, t, i, c, a);
}
function Kt(e, t, n, r, i, c, a) {
  return Es(t & r | n & ~r, e, t, i, c, a);
}
function qt(e, t, n, r, i, c, a) {
  return Es(t ^ n ^ r, e, t, i, c, a);
}
function Vt(e, t, n, r, i, c, a) {
  return Es(n ^ (t | ~r), e, t, i, c, a);
}
function lw(e) {
  return typeof e == "string" ? e.length === 0 : e.byteLength === 0;
}
function dw(e) {
  return typeof e == "string" ? Kn(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
}
const gu = typeof TextEncoder == "function" ? new TextEncoder() : null, fw = (e) => {
  if (typeof e == "string") {
    if (gu)
      return gu.encode(e).byteLength;
    let t = e.length;
    for (let n = t - 1; n >= 0; n--) {
      const r = e.charCodeAt(n);
      r > 127 && r <= 2047 ? t++ : r > 2047 && r <= 65535 && (t += 2), r >= 56320 && r <= 57343 && n--;
    }
    return t;
  } else {
    if (typeof e.byteLength == "number")
      return e.byteLength;
    if (typeof e.size == "number")
      return e.size;
  }
  throw new Error(`Body Length computation failed for ${e}`);
}, hw = (e) => ({
  apiVersion: "2006-03-01",
  base64Decoder: (e == null ? void 0 : e.base64Decoder) ?? Wi,
  base64Encoder: (e == null ? void 0 : e.base64Encoder) ?? vs,
  disableHostPrefix: (e == null ? void 0 : e.disableHostPrefix) ?? !1,
  endpointProvider: (e == null ? void 0 : e.endpointProvider) ?? $l,
  extensions: (e == null ? void 0 : e.extensions) ?? [],
  getAwsChunkedEncodingStream: (e == null ? void 0 : e.getAwsChunkedEncodingStream) ?? Zf,
  httpAuthSchemeProvider: (e == null ? void 0 : e.httpAuthSchemeProvider) ?? e0,
  httpAuthSchemes: (e == null ? void 0 : e.httpAuthSchemes) ?? [
    {
      schemeId: "aws.auth#sigv4",
      identityProvider: (t) => t.getIdentityProvider("aws.auth#sigv4"),
      signer: new Nu()
    },
    {
      schemeId: "aws.auth#sigv4a",
      identityProvider: (t) => t.getIdentityProvider("aws.auth#sigv4a"),
      signer: new kf()
    }
  ],
  logger: (e == null ? void 0 : e.logger) ?? new Xu(),
  sdkStreamMixin: (e == null ? void 0 : e.sdkStreamMixin) ?? ih,
  serviceId: (e == null ? void 0 : e.serviceId) ?? "S3",
  signerConstructor: (e == null ? void 0 : e.signerConstructor) ?? By,
  signingEscapePath: (e == null ? void 0 : e.signingEscapePath) ?? !1,
  urlParser: (e == null ? void 0 : e.urlParser) ?? os,
  useArnRegion: (e == null ? void 0 : e.useArnRegion) ?? !1,
  utf8Decoder: (e == null ? void 0 : e.utf8Decoder) ?? Kn,
  utf8Encoder: (e == null ? void 0 : e.utf8Encoder) ?? Xi
}), pw = ["in-region", "cross-region", "mobile", "standard", "legacy"], gw = ({ defaultsMode: e } = {}) => mh(async () => {
  const t = typeof e == "function" ? await e() : e;
  switch (t == null ? void 0 : t.toLowerCase()) {
    case "auto":
      return Promise.resolve(mw() ? "mobile" : "standard");
    case "mobile":
    case "in-region":
    case "cross-region":
    case "standard":
    case "legacy":
      return Promise.resolve(t == null ? void 0 : t.toLocaleLowerCase());
    case void 0:
      return Promise.resolve("legacy");
    default:
      throw new Error(`Invalid parameter for "defaultsMode", expect ${pw.join(", ")}, got ${t}`);
  }
}), mw = () => {
  var n, r;
  const e = typeof window < "u" && ((n = window == null ? void 0 : window.navigator) != null && n.userAgent) ? rd.parse(window.navigator.userAgent) : void 0, t = (r = e == null ? void 0 : e.platform) == null ? void 0 : r.type;
  return t === "tablet" || t === "mobile";
}, yw = (e) => {
  const t = gw(e), n = () => t().then(Zh), r = hw(e);
  return {
    ...r,
    ...e,
    runtime: "browser",
    defaultsMode: t,
    bodyLengthChecker: (e == null ? void 0 : e.bodyLengthChecker) ?? fw,
    credentialDefaultProvider: (e == null ? void 0 : e.credentialDefaultProvider) ?? ((i) => () => Promise.reject(new Error("Credential is missing"))),
    defaultUserAgentProvider: (e == null ? void 0 : e.defaultUserAgentProvider) ?? Nv({ serviceId: r.serviceId, clientVersion: uv.version }),
    eventStreamSerdeProvider: (e == null ? void 0 : e.eventStreamSerdeProvider) ?? rw,
    maxAttempts: (e == null ? void 0 : e.maxAttempts) ?? as,
    md5: (e == null ? void 0 : e.md5) ?? uw,
    region: (e == null ? void 0 : e.region) ?? ow("Region is missing"),
    requestHandler: Yi.create((e == null ? void 0 : e.requestHandler) ?? n),
    retryMode: (e == null ? void 0 : e.retryMode) ?? (async () => (await n()).retryMode || sy),
    sha1: (e == null ? void 0 : e.sha1) ?? yv,
    sha256: (e == null ? void 0 : e.sha256) ?? Rv,
    streamCollector: (e == null ? void 0 : e.streamCollector) ?? Bu,
    streamHasher: (e == null ? void 0 : e.streamHasher) ?? iw,
    useDualstackEndpoint: (e == null ? void 0 : e.useDualstackEndpoint) ?? (() => Promise.resolve(Lm)),
    useFipsEndpoint: (e == null ? void 0 : e.useFipsEndpoint) ?? (() => Promise.resolve(Um))
  };
}, bw = (e) => ({
  setRegion(t) {
    e.region = t;
  },
  region() {
    return e.region;
  }
}), vw = (e) => ({
  region: e.region()
}), ww = (e) => {
  const t = e.httpAuthSchemes;
  let n = e.httpAuthSchemeProvider, r = e.credentials;
  return {
    setHttpAuthScheme(i) {
      const c = t.findIndex((a) => a.schemeId === i.schemeId);
      c === -1 ? t.push(i) : t.splice(c, 1, i);
    },
    httpAuthSchemes() {
      return t;
    },
    setHttpAuthSchemeProvider(i) {
      n = i;
    },
    httpAuthSchemeProvider() {
      return n;
    },
    setCredentials(i) {
      r = i;
    },
    credentials() {
      return r;
    }
  };
}, xw = (e) => ({
  httpAuthSchemes: e.httpAuthSchemes(),
  httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
  credentials: e.credentials()
}), Ew = (e, t) => {
  const n = Object.assign(bw(e), np(e), yf(e), ww(e));
  return t.forEach((r) => r.configure(n)), Object.assign(e, vw(n), rp(n), bf(n), xw(n));
};
class Sw extends Vh {
  constructor(...[n]) {
    const r = yw(n || {});
    super(r);
    Ke(this, "config");
    this.initConfig = r;
    const i = n0(r), c = rm(i), a = lg(c), u = Ry(a), p = $m(u), d = p, f = ry(d), v = Hm(f), y = t0(v), A = Hg(y, { session: [() => this, av] }), U = Ew(A, (n == null ? void 0 : n.extensions) || []);
    this.config = U, this.middlewareStack.use(jm(this.config)), this.middlewareStack.use(Py(this.config)), this.middlewareStack.use(qm(this.config)), this.middlewareStack.use(hg(this.config)), this.middlewareStack.use(mg(this.config)), this.middlewareStack.use(xg(this.config)), this.middlewareStack.use(Nf(this.config, {
      httpAuthSchemeParametersProvider: Zy,
      identityProviderConfigProvider: async (z) => new dh({
        "aws.auth#sigv4": z.credentials,
        "aws.auth#sigv4a": z.credentials
      })
    })), this.middlewareStack.use(Lf(this.config)), this.middlewareStack.use(em(this.config)), this.middlewareStack.use(Ef(this.config)), this.middlewareStack.use(Rg(this.config)), this.middlewareStack.use(Dg(this.config)), this.middlewareStack.use($g(this.config));
  }
  destroy() {
    super.destroy();
  }
}
function Aw(e) {
  return (t) => async (n) => {
    const r = { ...n.input }, i = [
      {
        target: "SSECustomerKey",
        hash: "SSECustomerKeyMD5"
      },
      {
        target: "CopySourceSSECustomerKey",
        hash: "CopySourceSSECustomerKeyMD5"
      }
    ];
    for (const c of i) {
      const a = r[c.target];
      if (a) {
        let u;
        typeof a == "string" ? kw(a, e) ? u = e.base64Decoder(a) : (u = e.utf8Decoder(a), r[c.target] = e.base64Encoder(u)) : (u = ArrayBuffer.isView(a) ? new Uint8Array(a.buffer, a.byteOffset, a.byteLength) : new Uint8Array(a), r[c.target] = e.base64Encoder(u));
        const p = new e.md5();
        p.update(u), r[c.hash] = e.base64Encoder(await p.digest());
      }
    }
    return t({
      ...n,
      input: r
    });
  };
}
const Cw = {
  name: "ssecMiddleware",
  step: "initialize",
  tags: ["SSE"],
  override: !0
}, Rw = (e) => ({
  applyToStack: (t) => {
    t.add(Aw(e), Cw);
  }
});
function kw(e, t) {
  if (!/^(?:[A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e))
    return !1;
  try {
    return t.base64Decoder(e).length === 32;
  } catch {
    return !1;
  }
}
class Tw extends Zi.classBuilder().ep({
  ...Kl,
  Bucket: { type: "contextParams", name: "Bucket" },
  Key: { type: "contextParams", name: "Key" }
}).m(function(t, n, r, i) {
  return [
    Pu(r, this.serialize, this.deserialize),
    xl(r, t.getEndpointParameterInstructions()),
    ug(r, {
      requestChecksumRequired: !1,
      requestValidationModeMember: "ChecksumMode",
      responseAlgorithms: ["CRC64NVME", "CRC32", "CRC32C", "SHA256", "SHA1"]
    }),
    Rw(r),
    _g()
  ];
}).s("AmazonS3", "GetObject", {}).n("S3Client", "GetObjectCommand").f(a0, o0).ser(u0).de(d0).build() {
}
const _w = (e) => new Sw({
  endpoint: e.endpoint,
  region: e.region,
  credentials: {
    accessKeyId: e.accessKey,
    secretAccessKey: e.secretKey
  },
  forcePathStyle: !0
  // Required for MinIO
}), hs = /* @__PURE__ */ new Map(), ir = /* @__PURE__ */ new Map(), Ow = async (e, t) => {
  const n = e;
  if (await id(e, n)) return { wasCached: !0 };
  const i = (async () => {
    try {
      if (!t)
        throw new Error("Presigned URL not found!");
      const c = await fetch(t);
      if (!c.ok)
        throw new Error("Failed to fetch model from presigned URL!");
      const a = await c.blob(), u = URL.createObjectURL(a);
      return hs.set(n, { blobUrl: u, instances: 1 }), u;
    } finally {
      ir.delete(e);
    }
  })();
  return ir.set(e, i), { wasCached: !1 };
}, Iw = async (e, t) => {
  const n = e, r = await id(e, n);
  if (r) return { blobUrl: Promise.resolve(r), wasCached: !0 };
  const i = (async () => {
    try {
      const { bucket: c, key: a } = Nw(e), u = new Tw({ Bucket: c, Key: a }), p = await _w(t).send(u);
      if (!p.Body)
        throw new Error("Model not found!");
      const d = await new Response(p.Body).blob(), f = URL.createObjectURL(d);
      return console.log(`Blob URL for ${a} file created:`, f), hs.set(n, { blobUrl: f, instances: 1 }), f;
    } finally {
      ir.delete(e);
    }
  })();
  return ir.set(e, i), { blobUrl: i, wasCached: !1 };
}, id = async (e, t) => {
  if (ir.has(e)) {
    console.log(`Model ${e} is already being loaded. Waiting for existing promise.`);
    const n = await ir.get(e);
    return console.log(`Model ${e} was successfully loaded and found in the cache after waiting for existing promise.`), n;
  }
  if (hs.has(t)) {
    const n = hs.get(t);
    return n.instances += 1, console.log(`Cache hit for model: ${t}. Active instances: ${n.instances}`), n.blobUrl;
  }
  return console.log(`Cache miss for model: ${t}.`), null;
};
function Nw(e) {
  if (!e)
    return console.warn("MeshId is empty. Could not extract bucket and key!"), { bucket: "fallback", key: "meshObject" };
  let t = "fallback", n = e;
  if (e.includes("/")) {
    const r = e.split("/");
    t = r[0], n = r.slice(1).join("/");
  }
  return { bucket: t, key: n };
}
const Ai = /* @__PURE__ */ new Map(), Pw = ({
  sceneObjectId: e,
  meshObjectId: t,
  meshObjectUrl: n,
  position: r = new dn(),
  rotation: i = new yn(),
  scale: c = new Gr(),
  minioData: a,
  onClick: u,
  showOutline: p = !1,
  userData: d
}) => {
  var j;
  const [f, v] = Ve(null), [y, A] = Ve(!1), [U, z] = Ve(!0), K = on(null), { addScreenMessage: R, removeScreenMessage: B } = ys(), q = new Gr(0.5, 0.5, 0.5), O = ((j = t.split("/").pop()) == null ? void 0 : j.replace(/\.[^/.]+$/, "")) ?? t;
  return Et(() => {
    let k = !0, X = 0;
    const ie = 5, te = async () => {
      if (!f) {
        z(!0), console.log(`Loading model for meshObjectId: ${t}, sceneObjectId: ${e}`), R(`Model ${O} is loading...`, `loading_model_${t}`);
        try {
          let Q, Te = !1;
          if (n)
            Q = n, Te = (await Ow(t, Q)).wasCached;
          else {
            if (console.log("Presigned URL not provided, try fetching from MinIO..."), !a) {
              console.error("Minio client data is missing for mesh object with id:", t);
              return;
            }
            const ue = await Iw(t, a);
            Q = await ue.blobUrl, Te = ue.wasCached;
          }
          k && (v(Q), A(!1), Ai.has(t) || Ai.set(t, /* @__PURE__ */ new Set()), Ai.get(t).add(e), console.log(`Model loaded successfully: ${t}`), X = 0, z(!1), B(`loading_model_${t}`), Te || R(`Model ${O} loaded successfully`, `model_loaded_${t}`, 5e3, "#7bf1e3"));
        } catch {
          console.warn(`Failed to load model: ${t}. Retry attempt ${X + 1}`), X++, B(`loading_model_${t}`), X >= ie ? (z(!1), clearInterval(fe), clearInterval(xe), A(!1), R(`Model ${O} failed to load!`, `model_faild_to_load${t}`, 7e3, "red")) : R(`Model ${O} loading failed. Retrying...`, `model_loading_failed_${t}`, 5e3, "orange");
        }
      }
    };
    te();
    const xe = setInterval(() => A((Q) => !Q), 3e3), fe = setInterval(te, 1e4);
    return () => {
      k = !1, clearInterval(fe), clearInterval(xe), B(`loading_model_${t}`);
    };
  }, [t, n, a, f]), Et(() => {
    const k = K.current;
    if (!k) {
      console.warn("Object reference is not set. Cannot add event listeners for highlighting on object with id:", e);
      return;
    }
    const X = () => {
      Bw(k);
    }, ie = () => {
      Dw(k);
    }, te = "mouseenter", xe = "mouseleave";
    return k.addEventListener(te, X), k.addEventListener(xe, ie), () => {
      k.removeEventListener(te, X), k.removeEventListener(xe, ie);
    };
  }, [K]), !f && !U ? /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    /* @__PURE__ */ N.jsx(
      gr,
      {
        position: r,
        rotation: new yn(0, i.y, 0),
        radius: 1,
        opacity: 0.2
      }
    ),
    /* @__PURE__ */ N.jsx(
      gr,
      {
        position: r,
        rotation: new yn(0, i.y, 0),
        radius: 1,
        opacity: 0.2,
        children: /* @__PURE__ */ N.jsxs(Mo, { fontSize: 0.2, position: new We.Vector3(0, 0, 1e-4), children: [
          "Not loaded: ",
          O
        ] })
      }
    )
  ] }) : f ? /* @__PURE__ */ N.jsx(N.Fragment, { children: f && /* @__PURE__ */ N.jsx(cd, { fallback: /* @__PURE__ */ N.jsx(yu, { position: r.clone().addY(q.y * 0.75), scale: q }), children: /* @__PURE__ */ N.jsx(
    Mw,
    {
      sceneObjectId: e,
      modelUrl: f,
      objectRef: K,
      position: r,
      rotation: i,
      scale: new Gr(c)
    }
  ) }) }) : /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    /* @__PURE__ */ N.jsx(yu, { position: r.clone().addY(q.y * 0.75), scale: q }),
    /* @__PURE__ */ N.jsx(
      gr,
      {
        position: r,
        rotation: new yn(0, i.y, 0),
        radius: 1,
        opacity: 0.2
      }
    ),
    y && /* @__PURE__ */ N.jsx(
      gr,
      {
        position: r.clone().addY(q.y * 0.65),
        width: Math.max(0.1, O.length * 0.13),
        height: 0.2,
        radius: 0.3,
        color: "black",
        hoverColor: "gray",
        opacity: 0.8,
        alwaysFaceCamera: !0,
        onlyFaceCameraAroundY: !1,
        children: /* @__PURE__ */ N.jsx(Mo, { fontSize: 0.2, position: new We.Vector3(0, 0, 1e-4), children: O })
      }
    )
  ] });
}, Mw = ({ sceneObjectId: e, modelUrl: t, objectRef: n, position: r, rotation: i, scale: c }) => {
  const { scene: a } = Ad(t), u = er.useMemo(() => a.clone(!0), [a]);
  er.useEffect(() => {
    u.traverse((v) => {
      const y = v;
      y.isMesh && (y.userData = { ...y.userData, sceneObjectId: e });
    });
  }, [u, e]);
  const p = new We.Box3().setFromObject(u), d = p.getSize(new We.Vector3(1, 1, 1)), f = p.getCenter(new We.Vector3());
  return /* @__PURE__ */ N.jsxs(
    "group",
    {
      scale: c.toArray(),
      children: [
        /* @__PURE__ */ N.jsxs(
          "group",
          {
            ref: n,
            position: r.toArray(),
            rotation: i.toArray(),
            castShadow: !0,
            receiveShadow: !0,
            children: [
              /* @__PURE__ */ N.jsx("primitive", { object: u }),
              /* @__PURE__ */ N.jsx("meshStandardMaterial", { color: "white", transparent: !1, opacity: 1, depthWrite: !0 })
            ]
          }
        ),
        /* @__PURE__ */ N.jsx(
          gr,
          {
            position: new dn(r.x, f.y - d.y / 2, r.z),
            rotation: new yn(0, i.y, 0),
            radius: 2,
            width: d.x * 1.2,
            height: d.z * 1.2,
            color: "black",
            opacity: 0.15
          }
        )
      ]
    }
  );
}, Bw = (e) => {
  if (e instanceof We.Mesh) {
    const t = new We.Mesh(e.geometry, new We.MeshBasicMaterial({ color: "yellow", side: We.BackSide }));
    t.scale.set(1.05, 1.05, 1.05), e.add(t);
  } else
    console.warn("Object is not a Mesh and cannot be outlined.");
}, Dw = (e) => {
  e.children.forEach((t) => {
    t instanceof We.Mesh && t.material instanceof We.MeshBasicMaterial && e.remove(t);
  });
};
function Fw(e, t = !1) {
  const n = e[0].index !== null, r = new Set(Object.keys(e[0].attributes)), i = new Set(Object.keys(e[0].morphAttributes)), c = {}, a = {}, u = e[0].morphTargetsRelative, p = new wd();
  let d = 0;
  for (let f = 0; f < e.length; ++f) {
    const v = e[f];
    let y = 0;
    if (n !== (v.index !== null))
      return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + f + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."), null;
    for (const A in v.attributes) {
      if (!r.has(A))
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + f + '. All geometries must have compatible attributes; make sure "' + A + '" attribute exists among all geometries, or in none of them.'), null;
      c[A] === void 0 && (c[A] = []), c[A].push(v.attributes[A]), y++;
    }
    if (y !== r.size)
      return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + f + ". Make sure all geometries have the same number of attributes."), null;
    if (u !== v.morphTargetsRelative)
      return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + f + ". .morphTargetsRelative must be consistent throughout all geometries."), null;
    for (const A in v.morphAttributes) {
      if (!i.has(A))
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + f + ".  .morphAttributes must be consistent throughout all geometries."), null;
      a[A] === void 0 && (a[A] = []), a[A].push(v.morphAttributes[A]);
    }
    if (t) {
      let A;
      if (n)
        A = v.index.count;
      else if (v.attributes.position !== void 0)
        A = v.attributes.position.count;
      else
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + f + ". The geometry must have either an index or a position attribute"), null;
      p.addGroup(d, A, f), d += A;
    }
  }
  if (n) {
    let f = 0;
    const v = [];
    for (let y = 0; y < e.length; ++y) {
      const A = e[y].index;
      for (let U = 0; U < A.count; ++U)
        v.push(A.getX(U) + f);
      f += e[y].attributes.position.count;
    }
    p.setIndex(v);
  }
  for (const f in c) {
    const v = mu(c[f]);
    if (!v)
      return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + f + " attribute."), null;
    p.setAttribute(f, v);
  }
  for (const f in a) {
    const v = a[f][0].length;
    if (v === 0) break;
    p.morphAttributes = p.morphAttributes || {}, p.morphAttributes[f] = [];
    for (let y = 0; y < v; ++y) {
      const A = [];
      for (let z = 0; z < a[f].length; ++z)
        A.push(a[f][z][y]);
      const U = mu(A);
      if (!U)
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + f + " morphAttribute."), null;
      p.morphAttributes[f].push(U);
    }
  }
  return p;
}
function mu(e) {
  let t, n, r, i = -1, c = 0;
  for (let d = 0; d < e.length; ++d) {
    const f = e[d];
    if (t === void 0 && (t = f.array.constructor), t !== f.array.constructor)
      return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."), null;
    if (n === void 0 && (n = f.itemSize), n !== f.itemSize)
      return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."), null;
    if (r === void 0 && (r = f.normalized), r !== f.normalized)
      return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."), null;
    if (i === -1 && (i = f.gpuType), i !== f.gpuType)
      return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."), null;
    c += f.count * n;
  }
  const a = new t(c), u = new xd(a, n, r);
  let p = 0;
  for (let d = 0; d < e.length; ++d) {
    const f = e[d];
    if (f.isInterleavedBufferAttribute) {
      const v = p / n;
      for (let y = 0, A = f.count; y < A; y++)
        for (let U = 0; U < n; U++) {
          const z = f.getComponent(y, U);
          u.setComponent(y + v, U, z);
        }
    } else
      a.set(f.array, p);
    p += f.count * n;
  }
  return i !== void 0 && (u.gpuType = i), u;
}
const jw = ud((e, t) => {
  const n = Fw([
    new We.RingGeometry(0.05, 0.06, 30),
    new We.CircleGeometry(7e-3, 12)
  ]).rotateX(-Math.PI * 0.5);
  return /* @__PURE__ */ N.jsx("mesh", { ref: t, geometry: n, ...e, children: /* @__PURE__ */ N.jsx("meshBasicMaterial", { side: We.DoubleSide, color: e.color }) });
});
ld(({ hitTestMatrix: e }) => {
  const t = on(null);
  return ms(() => {
    t.current != null && (e != null ? (t.current.visible = !0, t.current.position.setFromMatrixPosition(e), t.current.quaternion.setFromRotationMatrix(e)) : t.current.visible = !1);
  }), /* @__PURE__ */ N.jsx(jw, { ref: t, visible: !1 });
});
const yu = ({ position: e, scale: t }) => {
  const n = on(null), r = on([]), i = on(0);
  return ms(() => {
    if (i.current += 0.02, r.current.length) {
      const c = i.current;
      r.current.forEach((a, u) => {
        const p = c + u * (Math.PI / 2), d = 0.6;
        a.position.set(
          Math.sin(p) * d,
          // X axis motion
          Math.sin(p * 1.5) * d,
          // Y axis motion
          Math.cos(p) * d
          // Z axis motion
        );
      });
    }
    n.current && (n.current.rotation.y += 0.01);
  }), /* @__PURE__ */ N.jsxs("group", { ref: n, position: e.toArray(), scale: t.toArray(), children: [
    " ",
    [0, 1, 2, 3].map((c) => /* @__PURE__ */ N.jsxs(
      "mesh",
      {
        ref: (a) => r.current[c] = a,
        children: [
          /* @__PURE__ */ N.jsx("sphereGeometry", { args: [0.2, 32, 32] }),
          /* @__PURE__ */ N.jsx("meshStandardMaterial", { color: Lw(c), roughness: 0.7, metalness: 0.5 })
        ]
      },
      c
    ))
  ] });
}, Lw = (e) => {
  const t = ["#2d40cc", "#80ffb5", "#666666", "#008dc5"];
  return t[e % t.length];
}, gr = ({
  position: e = new dn(),
  rotation: t = new yn(),
  scale: n = new Gr(),
  width: r = 1,
  height: i = 1,
  radius: c = 0.1,
  segments: a = 8,
  color: u = "white",
  hoverColor: p,
  opacity: d = 1,
  transparent: f = !1,
  depthWrite: v = !0,
  alwaysFaceCamera: y = !1,
  onlyFaceCameraAroundY: A = !0,
  onClick: U,
  children: z,
  ...K
}) => {
  const [R, B] = Ve(!1), q = es(() => {
    const X = Math.min(c, r / 2, i / 2), ie = new We.Shape();
    return ie.moveTo(-r / 2 + X, -i / 2), ie.lineTo(r / 2 - X, -i / 2), ie.quadraticCurveTo(r / 2, -i / 2, r / 2, -i / 2 + X), ie.lineTo(r / 2, i / 2 - X), ie.quadraticCurveTo(r / 2, i / 2, r / 2 - X, i / 2), ie.lineTo(-r / 2 + X, i / 2), ie.quadraticCurveTo(-r / 2, i / 2, -r / 2, i / 2 - X), ie.lineTo(-r / 2, -i / 2 + X), ie.quadraticCurveTo(-r / 2, -i / 2, -r / 2 + X, -i / 2), ie;
  }, [r, i, c]), O = es(() => new We.ShapeGeometry(q, a), [q, a]), { camera: j } = vu(), k = er.useRef(null);
  return ms(() => {
    if (k.current)
      if (y)
        if (A) {
          const X = j.position.clone();
          X.y = k.current.position.y, k.current.lookAt(X);
        } else
          k.current.lookAt(j.position);
      else
        k.current.rotation.set(
          We.MathUtils.degToRad(t.x + 90),
          We.MathUtils.degToRad(t.y),
          We.MathUtils.degToRad(t.z)
        );
  }), /* @__PURE__ */ N.jsxs(
    "mesh",
    {
      ref: k,
      geometry: O,
      position: e.toArray(),
      scale: n.toArray(),
      onClick: U,
      onPointerOver: () => B(!0),
      onPointerOut: () => B(!1),
      children: [
        /* @__PURE__ */ N.jsx(
          "meshStandardMaterial",
          {
            color: R && p ? p : u,
            transparent: f || d < 1,
            opacity: d,
            depthWrite: v,
            side: We.DoubleSide
          }
        ),
        z
      ]
    }
  );
}, Uw = (e, t) => {
  let n;
  return () => {
    clearTimeout(n), n = setTimeout(e, t);
  };
}, $w = ({ contentTypes: e, sceneData: t, topicData: n, minioData: r }) => {
  var tn;
  const i = hd(), { camera: c, ...a } = vu(), { scene: u, setScene: p } = qi(), { messages: d, addScreenMessage: f, removeScreenMessage: v } = ys();
  i.getState().groundMesh;
  const [y, A] = Ve(null), U = 22, [z, K] = Ve(!1), [R, B] = Ve(0), [q] = qd(20, 2), [O, j] = Ve(null), [k, X] = Ve(((tn = c == null ? void 0 : c.position) == null ? void 0 : tn.clone()) ?? new We.Vector3(0, 0, 0)), [ie] = zd(c), [te, xe] = Ve(null), fe = es(() => {
    var Ie;
    return ((Ie = c == null ? void 0 : c.position) == null ? void 0 : Ie.clone()) ?? new We.Vector3(0, 0, 0);
  }, [q]), [Q, Te] = Ve(null), [ue, Fe] = Ve({}), bt = dd((Ie, Ct) => {
    Fe((Pt) => ({ ...Pt, [Ie]: Ct }));
  }, []);
  return Et(() => {
    if (!e) {
      console.warn("No content types provided.");
      return;
    }
    if (!t) {
      console.warn("No scene data provided to add object data.");
      return;
    }
    Cn.getState().setVariantContentType(e.variant_content_type_id), Cn.getState().setCommentContentType(e.comments_content_type_id), En.getState().setSceneContentType(t.content_type), En.getState().setVariantContentType(e.variant_content_type_id), En.getState().setCommentContentType(e.comments_content_type_id), console.log("Content types set:", e), p(t), console.log("Scene data updated:", t);
    const Ie = t.objects.reduce((Ct, Pt) => {
      var Ze;
      return Ct[Pt.id] = ((Ze = Pt.variants[0]) == null ? void 0 : Ze.id) ?? null, Ct;
    }, {});
    Fe(Ie);
  }, [e, t]), Et(() => {
    console.log("Topic data updated:", n);
  }, [n]), Et(() => {
    r && (A(r), console.log("Minio data set:", r));
  }, [r]), Et(() => {
    console.log("Scene objects:", u.objects);
  }, [u.objects]), fd(() => {
    const Ie = () => {
      const Pt = document.querySelector("#arc-header");
      Pt && B(Pt.offsetTop + Pt.offsetHeight);
    };
    setTimeout(Ie, 100);
    const Ct = Uw(Ie, 200);
    return window.addEventListener("resize", Ct), () => window.removeEventListener("resize", Ct);
  }, []), pd(
    "all",
    "selectstart",
    (Ie) => {
      if (!u) return;
      const Ct = pf(Ie, { ...a }, u.objects);
      Ct && Te(Ct);
    },
    [u]
  ), Et(() => {
    k.distanceTo(c.position) > 0.2 && X(c.position.clone());
  }, [c.position.x, c.position.z]), /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxs(gd, { style: { width: "100%", height: "100%", fontSize: `${U}px`, boxSizing: "border-box" }, children: [
      /* @__PURE__ */ N.jsx("div", { className: "xr-message-stack", children: d.map((Ie) => /* @__PURE__ */ N.jsx("div", { className: "xr-loading-label py-2 px-3 fw-bold text-center", style: { fontSize: `${U * 0.8}px`, color: Ie.color ?? "white" }, children: Ie.text }, Ie.id)) }),
      /* @__PURE__ */ N.jsx(
        Wd,
        {
          isHelpVisible: z,
          onToggleHelp: () => K((Ie) => !Ie),
          onLeave: () => {
            var Ie;
            return (Ie = i.getState().session) == null ? void 0 : Ie.end();
          },
          fontSize: U
        }
      ),
      /* @__PURE__ */ N.jsxs("div", { style: { top: `${R}px` }, children: [
        /* @__PURE__ */ N.jsx(Vd, { showCardinal: !O && !te }),
        /* @__PURE__ */ N.jsx("div", { id: "compass-container", style: { background: "transparent" }, children: /* @__PURE__ */ N.jsx(
          "button",
          {
            className: `compass-fix-btn${O && te ? " active" : ""}`,
            onMouseDown: (Ie) => Ie.preventDefault(),
            onClick: () => {
              O && te ? (j(null), xe(null)) : (j(q), xe(ie));
            }
          }
        ) })
      ] }),
      /* @__PURE__ */ N.jsx(
        cf,
        {
          isVisible: z,
          onClose: () => K(!1),
          onLeave: () => {
            var Ie;
            return (Ie = i.getState().session) == null ? void 0 : Ie.end();
          },
          headerHeight: R,
          fontSize: U
        }
      ),
      Q && /* @__PURE__ */ N.jsx(
        rf,
        {
          objectId: Q,
          variantId: ue[Q],
          headerHeight: R,
          setCurrentVariant: bt,
          onClose: () => Te(null),
          fontSize: U
        }
      )
    ] }),
    u && /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
      /* @__PURE__ */ N.jsx("ambientLight", { intensity: 5 }),
      /* @__PURE__ */ N.jsx("directionalLight", { intensity: 10 }),
      /* @__PURE__ */ N.jsx(Gd, { headingInRad: ie, cameraPosition: k }),
      /* @__PURE__ */ N.jsx(
        mf,
        {
          selectedVariants: ue,
          minioClientData: y,
          worldRotation: te ?? ie,
          worldPosition: O ?? q,
          cameraPosition: fe
        }
      )
    ] })
  ] });
}, bu = md({ controller: !1 }), Zw = ({
  buttonClassName: e = "start-button",
  buttonText: t = "Enter AR",
  view3dButtonText: n = "View in 3D",
  content_types: r,
  scene: i,
  topic: c
}) => /* @__PURE__ */ N.jsxs("div", { className: "arc-app", children: [
  /* @__PURE__ */ N.jsxs("div", { className: "button-group", children: [
    /* @__PURE__ */ N.jsx("button", { className: e, onClick: () => bu.enterAR(), children: t }),
    /* @__PURE__ */ N.jsx("button", { className: e, children: n })
  ] }),
  /* @__PURE__ */ N.jsx(vd, { style: { width: "100%", height: "100%" }, children: /* @__PURE__ */ N.jsx(yd, { store: bu, children: /* @__PURE__ */ N.jsx(bd, { allow: "immersive-ar", children: /* @__PURE__ */ N.jsx($w, { contentTypes: r, sceneData: i, topicData: c }) }) }) })
] });
export {
  Zw as ArcApp
};
