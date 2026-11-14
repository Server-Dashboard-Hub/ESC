(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();function W0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var md={exports:{}},ha={},hd={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ii=Symbol.for("react.element"),H0=Symbol.for("react.portal"),U0=Symbol.for("react.fragment"),$0=Symbol.for("react.strict_mode"),V0=Symbol.for("react.profiler"),Y0=Symbol.for("react.provider"),K0=Symbol.for("react.context"),Q0=Symbol.for("react.forward_ref"),G0=Symbol.for("react.suspense"),q0=Symbol.for("react.memo"),J0=Symbol.for("react.lazy"),is=Symbol.iterator;function X0(e){return e===null||typeof e!="object"?null:(e=is&&e[is]||e["@@iterator"],typeof e=="function"?e:null)}var xd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vd=Object.assign,yd={};function fr(e,t,n){this.props=e,this.context=t,this.refs=yd,this.updater=n||xd}fr.prototype.isReactComponent={};fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bd(){}bd.prototype=fr.prototype;function rl(e,t,n){this.props=e,this.context=t,this.refs=yd,this.updater=n||xd}var il=rl.prototype=new bd;il.constructor=rl;vd(il,fr.prototype);il.isPureReactComponent=!0;var as=Array.isArray,wd=Object.prototype.hasOwnProperty,al={current:null},kd={key:!0,ref:!0,__self:!0,__source:!0};function Sd(e,t,n){var r,a={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)wd.call(t,r)&&!kd.hasOwnProperty(r)&&(a[r]=t[r]);var f=arguments.length-2;if(f===1)a.children=n;else if(1<f){for(var u=Array(f),b=0;b<f;b++)u[b]=arguments[b+2];a.children=u}if(e&&e.defaultProps)for(r in f=e.defaultProps,f)a[r]===void 0&&(a[r]=f[r]);return{$$typeof:ii,type:e,key:o,ref:l,props:a,_owner:al.current}}function Z0(e,t){return{$$typeof:ii,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ol(e){return typeof e=="object"&&e!==null&&e.$$typeof===ii}function ep(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var os=/\/+/g;function Ra(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ep(""+e.key):t.toString(36)}function Li(e,t,n,r,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ii:case H0:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+Ra(l,0):r,as(a)?(n="",e!=null&&(n=e.replace(os,"$&/")+"/"),Li(a,t,n,"",function(b){return b})):a!=null&&(ol(a)&&(a=Z0(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(os,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=r===""?".":r+":",as(e))for(var f=0;f<e.length;f++){o=e[f];var u=r+Ra(o,f);l+=Li(o,t,n,u,a)}else if(u=X0(e),typeof u=="function")for(e=u.call(e),f=0;!(o=e.next()).done;)o=o.value,u=r+Ra(o,f++),l+=Li(o,t,n,u,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function mi(e,t,n){if(e==null)return e;var r=[],a=0;return Li(e,r,"","",function(o){return t.call(n,o,a++)}),r}function tp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qe={current:null},Ri={transition:null},np={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:Ri,ReactCurrentOwner:al};function jd(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:mi,forEach:function(e,t,n){mi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mi(e,function(){t++}),t},toArray:function(e){return mi(e,function(t){return t})||[]},only:function(e){if(!ol(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};fe.Component=fr;fe.Fragment=U0;fe.Profiler=V0;fe.PureComponent=rl;fe.StrictMode=$0;fe.Suspense=G0;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=np;fe.act=jd;fe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vd({},e.props),a=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=al.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(u in t)wd.call(t,u)&&!kd.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&f!==void 0?f[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){f=Array(u);for(var b=0;b<u;b++)f[b]=arguments[b+2];r.children=f}return{$$typeof:ii,type:e.type,key:a,ref:o,props:r,_owner:l}};fe.createContext=function(e){return e={$$typeof:K0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Y0,_context:e},e.Consumer=e};fe.createElement=Sd;fe.createFactory=function(e){var t=Sd.bind(null,e);return t.type=e,t};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:Q0,render:e}};fe.isValidElement=ol;fe.lazy=function(e){return{$$typeof:J0,_payload:{_status:-1,_result:e},_init:tp}};fe.memo=function(e,t){return{$$typeof:q0,type:e,compare:t===void 0?null:t}};fe.startTransition=function(e){var t=Ri.transition;Ri.transition={};try{e()}finally{Ri.transition=t}};fe.unstable_act=jd;fe.useCallback=function(e,t){return qe.current.useCallback(e,t)};fe.useContext=function(e){return qe.current.useContext(e)};fe.useDebugValue=function(){};fe.useDeferredValue=function(e){return qe.current.useDeferredValue(e)};fe.useEffect=function(e,t){return qe.current.useEffect(e,t)};fe.useId=function(){return qe.current.useId()};fe.useImperativeHandle=function(e,t,n){return qe.current.useImperativeHandle(e,t,n)};fe.useInsertionEffect=function(e,t){return qe.current.useInsertionEffect(e,t)};fe.useLayoutEffect=function(e,t){return qe.current.useLayoutEffect(e,t)};fe.useMemo=function(e,t){return qe.current.useMemo(e,t)};fe.useReducer=function(e,t,n){return qe.current.useReducer(e,t,n)};fe.useRef=function(e){return qe.current.useRef(e)};fe.useState=function(e){return qe.current.useState(e)};fe.useSyncExternalStore=function(e,t,n){return qe.current.useSyncExternalStore(e,t,n)};fe.useTransition=function(){return qe.current.useTransition()};fe.version="18.3.1";hd.exports=fe;var H=hd.exports;const rp=W0(H);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip=H,ap=Symbol.for("react.element"),op=Symbol.for("react.fragment"),lp=Object.prototype.hasOwnProperty,sp=ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dp={key:!0,ref:!0,__self:!0,__source:!0};function Cd(e,t,n){var r,a={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)lp.call(t,r)&&!dp.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:ap,type:e,key:o,ref:l,props:a,_owner:sp.current}}ha.Fragment=op;ha.jsx=Cd;ha.jsxs=Cd;md.exports=ha;var i=md.exports,co={},Nd={exports:{}},ut={},zd={exports:{}},Ed={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(X,le){var ae=X.length;X.push(le);e:for(;0<ae;){var se=ae-1>>>1,de=X[se];if(0<a(de,le))X[se]=le,X[ae]=de,ae=se;else break e}}function n(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var le=X[0],ae=X.pop();if(ae!==le){X[0]=ae;e:for(var se=0,de=X.length,yn=de>>>1;se<yn;){var yt=2*(se+1)-1,ue=X[yt],at=yt+1,Tt=X[at];if(0>a(ue,ae))at<de&&0>a(Tt,ue)?(X[se]=Tt,X[at]=ae,se=at):(X[se]=ue,X[yt]=ae,se=yt);else if(at<de&&0>a(Tt,ae))X[se]=Tt,X[at]=ae,se=at;else break e}}return le}function a(X,le){var ae=X.sortIndex-le.sortIndex;return ae!==0?ae:X.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,f=l.now();e.unstable_now=function(){return l.now()-f}}var u=[],b=[],R=1,M=null,T=3,y=!1,$=!1,Y=!1,xe=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(X){for(var le=n(b);le!==null;){if(le.callback===null)r(b);else if(le.startTime<=X)r(b),le.sortIndex=le.expirationTime,t(u,le);else break;le=n(b)}}function U(X){if(Y=!1,j(X),!$)if(n(u)!==null)$=!0,vn(Z);else{var le=n(b);le!==null&&Ve(U,le.startTime-X)}}function Z(X,le){$=!1,Y&&(Y=!1,k(ie),ie=-1),y=!0;var ae=T;try{for(j(le),M=n(u);M!==null&&(!(M.expirationTime>le)||X&&!Xe());){var se=M.callback;if(typeof se=="function"){M.callback=null,T=M.priorityLevel;var de=se(M.expirationTime<=le);le=e.unstable_now(),typeof de=="function"?M.callback=de:M===n(u)&&r(u),j(le)}else r(u);M=n(u)}if(M!==null)var yn=!0;else{var yt=n(b);yt!==null&&Ve(U,yt.startTime-le),yn=!1}return yn}finally{M=null,T=ae,y=!1}}var ee=!1,re=null,ie=-1,be=5,pe=-1;function Xe(){return!(e.unstable_now()-pe<be)}function Qt(){if(re!==null){var X=e.unstable_now();pe=X;var le=!0;try{le=re(!0,X)}finally{le?ve():(ee=!1,re=null)}}else ee=!1}var ve;if(typeof v=="function")ve=function(){v(Qt)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,Be=he.port2;he.port1.onmessage=Qt,ve=function(){Be.postMessage(null)}}else ve=function(){xe(Qt,0)};function vn(X){re=X,ee||(ee=!0,ve())}function Ve(X,le){ie=xe(function(){X(e.unstable_now())},le)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(X){X.callback=null},e.unstable_continueExecution=function(){$||y||($=!0,vn(Z))},e.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):be=0<X?Math.floor(1e3/X):5},e.unstable_getCurrentPriorityLevel=function(){return T},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(X){switch(T){case 1:case 2:case 3:var le=3;break;default:le=T}var ae=T;T=le;try{return X()}finally{T=ae}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(X,le){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ae=T;T=X;try{return le()}finally{T=ae}},e.unstable_scheduleCallback=function(X,le,ae){var se=e.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?se+ae:se):ae=se,X){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=ae+de,X={id:R++,callback:le,priorityLevel:X,startTime:ae,expirationTime:de,sortIndex:-1},ae>se?(X.sortIndex=ae,t(b,X),n(u)===null&&X===n(b)&&(Y?(k(ie),ie=-1):Y=!0,Ve(U,ae-se))):(X.sortIndex=de,t(u,X),$||y||($=!0,vn(Z))),X},e.unstable_shouldYield=Xe,e.unstable_wrapCallback=function(X){var le=T;return function(){var ae=T;T=le;try{return X.apply(this,arguments)}finally{T=ae}}}})(Ed);zd.exports=Ed;var cp=zd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up=H,ct=cp;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Td=new Set,Wr={};function _n(e,t){or(e,t),or(e+"Capture",t)}function or(e,t){for(Wr[e]=t,e=0;e<t.length;e++)Td.add(t[e])}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uo=Object.prototype.hasOwnProperty,pp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ls={},ss={};function fp(e){return uo.call(ss,e)?!0:uo.call(ls,e)?!1:pp.test(e)?ss[e]=!0:(ls[e]=!0,!1)}function gp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function mp(e,t,n,r){if(t===null||typeof t>"u"||gp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,a,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ae[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ae[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ae[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ae[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var ll=/[\-:]([a-z])/g;function sl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ll,sl);Ae[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ll,sl);Ae[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ll,sl);Ae[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ae[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function dl(e,t,n,r){var a=Ae.hasOwnProperty(t)?Ae[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(mp(t,n,a,r)&&(n=null),r||a===null?fp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hi=Symbol.for("react.element"),Hn=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),cl=Symbol.for("react.strict_mode"),po=Symbol.for("react.profiler"),Id=Symbol.for("react.provider"),Pd=Symbol.for("react.context"),ul=Symbol.for("react.forward_ref"),fo=Symbol.for("react.suspense"),go=Symbol.for("react.suspense_list"),pl=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),Ld=Symbol.for("react.offscreen"),ds=Symbol.iterator;function vr(e){return e===null||typeof e!="object"?null:(e=ds&&e[ds]||e["@@iterator"],typeof e=="function"?e:null)}var Ne=Object.assign,Fa;function zr(e){if(Fa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fa=t&&t[1]||""}return`
`+Fa+e}var _a=!1;function Da(e,t){if(!e||_a)return"";_a=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(b){var r=b}Reflect.construct(e,[],t)}else{try{t.call()}catch(b){r=b}e.call(t.prototype)}else{try{throw Error()}catch(b){r=b}e()}}catch(b){if(b&&r&&typeof b.stack=="string"){for(var a=b.stack.split(`
`),o=r.stack.split(`
`),l=a.length-1,f=o.length-1;1<=l&&0<=f&&a[l]!==o[f];)f--;for(;1<=l&&0<=f;l--,f--)if(a[l]!==o[f]){if(l!==1||f!==1)do if(l--,f--,0>f||a[l]!==o[f]){var u=`
`+a[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=f);break}}}finally{_a=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zr(e):""}function hp(e){switch(e.tag){case 5:return zr(e.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 2:case 15:return e=Da(e.type,!1),e;case 11:return e=Da(e.type.render,!1),e;case 1:return e=Da(e.type,!0),e;default:return""}}function mo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Un:return"Fragment";case Hn:return"Portal";case po:return"Profiler";case cl:return"StrictMode";case fo:return"Suspense";case go:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pd:return(e.displayName||"Context")+".Consumer";case Id:return(e._context.displayName||"Context")+".Provider";case ul:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pl:return t=e.displayName||null,t!==null?t:mo(e.type)||"Memo";case Xt:t=e._payload,e=e._init;try{return mo(e(t))}catch{}}return null}function xp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mo(t);case 8:return t===cl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vp(e){var t=Rd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xi(e){e._valueTracker||(e._valueTracker=vp(e))}function Fd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ho(e,t){var n=t.checked;return Ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function cs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _d(e,t){t=t.checked,t!=null&&dl(e,"checked",t,!1)}function xo(e,t){_d(e,t);var n=fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vo(e,t.type,n):t.hasOwnProperty("defaultValue")&&vo(e,t.type,fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function us(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vo(e,t,n){(t!=="number"||Yi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Er=Array.isArray;function er(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function yo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ps(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(Er(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fn(n)}}function Dd(e,t){var n=fn(t.value),r=fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Md(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Md(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vi,Od=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vi=vi||document.createElement("div"),vi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yp=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){yp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pr[t]=Pr[e]})});function Ad(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+t).trim():t+"px"}function Bd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Ad(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var bp=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wo(e,t){if(t){if(bp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function ko(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var So=null;function fl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jo=null,tr=null,nr=null;function gs(e){if(e=li(e)){if(typeof jo!="function")throw Error(V(280));var t=e.stateNode;t&&(t=wa(t),jo(e.stateNode,e.type,t))}}function Wd(e){tr?nr?nr.push(e):nr=[e]:tr=e}function Hd(){if(tr){var e=tr,t=nr;if(nr=tr=null,gs(e),t)for(e=0;e<t.length;e++)gs(t[e])}}function Ud(e,t){return e(t)}function $d(){}var Ma=!1;function Vd(e,t,n){if(Ma)return e(t,n);Ma=!0;try{return Ud(e,t,n)}finally{Ma=!1,(tr!==null||nr!==null)&&($d(),Hd())}}function Ur(e,t){var n=e.stateNode;if(n===null)return null;var r=wa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var Co=!1;if(Ut)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){Co=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{Co=!1}function wp(e,t,n,r,a,o,l,f,u){var b=Array.prototype.slice.call(arguments,3);try{t.apply(n,b)}catch(R){this.onError(R)}}var Lr=!1,Ki=null,Qi=!1,No=null,kp={onError:function(e){Lr=!0,Ki=e}};function Sp(e,t,n,r,a,o,l,f,u){Lr=!1,Ki=null,wp.apply(kp,arguments)}function jp(e,t,n,r,a,o,l,f,u){if(Sp.apply(this,arguments),Lr){if(Lr){var b=Ki;Lr=!1,Ki=null}else throw Error(V(198));Qi||(Qi=!0,No=b)}}function Dn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ms(e){if(Dn(e)!==e)throw Error(V(188))}function Cp(e){var t=e.alternate;if(!t){if(t=Dn(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return ms(a),e;if(o===r)return ms(a),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=a,r=o;else{for(var l=!1,f=a.child;f;){if(f===n){l=!0,n=a,r=o;break}if(f===r){l=!0,r=a,n=o;break}f=f.sibling}if(!l){for(f=o.child;f;){if(f===n){l=!0,n=o,r=a;break}if(f===r){l=!0,r=o,n=a;break}f=f.sibling}if(!l)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function Kd(e){return e=Cp(e),e!==null?Qd(e):null}function Qd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qd(e);if(t!==null)return t;e=e.sibling}return null}var Gd=ct.unstable_scheduleCallback,hs=ct.unstable_cancelCallback,Np=ct.unstable_shouldYield,zp=ct.unstable_requestPaint,Te=ct.unstable_now,Ep=ct.unstable_getCurrentPriorityLevel,gl=ct.unstable_ImmediatePriority,qd=ct.unstable_UserBlockingPriority,Gi=ct.unstable_NormalPriority,Tp=ct.unstable_LowPriority,Jd=ct.unstable_IdlePriority,xa=null,Ft=null;function Ip(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(xa,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:Rp,Pp=Math.log,Lp=Math.LN2;function Rp(e){return e>>>=0,e===0?32:31-(Pp(e)/Lp|0)|0}var yi=64,bi=4194304;function Tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var f=l&~a;f!==0?r=Tr(f):(o&=l,o!==0&&(r=Tr(o)))}else l=n&~a,l!==0?r=Tr(l):o!==0&&(r=Tr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),a=1<<n,r|=e[n],t&=~a;return r}function Fp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _p(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Nt(o),f=1<<l,u=a[l];u===-1?(!(f&n)||f&r)&&(a[l]=Fp(f,t)):u<=t&&(e.expiredLanes|=f),o&=~f}}function zo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xd(){var e=yi;return yi<<=1,!(yi&4194240)&&(yi=64),e}function Oa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ai(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function Dp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Nt(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}function ml(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var me=0;function Zd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ec,hl,tc,nc,rc,Eo=!1,wi=[],an=null,on=null,ln=null,$r=new Map,Vr=new Map,en=[],Mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xs(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(t.pointerId)}}function br(e,t,n,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},t!==null&&(t=li(t),t!==null&&hl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Op(e,t,n,r,a){switch(t){case"focusin":return an=br(an,e,t,n,r,a),!0;case"dragenter":return on=br(on,e,t,n,r,a),!0;case"mouseover":return ln=br(ln,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return $r.set(o,br($r.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Vr.set(o,br(Vr.get(o)||null,e,t,n,r,a)),!0}return!1}function ic(e){var t=Cn(e.target);if(t!==null){var n=Dn(t);if(n!==null){if(t=n.tag,t===13){if(t=Yd(n),t!==null){e.blockedOn=t,rc(e.priority,function(){tc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=To(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);So=r,n.target.dispatchEvent(r),So=null}else return t=li(n),t!==null&&hl(t),e.blockedOn=n,!1;t.shift()}return!0}function vs(e,t,n){Fi(e)&&n.delete(t)}function Ap(){Eo=!1,an!==null&&Fi(an)&&(an=null),on!==null&&Fi(on)&&(on=null),ln!==null&&Fi(ln)&&(ln=null),$r.forEach(vs),Vr.forEach(vs)}function wr(e,t){e.blockedOn===t&&(e.blockedOn=null,Eo||(Eo=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,Ap)))}function Yr(e){function t(a){return wr(a,e)}if(0<wi.length){wr(wi[0],e);for(var n=1;n<wi.length;n++){var r=wi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&wr(an,e),on!==null&&wr(on,e),ln!==null&&wr(ln,e),$r.forEach(t),Vr.forEach(t),n=0;n<en.length;n++)r=en[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)ic(n),n.blockedOn===null&&en.shift()}var rr=Kt.ReactCurrentBatchConfig,Ji=!0;function Bp(e,t,n,r){var a=me,o=rr.transition;rr.transition=null;try{me=1,xl(e,t,n,r)}finally{me=a,rr.transition=o}}function Wp(e,t,n,r){var a=me,o=rr.transition;rr.transition=null;try{me=4,xl(e,t,n,r)}finally{me=a,rr.transition=o}}function xl(e,t,n,r){if(Ji){var a=To(e,t,n,r);if(a===null)Qa(e,t,r,Xi,n),xs(e,r);else if(Op(a,e,t,n,r))r.stopPropagation();else if(xs(e,r),t&4&&-1<Mp.indexOf(e)){for(;a!==null;){var o=li(a);if(o!==null&&ec(o),o=To(e,t,n,r),o===null&&Qa(e,t,r,Xi,n),o===a)break;a=o}a!==null&&r.stopPropagation()}else Qa(e,t,r,null,n)}}var Xi=null;function To(e,t,n,r){if(Xi=null,e=fl(r),e=Cn(e),e!==null)if(t=Dn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xi=e,null}function ac(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ep()){case gl:return 1;case qd:return 4;case Gi:case Tp:return 16;case Jd:return 536870912;default:return 16}default:return 16}}var nn=null,vl=null,_i=null;function oc(){if(_i)return _i;var e,t=vl,n=t.length,r,a="value"in nn?nn.value:nn.textContent,o=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===a[o-r];r++);return _i=a.slice(e,1<r?1-r:void 0)}function Di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function ys(){return!1}function pt(e){function t(n,r,a,o,l){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(o):o[f]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ki:ys,this.isPropagationStopped=ys,this}return Ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=pt(gr),oi=Ne({},gr,{view:0,detail:0}),Hp=pt(oi),Aa,Ba,kr,va=Ne({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(Aa=e.screenX-kr.screenX,Ba=e.screenY-kr.screenY):Ba=Aa=0,kr=e),Aa)},movementY:function(e){return"movementY"in e?e.movementY:Ba}}),bs=pt(va),Up=Ne({},va,{dataTransfer:0}),$p=pt(Up),Vp=Ne({},oi,{relatedTarget:0}),Wa=pt(Vp),Yp=Ne({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Kp=pt(Yp),Qp=Ne({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gp=pt(Qp),qp=Ne({},gr,{data:0}),ws=pt(qp),Jp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ef(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zp[e])?!!t[e]:!1}function bl(){return ef}var tf=Ne({},oi,{key:function(e){if(e.key){var t=Jp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bl,charCode:function(e){return e.type==="keypress"?Di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nf=pt(tf),rf=Ne({},va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ks=pt(rf),af=Ne({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bl}),of=pt(af),lf=Ne({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sf=pt(lf),df=Ne({},va,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cf=pt(df),uf=[9,13,27,32],wl=Ut&&"CompositionEvent"in window,Rr=null;Ut&&"documentMode"in document&&(Rr=document.documentMode);var pf=Ut&&"TextEvent"in window&&!Rr,lc=Ut&&(!wl||Rr&&8<Rr&&11>=Rr),Ss=" ",js=!1;function sc(e,t){switch(e){case"keyup":return uf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function ff(e,t){switch(e){case"compositionend":return dc(t);case"keypress":return t.which!==32?null:(js=!0,Ss);case"textInput":return e=t.data,e===Ss&&js?null:e;default:return null}}function gf(e,t){if($n)return e==="compositionend"||!wl&&sc(e,t)?(e=oc(),_i=vl=nn=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lc&&t.locale!=="ko"?null:t.data;default:return null}}var mf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mf[e.type]:t==="textarea"}function cc(e,t,n,r){Wd(r),t=Zi(t,"onChange"),0<t.length&&(n=new yl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fr=null,Kr=null;function hf(e){wc(e,0)}function ya(e){var t=Kn(e);if(Fd(t))return e}function xf(e,t){if(e==="change")return t}var uc=!1;if(Ut){var Ha;if(Ut){var Ua="oninput"in document;if(!Ua){var Ns=document.createElement("div");Ns.setAttribute("oninput","return;"),Ua=typeof Ns.oninput=="function"}Ha=Ua}else Ha=!1;uc=Ha&&(!document.documentMode||9<document.documentMode)}function zs(){Fr&&(Fr.detachEvent("onpropertychange",pc),Kr=Fr=null)}function pc(e){if(e.propertyName==="value"&&ya(Kr)){var t=[];cc(t,Kr,e,fl(e)),Vd(hf,t)}}function vf(e,t,n){e==="focusin"?(zs(),Fr=t,Kr=n,Fr.attachEvent("onpropertychange",pc)):e==="focusout"&&zs()}function yf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ya(Kr)}function bf(e,t){if(e==="click")return ya(t)}function wf(e,t){if(e==="input"||e==="change")return ya(t)}function kf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:kf;function Qr(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!uo.call(t,a)||!Et(e[a],t[a]))return!1}return!0}function Es(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ts(e,t){var n=Es(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Es(n)}}function fc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gc(){for(var e=window,t=Yi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yi(e.document)}return t}function kl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sf(e){var t=gc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fc(n.ownerDocument.documentElement,n)){if(r!==null&&kl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=Ts(n,o);var l=Ts(n,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jf=Ut&&"documentMode"in document&&11>=document.documentMode,Vn=null,Io=null,_r=null,Po=!1;function Is(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Po||Vn==null||Vn!==Yi(r)||(r=Vn,"selectionStart"in r&&kl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_r&&Qr(_r,r)||(_r=r,r=Zi(Io,"onSelect"),0<r.length&&(t=new yl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vn)))}function Si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionend:Si("Transition","TransitionEnd")},$a={},mc={};Ut&&(mc=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function ba(e){if($a[e])return $a[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mc)return $a[e]=t[n];return e}var hc=ba("animationend"),xc=ba("animationiteration"),vc=ba("animationstart"),yc=ba("transitionend"),bc=new Map,Ps="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,t){bc.set(e,t),_n(t,[e])}for(var Va=0;Va<Ps.length;Va++){var Ya=Ps[Va],Cf=Ya.toLowerCase(),Nf=Ya[0].toUpperCase()+Ya.slice(1);mn(Cf,"on"+Nf)}mn(hc,"onAnimationEnd");mn(xc,"onAnimationIteration");mn(vc,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(yc,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function Ls(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,jp(r,t,void 0,e),e.currentTarget=null}function wc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var f=r[l],u=f.instance,b=f.currentTarget;if(f=f.listener,u!==o&&a.isPropagationStopped())break e;Ls(a,f,b),o=u}else for(l=0;l<r.length;l++){if(f=r[l],u=f.instance,b=f.currentTarget,f=f.listener,u!==o&&a.isPropagationStopped())break e;Ls(a,f,b),o=u}}}if(Qi)throw e=No,Qi=!1,No=null,e}function we(e,t){var n=t[Do];n===void 0&&(n=t[Do]=new Set);var r=e+"__bubble";n.has(r)||(kc(t,e,2,!1),n.add(r))}function Ka(e,t,n){var r=0;t&&(r|=4),kc(n,e,r,t)}var ji="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[ji]){e[ji]=!0,Td.forEach(function(n){n!=="selectionchange"&&(zf.has(n)||Ka(n,!1,e),Ka(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ji]||(t[ji]=!0,Ka("selectionchange",!1,t))}}function kc(e,t,n,r){switch(ac(t)){case 1:var a=Bp;break;case 4:a=Wp;break;default:a=xl}n=a.bind(null,t,n,e),a=void 0,!Co||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Qa(e,t,n,r,a){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var f=r.stateNode.containerInfo;if(f===a||f.nodeType===8&&f.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;l=l.return}for(;f!==null;){if(l=Cn(f),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}f=f.parentNode}}r=r.return}Vd(function(){var b=o,R=fl(n),M=[];e:{var T=bc.get(e);if(T!==void 0){var y=yl,$=e;switch(e){case"keypress":if(Di(n)===0)break e;case"keydown":case"keyup":y=nf;break;case"focusin":$="focus",y=Wa;break;case"focusout":$="blur",y=Wa;break;case"beforeblur":case"afterblur":y=Wa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=$p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=of;break;case hc:case xc:case vc:y=Kp;break;case yc:y=sf;break;case"scroll":y=Hp;break;case"wheel":y=cf;break;case"copy":case"cut":case"paste":y=Gp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ks}var Y=(t&4)!==0,xe=!Y&&e==="scroll",k=Y?T!==null?T+"Capture":null:T;Y=[];for(var v=b,j;v!==null;){j=v;var U=j.stateNode;if(j.tag===5&&U!==null&&(j=U,k!==null&&(U=Ur(v,k),U!=null&&Y.push(qr(v,U,j)))),xe)break;v=v.return}0<Y.length&&(T=new y(T,$,null,n,R),M.push({event:T,listeners:Y}))}}if(!(t&7)){e:{if(T=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",T&&n!==So&&($=n.relatedTarget||n.fromElement)&&(Cn($)||$[$t]))break e;if((y||T)&&(T=R.window===R?R:(T=R.ownerDocument)?T.defaultView||T.parentWindow:window,y?($=n.relatedTarget||n.toElement,y=b,$=$?Cn($):null,$!==null&&(xe=Dn($),$!==xe||$.tag!==5&&$.tag!==6)&&($=null)):(y=null,$=b),y!==$)){if(Y=bs,U="onMouseLeave",k="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(Y=ks,U="onPointerLeave",k="onPointerEnter",v="pointer"),xe=y==null?T:Kn(y),j=$==null?T:Kn($),T=new Y(U,v+"leave",y,n,R),T.target=xe,T.relatedTarget=j,U=null,Cn(R)===b&&(Y=new Y(k,v+"enter",$,n,R),Y.target=j,Y.relatedTarget=xe,U=Y),xe=U,y&&$)t:{for(Y=y,k=$,v=0,j=Y;j;j=Wn(j))v++;for(j=0,U=k;U;U=Wn(U))j++;for(;0<v-j;)Y=Wn(Y),v--;for(;0<j-v;)k=Wn(k),j--;for(;v--;){if(Y===k||k!==null&&Y===k.alternate)break t;Y=Wn(Y),k=Wn(k)}Y=null}else Y=null;y!==null&&Rs(M,T,y,Y,!1),$!==null&&xe!==null&&Rs(M,xe,$,Y,!0)}}e:{if(T=b?Kn(b):window,y=T.nodeName&&T.nodeName.toLowerCase(),y==="select"||y==="input"&&T.type==="file")var Z=xf;else if(Cs(T))if(uc)Z=wf;else{Z=yf;var ee=vf}else(y=T.nodeName)&&y.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(Z=bf);if(Z&&(Z=Z(e,b))){cc(M,Z,n,R);break e}ee&&ee(e,T,b),e==="focusout"&&(ee=T._wrapperState)&&ee.controlled&&T.type==="number"&&vo(T,"number",T.value)}switch(ee=b?Kn(b):window,e){case"focusin":(Cs(ee)||ee.contentEditable==="true")&&(Vn=ee,Io=b,_r=null);break;case"focusout":_r=Io=Vn=null;break;case"mousedown":Po=!0;break;case"contextmenu":case"mouseup":case"dragend":Po=!1,Is(M,n,R);break;case"selectionchange":if(jf)break;case"keydown":case"keyup":Is(M,n,R)}var re;if(wl)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else $n?sc(e,n)&&(ie="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ie="onCompositionStart");ie&&(lc&&n.locale!=="ko"&&($n||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&$n&&(re=oc()):(nn=R,vl="value"in nn?nn.value:nn.textContent,$n=!0)),ee=Zi(b,ie),0<ee.length&&(ie=new ws(ie,e,null,n,R),M.push({event:ie,listeners:ee}),re?ie.data=re:(re=dc(n),re!==null&&(ie.data=re)))),(re=pf?ff(e,n):gf(e,n))&&(b=Zi(b,"onBeforeInput"),0<b.length&&(R=new ws("onBeforeInput","beforeinput",null,n,R),M.push({event:R,listeners:b}),R.data=re))}wc(M,t)})}function qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zi(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Ur(e,n),o!=null&&r.unshift(qr(e,o,a)),o=Ur(e,t),o!=null&&r.push(qr(e,o,a))),e=e.return}return r}function Wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rs(e,t,n,r,a){for(var o=t._reactName,l=[];n!==null&&n!==r;){var f=n,u=f.alternate,b=f.stateNode;if(u!==null&&u===r)break;f.tag===5&&b!==null&&(f=b,a?(u=Ur(n,o),u!=null&&l.unshift(qr(n,u,f))):a||(u=Ur(n,o),u!=null&&l.push(qr(n,u,f)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Ef=/\r\n?/g,Tf=/\u0000|\uFFFD/g;function Fs(e){return(typeof e=="string"?e:""+e).replace(Ef,`
`).replace(Tf,"")}function Ci(e,t,n){if(t=Fs(t),Fs(e)!==t&&n)throw Error(V(425))}function ea(){}var Lo=null,Ro=null;function Fo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _o=typeof setTimeout=="function"?setTimeout:void 0,If=typeof clearTimeout=="function"?clearTimeout:void 0,_s=typeof Promise=="function"?Promise:void 0,Pf=typeof queueMicrotask=="function"?queueMicrotask:typeof _s<"u"?function(e){return _s.resolve(null).then(e).catch(Lf)}:_o;function Lf(e){setTimeout(function(){throw e})}function Ga(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Yr(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ds(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mr=Math.random().toString(36).slice(2),Rt="__reactFiber$"+mr,Jr="__reactProps$"+mr,$t="__reactContainer$"+mr,Do="__reactEvents$"+mr,Rf="__reactListeners$"+mr,Ff="__reactHandles$"+mr;function Cn(e){var t=e[Rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[Rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ds(e);e!==null;){if(n=e[Rt])return n;e=Ds(e)}return t}e=n,n=e.parentNode}return null}function li(e){return e=e[Rt]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function wa(e){return e[Jr]||null}var Mo=[],Qn=-1;function hn(e){return{current:e}}function ke(e){0>Qn||(e.current=Mo[Qn],Mo[Qn]=null,Qn--)}function ye(e,t){Qn++,Mo[Qn]=e.current,e.current=t}var gn={},$e=hn(gn),nt=hn(!1),In=gn;function lr(e,t){var n=e.type.contextTypes;if(!n)return gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function rt(e){return e=e.childContextTypes,e!=null}function ta(){ke(nt),ke($e)}function Ms(e,t,n){if($e.current!==gn)throw Error(V(168));ye($e,t),ye(nt,n)}function Sc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(V(108,xp(e)||"Unknown",a));return Ne({},n,r)}function na(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,In=$e.current,ye($e,e),ye(nt,nt.current),!0}function Os(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=Sc(e,t,In),r.__reactInternalMemoizedMergedChildContext=e,ke(nt),ke($e),ye($e,e)):ke(nt),ye(nt,n)}var At=null,ka=!1,qa=!1;function jc(e){At===null?At=[e]:At.push(e)}function _f(e){ka=!0,jc(e)}function xn(){if(!qa&&At!==null){qa=!0;var e=0,t=me;try{var n=At;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}At=null,ka=!1}catch(a){throw At!==null&&(At=At.slice(e+1)),Gd(gl,xn),a}finally{me=t,qa=!1}}return null}var Gn=[],qn=0,ra=null,ia=0,ft=[],gt=0,Pn=null,Bt=1,Wt="";function Sn(e,t){Gn[qn++]=ia,Gn[qn++]=ra,ra=e,ia=t}function Cc(e,t,n){ft[gt++]=Bt,ft[gt++]=Wt,ft[gt++]=Pn,Pn=e;var r=Bt;e=Wt;var a=32-Nt(r)-1;r&=~(1<<a),n+=1;var o=32-Nt(t)+a;if(30<o){var l=a-a%5;o=(r&(1<<l)-1).toString(32),r>>=l,a-=l,Bt=1<<32-Nt(t)+a|n<<a|r,Wt=o+e}else Bt=1<<o|n<<a|r,Wt=e}function Sl(e){e.return!==null&&(Sn(e,1),Cc(e,1,0))}function jl(e){for(;e===ra;)ra=Gn[--qn],Gn[qn]=null,ia=Gn[--qn],Gn[qn]=null;for(;e===Pn;)Pn=ft[--gt],ft[gt]=null,Wt=ft[--gt],ft[gt]=null,Bt=ft[--gt],ft[gt]=null}var dt=null,st=null,Se=!1,Ct=null;function Nc(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function As(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,st=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,st=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:Bt,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,st=null,!0):!1;default:return!1}}function Oo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ao(e){if(Se){var t=st;if(t){var n=t;if(!As(e,t)){if(Oo(e))throw Error(V(418));t=sn(n.nextSibling);var r=dt;t&&As(e,t)?Nc(r,n):(e.flags=e.flags&-4097|2,Se=!1,dt=e)}}else{if(Oo(e))throw Error(V(418));e.flags=e.flags&-4097|2,Se=!1,dt=e}}}function Bs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function Ni(e){if(e!==dt)return!1;if(!Se)return Bs(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fo(e.type,e.memoizedProps)),t&&(t=st)){if(Oo(e))throw zc(),Error(V(418));for(;t;)Nc(e,t),t=sn(t.nextSibling)}if(Bs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){st=sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}st=null}}else st=dt?sn(e.stateNode.nextSibling):null;return!0}function zc(){for(var e=st;e;)e=sn(e.nextSibling)}function sr(){st=dt=null,Se=!1}function Cl(e){Ct===null?Ct=[e]:Ct.push(e)}var Df=Kt.ReactCurrentBatchConfig;function Sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var a=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var f=a.refs;l===null?delete f[o]:f[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function zi(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ws(e){var t=e._init;return t(e._payload)}function Ec(e){function t(k,v){if(e){var j=k.deletions;j===null?(k.deletions=[v],k.flags|=16):j.push(v)}}function n(k,v){if(!e)return null;for(;v!==null;)t(k,v),v=v.sibling;return null}function r(k,v){for(k=new Map;v!==null;)v.key!==null?k.set(v.key,v):k.set(v.index,v),v=v.sibling;return k}function a(k,v){return k=pn(k,v),k.index=0,k.sibling=null,k}function o(k,v,j){return k.index=j,e?(j=k.alternate,j!==null?(j=j.index,j<v?(k.flags|=2,v):j):(k.flags|=2,v)):(k.flags|=1048576,v)}function l(k){return e&&k.alternate===null&&(k.flags|=2),k}function f(k,v,j,U){return v===null||v.tag!==6?(v=ro(j,k.mode,U),v.return=k,v):(v=a(v,j),v.return=k,v)}function u(k,v,j,U){var Z=j.type;return Z===Un?R(k,v,j.props.children,U,j.key):v!==null&&(v.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Xt&&Ws(Z)===v.type)?(U=a(v,j.props),U.ref=Sr(k,v,j),U.return=k,U):(U=Ui(j.type,j.key,j.props,null,k.mode,U),U.ref=Sr(k,v,j),U.return=k,U)}function b(k,v,j,U){return v===null||v.tag!==4||v.stateNode.containerInfo!==j.containerInfo||v.stateNode.implementation!==j.implementation?(v=io(j,k.mode,U),v.return=k,v):(v=a(v,j.children||[]),v.return=k,v)}function R(k,v,j,U,Z){return v===null||v.tag!==7?(v=Tn(j,k.mode,U,Z),v.return=k,v):(v=a(v,j),v.return=k,v)}function M(k,v,j){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ro(""+v,k.mode,j),v.return=k,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hi:return j=Ui(v.type,v.key,v.props,null,k.mode,j),j.ref=Sr(k,null,v),j.return=k,j;case Hn:return v=io(v,k.mode,j),v.return=k,v;case Xt:var U=v._init;return M(k,U(v._payload),j)}if(Er(v)||vr(v))return v=Tn(v,k.mode,j,null),v.return=k,v;zi(k,v)}return null}function T(k,v,j,U){var Z=v!==null?v.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return Z!==null?null:f(k,v,""+j,U);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case hi:return j.key===Z?u(k,v,j,U):null;case Hn:return j.key===Z?b(k,v,j,U):null;case Xt:return Z=j._init,T(k,v,Z(j._payload),U)}if(Er(j)||vr(j))return Z!==null?null:R(k,v,j,U,null);zi(k,j)}return null}function y(k,v,j,U,Z){if(typeof U=="string"&&U!==""||typeof U=="number")return k=k.get(j)||null,f(v,k,""+U,Z);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case hi:return k=k.get(U.key===null?j:U.key)||null,u(v,k,U,Z);case Hn:return k=k.get(U.key===null?j:U.key)||null,b(v,k,U,Z);case Xt:var ee=U._init;return y(k,v,j,ee(U._payload),Z)}if(Er(U)||vr(U))return k=k.get(j)||null,R(v,k,U,Z,null);zi(v,U)}return null}function $(k,v,j,U){for(var Z=null,ee=null,re=v,ie=v=0,be=null;re!==null&&ie<j.length;ie++){re.index>ie?(be=re,re=null):be=re.sibling;var pe=T(k,re,j[ie],U);if(pe===null){re===null&&(re=be);break}e&&re&&pe.alternate===null&&t(k,re),v=o(pe,v,ie),ee===null?Z=pe:ee.sibling=pe,ee=pe,re=be}if(ie===j.length)return n(k,re),Se&&Sn(k,ie),Z;if(re===null){for(;ie<j.length;ie++)re=M(k,j[ie],U),re!==null&&(v=o(re,v,ie),ee===null?Z=re:ee.sibling=re,ee=re);return Se&&Sn(k,ie),Z}for(re=r(k,re);ie<j.length;ie++)be=y(re,k,ie,j[ie],U),be!==null&&(e&&be.alternate!==null&&re.delete(be.key===null?ie:be.key),v=o(be,v,ie),ee===null?Z=be:ee.sibling=be,ee=be);return e&&re.forEach(function(Xe){return t(k,Xe)}),Se&&Sn(k,ie),Z}function Y(k,v,j,U){var Z=vr(j);if(typeof Z!="function")throw Error(V(150));if(j=Z.call(j),j==null)throw Error(V(151));for(var ee=Z=null,re=v,ie=v=0,be=null,pe=j.next();re!==null&&!pe.done;ie++,pe=j.next()){re.index>ie?(be=re,re=null):be=re.sibling;var Xe=T(k,re,pe.value,U);if(Xe===null){re===null&&(re=be);break}e&&re&&Xe.alternate===null&&t(k,re),v=o(Xe,v,ie),ee===null?Z=Xe:ee.sibling=Xe,ee=Xe,re=be}if(pe.done)return n(k,re),Se&&Sn(k,ie),Z;if(re===null){for(;!pe.done;ie++,pe=j.next())pe=M(k,pe.value,U),pe!==null&&(v=o(pe,v,ie),ee===null?Z=pe:ee.sibling=pe,ee=pe);return Se&&Sn(k,ie),Z}for(re=r(k,re);!pe.done;ie++,pe=j.next())pe=y(re,k,ie,pe.value,U),pe!==null&&(e&&pe.alternate!==null&&re.delete(pe.key===null?ie:pe.key),v=o(pe,v,ie),ee===null?Z=pe:ee.sibling=pe,ee=pe);return e&&re.forEach(function(Qt){return t(k,Qt)}),Se&&Sn(k,ie),Z}function xe(k,v,j,U){if(typeof j=="object"&&j!==null&&j.type===Un&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case hi:e:{for(var Z=j.key,ee=v;ee!==null;){if(ee.key===Z){if(Z=j.type,Z===Un){if(ee.tag===7){n(k,ee.sibling),v=a(ee,j.props.children),v.return=k,k=v;break e}}else if(ee.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Xt&&Ws(Z)===ee.type){n(k,ee.sibling),v=a(ee,j.props),v.ref=Sr(k,ee,j),v.return=k,k=v;break e}n(k,ee);break}else t(k,ee);ee=ee.sibling}j.type===Un?(v=Tn(j.props.children,k.mode,U,j.key),v.return=k,k=v):(U=Ui(j.type,j.key,j.props,null,k.mode,U),U.ref=Sr(k,v,j),U.return=k,k=U)}return l(k);case Hn:e:{for(ee=j.key;v!==null;){if(v.key===ee)if(v.tag===4&&v.stateNode.containerInfo===j.containerInfo&&v.stateNode.implementation===j.implementation){n(k,v.sibling),v=a(v,j.children||[]),v.return=k,k=v;break e}else{n(k,v);break}else t(k,v);v=v.sibling}v=io(j,k.mode,U),v.return=k,k=v}return l(k);case Xt:return ee=j._init,xe(k,v,ee(j._payload),U)}if(Er(j))return $(k,v,j,U);if(vr(j))return Y(k,v,j,U);zi(k,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,v!==null&&v.tag===6?(n(k,v.sibling),v=a(v,j),v.return=k,k=v):(n(k,v),v=ro(j,k.mode,U),v.return=k,k=v),l(k)):n(k,v)}return xe}var dr=Ec(!0),Tc=Ec(!1),aa=hn(null),oa=null,Jn=null,Nl=null;function zl(){Nl=Jn=oa=null}function El(e){var t=aa.current;ke(aa),e._currentValue=t}function Bo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ir(e,t){oa=e,Nl=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(tt=!0),e.firstContext=null)}function xt(e){var t=e._currentValue;if(Nl!==e)if(e={context:e,memoizedValue:t,next:null},Jn===null){if(oa===null)throw Error(V(308));Jn=e,oa.dependencies={lanes:0,firstContext:e}}else Jn=Jn.next=e;return t}var Nn=null;function Tl(e){Nn===null?Nn=[e]:Nn.push(e)}function Ic(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Tl(t)):(n.next=a.next,a.next=n),t.interleaved=n,Vt(e,r)}function Vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zt=!1;function Il(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Vt(e,n)}return a=r.interleaved,a===null?(t.next=t,Tl(r)):(t.next=a.next,a.next=t),r.interleaved=t,Vt(e,n)}function Mi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ml(e,n)}}function Hs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?a=o=t:o=o.next=t}else a=o=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function la(e,t,n,r){var a=e.updateQueue;Zt=!1;var o=a.firstBaseUpdate,l=a.lastBaseUpdate,f=a.shared.pending;if(f!==null){a.shared.pending=null;var u=f,b=u.next;u.next=null,l===null?o=b:l.next=b,l=u;var R=e.alternate;R!==null&&(R=R.updateQueue,f=R.lastBaseUpdate,f!==l&&(f===null?R.firstBaseUpdate=b:f.next=b,R.lastBaseUpdate=u))}if(o!==null){var M=a.baseState;l=0,R=b=u=null,f=o;do{var T=f.lane,y=f.eventTime;if((r&T)===T){R!==null&&(R=R.next={eventTime:y,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var $=e,Y=f;switch(T=t,y=n,Y.tag){case 1:if($=Y.payload,typeof $=="function"){M=$.call(y,M,T);break e}M=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=Y.payload,T=typeof $=="function"?$.call(y,M,T):$,T==null)break e;M=Ne({},M,T);break e;case 2:Zt=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,T=a.effects,T===null?a.effects=[f]:T.push(f))}else y={eventTime:y,lane:T,tag:f.tag,payload:f.payload,callback:f.callback,next:null},R===null?(b=R=y,u=M):R=R.next=y,l|=T;if(f=f.next,f===null){if(f=a.shared.pending,f===null)break;T=f,f=T.next,T.next=null,a.lastBaseUpdate=T,a.shared.pending=null}}while(!0);if(R===null&&(u=M),a.baseState=u,a.firstBaseUpdate=b,a.lastBaseUpdate=R,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);Rn|=l,e.lanes=l,e.memoizedState=M}}function Us(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(V(191,a));a.call(r)}}}var si={},_t=hn(si),Xr=hn(si),Zr=hn(si);function zn(e){if(e===si)throw Error(V(174));return e}function Pl(e,t){switch(ye(Zr,t),ye(Xr,e),ye(_t,si),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bo(t,e)}ke(_t),ye(_t,t)}function cr(){ke(_t),ke(Xr),ke(Zr)}function Lc(e){zn(Zr.current);var t=zn(_t.current),n=bo(t,e.type);t!==n&&(ye(Xr,e),ye(_t,n))}function Ll(e){Xr.current===e&&(ke(_t),ke(Xr))}var je=hn(0);function sa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ja=[];function Rl(){for(var e=0;e<Ja.length;e++)Ja[e]._workInProgressVersionPrimary=null;Ja.length=0}var Oi=Kt.ReactCurrentDispatcher,Xa=Kt.ReactCurrentBatchConfig,Ln=0,Ce=null,Re=null,_e=null,da=!1,Dr=!1,ei=0,Mf=0;function We(){throw Error(V(321))}function Fl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function _l(e,t,n,r,a,o){if(Ln=o,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oi.current=e===null||e.memoizedState===null?Wf:Hf,e=n(r,a),Dr){o=0;do{if(Dr=!1,ei=0,25<=o)throw Error(V(301));o+=1,_e=Re=null,t.updateQueue=null,Oi.current=Uf,e=n(r,a)}while(Dr)}if(Oi.current=ca,t=Re!==null&&Re.next!==null,Ln=0,_e=Re=Ce=null,da=!1,t)throw Error(V(300));return e}function Dl(){var e=ei!==0;return ei=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?Ce.memoizedState=_e=e:_e=_e.next=e,_e}function vt(){if(Re===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=_e===null?Ce.memoizedState:_e.next;if(t!==null)_e=t,Re=e;else{if(e===null)throw Error(V(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},_e===null?Ce.memoizedState=_e=e:_e=_e.next=e}return _e}function ti(e,t){return typeof t=="function"?t(e):t}function Za(e){var t=vt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Re,a=r.baseQueue,o=n.pending;if(o!==null){if(a!==null){var l=a.next;a.next=o.next,o.next=l}r.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,r=r.baseState;var f=l=null,u=null,b=o;do{var R=b.lane;if((Ln&R)===R)u!==null&&(u=u.next={lane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),r=b.hasEagerState?b.eagerState:e(r,b.action);else{var M={lane:R,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null};u===null?(f=u=M,l=r):u=u.next=M,Ce.lanes|=R,Rn|=R}b=b.next}while(b!==null&&b!==o);u===null?l=r:u.next=f,Et(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do o=a.lane,Ce.lanes|=o,Rn|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function eo(e){var t=vt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do o=e(o,l.action),l=l.next;while(l!==a);Et(o,t.memoizedState)||(tt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Rc(){}function Fc(e,t){var n=Ce,r=vt(),a=t(),o=!Et(r.memoizedState,a);if(o&&(r.memoizedState=a,tt=!0),r=r.queue,Ml(Mc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,ni(9,Dc.bind(null,n,r,a,t),void 0,null),De===null)throw Error(V(349));Ln&30||_c(n,t,a)}return a}function _c(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Dc(e,t,n,r){t.value=n,t.getSnapshot=r,Oc(t)&&Ac(e)}function Mc(e,t,n){return n(function(){Oc(t)&&Ac(e)})}function Oc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function Ac(e){var t=Vt(e,1);t!==null&&zt(t,e,1,-1)}function $s(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:e},t.queue=e,e=e.dispatch=Bf.bind(null,Ce,e),[t.memoizedState,e]}function ni(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Bc(){return vt().memoizedState}function Ai(e,t,n,r){var a=Lt();Ce.flags|=e,a.memoizedState=ni(1|t,n,void 0,r===void 0?null:r)}function Sa(e,t,n,r){var a=vt();r=r===void 0?null:r;var o=void 0;if(Re!==null){var l=Re.memoizedState;if(o=l.destroy,r!==null&&Fl(r,l.deps)){a.memoizedState=ni(t,n,o,r);return}}Ce.flags|=e,a.memoizedState=ni(1|t,n,o,r)}function Vs(e,t){return Ai(8390656,8,e,t)}function Ml(e,t){return Sa(2048,8,e,t)}function Wc(e,t){return Sa(4,2,e,t)}function Hc(e,t){return Sa(4,4,e,t)}function Uc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $c(e,t,n){return n=n!=null?n.concat([e]):null,Sa(4,4,Uc.bind(null,t,e),n)}function Ol(){}function Vc(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yc(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Kc(e,t,n){return Ln&21?(Et(n,t)||(n=Xd(),Ce.lanes|=n,Rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n)}function Of(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=Xa.transition;Xa.transition={};try{e(!1),t()}finally{me=n,Xa.transition=r}}function Qc(){return vt().memoizedState}function Af(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gc(e))qc(t,n);else if(n=Ic(e,t,n,r),n!==null){var a=Ge();zt(n,e,r,a),Jc(n,t,r)}}function Bf(e,t,n){var r=un(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gc(e))qc(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,f=o(l,n);if(a.hasEagerState=!0,a.eagerState=f,Et(f,l)){var u=t.interleaved;u===null?(a.next=a,Tl(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}finally{}n=Ic(e,t,a,r),n!==null&&(a=Ge(),zt(n,e,r,a),Jc(n,t,r))}}function Gc(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function qc(e,t){Dr=da=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ml(e,n)}}var ca={readContext:xt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},Wf={readContext:xt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:Vs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ai(4194308,4,Uc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ai(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ai(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Af.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:$s,useDebugValue:Ol,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=$s(!1),t=e[0];return e=Of.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ce,a=Lt();if(Se){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),De===null)throw Error(V(349));Ln&30||_c(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Vs(Mc.bind(null,r,o,e),[e]),r.flags|=2048,ni(9,Dc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Lt(),t=De.identifierPrefix;if(Se){var n=Wt,r=Bt;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ei++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Mf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hf={readContext:xt,useCallback:Vc,useContext:xt,useEffect:Ml,useImperativeHandle:$c,useInsertionEffect:Wc,useLayoutEffect:Hc,useMemo:Yc,useReducer:Za,useRef:Bc,useState:function(){return Za(ti)},useDebugValue:Ol,useDeferredValue:function(e){var t=vt();return Kc(t,Re.memoizedState,e)},useTransition:function(){var e=Za(ti)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Rc,useSyncExternalStore:Fc,useId:Qc,unstable_isNewReconciler:!1},Uf={readContext:xt,useCallback:Vc,useContext:xt,useEffect:Ml,useImperativeHandle:$c,useInsertionEffect:Wc,useLayoutEffect:Hc,useMemo:Yc,useReducer:eo,useRef:Bc,useState:function(){return eo(ti)},useDebugValue:Ol,useDeferredValue:function(e){var t=vt();return Re===null?t.memoizedState=e:Kc(t,Re.memoizedState,e)},useTransition:function(){var e=eo(ti)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Rc,useSyncExternalStore:Fc,useId:Qc,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=Ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Wo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ja={isMounted:function(e){return(e=e._reactInternals)?Dn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),a=un(e),o=Ht(r,a);o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,a),t!==null&&(zt(t,e,a,r),Mi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),a=un(e),o=Ht(r,a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,a),t!==null&&(zt(t,e,a,r),Mi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=un(e),a=Ht(n,r);a.tag=2,t!=null&&(a.callback=t),t=dn(e,a,r),t!==null&&(zt(t,e,r,n),Mi(t,e,r))}};function Ys(e,t,n,r,a,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Qr(n,r)||!Qr(a,o):!0}function Xc(e,t,n){var r=!1,a=gn,o=t.contextType;return typeof o=="object"&&o!==null?o=xt(o):(a=rt(t)?In:$e.current,r=t.contextTypes,o=(r=r!=null)?lr(e,a):gn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ja,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ja.enqueueReplaceState(t,t.state,null)}function Ho(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Il(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=xt(o):(o=rt(t)?In:$e.current,a.context=lr(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Wo(e,t,o,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ja.enqueueReplaceState(a,a.state,null),la(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,t){try{var n="",r=t;do n+=hp(r),r=r.return;while(r);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function to(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Uo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $f=typeof WeakMap=="function"?WeakMap:Map;function Zc(e,t,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pa||(pa=!0,Zo=r),Uo(e,t)},n}function eu(e,t,n){n=Ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Uo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Uo(e,t),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Qs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $f;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=ig.bind(null,e,t,n),t.then(e,e))}function Gs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qs(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ht(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e)}var Vf=Kt.ReactCurrentOwner,tt=!1;function Qe(e,t,n,r){t.child=e===null?Tc(t,null,n,r):dr(t,e.child,n,r)}function Js(e,t,n,r,a){n=n.render;var o=t.ref;return ir(t,a),r=_l(e,t,n,r,o,a),n=Dl(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Yt(e,t,a)):(Se&&n&&Sl(t),t.flags|=1,Qe(e,t,r,a),t.child)}function Xs(e,t,n,r,a){if(e===null){var o=n.type;return typeof o=="function"&&!Yl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,tu(e,t,o,r,a)):(e=Ui(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Qr,n(l,r)&&e.ref===t.ref)return Yt(e,t,a)}return t.flags|=1,e=pn(o,r),e.ref=t.ref,e.return=t,t.child=e}function tu(e,t,n,r,a){if(e!==null){var o=e.memoizedProps;if(Qr(o,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=o,(e.lanes&a)!==0)e.flags&131072&&(tt=!0);else return t.lanes=e.lanes,Yt(e,t,a)}return $o(e,t,n,r,a)}function nu(e,t,n){var r=t.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Zn,lt),lt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ye(Zn,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ye(Zn,lt),lt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ye(Zn,lt),lt|=r;return Qe(e,t,a,n),t.child}function ru(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $o(e,t,n,r,a){var o=rt(n)?In:$e.current;return o=lr(t,o),ir(t,a),n=_l(e,t,n,r,o,a),r=Dl(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Yt(e,t,a)):(Se&&r&&Sl(t),t.flags|=1,Qe(e,t,n,a),t.child)}function Zs(e,t,n,r,a){if(rt(n)){var o=!0;na(t)}else o=!1;if(ir(t,a),t.stateNode===null)Bi(e,t),Xc(t,n,r),Ho(t,n,r,a),r=!0;else if(e===null){var l=t.stateNode,f=t.memoizedProps;l.props=f;var u=l.context,b=n.contextType;typeof b=="object"&&b!==null?b=xt(b):(b=rt(n)?In:$e.current,b=lr(t,b));var R=n.getDerivedStateFromProps,M=typeof R=="function"||typeof l.getSnapshotBeforeUpdate=="function";M||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(f!==r||u!==b)&&Ks(t,l,r,b),Zt=!1;var T=t.memoizedState;l.state=T,la(t,r,l,a),u=t.memoizedState,f!==r||T!==u||nt.current||Zt?(typeof R=="function"&&(Wo(t,n,R,r),u=t.memoizedState),(f=Zt||Ys(t,n,f,r,T,u,b))?(M||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=b,r=f):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Pc(e,t),f=t.memoizedProps,b=t.type===t.elementType?f:St(t.type,f),l.props=b,M=t.pendingProps,T=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=xt(u):(u=rt(n)?In:$e.current,u=lr(t,u));var y=n.getDerivedStateFromProps;(R=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(f!==M||T!==u)&&Ks(t,l,r,u),Zt=!1,T=t.memoizedState,l.state=T,la(t,r,l,a);var $=t.memoizedState;f!==M||T!==$||nt.current||Zt?(typeof y=="function"&&(Wo(t,n,y,r),$=t.memoizedState),(b=Zt||Ys(t,n,b,r,T,$,u)||!1)?(R||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,$,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,$,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=$),l.props=r,l.state=$,l.context=u,r=b):(typeof l.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),r=!1)}return Vo(e,t,n,r,o,a)}function Vo(e,t,n,r,a,o){ru(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&Os(t,n,!1),Yt(e,t,o);r=t.stateNode,Vf.current=t;var f=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=dr(t,e.child,null,o),t.child=dr(t,null,f,o)):Qe(e,t,f,o),t.memoizedState=r.state,a&&Os(t,n,!0),t.child}function iu(e){var t=e.stateNode;t.pendingContext?Ms(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ms(e,t.context,!1),Pl(e,t.containerInfo)}function ed(e,t,n,r,a){return sr(),Cl(a),t.flags|=256,Qe(e,t,n,r),t.child}var Yo={dehydrated:null,treeContext:null,retryLane:0};function Ko(e){return{baseLanes:e,cachePool:null,transitions:null}}function au(e,t,n){var r=t.pendingProps,a=je.current,o=!1,l=(t.flags&128)!==0,f;if((f=l)||(f=e!==null&&e.memoizedState===null?!1:(a&2)!==0),f?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ye(je,a&1),e===null)return Ao(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=za(l,r,0,null),e=Tn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ko(n),t.memoizedState=Yo,e):Al(t,l));if(a=e.memoizedState,a!==null&&(f=a.dehydrated,f!==null))return Yf(e,t,l,r,f,a,n);if(o){o=r.fallback,l=t.mode,a=e.child,f=a.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=pn(a,u),r.subtreeFlags=a.subtreeFlags&14680064),f!==null?o=pn(f,o):(o=Tn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Ko(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Yo,r}return o=e.child,e=o.sibling,r=pn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Al(e,t){return t=za({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ei(e,t,n,r){return r!==null&&Cl(r),dr(t,e.child,null,n),e=Al(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yf(e,t,n,r,a,o,l){if(n)return t.flags&256?(t.flags&=-257,r=to(Error(V(422))),Ei(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=za({mode:"visible",children:r.children},a,0,null),o=Tn(o,a,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&dr(t,e.child,null,l),t.child.memoizedState=Ko(l),t.memoizedState=Yo,o);if(!(t.mode&1))return Ei(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var f=r.dgst;return r=f,o=Error(V(419)),r=to(o,r,void 0),Ei(e,t,l,r)}if(f=(l&e.childLanes)!==0,tt||f){if(r=De,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|l)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Vt(e,a),zt(r,e,a,-1))}return Vl(),r=to(Error(V(421))),Ei(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=ag.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,st=sn(a.nextSibling),dt=t,Se=!0,Ct=null,e!==null&&(ft[gt++]=Bt,ft[gt++]=Wt,ft[gt++]=Pn,Bt=e.id,Wt=e.overflow,Pn=t),t=Al(t,r.children),t.flags|=4096,t)}function td(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Bo(e.return,t,n)}function no(e,t,n,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function ou(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(Qe(e,t,r.children,n),r=je.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&td(e,n,t);else if(e.tag===19)td(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ye(je,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&sa(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),no(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&sa(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}no(t,!0,n,null,o);break;case"together":no(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Kf(e,t,n){switch(t.tag){case 3:iu(t),sr();break;case 5:Lc(t);break;case 1:rt(t.type)&&na(t);break;case 4:Pl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;ye(aa,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ye(je,je.current&1),t.flags|=128,null):n&t.child.childLanes?au(e,t,n):(ye(je,je.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);ye(je,je.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ou(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ye(je,je.current),r)break;return null;case 22:case 23:return t.lanes=0,nu(e,t,n)}return Yt(e,t,n)}var lu,Qo,su,du;lu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qo=function(){};su=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,zn(_t.current);var o=null;switch(n){case"input":a=ho(e,a),r=ho(e,r),o=[];break;case"select":a=Ne({},a,{value:void 0}),r=Ne({},r,{value:void 0}),o=[];break;case"textarea":a=yo(e,a),r=yo(e,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ea)}wo(n,r);var l;n=null;for(b in a)if(!r.hasOwnProperty(b)&&a.hasOwnProperty(b)&&a[b]!=null)if(b==="style"){var f=a[b];for(l in f)f.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else b!=="dangerouslySetInnerHTML"&&b!=="children"&&b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(Wr.hasOwnProperty(b)?o||(o=[]):(o=o||[]).push(b,null));for(b in r){var u=r[b];if(f=a!=null?a[b]:void 0,r.hasOwnProperty(b)&&u!==f&&(u!=null||f!=null))if(b==="style")if(f){for(l in f)!f.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&f[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(b,n)),n=u;else b==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,f=f?f.__html:void 0,u!=null&&f!==u&&(o=o||[]).push(b,u)):b==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(b,""+u):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&(Wr.hasOwnProperty(b)?(u!=null&&b==="onScroll"&&we("scroll",e),o||f===u||(o=[])):(o=o||[]).push(b,u))}n&&(o=o||[]).push("style",n);var b=o;(t.updateQueue=b)&&(t.flags|=4)}};du=function(e,t,n,r){n!==r&&(t.flags|=4)};function jr(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qf(e,t,n){var r=t.pendingProps;switch(jl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return rt(t.type)&&ta(),He(t),null;case 3:return r=t.stateNode,cr(),ke(nt),ke($e),Rl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ni(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ct!==null&&(nl(Ct),Ct=null))),Qo(e,t),He(t),null;case 5:Ll(t);var a=zn(Zr.current);if(n=t.type,e!==null&&t.stateNode!=null)su(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return He(t),null}if(e=zn(_t.current),Ni(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Rt]=t,r[Jr]=o,e=(t.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(a=0;a<Ir.length;a++)we(Ir[a],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":cs(r,o),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},we("invalid",r);break;case"textarea":ps(r,o),we("invalid",r)}wo(n,o),a=null;for(var l in o)if(o.hasOwnProperty(l)){var f=o[l];l==="children"?typeof f=="string"?r.textContent!==f&&(o.suppressHydrationWarning!==!0&&Ci(r.textContent,f,e),a=["children",f]):typeof f=="number"&&r.textContent!==""+f&&(o.suppressHydrationWarning!==!0&&Ci(r.textContent,f,e),a=["children",""+f]):Wr.hasOwnProperty(l)&&f!=null&&l==="onScroll"&&we("scroll",r)}switch(n){case"input":xi(r),us(r,o,!0);break;case"textarea":xi(r),fs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ea)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Md(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Rt]=t,e[Jr]=r,lu(e,t,!1,!1),t.stateNode=e;e:{switch(l=ko(n,r),n){case"dialog":we("cancel",e),we("close",e),a=r;break;case"iframe":case"object":case"embed":we("load",e),a=r;break;case"video":case"audio":for(a=0;a<Ir.length;a++)we(Ir[a],e);a=r;break;case"source":we("error",e),a=r;break;case"img":case"image":case"link":we("error",e),we("load",e),a=r;break;case"details":we("toggle",e),a=r;break;case"input":cs(e,r),a=ho(e,r),we("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=Ne({},r,{value:void 0}),we("invalid",e);break;case"textarea":ps(e,r),a=yo(e,r),we("invalid",e);break;default:a=r}wo(n,a),f=a;for(o in f)if(f.hasOwnProperty(o)){var u=f[o];o==="style"?Bd(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Od(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Hr(e,u):typeof u=="number"&&Hr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Wr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&we("scroll",e):u!=null&&dl(e,o,u,l))}switch(n){case"input":xi(e),us(e,r,!1);break;case"textarea":xi(e),fs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?er(e,!!r.multiple,o,!1):r.defaultValue!=null&&er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ea)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)du(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=zn(Zr.current),zn(_t.current),Ni(t)){if(r=t.stateNode,n=t.memoizedProps,r[Rt]=t,(o=r.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:Ci(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ci(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=t,t.stateNode=r}return He(t),null;case 13:if(ke(je),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&st!==null&&t.mode&1&&!(t.flags&128))zc(),sr(),t.flags|=98560,o=!1;else if(o=Ni(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[Rt]=t}else sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),o=!1}else Ct!==null&&(nl(Ct),Ct=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||je.current&1?Fe===0&&(Fe=3):Vl())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return cr(),Qo(e,t),e===null&&Gr(t.stateNode.containerInfo),He(t),null;case 10:return El(t.type._context),He(t),null;case 17:return rt(t.type)&&ta(),He(t),null;case 19:if(ke(je),o=t.memoizedState,o===null)return He(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)jr(o,!1);else{if(Fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=sa(e),l!==null){for(t.flags|=128,jr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ye(je,je.current&1|2),t.child}e=e.sibling}o.tail!==null&&Te()>pr&&(t.flags|=128,r=!0,jr(o,!1),t.lanes=4194304)}else{if(!r)if(e=sa(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Se)return He(t),null}else 2*Te()-o.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,r=!0,jr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Te(),t.sibling=null,n=je.current,ye(je,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return $l(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?lt&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function Gf(e,t){switch(jl(t),t.tag){case 1:return rt(t.type)&&ta(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cr(),ke(nt),ke($e),Rl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ll(t),null;case 13:if(ke(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(je),null;case 4:return cr(),null;case 10:return El(t.type._context),null;case 22:case 23:return $l(),null;case 24:return null;default:return null}}var Ti=!1,Ue=!1,qf=typeof WeakSet=="function"?WeakSet:Set,te=null;function Xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function Go(e,t,n){try{n()}catch(r){ze(e,t,r)}}var nd=!1;function Jf(e,t){if(Lo=Ji,e=gc(),kl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,f=-1,u=-1,b=0,R=0,M=e,T=null;t:for(;;){for(var y;M!==n||a!==0&&M.nodeType!==3||(f=l+a),M!==o||r!==0&&M.nodeType!==3||(u=l+r),M.nodeType===3&&(l+=M.nodeValue.length),(y=M.firstChild)!==null;)T=M,M=y;for(;;){if(M===e)break t;if(T===n&&++b===a&&(f=l),T===o&&++R===r&&(u=l),(y=M.nextSibling)!==null)break;M=T,T=M.parentNode}M=y}n=f===-1||u===-1?null:{start:f,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ro={focusedElem:e,selectionRange:n},Ji=!1,te=t;te!==null;)if(t=te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,te=e;else for(;te!==null;){t=te;try{var $=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if($!==null){var Y=$.memoizedProps,xe=$.memoizedState,k=t.stateNode,v=k.getSnapshotBeforeUpdate(t.elementType===t.type?Y:St(t.type,Y),xe);k.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var j=t.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(U){ze(t,t.return,U)}if(e=t.sibling,e!==null){e.return=t.return,te=e;break}te=t.return}return $=nd,nd=!1,$}function Mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&Go(t,n,o)}a=a.next}while(a!==r)}}function Ca(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function qo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cu(e){var t=e.alternate;t!==null&&(e.alternate=null,cu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[Jr],delete t[Do],delete t[Rf],delete t[Ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uu(e){return e.tag===5||e.tag===3||e.tag===4}function rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ea));else if(r!==4&&(e=e.child,e!==null))for(Jo(e,t,n),e=e.sibling;e!==null;)Jo(e,t,n),e=e.sibling}function Xo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xo(e,t,n),e=e.sibling;e!==null;)Xo(e,t,n),e=e.sibling}var Me=null,jt=!1;function Jt(e,t,n){for(n=n.child;n!==null;)pu(e,t,n),n=n.sibling}function pu(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(xa,n)}catch{}switch(n.tag){case 5:Ue||Xn(n,t);case 6:var r=Me,a=jt;Me=null,Jt(e,t,n),Me=r,jt=a,Me!==null&&(jt?(e=Me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(jt?(e=Me,n=n.stateNode,e.nodeType===8?Ga(e.parentNode,n):e.nodeType===1&&Ga(e,n),Yr(e)):Ga(Me,n.stateNode));break;case 4:r=Me,a=jt,Me=n.stateNode.containerInfo,jt=!0,Jt(e,t,n),Me=r,jt=a;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Go(n,t,l),a=a.next}while(a!==r)}Jt(e,t,n);break;case 1:if(!Ue&&(Xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(f){ze(n,t,f)}Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,Jt(e,t,n),Ue=r):Jt(e,t,n);break;default:Jt(e,t,n)}}function id(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qf),t.forEach(function(r){var a=og.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function bt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,l=t,f=l;e:for(;f!==null;){switch(f.tag){case 5:Me=f.stateNode,jt=!1;break e;case 3:Me=f.stateNode.containerInfo,jt=!0;break e;case 4:Me=f.stateNode.containerInfo,jt=!0;break e}f=f.return}if(Me===null)throw Error(V(160));pu(o,l,a),Me=null,jt=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(b){ze(a,t,b)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fu(t,e),t=t.sibling}function fu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),Pt(e),r&4){try{Mr(3,e,e.return),Ca(3,e)}catch(Y){ze(e,e.return,Y)}try{Mr(5,e,e.return)}catch(Y){ze(e,e.return,Y)}}break;case 1:bt(t,e),Pt(e),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(bt(t,e),Pt(e),r&512&&n!==null&&Xn(n,n.return),e.flags&32){var a=e.stateNode;try{Hr(a,"")}catch(Y){ze(e,e.return,Y)}}if(r&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,f=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{f==="input"&&o.type==="radio"&&o.name!=null&&_d(a,o),ko(f,l);var b=ko(f,o);for(l=0;l<u.length;l+=2){var R=u[l],M=u[l+1];R==="style"?Bd(a,M):R==="dangerouslySetInnerHTML"?Od(a,M):R==="children"?Hr(a,M):dl(a,R,M,b)}switch(f){case"input":xo(a,o);break;case"textarea":Dd(a,o);break;case"select":var T=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?er(a,!!o.multiple,y,!1):T!==!!o.multiple&&(o.defaultValue!=null?er(a,!!o.multiple,o.defaultValue,!0):er(a,!!o.multiple,o.multiple?[]:"",!1))}a[Jr]=o}catch(Y){ze(e,e.return,Y)}}break;case 6:if(bt(t,e),Pt(e),r&4){if(e.stateNode===null)throw Error(V(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(Y){ze(e,e.return,Y)}}break;case 3:if(bt(t,e),Pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(Y){ze(e,e.return,Y)}break;case 4:bt(t,e),Pt(e);break;case 13:bt(t,e),Pt(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Hl=Te())),r&4&&id(e);break;case 22:if(R=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(b=Ue)||R,bt(t,e),Ue=b):bt(t,e),Pt(e),r&8192){if(b=e.memoizedState!==null,(e.stateNode.isHidden=b)&&!R&&e.mode&1)for(te=e,R=e.child;R!==null;){for(M=te=R;te!==null;){switch(T=te,y=T.child,T.tag){case 0:case 11:case 14:case 15:Mr(4,T,T.return);break;case 1:Xn(T,T.return);var $=T.stateNode;if(typeof $.componentWillUnmount=="function"){r=T,n=T.return;try{t=r,$.props=t.memoizedProps,$.state=t.memoizedState,$.componentWillUnmount()}catch(Y){ze(r,n,Y)}}break;case 5:Xn(T,T.return);break;case 22:if(T.memoizedState!==null){od(M);continue}}y!==null?(y.return=T,te=y):od(M)}R=R.sibling}e:for(R=null,M=e;;){if(M.tag===5){if(R===null){R=M;try{a=M.stateNode,b?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(f=M.stateNode,u=M.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,f.style.display=Ad("display",l))}catch(Y){ze(e,e.return,Y)}}}else if(M.tag===6){if(R===null)try{M.stateNode.nodeValue=b?"":M.memoizedProps}catch(Y){ze(e,e.return,Y)}}else if((M.tag!==22&&M.tag!==23||M.memoizedState===null||M===e)&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===e)break e;for(;M.sibling===null;){if(M.return===null||M.return===e)break e;R===M&&(R=null),M=M.return}R===M&&(R=null),M.sibling.return=M.return,M=M.sibling}}break;case 19:bt(t,e),Pt(e),r&4&&id(e);break;case 21:break;default:bt(t,e),Pt(e)}}function Pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(uu(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Hr(a,""),r.flags&=-33);var o=rd(e);Xo(e,o,a);break;case 3:case 4:var l=r.stateNode.containerInfo,f=rd(e);Jo(e,f,l);break;default:throw Error(V(161))}}catch(u){ze(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xf(e,t,n){te=e,gu(e)}function gu(e,t,n){for(var r=(e.mode&1)!==0;te!==null;){var a=te,o=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||Ti;if(!l){var f=a.alternate,u=f!==null&&f.memoizedState!==null||Ue;f=Ti;var b=Ue;if(Ti=l,(Ue=u)&&!b)for(te=a;te!==null;)l=te,u=l.child,l.tag===22&&l.memoizedState!==null?ld(a):u!==null?(u.return=l,te=u):ld(a);for(;o!==null;)te=o,gu(o),o=o.sibling;te=a,Ti=f,Ue=b}ad(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,te=o):ad(e)}}function ad(e){for(;te!==null;){var t=te;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||Ca(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Us(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Us(t,l,n)}break;case 5:var f=t.stateNode;if(n===null&&t.flags&4){n=f;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var b=t.alternate;if(b!==null){var R=b.memoizedState;if(R!==null){var M=R.dehydrated;M!==null&&Yr(M)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}Ue||t.flags&512&&qo(t)}catch(T){ze(t,t.return,T)}}if(t===e){te=null;break}if(n=t.sibling,n!==null){n.return=t.return,te=n;break}te=t.return}}function od(e){for(;te!==null;){var t=te;if(t===e){te=null;break}var n=t.sibling;if(n!==null){n.return=t.return,te=n;break}te=t.return}}function ld(e){for(;te!==null;){var t=te;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ca(4,t)}catch(u){ze(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(u){ze(t,a,u)}}var o=t.return;try{qo(t)}catch(u){ze(t,o,u)}break;case 5:var l=t.return;try{qo(t)}catch(u){ze(t,l,u)}}}catch(u){ze(t,t.return,u)}if(t===e){te=null;break}var f=t.sibling;if(f!==null){f.return=t.return,te=f;break}te=t.return}}var Zf=Math.ceil,ua=Kt.ReactCurrentDispatcher,Bl=Kt.ReactCurrentOwner,ht=Kt.ReactCurrentBatchConfig,ge=0,De=null,Pe=null,Oe=0,lt=0,Zn=hn(0),Fe=0,ri=null,Rn=0,Na=0,Wl=0,Or=null,et=null,Hl=0,pr=1/0,Ot=null,pa=!1,Zo=null,cn=null,Ii=!1,rn=null,fa=0,Ar=0,el=null,Wi=-1,Hi=0;function Ge(){return ge&6?Te():Wi!==-1?Wi:Wi=Te()}function un(e){return e.mode&1?ge&2&&Oe!==0?Oe&-Oe:Df.transition!==null?(Hi===0&&(Hi=Xd()),Hi):(e=me,e!==0||(e=window.event,e=e===void 0?16:ac(e.type)),e):1}function zt(e,t,n,r){if(50<Ar)throw Ar=0,el=null,Error(V(185));ai(e,n,r),(!(ge&2)||e!==De)&&(e===De&&(!(ge&2)&&(Na|=n),Fe===4&&tn(e,Oe)),it(e,r),n===1&&ge===0&&!(t.mode&1)&&(pr=Te()+500,ka&&xn()))}function it(e,t){var n=e.callbackNode;_p(e,t);var r=qi(e,e===De?Oe:0);if(r===0)n!==null&&hs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hs(n),t===1)e.tag===0?_f(sd.bind(null,e)):jc(sd.bind(null,e)),Pf(function(){!(ge&6)&&xn()}),n=null;else{switch(Zd(r)){case 1:n=gl;break;case 4:n=qd;break;case 16:n=Gi;break;case 536870912:n=Jd;break;default:n=Gi}n=ku(n,mu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mu(e,t){if(Wi=-1,Hi=0,ge&6)throw Error(V(327));var n=e.callbackNode;if(ar()&&e.callbackNode!==n)return null;var r=qi(e,e===De?Oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ga(e,r);else{t=r;var a=ge;ge|=2;var o=xu();(De!==e||Oe!==t)&&(Ot=null,pr=Te()+500,En(e,t));do try{ng();break}catch(f){hu(e,f)}while(!0);zl(),ua.current=o,ge=a,Pe!==null?t=0:(De=null,Oe=0,t=Fe)}if(t!==0){if(t===2&&(a=zo(e),a!==0&&(r=a,t=tl(e,a))),t===1)throw n=ri,En(e,0),tn(e,r),it(e,Te()),n;if(t===6)tn(e,r);else{if(a=e.current.alternate,!(r&30)&&!eg(a)&&(t=ga(e,r),t===2&&(o=zo(e),o!==0&&(r=o,t=tl(e,o))),t===1))throw n=ri,En(e,0),tn(e,r),it(e,Te()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:jn(e,et,Ot);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=Hl+500-Te(),10<t)){if(qi(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=_o(jn.bind(null,e,et,Ot),t);break}jn(e,et,Ot);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-Nt(r);o=1<<l,l=t[l],l>a&&(a=l),r&=~o}if(r=a,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zf(r/1960))-r,10<r){e.timeoutHandle=_o(jn.bind(null,e,et,Ot),r);break}jn(e,et,Ot);break;case 5:jn(e,et,Ot);break;default:throw Error(V(329))}}}return it(e,Te()),e.callbackNode===n?mu.bind(null,e):null}function tl(e,t){var n=Or;return e.current.memoizedState.isDehydrated&&(En(e,t).flags|=256),e=ga(e,t),e!==2&&(t=et,et=n,t!==null&&nl(t)),e}function nl(e){et===null?et=e:et.push.apply(et,e)}function eg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!Et(o(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~Wl,t&=~Na,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function sd(e){if(ge&6)throw Error(V(327));ar();var t=qi(e,0);if(!(t&1))return it(e,Te()),null;var n=ga(e,t);if(e.tag!==0&&n===2){var r=zo(e);r!==0&&(t=r,n=tl(e,r))}if(n===1)throw n=ri,En(e,0),tn(e,t),it(e,Te()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jn(e,et,Ot),it(e,Te()),null}function Ul(e,t){var n=ge;ge|=1;try{return e(t)}finally{ge=n,ge===0&&(pr=Te()+500,ka&&xn())}}function Fn(e){rn!==null&&rn.tag===0&&!(ge&6)&&ar();var t=ge;ge|=1;var n=ht.transition,r=me;try{if(ht.transition=null,me=1,e)return e()}finally{me=r,ht.transition=n,ge=t,!(ge&6)&&xn()}}function $l(){lt=Zn.current,ke(Zn)}function En(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,If(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(jl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ta();break;case 3:cr(),ke(nt),ke($e),Rl();break;case 5:Ll(r);break;case 4:cr();break;case 13:ke(je);break;case 19:ke(je);break;case 10:El(r.type._context);break;case 22:case 23:$l()}n=n.return}if(De=e,Pe=e=pn(e.current,null),Oe=lt=t,Fe=0,ri=null,Wl=Na=Rn=0,et=Or=null,Nn!==null){for(t=0;t<Nn.length;t++)if(n=Nn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=a,r.next=l}n.pending=r}Nn=null}return e}function hu(e,t){do{var n=Pe;try{if(zl(),Oi.current=ca,da){for(var r=Ce.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}da=!1}if(Ln=0,_e=Re=Ce=null,Dr=!1,ei=0,Bl.current=null,n===null||n.return===null){Fe=1,ri=t,Pe=null;break}e:{var o=e,l=n.return,f=n,u=t;if(t=Oe,f.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var b=u,R=f,M=R.tag;if(!(R.mode&1)&&(M===0||M===11||M===15)){var T=R.alternate;T?(R.updateQueue=T.updateQueue,R.memoizedState=T.memoizedState,R.lanes=T.lanes):(R.updateQueue=null,R.memoizedState=null)}var y=Gs(l);if(y!==null){y.flags&=-257,qs(y,l,f,o,t),y.mode&1&&Qs(o,b,t),t=y,u=b;var $=t.updateQueue;if($===null){var Y=new Set;Y.add(u),t.updateQueue=Y}else $.add(u);break e}else{if(!(t&1)){Qs(o,b,t),Vl();break e}u=Error(V(426))}}else if(Se&&f.mode&1){var xe=Gs(l);if(xe!==null){!(xe.flags&65536)&&(xe.flags|=256),qs(xe,l,f,o,t),Cl(ur(u,f));break e}}o=u=ur(u,f),Fe!==4&&(Fe=2),Or===null?Or=[o]:Or.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var k=Zc(o,u,t);Hs(o,k);break e;case 1:f=u;var v=o.type,j=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(cn===null||!cn.has(j)))){o.flags|=65536,t&=-t,o.lanes|=t;var U=eu(o,f,t);Hs(o,U);break e}}o=o.return}while(o!==null)}yu(n)}catch(Z){t=Z,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function xu(){var e=ua.current;return ua.current=ca,e===null?ca:e}function Vl(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),De===null||!(Rn&268435455)&&!(Na&268435455)||tn(De,Oe)}function ga(e,t){var n=ge;ge|=2;var r=xu();(De!==e||Oe!==t)&&(Ot=null,En(e,t));do try{tg();break}catch(a){hu(e,a)}while(!0);if(zl(),ge=n,ua.current=r,Pe!==null)throw Error(V(261));return De=null,Oe=0,Fe}function tg(){for(;Pe!==null;)vu(Pe)}function ng(){for(;Pe!==null&&!Np();)vu(Pe)}function vu(e){var t=wu(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?yu(e):Pe=t,Bl.current=null}function yu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Gf(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Pe=null;return}}else if(n=Qf(n,t,lt),n!==null){Pe=n;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Fe===0&&(Fe=5)}function jn(e,t,n){var r=me,a=ht.transition;try{ht.transition=null,me=1,rg(e,t,n,r)}finally{ht.transition=a,me=r}return null}function rg(e,t,n,r){do ar();while(rn!==null);if(ge&6)throw Error(V(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Dp(e,o),e===De&&(Pe=De=null,Oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ii||(Ii=!0,ku(Gi,function(){return ar(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ht.transition,ht.transition=null;var l=me;me=1;var f=ge;ge|=4,Bl.current=null,Jf(e,n),fu(n,e),Sf(Ro),Ji=!!Lo,Ro=Lo=null,e.current=n,Xf(n),zp(),ge=f,me=l,ht.transition=o}else e.current=n;if(Ii&&(Ii=!1,rn=e,fa=a),o=e.pendingLanes,o===0&&(cn=null),Ip(n.stateNode),it(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(pa)throw pa=!1,e=Zo,Zo=null,e;return fa&1&&e.tag!==0&&ar(),o=e.pendingLanes,o&1?e===el?Ar++:(Ar=0,el=e):Ar=0,xn(),null}function ar(){if(rn!==null){var e=Zd(fa),t=ht.transition,n=me;try{if(ht.transition=null,me=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,fa=0,ge&6)throw Error(V(331));var a=ge;for(ge|=4,te=e.current;te!==null;){var o=te,l=o.child;if(te.flags&16){var f=o.deletions;if(f!==null){for(var u=0;u<f.length;u++){var b=f[u];for(te=b;te!==null;){var R=te;switch(R.tag){case 0:case 11:case 15:Mr(8,R,o)}var M=R.child;if(M!==null)M.return=R,te=M;else for(;te!==null;){R=te;var T=R.sibling,y=R.return;if(cu(R),R===b){te=null;break}if(T!==null){T.return=y,te=T;break}te=y}}}var $=o.alternate;if($!==null){var Y=$.child;if(Y!==null){$.child=null;do{var xe=Y.sibling;Y.sibling=null,Y=xe}while(Y!==null)}}te=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,te=l;else e:for(;te!==null;){if(o=te,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Mr(9,o,o.return)}var k=o.sibling;if(k!==null){k.return=o.return,te=k;break e}te=o.return}}var v=e.current;for(te=v;te!==null;){l=te;var j=l.child;if(l.subtreeFlags&2064&&j!==null)j.return=l,te=j;else e:for(l=v;te!==null;){if(f=te,f.flags&2048)try{switch(f.tag){case 0:case 11:case 15:Ca(9,f)}}catch(Z){ze(f,f.return,Z)}if(f===l){te=null;break e}var U=f.sibling;if(U!==null){U.return=f.return,te=U;break e}te=f.return}}if(ge=a,xn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(xa,e)}catch{}r=!0}return r}finally{me=n,ht.transition=t}}return!1}function dd(e,t,n){t=ur(n,t),t=Zc(e,t,1),e=dn(e,t,1),t=Ge(),e!==null&&(ai(e,1,t),it(e,t))}function ze(e,t,n){if(e.tag===3)dd(e,e,n);else for(;t!==null;){if(t.tag===3){dd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=ur(n,e),e=eu(t,e,1),t=dn(t,e,1),e=Ge(),t!==null&&(ai(t,1,e),it(t,e));break}}t=t.return}}function ig(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(Oe&n)===n&&(Fe===4||Fe===3&&(Oe&130023424)===Oe&&500>Te()-Hl?En(e,0):Wl|=n),it(e,t)}function bu(e,t){t===0&&(e.mode&1?(t=bi,bi<<=1,!(bi&130023424)&&(bi=4194304)):t=1);var n=Ge();e=Vt(e,t),e!==null&&(ai(e,t,n),it(e,n))}function ag(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bu(e,n)}function og(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),bu(e,n)}var wu;wu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return tt=!1,Kf(e,t,n);tt=!!(e.flags&131072)}else tt=!1,Se&&t.flags&1048576&&Cc(t,ia,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bi(e,t),e=t.pendingProps;var a=lr(t,$e.current);ir(t,n),a=_l(null,t,r,e,a,n);var o=Dl();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(o=!0,na(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Il(t),a.updater=ja,t.stateNode=a,a._reactInternals=t,Ho(t,r,e,n),t=Vo(null,t,r,!0,o,n)):(t.tag=0,Se&&o&&Sl(t),Qe(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bi(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=sg(r),e=St(r,e),a){case 0:t=$o(null,t,r,e,n);break e;case 1:t=Zs(null,t,r,e,n);break e;case 11:t=Js(null,t,r,e,n);break e;case 14:t=Xs(null,t,r,St(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:St(r,a),$o(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:St(r,a),Zs(e,t,r,a,n);case 3:e:{if(iu(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,a=o.element,Pc(e,t),la(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=ur(Error(V(423)),t),t=ed(e,t,r,n,a);break e}else if(r!==a){a=ur(Error(V(424)),t),t=ed(e,t,r,n,a);break e}else for(st=sn(t.stateNode.containerInfo.firstChild),dt=t,Se=!0,Ct=null,n=Tc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sr(),r===a){t=Yt(e,t,n);break e}Qe(e,t,r,n)}t=t.child}return t;case 5:return Lc(t),e===null&&Ao(t),r=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,l=a.children,Fo(r,a)?l=null:o!==null&&Fo(r,o)&&(t.flags|=32),ru(e,t),Qe(e,t,l,n),t.child;case 6:return e===null&&Ao(t),null;case 13:return au(e,t,n);case 4:return Pl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dr(t,null,r,n):Qe(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:St(r,a),Js(e,t,r,a,n);case 7:return Qe(e,t,t.pendingProps,n),t.child;case 8:return Qe(e,t,t.pendingProps.children,n),t.child;case 12:return Qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,l=a.value,ye(aa,r._currentValue),r._currentValue=l,o!==null)if(Et(o.value,l)){if(o.children===a.children&&!nt.current){t=Yt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var f=o.dependencies;if(f!==null){l=o.child;for(var u=f.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Ht(-1,n&-n),u.tag=2;var b=o.updateQueue;if(b!==null){b=b.shared;var R=b.pending;R===null?u.next=u:(u.next=R.next,R.next=u),b.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Bo(o.return,n,t),f.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(V(341));l.lanes|=n,f=l.alternate,f!==null&&(f.lanes|=n),Bo(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Qe(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,ir(t,n),a=xt(a),r=r(a),t.flags|=1,Qe(e,t,r,n),t.child;case 14:return r=t.type,a=St(r,t.pendingProps),a=St(r.type,a),Xs(e,t,r,a,n);case 15:return tu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:St(r,a),Bi(e,t),t.tag=1,rt(r)?(e=!0,na(t)):e=!1,ir(t,n),Xc(t,r,a),Ho(t,r,a,n),Vo(null,t,r,!0,e,n);case 19:return ou(e,t,n);case 22:return nu(e,t,n)}throw Error(V(156,t.tag))};function ku(e,t){return Gd(e,t)}function lg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new lg(e,t,n,r)}function Yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sg(e){if(typeof e=="function")return Yl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ul)return 11;if(e===pl)return 14}return 2}function pn(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ui(e,t,n,r,a,o){var l=2;if(r=e,typeof e=="function")Yl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Un:return Tn(n.children,a,o,t);case cl:l=8,a|=8;break;case po:return e=mt(12,n,t,a|2),e.elementType=po,e.lanes=o,e;case fo:return e=mt(13,n,t,a),e.elementType=fo,e.lanes=o,e;case go:return e=mt(19,n,t,a),e.elementType=go,e.lanes=o,e;case Ld:return za(n,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Id:l=10;break e;case Pd:l=9;break e;case ul:l=11;break e;case pl:l=14;break e;case Xt:l=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=mt(l,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Tn(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function za(e,t,n,r){return e=mt(22,e,r,t),e.elementType=Ld,e.lanes=n,e.stateNode={isHidden:!1},e}function ro(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function io(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dg(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oa(0),this.expirationTimes=Oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oa(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Kl(e,t,n,r,a,o,l,f,u){return e=new dg(e,t,n,f,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=mt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Il(o),e}function cg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Su(e){if(!e)return gn;e=e._reactInternals;e:{if(Dn(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(rt(n))return Sc(e,n,t)}return t}function ju(e,t,n,r,a,o,l,f,u){return e=Kl(n,r,!0,e,a,o,l,f,u),e.context=Su(null),n=e.current,r=Ge(),a=un(n),o=Ht(r,a),o.callback=t??null,dn(n,o,a),e.current.lanes=a,ai(e,a,r),it(e,r),e}function Ea(e,t,n,r){var a=t.current,o=Ge(),l=un(a);return n=Su(n),t.context===null?t.context=n:t.pendingContext=n,t=Ht(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dn(a,t,l),e!==null&&(zt(e,a,l,o),Mi(e,a,l)),l}function ma(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ql(e,t){cd(e,t),(e=e.alternate)&&cd(e,t)}function ug(){return null}var Cu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gl(e){this._internalRoot=e}Ta.prototype.render=Gl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));Ea(e,t,null,null)};Ta.prototype.unmount=Gl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){Ea(null,e,null,null)}),t[$t]=null}};function Ta(e){this._internalRoot=e}Ta.prototype.unstable_scheduleHydration=function(e){if(e){var t=nc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&ic(e)}};function ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ud(){}function pg(e,t,n,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var b=ma(l);o.call(b)}}var l=ju(t,r,e,0,null,!1,!1,"",ud);return e._reactRootContainer=l,e[$t]=l.current,Gr(e.nodeType===8?e.parentNode:e),Fn(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var f=r;r=function(){var b=ma(u);f.call(b)}}var u=Kl(e,0,!1,null,null,!1,!1,"",ud);return e._reactRootContainer=u,e[$t]=u.current,Gr(e.nodeType===8?e.parentNode:e),Fn(function(){Ea(t,u,n,r)}),u}function Pa(e,t,n,r,a){var o=n._reactRootContainer;if(o){var l=o;if(typeof a=="function"){var f=a;a=function(){var u=ma(l);f.call(u)}}Ea(t,l,e,a)}else l=pg(n,t,e,a,r);return ma(l)}ec=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tr(t.pendingLanes);n!==0&&(ml(t,n|1),it(t,Te()),!(ge&6)&&(pr=Te()+500,xn()))}break;case 13:Fn(function(){var r=Vt(e,1);if(r!==null){var a=Ge();zt(r,e,1,a)}}),Ql(e,1)}};hl=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var n=Ge();zt(t,e,134217728,n)}Ql(e,134217728)}};tc=function(e){if(e.tag===13){var t=un(e),n=Vt(e,t);if(n!==null){var r=Ge();zt(n,e,t,r)}Ql(e,t)}};nc=function(){return me};rc=function(e,t){var n=me;try{return me=e,t()}finally{me=n}};jo=function(e,t,n){switch(t){case"input":if(xo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=wa(r);if(!a)throw Error(V(90));Fd(r),xo(r,a)}}}break;case"textarea":Dd(e,n);break;case"select":t=n.value,t!=null&&er(e,!!n.multiple,t,!1)}};Ud=Ul;$d=Fn;var fg={usingClientEntryPoint:!1,Events:[li,Kn,wa,Wd,Hd,Ul]},Cr={findFiberByHostInstance:Cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gg={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kd(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||ug,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{xa=Pi.inject(gg),Ft=Pi}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fg;ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ql(t))throw Error(V(200));return cg(e,t,null,n)};ut.createRoot=function(e,t){if(!ql(e))throw Error(V(299));var n=!1,r="",a=Cu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Kl(e,1,!1,null,null,n,!1,r,a),e[$t]=t.current,Gr(e.nodeType===8?e.parentNode:e),new Gl(t)};ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=Kd(t),e=e===null?null:e.stateNode,e};ut.flushSync=function(e){return Fn(e)};ut.hydrate=function(e,t,n){if(!Ia(t))throw Error(V(200));return Pa(null,e,t,!0,n)};ut.hydrateRoot=function(e,t,n){if(!ql(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,a=!1,o="",l=Cu;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ju(t,null,e,1,n??null,a,!1,o,l),e[$t]=t.current,Gr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Ta(t)};ut.render=function(e,t,n){if(!Ia(t))throw Error(V(200));return Pa(null,e,t,!1,n)};ut.unmountComponentAtNode=function(e){if(!Ia(e))throw Error(V(40));return e._reactRootContainer?(Fn(function(){Pa(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};ut.unstable_batchedUpdates=Ul;ut.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ia(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return Pa(e,t,n,!1,r)};ut.version="18.3.1-next-f1338f8080-20240426";function Nu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nu)}catch(e){console.error(e)}}Nu(),Nd.exports=ut;var mg=Nd.exports,pd=mg;co.createRoot=pd.createRoot,co.hydrateRoot=pd.hydrateRoot;const hg=`
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

/* ===== HEADER — clean, ohne Kachel ===== */
header{
  display:flex;
  justify-content:flex-end;
  align-items:center;
  gap:12px;
  flex-wrap:wrap;
  padding: 8px 0; /* Kein seitliches Padding, damit es mit dem Content fluchtet */
  margin: 8px 0 0;
  position: relative;
  background: transparent;
  border: none;
  box-shadow: none;
}

/* Wenn im Jahr: Header bleibt auch rechtsbündig */
header.header-with-logo {
  justify-content: flex-end;
}

.who{
  display:flex;
  align-items:center;
  gap:10px;
  color:var(--muted);
  font-size:.9rem;
  flex-wrap:wrap;
}

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

/* ===== JAHR + HOST BUBBLE (kombiniert, groß, zentriert) ===== */
.year-host-bubble {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  padding: 14px 32px 14px 28px;
  background: linear-gradient(145deg, rgba(20, 10, 45, 0.95) 0%, rgba(10, 5, 22, 0.98) 100%);
  border: 1px solid rgba(148, 94, 255, 0.35);
  border-radius: 999px;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.06),
    0 12px 32px rgba(0,0,0,0.5),
    0 0 28px rgba(168,85,247,0.12);
  margin: 0 auto;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  transition: all 0.2s ease;
}
.year-host-bubble:hover {
  border-color: rgba(168, 85, 247, 0.7);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.12),
    0 16px 40px rgba(0,0,0,0.6),
    0 0 36px rgba(168,85,247,0.25);
  transform: translateY(-2px);
}

/* Edles Hover-Popup über dem Jahr */
.year-host-hover-popup {
  position: absolute;
  top: -38px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: rgba(10, 5, 22, 0.95);
  border: 1px solid rgba(148, 94, 255, 0.4);
  padding: 6px 14px;
  border-radius: 8px;
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 700;
  font-family: var(--display);
  letter-spacing: 0.05em;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease;
  box-shadow: 0 4px 16px rgba(0,0,0,0.6);
  white-space: nowrap;
}
.year-host-bubble:hover .year-host-hover-popup {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
.year-host-bubble-empty {
  gap: 14px;
  padding: 14px 28px;
}

/* Jahr als edler Präfix in der Bubble */
.year-host-year {
  font-family: var(--display);
  font-weight: 800;
  font-size: clamp(2.2rem, 4.5vw, 3.4rem);
  letter-spacing: -0.03em;
  line-height: 1;
  background: linear-gradient(135deg, #ffffff 0%, var(--gold) 55%, var(--pink) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 8px rgba(0,0,0,0.4);
  white-space: nowrap;
}

/* Eleganter Trenner zwischen Jahr und Host */
.year-host-divider {
  width: 1px;
  height: 42px;
  background: linear-gradient(to bottom, transparent, rgba(148, 94, 255, 0.5), transparent);
  flex-shrink: 0;
}

/* Flagge im Kreis */
.year-host-flag {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  background: rgba(0,0,0,0.4);
  border-radius: 50%;
  border: 1.5px solid rgba(148, 94, 255, 0.45);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), 0 0 16px rgba(168, 85, 247, 0.25);
  overflow: hidden;
  flex-shrink: 0;
}
.year-host-flag img.flag {
  width: 32px !important;
  height: 22px !important;
  border-radius: 4px !important;
  box-shadow: 0 2px 6px rgba(0,0,0,0.6) !important;
}

/* Land + Stadt rechts vom Trenner */
.year-host-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  line-height: 1.15;
  gap: 2px;
}
.year-host-cc {
  font-family: var(--display);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  color: var(--violet);
  text-transform: uppercase;
  text-shadow: 0 0 8px rgba(168, 85, 247, 0.4);
}
.year-host-city {
  font-family: var(--display);
  font-size: 1.3rem;
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
.home-hero-logo {
  display: block;
  margin: 0 auto;
  height: clamp(90px, 14vw, 170px);
  width: auto;
  max-width: 100%;
  object-fit: contain;
  filter:
    drop-shadow(0 4px 20px rgba(0,0,0,0.5))
    drop-shadow(0 0 24px rgba(255,45,149,0.15))
    drop-shadow(0 0 8px rgba(255,209,102,0.15));
  /* Kein Verzerren, keine harten Kanten */
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
  padding: 10px 18px; /* Flacher */
  border-radius: 14px;
  background: linear-gradient(145deg, rgba(26,14,52,0.95) 0%, rgba(12,6,26,0.98) 100%);
  border: 1px solid rgba(148,94,255,0.2);
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.05), 
    0 4px 12px rgba(0,0,0,0.35);
  display: flex;
  align-items: center;
  gap: 14px;
  text-align: left;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}
.home-action-btn:hover {
  transform: translateY(-2px);
  border-color: rgba(168,85,247,0.45);
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.08), 
    0 8px 20px rgba(0,0,0,0.5), 
    0 0 16px rgba(168,85,247,0.12);
}
.home-action-primary {
  background: linear-gradient(145deg, rgba(70,18,80,0.85) 0%, rgba(25,8,45,0.98) 100%);
  border-color: rgba(255,45,149,0.35);
}
.home-action-primary:hover {
  border-color: rgba(255,45,149,0.6);
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.1), 
    0 8px 20px rgba(0,0,0,0.5), 
    0 0 20px rgba(255,45,149,0.2);
}
.home-action-icon {
  font-size: 1.4rem;
  line-height: 1;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
  border: 1px solid rgba(255,255,255,0.08);
  display: grid;
  place-items: center;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
}
.home-action-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}
.home-action-text b {
  font-family: var(--display);
  font-size: 0.98rem;
  font-weight: 800;
  color: var(--ink);
  letter-spacing: -0.01em;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}
.home-action-text small {
  font-size: 0.75rem;
  color: var(--muted);
  font-weight: 500;
  opacity: 0.9;
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
  /* Einheitliche Breite für alle Tabs, breit genug für "Semi-final 1" */
  width: 130px; 
  text-align: center;
  white-space: nowrap;
  /* overflow: hidden und text-overflow: ellipsis entfernt */
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

/* Ausnahme für die kleinen Steuerungs-Pillen (Points/NQ, Order/Placement) */
.tabs.tabs-small {
  padding: 3px !important;
  gap: 4px !important;
  height: 34px !important; /* Kompakter */
  box-sizing: border-box !important;
}
.tabs.tabs-small button {
  width: auto !important;
  padding: 0 16px !important;
  font-size: 0.82rem !important;
  height: 26px !important; /* Macht die Buttons exakt so hoch wie den Text in den Bubbles */
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  line-height: 1 !important;
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

/* === WINNER (Platz 1) — edler dunkler Gold-Look === */
.row.winner{
  border: 1.5px solid rgba(255, 209, 102, 0.9);
  background:
    linear-gradient(160deg,
      #3a2a10 0%,
      #2b1e0a 35%,
      #1a1106 70%,
      #0d0803 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 230, 150, 0.35),
    inset 0 -2px 5px rgba(0,0,0,0.7),
    0 0 24px rgba(255, 209, 102, 0.5),
    0 0 56px rgba(255, 209, 102, 0.22),
    0 6px 20px rgba(0,0,0,0.6);
}
.row.winner:hover {
  border-color: #fff6cc;
  background:
    linear-gradient(160deg,
      #4a3618 0%,
      #352512 35%,
      #21170a 70%,
      #100a04 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 230, 150, 0.45),
    inset 0 -2px 5px rgba(0,0,0,0.7),
    0 0 32px rgba(255, 209, 102, 0.7),
    0 0 72px rgba(255, 209, 102, 0.3),
    0 8px 24px rgba(0,0,0,0.65);
}
.row.winner::before {
  /* Flagge im Originalfarben-Look (nur etwas satter) */
  opacity: 1;
  filter: saturate(1.15) brightness(1.05);
}
.row.winner .meta b{
  background:linear-gradient(135deg, #ffecb3 0%, #ffd166 40%, #ffae00 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  text-shadow: none;
}
.row.winner .meta > span:first-child {
  color: #fff3d1;
  text-shadow: 0 1px 3px rgba(0,0,0,0.95);
}
.row.winner .no {
  color: var(--gold);
  border-color: rgba(255, 209, 102, 0.7);
  background: linear-gradient(145deg, #3a2a10 0%, #1a1106 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 230, 150, 0.3),
    0 0 14px rgba(255, 209, 102, 0.45);
  opacity: 1;
}
.row.winner .cc-code {
  background: rgba(40, 26, 6, 0.95);
  border-color: rgba(255, 209, 102, 0.4);
  color: #fff3d1;
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
  /* will-change entfernt, um RAM/GPU zu sparen */
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
`;function xg(){const e=document.getElementById("esc-global-styles");e&&e.remove();const t=document.createElement("style");t.id="esc-global-styles",t.textContent=hg,document.head.appendChild(t)}xg();const vg={apiKey:"AIzaSyBH4kCFQRjnBbd4cJDDuGSxJbRQAnUQWHw",authDomain:"esc-connect-7bdfe.firebaseapp.com",databaseURL:"https://esc-connect-7bdfe-default-rtdb.europe-west1.firebasedatabase.app",projectId:"esc-connect-7bdfe",storageBucket:"esc-connect-7bdfe.firebasestorage.app",messagingSenderId:"432112365589",appId:"1:432112365589:web:9af0cdb510f2380935de1c"},ao={"johnlp1350@gmail.com":{id:"j3",isAdmin:!0},"stahmeln05@gmail.com":{id:"j2",isAdmin:!1},"lucioosy@gmail.com":{id:"j4",isAdmin:!1},"br0k3n.f41ry@gmail.com":{id:"j1",isAdmin:!1}},$i=[["af","Afghanistan"],["al","Albania"],["am","Armenia"],["au","Australia"],["at","Austria"],["az","Azerbaijan"],["bh","Bahrain"],["bd","Bangladesh"],["by","Belarus"],["be","Belgium"],["bt","Bhutan"],["ba","Bosnia and Herzegovina"],["bn","Brunei"],["bg","Bulgaria"],["kh","Cambodia"],["ca","Canada"],["cn","China"],["hr","Croatia"],["cy","Cyprus"],["cz","Czechia"],["dk","Denmark"],["ee","Estonia"],["fi","Finland"],["fr","France"],["ge","Georgia"],["de","Germany"],["gr","Greece"],["hk","Hong Kong"],["hu","Hungary"],["is","Iceland"],["in","India"],["id","Indonesia"],["ir","Iran"],["iq","Iraq"],["ie","Ireland"],["il","Israel"],["it","Italy"],["jp","Japan"],["jo","Jordan"],["kz","Kazakhstan"],["kw","Kuwait"],["kg","Kyrgyzstan"],["la","Laos"],["lb","Lebanon"],["lv","Latvia"],["lt","Lithuania"],["lu","Luxembourg"],["mo","Macau"],["my","Malaysia"],["mv","Maldives"],["mt","Malta"],["md","Moldova"],["mc","Monaco"],["mn","Mongolia"],["me","Montenegro"],["ma","Morocco"],["mm","Myanmar"],["np","Nepal"],["nl","Netherlands"],["nz","New Zealand"],["kp","North Korea"],["mk","North Macedonia"],["no","Norway"],["om","Oman"],["pk","Pakistan"],["ps","Palestine"],["ph","Philippines"],["pl","Poland"],["pt","Portugal"],["qa","Qatar"],["ro","Romania"],["ru","Russia"],["sa","Saudi Arabia"],["sm","San Marino"],["rs","Serbia"],["sg","Singapore"],["sk","Slovakia"],["si","Slovenia"],["kr","South Korea"],["es","Spain"],["lk","Sri Lanka"],["se","Sweden"],["ch","Switzerland"],["sy","Syria"],["tw","Taiwan"],["tj","Tajikistan"],["th","Thailand"],["tr","Türkiye"],["tm","Turkmenistan"],["ua","Ukraine"],["ae","United Arab Emirates"],["gb","United Kingdom"],["uz","Uzbekistan"],["vn","Vietnam"],["ye","Yemen"]],Ke={};for(let e=0;e<$i.length;e++)Ke[$i[e][0]]=$i[e][1];const yg={af:"AFG",al:"ALB",am:"ARM",au:"AUS",at:"AUT",az:"AZE",bh:"BHR",bd:"BGD",by:"BLR",be:"BEL",bt:"BTN",ba:"BIH",bn:"BRN",bg:"BGR",kh:"KHM",ca:"CAN",cn:"CHN",hr:"CRO",cy:"CYP",cz:"CZE",dk:"DNK",ee:"EST",fi:"FIN",fr:"FRA",ge:"GEO",de:"GER",gr:"GRE",hk:"HKG",hu:"HUN",is:"ISL",in:"IND",id:"IDN",ir:"IRN",iq:"IRQ",ie:"IRL",il:"ISR",it:"ITA",jp:"JPN",jo:"JOR",kz:"KAZ",kw:"KWT",kg:"KGZ",la:"LAO",lb:"LBN",lv:"LVA",lt:"LTU",lu:"LUX",mo:"MAC",my:"MYS",mv:"MDV",mt:"MLT",md:"MDA",mc:"MCO",mn:"MNG",me:"MNE",ma:"MAR",mm:"MMR",np:"NPL",nl:"NED",nz:"NZL",kp:"PRK",mk:"MKD",no:"NOR",om:"OMN",pk:"PAK",ps:"PSE",ph:"PHL",pl:"POL",pt:"POR",qa:"QAT",ro:"ROU",ru:"RUS",sa:"SAU",sm:"SMR",rs:"SRB",sg:"SGP",sk:"SVK",si:"SVN",kr:"KOR",es:"ESP",lk:"LKA",se:"SWE",ch:"SUI",sy:"SYR",tw:"TWN",tj:"TJK",th:"THA",tr:"TUR",tm:"TKM",ua:"UKR",ae:"ARE",gb:"GBR",uz:"UZB",vn:"VNM",ye:"YEM"},kn={sf1:"Semi-final 1",sf2:"Semi-final 2",final:"Grand Final"},fd={sf1:15,sf2:15,final:26},Mt="esc-scoreboard-v2",oo="esc-me",zu=`
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
  transition: all 0.2s ease;
}
.battle-input.dup { border-color: var(--red); color: #ffb3c1; }
.battle-input:focus { outline: none; border-color: var(--gold); }

/* Edle Podiums-Farben für die Tipps (unabhängig davon, wem sie gehören) */
.battle-input.podium-1 {
  background: linear-gradient(180deg, rgba(255,209,102,0.15) 0%, rgba(40,24,82,0.9) 100%) !important;
  border: 1.5px solid rgba(255,209,102,0.8) !important;
  color: var(--gold) !important;
  box-shadow: 0 0 14px rgba(255,209,102,0.3), inset 0 1px 0 rgba(255,255,255,0.15) !important;
  text-shadow: 0 0 8px rgba(255,209,102,0.5);
}
.battle-input.podium-2 {
  background: linear-gradient(180deg, rgba(229,229,229,0.12) 0%, rgba(40,24,82,0.9) 100%) !important;
  border: 1.5px solid rgba(229,229,229,0.6) !important;
  color: #e5e5e5 !important;
  box-shadow: 0 0 12px rgba(229,229,229,0.2), inset 0 1px 0 rgba(255,255,255,0.1) !important;
  text-shadow: 0 0 6px rgba(255,255,255,0.4);
}
.battle-input.podium-3 {
  background: linear-gradient(180deg, rgba(205,127,50,0.15) 0%, rgba(40,24,82,0.9) 100%) !important;
  border: 1.5px solid rgba(205,127,50,0.7) !important;
  color: #e5a56b !important;
  box-shadow: 0 0 12px rgba(205,127,50,0.25), inset 0 1px 0 rgba(255,255,255,0.1) !important;
  text-shadow: 0 0 6px rgba(205,127,50,0.4);
}

/* ===== ECHTER PLATZ (rechts) — edler "Stempel"-Look, hebt sich von den Tipps ab ===== */
.actual-place-input {
  width: 46px !important;
  height: 42px !important;
  font-size: 1.3rem !important;
  font-weight: 800 !important;
  font-family: var(--number-font) !important;
  text-align: center !important;
  border-radius: 10px !important;
  padding: 0 !important;
  color: #ffecb3 !important;
  background: linear-gradient(180deg, #3a2a10 0%, #1a1106 50%, #0a0702 100%) !important;
  border: 2px solid rgba(255, 209, 102, 0.7) !important;
  box-shadow: 
    inset 0 1px 0 rgba(255, 230, 150, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0.8),
    0 0 12px rgba(255, 209, 102, 0.15) !important;
  text-shadow: 0 0 10px rgba(255, 209, 102, 0.5) !important;
  transition: all 0.2s ease !important;
}

.actual-place-input:focus {
  outline: none !important;
  border-color: #fff6cc !important;
  box-shadow: 
    inset 0 1px 0 rgba(255, 230, 150, 0.4),
    inset 0 -2px 6px rgba(0, 0, 0, 0.8),
    0 0 20px rgba(255, 209, 102, 0.6) !important;
}

.actual-place-input.actual-1 {
  background: linear-gradient(180deg, #ffecb3 0%, #ffd166 40%, #d4a017 100%) !important;
  color: #2a1a00 !important;
  border: 2px solid #fff6cc !important;
  box-shadow: 
    inset 0 2px 0 rgba(255,255,255,0.7),
    inset 0 -3px 6px rgba(150,90,0,0.5),
    0 0 24px rgba(255, 209, 102, 0.7),
    0 4px 12px rgba(180, 120, 0, 0.4) !important;
  text-shadow: 0 1px 0 rgba(255,255,255,0.5) !important;
  font-size: 1.5rem !important;
}

.actual-place-input.actual-2 {
  background: linear-gradient(180deg, #ffffff 0%, #e5e5e5 40%, #a3a3a3 100%) !important;
  color: #1d1d1d !important;
  border: 2px solid #ffffff !important;
  box-shadow: 
    inset 0 2px 0 rgba(255,255,255,0.9),
    inset 0 -3px 6px rgba(80,80,80,0.4),
    0 0 20px rgba(229, 229, 229, 0.5),
    0 4px 12px rgba(0,0,0,0.4) !important;
  text-shadow: 0 1px 0 rgba(255,255,255,0.6) !important;
  font-size: 1.5rem !important;
}

.actual-place-input.actual-3 {
  background: linear-gradient(180deg, #f5c896 0%, #e5a56b 40%, #a0522d 100%) !important;
  color: #2a1500 !important;
  border: 2px solid #f5c896 !important;
  box-shadow: 
    inset 0 2px 0 rgba(255,255,255,0.5),
    inset 0 -3px 6px rgba(100,50,10,0.5),
    0 0 20px rgba(205, 127, 50, 0.5),
    0 4px 12px rgba(0,0,0,0.4) !important;
  text-shadow: 0 1px 0 rgba(255,255,255,0.4) !important;
  font-size: 1.5rem !important;
}

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
`;if(typeof document<"u"&&!document.getElementById("battle-table-css")){const e=document.createElement("style");e.id="battle-table-css",e.textContent=zu,document.head.appendChild(e)}const Nr=e=>e?yg[e.toLowerCase()]||e.toUpperCase():"",ne=e=>String(e||""),Br=e=>+String(e).split("-").pop(),wt=({cc:e})=>i.jsx("img",{className:"flag","data-cc":e,src:`https://flagcdn.com/w40/${e}.png`,srcSet:`https://flagcdn.com/w40/${e}.png 1x, https://flagcdn.com/w80/${e}.png 2x`,width:"22",height:"15",alt:e.toUpperCase(),loading:"lazy",decoding:"async",onError:t=>{const n=t.target;if(!n.dataset.s){n.dataset.s=1,n.removeAttribute("srcset"),n.src=`https://flagcdn.com/w40/${e}.png`;return}const r=document.createElement("span");r.textContent=e.toUpperCase().split("").map(a=>String.fromCodePoint(127397+a.charCodeAt(0))).join("")+" ",n.replaceWith(r)}}),kt=e=>{if(Number(e)===12)return"background:linear-gradient(160deg, #d8b4fe 0%, #a855f7 30%, #6b21a8 80%, #3b0764 100%);color:#ffffff;text-shadow:0 1px 3px rgba(0,0,0,0.9), 0 0 14px rgba(216,180,254,0.7);border:1.5px solid #f3e8ff;box-shadow:0 0 20px rgba(168,85,247,0.6), 0 4px 12px rgba(59,7,100,0.6), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -2px 5px rgba(0,0,0,0.5);";if(Number(e)===10)return"background:linear-gradient(160deg, #ffecb3 0%, #ffd166 50%, #f5b93a 100%);color:#4a2f00;text-shadow:0 1px 0 rgba(255,255,255,0.6);border:1.5px solid #fff4c9;box-shadow:0 0 18px rgba(255,209,102,0.55), 0 3px 10px rgba(180,120,0,0.35), inset 0 1.5px 0 rgba(255,255,255,0.7), inset 0 -2px 5px rgba(150,90,0,0.35);";const t={1:"#e63a2e",2:"#ea6b5f",3:"#ef9b93",4:"#f5c9c5",5:"#f5f5f5",6:"#c9e6d2",7:"#9fd6b1",8:"#71c48d",9:"#47b265"},n={1:"#9b1e15",2:"#b84236",3:"#c96660",4:"#d9a4a0",5:"#c9c9c9",6:"#8ebfa1",7:"#6cae83",8:"#449d66",9:"#2a824a"},r={1:"#b72b1f",2:"#c94a3d",3:"#d6726a",4:"#dc9f9a",5:"#b0b0b0",6:"#95c7a6",7:"#79b98e",8:"#5aa374",9:"#3c9058"},a=t[e]||"#f5f5f5",o=n[e]||"#c9c9c9",l=r[e]||"#b0b0b0",f=e>=6?"#0a2e14":"#1d1d1d";return`background: linear-gradient(160deg, ${a} 0%, ${o} 100%);color: ${f};text-shadow: 0 1px 2px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.2), 0 -1px 0 rgba(255,255,255,0.4);border: 1.5px solid ${l};box-shadow: 0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -3px 6px rgba(0,0,0,0.3);`},Jl=()=>({jury:[{id:"j1",name:"Livin"},{id:"j2",name:"Tabi"},{id:"j3",name:"Poki"},{id:"j4",name:"Kiri"}],songs:[],years:[],ratings:{},pred:{},qualPred:{},liveState:{},battleHidden:!1,autoHardReset:!1,livePredictionMode:!1,boycotted:{}}),bg=()=>{try{const e=JSON.parse(localStorage.getItem(Mt));if(e&&e.jury)return e.qualPred=e.qualPred||{},e.liveState=e.liveState||{},e}catch{}return Jl()},Eu=e=>e.sort((t,n)=>{const r=t.customNo!==void 0&&t.customNo!==null&&t.customNo!==""?parseFloat(t.customNo):Br(t.id),a=n.customNo!==void 0&&n.customNo!==null&&n.customNo!==""?parseFloat(n.customNo):Br(n.id);return!isNaN(r)&&!isNaN(a)?r-a:String(r).localeCompare(String(a))}),gd=e=>{const t={jury:{},songs:{},years:{},ratings:e.ratings,pred:e.pred,qualPred:e.qualPred,liveState:e.liveState,battleHidden:e.battleHidden||!1,autoHardReset:e.autoHardReset||!1,livePredictionMode:e.livePredictionMode||!1,boycotted:e.boycotted||{}};for(let n=0;n<e.jury.length;n++)t.jury[e.jury[n].id]={name:e.jury[n].name};for(let n=0;n<e.songs.length;n++){const r=e.songs[n];t.songs[r.id]={cc:r.cc,artist:r.artist,title:r.title,year:r.year}}for(let n=0;n<e.years.length;n++){const r=e.years[n],a={year:r.year,suffix:r.suffix,city:r.city,hostCc:r.hostCc,splitAfter:r.splitAfter,showDates:r.showDates,shows:{}};for(const o in r.shows){a.shows[o]={};const l=r.shows[o];for(let f=0;f<l.length;f++){const u=l[f];a.shows[o][u.id]={n:u.customNo,songId:u.songId,place:u.place,dq:u.dq,autoFinal:u.autoFinal}}}t.years[r.id]=a}return t},Vi=(e,t,n)=>{t=t||"",n=n||{};for(const r in e){const a=e[r],o=t?t+"/"+r:r;a&&typeof a=="object"?Vi(a,o,n):a!=null&&a!==""&&(n[o]=a)}return n},wg=e=>{const t=Jl(),n=e.jury||{};for(let o=0;o<t.jury.length;o++)n[t.jury[o].id]&&n[t.jury[o].id].name&&(t.jury[o].name=n[t.jury[o].id].name);t.songs=[];const r=e.songs||{};for(const o in r)r.hasOwnProperty(o)&&t.songs.push(Object.assign({id:o},r[o]));t.years=[];const a=e.years||{};for(const o in a)if(a.hasOwnProperty(o)){const l=a[o],f={};if(l.shows){for(const u in l.shows)if(l.shows.hasOwnProperty(u)){const b=l.shows[u]||{},R=[];for(const M in b)if(b.hasOwnProperty(M)){const T=b[M];R.push({id:M,songId:T.songId,place:T.place,customNo:T.n,dq:T.dq,autoFinal:T.autoFinal})}Eu(R),f[u]=R}}t.years.push({id:o,year:+l.year||+o.split("_")[0],suffix:l.suffix||"",city:l.city,hostCc:l.hostCc,splitAfter:l.splitAfter,showDates:l.showDates||{},shows:f})}return t.years.sort((o,l)=>l.year-o.year||l.id.localeCompare(o.id)),t.ratings=e.ratings||{},t.pred=e.pred||{},t.qualPred=e.qualPred||{},t.liveState=e.liveState||{},t.battleHidden=!!e.battleHidden,t.autoHardReset=!!e.autoHardReset,t.livePredictionMode=!!e.livePredictionMode,t.boycotted=e.boycotted||{},t},lo=e=>e>=20?"background: linear-gradient(135deg, #ff0000, #800000); color: #fff; border: 2.5px solid #ff6666; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 0 15px rgba(255,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.3);":e>=15?"background: linear-gradient(135deg, #d90000, #660000); color: #fff; border: 2.5px solid #ff4d4d; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 4px 12px rgba(217,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3);":e>=11?"background: linear-gradient(135deg, #b45309, #78350f); color: #fff; border: 2.5px solid #f59e0b; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 4px 12px rgba(180,83,9,0.4), inset 0 1px 0 rgba(255,255,255,0.2);":e>=8?"background: linear-gradient(135deg, #f97316, #c2410c); color: #fff; border: 2.5px solid #fdba74; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 4px 12px rgba(249,115,22,0.4), inset 0 1px 0 rgba(255,255,255,0.3);":e>=5?"background: linear-gradient(135deg, #facc15, #ca8a04); color: #422006; border: 2.5px solid #fef08a; text-shadow: 0 1px 2px rgba(255,255,255,0.6); box-shadow: 0 4px 12px rgba(250,204,21,0.4), inset 0 1px 0 rgba(255,255,255,0.5);":e>=3?"background: linear-gradient(135deg, #86efac, #22c55e); color: #052e16; border: 2.5px solid #bbf7d0; text-shadow: 0 1px 2px rgba(255,255,255,0.6); box-shadow: 0 4px 12px rgba(34,197,94,0.4), inset 0 1px 0 rgba(255,255,255,0.5);":"background: linear-gradient(135deg, #4ade80, #16a34a); color: #fff; border: 2.5px solid #86efac; text-shadow: 0 1px 3px rgba(0,0,0,0.6); box-shadow: 0 4px 12px rgba(22,163,74,0.4), inset 0 1px 0 rgba(255,255,255,0.4);";function kg(){H.useEffect(()=>{const s=document.getElementById("battle-table-css");s&&s.remove();const d=document.createElement("style");d.id="battle-table-css-"+Date.now(),d.textContent=zu,document.head.appendChild(d)},[]);const[e,t]=H.useState(bg),[n,r]=H.useState(()=>localStorage.getItem(oo)||null),[a,o]=H.useState(!1),[l,f]=H.useState(()=>localStorage.getItem("esc-admin-view-off")==="true"),[u,b]=H.useState(null),R=!!u&&a&&!l,[M,T]=H.useState(1),[y,$]=H.useState({view:"home",yearId:null,tab:"sf1",subTab:"points",sortMode:"order",ovSubTab:"semis",sbShow:"final",sbSort:"ratings",editMode:!1,q:"",libYear:"",compareCc:null,enter:!1}),[Y,xe]=H.useState({open:!1,mode:null,payload:null}),[k,v]=H.useState([]),[j,U]=H.useState({}),Z=!!e.autoHardReset,ee=H.useRef({}),re=H.useRef(null),ie=H.useRef(!1),be=H.useRef(null),pe=H.useRef(null),Xe=H.useRef(e.ratings),Qt=H.useRef(e.pred);H.useRef(null);const ve=H.useCallback(s=>e.years.find(d=>d.id===s)||null,[e.years]),he=H.useCallback(s=>e.songs.find(d=>d.id===s)||null,[e.songs]),Be=H.useCallback(s=>{const d=e.jury.find(c=>c.id===s);return d?d.name:s},[e.jury]),vn=H.useCallback(s=>{for(const d of e.years)for(const c in d.shows){const p=d.shows[c].find(g=>g.id===s);if(p)return p}return null},[e.years]),Ve=H.useCallback(s=>s?s.songId&&e.ratings[s.songId]?e.ratings[s.songId]:e.ratings[s.id]?e.ratings[s.id]:{}:{},[e.ratings]),X=H.useCallback(s=>s?e.qualPred[s.id]?e.qualPred[s.id]:{}:{},[e.qualPred]),le=H.useCallback(s=>s?!!(e.boycotted&&e.boycotted[s]):!1,[e.boycotted]),ae=H.useCallback((s,d)=>{const c=Date.now()+Math.random();v(p=>[...p,{id:c,msg:s,type:d||""}]),setTimeout(()=>{v(p=>p.filter(g=>g.id!==c))},2600)},[]),se=H.useCallback((s,d={})=>{xe({open:!0,mode:s,payload:d})},[]),de=H.useCallback(()=>{xe({open:!1,mode:null,payload:null})},[]);H.useEffect(()=>{const s=pe.current;if(s){if(Y.open&&!s.open){const d=window.scrollY;try{s.showModal()}catch{}requestAnimationFrame(()=>{window.scrollTo(0,d)}),document.body.style.overflow="hidden"}if(!Y.open&&s.open){try{s.close()}catch{}document.body.style.overflow=""}}},[Y.open]);const yn=H.useCallback(s=>{const d=re.current;if(!d)return;const c=Vi(gd(s)),p={};for(const g in c)c[g]!==ee.current[g]&&(p[g]=c[g]);for(const g in ee.current)g in c||(p[g]=null);Object.keys(p).length&&(ee.current=c,window.__isPushing=!0,d.update(p).catch(g=>console.warn("Firebase push error:",g)).finally(()=>{setTimeout(()=>{window.__isPushing=!1},500)}))},[]);H.useCallback((s,d)=>{const c=re.current;c&&(d==null?(c.child(s).remove().catch(()=>{}),delete ee.current[s]):(c.child(s).set(d).catch(()=>{}),ee.current[s]=d))},[]);const yt=H.useCallback(s=>{if(u){try{localStorage.setItem(Mt,JSON.stringify(s))}catch{}yn(s)}},[yn,u]),ue=H.useCallback(s=>{if(!u){ae("Bitte einloggen, um Änderungen vorzunehmen!","error");return}t(d=>{const c=typeof s=="function"?s(d):{...d,...s};return yt(c),c})},[yt,u,ae]),at=H.useRef({}),Tt=H.useRef(null),di=H.useCallback((s,d,c)=>{const p=d.key,g=c?null:d.val(),x=s==="ratings"?"ratings":s==="pred"?"pred":s==="qualPred"?"qualPred":null;x&&(window.__isPushing||(at.current[x]||(at.current[x]={}),at.current[x][p]={val:g,removed:c},Tt.current&&clearTimeout(Tt.current),Tt.current=setTimeout(()=>{const C=at.current;at.current={},t(I=>{let D=I,S=!1;for(const L in C){const W={...I[L]||{}};let J=!1;for(const K in C[L]){const{val:Q,removed:_}=C[L][K],w=W[K];if(!(_&&w===void 0)&&!(!_&&Q==null&&w===void 0)){if(!_&&Q&&typeof Q=="object"&&w){let E=!1;for(const h in Q)if(w[h]!==Q[h]){E=!0;break}if(!E)continue}!_&&typeof Q!="object"&&w===Q||(_||Q===null||Q===void 0?delete W[K]:typeof Q=="object"?W[K]=Object.assign({},w||{},Q):W[K]=Q,J=!0)}}J&&(S||(D={...I},S=!0),D[L]=W)}if(!S)return I;try{localStorage.setItem(Mt,JSON.stringify(D))}catch{}return D})},30)))},[]);H.useEffect(()=>()=>{Tt.current&&clearTimeout(Tt.current)},[]);const Tu=H.useCallback(s=>{if(!window.firebase||re.current)return;const d=window.firebase.database().ref();re.current=d,d.once("value").then(c=>{const p=c.val();if(!p){if(s===!0){const C=Jl();ee.current=Vi(gd(C)),d.update(ee.current).catch(()=>{})}return}const g=Vi(p),x=wg(p);t(x),ee.current=g;try{localStorage.setItem(Mt,JSON.stringify(x))}catch{}}).catch(c=>{console.warn("Firebase pull Fehler:",c)}),["ratings","pred","qualPred"].forEach(c=>{d.child(c).on("child_added",p=>di(c,p,!1)),d.child(c).on("child_changed",p=>di(c,p,!1)),d.child(c).on("child_removed",p=>di(c,p,!0))}),d.child("liveState").on("value",c=>{const p=c.val()||{};t(g=>{const x=JSON.stringify(g.liveState),C=JSON.stringify(p);if(x===C)return g;const I={...g,liveState:p};try{localStorage.setItem(Mt,JSON.stringify(I))}catch{}return I})}),d.child("battleHidden").on("value",c=>{const p=!!c.val();t(g=>{if(g.battleHidden===p)return g;const x={...g,battleHidden:p};try{localStorage.setItem(Mt,JSON.stringify(x))}catch{}return x})}),d.child("autoHardReset").on("value",c=>{const p=!!c.val();t(g=>{if(g.autoHardReset===p)return g;const x={...g,autoHardReset:p};try{localStorage.setItem(Mt,JSON.stringify(x))}catch{}return x})}),d.child("livePredictionMode").on("value",c=>{const p=!!c.val();t(g=>{if(g.livePredictionMode===p)return g;const x={...g,livePredictionMode:p};try{localStorage.setItem(Mt,JSON.stringify(x))}catch{}return x})}),d.child("boycotted").on("value",c=>{const p=c.val()||{};t(g=>{const x=JSON.stringify(g.boycotted||{}),C=JSON.stringify(p);if(x===C)return g;const I={...g,boycotted:p};try{localStorage.setItem(Mt,JSON.stringify(I))}catch{}return I})})},[di]);H.useEffect(()=>{if(!ie.current){if(ie.current=!0,!window.firebase){console.warn("Firebase SDK not loaded yet");return}try{window.firebase.apps.length||window.firebase.initializeApp(vg),window.firebase.auth().onAuthStateChanged(s=>{if(s){const d=(s.email||"").toLowerCase();if(ao.hasOwnProperty(d)){b(s);const c=ao[d],p=c.id,g=!!c.isAdmin;r(p),o(g),localStorage.setItem(oo,p),localStorage.setItem("esc-is-admin",g?"true":"false"),localStorage.setItem("esc-joined","true"),Tu(!0)}else{window.firebase.auth().signOut().then(()=>{b(null),se("alert",{title:"Zugriff verweigert",text:"Das Google-Konto ("+d+") ist nicht freigeschaltet!"})});return}}else b(null)})}catch(s){console.warn("Firebase Init Fehler:",s)}}},[]);const Iu=H.useCallback(()=>{if(!window.firebase)return;const s=new window.firebase.auth.GoogleAuthProvider;window.firebase.auth().signInWithPopup(s).then(d=>{const c=(d.user.email||"").toLowerCase();ao.hasOwnProperty(c)?ae("Willkommen, "+(d.user.displayName||c)+"!","success"):(window.firebase.auth().signOut(),se("alert",{title:"Zugriff verweigert",text:"Das Konto "+c+" ist nicht in der Whitelist."}))}).catch(d=>{se("alert",{title:"Login Fehler",text:d.message})})},[se,ae]),Pu=H.useCallback(()=>{window.firebase&&window.firebase.auth().signOut().then(()=>{b(null)})},[]),La=H.useCallback(()=>{const s=e.jury.map(d=>(d.name.trim()[0]||"?").toUpperCase());return s.map((d,c)=>s.filter(g=>g===d).length>1?d+(c+1):d)},[e.jury]),Lu=H.useCallback(()=>{if(!y.yearId||!y.tab)return!1;const s=e.liveState[y.yearId];return s&&s.activeTab===y.tab},[y.yearId,y.tab,e.liveState]),ci=H.useCallback(()=>{if(!y.yearId)return 0;const s=e.liveState[y.yearId];return s&&s.index!==void 0?s.index:0},[y.yearId,e.liveState]);H.useEffect(()=>{if(!y.enter||!be.current)return;const s=be.current;s.classList.remove("enter"),s.offsetWidth,s.classList.add("enter"),$(d=>({...d,enter:!1}))},[y.enter]),H.useEffect(()=>{const s=Xe.current,d=Qt.current,c=[];for(const g in e.ratings)for(const x in e.ratings[g])(!s[g]||s[g][x]!==e.ratings[g][x])&&c.push("rating_"+g+"_"+x);for(const g in e.pred)for(const x in e.pred[g])(!d[g]||d[g][x]!==e.pred[g][x])&&c.push("pred_"+g+"_"+x);if(Xe.current=e.ratings,Qt.current=e.pred,!c.length)return;const p=new Set(c);window.__flashTimer&&clearTimeout(window.__flashTimer),window.__flashTimer=setTimeout(()=>{document.querySelectorAll("[data-flash-key]").forEach(g=>{p.has(g.getAttribute("data-flash-key"))&&(g.classList.add("flash-update"),setTimeout(()=>g.classList.remove("flash-update"),1400))}),document.querySelectorAll("[data-live-flash-key]").forEach(g=>{p.has(g.getAttribute("data-live-flash-key"))&&(g.classList.add("live-box-flash"),setTimeout(()=>g.classList.remove("live-box-flash"),1400))})},100)},[e.ratings,e.pred]);const[,Ru]=H.useState(0);H.useEffect(()=>{const s=setInterval(()=>Ru(d=>d+1),6e4);return()=>clearInterval(s)},[]),H.useEffect(()=>{if(Z&&!window.location.search.includes("v=")){const s=new URL(window.location.href);s.searchParams.set("v",Date.now()),window.location.replace(s.toString())}},[Z]),H.useEffect(()=>{if(!window.firebase||!window.firebase.database||!u)return;const s=localStorage.getItem(oo);if(!s)return;const c=window.firebase.database().ref("presence"),p=c.child(s);p.onDisconnect().remove().then(()=>{p.set({online:!0,time:Date.now()})});const g=C=>{U(I=>{const D=C.val()||{},S=Object.keys(I).sort().join(","),L=Object.keys(D).sort().join(",");return S===L?I:D})};c.on("value",g);const x=()=>{p.remove()};return window.addEventListener("beforeunload",x),window.addEventListener("pagehide",x),()=>{c.off("value",g),window.removeEventListener("beforeunload",x),window.removeEventListener("pagehide",x),p.remove()}},[u]);const Fu=()=>{if(!u){ae("Bitte einloggen!","error");return}ue(s=>({...s,battleHidden:!s.battleHidden}))},_u=()=>{if(!y.yearId)return;if(!ve(y.yearId).shows[y.tab]){ae("Live-Modus geht nur in einer Show!","error");return}ue(d=>{const c={...d,liveState:{...d.liveState}},p=c.liveState[y.yearId]||{activeTab:null,index:0};return p.activeTab===y.tab?c.liveState[y.yearId]={...p,activeTab:null}:c.liveState[y.yearId]={...p,activeTab:y.tab,index:0},c})},Du=s=>{if(!y.yearId)return;const d=ci();T(s>d?1:-1),ue(c=>{const p={...c,liveState:{...c.liveState}};return p.liveState[y.yearId]={...p.liveState[y.yearId]||{activeTab:y.tab},index:parseInt(s)||0},p})},Mu=()=>{if(!y.yearId)return;const s=ve(y.yearId),d=s.shows[y.tab]||[];if(!d.length)return;T(1);const c=ci(),p=(c+1)%d.length;ue(g=>{const x={...g,liveState:{...g.liveState}};return x.liveState[y.yearId]={...x.liveState[y.yearId]||{activeTab:y.tab},index:p},x})},Ou=()=>{if(!y.yearId)return;const s=ve(y.yearId),d=s.shows[y.tab]||[];if(!d.length)return;T(-1);const c=ci(),p=(c-1+d.length)%d.length;ue(g=>{const x={...g,liveState:{...g.liveState}};return x.liveState[y.yearId]={...x.liveState[y.yearId]||{activeTab:y.tab},index:p},x})},Au=(s,d)=>{ue(c=>{const p={...c,qualPred:{...c.qualPred}};return p.qualPred[s]={...p.qualPred[s]||{}},p.qualPred[s][d]===void 0?p.qualPred[s][d]=!1:delete p.qualPred[s][d],p})},bn=()=>$(s=>({...s,yearId:null,view:"home",enter:!0})),Xl=s=>{const d=ve(s);$(c=>({...c,yearId:s,view:"year",tab:d&&d.shows.sf1?"sf1":d&&d.shows.sf2?"sf2":d&&d.shows.final?"final":"overview",subTab:"points",sortMode:"order",ovSubTab:"semis",editMode:!1,enter:!0}))},Bu=()=>$(s=>({...s,view:"compare",enter:!0})),Wu=()=>$(s=>({...s,view:"library",enter:!0})),Hu=()=>$(s=>({...s,view:"stats",enter:!0})),Uu=s=>{se("confirm",{title:"Delete Song",text:"Delete from library?",onYes:()=>{ue(d=>({...d,songs:d.songs.filter(c=>c.id!==s)}))}})},Dt=s=>$(d=>({...d,tab:s,subTab:"points",sortMode:"order",ovSubTab:"semis",editMode:!1,enter:!0})),$u=()=>{const s=ve(y.yearId);se("confirm",{title:"Contest löschen",text:"Willst du diesen kompletten Contest löschen?",onYes:()=>{ue(d=>({...d,years:d.years.filter(c=>c!==s)})),$(d=>({...d,yearId:null,view:"home",enter:!0}))}})},Vu=s=>{const d=ve(y.yearId);d&&!d.shows[s]&&ue(c=>({...c,years:c.years.map(p=>{if(p.id!==y.yearId)return p;const g=fd[s]||25,x=[];for(let C=1;C<=g;C++)x.push({id:p.id+"-"+s+"-"+C});return{...p,shows:{...p.shows,[s]:x}}})}))},Yu=s=>{se("confirm",{title:"Show entfernen",text:"Möchtest du "+kn[s]+" wirklich entfernen? Alle Tipps und Einträge gehen verloren.",onYes:()=>{ue(d=>({...d,years:d.years.map(c=>{if(c.id!==y.yearId)return c;const p={...c.shows};return delete p[s],{...c,shows:p}})})),$(d=>{const c=ve(y.yearId);if(!c)return d;const p=d.tab===s?c.shows.sf1?"sf1":c.shows.sf2?"sf2":c.shows.final?"final":"overview":d.tab,g=d.sbShow===s?c.shows.final?"final":Object.keys(c.shows).filter(x=>x!==s)[0]:d.sbShow;return{...d,tab:p,sbShow:g}})}})},Ku=(s,d)=>{d=+d,!(d<=0)&&ue(c=>({...c,years:c.years.map(p=>{if(p.id!==y.yearId)return p;const g=[...p.shows[s]||[]],x=g[d];return g[d]=g[d-1],g[d-1]=x,{...p,shows:{...p.shows,[s]:g}}})}))},Qu=(s,d)=>{d=+d;const c=ve(y.yearId),p=c.shows[s]||[];d>=p.length-1||ue(g=>({...g,years:g.years.map(x=>{if(x.id!==y.yearId)return x;const C=[...x.shows[s]||[]],I=C[d];return C[d]=C[d+1],C[d+1]=I,{...x,shows:{...x.shows,[s]:C}}})}))},Gu=s=>{ue(d=>({...d,years:d.years.map(c=>{if(c.id!==y.yearId)return c;const p=[...c.shows[s]||[]];return p.push({id:c.id+"-"+s+"-"+(p.length+1)}),{...c,shows:{...c.shows,[s]:p}}})}))},qu=s=>{ue(d=>({...d,years:d.years.map(c=>{if(c.id!==y.yearId)return c;const p=[...c.shows[s]||[]];return p.length<=0?c:(p.pop(),{...c,shows:{...c.shows,[s]:p}})})}))},Ju=s=>{ue(d=>({...d,years:d.years.map(c=>{const p={};for(const g in c.shows)p[g]=c.shows[g].map(x=>x.id===s?{...x,dq:!x.dq}:x);return{...c,shows:p}})}))},Xu=(s,d,c)=>{ue(p=>({...p,years:p.years.map(g=>{const x={};for(const C in g.shows){const I=g.shows[C].map(D=>{if(D.id!==s)return D;const S={...D};return d===""||parseFloat(d)===Br(D.id)?delete S.customNo:S.customNo=isNaN(parseFloat(d))?d:parseFloat(d),S.autoFinal=c,c&&delete S.place,S});Eu(I),x[C]=I}return{...g,shows:x}})})),de()},Zu=s=>{const{artist:d,title:c,cc:p,year:g,editId:x,assign:C,boycotted:I}=s;!d||!c||!p||(ue(D=>{const S={...D,songs:[...D.songs],boycotted:{...D.boycotted||{}}};let L;if(x){const B=S.songs.findIndex(W=>W.id===x);B!==-1&&(S.songs[B]={...S.songs[B],artist:d,title:c,cc:p,year:g},L=x)}else L="s"+Date.now().toString(36),S.songs.push({id:L,cc:p,artist:d,title:c,year:g});return L&&(I?(S.boycotted[L]=!0,S.ratings[L]&&(S.ratings={...S.ratings},delete S.ratings[L])):delete S.boycotted[L]),C&&(S.years=S.years.map(B=>{const W={};for(const J in B.shows)W[J]=B.shows[J].map(K=>K.id===C?{...K,songId:L}:K);return{...B,shows:W}})),S}),C&&!I?(de(),setTimeout(()=>se("rating",{eId:C,jurId:n}),50)):de())},e0=s=>{const{year:d,suffix:c,city:p}=s,g=parseInt(d);if(!g)return;const x=g+(c?"_"+c.toLowerCase():"_main");if(ve(x))return;const C={};for(const I of["sf1","sf2","final"]){C[I]=[];for(let D=1;D<=fd[I];D++)C[I].push({id:x+"-"+I+"-"+D})}ue(I=>{const D={...I,years:[...I.years,{id:x,year:g,suffix:c,city:p||void 0,shows:C}]};return D.years.sort((S,L)=>L.year-S.year),D}),de(),$(I=>({...I,yearId:x,view:"year",tab:"sf1",subTab:"points",sortMode:"order",ovSubTab:"semis",enter:!0}))},t0=(s,d)=>{ue(c=>({...c,years:c.years.map(p=>p.id===y.yearId?{...p,city:s||void 0,hostCc:d||void 0}:p)})),de()},n0=s=>{ue(d=>({...d,years:d.years.map(c=>c.id===y.yearId?{...c,showDates:s}:c)})),de()},r0=(s,d,c)=>{ue(p=>({...p,years:p.years.map(g=>{if(g.id!==y.yearId)return g;const x={...g};return x.city=s||void 0,x.hostCc=d||void 0,x.showDates=c,x})})),de()},i0=s=>{const d={};s.forEach(c=>{const p=c.value.trim();p&&(d[c.dataset.jn]=p)}),ue(c=>({...c,jury:c.jury.map(p=>d[p.id]?{...p,name:d[p.id]}:p)})),de()},a0=s=>{if(!u){ae("Bitte einloggen!","error");return}try{const d=JSON.parse(s);ue(c=>{const p={...c};return d.jury&&(p.jury=d.jury),d.songs&&(p.songs=d.songs),d.years&&(p.years=d.years,p.years.sort((g,x)=>x.year-g.year||x.id.localeCompare(g.id))),d.ratings&&(p.ratings=d.ratings),d.pred&&(p.pred=d.pred),d.qualPred&&(p.qualPred=d.qualPred),d.liveState&&(p.liveState=d.liveState),p}),de(),ae("JSON aktualisiert!","success")}catch(d){se("alert",{title:"Fehler",text:"Ungültiges JSON-Format: "+d.message})}},o0=s=>{ue(d=>{const c={...d},p={};c.jury.forEach(C=>p[C.id]=C),s.jury&&s.jury.forEach(C=>p[C.id]=C),c.jury=Object.values(p);const g={};c.songs.forEach(C=>g[C.id]=C),s.songs&&s.songs.forEach(C=>g[C.id]=C),c.songs=Object.values(g);const x={};return c.years.forEach(C=>x[C.id]=C),s.years&&s.years.forEach(C=>x[C.id]=C),c.years=Object.values(x).sort((C,I)=>I.year-C.year||I.id.localeCompare(C.id)),["ratings","pred","qualPred","liveState"].forEach(C=>{if(c[C]={...c[C]||{}},s[C])for(const I in s[C])s[C].hasOwnProperty(I)&&(c[C][I]=Object.assign({},c[C][I]||{},s[C][I]))}),c}),de(),ae("Daten erfolgreich importiert!","success")},l0=()=>{if(!u){ae("Bitte einloggen!","error");return}const s=new Blob([JSON.stringify(e,null,1)],{type:"application/json"}),d=document.createElement("a");d.href=URL.createObjectURL(s),d.download="esc.json",d.click()},s0=()=>{""+ne(Be(n));const s=Object.keys(j),d=s.length>0?i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,background:"rgba(74, 222, 128, 0.1)",padding:"4px 8px",borderRadius:999,border:"1px solid rgba(74, 222, 128, 0.3)",marginRight:10,height:36},children:[i.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:"var(--green)",boxShadow:"0 0 8px var(--green)",flexShrink:0},title:"Online"}),s.map(x=>{const C=j[x]&&j[x].photoURL,I=Be(x).charAt(0).toUpperCase();return i.jsxs("div",{title:Be(x),style:{position:"relative",width:28,height:28},children:[i.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"var(--gold)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:800,color:"#1d1d1d",border:"2px solid var(--panel-solid)",boxSizing:"border-box"},children:I}),C&&i.jsx("img",{src:C,alt:Be(x),style:{position:"absolute",inset:0,width:28,height:28,borderRadius:"50%",objectFit:"cover",border:"2px solid var(--panel-solid)",display:"block",zIndex:1,background:"var(--panel2-solid)"},onError:D=>{D.target.style.display="none"}})]},x)})]}):null,c=u?i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,background:"var(--panel2)",padding:"5px 12px",borderRadius:999,border:"1px solid var(--line)"},children:[i.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--ink)"},children:ne(u.displayName||u.email)}),i.jsx("button",{className:"ghost sm danger",onClick:Pu,style:{padding:"3px 10px",fontSize:"0.75rem"},children:"Logout"})]}):i.jsxs("button",{onClick:Iu,style:{display:"inline-flex",alignItems:"center",gap:6,background:"#4285f4",borderColor:"#4285f4",color:"#fff",fontWeight:700,padding:"5px 14px",borderRadius:999,fontSize:"0.78rem"},children:[i.jsxs("svg",{style:{width:15,height:15,fill:"currentColor"},viewBox:"0 0 24 24",children:[i.jsx("path",{d:"M21.35 11.1h-9.17v2.98h5.37c-.24 1.25-.97 2.31-2.07 3.03v2.49h3.33c1.95-1.8 3.08-4.45 3.08-7.5 0-.67-.06-1.33-.17-1.95z"}),i.jsx("path",{d:"M12.18 21c2.75 0 5.06-.91 6.75-2.49l-3.33-2.49c-.91.61-2.08.97-3.42.97-2.63 0-4.86-1.78-5.66-4.17H3.04v2.57C4.74 18.76 8.21 21 12.18 21z"}),i.jsx("path",{d:"M6.52 12.82c-.2-.61-.32-1.26-.32-1.93s.12-1.32.32-1.93V6.39H3.04C2.37 7.72 2 9.21 2 10.89s.37 3.17 1.04 4.5l3.48-2.57z"}),i.jsx("path",{d:"M12.18 4.78c1.5 0 2.85.52 3.91 1.52l2.93-2.93C17.23 1.67 14.92.78 12.18.78 8.21.78 4.74 3.02 3.04 6.39l3.48 2.57c.8-2.39 3.03-4.17 5.66-4.17z"})]})," Google Login"]}),p={display:"inline-flex",alignItems:"center",gap:6,padding:"6px 14px",borderRadius:999,fontWeight:700,fontSize:"0.78rem",letterSpacing:"0.01em",background:"linear-gradient(145deg, rgba(22,12,46,0.95) 0%, rgba(12,6,26,1) 100%)",border:"1px solid rgba(148,94,255,0.22)",color:"var(--ink)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 1px 4px rgba(0,0,0,0.4)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"};({...p});const g=!y.yearId&&y.view==="home";return i.jsx("header",{className:g?"":"header-with-logo",children:i.jsxs("div",{className:"who",children:[d,c,u&&i.jsxs(i.Fragment,{children:[i.jsx("button",{onClick:()=>{window.location.href=window.location.pathname+"?v="+Date.now()},title:"Cache leeren & neu laden",style:{...p,padding:"6px 11px"},onMouseEnter:x=>{x.currentTarget.style.transform="translateY(-1px)",x.currentTarget.style.borderColor="rgba(148,94,255,0.7)"},onMouseLeave:x=>{x.currentTarget.style.transform="translateY(0)",x.currentTarget.style.borderColor="rgba(148,94,255,0.35)"},children:"🔄"}),i.jsxs("button",{onClick:()=>se("settings"),title:"Settings, Export, Import",style:p,onMouseEnter:x=>{x.currentTarget.style.transform="translateY(-1px)",x.currentTarget.style.borderColor="rgba(148,94,255,0.7)",x.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:x=>{x.currentTarget.style.transform="translateY(0)",x.currentTarget.style.borderColor="rgba(148,94,255,0.35)",x.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[i.jsx("span",{style:{fontSize:"1rem"},children:"⚙️"})," Settings"]})]})]})})},Zl=()=>{const s=[...e.years].sort((S,L)=>L.year-S.year||L.id.localeCompare(S.id)),d=new Date;d.setHours(0,0,0,0);const c=d.toISOString().slice(0,10);let p=null;const g=[];for(const S of s){const L=S.showDates&&S.showDates.final||null;L&&c<=L&&g.push({y:S,sortKey:L})}g.length&&(g.sort((S,L)=>S.sortKey.localeCompare(L.sortKey)),p=g[0].y.id);const x=S=>{const L=e.liveState[S.id];return!!(L&&L.activeTab)},C=S=>{const L=new Set;let B=0,W=0;for(const Q in S.shows){const _=S.shows[Q]||[];for(let w=0;w<_.length;w++){const E=_[w];if(!E.songId||L.has(E.songId))continue;L.add(E.songId);const h=Ve(E);for(const F of e.jury){const G=h[F.id];G!=null&&(B+=G,W++)}}}const J=L.size;return{avg:W>0?B/W:0,count:J}},I=S=>{if(!S)return"";const L=new Date(S+"T00:00:00");if(isNaN(L))return S;const B=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"];return L.getDate()+". "+B[L.getMonth()]},D=p?s.find(S=>S.id===p):null;return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"home-hero",children:[i.jsx("img",{src:"./ESCLOGO.png",alt:"Eurovision Song Contest",className:"home-hero-logo"}),i.jsx("p",{className:"home-hero-sub",children:"Scoreboard · Predictions · Live Mode"})]}),i.jsxs("div",{className:"home-actions",children:[i.jsxs("button",{onClick:()=>{if(!u){ae("Bitte einloggen, um die Song Library zu öffnen!","error");return}Wu()},className:"home-action-btn home-action-primary",style:{position:"relative",cursor:u?"pointer":"not-allowed"},children:[i.jsx("span",{className:"home-action-icon",children:"🎵"}),i.jsxs("span",{className:"home-action-text",children:[i.jsx("b",{children:"Song Library"}),i.jsx("small",{children:"Alle Songs"})]}),!u&&i.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:18,fontSize:"2.4rem",filter:"drop-shadow(0 0 20px rgba(255,209,102,0.6))"},children:"🔒"})]}),i.jsxs("button",{onClick:()=>{if(!u){ae("Bitte einloggen, um den Country Comparison zu öffnen!","error");return}Bu()},className:"home-action-btn",style:{position:"relative",cursor:u?"pointer":"not-allowed"},children:[i.jsx("span",{className:"home-action-icon",children:"🌍"}),i.jsxs("span",{className:"home-action-text",children:[i.jsx("b",{children:"Countries"}),i.jsx("small",{children:"Länder im Vergleich"})]}),!u&&i.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:18,fontSize:"2.4rem",filter:"drop-shadow(0 0 20px rgba(255,209,102,0.6))"},children:"🔒"})]}),i.jsxs("button",{onClick:()=>{if(!u){ae("Bitte einloggen, um die Statistiken zu öffnen!","error");return}Hu()},className:"home-action-btn",style:{position:"relative",cursor:u?"pointer":"not-allowed"},children:[i.jsx("span",{className:"home-action-icon",children:"📊"}),i.jsxs("span",{className:"home-action-text",children:[i.jsx("b",{children:"Statistiken"}),i.jsx("small",{children:"Rekorde & Vergleiche"})]}),!u&&i.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:18,fontSize:"2.4rem",filter:"drop-shadow(0 0 20px rgba(255,209,102,0.6))"},children:"🔒"})]})]}),D&&(()=>{const S=D,L=C(S),B=x(S),W=S.showDates||{},J=S.hostCc?`https://flagcdn.com/${S.hostCc}.svg`:"",K=S.year+(S.suffix?" ("+S.suffix+")":""),Q=[];W.sf1&&Q.push({k:"SF1",v:I(W.sf1)}),W.sf2&&Q.push({k:"SF2",v:I(W.sf2)}),W.final&&Q.push({k:"Final",v:I(W.final)});const _=new Date,w=(F,G)=>{if(!F)return null;const P=G||"21:00";return new Date(F+"T"+P+":00")},E=[{d:w(W.sf1,W.sf1Time),label:"bis SF1"},{d:w(W.sf2,W.sf2Time),label:"bis SF2"},{d:w(W.final,W.finalTime),label:"bis zum Grand Final"}].filter(F=>F.d&&F.d.getTime()>_.getTime()).sort((F,G)=>F.d-G.d);let h=null;if(E.length){const F=E[0],G=F.d.getTime()-_.getTime(),P=Math.floor(G/(1e3*60*60*24)),z=Math.floor(G/(1e3*60*60)%24),m=Math.floor(G/(1e3*60)%60);h={days:P,hours:z,minutes:m,label:F.label}}return i.jsxs("div",{className:"upcoming-hero",onClick:()=>{if(!u){ae("Bitte einloggen, um einen Contest zu öffnen!","error");return}Xl(S.id)},style:{position:"relative",minHeight:"160px",cursor:u?"pointer":"not-allowed"},children:[i.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"linear-gradient(135deg, #1a0f33 0%, #2a1749 50%, #120a24 100%)",zIndex:0}}),i.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"radial-gradient(circle at 20% 50%, rgba(168,85,247,0.15) 0%, transparent 60%)",zIndex:0}}),J&&i.jsx("img",{src:J,alt:"","aria-hidden":"true",style:{position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",height:"100%",maxWidth:"60%",objectFit:"cover",opacity:.9,filter:"saturate(1.1) contrast(1.05)",pointerEvents:"none",zIndex:0,maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)"}}),i.jsxs("div",{className:"upcoming-hero-inner",style:{position:"relative",zIndex:1},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",width:"100%",marginBottom:16},children:[i.jsx("span",{className:"upcoming-hero-badge",children:"⚡ Upcoming"}),B&&i.jsxs("span",{className:"home-badge home-badge-live",style:{marginLeft:8},children:[i.jsx("span",{className:"home-badge-dot"}),"LIVE"]})]}),i.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",paddingRight:"35%"},children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[i.jsx("div",{className:"upcoming-hero-year",style:{fontSize:"2.8rem",marginBottom:4},children:ne(K)}),S.city&&i.jsx("div",{className:"upcoming-hero-host",style:{justifyContent:"flex-start",fontSize:"1.3rem",marginTop:0,marginBottom:12},children:i.jsx("span",{children:ne(S.city)})}),i.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[i.jsx("div",{className:"upcoming-hero-dates",style:{margin:0,justifyContent:"flex-start"},children:Q.length>0?Q.map(F=>i.jsxs("div",{className:"upcoming-date-chip",style:{minWidth:"auto",padding:"6px 12px"},children:[i.jsx("span",{className:"upcoming-date-label",children:F.k}),i.jsx("span",{className:"upcoming-date-value",children:F.v})]},F.k)):i.jsx("div",{className:"upcoming-date-empty",style:{padding:"6px 12px"},children:"Noch kein Datum"})}),i.jsxs("div",{className:"upcoming-hero-stats",style:{margin:0,justifyContent:"flex-start"},children:[i.jsxs("div",{className:"home-card-stat",children:[i.jsx("span",{className:"home-card-stat-val",children:L.avg.toFixed(1)}),i.jsx("span",{className:"home-card-stat-lbl",children:"Ø Pts"})]}),i.jsx("div",{className:"home-card-stat-divider"}),i.jsxs("div",{className:"home-card-stat",children:[i.jsx("span",{className:"home-card-stat-val",children:L.count}),i.jsx("span",{className:"home-card-stat-lbl",children:"Songs"})]})]})]}),h&&i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:10,padding:"6px 14px",borderRadius:999,background:"linear-gradient(145deg, rgba(255,45,149,0.12) 0%, rgba(168,85,247,0.08) 100%)",border:"1px solid rgba(255,45,149,0.35)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(255,45,149,0.12)",marginTop:4},children:[i.jsx("span",{style:{fontSize:"0.9rem",filter:"drop-shadow(0 0 6px rgba(255,45,149,0.6))"},children:"⏳"}),i.jsx("span",{style:{fontSize:"0.65rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.08em",textTransform:"uppercase"},children:h.label}),i.jsxs("span",{style:{fontFamily:"var(--number-font)",fontSize:"1rem",color:"#ffd6ea",letterSpacing:"0.04em",textShadow:"0 0 8px rgba(255,45,149,0.5)"},children:[h.days,"T ",h.hours,"H ",h.minutes,"M"]})]})]})})]}),!u&&i.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:22,fontSize:"4rem",filter:"drop-shadow(0 0 24px rgba(255,209,102,0.6))"},children:"🔒"})]})})(),s.length?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"home-section-label",children:[i.jsx("span",{children:"All Contests"}),i.jsx("span",{className:"home-section-count",children:s.length})]}),i.jsx("div",{className:"home-grid",children:s.map(S=>{const L=S.year+(S.suffix?" ("+S.suffix+")":""),B=C(S),W=x(S),J=S.hostCc?`https://flagcdn.com/${S.hostCc}.svg`:"";return i.jsxs("div",{className:"home-card"+(W?" is-live":""),onClick:()=>{if(!u){ae("Bitte einloggen, um einen Contest zu öffnen!","error");return}Xl(S.id)},style:{cursor:u?"pointer":"not-allowed"},children:[i.jsx("div",{className:"home-card-flag",style:{backgroundImage:J?`url('${J}')`:"linear-gradient(135deg, #3b2367, #1a1033)"}}),W&&i.jsx("div",{className:"home-card-top",children:i.jsxs("span",{className:"home-badge home-badge-live",children:[i.jsx("span",{className:"home-badge-dot"}),"LIVE"]})}),i.jsxs("div",{className:"home-card-body",children:[i.jsx("div",{className:"home-card-year",children:ne(L)}),S.city&&i.jsx("div",{className:"home-card-host",children:i.jsx("span",{children:ne(S.city)})})]}),i.jsxs("div",{className:"home-card-footer",children:[i.jsxs("div",{className:"home-card-stat",children:[i.jsx("span",{className:"home-card-stat-val",children:B.avg.toFixed(1)}),i.jsx("span",{className:"home-card-stat-lbl",children:"Ø Pts"})]}),i.jsxs("div",{className:"home-card-stat",children:[i.jsx("span",{className:"home-card-stat-val",children:B.count}),i.jsx("span",{className:"home-card-stat-lbl",children:"Songs"})]})]}),!u&&i.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:14,fontSize:"3.2rem",filter:"drop-shadow(0 0 20px rgba(255,209,102,0.6))",transition:"opacity 0.2s ease"},onMouseEnter:K=>{K.currentTarget.style.background="linear-gradient(145deg, rgba(20,10,45,0.75) 0%, rgba(40,24,82,0.85) 100%)"},onMouseLeave:K=>{K.currentTarget.style.background="linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)"},children:"🔒"})]},S.id)})})]}):i.jsx("p",{className:"empty",children:"No Eurovision contest added yet. Use the ＋ button in the bottom right corner."})]})},d0=s=>i.jsxs("div",{className:"live-fallback",children:[i.jsxs("h2",{children:[i.jsx("span",{className:"live-dot"})," Live Modus ist aktiv"]}),i.jsx("p",{children:"Wähle eine Show aus, um beizutreten:"}),i.jsxs("div",{className:"live-fallback-shows",children:[s.shows.sf1&&i.jsx("button",{onClick:()=>Dt("sf1"),children:"Semi-final 1"}),s.shows.sf2&&i.jsx("button",{onClick:()=>Dt("sf2"),children:"Semi-final 2"}),s.shows.final&&i.jsx("button",{onClick:()=>Dt("final"),children:"Grand Final"})]})]}),c0=s=>{const d=ve(y.yearId),c=d.shows[s]||[];if(c.length===0)return d0(d);let p=ci();p>=c.length&&(p=0);const g=c[p],x=he(g.songId),C=g.autoFinal!==void 0?g.autoFinal:x&&["de","fr","it","es","gb","kr"].indexOf(x.cc)!==-1;let I=0,D="➔";if(s==="final")D=p+1;else if(!C){for(let h=0;h<=p;h++){const F=he(c[h].songId);(c[h].autoFinal!==void 0?c[h].autoFinal:F&&["de","fr","it","es","gb","kr"].indexOf(F.cc)!==-1)||I++}D=I}const S=he(g.songId),L=Ve(g);let B=null,W=null;if(s==="sf1"||s==="sf2")g.place&&(B=g.place);else if(S){if(d.shows.sf1){const h=d.shows.sf1.find(F=>F.songId===S.id);h&&h.place&&(B=h.place)}if(!B&&d.shows.sf2){const h=d.shows.sf2.find(F=>F.songId===S.id);h&&h.place&&(B=h.place)}}if(S&&d.shows.final){const h=d.shows.final.find(F=>F.songId===S.id);h&&h.place&&(W=h.place)}if(s==="final"&&e.livePredictionMode){const h=c.map(P=>{const z=he(P.songId);if(!z)return null;const m=e.pred[P.id]||{},N=P.place;return{e:P,songObj:z,pred:m,act:N}}).filter(Boolean);h.sort((P,z)=>{const m=P.act!==void 0&&P.act!==null?P.act:9999,N=z.act!==void 0&&z.act!==null?z.act:9999;return m!==N?m-N:P.songObj.title.localeCompare(z.songObj.title)});const F={};e.jury.forEach(P=>{F[P.id]={sum:0,count:0,fullHits:0}}),h.forEach(({e:P,pred:z,act:m})=>{m!=null&&e.jury.forEach(N=>{const O=z[N.id];if(O!=null){const A=Math.abs(O-m);F[N.id].sum+=A,F[N.id].count++,A===0&&F[N.id].fullHits++}})});const G=e.jury.slice().sort((P,z)=>{const m=F[P.id].sum||9999,N=F[z.id].sum||9999;return m-N});return i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12,marginBottom:20},children:[i.jsxs("div",{children:[i.jsx("h2",{style:{margin:"0 0 4px"},children:"🎯 Live Prediction Battle"}),i.jsx("p",{className:"hint",style:{margin:0},children:"Trage die echten Plätze ein – wer tippt am besten? 🎯 = Volltreffer."})]}),i.jsx("button",{onClick:()=>ue(P=>({...P,livePredictionMode:!1})),style:{padding:"7px 16px",fontSize:"0.85rem",fontWeight:700,background:"var(--panel2-solid)",borderColor:"var(--line)",color:"var(--muted)",borderRadius:999,cursor:"pointer"},onMouseEnter:P=>{P.currentTarget.style.color="#fff",P.currentTarget.style.borderColor="var(--pink)"},onMouseLeave:P=>{P.currentTarget.style.color="var(--muted)",P.currentTarget.style.borderColor="var(--line)"},children:"← Zurück zum Live-Modus"})]}),i.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",justifyContent:"center",marginBottom:24},children:G.map((P,z)=>{const m=F[P.id],N=z===0&&m.count>0,O=m.count>0,A=z===0?"🥇":z===1?"🥈":z===2?"🥉":null,q=["var(--gold)","#e5e5e5","#cd7f32"];return i.jsxs("div",{style:{background:N?"linear-gradient(145deg, rgba(255,209,102,0.15) 0%, rgba(30,18,60,0.95) 100%)":"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:N?"1.5px solid var(--gold)":"1px solid rgba(94,58,168,0.4)",padding:"7px 16px",borderRadius:999,fontSize:"0.83rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:8,boxShadow:N?"inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.3), 0 0 16px rgba(255,209,102,0.2)":"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[A&&i.jsx("span",{style:{fontSize:"0.9rem"},children:A}),i.jsx("span",{style:{color:"var(--ink)"},children:ne(P.name)}),i.jsx("span",{style:{color:O?N?"var(--gold)":z<3?q[z]:"var(--cyan)":"var(--muted-dim)"},children:O?m.sum:"–"}),O&&i.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:700,borderLeft:"1px solid var(--line)",paddingLeft:8,color:"var(--muted)"},children:[m.fullHits," 🎯 / ",m.count]})]},P.id)})}),i.jsx("div",{style:{maxWidth:1250,margin:"0 auto"},children:i.jsxs("table",{className:"sb-table battle-table",style:{width:"100%",tableLayout:"fixed"},children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{paddingLeft:15},children:"Song"}),e.jury.map(P=>i.jsx("th",{className:"c col-tipp",children:ne(P.name)},"pp-h-g-"+P.id)),e.jury.map(P=>i.jsx("th",{className:"c col-abw",children:ne(P.name)},"pp-h-d-"+P.id)),i.jsx("th",{className:"c col-place",children:"Platz"})]})}),i.jsx("tbody",{children:h.map(({e:P,songObj:z,pred:m,act:N})=>{const O=z.cc?{"--flag-url":`url('https://flagcdn.com/${z.cc}.svg')`}:{};return i.jsxs("tr",{children:[i.jsxs("td",{style:{...O,position:"relative",overflow:"hidden",padding:0,borderBottom:"1px solid var(--line)"},children:[i.jsx("div",{style:{position:"absolute",left:0,top:"4px",bottom:"4px",width:"200px",backgroundImage:"var(--flag-url)",backgroundSize:"cover",backgroundPosition:"center",maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",opacity:.65,pointerEvents:"none",zIndex:0,borderRadius:"6px"}}),i.jsx("div",{className:"cc-code",style:{position:"absolute",left:38,top:"50%",transform:"translateY(-50%)",zIndex:1,margin:0},children:ne(Nr(z.cc))}),i.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"flex-end",textAlign:"right",padding:"8px 10px",minHeight:54},children:[i.jsx("div",{className:"sb-title",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.9rem"},children:ne(z.title)}),i.jsx("div",{className:"sb-artist",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.75rem"},children:ne(z.artist)})]})]}),e.jury.map(A=>{const q=m[A.id],ce=A.id===n||R;return i.jsx("td",{className:"col-tipp",style:{textAlign:"center",verticalAlign:"middle"},children:i.jsx("input",{type:"number",min:"1",max:c.length,value:q??"",className:"battle-input",readOnly:!ce,disabled:!ce,onChange:Ee=>{const Le=parseInt(Ee.target.value);ue(Ye=>{const ot={...Ye,pred:{...Ye.pred}};return ot.pred[P.id]={...ot.pred[P.id]||{}},Le>0?ot.pred[P.id][A.id]=Le:delete ot.pred[P.id][A.id],ot})},style:{width:45,height:34,fontSize:"1rem",opacity:ce?1:.5,background:ce?void 0:"transparent",border:ce?void 0:"1px solid transparent"}})},"pp-g-"+A.id)}),e.jury.map(A=>{const q=m[A.id];let oe=i.jsx("span",{style:{color:"var(--muted)"},children:"–"});if(q!=null&&N!==void 0&&N!==null){const ce=Math.abs(q-N);ce===0?oe=i.jsx("span",{className:"battle-diff-cell",style:Ze(kt(10)),children:"🎯"}):oe=i.jsx("span",{className:"battle-diff-cell",style:Ze(lo(ce)),children:ce})}return i.jsx("td",{className:"col-abw",style:{verticalAlign:"middle"},children:oe},"pp-d-"+A.id)}),i.jsx("td",{className:"col-place",style:{verticalAlign:"middle"},children:i.jsx("input",{type:"number",min:"1",max:c.length,value:N??"",onChange:A=>{const q=parseInt(A.target.value);ue(oe=>({...oe,years:oe.years.map(Ee=>{if(Ee.id!==y.yearId)return Ee;const Le={...Ee.shows};return Le[s]=Le[s].map(Ye=>{if(Ye.id!==P.id)return Ye;const ot={...Ye};return q>0?ot.place=q:delete ot.place,ot}),{...Ee,shows:Le}})}))},className:"battle-input"+(N===1?" podium-1":N===2?" podium-2":N===3?" podium-3":""),style:{width:45,height:38,fontSize:"1.2rem",fontWeight:700,color:"var(--gold)",background:"linear-gradient(180deg, #2b1e0a 0%, #1a1106 50%, #0a0702 100%)",border:"1.5px solid rgba(255,209,102,0.55)",borderRadius:8,padding:0}})})]},"pp-"+P.id)})})]})})]})}const J=le(g.songId),K=e.jury.map(h=>{const F=L[h.id],G=!J&&(h.id===n||R&&h.id==="j3"),P=J?"–":F??"–";let z="",m="var(--muted)";if(F!=null){const O=kt(F),A=O.match(/color:([^;]+)/);A&&(m=A[1]),z=O.replace(/color:[^;]+;?/,"")}const N=g.songId?"rating_"+g.songId+"_"+h.id:"";return i.jsxs("div",{className:"live-jury-box"+(G?" editable":""),"data-live-flash-key":N||void 0,style:Ze(z),onClick:G?()=>se("rating",{eId:g.id,jurId:h.id}):void 0,title:J?"Boykott – keine Punkte":G?"Punkte ändern":void 0,children:[i.jsx("div",{className:"jury-name",style:{color:m},children:ne(h.name)}),i.jsx("div",{className:"live-big-number",style:{color:m},children:P})]},h.id)}),Q=[];if(B){const h=parseInt(B),F=h===1?"gold":h===2?"silver":h===3?"bronze":"",G=s==="sf1"?"SF1":"SF2";Q.push(i.jsxs("div",{className:"live-current-place "+F,style:{marginRight:8,flexDirection:"column",padding:"6px 14px",lineHeight:1.1},children:[i.jsx("span",{style:{fontSize:"0.6rem",opacity:.8},children:G}),i.jsxs("span",{children:[B,"."]})]},"semi"))}if(W){const h=parseInt(W),F=h===1?"gold":h===2?"silver":h===3?"bronze":"";Q.push(i.jsxs("div",{className:"live-current-place "+F,style:{flexDirection:"column",padding:"6px 14px",lineHeight:1.1},children:[i.jsx("span",{style:{fontSize:"0.6rem",opacity:.8},children:"GF"}),i.jsxs("span",{children:[W,"."]})]},"final"))}const _=c.map((h,F)=>{const G=he(h.songId),P=F===p,z=(()=>{if(s==="final")return F+1;const m=he(c[F].songId);if(c[F].autoFinal!==void 0?c[F].autoFinal:m&&["de","fr","it","es","gb","kr"].indexOf(m.cc)!==-1)return"AQ";let O=0;for(let A=0;A<=F;A++){const q=he(c[A].songId);(c[A].autoFinal!==void 0?c[A].autoFinal:q&&["de","fr","it","es","gb","kr"].indexOf(q.cc)!==-1)||O++}return O})();return i.jsxs("div",{onClick:()=>Du(F),title:G?G.title:"Kein Song",style:{position:"relative",width:64,height:64,borderRadius:14,cursor:"pointer",background:P?"linear-gradient(145deg, rgba(255,209,102,0.25) 0%, rgba(30,18,60,0.98) 70%)":"linear-gradient(145deg, rgba(30,18,60,0.85) 0%, rgba(15,8,32,0.95) 100%)",border:P?"2.5px solid var(--gold)":"1.5px solid rgba(148,94,255,0.3)",boxShadow:P?"0 0 20px rgba(255,209,102,0.5), inset 0 1px 0 rgba(255,255,255,0.15)":"inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 6px rgba(0,0,0,0.3)",transition:"all 0.2s ease",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",flexShrink:0},onMouseEnter:m=>{P||(m.currentTarget.style.borderColor="rgba(168,85,247,0.7)",m.currentTarget.style.transform="scale(1.08)")},onMouseLeave:m=>{P||(m.currentTarget.style.borderColor="rgba(148,94,255,0.3)",m.currentTarget.style.transform="scale(1)")},children:[G?i.jsx("img",{src:`https://flagcdn.com/w80/${G.cc}.png`,alt:G.cc,style:{width:P?42:34,height:P?28:22,objectFit:"cover",borderRadius:4,boxShadow:"0 0 0 1.5px rgba(255,255,255,0.3)",filter:P?"none":"grayscale(0.4) brightness(0.85)",transition:"all 0.2s ease"}}):i.jsx("span",{style:{fontSize:"1.2rem",color:"var(--muted-dim)"},children:"–"}),i.jsx("div",{style:{position:"absolute",top:2,left:2,fontSize:"0.55rem",fontWeight:900,fontFamily:"var(--display)",padding:"1px 5px",borderRadius:5,background:P?"rgba(255,209,102,0.9)":"rgba(5,3,15,0.85)",color:P?"#1d1d1d":"var(--muted)",border:P?"1px solid #fff6cc":"1px solid rgba(255,255,255,0.15)",letterSpacing:"0.03em",lineHeight:1.2},children:z}),P&&i.jsx("div",{style:{position:"absolute",bottom:0,right:0,width:0,height:0,borderStyle:"solid",borderWidth:"0 0 16px 16px",borderColor:"transparent transparent var(--gold) transparent"}})]},h.id)});let w;S?w=i.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",width:"100%",position:"relative",zIndex:1,paddingTop:10},children:[i.jsx("div",{className:"live-cc-badge",children:ne(Nr(S.cc))}),i.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Q.length>0&&i.jsx("div",{style:{display:"flex",gap:6,marginBottom:10,flexWrap:"wrap",justifyContent:"center"},children:Q}),i.jsx("div",{style:{fontSize:"0.78rem",color:"var(--gold)",fontWeight:800,marginBottom:8,letterSpacing:"0.12em",textTransform:"uppercase",textShadow:"0 1px 2px rgba(0,0,0,0.8), 0 0 8px rgba(255,209,102,0.3)"},children:s==="final"?`● Now Playing · Startnummer ${D}`:C?"● Now Playing · Auto Qualifier":`● Now Playing · Startnummer ${D}`}),i.jsx("h2",{style:{fontSize:"2.5rem",margin:"0 0 6px",paddingBottom:"4px",fontWeight:800,letterSpacing:"-0.02em",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"#fff",lineHeight:1.2,textShadow:"0 1px 2px rgba(0,0,0,0.85)"},children:ne(S.title)}),i.jsxs("p",{style:{fontSize:"1.2rem",color:"#d8cdf0",margin:0,paddingBottom:"6px",fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textShadow:"0 1px 2px rgba(0,0,0,0.8)"},children:[ne(S.artist)," · ",ne(Ke[S.cc]||S.cc.toUpperCase())]})]})]}):w=i.jsxs("div",{style:{flex:1,textAlign:"center",padding:14},children:[i.jsxs("h3",{children:["Startnummer ",p+1]}),i.jsx("p",{className:"empty",style:{margin:"4px 0 14px"},children:"Kein Song zugewiesen."}),i.jsx("button",{className:"primary",onClick:()=>se("picker",{entryId:g.id}),children:"＋ Song hinzufügen"})]});const E=S?"https://flagcdn.com/"+S.cc+".svg":"";return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"live-mode-banner",style:{padding:"0",background:"transparent",border:"none",boxShadow:"none"},children:[i.jsxs("div",{style:{position:"relative"},children:[i.jsxs("div",{style:{position:"absolute",top:14,left:14,zIndex:10,display:"flex",alignItems:"center",gap:8,pointerEvents:"none"},children:[i.jsx("div",{className:"live-dot",style:{width:18,height:18,border:"2.5px solid var(--bg)",boxShadow:"0 0 12px rgba(255,45,149,0.8), 0 0 24px rgba(255,45,149,0.4)"},title:"Live"}),i.jsx("span",{style:{fontFamily:"var(--display)",fontWeight:900,fontSize:"0.75rem",letterSpacing:"0.16em",color:"var(--red)",textShadow:"0 0 10px rgba(255,45,149,0.9), 0 0 20px rgba(255,45,149,0.5)"},children:"LIVE"})]}),i.jsxs("div",{className:"live-current-card live-song-slide "+(M>0?"from-right":"from-left"),style:{"--live-flag-url":`url('${E}')`,padding:"56px 36px",minHeight:"280px",borderRadius:26},children:[i.jsxs("div",{style:{position:"absolute",top:16,right:16,display:"flex",gap:8,zIndex:10},children:[i.jsx("button",{onClick:Ou,title:"Vorheriger Song",style:{width:38,height:38,borderRadius:"50%",background:"rgba(5,3,15,0.85)",color:"#fff",fontWeight:800,fontSize:"1rem",border:"1.5px solid rgba(255,255,255,0.25)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,transition:"transform 0.15s ease, border-color 0.15s ease, background 0.15s ease",backdropFilter:"none"},onMouseEnter:h=>{h.currentTarget.style.transform="scale(1.1)",h.currentTarget.style.borderColor="var(--gold)",h.currentTarget.style.background="rgba(255,209,102,0.2)"},onMouseLeave:h=>{h.currentTarget.style.transform="scale(1)",h.currentTarget.style.borderColor="rgba(255,255,255,0.25)",h.currentTarget.style.background="rgba(5,3,15,0.85)"},children:"◀"}),i.jsx("button",{onClick:Mu,title:"Nächster Song",style:{width:38,height:38,borderRadius:"50%",background:"rgba(5,3,15,0.85)",color:"#fff",fontWeight:800,fontSize:"1rem",border:"1.5px solid rgba(255,255,255,0.25)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,transition:"transform 0.15s ease, border-color 0.15s ease, background 0.15s ease",backdropFilter:"none"},onMouseEnter:h=>{h.currentTarget.style.transform="scale(1.1)",h.currentTarget.style.borderColor="var(--gold)",h.currentTarget.style.background="rgba(255,209,102,0.2)"},onMouseLeave:h=>{h.currentTarget.style.transform="scale(1)",h.currentTarget.style.borderColor="rgba(255,255,255,0.25)",h.currentTarget.style.background="rgba(5,3,15,0.85)"},children:"▶"})]}),w]},p)]}),i.jsx("div",{className:"live-flow-jury",style:{display:"flex",gap:10,marginTop:16,flexWrap:"wrap"},children:K},"jury-"+p)]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:36,marginBottom:16},children:[i.jsx("h3",{style:{margin:0,fontSize:"1.2rem"},children:"Running Order"}),i.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:800,color:"var(--muted)",background:"var(--panel2-solid)",padding:"3px 10px",borderRadius:999,border:"1px solid var(--line)",letterSpacing:"0.08em"},children:[c.length," Songs"]})]}),i.jsx("div",{className:"live-flow-queue",style:{display:"flex",flexWrap:"wrap",gap:10,paddingTop:4,paddingBottom:8},children:_},"queue-"+p),s==="final"&&i.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:28,marginBottom:8},children:i.jsxs("button",{onClick:()=>ue(h=>({...h,livePredictionMode:!0})),style:{display:"inline-flex",alignItems:"center",gap:10,padding:"9px 22px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(255,209,102,0.45)",color:"var(--gold)",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35), 0 0 12px rgba(255,209,102,0.12)"},onMouseEnter:h=>{h.currentTarget.style.transform="translateY(-1px)",h.currentTarget.style.borderColor="var(--gold)",h.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(255,209,102,0.25)"},onMouseLeave:h=>{h.currentTarget.style.transform="translateY(0)",h.currentTarget.style.borderColor="rgba(255,209,102,0.45)",h.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35), 0 0 12px rgba(255,209,102,0.12)"},title:"Live Prediction-Ansicht öffnen",children:[i.jsx("span",{style:{fontSize:"1rem"},children:"🎯"}),i.jsx("span",{children:"Live Prediction Battle"})]})}),s==="final"&&e.livePredictionMode&&i.jsxs("div",{style:{marginTop:32},children:[i.jsx("h3",{style:{marginBottom:16,fontSize:"1.3rem"},children:"🎯 Live Prediction-Übersicht"}),i.jsx("p",{className:"hint",style:{marginBottom:16},children:"Trage die tatsächlichen Plätze ein und sieh die Abweichungen der Tipps."}),i.jsx("div",{style:{background:"linear-gradient(145deg, rgba(25,14,52,0.95) 0%, rgba(10,5,22,0.98) 100%)",border:"1px solid rgba(94,58,168,0.3)",borderRadius:18,overflow:"hidden"},children:i.jsxs("table",{className:"sb-table battle-table",style:{width:"100%",tableLayout:"fixed"},children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{paddingLeft:15,width:"auto"},children:"Song"}),e.jury.map(h=>i.jsx("th",{className:"c col-tipp",style:{width:60},children:ne(h.name)},"pred-h-g-"+h.id)),e.jury.map(h=>i.jsx("th",{className:"c col-abw",style:{width:55},children:ne(h.name)},"pred-h-d-"+h.id)),i.jsx("th",{className:"c col-place",style:{width:55},children:"Platz"})]})}),i.jsx("tbody",{children:c.map(h=>{const F=he(h.songId);if(!F)return null;const G=e.pred[h.id]||{},P=h.place;return i.jsxs("tr",{children:[i.jsx("td",{style:{padding:"8px 10px",position:"relative"},children:F&&i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[i.jsx(wt,{cc:F.cc}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",lineHeight:1.15},children:[i.jsx("span",{style:{fontFamily:"var(--display)",fontWeight:700,fontSize:"0.9rem",color:"var(--ink)"},children:ne(F.title)}),i.jsx("span",{style:{fontSize:"0.72rem",color:"var(--muted)"},children:ne(F.artist)})]})]})}),e.jury.map(z=>{const m=G[z.id],N=z.id===n;return i.jsx("td",{className:"col-tipp",style:{textAlign:"center"},children:i.jsx("input",{type:"number",min:"1",max:c.length,value:m??"",className:"battle-input",readOnly:!N&&!R,disabled:!N&&!R,onChange:O=>{const A=parseInt(O.target.value);ue(q=>{const oe={...q,pred:{...q.pred}};return oe.pred[h.id]={...oe.pred[h.id]||{}},A>0?oe.pred[h.id][z.id]=A:delete oe.pred[h.id][z.id],oe})},style:{background:N||R?"var(--panel2-solid)":"transparent",border:N||R?"1px solid var(--line)":"1px solid transparent",opacity:N||R?1:.5}})},"pred-g-"+z.id)}),e.jury.map(z=>{const m=G[z.id];let N=i.jsx("span",{style:{color:"var(--muted)"},children:"–"});if(m!=null&&P!==void 0&&P!==null){const O=Math.abs(m-P);O===0?N=i.jsx("span",{className:"battle-diff-cell",style:Ze(kt(10)),children:"🎯"}):N=i.jsx("span",{className:"battle-diff-cell",style:Ze(lo(O)),children:O})}return i.jsx("td",{className:"col-abw",children:N},"pred-d-"+z.id)}),i.jsx("td",{className:"col-place",children:i.jsx("input",{type:"number",min:"1",max:c.length,value:P??"",onChange:z=>{const m=parseInt(z.target.value);ue(N=>({...N,years:N.years.map(A=>{if(A.id!==y.yearId)return A;const q={...A.shows};return q[s]=q[s].map(oe=>{if(oe.id!==h.id)return oe;const ce={...oe};return m>0?ce.place=m:delete ce.place,ce}),{...A,shows:q}})}))},style:{width:45,height:34,fontSize:"1rem",fontWeight:700,fontFamily:"var(--number-font)",textAlign:"center",color:"var(--gold)",background:"linear-gradient(180deg, #2b1e0a 0%, #1a1106 50%, #0a0702 100%)",border:"1.5px solid rgba(255,209,102,0.55)",borderRadius:8,padding:0}})})]},"pred-"+h.id)})})]})})]})]})},u0=()=>{const s=ve(y.yearId);if(!s)return Zl();let d=y.tab;!s.shows[d]&&d!=="overview"&&d!=="battle"&&d!=="sb"&&d!=="stats"&&(d=s.shows.sf1?"sf1":s.shows.sf2?"sf2":s.shows.final?"final":"overview");const c=Lu();let p;s.shows[d]&&c?p=c0(d):s.shows[d]?p=m0(d):d==="overview"?p=g0():d==="battle"?p=h0():d==="sb"?p=x0():d==="stats"&&(p=f0(s));const g=s.year+(s.suffix?" ("+s.suffix+")":""),x=!!s.shows.sf1,C=!!s.shows.sf2,I=!!s.shows.final,D=i.jsx("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",paddingTop:18,flexWrap:"wrap",gap:12},children:i.jsxs("button",{onClick:bn,style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px 9px 14px",borderRadius:999,background:"linear-gradient(145deg, rgba(16,8,34,0.95) 0%, rgba(9,4,20,1) 100%)",border:"1px solid rgba(148,94,255,0.2)",color:"var(--ink)",fontWeight:700,fontSize:"0.85rem",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.5)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:h=>{h.currentTarget.style.transform="translateX(-2px)",h.currentTarget.style.borderColor="rgba(168,85,247,0.6)",h.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 6px 16px rgba(0,0,0,0.6), 0 0 18px rgba(168,85,247,0.15)"},onMouseLeave:h=>{h.currentTarget.style.transform="translateX(0)",h.currentTarget.style.borderColor="rgba(148,94,255,0.2)",h.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.5)"},children:[i.jsx("span",{style:{fontSize:"1rem",lineHeight:1},children:"←"})," Zurück"]})}),S=!!(s.city||s.hostCc),L=i.jsxs("div",{className:"year-host-bubble",onClick:()=>se("editYear"),style:{cursor:"pointer",position:"relative"},children:[i.jsx("span",{className:"year-host-year",children:ne(g)}),S&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"year-host-divider"}),i.jsx("div",{className:"year-host-flag",children:s.hostCc?i.jsx(wt,{cc:s.hostCc}):"🌍"}),i.jsxs("div",{className:"year-host-text",children:[s.hostCc&&i.jsx("span",{className:"year-host-cc",children:ne(Ke[s.hostCc]||s.hostCc.toUpperCase())}),s.city&&i.jsx("span",{className:"year-host-city",children:ne(s.city)})]})]}),i.jsx("div",{className:"year-host-hover-popup",children:"✏️ Klicken zum Bearbeiten"})]}),B=i.jsxs("div",{style:{textAlign:"center",marginBottom:24},children:[i.jsx("img",{src:"./ESCLOGO.png",alt:"Eurovision Song Contest",style:{display:"block",margin:"0 auto 16px",height:90,width:"auto",filter:"drop-shadow(0 4px 16px rgba(0,0,0,0.5)) drop-shadow(0 0 16px rgba(255,45,149,0.15)) drop-shadow(0 0 6px rgba(255,209,102,0.15))"}}),L]}),W=c?{background:"rgba(255,255,255,0.04)",color:"var(--muted)",borderColor:"rgba(148,94,255,0.25)",fontWeight:600,fontSize:"0.82rem",padding:"7px 14px",opacity:.75}:{background:"linear-gradient(135deg, rgba(255,45,149,0.14) 0%, rgba(168,85,247,0.1) 100%)",color:"#ffd6ea",borderColor:"rgba(255,45,149,0.35)",fontWeight:700,fontSize:"0.85rem",padding:"8px 18px",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(255,45,149,0.12)"},K=(e.liveState[y.yearId]||{}).activeTab,Q=i.jsxs("div",{className:"tabs",children:[x&&i.jsx("button",{style:{width:130},className:(y.tab==="sf1"?"on":"")+(K==="sf1"?" live-active":""),onClick:()=>Dt("sf1"),children:"Semi-final 1"}),C&&i.jsx("button",{style:{width:130},className:(y.tab==="sf2"?"on":"")+(K==="sf2"?" live-active":""),onClick:()=>Dt("sf2"),children:"Semi-final 2"}),I&&i.jsx("button",{style:{width:130},className:(y.tab==="final"?"on":"")+(K==="final"?" live-active":"")+" final-tab",onClick:()=>Dt("final"),children:"Grand Final"})]}),_=h=>{if(!h)return"";const F=new Date(h+"T00:00:00");if(isNaN(F))return"";const G=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"];return F.getDate()+". "+G[F.getMonth()]+" "+F.getFullYear()},w=s.showDates||{};w[y.tab];const E=i.jsxs("div",{style:{marginBottom:20},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16},children:[i.jsx("div",{children:Q}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[s.shows[y.tab]&&i.jsx("button",{onClick:_u,style:W,onMouseEnter:h=>{c?(h.currentTarget.style.opacity="1",h.currentTarget.style.borderColor="rgba(255,77,109,0.6)",h.currentTarget.style.color="#ffb3c1"):(h.currentTarget.style.transform="translateY(-1px)",h.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(255,45,149,0.22)")},onMouseLeave:h=>{c?(h.currentTarget.style.opacity="0.75",h.currentTarget.style.borderColor="rgba(148,94,255,0.25)",h.currentTarget.style.color="var(--muted)"):(h.currentTarget.style.transform="translateY(0)",h.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(255,45,149,0.12)")},title:c?"Live-Modus verlassen":"Live-Modus starten",children:c?i.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,opacity:.9},children:[i.jsx("span",{style:{fontSize:"0.7rem",letterSpacing:"0.1em"},children:"●"}),i.jsx("span",{style:{fontSize:"0.78rem",letterSpacing:"0.04em"},children:"Live verlassen"})]}):i.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:7},children:[i.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:"var(--red)",boxShadow:"0 0 8px var(--red)"}}),i.jsx("span",{style:{letterSpacing:"0.03em"},children:"Live Mode"})]})}),i.jsxs("div",{className:"tabs",children:[i.jsx("button",{style:{width:130},className:y.tab==="battle"?"on":"",onClick:()=>Dt("battle"),children:"Predictions"}),i.jsx("button",{style:{width:130},className:y.tab==="sb"?"on":"",onClick:()=>Dt("sb"),children:"Scoreboard"}),i.jsx("button",{style:{width:130},className:y.tab==="stats"?"on":"",onClick:()=>Dt("stats"),children:"Statistics"})]})]})]}),(y.tab==="sf1"||y.tab==="sf2"||y.tab==="final")&&w[y.tab]&&i.jsx("div",{style:{textAlign:"center",margin:"16px 0 12px"},children:i.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,padding:"2px 10px",borderRadius:8,background:"rgba(255,209,102,0.06)",border:"1px solid rgba(255,209,102,0.15)",fontFamily:"var(--display)",fontSize:"0.72rem",fontWeight:800,color:"var(--gold)",letterSpacing:"0.04em"},children:[i.jsx("span",{style:{fontSize:"0.7rem",opacity:.7},children:"📅"}),_(w[y.tab])," · ",w[y.tab+"Time"]||"21:00"," Uhr"]})}),i.jsx("div",{style:{borderBottom:"1px solid var(--line)",marginBottom:16}})]});return i.jsxs(i.Fragment,{children:[D,B,E,p]})},p0=()=>{const s=ve(y.yearId);if(!s)return null;const d=[];for(const c in kn)s.shows[c]&&d.push(i.jsx("button",{className:y.sbShow===c?"on":"",onClick:()=>$(p=>({...p,sbShow:c})),children:kn[c]},c));return d.push(i.jsx("button",{className:y.sbShow==="all"?"on":"",onClick:()=>$(c=>({...c,sbShow:"all"})),children:"All Songs"},"all")),i.jsx("div",{className:"seg",children:d})};function Ze(s){if(!s)return{};const d={};return s.split(";").forEach(c=>{const[p,...g]=c.split(":");if(!p||!g.length)return;const x=p.trim().replace(/-([a-z])/g,(C,I)=>I.toUpperCase());d[x]=g.join(":").trim()}),d}const f0=s=>{const d=new Map,c=[];for(const _ in s.shows)for(const w of s.shows[_]||[]){const E=he(w.songId);if(!E)continue;const h=Ve(w);c.push({entry:w,song:E,showKey:_,showName:kn[_],r:h}),d.has(E.id)||d.set(E.id,E)}const p={};for(const _ of c){if(le(_.song.id))continue;const w=e.jury.map(h=>_.r[h.id]).filter(h=>h!=null);if(!w.length)continue;p[_.song.id]||(p[_.song.id]={sum:0,count:0,ratings:[],song:_.song}),p[_.song.id].seen||(p[_.song.id].sum+=w.reduce((h,F)=>h+F,0),p[_.song.id].count+=w.length,p[_.song.id].ratings=w,p[_.song.id].seen=!0)}const g=Object.values(p),x=g.filter(_=>_.sum>=40).sort((_,w)=>w.sum-_.sum),C=g.filter(_=>_.sum>=35).length,I=g.filter(_=>_.sum<15).length;let D=null;for(const _ of g){if(_.ratings.length<2)continue;const w=Math.max(..._.ratings)-Math.min(..._.ratings);(!D||w>D.spread)&&(D={..._,spread:w})}let S=null;for(const _ of g){if(_.ratings.length<2)continue;const w=Math.max(..._.ratings)-Math.min(..._.ratings);(!S||w<S.spread)&&(S={..._,spread:w})}const L={};for(const _ of g){const w=_.ratings.filter(E=>E===12).length;w>0&&(L[_.song.id]={count:w,song:_.song})}let B=null;for(const _ in L)(!B||L[_].count>B.count)&&(B=L[_]);const W={};for(const _ of g){const w=_.ratings.filter(E=>E===1).length;w>0&&(W[_.song.id]={count:w,song:_.song})}let J=null;for(const _ in W)(!J||W[_].count>J.count)&&(J=W[_]);const K={};for(const _ in s.shows){let w=0,E=0;for(const h of s.shows[_]||[]){const F=Ve(h);for(const G of e.jury){const P=F[G.id];P!=null&&(w+=P,E++)}}E>0&&(K[_]={avg:w/E,count:E})}const Q=({icon:_,title:w,value:E,subtitle:h,accent:F})=>i.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:`1px solid ${F||"rgba(94,58,168,0.4)"}`,borderRadius:18,padding:"18px 20px",display:"flex",flexDirection:"column",gap:6,boxShadow:F?`inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 16px rgba(0,0,0,0.4), 0 0 16px ${F}22`:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[i.jsx("span",{style:{fontSize:"1.4rem",filter:"drop-shadow(0 2px 6px rgba(0,0,0,0.5))"},children:_}),i.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,color:"var(--muted)",letterSpacing:"0.12em",textTransform:"uppercase"},children:w})]}),i.jsx("div",{style:{fontFamily:"var(--display)",fontSize:"1.4rem",fontWeight:800,color:F||"var(--ink)",letterSpacing:"-0.01em",lineHeight:1.2,textShadow:F?`0 0 12px ${F}66`:"none"},children:E}),h&&i.jsx("div",{style:{fontSize:"0.78rem",color:"var(--muted)",fontWeight:500,lineHeight:1.35},children:h})]});return i.jsxs(i.Fragment,{children:[i.jsxs("h2",{style:{margin:"0 0 8px"},children:["📊 Statistiken ",s.year,s.suffix?" ("+s.suffix+")":""]}),i.jsx("p",{className:"hint",style:{marginBottom:24},children:"Rekorde und Kuriositäten aus diesem Wettbewerb."}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:14,marginBottom:20},children:[i.jsx(Q,{icon:"💯",title:"Songs über 40 Pts",value:`${x.length} ${x.length===1?"Song":"Songs"}`,subtitle:x.length>0?x.slice(0,2).map(_=>`${_.song.title} (${_.sum})`).join(" · "):"Kein Song hat 40 Punkte erreicht",accent:"var(--gold)"}),i.jsx(Q,{icon:"📈",title:"Songs über 35 Pts",value:`${C} ${C===1?"Song":"Songs"}`,subtitle:`${I} ${I===1?"Song":"Songs"} unter 15 Punkten`,accent:"var(--cyan)"}),B&&i.jsx(Q,{icon:"🎯",title:"Meiste 12er",value:`${B.count} × 12`,subtitle:`${B.song.title} – ${B.song.artist}`,accent:"var(--violet)"}),J&&i.jsx(Q,{icon:"💔",title:"Meiste 1er",value:`${J.count} × 1`,subtitle:`${J.song.title} – ${J.song.artist}`,accent:"#ff6b9d"}),D&&i.jsx(Q,{icon:"⚡",title:"Polarisierendster Song",value:`±${D.spread}`,subtitle:`${D.song.title} · Bewertungen von ${Math.min(...D.ratings)} bis ${Math.max(...D.ratings)}`,accent:"#f97316"}),S&&i.jsx(Q,{icon:"🤝",title:"Einigster Song",value:`±${S.spread}`,subtitle:`${S.song.title} · Bewertungen von ${Math.min(...S.ratings)} bis ${Math.max(...S.ratings)}`,accent:"var(--green)"})]}),i.jsx("h3",{style:{marginBottom:14,fontSize:"1.1rem",color:"var(--gold)"},children:"📊 Durchschnitt pro Show"}),i.jsx("div",{style:{background:"linear-gradient(145deg, rgba(25,14,52,0.95) 0%, rgba(10,5,22,0.98) 100%)",border:"1px solid rgba(94,58,168,0.3)",borderRadius:18,padding:"16px 20px",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:Object.keys(kn).filter(_=>s.shows[_]&&K[_]).map(_=>{const w=K[_];return i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:14,padding:"8px 14px",background:"rgba(94,58,168,0.12)",border:"1px solid rgba(94,58,168,0.3)",borderRadius:10},children:[i.jsx("span",{style:{fontFamily:"var(--display)",fontWeight:700,fontSize:"0.85rem",color:"var(--ink)"},children:kn[_]}),i.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6},children:[i.jsx("span",{style:{fontFamily:"var(--number-font)",fontSize:"1.3rem",color:"var(--cyan)",textShadow:"0 0 8px rgba(34,211,238,0.4)"},children:w.avg.toFixed(2)}),i.jsxs("span",{style:{fontSize:"0.6rem",fontWeight:700,color:"var(--muted-dim)",letterSpacing:"0.1em",textTransform:"uppercase"},children:["Ø Pts / ",w.count," Bewertungen"]})]})]},_)})})}),x.length>0&&i.jsxs(i.Fragment,{children:[i.jsx("h3",{style:{margin:"28px 0 14px",fontSize:"1.1rem",color:"var(--gold)"},children:"🏆 Songs über 40 Punkte"}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:12},children:x.map((_,w)=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",background:"linear-gradient(145deg, rgba(80,50,20,0.25) 0%, rgba(15,8,32,0.95) 100%)",border:"1px solid rgba(255,209,102,0.4)",borderRadius:14,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.06), 0 2px 8px rgba(0,0,0,0.3)"},children:[i.jsx("div",{style:{fontFamily:"var(--number-font)",fontSize:"1.5rem",color:w===0?"#ffd166":"rgba(255,209,102,0.7)",minWidth:34,textAlign:"center",textShadow:w===0?"0 0 14px rgba(255,209,102,0.6)":"none"},children:w+1}),i.jsx(wt,{cc:_.song.cc}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2,minWidth:0,flex:1},children:[i.jsx("span",{style:{fontFamily:"var(--display)",fontWeight:700,fontSize:"0.9rem",color:"var(--ink)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:_.song.title}),i.jsx("span",{style:{fontSize:"0.75rem",color:"var(--muted)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:_.song.artist})]}),i.jsx("div",{style:{fontFamily:"var(--number-font)",fontSize:"1.3rem",color:"var(--gold)",textShadow:"0 0 8px rgba(255,209,102,0.4)"},children:_.sum})]},_.song.id))})]}),x.length===0&&i.jsx("p",{className:"empty",style:{padding:"30px 0"},children:"Kein Song hat in diesem Jahr die 40-Punkte-Marke geknackt. 😐"})]})},g0=()=>{const s=ve(y.yearId),d=La(),c=!!(s.shows.sf1||s.shows.sf2),p=c?i.jsxs("div",{className:"tabs",style:{border:"none",margin:"18px 0"},children:[i.jsx("button",{className:y.ovSubTab==="semis"?"on":"",onClick:()=>$(D=>({...D,ovSubTab:"semis"})),children:"Semi-finals"}),i.jsx("button",{className:y.ovSubTab==="final"?"on":"",onClick:()=>$(D=>({...D,ovSubTab:"final"})),children:"Grand Final"})]}):null,g=D=>i.jsx("div",{style:{display:"flex",gap:3,marginBottom:8,justifyContent:D?"flex-end":"flex-start",padding:"0 2px"},children:e.jury.map((S,L)=>i.jsx("div",{style:{width:30,textAlign:"center",fontSize:"0.68rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.05em"},title:ne(S.name),children:ne(d[L])},S.id))}),x=D=>{const S=Ve(D);return i.jsx("div",{className:"ov-pts",children:e.jury.map(L=>{const B=S[L.id],W=B?Ze(kt(B)):{};return i.jsx("span",{className:"ov-pt"+(B!=null?"":" none"),style:W,children:B??""},L.id)})})};if(y.ovSubTab==="final"||!c){const D=s.shows.final||[];return i.jsxs(i.Fragment,{children:[i.jsx("h2",{children:"Overview"}),i.jsx("p",{className:"hint",children:"Everyone's points side by side. Disqualified or non-qualifying countries are greyed out."}),p,i.jsxs("div",{className:"card",style:{marginTop:18},children:[i.jsx("h3",{style:{textAlign:"center",marginBottom:14,fontSize:"1.1rem"},children:"Grand Final"}),g(!1),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:D.map(S=>{const L=he(S.songId),B=S.dq;return i.jsxs("div",{className:"ov-row-item",children:[x(S),L?i.jsx("span",{className:"ov-pill"+(B?" out":""),children:i.jsxs("div",{className:"song-info",children:[i.jsx(wt,{cc:L.cc}),i.jsx("span",{children:i.jsx("b",{children:ne(L.title)})})]})}):i.jsx("span",{className:"ov-pill out",children:i.jsx("div",{className:"song-info",children:i.jsx("span",{children:"–"})})}),i.jsx("div",{style:{flexGrow:1}}),i.jsx("span",{className:"ov-place",children:S.place?S.place+".":"–"})]},S.id)})})]})]})}const C=(D,S,L)=>{const B=s.shows[D]||[];return i.jsxs("div",{className:"ov-column",children:[i.jsx("div",{className:"ov-col-title",children:S}),g(L),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:B.map(W=>{const J=he(W.songId),K=W.place&&W.place>10||W.dq,Q=i.jsx("span",{className:"ov-place",children:W.place?W.place+".":"–"}),_=J?i.jsx("span",{className:"ov-pill"+(K?" out":""),children:i.jsxs("div",{className:"song-info",children:[i.jsx(wt,{cc:J.cc}),i.jsx("span",{children:i.jsx("b",{children:ne(J.title)})})]})}):i.jsx("span",{className:"ov-pill out",children:i.jsx("div",{className:"song-info",children:i.jsx("span",{children:"–"})})}),w=x(W);return i.jsx("div",{className:"ov-row-item",children:L?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{flexGrow:1}}),Q,_,w]}):i.jsxs(i.Fragment,{children:[w,_,i.jsx("div",{style:{flexGrow:1}}),Q]})},W.id)})})]})};let I;return s.shows.sf1&&s.shows.sf2?I=i.jsxs(i.Fragment,{children:[C("sf1","Semi-final 1",!1),C("sf2","Semi-final 2",!0)]}):s.shows.sf1?I=C("sf1","Semi-final 1",!1):s.shows.sf2&&(I=C("sf2","Semi-final 2",!1)),i.jsxs(i.Fragment,{children:[i.jsx("h2",{children:"Overview"}),i.jsx("p",{className:"hint",children:"Everyone's points side by side. Disqualified or non-qualifying countries are greyed out."}),p,i.jsx("div",{className:"ov-grid-side",children:I})]})},m0=s=>{const d=ve(y.yearId),c=d.shows[s]||[],p=La(),g={};e.jury.forEach(z=>{g[z.id]=0}),c.forEach(z=>{if(z.songId){const m=Ve(z);e.jury.forEach(N=>{m[N.id]&&(g[N.id]+=m[N.id])})}});let x=-1,C=99999;for(const z in g)g[z]>x&&(x=g[z]),g[z]<C&&(C=g[z]);(x===C||x===0)&&(x=-1,C=99999);const I={};e.jury.forEach(z=>{I[z.id]={correct:0,totalGuessed:0}}),s!=="final"&&c.forEach(z=>{const m=X(z),N=z.place!==void 0&&z.place!==null?z.place>10:null;N!==null&&e.jury.forEach(O=>{m[O.id]===!1&&(I[O.id].totalGuessed++,N===!0&&I[O.id].correct++)})});const D=i.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:e.jury.map(z=>{const m=g[z.id];let N="var(--cyan)";m===x&&(N="var(--green)"),m===C&&(N="#ffb3c1");let O=null;if(s!=="final"){const A=I[z.id],q=A.totalGuessed>0&&A.correct===A.totalGuessed?"var(--gold)":"var(--muted)";O=i.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:700,borderLeft:"1px solid var(--line)",paddingLeft:8,color:q},children:[A.correct," / ",A.totalGuessed," NQs"]})}return i.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:"1px solid rgba(94,58,168,0.4)",padding:"7px 16px",borderRadius:999,fontSize:"0.83rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:8,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[i.jsx("span",{style:{color:"var(--ink)"},children:ne(z.name)}),i.jsxs("span",{style:{color:N},children:[m," pts"]}),O]},z.id)})});let S=c.slice();y.sortMode==="place"&&S.sort((z,m)=>{const N=he(z.songId),O=he(m.songId),A=z.autoFinal!==void 0?z.autoFinal:N&&["de","fr","it","es","gb","kr"].indexOf(N.cc)!==-1,q=m.autoFinal!==void 0?m.autoFinal:O&&["de","fr","it","es","gb","kr"].indexOf(O.cc)!==-1;if(s!=="final"&&A!==q)return A?-1:1;const oe=z.place!==void 0&&z.place!==null?z.place:9999,ce=m.place!==void 0&&m.place!==null?m.place:9999;return oe!==ce?oe-ce:c.indexOf(z)-c.indexOf(m)});const L={};c.forEach(z=>{z.place&&(L[z.place]=(L[z.place]||0)+1)});const B=null,W=i.jsxs("div",{className:"tabs tabs-small edle-slider",style:{margin:0},children:[i.jsx("button",{className:y.sortMode==="order"?"on":"",onClick:()=>$(z=>({...z,sortMode:"order"})),children:"Order"}),i.jsx("button",{className:y.sortMode==="place"?"on":"",onClick:()=>$(z=>({...z,sortMode:"place"})),children:"Placement"})]});let J=null;if(y.editMode&&S.length>1){d.splitAfter=d.splitAfter||{};const z=Math.floor(S.length/2),m=d.splitAfter[s]!==void 0?d.splitAfter[s]:z;J=i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:"0.85rem",color:"var(--muted)",background:"var(--panel2-solid)",padding:"5px 12px",borderRadius:999,border:"1px solid var(--line)"},children:[i.jsx("span",{children:"1. Hälfte bis Nr.:"}),i.jsx("input",{type:"number",min:"1",max:S.length-1,value:m,onChange:N=>{ue(O=>({...O,years:O.years.map(A=>A.id===y.yearId?{...A,splitAfter:{...A.splitAfter||{},[s]:parseInt(N.target.value)||1}}:A)}))},style:{width:58,height:34,textAlign:"center",fontWeight:700,padding:0}})]})}const K=d.showDates&&d.showDates[s]||null,Q=d.showDates&&d.showDates[s+"Time"]||"21:00";K&&((z,m)=>{if(!z)return"";const N=new Date(z+"T00:00:00");if(isNaN(N))return"";const O=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"];return N.getDate()+". "+O[N.getMonth()]+" "+N.getFullYear()+" · "+m+" Uhr"})(K,Q);const w=i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"18px 0 16px",flexWrap:"wrap",gap:14},children:[i.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap",flex:1,justifyContent:"flex-start"},children:[B,J]}),i.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:"auto"},children:D}),i.jsx("div",{style:{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap",flex:1,justifyContent:"flex-end"},children:W})]}),E=[],h=[];d.splitAfter=d.splitAfter||{};const F=d.splitAfter[s]!==void 0?d.splitAfter[s]:Math.floor(S.length/2);for(let z=0;z<S.length;z++){const m=S[z],N=z+1,O=c.indexOf(m),A={item:m,index:O!==-1?O:z};N>F&&y.sortMode==="order"||y.sortMode==="place"&&z>=Math.ceil(S.length/2)?h.push(A):E.push(A)}const G=z=>{const m=z.item,N=z.index,O=he(m.songId),A=Ve(m),q=X(m),oe=m.autoFinal!==void 0?m.autoFinal:O&&["de","fr","it","es","gb","kr"].indexOf(O.cc)!==-1;m.place!==void 0&&m.place!==null&&m.place<=10;let ce;if(le(m.songId))ce=i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"tiles",children:i.jsx("div",{className:"tile",style:{width:196,height:50,background:"linear-gradient(135deg, rgba(255,77,109,0.25) 0%, rgba(80,15,30,0.6) 100%)",border:"2.5px solid rgba(255,77,109,0.7)",borderRadius:12,color:"#ffb3c1",fontFamily:"var(--display)",fontSize:"0.85rem",fontWeight:800,letterSpacing:"0.12em",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 14px rgba(255,77,109,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",cursor:"default",pointerEvents:"none",flexShrink:0},title:"Boykott – keine Punkte",children:"🚫 BOYKOTT"})}),i.jsxs("div",{className:"avg",style:{visibility:"hidden"},children:[i.jsx("b",{children:"–"}),i.jsx("small",{children:"AVG"})]})]});else if(s!=="final"&&oe)ce=i.jsx("div",{className:"tiles",children:i.jsx("div",{className:"tile aq-tile",title:"Auto Qualifier – direkt fürs Finale gesetzt",style:{width:196},children:i.jsx("div",{className:"tile-value",children:"AQ"})})});else{const hr=e.jury.map(Ie=>A[Ie.id]).filter(Ie=>Ie),fi=hr.reduce((Ie,An)=>Ie+An,0),xr=hr.length?fi/hr.length:null,ns=e.jury.map((Ie,An)=>{const It=A[Ie.id],qt=R||Ie.id===n,wn=q[Ie.id],rs=Ie.id===n||R,gi=m.place!==void 0&&m.place!==null?m.place<=10:null,D0="tile"+(qt?" me":"")+(It!=null?"":" empty")+(qt?"":" readonly"),M0=It?Ze(kt(It)):{},O0=m.songId?"rating_"+m.songId+"_"+Ie.id:"",A0=p[An];let Bn={};return s!=="final"&&(wn===!1?gi===null?Bn={background:"linear-gradient(135deg, #6b7280, #4b5563)",color:"#fff",boxShadow:"0 0 8px rgba(107,114,128,0.5)"}:gi===!1?Bn={background:"linear-gradient(135deg, #4ade80, #16a34a)",color:"#000",boxShadow:"0 0 8px rgba(74,222,128,0.5)"}:Bn={background:"linear-gradient(135deg, #ff4d6d, #dc2626)",color:"#fff",boxShadow:"0 0 8px rgba(255,77,109,0.5)"}:gi===!1?Bn={background:"linear-gradient(135deg, #ff4d6d, #dc2626)",color:"#fff",boxShadow:"0 0 8px rgba(255,77,109,0.5)"}:gi===!0&&(Bn={background:"linear-gradient(135deg, #4ade80, #16a34a)",color:"#000",boxShadow:"0 0 8px rgba(74,222,128,0.5)"})),i.jsxs("div",{style:{position:"relative",width:46,height:50},children:[i.jsx("button",{className:D0,"data-flash-key":O0||void 0,style:{...M0,position:"absolute",inset:0,width:"100%",height:"100%",zIndex:1},onClick:()=>qt?se("rating",{eId:m.id,jurId:Ie.id}):void 0,title:qt?`Punkte: ${Ie.name}`:ne(Ie.name),children:i.jsx("div",{className:"tile-value",style:{position:"relative",zIndex:1},children:It??"–"})}),s!=="final"&&i.jsx("div",{onClick:B0=>{B0.stopPropagation(),y.tab!=="battle"&&y.tab!=="sb"&&y.tab!=="stats"&&rs&&Au(m.id,Ie.id)},style:{position:"absolute",bottom:2,right:2,zIndex:10,width:16,height:16,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--body)",fontSize:"0.5rem",fontWeight:900,cursor:rs?"pointer":"default",boxShadow:"0 1px 3px rgba(0,0,0,0.6)",border:"1px solid rgba(255,255,255,0.15)",...wn!==void 0?Bn:{background:"rgba(0,0,0,0.4)",color:"rgba(255,255,255,0.4)"}},title:wn!==void 0?"NQ Tipp ändern":"Als NQ markieren",children:A0})]},Ie.id)});ce=i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"tiles",style:{gap:4},children:ns}),i.jsxs("div",{className:"avg",children:[i.jsx("b",{children:xr==null?"–":xr.toFixed(1)}),i.jsx("small",{children:"AVG"})]})]})}const Ee=s!=="final"&&oe?i.jsx("span",{className:"autofinal",title:"Auto Qualifier",children:"AQ"}):null,Le=m.place!==void 0&&m.place!==null?m.place:"",Ye=m.customNo!==void 0&&m.customNo!==null&&m.customNo!==""?parseFloat(m.customNo):Br(m.id),ot=Ye%1!==0?"➔":Ye;let On=s!=="final"&&m.place!==void 0&&m.place!==null&&m.place>10;s==="final"&&(On=!1);const pi=le(m.songId);let Gt=(m.place===1?" winner":"")+(On?" out":"")+(m.dq?" dq":"")+(s!=="final"&&oe&&m.place!==1?" autofinal-row":"");s!=="final"&&oe&&!On&&(Gt+=" aq-row");const es=y.editMode?i.jsxs("div",{className:"sm-group",children:[i.jsx("button",{className:"ghost sm",onClick:()=>Ku(s,N),children:"▲"}),i.jsx("button",{className:"ghost sm",onClick:()=>Qu(s,N),children:"▼"}),i.jsx("button",{className:"ghost sm",onClick:()=>se("picker",{entryId:m.id}),children:"Change"}),i.jsx("button",{className:"ghost sm danger",onClick:()=>Ju(m.id),children:m.dq?"Undq":"DQ"})]}):null,R0=O?i.jsxs("div",{className:"meta",children:[i.jsxs("span",{children:[i.jsx("b",{children:ne(O.title)})," – ",ne(O.artist)]}),Ee,es]}):i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[i.jsx("button",{className:"primary sm",onClick:()=>se("picker",{entryId:m.id}),children:"＋ Song"}),es]}),F0=s!=="final"&&oe?i.jsxs("div",{className:"pl",style:{opacity:0,pointerEvents:"none"},children:[i.jsx("input",{type:"number",disabled:!0}),i.jsx("small",{children:"PLACE"})]}):i.jsxs("div",{className:"pl",children:[i.jsx("input",{type:"number",min:"1",max:S.length,placeholder:"–",value:Le,className:m.place&&L[m.place]>1?"dup":"",disabled:!O,onChange:hr=>{const fi=parseInt(hr.target.value);ue(xr=>({...xr,years:xr.years.map(Ie=>{const An={};for(const It in Ie.shows)An[It]=Ie.shows[It].map(qt=>{if(qt.id!==m.id)return qt;const wn={...qt};return fi>0?wn.place=fi:delete wn.place,wn});return{...Ie,shows:An}})}))},"aria-label":"Place"}),i.jsx("small",{children:"PLACE"})]}),ts=O&&O.cc?{"--flag-url":`url('https://flagcdn.com/${O.cc}.svg')`}:{};pi&&m.place!==1&&(ts.filter="grayscale(0.6)");const _0=O&&O.cc?i.jsx("div",{className:"cc-code",children:ne(Nr(O.cc))}):null;return i.jsxs("div",{className:"row "+Gt,style:ts,children:[_0,i.jsx("div",{className:"no",onClick:()=>se("editNo",{eId:m.id}),title:"Change order/status",children:ne(ot)}),i.jsx("div",{className:"row-content",children:R0}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{className:"stats",children:ce}),F0]})]},m.id)},P=y.editMode?i.jsxs("div",{className:"actions",children:[i.jsx("button",{className:"ghost",onClick:()=>Gu(s),children:"＋ Running Order"}),i.jsx("button",{className:"ghost",onClick:()=>qu(s),children:"− Remove Last"})]}):null;return i.jsxs(i.Fragment,{children:[w,i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",color:"var(--muted)",fontWeight:700,fontSize:"0.78rem",padding:"0 4px",margin:"14px 0 8px",letterSpacing:"0.08em",textTransform:"uppercase"},children:[i.jsx("div",{children:"1st Half"}),i.jsx("div",{children:"2nd Half"})]}),i.jsxs("div",{className:"list",style:{marginTop:0},children:[i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:E.map(z=>G(z))}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:h.map(z=>G(z))})]}),P]})},h0=()=>{const c=(ve(y.yearId).shows.final||[]).filter(K=>he(K.songId)&&!K.dq);c.sort((K,Q)=>{const _=K.place!==void 0&&K.place!==null?K.place:9999,w=Q.place!==void 0&&Q.place!==null?Q.place:9999;return _-w});const p=!!e.battleHidden,g=R?"j3":n,x=[...e.jury].sort((K,Q)=>K.id.localeCompare(Q.id)),C={};e.jury.forEach(K=>{const Q={};c.forEach(_=>{const w=(e.pred[_.id]||{})[K.id];w&&(Q[w]=(Q[w]||0)+1)}),C[K.id]=Q});const I={};e.jury.forEach(K=>{I[K.id]={sum:0,count:0}});const D=c.map(K=>{const Q=he(K.songId),_=e.pred[K.id]||{},w=K.place,E=x.map(P=>{const z=_[P.id],m=P.id===g;if(p&&!m)return i.jsx("td",{style:{textAlign:"center"},children:i.jsx("span",{className:"hidden-pred",children:"•••"})},"guess-"+P.id);const O=z??"",A=z&&C[P.id][z]>1,q=R||m;return i.jsx("td",{className:"col-tipp",children:(()=>{const oe=parseInt(O),ce=oe===1?" podium-1":oe===2?" podium-2":oe===3?" podium-3":"",Ee="battle-input"+(A?" dup":"")+ce,Le=!q,Ye=Le&&!ce?{background:"transparent",border:"1px solid transparent",width:45,height:34,fontSize:"1rem"}:{width:45,height:34,fontSize:"1rem",opacity:Le?.8:1};return i.jsx("input",{type:"number",min:"1",max:c.length,value:O,className:Ee,readOnly:!q,disabled:!q,onChange:ot=>{const On=parseInt(ot.target.value);ue(pi=>{const Gt={...pi,pred:{...pi.pred}};return Gt.pred[K.id]={...Gt.pred[K.id]||{}},On>0?Gt.pred[K.id][P.id]=On:delete Gt.pred[K.id][P.id],Gt})},style:Ye})})()},"guess-"+P.id)}),h=x.map(P=>{const z=_[P.id];let m=i.jsx("span",{style:{color:"var(--muted)"},children:"–"});if(z!=null&&w!==void 0&&w!==null){const N=Math.abs(z-w);I[P.id].sum+=N,I[P.id].count++,N===0?m=i.jsx("span",{className:"battle-diff-cell",style:Ze(kt(10)),children:"🎯"}):m=i.jsx("span",{className:"battle-diff-cell",style:Ze(lo(N)),children:N})}return i.jsx("td",{className:"col-abw",children:m},"diff-"+P.id)}),F=w??"–",G=Q&&Q.cc?{"--flag-url":`url('https://flagcdn.com/${Q.cc}.svg')`}:{};return i.jsxs("tr",{children:[i.jsxs("td",{style:{...G,position:"relative",overflow:"hidden",padding:0,borderBottom:"1px solid var(--line)"},children:[i.jsx("div",{style:{position:"absolute",left:0,top:"4px",bottom:"4px",width:"200px",backgroundImage:"var(--flag-url)",backgroundSize:"cover",backgroundPosition:"center",maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",opacity:.65,pointerEvents:"none",zIndex:0,borderRadius:"6px"}}),Q&&i.jsx("div",{className:"cc-code",style:{position:"absolute",left:38,top:"50%",transform:"translateY(-50%)",zIndex:1,margin:0},children:ne(Nr(Q.cc))}),i.jsx("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"flex-end",textAlign:"right",padding:"8px 10px",minHeight:54},children:Q?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"sb-title",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.9rem"},children:ne(Q.title)}),i.jsx("div",{className:"sb-artist",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.75rem"},children:ne(Q.artist)})]}):null})]}),E,h,i.jsx("td",{className:"col-place",style:{textAlign:"center",verticalAlign:"middle"},children:i.jsx("input",{type:"number",min:"1",max:c.length,value:F==="–"?"":F,onChange:P=>{const z=parseInt(P.target.value);ue(m=>({...m,years:m.years.map(O=>{if(O.id!==y.yearId)return O;const A={...O.shows};return A.final=A.final.map(q=>{if(q.id!==K.id)return q;const oe={...q};return z>0?oe.place=z:delete oe.place,oe}),{...O,shows:A}})}))},className:"battle-input"+(parseInt(F)===1?" podium-1":parseInt(F)===2?" podium-2":parseInt(F)===3?" podium-3":""),style:{width:45,height:38,fontSize:"1.2rem",fontWeight:700,color:"var(--gold)",background:"linear-gradient(180deg, #2b1e0a 0%, #1a1106 50%, #0a0702 100%)",border:"1.5px solid rgba(255,209,102,0.55)",borderRadius:8,padding:0}})})]},K.id)}),S=[];e.jury.forEach(K=>{I[K.id].count>0&&S.push({name:K.name,sum:I[K.id].sum,count:I[K.id].count,id:K.id})}),S.sort((K,Q)=>K.sum-Q.sum);let L;if(S.length>0){const K=S[0],Q=["🥈","🥉"];L=i.jsxs("div",{style:{marginTop:24},children:[i.jsxs("div",{className:"battle-podium-winner",children:[i.jsx("div",{className:"medal",children:"🥇"}),i.jsx("div",{className:"name",children:ne(K.name)}),i.jsx("div",{className:"score",children:K.sum}),i.jsxs("div",{className:"label",children:["🎯 Winner · ",K.count," Tipps verglichen"]})]}),S.length>1&&i.jsx("div",{className:"battle-runner-ups",children:S.slice(1).map((_,w)=>{const E=w<2?Q[w]:null,h=w===0?"2nd Place":w===1?"3rd Place":w+2+"th Place";return i.jsxs("div",{className:"battle-runner-up",children:[E?i.jsx("div",{className:"medal",children:E}):i.jsx("div",{className:"medal",style:{fontFamily:"var(--number-font)",fontSize:"1.5rem",color:"var(--muted)"},children:w+2}),i.jsx("div",{className:"name",children:ne(_.name)}),i.jsx("div",{className:"score",children:_.sum}),i.jsx("div",{className:"label",children:h})]},_.id)})})]})}else L=i.jsx("p",{className:"empty",style:{padding:"30px 0"},children:"Trage die Tipps und tatsächlichen Plätze ein, um das Leaderboard zu sehen."});const B=i.jsx("button",{onClick:Fu,style:{padding:"7px 16px",fontSize:"0.85rem",fontWeight:700,...p?{background:"linear-gradient(135deg,#ff2d95,#a855f7)",borderColor:"transparent",color:"#fff"}:{background:"var(--panel2-solid)",color:"var(--muted)"}},children:p?"👁️ Tipps anzeigen":"🙈 Tipps verbergen"}),W=i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12,marginBottom:20},children:[i.jsxs("div",{children:[i.jsx("h2",{style:{margin:"0 0 4px"},children:"Predictions"}),i.jsx("p",{className:"hint",style:{margin:0},children:"Trage die Tipps ein — die Abweichung siehst du rechts. 🎯 = Volltreffer."})]}),i.jsx("div",{children:B})]}),J=i.jsxs("tr",{children:[i.jsx("th",{style:{paddingLeft:15},children:"Song"}),x.map(K=>i.jsx("th",{className:"c col-tipp",children:ne(K.name)},"h-g-"+K.id)),x.map(K=>i.jsx("th",{className:"c col-abw",children:ne(K.name)},"h-d-"+K.id)),i.jsx("th",{className:"c col-place",children:"Platz"})]});return i.jsxs(i.Fragment,{children:[W,c.length?i.jsxs("div",{style:{maxWidth:1250,margin:"0 auto"},children:[i.jsxs("table",{className:"sb-table battle-table",style:{width:"100%",tableLayout:"fixed"},children:[i.jsx("thead",{children:J}),i.jsx("tbody",{children:D})]}),L]}):i.jsx("p",{className:"empty",children:"Bitte wähle zuerst Songs für das Grand Final aus."})]})},x0=()=>{const s=ve(y.yearId);let d=y.sbShow;d!=="all"&&!s.shows[d]&&(d=s.shows.final?"final":Object.keys(s.shows)[0]);let c=[];if(d==="all"){const w=new Set;for(const E in s.shows)(s.shows[E]||[]).forEach(h=>{h.songId&&!w.has(h.songId)&&(w.add(h.songId),c.push(h))})}else c=s.shows[d]||[];const p=c.map(w=>{const E=he(w.songId);if(!E||w.dq)return null;const h=Ve(w),F=e.jury.map(P=>h[P.id]).filter(P=>P),G=F.reduce((P,z)=>P+z,0);return{e:w,s:E,r:h,avg:F.length?G/F.length:null,sum:G,place:w.place}}).filter(Boolean),g=[...p].sort((w,E)=>(E.avg!==null?E.avg:-1)-(w.avg!==null?w.avg:-1));let x=1;g.forEach((w,E)=>{E>0&&w.avg!==g[E-1].avg&&x++,w.ratingRank=x}),y.sbSort==="ratings"?p.sort((w,E)=>(E.avg!==null?E.avg:-1)-(w.avg!==null?w.avg:-1)):p.sort((w,E)=>{const h=P=>{if(d!=="all")return P.e.place||9999;let z=null,m=null;if(s.shows.final){const N=s.shows.final.find(O=>O.songId===P.s.id);N&&N.place&&(z=N.place)}if(s.shows.sf1){const N=s.shows.sf1.find(O=>O.songId===P.s.id);N&&N.place&&(m=N.place)}if(!m&&s.shows.sf2){const N=s.shows.sf2.find(O=>O.songId===P.s.id);N&&N.place&&(m=N.place)}return z||(m?m+1e3:9999)},F=h(w),G=h(E);return F!==G?F-G:(E.avg!==null?E.avg:-1)-(w.avg!==null?w.avg:-1)});const C=La(),I={},D={};e.jury.forEach(w=>{I[w.id]=0,D[w.id]={correct:0,totalGuessed:0}}),c.forEach(w=>{if(w.songId){const E=Ve(w);e.jury.forEach(h=>{E[h.id]&&(I[h.id]+=E[h.id])})}}),(d==="all"?["sf1","sf2"]:[d]).forEach(w=>{(s.shows[w]||[]).forEach(h=>{const F=X(h),G=h.place!==void 0&&h.place!==null?h.place>10:null;G!==null&&e.jury.forEach(P=>{F[P.id]===!1&&(D[P.id].totalGuessed++,G===!0&&D[P.id].correct++)})})});let L=-1,B=99999;for(const w in I)I[w]>L&&(L=I[w]),I[w]<B&&(B=I[w]);(L===B||L===0)&&(L=-1,B=99999);const W=i.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",justifyContent:"center",marginTop:16},children:e.jury.map(w=>{const E=I[w.id];let h="var(--cyan)";E===L&&(h="var(--green)"),E===B&&(h="#ffb3c1");let F=null;if(d!=="final"){const G=D[w.id],P=G.totalGuessed>0&&G.correct===G.totalGuessed?"var(--gold)":"var(--muted)";F=i.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:700,borderLeft:"1px solid var(--line)",paddingLeft:8,color:P},children:[G.correct," / ",G.totalGuessed," NQs"]})}return i.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:"1px solid rgba(94,58,168,0.4)",padding:"7px 16px",borderRadius:999,fontSize:"0.83rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:8,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[i.jsx("span",{style:{color:"var(--ink)"},children:ne(w.name)}),i.jsxs("span",{style:{color:h},children:[E," pts"]}),F]},w.id)})}),J=p.map((w,E)=>{const h=w.ratingRank,F=h===1?" sb-top1":h===2?" sb-top2":h===3?" sb-top3":"",G=le(w.s.id),P=[],z=[],m=X(w.e);e.jury.forEach(A=>{const q=w.r[A.id];if(q){const ce=Ze(kt(q));P.push(i.jsx("span",{className:"cell",style:{...ce,display:"inline-block",margin:"0 2px",fontSize:"1.05rem",width:34,height:34,lineHeight:"30px",padding:0},children:q},A.id))}else P.push(i.jsx("span",{className:"cell",style:{background:"var(--panel2-solid)",color:"var(--muted-dim)",display:"inline-block",margin:"0 2px",width:34,height:34,lineHeight:"30px",padding:0},children:"–"},A.id));m[A.id]===!1?z.push(i.jsx("span",{className:"cell",style:{background:"rgba(255,77,109,0.2)",color:"#ffb3c1",border:"1px solid rgba(255,77,109,0.4)",display:"inline-block",margin:"0 2px",fontSize:"0.85rem",padding:"2px 6px",width:34,height:34,lineHeight:"30px"},children:"NQ"},A.id)):z.push(i.jsx("span",{className:"cell",style:{background:"transparent",border:"1px dashed rgba(255,255,255,0.1)",color:"transparent",display:"inline-block",margin:"0 2px",fontSize:"0.85rem",padding:"2px 6px",width:34,height:34,lineHeight:"30px"},children:"-"},A.id))});let N="-";if(w.e.place!==void 0&&w.e.place!==null)if(d==="all"){let A=null;if(s.shows.sf1){const ce=s.shows.sf1.find(Ee=>Ee.songId===w.s.id);ce&&ce.place&&(A=ce.place)}if(!A&&s.shows.sf2){const ce=s.shows.sf2.find(Ee=>Ee.songId===w.s.id);ce&&ce.place&&(A=ce.place)}let q=null;if(s.shows.final){const ce=s.shows.final.find(Ee=>Ee.songId===w.s.id);ce&&ce.place&&(q=ce.place)}const oe=[];A&&oe.push(i.jsxs("span",{style:{fontSize:"0.65rem",color:"var(--muted)"},children:["SF: ",A,"."]},"sf")),q&&oe.push(i.jsxs("span",{style:{fontSize:"0.75rem",fontWeight:800,color:"var(--gold)"},children:["GF: ",q,"."]},"gf")),oe.length?N=i.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2,lineHeight:1.1},children:oe}):N=w.e.place+"."}else N=w.e.place+".";const O={"--flag-url":`url('https://flagcdn.com/${w.s.cc}.svg')`,position:"relative",overflow:"hidden"};return i.jsxs("tr",{className:F,children:[i.jsx("td",{className:"sb-rank-cell",style:{textAlign:"center",padding:0},children:h}),i.jsxs("td",{style:{...O,padding:0},children:[i.jsx("div",{style:{position:"absolute",left:0,top:"4px",bottom:"4px",width:"200px",backgroundImage:"var(--flag-url)",backgroundSize:"cover",backgroundPosition:"center",maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",opacity:.65,pointerEvents:"none",zIndex:0,borderRadius:"6px"}}),i.jsxs("div",{style:{position:"relative",zIndex:1,display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"6px 10px"},children:[i.jsx("div",{className:"cc-code",style:{position:"static",transform:"none",margin:0},children:ne(Nr(w.s.cc))}),i.jsxs("div",{className:"sb-song-info",style:{display:"flex",flexDirection:"column",alignItems:"flex-end",textAlign:"right",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:0},children:[i.jsxs("div",{className:"sb-title",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.9rem",display:"flex",alignItems:"center",gap:6},children:[G&&i.jsx("span",{style:{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.08em",color:"#ffb3c1",background:"rgba(255,77,109,0.18)",border:"1px solid rgba(255,77,109,0.5)",borderRadius:999,padding:"1px 6px",flexShrink:0},children:"🚫"}),i.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:ne(w.s.title)})]}),i.jsx("div",{className:"sb-artist",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.75rem"},children:ne(w.s.artist)})]})]})]}),i.jsx("td",{style:{textAlign:"left",paddingLeft:8,verticalAlign:"middle",whiteSpace:"nowrap",overflow:"hidden"},children:P}),i.jsx("td",{style:{textAlign:"left",paddingLeft:8,verticalAlign:"middle",whiteSpace:"nowrap",overflow:"hidden"},children:z}),i.jsx("td",{className:"sb-score-cell",children:i.jsx("b",{children:w.avg==null?"–":w.sum})}),i.jsx("td",{className:"sb-score-cell",children:i.jsx("b",{children:w.avg==null?"–":w.avg.toFixed(1)})}),i.jsx("td",{style:{textAlign:"center",width:50},children:N})]},w.e.id)}),K=i.jsx("div",{style:{display:"flex",justifyContent:"flex-start",gap:0,padding:0,marginLeft:-3},children:C.map((w,E)=>i.jsx("span",{style:{display:"inline-block",width:35,margin:"0 2px",textAlign:"center",fontSize:"0.7rem",color:"var(--muted)"},children:w},E))}),Q=i.jsx("div",{style:{display:"flex",justifyContent:"flex-start",gap:0,padding:0,marginLeft:-3},children:C.map((w,E)=>i.jsx("span",{style:{display:"inline-block",width:35,margin:"0 2px",textAlign:"center",fontSize:"0.6rem",color:"var(--muted)"},children:w},E))}),_=i.jsxs("div",{className:"tabs edle-slider",style:{border:"none",margin:0,padding:4,borderRadius:999,display:"inline-flex",gap:4},children:[i.jsx("button",{className:y.sbSort==="ratings"?"on":"",style:{border:"none",margin:0},onClick:()=>$(w=>({...w,sbSort:"ratings"})),children:"Ratings"}),i.jsx("button",{className:y.sbSort==="placement"?"on":"",style:{border:"none",margin:0},onClick:()=>$(w=>({...w,sbSort:"placement"})),children:"Placement"})]});return i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,maxWidth:1100,margin:"0 auto 14px"},children:[i.jsx("div",{children:p0()}),i.jsx("div",{children:_})]}),W,p.length?i.jsx("div",{style:{maxWidth:1250,margin:"0 auto"},children:i.jsxs("table",{className:"sb-table",style:{width:"100%",tableLayout:"fixed"},children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{textAlign:"center",width:35},children:"#"}),i.jsx("th",{style:{width:260},children:"Song"}),i.jsx("th",{className:"c",style:{width:176},children:K}),i.jsx("th",{className:"c",style:{width:176},children:Q}),i.jsx("th",{className:"c",style:{width:80},children:"Total"}),i.jsx("th",{className:"c",style:{width:80},children:"Ø"}),i.jsx("th",{className:"c",style:{width:80},children:"Place"})]})}),i.jsx("tbody",{children:J})]})}):i.jsx("p",{className:"empty",children:"Nothing to show yet."})]})},v0=()=>{if(!u)return i.jsxs("div",{style:{paddingTop:18},children:[i.jsx("button",{className:"ghost",onClick:bn,children:"← Back"}),i.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh",fontSize:"6rem",filter:"drop-shadow(0 0 24px rgba(255,209,102,0.6))"},children:"🔒"})]});const s=e.ratings||{};let d=null;const c={},p={},g={};e.jury.forEach(m=>{g[m.id]={sum:0,count:0}});const x={};for(const m in s){const N=he(m);if(!N)continue;const O=s[m];for(const A in O){const q=O[A];q==null||q<1||((!d||q>d.value)&&(d={value:q,juryId:A,songId:m,songTitle:N.title,songCc:N.cc,year:N.year}),q===12&&(c[m]=(c[m]||0)+1,p[A]=(p[A]||0)+1),g[A]&&(g[A].sum+=q,g[A].count++),x[m]||(x[m]={sum:0,count:0}),x[m].sum+=q,x[m].count++)}}let C=null;for(const m in g){const N=g[m];if(N.count===0)continue;const O=N.sum/N.count;(!C||O>C.avg)&&(C={juryId:m,avg:O,count:N.count})}let I=null;for(const m in g){const N=g[m];if(N.count===0)continue;const O=N.sum/N.count;(!I||O<I.avg)&&(I={juryId:m,avg:O,count:N.count})}const D={};for(const m in s){const N=he(m);if(!N||le(m))continue;const O=s[m],A=Object.values(O).filter(q=>q!=null&&q>=1);A.length&&(D[m]={sum:A.reduce((q,oe)=>q+oe,0),count:A.length,song:N})}const S=Object.values(D),L=S.filter(m=>m.sum>=40).sort((m,N)=>N.sum-m.sum),B=L.length,W=L[0]||null,J=S.filter(m=>m.sum>=35).length,K=S.filter(m=>m.sum<15).length;let Q=null;for(const m in c){const N=c[m];if(!Q||N>Q.count){const O=he(m);if(!O)continue;Q={songId:m,count:N,song:O}}}let _=null;for(const m in p){const N=p[m];(!_||N>_.count)&&(_={juryId:m,count:N})}const w={},E=e.jury.map(m=>m.id);for(let m=0;m<E.length;m++)for(let N=m+1;N<E.length;N++){const O=E[m],A=E[N];let q=0,oe=0;for(const ce in s){const Ee=s[ce],Le=Ee[O],Ye=Ee[A];Le!=null&&Ye!==void 0&&Ye!==null&&(q+=Math.abs(Le-Ye),oe++)}w[O+"-"+A]={a:O,b:A,avgDiff:oe>0?q/oe:null,count:oe}}const h=Object.values(w).filter(m=>m.avgDiff!==null);h.sort((m,N)=>m.avgDiff-N.avgDiff);const F=h[0]||null,G=h[h.length-1]||null,P=m=>m==null?"–":m.toFixed(2),z=({icon:m,title:N,value:O,subtitle:A,accent:q})=>i.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:`1px solid ${q||"rgba(94,58,168,0.4)"}`,borderRadius:18,padding:"18px 20px",display:"flex",flexDirection:"column",gap:6,boxShadow:q?`inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 16px rgba(0,0,0,0.4), 0 0 16px ${q}22`:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[i.jsx("span",{style:{fontSize:"1.4rem",filter:"drop-shadow(0 2px 6px rgba(0,0,0,0.5))"},children:m}),i.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,color:"var(--muted)",letterSpacing:"0.12em",textTransform:"uppercase"},children:N})]}),i.jsx("div",{style:{fontFamily:"var(--display)",fontSize:"1.4rem",fontWeight:800,color:q||"var(--ink)",letterSpacing:"-0.01em",lineHeight:1.2,textShadow:q?`0 0 12px ${q}66`:"none"},children:O}),A&&i.jsx("div",{style:{fontSize:"0.78rem",color:"var(--muted)",fontWeight:500,lineHeight:1.35},children:A})]});return i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{paddingTop:18},children:i.jsxs("button",{onClick:bn,style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px 9px 14px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",fontWeight:700,fontSize:"0.85rem",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:m=>{m.currentTarget.style.transform="translateX(-2px)",m.currentTarget.style.borderColor="rgba(168,85,247,0.7)",m.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:m=>{m.currentTarget.style.transform="translateX(0)",m.currentTarget.style.borderColor="rgba(148,94,255,0.35)",m.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[i.jsx("span",{style:{fontSize:"1rem",lineHeight:1},children:"←"})," Back"]})}),i.jsx("h2",{style:{margin:"24px 0 8px",fontSize:"2rem"},children:"📊 Statistiken"}),i.jsx("p",{className:"hint",style:{marginBottom:24},children:"Rekorde, Vergleiche und Kuriositäten aus allen bisherigen Bewertungen."}),i.jsx("h3",{style:{marginBottom:14,fontSize:"1.1rem",color:"var(--gold)"},children:"🏆 Rekorde"}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:14,marginBottom:32},children:[i.jsx(z,{icon:"💯",title:"Songs über 40 Pts",value:`${B} ${B===1?"Song":"Songs"}`,subtitle:B>0?`Höchster: ${W.song.title} (${W.sum})`:"Kein Song hat 40 Punkte erreicht",accent:"var(--gold)"}),i.jsx(z,{icon:"🎯",title:"Songs über 35 Pts",value:`${J} ${J===1?"Song":"Songs"}`,subtitle:`${K} ${K===1?"Song":"Songs"} unter 15 Punkten`,accent:"var(--cyan)"}),Q&&i.jsx(z,{icon:"🎯",title:"Meiste 12er",value:`${Q.count} × 12`,subtitle:`${Q.song.title} – ${Q.song.artist} (${Q.song.cc.toUpperCase()}, ${Q.song.year})`,accent:"var(--violet)"}),_&&i.jsx(z,{icon:"💜",title:"12er-König",value:`${_.count} × 12`,subtitle:`${Be(_.juryId)} hat am häufigsten 12 Punkte vergeben`,accent:"var(--pink)"}),C&&i.jsx(z,{icon:"🎁",title:"Großzügigster Juror",value:`Ø ${P(C.avg)}`,subtitle:`${Be(C.juryId)} · ${C.count} Bewertungen`,accent:"var(--green)"}),I&&i.jsx(z,{icon:"🧊",title:"Strengster Juror",value:`Ø ${P(I.avg)}`,subtitle:`${Be(I.juryId)} · ${I.count} Bewertungen`,accent:"var(--cyan)"})]}),i.jsx("h3",{style:{marginBottom:14,fontSize:"1.1rem",color:"var(--cyan)"},children:"🔍 Jury-Vergleich"}),i.jsx("p",{className:"hint",style:{marginBottom:16},children:"Durchschnittliche Punkte-Differenz zwischen jedem Jury-Paar. Niedriger = ähnlicher Geschmack."}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:14,marginBottom:20},children:[F&&i.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(74,222,128,0.12) 0%, rgba(15,8,32,0.98) 100%)",border:"1.5px solid rgba(74,222,128,0.5)",borderRadius:18,padding:"16px 20px",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 0 20px rgba(74,222,128,0.15)"},children:[i.jsx("div",{style:{fontSize:"0.7rem",fontWeight:800,color:"var(--green)",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:4},children:"👯 Ähnlichster Geschmack"}),i.jsxs("div",{style:{fontFamily:"var(--display)",fontSize:"1.15rem",fontWeight:800,color:"#fff",marginBottom:4},children:[Be(F.a)," & ",Be(F.b)]}),i.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--muted)"},children:["Ø Differenz: ",i.jsx("b",{style:{color:"var(--green)"},children:P(F.avgDiff)})," · ",F.count," gemeinsame Songs"]})]}),G&&i.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(255,77,109,0.12) 0%, rgba(15,8,32,0.98) 100%)",border:"1.5px solid rgba(255,77,109,0.5)",borderRadius:18,padding:"16px 20px",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 0 20px rgba(255,77,109,0.15)"},children:[i.jsx("div",{style:{fontSize:"0.7rem",fontWeight:800,color:"#ffb3c1",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:4},children:"⚡ Unterschiedlichster Geschmack"}),i.jsxs("div",{style:{fontFamily:"var(--display)",fontSize:"1.15rem",fontWeight:800,color:"#fff",marginBottom:4},children:[Be(G.a)," & ",Be(G.b)]}),i.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--muted)"},children:["Ø Differenz: ",i.jsx("b",{style:{color:"#ffb3c1"},children:P(G.avgDiff)})," · ",G.count," gemeinsame Songs"]})]})]}),i.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(25,14,52,0.95) 0%, rgba(10,5,22,0.98) 100%)",border:"1px solid rgba(94,58,168,0.3)",borderRadius:18,padding:"16px 20px",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)",overflowX:"auto"},children:[i.jsx("div",{style:{fontFamily:"var(--display)",fontWeight:700,fontSize:"0.85rem",color:"var(--muted)",marginBottom:12,letterSpacing:"0.05em",textTransform:"uppercase"},children:"Alle Paare im Vergleich"}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:10},children:h.map(m=>{let N,O,A;return m.avgDiff<1.5?(N="rgba(74,222,128,0.12)",O="rgba(74,222,128,0.4)",A="#4ade80"):m.avgDiff<3?(N="rgba(34,211,238,0.12)",O="rgba(34,211,238,0.4)",A="#22d3ee"):m.avgDiff<4.5?(N="rgba(255,209,102,0.12)",O="rgba(255,209,102,0.4)",A="#ffd166"):m.avgDiff<6?(N="rgba(249,115,22,0.12)",O="rgba(249,115,22,0.4)",A="#f97316"):(N="rgba(255,77,109,0.12)",O="rgba(255,77,109,0.4)",A="#ff4d6d"),i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,padding:"8px 12px",background:N,border:`1px solid ${O}`,borderRadius:10},children:[i.jsxs("div",{style:{fontSize:"0.82rem",fontWeight:600,color:"var(--ink)"},children:[Be(m.a)," ",i.jsx("span",{style:{color:"var(--muted-dim)",margin:"0 3px"},children:"·"})," ",Be(m.b)]}),i.jsx("div",{style:{fontFamily:"var(--number-font)",fontSize:"1rem",color:A,textShadow:`0 0 8px ${O}`},children:P(m.avgDiff)})]},m.a+"-"+m.b)})})]})]})},y0=()=>{if(!u)return i.jsxs("div",{style:{paddingTop:18},children:[i.jsx("button",{className:"ghost",onClick:bn,children:"← Back"}),i.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh",fontSize:"6rem",filter:"drop-shadow(0 0 24px rgba(255,209,102,0.6))"},children:"🔒"})]});const s=y.compareCc&&Ke[y.compareCc]?Ke[y.compareCc]:"",d=[];if(y.compareCc)for(const x of e.years){const C=[];for(const I in x.shows)for(const D of x.shows[I]){const S=he(D.songId);S&&S.cc===y.compareCc&&C.push({yearObj:x,showKey:I,showName:kn[I],entry:D,song:S})}if(C.length>0){let I=C.find(D=>D.showKey==="final")||C[0];d.push(I)}}d.sort((x,C)=>C.yearObj.year-x.yearObj.year);const c=d.map(x=>{const C=Ve(x.entry),I=e.jury.map(L=>C[L.id]).filter(L=>L),D=I.reduce((L,B)=>L+B,0),S=I.length?D/I.length:null;return i.jsxs("tr",{style:{borderBottom:"1px solid rgba(94,58,168,0.2)"},children:[i.jsx("td",{style:{padding:"16px 12px",verticalAlign:"middle"},children:i.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[i.jsx("b",{style:{fontFamily:"var(--display)",fontSize:"1.1rem",color:"var(--ink)"},children:x.yearObj.year}),i.jsx("small",{style:{color:"var(--muted)",fontSize:"0.75rem",fontWeight:600},children:x.showName})]})}),i.jsx("td",{style:{padding:"16px 12px",verticalAlign:"middle"},children:i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[i.jsx(wt,{cc:x.song.cc}),i.jsx("b",{style:{fontFamily:"var(--display)",fontSize:"0.95rem",color:"var(--ink)"},children:ne(x.song.title)})]})}),e.jury.map(L=>{const B=C[L.id];return i.jsx("td",{style:{padding:"16px 12px",textAlign:"center",verticalAlign:"middle"},children:B?i.jsx("span",{className:"cell",style:{...Ze(kt(B)),display:"inline-block",margin:0},children:B}):i.jsx("span",{style:{color:"var(--muted-dim)"},children:"–"})},L.id)}),i.jsx("td",{style:{padding:"16px 12px",textAlign:"center",verticalAlign:"middle"},children:i.jsx("b",{style:{fontFamily:"var(--display)",fontSize:"1.1rem",color:"var(--cyan)"},children:S==null?"–":D})}),i.jsx("td",{style:{padding:"16px 12px",textAlign:"center",verticalAlign:"middle"},children:S==null?"–":i.jsx("span",{className:"cell",style:{...Ze(kt(S)),display:"inline-block",margin:0,fontSize:"0.95rem"},children:S.toFixed(1)})})]},x.yearObj.id+"-"+x.showKey)}),p=e.jury.map(x=>i.jsx("th",{style:{textAlign:"center",padding:"14px 12px"},children:ne(x.name)},x.id)),g=y.compareCc?c.length?i.jsx("div",{className:"tw",style:{marginTop:24,padding:"4px 12px",background:"linear-gradient(145deg, rgba(25,14,52,0.95) 0%, rgba(10,5,22,0.98) 100%)",border:"1px solid rgba(94,58,168,0.3)",boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},children:i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[i.jsx("thead",{children:i.jsxs("tr",{style:{borderBottom:"1px solid rgba(94,58,168,0.4)"},children:[i.jsx("th",{style:{textAlign:"left",padding:"14px 12px"},children:"Year"}),i.jsx("th",{style:{textAlign:"left",padding:"14px 12px"},children:"Song"}),p,i.jsx("th",{style:{textAlign:"center",padding:"14px 12px"},children:"Total"}),i.jsx("th",{style:{textAlign:"center",padding:"14px 12px"},children:"Ø"})]})}),i.jsx("tbody",{children:c})]})}):i.jsx("div",{style:{background:"var(--panel)",border:"1px dashed rgba(148,94,255,0.3)",borderRadius:22,padding:60,textAlign:"center",marginTop:24},children:i.jsx("p",{className:"empty",style:{margin:0,fontSize:"1rem"},children:"Keine Einträge für dieses Land gefunden."})}):i.jsx("div",{style:{background:"var(--panel)",border:"1px dashed rgba(148,94,255,0.3)",borderRadius:22,padding:60,textAlign:"center",marginTop:24},children:i.jsx("p",{className:"empty",style:{margin:0,fontSize:"1rem"},children:"Wähle oben ein Land aus, um den historischen Vergleich zu sehen."})});return i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{paddingTop:18},children:i.jsxs("button",{onClick:bn,style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px 9px 14px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",fontWeight:700,fontSize:"0.85rem",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:x=>{x.currentTarget.style.transform="translateX(-2px)",x.currentTarget.style.borderColor="rgba(168,85,247,0.7)",x.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:x=>{x.currentTarget.style.transform="translateX(0)",x.currentTarget.style.borderColor="rgba(148,94,255,0.35)",x.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[i.jsx("span",{style:{fontSize:"1rem",lineHeight:1},children:"←"})," Back"]})}),i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20,margin:"24px 0 8px"},children:[i.jsx("h2",{style:{margin:0,fontSize:"2rem"},children:"Country Comparison"}),i.jsx("div",{style:{width:300,background:"var(--panel2)",borderRadius:16,border:"1px solid var(--line)",padding:4},children:i.jsx(ui,{value:s,onSelect:(x,C)=>$(I=>({...I,compareCc:x||null}))})})]}),i.jsx("p",{className:"hint",style:{marginBottom:24},children:"Vergleiche die Punkte und Platzierungen eines Landes über alle Jahre hinweg."}),g]})},b0=()=>{if(!u)return i.jsxs("div",{style:{paddingTop:18},children:[i.jsx("button",{className:"ghost",onClick:bn,children:"← Back"}),i.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh",fontSize:"6rem",filter:"drop-shadow(0 0 24px rgba(255,209,102,0.6))"},children:"🔒"})]});const s=[];e.songs.forEach(p=>{p.year&&s.indexOf(p.year)===-1&&s.push(p.year)}),s.sort((p,g)=>g-p);const d=(y.q||"").toLowerCase(),c=e.songs.filter(p=>!((Ke[p.cc]+" "+p.artist+" "+p.title).toLowerCase().indexOf(d)===-1||y.libYear&&String(p.year)!==String(y.libYear)));return c.sort((p,g)=>Ke[p.cc].localeCompare(Ke[g.cc])),i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{paddingTop:18},children:i.jsxs("button",{onClick:bn,style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px 9px 14px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",fontWeight:700,fontSize:"0.85rem",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:p=>{p.currentTarget.style.transform="translateX(-2px)",p.currentTarget.style.borderColor="rgba(168,85,247,0.7)",p.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:p=>{p.currentTarget.style.transform="translateX(0)",p.currentTarget.style.borderColor="rgba(148,94,255,0.35)",p.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[i.jsx("span",{style:{fontSize:"1rem",lineHeight:1},children:"←"})," Back"]})}),i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20,margin:"24px 0 8px"},children:[i.jsx("h2",{style:{margin:0,fontSize:"2rem"},children:"Song Library"}),i.jsx("button",{className:"primary",onClick:()=>se("song",{id:null,assign:null}),style:{padding:"10px 24px",fontSize:"0.95rem"},children:"＋ New Song"})]}),i.jsx("p",{className:"hint",style:{marginBottom:24},children:"Durchsuche alle Songs, die jemals für das Scoreboard eingetragen wurden."}),i.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",marginBottom:24,background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",padding:16,borderRadius:18,border:"1px solid rgba(94,58,168,0.3)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[i.jsx("input",{id:"lib_search_input",placeholder:"Suche nach Titel, Artist oder Land...",value:y.q||"",onChange:p=>$(g=>({...g,q:p.target.value})),style:{flex:1,minWidth:220,background:"var(--panel2-solid)",border:"1px solid var(--line)",padding:"12px 18px",borderRadius:12}}),i.jsxs("select",{id:"lib_year_select",style:{width:160,background:"var(--panel2-solid)",border:"1px solid var(--line)",padding:"12px 18px",borderRadius:12,fontWeight:600},value:y.libYear||"",onChange:p=>$(g=>({...g,libYear:p.target.value})),children:[i.jsx("option",{value:"",children:"All Years"}),s.map(p=>i.jsx("option",{value:p,children:p},p))]})]}),c.length?i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:16},children:c.map(p=>i.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:"1px solid rgba(94,58,168,0.3)",borderRadius:16,padding:16,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)",display:"flex",flexDirection:"column",gap:12,transition:"transform 0.2s ease, border-color 0.2s ease"},onMouseEnter:g=>{g.currentTarget.style.transform="translateY(-2px)",g.currentTarget.style.borderColor="rgba(168,85,247,0.6)"},onMouseLeave:g=>{g.currentTarget.style.transform="translateY(0)",g.currentTarget.style.borderColor="rgba(94,58,168,0.3)"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[i.jsx(wt,{cc:p.cc}),i.jsxs("span",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.05em",textTransform:"uppercase"},children:[ne(Ke[p.cc])," ",p.year&&`· ${p.year}`]})]}),le(p.id)&&i.jsx("span",{style:{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.08em",color:"#ffb3c1",background:"rgba(255,77,109,0.18)",border:"1px solid rgba(255,77,109,0.5)",borderRadius:999,padding:"2px 8px"},children:"🚫 BOYKOTT"})]}),i.jsxs("div",{children:[i.jsx("div",{style:{fontFamily:"var(--display)",fontSize:"1.15rem",fontWeight:800,color:"var(--ink)",lineHeight:1.2,marginBottom:4},children:ne(p.title)}),i.jsx("div",{style:{fontSize:"0.9rem",color:"var(--muted)",fontWeight:500},children:ne(p.artist)})]}),i.jsxs("div",{style:{display:"flex",gap:8,marginTop:"auto",paddingTop:8},children:[i.jsx("button",{className:"ghost sm",style:{flex:1},onClick:()=>se("song",{id:p.id,assign:null}),children:"Edit"}),i.jsx("button",{className:"ghost sm danger",style:{flex:1},onClick:()=>Uu(p.id),children:"Delete"})]})]},p.id))}):i.jsx("p",{className:"empty",style:{padding:"40px 0",fontSize:"1rem"},children:"Keine Songs gefunden, die zu deiner Suche passen."})]})},ui=({value:s,onSelect:d})=>{const[c,p]=H.useState(s||""),[g,x]=H.useState(!1),[C,I]=H.useState(""),D=H.useRef(null),S=H.useRef(null);H.useEffect(()=>{p(s||"")},[s]),H.useEffect(()=>{const B=W=>{D.current&&!D.current.contains(W.target)&&x(!1)};return document.addEventListener("mousedown",B),()=>document.removeEventListener("mousedown",B)},[]);const L=$i.filter(B=>B[1].toLowerCase().indexOf((c||"").toLowerCase())!==-1);return i.jsxs("div",{className:"search-dropdown-container",ref:D,children:[i.jsx("input",{ref:S,placeholder:"Land suchen...",value:c,autoComplete:"off",onChange:B=>{p(B.target.value),I(""),x(!0)},onFocus:()=>x(!0),onClick:()=>x(!0),style:{width:"100%"}}),i.jsx("div",{className:"search-dropdown-results"+(g?" active":""),children:L.length?L.map(B=>i.jsxs("div",{className:"search-dropdown-item",onMouseDown:W=>{W.preventDefault(),p(B[1]),I(B[0]),x(!1),d&&d(B[0],B[1])},children:[i.jsx(wt,{cc:B[0]})," ",i.jsx("span",{children:ne(B[1])})]},B[0])):i.jsx("div",{className:"search-dropdown-item",style:{color:"var(--muted)"},children:"Kein Land gefunden"})})]})},w0=()=>{if(!Y.open)return null;switch(Y.mode){case"alert":return i.jsxs(i.Fragment,{children:[i.jsx("h3",{children:ne(Y.payload.title)}),i.jsx("p",{className:"hint",children:ne(Y.payload.text)}),i.jsx("div",{className:"actions",children:i.jsx("button",{className:"primary",onClick:de,children:"OK"})})]});case"confirm":{const s=Y.payload.onYes;return i.jsxs(i.Fragment,{children:[i.jsx("h3",{children:ne(Y.payload.title)}),i.jsx("p",{className:"hint",children:ne(Y.payload.text)}),i.jsxs("div",{className:"actions",children:[i.jsx("button",{className:"ghost",onClick:de,children:"Cancel"}),i.jsx("button",{className:"primary",onClick:()=>{de(),s&&setTimeout(s,30)},children:"Confirm"})]})]})}case"newYear":return i.jsx(k0,{onSave:e0,onClose:de});case"editYear":{const s=ve(y.yearId);return s?i.jsx(S0,{year:s,onSaveAll:r0,onAddShow:Vu,onRemoveShow:Yu,onDelYear:$u,onClose:de}):null}case"editCity":{const s=ve(y.yearId);return s?i.jsx(j0,{year:s,onSave:t0,onClose:de}):null}case"editDates":{const s=ve(y.yearId);return s?i.jsx(C0,{year:s,onSave:n0,onClose:de}):null}case"editNo":{const s=vn(Y.payload.eId);return s?i.jsx(N0,{entry:s,songById:he,onSave:Xu,onClose:de}):null}case"picker":return i.jsx(z0,{entryId:Y.payload.entryId,S:e,CN:Ke,songById:he,onPick:s=>{const d=Y.payload.entryId;ue(c=>({...c,years:c.years.map(p=>{const g={};for(const x in p.shows)g[x]=p.shows[x].map(C=>C.id===d?{...C,songId:s}:C);return{...p,shows:g}})})),de(),setTimeout(()=>se("rating",{eId:d,jurId:n}),50)},onNewSong:()=>se("song",{id:null,assign:Y.payload.entryId}),onEditSong:s=>se("song",{id:s,assign:null}),onDeleteSong:s=>{ue(d=>({...d,songs:d.songs.filter(c=>c.id!==s)}))},onClose:de});case"song":{const s=Y.payload.id,d=Y.payload.assign,c=s?he(s):null,p=y.yearId?ve(y.yearId):null,g=c&&c.year?c.year:p&&p.year?p.year:new Date().getFullYear();return i.jsx(E0,{song:c,defaultYear:g,editId:s,assign:d,onSave:Zu,onClose:de,S:e,setS:t,save:yt})}case"rating":{const s=vn(Y.payload.eId);if(!s)return null;let d=null;for(const c of e.years){for(const p in c.shows)if(c.shows[p].find(g=>g.id===s.id)){d=c.id;break}if(d)break}return i.jsx(T0,{entry:s,jurId:Y.payload.jurId,S:e,me:n,jname:Be,songById:he,getRatings:Ve,currentYearId:d,onSave:(c,p,g)=>{const x=vn(c),C=x&&x.songId?x.songId:c;ue(I=>{const D={...I,ratings:{...I.ratings}};if(g===12&&d){const S=I.years.find(L=>L.id===d);if(S)for(const L in S.shows)for(const B of S.shows[L])B.songId&&B.songId!==C&&D.ratings[B.songId]&&D.ratings[B.songId][p]===12&&(D.ratings[B.songId]={...D.ratings[B.songId]},delete D.ratings[B.songId][p])}return D.ratings[C]={...D.ratings[C]||{}},g===null?delete D.ratings[C][p]:D.ratings[C][p]=g,D}),de()},onClose:de})}case"settings":return i.jsx(I0,{S:e,currentUser:u,isRealAdmin:a,adminViewOff:l,setAdminViewOff:f,onSaveNames:i0,onImport:o0,onExport:l0,onOpenJson:()=>se("json"),onClose:de,showToast:ae,autoHardReset:Z,updateS:ue});case"json":return i.jsx(P0,{S:e,onSave:a0,onBack:()=>se("settings"),onClose:de});default:return null}},k0=({onSave:s,onClose:d})=>{const[c,p]=H.useState(new Date().getFullYear()),[g,x]=H.useState(""),[C,I]=H.useState("");return i.jsxs(i.Fragment,{children:[i.jsx("h3",{children:"Add New Contest"}),i.jsxs("label",{children:["Year",i.jsx("input",{type:"number",value:c,onChange:D=>p(D.target.value)})]}),i.jsxs("label",{children:["Suffix (optional)",i.jsx("input",{placeholder:"e.g. Junior or Asia",value:g,onChange:D=>x(D.target.value)})]}),i.jsxs("label",{children:["Host City",i.jsx("input",{value:C,onChange:D=>I(D.target.value)})]}),i.jsxs("div",{className:"actions",children:[i.jsx("button",{className:"ghost",onClick:d,children:"Cancel"}),i.jsx("button",{className:"primary",onClick:()=>s({year:c,suffix:g,city:C}),children:"Create"})]})]})},S0=({year:s,onSaveAll:d,onAddShow:c,onRemoveShow:p,onDelYear:g,onClose:x})=>{const[C,I]=H.useState(s.city||""),[D,S]=H.useState(s.hostCc||""),[L,B]=H.useState(s.hostCc&&Ke[s.hostCc]||""),W=s.showDates||{},[J,K]=H.useState(W.sf1||""),[Q,_]=H.useState(W.sf2||""),[w,E]=H.useState(W.final||""),[h,F]=H.useState(W.sf1Time||"21:00"),[G,P]=H.useState(W.sf2Time||"21:00"),[z,m]=H.useState(W.finalTime||"21:00"),N=()=>{d(C,D,{sf1:J,sf2:Q,final:w,sf1Time:J?h:"",sf2Time:Q?G:"",finalTime:w?z:""})},O=(A,q,oe,ce,Ee)=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[i.jsx("label",{style:{margin:0},children:A}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8},children:[i.jsx("input",{type:"date",value:q,onChange:Le=>oe(Le.target.value)}),i.jsx("input",{type:"time",value:ce,onChange:Le=>Ee(Le.target.value),style:{width:100,textAlign:"center"}})]})]});return i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[i.jsx("h3",{style:{margin:0,fontSize:"1.4rem",textAlign:"center"},children:"Wettbewerb bearbeiten"}),i.jsxs("div",{style:{background:"rgba(0,0,0,0.2)",padding:16,borderRadius:16,border:"1px solid rgba(148,94,255,0.15)"},children:[i.jsx("h4",{style:{margin:"0 0 12px",color:"var(--gold)",fontSize:"0.9rem",letterSpacing:"0.05em",textTransform:"uppercase"},children:"Austragungsort"}),i.jsxs("label",{style:{position:"relative",zIndex:20,marginBottom:12},children:["Land (Flagge)",i.jsx(ui,{value:L,onSelect:(A,q)=>{S(A),B(q)}})]}),i.jsxs("label",{style:{marginBottom:0},children:["Stadt",i.jsx("input",{value:C,onChange:A=>I(A.target.value),placeholder:"z.B. Basel"})]})]}),i.jsxs("div",{style:{background:"rgba(0,0,0,0.2)",padding:16,borderRadius:16,border:"1px solid rgba(148,94,255,0.15)"},children:[i.jsx("h4",{style:{margin:"0 0 12px",color:"var(--gold)",fontSize:"0.9rem",letterSpacing:"0.05em",textTransform:"uppercase"},children:"Show-Daten"}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[s.shows.sf1&&O("Semi-final 1",J,K,h,F),s.shows.sf2&&O("Semi-final 2",Q,_,G,P),s.shows.final&&O("Grand Final",w,E,z,m)]})]}),i.jsxs("div",{style:{background:"rgba(255,77,109,0.05)",padding:16,borderRadius:16,border:"1px solid rgba(255,77,109,0.2)"},children:[i.jsx("h4",{style:{margin:"0 0 12px",color:"#ffb3c1",fontSize:"0.9rem",letterSpacing:"0.05em",textTransform:"uppercase"},children:"Shows & Aktionen"}),i.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[s.shows.sf1?i.jsx("button",{className:"ghost sm danger",onClick:()=>p("sf1"),children:"− SF1"}):i.jsx("button",{className:"ghost sm",onClick:()=>c("sf1"),children:"＋ SF1"}),s.shows.sf2?i.jsx("button",{className:"ghost sm danger",onClick:()=>p("sf2"),children:"− SF2"}):i.jsx("button",{className:"ghost sm",onClick:()=>c("sf2"),children:"＋ SF2"}),s.shows.final?i.jsx("button",{className:"ghost sm danger",onClick:()=>p("final"),children:"− Final"}):i.jsx("button",{className:"ghost sm",onClick:()=>c("final"),children:"＋ Final"}),i.jsx("div",{style:{flexBasis:"100%",height:1,background:"rgba(255,255,255,0.1)",margin:"8px 0"}}),i.jsx("button",{className:"ghost sm danger",onClick:g,style:{width:"100%",justifyContent:"center"},children:"Kompletten Contest löschen"})]})]}),i.jsxs("div",{className:"actions",style:{marginTop:0,paddingTop:16},children:[i.jsx("button",{className:"ghost",onClick:x,style:{flex:1},children:"Schließen"}),i.jsx("button",{className:"primary",onClick:N,style:{flex:2,padding:"12px"},children:"Speichern"})]})]})},j0=({year:s,onSave:d,onClose:c})=>{const[p,g]=H.useState(s.city||""),[x,C]=H.useState(s.hostCc||""),[I,D]=H.useState(s.hostCc&&Ke[s.hostCc]||"");return i.jsxs(i.Fragment,{children:[i.jsx("h3",{children:"Host City & Country"}),i.jsxs("label",{style:{position:"relative",zIndex:20},children:["Country (Flagge)",i.jsx(ui,{value:I,onSelect:(S,L)=>{C(S),D(L)}})]}),i.jsxs("label",{style:{position:"relative",zIndex:1},children:["City",i.jsx("input",{value:p,onChange:S=>g(S.target.value)})]}),i.jsxs("div",{className:"actions",children:[i.jsx("button",{className:"ghost",onClick:c,children:"Cancel"}),i.jsx("button",{className:"primary",onClick:()=>d(p,x),children:"Save"})]})]})},C0=({year:s,onSave:d,onClose:c})=>{const p=s.showDates||{},[g,x]=H.useState(p.sf1||""),[C,I]=H.useState(p.sf2||""),[D,S]=H.useState(p.final||""),[L,B]=H.useState(p.sf1Time||"21:00"),[W,J]=H.useState(p.sf2Time||"21:00"),[K,Q]=H.useState(p.finalTime||"21:00"),_=(w,E,h,F,G)=>i.jsxs("label",{children:[w,i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8},children:[i.jsx("input",{type:"date",value:E,onChange:P=>h(P.target.value)}),i.jsx("input",{type:"time",value:F,onChange:P=>G(P.target.value),style:{width:110,textAlign:"center"},title:"Uhrzeit (Standard: 21:00)"})]})]});return i.jsxs(i.Fragment,{children:[i.jsx("h3",{children:"Show-Daten"}),i.jsx("p",{className:"hint",style:{marginBottom:16},children:"Trage ein, wann welche Show stattfindet. Standard-Uhrzeit: 21:00 Uhr. Der Countdown auf der Startseite nutzt diese Zeit."}),s.shows.sf1&&_("Semi-final 1",g,x,L,B),s.shows.sf2&&_("Semi-final 2",C,I,W,J),s.shows.final&&_("Grand Final",D,S,K,Q),i.jsxs("div",{className:"actions",children:[i.jsx("button",{className:"ghost",onClick:c,children:"Cancel"}),i.jsx("button",{className:"primary",onClick:()=>d({sf1:g,sf2:C,final:D,sf1Time:g?L:"",sf2Time:C?W:"",finalTime:D?K:""}),children:"Save"})]})]})},N0=({entry:s,songById:d,onSave:c,onClose:p})=>{const g=d(s.songId),x=s.customNo!==void 0&&s.customNo!==null&&s.customNo!==""?s.customNo:Br(s.id),C=s.autoFinal!==void 0?s.autoFinal:g&&["de","fr","it","es","gb","kr"].indexOf(g.cc)!==-1,[I,D]=H.useState(x),[S,L]=H.useState(C);return i.jsxs(i.Fragment,{children:[i.jsx("h3",{children:"Running Order & Status"}),i.jsxs("label",{children:["Custom Position / Number (z.B. 6 oder 6.5)",i.jsx("input",{value:I,onChange:B=>D(B.target.value)})]}),i.jsxs("label",{style:{flexDirection:"row",alignItems:"center",gap:12,marginTop:16,cursor:"pointer",background:"var(--panel2-solid)",padding:12,borderRadius:12,border:"1px solid var(--line)"},children:[i.jsx("input",{type:"checkbox",checked:S,onChange:B=>L(B.target.checked)}),i.jsx("span",{style:{color:"var(--ink)",fontWeight:600},children:"Auto Qualifier (AQ)"})]}),i.jsxs("div",{className:"actions",children:[i.jsx("button",{className:"ghost",onClick:p,children:"Cancel"}),i.jsx("button",{className:"primary",onClick:()=>c(s.id,I,S),children:"Save"})]})]})},z0=({entryId:s,S:d,CN:c,songById:p,onPick:g,onNewSong:x,onEditSong:C,onDeleteSong:I,onClose:D})=>{const[S,L]=H.useState(""),B=d.songs.filter(W=>(c[W.cc]+" "+W.artist+" "+W.title).toLowerCase().indexOf(S.toLowerCase())!==-1);return i.jsxs(i.Fragment,{children:[i.jsx("h3",{children:"Song Library"}),i.jsx("input",{placeholder:"Search...",value:S,onChange:W=>L(W.target.value),style:{width:"100%",marginBottom:12}}),i.jsx("div",{id:"plist",children:B.length?B.map(W=>i.jsxs("div",{className:"prow",children:[i.jsxs("button",{className:"pbtn",onClick:()=>g(W.id),children:[i.jsx(wt,{cc:W.cc}),i.jsxs("span",{children:[i.jsx("b",{children:ne(W.title)})," – ",ne(W.artist)]})]}),i.jsx("button",{className:"ghost danger",onClick:()=>I(W.id),children:"Delete"})]},W.id)):i.jsx("p",{className:"empty",children:"No songs found."})}),i.jsxs("div",{className:"actions",children:[i.jsx("button",{className:"ghost",onClick:D,children:"Close"}),i.jsx("button",{className:"primary",onClick:x,children:"＋ New Song"})]})]})},E0=({song:s,defaultYear:d,editId:c,assign:p,onSave:g,onClose:x,S:C,setS:I,save:D})=>{const[S,L]=H.useState(s?s.cc:""),[B,W]=H.useState(s&&Ke[s.cc]||""),[J,K]=H.useState(s?s.artist:""),[Q,_]=H.useState(s?s.title:""),[w,E]=H.useState(s&&s.year?s.year:d),[h,F]=H.useState(()=>!!(c&&C.boycotted&&C.boycotted[c])),[G,P]=H.useState(()=>!c||!C.ratings[c]?{}:{...C.ratings[c]}),z=(N,O)=>{const A=parseInt(O);P(q=>{const oe={...q};return!A||A<1||A>10?delete oe[N]:oe[N]=A,oe})},m=()=>{g({artist:J,title:Q,cc:S,year:parseInt(w)||new Date().getFullYear(),editId:c,assign:p,boycotted:h}),c&&!h&&I(N=>{const O={...N,ratings:{...N.ratings}};return O.ratings[c]={...G},Object.keys(O.ratings[c]).length===0&&delete O.ratings[c],D(O),O})};return i.jsxs(i.Fragment,{children:[i.jsx("h3",{children:s?"Edit Song":"New Song"}),i.jsxs("label",{style:{position:"relative",zIndex:20},children:["Country",i.jsx(ui,{value:B,onSelect:(N,O)=>{L(N),W(O)}})]}),i.jsxs("label",{style:{position:"relative",zIndex:1},children:["Artist",i.jsx("input",{value:J,onChange:N=>K(N.target.value)})]}),i.jsxs("label",{style:{position:"relative",zIndex:1},children:["Song Title",i.jsx("input",{value:Q,onChange:N=>_(N.target.value)})]}),i.jsxs("label",{style:{position:"relative",zIndex:1},children:["Year",i.jsx("input",{type:"number",value:w,onChange:N=>E(N.target.value)})]}),c&&i.jsxs("label",{style:{flexDirection:"row",alignItems:"center",gap:12,marginTop:16,marginBottom:8,cursor:"pointer",background:h?"rgba(255,77,109,0.1)":"var(--panel2-solid)",padding:12,borderRadius:12,border:h?"1px solid rgba(255,77,109,0.6)":"1px solid var(--line)",transition:"all 0.2s ease"},children:[i.jsx("input",{type:"checkbox",checked:h,onChange:N=>F(N.target.checked)}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[i.jsx("span",{style:{color:h?"#ffb3c1":"var(--ink)",fontWeight:700},children:"🚫 Boykott – keine Punkte"}),i.jsx("span",{style:{fontSize:"0.75rem",color:"var(--muted)",fontWeight:500},children:"Dieser Song bekommt von uns keine Punkte und wird überall als boykottiert markiert."})]})]}),c&&!h&&i.jsxs(i.Fragment,{children:[i.jsx("hr",{style:{border:0,borderTop:"1px solid var(--line)",margin:"20px 0 16px"}}),i.jsxs("div",{style:{marginBottom:14},children:[i.jsx("div",{style:{fontFamily:"var(--display)",fontWeight:700,fontSize:"0.9rem",color:"var(--ink)",marginBottom:8},children:"Punkte (global für diesen Song)"}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:10},children:C.jury.map(N=>{const O=G[N.id];return i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[i.jsx("label",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.05em",textTransform:"uppercase",margin:0},children:ne(N.name)}),i.jsx("input",{type:"number",min:"1",max:"10",placeholder:"–",value:O!==void 0?O:"",onChange:A=>z(N.id,A.target.value),style:{width:"100%",textAlign:"center",fontFamily:"var(--number-font)",fontSize:"1.4rem",color:"var(--gold)",background:"linear-gradient(180deg, #2b1e0a 0%, #1a1106 50%, #0a0702 100%)",border:"1.5px solid rgba(255, 209, 102, 0.55)",borderRadius:12,padding:"8px 0",boxShadow:"inset 0 1px 0 rgba(255, 230, 150, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.7), 0 0 14px rgba(255, 209, 102, 0.08)"}})]},N.id)})})]})]}),i.jsxs("div",{className:"actions",children:[i.jsx("button",{className:"ghost",onClick:x,children:"Cancel"}),i.jsx("button",{className:"primary",onClick:m,children:"Save"})]})]})},T0=({entry:s,jurId:d,S:c,me:p,jname:g,songById:x,getRatings:C,onSave:I,onClose:D,currentYearId:S})=>{const L=x(s.songId),B=C(s),W=R?d||"j3":p,J=B[W],K=g(W),Q=!!(s.songId&&c.boycotted&&c.boycotted[s.songId]),[_,w]=H.useState(J??null);if(H.useEffect(()=>{if(!R)return;const F=G=>{if(G.target.tagName==="INPUT"||G.target.tagName==="TEXTAREA")return;let P=G.key;P==="0"&&(P="10");const z=parseInt(P);z>=1&&z<=10&&(w(z),setTimeout(()=>{I(s.id,W,z)},150))};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)},[p,s.id,W,I]),!L)return null;if(Q)return i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:20},children:[i.jsx("div",{style:{marginBottom:12,transform:"scale(1.8)",display:"inline-block",filter:"drop-shadow(0 4px 12px rgba(0,0,0,0.5))"},children:i.jsx(wt,{cc:L.cc})}),i.jsx("h2",{style:{margin:"10px 0 4px",fontSize:"1.7rem"},children:ne(L.title)}),i.jsxs("p",{style:{color:"var(--muted)",margin:0,fontSize:"1rem"},children:[ne(L.artist)," · ",ne(Ke[L.cc]||L.cc.toUpperCase())]})]}),i.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(255,77,109,0.12) 0%, var(--panel2-solid) 100%)",border:"1.5px solid rgba(255,77,109,0.6)",borderRadius:22,padding:"28px 20px",textAlign:"center",marginBottom:20},children:[i.jsx("div",{style:{fontSize:"2.8rem",marginBottom:10},children:"🚫"}),i.jsx("div",{style:{fontFamily:"var(--display)",fontWeight:800,fontSize:"1.1rem",color:"#ffb3c1",marginBottom:6},children:"Dieser Song ist boykottiert"}),i.jsx("div",{style:{fontSize:"0.88rem",color:"var(--muted)"},children:"Für diesen Song werden keine Punkte vergeben."})]}),i.jsx("div",{className:"actions",style:{marginTop:18,justifyContent:"flex-end"},children:i.jsx("button",{className:"primary",onClick:D,style:{padding:"12px 32px",fontSize:"1rem"},children:"OK"})})]});const E=_,h=(F,G)=>{const P=[];for(let z=F;z<=G;z++){const m=E===z;P.push(i.jsx("button",{className:"rate-modal-btn",style:{...Ze(kt(z)),width:64,height:68,fontFamily:"var(--number-font)",fontSize:"2.2rem",borderRadius:16,border:"4px solid "+(m?"#fff":"transparent"),cursor:"pointer",display:"grid",placeItems:"center",padding:0,transition:"transform 0.15s ease-out, box-shadow 0.15s ease-out",...m?{boxShadow:"0 0 28px rgba(255,255,255,0.8), 0 0 0 2px #fff inset",transform:"scale(1.08)"}:{}},onClick:()=>w(E===z?null:z),children:z},z))}return P};return i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:20},children:[i.jsx("div",{style:{marginBottom:12,transform:"scale(1.8)",display:"inline-block",filter:"drop-shadow(0 4px 12px rgba(0,0,0,0.5))"},children:i.jsx(wt,{cc:L.cc})}),i.jsx("h2",{style:{margin:"10px 0 4px",fontSize:"1.7rem"},children:ne(L.title)}),i.jsxs("p",{style:{color:"var(--muted)",margin:0,fontSize:"1rem"},children:[ne(L.artist)," · ",ne(Ke[L.cc]||L.cc.toUpperCase())]}),i.jsx("p",{style:{color:"var(--gold)",margin:"8px 0 0",fontSize:"0.85rem",fontWeight:800,letterSpacing:"0.08em",textTransform:"uppercase"},children:ne(K)})]}),i.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(255,209,102,0.06) 0%, var(--panel2-solid) 100%)",border:"1px solid var(--line)",borderRadius:22,padding:"24px 20px",textAlign:"center",marginBottom:20,boxShadow:"inset 0 2px 8px rgba(0,0,0,0.3)"},children:[i.jsx("div",{style:{fontFamily:"var(--number-font)",fontSize:"2.8rem",color:"var(--gold)",marginBottom:22,letterSpacing:"0.03em",textShadow:"0 0 20px rgba(255,209,102,0.4)"},children:E!=null?i.jsxs(i.Fragment,{children:[E," ",i.jsx("span",{style:{fontSize:"1.2rem",color:"var(--muted)"},children:"/ 12 Pts"})]}):i.jsx("span",{style:{color:"var(--muted)",fontSize:"1.4rem"},children:"– Pts"})}),i.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",marginBottom:14,flexWrap:"wrap"},children:h(1,5)}),i.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:h(6,10)}),i.jsx("div",{style:{marginTop:16,display:"flex",justifyContent:"center"},children:i.jsxs("button",{style:{...Ze(kt(12)),width:140,height:68,fontFamily:"var(--number-font)",fontSize:"2.2rem",borderRadius:16,border:"4px solid "+(E===12?"#fff":"transparent"),cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"transform 0.15s ease-out, box-shadow 0.15s ease-out",...E===12?{boxShadow:"0 0 28px rgba(255,255,255,0.8), 0 0 0 2px #fff inset",transform:"scale(1.08)"}:{}},onClick:()=>w(E===12?null:12),children:["12 ",i.jsx("span",{style:{fontSize:"0.8rem",fontFamily:"var(--display)",textTransform:"uppercase",letterSpacing:"0.1em",marginTop:6},children:"FAV"})]})})]}),i.jsx("div",{className:"actions",style:{marginTop:18,justifyContent:"flex-end"},children:i.jsx("button",{className:"primary",onClick:()=>I(s.id,W,_),style:{padding:"12px 32px",fontSize:"1rem"},children:"Fertig"})})]})},I0=({S:s,currentUser:d,isRealAdmin:c,adminViewOff:p,setAdminViewOff:g,onSaveNames:x,onImport:C,onExport:I,onOpenJson:D,onClose:S,showToast:L,autoHardReset:B,updateS:W})=>{const J=!!d,[K,Q]=H.useState(()=>{const E={};return s.jury.forEach(h=>E[h.id]=h.name),E}),_=E=>{const h=E.target.files[0];if(!h)return;const F=new FileReader;F.onload=()=>{try{const G=JSON.parse(F.result);C(G)}catch{L("Invalid file","error")}},F.readAsText(h)},w=()=>{const E=s.jury.map(h=>({dataset:{jn:h.id},value:K[h.id]||""}));x(E)};return i.jsxs(i.Fragment,{children:[i.jsx("h3",{children:"Settings"}),!J&&i.jsx("p",{className:"hint",style:{color:"var(--red)",fontWeight:600,background:"rgba(255,77,109,0.1)",padding:"10px 14px",borderRadius:10,border:"1px solid rgba(255,77,109,0.3)",marginBottom:16},children:"⚠️ Logge dich mit Google ein, um Export/Import/JSON zu nutzen."}),s.jury.map(E=>i.jsxs("label",{children:[E.id.toUpperCase()," Name",i.jsx("input",{value:K[E.id]||"",onChange:h=>Q(F=>({...F,[E.id]:h.target.value}))})]},E.id)),c&&i.jsxs("label",{style:{flexDirection:"row",alignItems:"center",gap:12,marginTop:16,cursor:"pointer",background:"rgba(255,255,255,0.05)",padding:"12px",borderRadius:12,border:"1px solid var(--line)"},children:[i.jsx("input",{type:"checkbox",checked:!p,onChange:E=>{const h=!E.target.checked;g(h),localStorage.setItem("esc-admin-view-off",h?"true":"false")}}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[i.jsx("span",{style:{color:"var(--ink)",fontWeight:600},children:"Admin-Modus"}),i.jsx("span",{style:{fontSize:"0.75rem",color:"var(--muted)",fontWeight:500},children:"Erlaubt das Bearbeiten von Tipps anderer Juroren."})]})]}),i.jsx("hr",{style:{border:0,borderTop:"1px solid var(--line)",margin:"20px 0"}}),i.jsxs("label",{style:{flexDirection:"row",alignItems:"center",gap:12,cursor:"pointer",background:"rgba(255,255,255,0.05)",padding:"12px",borderRadius:12,border:"1px solid var(--line)"},children:[i.jsx("input",{type:"checkbox",checked:B,onChange:E=>{const h=E.target.checked;W(F=>({...F,autoHardReset:h}))}}),i.jsx("span",{style:{color:"var(--ink)",fontWeight:600},children:"Auto-Hard-Reset beim Laden (Cache leeren)"})]}),i.jsxs("div",{style:{display:"flex",gap:8,marginTop:16},children:[i.jsxs("button",{onClick:I,disabled:!J,style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"8px 10px",borderRadius:10,background:"linear-gradient(145deg, rgba(26,14,52,0.95) 0%, rgba(12,6,26,0.98) 100%)",border:"1px solid rgba(148,94,255,0.25)",color:J?"var(--ink)":"var(--muted)",fontWeight:600,fontSize:"0.8rem",whiteSpace:"nowrap",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)",cursor:J?"pointer":"not-allowed",opacity:J?1:.4,transition:"all 0.15s ease"},onMouseEnter:E=>{J&&(E.currentTarget.style.transform="translateY(-1px)",E.currentTarget.style.borderColor="rgba(148,94,255,0.5)",E.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 6px 16px rgba(0,0,0,0.4)")},onMouseLeave:E=>{J&&(E.currentTarget.style.transform="translateY(0)",E.currentTarget.style.borderColor="rgba(148,94,255,0.25)",E.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)")},children:[i.jsx("span",{style:{fontSize:"1rem"},children:"📤"})," Export"]}),i.jsxs("label",{style:{flex:1,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:6,padding:"8px 10px",borderRadius:10,background:"linear-gradient(145deg, rgba(26,14,52,0.95) 0%, rgba(12,6,26,0.98) 100%)",border:"1px solid rgba(148,94,255,0.25)",color:J?"var(--ink)":"var(--muted)",fontWeight:600,fontSize:"0.8rem",whiteSpace:"nowrap",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)",cursor:J?"pointer":"not-allowed",opacity:J?1:.4,transition:"all 0.15s ease",margin:0},onMouseEnter:E=>{J&&(E.currentTarget.style.transform="translateY(-1px)",E.currentTarget.style.borderColor="rgba(148,94,255,0.5)",E.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 6px 16px rgba(0,0,0,0.4)")},onMouseLeave:E=>{J&&(E.currentTarget.style.transform="translateY(0)",E.currentTarget.style.borderColor="rgba(148,94,255,0.25)",E.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)")},children:[i.jsx("span",{style:{fontSize:"1rem"},children:"📥"})," Import",i.jsx("input",{type:"file",style:{display:"none"},disabled:!J,onChange:_})]}),i.jsxs("button",{onClick:D,disabled:!J,style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"8px 10px",borderRadius:10,background:"linear-gradient(145deg, rgba(26,14,52,0.95) 0%, rgba(12,6,26,0.98) 100%)",border:"1px solid rgba(148,94,255,0.25)",color:J?"var(--ink)":"var(--muted)",fontWeight:600,fontSize:"0.8rem",whiteSpace:"nowrap",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)",cursor:J?"pointer":"not-allowed",opacity:J?1:.4,transition:"all 0.15s ease"},onMouseEnter:E=>{J&&(E.currentTarget.style.transform="translateY(-1px)",E.currentTarget.style.borderColor="rgba(148,94,255,0.5)",E.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 6px 16px rgba(0,0,0,0.4)")},onMouseLeave:E=>{J&&(E.currentTarget.style.transform="translateY(0)",E.currentTarget.style.borderColor="rgba(148,94,255,0.25)",E.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)")},children:[i.jsx("span",{style:{fontSize:"1rem"},children:"💻"})," JSON"]})]}),i.jsxs("div",{className:"actions",children:[i.jsx("button",{className:"ghost",onClick:S,children:"Close"}),i.jsx("button",{className:"primary",onClick:w,children:"Save"})]})]})},P0=({S:s,onSave:d,onBack:c,onClose:p})=>{const[g,x]=H.useState(JSON.stringify(s,null,2));return i.jsxs(i.Fragment,{children:[i.jsx("h3",{children:"JSON Editor"}),i.jsx("p",{className:"hint",children:"Bearbeite den gesamten JSON-State direkt hier:"}),i.jsx("textarea",{value:g,onChange:C=>x(C.target.value),style:{width:"100%",height:320,fontFamily:"monospace",background:"var(--panel2-solid)",color:"var(--ink)",border:"1px solid var(--line)",borderRadius:12,padding:14,resize:"vertical",fontSize:"0.85rem",lineHeight:1.5}}),i.jsxs("div",{className:"actions",children:[i.jsx("button",{className:"ghost",onClick:c,children:"Zurück"}),i.jsx("button",{className:"primary",onClick:()=>d(g),children:"Speichern & Anwenden"})]})]})};let Mn;y.view==="compare"?Mn=y0():y.view==="library"?Mn=b0():y.view==="stats"?Mn=v0():y.yearId?Mn=u0():Mn=Zl();const L0=y.view==="home"&&!y.yearId;return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"wrap",children:i.jsxs("div",{id:"app",ref:be,children:[s0(),Mn]})}),i.jsx("div",{id:"fab_container",children:L0&&i.jsx("button",{className:"fab",onClick:()=>se("newYear"),title:"Add new contest",children:"＋"})}),i.jsx("div",{id:"toast-container",children:k.map(s=>i.jsx("div",{className:"toast "+(s.type||""),children:(s.type==="success"?"✓ ":s.type==="error"?"✗ ":"")+s.msg},s.id))}),i.jsx("dialog",{id:"dlg",ref:pe,tabIndex:-1,className:Y.mode==="song"||Y.mode==="picker"||Y.mode==="json"?"wide":"",children:Y.open&&w0()})]})}const so=e=>new Promise((t,n)=>{const r=document.createElement("script");r.src=e,r.onload=t,r.onerror=n,document.head.appendChild(r)});(async()=>{try{window.firebase||(await so("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"),await so("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"),await so("https://www.gstatic.com/firebasejs/10.12.0/firebase-database-compat.js"))}catch(e){console.error("Firebase SDKs konnten nicht geladen werden:",e)}co.createRoot(document.getElementById("root")).render(i.jsx(rp.StrictMode,{children:i.jsx(kg,{})}))})();
