(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Pp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xd={exports:{}},ha={},vd={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var li=Symbol.for("react.element"),Lp=Symbol.for("react.portal"),Rp=Symbol.for("react.fragment"),_p=Symbol.for("react.strict_mode"),Fp=Symbol.for("react.profiler"),Mp=Symbol.for("react.provider"),Op=Symbol.for("react.context"),Ap=Symbol.for("react.forward_ref"),Dp=Symbol.for("react.suspense"),Bp=Symbol.for("react.memo"),Hp=Symbol.for("react.lazy"),os=Symbol.iterator;function Wp(e){return e===null||typeof e!="object"?null:(e=os&&e[os]||e["@@iterator"],typeof e=="function"?e:null)}var yd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bd=Object.assign,wd={};function pr(e,t,n){this.props=e,this.context=t,this.refs=wd,this.updater=n||yd}pr.prototype.isReactComponent={};pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kd(){}kd.prototype=pr.prototype;function ll(e,t,n){this.props=e,this.context=t,this.refs=wd,this.updater=n||yd}var sl=ll.prototype=new kd;sl.constructor=ll;bd(sl,pr.prototype);sl.isPureReactComponent=!0;var ls=Array.isArray,Sd=Object.prototype.hasOwnProperty,dl={current:null},jd={key:!0,ref:!0,__self:!0,__source:!0};function Cd(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Sd.call(t,r)&&!jd.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var d=Array(u),x=0;x<u;x++)d[x]=arguments[x+2];i.children=d}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:li,type:e,key:o,ref:l,props:i,_owner:dl.current}}function Up(e,t){return{$$typeof:li,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cl(e){return typeof e=="object"&&e!==null&&e.$$typeof===li}function Vp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ss=/\/+/g;function Oa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vp(""+e.key):t.toString(36)}function Li(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case li:case Lp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Oa(l,0):r,ls(i)?(n="",e!=null&&(n=e.replace(ss,"$&/")+"/"),Li(i,t,n,"",function(x){return x})):i!=null&&(cl(i)&&(i=Up(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ss,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",ls(e))for(var u=0;u<e.length;u++){o=e[u];var d=r+Oa(o,u);l+=Li(o,t,n,d,i)}else if(d=Wp(e),typeof d=="function")for(e=d.call(e),u=0;!(o=e.next()).done;)o=o.value,d=r+Oa(o,u++),l+=Li(o,t,n,d,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function gi(e,t,n){if(e==null)return e;var r=[],i=0;return Li(e,r,"","",function(o){return t.call(n,o,i++)}),r}function $p(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qe={current:null},Ri={transition:null},Qp={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:Ri,ReactCurrentOwner:dl};function Nd(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:gi,forEach:function(e,t,n){gi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gi(e,function(){t++}),t},toArray:function(e){return gi(e,function(t){return t})||[]},only:function(e){if(!cl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};pe.Component=pr;pe.Fragment=Rp;pe.Profiler=Fp;pe.PureComponent=ll;pe.StrictMode=_p;pe.Suspense=Dp;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qp;pe.act=Nd;pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bd({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=dl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(d in t)Sd.call(t,d)&&!jd.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&u!==void 0?u[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var x=0;x<d;x++)u[x]=arguments[x+2];r.children=u}return{$$typeof:li,type:e.type,key:i,ref:o,props:r,_owner:l}};pe.createContext=function(e){return e={$$typeof:Op,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mp,_context:e},e.Consumer=e};pe.createElement=Cd;pe.createFactory=function(e){var t=Cd.bind(null,e);return t.type=e,t};pe.createRef=function(){return{current:null}};pe.forwardRef=function(e){return{$$typeof:Ap,render:e}};pe.isValidElement=cl;pe.lazy=function(e){return{$$typeof:Hp,_payload:{_status:-1,_result:e},_init:$p}};pe.memo=function(e,t){return{$$typeof:Bp,type:e,compare:t===void 0?null:t}};pe.startTransition=function(e){var t=Ri.transition;Ri.transition={};try{e()}finally{Ri.transition=t}};pe.unstable_act=Nd;pe.useCallback=function(e,t){return Qe.current.useCallback(e,t)};pe.useContext=function(e){return Qe.current.useContext(e)};pe.useDebugValue=function(){};pe.useDeferredValue=function(e){return Qe.current.useDeferredValue(e)};pe.useEffect=function(e,t){return Qe.current.useEffect(e,t)};pe.useId=function(){return Qe.current.useId()};pe.useImperativeHandle=function(e,t,n){return Qe.current.useImperativeHandle(e,t,n)};pe.useInsertionEffect=function(e,t){return Qe.current.useInsertionEffect(e,t)};pe.useLayoutEffect=function(e,t){return Qe.current.useLayoutEffect(e,t)};pe.useMemo=function(e,t){return Qe.current.useMemo(e,t)};pe.useReducer=function(e,t,n){return Qe.current.useReducer(e,t,n)};pe.useRef=function(e){return Qe.current.useRef(e)};pe.useState=function(e){return Qe.current.useState(e)};pe.useSyncExternalStore=function(e,t,n){return Qe.current.useSyncExternalStore(e,t,n)};pe.useTransition=function(){return Qe.current.useTransition()};pe.version="18.3.1";vd.exports=pe;var W=vd.exports;const Yp=Pp(W);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp=W,Gp=Symbol.for("react.element"),qp=Symbol.for("react.fragment"),Jp=Object.prototype.hasOwnProperty,Xp=Kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zp={key:!0,ref:!0,__self:!0,__source:!0};function zd(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Jp.call(t,r)&&!Zp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Gp,type:e,key:o,ref:l,props:i,_owner:Xp.current}}ha.Fragment=qp;ha.jsx=zd;ha.jsxs=zd;xd.exports=ha;var a=xd.exports,go={},Ed={exports:{}},ct={},Id={exports:{}},Td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(Q,ae){var ne=Q.length;Q.push(ae);e:for(;0<ne;){var ie=ne-1>>>1,le=Q[ie];if(0<i(le,ae))Q[ie]=ae,Q[ne]=le,ne=ie;else break e}}function n(Q){return Q.length===0?null:Q[0]}function r(Q){if(Q.length===0)return null;var ae=Q[0],ne=Q.pop();if(ne!==ae){Q[0]=ne;e:for(var ie=0,le=Q.length,wn=le>>>1;ie<wn;){var yt=2*(ie+1)-1,se=Q[yt],rt=yt+1,Tt=Q[rt];if(0>i(se,ne))rt<le&&0>i(Tt,se)?(Q[ie]=Tt,Q[rt]=ne,ie=rt):(Q[ie]=se,Q[yt]=ne,ie=yt);else if(rt<le&&0>i(Tt,ne))Q[ie]=Tt,Q[rt]=ne,ie=rt;else break e}}return ae}function i(Q,ae){var ne=Q.sortIndex-ae.sortIndex;return ne!==0?ne:Q.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var d=[],x=[],I=1,L=null,z=3,g=!1,F=!1,B=!1,xe=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(Q){for(var ae=n(x);ae!==null;){if(ae.callback===null)r(x);else if(ae.startTime<=Q)r(x),ae.sortIndex=ae.expirationTime,t(d,ae);else break;ae=n(x)}}function M(Q){if(B=!1,b(Q),!F)if(n(d)!==null)F=!0,bn(Y);else{var ae=n(x);ae!==null&&nt(M,ae.startTime-Q)}}function Y(Q,ae){F=!1,B&&(B=!1,v(te),te=-1),g=!0;var ne=z;try{for(b(ae),L=n(d);L!==null&&(!(L.expirationTime>ae)||Q&&!Ke());){var ie=L.callback;if(typeof ie=="function"){L.callback=null,z=L.priorityLevel;var le=ie(L.expirationTime<=ae);ae=e.unstable_now(),typeof le=="function"?L.callback=le:L===n(d)&&r(d),b(ae)}else r(d);L=n(d)}if(L!==null)var wn=!0;else{var yt=n(x);yt!==null&&nt(M,yt.startTime-ae),wn=!1}return wn}finally{L=null,z=ne,g=!1}}var G=!1,Z=null,te=-1,ye=5,ce=-1;function Ke(){return!(e.unstable_now()-ce<ye)}function Gt(){if(Z!==null){var Q=e.unstable_now();ce=Q;var ae=!0;try{ae=Z(!0,Q)}finally{ae?be():(G=!1,Z=null)}}else G=!1}var be;if(typeof m=="function")be=function(){m(Gt)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,yn=we.port2;we.port1.onmessage=Gt,be=function(){yn.postMessage(null)}}else be=function(){xe(Gt,0)};function bn(Q){Z=Q,G||(G=!0,be())}function nt(Q,ae){te=xe(function(){Q(e.unstable_now())},ae)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Q){Q.callback=null},e.unstable_continueExecution=function(){F||g||(F=!0,bn(Y))},e.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<Q?Math.floor(1e3/Q):5},e.unstable_getCurrentPriorityLevel=function(){return z},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(Q){switch(z){case 1:case 2:case 3:var ae=3;break;default:ae=z}var ne=z;z=ae;try{return Q()}finally{z=ne}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Q,ae){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var ne=z;z=Q;try{return ae()}finally{z=ne}},e.unstable_scheduleCallback=function(Q,ae,ne){var ie=e.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ie+ne:ie):ne=ie,Q){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=ne+le,Q={id:I++,callback:ae,priorityLevel:Q,startTime:ne,expirationTime:le,sortIndex:-1},ne>ie?(Q.sortIndex=ne,t(x,Q),n(d)===null&&Q===n(x)&&(B?(v(te),te=-1):B=!0,nt(M,ne-ie))):(Q.sortIndex=le,t(d,Q),F||g||(F=!0,bn(Y))),Q},e.unstable_shouldYield=Ke,e.unstable_wrapCallback=function(Q){var ae=z;return function(){var ne=z;z=ae;try{return Q.apply(this,arguments)}finally{z=ne}}}})(Td);Id.exports=Td;var e0=Id.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0=W,dt=e0;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pd=new Set,Vr={};function An(e,t){ar(e,t),ar(e+"Capture",t)}function ar(e,t){for(Vr[e]=t,e=0;e<t.length;e++)Pd.add(t[e])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mo=Object.prototype.hasOwnProperty,n0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ds={},cs={};function r0(e){return mo.call(cs,e)?!0:mo.call(ds,e)?!1:n0.test(e)?cs[e]=!0:(ds[e]=!0,!1)}function i0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function a0(e,t,n,r){if(t===null||typeof t>"u"||i0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];De[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var ul=/[\-:]([a-z])/g;function pl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ul,pl);De[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ul,pl);De[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ul,pl);De[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function fl(e,t,n,r){var i=De.hasOwnProperty(t)?De[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(a0(t,n,i,r)&&(n=null),r||i===null?r0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=t0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mi=Symbol.for("react.element"),Hn=Symbol.for("react.portal"),Wn=Symbol.for("react.fragment"),gl=Symbol.for("react.strict_mode"),ho=Symbol.for("react.profiler"),Ld=Symbol.for("react.provider"),Rd=Symbol.for("react.context"),ml=Symbol.for("react.forward_ref"),xo=Symbol.for("react.suspense"),vo=Symbol.for("react.suspense_list"),hl=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),_d=Symbol.for("react.offscreen"),us=Symbol.iterator;function wr(e){return e===null||typeof e!="object"?null:(e=us&&e[us]||e["@@iterator"],typeof e=="function"?e:null)}var ze=Object.assign,Aa;function Tr(e){if(Aa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Aa=t&&t[1]||""}return`
`+Aa+e}var Da=!1;function Ba(e,t){if(!e||Da)return"";Da=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(x){var r=x}Reflect.construct(e,[],t)}else{try{t.call()}catch(x){r=x}e.call(t.prototype)}else{try{throw Error()}catch(x){r=x}e()}}catch(x){if(x&&r&&typeof x.stack=="string"){for(var i=x.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=u);break}}}finally{Da=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tr(e):""}function o0(e){switch(e.tag){case 5:return Tr(e.type);case 16:return Tr("Lazy");case 13:return Tr("Suspense");case 19:return Tr("SuspenseList");case 0:case 2:case 15:return e=Ba(e.type,!1),e;case 11:return e=Ba(e.type.render,!1),e;case 1:return e=Ba(e.type,!0),e;default:return""}}function yo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wn:return"Fragment";case Hn:return"Portal";case ho:return"Profiler";case gl:return"StrictMode";case xo:return"Suspense";case vo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rd:return(e.displayName||"Context")+".Consumer";case Ld:return(e._context.displayName||"Context")+".Provider";case ml:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hl:return t=e.displayName||null,t!==null?t:yo(e.type)||"Memo";case Zt:t=e._payload,e=e._init;try{return yo(e(t))}catch{}}return null}function l0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yo(t);case 8:return t===gl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function s0(e){var t=Fd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hi(e){e._valueTracker||(e._valueTracker=s0(e))}function Md(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bo(e,t){var n=t.checked;return ze({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ps(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Od(e,t){t=t.checked,t!=null&&fl(e,"checked",t,!1)}function wo(e,t){Od(e,t);var n=gn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ko(e,t.type,n):t.hasOwnProperty("defaultValue")&&ko(e,t.type,gn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ko(e,t,n){(t!=="number"||Qi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pr=Array.isArray;function Zn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function So(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return ze({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(Pr(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gn(n)}}function Ad(e,t){var n=gn(t.value),r=gn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ms(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xi,Bd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xi=xi||document.createElement("div"),xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d0=["Webkit","ms","Moz","O"];Object.keys(_r).forEach(function(e){d0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_r[t]=_r[e]})});function Hd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_r.hasOwnProperty(e)&&_r[e]?(""+t).trim():t+"px"}function Wd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var c0=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Co(e,t){if(t){if(c0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function No(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zo=null;function xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Eo=null,er=null,tr=null;function hs(e){if(e=ci(e)){if(typeof Eo!="function")throw Error(D(280));var t=e.stateNode;t&&(t=wa(t),Eo(e.stateNode,e.type,t))}}function Ud(e){er?tr?tr.push(e):tr=[e]:er=e}function Vd(){if(er){var e=er,t=tr;if(tr=er=null,hs(e),t)for(e=0;e<t.length;e++)hs(t[e])}}function $d(e,t){return e(t)}function Qd(){}var Ha=!1;function Yd(e,t,n){if(Ha)return e(t,n);Ha=!0;try{return $d(e,t,n)}finally{Ha=!1,(er!==null||tr!==null)&&(Qd(),Vd())}}function Qr(e,t){var n=e.stateNode;if(n===null)return null;var r=wa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var Io=!1;if(Vt)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){Io=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{Io=!1}function u0(e,t,n,r,i,o,l,u,d){var x=Array.prototype.slice.call(arguments,3);try{t.apply(n,x)}catch(I){this.onError(I)}}var Fr=!1,Yi=null,Ki=!1,To=null,p0={onError:function(e){Fr=!0,Yi=e}};function f0(e,t,n,r,i,o,l,u,d){Fr=!1,Yi=null,u0.apply(p0,arguments)}function g0(e,t,n,r,i,o,l,u,d){if(f0.apply(this,arguments),Fr){if(Fr){var x=Yi;Fr=!1,Yi=null}else throw Error(D(198));Ki||(Ki=!0,To=x)}}function Dn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xs(e){if(Dn(e)!==e)throw Error(D(188))}function m0(e){var t=e.alternate;if(!t){if(t=Dn(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return xs(i),e;if(o===r)return xs(i),t;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function Gd(e){return e=m0(e),e!==null?qd(e):null}function qd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qd(e);if(t!==null)return t;e=e.sibling}return null}var Jd=dt.unstable_scheduleCallback,vs=dt.unstable_cancelCallback,h0=dt.unstable_shouldYield,x0=dt.unstable_requestPaint,Ie=dt.unstable_now,v0=dt.unstable_getCurrentPriorityLevel,vl=dt.unstable_ImmediatePriority,Xd=dt.unstable_UserBlockingPriority,Gi=dt.unstable_NormalPriority,y0=dt.unstable_LowPriority,Zd=dt.unstable_IdlePriority,xa=null,Mt=null;function b0(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(xa,e,void 0,(e.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:S0,w0=Math.log,k0=Math.LN2;function S0(e){return e>>>=0,e===0?32:31-(w0(e)/k0|0)|0}var vi=64,yi=4194304;function Lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=Lr(u):(o&=l,o!==0&&(r=Lr(o)))}else l=n&~i,l!==0?r=Lr(l):o!==0&&(r=Lr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-zt(t),i=1<<n,r|=e[n],t&=~i;return r}function j0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-zt(o),u=1<<l,d=i[l];d===-1?(!(u&n)||u&r)&&(i[l]=j0(u,t)):d<=t&&(e.expiredLanes|=u),o&=~u}}function Po(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ec(){var e=vi;return vi<<=1,!(vi&4194240)&&(vi=64),e}function Wa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function si(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-zt(t),e[t]=n}function N0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-zt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function yl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-zt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var me=0;function tc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nc,bl,rc,ic,ac,Lo=!1,bi=[],on=null,ln=null,sn=null,Yr=new Map,Kr=new Map,tn=[],z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ys(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":Yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kr.delete(t.pointerId)}}function Sr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ci(t),t!==null&&bl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function E0(e,t,n,r,i){switch(t){case"focusin":return on=Sr(on,e,t,n,r,i),!0;case"dragenter":return ln=Sr(ln,e,t,n,r,i),!0;case"mouseover":return sn=Sr(sn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Yr.set(o,Sr(Yr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Kr.set(o,Sr(Kr.get(o)||null,e,t,n,r,i)),!0}return!1}function oc(e){var t=En(e.target);if(t!==null){var n=Dn(t);if(n!==null){if(t=n.tag,t===13){if(t=Kd(n),t!==null){e.blockedOn=t,ac(e.priority,function(){rc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ro(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zo=r,n.target.dispatchEvent(r),zo=null}else return t=ci(n),t!==null&&bl(t),e.blockedOn=n,!1;t.shift()}return!0}function bs(e,t,n){_i(e)&&n.delete(t)}function I0(){Lo=!1,on!==null&&_i(on)&&(on=null),ln!==null&&_i(ln)&&(ln=null),sn!==null&&_i(sn)&&(sn=null),Yr.forEach(bs),Kr.forEach(bs)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Lo||(Lo=!0,dt.unstable_scheduleCallback(dt.unstable_NormalPriority,I0)))}function Gr(e){function t(i){return jr(i,e)}if(0<bi.length){jr(bi[0],e);for(var n=1;n<bi.length;n++){var r=bi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&jr(on,e),ln!==null&&jr(ln,e),sn!==null&&jr(sn,e),Yr.forEach(t),Kr.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)oc(n),n.blockedOn===null&&tn.shift()}var nr=Kt.ReactCurrentBatchConfig,Ji=!0;function T0(e,t,n,r){var i=me,o=nr.transition;nr.transition=null;try{me=1,wl(e,t,n,r)}finally{me=i,nr.transition=o}}function P0(e,t,n,r){var i=me,o=nr.transition;nr.transition=null;try{me=4,wl(e,t,n,r)}finally{me=i,nr.transition=o}}function wl(e,t,n,r){if(Ji){var i=Ro(e,t,n,r);if(i===null)Xa(e,t,r,Xi,n),ys(e,r);else if(E0(i,e,t,n,r))r.stopPropagation();else if(ys(e,r),t&4&&-1<z0.indexOf(e)){for(;i!==null;){var o=ci(i);if(o!==null&&nc(o),o=Ro(e,t,n,r),o===null&&Xa(e,t,r,Xi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Xa(e,t,r,null,n)}}var Xi=null;function Ro(e,t,n,r){if(Xi=null,e=xl(r),e=En(e),e!==null)if(t=Dn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Kd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xi=e,null}function lc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(v0()){case vl:return 1;case Xd:return 4;case Gi:case y0:return 16;case Zd:return 536870912;default:return 16}default:return 16}}var rn=null,kl=null,Fi=null;function sc(){if(Fi)return Fi;var e,t=kl,n=t.length,r,i="value"in rn?rn.value:rn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Fi=i.slice(e,1<r?1-r:void 0)}function Mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wi(){return!0}function ws(){return!1}function ut(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wi:ws,this.isPropagationStopped=ws,this}return ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=ut(fr),di=ze({},fr,{view:0,detail:0}),L0=ut(di),Ua,Va,Cr,va=ze({},di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cr&&(Cr&&e.type==="mousemove"?(Ua=e.screenX-Cr.screenX,Va=e.screenY-Cr.screenY):Va=Ua=0,Cr=e),Ua)},movementY:function(e){return"movementY"in e?e.movementY:Va}}),ks=ut(va),R0=ze({},va,{dataTransfer:0}),_0=ut(R0),F0=ze({},di,{relatedTarget:0}),$a=ut(F0),M0=ze({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),O0=ut(M0),A0=ze({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),D0=ut(A0),B0=ze({},fr,{data:0}),Ss=ut(B0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=U0[e])?!!t[e]:!1}function jl(){return V0}var $0=ze({},di,{key:function(e){if(e.key){var t=H0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?W0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(e){return e.type==="keypress"?Mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Q0=ut($0),Y0=ze({},va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),js=ut(Y0),K0=ze({},di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),G0=ut(K0),q0=ze({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),J0=ut(q0),X0=ze({},va,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Z0=ut(X0),ef=[9,13,27,32],Cl=Vt&&"CompositionEvent"in window,Mr=null;Vt&&"documentMode"in document&&(Mr=document.documentMode);var tf=Vt&&"TextEvent"in window&&!Mr,dc=Vt&&(!Cl||Mr&&8<Mr&&11>=Mr),Cs=" ",Ns=!1;function cc(e,t){switch(e){case"keyup":return ef.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function nf(e,t){switch(e){case"compositionend":return uc(t);case"keypress":return t.which!==32?null:(Ns=!0,Cs);case"textInput":return e=t.data,e===Cs&&Ns?null:e;default:return null}}function rf(e,t){if(Un)return e==="compositionend"||!Cl&&cc(e,t)?(e=sc(),Fi=kl=rn=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dc&&t.locale!=="ko"?null:t.data;default:return null}}var af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!af[e.type]:t==="textarea"}function pc(e,t,n,r){Ud(r),t=Zi(t,"onChange"),0<t.length&&(n=new Sl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Or=null,qr=null;function of(e){Sc(e,0)}function ya(e){var t=Qn(e);if(Md(t))return e}function lf(e,t){if(e==="change")return t}var fc=!1;if(Vt){var Qa;if(Vt){var Ya="oninput"in document;if(!Ya){var Es=document.createElement("div");Es.setAttribute("oninput","return;"),Ya=typeof Es.oninput=="function"}Qa=Ya}else Qa=!1;fc=Qa&&(!document.documentMode||9<document.documentMode)}function Is(){Or&&(Or.detachEvent("onpropertychange",gc),qr=Or=null)}function gc(e){if(e.propertyName==="value"&&ya(qr)){var t=[];pc(t,qr,e,xl(e)),Yd(of,t)}}function sf(e,t,n){e==="focusin"?(Is(),Or=t,qr=n,Or.attachEvent("onpropertychange",gc)):e==="focusout"&&Is()}function df(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ya(qr)}function cf(e,t){if(e==="click")return ya(t)}function uf(e,t){if(e==="input"||e==="change")return ya(t)}function pf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:pf;function Jr(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mo.call(t,i)||!It(e[i],t[i]))return!1}return!0}function Ts(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ps(e,t){var n=Ts(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ts(n)}}function mc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hc(){for(var e=window,t=Qi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qi(e.document)}return t}function Nl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ff(e){var t=hc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&mc(n.ownerDocument.documentElement,n)){if(r!==null&&Nl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ps(n,o);var l=Ps(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gf=Vt&&"documentMode"in document&&11>=document.documentMode,Vn=null,_o=null,Ar=null,Fo=!1;function Ls(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fo||Vn==null||Vn!==Qi(r)||(r=Vn,"selectionStart"in r&&Nl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&Jr(Ar,r)||(Ar=r,r=Zi(_o,"onSelect"),0<r.length&&(t=new Sl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vn)))}function ki(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $n={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},Ka={},xc={};Vt&&(xc=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function ba(e){if(Ka[e])return Ka[e];if(!$n[e])return e;var t=$n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xc)return Ka[e]=t[n];return e}var vc=ba("animationend"),yc=ba("animationiteration"),bc=ba("animationstart"),wc=ba("transitionend"),kc=new Map,Rs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,t){kc.set(e,t),An(t,[e])}for(var Ga=0;Ga<Rs.length;Ga++){var qa=Rs[Ga],mf=qa.toLowerCase(),hf=qa[0].toUpperCase()+qa.slice(1);hn(mf,"on"+hf)}hn(vc,"onAnimationEnd");hn(yc,"onAnimationIteration");hn(bc,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(wc,"onTransitionEnd");ar("onMouseEnter",["mouseout","mouseover"]);ar("onMouseLeave",["mouseout","mouseover"]);ar("onPointerEnter",["pointerout","pointerover"]);ar("onPointerLeave",["pointerout","pointerover"]);An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));An("onBeforeInput",["compositionend","keypress","textInput","paste"]);An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function _s(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,g0(r,t,void 0,e),e.currentTarget=null}function Sc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],d=u.instance,x=u.currentTarget;if(u=u.listener,d!==o&&i.isPropagationStopped())break e;_s(i,u,x),o=d}else for(l=0;l<r.length;l++){if(u=r[l],d=u.instance,x=u.currentTarget,u=u.listener,d!==o&&i.isPropagationStopped())break e;_s(i,u,x),o=d}}}if(Ki)throw e=To,Ki=!1,To=null,e}function ke(e,t){var n=t[Bo];n===void 0&&(n=t[Bo]=new Set);var r=e+"__bubble";n.has(r)||(jc(t,e,2,!1),n.add(r))}function Ja(e,t,n){var r=0;t&&(r|=4),jc(n,e,r,t)}var Si="_reactListening"+Math.random().toString(36).slice(2);function Xr(e){if(!e[Si]){e[Si]=!0,Pd.forEach(function(n){n!=="selectionchange"&&(xf.has(n)||Ja(n,!1,e),Ja(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Si]||(t[Si]=!0,Ja("selectionchange",!1,t))}}function jc(e,t,n,r){switch(lc(t)){case 1:var i=T0;break;case 4:i=P0;break;default:i=wl}n=i.bind(null,t,n,e),i=void 0,!Io||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xa(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;u!==null;){if(l=En(u),l===null)return;if(d=l.tag,d===5||d===6){r=o=l;continue e}u=u.parentNode}}r=r.return}Yd(function(){var x=o,I=xl(n),L=[];e:{var z=kc.get(e);if(z!==void 0){var g=Sl,F=e;switch(e){case"keypress":if(Mi(n)===0)break e;case"keydown":case"keyup":g=Q0;break;case"focusin":F="focus",g=$a;break;case"focusout":F="blur",g=$a;break;case"beforeblur":case"afterblur":g=$a;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=_0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=G0;break;case vc:case yc:case bc:g=O0;break;case wc:g=J0;break;case"scroll":g=L0;break;case"wheel":g=Z0;break;case"copy":case"cut":case"paste":g=D0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=js}var B=(t&4)!==0,xe=!B&&e==="scroll",v=B?z!==null?z+"Capture":null:z;B=[];for(var m=x,b;m!==null;){b=m;var M=b.stateNode;if(b.tag===5&&M!==null&&(b=M,v!==null&&(M=Qr(m,v),M!=null&&B.push(Zr(m,M,b)))),xe)break;m=m.return}0<B.length&&(z=new g(z,F,null,n,I),L.push({event:z,listeners:B}))}}if(!(t&7)){e:{if(z=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",z&&n!==zo&&(F=n.relatedTarget||n.fromElement)&&(En(F)||F[$t]))break e;if((g||z)&&(z=I.window===I?I:(z=I.ownerDocument)?z.defaultView||z.parentWindow:window,g?(F=n.relatedTarget||n.toElement,g=x,F=F?En(F):null,F!==null&&(xe=Dn(F),F!==xe||F.tag!==5&&F.tag!==6)&&(F=null)):(g=null,F=x),g!==F)){if(B=ks,M="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(B=js,M="onPointerLeave",v="onPointerEnter",m="pointer"),xe=g==null?z:Qn(g),b=F==null?z:Qn(F),z=new B(M,m+"leave",g,n,I),z.target=xe,z.relatedTarget=b,M=null,En(I)===x&&(B=new B(v,m+"enter",F,n,I),B.target=b,B.relatedTarget=xe,M=B),xe=M,g&&F)t:{for(B=g,v=F,m=0,b=B;b;b=Bn(b))m++;for(b=0,M=v;M;M=Bn(M))b++;for(;0<m-b;)B=Bn(B),m--;for(;0<b-m;)v=Bn(v),b--;for(;m--;){if(B===v||v!==null&&B===v.alternate)break t;B=Bn(B),v=Bn(v)}B=null}else B=null;g!==null&&Fs(L,z,g,B,!1),F!==null&&xe!==null&&Fs(L,xe,F,B,!0)}}e:{if(z=x?Qn(x):window,g=z.nodeName&&z.nodeName.toLowerCase(),g==="select"||g==="input"&&z.type==="file")var Y=lf;else if(zs(z))if(fc)Y=uf;else{Y=df;var G=sf}else(g=z.nodeName)&&g.toLowerCase()==="input"&&(z.type==="checkbox"||z.type==="radio")&&(Y=cf);if(Y&&(Y=Y(e,x))){pc(L,Y,n,I);break e}G&&G(e,z,x),e==="focusout"&&(G=z._wrapperState)&&G.controlled&&z.type==="number"&&ko(z,"number",z.value)}switch(G=x?Qn(x):window,e){case"focusin":(zs(G)||G.contentEditable==="true")&&(Vn=G,_o=x,Ar=null);break;case"focusout":Ar=_o=Vn=null;break;case"mousedown":Fo=!0;break;case"contextmenu":case"mouseup":case"dragend":Fo=!1,Ls(L,n,I);break;case"selectionchange":if(gf)break;case"keydown":case"keyup":Ls(L,n,I)}var Z;if(Cl)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Un?cc(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(dc&&n.locale!=="ko"&&(Un||te!=="onCompositionStart"?te==="onCompositionEnd"&&Un&&(Z=sc()):(rn=I,kl="value"in rn?rn.value:rn.textContent,Un=!0)),G=Zi(x,te),0<G.length&&(te=new Ss(te,e,null,n,I),L.push({event:te,listeners:G}),Z?te.data=Z:(Z=uc(n),Z!==null&&(te.data=Z)))),(Z=tf?nf(e,n):rf(e,n))&&(x=Zi(x,"onBeforeInput"),0<x.length&&(I=new Ss("onBeforeInput","beforeinput",null,n,I),L.push({event:I,listeners:x}),I.data=Z))}Sc(L,t)})}function Zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Qr(e,n),o!=null&&r.unshift(Zr(e,o,i)),o=Qr(e,t),o!=null&&r.push(Zr(e,o,i))),e=e.return}return r}function Bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fs(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var u=n,d=u.alternate,x=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&x!==null&&(u=x,i?(d=Qr(n,o),d!=null&&l.unshift(Zr(n,d,u))):i||(d=Qr(n,o),d!=null&&l.push(Zr(n,d,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var vf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function Ms(e){return(typeof e=="string"?e:""+e).replace(vf,`
`).replace(yf,"")}function ji(e,t,n){if(t=Ms(t),Ms(e)!==t&&n)throw Error(D(425))}function ea(){}var Mo=null,Oo=null;function Ao(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Do=typeof setTimeout=="function"?setTimeout:void 0,bf=typeof clearTimeout=="function"?clearTimeout:void 0,Os=typeof Promise=="function"?Promise:void 0,wf=typeof queueMicrotask=="function"?queueMicrotask:typeof Os<"u"?function(e){return Os.resolve(null).then(e).catch(kf)}:Do;function kf(e){setTimeout(function(){throw e})}function Za(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Gr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gr(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function As(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gr=Math.random().toString(36).slice(2),Ft="__reactFiber$"+gr,ei="__reactProps$"+gr,$t="__reactContainer$"+gr,Bo="__reactEvents$"+gr,Sf="__reactListeners$"+gr,jf="__reactHandles$"+gr;function En(e){var t=e[Ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[Ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=As(e);e!==null;){if(n=e[Ft])return n;e=As(e)}return t}e=n,n=e.parentNode}return null}function ci(e){return e=e[Ft]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function wa(e){return e[ei]||null}var Ho=[],Yn=-1;function xn(e){return{current:e}}function Se(e){0>Yn||(e.current=Ho[Yn],Ho[Yn]=null,Yn--)}function ve(e,t){Yn++,Ho[Yn]=e.current,e.current=t}var mn={},Ue=xn(mn),Ze=xn(!1),Rn=mn;function or(e,t){var n=e.type.contextTypes;if(!n)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function et(e){return e=e.childContextTypes,e!=null}function ta(){Se(Ze),Se(Ue)}function Ds(e,t,n){if(Ue.current!==mn)throw Error(D(168));ve(Ue,t),ve(Ze,n)}function Cc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,l0(e)||"Unknown",i));return ze({},n,r)}function na(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Rn=Ue.current,ve(Ue,e),ve(Ze,Ze.current),!0}function Bs(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=Cc(e,t,Rn),r.__reactInternalMemoizedMergedChildContext=e,Se(Ze),Se(Ue),ve(Ue,e)):Se(Ze),ve(Ze,n)}var Bt=null,ka=!1,eo=!1;function Nc(e){Bt===null?Bt=[e]:Bt.push(e)}function Cf(e){ka=!0,Nc(e)}function vn(){if(!eo&&Bt!==null){eo=!0;var e=0,t=me;try{var n=Bt;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bt=null,ka=!1}catch(i){throw Bt!==null&&(Bt=Bt.slice(e+1)),Jd(vl,vn),i}finally{me=t,eo=!1}}return null}var Kn=[],Gn=0,ra=null,ia=0,ft=[],gt=0,_n=null,Ht=1,Wt="";function Nn(e,t){Kn[Gn++]=ia,Kn[Gn++]=ra,ra=e,ia=t}function zc(e,t,n){ft[gt++]=Ht,ft[gt++]=Wt,ft[gt++]=_n,_n=e;var r=Ht;e=Wt;var i=32-zt(r)-1;r&=~(1<<i),n+=1;var o=32-zt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ht=1<<32-zt(t)+i|n<<i|r,Wt=o+e}else Ht=1<<o|n<<i|r,Wt=e}function zl(e){e.return!==null&&(Nn(e,1),zc(e,1,0))}function El(e){for(;e===ra;)ra=Kn[--Gn],Kn[Gn]=null,ia=Kn[--Gn],Kn[Gn]=null;for(;e===_n;)_n=ft[--gt],ft[gt]=null,Wt=ft[--gt],ft[gt]=null,Ht=ft[--gt],ft[gt]=null}var st=null,lt=null,je=!1,Nt=null;function Ec(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,lt=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_n!==null?{id:Ht,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,lt=null,!0):!1;default:return!1}}function Wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Uo(e){if(je){var t=lt;if(t){var n=t;if(!Hs(e,t)){if(Wo(e))throw Error(D(418));t=dn(n.nextSibling);var r=st;t&&Hs(e,t)?Ec(r,n):(e.flags=e.flags&-4097|2,je=!1,st=e)}}else{if(Wo(e))throw Error(D(418));e.flags=e.flags&-4097|2,je=!1,st=e}}}function Ws(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function Ci(e){if(e!==st)return!1;if(!je)return Ws(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ao(e.type,e.memoizedProps)),t&&(t=lt)){if(Wo(e))throw Ic(),Error(D(418));for(;t;)Ec(e,t),t=dn(t.nextSibling)}if(Ws(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=st?dn(e.stateNode.nextSibling):null;return!0}function Ic(){for(var e=lt;e;)e=dn(e.nextSibling)}function lr(){lt=st=null,je=!1}function Il(e){Nt===null?Nt=[e]:Nt.push(e)}var Nf=Kt.ReactCurrentBatchConfig;function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var u=i.refs;l===null?delete u[o]:u[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function Ni(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Us(e){var t=e._init;return t(e._payload)}function Tc(e){function t(v,m){if(e){var b=v.deletions;b===null?(v.deletions=[m],v.flags|=16):b.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function i(v,m){return v=fn(v,m),v.index=0,v.sibling=null,v}function o(v,m,b){return v.index=b,e?(b=v.alternate,b!==null?(b=b.index,b<m?(v.flags|=2,m):b):(v.flags|=2,m)):(v.flags|=1048576,m)}function l(v){return e&&v.alternate===null&&(v.flags|=2),v}function u(v,m,b,M){return m===null||m.tag!==6?(m=lo(b,v.mode,M),m.return=v,m):(m=i(m,b),m.return=v,m)}function d(v,m,b,M){var Y=b.type;return Y===Wn?I(v,m,b.props.children,M,b.key):m!==null&&(m.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Zt&&Us(Y)===m.type)?(M=i(m,b.props),M.ref=Nr(v,m,b),M.return=v,M):(M=Ui(b.type,b.key,b.props,null,v.mode,M),M.ref=Nr(v,m,b),M.return=v,M)}function x(v,m,b,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=so(b,v.mode,M),m.return=v,m):(m=i(m,b.children||[]),m.return=v,m)}function I(v,m,b,M,Y){return m===null||m.tag!==7?(m=Ln(b,v.mode,M,Y),m.return=v,m):(m=i(m,b),m.return=v,m)}function L(v,m,b){if(typeof m=="string"&&m!==""||typeof m=="number")return m=lo(""+m,v.mode,b),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case mi:return b=Ui(m.type,m.key,m.props,null,v.mode,b),b.ref=Nr(v,null,m),b.return=v,b;case Hn:return m=so(m,v.mode,b),m.return=v,m;case Zt:var M=m._init;return L(v,M(m._payload),b)}if(Pr(m)||wr(m))return m=Ln(m,v.mode,b,null),m.return=v,m;Ni(v,m)}return null}function z(v,m,b,M){var Y=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return Y!==null?null:u(v,m,""+b,M);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case mi:return b.key===Y?d(v,m,b,M):null;case Hn:return b.key===Y?x(v,m,b,M):null;case Zt:return Y=b._init,z(v,m,Y(b._payload),M)}if(Pr(b)||wr(b))return Y!==null?null:I(v,m,b,M,null);Ni(v,b)}return null}function g(v,m,b,M,Y){if(typeof M=="string"&&M!==""||typeof M=="number")return v=v.get(b)||null,u(m,v,""+M,Y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case mi:return v=v.get(M.key===null?b:M.key)||null,d(m,v,M,Y);case Hn:return v=v.get(M.key===null?b:M.key)||null,x(m,v,M,Y);case Zt:var G=M._init;return g(v,m,b,G(M._payload),Y)}if(Pr(M)||wr(M))return v=v.get(b)||null,I(m,v,M,Y,null);Ni(m,M)}return null}function F(v,m,b,M){for(var Y=null,G=null,Z=m,te=m=0,ye=null;Z!==null&&te<b.length;te++){Z.index>te?(ye=Z,Z=null):ye=Z.sibling;var ce=z(v,Z,b[te],M);if(ce===null){Z===null&&(Z=ye);break}e&&Z&&ce.alternate===null&&t(v,Z),m=o(ce,m,te),G===null?Y=ce:G.sibling=ce,G=ce,Z=ye}if(te===b.length)return n(v,Z),je&&Nn(v,te),Y;if(Z===null){for(;te<b.length;te++)Z=L(v,b[te],M),Z!==null&&(m=o(Z,m,te),G===null?Y=Z:G.sibling=Z,G=Z);return je&&Nn(v,te),Y}for(Z=r(v,Z);te<b.length;te++)ye=g(Z,v,te,b[te],M),ye!==null&&(e&&ye.alternate!==null&&Z.delete(ye.key===null?te:ye.key),m=o(ye,m,te),G===null?Y=ye:G.sibling=ye,G=ye);return e&&Z.forEach(function(Ke){return t(v,Ke)}),je&&Nn(v,te),Y}function B(v,m,b,M){var Y=wr(b);if(typeof Y!="function")throw Error(D(150));if(b=Y.call(b),b==null)throw Error(D(151));for(var G=Y=null,Z=m,te=m=0,ye=null,ce=b.next();Z!==null&&!ce.done;te++,ce=b.next()){Z.index>te?(ye=Z,Z=null):ye=Z.sibling;var Ke=z(v,Z,ce.value,M);if(Ke===null){Z===null&&(Z=ye);break}e&&Z&&Ke.alternate===null&&t(v,Z),m=o(Ke,m,te),G===null?Y=Ke:G.sibling=Ke,G=Ke,Z=ye}if(ce.done)return n(v,Z),je&&Nn(v,te),Y;if(Z===null){for(;!ce.done;te++,ce=b.next())ce=L(v,ce.value,M),ce!==null&&(m=o(ce,m,te),G===null?Y=ce:G.sibling=ce,G=ce);return je&&Nn(v,te),Y}for(Z=r(v,Z);!ce.done;te++,ce=b.next())ce=g(Z,v,te,ce.value,M),ce!==null&&(e&&ce.alternate!==null&&Z.delete(ce.key===null?te:ce.key),m=o(ce,m,te),G===null?Y=ce:G.sibling=ce,G=ce);return e&&Z.forEach(function(Gt){return t(v,Gt)}),je&&Nn(v,te),Y}function xe(v,m,b,M){if(typeof b=="object"&&b!==null&&b.type===Wn&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case mi:e:{for(var Y=b.key,G=m;G!==null;){if(G.key===Y){if(Y=b.type,Y===Wn){if(G.tag===7){n(v,G.sibling),m=i(G,b.props.children),m.return=v,v=m;break e}}else if(G.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Zt&&Us(Y)===G.type){n(v,G.sibling),m=i(G,b.props),m.ref=Nr(v,G,b),m.return=v,v=m;break e}n(v,G);break}else t(v,G);G=G.sibling}b.type===Wn?(m=Ln(b.props.children,v.mode,M,b.key),m.return=v,v=m):(M=Ui(b.type,b.key,b.props,null,v.mode,M),M.ref=Nr(v,m,b),M.return=v,v=M)}return l(v);case Hn:e:{for(G=b.key;m!==null;){if(m.key===G)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){n(v,m.sibling),m=i(m,b.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=so(b,v.mode,M),m.return=v,v=m}return l(v);case Zt:return G=b._init,xe(v,m,G(b._payload),M)}if(Pr(b))return F(v,m,b,M);if(wr(b))return B(v,m,b,M);Ni(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,m!==null&&m.tag===6?(n(v,m.sibling),m=i(m,b),m.return=v,v=m):(n(v,m),m=lo(b,v.mode,M),m.return=v,v=m),l(v)):n(v,m)}return xe}var sr=Tc(!0),Pc=Tc(!1),aa=xn(null),oa=null,qn=null,Tl=null;function Pl(){Tl=qn=oa=null}function Ll(e){var t=aa.current;Se(aa),e._currentValue=t}function Vo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rr(e,t){oa=e,Tl=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Xe=!0),e.firstContext=null)}function xt(e){var t=e._currentValue;if(Tl!==e)if(e={context:e,memoizedValue:t,next:null},qn===null){if(oa===null)throw Error(D(308));qn=e,oa.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return t}var In=null;function Rl(e){In===null?In=[e]:In.push(e)}function Lc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Rl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qt(e,r)}function Qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function _l(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qt(e,n)}return i=r.interleaved,i===null?(t.next=t,Rl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qt(e,n)}function Oi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yl(e,n)}}function Vs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function la(e,t,n,r){var i=e.updateQueue;en=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var d=u,x=d.next;d.next=null,l===null?o=x:l.next=x,l=d;var I=e.alternate;I!==null&&(I=I.updateQueue,u=I.lastBaseUpdate,u!==l&&(u===null?I.firstBaseUpdate=x:u.next=x,I.lastBaseUpdate=d))}if(o!==null){var L=i.baseState;l=0,I=x=d=null,u=o;do{var z=u.lane,g=u.eventTime;if((r&z)===z){I!==null&&(I=I.next={eventTime:g,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var F=e,B=u;switch(z=t,g=n,B.tag){case 1:if(F=B.payload,typeof F=="function"){L=F.call(g,L,z);break e}L=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=B.payload,z=typeof F=="function"?F.call(g,L,z):F,z==null)break e;L=ze({},L,z);break e;case 2:en=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,z=i.effects,z===null?i.effects=[u]:z.push(u))}else g={eventTime:g,lane:z,tag:u.tag,payload:u.payload,callback:u.callback,next:null},I===null?(x=I=g,d=L):I=I.next=g,l|=z;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;z=u,u=z.next,z.next=null,i.lastBaseUpdate=z,i.shared.pending=null}}while(!0);if(I===null&&(d=L),i.baseState=d,i.firstBaseUpdate=x,i.lastBaseUpdate=I,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Mn|=l,e.lanes=l,e.memoizedState=L}}function $s(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var ui={},Ot=xn(ui),ti=xn(ui),ni=xn(ui);function Tn(e){if(e===ui)throw Error(D(174));return e}function Fl(e,t){switch(ve(ni,t),ve(ti,e),ve(Ot,ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:jo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=jo(t,e)}Se(Ot),ve(Ot,t)}function dr(){Se(Ot),Se(ti),Se(ni)}function _c(e){Tn(ni.current);var t=Tn(Ot.current),n=jo(t,e.type);t!==n&&(ve(ti,e),ve(Ot,n))}function Ml(e){ti.current===e&&(Se(Ot),Se(ti))}var Ce=xn(0);function sa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function Ol(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var Ai=Kt.ReactCurrentDispatcher,no=Kt.ReactCurrentBatchConfig,Fn=0,Ne=null,Pe=null,_e=null,da=!1,Dr=!1,ri=0,zf=0;function Be(){throw Error(D(321))}function Al(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function Dl(e,t,n,r,i,o){if(Fn=o,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ai.current=e===null||e.memoizedState===null?Pf:Lf,e=n(r,i),Dr){o=0;do{if(Dr=!1,ri=0,25<=o)throw Error(D(301));o+=1,_e=Pe=null,t.updateQueue=null,Ai.current=Rf,e=n(r,i)}while(Dr)}if(Ai.current=ca,t=Pe!==null&&Pe.next!==null,Fn=0,_e=Pe=Ne=null,da=!1,t)throw Error(D(300));return e}function Bl(){var e=ri!==0;return ri=0,e}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?Ne.memoizedState=_e=e:_e=_e.next=e,_e}function vt(){if(Pe===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=_e===null?Ne.memoizedState:_e.next;if(t!==null)_e=t,Pe=e;else{if(e===null)throw Error(D(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},_e===null?Ne.memoizedState=_e=e:_e=_e.next=e}return _e}function ii(e,t){return typeof t=="function"?t(e):t}function ro(e){var t=vt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=Pe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,d=null,x=o;do{var I=x.lane;if((Fn&I)===I)d!==null&&(d=d.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),r=x.hasEagerState?x.eagerState:e(r,x.action);else{var L={lane:I,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};d===null?(u=d=L,l=r):d=d.next=L,Ne.lanes|=I,Mn|=I}x=x.next}while(x!==null&&x!==o);d===null?l=r:d.next=u,It(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ne.lanes|=o,Mn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function io(e){var t=vt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);It(o,t.memoizedState)||(Xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Fc(){}function Mc(e,t){var n=Ne,r=vt(),i=t(),o=!It(r.memoizedState,i);if(o&&(r.memoizedState=i,Xe=!0),r=r.queue,Hl(Dc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,ai(9,Ac.bind(null,n,r,i,t),void 0,null),Fe===null)throw Error(D(349));Fn&30||Oc(n,t,i)}return i}function Oc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ac(e,t,n,r){t.value=n,t.getSnapshot=r,Bc(t)&&Hc(e)}function Dc(e,t,n){return n(function(){Bc(t)&&Hc(e)})}function Bc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function Hc(e){var t=Qt(e,1);t!==null&&Et(t,e,1,-1)}function Qs(e){var t=_t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:e},t.queue=e,e=e.dispatch=Tf.bind(null,Ne,e),[t.memoizedState,e]}function ai(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wc(){return vt().memoizedState}function Di(e,t,n,r){var i=_t();Ne.flags|=e,i.memoizedState=ai(1|t,n,void 0,r===void 0?null:r)}function Sa(e,t,n,r){var i=vt();r=r===void 0?null:r;var o=void 0;if(Pe!==null){var l=Pe.memoizedState;if(o=l.destroy,r!==null&&Al(r,l.deps)){i.memoizedState=ai(t,n,o,r);return}}Ne.flags|=e,i.memoizedState=ai(1|t,n,o,r)}function Ys(e,t){return Di(8390656,8,e,t)}function Hl(e,t){return Sa(2048,8,e,t)}function Uc(e,t){return Sa(4,2,e,t)}function Vc(e,t){return Sa(4,4,e,t)}function $c(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qc(e,t,n){return n=n!=null?n.concat([e]):null,Sa(4,4,$c.bind(null,t,e),n)}function Wl(){}function Yc(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Al(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kc(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Al(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gc(e,t,n){return Fn&21?(It(n,t)||(n=ec(),Ne.lanes|=n,Mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=n)}function Ef(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=no.transition;no.transition={};try{e(!1),t()}finally{me=n,no.transition=r}}function qc(){return vt().memoizedState}function If(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jc(e))Xc(t,n);else if(n=Lc(e,t,n,r),n!==null){var i=$e();Et(n,e,r,i),Zc(n,t,r)}}function Tf(e,t,n){var r=pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jc(e))Xc(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,u=o(l,n);if(i.hasEagerState=!0,i.eagerState=u,It(u,l)){var d=t.interleaved;d===null?(i.next=i,Rl(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=Lc(e,t,i,r),n!==null&&(i=$e(),Et(n,e,r,i),Zc(n,t,r))}}function Jc(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function Xc(e,t){Dr=da=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yl(e,n)}}var ca={readContext:xt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},Pf={readContext:xt,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:Ys,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Di(4194308,4,$c.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Di(4194308,4,e,t)},useInsertionEffect:function(e,t){return Di(4,2,e,t)},useMemo:function(e,t){var n=_t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=If.bind(null,Ne,e),[r.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:Qs,useDebugValue:Wl,useDeferredValue:function(e){return _t().memoizedState=e},useTransition:function(){var e=Qs(!1),t=e[0];return e=Ef.bind(null,e[1]),_t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ne,i=_t();if(je){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),Fe===null)throw Error(D(349));Fn&30||Oc(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ys(Dc.bind(null,r,o,e),[e]),r.flags|=2048,ai(9,Ac.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=_t(),t=Fe.identifierPrefix;if(je){var n=Wt,r=Ht;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ri++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lf={readContext:xt,useCallback:Yc,useContext:xt,useEffect:Hl,useImperativeHandle:Qc,useInsertionEffect:Uc,useLayoutEffect:Vc,useMemo:Kc,useReducer:ro,useRef:Wc,useState:function(){return ro(ii)},useDebugValue:Wl,useDeferredValue:function(e){var t=vt();return Gc(t,Pe.memoizedState,e)},useTransition:function(){var e=ro(ii)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:Mc,useId:qc,unstable_isNewReconciler:!1},Rf={readContext:xt,useCallback:Yc,useContext:xt,useEffect:Hl,useImperativeHandle:Qc,useInsertionEffect:Uc,useLayoutEffect:Vc,useMemo:Kc,useReducer:io,useRef:Wc,useState:function(){return io(ii)},useDebugValue:Wl,useDeferredValue:function(e){var t=vt();return Pe===null?t.memoizedState=e:Gc(t,Pe.memoizedState,e)},useTransition:function(){var e=io(ii)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:Mc,useId:qc,unstable_isNewReconciler:!1};function jt(e,t){if(e&&e.defaultProps){t=ze({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $o(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ze({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ja={isMounted:function(e){return(e=e._reactInternals)?Dn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$e(),i=pn(e),o=Ut(r,i);o.payload=t,n!=null&&(o.callback=n),t=cn(e,o,i),t!==null&&(Et(t,e,i,r),Oi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$e(),i=pn(e),o=Ut(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=cn(e,o,i),t!==null&&(Et(t,e,i,r),Oi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$e(),r=pn(e),i=Ut(n,r);i.tag=2,t!=null&&(i.callback=t),t=cn(e,i,r),t!==null&&(Et(t,e,r,n),Oi(t,e,r))}};function Ks(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Jr(n,r)||!Jr(i,o):!0}function eu(e,t,n){var r=!1,i=mn,o=t.contextType;return typeof o=="object"&&o!==null?o=xt(o):(i=et(t)?Rn:Ue.current,r=t.contextTypes,o=(r=r!=null)?or(e,i):mn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ja,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ja.enqueueReplaceState(t,t.state,null)}function Qo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},_l(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=xt(o):(o=et(t)?Rn:Ue.current,i.context=or(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&($o(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ja.enqueueReplaceState(i,i.state,null),la(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function cr(e,t){try{var n="",r=t;do n+=o0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ao(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Yo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _f=typeof WeakMap=="function"?WeakMap:Map;function tu(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pa||(pa=!0,rl=r),Yo(e,t)},n}function nu(e,t,n){n=Ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Yo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Yo(e,t),typeof r!="function"&&(un===null?un=new Set([this]):un.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function qs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _f;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Kf.bind(null,e,t,n),t.then(e,e))}function Js(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,cn(n,t,1))),n.lanes|=1),e)}var Ff=Kt.ReactCurrentOwner,Xe=!1;function Ve(e,t,n,r){t.child=e===null?Pc(t,null,n,r):sr(t,e.child,n,r)}function Zs(e,t,n,r,i){n=n.render;var o=t.ref;return rr(t,i),r=Dl(e,t,n,r,o,i),n=Bl(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(je&&n&&zl(t),t.flags|=1,Ve(e,t,r,i),t.child)}function ed(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ql(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ru(e,t,o,r,i)):(e=Ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Jr,n(l,r)&&e.ref===t.ref)return Yt(e,t,i)}return t.flags|=1,e=fn(o,r),e.ref=t.ref,e.return=t,t.child=e}function ru(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Jr(o,r)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,Yt(e,t,i)}return Ko(e,t,n,r,i)}function iu(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Xn,ot),ot|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(Xn,ot),ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ve(Xn,ot),ot|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ve(Xn,ot),ot|=r;return Ve(e,t,i,n),t.child}function au(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ko(e,t,n,r,i){var o=et(n)?Rn:Ue.current;return o=or(t,o),rr(t,i),n=Dl(e,t,n,r,o,i),r=Bl(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(je&&r&&zl(t),t.flags|=1,Ve(e,t,n,i),t.child)}function td(e,t,n,r,i){if(et(n)){var o=!0;na(t)}else o=!1;if(rr(t,i),t.stateNode===null)Bi(e,t),eu(t,n,r),Qo(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var d=l.context,x=n.contextType;typeof x=="object"&&x!==null?x=xt(x):(x=et(n)?Rn:Ue.current,x=or(t,x));var I=n.getDerivedStateFromProps,L=typeof I=="function"||typeof l.getSnapshotBeforeUpdate=="function";L||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||d!==x)&&Gs(t,l,r,x),en=!1;var z=t.memoizedState;l.state=z,la(t,r,l,i),d=t.memoizedState,u!==r||z!==d||Ze.current||en?(typeof I=="function"&&($o(t,n,I,r),d=t.memoizedState),(u=en||Ks(t,n,u,r,z,d,x))?(L||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=x,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Rc(e,t),u=t.memoizedProps,x=t.type===t.elementType?u:jt(t.type,u),l.props=x,L=t.pendingProps,z=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=xt(d):(d=et(n)?Rn:Ue.current,d=or(t,d));var g=n.getDerivedStateFromProps;(I=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==L||z!==d)&&Gs(t,l,r,d),en=!1,z=t.memoizedState,l.state=z,la(t,r,l,i);var F=t.memoizedState;u!==L||z!==F||Ze.current||en?(typeof g=="function"&&($o(t,n,g,r),F=t.memoizedState),(x=en||Ks(t,n,x,r,z,F,d)||!1)?(I||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,F,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,F,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=F),l.props=r,l.state=F,l.context=d,r=x):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),r=!1)}return Go(e,t,n,r,o,i)}function Go(e,t,n,r,i,o){au(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Bs(t,n,!1),Yt(e,t,o);r=t.stateNode,Ff.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=sr(t,e.child,null,o),t.child=sr(t,null,u,o)):Ve(e,t,u,o),t.memoizedState=r.state,i&&Bs(t,n,!0),t.child}function ou(e){var t=e.stateNode;t.pendingContext?Ds(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ds(e,t.context,!1),Fl(e,t.containerInfo)}function nd(e,t,n,r,i){return lr(),Il(i),t.flags|=256,Ve(e,t,n,r),t.child}var qo={dehydrated:null,treeContext:null,retryLane:0};function Jo(e){return{baseLanes:e,cachePool:null,transitions:null}}function lu(e,t,n){var r=t.pendingProps,i=Ce.current,o=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(Ce,i&1),e===null)return Uo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=za(l,r,0,null),e=Ln(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Jo(n),t.memoizedState=qo,e):Ul(t,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Mf(e,t,l,r,u,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,u=i.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=fn(i,d),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=fn(u,o):(o=Ln(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Jo(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=qo,r}return o=e.child,e=o.sibling,r=fn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ul(e,t){return t=za({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zi(e,t,n,r){return r!==null&&Il(r),sr(t,e.child,null,n),e=Ul(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mf(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=ao(Error(D(422))),zi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=za({mode:"visible",children:r.children},i,0,null),o=Ln(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&sr(t,e.child,null,l),t.child.memoizedState=Jo(l),t.memoizedState=qo,o);if(!(t.mode&1))return zi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(D(419)),r=ao(o,r,void 0),zi(e,t,l,r)}if(u=(l&e.childLanes)!==0,Xe||u){if(r=Fe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qt(e,i),Et(r,e,i,-1))}return Gl(),r=ao(Error(D(421))),zi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Gf.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,lt=dn(i.nextSibling),st=t,je=!0,Nt=null,e!==null&&(ft[gt++]=Ht,ft[gt++]=Wt,ft[gt++]=_n,Ht=e.id,Wt=e.overflow,_n=t),t=Ul(t,r.children),t.flags|=4096,t)}function rd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vo(e.return,t,n)}function oo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function su(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ve(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rd(e,n,t);else if(e.tag===19)rd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&sa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),oo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&sa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}oo(t,!0,n,null,o);break;case"together":oo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Of(e,t,n){switch(t.tag){case 3:ou(t),lr();break;case 5:_c(t);break;case 1:et(t.type)&&na(t);break;case 4:Fl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ve(aa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?lu(e,t,n):(ve(Ce,Ce.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);ve(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return su(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,iu(e,t,n)}return Yt(e,t,n)}var du,Xo,cu,uu;du=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xo=function(){};cu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Tn(Ot.current);var o=null;switch(n){case"input":i=bo(e,i),r=bo(e,r),o=[];break;case"select":i=ze({},i,{value:void 0}),r=ze({},r,{value:void 0}),o=[];break;case"textarea":i=So(e,i),r=So(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ea)}Co(n,r);var l;n=null;for(x in i)if(!r.hasOwnProperty(x)&&i.hasOwnProperty(x)&&i[x]!=null)if(x==="style"){var u=i[x];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(Vr.hasOwnProperty(x)?o||(o=[]):(o=o||[]).push(x,null));for(x in r){var d=r[x];if(u=i!=null?i[x]:void 0,r.hasOwnProperty(x)&&d!==u&&(d!=null||u!=null))if(x==="style")if(u){for(l in u)!u.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&u[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(o||(o=[]),o.push(x,n)),n=d;else x==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(o=o||[]).push(x,d)):x==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(x,""+d):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(Vr.hasOwnProperty(x)?(d!=null&&x==="onScroll"&&ke("scroll",e),o||u===d||(o=[])):(o=o||[]).push(x,d))}n&&(o=o||[]).push("style",n);var x=o;(t.updateQueue=x)&&(t.flags|=4)}};uu=function(e,t,n,r){n!==r&&(t.flags|=4)};function zr(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Af(e,t,n){var r=t.pendingProps;switch(El(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return et(t.type)&&ta(),He(t),null;case 3:return r=t.stateNode,dr(),Se(Ze),Se(Ue),Ol(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ci(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nt!==null&&(ol(Nt),Nt=null))),Xo(e,t),He(t),null;case 5:Ml(t);var i=Tn(ni.current);if(n=t.type,e!==null&&t.stateNode!=null)cu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return He(t),null}if(e=Tn(Ot.current),Ci(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ft]=t,r[ei]=o,e=(t.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<Rr.length;i++)ke(Rr[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":ps(r,o),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ke("invalid",r);break;case"textarea":gs(r,o),ke("invalid",r)}Co(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&ji(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&ji(r.textContent,u,e),i=["children",""+u]):Vr.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&ke("scroll",r)}switch(n){case"input":hi(r),fs(r,o,!0);break;case"textarea":hi(r),ms(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ea)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ft]=t,e[ei]=r,du(e,t,!1,!1),t.stateNode=e;e:{switch(l=No(n,r),n){case"dialog":ke("cancel",e),ke("close",e),i=r;break;case"iframe":case"object":case"embed":ke("load",e),i=r;break;case"video":case"audio":for(i=0;i<Rr.length;i++)ke(Rr[i],e);i=r;break;case"source":ke("error",e),i=r;break;case"img":case"image":case"link":ke("error",e),ke("load",e),i=r;break;case"details":ke("toggle",e),i=r;break;case"input":ps(e,r),i=bo(e,r),ke("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ze({},r,{value:void 0}),ke("invalid",e);break;case"textarea":gs(e,r),i=So(e,r),ke("invalid",e);break;default:i=r}Co(n,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var d=u[o];o==="style"?Wd(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Bd(e,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&$r(e,d):typeof d=="number"&&$r(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vr.hasOwnProperty(o)?d!=null&&o==="onScroll"&&ke("scroll",e):d!=null&&fl(e,o,d,l))}switch(n){case"input":hi(e),fs(e,r,!1);break;case"textarea":hi(e),ms(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ea)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)uu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=Tn(ni.current),Tn(Ot.current),Ci(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ft]=t,(o=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:ji(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ji(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ft]=t,t.stateNode=r}return He(t),null;case 13:if(Se(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&lt!==null&&t.mode&1&&!(t.flags&128))Ic(),lr(),t.flags|=98560,o=!1;else if(o=Ci(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(D(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[Ft]=t}else lr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),o=!1}else Nt!==null&&(ol(Nt),Nt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?Le===0&&(Le=3):Gl())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return dr(),Xo(e,t),e===null&&Xr(t.stateNode.containerInfo),He(t),null;case 10:return Ll(t.type._context),He(t),null;case 17:return et(t.type)&&ta(),He(t),null;case 19:if(Se(Ce),o=t.memoizedState,o===null)return He(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)zr(o,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=sa(e),l!==null){for(t.flags|=128,zr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ie()>ur&&(t.flags|=128,r=!0,zr(o,!1),t.lanes=4194304)}else{if(!r)if(e=sa(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!je)return He(t),null}else 2*Ie()-o.renderingStartTime>ur&&n!==1073741824&&(t.flags|=128,r=!0,zr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ie(),t.sibling=null,n=Ce.current,ve(Ce,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return Kl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ot&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function Df(e,t){switch(El(t),t.tag){case 1:return et(t.type)&&ta(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dr(),Se(Ze),Se(Ue),Ol(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ml(t),null;case 13:if(Se(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Ce),null;case 4:return dr(),null;case 10:return Ll(t.type._context),null;case 22:case 23:return Kl(),null;case 24:return null;default:return null}}var Ei=!1,We=!1,Bf=typeof WeakSet=="function"?WeakSet:Set,q=null;function Jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function Zo(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var id=!1;function Hf(e,t){if(Mo=Ji,e=hc(),Nl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,d=-1,x=0,I=0,L=e,z=null;t:for(;;){for(var g;L!==n||i!==0&&L.nodeType!==3||(u=l+i),L!==o||r!==0&&L.nodeType!==3||(d=l+r),L.nodeType===3&&(l+=L.nodeValue.length),(g=L.firstChild)!==null;)z=L,L=g;for(;;){if(L===e)break t;if(z===n&&++x===i&&(u=l),z===o&&++I===r&&(d=l),(g=L.nextSibling)!==null)break;L=z,z=L.parentNode}L=g}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oo={focusedElem:e,selectionRange:n},Ji=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var F=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(F!==null){var B=F.memoizedProps,xe=F.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?B:jt(t.type,B),xe);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(M){Ee(t,t.return,M)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return F=id,id=!1,F}function Br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Zo(t,n,o)}i=i.next}while(i!==r)}}function Ca(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function el(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pu(e){var t=e.alternate;t!==null&&(e.alternate=null,pu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ft],delete t[ei],delete t[Bo],delete t[Sf],delete t[jf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fu(e){return e.tag===5||e.tag===3||e.tag===4}function ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ea));else if(r!==4&&(e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}var Oe=null,Ct=!1;function Xt(e,t,n){for(n=n.child;n!==null;)gu(e,t,n),n=n.sibling}function gu(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(xa,n)}catch{}switch(n.tag){case 5:We||Jn(n,t);case 6:var r=Oe,i=Ct;Oe=null,Xt(e,t,n),Oe=r,Ct=i,Oe!==null&&(Ct?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(Ct?(e=Oe,n=n.stateNode,e.nodeType===8?Za(e.parentNode,n):e.nodeType===1&&Za(e,n),Gr(e)):Za(Oe,n.stateNode));break;case 4:r=Oe,i=Ct,Oe=n.stateNode.containerInfo,Ct=!0,Xt(e,t,n),Oe=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Zo(n,t,l),i=i.next}while(i!==r)}Xt(e,t,n);break;case 1:if(!We&&(Jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Ee(n,t,u)}Xt(e,t,n);break;case 21:Xt(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,Xt(e,t,n),We=r):Xt(e,t,n);break;default:Xt(e,t,n)}}function od(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Bf),t.forEach(function(r){var i=qf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:Oe=u.stateNode,Ct=!1;break e;case 3:Oe=u.stateNode.containerInfo,Ct=!0;break e;case 4:Oe=u.stateNode.containerInfo,Ct=!0;break e}u=u.return}if(Oe===null)throw Error(D(160));gu(o,l,i),Oe=null,Ct=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(x){Ee(i,t,x)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)mu(t,e),t=t.sibling}function mu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kt(t,e),Lt(e),r&4){try{Br(3,e,e.return),Ca(3,e)}catch(B){Ee(e,e.return,B)}try{Br(5,e,e.return)}catch(B){Ee(e,e.return,B)}}break;case 1:kt(t,e),Lt(e),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(kt(t,e),Lt(e),r&512&&n!==null&&Jn(n,n.return),e.flags&32){var i=e.stateNode;try{$r(i,"")}catch(B){Ee(e,e.return,B)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Od(i,o),No(u,l);var x=No(u,o);for(l=0;l<d.length;l+=2){var I=d[l],L=d[l+1];I==="style"?Wd(i,L):I==="dangerouslySetInnerHTML"?Bd(i,L):I==="children"?$r(i,L):fl(i,I,L,x)}switch(u){case"input":wo(i,o);break;case"textarea":Ad(i,o);break;case"select":var z=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Zn(i,!!o.multiple,g,!1):z!==!!o.multiple&&(o.defaultValue!=null?Zn(i,!!o.multiple,o.defaultValue,!0):Zn(i,!!o.multiple,o.multiple?[]:"",!1))}i[ei]=o}catch(B){Ee(e,e.return,B)}}break;case 6:if(kt(t,e),Lt(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(B){Ee(e,e.return,B)}}break;case 3:if(kt(t,e),Lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gr(t.containerInfo)}catch(B){Ee(e,e.return,B)}break;case 4:kt(t,e),Lt(e);break;case 13:kt(t,e),Lt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ql=Ie())),r&4&&od(e);break;case 22:if(I=n!==null&&n.memoizedState!==null,e.mode&1?(We=(x=We)||I,kt(t,e),We=x):kt(t,e),Lt(e),r&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!I&&e.mode&1)for(q=e,I=e.child;I!==null;){for(L=q=I;q!==null;){switch(z=q,g=z.child,z.tag){case 0:case 11:case 14:case 15:Br(4,z,z.return);break;case 1:Jn(z,z.return);var F=z.stateNode;if(typeof F.componentWillUnmount=="function"){r=z,n=z.return;try{t=r,F.props=t.memoizedProps,F.state=t.memoizedState,F.componentWillUnmount()}catch(B){Ee(r,n,B)}}break;case 5:Jn(z,z.return);break;case 22:if(z.memoizedState!==null){sd(L);continue}}g!==null?(g.return=z,q=g):sd(L)}I=I.sibling}e:for(I=null,L=e;;){if(L.tag===5){if(I===null){I=L;try{i=L.stateNode,x?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=L.stateNode,d=L.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=Hd("display",l))}catch(B){Ee(e,e.return,B)}}}else if(L.tag===6){if(I===null)try{L.stateNode.nodeValue=x?"":L.memoizedProps}catch(B){Ee(e,e.return,B)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===e)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===e)break e;for(;L.sibling===null;){if(L.return===null||L.return===e)break e;I===L&&(I=null),L=L.return}I===L&&(I=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:kt(t,e),Lt(e),r&4&&od(e);break;case 21:break;default:kt(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(fu(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($r(i,""),r.flags&=-33);var o=ad(e);nl(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=ad(e);tl(e,u,l);break;default:throw Error(D(161))}}catch(d){Ee(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wf(e,t,n){q=e,hu(e)}function hu(e,t,n){for(var r=(e.mode&1)!==0;q!==null;){var i=q,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ei;if(!l){var u=i.alternate,d=u!==null&&u.memoizedState!==null||We;u=Ei;var x=We;if(Ei=l,(We=d)&&!x)for(q=i;q!==null;)l=q,d=l.child,l.tag===22&&l.memoizedState!==null?dd(i):d!==null?(d.return=l,q=d):dd(i);for(;o!==null;)q=o,hu(o),o=o.sibling;q=i,Ei=u,We=x}ld(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,q=o):ld(e)}}function ld(e){for(;q!==null;){var t=q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||Ca(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:jt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&$s(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$s(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var x=t.alternate;if(x!==null){var I=x.memoizedState;if(I!==null){var L=I.dehydrated;L!==null&&Gr(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}We||t.flags&512&&el(t)}catch(z){Ee(t,t.return,z)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function sd(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function dd(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ca(4,t)}catch(d){Ee(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){Ee(t,i,d)}}var o=t.return;try{el(t)}catch(d){Ee(t,o,d)}break;case 5:var l=t.return;try{el(t)}catch(d){Ee(t,l,d)}}}catch(d){Ee(t,t.return,d)}if(t===e){q=null;break}var u=t.sibling;if(u!==null){u.return=t.return,q=u;break}q=t.return}}var Uf=Math.ceil,ua=Kt.ReactCurrentDispatcher,Vl=Kt.ReactCurrentOwner,ht=Kt.ReactCurrentBatchConfig,ge=0,Fe=null,Te=null,Ae=0,ot=0,Xn=xn(0),Le=0,oi=null,Mn=0,Na=0,$l=0,Hr=null,Je=null,Ql=0,ur=1/0,Dt=null,pa=!1,rl=null,un=null,Ii=!1,an=null,fa=0,Wr=0,il=null,Hi=-1,Wi=0;function $e(){return ge&6?Ie():Hi!==-1?Hi:Hi=Ie()}function pn(e){return e.mode&1?ge&2&&Ae!==0?Ae&-Ae:Nf.transition!==null?(Wi===0&&(Wi=ec()),Wi):(e=me,e!==0||(e=window.event,e=e===void 0?16:lc(e.type)),e):1}function Et(e,t,n,r){if(50<Wr)throw Wr=0,il=null,Error(D(185));si(e,n,r),(!(ge&2)||e!==Fe)&&(e===Fe&&(!(ge&2)&&(Na|=n),Le===4&&nn(e,Ae)),tt(e,r),n===1&&ge===0&&!(t.mode&1)&&(ur=Ie()+500,ka&&vn()))}function tt(e,t){var n=e.callbackNode;C0(e,t);var r=qi(e,e===Fe?Ae:0);if(r===0)n!==null&&vs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&vs(n),t===1)e.tag===0?Cf(cd.bind(null,e)):Nc(cd.bind(null,e)),wf(function(){!(ge&6)&&vn()}),n=null;else{switch(tc(r)){case 1:n=vl;break;case 4:n=Xd;break;case 16:n=Gi;break;case 536870912:n=Zd;break;default:n=Gi}n=ju(n,xu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xu(e,t){if(Hi=-1,Wi=0,ge&6)throw Error(D(327));var n=e.callbackNode;if(ir()&&e.callbackNode!==n)return null;var r=qi(e,e===Fe?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ga(e,r);else{t=r;var i=ge;ge|=2;var o=yu();(Fe!==e||Ae!==t)&&(Dt=null,ur=Ie()+500,Pn(e,t));do try{Qf();break}catch(u){vu(e,u)}while(!0);Pl(),ua.current=o,ge=i,Te!==null?t=0:(Fe=null,Ae=0,t=Le)}if(t!==0){if(t===2&&(i=Po(e),i!==0&&(r=i,t=al(e,i))),t===1)throw n=oi,Pn(e,0),nn(e,r),tt(e,Ie()),n;if(t===6)nn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Vf(i)&&(t=ga(e,r),t===2&&(o=Po(e),o!==0&&(r=o,t=al(e,o))),t===1))throw n=oi,Pn(e,0),nn(e,r),tt(e,Ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:zn(e,Je,Dt);break;case 3:if(nn(e,r),(r&130023424)===r&&(t=Ql+500-Ie(),10<t)){if(qi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Do(zn.bind(null,e,Je,Dt),t);break}zn(e,Je,Dt);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-zt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Uf(r/1960))-r,10<r){e.timeoutHandle=Do(zn.bind(null,e,Je,Dt),r);break}zn(e,Je,Dt);break;case 5:zn(e,Je,Dt);break;default:throw Error(D(329))}}}return tt(e,Ie()),e.callbackNode===n?xu.bind(null,e):null}function al(e,t){var n=Hr;return e.current.memoizedState.isDehydrated&&(Pn(e,t).flags|=256),e=ga(e,t),e!==2&&(t=Je,Je=n,t!==null&&ol(t)),e}function ol(e){Je===null?Je=e:Je.push.apply(Je,e)}function Vf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!It(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~$l,t&=~Na,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-zt(t),r=1<<n;e[n]=-1,t&=~r}}function cd(e){if(ge&6)throw Error(D(327));ir();var t=qi(e,0);if(!(t&1))return tt(e,Ie()),null;var n=ga(e,t);if(e.tag!==0&&n===2){var r=Po(e);r!==0&&(t=r,n=al(e,r))}if(n===1)throw n=oi,Pn(e,0),nn(e,t),tt(e,Ie()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zn(e,Je,Dt),tt(e,Ie()),null}function Yl(e,t){var n=ge;ge|=1;try{return e(t)}finally{ge=n,ge===0&&(ur=Ie()+500,ka&&vn())}}function On(e){an!==null&&an.tag===0&&!(ge&6)&&ir();var t=ge;ge|=1;var n=ht.transition,r=me;try{if(ht.transition=null,me=1,e)return e()}finally{me=r,ht.transition=n,ge=t,!(ge&6)&&vn()}}function Kl(){ot=Xn.current,Se(Xn)}function Pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bf(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(El(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ta();break;case 3:dr(),Se(Ze),Se(Ue),Ol();break;case 5:Ml(r);break;case 4:dr();break;case 13:Se(Ce);break;case 19:Se(Ce);break;case 10:Ll(r.type._context);break;case 22:case 23:Kl()}n=n.return}if(Fe=e,Te=e=fn(e.current,null),Ae=ot=t,Le=0,oi=null,$l=Na=Mn=0,Je=Hr=null,In!==null){for(t=0;t<In.length;t++)if(n=In[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}In=null}return e}function vu(e,t){do{var n=Te;try{if(Pl(),Ai.current=ca,da){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}da=!1}if(Fn=0,_e=Pe=Ne=null,Dr=!1,ri=0,Vl.current=null,n===null||n.return===null){Le=1,oi=t,Te=null;break}e:{var o=e,l=n.return,u=n,d=t;if(t=Ae,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var x=d,I=u,L=I.tag;if(!(I.mode&1)&&(L===0||L===11||L===15)){var z=I.alternate;z?(I.updateQueue=z.updateQueue,I.memoizedState=z.memoizedState,I.lanes=z.lanes):(I.updateQueue=null,I.memoizedState=null)}var g=Js(l);if(g!==null){g.flags&=-257,Xs(g,l,u,o,t),g.mode&1&&qs(o,x,t),t=g,d=x;var F=t.updateQueue;if(F===null){var B=new Set;B.add(d),t.updateQueue=B}else F.add(d);break e}else{if(!(t&1)){qs(o,x,t),Gl();break e}d=Error(D(426))}}else if(je&&u.mode&1){var xe=Js(l);if(xe!==null){!(xe.flags&65536)&&(xe.flags|=256),Xs(xe,l,u,o,t),Il(cr(d,u));break e}}o=d=cr(d,u),Le!==4&&(Le=2),Hr===null?Hr=[o]:Hr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=tu(o,d,t);Vs(o,v);break e;case 1:u=d;var m=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(un===null||!un.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var M=nu(o,u,t);Vs(o,M);break e}}o=o.return}while(o!==null)}wu(n)}catch(Y){t=Y,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function yu(){var e=ua.current;return ua.current=ca,e===null?ca:e}function Gl(){(Le===0||Le===3||Le===2)&&(Le=4),Fe===null||!(Mn&268435455)&&!(Na&268435455)||nn(Fe,Ae)}function ga(e,t){var n=ge;ge|=2;var r=yu();(Fe!==e||Ae!==t)&&(Dt=null,Pn(e,t));do try{$f();break}catch(i){vu(e,i)}while(!0);if(Pl(),ge=n,ua.current=r,Te!==null)throw Error(D(261));return Fe=null,Ae=0,Le}function $f(){for(;Te!==null;)bu(Te)}function Qf(){for(;Te!==null&&!h0();)bu(Te)}function bu(e){var t=Su(e.alternate,e,ot);e.memoizedProps=e.pendingProps,t===null?wu(e):Te=t,Vl.current=null}function wu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Df(n,t),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Te=null;return}}else if(n=Af(n,t,ot),n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Le===0&&(Le=5)}function zn(e,t,n){var r=me,i=ht.transition;try{ht.transition=null,me=1,Yf(e,t,n,r)}finally{ht.transition=i,me=r}return null}function Yf(e,t,n,r){do ir();while(an!==null);if(ge&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(N0(e,o),e===Fe&&(Te=Fe=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ii||(Ii=!0,ju(Gi,function(){return ir(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ht.transition,ht.transition=null;var l=me;me=1;var u=ge;ge|=4,Vl.current=null,Hf(e,n),mu(n,e),ff(Oo),Ji=!!Mo,Oo=Mo=null,e.current=n,Wf(n),x0(),ge=u,me=l,ht.transition=o}else e.current=n;if(Ii&&(Ii=!1,an=e,fa=i),o=e.pendingLanes,o===0&&(un=null),b0(n.stateNode),tt(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pa)throw pa=!1,e=rl,rl=null,e;return fa&1&&e.tag!==0&&ir(),o=e.pendingLanes,o&1?e===il?Wr++:(Wr=0,il=e):Wr=0,vn(),null}function ir(){if(an!==null){var e=tc(fa),t=ht.transition,n=me;try{if(ht.transition=null,me=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,fa=0,ge&6)throw Error(D(331));var i=ge;for(ge|=4,q=e.current;q!==null;){var o=q,l=o.child;if(q.flags&16){var u=o.deletions;if(u!==null){for(var d=0;d<u.length;d++){var x=u[d];for(q=x;q!==null;){var I=q;switch(I.tag){case 0:case 11:case 15:Br(8,I,o)}var L=I.child;if(L!==null)L.return=I,q=L;else for(;q!==null;){I=q;var z=I.sibling,g=I.return;if(pu(I),I===x){q=null;break}if(z!==null){z.return=g,q=z;break}q=g}}}var F=o.alternate;if(F!==null){var B=F.child;if(B!==null){F.child=null;do{var xe=B.sibling;B.sibling=null,B=xe}while(B!==null)}}q=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,q=l;else e:for(;q!==null;){if(o=q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Br(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,q=v;break e}q=o.return}}var m=e.current;for(q=m;q!==null;){l=q;var b=l.child;if(l.subtreeFlags&2064&&b!==null)b.return=l,q=b;else e:for(l=m;q!==null;){if(u=q,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Ca(9,u)}}catch(Y){Ee(u,u.return,Y)}if(u===l){q=null;break e}var M=u.sibling;if(M!==null){M.return=u.return,q=M;break e}q=u.return}}if(ge=i,vn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(xa,e)}catch{}r=!0}return r}finally{me=n,ht.transition=t}}return!1}function ud(e,t,n){t=cr(n,t),t=tu(e,t,1),e=cn(e,t,1),t=$e(),e!==null&&(si(e,1,t),tt(e,t))}function Ee(e,t,n){if(e.tag===3)ud(e,e,n);else for(;t!==null;){if(t.tag===3){ud(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){e=cr(n,e),e=nu(t,e,1),t=cn(t,e,1),e=$e(),t!==null&&(si(t,1,e),tt(t,e));break}}t=t.return}}function Kf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(Ae&n)===n&&(Le===4||Le===3&&(Ae&130023424)===Ae&&500>Ie()-Ql?Pn(e,0):$l|=n),tt(e,t)}function ku(e,t){t===0&&(e.mode&1?(t=yi,yi<<=1,!(yi&130023424)&&(yi=4194304)):t=1);var n=$e();e=Qt(e,t),e!==null&&(si(e,t,n),tt(e,n))}function Gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ku(e,n)}function qf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),ku(e,n)}var Su;Su=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)Xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Xe=!1,Of(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,je&&t.flags&1048576&&zc(t,ia,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bi(e,t),e=t.pendingProps;var i=or(t,Ue.current);rr(t,n),i=Dl(null,t,r,e,i,n);var o=Bl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(o=!0,na(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_l(t),i.updater=ja,t.stateNode=i,i._reactInternals=t,Qo(t,r,e,n),t=Go(null,t,r,!0,o,n)):(t.tag=0,je&&o&&zl(t),Ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Xf(r),e=jt(r,e),i){case 0:t=Ko(null,t,r,e,n);break e;case 1:t=td(null,t,r,e,n);break e;case 11:t=Zs(null,t,r,e,n);break e;case 14:t=ed(null,t,r,jt(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),Ko(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),td(e,t,r,i,n);case 3:e:{if(ou(t),e===null)throw Error(D(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Rc(e,t),la(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=cr(Error(D(423)),t),t=nd(e,t,r,n,i);break e}else if(r!==i){i=cr(Error(D(424)),t),t=nd(e,t,r,n,i);break e}else for(lt=dn(t.stateNode.containerInfo.firstChild),st=t,je=!0,Nt=null,n=Pc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lr(),r===i){t=Yt(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return _c(t),e===null&&Uo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ao(r,i)?l=null:o!==null&&Ao(r,o)&&(t.flags|=32),au(e,t),Ve(e,t,l,n),t.child;case 6:return e===null&&Uo(t),null;case 13:return lu(e,t,n);case 4:return Fl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=sr(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),Zs(e,t,r,i,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ve(aa,r._currentValue),r._currentValue=l,o!==null)if(It(o.value,l)){if(o.children===i.children&&!Ze.current){t=Yt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(o.tag===1){d=Ut(-1,n&-n),d.tag=2;var x=o.updateQueue;if(x!==null){x=x.shared;var I=x.pending;I===null?d.next=d:(d.next=I.next,I.next=d),x.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),Vo(o.return,n,t),u.lanes|=n;break}d=d.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(D(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Vo(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,rr(t,n),i=xt(i),r=r(i),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,i=jt(r,t.pendingProps),i=jt(r.type,i),ed(e,t,r,i,n);case 15:return ru(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),Bi(e,t),t.tag=1,et(r)?(e=!0,na(t)):e=!1,rr(t,n),eu(t,r,i),Qo(t,r,i,n),Go(null,t,r,!0,e,n);case 19:return su(e,t,n);case 22:return iu(e,t,n)}throw Error(D(156,t.tag))};function ju(e,t){return Jd(e,t)}function Jf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new Jf(e,t,n,r)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xf(e){if(typeof e=="function")return ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ml)return 11;if(e===hl)return 14}return 2}function fn(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ui(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")ql(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Wn:return Ln(n.children,i,o,t);case gl:l=8,i|=8;break;case ho:return e=mt(12,n,t,i|2),e.elementType=ho,e.lanes=o,e;case xo:return e=mt(13,n,t,i),e.elementType=xo,e.lanes=o,e;case vo:return e=mt(19,n,t,i),e.elementType=vo,e.lanes=o,e;case _d:return za(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ld:l=10;break e;case Rd:l=9;break e;case ml:l=11;break e;case hl:l=14;break e;case Zt:l=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=mt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Ln(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function za(e,t,n,r){return e=mt(22,e,r,t),e.elementType=_d,e.lanes=n,e.stateNode={isHidden:!1},e}function lo(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function so(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wa(0),this.expirationTimes=Wa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jl(e,t,n,r,i,o,l,u,d){return e=new Zf(e,t,n,u,d),t===1?(t=1,o===!0&&(t|=8)):t=0,o=mt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_l(o),e}function eg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cu(e){if(!e)return mn;e=e._reactInternals;e:{if(Dn(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(et(n))return Cc(e,n,t)}return t}function Nu(e,t,n,r,i,o,l,u,d){return e=Jl(n,r,!0,e,i,o,l,u,d),e.context=Cu(null),n=e.current,r=$e(),i=pn(n),o=Ut(r,i),o.callback=t??null,cn(n,o,i),e.current.lanes=i,si(e,i,r),tt(e,r),e}function Ea(e,t,n,r){var i=t.current,o=$e(),l=pn(i);return n=Cu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=cn(i,t,l),e!==null&&(Et(e,i,l,o),Oi(e,i,l)),l}function ma(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xl(e,t){pd(e,t),(e=e.alternate)&&pd(e,t)}function tg(){return null}var zu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zl(e){this._internalRoot=e}Ia.prototype.render=Zl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Ea(e,t,null,null)};Ia.prototype.unmount=Zl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){Ea(null,e,null,null)}),t[$t]=null}};function Ia(e){this._internalRoot=e}Ia.prototype.unstable_scheduleHydration=function(e){if(e){var t=ic();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&oc(e)}};function es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fd(){}function ng(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var x=ma(l);o.call(x)}}var l=Nu(t,r,e,0,null,!1,!1,"",fd);return e._reactRootContainer=l,e[$t]=l.current,Xr(e.nodeType===8?e.parentNode:e),On(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var x=ma(d);u.call(x)}}var d=Jl(e,0,!1,null,null,!1,!1,"",fd);return e._reactRootContainer=d,e[$t]=d.current,Xr(e.nodeType===8?e.parentNode:e),On(function(){Ea(t,d,n,r)}),d}function Pa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var d=ma(l);u.call(d)}}Ea(t,l,e,i)}else l=ng(n,t,e,i,r);return ma(l)}nc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Lr(t.pendingLanes);n!==0&&(yl(t,n|1),tt(t,Ie()),!(ge&6)&&(ur=Ie()+500,vn()))}break;case 13:On(function(){var r=Qt(e,1);if(r!==null){var i=$e();Et(r,e,1,i)}}),Xl(e,1)}};bl=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var n=$e();Et(t,e,134217728,n)}Xl(e,134217728)}};rc=function(e){if(e.tag===13){var t=pn(e),n=Qt(e,t);if(n!==null){var r=$e();Et(n,e,t,r)}Xl(e,t)}};ic=function(){return me};ac=function(e,t){var n=me;try{return me=e,t()}finally{me=n}};Eo=function(e,t,n){switch(t){case"input":if(wo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wa(r);if(!i)throw Error(D(90));Md(r),wo(r,i)}}}break;case"textarea":Ad(e,n);break;case"select":t=n.value,t!=null&&Zn(e,!!n.multiple,t,!1)}};$d=Yl;Qd=On;var rg={usingClientEntryPoint:!1,Events:[ci,Qn,wa,Ud,Vd,Yl]},Er={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ig={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gd(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||tg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ti.isDisabled&&Ti.supportsFiber)try{xa=Ti.inject(ig),Mt=Ti}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rg;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!es(t))throw Error(D(200));return eg(e,t,null,n)};ct.createRoot=function(e,t){if(!es(e))throw Error(D(299));var n=!1,r="",i=zu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Jl(e,1,!1,null,null,n,!1,r,i),e[$t]=t.current,Xr(e.nodeType===8?e.parentNode:e),new Zl(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=Gd(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return On(e)};ct.hydrate=function(e,t,n){if(!Ta(t))throw Error(D(200));return Pa(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!es(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=zu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Nu(t,null,e,1,n??null,i,!1,o,l),e[$t]=t.current,Xr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ia(t)};ct.render=function(e,t,n){if(!Ta(t))throw Error(D(200));return Pa(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!Ta(e))throw Error(D(40));return e._reactRootContainer?(On(function(){Pa(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};ct.unstable_batchedUpdates=Yl;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ta(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return Pa(e,t,n,!1,r)};ct.version="18.3.1-next-f1338f8080-20240426";function Eu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Eu)}catch(e){console.error(e)}}Eu(),Ed.exports=ct;var ag=Ed.exports,gd=ag;go.createRoot=gd.createRoot,go.hydrateRoot=gd.hydrateRoot;const og=`
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

/* ===== HEADER — schmal, dunkel, edel ===== */
header{
  display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;
  padding:10px 18px;
  margin:10px 0 0;
  position:relative;
  border-radius: 14px;
  background:
    linear-gradient(180deg,
      rgba(16,8,34,0.92) 0%,
      rgba(9,4,20,0.96) 50%,
      rgba(5,2,12,0.98) 100%);
  border: 1px solid rgba(148,94,255,0.12);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.04),
    inset 0 -1px 0 rgba(0,0,0,0.6),
    0 2px 10px rgba(0,0,0,0.45);
}
/* Feine, edle Trennlinie unter dem Header */
header::after{
  content:"";
  position:absolute;
  left: 20px;
  right: 20px;
  bottom: -1px;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(168,85,247,0.10) 12%,
    rgba(255,45,149,0.28) 32%,
    rgba(255,209,102,0.35) 50%,
    rgba(168,85,247,0.28) 68%,
    rgba(148,94,255,0.10) 88%,
    transparent 100%
  );
  pointer-events: none;
}

/* ===== BRAND — Logo (wird angezeigt, wenn man in einem Jahr ist) ===== */
.brand-logo{
  display:inline-flex;
  align-items:center;
  width: 200px;
  height: 54px;
  background-image: url('./ESCLOGO.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left center;
  filter: drop-shadow(0 0 11px rgba(255,45,149,0.33)) drop-shadow(0 0 5px rgba(255,209,102,0.22));
  flex-shrink: 0;
  /* Negativer Margin neutralisiert die zusätzliche Höhe im Header */
  margin: -12px 0;
}
/* Leerer Platzhalter im Home-Menu: hält den Header-Layout stabil, ohne sichtbaren Inhalt */
.brand-spacer{
  width: 0;
  height: 30px;
  flex-shrink: 0;
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
`;function lg(){const e=document.getElementById("esc-global-styles");e&&e.remove();const t=document.createElement("style");t.id="esc-global-styles",t.textContent=og,document.head.appendChild(t)}lg();const sg={apiKey:"AIzaSyBH4kCFQRjnBbd4cJDDuGSxJbRQAnUQWHw",authDomain:"esc-connect-7bdfe.firebaseapp.com",databaseURL:"https://esc-connect-7bdfe-default-rtdb.europe-west1.firebasedatabase.app",projectId:"esc-connect-7bdfe",storageBucket:"esc-connect-7bdfe.firebasestorage.app",messagingSenderId:"432112365589",appId:"1:432112365589:web:9af0cdb510f2380935de1c"},co={"johnlp1350@gmail.com":{id:"j3",isAdmin:!0},"stahmeln05@gmail.com":{id:"j2",isAdmin:!1},"lucioosy@gmail.com":{id:"j4",isAdmin:!1},"br0k3n.f41ry@gmail.com":{id:"j1",isAdmin:!1}},Vi=[["af","Afghanistan"],["al","Albania"],["am","Armenia"],["au","Australia"],["at","Austria"],["az","Azerbaijan"],["bh","Bahrain"],["bd","Bangladesh"],["by","Belarus"],["be","Belgium"],["bt","Bhutan"],["ba","Bosnia and Herzegovina"],["bn","Brunei"],["bg","Bulgaria"],["kh","Cambodia"],["ca","Canada"],["cn","China"],["hr","Croatia"],["cy","Cyprus"],["cz","Czechia"],["dk","Denmark"],["ee","Estonia"],["fi","Finland"],["fr","France"],["ge","Georgia"],["de","Germany"],["gr","Greece"],["hk","Hong Kong"],["hu","Hungary"],["is","Iceland"],["in","India"],["id","Indonesia"],["ir","Iran"],["iq","Iraq"],["ie","Ireland"],["il","Israel"],["it","Italy"],["jp","Japan"],["jo","Jordan"],["kz","Kazakhstan"],["kw","Kuwait"],["kg","Kyrgyzstan"],["la","Laos"],["lb","Lebanon"],["lv","Latvia"],["lt","Lithuania"],["lu","Luxembourg"],["mo","Macau"],["my","Malaysia"],["mv","Maldives"],["mt","Malta"],["md","Moldova"],["mc","Monaco"],["mn","Mongolia"],["me","Montenegro"],["ma","Morocco"],["mm","Myanmar"],["np","Nepal"],["nl","Netherlands"],["nz","New Zealand"],["kp","North Korea"],["mk","North Macedonia"],["no","Norway"],["om","Oman"],["pk","Pakistan"],["ps","Palestine"],["ph","Philippines"],["pl","Poland"],["pt","Portugal"],["qa","Qatar"],["ro","Romania"],["ru","Russia"],["sa","Saudi Arabia"],["sm","San Marino"],["rs","Serbia"],["sg","Singapore"],["sk","Slovakia"],["si","Slovenia"],["kr","South Korea"],["es","Spain"],["lk","Sri Lanka"],["se","Sweden"],["ch","Switzerland"],["sy","Syria"],["tw","Taiwan"],["tj","Tajikistan"],["th","Thailand"],["tr","Türkiye"],["tm","Turkmenistan"],["ua","Ukraine"],["ae","United Arab Emirates"],["gb","United Kingdom"],["uz","Uzbekistan"],["vn","Vietnam"],["ye","Yemen"]],qe={};for(let e=0;e<Vi.length;e++)qe[Vi[e][0]]=Vi[e][1];const dg={af:"AFG",al:"ALB",am:"ARM",au:"AUS",at:"AUT",az:"AZE",bh:"BHR",bd:"BGD",by:"BLR",be:"BEL",bt:"BTN",ba:"BIH",bn:"BRN",bg:"BGR",kh:"KHM",ca:"CAN",cn:"CHN",hr:"CRO",cy:"CYP",cz:"CZE",dk:"DNK",ee:"EST",fi:"FIN",fr:"FRA",ge:"GEO",de:"GER",gr:"GRE",hk:"HKG",hu:"HUN",is:"ISL",in:"IND",id:"IDN",ir:"IRN",iq:"IRQ",ie:"IRL",il:"ISR",it:"ITA",jp:"JPN",jo:"JOR",kz:"KAZ",kw:"KWT",kg:"KGZ",la:"LAO",lb:"LBN",lv:"LVA",lt:"LTU",lu:"LUX",mo:"MAC",my:"MYS",mv:"MDV",mt:"MLT",md:"MDA",mc:"MCO",mn:"MNG",me:"MNE",ma:"MAR",mm:"MMR",np:"NPL",nl:"NED",nz:"NZL",kp:"PRK",mk:"MKD",no:"NOR",om:"OMN",pk:"PAK",ps:"PSE",ph:"PHL",pl:"POL",pt:"POR",qa:"QAT",ro:"ROU",ru:"RUS",sa:"SAU",sm:"SMR",rs:"SRB",sg:"SGP",sk:"SVK",si:"SVN",kr:"KOR",es:"ESP",lk:"LKA",se:"SWE",ch:"SUI",sy:"SYR",tw:"TWN",tj:"TJK",th:"THA",tr:"TUR",tm:"TKM",ua:"UKR",ae:"ARE",gb:"GBR",uz:"UZB",vn:"VNM",ye:"YEM"},Pi={sf1:"Semi-final 1",sf2:"Semi-final 2",final:"Grand Final"},md={sf1:15,sf2:15,final:26},At="esc-scoreboard-v2",uo="esc-me",Iu=`
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
`;if(typeof document<"u"&&!document.getElementById("battle-table-css")){const e=document.createElement("style");e.id="battle-table-css",e.textContent=Iu,document.head.appendChild(e)}const Ir=e=>e?dg[e.toLowerCase()]||e.toUpperCase():"",K=e=>String(e||""),Ur=e=>+String(e).split("-").pop(),Rt=({cc:e})=>a.jsx("img",{className:"flag","data-cc":e,src:`https://flagcdn.com/w40/${e}.png`,srcSet:`https://flagcdn.com/w40/${e}.png 1x, https://flagcdn.com/w80/${e}.png 2x`,width:"22",height:"15",alt:e.toUpperCase(),loading:"lazy",decoding:"async",onError:t=>{const n=t.target;if(!n.dataset.s){n.dataset.s=1,n.removeAttribute("srcset"),n.src=`https://flagcdn.com/w40/${e}.png`;return}const r=document.createElement("span");r.textContent=e.toUpperCase().split("").map(i=>String.fromCodePoint(127397+i.charCodeAt(0))).join("")+" ",n.replaceWith(r)}}),St=e=>{if(Number(e)===12)return"background:linear-gradient(160deg, #d8b4fe 0%, #a855f7 30%, #6b21a8 80%, #3b0764 100%);color:#ffffff;text-shadow:0 1px 3px rgba(0,0,0,0.9), 0 0 14px rgba(216,180,254,0.7);border:1.5px solid #f3e8ff;box-shadow:0 0 20px rgba(168,85,247,0.6), 0 4px 12px rgba(59,7,100,0.6), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -2px 5px rgba(0,0,0,0.5);";if(Number(e)===10)return"background:linear-gradient(160deg, #ffecb3 0%, #ffd166 50%, #f5b93a 100%);color:#4a2f00;text-shadow:0 1px 0 rgba(255,255,255,0.6);border:1.5px solid #fff4c9;box-shadow:0 0 18px rgba(255,209,102,0.55), 0 3px 10px rgba(180,120,0,0.35), inset 0 1.5px 0 rgba(255,255,255,0.7), inset 0 -2px 5px rgba(150,90,0,0.35);";const t={1:"#e63a2e",2:"#ea6b5f",3:"#ef9b93",4:"#f5c9c5",5:"#f5f5f5",6:"#c9e6d2",7:"#9fd6b1",8:"#71c48d",9:"#47b265"},n={1:"#9b1e15",2:"#b84236",3:"#c96660",4:"#d9a4a0",5:"#c9c9c9",6:"#8ebfa1",7:"#6cae83",8:"#449d66",9:"#2a824a"},r={1:"#b72b1f",2:"#c94a3d",3:"#d6726a",4:"#dc9f9a",5:"#b0b0b0",6:"#95c7a6",7:"#79b98e",8:"#5aa374",9:"#3c9058"},i=t[e]||"#f5f5f5",o=n[e]||"#c9c9c9",l=r[e]||"#b0b0b0",u=e>=6?"#0a2e14":"#1d1d1d";return`background: linear-gradient(160deg, ${i} 0%, ${o} 100%);color: ${u};text-shadow: 0 1px 2px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.2), 0 -1px 0 rgba(255,255,255,0.4);border: 1.5px solid ${l};box-shadow: 0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -3px 6px rgba(0,0,0,0.3);`},ts=()=>({jury:[{id:"j1",name:"Livin"},{id:"j2",name:"Tabi"},{id:"j3",name:"Poki"},{id:"j4",name:"Kiri"}],songs:[],years:[],ratings:{},pred:{},qualPred:{},liveState:{},battleHidden:!1,autoHardReset:!1,livePredictionMode:!1,boycotted:{}}),cg=()=>{try{const e=JSON.parse(localStorage.getItem(At));if(e&&e.jury)return e.qualPred=e.qualPred||{},e.liveState=e.liveState||{},e}catch{}return ts()},Tu=e=>e.sort((t,n)=>{const r=t.customNo!==void 0&&t.customNo!==null&&t.customNo!==""?parseFloat(t.customNo):Ur(t.id),i=n.customNo!==void 0&&n.customNo!==null&&n.customNo!==""?parseFloat(n.customNo):Ur(n.id);return!isNaN(r)&&!isNaN(i)?r-i:String(r).localeCompare(String(i))}),hd=e=>{const t={jury:{},songs:{},years:{},ratings:e.ratings,pred:e.pred,qualPred:e.qualPred,liveState:e.liveState,battleHidden:e.battleHidden||!1,autoHardReset:e.autoHardReset||!1,livePredictionMode:e.livePredictionMode||!1,boycotted:e.boycotted||{}};for(let n=0;n<e.jury.length;n++)t.jury[e.jury[n].id]={name:e.jury[n].name};for(let n=0;n<e.songs.length;n++){const r=e.songs[n];t.songs[r.id]={cc:r.cc,artist:r.artist,title:r.title,year:r.year}}for(let n=0;n<e.years.length;n++){const r=e.years[n],i={year:r.year,suffix:r.suffix,city:r.city,hostCc:r.hostCc,splitAfter:r.splitAfter,showDates:r.showDates,shows:{}};for(const o in r.shows){i.shows[o]={};const l=r.shows[o];for(let u=0;u<l.length;u++){const d=l[u];i.shows[o][d.id]={n:d.customNo,songId:d.songId,place:d.place,dq:d.dq,autoFinal:d.autoFinal}}}t.years[r.id]=i}return t},$i=(e,t,n)=>{t=t||"",n=n||{};for(const r in e){const i=e[r],o=t?t+"/"+r:r;i&&typeof i=="object"?$i(i,o,n):i!=null&&i!==""&&(n[o]=i)}return n},ug=e=>{const t=ts(),n=e.jury||{};for(let o=0;o<t.jury.length;o++)n[t.jury[o].id]&&n[t.jury[o].id].name&&(t.jury[o].name=n[t.jury[o].id].name);t.songs=[];const r=e.songs||{};for(const o in r)r.hasOwnProperty(o)&&t.songs.push(Object.assign({id:o},r[o]));t.years=[];const i=e.years||{};for(const o in i)if(i.hasOwnProperty(o)){const l=i[o],u={};if(l.shows){for(const d in l.shows)if(l.shows.hasOwnProperty(d)){const x=l.shows[d]||{},I=[];for(const L in x)if(x.hasOwnProperty(L)){const z=x[L];I.push({id:L,songId:z.songId,place:z.place,customNo:z.n,dq:z.dq,autoFinal:z.autoFinal})}Tu(I),u[d]=I}}t.years.push({id:o,year:+l.year||+o.split("_")[0],suffix:l.suffix||"",city:l.city,hostCc:l.hostCc,splitAfter:l.splitAfter,showDates:l.showDates||{},shows:u})}return t.years.sort((o,l)=>l.year-o.year||l.id.localeCompare(o.id)),t.ratings=e.ratings||{},t.pred=e.pred||{},t.qualPred=e.qualPred||{},t.liveState=e.liveState||{},t.battleHidden=!!e.battleHidden,t.autoHardReset=!!e.autoHardReset,t.livePredictionMode=!!e.livePredictionMode,t.boycotted=e.boycotted||{},t},po=e=>e>=20?"background: linear-gradient(135deg, #ff0000, #800000); color: #fff; border: 2.5px solid #ff6666; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 0 15px rgba(255,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.3);":e>=15?"background: linear-gradient(135deg, #d90000, #660000); color: #fff; border: 2.5px solid #ff4d4d; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 4px 12px rgba(217,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3);":e>=11?"background: linear-gradient(135deg, #b45309, #78350f); color: #fff; border: 2.5px solid #f59e0b; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 4px 12px rgba(180,83,9,0.4), inset 0 1px 0 rgba(255,255,255,0.2);":e>=8?"background: linear-gradient(135deg, #f97316, #c2410c); color: #fff; border: 2.5px solid #fdba74; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 4px 12px rgba(249,115,22,0.4), inset 0 1px 0 rgba(255,255,255,0.3);":e>=5?"background: linear-gradient(135deg, #facc15, #ca8a04); color: #422006; border: 2.5px solid #fef08a; text-shadow: 0 1px 2px rgba(255,255,255,0.6); box-shadow: 0 4px 12px rgba(250,204,21,0.4), inset 0 1px 0 rgba(255,255,255,0.5);":e>=3?"background: linear-gradient(135deg, #86efac, #22c55e); color: #052e16; border: 2.5px solid #bbf7d0; text-shadow: 0 1px 2px rgba(255,255,255,0.6); box-shadow: 0 4px 12px rgba(34,197,94,0.4), inset 0 1px 0 rgba(255,255,255,0.5);":"background: linear-gradient(135deg, #4ade80, #16a34a); color: #fff; border: 2.5px solid #86efac; text-shadow: 0 1px 3px rgba(0,0,0,0.6); box-shadow: 0 4px 12px rgba(22,163,74,0.4), inset 0 1px 0 rgba(255,255,255,0.4);";function pg(){W.useEffect(()=>{const s=document.getElementById("battle-table-css");s&&s.remove();const p=document.createElement("style");p.id="battle-table-css-"+Date.now(),p.textContent=Iu,document.head.appendChild(p)},[]);const[e,t]=W.useState(cg),[n,r]=W.useState(()=>localStorage.getItem(uo)||null),[i,o]=W.useState(!1),[l,u]=W.useState(()=>localStorage.getItem("esc-admin-view-off")==="true"),[d,x]=W.useState(null),I=!!d&&i&&!l,[L,z]=W.useState(1),[g,F]=W.useState({view:"home",yearId:null,tab:"sf1",subTab:"points",sortMode:"order",ovSubTab:"semis",sbShow:"final",sbSort:"ratings",editMode:!1,q:"",libYear:"",compareCc:null,enter:!1}),[B,xe]=W.useState({open:!1,mode:null,payload:null}),[v,m]=W.useState([]),[b,M]=W.useState({}),Y=!!e.autoHardReset,G=W.useRef({}),Z=W.useRef(null),te=W.useRef(!1),ye=W.useRef(null),ce=W.useRef(null),Ke=W.useRef(e.ratings),Gt=W.useRef(e.pred);W.useRef(null);const be=W.useCallback(s=>e.years.find(p=>p.id===s)||null,[e.years]),we=W.useCallback(s=>e.songs.find(p=>p.id===s)||null,[e.songs]),yn=W.useCallback(s=>{const p=e.jury.find(c=>c.id===s);return p?p.name:s},[e.jury]),bn=W.useCallback(s=>{for(const p of e.years)for(const c in p.shows){const f=p.shows[c].find(h=>h.id===s);if(f)return f}return null},[e.years]),nt=W.useCallback(s=>s?s.songId&&e.ratings[s.songId]?e.ratings[s.songId]:e.ratings[s.id]?e.ratings[s.id]:{}:{},[e.ratings]),Q=W.useCallback(s=>s?e.qualPred[s.id]?e.qualPred[s.id]:{}:{},[e.qualPred]),ae=W.useCallback(s=>s?!!(e.boycotted&&e.boycotted[s]):!1,[e.boycotted]),ne=W.useCallback((s,p)=>{const c=Date.now()+Math.random();m(f=>[...f,{id:c,msg:s,type:p||""}]),setTimeout(()=>{m(f=>f.filter(h=>h.id!==c))},2600)},[]),ie=W.useCallback((s,p={})=>{xe({open:!0,mode:s,payload:p})},[]),le=W.useCallback(()=>{xe({open:!1,mode:null,payload:null}),setModalTempRating(null),setModalTempEntryId(null),setModalTempJurId(null)},[]);W.useEffect(()=>{const s=ce.current;if(s){if(B.open&&!s.open){const p=window.scrollY;try{s.showModal()}catch{}requestAnimationFrame(()=>{window.scrollTo(0,p)}),document.body.style.overflow="hidden"}if(!B.open&&s.open){try{s.close()}catch{}document.body.style.overflow=""}}},[B.open]);const wn=W.useCallback(s=>{const p=Z.current;if(!p)return;const c=$i(hd(s)),f={};for(const h in c)c[h]!==G.current[h]&&(f[h]=c[h]);for(const h in G.current)h in c||(f[h]=null);Object.keys(f).length&&(G.current=c,window.__isPushing=!0,p.update(f).catch(h=>console.warn("Firebase push error:",h)).finally(()=>{setTimeout(()=>{window.__isPushing=!1},500)}))},[]);W.useCallback((s,p)=>{const c=Z.current;c&&(p==null?(c.child(s).remove().catch(()=>{}),delete G.current[s]):(c.child(s).set(p).catch(()=>{}),G.current[s]=p))},[]);const yt=W.useCallback(s=>{if(d){try{localStorage.setItem(At,JSON.stringify(s))}catch{}wn(s)}},[wn,d]),se=W.useCallback(s=>{if(!d){ne("Bitte einloggen, um Änderungen vorzunehmen!","error");return}t(p=>{const c=typeof s=="function"?s(p):{...p,...s};return yt(c),c})},[yt,d,ne]),rt=W.useRef({}),Tt=W.useRef(null),pi=W.useCallback((s,p,c)=>{const f=p.key,h=c?null:p.val(),y=s==="ratings"?"ratings":s==="pred"?"pred":s==="qualPred"?"qualPred":null;y&&(window.__isPushing||(rt.current[y]||(rt.current[y]={}),rt.current[y][f]={val:h,removed:c},Tt.current&&clearTimeout(Tt.current),Tt.current=setTimeout(()=>{const w=rt.current;rt.current={},t(T=>{let _=T,k=!1;for(const P in w){const V={...T[P]||{}};let de=!1;for(const $ in w[P]){const{val:U,removed:re}=w[P][$],E=V[$];if(!(re&&E===void 0)&&!(!re&&U==null&&E===void 0)){if(!re&&U&&typeof U=="object"&&E){let X=!1;for(const j in U)if(E[j]!==U[j]){X=!0;break}if(!X)continue}!re&&typeof U!="object"&&E===U||(re||U===null||U===void 0?delete V[$]:typeof U=="object"?V[$]=Object.assign({},E||{},U):V[$]=U,de=!0)}}de&&(k||(_={...T},k=!0),_[P]=V)}if(!k)return T;try{localStorage.setItem(At,JSON.stringify(_))}catch{}return _})},30)))},[]);W.useEffect(()=>()=>{Tt.current&&clearTimeout(Tt.current)},[]);const Pu=W.useCallback(s=>{if(!window.firebase||Z.current)return;const p=window.firebase.database().ref();Z.current=p,p.once("value").then(c=>{const f=c.val();if(!f){if(s===!0){const w=ts();G.current=$i(hd(w)),p.update(G.current).catch(()=>{})}return}const h=$i(f),y=ug(f);t(y),G.current=h;try{localStorage.setItem(At,JSON.stringify(y))}catch{}}).catch(c=>{console.warn("Firebase pull Fehler:",c)}),["ratings","pred","qualPred"].forEach(c=>{p.child(c).on("child_added",f=>pi(c,f,!1)),p.child(c).on("child_changed",f=>pi(c,f,!1)),p.child(c).on("child_removed",f=>pi(c,f,!0))}),p.child("liveState").on("value",c=>{const f=c.val()||{};t(h=>{const y=JSON.stringify(h.liveState),w=JSON.stringify(f);if(y===w)return h;const T={...h,liveState:f};try{localStorage.setItem(At,JSON.stringify(T))}catch{}return T})}),p.child("battleHidden").on("value",c=>{const f=!!c.val();t(h=>{if(h.battleHidden===f)return h;const y={...h,battleHidden:f};try{localStorage.setItem(At,JSON.stringify(y))}catch{}return y})}),p.child("autoHardReset").on("value",c=>{const f=!!c.val();t(h=>{if(h.autoHardReset===f)return h;const y={...h,autoHardReset:f};try{localStorage.setItem(At,JSON.stringify(y))}catch{}return y})}),p.child("livePredictionMode").on("value",c=>{const f=!!c.val();t(h=>{if(h.livePredictionMode===f)return h;const y={...h,livePredictionMode:f};try{localStorage.setItem(At,JSON.stringify(y))}catch{}return y})}),p.child("boycotted").on("value",c=>{const f=c.val()||{};t(h=>{const y=JSON.stringify(h.boycotted||{}),w=JSON.stringify(f);if(y===w)return h;const T={...h,boycotted:f};try{localStorage.setItem(At,JSON.stringify(T))}catch{}return T})})},[pi]);W.useEffect(()=>{if(!te.current){if(te.current=!0,!window.firebase){console.warn("Firebase SDK not loaded yet");return}try{window.firebase.apps.length||window.firebase.initializeApp(sg),window.firebase.auth().onAuthStateChanged(s=>{if(s){const p=(s.email||"").toLowerCase();if(co.hasOwnProperty(p)){x(s);const c=co[p],f=c.id,h=!!c.isAdmin;r(f),o(h),localStorage.setItem(uo,f),localStorage.setItem("esc-is-admin",h?"true":"false"),localStorage.setItem("esc-joined","true"),Pu(!0)}else{window.firebase.auth().signOut().then(()=>{x(null),ie("alert",{title:"Zugriff verweigert",text:"Das Google-Konto ("+p+") ist nicht freigeschaltet!"})});return}}else x(null)})}catch(s){console.warn("Firebase Init Fehler:",s)}}},[]);const Lu=W.useCallback(()=>{if(!window.firebase)return;const s=new window.firebase.auth.GoogleAuthProvider;window.firebase.auth().signInWithPopup(s).then(p=>{const c=(p.user.email||"").toLowerCase();co.hasOwnProperty(c)?ne("Willkommen, "+(p.user.displayName||c)+"!","success"):(window.firebase.auth().signOut(),ie("alert",{title:"Zugriff verweigert",text:"Das Konto "+c+" ist nicht in der Whitelist."}))}).catch(p=>{ie("alert",{title:"Login Fehler",text:p.message})})},[ie,ne]),Ru=W.useCallback(()=>{window.firebase&&window.firebase.auth().signOut().then(()=>{x(null)})},[]),La=W.useCallback(()=>{const s=e.jury.map(p=>(p.name.trim()[0]||"?").toUpperCase());return s.map((p,c)=>s.filter(h=>h===p).length>1?p+(c+1):p)},[e.jury]),_u=W.useCallback(()=>{if(!g.yearId||!g.tab)return!1;const s=e.liveState[g.yearId];return s&&s.activeTab===g.tab},[g.yearId,g.tab,e.liveState]),fi=W.useCallback(()=>{if(!g.yearId)return 0;const s=e.liveState[g.yearId];return s&&s.index!==void 0?s.index:0},[g.yearId,e.liveState]);W.useEffect(()=>{if(!g.enter||!ye.current)return;const s=ye.current;s.classList.remove("enter"),s.offsetWidth,s.classList.add("enter"),F(p=>({...p,enter:!1}))},[g.enter]),W.useEffect(()=>{const s=Ke.current,p=Gt.current,c=[];for(const h in e.ratings)for(const y in e.ratings[h])(!s[h]||s[h][y]!==e.ratings[h][y])&&c.push("rating_"+h+"_"+y);for(const h in e.pred)for(const y in e.pred[h])(!p[h]||p[h][y]!==e.pred[h][y])&&c.push("pred_"+h+"_"+y);if(Ke.current=e.ratings,Gt.current=e.pred,!c.length)return;const f=new Set(c);window.__flashTimer&&clearTimeout(window.__flashTimer),window.__flashTimer=setTimeout(()=>{document.querySelectorAll("[data-flash-key]").forEach(h=>{f.has(h.getAttribute("data-flash-key"))&&(h.classList.add("flash-update"),setTimeout(()=>h.classList.remove("flash-update"),1400))}),document.querySelectorAll("[data-live-flash-key]").forEach(h=>{f.has(h.getAttribute("data-live-flash-key"))&&(h.classList.add("live-box-flash"),setTimeout(()=>h.classList.remove("live-box-flash"),1400))})},100)},[e.ratings,e.pred]),W.useEffect(()=>{if(Y&&!window.location.search.includes("v=")){const s=new URL(window.location.href);s.searchParams.set("v",Date.now()),window.location.replace(s.toString())}},[Y]),W.useEffect(()=>{if(!window.firebase||!window.firebase.database||!d)return;const s=localStorage.getItem(uo);if(!s)return;const c=window.firebase.database().ref("presence"),f=c.child(s);f.onDisconnect().remove().then(()=>{f.set({online:!0,time:Date.now()})});const h=w=>{M(T=>{const _=w.val()||{},k=Object.keys(T).sort().join(","),P=Object.keys(_).sort().join(",");return k===P?T:_})};c.on("value",h);const y=()=>{f.remove()};return window.addEventListener("beforeunload",y),window.addEventListener("pagehide",y),()=>{c.off("value",h),window.removeEventListener("beforeunload",y),window.removeEventListener("pagehide",y),f.remove()}},[d]);const Fu=()=>F(s=>({...s,editMode:!s.editMode})),Mu=()=>{if(!d){ne("Bitte einloggen!","error");return}se(s=>({...s,battleHidden:!s.battleHidden}))},Ou=()=>{if(!g.yearId)return;if(!be(g.yearId).shows[g.tab]){ne("Live-Modus geht nur in einer Show!","error");return}se(p=>{const c={...p,liveState:{...p.liveState}},f=c.liveState[g.yearId]||{activeTab:null,index:0};return f.activeTab===g.tab?c.liveState[g.yearId]={...f,activeTab:null}:c.liveState[g.yearId]={...f,activeTab:g.tab,index:0},c})},Au=s=>{if(!g.yearId)return;const p=fi();z(s>p?1:-1),se(c=>{const f={...c,liveState:{...c.liveState}};return f.liveState[g.yearId]={...f.liveState[g.yearId]||{activeTab:g.tab},index:parseInt(s)||0},f})},Du=()=>{if(!g.yearId)return;const s=be(g.yearId),p=s.shows[g.tab]||[];if(!p.length)return;z(1);const c=fi(),f=(c+1)%p.length;se(h=>{const y={...h,liveState:{...h.liveState}};return y.liveState[g.yearId]={...y.liveState[g.yearId]||{activeTab:g.tab},index:f},y})},Bu=()=>{if(!g.yearId)return;const s=be(g.yearId),p=s.shows[g.tab]||[];if(!p.length)return;z(-1);const c=fi(),f=(c-1+p.length)%p.length;se(h=>{const y={...h,liveState:{...h.liveState}};return y.liveState[g.yearId]={...y.liveState[g.yearId]||{activeTab:g.tab},index:f},y})},Hu=(s,p)=>{se(c=>{const f={...c,qualPred:{...c.qualPred}};return f.qualPred[s]={...f.qualPred[s]||{}},f.qualPred[s][p]===void 0?f.qualPred[s][p]=!1:delete f.qualPred[s][p],f})},mr=()=>F(s=>({...s,yearId:null,view:"home",enter:!0})),ns=s=>{const p=be(s);F(c=>({...c,yearId:s,view:"year",tab:p&&p.shows.sf1?"sf1":p&&p.shows.sf2?"sf2":p&&p.shows.final?"final":"overview",subTab:"points",sortMode:"order",ovSubTab:"semis",editMode:!1,enter:!0}))},Wu=()=>F(s=>({...s,view:"compare",enter:!0})),Uu=()=>F(s=>({...s,view:"library",enter:!0})),Vu=s=>{ie("confirm",{title:"Delete Song",text:"Delete from library?",onYes:()=>{se(p=>({...p,songs:p.songs.filter(c=>c.id!==s)}))}})},qt=s=>F(p=>({...p,tab:s,subTab:"points",sortMode:"order",ovSubTab:"semis",editMode:!1,enter:!0})),$u=()=>{const s=be(g.yearId);ie("confirm",{title:"Contest löschen",text:"Willst du diesen kompletten Contest löschen?",onYes:()=>{se(p=>({...p,years:p.years.filter(c=>c!==s)})),F(p=>({...p,yearId:null,view:"home",enter:!0}))}})},Ra=s=>{const p=be(g.yearId);p&&!p.shows[s]&&se(c=>({...c,years:c.years.map(f=>{if(f.id!==g.yearId)return f;const h=md[s]||25,y=[];for(let w=1;w<=h;w++)y.push({id:f.id+"-"+s+"-"+w});return{...f,shows:{...f.shows,[s]:y}}})}))},_a=s=>{ie("confirm",{title:"Show entfernen",text:"Möchtest du "+Pi[s]+" wirklich entfernen? Alle Tipps und Einträge gehen verloren.",onYes:()=>{se(p=>({...p,years:p.years.map(c=>{if(c.id!==g.yearId)return c;const f={...c.shows};return delete f[s],{...c,shows:f}})})),F(p=>{const c=be(g.yearId);if(!c)return p;const f=p.tab===s?c.shows.sf1?"sf1":c.shows.sf2?"sf2":c.shows.final?"final":"overview":p.tab,h=p.sbShow===s?c.shows.final?"final":Object.keys(c.shows).filter(y=>y!==s)[0]:p.sbShow;return{...p,tab:f,sbShow:h}})}})},Qu=(s,p)=>{p=+p,!(p<=0)&&se(c=>({...c,years:c.years.map(f=>{if(f.id!==g.yearId)return f;const h=[...f.shows[s]||[]],y=h[p];return h[p]=h[p-1],h[p-1]=y,{...f,shows:{...f.shows,[s]:h}}})}))},Yu=(s,p)=>{p=+p;const c=be(g.yearId),f=c.shows[s]||[];p>=f.length-1||se(h=>({...h,years:h.years.map(y=>{if(y.id!==g.yearId)return y;const w=[...y.shows[s]||[]],T=w[p];return w[p]=w[p+1],w[p+1]=T,{...y,shows:{...y.shows,[s]:w}}})}))},Ku=s=>{se(p=>({...p,years:p.years.map(c=>{if(c.id!==g.yearId)return c;const f=[...c.shows[s]||[]];return f.push({id:c.id+"-"+s+"-"+(f.length+1)}),{...c,shows:{...c.shows,[s]:f}}})}))},Gu=s=>{se(p=>({...p,years:p.years.map(c=>{if(c.id!==g.yearId)return c;const f=[...c.shows[s]||[]];return f.length<=0?c:(f.pop(),{...c,shows:{...c.shows,[s]:f}})})}))},qu=s=>{se(p=>({...p,years:p.years.map(c=>{const f={};for(const h in c.shows)f[h]=c.shows[h].map(y=>y.id===s?{...y,dq:!y.dq}:y);return{...c,shows:f}})}))},Ju=(s,p,c)=>{se(f=>({...f,years:f.years.map(h=>{const y={};for(const w in h.shows){const T=h.shows[w].map(_=>{if(_.id!==s)return _;const k={..._};return p===""||parseFloat(p)===Ur(_.id)?delete k.customNo:k.customNo=isNaN(parseFloat(p))?p:parseFloat(p),k.autoFinal=c,c&&delete k.place,k});Tu(T),y[w]=T}return{...h,shows:y}})})),le()},Xu=s=>{const{artist:p,title:c,cc:f,year:h,editId:y,assign:w,boycotted:T}=s;!p||!c||!f||(se(_=>{const k={..._,songs:[..._.songs],boycotted:{..._.boycotted||{}}};let P;if(y){const O=k.songs.findIndex(V=>V.id===y);O!==-1&&(k.songs[O]={...k.songs[O],artist:p,title:c,cc:f,year:h},P=y)}else P="s"+Date.now().toString(36),k.songs.push({id:P,cc:f,artist:p,title:c,year:h});return P&&(T?(k.boycotted[P]=!0,k.ratings[P]&&(k.ratings={...k.ratings},delete k.ratings[P])):delete k.boycotted[P]),w&&(k.years=k.years.map(O=>{const V={};for(const de in O.shows)V[de]=O.shows[de].map($=>$.id===w?{...$,songId:P}:$);return{...O,shows:V}})),k}),w&&!T?(le(),setTimeout(()=>ie("rating",{eId:w,jurId:n}),50)):le())},Zu=s=>{const{year:p,suffix:c,city:f}=s,h=parseInt(p);if(!h)return;const y=h+(c?"_"+c.toLowerCase():"_main");if(be(y))return;const w={};for(const T of["sf1","sf2","final"]){w[T]=[];for(let _=1;_<=md[T];_++)w[T].push({id:y+"-"+T+"-"+_})}se(T=>{const _={...T,years:[...T.years,{id:y,year:h,suffix:c,city:f||void 0,shows:w}]};return _.years.sort((k,P)=>P.year-k.year),_}),le(),F(T=>({...T,yearId:y,view:"year",tab:"sf1",subTab:"points",sortMode:"order",ovSubTab:"semis",enter:!0}))},ep=(s,p)=>{se(c=>({...c,years:c.years.map(f=>f.id===g.yearId?{...f,city:s||void 0,hostCc:p||void 0}:f)})),le()},tp=s=>{se(p=>({...p,years:p.years.map(c=>c.id===g.yearId?{...c,showDates:s}:c)})),le()},np=s=>{const p={};s.forEach(c=>{const f=c.value.trim();f&&(p[c.dataset.jn]=f)}),se(c=>({...c,jury:c.jury.map(f=>p[f.id]?{...f,name:p[f.id]}:f)})),le()},rp=s=>{if(!d){ne("Bitte einloggen!","error");return}try{const p=JSON.parse(s);se(c=>{const f={...c};return p.jury&&(f.jury=p.jury),p.songs&&(f.songs=p.songs),p.years&&(f.years=p.years,f.years.sort((h,y)=>y.year-h.year||y.id.localeCompare(h.id))),p.ratings&&(f.ratings=p.ratings),p.pred&&(f.pred=p.pred),p.qualPred&&(f.qualPred=p.qualPred),p.liveState&&(f.liveState=p.liveState),f}),le(),ne("JSON aktualisiert!","success")}catch(p){ie("alert",{title:"Fehler",text:"Ungültiges JSON-Format: "+p.message})}},ip=s=>{se(p=>{const c={...p},f={};c.jury.forEach(w=>f[w.id]=w),s.jury&&s.jury.forEach(w=>f[w.id]=w),c.jury=Object.values(f);const h={};c.songs.forEach(w=>h[w.id]=w),s.songs&&s.songs.forEach(w=>h[w.id]=w),c.songs=Object.values(h);const y={};return c.years.forEach(w=>y[w.id]=w),s.years&&s.years.forEach(w=>y[w.id]=w),c.years=Object.values(y).sort((w,T)=>T.year-w.year||T.id.localeCompare(w.id)),["ratings","pred","qualPred","liveState"].forEach(w=>{if(c[w]={...c[w]||{}},s[w])for(const T in s[w])s[w].hasOwnProperty(T)&&(c[w][T]=Object.assign({},c[w][T]||{},s[w][T]))}),c}),le(),ne("Daten erfolgreich importiert!","success")},ap=()=>{if(!d){ne("Bitte einloggen!","error");return}const s=new Blob([JSON.stringify(e,null,1)],{type:"application/json"}),p=document.createElement("a");p.href=URL.createObjectURL(s),p.download="esc.json",p.click()},op=()=>{""+K(yn(n));const s=Object.keys(b),p=s.length>0?a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,background:"rgba(74, 222, 128, 0.1)",padding:"4px 8px",borderRadius:999,border:"1px solid rgba(74, 222, 128, 0.3)",marginRight:10,height:36},children:[a.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:"var(--green)",boxShadow:"0 0 8px var(--green)",flexShrink:0},title:"Online"}),s.map(w=>{const T=b[w]&&b[w].photoURL,_=yn(w).charAt(0).toUpperCase();return a.jsxs("div",{title:yn(w),style:{position:"relative",width:28,height:28},children:[a.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"var(--gold)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:800,color:"#1d1d1d",border:"2px solid var(--panel-solid)",boxSizing:"border-box"},children:_}),T&&a.jsx("img",{src:T,alt:yn(w),style:{position:"absolute",inset:0,width:28,height:28,borderRadius:"50%",objectFit:"cover",border:"2px solid var(--panel-solid)",display:"block",zIndex:1,background:"var(--panel2-solid)"},onError:k=>{k.target.style.display="none"}})]},w)})]}):null,c=d?a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,background:"var(--panel2)",padding:"5px 12px",borderRadius:999,border:"1px solid var(--line)"},children:[a.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--ink)"},children:K(d.displayName||d.email)}),a.jsx("button",{className:"ghost sm danger",onClick:Ru,style:{padding:"3px 10px",fontSize:"0.75rem"},children:"Logout"})]}):a.jsxs("button",{onClick:Lu,style:{display:"inline-flex",alignItems:"center",gap:6,background:"#4285f4",borderColor:"#4285f4",color:"#fff",fontWeight:700,padding:"5px 14px",borderRadius:999,fontSize:"0.78rem"},children:[a.jsxs("svg",{style:{width:15,height:15,fill:"currentColor"},viewBox:"0 0 24 24",children:[a.jsx("path",{d:"M21.35 11.1h-9.17v2.98h5.37c-.24 1.25-.97 2.31-2.07 3.03v2.49h3.33c1.95-1.8 3.08-4.45 3.08-7.5 0-.67-.06-1.33-.17-1.95z"}),a.jsx("path",{d:"M12.18 21c2.75 0 5.06-.91 6.75-2.49l-3.33-2.49c-.91.61-2.08.97-3.42.97-2.63 0-4.86-1.78-5.66-4.17H3.04v2.57C4.74 18.76 8.21 21 12.18 21z"}),a.jsx("path",{d:"M6.52 12.82c-.2-.61-.32-1.26-.32-1.93s.12-1.32.32-1.93V6.39H3.04C2.37 7.72 2 9.21 2 10.89s.37 3.17 1.04 4.5l3.48-2.57z"}),a.jsx("path",{d:"M12.18 4.78c1.5 0 2.85.52 3.91 1.52l2.93-2.93C17.23 1.67 14.92.78 12.18.78 8.21.78 4.74 3.02 3.04 6.39l3.48 2.57c.8-2.39 3.03-4.17 5.66-4.17z"})]})," Google Login"]}),f={display:"inline-flex",alignItems:"center",gap:6,padding:"6px 14px",borderRadius:999,fontWeight:700,fontSize:"0.78rem",letterSpacing:"0.01em",background:"linear-gradient(145deg, rgba(22,12,46,0.95) 0%, rgba(12,6,26,1) 100%)",border:"1px solid rgba(148,94,255,0.22)",color:"var(--ink)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 1px 4px rgba(0,0,0,0.4)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"};({...f});const y=!!g.yearId||g.view==="library"||g.view==="compare"?a.jsx("div",{className:"brand-logo","aria-label":"Eurovision Song Contest"}):a.jsx("div",{className:"brand-spacer","aria-hidden":"true"});return a.jsxs("header",{children:[y,a.jsxs("div",{className:"who",children:[p,c,d&&i&&a.jsxs("div",{onClick:()=>{const w=!l;u(w),localStorage.setItem("esc-admin-view-off",w?"true":"false")},title:l?"Admin-Modus aktivieren":"Admin-Modus deaktivieren",style:{display:"inline-flex",alignItems:"center",gap:12,padding:"6px 12px 6px 16px",borderRadius:999,background:"linear-gradient(145deg, rgba(20,10,45,0.95) 0%, rgba(10,5,22,1) 100%)",border:l?"1px solid rgba(148,94,255,0.35)":"1px solid rgba(74,222,128,0.45)",boxShadow:l?"inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 8px rgba(0,0,0,0.35)":"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35), 0 0 12px rgba(74,222,128,0.15)",cursor:"pointer",userSelect:"none",transition:"all 0.2s ease"},children:[a.jsx("span",{style:{fontSize:"0.8rem",fontWeight:700,letterSpacing:"0.03em",color:l?"var(--muted)":"var(--green)",textShadow:l?"none":"0 0 8px rgba(74,222,128,0.4)"},children:"Admin"}),a.jsx("div",{style:{width:36,height:20,borderRadius:999,background:l?"rgba(94,58,168,0.3)":"linear-gradient(135deg, #4ade80 0%, #16a34a 100%)",border:l?"1px solid rgba(148,94,255,0.4)":"1px solid #86efac",boxShadow:l?"inset 0 2px 4px rgba(0,0,0,0.4)":"inset 0 1px 0 rgba(255,255,255,0.4), 0 0 10px rgba(74,222,128,0.4)",position:"relative",transition:"all 0.2s ease",flexShrink:0},children:a.jsx("div",{style:{position:"absolute",top:1,left:l?1:17,width:16,height:16,borderRadius:"50%",background:l?"linear-gradient(145deg, #6f5fa3 0%, #4a3d73 100%)":"linear-gradient(145deg, #ffffff 0%, #e5e5e5 100%)",boxShadow:l?"0 1px 3px rgba(0,0,0,0.5)":"0 2px 6px rgba(0,0,0,0.4), 0 0 8px rgba(255,255,255,0.5)",transition:"all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)"}})})]}),d&&a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>{window.location.href=window.location.pathname+"?v="+Date.now()},title:"Cache leeren & neu laden",style:{...f,padding:"6px 11px"},onMouseEnter:w=>{w.currentTarget.style.transform="translateY(-1px)",w.currentTarget.style.borderColor="rgba(148,94,255,0.7)"},onMouseLeave:w=>{w.currentTarget.style.transform="translateY(0)",w.currentTarget.style.borderColor="rgba(148,94,255,0.35)"},children:"🔄"}),a.jsxs("button",{onClick:()=>ie("settings"),title:"Settings, Export, Import",style:f,onMouseEnter:w=>{w.currentTarget.style.transform="translateY(-1px)",w.currentTarget.style.borderColor="rgba(148,94,255,0.7)",w.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:w=>{w.currentTarget.style.transform="translateY(0)",w.currentTarget.style.borderColor="rgba(148,94,255,0.35)",w.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[a.jsx("span",{style:{fontSize:"1rem"},children:"⚙️"})," Settings"]})]})]})]})},rs=()=>{const s=[...e.years].sort((k,P)=>P.year-k.year||P.id.localeCompare(k.id)),p=new Date;p.setHours(0,0,0,0);const c=p.toISOString().slice(0,10);let f=null;const h=[];for(const k of s){const P=k.showDates&&k.showDates.final||null;P&&c<=P&&h.push({y:k,sortKey:P})}h.length&&(h.sort((k,P)=>k.sortKey.localeCompare(P.sortKey)),f=h[0].y.id);const y=k=>{const P=e.liveState[k.id];return!!(P&&P.activeTab)},w=k=>{const P=new Set;let O=0,V=0;for(const U in k.shows){const re=k.shows[U]||[];for(let E=0;E<re.length;E++){const X=re[E];if(!X.songId||P.has(X.songId))continue;P.add(X.songId);const j=nt(X);for(const C of e.jury){const S=j[C.id];S!=null&&(O+=S,V++)}}}const de=P.size;return{avg:V>0?O/V:0,count:de}},T=k=>{if(!k)return"";const P=new Date(k+"T00:00:00");if(isNaN(P))return k;const O=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"];return P.getDate()+". "+O[P.getMonth()]},_=f?s.find(k=>k.id===f):null;return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"home-hero",children:[a.jsx("img",{src:"./ESCLOGO.png",alt:"Eurovision Song Contest",className:"home-hero-logo"}),a.jsx("p",{className:"home-hero-sub",children:"Scoreboard · Predictions · Live Mode"})]}),a.jsxs("div",{className:"home-actions",children:[a.jsxs("button",{onClick:()=>{if(!d){ne("Bitte einloggen, um die Song Library zu öffnen!","error");return}Uu()},className:"home-action-btn home-action-primary",style:{position:"relative",cursor:d?"pointer":"not-allowed"},children:[a.jsx("span",{className:"home-action-icon",children:"🎵"}),a.jsxs("span",{className:"home-action-text",children:[a.jsx("b",{children:"Song Library"}),a.jsx("small",{children:"Alle Songs durchsuchen"})]}),!d&&a.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:18,fontSize:"2.4rem",filter:"drop-shadow(0 0 20px rgba(255,209,102,0.6))"},children:"🔒"})]}),a.jsxs("button",{onClick:()=>{if(!d){ne("Bitte einloggen, um den Country Comparison zu öffnen!","error");return}Wu()},className:"home-action-btn",style:{position:"relative",cursor:d?"pointer":"not-allowed"},children:[a.jsx("span",{className:"home-action-icon",children:"🌍"}),a.jsxs("span",{className:"home-action-text",children:[a.jsx("b",{children:"Country Comparison"}),a.jsx("small",{children:"Länder im Vergleich"})]}),!d&&a.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:18,fontSize:"2.4rem",filter:"drop-shadow(0 0 20px rgba(255,209,102,0.6))"},children:"🔒"})]})]}),_&&(()=>{const k=_,P=w(k),O=y(k),V=k.showDates||{},de=k.hostCc?`https://flagcdn.com/${k.hostCc}.svg`:"",$=k.year+(k.suffix?" ("+k.suffix+")":""),U=[];return V.sf1&&U.push({k:"SF1",v:T(V.sf1)}),V.sf2&&U.push({k:"SF2",v:T(V.sf2)}),V.final&&U.push({k:"Final",v:T(V.final)}),a.jsxs("div",{className:"upcoming-hero",onClick:()=>{if(!d){ne("Bitte einloggen, um einen Contest zu öffnen!","error");return}ns(k.id)},style:{position:"relative",minHeight:"160px",cursor:d?"pointer":"not-allowed"},children:[a.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"linear-gradient(135deg, #1a0f33 0%, #2a1749 50%, #120a24 100%)",zIndex:0}}),a.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"radial-gradient(circle at 20% 50%, rgba(168,85,247,0.15) 0%, transparent 60%)",zIndex:0}}),de&&a.jsx("img",{src:de,alt:"","aria-hidden":"true",style:{position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",height:"100%",maxWidth:"60%",objectFit:"cover",opacity:.9,filter:"saturate(1.1) contrast(1.05)",pointerEvents:"none",zIndex:0,maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)"}}),a.jsxs("div",{className:"upcoming-hero-inner",style:{position:"relative",zIndex:1},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",width:"100%",marginBottom:16},children:[a.jsx("span",{className:"upcoming-hero-badge",children:"⚡ Upcoming"}),O&&a.jsxs("span",{className:"home-badge home-badge-live",style:{marginLeft:8},children:[a.jsx("span",{className:"home-badge-dot"}),"LIVE"]})]}),a.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",paddingRight:"35%"},children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[a.jsx("div",{className:"upcoming-hero-year",style:{fontSize:"2.8rem",marginBottom:4},children:K($)}),k.city&&a.jsx("div",{className:"upcoming-hero-host",style:{justifyContent:"flex-start",fontSize:"1.3rem",marginTop:0,marginBottom:12},children:a.jsx("span",{children:K(k.city)})}),a.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[a.jsx("div",{className:"upcoming-hero-dates",style:{margin:0,justifyContent:"flex-start"},children:U.length>0?U.map(re=>a.jsxs("div",{className:"upcoming-date-chip",style:{minWidth:"auto",padding:"6px 12px"},children:[a.jsx("span",{className:"upcoming-date-label",children:re.k}),a.jsx("span",{className:"upcoming-date-value",children:re.v})]},re.k)):a.jsx("div",{className:"upcoming-date-empty",style:{padding:"6px 12px"},children:"Noch kein Datum"})}),a.jsxs("div",{className:"upcoming-hero-stats",style:{margin:0,justifyContent:"flex-start"},children:[a.jsxs("div",{className:"home-card-stat",children:[a.jsx("span",{className:"home-card-stat-val",children:P.avg.toFixed(1)}),a.jsx("span",{className:"home-card-stat-lbl",children:"Ø Pts"})]}),a.jsx("div",{className:"home-card-stat-divider"}),a.jsxs("div",{className:"home-card-stat",children:[a.jsx("span",{className:"home-card-stat-val",children:P.count}),a.jsx("span",{className:"home-card-stat-lbl",children:"Songs"})]})]})]})]})})]}),!d&&a.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:22,fontSize:"4rem",filter:"drop-shadow(0 0 24px rgba(255,209,102,0.6))"},children:"🔒"})]})})(),s.length?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"home-section-label",children:[a.jsx("span",{children:"All Contests"}),a.jsx("span",{className:"home-section-count",children:s.length})]}),a.jsx("div",{className:"home-grid",children:s.map(k=>{const P=k.year+(k.suffix?" ("+k.suffix+")":""),O=w(k),V=y(k),de=k.hostCc?`https://flagcdn.com/${k.hostCc}.svg`:"";return a.jsxs("div",{className:"home-card"+(V?" is-live":""),onClick:()=>{if(!d){ne("Bitte einloggen, um einen Contest zu öffnen!","error");return}ns(k.id)},style:{cursor:d?"pointer":"not-allowed"},children:[a.jsx("div",{className:"home-card-flag",style:{backgroundImage:de?`url('${de}')`:"linear-gradient(135deg, #3b2367, #1a1033)"}}),V&&a.jsx("div",{className:"home-card-top",children:a.jsxs("span",{className:"home-badge home-badge-live",children:[a.jsx("span",{className:"home-badge-dot"}),"LIVE"]})}),a.jsxs("div",{className:"home-card-body",children:[a.jsx("div",{className:"home-card-year",children:K(P)}),k.city&&a.jsx("div",{className:"home-card-host",children:a.jsx("span",{children:K(k.city)})})]}),a.jsxs("div",{className:"home-card-footer",children:[a.jsxs("div",{className:"home-card-stat",children:[a.jsx("span",{className:"home-card-stat-val",children:O.avg.toFixed(1)}),a.jsx("span",{className:"home-card-stat-lbl",children:"Ø Pts"})]}),a.jsxs("div",{className:"home-card-stat",children:[a.jsx("span",{className:"home-card-stat-val",children:O.count}),a.jsx("span",{className:"home-card-stat-lbl",children:"Songs"})]})]}),!d&&a.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:14,fontSize:"3.2rem",filter:"drop-shadow(0 0 20px rgba(255,209,102,0.6))",transition:"opacity 0.2s ease"},onMouseEnter:$=>{$.currentTarget.style.background="linear-gradient(145deg, rgba(20,10,45,0.75) 0%, rgba(40,24,82,0.85) 100%)"},onMouseLeave:$=>{$.currentTarget.style.background="linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)"},children:"🔒"})]},k.id)})})]}):a.jsx("p",{className:"empty",children:"No Eurovision contest added yet. Use the ＋ button in the bottom right corner."})]})},lp=s=>a.jsxs("div",{className:"live-fallback",children:[a.jsxs("h2",{children:[a.jsx("span",{className:"live-dot"})," Live Modus ist aktiv"]}),a.jsx("p",{children:"Wähle eine Show aus, um beizutreten:"}),a.jsxs("div",{className:"live-fallback-shows",children:[s.shows.sf1&&a.jsx("button",{onClick:()=>qt("sf1"),children:"Semi-final 1"}),s.shows.sf2&&a.jsx("button",{onClick:()=>qt("sf2"),children:"Semi-final 2"}),s.shows.final&&a.jsx("button",{onClick:()=>qt("final"),children:"Grand Final"})]})]}),sp=s=>{const p=be(g.yearId),c=p.shows[s]||[];if(c.length===0)return lp(p);let f=fi();f>=c.length&&(f=0);const h=c[f],y=we(h.songId),w=h.autoFinal!==void 0?h.autoFinal:y&&["de","fr","it","es","gb","kr"].indexOf(y.cc)!==-1;let T=0,_="➔";if(s==="final")_=f+1;else if(!w){for(let j=0;j<=f;j++){const C=we(c[j].songId);(c[j].autoFinal!==void 0?c[j].autoFinal:C&&["de","fr","it","es","gb","kr"].indexOf(C.cc)!==-1)||T++}_=T}const k=we(h.songId),P=nt(h);let O=null,V=null;if(s==="sf1"||s==="sf2")h.place&&(O=h.place);else if(k){if(p.shows.sf1){const j=p.shows.sf1.find(C=>C.songId===k.id);j&&j.place&&(O=j.place)}if(!O&&p.shows.sf2){const j=p.shows.sf2.find(C=>C.songId===k.id);j&&j.place&&(O=j.place)}}if(k&&p.shows.final){const j=p.shows.final.find(C=>C.songId===k.id);j&&j.place&&(V=j.place)}if(s==="final"&&e.livePredictionMode){const j=c.map(N=>{const R=we(N.songId);if(!R)return null;const H=e.pred[N.id]||{},A=N.place;return{e:N,songObj:R,pred:H,act:A}}).filter(Boolean);j.sort((N,R)=>{const H=N.act!==void 0&&N.act!==null?N.act:9999,A=R.act!==void 0&&R.act!==null?R.act:9999;return H!==A?H-A:N.songObj.title.localeCompare(R.songObj.title)});const C={};e.jury.forEach(N=>{C[N.id]={sum:0,count:0,fullHits:0}}),j.forEach(({e:N,pred:R,act:H})=>{H!=null&&e.jury.forEach(A=>{const ee=R[A.id];if(ee!=null){const J=Math.abs(ee-H);C[A.id].sum+=J,C[A.id].count++,J===0&&C[A.id].fullHits++}})});const S=e.jury.slice().sort((N,R)=>{const H=C[N.id].sum||9999,A=C[R.id].sum||9999;return H-A});return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12,marginBottom:20},children:[a.jsxs("div",{children:[a.jsx("h2",{style:{margin:"0 0 4px"},children:"🎯 Live Prediction Battle"}),a.jsx("p",{className:"hint",style:{margin:0},children:"Trage die echten Plätze ein – wer tippt am besten? 🎯 = Volltreffer."})]}),a.jsx("button",{onClick:()=>se(N=>({...N,livePredictionMode:!1})),style:{padding:"7px 16px",fontSize:"0.85rem",fontWeight:700,background:"var(--panel2-solid)",borderColor:"var(--line)",color:"var(--muted)",borderRadius:999,cursor:"pointer"},onMouseEnter:N=>{N.currentTarget.style.color="#fff",N.currentTarget.style.borderColor="var(--pink)"},onMouseLeave:N=>{N.currentTarget.style.color="var(--muted)",N.currentTarget.style.borderColor="var(--line)"},children:"← Zurück zum Live-Modus"})]}),a.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",justifyContent:"center",marginBottom:24},children:S.map((N,R)=>{const H=C[N.id],A=R===0&&H.count>0,ee=H.count>0,J=R===0?"🥇":R===1?"🥈":R===2?"🥉":null,oe=["var(--gold)","#e5e5e5","#cd7f32"];return a.jsxs("div",{style:{background:A?"linear-gradient(145deg, rgba(255,209,102,0.15) 0%, rgba(30,18,60,0.95) 100%)":"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:A?"1.5px solid var(--gold)":"1px solid rgba(94,58,168,0.4)",padding:"7px 16px",borderRadius:999,fontSize:"0.83rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:8,boxShadow:A?"inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.3), 0 0 16px rgba(255,209,102,0.2)":"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[J&&a.jsx("span",{style:{fontSize:"0.9rem"},children:J}),a.jsx("span",{style:{color:"var(--ink)"},children:K(N.name)}),a.jsx("span",{style:{color:ee?A?"var(--gold)":R<3?oe[R]:"var(--cyan)":"var(--muted-dim)"},children:ee?H.sum:"–"}),ee&&a.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:700,borderLeft:"1px solid var(--line)",paddingLeft:8,color:"var(--muted)"},children:[H.fullHits," 🎯 / ",H.count]})]},N.id)})}),a.jsx("div",{style:{maxWidth:1250,margin:"0 auto"},children:a.jsxs("table",{className:"sb-table battle-table",style:{width:"100%",tableLayout:"fixed"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{paddingLeft:15},children:"Song"}),e.jury.map(N=>a.jsx("th",{className:"c col-tipp",children:K(N.name)},"pp-h-g-"+N.id)),e.jury.map(N=>a.jsx("th",{className:"c col-abw",children:K(N.name)},"pp-h-d-"+N.id)),a.jsx("th",{className:"c col-place",children:"Platz"})]})}),a.jsx("tbody",{children:j.map(({e:N,songObj:R,pred:H,act:A})=>{const ee=R.cc?{"--flag-url":`url('https://flagcdn.com/${R.cc}.svg')`}:{};return a.jsxs("tr",{children:[a.jsxs("td",{style:{...ee,position:"relative",overflow:"hidden",padding:0,borderBottom:"1px solid var(--line)"},children:[a.jsx("div",{style:{position:"absolute",left:0,top:"4px",bottom:"4px",width:"200px",backgroundImage:"var(--flag-url)",backgroundSize:"cover",backgroundPosition:"center",maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",opacity:.65,pointerEvents:"none",zIndex:0,borderRadius:"6px"}}),a.jsx("div",{className:"cc-code",style:{position:"absolute",left:38,top:"50%",transform:"translateY(-50%)",zIndex:1,margin:0},children:K(Ir(R.cc))}),a.jsxs("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"flex-end",textAlign:"right",padding:"8px 10px",minHeight:54},children:[a.jsx("div",{className:"sb-title",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.9rem"},children:K(R.title)}),a.jsx("div",{className:"sb-artist",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.75rem"},children:K(R.artist)})]})]}),e.jury.map(J=>{const oe=H[J.id],fe=J.id===n||I;return a.jsx("td",{className:"col-tipp",style:{textAlign:"center",verticalAlign:"middle"},children:a.jsx("input",{type:"number",min:"1",max:c.length,value:oe??"",className:"battle-input",readOnly:!fe,disabled:!fe,onChange:Me=>{const bt=parseInt(Me.target.value);se(pt=>{const it={...pt,pred:{...pt.pred}};return it.pred[N.id]={...it.pred[N.id]||{}},bt>0?it.pred[N.id][J.id]=bt:delete it.pred[N.id][J.id],it})},style:{width:45,height:34,fontSize:"1rem",opacity:fe?1:.5,background:fe?void 0:"transparent",border:fe?void 0:"1px solid transparent"}})},"pp-g-"+J.id)}),e.jury.map(J=>{const oe=H[J.id];let ue=a.jsx("span",{style:{color:"var(--muted)"},children:"–"});if(oe!=null&&A!==void 0&&A!==null){const fe=Math.abs(oe-A);fe===0?ue=a.jsx("span",{className:"battle-diff-cell",style:Ge(St(10)),children:"🎯"}):ue=a.jsx("span",{className:"battle-diff-cell",style:Ge(po(fe)),children:fe})}return a.jsx("td",{className:"col-abw",style:{verticalAlign:"middle"},children:ue},"pp-d-"+J.id)}),a.jsx("td",{className:"col-place",style:{verticalAlign:"middle"},children:a.jsx("input",{type:"number",min:"1",max:c.length,value:A??"",onChange:J=>{const oe=parseInt(J.target.value);se(ue=>({...ue,years:ue.years.map(Me=>{if(Me.id!==g.yearId)return Me;const bt={...Me.shows};return bt[s]=bt[s].map(pt=>{if(pt.id!==N.id)return pt;const it={...pt};return oe>0?it.place=oe:delete it.place,it}),{...Me,shows:bt}})}))},className:"battle-input"+(A===1?" podium-1":A===2?" podium-2":A===3?" podium-3":""),style:{width:45,height:38,fontSize:"1.2rem",fontWeight:700,color:"var(--gold)",background:"linear-gradient(180deg, #2b1e0a 0%, #1a1106 50%, #0a0702 100%)",border:"1.5px solid rgba(255,209,102,0.55)",borderRadius:8,padding:0}})})]},"pp-"+N.id)})})]})})]})}const de=ae(h.songId),$=e.jury.map(j=>{const C=P[j.id],S=!de&&(j.id===n||I&&j.id==="j3"),N=de?"–":C??"–";let R="",H="var(--muted)";if(C!=null){const ee=St(C),J=ee.match(/color:([^;]+)/);J&&(H=J[1]),R=ee.replace(/color:[^;]+;?/,"")}const A=h.songId?"rating_"+h.songId+"_"+j.id:"";return a.jsxs("div",{className:"live-jury-box"+(S?" editable":""),"data-live-flash-key":A||void 0,style:Ge(R),onClick:S?()=>ie("rating",{eId:h.id,jurId:j.id}):void 0,title:de?"Boykott – keine Punkte":S?"Punkte ändern":void 0,children:[a.jsx("div",{className:"jury-name",style:{color:H},children:K(j.name)}),a.jsx("div",{className:"live-big-number",style:{color:H},children:N})]},j.id)}),U=[];if(O){const j=parseInt(O),C=j===1?"gold":j===2?"silver":j===3?"bronze":"",S=s==="sf1"?"SF1":"SF2";U.push(a.jsxs("div",{className:"live-current-place "+C,style:{marginRight:8,flexDirection:"column",padding:"6px 14px",lineHeight:1.1},children:[a.jsx("span",{style:{fontSize:"0.6rem",opacity:.8},children:S}),a.jsxs("span",{children:[O,"."]})]},"semi"))}if(V){const j=parseInt(V),C=j===1?"gold":j===2?"silver":j===3?"bronze":"";U.push(a.jsxs("div",{className:"live-current-place "+C,style:{flexDirection:"column",padding:"6px 14px",lineHeight:1.1},children:[a.jsx("span",{style:{fontSize:"0.6rem",opacity:.8},children:"GF"}),a.jsxs("span",{children:[V,"."]})]},"final"))}const re=c.map((j,C)=>{const S=we(j.songId),N=C===f,R=(()=>{if(s==="final")return C+1;const H=we(c[C].songId);if(c[C].autoFinal!==void 0?c[C].autoFinal:H&&["de","fr","it","es","gb","kr"].indexOf(H.cc)!==-1)return"AQ";let ee=0;for(let J=0;J<=C;J++){const oe=we(c[J].songId);(c[J].autoFinal!==void 0?c[J].autoFinal:oe&&["de","fr","it","es","gb","kr"].indexOf(oe.cc)!==-1)||ee++}return ee})();return a.jsxs("div",{onClick:()=>Au(C),title:S?S.title:"Kein Song",style:{position:"relative",width:64,height:64,borderRadius:14,cursor:"pointer",background:N?"linear-gradient(145deg, rgba(255,209,102,0.25) 0%, rgba(30,18,60,0.98) 70%)":"linear-gradient(145deg, rgba(30,18,60,0.85) 0%, rgba(15,8,32,0.95) 100%)",border:N?"2.5px solid var(--gold)":"1.5px solid rgba(148,94,255,0.3)",boxShadow:N?"0 0 20px rgba(255,209,102,0.5), inset 0 1px 0 rgba(255,255,255,0.15)":"inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 6px rgba(0,0,0,0.3)",transition:"all 0.2s ease",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",flexShrink:0},onMouseEnter:H=>{N||(H.currentTarget.style.borderColor="rgba(168,85,247,0.7)",H.currentTarget.style.transform="scale(1.08)")},onMouseLeave:H=>{N||(H.currentTarget.style.borderColor="rgba(148,94,255,0.3)",H.currentTarget.style.transform="scale(1)")},children:[S?a.jsx("img",{src:`https://flagcdn.com/w80/${S.cc}.png`,alt:S.cc,style:{width:N?42:34,height:N?28:22,objectFit:"cover",borderRadius:4,boxShadow:"0 0 0 1.5px rgba(255,255,255,0.3)",filter:N?"none":"grayscale(0.4) brightness(0.85)",transition:"all 0.2s ease"}}):a.jsx("span",{style:{fontSize:"1.2rem",color:"var(--muted-dim)"},children:"–"}),a.jsx("div",{style:{position:"absolute",top:2,left:2,fontSize:"0.55rem",fontWeight:900,fontFamily:"var(--display)",padding:"1px 5px",borderRadius:5,background:N?"rgba(255,209,102,0.9)":"rgba(5,3,15,0.85)",color:N?"#1d1d1d":"var(--muted)",border:N?"1px solid #fff6cc":"1px solid rgba(255,255,255,0.15)",letterSpacing:"0.03em",lineHeight:1.2},children:R}),N&&a.jsx("div",{style:{position:"absolute",bottom:0,right:0,width:0,height:0,borderStyle:"solid",borderWidth:"0 0 16px 16px",borderColor:"transparent transparent var(--gold) transparent"}})]},j.id)});let E;k?E=a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",width:"100%",position:"relative",zIndex:1,paddingTop:10},children:[a.jsx("div",{className:"live-cc-badge",children:K(Ir(k.cc))}),a.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[U.length>0&&a.jsx("div",{style:{display:"flex",gap:6,marginBottom:10,flexWrap:"wrap",justifyContent:"center"},children:U}),a.jsx("div",{style:{fontSize:"0.78rem",color:"var(--gold)",fontWeight:800,marginBottom:8,letterSpacing:"0.12em",textTransform:"uppercase",textShadow:"0 1px 2px rgba(0,0,0,0.8), 0 0 8px rgba(255,209,102,0.3)"},children:s==="final"?`● Now Playing · Startnummer ${_}`:w?"● Now Playing · Auto Qualifier":`● Now Playing · Startnummer ${_}`}),a.jsx("h2",{style:{fontSize:"2.5rem",margin:"0 0 6px",paddingBottom:"4px",fontWeight:800,letterSpacing:"-0.02em",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"#fff",lineHeight:1.2,textShadow:"0 1px 2px rgba(0,0,0,0.85)"},children:K(k.title)}),a.jsxs("p",{style:{fontSize:"1.2rem",color:"#d8cdf0",margin:0,paddingBottom:"6px",fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textShadow:"0 1px 2px rgba(0,0,0,0.8)"},children:[K(k.artist)," · ",K(qe[k.cc]||k.cc.toUpperCase())]})]})]}):E=a.jsxs("div",{style:{flex:1,textAlign:"center",padding:14},children:[a.jsxs("h3",{children:["Startnummer ",f+1]}),a.jsx("p",{className:"empty",style:{margin:"4px 0 14px"},children:"Kein Song zugewiesen."}),a.jsx("button",{className:"primary",onClick:()=>ie("picker",{entryId:h.id}),children:"＋ Song hinzufügen"})]});const X=k?"https://flagcdn.com/"+k.cc+".svg":"";return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"live-mode-banner",style:{padding:"0",background:"transparent",border:"none",boxShadow:"none"},children:[a.jsxs("div",{style:{position:"relative"},children:[a.jsxs("div",{style:{position:"absolute",top:14,left:14,zIndex:10,display:"flex",alignItems:"center",gap:8,pointerEvents:"none"},children:[a.jsx("div",{className:"live-dot",style:{width:18,height:18,border:"2.5px solid var(--bg)",boxShadow:"0 0 12px rgba(255,45,149,0.8), 0 0 24px rgba(255,45,149,0.4)"},title:"Live"}),a.jsx("span",{style:{fontFamily:"var(--display)",fontWeight:900,fontSize:"0.75rem",letterSpacing:"0.16em",color:"var(--red)",textShadow:"0 0 10px rgba(255,45,149,0.9), 0 0 20px rgba(255,45,149,0.5)"},children:"LIVE"})]}),a.jsxs("div",{className:"live-current-card live-song-slide "+(L>0?"from-right":"from-left"),style:{"--live-flag-url":`url('${X}')`,padding:"56px 36px",minHeight:"280px",borderRadius:26},children:[a.jsxs("div",{style:{position:"absolute",top:16,right:16,display:"flex",gap:8,zIndex:10},children:[a.jsx("button",{onClick:Bu,title:"Vorheriger Song",style:{width:38,height:38,borderRadius:"50%",background:"rgba(5,3,15,0.85)",color:"#fff",fontWeight:800,fontSize:"1rem",border:"1.5px solid rgba(255,255,255,0.25)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,transition:"transform 0.15s ease, border-color 0.15s ease, background 0.15s ease",backdropFilter:"none"},onMouseEnter:j=>{j.currentTarget.style.transform="scale(1.1)",j.currentTarget.style.borderColor="var(--gold)",j.currentTarget.style.background="rgba(255,209,102,0.2)"},onMouseLeave:j=>{j.currentTarget.style.transform="scale(1)",j.currentTarget.style.borderColor="rgba(255,255,255,0.25)",j.currentTarget.style.background="rgba(5,3,15,0.85)"},children:"◀"}),a.jsx("button",{onClick:Du,title:"Nächster Song",style:{width:38,height:38,borderRadius:"50%",background:"rgba(5,3,15,0.85)",color:"#fff",fontWeight:800,fontSize:"1rem",border:"1.5px solid rgba(255,255,255,0.25)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,transition:"transform 0.15s ease, border-color 0.15s ease, background 0.15s ease",backdropFilter:"none"},onMouseEnter:j=>{j.currentTarget.style.transform="scale(1.1)",j.currentTarget.style.borderColor="var(--gold)",j.currentTarget.style.background="rgba(255,209,102,0.2)"},onMouseLeave:j=>{j.currentTarget.style.transform="scale(1)",j.currentTarget.style.borderColor="rgba(255,255,255,0.25)",j.currentTarget.style.background="rgba(5,3,15,0.85)"},children:"▶"})]}),E]},f)]}),a.jsx("div",{className:"live-flow-jury",style:{display:"flex",gap:10,marginTop:16,flexWrap:"wrap"},children:$},"jury-"+f)]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:36,marginBottom:16},children:[a.jsx("h3",{style:{margin:0,fontSize:"1.2rem"},children:"Running Order"}),a.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:800,color:"var(--muted)",background:"var(--panel2-solid)",padding:"3px 10px",borderRadius:999,border:"1px solid var(--line)",letterSpacing:"0.08em"},children:[c.length," Songs"]})]}),a.jsx("div",{className:"live-flow-queue",style:{display:"flex",flexWrap:"wrap",gap:10,paddingTop:4,paddingBottom:8},children:re},"queue-"+f),s==="final"&&a.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:28,marginBottom:8},children:a.jsxs("button",{onClick:()=>se(j=>({...j,livePredictionMode:!0})),style:{display:"inline-flex",alignItems:"center",gap:10,padding:"9px 22px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(255,209,102,0.45)",color:"var(--gold)",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35), 0 0 12px rgba(255,209,102,0.12)"},onMouseEnter:j=>{j.currentTarget.style.transform="translateY(-1px)",j.currentTarget.style.borderColor="var(--gold)",j.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(255,209,102,0.25)"},onMouseLeave:j=>{j.currentTarget.style.transform="translateY(0)",j.currentTarget.style.borderColor="rgba(255,209,102,0.45)",j.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35), 0 0 12px rgba(255,209,102,0.12)"},title:"Live Prediction-Ansicht öffnen",children:[a.jsx("span",{style:{fontSize:"1rem"},children:"🎯"}),a.jsx("span",{children:"Live Prediction Battle"})]})}),s==="final"&&e.livePredictionMode&&a.jsxs("div",{style:{marginTop:32},children:[a.jsx("h3",{style:{marginBottom:16,fontSize:"1.3rem"},children:"🎯 Live Prediction-Übersicht"}),a.jsx("p",{className:"hint",style:{marginBottom:16},children:"Trage die tatsächlichen Plätze ein und sieh die Abweichungen der Tipps."}),a.jsx("div",{style:{background:"linear-gradient(145deg, rgba(25,14,52,0.95) 0%, rgba(10,5,22,0.98) 100%)",border:"1px solid rgba(94,58,168,0.3)",borderRadius:18,overflow:"hidden"},children:a.jsxs("table",{className:"sb-table battle-table",style:{width:"100%",tableLayout:"fixed"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{paddingLeft:15,width:"auto"},children:"Song"}),e.jury.map(j=>a.jsx("th",{className:"c col-tipp",style:{width:60},children:K(j.name)},"pred-h-g-"+j.id)),e.jury.map(j=>a.jsx("th",{className:"c col-abw",style:{width:55},children:K(j.name)},"pred-h-d-"+j.id)),a.jsx("th",{className:"c col-place",style:{width:55},children:"Platz"})]})}),a.jsx("tbody",{children:c.map(j=>{const C=we(j.songId);if(!C)return null;const S=e.pred[j.id]||{},N=j.place;return a.jsxs("tr",{children:[a.jsx("td",{style:{padding:"8px 10px",position:"relative"},children:C&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx(Rt,{cc:C.cc}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",lineHeight:1.15},children:[a.jsx("span",{style:{fontFamily:"var(--display)",fontWeight:700,fontSize:"0.9rem",color:"var(--ink)"},children:K(C.title)}),a.jsx("span",{style:{fontSize:"0.72rem",color:"var(--muted)"},children:K(C.artist)})]})]})}),e.jury.map(R=>{const H=S[R.id],A=R.id===n;return a.jsx("td",{className:"col-tipp",style:{textAlign:"center"},children:a.jsx("input",{type:"number",min:"1",max:c.length,value:H??"",className:"battle-input",readOnly:!A&&!I,disabled:!A&&!I,onChange:ee=>{const J=parseInt(ee.target.value);se(oe=>{const ue={...oe,pred:{...oe.pred}};return ue.pred[j.id]={...ue.pred[j.id]||{}},J>0?ue.pred[j.id][R.id]=J:delete ue.pred[j.id][R.id],ue})},style:{background:A||I?"var(--panel2-solid)":"transparent",border:A||I?"1px solid var(--line)":"1px solid transparent",opacity:A||I?1:.5}})},"pred-g-"+R.id)}),e.jury.map(R=>{const H=S[R.id];let A=a.jsx("span",{style:{color:"var(--muted)"},children:"–"});if(H!=null&&N!==void 0&&N!==null){const ee=Math.abs(H-N);ee===0?A=a.jsx("span",{className:"battle-diff-cell",style:Ge(St(10)),children:"🎯"}):A=a.jsx("span",{className:"battle-diff-cell",style:Ge(po(ee)),children:ee})}return a.jsx("td",{className:"col-abw",children:A},"pred-d-"+R.id)}),a.jsx("td",{className:"col-place",children:a.jsx("input",{type:"number",min:"1",max:c.length,value:N??"",onChange:R=>{const H=parseInt(R.target.value);se(A=>({...A,years:A.years.map(J=>{if(J.id!==g.yearId)return J;const oe={...J.shows};return oe[s]=oe[s].map(ue=>{if(ue.id!==j.id)return ue;const fe={...ue};return H>0?fe.place=H:delete fe.place,fe}),{...J,shows:oe}})}))},style:{width:45,height:34,fontSize:"1rem",fontWeight:700,fontFamily:"var(--number-font)",textAlign:"center",color:"var(--gold)",background:"linear-gradient(180deg, #2b1e0a 0%, #1a1106 50%, #0a0702 100%)",border:"1.5px solid rgba(255,209,102,0.55)",borderRadius:8,padding:0}})})]},"pred-"+j.id)})})]})})]})]})},dp=()=>{const s=be(g.yearId);if(!s)return rs();let p=g.tab;!s.shows[p]&&p!=="overview"&&p!=="battle"&&p!=="sb"&&(p=s.shows.sf1?"sf1":s.shows.sf2?"sf2":s.shows.final?"final":"overview");const c=_u();let f;s.shows[p]&&c?f=sp(p):s.shows[p]?f=pp(p):p==="overview"?f=up():p==="battle"?f=fp():p==="sb"&&(f=gp());const h=s.year+(s.suffix?" ("+s.suffix+")":""),y=!!s.shows.sf1,w=!!s.shows.sf2,T=!!s.shows.final,_=a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:18,flexWrap:"wrap",gap:12},children:[a.jsxs("button",{onClick:mr,style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px 9px 14px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",fontWeight:700,fontSize:"0.85rem",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:S=>{S.currentTarget.style.transform="translateX(-2px)",S.currentTarget.style.borderColor="rgba(168,85,247,0.7)",S.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:S=>{S.currentTarget.style.transform="translateX(0)",S.currentTarget.style.borderColor="rgba(148,94,255,0.35)",S.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[a.jsx("span",{style:{fontSize:"1rem",lineHeight:1},children:"←"})," Zurück"]}),a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",justifyContent:"flex-end"},children:[g.editMode&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"ghost sm",onClick:()=>ie("editDates"),title:"Show-Daten eintragen",children:"📅 Dates"}),!c&&a.jsxs(a.Fragment,{children:[y?a.jsx("button",{className:"ghost sm danger",onClick:()=>_a("sf1"),children:"− SF1"}):a.jsx("button",{className:"ghost sm",onClick:()=>Ra("sf1"),children:"＋ SF1"}),w?a.jsx("button",{className:"ghost sm danger",onClick:()=>_a("sf2"),children:"− SF2"}):a.jsx("button",{className:"ghost sm",onClick:()=>Ra("sf2"),children:"＋ SF2"}),T?a.jsx("button",{className:"ghost sm danger",onClick:()=>_a("final"),children:"− Final"}):a.jsx("button",{className:"ghost sm",onClick:()=>Ra("final"),children:"＋ Final"}),a.jsx("button",{className:"ghost sm danger",onClick:$u,children:"Contest löschen"})]})]}),a.jsx("button",{onClick:Fu,title:g.editMode?"Edit-Modus verlassen":"Edit-Modus aktivieren",style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px 9px 14px",borderRadius:999,fontWeight:700,fontSize:"0.85rem",background:g.editMode?"linear-gradient(145deg, rgba(80,24,90,0.95) 0%, rgba(40,10,70,1) 100%)":"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:g.editMode?"1px solid rgba(255,45,149,0.55)":"1px solid rgba(148,94,255,0.35)",color:g.editMode?"#ffd6ea":"var(--ink)",boxShadow:g.editMode?"inset 0 1px 0 rgba(255,255,255,0.12), 0 2px 8px rgba(255,45,149,0.25), 0 0 14px rgba(255,45,149,0.18)":"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:S=>{S.currentTarget.style.transform="translateY(-1px)",S.currentTarget.style.borderColor=g.editMode?"rgba(255,45,149,0.85)":"rgba(168,85,247,0.7)",S.currentTarget.style.boxShadow=g.editMode?"inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 14px rgba(255,45,149,0.35), 0 0 22px rgba(255,45,149,0.25)":"inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:S=>{S.currentTarget.style.transform="translateY(0)",S.currentTarget.style.borderColor=g.editMode?"rgba(255,45,149,0.55)":"rgba(148,94,255,0.35)",S.currentTarget.style.boxShadow=g.editMode?"inset 0 1px 0 rgba(255,255,255,0.12), 0 2px 8px rgba(255,45,149,0.25), 0 0 14px rgba(255,45,149,0.18)":"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:"✏️ Edit"})]})]}),k=g.editMode?a.jsx("button",{className:"ghost sm",onClick:()=>ie("editCity"),style:{padding:"2px 8px",fontSize:"0.72rem",marginLeft:6},title:"Host ändern",children:"✏️"}):null,O=!!(s.city||s.hostCc)?a.jsxs("div",{className:"year-host-bubble",children:[a.jsx("span",{className:"year-host-year",children:K(h)}),a.jsx("div",{className:"year-host-divider"}),a.jsx("div",{className:"year-host-flag",children:s.hostCc?a.jsx(Rt,{cc:s.hostCc}):"🌍"}),a.jsxs("div",{className:"year-host-text",children:[s.hostCc&&a.jsx("span",{className:"year-host-cc",children:K(qe[s.hostCc]||s.hostCc.toUpperCase())}),s.city&&a.jsx("span",{className:"year-host-city",children:K(s.city)})]}),k]}):a.jsxs("div",{className:"year-host-bubble year-host-bubble-empty",children:[a.jsx("span",{className:"year-host-year",children:K(h)}),g.editMode&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"year-host-divider"}),a.jsx("button",{className:"ghost sm",onClick:()=>ie("editCity"),children:"＋ Host City"})]})]}),V=a.jsx("div",{style:{textAlign:"center",marginBottom:24},children:O}),de=c?{background:"rgba(255,255,255,0.04)",color:"var(--muted)",borderColor:"rgba(148,94,255,0.25)",fontWeight:600,fontSize:"0.82rem",padding:"7px 14px",opacity:.75}:{background:"linear-gradient(135deg, rgba(255,45,149,0.14) 0%, rgba(168,85,247,0.1) 100%)",color:"#ffd6ea",borderColor:"rgba(255,45,149,0.35)",fontWeight:700,fontSize:"0.85rem",padding:"8px 18px",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(255,45,149,0.12)"},U=(e.liveState[g.yearId]||{}).activeTab,re=a.jsxs("div",{className:"tabs",children:[y&&a.jsx("button",{className:(g.tab==="sf1"?"on":"")+(U==="sf1"?" live-active":""),onClick:()=>qt("sf1"),children:"Semi-final 1"}),w&&a.jsx("button",{className:(g.tab==="sf2"?"on":"")+(U==="sf2"?" live-active":""),onClick:()=>qt("sf2"),children:"Semi-final 2"}),T&&a.jsx("button",{className:(g.tab==="final"?"on":"")+(U==="final"?" live-active":"")+" final-tab",onClick:()=>qt("final"),children:"Grand Final"})]}),E=S=>{if(!S)return"";const N=new Date(S+"T00:00:00");if(isNaN(N))return"";const R=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"];return N.getDate()+". "+R[N.getMonth()]+" "+N.getFullYear()},j=(s.showDates||{})[g.tab]||null,C=a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,marginBottom:20,borderBottom:"1px solid var(--line)",paddingBottom:16},children:[a.jsx("div",{children:re}),j&&a.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"6px 16px",borderRadius:999,background:"linear-gradient(145deg, rgba(255,209,102,0.08) 0%, rgba(20,10,45,0.9) 100%)",border:"1px solid rgba(255,209,102,0.25)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 8px rgba(0,0,0,0.3)",flexShrink:0},children:[a.jsx("span",{style:{fontSize:"0.75rem",opacity:.7},children:"📅"}),a.jsx("span",{style:{fontFamily:"var(--display)",fontSize:"0.82rem",fontWeight:800,color:"var(--gold)",letterSpacing:"0.04em",textShadow:"0 0 8px rgba(255,209,102,0.3)"},children:E(j)})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[s.shows[g.tab]&&a.jsx("button",{onClick:Ou,style:de,onMouseEnter:S=>{c?(S.currentTarget.style.opacity="1",S.currentTarget.style.borderColor="rgba(255,77,109,0.6)",S.currentTarget.style.color="#ffb3c1"):(S.currentTarget.style.transform="translateY(-1px)",S.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(255,45,149,0.22)")},onMouseLeave:S=>{c?(S.currentTarget.style.opacity="0.75",S.currentTarget.style.borderColor="rgba(148,94,255,0.25)",S.currentTarget.style.color="var(--muted)"):(S.currentTarget.style.transform="translateY(0)",S.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(255,45,149,0.12)")},title:c?"Live-Modus verlassen":"Live-Modus starten",children:c?a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,opacity:.9},children:[a.jsx("span",{style:{fontSize:"0.7rem",letterSpacing:"0.1em"},children:"●"}),a.jsx("span",{style:{fontSize:"0.78rem",letterSpacing:"0.04em"},children:"Live verlassen"})]}):a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:7},children:[a.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:"var(--red)",boxShadow:"0 0 8px var(--red)"}}),a.jsx("span",{style:{letterSpacing:"0.03em"},children:"Live Mode"})]})}),a.jsxs("div",{className:"tabs",children:[a.jsx("button",{className:g.tab==="battle"?"on":"",onClick:()=>qt("battle"),children:"Points Battle"}),a.jsx("button",{className:g.tab==="sb"?"on":"",onClick:()=>qt("sb"),children:"Scoreboard"})]})]})]});return a.jsxs(a.Fragment,{children:[_,V,C,f]})},cp=()=>{const s=be(g.yearId);if(!s)return null;const p=[];for(const c in Pi)s.shows[c]&&p.push(a.jsx("button",{className:g.sbShow===c?"on":"",onClick:()=>F(f=>({...f,sbShow:c})),children:Pi[c]},c));return p.push(a.jsx("button",{className:g.sbShow==="all"?"on":"",onClick:()=>F(c=>({...c,sbShow:"all"})),children:"All Songs"},"all")),a.jsx("div",{className:"seg",children:p})};function Ge(s){if(!s)return{};const p={};return s.split(";").forEach(c=>{const[f,...h]=c.split(":");if(!f||!h.length)return;const y=f.trim().replace(/-([a-z])/g,(w,T)=>T.toUpperCase());p[y]=h.join(":").trim()}),p}const up=()=>{const s=be(g.yearId),p=La(),c=!!(s.shows.sf1||s.shows.sf2),f=c?a.jsxs("div",{className:"tabs",style:{border:"none",margin:"18px 0"},children:[a.jsx("button",{className:g.ovSubTab==="semis"?"on":"",onClick:()=>F(_=>({..._,ovSubTab:"semis"})),children:"Semi-finals"}),a.jsx("button",{className:g.ovSubTab==="final"?"on":"",onClick:()=>F(_=>({..._,ovSubTab:"final"})),children:"Grand Final"})]}):null,h=_=>a.jsx("div",{style:{display:"flex",gap:3,marginBottom:8,justifyContent:_?"flex-end":"flex-start",padding:"0 2px"},children:e.jury.map((k,P)=>a.jsx("div",{style:{width:30,textAlign:"center",fontSize:"0.68rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.05em"},title:K(k.name),children:K(p[P])},k.id))}),y=_=>{const k=nt(_);return a.jsx("div",{className:"ov-pts",children:e.jury.map(P=>{const O=k[P.id],V=O?Ge(St(O)):{};return a.jsx("span",{className:"ov-pt"+(O!=null?"":" none"),style:V,children:O??""},P.id)})})};if(g.ovSubTab==="final"||!c){const _=s.shows.final||[];return a.jsxs(a.Fragment,{children:[a.jsx("h2",{children:"Overview"}),a.jsx("p",{className:"hint",children:"Everyone's points side by side. Disqualified or non-qualifying countries are greyed out."}),f,a.jsxs("div",{className:"card",style:{marginTop:18},children:[a.jsx("h3",{style:{textAlign:"center",marginBottom:14,fontSize:"1.1rem"},children:"Grand Final"}),h(!1),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:_.map(k=>{const P=we(k.songId),O=k.dq;return a.jsxs("div",{className:"ov-row-item",children:[y(k),P?a.jsx("span",{className:"ov-pill"+(O?" out":""),children:a.jsxs("div",{className:"song-info",children:[a.jsx(Rt,{cc:P.cc}),a.jsx("span",{children:a.jsx("b",{children:K(P.title)})})]})}):a.jsx("span",{className:"ov-pill out",children:a.jsx("div",{className:"song-info",children:a.jsx("span",{children:"–"})})}),a.jsx("div",{style:{flexGrow:1}}),a.jsx("span",{className:"ov-place",children:k.place?k.place+".":"–"})]},k.id)})})]})]})}const w=(_,k,P)=>{const O=s.shows[_]||[];return a.jsxs("div",{className:"ov-column",children:[a.jsx("div",{className:"ov-col-title",children:k}),h(P),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:O.map(V=>{const de=we(V.songId),$=V.place&&V.place>10||V.dq,U=a.jsx("span",{className:"ov-place",children:V.place?V.place+".":"–"}),re=de?a.jsx("span",{className:"ov-pill"+($?" out":""),children:a.jsxs("div",{className:"song-info",children:[a.jsx(Rt,{cc:de.cc}),a.jsx("span",{children:a.jsx("b",{children:K(de.title)})})]})}):a.jsx("span",{className:"ov-pill out",children:a.jsx("div",{className:"song-info",children:a.jsx("span",{children:"–"})})}),E=y(V);return a.jsx("div",{className:"ov-row-item",children:P?a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{flexGrow:1}}),U,re,E]}):a.jsxs(a.Fragment,{children:[E,re,a.jsx("div",{style:{flexGrow:1}}),U]})},V.id)})})]})};let T;return s.shows.sf1&&s.shows.sf2?T=a.jsxs(a.Fragment,{children:[w("sf1","Semi-final 1",!1),w("sf2","Semi-final 2",!0)]}):s.shows.sf1?T=w("sf1","Semi-final 1",!1):s.shows.sf2&&(T=w("sf2","Semi-final 2",!1)),a.jsxs(a.Fragment,{children:[a.jsx("h2",{children:"Overview"}),a.jsx("p",{className:"hint",children:"Everyone's points side by side. Disqualified or non-qualifying countries are greyed out."}),f,a.jsx("div",{className:"ov-grid-side",children:T})]})},pp=s=>{const p=be(g.yearId),c=p.shows[s]||[],f=La(),h={};e.jury.forEach(C=>{h[C.id]=0}),c.forEach(C=>{if(C.songId){const S=nt(C);e.jury.forEach(N=>{S[N.id]&&(h[N.id]+=S[N.id])})}});let y=-1,w=99999;for(const C in h)h[C]>y&&(y=h[C]),h[C]<w&&(w=h[C]);(y===w||y===0)&&(y=-1,w=99999);const T={};e.jury.forEach(C=>{T[C.id]={correct:0,totalGuessed:0}}),s!=="final"&&c.forEach(C=>{const S=Q(C),N=C.place!==void 0&&C.place!==null?C.place>10:null;N!==null&&e.jury.forEach(R=>{S[R.id]===!1&&(T[R.id].totalGuessed++,N===!0&&T[R.id].correct++)})});const _=a.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:e.jury.map(C=>{const S=h[C.id];let N="var(--cyan)";S===y&&(N="var(--green)"),S===w&&(N="#ffb3c1");let R=null;if(s!=="final"){const H=T[C.id],A=H.totalGuessed>0&&H.correct===H.totalGuessed?"var(--gold)":"var(--muted)";R=a.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:700,borderLeft:"1px solid var(--line)",paddingLeft:8,color:A},children:[H.correct," / ",H.totalGuessed," NQs"]})}return a.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:"1px solid rgba(94,58,168,0.4)",padding:"7px 16px",borderRadius:999,fontSize:"0.83rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:8,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[a.jsx("span",{style:{color:"var(--ink)"},children:K(C.name)}),a.jsxs("span",{style:{color:N},children:[S," pts"]}),R]},C.id)})});let k=c.slice();s!=="final"&&g.subTab==="tips"&&(k=k.filter(C=>{const S=we(C.songId);return!(C.autoFinal!==void 0?C.autoFinal:S&&["de","fr","it","es","gb","kr"].indexOf(S.cc)!==-1)})),g.sortMode==="place"&&k.sort((C,S)=>{const N=we(C.songId),R=we(S.songId),H=C.autoFinal!==void 0?C.autoFinal:N&&["de","fr","it","es","gb","kr"].indexOf(N.cc)!==-1,A=S.autoFinal!==void 0?S.autoFinal:R&&["de","fr","it","es","gb","kr"].indexOf(R.cc)!==-1;if(s!=="final"&&H!==A)return H?-1:1;const ee=C.place!==void 0&&C.place!==null?C.place:9999,J=S.place!==void 0&&S.place!==null?S.place:9999;return ee!==J?ee-J:c.indexOf(C)-c.indexOf(S)});const P={};c.forEach(C=>{C.place&&(P[C.place]=(P[C.place]||0)+1)});const O=s!=="final"?a.jsxs("div",{className:"tabs edle-slider",style:{border:"none",margin:0,padding:4,borderRadius:999,display:"inline-flex",gap:4},children:[a.jsx("button",{className:g.subTab!=="tips"?"on":"",style:{border:"none",margin:0},onClick:()=>F(C=>({...C,subTab:"points"})),children:"Points"}),a.jsx("button",{className:g.subTab==="tips"?"on":"",style:{border:"none",margin:0},onClick:()=>F(C=>({...C,subTab:"tips"})),children:"NQ Tips"})]}):null,V=a.jsxs("div",{className:"tabs edle-slider",style:{border:"none",margin:0,padding:4,borderRadius:999,display:"inline-flex",gap:4},children:[a.jsx("button",{className:g.sortMode==="order"?"on":"",style:{border:"none",margin:0},onClick:()=>F(C=>({...C,sortMode:"order"})),children:"Order"}),a.jsx("button",{className:g.sortMode==="place"?"on":"",style:{border:"none",margin:0},onClick:()=>F(C=>({...C,sortMode:"place"})),children:"Placement"})]});let de=null;if(g.editMode&&k.length>1){p.splitAfter=p.splitAfter||{};const C=Math.floor(k.length/2),S=p.splitAfter[s]!==void 0?p.splitAfter[s]:C;de=a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:"0.85rem",color:"var(--muted)",background:"var(--panel2-solid)",padding:"5px 12px",borderRadius:999,border:"1px solid var(--line)"},children:[a.jsx("span",{children:"1. Hälfte bis Nr.:"}),a.jsx("input",{type:"number",min:"1",max:k.length-1,value:S,onChange:N=>{se(R=>({...R,years:R.years.map(H=>H.id===g.yearId?{...H,splitAfter:{...H.splitAfter||{},[s]:parseInt(N.target.value)||1}}:H)}))},style:{width:58,height:34,textAlign:"center",fontWeight:700,padding:0}})]})}const $=a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"18px 0 16px",flexWrap:"wrap",gap:14},children:[a.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap",flex:1,justifyContent:"flex-start"},children:[O,de]}),a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:"auto"},children:_}),a.jsx("div",{style:{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap",flex:1,justifyContent:"flex-end"},children:V})]}),U=[],re=[];p.splitAfter=p.splitAfter||{};const E=p.splitAfter[s]!==void 0?p.splitAfter[s]:Math.floor(k.length/2);for(let C=0;C<k.length;C++){const S=k[C],N=C+1,R=c.indexOf(S),H={item:S,index:R!==-1?R:C};N>E&&g.sortMode==="order"||g.sortMode==="place"&&C>=Math.ceil(k.length/2)?re.push(H):U.push(H)}const X=C=>{const S=C.item,N=C.index,R=we(S.songId),H=nt(S),A=Q(S),ee=S.autoFinal!==void 0?S.autoFinal:R&&["de","fr","it","es","gb","kr"].indexOf(R.cc)!==-1,J=S.place!==void 0&&S.place!==null?S.place<=10:null;let oe;if(s!=="final"&&g.subTab==="tips")if(ee)oe=a.jsx("div",{className:"tiles",children:a.jsx("div",{className:"tile aq-tile",title:"Auto Qualifier – direkt fürs Finale gesetzt",children:a.jsx("div",{className:"tile-value",children:"AQ"})})});else{const Sn=e.jury.map((he,Pt)=>{const Re=A[he.id],at=he.id===n||I;let wt="var(--panel2-solid)",Cn="2.5px solid transparent",br="";Re===!1&&(Cn="2.5px solid #ff4d6d",wt="rgba(255,77,109,0.35)"),J!==null&&Re!==void 0&&Re===!1&&(J===!1?(wt="linear-gradient(135deg,#22c55e,#16a34a)",Cn="2.5px solid #4ade80"):(wt="linear-gradient(135deg,#ff4d6d,#dc2626)",Cn="2.5px solid #ffb3c1")),Re===void 0&&(br=at?" tip-hidden":" tip-permanently-hidden");const Ma=f[Pt];return a.jsx("button",{className:"tile nq-tip-tile "+(at?"me":"empty")+br,style:{background:wt,border:Cn,cursor:at?"pointer":"default",pointerEvents:at?"auto":"none",position:"relative",fontStyle:"normal",display:"flex",alignItems:"center",justifyContent:"center",width:"46px",height:"50px",minHeight:"50px",maxHeight:"50px",padding:0,boxSizing:"border-box"},onClick:at?()=>Hu(S.id,he.id):void 0,title:K(he.name),children:a.jsx("div",{style:{fontFamily:"var(--body)",fontWeight:800,fontSize:"1.05rem",color:Re!==void 0?"#fff":"var(--muted)",textShadow:Re!==void 0?"0 1px 3px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.5)":"0 1px 2px rgba(0,0,0,0.5)",letterSpacing:"0.03em",lineHeight:1,opacity:Re!==void 0?1:.4,fontStyle:"normal",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"},children:Ma})})}),Jt=e.jury.map(he=>H[he.id]).filter(he=>he),jn=Jt.reduce((he,Pt)=>he+Pt,0),yr=Jt.length?jn/Jt.length:null;oe=a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"tiles",children:Sn}),a.jsxs("div",{className:"avg",children:[a.jsx("b",{children:yr==null?"–":yr.toFixed(1)}),a.jsx("small",{children:"AVG"})]})]})}else if(ae(S.songId))oe=a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"tiles",children:a.jsx("div",{className:"tile",style:{width:196,height:50,background:"linear-gradient(135deg, rgba(255,77,109,0.25) 0%, rgba(80,15,30,0.6) 100%)",border:"2.5px solid rgba(255,77,109,0.7)",borderRadius:12,color:"#ffb3c1",fontFamily:"var(--display)",fontSize:"0.85rem",fontWeight:800,letterSpacing:"0.12em",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 14px rgba(255,77,109,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",cursor:"default",pointerEvents:"none",flexShrink:0},title:"Boykott – keine Punkte",children:"🚫 BOYKOTT"})}),a.jsxs("div",{className:"avg",style:{visibility:"hidden"},children:[a.jsx("b",{children:"–"}),a.jsx("small",{children:"AVG"})]})]});else{const Sn=e.jury.map(he=>H[he.id]).filter(he=>he),Jt=Sn.reduce((he,Pt)=>he+Pt,0),jn=Sn.length?Jt/Sn.length:null,yr=e.jury.map((he,Pt)=>{const Re=H[he.id],at=I||he.id===n,wt="tile"+(at?" me":"")+(Re!=null?"":" empty")+(at?"":" readonly"),Cn=Re?Ge(St(Re)):{},br=S.songId?"rating_"+S.songId+"_"+he.id:"",Ma=f[Pt],as=a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"tile-value",style:{position:"relative",zIndex:1},children:Re??"–"}),a.jsx("div",{style:{position:"absolute",bottom:2,right:4,fontFamily:"var(--body)",fontWeight:800,fontSize:"0.58rem",color:"rgba(0,0,0,0.55)",textShadow:"0 1px 0 rgba(255,255,255,0.3)",lineHeight:1,letterSpacing:"0.03em",zIndex:2,pointerEvents:"none",fontStyle:"normal"},children:Ma})]}),Tp=R&&at?a.jsx("button",{className:wt,"data-flash-key":br||void 0,style:{...Cn,position:"relative"},onClick:()=>ie("rating",{eId:S.id,jurId:he.id}),title:K(he.name),children:as}):a.jsx("div",{className:wt,"data-flash-key":br||void 0,style:{...Cn,position:"relative"},title:K(he.name),children:as});return a.jsx("div",{children:Tp},he.id)});oe=a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"tiles",children:yr}),a.jsxs("div",{className:"avg",children:[a.jsx("b",{children:jn==null?"–":jn.toFixed(1)}),a.jsx("small",{children:"AVG"})]})]})}const ue=s!=="final"&&ee?a.jsx("span",{className:"autofinal",title:"Auto Qualifier",children:"AQ"}):null,fe=S.place!==void 0&&S.place!==null?S.place:"",Me=S.customNo!==void 0&&S.customNo!==null&&S.customNo!==""?parseFloat(S.customNo):Ur(S.id),bt=Me%1!==0?"➔":Me;let pt=s!=="final"&&S.place!==void 0&&S.place!==null&&S.place>10;s==="final"&&(pt=!1);const it=ae(S.songId);let xr=(S.place===1?" winner":"")+(pt?" out":"")+(S.dq?" dq":"")+(s!=="final"&&ee&&S.place!==1?" autofinal-row":"");s!=="final"&&ee&&!pt&&(xr+=" aq-row");const vr=g.editMode?a.jsxs("div",{className:"sm-group",children:[a.jsx("button",{className:"ghost sm",onClick:()=>Qu(s,N),children:"▲"}),a.jsx("button",{className:"ghost sm",onClick:()=>Yu(s,N),children:"▼"}),a.jsx("button",{className:"ghost sm",onClick:()=>ie("picker",{entryId:S.id}),children:"Change"}),a.jsx("button",{className:"ghost sm danger",onClick:()=>qu(S.id),children:S.dq?"Undq":"DQ"})]}):null,kn=R?a.jsxs("div",{className:"meta",children:[a.jsxs("span",{children:[a.jsx("b",{children:K(R.title)})," – ",K(R.artist)]}),ue,vr]}):a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("button",{className:"primary sm",onClick:()=>ie("picker",{entryId:S.id}),children:"＋ Song"}),vr]}),Ep=s!=="final"&&ee?a.jsxs("div",{className:"pl",style:{opacity:0,pointerEvents:"none"},children:[a.jsx("input",{type:"number",disabled:!0}),a.jsx("small",{children:"PLACE"})]}):a.jsxs("div",{className:"pl",children:[a.jsx("input",{type:"number",min:"1",max:k.length,placeholder:"–",value:fe,className:S.place&&P[S.place]>1?"dup":"",disabled:!R,onChange:Sn=>{const Jt=parseInt(Sn.target.value);se(jn=>({...jn,years:jn.years.map(he=>{const Pt={};for(const Re in he.shows)Pt[Re]=he.shows[Re].map(at=>{if(at.id!==S.id)return at;const wt={...at};return Jt>0?wt.place=Jt:delete wt.place,wt});return{...he,shows:Pt}})}))},"aria-label":"Place"}),a.jsx("small",{children:"PLACE"})]}),is=R&&R.cc?{"--flag-url":`url('https://flagcdn.com/${R.cc}.svg')`}:{};it&&S.place!==1&&(is.filter="grayscale(0.6)");const Ip=R&&R.cc?a.jsx("div",{className:"cc-code",children:K(Ir(R.cc))}):null;return a.jsxs("div",{className:"row "+xr,style:is,children:[Ip,a.jsx("div",{className:"no",onClick:()=>ie("editNo",{eId:S.id}),title:"Change order/status",children:K(bt)}),a.jsx("div",{className:"row-content",children:kn}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{className:"stats",children:oe}),Ep]})]},S.id)},j=g.editMode?a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:()=>Ku(s),children:"＋ Running Order"}),a.jsx("button",{className:"ghost",onClick:()=>Gu(s),children:"− Remove Last"})]}):null;return a.jsxs(a.Fragment,{children:[$,a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",color:"var(--muted)",fontWeight:700,fontSize:"0.78rem",padding:"0 4px",margin:"14px 0 8px",letterSpacing:"0.08em",textTransform:"uppercase"},children:[a.jsx("div",{children:"1st Half"}),a.jsx("div",{children:"2nd Half"})]}),a.jsxs("div",{className:"list",style:{marginTop:0},children:[a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:U.map(C=>X(C))}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:re.map(C=>X(C))})]}),j]})},fp=()=>{const c=(be(g.yearId).shows.final||[]).filter($=>we($.songId)&&!$.dq);c.sort(($,U)=>{const re=$.place!==void 0&&$.place!==null?$.place:9999,E=U.place!==void 0&&U.place!==null?U.place:9999;return re-E});const f=!!e.battleHidden,h=I?"j3":n,y=[...e.jury].sort(($,U)=>$.id.localeCompare(U.id)),w={};e.jury.forEach($=>{const U={};c.forEach(re=>{const E=(e.pred[re.id]||{})[$.id];E&&(U[E]=(U[E]||0)+1)}),w[$.id]=U});const T={};e.jury.forEach($=>{T[$.id]={sum:0,count:0}});const _=c.map($=>{const U=we($.songId),re=e.pred[$.id]||{},E=$.place,X=y.map(N=>{const R=re[N.id],H=N.id===h;if(f&&!H)return a.jsx("td",{style:{textAlign:"center"},children:a.jsx("span",{className:"hidden-pred",children:"•••"})},"guess-"+N.id);const ee=R??"",J=R&&w[N.id][R]>1,oe=I||H;return a.jsx("td",{className:"col-tipp",children:(()=>{const ue=parseInt(ee),fe=ue===1?" podium-1":ue===2?" podium-2":ue===3?" podium-3":"",Me="battle-input"+(J?" dup":"")+fe,bt=!oe,pt=bt&&!fe?{background:"transparent",border:"1px solid transparent",width:45,height:34,fontSize:"1rem"}:{width:45,height:34,fontSize:"1rem",opacity:bt?.8:1};return a.jsx("input",{type:"number",min:"1",max:c.length,value:ee,className:Me,readOnly:!oe,disabled:!oe,onChange:it=>{const xr=parseInt(it.target.value);se(vr=>{const kn={...vr,pred:{...vr.pred}};return kn.pred[$.id]={...kn.pred[$.id]||{}},xr>0?kn.pred[$.id][N.id]=xr:delete kn.pred[$.id][N.id],kn})},style:pt})})()},"guess-"+N.id)}),j=y.map(N=>{const R=re[N.id];let H=a.jsx("span",{style:{color:"var(--muted)"},children:"–"});if(R!=null&&E!==void 0&&E!==null){const A=Math.abs(R-E);T[N.id].sum+=A,T[N.id].count++,A===0?H=a.jsx("span",{className:"battle-diff-cell",style:Ge(St(10)),children:"🎯"}):H=a.jsx("span",{className:"battle-diff-cell",style:Ge(po(A)),children:A})}return a.jsx("td",{className:"col-abw",children:H},"diff-"+N.id)}),C=E??"–",S=U&&U.cc?{"--flag-url":`url('https://flagcdn.com/${U.cc}.svg')`}:{};return a.jsxs("tr",{children:[a.jsxs("td",{style:{...S,position:"relative",overflow:"hidden",padding:0,borderBottom:"1px solid var(--line)"},children:[a.jsx("div",{style:{position:"absolute",left:0,top:"4px",bottom:"4px",width:"200px",backgroundImage:"var(--flag-url)",backgroundSize:"cover",backgroundPosition:"center",maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",opacity:.65,pointerEvents:"none",zIndex:0,borderRadius:"6px"}}),U&&a.jsx("div",{className:"cc-code",style:{position:"absolute",left:38,top:"50%",transform:"translateY(-50%)",zIndex:1,margin:0},children:K(Ir(U.cc))}),a.jsx("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"flex-end",textAlign:"right",padding:"8px 10px",minHeight:54},children:U?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"sb-title",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.9rem"},children:K(U.title)}),a.jsx("div",{className:"sb-artist",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.75rem"},children:K(U.artist)})]}):null})]}),X,j,a.jsx("td",{className:"col-place",style:{textAlign:"center",verticalAlign:"middle"},children:a.jsx("input",{type:"number",min:"1",max:c.length,value:C==="–"?"":C,onChange:N=>{const R=parseInt(N.target.value);se(H=>({...H,years:H.years.map(ee=>{if(ee.id!==g.yearId)return ee;const J={...ee.shows};return J.final=J.final.map(oe=>{if(oe.id!==$.id)return oe;const ue={...oe};return R>0?ue.place=R:delete ue.place,ue}),{...ee,shows:J}})}))},className:"battle-input"+(parseInt(C)===1?" podium-1":parseInt(C)===2?" podium-2":parseInt(C)===3?" podium-3":""),style:{width:45,height:38,fontSize:"1.2rem",fontWeight:700,color:"var(--gold)",background:"linear-gradient(180deg, #2b1e0a 0%, #1a1106 50%, #0a0702 100%)",border:"1.5px solid rgba(255,209,102,0.55)",borderRadius:8,padding:0}})})]},$.id)}),k=[];e.jury.forEach($=>{T[$.id].count>0&&k.push({name:$.name,sum:T[$.id].sum,count:T[$.id].count,id:$.id})}),k.sort(($,U)=>$.sum-U.sum);let P;if(k.length>0){const $=k[0],U=["🥈","🥉"];P=a.jsxs("div",{style:{marginTop:24},children:[a.jsxs("div",{className:"battle-podium-winner",children:[a.jsx("div",{className:"medal",children:"🥇"}),a.jsx("div",{className:"name",children:K($.name)}),a.jsx("div",{className:"score",children:$.sum}),a.jsxs("div",{className:"label",children:["🎯 Winner · ",$.count," Tipps verglichen"]})]}),k.length>1&&a.jsx("div",{className:"battle-runner-ups",children:k.slice(1).map((re,E)=>{const X=E<2?U[E]:null,j=E===0?"2nd Place":E===1?"3rd Place":E+2+"th Place";return a.jsxs("div",{className:"battle-runner-up",children:[X?a.jsx("div",{className:"medal",children:X}):a.jsx("div",{className:"medal",style:{fontFamily:"var(--number-font)",fontSize:"1.5rem",color:"var(--muted)"},children:E+2}),a.jsx("div",{className:"name",children:K(re.name)}),a.jsx("div",{className:"score",children:re.sum}),a.jsx("div",{className:"label",children:j})]},re.id)})})]})}else P=a.jsx("p",{className:"empty",style:{padding:"30px 0"},children:"Trage die Tipps und tatsächlichen Plätze ein, um das Leaderboard zu sehen."});const O=a.jsx("button",{onClick:Mu,style:{padding:"7px 16px",fontSize:"0.85rem",fontWeight:700,...f?{background:"linear-gradient(135deg,#ff2d95,#a855f7)",borderColor:"transparent",color:"#fff"}:{background:"var(--panel2-solid)",color:"var(--muted)"}},children:f?"👁️ Tipps anzeigen":"🙈 Tipps verbergen"}),V=a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12,marginBottom:20},children:[a.jsxs("div",{children:[a.jsx("h2",{style:{margin:"0 0 4px"},children:"Points Battle"}),a.jsx("p",{className:"hint",style:{margin:0},children:"Trage die Tipps ein — die Abweichung siehst du rechts. 🎯 = Volltreffer."})]}),a.jsx("div",{children:O})]}),de=a.jsxs("tr",{children:[a.jsx("th",{style:{paddingLeft:15},children:"Song"}),y.map($=>a.jsx("th",{className:"c col-tipp",children:K($.name)},"h-g-"+$.id)),y.map($=>a.jsx("th",{className:"c col-abw",children:K($.name)},"h-d-"+$.id)),a.jsx("th",{className:"c col-place",children:"Platz"})]});return a.jsxs(a.Fragment,{children:[V,c.length?a.jsxs("div",{style:{maxWidth:1250,margin:"0 auto"},children:[a.jsxs("table",{className:"sb-table battle-table",style:{width:"100%",tableLayout:"fixed"},children:[a.jsx("thead",{children:de}),a.jsx("tbody",{children:_})]}),P]}):a.jsx("p",{className:"empty",children:"Bitte wähle zuerst Songs für das Grand Final aus."})]})},gp=()=>{const s=be(g.yearId);let p=g.sbShow;p!=="all"&&!s.shows[p]&&(p=s.shows.final?"final":Object.keys(s.shows)[0]);let c=[];if(p==="all"){const E=new Set;for(const X in s.shows)(s.shows[X]||[]).forEach(j=>{j.songId&&!E.has(j.songId)&&(E.add(j.songId),c.push(j))})}else c=s.shows[p]||[];const f=c.map(E=>{const X=we(E.songId);if(!X||E.dq)return null;const j=nt(E),C=e.jury.map(N=>j[N.id]).filter(N=>N),S=C.reduce((N,R)=>N+R,0);return{e:E,s:X,r:j,avg:C.length?S/C.length:null,sum:S,place:E.place}}).filter(Boolean),h=[...f].sort((E,X)=>(X.avg!==null?X.avg:-1)-(E.avg!==null?E.avg:-1));let y=1;h.forEach((E,X)=>{X>0&&E.avg!==h[X-1].avg&&y++,E.ratingRank=y}),g.sbSort==="ratings"?f.sort((E,X)=>(X.avg!==null?X.avg:-1)-(E.avg!==null?E.avg:-1)):f.sort((E,X)=>{const j=N=>{if(p!=="all")return N.e.place||9999;let R=null,H=null;if(s.shows.final){const A=s.shows.final.find(ee=>ee.songId===N.s.id);A&&A.place&&(R=A.place)}if(s.shows.sf1){const A=s.shows.sf1.find(ee=>ee.songId===N.s.id);A&&A.place&&(H=A.place)}if(!H&&s.shows.sf2){const A=s.shows.sf2.find(ee=>ee.songId===N.s.id);A&&A.place&&(H=A.place)}return R||(H?H+1e3:9999)},C=j(E),S=j(X);return C!==S?C-S:(X.avg!==null?X.avg:-1)-(E.avg!==null?E.avg:-1)});const w=La(),T={},_={};e.jury.forEach(E=>{T[E.id]=0,_[E.id]={correct:0,totalGuessed:0}}),c.forEach(E=>{if(E.songId){const X=nt(E);e.jury.forEach(j=>{X[j.id]&&(T[j.id]+=X[j.id])})}}),(p==="all"?["sf1","sf2"]:[p]).forEach(E=>{(s.shows[E]||[]).forEach(j=>{const C=Q(j),S=j.place!==void 0&&j.place!==null?j.place>10:null;S!==null&&e.jury.forEach(N=>{C[N.id]===!1&&(_[N.id].totalGuessed++,S===!0&&_[N.id].correct++)})})});let P=-1,O=99999;for(const E in T)T[E]>P&&(P=T[E]),T[E]<O&&(O=T[E]);(P===O||P===0)&&(P=-1,O=99999);const V=a.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",justifyContent:"center",marginTop:16},children:e.jury.map(E=>{const X=T[E.id];let j="var(--cyan)";X===P&&(j="var(--green)"),X===O&&(j="#ffb3c1");let C=null;if(p!=="final"){const S=_[E.id],N=S.totalGuessed>0&&S.correct===S.totalGuessed?"var(--gold)":"var(--muted)";C=a.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:700,borderLeft:"1px solid var(--line)",paddingLeft:8,color:N},children:[S.correct," / ",S.totalGuessed," NQs"]})}return a.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:"1px solid rgba(94,58,168,0.4)",padding:"7px 16px",borderRadius:999,fontSize:"0.83rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:8,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[a.jsx("span",{style:{color:"var(--ink)"},children:K(E.name)}),a.jsxs("span",{style:{color:j},children:[X," pts"]}),C]},E.id)})}),de=f.map((E,X)=>{const j=E.ratingRank,C=j===1?" sb-top1":j===2?" sb-top2":j===3?" sb-top3":"",S=ae(E.s.id),N=[],R=[],H=Q(E.e);e.jury.forEach(J=>{const oe=E.r[J.id];if(oe){const fe=Ge(St(oe));N.push(a.jsx("span",{className:"cell",style:{...fe,display:"inline-block",margin:"0 2px",fontSize:"1.05rem",width:34,height:34,lineHeight:"30px",padding:0},children:oe},J.id))}else N.push(a.jsx("span",{className:"cell",style:{background:"var(--panel2-solid)",color:"var(--muted-dim)",display:"inline-block",margin:"0 2px",width:34,height:34,lineHeight:"30px",padding:0},children:"–"},J.id));H[J.id]===!1?R.push(a.jsx("span",{className:"cell",style:{background:"rgba(255,77,109,0.2)",color:"#ffb3c1",border:"1px solid rgba(255,77,109,0.4)",display:"inline-block",margin:"0 2px",fontSize:"0.85rem",padding:"2px 6px",width:34,height:34,lineHeight:"30px"},children:"NQ"},J.id)):R.push(a.jsx("span",{className:"cell",style:{background:"transparent",border:"1px dashed rgba(255,255,255,0.1)",color:"transparent",display:"inline-block",margin:"0 2px",fontSize:"0.85rem",padding:"2px 6px",width:34,height:34,lineHeight:"30px"},children:"-"},J.id))});let A="-";if(E.e.place!==void 0&&E.e.place!==null)if(p==="all"){let J=null;if(s.shows.sf1){const fe=s.shows.sf1.find(Me=>Me.songId===E.s.id);fe&&fe.place&&(J=fe.place)}if(!J&&s.shows.sf2){const fe=s.shows.sf2.find(Me=>Me.songId===E.s.id);fe&&fe.place&&(J=fe.place)}let oe=null;if(s.shows.final){const fe=s.shows.final.find(Me=>Me.songId===E.s.id);fe&&fe.place&&(oe=fe.place)}const ue=[];J&&ue.push(a.jsxs("span",{style:{fontSize:"0.65rem",color:"var(--muted)"},children:["SF: ",J,"."]},"sf")),oe&&ue.push(a.jsxs("span",{style:{fontSize:"0.75rem",fontWeight:800,color:"var(--gold)"},children:["GF: ",oe,"."]},"gf")),ue.length?A=a.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2,lineHeight:1.1},children:ue}):A=E.e.place+"."}else A=E.e.place+".";const ee={"--flag-url":`url('https://flagcdn.com/${E.s.cc}.svg')`,position:"relative",overflow:"hidden"};return a.jsxs("tr",{className:C,children:[a.jsx("td",{className:"sb-rank-cell",style:{textAlign:"center",padding:0},children:j}),a.jsxs("td",{style:{...ee,padding:0},children:[a.jsx("div",{style:{position:"absolute",left:0,top:"4px",bottom:"4px",width:"200px",backgroundImage:"var(--flag-url)",backgroundSize:"cover",backgroundPosition:"center",maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",opacity:.65,pointerEvents:"none",zIndex:0,borderRadius:"6px"}}),a.jsxs("div",{style:{position:"relative",zIndex:1,display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"6px 10px"},children:[a.jsx("div",{className:"cc-code",style:{position:"static",transform:"none",margin:0},children:K(Ir(E.s.cc))}),a.jsxs("div",{className:"sb-song-info",style:{display:"flex",flexDirection:"column",alignItems:"flex-end",textAlign:"right",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:0},children:[a.jsxs("div",{className:"sb-title",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.9rem",display:"flex",alignItems:"center",gap:6},children:[S&&a.jsx("span",{style:{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.08em",color:"#ffb3c1",background:"rgba(255,77,109,0.18)",border:"1px solid rgba(255,77,109,0.5)",borderRadius:999,padding:"1px 6px",flexShrink:0},children:"🚫"}),a.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:K(E.s.title)})]}),a.jsx("div",{className:"sb-artist",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.75rem"},children:K(E.s.artist)})]})]})]}),a.jsx("td",{style:{textAlign:"left",paddingLeft:8,verticalAlign:"middle",whiteSpace:"nowrap",overflow:"hidden"},children:N}),a.jsx("td",{style:{textAlign:"left",paddingLeft:8,verticalAlign:"middle",whiteSpace:"nowrap",overflow:"hidden"},children:R}),a.jsx("td",{className:"sb-score-cell",children:a.jsx("b",{children:E.avg==null?"–":E.sum})}),a.jsx("td",{className:"sb-score-cell",children:a.jsx("b",{children:E.avg==null?"–":E.avg.toFixed(1)})}),a.jsx("td",{style:{textAlign:"center",width:50},children:A})]},E.e.id)}),$=a.jsx("div",{style:{display:"flex",justifyContent:"flex-start",gap:0,padding:0,marginLeft:-3},children:w.map((E,X)=>a.jsx("span",{style:{display:"inline-block",width:35,margin:"0 2px",textAlign:"center",fontSize:"0.7rem",color:"var(--muted)"},children:E},X))}),U=a.jsx("div",{style:{display:"flex",justifyContent:"flex-start",gap:0,padding:0,marginLeft:-3},children:w.map((E,X)=>a.jsx("span",{style:{display:"inline-block",width:35,margin:"0 2px",textAlign:"center",fontSize:"0.6rem",color:"var(--muted)"},children:E},X))}),re=a.jsxs("div",{className:"tabs edle-slider",style:{border:"none",margin:0,padding:4,borderRadius:999,display:"inline-flex",gap:4},children:[a.jsx("button",{className:g.sbSort==="ratings"?"on":"",style:{border:"none",margin:0},onClick:()=>F(E=>({...E,sbSort:"ratings"})),children:"Ratings"}),a.jsx("button",{className:g.sbSort==="placement"?"on":"",style:{border:"none",margin:0},onClick:()=>F(E=>({...E,sbSort:"placement"})),children:"Placement"})]});return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,maxWidth:1100,margin:"0 auto 14px"},children:[a.jsx("div",{children:cp()}),a.jsx("div",{children:re})]}),V,f.length?a.jsx("div",{style:{maxWidth:1250,margin:"0 auto"},children:a.jsxs("table",{className:"sb-table",style:{width:"100%",tableLayout:"fixed"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{textAlign:"center",width:35},children:"#"}),a.jsx("th",{style:{width:260},children:"Song"}),a.jsx("th",{className:"c",style:{width:176},children:$}),a.jsx("th",{className:"c",style:{width:176},children:U}),a.jsx("th",{className:"c",style:{width:80},children:"Total"}),a.jsx("th",{className:"c",style:{width:80},children:"Ø"}),a.jsx("th",{className:"c",style:{width:80},children:"Place"})]})}),a.jsx("tbody",{children:de})]})}):a.jsx("p",{className:"empty",children:"Nothing to show yet."})]})},mp=()=>{if(!d)return a.jsxs("div",{style:{paddingTop:18},children:[a.jsx("button",{className:"ghost",onClick:mr,children:"← Back"}),a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh",fontSize:"6rem",filter:"drop-shadow(0 0 24px rgba(255,209,102,0.6))"},children:"🔒"})]});const s=g.compareCc&&qe[g.compareCc]?qe[g.compareCc]:"",p=[];if(g.compareCc)for(const y of e.years){const w=[];for(const T in y.shows)for(const _ of y.shows[T]){const k=we(_.songId);k&&k.cc===g.compareCc&&w.push({yearObj:y,showKey:T,showName:Pi[T],entry:_,song:k})}if(w.length>0){let T=w.find(_=>_.showKey==="final")||w[0];p.push(T)}}p.sort((y,w)=>w.yearObj.year-y.yearObj.year);const c=p.map(y=>{const w=nt(y.entry),T=e.jury.map(P=>w[P.id]).filter(P=>P),_=T.reduce((P,O)=>P+O,0),k=T.length?_/T.length:null;return a.jsxs("tr",{style:{borderBottom:"1px solid rgba(94,58,168,0.2)"},children:[a.jsx("td",{style:{padding:"16px 12px",verticalAlign:"middle"},children:a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("b",{style:{fontFamily:"var(--display)",fontSize:"1.1rem",color:"var(--ink)"},children:y.yearObj.year}),a.jsx("small",{style:{color:"var(--muted)",fontSize:"0.75rem",fontWeight:600},children:y.showName})]})}),a.jsx("td",{style:{padding:"16px 12px",verticalAlign:"middle"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx(Rt,{cc:y.song.cc}),a.jsx("b",{style:{fontFamily:"var(--display)",fontSize:"0.95rem",color:"var(--ink)"},children:K(y.song.title)})]})}),e.jury.map(P=>{const O=w[P.id];return a.jsx("td",{style:{padding:"16px 12px",textAlign:"center",verticalAlign:"middle"},children:O?a.jsx("span",{className:"cell",style:{...Ge(St(O)),display:"inline-block",margin:0},children:O}):a.jsx("span",{style:{color:"var(--muted-dim)"},children:"–"})},P.id)}),a.jsx("td",{style:{padding:"16px 12px",textAlign:"center",verticalAlign:"middle"},children:a.jsx("b",{style:{fontFamily:"var(--display)",fontSize:"1.1rem",color:"var(--cyan)"},children:k==null?"–":_})}),a.jsx("td",{style:{padding:"16px 12px",textAlign:"center",verticalAlign:"middle"},children:k==null?"–":a.jsx("span",{className:"cell",style:{...Ge(St(k)),display:"inline-block",margin:0,fontSize:"0.95rem"},children:k.toFixed(1)})})]},y.yearObj.id+"-"+y.showKey)}),f=e.jury.map(y=>a.jsx("th",{style:{textAlign:"center",padding:"14px 12px"},children:K(y.name)},y.id)),h=g.compareCc?c.length?a.jsx("div",{className:"tw",style:{marginTop:24,padding:"4px 12px",background:"linear-gradient(145deg, rgba(25,14,52,0.95) 0%, rgba(10,5,22,0.98) 100%)",border:"1px solid rgba(94,58,168,0.3)",boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[a.jsx("thead",{children:a.jsxs("tr",{style:{borderBottom:"1px solid rgba(94,58,168,0.4)"},children:[a.jsx("th",{style:{textAlign:"left",padding:"14px 12px"},children:"Year"}),a.jsx("th",{style:{textAlign:"left",padding:"14px 12px"},children:"Song"}),f,a.jsx("th",{style:{textAlign:"center",padding:"14px 12px"},children:"Total"}),a.jsx("th",{style:{textAlign:"center",padding:"14px 12px"},children:"Ø"})]})}),a.jsx("tbody",{children:c})]})}):a.jsx("div",{style:{background:"var(--panel)",border:"1px dashed rgba(148,94,255,0.3)",borderRadius:22,padding:60,textAlign:"center",marginTop:24},children:a.jsx("p",{className:"empty",style:{margin:0,fontSize:"1rem"},children:"Keine Einträge für dieses Land gefunden."})}):a.jsx("div",{style:{background:"var(--panel)",border:"1px dashed rgba(148,94,255,0.3)",borderRadius:22,padding:60,textAlign:"center",marginTop:24},children:a.jsx("p",{className:"empty",style:{margin:0,fontSize:"1rem"},children:"Wähle oben ein Land aus, um den historischen Vergleich zu sehen."})});return a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{paddingTop:18},children:a.jsxs("button",{onClick:mr,style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px 9px 14px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",fontWeight:700,fontSize:"0.85rem",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:y=>{y.currentTarget.style.transform="translateX(-2px)",y.currentTarget.style.borderColor="rgba(168,85,247,0.7)",y.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:y=>{y.currentTarget.style.transform="translateX(0)",y.currentTarget.style.borderColor="rgba(148,94,255,0.35)",y.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[a.jsx("span",{style:{fontSize:"1rem",lineHeight:1},children:"←"})," Back"]})}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20,margin:"24px 0 8px"},children:[a.jsx("h2",{style:{margin:0,fontSize:"2rem"},children:"Country Comparison"}),a.jsx("div",{style:{width:300,background:"var(--panel2)",borderRadius:16,border:"1px solid var(--line)",padding:4},children:a.jsx(Fa,{value:s,onSelect:(y,w)=>F(T=>({...T,compareCc:y||null}))})})]}),a.jsx("p",{className:"hint",style:{marginBottom:24},children:"Vergleiche die Punkte und Platzierungen eines Landes über alle Jahre hinweg."}),h]})},hp=()=>{if(!d)return a.jsxs("div",{style:{paddingTop:18},children:[a.jsx("button",{className:"ghost",onClick:mr,children:"← Back"}),a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh",fontSize:"6rem",filter:"drop-shadow(0 0 24px rgba(255,209,102,0.6))"},children:"🔒"})]});const s=[];e.songs.forEach(f=>{f.year&&s.indexOf(f.year)===-1&&s.push(f.year)}),s.sort((f,h)=>h-f);const p=(g.q||"").toLowerCase(),c=e.songs.filter(f=>!((qe[f.cc]+" "+f.artist+" "+f.title).toLowerCase().indexOf(p)===-1||g.libYear&&String(f.year)!==String(g.libYear)));return c.sort((f,h)=>qe[f.cc].localeCompare(qe[h.cc])),a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{paddingTop:18},children:a.jsxs("button",{onClick:mr,style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px 9px 14px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",fontWeight:700,fontSize:"0.85rem",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:f=>{f.currentTarget.style.transform="translateX(-2px)",f.currentTarget.style.borderColor="rgba(168,85,247,0.7)",f.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:f=>{f.currentTarget.style.transform="translateX(0)",f.currentTarget.style.borderColor="rgba(148,94,255,0.35)",f.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[a.jsx("span",{style:{fontSize:"1rem",lineHeight:1},children:"←"})," Back"]})}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20,margin:"24px 0 8px"},children:[a.jsx("h2",{style:{margin:0,fontSize:"2rem"},children:"Song Library"}),a.jsx("button",{className:"primary",onClick:()=>ie("song",{id:null,assign:null}),style:{padding:"10px 24px",fontSize:"0.95rem"},children:"＋ New Song"})]}),a.jsx("p",{className:"hint",style:{marginBottom:24},children:"Durchsuche alle Songs, die jemals für das Scoreboard eingetragen wurden."}),a.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",marginBottom:24,background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",padding:16,borderRadius:18,border:"1px solid rgba(94,58,168,0.3)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[a.jsx("input",{id:"lib_search_input",placeholder:"Suche nach Titel, Artist oder Land...",value:g.q||"",onChange:f=>F(h=>({...h,q:f.target.value})),style:{flex:1,minWidth:220,background:"var(--panel2-solid)",border:"1px solid var(--line)",padding:"12px 18px",borderRadius:12}}),a.jsxs("select",{id:"lib_year_select",style:{width:160,background:"var(--panel2-solid)",border:"1px solid var(--line)",padding:"12px 18px",borderRadius:12,fontWeight:600},value:g.libYear||"",onChange:f=>F(h=>({...h,libYear:f.target.value})),children:[a.jsx("option",{value:"",children:"All Years"}),s.map(f=>a.jsx("option",{value:f,children:f},f))]})]}),c.length?a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:16},children:c.map(f=>a.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:"1px solid rgba(94,58,168,0.3)",borderRadius:16,padding:16,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)",display:"flex",flexDirection:"column",gap:12,transition:"transform 0.2s ease, border-color 0.2s ease"},onMouseEnter:h=>{h.currentTarget.style.transform="translateY(-2px)",h.currentTarget.style.borderColor="rgba(168,85,247,0.6)"},onMouseLeave:h=>{h.currentTarget.style.transform="translateY(0)",h.currentTarget.style.borderColor="rgba(94,58,168,0.3)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx(Rt,{cc:f.cc}),a.jsxs("span",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.05em",textTransform:"uppercase"},children:[K(qe[f.cc])," ",f.year&&`· ${f.year}`]})]}),ae(f.id)&&a.jsx("span",{style:{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.08em",color:"#ffb3c1",background:"rgba(255,77,109,0.18)",border:"1px solid rgba(255,77,109,0.5)",borderRadius:999,padding:"2px 8px"},children:"🚫 BOYKOTT"})]}),a.jsxs("div",{children:[a.jsx("div",{style:{fontFamily:"var(--display)",fontSize:"1.15rem",fontWeight:800,color:"var(--ink)",lineHeight:1.2,marginBottom:4},children:K(f.title)}),a.jsx("div",{style:{fontSize:"0.9rem",color:"var(--muted)",fontWeight:500},children:K(f.artist)})]}),a.jsxs("div",{style:{display:"flex",gap:8,marginTop:"auto",paddingTop:8},children:[a.jsx("button",{className:"ghost sm",style:{flex:1},onClick:()=>ie("song",{id:f.id,assign:null}),children:"Edit"}),a.jsx("button",{className:"ghost sm danger",style:{flex:1},onClick:()=>Vu(f.id),children:"Delete"})]})]},f.id))}):a.jsx("p",{className:"empty",style:{padding:"40px 0",fontSize:"1rem"},children:"Keine Songs gefunden, die zu deiner Suche passen."})]})},Fa=({value:s,onSelect:p})=>{const[c,f]=W.useState(s||""),[h,y]=W.useState(!1),[w,T]=W.useState(""),_=W.useRef(null),k=W.useRef(null);W.useEffect(()=>{f(s||"")},[s]),W.useEffect(()=>{const O=V=>{_.current&&!_.current.contains(V.target)&&y(!1)};return document.addEventListener("mousedown",O),()=>document.removeEventListener("mousedown",O)},[]);const P=Vi.filter(O=>O[1].toLowerCase().indexOf((c||"").toLowerCase())!==-1);return a.jsxs("div",{className:"search-dropdown-container",ref:_,children:[a.jsx("input",{ref:k,placeholder:"Land suchen...",value:c,autoComplete:"off",onChange:O=>{f(O.target.value),T(""),y(!0)},onFocus:()=>y(!0),onClick:()=>y(!0),style:{width:"100%"}}),a.jsx("div",{className:"search-dropdown-results"+(h?" active":""),children:P.length?P.map(O=>a.jsxs("div",{className:"search-dropdown-item",onMouseDown:V=>{V.preventDefault(),f(O[1]),T(O[0]),y(!1),p&&p(O[0],O[1])},children:[a.jsx(Rt,{cc:O[0]})," ",a.jsx("span",{children:K(O[1])})]},O[0])):a.jsx("div",{className:"search-dropdown-item",style:{color:"var(--muted)"},children:"Kein Land gefunden"})})]})},xp=()=>{if(!B.open)return null;switch(B.mode){case"alert":return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:K(B.payload.title)}),a.jsx("p",{className:"hint",children:K(B.payload.text)}),a.jsx("div",{className:"actions",children:a.jsx("button",{className:"primary",onClick:le,children:"OK"})})]});case"confirm":{const s=B.payload.onYes;return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:K(B.payload.title)}),a.jsx("p",{className:"hint",children:K(B.payload.text)}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:le,children:"Cancel"}),a.jsx("button",{className:"primary",onClick:()=>{le(),s&&setTimeout(s,30)},children:"Confirm"})]})]})}case"newYear":return a.jsx(vp,{onSave:Zu,onClose:le});case"editCity":{const s=be(g.yearId);return s?a.jsx(yp,{year:s,onSave:ep,onClose:le}):null}case"editDates":{const s=be(g.yearId);return s?a.jsx(bp,{year:s,onSave:tp,onClose:le}):null}case"editNo":{const s=bn(B.payload.eId);return s?a.jsx(wp,{entry:s,songById:we,onSave:Ju,onClose:le}):null}case"picker":return a.jsx(kp,{entryId:B.payload.entryId,S:e,CN:qe,songById:we,onPick:s=>{const p=B.payload.entryId;se(c=>({...c,years:c.years.map(f=>{const h={};for(const y in f.shows)h[y]=f.shows[y].map(w=>w.id===p?{...w,songId:s}:w);return{...f,shows:h}})})),le(),setTimeout(()=>ie("rating",{eId:p,jurId:n}),50)},onNewSong:()=>ie("song",{id:null,assign:B.payload.entryId}),onEditSong:s=>ie("song",{id:s,assign:null}),onDeleteSong:s=>{se(p=>({...p,songs:p.songs.filter(c=>c.id!==s)}))},onClose:le});case"song":{const s=B.payload.id,p=B.payload.assign,c=s?we(s):null,f=g.yearId?be(g.yearId):null,h=c&&c.year?c.year:f&&f.year?f.year:new Date().getFullYear();return a.jsx(Sp,{song:c,defaultYear:h,editId:s,assign:p,onSave:Xu,onClose:le,S:e,setS:t,save:yt})}case"rating":{const s=bn(B.payload.eId);if(!s)return null;let p=null;for(const c of e.years){for(const f in c.shows)if(c.shows[f].find(h=>h.id===s.id)){p=c.id;break}if(p)break}return a.jsx(jp,{entry:s,jurId:B.payload.jurId,S:e,me:n,jname:yn,songById:we,getRatings:nt,currentYearId:p,onSave:(c,f,h)=>{const y=bn(c),w=y&&y.songId?y.songId:c;se(T=>{const _={...T,ratings:{...T.ratings}};if(h===12&&p){const k=T.years.find(P=>P.id===p);if(k)for(const P in k.shows)for(const O of k.shows[P])O.songId&&O.songId!==w&&_.ratings[O.songId]&&_.ratings[O.songId][f]===12&&(_.ratings[O.songId]={..._.ratings[O.songId]},delete _.ratings[O.songId][f])}return _.ratings[w]={..._.ratings[w]||{}},h===null?delete _.ratings[w][f]:_.ratings[w][f]=h,_}),le()},onClose:le})}case"settings":return a.jsx(Cp,{S:e,currentUser:d,onSaveNames:np,onImport:ip,onExport:ap,onOpenJson:()=>ie("json"),onClose:le,showToast:ne,autoHardReset:Y,updateS:se});case"json":return a.jsx(Np,{S:e,onSave:rp,onBack:()=>ie("settings"),onClose:le});default:return null}},vp=({onSave:s,onClose:p})=>{const[c,f]=W.useState(new Date().getFullYear()),[h,y]=W.useState(""),[w,T]=W.useState("");return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Add New Contest"}),a.jsxs("label",{children:["Year",a.jsx("input",{type:"number",value:c,onChange:_=>f(_.target.value)})]}),a.jsxs("label",{children:["Suffix (optional)",a.jsx("input",{placeholder:"e.g. Junior or Asia",value:h,onChange:_=>y(_.target.value)})]}),a.jsxs("label",{children:["Host City",a.jsx("input",{value:w,onChange:_=>T(_.target.value)})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:p,children:"Cancel"}),a.jsx("button",{className:"primary",onClick:()=>s({year:c,suffix:h,city:w}),children:"Create"})]})]})},yp=({year:s,onSave:p,onClose:c})=>{const[f,h]=W.useState(s.city||""),[y,w]=W.useState(s.hostCc||""),[T,_]=W.useState(s.hostCc&&qe[s.hostCc]||"");return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Host City & Country"}),a.jsxs("label",{style:{position:"relative",zIndex:20},children:["Country (Flagge)",a.jsx(Fa,{value:T,onSelect:(k,P)=>{w(k),_(P)}})]}),a.jsxs("label",{style:{position:"relative",zIndex:1},children:["City",a.jsx("input",{value:f,onChange:k=>h(k.target.value)})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:c,children:"Cancel"}),a.jsx("button",{className:"primary",onClick:()=>p(f,y),children:"Save"})]})]})},bp=({year:s,onSave:p,onClose:c})=>{const[f,h]=W.useState(s.showDates&&s.showDates.sf1||""),[y,w]=W.useState(s.showDates&&s.showDates.sf2||""),[T,_]=W.useState(s.showDates&&s.showDates.final||"");return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Show-Daten"}),a.jsx("p",{className:"hint",style:{marginBottom:16},children:'Trage ein, wann welche Show stattfindet. Das „nächste" Jahr wird im Menü hervorgehoben, solange das Final noch nicht vorbei ist.'}),s.shows.sf1&&a.jsxs("label",{children:["Semi-final 1",a.jsx("input",{type:"date",value:f,onChange:k=>h(k.target.value)})]}),s.shows.sf2&&a.jsxs("label",{children:["Semi-final 2",a.jsx("input",{type:"date",value:y,onChange:k=>w(k.target.value)})]}),s.shows.final&&a.jsxs("label",{children:["Grand Final",a.jsx("input",{type:"date",value:T,onChange:k=>_(k.target.value)})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:c,children:"Cancel"}),a.jsx("button",{className:"primary",onClick:()=>p({sf1:f,sf2:y,final:T}),children:"Save"})]})]})},wp=({entry:s,songById:p,onSave:c,onClose:f})=>{const h=p(s.songId),y=s.customNo!==void 0&&s.customNo!==null&&s.customNo!==""?s.customNo:Ur(s.id),w=s.autoFinal!==void 0?s.autoFinal:h&&["de","fr","it","es","gb","kr"].indexOf(h.cc)!==-1,[T,_]=W.useState(y),[k,P]=W.useState(w);return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Running Order & Status"}),a.jsxs("label",{children:["Custom Position / Number (z.B. 6 oder 6.5)",a.jsx("input",{value:T,onChange:O=>_(O.target.value)})]}),a.jsxs("label",{style:{flexDirection:"row",alignItems:"center",gap:12,marginTop:16,cursor:"pointer",background:"var(--panel2-solid)",padding:12,borderRadius:12,border:"1px solid var(--line)"},children:[a.jsx("input",{type:"checkbox",checked:k,onChange:O=>P(O.target.checked)}),a.jsx("span",{style:{color:"var(--ink)",fontWeight:600},children:"Auto Qualifier (AQ)"})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:f,children:"Cancel"}),a.jsx("button",{className:"primary",onClick:()=>c(s.id,T,k),children:"Save"})]})]})},kp=({entryId:s,S:p,CN:c,songById:f,onPick:h,onNewSong:y,onEditSong:w,onDeleteSong:T,onClose:_})=>{const[k,P]=W.useState(""),O=p.songs.filter(V=>(c[V.cc]+" "+V.artist+" "+V.title).toLowerCase().indexOf(k.toLowerCase())!==-1);return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Song Library"}),a.jsx("input",{placeholder:"Search...",value:k,onChange:V=>P(V.target.value),style:{width:"100%",marginBottom:12}}),a.jsx("div",{id:"plist",children:O.length?O.map(V=>a.jsxs("div",{className:"prow",children:[a.jsxs("button",{className:"pbtn",onClick:()=>h(V.id),children:[a.jsx(Rt,{cc:V.cc}),a.jsxs("span",{children:[a.jsx("b",{children:K(V.title)})," – ",K(V.artist)]})]}),a.jsx("button",{className:"ghost danger",onClick:()=>T(V.id),children:"Delete"})]},V.id)):a.jsx("p",{className:"empty",children:"No songs found."})}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:_,children:"Close"}),a.jsx("button",{className:"primary",onClick:y,children:"＋ New Song"})]})]})},Sp=({song:s,defaultYear:p,editId:c,assign:f,onSave:h,onClose:y,S:w,setS:T,save:_})=>{const[k,P]=W.useState(s?s.cc:""),[O,V]=W.useState(s&&qe[s.cc]||""),[de,$]=W.useState(s?s.artist:""),[U,re]=W.useState(s?s.title:""),[E,X]=W.useState(s&&s.year?s.year:p),[j,C]=W.useState(()=>!!(c&&w.boycotted&&w.boycotted[c])),[S,N]=W.useState(()=>!c||!w.ratings[c]?{}:{...w.ratings[c]}),R=(A,ee)=>{const J=parseInt(ee);N(oe=>{const ue={...oe};return!J||J<1||J>10?delete ue[A]:ue[A]=J,ue})},H=()=>{h({artist:de,title:U,cc:k,year:parseInt(E)||new Date().getFullYear(),editId:c,assign:f,boycotted:j}),c&&!j&&T(A=>{const ee={...A,ratings:{...A.ratings}};return ee.ratings[c]={...S},Object.keys(ee.ratings[c]).length===0&&delete ee.ratings[c],_(ee),ee})};return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:s?"Edit Song":"New Song"}),a.jsxs("label",{style:{position:"relative",zIndex:20},children:["Country",a.jsx(Fa,{value:O,onSelect:(A,ee)=>{P(A),V(ee)}})]}),a.jsxs("label",{style:{position:"relative",zIndex:1},children:["Artist",a.jsx("input",{value:de,onChange:A=>$(A.target.value)})]}),a.jsxs("label",{style:{position:"relative",zIndex:1},children:["Song Title",a.jsx("input",{value:U,onChange:A=>re(A.target.value)})]}),a.jsxs("label",{style:{position:"relative",zIndex:1},children:["Year",a.jsx("input",{type:"number",value:E,onChange:A=>X(A.target.value)})]}),c&&a.jsxs("label",{style:{flexDirection:"row",alignItems:"center",gap:12,marginTop:16,marginBottom:8,cursor:"pointer",background:j?"rgba(255,77,109,0.1)":"var(--panel2-solid)",padding:12,borderRadius:12,border:j?"1px solid rgba(255,77,109,0.6)":"1px solid var(--line)",transition:"all 0.2s ease"},children:[a.jsx("input",{type:"checkbox",checked:j,onChange:A=>C(A.target.checked)}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[a.jsx("span",{style:{color:j?"#ffb3c1":"var(--ink)",fontWeight:700},children:"🚫 Boykott – keine Punkte"}),a.jsx("span",{style:{fontSize:"0.75rem",color:"var(--muted)",fontWeight:500},children:"Dieser Song bekommt von uns keine Punkte und wird überall als boykottiert markiert."})]})]}),c&&!j&&a.jsxs(a.Fragment,{children:[a.jsx("hr",{style:{border:0,borderTop:"1px solid var(--line)",margin:"20px 0 16px"}}),a.jsxs("div",{style:{marginBottom:14},children:[a.jsx("div",{style:{fontFamily:"var(--display)",fontWeight:700,fontSize:"0.9rem",color:"var(--ink)",marginBottom:8},children:"Punkte (global für diesen Song)"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:10},children:w.jury.map(A=>{const ee=S[A.id];return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[a.jsx("label",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.05em",textTransform:"uppercase",margin:0},children:K(A.name)}),a.jsx("input",{type:"number",min:"1",max:"10",placeholder:"–",value:ee!==void 0?ee:"",onChange:J=>R(A.id,J.target.value),style:{width:"100%",textAlign:"center",fontFamily:"var(--number-font)",fontSize:"1.4rem",color:"var(--gold)",background:"linear-gradient(180deg, #2b1e0a 0%, #1a1106 50%, #0a0702 100%)",border:"1.5px solid rgba(255, 209, 102, 0.55)",borderRadius:12,padding:"8px 0",boxShadow:"inset 0 1px 0 rgba(255, 230, 150, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.7), 0 0 14px rgba(255, 209, 102, 0.08)"}})]},A.id)})})]})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:y,children:"Cancel"}),a.jsx("button",{className:"primary",onClick:H,children:"Save"})]})]})},jp=({entry:s,jurId:p,S:c,me:f,jname:h,songById:y,getRatings:w,onSave:T,onClose:_,currentYearId:k})=>{const P=y(s.songId),O=w(s),V=I?p||"j3":f,de=O[V],$=h(V),U=!!(s.songId&&c.boycotted&&c.boycotted[s.songId]),[re,E]=W.useState(de??null);if(W.useEffect(()=>{if(!I)return;const C=S=>{if(S.target.tagName==="INPUT"||S.target.tagName==="TEXTAREA")return;let N=S.key;N==="0"&&(N="10");const R=parseInt(N);R>=1&&R<=10&&(E(R),setTimeout(()=>{T(s.id,V,R)},150))};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[f,s.id,V,T]),!P)return null;if(U)return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{textAlign:"center",marginBottom:20},children:[a.jsx("div",{style:{marginBottom:12,transform:"scale(1.8)",display:"inline-block",filter:"drop-shadow(0 4px 12px rgba(0,0,0,0.5))"},children:a.jsx(Rt,{cc:P.cc})}),a.jsx("h2",{style:{margin:"10px 0 4px",fontSize:"1.7rem"},children:K(P.title)}),a.jsxs("p",{style:{color:"var(--muted)",margin:0,fontSize:"1rem"},children:[K(P.artist)," · ",K(qe[P.cc]||P.cc.toUpperCase())]})]}),a.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(255,77,109,0.12) 0%, var(--panel2-solid) 100%)",border:"1.5px solid rgba(255,77,109,0.6)",borderRadius:22,padding:"28px 20px",textAlign:"center",marginBottom:20},children:[a.jsx("div",{style:{fontSize:"2.8rem",marginBottom:10},children:"🚫"}),a.jsx("div",{style:{fontFamily:"var(--display)",fontWeight:800,fontSize:"1.1rem",color:"#ffb3c1",marginBottom:6},children:"Dieser Song ist boykottiert"}),a.jsx("div",{style:{fontSize:"0.88rem",color:"var(--muted)"},children:"Für diesen Song werden keine Punkte vergeben."})]}),a.jsx("div",{className:"actions",style:{marginTop:18,justifyContent:"flex-end"},children:a.jsx("button",{className:"primary",onClick:_,style:{padding:"12px 32px",fontSize:"1rem"},children:"OK"})})]});const X=re,j=(C,S)=>{const N=[];for(let R=C;R<=S;R++){const H=X===R;N.push(a.jsx("button",{className:"rate-modal-btn",style:{...Ge(St(R)),width:64,height:68,fontFamily:"var(--number-font)",fontSize:"2.2rem",borderRadius:16,border:"4px solid "+(H?"#fff":"transparent"),cursor:"pointer",display:"grid",placeItems:"center",padding:0,transition:"transform 0.15s ease-out, box-shadow 0.15s ease-out",...H?{boxShadow:"0 0 28px rgba(255,255,255,0.8), 0 0 0 2px #fff inset",transform:"scale(1.08)"}:{}},onClick:()=>E(X===R?null:R),children:R},R))}return N};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{textAlign:"center",marginBottom:20},children:[a.jsx("div",{style:{marginBottom:12,transform:"scale(1.8)",display:"inline-block",filter:"drop-shadow(0 4px 12px rgba(0,0,0,0.5))"},children:a.jsx(Rt,{cc:P.cc})}),a.jsx("h2",{style:{margin:"10px 0 4px",fontSize:"1.7rem"},children:K(P.title)}),a.jsxs("p",{style:{color:"var(--muted)",margin:0,fontSize:"1rem"},children:[K(P.artist)," · ",K(qe[P.cc]||P.cc.toUpperCase())]}),a.jsx("p",{style:{color:"var(--gold)",margin:"8px 0 0",fontSize:"0.85rem",fontWeight:800,letterSpacing:"0.08em",textTransform:"uppercase"},children:K($)})]}),a.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(255,209,102,0.06) 0%, var(--panel2-solid) 100%)",border:"1px solid var(--line)",borderRadius:22,padding:"24px 20px",textAlign:"center",marginBottom:20,boxShadow:"inset 0 2px 8px rgba(0,0,0,0.3)"},children:[a.jsx("div",{style:{fontFamily:"var(--number-font)",fontSize:"2.8rem",color:"var(--gold)",marginBottom:22,letterSpacing:"0.03em",textShadow:"0 0 20px rgba(255,209,102,0.4)"},children:X!=null?a.jsxs(a.Fragment,{children:[X," ",a.jsx("span",{style:{fontSize:"1.2rem",color:"var(--muted)"},children:"/ 12 Pts"})]}):a.jsx("span",{style:{color:"var(--muted)",fontSize:"1.4rem"},children:"– Pts"})}),a.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",marginBottom:14,flexWrap:"wrap"},children:j(1,5)}),a.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:j(6,10)}),a.jsx("div",{style:{marginTop:16,display:"flex",justifyContent:"center"},children:a.jsxs("button",{style:{...Ge(St(12)),width:140,height:68,fontFamily:"var(--number-font)",fontSize:"2.2rem",borderRadius:16,border:"4px solid "+(X===12?"#fff":"transparent"),cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"transform 0.15s ease-out, box-shadow 0.15s ease-out",...X===12?{boxShadow:"0 0 28px rgba(255,255,255,0.8), 0 0 0 2px #fff inset",transform:"scale(1.08)"}:{}},onClick:()=>E(X===12?null:12),children:["12 ",a.jsx("span",{style:{fontSize:"0.8rem",fontFamily:"var(--display)",textTransform:"uppercase",letterSpacing:"0.1em",marginTop:6},children:"FAV"})]})})]}),a.jsx("div",{className:"actions",style:{marginTop:18,justifyContent:"flex-end"},children:a.jsx("button",{className:"primary",onClick:()=>T(s.id,V,re),style:{padding:"12px 32px",fontSize:"1rem"},children:"Fertig"})})]})},Cp=({S:s,currentUser:p,onSaveNames:c,onImport:f,onExport:h,onOpenJson:y,onClose:w,showToast:T,autoHardReset:_,updateS:k})=>{const P=!!p,[O,V]=W.useState(()=>{const U={};return s.jury.forEach(re=>U[re.id]=re.name),U}),de=U=>{const re=U.target.files[0];if(!re)return;const E=new FileReader;E.onload=()=>{try{const X=JSON.parse(E.result);f(X)}catch{T("Invalid file","error")}},E.readAsText(re)},$=()=>{const U=s.jury.map(re=>({dataset:{jn:re.id},value:O[re.id]||""}));c(U)};return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Settings"}),!P&&a.jsx("p",{className:"hint",style:{color:"var(--red)",fontWeight:600,background:"rgba(255,77,109,0.1)",padding:"10px 14px",borderRadius:10,border:"1px solid rgba(255,77,109,0.3)",marginBottom:16},children:"⚠️ Logge dich mit Google ein, um Export/Import/JSON zu nutzen."}),s.jury.map(U=>a.jsxs("label",{children:[U.id.toUpperCase()," Name",a.jsx("input",{value:O[U.id]||"",onChange:re=>V(E=>({...E,[U.id]:re.target.value}))})]},U.id)),a.jsx("hr",{style:{border:0,borderTop:"1px solid var(--line)",margin:"20px 0"}}),a.jsxs("label",{style:{flexDirection:"row",alignItems:"center",gap:12,cursor:"pointer",background:"rgba(255,255,255,0.05)",padding:"12px",borderRadius:12,border:"1px solid var(--line)"},children:[a.jsx("input",{type:"checkbox",checked:_,onChange:U=>{const re=U.target.checked;k(E=>({...E,autoHardReset:re}))}}),a.jsx("span",{style:{color:"var(--ink)",fontWeight:600},children:"Auto-Hard-Reset beim Laden (Cache leeren)"})]}),a.jsxs("div",{className:"actions",style:{marginTop:18},children:[a.jsx("button",{className:"ghost",onClick:h,disabled:!P,children:"Export Data"}),a.jsxs("label",{style:{background:"var(--panel2-solid)",border:"1px solid var(--line)",borderRadius:999,padding:"9px 20px",cursor:P?"pointer":"not-allowed",textAlign:"center",fontWeight:600,opacity:P?1:.35},children:["Import Data",a.jsx("input",{type:"file",style:{display:"none"},disabled:!P,onChange:de})]}),a.jsx("button",{className:"ghost",onClick:y,disabled:!P,children:"JSON"})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:w,children:"Close"}),a.jsx("button",{className:"primary",onClick:$,children:"Save"})]})]})},Np=({S:s,onSave:p,onBack:c,onClose:f})=>{const[h,y]=W.useState(JSON.stringify(s,null,2));return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"JSON Editor"}),a.jsx("p",{className:"hint",children:"Bearbeite den gesamten JSON-State direkt hier:"}),a.jsx("textarea",{value:h,onChange:w=>y(w.target.value),style:{width:"100%",height:320,fontFamily:"monospace",background:"var(--panel2-solid)",color:"var(--ink)",border:"1px solid var(--line)",borderRadius:12,padding:14,resize:"vertical",fontSize:"0.85rem",lineHeight:1.5}}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:c,children:"Zurück"}),a.jsx("button",{className:"primary",onClick:()=>p(h),children:"Speichern & Anwenden"})]})]})};let hr;g.view==="compare"?hr=mp():g.view==="library"?hr=hp():g.yearId?hr=dp():hr=rs();const zp=g.view==="home"&&!g.yearId;return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"wrap",children:a.jsxs("div",{id:"app",ref:ye,children:[op(),hr]})}),a.jsx("div",{id:"fab_container",children:zp&&a.jsx("button",{className:"fab",onClick:()=>ie("newYear"),title:"Add new contest",children:"＋"})}),a.jsx("div",{id:"toast-container",children:v.map(s=>a.jsx("div",{className:"toast "+(s.type||""),children:(s.type==="success"?"✓ ":s.type==="error"?"✗ ":"")+s.msg},s.id))}),a.jsx("dialog",{id:"dlg",ref:ce,tabIndex:-1,className:B.mode==="song"||B.mode==="picker"||B.mode==="json"?"wide":"",children:B.open&&xp()})]})}const fo=e=>new Promise((t,n)=>{const r=document.createElement("script");r.src=e,r.onload=t,r.onerror=n,document.head.appendChild(r)});(async()=>{try{window.firebase||(await fo("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"),await fo("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"),await fo("https://www.gstatic.com/firebasejs/10.12.0/firebase-database-compat.js"))}catch(e){console.error("Firebase SDKs konnten nicht geladen werden:",e)}go.createRoot(document.getElementById("root")).render(a.jsx(Yp.StrictMode,{children:a.jsx(pg,{})}))})();
