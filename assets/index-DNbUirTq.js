(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ip(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fd={exports:{}},cl={},gd={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ti=Symbol.for("react.element"),Tp=Symbol.for("react.portal"),Pp=Symbol.for("react.fragment"),Lp=Symbol.for("react.strict_mode"),_p=Symbol.for("react.profiler"),Rp=Symbol.for("react.provider"),Fp=Symbol.for("react.context"),Op=Symbol.for("react.forward_ref"),Ap=Symbol.for("react.suspense"),Mp=Symbol.for("react.memo"),Dp=Symbol.for("react.lazy"),ns=Symbol.iterator;function Bp(e){return e===null||typeof e!="object"?null:(e=ns&&e[ns]||e["@@iterator"],typeof e=="function"?e:null)}var md={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hd=Object.assign,xd={};function sr(e,t,n){this.props=e,this.context=t,this.refs=xd,this.updater=n||md}sr.prototype.isReactComponent={};sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vd(){}vd.prototype=sr.prototype;function na(e,t,n){this.props=e,this.context=t,this.refs=xd,this.updater=n||md}var ra=na.prototype=new vd;ra.constructor=na;hd(ra,sr.prototype);ra.isPureReactComponent=!0;var rs=Array.isArray,yd=Object.prototype.hasOwnProperty,ia={current:null},bd={key:!0,ref:!0,__self:!0,__source:!0};function wd(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)yd.call(t,r)&&!bd.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var d=Array(u),x=0;x<u;x++)d[x]=arguments[x+2];i.children=d}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:ti,type:e,key:o,ref:a,props:i,_owner:ia.current}}function Up(e,t){return{$$typeof:ti,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function la(e){return typeof e=="object"&&e!==null&&e.$$typeof===ti}function Hp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var is=/\/+/g;function _l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hp(""+e.key):t.toString(36)}function Ei(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ti:case Tp:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+_l(a,0):r,rs(i)?(n="",e!=null&&(n=e.replace(is,"$&/")+"/"),Ei(i,t,n,"",function(x){return x})):i!=null&&(la(i)&&(i=Up(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(is,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",rs(e))for(var u=0;u<e.length;u++){o=e[u];var d=r+_l(o,u);a+=Ei(o,t,n,d,i)}else if(d=Bp(e),typeof d=="function")for(e=d.call(e),u=0;!(o=e.next()).done;)o=o.value,d=r+_l(o,u++),a+=Ei(o,t,n,d,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function si(e,t,n){if(e==null)return e;var r=[],i=0;return Ei(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Wp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},zi={transition:null},Vp={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:zi,ReactCurrentOwner:ia};function kd(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:si,forEach:function(e,t,n){si(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return si(e,function(){t++}),t},toArray:function(e){return si(e,function(t){return t})||[]},only:function(e){if(!la(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};se.Component=sr;se.Fragment=Pp;se.Profiler=_p;se.PureComponent=na;se.StrictMode=Lp;se.Suspense=Ap;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vp;se.act=kd;se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hd({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ia.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(d in t)yd.call(t,d)&&!bd.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&u!==void 0?u[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var x=0;x<d;x++)u[x]=arguments[x+2];r.children=u}return{$$typeof:ti,type:e.type,key:i,ref:o,props:r,_owner:a}};se.createContext=function(e){return e={$$typeof:Fp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rp,_context:e},e.Consumer=e};se.createElement=wd;se.createFactory=function(e){var t=wd.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:Op,render:e}};se.isValidElement=la;se.lazy=function(e){return{$$typeof:Dp,_payload:{_status:-1,_result:e},_init:Wp}};se.memo=function(e,t){return{$$typeof:Mp,type:e,compare:t===void 0?null:t}};se.startTransition=function(e){var t=zi.transition;zi.transition={};try{e()}finally{zi.transition=t}};se.unstable_act=kd;se.useCallback=function(e,t){return Ve.current.useCallback(e,t)};se.useContext=function(e){return Ve.current.useContext(e)};se.useDebugValue=function(){};se.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};se.useEffect=function(e,t){return Ve.current.useEffect(e,t)};se.useId=function(){return Ve.current.useId()};se.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};se.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};se.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};se.useMemo=function(e,t){return Ve.current.useMemo(e,t)};se.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};se.useRef=function(e){return Ve.current.useRef(e)};se.useState=function(e){return Ve.current.useState(e)};se.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};se.useTransition=function(){return Ve.current.useTransition()};se.version="18.3.1";gd.exports=se;var D=gd.exports;const $p=Ip(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp=D,Yp=Symbol.for("react.element"),Kp=Symbol.for("react.fragment"),Gp=Object.prototype.hasOwnProperty,qp=Qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jp={key:!0,ref:!0,__self:!0,__source:!0};function Sd(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Gp.call(t,r)&&!Jp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Yp,type:e,key:o,ref:a,props:i,_owner:qp.current}}cl.Fragment=Kp;cl.jsx=Sd;cl.jsxs=Sd;fd.exports=cl;var l=fd.exports,so={},jd={exports:{}},lt={},Cd={exports:{}},Nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(V,ne){var Z=V.length;V.push(ne);e:for(;0<Z;){var te=Z-1>>>1,re=V[te];if(0<i(re,ne))V[te]=ne,V[Z]=re,Z=te;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var ne=V[0],Z=V.pop();if(Z!==ne){V[0]=Z;e:for(var te=0,re=V.length,hn=re>>>1;te<hn;){var ft=2*(te+1)-1,de=V[ft],Xe=ft+1,kt=V[Xe];if(0>i(de,Z))Xe<re&&0>i(kt,de)?(V[te]=kt,V[Xe]=Z,te=Xe):(V[te]=de,V[ft]=Z,te=ft);else if(Xe<re&&0>i(kt,Z))V[te]=kt,V[Xe]=Z,te=Xe;else break e}}return ne}function i(V,ne){var Z=V.sortIndex-ne.sortIndex;return Z!==0?Z:V.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,u=a.now();e.unstable_now=function(){return a.now()-u}}var d=[],x=[],C=1,N=null,S=3,h=!1,_=!1,O=!1,fe=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(V){for(var ne=n(x);ne!==null;){if(ne.callback===null)r(x);else if(ne.startTime<=V)r(x),ne.sortIndex=ne.expirationTime,t(d,ne);else break;ne=n(x)}}function R(V){if(O=!1,y(V),!_)if(n(d)!==null)_=!0,Pt(Y);else{var ne=n(x);ne!==null&&mn(R,ne.startTime-V)}}function Y(V,ne){_=!1,O&&(O=!1,v(J),J=-1),h=!0;var Z=S;try{for(y(ne),N=n(d);N!==null&&(!(N.expirationTime>ne)||V&&!Qe());){var te=N.callback;if(typeof te=="function"){N.callback=null,S=N.priorityLevel;var re=te(N.expirationTime<=ne);ne=e.unstable_now(),typeof re=="function"?N.callback=re:N===n(d)&&r(d),y(ne)}else r(d);N=n(d)}if(N!==null)var hn=!0;else{var ft=n(x);ft!==null&&mn(R,ft.startTime-ne),hn=!1}return hn}finally{N=null,S=Z,h=!1}}var q=!1,K=null,J=-1,xe=5,oe=-1;function Qe(){return!(e.unstable_now()-oe<xe)}function Wt(){if(K!==null){var V=e.unstable_now();oe=V;var ne=!0;try{ne=K(!0,V)}finally{ne?Vt():(q=!1,K=null)}}else q=!1}var Vt;if(typeof m=="function")Vt=function(){m(Wt)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,Se=ke.port2;ke.port1.onmessage=Wt,Vt=function(){Se.postMessage(null)}}else Vt=function(){fe(Wt,0)};function Pt(V){K=V,q||(q=!0,Vt())}function mn(V,ne){J=fe(function(){V(e.unstable_now())},ne)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(V){V.callback=null},e.unstable_continueExecution=function(){_||h||(_=!0,Pt(Y))},e.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<V?Math.floor(1e3/V):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(V){switch(S){case 1:case 2:case 3:var ne=3;break;default:ne=S}var Z=S;S=ne;try{return V()}finally{S=Z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(V,ne){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Z=S;S=V;try{return ne()}finally{S=Z}},e.unstable_scheduleCallback=function(V,ne,Z){var te=e.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?te+Z:te):Z=te,V){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Z+re,V={id:C++,callback:ne,priorityLevel:V,startTime:Z,expirationTime:re,sortIndex:-1},Z>te?(V.sortIndex=Z,t(x,V),n(d)===null&&V===n(x)&&(O?(v(J),J=-1):O=!0,mn(R,Z-te))):(V.sortIndex=re,t(d,V),_||h||(_=!0,Pt(Y))),V},e.unstable_shouldYield=Qe,e.unstable_wrapCallback=function(V){var ne=S;return function(){var Z=S;S=ne;try{return V.apply(this,arguments)}finally{S=Z}}}})(Nd);Cd.exports=Nd;var Xp=Cd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp=D,it=Xp;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ed=new Set,Mr={};function _n(e,t){tr(e,t),tr(e+"Capture",t)}function tr(e,t){for(Mr[e]=t,e=0;e<t.length;e++)Ed.add(t[e])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uo=Object.prototype.hasOwnProperty,ef=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ls={},os={};function tf(e){return uo.call(os,e)?!0:uo.call(ls,e)?!1:ef.test(e)?os[e]=!0:(ls[e]=!0,!1)}function nf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function rf(e,t,n,r){if(t===null||typeof t>"u"||nf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Oe[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Oe[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Oe[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Oe[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Oe[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Oe[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Oe[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Oe[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Oe[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function aa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(oa,aa);Oe[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(oa,aa);Oe[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(oa,aa);Oe[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Oe[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Oe[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function sa(e,t,n,r){var i=Oe.hasOwnProperty(t)?Oe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(rf(t,n,i,r)&&(n=null),r||i===null?tf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=Zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,di=Symbol.for("react.element"),An=Symbol.for("react.portal"),Mn=Symbol.for("react.fragment"),da=Symbol.for("react.strict_mode"),co=Symbol.for("react.profiler"),zd=Symbol.for("react.provider"),Id=Symbol.for("react.context"),ua=Symbol.for("react.forward_ref"),po=Symbol.for("react.suspense"),fo=Symbol.for("react.suspense_list"),ca=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),Td=Symbol.for("react.offscreen"),as=Symbol.iterator;function hr(e){return e===null||typeof e!="object"?null:(e=as&&e[as]||e["@@iterator"],typeof e=="function"?e:null)}var we=Object.assign,Rl;function jr(e){if(Rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rl=t&&t[1]||""}return`
`+Rl+e}var Fl=!1;function Ol(e,t){if(!e||Fl)return"";Fl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(x){var r=x}Reflect.construct(e,[],t)}else{try{t.call()}catch(x){r=x}e.call(t.prototype)}else{try{throw Error()}catch(x){r=x}e()}}catch(x){if(x&&r&&typeof x.stack=="string"){for(var i=x.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,u=o.length-1;1<=a&&0<=u&&i[a]!==o[u];)u--;for(;1<=a&&0<=u;a--,u--)if(i[a]!==o[u]){if(a!==1||u!==1)do if(a--,u--,0>u||i[a]!==o[u]){var d=`
`+i[a].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=a&&0<=u);break}}}finally{Fl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jr(e):""}function lf(e){switch(e.tag){case 5:return jr(e.type);case 16:return jr("Lazy");case 13:return jr("Suspense");case 19:return jr("SuspenseList");case 0:case 2:case 15:return e=Ol(e.type,!1),e;case 11:return e=Ol(e.type.render,!1),e;case 1:return e=Ol(e.type,!0),e;default:return""}}function go(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mn:return"Fragment";case An:return"Portal";case co:return"Profiler";case da:return"StrictMode";case po:return"Suspense";case fo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Id:return(e.displayName||"Context")+".Consumer";case zd:return(e._context.displayName||"Context")+".Provider";case ua:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ca:return t=e.displayName||null,t!==null?t:go(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return go(e(t))}catch{}}return null}function of(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return go(t);case 8:return t===da?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function af(e){var t=Pd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ui(e){e._valueTracker||(e._valueTracker=af(e))}function Ld(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mo(e,t){var n=t.checked;return we({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ss(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _d(e,t){t=t.checked,t!=null&&sa(e,"checked",t,!1)}function ho(e,t){_d(e,t);var n=un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xo(e,t.type,n):t.hasOwnProperty("defaultValue")&&xo(e,t.type,un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ds(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xo(e,t,n){(t!=="number"||Ui(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Cr=Array.isArray;function Gn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function vo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return we({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function us(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(Cr(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:un(n)}}function Rd(e,t){var n=un(t.value),r=un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ci,Od=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ci=ci||document.createElement("div"),ci.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ci.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sf=["Webkit","ms","Moz","O"];Object.keys(zr).forEach(function(e){sf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zr[t]=zr[e]})});function Ad(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||zr.hasOwnProperty(e)&&zr[e]?(""+t).trim():t+"px"}function Md(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ad(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var df=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bo(e,t){if(t){if(df[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function wo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ko=null;function pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var So=null,qn=null,Jn=null;function ps(e){if(e=ii(e)){if(typeof So!="function")throw Error(F(280));var t=e.stateNode;t&&(t=hl(t),So(e.stateNode,e.type,t))}}function Dd(e){qn?Jn?Jn.push(e):Jn=[e]:qn=e}function Bd(){if(qn){var e=qn,t=Jn;if(Jn=qn=null,ps(e),t)for(e=0;e<t.length;e++)ps(t[e])}}function Ud(e,t){return e(t)}function Hd(){}var Al=!1;function Wd(e,t,n){if(Al)return e(t,n);Al=!0;try{return Ud(e,t,n)}finally{Al=!1,(qn!==null||Jn!==null)&&(Hd(),Bd())}}function Br(e,t){var n=e.stateNode;if(n===null)return null;var r=hl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var jo=!1;if(Mt)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){jo=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{jo=!1}function uf(e,t,n,r,i,o,a,u,d){var x=Array.prototype.slice.call(arguments,3);try{t.apply(n,x)}catch(C){this.onError(C)}}var Ir=!1,Hi=null,Wi=!1,Co=null,cf={onError:function(e){Ir=!0,Hi=e}};function pf(e,t,n,r,i,o,a,u,d){Ir=!1,Hi=null,uf.apply(cf,arguments)}function ff(e,t,n,r,i,o,a,u,d){if(pf.apply(this,arguments),Ir){if(Ir){var x=Hi;Ir=!1,Hi=null}else throw Error(F(198));Wi||(Wi=!0,Co=x)}}function Rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fs(e){if(Rn(e)!==e)throw Error(F(188))}function gf(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return fs(i),e;if(o===r)return fs(i),t;o=o.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,u=i.child;u;){if(u===n){a=!0,n=i,r=o;break}if(u===r){a=!0,r=i,n=o;break}u=u.sibling}if(!a){for(u=o.child;u;){if(u===n){a=!0,n=o,r=i;break}if(u===r){a=!0,r=o,n=i;break}u=u.sibling}if(!a)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function $d(e){return e=gf(e),e!==null?Qd(e):null}function Qd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qd(e);if(t!==null)return t;e=e.sibling}return null}var Yd=it.unstable_scheduleCallback,gs=it.unstable_cancelCallback,mf=it.unstable_shouldYield,hf=it.unstable_requestPaint,Ne=it.unstable_now,xf=it.unstable_getCurrentPriorityLevel,fa=it.unstable_ImmediatePriority,Kd=it.unstable_UserBlockingPriority,Vi=it.unstable_NormalPriority,vf=it.unstable_LowPriority,Gd=it.unstable_IdlePriority,pl=null,It=null;function yf(e){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(pl,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:kf,bf=Math.log,wf=Math.LN2;function kf(e){return e>>>=0,e===0?32:31-(bf(e)/wf|0)|0}var pi=64,fi=4194304;function Nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $i(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var u=a&~i;u!==0?r=Nr(u):(o&=a,o!==0&&(r=Nr(o)))}else a=n&~i,a!==0?r=Nr(a):o!==0&&(r=Nr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),i=1<<n,r|=e[n],t&=~i;return r}function Sf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-yt(o),u=1<<a,d=i[a];d===-1?(!(u&n)||u&r)&&(i[a]=Sf(u,t)):d<=t&&(e.expiredLanes|=u),o&=~u}}function No(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qd(){var e=pi;return pi<<=1,!(pi&4194240)&&(pi=64),e}function Ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ni(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function Cf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-yt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ga(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ce=0;function Jd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xd,ma,Zd,eu,tu,Eo=!1,gi=[],tn=null,nn=null,rn=null,Ur=new Map,Hr=new Map,Jt=[],Nf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ms(e,t){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":nn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":Ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hr.delete(t.pointerId)}}function vr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ii(t),t!==null&&ma(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ef(e,t,n,r,i){switch(t){case"focusin":return tn=vr(tn,e,t,n,r,i),!0;case"dragenter":return nn=vr(nn,e,t,n,r,i),!0;case"mouseover":return rn=vr(rn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ur.set(o,vr(Ur.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Hr.set(o,vr(Hr.get(o)||null,e,t,n,r,i)),!0}return!1}function nu(e){var t=Sn(e.target);if(t!==null){var n=Rn(t);if(n!==null){if(t=n.tag,t===13){if(t=Vd(n),t!==null){e.blockedOn=t,tu(e.priority,function(){Zd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ko=r,n.target.dispatchEvent(r),ko=null}else return t=ii(n),t!==null&&ma(t),e.blockedOn=n,!1;t.shift()}return!0}function hs(e,t,n){Ii(e)&&n.delete(t)}function zf(){Eo=!1,tn!==null&&Ii(tn)&&(tn=null),nn!==null&&Ii(nn)&&(nn=null),rn!==null&&Ii(rn)&&(rn=null),Ur.forEach(hs),Hr.forEach(hs)}function yr(e,t){e.blockedOn===t&&(e.blockedOn=null,Eo||(Eo=!0,it.unstable_scheduleCallback(it.unstable_NormalPriority,zf)))}function Wr(e){function t(i){return yr(i,e)}if(0<gi.length){yr(gi[0],e);for(var n=1;n<gi.length;n++){var r=gi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tn!==null&&yr(tn,e),nn!==null&&yr(nn,e),rn!==null&&yr(rn,e),Ur.forEach(t),Hr.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)nu(n),n.blockedOn===null&&Jt.shift()}var Xn=Ht.ReactCurrentBatchConfig,Qi=!0;function If(e,t,n,r){var i=ce,o=Xn.transition;Xn.transition=null;try{ce=1,ha(e,t,n,r)}finally{ce=i,Xn.transition=o}}function Tf(e,t,n,r){var i=ce,o=Xn.transition;Xn.transition=null;try{ce=4,ha(e,t,n,r)}finally{ce=i,Xn.transition=o}}function ha(e,t,n,r){if(Qi){var i=zo(e,t,n,r);if(i===null)Kl(e,t,r,Yi,n),ms(e,r);else if(Ef(i,e,t,n,r))r.stopPropagation();else if(ms(e,r),t&4&&-1<Nf.indexOf(e)){for(;i!==null;){var o=ii(i);if(o!==null&&Xd(o),o=zo(e,t,n,r),o===null&&Kl(e,t,r,Yi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Kl(e,t,r,null,n)}}var Yi=null;function zo(e,t,n,r){if(Yi=null,e=pa(r),e=Sn(e),e!==null)if(t=Rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yi=e,null}function ru(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xf()){case fa:return 1;case Kd:return 4;case Vi:case vf:return 16;case Gd:return 536870912;default:return 16}default:return 16}}var Zt=null,xa=null,Ti=null;function iu(){if(Ti)return Ti;var e,t=xa,n=t.length,r,i="value"in Zt?Zt.value:Zt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ti=i.slice(e,1<r?1-r:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mi(){return!0}function xs(){return!1}function ot(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?mi:xs,this.isPropagationStopped=xs,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mi)},persist:function(){},isPersistent:mi}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},va=ot(dr),ri=we({},dr,{view:0,detail:0}),Pf=ot(ri),Dl,Bl,br,fl=we({},ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ya,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(Dl=e.screenX-br.screenX,Bl=e.screenY-br.screenY):Bl=Dl=0,br=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:Bl}}),vs=ot(fl),Lf=we({},fl,{dataTransfer:0}),_f=ot(Lf),Rf=we({},ri,{relatedTarget:0}),Ul=ot(Rf),Ff=we({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Of=ot(Ff),Af=we({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mf=ot(Af),Df=we({},dr,{data:0}),ys=ot(Df),Bf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hf[e])?!!t[e]:!1}function ya(){return Wf}var Vf=we({},ri,{key:function(e){if(e.key){var t=Bf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ya,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$f=ot(Vf),Qf=we({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bs=ot(Qf),Yf=we({},ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ya}),Kf=ot(Yf),Gf=we({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),qf=ot(Gf),Jf=we({},fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xf=ot(Jf),Zf=[9,13,27,32],ba=Mt&&"CompositionEvent"in window,Tr=null;Mt&&"documentMode"in document&&(Tr=document.documentMode);var e0=Mt&&"TextEvent"in window&&!Tr,lu=Mt&&(!ba||Tr&&8<Tr&&11>=Tr),ws=" ",ks=!1;function ou(e,t){switch(e){case"keyup":return Zf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function t0(e,t){switch(e){case"compositionend":return au(t);case"keypress":return t.which!==32?null:(ks=!0,ws);case"textInput":return e=t.data,e===ws&&ks?null:e;default:return null}}function n0(e,t){if(Dn)return e==="compositionend"||!ba&&ou(e,t)?(e=iu(),Ti=xa=Zt=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lu&&t.locale!=="ko"?null:t.data;default:return null}}var r0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!r0[e.type]:t==="textarea"}function su(e,t,n,r){Dd(r),t=Ki(t,"onChange"),0<t.length&&(n=new va("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pr=null,Vr=null;function i0(e){yu(e,0)}function gl(e){var t=Hn(e);if(Ld(t))return e}function l0(e,t){if(e==="change")return t}var du=!1;if(Mt){var Hl;if(Mt){var Wl="oninput"in document;if(!Wl){var js=document.createElement("div");js.setAttribute("oninput","return;"),Wl=typeof js.oninput=="function"}Hl=Wl}else Hl=!1;du=Hl&&(!document.documentMode||9<document.documentMode)}function Cs(){Pr&&(Pr.detachEvent("onpropertychange",uu),Vr=Pr=null)}function uu(e){if(e.propertyName==="value"&&gl(Vr)){var t=[];su(t,Vr,e,pa(e)),Wd(i0,t)}}function o0(e,t,n){e==="focusin"?(Cs(),Pr=t,Vr=n,Pr.attachEvent("onpropertychange",uu)):e==="focusout"&&Cs()}function a0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(Vr)}function s0(e,t){if(e==="click")return gl(t)}function d0(e,t){if(e==="input"||e==="change")return gl(t)}function u0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:u0;function $r(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uo.call(t,i)||!wt(e[i],t[i]))return!1}return!0}function Ns(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Es(e,t){var n=Ns(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ns(n)}}function cu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pu(){for(var e=window,t=Ui();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ui(e.document)}return t}function wa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function c0(e){var t=pu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&cu(n.ownerDocument.documentElement,n)){if(r!==null&&wa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Es(n,o);var a=Es(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var p0=Mt&&"documentMode"in document&&11>=document.documentMode,Bn=null,Io=null,Lr=null,To=!1;function zs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;To||Bn==null||Bn!==Ui(r)||(r=Bn,"selectionStart"in r&&wa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&$r(Lr,r)||(Lr=r,r=Ki(Io,"onSelect"),0<r.length&&(t=new va("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bn)))}function hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Un={animationend:hi("Animation","AnimationEnd"),animationiteration:hi("Animation","AnimationIteration"),animationstart:hi("Animation","AnimationStart"),transitionend:hi("Transition","TransitionEnd")},Vl={},fu={};Mt&&(fu=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function ml(e){if(Vl[e])return Vl[e];if(!Un[e])return e;var t=Un[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fu)return Vl[e]=t[n];return e}var gu=ml("animationend"),mu=ml("animationiteration"),hu=ml("animationstart"),xu=ml("transitionend"),vu=new Map,Is="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(e,t){vu.set(e,t),_n(t,[e])}for(var $l=0;$l<Is.length;$l++){var Ql=Is[$l],f0=Ql.toLowerCase(),g0=Ql[0].toUpperCase()+Ql.slice(1);pn(f0,"on"+g0)}pn(gu,"onAnimationEnd");pn(mu,"onAnimationIteration");pn(hu,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(xu,"onTransitionEnd");tr("onMouseEnter",["mouseout","mouseover"]);tr("onMouseLeave",["mouseout","mouseover"]);tr("onPointerEnter",["pointerout","pointerover"]);tr("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function Ts(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ff(r,t,void 0,e),e.currentTarget=null}function yu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var u=r[a],d=u.instance,x=u.currentTarget;if(u=u.listener,d!==o&&i.isPropagationStopped())break e;Ts(i,u,x),o=d}else for(a=0;a<r.length;a++){if(u=r[a],d=u.instance,x=u.currentTarget,u=u.listener,d!==o&&i.isPropagationStopped())break e;Ts(i,u,x),o=d}}}if(Wi)throw e=Co,Wi=!1,Co=null,e}function me(e,t){var n=t[Fo];n===void 0&&(n=t[Fo]=new Set);var r=e+"__bubble";n.has(r)||(bu(t,e,2,!1),n.add(r))}function Yl(e,t,n){var r=0;t&&(r|=4),bu(n,e,r,t)}var xi="_reactListening"+Math.random().toString(36).slice(2);function Qr(e){if(!e[xi]){e[xi]=!0,Ed.forEach(function(n){n!=="selectionchange"&&(m0.has(n)||Yl(n,!1,e),Yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xi]||(t[xi]=!0,Yl("selectionchange",!1,t))}}function bu(e,t,n,r){switch(ru(t)){case 1:var i=If;break;case 4:i=Tf;break;default:i=ha}n=i.bind(null,t,n,e),i=void 0,!jo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Kl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var d=a.tag;if((d===3||d===4)&&(d=a.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;a=a.return}for(;u!==null;){if(a=Sn(u),a===null)return;if(d=a.tag,d===5||d===6){r=o=a;continue e}u=u.parentNode}}r=r.return}Wd(function(){var x=o,C=pa(n),N=[];e:{var S=vu.get(e);if(S!==void 0){var h=va,_=e;switch(e){case"keypress":if(Pi(n)===0)break e;case"keydown":case"keyup":h=$f;break;case"focusin":_="focus",h=Ul;break;case"focusout":_="blur",h=Ul;break;case"beforeblur":case"afterblur":h=Ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=_f;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Kf;break;case gu:case mu:case hu:h=Of;break;case xu:h=qf;break;case"scroll":h=Pf;break;case"wheel":h=Xf;break;case"copy":case"cut":case"paste":h=Mf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=bs}var O=(t&4)!==0,fe=!O&&e==="scroll",v=O?S!==null?S+"Capture":null:S;O=[];for(var m=x,y;m!==null;){y=m;var R=y.stateNode;if(y.tag===5&&R!==null&&(y=R,v!==null&&(R=Br(m,v),R!=null&&O.push(Yr(m,R,y)))),fe)break;m=m.return}0<O.length&&(S=new h(S,_,null,n,C),N.push({event:S,listeners:O}))}}if(!(t&7)){e:{if(S=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",S&&n!==ko&&(_=n.relatedTarget||n.fromElement)&&(Sn(_)||_[Dt]))break e;if((h||S)&&(S=C.window===C?C:(S=C.ownerDocument)?S.defaultView||S.parentWindow:window,h?(_=n.relatedTarget||n.toElement,h=x,_=_?Sn(_):null,_!==null&&(fe=Rn(_),_!==fe||_.tag!==5&&_.tag!==6)&&(_=null)):(h=null,_=x),h!==_)){if(O=vs,R="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(O=bs,R="onPointerLeave",v="onPointerEnter",m="pointer"),fe=h==null?S:Hn(h),y=_==null?S:Hn(_),S=new O(R,m+"leave",h,n,C),S.target=fe,S.relatedTarget=y,R=null,Sn(C)===x&&(O=new O(v,m+"enter",_,n,C),O.target=y,O.relatedTarget=fe,R=O),fe=R,h&&_)t:{for(O=h,v=_,m=0,y=O;y;y=Fn(y))m++;for(y=0,R=v;R;R=Fn(R))y++;for(;0<m-y;)O=Fn(O),m--;for(;0<y-m;)v=Fn(v),y--;for(;m--;){if(O===v||v!==null&&O===v.alternate)break t;O=Fn(O),v=Fn(v)}O=null}else O=null;h!==null&&Ps(N,S,h,O,!1),_!==null&&fe!==null&&Ps(N,fe,_,O,!0)}}e:{if(S=x?Hn(x):window,h=S.nodeName&&S.nodeName.toLowerCase(),h==="select"||h==="input"&&S.type==="file")var Y=l0;else if(Ss(S))if(du)Y=d0;else{Y=a0;var q=o0}else(h=S.nodeName)&&h.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(Y=s0);if(Y&&(Y=Y(e,x))){su(N,Y,n,C);break e}q&&q(e,S,x),e==="focusout"&&(q=S._wrapperState)&&q.controlled&&S.type==="number"&&xo(S,"number",S.value)}switch(q=x?Hn(x):window,e){case"focusin":(Ss(q)||q.contentEditable==="true")&&(Bn=q,Io=x,Lr=null);break;case"focusout":Lr=Io=Bn=null;break;case"mousedown":To=!0;break;case"contextmenu":case"mouseup":case"dragend":To=!1,zs(N,n,C);break;case"selectionchange":if(p0)break;case"keydown":case"keyup":zs(N,n,C)}var K;if(ba)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else Dn?ou(e,n)&&(J="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(J="onCompositionStart");J&&(lu&&n.locale!=="ko"&&(Dn||J!=="onCompositionStart"?J==="onCompositionEnd"&&Dn&&(K=iu()):(Zt=C,xa="value"in Zt?Zt.value:Zt.textContent,Dn=!0)),q=Ki(x,J),0<q.length&&(J=new ys(J,e,null,n,C),N.push({event:J,listeners:q}),K?J.data=K:(K=au(n),K!==null&&(J.data=K)))),(K=e0?t0(e,n):n0(e,n))&&(x=Ki(x,"onBeforeInput"),0<x.length&&(C=new ys("onBeforeInput","beforeinput",null,n,C),N.push({event:C,listeners:x}),C.data=K))}yu(N,t)})}function Yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ki(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Br(e,n),o!=null&&r.unshift(Yr(e,o,i)),o=Br(e,t),o!=null&&r.push(Yr(e,o,i))),e=e.return}return r}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ps(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var u=n,d=u.alternate,x=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&x!==null&&(u=x,i?(d=Br(n,o),d!=null&&a.unshift(Yr(n,d,u))):i||(d=Br(n,o),d!=null&&a.push(Yr(n,d,u)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var h0=/\r\n?/g,x0=/\u0000|\uFFFD/g;function Ls(e){return(typeof e=="string"?e:""+e).replace(h0,`
`).replace(x0,"")}function vi(e,t,n){if(t=Ls(t),Ls(e)!==t&&n)throw Error(F(425))}function Gi(){}var Po=null,Lo=null;function _o(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ro=typeof setTimeout=="function"?setTimeout:void 0,v0=typeof clearTimeout=="function"?clearTimeout:void 0,_s=typeof Promise=="function"?Promise:void 0,y0=typeof queueMicrotask=="function"?queueMicrotask:typeof _s<"u"?function(e){return _s.resolve(null).then(e).catch(b0)}:Ro;function b0(e){setTimeout(function(){throw e})}function Gl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wr(t)}function ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ur=Math.random().toString(36).slice(2),zt="__reactFiber$"+ur,Kr="__reactProps$"+ur,Dt="__reactContainer$"+ur,Fo="__reactEvents$"+ur,w0="__reactListeners$"+ur,k0="__reactHandles$"+ur;function Sn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rs(e);e!==null;){if(n=e[zt])return n;e=Rs(e)}return t}e=n,n=e.parentNode}return null}function ii(e){return e=e[zt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function hl(e){return e[Kr]||null}var Oo=[],Wn=-1;function fn(e){return{current:e}}function he(e){0>Wn||(e.current=Oo[Wn],Oo[Wn]=null,Wn--)}function ge(e,t){Wn++,Oo[Wn]=e.current,e.current=t}var cn={},Ue=fn(cn),Ge=fn(!1),zn=cn;function nr(e,t){var n=e.type.contextTypes;if(!n)return cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qe(e){return e=e.childContextTypes,e!=null}function qi(){he(Ge),he(Ue)}function Fs(e,t,n){if(Ue.current!==cn)throw Error(F(168));ge(Ue,t),ge(Ge,n)}function wu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(F(108,of(e)||"Unknown",i));return we({},n,r)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,zn=Ue.current,ge(Ue,e),ge(Ge,Ge.current),!0}function Os(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=wu(e,t,zn),r.__reactInternalMemoizedMergedChildContext=e,he(Ge),he(Ue),ge(Ue,e)):he(Ge),ge(Ge,n)}var Rt=null,xl=!1,ql=!1;function ku(e){Rt===null?Rt=[e]:Rt.push(e)}function S0(e){xl=!0,ku(e)}function gn(){if(!ql&&Rt!==null){ql=!0;var e=0,t=ce;try{var n=Rt;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rt=null,xl=!1}catch(i){throw Rt!==null&&(Rt=Rt.slice(e+1)),Yd(fa,gn),i}finally{ce=t,ql=!1}}return null}var Vn=[],$n=0,Xi=null,Zi=0,at=[],st=0,In=null,Ft=1,Ot="";function wn(e,t){Vn[$n++]=Zi,Vn[$n++]=Xi,Xi=e,Zi=t}function Su(e,t,n){at[st++]=Ft,at[st++]=Ot,at[st++]=In,In=e;var r=Ft;e=Ot;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var o=32-yt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ft=1<<32-yt(t)+i|n<<i|r,Ot=o+e}else Ft=1<<o|n<<i|r,Ot=e}function ka(e){e.return!==null&&(wn(e,1),Su(e,1,0))}function Sa(e){for(;e===Xi;)Xi=Vn[--$n],Vn[$n]=null,Zi=Vn[--$n],Vn[$n]=null;for(;e===In;)In=at[--st],at[st]=null,Ot=at[--st],at[st]=null,Ft=at[--st],at[st]=null}var rt=null,nt=null,ve=!1,vt=null;function ju(e,t){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function As(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rt=e,nt=ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rt=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:Ft,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,rt=e,nt=null,!0):!1;default:return!1}}function Ao(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mo(e){if(ve){var t=nt;if(t){var n=t;if(!As(e,t)){if(Ao(e))throw Error(F(418));t=ln(n.nextSibling);var r=rt;t&&As(e,t)?ju(r,n):(e.flags=e.flags&-4097|2,ve=!1,rt=e)}}else{if(Ao(e))throw Error(F(418));e.flags=e.flags&-4097|2,ve=!1,rt=e}}}function Ms(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function yi(e){if(e!==rt)return!1;if(!ve)return Ms(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_o(e.type,e.memoizedProps)),t&&(t=nt)){if(Ao(e))throw Cu(),Error(F(418));for(;t;)ju(e,t),t=ln(t.nextSibling)}if(Ms(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=rt?ln(e.stateNode.nextSibling):null;return!0}function Cu(){for(var e=nt;e;)e=ln(e.nextSibling)}function rr(){nt=rt=null,ve=!1}function ja(e){vt===null?vt=[e]:vt.push(e)}var j0=Ht.ReactCurrentBatchConfig;function wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var u=i.refs;a===null?delete u[o]:u[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function bi(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ds(e){var t=e._init;return t(e._payload)}function Nu(e){function t(v,m){if(e){var y=v.deletions;y===null?(v.deletions=[m],v.flags|=16):y.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function i(v,m){return v=dn(v,m),v.index=0,v.sibling=null,v}function o(v,m,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<m?(v.flags|=2,m):y):(v.flags|=2,m)):(v.flags|=1048576,m)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function u(v,m,y,R){return m===null||m.tag!==6?(m=ro(y,v.mode,R),m.return=v,m):(m=i(m,y),m.return=v,m)}function d(v,m,y,R){var Y=y.type;return Y===Mn?C(v,m,y.props.children,R,y.key):m!==null&&(m.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Gt&&Ds(Y)===m.type)?(R=i(m,y.props),R.ref=wr(v,m,y),R.return=v,R):(R=Mi(y.type,y.key,y.props,null,v.mode,R),R.ref=wr(v,m,y),R.return=v,R)}function x(v,m,y,R){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=io(y,v.mode,R),m.return=v,m):(m=i(m,y.children||[]),m.return=v,m)}function C(v,m,y,R,Y){return m===null||m.tag!==7?(m=En(y,v.mode,R,Y),m.return=v,m):(m=i(m,y),m.return=v,m)}function N(v,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ro(""+m,v.mode,y),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case di:return y=Mi(m.type,m.key,m.props,null,v.mode,y),y.ref=wr(v,null,m),y.return=v,y;case An:return m=io(m,v.mode,y),m.return=v,m;case Gt:var R=m._init;return N(v,R(m._payload),y)}if(Cr(m)||hr(m))return m=En(m,v.mode,y,null),m.return=v,m;bi(v,m)}return null}function S(v,m,y,R){var Y=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return Y!==null?null:u(v,m,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case di:return y.key===Y?d(v,m,y,R):null;case An:return y.key===Y?x(v,m,y,R):null;case Gt:return Y=y._init,S(v,m,Y(y._payload),R)}if(Cr(y)||hr(y))return Y!==null?null:C(v,m,y,R,null);bi(v,y)}return null}function h(v,m,y,R,Y){if(typeof R=="string"&&R!==""||typeof R=="number")return v=v.get(y)||null,u(m,v,""+R,Y);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case di:return v=v.get(R.key===null?y:R.key)||null,d(m,v,R,Y);case An:return v=v.get(R.key===null?y:R.key)||null,x(m,v,R,Y);case Gt:var q=R._init;return h(v,m,y,q(R._payload),Y)}if(Cr(R)||hr(R))return v=v.get(y)||null,C(m,v,R,Y,null);bi(m,R)}return null}function _(v,m,y,R){for(var Y=null,q=null,K=m,J=m=0,xe=null;K!==null&&J<y.length;J++){K.index>J?(xe=K,K=null):xe=K.sibling;var oe=S(v,K,y[J],R);if(oe===null){K===null&&(K=xe);break}e&&K&&oe.alternate===null&&t(v,K),m=o(oe,m,J),q===null?Y=oe:q.sibling=oe,q=oe,K=xe}if(J===y.length)return n(v,K),ve&&wn(v,J),Y;if(K===null){for(;J<y.length;J++)K=N(v,y[J],R),K!==null&&(m=o(K,m,J),q===null?Y=K:q.sibling=K,q=K);return ve&&wn(v,J),Y}for(K=r(v,K);J<y.length;J++)xe=h(K,v,J,y[J],R),xe!==null&&(e&&xe.alternate!==null&&K.delete(xe.key===null?J:xe.key),m=o(xe,m,J),q===null?Y=xe:q.sibling=xe,q=xe);return e&&K.forEach(function(Qe){return t(v,Qe)}),ve&&wn(v,J),Y}function O(v,m,y,R){var Y=hr(y);if(typeof Y!="function")throw Error(F(150));if(y=Y.call(y),y==null)throw Error(F(151));for(var q=Y=null,K=m,J=m=0,xe=null,oe=y.next();K!==null&&!oe.done;J++,oe=y.next()){K.index>J?(xe=K,K=null):xe=K.sibling;var Qe=S(v,K,oe.value,R);if(Qe===null){K===null&&(K=xe);break}e&&K&&Qe.alternate===null&&t(v,K),m=o(Qe,m,J),q===null?Y=Qe:q.sibling=Qe,q=Qe,K=xe}if(oe.done)return n(v,K),ve&&wn(v,J),Y;if(K===null){for(;!oe.done;J++,oe=y.next())oe=N(v,oe.value,R),oe!==null&&(m=o(oe,m,J),q===null?Y=oe:q.sibling=oe,q=oe);return ve&&wn(v,J),Y}for(K=r(v,K);!oe.done;J++,oe=y.next())oe=h(K,v,J,oe.value,R),oe!==null&&(e&&oe.alternate!==null&&K.delete(oe.key===null?J:oe.key),m=o(oe,m,J),q===null?Y=oe:q.sibling=oe,q=oe);return e&&K.forEach(function(Wt){return t(v,Wt)}),ve&&wn(v,J),Y}function fe(v,m,y,R){if(typeof y=="object"&&y!==null&&y.type===Mn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case di:e:{for(var Y=y.key,q=m;q!==null;){if(q.key===Y){if(Y=y.type,Y===Mn){if(q.tag===7){n(v,q.sibling),m=i(q,y.props.children),m.return=v,v=m;break e}}else if(q.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Gt&&Ds(Y)===q.type){n(v,q.sibling),m=i(q,y.props),m.ref=wr(v,q,y),m.return=v,v=m;break e}n(v,q);break}else t(v,q);q=q.sibling}y.type===Mn?(m=En(y.props.children,v.mode,R,y.key),m.return=v,v=m):(R=Mi(y.type,y.key,y.props,null,v.mode,R),R.ref=wr(v,m,y),R.return=v,v=R)}return a(v);case An:e:{for(q=y.key;m!==null;){if(m.key===q)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(v,m.sibling),m=i(m,y.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=io(y,v.mode,R),m.return=v,v=m}return a(v);case Gt:return q=y._init,fe(v,m,q(y._payload),R)}if(Cr(y))return _(v,m,y,R);if(hr(y))return O(v,m,y,R);bi(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(v,m.sibling),m=i(m,y),m.return=v,v=m):(n(v,m),m=ro(y,v.mode,R),m.return=v,v=m),a(v)):n(v,m)}return fe}var ir=Nu(!0),Eu=Nu(!1),el=fn(null),tl=null,Qn=null,Ca=null;function Na(){Ca=Qn=tl=null}function Ea(e){var t=el.current;he(el),e._currentValue=t}function Do(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zn(e,t){tl=e,Ca=Qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:t,next:null},Qn===null){if(tl===null)throw Error(F(308));Qn=e,tl.dependencies={lanes:0,firstContext:e}}else Qn=Qn.next=e;return t}var jn=null;function za(e){jn===null?jn=[e]:jn.push(e)}function zu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,za(t)):(n.next=i.next,i.next=n),t.interleaved=n,Bt(e,r)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function Ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function on(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Bt(e,n)}return i=r.interleaved,i===null?(t.next=t,za(r)):(t.next=i.next,i.next=t),r.interleaved=t,Bt(e,n)}function Li(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ga(e,n)}}function Bs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function nl(e,t,n,r){var i=e.updateQueue;qt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var d=u,x=d.next;d.next=null,a===null?o=x:a.next=x,a=d;var C=e.alternate;C!==null&&(C=C.updateQueue,u=C.lastBaseUpdate,u!==a&&(u===null?C.firstBaseUpdate=x:u.next=x,C.lastBaseUpdate=d))}if(o!==null){var N=i.baseState;a=0,C=x=d=null,u=o;do{var S=u.lane,h=u.eventTime;if((r&S)===S){C!==null&&(C=C.next={eventTime:h,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var _=e,O=u;switch(S=t,h=n,O.tag){case 1:if(_=O.payload,typeof _=="function"){N=_.call(h,N,S);break e}N=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=O.payload,S=typeof _=="function"?_.call(h,N,S):_,S==null)break e;N=we({},N,S);break e;case 2:qt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,S=i.effects,S===null?i.effects=[u]:S.push(u))}else h={eventTime:h,lane:S,tag:u.tag,payload:u.payload,callback:u.callback,next:null},C===null?(x=C=h,d=N):C=C.next=h,a|=S;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;S=u,u=S.next,S.next=null,i.lastBaseUpdate=S,i.shared.pending=null}}while(!0);if(C===null&&(d=N),i.baseState=d,i.firstBaseUpdate=x,i.lastBaseUpdate=C,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Pn|=a,e.lanes=a,e.memoizedState=N}}function Us(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var li={},Tt=fn(li),Gr=fn(li),qr=fn(li);function Cn(e){if(e===li)throw Error(F(174));return e}function Ta(e,t){switch(ge(qr,t),ge(Gr,e),ge(Tt,li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yo(t,e)}he(Tt),ge(Tt,t)}function lr(){he(Tt),he(Gr),he(qr)}function Tu(e){Cn(qr.current);var t=Cn(Tt.current),n=yo(t,e.type);t!==n&&(ge(Gr,e),ge(Tt,n))}function Pa(e){Gr.current===e&&(he(Tt),he(Gr))}var ye=fn(0);function rl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jl=[];function La(){for(var e=0;e<Jl.length;e++)Jl[e]._workInProgressVersionPrimary=null;Jl.length=0}var _i=Ht.ReactCurrentDispatcher,Xl=Ht.ReactCurrentBatchConfig,Tn=0,be=null,ze=null,Pe=null,il=!1,_r=!1,Jr=0,C0=0;function Me(){throw Error(F(321))}function _a(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function Ra(e,t,n,r,i,o){if(Tn=o,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_i.current=e===null||e.memoizedState===null?I0:T0,e=n(r,i),_r){o=0;do{if(_r=!1,Jr=0,25<=o)throw Error(F(301));o+=1,Pe=ze=null,t.updateQueue=null,_i.current=P0,e=n(r,i)}while(_r)}if(_i.current=ll,t=ze!==null&&ze.next!==null,Tn=0,Pe=ze=be=null,il=!1,t)throw Error(F(300));return e}function Fa(){var e=Jr!==0;return Jr=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?be.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function pt(){if(ze===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Pe===null?be.memoizedState:Pe.next;if(t!==null)Pe=t,ze=e;else{if(e===null)throw Error(F(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Pe===null?be.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function Xr(e,t){return typeof t=="function"?t(e):t}function Zl(e){var t=pt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=ze,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=a=null,d=null,x=o;do{var C=x.lane;if((Tn&C)===C)d!==null&&(d=d.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),r=x.hasEagerState?x.eagerState:e(r,x.action);else{var N={lane:C,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};d===null?(u=d=N,a=r):d=d.next=N,be.lanes|=C,Pn|=C}x=x.next}while(x!==null&&x!==o);d===null?a=r:d.next=u,wt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,be.lanes|=o,Pn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function eo(e){var t=pt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);wt(o,t.memoizedState)||(Ke=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Pu(){}function Lu(e,t){var n=be,r=pt(),i=t(),o=!wt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ke=!0),r=r.queue,Oa(Fu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,Zr(9,Ru.bind(null,n,r,i,t),void 0,null),Le===null)throw Error(F(349));Tn&30||_u(n,t,i)}return i}function _u(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ru(e,t,n,r){t.value=n,t.getSnapshot=r,Ou(t)&&Au(e)}function Fu(e,t,n){return n(function(){Ou(t)&&Au(e)})}function Ou(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function Au(e){var t=Bt(e,1);t!==null&&bt(t,e,1,-1)}function Hs(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:e},t.queue=e,e=e.dispatch=z0.bind(null,be,e),[t.memoizedState,e]}function Zr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mu(){return pt().memoizedState}function Ri(e,t,n,r){var i=Et();be.flags|=e,i.memoizedState=Zr(1|t,n,void 0,r===void 0?null:r)}function vl(e,t,n,r){var i=pt();r=r===void 0?null:r;var o=void 0;if(ze!==null){var a=ze.memoizedState;if(o=a.destroy,r!==null&&_a(r,a.deps)){i.memoizedState=Zr(t,n,o,r);return}}be.flags|=e,i.memoizedState=Zr(1|t,n,o,r)}function Ws(e,t){return Ri(8390656,8,e,t)}function Oa(e,t){return vl(2048,8,e,t)}function Du(e,t){return vl(4,2,e,t)}function Bu(e,t){return vl(4,4,e,t)}function Uu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hu(e,t,n){return n=n!=null?n.concat([e]):null,vl(4,4,Uu.bind(null,t,e),n)}function Aa(){}function Wu(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_a(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vu(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_a(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $u(e,t,n){return Tn&21?(wt(n,t)||(n=qd(),be.lanes|=n,Pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function N0(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=Xl.transition;Xl.transition={};try{e(!1),t()}finally{ce=n,Xl.transition=r}}function Qu(){return pt().memoizedState}function E0(e,t,n){var r=sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yu(e))Ku(t,n);else if(n=zu(e,t,n,r),n!==null){var i=We();bt(n,e,r,i),Gu(n,t,r)}}function z0(e,t,n){var r=sn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yu(e))Ku(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,u=o(a,n);if(i.hasEagerState=!0,i.eagerState=u,wt(u,a)){var d=t.interleaved;d===null?(i.next=i,za(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=zu(e,t,i,r),n!==null&&(i=We(),bt(n,e,r,i),Gu(n,t,r))}}function Yu(e){var t=e.alternate;return e===be||t!==null&&t===be}function Ku(e,t){_r=il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ga(e,n)}}var ll={readContext:ct,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},I0={readContext:ct,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:Ws,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ri(4194308,4,Uu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ri(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=E0.bind(null,be,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:Hs,useDebugValue:Aa,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=Hs(!1),t=e[0];return e=N0.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=be,i=Et();if(ve){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),Le===null)throw Error(F(349));Tn&30||_u(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ws(Fu.bind(null,r,o,e),[e]),r.flags|=2048,Zr(9,Ru.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Et(),t=Le.identifierPrefix;if(ve){var n=Ot,r=Ft;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=C0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},T0={readContext:ct,useCallback:Wu,useContext:ct,useEffect:Oa,useImperativeHandle:Hu,useInsertionEffect:Du,useLayoutEffect:Bu,useMemo:Vu,useReducer:Zl,useRef:Mu,useState:function(){return Zl(Xr)},useDebugValue:Aa,useDeferredValue:function(e){var t=pt();return $u(t,ze.memoizedState,e)},useTransition:function(){var e=Zl(Xr)[0],t=pt().memoizedState;return[e,t]},useMutableSource:Pu,useSyncExternalStore:Lu,useId:Qu,unstable_isNewReconciler:!1},P0={readContext:ct,useCallback:Wu,useContext:ct,useEffect:Oa,useImperativeHandle:Hu,useInsertionEffect:Du,useLayoutEffect:Bu,useMemo:Vu,useReducer:eo,useRef:Mu,useState:function(){return eo(Xr)},useDebugValue:Aa,useDeferredValue:function(e){var t=pt();return ze===null?t.memoizedState=e:$u(t,ze.memoizedState,e)},useTransition:function(){var e=eo(Xr)[0],t=pt().memoizedState;return[e,t]},useMutableSource:Pu,useSyncExternalStore:Lu,useId:Qu,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=we({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Bo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yl={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=We(),i=sn(e),o=At(r,i);o.payload=t,n!=null&&(o.callback=n),t=on(e,o,i),t!==null&&(bt(t,e,i,r),Li(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=We(),i=sn(e),o=At(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=on(e,o,i),t!==null&&(bt(t,e,i,r),Li(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),r=sn(e),i=At(n,r);i.tag=2,t!=null&&(i.callback=t),t=on(e,i,r),t!==null&&(bt(t,e,r,n),Li(t,e,r))}};function Vs(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(i,o):!0}function qu(e,t,n){var r=!1,i=cn,o=t.contextType;return typeof o=="object"&&o!==null?o=ct(o):(i=qe(t)?zn:Ue.current,r=t.contextTypes,o=(r=r!=null)?nr(e,i):cn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=yl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function $s(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&yl.enqueueReplaceState(t,t.state,null)}function Uo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ia(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ct(o):(o=qe(t)?zn:Ue.current,i.context=nr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Bo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&yl.enqueueReplaceState(i,i.state,null),nl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t){try{var n="",r=t;do n+=lf(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function to(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ho(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var L0=typeof WeakMap=="function"?WeakMap:Map;function Ju(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){al||(al=!0,Xo=r),Ho(e,t)},n}function Xu(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ho(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ho(e,t),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Qs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new L0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Q0.bind(null,e,t,n),t.then(e,e))}function Ys(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ks(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,on(n,t,1))),n.lanes|=1),e)}var _0=Ht.ReactCurrentOwner,Ke=!1;function He(e,t,n,r){t.child=e===null?Eu(t,null,n,r):ir(t,e.child,n,r)}function Gs(e,t,n,r,i){n=n.render;var o=t.ref;return Zn(t,i),r=Ra(e,t,n,r,o,i),n=Fa(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(ve&&n&&ka(t),t.flags|=1,He(e,t,r,i),t.child)}function qs(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!$a(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Zu(e,t,o,r,i)):(e=Mi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(a,r)&&e.ref===t.ref)return Ut(e,t,i)}return t.flags|=1,e=dn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Zu(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if($r(o,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,Ut(e,t,i)}return Wo(e,t,n,r,i)}function ec(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Kn,tt),tt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Kn,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ge(Kn,tt),tt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ge(Kn,tt),tt|=r;return He(e,t,i,n),t.child}function tc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wo(e,t,n,r,i){var o=qe(n)?zn:Ue.current;return o=nr(t,o),Zn(t,i),n=Ra(e,t,n,r,o,i),r=Fa(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(ve&&r&&ka(t),t.flags|=1,He(e,t,n,i),t.child)}function Js(e,t,n,r,i){if(qe(n)){var o=!0;Ji(t)}else o=!1;if(Zn(t,i),t.stateNode===null)Fi(e,t),qu(t,n,r),Uo(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,u=t.memoizedProps;a.props=u;var d=a.context,x=n.contextType;typeof x=="object"&&x!==null?x=ct(x):(x=qe(n)?zn:Ue.current,x=nr(t,x));var C=n.getDerivedStateFromProps,N=typeof C=="function"||typeof a.getSnapshotBeforeUpdate=="function";N||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||d!==x)&&$s(t,a,r,x),qt=!1;var S=t.memoizedState;a.state=S,nl(t,r,a,i),d=t.memoizedState,u!==r||S!==d||Ge.current||qt?(typeof C=="function"&&(Bo(t,n,C,r),d=t.memoizedState),(u=qt||Vs(t,n,u,r,S,d,x))?(N||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),a.props=r,a.state=d,a.context=x,r=u):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Iu(e,t),u=t.memoizedProps,x=t.type===t.elementType?u:ht(t.type,u),a.props=x,N=t.pendingProps,S=a.context,d=n.contextType,typeof d=="object"&&d!==null?d=ct(d):(d=qe(n)?zn:Ue.current,d=nr(t,d));var h=n.getDerivedStateFromProps;(C=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==N||S!==d)&&$s(t,a,r,d),qt=!1,S=t.memoizedState,a.state=S,nl(t,r,a,i);var _=t.memoizedState;u!==N||S!==_||Ge.current||qt?(typeof h=="function"&&(Bo(t,n,h,r),_=t.memoizedState),(x=qt||Vs(t,n,x,r,S,_,d)||!1)?(C||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,_,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,_,d)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),a.props=r,a.state=_,a.context=d,r=x):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),r=!1)}return Vo(e,t,n,r,o,i)}function Vo(e,t,n,r,i,o){tc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Os(t,n,!1),Ut(e,t,o);r=t.stateNode,_0.current=t;var u=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ir(t,e.child,null,o),t.child=ir(t,null,u,o)):He(e,t,u,o),t.memoizedState=r.state,i&&Os(t,n,!0),t.child}function nc(e){var t=e.stateNode;t.pendingContext?Fs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fs(e,t.context,!1),Ta(e,t.containerInfo)}function Xs(e,t,n,r,i){return rr(),ja(i),t.flags|=256,He(e,t,n,r),t.child}var $o={dehydrated:null,treeContext:null,retryLane:0};function Qo(e){return{baseLanes:e,cachePool:null,transitions:null}}function rc(e,t,n){var r=t.pendingProps,i=ye.current,o=!1,a=(t.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(ye,i&1),e===null)return Mo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=kl(a,r,0,null),e=En(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Qo(n),t.memoizedState=$o,e):Ma(t,a));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return R0(e,t,a,r,u,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,u=i.sibling;var d={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=dn(i,d),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=dn(u,o):(o=En(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Qo(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=$o,r}return o=e.child,e=o.sibling,r=dn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ma(e,t){return t=kl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,n,r){return r!==null&&ja(r),ir(t,e.child,null,n),e=Ma(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function R0(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=to(Error(F(422))),wi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=kl({mode:"visible",children:r.children},i,0,null),o=En(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ir(t,e.child,null,a),t.child.memoizedState=Qo(a),t.memoizedState=$o,o);if(!(t.mode&1))return wi(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(F(419)),r=to(o,r,void 0),wi(e,t,a,r)}if(u=(a&e.childLanes)!==0,Ke||u){if(r=Le,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Bt(e,i),bt(r,e,i,-1))}return Va(),r=to(Error(F(421))),wi(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Y0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,nt=ln(i.nextSibling),rt=t,ve=!0,vt=null,e!==null&&(at[st++]=Ft,at[st++]=Ot,at[st++]=In,Ft=e.id,Ot=e.overflow,In=t),t=Ma(t,r.children),t.flags|=4096,t)}function Zs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Do(e.return,t,n)}function no(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function ic(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(He(e,t,r.children,n),r=ye.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zs(e,n,t);else if(e.tag===19)Zs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(ye,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&rl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),no(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&rl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}no(t,!0,n,null,o);break;case"together":no(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function F0(e,t,n){switch(t.tag){case 3:nc(t),rr();break;case 5:Tu(t);break;case 1:qe(t.type)&&Ji(t);break;case 4:Ta(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(el,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(ye,ye.current&1),t.flags|=128,null):n&t.child.childLanes?rc(e,t,n):(ge(ye,ye.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);ge(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ic(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,ec(e,t,n)}return Ut(e,t,n)}var lc,Yo,oc,ac;lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yo=function(){};oc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Cn(Tt.current);var o=null;switch(n){case"input":i=mo(e,i),r=mo(e,r),o=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),o=[];break;case"textarea":i=vo(e,i),r=vo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gi)}bo(n,r);var a;n=null;for(x in i)if(!r.hasOwnProperty(x)&&i.hasOwnProperty(x)&&i[x]!=null)if(x==="style"){var u=i[x];for(a in u)u.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(Mr.hasOwnProperty(x)?o||(o=[]):(o=o||[]).push(x,null));for(x in r){var d=r[x];if(u=i!=null?i[x]:void 0,r.hasOwnProperty(x)&&d!==u&&(d!=null||u!=null))if(x==="style")if(u){for(a in u)!u.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in d)d.hasOwnProperty(a)&&u[a]!==d[a]&&(n||(n={}),n[a]=d[a])}else n||(o||(o=[]),o.push(x,n)),n=d;else x==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(o=o||[]).push(x,d)):x==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(x,""+d):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(Mr.hasOwnProperty(x)?(d!=null&&x==="onScroll"&&me("scroll",e),o||u===d||(o=[])):(o=o||[]).push(x,d))}n&&(o=o||[]).push("style",n);var x=o;(t.updateQueue=x)&&(t.flags|=4)}};ac=function(e,t,n,r){n!==r&&(t.flags|=4)};function kr(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function O0(e,t,n){var r=t.pendingProps;switch(Sa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return qe(t.type)&&qi(),De(t),null;case 3:return r=t.stateNode,lr(),he(Ge),he(Ue),La(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(ta(vt),vt=null))),Yo(e,t),De(t),null;case 5:Pa(t);var i=Cn(qr.current);if(n=t.type,e!==null&&t.stateNode!=null)oc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return De(t),null}if(e=Cn(Tt.current),yi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[zt]=t,r[Kr]=o,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Er.length;i++)me(Er[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":ss(r,o),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},me("invalid",r);break;case"textarea":us(r,o),me("invalid",r)}bo(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var u=o[a];a==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&vi(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&vi(r.textContent,u,e),i=["children",""+u]):Mr.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&me("scroll",r)}switch(n){case"input":ui(r),ds(r,o,!0);break;case"textarea":ui(r),cs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Gi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[zt]=t,e[Kr]=r,lc(e,t,!1,!1),t.stateNode=e;e:{switch(a=wo(n,r),n){case"dialog":me("cancel",e),me("close",e),i=r;break;case"iframe":case"object":case"embed":me("load",e),i=r;break;case"video":case"audio":for(i=0;i<Er.length;i++)me(Er[i],e);i=r;break;case"source":me("error",e),i=r;break;case"img":case"image":case"link":me("error",e),me("load",e),i=r;break;case"details":me("toggle",e),i=r;break;case"input":ss(e,r),i=mo(e,r),me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),me("invalid",e);break;case"textarea":us(e,r),i=vo(e,r),me("invalid",e);break;default:i=r}bo(n,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var d=u[o];o==="style"?Md(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Od(e,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Dr(e,d):typeof d=="number"&&Dr(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Mr.hasOwnProperty(o)?d!=null&&o==="onScroll"&&me("scroll",e):d!=null&&sa(e,o,d,a))}switch(n){case"input":ui(e),ds(e,r,!1);break;case"textarea":ui(e),cs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+un(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Gn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return De(t),null;case 6:if(e&&t.stateNode!=null)ac(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=Cn(qr.current),Cn(Tt.current),yi(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(o=r.nodeValue!==n)&&(e=rt,e!==null))switch(e.tag){case 3:vi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return De(t),null;case 13:if(he(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&nt!==null&&t.mode&1&&!(t.flags&128))Cu(),rr(),t.flags|=98560,o=!1;else if(o=yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(F(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(F(317));o[zt]=t}else rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;De(t),o=!1}else vt!==null&&(ta(vt),vt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ye.current&1?Ie===0&&(Ie=3):Va())),t.updateQueue!==null&&(t.flags|=4),De(t),null);case 4:return lr(),Yo(e,t),e===null&&Qr(t.stateNode.containerInfo),De(t),null;case 10:return Ea(t.type._context),De(t),null;case 17:return qe(t.type)&&qi(),De(t),null;case 19:if(he(ye),o=t.memoizedState,o===null)return De(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)kr(o,!1);else{if(Ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=rl(e),a!==null){for(t.flags|=128,kr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(ye,ye.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ne()>ar&&(t.flags|=128,r=!0,kr(o,!1),t.lanes=4194304)}else{if(!r)if(e=rl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ve)return De(t),null}else 2*Ne()-o.renderingStartTime>ar&&n!==1073741824&&(t.flags|=128,r=!0,kr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ne(),t.sibling=null,n=ye.current,ge(ye,r?n&1|2:n&1),t):(De(t),null);case 22:case 23:return Wa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?tt&1073741824&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function A0(e,t){switch(Sa(t),t.tag){case 1:return qe(t.type)&&qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lr(),he(Ge),he(Ue),La(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Pa(t),null;case 13:if(he(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(ye),null;case 4:return lr(),null;case 10:return Ea(t.type._context),null;case 22:case 23:return Wa(),null;case 24:return null;default:return null}}var ki=!1,Be=!1,M0=typeof WeakSet=="function"?WeakSet:Set,G=null;function Yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function Ko(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var ed=!1;function D0(e,t){if(Po=Qi,e=pu(),wa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,u=-1,d=-1,x=0,C=0,N=e,S=null;t:for(;;){for(var h;N!==n||i!==0&&N.nodeType!==3||(u=a+i),N!==o||r!==0&&N.nodeType!==3||(d=a+r),N.nodeType===3&&(a+=N.nodeValue.length),(h=N.firstChild)!==null;)S=N,N=h;for(;;){if(N===e)break t;if(S===n&&++x===i&&(u=a),S===o&&++C===r&&(d=a),(h=N.nextSibling)!==null)break;N=S,S=N.parentNode}N=h}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lo={focusedElem:e,selectionRange:n},Qi=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var O=_.memoizedProps,fe=_.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?O:ht(t.type,O),fe);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(R){Ce(t,t.return,R)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return _=ed,ed=!1,_}function Rr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ko(t,n,o)}i=i.next}while(i!==r)}}function bl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Go(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sc(e){var t=e.alternate;t!==null&&(e.alternate=null,sc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Kr],delete t[Fo],delete t[w0],delete t[k0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dc(e){return e.tag===5||e.tag===3||e.tag===4}function td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gi));else if(r!==4&&(e=e.child,e!==null))for(qo(e,t,n),e=e.sibling;e!==null;)qo(e,t,n),e=e.sibling}function Jo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jo(e,t,n),e=e.sibling;e!==null;)Jo(e,t,n),e=e.sibling}var Re=null,xt=!1;function Yt(e,t,n){for(n=n.child;n!==null;)uc(e,t,n),n=n.sibling}function uc(e,t,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(pl,n)}catch{}switch(n.tag){case 5:Be||Yn(n,t);case 6:var r=Re,i=xt;Re=null,Yt(e,t,n),Re=r,xt=i,Re!==null&&(xt?(e=Re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(xt?(e=Re,n=n.stateNode,e.nodeType===8?Gl(e.parentNode,n):e.nodeType===1&&Gl(e,n),Wr(e)):Gl(Re,n.stateNode));break;case 4:r=Re,i=xt,Re=n.stateNode.containerInfo,xt=!0,Yt(e,t,n),Re=r,xt=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ko(n,t,a),i=i.next}while(i!==r)}Yt(e,t,n);break;case 1:if(!Be&&(Yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Ce(n,t,u)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,Yt(e,t,n),Be=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function nd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new M0),t.forEach(function(r){var i=K0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,u=a;e:for(;u!==null;){switch(u.tag){case 5:Re=u.stateNode,xt=!1;break e;case 3:Re=u.stateNode.containerInfo,xt=!0;break e;case 4:Re=u.stateNode.containerInfo,xt=!0;break e}u=u.return}if(Re===null)throw Error(F(160));uc(o,a,i),Re=null,xt=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(x){Ce(i,t,x)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cc(t,e),t=t.sibling}function cc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),Nt(e),r&4){try{Rr(3,e,e.return),bl(3,e)}catch(O){Ce(e,e.return,O)}try{Rr(5,e,e.return)}catch(O){Ce(e,e.return,O)}}break;case 1:mt(t,e),Nt(e),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(mt(t,e),Nt(e),r&512&&n!==null&&Yn(n,n.return),e.flags&32){var i=e.stateNode;try{Dr(i,"")}catch(O){Ce(e,e.return,O)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&_d(i,o),wo(u,a);var x=wo(u,o);for(a=0;a<d.length;a+=2){var C=d[a],N=d[a+1];C==="style"?Md(i,N):C==="dangerouslySetInnerHTML"?Od(i,N):C==="children"?Dr(i,N):sa(i,C,N,x)}switch(u){case"input":ho(i,o);break;case"textarea":Rd(i,o);break;case"select":var S=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Gn(i,!!o.multiple,h,!1):S!==!!o.multiple&&(o.defaultValue!=null?Gn(i,!!o.multiple,o.defaultValue,!0):Gn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Kr]=o}catch(O){Ce(e,e.return,O)}}break;case 6:if(mt(t,e),Nt(e),r&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(O){Ce(e,e.return,O)}}break;case 3:if(mt(t,e),Nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wr(t.containerInfo)}catch(O){Ce(e,e.return,O)}break;case 4:mt(t,e),Nt(e);break;case 13:mt(t,e),Nt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ua=Ne())),r&4&&nd(e);break;case 22:if(C=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(x=Be)||C,mt(t,e),Be=x):mt(t,e),Nt(e),r&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!C&&e.mode&1)for(G=e,C=e.child;C!==null;){for(N=G=C;G!==null;){switch(S=G,h=S.child,S.tag){case 0:case 11:case 14:case 15:Rr(4,S,S.return);break;case 1:Yn(S,S.return);var _=S.stateNode;if(typeof _.componentWillUnmount=="function"){r=S,n=S.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(O){Ce(r,n,O)}}break;case 5:Yn(S,S.return);break;case 22:if(S.memoizedState!==null){id(N);continue}}h!==null?(h.return=S,G=h):id(N)}C=C.sibling}e:for(C=null,N=e;;){if(N.tag===5){if(C===null){C=N;try{i=N.stateNode,x?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=N.stateNode,d=N.memoizedProps.style,a=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=Ad("display",a))}catch(O){Ce(e,e.return,O)}}}else if(N.tag===6){if(C===null)try{N.stateNode.nodeValue=x?"":N.memoizedProps}catch(O){Ce(e,e.return,O)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;C===N&&(C=null),N=N.return}C===N&&(C=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:mt(t,e),Nt(e),r&4&&nd(e);break;case 21:break;default:mt(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dc(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Dr(i,""),r.flags&=-33);var o=td(e);Jo(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,u=td(e);qo(e,u,a);break;default:throw Error(F(161))}}catch(d){Ce(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function B0(e,t,n){G=e,pc(e)}function pc(e,t,n){for(var r=(e.mode&1)!==0;G!==null;){var i=G,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ki;if(!a){var u=i.alternate,d=u!==null&&u.memoizedState!==null||Be;u=ki;var x=Be;if(ki=a,(Be=d)&&!x)for(G=i;G!==null;)a=G,d=a.child,a.tag===22&&a.memoizedState!==null?ld(i):d!==null?(d.return=a,G=d):ld(i);for(;o!==null;)G=o,pc(o),o=o.sibling;G=i,ki=u,Be=x}rd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,G=o):rd(e)}}function rd(e){for(;G!==null;){var t=G;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||bl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Us(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Us(t,a,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var x=t.alternate;if(x!==null){var C=x.memoizedState;if(C!==null){var N=C.dehydrated;N!==null&&Wr(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Be||t.flags&512&&Go(t)}catch(S){Ce(t,t.return,S)}}if(t===e){G=null;break}if(n=t.sibling,n!==null){n.return=t.return,G=n;break}G=t.return}}function id(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var n=t.sibling;if(n!==null){n.return=t.return,G=n;break}G=t.return}}function ld(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bl(4,t)}catch(d){Ce(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){Ce(t,i,d)}}var o=t.return;try{Go(t)}catch(d){Ce(t,o,d)}break;case 5:var a=t.return;try{Go(t)}catch(d){Ce(t,a,d)}}}catch(d){Ce(t,t.return,d)}if(t===e){G=null;break}var u=t.sibling;if(u!==null){u.return=t.return,G=u;break}G=t.return}}var U0=Math.ceil,ol=Ht.ReactCurrentDispatcher,Da=Ht.ReactCurrentOwner,ut=Ht.ReactCurrentBatchConfig,ue=0,Le=null,Ee=null,Fe=0,tt=0,Kn=fn(0),Ie=0,ei=null,Pn=0,wl=0,Ba=0,Fr=null,Ye=null,Ua=0,ar=1/0,_t=null,al=!1,Xo=null,an=null,Si=!1,en=null,sl=0,Or=0,Zo=null,Oi=-1,Ai=0;function We(){return ue&6?Ne():Oi!==-1?Oi:Oi=Ne()}function sn(e){return e.mode&1?ue&2&&Fe!==0?Fe&-Fe:j0.transition!==null?(Ai===0&&(Ai=qd()),Ai):(e=ce,e!==0||(e=window.event,e=e===void 0?16:ru(e.type)),e):1}function bt(e,t,n,r){if(50<Or)throw Or=0,Zo=null,Error(F(185));ni(e,n,r),(!(ue&2)||e!==Le)&&(e===Le&&(!(ue&2)&&(wl|=n),Ie===4&&Xt(e,Fe)),Je(e,r),n===1&&ue===0&&!(t.mode&1)&&(ar=Ne()+500,xl&&gn()))}function Je(e,t){var n=e.callbackNode;jf(e,t);var r=$i(e,e===Le?Fe:0);if(r===0)n!==null&&gs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&gs(n),t===1)e.tag===0?S0(od.bind(null,e)):ku(od.bind(null,e)),y0(function(){!(ue&6)&&gn()}),n=null;else{switch(Jd(r)){case 1:n=fa;break;case 4:n=Kd;break;case 16:n=Vi;break;case 536870912:n=Gd;break;default:n=Vi}n=bc(n,fc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fc(e,t){if(Oi=-1,Ai=0,ue&6)throw Error(F(327));var n=e.callbackNode;if(er()&&e.callbackNode!==n)return null;var r=$i(e,e===Le?Fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=dl(e,r);else{t=r;var i=ue;ue|=2;var o=mc();(Le!==e||Fe!==t)&&(_t=null,ar=Ne()+500,Nn(e,t));do try{V0();break}catch(u){gc(e,u)}while(!0);Na(),ol.current=o,ue=i,Ee!==null?t=0:(Le=null,Fe=0,t=Ie)}if(t!==0){if(t===2&&(i=No(e),i!==0&&(r=i,t=ea(e,i))),t===1)throw n=ei,Nn(e,0),Xt(e,r),Je(e,Ne()),n;if(t===6)Xt(e,r);else{if(i=e.current.alternate,!(r&30)&&!H0(i)&&(t=dl(e,r),t===2&&(o=No(e),o!==0&&(r=o,t=ea(e,o))),t===1))throw n=ei,Nn(e,0),Xt(e,r),Je(e,Ne()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:kn(e,Ye,_t);break;case 3:if(Xt(e,r),(r&130023424)===r&&(t=Ua+500-Ne(),10<t)){if($i(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ro(kn.bind(null,e,Ye,_t),t);break}kn(e,Ye,_t);break;case 4:if(Xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-yt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*U0(r/1960))-r,10<r){e.timeoutHandle=Ro(kn.bind(null,e,Ye,_t),r);break}kn(e,Ye,_t);break;case 5:kn(e,Ye,_t);break;default:throw Error(F(329))}}}return Je(e,Ne()),e.callbackNode===n?fc.bind(null,e):null}function ea(e,t){var n=Fr;return e.current.memoizedState.isDehydrated&&(Nn(e,t).flags|=256),e=dl(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&ta(t)),e}function ta(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function H0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!wt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xt(e,t){for(t&=~Ba,t&=~wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function od(e){if(ue&6)throw Error(F(327));er();var t=$i(e,0);if(!(t&1))return Je(e,Ne()),null;var n=dl(e,t);if(e.tag!==0&&n===2){var r=No(e);r!==0&&(t=r,n=ea(e,r))}if(n===1)throw n=ei,Nn(e,0),Xt(e,t),Je(e,Ne()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,Ye,_t),Je(e,Ne()),null}function Ha(e,t){var n=ue;ue|=1;try{return e(t)}finally{ue=n,ue===0&&(ar=Ne()+500,xl&&gn())}}function Ln(e){en!==null&&en.tag===0&&!(ue&6)&&er();var t=ue;ue|=1;var n=ut.transition,r=ce;try{if(ut.transition=null,ce=1,e)return e()}finally{ce=r,ut.transition=n,ue=t,!(ue&6)&&gn()}}function Wa(){tt=Kn.current,he(Kn)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,v0(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Sa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qi();break;case 3:lr(),he(Ge),he(Ue),La();break;case 5:Pa(r);break;case 4:lr();break;case 13:he(ye);break;case 19:he(ye);break;case 10:Ea(r.type._context);break;case 22:case 23:Wa()}n=n.return}if(Le=e,Ee=e=dn(e.current,null),Fe=tt=t,Ie=0,ei=null,Ba=wl=Pn=0,Ye=Fr=null,jn!==null){for(t=0;t<jn.length;t++)if(n=jn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}jn=null}return e}function gc(e,t){do{var n=Ee;try{if(Na(),_i.current=ll,il){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}il=!1}if(Tn=0,Pe=ze=be=null,_r=!1,Jr=0,Da.current=null,n===null||n.return===null){Ie=1,ei=t,Ee=null;break}e:{var o=e,a=n.return,u=n,d=t;if(t=Fe,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var x=d,C=u,N=C.tag;if(!(C.mode&1)&&(N===0||N===11||N===15)){var S=C.alternate;S?(C.updateQueue=S.updateQueue,C.memoizedState=S.memoizedState,C.lanes=S.lanes):(C.updateQueue=null,C.memoizedState=null)}var h=Ys(a);if(h!==null){h.flags&=-257,Ks(h,a,u,o,t),h.mode&1&&Qs(o,x,t),t=h,d=x;var _=t.updateQueue;if(_===null){var O=new Set;O.add(d),t.updateQueue=O}else _.add(d);break e}else{if(!(t&1)){Qs(o,x,t),Va();break e}d=Error(F(426))}}else if(ve&&u.mode&1){var fe=Ys(a);if(fe!==null){!(fe.flags&65536)&&(fe.flags|=256),Ks(fe,a,u,o,t),ja(or(d,u));break e}}o=d=or(d,u),Ie!==4&&(Ie=2),Fr===null?Fr=[o]:Fr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Ju(o,d,t);Bs(o,v);break e;case 1:u=d;var m=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(an===null||!an.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var R=Xu(o,u,t);Bs(o,R);break e}}o=o.return}while(o!==null)}xc(n)}catch(Y){t=Y,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(!0)}function mc(){var e=ol.current;return ol.current=ll,e===null?ll:e}function Va(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Le===null||!(Pn&268435455)&&!(wl&268435455)||Xt(Le,Fe)}function dl(e,t){var n=ue;ue|=2;var r=mc();(Le!==e||Fe!==t)&&(_t=null,Nn(e,t));do try{W0();break}catch(i){gc(e,i)}while(!0);if(Na(),ue=n,ol.current=r,Ee!==null)throw Error(F(261));return Le=null,Fe=0,Ie}function W0(){for(;Ee!==null;)hc(Ee)}function V0(){for(;Ee!==null&&!mf();)hc(Ee)}function hc(e){var t=yc(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?xc(e):Ee=t,Da.current=null}function xc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=A0(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Ee=null;return}}else if(n=O0(n,t,tt),n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Ie===0&&(Ie=5)}function kn(e,t,n){var r=ce,i=ut.transition;try{ut.transition=null,ce=1,$0(e,t,n,r)}finally{ut.transition=i,ce=r}return null}function $0(e,t,n,r){do er();while(en!==null);if(ue&6)throw Error(F(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Cf(e,o),e===Le&&(Ee=Le=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Si||(Si=!0,bc(Vi,function(){return er(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ut.transition,ut.transition=null;var a=ce;ce=1;var u=ue;ue|=4,Da.current=null,D0(e,n),cc(n,e),c0(Lo),Qi=!!Po,Lo=Po=null,e.current=n,B0(n),hf(),ue=u,ce=a,ut.transition=o}else e.current=n;if(Si&&(Si=!1,en=e,sl=i),o=e.pendingLanes,o===0&&(an=null),yf(n.stateNode),Je(e,Ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(al)throw al=!1,e=Xo,Xo=null,e;return sl&1&&e.tag!==0&&er(),o=e.pendingLanes,o&1?e===Zo?Or++:(Or=0,Zo=e):Or=0,gn(),null}function er(){if(en!==null){var e=Jd(sl),t=ut.transition,n=ce;try{if(ut.transition=null,ce=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,sl=0,ue&6)throw Error(F(331));var i=ue;for(ue|=4,G=e.current;G!==null;){var o=G,a=o.child;if(G.flags&16){var u=o.deletions;if(u!==null){for(var d=0;d<u.length;d++){var x=u[d];for(G=x;G!==null;){var C=G;switch(C.tag){case 0:case 11:case 15:Rr(8,C,o)}var N=C.child;if(N!==null)N.return=C,G=N;else for(;G!==null;){C=G;var S=C.sibling,h=C.return;if(sc(C),C===x){G=null;break}if(S!==null){S.return=h,G=S;break}G=h}}}var _=o.alternate;if(_!==null){var O=_.child;if(O!==null){_.child=null;do{var fe=O.sibling;O.sibling=null,O=fe}while(O!==null)}}G=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,G=a;else e:for(;G!==null;){if(o=G,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Rr(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,G=v;break e}G=o.return}}var m=e.current;for(G=m;G!==null;){a=G;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,G=y;else e:for(a=m;G!==null;){if(u=G,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:bl(9,u)}}catch(Y){Ce(u,u.return,Y)}if(u===a){G=null;break e}var R=u.sibling;if(R!==null){R.return=u.return,G=R;break e}G=u.return}}if(ue=i,gn(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(pl,e)}catch{}r=!0}return r}finally{ce=n,ut.transition=t}}return!1}function ad(e,t,n){t=or(n,t),t=Ju(e,t,1),e=on(e,t,1),t=We(),e!==null&&(ni(e,1,t),Je(e,t))}function Ce(e,t,n){if(e.tag===3)ad(e,e,n);else for(;t!==null;){if(t.tag===3){ad(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){e=or(n,e),e=Xu(t,e,1),t=on(t,e,1),e=We(),t!==null&&(ni(t,1,e),Je(t,e));break}}t=t.return}}function Q0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Fe&n)===n&&(Ie===4||Ie===3&&(Fe&130023424)===Fe&&500>Ne()-Ua?Nn(e,0):Ba|=n),Je(e,t)}function vc(e,t){t===0&&(e.mode&1?(t=fi,fi<<=1,!(fi&130023424)&&(fi=4194304)):t=1);var n=We();e=Bt(e,t),e!==null&&(ni(e,t,n),Je(e,n))}function Y0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vc(e,n)}function K0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),vc(e,n)}var yc;yc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,F0(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,ve&&t.flags&1048576&&Su(t,Zi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fi(e,t),e=t.pendingProps;var i=nr(t,Ue.current);Zn(t,n),i=Ra(null,t,r,e,i,n);var o=Fa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(o=!0,Ji(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ia(t),i.updater=yl,t.stateNode=i,i._reactInternals=t,Uo(t,r,e,n),t=Vo(null,t,r,!0,o,n)):(t.tag=0,ve&&o&&ka(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=q0(r),e=ht(r,e),i){case 0:t=Wo(null,t,r,e,n);break e;case 1:t=Js(null,t,r,e,n);break e;case 11:t=Gs(null,t,r,e,n);break e;case 14:t=qs(null,t,r,ht(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Wo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Js(e,t,r,i,n);case 3:e:{if(nc(t),e===null)throw Error(F(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Iu(e,t),nl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=or(Error(F(423)),t),t=Xs(e,t,r,n,i);break e}else if(r!==i){i=or(Error(F(424)),t),t=Xs(e,t,r,n,i);break e}else for(nt=ln(t.stateNode.containerInfo.firstChild),rt=t,ve=!0,vt=null,n=Eu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rr(),r===i){t=Ut(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return Tu(t),e===null&&Mo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,_o(r,i)?a=null:o!==null&&_o(r,o)&&(t.flags|=32),tc(e,t),He(e,t,a,n),t.child;case 6:return e===null&&Mo(t),null;case 13:return rc(e,t,n);case 4:return Ta(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ir(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Gs(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ge(el,r._currentValue),r._currentValue=a,o!==null)if(wt(o.value,a)){if(o.children===i.children&&!Ge.current){t=Ut(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){a=o.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(o.tag===1){d=At(-1,n&-n),d.tag=2;var x=o.updateQueue;if(x!==null){x=x.shared;var C=x.pending;C===null?d.next=d:(d.next=C.next,C.next=d),x.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),Do(o.return,n,t),u.lanes|=n;break}d=d.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(F(341));a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Do(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Zn(t,n),i=ct(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=ht(r,t.pendingProps),i=ht(r.type,i),qs(e,t,r,i,n);case 15:return Zu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Fi(e,t),t.tag=1,qe(r)?(e=!0,Ji(t)):e=!1,Zn(t,n),qu(t,r,i),Uo(t,r,i,n),Vo(null,t,r,!0,e,n);case 19:return ic(e,t,n);case 22:return ec(e,t,n)}throw Error(F(156,t.tag))};function bc(e,t){return Yd(e,t)}function G0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,r){return new G0(e,t,n,r)}function $a(e){return e=e.prototype,!(!e||!e.isReactComponent)}function q0(e){if(typeof e=="function")return $a(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ua)return 11;if(e===ca)return 14}return 2}function dn(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mi(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")$a(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Mn:return En(n.children,i,o,t);case da:a=8,i|=8;break;case co:return e=dt(12,n,t,i|2),e.elementType=co,e.lanes=o,e;case po:return e=dt(13,n,t,i),e.elementType=po,e.lanes=o,e;case fo:return e=dt(19,n,t,i),e.elementType=fo,e.lanes=o,e;case Td:return kl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zd:a=10;break e;case Id:a=9;break e;case ua:a=11;break e;case ca:a=14;break e;case Gt:a=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=dt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function En(e,t,n,r){return e=dt(7,e,r,t),e.lanes=n,e}function kl(e,t,n,r){return e=dt(22,e,r,t),e.elementType=Td,e.lanes=n,e.stateNode={isHidden:!1},e}function ro(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function io(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function J0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qa(e,t,n,r,i,o,a,u,d){return e=new J0(e,t,n,u,d),t===1?(t=1,o===!0&&(t|=8)):t=0,o=dt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ia(o),e}function X0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:An,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function wc(e){if(!e)return cn;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(qe(n))return wu(e,n,t)}return t}function kc(e,t,n,r,i,o,a,u,d){return e=Qa(n,r,!0,e,i,o,a,u,d),e.context=wc(null),n=e.current,r=We(),i=sn(n),o=At(r,i),o.callback=t??null,on(n,o,i),e.current.lanes=i,ni(e,i,r),Je(e,r),e}function Sl(e,t,n,r){var i=t.current,o=We(),a=sn(i);return n=wc(n),t.context===null?t.context=n:t.pendingContext=n,t=At(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=on(i,t,a),e!==null&&(bt(e,i,a,o),Li(e,i,a)),a}function ul(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ya(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function Z0(){return null}var Sc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ka(e){this._internalRoot=e}jl.prototype.render=Ka.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));Sl(e,t,null,null)};jl.prototype.unmount=Ka.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){Sl(null,e,null,null)}),t[Dt]=null}};function jl(e){this._internalRoot=e}jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=eu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&nu(e)}};function Ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function dd(){}function eg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var x=ul(a);o.call(x)}}var a=kc(t,r,e,0,null,!1,!1,"",dd);return e._reactRootContainer=a,e[Dt]=a.current,Qr(e.nodeType===8?e.parentNode:e),Ln(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var x=ul(d);u.call(x)}}var d=Qa(e,0,!1,null,null,!1,!1,"",dd);return e._reactRootContainer=d,e[Dt]=d.current,Qr(e.nodeType===8?e.parentNode:e),Ln(function(){Sl(t,d,n,r)}),d}function Nl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var u=i;i=function(){var d=ul(a);u.call(d)}}Sl(t,a,e,i)}else a=eg(n,t,e,i,r);return ul(a)}Xd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nr(t.pendingLanes);n!==0&&(ga(t,n|1),Je(t,Ne()),!(ue&6)&&(ar=Ne()+500,gn()))}break;case 13:Ln(function(){var r=Bt(e,1);if(r!==null){var i=We();bt(r,e,1,i)}}),Ya(e,1)}};ma=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=We();bt(t,e,134217728,n)}Ya(e,134217728)}};Zd=function(e){if(e.tag===13){var t=sn(e),n=Bt(e,t);if(n!==null){var r=We();bt(n,e,t,r)}Ya(e,t)}};eu=function(){return ce};tu=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};So=function(e,t,n){switch(t){case"input":if(ho(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=hl(r);if(!i)throw Error(F(90));Ld(r),ho(r,i)}}}break;case"textarea":Rd(e,n);break;case"select":t=n.value,t!=null&&Gn(e,!!n.multiple,t,!1)}};Ud=Ha;Hd=Ln;var tg={usingClientEntryPoint:!1,Events:[ii,Hn,hl,Dd,Bd,Ha]},Sr={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ng={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$d(e),e===null?null:e.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||Z0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ji.isDisabled&&ji.supportsFiber)try{pl=ji.inject(ng),It=ji}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tg;lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ga(t))throw Error(F(200));return X0(e,t,null,n)};lt.createRoot=function(e,t){if(!Ga(e))throw Error(F(299));var n=!1,r="",i=Sc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Qa(e,1,!1,null,null,n,!1,r,i),e[Dt]=t.current,Qr(e.nodeType===8?e.parentNode:e),new Ka(t)};lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=$d(t),e=e===null?null:e.stateNode,e};lt.flushSync=function(e){return Ln(e)};lt.hydrate=function(e,t,n){if(!Cl(t))throw Error(F(200));return Nl(null,e,t,!0,n)};lt.hydrateRoot=function(e,t,n){if(!Ga(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Sc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=kc(t,null,e,1,n??null,i,!1,o,a),e[Dt]=t.current,Qr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new jl(t)};lt.render=function(e,t,n){if(!Cl(t))throw Error(F(200));return Nl(null,e,t,!1,n)};lt.unmountComponentAtNode=function(e){if(!Cl(e))throw Error(F(40));return e._reactRootContainer?(Ln(function(){Nl(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1};lt.unstable_batchedUpdates=Ha;lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Cl(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return Nl(e,t,n,!1,r)};lt.version="18.3.1-next-f1338f8080-20240426";function jc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jc)}catch(e){console.error(e)}}jc(),jd.exports=lt;var rg=jd.exports,ud=rg;so.createRoot=ud.createRoot,so.hydrateRoot=ud.hydrateRoot;const ig=`
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
  
  /* NEU: Verhindert das blaue Markieren von Text beim Klicken/Ziehen */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

/* Erlaubt die Textauswahl wieder in Eingabefeldern (Inputs, Textareas) */
input, textarea {
  user-select: auto;
  -webkit-user-select: auto;
  -moz-user-select: auto;
  -ms-user-select: auto;
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

/* === Host-Pill (Jahr / Stadt / Flagge) REWORKED === */
.host-pill {
  display: inline-flex;
  align-items: center;
  margin: 12px auto 32px;
  padding: 10px 24px 10px 12px;
  background: linear-gradient(145deg, rgba(20, 10, 45, 0.95) 0%, rgba(10, 5, 22, 0.98) 100%);
  border: 1px solid rgba(148, 94, 255, 0.3);
  border-radius: 999px;
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.06),
    0 8px 24px rgba(0,0,0,0.5),
    0 0 20px rgba(168,85,247,0.1);
  position: relative;
}
.host-pill-flag {
  width: 46px; height: 46px;
  display: grid; place-items: center;
  background: rgba(0,0,0,0.4);
  border-radius: 50%;
  border: 1.5px solid rgba(148, 94, 255, 0.4);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), 0 0 16px rgba(168, 85, 247, 0.2);
  overflow: hidden;
  flex-shrink: 0;
}
.host-pill-flag img.flag {
  width: 32px !important; height: 22px !important;
  border-radius: 4px !important;
  box-shadow: 0 2px 6px rgba(0,0,0,0.6) !important;
}
.host-pill-divider {
  width: 1px;
  height: 28px;
  background: linear-gradient(to bottom, transparent, rgba(148, 94, 255, 0.3), transparent);
  margin: 0 16px;
}
.host-pill-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.15;
  gap: 2px;
}
.host-pill-cc {
  font-family: var(--display);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  color: var(--violet);
  text-transform: uppercase;
  text-shadow: 0 0 8px rgba(168, 85, 247, 0.4);
}
.host-pill-city {
  font-family: var(--display);
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.8);
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

/* ===== EDLE DUNKLE TABS ===== */
.tabs {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin: 0 0 8px;
  padding: 6px;
  background: linear-gradient(145deg, rgba(20, 10, 45, 0.95) 0%, rgba(10, 5, 22, 0.98) 100%);
  border: 1px solid rgba(94, 58, 168, 0.3);
  border-radius: 999px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.05), 0 8px 24px rgba(0,0,0,0.4);
}

.tabs button {
  background: transparent;
  border: 1px solid transparent;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 8px 20px;
  border-radius: 999px;
  color: var(--muted);
  transition: all 0.2s ease;
}

.tabs button:hover:not(.on) {
  background: rgba(255, 255, 255, 0.04);
  color: var(--ink);
}

.tabs button.on {
  background: linear-gradient(145deg, rgba(40, 24, 82, 0.95) 0%, rgba(20, 10, 45, 1) 100%);
  border-color: rgba(148, 94, 255, 0.4);
  color: #fff;
  font-weight: 800;
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.1),
    0 4px 12px rgba(0,0,0,0.5),
    0 0 16px rgba(168, 85, 247, 0.15);
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
}

/* Goldener Glow für das Grand Final */
.tabs button.final-tab {
  color: rgba(255, 209, 102, 0.7);
}
.tabs button.final-tab:hover:not(.on) {
  color: var(--gold);
  background: rgba(255, 209, 102, 0.05);
}
.tabs button.final-tab.on {
  background: linear-gradient(145deg, rgba(80, 50, 20, 0.9) 0%, rgba(40, 24, 82, 0.95) 100%);
  border-color: rgba(255, 209, 102, 0.5);
  color: var(--gold);
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.15),
    0 4px 12px rgba(0,0,0,0.5),
    0 0 20px rgba(255, 209, 102, 0.2);
  text-shadow: 0 0 10px rgba(255, 209, 102, 0.4);
}

/* Der Live-Button in der Tab-Leiste (falls verwendet) */
.tabs button.live-active {
  border: 1.5px solid var(--red) !important;
  background: linear-gradient(145deg, rgba(80, 15, 30, 0.8) 0%, rgba(30, 8, 16, 0.95) 100%) !important;
  color: #fff !important;
  box-shadow: 0 0 16px rgba(255, 77, 109, 0.4), inset 0 0 10px rgba(255, 77, 109, 0.2) !important;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-style: normal;
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
  background: 
    radial-gradient(circle at 20% 0%, rgba(168, 85, 247, 0.15), transparent 60%),
    radial-gradient(circle at 80% 100%, rgba(255, 45, 149, 0.08), transparent 60%),
    linear-gradient(165deg, #1e1136 0%, #120a24 100%);
  color: var(--ink);
  border: 1px solid rgba(148, 94, 255, 0.45);
  border-radius: var(--r-xl);
  padding: 32px;
  width: min(480px, 94vw);
  animation: dialogEnter 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  box-shadow: 
    0 24px 60px rgba(0,0,0,0.8),
    0 0 0 1px rgba(255,209,102,0.08),
    0 0 40px rgba(168, 85, 247, 0.15),
    inset 0 1px 0 rgba(255,255,255,0.08);
  position: fixed !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  margin: 0 !important;
  max-height: 90vh;
  overflow-y: auto;
}

dialog::-webkit-scrollbar { width: 8px; }
dialog::-webkit-scrollbar-track { background: transparent; }
dialog::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, var(--violet), var(--pink));
  border-radius: 12px;
  border: 2px solid transparent;
}

dialog.wide { width: min(560px, 94vw); }

dialog::backdrop {
  background: radial-gradient(circle at 50% 50%, rgba(22, 13, 46, 0.6), rgba(3, 1, 10, 0.92));
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  animation: fadeIn 0.25s ease;
}

@keyframes fadeIn { from{opacity:0} to{opacity:1} }

@keyframes dialogEnter {
  0% { 
    opacity: 0; 
    transform: translate(-50%, -45%) scale(0.95); 
  }
  100% { 
    opacity: 1; 
    transform: translate(-50%, -50%) scale(1); 
  }
}

dialog h2, dialog h3 {
  font-family: var(--display);
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #fff 0%, var(--gold) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
}

dialog label{
  display:flex;flex-direction:column;gap:6px;
  margin-bottom:14px;color:var(--muted);
  font-size:.86rem;font-weight:600;letter-spacing:0.02em;
}
dialog input,dialog select{width:100%}

dialog .actions {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid rgba(148, 94, 255, 0.2);
}

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
.sb-table th, .sb-table td { padding: 6px 10px; border-bottom: none; vertical-align: middle; background: transparent !important; position: relative; }
.sb-table th { text-align: left; font-family: var(--display); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--muted); padding: 10px; background: transparent !important; }

/* Sanfter Fade für die horizontalen Trennlinien */
.sb-table thead tr th::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--line) 15%, var(--line) 85%, transparent);
  pointer-events: none;
}
.sb-table tbody tr td::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(94,58,168,0.35) 15%, rgba(94,58,168,0.35) 85%, transparent);
  pointer-events: none;
}
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
`;function lg(){const e=document.getElementById("esc-global-styles");e&&e.remove();const t=document.createElement("style");t.id="esc-global-styles",t.textContent=ig,document.head.appendChild(t)}lg();const og={apiKey:"AIzaSyBH4kCFQRjnBbd4cJDDuGSxJbRQAnUQWHw",authDomain:"esc-connect-7bdfe.firebaseapp.com",databaseURL:"https://esc-connect-7bdfe-default-rtdb.europe-west1.firebasedatabase.app",projectId:"esc-connect-7bdfe",storageBucket:"esc-connect-7bdfe.firebasestorage.app",messagingSenderId:"432112365589",appId:"1:432112365589:web:9af0cdb510f2380935de1c"},lo={"johnlp1350@gmail.com":{id:"j3",isAdmin:!0},"stahmeln05@gmail.com":{id:"j2",isAdmin:!1},"lucioosy@gmail.com":{id:"j4",isAdmin:!1},"br0k3n.f41ry@gmail.com":{id:"j1",isAdmin:!1}},Di=[["af","Afghanistan"],["al","Albania"],["am","Armenia"],["au","Australia"],["at","Austria"],["az","Azerbaijan"],["bh","Bahrain"],["bd","Bangladesh"],["by","Belarus"],["be","Belgium"],["bt","Bhutan"],["ba","Bosnia and Herzegovina"],["bn","Brunei"],["bg","Bulgaria"],["kh","Cambodia"],["ca","Canada"],["cn","China"],["hr","Croatia"],["cy","Cyprus"],["cz","Czechia"],["dk","Denmark"],["ee","Estonia"],["fi","Finland"],["fr","France"],["ge","Georgia"],["de","Germany"],["gr","Greece"],["hk","Hong Kong"],["hu","Hungary"],["is","Iceland"],["in","India"],["id","Indonesia"],["ir","Iran"],["iq","Iraq"],["ie","Ireland"],["il","Israel"],["it","Italy"],["jp","Japan"],["jo","Jordan"],["kz","Kazakhstan"],["kw","Kuwait"],["kg","Kyrgyzstan"],["la","Laos"],["lb","Lebanon"],["lv","Latvia"],["lt","Lithuania"],["lu","Luxembourg"],["mo","Macau"],["my","Malaysia"],["mv","Maldives"],["mt","Malta"],["md","Moldova"],["mc","Monaco"],["mn","Mongolia"],["me","Montenegro"],["ma","Morocco"],["mm","Myanmar"],["np","Nepal"],["nl","Netherlands"],["nz","New Zealand"],["kp","North Korea"],["mk","North Macedonia"],["no","Norway"],["om","Oman"],["pk","Pakistan"],["ps","Palestine"],["ph","Philippines"],["pl","Poland"],["pt","Portugal"],["qa","Qatar"],["ro","Romania"],["ru","Russia"],["sa","Saudi Arabia"],["sm","San Marino"],["rs","Serbia"],["sg","Singapore"],["sk","Slovakia"],["si","Slovenia"],["kr","South Korea"],["es","Spain"],["lk","Sri Lanka"],["se","Sweden"],["ch","Switzerland"],["sy","Syria"],["tw","Taiwan"],["tj","Tajikistan"],["th","Thailand"],["tr","Türkiye"],["tm","Turkmenistan"],["ua","Ukraine"],["ae","United Arab Emirates"],["gb","United Kingdom"],["uz","Uzbekistan"],["vn","Vietnam"],["ye","Yemen"]],et={};for(let e=0;e<Di.length;e++)et[Di[e][0]]=Di[e][1];const ag={af:"AFG",al:"ALB",am:"ARM",au:"AUS",at:"AUT",az:"AZE",bh:"BHR",bd:"BGD",by:"BLR",be:"BEL",bt:"BTN",ba:"BIH",bn:"BRN",bg:"BGR",kh:"KHM",ca:"CAN",cn:"CHN",hr:"CRO",cy:"CYP",cz:"CZE",dk:"DNK",ee:"EST",fi:"FIN",fr:"FRA",ge:"GEO",de:"GER",gr:"GRE",hk:"HKG",hu:"HUN",is:"ISL",in:"IND",id:"IDN",ir:"IRN",iq:"IRQ",ie:"IRL",il:"ISR",it:"ITA",jp:"JPN",jo:"JOR",kz:"KAZ",kw:"KWT",kg:"KGZ",la:"LAO",lb:"LBN",lv:"LVA",lt:"LTU",lu:"LUX",mo:"MAC",my:"MYS",mv:"MDV",mt:"MLT",md:"MDA",mc:"MCO",mn:"MNG",me:"MNE",ma:"MAR",mm:"MMR",np:"NPL",nl:"NED",nz:"NZL",kp:"PRK",mk:"MKD",no:"NOR",om:"OMN",pk:"PAK",ps:"PSE",ph:"PHL",pl:"POL",pt:"POR",qa:"QAT",ro:"ROU",ru:"RUS",sa:"SAU",sm:"SMR",rs:"SRB",sg:"SGP",sk:"SVK",si:"SVN",kr:"KOR",es:"ESP",lk:"LKA",se:"SWE",ch:"SUI",sy:"SYR",tw:"TWN",tj:"TJK",th:"THA",tr:"TUR",tm:"TKM",ua:"UKR",ae:"ARE",gb:"GBR",uz:"UZB",vn:"VNM",ye:"YEM"},Ci={sf1:"Semi-final 1",sf2:"Semi-final 2",final:"Grand Final"},cd={sf1:15,sf2:15,final:26},On="esc-scoreboard-v2",oo="esc-me",Cc=`
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
  border-bottom: none !important;
  height: 40px !important;
  position: relative;
}
.battle-table tbody tr,
.battle-table tbody td {
  background: transparent !important;
  border-bottom: none !important;
  height: 54px !important; 
  padding: 0 4px !important; 
  vertical-align: middle !important;
  position: relative;
}

/* Sanfter Fade für die horizontalen Trennlinien in der Battle-Tabelle */
.battle-table thead tr th::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--line) 15%, var(--line) 85%, transparent);
  pointer-events: none;
}
.battle-table tbody tr td::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(94, 58, 168, 0.2) 15%, rgba(94, 58, 168, 0.2) 85%, transparent);
  pointer-events: none;
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
`;if(typeof document<"u"&&!document.getElementById("battle-table-css")){const e=document.createElement("style");e.id="battle-table-css",e.textContent=Cc,document.head.appendChild(e)}const Ni=e=>e?ag[e.toLowerCase()]||e.toUpperCase():"",ee=e=>String(e||""),Ar=e=>+String(e).split("-").pop(),Kt=({cc:e})=>l.jsx("img",{className:"flag","data-cc":e,src:`https://flagcdn.com/w40/${e}.png`,srcSet:`https://flagcdn.com/w40/${e}.png 1x, https://flagcdn.com/w80/${e}.png 2x`,width:"22",height:"15",alt:e.toUpperCase(),loading:"lazy",decoding:"async",onError:t=>{const n=t.target;if(!n.dataset.s){n.dataset.s=1,n.removeAttribute("srcset"),n.src=`https://flagcdn.com/w40/${e}.png`;return}const r=document.createElement("span");r.textContent=e.toUpperCase().split("").map(i=>String.fromCodePoint(127397+i.charCodeAt(0))).join("")+" ",n.replaceWith(r)}}),Lt=e=>{if(Number(e)===12)return"background:linear-gradient(160deg, #d8b4fe 0%, #a855f7 30%, #6b21a8 80%, #3b0764 100%);color:#ffffff;text-shadow:0 1px 3px rgba(0,0,0,0.9), 0 0 14px rgba(216,180,254,0.7);border:1.5px solid #f3e8ff;box-shadow:0 0 20px rgba(168,85,247,0.6), 0 4px 12px rgba(59,7,100,0.6), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -2px 5px rgba(0,0,0,0.5);";if(Number(e)===10)return"background:linear-gradient(160deg, #ffecb3 0%, #ffd166 50%, #f5b93a 100%);color:#4a2f00;text-shadow:0 1px 0 rgba(255,255,255,0.6);border:1.5px solid #fff4c9;box-shadow:0 0 18px rgba(255,209,102,0.55), 0 3px 10px rgba(180,120,0,0.35), inset 0 1.5px 0 rgba(255,255,255,0.7), inset 0 -2px 5px rgba(150,90,0,0.35);";const t={1:"#e63a2e",2:"#ea6b5f",3:"#ef9b93",4:"#f5c9c5",5:"#f5f5f5",6:"#c9e6d2",7:"#9fd6b1",8:"#71c48d",9:"#47b265"},n={1:"#9b1e15",2:"#b84236",3:"#c96660",4:"#d9a4a0",5:"#c9c9c9",6:"#8ebfa1",7:"#6cae83",8:"#449d66",9:"#2a824a"},r={1:"#b72b1f",2:"#c94a3d",3:"#d6726a",4:"#dc9f9a",5:"#b0b0b0",6:"#95c7a6",7:"#79b98e",8:"#5aa374",9:"#3c9058"},i=t[e]||"#f5f5f5",o=n[e]||"#c9c9c9",a=r[e]||"#b0b0b0",u=e>=6?"#0a2e14":"#1d1d1d";return`background: linear-gradient(160deg, ${i} 0%, ${o} 100%);color: ${u};text-shadow: 0 1px 2px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.2), 0 -1px 0 rgba(255,255,255,0.4);border: 1.5px solid ${a};box-shadow: 0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -3px 6px rgba(0,0,0,0.3);`},qa=()=>({jury:[{id:"j1",name:"Livin"},{id:"j2",name:"Tabi"},{id:"j3",name:"Poki"},{id:"j4",name:"Kiri"}],songs:[],years:[],ratings:{},pred:{},qualPred:{},liveState:{},battleHidden:!1}),sg=()=>{try{const e=JSON.parse(localStorage.getItem(On));if(e&&e.jury)return e.qualPred=e.qualPred||{},e.liveState=e.liveState||{},e}catch{}return qa()},Nc=e=>e.sort((t,n)=>{const r=t.customNo!==void 0&&t.customNo!==null&&t.customNo!==""?parseFloat(t.customNo):Ar(t.id),i=n.customNo!==void 0&&n.customNo!==null&&n.customNo!==""?parseFloat(n.customNo):Ar(n.id);return!isNaN(r)&&!isNaN(i)?r-i:String(r).localeCompare(String(i))}),pd=e=>{const t={jury:{},songs:{},years:{},ratings:e.ratings,pred:e.pred,qualPred:e.qualPred,liveState:e.liveState,battleHidden:e.battleHidden||!1};for(let n=0;n<e.jury.length;n++)t.jury[e.jury[n].id]={name:e.jury[n].name};for(let n=0;n<e.songs.length;n++){const r=e.songs[n];t.songs[r.id]={cc:r.cc,artist:r.artist,title:r.title,year:r.year}}for(let n=0;n<e.years.length;n++){const r=e.years[n],i={year:r.year,suffix:r.suffix,city:r.city,hostCc:r.hostCc,splitAfter:r.splitAfter,showDates:r.showDates,shows:{}};for(const o in r.shows){i.shows[o]={};const a=r.shows[o];for(let u=0;u<a.length;u++){const d=a[u];i.shows[o][d.id]={n:d.customNo,songId:d.songId,place:d.place,dq:d.dq,autoFinal:d.autoFinal}}}t.years[r.id]=i}return t},Bi=(e,t,n)=>{t=t||"",n=n||{};for(const r in e){const i=e[r],o=t?t+"/"+r:r;i&&typeof i=="object"?Bi(i,o,n):i!=null&&i!==""&&(n[o]=i)}return n},dg=e=>{const t=qa(),n=e.jury||{};for(let o=0;o<t.jury.length;o++)n[t.jury[o].id]&&n[t.jury[o].id].name&&(t.jury[o].name=n[t.jury[o].id].name);t.songs=[];const r=e.songs||{};for(const o in r)r.hasOwnProperty(o)&&t.songs.push(Object.assign({id:o},r[o]));t.years=[];const i=e.years||{};for(const o in i)if(i.hasOwnProperty(o)){const a=i[o],u={};if(a.shows){for(const d in a.shows)if(a.shows.hasOwnProperty(d)){const x=a.shows[d]||{},C=[];for(const N in x)if(x.hasOwnProperty(N)){const S=x[N];C.push({id:N,songId:S.songId,place:S.place,customNo:S.n,dq:S.dq,autoFinal:S.autoFinal})}Nc(C),u[d]=C}}t.years.push({id:o,year:+a.year||+o.split("_")[0],suffix:a.suffix||"",city:a.city,hostCc:a.hostCc,splitAfter:a.splitAfter,showDates:a.showDates||{},shows:u})}return t.years.sort((o,a)=>a.year-o.year||a.id.localeCompare(o.id)),t.ratings=e.ratings||{},t.pred=e.pred||{},t.qualPred=e.qualPred||{},t.liveState=e.liveState||{},t.battleHidden=!!e.battleHidden,t},ug=e=>e>=20?"background: linear-gradient(135deg, #ff0000, #800000); color: #fff; border: 2.5px solid #ff6666; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 0 15px rgba(255,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.3);":e>=15?"background: linear-gradient(135deg, #d90000, #660000); color: #fff; border: 2.5px solid #ff4d4d; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 4px 12px rgba(217,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3);":e>=11?"background: linear-gradient(135deg, #b45309, #78350f); color: #fff; border: 2.5px solid #f59e0b; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 4px 12px rgba(180,83,9,0.4), inset 0 1px 0 rgba(255,255,255,0.2);":e>=8?"background: linear-gradient(135deg, #f97316, #c2410c); color: #fff; border: 2.5px solid #fdba74; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 4px 12px rgba(249,115,22,0.4), inset 0 1px 0 rgba(255,255,255,0.3);":e>=5?"background: linear-gradient(135deg, #facc15, #ca8a04); color: #422006; border: 2.5px solid #fef08a; text-shadow: 0 1px 2px rgba(255,255,255,0.6); box-shadow: 0 4px 12px rgba(250,204,21,0.4), inset 0 1px 0 rgba(255,255,255,0.5);":e>=3?"background: linear-gradient(135deg, #86efac, #22c55e); color: #052e16; border: 2.5px solid #bbf7d0; text-shadow: 0 1px 2px rgba(255,255,255,0.6); box-shadow: 0 4px 12px rgba(34,197,94,0.4), inset 0 1px 0 rgba(255,255,255,0.5);":"background: linear-gradient(135deg, #4ade80, #16a34a); color: #fff; border: 2.5px solid #86efac; text-shadow: 0 1px 3px rgba(0,0,0,0.6); box-shadow: 0 4px 12px rgba(22,163,74,0.4), inset 0 1px 0 rgba(255,255,255,0.4);";function cg(){D.useEffect(()=>{const s=document.getElementById("battle-table-css");s&&s.remove();const c=document.createElement("style");c.id="battle-table-css-"+Date.now(),c.textContent=Cc,document.head.appendChild(c)},[]);const[e,t]=D.useState(sg),[n,r]=D.useState(()=>localStorage.getItem(oo)||null),[i,o]=D.useState(!1),[a,u]=D.useState(()=>localStorage.getItem("esc-admin-view-off")==="true"),[d,x]=D.useState(null),C=!!d&&i&&!a,[N,S]=D.useState(1),[h,_]=D.useState({view:"home",yearId:null,tab:"sf1",subTab:"points",sortMode:"order",ovSubTab:"semis",sbShow:"final",sbSort:"ratings",editMode:!1,q:"",libYear:"",compareCc:null,enter:!1}),[O,fe]=D.useState({open:!1,mode:null,payload:null}),[v,m]=D.useState([]),[y,R]=D.useState({}),[Y,q]=D.useState(()=>localStorage.getItem("esc-auto-reset")==="true"),K=D.useRef({}),J=D.useRef(null),xe=D.useRef(!1),oe=D.useRef(null),Qe=D.useRef(null),Wt=D.useRef(e.ratings),Vt=D.useRef(e.pred);D.useRef(null);const ke=D.useCallback(s=>e.years.find(c=>c.id===s)||null,[e.years]),Se=D.useCallback(s=>e.songs.find(c=>c.id===s)||null,[e.songs]),Pt=D.useCallback(s=>{const c=e.jury.find(p=>p.id===s);return c?c.name:s},[e.jury]),mn=D.useCallback(s=>{for(const c of e.years)for(const p in c.shows){const f=c.shows[p].find(g=>g.id===s);if(f)return f}return null},[e.years]),V=D.useCallback(s=>s?s.songId&&e.ratings[s.songId]?e.ratings[s.songId]:e.ratings[s.id]?e.ratings[s.id]:{}:{},[e.ratings]),ne=D.useCallback(s=>s?e.qualPred[s.id]?e.qualPred[s.id]:{}:{},[e.qualPred]),Z=D.useCallback((s,c)=>{const p=Date.now()+Math.random();m(f=>[...f,{id:p,msg:s,type:c||""}]),setTimeout(()=>{m(f=>f.filter(g=>g.id!==p))},2600)},[]),te=D.useCallback((s,c={})=>{fe({open:!0,mode:s,payload:c})},[]),re=D.useCallback(()=>{fe({open:!1,mode:null,payload:null}),setModalTempRating(null),setModalTempEntryId(null),setModalTempJurId(null)},[]);D.useEffect(()=>{const s=Qe.current;if(s){if(O.open&&!s.open){const c=window.scrollY;try{s.showModal()}catch{}requestAnimationFrame(()=>{window.scrollTo(0,c)}),document.body.style.overflow="hidden"}if(!O.open&&s.open){try{s.close()}catch{}document.body.style.overflow=""}}},[O.open]);const hn=D.useCallback(s=>{const c=J.current;if(!c)return;const p=Bi(pd(s)),f={};for(const g in p)p[g]!==K.current[g]&&(f[g]=p[g]);for(const g in K.current)g in p||(f[g]=null);Object.keys(f).length&&(K.current=p,window.__isPushing=!0,c.update(f).catch(g=>console.warn("Firebase push error:",g)).finally(()=>{setTimeout(()=>{window.__isPushing=!1},500)}))},[]);D.useCallback((s,c)=>{const p=J.current;p&&(c==null?(p.child(s).remove().catch(()=>{}),delete K.current[s]):(p.child(s).set(c).catch(()=>{}),K.current[s]=c))},[]);const ft=D.useCallback(s=>{if(d){try{localStorage.setItem(On,JSON.stringify(s))}catch{}hn(s)}},[hn,d]),de=D.useCallback(s=>{if(!d){Z("Bitte einloggen, um Änderungen vorzunehmen!","error");return}t(c=>{const p=typeof s=="function"?s(c):{...c,...s};return ft(p),p})},[ft,d,Z]),Xe=D.useRef({}),kt=D.useRef(null),oi=D.useCallback((s,c,p)=>{const f=c.key,g=p?null:c.val(),b=s==="ratings"?"ratings":s==="pred"?"pred":s==="qualPred"?"qualPred":null;b&&(window.__isPushing||(Xe.current[b]||(Xe.current[b]={}),Xe.current[b][f]={val:g,removed:p},kt.current&&clearTimeout(kt.current),kt.current=setTimeout(()=>{const k=Xe.current;Xe.current={},t(E=>{let P=E,w=!1;for(const z in k){const $={...E[z]||{}};let ie=!1;for(const Q in k[z]){const{val:U,removed:B}=k[z][Q],j=$[Q];if(!(B&&j===void 0)&&!(!B&&U==null&&j===void 0)){if(!B&&U&&typeof U=="object"&&j){let T=!1;for(const W in U)if(j[W]!==U[W]){T=!0;break}if(!T)continue}!B&&typeof U!="object"&&j===U||(B||U===null||U===void 0?delete $[Q]:typeof U=="object"?$[Q]=Object.assign({},j||{},U):$[Q]=U,ie=!0)}}ie&&(w||(P={...E},w=!0),P[z]=$)}if(!w)return E;try{localStorage.setItem(On,JSON.stringify(P))}catch{}return P})},30)))},[]);D.useEffect(()=>()=>{kt.current&&clearTimeout(kt.current)},[]);const Ec=D.useCallback(s=>{if(!window.firebase||J.current)return;const c=window.firebase.database().ref();J.current=c,c.once("value").then(p=>{const f=p.val();if(!f){if(s===!0){const k=qa();K.current=Bi(pd(k)),c.update(K.current).catch(()=>{})}return}const g=Bi(f),b=dg(f);t(b),K.current=g;try{localStorage.setItem(On,JSON.stringify(b))}catch{}}).catch(p=>{console.warn("Firebase pull Fehler:",p)}),["ratings","pred","qualPred"].forEach(p=>{c.child(p).on("child_added",f=>oi(p,f,!1)),c.child(p).on("child_changed",f=>oi(p,f,!1)),c.child(p).on("child_removed",f=>oi(p,f,!0))}),c.child("liveState").on("value",p=>{const f=p.val()||{};t(g=>{const b=JSON.stringify(g.liveState),k=JSON.stringify(f);if(b===k)return g;const E={...g,liveState:f};try{localStorage.setItem(On,JSON.stringify(E))}catch{}return E})}),c.child("battleHidden").on("value",p=>{const f=!!p.val();t(g=>{if(g.battleHidden===f)return g;const b={...g,battleHidden:f};try{localStorage.setItem(On,JSON.stringify(b))}catch{}return b})})},[oi]);D.useEffect(()=>{if(!xe.current){if(xe.current=!0,!window.firebase){console.warn("Firebase SDK not loaded yet");return}try{window.firebase.apps.length||window.firebase.initializeApp(og),window.firebase.auth().onAuthStateChanged(s=>{if(s){const c=(s.email||"").toLowerCase();if(lo.hasOwnProperty(c)){x(s);const p=lo[c],f=p.id,g=!!p.isAdmin;r(f),o(g),localStorage.setItem(oo,f),localStorage.setItem("esc-is-admin",g?"true":"false"),localStorage.setItem("esc-joined","true"),Ec(!0)}else{window.firebase.auth().signOut().then(()=>{x(null),te("alert",{title:"Zugriff verweigert",text:"Das Google-Konto ("+c+") ist nicht freigeschaltet!"})});return}}else x(null)})}catch(s){console.warn("Firebase Init Fehler:",s)}}},[]);const zc=D.useCallback(()=>{if(!window.firebase)return;const s=new window.firebase.auth.GoogleAuthProvider;window.firebase.auth().signInWithPopup(s).then(c=>{const p=(c.user.email||"").toLowerCase();lo.hasOwnProperty(p)?Z("Willkommen, "+(c.user.displayName||p)+"!","success"):(window.firebase.auth().signOut(),te("alert",{title:"Zugriff verweigert",text:"Das Konto "+p+" ist nicht in der Whitelist."}))}).catch(c=>{te("alert",{title:"Login Fehler",text:c.message})})},[te,Z]),Ic=D.useCallback(()=>{window.firebase&&window.firebase.auth().signOut().then(()=>{x(null)})},[]),El=D.useCallback(()=>{const s=e.jury.map(c=>(c.name.trim()[0]||"?").toUpperCase());return s.map((c,p)=>s.filter(g=>g===c).length>1?c+(p+1):c)},[e.jury]),Tc=D.useCallback(()=>{if(!h.yearId||!h.tab)return!1;const s=e.liveState[h.yearId];return s&&s.activeTab===h.tab},[h.yearId,h.tab,e.liveState]),ai=D.useCallback(()=>{if(!h.yearId)return 0;const s=e.liveState[h.yearId];return s&&s.index!==void 0?s.index:0},[h.yearId,e.liveState]);D.useEffect(()=>{if(!h.enter||!oe.current)return;const s=oe.current;s.classList.remove("enter"),s.offsetWidth,s.classList.add("enter"),_(c=>({...c,enter:!1}))},[h.enter]),D.useEffect(()=>{const s=Wt.current,c=Vt.current,p=[];for(const g in e.ratings)for(const b in e.ratings[g])(!s[g]||s[g][b]!==e.ratings[g][b])&&p.push("rating_"+g+"_"+b);for(const g in e.pred)for(const b in e.pred[g])(!c[g]||c[g][b]!==e.pred[g][b])&&p.push("pred_"+g+"_"+b);if(Wt.current=e.ratings,Vt.current=e.pred,!p.length)return;const f=new Set(p);window.__flashTimer&&clearTimeout(window.__flashTimer),window.__flashTimer=setTimeout(()=>{document.querySelectorAll("[data-flash-key]").forEach(g=>{f.has(g.getAttribute("data-flash-key"))&&(g.classList.add("flash-update"),setTimeout(()=>g.classList.remove("flash-update"),1400))}),document.querySelectorAll("[data-live-flash-key]").forEach(g=>{f.has(g.getAttribute("data-live-flash-key"))&&(g.classList.add("live-box-flash"),setTimeout(()=>g.classList.remove("live-box-flash"),1400))})},100)},[e.ratings,e.pred]),D.useEffect(()=>{if(localStorage.getItem("esc-auto-reset")==="true"&&!window.location.search.includes("v=")){const s=new URL(window.location.href);s.searchParams.set("v",Date.now()),window.location.replace(s.toString())}},[]),D.useEffect(()=>{if(!window.firebase||!window.firebase.database||!d)return;const s=localStorage.getItem(oo);if(!s)return;const p=window.firebase.database().ref("presence"),f=p.child(s);f.onDisconnect().remove().then(()=>{f.set({online:!0,time:Date.now()})});const g=k=>{R(E=>{const P=k.val()||{},w=Object.keys(E).sort().join(","),z=Object.keys(P).sort().join(",");return w===z?E:P})};p.on("value",g);const b=()=>{f.remove()};return window.addEventListener("beforeunload",b),window.addEventListener("pagehide",b),()=>{p.off("value",g),window.removeEventListener("beforeunload",b),window.removeEventListener("pagehide",b),f.remove()}},[d]);const Pc=()=>_(s=>({...s,editMode:!s.editMode})),Lc=()=>{if(!d){Z("Bitte einloggen!","error");return}de(s=>({...s,battleHidden:!s.battleHidden}))},_c=()=>{if(!h.yearId)return;if(!ke(h.yearId).shows[h.tab]){Z("Live-Modus geht nur in einer Show!","error");return}de(c=>{const p={...c,liveState:{...c.liveState}},f=p.liveState[h.yearId]||{activeTab:null,index:0};return f.activeTab===h.tab?p.liveState[h.yearId]={...f,activeTab:null}:p.liveState[h.yearId]={...f,activeTab:h.tab,index:0},p})},Rc=s=>{if(!h.yearId)return;const c=ai();S(s>c?1:-1),de(p=>{const f={...p,liveState:{...p.liveState}};return f.liveState[h.yearId]={...f.liveState[h.yearId]||{activeTab:h.tab},index:parseInt(s)||0},f})},Fc=()=>{if(!h.yearId)return;const s=ke(h.yearId),c=s.shows[h.tab]||[];if(!c.length)return;S(1);const p=ai(),f=(p+1)%c.length;de(g=>{const b={...g,liveState:{...g.liveState}};return b.liveState[h.yearId]={...b.liveState[h.yearId]||{activeTab:h.tab},index:f},b})},Oc=()=>{if(!h.yearId)return;const s=ke(h.yearId),c=s.shows[h.tab]||[];if(!c.length)return;S(-1);const p=ai(),f=(p-1+c.length)%c.length;de(g=>{const b={...g,liveState:{...g.liveState}};return b.liveState[h.yearId]={...b.liveState[h.yearId]||{activeTab:h.tab},index:f},b})},Ac=(s,c)=>{de(p=>{const f={...p,qualPred:{...p.qualPred}};return f.qualPred[s]={...f.qualPred[s]||{}},f.qualPred[s][c]===void 0?f.qualPred[s][c]=!1:delete f.qualPred[s][c],f})},cr=()=>_(s=>({...s,yearId:null,view:"home",enter:!0})),Ja=s=>{const c=ke(s);_(p=>({...p,yearId:s,view:"year",tab:c&&c.shows.sf1?"sf1":c&&c.shows.sf2?"sf2":c&&c.shows.final?"final":"overview",subTab:"points",sortMode:"order",ovSubTab:"semis",editMode:!1,enter:!0}))},Mc=()=>_(s=>({...s,view:"compare",enter:!0})),Dc=()=>_(s=>({...s,view:"library",enter:!0})),Bc=s=>{te("confirm",{title:"Delete Song",text:"Delete from library?",onYes:()=>{de(c=>({...c,songs:c.songs.filter(p=>p.id!==s)}))}})},$t=s=>_(c=>({...c,tab:s,subTab:"points",sortMode:"order",ovSubTab:"semis",editMode:!1,enter:!0})),Uc=()=>{const s=ke(h.yearId);te("confirm",{title:"Contest löschen",text:"Willst du diesen kompletten Contest löschen?",onYes:()=>{de(c=>({...c,years:c.years.filter(p=>p!==s)})),_(c=>({...c,yearId:null,view:"home",enter:!0}))}})},zl=s=>{const c=ke(h.yearId);c&&!c.shows[s]&&de(p=>({...p,years:p.years.map(f=>{if(f.id!==h.yearId)return f;const g=cd[s]||25,b=[];for(let k=1;k<=g;k++)b.push({id:f.id+"-"+s+"-"+k});return{...f,shows:{...f.shows,[s]:b}}})}))},Il=s=>{te("confirm",{title:"Show entfernen",text:"Möchtest du "+Ci[s]+" wirklich entfernen? Alle Tipps und Einträge gehen verloren.",onYes:()=>{de(c=>({...c,years:c.years.map(p=>{if(p.id!==h.yearId)return p;const f={...p.shows};return delete f[s],{...p,shows:f}})})),_(c=>{const p=ke(h.yearId);if(!p)return c;const f=c.tab===s?p.shows.sf1?"sf1":p.shows.sf2?"sf2":p.shows.final?"final":"overview":c.tab,g=c.sbShow===s?p.shows.final?"final":Object.keys(p.shows).filter(b=>b!==s)[0]:c.sbShow;return{...c,tab:f,sbShow:g}})}})},Hc=(s,c)=>{c=+c,!(c<=0)&&de(p=>({...p,years:p.years.map(f=>{if(f.id!==h.yearId)return f;const g=[...f.shows[s]||[]],b=g[c];return g[c]=g[c-1],g[c-1]=b,{...f,shows:{...f.shows,[s]:g}}})}))},Wc=(s,c)=>{c=+c;const p=ke(h.yearId),f=p.shows[s]||[];c>=f.length-1||de(g=>({...g,years:g.years.map(b=>{if(b.id!==h.yearId)return b;const k=[...b.shows[s]||[]],E=k[c];return k[c]=k[c+1],k[c+1]=E,{...b,shows:{...b.shows,[s]:k}}})}))},Vc=s=>{de(c=>({...c,years:c.years.map(p=>{if(p.id!==h.yearId)return p;const f=[...p.shows[s]||[]];return f.push({id:p.id+"-"+s+"-"+(f.length+1)}),{...p,shows:{...p.shows,[s]:f}}})}))},$c=s=>{de(c=>({...c,years:c.years.map(p=>{if(p.id!==h.yearId)return p;const f=[...p.shows[s]||[]];return f.length<=0?p:(f.pop(),{...p,shows:{...p.shows,[s]:f}})})}))},Qc=s=>{de(c=>({...c,years:c.years.map(p=>{const f={};for(const g in p.shows)f[g]=p.shows[g].map(b=>b.id===s?{...b,dq:!b.dq}:b);return{...p,shows:f}})}))},Yc=(s,c,p)=>{de(f=>({...f,years:f.years.map(g=>{const b={};for(const k in g.shows){const E=g.shows[k].map(P=>{if(P.id!==s)return P;const w={...P};return c===""||parseFloat(c)===Ar(P.id)?delete w.customNo:w.customNo=isNaN(parseFloat(c))?c:parseFloat(c),w.autoFinal=p,p&&delete w.place,w});Nc(E),b[k]=E}return{...g,shows:b}})})),re()},Kc=s=>{const{artist:c,title:p,cc:f,year:g,editId:b,assign:k}=s;!c||!p||!f||(de(E=>{const P={...E,songs:[...E.songs]};let w;if(b){const z=P.songs.findIndex(A=>A.id===b);z!==-1&&(P.songs[z]={...P.songs[z],artist:c,title:p,cc:f,year:g},w=b)}else w="s"+Date.now().toString(36),P.songs.push({id:w,cc:f,artist:c,title:p,year:g});return k&&(P.years=P.years.map(z=>{const A={};for(const $ in z.shows)A[$]=z.shows[$].map(ie=>ie.id===k?{...ie,songId:w}:ie);return{...z,shows:A}})),P}),k?(re(),setTimeout(()=>te("rating",{eId:k,jurId:n}),50)):re())},Gc=s=>{const{year:c,suffix:p,city:f}=s,g=parseInt(c);if(!g)return;const b=g+(p?"_"+p.toLowerCase():"_main");if(ke(b))return;const k={};for(const E of["sf1","sf2","final"]){k[E]=[];for(let P=1;P<=cd[E];P++)k[E].push({id:b+"-"+E+"-"+P})}de(E=>{const P={...E,years:[...E.years,{id:b,year:g,suffix:p,city:f||void 0,shows:k}]};return P.years.sort((w,z)=>z.year-w.year),P}),re(),_(E=>({...E,yearId:b,view:"year",tab:"sf1",subTab:"points",sortMode:"order",ovSubTab:"semis",enter:!0}))},qc=(s,c)=>{de(p=>({...p,years:p.years.map(f=>f.id===h.yearId?{...f,city:s||void 0,hostCc:c||void 0}:f)})),re()},Jc=s=>{de(c=>({...c,years:c.years.map(p=>p.id===h.yearId?{...p,showDates:s}:p)})),re()},Xc=s=>{const c={};s.forEach(p=>{const f=p.value.trim();f&&(c[p.dataset.jn]=f)}),de(p=>({...p,jury:p.jury.map(f=>c[f.id]?{...f,name:c[f.id]}:f)})),re()},Zc=s=>{if(!d){Z("Bitte einloggen!","error");return}try{const c=JSON.parse(s);de(p=>{const f={...p};return c.jury&&(f.jury=c.jury),c.songs&&(f.songs=c.songs),c.years&&(f.years=c.years,f.years.sort((g,b)=>b.year-g.year||b.id.localeCompare(g.id))),c.ratings&&(f.ratings=c.ratings),c.pred&&(f.pred=c.pred),c.qualPred&&(f.qualPred=c.qualPred),c.liveState&&(f.liveState=c.liveState),f}),re(),Z("JSON aktualisiert!","success")}catch(c){te("alert",{title:"Fehler",text:"Ungültiges JSON-Format: "+c.message})}},ep=s=>{de(c=>{const p={...c},f={};p.jury.forEach(k=>f[k.id]=k),s.jury&&s.jury.forEach(k=>f[k.id]=k),p.jury=Object.values(f);const g={};p.songs.forEach(k=>g[k.id]=k),s.songs&&s.songs.forEach(k=>g[k.id]=k),p.songs=Object.values(g);const b={};return p.years.forEach(k=>b[k.id]=k),s.years&&s.years.forEach(k=>b[k.id]=k),p.years=Object.values(b).sort((k,E)=>E.year-k.year||E.id.localeCompare(k.id)),["ratings","pred","qualPred","liveState"].forEach(k=>{if(p[k]={...p[k]||{}},s[k])for(const E in s[k])s[k].hasOwnProperty(E)&&(p[k][E]=Object.assign({},p[k][E]||{},s[k][E]))}),p}),re(),Z("Daten erfolgreich importiert!","success")},tp=()=>{if(!d){Z("Bitte einloggen!","error");return}const s=new Blob([JSON.stringify(e,null,1)],{type:"application/json"}),c=document.createElement("a");c.href=URL.createObjectURL(s),c.download="esc.json",c.click()},np=()=>{""+ee(Pt(n));const s=Object.keys(y),c=s.length>0?l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,background:"rgba(74, 222, 128, 0.1)",padding:"4px 8px",borderRadius:999,border:"1px solid rgba(74, 222, 128, 0.3)",marginRight:10,height:36},children:[l.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:"var(--green)",boxShadow:"0 0 8px var(--green)",flexShrink:0},title:"Online"}),s.map(g=>{const b=y[g]&&y[g].photoURL,k=Pt(g).charAt(0).toUpperCase();return l.jsxs("div",{title:Pt(g),style:{position:"relative",width:28,height:28},children:[l.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"var(--gold)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:800,color:"#1d1d1d",border:"2px solid var(--panel-solid)",boxSizing:"border-box"},children:k}),b&&l.jsx("img",{src:b,alt:Pt(g),style:{position:"absolute",inset:0,width:28,height:28,borderRadius:"50%",objectFit:"cover",border:"2px solid var(--panel-solid)",display:"block",zIndex:1,background:"var(--panel2-solid)"},onError:E=>{E.target.style.display="none"}})]},g)})]}):null,p=d?l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,background:"var(--panel2)",padding:"5px 12px",borderRadius:999,border:"1px solid var(--line)"},children:[l.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--ink)"},children:ee(d.displayName||d.email)}),l.jsx("button",{className:"ghost sm danger",onClick:Ic,style:{padding:"3px 10px",fontSize:"0.75rem"},children:"Logout"})]}):l.jsxs("button",{onClick:zc,style:{display:"inline-flex",alignItems:"center",gap:8,background:"#4285f4",borderColor:"#4285f4",color:"#fff",fontWeight:700,padding:"7px 16px",borderRadius:999},children:[l.jsxs("svg",{style:{width:15,height:15,fill:"currentColor"},viewBox:"0 0 24 24",children:[l.jsx("path",{d:"M21.35 11.1h-9.17v2.98h5.37c-.24 1.25-.97 2.31-2.07 3.03v2.49h3.33c1.95-1.8 3.08-4.45 3.08-7.5 0-.67-.06-1.33-.17-1.95z"}),l.jsx("path",{d:"M12.18 21c2.75 0 5.06-.91 6.75-2.49l-3.33-2.49c-.91.61-2.08.97-3.42.97-2.63 0-4.86-1.78-5.66-4.17H3.04v2.57C4.74 18.76 8.21 21 12.18 21z"}),l.jsx("path",{d:"M6.52 12.82c-.2-.61-.32-1.26-.32-1.93s.12-1.32.32-1.93V6.39H3.04C2.37 7.72 2 9.21 2 10.89s.37 3.17 1.04 4.5l3.48-2.57z"}),l.jsx("path",{d:"M12.18 4.78c1.5 0 2.85.52 3.91 1.52l2.93-2.93C17.23 1.67 14.92.78 12.18.78 8.21.78 4.74 3.02 3.04 6.39l3.48 2.57c.8-2.39 3.03-4.17 5.66-4.17z"})]})," Google Login"]}),f={display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px",borderRadius:999,fontWeight:700,fontSize:"0.85rem",letterSpacing:"0.01em",background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"};return{...f},l.jsxs("header",{children:[l.jsx("div",{className:"brand",children:"Eurovision Song Contest"}),l.jsxs("div",{className:"who",children:[c,p,d&&i&&l.jsxs("div",{onClick:()=>{const g=!a;u(g),localStorage.setItem("esc-admin-view-off",g?"true":"false")},title:a?"Admin-Modus aktivieren":"Admin-Modus deaktivieren",style:{display:"inline-flex",alignItems:"center",gap:12,padding:"6px 12px 6px 16px",borderRadius:999,background:"linear-gradient(145deg, rgba(20,10,45,0.95) 0%, rgba(10,5,22,1) 100%)",border:a?"1px solid rgba(148,94,255,0.35)":"1px solid rgba(74,222,128,0.45)",boxShadow:a?"inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 8px rgba(0,0,0,0.35)":"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35), 0 0 12px rgba(74,222,128,0.15)",cursor:"pointer",userSelect:"none",transition:"all 0.2s ease"},children:[l.jsx("span",{style:{fontSize:"0.8rem",fontWeight:700,letterSpacing:"0.03em",color:a?"var(--muted)":"var(--green)",textShadow:a?"none":"0 0 8px rgba(74,222,128,0.4)"},children:a?"Admin inaktiv":"Admin aktiv"}),l.jsx("div",{style:{width:36,height:20,borderRadius:999,background:a?"rgba(94,58,168,0.3)":"linear-gradient(135deg, #4ade80 0%, #16a34a 100%)",border:a?"1px solid rgba(148,94,255,0.4)":"1px solid #86efac",boxShadow:a?"inset 0 2px 4px rgba(0,0,0,0.4)":"inset 0 1px 0 rgba(255,255,255,0.4), 0 0 10px rgba(74,222,128,0.4)",position:"relative",transition:"all 0.2s ease",flexShrink:0},children:l.jsx("div",{style:{position:"absolute",top:1,left:a?1:17,width:16,height:16,borderRadius:"50%",background:a?"linear-gradient(145deg, #6f5fa3 0%, #4a3d73 100%)":"linear-gradient(145deg, #ffffff 0%, #e5e5e5 100%)",boxShadow:a?"0 1px 3px rgba(0,0,0,0.5)":"0 2px 6px rgba(0,0,0,0.4), 0 0 8px rgba(255,255,255,0.5)",transition:"all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)"}})})]}),d&&l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:()=>{window.location.href=window.location.pathname+"?v="+Date.now()},title:"Cache leeren & neu laden",style:{...f,padding:"9px 14px"},onMouseEnter:g=>{g.currentTarget.style.transform="translateY(-1px)",g.currentTarget.style.borderColor="rgba(148,94,255,0.7)"},onMouseLeave:g=>{g.currentTarget.style.transform="translateY(0)",g.currentTarget.style.borderColor="rgba(148,94,255,0.35)"},children:"🔄"}),l.jsxs("button",{onClick:()=>te("settings"),title:"Settings, Export, Import",style:f,onMouseEnter:g=>{g.currentTarget.style.transform="translateY(-1px)",g.currentTarget.style.borderColor="rgba(148,94,255,0.7)",g.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:g=>{g.currentTarget.style.transform="translateY(0)",g.currentTarget.style.borderColor="rgba(148,94,255,0.35)",g.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[l.jsx("span",{style:{fontSize:"1rem"},children:"⚙️"})," Settings"]})]})]})]})},Xa=()=>{const s=[...e.years].sort((w,z)=>z.year-w.year||z.id.localeCompare(w.id)),c=new Date;c.setHours(0,0,0,0);const p=c.toISOString().slice(0,10);let f=null;const g=[];for(const w of s){const z=w.showDates&&w.showDates.final||null;z&&p<=z&&g.push({y:w,sortKey:z})}g.length&&(g.sort((w,z)=>w.sortKey.localeCompare(z.sortKey)),f=g[0].y.id);const b=w=>{const z=e.liveState[w.id];return!!(z&&z.activeTab)},k=w=>{const z=new Set;let A=0,$=0;for(const U in w.shows){const B=w.shows[U]||[];for(let j=0;j<B.length;j++){const T=B[j];if(!T.songId||z.has(T.songId))continue;z.add(T.songId);const W=V(T);for(const L of e.jury){const I=W[L.id];I!=null&&(A+=I,$++)}}}const ie=z.size;return{avg:$>0?A/$:0,count:ie}},E=w=>{if(!w)return"";const z=new Date(w+"T00:00:00");if(isNaN(z))return w;const A=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"];return z.getDate()+". "+A[z.getMonth()]},P=f?s.find(w=>w.id===f):null;return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"home-hero",children:[l.jsx("h1",{className:"home-hero-title",children:"Eurovision Song Contest"}),l.jsx("p",{className:"home-hero-sub",children:"Scoreboard · Predictions · Live Mode"})]}),l.jsxs("div",{className:"home-actions",children:[l.jsxs("button",{onClick:()=>{if(!d){Z("Bitte einloggen, um die Song Library zu öffnen!","error");return}Dc()},className:"home-action-btn home-action-primary",style:{position:"relative",cursor:d?"pointer":"not-allowed"},children:[l.jsx("span",{className:"home-action-icon",children:"🎵"}),l.jsxs("span",{className:"home-action-text",children:[l.jsx("b",{children:"Song Library"}),l.jsx("small",{children:"Alle Songs durchsuchen"})]}),!d&&l.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:18,fontSize:"2.4rem",filter:"drop-shadow(0 0 20px rgba(255,209,102,0.6))"},children:"🔒"})]}),l.jsxs("button",{onClick:()=>{if(!d){Z("Bitte einloggen, um den Country Comparison zu öffnen!","error");return}Mc()},className:"home-action-btn",style:{position:"relative",cursor:d?"pointer":"not-allowed"},children:[l.jsx("span",{className:"home-action-icon",children:"🌍"}),l.jsxs("span",{className:"home-action-text",children:[l.jsx("b",{children:"Country Comparison"}),l.jsx("small",{children:"Länder im Vergleich"})]}),!d&&l.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:18,fontSize:"2.4rem",filter:"drop-shadow(0 0 20px rgba(255,209,102,0.6))"},children:"🔒"})]})]}),P&&(()=>{const w=P,z=k(w),A=b(w),$=w.showDates||{},ie=w.hostCc?`https://flagcdn.com/${w.hostCc}.svg`:"",Q=w.year+(w.suffix?" ("+w.suffix+")":""),U=[];return $.sf1&&U.push({k:"SF1",v:E($.sf1)}),$.sf2&&U.push({k:"SF2",v:E($.sf2)}),$.final&&U.push({k:"Final",v:E($.final)}),l.jsxs("div",{className:"upcoming-hero",onClick:()=>{if(!d){Z("Bitte einloggen, um einen Contest zu öffnen!","error");return}Ja(w.id)},style:{position:"relative",minHeight:"160px",cursor:d?"pointer":"not-allowed"},children:[l.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"linear-gradient(135deg, #1a0f33 0%, #2a1749 50%, #120a24 100%)",zIndex:0}}),l.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"radial-gradient(circle at 20% 50%, rgba(168,85,247,0.15) 0%, transparent 60%)",zIndex:0}}),ie&&l.jsx("img",{src:ie,alt:"","aria-hidden":"true",style:{position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",height:"100%",maxWidth:"60%",objectFit:"cover",opacity:.9,filter:"saturate(1.1) contrast(1.05)",pointerEvents:"none",zIndex:0,maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)"}}),l.jsxs("div",{className:"upcoming-hero-inner",style:{position:"relative",zIndex:1},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",width:"100%",marginBottom:16},children:[l.jsx("span",{className:"upcoming-hero-badge",children:"⚡ Upcoming"}),A&&l.jsxs("span",{className:"home-badge home-badge-live",style:{marginLeft:8},children:[l.jsx("span",{className:"home-badge-dot"}),"LIVE"]})]}),l.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",paddingRight:"35%"},children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.jsx("div",{className:"upcoming-hero-year",style:{fontSize:"2.8rem",marginBottom:4},children:ee(Q)}),w.city&&l.jsx("div",{className:"upcoming-hero-host",style:{justifyContent:"flex-start",fontSize:"1.3rem",marginTop:0,marginBottom:12},children:l.jsx("span",{children:ee(w.city)})}),l.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[l.jsx("div",{className:"upcoming-hero-dates",style:{margin:0,justifyContent:"flex-start"},children:U.length>0?U.map(B=>l.jsxs("div",{className:"upcoming-date-chip",style:{minWidth:"auto",padding:"6px 12px"},children:[l.jsx("span",{className:"upcoming-date-label",children:B.k}),l.jsx("span",{className:"upcoming-date-value",children:B.v})]},B.k)):l.jsx("div",{className:"upcoming-date-empty",style:{padding:"6px 12px"},children:"Noch kein Datum"})}),l.jsxs("div",{className:"upcoming-hero-stats",style:{margin:0,justifyContent:"flex-start"},children:[l.jsxs("div",{className:"home-card-stat",children:[l.jsx("span",{className:"home-card-stat-val",children:z.avg.toFixed(1)}),l.jsx("span",{className:"home-card-stat-lbl",children:"Ø Pts"})]}),l.jsx("div",{className:"home-card-stat-divider"}),l.jsxs("div",{className:"home-card-stat",children:[l.jsx("span",{className:"home-card-stat-val",children:z.count}),l.jsx("span",{className:"home-card-stat-lbl",children:"Songs"})]})]})]})]})})]}),!d&&l.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:22,fontSize:"4rem",filter:"drop-shadow(0 0 24px rgba(255,209,102,0.6))"},children:"🔒"})]})})(),s.length?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"home-section-label",children:[l.jsx("span",{children:"All Contests"}),l.jsx("span",{className:"home-section-count",children:s.length})]}),l.jsx("div",{className:"home-grid",children:s.map(w=>{const z=w.year+(w.suffix?" ("+w.suffix+")":""),A=k(w),$=b(w),ie=w.hostCc?`https://flagcdn.com/${w.hostCc}.svg`:"";return l.jsxs("div",{className:"home-card"+($?" is-live":""),onClick:()=>{if(!d){Z("Bitte einloggen, um einen Contest zu öffnen!","error");return}Ja(w.id)},style:{cursor:d?"pointer":"not-allowed"},children:[l.jsx("div",{className:"home-card-flag",style:{backgroundImage:ie?`url('${ie}')`:"linear-gradient(135deg, #3b2367, #1a1033)"}}),$&&l.jsx("div",{className:"home-card-top",children:l.jsxs("span",{className:"home-badge home-badge-live",children:[l.jsx("span",{className:"home-badge-dot"}),"LIVE"]})}),l.jsxs("div",{className:"home-card-body",children:[l.jsx("div",{className:"home-card-year",children:ee(z)}),w.city&&l.jsx("div",{className:"home-card-host",children:l.jsx("span",{children:ee(w.city)})})]}),l.jsxs("div",{className:"home-card-footer",children:[l.jsxs("div",{className:"home-card-stat",children:[l.jsx("span",{className:"home-card-stat-val",children:A.avg.toFixed(1)}),l.jsx("span",{className:"home-card-stat-lbl",children:"Ø Pts"})]}),l.jsxs("div",{className:"home-card-stat",children:[l.jsx("span",{className:"home-card-stat-val",children:A.count}),l.jsx("span",{className:"home-card-stat-lbl",children:"Songs"})]})]}),!d&&l.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:14,fontSize:"3.2rem",filter:"drop-shadow(0 0 20px rgba(255,209,102,0.6))",transition:"opacity 0.2s ease"},onMouseEnter:Q=>{Q.currentTarget.style.background="linear-gradient(145deg, rgba(20,10,45,0.75) 0%, rgba(40,24,82,0.85) 100%)"},onMouseLeave:Q=>{Q.currentTarget.style.background="linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)"},children:"🔒"})]},w.id)})})]}):l.jsx("p",{className:"empty",children:"No Eurovision contest added yet. Use the ＋ button in the bottom right corner."})]})},rp=s=>l.jsxs("div",{className:"live-fallback",children:[l.jsxs("h2",{children:[l.jsx("span",{className:"live-dot"})," Live Modus ist aktiv"]}),l.jsx("p",{children:"Wähle eine Show aus, um beizutreten:"}),l.jsxs("div",{className:"live-fallback-shows",children:[s.shows.sf1&&l.jsx("button",{onClick:()=>$t("sf1"),children:"Semi-final 1"}),s.shows.sf2&&l.jsx("button",{onClick:()=>$t("sf2"),children:"Semi-final 2"}),s.shows.final&&l.jsx("button",{onClick:()=>$t("final"),children:"Grand Final"})]})]}),ip=s=>{const c=ke(h.yearId),p=c.shows[s]||[];if(p.length===0)return rp(c);let f=ai();f>=p.length&&(f=0);const g=p[f],b=Se(g.songId),k=g.autoFinal!==void 0?g.autoFinal:b&&["de","fr","it","es","gb","kr"].indexOf(b.cc)!==-1;let E=0,P="➔";if(s==="final")P=f+1;else if(!k){for(let T=0;T<=f;T++){const W=Se(p[T].songId);(p[T].autoFinal!==void 0?p[T].autoFinal:W&&["de","fr","it","es","gb","kr"].indexOf(W.cc)!==-1)||E++}P=E}const w=Se(g.songId),z=V(g);let A=null,$=null;if(s==="sf1"||s==="sf2")g.place&&(A=g.place);else if(w){if(c.shows.sf1){const T=c.shows.sf1.find(W=>W.songId===w.id);T&&T.place&&(A=T.place)}if(!A&&c.shows.sf2){const T=c.shows.sf2.find(W=>W.songId===w.id);T&&T.place&&(A=T.place)}}if(w&&c.shows.final){const T=c.shows.final.find(W=>W.songId===w.id);T&&T.place&&($=T.place)}const ie=e.jury.map(T=>{const W=z[T.id],L=T.id===n||C&&T.id==="j3",I=W??"–";let H="",M="var(--muted)";if(W!=null){const ae=Lt(W),le=ae.match(/color:([^;]+)/);le&&(M=le[1]),H=ae.replace(/color:[^;]+;?/,"")}const X=g.songId?"rating_"+g.songId+"_"+T.id:"";return l.jsxs("div",{className:"live-jury-box"+(L?" editable":""),"data-live-flash-key":X||void 0,style:St(H),onClick:L?()=>te("rating",{eId:g.id,jurId:T.id}):void 0,title:L?"Punkte ändern":void 0,children:[l.jsx("div",{className:"jury-name",style:{color:M},children:ee(T.name)}),l.jsx("div",{className:"live-big-number",style:{color:M},children:I})]},T.id)}),Q=[];if(A){const T=parseInt(A),W=T===1?"gold":T===2?"silver":T===3?"bronze":"",L=s==="sf1"?"SF1":"SF2";Q.push(l.jsxs("div",{className:"live-current-place "+W,style:{marginRight:8,flexDirection:"column",padding:"6px 14px",lineHeight:1.1},children:[l.jsx("span",{style:{fontSize:"0.6rem",opacity:.8},children:L}),l.jsxs("span",{children:[A,"."]})]},"semi"))}if($){const T=parseInt($),W=T===1?"gold":T===2?"silver":T===3?"bronze":"";Q.push(l.jsxs("div",{className:"live-current-place "+W,style:{flexDirection:"column",padding:"6px 14px",lineHeight:1.1},children:[l.jsx("span",{style:{fontSize:"0.6rem",opacity:.8},children:"GF"}),l.jsxs("span",{children:[$,"."]})]},"final"))}const U=p.map((T,W)=>{const L=Se(T.songId),I=W===f,H=(()=>{if(s==="final")return W+1;const M=Se(p[W].songId);if(p[W].autoFinal!==void 0?p[W].autoFinal:M&&["de","fr","it","es","gb","kr"].indexOf(M.cc)!==-1)return"AQ";let ae=0;for(let le=0;le<=W;le++){const je=Se(p[le].songId);(p[le].autoFinal!==void 0?p[le].autoFinal:je&&["de","fr","it","es","gb","kr"].indexOf(je.cc)!==-1)||ae++}return ae})();return l.jsxs("div",{onClick:()=>Rc(W),title:L?L.title:"Kein Song",style:{position:"relative",width:64,height:64,borderRadius:14,cursor:"pointer",background:I?"linear-gradient(145deg, rgba(255,209,102,0.25) 0%, rgba(30,18,60,0.98) 70%)":"linear-gradient(145deg, rgba(30,18,60,0.85) 0%, rgba(15,8,32,0.95) 100%)",border:I?"2.5px solid var(--gold)":"1.5px solid rgba(148,94,255,0.3)",boxShadow:I?"0 0 20px rgba(255,209,102,0.5), inset 0 1px 0 rgba(255,255,255,0.15)":"inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 6px rgba(0,0,0,0.3)",transition:"all 0.2s ease",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",flexShrink:0},onMouseEnter:M=>{I||(M.currentTarget.style.borderColor="rgba(168,85,247,0.7)",M.currentTarget.style.transform="scale(1.08)")},onMouseLeave:M=>{I||(M.currentTarget.style.borderColor="rgba(148,94,255,0.3)",M.currentTarget.style.transform="scale(1)")},children:[L?l.jsx("img",{src:`https://flagcdn.com/w80/${L.cc}.png`,alt:L.cc,style:{width:I?42:34,height:I?28:22,objectFit:"cover",borderRadius:4,boxShadow:"0 0 0 1.5px rgba(255,255,255,0.3)",filter:I?"none":"grayscale(0.4) brightness(0.85)",transition:"all 0.2s ease"}}):l.jsx("span",{style:{fontSize:"1.2rem",color:"var(--muted-dim)"},children:"–"}),l.jsx("div",{style:{position:"absolute",top:2,left:2,fontSize:"0.55rem",fontWeight:900,fontFamily:"var(--display)",padding:"1px 5px",borderRadius:5,background:I?"rgba(255,209,102,0.9)":"rgba(5,3,15,0.85)",color:I?"#1d1d1d":"var(--muted)",border:I?"1px solid #fff6cc":"1px solid rgba(255,255,255,0.15)",letterSpacing:"0.03em",lineHeight:1.2},children:H}),I&&l.jsx("div",{style:{position:"absolute",bottom:0,right:0,width:0,height:0,borderStyle:"solid",borderWidth:"0 0 16px 16px",borderColor:"transparent transparent var(--gold) transparent"}})]},T.id)});let B;w?B=l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",width:"100%",position:"relative",zIndex:1,paddingTop:10},children:[l.jsx("div",{className:"live-cc-badge",children:ee(Ni(w.cc))}),l.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Q.length>0&&l.jsx("div",{style:{display:"flex",gap:6,marginBottom:10,flexWrap:"wrap",justifyContent:"center"},children:Q}),l.jsx("div",{style:{fontSize:"0.78rem",color:"var(--gold)",fontWeight:800,marginBottom:8,letterSpacing:"0.12em",textTransform:"uppercase",textShadow:"0 1px 2px rgba(0,0,0,0.8), 0 0 8px rgba(255,209,102,0.3)"},children:s==="final"?`● Now Playing · Startnummer ${P}`:k?"● Now Playing · Auto Qualifier":`● Now Playing · Startnummer ${P}`}),l.jsx("h2",{style:{fontSize:"2.5rem",margin:"0 0 6px",paddingBottom:"4px",fontWeight:800,letterSpacing:"-0.02em",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"#fff",lineHeight:1.2,textShadow:"0 1px 2px rgba(0,0,0,0.85)"},children:ee(w.title)}),l.jsxs("p",{style:{fontSize:"1.2rem",color:"#d8cdf0",margin:0,paddingBottom:"6px",fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textShadow:"0 1px 2px rgba(0,0,0,0.8)"},children:[ee(w.artist)," · ",ee(et[w.cc]||w.cc.toUpperCase())]})]})]}):B=l.jsxs("div",{style:{flex:1,textAlign:"center",padding:14},children:[l.jsxs("h3",{children:["Startnummer ",f+1]}),l.jsx("p",{className:"empty",style:{margin:"4px 0 14px"},children:"Kein Song zugewiesen."}),l.jsx("button",{className:"primary",onClick:()=>te("picker",{entryId:g.id}),children:"＋ Song hinzufügen"})]});const j=w?"https://flagcdn.com/"+w.cc+".svg":"";return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"live-mode-banner",style:{padding:"0",background:"transparent",border:"none",boxShadow:"none"},children:[l.jsxs("div",{style:{position:"relative"},children:[l.jsxs("div",{style:{position:"absolute",top:14,left:14,zIndex:10,display:"flex",alignItems:"center",gap:8,pointerEvents:"none"},children:[l.jsx("div",{className:"live-dot",style:{width:18,height:18,border:"2.5px solid var(--bg)",boxShadow:"0 0 12px rgba(255,45,149,0.8), 0 0 24px rgba(255,45,149,0.4)"},title:"Live"}),l.jsx("span",{style:{fontFamily:"var(--display)",fontWeight:900,fontSize:"0.75rem",letterSpacing:"0.16em",color:"var(--red)",textShadow:"0 0 10px rgba(255,45,149,0.9), 0 0 20px rgba(255,45,149,0.5)"},children:"LIVE"})]}),l.jsxs("div",{className:"live-current-card live-song-slide "+(N>0?"from-right":"from-left"),style:{"--live-flag-url":`url('${j}')`,padding:"56px 36px",minHeight:"280px",borderRadius:26},children:[l.jsxs("div",{style:{position:"absolute",top:16,right:16,display:"flex",gap:8,zIndex:10},children:[l.jsx("button",{onClick:Oc,title:"Vorheriger Song",style:{width:38,height:38,borderRadius:"50%",background:"rgba(5,3,15,0.85)",color:"#fff",fontWeight:800,fontSize:"1rem",border:"1.5px solid rgba(255,255,255,0.25)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,transition:"transform 0.15s ease, border-color 0.15s ease, background 0.15s ease",backdropFilter:"none"},onMouseEnter:T=>{T.currentTarget.style.transform="scale(1.1)",T.currentTarget.style.borderColor="var(--gold)",T.currentTarget.style.background="rgba(255,209,102,0.2)"},onMouseLeave:T=>{T.currentTarget.style.transform="scale(1)",T.currentTarget.style.borderColor="rgba(255,255,255,0.25)",T.currentTarget.style.background="rgba(5,3,15,0.85)"},children:"◀"}),l.jsx("button",{onClick:Fc,title:"Nächster Song",style:{width:38,height:38,borderRadius:"50%",background:"rgba(5,3,15,0.85)",color:"#fff",fontWeight:800,fontSize:"1rem",border:"1.5px solid rgba(255,255,255,0.25)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,transition:"transform 0.15s ease, border-color 0.15s ease, background 0.15s ease",backdropFilter:"none"},onMouseEnter:T=>{T.currentTarget.style.transform="scale(1.1)",T.currentTarget.style.borderColor="var(--gold)",T.currentTarget.style.background="rgba(255,209,102,0.2)"},onMouseLeave:T=>{T.currentTarget.style.transform="scale(1)",T.currentTarget.style.borderColor="rgba(255,255,255,0.25)",T.currentTarget.style.background="rgba(5,3,15,0.85)"},children:"▶"})]}),B]},f)]}),l.jsx("div",{className:"live-flow-jury",style:{display:"flex",gap:10,marginTop:16,flexWrap:"wrap"},children:ie},"jury-"+f)]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:36,marginBottom:16},children:[l.jsx("h3",{style:{margin:0,fontSize:"1.2rem"},children:"Running Order"}),l.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:800,color:"var(--muted)",background:"var(--panel2-solid)",padding:"3px 10px",borderRadius:999,border:"1px solid var(--line)",letterSpacing:"0.08em"},children:[p.length," Songs"]})]}),l.jsx("div",{className:"live-flow-queue",style:{display:"flex",flexWrap:"wrap",gap:10,paddingTop:4,paddingBottom:8},children:U},"queue-"+f)]})},lp=()=>{const s=ke(h.yearId);if(!s)return Xa();let c=h.tab;!s.shows[c]&&c!=="overview"&&c!=="battle"&&c!=="sb"&&(c=s.shows.sf1?"sf1":s.shows.sf2?"sf2":s.shows.final?"final":"overview");const p=Tc();let f;s.shows[c]&&p?f=ip(c):s.shows[c]?f=sp(c):c==="overview"?f=ap():c==="battle"?f=dp():c==="sb"&&(f=up());const g=s.year+(s.suffix?" ("+s.suffix+")":""),b=!!s.shows.sf1,k=!!s.shows.sf2,E=!!s.shows.final,P=l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:18,flexWrap:"wrap",gap:12},children:[l.jsxs("button",{onClick:cr,style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px 9px 14px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",fontWeight:700,fontSize:"0.85rem",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:B=>{B.currentTarget.style.transform="translateX(-2px)",B.currentTarget.style.borderColor="rgba(168,85,247,0.7)",B.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:B=>{B.currentTarget.style.transform="translateX(0)",B.currentTarget.style.borderColor="rgba(148,94,255,0.35)",B.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[l.jsx("span",{style:{fontSize:"1rem",lineHeight:1},children:"←"})," Zurück"]}),l.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[l.jsx("button",{className:"ghost "+(h.editMode?"primary":""),onClick:Pc,children:"✏️ Edit"}),h.editMode&&l.jsx("button",{className:"ghost sm",onClick:()=>te("editDates"),title:"Show-Daten eintragen",children:"📅 Dates"}),!p&&h.editMode&&l.jsxs(l.Fragment,{children:[b?l.jsx("button",{className:"ghost sm danger",onClick:()=>Il("sf1"),children:"− SF1"}):l.jsx("button",{className:"ghost sm",onClick:()=>zl("sf1"),children:"＋ SF1"}),k?l.jsx("button",{className:"ghost sm danger",onClick:()=>Il("sf2"),children:"− SF2"}):l.jsx("button",{className:"ghost sm",onClick:()=>zl("sf2"),children:"＋ SF2"}),E?l.jsx("button",{className:"ghost sm danger",onClick:()=>Il("final"),children:"− Final"}):l.jsx("button",{className:"ghost sm",onClick:()=>zl("final"),children:"＋ Final"}),l.jsx("button",{className:"ghost sm danger",onClick:Uc,children:"Contest löschen"})]})]})]});let w=null;if(s.city||s.hostCc){const B=h.editMode?l.jsx("button",{className:"ghost sm",onClick:()=>te("editCity"),style:{padding:"2px 8px",fontSize:"0.72rem",marginLeft:6},title:"Host ändern",children:"✏️"}):null;w=l.jsxs("div",{className:"host-pill",children:[l.jsx("div",{className:"host-pill-flag",children:s.hostCc?l.jsx(Kt,{cc:s.hostCc}):"🌍"}),l.jsx("div",{className:"host-pill-divider"}),l.jsxs("div",{className:"host-pill-text",children:[s.hostCc&&l.jsx("span",{className:"host-pill-cc",children:ee(et[s.hostCc]||s.hostCc.toUpperCase())}),s.city&&l.jsx("span",{className:"host-pill-city",children:ee(s.city)})]}),B]})}else h.editMode&&(w=l.jsx("div",{style:{textAlign:"center",margin:"10px 0 22px"},children:l.jsx("button",{className:"ghost sm",onClick:()=>te("editCity"),children:"＋ Host City hinzufügen"})}));const z=l.jsxs(l.Fragment,{children:[l.jsxs("h1",{className:"yeartitle",style:{marginBottom:w?4:24},children:["Eurovision ",ee(g)]}),w]}),A=p?{background:"rgba(255,255,255,0.04)",color:"var(--muted)",borderColor:"rgba(148,94,255,0.25)",fontWeight:600,fontSize:"0.82rem",padding:"7px 14px",opacity:.75}:{background:"linear-gradient(135deg, rgba(255,45,149,0.14) 0%, rgba(168,85,247,0.1) 100%)",color:"#ffd6ea",borderColor:"rgba(255,45,149,0.35)",fontWeight:700,fontSize:"0.85rem",padding:"8px 18px",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(255,45,149,0.12)"},ie=(e.liveState[h.yearId]||{}).activeTab,Q=l.jsxs("div",{className:"tabs",children:[b&&l.jsx("button",{className:(h.tab==="sf1"?"on":"")+(ie==="sf1"?" live-active":""),onClick:()=>$t("sf1"),children:"Semi-final 1"}),k&&l.jsx("button",{className:(h.tab==="sf2"?"on":"")+(ie==="sf2"?" live-active":""),onClick:()=>$t("sf2"),children:"Semi-final 2"}),E&&l.jsx("button",{className:(h.tab==="final"?"on":"")+(ie==="final"?" live-active":"")+" final-tab",onClick:()=>$t("final"),children:"Grand Final"})]}),U=l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,marginBottom:20,borderBottom:"1px solid var(--line)",paddingBottom:16},children:[Q,l.jsx("div",{style:{display:"flex",alignItems:"center"},children:s.shows[h.tab]&&l.jsx("button",{onClick:_c,style:A,onMouseEnter:B=>{p?(B.currentTarget.style.opacity="1",B.currentTarget.style.borderColor="rgba(255,77,109,0.6)",B.currentTarget.style.color="#ffb3c1"):(B.currentTarget.style.transform="translateY(-1px)",B.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(255,45,149,0.22)")},onMouseLeave:B=>{p?(B.currentTarget.style.opacity="0.75",B.currentTarget.style.borderColor="rgba(148,94,255,0.25)",B.currentTarget.style.color="var(--muted)"):(B.currentTarget.style.transform="translateY(0)",B.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(255,45,149,0.12)")},title:p?"Live-Modus verlassen":"Live-Modus starten",children:p?l.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,opacity:.9},children:[l.jsx("span",{style:{fontSize:"0.7rem",letterSpacing:"0.1em"},children:"●"}),l.jsx("span",{style:{fontSize:"0.78rem",letterSpacing:"0.04em"},children:"Live verlassen"})]}):l.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:7},children:[l.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:"var(--red)",boxShadow:"0 0 8px var(--red)"}}),l.jsx("span",{style:{letterSpacing:"0.03em"},children:"Live Mode"})]})})}),l.jsxs("div",{className:"tabs",children:[l.jsx("button",{className:h.tab==="battle"?"on":"",onClick:()=>$t("battle"),children:"Points Battle"}),l.jsx("button",{className:h.tab==="sb"?"on":"",onClick:()=>$t("sb"),children:"Scoreboard"})]})]});return l.jsxs(l.Fragment,{children:[P,z,U,f]})},op=()=>{const s=ke(h.yearId);if(!s)return null;const c=[];for(const p in Ci)s.shows[p]&&c.push(l.jsx("button",{className:h.sbShow===p?"on":"",onClick:()=>_(f=>({...f,sbShow:p})),children:Ci[p]},p));return c.push(l.jsx("button",{className:h.sbShow==="all"?"on":"",onClick:()=>_(p=>({...p,sbShow:"all"})),children:"All Songs"},"all")),l.jsx("div",{className:"seg",children:c})};function St(s){if(!s)return{};const c={};return s.split(";").forEach(p=>{const[f,...g]=p.split(":");if(!f||!g.length)return;const b=f.trim().replace(/-([a-z])/g,(k,E)=>E.toUpperCase());c[b]=g.join(":").trim()}),c}const ap=()=>{const s=ke(h.yearId),c=El(),p=!!(s.shows.sf1||s.shows.sf2),f=p?l.jsxs("div",{className:"tabs",style:{border:"none",margin:"18px 0"},children:[l.jsx("button",{className:h.ovSubTab==="semis"?"on":"",onClick:()=>_(P=>({...P,ovSubTab:"semis"})),children:"Semi-finals"}),l.jsx("button",{className:h.ovSubTab==="final"?"on":"",onClick:()=>_(P=>({...P,ovSubTab:"final"})),children:"Grand Final"})]}):null,g=P=>l.jsx("div",{style:{display:"flex",gap:3,marginBottom:8,justifyContent:P?"flex-end":"flex-start",padding:"0 2px"},children:e.jury.map((w,z)=>l.jsx("div",{style:{width:30,textAlign:"center",fontSize:"0.68rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.05em"},title:ee(w.name),children:ee(c[z])},w.id))}),b=P=>{const w=V(P);return l.jsx("div",{className:"ov-pts",children:e.jury.map(z=>{const A=w[z.id],$=A?St(Lt(A)):{};return l.jsx("span",{className:"ov-pt"+(A!=null?"":" none"),style:$,children:A??""},z.id)})})};if(h.ovSubTab==="final"||!p){const P=s.shows.final||[];return l.jsxs(l.Fragment,{children:[l.jsx("h2",{children:"Overview"}),l.jsx("p",{className:"hint",children:"Everyone's points side by side. Disqualified or non-qualifying countries are greyed out."}),f,l.jsxs("div",{className:"card",style:{marginTop:18},children:[l.jsx("h3",{style:{textAlign:"center",marginBottom:14,fontSize:"1.1rem"},children:"Grand Final"}),g(!1),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:P.map(w=>{const z=Se(w.songId),A=w.dq;return l.jsxs("div",{className:"ov-row-item",children:[b(w),z?l.jsx("span",{className:"ov-pill"+(A?" out":""),children:l.jsxs("div",{className:"song-info",children:[l.jsx(Kt,{cc:z.cc}),l.jsx("span",{children:l.jsx("b",{children:ee(z.title)})})]})}):l.jsx("span",{className:"ov-pill out",children:l.jsx("div",{className:"song-info",children:l.jsx("span",{children:"–"})})}),l.jsx("div",{style:{flexGrow:1}}),l.jsx("span",{className:"ov-place",children:w.place?w.place+".":"–"})]},w.id)})})]})]})}const k=(P,w,z)=>{const A=s.shows[P]||[];return l.jsxs("div",{className:"ov-column",children:[l.jsx("div",{className:"ov-col-title",children:w}),g(z),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:A.map($=>{const ie=Se($.songId),Q=$.place&&$.place>10||$.dq,U=l.jsx("span",{className:"ov-place",children:$.place?$.place+".":"–"}),B=ie?l.jsx("span",{className:"ov-pill"+(Q?" out":""),children:l.jsxs("div",{className:"song-info",children:[l.jsx(Kt,{cc:ie.cc}),l.jsx("span",{children:l.jsx("b",{children:ee(ie.title)})})]})}):l.jsx("span",{className:"ov-pill out",children:l.jsx("div",{className:"song-info",children:l.jsx("span",{children:"–"})})}),j=b($);return l.jsx("div",{className:"ov-row-item",children:z?l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{flexGrow:1}}),U,B,j]}):l.jsxs(l.Fragment,{children:[j,B,l.jsx("div",{style:{flexGrow:1}}),U]})},$.id)})})]})};let E;return s.shows.sf1&&s.shows.sf2?E=l.jsxs(l.Fragment,{children:[k("sf1","Semi-final 1",!1),k("sf2","Semi-final 2",!0)]}):s.shows.sf1?E=k("sf1","Semi-final 1",!1):s.shows.sf2&&(E=k("sf2","Semi-final 2",!1)),l.jsxs(l.Fragment,{children:[l.jsx("h2",{children:"Overview"}),l.jsx("p",{className:"hint",children:"Everyone's points side by side. Disqualified or non-qualifying countries are greyed out."}),f,l.jsx("div",{className:"ov-grid-side",children:E})]})},sp=s=>{const c=ke(h.yearId),p=c.shows[s]||[],f=El(),g={};e.jury.forEach(L=>{g[L.id]=0}),p.forEach(L=>{if(L.songId){const I=V(L);e.jury.forEach(H=>{I[H.id]&&(g[H.id]+=I[H.id])})}});let b=-1,k=99999;for(const L in g)g[L]>b&&(b=g[L]),g[L]<k&&(k=g[L]);(b===k||b===0)&&(b=-1,k=99999);const E={};e.jury.forEach(L=>{E[L.id]={correct:0,totalGuessed:0}}),s!=="final"&&p.forEach(L=>{const I=ne(L),H=L.place!==void 0&&L.place!==null?L.place>10:null;H!==null&&e.jury.forEach(M=>{I[M.id]===!1&&(E[M.id].totalGuessed++,H===!0&&E[M.id].correct++)})});const P=l.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:e.jury.map(L=>{const I=g[L.id];let H="var(--cyan)";I===b&&(H="var(--green)"),I===k&&(H="#ffb3c1");let M=null;if(s!=="final"){const X=E[L.id],ae=X.totalGuessed>0&&X.correct===X.totalGuessed?"var(--gold)":"var(--muted)";M=l.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:700,borderLeft:"1px solid var(--line)",paddingLeft:8,color:ae},children:[X.correct," / ",X.totalGuessed," NQs"]})}return l.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:"1px solid rgba(94,58,168,0.4)",padding:"7px 16px",borderRadius:999,fontSize:"0.83rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:8,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[l.jsx("span",{style:{color:"var(--ink)"},children:ee(L.name)}),l.jsxs("span",{style:{color:H},children:[I," pts"]}),M]},L.id)})});let w=p.slice();s!=="final"&&h.subTab==="tips"&&(w=w.filter(L=>{const I=Se(L.songId);return!(L.autoFinal!==void 0?L.autoFinal:I&&["de","fr","it","es","gb","kr"].indexOf(I.cc)!==-1)})),h.sortMode==="place"&&w.sort((L,I)=>{const H=Se(L.songId),M=Se(I.songId),X=L.autoFinal!==void 0?L.autoFinal:H&&["de","fr","it","es","gb","kr"].indexOf(H.cc)!==-1,ae=I.autoFinal!==void 0?I.autoFinal:M&&["de","fr","it","es","gb","kr"].indexOf(M.cc)!==-1;if(s!=="final"&&X!==ae)return X?-1:1;const le=L.place!==void 0&&L.place!==null?L.place:9999,je=I.place!==void 0&&I.place!==null?I.place:9999;return le!==je?le-je:p.indexOf(L)-p.indexOf(I)});const z={};p.forEach(L=>{L.place&&(z[L.place]=(z[L.place]||0)+1)});const A=s!=="final"?l.jsxs("div",{className:"tabs edle-slider",style:{border:"none",margin:0,padding:4,borderRadius:999,display:"inline-flex",gap:4},children:[l.jsx("button",{className:h.subTab!=="tips"?"on":"",style:{border:"none",margin:0},onClick:()=>_(L=>({...L,subTab:"points"})),children:"Points"}),l.jsx("button",{className:h.subTab==="tips"?"on":"",style:{border:"none",margin:0},onClick:()=>_(L=>({...L,subTab:"tips"})),children:"NQ Tips"})]}):null,$=l.jsxs("div",{className:"tabs edle-slider",style:{border:"none",margin:0,padding:4,borderRadius:999,display:"inline-flex",gap:4},children:[l.jsx("button",{className:h.sortMode==="order"?"on":"",style:{border:"none",margin:0},onClick:()=>_(L=>({...L,sortMode:"order"})),children:"Order"}),l.jsx("button",{className:h.sortMode==="place"?"on":"",style:{border:"none",margin:0},onClick:()=>_(L=>({...L,sortMode:"place"})),children:"Placement"})]});let ie=null;if(h.editMode&&w.length>1){c.splitAfter=c.splitAfter||{};const L=Math.floor(w.length/2),I=c.splitAfter[s]!==void 0?c.splitAfter[s]:L;ie=l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:"0.85rem",color:"var(--muted)",background:"var(--panel2-solid)",padding:"5px 12px",borderRadius:999,border:"1px solid var(--line)"},children:[l.jsx("span",{children:"1. Hälfte bis Nr.:"}),l.jsx("input",{type:"number",min:"1",max:w.length-1,value:I,onChange:H=>{de(M=>({...M,years:M.years.map(X=>X.id===h.yearId?{...X,splitAfter:{...X.splitAfter||{},[s]:parseInt(H.target.value)||1}}:X)}))},style:{width:58,height:34,textAlign:"center",fontWeight:700,padding:0}})]})}const Q=l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"18px 0 16px",flexWrap:"wrap",gap:14},children:[l.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap",flex:1,justifyContent:"flex-start"},children:[A,ie]}),l.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:"auto"},children:P}),l.jsx("div",{style:{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap",flex:1,justifyContent:"flex-end"},children:$})]}),U=[],B=[];c.splitAfter=c.splitAfter||{};const j=c.splitAfter[s]!==void 0?c.splitAfter[s]:Math.floor(w.length/2);for(let L=0;L<w.length;L++){const I=w[L],H=L+1,M=p.indexOf(I),X={item:I,index:M!==-1?M:L};H>j&&h.sortMode==="order"||h.sortMode==="place"&&L>=Math.ceil(w.length/2)?B.push(X):U.push(X)}const T=L=>{const I=L.item,H=L.index,M=Se(I.songId),X=V(I),ae=ne(I),le=I.autoFinal!==void 0?I.autoFinal:M&&["de","fr","it","es","gb","kr"].indexOf(M.cc)!==-1,je=I.place!==void 0&&I.place!==null?I.place<=10:null;let Ae;if(s!=="final"&&h.subTab==="tips")if(le)Ae=l.jsx("div",{className:"tiles",children:l.jsx("div",{className:"tile aq-tile",title:"Auto Qualifier – direkt fürs Finale gesetzt",children:l.jsx("div",{className:"tile-value",children:"AQ"})})});else{const vn=e.jury.map((pe,Ct)=>{const Te=ae[pe.id],Ze=pe.id===n||C;let gt="var(--panel2-solid)",bn="2.5px solid transparent",mr="";Te===!1&&(bn="2.5px solid #ff4d6d",gt="rgba(255,77,109,0.35)"),je!==null&&Te!==void 0&&Te===!1&&(je===!1?(gt="linear-gradient(135deg,#22c55e,#16a34a)",bn="2.5px solid #4ade80"):(gt="linear-gradient(135deg,#ff4d6d,#dc2626)",bn="2.5px solid #ffb3c1")),Te===void 0&&(mr=Ze?" tip-hidden":" tip-permanently-hidden");const Ll=f[Ct];return l.jsx("button",{className:"tile nq-tip-tile "+(Ze?"me":"empty")+mr,style:{background:gt,border:bn,cursor:Ze?"pointer":"default",pointerEvents:Ze?"auto":"none",position:"relative",fontStyle:"normal",display:"flex",alignItems:"center",justifyContent:"center",width:"46px",height:"50px",minHeight:"50px",maxHeight:"50px",padding:0,boxSizing:"border-box"},onClick:Ze?()=>Ac(I.id,pe.id):void 0,title:ee(pe.name),children:l.jsx("div",{style:{fontFamily:"var(--body)",fontWeight:800,fontSize:"1.05rem",color:Te!==void 0?"#fff":"var(--muted)",textShadow:Te!==void 0?"0 1px 3px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.5)":"0 1px 2px rgba(0,0,0,0.5)",letterSpacing:"0.03em",lineHeight:1,opacity:Te!==void 0?1:.4,fontStyle:"normal",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"},children:Ll})})}),Qt=e.jury.map(pe=>X[pe.id]).filter(pe=>pe),yn=Qt.reduce((pe,Ct)=>pe+Ct,0),gr=Qt.length?yn/Qt.length:null;Ae=l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"tiles",children:vn}),l.jsxs("div",{className:"avg",children:[l.jsx("b",{children:gr==null?"–":gr.toFixed(1)}),l.jsx("small",{children:"AVG"})]})]})}else{const vn=e.jury.map(pe=>X[pe.id]).filter(pe=>pe),Qt=vn.reduce((pe,Ct)=>pe+Ct,0),yn=vn.length?Qt/vn.length:null,gr=e.jury.map((pe,Ct)=>{const Te=X[pe.id],Ze=C||pe.id===n,gt="tile"+(Ze?" me":"")+(Te!=null?"":" empty")+(Ze?"":" readonly"),bn=Te?St(Lt(Te)):{},mr=I.songId?"rating_"+I.songId+"_"+pe.id:"",Ll=f[Ct],ts=l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"tile-value",style:{position:"relative",zIndex:1},children:Te??"–"}),l.jsx("div",{style:{position:"absolute",bottom:2,right:4,fontFamily:"var(--body)",fontWeight:800,fontSize:"0.58rem",color:"rgba(0,0,0,0.55)",textShadow:"0 1px 0 rgba(255,255,255,0.3)",lineHeight:1,letterSpacing:"0.03em",zIndex:2,pointerEvents:"none",fontStyle:"normal"},children:Ll})]}),zp=M&&Ze?l.jsx("button",{className:gt,"data-flash-key":mr||void 0,style:{...bn,position:"relative"},onClick:()=>te("rating",{eId:I.id,jurId:pe.id}),title:ee(pe.name),children:ts}):l.jsx("div",{className:gt,"data-flash-key":mr||void 0,style:{...bn,position:"relative"},title:ee(pe.name),children:ts});return l.jsx("div",{children:zp},pe.id)});Ae=l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"tiles",children:gr}),l.jsxs("div",{className:"avg",children:[l.jsx("b",{children:yn==null?"–":yn.toFixed(1)}),l.jsx("small",{children:"AVG"})]})]})}const _e=s!=="final"&&le?l.jsx("span",{className:"autofinal",title:"Auto Qualifier",children:"AQ"}):null,jt=I.place!==void 0&&I.place!==null?I.place:"",fr=I.customNo!==void 0&&I.customNo!==null&&I.customNo!==""?parseFloat(I.customNo):Ar(I.id),xn=fr%1!==0?"➔":fr;let Pl=s!=="final"&&I.place!==void 0&&I.place!==null&&I.place>10;s==="final"&&(Pl=!1);let Za=(I.place===1?" winner":"")+(Pl?" out":"")+(I.dq?" dq":"")+(s!=="final"&&le&&I.place!==1?" autofinal-row":"");s!=="final"&&le&&!Pl&&(Za+=" aq-row");const es=h.editMode?l.jsxs("div",{className:"sm-group",children:[l.jsx("button",{className:"ghost sm",onClick:()=>Hc(s,H),children:"▲"}),l.jsx("button",{className:"ghost sm",onClick:()=>Wc(s,H),children:"▼"}),l.jsx("button",{className:"ghost sm",onClick:()=>te("picker",{entryId:I.id}),children:"Change"}),l.jsx("button",{className:"ghost sm danger",onClick:()=>Qc(I.id),children:I.dq?"Undq":"DQ"})]}):null,jp=M?l.jsxs("div",{className:"meta",children:[l.jsxs("span",{children:[l.jsx("b",{children:ee(M.title)})," – ",ee(M.artist)]}),_e,es]}):l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("button",{className:"primary sm",onClick:()=>te("picker",{entryId:I.id}),children:"＋ Song"}),es]}),Cp=s!=="final"&&le?l.jsxs("div",{className:"pl",style:{opacity:0,pointerEvents:"none"},children:[l.jsx("input",{type:"number",disabled:!0}),l.jsx("small",{children:"PLACE"})]}):l.jsxs("div",{className:"pl",children:[l.jsx("input",{type:"number",min:"1",max:w.length,placeholder:"–",value:jt,className:I.place&&z[I.place]>1?"dup":"",disabled:!M,onChange:vn=>{const Qt=parseInt(vn.target.value);de(yn=>({...yn,years:yn.years.map(pe=>{const Ct={};for(const Te in pe.shows)Ct[Te]=pe.shows[Te].map(Ze=>{if(Ze.id!==I.id)return Ze;const gt={...Ze};return Qt>0?gt.place=Qt:delete gt.place,gt});return{...pe,shows:Ct}})}))},"aria-label":"Place"}),l.jsx("small",{children:"PLACE"})]}),Np=M&&M.cc?{"--flag-url":`url('https://flagcdn.com/${M.cc}.svg')`}:{},Ep=M&&M.cc?l.jsx("div",{className:"cc-code",children:ee(Ni(M.cc))}):null;return l.jsxs("div",{className:"row "+Za,style:Np,children:[Ep,l.jsx("div",{className:"no",onClick:()=>te("editNo",{eId:I.id}),title:"Change order/status",children:ee(xn)}),l.jsx("div",{className:"row-content",children:jp}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[l.jsx("div",{className:"stats",children:Ae}),Cp]})]},I.id)},W=h.editMode?l.jsxs("div",{className:"actions",children:[l.jsx("button",{className:"ghost",onClick:()=>Vc(s),children:"＋ Running Order"}),l.jsx("button",{className:"ghost",onClick:()=>$c(s),children:"− Remove Last"})]}):null;return l.jsxs(l.Fragment,{children:[Q,l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",color:"var(--muted)",fontWeight:700,fontSize:"0.78rem",padding:"0 4px",margin:"14px 0 8px",letterSpacing:"0.08em",textTransform:"uppercase"},children:[l.jsx("div",{children:"1st Half"}),l.jsx("div",{children:"2nd Half"})]}),l.jsxs("div",{className:"list",style:{marginTop:0},children:[l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:U.map(L=>T(L))}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:B.map(L=>T(L))})]}),W]})},dp=()=>{const p=(ke(h.yearId).shows.final||[]).filter(Q=>Se(Q.songId)&&!Q.dq);p.sort((Q,U)=>{const B=Q.place!==void 0&&Q.place!==null?Q.place:9999,j=U.place!==void 0&&U.place!==null?U.place:9999;return B-j});const f=!!e.battleHidden,g=C?"j3":n,b=[...e.jury].sort((Q,U)=>Q.id.localeCompare(U.id)),k={};e.jury.forEach(Q=>{const U={};p.forEach(B=>{const j=(e.pred[B.id]||{})[Q.id];j&&(U[j]=(U[j]||0)+1)}),k[Q.id]=U});const E={};e.jury.forEach(Q=>{E[Q.id]={sum:0,count:0}});const P=p.map(Q=>{const U=Se(Q.songId),B=e.pred[Q.id]||{},j=Q.place,T=b.map(H=>{const M=B[H.id],X=H.id===g;if(f&&!X)return l.jsx("td",{style:{textAlign:"center"},children:l.jsx("span",{className:"hidden-pred",children:"•••"})},"guess-"+H.id);const le=M??"",je=M&&k[H.id][M]>1,Ae=C||X;return l.jsx("td",{className:"col-tipp",children:l.jsx("input",{type:"number",min:"1",max:p.length,value:le,className:"battle-input"+(je?" dup":""),readOnly:!Ae,disabled:!Ae,onChange:_e=>{const jt=parseInt(_e.target.value);de(fr=>{const xn={...fr,pred:{...fr.pred}};return xn.pred[Q.id]={...xn.pred[Q.id]||{}},jt>0?xn.pred[Q.id][H.id]=jt:delete xn.pred[Q.id][H.id],xn})},style:{background:Ae?"var(--panel2-solid)":"transparent",border:Ae?"1px solid var(--line)":"1px solid transparent",width:45,height:34,fontSize:"1rem"}})},"guess-"+H.id)}),W=b.map(H=>{const M=B[H.id];let X=l.jsx("span",{style:{color:"var(--muted)"},children:"–"});if(M!=null&&j!==void 0&&j!==null){const ae=Math.abs(M-j);E[H.id].sum+=ae,E[H.id].count++,ae===0?X=l.jsx("span",{className:"battle-diff-cell",style:St(Lt(10)),children:"🎯"}):X=l.jsx("span",{className:"battle-diff-cell",style:St(ug(ae)),children:ae})}return l.jsx("td",{className:"col-abw",children:X},"diff-"+H.id)}),L=j??"–",I=U&&U.cc?{"--flag-url":`url('https://flagcdn.com/${U.cc}.svg')`}:{};return l.jsxs("tr",{children:[l.jsxs("td",{style:{...I,position:"relative",overflow:"hidden",padding:0,borderBottom:"1px solid var(--line)"},children:[l.jsx("div",{style:{position:"absolute",left:0,top:"4px",bottom:"4px",width:"200px",backgroundImage:"var(--flag-url)",backgroundSize:"cover",backgroundPosition:"center",maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",opacity:.65,pointerEvents:"none",zIndex:0,borderRadius:"6px"}}),U&&l.jsx("div",{className:"cc-code",style:{position:"absolute",left:38,top:"50%",transform:"translateY(-50%)",zIndex:1,margin:0},children:ee(Ni(U.cc))}),l.jsx("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"flex-end",textAlign:"right",padding:"8px 10px",minHeight:54},children:U?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"sb-title",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.9rem"},children:ee(U.title)}),l.jsx("div",{className:"sb-artist",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.75rem"},children:ee(U.artist)})]}):null})]}),T,W,l.jsx("td",{className:"col-place",style:{fontWeight:700,fontSize:"1.4rem",fontFamily:"var(--number-font)",color:"var(--gold)",textAlign:"center"},children:L})]},Q.id)}),w=[];e.jury.forEach(Q=>{E[Q.id].count>0&&w.push({name:Q.name,sum:E[Q.id].sum,count:E[Q.id].count,id:Q.id})}),w.sort((Q,U)=>Q.sum-U.sum);let z;if(w.length>0){const Q=w[0],U=["🥈","🥉"];z=l.jsxs("div",{style:{marginTop:24},children:[l.jsxs("div",{className:"battle-podium-winner",children:[l.jsx("div",{className:"medal",children:"🥇"}),l.jsx("div",{className:"name",children:ee(Q.name)}),l.jsx("div",{className:"score",children:Q.sum}),l.jsxs("div",{className:"label",children:["🎯 Winner · ",Q.count," Tipps verglichen"]})]}),w.length>1&&l.jsx("div",{className:"battle-runner-ups",children:w.slice(1).map((B,j)=>{const T=j<2?U[j]:null,W=j===0?"2nd Place":j===1?"3rd Place":j+2+"th Place";return l.jsxs("div",{className:"battle-runner-up",children:[T?l.jsx("div",{className:"medal",children:T}):l.jsx("div",{className:"medal",style:{fontFamily:"var(--number-font)",fontSize:"1.5rem",color:"var(--muted)"},children:j+2}),l.jsx("div",{className:"name",children:ee(B.name)}),l.jsx("div",{className:"score",children:B.sum}),l.jsx("div",{className:"label",children:W})]},B.id)})})]})}else z=l.jsx("p",{className:"empty",style:{padding:"30px 0"},children:"Trage die Tipps und tatsächlichen Plätze ein, um das Leaderboard zu sehen."});const A=l.jsx("button",{onClick:Lc,style:{padding:"7px 16px",fontSize:"0.85rem",fontWeight:700,...f?{background:"linear-gradient(135deg,#ff2d95,#a855f7)",borderColor:"transparent",color:"#fff"}:{background:"var(--panel2-solid)",color:"var(--muted)"}},children:f?"👁️ Tipps anzeigen":"🙈 Tipps verbergen"}),$=l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12,marginBottom:20},children:[l.jsxs("div",{children:[l.jsx("h2",{style:{margin:"0 0 4px"},children:"Points Battle"}),l.jsx("p",{className:"hint",style:{margin:0},children:"Trage die Tipps ein — die Abweichung siehst du rechts. 🎯 = Volltreffer."})]}),l.jsx("div",{children:A})]}),ie=l.jsxs("tr",{children:[l.jsx("th",{style:{paddingLeft:15},children:"Song"}),b.map(Q=>l.jsx("th",{className:"c col-tipp",children:ee(Q.name)},"h-g-"+Q.id)),b.map(Q=>l.jsx("th",{className:"c col-abw",children:ee(Q.name)},"h-d-"+Q.id)),l.jsx("th",{className:"c col-place",children:"Platz"})]});return l.jsxs(l.Fragment,{children:[$,p.length?l.jsxs("div",{style:{maxWidth:1250,margin:"0 auto"},children:[l.jsxs("table",{className:"sb-table battle-table",style:{width:"100%",tableLayout:"fixed"},children:[l.jsx("thead",{children:ie}),l.jsx("tbody",{children:P})]}),z]}):l.jsx("p",{className:"empty",children:"Bitte wähle zuerst Songs für das Grand Final aus."})]})},up=()=>{const s=ke(h.yearId);let c=h.sbShow;c!=="all"&&!s.shows[c]&&(c=s.shows.final?"final":Object.keys(s.shows)[0]);let p=[];if(c==="all"){const j=new Set;for(const T in s.shows)(s.shows[T]||[]).forEach(W=>{W.songId&&!j.has(W.songId)&&(j.add(W.songId),p.push(W))})}else p=s.shows[c]||[];const f=p.map(j=>{const T=Se(j.songId);if(!T||j.dq)return null;const W=V(j),L=e.jury.map(H=>W[H.id]).filter(H=>H),I=L.reduce((H,M)=>H+M,0);return{e:j,s:T,r:W,avg:L.length?I/L.length:null,sum:I,place:j.place}}).filter(Boolean),g=[...f].sort((j,T)=>(T.avg!==null?T.avg:-1)-(j.avg!==null?j.avg:-1));let b=1;g.forEach((j,T)=>{T>0&&j.avg!==g[T-1].avg&&b++,j.ratingRank=b}),h.sbSort==="ratings"?f.sort((j,T)=>(T.avg!==null?T.avg:-1)-(j.avg!==null?j.avg:-1)):f.sort((j,T)=>{const W=H=>{if(c!=="all")return H.e.place||9999;let M=null,X=null;if(s.shows.final){const ae=s.shows.final.find(le=>le.songId===H.s.id);ae&&ae.place&&(M=ae.place)}if(s.shows.sf1){const ae=s.shows.sf1.find(le=>le.songId===H.s.id);ae&&ae.place&&(X=ae.place)}if(!X&&s.shows.sf2){const ae=s.shows.sf2.find(le=>le.songId===H.s.id);ae&&ae.place&&(X=ae.place)}return M||(X?X+1e3:9999)},L=W(j),I=W(T);return L!==I?L-I:(T.avg!==null?T.avg:-1)-(j.avg!==null?j.avg:-1)});const k=El(),E={},P={};e.jury.forEach(j=>{E[j.id]=0,P[j.id]={correct:0,totalGuessed:0}}),p.forEach(j=>{if(j.songId){const T=V(j);e.jury.forEach(W=>{T[W.id]&&(E[W.id]+=T[W.id])})}}),(c==="all"?["sf1","sf2"]:[c]).forEach(j=>{(s.shows[j]||[]).forEach(W=>{const L=ne(W),I=W.place!==void 0&&W.place!==null?W.place>10:null;I!==null&&e.jury.forEach(H=>{L[H.id]===!1&&(P[H.id].totalGuessed++,I===!0&&P[H.id].correct++)})})});let z=-1,A=99999;for(const j in E)E[j]>z&&(z=E[j]),E[j]<A&&(A=E[j]);(z===A||z===0)&&(z=-1,A=99999);const $=l.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",justifyContent:"center",marginTop:16},children:e.jury.map(j=>{const T=E[j.id];let W="var(--cyan)";T===z&&(W="var(--green)"),T===A&&(W="#ffb3c1");let L=null;if(c!=="final"){const I=P[j.id],H=I.totalGuessed>0&&I.correct===I.totalGuessed?"var(--gold)":"var(--muted)";L=l.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:700,borderLeft:"1px solid var(--line)",paddingLeft:8,color:H},children:[I.correct," / ",I.totalGuessed," NQs"]})}return l.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:"1px solid rgba(94,58,168,0.4)",padding:"7px 16px",borderRadius:999,fontSize:"0.83rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:8,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[l.jsx("span",{style:{color:"var(--ink)"},children:ee(j.name)}),l.jsxs("span",{style:{color:W},children:[T," pts"]}),L]},j.id)})}),ie=f.map((j,T)=>{const W=j.ratingRank,L=W===1?" sb-top1":W===2?" sb-top2":W===3?" sb-top3":"",I=[],H=[],M=ne(j.e);e.jury.forEach(le=>{const je=j.r[le.id];if(je){const _e=St(Lt(je));I.push(l.jsx("span",{className:"cell",style:{..._e,display:"inline-block",margin:"0 2px",fontSize:"1.05rem",width:34,height:34,lineHeight:"30px",padding:0},children:je},le.id))}else I.push(l.jsx("span",{className:"cell",style:{background:"var(--panel2-solid)",color:"var(--muted-dim)",display:"inline-block",margin:"0 2px",width:34,height:34,lineHeight:"30px",padding:0},children:"–"},le.id));M[le.id]===!1?H.push(l.jsx("span",{className:"cell",style:{background:"rgba(255,77,109,0.2)",color:"#ffb3c1",border:"1px solid rgba(255,77,109,0.4)",display:"inline-block",margin:"0 2px",fontSize:"0.85rem",padding:"2px 6px",width:34,height:34,lineHeight:"30px"},children:"NQ"},le.id)):H.push(l.jsx("span",{className:"cell",style:{background:"transparent",border:"1px dashed rgba(255,255,255,0.1)",color:"transparent",display:"inline-block",margin:"0 2px",fontSize:"0.85rem",padding:"2px 6px",width:34,height:34,lineHeight:"30px"},children:"-"},le.id))});let X="-";if(j.e.place!==void 0&&j.e.place!==null)if(c==="all"){let le=null;if(s.shows.sf1){const _e=s.shows.sf1.find(jt=>jt.songId===j.s.id);_e&&_e.place&&(le=_e.place)}if(!le&&s.shows.sf2){const _e=s.shows.sf2.find(jt=>jt.songId===j.s.id);_e&&_e.place&&(le=_e.place)}let je=null;if(s.shows.final){const _e=s.shows.final.find(jt=>jt.songId===j.s.id);_e&&_e.place&&(je=_e.place)}const Ae=[];le&&Ae.push(l.jsxs("span",{style:{fontSize:"0.65rem",color:"var(--muted)"},children:["SF: ",le,"."]},"sf")),je&&Ae.push(l.jsxs("span",{style:{fontSize:"0.75rem",fontWeight:800,color:"var(--gold)"},children:["GF: ",je,"."]},"gf")),Ae.length?X=l.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2,lineHeight:1.1},children:Ae}):X=j.e.place+"."}else X=j.e.place+".";const ae={"--flag-url":`url('https://flagcdn.com/${j.s.cc}.svg')`,position:"relative",overflow:"hidden"};return l.jsxs("tr",{className:L,children:[l.jsx("td",{className:"sb-rank-cell",style:{textAlign:"center",padding:0},children:W}),l.jsxs("td",{style:{...ae,padding:0},children:[l.jsx("div",{style:{position:"absolute",left:0,top:"4px",bottom:"4px",width:"200px",backgroundImage:"var(--flag-url)",backgroundSize:"cover",backgroundPosition:"center",maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",opacity:.65,pointerEvents:"none",zIndex:0,borderRadius:"6px"}}),l.jsxs("div",{style:{position:"relative",zIndex:1,display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"6px 10px"},children:[l.jsx("div",{className:"cc-code",style:{position:"static",transform:"none",margin:0},children:ee(Ni(j.s.cc))}),l.jsxs("div",{className:"sb-song-info",style:{display:"flex",flexDirection:"column",alignItems:"flex-end",textAlign:"right",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:0},children:[l.jsx("div",{className:"sb-title",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.9rem"},children:ee(j.s.title)}),l.jsx("div",{className:"sb-artist",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.75rem"},children:ee(j.s.artist)})]})]})]}),l.jsx("td",{style:{textAlign:"left",paddingLeft:8,verticalAlign:"middle",whiteSpace:"nowrap",overflow:"hidden"},children:I}),l.jsx("td",{style:{textAlign:"left",paddingLeft:8,verticalAlign:"middle",whiteSpace:"nowrap",overflow:"hidden"},children:H}),l.jsx("td",{className:"sb-score-cell",children:l.jsx("b",{children:j.avg==null?"–":j.sum})}),l.jsx("td",{className:"sb-score-cell",children:l.jsx("b",{children:j.avg==null?"–":j.avg.toFixed(1)})}),l.jsx("td",{style:{textAlign:"center",width:50},children:X})]},j.e.id)}),Q=l.jsx("div",{style:{display:"flex",justifyContent:"flex-start",gap:0,padding:0,marginLeft:-3},children:k.map((j,T)=>l.jsx("span",{style:{display:"inline-block",width:35,margin:"0 2px",textAlign:"center",fontSize:"0.7rem",color:"var(--muted)"},children:j},T))}),U=l.jsx("div",{style:{display:"flex",justifyContent:"flex-start",gap:0,padding:0,marginLeft:-3},children:k.map((j,T)=>l.jsx("span",{style:{display:"inline-block",width:35,margin:"0 2px",textAlign:"center",fontSize:"0.6rem",color:"var(--muted)"},children:j},T))}),B=l.jsxs("div",{className:"tabs edle-slider",style:{border:"none",margin:0,padding:4,borderRadius:999,display:"inline-flex",gap:4},children:[l.jsx("button",{className:h.sbSort==="ratings"?"on":"",style:{border:"none",margin:0},onClick:()=>_(j=>({...j,sbSort:"ratings"})),children:"Ratings"}),l.jsx("button",{className:h.sbSort==="placement"?"on":"",style:{border:"none",margin:0},onClick:()=>_(j=>({...j,sbSort:"placement"})),children:"Placement"})]});return l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,maxWidth:1100,margin:"0 auto 14px"},children:[l.jsx("div",{children:op()}),l.jsx("div",{children:B})]}),$,f.length?l.jsx("div",{style:{maxWidth:1250,margin:"0 auto"},children:l.jsxs("table",{className:"sb-table",style:{width:"100%",tableLayout:"fixed"},children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{style:{textAlign:"center",width:35},children:"#"}),l.jsx("th",{style:{width:260},children:"Song"}),l.jsx("th",{className:"c",style:{width:176},children:Q}),l.jsx("th",{className:"c",style:{width:176},children:U}),l.jsx("th",{className:"c",style:{width:80},children:"Total"}),l.jsx("th",{className:"c",style:{width:80},children:"Ø"}),l.jsx("th",{className:"c",style:{width:80},children:"Place"})]})}),l.jsx("tbody",{children:ie})]})}):l.jsx("p",{className:"empty",children:"Nothing to show yet."})]})},cp=()=>{if(!d)return l.jsxs("div",{style:{paddingTop:18},children:[l.jsx("button",{className:"ghost",onClick:cr,children:"← Back"}),l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh",fontSize:"6rem",filter:"drop-shadow(0 0 24px rgba(255,209,102,0.6))"},children:"🔒"})]});const s=h.compareCc&&et[h.compareCc]?et[h.compareCc]:"",c=[];if(h.compareCc)for(const b of e.years){const k=[];for(const E in b.shows)for(const P of b.shows[E]){const w=Se(P.songId);w&&w.cc===h.compareCc&&k.push({yearObj:b,showKey:E,showName:Ci[E],entry:P,song:w})}if(k.length>0){let E=k.find(P=>P.showKey==="final")||k[0];c.push(E)}}c.sort((b,k)=>k.yearObj.year-b.yearObj.year);const p=c.map(b=>{const k=V(b.entry),E=e.jury.map(z=>k[z.id]).filter(z=>z),P=E.reduce((z,A)=>z+A,0),w=E.length?P/E.length:null;return l.jsxs("tr",{style:{borderBottom:"1px solid rgba(94,58,168,0.2)"},children:[l.jsx("td",{style:{padding:"16px 12px",verticalAlign:"middle"},children:l.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[l.jsx("b",{style:{fontFamily:"var(--display)",fontSize:"1.1rem",color:"var(--ink)"},children:b.yearObj.year}),l.jsx("small",{style:{color:"var(--muted)",fontSize:"0.75rem",fontWeight:600},children:b.showName})]})}),l.jsx("td",{style:{padding:"16px 12px",verticalAlign:"middle"},children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[l.jsx(Kt,{cc:b.song.cc}),l.jsx("b",{style:{fontFamily:"var(--display)",fontSize:"0.95rem",color:"var(--ink)"},children:ee(b.song.title)})]})}),e.jury.map(z=>{const A=k[z.id];return l.jsx("td",{style:{padding:"16px 12px",textAlign:"center",verticalAlign:"middle"},children:A?l.jsx("span",{className:"cell",style:{...St(Lt(A)),display:"inline-block",margin:0},children:A}):l.jsx("span",{style:{color:"var(--muted-dim)"},children:"–"})},z.id)}),l.jsx("td",{style:{padding:"16px 12px",textAlign:"center",verticalAlign:"middle"},children:l.jsx("b",{style:{fontFamily:"var(--display)",fontSize:"1.1rem",color:"var(--cyan)"},children:w==null?"–":P})}),l.jsx("td",{style:{padding:"16px 12px",textAlign:"center",verticalAlign:"middle"},children:w==null?"–":l.jsx("span",{className:"cell",style:{...St(Lt(w)),display:"inline-block",margin:0,fontSize:"0.95rem"},children:w.toFixed(1)})})]},b.yearObj.id+"-"+b.showKey)}),f=e.jury.map(b=>l.jsx("th",{style:{textAlign:"center",padding:"14px 12px"},children:ee(b.name)},b.id)),g=h.compareCc?p.length?l.jsx("div",{className:"tw",style:{marginTop:24,padding:"4px 12px",background:"linear-gradient(145deg, rgba(25,14,52,0.95) 0%, rgba(10,5,22,0.98) 100%)",border:"1px solid rgba(94,58,168,0.3)",boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},children:l.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[l.jsx("thead",{children:l.jsxs("tr",{style:{borderBottom:"1px solid rgba(94,58,168,0.4)"},children:[l.jsx("th",{style:{textAlign:"left",padding:"14px 12px"},children:"Year"}),l.jsx("th",{style:{textAlign:"left",padding:"14px 12px"},children:"Song"}),f,l.jsx("th",{style:{textAlign:"center",padding:"14px 12px"},children:"Total"}),l.jsx("th",{style:{textAlign:"center",padding:"14px 12px"},children:"Ø"})]})}),l.jsx("tbody",{children:p})]})}):l.jsx("div",{style:{background:"var(--panel)",border:"1px dashed rgba(148,94,255,0.3)",borderRadius:22,padding:60,textAlign:"center",marginTop:24},children:l.jsx("p",{className:"empty",style:{margin:0,fontSize:"1rem"},children:"Keine Einträge für dieses Land gefunden."})}):l.jsx("div",{style:{background:"var(--panel)",border:"1px dashed rgba(148,94,255,0.3)",borderRadius:22,padding:60,textAlign:"center",marginTop:24},children:l.jsx("p",{className:"empty",style:{margin:0,fontSize:"1rem"},children:"Wähle oben ein Land aus, um den historischen Vergleich zu sehen."})});return l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{paddingTop:18},children:l.jsxs("button",{onClick:cr,style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px 9px 14px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",fontWeight:700,fontSize:"0.85rem",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:b=>{b.currentTarget.style.transform="translateX(-2px)",b.currentTarget.style.borderColor="rgba(168,85,247,0.7)",b.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:b=>{b.currentTarget.style.transform="translateX(0)",b.currentTarget.style.borderColor="rgba(148,94,255,0.35)",b.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[l.jsx("span",{style:{fontSize:"1rem",lineHeight:1},children:"←"})," Back"]})}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20,margin:"24px 0 8px"},children:[l.jsx("h2",{style:{margin:0,fontSize:"2rem"},children:"Country Comparison"}),l.jsx("div",{style:{width:300,background:"var(--panel2)",borderRadius:16,border:"1px solid var(--line)",padding:4},children:l.jsx(Tl,{value:s,onSelect:(b,k)=>_(E=>({...E,compareCc:b||null}))})})]}),l.jsx("p",{className:"hint",style:{marginBottom:24},children:"Vergleiche die Punkte und Platzierungen eines Landes über alle Jahre hinweg."}),g]})},pp=()=>{if(!d)return l.jsxs("div",{style:{paddingTop:18},children:[l.jsx("button",{className:"ghost",onClick:cr,children:"← Back"}),l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh",fontSize:"6rem",filter:"drop-shadow(0 0 24px rgba(255,209,102,0.6))"},children:"🔒"})]});const s=[];e.songs.forEach(f=>{f.year&&s.indexOf(f.year)===-1&&s.push(f.year)}),s.sort((f,g)=>g-f);const c=(h.q||"").toLowerCase(),p=e.songs.filter(f=>!((et[f.cc]+" "+f.artist+" "+f.title).toLowerCase().indexOf(c)===-1||h.libYear&&String(f.year)!==String(h.libYear)));return p.sort((f,g)=>et[f.cc].localeCompare(et[g.cc])),l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{paddingTop:18},children:l.jsxs("button",{onClick:cr,style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px 9px 14px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",fontWeight:700,fontSize:"0.85rem",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:f=>{f.currentTarget.style.transform="translateX(-2px)",f.currentTarget.style.borderColor="rgba(168,85,247,0.7)",f.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:f=>{f.currentTarget.style.transform="translateX(0)",f.currentTarget.style.borderColor="rgba(148,94,255,0.35)",f.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[l.jsx("span",{style:{fontSize:"1rem",lineHeight:1},children:"←"})," Back"]})}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20,margin:"24px 0 8px"},children:[l.jsx("h2",{style:{margin:0,fontSize:"2rem"},children:"Song Library"}),l.jsx("button",{className:"primary",onClick:()=>te("song",{id:null,assign:null}),style:{padding:"10px 24px",fontSize:"0.95rem"},children:"＋ New Song"})]}),l.jsx("p",{className:"hint",style:{marginBottom:24},children:"Durchsuche alle Songs, die jemals für das Scoreboard eingetragen wurden."}),l.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",marginBottom:24,background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",padding:16,borderRadius:18,border:"1px solid rgba(94,58,168,0.3)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[l.jsx("input",{id:"lib_search_input",placeholder:"Suche nach Titel, Artist oder Land...",value:h.q||"",onChange:f=>_(g=>({...g,q:f.target.value})),style:{flex:1,minWidth:220,background:"var(--panel2-solid)",border:"1px solid var(--line)",padding:"12px 18px",borderRadius:12}}),l.jsxs("select",{id:"lib_year_select",style:{width:160,background:"var(--panel2-solid)",border:"1px solid var(--line)",padding:"12px 18px",borderRadius:12,fontWeight:600},value:h.libYear||"",onChange:f=>_(g=>({...g,libYear:f.target.value})),children:[l.jsx("option",{value:"",children:"All Years"}),s.map(f=>l.jsx("option",{value:f,children:f},f))]})]}),p.length?l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:16},children:p.map(f=>l.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:"1px solid rgba(94,58,168,0.3)",borderRadius:16,padding:16,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)",display:"flex",flexDirection:"column",gap:12,transition:"transform 0.2s ease, border-color 0.2s ease"},onMouseEnter:g=>{g.currentTarget.style.transform="translateY(-2px)",g.currentTarget.style.borderColor="rgba(168,85,247,0.6)"},onMouseLeave:g=>{g.currentTarget.style.transform="translateY(0)",g.currentTarget.style.borderColor="rgba(94,58,168,0.3)"},children:[l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[l.jsx(Kt,{cc:f.cc}),l.jsxs("span",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.05em",textTransform:"uppercase"},children:[ee(et[f.cc])," ",f.year&&`· ${f.year}`]})]})}),l.jsxs("div",{children:[l.jsx("div",{style:{fontFamily:"var(--display)",fontSize:"1.15rem",fontWeight:800,color:"var(--ink)",lineHeight:1.2,marginBottom:4},children:ee(f.title)}),l.jsx("div",{style:{fontSize:"0.9rem",color:"var(--muted)",fontWeight:500},children:ee(f.artist)})]}),l.jsxs("div",{style:{display:"flex",gap:8,marginTop:"auto",paddingTop:8},children:[l.jsx("button",{className:"ghost sm",style:{flex:1},onClick:()=>te("song",{id:f.id,assign:null}),children:"Edit"}),l.jsx("button",{className:"ghost sm danger",style:{flex:1},onClick:()=>Bc(f.id),children:"Delete"})]})]},f.id))}):l.jsx("p",{className:"empty",style:{padding:"40px 0",fontSize:"1rem"},children:"Keine Songs gefunden, die zu deiner Suche passen."})]})},Tl=({value:s,onSelect:c})=>{const[p,f]=D.useState(s||""),[g,b]=D.useState(!1),[k,E]=D.useState(""),P=D.useRef(null),w=D.useRef(null);D.useEffect(()=>{f(s||"")},[s]),D.useEffect(()=>{const A=$=>{P.current&&!P.current.contains($.target)&&b(!1)};return document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[]);const z=Di.filter(A=>A[1].toLowerCase().indexOf((p||"").toLowerCase())!==-1);return l.jsxs("div",{className:"search-dropdown-container",ref:P,children:[l.jsx("input",{ref:w,placeholder:"Land suchen...",value:p,autoComplete:"off",onChange:A=>{f(A.target.value),E(""),b(!0)},onFocus:()=>b(!0),onClick:()=>b(!0),style:{width:"100%"}}),l.jsx("div",{className:"search-dropdown-results"+(g?" active":""),children:z.length?z.map(A=>l.jsxs("div",{className:"search-dropdown-item",onMouseDown:$=>{$.preventDefault(),f(A[1]),E(A[0]),b(!1),c&&c(A[0],A[1])},children:[l.jsx(Kt,{cc:A[0]})," ",l.jsx("span",{children:ee(A[1])})]},A[0])):l.jsx("div",{className:"search-dropdown-item",style:{color:"var(--muted)"},children:"Kein Land gefunden"})})]})},fp=()=>{if(!O.open)return null;switch(O.mode){case"alert":return l.jsxs(l.Fragment,{children:[l.jsx("h3",{children:ee(O.payload.title)}),l.jsx("p",{className:"hint",children:ee(O.payload.text)}),l.jsx("div",{className:"actions",children:l.jsx("button",{className:"primary",onClick:re,children:"OK"})})]});case"confirm":{const s=O.payload.onYes;return l.jsxs(l.Fragment,{children:[l.jsx("h3",{children:ee(O.payload.title)}),l.jsx("p",{className:"hint",children:ee(O.payload.text)}),l.jsxs("div",{className:"actions",children:[l.jsx("button",{className:"ghost",onClick:re,children:"Cancel"}),l.jsx("button",{className:"primary",onClick:()=>{re(),s&&setTimeout(s,30)},children:"Confirm"})]})]})}case"newYear":return l.jsx(gp,{onSave:Gc,onClose:re});case"editCity":{const s=ke(h.yearId);return s?l.jsx(mp,{year:s,onSave:qc,onClose:re}):null}case"editDates":{const s=ke(h.yearId);return s?l.jsx(hp,{year:s,onSave:Jc,onClose:re}):null}case"editNo":{const s=mn(O.payload.eId);return s?l.jsx(xp,{entry:s,songById:Se,onSave:Yc,onClose:re}):null}case"picker":return l.jsx(vp,{entryId:O.payload.entryId,S:e,CN:et,songById:Se,onPick:s=>{const c=O.payload.entryId;de(p=>({...p,years:p.years.map(f=>{const g={};for(const b in f.shows)g[b]=f.shows[b].map(k=>k.id===c?{...k,songId:s}:k);return{...f,shows:g}})})),re(),setTimeout(()=>te("rating",{eId:c,jurId:n}),50)},onNewSong:()=>te("song",{id:null,assign:O.payload.entryId}),onEditSong:s=>te("song",{id:s,assign:null}),onDeleteSong:s=>{de(c=>({...c,songs:c.songs.filter(p=>p.id!==s)}))},onClose:re});case"song":{const s=O.payload.id,c=O.payload.assign,p=s?Se(s):null,f=h.yearId?ke(h.yearId):null,g=p&&p.year?p.year:f&&f.year?f.year:new Date().getFullYear();return l.jsx(yp,{song:p,defaultYear:g,editId:s,assign:c,onSave:Kc,onClose:re,S:e,setS:t,save:ft})}case"rating":{const s=mn(O.payload.eId);if(!s)return null;let c=null;for(const p of e.years){for(const f in p.shows)if(p.shows[f].find(g=>g.id===s.id)){c=p.id;break}if(c)break}return l.jsx(bp,{entry:s,jurId:O.payload.jurId,S:e,me:n,jname:Pt,songById:Se,getRatings:V,currentYearId:c,onSave:(p,f,g)=>{const b=mn(p),k=b&&b.songId?b.songId:p;de(E=>{const P={...E,ratings:{...E.ratings}};if(g===12&&c){const w=E.years.find(z=>z.id===c);if(w)for(const z in w.shows)for(const A of w.shows[z])A.songId&&A.songId!==k&&P.ratings[A.songId]&&P.ratings[A.songId][f]===12&&(P.ratings[A.songId]={...P.ratings[A.songId]},delete P.ratings[A.songId][f])}return P.ratings[k]={...P.ratings[k]||{}},g===null?delete P.ratings[k][f]:P.ratings[k][f]=g,P}),re()},onClose:re})}case"settings":return l.jsx(wp,{S:e,currentUser:d,onSaveNames:Xc,onImport:ep,onExport:tp,onOpenJson:()=>te("json"),onClose:re,showToast:Z,autoHardReset:Y,setAutoHardReset:q});case"json":return l.jsx(kp,{S:e,onSave:Zc,onBack:()=>te("settings"),onClose:re});default:return null}},gp=({onSave:s,onClose:c})=>{const[p,f]=D.useState(new Date().getFullYear()),[g,b]=D.useState(""),[k,E]=D.useState("");return l.jsxs(l.Fragment,{children:[l.jsx("h3",{children:"Add New Contest"}),l.jsxs("label",{children:["Year",l.jsx("input",{type:"number",value:p,onChange:P=>f(P.target.value)})]}),l.jsxs("label",{children:["Suffix (optional)",l.jsx("input",{placeholder:"e.g. Junior or Asia",value:g,onChange:P=>b(P.target.value)})]}),l.jsxs("label",{children:["Host City",l.jsx("input",{value:k,onChange:P=>E(P.target.value)})]}),l.jsxs("div",{className:"actions",children:[l.jsx("button",{className:"ghost",onClick:c,children:"Cancel"}),l.jsx("button",{className:"primary",onClick:()=>s({year:p,suffix:g,city:k}),children:"Create"})]})]})},mp=({year:s,onSave:c,onClose:p})=>{const[f,g]=D.useState(s.city||""),[b,k]=D.useState(s.hostCc||""),[E,P]=D.useState(s.hostCc&&et[s.hostCc]||"");return l.jsxs(l.Fragment,{children:[l.jsx("h3",{children:"Host City & Country"}),l.jsxs("label",{style:{position:"relative",zIndex:20},children:["Country (Flagge)",l.jsx(Tl,{value:E,onSelect:(w,z)=>{k(w),P(z)}})]}),l.jsxs("label",{style:{position:"relative",zIndex:1},children:["City",l.jsx("input",{value:f,onChange:w=>g(w.target.value)})]}),l.jsxs("div",{className:"actions",children:[l.jsx("button",{className:"ghost",onClick:p,children:"Cancel"}),l.jsx("button",{className:"primary",onClick:()=>c(f,b),children:"Save"})]})]})},hp=({year:s,onSave:c,onClose:p})=>{const[f,g]=D.useState(s.showDates&&s.showDates.sf1||""),[b,k]=D.useState(s.showDates&&s.showDates.sf2||""),[E,P]=D.useState(s.showDates&&s.showDates.final||"");return l.jsxs(l.Fragment,{children:[l.jsx("h3",{children:"Show-Daten"}),l.jsx("p",{className:"hint",style:{marginBottom:16},children:'Trage ein, wann welche Show stattfindet. Das „nächste" Jahr wird im Menü hervorgehoben, solange das Final noch nicht vorbei ist.'}),s.shows.sf1&&l.jsxs("label",{children:["Semi-final 1",l.jsx("input",{type:"date",value:f,onChange:w=>g(w.target.value)})]}),s.shows.sf2&&l.jsxs("label",{children:["Semi-final 2",l.jsx("input",{type:"date",value:b,onChange:w=>k(w.target.value)})]}),s.shows.final&&l.jsxs("label",{children:["Grand Final",l.jsx("input",{type:"date",value:E,onChange:w=>P(w.target.value)})]}),l.jsxs("div",{className:"actions",children:[l.jsx("button",{className:"ghost",onClick:p,children:"Cancel"}),l.jsx("button",{className:"primary",onClick:()=>c({sf1:f,sf2:b,final:E}),children:"Save"})]})]})},xp=({entry:s,songById:c,onSave:p,onClose:f})=>{const g=c(s.songId),b=s.customNo!==void 0&&s.customNo!==null&&s.customNo!==""?s.customNo:Ar(s.id),k=s.autoFinal!==void 0?s.autoFinal:g&&["de","fr","it","es","gb","kr"].indexOf(g.cc)!==-1,[E,P]=D.useState(b),[w,z]=D.useState(k);return l.jsxs(l.Fragment,{children:[l.jsx("h3",{children:"Running Order & Status"}),l.jsxs("label",{children:["Custom Position / Number (z.B. 6 oder 6.5)",l.jsx("input",{value:E,onChange:A=>P(A.target.value)})]}),l.jsxs("label",{style:{flexDirection:"row",alignItems:"center",gap:12,marginTop:16,cursor:"pointer",background:"var(--panel2-solid)",padding:12,borderRadius:12,border:"1px solid var(--line)"},children:[l.jsx("input",{type:"checkbox",checked:w,onChange:A=>z(A.target.checked)}),l.jsx("span",{style:{color:"var(--ink)",fontWeight:600},children:"Auto Qualifier (AQ)"})]}),l.jsxs("div",{className:"actions",children:[l.jsx("button",{className:"ghost",onClick:f,children:"Cancel"}),l.jsx("button",{className:"primary",onClick:()=>p(s.id,E,w),children:"Save"})]})]})},vp=({entryId:s,S:c,CN:p,songById:f,onPick:g,onNewSong:b,onEditSong:k,onDeleteSong:E,onClose:P})=>{const[w,z]=D.useState(""),A=c.songs.filter($=>(p[$.cc]+" "+$.artist+" "+$.title).toLowerCase().indexOf(w.toLowerCase())!==-1);return l.jsxs(l.Fragment,{children:[l.jsx("h3",{children:"Song Library"}),l.jsx("input",{placeholder:"Search...",value:w,onChange:$=>z($.target.value),style:{width:"100%",marginBottom:12}}),l.jsx("div",{id:"plist",children:A.length?A.map($=>l.jsxs("div",{className:"prow",children:[l.jsxs("button",{className:"pbtn",onClick:()=>g($.id),children:[l.jsx(Kt,{cc:$.cc}),l.jsxs("span",{children:[l.jsx("b",{children:ee($.title)})," – ",ee($.artist)]})]}),l.jsx("button",{className:"ghost danger",onClick:()=>E($.id),children:"Delete"})]},$.id)):l.jsx("p",{className:"empty",children:"No songs found."})}),l.jsxs("div",{className:"actions",children:[l.jsx("button",{className:"ghost",onClick:P,children:"Close"}),l.jsx("button",{className:"primary",onClick:b,children:"＋ New Song"})]})]})},yp=({song:s,defaultYear:c,editId:p,assign:f,onSave:g,onClose:b,S:k,setS:E,save:P})=>{const[w,z]=D.useState(s?s.cc:""),[A,$]=D.useState(s&&et[s.cc]||""),[ie,Q]=D.useState(s?s.artist:""),[U,B]=D.useState(s?s.title:""),[j,T]=D.useState(s&&s.year?s.year:c),[W,L]=D.useState(()=>!p||!k.ratings[p]?{}:{...k.ratings[p]}),I=(M,X)=>{const ae=parseInt(X);L(le=>{const je={...le};return!ae||ae<1||ae>10?delete je[M]:je[M]=ae,je})},H=()=>{g({artist:ie,title:U,cc:w,year:parseInt(j)||new Date().getFullYear(),editId:p,assign:f}),p&&E(M=>{const X={...M,ratings:{...M.ratings}};return X.ratings[p]={...W},Object.keys(X.ratings[p]).length===0&&delete X.ratings[p],P(X),X})};return l.jsxs(l.Fragment,{children:[l.jsx("h3",{children:s?"Edit Song":"New Song"}),l.jsxs("label",{style:{position:"relative",zIndex:20},children:["Country",l.jsx(Tl,{value:A,onSelect:(M,X)=>{z(M),$(X)}})]}),l.jsxs("label",{style:{position:"relative",zIndex:1},children:["Artist",l.jsx("input",{value:ie,onChange:M=>Q(M.target.value)})]}),l.jsxs("label",{style:{position:"relative",zIndex:1},children:["Song Title",l.jsx("input",{value:U,onChange:M=>B(M.target.value)})]}),l.jsxs("label",{style:{position:"relative",zIndex:1},children:["Year",l.jsx("input",{type:"number",value:j,onChange:M=>T(M.target.value)})]}),p&&l.jsxs(l.Fragment,{children:[l.jsx("hr",{style:{border:0,borderTop:"1px solid var(--line)",margin:"20px 0 16px"}}),l.jsxs("div",{style:{marginBottom:14},children:[l.jsx("div",{style:{fontFamily:"var(--display)",fontWeight:700,fontSize:"0.9rem",color:"var(--ink)",marginBottom:8},children:"Punkte (global für diesen Song)"}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:10},children:k.jury.map(M=>{const X=W[M.id];return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx("label",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.05em",textTransform:"uppercase",margin:0},children:ee(M.name)}),l.jsx("input",{type:"number",min:"1",max:"10",placeholder:"–",value:X!==void 0?X:"",onChange:ae=>I(M.id,ae.target.value),style:{width:"100%",textAlign:"center",fontFamily:"var(--number-font)",fontSize:"1.4rem",color:"var(--gold)",background:"linear-gradient(180deg, #2b1e0a 0%, #1a1106 50%, #0a0702 100%)",border:"1.5px solid rgba(255, 209, 102, 0.55)",borderRadius:12,padding:"8px 0",boxShadow:"inset 0 1px 0 rgba(255, 230, 150, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.7), 0 0 14px rgba(255, 209, 102, 0.08)"}})]},M.id)})})]})]}),l.jsxs("div",{className:"actions",children:[l.jsx("button",{className:"ghost",onClick:b,children:"Cancel"}),l.jsx("button",{className:"primary",onClick:H,children:"Save"})]})]})},bp=({entry:s,jurId:c,S:p,me:f,jname:g,songById:b,getRatings:k,onSave:E,onClose:P,currentYearId:w})=>{const z=b(s.songId),A=k(s),$=C?c||"j3":f,ie=A[$],Q=g($),[U,B]=D.useState(ie??null);if(D.useEffect(()=>{if(!C)return;const W=L=>{if(L.target.tagName==="INPUT"||L.target.tagName==="TEXTAREA")return;let I=L.key;I==="0"&&(I="10");const H=parseInt(I);H>=1&&H<=10&&(B(H),setTimeout(()=>{E(s.id,$,H)},150))};return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)},[f,s.id,$,E]),!z)return null;const j=U,T=(W,L)=>{const I=[];for(let H=W;H<=L;H++){const M=j===H;I.push(l.jsx("button",{className:"rate-modal-btn",style:{...St(Lt(H)),width:64,height:68,fontFamily:"var(--number-font)",fontSize:"2.2rem",borderRadius:16,border:"4px solid "+(M?"#fff":"transparent"),cursor:"pointer",display:"grid",placeItems:"center",padding:0,transition:"transform 0.15s ease-out, box-shadow 0.15s ease-out",...M?{boxShadow:"0 0 28px rgba(255,255,255,0.8), 0 0 0 2px #fff inset",transform:"scale(1.08)"}:{}},onClick:()=>B(j===H?null:H),children:H},H))}return I};return l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{textAlign:"center",marginBottom:20},children:[l.jsx("div",{style:{marginBottom:12,transform:"scale(1.8)",display:"inline-block",filter:"drop-shadow(0 4px 12px rgba(0,0,0,0.5))"},children:l.jsx(Kt,{cc:z.cc})}),l.jsx("h2",{style:{margin:"10px 0 4px",fontSize:"1.7rem"},children:ee(z.title)}),l.jsxs("p",{style:{color:"var(--muted)",margin:0,fontSize:"1rem"},children:[ee(z.artist)," · ",ee(et[z.cc]||z.cc.toUpperCase())]}),l.jsx("p",{style:{color:"var(--gold)",margin:"8px 0 0",fontSize:"0.85rem",fontWeight:800,letterSpacing:"0.08em",textTransform:"uppercase"},children:ee(Q)})]}),l.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(255,209,102,0.06) 0%, var(--panel2-solid) 100%)",border:"1px solid var(--line)",borderRadius:22,padding:"24px 20px",textAlign:"center",marginBottom:20,boxShadow:"inset 0 2px 8px rgba(0,0,0,0.3)"},children:[l.jsx("div",{style:{fontFamily:"var(--number-font)",fontSize:"2.8rem",color:"var(--gold)",marginBottom:22,letterSpacing:"0.03em",textShadow:"0 0 20px rgba(255,209,102,0.4)"},children:j!=null?l.jsxs(l.Fragment,{children:[j," ",l.jsx("span",{style:{fontSize:"1.2rem",color:"var(--muted)"},children:"/ 12 Pts"})]}):l.jsx("span",{style:{color:"var(--muted)",fontSize:"1.4rem"},children:"– Pts"})}),l.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",marginBottom:14,flexWrap:"wrap"},children:T(1,5)}),l.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:T(6,10)}),l.jsx("div",{style:{marginTop:16,display:"flex",justifyContent:"center"},children:l.jsxs("button",{style:{...St(Lt(12)),width:140,height:68,fontFamily:"var(--number-font)",fontSize:"2.2rem",borderRadius:16,border:"4px solid "+(j===12?"#fff":"transparent"),cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"transform 0.15s ease-out, box-shadow 0.15s ease-out",...j===12?{boxShadow:"0 0 28px rgba(255,255,255,0.8), 0 0 0 2px #fff inset",transform:"scale(1.08)"}:{}},onClick:()=>B(j===12?null:12),children:["12 ",l.jsx("span",{style:{fontSize:"0.8rem",fontFamily:"var(--display)",textTransform:"uppercase",letterSpacing:"0.1em",marginTop:6},children:"FAV"})]})})]}),l.jsx("div",{className:"actions",style:{marginTop:18,justifyContent:"flex-end"},children:l.jsx("button",{className:"primary",onClick:()=>E(s.id,$,U),style:{padding:"12px 32px",fontSize:"1rem"},children:"Fertig"})})]})},wp=({S:s,currentUser:c,onSaveNames:p,onImport:f,onExport:g,onOpenJson:b,onClose:k,showToast:E,autoHardReset:P,setAutoHardReset:w})=>{const z=!!c,[A,$]=D.useState(()=>{const U={};return s.jury.forEach(B=>U[B.id]=B.name),U}),ie=U=>{const B=U.target.files[0];if(!B)return;const j=new FileReader;j.onload=()=>{try{const T=JSON.parse(j.result);f(T)}catch{E("Invalid file","error")}},j.readAsText(B)},Q=()=>{const U=s.jury.map(B=>({dataset:{jn:B.id},value:A[B.id]||""}));p(U)};return l.jsxs(l.Fragment,{children:[l.jsx("h3",{children:"Settings"}),!z&&l.jsx("p",{className:"hint",style:{color:"var(--red)",fontWeight:600,background:"rgba(255,77,109,0.1)",padding:"10px 14px",borderRadius:10,border:"1px solid rgba(255,77,109,0.3)",marginBottom:16},children:"⚠️ Logge dich mit Google ein, um Export/Import/JSON zu nutzen."}),s.jury.map(U=>l.jsxs("label",{children:[U.id.toUpperCase()," Name",l.jsx("input",{value:A[U.id]||"",onChange:B=>$(j=>({...j,[U.id]:B.target.value}))})]},U.id)),l.jsx("hr",{style:{border:0,borderTop:"1px solid var(--line)",margin:"20px 0"}}),l.jsxs("label",{style:{flexDirection:"row",alignItems:"center",gap:12,cursor:"pointer",background:"rgba(255,255,255,0.05)",padding:"12px",borderRadius:12,border:"1px solid var(--line)"},children:[l.jsx("input",{type:"checkbox",checked:P,onChange:U=>{const B=U.target.checked;w(B),localStorage.setItem("esc-auto-reset",B?"true":"false")}}),l.jsx("span",{style:{color:"var(--ink)",fontWeight:600},children:"Auto-Hard-Reset beim Laden (Cache leeren)"})]}),l.jsxs("div",{className:"actions",style:{marginTop:18},children:[l.jsx("button",{className:"ghost",onClick:g,disabled:!z,children:"Export Data"}),l.jsxs("label",{style:{background:"var(--panel2-solid)",border:"1px solid var(--line)",borderRadius:999,padding:"9px 20px",cursor:z?"pointer":"not-allowed",textAlign:"center",fontWeight:600,opacity:z?1:.35},children:["Import Data",l.jsx("input",{type:"file",style:{display:"none"},disabled:!z,onChange:ie})]}),l.jsx("button",{className:"ghost",onClick:b,disabled:!z,children:"JSON"})]}),l.jsxs("div",{className:"actions",children:[l.jsx("button",{className:"ghost",onClick:k,children:"Close"}),l.jsx("button",{className:"primary",onClick:Q,children:"Save"})]})]})},kp=({S:s,onSave:c,onBack:p,onClose:f})=>{const[g,b]=D.useState(JSON.stringify(s,null,2));return l.jsxs(l.Fragment,{children:[l.jsx("h3",{children:"JSON Editor"}),l.jsx("p",{className:"hint",children:"Bearbeite den gesamten JSON-State direkt hier:"}),l.jsx("textarea",{value:g,onChange:k=>b(k.target.value),style:{width:"100%",height:320,fontFamily:"monospace",background:"var(--panel2-solid)",color:"var(--ink)",border:"1px solid var(--line)",borderRadius:12,padding:14,resize:"vertical",fontSize:"0.85rem",lineHeight:1.5}}),l.jsxs("div",{className:"actions",children:[l.jsx("button",{className:"ghost",onClick:p,children:"Zurück"}),l.jsx("button",{className:"primary",onClick:()=>c(g),children:"Speichern & Anwenden"})]})]})};let pr;h.view==="compare"?pr=cp():h.view==="library"?pr=pp():h.yearId?pr=lp():pr=Xa();const Sp=h.view==="home"&&!h.yearId;return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"wrap",children:l.jsxs("div",{id:"app",ref:oe,children:[np(),pr]})}),l.jsx("div",{id:"fab_container",children:Sp&&l.jsx("button",{className:"fab",onClick:()=>te("newYear"),title:"Add new contest",children:"＋"})}),l.jsx("div",{id:"toast-container",children:v.map(s=>l.jsx("div",{className:"toast "+(s.type||""),children:(s.type==="success"?"✓ ":s.type==="error"?"✗ ":"")+s.msg},s.id))}),l.jsx("dialog",{id:"dlg",ref:Qe,tabIndex:-1,className:O.mode==="song"||O.mode==="picker"||O.mode==="json"?"wide":"",children:O.open&&fp()})]})}const ao=e=>new Promise((t,n)=>{const r=document.createElement("script");r.src=e,r.onload=t,r.onerror=n,document.head.appendChild(r)});(async()=>{try{window.firebase||(await ao("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"),await ao("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"),await ao("https://www.gstatic.com/firebasejs/10.12.0/firebase-database-compat.js"))}catch(e){console.error("Firebase SDKs konnten nicht geladen werden:",e)}so.createRoot(document.getElementById("root")).render(l.jsx($p.StrictMode,{children:l.jsx(cg,{})}))})();
