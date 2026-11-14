(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function W0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hd={exports:{}},xi={},md={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oa=Symbol.for("react.element"),H0=Symbol.for("react.portal"),U0=Symbol.for("react.fragment"),$0=Symbol.for("react.strict_mode"),V0=Symbol.for("react.profiler"),Y0=Symbol.for("react.provider"),G0=Symbol.for("react.context"),Q0=Symbol.for("react.forward_ref"),K0=Symbol.for("react.suspense"),J0=Symbol.for("react.memo"),q0=Symbol.for("react.lazy"),ns=Symbol.iterator;function X0(e){return e===null||typeof e!="object"?null:(e=ns&&e[ns]||e["@@iterator"],typeof e=="function"?e:null)}var xd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bd=Object.assign,yd={};function hn(e,t,r){this.props=e,this.context=t,this.refs=yd,this.updater=r||xd}hn.prototype.isReactComponent={};hn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vd(){}vd.prototype=hn.prototype;function al(e,t,r){this.props=e,this.context=t,this.refs=yd,this.updater=r||xd}var il=al.prototype=new vd;il.constructor=al;bd(il,hn.prototype);il.isPureReactComponent=!0;var as=Array.isArray,wd=Object.prototype.hasOwnProperty,ol={current:null},kd={key:!0,ref:!0,__self:!0,__source:!0};function Sd(e,t,r){var n,i={},o=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)wd.call(t,n)&&!kd.hasOwnProperty(n)&&(i[n]=t[n]);var f=arguments.length-2;if(f===1)i.children=r;else if(1<f){for(var u=Array(f),w=0;w<f;w++)u[w]=arguments[w+2];i.children=u}if(e&&e.defaultProps)for(n in f=e.defaultProps,f)i[n]===void 0&&(i[n]=f[n]);return{$$typeof:oa,type:e,key:o,ref:l,props:i,_owner:ol.current}}function Z0(e,t){return{$$typeof:oa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ll(e){return typeof e=="object"&&e!==null&&e.$$typeof===oa}function ep(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var is=/\/+/g;function _i(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ep(""+e.key):t.toString(36)}function Ra(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case oa:case H0:l=!0}}if(l)return l=e,i=i(l),e=n===""?"."+_i(l,0):n,as(i)?(r="",e!=null&&(r=e.replace(is,"$&/")+"/"),Ra(i,t,r,"",function(w){return w})):i!=null&&(ll(i)&&(i=Z0(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(is,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=n===""?".":n+":",as(e))for(var f=0;f<e.length;f++){o=e[f];var u=n+_i(o,f);l+=Ra(o,t,r,u,i)}else if(u=X0(e),typeof u=="function")for(e=u.call(e),f=0;!(o=e.next()).done;)o=o.value,u=n+_i(o,f++),l+=Ra(o,t,r,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ma(e,t,r){if(e==null)return e;var n=[],i=0;return Ra(e,n,"","",function(o){return t.call(r,o,i++)}),n}function tp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qe={current:null},Fa={transition:null},rp={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:Fa,ReactCurrentOwner:ol};function jd(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:ma,forEach:function(e,t,r){ma(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ma(e,function(){t++}),t},toArray:function(e){return ma(e,function(t){return t})||[]},only:function(e){if(!ll(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};fe.Component=hn;fe.Fragment=U0;fe.Profiler=V0;fe.PureComponent=al;fe.StrictMode=$0;fe.Suspense=K0;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rp;fe.act=jd;fe.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=bd({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=ol.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(u in t)wd.call(t,u)&&!kd.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&f!==void 0?f[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){f=Array(u);for(var w=0;w<u;w++)f[w]=arguments[w+2];n.children=f}return{$$typeof:oa,type:e.type,key:i,ref:o,props:n,_owner:l}};fe.createContext=function(e){return e={$$typeof:G0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Y0,_context:e},e.Consumer=e};fe.createElement=Sd;fe.createFactory=function(e){var t=Sd.bind(null,e);return t.type=e,t};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:Q0,render:e}};fe.isValidElement=ll;fe.lazy=function(e){return{$$typeof:q0,_payload:{_status:-1,_result:e},_init:tp}};fe.memo=function(e,t){return{$$typeof:J0,type:e,compare:t===void 0?null:t}};fe.startTransition=function(e){var t=Fa.transition;Fa.transition={};try{e()}finally{Fa.transition=t}};fe.unstable_act=jd;fe.useCallback=function(e,t){return qe.current.useCallback(e,t)};fe.useContext=function(e){return qe.current.useContext(e)};fe.useDebugValue=function(){};fe.useDeferredValue=function(e){return qe.current.useDeferredValue(e)};fe.useEffect=function(e,t){return qe.current.useEffect(e,t)};fe.useId=function(){return qe.current.useId()};fe.useImperativeHandle=function(e,t,r){return qe.current.useImperativeHandle(e,t,r)};fe.useInsertionEffect=function(e,t){return qe.current.useInsertionEffect(e,t)};fe.useLayoutEffect=function(e,t){return qe.current.useLayoutEffect(e,t)};fe.useMemo=function(e,t){return qe.current.useMemo(e,t)};fe.useReducer=function(e,t,r){return qe.current.useReducer(e,t,r)};fe.useRef=function(e){return qe.current.useRef(e)};fe.useState=function(e){return qe.current.useState(e)};fe.useSyncExternalStore=function(e,t,r){return qe.current.useSyncExternalStore(e,t,r)};fe.useTransition=function(){return qe.current.useTransition()};fe.version="18.3.1";md.exports=fe;var U=md.exports;const np=W0(U);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap=U,ip=Symbol.for("react.element"),op=Symbol.for("react.fragment"),lp=Object.prototype.hasOwnProperty,sp=ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dp={key:!0,ref:!0,__self:!0,__source:!0};function Cd(e,t,r){var n,i={},o=null,l=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)lp.call(t,n)&&!dp.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:ip,type:e,key:o,ref:l,props:i,_owner:sp.current}}xi.Fragment=op;xi.jsx=Cd;xi.jsxs=Cd;hd.exports=xi;var a=hd.exports,uo={},Nd={exports:{}},pt={},zd={exports:{}},Td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(Z,le){var oe=Z.length;Z.push(le);e:for(;0<oe;){var se=oe-1>>>1,de=Z[se];if(0<i(de,le))Z[se]=le,Z[oe]=de,oe=se;else break e}}function r(Z){return Z.length===0?null:Z[0]}function n(Z){if(Z.length===0)return null;var le=Z[0],oe=Z.pop();if(oe!==le){Z[0]=oe;e:for(var se=0,de=Z.length,wr=de>>>1;se<wr;){var kt=2*(se+1)-1,ue=Z[kt],ot=kt+1,Pt=Z[ot];if(0>i(ue,oe))ot<de&&0>i(Pt,ue)?(Z[se]=Pt,Z[ot]=oe,se=ot):(Z[se]=ue,Z[kt]=oe,se=kt);else if(ot<de&&0>i(Pt,oe))Z[se]=Pt,Z[ot]=oe,se=ot;else break e}}return le}function i(Z,le){var oe=Z.sortIndex-le.sortIndex;return oe!==0?oe:Z.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,f=l.now();e.unstable_now=function(){return l.now()-f}}var u=[],w=[],D=1,O=null,L=3,y=!1,B=!1,Y=!1,ye=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(Z){for(var le=r(w);le!==null;){if(le.callback===null)n(w);else if(le.startTime<=Z)n(w),le.sortIndex=le.expirationTime,t(u,le);else break;le=r(w)}}function H(Z){if(Y=!1,C(Z),!B)if(r(u)!==null)B=!0,vr(ee);else{var le=r(w);le!==null&&Ge(H,le.startTime-Z)}}function ee(Z,le){B=!1,Y&&(Y=!1,k(ie),ie=-1),y=!0;var oe=L;try{for(C(le),O=r(u);O!==null&&(!(O.expirationTime>le)||Z&&!Ze());){var se=O.callback;if(typeof se=="function"){O.callback=null,L=O.priorityLevel;var de=se(O.expirationTime<=le);le=e.unstable_now(),typeof de=="function"?O.callback=de:O===r(u)&&n(u),C(le)}else n(u);O=r(u)}if(O!==null)var wr=!0;else{var kt=r(w);kt!==null&&Ge(H,kt.startTime-le),wr=!1}return wr}finally{O=null,L=oe,y=!1}}var te=!1,ae=null,ie=-1,ke=5,pe=-1;function Ze(){return!(e.unstable_now()-pe<ke)}function Xt(){if(ae!==null){var Z=e.unstable_now();pe=Z;var le=!0;try{le=ae(!0,Z)}finally{le?ve():(te=!1,ae=null)}}else te=!1}var ve;if(typeof b=="function")ve=function(){b(Xt)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,We=be.port2;be.port1.onmessage=Xt,ve=function(){We.postMessage(null)}}else ve=function(){ye(Xt,0)};function vr(Z){ae=Z,te||(te=!0,ve())}function Ge(Z,le){ie=ye(function(){Z(e.unstable_now())},le)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Z){Z.callback=null},e.unstable_continueExecution=function(){B||y||(B=!0,vr(ee))},e.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<Z?Math.floor(1e3/Z):5},e.unstable_getCurrentPriorityLevel=function(){return L},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(Z){switch(L){case 1:case 2:case 3:var le=3;break;default:le=L}var oe=L;L=le;try{return Z()}finally{L=oe}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Z,le){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var oe=L;L=Z;try{return le()}finally{L=oe}},e.unstable_scheduleCallback=function(Z,le,oe){var se=e.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?se+oe:se):oe=se,Z){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=oe+de,Z={id:D++,callback:le,priorityLevel:Z,startTime:oe,expirationTime:de,sortIndex:-1},oe>se?(Z.sortIndex=oe,t(w,Z),r(u)===null&&Z===r(w)&&(Y?(k(ie),ie=-1):Y=!0,Ge(H,oe-se))):(Z.sortIndex=de,t(u,Z),B||y||(B=!0,vr(ee))),Z},e.unstable_shouldYield=Ze,e.unstable_wrapCallback=function(Z){var le=L;return function(){var oe=L;L=le;try{return Z.apply(this,arguments)}finally{L=oe}}}})(Td);zd.exports=Td;var cp=zd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up=U,ut=cp;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ed=new Set,Un={};function Dr(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Un[e]=t,e=0;e<t.length;e++)Ed.add(t[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),po=Object.prototype.hasOwnProperty,pp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,os={},ls={};function fp(e){return po.call(ls,e)?!0:po.call(os,e)?!1:pp.test(e)?ls[e]=!0:(os[e]=!0,!1)}function gp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hp(e,t,r,n){if(t===null||typeof t>"u"||gp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,r,n,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var sl=/[\-:]([a-z])/g;function dl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sl,dl);Be[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sl,dl);Be[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sl,dl);Be[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function cl(e,t,r,n){var i=Be.hasOwnProperty(t)?Be[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hp(t,r,i,n)&&(r=null),n||i===null?fp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var qt=up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xa=Symbol.for("react.element"),Ur=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),ul=Symbol.for("react.strict_mode"),fo=Symbol.for("react.profiler"),Id=Symbol.for("react.provider"),Pd=Symbol.for("react.context"),pl=Symbol.for("react.forward_ref"),go=Symbol.for("react.suspense"),ho=Symbol.for("react.suspense_list"),fl=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),Ld=Symbol.for("react.offscreen"),ss=Symbol.iterator;function vn(e){return e===null||typeof e!="object"?null:(e=ss&&e[ss]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Object.assign,Mi;function En(e){if(Mi===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Mi=t&&t[1]||""}return`
`+Mi+e}var Di=!1;function Oi(e,t){if(!e||Di)return"";Di=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(w){var n=w}Reflect.construct(e,[],t)}else{try{t.call()}catch(w){n=w}e.call(t.prototype)}else{try{throw Error()}catch(w){n=w}e()}}catch(w){if(w&&n&&typeof w.stack=="string"){for(var i=w.stack.split(`
`),o=n.stack.split(`
`),l=i.length-1,f=o.length-1;1<=l&&0<=f&&i[l]!==o[f];)f--;for(;1<=l&&0<=f;l--,f--)if(i[l]!==o[f]){if(l!==1||f!==1)do if(l--,f--,0>f||i[l]!==o[f]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=f);break}}}finally{Di=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?En(e):""}function mp(e){switch(e.tag){case 5:return En(e.type);case 16:return En("Lazy");case 13:return En("Suspense");case 19:return En("SuspenseList");case 0:case 2:case 15:return e=Oi(e.type,!1),e;case 11:return e=Oi(e.type.render,!1),e;case 1:return e=Oi(e.type,!0),e;default:return""}}function mo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $r:return"Fragment";case Ur:return"Portal";case fo:return"Profiler";case ul:return"StrictMode";case go:return"Suspense";case ho:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pd:return(e.displayName||"Context")+".Consumer";case Id:return(e._context.displayName||"Context")+".Provider";case pl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fl:return t=e.displayName||null,t!==null?t:mo(e.type)||"Memo";case tr:t=e._payload,e=e._init;try{return mo(e(t))}catch{}}return null}function xp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mo(t);case 8:return t===ul?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bp(e){var t=Rd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){n=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ba(e){e._valueTracker||(e._valueTracker=bp(e))}function Fd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Rd(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Ga(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xo(e,t){var r=t.checked;return Te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function ds(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=hr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _d(e,t){t=t.checked,t!=null&&cl(e,"checked",t,!1)}function bo(e,t){_d(e,t);var r=hr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yo(e,t.type,r):t.hasOwnProperty("defaultValue")&&yo(e,t.type,hr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cs(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function yo(e,t,r){(t!=="number"||Ga(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var In=Array.isArray;function tn(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+hr(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function vo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return Te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function us(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error($(92));if(In(r)){if(1<r.length)throw Error($(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:hr(r)}}function Md(e,t){var r=hr(t.value),n=hr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function ps(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ya,Od=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ya.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $n(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yp=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(e){yp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rn[t]=Rn[e]})});function Ad(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Rn.hasOwnProperty(e)&&Rn[e]?(""+t).trim():t+"px"}function Bd(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Ad(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var vp=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ko(e,t){if(t){if(vp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function So(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jo=null;function gl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Co=null,rn=null,nn=null;function fs(e){if(e=da(e)){if(typeof Co!="function")throw Error($(280));var t=e.stateNode;t&&(t=ki(t),Co(e.stateNode,e.type,t))}}function Wd(e){rn?nn?nn.push(e):nn=[e]:rn=e}function Hd(){if(rn){var e=rn,t=nn;if(nn=rn=null,fs(e),t)for(e=0;e<t.length;e++)fs(t[e])}}function Ud(e,t){return e(t)}function $d(){}var Ai=!1;function Vd(e,t,r){if(Ai)return e(t,r);Ai=!0;try{return Ud(e,t,r)}finally{Ai=!1,(rn!==null||nn!==null)&&($d(),Hd())}}function Vn(e,t){var r=e.stateNode;if(r===null)return null;var n=ki(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error($(231,t,typeof r));return r}var No=!1;if(Gt)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){No=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{No=!1}function wp(e,t,r,n,i,o,l,f,u){var w=Array.prototype.slice.call(arguments,3);try{t.apply(r,w)}catch(D){this.onError(D)}}var Fn=!1,Qa=null,Ka=!1,zo=null,kp={onError:function(e){Fn=!0,Qa=e}};function Sp(e,t,r,n,i,o,l,f,u){Fn=!1,Qa=null,wp.apply(kp,arguments)}function jp(e,t,r,n,i,o,l,f,u){if(Sp.apply(this,arguments),Fn){if(Fn){var w=Qa;Fn=!1,Qa=null}else throw Error($(198));Ka||(Ka=!0,zo=w)}}function Or(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Yd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gs(e){if(Or(e)!==e)throw Error($(188))}function Cp(e){var t=e.alternate;if(!t){if(t=Or(e),t===null)throw Error($(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return gs(i),e;if(o===n)return gs(i),t;o=o.sibling}throw Error($(188))}if(r.return!==n.return)r=i,n=o;else{for(var l=!1,f=i.child;f;){if(f===r){l=!0,r=i,n=o;break}if(f===n){l=!0,n=i,r=o;break}f=f.sibling}if(!l){for(f=o.child;f;){if(f===r){l=!0,r=o,n=i;break}if(f===n){l=!0,n=o,r=i;break}f=f.sibling}if(!l)throw Error($(189))}}if(r.alternate!==n)throw Error($(190))}if(r.tag!==3)throw Error($(188));return r.stateNode.current===r?e:t}function Gd(e){return e=Cp(e),e!==null?Qd(e):null}function Qd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qd(e);if(t!==null)return t;e=e.sibling}return null}var Kd=ut.unstable_scheduleCallback,hs=ut.unstable_cancelCallback,Np=ut.unstable_shouldYield,zp=ut.unstable_requestPaint,Ie=ut.unstable_now,Tp=ut.unstable_getCurrentPriorityLevel,hl=ut.unstable_ImmediatePriority,Jd=ut.unstable_UserBlockingPriority,Ja=ut.unstable_NormalPriority,Ep=ut.unstable_LowPriority,qd=ut.unstable_IdlePriority,bi=null,Ot=null;function Ip(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(bi,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:Rp,Pp=Math.log,Lp=Math.LN2;function Rp(e){return e>>>=0,e===0?32:31-(Pp(e)/Lp|0)|0}var va=64,wa=4194304;function Pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qa(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,l=r&268435455;if(l!==0){var f=l&~i;f!==0?n=Pn(f):(o&=l,o!==0&&(n=Pn(o)))}else l=r&~i,l!==0?n=Pn(l):o!==0&&(n=Pn(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Tt(t),i=1<<r,n|=e[r],t&=~i;return n}function Fp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _p(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Tt(o),f=1<<l,u=i[l];u===-1?(!(f&r)||f&n)&&(i[l]=Fp(f,t)):u<=t&&(e.expiredLanes|=f),o&=~f}}function To(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xd(){var e=va;return va<<=1,!(va&4194240)&&(va=64),e}function Bi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function la(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=r}function Mp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Tt(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function ml(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Tt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var xe=0;function Zd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ec,xl,tc,rc,nc,Eo=!1,ka=[],lr=null,sr=null,dr=null,Yn=new Map,Gn=new Map,nr=[],Dp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ms(e,t){switch(e){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function kn(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=da(t),t!==null&&xl(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Op(e,t,r,n,i){switch(t){case"focusin":return lr=kn(lr,e,t,r,n,i),!0;case"dragenter":return sr=kn(sr,e,t,r,n,i),!0;case"mouseover":return dr=kn(dr,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return Yn.set(o,kn(Yn.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Gn.set(o,kn(Gn.get(o)||null,e,t,r,n,i)),!0}return!1}function ac(e){var t=zr(e.target);if(t!==null){var r=Or(t);if(r!==null){if(t=r.tag,t===13){if(t=Yd(r),t!==null){e.blockedOn=t,nc(e.priority,function(){tc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _a(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Io(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);jo=n,r.target.dispatchEvent(n),jo=null}else return t=da(r),t!==null&&xl(t),e.blockedOn=r,!1;t.shift()}return!0}function xs(e,t,r){_a(e)&&r.delete(t)}function Ap(){Eo=!1,lr!==null&&_a(lr)&&(lr=null),sr!==null&&_a(sr)&&(sr=null),dr!==null&&_a(dr)&&(dr=null),Yn.forEach(xs),Gn.forEach(xs)}function Sn(e,t){e.blockedOn===t&&(e.blockedOn=null,Eo||(Eo=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,Ap)))}function Qn(e){function t(i){return Sn(i,e)}if(0<ka.length){Sn(ka[0],e);for(var r=1;r<ka.length;r++){var n=ka[r];n.blockedOn===e&&(n.blockedOn=null)}}for(lr!==null&&Sn(lr,e),sr!==null&&Sn(sr,e),dr!==null&&Sn(dr,e),Yn.forEach(t),Gn.forEach(t),r=0;r<nr.length;r++)n=nr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<nr.length&&(r=nr[0],r.blockedOn===null);)ac(r),r.blockedOn===null&&nr.shift()}var an=qt.ReactCurrentBatchConfig,Xa=!0;function Bp(e,t,r,n){var i=xe,o=an.transition;an.transition=null;try{xe=1,bl(e,t,r,n)}finally{xe=i,an.transition=o}}function Wp(e,t,r,n){var i=xe,o=an.transition;an.transition=null;try{xe=4,bl(e,t,r,n)}finally{xe=i,an.transition=o}}function bl(e,t,r,n){if(Xa){var i=Io(e,t,r,n);if(i===null)Ji(e,t,n,Za,r),ms(e,n);else if(Op(i,e,t,r,n))n.stopPropagation();else if(ms(e,n),t&4&&-1<Dp.indexOf(e)){for(;i!==null;){var o=da(i);if(o!==null&&ec(o),o=Io(e,t,r,n),o===null&&Ji(e,t,n,Za,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else Ji(e,t,n,null,r)}}var Za=null;function Io(e,t,r,n){if(Za=null,e=gl(n),e=zr(e),e!==null)if(t=Or(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Yd(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Za=e,null}function ic(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tp()){case hl:return 1;case Jd:return 4;case Ja:case Ep:return 16;case qd:return 536870912;default:return 16}default:return 16}}var ir=null,yl=null,Ma=null;function oc(){if(Ma)return Ma;var e,t=yl,r=t.length,n,i="value"in ir?ir.value:ir.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var l=r-e;for(n=1;n<=l&&t[r-n]===i[o-n];n++);return Ma=i.slice(e,1<n?1-n:void 0)}function Da(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sa(){return!0}function bs(){return!1}function ft(e){function t(r,n,i,o,l){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(r=e[f],this[f]=r?r(o):o[f]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Sa:bs,this.isPropagationStopped=bs,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=ft(mn),sa=Te({},mn,{view:0,detail:0}),Hp=ft(sa),Wi,Hi,jn,yi=Te({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jn&&(jn&&e.type==="mousemove"?(Wi=e.screenX-jn.screenX,Hi=e.screenY-jn.screenY):Hi=Wi=0,jn=e),Wi)},movementY:function(e){return"movementY"in e?e.movementY:Hi}}),ys=ft(yi),Up=Te({},yi,{dataTransfer:0}),$p=ft(Up),Vp=Te({},sa,{relatedTarget:0}),Ui=ft(Vp),Yp=Te({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Gp=ft(Yp),Qp=Te({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kp=ft(Qp),Jp=Te({},mn,{data:0}),vs=ft(Jp),qp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ef(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zp[e])?!!t[e]:!1}function wl(){return ef}var tf=Te({},sa,{key:function(e){if(e.key){var t=qp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Da(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wl,charCode:function(e){return e.type==="keypress"?Da(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Da(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rf=ft(tf),nf=Te({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ws=ft(nf),af=Te({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wl}),of=ft(af),lf=Te({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),sf=ft(lf),df=Te({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cf=ft(df),uf=[9,13,27,32],kl=Gt&&"CompositionEvent"in window,_n=null;Gt&&"documentMode"in document&&(_n=document.documentMode);var pf=Gt&&"TextEvent"in window&&!_n,lc=Gt&&(!kl||_n&&8<_n&&11>=_n),ks=" ",Ss=!1;function sc(e,t){switch(e){case"keyup":return uf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function ff(e,t){switch(e){case"compositionend":return dc(t);case"keypress":return t.which!==32?null:(Ss=!0,ks);case"textInput":return e=t.data,e===ks&&Ss?null:e;default:return null}}function gf(e,t){if(Vr)return e==="compositionend"||!kl&&sc(e,t)?(e=oc(),Ma=yl=ir=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lc&&t.locale!=="ko"?null:t.data;default:return null}}var hf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hf[e.type]:t==="textarea"}function cc(e,t,r,n){Wd(n),t=ei(t,"onChange"),0<t.length&&(r=new vl("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Mn=null,Kn=null;function mf(e){wc(e,0)}function vi(e){var t=Qr(e);if(Fd(t))return e}function xf(e,t){if(e==="change")return t}var uc=!1;if(Gt){var $i;if(Gt){var Vi="oninput"in document;if(!Vi){var Cs=document.createElement("div");Cs.setAttribute("oninput","return;"),Vi=typeof Cs.oninput=="function"}$i=Vi}else $i=!1;uc=$i&&(!document.documentMode||9<document.documentMode)}function Ns(){Mn&&(Mn.detachEvent("onpropertychange",pc),Kn=Mn=null)}function pc(e){if(e.propertyName==="value"&&vi(Kn)){var t=[];cc(t,Kn,e,gl(e)),Vd(mf,t)}}function bf(e,t,r){e==="focusin"?(Ns(),Mn=t,Kn=r,Mn.attachEvent("onpropertychange",pc)):e==="focusout"&&Ns()}function yf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vi(Kn)}function vf(e,t){if(e==="click")return vi(t)}function wf(e,t){if(e==="input"||e==="change")return vi(t)}function kf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:kf;function Jn(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!po.call(t,i)||!It(e[i],t[i]))return!1}return!0}function zs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ts(e,t){var r=zs(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=zs(r)}}function fc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gc(){for(var e=window,t=Ga();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ga(e.document)}return t}function Sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sf(e){var t=gc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&fc(r.ownerDocument.documentElement,r)){if(n!==null&&Sl(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=Ts(r,o);var l=Ts(r,n);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jf=Gt&&"documentMode"in document&&11>=document.documentMode,Yr=null,Po=null,Dn=null,Lo=!1;function Es(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Lo||Yr==null||Yr!==Ga(n)||(n=Yr,"selectionStart"in n&&Sl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Dn&&Jn(Dn,n)||(Dn=n,n=ei(Po,"onSelect"),0<n.length&&(t=new vl("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Yr)))}function ja(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Gr={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionend:ja("Transition","TransitionEnd")},Yi={},hc={};Gt&&(hc=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function wi(e){if(Yi[e])return Yi[e];if(!Gr[e])return e;var t=Gr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in hc)return Yi[e]=t[r];return e}var mc=wi("animationend"),xc=wi("animationiteration"),bc=wi("animationstart"),yc=wi("transitionend"),vc=new Map,Is="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(e,t){vc.set(e,t),Dr(t,[e])}for(var Gi=0;Gi<Is.length;Gi++){var Qi=Is[Gi],Cf=Qi.toLowerCase(),Nf=Qi[0].toUpperCase()+Qi.slice(1);xr(Cf,"on"+Nf)}xr(mc,"onAnimationEnd");xr(xc,"onAnimationIteration");xr(bc,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(yc,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function Ps(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,jp(n,t,void 0,e),e.currentTarget=null}function wc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var l=n.length-1;0<=l;l--){var f=n[l],u=f.instance,w=f.currentTarget;if(f=f.listener,u!==o&&i.isPropagationStopped())break e;Ps(i,f,w),o=u}else for(l=0;l<n.length;l++){if(f=n[l],u=f.instance,w=f.currentTarget,f=f.listener,u!==o&&i.isPropagationStopped())break e;Ps(i,f,w),o=u}}}if(Ka)throw e=zo,Ka=!1,zo=null,e}function Se(e,t){var r=t[Do];r===void 0&&(r=t[Do]=new Set);var n=e+"__bubble";r.has(n)||(kc(t,e,2,!1),r.add(n))}function Ki(e,t,r){var n=0;t&&(n|=4),kc(r,e,n,t)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function qn(e){if(!e[Ca]){e[Ca]=!0,Ed.forEach(function(r){r!=="selectionchange"&&(zf.has(r)||Ki(r,!1,e),Ki(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ca]||(t[Ca]=!0,Ki("selectionchange",!1,t))}}function kc(e,t,r,n){switch(ic(t)){case 1:var i=Bp;break;case 4:i=Wp;break;default:i=bl}r=i.bind(null,t,r,e),i=void 0,!No||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Ji(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var f=n.stateNode.containerInfo;if(f===i||f.nodeType===8&&f.parentNode===i)break;if(l===4)for(l=n.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;f!==null;){if(l=zr(f),l===null)return;if(u=l.tag,u===5||u===6){n=o=l;continue e}f=f.parentNode}}n=n.return}Vd(function(){var w=o,D=gl(r),O=[];e:{var L=vc.get(e);if(L!==void 0){var y=vl,B=e;switch(e){case"keypress":if(Da(r)===0)break e;case"keydown":case"keyup":y=rf;break;case"focusin":B="focus",y=Ui;break;case"focusout":B="blur",y=Ui;break;case"beforeblur":case"afterblur":y=Ui;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=$p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=of;break;case mc:case xc:case bc:y=Gp;break;case yc:y=sf;break;case"scroll":y=Hp;break;case"wheel":y=cf;break;case"copy":case"cut":case"paste":y=Kp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ws}var Y=(t&4)!==0,ye=!Y&&e==="scroll",k=Y?L!==null?L+"Capture":null:L;Y=[];for(var b=w,C;b!==null;){C=b;var H=C.stateNode;if(C.tag===5&&H!==null&&(C=H,k!==null&&(H=Vn(b,k),H!=null&&Y.push(Xn(b,H,C)))),ye)break;b=b.return}0<Y.length&&(L=new y(L,B,null,r,D),O.push({event:L,listeners:Y}))}}if(!(t&7)){e:{if(L=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",L&&r!==jo&&(B=r.relatedTarget||r.fromElement)&&(zr(B)||B[Qt]))break e;if((y||L)&&(L=D.window===D?D:(L=D.ownerDocument)?L.defaultView||L.parentWindow:window,y?(B=r.relatedTarget||r.toElement,y=w,B=B?zr(B):null,B!==null&&(ye=Or(B),B!==ye||B.tag!==5&&B.tag!==6)&&(B=null)):(y=null,B=w),y!==B)){if(Y=ys,H="onMouseLeave",k="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(Y=ws,H="onPointerLeave",k="onPointerEnter",b="pointer"),ye=y==null?L:Qr(y),C=B==null?L:Qr(B),L=new Y(H,b+"leave",y,r,D),L.target=ye,L.relatedTarget=C,H=null,zr(D)===w&&(Y=new Y(k,b+"enter",B,r,D),Y.target=C,Y.relatedTarget=ye,H=Y),ye=H,y&&B)t:{for(Y=y,k=B,b=0,C=Y;C;C=Hr(C))b++;for(C=0,H=k;H;H=Hr(H))C++;for(;0<b-C;)Y=Hr(Y),b--;for(;0<C-b;)k=Hr(k),C--;for(;b--;){if(Y===k||k!==null&&Y===k.alternate)break t;Y=Hr(Y),k=Hr(k)}Y=null}else Y=null;y!==null&&Ls(O,L,y,Y,!1),B!==null&&ye!==null&&Ls(O,ye,B,Y,!0)}}e:{if(L=w?Qr(w):window,y=L.nodeName&&L.nodeName.toLowerCase(),y==="select"||y==="input"&&L.type==="file")var ee=xf;else if(js(L))if(uc)ee=wf;else{ee=yf;var te=bf}else(y=L.nodeName)&&y.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(ee=vf);if(ee&&(ee=ee(e,w))){cc(O,ee,r,D);break e}te&&te(e,L,w),e==="focusout"&&(te=L._wrapperState)&&te.controlled&&L.type==="number"&&yo(L,"number",L.value)}switch(te=w?Qr(w):window,e){case"focusin":(js(te)||te.contentEditable==="true")&&(Yr=te,Po=w,Dn=null);break;case"focusout":Dn=Po=Yr=null;break;case"mousedown":Lo=!0;break;case"contextmenu":case"mouseup":case"dragend":Lo=!1,Es(O,r,D);break;case"selectionchange":if(jf)break;case"keydown":case"keyup":Es(O,r,D)}var ae;if(kl)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else Vr?sc(e,r)&&(ie="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ie="onCompositionStart");ie&&(lc&&r.locale!=="ko"&&(Vr||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&Vr&&(ae=oc()):(ir=D,yl="value"in ir?ir.value:ir.textContent,Vr=!0)),te=ei(w,ie),0<te.length&&(ie=new vs(ie,e,null,r,D),O.push({event:ie,listeners:te}),ae?ie.data=ae:(ae=dc(r),ae!==null&&(ie.data=ae)))),(ae=pf?ff(e,r):gf(e,r))&&(w=ei(w,"onBeforeInput"),0<w.length&&(D=new vs("onBeforeInput","beforeinput",null,r,D),O.push({event:D,listeners:w}),D.data=ae))}wc(O,t)})}function Xn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ei(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Vn(e,r),o!=null&&n.unshift(Xn(e,o,i)),o=Vn(e,t),o!=null&&n.push(Xn(e,o,i))),e=e.return}return n}function Hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ls(e,t,r,n,i){for(var o=t._reactName,l=[];r!==null&&r!==n;){var f=r,u=f.alternate,w=f.stateNode;if(u!==null&&u===n)break;f.tag===5&&w!==null&&(f=w,i?(u=Vn(r,o),u!=null&&l.unshift(Xn(r,u,f))):i||(u=Vn(r,o),u!=null&&l.push(Xn(r,u,f)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var Tf=/\r\n?/g,Ef=/\u0000|\uFFFD/g;function Rs(e){return(typeof e=="string"?e:""+e).replace(Tf,`
`).replace(Ef,"")}function Na(e,t,r){if(t=Rs(t),Rs(e)!==t&&r)throw Error($(425))}function ti(){}var Ro=null,Fo=null;function _o(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mo=typeof setTimeout=="function"?setTimeout:void 0,If=typeof clearTimeout=="function"?clearTimeout:void 0,Fs=typeof Promise=="function"?Promise:void 0,Pf=typeof queueMicrotask=="function"?queueMicrotask:typeof Fs<"u"?function(e){return Fs.resolve(null).then(e).catch(Lf)}:Mo;function Lf(e){setTimeout(function(){throw e})}function qi(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Qn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Qn(t)}function cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _s(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),Dt="__reactFiber$"+xn,Zn="__reactProps$"+xn,Qt="__reactContainer$"+xn,Do="__reactEvents$"+xn,Rf="__reactListeners$"+xn,Ff="__reactHandles$"+xn;function zr(e){var t=e[Dt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Qt]||r[Dt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=_s(e);e!==null;){if(r=e[Dt])return r;e=_s(e)}return t}e=r,r=e.parentNode}return null}function da(e){return e=e[Dt]||e[Qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function ki(e){return e[Zn]||null}var Oo=[],Kr=-1;function br(e){return{current:e}}function je(e){0>Kr||(e.current=Oo[Kr],Oo[Kr]=null,Kr--)}function we(e,t){Kr++,Oo[Kr]=e.current,e.current=t}var mr={},Ye=br(mr),nt=br(!1),Lr=mr;function dn(e,t){var r=e.type.contextTypes;if(!r)return mr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function at(e){return e=e.childContextTypes,e!=null}function ri(){je(nt),je(Ye)}function Ms(e,t,r){if(Ye.current!==mr)throw Error($(168));we(Ye,t),we(nt,r)}function Sc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error($(108,xp(e)||"Unknown",i));return Te({},r,n)}function ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mr,Lr=Ye.current,we(Ye,e),we(nt,nt.current),!0}function Ds(e,t,r){var n=e.stateNode;if(!n)throw Error($(169));r?(e=Sc(e,t,Lr),n.__reactInternalMemoizedMergedChildContext=e,je(nt),je(Ye),we(Ye,e)):je(nt),we(nt,r)}var Ut=null,Si=!1,Xi=!1;function jc(e){Ut===null?Ut=[e]:Ut.push(e)}function _f(e){Si=!0,jc(e)}function yr(){if(!Xi&&Ut!==null){Xi=!0;var e=0,t=xe;try{var r=Ut;for(xe=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Ut=null,Si=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),Kd(hl,yr),i}finally{xe=t,Xi=!1}}return null}var Jr=[],qr=0,ai=null,ii=0,mt=[],xt=0,Rr=null,$t=1,Vt="";function Cr(e,t){Jr[qr++]=ii,Jr[qr++]=ai,ai=e,ii=t}function Cc(e,t,r){mt[xt++]=$t,mt[xt++]=Vt,mt[xt++]=Rr,Rr=e;var n=$t;e=Vt;var i=32-Tt(n)-1;n&=~(1<<i),r+=1;var o=32-Tt(t)+i;if(30<o){var l=i-i%5;o=(n&(1<<l)-1).toString(32),n>>=l,i-=l,$t=1<<32-Tt(t)+i|r<<i|n,Vt=o+e}else $t=1<<o|r<<i|n,Vt=e}function jl(e){e.return!==null&&(Cr(e,1),Cc(e,1,0))}function Cl(e){for(;e===ai;)ai=Jr[--qr],Jr[qr]=null,ii=Jr[--qr],Jr[qr]=null;for(;e===Rr;)Rr=mt[--xt],mt[xt]=null,Vt=mt[--xt],mt[xt]=null,$t=mt[--xt],mt[xt]=null}var ct=null,dt=null,Ce=!1,zt=null;function Nc(e,t){var r=bt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Os(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,dt=cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Rr!==null?{id:$t,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=bt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ct=e,dt=null,!0):!1;default:return!1}}function Ao(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bo(e){if(Ce){var t=dt;if(t){var r=t;if(!Os(e,t)){if(Ao(e))throw Error($(418));t=cr(r.nextSibling);var n=ct;t&&Os(e,t)?Nc(n,r):(e.flags=e.flags&-4097|2,Ce=!1,ct=e)}}else{if(Ao(e))throw Error($(418));e.flags=e.flags&-4097|2,Ce=!1,ct=e}}}function As(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function za(e){if(e!==ct)return!1;if(!Ce)return As(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_o(e.type,e.memoizedProps)),t&&(t=dt)){if(Ao(e))throw zc(),Error($(418));for(;t;)Nc(e,t),t=cr(t.nextSibling)}if(As(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){dt=cr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ct?cr(e.stateNode.nextSibling):null;return!0}function zc(){for(var e=dt;e;)e=cr(e.nextSibling)}function cn(){dt=ct=null,Ce=!1}function Nl(e){zt===null?zt=[e]:zt.push(e)}var Mf=qt.ReactCurrentBatchConfig;function Cn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error($(309));var n=r.stateNode}if(!n)throw Error($(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var f=i.refs;l===null?delete f[o]:f[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error($(284));if(!r._owner)throw Error($(290,e))}return e}function Ta(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bs(e){var t=e._init;return t(e._payload)}function Tc(e){function t(k,b){if(e){var C=k.deletions;C===null?(k.deletions=[b],k.flags|=16):C.push(b)}}function r(k,b){if(!e)return null;for(;b!==null;)t(k,b),b=b.sibling;return null}function n(k,b){for(k=new Map;b!==null;)b.key!==null?k.set(b.key,b):k.set(b.index,b),b=b.sibling;return k}function i(k,b){return k=gr(k,b),k.index=0,k.sibling=null,k}function o(k,b,C){return k.index=C,e?(C=k.alternate,C!==null?(C=C.index,C<b?(k.flags|=2,b):C):(k.flags|=2,b)):(k.flags|=1048576,b)}function l(k){return e&&k.alternate===null&&(k.flags|=2),k}function f(k,b,C,H){return b===null||b.tag!==6?(b=io(C,k.mode,H),b.return=k,b):(b=i(b,C),b.return=k,b)}function u(k,b,C,H){var ee=C.type;return ee===$r?D(k,b,C.props.children,H,C.key):b!==null&&(b.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===tr&&Bs(ee)===b.type)?(H=i(b,C.props),H.ref=Cn(k,b,C),H.return=k,H):(H=$a(C.type,C.key,C.props,null,k.mode,H),H.ref=Cn(k,b,C),H.return=k,H)}function w(k,b,C,H){return b===null||b.tag!==4||b.stateNode.containerInfo!==C.containerInfo||b.stateNode.implementation!==C.implementation?(b=oo(C,k.mode,H),b.return=k,b):(b=i(b,C.children||[]),b.return=k,b)}function D(k,b,C,H,ee){return b===null||b.tag!==7?(b=Pr(C,k.mode,H,ee),b.return=k,b):(b=i(b,C),b.return=k,b)}function O(k,b,C){if(typeof b=="string"&&b!==""||typeof b=="number")return b=io(""+b,k.mode,C),b.return=k,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case xa:return C=$a(b.type,b.key,b.props,null,k.mode,C),C.ref=Cn(k,null,b),C.return=k,C;case Ur:return b=oo(b,k.mode,C),b.return=k,b;case tr:var H=b._init;return O(k,H(b._payload),C)}if(In(b)||vn(b))return b=Pr(b,k.mode,C,null),b.return=k,b;Ta(k,b)}return null}function L(k,b,C,H){var ee=b!==null?b.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return ee!==null?null:f(k,b,""+C,H);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case xa:return C.key===ee?u(k,b,C,H):null;case Ur:return C.key===ee?w(k,b,C,H):null;case tr:return ee=C._init,L(k,b,ee(C._payload),H)}if(In(C)||vn(C))return ee!==null?null:D(k,b,C,H,null);Ta(k,C)}return null}function y(k,b,C,H,ee){if(typeof H=="string"&&H!==""||typeof H=="number")return k=k.get(C)||null,f(b,k,""+H,ee);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case xa:return k=k.get(H.key===null?C:H.key)||null,u(b,k,H,ee);case Ur:return k=k.get(H.key===null?C:H.key)||null,w(b,k,H,ee);case tr:var te=H._init;return y(k,b,C,te(H._payload),ee)}if(In(H)||vn(H))return k=k.get(C)||null,D(b,k,H,ee,null);Ta(b,H)}return null}function B(k,b,C,H){for(var ee=null,te=null,ae=b,ie=b=0,ke=null;ae!==null&&ie<C.length;ie++){ae.index>ie?(ke=ae,ae=null):ke=ae.sibling;var pe=L(k,ae,C[ie],H);if(pe===null){ae===null&&(ae=ke);break}e&&ae&&pe.alternate===null&&t(k,ae),b=o(pe,b,ie),te===null?ee=pe:te.sibling=pe,te=pe,ae=ke}if(ie===C.length)return r(k,ae),Ce&&Cr(k,ie),ee;if(ae===null){for(;ie<C.length;ie++)ae=O(k,C[ie],H),ae!==null&&(b=o(ae,b,ie),te===null?ee=ae:te.sibling=ae,te=ae);return Ce&&Cr(k,ie),ee}for(ae=n(k,ae);ie<C.length;ie++)ke=y(ae,k,ie,C[ie],H),ke!==null&&(e&&ke.alternate!==null&&ae.delete(ke.key===null?ie:ke.key),b=o(ke,b,ie),te===null?ee=ke:te.sibling=ke,te=ke);return e&&ae.forEach(function(Ze){return t(k,Ze)}),Ce&&Cr(k,ie),ee}function Y(k,b,C,H){var ee=vn(C);if(typeof ee!="function")throw Error($(150));if(C=ee.call(C),C==null)throw Error($(151));for(var te=ee=null,ae=b,ie=b=0,ke=null,pe=C.next();ae!==null&&!pe.done;ie++,pe=C.next()){ae.index>ie?(ke=ae,ae=null):ke=ae.sibling;var Ze=L(k,ae,pe.value,H);if(Ze===null){ae===null&&(ae=ke);break}e&&ae&&Ze.alternate===null&&t(k,ae),b=o(Ze,b,ie),te===null?ee=Ze:te.sibling=Ze,te=Ze,ae=ke}if(pe.done)return r(k,ae),Ce&&Cr(k,ie),ee;if(ae===null){for(;!pe.done;ie++,pe=C.next())pe=O(k,pe.value,H),pe!==null&&(b=o(pe,b,ie),te===null?ee=pe:te.sibling=pe,te=pe);return Ce&&Cr(k,ie),ee}for(ae=n(k,ae);!pe.done;ie++,pe=C.next())pe=y(ae,k,ie,pe.value,H),pe!==null&&(e&&pe.alternate!==null&&ae.delete(pe.key===null?ie:pe.key),b=o(pe,b,ie),te===null?ee=pe:te.sibling=pe,te=pe);return e&&ae.forEach(function(Xt){return t(k,Xt)}),Ce&&Cr(k,ie),ee}function ye(k,b,C,H){if(typeof C=="object"&&C!==null&&C.type===$r&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case xa:e:{for(var ee=C.key,te=b;te!==null;){if(te.key===ee){if(ee=C.type,ee===$r){if(te.tag===7){r(k,te.sibling),b=i(te,C.props.children),b.return=k,k=b;break e}}else if(te.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===tr&&Bs(ee)===te.type){r(k,te.sibling),b=i(te,C.props),b.ref=Cn(k,te,C),b.return=k,k=b;break e}r(k,te);break}else t(k,te);te=te.sibling}C.type===$r?(b=Pr(C.props.children,k.mode,H,C.key),b.return=k,k=b):(H=$a(C.type,C.key,C.props,null,k.mode,H),H.ref=Cn(k,b,C),H.return=k,k=H)}return l(k);case Ur:e:{for(te=C.key;b!==null;){if(b.key===te)if(b.tag===4&&b.stateNode.containerInfo===C.containerInfo&&b.stateNode.implementation===C.implementation){r(k,b.sibling),b=i(b,C.children||[]),b.return=k,k=b;break e}else{r(k,b);break}else t(k,b);b=b.sibling}b=oo(C,k.mode,H),b.return=k,k=b}return l(k);case tr:return te=C._init,ye(k,b,te(C._payload),H)}if(In(C))return B(k,b,C,H);if(vn(C))return Y(k,b,C,H);Ta(k,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,b!==null&&b.tag===6?(r(k,b.sibling),b=i(b,C),b.return=k,k=b):(r(k,b),b=io(C,k.mode,H),b.return=k,k=b),l(k)):r(k,b)}return ye}var un=Tc(!0),Ec=Tc(!1),oi=br(null),li=null,Xr=null,zl=null;function Tl(){zl=Xr=li=null}function El(e){var t=oi.current;je(oi),e._currentValue=t}function Wo(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function on(e,t){li=e,zl=Xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(rt=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(zl!==e)if(e={context:e,memoizedValue:t,next:null},Xr===null){if(li===null)throw Error($(308));Xr=e,li.dependencies={lanes:0,firstContext:e}}else Xr=Xr.next=e;return t}var Tr=null;function Il(e){Tr===null?Tr=[e]:Tr.push(e)}function Ic(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Il(t)):(r.next=i.next,i.next=r),t.interleaved=r,Kt(e,n)}function Kt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var rr=!1;function Pl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ur(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,me&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Kt(e,r)}return i=n.interleaved,i===null?(t.next=t,Il(n)):(t.next=i.next,i.next=t),n.interleaved=t,Kt(e,r)}function Oa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ml(e,r)}}function Ws(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=l:o=o.next=l,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function si(e,t,r,n){var i=e.updateQueue;rr=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var u=f,w=u.next;u.next=null,l===null?o=w:l.next=w,l=u;var D=e.alternate;D!==null&&(D=D.updateQueue,f=D.lastBaseUpdate,f!==l&&(f===null?D.firstBaseUpdate=w:f.next=w,D.lastBaseUpdate=u))}if(o!==null){var O=i.baseState;l=0,D=w=u=null,f=o;do{var L=f.lane,y=f.eventTime;if((n&L)===L){D!==null&&(D=D.next={eventTime:y,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var B=e,Y=f;switch(L=t,y=r,Y.tag){case 1:if(B=Y.payload,typeof B=="function"){O=B.call(y,O,L);break e}O=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=Y.payload,L=typeof B=="function"?B.call(y,O,L):B,L==null)break e;O=Te({},O,L);break e;case 2:rr=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,L=i.effects,L===null?i.effects=[f]:L.push(f))}else y={eventTime:y,lane:L,tag:f.tag,payload:f.payload,callback:f.callback,next:null},D===null?(w=D=y,u=O):D=D.next=y,l|=L;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;L=f,f=L.next,L.next=null,i.lastBaseUpdate=L,i.shared.pending=null}}while(!0);if(D===null&&(u=O),i.baseState=u,i.firstBaseUpdate=w,i.lastBaseUpdate=D,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);_r|=l,e.lanes=l,e.memoizedState=O}}function Hs(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error($(191,i));i.call(n)}}}var ca={},At=br(ca),ea=br(ca),ta=br(ca);function Er(e){if(e===ca)throw Error($(174));return e}function Ll(e,t){switch(we(ta,t),we(ea,e),we(At,ca),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wo(t,e)}je(At),we(At,t)}function pn(){je(At),je(ea),je(ta)}function Lc(e){Er(ta.current);var t=Er(At.current),r=wo(t,e.type);t!==r&&(we(ea,e),we(At,r))}function Rl(e){ea.current===e&&(je(At),je(ea))}var Ne=br(0);function di(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zi=[];function Fl(){for(var e=0;e<Zi.length;e++)Zi[e]._workInProgressVersionPrimary=null;Zi.length=0}var Aa=qt.ReactCurrentDispatcher,eo=qt.ReactCurrentBatchConfig,Fr=0,ze=null,Re=null,_e=null,ci=!1,On=!1,ra=0,Df=0;function Ue(){throw Error($(321))}function _l(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!It(e[r],t[r]))return!1;return!0}function Ml(e,t,r,n,i,o){if(Fr=o,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Aa.current=e===null||e.memoizedState===null?Wf:Hf,e=r(n,i),On){o=0;do{if(On=!1,ra=0,25<=o)throw Error($(301));o+=1,_e=Re=null,t.updateQueue=null,Aa.current=Uf,e=r(n,i)}while(On)}if(Aa.current=ui,t=Re!==null&&Re.next!==null,Fr=0,_e=Re=ze=null,ci=!1,t)throw Error($(300));return e}function Dl(){var e=ra!==0;return ra=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ze.memoizedState=_e=e:_e=_e.next=e,_e}function wt(){if(Re===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=_e===null?ze.memoizedState:_e.next;if(t!==null)_e=t,Re=e;else{if(e===null)throw Error($(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},_e===null?ze.memoizedState=_e=e:_e=_e.next=e}return _e}function na(e,t){return typeof t=="function"?t(e):t}function to(e){var t=wt(),r=t.queue;if(r===null)throw Error($(311));r.lastRenderedReducer=e;var n=Re,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var f=l=null,u=null,w=o;do{var D=w.lane;if((Fr&D)===D)u!==null&&(u=u.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),n=w.hasEagerState?w.eagerState:e(n,w.action);else{var O={lane:D,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};u===null?(f=u=O,l=n):u=u.next=O,ze.lanes|=D,_r|=D}w=w.next}while(w!==null&&w!==o);u===null?l=n:u.next=f,It(n,t.memoizedState)||(rt=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,ze.lanes|=o,_r|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ro(e){var t=wt(),r=t.queue;if(r===null)throw Error($(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);It(o,t.memoizedState)||(rt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Rc(){}function Fc(e,t){var r=ze,n=wt(),i=t(),o=!It(n.memoizedState,i);if(o&&(n.memoizedState=i,rt=!0),n=n.queue,Ol(Dc.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||_e!==null&&_e.memoizedState.tag&1){if(r.flags|=2048,aa(9,Mc.bind(null,r,n,i,t),void 0,null),Me===null)throw Error($(349));Fr&30||_c(r,t,i)}return i}function _c(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Mc(e,t,r,n){t.value=r,t.getSnapshot=n,Oc(t)&&Ac(e)}function Dc(e,t,r){return r(function(){Oc(t)&&Ac(e)})}function Oc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!It(e,r)}catch{return!0}}function Ac(e){var t=Kt(e,1);t!==null&&Et(t,e,1,-1)}function Us(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},t.queue=e,e=e.dispatch=Bf.bind(null,ze,e),[t.memoizedState,e]}function aa(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Bc(){return wt().memoizedState}function Ba(e,t,r,n){var i=Mt();ze.flags|=e,i.memoizedState=aa(1|t,r,void 0,n===void 0?null:n)}function ji(e,t,r,n){var i=wt();n=n===void 0?null:n;var o=void 0;if(Re!==null){var l=Re.memoizedState;if(o=l.destroy,n!==null&&_l(n,l.deps)){i.memoizedState=aa(t,r,o,n);return}}ze.flags|=e,i.memoizedState=aa(1|t,r,o,n)}function $s(e,t){return Ba(8390656,8,e,t)}function Ol(e,t){return ji(2048,8,e,t)}function Wc(e,t){return ji(4,2,e,t)}function Hc(e,t){return ji(4,4,e,t)}function Uc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $c(e,t,r){return r=r!=null?r.concat([e]):null,ji(4,4,Uc.bind(null,t,e),r)}function Al(){}function Vc(e,t){var r=wt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&_l(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Yc(e,t){var r=wt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&_l(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Gc(e,t,r){return Fr&21?(It(r,t)||(r=Xd(),ze.lanes|=r,_r|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=r)}function Of(e,t){var r=xe;xe=r!==0&&4>r?r:4,e(!0);var n=eo.transition;eo.transition={};try{e(!1),t()}finally{xe=r,eo.transition=n}}function Qc(){return wt().memoizedState}function Af(e,t,r){var n=fr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Kc(e))Jc(t,r);else if(r=Ic(e,t,r,n),r!==null){var i=Je();Et(r,e,n,i),qc(r,t,n)}}function Bf(e,t,r){var n=fr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Kc(e))Jc(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,f=o(l,r);if(i.hasEagerState=!0,i.eagerState=f,It(f,l)){var u=t.interleaved;u===null?(i.next=i,Il(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}r=Ic(e,t,i,n),r!==null&&(i=Je(),Et(r,e,n,i),qc(r,t,n))}}function Kc(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function Jc(e,t){On=ci=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function qc(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ml(e,r)}}var ui={readContext:vt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},Wf={readContext:vt,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:$s,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ba(4194308,4,Uc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ba(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ba(4,2,e,t)},useMemo:function(e,t){var r=Mt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Mt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Af.bind(null,ze,e),[n.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:Us,useDebugValue:Al,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=Us(!1),t=e[0];return e=Of.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ze,i=Mt();if(Ce){if(r===void 0)throw Error($(407));r=r()}else{if(r=t(),Me===null)throw Error($(349));Fr&30||_c(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,$s(Dc.bind(null,n,o,e),[e]),n.flags|=2048,aa(9,Mc.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=Mt(),t=Me.identifierPrefix;if(Ce){var r=Vt,n=$t;r=(n&~(1<<32-Tt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=ra++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Df++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hf={readContext:vt,useCallback:Vc,useContext:vt,useEffect:Ol,useImperativeHandle:$c,useInsertionEffect:Wc,useLayoutEffect:Hc,useMemo:Yc,useReducer:to,useRef:Bc,useState:function(){return to(na)},useDebugValue:Al,useDeferredValue:function(e){var t=wt();return Gc(t,Re.memoizedState,e)},useTransition:function(){var e=to(na)[0],t=wt().memoizedState;return[e,t]},useMutableSource:Rc,useSyncExternalStore:Fc,useId:Qc,unstable_isNewReconciler:!1},Uf={readContext:vt,useCallback:Vc,useContext:vt,useEffect:Ol,useImperativeHandle:$c,useInsertionEffect:Wc,useLayoutEffect:Hc,useMemo:Yc,useReducer:ro,useRef:Bc,useState:function(){return ro(na)},useDebugValue:Al,useDeferredValue:function(e){var t=wt();return Re===null?t.memoizedState=e:Gc(t,Re.memoizedState,e)},useTransition:function(){var e=ro(na)[0],t=wt().memoizedState;return[e,t]},useMutableSource:Rc,useSyncExternalStore:Fc,useId:Qc,unstable_isNewReconciler:!1};function Ct(e,t){if(e&&e.defaultProps){t=Te({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ho(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Te({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ci={isMounted:function(e){return(e=e._reactInternals)?Or(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Je(),i=fr(e),o=Yt(n,i);o.payload=t,r!=null&&(o.callback=r),t=ur(e,o,i),t!==null&&(Et(t,e,i,n),Oa(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Je(),i=fr(e),o=Yt(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=ur(e,o,i),t!==null&&(Et(t,e,i,n),Oa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Je(),n=fr(e),i=Yt(r,n);i.tag=2,t!=null&&(i.callback=t),t=ur(e,i,n),t!==null&&(Et(t,e,n,r),Oa(t,e,n))}};function Vs(e,t,r,n,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,l):t.prototype&&t.prototype.isPureReactComponent?!Jn(r,n)||!Jn(i,o):!0}function Xc(e,t,r){var n=!1,i=mr,o=t.contextType;return typeof o=="object"&&o!==null?o=vt(o):(i=at(t)?Lr:Ye.current,n=t.contextTypes,o=(n=n!=null)?dn(e,i):mr),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ci,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ys(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ci.enqueueReplaceState(t,t.state,null)}function Uo(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Pl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=vt(o):(o=at(t)?Lr:Ye.current,i.context=dn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ho(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ci.enqueueReplaceState(i,i.state,null),si(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var r="",n=t;do r+=mp(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function no(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function $o(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var $f=typeof WeakMap=="function"?WeakMap:Map;function Zc(e,t,r){r=Yt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){fi||(fi=!0,el=n),$o(e,t)},r}function eu(e,t,r){r=Yt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){$o(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){$o(e,t),typeof n!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function Gs(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new $f;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=ag.bind(null,e,t,r),t.then(e,e))}function Qs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ks(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Yt(-1,1),t.tag=2,ur(r,t,1))),r.lanes|=1),e)}var Vf=qt.ReactCurrentOwner,rt=!1;function Ke(e,t,r,n){t.child=e===null?Ec(t,null,r,n):un(t,e.child,r,n)}function Js(e,t,r,n,i){r=r.render;var o=t.ref;return on(t,i),n=Ml(e,t,r,n,o,i),r=Dl(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jt(e,t,i)):(Ce&&r&&jl(t),t.flags|=1,Ke(e,t,n,i),t.child)}function qs(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!Gl(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,tu(e,t,o,n,i)):(e=$a(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(r=r.compare,r=r!==null?r:Jn,r(l,n)&&e.ref===t.ref)return Jt(e,t,i)}return t.flags|=1,e=gr(o,n),e.ref=t.ref,e.return=t,t.child=e}function tu(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(Jn(o,n)&&e.ref===t.ref)if(rt=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(rt=!0);else return t.lanes=e.lanes,Jt(e,t,i)}return Vo(e,t,r,n,i)}function ru(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(en,st),st|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,we(en,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,we(en,st),st|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,we(en,st),st|=n;return Ke(e,t,i,r),t.child}function nu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Vo(e,t,r,n,i){var o=at(r)?Lr:Ye.current;return o=dn(t,o),on(t,i),r=Ml(e,t,r,n,o,i),n=Dl(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jt(e,t,i)):(Ce&&n&&jl(t),t.flags|=1,Ke(e,t,r,i),t.child)}function Xs(e,t,r,n,i){if(at(r)){var o=!0;ni(t)}else o=!1;if(on(t,i),t.stateNode===null)Wa(e,t),Xc(t,r,n),Uo(t,r,n,i),n=!0;else if(e===null){var l=t.stateNode,f=t.memoizedProps;l.props=f;var u=l.context,w=r.contextType;typeof w=="object"&&w!==null?w=vt(w):(w=at(r)?Lr:Ye.current,w=dn(t,w));var D=r.getDerivedStateFromProps,O=typeof D=="function"||typeof l.getSnapshotBeforeUpdate=="function";O||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(f!==n||u!==w)&&Ys(t,l,n,w),rr=!1;var L=t.memoizedState;l.state=L,si(t,n,l,i),u=t.memoizedState,f!==n||L!==u||nt.current||rr?(typeof D=="function"&&(Ho(t,r,D,n),u=t.memoizedState),(f=rr||Vs(t,r,f,n,L,u,w))?(O||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),l.props=n,l.state=u,l.context=w,n=f):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,Pc(e,t),f=t.memoizedProps,w=t.type===t.elementType?f:Ct(t.type,f),l.props=w,O=t.pendingProps,L=l.context,u=r.contextType,typeof u=="object"&&u!==null?u=vt(u):(u=at(r)?Lr:Ye.current,u=dn(t,u));var y=r.getDerivedStateFromProps;(D=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(f!==O||L!==u)&&Ys(t,l,n,u),rr=!1,L=t.memoizedState,l.state=L,si(t,n,l,i);var B=t.memoizedState;f!==O||L!==B||nt.current||rr?(typeof y=="function"&&(Ho(t,r,y,n),B=t.memoizedState),(w=rr||Vs(t,r,w,n,L,B,u)||!1)?(D||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,B,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,B,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=B),l.props=n,l.state=B,l.context=u,n=w):(typeof l.componentDidUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),n=!1)}return Yo(e,t,r,n,o,i)}function Yo(e,t,r,n,i,o){nu(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return i&&Ds(t,r,!1),Jt(e,t,o);n=t.stateNode,Vf.current=t;var f=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=un(t,e.child,null,o),t.child=un(t,null,f,o)):Ke(e,t,f,o),t.memoizedState=n.state,i&&Ds(t,r,!0),t.child}function au(e){var t=e.stateNode;t.pendingContext?Ms(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ms(e,t.context,!1),Ll(e,t.containerInfo)}function Zs(e,t,r,n,i){return cn(),Nl(i),t.flags|=256,Ke(e,t,r,n),t.child}var Go={dehydrated:null,treeContext:null,retryLane:0};function Qo(e){return{baseLanes:e,cachePool:null,transitions:null}}function iu(e,t,r){var n=t.pendingProps,i=Ne.current,o=!1,l=(t.flags&128)!==0,f;if((f=l)||(f=e!==null&&e.memoizedState===null?!1:(i&2)!==0),f?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),we(Ne,i&1),e===null)return Bo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,o?(n=t.mode,o=t.child,l={mode:"hidden",children:l},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ti(l,n,0,null),e=Pr(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Qo(r),t.memoizedState=Go,e):Bl(t,l));if(i=e.memoizedState,i!==null&&(f=i.dehydrated,f!==null))return Yf(e,t,l,n,f,i,r);if(o){o=n.fallback,l=t.mode,i=e.child,f=i.sibling;var u={mode:"hidden",children:n.children};return!(l&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=gr(i,u),n.subtreeFlags=i.subtreeFlags&14680064),f!==null?o=gr(f,o):(o=Pr(o,l,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,l=e.child.memoizedState,l=l===null?Qo(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~r,t.memoizedState=Go,n}return o=e.child,e=o.sibling,n=gr(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Bl(e,t){return t=Ti({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ea(e,t,r,n){return n!==null&&Nl(n),un(t,e.child,null,r),e=Bl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yf(e,t,r,n,i,o,l){if(r)return t.flags&256?(t.flags&=-257,n=no(Error($(422))),Ea(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=Ti({mode:"visible",children:n.children},i,0,null),o=Pr(o,i,l,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&un(t,e.child,null,l),t.child.memoizedState=Qo(l),t.memoizedState=Go,o);if(!(t.mode&1))return Ea(e,t,l,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var f=n.dgst;return n=f,o=Error($(419)),n=no(o,n,void 0),Ea(e,t,l,n)}if(f=(l&e.childLanes)!==0,rt||f){if(n=Me,n!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Kt(e,i),Et(n,e,i,-1))}return Yl(),n=no(Error($(421))),Ea(e,t,l,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ig.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,dt=cr(i.nextSibling),ct=t,Ce=!0,zt=null,e!==null&&(mt[xt++]=$t,mt[xt++]=Vt,mt[xt++]=Rr,$t=e.id,Vt=e.overflow,Rr=t),t=Bl(t,n.children),t.flags|=4096,t)}function ed(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Wo(e.return,t,r)}function ao(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function ou(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(Ke(e,t,n.children,r),n=Ne.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ed(e,r,t);else if(e.tag===19)ed(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(we(Ne,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&di(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),ao(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&di(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}ao(t,!0,r,null,o);break;case"together":ao(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),_r|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,r=gr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=gr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Gf(e,t,r){switch(t.tag){case 3:au(t),cn();break;case 5:Lc(t);break;case 1:at(t.type)&&ni(t);break;case 4:Ll(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;we(oi,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(we(Ne,Ne.current&1),t.flags|=128,null):r&t.child.childLanes?iu(e,t,r):(we(Ne,Ne.current&1),e=Jt(e,t,r),e!==null?e.sibling:null);we(Ne,Ne.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return ou(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Ne,Ne.current),n)break;return null;case 22:case 23:return t.lanes=0,ru(e,t,r)}return Jt(e,t,r)}var lu,Ko,su,du;lu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ko=function(){};su=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Er(At.current);var o=null;switch(r){case"input":i=xo(e,i),n=xo(e,n),o=[];break;case"select":i=Te({},i,{value:void 0}),n=Te({},n,{value:void 0}),o=[];break;case"textarea":i=vo(e,i),n=vo(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ti)}ko(r,n);var l;r=null;for(w in i)if(!n.hasOwnProperty(w)&&i.hasOwnProperty(w)&&i[w]!=null)if(w==="style"){var f=i[w];for(l in f)f.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(Un.hasOwnProperty(w)?o||(o=[]):(o=o||[]).push(w,null));for(w in n){var u=n[w];if(f=i!=null?i[w]:void 0,n.hasOwnProperty(w)&&u!==f&&(u!=null||f!=null))if(w==="style")if(f){for(l in f)!f.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in u)u.hasOwnProperty(l)&&f[l]!==u[l]&&(r||(r={}),r[l]=u[l])}else r||(o||(o=[]),o.push(w,r)),r=u;else w==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,f=f?f.__html:void 0,u!=null&&f!==u&&(o=o||[]).push(w,u)):w==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(w,""+u):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(Un.hasOwnProperty(w)?(u!=null&&w==="onScroll"&&Se("scroll",e),o||f===u||(o=[])):(o=o||[]).push(w,u))}r&&(o=o||[]).push("style",r);var w=o;(t.updateQueue=w)&&(t.flags|=4)}};du=function(e,t,r,n){r!==n&&(t.flags|=4)};function Nn(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Qf(e,t,r){var n=t.pendingProps;switch(Cl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return at(t.type)&&ri(),$e(t),null;case 3:return n=t.stateNode,pn(),je(nt),je(Ye),Fl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(za(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zt!==null&&(nl(zt),zt=null))),Ko(e,t),$e(t),null;case 5:Rl(t);var i=Er(ta.current);if(r=t.type,e!==null&&t.stateNode!=null)su(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error($(166));return $e(t),null}if(e=Er(At.current),za(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[Dt]=t,n[Zn]=o,e=(t.mode&1)!==0,r){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(i=0;i<Ln.length;i++)Se(Ln[i],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":ds(n,o),Se("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Se("invalid",n);break;case"textarea":us(n,o),Se("invalid",n)}ko(r,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var f=o[l];l==="children"?typeof f=="string"?n.textContent!==f&&(o.suppressHydrationWarning!==!0&&Na(n.textContent,f,e),i=["children",f]):typeof f=="number"&&n.textContent!==""+f&&(o.suppressHydrationWarning!==!0&&Na(n.textContent,f,e),i=["children",""+f]):Un.hasOwnProperty(l)&&f!=null&&l==="onScroll"&&Se("scroll",n)}switch(r){case"input":ba(n),cs(n,o,!0);break;case"textarea":ba(n),ps(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=ti)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dd(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),r==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[Dt]=t,e[Zn]=n,lu(e,t,!1,!1),t.stateNode=e;e:{switch(l=So(r,n),r){case"dialog":Se("cancel",e),Se("close",e),i=n;break;case"iframe":case"object":case"embed":Se("load",e),i=n;break;case"video":case"audio":for(i=0;i<Ln.length;i++)Se(Ln[i],e);i=n;break;case"source":Se("error",e),i=n;break;case"img":case"image":case"link":Se("error",e),Se("load",e),i=n;break;case"details":Se("toggle",e),i=n;break;case"input":ds(e,n),i=xo(e,n),Se("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=Te({},n,{value:void 0}),Se("invalid",e);break;case"textarea":us(e,n),i=vo(e,n),Se("invalid",e);break;default:i=n}ko(r,i),f=i;for(o in f)if(f.hasOwnProperty(o)){var u=f[o];o==="style"?Bd(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Od(e,u)):o==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&$n(e,u):typeof u=="number"&&$n(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Un.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Se("scroll",e):u!=null&&cl(e,o,u,l))}switch(r){case"input":ba(e),cs(e,n,!1);break;case"textarea":ba(e),ps(e);break;case"option":n.value!=null&&e.setAttribute("value",""+hr(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?tn(e,!!n.multiple,o,!1):n.defaultValue!=null&&tn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ti)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)du(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error($(166));if(r=Er(ta.current),Er(At.current),za(t)){if(n=t.stateNode,r=t.memoizedProps,n[Dt]=t,(o=n.nodeValue!==r)&&(e=ct,e!==null))switch(e.tag){case 3:Na(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Na(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Dt]=t,t.stateNode=n}return $e(t),null;case 13:if(je(Ne),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&dt!==null&&t.mode&1&&!(t.flags&128))zc(),cn(),t.flags|=98560,o=!1;else if(o=za(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error($(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error($(317));o[Dt]=t}else cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$e(t),o=!1}else zt!==null&&(nl(zt),zt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Ne.current&1?Fe===0&&(Fe=3):Yl())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return pn(),Ko(e,t),e===null&&qn(t.stateNode.containerInfo),$e(t),null;case 10:return El(t.type._context),$e(t),null;case 17:return at(t.type)&&ri(),$e(t),null;case 19:if(je(Ne),o=t.memoizedState,o===null)return $e(t),null;if(n=(t.flags&128)!==0,l=o.rendering,l===null)if(n)Nn(o,!1);else{if(Fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=di(e),l!==null){for(t.flags|=128,Nn(o,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return we(Ne,Ne.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ie()>gn&&(t.flags|=128,n=!0,Nn(o,!1),t.lanes=4194304)}else{if(!n)if(e=di(l),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Nn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Ce)return $e(t),null}else 2*Ie()-o.renderingStartTime>gn&&r!==1073741824&&(t.flags|=128,n=!0,Nn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(r=o.last,r!==null?r.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ie(),t.sibling=null,r=Ne.current,we(Ne,n?r&1|2:r&1),t):($e(t),null);case 22:case 23:return Vl(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?st&1073741824&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function Kf(e,t){switch(Cl(t),t.tag){case 1:return at(t.type)&&ri(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),je(nt),je(Ye),Fl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rl(t),null;case 13:if(je(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(Ne),null;case 4:return pn(),null;case 10:return El(t.type._context),null;case 22:case 23:return Vl(),null;case 24:return null;default:return null}}var Ia=!1,Ve=!1,Jf=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Zr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ee(e,t,n)}else r.current=null}function Jo(e,t,r){try{r()}catch(n){Ee(e,t,n)}}var td=!1;function qf(e,t){if(Ro=Xa,e=gc(),Sl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var l=0,f=-1,u=-1,w=0,D=0,O=e,L=null;t:for(;;){for(var y;O!==r||i!==0&&O.nodeType!==3||(f=l+i),O!==o||n!==0&&O.nodeType!==3||(u=l+n),O.nodeType===3&&(l+=O.nodeValue.length),(y=O.firstChild)!==null;)L=O,O=y;for(;;){if(O===e)break t;if(L===r&&++w===i&&(f=l),L===o&&++D===n&&(u=l),(y=O.nextSibling)!==null)break;O=L,L=O.parentNode}O=y}r=f===-1||u===-1?null:{start:f,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Fo={focusedElem:e,selectionRange:r},Xa=!1,ne=t;ne!==null;)if(t=ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ne=e;else for(;ne!==null;){t=ne;try{var B=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var Y=B.memoizedProps,ye=B.memoizedState,k=t.stateNode,b=k.getSnapshotBeforeUpdate(t.elementType===t.type?Y:Ct(t.type,Y),ye);k.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(H){Ee(t,t.return,H)}if(e=t.sibling,e!==null){e.return=t.return,ne=e;break}ne=t.return}return B=td,td=!1,B}function An(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Jo(t,r,o)}i=i.next}while(i!==n)}}function Ni(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function qo(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function cu(e){var t=e.alternate;t!==null&&(e.alternate=null,cu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dt],delete t[Zn],delete t[Do],delete t[Rf],delete t[Ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uu(e){return e.tag===5||e.tag===3||e.tag===4}function rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xo(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ti));else if(n!==4&&(e=e.child,e!==null))for(Xo(e,t,r),e=e.sibling;e!==null;)Xo(e,t,r),e=e.sibling}function Zo(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Zo(e,t,r),e=e.sibling;e!==null;)Zo(e,t,r),e=e.sibling}var Oe=null,Nt=!1;function er(e,t,r){for(r=r.child;r!==null;)pu(e,t,r),r=r.sibling}function pu(e,t,r){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(bi,r)}catch{}switch(r.tag){case 5:Ve||Zr(r,t);case 6:var n=Oe,i=Nt;Oe=null,er(e,t,r),Oe=n,Nt=i,Oe!==null&&(Nt?(e=Oe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Oe.removeChild(r.stateNode));break;case 18:Oe!==null&&(Nt?(e=Oe,r=r.stateNode,e.nodeType===8?qi(e.parentNode,r):e.nodeType===1&&qi(e,r),Qn(e)):qi(Oe,r.stateNode));break;case 4:n=Oe,i=Nt,Oe=r.stateNode.containerInfo,Nt=!0,er(e,t,r),Oe=n,Nt=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Jo(r,t,l),i=i.next}while(i!==n)}er(e,t,r);break;case 1:if(!Ve&&(Zr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(f){Ee(r,t,f)}er(e,t,r);break;case 21:er(e,t,r);break;case 22:r.mode&1?(Ve=(n=Ve)||r.memoizedState!==null,er(e,t,r),Ve=n):er(e,t,r);break;default:er(e,t,r)}}function nd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Jf),t.forEach(function(n){var i=og.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function jt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,l=t,f=l;e:for(;f!==null;){switch(f.tag){case 5:Oe=f.stateNode,Nt=!1;break e;case 3:Oe=f.stateNode.containerInfo,Nt=!0;break e;case 4:Oe=f.stateNode.containerInfo,Nt=!0;break e}f=f.return}if(Oe===null)throw Error($(160));pu(o,l,i),Oe=null,Nt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(w){Ee(i,t,w)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fu(t,e),t=t.sibling}function fu(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(t,e),Rt(e),n&4){try{An(3,e,e.return),Ni(3,e)}catch(Y){Ee(e,e.return,Y)}try{An(5,e,e.return)}catch(Y){Ee(e,e.return,Y)}}break;case 1:jt(t,e),Rt(e),n&512&&r!==null&&Zr(r,r.return);break;case 5:if(jt(t,e),Rt(e),n&512&&r!==null&&Zr(r,r.return),e.flags&32){var i=e.stateNode;try{$n(i,"")}catch(Y){Ee(e,e.return,Y)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=r!==null?r.memoizedProps:o,f=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{f==="input"&&o.type==="radio"&&o.name!=null&&_d(i,o),So(f,l);var w=So(f,o);for(l=0;l<u.length;l+=2){var D=u[l],O=u[l+1];D==="style"?Bd(i,O):D==="dangerouslySetInnerHTML"?Od(i,O):D==="children"?$n(i,O):cl(i,D,O,w)}switch(f){case"input":bo(i,o);break;case"textarea":Md(i,o);break;case"select":var L=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?tn(i,!!o.multiple,y,!1):L!==!!o.multiple&&(o.defaultValue!=null?tn(i,!!o.multiple,o.defaultValue,!0):tn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zn]=o}catch(Y){Ee(e,e.return,Y)}}break;case 6:if(jt(t,e),Rt(e),n&4){if(e.stateNode===null)throw Error($(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(Y){Ee(e,e.return,Y)}}break;case 3:if(jt(t,e),Rt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(Y){Ee(e,e.return,Y)}break;case 4:jt(t,e),Rt(e);break;case 13:jt(t,e),Rt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ul=Ie())),n&4&&nd(e);break;case 22:if(D=r!==null&&r.memoizedState!==null,e.mode&1?(Ve=(w=Ve)||D,jt(t,e),Ve=w):jt(t,e),Rt(e),n&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!D&&e.mode&1)for(ne=e,D=e.child;D!==null;){for(O=ne=D;ne!==null;){switch(L=ne,y=L.child,L.tag){case 0:case 11:case 14:case 15:An(4,L,L.return);break;case 1:Zr(L,L.return);var B=L.stateNode;if(typeof B.componentWillUnmount=="function"){n=L,r=L.return;try{t=n,B.props=t.memoizedProps,B.state=t.memoizedState,B.componentWillUnmount()}catch(Y){Ee(n,r,Y)}}break;case 5:Zr(L,L.return);break;case 22:if(L.memoizedState!==null){id(O);continue}}y!==null?(y.return=L,ne=y):id(O)}D=D.sibling}e:for(D=null,O=e;;){if(O.tag===5){if(D===null){D=O;try{i=O.stateNode,w?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(f=O.stateNode,u=O.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,f.style.display=Ad("display",l))}catch(Y){Ee(e,e.return,Y)}}}else if(O.tag===6){if(D===null)try{O.stateNode.nodeValue=w?"":O.memoizedProps}catch(Y){Ee(e,e.return,Y)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===e)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===e)break e;for(;O.sibling===null;){if(O.return===null||O.return===e)break e;D===O&&(D=null),O=O.return}D===O&&(D=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:jt(t,e),Rt(e),n&4&&nd(e);break;case 21:break;default:jt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(uu(r)){var n=r;break e}r=r.return}throw Error($(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&($n(i,""),n.flags&=-33);var o=rd(e);Zo(e,o,i);break;case 3:case 4:var l=n.stateNode.containerInfo,f=rd(e);Xo(e,f,l);break;default:throw Error($(161))}}catch(u){Ee(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xf(e,t,r){ne=e,gu(e)}function gu(e,t,r){for(var n=(e.mode&1)!==0;ne!==null;){var i=ne,o=i.child;if(i.tag===22&&n){var l=i.memoizedState!==null||Ia;if(!l){var f=i.alternate,u=f!==null&&f.memoizedState!==null||Ve;f=Ia;var w=Ve;if(Ia=l,(Ve=u)&&!w)for(ne=i;ne!==null;)l=ne,u=l.child,l.tag===22&&l.memoizedState!==null?od(i):u!==null?(u.return=l,ne=u):od(i);for(;o!==null;)ne=o,gu(o),o=o.sibling;ne=i,Ia=f,Ve=w}ad(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ne=o):ad(e)}}function ad(e){for(;ne!==null;){var t=ne;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ve||Ni(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ve)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Ct(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Hs(t,o,n);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Hs(t,l,r)}break;case 5:var f=t.stateNode;if(r===null&&t.flags&4){r=f;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var w=t.alternate;if(w!==null){var D=w.memoizedState;if(D!==null){var O=D.dehydrated;O!==null&&Qn(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Ve||t.flags&512&&qo(t)}catch(L){Ee(t,t.return,L)}}if(t===e){ne=null;break}if(r=t.sibling,r!==null){r.return=t.return,ne=r;break}ne=t.return}}function id(e){for(;ne!==null;){var t=ne;if(t===e){ne=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ne=r;break}ne=t.return}}function od(e){for(;ne!==null;){var t=ne;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ni(4,t)}catch(u){Ee(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(u){Ee(t,i,u)}}var o=t.return;try{qo(t)}catch(u){Ee(t,o,u)}break;case 5:var l=t.return;try{qo(t)}catch(u){Ee(t,l,u)}}}catch(u){Ee(t,t.return,u)}if(t===e){ne=null;break}var f=t.sibling;if(f!==null){f.return=t.return,ne=f;break}ne=t.return}}var Zf=Math.ceil,pi=qt.ReactCurrentDispatcher,Wl=qt.ReactCurrentOwner,yt=qt.ReactCurrentBatchConfig,me=0,Me=null,Le=null,Ae=0,st=0,en=br(0),Fe=0,ia=null,_r=0,zi=0,Hl=0,Bn=null,tt=null,Ul=0,gn=1/0,Ht=null,fi=!1,el=null,pr=null,Pa=!1,or=null,gi=0,Wn=0,tl=null,Ha=-1,Ua=0;function Je(){return me&6?Ie():Ha!==-1?Ha:Ha=Ie()}function fr(e){return e.mode&1?me&2&&Ae!==0?Ae&-Ae:Mf.transition!==null?(Ua===0&&(Ua=Xd()),Ua):(e=xe,e!==0||(e=window.event,e=e===void 0?16:ic(e.type)),e):1}function Et(e,t,r,n){if(50<Wn)throw Wn=0,tl=null,Error($(185));la(e,r,n),(!(me&2)||e!==Me)&&(e===Me&&(!(me&2)&&(zi|=r),Fe===4&&ar(e,Ae)),it(e,n),r===1&&me===0&&!(t.mode&1)&&(gn=Ie()+500,Si&&yr()))}function it(e,t){var r=e.callbackNode;_p(e,t);var n=qa(e,e===Me?Ae:0);if(n===0)r!==null&&hs(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&hs(r),t===1)e.tag===0?_f(ld.bind(null,e)):jc(ld.bind(null,e)),Pf(function(){!(me&6)&&yr()}),r=null;else{switch(Zd(n)){case 1:r=hl;break;case 4:r=Jd;break;case 16:r=Ja;break;case 536870912:r=qd;break;default:r=Ja}r=ku(r,hu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function hu(e,t){if(Ha=-1,Ua=0,me&6)throw Error($(327));var r=e.callbackNode;if(ln()&&e.callbackNode!==r)return null;var n=qa(e,e===Me?Ae:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=hi(e,n);else{t=n;var i=me;me|=2;var o=xu();(Me!==e||Ae!==t)&&(Ht=null,gn=Ie()+500,Ir(e,t));do try{rg();break}catch(f){mu(e,f)}while(!0);Tl(),pi.current=o,me=i,Le!==null?t=0:(Me=null,Ae=0,t=Fe)}if(t!==0){if(t===2&&(i=To(e),i!==0&&(n=i,t=rl(e,i))),t===1)throw r=ia,Ir(e,0),ar(e,n),it(e,Ie()),r;if(t===6)ar(e,n);else{if(i=e.current.alternate,!(n&30)&&!eg(i)&&(t=hi(e,n),t===2&&(o=To(e),o!==0&&(n=o,t=rl(e,o))),t===1))throw r=ia,Ir(e,0),ar(e,n),it(e,Ie()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error($(345));case 2:Nr(e,tt,Ht);break;case 3:if(ar(e,n),(n&130023424)===n&&(t=Ul+500-Ie(),10<t)){if(qa(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Mo(Nr.bind(null,e,tt,Ht),t);break}Nr(e,tt,Ht);break;case 4:if(ar(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var l=31-Tt(n);o=1<<l,l=t[l],l>i&&(i=l),n&=~o}if(n=i,n=Ie()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Zf(n/1960))-n,10<n){e.timeoutHandle=Mo(Nr.bind(null,e,tt,Ht),n);break}Nr(e,tt,Ht);break;case 5:Nr(e,tt,Ht);break;default:throw Error($(329))}}}return it(e,Ie()),e.callbackNode===r?hu.bind(null,e):null}function rl(e,t){var r=Bn;return e.current.memoizedState.isDehydrated&&(Ir(e,t).flags|=256),e=hi(e,t),e!==2&&(t=tt,tt=r,t!==null&&nl(t)),e}function nl(e){tt===null?tt=e:tt.push.apply(tt,e)}function eg(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!It(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ar(e,t){for(t&=~Hl,t&=~zi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Tt(t),n=1<<r;e[r]=-1,t&=~n}}function ld(e){if(me&6)throw Error($(327));ln();var t=qa(e,0);if(!(t&1))return it(e,Ie()),null;var r=hi(e,t);if(e.tag!==0&&r===2){var n=To(e);n!==0&&(t=n,r=rl(e,n))}if(r===1)throw r=ia,Ir(e,0),ar(e,t),it(e,Ie()),r;if(r===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nr(e,tt,Ht),it(e,Ie()),null}function $l(e,t){var r=me;me|=1;try{return e(t)}finally{me=r,me===0&&(gn=Ie()+500,Si&&yr())}}function Mr(e){or!==null&&or.tag===0&&!(me&6)&&ln();var t=me;me|=1;var r=yt.transition,n=xe;try{if(yt.transition=null,xe=1,e)return e()}finally{xe=n,yt.transition=r,me=t,!(me&6)&&yr()}}function Vl(){st=en.current,je(en)}function Ir(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,If(r)),Le!==null)for(r=Le.return;r!==null;){var n=r;switch(Cl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ri();break;case 3:pn(),je(nt),je(Ye),Fl();break;case 5:Rl(n);break;case 4:pn();break;case 13:je(Ne);break;case 19:je(Ne);break;case 10:El(n.type._context);break;case 22:case 23:Vl()}r=r.return}if(Me=e,Le=e=gr(e.current,null),Ae=st=t,Fe=0,ia=null,Hl=zi=_r=0,tt=Bn=null,Tr!==null){for(t=0;t<Tr.length;t++)if(r=Tr[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var l=o.next;o.next=i,n.next=l}r.pending=n}Tr=null}return e}function mu(e,t){do{var r=Le;try{if(Tl(),Aa.current=ui,ci){for(var n=ze.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}ci=!1}if(Fr=0,_e=Re=ze=null,On=!1,ra=0,Wl.current=null,r===null||r.return===null){Fe=1,ia=t,Le=null;break}e:{var o=e,l=r.return,f=r,u=t;if(t=Ae,f.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var w=u,D=f,O=D.tag;if(!(D.mode&1)&&(O===0||O===11||O===15)){var L=D.alternate;L?(D.updateQueue=L.updateQueue,D.memoizedState=L.memoizedState,D.lanes=L.lanes):(D.updateQueue=null,D.memoizedState=null)}var y=Qs(l);if(y!==null){y.flags&=-257,Ks(y,l,f,o,t),y.mode&1&&Gs(o,w,t),t=y,u=w;var B=t.updateQueue;if(B===null){var Y=new Set;Y.add(u),t.updateQueue=Y}else B.add(u);break e}else{if(!(t&1)){Gs(o,w,t),Yl();break e}u=Error($(426))}}else if(Ce&&f.mode&1){var ye=Qs(l);if(ye!==null){!(ye.flags&65536)&&(ye.flags|=256),Ks(ye,l,f,o,t),Nl(fn(u,f));break e}}o=u=fn(u,f),Fe!==4&&(Fe=2),Bn===null?Bn=[o]:Bn.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var k=Zc(o,u,t);Ws(o,k);break e;case 1:f=u;var b=o.type,C=o.stateNode;if(!(o.flags&128)&&(typeof b.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(pr===null||!pr.has(C)))){o.flags|=65536,t&=-t,o.lanes|=t;var H=eu(o,f,t);Ws(o,H);break e}}o=o.return}while(o!==null)}yu(r)}catch(ee){t=ee,Le===r&&r!==null&&(Le=r=r.return);continue}break}while(!0)}function xu(){var e=pi.current;return pi.current=ui,e===null?ui:e}function Yl(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Me===null||!(_r&268435455)&&!(zi&268435455)||ar(Me,Ae)}function hi(e,t){var r=me;me|=2;var n=xu();(Me!==e||Ae!==t)&&(Ht=null,Ir(e,t));do try{tg();break}catch(i){mu(e,i)}while(!0);if(Tl(),me=r,pi.current=n,Le!==null)throw Error($(261));return Me=null,Ae=0,Fe}function tg(){for(;Le!==null;)bu(Le)}function rg(){for(;Le!==null&&!Np();)bu(Le)}function bu(e){var t=wu(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?yu(e):Le=t,Wl.current=null}function yu(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Kf(r,t),r!==null){r.flags&=32767,Le=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Le=null;return}}else if(r=Qf(r,t,st),r!==null){Le=r;return}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Fe===0&&(Fe=5)}function Nr(e,t,r){var n=xe,i=yt.transition;try{yt.transition=null,xe=1,ng(e,t,r,n)}finally{yt.transition=i,xe=n}return null}function ng(e,t,r,n){do ln();while(or!==null);if(me&6)throw Error($(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Mp(e,o),e===Me&&(Le=Me=null,Ae=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Pa||(Pa=!0,ku(Ja,function(){return ln(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=yt.transition,yt.transition=null;var l=xe;xe=1;var f=me;me|=4,Wl.current=null,qf(e,r),fu(r,e),Sf(Fo),Xa=!!Ro,Fo=Ro=null,e.current=r,Xf(r),zp(),me=f,xe=l,yt.transition=o}else e.current=r;if(Pa&&(Pa=!1,or=e,gi=i),o=e.pendingLanes,o===0&&(pr=null),Ip(r.stateNode),it(e,Ie()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(fi)throw fi=!1,e=el,el=null,e;return gi&1&&e.tag!==0&&ln(),o=e.pendingLanes,o&1?e===tl?Wn++:(Wn=0,tl=e):Wn=0,yr(),null}function ln(){if(or!==null){var e=Zd(gi),t=yt.transition,r=xe;try{if(yt.transition=null,xe=16>e?16:e,or===null)var n=!1;else{if(e=or,or=null,gi=0,me&6)throw Error($(331));var i=me;for(me|=4,ne=e.current;ne!==null;){var o=ne,l=o.child;if(ne.flags&16){var f=o.deletions;if(f!==null){for(var u=0;u<f.length;u++){var w=f[u];for(ne=w;ne!==null;){var D=ne;switch(D.tag){case 0:case 11:case 15:An(8,D,o)}var O=D.child;if(O!==null)O.return=D,ne=O;else for(;ne!==null;){D=ne;var L=D.sibling,y=D.return;if(cu(D),D===w){ne=null;break}if(L!==null){L.return=y,ne=L;break}ne=y}}}var B=o.alternate;if(B!==null){var Y=B.child;if(Y!==null){B.child=null;do{var ye=Y.sibling;Y.sibling=null,Y=ye}while(Y!==null)}}ne=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,ne=l;else e:for(;ne!==null;){if(o=ne,o.flags&2048)switch(o.tag){case 0:case 11:case 15:An(9,o,o.return)}var k=o.sibling;if(k!==null){k.return=o.return,ne=k;break e}ne=o.return}}var b=e.current;for(ne=b;ne!==null;){l=ne;var C=l.child;if(l.subtreeFlags&2064&&C!==null)C.return=l,ne=C;else e:for(l=b;ne!==null;){if(f=ne,f.flags&2048)try{switch(f.tag){case 0:case 11:case 15:Ni(9,f)}}catch(ee){Ee(f,f.return,ee)}if(f===l){ne=null;break e}var H=f.sibling;if(H!==null){H.return=f.return,ne=H;break e}ne=f.return}}if(me=i,yr(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(bi,e)}catch{}n=!0}return n}finally{xe=r,yt.transition=t}}return!1}function sd(e,t,r){t=fn(r,t),t=Zc(e,t,1),e=ur(e,t,1),t=Je(),e!==null&&(la(e,1,t),it(e,t))}function Ee(e,t,r){if(e.tag===3)sd(e,e,r);else for(;t!==null;){if(t.tag===3){sd(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(pr===null||!pr.has(n))){e=fn(r,e),e=eu(t,e,1),t=ur(t,e,1),e=Je(),t!==null&&(la(t,1,e),it(t,e));break}}t=t.return}}function ag(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&r,Me===e&&(Ae&r)===r&&(Fe===4||Fe===3&&(Ae&130023424)===Ae&&500>Ie()-Ul?Ir(e,0):Hl|=r),it(e,t)}function vu(e,t){t===0&&(e.mode&1?(t=wa,wa<<=1,!(wa&130023424)&&(wa=4194304)):t=1);var r=Je();e=Kt(e,t),e!==null&&(la(e,t,r),it(e,r))}function ig(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),vu(e,r)}function og(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error($(314))}n!==null&&n.delete(t),vu(e,r)}var wu;wu=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)rt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return rt=!1,Gf(e,t,r);rt=!!(e.flags&131072)}else rt=!1,Ce&&t.flags&1048576&&Cc(t,ii,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Wa(e,t),e=t.pendingProps;var i=dn(t,Ye.current);on(t,r),i=Ml(null,t,n,e,i,r);var o=Dl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(n)?(o=!0,ni(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pl(t),i.updater=Ci,t.stateNode=i,i._reactInternals=t,Uo(t,n,e,r),t=Yo(null,t,n,!0,o,r)):(t.tag=0,Ce&&o&&jl(t),Ke(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Wa(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=sg(n),e=Ct(n,e),i){case 0:t=Vo(null,t,n,e,r);break e;case 1:t=Xs(null,t,n,e,r);break e;case 11:t=Js(null,t,n,e,r);break e;case 14:t=qs(null,t,n,Ct(n.type,e),r);break e}throw Error($(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ct(n,i),Vo(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ct(n,i),Xs(e,t,n,i,r);case 3:e:{if(au(t),e===null)throw Error($(387));n=t.pendingProps,o=t.memoizedState,i=o.element,Pc(e,t),si(t,n,null,r);var l=t.memoizedState;if(n=l.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=fn(Error($(423)),t),t=Zs(e,t,n,r,i);break e}else if(n!==i){i=fn(Error($(424)),t),t=Zs(e,t,n,r,i);break e}else for(dt=cr(t.stateNode.containerInfo.firstChild),ct=t,Ce=!0,zt=null,r=Ec(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(cn(),n===i){t=Jt(e,t,r);break e}Ke(e,t,n,r)}t=t.child}return t;case 5:return Lc(t),e===null&&Bo(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,_o(n,i)?l=null:o!==null&&_o(n,o)&&(t.flags|=32),nu(e,t),Ke(e,t,l,r),t.child;case 6:return e===null&&Bo(t),null;case 13:return iu(e,t,r);case 4:return Ll(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=un(t,null,n,r):Ke(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ct(n,i),Js(e,t,n,i,r);case 7:return Ke(e,t,t.pendingProps,r),t.child;case 8:return Ke(e,t,t.pendingProps.children,r),t.child;case 12:return Ke(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,we(oi,n._currentValue),n._currentValue=l,o!==null)if(It(o.value,l)){if(o.children===i.children&&!nt.current){t=Jt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var f=o.dependencies;if(f!==null){l=o.child;for(var u=f.firstContext;u!==null;){if(u.context===n){if(o.tag===1){u=Yt(-1,r&-r),u.tag=2;var w=o.updateQueue;if(w!==null){w=w.shared;var D=w.pending;D===null?u.next=u:(u.next=D.next,D.next=u),w.pending=u}}o.lanes|=r,u=o.alternate,u!==null&&(u.lanes|=r),Wo(o.return,r,t),f.lanes|=r;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error($(341));l.lanes|=r,f=l.alternate,f!==null&&(f.lanes|=r),Wo(l,r,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ke(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,on(t,r),i=vt(i),n=n(i),t.flags|=1,Ke(e,t,n,r),t.child;case 14:return n=t.type,i=Ct(n,t.pendingProps),i=Ct(n.type,i),qs(e,t,n,i,r);case 15:return tu(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ct(n,i),Wa(e,t),t.tag=1,at(n)?(e=!0,ni(t)):e=!1,on(t,r),Xc(t,n,i),Uo(t,n,i,r),Yo(null,t,n,!0,e,r);case 19:return ou(e,t,r);case 22:return ru(e,t,r)}throw Error($(156,t.tag))};function ku(e,t){return Kd(e,t)}function lg(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,r,n){return new lg(e,t,r,n)}function Gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sg(e){if(typeof e=="function")return Gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pl)return 11;if(e===fl)return 14}return 2}function gr(e,t){var r=e.alternate;return r===null?(r=bt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function $a(e,t,r,n,i,o){var l=2;if(n=e,typeof e=="function")Gl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case $r:return Pr(r.children,i,o,t);case ul:l=8,i|=8;break;case fo:return e=bt(12,r,t,i|2),e.elementType=fo,e.lanes=o,e;case go:return e=bt(13,r,t,i),e.elementType=go,e.lanes=o,e;case ho:return e=bt(19,r,t,i),e.elementType=ho,e.lanes=o,e;case Ld:return Ti(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Id:l=10;break e;case Pd:l=9;break e;case pl:l=11;break e;case fl:l=14;break e;case tr:l=16,n=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=bt(l,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function Pr(e,t,r,n){return e=bt(7,e,n,t),e.lanes=r,e}function Ti(e,t,r,n){return e=bt(22,e,n,t),e.elementType=Ld,e.lanes=r,e.stateNode={isHidden:!1},e}function io(e,t,r){return e=bt(6,e,null,t),e.lanes=r,e}function oo(e,t,r){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dg(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bi(0),this.expirationTimes=Bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bi(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ql(e,t,r,n,i,o,l,f,u){return e=new dg(e,t,r,f,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=bt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pl(o),e}function cg(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ur,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Su(e){if(!e)return mr;e=e._reactInternals;e:{if(Or(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var r=e.type;if(at(r))return Sc(e,r,t)}return t}function ju(e,t,r,n,i,o,l,f,u){return e=Ql(r,n,!0,e,i,o,l,f,u),e.context=Su(null),r=e.current,n=Je(),i=fr(r),o=Yt(n,i),o.callback=t??null,ur(r,o,i),e.current.lanes=i,la(e,i,n),it(e,n),e}function Ei(e,t,r,n){var i=t.current,o=Je(),l=fr(i);return r=Su(r),t.context===null?t.context=r:t.pendingContext=r,t=Yt(o,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=ur(i,t,l),e!==null&&(Et(e,i,l,o),Oa(e,i,l)),l}function mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Kl(e,t){dd(e,t),(e=e.alternate)&&dd(e,t)}function ug(){return null}var Cu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jl(e){this._internalRoot=e}Ii.prototype.render=Jl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));Ei(e,t,null,null)};Ii.prototype.unmount=Jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mr(function(){Ei(null,e,null,null)}),t[Qt]=null}};function Ii(e){this._internalRoot=e}Ii.prototype.unstable_scheduleHydration=function(e){if(e){var t=rc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<nr.length&&t!==0&&t<nr[r].priority;r++);nr.splice(r,0,e),r===0&&ac(e)}};function ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cd(){}function pg(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var w=mi(l);o.call(w)}}var l=ju(t,n,e,0,null,!1,!1,"",cd);return e._reactRootContainer=l,e[Qt]=l.current,qn(e.nodeType===8?e.parentNode:e),Mr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var f=n;n=function(){var w=mi(u);f.call(w)}}var u=Ql(e,0,!1,null,null,!1,!1,"",cd);return e._reactRootContainer=u,e[Qt]=u.current,qn(e.nodeType===8?e.parentNode:e),Mr(function(){Ei(t,u,r,n)}),u}function Li(e,t,r,n,i){var o=r._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var f=i;i=function(){var u=mi(l);f.call(u)}}Ei(t,l,e,i)}else l=pg(r,t,e,i,n);return mi(l)}ec=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Pn(t.pendingLanes);r!==0&&(ml(t,r|1),it(t,Ie()),!(me&6)&&(gn=Ie()+500,yr()))}break;case 13:Mr(function(){var n=Kt(e,1);if(n!==null){var i=Je();Et(n,e,1,i)}}),Kl(e,1)}};xl=function(e){if(e.tag===13){var t=Kt(e,134217728);if(t!==null){var r=Je();Et(t,e,134217728,r)}Kl(e,134217728)}};tc=function(e){if(e.tag===13){var t=fr(e),r=Kt(e,t);if(r!==null){var n=Je();Et(r,e,t,n)}Kl(e,t)}};rc=function(){return xe};nc=function(e,t){var r=xe;try{return xe=e,t()}finally{xe=r}};Co=function(e,t,r){switch(t){case"input":if(bo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=ki(n);if(!i)throw Error($(90));Fd(n),bo(n,i)}}}break;case"textarea":Md(e,r);break;case"select":t=r.value,t!=null&&tn(e,!!r.multiple,t,!1)}};Ud=$l;$d=Mr;var fg={usingClientEntryPoint:!1,Events:[da,Qr,ki,Wd,Hd,$l]},zn={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gg={bundleType:zn.bundleType,version:zn.version,rendererPackageName:zn.rendererPackageName,rendererConfig:zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gd(e),e===null?null:e.stateNode},findFiberByHostInstance:zn.findFiberByHostInstance||ug,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{bi=La.inject(gg),Ot=La}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fg;pt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ql(t))throw Error($(200));return cg(e,t,null,r)};pt.createRoot=function(e,t){if(!ql(e))throw Error($(299));var r=!1,n="",i=Cu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ql(e,1,!1,null,null,r,!1,n,i),e[Qt]=t.current,qn(e.nodeType===8?e.parentNode:e),new Jl(t)};pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=Gd(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e){return Mr(e)};pt.hydrate=function(e,t,r){if(!Pi(t))throw Error($(200));return Li(null,e,t,!0,r)};pt.hydrateRoot=function(e,t,r){if(!ql(e))throw Error($(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",l=Cu;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=ju(t,null,e,1,r??null,i,!1,o,l),e[Qt]=t.current,qn(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Ii(t)};pt.render=function(e,t,r){if(!Pi(t))throw Error($(200));return Li(null,e,t,!1,r)};pt.unmountComponentAtNode=function(e){if(!Pi(e))throw Error($(40));return e._reactRootContainer?(Mr(function(){Li(null,null,e,!1,function(){e._reactRootContainer=null,e[Qt]=null})}),!0):!1};pt.unstable_batchedUpdates=$l;pt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Pi(r))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return Li(e,t,r,!1,n)};pt.version="18.3.1-next-f1338f8080-20240426";function Nu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nu)}catch(e){console.error(e)}}Nu(),Nd.exports=pt;var hg=Nd.exports,ud=hg;uo.createRoot=ud.createRoot,uo.hydrateRoot=ud.hydrateRoot;const mg=`
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
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6);
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
  opacity: 0.55;
  filter: saturate(1.3) contrast(1.1);
  mask-image: linear-gradient(160deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.1) 100%);
  -webkit-mask-image: linear-gradient(160deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.1) 100%);
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.3s ease, transform 0.4s ease;
}
.home-card:hover .home-card-flag {
  opacity: 0.75;
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
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.9)) drop-shadow(0 0 10px rgba(0,0,0,0.6));
}

.home-card-host {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.01em;
  margin-top: 2px;
  text-shadow: 0 1px 4px rgba(0,0,0,0.95), 0 0 10px rgba(0,0,0,0.7);
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 3px 8px;
  height: 26px;
  box-sizing: border-box;
  background: linear-gradient(145deg, rgba(20,10,45,0.85) 0%, rgba(10,5,22,0.95) 100%);
  border: 1px solid rgba(255,209,102,0.25);
  border-radius: 6px;
  line-height: 1;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.06), 0 2px 6px rgba(0,0,0,0.4);
}
.home-card-stat-val {
  font-family: var(--number-font);
  font-size: 0.95rem;
  color: var(--gold);
  letter-spacing: 0.02em;
  line-height: 1;
  white-space: nowrap;
  text-shadow: 0 0 10px rgba(255,209,102,0.4);
}
.home-card-stat-lbl {
  font-family: var(--display);
  font-size: 0.5rem;
  font-weight: 800;
  color: rgba(255,209,102,0.7);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;
}
.home-card-stat-divider { 
  display: block;
  width: 1px; 
  height: 14px; 
  background: linear-gradient(to bottom, transparent, rgba(148,94,255,0.4), transparent); 
  margin: 0 2px;
}

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
`;function xg(){const e=document.getElementById("esc-global-styles");e&&e.remove();const t=document.createElement("style");t.id="esc-global-styles",t.textContent=mg,document.head.appendChild(t)}xg();const bg={apiKey:"AIzaSyBH4kCFQRjnBbd4cJDDuGSxJbRQAnUQWHw",authDomain:"esc-connect-7bdfe.firebaseapp.com",databaseURL:"https://esc-connect-7bdfe-default-rtdb.europe-west1.firebasedatabase.app",projectId:"esc-connect-7bdfe",storageBucket:"esc-connect-7bdfe.firebasestorage.app",messagingSenderId:"432112365589",appId:"1:432112365589:web:9af0cdb510f2380935de1c"},lo={"johnlp1350@gmail.com":{id:"j3",isAdmin:!0},"stahmeln05@gmail.com":{id:"j2",isAdmin:!1},"lucioosy@gmail.com":{id:"j4",isAdmin:!1},"br0k3n.f41ry@gmail.com":{id:"j1",isAdmin:!1}},Va=[["af","Afghanistan"],["al","Albania"],["am","Armenia"],["au","Australia"],["at","Austria"],["az","Azerbaijan"],["bh","Bahrain"],["bd","Bangladesh"],["by","Belarus"],["be","Belgium"],["bt","Bhutan"],["ba","Bosnia and Herzegovina"],["bn","Brunei"],["bg","Bulgaria"],["kh","Cambodia"],["ca","Canada"],["cn","China"],["hr","Croatia"],["cy","Cyprus"],["cz","Czechia"],["dk","Denmark"],["ee","Estonia"],["fi","Finland"],["fr","France"],["ge","Georgia"],["de","Germany"],["gr","Greece"],["hk","Hong Kong"],["hu","Hungary"],["is","Iceland"],["in","India"],["id","Indonesia"],["ir","Iran"],["iq","Iraq"],["ie","Ireland"],["il","Israel"],["it","Italy"],["jp","Japan"],["jo","Jordan"],["kz","Kazakhstan"],["kw","Kuwait"],["kg","Kyrgyzstan"],["la","Laos"],["lb","Lebanon"],["lv","Latvia"],["lt","Lithuania"],["lu","Luxembourg"],["mo","Macau"],["my","Malaysia"],["mv","Maldives"],["mt","Malta"],["md","Moldova"],["mc","Monaco"],["mn","Mongolia"],["me","Montenegro"],["ma","Morocco"],["mm","Myanmar"],["np","Nepal"],["nl","Netherlands"],["nz","New Zealand"],["kp","North Korea"],["mk","North Macedonia"],["no","Norway"],["om","Oman"],["pk","Pakistan"],["ps","Palestine"],["ph","Philippines"],["pl","Poland"],["pt","Portugal"],["qa","Qatar"],["ro","Romania"],["ru","Russia"],["sa","Saudi Arabia"],["sm","San Marino"],["rs","Serbia"],["sg","Singapore"],["sk","Slovakia"],["si","Slovenia"],["kr","South Korea"],["es","Spain"],["lk","Sri Lanka"],["se","Sweden"],["ch","Switzerland"],["sy","Syria"],["tw","Taiwan"],["tj","Tajikistan"],["th","Thailand"],["tr","Türkiye"],["tm","Turkmenistan"],["ua","Ukraine"],["ae","United Arab Emirates"],["gb","United Kingdom"],["uz","Uzbekistan"],["vn","Vietnam"],["ye","Yemen"]],De={};for(let e=0;e<Va.length;e++)De[Va[e][0]]=Va[e][1];const yg={af:"AFG",al:"ALB",am:"ARM",au:"AUS",at:"AUT",az:"AZE",bh:"BHR",bd:"BGD",by:"BLR",be:"BEL",bt:"BTN",ba:"BIH",bn:"BRN",bg:"BGR",kh:"KHM",ca:"CAN",cn:"CHN",hr:"CRO",cy:"CYP",cz:"CZE",dk:"DNK",ee:"EST",fi:"FIN",fr:"FRA",ge:"GEO",de:"GER",gr:"GRE",hk:"HKG",hu:"HUN",is:"ISL",in:"IND",id:"IDN",ir:"IRN",iq:"IRQ",ie:"IRL",il:"ISR",it:"ITA",jp:"JPN",jo:"JOR",kz:"KAZ",kw:"KWT",kg:"KGZ",la:"LAO",lb:"LBN",lv:"LVA",lt:"LTU",lu:"LUX",mo:"MAC",my:"MYS",mv:"MDV",mt:"MLT",md:"MDA",mc:"MCO",mn:"MNG",me:"MNE",ma:"MAR",mm:"MMR",np:"NPL",nl:"NED",nz:"NZL",kp:"PRK",mk:"MKD",no:"NOR",om:"OMN",pk:"PAK",ps:"PSE",ph:"PHL",pl:"POL",pt:"POR",qa:"QAT",ro:"ROU",ru:"RUS",sa:"SAU",sm:"SMR",rs:"SRB",sg:"SGP",sk:"SVK",si:"SVN",kr:"KOR",es:"ESP",lk:"LKA",se:"SWE",ch:"SUI",sy:"SYR",tw:"TWN",tj:"TJK",th:"THA",tr:"TUR",tm:"TKM",ua:"UKR",ae:"ARE",gb:"GBR",uz:"UZB",vn:"VNM",ye:"YEM"},jr={sf1:"Semi-final 1",sf2:"Semi-final 2",final:"Grand Final"},pd={sf1:15,sf2:15,final:26},Wt="esc-scoreboard-v2",so="esc-me",zu=`
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

/* === Live Prediction Battle – Einblend-Animation === */
@keyframes livePredEnter {
  0%   { opacity: 0; transform: translateY(14px) scale(0.99); filter: blur(6px); }
  60%  { opacity: 1; filter: blur(0); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes livePredBubble {
  0%   { opacity: 0; transform: translateY(8px) scale(0.94); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes livePredTable {
  0%   { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

.live-pred-enter {
  animation: livePredEnter 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.live-pred-bubble {
  animation: livePredBubble 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
.live-pred-table {
  animation: livePredTable 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: 0.15s;
}

/* === Duplikat-Markierung für den Platz-Input === */
.actual-place-input.dup {
  border-color: var(--red) !important;
  color: #ffb3c1 !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 200, 200, 0.15),
    inset 0 -2px 6px rgba(0, 0, 0, 0.7),
    0 0 16px rgba(255, 77, 109, 0.5) !important;
}
.actual-place-input.dup:focus {
  border-color: #ff6b85 !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 200, 200, 0.2),
    inset 0 -2px 6px rgba(0, 0, 0, 0.7),
    0 0 22px rgba(255, 77, 109, 0.75) !important;
}
`;if(typeof document<"u"&&!document.getElementById("battle-table-css")){const e=document.createElement("style");e.id="battle-table-css",e.textContent=zu,document.head.appendChild(e)}const Tn=e=>e?yg[e.toLowerCase()]||e.toUpperCase():"",re=e=>String(e||""),Hn=e=>+String(e).split("-").pop(),Ft=({cc:e})=>a.jsx("img",{className:"flag","data-cc":e,src:`https://flagcdn.com/w40/${e}.png`,srcSet:`https://flagcdn.com/w40/${e}.png 1x, https://flagcdn.com/w80/${e}.png 2x`,width:"22",height:"15",alt:e.toUpperCase(),loading:"lazy",decoding:"async",onError:t=>{const r=t.target;if(!r.dataset.s){r.dataset.s=1,r.removeAttribute("srcset"),r.src=`https://flagcdn.com/w40/${e}.png`;return}const n=document.createElement("span");n.textContent=e.toUpperCase().split("").map(i=>String.fromCodePoint(127397+i.charCodeAt(0))).join("")+" ",r.replaceWith(n)}}),_t=e=>{if(Number(e)===12)return"background:linear-gradient(160deg, #d8b4fe 0%, #a855f7 30%, #6b21a8 80%, #3b0764 100%);color:#ffffff;text-shadow:0 1px 3px rgba(0,0,0,0.9), 0 0 14px rgba(216,180,254,0.7);border:1.5px solid #f3e8ff;box-shadow:0 0 20px rgba(168,85,247,0.6), 0 4px 12px rgba(59,7,100,0.6), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -2px 5px rgba(0,0,0,0.5);";if(Number(e)===10)return"background:linear-gradient(160deg, #ffecb3 0%, #ffd166 50%, #f5b93a 100%);color:#4a2f00;text-shadow:0 1px 0 rgba(255,255,255,0.6);border:1.5px solid #fff4c9;box-shadow:0 0 18px rgba(255,209,102,0.55), 0 3px 10px rgba(180,120,0,0.35), inset 0 1.5px 0 rgba(255,255,255,0.7), inset 0 -2px 5px rgba(150,90,0,0.35);";const t={1:"#e63a2e",2:"#ea6b5f",3:"#ef9b93",4:"#f5c9c5",5:"#f5f5f5",6:"#c9e6d2",7:"#9fd6b1",8:"#71c48d",9:"#47b265"},r={1:"#9b1e15",2:"#b84236",3:"#c96660",4:"#d9a4a0",5:"#c9c9c9",6:"#8ebfa1",7:"#6cae83",8:"#449d66",9:"#2a824a"},n={1:"#b72b1f",2:"#c94a3d",3:"#d6726a",4:"#dc9f9a",5:"#b0b0b0",6:"#95c7a6",7:"#79b98e",8:"#5aa374",9:"#3c9058"},i=t[e]||"#f5f5f5",o=r[e]||"#c9c9c9",l=n[e]||"#b0b0b0",f=e>=6?"#0a2e14":"#1d1d1d";return`background: linear-gradient(160deg, ${i} 0%, ${o} 100%);color: ${f};text-shadow: 0 1px 2px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.2), 0 -1px 0 rgba(255,255,255,0.4);border: 1.5px solid ${l};box-shadow: 0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -3px 6px rgba(0,0,0,0.3);`},Xl=()=>({jury:[{id:"j1",name:"Livin"},{id:"j2",name:"Tabi"},{id:"j3",name:"Poki"},{id:"j4",name:"Kiri"}],songs:[],years:[],ratings:{},pred:{},qualPred:{},liveState:{},battleHidden:!1,autoHardReset:!1,livePredictionMode:!1,boycotted:{}}),vg=()=>{try{const e=JSON.parse(localStorage.getItem(Wt));if(e&&e.jury)return e.qualPred=e.qualPred||{},e.liveState=e.liveState||{},e}catch{}return Xl()},Tu=e=>e.sort((t,r)=>{const n=t.customNo!==void 0&&t.customNo!==null&&t.customNo!==""?parseFloat(t.customNo):Hn(t.id),i=r.customNo!==void 0&&r.customNo!==null&&r.customNo!==""?parseFloat(r.customNo):Hn(r.id);return!isNaN(n)&&!isNaN(i)?n-i:String(n).localeCompare(String(i))}),fd=e=>{const t={jury:{},songs:{},years:{},ratings:e.ratings,pred:e.pred,qualPred:e.qualPred,liveState:e.liveState,battleHidden:e.battleHidden||!1,autoHardReset:e.autoHardReset||!1,livePredictionMode:e.livePredictionMode||!1,boycotted:e.boycotted||{}};for(let r=0;r<e.jury.length;r++)t.jury[e.jury[r].id]={name:e.jury[r].name};for(let r=0;r<e.songs.length;r++){const n=e.songs[r];t.songs[n.id]={cc:n.cc,artist:n.artist,title:n.title,year:n.year}}for(let r=0;r<e.years.length;r++){const n=e.years[r],i={year:n.year,suffix:n.suffix,city:n.city,hostCc:n.hostCc,splitAfter:n.splitAfter,showDates:n.showDates,shows:{}};for(const o in n.shows){i.shows[o]={};const l=n.shows[o];for(let f=0;f<l.length;f++){const u=l[f];i.shows[o][u.id]={n:u.customNo,songId:u.songId,place:u.place,dq:u.dq,autoFinal:u.autoFinal}}}t.years[n.id]=i}return t},Ya=(e,t,r)=>{t=t||"",r=r||{};for(const n in e){const i=e[n],o=t?t+"/"+n:n;i&&typeof i=="object"?Ya(i,o,r):i!=null&&i!==""&&(r[o]=i)}return r},wg=e=>{const t=Xl(),r=e.jury||{};for(let o=0;o<t.jury.length;o++)r[t.jury[o].id]&&r[t.jury[o].id].name&&(t.jury[o].name=r[t.jury[o].id].name);t.songs=[];const n=e.songs||{};for(const o in n)n.hasOwnProperty(o)&&t.songs.push(Object.assign({id:o},n[o]));t.years=[];const i=e.years||{};for(const o in i)if(i.hasOwnProperty(o)){const l=i[o],f={};if(l.shows){for(const u in l.shows)if(l.shows.hasOwnProperty(u)){const w=l.shows[u]||{},D=[];for(const O in w)if(w.hasOwnProperty(O)){const L=w[O];D.push({id:O,songId:L.songId,place:L.place,customNo:L.n,dq:L.dq,autoFinal:L.autoFinal})}Tu(D),f[u]=D}}t.years.push({id:o,year:+l.year||+o.split("_")[0],suffix:l.suffix||"",city:l.city,hostCc:l.hostCc,splitAfter:l.splitAfter,showDates:l.showDates||{},shows:f})}return t.years.sort((o,l)=>l.year-o.year||l.id.localeCompare(o.id)),t.ratings=e.ratings||{},t.pred=e.pred||{},t.qualPred=e.qualPred||{},t.liveState=e.liveState||{},t.battleHidden=!!e.battleHidden,t.autoHardReset=!!e.autoHardReset,t.livePredictionMode=!!e.livePredictionMode,t.boycotted=e.boycotted||{},t},gd=e=>e>=20?"background: linear-gradient(135deg, #ff0000, #800000); color: #fff; border: 2.5px solid #ff6666; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 0 15px rgba(255,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.3);":e>=15?"background: linear-gradient(135deg, #d90000, #660000); color: #fff; border: 2.5px solid #ff4d4d; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 4px 12px rgba(217,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3);":e>=11?"background: linear-gradient(135deg, #b45309, #78350f); color: #fff; border: 2.5px solid #f59e0b; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 4px 12px rgba(180,83,9,0.4), inset 0 1px 0 rgba(255,255,255,0.2);":e>=8?"background: linear-gradient(135deg, #f97316, #c2410c); color: #fff; border: 2.5px solid #fdba74; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 4px 12px rgba(249,115,22,0.4), inset 0 1px 0 rgba(255,255,255,0.3);":e>=5?"background: linear-gradient(135deg, #facc15, #ca8a04); color: #422006; border: 2.5px solid #fef08a; text-shadow: 0 1px 2px rgba(255,255,255,0.6); box-shadow: 0 4px 12px rgba(250,204,21,0.4), inset 0 1px 0 rgba(255,255,255,0.5);":e>=3?"background: linear-gradient(135deg, #86efac, #22c55e); color: #052e16; border: 2.5px solid #bbf7d0; text-shadow: 0 1px 2px rgba(255,255,255,0.6); box-shadow: 0 4px 12px rgba(34,197,94,0.4), inset 0 1px 0 rgba(255,255,255,0.5);":"background: linear-gradient(135deg, #4ade80, #16a34a); color: #fff; border: 2.5px solid #86efac; text-shadow: 0 1px 3px rgba(0,0,0,0.6); box-shadow: 0 4px 12px rgba(22,163,74,0.4), inset 0 1px 0 rgba(255,255,255,0.4);";function kg(){U.useEffect(()=>{const s=document.getElementById("battle-table-css");s&&s.remove();const d=document.createElement("style");d.id="battle-table-css-"+Date.now(),d.textContent=zu,document.head.appendChild(d)},[]);const[e,t]=U.useState(vg),[r,n]=U.useState(()=>localStorage.getItem(so)||null),[i,o]=U.useState(!1),[l,f]=U.useState(()=>localStorage.getItem("esc-admin-view-off")==="true"),[u,w]=U.useState(null),D=!!u&&i&&!l,[O,L]=U.useState(1),[y,B]=U.useState({view:"home",yearId:null,tab:"sf1",subTab:"points",sortMode:"order",ovSubTab:"semis",sbShow:"final",sbSort:"ratings",editMode:!1,q:"",libYear:"",compareCc:null,enter:!1}),[Y,ye]=U.useState({open:!1,mode:null,payload:null}),[k,b]=U.useState([]),[C,H]=U.useState({}),ee=!!e.autoHardReset,te=U.useRef({}),ae=U.useRef(null),ie=U.useRef(!1),ke=U.useRef(null),pe=U.useRef(null),Ze=U.useRef(e.ratings),Xt=U.useRef(e.pred);U.useRef(null);const ve=U.useCallback(s=>e.years.find(d=>d.id===s)||null,[e.years]),be=U.useCallback(s=>e.songs.find(d=>d.id===s)||null,[e.songs]),We=U.useCallback(s=>{const d=e.jury.find(c=>c.id===s);return d?d.name:s},[e.jury]),vr=U.useCallback(s=>{for(const d of e.years)for(const c in d.shows){const p=d.shows[c].find(g=>g.id===s);if(p)return p}return null},[e.years]),Ge=U.useCallback(s=>s?s.songId&&e.ratings[s.songId]?e.ratings[s.songId]:e.ratings[s.id]?e.ratings[s.id]:{}:{},[e.ratings]),Z=U.useCallback(s=>s?e.qualPred[s.id]?e.qualPred[s.id]:{}:{},[e.qualPred]),le=U.useCallback(s=>s?!!(e.boycotted&&e.boycotted[s]):!1,[e.boycotted]),oe=U.useCallback((s,d)=>{const c=Date.now()+Math.random();b(p=>[...p,{id:c,msg:s,type:d||""}]),setTimeout(()=>{b(p=>p.filter(g=>g.id!==c))},2600)},[]),se=U.useCallback((s,d={})=>{ye({open:!0,mode:s,payload:d})},[]),de=U.useCallback(()=>{ye({open:!1,mode:null,payload:null})},[]);U.useEffect(()=>{const s=pe.current;if(s){if(Y.open&&!s.open){const d=window.scrollY;try{s.showModal()}catch{}requestAnimationFrame(()=>{window.scrollTo(0,d)}),document.body.style.overflow="hidden"}if(!Y.open&&s.open){try{s.close()}catch{}document.body.style.overflow=""}}},[Y.open]);const wr=U.useCallback(s=>{const d=ae.current;if(!d)return;const c=Ya(fd(s)),p={};for(const g in c)c[g]!==te.current[g]&&(p[g]=c[g]);for(const g in te.current)g in c||(p[g]=null);Object.keys(p).length&&(te.current=c,window.__isPushing=!0,d.update(p).catch(g=>console.warn("Firebase push error:",g)).finally(()=>{setTimeout(()=>{window.__isPushing=!1},500)}))},[]);U.useCallback((s,d)=>{const c=ae.current;c&&(d==null?(c.child(s).remove().catch(()=>{}),delete te.current[s]):(c.child(s).set(d).catch(()=>{}),te.current[s]=d))},[]);const kt=U.useCallback(s=>{if(u){try{localStorage.setItem(Wt,JSON.stringify(s))}catch{}wr(s)}},[wr,u]),ue=U.useCallback(s=>{if(!u){oe("Bitte einloggen, um Änderungen vorzunehmen!","error");return}t(d=>{const c=typeof s=="function"?s(d):{...d,...s};return kt(c),c})},[kt,u,oe]),ot=U.useRef({}),Pt=U.useRef(null),ua=U.useCallback((s,d,c)=>{const p=d.key,g=c?null:d.val(),v=s==="ratings"?"ratings":s==="pred"?"pred":s==="qualPred"?"qualPred":null;v&&(window.__isPushing||(ot.current[v]||(ot.current[v]={}),ot.current[v][p]={val:g,removed:c},Pt.current&&clearTimeout(Pt.current),Pt.current=setTimeout(()=>{const x=ot.current;ot.current={},t(I=>{let N=I,z=!1;for(const F in x){const G={...I[F]||{}};let X=!1;for(const V in x[F]){const{val:W,removed:R}=x[F][V],S=G[V];if(!(R&&S===void 0)&&!(!R&&W==null&&S===void 0)){if(!R&&W&&typeof W=="object"&&S){let h=!1;for(const T in W)if(S[T]!==W[T]){h=!0;break}if(!h)continue}!R&&typeof W!="object"&&S===W||(R||W===null||W===void 0?delete G[V]:typeof W=="object"?G[V]=Object.assign({},S||{},W):G[V]=W,X=!0)}}X&&(z||(N={...I},z=!0),N[F]=G)}if(!z)return I;try{localStorage.setItem(Wt,JSON.stringify(N))}catch{}return N})},30)))},[]);U.useEffect(()=>()=>{Pt.current&&clearTimeout(Pt.current)},[]);const Eu=U.useCallback(s=>{if(!window.firebase||ae.current)return;const d=window.firebase.database().ref();ae.current=d,d.once("value").then(c=>{const p=c.val();if(!p){if(s===!0){const x=Xl();te.current=Ya(fd(x)),d.update(te.current).catch(()=>{})}return}const g=Ya(p),v=wg(p);t(v),te.current=g;try{localStorage.setItem(Wt,JSON.stringify(v))}catch{}}).catch(c=>{console.warn("Firebase pull Fehler:",c)}),["ratings","pred","qualPred"].forEach(c=>{d.child(c).on("child_added",p=>ua(c,p,!1)),d.child(c).on("child_changed",p=>ua(c,p,!1)),d.child(c).on("child_removed",p=>ua(c,p,!0))}),d.child("liveState").on("value",c=>{const p=c.val()||{};t(g=>{const v=JSON.stringify(g.liveState),x=JSON.stringify(p);if(v===x)return g;const I={...g,liveState:p};try{localStorage.setItem(Wt,JSON.stringify(I))}catch{}return I})}),d.child("battleHidden").on("value",c=>{const p=!!c.val();t(g=>{if(g.battleHidden===p)return g;const v={...g,battleHidden:p};try{localStorage.setItem(Wt,JSON.stringify(v))}catch{}return v})}),d.child("autoHardReset").on("value",c=>{const p=!!c.val();t(g=>{if(g.autoHardReset===p)return g;const v={...g,autoHardReset:p};try{localStorage.setItem(Wt,JSON.stringify(v))}catch{}return v})}),d.child("livePredictionMode").on("value",c=>{const p=!!c.val();t(g=>{if(g.livePredictionMode===p)return g;const v={...g,livePredictionMode:p};try{localStorage.setItem(Wt,JSON.stringify(v))}catch{}return v})}),d.child("boycotted").on("value",c=>{const p=c.val()||{};t(g=>{const v=JSON.stringify(g.boycotted||{}),x=JSON.stringify(p);if(v===x)return g;const I={...g,boycotted:p};try{localStorage.setItem(Wt,JSON.stringify(I))}catch{}return I})})},[ua]);U.useEffect(()=>{if(!ie.current){if(ie.current=!0,!window.firebase){console.warn("Firebase SDK not loaded yet");return}try{window.firebase.apps.length||window.firebase.initializeApp(bg),window.firebase.auth().onAuthStateChanged(s=>{if(s){const d=(s.email||"").toLowerCase();if(lo.hasOwnProperty(d)){w(s);const c=lo[d],p=c.id,g=!!c.isAdmin;n(p),o(g),localStorage.setItem(so,p),localStorage.setItem("esc-is-admin",g?"true":"false"),localStorage.setItem("esc-joined","true"),Eu(!0)}else{window.firebase.auth().signOut().then(()=>{w(null),se("alert",{title:"Zugriff verweigert",text:"Das Google-Konto ("+d+") ist nicht freigeschaltet!"})});return}}else w(null)})}catch(s){console.warn("Firebase Init Fehler:",s)}}},[]);const Iu=U.useCallback(()=>{if(!window.firebase)return;const s=new window.firebase.auth.GoogleAuthProvider;window.firebase.auth().signInWithPopup(s).then(d=>{const c=(d.user.email||"").toLowerCase();lo.hasOwnProperty(c)?oe("Willkommen, "+(d.user.displayName||c)+"!","success"):(window.firebase.auth().signOut(),se("alert",{title:"Zugriff verweigert",text:"Das Konto "+c+" ist nicht in der Whitelist."}))}).catch(d=>{se("alert",{title:"Login Fehler",text:d.message})})},[se,oe]),Pu=U.useCallback(()=>{window.firebase&&window.firebase.auth().signOut().then(()=>{w(null)})},[]),Ri=U.useCallback(()=>{const s=e.jury.map(d=>(d.name.trim()[0]||"?").toUpperCase());return s.map((d,c)=>s.filter(g=>g===d).length>1?d+(c+1):d)},[e.jury]),Lu=U.useCallback(()=>{if(!y.yearId||!y.tab)return!1;const s=e.liveState[y.yearId];return s&&s.activeTab===y.tab},[y.yearId,y.tab,e.liveState]),pa=U.useCallback(()=>{if(!y.yearId)return 0;const s=e.liveState[y.yearId];return s&&s.index!==void 0?s.index:0},[y.yearId,e.liveState]);U.useEffect(()=>{if(!y.enter||!ke.current)return;const s=ke.current;s.classList.remove("enter"),s.offsetWidth,s.classList.add("enter"),B(d=>({...d,enter:!1}))},[y.enter]),U.useEffect(()=>{const s=Ze.current,d=Xt.current,c=[];for(const g in e.ratings)for(const v in e.ratings[g])(!s[g]||s[g][v]!==e.ratings[g][v])&&c.push("rating_"+g+"_"+v);for(const g in e.pred)for(const v in e.pred[g])(!d[g]||d[g][v]!==e.pred[g][v])&&c.push("pred_"+g+"_"+v);if(Ze.current=e.ratings,Xt.current=e.pred,!c.length)return;const p=new Set(c);window.__flashTimer&&clearTimeout(window.__flashTimer),window.__flashTimer=setTimeout(()=>{document.querySelectorAll("[data-flash-key]").forEach(g=>{p.has(g.getAttribute("data-flash-key"))&&(g.classList.add("flash-update"),setTimeout(()=>g.classList.remove("flash-update"),1400))}),document.querySelectorAll("[data-live-flash-key]").forEach(g=>{p.has(g.getAttribute("data-live-flash-key"))&&(g.classList.add("live-box-flash"),setTimeout(()=>g.classList.remove("live-box-flash"),1400))})},100)},[e.ratings,e.pred]);const[,Ru]=U.useState(0);U.useEffect(()=>{const s=setInterval(()=>Ru(d=>d+1),6e4);return()=>clearInterval(s)},[]),U.useEffect(()=>{if(!window.firebase||!window.firebase.database||!u)return;const s=localStorage.getItem(so);if(!s)return;const d=window.firebase.database(),c=d.ref("presence"),p=c.child(s),g=d.ref(".info/connected");let v=null;const x=()=>{p.onDisconnect().remove().then(()=>{p.set({online:!0,time:Date.now(),photoURL:u.photoURL||null}).catch(()=>{})}).catch(()=>{})},I=M=>{M.val()===!0&&x()};g.on("value",I),v=setInterval(()=>{d.ref(".info/connected")&&g&&p.update({time:Date.now()}).catch(()=>{})},3e4);const N=M=>{H(G=>{const X=M.val()||{},V=JSON.stringify(G),W=JSON.stringify(X);return V===W?G:X})};c.on("value",N);const z=()=>{p.remove().catch(()=>{})};window.addEventListener("beforeunload",z),window.addEventListener("pagehide",z);const F=()=>{document.visibilityState==="visible"&&x()};return document.addEventListener("visibilitychange",F),()=>{g.off("value",I),c.off("value",N),document.removeEventListener("visibilitychange",F),window.removeEventListener("beforeunload",z),window.removeEventListener("pagehide",z),v&&clearInterval(v),p.remove().catch(()=>{})}},[u]);const Fu=()=>{if(!u){oe("Bitte einloggen!","error");return}ue(s=>({...s,battleHidden:!s.battleHidden}))},_u=()=>{if(!y.yearId)return;if(!ve(y.yearId).shows[y.tab]){oe("Live-Modus geht nur in einer Show!","error");return}ue(d=>{const c={...d,liveState:{...d.liveState}},p=c.liveState[y.yearId]||{activeTab:null,index:0};return p.activeTab===y.tab?c.liveState[y.yearId]={...p,activeTab:null}:(c.livePredictionMode=!1,c.liveState[y.yearId]={...p,activeTab:y.tab,index:0}),c})},Mu=s=>{if(!y.yearId)return;const d=pa();L(s>d?1:-1),ue(c=>{const p={...c,liveState:{...c.liveState}};return p.liveState[y.yearId]={...p.liveState[y.yearId]||{activeTab:y.tab},index:parseInt(s)||0},p})},Du=()=>{if(!y.yearId)return;const s=ve(y.yearId),d=s.shows[y.tab]||[];if(!d.length)return;L(1);const c=pa(),p=(c+1)%d.length;ue(g=>{const v={...g,liveState:{...g.liveState}};return v.liveState[y.yearId]={...v.liveState[y.yearId]||{activeTab:y.tab},index:p},v})},Ou=()=>{if(!y.yearId)return;const s=ve(y.yearId),d=s.shows[y.tab]||[];if(!d.length)return;L(-1);const c=pa(),p=(c-1+d.length)%d.length;ue(g=>{const v={...g,liveState:{...g.liveState}};return v.liveState[y.yearId]={...v.liveState[y.yearId]||{activeTab:y.tab},index:p},v})},Au=(s,d)=>{ue(c=>{const p={...c,qualPred:{...c.qualPred}};return p.qualPred[s]={...p.qualPred[s]||{}},p.qualPred[s][d]===void 0?p.qualPred[s][d]=!1:delete p.qualPred[s][d],p})},kr=()=>B(s=>({...s,yearId:null,view:"home",enter:!0})),Fi=s=>{const d=ve(s);B(c=>({...c,yearId:s,view:"year",tab:d&&d.shows.sf1?"sf1":d&&d.shows.sf2?"sf2":d&&d.shows.final?"final":"overview",subTab:"points",sortMode:"order",ovSubTab:"semis",editMode:!1,enter:!0}))},Bu=()=>B(s=>({...s,view:"compare",enter:!0})),Wu=()=>B(s=>({...s,view:"library",enter:!0})),Hu=()=>B(s=>({...s,view:"stats",enter:!0})),Uu=s=>{se("confirm",{title:"Delete Song",text:"Delete from library?",onYes:()=>{ue(d=>({...d,songs:d.songs.filter(c=>c.id!==s)}))}})},Bt=s=>B(d=>({...d,tab:s,subTab:"points",sortMode:"order",ovSubTab:"semis",editMode:!1,enter:!0})),$u=()=>{const s=ve(y.yearId);se("confirm",{title:"Contest löschen",text:"Willst du diesen kompletten Contest löschen?",onYes:()=>{ue(d=>({...d,years:d.years.filter(c=>c!==s)})),B(d=>({...d,yearId:null,view:"home",enter:!0}))}})},Vu=s=>{const d=ve(y.yearId);d&&!d.shows[s]&&ue(c=>({...c,years:c.years.map(p=>{if(p.id!==y.yearId)return p;const g=pd[s]||25,v=[];for(let x=1;x<=g;x++)v.push({id:p.id+"-"+s+"-"+x});return{...p,shows:{...p.shows,[s]:v}}})}))},Yu=s=>{se("confirm",{title:"Show entfernen",text:"Möchtest du "+jr[s]+" wirklich entfernen? Alle Tipps und Einträge gehen verloren.",onYes:()=>{ue(d=>({...d,years:d.years.map(c=>{if(c.id!==y.yearId)return c;const p={...c.shows};return delete p[s],{...c,shows:p}})})),B(d=>{const c=ve(y.yearId);if(!c)return d;const p=d.tab===s?c.shows.sf1?"sf1":c.shows.sf2?"sf2":c.shows.final?"final":"overview":d.tab,g=d.sbShow===s?c.shows.final?"final":Object.keys(c.shows).filter(v=>v!==s)[0]:d.sbShow;return{...d,tab:p,sbShow:g}})}})},Gu=(s,d)=>{d=+d,!(d<=0)&&ue(c=>({...c,years:c.years.map(p=>{if(p.id!==y.yearId)return p;const g=[...p.shows[s]||[]],v=g[d];return g[d]=g[d-1],g[d-1]=v,{...p,shows:{...p.shows,[s]:g}}})}))},Qu=(s,d)=>{d=+d;const c=ve(y.yearId),p=c.shows[s]||[];d>=p.length-1||ue(g=>({...g,years:g.years.map(v=>{if(v.id!==y.yearId)return v;const x=[...v.shows[s]||[]],I=x[d];return x[d]=x[d+1],x[d+1]=I,{...v,shows:{...v.shows,[s]:x}}})}))},Ku=s=>{ue(d=>({...d,years:d.years.map(c=>{if(c.id!==y.yearId)return c;const p=[...c.shows[s]||[]];return p.push({id:c.id+"-"+s+"-"+(p.length+1)}),{...c,shows:{...c.shows,[s]:p}}})}))},Ju=s=>{ue(d=>({...d,years:d.years.map(c=>{if(c.id!==y.yearId)return c;const p=[...c.shows[s]||[]];return p.length<=0?c:(p.pop(),{...c,shows:{...c.shows,[s]:p}})})}))},qu=s=>{ue(d=>({...d,years:d.years.map(c=>{const p={};for(const g in c.shows)p[g]=c.shows[g].map(v=>v.id===s?{...v,dq:!v.dq}:v);return{...c,shows:p}})}))},Xu=(s,d,c)=>{ue(p=>({...p,years:p.years.map(g=>{const v={};for(const x in g.shows){const I=g.shows[x].map(N=>{if(N.id!==s)return N;const z={...N};return d===""||parseFloat(d)===Hn(N.id)?delete z.customNo:z.customNo=isNaN(parseFloat(d))?d:parseFloat(d),z.autoFinal=c,c&&delete z.place,z});Tu(I),v[x]=I}return{...g,shows:v}})})),de()},Zu=s=>{const{artist:d,title:c,cc:p,year:g,editId:v,assign:x,boycotted:I}=s;!d||!c||!p||(ue(N=>{const z={...N,songs:[...N.songs],boycotted:{...N.boycotted||{}}};let F;if(v){const M=z.songs.findIndex(G=>G.id===v);M!==-1&&(z.songs[M]={...z.songs[M],artist:d,title:c,cc:p,year:g},F=v)}else F="s"+Date.now().toString(36),z.songs.push({id:F,cc:p,artist:d,title:c,year:g});return F&&(I?(z.boycotted[F]=!0,z.ratings[F]&&(z.ratings={...z.ratings},delete z.ratings[F])):delete z.boycotted[F]),x&&(z.years=z.years.map(M=>{const G={};for(const X in M.shows)G[X]=M.shows[X].map(V=>V.id===x?{...V,songId:F}:V);return{...M,shows:G}})),z}),x&&!I?(de(),setTimeout(()=>se("rating",{eId:x,jurId:r}),50)):de())},e0=s=>{const{year:d,suffix:c,city:p}=s,g=parseInt(d);if(!g)return;const v=g+(c?"_"+c.toLowerCase():"_main");if(ve(v))return;const x={};for(const I of["sf1","sf2","final"]){x[I]=[];for(let N=1;N<=pd[I];N++)x[I].push({id:v+"-"+I+"-"+N})}ue(I=>{const N={...I,years:[...I.years,{id:v,year:g,suffix:c,city:p||void 0,shows:x}]};return N.years.sort((z,F)=>F.year-z.year),N}),de(),B(I=>({...I,yearId:v,view:"year",tab:"sf1",subTab:"points",sortMode:"order",ovSubTab:"semis",enter:!0}))},t0=(s,d)=>{ue(c=>({...c,years:c.years.map(p=>p.id===y.yearId?{...p,city:s||void 0,hostCc:d||void 0}:p)})),de()},r0=s=>{ue(d=>({...d,years:d.years.map(c=>c.id===y.yearId?{...c,showDates:s}:c)})),de()},n0=(s,d,c)=>{ue(p=>({...p,years:p.years.map(g=>{if(g.id!==y.yearId)return g;const v={...g};return v.city=s||void 0,v.hostCc=d||void 0,v.showDates=c,v})})),de()},a0=s=>{const d={};s.forEach(c=>{const p=c.value.trim();p&&(d[c.dataset.jn]=p)}),ue(c=>({...c,jury:c.jury.map(p=>d[p.id]?{...p,name:d[p.id]}:p)})),de()},i0=s=>{if(!u){oe("Bitte einloggen!","error");return}try{const d=JSON.parse(s);ue(c=>{const p={...c};return d.jury&&(p.jury=d.jury),d.songs&&(p.songs=d.songs),d.years&&(p.years=d.years,p.years.sort((g,v)=>v.year-g.year||v.id.localeCompare(g.id))),d.ratings&&(p.ratings=d.ratings),d.pred&&(p.pred=d.pred),d.qualPred&&(p.qualPred=d.qualPred),d.liveState&&(p.liveState=d.liveState),p}),de(),oe("JSON aktualisiert!","success")}catch(d){se("alert",{title:"Fehler",text:"Ungültiges JSON-Format: "+d.message})}},o0=s=>{ue(d=>{const c={...d},p={};c.jury.forEach(x=>p[x.id]=x),s.jury&&s.jury.forEach(x=>p[x.id]=x),c.jury=Object.values(p);const g={};c.songs.forEach(x=>g[x.id]=x),s.songs&&s.songs.forEach(x=>g[x.id]=x),c.songs=Object.values(g);const v={};return c.years.forEach(x=>v[x.id]=x),s.years&&s.years.forEach(x=>v[x.id]=x),c.years=Object.values(v).sort((x,I)=>I.year-x.year||I.id.localeCompare(x.id)),["ratings","pred","qualPred","liveState"].forEach(x=>{if(c[x]={...c[x]||{}},s[x])for(const I in s[x])s[x].hasOwnProperty(I)&&(c[x][I]=Object.assign({},c[x][I]||{},s[x][I]))}),c}),de(),oe("Daten erfolgreich importiert!","success")},l0=()=>{if(!u){oe("Bitte einloggen!","error");return}const s=new Blob([JSON.stringify(e,null,1)],{type:"application/json"}),d=document.createElement("a");d.href=URL.createObjectURL(s),d.download="esc.json",d.click()},s0=()=>{""+re(We(r));const s=Date.now(),d=Object.keys(C).filter(x=>{const I=C[x];return I?I.time?s-I.time<9e4:!0:!1}),c=d.length>0?a.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:10,background:"linear-gradient(145deg, rgba(20,10,45,0.95) 0%, rgba(10,5,22,0.98) 100%)",padding:"4px 12px 4px 8px",borderRadius:999,border:"1px solid rgba(148,94,255,0.35)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.5), 0 0 20px rgba(168,85,247,0.12)",marginRight:10,height:38},children:[a.jsx("span",{title:"Online",style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:"var(--green)",boxShadow:"0 0 8px var(--green), 0 0 14px rgba(74,222,128,0.5)",flexShrink:0}}),a.jsx("div",{style:{display:"inline-flex",alignItems:"center",paddingLeft:4},children:d.map((x,I)=>{const N=C[x]&&C[x].photoURL,z=We(x).charAt(0).toUpperCase();return a.jsxs("div",{title:We(x)+" · Online",style:{position:"relative",width:28,height:28,marginLeft:I===0?0:-8,zIndex:d.length-I,transition:"transform 0.15s ease"},onMouseEnter:F=>{F.currentTarget.style.transform="translateY(-2px)",F.currentTarget.style.zIndex=999},onMouseLeave:F=>{F.currentTarget.style.transform="translateY(0)",F.currentTarget.style.zIndex=d.length-I},children:[a.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"linear-gradient(145deg, #ffd166 0%, #ffae00 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.78rem",fontWeight:900,fontFamily:"var(--display)",color:"#1d1d1d",border:"2px solid #0a0516",boxSizing:"border-box",boxShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:z}),N&&a.jsx("img",{src:N,alt:We(x),style:{position:"absolute",inset:0,width:28,height:28,borderRadius:"50%",objectFit:"cover",border:"2px solid #0a0516",display:"block",zIndex:1,background:"var(--panel2-solid)",boxShadow:"0 1px 4px rgba(0,0,0,0.5)"},onError:F=>{F.target.style.display="none"}})]},x)})}),a.jsxs("span",{style:{fontFamily:"var(--display)",fontSize:"0.72rem",fontWeight:800,letterSpacing:"0.08em",color:"var(--violet)",textShadow:"0 0 8px rgba(168,85,247,0.4)",whiteSpace:"nowrap"},children:[d.length," online"]})]}):null,p={display:"inline-flex",alignItems:"center",gap:6,padding:"6px 14px",borderRadius:999,fontWeight:700,fontSize:"0.78rem",letterSpacing:"0.01em",background:"linear-gradient(145deg, rgba(20,10,45,0.95) 0%, rgba(10,5,22,0.98) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.5), 0 0 20px rgba(168,85,247,0.12)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease",height:38,boxSizing:"border-box"},g=u?a.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:10,background:"linear-gradient(145deg, rgba(20,10,45,0.95) 0%, rgba(10,5,22,0.98) 100%)",padding:"4px 6px 4px 14px",borderRadius:999,border:"1px solid rgba(148,94,255,0.35)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.5), 0 0 20px rgba(168,85,247,0.12)",height:38,boxSizing:"border-box"},children:[a.jsx("span",{style:{fontSize:"0.82rem",fontWeight:700,color:"#fff",textShadow:"0 1px 3px rgba(0,0,0,0.7)",whiteSpace:"nowrap"},children:re(u.displayName||u.email)}),a.jsx("button",{className:"ghost sm danger",onClick:Pu,style:{padding:"5px 12px",fontSize:"0.72rem",fontWeight:700,borderRadius:999,background:"rgba(255,77,109,0.1)",border:"1px solid rgba(255,77,109,0.35)",color:"#ffb3c1",cursor:"pointer",transition:"all 0.15s ease",margin:0},onMouseEnter:x=>{x.currentTarget.style.background="rgba(255,77,109,0.2)",x.currentTarget.style.borderColor="rgba(255,77,109,0.6)",x.currentTarget.style.color="#fff"},onMouseLeave:x=>{x.currentTarget.style.background="rgba(255,77,109,0.1)",x.currentTarget.style.borderColor="rgba(255,77,109,0.35)",x.currentTarget.style.color="#ffb3c1"},children:"Logout"})]}):a.jsxs("button",{onClick:Iu,style:{...p,background:"linear-gradient(145deg, rgba(66,133,244,0.25) 0%, rgba(20,10,45,0.98) 100%)",border:"1px solid rgba(66,133,244,0.55)",color:"#fff"},onMouseEnter:x=>{x.currentTarget.style.transform="translateY(-1px)",x.currentTarget.style.borderColor="rgba(66,133,244,0.9)",x.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 8px 24px rgba(0,0,0,0.5), 0 0 20px rgba(66,133,244,0.35)"},onMouseLeave:x=>{x.currentTarget.style.transform="translateY(0)",x.currentTarget.style.borderColor="rgba(66,133,244,0.55)",x.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.5), 0 0 20px rgba(168,85,247,0.12)"},children:[a.jsxs("svg",{style:{width:15,height:15,fill:"currentColor"},viewBox:"0 0 24 24",children:[a.jsx("path",{d:"M21.35 11.1h-9.17v2.98h5.37c-.24 1.25-.97 2.31-2.07 3.03v2.49h3.33c1.95-1.8 3.08-4.45 3.08-7.5 0-.67-.06-1.33-.17-1.95z"}),a.jsx("path",{d:"M12.18 21c2.75 0 5.06-.91 6.75-2.49l-3.33-2.49c-.91.61-2.08.97-3.42.97-2.63 0-4.86-1.78-5.66-4.17H3.04v2.57C4.74 18.76 8.21 21 12.18 21z"}),a.jsx("path",{d:"M6.52 12.82c-.2-.61-.32-1.26-.32-1.93s.12-1.32.32-1.93V6.39H3.04C2.37 7.72 2 9.21 2 10.89s.37 3.17 1.04 4.5l3.48-2.57z"}),a.jsx("path",{d:"M12.18 4.78c1.5 0 2.85.52 3.91 1.52l2.93-2.93C17.23 1.67 14.92.78 12.18.78 8.21.78 4.74 3.02 3.04 6.39l3.48 2.57c.8-2.39 3.03-4.17 5.66-4.17z"})]})," Google Login"]}),v=!y.yearId&&y.view==="home";return a.jsx("header",{className:v?"":"header-with-logo",children:a.jsxs("div",{className:"who",children:[!v&&a.jsxs("button",{onClick:kr,title:"Zur Startseite","aria-label":"Startseite",style:{display:"inline-flex",alignItems:"center",gap:8,padding:"6px 14px 6px 12px",borderRadius:12,fontWeight:700,fontSize:"0.78rem",letterSpacing:"0.01em",background:"linear-gradient(145deg, rgba(20,10,45,0.95) 0%, rgba(10,5,22,0.98) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.5), 0 0 20px rgba(168,85,247,0.12)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease",height:38,boxSizing:"border-box",marginRight:4},onMouseEnter:x=>{x.currentTarget.style.transform="translateY(-1px)",x.currentTarget.style.borderColor="rgba(168,85,247,0.8)",x.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 10px 28px rgba(0,0,0,0.6), 0 0 24px rgba(168,85,247,0.35)"},onMouseLeave:x=>{x.currentTarget.style.transform="translateY(0)",x.currentTarget.style.borderColor="rgba(148,94,255,0.35)",x.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.5), 0 0 20px rgba(168,85,247,0.12)"},children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.6))"},children:[a.jsx("path",{d:"M3 9.5L12 3l9 6.5"}),a.jsx("path",{d:"M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10"})]}),a.jsx("span",{children:"Home"})]}),c,g,u&&a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>{const x=new URL(window.location.href);x.searchParams.set("v",Date.now()),window.location.href=x.toString()},title:"Cache leeren & neu laden",style:{...p,padding:"6px 11px"},onMouseEnter:x=>{x.currentTarget.style.transform="translateY(-1px)",x.currentTarget.style.borderColor="rgba(148,94,255,0.7)",x.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 8px 24px rgba(0,0,0,0.5), 0 0 24px rgba(168,85,247,0.3)"},onMouseLeave:x=>{x.currentTarget.style.transform="translateY(0)",x.currentTarget.style.borderColor="rgba(148,94,255,0.35)",x.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.5), 0 0 20px rgba(168,85,247,0.12)"},children:"🔄"}),a.jsxs("button",{onClick:()=>se("settings"),title:"Settings, Export, Import",style:p,onMouseEnter:x=>{x.currentTarget.style.transform="translateY(-1px)",x.currentTarget.style.borderColor="rgba(148,94,255,0.7)",x.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 8px 24px rgba(0,0,0,0.5), 0 0 24px rgba(168,85,247,0.3)"},onMouseLeave:x=>{x.currentTarget.style.transform="translateY(0)",x.currentTarget.style.borderColor="rgba(148,94,255,0.35)",x.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.5), 0 0 20px rgba(168,85,247,0.12)"},children:[a.jsx("span",{style:{fontSize:"1rem"},children:"⚙️"})," Settings"]})]})]})})},Zl=()=>{const s=[...e.years].sort((N,z)=>z.year-N.year||z.id.localeCompare(N.id)),d=new Date;d.setHours(0,0,0,0);const c=d.toISOString().slice(0,10);let p=null;const g=[];for(const N of s){const z=N.showDates&&N.showDates.final||null;z&&c<=z&&g.push({y:N,sortKey:z})}g.length&&(g.sort((N,z)=>N.sortKey.localeCompare(z.sortKey)),p=g[0].y.id);const v=N=>{const z=e.liveState[N.id];return!!(z&&z.activeTab)},x=N=>{const z=new Set;let F=0,M=0;for(const V in N.shows){const W=N.shows[V]||[];for(let R=0;R<W.length;R++){const S=W[R];if(!S.songId||z.has(S.songId))continue;z.add(S.songId);const h=Ge(S);for(const T of e.jury){const A=h[T.id];A!=null&&(F+=A,M++)}}}const G=z.size;return{avg:M>0?F/M:0,count:G}},I=p?s.find(N=>N.id===p):null;return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"home-hero",children:[a.jsx("img",{src:"./ESCLOGO.png",alt:"Eurovision Song Contest",className:"home-hero-logo"}),a.jsx("p",{className:"home-hero-sub",children:"Scoreboard · Predictions · Live Mode"})]}),a.jsxs("div",{className:"home-actions",children:[a.jsxs("button",{onClick:()=>{if(!u){oe("Bitte einloggen, um die Song Library zu öffnen!","error");return}Wu()},className:"home-action-btn home-action-primary",style:{position:"relative",cursor:u?"pointer":"not-allowed"},children:[a.jsx("span",{className:"home-action-icon",children:"🎵"}),a.jsxs("span",{className:"home-action-text",children:[a.jsx("b",{children:"Song Library"}),a.jsx("small",{children:"Alle Songs"})]}),!u&&a.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:18,fontSize:"2.4rem",filter:"drop-shadow(0 0 20px rgba(255,209,102,0.6))"},children:"🔒"})]}),a.jsxs("button",{onClick:()=>{if(!u){oe("Bitte einloggen, um den Country Comparison zu öffnen!","error");return}Bu()},className:"home-action-btn",style:{position:"relative",cursor:u?"pointer":"not-allowed"},children:[a.jsx("span",{className:"home-action-icon",children:"🌍"}),a.jsxs("span",{className:"home-action-text",children:[a.jsx("b",{children:"Countries"}),a.jsx("small",{children:"Länder im Vergleich"})]}),!u&&a.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:18,fontSize:"2.4rem",filter:"drop-shadow(0 0 20px rgba(255,209,102,0.6))"},children:"🔒"})]}),a.jsxs("button",{onClick:()=>{if(!u){oe("Bitte einloggen, um die Statistiken zu öffnen!","error");return}Hu()},className:"home-action-btn",style:{position:"relative",cursor:u?"pointer":"not-allowed"},children:[a.jsx("span",{className:"home-action-icon",children:"📊"}),a.jsxs("span",{className:"home-action-text",children:[a.jsx("b",{children:"Statistiken"}),a.jsx("small",{children:"Rekorde & Vergleiche"})]}),!u&&a.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:18,fontSize:"2.4rem",filter:"drop-shadow(0 0 20px rgba(255,209,102,0.6))"},children:"🔒"})]})]}),I&&(()=>{const N=I,z=x(N),F=v(N),M=N.showDates||{},G=N.hostCc?`https://flagcdn.com/${N.hostCc}.svg`:"",X=N.year+(N.suffix?" ("+N.suffix+")":""),V=new Date,W=(h,T)=>{if(!h)return null;const A=T||"21:00";return new Date(h+"T"+A+":00")},R=[{d:W(M.sf1,M.sf1Time),label:"bis SF1"},{d:W(M.sf2,M.sf2Time),label:"bis SF2"},{d:W(M.final,M.finalTime),label:"bis zum Grand Final"}].filter(h=>h.d&&h.d.getTime()>V.getTime()).sort((h,T)=>h.d-T.d);let S=null;if(R.length){const h=R[0],T=h.d.getTime()-V.getTime(),A=Math.floor(T/(1e3*60*60*24)),K=Math.floor(T/(1e3*60*60)%24),J=Math.floor(T/(1e3*60)%60);S={days:A,hours:K,minutes:J,label:h.label}}return a.jsxs("div",{className:"upcoming-hero",onClick:()=>{if(!u){oe("Bitte einloggen, um einen Contest zu öffnen!","error");return}Fi(N.id)},style:{position:"relative",minHeight:"160px",cursor:u?"pointer":"not-allowed"},children:[a.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"linear-gradient(135deg, #1a0f33 0%, #2a1749 50%, #120a24 100%)",zIndex:0}}),a.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"radial-gradient(circle at 20% 50%, rgba(168,85,247,0.15) 0%, transparent 60%)",zIndex:0}}),G&&a.jsx("img",{src:G,alt:"","aria-hidden":"true",style:{position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",height:"100%",maxWidth:"60%",objectFit:"cover",opacity:.9,filter:"saturate(1.1) contrast(1.05)",pointerEvents:"none",zIndex:0,maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 8%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 8%)"}}),a.jsxs("div",{className:"upcoming-hero-inner",style:{position:"relative",zIndex:1,padding:"20px 24px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",marginBottom:16,flexWrap:"wrap",gap:12},children:[a.jsx("span",{className:"upcoming-hero-badge",children:"⚡ Upcoming"}),F&&a.jsxs("span",{className:"home-badge home-badge-live",children:[a.jsx("span",{className:"home-badge-dot"}),"LIVE"]}),S&&a.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,padding:"4px 12px",borderRadius:999,background:"linear-gradient(145deg, rgba(255,45,149,0.12) 0%, rgba(168,85,247,0.08) 100%)",border:"1px solid rgba(255,45,149,0.35)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(255,45,149,0.12)"},children:[a.jsx("span",{style:{fontSize:"0.8rem",filter:"drop-shadow(0 0 6px rgba(255,45,149,0.6))"},children:"⏳"}),a.jsxs("span",{style:{fontSize:"0.6rem",fontWeight:800,color:"var(--muted)",letterSpacing:"0.08em",textTransform:"uppercase"},children:[S.label,":"]}),a.jsxs("span",{style:{fontFamily:"var(--number-font)",fontSize:"0.9rem",color:"#ffd6ea",letterSpacing:"0.04em",textShadow:"0 0 8px rgba(255,45,149,0.5)",lineHeight:1},children:[S.days,"T ",S.hours,"H ",S.minutes,"M"]})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",paddingRight:"35%",gap:16},children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[a.jsx("div",{className:"upcoming-hero-year",style:{fontSize:"3.2rem",marginBottom:0,lineHeight:1},children:re(X)}),N.city&&a.jsx("div",{className:"upcoming-hero-host",style:{justifyContent:"flex-start",fontSize:"1.4rem",marginTop:2,fontWeight:700},children:a.jsx("span",{children:re(N.city)})})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:16},children:[a.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:["sf1","sf2","final"].map(h=>{if(!N.shows[h])return null;const T=h==="final";return a.jsxs("button",{onClick:A=>{if(A.stopPropagation(),!u){oe("Bitte einloggen, um die Show zu öffnen!","error");return}Fi(N.id),setTimeout(()=>B(K=>({...K,tab:h})),50)},style:{background:T?"linear-gradient(145deg, rgba(255,209,102,0.15) 0%, rgba(40,24,82,0.95) 100%)":"rgba(255,255,255,0.04)",border:T?"1px solid rgba(255,209,102,0.45)":"1px solid rgba(148,94,255,0.25)",color:T?"var(--gold)":"var(--ink)",padding:"6px 14px",borderRadius:999,fontFamily:"var(--display)",fontWeight:700,fontSize:"0.75rem",display:"flex",alignItems:"center",gap:6,cursor:"pointer",transition:"all 0.2s ease",boxShadow:T?"inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 8px rgba(0,0,0,0.3), 0 0 12px rgba(255,209,102,0.15)":"inset 0 1px 0 rgba(255,255,255,0.06), 0 2px 8px rgba(0,0,0,0.3)"},onMouseEnter:A=>{A.currentTarget.style.transform="translateY(-1px)",A.currentTarget.style.background=T?"linear-gradient(145deg, rgba(255,209,102,0.25) 0%, rgba(40,24,82,0.98) 100%)":"rgba(255,255,255,0.08)",A.currentTarget.style.borderColor=T?"var(--gold)":"rgba(148,94,255,0.6)"},onMouseLeave:A=>{A.currentTarget.style.transform="translateY(0)",A.currentTarget.style.background=T?"linear-gradient(145deg, rgba(255,209,102,0.15) 0%, rgba(40,24,82,0.95) 100%)":"rgba(255,255,255,0.04)",A.currentTarget.style.borderColor=T?"rgba(255,209,102,0.45)":"rgba(148,94,255,0.25)"},children:[T?"Grand Final":h==="sf1"?"SF1":"SF2",a.jsx("span",{style:{fontSize:"0.9rem",opacity:.7,marginLeft:2},children:"→"})]},h)})}),a.jsxs("div",{className:"upcoming-hero-stats",style:{margin:0,justifyContent:"flex-start",gap:8},children:[a.jsxs("div",{className:"home-card-stat",style:{padding:"6px 12px",height:32},children:[a.jsx("span",{className:"home-card-stat-val",style:{fontSize:"1.2rem"},children:z.avg.toFixed(1)}),a.jsx("span",{className:"home-card-stat-lbl",style:{fontSize:"0.6rem"},children:"Ø Pts"})]}),a.jsx("div",{className:"home-card-stat-divider",style:{height:20}}),a.jsxs("div",{className:"home-card-stat",style:{padding:"6px 12px",height:32},children:[a.jsx("span",{className:"home-card-stat-val",style:{fontSize:"1.2rem"},children:z.count}),a.jsx("span",{className:"home-card-stat-lbl",style:{fontSize:"0.6rem"},children:"Songs"})]})]})]})]})]}),!u&&a.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:22,fontSize:"4rem",filter:"drop-shadow(0 0 24px rgba(255,209,102,0.6))"},children:"🔒"})]})})(),s.length?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"home-section-label",children:[a.jsx("span",{children:"All Contests"}),a.jsx("span",{className:"home-section-count",children:s.length-(p?1:0)})]}),a.jsx("div",{className:"home-grid",children:s.filter(N=>N.id!==p).map(N=>{const z=N.year+(N.suffix?" ("+N.suffix+")":""),F=x(N),M=v(N),G=N.hostCc?`https://flagcdn.com/${N.hostCc}.svg`:"",V=(N.shows.final||[]).find(R=>R.place===1&&R.songId),W=V?be(V.songId):null;return a.jsxs("div",{className:"home-card"+(M?" is-live":""),onClick:()=>{if(!u){oe("Bitte einloggen, um einen Contest zu öffnen!","error");return}Fi(N.id)},style:{cursor:u?"pointer":"not-allowed",padding:"14px 16px 12px"},children:[a.jsx("div",{className:"home-card-flag",style:{backgroundImage:G?`url('${G}')`:"linear-gradient(135deg, #3b2367, #1a1033)"}}),M&&a.jsx("div",{className:"home-card-top",children:a.jsxs("span",{className:"home-badge home-badge-live",children:[a.jsx("span",{className:"home-badge-dot"}),"LIVE"]})}),a.jsxs("div",{className:"home-card-body",children:[a.jsx("div",{className:"home-card-year",children:re(z)}),N.city&&a.jsx("div",{className:"home-card-host",children:a.jsx("span",{children:re(N.city)})}),a.jsx("div",{style:{marginTop:8,height:22,display:"flex",alignItems:"center",gap:5,minWidth:0},children:W?a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{fontSize:"0.72rem",lineHeight:1,flexShrink:0,filter:"drop-shadow(0 1px 3px rgba(0,0,0,0.85))"},children:"🏆"}),a.jsx("span",{style:{fontFamily:"var(--display)",fontSize:"0.74rem",fontWeight:700,color:"#fff3d1",lineHeight:1.15,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:0,flexShrink:1,textShadow:"0 1px 3px rgba(0,0,0,0.85)"},children:re(W.title)}),a.jsxs("span",{style:{fontFamily:"var(--display)",fontSize:"0.66rem",fontWeight:600,color:"rgba(255,209,102,0.85)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",flexShrink:0,textShadow:"0 1px 3px rgba(0,0,0,0.85)"},children:["· ",re(De[W.cc]||W.cc.toUpperCase())]})]}):a.jsx("span",{style:{fontSize:"0.6rem",fontWeight:600,fontStyle:"italic",color:"var(--muted-dim)",opacity:.55,whiteSpace:"nowrap",textShadow:"0 1px 3px rgba(0,0,0,0.85)"},children:"kein Sieger"})})]}),a.jsxs("div",{className:"home-card-footer",style:{marginTop:10},children:[a.jsxs("div",{className:"home-card-stat",children:[a.jsx("span",{className:"home-card-stat-val",children:F.avg.toFixed(1)}),a.jsx("span",{className:"home-card-stat-lbl",children:"Ø Pts"})]}),a.jsxs("div",{className:"home-card-stat",children:[a.jsx("span",{className:"home-card-stat-val",children:F.count}),a.jsx("span",{className:"home-card-stat-lbl",children:"Songs"})]})]}),!u&&a.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:14,fontSize:"3.2rem",filter:"drop-shadow(0 0 20px rgba(255,209,102,0.6))",transition:"opacity 0.2s ease"},onMouseEnter:R=>{R.currentTarget.style.background="linear-gradient(145deg, rgba(20,10,45,0.75) 0%, rgba(40,24,82,0.85) 100%)"},onMouseLeave:R=>{R.currentTarget.style.background="linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)"},children:"🔒"})]},N.id)})})]}):a.jsx("p",{className:"empty",children:"No Eurovision contest added yet. Use the ＋ button in the bottom right corner."})]})},d0=s=>a.jsxs("div",{className:"live-fallback",children:[a.jsxs("h2",{children:[a.jsx("span",{className:"live-dot"})," Live Modus ist aktiv"]}),a.jsx("p",{children:"Wähle eine Show aus, um beizutreten:"}),a.jsxs("div",{className:"live-fallback-shows",children:[s.shows.sf1&&a.jsx("button",{onClick:()=>Bt("sf1"),children:"Semi-final 1"}),s.shows.sf2&&a.jsx("button",{onClick:()=>Bt("sf2"),children:"Semi-final 2"}),s.shows.final&&a.jsx("button",{onClick:()=>Bt("final"),children:"Grand Final"})]})]}),c0=s=>{const d=ve(y.yearId),c=d.shows[s]||[];if(c.length===0)return d0(d);let p=pa();p>=c.length&&(p=0);const g=c[p],v=be(g.songId),x=g.autoFinal!==void 0?g.autoFinal:v&&["de","fr","it","es","gb","kr"].indexOf(v.cc)!==-1;let I=0,N="➔";if(s==="final")N=p+1;else if(!x){for(let h=0;h<=p;h++){const T=be(c[h].songId);(c[h].autoFinal!==void 0?c[h].autoFinal:T&&["de","fr","it","es","gb","kr"].indexOf(T.cc)!==-1)||I++}N=I}const z=be(g.songId),F=Ge(g);let M=null,G=null;if(s==="sf1"||s==="sf2")g.place&&(M=g.place);else if(z){if(d.shows.sf1){const h=d.shows.sf1.find(T=>T.songId===z.id);h&&h.place&&(M=h.place)}if(!M&&d.shows.sf2){const h=d.shows.sf2.find(T=>T.songId===z.id);h&&h.place&&(M=h.place)}}if(z&&d.shows.final){const h=d.shows.final.find(T=>T.songId===z.id);h&&h.place&&(G=h.place)}if(s==="final"&&e.livePredictionMode){const h=c.map(j=>{const _=be(j.songId);if(!_)return null;const Q=e.pred[j.id]||{},q=j.place;return{e:j,songObj:_,pred:Q,act:q}}).filter(Boolean);h.sort((j,_)=>{const Q=j.act!==void 0&&j.act!==null?j.act:9999,q=_.act!==void 0&&_.act!==null?_.act:9999;return Q!==q?Q-q:j.songObj.title.localeCompare(_.songObj.title)});const T={};h.forEach(({act:j})=>{j!=null&&(T[j]=(T[j]||0)+1)});const A=new Set;h.forEach(({act:j})=>{j!=null&&A.add(j)});const K=[];for(let j=1;j<=h.length;j++)A.has(j)||K.push(j);const J=A.size,E=J>0&&J>=Math.ceil(h.length/2),m={};e.jury.forEach(j=>{m[j.id]={sum:0,count:0,fullHits:0}}),h.forEach(({e:j,pred:_,act:Q})=>{Q!=null&&e.jury.forEach(q=>{const ce=_[q.id];if(ce!=null){const ge=Math.abs(ce-Q);m[q.id].sum+=ge,m[q.id].count++,ge===0&&m[q.id].fullHits++}})});const P=e.jury.slice().sort((j,_)=>{const Q=m[j.id],q=m[_.id],ce=Q.count>0,ge=q.count>0;return ce&&!ge?-1:!ce&&ge?1:!ce&&!ge?0:Q.sum-q.sum});return a.jsxs("div",{className:"live-pred-enter",children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12,marginBottom:20},children:[a.jsxs("div",{children:[a.jsx("h2",{style:{margin:"0 0 4px"},children:"🎯 Live Prediction Battle"}),a.jsx("p",{className:"hint",style:{margin:0},children:"Trage die echten Plätze ein – wer tippt am besten? 🎯 = Volltreffer."})]}),a.jsx("button",{onClick:()=>ue(j=>({...j,livePredictionMode:!1})),style:{padding:"7px 16px",fontSize:"0.85rem",fontWeight:700,background:"var(--panel2-solid)",borderColor:"var(--line)",color:"var(--muted)",borderRadius:999,cursor:"pointer"},onMouseEnter:j=>{j.currentTarget.style.color="#fff",j.currentTarget.style.borderColor="var(--pink)"},onMouseLeave:j=>{j.currentTarget.style.color="var(--muted)",j.currentTarget.style.borderColor="var(--line)"},children:"← Zurück zum Live-Modus"})]}),a.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",justifyContent:"center",marginBottom:24},children:P.map((j,_)=>{const Q=m[j.id];_===0&&Q.count>0;const q=Q.count>0,ce=_===0?"🥇":null,ge=(_===1||_===2||_===3)&&q?_+1+".":null,he=_===0&&q?{border:"#ffecb3",glow:"rgba(255,209,102,0.85)",bg:"linear-gradient(135deg, #ffd166 0%, #e0a400 40%, #8a5a00 100%)",accent:"#fff6cc",numberColor:"#1d0f00",numberGlow:"0 0 14px rgba(255,246,204,0.9), 0 2px 0 rgba(255,255,255,0.35), 0 2px 4px rgba(0,0,0,0.6)",extraShadow:"inset 0 2px 0 rgba(255,255,255,0.55), inset 0 -3px 8px rgba(120,70,0,0.55), 0 8px 24px rgba(0,0,0,0.55), 0 0 32px rgba(255,209,102,0.65)",padding:"10px 22px"}:_===1&&q?{border:"rgba(255,255,255,0.6)",glow:"rgba(229,229,229,0.4)",bg:"linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(30,18,60,0.95) 60%, rgba(15,8,32,1) 100%)",accent:"#e5e5e5",numberColor:"#fff",numberGlow:"0 0 12px rgba(229,229,229,0.6), 0 2px 4px rgba(0,0,0,0.6)",extraShadow:"inset 0 1px 0 rgba(255,255,255,0.12)",padding:"8px 18px"}:_===2&&q?{border:"rgba(205,127,50,0.75)",glow:"rgba(205,127,50,0.45)",bg:"linear-gradient(145deg, rgba(205,127,50,0.16) 0%, rgba(30,18,60,0.95) 60%, rgba(15,8,32,1) 100%)",accent:"#cd7f32",numberColor:"#fff",numberGlow:"0 0 12px rgba(205,127,50,0.6), 0 2px 4px rgba(0,0,0,0.6)",extraShadow:"inset 0 1px 0 rgba(255,255,255,0.1)",padding:"8px 18px"}:_===3&&q?{border:"rgba(34,211,238,0.7)",glow:"rgba(34,211,238,0.45)",bg:"linear-gradient(145deg, rgba(34,211,238,0.14) 0%, rgba(30,18,60,0.95) 60%, rgba(15,8,32,1) 100%)",accent:"#22d3ee",numberColor:"#fff",numberGlow:"0 0 12px rgba(34,211,238,0.65), 0 2px 4px rgba(0,0,0,0.6)",extraShadow:"inset 0 1px 0 rgba(255,255,255,0.1)",padding:"8px 18px"}:{border:"rgba(94,58,168,0.4)",glow:"rgba(94,58,168,0.18)",bg:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",accent:"var(--cyan)",numberColor:q?"#fff":"var(--muted-dim)",numberGlow:"0 2px 4px rgba(0,0,0,0.6)",extraShadow:"inset 0 1px 0 rgba(255,255,255,0.05)",padding:"8px 18px"};return a.jsxs("div",{className:"live-pred-bubble",style:{position:"relative",minWidth:170,padding:he.padding,borderRadius:16,background:he.bg,border:`1.5px solid ${he.border}`,boxShadow:`0 6px 18px rgba(0,0,0,0.4), 0 0 22px ${he.glow}, ${he.extraShadow}`,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:14,animationDelay:_*.06+"s"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[ce&&q&&a.jsx("span",{style:{fontSize:"1.35rem",lineHeight:1,filter:"drop-shadow(0 0 10px rgba(255,246,204,0.95)) drop-shadow(0 2px 4px rgba(0,0,0,0.8))",flexShrink:0},children:ce}),ge&&a.jsx("span",{style:{fontFamily:"var(--number-font)",fontSize:"1.15rem",lineHeight:1,color:he.accent,textShadow:`0 0 10px ${he.glow}, 0 2px 4px rgba(0,0,0,0.6)`,flexShrink:0,letterSpacing:"0.02em"},children:ge}),a.jsx("span",{style:{fontFamily:"var(--display)",fontSize:_===0?"0.72rem":"0.66rem",fontWeight:800,letterSpacing:"0.14em",textTransform:"uppercase",color:he.accent,opacity:.95,filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.6))",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:re(j.name)})]}),a.jsx("span",{style:{fontFamily:"var(--number-font)",fontSize:_===0?"2.3rem":"1.9rem",fontWeight:400,letterSpacing:"0.03em",lineHeight:1,color:he.numberColor,textShadow:q?he.numberGlow:"none",flexShrink:0},children:q?Q.sum:"–"})]},j.id)})}),a.jsx("div",{className:"live-pred-table",style:{maxWidth:1250,margin:"0 auto"},children:a.jsxs("table",{className:"sb-table battle-table",style:{width:"100%",tableLayout:"fixed"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{paddingLeft:15},children:"Song"}),e.jury.map(j=>a.jsx("th",{className:"c col-tipp",children:re(j.name)},"pp-h-g-"+j.id)),e.jury.map(j=>a.jsx("th",{className:"c col-abw",children:re(j.name)},"pp-h-d-"+j.id)),a.jsx("th",{className:"c col-place",children:"Platz"})]})}),a.jsx("tbody",{children:h.map(({e:j,songObj:_,pred:Q,act:q})=>{const ce=_.cc?{"--flag-url":`url('https://flagcdn.com/${_.cc}.svg')`}:{};return a.jsxs("tr",{children:[a.jsxs("td",{style:{...ce,position:"relative",overflow:"hidden",padding:0,borderBottom:"1px solid var(--line)"},children:[a.jsx("div",{style:{position:"absolute",left:0,top:"4px",bottom:"4px",width:"200px",backgroundImage:"var(--flag-url)",backgroundSize:"cover",backgroundPosition:"center",maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",opacity:.65,pointerEvents:"none",zIndex:0,borderRadius:"6px"}}),a.jsx("div",{className:"cc-code",style:{position:"absolute",left:38,top:"50%",transform:"translateY(-50%)",zIndex:1,margin:0},children:re(Tn(_.cc))}),a.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"flex-end",textAlign:"right",padding:"8px 10px",minHeight:54},children:[a.jsx("div",{className:"sb-title",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.9rem"},children:re(_.title)}),a.jsx("div",{className:"sb-artist",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.75rem"},children:re(_.artist)})]})]}),e.jury.map(ge=>{const he=Q[ge.id],et=ge.id===r||D;return a.jsx("td",{className:"col-tipp",style:{textAlign:"center",verticalAlign:"middle"},children:a.jsx("input",{type:"number",min:"1",max:c.length,value:he??"",className:"battle-input",readOnly:!et,disabled:!et,onChange:lt=>{const St=parseInt(lt.target.value);ue(Qe=>{const ht={...Qe,pred:{...Qe.pred}};return ht.pred[j.id]={...ht.pred[j.id]||{}},St>0?ht.pred[j.id][ge.id]=St:delete ht.pred[j.id][ge.id],ht})},style:{width:45,height:34,fontSize:"1rem",opacity:et?1:.5,background:et?void 0:"transparent",border:et?void 0:"1px solid transparent"}})},"pp-g-"+ge.id)}),e.jury.map(ge=>{const he=Q[ge.id];let He=a.jsx("span",{style:{color:"var(--muted)"},children:"–"});if(he!=null&&q!==void 0&&q!==null){const et=Math.abs(he-q);et===0?He=a.jsx("span",{className:"battle-diff-cell",style:gt(_t(10)),children:"🎯"}):He=a.jsx("span",{className:"battle-diff-cell",style:gt(gd(et)),children:et})}return a.jsx("td",{className:"col-abw",style:{verticalAlign:"middle"},children:He},"pp-d-"+ge.id)}),a.jsx("td",{className:"col-place",style:{verticalAlign:"middle"},children:a.jsx("input",{type:"number",min:"1",max:c.length,value:q??"",onChange:ge=>{const he=parseInt(ge.target.value);ue(He=>({...He,years:He.years.map(lt=>{if(lt.id!==y.yearId)return lt;const St={...lt.shows};return St[s]=St[s].map(Qe=>{if(Qe.id!==j.id)return Qe;const ht={...Qe};return he>0?ht.place=he:delete ht.place,ht}),{...lt,shows:St}})}))},className:"actual-place-input"+(q===1?" actual-1":q===2?" actual-2":q===3?" actual-3":"")+(q!=null&&T[q]>1?" dup":"")})})]},"pp-"+j.id)})})]})}),E&&K.length>0&&a.jsxs("div",{style:{maxWidth:1250,margin:"16px auto 0",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:6,padding:"6px 14px",borderRadius:999,background:"rgba(10, 5, 22, 0.6)",border:"1px solid rgba(94, 58, 168, 0.25)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.03)",opacity:.85},children:[a.jsx("span",{style:{fontFamily:"var(--display)",fontSize:"0.58rem",fontWeight:800,letterSpacing:"0.16em",textTransform:"uppercase",color:"rgba(165, 150, 216, 0.6)",marginRight:2},children:"Fehlt noch"}),K.map(j=>a.jsx("span",{style:{fontFamily:"var(--number-font)",fontSize:"0.85rem",lineHeight:1,color:"rgba(255, 209, 102, 0.65)",padding:"2px 7px",borderRadius:6,letterSpacing:"0.02em",textShadow:"0 0 6px rgba(255,209,102,0.2)",background:"rgba(255, 209, 102, 0.05)",border:"1px solid rgba(255, 209, 102, 0.15)"},children:j},j))]})]})}const X=le(g.songId),V=e.jury.map(h=>{const T=F[h.id],A=!X&&(h.id===r||D&&h.id==="j3"),K=X?"–":T??"–";let J="",E="var(--muted)";if(T!=null){const j=_t(T),_=j.match(/color:([^;]+)/);_&&(E=_[1]),J=j.replace(/color:[^;]+;?/,"")}const m=T==null,P=g.songId?"rating_"+g.songId+"_"+h.id:"";return a.jsxs("div",{className:"live-jury-box"+(A?" editable":""),"data-live-flash-key":P||void 0,style:{flex:1,minWidth:118,borderRadius:20,padding:"18px 14px 16px",textAlign:"center",position:"relative",overflow:"hidden",...m?{background:"linear-gradient(160deg, rgba(40,24,82,0.92) 0%, rgba(15,8,32,0.98) 100%)",border:"1px solid rgba(148,94,255,0.35)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.06), 0 6px 18px rgba(0,0,0,0.45)"}:gt(J),...A?{border:"2px solid var(--gold)",boxShadow:"inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -2px 6px rgba(0,0,0,0.35), 0 8px 24px rgba(0,0,0,0.55), 0 0 24px rgba(255,209,102,0.55)"}:null,cursor:A?"pointer":"default",transition:"transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease"},onClick:A?()=>se("rating",{eId:g.id,jurId:h.id}):void 0,onMouseEnter:j=>{A&&(j.currentTarget.style.transform="translateY(-3px)",j.currentTarget.style.borderColor="#fff6cc",j.currentTarget.style.boxShadow="inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 6px rgba(0,0,0,0.35), 0 12px 28px rgba(0,0,0,0.6), 0 0 32px rgba(255,209,102,0.7)")},onMouseLeave:j=>{A&&(j.currentTarget.style.transform="translateY(0)",j.currentTarget.style.borderColor="var(--gold)",j.currentTarget.style.boxShadow="inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -2px 6px rgba(0,0,0,0.35), 0 8px 24px rgba(0,0,0,0.55), 0 0 24px rgba(255,209,102,0.55)")},title:X?"Boykott – keine Punkte":A?"Punkte ändern":void 0,children:[a.jsx("div",{style:{fontFamily:"var(--display)",fontSize:"0.66rem",fontWeight:800,letterSpacing:"0.14em",textTransform:"uppercase",color:m?A?"var(--gold)":"var(--muted)":E,marginBottom:10,opacity:.9,filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.7))"},children:re(h.name)}),a.jsx("div",{style:{fontFamily:"var(--number-font)",fontSize:"2.6rem",lineHeight:1,letterSpacing:"0.03em",color:m?A?"var(--gold)":"var(--muted)":E,textShadow:"0 1px 2px rgba(0,0,0,0.5)"},children:K})]},h.id)}),W=[];if(M){const h=parseInt(M),T=h===1?"gold":h===2?"silver":h===3?"bronze":"",A=s==="sf1"?"SF1":"SF2";W.push(a.jsxs("div",{className:"live-current-place "+T,style:{marginRight:8,flexDirection:"column",padding:"6px 14px",lineHeight:1.1},children:[a.jsx("span",{style:{fontSize:"0.6rem",opacity:.8},children:A}),a.jsxs("span",{children:[M,"."]})]},"semi"))}if(G){const h=parseInt(G),T=h===1?"gold":h===2?"silver":h===3?"bronze":"";W.push(a.jsxs("div",{className:"live-current-place "+T,style:{flexDirection:"column",padding:"6px 14px",lineHeight:1.1},children:[a.jsx("span",{style:{fontSize:"0.6rem",opacity:.8},children:"GF"}),a.jsxs("span",{children:[G,"."]})]},"final"))}const R=c.map((h,T)=>{const A=be(h.songId),K=T===p,J=(()=>{if(s==="final")return!1;const m=be(c[T].songId);return c[T].autoFinal!==void 0?c[T].autoFinal:m&&["de","fr","it","es","gb","kr"].indexOf(m.cc)!==-1})(),E=(()=>{if(s==="final")return T+1;if(J)return"AQ";let m=0;for(let P=0;P<=T;P++){const j=be(c[P].songId);(c[P].autoFinal!==void 0?c[P].autoFinal:j&&["de","fr","it","es","gb","kr"].indexOf(j.cc)!==-1)||m++}return m})();return a.jsxs("div",{onClick:()=>Mu(T),title:A?`${A.title} – ${A.artist}`:"Kein Song",className:K?"queue-pop":"",style:{position:"relative",width:88,height:88,borderRadius:18,cursor:"pointer",backgroundColor:"#0a0516",border:K?"2.5px solid var(--gold)":"1.5px solid rgba(148,94,255,0.35)",boxShadow:K?"inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -2px 8px rgba(0,0,0,0.5), 0 0 28px rgba(255,209,102,0.7), 0 0 48px rgba(255,209,102,0.3), 0 6px 16px rgba(0,0,0,0.55)":"inset 0 1px 0 rgba(255,255,255,0.06), 0 3px 10px rgba(0,0,0,0.4)",transition:"all 0.2s ease",overflow:"hidden",flexShrink:0},onMouseEnter:m=>{K||(m.currentTarget.style.borderColor="rgba(168,85,247,0.75)",m.currentTarget.style.transform="translateY(-3px)",m.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 20px rgba(0,0,0,0.5), 0 0 18px rgba(168,85,247,0.25)")},onMouseLeave:m=>{K||(m.currentTarget.style.borderColor="rgba(148,94,255,0.3)",m.currentTarget.style.transform="translateY(0)",m.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.06), 0 3px 10px rgba(0,0,0,0.35)")},children:[A&&a.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,backgroundImage:`url('https://flagcdn.com/w160/${A.cc}.png')`,backgroundSize:"cover",backgroundPosition:"center",filter:K?"saturate(1.25) contrast(1.1) brightness(1.05)":"saturate(1.1) contrast(1.05) brightness(0.85)",transition:"filter 0.2s ease",pointerEvents:"none",zIndex:0}}),a.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:K?"radial-gradient(circle at 50% 40%, rgba(255,209,102,0.15) 0%, rgba(20,10,45,0.55) 55%, rgba(10,5,22,0.95) 100%)":"radial-gradient(circle at 50% 40%, rgba(0,0,0,0.05) 0%, rgba(10,5,22,0.55) 60%, rgba(5,3,15,0.95) 100%)",pointerEvents:"none",zIndex:1,transition:"background 0.2s ease"}}),a.jsx("div",{style:{position:"absolute",top:4,left:4,fontSize:"0.6rem",fontWeight:900,fontFamily:"var(--display)",padding:"2px 6px",borderRadius:6,background:K?"linear-gradient(135deg, #ffd166, #ffae00)":"rgba(5,3,15,0.85)",color:K?"#1d1d1d":"var(--ink)",border:K?"1px solid #fff6cc":"1px solid rgba(255,255,255,0.2)",letterSpacing:"0.04em",lineHeight:1.2,zIndex:3,boxShadow:K?"0 0 10px rgba(255,209,102,0.6)":"0 1px 3px rgba(0,0,0,0.6)"},children:E}),J&&!K&&a.jsx("div",{style:{position:"absolute",bottom:4,right:4,fontSize:"0.55rem",fontWeight:900,fontFamily:"var(--display)",padding:"1px 5px",borderRadius:4,background:"linear-gradient(135deg, #3b82f6, #1e40af)",color:"#dbeafe",border:"1px solid rgba(96,165,250,0.7)",letterSpacing:"0.08em",lineHeight:1.2,zIndex:3,boxShadow:"0 0 6px rgba(59,130,246,0.5)"},children:"AQ"}),K&&a.jsx("div",{style:{position:"absolute",bottom:0,right:0,width:0,height:0,borderStyle:"solid",borderWidth:"0 0 20px 20px",borderColor:"transparent transparent var(--gold) transparent",zIndex:4}})]},h.id)});z&&(re(Tn(z.cc)),W.length>0,s==="final"?`${N}`:x||`${N}`,re(z.title),re(z.artist),re(De[z.cc]||z.cc.toUpperCase()));const S=z?"https://flagcdn.com/"+z.cc+".svg":"";return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"live-mode-banner",style:{padding:"0",background:"transparent",border:"none",boxShadow:"none"},children:[a.jsx("div",{style:{position:"relative"},children:a.jsxs("div",{className:"live-song-slide "+(O>0?"from-right":"from-left"),style:{position:"relative",minHeight:"300px",borderRadius:28,overflow:"hidden",border:"1.5px solid rgba(255,209,102,0.55)",boxShadow:"inset 0 2px 0 rgba(255,255,255,0.12), inset 0 -4px 24px rgba(0,0,0,0.6), inset 0 0 60px rgba(255,209,102,0.08), 0 16px 40px rgba(0,0,0,0.6), 0 0 48px rgba(255,209,102,0.18)",backgroundColor:"#0a0516"},children:[z&&a.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,backgroundImage:S?`url('${S}')`:"none",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",filter:"saturate(1.25) contrast(1.08) brightness(0.95)",pointerEvents:"none",zIndex:0}}),a.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at center, rgba(5,3,15,0.35) 0%, rgba(5,3,15,0.7) 60%, rgba(5,3,15,0.92) 100%)",pointerEvents:"none",zIndex:1}}),a.jsxs("div",{style:{position:"absolute",top:16,left:18,zIndex:5,display:"inline-flex",alignItems:"center",gap:8,padding:"5px 12px 5px 10px",borderRadius:999,background:"rgba(5,3,15,0.7)",border:"1px solid rgba(255,45,149,0.35)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.4)",pointerEvents:"none"},children:[a.jsx("div",{className:"live-dot",style:{width:10,height:10,border:"2px solid var(--bg)",boxShadow:"0 0 10px rgba(255,45,149,0.9), 0 0 20px rgba(255,45,149,0.4)"},title:"Live"}),a.jsx("span",{style:{fontFamily:"var(--display)",fontWeight:900,fontSize:"0.7rem",letterSpacing:"0.16em",color:"var(--red)",textShadow:"0 0 8px rgba(255,45,149,0.8)"},children:"LIVE"})]}),a.jsxs("div",{style:{position:"absolute",top:16,right:16,display:"flex",gap:10,zIndex:5},children:[a.jsx("button",{onClick:Ou,title:"Vorheriger Song",style:{width:46,height:46,borderRadius:"50%",background:"linear-gradient(145deg, rgba(40,24,82,0.85) 0%, rgba(10,5,22,0.95) 100%)",color:"#fff",fontWeight:800,fontSize:"1.05rem",border:"1.5px solid rgba(255,209,102,0.35)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.12), 0 6px 18px rgba(0,0,0,0.55)",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",transition:"transform 0.18s ease, border-color 0.18s ease, background 0.18s ease, box-shadow 0.18s ease"},onMouseEnter:h=>{h.currentTarget.style.transform="translateY(-2px) scale(1.05)",h.currentTarget.style.borderColor="var(--gold)",h.currentTarget.style.background="linear-gradient(145deg, rgba(255,209,102,0.28) 0%, rgba(40,24,82,0.95) 100%)",h.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 22px rgba(0,0,0,0.6), 0 0 22px rgba(255,209,102,0.45)"},onMouseLeave:h=>{h.currentTarget.style.transform="translateY(0) scale(1)",h.currentTarget.style.borderColor="rgba(255,209,102,0.35)",h.currentTarget.style.background="linear-gradient(145deg, rgba(40,24,82,0.85) 0%, rgba(10,5,22,0.95) 100%)",h.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 6px 18px rgba(0,0,0,0.55)"},children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round",strokeLinejoin:"round",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.6))"},children:a.jsx("polyline",{points:"15 18 9 12 15 6"})})}),a.jsx("button",{onClick:Du,title:"Nächster Song",style:{width:46,height:46,borderRadius:"50%",background:"linear-gradient(145deg, rgba(255,209,102,0.22) 0%, rgba(30,18,60,0.95) 100%)",color:"#fff",fontWeight:800,fontSize:"1.05rem",border:"1.5px solid rgba(255,209,102,0.55)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.15), 0 6px 18px rgba(0,0,0,0.55), 0 0 16px rgba(255,209,102,0.15)",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",transition:"transform 0.18s ease, border-color 0.18s ease, background 0.18s ease, box-shadow 0.18s ease"},onMouseEnter:h=>{h.currentTarget.style.transform="translateY(-2px) scale(1.05)",h.currentTarget.style.borderColor="#fff6cc",h.currentTarget.style.background="linear-gradient(145deg, rgba(255,209,102,0.35) 0%, rgba(40,24,82,0.95) 100%)",h.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.25), 0 8px 22px rgba(0,0,0,0.6), 0 0 28px rgba(255,209,102,0.55)"},onMouseLeave:h=>{h.currentTarget.style.transform="translateY(0) scale(1)",h.currentTarget.style.borderColor="rgba(255,209,102,0.55)",h.currentTarget.style.background="linear-gradient(145deg, rgba(255,209,102,0.22) 0%, rgba(30,18,60,0.95) 100%)",h.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.15), 0 6px 18px rgba(0,0,0,0.55), 0 0 16px rgba(255,209,102,0.15)"},children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round",strokeLinejoin:"round",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.6))"},children:a.jsx("polyline",{points:"9 18 15 12 9 6"})})})]}),a.jsxs("div",{style:{position:"relative",zIndex:2,padding:"64px 40px 44px",minHeight:"300px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:[z?a.jsx(a.Fragment,{children:a.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,width:"calc(100% - 80px)",maxWidth:"100%"},children:[a.jsx("h2",{style:{fontSize:"clamp(2rem, 4.5vw, 3rem)",margin:0,fontWeight:800,letterSpacing:"-0.025em",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"#fff",lineHeight:1.15,maxWidth:"100%",filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.55)) drop-shadow(0 2px 10px rgba(0,0,0,0.65)) drop-shadow(0 4px 24px rgba(0,0,0,0.5))"},children:re(z.title)}),a.jsxs("p",{style:{fontSize:"clamp(0.95rem, 1.6vw, 1.15rem)",color:"#e6dcf7",margin:0,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.4,maxWidth:"100%",filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.55)) drop-shadow(0 2px 8px rgba(0,0,0,0.6)) drop-shadow(0 4px 18px rgba(0,0,0,0.45))"},children:[re(z.artist),a.jsx("span",{style:{color:"var(--muted)",margin:"0 8px"},children:"·"}),re(De[z.cc]||z.cc.toUpperCase())]})]})}):a.jsxs("div",{style:{textAlign:"center",padding:14},children:[a.jsxs("h3",{children:["Startnummer ",p+1]}),a.jsx("p",{className:"empty",style:{margin:"4px 0 14px"},children:"Kein Song zugewiesen."}),a.jsx("button",{className:"primary",onClick:()=>se("picker",{entryId:g.id}),children:"＋ Song hinzufügen"})]}),z&&a.jsx("div",{style:{position:"absolute",left:24,bottom:22,zIndex:3},children:a.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:10,padding:"8px 16px",borderRadius:999,background:"linear-gradient(135deg, rgba(255,209,102,0.22) 0%, rgba(30,18,60,0.92) 100%)",border:"1.5px solid rgba(255,209,102,0.6)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.12), 0 6px 18px rgba(0,0,0,0.55), 0 0 22px rgba(255,209,102,0.2)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)"},children:[a.jsx("span",{style:{fontFamily:"var(--display)",fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.14em",color:"var(--gold)",textTransform:"uppercase",opacity:.85,filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.7))"},children:s==="final"?"Startnr.":x?"Status":"Startnr."}),a.jsx("span",{style:{fontFamily:"var(--number-font)",fontSize:"1.5rem",fontWeight:400,letterSpacing:"0.04em",color:"#fff",lineHeight:1,filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.7)) drop-shadow(0 0 10px rgba(255,209,102,0.5))"},children:s==="final"?N:x?"AQ":N})]})}),z&&W.length>0&&a.jsx("div",{style:{position:"absolute",right:24,bottom:22,zIndex:3,display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"flex-end"},children:W.map((h,T)=>{var _,Q,q,ce;const A=h.props.className||"",K=A.includes("gold"),J=A.includes("silver"),E=A.includes("bronze"),m=K?{grad:"linear-gradient(135deg, #ffd166 0%, #ffae00 100%)",fg:"#1d1d1d",br:"#fff6cc",glow:"rgba(255,209,102,0.55)"}:J?{grad:"linear-gradient(135deg, #ffffff 0%, #a3a3a3 100%)",fg:"#1d1d1d",br:"#ffffff",glow:"rgba(229,229,229,0.45)"}:E?{grad:"linear-gradient(135deg, #f5c896 0%, #cd7f32 100%)",fg:"#2a1500",br:"#f5c896",glow:"rgba(205,127,50,0.5)"}:{grad:"linear-gradient(135deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",fg:"#fff",br:"rgba(255,255,255,0.25)",glow:"rgba(0,0,0,0.4)"},P=((Q=(_=h.props.children[0])==null?void 0:_.props)==null?void 0:Q.children)||"",j=((ce=(q=h.props.children[1])==null?void 0:q.props)==null?void 0:ce.children)||"";return a.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 16px",borderRadius:999,background:m.grad,border:`1.5px solid ${m.br}`,boxShadow:`inset 0 1px 0 rgba(255,255,255,0.35), 0 6px 18px rgba(0,0,0,0.55), 0 0 20px ${m.glow}`},children:[a.jsx("span",{style:{fontFamily:"var(--display)",fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.14em",textTransform:"uppercase",color:m.fg,opacity:.85},children:P}),a.jsx("span",{style:{fontFamily:"var(--number-font)",fontSize:"1.4rem",lineHeight:1,color:m.fg,letterSpacing:"0.02em"},children:j})]},T)})})]})]},p)}),a.jsx("div",{className:"live-flow-jury",style:{display:"flex",gap:10,marginTop:16,flexWrap:"wrap"},children:V},"jury-"+p)]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,marginTop:40,marginBottom:18,paddingBottom:12,borderBottom:"1px solid rgba(148,94,255,0.2)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{style:{width:3,height:22,borderRadius:3,background:"linear-gradient(to bottom, var(--gold), var(--pink))",boxShadow:"0 0 10px rgba(255,209,102,0.5)"}}),a.jsx("h3",{style:{margin:0,fontSize:"1.25rem",letterSpacing:"-0.01em"},children:"Running Order"})]}),a.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:800,color:"var(--gold)",background:"rgba(255,209,102,0.08)",padding:"4px 12px",borderRadius:999,border:"1px solid rgba(255,209,102,0.3)",letterSpacing:"0.08em",textShadow:"0 0 8px rgba(255,209,102,0.35)"},children:[c.length," Songs"]})]}),a.jsx("div",{className:"live-flow-queue",style:{display:"flex",flexWrap:"wrap",gap:12,paddingTop:8,paddingBottom:12,justifyContent:"flex-start",alignItems:"center"},children:R},"queue-"+p),s==="final"&&a.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:28,marginBottom:8},children:a.jsxs("button",{onClick:()=>ue(h=>({...h,livePredictionMode:!0})),style:{display:"inline-flex",alignItems:"center",gap:10,padding:"9px 22px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(255,209,102,0.45)",color:"var(--gold)",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35), 0 0 12px rgba(255,209,102,0.12)"},onMouseEnter:h=>{h.currentTarget.style.transform="translateY(-1px)",h.currentTarget.style.borderColor="var(--gold)",h.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(255,209,102,0.25)"},onMouseLeave:h=>{h.currentTarget.style.transform="translateY(0)",h.currentTarget.style.borderColor="rgba(255,209,102,0.45)",h.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35), 0 0 12px rgba(255,209,102,0.12)"},title:"Live Prediction-Ansicht öffnen",children:[a.jsx("span",{style:{fontSize:"1rem"},children:"🎯"}),a.jsx("span",{children:"Live Prediction Battle"})]})})]})},u0=()=>{const s=ve(y.yearId);if(!s)return Zl();let d=y.tab;!s.shows[d]&&d!=="overview"&&d!=="battle"&&d!=="sb"&&d!=="stats"&&(d=s.shows.sf1?"sf1":s.shows.sf2?"sf2":s.shows.final?"final":"overview");const c=Lu();let p;s.shows[d]&&c?p=c0(d):s.shows[d]?p=h0(d):d==="overview"?p=g0():d==="battle"?p=m0():d==="sb"?p=x0():d==="stats"&&(p=f0(s));const g=s.year+(s.suffix?" ("+s.suffix+")":""),v=!!s.shows.sf1,x=!!s.shows.sf2,I=!!s.shows.final,N=!!(s.city||s.hostCc),z=a.jsxs("div",{className:"year-host-bubble",onClick:()=>se("editYear"),style:{cursor:"pointer",position:"relative"},children:[a.jsx("span",{className:"year-host-year",children:re(g)}),N&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"year-host-divider"}),a.jsx("div",{className:"year-host-flag",children:s.hostCc?a.jsx(Ft,{cc:s.hostCc}):"🌍"}),a.jsxs("div",{className:"year-host-text",children:[s.hostCc&&a.jsx("span",{className:"year-host-cc",children:re(De[s.hostCc]||s.hostCc.toUpperCase())}),s.city&&a.jsx("span",{className:"year-host-city",children:re(s.city)})]})]}),a.jsx("div",{className:"year-host-hover-popup",children:"✏️ Klicken zum Bearbeiten"})]}),F=[...e.years].sort((E,m)=>E.year-m.year||E.id.localeCompare(m.id)),M=F.findIndex(E=>E.id===s.id),G=M>0?F[M-1]:null,X=M>=0&&M<F.length-1?F[M+1]:null,V=(E,m)=>{const P=!m,j=E==="prev"?a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.6))"},children:a.jsx("polyline",{points:"15 18 9 12 15 6"})}):a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round",style:{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.6))"},children:a.jsx("polyline",{points:"9 18 15 12 9 6"})}),_=E==="prev"?m?"Vorheriges Jahr ("+m.year+")":"Kein früheres Jahr":m?"Nächstes Jahr ("+m.year+")":"Kein späteres Jahr";return a.jsx("button",{onClick:()=>{m&&B(Q=>({...Q,yearId:m.id,view:"year",tab:m.shows.sf1?"sf1":m.shows.sf2?"sf2":m.shows.final?"final":"overview",subTab:"points",sortMode:"order",ovSubTab:"semis",editMode:!1,enter:!0}))},disabled:P,title:_,"aria-label":_,style:{display:"inline-grid",placeItems:"center",width:52,height:52,padding:0,borderRadius:"50%",background:"linear-gradient(145deg, rgba(20,10,45,0.95) 0%, rgba(10,5,22,0.98) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"#fff",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.5), 0 0 20px rgba(168,85,247,0.12)",cursor:P?"not-allowed":"pointer",opacity:P?.3:1,transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease, opacity 0.15s ease",flexShrink:0},onMouseEnter:Q=>{P||(Q.currentTarget.style.transform=E==="prev"?"translateX(-2px)":"translateX(2px)",Q.currentTarget.style.borderColor="rgba(168,85,247,0.8)",Q.currentTarget.style.background="linear-gradient(145deg, rgba(40,24,82,0.98) 0%, rgba(20,10,45,1) 100%)",Q.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 10px 28px rgba(0,0,0,0.6), 0 0 28px rgba(168,85,247,0.35)")},onMouseLeave:Q=>{P||(Q.currentTarget.style.transform="translateX(0)",Q.currentTarget.style.borderColor="rgba(148,94,255,0.35)",Q.currentTarget.style.background="linear-gradient(145deg, rgba(20,10,45,0.95) 0%, rgba(10,5,22,0.98) 100%)",Q.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.5), 0 0 20px rgba(168,85,247,0.12)")},children:j})},W=a.jsxs("div",{style:{textAlign:"center",marginBottom:24},children:[a.jsx("img",{src:"./ESCLOGO.png",alt:"Eurovision Song Contest",style:{display:"block",margin:"0 auto 16px",height:90,width:"auto",filter:"drop-shadow(0 4px 16px rgba(0,0,0,0.5)) drop-shadow(0 0 16px rgba(255,45,149,0.15)) drop-shadow(0 0 6px rgba(255,209,102,0.15))"}}),a.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:14,paddingTop:18},children:[V("prev",G),z,V("next",X)]})]}),R=c?{background:"rgba(255,255,255,0.04)",color:"var(--muted)",borderColor:"rgba(148,94,255,0.25)",fontWeight:600,fontSize:"0.82rem",padding:"7px 14px",opacity:.75}:{background:"linear-gradient(135deg, rgba(255,45,149,0.14) 0%, rgba(168,85,247,0.1) 100%)",color:"#ffd6ea",borderColor:"rgba(255,45,149,0.35)",fontWeight:700,fontSize:"0.85rem",padding:"8px 18px",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(255,45,149,0.12)"},h=(e.liveState[y.yearId]||{}).activeTab,T=a.jsxs("div",{className:"tabs",children:[v&&a.jsx("button",{style:{width:130},className:(y.tab==="sf1"?"on":"")+(h==="sf1"?" live-active":""),onClick:()=>Bt("sf1"),children:"Semi-final 1"}),x&&a.jsx("button",{style:{width:130},className:(y.tab==="sf2"?"on":"")+(h==="sf2"?" live-active":""),onClick:()=>Bt("sf2"),children:"Semi-final 2"}),I&&a.jsx("button",{style:{width:130},className:(y.tab==="final"?"on":"")+(h==="final"?" live-active":"")+" final-tab",onClick:()=>Bt("final"),children:"Grand Final"})]}),A=E=>{if(!E)return"";const m=new Date(E+"T00:00:00");if(isNaN(m))return"";const P=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"];return m.getDate()+". "+P[m.getMonth()]+" "+m.getFullYear()},K=s.showDates||{};K[y.tab];const J=a.jsxs("div",{style:{marginBottom:20},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,width:"100%"},children:[a.jsx("div",{style:{flex:1,display:"flex",justifyContent:"flex-start"},children:T}),a.jsx("div",{style:{display:"flex",justifyContent:"center",flexShrink:0},children:s.shows[y.tab]&&a.jsx("button",{onClick:_u,style:R,onMouseEnter:E=>{c?(E.currentTarget.style.opacity="1",E.currentTarget.style.borderColor="rgba(255,77,109,0.6)",E.currentTarget.style.color="#ffb3c1"):(E.currentTarget.style.transform="translateY(-1px)",E.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(255,45,149,0.22)")},onMouseLeave:E=>{c?(E.currentTarget.style.opacity="0.75",E.currentTarget.style.borderColor="rgba(148,94,255,0.25)",E.currentTarget.style.color="var(--muted)"):(E.currentTarget.style.transform="translateY(0)",E.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(255,45,149,0.12)")},title:c?"Live-Modus verlassen":"Live-Modus starten",children:c?a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,opacity:.9},children:[a.jsx("span",{style:{fontSize:"0.7rem",letterSpacing:"0.1em"},children:"●"}),a.jsx("span",{style:{fontSize:"0.78rem",letterSpacing:"0.04em"},children:"Live verlassen"})]}):a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:7},children:[a.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:"var(--red)",boxShadow:"0 0 8px var(--red)"}}),a.jsx("span",{style:{letterSpacing:"0.03em"},children:"Live Mode"})]})})}),a.jsx("div",{style:{flex:1,display:"flex",justifyContent:"flex-end"},children:a.jsxs("div",{className:"tabs",children:[a.jsx("button",{style:{width:130},className:y.tab==="battle"?"on":"",onClick:()=>Bt("battle"),children:"Predictions"}),a.jsx("button",{style:{width:130},className:y.tab==="sb"?"on":"",onClick:()=>Bt("sb"),children:"Scoreboard"}),a.jsx("button",{style:{width:130},className:y.tab==="stats"?"on":"",onClick:()=>Bt("stats"),children:"Statistics"})]})})]}),(y.tab==="sf1"||y.tab==="sf2"||y.tab==="final")&&K[y.tab]&&a.jsx("div",{style:{textAlign:"center",margin:"14px 0 12px"},children:a.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:14,padding:"8px 20px 8px 10px",borderRadius:999,background:"linear-gradient(145deg, rgba(20,10,45,0.95) 0%, rgba(10,5,22,0.98) 100%)",border:"1px solid rgba(148,94,255,0.35)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.5), 0 0 20px rgba(168,85,247,0.12)",transition:"all 0.2s ease"},children:[a.jsx("div",{style:{width:30,height:30,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.4)",borderRadius:"50%",border:"1.5px solid rgba(148,94,255,0.45)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.1), 0 0 12px rgba(168,85,247,0.2)",fontSize:"0.9rem",lineHeight:1,flexShrink:0},children:"📅"}),a.jsx("span",{style:{fontFamily:"var(--display)",fontSize:"1rem",fontWeight:800,letterSpacing:"-0.01em",color:"#ffffff",textShadow:"0 2px 4px rgba(0,0,0,0.8)",whiteSpace:"nowrap"},children:A(K[y.tab])}),a.jsx("div",{style:{width:1,height:22,background:"linear-gradient(to bottom, transparent, rgba(148,94,255,0.5), transparent)",flexShrink:0}}),a.jsxs("span",{style:{display:"inline-flex",alignItems:"baseline",gap:6,whiteSpace:"nowrap"},children:[a.jsx("span",{style:{fontFamily:"var(--number-font)",fontSize:"1.05rem",color:"var(--violet)",letterSpacing:"0.03em",textShadow:"0 0 8px rgba(168,85,247,0.4)",lineHeight:1},children:K[y.tab+"Time"]||"21:00"}),a.jsx("span",{style:{fontFamily:"var(--display)",fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--violet)",textShadow:"0 0 8px rgba(168,85,247,0.4)"},children:"Uhr"})]})]})}),a.jsx("div",{style:{borderBottom:"1px solid var(--line)",marginBottom:16}})]});return a.jsxs(a.Fragment,{children:[W,J,p]})},p0=()=>{const s=ve(y.yearId);if(!s)return null;const d=[];for(const c in jr)s.shows[c]&&d.push(a.jsx("button",{className:y.sbShow===c?"on":"",onClick:()=>B(p=>({...p,sbShow:c})),children:jr[c]},c));return d.push(a.jsx("button",{className:y.sbShow==="all"?"on":"",onClick:()=>B(c=>({...c,sbShow:"all"})),children:"All Songs"},"all")),a.jsx("div",{className:"seg",children:d})};function gt(s){if(!s)return{};const d={};return s.split(";").forEach(c=>{const[p,...g]=c.split(":");if(!p||!g.length)return;const v=p.trim().replace(/-([a-z])/g,(x,I)=>I.toUpperCase());d[v]=g.join(":").trim()}),d}const f0=s=>{const d=new Map,c=[];for(const R in s.shows)for(const S of s.shows[R]||[]){const h=be(S.songId);if(!h)continue;const T=Ge(S);c.push({entry:S,song:h,showKey:R,showName:jr[R],r:T}),d.has(h.id)||d.set(h.id,h)}const p={};for(const R of c){if(le(R.song.id))continue;const S=e.jury.map(T=>R.r[T.id]).filter(T=>T!=null);if(!S.length)continue;p[R.song.id]||(p[R.song.id]={sum:0,count:0,ratings:[],song:R.song}),p[R.song.id].seen||(p[R.song.id].sum+=S.reduce((T,A)=>T+A,0),p[R.song.id].count+=S.length,p[R.song.id].ratings=S,p[R.song.id].seen=!0)}const g=Object.values(p),v=g.filter(R=>R.sum>=40).sort((R,S)=>S.sum-R.sum),x=g.filter(R=>R.sum>=35).length,I=g.filter(R=>R.sum<15).length;let N=null;for(const R of g){if(R.ratings.length<2)continue;const S=Math.max(...R.ratings)-Math.min(...R.ratings);(!N||S>N.spread)&&(N={...R,spread:S})}let z=null;for(const R of g){if(R.ratings.length<2)continue;const S=Math.max(...R.ratings)-Math.min(...R.ratings);(!z||S<z.spread)&&(z={...R,spread:S})}const F={};for(const R of g){const S=R.ratings.filter(h=>h===12).length;S>0&&(F[R.song.id]={count:S,song:R.song})}let M=null;for(const R in F)(!M||F[R].count>M.count)&&(M=F[R]);const G={};for(const R of g){const S=R.ratings.filter(h=>h===1).length;S>0&&(G[R.song.id]={count:S,song:R.song})}let X=null;for(const R in G)(!X||G[R].count>X.count)&&(X=G[R]);const V={};for(const R in s.shows){let S=0,h=0;for(const T of s.shows[R]||[]){const A=Ge(T);for(const K of e.jury){const J=A[K.id];J!=null&&(S+=J,h++)}}h>0&&(V[R]={avg:S/h,count:h})}const W=({icon:R,title:S,value:h,subtitle:T,accent:A})=>a.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:`1px solid ${A||"rgba(94,58,168,0.4)"}`,borderRadius:18,padding:"18px 20px",display:"flex",flexDirection:"column",gap:6,boxShadow:A?`inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 16px rgba(0,0,0,0.4), 0 0 16px ${A}22`:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{fontSize:"1.4rem",filter:"drop-shadow(0 2px 6px rgba(0,0,0,0.5))"},children:R}),a.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,color:"var(--muted)",letterSpacing:"0.12em",textTransform:"uppercase"},children:S})]}),a.jsx("div",{style:{fontFamily:"var(--display)",fontSize:"1.4rem",fontWeight:800,color:A||"var(--ink)",letterSpacing:"-0.01em",lineHeight:1.2,textShadow:A?`0 0 12px ${A}66`:"none"},children:h}),T&&a.jsx("div",{style:{fontSize:"0.78rem",color:"var(--muted)",fontWeight:500,lineHeight:1.35},children:T})]});return a.jsxs(a.Fragment,{children:[a.jsxs("h2",{style:{margin:"0 0 8px"},children:["📊 Statistiken ",s.year,s.suffix?" ("+s.suffix+")":""]}),a.jsx("p",{className:"hint",style:{marginBottom:24},children:"Rekorde und Kuriositäten aus diesem Wettbewerb."}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:14,marginBottom:20},children:[a.jsx(W,{icon:"💯",title:"Songs über 40 Pts",value:`${v.length} ${v.length===1?"Song":"Songs"}`,subtitle:v.length>0?v.slice(0,2).map(R=>`${R.song.title} (${R.sum})`).join(" · "):"Kein Song hat 40 Punkte erreicht",accent:"var(--gold)"}),a.jsx(W,{icon:"📈",title:"Songs über 35 Pts",value:`${x} ${x===1?"Song":"Songs"}`,subtitle:`${I} ${I===1?"Song":"Songs"} unter 15 Punkten`,accent:"var(--cyan)"}),M&&a.jsx(W,{icon:"🎯",title:"Meiste 12er",value:`${M.count} × 12`,subtitle:`${M.song.title} – ${M.song.artist}`,accent:"var(--violet)"}),X&&a.jsx(W,{icon:"💔",title:"Meiste 1er",value:`${X.count} × 1`,subtitle:`${X.song.title} – ${X.song.artist}`,accent:"#ff6b9d"}),N&&a.jsx(W,{icon:"⚡",title:"Polarisierendster Song",value:`±${N.spread}`,subtitle:`${N.song.title} · Bewertungen von ${Math.min(...N.ratings)} bis ${Math.max(...N.ratings)}`,accent:"#f97316"}),z&&a.jsx(W,{icon:"🤝",title:"Einigster Song",value:`±${z.spread}`,subtitle:`${z.song.title} · Bewertungen von ${Math.min(...z.ratings)} bis ${Math.max(...z.ratings)}`,accent:"var(--green)"})]}),a.jsx("h3",{style:{marginBottom:14,fontSize:"1.1rem",color:"var(--gold)"},children:"📊 Durchschnitt pro Show"}),a.jsx("div",{style:{background:"linear-gradient(145deg, rgba(25,14,52,0.95) 0%, rgba(10,5,22,0.98) 100%)",border:"1px solid rgba(94,58,168,0.3)",borderRadius:18,padding:"16px 20px",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:Object.keys(jr).filter(R=>s.shows[R]&&V[R]).map(R=>{const S=V[R];return a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:14,padding:"8px 14px",background:"rgba(94,58,168,0.12)",border:"1px solid rgba(94,58,168,0.3)",borderRadius:10},children:[a.jsx("span",{style:{fontFamily:"var(--display)",fontWeight:700,fontSize:"0.85rem",color:"var(--ink)"},children:jr[R]}),a.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6},children:[a.jsx("span",{style:{fontFamily:"var(--number-font)",fontSize:"1.3rem",color:"var(--cyan)",textShadow:"0 0 8px rgba(34,211,238,0.4)"},children:S.avg.toFixed(2)}),a.jsxs("span",{style:{fontSize:"0.6rem",fontWeight:700,color:"var(--muted-dim)",letterSpacing:"0.1em",textTransform:"uppercase"},children:["Ø Pts / ",S.count," Bewertungen"]})]})]},R)})})}),v.length>0&&a.jsxs(a.Fragment,{children:[a.jsx("h3",{style:{margin:"28px 0 14px",fontSize:"1.1rem",color:"var(--gold)"},children:"🏆 Songs über 40 Punkte"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:12},children:v.map((R,S)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",background:"linear-gradient(145deg, rgba(80,50,20,0.25) 0%, rgba(15,8,32,0.95) 100%)",border:"1px solid rgba(255,209,102,0.4)",borderRadius:14,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.06), 0 2px 8px rgba(0,0,0,0.3)"},children:[a.jsx("div",{style:{fontFamily:"var(--number-font)",fontSize:"1.5rem",color:S===0?"#ffd166":"rgba(255,209,102,0.7)",minWidth:34,textAlign:"center",textShadow:S===0?"0 0 14px rgba(255,209,102,0.6)":"none"},children:S+1}),a.jsx(Ft,{cc:R.song.cc}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2,minWidth:0,flex:1},children:[a.jsx("span",{style:{fontFamily:"var(--display)",fontWeight:700,fontSize:"0.9rem",color:"var(--ink)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:R.song.title}),a.jsx("span",{style:{fontSize:"0.75rem",color:"var(--muted)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:R.song.artist})]}),a.jsx("div",{style:{fontFamily:"var(--number-font)",fontSize:"1.3rem",color:"var(--gold)",textShadow:"0 0 8px rgba(255,209,102,0.4)"},children:R.sum})]},R.song.id))})]}),v.length===0&&a.jsx("p",{className:"empty",style:{padding:"30px 0"},children:"Kein Song hat in diesem Jahr die 40-Punkte-Marke geknackt. 😐"})]})},g0=()=>{const s=ve(y.yearId),d=Ri(),c=!!(s.shows.sf1||s.shows.sf2),p=c?a.jsxs("div",{className:"tabs",style:{border:"none",margin:"18px 0"},children:[a.jsx("button",{className:y.ovSubTab==="semis"?"on":"",onClick:()=>B(N=>({...N,ovSubTab:"semis"})),children:"Semi-finals"}),a.jsx("button",{className:y.ovSubTab==="final"?"on":"",onClick:()=>B(N=>({...N,ovSubTab:"final"})),children:"Grand Final"})]}):null,g=N=>a.jsx("div",{style:{display:"flex",gap:3,marginBottom:8,justifyContent:N?"flex-end":"flex-start",padding:"0 2px"},children:e.jury.map((z,F)=>a.jsx("div",{style:{width:30,textAlign:"center",fontSize:"0.68rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.05em"},title:re(z.name),children:re(d[F])},z.id))}),v=N=>{const z=Ge(N);return a.jsx("div",{className:"ov-pts",children:e.jury.map(F=>{const M=z[F.id],G=M?gt(_t(M)):{};return a.jsx("span",{className:"ov-pt"+(M!=null?"":" none"),style:G,children:M??""},F.id)})})};if(y.ovSubTab==="final"||!c){const N=s.shows.final||[];return a.jsxs(a.Fragment,{children:[a.jsx("h2",{children:"Overview"}),a.jsx("p",{className:"hint",children:"Everyone's points side by side. Disqualified or non-qualifying countries are greyed out."}),p,a.jsxs("div",{className:"card",style:{marginTop:18},children:[a.jsx("h3",{style:{textAlign:"center",marginBottom:14,fontSize:"1.1rem"},children:"Grand Final"}),g(!1),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:N.map(z=>{const F=be(z.songId),M=z.dq;return a.jsxs("div",{className:"ov-row-item",children:[v(z),F?a.jsx("span",{className:"ov-pill"+(M?" out":""),children:a.jsxs("div",{className:"song-info",children:[a.jsx(Ft,{cc:F.cc}),a.jsx("span",{children:a.jsx("b",{children:re(F.title)})})]})}):a.jsx("span",{className:"ov-pill out",children:a.jsx("div",{className:"song-info",children:a.jsx("span",{children:"–"})})}),a.jsx("div",{style:{flexGrow:1}}),a.jsx("span",{className:"ov-place",children:z.place?z.place+".":"–"})]},z.id)})})]})]})}const x=(N,z,F)=>{const M=s.shows[N]||[];return a.jsxs("div",{className:"ov-column",children:[a.jsx("div",{className:"ov-col-title",children:z}),g(F),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:M.map(G=>{const X=be(G.songId),V=G.place&&G.place>10||G.dq,W=a.jsx("span",{className:"ov-place",children:G.place?G.place+".":"–"}),R=X?a.jsx("span",{className:"ov-pill"+(V?" out":""),children:a.jsxs("div",{className:"song-info",children:[a.jsx(Ft,{cc:X.cc}),a.jsx("span",{children:a.jsx("b",{children:re(X.title)})})]})}):a.jsx("span",{className:"ov-pill out",children:a.jsx("div",{className:"song-info",children:a.jsx("span",{children:"–"})})}),S=v(G);return a.jsx("div",{className:"ov-row-item",children:F?a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{flexGrow:1}}),W,R,S]}):a.jsxs(a.Fragment,{children:[S,R,a.jsx("div",{style:{flexGrow:1}}),W]})},G.id)})})]})};let I;return s.shows.sf1&&s.shows.sf2?I=a.jsxs(a.Fragment,{children:[x("sf1","Semi-final 1",!1),x("sf2","Semi-final 2",!0)]}):s.shows.sf1?I=x("sf1","Semi-final 1",!1):s.shows.sf2&&(I=x("sf2","Semi-final 2",!1)),a.jsxs(a.Fragment,{children:[a.jsx("h2",{children:"Overview"}),a.jsx("p",{className:"hint",children:"Everyone's points side by side. Disqualified or non-qualifying countries are greyed out."}),p,a.jsx("div",{className:"ov-grid-side",children:I})]})},h0=s=>{const d=ve(y.yearId),c=d.shows[s]||[],p=Ri(),g={};e.jury.forEach(E=>{g[E.id]=0}),c.forEach(E=>{if(E.songId){const m=Ge(E);e.jury.forEach(P=>{m[P.id]&&(g[P.id]+=m[P.id])})}});let v=-1,x=99999;for(const E in g)g[E]>v&&(v=g[E]),g[E]<x&&(x=g[E]);(v===x||v===0)&&(v=-1,x=99999);const I={};e.jury.forEach(E=>{I[E.id]={correct:0,totalGuessed:0}}),s!=="final"&&c.forEach(E=>{const m=Z(E),P=E.place!==void 0&&E.place!==null?E.place>10:null;P!==null&&e.jury.forEach(j=>{m[j.id]===!1&&(I[j.id].totalGuessed++,P===!0&&I[j.id].correct++)})});const N=a.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:e.jury.map(E=>{const m=g[E.id];let P="var(--cyan)";m===v&&(P="var(--green)"),m===x&&(P="#ffb3c1");let j=null;if(s!=="final"){const _=I[E.id],Q=_.totalGuessed>0&&_.correct===_.totalGuessed?"var(--gold)":"var(--muted)";j=a.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:700,borderLeft:"1px solid var(--line)",paddingLeft:8,color:Q},children:[_.correct," / ",_.totalGuessed," NQs"]})}return a.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:"1px solid rgba(94,58,168,0.4)",padding:"7px 16px",borderRadius:999,fontSize:"0.83rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:8,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[a.jsx("span",{style:{color:"var(--ink)"},children:re(E.name)}),a.jsxs("span",{style:{color:P},children:[m," pts"]}),j]},E.id)})});let z=c.slice();y.sortMode==="place"&&z.sort((E,m)=>{const P=be(E.songId),j=be(m.songId),_=E.autoFinal!==void 0?E.autoFinal:P&&["de","fr","it","es","gb","kr"].indexOf(P.cc)!==-1,Q=m.autoFinal!==void 0?m.autoFinal:j&&["de","fr","it","es","gb","kr"].indexOf(j.cc)!==-1;if(s!=="final"&&_!==Q)return _?-1:1;const q=E.place!==void 0&&E.place!==null?E.place:9999,ce=m.place!==void 0&&m.place!==null?m.place:9999;return q!==ce?q-ce:c.indexOf(E)-c.indexOf(m)});const F={};c.forEach(E=>{E.place&&(F[E.place]=(F[E.place]||0)+1)});const M=null,G=a.jsxs("div",{className:"tabs tabs-small edle-slider",style:{margin:0},children:[a.jsx("button",{className:y.sortMode==="order"?"on":"",onClick:()=>B(E=>({...E,sortMode:"order"})),children:"Order"}),a.jsx("button",{className:y.sortMode==="place"?"on":"",onClick:()=>B(E=>({...E,sortMode:"place"})),children:"Placement"})]});let X=null;if(y.editMode&&z.length>1){d.splitAfter=d.splitAfter||{};const E=Math.floor(z.length/2),m=d.splitAfter[s]!==void 0?d.splitAfter[s]:E;X=a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:"0.85rem",color:"var(--muted)",background:"var(--panel2-solid)",padding:"5px 12px",borderRadius:999,border:"1px solid var(--line)"},children:[a.jsx("span",{children:"1. Hälfte bis Nr.:"}),a.jsx("input",{type:"number",min:"1",max:z.length-1,value:m,onChange:P=>{ue(j=>({...j,years:j.years.map(_=>_.id===y.yearId?{..._,splitAfter:{..._.splitAfter||{},[s]:parseInt(P.target.value)||1}}:_)}))},style:{width:58,height:34,textAlign:"center",fontWeight:700,padding:0}})]})}const V=d.showDates&&d.showDates[s]||null,W=d.showDates&&d.showDates[s+"Time"]||"21:00";V&&((E,m)=>{if(!E)return"";const P=new Date(E+"T00:00:00");if(isNaN(P))return"";const j=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"];return P.getDate()+". "+j[P.getMonth()]+" "+P.getFullYear()+" · "+m+" Uhr"})(V,W);const S=a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"18px 0 16px",flexWrap:"wrap",gap:14},children:[a.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap",flex:1,justifyContent:"flex-start"},children:[M,X]}),a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:"auto"},children:N}),a.jsx("div",{style:{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap",flex:1,justifyContent:"flex-end"},children:G})]}),h=[],T=[];d.splitAfter=d.splitAfter||{};const A=d.splitAfter[s]!==void 0?d.splitAfter[s]:Math.floor(z.length/2);for(let E=0;E<z.length;E++){const m=z[E],P=E+1,j=c.indexOf(m),_={item:m,index:j!==-1?j:E};P>A&&y.sortMode==="order"||y.sortMode==="place"&&E>=Math.ceil(z.length/2)?T.push(_):h.push(_)}const K=E=>{const m=E.item,P=E.index,j=be(m.songId),_=Ge(m),Q=Z(m),q=m.autoFinal!==void 0?m.autoFinal:j&&["de","fr","it","es","gb","kr"].indexOf(j.cc)!==-1;m.place!==void 0&&m.place!==null&&m.place<=10;let ce;if(le(m.songId))ce=a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"tiles",children:a.jsx("div",{className:"tile",style:{width:196,height:50,background:"linear-gradient(135deg, rgba(255,77,109,0.25) 0%, rgba(80,15,30,0.6) 100%)",border:"2.5px solid rgba(255,77,109,0.7)",borderRadius:12,color:"#ffb3c1",fontFamily:"var(--display)",fontSize:"0.85rem",fontWeight:800,letterSpacing:"0.12em",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 14px rgba(255,77,109,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",cursor:"default",pointerEvents:"none",flexShrink:0},title:"Boykott – keine Punkte",children:"🚫 BOYKOTT"})}),a.jsxs("div",{className:"avg",style:{visibility:"hidden"},children:[a.jsx("b",{children:"–"}),a.jsx("small",{children:"AVG"})]})]});else if(s!=="final"&&q)ce=a.jsx("div",{className:"tiles",children:a.jsx("div",{className:"tile aq-tile",title:"Auto Qualifier – direkt fürs Finale gesetzt",style:{width:196},children:a.jsx("div",{className:"tile-value",children:"AQ"})})});else{const bn=e.jury.map(Pe=>_[Pe.id]).filter(Pe=>Pe),ga=bn.reduce((Pe,Br)=>Pe+Br,0),yn=bn.length?ga/bn.length:null,ts=e.jury.map((Pe,Br)=>{const Lt=_[Pe.id],Zt=D||Pe.id===r,Sr=Q[Pe.id],rs=Pe.id===r||D,ha=m.place!==void 0&&m.place!==null?m.place<=10:null,M0="tile"+(Zt?" me":"")+(Lt!=null?"":" empty")+(Zt?"":" readonly"),D0=Lt?gt(_t(Lt)):{},O0=m.songId?"rating_"+m.songId+"_"+Pe.id:"",A0=p[Br];let Wr={};return s!=="final"&&(Sr===!1?ha===null?Wr={background:"linear-gradient(135deg, #6b7280, #4b5563)",color:"#fff",boxShadow:"0 0 8px rgba(107,114,128,0.5)"}:ha===!1?Wr={background:"linear-gradient(135deg, #4ade80, #16a34a)",color:"#000",boxShadow:"0 0 8px rgba(74,222,128,0.5)"}:Wr={background:"linear-gradient(135deg, #ff4d6d, #dc2626)",color:"#fff",boxShadow:"0 0 8px rgba(255,77,109,0.5)"}:ha===!1?Wr={background:"linear-gradient(135deg, #ff4d6d, #dc2626)",color:"#fff",boxShadow:"0 0 8px rgba(255,77,109,0.5)"}:ha===!0&&(Wr={background:"linear-gradient(135deg, #4ade80, #16a34a)",color:"#000",boxShadow:"0 0 8px rgba(74,222,128,0.5)"})),a.jsxs("div",{style:{position:"relative",width:46,height:50},children:[a.jsx("button",{className:M0,"data-flash-key":O0||void 0,style:{...D0,position:"absolute",inset:0,width:"100%",height:"100%",zIndex:1},onClick:()=>Zt?se("rating",{eId:m.id,jurId:Pe.id}):void 0,title:Zt?`Punkte: ${Pe.name}`:re(Pe.name),children:a.jsx("div",{className:"tile-value",style:{position:"relative",zIndex:1},children:Lt??"–"})}),s!=="final"&&a.jsx("div",{onClick:B0=>{B0.stopPropagation(),y.tab!=="battle"&&y.tab!=="sb"&&y.tab!=="stats"&&rs&&Au(m.id,Pe.id)},style:{position:"absolute",bottom:2,right:2,zIndex:10,width:16,height:16,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--body)",fontSize:"0.5rem",fontWeight:900,cursor:rs?"pointer":"default",boxShadow:"0 1px 3px rgba(0,0,0,0.6)",border:"1px solid rgba(255,255,255,0.15)",...Sr!==void 0?Wr:{background:"rgba(0,0,0,0.4)",color:"rgba(255,255,255,0.4)"}},title:Sr!==void 0?"NQ Tipp ändern":"Als NQ markieren",children:A0})]},Pe.id)});ce=a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"tiles",style:{gap:4},children:ts}),a.jsxs("div",{className:"avg",children:[a.jsx("b",{children:yn==null?"–":yn.toFixed(1)}),a.jsx("small",{children:"AVG"})]})]})}const ge=s!=="final"&&q?a.jsx("span",{className:"autofinal",title:"Auto Qualifier",children:"AQ"}):null,he=m.place!==void 0&&m.place!==null?m.place:"",He=m.customNo!==void 0&&m.customNo!==null&&m.customNo!==""?parseFloat(m.customNo):Hn(m.id),et=He%1!==0?"➔":He;let lt=s!=="final"&&m.place!==void 0&&m.place!==null&&m.place>10;s==="final"&&(lt=!1);const St=le(m.songId);let Qe=(m.place===1?" winner":"")+(lt?" out":"")+(m.dq?" dq":"")+(s!=="final"&&q&&m.place!==1?" autofinal-row":"");s!=="final"&&q&&!lt&&(Qe+=" aq-row");const ht=y.editMode?a.jsxs("div",{className:"sm-group",children:[a.jsx("button",{className:"ghost sm",onClick:()=>Gu(s,P),children:"▲"}),a.jsx("button",{className:"ghost sm",onClick:()=>Qu(s,P),children:"▼"}),a.jsx("button",{className:"ghost sm",onClick:()=>se("picker",{entryId:m.id}),children:"Change"}),a.jsx("button",{className:"ghost sm danger",onClick:()=>qu(m.id),children:m.dq?"Undq":"DQ"})]}):null,R0=j?a.jsxs("div",{className:"meta",children:[a.jsxs("span",{children:[a.jsx("b",{children:re(j.title)})," – ",re(j.artist)]}),ge,ht]}):a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("button",{className:"primary sm",onClick:()=>se("picker",{entryId:m.id}),children:"＋ Song"}),ht]}),F0=s!=="final"&&q?a.jsxs("div",{className:"pl",style:{opacity:0,pointerEvents:"none"},children:[a.jsx("input",{type:"number",disabled:!0}),a.jsx("small",{children:"PLACE"})]}):a.jsxs("div",{className:"pl",children:[a.jsx("input",{type:"number",min:"1",max:z.length,placeholder:"–",value:he,className:m.place&&F[m.place]>1?"dup":"",disabled:!j,onChange:bn=>{const ga=parseInt(bn.target.value);ue(yn=>({...yn,years:yn.years.map(Pe=>{const Br={};for(const Lt in Pe.shows)Br[Lt]=Pe.shows[Lt].map(Zt=>{if(Zt.id!==m.id)return Zt;const Sr={...Zt};return ga>0?Sr.place=ga:delete Sr.place,Sr});return{...Pe,shows:Br}})}))},"aria-label":"Place"}),a.jsx("small",{children:"PLACE"})]}),es=j&&j.cc?{"--flag-url":`url('https://flagcdn.com/${j.cc}.svg')`}:{};St&&m.place!==1&&(es.filter="grayscale(0.6)");const _0=j&&j.cc?a.jsx("div",{className:"cc-code",children:re(Tn(j.cc))}):null;return a.jsxs("div",{className:"row "+Qe,style:es,children:[_0,a.jsx("div",{className:"no",onClick:()=>se("editNo",{eId:m.id}),title:"Change order/status",children:re(et)}),a.jsx("div",{className:"row-content",children:R0}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{className:"stats",children:ce}),F0]})]},m.id)},J=y.editMode?a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:()=>Ku(s),children:"＋ Running Order"}),a.jsx("button",{className:"ghost",onClick:()=>Ju(s),children:"− Remove Last"})]}):null;return a.jsxs(a.Fragment,{children:[S,a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",color:"var(--muted)",fontWeight:700,fontSize:"0.78rem",padding:"0 4px",margin:"14px 0 8px",letterSpacing:"0.08em",textTransform:"uppercase"},children:[a.jsx("div",{children:"1st Half"}),a.jsx("div",{children:"2nd Half"})]}),a.jsxs("div",{className:"list",style:{marginTop:0},children:[a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:h.map(E=>K(E))}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:T.map(E=>K(E))})]}),J]})},m0=()=>{const c=(ve(y.yearId).shows.final||[]).filter(V=>be(V.songId)&&!V.dq);c.sort((V,W)=>{const R=V.place!==void 0&&V.place!==null?V.place:9999,S=W.place!==void 0&&W.place!==null?W.place:9999;return R-S});const p=!!e.battleHidden,g=D?"j3":r,v=[...e.jury].sort((V,W)=>V.id.localeCompare(W.id)),x={};e.jury.forEach(V=>{const W={};c.forEach(R=>{const S=(e.pred[R.id]||{})[V.id];S&&(W[S]=(W[S]||0)+1)}),x[V.id]=W});const I={};e.jury.forEach(V=>{I[V.id]={sum:0,count:0}});const N=c.map(V=>{const W=be(V.songId),R=e.pred[V.id]||{},S=V.place,h=v.map(J=>{const E=R[J.id],m=J.id===g;if(p&&!m)return a.jsx("td",{style:{textAlign:"center"},children:a.jsx("span",{className:"hidden-pred",children:"•••"})},"guess-"+J.id);const j=E??"",_=E&&x[J.id][E]>1,Q=D||m;return a.jsx("td",{className:"col-tipp",children:(()=>{const q=parseInt(j),ce=q===1?" podium-1":q===2?" podium-2":q===3?" podium-3":"",ge="battle-input"+(_?" dup":"")+ce,he=!Q,He=he&&!ce?{background:"transparent",border:"1px solid transparent",width:45,height:34,fontSize:"1rem"}:{width:45,height:34,fontSize:"1rem",opacity:he?.8:1};return a.jsx("input",{type:"number",min:"1",max:c.length,value:j,className:ge,readOnly:!Q,disabled:!Q,onChange:et=>{const lt=parseInt(et.target.value);ue(St=>{const Qe={...St,pred:{...St.pred}};return Qe.pred[V.id]={...Qe.pred[V.id]||{}},lt>0?Qe.pred[V.id][J.id]=lt:delete Qe.pred[V.id][J.id],Qe})},style:He})})()},"guess-"+J.id)}),T=v.map(J=>{const E=R[J.id];let m=a.jsx("span",{style:{color:"var(--muted)"},children:"–"});if(E!=null&&S!==void 0&&S!==null){const P=Math.abs(E-S);I[J.id].sum+=P,I[J.id].count++,P===0?m=a.jsx("span",{className:"battle-diff-cell",style:gt(_t(10)),children:"🎯"}):m=a.jsx("span",{className:"battle-diff-cell",style:gt(gd(P)),children:P})}return a.jsx("td",{className:"col-abw",children:m},"diff-"+J.id)}),A=S??"–",K=W&&W.cc?{"--flag-url":`url('https://flagcdn.com/${W.cc}.svg')`}:{};return a.jsxs("tr",{children:[a.jsxs("td",{style:{...K,position:"relative",overflow:"hidden",padding:0,borderBottom:"1px solid var(--line)"},children:[a.jsx("div",{style:{position:"absolute",left:0,top:"4px",bottom:"4px",width:"200px",backgroundImage:"var(--flag-url)",backgroundSize:"cover",backgroundPosition:"center",maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",opacity:.65,pointerEvents:"none",zIndex:0,borderRadius:"6px"}}),W&&a.jsx("div",{className:"cc-code",style:{position:"absolute",left:38,top:"50%",transform:"translateY(-50%)",zIndex:1,margin:0},children:re(Tn(W.cc))}),a.jsx("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"flex-end",textAlign:"right",padding:"8px 10px",minHeight:54},children:W?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"sb-title",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.9rem"},children:re(W.title)}),a.jsx("div",{className:"sb-artist",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.75rem"},children:re(W.artist)})]}):null})]}),h,T,a.jsx("td",{className:"col-place",style:{textAlign:"center",verticalAlign:"middle"},children:a.jsx("input",{type:"number",min:"1",max:c.length,value:A==="–"?"":A,onChange:J=>{const E=parseInt(J.target.value);ue(m=>({...m,years:m.years.map(j=>{if(j.id!==y.yearId)return j;const _={...j.shows};return _.final=_.final.map(Q=>{if(Q.id!==V.id)return Q;const q={...Q};return E>0?q.place=E:delete q.place,q}),{...j,shows:_}})}))},className:"battle-input"+(parseInt(A)===1?" podium-1":parseInt(A)===2?" podium-2":parseInt(A)===3?" podium-3":""),style:{width:45,height:38,fontSize:"1.2rem",fontWeight:700,color:"var(--gold)",background:"linear-gradient(180deg, #2b1e0a 0%, #1a1106 50%, #0a0702 100%)",border:"1.5px solid rgba(255,209,102,0.55)",borderRadius:8,padding:0}})})]},V.id)}),z=[];e.jury.forEach(V=>{I[V.id].count>0&&z.push({name:V.name,sum:I[V.id].sum,count:I[V.id].count,id:V.id})}),z.sort((V,W)=>V.sum-W.sum);let F;if(z.length>0){const V=z[0],W=["🥈","🥉"];F=a.jsxs("div",{style:{marginTop:24},children:[a.jsxs("div",{className:"battle-podium-winner",children:[a.jsx("div",{className:"medal",children:"🥇"}),a.jsx("div",{className:"name",children:re(V.name)}),a.jsx("div",{className:"score",children:V.sum}),a.jsxs("div",{className:"label",children:["🎯 Winner · ",V.count," Tipps verglichen"]})]}),z.length>1&&a.jsx("div",{className:"battle-runner-ups",children:z.slice(1).map((R,S)=>{const h=S<2?W[S]:null,T=S===0?"2nd Place":S===1?"3rd Place":S+2+"th Place";return a.jsxs("div",{className:"battle-runner-up",children:[h?a.jsx("div",{className:"medal",children:h}):a.jsx("div",{className:"medal",style:{fontFamily:"var(--number-font)",fontSize:"1.5rem",color:"var(--muted)"},children:S+2}),a.jsx("div",{className:"name",children:re(R.name)}),a.jsx("div",{className:"score",children:R.sum}),a.jsx("div",{className:"label",children:T})]},R.id)})})]})}else F=a.jsx("p",{className:"empty",style:{padding:"30px 0"},children:"Trage die Tipps und tatsächlichen Plätze ein, um das Leaderboard zu sehen."});const M=a.jsx("button",{onClick:Fu,style:{padding:"7px 16px",fontSize:"0.85rem",fontWeight:700,...p?{background:"linear-gradient(135deg,#ff2d95,#a855f7)",borderColor:"transparent",color:"#fff"}:{background:"var(--panel2-solid)",color:"var(--muted)"}},children:p?"👁️ Tipps anzeigen":"🙈 Tipps verbergen"}),G=a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12,marginBottom:20},children:[a.jsxs("div",{children:[a.jsx("h2",{style:{margin:"0 0 4px"},children:"Predictions"}),a.jsx("p",{className:"hint",style:{margin:0},children:"Trage die Tipps ein — die Abweichung siehst du rechts. 🎯 = Volltreffer."})]}),a.jsx("div",{children:M})]}),X=a.jsxs("tr",{children:[a.jsx("th",{style:{paddingLeft:15},children:"Song"}),v.map(V=>a.jsx("th",{className:"c col-tipp",children:re(V.name)},"h-g-"+V.id)),v.map(V=>a.jsx("th",{className:"c col-abw",children:re(V.name)},"h-d-"+V.id)),a.jsx("th",{className:"c col-place",children:"Platz"})]});return a.jsxs(a.Fragment,{children:[G,c.length?a.jsxs("div",{style:{maxWidth:1250,margin:"0 auto"},children:[a.jsxs("table",{className:"sb-table battle-table",style:{width:"100%",tableLayout:"fixed"},children:[a.jsx("thead",{children:X}),a.jsx("tbody",{children:N})]}),F]}):a.jsx("p",{className:"empty",children:"Bitte wähle zuerst Songs für das Grand Final aus."})]})},x0=()=>{const s=ve(y.yearId);let d=y.sbShow;d!=="all"&&!s.shows[d]&&(d=s.shows.final?"final":Object.keys(s.shows)[0]);let c=[];if(d==="all"){const S=new Set;for(const h in s.shows)(s.shows[h]||[]).forEach(T=>{T.songId&&!S.has(T.songId)&&(S.add(T.songId),c.push(T))})}else c=s.shows[d]||[];const p=c.map(S=>{const h=be(S.songId);if(!h||S.dq)return null;const T=Ge(S),A=e.jury.map(J=>T[J.id]).filter(J=>J),K=A.reduce((J,E)=>J+E,0);return{e:S,s:h,r:T,avg:A.length?K/A.length:null,sum:K,place:S.place}}).filter(Boolean),g=[...p].sort((S,h)=>(h.avg!==null?h.avg:-1)-(S.avg!==null?S.avg:-1));let v=1;g.forEach((S,h)=>{h>0&&S.avg!==g[h-1].avg&&v++,S.ratingRank=v}),y.sbSort==="ratings"?p.sort((S,h)=>(h.avg!==null?h.avg:-1)-(S.avg!==null?S.avg:-1)):p.sort((S,h)=>{const T=J=>{if(d!=="all")return J.e.place||9999;let E=null,m=null;if(s.shows.final){const P=s.shows.final.find(j=>j.songId===J.s.id);P&&P.place&&(E=P.place)}if(s.shows.sf1){const P=s.shows.sf1.find(j=>j.songId===J.s.id);P&&P.place&&(m=P.place)}if(!m&&s.shows.sf2){const P=s.shows.sf2.find(j=>j.songId===J.s.id);P&&P.place&&(m=P.place)}return E||(m?m+1e3:9999)},A=T(S),K=T(h);return A!==K?A-K:(h.avg!==null?h.avg:-1)-(S.avg!==null?S.avg:-1)});const x=Ri(),I={},N={};e.jury.forEach(S=>{I[S.id]=0,N[S.id]={correct:0,totalGuessed:0}}),c.forEach(S=>{if(S.songId){const h=Ge(S);e.jury.forEach(T=>{h[T.id]&&(I[T.id]+=h[T.id])})}}),(d==="all"?["sf1","sf2"]:[d]).forEach(S=>{(s.shows[S]||[]).forEach(T=>{const A=Z(T),K=T.place!==void 0&&T.place!==null?T.place>10:null;K!==null&&e.jury.forEach(J=>{A[J.id]===!1&&(N[J.id].totalGuessed++,K===!0&&N[J.id].correct++)})})});let F=-1,M=99999;for(const S in I)I[S]>F&&(F=I[S]),I[S]<M&&(M=I[S]);(F===M||F===0)&&(F=-1,M=99999);const G=a.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",justifyContent:"center",marginTop:16},children:e.jury.map(S=>{const h=I[S.id];let T="var(--cyan)";h===F&&(T="var(--green)"),h===M&&(T="#ffb3c1");let A=null;if(d!=="final"){const K=N[S.id],J=K.totalGuessed>0&&K.correct===K.totalGuessed?"var(--gold)":"var(--muted)";A=a.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:700,borderLeft:"1px solid var(--line)",paddingLeft:8,color:J},children:[K.correct," / ",K.totalGuessed," NQs"]})}return a.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:"1px solid rgba(94,58,168,0.4)",padding:"7px 16px",borderRadius:999,fontSize:"0.83rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:8,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[a.jsx("span",{style:{color:"var(--ink)"},children:re(S.name)}),a.jsxs("span",{style:{color:T},children:[h," pts"]}),A]},S.id)})}),X=p.map((S,h)=>{const T=S.ratingRank,A=T===1?" sb-top1":T===2?" sb-top2":T===3?" sb-top3":"",K=le(S.s.id),J=[],E=[],m=Z(S.e);e.jury.forEach(_=>{const Q=S.r[_.id];if(Q){const ce=gt(_t(Q));J.push(a.jsx("span",{className:"cell",style:{...ce,display:"inline-block",margin:"0 2px",fontSize:"1.05rem",width:34,height:34,lineHeight:"30px",padding:0},children:Q},_.id))}else J.push(a.jsx("span",{className:"cell",style:{background:"var(--panel2-solid)",color:"var(--muted-dim)",display:"inline-block",margin:"0 2px",width:34,height:34,lineHeight:"30px",padding:0},children:"–"},_.id));m[_.id]===!1?E.push(a.jsx("span",{className:"cell",style:{background:"rgba(255,77,109,0.2)",color:"#ffb3c1",border:"1px solid rgba(255,77,109,0.4)",display:"inline-block",margin:"0 2px",fontSize:"0.85rem",padding:"2px 6px",width:34,height:34,lineHeight:"30px"},children:"NQ"},_.id)):E.push(a.jsx("span",{className:"cell",style:{background:"transparent",border:"1px dashed rgba(255,255,255,0.1)",color:"transparent",display:"inline-block",margin:"0 2px",fontSize:"0.85rem",padding:"2px 6px",width:34,height:34,lineHeight:"30px"},children:"-"},_.id))});let P="-";if(S.e.place!==void 0&&S.e.place!==null)if(d==="all"){let _=null;if(s.shows.sf1){const ce=s.shows.sf1.find(ge=>ge.songId===S.s.id);ce&&ce.place&&(_=ce.place)}if(!_&&s.shows.sf2){const ce=s.shows.sf2.find(ge=>ge.songId===S.s.id);ce&&ce.place&&(_=ce.place)}let Q=null;if(s.shows.final){const ce=s.shows.final.find(ge=>ge.songId===S.s.id);ce&&ce.place&&(Q=ce.place)}const q=[];_&&q.push(a.jsxs("span",{style:{fontSize:"0.65rem",color:"var(--muted)"},children:["SF: ",_,"."]},"sf")),Q&&q.push(a.jsxs("span",{style:{fontSize:"0.75rem",fontWeight:800,color:"var(--gold)"},children:["GF: ",Q,"."]},"gf")),q.length?P=a.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2,lineHeight:1.1},children:q}):P=S.e.place+"."}else P=S.e.place+".";const j={"--flag-url":`url('https://flagcdn.com/${S.s.cc}.svg')`,position:"relative",overflow:"hidden"};return a.jsxs("tr",{className:A,children:[a.jsx("td",{className:"sb-rank-cell",style:{textAlign:"center",padding:0},children:T}),a.jsxs("td",{style:{...j,padding:0},children:[a.jsx("div",{style:{position:"absolute",left:0,top:"4px",bottom:"4px",width:"200px",backgroundImage:"var(--flag-url)",backgroundSize:"cover",backgroundPosition:"center",maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",opacity:.65,pointerEvents:"none",zIndex:0,borderRadius:"6px"}}),a.jsxs("div",{style:{position:"relative",zIndex:1,display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"6px 10px"},children:[a.jsx("div",{className:"cc-code",style:{position:"static",transform:"none",margin:0},children:re(Tn(S.s.cc))}),a.jsxs("div",{className:"sb-song-info",style:{display:"flex",flexDirection:"column",alignItems:"flex-end",textAlign:"right",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:0},children:[a.jsxs("div",{className:"sb-title",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.9rem",display:"flex",alignItems:"center",gap:6},children:[K&&a.jsx("span",{style:{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.08em",color:"#ffb3c1",background:"rgba(255,77,109,0.18)",border:"1px solid rgba(255,77,109,0.5)",borderRadius:999,padding:"1px 6px",flexShrink:0},children:"🚫"}),a.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:re(S.s.title)})]}),a.jsx("div",{className:"sb-artist",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.75rem"},children:re(S.s.artist)})]})]})]}),a.jsx("td",{style:{textAlign:"left",paddingLeft:8,verticalAlign:"middle",whiteSpace:"nowrap",overflow:"hidden"},children:J}),a.jsx("td",{style:{textAlign:"left",paddingLeft:8,verticalAlign:"middle",whiteSpace:"nowrap",overflow:"hidden"},children:E}),a.jsx("td",{className:"sb-score-cell",children:a.jsx("b",{children:S.avg==null?"–":S.sum})}),a.jsx("td",{className:"sb-score-cell",children:a.jsx("b",{children:S.avg==null?"–":S.avg.toFixed(1)})}),a.jsx("td",{style:{textAlign:"center",width:50},children:P})]},S.e.id)}),V=a.jsx("div",{style:{display:"flex",justifyContent:"flex-start",gap:0,padding:0,marginLeft:-3},children:x.map((S,h)=>a.jsx("span",{style:{display:"inline-block",width:35,margin:"0 2px",textAlign:"center",fontSize:"0.7rem",color:"var(--muted)"},children:S},h))}),W=a.jsx("div",{style:{display:"flex",justifyContent:"flex-start",gap:0,padding:0,marginLeft:-3},children:x.map((S,h)=>a.jsx("span",{style:{display:"inline-block",width:35,margin:"0 2px",textAlign:"center",fontSize:"0.6rem",color:"var(--muted)"},children:S},h))}),R=a.jsxs("div",{className:"tabs edle-slider",style:{border:"none",margin:0,padding:4,borderRadius:999,display:"inline-flex",gap:4},children:[a.jsx("button",{className:y.sbSort==="ratings"?"on":"",style:{border:"none",margin:0},onClick:()=>B(S=>({...S,sbSort:"ratings"})),children:"Ratings"}),a.jsx("button",{className:y.sbSort==="placement"?"on":"",style:{border:"none",margin:0},onClick:()=>B(S=>({...S,sbSort:"placement"})),children:"Placement"})]});return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,maxWidth:1100,margin:"0 auto 14px"},children:[a.jsx("div",{children:p0()}),a.jsx("div",{children:R})]}),G,p.length?a.jsx("div",{style:{maxWidth:1250,margin:"0 auto"},children:a.jsxs("table",{className:"sb-table",style:{width:"100%",tableLayout:"fixed"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{textAlign:"center",width:35},children:"#"}),a.jsx("th",{style:{width:260},children:"Song"}),a.jsx("th",{className:"c",style:{width:176},children:V}),a.jsx("th",{className:"c",style:{width:176},children:W}),a.jsx("th",{className:"c",style:{width:80},children:"Total"}),a.jsx("th",{className:"c",style:{width:80},children:"Ø"}),a.jsx("th",{className:"c",style:{width:80},children:"Place"})]})}),a.jsx("tbody",{children:X})]})}):a.jsx("p",{className:"empty",children:"Nothing to show yet."})]})},b0=()=>{if(!u)return a.jsxs("div",{style:{paddingTop:18},children:[a.jsx("button",{className:"ghost",onClick:kr,children:"← Back"}),a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh",fontSize:"6rem",filter:"drop-shadow(0 0 24px rgba(255,209,102,0.6))"},children:"🔒"})]});const s=e.ratings||{};let d=null;const c={},p={},g={};e.jury.forEach(m=>{g[m.id]={sum:0,count:0}});const v={};for(const m in s){const P=be(m);if(!P)continue;const j=s[m];for(const _ in j){const Q=j[_];Q==null||Q<1||((!d||Q>d.value)&&(d={value:Q,juryId:_,songId:m,songTitle:P.title,songCc:P.cc,year:P.year}),Q===12&&(c[m]=(c[m]||0)+1,p[_]=(p[_]||0)+1),g[_]&&(g[_].sum+=Q,g[_].count++),v[m]||(v[m]={sum:0,count:0}),v[m].sum+=Q,v[m].count++)}}let x=null;for(const m in g){const P=g[m];if(P.count===0)continue;const j=P.sum/P.count;(!x||j>x.avg)&&(x={juryId:m,avg:j,count:P.count})}let I=null;for(const m in g){const P=g[m];if(P.count===0)continue;const j=P.sum/P.count;(!I||j<I.avg)&&(I={juryId:m,avg:j,count:P.count})}const N={};for(const m in s){const P=be(m);if(!P||le(m))continue;const j=s[m],_=Object.values(j).filter(Q=>Q!=null&&Q>=1);_.length&&(N[m]={sum:_.reduce((Q,q)=>Q+q,0),count:_.length,song:P})}const z=Object.values(N),F=z.filter(m=>m.sum>=40).sort((m,P)=>P.sum-m.sum),M=F.length,G=F[0]||null,X=z.filter(m=>m.sum>=35).length,V=z.filter(m=>m.sum<15).length;let W=null;for(const m in c){const P=c[m];if(!W||P>W.count){const j=be(m);if(!j)continue;W={songId:m,count:P,song:j}}}let R=null;for(const m in p){const P=p[m];(!R||P>R.count)&&(R={juryId:m,count:P})}const S={},h=e.jury.map(m=>m.id);for(let m=0;m<h.length;m++)for(let P=m+1;P<h.length;P++){const j=h[m],_=h[P];let Q=0,q=0;for(const ce in s){const ge=s[ce],he=ge[j],He=ge[_];he!=null&&He!==void 0&&He!==null&&(Q+=Math.abs(he-He),q++)}S[j+"-"+_]={a:j,b:_,avgDiff:q>0?Q/q:null,count:q}}const T=Object.values(S).filter(m=>m.avgDiff!==null);T.sort((m,P)=>m.avgDiff-P.avgDiff);const A=T[0]||null,K=T[T.length-1]||null,J=m=>m==null?"–":m.toFixed(2),E=({icon:m,title:P,value:j,subtitle:_,accent:Q})=>a.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:`1px solid ${Q||"rgba(94,58,168,0.4)"}`,borderRadius:18,padding:"18px 20px",display:"flex",flexDirection:"column",gap:6,boxShadow:Q?`inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 16px rgba(0,0,0,0.4), 0 0 16px ${Q}22`:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{fontSize:"1.4rem",filter:"drop-shadow(0 2px 6px rgba(0,0,0,0.5))"},children:m}),a.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,color:"var(--muted)",letterSpacing:"0.12em",textTransform:"uppercase"},children:P})]}),a.jsx("div",{style:{fontFamily:"var(--display)",fontSize:"1.4rem",fontWeight:800,color:Q||"var(--ink)",letterSpacing:"-0.01em",lineHeight:1.2,textShadow:Q?`0 0 12px ${Q}66`:"none"},children:j}),_&&a.jsx("div",{style:{fontSize:"0.78rem",color:"var(--muted)",fontWeight:500,lineHeight:1.35},children:_})]});return a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{paddingTop:18},children:a.jsxs("button",{onClick:kr,style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px 9px 14px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",fontWeight:700,fontSize:"0.85rem",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:m=>{m.currentTarget.style.transform="translateX(-2px)",m.currentTarget.style.borderColor="rgba(168,85,247,0.7)",m.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:m=>{m.currentTarget.style.transform="translateX(0)",m.currentTarget.style.borderColor="rgba(148,94,255,0.35)",m.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[a.jsx("span",{style:{fontSize:"1rem",lineHeight:1},children:"←"})," Back"]})}),a.jsx("h2",{style:{margin:"24px 0 8px",fontSize:"2rem"},children:"📊 Statistiken"}),a.jsx("p",{className:"hint",style:{marginBottom:24},children:"Rekorde, Vergleiche und Kuriositäten aus allen bisherigen Bewertungen."}),a.jsx("h3",{style:{marginBottom:14,fontSize:"1.1rem",color:"var(--gold)"},children:"🏆 Rekorde"}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:14,marginBottom:32},children:[a.jsx(E,{icon:"💯",title:"Songs über 40 Pts",value:`${M} ${M===1?"Song":"Songs"}`,subtitle:M>0?`Höchster: ${G.song.title} (${G.sum})`:"Kein Song hat 40 Punkte erreicht",accent:"var(--gold)"}),a.jsx(E,{icon:"🎯",title:"Songs über 35 Pts",value:`${X} ${X===1?"Song":"Songs"}`,subtitle:`${V} ${V===1?"Song":"Songs"} unter 15 Punkten`,accent:"var(--cyan)"}),W&&a.jsx(E,{icon:"🎯",title:"Meiste 12er",value:`${W.count} × 12`,subtitle:`${W.song.title} – ${W.song.artist} (${W.song.cc.toUpperCase()}, ${W.song.year})`,accent:"var(--violet)"}),R&&a.jsx(E,{icon:"💜",title:"12er-König",value:`${R.count} × 12`,subtitle:`${We(R.juryId)} hat am häufigsten 12 Punkte vergeben`,accent:"var(--pink)"}),x&&a.jsx(E,{icon:"🎁",title:"Großzügigster Juror",value:`Ø ${J(x.avg)}`,subtitle:`${We(x.juryId)} · ${x.count} Bewertungen`,accent:"var(--green)"}),I&&a.jsx(E,{icon:"🧊",title:"Strengster Juror",value:`Ø ${J(I.avg)}`,subtitle:`${We(I.juryId)} · ${I.count} Bewertungen`,accent:"var(--cyan)"})]}),a.jsx("h3",{style:{marginBottom:14,fontSize:"1.1rem",color:"var(--cyan)"},children:"🔍 Jury-Vergleich"}),a.jsx("p",{className:"hint",style:{marginBottom:16},children:"Durchschnittliche Punkte-Differenz zwischen jedem Jury-Paar. Niedriger = ähnlicher Geschmack."}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:14,marginBottom:20},children:[A&&a.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(74,222,128,0.12) 0%, rgba(15,8,32,0.98) 100%)",border:"1.5px solid rgba(74,222,128,0.5)",borderRadius:18,padding:"16px 20px",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 0 20px rgba(74,222,128,0.15)"},children:[a.jsx("div",{style:{fontSize:"0.7rem",fontWeight:800,color:"var(--green)",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:4},children:"👯 Ähnlichster Geschmack"}),a.jsxs("div",{style:{fontFamily:"var(--display)",fontSize:"1.15rem",fontWeight:800,color:"#fff",marginBottom:4},children:[We(A.a)," & ",We(A.b)]}),a.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--muted)"},children:["Ø Differenz: ",a.jsx("b",{style:{color:"var(--green)"},children:J(A.avgDiff)})," · ",A.count," gemeinsame Songs"]})]}),K&&a.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(255,77,109,0.12) 0%, rgba(15,8,32,0.98) 100%)",border:"1.5px solid rgba(255,77,109,0.5)",borderRadius:18,padding:"16px 20px",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 0 20px rgba(255,77,109,0.15)"},children:[a.jsx("div",{style:{fontSize:"0.7rem",fontWeight:800,color:"#ffb3c1",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:4},children:"⚡ Unterschiedlichster Geschmack"}),a.jsxs("div",{style:{fontFamily:"var(--display)",fontSize:"1.15rem",fontWeight:800,color:"#fff",marginBottom:4},children:[We(K.a)," & ",We(K.b)]}),a.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--muted)"},children:["Ø Differenz: ",a.jsx("b",{style:{color:"#ffb3c1"},children:J(K.avgDiff)})," · ",K.count," gemeinsame Songs"]})]})]}),a.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(25,14,52,0.95) 0%, rgba(10,5,22,0.98) 100%)",border:"1px solid rgba(94,58,168,0.3)",borderRadius:18,padding:"16px 20px",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)",overflowX:"auto"},children:[a.jsx("div",{style:{fontFamily:"var(--display)",fontWeight:700,fontSize:"0.85rem",color:"var(--muted)",marginBottom:12,letterSpacing:"0.05em",textTransform:"uppercase"},children:"Alle Paare im Vergleich"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:10},children:T.map(m=>{let P,j,_;return m.avgDiff<1.5?(P="rgba(74,222,128,0.12)",j="rgba(74,222,128,0.4)",_="#4ade80"):m.avgDiff<3?(P="rgba(34,211,238,0.12)",j="rgba(34,211,238,0.4)",_="#22d3ee"):m.avgDiff<4.5?(P="rgba(255,209,102,0.12)",j="rgba(255,209,102,0.4)",_="#ffd166"):m.avgDiff<6?(P="rgba(249,115,22,0.12)",j="rgba(249,115,22,0.4)",_="#f97316"):(P="rgba(255,77,109,0.12)",j="rgba(255,77,109,0.4)",_="#ff4d6d"),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,padding:"8px 12px",background:P,border:`1px solid ${j}`,borderRadius:10},children:[a.jsxs("div",{style:{fontSize:"0.82rem",fontWeight:600,color:"var(--ink)"},children:[We(m.a)," ",a.jsx("span",{style:{color:"var(--muted-dim)",margin:"0 3px"},children:"·"})," ",We(m.b)]}),a.jsx("div",{style:{fontFamily:"var(--number-font)",fontSize:"1rem",color:_,textShadow:`0 0 8px ${j}`},children:J(m.avgDiff)})]},m.a+"-"+m.b)})})]})]})},y0=()=>{if(!u)return a.jsxs("div",{style:{paddingTop:18},children:[a.jsx("button",{className:"ghost",onClick:kr,children:"← Back"}),a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh",fontSize:"6rem",filter:"drop-shadow(0 0 24px rgba(255,209,102,0.6))"},children:"🔒"})]});const s=y.compareCc&&De[y.compareCc]?De[y.compareCc]:"",d=[];if(y.compareCc)for(const v of e.years){const x=[];for(const I in v.shows)for(const N of v.shows[I]){const z=be(N.songId);z&&z.cc===y.compareCc&&x.push({yearObj:v,showKey:I,showName:jr[I],entry:N,song:z})}if(x.length>0){let I=x.find(N=>N.showKey==="final")||x[0];d.push(I)}}d.sort((v,x)=>x.yearObj.year-v.yearObj.year);const c=d.map(v=>{const x=Ge(v.entry),I=e.jury.map(F=>x[F.id]).filter(F=>F),N=I.reduce((F,M)=>F+M,0),z=I.length?N/I.length:null;return a.jsxs("tr",{style:{borderBottom:"1px solid rgba(94,58,168,0.2)"},children:[a.jsx("td",{style:{padding:"16px 12px",verticalAlign:"middle"},children:a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("b",{style:{fontFamily:"var(--display)",fontSize:"1.1rem",color:"var(--ink)"},children:v.yearObj.year}),a.jsx("small",{style:{color:"var(--muted)",fontSize:"0.75rem",fontWeight:600},children:v.showName})]})}),a.jsx("td",{style:{padding:"16px 12px",verticalAlign:"middle"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx(Ft,{cc:v.song.cc}),a.jsx("b",{style:{fontFamily:"var(--display)",fontSize:"0.95rem",color:"var(--ink)"},children:re(v.song.title)})]})}),e.jury.map(F=>{const M=x[F.id];return a.jsx("td",{style:{padding:"16px 12px",textAlign:"center",verticalAlign:"middle"},children:M?a.jsx("span",{className:"cell",style:{...gt(_t(M)),display:"inline-block",margin:0},children:M}):a.jsx("span",{style:{color:"var(--muted-dim)"},children:"–"})},F.id)}),a.jsx("td",{style:{padding:"16px 12px",textAlign:"center",verticalAlign:"middle"},children:a.jsx("b",{style:{fontFamily:"var(--display)",fontSize:"1.1rem",color:"var(--cyan)"},children:z==null?"–":N})}),a.jsx("td",{style:{padding:"16px 12px",textAlign:"center",verticalAlign:"middle"},children:z==null?"–":a.jsx("span",{className:"cell",style:{...gt(_t(z)),display:"inline-block",margin:0,fontSize:"0.95rem"},children:z.toFixed(1)})})]},v.yearObj.id+"-"+v.showKey)}),p=e.jury.map(v=>a.jsx("th",{style:{textAlign:"center",padding:"14px 12px"},children:re(v.name)},v.id)),g=y.compareCc?c.length?a.jsx("div",{className:"tw",style:{marginTop:24,padding:"4px 12px",background:"linear-gradient(145deg, rgba(25,14,52,0.95) 0%, rgba(10,5,22,0.98) 100%)",border:"1px solid rgba(94,58,168,0.3)",boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[a.jsx("thead",{children:a.jsxs("tr",{style:{borderBottom:"1px solid rgba(94,58,168,0.4)"},children:[a.jsx("th",{style:{textAlign:"left",padding:"14px 12px"},children:"Year"}),a.jsx("th",{style:{textAlign:"left",padding:"14px 12px"},children:"Song"}),p,a.jsx("th",{style:{textAlign:"center",padding:"14px 12px"},children:"Total"}),a.jsx("th",{style:{textAlign:"center",padding:"14px 12px"},children:"Ø"})]})}),a.jsx("tbody",{children:c})]})}):a.jsx("div",{style:{background:"var(--panel)",border:"1px dashed rgba(148,94,255,0.3)",borderRadius:22,padding:60,textAlign:"center",marginTop:24},children:a.jsx("p",{className:"empty",style:{margin:0,fontSize:"1rem"},children:"Keine Einträge für dieses Land gefunden."})}):a.jsx("div",{style:{background:"var(--panel)",border:"1px dashed rgba(148,94,255,0.3)",borderRadius:22,padding:60,textAlign:"center",marginTop:24},children:a.jsx("p",{className:"empty",style:{margin:0,fontSize:"1rem"},children:"Wähle oben ein Land aus, um den historischen Vergleich zu sehen."})});return a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{paddingTop:18},children:a.jsxs("button",{onClick:kr,style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px 9px 14px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",fontWeight:700,fontSize:"0.85rem",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:v=>{v.currentTarget.style.transform="translateX(-2px)",v.currentTarget.style.borderColor="rgba(168,85,247,0.7)",v.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:v=>{v.currentTarget.style.transform="translateX(0)",v.currentTarget.style.borderColor="rgba(148,94,255,0.35)",v.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[a.jsx("span",{style:{fontSize:"1rem",lineHeight:1},children:"←"})," Back"]})}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20,margin:"24px 0 8px"},children:[a.jsx("h2",{style:{margin:0,fontSize:"2rem"},children:"Country Comparison"}),a.jsx("div",{style:{width:300,background:"var(--panel2)",borderRadius:16,border:"1px solid var(--line)",padding:4},children:a.jsx(fa,{value:s,onSelect:(v,x)=>B(I=>({...I,compareCc:v||null}))})})]}),a.jsx("p",{className:"hint",style:{marginBottom:24},children:"Vergleiche die Punkte und Platzierungen eines Landes über alle Jahre hinweg."}),g]})},v0=()=>{if(!u)return a.jsxs("div",{style:{paddingTop:18},children:[a.jsx("button",{className:"ghost",onClick:kr,children:"← Back"}),a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh",fontSize:"6rem",filter:"drop-shadow(0 0 24px rgba(255,209,102,0.6))"},children:"🔒"})]});const s=[];e.songs.forEach(p=>{p.year&&s.indexOf(p.year)===-1&&s.push(p.year)}),s.sort((p,g)=>g-p);const d=(y.q||"").toLowerCase(),c=e.songs.filter(p=>!((De[p.cc]+" "+p.artist+" "+p.title).toLowerCase().indexOf(d)===-1||y.libYear&&String(p.year)!==String(y.libYear)));return c.sort((p,g)=>De[p.cc].localeCompare(De[g.cc])),a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{paddingTop:18},children:a.jsxs("button",{onClick:kr,style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px 9px 14px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",fontWeight:700,fontSize:"0.85rem",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:p=>{p.currentTarget.style.transform="translateX(-2px)",p.currentTarget.style.borderColor="rgba(168,85,247,0.7)",p.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:p=>{p.currentTarget.style.transform="translateX(0)",p.currentTarget.style.borderColor="rgba(148,94,255,0.35)",p.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[a.jsx("span",{style:{fontSize:"1rem",lineHeight:1},children:"←"})," Back"]})}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20,margin:"24px 0 8px"},children:[a.jsx("h2",{style:{margin:0,fontSize:"2rem"},children:"Song Library"}),a.jsx("button",{className:"primary",onClick:()=>se("song",{id:null,assign:null}),style:{padding:"10px 24px",fontSize:"0.95rem"},children:"＋ New Song"})]}),a.jsx("p",{className:"hint",style:{marginBottom:24},children:"Durchsuche alle Songs, die jemals für das Scoreboard eingetragen wurden."}),a.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",marginBottom:24,background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",padding:16,borderRadius:18,border:"1px solid rgba(94,58,168,0.3)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[a.jsx("input",{id:"lib_search_input",placeholder:"Suche nach Titel, Artist oder Land...",value:y.q||"",onChange:p=>B(g=>({...g,q:p.target.value})),style:{flex:1,minWidth:220,background:"var(--panel2-solid)",border:"1px solid var(--line)",padding:"12px 18px",borderRadius:12}}),a.jsxs("select",{id:"lib_year_select",style:{width:160,background:"var(--panel2-solid)",border:"1px solid var(--line)",padding:"12px 18px",borderRadius:12,fontWeight:600},value:y.libYear||"",onChange:p=>B(g=>({...g,libYear:p.target.value})),children:[a.jsx("option",{value:"",children:"All Years"}),s.map(p=>a.jsx("option",{value:p,children:p},p))]})]}),c.length?a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:16},children:c.map(p=>a.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:"1px solid rgba(94,58,168,0.3)",borderRadius:16,padding:16,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)",display:"flex",flexDirection:"column",gap:12,transition:"transform 0.2s ease, border-color 0.2s ease"},onMouseEnter:g=>{g.currentTarget.style.transform="translateY(-2px)",g.currentTarget.style.borderColor="rgba(168,85,247,0.6)"},onMouseLeave:g=>{g.currentTarget.style.transform="translateY(0)",g.currentTarget.style.borderColor="rgba(94,58,168,0.3)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx(Ft,{cc:p.cc}),a.jsxs("span",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.05em",textTransform:"uppercase"},children:[re(De[p.cc])," ",p.year&&`· ${p.year}`]})]}),le(p.id)&&a.jsx("span",{style:{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.08em",color:"#ffb3c1",background:"rgba(255,77,109,0.18)",border:"1px solid rgba(255,77,109,0.5)",borderRadius:999,padding:"2px 8px"},children:"🚫 BOYKOTT"})]}),a.jsxs("div",{children:[a.jsx("div",{style:{fontFamily:"var(--display)",fontSize:"1.15rem",fontWeight:800,color:"var(--ink)",lineHeight:1.2,marginBottom:4},children:re(p.title)}),a.jsx("div",{style:{fontSize:"0.9rem",color:"var(--muted)",fontWeight:500},children:re(p.artist)})]}),a.jsxs("div",{style:{display:"flex",gap:8,marginTop:"auto",paddingTop:8},children:[a.jsx("button",{className:"ghost sm",style:{flex:1},onClick:()=>se("song",{id:p.id,assign:null}),children:"Edit"}),a.jsx("button",{className:"ghost sm danger",style:{flex:1},onClick:()=>Uu(p.id),children:"Delete"})]})]},p.id))}):a.jsx("p",{className:"empty",style:{padding:"40px 0",fontSize:"1rem"},children:"Keine Songs gefunden, die zu deiner Suche passen."})]})},fa=({value:s,onSelect:d})=>{const[c,p]=U.useState(s||""),[g,v]=U.useState(!1),[x,I]=U.useState(""),N=U.useRef(null),z=U.useRef(null);U.useEffect(()=>{p(s||"")},[s]),U.useEffect(()=>{const M=G=>{N.current&&!N.current.contains(G.target)&&v(!1)};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[]);const F=Va.filter(M=>M[1].toLowerCase().indexOf((c||"").toLowerCase())!==-1);return a.jsxs("div",{className:"search-dropdown-container",ref:N,children:[a.jsx("input",{ref:z,placeholder:"Land suchen...",value:c,autoComplete:"off",onChange:M=>{p(M.target.value),I(""),v(!0)},onFocus:()=>v(!0),onClick:()=>v(!0),style:{width:"100%"}}),a.jsx("div",{className:"search-dropdown-results"+(g?" active":""),children:F.length?F.map(M=>a.jsxs("div",{className:"search-dropdown-item",onMouseDown:G=>{G.preventDefault(),p(M[1]),I(M[0]),v(!1),d&&d(M[0],M[1])},children:[a.jsx(Ft,{cc:M[0]})," ",a.jsx("span",{children:re(M[1])})]},M[0])):a.jsx("div",{className:"search-dropdown-item",style:{color:"var(--muted)"},children:"Kein Land gefunden"})})]})},w0=()=>{if(!Y.open)return null;switch(Y.mode){case"alert":return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:re(Y.payload.title)}),a.jsx("p",{className:"hint",children:re(Y.payload.text)}),a.jsx("div",{className:"actions",children:a.jsx("button",{className:"primary",onClick:de,children:"OK"})})]});case"confirm":{const s=Y.payload.onYes;return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:re(Y.payload.title)}),a.jsx("p",{className:"hint",children:re(Y.payload.text)}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:de,children:"Cancel"}),a.jsx("button",{className:"primary",onClick:()=>{de(),s&&setTimeout(s,30)},children:"Confirm"})]})]})}case"newYear":return a.jsx(k0,{onSave:e0,onClose:de});case"editYear":{const s=ve(y.yearId);return s?a.jsx(S0,{year:s,onSaveAll:n0,onAddShow:Vu,onRemoveShow:Yu,onDelYear:$u,onClose:de}):null}case"editCity":{const s=ve(y.yearId);return s?a.jsx(j0,{year:s,onSave:t0,onClose:de}):null}case"editDates":{const s=ve(y.yearId);return s?a.jsx(C0,{year:s,onSave:r0,onClose:de}):null}case"editNo":{const s=vr(Y.payload.eId);return s?a.jsx(N0,{entry:s,songById:be,onSave:Xu,onClose:de}):null}case"picker":return a.jsx(z0,{entryId:Y.payload.entryId,S:e,CN:De,songById:be,onPick:s=>{const d=Y.payload.entryId;ue(c=>({...c,years:c.years.map(p=>{const g={};for(const v in p.shows)g[v]=p.shows[v].map(x=>x.id===d?{...x,songId:s}:x);return{...p,shows:g}})})),de(),setTimeout(()=>se("rating",{eId:d,jurId:r}),50)},onNewSong:()=>se("song",{id:null,assign:Y.payload.entryId}),onEditSong:s=>se("song",{id:s,assign:null}),onDeleteSong:s=>{ue(d=>({...d,songs:d.songs.filter(c=>c.id!==s)}))},onClose:de});case"song":{const s=Y.payload.id,d=Y.payload.assign,c=s?be(s):null,p=y.yearId?ve(y.yearId):null,g=c&&c.year?c.year:p&&p.year?p.year:new Date().getFullYear();return a.jsx(T0,{song:c,defaultYear:g,editId:s,assign:d,onSave:Zu,onClose:de,S:e,setS:t,save:kt})}case"rating":{const s=vr(Y.payload.eId);if(!s)return null;let d=null;for(const c of e.years){for(const p in c.shows)if(c.shows[p].find(g=>g.id===s.id)){d=c.id;break}if(d)break}return a.jsx(E0,{entry:s,jurId:Y.payload.jurId,S:e,me:r,jname:We,songById:be,getRatings:Ge,currentYearId:d,onSave:(c,p,g)=>{const v=vr(c),x=v&&v.songId?v.songId:c;ue(I=>{const N={...I,ratings:{...I.ratings}};if(g===12&&d){const z=I.years.find(F=>F.id===d);if(z)for(const F in z.shows)for(const M of z.shows[F])M.songId&&M.songId!==x&&N.ratings[M.songId]&&N.ratings[M.songId][p]===12&&(N.ratings[M.songId]={...N.ratings[M.songId]},delete N.ratings[M.songId][p])}return N.ratings[x]={...N.ratings[x]||{}},g===null?delete N.ratings[x][p]:N.ratings[x][p]=g,N}),de()},onClose:de})}case"settings":return a.jsx(I0,{S:e,currentUser:u,isRealAdmin:i,adminViewOff:l,setAdminViewOff:f,onSaveNames:a0,onImport:o0,onExport:l0,onOpenJson:()=>se("json"),onClose:de,showToast:oe,autoHardReset:ee,updateS:ue});case"json":return a.jsx(P0,{S:e,onSave:i0,onBack:()=>se("settings"),onClose:de});default:return null}},k0=({onSave:s,onClose:d})=>{const[c,p]=U.useState(new Date().getFullYear()),[g,v]=U.useState(""),[x,I]=U.useState("");return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Add New Contest"}),a.jsxs("label",{children:["Year",a.jsx("input",{type:"number",value:c,onChange:N=>p(N.target.value)})]}),a.jsxs("label",{children:["Suffix (optional)",a.jsx("input",{placeholder:"e.g. Junior or Asia",value:g,onChange:N=>v(N.target.value)})]}),a.jsxs("label",{children:["Host City",a.jsx("input",{value:x,onChange:N=>I(N.target.value)})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:d,children:"Cancel"}),a.jsx("button",{className:"primary",onClick:()=>s({year:c,suffix:g,city:x}),children:"Create"})]})]})},S0=({year:s,onSaveAll:d,onAddShow:c,onRemoveShow:p,onDelYear:g,onClose:v})=>{const[x,I]=U.useState(s.city||""),[N,z]=U.useState(s.hostCc||""),[F,M]=U.useState(s.hostCc&&De[s.hostCc]||""),G=s.showDates||{},[X,V]=U.useState(G.sf1||""),[W,R]=U.useState(G.sf2||""),[S,h]=U.useState(G.final||""),[T,A]=U.useState(G.sf1Time||"21:00"),[K,J]=U.useState(G.sf2Time||"21:00"),[E,m]=U.useState(G.finalTime||"21:00"),P=()=>{d(x,N,{sf1:X,sf2:W,final:S,sf1Time:X?T:"",sf2Time:W?K:"",finalTime:S?E:""})},j=(_,Q,q,ce,ge)=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[a.jsx("label",{style:{margin:0},children:_}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8},children:[a.jsx("input",{type:"date",value:Q,onChange:he=>q(he.target.value)}),a.jsx("input",{type:"time",value:ce,onChange:he=>ge(he.target.value),style:{width:100,textAlign:"center"}})]})]});return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[a.jsx("h3",{style:{margin:0,fontSize:"1.4rem",textAlign:"center"},children:"Wettbewerb bearbeiten"}),a.jsxs("div",{style:{background:"rgba(0,0,0,0.2)",padding:16,borderRadius:16,border:"1px solid rgba(148,94,255,0.15)"},children:[a.jsx("h4",{style:{margin:"0 0 12px",color:"var(--gold)",fontSize:"0.9rem",letterSpacing:"0.05em",textTransform:"uppercase"},children:"Austragungsort"}),a.jsxs("label",{style:{position:"relative",zIndex:20,marginBottom:12},children:["Land (Flagge)",a.jsx(fa,{value:F,onSelect:(_,Q)=>{z(_),M(Q)}})]}),a.jsxs("label",{style:{marginBottom:0},children:["Stadt",a.jsx("input",{value:x,onChange:_=>I(_.target.value),placeholder:"z.B. Basel"})]})]}),a.jsxs("div",{style:{background:"rgba(0,0,0,0.2)",padding:16,borderRadius:16,border:"1px solid rgba(148,94,255,0.15)"},children:[a.jsx("h4",{style:{margin:"0 0 12px",color:"var(--gold)",fontSize:"0.9rem",letterSpacing:"0.05em",textTransform:"uppercase"},children:"Show-Daten"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[s.shows.sf1&&j("Semi-final 1",X,V,T,A),s.shows.sf2&&j("Semi-final 2",W,R,K,J),s.shows.final&&j("Grand Final",S,h,E,m)]})]}),a.jsxs("div",{style:{background:"rgba(255,77,109,0.05)",padding:16,borderRadius:16,border:"1px solid rgba(255,77,109,0.2)"},children:[a.jsx("h4",{style:{margin:"0 0 12px",color:"#ffb3c1",fontSize:"0.9rem",letterSpacing:"0.05em",textTransform:"uppercase"},children:"Shows & Aktionen"}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[s.shows.sf1?a.jsx("button",{className:"ghost sm danger",onClick:()=>p("sf1"),children:"− SF1"}):a.jsx("button",{className:"ghost sm",onClick:()=>c("sf1"),children:"＋ SF1"}),s.shows.sf2?a.jsx("button",{className:"ghost sm danger",onClick:()=>p("sf2"),children:"− SF2"}):a.jsx("button",{className:"ghost sm",onClick:()=>c("sf2"),children:"＋ SF2"}),s.shows.final?a.jsx("button",{className:"ghost sm danger",onClick:()=>p("final"),children:"− Final"}):a.jsx("button",{className:"ghost sm",onClick:()=>c("final"),children:"＋ Final"}),a.jsx("div",{style:{flexBasis:"100%",height:1,background:"rgba(255,255,255,0.1)",margin:"8px 0"}}),a.jsx("button",{className:"ghost sm danger",onClick:g,style:{width:"100%",justifyContent:"center"},children:"Kompletten Contest löschen"})]})]}),a.jsxs("div",{className:"actions",style:{marginTop:0,paddingTop:16},children:[a.jsx("button",{className:"ghost",onClick:v,style:{flex:1},children:"Schließen"}),a.jsx("button",{className:"primary",onClick:P,style:{flex:2,padding:"12px"},children:"Speichern"})]})]})},j0=({year:s,onSave:d,onClose:c})=>{const[p,g]=U.useState(s.city||""),[v,x]=U.useState(s.hostCc||""),[I,N]=U.useState(s.hostCc&&De[s.hostCc]||"");return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Host City & Country"}),a.jsxs("label",{style:{position:"relative",zIndex:20},children:["Country (Flagge)",a.jsx(fa,{value:I,onSelect:(z,F)=>{x(z),N(F)}})]}),a.jsxs("label",{style:{position:"relative",zIndex:1},children:["City",a.jsx("input",{value:p,onChange:z=>g(z.target.value)})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:c,children:"Cancel"}),a.jsx("button",{className:"primary",onClick:()=>d(p,v),children:"Save"})]})]})},C0=({year:s,onSave:d,onClose:c})=>{const p=s.showDates||{},[g,v]=U.useState(p.sf1||""),[x,I]=U.useState(p.sf2||""),[N,z]=U.useState(p.final||""),[F,M]=U.useState(p.sf1Time||"21:00"),[G,X]=U.useState(p.sf2Time||"21:00"),[V,W]=U.useState(p.finalTime||"21:00"),R=(S,h,T,A,K)=>a.jsxs("label",{children:[S,a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8},children:[a.jsx("input",{type:"date",value:h,onChange:J=>T(J.target.value)}),a.jsx("input",{type:"time",value:A,onChange:J=>K(J.target.value),style:{width:110,textAlign:"center"},title:"Uhrzeit (Standard: 21:00)"})]})]});return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Show-Daten"}),a.jsx("p",{className:"hint",style:{marginBottom:16},children:"Trage ein, wann welche Show stattfindet. Standard-Uhrzeit: 21:00 Uhr. Der Countdown auf der Startseite nutzt diese Zeit."}),s.shows.sf1&&R("Semi-final 1",g,v,F,M),s.shows.sf2&&R("Semi-final 2",x,I,G,X),s.shows.final&&R("Grand Final",N,z,V,W),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:c,children:"Cancel"}),a.jsx("button",{className:"primary",onClick:()=>d({sf1:g,sf2:x,final:N,sf1Time:g?F:"",sf2Time:x?G:"",finalTime:N?V:""}),children:"Save"})]})]})},N0=({entry:s,songById:d,onSave:c,onClose:p})=>{const g=d(s.songId),v=s.customNo!==void 0&&s.customNo!==null&&s.customNo!==""?s.customNo:Hn(s.id),x=s.autoFinal!==void 0?s.autoFinal:g&&["de","fr","it","es","gb","kr"].indexOf(g.cc)!==-1,[I,N]=U.useState(v),[z,F]=U.useState(x);return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Running Order & Status"}),a.jsxs("label",{children:["Custom Position / Number (z.B. 6 oder 6.5)",a.jsx("input",{value:I,onChange:M=>N(M.target.value)})]}),a.jsxs("label",{style:{flexDirection:"row",alignItems:"center",gap:12,marginTop:16,cursor:"pointer",background:"var(--panel2-solid)",padding:12,borderRadius:12,border:"1px solid var(--line)"},children:[a.jsx("input",{type:"checkbox",checked:z,onChange:M=>F(M.target.checked)}),a.jsx("span",{style:{color:"var(--ink)",fontWeight:600},children:"Auto Qualifier (AQ)"})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:p,children:"Cancel"}),a.jsx("button",{className:"primary",onClick:()=>c(s.id,I,z),children:"Save"})]})]})},z0=({entryId:s,S:d,CN:c,songById:p,onPick:g,onNewSong:v,onEditSong:x,onDeleteSong:I,onClose:N})=>{const[z,F]=U.useState(""),M=d.songs.filter(G=>(c[G.cc]+" "+G.artist+" "+G.title).toLowerCase().indexOf(z.toLowerCase())!==-1);return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Song Library"}),a.jsx("input",{placeholder:"Search...",value:z,onChange:G=>F(G.target.value),style:{width:"100%",marginBottom:12}}),a.jsx("div",{id:"plist",children:M.length?M.map(G=>a.jsxs("div",{className:"prow",children:[a.jsxs("button",{className:"pbtn",onClick:()=>g(G.id),children:[a.jsx(Ft,{cc:G.cc}),a.jsxs("span",{children:[a.jsx("b",{children:re(G.title)})," – ",re(G.artist)]})]}),a.jsx("button",{className:"ghost danger",onClick:()=>I(G.id),children:"Delete"})]},G.id)):a.jsx("p",{className:"empty",children:"No songs found."})}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:N,children:"Close"}),a.jsx("button",{className:"primary",onClick:v,children:"＋ New Song"})]})]})},T0=({song:s,defaultYear:d,editId:c,assign:p,onSave:g,onClose:v,S:x,setS:I,save:N})=>{const[z,F]=U.useState(s?s.cc:""),[M,G]=U.useState(s&&De[s.cc]||""),[X,V]=U.useState(s?s.artist:""),[W,R]=U.useState(s?s.title:""),[S,h]=U.useState(s&&s.year?s.year:d),[T,A]=U.useState(()=>!!(c&&x.boycotted&&x.boycotted[c])),[K,J]=U.useState(()=>!c||!x.ratings[c]?{}:{...x.ratings[c]}),E=(P,j)=>{const _=parseInt(j);J(Q=>{const q={...Q};return!_||_<1||_>10?delete q[P]:q[P]=_,q})},m=()=>{g({artist:X,title:W,cc:z,year:parseInt(S)||new Date().getFullYear(),editId:c,assign:p,boycotted:T}),c&&!T&&I(P=>{const j={...P,ratings:{...P.ratings}};return j.ratings[c]={...K},Object.keys(j.ratings[c]).length===0&&delete j.ratings[c],N(j),j})};return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:s?"Edit Song":"New Song"}),a.jsxs("label",{style:{position:"relative",zIndex:20},children:["Country",a.jsx(fa,{value:M,onSelect:(P,j)=>{F(P),G(j)}})]}),a.jsxs("label",{style:{position:"relative",zIndex:1},children:["Artist",a.jsx("input",{value:X,onChange:P=>V(P.target.value)})]}),a.jsxs("label",{style:{position:"relative",zIndex:1},children:["Song Title",a.jsx("input",{value:W,onChange:P=>R(P.target.value)})]}),a.jsxs("label",{style:{position:"relative",zIndex:1},children:["Year",a.jsx("input",{type:"number",value:S,onChange:P=>h(P.target.value)})]}),c&&a.jsxs("label",{style:{flexDirection:"row",alignItems:"center",gap:12,marginTop:16,marginBottom:8,cursor:"pointer",background:T?"rgba(255,77,109,0.1)":"var(--panel2-solid)",padding:12,borderRadius:12,border:T?"1px solid rgba(255,77,109,0.6)":"1px solid var(--line)",transition:"all 0.2s ease"},children:[a.jsx("input",{type:"checkbox",checked:T,onChange:P=>A(P.target.checked)}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[a.jsx("span",{style:{color:T?"#ffb3c1":"var(--ink)",fontWeight:700},children:"🚫 Boykott – keine Punkte"}),a.jsx("span",{style:{fontSize:"0.75rem",color:"var(--muted)",fontWeight:500},children:"Dieser Song bekommt von uns keine Punkte und wird überall als boykottiert markiert."})]})]}),c&&!T&&a.jsxs(a.Fragment,{children:[a.jsx("hr",{style:{border:0,borderTop:"1px solid var(--line)",margin:"20px 0 16px"}}),a.jsxs("div",{style:{marginBottom:14},children:[a.jsx("div",{style:{fontFamily:"var(--display)",fontWeight:700,fontSize:"0.9rem",color:"var(--ink)",marginBottom:8},children:"Punkte (global für diesen Song)"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:10},children:x.jury.map(P=>{const j=K[P.id];return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[a.jsx("label",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.05em",textTransform:"uppercase",margin:0},children:re(P.name)}),a.jsx("input",{type:"number",min:"1",max:"10",placeholder:"–",value:j!==void 0?j:"",onChange:_=>E(P.id,_.target.value),style:{width:"100%",textAlign:"center",fontFamily:"var(--number-font)",fontSize:"1.4rem",color:"var(--gold)",background:"linear-gradient(180deg, #2b1e0a 0%, #1a1106 50%, #0a0702 100%)",border:"1.5px solid rgba(255, 209, 102, 0.55)",borderRadius:12,padding:"8px 0",boxShadow:"inset 0 1px 0 rgba(255, 230, 150, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.7), 0 0 14px rgba(255, 209, 102, 0.08)"}})]},P.id)})})]})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:v,children:"Cancel"}),a.jsx("button",{className:"primary",onClick:m,children:"Save"})]})]})},E0=({entry:s,jurId:d,S:c,me:p,jname:g,songById:v,getRatings:x,onSave:I,onClose:N,currentYearId:z})=>{const F=v(s.songId),M=x(s),G=D?d||"j3":p,X=M[G],V=g(G),W=!!(s.songId&&c.boycotted&&c.boycotted[s.songId]),[R,S]=U.useState(X??null);if(U.useEffect(()=>{if(!D)return;const A=K=>{if(K.target.tagName==="INPUT"||K.target.tagName==="TEXTAREA")return;let J=K.key;J==="0"&&(J="10");const E=parseInt(J);E>=1&&E<=10&&(S(E),setTimeout(()=>{I(s.id,G,E)},150))};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[p,s.id,G,I]),!F)return null;if(W)return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{textAlign:"center",marginBottom:20},children:[a.jsx("div",{style:{marginBottom:12,transform:"scale(1.8)",display:"inline-block",filter:"drop-shadow(0 4px 12px rgba(0,0,0,0.5))"},children:a.jsx(Ft,{cc:F.cc})}),a.jsx("h2",{style:{margin:"10px 0 4px",fontSize:"1.7rem"},children:re(F.title)}),a.jsxs("p",{style:{color:"var(--muted)",margin:0,fontSize:"1rem"},children:[re(F.artist)," · ",re(De[F.cc]||F.cc.toUpperCase())]})]}),a.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(255,77,109,0.12) 0%, var(--panel2-solid) 100%)",border:"1.5px solid rgba(255,77,109,0.6)",borderRadius:22,padding:"28px 20px",textAlign:"center",marginBottom:20},children:[a.jsx("div",{style:{fontSize:"2.8rem",marginBottom:10},children:"🚫"}),a.jsx("div",{style:{fontFamily:"var(--display)",fontWeight:800,fontSize:"1.1rem",color:"#ffb3c1",marginBottom:6},children:"Dieser Song ist boykottiert"}),a.jsx("div",{style:{fontSize:"0.88rem",color:"var(--muted)"},children:"Für diesen Song werden keine Punkte vergeben."})]}),a.jsx("div",{className:"actions",style:{marginTop:18,justifyContent:"flex-end"},children:a.jsx("button",{className:"primary",onClick:N,style:{padding:"12px 32px",fontSize:"1rem"},children:"OK"})})]});const h=R,T=(A,K)=>{const J=[];for(let E=A;E<=K;E++){const m=h===E;J.push(a.jsx("button",{className:"rate-modal-btn",style:{...gt(_t(E)),width:64,height:68,fontFamily:"var(--number-font)",fontSize:"2.2rem",borderRadius:16,border:"4px solid "+(m?"#fff":"transparent"),cursor:"pointer",display:"grid",placeItems:"center",padding:0,transition:"transform 0.15s ease-out, box-shadow 0.15s ease-out",...m?{boxShadow:"0 0 28px rgba(255,255,255,0.8), 0 0 0 2px #fff inset",transform:"scale(1.08)"}:{}},onClick:()=>S(h===E?null:E),children:E},E))}return J};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{textAlign:"center",marginBottom:20},children:[a.jsx("div",{style:{marginBottom:12,transform:"scale(1.8)",display:"inline-block",filter:"drop-shadow(0 4px 12px rgba(0,0,0,0.5))"},children:a.jsx(Ft,{cc:F.cc})}),a.jsx("h2",{style:{margin:"10px 0 4px",fontSize:"1.7rem"},children:re(F.title)}),a.jsxs("p",{style:{color:"var(--muted)",margin:0,fontSize:"1rem"},children:[re(F.artist)," · ",re(De[F.cc]||F.cc.toUpperCase())]}),a.jsx("p",{style:{color:"var(--gold)",margin:"8px 0 0",fontSize:"0.85rem",fontWeight:800,letterSpacing:"0.08em",textTransform:"uppercase"},children:re(V)})]}),a.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(255,209,102,0.06) 0%, var(--panel2-solid) 100%)",border:"1px solid var(--line)",borderRadius:22,padding:"24px 20px",textAlign:"center",marginBottom:20,boxShadow:"inset 0 2px 8px rgba(0,0,0,0.3)"},children:[a.jsx("div",{style:{fontFamily:"var(--number-font)",fontSize:"2.8rem",color:"var(--gold)",marginBottom:22,letterSpacing:"0.03em",textShadow:"0 0 20px rgba(255,209,102,0.4)"},children:h!=null?a.jsxs(a.Fragment,{children:[h," ",a.jsx("span",{style:{fontSize:"1.2rem",color:"var(--muted)"},children:"/ 12 Pts"})]}):a.jsx("span",{style:{color:"var(--muted)",fontSize:"1.4rem"},children:"– Pts"})}),a.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",marginBottom:14,flexWrap:"wrap"},children:T(1,5)}),a.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:T(6,10)}),a.jsx("div",{style:{marginTop:16,display:"flex",justifyContent:"center"},children:a.jsxs("button",{style:{...gt(_t(12)),width:140,height:68,fontFamily:"var(--number-font)",fontSize:"2.2rem",borderRadius:16,border:"4px solid "+(h===12?"#fff":"transparent"),cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"transform 0.15s ease-out, box-shadow 0.15s ease-out",...h===12?{boxShadow:"0 0 28px rgba(255,255,255,0.8), 0 0 0 2px #fff inset",transform:"scale(1.08)"}:{}},onClick:()=>S(h===12?null:12),children:["12 ",a.jsx("span",{style:{fontSize:"0.8rem",fontFamily:"var(--display)",textTransform:"uppercase",letterSpacing:"0.1em",marginTop:6},children:"FAV"})]})})]}),a.jsx("div",{className:"actions",style:{marginTop:18,justifyContent:"flex-end"},children:a.jsx("button",{className:"primary",onClick:()=>I(s.id,G,R),style:{padding:"12px 32px",fontSize:"1rem"},children:"Fertig"})})]})},I0=({S:s,currentUser:d,isRealAdmin:c,adminViewOff:p,setAdminViewOff:g,onSaveNames:v,onImport:x,onExport:I,onOpenJson:N,onClose:z,showToast:F,autoHardReset:M,updateS:G})=>{const X=!!d,[V,W]=U.useState(()=>{const h={};return s.jury.forEach(T=>h[T.id]=T.name),h}),R=h=>{const T=h.target.files[0];if(!T)return;const A=new FileReader;A.onload=()=>{try{const K=JSON.parse(A.result);x(K)}catch{F("Invalid file","error")}},A.readAsText(T)},S=()=>{const h=s.jury.map(T=>({dataset:{jn:T.id},value:V[T.id]||""}));v(h)};return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Settings"}),!X&&a.jsx("p",{className:"hint",style:{color:"var(--red)",fontWeight:600,background:"rgba(255,77,109,0.1)",padding:"10px 14px",borderRadius:10,border:"1px solid rgba(255,77,109,0.3)",marginBottom:16},children:"⚠️ Logge dich mit Google ein, um Export/Import/JSON zu nutzen."}),s.jury.map(h=>a.jsxs("label",{children:[h.id.toUpperCase()," Name",a.jsx("input",{value:V[h.id]||"",onChange:T=>W(A=>({...A,[h.id]:T.target.value}))})]},h.id)),c&&a.jsxs("label",{style:{flexDirection:"row",alignItems:"center",gap:12,marginTop:16,cursor:"pointer",background:"rgba(255,255,255,0.05)",padding:"12px",borderRadius:12,border:"1px solid var(--line)"},children:[a.jsx("input",{type:"checkbox",checked:!p,onChange:h=>{const T=!h.target.checked;g(T),localStorage.setItem("esc-admin-view-off",T?"true":"false")}}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[a.jsx("span",{style:{color:"var(--ink)",fontWeight:600},children:"Admin-Modus"}),a.jsx("span",{style:{fontSize:"0.75rem",color:"var(--muted)",fontWeight:500},children:"Erlaubt das Bearbeiten von Tipps anderer Juroren."})]})]}),a.jsx("hr",{style:{border:0,borderTop:"1px solid var(--line)",margin:"20px 0"}}),a.jsxs("label",{style:{flexDirection:"row",alignItems:"center",gap:12,cursor:"pointer",background:"rgba(255,255,255,0.05)",padding:"12px",borderRadius:12,border:"1px solid var(--line)"},children:[a.jsx("input",{type:"checkbox",checked:M,onChange:h=>{const T=h.target.checked;G(A=>({...A,autoHardReset:T}))}}),a.jsx("span",{style:{color:"var(--ink)",fontWeight:600},children:"Auto-Hard-Reset beim Laden (Cache leeren)"})]}),a.jsxs("div",{style:{display:"flex",gap:8,marginTop:16},children:[a.jsxs("button",{onClick:I,disabled:!X,style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"8px 10px",borderRadius:10,background:"linear-gradient(145deg, rgba(26,14,52,0.95) 0%, rgba(12,6,26,0.98) 100%)",border:"1px solid rgba(148,94,255,0.25)",color:X?"var(--ink)":"var(--muted)",fontWeight:600,fontSize:"0.8rem",whiteSpace:"nowrap",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)",cursor:X?"pointer":"not-allowed",opacity:X?1:.4,transition:"all 0.15s ease"},onMouseEnter:h=>{X&&(h.currentTarget.style.transform="translateY(-1px)",h.currentTarget.style.borderColor="rgba(148,94,255,0.5)",h.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 6px 16px rgba(0,0,0,0.4)")},onMouseLeave:h=>{X&&(h.currentTarget.style.transform="translateY(0)",h.currentTarget.style.borderColor="rgba(148,94,255,0.25)",h.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)")},children:[a.jsx("span",{style:{fontSize:"1rem"},children:"📤"})," Export"]}),a.jsxs("label",{style:{flex:1,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:6,padding:"8px 10px",borderRadius:10,background:"linear-gradient(145deg, rgba(26,14,52,0.95) 0%, rgba(12,6,26,0.98) 100%)",border:"1px solid rgba(148,94,255,0.25)",color:X?"var(--ink)":"var(--muted)",fontWeight:600,fontSize:"0.8rem",whiteSpace:"nowrap",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)",cursor:X?"pointer":"not-allowed",opacity:X?1:.4,transition:"all 0.15s ease",margin:0},onMouseEnter:h=>{X&&(h.currentTarget.style.transform="translateY(-1px)",h.currentTarget.style.borderColor="rgba(148,94,255,0.5)",h.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 6px 16px rgba(0,0,0,0.4)")},onMouseLeave:h=>{X&&(h.currentTarget.style.transform="translateY(0)",h.currentTarget.style.borderColor="rgba(148,94,255,0.25)",h.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)")},children:[a.jsx("span",{style:{fontSize:"1rem"},children:"📥"})," Import",a.jsx("input",{type:"file",style:{display:"none"},disabled:!X,onChange:R})]}),a.jsxs("button",{onClick:N,disabled:!X,style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"8px 10px",borderRadius:10,background:"linear-gradient(145deg, rgba(26,14,52,0.95) 0%, rgba(12,6,26,0.98) 100%)",border:"1px solid rgba(148,94,255,0.25)",color:X?"var(--ink)":"var(--muted)",fontWeight:600,fontSize:"0.8rem",whiteSpace:"nowrap",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)",cursor:X?"pointer":"not-allowed",opacity:X?1:.4,transition:"all 0.15s ease"},onMouseEnter:h=>{X&&(h.currentTarget.style.transform="translateY(-1px)",h.currentTarget.style.borderColor="rgba(148,94,255,0.5)",h.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 6px 16px rgba(0,0,0,0.4)")},onMouseLeave:h=>{X&&(h.currentTarget.style.transform="translateY(0)",h.currentTarget.style.borderColor="rgba(148,94,255,0.25)",h.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)")},children:[a.jsx("span",{style:{fontSize:"1rem"},children:"💻"})," JSON"]})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:z,children:"Close"}),a.jsx("button",{className:"primary",onClick:S,children:"Save"})]})]})},P0=({S:s,onSave:d,onBack:c,onClose:p})=>{const[g,v]=U.useState(JSON.stringify(s,null,2));return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"JSON Editor"}),a.jsx("p",{className:"hint",children:"Bearbeite den gesamten JSON-State direkt hier:"}),a.jsx("textarea",{value:g,onChange:x=>v(x.target.value),style:{width:"100%",height:320,fontFamily:"monospace",background:"var(--panel2-solid)",color:"var(--ink)",border:"1px solid var(--line)",borderRadius:12,padding:14,resize:"vertical",fontSize:"0.85rem",lineHeight:1.5}}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:c,children:"Zurück"}),a.jsx("button",{className:"primary",onClick:()=>d(g),children:"Speichern & Anwenden"})]})]})};let Ar;y.view==="compare"?Ar=y0():y.view==="library"?Ar=v0():y.view==="stats"?Ar=b0():y.yearId?Ar=u0():Ar=Zl();const L0=y.view==="home"&&!y.yearId;return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"wrap",children:a.jsxs("div",{id:"app",ref:ke,children:[s0(),Ar]})}),a.jsx("div",{id:"fab_container",children:L0&&a.jsx("button",{className:"fab",onClick:()=>se("newYear"),title:"Add new contest",children:"＋"})}),a.jsx("div",{id:"toast-container",children:k.map(s=>a.jsx("div",{className:"toast "+(s.type||""),children:(s.type==="success"?"✓ ":s.type==="error"?"✗ ":"")+s.msg},s.id))}),a.jsx("dialog",{id:"dlg",ref:pe,tabIndex:-1,className:Y.mode==="song"||Y.mode==="picker"||Y.mode==="json"?"wide":"",children:Y.open&&w0()})]})}const co=e=>new Promise((t,r)=>{const n=document.createElement("script");n.src=e,n.onload=t,n.onerror=r,document.head.appendChild(n)});(async()=>{try{window.firebase||(await co("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"),await co("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"),await co("https://www.gstatic.com/firebasejs/10.12.0/firebase-database-compat.js"))}catch(e){console.error("Firebase SDKs konnten nicht geladen werden:",e)}uo.createRoot(document.getElementById("root")).render(a.jsx(np.StrictMode,{children:a.jsx(kg,{})}))})();
