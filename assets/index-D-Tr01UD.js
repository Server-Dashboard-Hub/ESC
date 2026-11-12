(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Ep(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pu={exports:{}},di={},fu={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var el=Symbol.for("react.element"),zp=Symbol.for("react.portal"),Ip=Symbol.for("react.fragment"),Tp=Symbol.for("react.strict_mode"),Pp=Symbol.for("react.profiler"),_p=Symbol.for("react.provider"),Lp=Symbol.for("react.context"),Rp=Symbol.for("react.forward_ref"),Fp=Symbol.for("react.suspense"),Op=Symbol.for("react.memo"),Ap=Symbol.for("react.lazy"),ts=Symbol.iterator;function Mp(e){return e===null||typeof e!="object"?null:(e=ts&&e[ts]||e["@@iterator"],typeof e=="function"?e:null)}var gu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mu=Object.assign,hu={};function ur(e,t,n){this.props=e,this.context=t,this.refs=hu,this.updater=n||gu}ur.prototype.isReactComponent={};ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xu(){}xu.prototype=ur.prototype;function ea(e,t,n){this.props=e,this.context=t,this.refs=hu,this.updater=n||gu}var ta=ea.prototype=new xu;ta.constructor=ea;mu(ta,ur.prototype);ta.isPureReactComponent=!0;var ns=Array.isArray,vu=Object.prototype.hasOwnProperty,na={current:null},yu={key:!0,ref:!0,__self:!0,__source:!0};function bu(e,t,n){var r,l={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)vu.call(t,r)&&!yu.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var p=Array(u),x=0;x<u;x++)p[x]=arguments[x+2];l.children=p}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:el,type:e,key:i,ref:a,props:l,_owner:na.current}}function Dp(e,t){return{$$typeof:el,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ra(e){return typeof e=="object"&&e!==null&&e.$$typeof===el}function Bp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rs=/\/+/g;function _i(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Bp(""+e.key):t.toString(36)}function Nl(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case el:case zp:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+_i(a,0):r,ns(l)?(n="",e!=null&&(n=e.replace(rs,"$&/")+"/"),Nl(l,t,n,"",function(x){return x})):l!=null&&(ra(l)&&(l=Dp(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(rs,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",ns(e))for(var u=0;u<e.length;u++){i=e[u];var p=r+_i(i,u);a+=Nl(i,t,n,p,l)}else if(p=Mp(e),typeof p=="function")for(e=p.call(e),u=0;!(i=e.next()).done;)i=i.value,p=r+_i(i,u++),a+=Nl(i,t,n,p,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ol(e,t,n){if(e==null)return e;var r=[],l=0;return Nl(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Up(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},El={transition:null},Hp={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:El,ReactCurrentOwner:na};function wu(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:ol,forEach:function(e,t,n){ol(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ol(e,function(){t++}),t},toArray:function(e){return ol(e,function(t){return t})||[]},only:function(e){if(!ra(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};oe.Component=ur;oe.Fragment=Ip;oe.Profiler=Pp;oe.PureComponent=ea;oe.StrictMode=Tp;oe.Suspense=Fp;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hp;oe.act=wu;oe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=mu({},e.props),l=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=na.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(p in t)vu.call(t,p)&&!yu.hasOwnProperty(p)&&(r[p]=t[p]===void 0&&u!==void 0?u[p]:t[p])}var p=arguments.length-2;if(p===1)r.children=n;else if(1<p){u=Array(p);for(var x=0;x<p;x++)u[x]=arguments[x+2];r.children=u}return{$$typeof:el,type:e.type,key:l,ref:i,props:r,_owner:a}};oe.createContext=function(e){return e={$$typeof:Lp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_p,_context:e},e.Consumer=e};oe.createElement=bu;oe.createFactory=function(e){var t=bu.bind(null,e);return t.type=e,t};oe.createRef=function(){return{current:null}};oe.forwardRef=function(e){return{$$typeof:Rp,render:e}};oe.isValidElement=ra;oe.lazy=function(e){return{$$typeof:Ap,_payload:{_status:-1,_result:e},_init:Up}};oe.memo=function(e,t){return{$$typeof:Op,type:e,compare:t===void 0?null:t}};oe.startTransition=function(e){var t=El.transition;El.transition={};try{e()}finally{El.transition=t}};oe.unstable_act=wu;oe.useCallback=function(e,t){return $e.current.useCallback(e,t)};oe.useContext=function(e){return $e.current.useContext(e)};oe.useDebugValue=function(){};oe.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};oe.useEffect=function(e,t){return $e.current.useEffect(e,t)};oe.useId=function(){return $e.current.useId()};oe.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};oe.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};oe.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};oe.useMemo=function(e,t){return $e.current.useMemo(e,t)};oe.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};oe.useRef=function(e){return $e.current.useRef(e)};oe.useState=function(e){return $e.current.useState(e)};oe.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};oe.useTransition=function(){return $e.current.useTransition()};oe.version="18.3.1";fu.exports=oe;var A=fu.exports;const Wp=Ep(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p=A,Vp=Symbol.for("react.element"),Qp=Symbol.for("react.fragment"),Yp=Object.prototype.hasOwnProperty,Gp=$p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kp={key:!0,ref:!0,__self:!0,__source:!0};function ku(e,t,n){var r,l={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Yp.call(t,r)&&!Kp.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Vp,type:e,key:i,ref:a,props:l,_owner:Gp.current}}di.Fragment=Qp;di.jsx=ku;di.jsxs=ku;pu.exports=di;var o=pu.exports,oo={},Su={exports:{}},lt={},ju={exports:{}},Cu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,W){var ne=L.length;L.push(W);e:for(;0<ne;){var ye=ne-1>>>1,Ce=L[ye];if(0<l(Ce,W))L[ye]=W,L[ne]=Ce,ne=ye;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var W=L[0],ne=L.pop();if(ne!==W){L[0]=ne;e:for(var ye=0,Ce=L.length,se=Ce>>>1;ye<se;){var ot=2*(ye+1)-1,pr=L[ot],It=ot+1,Fn=L[It];if(0>l(pr,ne))It<Ce&&0>l(Fn,pr)?(L[ye]=Fn,L[It]=ne,ye=It):(L[ye]=pr,L[ot]=ne,ye=ot);else if(It<Ce&&0>l(Fn,ne))L[ye]=Fn,L[It]=ne,ye=It;else break e}}return W}function l(L,W){var ne=L.sortIndex-W.sortIndex;return ne!==0?ne:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,u=a.now();e.unstable_now=function(){return a.now()-u}}var p=[],x=[],g=1,j=null,S=3,O=!1,M=!1,B=!1,fe=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var W=n(x);W!==null;){if(W.callback===null)r(x);else if(W.startTime<=L)r(x),W.sortIndex=W.expirationTime,t(p,W);else break;W=n(x)}}function T(L){if(B=!1,y(L),!M)if(n(p)!==null)M=!0,Ut(H);else{var W=n(x);W!==null&&Xe(T,W.startTime-L)}}function H(L,W){M=!1,B&&(B=!1,v(Z),Z=-1),O=!0;var ne=S;try{for(y(W),j=n(p);j!==null&&(!(j.expirationTime>W)||L&&!de());){var ye=j.callback;if(typeof ye=="function"){j.callback=null,S=j.priorityLevel;var Ce=ye(j.expirationTime<=W);W=e.unstable_now(),typeof Ce=="function"?j.callback=Ce:j===n(p)&&r(p),y(W)}else r(p);j=n(p)}if(j!==null)var se=!0;else{var ot=n(x);ot!==null&&Xe(T,ot.startTime-W),se=!1}return se}finally{j=null,S=ne,O=!1}}var q=!1,K=null,Z=-1,ve=5,ie=-1;function de(){return!(e.unstable_now()-ie<ve)}function me(){if(K!==null){var L=e.unstable_now();ie=L;var W=!0;try{W=K(!0,L)}finally{W?gt():(q=!1,K=null)}}else q=!1}var gt;if(typeof m=="function")gt=function(){m(me)};else if(typeof MessageChannel<"u"){var Rn=new MessageChannel,mt=Rn.port2;Rn.port1.onmessage=me,gt=function(){mt.postMessage(null)}}else gt=function(){fe(me,0)};function Ut(L){K=L,q||(q=!0,gt())}function Xe(L,W){Z=fe(function(){L(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){M||O||(M=!0,Ut(H))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_getFirstCallbackNode=function(){return n(p)},e.unstable_next=function(L){switch(S){case 1:case 2:case 3:var W=3;break;default:W=S}var ne=S;S=W;try{return L()}finally{S=ne}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var ne=S;S=L;try{return W()}finally{S=ne}},e.unstable_scheduleCallback=function(L,W,ne){var ye=e.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ye+ne:ye):ne=ye,L){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=ne+Ce,L={id:g++,callback:W,priorityLevel:L,startTime:ne,expirationTime:Ce,sortIndex:-1},ne>ye?(L.sortIndex=ne,t(x,L),n(p)===null&&L===n(x)&&(B?(v(Z),Z=-1):B=!0,Xe(T,ne-ye))):(L.sortIndex=Ce,t(p,L),M||O||(M=!0,Ut(H))),L},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(L){var W=S;return function(){var ne=S;S=W;try{return L.apply(this,arguments)}finally{S=ne}}}})(Cu);ju.exports=Cu;var qp=ju.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp=A,rt=qp;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nu=new Set,Ar={};function _n(e,t){nr(e,t),nr(e+"Capture",t)}function nr(e,t){for(Ar[e]=t,e=0;e<t.length;e++)Nu.add(t[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ao=Object.prototype.hasOwnProperty,Xp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ls={},is={};function Zp(e){return ao.call(is,e)?!0:ao.call(ls,e)?!1:Xp.test(e)?is[e]=!0:(ls[e]=!0,!1)}function ef(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tf(e,t,n,r){if(t===null||typeof t>"u"||ef(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ae[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ae[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ae[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ae[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var la=/[\-:]([a-z])/g;function ia(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(la,ia);Ae[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(la,ia);Ae[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(la,ia);Ae[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ae[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function oa(e,t,n,r){var l=Ae.hasOwnProperty(t)?Ae[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(tf(t,n,l,r)&&(n=null),r||l===null?Zp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bt=Jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,al=Symbol.for("react.element"),Mn=Symbol.for("react.portal"),Dn=Symbol.for("react.fragment"),aa=Symbol.for("react.strict_mode"),so=Symbol.for("react.profiler"),Eu=Symbol.for("react.provider"),zu=Symbol.for("react.context"),sa=Symbol.for("react.forward_ref"),uo=Symbol.for("react.suspense"),co=Symbol.for("react.suspense_list"),ua=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),Iu=Symbol.for("react.offscreen"),os=Symbol.iterator;function mr(e){return e===null||typeof e!="object"?null:(e=os&&e[os]||e["@@iterator"],typeof e=="function"?e:null)}var je=Object.assign,Li;function Sr(e){if(Li===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Li=t&&t[1]||""}return`
`+Li+e}var Ri=!1;function Fi(e,t){if(!e||Ri)return"";Ri=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(x){var r=x}Reflect.construct(e,[],t)}else{try{t.call()}catch(x){r=x}e.call(t.prototype)}else{try{throw Error()}catch(x){r=x}e()}}catch(x){if(x&&r&&typeof x.stack=="string"){for(var l=x.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,u=i.length-1;1<=a&&0<=u&&l[a]!==i[u];)u--;for(;1<=a&&0<=u;a--,u--)if(l[a]!==i[u]){if(a!==1||u!==1)do if(a--,u--,0>u||l[a]!==i[u]){var p=`
`+l[a].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=a&&0<=u);break}}}finally{Ri=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sr(e):""}function nf(e){switch(e.tag){case 5:return Sr(e.type);case 16:return Sr("Lazy");case 13:return Sr("Suspense");case 19:return Sr("SuspenseList");case 0:case 2:case 15:return e=Fi(e.type,!1),e;case 11:return e=Fi(e.type.render,!1),e;case 1:return e=Fi(e.type,!0),e;default:return""}}function po(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dn:return"Fragment";case Mn:return"Portal";case so:return"Profiler";case aa:return"StrictMode";case uo:return"Suspense";case co:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zu:return(e.displayName||"Context")+".Consumer";case Eu:return(e._context.displayName||"Context")+".Provider";case sa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ua:return t=e.displayName||null,t!==null?t:po(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return po(e(t))}catch{}}return null}function rf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return po(t);case 8:return t===aa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lf(e){var t=Tu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sl(e){e._valueTracker||(e._valueTracker=lf(e))}function Pu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Tu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fo(e,t){var n=t.checked;return je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function as(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _u(e,t){t=t.checked,t!=null&&oa(e,"checked",t,!1)}function go(e,t){_u(e,t);var n=un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mo(e,t.type,n):t.hasOwnProperty("defaultValue")&&mo(e,t.type,un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ss(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function mo(e,t,n){(t!=="number"||Bl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jr=Array.isArray;function qn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+un(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ho(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function us(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(jr(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:un(n)}}function Lu(e,t){var n=un(t.value),r=un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ds(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ru(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ru(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ul,Fu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ul.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},of=["Webkit","ms","Moz","O"];Object.keys(Er).forEach(function(e){of.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Er[t]=Er[e]})});function Ou(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Er.hasOwnProperty(e)&&Er[e]?(""+t).trim():t+"px"}function Au(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ou(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var af=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vo(e,t){if(t){if(af[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function yo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bo=null;function da(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wo=null,Jn=null,Xn=null;function cs(e){if(e=rl(e)){if(typeof wo!="function")throw Error(F(280));var t=e.stateNode;t&&(t=mi(t),wo(e.stateNode,e.type,t))}}function Mu(e){Jn?Xn?Xn.push(e):Xn=[e]:Jn=e}function Du(){if(Jn){var e=Jn,t=Xn;if(Xn=Jn=null,cs(e),t)for(e=0;e<t.length;e++)cs(t[e])}}function Bu(e,t){return e(t)}function Uu(){}var Oi=!1;function Hu(e,t,n){if(Oi)return e(t,n);Oi=!0;try{return Bu(e,t,n)}finally{Oi=!1,(Jn!==null||Xn!==null)&&(Uu(),Du())}}function Dr(e,t){var n=e.stateNode;if(n===null)return null;var r=mi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var ko=!1;if(Ot)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){ko=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{ko=!1}function sf(e,t,n,r,l,i,a,u,p){var x=Array.prototype.slice.call(arguments,3);try{t.apply(n,x)}catch(g){this.onError(g)}}var zr=!1,Ul=null,Hl=!1,So=null,uf={onError:function(e){zr=!0,Ul=e}};function df(e,t,n,r,l,i,a,u,p){zr=!1,Ul=null,sf.apply(uf,arguments)}function cf(e,t,n,r,l,i,a,u,p){if(df.apply(this,arguments),zr){if(zr){var x=Ul;zr=!1,Ul=null}else throw Error(F(198));Hl||(Hl=!0,So=x)}}function Ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ps(e){if(Ln(e)!==e)throw Error(F(188))}function pf(e){var t=e.alternate;if(!t){if(t=Ln(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ps(l),e;if(i===r)return ps(l),t;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,u=l.child;u;){if(u===n){a=!0,n=l,r=i;break}if(u===r){a=!0,r=l,n=i;break}u=u.sibling}if(!a){for(u=i.child;u;){if(u===n){a=!0,n=i,r=l;break}if(u===r){a=!0,r=i,n=l;break}u=u.sibling}if(!a)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function $u(e){return e=pf(e),e!==null?Vu(e):null}function Vu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vu(e);if(t!==null)return t;e=e.sibling}return null}var Qu=rt.unstable_scheduleCallback,fs=rt.unstable_cancelCallback,ff=rt.unstable_shouldYield,gf=rt.unstable_requestPaint,Ee=rt.unstable_now,mf=rt.unstable_getCurrentPriorityLevel,ca=rt.unstable_ImmediatePriority,Yu=rt.unstable_UserBlockingPriority,Wl=rt.unstable_NormalPriority,hf=rt.unstable_LowPriority,Gu=rt.unstable_IdlePriority,ci=null,Et=null;function xf(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(ci,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:bf,vf=Math.log,yf=Math.LN2;function bf(e){return e>>>=0,e===0?32:31-(vf(e)/yf|0)|0}var dl=64,cl=4194304;function Cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $l(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var u=a&~l;u!==0?r=Cr(u):(i&=a,i!==0&&(r=Cr(i)))}else a=n&~l,a!==0?r=Cr(a):i!==0&&(r=Cr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-wt(t),l=1<<n,r|=e[n],t&=~l;return r}function wf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-wt(i),u=1<<a,p=l[a];p===-1?(!(u&n)||u&r)&&(l[a]=wf(u,t)):p<=t&&(e.expiredLanes|=u),i&=~u}}function jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ku(){var e=dl;return dl<<=1,!(dl&4194240)&&(dl=64),e}function Ai(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=n}function Sf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-wt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function pa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var pe=0;function qu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ju,fa,Xu,Zu,ed,Co=!1,pl=[],en=null,tn=null,nn=null,Br=new Map,Ur=new Map,qt=[],jf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gs(e,t){switch(e){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":Br.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ur.delete(t.pointerId)}}function xr(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=rl(t),t!==null&&fa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Cf(e,t,n,r,l){switch(t){case"focusin":return en=xr(en,e,t,n,r,l),!0;case"dragenter":return tn=xr(tn,e,t,n,r,l),!0;case"mouseover":return nn=xr(nn,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Br.set(i,xr(Br.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Ur.set(i,xr(Ur.get(i)||null,e,t,n,r,l)),!0}return!1}function td(e){var t=kn(e.target);if(t!==null){var n=Ln(t);if(n!==null){if(t=n.tag,t===13){if(t=Wu(n),t!==null){e.blockedOn=t,ed(e.priority,function(){Xu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=No(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bo=r,n.target.dispatchEvent(r),bo=null}else return t=rl(n),t!==null&&fa(t),e.blockedOn=n,!1;t.shift()}return!0}function ms(e,t,n){zl(e)&&n.delete(t)}function Nf(){Co=!1,en!==null&&zl(en)&&(en=null),tn!==null&&zl(tn)&&(tn=null),nn!==null&&zl(nn)&&(nn=null),Br.forEach(ms),Ur.forEach(ms)}function vr(e,t){e.blockedOn===t&&(e.blockedOn=null,Co||(Co=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,Nf)))}function Hr(e){function t(l){return vr(l,e)}if(0<pl.length){vr(pl[0],e);for(var n=1;n<pl.length;n++){var r=pl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(en!==null&&vr(en,e),tn!==null&&vr(tn,e),nn!==null&&vr(nn,e),Br.forEach(t),Ur.forEach(t),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)td(n),n.blockedOn===null&&qt.shift()}var Zn=Bt.ReactCurrentBatchConfig,Vl=!0;function Ef(e,t,n,r){var l=pe,i=Zn.transition;Zn.transition=null;try{pe=1,ga(e,t,n,r)}finally{pe=l,Zn.transition=i}}function zf(e,t,n,r){var l=pe,i=Zn.transition;Zn.transition=null;try{pe=4,ga(e,t,n,r)}finally{pe=l,Zn.transition=i}}function ga(e,t,n,r){if(Vl){var l=No(e,t,n,r);if(l===null)Yi(e,t,r,Ql,n),gs(e,r);else if(Cf(l,e,t,n,r))r.stopPropagation();else if(gs(e,r),t&4&&-1<jf.indexOf(e)){for(;l!==null;){var i=rl(l);if(i!==null&&Ju(i),i=No(e,t,n,r),i===null&&Yi(e,t,r,Ql,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Yi(e,t,r,null,n)}}var Ql=null;function No(e,t,n,r){if(Ql=null,e=da(r),e=kn(e),e!==null)if(t=Ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ql=e,null}function nd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mf()){case ca:return 1;case Yu:return 4;case Wl:case hf:return 16;case Gu:return 536870912;default:return 16}default:return 16}}var Xt=null,ma=null,Il=null;function rd(){if(Il)return Il;var e,t=ma,n=t.length,r,l="value"in Xt?Xt.value:Xt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Il=l.slice(e,1<r?1-r:void 0)}function Tl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function hs(){return!1}function it(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fl:hs,this.isPropagationStopped=hs,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ha=it(dr),nl=je({},dr,{view:0,detail:0}),If=it(nl),Mi,Di,yr,pi=je({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(Mi=e.screenX-yr.screenX,Di=e.screenY-yr.screenY):Di=Mi=0,yr=e),Mi)},movementY:function(e){return"movementY"in e?e.movementY:Di}}),xs=it(pi),Tf=je({},pi,{dataTransfer:0}),Pf=it(Tf),_f=je({},nl,{relatedTarget:0}),Bi=it(_f),Lf=je({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Rf=it(Lf),Ff=je({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Of=it(Ff),Af=je({},dr,{data:0}),vs=it(Af),Mf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Df={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bf[e])?!!t[e]:!1}function xa(){return Uf}var Hf=je({},nl,{key:function(e){if(e.key){var t=Mf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Df[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xa,charCode:function(e){return e.type==="keypress"?Tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wf=it(Hf),$f=je({},pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ys=it($f),Vf=je({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xa}),Qf=it(Vf),Yf=je({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gf=it(Yf),Kf=je({},pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qf=it(Kf),Jf=[9,13,27,32],va=Ot&&"CompositionEvent"in window,Ir=null;Ot&&"documentMode"in document&&(Ir=document.documentMode);var Xf=Ot&&"TextEvent"in window&&!Ir,ld=Ot&&(!va||Ir&&8<Ir&&11>=Ir),bs=" ",ws=!1;function id(e,t){switch(e){case"keyup":return Jf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function od(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bn=!1;function Zf(e,t){switch(e){case"compositionend":return od(t);case"keypress":return t.which!==32?null:(ws=!0,bs);case"textInput":return e=t.data,e===bs&&ws?null:e;default:return null}}function e0(e,t){if(Bn)return e==="compositionend"||!va&&id(e,t)?(e=rd(),Il=ma=Xt=null,Bn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ld&&t.locale!=="ko"?null:t.data;default:return null}}var t0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!t0[e.type]:t==="textarea"}function ad(e,t,n,r){Mu(r),t=Yl(t,"onChange"),0<t.length&&(n=new ha("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tr=null,Wr=null;function n0(e){vd(e,0)}function fi(e){var t=Wn(e);if(Pu(t))return e}function r0(e,t){if(e==="change")return t}var sd=!1;if(Ot){var Ui;if(Ot){var Hi="oninput"in document;if(!Hi){var Ss=document.createElement("div");Ss.setAttribute("oninput","return;"),Hi=typeof Ss.oninput=="function"}Ui=Hi}else Ui=!1;sd=Ui&&(!document.documentMode||9<document.documentMode)}function js(){Tr&&(Tr.detachEvent("onpropertychange",ud),Wr=Tr=null)}function ud(e){if(e.propertyName==="value"&&fi(Wr)){var t=[];ad(t,Wr,e,da(e)),Hu(n0,t)}}function l0(e,t,n){e==="focusin"?(js(),Tr=t,Wr=n,Tr.attachEvent("onpropertychange",ud)):e==="focusout"&&js()}function i0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fi(Wr)}function o0(e,t){if(e==="click")return fi(t)}function a0(e,t){if(e==="input"||e==="change")return fi(t)}function s0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:s0;function $r(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ao.call(t,l)||!St(e[l],t[l]))return!1}return!0}function Cs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ns(e,t){var n=Cs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cs(n)}}function dd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cd(){for(var e=window,t=Bl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bl(e.document)}return t}function ya(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function u0(e){var t=cd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dd(n.ownerDocument.documentElement,n)){if(r!==null&&ya(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ns(n,i);var a=Ns(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var d0=Ot&&"documentMode"in document&&11>=document.documentMode,Un=null,Eo=null,Pr=null,zo=!1;function Es(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zo||Un==null||Un!==Bl(r)||(r=Un,"selectionStart"in r&&ya(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&$r(Pr,r)||(Pr=r,r=Yl(Eo,"onSelect"),0<r.length&&(t=new ha("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Un)))}function gl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hn={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},Wi={},pd={};Ot&&(pd=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function gi(e){if(Wi[e])return Wi[e];if(!Hn[e])return e;var t=Hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pd)return Wi[e]=t[n];return e}var fd=gi("animationend"),gd=gi("animationiteration"),md=gi("animationstart"),hd=gi("transitionend"),xd=new Map,zs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cn(e,t){xd.set(e,t),_n(t,[e])}for(var $i=0;$i<zs.length;$i++){var Vi=zs[$i],c0=Vi.toLowerCase(),p0=Vi[0].toUpperCase()+Vi.slice(1);cn(c0,"on"+p0)}cn(fd,"onAnimationEnd");cn(gd,"onAnimationIteration");cn(md,"onAnimationStart");cn("dblclick","onDoubleClick");cn("focusin","onFocus");cn("focusout","onBlur");cn(hd,"onTransitionEnd");nr("onMouseEnter",["mouseout","mouseover"]);nr("onMouseLeave",["mouseout","mouseover"]);nr("onPointerEnter",["pointerout","pointerover"]);nr("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));function Is(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,cf(r,t,void 0,e),e.currentTarget=null}function vd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var u=r[a],p=u.instance,x=u.currentTarget;if(u=u.listener,p!==i&&l.isPropagationStopped())break e;Is(l,u,x),i=p}else for(a=0;a<r.length;a++){if(u=r[a],p=u.instance,x=u.currentTarget,u=u.listener,p!==i&&l.isPropagationStopped())break e;Is(l,u,x),i=p}}}if(Hl)throw e=So,Hl=!1,So=null,e}function he(e,t){var n=t[Lo];n===void 0&&(n=t[Lo]=new Set);var r=e+"__bubble";n.has(r)||(yd(t,e,2,!1),n.add(r))}function Qi(e,t,n){var r=0;t&&(r|=4),yd(n,e,r,t)}var ml="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[ml]){e[ml]=!0,Nu.forEach(function(n){n!=="selectionchange"&&(f0.has(n)||Qi(n,!1,e),Qi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ml]||(t[ml]=!0,Qi("selectionchange",!1,t))}}function yd(e,t,n,r){switch(nd(t)){case 1:var l=Ef;break;case 4:l=zf;break;default:l=ga}n=l.bind(null,t,n,e),l=void 0,!ko||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Yi(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var p=a.tag;if((p===3||p===4)&&(p=a.stateNode.containerInfo,p===l||p.nodeType===8&&p.parentNode===l))return;a=a.return}for(;u!==null;){if(a=kn(u),a===null)return;if(p=a.tag,p===5||p===6){r=i=a;continue e}u=u.parentNode}}r=r.return}Hu(function(){var x=i,g=da(n),j=[];e:{var S=xd.get(e);if(S!==void 0){var O=ha,M=e;switch(e){case"keypress":if(Tl(n)===0)break e;case"keydown":case"keyup":O=Wf;break;case"focusin":M="focus",O=Bi;break;case"focusout":M="blur",O=Bi;break;case"beforeblur":case"afterblur":O=Bi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Pf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Qf;break;case fd:case gd:case md:O=Rf;break;case hd:O=Gf;break;case"scroll":O=If;break;case"wheel":O=qf;break;case"copy":case"cut":case"paste":O=Of;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=ys}var B=(t&4)!==0,fe=!B&&e==="scroll",v=B?S!==null?S+"Capture":null:S;B=[];for(var m=x,y;m!==null;){y=m;var T=y.stateNode;if(y.tag===5&&T!==null&&(y=T,v!==null&&(T=Dr(m,v),T!=null&&B.push(Qr(m,T,y)))),fe)break;m=m.return}0<B.length&&(S=new O(S,M,null,n,g),j.push({event:S,listeners:B}))}}if(!(t&7)){e:{if(S=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",S&&n!==bo&&(M=n.relatedTarget||n.fromElement)&&(kn(M)||M[At]))break e;if((O||S)&&(S=g.window===g?g:(S=g.ownerDocument)?S.defaultView||S.parentWindow:window,O?(M=n.relatedTarget||n.toElement,O=x,M=M?kn(M):null,M!==null&&(fe=Ln(M),M!==fe||M.tag!==5&&M.tag!==6)&&(M=null)):(O=null,M=x),O!==M)){if(B=xs,T="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(B=ys,T="onPointerLeave",v="onPointerEnter",m="pointer"),fe=O==null?S:Wn(O),y=M==null?S:Wn(M),S=new B(T,m+"leave",O,n,g),S.target=fe,S.relatedTarget=y,T=null,kn(g)===x&&(B=new B(v,m+"enter",M,n,g),B.target=y,B.relatedTarget=fe,T=B),fe=T,O&&M)t:{for(B=O,v=M,m=0,y=B;y;y=On(y))m++;for(y=0,T=v;T;T=On(T))y++;for(;0<m-y;)B=On(B),m--;for(;0<y-m;)v=On(v),y--;for(;m--;){if(B===v||v!==null&&B===v.alternate)break t;B=On(B),v=On(v)}B=null}else B=null;O!==null&&Ts(j,S,O,B,!1),M!==null&&fe!==null&&Ts(j,fe,M,B,!0)}}e:{if(S=x?Wn(x):window,O=S.nodeName&&S.nodeName.toLowerCase(),O==="select"||O==="input"&&S.type==="file")var H=r0;else if(ks(S))if(sd)H=a0;else{H=i0;var q=l0}else(O=S.nodeName)&&O.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(H=o0);if(H&&(H=H(e,x))){ad(j,H,n,g);break e}q&&q(e,S,x),e==="focusout"&&(q=S._wrapperState)&&q.controlled&&S.type==="number"&&mo(S,"number",S.value)}switch(q=x?Wn(x):window,e){case"focusin":(ks(q)||q.contentEditable==="true")&&(Un=q,Eo=x,Pr=null);break;case"focusout":Pr=Eo=Un=null;break;case"mousedown":zo=!0;break;case"contextmenu":case"mouseup":case"dragend":zo=!1,Es(j,n,g);break;case"selectionchange":if(d0)break;case"keydown":case"keyup":Es(j,n,g)}var K;if(va)e:{switch(e){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else Bn?id(e,n)&&(Z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Z="onCompositionStart");Z&&(ld&&n.locale!=="ko"&&(Bn||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&Bn&&(K=rd()):(Xt=g,ma="value"in Xt?Xt.value:Xt.textContent,Bn=!0)),q=Yl(x,Z),0<q.length&&(Z=new vs(Z,e,null,n,g),j.push({event:Z,listeners:q}),K?Z.data=K:(K=od(n),K!==null&&(Z.data=K)))),(K=Xf?Zf(e,n):e0(e,n))&&(x=Yl(x,"onBeforeInput"),0<x.length&&(g=new vs("onBeforeInput","beforeinput",null,n,g),j.push({event:g,listeners:x}),g.data=K))}vd(j,t)})}function Qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Dr(e,n),i!=null&&r.unshift(Qr(e,i,l)),i=Dr(e,t),i!=null&&r.push(Qr(e,i,l))),e=e.return}return r}function On(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ts(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var u=n,p=u.alternate,x=u.stateNode;if(p!==null&&p===r)break;u.tag===5&&x!==null&&(u=x,l?(p=Dr(n,i),p!=null&&a.unshift(Qr(n,p,u))):l||(p=Dr(n,i),p!=null&&a.push(Qr(n,p,u)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var g0=/\r\n?/g,m0=/\u0000|\uFFFD/g;function Ps(e){return(typeof e=="string"?e:""+e).replace(g0,`
`).replace(m0,"")}function hl(e,t,n){if(t=Ps(t),Ps(e)!==t&&n)throw Error(F(425))}function Gl(){}var Io=null,To=null;function Po(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _o=typeof setTimeout=="function"?setTimeout:void 0,h0=typeof clearTimeout=="function"?clearTimeout:void 0,_s=typeof Promise=="function"?Promise:void 0,x0=typeof queueMicrotask=="function"?queueMicrotask:typeof _s<"u"?function(e){return _s.resolve(null).then(e).catch(v0)}:_o;function v0(e){setTimeout(function(){throw e})}function Gi(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Hr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Hr(t)}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ls(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cr=Math.random().toString(36).slice(2),Nt="__reactFiber$"+cr,Yr="__reactProps$"+cr,At="__reactContainer$"+cr,Lo="__reactEvents$"+cr,y0="__reactListeners$"+cr,b0="__reactHandles$"+cr;function kn(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ls(e);e!==null;){if(n=e[Nt])return n;e=Ls(e)}return t}e=n,n=e.parentNode}return null}function rl(e){return e=e[Nt]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function mi(e){return e[Yr]||null}var Ro=[],$n=-1;function pn(e){return{current:e}}function xe(e){0>$n||(e.current=Ro[$n],Ro[$n]=null,$n--)}function ge(e,t){$n++,Ro[$n]=e.current,e.current=t}var dn={},Ue=pn(dn),Ke=pn(!1),En=dn;function rr(e,t){var n=e.type.contextTypes;if(!n)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function qe(e){return e=e.childContextTypes,e!=null}function Kl(){xe(Ke),xe(Ue)}function Rs(e,t,n){if(Ue.current!==dn)throw Error(F(168));ge(Ue,t),ge(Ke,n)}function bd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(F(108,rf(e)||"Unknown",l));return je({},n,r)}function ql(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,En=Ue.current,ge(Ue,e),ge(Ke,Ke.current),!0}function Fs(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=bd(e,t,En),r.__reactInternalMemoizedMergedChildContext=e,xe(Ke),xe(Ue),ge(Ue,e)):xe(Ke),ge(Ke,n)}var _t=null,hi=!1,Ki=!1;function wd(e){_t===null?_t=[e]:_t.push(e)}function w0(e){hi=!0,wd(e)}function fn(){if(!Ki&&_t!==null){Ki=!0;var e=0,t=pe;try{var n=_t;for(pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,hi=!1}catch(l){throw _t!==null&&(_t=_t.slice(e+1)),Qu(ca,fn),l}finally{pe=t,Ki=!1}}return null}var Vn=[],Qn=0,Jl=null,Xl=0,st=[],ut=0,zn=null,Lt=1,Rt="";function bn(e,t){Vn[Qn++]=Xl,Vn[Qn++]=Jl,Jl=e,Xl=t}function kd(e,t,n){st[ut++]=Lt,st[ut++]=Rt,st[ut++]=zn,zn=e;var r=Lt;e=Rt;var l=32-wt(r)-1;r&=~(1<<l),n+=1;var i=32-wt(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,Lt=1<<32-wt(t)+l|n<<l|r,Rt=i+e}else Lt=1<<i|n<<l|r,Rt=e}function ba(e){e.return!==null&&(bn(e,1),kd(e,1,0))}function wa(e){for(;e===Jl;)Jl=Vn[--Qn],Vn[Qn]=null,Xl=Vn[--Qn],Vn[Qn]=null;for(;e===zn;)zn=st[--ut],st[ut]=null,Rt=st[--ut],st[ut]=null,Lt=st[--ut],st[ut]=null}var nt=null,tt=null,we=!1,bt=null;function Sd(e,t){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Os(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,tt=rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zn!==null?{id:Lt,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,tt=null,!0):!1;default:return!1}}function Fo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oo(e){if(we){var t=tt;if(t){var n=t;if(!Os(e,t)){if(Fo(e))throw Error(F(418));t=rn(n.nextSibling);var r=nt;t&&Os(e,t)?Sd(r,n):(e.flags=e.flags&-4097|2,we=!1,nt=e)}}else{if(Fo(e))throw Error(F(418));e.flags=e.flags&-4097|2,we=!1,nt=e}}}function As(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function xl(e){if(e!==nt)return!1;if(!we)return As(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Po(e.type,e.memoizedProps)),t&&(t=tt)){if(Fo(e))throw jd(),Error(F(418));for(;t;)Sd(e,t),t=rn(t.nextSibling)}if(As(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=nt?rn(e.stateNode.nextSibling):null;return!0}function jd(){for(var e=tt;e;)e=rn(e.nextSibling)}function lr(){tt=nt=null,we=!1}function ka(e){bt===null?bt=[e]:bt.push(e)}var k0=Bt.ReactCurrentBatchConfig;function br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var u=l.refs;a===null?delete u[i]:u[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function vl(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ms(e){var t=e._init;return t(e._payload)}function Cd(e){function t(v,m){if(e){var y=v.deletions;y===null?(v.deletions=[m],v.flags|=16):y.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function l(v,m){return v=sn(v,m),v.index=0,v.sibling=null,v}function i(v,m,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<m?(v.flags|=2,m):y):(v.flags|=2,m)):(v.flags|=1048576,m)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function u(v,m,y,T){return m===null||m.tag!==6?(m=no(y,v.mode,T),m.return=v,m):(m=l(m,y),m.return=v,m)}function p(v,m,y,T){var H=y.type;return H===Dn?g(v,m,y.props.children,T,y.key):m!==null&&(m.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Gt&&Ms(H)===m.type)?(T=l(m,y.props),T.ref=br(v,m,y),T.return=v,T):(T=Al(y.type,y.key,y.props,null,v.mode,T),T.ref=br(v,m,y),T.return=v,T)}function x(v,m,y,T){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=ro(y,v.mode,T),m.return=v,m):(m=l(m,y.children||[]),m.return=v,m)}function g(v,m,y,T,H){return m===null||m.tag!==7?(m=Nn(y,v.mode,T,H),m.return=v,m):(m=l(m,y),m.return=v,m)}function j(v,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=no(""+m,v.mode,y),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case al:return y=Al(m.type,m.key,m.props,null,v.mode,y),y.ref=br(v,null,m),y.return=v,y;case Mn:return m=ro(m,v.mode,y),m.return=v,m;case Gt:var T=m._init;return j(v,T(m._payload),y)}if(jr(m)||mr(m))return m=Nn(m,v.mode,y,null),m.return=v,m;vl(v,m)}return null}function S(v,m,y,T){var H=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return H!==null?null:u(v,m,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case al:return y.key===H?p(v,m,y,T):null;case Mn:return y.key===H?x(v,m,y,T):null;case Gt:return H=y._init,S(v,m,H(y._payload),T)}if(jr(y)||mr(y))return H!==null?null:g(v,m,y,T,null);vl(v,y)}return null}function O(v,m,y,T,H){if(typeof T=="string"&&T!==""||typeof T=="number")return v=v.get(y)||null,u(m,v,""+T,H);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case al:return v=v.get(T.key===null?y:T.key)||null,p(m,v,T,H);case Mn:return v=v.get(T.key===null?y:T.key)||null,x(m,v,T,H);case Gt:var q=T._init;return O(v,m,y,q(T._payload),H)}if(jr(T)||mr(T))return v=v.get(y)||null,g(m,v,T,H,null);vl(m,T)}return null}function M(v,m,y,T){for(var H=null,q=null,K=m,Z=m=0,ve=null;K!==null&&Z<y.length;Z++){K.index>Z?(ve=K,K=null):ve=K.sibling;var ie=S(v,K,y[Z],T);if(ie===null){K===null&&(K=ve);break}e&&K&&ie.alternate===null&&t(v,K),m=i(ie,m,Z),q===null?H=ie:q.sibling=ie,q=ie,K=ve}if(Z===y.length)return n(v,K),we&&bn(v,Z),H;if(K===null){for(;Z<y.length;Z++)K=j(v,y[Z],T),K!==null&&(m=i(K,m,Z),q===null?H=K:q.sibling=K,q=K);return we&&bn(v,Z),H}for(K=r(v,K);Z<y.length;Z++)ve=O(K,v,Z,y[Z],T),ve!==null&&(e&&ve.alternate!==null&&K.delete(ve.key===null?Z:ve.key),m=i(ve,m,Z),q===null?H=ve:q.sibling=ve,q=ve);return e&&K.forEach(function(de){return t(v,de)}),we&&bn(v,Z),H}function B(v,m,y,T){var H=mr(y);if(typeof H!="function")throw Error(F(150));if(y=H.call(y),y==null)throw Error(F(151));for(var q=H=null,K=m,Z=m=0,ve=null,ie=y.next();K!==null&&!ie.done;Z++,ie=y.next()){K.index>Z?(ve=K,K=null):ve=K.sibling;var de=S(v,K,ie.value,T);if(de===null){K===null&&(K=ve);break}e&&K&&de.alternate===null&&t(v,K),m=i(de,m,Z),q===null?H=de:q.sibling=de,q=de,K=ve}if(ie.done)return n(v,K),we&&bn(v,Z),H;if(K===null){for(;!ie.done;Z++,ie=y.next())ie=j(v,ie.value,T),ie!==null&&(m=i(ie,m,Z),q===null?H=ie:q.sibling=ie,q=ie);return we&&bn(v,Z),H}for(K=r(v,K);!ie.done;Z++,ie=y.next())ie=O(K,v,Z,ie.value,T),ie!==null&&(e&&ie.alternate!==null&&K.delete(ie.key===null?Z:ie.key),m=i(ie,m,Z),q===null?H=ie:q.sibling=ie,q=ie);return e&&K.forEach(function(me){return t(v,me)}),we&&bn(v,Z),H}function fe(v,m,y,T){if(typeof y=="object"&&y!==null&&y.type===Dn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case al:e:{for(var H=y.key,q=m;q!==null;){if(q.key===H){if(H=y.type,H===Dn){if(q.tag===7){n(v,q.sibling),m=l(q,y.props.children),m.return=v,v=m;break e}}else if(q.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Gt&&Ms(H)===q.type){n(v,q.sibling),m=l(q,y.props),m.ref=br(v,q,y),m.return=v,v=m;break e}n(v,q);break}else t(v,q);q=q.sibling}y.type===Dn?(m=Nn(y.props.children,v.mode,T,y.key),m.return=v,v=m):(T=Al(y.type,y.key,y.props,null,v.mode,T),T.ref=br(v,m,y),T.return=v,v=T)}return a(v);case Mn:e:{for(q=y.key;m!==null;){if(m.key===q)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(v,m.sibling),m=l(m,y.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=ro(y,v.mode,T),m.return=v,v=m}return a(v);case Gt:return q=y._init,fe(v,m,q(y._payload),T)}if(jr(y))return M(v,m,y,T);if(mr(y))return B(v,m,y,T);vl(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(v,m.sibling),m=l(m,y),m.return=v,v=m):(n(v,m),m=no(y,v.mode,T),m.return=v,v=m),a(v)):n(v,m)}return fe}var ir=Cd(!0),Nd=Cd(!1),Zl=pn(null),ei=null,Yn=null,Sa=null;function ja(){Sa=Yn=ei=null}function Ca(e){var t=Zl.current;xe(Zl),e._currentValue=t}function Ao(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function er(e,t){ei=e,Sa=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if(Sa!==e)if(e={context:e,memoizedValue:t,next:null},Yn===null){if(ei===null)throw Error(F(308));Yn=e,ei.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return t}var Sn=null;function Na(e){Sn===null?Sn=[e]:Sn.push(e)}function Ed(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Na(t)):(n.next=l.next,l.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kt=!1;function Ea(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ln(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Mt(e,n)}return l=r.interleaved,l===null?(t.next=t,Na(r)):(t.next=l.next,l.next=t),r.interleaved=t,Mt(e,n)}function Pl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pa(e,n)}}function Ds(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ti(e,t,n,r){var l=e.updateQueue;Kt=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var p=u,x=p.next;p.next=null,a===null?i=x:a.next=x,a=p;var g=e.alternate;g!==null&&(g=g.updateQueue,u=g.lastBaseUpdate,u!==a&&(u===null?g.firstBaseUpdate=x:u.next=x,g.lastBaseUpdate=p))}if(i!==null){var j=l.baseState;a=0,g=x=p=null,u=i;do{var S=u.lane,O=u.eventTime;if((r&S)===S){g!==null&&(g=g.next={eventTime:O,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var M=e,B=u;switch(S=t,O=n,B.tag){case 1:if(M=B.payload,typeof M=="function"){j=M.call(O,j,S);break e}j=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=B.payload,S=typeof M=="function"?M.call(O,j,S):M,S==null)break e;j=je({},j,S);break e;case 2:Kt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,S=l.effects,S===null?l.effects=[u]:S.push(u))}else O={eventTime:O,lane:S,tag:u.tag,payload:u.payload,callback:u.callback,next:null},g===null?(x=g=O,p=j):g=g.next=O,a|=S;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;S=u,u=S.next,S.next=null,l.lastBaseUpdate=S,l.shared.pending=null}}while(!0);if(g===null&&(p=j),l.baseState=p,l.firstBaseUpdate=x,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Tn|=a,e.lanes=a,e.memoizedState=j}}function Bs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(F(191,l));l.call(r)}}}var ll={},zt=pn(ll),Gr=pn(ll),Kr=pn(ll);function jn(e){if(e===ll)throw Error(F(174));return e}function za(e,t){switch(ge(Kr,t),ge(Gr,e),ge(zt,ll),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xo(t,e)}xe(zt),ge(zt,t)}function or(){xe(zt),xe(Gr),xe(Kr)}function Id(e){jn(Kr.current);var t=jn(zt.current),n=xo(t,e.type);t!==n&&(ge(Gr,e),ge(zt,n))}function Ia(e){Gr.current===e&&(xe(zt),xe(Gr))}var ke=pn(0);function ni(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qi=[];function Ta(){for(var e=0;e<qi.length;e++)qi[e]._workInProgressVersionPrimary=null;qi.length=0}var _l=Bt.ReactCurrentDispatcher,Ji=Bt.ReactCurrentBatchConfig,In=0,Se=null,Te=null,_e=null,ri=!1,_r=!1,qr=0,S0=0;function Me(){throw Error(F(321))}function Pa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function _a(e,t,n,r,l,i){if(In=i,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_l.current=e===null||e.memoizedState===null?E0:z0,e=n(r,l),_r){i=0;do{if(_r=!1,qr=0,25<=i)throw Error(F(301));i+=1,_e=Te=null,t.updateQueue=null,_l.current=I0,e=n(r,l)}while(_r)}if(_l.current=li,t=Te!==null&&Te.next!==null,In=0,_e=Te=Se=null,ri=!1,t)throw Error(F(300));return e}function La(){var e=qr!==0;return qr=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?Se.memoizedState=_e=e:_e=_e.next=e,_e}function ft(){if(Te===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=_e===null?Se.memoizedState:_e.next;if(t!==null)_e=t,Te=e;else{if(e===null)throw Error(F(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},_e===null?Se.memoizedState=_e=e:_e=_e.next=e}return _e}function Jr(e,t){return typeof t=="function"?t(e):t}function Xi(e){var t=ft(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=Te,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=a=null,p=null,x=i;do{var g=x.lane;if((In&g)===g)p!==null&&(p=p.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),r=x.hasEagerState?x.eagerState:e(r,x.action);else{var j={lane:g,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};p===null?(u=p=j,a=r):p=p.next=j,Se.lanes|=g,Tn|=g}x=x.next}while(x!==null&&x!==i);p===null?a=r:p.next=u,St(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=p,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,Se.lanes|=i,Tn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zi(e){var t=ft(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);St(i,t.memoizedState)||(Ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Td(){}function Pd(e,t){var n=Se,r=ft(),l=t(),i=!St(r.memoizedState,l);if(i&&(r.memoizedState=l,Ge=!0),r=r.queue,Ra(Rd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,Xr(9,Ld.bind(null,n,r,l,t),void 0,null),Le===null)throw Error(F(349));In&30||_d(n,t,l)}return l}function _d(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ld(e,t,n,r){t.value=n,t.getSnapshot=r,Fd(t)&&Od(e)}function Rd(e,t,n){return n(function(){Fd(t)&&Od(e)})}function Fd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function Od(e){var t=Mt(e,1);t!==null&&kt(t,e,1,-1)}function Us(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},t.queue=e,e=e.dispatch=N0.bind(null,Se,e),[t.memoizedState,e]}function Xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ad(){return ft().memoizedState}function Ll(e,t,n,r){var l=Ct();Se.flags|=e,l.memoizedState=Xr(1|t,n,void 0,r===void 0?null:r)}function xi(e,t,n,r){var l=ft();r=r===void 0?null:r;var i=void 0;if(Te!==null){var a=Te.memoizedState;if(i=a.destroy,r!==null&&Pa(r,a.deps)){l.memoizedState=Xr(t,n,i,r);return}}Se.flags|=e,l.memoizedState=Xr(1|t,n,i,r)}function Hs(e,t){return Ll(8390656,8,e,t)}function Ra(e,t){return xi(2048,8,e,t)}function Md(e,t){return xi(4,2,e,t)}function Dd(e,t){return xi(4,4,e,t)}function Bd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ud(e,t,n){return n=n!=null?n.concat([e]):null,xi(4,4,Bd.bind(null,t,e),n)}function Fa(){}function Hd(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wd(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $d(e,t,n){return In&21?(St(n,t)||(n=Ku(),Se.lanes|=n,Tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n)}function j0(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var r=Ji.transition;Ji.transition={};try{e(!1),t()}finally{pe=n,Ji.transition=r}}function Vd(){return ft().memoizedState}function C0(e,t,n){var r=an(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qd(e))Yd(t,n);else if(n=Ed(e,t,n,r),n!==null){var l=We();kt(n,e,r,l),Gd(n,t,r)}}function N0(e,t,n){var r=an(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qd(e))Yd(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,u=i(a,n);if(l.hasEagerState=!0,l.eagerState=u,St(u,a)){var p=t.interleaved;p===null?(l.next=l,Na(t)):(l.next=p.next,p.next=l),t.interleaved=l;return}}catch{}finally{}n=Ed(e,t,l,r),n!==null&&(l=We(),kt(n,e,r,l),Gd(n,t,r))}}function Qd(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Yd(e,t){_r=ri=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pa(e,n)}}var li={readContext:pt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},E0={readContext:pt,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:Hs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ll(4194308,4,Bd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ll(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ll(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=C0.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:Us,useDebugValue:Fa,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=Us(!1),t=e[0];return e=j0.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Se,l=Ct();if(we){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),Le===null)throw Error(F(349));In&30||_d(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Hs(Rd.bind(null,r,i,e),[e]),r.flags|=2048,Xr(9,Ld.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ct(),t=Le.identifierPrefix;if(we){var n=Rt,r=Lt;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=S0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},z0={readContext:pt,useCallback:Hd,useContext:pt,useEffect:Ra,useImperativeHandle:Ud,useInsertionEffect:Md,useLayoutEffect:Dd,useMemo:Wd,useReducer:Xi,useRef:Ad,useState:function(){return Xi(Jr)},useDebugValue:Fa,useDeferredValue:function(e){var t=ft();return $d(t,Te.memoizedState,e)},useTransition:function(){var e=Xi(Jr)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Td,useSyncExternalStore:Pd,useId:Vd,unstable_isNewReconciler:!1},I0={readContext:pt,useCallback:Hd,useContext:pt,useEffect:Ra,useImperativeHandle:Ud,useInsertionEffect:Md,useLayoutEffect:Dd,useMemo:Wd,useReducer:Zi,useRef:Ad,useState:function(){return Zi(Jr)},useDebugValue:Fa,useDeferredValue:function(e){var t=ft();return Te===null?t.memoizedState=e:$d(t,Te.memoizedState,e)},useTransition:function(){var e=Zi(Jr)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Td,useSyncExternalStore:Pd,useId:Vd,unstable_isNewReconciler:!1};function vt(e,t){if(e&&e.defaultProps){t=je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Mo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vi={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=We(),l=an(e),i=Ft(r,l);i.payload=t,n!=null&&(i.callback=n),t=ln(e,i,l),t!==null&&(kt(t,e,l,r),Pl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=We(),l=an(e),i=Ft(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ln(e,i,l),t!==null&&(kt(t,e,l,r),Pl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),r=an(e),l=Ft(n,r);l.tag=2,t!=null&&(l.callback=t),t=ln(e,l,r),t!==null&&(kt(t,e,r,n),Pl(t,e,r))}};function Ws(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(l,i):!0}function Kd(e,t,n){var r=!1,l=dn,i=t.contextType;return typeof i=="object"&&i!==null?i=pt(i):(l=qe(t)?En:Ue.current,r=t.contextTypes,i=(r=r!=null)?rr(e,l):dn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function $s(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vi.enqueueReplaceState(t,t.state,null)}function Do(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ea(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=pt(i):(i=qe(t)?En:Ue.current,l.context=rr(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Mo(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&vi.enqueueReplaceState(l,l.state,null),ti(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function ar(e,t){try{var n="",r=t;do n+=nf(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function eo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var T0=typeof WeakMap=="function"?WeakMap:Map;function qd(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oi||(oi=!0,qo=r),Bo(e,t)},n}function Jd(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Bo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Bo(e,t),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Vs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new T0;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=$0.bind(null,e,t,n),t.then(e,e))}function Qs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ys(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,ln(n,t,1))),n.lanes|=1),e)}var P0=Bt.ReactCurrentOwner,Ge=!1;function He(e,t,n,r){t.child=e===null?Nd(t,null,n,r):ir(t,e.child,n,r)}function Gs(e,t,n,r,l){n=n.render;var i=t.ref;return er(t,l),r=_a(e,t,n,r,i,l),n=La(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Dt(e,t,l)):(we&&n&&ba(t),t.flags|=1,He(e,t,r,l),t.child)}function Ks(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Wa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Xd(e,t,i,r,l)):(e=Al(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(a,r)&&e.ref===t.ref)return Dt(e,t,l)}return t.flags|=1,e=sn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Xd(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if($r(i,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,Dt(e,t,l)}return Uo(e,t,n,r,l)}function Zd(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Kn,et),et|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Kn,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ge(Kn,et),et|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ge(Kn,et),et|=r;return He(e,t,l,n),t.child}function ec(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Uo(e,t,n,r,l){var i=qe(n)?En:Ue.current;return i=rr(t,i),er(t,l),n=_a(e,t,n,r,i,l),r=La(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Dt(e,t,l)):(we&&r&&ba(t),t.flags|=1,He(e,t,n,l),t.child)}function qs(e,t,n,r,l){if(qe(n)){var i=!0;ql(t)}else i=!1;if(er(t,l),t.stateNode===null)Rl(e,t),Kd(t,n,r),Do(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,u=t.memoizedProps;a.props=u;var p=a.context,x=n.contextType;typeof x=="object"&&x!==null?x=pt(x):(x=qe(n)?En:Ue.current,x=rr(t,x));var g=n.getDerivedStateFromProps,j=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";j||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||p!==x)&&$s(t,a,r,x),Kt=!1;var S=t.memoizedState;a.state=S,ti(t,r,a,l),p=t.memoizedState,u!==r||S!==p||Ke.current||Kt?(typeof g=="function"&&(Mo(t,n,g,r),p=t.memoizedState),(u=Kt||Ws(t,n,u,r,S,p,x))?(j||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=x,r=u):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,zd(e,t),u=t.memoizedProps,x=t.type===t.elementType?u:vt(t.type,u),a.props=x,j=t.pendingProps,S=a.context,p=n.contextType,typeof p=="object"&&p!==null?p=pt(p):(p=qe(n)?En:Ue.current,p=rr(t,p));var O=n.getDerivedStateFromProps;(g=typeof O=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==j||S!==p)&&$s(t,a,r,p),Kt=!1,S=t.memoizedState,a.state=S,ti(t,r,a,l);var M=t.memoizedState;u!==j||S!==M||Ke.current||Kt?(typeof O=="function"&&(Mo(t,n,O,r),M=t.memoizedState),(x=Kt||Ws(t,n,x,r,S,M,p)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,M,p),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,M,p)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=M),a.props=r,a.state=M,a.context=p,r=x):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),r=!1)}return Ho(e,t,n,r,i,l)}function Ho(e,t,n,r,l,i){ec(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&Fs(t,n,!1),Dt(e,t,i);r=t.stateNode,P0.current=t;var u=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ir(t,e.child,null,i),t.child=ir(t,null,u,i)):He(e,t,u,i),t.memoizedState=r.state,l&&Fs(t,n,!0),t.child}function tc(e){var t=e.stateNode;t.pendingContext?Rs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rs(e,t.context,!1),za(e,t.containerInfo)}function Js(e,t,n,r,l){return lr(),ka(l),t.flags|=256,He(e,t,n,r),t.child}var Wo={dehydrated:null,treeContext:null,retryLane:0};function $o(e){return{baseLanes:e,cachePool:null,transitions:null}}function nc(e,t,n){var r=t.pendingProps,l=ke.current,i=!1,a=(t.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ge(ke,l&1),e===null)return Oo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=wi(a,r,0,null),e=Nn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=$o(n),t.memoizedState=Wo,e):Oa(t,a));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return _0(e,t,a,r,u,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,u=l.sibling;var p={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=p,t.deletions=null):(r=sn(l,p),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=sn(u,i):(i=Nn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?$o(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Wo,r}return i=e.child,e=i.sibling,r=sn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Oa(e,t){return t=wi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yl(e,t,n,r){return r!==null&&ka(r),ir(t,e.child,null,n),e=Oa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _0(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=eo(Error(F(422))),yl(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=wi({mode:"visible",children:r.children},l,0,null),i=Nn(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&ir(t,e.child,null,a),t.child.memoizedState=$o(a),t.memoizedState=Wo,i);if(!(t.mode&1))return yl(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(F(419)),r=eo(i,r,void 0),yl(e,t,a,r)}if(u=(a&e.childLanes)!==0,Ge||u){if(r=Le,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Mt(e,l),kt(r,e,l,-1))}return Ha(),r=eo(Error(F(421))),yl(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=V0.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,tt=rn(l.nextSibling),nt=t,we=!0,bt=null,e!==null&&(st[ut++]=Lt,st[ut++]=Rt,st[ut++]=zn,Lt=e.id,Rt=e.overflow,zn=t),t=Oa(t,r.children),t.flags|=4096,t)}function Xs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ao(e.return,t,n)}function to(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function rc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(He(e,t,r.children,n),r=ke.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xs(e,n,t);else if(e.tag===19)Xs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(ke,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ni(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),to(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ni(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}to(t,!0,n,null,i);break;case"together":to(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Rl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function L0(e,t,n){switch(t.tag){case 3:tc(t),lr();break;case 5:Id(t);break;case 1:qe(t.type)&&ql(t);break;case 4:za(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;ge(Zl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(ke,ke.current&1),t.flags|=128,null):n&t.child.childLanes?nc(e,t,n):(ge(ke,ke.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);ge(ke,ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return rc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ge(ke,ke.current),r)break;return null;case 22:case 23:return t.lanes=0,Zd(e,t,n)}return Dt(e,t,n)}var lc,Vo,ic,oc;lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vo=function(){};ic=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,jn(zt.current);var i=null;switch(n){case"input":l=fo(e,l),r=fo(e,r),i=[];break;case"select":l=je({},l,{value:void 0}),r=je({},r,{value:void 0}),i=[];break;case"textarea":l=ho(e,l),r=ho(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gl)}vo(n,r);var a;n=null;for(x in l)if(!r.hasOwnProperty(x)&&l.hasOwnProperty(x)&&l[x]!=null)if(x==="style"){var u=l[x];for(a in u)u.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(Ar.hasOwnProperty(x)?i||(i=[]):(i=i||[]).push(x,null));for(x in r){var p=r[x];if(u=l!=null?l[x]:void 0,r.hasOwnProperty(x)&&p!==u&&(p!=null||u!=null))if(x==="style")if(u){for(a in u)!u.hasOwnProperty(a)||p&&p.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in p)p.hasOwnProperty(a)&&u[a]!==p[a]&&(n||(n={}),n[a]=p[a])}else n||(i||(i=[]),i.push(x,n)),n=p;else x==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,u=u?u.__html:void 0,p!=null&&u!==p&&(i=i||[]).push(x,p)):x==="children"?typeof p!="string"&&typeof p!="number"||(i=i||[]).push(x,""+p):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(Ar.hasOwnProperty(x)?(p!=null&&x==="onScroll"&&he("scroll",e),i||u===p||(i=[])):(i=i||[]).push(x,p))}n&&(i=i||[]).push("style",n);var x=i;(t.updateQueue=x)&&(t.flags|=4)}};oc=function(e,t,n,r){n!==r&&(t.flags|=4)};function wr(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function R0(e,t,n){var r=t.pendingProps;switch(wa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return qe(t.type)&&Kl(),De(t),null;case 3:return r=t.stateNode,or(),xe(Ke),xe(Ue),Ta(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,bt!==null&&(Zo(bt),bt=null))),Vo(e,t),De(t),null;case 5:Ia(t);var l=jn(Kr.current);if(n=t.type,e!==null&&t.stateNode!=null)ic(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return De(t),null}if(e=jn(zt.current),xl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Nt]=t,r[Yr]=i,e=(t.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(l=0;l<Nr.length;l++)he(Nr[l],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":as(r,i),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},he("invalid",r);break;case"textarea":us(r,i),he("invalid",r)}vo(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var u=i[a];a==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&hl(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&hl(r.textContent,u,e),l=["children",""+u]):Ar.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&he("scroll",r)}switch(n){case"input":sl(r),ss(r,i,!0);break;case"textarea":sl(r),ds(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Gl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ru(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Nt]=t,e[Yr]=r,lc(e,t,!1,!1),t.stateNode=e;e:{switch(a=yo(n,r),n){case"dialog":he("cancel",e),he("close",e),l=r;break;case"iframe":case"object":case"embed":he("load",e),l=r;break;case"video":case"audio":for(l=0;l<Nr.length;l++)he(Nr[l],e);l=r;break;case"source":he("error",e),l=r;break;case"img":case"image":case"link":he("error",e),he("load",e),l=r;break;case"details":he("toggle",e),l=r;break;case"input":as(e,r),l=fo(e,r),he("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=je({},r,{value:void 0}),he("invalid",e);break;case"textarea":us(e,r),l=ho(e,r),he("invalid",e);break;default:l=r}vo(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var p=u[i];i==="style"?Au(e,p):i==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&Fu(e,p)):i==="children"?typeof p=="string"?(n!=="textarea"||p!=="")&&Mr(e,p):typeof p=="number"&&Mr(e,""+p):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ar.hasOwnProperty(i)?p!=null&&i==="onScroll"&&he("scroll",e):p!=null&&oa(e,i,p,a))}switch(n){case"input":sl(e),ss(e,r,!1);break;case"textarea":sl(e),ds(e);break;case"option":r.value!=null&&e.setAttribute("value",""+un(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return De(t),null;case 6:if(e&&t.stateNode!=null)oc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=jn(Kr.current),jn(zt.current),xl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Nt]=t,(i=r.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:hl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hl(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nt]=t,t.stateNode=r}return De(t),null;case 13:if(xe(ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&tt!==null&&t.mode&1&&!(t.flags&128))jd(),lr(),t.flags|=98560,i=!1;else if(i=xl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(F(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[Nt]=t}else lr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;De(t),i=!1}else bt!==null&&(Zo(bt),bt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ke.current&1?Pe===0&&(Pe=3):Ha())),t.updateQueue!==null&&(t.flags|=4),De(t),null);case 4:return or(),Vo(e,t),e===null&&Vr(t.stateNode.containerInfo),De(t),null;case 10:return Ca(t.type._context),De(t),null;case 17:return qe(t.type)&&Kl(),De(t),null;case 19:if(xe(ke),i=t.memoizedState,i===null)return De(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)wr(i,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ni(e),a!==null){for(t.flags|=128,wr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(ke,ke.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ee()>sr&&(t.flags|=128,r=!0,wr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ni(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!we)return De(t),null}else 2*Ee()-i.renderingStartTime>sr&&n!==1073741824&&(t.flags|=128,r=!0,wr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ee(),t.sibling=null,n=ke.current,ge(ke,r?n&1|2:n&1),t):(De(t),null);case 22:case 23:return Ua(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function F0(e,t){switch(wa(t),t.tag){case 1:return qe(t.type)&&Kl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return or(),xe(Ke),xe(Ue),Ta(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ia(t),null;case 13:if(xe(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(ke),null;case 4:return or(),null;case 10:return Ca(t.type._context),null;case 22:case 23:return Ua(),null;case 24:return null;default:return null}}var bl=!1,Be=!1,O0=typeof WeakSet=="function"?WeakSet:Set,V=null;function Gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(e,t,r)}else n.current=null}function Qo(e,t,n){try{n()}catch(r){Ne(e,t,r)}}var Zs=!1;function A0(e,t){if(Io=Vl,e=cd(),ya(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,u=-1,p=-1,x=0,g=0,j=e,S=null;t:for(;;){for(var O;j!==n||l!==0&&j.nodeType!==3||(u=a+l),j!==i||r!==0&&j.nodeType!==3||(p=a+r),j.nodeType===3&&(a+=j.nodeValue.length),(O=j.firstChild)!==null;)S=j,j=O;for(;;){if(j===e)break t;if(S===n&&++x===l&&(u=a),S===i&&++g===r&&(p=a),(O=j.nextSibling)!==null)break;j=S,S=j.parentNode}j=O}n=u===-1||p===-1?null:{start:u,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(To={focusedElem:e,selectionRange:n},Vl=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var M=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var B=M.memoizedProps,fe=M.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?B:vt(t.type,B),fe);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(T){Ne(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return M=Zs,Zs=!1,M}function Lr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Qo(t,n,i)}l=l.next}while(l!==r)}}function yi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ac(e){var t=e.alternate;t!==null&&(e.alternate=null,ac(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[Yr],delete t[Lo],delete t[y0],delete t[b0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sc(e){return e.tag===5||e.tag===3||e.tag===4}function eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Go(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gl));else if(r!==4&&(e=e.child,e!==null))for(Go(e,t,n),e=e.sibling;e!==null;)Go(e,t,n),e=e.sibling}function Ko(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ko(e,t,n),e=e.sibling;e!==null;)Ko(e,t,n),e=e.sibling}var Fe=null,yt=!1;function Vt(e,t,n){for(n=n.child;n!==null;)uc(e,t,n),n=n.sibling}function uc(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(ci,n)}catch{}switch(n.tag){case 5:Be||Gn(n,t);case 6:var r=Fe,l=yt;Fe=null,Vt(e,t,n),Fe=r,yt=l,Fe!==null&&(yt?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(yt?(e=Fe,n=n.stateNode,e.nodeType===8?Gi(e.parentNode,n):e.nodeType===1&&Gi(e,n),Hr(e)):Gi(Fe,n.stateNode));break;case 4:r=Fe,l=yt,Fe=n.stateNode.containerInfo,yt=!0,Vt(e,t,n),Fe=r,yt=l;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Qo(n,t,a),l=l.next}while(l!==r)}Vt(e,t,n);break;case 1:if(!Be&&(Gn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Ne(n,t,u)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,Vt(e,t,n),Be=r):Vt(e,t,n);break;default:Vt(e,t,n)}}function tu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new O0),t.forEach(function(r){var l=Q0.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,u=a;e:for(;u!==null;){switch(u.tag){case 5:Fe=u.stateNode,yt=!1;break e;case 3:Fe=u.stateNode.containerInfo,yt=!0;break e;case 4:Fe=u.stateNode.containerInfo,yt=!0;break e}u=u.return}if(Fe===null)throw Error(F(160));uc(i,a,l),Fe=null,yt=!1;var p=l.alternate;p!==null&&(p.return=null),l.return=null}catch(x){Ne(l,t,x)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dc(t,e),t=t.sibling}function dc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),jt(e),r&4){try{Lr(3,e,e.return),yi(3,e)}catch(B){Ne(e,e.return,B)}try{Lr(5,e,e.return)}catch(B){Ne(e,e.return,B)}}break;case 1:xt(t,e),jt(e),r&512&&n!==null&&Gn(n,n.return);break;case 5:if(xt(t,e),jt(e),r&512&&n!==null&&Gn(n,n.return),e.flags&32){var l=e.stateNode;try{Mr(l,"")}catch(B){Ne(e,e.return,B)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,u=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&_u(l,i),yo(u,a);var x=yo(u,i);for(a=0;a<p.length;a+=2){var g=p[a],j=p[a+1];g==="style"?Au(l,j):g==="dangerouslySetInnerHTML"?Fu(l,j):g==="children"?Mr(l,j):oa(l,g,j,x)}switch(u){case"input":go(l,i);break;case"textarea":Lu(l,i);break;case"select":var S=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var O=i.value;O!=null?qn(l,!!i.multiple,O,!1):S!==!!i.multiple&&(i.defaultValue!=null?qn(l,!!i.multiple,i.defaultValue,!0):qn(l,!!i.multiple,i.multiple?[]:"",!1))}l[Yr]=i}catch(B){Ne(e,e.return,B)}}break;case 6:if(xt(t,e),jt(e),r&4){if(e.stateNode===null)throw Error(F(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(B){Ne(e,e.return,B)}}break;case 3:if(xt(t,e),jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hr(t.containerInfo)}catch(B){Ne(e,e.return,B)}break;case 4:xt(t,e),jt(e);break;case 13:xt(t,e),jt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Da=Ee())),r&4&&tu(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(x=Be)||g,xt(t,e),Be=x):xt(t,e),jt(e),r&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!g&&e.mode&1)for(V=e,g=e.child;g!==null;){for(j=V=g;V!==null;){switch(S=V,O=S.child,S.tag){case 0:case 11:case 14:case 15:Lr(4,S,S.return);break;case 1:Gn(S,S.return);var M=S.stateNode;if(typeof M.componentWillUnmount=="function"){r=S,n=S.return;try{t=r,M.props=t.memoizedProps,M.state=t.memoizedState,M.componentWillUnmount()}catch(B){Ne(r,n,B)}}break;case 5:Gn(S,S.return);break;case 22:if(S.memoizedState!==null){ru(j);continue}}O!==null?(O.return=S,V=O):ru(j)}g=g.sibling}e:for(g=null,j=e;;){if(j.tag===5){if(g===null){g=j;try{l=j.stateNode,x?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=j.stateNode,p=j.memoizedProps.style,a=p!=null&&p.hasOwnProperty("display")?p.display:null,u.style.display=Ou("display",a))}catch(B){Ne(e,e.return,B)}}}else if(j.tag===6){if(g===null)try{j.stateNode.nodeValue=x?"":j.memoizedProps}catch(B){Ne(e,e.return,B)}}else if((j.tag!==22&&j.tag!==23||j.memoizedState===null||j===e)&&j.child!==null){j.child.return=j,j=j.child;continue}if(j===e)break e;for(;j.sibling===null;){if(j.return===null||j.return===e)break e;g===j&&(g=null),j=j.return}g===j&&(g=null),j.sibling.return=j.return,j=j.sibling}}break;case 19:xt(t,e),jt(e),r&4&&tu(e);break;case 21:break;default:xt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(sc(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Mr(l,""),r.flags&=-33);var i=eu(e);Ko(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,u=eu(e);Go(e,u,a);break;default:throw Error(F(161))}}catch(p){Ne(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function M0(e,t,n){V=e,cc(e)}function cc(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var l=V,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||bl;if(!a){var u=l.alternate,p=u!==null&&u.memoizedState!==null||Be;u=bl;var x=Be;if(bl=a,(Be=p)&&!x)for(V=l;V!==null;)a=V,p=a.child,a.tag===22&&a.memoizedState!==null?lu(l):p!==null?(p.return=a,V=p):lu(l);for(;i!==null;)V=i,cc(i),i=i.sibling;V=l,bl=u,Be=x}nu(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,V=i):nu(e)}}function nu(e){for(;V!==null;){var t=V;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||yi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:vt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Bs(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bs(t,a,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&n.focus();break;case"img":p.src&&(n.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var x=t.alternate;if(x!==null){var g=x.memoizedState;if(g!==null){var j=g.dehydrated;j!==null&&Hr(j)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Be||t.flags&512&&Yo(t)}catch(S){Ne(t,t.return,S)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function ru(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function lu(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yi(4,t)}catch(p){Ne(t,n,p)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(p){Ne(t,l,p)}}var i=t.return;try{Yo(t)}catch(p){Ne(t,i,p)}break;case 5:var a=t.return;try{Yo(t)}catch(p){Ne(t,a,p)}}}catch(p){Ne(t,t.return,p)}if(t===e){V=null;break}var u=t.sibling;if(u!==null){u.return=t.return,V=u;break}V=t.return}}var D0=Math.ceil,ii=Bt.ReactCurrentDispatcher,Aa=Bt.ReactCurrentOwner,ct=Bt.ReactCurrentBatchConfig,ue=0,Le=null,Ie=null,Oe=0,et=0,Kn=pn(0),Pe=0,Zr=null,Tn=0,bi=0,Ma=0,Rr=null,Ye=null,Da=0,sr=1/0,Pt=null,oi=!1,qo=null,on=null,wl=!1,Zt=null,ai=0,Fr=0,Jo=null,Fl=-1,Ol=0;function We(){return ue&6?Ee():Fl!==-1?Fl:Fl=Ee()}function an(e){return e.mode&1?ue&2&&Oe!==0?Oe&-Oe:k0.transition!==null?(Ol===0&&(Ol=Ku()),Ol):(e=pe,e!==0||(e=window.event,e=e===void 0?16:nd(e.type)),e):1}function kt(e,t,n,r){if(50<Fr)throw Fr=0,Jo=null,Error(F(185));tl(e,n,r),(!(ue&2)||e!==Le)&&(e===Le&&(!(ue&2)&&(bi|=n),Pe===4&&Jt(e,Oe)),Je(e,r),n===1&&ue===0&&!(t.mode&1)&&(sr=Ee()+500,hi&&fn()))}function Je(e,t){var n=e.callbackNode;kf(e,t);var r=$l(e,e===Le?Oe:0);if(r===0)n!==null&&fs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fs(n),t===1)e.tag===0?w0(iu.bind(null,e)):wd(iu.bind(null,e)),x0(function(){!(ue&6)&&fn()}),n=null;else{switch(qu(r)){case 1:n=ca;break;case 4:n=Yu;break;case 16:n=Wl;break;case 536870912:n=Gu;break;default:n=Wl}n=yc(n,pc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pc(e,t){if(Fl=-1,Ol=0,ue&6)throw Error(F(327));var n=e.callbackNode;if(tr()&&e.callbackNode!==n)return null;var r=$l(e,e===Le?Oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=si(e,r);else{t=r;var l=ue;ue|=2;var i=gc();(Le!==e||Oe!==t)&&(Pt=null,sr=Ee()+500,Cn(e,t));do try{H0();break}catch(u){fc(e,u)}while(!0);ja(),ii.current=i,ue=l,Ie!==null?t=0:(Le=null,Oe=0,t=Pe)}if(t!==0){if(t===2&&(l=jo(e),l!==0&&(r=l,t=Xo(e,l))),t===1)throw n=Zr,Cn(e,0),Jt(e,r),Je(e,Ee()),n;if(t===6)Jt(e,r);else{if(l=e.current.alternate,!(r&30)&&!B0(l)&&(t=si(e,r),t===2&&(i=jo(e),i!==0&&(r=i,t=Xo(e,i))),t===1))throw n=Zr,Cn(e,0),Jt(e,r),Je(e,Ee()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:wn(e,Ye,Pt);break;case 3:if(Jt(e,r),(r&130023424)===r&&(t=Da+500-Ee(),10<t)){if($l(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=_o(wn.bind(null,e,Ye,Pt),t);break}wn(e,Ye,Pt);break;case 4:if(Jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-wt(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*D0(r/1960))-r,10<r){e.timeoutHandle=_o(wn.bind(null,e,Ye,Pt),r);break}wn(e,Ye,Pt);break;case 5:wn(e,Ye,Pt);break;default:throw Error(F(329))}}}return Je(e,Ee()),e.callbackNode===n?pc.bind(null,e):null}function Xo(e,t){var n=Rr;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=si(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&Zo(t)),e}function Zo(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function B0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!St(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~Ma,t&=~bi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wt(t),r=1<<n;e[n]=-1,t&=~r}}function iu(e){if(ue&6)throw Error(F(327));tr();var t=$l(e,0);if(!(t&1))return Je(e,Ee()),null;var n=si(e,t);if(e.tag!==0&&n===2){var r=jo(e);r!==0&&(t=r,n=Xo(e,r))}if(n===1)throw n=Zr,Cn(e,0),Jt(e,t),Je(e,Ee()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,Ye,Pt),Je(e,Ee()),null}function Ba(e,t){var n=ue;ue|=1;try{return e(t)}finally{ue=n,ue===0&&(sr=Ee()+500,hi&&fn())}}function Pn(e){Zt!==null&&Zt.tag===0&&!(ue&6)&&tr();var t=ue;ue|=1;var n=ct.transition,r=pe;try{if(ct.transition=null,pe=1,e)return e()}finally{pe=r,ct.transition=n,ue=t,!(ue&6)&&fn()}}function Ua(){et=Kn.current,xe(Kn)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,h0(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(wa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kl();break;case 3:or(),xe(Ke),xe(Ue),Ta();break;case 5:Ia(r);break;case 4:or();break;case 13:xe(ke);break;case 19:xe(ke);break;case 10:Ca(r.type._context);break;case 22:case 23:Ua()}n=n.return}if(Le=e,Ie=e=sn(e.current,null),Oe=et=t,Pe=0,Zr=null,Ma=bi=Tn=0,Ye=Rr=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}Sn=null}return e}function fc(e,t){do{var n=Ie;try{if(ja(),_l.current=li,ri){for(var r=Se.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ri=!1}if(In=0,_e=Te=Se=null,_r=!1,qr=0,Aa.current=null,n===null||n.return===null){Pe=1,Zr=t,Ie=null;break}e:{var i=e,a=n.return,u=n,p=t;if(t=Oe,u.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var x=p,g=u,j=g.tag;if(!(g.mode&1)&&(j===0||j===11||j===15)){var S=g.alternate;S?(g.updateQueue=S.updateQueue,g.memoizedState=S.memoizedState,g.lanes=S.lanes):(g.updateQueue=null,g.memoizedState=null)}var O=Qs(a);if(O!==null){O.flags&=-257,Ys(O,a,u,i,t),O.mode&1&&Vs(i,x,t),t=O,p=x;var M=t.updateQueue;if(M===null){var B=new Set;B.add(p),t.updateQueue=B}else M.add(p);break e}else{if(!(t&1)){Vs(i,x,t),Ha();break e}p=Error(F(426))}}else if(we&&u.mode&1){var fe=Qs(a);if(fe!==null){!(fe.flags&65536)&&(fe.flags|=256),Ys(fe,a,u,i,t),ka(ar(p,u));break e}}i=p=ar(p,u),Pe!==4&&(Pe=2),Rr===null?Rr=[i]:Rr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=qd(i,p,t);Ds(i,v);break e;case 1:u=p;var m=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(on===null||!on.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var T=Jd(i,u,t);Ds(i,T);break e}}i=i.return}while(i!==null)}hc(n)}catch(H){t=H,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(!0)}function gc(){var e=ii.current;return ii.current=li,e===null?li:e}function Ha(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Le===null||!(Tn&268435455)&&!(bi&268435455)||Jt(Le,Oe)}function si(e,t){var n=ue;ue|=2;var r=gc();(Le!==e||Oe!==t)&&(Pt=null,Cn(e,t));do try{U0();break}catch(l){fc(e,l)}while(!0);if(ja(),ue=n,ii.current=r,Ie!==null)throw Error(F(261));return Le=null,Oe=0,Pe}function U0(){for(;Ie!==null;)mc(Ie)}function H0(){for(;Ie!==null&&!ff();)mc(Ie)}function mc(e){var t=vc(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?hc(e):Ie=t,Aa.current=null}function hc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=F0(n,t),n!==null){n.flags&=32767,Ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Ie=null;return}}else if(n=R0(n,t,et),n!==null){Ie=n;return}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Pe===0&&(Pe=5)}function wn(e,t,n){var r=pe,l=ct.transition;try{ct.transition=null,pe=1,W0(e,t,n,r)}finally{ct.transition=l,pe=r}return null}function W0(e,t,n,r){do tr();while(Zt!==null);if(ue&6)throw Error(F(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Sf(e,i),e===Le&&(Ie=Le=null,Oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wl||(wl=!0,yc(Wl,function(){return tr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ct.transition,ct.transition=null;var a=pe;pe=1;var u=ue;ue|=4,Aa.current=null,A0(e,n),dc(n,e),u0(To),Vl=!!Io,To=Io=null,e.current=n,M0(n),gf(),ue=u,pe=a,ct.transition=i}else e.current=n;if(wl&&(wl=!1,Zt=e,ai=l),i=e.pendingLanes,i===0&&(on=null),xf(n.stateNode),Je(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(oi)throw oi=!1,e=qo,qo=null,e;return ai&1&&e.tag!==0&&tr(),i=e.pendingLanes,i&1?e===Jo?Fr++:(Fr=0,Jo=e):Fr=0,fn(),null}function tr(){if(Zt!==null){var e=qu(ai),t=ct.transition,n=pe;try{if(ct.transition=null,pe=16>e?16:e,Zt===null)var r=!1;else{if(e=Zt,Zt=null,ai=0,ue&6)throw Error(F(331));var l=ue;for(ue|=4,V=e.current;V!==null;){var i=V,a=i.child;if(V.flags&16){var u=i.deletions;if(u!==null){for(var p=0;p<u.length;p++){var x=u[p];for(V=x;V!==null;){var g=V;switch(g.tag){case 0:case 11:case 15:Lr(8,g,i)}var j=g.child;if(j!==null)j.return=g,V=j;else for(;V!==null;){g=V;var S=g.sibling,O=g.return;if(ac(g),g===x){V=null;break}if(S!==null){S.return=O,V=S;break}V=O}}}var M=i.alternate;if(M!==null){var B=M.child;if(B!==null){M.child=null;do{var fe=B.sibling;B.sibling=null,B=fe}while(B!==null)}}V=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,V=a;else e:for(;V!==null;){if(i=V,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Lr(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,V=v;break e}V=i.return}}var m=e.current;for(V=m;V!==null;){a=V;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,V=y;else e:for(a=m;V!==null;){if(u=V,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:yi(9,u)}}catch(H){Ne(u,u.return,H)}if(u===a){V=null;break e}var T=u.sibling;if(T!==null){T.return=u.return,V=T;break e}V=u.return}}if(ue=l,fn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(ci,e)}catch{}r=!0}return r}finally{pe=n,ct.transition=t}}return!1}function ou(e,t,n){t=ar(n,t),t=qd(e,t,1),e=ln(e,t,1),t=We(),e!==null&&(tl(e,1,t),Je(e,t))}function Ne(e,t,n){if(e.tag===3)ou(e,e,n);else for(;t!==null;){if(t.tag===3){ou(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){e=ar(n,e),e=Jd(t,e,1),t=ln(t,e,1),e=We(),t!==null&&(tl(t,1,e),Je(t,e));break}}t=t.return}}function $0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Oe&n)===n&&(Pe===4||Pe===3&&(Oe&130023424)===Oe&&500>Ee()-Da?Cn(e,0):Ma|=n),Je(e,t)}function xc(e,t){t===0&&(e.mode&1?(t=cl,cl<<=1,!(cl&130023424)&&(cl=4194304)):t=1);var n=We();e=Mt(e,t),e!==null&&(tl(e,t,n),Je(e,n))}function V0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xc(e,n)}function Q0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),xc(e,n)}var vc;vc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ge=!1,L0(e,t,n);Ge=!!(e.flags&131072)}else Ge=!1,we&&t.flags&1048576&&kd(t,Xl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Rl(e,t),e=t.pendingProps;var l=rr(t,Ue.current);er(t,n),l=_a(null,t,r,e,l,n);var i=La();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(i=!0,ql(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ea(t),l.updater=vi,t.stateNode=l,l._reactInternals=t,Do(t,r,e,n),t=Ho(null,t,r,!0,i,n)):(t.tag=0,we&&i&&ba(t),He(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Rl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=G0(r),e=vt(r,e),l){case 0:t=Uo(null,t,r,e,n);break e;case 1:t=qs(null,t,r,e,n);break e;case 11:t=Gs(null,t,r,e,n);break e;case 14:t=Ks(null,t,r,vt(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:vt(r,l),Uo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:vt(r,l),qs(e,t,r,l,n);case 3:e:{if(tc(t),e===null)throw Error(F(387));r=t.pendingProps,i=t.memoizedState,l=i.element,zd(e,t),ti(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=ar(Error(F(423)),t),t=Js(e,t,r,n,l);break e}else if(r!==l){l=ar(Error(F(424)),t),t=Js(e,t,r,n,l);break e}else for(tt=rn(t.stateNode.containerInfo.firstChild),nt=t,we=!0,bt=null,n=Nd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lr(),r===l){t=Dt(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return Id(t),e===null&&Oo(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,Po(r,l)?a=null:i!==null&&Po(r,i)&&(t.flags|=32),ec(e,t),He(e,t,a,n),t.child;case 6:return e===null&&Oo(t),null;case 13:return nc(e,t,n);case 4:return za(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ir(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:vt(r,l),Gs(e,t,r,l,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,ge(Zl,r._currentValue),r._currentValue=a,i!==null)if(St(i.value,a)){if(i.children===l.children&&!Ke.current){t=Dt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){a=i.child;for(var p=u.firstContext;p!==null;){if(p.context===r){if(i.tag===1){p=Ft(-1,n&-n),p.tag=2;var x=i.updateQueue;if(x!==null){x=x.shared;var g=x.pending;g===null?p.next=p:(p.next=g.next,g.next=p),x.pending=p}}i.lanes|=n,p=i.alternate,p!==null&&(p.lanes|=n),Ao(i.return,n,t),u.lanes|=n;break}p=p.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(F(341));a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Ao(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}He(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,er(t,n),l=pt(l),r=r(l),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,l=vt(r,t.pendingProps),l=vt(r.type,l),Ks(e,t,r,l,n);case 15:return Xd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:vt(r,l),Rl(e,t),t.tag=1,qe(r)?(e=!0,ql(t)):e=!1,er(t,n),Kd(t,r,l),Do(t,r,l,n),Ho(null,t,r,!0,e,n);case 19:return rc(e,t,n);case 22:return Zd(e,t,n)}throw Error(F(156,t.tag))};function yc(e,t){return Qu(e,t)}function Y0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,r){return new Y0(e,t,n,r)}function Wa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function G0(e){if(typeof e=="function")return Wa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sa)return 11;if(e===ua)return 14}return 2}function sn(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Al(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")Wa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Dn:return Nn(n.children,l,i,t);case aa:a=8,l|=8;break;case so:return e=dt(12,n,t,l|2),e.elementType=so,e.lanes=i,e;case uo:return e=dt(13,n,t,l),e.elementType=uo,e.lanes=i,e;case co:return e=dt(19,n,t,l),e.elementType=co,e.lanes=i,e;case Iu:return wi(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Eu:a=10;break e;case zu:a=9;break e;case sa:a=11;break e;case ua:a=14;break e;case Gt:a=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=dt(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Nn(e,t,n,r){return e=dt(7,e,r,t),e.lanes=n,e}function wi(e,t,n,r){return e=dt(22,e,r,t),e.elementType=Iu,e.lanes=n,e.stateNode={isHidden:!1},e}function no(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function ro(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function K0(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ai(0),this.expirationTimes=Ai(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ai(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function $a(e,t,n,r,l,i,a,u,p){return e=new K0(e,t,n,u,p),t===1?(t=1,i===!0&&(t|=8)):t=0,i=dt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ea(i),e}function q0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bc(e){if(!e)return dn;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(qe(n))return bd(e,n,t)}return t}function wc(e,t,n,r,l,i,a,u,p){return e=$a(n,r,!0,e,l,i,a,u,p),e.context=bc(null),n=e.current,r=We(),l=an(n),i=Ft(r,l),i.callback=t??null,ln(n,i,l),e.current.lanes=l,tl(e,l,r),Je(e,r),e}function ki(e,t,n,r){var l=t.current,i=We(),a=an(l);return n=bc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ln(l,t,a),e!==null&&(kt(e,l,a,i),Pl(e,l,a)),a}function ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function au(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Va(e,t){au(e,t),(e=e.alternate)&&au(e,t)}function J0(){return null}var kc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qa(e){this._internalRoot=e}Si.prototype.render=Qa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));ki(e,t,null,null)};Si.prototype.unmount=Qa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pn(function(){ki(null,e,null,null)}),t[At]=null}};function Si(e){this._internalRoot=e}Si.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qt.length&&t!==0&&t<qt[n].priority;n++);qt.splice(n,0,e),n===0&&td(e)}};function Ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function su(){}function X0(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var x=ui(a);i.call(x)}}var a=wc(t,r,e,0,null,!1,!1,"",su);return e._reactRootContainer=a,e[At]=a.current,Vr(e.nodeType===8?e.parentNode:e),Pn(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var x=ui(p);u.call(x)}}var p=$a(e,0,!1,null,null,!1,!1,"",su);return e._reactRootContainer=p,e[At]=p.current,Vr(e.nodeType===8?e.parentNode:e),Pn(function(){ki(t,p,n,r)}),p}function Ci(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var u=l;l=function(){var p=ui(a);u.call(p)}}ki(t,a,e,l)}else a=X0(n,t,e,l,r);return ui(a)}Ju=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cr(t.pendingLanes);n!==0&&(pa(t,n|1),Je(t,Ee()),!(ue&6)&&(sr=Ee()+500,fn()))}break;case 13:Pn(function(){var r=Mt(e,1);if(r!==null){var l=We();kt(r,e,1,l)}}),Va(e,1)}};fa=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=We();kt(t,e,134217728,n)}Va(e,134217728)}};Xu=function(e){if(e.tag===13){var t=an(e),n=Mt(e,t);if(n!==null){var r=We();kt(n,e,t,r)}Va(e,t)}};Zu=function(){return pe};ed=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}};wo=function(e,t,n){switch(t){case"input":if(go(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=mi(r);if(!l)throw Error(F(90));Pu(r),go(r,l)}}}break;case"textarea":Lu(e,n);break;case"select":t=n.value,t!=null&&qn(e,!!n.multiple,t,!1)}};Bu=Ba;Uu=Pn;var Z0={usingClientEntryPoint:!1,Events:[rl,Wn,mi,Mu,Du,Ba]},kr={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eg={bundleType:kr.bundleType,version:kr.version,rendererPackageName:kr.rendererPackageName,rendererConfig:kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$u(e),e===null?null:e.stateNode},findFiberByHostInstance:kr.findFiberByHostInstance||J0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{ci=kl.inject(eg),Et=kl}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z0;lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ya(t))throw Error(F(200));return q0(e,t,null,n)};lt.createRoot=function(e,t){if(!Ya(e))throw Error(F(299));var n=!1,r="",l=kc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=$a(e,1,!1,null,null,n,!1,r,l),e[At]=t.current,Vr(e.nodeType===8?e.parentNode:e),new Qa(t)};lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=$u(t),e=e===null?null:e.stateNode,e};lt.flushSync=function(e){return Pn(e)};lt.hydrate=function(e,t,n){if(!ji(t))throw Error(F(200));return Ci(null,e,t,!0,n)};lt.hydrateRoot=function(e,t,n){if(!Ya(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=kc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=wc(t,null,e,1,n??null,l,!1,i,a),e[At]=t.current,Vr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Si(t)};lt.render=function(e,t,n){if(!ji(t))throw Error(F(200));return Ci(null,e,t,!1,n)};lt.unmountComponentAtNode=function(e){if(!ji(e))throw Error(F(40));return e._reactRootContainer?(Pn(function(){Ci(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1};lt.unstable_batchedUpdates=Ba;lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ji(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return Ci(e,t,n,!1,r)};lt.version="18.3.1-next-f1338f8080-20240426";function Sc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sc)}catch(e){console.error(e)}}Sc(),Su.exports=lt;var tg=Su.exports,uu=tg;oo.createRoot=uu.createRoot,oo.hydrateRoot=uu.hydrateRoot;const ng=`
:root{
  --bg:#05030d;
  --panel:rgba(22,13,46,0.92);
  --panel-solid:#160d2e;
  --panel2:rgba(34,19,66,0.85);
  --panel2-solid:#221342;
  --line:rgba(94,58,168,0.35);
  --line-strong:rgba(148,94,255,0.55);
  --ink:#f7f4ff;
  --muted:#a596d8;
  --muted-dim:#6f5fa3;
  --pink:#ff2d95;
  --cyan:#22d3ee;
  --violet:#a855f7;
  --gold:#ffd166;
  --green:#4ade80;
  --red:#ff4d6d;
  --blue:#3b82f6;
  --display:"Sora","Segoe UI",system-ui,sans-serif;
  --body:"Inter",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
  --number-font:"Protest Strike",sans-serif;
  --r-sm:10px; --r-md:16px; --r-lg:22px; --r-xl:28px;
  --shadow-panel:0 12px 32px rgba(0,0,0,0.5);
}
*{box-sizing:border-box}

::-webkit-scrollbar { width: 11px; height: 11px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, var(--violet), var(--pink));
  border-radius: 12px; border: 3px solid var(--bg);
}
::-webkit-scrollbar-thumb:hover { background: linear-gradient(180deg, var(--pink), var(--cyan)); }

html{background:var(--bg)}
body{
  margin:0;font-family:var(--body);color:var(--ink);
  min-height:100vh;line-height:1.5;overflow-x:hidden;
  background:
    radial-gradient(1000px 500px at 50% -10%, rgba(255,45,149,.14), transparent 60%),
    radial-gradient(800px 450px at 90% 30%, rgba(168,85,247,.12), transparent 65%),
    var(--bg);
  /* background-attachment: fixed; <-- entfernt! */
}

#app { transition: opacity 0.25s ease-out; }
#app.enter { animation: yearEnterAnim 0.35s ease-out forwards; }
@keyframes yearEnterAnim {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes fadeUp { from{opacity:0; transform:translateY(6px);} to{opacity:1; transform:translateY(0);} }
@keyframes popIn { from{opacity:0; transform:scale(0.92);} to{opacity:1; transform:scale(1);} }
@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 0 0 rgba(255,45,149,0.7); }
  50% { box-shadow: 0 0 0 8px rgba(255,45,149,0); }
}
@keyframes flashUpdate {
  0% { background-color: rgba(255,209,102,0.6); box-shadow: 0 0 20px rgba(255,209,102,0.9); transform: scale(1.06); }
  100% { background-color: transparent; box-shadow: none; transform: scale(1); }
}
@keyframes goldShine {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes liveBoxFlash {
  0% { border-color: var(--gold); box-shadow: 0 0 0 0 rgba(255,209,102,0.8), inset 0 0 20px rgba(255,209,102,0.4); transform: scale(1); }
  30% { border-color: #fff6cc; box-shadow: 0 0 32px 10px rgba(255,209,102,1), inset 0 0 30px rgba(255,209,102,0.6); transform: scale(1.06); }
  60% { border-color: var(--gold); box-shadow: 0 0 20px 4px rgba(255,209,102,0.6), inset 0 0 15px rgba(255,209,102,0.3); transform: scale(1.02); }
  100% { border-color: rgba(255,255,255,0.15); box-shadow: 0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1); transform: scale(1); }
}
.live-box-flash { animation: liveBoxFlash 1.4s ease-out; }
.flash-update { animation: flashUpdate 1.4s ease-out; }
@keyframes goldGlowPulse {
  0%, 100% { box-shadow:0 0 12px rgba(255,209,102,0.55), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -2px 4px rgba(180,120,0,0.25); }
  50%      { box-shadow:0 0 18px rgba(255,220,120,0.75), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -2px 4px rgba(180,120,0,0.3); }
}
.tile[data-flash-key] {
  box-shadow: 0 2px 8px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -2px 6px rgba(0,0,0,0.15);
  background-image: linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 55%, rgba(0,0,0,0.12) 100%);
  background-blend-mode: overlay;
}
.tile[data-flash-key]:hover { box-shadow: 0 4px 14px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.45); }

.wrap{max-width:1600px;margin:0 auto;padding:0 20px 100px}

header{
  display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;
  padding:18px 0;border-bottom:1px solid var(--line);position:relative;
}
.brand{
  font-family:var(--display);font-weight:800;font-size:1.1rem;letter-spacing:-0.01em;
  background:linear-gradient(135deg, #fff 0%, var(--gold) 60%, var(--pink) 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.who{display:flex;align-items:center;gap:10px;color:var(--muted);font-size:.9rem;flex-wrap:wrap;}

select, input, textarea{
  font:inherit;color:var(--ink);
  background:var(--panel2-solid);
  border:1px solid var(--line);
  border-radius:12px;padding:10px 14px;max-width:100%;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
select:hover, input:hover, textarea:hover { border-color: var(--line-strong); }
select:focus, input:focus, textarea:focus {
  outline:none;border-color:var(--pink);
  box-shadow:0 0 0 3px rgba(255,45,149,0.15);
}
button:focus-visible{outline:2px solid var(--gold);outline-offset:3px}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
input[type=number] { -moz-appearance: textfield; }

input[type="checkbox"] {
  appearance: none; -webkit-appearance: none; width: 22px; height: 22px;
  background: var(--panel2-solid);border: 1.5px solid var(--line-strong);
  border-radius: 7px; cursor: pointer;display: inline-grid; place-content: center;
  transition: all 0.15s ease; vertical-align: middle; margin: 0; flex-shrink:0;
}
input[type="checkbox"]:checked {
  background: linear-gradient(135deg, var(--pink), var(--violet));
  border-color: var(--pink);
}
input[type="checkbox"]::before {
  content: ""; width: 11px; height: 6px;
  border-left: 2.5px solid #fff; border-bottom: 2.5px solid #fff;
  transform: rotate(-45deg) scale(0);transition: transform 0.15s ease-in-out; margin-top: -3px;
}
input[type="checkbox"]:checked::before { transform: rotate(-45deg) scale(1); }

button{
  font:inherit;cursor:pointer;border-radius:999px;
  border:1px solid var(--line);
  background:var(--panel2-solid);color:var(--ink);
  padding:9px 20px;font-weight:600;
  transition: transform .15s ease-out, box-shadow .15s ease-out, background-color .15s ease-out, border-color .15s ease-out, opacity .15s ease-out;
}
button:hover:not(:disabled){
  border-color:var(--line-strong);
  box-shadow:0 4px 12px rgba(255,45,149,.15);
}
button:active:not(:disabled){transform:scale(.96)}
button.primary{
  background:linear-gradient(135deg, #ff2d95 0%, #a855f7 100%);
  border-color:transparent;color:#fff;font-weight:700;
}
button.primary:hover:not(:disabled){filter:brightness(1.1)}
button.ghost{background:transparent}
button.danger{color:#ffb3c1;border-color:rgba(255,77,109,0.35)}
button.danger:hover:not(:disabled){border-color:var(--red);background:rgba(255,77,109,0.1)}
button.sm { padding: 5px 13px; font-size: 0.82rem; }
button:disabled{opacity:.35;cursor:not-allowed;transform:none!important;box-shadow:none!important}

.hero{
  font-family:var(--display);font-weight:800;
  font-size:clamp(2.4rem,7vw,5rem);line-height:1.08;
  margin:52px 0 28px;letter-spacing:-0.03em;text-align:center;
  background:linear-gradient(135deg, #ff2d95 0%, #ffd166 35%, #a855f7 65%, #22d3ee 100%);
  background-size:200% 200%;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}

h2{font-family:var(--display);font-size:1.5rem;margin:0;letter-spacing:-0.015em;font-weight:800}
h3{font-family:var(--display);margin:0 0 12px;font-weight:700;letter-spacing:-0.01em}
.hint{color:var(--muted);margin:0 0 14px;font-size:.9rem;line-height:1.55}
.yeartitle{
  font-family:var(--display);font-weight:800;
  font-size:clamp(1.9rem,4.8vw,3.2rem);
  margin:14px 0;letter-spacing:-0.025em;text-align:center;
  background:linear-gradient(135deg, #fff 0%, var(--gold) 60%, var(--pink) 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}

/* === Host-Pill (Jahr / Stadt / Flagge) === */
.host-pill {
  display: inline-flex;
  align-items: center;
  gap: 0;
  margin: 6px auto 24px;
  padding: 8px 16px 8px 10px;
  background: linear-gradient(135deg, rgba(255,209,102,0.1) 0%, rgba(22,13,46,0.85) 60%, rgba(34,19,66,0.85) 100%);
  border: 1px solid rgba(255,209,102,0.35);
  border-radius: 999px;
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.08),
    0 4px 18px rgba(0,0,0,0.35),
    0 0 24px rgba(255,209,102,0.08);
  backdrop-filter: blur(6px);
  position: relative;
}
.host-pill-flag {
  width: 36px; height: 36px;
  display: grid; place-items: center;
  background: rgba(0,0,0,0.3);
  border-radius: 50%;
  border: 1px solid rgba(255,209,102,0.4);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), 0 0 12px rgba(255,209,102,0.15);
  overflow: hidden;
  flex-shrink: 0;
  font-size: 1.1rem;
}
.host-pill-flag img.flag {
  width: 28px !important; height: 19px !important;
  border-radius: 3px !important;
  box-shadow: 0 1px 3px rgba(0,0,0,0.5) !important;
}
.host-pill-divider {
  width: 1px;
  height: 22px;
  background: linear-gradient(to bottom, transparent, rgba(255,209,102,0.4), transparent);
  margin: 0 12px;
}
.host-pill-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.15;
  gap: 1px;
}
.host-pill-cc {
  font-family: var(--display);
  font-size: 0.66rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: var(--gold);
  text-transform: uppercase;
  opacity: 0.9;
}
.host-pill-city {
  font-family: var(--display);
  font-size: 1.02rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: var(--ink);
  text-shadow: 0 1px 3px rgba(0,0,0,0.6);
}

.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:16px;margin-top:22px}
.card{
  background:var(--panel);border:1px solid var(--line);
  border-radius:var(--r-lg);padding:18px;
  box-shadow:var(--shadow-panel);
}

.yearcard{
  cursor:pointer;display:flex;flex-direction:column;gap:6px;
  padding:26px;min-height:140px;justify-content:center;
  transition:transform 0.2s ease-out, box-shadow 0.2s ease-out, border-color 0.2s ease-out;
  background: linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%) !important;
  border: 1px solid rgba(168,85,247,0.15) !important;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.05), 0 8px 24px rgba(0,0,0,0.4) !important;
}
.yearcard:hover {
  border-color: rgba(255,45,149,0.4) !important;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), 0 12px 32px rgba(0,0,0,0.6), 0 0 20px rgba(255,45,149,0.15) !important;
  transform:translateY(-4px);
}
.yearcard b{
  font-family:var(--display);font-size:2.3rem;font-weight:800;
  background:linear-gradient(135deg, #fff 0%, var(--gold) 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  letter-spacing:-0.02em;
}
.yearcard span{color:var(--muted);font-size:.95rem;font-weight:500}

/* === Upcoming-Jahr: sanftes Gold-Glow === */
.yearcard.yearcard-upcoming {
  border: 1.5px solid rgba(255, 209, 102, 0.65) !important;
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.08),
    0 10px 32px rgba(0,0,0,0.55),
    0 0 28px rgba(255, 209, 102, 0.28) !important;
  background: linear-gradient(145deg, rgba(45,28,80,0.98) 0%, rgba(20,10,40,1) 100%) !important;
  position: relative;
}
.yearcard.yearcard-upcoming:hover {
  border-color: rgba(255, 209, 102, 0.95) !important;
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.12),
    0 14px 38px rgba(0,0,0,0.65),
    0 0 40px rgba(255, 209, 102, 0.45) !important;
}

.yearcard-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  font-family: var(--display);
  font-size: 0.66rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: #1d1d1d;
  background: linear-gradient(135deg, #ffd166 0%, #ffae00 100%);
  padding: 3px 9px;
  border-radius: 999px;
  border: 1px solid #fff6cc;
  box-shadow: 0 2px 8px rgba(255,209,102,0.5), inset 0 1px 0 rgba(255,255,255,0.5);
  text-transform: uppercase;
}

/* === Live-Jahr: roter Rahmen-Glow === */
.yearcard.yearcard-live {
  border: 2px solid var(--red) !important;
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.1),
    0 0 24px rgba(255,77,109,0.55),
    0 0 48px rgba(255,77,109,0.25) !important;
  background: linear-gradient(145deg, rgba(80,15,30,0.6) 0%, rgba(30,8,16,0.95) 100%) !important;
  position: relative;
}
.yearcard.yearcard-live:hover {
  border-color: #ff6b85 !important;
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.15),
    0 0 36px rgba(255,77,109,0.85),
    0 0 72px rgba(255,77,109,0.4) !important;
}

.yearcard-live-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  display: inline-flex;
  align-items: center;
  font-family: var(--display);
  font-size: 0.66rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  color: #fff;
  background: linear-gradient(135deg, #ff4d6d 0%, #d90000 100%);
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid #ffb3c1;
  box-shadow: 0 0 14px rgba(255,77,109,0.9), inset 0 1px 0 rgba(255,255,255,0.3);
  text-transform: uppercase;
}

/* Wenn BEIDES (upcoming UND live) → live gewinnt */
.yearcard.yearcard-live.yearcard-upcoming {
  border-color: var(--red) !important;
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.1),
    0 0 32px rgba(255,77,109,0.7),
    0 0 56px rgba(255,209,102,0.25) !important;
}
.yearcard.yearcard-live.yearcard-upcoming .yearcard-badge {
  display: none;
}

.fab{
  position:fixed;bottom:32px;right:32px;width:66px;height:66px;border-radius:50%;
  background:linear-gradient(135deg, var(--pink) 0%, var(--violet) 100%);
  color:#fff;font-size:2.3rem;display:grid;place-items:center;border:none;
  box-shadow:0 8px 24px rgba(255,45,149,0.5);z-index:100;cursor:pointer;padding:0;margin:0;font-weight:300;
  transition:transform 0.2s ease-out, box-shadow 0.2s ease-out;
}
.fab:hover{transform:scale(1.08) rotate(90deg);box-shadow:0 12px 32px rgba(255,45,149,0.7)}

/* ============ HOME PAGE REWORK ============ */

.home-hero {
  text-align: center;
  padding: 64px 0 36px;
  position: relative;
}
.home-hero-title {
  font-family: var(--display);
  font-weight: 800;
  font-size: clamp(2.4rem, 6.5vw, 4.6rem);
  line-height: 1.05;
  margin: 0;
  letter-spacing: -0.035em;
  background: linear-gradient(135deg, #fff 0%, #ffd166 40%, #ff2d95 80%, #a855f7 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.home-hero-sub {
  font-family: var(--display);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted-dim);
  margin: 14px 0 0;
}

.home-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto 48px;
  max-width: 760px;
}
.home-action-btn {
  flex: 1;
  min-width: 220px;
  max-width: 360px;
  padding: 16px 20px;
  border-radius: 18px;
  background: linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%);
  border: 1px solid rgba(148,94,255,0.25);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  gap: 14px;
  text-align: left;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}
.home-action-btn:hover {
  transform: translateY(-2px);
  border-color: rgba(168,85,247,0.5);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), 0 12px 32px rgba(0,0,0,0.55), 0 0 22px rgba(168,85,247,0.18);
}
.home-action-primary {
  background: linear-gradient(145deg, rgba(80,20,90,0.7) 0%, rgba(35,10,60,0.95) 100%);
  border-color: rgba(255,45,149,0.4);
}
.home-action-primary:hover {
  border-color: rgba(255,45,149,0.75);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.12), 0 12px 32px rgba(0,0,0,0.55), 0 0 28px rgba(255,45,149,0.3);
}
.home-action-icon {
  font-size: 1.9rem;
  line-height: 1;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 6px rgba(0,0,0,0.5));
}
.home-action-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.home-action-text b {
  font-family: var(--display);
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--ink);
  letter-spacing: -0.01em;
}
.home-action-text small {
  font-size: 0.76rem;
  color: var(--muted);
  font-weight: 500;
}

.home-section-label {
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 1400px;
  margin: 0 auto 16px;
  padding: 0 4px;
  font-family: var(--display);
  font-weight: 800;
  font-size: 0.74rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
}
.home-section-count {
  font-size: 0.66rem;
  background: var(--panel2-solid);
  color: var(--gold);
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid rgba(255,209,102,0.25);
  letter-spacing: 0.05em;
}

/* ===== UPCOMING HERO (großer Block oben) ===== */
.upcoming-hero {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  max-width: 1400px;
  margin: 0 auto 24px;
  border-radius: 22px;
  border: 1px solid rgba(255,209,102,0.6);
  background-color: #1a0f33; /* Fallback */
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.12),
    inset 0 -2px 10px rgba(0,0,0,0.4),
    0 14px 40px rgba(0,0,0,0.55),
    0 0 32px rgba(255,209,102,0.18);
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}
.upcoming-hero:hover {
  transform: translateY(-3px);
  border-color: #ffd166;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.16),
    inset 0 -2px 10px rgba(0,0,0,0.4),
    0 18px 44px rgba(0,0,0,0.65),
    0 0 48px rgba(255,209,102,0.4);
}

/* Text-Bereich: KEIN eigener Hintergrund, nur Schatten für Lesbarkeit */
.upcoming-hero-inner {
  position: relative;
  z-index: 1;
  padding: 22px 28px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.7);
}

/* === FLAGGE FÜR UPCOMING-HERO === */
.upcoming-hero-flag-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-size: contain !important;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 0.85;
  filter: saturate(1.15) contrast(1.05);
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.3s ease;
  mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 12%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.35) 88%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 12%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.35) 88%, transparent 100%);
}
.upcoming-hero:hover .upcoming-hero-flag-bg {
  opacity: 1;
}
.upcoming-hero-top {
  display: flex;
  align-items: center;
  gap: 8px;
}
.upcoming-hero-badge {
  font-family: var(--display);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 999px;
  background: linear-gradient(135deg, #ffd166 0%, #ffae00 100%);
  color: #1d1d1d;
  border: 1px solid #fff6cc;
  box-shadow: 0 2px 10px rgba(255,209,102,0.6), inset 0 1px 0 rgba(255,255,255,0.6);
}

.upcoming-hero-body {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}
.upcoming-hero-left {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}
.upcoming-hero-year {
  font-family: var(--display);
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  background: linear-gradient(135deg, #ffffff 0%, #ffd166 45%, #ffae00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.upcoming-hero-host {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--ink);
  margin-top: 6px;
  text-shadow: 0 2px 6px rgba(0,0,0,0.5);
}
.upcoming-hero-bigflag {
  width: 52px !important;
  height: 36px !important;
  object-fit: cover;
  border-radius: 5px !important;
  box-shadow: 0 4px 14px rgba(0,0,0,0.55), 0 0 0 2px rgba(255,255,255,0.25) !important;
}

.upcoming-hero-dates {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-left: auto;
}
.upcoming-date-chip {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 8px 14px;
  border-radius: 12px;
  background: rgba(0,0,0,0.35);
  border: 1px solid rgba(255,209,102,0.3);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
  min-width: 74px;
}
.upcoming-date-label {
  font-family: var(--display);
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--gold);
  opacity: 0.9;
}
.upcoming-date-value {
  font-family: var(--display);
  font-size: 0.92rem;
  font-weight: 800;
  color: #fff3d1;
  letter-spacing: 0.01em;
}
.upcoming-date-empty {
  font-family: var(--display);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--muted);
  font-style: italic;
  padding: 8px 14px;
  border-radius: 10px;
  background: rgba(0,0,0,0.25);
  border: 1px dashed rgba(255,209,102,0.25);
}

.upcoming-hero-stats {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 8px;
}

/* ===== ALL-CONTESTS GRID ===== */
.home-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  max-width: 1400px;
  margin: 0 auto;
}

/* === Karte — CLEAN & ELEGANT (volle Flagge im BG) === */
.home-card {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 14px;
  padding: 16px 16px 14px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #2a1749 0%, #1a0f33 55%, #120a24 100%);
  border: 1px solid rgba(148,94,255,0.22);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.06),
    0 8px 24px rgba(0,0,0,0.45);
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
  min-height: 140px;
}

.home-card:hover {
  transform: translateY(-3px);
  border-color: rgba(168,85,247,0.55);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.1),
    0 14px 32px rgba(0,0,0,0.6),
    0 0 22px rgba(168,85,247,0.15);
}

/* Flaggen-BG: volle Fläche, edler Fade, überall sichtbar */
.home-card-flag {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.28;
  filter: saturate(1.15) contrast(1.05);
  mask-image: linear-gradient(160deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 90%);
  -webkit-mask-image: linear-gradient(160deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 90%);
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.3s ease, transform 0.4s ease;
}
.home-card:hover .home-card-flag {
  opacity: 0.45;
  transform: scale(1.04);
}

/* Body */
.home-card-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  flex: 1;
  position: relative;
  z-index: 1;
}

.home-card-year {
  font-family: var(--display);
  font-size: 1.65rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  color: #f7f4ff;
  background: linear-gradient(135deg, #ffffff 0%, #ffe9b8 50%, #ffd166 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
}

.home-card-host {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  font-weight: 500;
  color: #cbbcf0;
  letter-spacing: 0.01em;
  margin-top: 2px;
  text-shadow: 0 1px 3px rgba(0,0,0,0.6);
}
.home-card-host img.flag { display: none; }

/* Top-Badge (Live) */
.home-card-top {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
}

.home-badge {
  font-family: var(--display);
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 3px 9px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  pointer-events: auto;
}
.home-badge-live {
  background: linear-gradient(135deg, #ff4d6d 0%, #d90000 100%);
  color: #fff;
  border: 1px solid #ffb3c1;
  box-shadow: 0 0 12px rgba(255,77,109,0.9), inset 0 1px 0 rgba(255,255,255,0.3);
}
.home-badge-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: #fff; box-shadow: 0 0 6px #fff;
}

/* Footer: Stats */
.home-card-footer {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 14px;
  position: relative;
  z-index: 1;
}
.home-card-stat {
  display: flex;
  align-items: baseline;
  gap: 4px;
  padding: 4px 8px;
  background: rgba(0,0,0,0.45);
  border: 1px solid rgba(34,211,238,0.25);
  border-radius: 6px;
  line-height: 1;
  backdrop-filter: blur(4px);
}
.home-card-stat-val {
  font-family: var(--number-font);
  font-size: 1.05rem;
  color: var(--cyan);
  letter-spacing: 0.02em;
  line-height: 1;
}
.home-card-stat-lbl {
  font-family: var(--display);
  font-size: 0.52rem;
  font-weight: 800;
  color: var(--muted-dim);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.home-card-stat-divider { display: none; }

/* === UPCOMING — edler Gold-Glow === */
.home-card.is-upcoming {
  border: 1px solid rgba(255,209,102,0.55);
  background:
    linear-gradient(165deg, rgba(58,38,95,0.95) 0%, rgba(30,18,55,1) 55%, rgba(15,8,30,1) 100%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.1),
    inset 0 -2px 8px rgba(0,0,0,0.4),
    0 12px 34px rgba(0,0,0,0.55),
    0 0 28px rgba(255,209,102,0.18);
}
.home-card.is-upcoming::after {
  background: linear-gradient(90deg, transparent, rgba(255,209,102,0.4), transparent);
}
.home-card.is-upcoming:hover {
  border-color: #ffd166;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.15),
    inset 0 -2px 8px rgba(0,0,0,0.4),
    0 16px 42px rgba(0,0,0,0.65),
    0 0 44px rgba(255,209,102,0.4);
  transform: translateY(-4px);
}
.home-card.is-upcoming .home-card-year {
  background: linear-gradient(135deg, #ffffff 0%, #ffd166 45%, #ffae00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.home-card.is-upcoming .home-card-flag {
  opacity: 0.16;
}
.home-card.is-upcoming:hover .home-card-flag {
  opacity: 0.24;
}

/* === LIVE — roter Rahmen-Glow (clean) === */
.home-card.is-live {
  border-color: var(--red);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.08),
    0 0 24px rgba(255,77,109,0.45),
    0 0 48px rgba(255,77,109,0.2),
    0 8px 24px rgba(0,0,0,0.5);
}
.home-card.is-live:hover {
  border-color: #ff6b85;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.12),
    0 0 36px rgba(255,77,109,0.75),
    0 0 72px rgba(255,77,109,0.3),
    0 14px 32px rgba(0,0,0,0.6);
}

/* Live + Upcoming → Live dominiert */
.home-card.is-live.is-upcoming {
  border-color: var(--red);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.1),
    inset 0 -2px 8px rgba(0,0,0,0.4),
    0 0 36px rgba(255,77,109,0.6),
    0 0 60px rgba(255,209,102,0.2);
}
.home-card.is-live.is-upcoming .home-badge-upcoming { display: none; }

@media (max-width: 700px) {
  .home-hero { padding: 40px 0 24px; }
  .home-grid { grid-template-columns: 1fr; }
  .home-action-btn { max-width: none; }
}

.tabs{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 8px;}
.tabs button{
  background:transparent;
  border:1px solid rgba(94,58,168,0.3);
  font-weight:600;font-size:0.92rem;padding:8px 18px;
}
.tabs[style*="background:var(--panel2-solid)"] {
  background: linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%) !important;
  border: 1px solid rgba(94,58,168,0.4) !important;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3) !important;
}
.tabs button:hover:not(.on){ background:rgba(255,255,255,0.04); }
.tabs button.on{
  background:linear-gradient(135deg, #fff 0%, #f0e8ff 100%);
  color:var(--bg);border-color:transparent;font-weight:800;
}
.edle-slider {
  background: linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%) !important;
  border: 1px solid rgba(94,58,168,0.4) !important;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3) !important;
}
.tabs button.live-active {
  border: 2px solid var(--red) !important;
  background: linear-gradient(135deg, rgba(255,77,109,0.2) 0%, rgba(255,45,149,0.1) 100%) !important;
  color: #fff !important;
  box-shadow: 0 0 16px rgba(255,77,109,0.8), inset 0 0 10px rgba(255,77,109,0.4) !important;
  /* Animationen entfernt für Performance */
  position: relative;
  overflow: hidden;
}
/* ::after (der shine-Effekt) und die keyframes werden nicht mehr gebraucht */
.tabs button.final-tab{border-color:rgba(255,209,102,0.4);color:var(--gold);font-weight:700}
.tabs button.final-tab.on{
  background:linear-gradient(135deg, var(--gold) 0%, #ffae00 100%);
  color:var(--bg);border-color:transparent;
}

.list{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:12px}
@media(max-width:1300px){.list{grid-template-columns:1fr}}

.row{
  position:relative;overflow:hidden;
  display:grid;grid-template-columns:38px 1fr auto;gap:14px;
  /* NEU: Hellerer Verlauf (oben Lila, unten tiefes Schwarz-Blau) */
  background: linear-gradient(180deg, #26154a 0%, #130a27 50%, #0a0514 100%);
  /* NEU: Feine violette Kante, die sich abhebt */
  border: 1px solid rgba(148, 94, 255, 0.35);
  border-radius:var(--r-md);padding:12px 14px;align-items:center;
  animation: fadeUp 0.25s ease-out backwards;
  transition: border-color 0.2s ease-out, box-shadow 0.2s ease-out, transform 0.2s ease-out;
  /* Stärkerer Glanz oben, tieferer Schatten unten */
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.12), 
    inset 0 -2px 4px rgba(0,0,0,0.6),
    0 6px 16px rgba(0,0,0,0.5);
}
.row:hover{
  border-color: rgba(168, 85, 247, 0.7);
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.15), 
    inset 0 -2px 4px rgba(0,0,0,0.6),
    0 10px 30px rgba(0,0,0,0.6),
    0 0 24px rgba(168, 85, 247, 0.15); /* Glow beim Hovern */
  transform: translateY(-2px);
}
.row::before {
  content: "";position: absolute;left: 0;top: 0;bottom: 0;width: 240px;
  background-image: var(--flag-url);
  background-size: cover;background-position: center;
  opacity: 0.85;
  mask-image: linear-gradient(to right, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 100%);
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 100%);
  pointer-events: none;z-index: 0;
}
.row > * { position: relative; z-index: 1; }
.cc-code{
  position: absolute;top: 50%;left: 66px;transform: translateY(-50%);
  font-family: var(--display);font-size: 0.6rem;font-weight: 800;
  background: rgba(5,3,15,0.85);color: var(--ink);
  padding: 3px 6px;border-radius: 5px;
  border: 1px solid rgba(255,255,255,0.18);
  letter-spacing: 0.1em;z-index: 2;
}
@media(max-width:700px){ .row{grid-template-columns:1fr;gap:10px} .pl{justify-self:start!important} }

.no{
  font-family:var(--display);font-weight:700;font-size:0.78rem;
  color:var(--muted);background: rgba(5,3,15,0.55);
  border-radius:9px;width:38px;height:38px;
  display:flex;align-items:center;justify-content:center;
  cursor:pointer;border:1px solid rgba(255,255,255,0.08);flex-shrink:0;
  opacity:0.7;
  transition: color 0.15s, border-color 0.15s, background-color 0.15s, opacity 0.15s;
}
.no:hover{border-color:var(--gold);color:var(--gold);background:rgba(5,3,15,0.9);opacity:1}

.row-content{
  display:flex;flex-direction:column;gap:6px;min-width:0;
  align-items:flex-end;text-align:right;
  min-height: 48px;justify-content: center;
}
.meta{
  display:flex;align-items:center;justify-content:flex-end;gap:8px;
  text-shadow: 0 1px 3px rgba(0,0,0,0.95);
  font-family: var(--display);
  min-width: 0;max-width: 100%;flex-wrap: nowrap;padding-left: 90px;
}
.meta > span:first-child {
  font-size: clamp(0.68rem, calc(1.35vw - 0.15rem), 1.02rem);
  font-weight: 700;letter-spacing: -0.01em;line-height: 1.2;
  min-width: 0;flex-shrink: 1;
  white-space: normal;overflow: hidden;
  display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;
}
.meta b{ font-size: 1em;font-weight: 800;letter-spacing: -0.01em; }
.flag{
  width:22px;height:15px;object-fit:cover;border-radius:3px;
  box-shadow:0 0 0 1px rgba(255,255,255,.22);
  vertical-align:middle;display:inline-block;flex-shrink:0;
}
.stats{ display:flex;align-items:center;gap:8px;flex-wrap:wrap; }
.tiles{display:flex;gap:4px}

.tile{
  width:46px;height:50px;border-radius:12px;
  display:flex;align-items:center;justify-content:center;
  border:2.5px solid #4b5563;
  padding:0;line-height:1;font-family:inherit;
  overflow:hidden;cursor:pointer;
  transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
  flex-shrink: 0;position:relative;
}
.tile:not(.empty):not(.readonly):hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,0.35)}
.tile:not(.empty):not(.readonly):active{transform:scale(0.95)}
.tile.readonly{cursor:default;pointer-events:none}
.tile-header-letter {
  width: 46px;height: 30px;
  display: flex;align-items: center;justify-content: center;
  font-family: var(--display);font-weight: 800;font-size: 0.92rem;
  color: var(--ink);
  background: linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%);
  border: 1.5px solid rgba(148,94,255,0.45);
  border-radius: 8px;letter-spacing: 0.06em;
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.08),
    inset 0 -2px 4px rgba(0,0,0,0.35),
    0 2px 6px rgba(0,0,0,0.35);
  position: relative;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
  cursor: default;
}
.tile-header-letter::before {
  content: "";
  position: absolute; left: 8px; right: 8px; bottom: -1px; height: 2px;
  background: linear-gradient(90deg, transparent, var(--violet), transparent);
  border-radius: 2px; opacity: 0.7;
}
.tile-header-letter:hover {
  transform: translateY(-1px);
  border-color: var(--gold);
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.12),
    inset 0 -2px 4px rgba(0,0,0,0.35),
    0 4px 12px rgba(255,209,102,0.25);
}
.tile-header-letter.tile-header-me {
  color: var(--gold);
  border-color: var(--gold);
  background: linear-gradient(145deg, rgba(255,209,102,0.18) 0%, rgba(30,18,60,0.95) 100%);
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.15),
    0 0 12px rgba(255,209,102,0.35),
    0 2px 6px rgba(0,0,0,0.35);
}
.tile-header-letter.tile-header-me::before {
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  opacity: 1;
}
.tile-value {
  font-family: var(--number-font);font-size: 1.5rem;font-weight: 400;
  letter-spacing: 0.02em;line-height: 1;margin: 0;
}
.tile.nq-tip-tile .tile-value {
  font-family: var(--display);font-size: 0.95rem;font-weight: 800;letter-spacing: 0.04em;
}
.tile.empty{background:var(--panel2-solid);color:var(--muted)}
.tile.aq-tile{
  background: linear-gradient(180deg, #1e40af 0%, #1e3a8a 50%, #0f1c4a 100%) !important;
  color: #dbeafe !important;
  border: 1.5px solid rgba(96, 165, 250, 0.7) !important;
  cursor: default;
  pointer-events: none;
  box-shadow: 
    inset 0 1px 0 rgba(147, 197, 253, 0.35),
    inset 0 -2px 4px rgba(0, 0, 0, 0.5),
    0 3px 10px rgba(0, 0, 0, 0.4),
    0 0 14px rgba(59, 130, 246, 0.35);
  text-shadow: 0 0 8px rgba(147, 197, 253, 0.6);
}
.tile.aq-tile .tile-value {
  font-family: var(--display);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.06em;
}
.tile.me{
  border-color: var(--gold);
  box-shadow: 
    0 0 14px rgba(255,209,102,0.55),
    0 3px 10px rgba(0,0,0,0.4),
    inset 0 1px 0 rgba(255,255,255,0.45),
    inset 0 -2px 5px rgba(0,0,0,0.2);
}
.tile.tip-hidden { opacity: 0; pointer-events: none; transform: scale(0.92); transition: opacity 0.15s ease, transform 0.15s ease; }
.row:hover .tile.tip-hidden { opacity: 1; pointer-events: auto; transform: scale(1); }
.tile.tip-permanently-hidden { opacity: 0; pointer-events: none; transform: scale(0.92); }

.avg{display:flex;flex-direction:column;align-items:center;gap:0;min-width:46px}
.avg b{font-family:var(--display);font-size:1.1rem;font-weight:800;color:var(--cyan)}
.avg small{font-size:0.55rem;color:var(--muted-dim);letter-spacing:.1em;font-weight:700;font-family:var(--display)}

.pl{ display:flex;flex-direction:column;align-items:center;gap:3px;justify-self:end; }
.pl input{
  width: 56px;height: 50px;text-align: center;
  font-family: var(--number-font);font-size: 1.5rem;font-weight: 400;
  color: var(--gold);
  /* Edler Verlauf: dunkles Gold-Braun oben → fast schwarz unten */
  background: linear-gradient(180deg, #2b1e0a 0%, #1a1106 50%, #0a0702 100%);
  /* Dünnere, edlere Gold-Border */
  border: 1.5px solid rgba(255, 209, 102, 0.55);
  border-radius: 12px;padding: 0;
  transition: box-shadow 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
  letter-spacing: 0.02em;
  /* Glas-Look: Highlight oben + Schatten unten */
  box-shadow: 
    inset 0 1px 0 rgba(255, 230, 150, 0.15),
    inset 0 -2px 4px rgba(0, 0, 0, 0.7),
    0 3px 10px rgba(0, 0, 0, 0.5),
    0 0 14px rgba(255, 209, 102, 0.08);
  text-shadow: 0 0 10px rgba(255, 209, 102, 0.35);
}

.pl input:hover:not(:disabled):not(:focus) {
  border-color: rgba(255, 209, 102, 0.85);
  box-shadow: 
    inset 0 1px 0 rgba(255, 230, 150, 0.2),
    inset 0 -2px 4px rgba(0, 0, 0, 0.7),
    0 4px 12px rgba(0, 0, 0, 0.5),
    0 0 18px rgba(255, 209, 102, 0.18);
}

.pl input:focus {
  outline: none;
  border-color: #fff6cc;
  box-shadow: 
    inset 0 1px 0 rgba(255, 230, 150, 0.25),
    inset 0 -2px 4px rgba(0, 0, 0, 0.7),
    0 0 20px rgba(255, 209, 102, 0.55),
    0 0 40px rgba(255, 209, 102, 0.25);
  transform: scale(1.03);
}

.pl input.dup {
  border-color: var(--red);
  color: #ffb3c1;
  box-shadow: 
    inset 0 1px 0 rgba(255, 200, 200, 0.15),
    inset 0 -2px 4px rgba(0, 0, 0, 0.7),
    0 0 16px rgba(255, 77, 109, 0.4);
}
.pl small{
  font-size: 0.55rem;
  color: var(--gold);
  font-weight: 800;
  letter-spacing: .12em;
  font-family: var(--display);
  text-shadow: 0 0 6px rgba(255,209,102,0.35);
  opacity: 0.85;
}

.actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px}

table{width:100%;border-collapse:separate;border-spacing:0;}
th,td{padding:4px 4px;text-align:left;border-bottom:1px solid var(--line);vertical-align:middle}
.battle-table th:first-child {
  width: 180px !important;min-width: 180px !important;max-width: 180px !important;
  display: table-cell !important;
}
th{
  color:var(--muted);font-weight:600;font-size:.78rem;
  letter-spacing:0.05em;text-transform:uppercase;
  background:rgba(0,0,0,0.2);
  position: sticky;top: 0;z-index: 1;
}
tbody tr{transition:background 0.1s ease}
tbody tr:hover{background:rgba(255,45,149,0.05)}
tbody tr:last-child td{border-bottom:none}
.tw{
  overflow-x:auto;background:var(--panel);
  border:1px solid var(--line);border-radius:var(--r-lg);
  padding:8px 12px;box-shadow:var(--shadow-panel);
}
td.c,th.c{text-align:center}
.cell{
  display:inline-block;min-width:34px;padding:4px 8px;
  border-radius:9px;font-family:var(--number-font);
  font-size:1.05rem;text-align:center;font-weight:400;letter-spacing:0.02em;
}
td input[type=number]{width:70px}
.dup{border-color:var(--red);color:#ffb3c1}

.seg{display:flex;gap:6px;flex-wrap:wrap;margin:14px 0}
.seg button{font-size:0.85rem}
.seg button.on{
  background:linear-gradient(135deg, var(--pink) 0%, var(--violet) 100%);
  border-color:transparent;font-weight:700;color:#fff;
}

.autofinal{
  display: inline-flex;
  align-items: center;
  gap: 3px;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 60%, #2563eb 100%);
  color: #0b1220;
  border-radius: 6px;
  padding: 2px 8px;
  font-size: 0.6rem;
  font-weight: 900;
  margin-left: 6px;
  white-space: nowrap;
  flex-shrink: 0;
  letter-spacing: 0.08em;
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    0 0 10px rgba(96, 165, 250, 0.55),
    0 2px 4px rgba(0, 0, 0, 0.4);
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.35);
}
.autofinal::before {
  content: "★";
  font-size: 0.7rem;
  color: #0b1220;
  opacity: 0.9;
}

dialog{
  background:var(--panel-solid);color:var(--ink);
  border:1px solid var(--line-strong);
  border-radius:var(--r-xl);padding:28px;
  width:min(460px,92vw);
  animation: popIn 0.2s ease-out forwards;
  box-shadow:0 24px 60px rgba(0,0,0,0.75);
  position:relative;
}
dialog.wide{width:min(540px,92vw)}
dialog::backdrop{background:rgba(3,1,10,0.85);animation:fadeIn .2s ease}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
dialog label{
  display:flex;flex-direction:column;gap:6px;
  margin-bottom:14px;color:var(--muted);
  font-size:.86rem;font-weight:600;letter-spacing:0.02em;
}
dialog input,dialog select{width:100%}

.preset-grid{display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;margin:14px 0 18px}
.preset-btn{
  background:var(--panel2-solid);border:1px solid var(--line);
  border-radius:var(--r-md);padding:14px;
  font-family:var(--display);font-weight:700;color:var(--ink);
  cursor:pointer;text-align:center;font-size:1.05rem;
  transition:all 0.15s ease;
}
.preset-btn:hover{border-color:var(--pink);background:rgba(255,45,149,.1)}

.empty{color:var(--muted);padding:24px 0;text-align:center;font-style:italic}
.sm-group{display:flex;gap:4px;margin-left:auto;flex-shrink:0}
.prow{display:flex;gap:6px;align-items:center;border-bottom:1px solid var(--line)}
.prow:last-child{border-bottom:none}
.pbtn{
  flex:1;display:flex;gap:12px;align-items:center;text-align:left;
  background:transparent;border:0;padding:11px 6px;font-size:0.95rem;
  border-radius:0;transition:background 0.15s ease;
}
.pbtn:hover{background:rgba(255,45,149,0.08)}
.pbtn small{color:var(--muted)}
#plist{max-height:55vh;overflow:auto;margin:12px 0;padding-right:8px;}

.search-dropdown-container { position: relative; width: 100%; }
.search-dropdown-results {
  position: absolute;top: 100%;left: 0;right: 0;
  max-height: 220px;overflow-y: auto;
  background: var(--panel-solid);
  border: 1px solid var(--line-strong);
  border-radius: 14px;z-index: 9999;margin-top: 6px;
  box-shadow: 0 12px 32px rgba(0,0,0,0.7);
  display: none;animation: popIn 0.15s ease;
}
.search-dropdown-results.active { display: block; }
.search-dropdown-item {
  padding: 10px 16px;display: flex;align-items: center;gap: 10px;
  cursor: pointer;font-size: 0.92rem;
  transition: background 0.1s ease;
  border-bottom:1px solid rgba(50,25,95,0.4);
}
.search-dropdown-item:last-child{border-bottom:none}
.search-dropdown-item:hover {
  background: linear-gradient(90deg, rgba(255,45,149,0.15) 0%, rgba(168,85,247,0.1) 100%);
  color: var(--gold);
}

.ov-grid-side{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:20px;margin-top:16px}
@media(max-width:1200px){.ov-grid-side{grid-template-columns:1fr}}
.ov-column{
  background: linear-gradient(145deg, rgba(25,14,52,0.95) 0%, rgba(10,5,22,0.98) 100%);
  border:1px solid rgba(94,58,168,0.3);
  border-radius:var(--r-lg);padding:16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03);
}
.ov-col-title{
  font-family:var(--display);font-weight:800;font-size:1.05rem;
  background:linear-gradient(135deg, rgba(255,45,149,0.1) 0%, rgba(168,85,247,0.05) 100%);
  border:1px solid rgba(168,85,247,0.2);border-radius:12px;padding:10px;
  text-align:center;margin-bottom:16px;color:var(--ink);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
}
.ov-row-item{display:flex;align-items:center;gap:12px;margin-bottom:6px;}
.ov-pts{display:flex;gap:3px;flex-shrink:0;}
.ov-pt{
  width:30px;height:30px;display:grid;place-items:center;
  font-family:var(--number-font);font-size:0.95rem;
  border-radius:8px;background: rgba(5,3,15,0.6);
  border:1px solid rgba(94,58,168,0.2);
  letter-spacing:0.02em;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.4);
}
.ov-pill {
  background: linear-gradient(90deg, rgba(34,19,66,0.8) 0%, rgba(22,13,46,0.9) 100%) !important;
  border: 1px solid rgba(94,58,168,0.3) !important;
}
.ov-pt.none{color:var(--muted);opacity:0.4}
.ov-pill{
  flex:1;height:30px;border-radius:8px;
  background:var(--panel2-solid);border:1px solid var(--line);
  color:var(--ink);display:flex;align-items:center;
  padding:0 9px;font:700 0.75rem var(--display);
  overflow:hidden;min-width:0;gap:6px;max-width:340px;
}
.ov-pill .song-info{display:flex;align-items:center;gap:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;min-width:0}
.ov-pill .song-info span{overflow:hidden;text-overflow:ellipsis;font-size:0.68rem;font-weight:500;color:var(--muted);font-family:var(--body)}
.ov-pill .song-info b{font-size:0.72rem;color:var(--ink);font-weight:700;font-family:var(--display)}
.ov-pill.out{opacity:0.4}
.ov-pill .flag{width:16px;height:11px;object-fit:cover;border-radius:2px;flex-shrink:0;}
.ov-place{width:32px;text-align:center;font-weight:800;color:var(--gold);font-size:0.82rem;font-family:var(--display);flex-shrink:0;}

.row.winner{
  border:2px solid var(--gold);
  background:linear-gradient(135deg, rgba(255,209,102,0.08) 0%, rgba(22,13,46,0.95) 60%);
  box-shadow: 0 0 16px rgba(255,209,102,0.35);
}
.row.winner .meta b{
  background:linear-gradient(135deg, #ffd166 0%, #ffae00 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.row.out { 
  background: linear-gradient(180deg, #1a102e 0%, #0d0718 100%); 
  border-color: rgba(94, 58, 168, 0.2); 
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -2px 4px rgba(0,0,0,0.6);
  opacity: 0.7; /* Macht sie etwas blasser */
}
.row.out::before { filter: grayscale(1) !important; opacity: 0.3 !important; }
.row.out .meta span, .row.out .no, .row.out .cc-code { opacity: 0.6 !important; }
.row.out .row-content { opacity: 0.6; }
.row.out .pl { opacity: 0.4 !important; filter: grayscale(1) !important; }
.row.dq{ opacity:0.3;filter:grayscale(1); background:rgba(255,77,109,0.06); border-color:rgba(255,77,109,0.4); border-left-width:3px; }
.row.autofinal-row{border-color:rgba(59,130,246,0.55)}
.row.aq-row { 
  background: linear-gradient(180deg, rgba(30, 58, 138, 0.55) 0%, rgba(15, 28, 74, 0.7) 50%, rgba(10, 6, 28, 0.95) 100%) !important;
  border-color: rgba(96, 165, 250, 0.55) !important;
  box-shadow: 
    inset 0 1px 0 rgba(147, 197, 253, 0.15),
    inset 0 -2px 4px rgba(0, 0, 0, 0.6),
    0 4px 14px rgba(59, 130, 246, 0.15);
}
.row.aq-row:hover {
  border-color: rgba(96, 165, 250, 0.9) !important;
  box-shadow: 
    inset 0 1px 0 rgba(147, 197, 253, 0.25),
    inset 0 -2px 4px rgba(0, 0, 0, 0.6),
    0 8px 20px rgba(0, 0, 0, 0.5),
    0 0 24px rgba(59, 130, 246, 0.3);
}

.live-mode-banner{ background:var(--panel); border-radius:var(--r-xl);padding:24px;margin-bottom:22px; box-shadow:var(--shadow-panel); display:flex;flex-direction:column;gap:16px; border:1px solid var(--line); }
.live-header{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line);padding-bottom:16px;flex-wrap:wrap;gap:12px}
.live-header h2{color:#fff;margin:0;font-size:1.3rem;display:flex;align-items:center;gap:12px}
.live-dot{ display:inline-block;width:12px;height:12px;border-radius:50%; background:var(--red); animation:pulse-dot 1.6s ease-in-out infinite; }
.live-current-card{ background: linear-gradient(135deg, rgba(255,209,102,0.1) 0%, rgba(255,45,149,0.05) 50%, rgba(34,211,238,0.05) 100%), rgba(22,13,46,0.6); border:1.5px solid rgba(255,209,102,0.4); border-radius:20px;padding:28px; display:flex;align-items:center;justify-content:space-between; flex-wrap:wrap;gap:18px; position:relative;overflow:hidden; box-shadow:0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15); }
.live-cc-badge { position: absolute; top: 50%; left: 24px; transform: translateY(-50%); font-family: var(--display); font-size: 0.9rem; font-weight: 800; background: rgba(5,3,15,0.85); color: var(--ink); padding: 6px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); letter-spacing: 0.1em; z-index: 2; }
/* ===== LIVE SONG SLIDE — Richtung: vorwärts (▶) = raus links, rein von rechts ===== */
.live-song-stage {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 26px;
  min-height: 280px;
}

.live-song-slide {
  width: 100%;
  will-change: transform, opacity;
}

/* Vorwärts: neuer Song kommt von rechts rein */
.live-song-slide.from-right {
  animation: slideInFromRight 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes slideInFromRight {
  0%   { opacity: 0; transform: translateX(80px); filter: blur(6px); }
  100% { opacity: 1; transform: translateX(0); filter: blur(0); }
}

/* Rückwärts: neuer Song kommt von links rein */
.live-song-slide.from-left {
  animation: slideInFromLeft 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes slideInFromLeft {
  0%   { opacity: 0; transform: translateX(-80px); filter: blur(6px); }
  100% { opacity: 1; transform: translateX(0); filter: blur(0); }
}

/* Jury-Boxen + Queue gleiten sanft nach (gestaffelt) */
.live-flow-jury {
  animation: liveFlowSoft 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: 0.05s;
}
@keyframes liveFlowSoft {
  0%   { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

.live-flow-queue {
  animation: liveFlowSoft 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: 0.1s;
}
.live-current-card::before{ content:""; position:absolute;top:0;left:0;right:0;bottom:0;width:100%; background-image:var(--live-flag-url); background-size:cover;background-position:center; mask-image:radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%); -webkit-mask-image:radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%); opacity:0.35; pointer-events:none; z-index: 0; }
@keyframes liveFlagFade { 0% { opacity: 0.15; transform: scale(1); } 100% { opacity: 0.45; transform: scale(1.02); } }
.live-current-place { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 999px; font-family: var(--display); font-size: 0.85rem; font-weight: 800; letter-spacing: 0.04em; margin-bottom: 10px; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.25); color: #fff; }
.live-current-place.gold { background: linear-gradient(135deg,#ffd166,#ffae00); color:#1d1d1d; border-color:#fff6cc; }
.live-current-place.silver { background: linear-gradient(135deg,#e5e5e5,#a3a3a3); color:#1d1d1d; border-color:#fff; }
.live-current-place.bronze { background: linear-gradient(135deg,#e5a56b,#cd7f32); color:#1d1d1d; border-color:#f5c896; }
.live-jury-box { flex: 1; min-width: 110px; border-radius: 18px; padding: 16px 12px; text-align: center; border: 1.5px solid rgba(255,255,255,0.15); transition: transform 0.15s ease-out, box-shadow 0.15s ease-out, border-color 0.15s ease-out; position: relative; overflow: hidden; background: rgba(34,19,66,0.5); box-shadow: 0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1); }
.live-jury-box .jury-name { font-size: 0.82rem; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 8px; text-shadow: 0 1px 3px rgba(0,0,0,0.5); }
.live-jury-box .live-big-number { font-family: var(--number-font); font-size: 2.8rem; letter-spacing: 0.03em; display: inline-block; line-height: 1; padding: 2px 10px; border-radius: 10px; text-shadow: 0 2px 6px rgba(0,0,0,0.4); }
.live-jury-box.editable { cursor: pointer; }
.live-jury-box.editable:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.4); }
.live-jury-box.editable:active { transform: scale(0.97); }
.live-queue-grid{ display:flex;gap:10px;overflow-x:auto;padding-bottom:12px; }
.live-queue-item{ background: linear-gradient(135deg, rgba(25,14,52,0.95) 0%, rgba(12,6,28,0.98) 100%); border:1px solid rgba(94,58,168,0.3); border-radius:12px;padding:10px 14px; min-width:150px;cursor:pointer;flex-shrink:0; transition:all 0.15s ease; position:relative;overflow:hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
.live-queue-item:hover{ border-color:var(--pink); background: linear-gradient(135deg, rgba(35,20,70,1) 0%, rgba(18,9,40,1) 100%); box-shadow: 0 6px 16px rgba(0,0,0,0.4); }
.live-queue-item.active{ border-color:var(--gold); background: linear-gradient(135deg, rgba(45,28,85,1) 0%, rgba(22,13,46,1) 100%); box-shadow: 0 0 16px rgba(255,209,102,0.15), inset 0 1px 0 rgba(255,255,255,0.1); }
.live-queue-item.active::before{ content:"";position:absolute;top:0;left:0;bottom:0;width:4px; background:var(--gold); }
.queue-pop { animation: queuePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); }
@keyframes queuePop { 0% { transform: scale(1); } 40% { transform: scale(1.08); box-shadow: 0 0 24px rgba(255,209,102,0.9); } 100% { transform: scale(1); box-shadow: none; } }
.live-big-number{ cursor:pointer;display:inline-block;line-height:1; transition:transform 0.15s ease-out, color 0.15s ease-out; font-family:var(--number-font);letter-spacing:0.03em; }
.live-big-number:hover{transform:scale(1.08)}
.live-big-number:active{transform:scale(0.95)}
.live-fallback { background:linear-gradient(135deg, rgba(255,45,149,0.1) 0%, var(--panel) 60%); border:2px solid var(--pink); border-radius:var(--r-xl);padding:36px 28px; text-align:center;max-width:600px;margin:40px auto; box-shadow:0 0 40px rgba(255,45,149,0.2); }
.live-fallback h2 { font-size:1.5rem;margin:0 0 8px; display:flex;align-items:center;justify-content:center;gap:12px; }
.live-fallback p { color:var(--muted);margin:0 0 24px; }
.live-fallback-shows { display:flex;gap:12px;justify-content:center;flex-wrap:wrap; }
.live-fallback-shows button { font-family:var(--display);font-weight:700;font-size:1.1rem; padding:16px 28px;min-width:180px; background:linear-gradient(135deg, var(--pink), var(--violet)); border:none;color:#fff; }
.live-fallback-shows button:hover { filter:brightness(1.1); transform:translateY(-2px); }

.battle-podium-winner { border-radius: var(--r-xl); padding: 36px 28px; display: flex; flex-direction: column; align-items: center; gap: 10px; position: relative; overflow: hidden; border: 2px solid var(--gold); background: linear-gradient(135deg, rgba(255,209,102,0.15) 0%, rgba(22,13,46,0.95) 70%); box-shadow: 0 0 48px rgba(255,209,102,0.35), 0 0 16px rgba(255,209,102,0.5); margin-bottom: 16px; }
.battle-podium-winner::before { content:""; position:absolute;top:0;left:-100%;right:0;bottom:0; background: linear-gradient(90deg, transparent, rgba(255,209,102,0.15), transparent); animation: goldShine 3s ease-in-out infinite; pointer-events:none; }
.battle-podium-winner .medal { font-size: 3.2rem; line-height: 1; filter: drop-shadow(0 0 16px rgba(255,209,102,0.9)); }
.battle-podium-winner .name { font-family: var(--display); font-weight: 800; font-size: 1.5rem; color: var(--ink); }
.battle-podium-winner .score { font-family: var(--number-font); font-size: 3rem; background: linear-gradient(135deg, #ffd166 0%, #ffae00 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; letter-spacing: 0.03em; }
.battle-podium-winner .label { font-size: 0.78rem; color: var(--gold); text-transform: uppercase; letter-spacing: 0.12em; font-weight: 800; }
.battle-runner-ups { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; }
.battle-runner-up { border-radius: var(--r-lg); padding: 18px 16px; display: flex; flex-direction: column; align-items: center; gap: 6px; background: var(--panel2-solid); border: 1px solid var(--line); }
.battle-runner-up .medal { font-size: 1.6rem; }
.battle-runner-up .name { font-family: var(--display); font-weight: 700; font-size: 1rem; color: var(--ink); }
.battle-runner-up .score { font-family: var(--number-font); font-size: 1.5rem; color: var(--cyan); }
.battle-runner-up .label { font-size: 0.7rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700; }
.hidden-pred { color: var(--muted-dim); font-family: var(--number-font); letter-spacing: 3px; user-select: none; font-size: 1.1rem; }
.battle-row { position: relative; background: rgba(22,13,46,0.6); }
.battle-row td { position: relative; z-index: 1; border-bottom: 3px solid rgba(30,18,60,0.9) !important; }
.battle-row::before { content: "";position: absolute;left: 0;top: 0;bottom: 0;width: 180px; background-image: var(--flag-url); background-size: cover;background-position: center; opacity: 0.85; mask-image: linear-gradient(to right, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 100%); -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 100%); pointer-events: none;z-index: 0; }
.battle-row:hover { background: rgba(255,45,149,0.05); }

.sb-table { width: 100%; border-collapse: collapse; }
.sb-table th, .sb-table td { padding: 6px 10px; border-bottom: 1px solid var(--line); vertical-align: middle; background: transparent !important; }
.sb-table th { text-align: left; font-family: var(--display); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--muted); padding: 10px; background: transparent !important; }
.sb-table td.sb-rank-cell { font-family: var(--number-font); font-size: 1.2rem; color: var(--muted); text-align: center; width: 40px; }
.sb-table tr.sb-top1 td.sb-rank-cell { color: var(--gold); text-shadow: 0 0 12px rgba(255,209,102,0.5); }
.sb-table tr.sb-top2 td.sb-rank-cell { color: #e5e5e5; }
.sb-table tr.sb-top3 td.sb-rank-cell { color: #cd7f32; }
.sb-song-cell { display: flex; align-items: center; gap: 8px; }
.sb-song-cell .flag { width: 22px; height: 15px; border-radius: 3px; }
.sb-song-info { display: flex; flex-direction: row; align-items: baseline; gap: 6px; }
.sb-title { font-family: var(--display); font-weight: 700; font-size: 0.9rem; color: var(--ink); }
.sb-artist { font-size: 0.75rem; color: var(--muted); font-weight: 500; }
.sb-country { display: none; }
.sb-score-cell { text-align: center; width: 50px; }
.sb-score-cell b { font-family: var(--number-font); font-size: 1.3rem; color: var(--cyan); }
.sb-table tr.sb-top1 .sb-score-cell b { color: var(--gold); }

#toast-container{ position:fixed;bottom:24px;left:50%;transform:translateX(-50%); z-index:99999;display:flex;flex-direction:column;gap:10px; pointer-events:none; }
.toast{ background:var(--panel-solid); border:1px solid var(--line-strong); color:var(--ink); padding:14px 24px;border-radius:999px; font-weight:700;font-size:0.9rem; box-shadow:0 12px 32px rgba(0,0,0,0.6); animation:popIn 0.25s ease-out; display:flex;align-items:center;gap:10px; pointer-events:auto; }
.toast.success{border-color:rgba(74,222,128,0.6)}
.toast.error{border-color:rgba(255,77,109,0.6)}

@media(max-width:700px){
  .wrap{padding:0 14px 80px}
  .hero{margin:36px 0 24px}
  .main-actions button{min-width:0;flex:1 1 100%;max-width:none}
  .live-mode-banner{padding:18px}
  dialog{padding:22px}
}
`;function rg(){const e=document.getElementById("esc-global-styles");e&&e.remove();const t=document.createElement("style");t.id="esc-global-styles",t.textContent=ng,document.head.appendChild(t)}rg();const lg={apiKey:"AIzaSyBH4kCFQRjnBbd4cJDDuGSxJbRQAnUQWHw",authDomain:"esc-connect-7bdfe.firebaseapp.com",databaseURL:"https://esc-connect-7bdfe-default-rtdb.europe-west1.firebasedatabase.app",projectId:"esc-connect-7bdfe",storageBucket:"esc-connect-7bdfe.firebasestorage.app",messagingSenderId:"432112365589",appId:"1:432112365589:web:9af0cdb510f2380935de1c"},lo={"johnlp1350@gmail.com":{id:"j3",isAdmin:!0},"stahmeln05@gmail.com":{id:"j2",isAdmin:!1},"lucioosy@gmail.com":{id:"j4",isAdmin:!1},"br0k3n.f41ry@gmail.com":{id:"j1",isAdmin:!1}},Ml=[["af","Afghanistan"],["al","Albania"],["am","Armenia"],["au","Australia"],["at","Austria"],["az","Azerbaijan"],["bh","Bahrain"],["bd","Bangladesh"],["by","Belarus"],["be","Belgium"],["bt","Bhutan"],["ba","Bosnia and Herzegovina"],["bn","Brunei"],["bg","Bulgaria"],["kh","Cambodia"],["ca","Canada"],["cn","China"],["hr","Croatia"],["cy","Cyprus"],["cz","Czechia"],["dk","Denmark"],["ee","Estonia"],["fi","Finland"],["fr","France"],["ge","Georgia"],["de","Germany"],["gr","Greece"],["hk","Hong Kong"],["hu","Hungary"],["is","Iceland"],["in","India"],["id","Indonesia"],["ir","Iran"],["iq","Iraq"],["ie","Ireland"],["il","Israel"],["it","Italy"],["jp","Japan"],["jo","Jordan"],["kz","Kazakhstan"],["kw","Kuwait"],["kg","Kyrgyzstan"],["la","Laos"],["lb","Lebanon"],["lv","Latvia"],["lt","Lithuania"],["lu","Luxembourg"],["mo","Macau"],["my","Malaysia"],["mv","Maldives"],["mt","Malta"],["md","Moldova"],["mc","Monaco"],["mn","Mongolia"],["me","Montenegro"],["ma","Morocco"],["mm","Myanmar"],["np","Nepal"],["nl","Netherlands"],["nz","New Zealand"],["kp","North Korea"],["mk","North Macedonia"],["no","Norway"],["om","Oman"],["pk","Pakistan"],["ps","Palestine"],["ph","Philippines"],["pl","Poland"],["pt","Portugal"],["qa","Qatar"],["ro","Romania"],["ru","Russia"],["sa","Saudi Arabia"],["sm","San Marino"],["rs","Serbia"],["sg","Singapore"],["sk","Slovakia"],["si","Slovenia"],["kr","South Korea"],["es","Spain"],["lk","Sri Lanka"],["se","Sweden"],["ch","Switzerland"],["sy","Syria"],["tw","Taiwan"],["tj","Tajikistan"],["th","Thailand"],["tr","Türkiye"],["tm","Turkmenistan"],["ua","Ukraine"],["ae","United Arab Emirates"],["gb","United Kingdom"],["uz","Uzbekistan"],["vn","Vietnam"],["ye","Yemen"]],Ze={};for(let e=0;e<Ml.length;e++)Ze[Ml[e][0]]=Ml[e][1];const ig={af:"AFG",al:"ALB",am:"ARM",au:"AUS",at:"AUT",az:"AZE",bh:"BHR",bd:"BGD",by:"BLR",be:"BEL",bt:"BTN",ba:"BIH",bn:"BRN",bg:"BGR",kh:"KHM",ca:"CAN",cn:"CHN",hr:"CRO",cy:"CYP",cz:"CZE",dk:"DNK",ee:"EST",fi:"FIN",fr:"FRA",ge:"GEO",de:"GER",gr:"GRE",hk:"HKG",hu:"HUN",is:"ISL",in:"IND",id:"IDN",ir:"IRN",iq:"IRQ",ie:"IRL",il:"ISR",it:"ITA",jp:"JPN",jo:"JOR",kz:"KAZ",kw:"KWT",kg:"KGZ",la:"LAO",lb:"LBN",lv:"LVA",lt:"LTU",lu:"LUX",mo:"MAC",my:"MYS",mv:"MDV",mt:"MLT",md:"MDA",mc:"MCO",mn:"MNG",me:"MNE",ma:"MAR",mm:"MMR",np:"NPL",nl:"NED",nz:"NZL",kp:"PRK",mk:"MKD",no:"NOR",om:"OMN",pk:"PAK",ps:"PSE",ph:"PHL",pl:"POL",pt:"POR",qa:"QAT",ro:"ROU",ru:"RUS",sa:"SAU",sm:"SMR",rs:"SRB",sg:"SGP",sk:"SVK",si:"SVN",kr:"KOR",es:"ESP",lk:"LKA",se:"SWE",ch:"SUI",sy:"SYR",tw:"TWN",tj:"TJK",th:"THA",tr:"TUR",tm:"TKM",ua:"UKR",ae:"ARE",gb:"GBR",uz:"UZB",vn:"VNM",ye:"YEM"},Sl={sf1:"Semi-final 1",sf2:"Semi-final 2",final:"Grand Final"},du={sf1:15,sf2:15,final:26},An="esc-scoreboard-v2",jl="esc-me",jc=`
/* ===== BATTLE TABLE — TRANSPARENT ===== */
.battle-table {
  background: transparent !important;
  table-layout: fixed !important;
  border-collapse: separate !important;
  border-spacing: 0 !important;
  border-radius: 12px !important;
  overflow: hidden !important;
}
.battle-table thead tr th {
  background: transparent !important;
  border-bottom: 1px solid var(--line) !important;
  height: 40px !important;
}
.battle-table tbody tr,
.battle-table tbody td {
  background: transparent !important;
  border-bottom: 1px solid rgba(94, 58, 168, 0.2) !important;
  height: 48px !important;
  padding: 0 4px !important;
  vertical-align: middle !important;
}
.battle-table tbody tr:hover td {
  background: rgba(255, 255, 255, 0.03) !important;
}

/* WICHTIG: Der Flaggen-Overlay im ersten <td> soll nicht die ganze Zelle füllen */
.battle-table tbody tr td:first-child > div:first-child {
  /* das ist der Flaggen-Gradient-Wrapper — bleibt, aber wir brauchen keinen BG-Div mehr */
}

.battle-input {
  width: 38px !important;
  height: 38px !important;
  text-align: center;
  background: var(--panel2-solid) !important;
  border: 1px solid var(--line) !important;
  border-radius: 8px;
  padding: 0;
  font-family: var(--number-font);
  font-size: 1.4rem !important;
  color: var(--ink);
  display: block;
  margin: 0 auto;
}
.battle-input.dup { border-color: var(--red); color: #ffb3c1; }
.battle-input:focus { outline: none; border-color: var(--gold); }

.battle-diff-cell {
  display: inline-block !important;
  width: 38px !important;
  height: 38px !important;
  line-height: 38px !important;
  text-align: center !important;
  border-radius: 8px !important;
  font-family: var(--number-font) !important;
  font-size: 1.4rem !important;
  padding: 0 !important;
  vertical-align: middle !important;
}
.battle-table th.col-tipp, .battle-table td.col-tipp { width: 50px !important; text-align: center; }
.battle-table th.col-abw, .battle-table td.col-abw { width: 50px !important; text-align: center; }
.battle-table th.col-place, .battle-table td.col-place { width: 50px !important; text-align: center; }
`;if(typeof document<"u"&&!document.getElementById("battle-table-css")){const e=document.createElement("style");e.id="battle-table-css",e.textContent=jc,document.head.appendChild(e)}const Cl=e=>e?ig[e.toLowerCase()]||e.toUpperCase():"",ee=e=>String(e||""),Or=e=>+String(e).split("-").pop(),Qt=({cc:e})=>o.jsx("img",{className:"flag","data-cc":e,src:`https://flagcdn.com/w40/${e}.png`,srcSet:`https://flagcdn.com/w40/${e}.png 1x, https://flagcdn.com/w80/${e}.png 2x`,width:"22",height:"15",alt:e.toUpperCase(),loading:"lazy",decoding:"async",onError:t=>{const n=t.target;if(!n.dataset.s){n.dataset.s=1,n.removeAttribute("srcset"),n.src=`https://flagcdn.com/w40/${e}.png`;return}const r=document.createElement("span");r.textContent=e.toUpperCase().split("").map(l=>String.fromCodePoint(127397+l.charCodeAt(0))).join("")+" ",n.replaceWith(r)}}),Yt=e=>{if(Number(e)===10)return"background:linear-gradient(160deg, #ffecb3 0%, #ffd166 50%, #f5b93a 100%);color:#4a2f00;text-shadow:0 1px 0 rgba(255,255,255,0.6);border:1.5px solid #fff4c9;box-shadow:0 0 18px rgba(255,209,102,0.55), 0 3px 10px rgba(180,120,0,0.35), inset 0 1.5px 0 rgba(255,255,255,0.7), inset 0 -2px 5px rgba(150,90,0,0.35);";const t={1:"#e63a2e",2:"#ea6b5f",3:"#ef9b93",4:"#f5c9c5",5:"#f5f5f5",6:"#c9e6d2",7:"#9fd6b1",8:"#71c48d",9:"#47b265"},n={1:"#9b1e15",2:"#b84236",3:"#c96660",4:"#d9a4a0",5:"#c9c9c9",6:"#8ebfa1",7:"#6cae83",8:"#449d66",9:"#2a824a"},r={1:"#b72b1f",2:"#c94a3d",3:"#d6726a",4:"#dc9f9a",5:"#b0b0b0",6:"#95c7a6",7:"#79b98e",8:"#5aa374",9:"#3c9058"},l=t[e]||"#f5f5f5",i=n[e]||"#c9c9c9",a=r[e]||"#b0b0b0",u=e>=6?"#0a2e14":"#1d1d1d";return`background: linear-gradient(160deg, ${l} 0%, ${i} 100%);color: ${u};text-shadow: 0 1px 0 rgba(255,255,255,0.4);border: 1.5px solid ${a};box-shadow: 0 3px 10px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -2px 5px rgba(0,0,0,0.2);`},Ga=()=>({jury:[{id:"j1",name:"Livin"},{id:"j2",name:"Tabi"},{id:"j3",name:"Poki"},{id:"j4",name:"Kiri"}],songs:[],years:[],ratings:{},pred:{},qualPred:{},liveState:{},battleHidden:!1}),og=()=>{try{const e=JSON.parse(localStorage.getItem(An));if(e&&e.jury)return e.qualPred=e.qualPred||{},e.liveState=e.liveState||{},e}catch{}return Ga()},Cc=e=>e.sort((t,n)=>{const r=t.customNo!==void 0&&t.customNo!==null&&t.customNo!==""?parseFloat(t.customNo):Or(t.id),l=n.customNo!==void 0&&n.customNo!==null&&n.customNo!==""?parseFloat(n.customNo):Or(n.id);return!isNaN(r)&&!isNaN(l)?r-l:String(r).localeCompare(String(l))}),cu=e=>{const t={jury:{},songs:{},years:{},ratings:e.ratings,pred:e.pred,qualPred:e.qualPred,liveState:e.liveState,battleHidden:e.battleHidden||!1};for(let n=0;n<e.jury.length;n++)t.jury[e.jury[n].id]={name:e.jury[n].name};for(let n=0;n<e.songs.length;n++){const r=e.songs[n];t.songs[r.id]={cc:r.cc,artist:r.artist,title:r.title,year:r.year}}for(let n=0;n<e.years.length;n++){const r=e.years[n],l={year:r.year,suffix:r.suffix,city:r.city,hostCc:r.hostCc,splitAfter:r.splitAfter,showDates:r.showDates,shows:{}};for(const i in r.shows){l.shows[i]={};const a=r.shows[i];for(let u=0;u<a.length;u++){const p=a[u];l.shows[i][p.id]={n:p.customNo,songId:p.songId,place:p.place,dq:p.dq,autoFinal:p.autoFinal}}}t.years[r.id]=l}return t},Dl=(e,t,n)=>{t=t||"",n=n||{};for(const r in e){const l=e[r],i=t?t+"/"+r:r;l&&typeof l=="object"?Dl(l,i,n):l!=null&&l!==""&&(n[i]=l)}return n},ag=e=>{const t=Ga(),n=e.jury||{};for(let i=0;i<t.jury.length;i++)n[t.jury[i].id]&&n[t.jury[i].id].name&&(t.jury[i].name=n[t.jury[i].id].name);t.songs=[];const r=e.songs||{};for(const i in r)r.hasOwnProperty(i)&&t.songs.push(Object.assign({id:i},r[i]));t.years=[];const l=e.years||{};for(const i in l)if(l.hasOwnProperty(i)){const a=l[i],u={};if(a.shows){for(const p in a.shows)if(a.shows.hasOwnProperty(p)){const x=a.shows[p]||{},g=[];for(const j in x)if(x.hasOwnProperty(j)){const S=x[j];g.push({id:j,songId:S.songId,place:S.place,customNo:S.n,dq:S.dq,autoFinal:S.autoFinal})}Cc(g),u[p]=g}}t.years.push({id:i,year:+a.year||+i.split("_")[0],suffix:a.suffix||"",city:a.city,hostCc:a.hostCc,splitAfter:a.splitAfter,showDates:a.showDates||{},shows:u})}return t.years.sort((i,a)=>a.year-i.year||a.id.localeCompare(i.id)),t.ratings=e.ratings||{},t.pred=e.pred||{},t.qualPred=e.qualPred||{},t.liveState=e.liveState||{},t.battleHidden=!!e.battleHidden,t},sg=e=>e>=20?"background: linear-gradient(135deg, #ff0000, #800000); color: #fff; border: 2.5px solid #ff6666; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 0 15px rgba(255,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.3);":e>=15?"background: linear-gradient(135deg, #d90000, #660000); color: #fff; border: 2.5px solid #ff4d4d; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 4px 12px rgba(217,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3);":e>=11?"background: linear-gradient(135deg, #b45309, #78350f); color: #fff; border: 2.5px solid #f59e0b; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 4px 12px rgba(180,83,9,0.4), inset 0 1px 0 rgba(255,255,255,0.2);":e>=8?"background: linear-gradient(135deg, #f97316, #c2410c); color: #fff; border: 2.5px solid #fdba74; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 4px 12px rgba(249,115,22,0.4), inset 0 1px 0 rgba(255,255,255,0.3);":e>=5?"background: linear-gradient(135deg, #facc15, #ca8a04); color: #422006; border: 2.5px solid #fef08a; text-shadow: 0 1px 2px rgba(255,255,255,0.6); box-shadow: 0 4px 12px rgba(250,204,21,0.4), inset 0 1px 0 rgba(255,255,255,0.5);":e>=3?"background: linear-gradient(135deg, #86efac, #22c55e); color: #052e16; border: 2.5px solid #bbf7d0; text-shadow: 0 1px 2px rgba(255,255,255,0.6); box-shadow: 0 4px 12px rgba(34,197,94,0.4), inset 0 1px 0 rgba(255,255,255,0.5);":"background: linear-gradient(135deg, #4ade80, #16a34a); color: #fff; border: 2.5px solid #86efac; text-shadow: 0 1px 3px rgba(0,0,0,0.6); box-shadow: 0 4px 12px rgba(22,163,74,0.4), inset 0 1px 0 rgba(255,255,255,0.4);";function ug(){A.useEffect(()=>{const s=document.getElementById("battle-table-css");s&&s.remove();const d=document.createElement("style");d.id="battle-table-css-"+Date.now(),d.textContent=jc,document.head.appendChild(d)},[]);const[e,t]=A.useState(og),[n,r]=A.useState(()=>localStorage.getItem(jl)||"j3"),[l,i]=A.useState(()=>localStorage.getItem("esc-is-admin")==="true"),[a,u]=A.useState(null),[p,x]=A.useState(1),[g,j]=A.useState({view:"home",yearId:null,tab:"sf1",subTab:"points",sortMode:"order",ovSubTab:"semis",sbShow:"final",sbSort:"ratings",editMode:!1,q:"",libYear:"",compareCc:null,enter:!1}),[S,O]=A.useState({open:!1,mode:null,payload:null}),[M,B]=A.useState([]),[fe,v]=A.useState({}),[m,y]=A.useState(()=>localStorage.getItem("esc-auto-reset")==="true"),T=A.useRef({}),H=A.useRef(null),q=A.useRef(!1),K=A.useRef(null),Z=A.useRef(null),ve=A.useRef(e.ratings),ie=A.useRef(e.pred);A.useRef(null);const de=A.useCallback(s=>e.years.find(d=>d.id===s)||null,[e.years]),me=A.useCallback(s=>e.songs.find(d=>d.id===s)||null,[e.songs]),gt=A.useCallback(s=>{const d=e.jury.find(c=>c.id===s);return d?d.name:s},[e.jury]),Rn=A.useCallback(s=>{for(const d of e.years)for(const c in d.shows){const f=d.shows[c].find(h=>h.id===s);if(f)return f}return null},[e.years]),mt=A.useCallback(s=>s?s.songId&&e.ratings[s.songId]?e.ratings[s.songId]:e.ratings[s.id]?e.ratings[s.id]:{}:{},[e.ratings]),Ut=A.useCallback(s=>s?e.qualPred[s.id]?e.qualPred[s.id]:{}:{},[e.qualPred]),Xe=A.useCallback((s,d)=>{const c=Date.now()+Math.random();B(f=>[...f,{id:c,msg:s,type:d||""}]),setTimeout(()=>{B(f=>f.filter(h=>h.id!==c))},2600)},[]),L=A.useCallback((s,d={})=>{O({open:!0,mode:s,payload:d})},[]),W=A.useCallback(()=>{O({open:!1,mode:null,payload:null}),setModalTempRating(null),setModalTempEntryId(null),setModalTempJurId(null)},[]);A.useEffect(()=>{const s=Z.current;if(s){if(S.open&&!s.open)try{s.showModal()}catch{}if(!S.open&&s.open)try{s.close()}catch{}}},[S.open]);const ne=A.useCallback(s=>{const d=H.current;if(!d)return;const c=Dl(cu(s)),f={};for(const h in c)c[h]!==T.current[h]&&(f[h]=c[h]);for(const h in T.current)h in c||(f[h]=null);Object.keys(f).length&&(T.current=c,d.update(f).catch(h=>console.warn("Firebase push error:",h)))},[]),ye=A.useCallback((s,d)=>{const c=H.current;c&&(d==null?(c.child(s).remove().catch(()=>{}),delete T.current[s]):(c.child(s).set(d).catch(()=>{}),T.current[s]=d))},[]),Ce=A.useCallback(s=>{try{localStorage.setItem(An,JSON.stringify(s))}catch{}ne(s)},[ne]),se=A.useCallback(s=>{t(d=>{const c=typeof s=="function"?s(d):{...d,...s};return Ce(c),c})},[Ce]),ot=A.useCallback((s,d,c)=>{const f=d.key,h=c?null:d.val(),b=s==="ratings"?"ratings":s==="pred"?"pred":s==="qualPred"?"qualPred":null;b&&t(w=>{const z=w[b]||{},P=z[f];if(h==null&&P===void 0)return w;if(h&&typeof h=="object"&&P){let _=!1;for(const U in h)if(P[U]!==h[U]){_=!0;break}if(!_)return w}if(typeof h!="object"&&P===h)return w;const k={...w},C={...z};h==null?delete C[f]:typeof h=="object"?C[f]=Object.assign({},P||{},h):C[f]=h,k[b]=C;try{localStorage.setItem(An,JSON.stringify(k))}catch{}return k})},[]),pr=A.useCallback(s=>{if(!window.firebase||H.current)return;const d=window.firebase.database().ref();H.current=d,d.once("value").then(c=>{const f=c.val();if(!f){if(s===!0){const w=Ga();T.current=Dl(cu(w)),d.update(T.current).catch(()=>{})}return}const h=Dl(f),b=ag(f);t(b),T.current=h;try{localStorage.setItem(An,JSON.stringify(b))}catch{}}).catch(c=>{console.warn("Firebase pull Fehler:",c)}),["ratings","pred","qualPred"].forEach(c=>{d.child(c).on("child_added",f=>ot(c,f,!1)),d.child(c).on("child_changed",f=>ot(c,f,!1)),d.child(c).on("child_removed",f=>ot(c,f,!0))}),d.child("liveState").on("value",c=>{t(f=>{const h=c.val()||{};if(JSON.stringify(f.liveState)===JSON.stringify(h))return f;const b={...f,liveState:h};try{localStorage.setItem(An,JSON.stringify(b))}catch{}return b})}),d.child("battleHidden").on("value",c=>{t(f=>{const h=!!c.val();if(f.battleHidden===h)return f;const b={...f,battleHidden:h};try{localStorage.setItem(An,JSON.stringify(b))}catch{}return b})})},[ot]);A.useEffect(()=>{if(!q.current){if(q.current=!0,!window.firebase){console.warn("Firebase SDK not loaded yet");return}try{window.firebase.apps.length||window.firebase.initializeApp(lg),window.firebase.auth().onAuthStateChanged(s=>{if(s){const d=(s.email||"").toLowerCase();if(lo.hasOwnProperty(d)){u(s);const c=lo[d],f=c.id,h=!!c.isAdmin;r(f),i(h),localStorage.setItem(jl,f),localStorage.setItem("esc-is-admin",h?"true":"false"),localStorage.setItem("esc-joined","true"),pr(!0)}else{window.firebase.auth().signOut().then(()=>{u(null),L("alert",{title:"Zugriff verweigert",text:"Das Google-Konto ("+d+") ist nicht freigeschaltet!"})});return}}else u(null)})}catch(s){console.warn("Firebase Init Fehler:",s)}}},[]);const It=A.useCallback(()=>{if(!window.firebase)return;const s=new window.firebase.auth.GoogleAuthProvider;window.firebase.auth().signInWithPopup(s).then(d=>{const c=(d.user.email||"").toLowerCase();lo.hasOwnProperty(c)?Xe("Willkommen, "+(d.user.displayName||c)+"!","success"):(window.firebase.auth().signOut(),L("alert",{title:"Zugriff verweigert",text:"Das Konto "+c+" ist nicht in der Whitelist."}))}).catch(d=>{L("alert",{title:"Login Fehler",text:d.message})})},[L,Xe]),Fn=A.useCallback(()=>{window.firebase&&window.firebase.auth().signOut().then(()=>{u(null)})},[]),Ni=A.useCallback(()=>{const s=e.jury.map(d=>(d.name.trim()[0]||"?").toUpperCase());return s.map((d,c)=>s.filter(h=>h===d).length>1?d+(c+1):d)},[e.jury]),Nc=A.useCallback(()=>{if(!g.yearId||!g.tab)return!1;const s=e.liveState[g.yearId];return s&&s.activeTab===g.tab},[g.yearId,g.tab,e.liveState]),il=A.useCallback(()=>{if(!g.yearId)return 0;const s=e.liveState[g.yearId];return s&&s.index!==void 0?s.index:0},[g.yearId,e.liveState]);A.useEffect(()=>{if(!g.enter||!K.current)return;const s=K.current;s.classList.remove("enter"),s.offsetWidth,s.classList.add("enter"),j(d=>({...d,enter:!1}))},[g.enter]),A.useEffect(()=>{const s=ve.current,d=ie.current,c=[];for(const h in e.ratings)for(const b in e.ratings[h])(!s[h]||s[h][b]!==e.ratings[h][b])&&c.push("rating_"+h+"_"+b);for(const h in e.pred)for(const b in e.pred[h])(!d[h]||d[h][b]!==e.pred[h][b])&&c.push("pred_"+h+"_"+b);if(ve.current=e.ratings,ie.current=e.pred,!c.length)return;const f=new Set(c);window.__flashTimer&&clearTimeout(window.__flashTimer),window.__flashTimer=setTimeout(()=>{document.querySelectorAll("[data-flash-key]").forEach(h=>{f.has(h.getAttribute("data-flash-key"))&&(h.classList.add("flash-update"),setTimeout(()=>h.classList.remove("flash-update"),1400))}),document.querySelectorAll("[data-live-flash-key]").forEach(h=>{f.has(h.getAttribute("data-live-flash-key"))&&(h.classList.add("live-box-flash"),setTimeout(()=>h.classList.remove("live-box-flash"),1400))})},100)},[e.ratings,e.pred]),A.useEffect(()=>{localStorage.getItem("esc-joined")||L("welcome")},[]),A.useEffect(()=>{if(localStorage.getItem("esc-auto-reset")==="true"&&!window.location.search.includes("v=")){const s=new URL(window.location.href);s.searchParams.set("v",Date.now()),window.location.replace(s.toString())}},[]),A.useEffect(()=>{if(!window.firebase||!window.firebase.database)return;const s=localStorage.getItem(jl);if(!s)return;const d=window.firebase.database(),c=d.ref("presence"),f=c.child(s),h=d.ref(".info/connected");h.once("value").then(C=>{C.val()===!0&&f.onDisconnect().remove().then(()=>{f.set({online:!0,time:Date.now()})})});const b=()=>{h.once("value").then(C=>{if(C.val()!==!0){setTimeout(b,2e3);return}f.onDisconnect().remove().then(()=>{f.set({online:!0,time:Date.now()})})})};b();const w=c.on("child_added",C=>{v(_=>({..._,[C.key]:C.val()}))}),z=c.on("child_changed",C=>{v(_=>({..._,[C.key]:C.val()}))}),P=c.on("child_removed",C=>{v(_=>{const U={..._};return delete U[C.key],U})}),k=()=>{f.remove()};return window.addEventListener("beforeunload",k),window.addEventListener("pagehide",k),()=>{c.off("child_added",w),c.off("child_changed",z),c.off("child_removed",P),window.removeEventListener("beforeunload",k),window.removeEventListener("pagehide",k),f.remove()}},[a]);const Ec=s=>{r(s),localStorage.setItem(jl,s),localStorage.setItem("esc-joined","true"),W(),j(d=>({...d,enter:!0}))},zc=()=>j(s=>({...s,editMode:!s.editMode})),Ic=()=>{if(!a){Xe("Bitte einloggen!","error");return}se(s=>({...s,battleHidden:!s.battleHidden}))},Tc=()=>{if(!g.yearId)return;if(!de(g.yearId).shows[g.tab]){Xe("Live-Modus geht nur in einer Show!","error");return}se(d=>{const c={...d,liveState:{...d.liveState}},f=c.liveState[g.yearId]||{activeTab:null,index:0};return f.activeTab===g.tab?c.liveState[g.yearId]={...f,activeTab:null}:c.liveState[g.yearId]={...f,activeTab:g.tab,index:0},c})},Pc=s=>{if(!g.yearId)return;const d=il();x(s>d?1:-1),se(c=>{const f={...c,liveState:{...c.liveState}};return f.liveState[g.yearId]={...f.liveState[g.yearId]||{activeTab:g.tab},index:parseInt(s)||0},f})},_c=()=>{if(!g.yearId)return;const s=de(g.yearId),d=s.shows[g.tab]||[];if(!d.length)return;x(1);const c=il(),f=(c+1)%d.length;se(h=>{const b={...h,liveState:{...h.liveState}};return b.liveState[g.yearId]={...b.liveState[g.yearId]||{activeTab:g.tab},index:f},b})},Lc=()=>{if(!g.yearId)return;const s=de(g.yearId),d=s.shows[g.tab]||[];if(!d.length)return;x(-1);const c=il(),f=(c-1+d.length)%d.length;se(h=>{const b={...h,liveState:{...h.liveState}};return b.liveState[g.yearId]={...b.liveState[g.yearId]||{activeTab:g.tab},index:f},b})},Rc=(s,d)=>{se(c=>{const f={...c,qualPred:{...c.qualPred}};return f.qualPred[s]={...f.qualPred[s]||{}},f.qualPred[s][d]===void 0?f.qualPred[s][d]=!1:delete f.qualPred[s][d],f})},Ei=()=>j(s=>({...s,yearId:null,view:"home",enter:!0})),Ka=s=>{const d=de(s);j(c=>({...c,yearId:s,view:"year",tab:d&&d.shows.sf1?"sf1":d&&d.shows.sf2?"sf2":d&&d.shows.final?"final":"overview",subTab:"points",sortMode:"order",ovSubTab:"semis",editMode:!1,enter:!0}))},Fc=()=>j(s=>({...s,view:"compare",enter:!0})),Oc=()=>j(s=>({...s,view:"library",enter:!0})),Ac=s=>{L("confirm",{title:"Delete Song",text:"Delete from library?",onYes:()=>{se(d=>({...d,songs:d.songs.filter(c=>c.id!==s)}))}})},Ht=s=>j(d=>({...d,tab:s,subTab:"points",sortMode:"order",ovSubTab:"semis",editMode:!1,enter:!0})),Mc=()=>{const s=de(g.yearId);L("confirm",{title:"Contest löschen",text:"Willst du diesen kompletten Contest löschen?",onYes:()=>{se(d=>({...d,years:d.years.filter(c=>c!==s)})),j(d=>({...d,yearId:null,view:"home",enter:!0}))}})},zi=s=>{const d=de(g.yearId);d&&!d.shows[s]&&se(c=>({...c,years:c.years.map(f=>{if(f.id!==g.yearId)return f;const h=du[s]||25,b=[];for(let w=1;w<=h;w++)b.push({id:f.id+"-"+s+"-"+w});return{...f,shows:{...f.shows,[s]:b}}})}))},Ii=s=>{L("confirm",{title:"Show entfernen",text:"Möchtest du "+Sl[s]+" wirklich entfernen? Alle Tipps und Einträge gehen verloren.",onYes:()=>{se(d=>({...d,years:d.years.map(c=>{if(c.id!==g.yearId)return c;const f={...c.shows};return delete f[s],{...c,shows:f}})})),j(d=>{const c=de(g.yearId);if(!c)return d;const f=d.tab===s?c.shows.sf1?"sf1":c.shows.sf2?"sf2":c.shows.final?"final":"overview":d.tab,h=d.sbShow===s?c.shows.final?"final":Object.keys(c.shows).filter(b=>b!==s)[0]:d.sbShow;return{...d,tab:f,sbShow:h}})}})},Dc=(s,d)=>{d=+d,!(d<=0)&&se(c=>({...c,years:c.years.map(f=>{if(f.id!==g.yearId)return f;const h=[...f.shows[s]||[]],b=h[d];return h[d]=h[d-1],h[d-1]=b,{...f,shows:{...f.shows,[s]:h}}})}))},Bc=(s,d)=>{d=+d;const c=de(g.yearId),f=c.shows[s]||[];d>=f.length-1||se(h=>({...h,years:h.years.map(b=>{if(b.id!==g.yearId)return b;const w=[...b.shows[s]||[]],z=w[d];return w[d]=w[d+1],w[d+1]=z,{...b,shows:{...b.shows,[s]:w}}})}))},Uc=s=>{se(d=>({...d,years:d.years.map(c=>{if(c.id!==g.yearId)return c;const f=[...c.shows[s]||[]];return f.push({id:c.id+"-"+s+"-"+(f.length+1)}),{...c,shows:{...c.shows,[s]:f}}})}))},Hc=s=>{se(d=>({...d,years:d.years.map(c=>{if(c.id!==g.yearId)return c;const f=[...c.shows[s]||[]];return f.length<=0?c:(f.pop(),{...c,shows:{...c.shows,[s]:f}})})}))},Wc=s=>{se(d=>({...d,years:d.years.map(c=>{const f={};for(const h in c.shows)f[h]=c.shows[h].map(b=>b.id===s?{...b,dq:!b.dq}:b);return{...c,shows:f}})}))},$c=(s,d,c)=>{se(f=>({...f,years:f.years.map(h=>{const b={};for(const w in h.shows){const z=h.shows[w].map(P=>{if(P.id!==s)return P;const k={...P};return d===""||parseFloat(d)===Or(P.id)?delete k.customNo:k.customNo=isNaN(parseFloat(d))?d:parseFloat(d),k.autoFinal=c,c&&delete k.place,k});Cc(z),b[w]=z}return{...h,shows:b}})})),W()},Vc=s=>{const{artist:d,title:c,cc:f,year:h,editId:b,assign:w}=s;!d||!c||!f||(se(z=>{const P={...z,songs:[...z.songs]};let k;if(b){const C=P.songs.findIndex(_=>_.id===b);C!==-1&&(P.songs[C]={...P.songs[C],artist:d,title:c,cc:f,year:h},k=b)}else k="s"+Date.now().toString(36),P.songs.push({id:k,cc:f,artist:d,title:c,year:h});return w&&(P.years=P.years.map(C=>{const _={};for(const U in C.shows)_[U]=C.shows[U].map(ae=>ae.id===w?{...ae,songId:k}:ae);return{...C,shows:_}})),P}),w?(W(),setTimeout(()=>L("rating",{eId:w,jurId:n}),50)):W())},Qc=s=>{const{year:d,suffix:c,city:f}=s,h=parseInt(d);if(!h)return;const b=h+(c?"_"+c.toLowerCase():"_main");if(de(b))return;const w={};for(const z of["sf1","sf2","final"]){w[z]=[];for(let P=1;P<=du[z];P++)w[z].push({id:b+"-"+z+"-"+P})}se(z=>{const P={...z,years:[...z.years,{id:b,year:h,suffix:c,city:f||void 0,shows:w}]};return P.years.sort((k,C)=>C.year-k.year),P}),W(),j(z=>({...z,yearId:b,view:"year",tab:"sf1",subTab:"points",sortMode:"order",ovSubTab:"semis",enter:!0}))},Yc=(s,d)=>{se(c=>({...c,years:c.years.map(f=>f.id===g.yearId?{...f,city:s||void 0,hostCc:d||void 0}:f)})),W()},Gc=s=>{se(d=>({...d,years:d.years.map(c=>c.id===g.yearId?{...c,showDates:s}:c)})),W()},Kc=s=>{const d={};s.forEach(c=>{const f=c.value.trim();f&&(d[c.dataset.jn]=f)}),se(c=>({...c,jury:c.jury.map(f=>d[f.id]?{...f,name:d[f.id]}:f)})),W()},qc=s=>{if(!a){Xe("Bitte einloggen!","error");return}try{const d=JSON.parse(s);se(c=>{const f={...c};return d.jury&&(f.jury=d.jury),d.songs&&(f.songs=d.songs),d.years&&(f.years=d.years,f.years.sort((h,b)=>b.year-h.year||b.id.localeCompare(h.id))),d.ratings&&(f.ratings=d.ratings),d.pred&&(f.pred=d.pred),d.qualPred&&(f.qualPred=d.qualPred),d.liveState&&(f.liveState=d.liveState),f}),W(),Xe("JSON aktualisiert!","success")}catch(d){L("alert",{title:"Fehler",text:"Ungültiges JSON-Format: "+d.message})}},Jc=s=>{se(d=>{const c={...d},f={};c.jury.forEach(w=>f[w.id]=w),s.jury&&s.jury.forEach(w=>f[w.id]=w),c.jury=Object.values(f);const h={};c.songs.forEach(w=>h[w.id]=w),s.songs&&s.songs.forEach(w=>h[w.id]=w),c.songs=Object.values(h);const b={};return c.years.forEach(w=>b[w.id]=w),s.years&&s.years.forEach(w=>b[w.id]=w),c.years=Object.values(b).sort((w,z)=>z.year-w.year||z.id.localeCompare(w.id)),["ratings","pred","qualPred","liveState"].forEach(w=>{if(c[w]={...c[w]||{}},s[w])for(const z in s[w])s[w].hasOwnProperty(z)&&(c[w][z]=Object.assign({},c[w][z]||{},s[w][z]))}),c}),W(),Xe("Daten erfolgreich importiert!","success")},Xc=()=>{if(!a){Xe("Bitte einloggen!","error");return}const s=new Blob([JSON.stringify(e,null,1)],{type:"application/json"}),d=document.createElement("a");d.href=URL.createObjectURL(s),d.download="esc.json",d.click()},Zc=()=>{const s="👤 "+ee(gt(n)),d=Object.keys(fe),c=d.length>0?o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,background:"rgba(74, 222, 128, 0.1)",padding:"4px 8px",borderRadius:999,border:"1px solid rgba(74, 222, 128, 0.3)",marginRight:10,height:36},children:[o.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:"var(--green)",boxShadow:"0 0 8px var(--green)",flexShrink:0},title:"Online"}),d.map(w=>{const z=fe[w]&&fe[w].photoURL,P=gt(w).charAt(0).toUpperCase();return o.jsxs("div",{title:gt(w),style:{position:"relative",width:28,height:28},children:[o.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"var(--gold)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:800,color:"#1d1d1d",border:"2px solid var(--panel-solid)",boxSizing:"border-box"},children:P}),z&&o.jsx("img",{src:z,alt:gt(w),style:{position:"absolute",inset:0,width:28,height:28,borderRadius:"50%",objectFit:"cover",border:"2px solid var(--panel-solid)",display:"block",zIndex:1,background:"var(--panel2-solid)"},onError:k=>{k.target.style.display="none"}})]},w)})]}):null,f=a?o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,background:"var(--panel2)",padding:"5px 12px",borderRadius:999,border:"1px solid var(--line)"},children:[o.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--ink)"},children:ee(a.displayName||a.email)}),o.jsx("button",{className:"ghost sm danger",onClick:Fn,style:{padding:"3px 10px",fontSize:"0.75rem"},children:"Logout"})]}):o.jsxs("button",{onClick:It,style:{display:"inline-flex",alignItems:"center",gap:8,background:"#4285f4",borderColor:"#4285f4",color:"#fff",fontWeight:700,padding:"7px 16px",borderRadius:999},children:[o.jsxs("svg",{style:{width:15,height:15,fill:"currentColor"},viewBox:"0 0 24 24",children:[o.jsx("path",{d:"M21.35 11.1h-9.17v2.98h5.37c-.24 1.25-.97 2.31-2.07 3.03v2.49h3.33c1.95-1.8 3.08-4.45 3.08-7.5 0-.67-.06-1.33-.17-1.95z"}),o.jsx("path",{d:"M12.18 21c2.75 0 5.06-.91 6.75-2.49l-3.33-2.49c-.91.61-2.08.97-3.42.97-2.63 0-4.86-1.78-5.66-4.17H3.04v2.57C4.74 18.76 8.21 21 12.18 21z"}),o.jsx("path",{d:"M6.52 12.82c-.2-.61-.32-1.26-.32-1.93s.12-1.32.32-1.93V6.39H3.04C2.37 7.72 2 9.21 2 10.89s.37 3.17 1.04 4.5l3.48-2.57z"}),o.jsx("path",{d:"M12.18 4.78c1.5 0 2.85.52 3.91 1.52l2.93-2.93C17.23 1.67 14.92.78 12.18.78 8.21.78 4.74 3.02 3.04 6.39l3.48 2.57c.8-2.39 3.03-4.17 5.66-4.17z"})]})," Google Login"]}),h={display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px",borderRadius:999,fontWeight:700,fontSize:"0.85rem",letterSpacing:"0.01em",background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},b={...h,background:"linear-gradient(145deg, rgba(255,209,102,0.15) 0%, rgba(40,24,82,0.95) 100%)",border:"1px solid rgba(255,209,102,0.55)",color:"var(--gold)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.12), 0 2px 8px rgba(0,0,0,0.35), 0 0 12px rgba(255,209,102,0.12)"};return o.jsxs("header",{children:[o.jsx("div",{className:"brand",children:"Eurovision Song Contest"}),o.jsxs("div",{className:"who",children:[c,f,o.jsx("button",{onClick:()=>L("welcome"),style:b,onMouseEnter:w=>{w.currentTarget.style.transform="translateY(-1px)",w.currentTarget.style.borderColor="rgba(255,209,102,0.9)",w.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(255,209,102,0.25)"},onMouseLeave:w=>{w.currentTarget.style.transform="translateY(0)",w.currentTarget.style.borderColor="rgba(255,209,102,0.55)",w.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 2px 8px rgba(0,0,0,0.35), 0 0 12px rgba(255,209,102,0.12)"},children:s}),o.jsx("button",{onClick:()=>{window.location.href=window.location.pathname+"?v="+Date.now()},title:"Cache leeren & neu laden",style:{...h,padding:"9px 14px"},onMouseEnter:w=>{w.currentTarget.style.transform="translateY(-1px)",w.currentTarget.style.borderColor="rgba(148,94,255,0.7)"},onMouseLeave:w=>{w.currentTarget.style.transform="translateY(0)",w.currentTarget.style.borderColor="rgba(148,94,255,0.35)"},children:"🔄"}),o.jsxs("button",{onClick:()=>L("settings"),title:"Settings, Export, Import",style:h,onMouseEnter:w=>{w.currentTarget.style.transform="translateY(-1px)",w.currentTarget.style.borderColor="rgba(148,94,255,0.7)",w.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:w=>{w.currentTarget.style.transform="translateY(0)",w.currentTarget.style.borderColor="rgba(148,94,255,0.35)",w.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[o.jsx("span",{style:{fontSize:"1rem"},children:"⚙️"})," Settings"]})]})]})},qa=()=>{const s=[...e.years].sort((k,C)=>C.year-k.year||C.id.localeCompare(k.id)),d=new Date;d.setHours(0,0,0,0);const c=d.toISOString().slice(0,10);let f=null;const h=[];for(const k of s){const C=k.showDates&&k.showDates.final||null;C&&c<=C&&h.push({y:k,sortKey:C})}h.length&&(h.sort((k,C)=>k.sortKey.localeCompare(C.sortKey)),f=h[0].y.id);const b=k=>{const C=e.liveState[k.id];return!!(C&&C.activeTab)},w=k=>{const C=new Set;let _=0,U=0;for(const Y in k.shows){const $=k.shows[Y]||[];for(let N=0;N<$.length;N++){const I=$[N];if(!I.songId||C.has(I.songId))continue;C.add(I.songId);const D=mt(I);for(const re of e.jury){const X=D[re.id];X!=null&&(_+=X,U++)}}}const ae=C.size;return{avg:U>0?_/U:0,count:ae}},z=k=>{if(!k)return"";const C=new Date(k+"T00:00:00");if(isNaN(C))return k;const _=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"];return C.getDate()+". "+_[C.getMonth()]},P=f?s.find(k=>k.id===f):null;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"home-hero",children:[o.jsx("h1",{className:"home-hero-title",children:"Eurovision Song Contest"}),o.jsx("p",{className:"home-hero-sub",children:"Scoreboard · Predictions · Live Mode"})]}),o.jsxs("div",{className:"home-actions",children:[o.jsxs("button",{onClick:Oc,className:"home-action-btn home-action-primary",children:[o.jsx("span",{className:"home-action-icon",children:"🎵"}),o.jsxs("span",{className:"home-action-text",children:[o.jsx("b",{children:"Song Library"}),o.jsx("small",{children:"Alle Songs durchsuchen"})]})]}),o.jsxs("button",{onClick:Fc,className:"home-action-btn",children:[o.jsx("span",{className:"home-action-icon",children:"🌍"}),o.jsxs("span",{className:"home-action-text",children:[o.jsx("b",{children:"Country Comparison"}),o.jsx("small",{children:"Länder im Vergleich"})]})]})]}),P&&(()=>{const k=P,C=w(k),_=b(k),U=k.showDates||{},ae=k.hostCc?`https://flagcdn.com/${k.hostCc}.svg`:"",Q=k.year+(k.suffix?" ("+k.suffix+")":""),Y=[];return U.sf1&&Y.push({k:"SF1",v:z(U.sf1)}),U.sf2&&Y.push({k:"SF2",v:z(U.sf2)}),U.final&&Y.push({k:"Final",v:z(U.final)}),o.jsxs("div",{className:"upcoming-hero",onClick:()=>Ka(k.id),style:{position:"relative",minHeight:"160px"},children:[o.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"linear-gradient(135deg, #1a0f33 0%, #2a1749 50%, #120a24 100%)",zIndex:0}}),o.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"radial-gradient(circle at 20% 50%, rgba(168,85,247,0.15) 0%, transparent 60%)",zIndex:0}}),ae&&o.jsx("img",{src:ae,alt:"","aria-hidden":"true",style:{position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",height:"100%",maxWidth:"60%",objectFit:"cover",opacity:.9,filter:"saturate(1.1) contrast(1.05)",pointerEvents:"none",zIndex:0,maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)"}}),o.jsxs("div",{className:"upcoming-hero-inner",style:{position:"relative",zIndex:1},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",width:"100%",marginBottom:16},children:[o.jsx("span",{className:"upcoming-hero-badge",children:"⚡ Upcoming"}),_&&o.jsxs("span",{className:"home-badge home-badge-live",style:{marginLeft:8},children:[o.jsx("span",{className:"home-badge-dot"}),"LIVE"]})]}),o.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",paddingRight:"35%"},children:o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[o.jsx("div",{className:"upcoming-hero-year",style:{fontSize:"2.8rem",marginBottom:4},children:ee(Q)}),k.city&&o.jsx("div",{className:"upcoming-hero-host",style:{justifyContent:"flex-start",fontSize:"1.3rem",marginTop:0,marginBottom:12},children:o.jsx("span",{children:ee(k.city)})}),o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[o.jsx("div",{className:"upcoming-hero-dates",style:{margin:0,justifyContent:"flex-start"},children:Y.length>0?Y.map($=>o.jsxs("div",{className:"upcoming-date-chip",style:{minWidth:"auto",padding:"6px 12px"},children:[o.jsx("span",{className:"upcoming-date-label",children:$.k}),o.jsx("span",{className:"upcoming-date-value",children:$.v})]},$.k)):o.jsx("div",{className:"upcoming-date-empty",style:{padding:"6px 12px"},children:"Noch kein Datum"})}),o.jsxs("div",{className:"upcoming-hero-stats",style:{margin:0,justifyContent:"flex-start"},children:[o.jsxs("div",{className:"home-card-stat",children:[o.jsx("span",{className:"home-card-stat-val",children:C.avg.toFixed(1)}),o.jsx("span",{className:"home-card-stat-lbl",children:"Ø Pts"})]}),o.jsx("div",{className:"home-card-stat-divider"}),o.jsxs("div",{className:"home-card-stat",children:[o.jsx("span",{className:"home-card-stat-val",children:C.count}),o.jsx("span",{className:"home-card-stat-lbl",children:"Songs"})]})]})]})]})})]})]})})(),s.length?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"home-section-label",children:[o.jsx("span",{children:"All Contests"}),o.jsx("span",{className:"home-section-count",children:s.length})]}),o.jsx("div",{className:"home-grid",children:s.map(k=>{const C=k.year+(k.suffix?" ("+k.suffix+")":""),_=w(k),U=b(k),ae=k.hostCc?`https://flagcdn.com/${k.hostCc}.svg`:"";return o.jsxs("div",{className:"home-card"+(U?" is-live":""),onClick:()=>Ka(k.id),children:[o.jsx("div",{className:"home-card-flag",style:{backgroundImage:ae?`url('${ae}')`:"linear-gradient(135deg, #3b2367, #1a1033)"}}),U&&o.jsx("div",{className:"home-card-top",children:o.jsxs("span",{className:"home-badge home-badge-live",children:[o.jsx("span",{className:"home-badge-dot"}),"LIVE"]})}),o.jsxs("div",{className:"home-card-body",children:[o.jsx("div",{className:"home-card-year",children:ee(C)}),k.city&&o.jsx("div",{className:"home-card-host",children:o.jsx("span",{children:ee(k.city)})})]}),o.jsxs("div",{className:"home-card-footer",children:[o.jsxs("div",{className:"home-card-stat",children:[o.jsx("span",{className:"home-card-stat-val",children:_.avg.toFixed(1)}),o.jsx("span",{className:"home-card-stat-lbl",children:"Ø Pts"})]}),o.jsxs("div",{className:"home-card-stat",children:[o.jsx("span",{className:"home-card-stat-val",children:_.count}),o.jsx("span",{className:"home-card-stat-lbl",children:"Songs"})]})]})]},k.id)})})]}):o.jsx("p",{className:"empty",children:"No Eurovision contest added yet. Use the ＋ button in the bottom right corner."})]})},ep=s=>o.jsxs("div",{className:"live-fallback",children:[o.jsxs("h2",{children:[o.jsx("span",{className:"live-dot"})," Live Modus ist aktiv"]}),o.jsx("p",{children:"Wähle eine Show aus, um beizutreten:"}),o.jsxs("div",{className:"live-fallback-shows",children:[s.shows.sf1&&o.jsx("button",{onClick:()=>Ht("sf1"),children:"Semi-final 1"}),s.shows.sf2&&o.jsx("button",{onClick:()=>Ht("sf2"),children:"Semi-final 2"}),s.shows.final&&o.jsx("button",{onClick:()=>Ht("final"),children:"Grand Final"})]})]}),tp=s=>{const d=de(g.yearId),c=d.shows[s]||[];if(c.length===0)return ep(d);let f=il();f>=c.length&&(f=0);const h=c[f],b=me(h.songId),w=h.autoFinal!==void 0?h.autoFinal:b&&["de","fr","it","es","gb","kr"].indexOf(b.cc)!==-1;let z=0,P="➔";if(s==="final")P=f+1;else if(!w){for(let I=0;I<=f;I++){const D=me(c[I].songId);(c[I].autoFinal!==void 0?c[I].autoFinal:D&&["de","fr","it","es","gb","kr"].indexOf(D.cc)!==-1)||z++}P=z}const k=me(h.songId),C=mt(h);let _=null,U=null;if(s==="sf1"||s==="sf2")h.place&&(_=h.place);else if(k){if(d.shows.sf1){const I=d.shows.sf1.find(D=>D.songId===k.id);I&&I.place&&(_=I.place)}if(!_&&d.shows.sf2){const I=d.shows.sf2.find(D=>D.songId===k.id);I&&I.place&&(_=I.place)}}if(k&&d.shows.final){const I=d.shows.final.find(D=>D.songId===k.id);I&&I.place&&(U=I.place)}const ae=e.jury.map(I=>{const D=C[I.id],re=I.id===n||l&&I.id==="j3",X=D??"–";let te="",E="var(--muted)";if(D!=null){const J=Yt(D),G=J.match(/color:([^;]+)/);G&&(E=G[1]),te=J.replace(/color:[^;]+;?/,"")}const R=h.songId?"rating_"+h.songId+"_"+I.id:"";return o.jsxs("div",{className:"live-jury-box"+(re?" editable":""),"data-live-flash-key":R||void 0,style:Tt(te),onClick:re?()=>L("rating",{eId:h.id,jurId:I.id}):void 0,title:re?"Punkte ändern":void 0,children:[o.jsx("div",{className:"jury-name",style:{color:E},children:ee(I.name)}),o.jsx("div",{className:"live-big-number",style:{color:E},children:X})]},I.id)}),Q=[];if(_){const I=parseInt(_),D=I===1?"gold":I===2?"silver":I===3?"bronze":"",re=s==="sf1"?"SF1":"SF2";Q.push(o.jsxs("div",{className:"live-current-place "+D,style:{marginRight:8,flexDirection:"column",padding:"6px 14px",lineHeight:1.1},children:[o.jsx("span",{style:{fontSize:"0.6rem",opacity:.8},children:re}),o.jsxs("span",{children:[_,"."]})]},"semi"))}if(U){const I=parseInt(U),D=I===1?"gold":I===2?"silver":I===3?"bronze":"";Q.push(o.jsxs("div",{className:"live-current-place "+D,style:{flexDirection:"column",padding:"6px 14px",lineHeight:1.1},children:[o.jsx("span",{style:{fontSize:"0.6rem",opacity:.8},children:"GF"}),o.jsxs("span",{children:[U,"."]})]},"final"))}const Y=c.map((I,D)=>{const re=me(I.songId),X=D===f,te=(()=>{if(s==="final")return D+1;const E=me(c[D].songId);if(c[D].autoFinal!==void 0?c[D].autoFinal:E&&["de","fr","it","es","gb","kr"].indexOf(E.cc)!==-1)return"AQ";let J=0;for(let G=0;G<=D;G++){const le=me(c[G].songId);(c[G].autoFinal!==void 0?c[G].autoFinal:le&&["de","fr","it","es","gb","kr"].indexOf(le.cc)!==-1)||J++}return J})();return o.jsxs("div",{onClick:()=>Pc(D),title:re?re.title:"Kein Song",style:{position:"relative",width:64,height:64,borderRadius:14,cursor:"pointer",background:X?"linear-gradient(145deg, rgba(255,209,102,0.25) 0%, rgba(30,18,60,0.98) 70%)":"linear-gradient(145deg, rgba(30,18,60,0.85) 0%, rgba(15,8,32,0.95) 100%)",border:X?"2.5px solid var(--gold)":"1.5px solid rgba(148,94,255,0.3)",boxShadow:X?"0 0 20px rgba(255,209,102,0.5), inset 0 1px 0 rgba(255,255,255,0.15)":"inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 6px rgba(0,0,0,0.3)",transition:"all 0.2s ease",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",flexShrink:0},onMouseEnter:E=>{X||(E.currentTarget.style.borderColor="rgba(168,85,247,0.7)",E.currentTarget.style.transform="scale(1.08)")},onMouseLeave:E=>{X||(E.currentTarget.style.borderColor="rgba(148,94,255,0.3)",E.currentTarget.style.transform="scale(1)")},children:[re?o.jsx("img",{src:`https://flagcdn.com/w80/${re.cc}.png`,alt:re.cc,style:{width:X?42:34,height:X?28:22,objectFit:"cover",borderRadius:4,boxShadow:"0 0 0 1.5px rgba(255,255,255,0.3)",filter:X?"none":"grayscale(0.4) brightness(0.85)",transition:"all 0.2s ease"}}):o.jsx("span",{style:{fontSize:"1.2rem",color:"var(--muted-dim)"},children:"–"}),o.jsx("div",{style:{position:"absolute",top:2,left:2,fontSize:"0.55rem",fontWeight:900,fontFamily:"var(--display)",padding:"1px 5px",borderRadius:5,background:X?"rgba(255,209,102,0.9)":"rgba(5,3,15,0.85)",color:X?"#1d1d1d":"var(--muted)",border:X?"1px solid #fff6cc":"1px solid rgba(255,255,255,0.15)",letterSpacing:"0.03em",lineHeight:1.2},children:te}),X&&o.jsx("div",{style:{position:"absolute",bottom:0,right:0,width:0,height:0,borderStyle:"solid",borderWidth:"0 0 16px 16px",borderColor:"transparent transparent var(--gold) transparent"}})]},I.id)});let $;k?$=o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",width:"100%",position:"relative",zIndex:1,paddingTop:10},children:[o.jsx("div",{className:"live-cc-badge",children:ee(Cl(k.cc))}),o.jsxs("div",{style:{flex:1,minWidth:0,paddingLeft:70},children:[Q.length>0&&o.jsx("div",{style:{display:"flex",gap:6,marginBottom:10,flexWrap:"wrap",justifyContent:"center"},children:Q}),o.jsx("div",{style:{fontSize:"0.78rem",color:"var(--gold)",fontWeight:800,marginBottom:6,letterSpacing:"0.12em",textTransform:"uppercase"},children:s==="final"?`● Now Playing · Startnummer ${P}`:w?"● Now Playing · Auto Qualifier":`● Now Playing · Startnummer ${P}`}),o.jsx("h2",{style:{fontSize:"2.4rem",margin:"0 0 4px",fontWeight:800,letterSpacing:"-0.02em",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:ee(k.title)}),o.jsxs("p",{style:{fontSize:"1.2rem",color:"var(--muted)",margin:0,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[ee(k.artist)," · ",ee(Ze[k.cc]||k.cc.toUpperCase())]})]})]}):$=o.jsxs("div",{style:{flex:1,textAlign:"center",padding:14},children:[o.jsxs("h3",{children:["Startnummer ",f+1]}),o.jsx("p",{className:"empty",style:{margin:"4px 0 14px"},children:"Kein Song zugewiesen."}),o.jsx("button",{className:"primary",onClick:()=>L("picker",{entryId:h.id}),children:"＋ Song hinzufügen"})]});const N=k?"https://flagcdn.com/"+k.cc+".svg":"";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"live-mode-banner",style:{padding:"0",background:"transparent",border:"none",boxShadow:"none"},children:[o.jsxs("div",{style:{position:"relative"},children:[o.jsxs("div",{style:{position:"absolute",top:14,left:14,zIndex:10,display:"flex",alignItems:"center",gap:8,pointerEvents:"none"},children:[o.jsx("div",{className:"live-dot",style:{width:18,height:18,border:"2.5px solid var(--bg)",boxShadow:"0 0 12px rgba(255,45,149,0.8), 0 0 24px rgba(255,45,149,0.4)"},title:"Live"}),o.jsx("span",{style:{fontFamily:"var(--display)",fontWeight:900,fontSize:"0.75rem",letterSpacing:"0.16em",color:"var(--red)",textShadow:"0 0 10px rgba(255,45,149,0.9), 0 0 20px rgba(255,45,149,0.5)"},children:"LIVE"})]}),o.jsxs("div",{className:"live-current-card live-song-slide "+(p>0?"from-right":"from-left"),style:{"--live-flag-url":`url('${N}')`,padding:"56px 36px",minHeight:"280px",borderRadius:26},children:[o.jsxs("div",{style:{position:"absolute",top:16,right:16,display:"flex",gap:8,zIndex:10},children:[o.jsx("button",{onClick:Lc,title:"Vorheriger Song",style:{width:38,height:38,borderRadius:"50%",background:"rgba(5,3,15,0.85)",color:"#fff",fontWeight:800,fontSize:"1rem",border:"1.5px solid rgba(255,255,255,0.25)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,transition:"transform 0.15s ease, border-color 0.15s ease, background 0.15s ease",backdropFilter:"none"},onMouseEnter:I=>{I.currentTarget.style.transform="scale(1.1)",I.currentTarget.style.borderColor="var(--gold)",I.currentTarget.style.background="rgba(255,209,102,0.2)"},onMouseLeave:I=>{I.currentTarget.style.transform="scale(1)",I.currentTarget.style.borderColor="rgba(255,255,255,0.25)",I.currentTarget.style.background="rgba(5,3,15,0.85)"},children:"◀"}),o.jsx("button",{onClick:_c,title:"Nächster Song",style:{width:38,height:38,borderRadius:"50%",background:"rgba(5,3,15,0.85)",color:"#fff",fontWeight:800,fontSize:"1rem",border:"1.5px solid rgba(255,255,255,0.25)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,transition:"transform 0.15s ease, border-color 0.15s ease, background 0.15s ease",backdropFilter:"none"},onMouseEnter:I=>{I.currentTarget.style.transform="scale(1.1)",I.currentTarget.style.borderColor="var(--gold)",I.currentTarget.style.background="rgba(255,209,102,0.2)"},onMouseLeave:I=>{I.currentTarget.style.transform="scale(1)",I.currentTarget.style.borderColor="rgba(255,255,255,0.25)",I.currentTarget.style.background="rgba(5,3,15,0.85)"},children:"▶"})]}),$]},f)]}),o.jsx("div",{className:"live-flow-jury",style:{display:"flex",gap:10,marginTop:16,flexWrap:"wrap"},children:ae},"jury-"+f)]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:36,marginBottom:16},children:[o.jsx("h3",{style:{margin:0,fontSize:"1.2rem"},children:"Running Order"}),o.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:800,color:"var(--muted)",background:"var(--panel2-solid)",padding:"3px 10px",borderRadius:999,border:"1px solid var(--line)",letterSpacing:"0.08em"},children:[c.length," Songs"]})]}),o.jsx("div",{className:"live-flow-queue",style:{display:"flex",flexWrap:"wrap",gap:10,paddingTop:4,paddingBottom:8},children:Y},"queue-"+f)]})},np=()=>{const s=de(g.yearId);if(!s)return qa();let d=g.tab;!s.shows[d]&&d!=="overview"&&d!=="battle"&&d!=="sb"&&(d=s.shows.sf1?"sf1":s.shows.sf2?"sf2":s.shows.final?"final":"overview");const c=Nc();let f;s.shows[d]&&c?f=tp(d):s.shows[d]?f=ip(d):d==="overview"?f=lp():d==="battle"?f=op():d==="sb"&&(f=ap());const h=s.year+(s.suffix?" ("+s.suffix+")":""),b=!!s.shows.sf1,w=!!s.shows.sf2,z=!!s.shows.final,P=o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:14,flexWrap:"wrap",gap:12},children:[o.jsx("button",{className:"ghost",onClick:Ei,style:{paddingLeft:0,fontSize:"1.02rem"},children:"← Zurück"}),o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[o.jsx("button",{className:"ghost "+(g.editMode?"primary":""),onClick:zc,children:"✏️ Edit"}),g.editMode&&o.jsx("button",{className:"ghost sm",onClick:()=>L("editDates"),title:"Show-Daten eintragen",children:"📅 Dates"}),!c&&g.editMode&&o.jsxs(o.Fragment,{children:[b?o.jsx("button",{className:"ghost sm danger",onClick:()=>Ii("sf1"),children:"− SF1"}):o.jsx("button",{className:"ghost sm",onClick:()=>zi("sf1"),children:"＋ SF1"}),w?o.jsx("button",{className:"ghost sm danger",onClick:()=>Ii("sf2"),children:"− SF2"}):o.jsx("button",{className:"ghost sm",onClick:()=>zi("sf2"),children:"＋ SF2"}),z?o.jsx("button",{className:"ghost sm danger",onClick:()=>Ii("final"),children:"− Final"}):o.jsx("button",{className:"ghost sm",onClick:()=>zi("final"),children:"＋ Final"}),o.jsx("button",{className:"ghost sm danger",onClick:Mc,children:"Contest löschen"})]})]})]});let k=null;if(s.city||s.hostCc){const $=g.editMode?o.jsx("button",{className:"ghost sm",onClick:()=>L("editCity"),style:{padding:"2px 8px",fontSize:"0.72rem",marginLeft:6},title:"Host ändern",children:"✏️"}):null;k=o.jsxs("div",{className:"host-pill",children:[o.jsx("div",{className:"host-pill-flag",children:s.hostCc?o.jsx(Qt,{cc:s.hostCc}):"🌍"}),o.jsx("div",{className:"host-pill-divider"}),o.jsxs("div",{className:"host-pill-text",children:[s.hostCc&&o.jsx("span",{className:"host-pill-cc",children:ee(Ze[s.hostCc]||s.hostCc.toUpperCase())}),s.city&&o.jsx("span",{className:"host-pill-city",children:ee(s.city)})]}),$]})}else g.editMode&&(k=o.jsx("div",{style:{textAlign:"center",margin:"10px 0 22px"},children:o.jsx("button",{className:"ghost sm",onClick:()=>L("editCity"),children:"＋ Host City hinzufügen"})}));const C=o.jsxs(o.Fragment,{children:[o.jsxs("h1",{className:"yeartitle",style:{marginBottom:k?4:24},children:["Eurovision ",ee(h)]}),k]}),_=c?{background:"rgba(255,255,255,0.04)",color:"var(--muted)",borderColor:"rgba(148,94,255,0.25)",fontWeight:600,fontSize:"0.82rem",padding:"7px 14px",opacity:.75}:{background:"linear-gradient(135deg, rgba(255,45,149,0.14) 0%, rgba(168,85,247,0.1) 100%)",color:"#ffd6ea",borderColor:"rgba(255,45,149,0.35)",fontWeight:700,fontSize:"0.85rem",padding:"8px 18px",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(255,45,149,0.12)"},ae=(e.liveState[g.yearId]||{}).activeTab,Q=o.jsxs("div",{className:"tabs",children:[b&&o.jsx("button",{className:(g.tab==="sf1"?"on":"")+(ae==="sf1"?" live-active":""),onClick:()=>Ht("sf1"),children:"Semi-final 1"}),w&&o.jsx("button",{className:(g.tab==="sf2"?"on":"")+(ae==="sf2"?" live-active":""),onClick:()=>Ht("sf2"),children:"Semi-final 2"}),z&&o.jsx("button",{className:(g.tab==="final"?"on":"")+(ae==="final"?" live-active":"")+" final-tab",onClick:()=>Ht("final"),children:"Grand Final"})]}),Y=o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,marginBottom:20,borderBottom:"1px solid var(--line)",paddingBottom:16},children:[Q,o.jsx("div",{style:{display:"flex",alignItems:"center"},children:s.shows[g.tab]&&o.jsx("button",{onClick:Tc,style:_,onMouseEnter:$=>{c?($.currentTarget.style.opacity="1",$.currentTarget.style.borderColor="rgba(255,77,109,0.6)",$.currentTarget.style.color="#ffb3c1"):($.currentTarget.style.transform="translateY(-1px)",$.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(255,45,149,0.22)")},onMouseLeave:$=>{c?($.currentTarget.style.opacity="0.75",$.currentTarget.style.borderColor="rgba(148,94,255,0.25)",$.currentTarget.style.color="var(--muted)"):($.currentTarget.style.transform="translateY(0)",$.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(255,45,149,0.12)")},title:c?"Live-Modus verlassen":"Live-Modus starten",children:c?o.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,opacity:.9},children:[o.jsx("span",{style:{fontSize:"0.7rem",letterSpacing:"0.1em"},children:"●"}),o.jsx("span",{style:{fontSize:"0.78rem",letterSpacing:"0.04em"},children:"Live verlassen"})]}):o.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:7},children:[o.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:"var(--red)",boxShadow:"0 0 8px var(--red)"}}),o.jsx("span",{style:{letterSpacing:"0.03em"},children:"Live Mode"})]})})}),o.jsxs("div",{className:"tabs",children:[o.jsx("button",{className:g.tab==="battle"?"on":"",onClick:()=>Ht("battle"),children:"Points Battle"}),o.jsx("button",{className:g.tab==="sb"?"on":"",onClick:()=>Ht("sb"),children:"Scoreboard"})]})]});return o.jsxs(o.Fragment,{children:[P,C,Y,f]})},rp=()=>{const s=de(g.yearId);if(!s)return null;const d=[];for(const c in Sl)s.shows[c]&&d.push(o.jsx("button",{className:g.sbShow===c?"on":"",onClick:()=>j(f=>({...f,sbShow:c})),children:Sl[c]},c));return d.push(o.jsx("button",{className:g.sbShow==="all"?"on":"",onClick:()=>j(c=>({...c,sbShow:"all"})),children:"All Songs"},"all")),o.jsx("div",{className:"seg",children:d})};function Tt(s){if(!s)return{};const d={};return s.split(";").forEach(c=>{const[f,...h]=c.split(":");if(!f||!h.length)return;const b=f.trim().replace(/-([a-z])/g,(w,z)=>z.toUpperCase());d[b]=h.join(":").trim()}),d}const lp=()=>{const s=de(g.yearId),d=Ni(),c=!!(s.shows.sf1||s.shows.sf2),f=c?o.jsxs("div",{className:"tabs",style:{border:"none",margin:"18px 0"},children:[o.jsx("button",{className:g.ovSubTab==="semis"?"on":"",onClick:()=>j(P=>({...P,ovSubTab:"semis"})),children:"Semi-finals"}),o.jsx("button",{className:g.ovSubTab==="final"?"on":"",onClick:()=>j(P=>({...P,ovSubTab:"final"})),children:"Grand Final"})]}):null,h=P=>o.jsx("div",{style:{display:"flex",gap:3,marginBottom:8,justifyContent:P?"flex-end":"flex-start",padding:"0 2px"},children:e.jury.map((k,C)=>o.jsx("div",{style:{width:30,textAlign:"center",fontSize:"0.68rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.05em"},title:ee(k.name),children:ee(d[C])},k.id))}),b=P=>{const k=mt(P);return o.jsx("div",{className:"ov-pts",children:e.jury.map(C=>{const _=k[C.id],U=_?Tt(Yt(_)):{};return o.jsx("span",{className:"ov-pt"+(_!=null?"":" none"),style:U,children:_??""},C.id)})})};if(g.ovSubTab==="final"||!c){const P=s.shows.final||[];return o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Overview"}),o.jsx("p",{className:"hint",children:"Everyone's points side by side. Disqualified or non-qualifying countries are greyed out."}),f,o.jsxs("div",{className:"card",style:{marginTop:18},children:[o.jsx("h3",{style:{textAlign:"center",marginBottom:14,fontSize:"1.1rem"},children:"Grand Final"}),h(!1),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:P.map(k=>{const C=me(k.songId),_=k.dq;return o.jsxs("div",{className:"ov-row-item",children:[b(k),C?o.jsx("span",{className:"ov-pill"+(_?" out":""),children:o.jsxs("div",{className:"song-info",children:[o.jsx(Qt,{cc:C.cc}),o.jsx("span",{children:o.jsx("b",{children:ee(C.title)})})]})}):o.jsx("span",{className:"ov-pill out",children:o.jsx("div",{className:"song-info",children:o.jsx("span",{children:"–"})})}),o.jsx("div",{style:{flexGrow:1}}),o.jsx("span",{className:"ov-place",children:k.place?k.place+".":"–"})]},k.id)})})]})]})}const w=(P,k,C)=>{const _=s.shows[P]||[];return o.jsxs("div",{className:"ov-column",children:[o.jsx("div",{className:"ov-col-title",children:k}),h(C),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:_.map(U=>{const ae=me(U.songId),Q=U.place&&U.place>10||U.dq,Y=o.jsx("span",{className:"ov-place",children:U.place?U.place+".":"–"}),$=ae?o.jsx("span",{className:"ov-pill"+(Q?" out":""),children:o.jsxs("div",{className:"song-info",children:[o.jsx(Qt,{cc:ae.cc}),o.jsx("span",{children:o.jsx("b",{children:ee(ae.title)})})]})}):o.jsx("span",{className:"ov-pill out",children:o.jsx("div",{className:"song-info",children:o.jsx("span",{children:"–"})})}),N=b(U);return o.jsx("div",{className:"ov-row-item",children:C?o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{flexGrow:1}}),Y,$,N]}):o.jsxs(o.Fragment,{children:[N,$,o.jsx("div",{style:{flexGrow:1}}),Y]})},U.id)})})]})};let z;return s.shows.sf1&&s.shows.sf2?z=o.jsxs(o.Fragment,{children:[w("sf1","Semi-final 1",!1),w("sf2","Semi-final 2",!0)]}):s.shows.sf1?z=w("sf1","Semi-final 1",!1):s.shows.sf2&&(z=w("sf2","Semi-final 2",!1)),o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Overview"}),o.jsx("p",{className:"hint",children:"Everyone's points side by side. Disqualified or non-qualifying countries are greyed out."}),f,o.jsx("div",{className:"ov-grid-side",children:z})]})},ip=s=>{const d=de(g.yearId),c=d.shows[s]||[],f=Ni(),h={};e.jury.forEach(E=>{h[E.id]=0}),c.forEach(E=>{if(E.songId){const R=mt(E);e.jury.forEach(J=>{R[J.id]&&(h[J.id]+=R[J.id])})}});let b=-1,w=99999;for(const E in h)h[E]>b&&(b=h[E]),h[E]<w&&(w=h[E]);(b===w||b===0)&&(b=-1,w=99999);const z={};e.jury.forEach(E=>{z[E.id]={correct:0,totalGuessed:0}}),s!=="final"&&c.forEach(E=>{const R=Ut(E),J=E.place!==void 0&&E.place!==null?E.place>10:null;J!==null&&e.jury.forEach(G=>{R[G.id]===!1&&(z[G.id].totalGuessed++,J===!0&&z[G.id].correct++)})});const P=o.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:e.jury.map(E=>{const R=h[E.id];let J="var(--cyan)";R===b&&(J="var(--green)"),R===w&&(J="#ffb3c1");let G=null;if(s!=="final"){const le=z[E.id],Re=le.totalGuessed>0&&le.correct===le.totalGuessed?"var(--gold)":"var(--muted)";G=o.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:700,borderLeft:"1px solid var(--line)",paddingLeft:8,color:Re},children:[le.correct," / ",le.totalGuessed," NQs"]})}return o.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:"1px solid rgba(94,58,168,0.4)",padding:"7px 16px",borderRadius:999,fontSize:"0.83rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:8,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[o.jsx("span",{style:{color:"var(--ink)"},children:ee(E.name)}),o.jsxs("span",{style:{color:J},children:[R," pts"]}),G]},E.id)})}),k=c.slice();g.sortMode==="place"&&k.sort((E,R)=>{const J=me(E.songId),G=me(R.songId),le=E.autoFinal!==void 0?E.autoFinal:J&&["de","fr","it","es","gb","kr"].indexOf(J.cc)!==-1,Re=R.autoFinal!==void 0?R.autoFinal:G&&["de","fr","it","es","gb","kr"].indexOf(G.cc)!==-1;if(s!=="final"&&le!==Re)return le?-1:1;const be=E.place!==void 0&&E.place!==null?E.place:9999,Qe=R.place!==void 0&&R.place!==null?R.place:9999;return be!==Qe?be-Qe:c.indexOf(E)-c.indexOf(R)});const C={};c.forEach(E=>{E.place&&(C[E.place]=(C[E.place]||0)+1)});const _=s!=="final"?o.jsxs("div",{className:"tabs edle-slider",style:{border:"none",margin:0,padding:4,borderRadius:999,display:"inline-flex",gap:4},children:[o.jsx("button",{className:g.subTab!=="tips"?"on":"",style:{border:"none",margin:0},onClick:()=>j(E=>({...E,subTab:"points"})),children:"Points"}),o.jsx("button",{className:g.subTab==="tips"?"on":"",style:{border:"none",margin:0},onClick:()=>j(E=>({...E,subTab:"tips"})),children:"NQ Tips"})]}):null,U=o.jsxs("div",{className:"tabs edle-slider",style:{border:"none",margin:0,padding:4,borderRadius:999,display:"inline-flex",gap:4},children:[o.jsx("button",{className:g.sortMode==="order"?"on":"",style:{border:"none",margin:0},onClick:()=>j(E=>({...E,sortMode:"order"})),children:"Order"}),o.jsx("button",{className:g.sortMode==="place"?"on":"",style:{border:"none",margin:0},onClick:()=>j(E=>({...E,sortMode:"place"})),children:"Placement"})]});let ae=null;if(g.editMode&&k.length>1){d.splitAfter=d.splitAfter||{};const E=Math.floor(k.length/2),R=d.splitAfter[s]!==void 0?d.splitAfter[s]:E;ae=o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:"0.85rem",color:"var(--muted)",background:"var(--panel2-solid)",padding:"5px 12px",borderRadius:999,border:"1px solid var(--line)"},children:[o.jsx("span",{children:"1. Hälfte bis Nr.:"}),o.jsx("input",{type:"number",min:"1",max:k.length-1,value:R,onChange:J=>{se(G=>({...G,years:G.years.map(le=>le.id===g.yearId?{...le,splitAfter:{...le.splitAfter||{},[s]:parseInt(J.target.value)||1}}:le)}))},style:{width:58,height:34,textAlign:"center",fontWeight:700,padding:0}})]})}const Q=o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"18px 0 16px",flexWrap:"wrap",gap:14},children:[o.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap",flex:1,justifyContent:"flex-start"},children:[_,ae]}),o.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:"auto"},children:P}),o.jsx("div",{style:{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap",flex:1,justifyContent:"flex-end"},children:U})]}),Y=[],$=[];d.splitAfter=d.splitAfter||{};const N=d.splitAfter[s]!==void 0?d.splitAfter[s]:Math.floor(k.length/2);for(let E=0;E<k.length;E++){const R=k[E],J=E+1,G=c.indexOf(R),le={item:R,index:G!==-1?G:E};J>N&&g.sortMode==="order"||g.sortMode==="place"&&E>=Math.ceil(k.length/2)?$.push(le):Y.push(le)}const I=E=>{const R=E.item,J=E.index,G=me(R.songId),le=mt(R),Re=Ut(R),be=R.autoFinal!==void 0?R.autoFinal:G&&["de","fr","it","es","gb","kr"].indexOf(G.cc)!==-1,Qe=R.place!==void 0&&R.place!==null?R.place<=10:null;let gn;if(s!=="final"&&g.subTab==="tips")if(be)gn=o.jsx("div",{className:"tiles",children:o.jsx("div",{className:"tile aq-tile",title:"Auto Qualifier – direkt fürs Finale gesetzt",children:o.jsx("div",{className:"tile-value",children:"AQ"})})});else{const hn=e.jury.map(ce=>{const ze=Re[ce.id],at=ce.id===n||l,$t=ze===!1?"NQ":"–";let ht="var(--panel2-solid)",vn="var(--muted)",yn="2.5px solid transparent",es="";return ze===!1&&(vn="#ffb3c1",yn="2.5px solid #ff4d6d",ht="rgba(255,77,109,0.1)"),Qe!==null&&ze!==void 0&&ze===!1&&(Qe===!1?(ht="linear-gradient(135deg,#22c55e,#16a34a)",vn="#fff",yn="2.5px solid #4ade80"):(ht="linear-gradient(135deg,#ff4d6d,#dc2626)",vn="#fff",yn="2.5px solid #ffb3c1")),ze===void 0&&(es=at?" tip-hidden":" tip-permanently-hidden"),o.jsx("button",{className:"tile nq-tip-tile "+(at?"me":"empty")+es,style:{background:ht,color:vn,border:yn,cursor:at?"pointer":"default",pointerEvents:at?"auto":"none"},onClick:at?()=>Rc(R.id,ce.id):void 0,title:ee(ce.name),children:o.jsx("div",{className:"tile-value",children:$t})},ce.id)}),Wt=e.jury.map(ce=>le[ce.id]).filter(ce=>ce),xn=Wt.reduce((ce,ze)=>ce+ze,0),gr=Wt.length?xn/Wt.length:null;gn=o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"tiles",children:hn}),o.jsxs("div",{className:"avg",children:[o.jsx("b",{children:gr==null?"–":gr.toFixed(1)}),o.jsx("small",{children:"AVG"})]})]})}else{const hn=e.jury.map(ce=>le[ce.id]).filter(ce=>ce),Wt=hn.reduce((ce,ze)=>ce+ze,0),xn=hn.length?Wt/hn.length:null,gr=e.jury.map(ce=>{const ze=le[ce.id],at=l||ce.id===n,$t="tile"+(at?" me":"")+(ze!=null?"":" empty")+(at?"":" readonly"),ht=ze?Tt(Yt(ze)):{},vn=o.jsx("div",{className:"tile-value",children:ze??"–"}),yn=R.songId?"rating_"+R.songId+"_"+ce.id:"";return G&&at?o.jsx("button",{className:$t,"data-flash-key":yn||void 0,style:ht,onClick:()=>L("rating",{eId:R.id,jurId:ce.id}),title:ee(ce.name),children:vn},ce.id):o.jsx("div",{className:$t,"data-flash-key":yn||void 0,style:ht,title:ee(ce.name),children:vn},ce.id)});gn=o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"tiles",children:gr}),o.jsxs("div",{className:"avg",children:[o.jsx("b",{children:xn==null?"–":xn.toFixed(1)}),o.jsx("small",{children:"AVG"})]})]})}const mn=s!=="final"&&be?o.jsx("span",{className:"autofinal",title:"Auto Qualifier",children:"AQ"}):null,wp=R.place!==void 0&&R.place!==null?R.place:"",Ja=R.customNo!==void 0&&R.customNo!==null&&R.customNo!==""?parseFloat(R.customNo):Or(R.id),kp=Ja%1!==0?"➔":Ja;let Pi=s!=="final"&&R.place!==void 0&&R.place!==null&&R.place>10;s==="final"&&(Pi=!1);let Xa=(R.place===1?" winner":"")+(Pi?" out":"")+(R.dq?" dq":"")+(s!=="final"&&be&&R.place!==1?" autofinal-row":"");s!=="final"&&be&&!Pi&&(Xa+=" aq-row");const Za=g.editMode?o.jsxs("div",{className:"sm-group",children:[o.jsx("button",{className:"ghost sm",onClick:()=>Dc(s,J),children:"▲"}),o.jsx("button",{className:"ghost sm",onClick:()=>Bc(s,J),children:"▼"}),o.jsx("button",{className:"ghost sm",onClick:()=>L("picker",{entryId:R.id}),children:"Change"}),o.jsx("button",{className:"ghost sm danger",onClick:()=>Wc(R.id),children:R.dq?"Undq":"DQ"})]}):null,Sp=G?o.jsxs("div",{className:"meta",children:[o.jsxs("span",{children:[o.jsx("b",{children:ee(G.title)})," – ",ee(G.artist)]}),mn,Za]}):o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("button",{className:"primary sm",onClick:()=>L("picker",{entryId:R.id}),children:"＋ Song"}),Za]}),jp=s!=="final"&&be?o.jsxs("div",{className:"pl",style:{opacity:0,pointerEvents:"none"},children:[o.jsx("input",{type:"number",disabled:!0}),o.jsx("small",{children:"PLACE"})]}):o.jsxs("div",{className:"pl",children:[o.jsx("input",{type:"number",min:"1",max:k.length,placeholder:"–",value:wp,className:R.place&&C[R.place]>1?"dup":"",disabled:!G,onChange:hn=>{const Wt=parseInt(hn.target.value);se(xn=>({...xn,years:xn.years.map(ce=>{const ze={};for(const at in ce.shows)ze[at]=ce.shows[at].map($t=>{if($t.id!==R.id)return $t;const ht={...$t};return Wt>0?ht.place=Wt:delete ht.place,ht});return{...ce,shows:ze}})}))},"aria-label":"Place"}),o.jsx("small",{children:"PLACE"})]}),Cp=G&&G.cc?{"--flag-url":`url('https://flagcdn.com/${G.cc}.svg')`}:{},Np=G&&G.cc?o.jsx("div",{className:"cc-code",children:ee(Cl(G.cc))}):null;return o.jsxs("div",{className:"row "+Xa,style:Cp,children:[Np,o.jsx("div",{className:"no",onClick:()=>L("editNo",{eId:R.id}),title:"Change order/status",children:ee(kp)}),o.jsx("div",{className:"row-content",children:Sp}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[o.jsx("div",{className:"stats",children:gn}),jp]})]},R.id)},D=()=>o.jsx("div",{style:{display:"flex",gap:4,marginBottom:10,justifyContent:"flex-end",paddingRight:137},children:f.map((E,R)=>{const J=e.jury[R],G=J&&(J.id===n||l);return o.jsx("div",{className:"tile-header-letter"+(G?" tile-header-me":""),title:J?J.name:E,children:ee(E)},R)})}),re=D(),X=D(),te=g.editMode?o.jsxs("div",{className:"actions",children:[o.jsx("button",{className:"ghost",onClick:()=>Uc(s),children:"＋ Running Order"}),o.jsx("button",{className:"ghost",onClick:()=>Hc(s),children:"− Remove Last"})]}):null;return o.jsxs(o.Fragment,{children:[Q,o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",color:"var(--muted)",fontWeight:700,fontSize:"0.78rem",padding:"0 4px",margin:"14px 0 8px",letterSpacing:"0.08em",textTransform:"uppercase"},children:[o.jsx("div",{children:"1st Half"}),o.jsx("div",{children:"2nd Half"})]}),o.jsxs("div",{className:"list",style:{marginTop:0},children:[o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[re,Y.map(E=>I(E))]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[X,$.map(E=>I(E))]})]}),te]})},op=()=>{const c=(de(g.yearId).shows.final||[]).filter(Q=>me(Q.songId)&&!Q.dq);c.sort((Q,Y)=>{const $=Q.place!==void 0&&Q.place!==null?Q.place:9999,N=Y.place!==void 0&&Y.place!==null?Y.place:9999;return $-N});const f=!!e.battleHidden,h=l?"j3":n,b=[...e.jury].sort((Q,Y)=>Q.id.localeCompare(Y.id)),w={};e.jury.forEach(Q=>{const Y={};c.forEach($=>{const N=(e.pred[$.id]||{})[Q.id];N&&(Y[N]=(Y[N]||0)+1)}),w[Q.id]=Y});const z={};e.jury.forEach(Q=>{z[Q.id]={sum:0,count:0}});const P=c.map(Q=>{const Y=me(Q.songId),$=e.pred[Q.id]||{},N=Q.place,I=b.map(te=>{const E=$[te.id],R=te.id===h;if(f&&!R)return o.jsx("td",{style:{textAlign:"center"},children:o.jsx("span",{className:"hidden-pred",children:"•••"})},"guess-"+te.id);const G=E??"",le=E&&w[te.id][E]>1,Re=l||R;return o.jsx("td",{className:"col-tipp",children:o.jsx("input",{type:"number",min:"1",max:c.length,value:G,className:"battle-input"+(le?" dup":""),readOnly:!Re,disabled:!Re,onChange:be=>{const Qe=parseInt(be.target.value);se(gn=>{const mn={...gn,pred:{...gn.pred}};return mn.pred[Q.id]={...mn.pred[Q.id]||{}},Qe>0?mn.pred[Q.id][te.id]=Qe:delete mn.pred[Q.id][te.id],mn})},style:{background:Re?"var(--panel2-solid)":"transparent",border:Re?"1px solid var(--line)":"1px solid transparent",width:45,height:34,fontSize:"1rem"}})},"guess-"+te.id)}),D=b.map(te=>{const E=$[te.id];let R=o.jsx("span",{style:{color:"var(--muted)"},children:"–"});if(E!=null&&N!==void 0&&N!==null){const J=Math.abs(E-N);z[te.id].sum+=J,z[te.id].count++,J===0?R=o.jsx("span",{className:"battle-diff-cell",style:Tt(Yt(10)),children:"🎯"}):R=o.jsx("span",{className:"battle-diff-cell",style:Tt(sg(J)),children:J})}return o.jsx("td",{className:"col-abw",children:R},"diff-"+te.id)}),re=N??"–",X=Y&&Y.cc?{"--flag-url":`url('https://flagcdn.com/${Y.cc}.svg')`}:{};return o.jsxs("tr",{children:[o.jsxs("td",{style:{...X,position:"relative",overflow:"hidden",padding:0,borderBottom:"1px solid var(--line)"},children:[o.jsx("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:"200px",backgroundImage:"var(--flag-url)",backgroundSize:"cover",backgroundPosition:"center",maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",opacity:.65,pointerEvents:"none",zIndex:0}}),Y&&o.jsx("div",{className:"cc-code",style:{position:"absolute",left:38,top:"50%",transform:"translateY(-50%)",zIndex:1,margin:0},children:ee(Cl(Y.cc))}),o.jsx("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"flex-end",textAlign:"right",padding:"8px 10px",minHeight:54},children:Y?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"sb-title",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.9rem"},children:ee(Y.title)}),o.jsx("div",{className:"sb-artist",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.75rem"},children:ee(Y.artist)})]}):null})]}),I,D,o.jsx("td",{className:"col-place",style:{fontWeight:700,fontSize:"1.4rem",fontFamily:"var(--number-font)",color:"var(--gold)",textAlign:"center"},children:re})]},Q.id)}),k=[];e.jury.forEach(Q=>{z[Q.id].count>0&&k.push({name:Q.name,sum:z[Q.id].sum,count:z[Q.id].count,id:Q.id})}),k.sort((Q,Y)=>Q.sum-Y.sum);let C;if(k.length>0){const Q=k[0],Y=["🥈","🥉"];C=o.jsxs("div",{style:{marginTop:24},children:[o.jsxs("div",{className:"battle-podium-winner",children:[o.jsx("div",{className:"medal",children:"🥇"}),o.jsx("div",{className:"name",children:ee(Q.name)}),o.jsx("div",{className:"score",children:Q.sum}),o.jsxs("div",{className:"label",children:["🎯 Winner · ",Q.count," Tipps verglichen"]})]}),k.length>1&&o.jsx("div",{className:"battle-runner-ups",children:k.slice(1).map(($,N)=>{const I=N<2?Y[N]:null,D=N===0?"2nd Place":N===1?"3rd Place":N+2+"th Place";return o.jsxs("div",{className:"battle-runner-up",children:[I?o.jsx("div",{className:"medal",children:I}):o.jsx("div",{className:"medal",style:{fontFamily:"var(--number-font)",fontSize:"1.5rem",color:"var(--muted)"},children:N+2}),o.jsx("div",{className:"name",children:ee($.name)}),o.jsx("div",{className:"score",children:$.sum}),o.jsx("div",{className:"label",children:D})]},$.id)})})]})}else C=o.jsx("p",{className:"empty",style:{padding:"30px 0"},children:"Trage die Tipps und tatsächlichen Plätze ein, um das Leaderboard zu sehen."});const _=o.jsx("button",{onClick:Ic,style:{padding:"7px 16px",fontSize:"0.85rem",fontWeight:700,...f?{background:"linear-gradient(135deg,#ff2d95,#a855f7)",borderColor:"transparent",color:"#fff"}:{background:"var(--panel2-solid)",color:"var(--muted)"}},children:f?"👁️ Tipps anzeigen":"🙈 Tipps verbergen"}),U=o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12,marginBottom:20},children:[o.jsxs("div",{children:[o.jsx("h2",{style:{margin:"0 0 4px"},children:"Points Battle"}),o.jsx("p",{className:"hint",style:{margin:0},children:"Trage die Tipps ein — die Abweichung siehst du rechts. 🎯 = Volltreffer."})]}),o.jsx("div",{children:_})]}),ae=o.jsxs("tr",{children:[o.jsx("th",{style:{paddingLeft:15},children:"Song"}),b.map(Q=>o.jsx("th",{className:"c col-tipp",children:ee(Q.name)},"h-g-"+Q.id)),b.map(Q=>o.jsx("th",{className:"c col-abw",children:ee(Q.name)},"h-d-"+Q.id)),o.jsx("th",{className:"c col-place",children:"Platz"})]});return o.jsxs(o.Fragment,{children:[U,c.length?o.jsxs("div",{style:{maxWidth:1250,margin:"0 auto"},children:[o.jsxs("table",{className:"sb-table battle-table",style:{width:"100%",tableLayout:"fixed"},children:[o.jsx("thead",{children:ae}),o.jsx("tbody",{children:P})]}),C]}):o.jsx("p",{className:"empty",children:"Bitte wähle zuerst Songs für das Grand Final aus."})]})},ap=()=>{const s=de(g.yearId);let d=g.sbShow;d!=="all"&&!s.shows[d]&&(d=s.shows.final?"final":Object.keys(s.shows)[0]);let c=[];if(d==="all"){const N=new Set;for(const I in s.shows)(s.shows[I]||[]).forEach(D=>{D.songId&&!N.has(D.songId)&&(N.add(D.songId),c.push(D))})}else c=s.shows[d]||[];const f=c.map(N=>{const I=me(N.songId);if(!I||N.dq)return null;const D=mt(N),re=e.jury.map(te=>D[te.id]).filter(te=>te),X=re.reduce((te,E)=>te+E,0);return{e:N,s:I,r:D,avg:re.length?X/re.length:null,sum:X,place:N.place}}).filter(Boolean),h=[...f].sort((N,I)=>(I.avg!==null?I.avg:-1)-(N.avg!==null?N.avg:-1));let b=1;h.forEach((N,I)=>{I>0&&N.avg!==h[I-1].avg&&b++,N.ratingRank=b}),g.sbSort==="ratings"?f.sort((N,I)=>(I.avg!==null?I.avg:-1)-(N.avg!==null?N.avg:-1)):f.sort((N,I)=>{const D=te=>{if(d!=="all")return te.e.place||9999;let E=null,R=null;if(s.shows.final){const J=s.shows.final.find(G=>G.songId===te.s.id);J&&J.place&&(E=J.place)}if(s.shows.sf1){const J=s.shows.sf1.find(G=>G.songId===te.s.id);J&&J.place&&(R=J.place)}if(!R&&s.shows.sf2){const J=s.shows.sf2.find(G=>G.songId===te.s.id);J&&J.place&&(R=J.place)}return E||(R?R+1e3:9999)},re=D(N),X=D(I);return re!==X?re-X:(I.avg!==null?I.avg:-1)-(N.avg!==null?N.avg:-1)});const w=Ni(),z={},P={};e.jury.forEach(N=>{z[N.id]=0,P[N.id]={correct:0,totalGuessed:0}}),c.forEach(N=>{if(N.songId){const I=mt(N);e.jury.forEach(D=>{I[D.id]&&(z[D.id]+=I[D.id])})}}),(d==="all"?["sf1","sf2"]:[d]).forEach(N=>{(s.shows[N]||[]).forEach(D=>{const re=Ut(D),X=D.place!==void 0&&D.place!==null?D.place>10:null;X!==null&&e.jury.forEach(te=>{re[te.id]===!1&&(P[te.id].totalGuessed++,X===!0&&P[te.id].correct++)})})});let C=-1,_=99999;for(const N in z)z[N]>C&&(C=z[N]),z[N]<_&&(_=z[N]);(C===_||C===0)&&(C=-1,_=99999);const U=o.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",justifyContent:"center",marginTop:16},children:e.jury.map(N=>{const I=z[N.id];let D="var(--cyan)";I===C&&(D="var(--green)"),I===_&&(D="#ffb3c1");let re=null;if(d!=="final"){const X=P[N.id],te=X.totalGuessed>0&&X.correct===X.totalGuessed?"var(--gold)":"var(--muted)";re=o.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:700,borderLeft:"1px solid var(--line)",paddingLeft:8,color:te},children:[X.correct," / ",X.totalGuessed," NQs"]})}return o.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:"1px solid rgba(94,58,168,0.4)",padding:"7px 16px",borderRadius:999,fontSize:"0.83rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:8,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[o.jsx("span",{style:{color:"var(--ink)"},children:ee(N.name)}),o.jsxs("span",{style:{color:D},children:[I," pts"]}),re]},N.id)})}),ae=f.map((N,I)=>{const D=N.ratingRank,re=D===1?" sb-top1":D===2?" sb-top2":D===3?" sb-top3":"",X=[],te=[],E=Ut(N.e);e.jury.forEach(G=>{const le=N.r[G.id];if(le){const be=Tt(Yt(le));X.push(o.jsx("span",{className:"cell",style:{...be,display:"inline-block",margin:"0 2px",fontSize:"1.05rem",width:34,height:34,lineHeight:"30px",padding:0},children:le},G.id))}else X.push(o.jsx("span",{className:"cell",style:{background:"var(--panel2-solid)",color:"var(--muted-dim)",display:"inline-block",margin:"0 2px",width:34,height:34,lineHeight:"30px",padding:0},children:"–"},G.id));E[G.id]===!1?te.push(o.jsx("span",{className:"cell",style:{background:"rgba(255,77,109,0.2)",color:"#ffb3c1",border:"1px solid rgba(255,77,109,0.4)",display:"inline-block",margin:"0 2px",fontSize:"0.85rem",padding:"2px 6px",width:34,height:34,lineHeight:"30px"},children:"NQ"},G.id)):te.push(o.jsx("span",{className:"cell",style:{background:"transparent",border:"1px dashed rgba(255,255,255,0.1)",color:"transparent",display:"inline-block",margin:"0 2px",fontSize:"0.85rem",padding:"2px 6px",width:34,height:34,lineHeight:"30px"},children:"-"},G.id))});let R="-";if(N.e.place!==void 0&&N.e.place!==null)if(d==="all"){let G=null;if(s.shows.sf1){const be=s.shows.sf1.find(Qe=>Qe.songId===N.s.id);be&&be.place&&(G=be.place)}if(!G&&s.shows.sf2){const be=s.shows.sf2.find(Qe=>Qe.songId===N.s.id);be&&be.place&&(G=be.place)}let le=null;if(s.shows.final){const be=s.shows.final.find(Qe=>Qe.songId===N.s.id);be&&be.place&&(le=be.place)}const Re=[];G&&Re.push(o.jsxs("span",{style:{fontSize:"0.65rem",color:"var(--muted)"},children:["SF: ",G,"."]},"sf")),le&&Re.push(o.jsxs("span",{style:{fontSize:"0.75rem",fontWeight:800,color:"var(--gold)"},children:["GF: ",le,"."]},"gf")),Re.length?R=o.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2,lineHeight:1.1},children:Re}):R=N.e.place+"."}else R=N.e.place+".";const J={"--flag-url":`url('https://flagcdn.com/${N.s.cc}.svg')`,position:"relative",overflow:"hidden"};return o.jsxs("tr",{className:re,children:[o.jsx("td",{className:"sb-rank-cell",style:{textAlign:"center",padding:0},children:D}),o.jsxs("td",{style:{...J,padding:0},children:[o.jsx("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:"200px",backgroundImage:"var(--flag-url)",backgroundSize:"cover",backgroundPosition:"center",maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",opacity:.65,pointerEvents:"none",zIndex:0}}),o.jsxs("div",{style:{position:"relative",zIndex:1,display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"6px 10px"},children:[o.jsx("div",{className:"cc-code",style:{position:"static",transform:"none",margin:0},children:ee(Cl(N.s.cc))}),o.jsxs("div",{className:"sb-song-info",style:{display:"flex",flexDirection:"column",alignItems:"flex-end",textAlign:"right",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:0},children:[o.jsx("div",{className:"sb-title",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.9rem"},children:ee(N.s.title)}),o.jsx("div",{className:"sb-artist",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.75rem"},children:ee(N.s.artist)})]})]})]}),o.jsx("td",{style:{textAlign:"left",paddingLeft:8,verticalAlign:"middle",whiteSpace:"nowrap",overflow:"hidden"},children:X}),o.jsx("td",{style:{textAlign:"left",paddingLeft:8,verticalAlign:"middle",whiteSpace:"nowrap",overflow:"hidden"},children:te}),o.jsx("td",{className:"sb-score-cell",children:o.jsx("b",{children:N.avg==null?"–":N.sum})}),o.jsx("td",{className:"sb-score-cell",children:o.jsx("b",{children:N.avg==null?"–":N.avg.toFixed(1)})}),o.jsx("td",{style:{textAlign:"center",width:50},children:R})]},N.e.id)}),Q=o.jsx("div",{style:{display:"flex",justifyContent:"flex-start",gap:0,padding:0,marginLeft:-3},children:w.map((N,I)=>o.jsx("span",{style:{display:"inline-block",width:35,margin:"0 2px",textAlign:"center",fontSize:"0.7rem",color:"var(--muted)"},children:N},I))}),Y=o.jsx("div",{style:{display:"flex",justifyContent:"flex-start",gap:0,padding:0,marginLeft:-3},children:w.map((N,I)=>o.jsx("span",{style:{display:"inline-block",width:35,margin:"0 2px",textAlign:"center",fontSize:"0.6rem",color:"var(--muted)"},children:N},I))}),$=o.jsxs("div",{className:"tabs edle-slider",style:{border:"none",margin:0,padding:4,borderRadius:999,display:"inline-flex",gap:4},children:[o.jsx("button",{className:g.sbSort==="ratings"?"on":"",style:{border:"none",margin:0},onClick:()=>j(N=>({...N,sbSort:"ratings"})),children:"Ratings"}),o.jsx("button",{className:g.sbSort==="placement"?"on":"",style:{border:"none",margin:0},onClick:()=>j(N=>({...N,sbSort:"placement"})),children:"Placement"})]});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,maxWidth:1100,margin:"0 auto 14px"},children:[o.jsx("div",{children:rp()}),o.jsx("div",{children:$})]}),U,f.length?o.jsx("div",{style:{maxWidth:1250,margin:"0 auto"},children:o.jsxs("table",{className:"sb-table",style:{width:"100%",tableLayout:"fixed"},children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{style:{textAlign:"center",width:35},children:"#"}),o.jsx("th",{style:{width:260},children:"Song"}),o.jsx("th",{className:"c",style:{width:176},children:Q}),o.jsx("th",{className:"c",style:{width:176},children:Y}),o.jsx("th",{className:"c",style:{width:80},children:"Total"}),o.jsx("th",{className:"c",style:{width:80},children:"Ø"}),o.jsx("th",{className:"c",style:{width:80},children:"Place"})]})}),o.jsx("tbody",{children:ae})]})}):o.jsx("p",{className:"empty",children:"Nothing to show yet."})]})},sp=()=>{const s=g.compareCc&&Ze[g.compareCc]?Ze[g.compareCc]:"",d=[];if(g.compareCc)for(const b of e.years){const w=[];for(const z in b.shows)for(const P of b.shows[z]){const k=me(P.songId);k&&k.cc===g.compareCc&&w.push({yearObj:b,showKey:z,showName:Sl[z],entry:P,song:k})}if(w.length>0){let z=w.find(P=>P.showKey==="final")||w[0];d.push(z)}}d.sort((b,w)=>w.yearObj.year-b.yearObj.year);const c=d.map(b=>{const w=mt(b.entry),z=e.jury.map(C=>w[C.id]).filter(C=>C),P=z.reduce((C,_)=>C+_,0),k=z.length?P/z.length:null;return o.jsxs("tr",{style:{borderBottom:"1px solid rgba(94,58,168,0.2)"},children:[o.jsx("td",{style:{padding:"16px 12px",verticalAlign:"middle"},children:o.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[o.jsx("b",{style:{fontFamily:"var(--display)",fontSize:"1.1rem",color:"var(--ink)"},children:b.yearObj.year}),o.jsx("small",{style:{color:"var(--muted)",fontSize:"0.75rem",fontWeight:600},children:b.showName})]})}),o.jsx("td",{style:{padding:"16px 12px",verticalAlign:"middle"},children:o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[o.jsx(Qt,{cc:b.song.cc}),o.jsx("b",{style:{fontFamily:"var(--display)",fontSize:"0.95rem",color:"var(--ink)"},children:ee(b.song.title)})]})}),e.jury.map(C=>{const _=w[C.id];return o.jsx("td",{style:{padding:"16px 12px",textAlign:"center",verticalAlign:"middle"},children:_?o.jsx("span",{className:"cell",style:{...Tt(Yt(_)),display:"inline-block",margin:0},children:_}):o.jsx("span",{style:{color:"var(--muted-dim)"},children:"–"})},C.id)}),o.jsx("td",{style:{padding:"16px 12px",textAlign:"center",verticalAlign:"middle"},children:o.jsx("b",{style:{fontFamily:"var(--display)",fontSize:"1.1rem",color:"var(--cyan)"},children:k==null?"–":P})}),o.jsx("td",{style:{padding:"16px 12px",textAlign:"center",verticalAlign:"middle"},children:k==null?"–":o.jsx("span",{className:"cell",style:{...Tt(Yt(k)),display:"inline-block",margin:0,fontSize:"0.95rem"},children:k.toFixed(1)})})]},b.yearObj.id+"-"+b.showKey)}),f=e.jury.map(b=>o.jsx("th",{style:{textAlign:"center",padding:"14px 12px"},children:ee(b.name)},b.id)),h=g.compareCc?c.length?o.jsx("div",{className:"tw",style:{marginTop:24,padding:"4px 12px",background:"linear-gradient(145deg, rgba(25,14,52,0.95) 0%, rgba(10,5,22,0.98) 100%)",border:"1px solid rgba(94,58,168,0.3)",boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},children:o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid rgba(94,58,168,0.4)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"14px 12px"},children:"Year"}),o.jsx("th",{style:{textAlign:"left",padding:"14px 12px"},children:"Song"}),f,o.jsx("th",{style:{textAlign:"center",padding:"14px 12px"},children:"Total"}),o.jsx("th",{style:{textAlign:"center",padding:"14px 12px"},children:"Ø"})]})}),o.jsx("tbody",{children:c})]})}):o.jsx("div",{style:{background:"var(--panel)",border:"1px dashed rgba(148,94,255,0.3)",borderRadius:22,padding:60,textAlign:"center",marginTop:24},children:o.jsx("p",{className:"empty",style:{margin:0,fontSize:"1rem"},children:"Keine Einträge für dieses Land gefunden."})}):o.jsx("div",{style:{background:"var(--panel)",border:"1px dashed rgba(148,94,255,0.3)",borderRadius:22,padding:60,textAlign:"center",marginTop:24},children:o.jsx("p",{className:"empty",style:{margin:0,fontSize:"1rem"},children:"Wähle oben ein Land aus, um den historischen Vergleich zu sehen."})});return o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{paddingTop:18},children:o.jsxs("button",{onClick:Ei,style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px 9px 14px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",fontWeight:700,fontSize:"0.85rem",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:b=>{b.currentTarget.style.transform="translateX(-2px)",b.currentTarget.style.borderColor="rgba(168,85,247,0.7)",b.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:b=>{b.currentTarget.style.transform="translateX(0)",b.currentTarget.style.borderColor="rgba(148,94,255,0.35)",b.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[o.jsx("span",{style:{fontSize:"1rem",lineHeight:1},children:"←"})," Back"]})}),o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20,margin:"24px 0 8px"},children:[o.jsx("h2",{style:{margin:0,fontSize:"2rem"},children:"Country Comparison"}),o.jsx("div",{style:{width:300,background:"var(--panel2)",borderRadius:16,border:"1px solid var(--line)",padding:4},children:o.jsx(Ti,{value:s,onSelect:(b,w)=>j(z=>({...z,compareCc:b||null}))})})]}),o.jsx("p",{className:"hint",style:{marginBottom:24},children:"Vergleiche die Punkte und Platzierungen eines Landes über alle Jahre hinweg."}),h]})},up=()=>{const s=[];e.songs.forEach(f=>{f.year&&s.indexOf(f.year)===-1&&s.push(f.year)}),s.sort((f,h)=>h-f);const d=(g.q||"").toLowerCase(),c=e.songs.filter(f=>!((Ze[f.cc]+" "+f.artist+" "+f.title).toLowerCase().indexOf(d)===-1||g.libYear&&String(f.year)!==String(g.libYear)));return c.sort((f,h)=>Ze[f.cc].localeCompare(Ze[h.cc])),o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{paddingTop:18},children:o.jsxs("button",{onClick:Ei,style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px 9px 14px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",fontWeight:700,fontSize:"0.85rem",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:f=>{f.currentTarget.style.transform="translateX(-2px)",f.currentTarget.style.borderColor="rgba(168,85,247,0.7)",f.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:f=>{f.currentTarget.style.transform="translateX(0)",f.currentTarget.style.borderColor="rgba(148,94,255,0.35)",f.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[o.jsx("span",{style:{fontSize:"1rem",lineHeight:1},children:"←"})," Back"]})}),o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20,margin:"24px 0 8px"},children:[o.jsx("h2",{style:{margin:0,fontSize:"2rem"},children:"Song Library"}),o.jsx("button",{className:"primary",onClick:()=>L("song",{id:null,assign:null}),style:{padding:"10px 24px",fontSize:"0.95rem"},children:"＋ New Song"})]}),o.jsx("p",{className:"hint",style:{marginBottom:24},children:"Durchsuche alle Songs, die jemals für das Scoreboard eingetragen wurden."}),o.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",marginBottom:24,background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",padding:16,borderRadius:18,border:"1px solid rgba(94,58,168,0.3)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[o.jsx("input",{id:"lib_search_input",placeholder:"Suche nach Titel, Artist oder Land...",value:g.q||"",onChange:f=>j(h=>({...h,q:f.target.value})),style:{flex:1,minWidth:220,background:"var(--panel2-solid)",border:"1px solid var(--line)",padding:"12px 18px",borderRadius:12}}),o.jsxs("select",{id:"lib_year_select",style:{width:160,background:"var(--panel2-solid)",border:"1px solid var(--line)",padding:"12px 18px",borderRadius:12,fontWeight:600},value:g.libYear||"",onChange:f=>j(h=>({...h,libYear:f.target.value})),children:[o.jsx("option",{value:"",children:"All Years"}),s.map(f=>o.jsx("option",{value:f,children:f},f))]})]}),c.length?o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:16},children:c.map(f=>o.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:"1px solid rgba(94,58,168,0.3)",borderRadius:16,padding:16,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)",display:"flex",flexDirection:"column",gap:12,transition:"transform 0.2s ease, border-color 0.2s ease"},onMouseEnter:h=>{h.currentTarget.style.transform="translateY(-2px)",h.currentTarget.style.borderColor="rgba(168,85,247,0.6)"},onMouseLeave:h=>{h.currentTarget.style.transform="translateY(0)",h.currentTarget.style.borderColor="rgba(94,58,168,0.3)"},children:[o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[o.jsx(Qt,{cc:f.cc}),o.jsxs("span",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.05em",textTransform:"uppercase"},children:[ee(Ze[f.cc])," ",f.year&&`· ${f.year}`]})]})}),o.jsxs("div",{children:[o.jsx("div",{style:{fontFamily:"var(--display)",fontSize:"1.15rem",fontWeight:800,color:"var(--ink)",lineHeight:1.2,marginBottom:4},children:ee(f.title)}),o.jsx("div",{style:{fontSize:"0.9rem",color:"var(--muted)",fontWeight:500},children:ee(f.artist)})]}),o.jsxs("div",{style:{display:"flex",gap:8,marginTop:"auto",paddingTop:8},children:[o.jsx("button",{className:"ghost sm",style:{flex:1},onClick:()=>L("song",{id:f.id,assign:null}),children:"Edit"}),o.jsx("button",{className:"ghost sm danger",style:{flex:1},onClick:()=>Ac(f.id),children:"Delete"})]})]},f.id))}):o.jsx("p",{className:"empty",style:{padding:"40px 0",fontSize:"1rem"},children:"Keine Songs gefunden, die zu deiner Suche passen."})]})},Ti=({value:s,onSelect:d})=>{const[c,f]=A.useState(s||""),[h,b]=A.useState(!1),[w,z]=A.useState(""),P=A.useRef(null),k=A.useRef(null);A.useEffect(()=>{f(s||"")},[s]),A.useEffect(()=>{const _=U=>{P.current&&!P.current.contains(U.target)&&b(!1)};return document.addEventListener("mousedown",_),()=>document.removeEventListener("mousedown",_)},[]);const C=Ml.filter(_=>_[1].toLowerCase().indexOf((c||"").toLowerCase())!==-1);return o.jsxs("div",{className:"search-dropdown-container",ref:P,children:[o.jsx("input",{ref:k,placeholder:"Land suchen...",value:c,autoComplete:"off",onChange:_=>{f(_.target.value),z(""),b(!0)},onFocus:()=>b(!0),onClick:()=>b(!0),style:{width:"100%"}}),o.jsx("div",{className:"search-dropdown-results"+(h?" active":""),children:C.length?C.map(_=>o.jsxs("div",{className:"search-dropdown-item",onMouseDown:U=>{U.preventDefault(),f(_[1]),z(_[0]),b(!1),d&&d(_[0],_[1])},children:[o.jsx(Qt,{cc:_[0]})," ",o.jsx("span",{children:ee(_[1])})]},_[0])):o.jsx("div",{className:"search-dropdown-item",style:{color:"var(--muted)"},children:"Kein Land gefunden"})})]})},dp=()=>{if(!S.open)return null;switch(S.mode){case"alert":return o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:ee(S.payload.title)}),o.jsx("p",{className:"hint",children:ee(S.payload.text)}),o.jsx("div",{className:"actions",children:o.jsx("button",{className:"primary",onClick:W,children:"OK"})})]});case"confirm":{const s=S.payload.onYes;return o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:ee(S.payload.title)}),o.jsx("p",{className:"hint",children:ee(S.payload.text)}),o.jsxs("div",{className:"actions",children:[o.jsx("button",{className:"ghost",onClick:W,children:"Cancel"}),o.jsx("button",{className:"primary",onClick:()=>{W(),s&&setTimeout(s,30)},children:"Confirm"})]})]})}case"welcome":return o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Select Profile 👋"}),o.jsx("p",{className:"hint",children:"Wer bist du?"}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:10,margin:"18px 0"},children:e.jury.map(s=>o.jsxs("button",{className:"primary preset-btn",onClick:()=>Ec(s.id),children:[ee(s.name),s.id===n?" ✓":""]},s.id))}),o.jsx("div",{className:"actions",style:{justifyContent:"center",marginTop:14},children:o.jsx("button",{className:"ghost",onClick:W,children:"Abbrechen"})})]});case"newYear":return o.jsx(cp,{onSave:Qc,onClose:W});case"editCity":{const s=de(g.yearId);return s?o.jsx(pp,{year:s,onSave:Yc,onClose:W}):null}case"editDates":{const s=de(g.yearId);return s?o.jsx(fp,{year:s,onSave:Gc,onClose:W}):null}case"editNo":{const s=Rn(S.payload.eId);return s?o.jsx(gp,{entry:s,songById:me,onSave:$c,onClose:W}):null}case"picker":return o.jsx(mp,{entryId:S.payload.entryId,S:e,CN:Ze,songById:me,onPick:s=>{const d=S.payload.entryId;se(c=>({...c,years:c.years.map(f=>{const h={};for(const b in f.shows)h[b]=f.shows[b].map(w=>w.id===d?{...w,songId:s}:w);return{...f,shows:h}})})),W(),setTimeout(()=>L("rating",{eId:d,jurId:n}),50)},onNewSong:()=>L("song",{id:null,assign:S.payload.entryId}),onEditSong:s=>L("song",{id:s,assign:null}),onDeleteSong:s=>{se(d=>({...d,songs:d.songs.filter(c=>c.id!==s)}))},onClose:W});case"song":{const s=S.payload.id,d=S.payload.assign,c=s?me(s):null,f=g.yearId?de(g.yearId):null,h=c&&c.year?c.year:f&&f.year?f.year:new Date().getFullYear();return o.jsx(hp,{song:c,defaultYear:h,editId:s,assign:d,onSave:Vc,onClose:W,S:e,setS:t,save:Ce})}case"rating":{const s=Rn(S.payload.eId);return s?o.jsx(xp,{entry:s,jurId:S.payload.jurId,S:e,me:n,jname:gt,songById:me,getRatings:mt,onSave:(d,c,f)=>{const h=Rn(d),b=h&&h.songId?h.songId:d,w="ratings/"+b+"/"+c;se(z=>{const P={...z,ratings:{...z.ratings}};return P.ratings[b]={...P.ratings[b]||{}},f===null?delete P.ratings[b][c]:P.ratings[b][c]=f,P}),f===null?ye(w,null):ye(w,f),W()},onClose:W}):null}case"settings":return o.jsx(vp,{S:e,currentUser:a,onSaveNames:Kc,onImport:Jc,onExport:Xc,onOpenJson:()=>L("json"),onClose:W,showToast:Xe,autoHardReset:m,setAutoHardReset:y});case"json":return o.jsx(yp,{S:e,onSave:qc,onBack:()=>L("settings"),onClose:W});default:return null}},cp=({onSave:s,onClose:d})=>{const[c,f]=A.useState(new Date().getFullYear()),[h,b]=A.useState(""),[w,z]=A.useState("");return o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"Add New Contest"}),o.jsxs("label",{children:["Year",o.jsx("input",{type:"number",value:c,onChange:P=>f(P.target.value)})]}),o.jsxs("label",{children:["Suffix (optional)",o.jsx("input",{placeholder:"e.g. Junior or Asia",value:h,onChange:P=>b(P.target.value)})]}),o.jsxs("label",{children:["Host City",o.jsx("input",{value:w,onChange:P=>z(P.target.value)})]}),o.jsxs("div",{className:"actions",children:[o.jsx("button",{className:"ghost",onClick:d,children:"Cancel"}),o.jsx("button",{className:"primary",onClick:()=>s({year:c,suffix:h,city:w}),children:"Create"})]})]})},pp=({year:s,onSave:d,onClose:c})=>{const[f,h]=A.useState(s.city||""),[b,w]=A.useState(s.hostCc||""),[z,P]=A.useState(s.hostCc&&Ze[s.hostCc]||"");return o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"Host City & Country"}),o.jsxs("label",{style:{position:"relative",zIndex:20},children:["Country (Flagge)",o.jsx(Ti,{value:z,onSelect:(k,C)=>{w(k),P(C)}})]}),o.jsxs("label",{style:{position:"relative",zIndex:1},children:["City",o.jsx("input",{value:f,onChange:k=>h(k.target.value)})]}),o.jsxs("div",{className:"actions",children:[o.jsx("button",{className:"ghost",onClick:c,children:"Cancel"}),o.jsx("button",{className:"primary",onClick:()=>d(f,b),children:"Save"})]})]})},fp=({year:s,onSave:d,onClose:c})=>{const[f,h]=A.useState(s.showDates&&s.showDates.sf1||""),[b,w]=A.useState(s.showDates&&s.showDates.sf2||""),[z,P]=A.useState(s.showDates&&s.showDates.final||"");return o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"Show-Daten"}),o.jsx("p",{className:"hint",style:{marginBottom:16},children:'Trage ein, wann welche Show stattfindet. Das „nächste" Jahr wird im Menü hervorgehoben, solange das Final noch nicht vorbei ist.'}),s.shows.sf1&&o.jsxs("label",{children:["Semi-final 1",o.jsx("input",{type:"date",value:f,onChange:k=>h(k.target.value)})]}),s.shows.sf2&&o.jsxs("label",{children:["Semi-final 2",o.jsx("input",{type:"date",value:b,onChange:k=>w(k.target.value)})]}),s.shows.final&&o.jsxs("label",{children:["Grand Final",o.jsx("input",{type:"date",value:z,onChange:k=>P(k.target.value)})]}),o.jsxs("div",{className:"actions",children:[o.jsx("button",{className:"ghost",onClick:c,children:"Cancel"}),o.jsx("button",{className:"primary",onClick:()=>d({sf1:f,sf2:b,final:z}),children:"Save"})]})]})},gp=({entry:s,songById:d,onSave:c,onClose:f})=>{const h=d(s.songId),b=s.customNo!==void 0&&s.customNo!==null&&s.customNo!==""?s.customNo:Or(s.id),w=s.autoFinal!==void 0?s.autoFinal:h&&["de","fr","it","es","gb","kr"].indexOf(h.cc)!==-1,[z,P]=A.useState(b),[k,C]=A.useState(w);return o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"Running Order & Status"}),o.jsxs("label",{children:["Custom Position / Number (z.B. 6 oder 6.5)",o.jsx("input",{value:z,onChange:_=>P(_.target.value)})]}),o.jsxs("label",{style:{flexDirection:"row",alignItems:"center",gap:12,marginTop:16,cursor:"pointer",background:"var(--panel2-solid)",padding:12,borderRadius:12,border:"1px solid var(--line)"},children:[o.jsx("input",{type:"checkbox",checked:k,onChange:_=>C(_.target.checked)}),o.jsx("span",{style:{color:"var(--ink)",fontWeight:600},children:"Auto Qualifier (AQ)"})]}),o.jsxs("div",{className:"actions",children:[o.jsx("button",{className:"ghost",onClick:f,children:"Cancel"}),o.jsx("button",{className:"primary",onClick:()=>c(s.id,z,k),children:"Save"})]})]})},mp=({entryId:s,S:d,CN:c,songById:f,onPick:h,onNewSong:b,onEditSong:w,onDeleteSong:z,onClose:P})=>{const[k,C]=A.useState(""),_=d.songs.filter(U=>(c[U.cc]+" "+U.artist+" "+U.title).toLowerCase().indexOf(k.toLowerCase())!==-1);return o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"Song Library"}),o.jsx("input",{placeholder:"Search...",value:k,onChange:U=>C(U.target.value),style:{width:"100%",marginBottom:12}}),o.jsx("div",{id:"plist",children:_.length?_.map(U=>o.jsxs("div",{className:"prow",children:[o.jsxs("button",{className:"pbtn",onClick:()=>h(U.id),children:[o.jsx(Qt,{cc:U.cc}),o.jsxs("span",{children:[o.jsx("b",{children:ee(U.title)})," – ",ee(U.artist)]})]}),o.jsx("button",{className:"ghost danger",onClick:()=>z(U.id),children:"Delete"})]},U.id)):o.jsx("p",{className:"empty",children:"No songs found."})}),o.jsxs("div",{className:"actions",children:[o.jsx("button",{className:"ghost",onClick:P,children:"Close"}),o.jsx("button",{className:"primary",onClick:b,children:"＋ New Song"})]})]})},hp=({song:s,defaultYear:d,editId:c,assign:f,onSave:h,onClose:b,S:w,setS:z,save:P})=>{const[k,C]=A.useState(s?s.cc:""),[_,U]=A.useState(s&&Ze[s.cc]||""),[ae,Q]=A.useState(s?s.artist:""),[Y,$]=A.useState(s?s.title:""),[N,I]=A.useState(s&&s.year?s.year:d),[D,re]=A.useState(()=>!c||!w.ratings[c]?{}:{...w.ratings[c]}),X=(E,R)=>{const J=parseInt(R);re(G=>{const le={...G};return!J||J<1||J>10?delete le[E]:le[E]=J,le})},te=()=>{h({artist:ae,title:Y,cc:k,year:parseInt(N)||new Date().getFullYear(),editId:c,assign:f}),c&&z(E=>{const R={...E,ratings:{...E.ratings}};return R.ratings[c]={...D},Object.keys(R.ratings[c]).length===0&&delete R.ratings[c],P(R),R})};return o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:s?"Edit Song":"New Song"}),o.jsxs("label",{style:{position:"relative",zIndex:20},children:["Country",o.jsx(Ti,{value:_,onSelect:(E,R)=>{C(E),U(R)}})]}),o.jsxs("label",{style:{position:"relative",zIndex:1},children:["Artist",o.jsx("input",{value:ae,onChange:E=>Q(E.target.value)})]}),o.jsxs("label",{style:{position:"relative",zIndex:1},children:["Song Title",o.jsx("input",{value:Y,onChange:E=>$(E.target.value)})]}),o.jsxs("label",{style:{position:"relative",zIndex:1},children:["Year",o.jsx("input",{type:"number",value:N,onChange:E=>I(E.target.value)})]}),c&&o.jsxs(o.Fragment,{children:[o.jsx("hr",{style:{border:0,borderTop:"1px solid var(--line)",margin:"20px 0 16px"}}),o.jsxs("div",{style:{marginBottom:14},children:[o.jsx("div",{style:{fontFamily:"var(--display)",fontWeight:700,fontSize:"0.9rem",color:"var(--ink)",marginBottom:8},children:"Punkte (global für diesen Song)"}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:10},children:w.jury.map(E=>{const R=D[E.id];return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[o.jsx("label",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.05em",textTransform:"uppercase",margin:0},children:ee(E.name)}),o.jsx("input",{type:"number",min:"1",max:"10",placeholder:"–",value:R!==void 0?R:"",onChange:J=>X(E.id,J.target.value),style:{width:"100%",textAlign:"center",fontFamily:"var(--number-font)",fontSize:"1.4rem",color:"var(--gold)",background:"linear-gradient(180deg, #2b1e0a 0%, #1a1106 50%, #0a0702 100%)",border:"1.5px solid rgba(255, 209, 102, 0.55)",borderRadius:12,padding:"8px 0",boxShadow:"inset 0 1px 0 rgba(255, 230, 150, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.7), 0 0 14px rgba(255, 209, 102, 0.08)"}})]},E.id)})})]})]}),o.jsxs("div",{className:"actions",children:[o.jsx("button",{className:"ghost",onClick:b,children:"Cancel"}),o.jsx("button",{className:"primary",onClick:te,children:"Save"})]})]})},xp=({entry:s,jurId:d,S:c,me:f,jname:h,songById:b,getRatings:w,onSave:z,onClose:P})=>{const k=b(s.songId),C=w(s),_=l?d||"j3":f,U=C[_],ae=h(_),[Q,Y]=A.useState(U??null);if(A.useEffect(()=>{if(!l)return;const I=D=>{if(D.target.tagName==="INPUT"||D.target.tagName==="TEXTAREA")return;let re=D.key;re==="0"&&(re="10");const X=parseInt(re);X>=1&&X<=10&&(Y(X),setTimeout(()=>{z(s.id,_,X)},150))};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[f,s.id,_,z]),!k)return null;const $=Q,N=(I,D)=>{const re=[];for(let X=I;X<=D;X++){const te=$===X;re.push(o.jsx("button",{className:"rate-modal-btn",style:{...Tt(Yt(X)),width:64,height:68,fontFamily:"var(--number-font)",fontSize:"2.2rem",borderRadius:16,border:"4px solid "+(te?"#fff":"transparent"),cursor:"pointer",display:"grid",placeItems:"center",padding:0,transition:"transform 0.15s ease-out, box-shadow 0.15s ease-out",...te?{boxShadow:"0 0 28px rgba(255,255,255,0.8), 0 0 0 2px #fff inset",transform:"scale(1.08)"}:{}},onClick:()=>Y($===X?null:X),children:X},X))}return re};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{textAlign:"center",marginBottom:20},children:[o.jsx("div",{style:{marginBottom:12,transform:"scale(1.8)",display:"inline-block",filter:"drop-shadow(0 4px 12px rgba(0,0,0,0.5))"},children:o.jsx(Qt,{cc:k.cc})}),o.jsx("h2",{style:{margin:"10px 0 4px",fontSize:"1.7rem"},children:ee(k.title)}),o.jsxs("p",{style:{color:"var(--muted)",margin:0,fontSize:"1rem"},children:[ee(k.artist)," · ",ee(Ze[k.cc]||k.cc.toUpperCase())]}),o.jsx("p",{style:{color:"var(--gold)",margin:"8px 0 0",fontSize:"0.85rem",fontWeight:800,letterSpacing:"0.08em",textTransform:"uppercase"},children:ee(ae)})]}),o.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(255,209,102,0.06) 0%, var(--panel2-solid) 100%)",border:"1px solid var(--line)",borderRadius:22,padding:"24px 20px",textAlign:"center",marginBottom:20,boxShadow:"inset 0 2px 8px rgba(0,0,0,0.3)"},children:[o.jsx("div",{style:{fontFamily:"var(--number-font)",fontSize:"2.8rem",color:"var(--gold)",marginBottom:22,letterSpacing:"0.03em",textShadow:"0 0 20px rgba(255,209,102,0.4)"},children:$!=null?o.jsxs(o.Fragment,{children:[$," ",o.jsx("span",{style:{fontSize:"1.2rem",color:"var(--muted)"},children:"/ 10 Pts"})]}):o.jsx("span",{style:{color:"var(--muted)",fontSize:"1.4rem"},children:"– Pts"})}),o.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",marginBottom:14,flexWrap:"wrap"},children:N(1,5)}),o.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:N(6,10)})]}),o.jsx("div",{className:"actions",style:{marginTop:18,justifyContent:"flex-end"},children:o.jsx("button",{className:"primary",onClick:()=>z(s.id,_,Q),style:{padding:"12px 32px",fontSize:"1rem"},children:"Fertig"})})]})},vp=({S:s,currentUser:d,onSaveNames:c,onImport:f,onExport:h,onOpenJson:b,onClose:w,showToast:z,autoHardReset:P,setAutoHardReset:k})=>{const C=!!d,[_,U]=A.useState(()=>{const Y={};return s.jury.forEach($=>Y[$.id]=$.name),Y}),ae=Y=>{const $=Y.target.files[0];if(!$)return;const N=new FileReader;N.onload=()=>{try{const I=JSON.parse(N.result);f(I)}catch{z("Invalid file","error")}},N.readAsText($)},Q=()=>{const Y=s.jury.map($=>({dataset:{jn:$.id},value:_[$.id]||""}));c(Y)};return o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"Settings"}),!C&&o.jsx("p",{className:"hint",style:{color:"var(--red)",fontWeight:600,background:"rgba(255,77,109,0.1)",padding:"10px 14px",borderRadius:10,border:"1px solid rgba(255,77,109,0.3)",marginBottom:16},children:"⚠️ Logge dich mit Google ein, um Export/Import/JSON zu nutzen."}),s.jury.map(Y=>o.jsxs("label",{children:[Y.id.toUpperCase()," Name",o.jsx("input",{value:_[Y.id]||"",onChange:$=>U(N=>({...N,[Y.id]:$.target.value}))})]},Y.id)),o.jsx("hr",{style:{border:0,borderTop:"1px solid var(--line)",margin:"20px 0"}}),o.jsxs("label",{style:{flexDirection:"row",alignItems:"center",gap:12,cursor:"pointer",background:"rgba(255,255,255,0.05)",padding:"12px",borderRadius:12,border:"1px solid var(--line)"},children:[o.jsx("input",{type:"checkbox",checked:P,onChange:Y=>{const $=Y.target.checked;k($),localStorage.setItem("esc-auto-reset",$?"true":"false")}}),o.jsx("span",{style:{color:"var(--ink)",fontWeight:600},children:"Auto-Hard-Reset beim Laden (Cache leeren)"})]}),o.jsxs("div",{className:"actions",style:{marginTop:18},children:[o.jsx("button",{className:"ghost",onClick:h,disabled:!C,children:"Export Data"}),o.jsxs("label",{style:{background:"var(--panel2-solid)",border:"1px solid var(--line)",borderRadius:999,padding:"9px 20px",cursor:C?"pointer":"not-allowed",textAlign:"center",fontWeight:600,opacity:C?1:.35},children:["Import Data",o.jsx("input",{type:"file",style:{display:"none"},disabled:!C,onChange:ae})]}),o.jsx("button",{className:"ghost",onClick:b,disabled:!C,children:"JSON"})]}),o.jsxs("div",{className:"actions",children:[o.jsx("button",{className:"ghost",onClick:w,children:"Close"}),o.jsx("button",{className:"primary",onClick:Q,children:"Save"})]})]})},yp=({S:s,onSave:d,onBack:c,onClose:f})=>{const[h,b]=A.useState(JSON.stringify(s,null,2));return o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"JSON Editor"}),o.jsx("p",{className:"hint",children:"Bearbeite den gesamten JSON-State direkt hier:"}),o.jsx("textarea",{value:h,onChange:w=>b(w.target.value),style:{width:"100%",height:320,fontFamily:"monospace",background:"var(--panel2-solid)",color:"var(--ink)",border:"1px solid var(--line)",borderRadius:12,padding:14,resize:"vertical",fontSize:"0.85rem",lineHeight:1.5}}),o.jsxs("div",{className:"actions",children:[o.jsx("button",{className:"ghost",onClick:c,children:"Zurück"}),o.jsx("button",{className:"primary",onClick:()=>d(h),children:"Speichern & Anwenden"})]})]})};let fr;g.view==="compare"?fr=sp():g.view==="library"?fr=up():g.yearId?fr=np():fr=qa();const bp=g.view==="home"&&!g.yearId;return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"wrap",children:o.jsxs("div",{id:"app",ref:K,children:[Zc(),fr]})}),o.jsx("div",{id:"fab_container",children:bp&&o.jsx("button",{className:"fab",onClick:()=>L("newYear"),title:"Add new contest",children:"＋"})}),o.jsx("div",{id:"toast-container",children:M.map(s=>o.jsx("div",{className:"toast "+(s.type||""),children:(s.type==="success"?"✓ ":s.type==="error"?"✗ ":"")+s.msg},s.id))}),o.jsx("dialog",{id:"dlg",ref:Z,className:S.mode==="song"||S.mode==="picker"||S.mode==="json"?"wide":"",children:S.open&&dp()})]})}const io=e=>new Promise((t,n)=>{const r=document.createElement("script");r.src=e,r.onload=t,r.onerror=n,document.head.appendChild(r)});(async()=>{try{window.firebase||(await io("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"),await io("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"),await io("https://www.gstatic.com/firebasejs/10.12.0/firebase-database-compat.js"))}catch(e){console.error("Firebase SDKs konnten nicht geladen werden:",e)}oo.createRoot(document.getElementById("root")).render(o.jsx(Wp.StrictMode,{children:o.jsx(ug,{})}))})();
