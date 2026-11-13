(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Ip(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var md={exports:{}},ma={},hd={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ai=Symbol.for("react.element"),Tp=Symbol.for("react.portal"),Pp=Symbol.for("react.fragment"),Lp=Symbol.for("react.strict_mode"),_p=Symbol.for("react.profiler"),Rp=Symbol.for("react.provider"),Fp=Symbol.for("react.context"),Mp=Symbol.for("react.forward_ref"),Ap=Symbol.for("react.suspense"),Op=Symbol.for("react.memo"),Dp=Symbol.for("react.lazy"),is=Symbol.iterator;function Bp(e){return e===null||typeof e!="object"?null:(e=is&&e[is]||e["@@iterator"],typeof e=="function"?e:null)}var xd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vd=Object.assign,yd={};function pr(e,t,n){this.props=e,this.context=t,this.refs=yd,this.updater=n||xd}pr.prototype.isReactComponent={};pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bd(){}bd.prototype=pr.prototype;function ao(e,t,n){this.props=e,this.context=t,this.refs=yd,this.updater=n||xd}var lo=ao.prototype=new bd;lo.constructor=ao;vd(lo,pr.prototype);lo.isPureReactComponent=!0;var as=Array.isArray,wd=Object.prototype.hasOwnProperty,oo={current:null},kd={key:!0,ref:!0,__self:!0,__source:!0};function Sd(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)wd.call(t,r)&&!kd.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var d=Array(u),x=0;x<u;x++)d[x]=arguments[x+2];i.children=d}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:ai,type:e,key:l,ref:o,props:i,_owner:oo.current}}function Hp(e,t){return{$$typeof:ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function so(e){return typeof e=="object"&&e!==null&&e.$$typeof===ai}function Up(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ls=/\/+/g;function Ma(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Up(""+e.key):t.toString(36)}function Pi(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ai:case Tp:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ma(o,0):r,as(i)?(n="",e!=null&&(n=e.replace(ls,"$&/")+"/"),Pi(i,t,n,"",function(x){return x})):i!=null&&(so(i)&&(i=Hp(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ls,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",as(e))for(var u=0;u<e.length;u++){l=e[u];var d=r+Ma(l,u);o+=Pi(l,t,n,d,i)}else if(d=Bp(e),typeof d=="function")for(e=d.call(e),u=0;!(l=e.next()).done;)l=l.value,d=r+Ma(l,u++),o+=Pi(l,t,n,d,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function pi(e,t,n){if(e==null)return e;var r=[],i=0;return Pi(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Wp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qe={current:null},Li={transition:null},Vp={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:Li,ReactCurrentOwner:oo};function jd(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:pi,forEach:function(e,t,n){pi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pi(e,function(){t++}),t},toArray:function(e){return pi(e,function(t){return t})||[]},only:function(e){if(!so(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ce.Component=pr;ce.Fragment=Pp;ce.Profiler=_p;ce.PureComponent=ao;ce.StrictMode=Lp;ce.Suspense=Ap;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vp;ce.act=jd;ce.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vd({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=oo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(d in t)wd.call(t,d)&&!kd.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&u!==void 0?u[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var x=0;x<d;x++)u[x]=arguments[x+2];r.children=u}return{$$typeof:ai,type:e.type,key:i,ref:l,props:r,_owner:o}};ce.createContext=function(e){return e={$$typeof:Fp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rp,_context:e},e.Consumer=e};ce.createElement=Sd;ce.createFactory=function(e){var t=Sd.bind(null,e);return t.type=e,t};ce.createRef=function(){return{current:null}};ce.forwardRef=function(e){return{$$typeof:Mp,render:e}};ce.isValidElement=so;ce.lazy=function(e){return{$$typeof:Dp,_payload:{_status:-1,_result:e},_init:Wp}};ce.memo=function(e,t){return{$$typeof:Op,type:e,compare:t===void 0?null:t}};ce.startTransition=function(e){var t=Li.transition;Li.transition={};try{e()}finally{Li.transition=t}};ce.unstable_act=jd;ce.useCallback=function(e,t){return Qe.current.useCallback(e,t)};ce.useContext=function(e){return Qe.current.useContext(e)};ce.useDebugValue=function(){};ce.useDeferredValue=function(e){return Qe.current.useDeferredValue(e)};ce.useEffect=function(e,t){return Qe.current.useEffect(e,t)};ce.useId=function(){return Qe.current.useId()};ce.useImperativeHandle=function(e,t,n){return Qe.current.useImperativeHandle(e,t,n)};ce.useInsertionEffect=function(e,t){return Qe.current.useInsertionEffect(e,t)};ce.useLayoutEffect=function(e,t){return Qe.current.useLayoutEffect(e,t)};ce.useMemo=function(e,t){return Qe.current.useMemo(e,t)};ce.useReducer=function(e,t,n){return Qe.current.useReducer(e,t,n)};ce.useRef=function(e){return Qe.current.useRef(e)};ce.useState=function(e){return Qe.current.useState(e)};ce.useSyncExternalStore=function(e,t,n){return Qe.current.useSyncExternalStore(e,t,n)};ce.useTransition=function(){return Qe.current.useTransition()};ce.version="18.3.1";hd.exports=ce;var U=hd.exports;const $p=Ip(U);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp=U,Yp=Symbol.for("react.element"),Kp=Symbol.for("react.fragment"),Gp=Object.prototype.hasOwnProperty,qp=Qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jp={key:!0,ref:!0,__self:!0,__source:!0};function Cd(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Gp.call(t,r)&&!Jp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Yp,type:e,key:l,ref:o,props:i,_owner:qp.current}}ma.Fragment=Kp;ma.jsx=Cd;ma.jsxs=Cd;md.exports=ma;var a=md.exports,pl={},Nd={exports:{}},dt={},zd={exports:{}},Ed={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(Y,ne){var q=Y.length;Y.push(ne);e:for(;0<q;){var le=q-1>>>1,ze=Y[le];if(0<i(ze,ne))Y[le]=ne,Y[q]=ze,q=le;else break e}}function n(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var ne=Y[0],q=Y.pop();if(q!==ne){Y[0]=q;e:for(var le=0,ze=Y.length,Kt=ze>>>1;le<Kt;){var oe=2*(le+1)-1,Ft=Y[oe],nt=oe+1,Mt=Y[nt];if(0>i(Ft,q))nt<ze&&0>i(Mt,Ft)?(Y[le]=Mt,Y[nt]=q,le=nt):(Y[le]=Ft,Y[oe]=q,le=oe);else if(nt<ze&&0>i(Mt,q))Y[le]=Mt,Y[nt]=q,le=nt;else break e}}return ne}function i(Y,ne){var q=Y.sortIndex-ne.sortIndex;return q!==0?q:Y.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var d=[],x=[],N=1,T=null,C=3,h=!1,M=!1,D=!1,me=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(Y){for(var ne=n(x);ne!==null;){if(ne.callback===null)r(x);else if(ne.startTime<=Y)r(x),ne.sortIndex=ne.expirationTime,t(d,ne);else break;ne=n(x)}}function A(Y){if(D=!1,b(Y),!M)if(n(d)!==null)M=!0,wn(K);else{var ne=n(x);ne!==null&&tt(A,ne.startTime-Y)}}function K(Y,ne){M=!1,D&&(D=!1,v(re),re=-1),h=!0;var q=C;try{for(b(ne),T=n(d);T!==null&&(!(T.expirationTime>ne)||Y&&!Ke());){var le=T.callback;if(typeof le=="function"){T.callback=null,C=T.priorityLevel;var ze=le(T.expirationTime<=ne);ne=e.unstable_now(),typeof ze=="function"?T.callback=ze:T===n(d)&&r(d),b(ne)}else r(d);T=n(d)}if(T!==null)var Kt=!0;else{var oe=n(x);oe!==null&&tt(A,oe.startTime-ne),Kt=!1}return Kt}finally{T=null,C=q,h=!1}}var G=!1,te=null,re=-1,xe=5,ue=-1;function Ke(){return!(e.unstable_now()-ue<xe)}function Yt(){if(te!==null){var Y=e.unstable_now();ue=Y;var ne=!0;try{ne=te(!0,Y)}finally{ne?ve():(G=!1,te=null)}}else G=!1}var ve;if(typeof m=="function")ve=function(){m(Yt)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,bn=ye.port2;ye.port1.onmessage=Yt,ve=function(){bn.postMessage(null)}}else ve=function(){me(Yt,0)};function wn(Y){te=Y,G||(G=!0,ve())}function tt(Y,ne){re=me(function(){Y(e.unstable_now())},ne)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Y){Y.callback=null},e.unstable_continueExecution=function(){M||h||(M=!0,wn(K))},e.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<Y?Math.floor(1e3/Y):5},e.unstable_getCurrentPriorityLevel=function(){return C},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(Y){switch(C){case 1:case 2:case 3:var ne=3;break;default:ne=C}var q=C;C=ne;try{return Y()}finally{C=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Y,ne){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var q=C;C=Y;try{return ne()}finally{C=q}},e.unstable_scheduleCallback=function(Y,ne,q){var le=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?le+q:le):q=le,Y){case 1:var ze=-1;break;case 2:ze=250;break;case 5:ze=1073741823;break;case 4:ze=1e4;break;default:ze=5e3}return ze=q+ze,Y={id:N++,callback:ne,priorityLevel:Y,startTime:q,expirationTime:ze,sortIndex:-1},q>le?(Y.sortIndex=q,t(x,Y),n(d)===null&&Y===n(x)&&(D?(v(re),re=-1):D=!0,tt(A,q-le))):(Y.sortIndex=ze,t(d,Y),M||h||(M=!0,wn(K))),Y},e.unstable_shouldYield=Ke,e.unstable_wrapCallback=function(Y){var ne=C;return function(){var q=C;C=ne;try{return Y.apply(this,arguments)}finally{C=q}}}})(Ed);zd.exports=Ed;var Xp=zd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp=U,st=Xp;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Id=new Set,Ur={};function On(e,t){ar(e,t),ar(e+"Capture",t)}function ar(e,t){for(Ur[e]=t,e=0;e<t.length;e++)Id.add(t[e])}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fl=Object.prototype.hasOwnProperty,e0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,os={},ss={};function t0(e){return fl.call(ss,e)?!0:fl.call(os,e)?!1:e0.test(e)?ss[e]=!0:(os[e]=!0,!1)}function n0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function r0(e,t,n,r){if(t===null||typeof t>"u"||n0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Oe[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Oe[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Oe[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Oe[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Oe[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Oe[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Oe[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Oe[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Oe[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var uo=/[\-:]([a-z])/g;function co(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(uo,co);Oe[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(uo,co);Oe[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(uo,co);Oe[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Oe[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Oe[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function po(e,t,n,r){var i=Oe.hasOwnProperty(t)?Oe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(r0(t,n,i,r)&&(n=null),r||i===null?t0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qt=Zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fi=Symbol.for("react.element"),Hn=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),fo=Symbol.for("react.strict_mode"),gl=Symbol.for("react.profiler"),Td=Symbol.for("react.provider"),Pd=Symbol.for("react.context"),go=Symbol.for("react.forward_ref"),ml=Symbol.for("react.suspense"),hl=Symbol.for("react.suspense_list"),mo=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),Ld=Symbol.for("react.offscreen"),ds=Symbol.iterator;function br(e){return e===null||typeof e!="object"?null:(e=ds&&e[ds]||e["@@iterator"],typeof e=="function"?e:null)}var Ce=Object.assign,Aa;function Er(e){if(Aa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Aa=t&&t[1]||""}return`
`+Aa+e}var Oa=!1;function Da(e,t){if(!e||Oa)return"";Oa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(x){var r=x}Reflect.construct(e,[],t)}else{try{t.call()}catch(x){r=x}e.call(t.prototype)}else{try{throw Error()}catch(x){r=x}e()}}catch(x){if(x&&r&&typeof x.stack=="string"){for(var i=x.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var d=`
`+i[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=u);break}}}finally{Oa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Er(e):""}function i0(e){switch(e.tag){case 5:return Er(e.type);case 16:return Er("Lazy");case 13:return Er("Suspense");case 19:return Er("SuspenseList");case 0:case 2:case 15:return e=Da(e.type,!1),e;case 11:return e=Da(e.type.render,!1),e;case 1:return e=Da(e.type,!0),e;default:return""}}function xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Un:return"Fragment";case Hn:return"Portal";case gl:return"Profiler";case fo:return"StrictMode";case ml:return"Suspense";case hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pd:return(e.displayName||"Context")+".Consumer";case Td:return(e._context.displayName||"Context")+".Provider";case go:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mo:return t=e.displayName||null,t!==null?t:xl(e.type)||"Memo";case en:t=e._payload,e=e._init;try{return xl(e(t))}catch{}}return null}function a0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xl(t);case 8:return t===fo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _d(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function l0(e){var t=_d(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gi(e){e._valueTracker||(e._valueTracker=l0(e))}function Rd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_d(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vl(e,t){var n=t.checked;return Ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function us(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fd(e,t){t=t.checked,t!=null&&po(e,"checked",t,!1)}function yl(e,t){Fd(e,t);var n=mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&bl(e,t.type,mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bl(e,t,n){(t!=="number"||$i(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ir=Array.isArray;function Zn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return Ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ps(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(Ir(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mn(n)}}function Md(e,t){var n=mn(t.value),r=mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ad(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ad(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mi,Od=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mi=mi||document.createElement("div"),mi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},o0=["Webkit","ms","Moz","O"];Object.keys(Lr).forEach(function(e){o0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lr[t]=Lr[e]})});function Dd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Lr.hasOwnProperty(e)&&Lr[e]?(""+t).trim():t+"px"}function Bd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var s0=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sl(e,t){if(t){if(s0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function jl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cl=null;function ho(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nl=null,er=null,tr=null;function gs(e){if(e=si(e)){if(typeof Nl!="function")throw Error(O(280));var t=e.stateNode;t&&(t=ba(t),Nl(e.stateNode,e.type,t))}}function Hd(e){er?tr?tr.push(e):tr=[e]:er=e}function Ud(){if(er){var e=er,t=tr;if(tr=er=null,gs(e),t)for(e=0;e<t.length;e++)gs(t[e])}}function Wd(e,t){return e(t)}function Vd(){}var Ba=!1;function $d(e,t,n){if(Ba)return e(t,n);Ba=!0;try{return Wd(e,t,n)}finally{Ba=!1,(er!==null||tr!==null)&&(Vd(),Ud())}}function Vr(e,t){var n=e.stateNode;if(n===null)return null;var r=ba(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var zl=!1;if(Ut)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){zl=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{zl=!1}function d0(e,t,n,r,i,l,o,u,d){var x=Array.prototype.slice.call(arguments,3);try{t.apply(n,x)}catch(N){this.onError(N)}}var _r=!1,Qi=null,Yi=!1,El=null,u0={onError:function(e){_r=!0,Qi=e}};function c0(e,t,n,r,i,l,o,u,d){_r=!1,Qi=null,d0.apply(u0,arguments)}function p0(e,t,n,r,i,l,o,u,d){if(c0.apply(this,arguments),_r){if(_r){var x=Qi;_r=!1,Qi=null}else throw Error(O(198));Yi||(Yi=!0,El=x)}}function Dn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ms(e){if(Dn(e)!==e)throw Error(O(188))}function f0(e){var t=e.alternate;if(!t){if(t=Dn(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return ms(i),e;if(l===r)return ms(i),t;l=l.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function Yd(e){return e=f0(e),e!==null?Kd(e):null}function Kd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Kd(e);if(t!==null)return t;e=e.sibling}return null}var Gd=st.unstable_scheduleCallback,hs=st.unstable_cancelCallback,g0=st.unstable_shouldYield,m0=st.unstable_requestPaint,Ee=st.unstable_now,h0=st.unstable_getCurrentPriorityLevel,xo=st.unstable_ImmediatePriority,qd=st.unstable_UserBlockingPriority,Ki=st.unstable_NormalPriority,x0=st.unstable_LowPriority,Jd=st.unstable_IdlePriority,ha=null,_t=null;function v0(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(ha,e,void 0,(e.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:w0,y0=Math.log,b0=Math.LN2;function w0(e){return e>>>=0,e===0?32:31-(y0(e)/b0|0)|0}var hi=64,xi=4194304;function Tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~i;u!==0?r=Tr(u):(l&=o,l!==0&&(r=Tr(l)))}else o=n&~i,o!==0?r=Tr(o):l!==0&&(r=Tr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ct(t),i=1<<n,r|=e[n],t&=~i;return r}function k0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function S0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Ct(l),u=1<<o,d=i[o];d===-1?(!(u&n)||u&r)&&(i[o]=k0(u,t)):d<=t&&(e.expiredLanes|=u),l&=~u}}function Il(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xd(){var e=hi;return hi<<=1,!(hi&4194240)&&(hi=64),e}function Ha(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function li(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ct(t),e[t]=n}function j0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ct(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function vo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var fe=0;function Zd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var eu,yo,tu,nu,ru,Tl=!1,vi=[],on=null,sn=null,dn=null,$r=new Map,Qr=new Map,nn=[],C0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xs(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(t.pointerId)}}function kr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=si(t),t!==null&&yo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function N0(e,t,n,r,i){switch(t){case"focusin":return on=kr(on,e,t,n,r,i),!0;case"dragenter":return sn=kr(sn,e,t,n,r,i),!0;case"mouseover":return dn=kr(dn,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return $r.set(l,kr($r.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Qr.set(l,kr(Qr.get(l)||null,e,t,n,r,i)),!0}return!1}function iu(e){var t=En(e.target);if(t!==null){var n=Dn(t);if(n!==null){if(t=n.tag,t===13){if(t=Qd(n),t!==null){e.blockedOn=t,ru(e.priority,function(){tu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cl=r,n.target.dispatchEvent(r),Cl=null}else return t=si(n),t!==null&&yo(t),e.blockedOn=n,!1;t.shift()}return!0}function vs(e,t,n){_i(e)&&n.delete(t)}function z0(){Tl=!1,on!==null&&_i(on)&&(on=null),sn!==null&&_i(sn)&&(sn=null),dn!==null&&_i(dn)&&(dn=null),$r.forEach(vs),Qr.forEach(vs)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,Tl||(Tl=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,z0)))}function Yr(e){function t(i){return Sr(i,e)}if(0<vi.length){Sr(vi[0],e);for(var n=1;n<vi.length;n++){var r=vi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&Sr(on,e),sn!==null&&Sr(sn,e),dn!==null&&Sr(dn,e),$r.forEach(t),Qr.forEach(t),n=0;n<nn.length;n++)r=nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nn.length&&(n=nn[0],n.blockedOn===null);)iu(n),n.blockedOn===null&&nn.shift()}var nr=Qt.ReactCurrentBatchConfig,qi=!0;function E0(e,t,n,r){var i=fe,l=nr.transition;nr.transition=null;try{fe=1,bo(e,t,n,r)}finally{fe=i,nr.transition=l}}function I0(e,t,n,r){var i=fe,l=nr.transition;nr.transition=null;try{fe=4,bo(e,t,n,r)}finally{fe=i,nr.transition=l}}function bo(e,t,n,r){if(qi){var i=Pl(e,t,n,r);if(i===null)Ja(e,t,r,Ji,n),xs(e,r);else if(N0(i,e,t,n,r))r.stopPropagation();else if(xs(e,r),t&4&&-1<C0.indexOf(e)){for(;i!==null;){var l=si(i);if(l!==null&&eu(l),l=Pl(e,t,n,r),l===null&&Ja(e,t,r,Ji,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Ja(e,t,r,null,n)}}var Ji=null;function Pl(e,t,n,r){if(Ji=null,e=ho(r),e=En(e),e!==null)if(t=Dn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ji=e,null}function au(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(h0()){case xo:return 1;case qd:return 4;case Ki:case x0:return 16;case Jd:return 536870912;default:return 16}default:return 16}}var an=null,wo=null,Ri=null;function lu(){if(Ri)return Ri;var e,t=wo,n=t.length,r,i="value"in an?an.value:an.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Ri=i.slice(e,1<r?1-r:void 0)}function Fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yi(){return!0}function ys(){return!1}function ut(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?yi:ys,this.isPropagationStopped=ys,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ko=ut(fr),oi=Ce({},fr,{view:0,detail:0}),T0=ut(oi),Ua,Wa,jr,xa=Ce({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:So,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(Ua=e.screenX-jr.screenX,Wa=e.screenY-jr.screenY):Wa=Ua=0,jr=e),Ua)},movementY:function(e){return"movementY"in e?e.movementY:Wa}}),bs=ut(xa),P0=Ce({},xa,{dataTransfer:0}),L0=ut(P0),_0=Ce({},oi,{relatedTarget:0}),Va=ut(_0),R0=Ce({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),F0=ut(R0),M0=Ce({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),A0=ut(M0),O0=Ce({},fr,{data:0}),ws=ut(O0),D0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=H0[e])?!!t[e]:!1}function So(){return U0}var W0=Ce({},oi,{key:function(e){if(e.key){var t=D0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?B0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:So,charCode:function(e){return e.type==="keypress"?Fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),V0=ut(W0),$0=Ce({},xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ks=ut($0),Q0=Ce({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:So}),Y0=ut(Q0),K0=Ce({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),G0=ut(K0),q0=Ce({},xa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),J0=ut(q0),X0=[9,13,27,32],jo=Ut&&"CompositionEvent"in window,Rr=null;Ut&&"documentMode"in document&&(Rr=document.documentMode);var Z0=Ut&&"TextEvent"in window&&!Rr,ou=Ut&&(!jo||Rr&&8<Rr&&11>=Rr),Ss=" ",js=!1;function su(e,t){switch(e){case"keyup":return X0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function du(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function ef(e,t){switch(e){case"compositionend":return du(t);case"keypress":return t.which!==32?null:(js=!0,Ss);case"textInput":return e=t.data,e===Ss&&js?null:e;default:return null}}function tf(e,t){if(Wn)return e==="compositionend"||!jo&&su(e,t)?(e=lu(),Ri=wo=an=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ou&&t.locale!=="ko"?null:t.data;default:return null}}var nf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nf[e.type]:t==="textarea"}function uu(e,t,n,r){Hd(r),t=Xi(t,"onChange"),0<t.length&&(n=new ko("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fr=null,Kr=null;function rf(e){wu(e,0)}function va(e){var t=Qn(e);if(Rd(t))return e}function af(e,t){if(e==="change")return t}var cu=!1;if(Ut){var $a;if(Ut){var Qa="oninput"in document;if(!Qa){var Ns=document.createElement("div");Ns.setAttribute("oninput","return;"),Qa=typeof Ns.oninput=="function"}$a=Qa}else $a=!1;cu=$a&&(!document.documentMode||9<document.documentMode)}function zs(){Fr&&(Fr.detachEvent("onpropertychange",pu),Kr=Fr=null)}function pu(e){if(e.propertyName==="value"&&va(Kr)){var t=[];uu(t,Kr,e,ho(e)),$d(rf,t)}}function lf(e,t,n){e==="focusin"?(zs(),Fr=t,Kr=n,Fr.attachEvent("onpropertychange",pu)):e==="focusout"&&zs()}function of(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return va(Kr)}function sf(e,t){if(e==="click")return va(t)}function df(e,t){if(e==="input"||e==="change")return va(t)}function uf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:uf;function Gr(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fl.call(t,i)||!zt(e[i],t[i]))return!1}return!0}function Es(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Is(e,t){var n=Es(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Es(n)}}function fu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gu(){for(var e=window,t=$i();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$i(e.document)}return t}function Co(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cf(e){var t=gu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fu(n.ownerDocument.documentElement,n)){if(r!==null&&Co(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Is(n,l);var o=Is(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pf=Ut&&"documentMode"in document&&11>=document.documentMode,Vn=null,Ll=null,Mr=null,_l=!1;function Ts(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_l||Vn==null||Vn!==$i(r)||(r=Vn,"selectionStart"in r&&Co(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mr&&Gr(Mr,r)||(Mr=r,r=Xi(Ll,"onSelect"),0<r.length&&(t=new ko("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vn)))}function bi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $n={animationend:bi("Animation","AnimationEnd"),animationiteration:bi("Animation","AnimationIteration"),animationstart:bi("Animation","AnimationStart"),transitionend:bi("Transition","TransitionEnd")},Ya={},mu={};Ut&&(mu=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function ya(e){if(Ya[e])return Ya[e];if(!$n[e])return e;var t=$n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mu)return Ya[e]=t[n];return e}var hu=ya("animationend"),xu=ya("animationiteration"),vu=ya("animationstart"),yu=ya("transitionend"),bu=new Map,Ps="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,t){bu.set(e,t),On(t,[e])}for(var Ka=0;Ka<Ps.length;Ka++){var Ga=Ps[Ka],ff=Ga.toLowerCase(),gf=Ga[0].toUpperCase()+Ga.slice(1);xn(ff,"on"+gf)}xn(hu,"onAnimationEnd");xn(xu,"onAnimationIteration");xn(vu,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(yu,"onTransitionEnd");ar("onMouseEnter",["mouseout","mouseover"]);ar("onMouseLeave",["mouseout","mouseover"]);ar("onPointerEnter",["pointerout","pointerover"]);ar("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));function Ls(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,p0(r,t,void 0,e),e.currentTarget=null}function wu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],d=u.instance,x=u.currentTarget;if(u=u.listener,d!==l&&i.isPropagationStopped())break e;Ls(i,u,x),l=d}else for(o=0;o<r.length;o++){if(u=r[o],d=u.instance,x=u.currentTarget,u=u.listener,d!==l&&i.isPropagationStopped())break e;Ls(i,u,x),l=d}}}if(Yi)throw e=El,Yi=!1,El=null,e}function be(e,t){var n=t[Ol];n===void 0&&(n=t[Ol]=new Set);var r=e+"__bubble";n.has(r)||(ku(t,e,2,!1),n.add(r))}function qa(e,t,n){var r=0;t&&(r|=4),ku(n,e,r,t)}var wi="_reactListening"+Math.random().toString(36).slice(2);function qr(e){if(!e[wi]){e[wi]=!0,Id.forEach(function(n){n!=="selectionchange"&&(mf.has(n)||qa(n,!1,e),qa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wi]||(t[wi]=!0,qa("selectionchange",!1,t))}}function ku(e,t,n,r){switch(au(t)){case 1:var i=E0;break;case 4:i=I0;break;default:i=bo}n=i.bind(null,t,n,e),i=void 0,!zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ja(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;o=o.return}for(;u!==null;){if(o=En(u),o===null)return;if(d=o.tag,d===5||d===6){r=l=o;continue e}u=u.parentNode}}r=r.return}$d(function(){var x=l,N=ho(n),T=[];e:{var C=bu.get(e);if(C!==void 0){var h=ko,M=e;switch(e){case"keypress":if(Fi(n)===0)break e;case"keydown":case"keyup":h=V0;break;case"focusin":M="focus",h=Va;break;case"focusout":M="blur",h=Va;break;case"beforeblur":case"afterblur":h=Va;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=L0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Y0;break;case hu:case xu:case vu:h=F0;break;case yu:h=G0;break;case"scroll":h=T0;break;case"wheel":h=J0;break;case"copy":case"cut":case"paste":h=A0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ks}var D=(t&4)!==0,me=!D&&e==="scroll",v=D?C!==null?C+"Capture":null:C;D=[];for(var m=x,b;m!==null;){b=m;var A=b.stateNode;if(b.tag===5&&A!==null&&(b=A,v!==null&&(A=Vr(m,v),A!=null&&D.push(Jr(m,A,b)))),me)break;m=m.return}0<D.length&&(C=new h(C,M,null,n,N),T.push({event:C,listeners:D}))}}if(!(t&7)){e:{if(C=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",C&&n!==Cl&&(M=n.relatedTarget||n.fromElement)&&(En(M)||M[Wt]))break e;if((h||C)&&(C=N.window===N?N:(C=N.ownerDocument)?C.defaultView||C.parentWindow:window,h?(M=n.relatedTarget||n.toElement,h=x,M=M?En(M):null,M!==null&&(me=Dn(M),M!==me||M.tag!==5&&M.tag!==6)&&(M=null)):(h=null,M=x),h!==M)){if(D=bs,A="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(D=ks,A="onPointerLeave",v="onPointerEnter",m="pointer"),me=h==null?C:Qn(h),b=M==null?C:Qn(M),C=new D(A,m+"leave",h,n,N),C.target=me,C.relatedTarget=b,A=null,En(N)===x&&(D=new D(v,m+"enter",M,n,N),D.target=b,D.relatedTarget=me,A=D),me=A,h&&M)t:{for(D=h,v=M,m=0,b=D;b;b=Bn(b))m++;for(b=0,A=v;A;A=Bn(A))b++;for(;0<m-b;)D=Bn(D),m--;for(;0<b-m;)v=Bn(v),b--;for(;m--;){if(D===v||v!==null&&D===v.alternate)break t;D=Bn(D),v=Bn(v)}D=null}else D=null;h!==null&&_s(T,C,h,D,!1),M!==null&&me!==null&&_s(T,me,M,D,!0)}}e:{if(C=x?Qn(x):window,h=C.nodeName&&C.nodeName.toLowerCase(),h==="select"||h==="input"&&C.type==="file")var K=af;else if(Cs(C))if(cu)K=df;else{K=of;var G=lf}else(h=C.nodeName)&&h.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(K=sf);if(K&&(K=K(e,x))){uu(T,K,n,N);break e}G&&G(e,C,x),e==="focusout"&&(G=C._wrapperState)&&G.controlled&&C.type==="number"&&bl(C,"number",C.value)}switch(G=x?Qn(x):window,e){case"focusin":(Cs(G)||G.contentEditable==="true")&&(Vn=G,Ll=x,Mr=null);break;case"focusout":Mr=Ll=Vn=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,Ts(T,n,N);break;case"selectionchange":if(pf)break;case"keydown":case"keyup":Ts(T,n,N)}var te;if(jo)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else Wn?su(e,n)&&(re="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(re="onCompositionStart");re&&(ou&&n.locale!=="ko"&&(Wn||re!=="onCompositionStart"?re==="onCompositionEnd"&&Wn&&(te=lu()):(an=N,wo="value"in an?an.value:an.textContent,Wn=!0)),G=Xi(x,re),0<G.length&&(re=new ws(re,e,null,n,N),T.push({event:re,listeners:G}),te?re.data=te:(te=du(n),te!==null&&(re.data=te)))),(te=Z0?ef(e,n):tf(e,n))&&(x=Xi(x,"onBeforeInput"),0<x.length&&(N=new ws("onBeforeInput","beforeinput",null,n,N),T.push({event:N,listeners:x}),N.data=te))}wu(T,t)})}function Jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Vr(e,n),l!=null&&r.unshift(Jr(e,l,i)),l=Vr(e,t),l!=null&&r.push(Jr(e,l,i))),e=e.return}return r}function Bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _s(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var u=n,d=u.alternate,x=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&x!==null&&(u=x,i?(d=Vr(n,l),d!=null&&o.unshift(Jr(n,d,u))):i||(d=Vr(n,l),d!=null&&o.push(Jr(n,d,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var hf=/\r\n?/g,xf=/\u0000|\uFFFD/g;function Rs(e){return(typeof e=="string"?e:""+e).replace(hf,`
`).replace(xf,"")}function ki(e,t,n){if(t=Rs(t),Rs(e)!==t&&n)throw Error(O(425))}function Zi(){}var Rl=null,Fl=null;function Ml(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Al=typeof setTimeout=="function"?setTimeout:void 0,vf=typeof clearTimeout=="function"?clearTimeout:void 0,Fs=typeof Promise=="function"?Promise:void 0,yf=typeof queueMicrotask=="function"?queueMicrotask:typeof Fs<"u"?function(e){return Fs.resolve(null).then(e).catch(bf)}:Al;function bf(e){setTimeout(function(){throw e})}function Xa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yr(t)}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ms(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gr=Math.random().toString(36).slice(2),Lt="__reactFiber$"+gr,Xr="__reactProps$"+gr,Wt="__reactContainer$"+gr,Ol="__reactEvents$"+gr,wf="__reactListeners$"+gr,kf="__reactHandles$"+gr;function En(e){var t=e[Lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[Lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ms(e);e!==null;){if(n=e[Lt])return n;e=Ms(e)}return t}e=n,n=e.parentNode}return null}function si(e){return e=e[Lt]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function ba(e){return e[Xr]||null}var Dl=[],Yn=-1;function vn(e){return{current:e}}function we(e){0>Yn||(e.current=Dl[Yn],Dl[Yn]=null,Yn--)}function he(e,t){Yn++,Dl[Yn]=e.current,e.current=t}var hn={},Ue=vn(hn),Xe=vn(!1),_n=hn;function lr(e,t){var n=e.type.contextTypes;if(!n)return hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ze(e){return e=e.childContextTypes,e!=null}function ea(){we(Xe),we(Ue)}function As(e,t,n){if(Ue.current!==hn)throw Error(O(168));he(Ue,t),he(Xe,n)}function Su(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(O(108,a0(e)||"Unknown",i));return Ce({},n,r)}function ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hn,_n=Ue.current,he(Ue,e),he(Xe,Xe.current),!0}function Os(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=Su(e,t,_n),r.__reactInternalMemoizedMergedChildContext=e,we(Xe),we(Ue),he(Ue,e)):we(Xe),he(Xe,n)}var Ot=null,wa=!1,Za=!1;function ju(e){Ot===null?Ot=[e]:Ot.push(e)}function Sf(e){wa=!0,ju(e)}function yn(){if(!Za&&Ot!==null){Za=!0;var e=0,t=fe;try{var n=Ot;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ot=null,wa=!1}catch(i){throw Ot!==null&&(Ot=Ot.slice(e+1)),Gd(xo,yn),i}finally{fe=t,Za=!1}}return null}var Kn=[],Gn=0,na=null,ra=0,pt=[],ft=0,Rn=null,Dt=1,Bt="";function Nn(e,t){Kn[Gn++]=ra,Kn[Gn++]=na,na=e,ra=t}function Cu(e,t,n){pt[ft++]=Dt,pt[ft++]=Bt,pt[ft++]=Rn,Rn=e;var r=Dt;e=Bt;var i=32-Ct(r)-1;r&=~(1<<i),n+=1;var l=32-Ct(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dt=1<<32-Ct(t)+i|n<<i|r,Bt=l+e}else Dt=1<<l|n<<i|r,Bt=e}function No(e){e.return!==null&&(Nn(e,1),Cu(e,1,0))}function zo(e){for(;e===na;)na=Kn[--Gn],Kn[Gn]=null,ra=Kn[--Gn],Kn[Gn]=null;for(;e===Rn;)Rn=pt[--ft],pt[ft]=null,Bt=pt[--ft],pt[ft]=null,Dt=pt[--ft],pt[ft]=null}var ot=null,lt=null,ke=!1,jt=null;function Nu(e,t){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ds(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,lt=un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rn!==null?{id:Dt,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,lt=null,!0):!1;default:return!1}}function Bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hl(e){if(ke){var t=lt;if(t){var n=t;if(!Ds(e,t)){if(Bl(e))throw Error(O(418));t=un(n.nextSibling);var r=ot;t&&Ds(e,t)?Nu(r,n):(e.flags=e.flags&-4097|2,ke=!1,ot=e)}}else{if(Bl(e))throw Error(O(418));e.flags=e.flags&-4097|2,ke=!1,ot=e}}}function Bs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function Si(e){if(e!==ot)return!1;if(!ke)return Bs(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ml(e.type,e.memoizedProps)),t&&(t=lt)){if(Bl(e))throw zu(),Error(O(418));for(;t;)Nu(e,t),t=un(t.nextSibling)}if(Bs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=ot?un(e.stateNode.nextSibling):null;return!0}function zu(){for(var e=lt;e;)e=un(e.nextSibling)}function or(){lt=ot=null,ke=!1}function Eo(e){jt===null?jt=[e]:jt.push(e)}var jf=Qt.ReactCurrentBatchConfig;function Cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var u=i.refs;o===null?delete u[l]:u[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function ji(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hs(e){var t=e._init;return t(e._payload)}function Eu(e){function t(v,m){if(e){var b=v.deletions;b===null?(v.deletions=[m],v.flags|=16):b.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function i(v,m){return v=gn(v,m),v.index=0,v.sibling=null,v}function l(v,m,b){return v.index=b,e?(b=v.alternate,b!==null?(b=b.index,b<m?(v.flags|=2,m):b):(v.flags|=2,m)):(v.flags|=1048576,m)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function u(v,m,b,A){return m===null||m.tag!==6?(m=ll(b,v.mode,A),m.return=v,m):(m=i(m,b),m.return=v,m)}function d(v,m,b,A){var K=b.type;return K===Un?N(v,m,b.props.children,A,b.key):m!==null&&(m.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===en&&Hs(K)===m.type)?(A=i(m,b.props),A.ref=Cr(v,m,b),A.return=v,A):(A=Ui(b.type,b.key,b.props,null,v.mode,A),A.ref=Cr(v,m,b),A.return=v,A)}function x(v,m,b,A){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=ol(b,v.mode,A),m.return=v,m):(m=i(m,b.children||[]),m.return=v,m)}function N(v,m,b,A,K){return m===null||m.tag!==7?(m=Ln(b,v.mode,A,K),m.return=v,m):(m=i(m,b),m.return=v,m)}function T(v,m,b){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ll(""+m,v.mode,b),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case fi:return b=Ui(m.type,m.key,m.props,null,v.mode,b),b.ref=Cr(v,null,m),b.return=v,b;case Hn:return m=ol(m,v.mode,b),m.return=v,m;case en:var A=m._init;return T(v,A(m._payload),b)}if(Ir(m)||br(m))return m=Ln(m,v.mode,b,null),m.return=v,m;ji(v,m)}return null}function C(v,m,b,A){var K=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return K!==null?null:u(v,m,""+b,A);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case fi:return b.key===K?d(v,m,b,A):null;case Hn:return b.key===K?x(v,m,b,A):null;case en:return K=b._init,C(v,m,K(b._payload),A)}if(Ir(b)||br(b))return K!==null?null:N(v,m,b,A,null);ji(v,b)}return null}function h(v,m,b,A,K){if(typeof A=="string"&&A!==""||typeof A=="number")return v=v.get(b)||null,u(m,v,""+A,K);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case fi:return v=v.get(A.key===null?b:A.key)||null,d(m,v,A,K);case Hn:return v=v.get(A.key===null?b:A.key)||null,x(m,v,A,K);case en:var G=A._init;return h(v,m,b,G(A._payload),K)}if(Ir(A)||br(A))return v=v.get(b)||null,N(m,v,A,K,null);ji(m,A)}return null}function M(v,m,b,A){for(var K=null,G=null,te=m,re=m=0,xe=null;te!==null&&re<b.length;re++){te.index>re?(xe=te,te=null):xe=te.sibling;var ue=C(v,te,b[re],A);if(ue===null){te===null&&(te=xe);break}e&&te&&ue.alternate===null&&t(v,te),m=l(ue,m,re),G===null?K=ue:G.sibling=ue,G=ue,te=xe}if(re===b.length)return n(v,te),ke&&Nn(v,re),K;if(te===null){for(;re<b.length;re++)te=T(v,b[re],A),te!==null&&(m=l(te,m,re),G===null?K=te:G.sibling=te,G=te);return ke&&Nn(v,re),K}for(te=r(v,te);re<b.length;re++)xe=h(te,v,re,b[re],A),xe!==null&&(e&&xe.alternate!==null&&te.delete(xe.key===null?re:xe.key),m=l(xe,m,re),G===null?K=xe:G.sibling=xe,G=xe);return e&&te.forEach(function(Ke){return t(v,Ke)}),ke&&Nn(v,re),K}function D(v,m,b,A){var K=br(b);if(typeof K!="function")throw Error(O(150));if(b=K.call(b),b==null)throw Error(O(151));for(var G=K=null,te=m,re=m=0,xe=null,ue=b.next();te!==null&&!ue.done;re++,ue=b.next()){te.index>re?(xe=te,te=null):xe=te.sibling;var Ke=C(v,te,ue.value,A);if(Ke===null){te===null&&(te=xe);break}e&&te&&Ke.alternate===null&&t(v,te),m=l(Ke,m,re),G===null?K=Ke:G.sibling=Ke,G=Ke,te=xe}if(ue.done)return n(v,te),ke&&Nn(v,re),K;if(te===null){for(;!ue.done;re++,ue=b.next())ue=T(v,ue.value,A),ue!==null&&(m=l(ue,m,re),G===null?K=ue:G.sibling=ue,G=ue);return ke&&Nn(v,re),K}for(te=r(v,te);!ue.done;re++,ue=b.next())ue=h(te,v,re,ue.value,A),ue!==null&&(e&&ue.alternate!==null&&te.delete(ue.key===null?re:ue.key),m=l(ue,m,re),G===null?K=ue:G.sibling=ue,G=ue);return e&&te.forEach(function(Yt){return t(v,Yt)}),ke&&Nn(v,re),K}function me(v,m,b,A){if(typeof b=="object"&&b!==null&&b.type===Un&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case fi:e:{for(var K=b.key,G=m;G!==null;){if(G.key===K){if(K=b.type,K===Un){if(G.tag===7){n(v,G.sibling),m=i(G,b.props.children),m.return=v,v=m;break e}}else if(G.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===en&&Hs(K)===G.type){n(v,G.sibling),m=i(G,b.props),m.ref=Cr(v,G,b),m.return=v,v=m;break e}n(v,G);break}else t(v,G);G=G.sibling}b.type===Un?(m=Ln(b.props.children,v.mode,A,b.key),m.return=v,v=m):(A=Ui(b.type,b.key,b.props,null,v.mode,A),A.ref=Cr(v,m,b),A.return=v,v=A)}return o(v);case Hn:e:{for(G=b.key;m!==null;){if(m.key===G)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){n(v,m.sibling),m=i(m,b.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=ol(b,v.mode,A),m.return=v,v=m}return o(v);case en:return G=b._init,me(v,m,G(b._payload),A)}if(Ir(b))return M(v,m,b,A);if(br(b))return D(v,m,b,A);ji(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,m!==null&&m.tag===6?(n(v,m.sibling),m=i(m,b),m.return=v,v=m):(n(v,m),m=ll(b,v.mode,A),m.return=v,v=m),o(v)):n(v,m)}return me}var sr=Eu(!0),Iu=Eu(!1),ia=vn(null),aa=null,qn=null,Io=null;function To(){Io=qn=aa=null}function Po(e){var t=ia.current;we(ia),e._currentValue=t}function Ul(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rr(e,t){aa=e,Io=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Je=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(Io!==e)if(e={context:e,memoizedValue:t,next:null},qn===null){if(aa===null)throw Error(O(308));qn=e,aa.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return t}var In=null;function Lo(e){In===null?In=[e]:In.push(e)}function Tu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Lo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Vt(e,r)}function Vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tn=!1;function _o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Vt(e,n)}return i=r.interleaved,i===null?(t.next=t,Lo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Vt(e,n)}function Mi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vo(e,n)}}function Us(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function la(e,t,n,r){var i=e.updateQueue;tn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var d=u,x=d.next;d.next=null,o===null?l=x:o.next=x,o=d;var N=e.alternate;N!==null&&(N=N.updateQueue,u=N.lastBaseUpdate,u!==o&&(u===null?N.firstBaseUpdate=x:u.next=x,N.lastBaseUpdate=d))}if(l!==null){var T=i.baseState;o=0,N=x=d=null,u=l;do{var C=u.lane,h=u.eventTime;if((r&C)===C){N!==null&&(N=N.next={eventTime:h,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var M=e,D=u;switch(C=t,h=n,D.tag){case 1:if(M=D.payload,typeof M=="function"){T=M.call(h,T,C);break e}T=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=D.payload,C=typeof M=="function"?M.call(h,T,C):M,C==null)break e;T=Ce({},T,C);break e;case 2:tn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,C=i.effects,C===null?i.effects=[u]:C.push(u))}else h={eventTime:h,lane:C,tag:u.tag,payload:u.payload,callback:u.callback,next:null},N===null?(x=N=h,d=T):N=N.next=h,o|=C;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;C=u,u=C.next,C.next=null,i.lastBaseUpdate=C,i.shared.pending=null}}while(!0);if(N===null&&(d=T),i.baseState=d,i.firstBaseUpdate=x,i.lastBaseUpdate=N,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Mn|=o,e.lanes=o,e.memoizedState=T}}function Ws(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var di={},Rt=vn(di),Zr=vn(di),ei=vn(di);function Tn(e){if(e===di)throw Error(O(174));return e}function Ro(e,t){switch(he(ei,t),he(Zr,e),he(Rt,di),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=kl(t,e)}we(Rt),he(Rt,t)}function dr(){we(Rt),we(Zr),we(ei)}function Lu(e){Tn(ei.current);var t=Tn(Rt.current),n=kl(t,e.type);t!==n&&(he(Zr,e),he(Rt,n))}function Fo(e){Zr.current===e&&(we(Rt),we(Zr))}var Se=vn(0);function oa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var el=[];function Mo(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var Ai=Qt.ReactCurrentDispatcher,tl=Qt.ReactCurrentBatchConfig,Fn=0,je=null,Te=null,_e=null,sa=!1,Ar=!1,ti=0,Cf=0;function De(){throw Error(O(321))}function Ao(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,l){if(Fn=l,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ai.current=e===null||e.memoizedState===null?If:Tf,e=n(r,i),Ar){l=0;do{if(Ar=!1,ti=0,25<=l)throw Error(O(301));l+=1,_e=Te=null,t.updateQueue=null,Ai.current=Pf,e=n(r,i)}while(Ar)}if(Ai.current=da,t=Te!==null&&Te.next!==null,Fn=0,_e=Te=je=null,sa=!1,t)throw Error(O(300));return e}function Do(){var e=ti!==0;return ti=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?je.memoizedState=_e=e:_e=_e.next=e,_e}function xt(){if(Te===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=_e===null?je.memoizedState:_e.next;if(t!==null)_e=t,Te=e;else{if(e===null)throw Error(O(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},_e===null?je.memoizedState=_e=e:_e=_e.next=e}return _e}function ni(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=xt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=Te,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,d=null,x=l;do{var N=x.lane;if((Fn&N)===N)d!==null&&(d=d.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),r=x.hasEagerState?x.eagerState:e(r,x.action);else{var T={lane:N,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};d===null?(u=d=T,o=r):d=d.next=T,je.lanes|=N,Mn|=N}x=x.next}while(x!==null&&x!==l);d===null?o=r:d.next=u,zt(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,je.lanes|=l,Mn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rl(e){var t=xt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);zt(l,t.memoizedState)||(Je=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function _u(){}function Ru(e,t){var n=je,r=xt(),i=t(),l=!zt(r.memoizedState,i);if(l&&(r.memoizedState=i,Je=!0),r=r.queue,Bo(Au.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,ri(9,Mu.bind(null,n,r,i,t),void 0,null),Re===null)throw Error(O(349));Fn&30||Fu(n,t,i)}return i}function Fu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mu(e,t,n,r){t.value=n,t.getSnapshot=r,Ou(t)&&Du(e)}function Au(e,t,n){return n(function(){Ou(t)&&Du(e)})}function Ou(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function Du(e){var t=Vt(e,1);t!==null&&Nt(t,e,1,-1)}function Vs(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:e},t.queue=e,e=e.dispatch=Ef.bind(null,je,e),[t.memoizedState,e]}function ri(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Bu(){return xt().memoizedState}function Oi(e,t,n,r){var i=Pt();je.flags|=e,i.memoizedState=ri(1|t,n,void 0,r===void 0?null:r)}function ka(e,t,n,r){var i=xt();r=r===void 0?null:r;var l=void 0;if(Te!==null){var o=Te.memoizedState;if(l=o.destroy,r!==null&&Ao(r,o.deps)){i.memoizedState=ri(t,n,l,r);return}}je.flags|=e,i.memoizedState=ri(1|t,n,l,r)}function $s(e,t){return Oi(8390656,8,e,t)}function Bo(e,t){return ka(2048,8,e,t)}function Hu(e,t){return ka(4,2,e,t)}function Uu(e,t){return ka(4,4,e,t)}function Wu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vu(e,t,n){return n=n!=null?n.concat([e]):null,ka(4,4,Wu.bind(null,t,e),n)}function Ho(){}function $u(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ao(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qu(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ao(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yu(e,t,n){return Fn&21?(zt(n,t)||(n=Xd(),je.lanes|=n,Mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n)}function Nf(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=tl.transition;tl.transition={};try{e(!1),t()}finally{fe=n,tl.transition=r}}function Ku(){return xt().memoizedState}function zf(e,t,n){var r=fn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gu(e))qu(t,n);else if(n=Tu(e,t,n,r),n!==null){var i=$e();Nt(n,e,r,i),Ju(n,t,r)}}function Ef(e,t,n){var r=fn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gu(e))qu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,u=l(o,n);if(i.hasEagerState=!0,i.eagerState=u,zt(u,o)){var d=t.interleaved;d===null?(i.next=i,Lo(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=Tu(e,t,i,r),n!==null&&(i=$e(),Nt(n,e,r,i),Ju(n,t,r))}}function Gu(e){var t=e.alternate;return e===je||t!==null&&t===je}function qu(e,t){Ar=sa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ju(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vo(e,n)}}var da={readContext:ht,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},If={readContext:ht,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:$s,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oi(4194308,4,Wu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oi(4,2,e,t)},useMemo:function(e,t){var n=Pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=zf.bind(null,je,e),[r.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:Vs,useDebugValue:Ho,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=Vs(!1),t=e[0];return e=Nf.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=je,i=Pt();if(ke){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),Re===null)throw Error(O(349));Fn&30||Fu(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,$s(Au.bind(null,r,l,e),[e]),r.flags|=2048,ri(9,Mu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Pt(),t=Re.identifierPrefix;if(ke){var n=Bt,r=Dt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ti++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tf={readContext:ht,useCallback:$u,useContext:ht,useEffect:Bo,useImperativeHandle:Vu,useInsertionEffect:Hu,useLayoutEffect:Uu,useMemo:Qu,useReducer:nl,useRef:Bu,useState:function(){return nl(ni)},useDebugValue:Ho,useDeferredValue:function(e){var t=xt();return Yu(t,Te.memoizedState,e)},useTransition:function(){var e=nl(ni)[0],t=xt().memoizedState;return[e,t]},useMutableSource:_u,useSyncExternalStore:Ru,useId:Ku,unstable_isNewReconciler:!1},Pf={readContext:ht,useCallback:$u,useContext:ht,useEffect:Bo,useImperativeHandle:Vu,useInsertionEffect:Hu,useLayoutEffect:Uu,useMemo:Qu,useReducer:rl,useRef:Bu,useState:function(){return rl(ni)},useDebugValue:Ho,useDeferredValue:function(e){var t=xt();return Te===null?t.memoizedState=e:Yu(t,Te.memoizedState,e)},useTransition:function(){var e=rl(ni)[0],t=xt().memoizedState;return[e,t]},useMutableSource:_u,useSyncExternalStore:Ru,useId:Ku,unstable_isNewReconciler:!1};function kt(e,t){if(e&&e.defaultProps){t=Ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Wl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sa={isMounted:function(e){return(e=e._reactInternals)?Dn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$e(),i=fn(e),l=Ht(r,i);l.payload=t,n!=null&&(l.callback=n),t=cn(e,l,i),t!==null&&(Nt(t,e,i,r),Mi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$e(),i=fn(e),l=Ht(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=cn(e,l,i),t!==null&&(Nt(t,e,i,r),Mi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$e(),r=fn(e),i=Ht(n,r);i.tag=2,t!=null&&(i.callback=t),t=cn(e,i,r),t!==null&&(Nt(t,e,r,n),Mi(t,e,r))}};function Qs(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Gr(n,r)||!Gr(i,l):!0}function Xu(e,t,n){var r=!1,i=hn,l=t.contextType;return typeof l=="object"&&l!==null?l=ht(l):(i=Ze(t)?_n:Ue.current,r=t.contextTypes,l=(r=r!=null)?lr(e,i):hn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Sa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sa.enqueueReplaceState(t,t.state,null)}function Vl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},_o(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=ht(l):(l=Ze(t)?_n:Ue.current,i.context=lr(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Wl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Sa.enqueueReplaceState(i,i.state,null),la(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,t){try{var n="",r=t;do n+=i0(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function il(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $l(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Lf=typeof WeakMap=="function"?WeakMap:Map;function Zu(e,t,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ca||(ca=!0,to=r),$l(e,t)},n}function ec(e,t,n){n=Ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){$l(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){$l(e,t),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ks(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Lf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Qf.bind(null,e,t,n),t.then(e,e))}function Gs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ht(-1,1),t.tag=2,cn(n,t,1))),n.lanes|=1),e)}var _f=Qt.ReactCurrentOwner,Je=!1;function Ve(e,t,n,r){t.child=e===null?Iu(t,null,n,r):sr(t,e.child,n,r)}function Js(e,t,n,r,i){n=n.render;var l=t.ref;return rr(t,i),r=Oo(e,t,n,r,l,i),n=Do(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$t(e,t,i)):(ke&&n&&No(t),t.flags|=1,Ve(e,t,r,i),t.child)}function Xs(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Go(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,tc(e,t,l,r,i)):(e=Ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Gr,n(o,r)&&e.ref===t.ref)return $t(e,t,i)}return t.flags|=1,e=gn(l,r),e.ref=t.ref,e.return=t,t.child=e}function tc(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Gr(l,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Je=!0);else return t.lanes=e.lanes,$t(e,t,i)}return Ql(e,t,n,r,i)}function nc(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Xn,at),at|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(Xn,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,he(Xn,at),at|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,he(Xn,at),at|=r;return Ve(e,t,i,n),t.child}function rc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ql(e,t,n,r,i){var l=Ze(n)?_n:Ue.current;return l=lr(t,l),rr(t,i),n=Oo(e,t,n,r,l,i),r=Do(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$t(e,t,i)):(ke&&r&&No(t),t.flags|=1,Ve(e,t,n,i),t.child)}function Zs(e,t,n,r,i){if(Ze(n)){var l=!0;ta(t)}else l=!1;if(rr(t,i),t.stateNode===null)Di(e,t),Xu(t,n,r),Vl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var d=o.context,x=n.contextType;typeof x=="object"&&x!==null?x=ht(x):(x=Ze(n)?_n:Ue.current,x=lr(t,x));var N=n.getDerivedStateFromProps,T=typeof N=="function"||typeof o.getSnapshotBeforeUpdate=="function";T||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||d!==x)&&Ys(t,o,r,x),tn=!1;var C=t.memoizedState;o.state=C,la(t,r,o,i),d=t.memoizedState,u!==r||C!==d||Xe.current||tn?(typeof N=="function"&&(Wl(t,n,N,r),d=t.memoizedState),(u=tn||Qs(t,n,u,r,C,d,x))?(T||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),o.props=r,o.state=d,o.context=x,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Pu(e,t),u=t.memoizedProps,x=t.type===t.elementType?u:kt(t.type,u),o.props=x,T=t.pendingProps,C=o.context,d=n.contextType,typeof d=="object"&&d!==null?d=ht(d):(d=Ze(n)?_n:Ue.current,d=lr(t,d));var h=n.getDerivedStateFromProps;(N=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==T||C!==d)&&Ys(t,o,r,d),tn=!1,C=t.memoizedState,o.state=C,la(t,r,o,i);var M=t.memoizedState;u!==T||C!==M||Xe.current||tn?(typeof h=="function"&&(Wl(t,n,h,r),M=t.memoizedState),(x=tn||Qs(t,n,x,r,C,M,d)||!1)?(N||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,M,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,M,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=M),o.props=r,o.state=M,o.context=d,r=x):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),r=!1)}return Yl(e,t,n,r,l,i)}function Yl(e,t,n,r,i,l){rc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Os(t,n,!1),$t(e,t,l);r=t.stateNode,_f.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=sr(t,e.child,null,l),t.child=sr(t,null,u,l)):Ve(e,t,u,l),t.memoizedState=r.state,i&&Os(t,n,!0),t.child}function ic(e){var t=e.stateNode;t.pendingContext?As(e,t.pendingContext,t.pendingContext!==t.context):t.context&&As(e,t.context,!1),Ro(e,t.containerInfo)}function ed(e,t,n,r,i){return or(),Eo(i),t.flags|=256,Ve(e,t,n,r),t.child}var Kl={dehydrated:null,treeContext:null,retryLane:0};function Gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function ac(e,t,n){var r=t.pendingProps,i=Se.current,l=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(Se,i&1),e===null)return Hl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Na(o,r,0,null),e=Ln(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Gl(n),t.memoizedState=Kl,e):Uo(t,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Rf(e,t,o,r,u,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,u=i.sibling;var d={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=gn(i,d),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=gn(u,l):(l=Ln(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Gl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Kl,r}return l=e.child,e=l.sibling,r=gn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Uo(e,t){return t=Na({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ci(e,t,n,r){return r!==null&&Eo(r),sr(t,e.child,null,n),e=Uo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rf(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=il(Error(O(422))),Ci(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Na({mode:"visible",children:r.children},i,0,null),l=Ln(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&sr(t,e.child,null,o),t.child.memoizedState=Gl(o),t.memoizedState=Kl,l);if(!(t.mode&1))return Ci(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(O(419)),r=il(l,r,void 0),Ci(e,t,o,r)}if(u=(o&e.childLanes)!==0,Je||u){if(r=Re,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Vt(e,i),Nt(r,e,i,-1))}return Ko(),r=il(Error(O(421))),Ci(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Yf.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,lt=un(i.nextSibling),ot=t,ke=!0,jt=null,e!==null&&(pt[ft++]=Dt,pt[ft++]=Bt,pt[ft++]=Rn,Dt=e.id,Bt=e.overflow,Rn=t),t=Uo(t,r.children),t.flags|=4096,t)}function td(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ul(e.return,t,n)}function al(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function lc(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Ve(e,t,r.children,n),r=Se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&td(e,n,t);else if(e.tag===19)td(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(Se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),al(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}al(t,!0,n,null,l);break;case"together":al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Di(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ff(e,t,n){switch(t.tag){case 3:ic(t),or();break;case 5:Lu(t);break;case 1:Ze(t.type)&&ta(t);break;case 4:Ro(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(ia,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(Se,Se.current&1),t.flags|=128,null):n&t.child.childLanes?ac(e,t,n):(he(Se,Se.current&1),e=$t(e,t,n),e!==null?e.sibling:null);he(Se,Se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return lc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(Se,Se.current),r)break;return null;case 22:case 23:return t.lanes=0,nc(e,t,n)}return $t(e,t,n)}var oc,ql,sc,dc;oc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ql=function(){};sc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Tn(Rt.current);var l=null;switch(n){case"input":i=vl(e,i),r=vl(e,r),l=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),l=[];break;case"textarea":i=wl(e,i),r=wl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zi)}Sl(n,r);var o;n=null;for(x in i)if(!r.hasOwnProperty(x)&&i.hasOwnProperty(x)&&i[x]!=null)if(x==="style"){var u=i[x];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(Ur.hasOwnProperty(x)?l||(l=[]):(l=l||[]).push(x,null));for(x in r){var d=r[x];if(u=i!=null?i[x]:void 0,r.hasOwnProperty(x)&&d!==u&&(d!=null||u!=null))if(x==="style")if(u){for(o in u)!u.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in d)d.hasOwnProperty(o)&&u[o]!==d[o]&&(n||(n={}),n[o]=d[o])}else n||(l||(l=[]),l.push(x,n)),n=d;else x==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(l=l||[]).push(x,d)):x==="children"?typeof d!="string"&&typeof d!="number"||(l=l||[]).push(x,""+d):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(Ur.hasOwnProperty(x)?(d!=null&&x==="onScroll"&&be("scroll",e),l||u===d||(l=[])):(l=l||[]).push(x,d))}n&&(l=l||[]).push("style",n);var x=l;(t.updateQueue=x)&&(t.flags|=4)}};dc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nr(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Mf(e,t,n){var r=t.pendingProps;switch(zo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Ze(t.type)&&ea(),Be(t),null;case 3:return r=t.stateNode,dr(),we(Xe),we(Ue),Mo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Si(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,jt!==null&&(io(jt),jt=null))),ql(e,t),Be(t),null;case 5:Fo(t);var i=Tn(ei.current);if(n=t.type,e!==null&&t.stateNode!=null)sc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(O(166));return Be(t),null}if(e=Tn(Rt.current),Si(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Lt]=t,r[Xr]=l,e=(t.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<Pr.length;i++)be(Pr[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":us(r,l),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},be("invalid",r);break;case"textarea":ps(r,l),be("invalid",r)}Sl(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&ki(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&ki(r.textContent,u,e),i=["children",""+u]):Ur.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&be("scroll",r)}switch(n){case"input":gi(r),cs(r,l,!0);break;case"textarea":gi(r),fs(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Zi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ad(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Lt]=t,e[Xr]=r,oc(e,t,!1,!1),t.stateNode=e;e:{switch(o=jl(n,r),n){case"dialog":be("cancel",e),be("close",e),i=r;break;case"iframe":case"object":case"embed":be("load",e),i=r;break;case"video":case"audio":for(i=0;i<Pr.length;i++)be(Pr[i],e);i=r;break;case"source":be("error",e),i=r;break;case"img":case"image":case"link":be("error",e),be("load",e),i=r;break;case"details":be("toggle",e),i=r;break;case"input":us(e,r),i=vl(e,r),be("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),be("invalid",e);break;case"textarea":ps(e,r),i=wl(e,r),be("invalid",e);break;default:i=r}Sl(n,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var d=u[l];l==="style"?Bd(e,d):l==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Od(e,d)):l==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Wr(e,d):typeof d=="number"&&Wr(e,""+d):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ur.hasOwnProperty(l)?d!=null&&l==="onScroll"&&be("scroll",e):d!=null&&po(e,l,d,o))}switch(n){case"input":gi(e),cs(e,r,!1);break;case"textarea":gi(e),fs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Zn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Be(t),null;case 6:if(e&&t.stateNode!=null)dc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));if(n=Tn(ei.current),Tn(Rt.current),Si(t)){if(r=t.stateNode,n=t.memoizedProps,r[Lt]=t,(l=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:ki(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ki(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Lt]=t,t.stateNode=r}return Be(t),null;case 13:if(we(Se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&lt!==null&&t.mode&1&&!(t.flags&128))zu(),or(),t.flags|=98560,l=!1;else if(l=Si(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(O(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(O(317));l[Lt]=t}else or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Be(t),l=!1}else jt!==null&&(io(jt),jt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Se.current&1?Pe===0&&(Pe=3):Ko())),t.updateQueue!==null&&(t.flags|=4),Be(t),null);case 4:return dr(),ql(e,t),e===null&&qr(t.stateNode.containerInfo),Be(t),null;case 10:return Po(t.type._context),Be(t),null;case 17:return Ze(t.type)&&ea(),Be(t),null;case 19:if(we(Se),l=t.memoizedState,l===null)return Be(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Nr(l,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=oa(e),o!==null){for(t.flags|=128,Nr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(Se,Se.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ee()>cr&&(t.flags|=128,r=!0,Nr(l,!1),t.lanes=4194304)}else{if(!r)if(e=oa(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!ke)return Be(t),null}else 2*Ee()-l.renderingStartTime>cr&&n!==1073741824&&(t.flags|=128,r=!0,Nr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ee(),t.sibling=null,n=Se.current,he(Se,r?n&1|2:n&1),t):(Be(t),null);case 22:case 23:return Yo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?at&1073741824&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function Af(e,t){switch(zo(t),t.tag){case 1:return Ze(t.type)&&ea(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dr(),we(Xe),we(Ue),Mo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fo(t),null;case 13:if(we(Se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Se),null;case 4:return dr(),null;case 10:return Po(t.type._context),null;case 22:case 23:return Yo(),null;case 24:return null;default:return null}}var Ni=!1,He=!1,Of=typeof WeakSet=="function"?WeakSet:Set,J=null;function Jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(e,t,r)}else n.current=null}function Jl(e,t,n){try{n()}catch(r){Ne(e,t,r)}}var nd=!1;function Df(e,t){if(Rl=qi,e=gu(),Co(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,u=-1,d=-1,x=0,N=0,T=e,C=null;t:for(;;){for(var h;T!==n||i!==0&&T.nodeType!==3||(u=o+i),T!==l||r!==0&&T.nodeType!==3||(d=o+r),T.nodeType===3&&(o+=T.nodeValue.length),(h=T.firstChild)!==null;)C=T,T=h;for(;;){if(T===e)break t;if(C===n&&++x===i&&(u=o),C===l&&++N===r&&(d=o),(h=T.nextSibling)!==null)break;T=C,C=T.parentNode}T=h}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fl={focusedElem:e,selectionRange:n},qi=!1,J=t;J!==null;)if(t=J,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var M=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var D=M.memoizedProps,me=M.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?D:kt(t.type,D),me);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(A){Ne(t,t.return,A)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return M=nd,nd=!1,M}function Or(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Jl(t,n,l)}i=i.next}while(i!==r)}}function ja(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uc(e){var t=e.alternate;t!==null&&(e.alternate=null,uc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Lt],delete t[Xr],delete t[Ol],delete t[wf],delete t[kf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cc(e){return e.tag===5||e.tag===3||e.tag===4}function rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zi));else if(r!==4&&(e=e.child,e!==null))for(Zl(e,t,n),e=e.sibling;e!==null;)Zl(e,t,n),e=e.sibling}function eo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(eo(e,t,n),e=e.sibling;e!==null;)eo(e,t,n),e=e.sibling}var Me=null,St=!1;function Xt(e,t,n){for(n=n.child;n!==null;)pc(e,t,n),n=n.sibling}function pc(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(ha,n)}catch{}switch(n.tag){case 5:He||Jn(n,t);case 6:var r=Me,i=St;Me=null,Xt(e,t,n),Me=r,St=i,Me!==null&&(St?(e=Me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(St?(e=Me,n=n.stateNode,e.nodeType===8?Xa(e.parentNode,n):e.nodeType===1&&Xa(e,n),Yr(e)):Xa(Me,n.stateNode));break;case 4:r=Me,i=St,Me=n.stateNode.containerInfo,St=!0,Xt(e,t,n),Me=r,St=i;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Jl(n,t,o),i=i.next}while(i!==r)}Xt(e,t,n);break;case 1:if(!He&&(Jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Ne(n,t,u)}Xt(e,t,n);break;case 21:Xt(e,t,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,Xt(e,t,n),He=r):Xt(e,t,n);break;default:Xt(e,t,n)}}function id(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Of),t.forEach(function(r){var i=Kf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function bt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:Me=u.stateNode,St=!1;break e;case 3:Me=u.stateNode.containerInfo,St=!0;break e;case 4:Me=u.stateNode.containerInfo,St=!0;break e}u=u.return}if(Me===null)throw Error(O(160));pc(l,o,i),Me=null,St=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(x){Ne(i,t,x)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fc(t,e),t=t.sibling}function fc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),It(e),r&4){try{Or(3,e,e.return),ja(3,e)}catch(D){Ne(e,e.return,D)}try{Or(5,e,e.return)}catch(D){Ne(e,e.return,D)}}break;case 1:bt(t,e),It(e),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(bt(t,e),It(e),r&512&&n!==null&&Jn(n,n.return),e.flags&32){var i=e.stateNode;try{Wr(i,"")}catch(D){Ne(e,e.return,D)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&Fd(i,l),jl(u,o);var x=jl(u,l);for(o=0;o<d.length;o+=2){var N=d[o],T=d[o+1];N==="style"?Bd(i,T):N==="dangerouslySetInnerHTML"?Od(i,T):N==="children"?Wr(i,T):po(i,N,T,x)}switch(u){case"input":yl(i,l);break;case"textarea":Md(i,l);break;case"select":var C=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var h=l.value;h!=null?Zn(i,!!l.multiple,h,!1):C!==!!l.multiple&&(l.defaultValue!=null?Zn(i,!!l.multiple,l.defaultValue,!0):Zn(i,!!l.multiple,l.multiple?[]:"",!1))}i[Xr]=l}catch(D){Ne(e,e.return,D)}}break;case 6:if(bt(t,e),It(e),r&4){if(e.stateNode===null)throw Error(O(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(D){Ne(e,e.return,D)}}break;case 3:if(bt(t,e),It(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(D){Ne(e,e.return,D)}break;case 4:bt(t,e),It(e);break;case 13:bt(t,e),It(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||($o=Ee())),r&4&&id(e);break;case 22:if(N=n!==null&&n.memoizedState!==null,e.mode&1?(He=(x=He)||N,bt(t,e),He=x):bt(t,e),It(e),r&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!N&&e.mode&1)for(J=e,N=e.child;N!==null;){for(T=J=N;J!==null;){switch(C=J,h=C.child,C.tag){case 0:case 11:case 14:case 15:Or(4,C,C.return);break;case 1:Jn(C,C.return);var M=C.stateNode;if(typeof M.componentWillUnmount=="function"){r=C,n=C.return;try{t=r,M.props=t.memoizedProps,M.state=t.memoizedState,M.componentWillUnmount()}catch(D){Ne(r,n,D)}}break;case 5:Jn(C,C.return);break;case 22:if(C.memoizedState!==null){ld(T);continue}}h!==null?(h.return=C,J=h):ld(T)}N=N.sibling}e:for(N=null,T=e;;){if(T.tag===5){if(N===null){N=T;try{i=T.stateNode,x?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=T.stateNode,d=T.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=Dd("display",o))}catch(D){Ne(e,e.return,D)}}}else if(T.tag===6){if(N===null)try{T.stateNode.nodeValue=x?"":T.memoizedProps}catch(D){Ne(e,e.return,D)}}else if((T.tag!==22&&T.tag!==23||T.memoizedState===null||T===e)&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===e)break e;for(;T.sibling===null;){if(T.return===null||T.return===e)break e;N===T&&(N=null),T=T.return}N===T&&(N=null),T.sibling.return=T.return,T=T.sibling}}break;case 19:bt(t,e),It(e),r&4&&id(e);break;case 21:break;default:bt(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cc(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wr(i,""),r.flags&=-33);var l=rd(e);eo(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=rd(e);Zl(e,u,o);break;default:throw Error(O(161))}}catch(d){Ne(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bf(e,t,n){J=e,gc(e)}function gc(e,t,n){for(var r=(e.mode&1)!==0;J!==null;){var i=J,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ni;if(!o){var u=i.alternate,d=u!==null&&u.memoizedState!==null||He;u=Ni;var x=He;if(Ni=o,(He=d)&&!x)for(J=i;J!==null;)o=J,d=o.child,o.tag===22&&o.memoizedState!==null?od(i):d!==null?(d.return=o,J=d):od(i);for(;l!==null;)J=l,gc(l),l=l.sibling;J=i,Ni=u,He=x}ad(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,J=l):ad(e)}}function ad(e){for(;J!==null;){var t=J;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:He||ja(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!He)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ws(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ws(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var x=t.alternate;if(x!==null){var N=x.memoizedState;if(N!==null){var T=N.dehydrated;T!==null&&Yr(T)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}He||t.flags&512&&Xl(t)}catch(C){Ne(t,t.return,C)}}if(t===e){J=null;break}if(n=t.sibling,n!==null){n.return=t.return,J=n;break}J=t.return}}function ld(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var n=t.sibling;if(n!==null){n.return=t.return,J=n;break}J=t.return}}function od(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ja(4,t)}catch(d){Ne(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){Ne(t,i,d)}}var l=t.return;try{Xl(t)}catch(d){Ne(t,l,d)}break;case 5:var o=t.return;try{Xl(t)}catch(d){Ne(t,o,d)}}}catch(d){Ne(t,t.return,d)}if(t===e){J=null;break}var u=t.sibling;if(u!==null){u.return=t.return,J=u;break}J=t.return}}var Hf=Math.ceil,ua=Qt.ReactCurrentDispatcher,Wo=Qt.ReactCurrentOwner,mt=Qt.ReactCurrentBatchConfig,pe=0,Re=null,Ie=null,Ae=0,at=0,Xn=vn(0),Pe=0,ii=null,Mn=0,Ca=0,Vo=0,Dr=null,qe=null,$o=0,cr=1/0,At=null,ca=!1,to=null,pn=null,zi=!1,ln=null,pa=0,Br=0,no=null,Bi=-1,Hi=0;function $e(){return pe&6?Ee():Bi!==-1?Bi:Bi=Ee()}function fn(e){return e.mode&1?pe&2&&Ae!==0?Ae&-Ae:jf.transition!==null?(Hi===0&&(Hi=Xd()),Hi):(e=fe,e!==0||(e=window.event,e=e===void 0?16:au(e.type)),e):1}function Nt(e,t,n,r){if(50<Br)throw Br=0,no=null,Error(O(185));li(e,n,r),(!(pe&2)||e!==Re)&&(e===Re&&(!(pe&2)&&(Ca|=n),Pe===4&&rn(e,Ae)),et(e,r),n===1&&pe===0&&!(t.mode&1)&&(cr=Ee()+500,wa&&yn()))}function et(e,t){var n=e.callbackNode;S0(e,t);var r=Gi(e,e===Re?Ae:0);if(r===0)n!==null&&hs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hs(n),t===1)e.tag===0?Sf(sd.bind(null,e)):ju(sd.bind(null,e)),yf(function(){!(pe&6)&&yn()}),n=null;else{switch(Zd(r)){case 1:n=xo;break;case 4:n=qd;break;case 16:n=Ki;break;case 536870912:n=Jd;break;default:n=Ki}n=kc(n,mc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mc(e,t){if(Bi=-1,Hi=0,pe&6)throw Error(O(327));var n=e.callbackNode;if(ir()&&e.callbackNode!==n)return null;var r=Gi(e,e===Re?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fa(e,r);else{t=r;var i=pe;pe|=2;var l=xc();(Re!==e||Ae!==t)&&(At=null,cr=Ee()+500,Pn(e,t));do try{Vf();break}catch(u){hc(e,u)}while(!0);To(),ua.current=l,pe=i,Ie!==null?t=0:(Re=null,Ae=0,t=Pe)}if(t!==0){if(t===2&&(i=Il(e),i!==0&&(r=i,t=ro(e,i))),t===1)throw n=ii,Pn(e,0),rn(e,r),et(e,Ee()),n;if(t===6)rn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Uf(i)&&(t=fa(e,r),t===2&&(l=Il(e),l!==0&&(r=l,t=ro(e,l))),t===1))throw n=ii,Pn(e,0),rn(e,r),et(e,Ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(O(345));case 2:zn(e,qe,At);break;case 3:if(rn(e,r),(r&130023424)===r&&(t=$o+500-Ee(),10<t)){if(Gi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Al(zn.bind(null,e,qe,At),t);break}zn(e,qe,At);break;case 4:if(rn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ct(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hf(r/1960))-r,10<r){e.timeoutHandle=Al(zn.bind(null,e,qe,At),r);break}zn(e,qe,At);break;case 5:zn(e,qe,At);break;default:throw Error(O(329))}}}return et(e,Ee()),e.callbackNode===n?mc.bind(null,e):null}function ro(e,t){var n=Dr;return e.current.memoizedState.isDehydrated&&(Pn(e,t).flags|=256),e=fa(e,t),e!==2&&(t=qe,qe=n,t!==null&&io(t)),e}function io(e){qe===null?qe=e:qe.push.apply(qe,e)}function Uf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!zt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rn(e,t){for(t&=~Vo,t&=~Ca,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ct(t),r=1<<n;e[n]=-1,t&=~r}}function sd(e){if(pe&6)throw Error(O(327));ir();var t=Gi(e,0);if(!(t&1))return et(e,Ee()),null;var n=fa(e,t);if(e.tag!==0&&n===2){var r=Il(e);r!==0&&(t=r,n=ro(e,r))}if(n===1)throw n=ii,Pn(e,0),rn(e,t),et(e,Ee()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zn(e,qe,At),et(e,Ee()),null}function Qo(e,t){var n=pe;pe|=1;try{return e(t)}finally{pe=n,pe===0&&(cr=Ee()+500,wa&&yn())}}function An(e){ln!==null&&ln.tag===0&&!(pe&6)&&ir();var t=pe;pe|=1;var n=mt.transition,r=fe;try{if(mt.transition=null,fe=1,e)return e()}finally{fe=r,mt.transition=n,pe=t,!(pe&6)&&yn()}}function Yo(){at=Xn.current,we(Xn)}function Pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vf(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(zo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ea();break;case 3:dr(),we(Xe),we(Ue),Mo();break;case 5:Fo(r);break;case 4:dr();break;case 13:we(Se);break;case 19:we(Se);break;case 10:Po(r.type._context);break;case 22:case 23:Yo()}n=n.return}if(Re=e,Ie=e=gn(e.current,null),Ae=at=t,Pe=0,ii=null,Vo=Ca=Mn=0,qe=Dr=null,In!==null){for(t=0;t<In.length;t++)if(n=In[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}In=null}return e}function hc(e,t){do{var n=Ie;try{if(To(),Ai.current=da,sa){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}sa=!1}if(Fn=0,_e=Te=je=null,Ar=!1,ti=0,Wo.current=null,n===null||n.return===null){Pe=1,ii=t,Ie=null;break}e:{var l=e,o=n.return,u=n,d=t;if(t=Ae,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var x=d,N=u,T=N.tag;if(!(N.mode&1)&&(T===0||T===11||T===15)){var C=N.alternate;C?(N.updateQueue=C.updateQueue,N.memoizedState=C.memoizedState,N.lanes=C.lanes):(N.updateQueue=null,N.memoizedState=null)}var h=Gs(o);if(h!==null){h.flags&=-257,qs(h,o,u,l,t),h.mode&1&&Ks(l,x,t),t=h,d=x;var M=t.updateQueue;if(M===null){var D=new Set;D.add(d),t.updateQueue=D}else M.add(d);break e}else{if(!(t&1)){Ks(l,x,t),Ko();break e}d=Error(O(426))}}else if(ke&&u.mode&1){var me=Gs(o);if(me!==null){!(me.flags&65536)&&(me.flags|=256),qs(me,o,u,l,t),Eo(ur(d,u));break e}}l=d=ur(d,u),Pe!==4&&(Pe=2),Dr===null?Dr=[l]:Dr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var v=Zu(l,d,t);Us(l,v);break e;case 1:u=d;var m=l.type,b=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(pn===null||!pn.has(b)))){l.flags|=65536,t&=-t,l.lanes|=t;var A=ec(l,u,t);Us(l,A);break e}}l=l.return}while(l!==null)}yc(n)}catch(K){t=K,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(!0)}function xc(){var e=ua.current;return ua.current=da,e===null?da:e}function Ko(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Re===null||!(Mn&268435455)&&!(Ca&268435455)||rn(Re,Ae)}function fa(e,t){var n=pe;pe|=2;var r=xc();(Re!==e||Ae!==t)&&(At=null,Pn(e,t));do try{Wf();break}catch(i){hc(e,i)}while(!0);if(To(),pe=n,ua.current=r,Ie!==null)throw Error(O(261));return Re=null,Ae=0,Pe}function Wf(){for(;Ie!==null;)vc(Ie)}function Vf(){for(;Ie!==null&&!g0();)vc(Ie)}function vc(e){var t=wc(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?yc(e):Ie=t,Wo.current=null}function yc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Af(n,t),n!==null){n.flags&=32767,Ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Ie=null;return}}else if(n=Mf(n,t,at),n!==null){Ie=n;return}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Pe===0&&(Pe=5)}function zn(e,t,n){var r=fe,i=mt.transition;try{mt.transition=null,fe=1,$f(e,t,n,r)}finally{mt.transition=i,fe=r}return null}function $f(e,t,n,r){do ir();while(ln!==null);if(pe&6)throw Error(O(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(j0(e,l),e===Re&&(Ie=Re=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zi||(zi=!0,kc(Ki,function(){return ir(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=mt.transition,mt.transition=null;var o=fe;fe=1;var u=pe;pe|=4,Wo.current=null,Df(e,n),fc(n,e),cf(Fl),qi=!!Rl,Fl=Rl=null,e.current=n,Bf(n),m0(),pe=u,fe=o,mt.transition=l}else e.current=n;if(zi&&(zi=!1,ln=e,pa=i),l=e.pendingLanes,l===0&&(pn=null),v0(n.stateNode),et(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ca)throw ca=!1,e=to,to=null,e;return pa&1&&e.tag!==0&&ir(),l=e.pendingLanes,l&1?e===no?Br++:(Br=0,no=e):Br=0,yn(),null}function ir(){if(ln!==null){var e=Zd(pa),t=mt.transition,n=fe;try{if(mt.transition=null,fe=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,pa=0,pe&6)throw Error(O(331));var i=pe;for(pe|=4,J=e.current;J!==null;){var l=J,o=l.child;if(J.flags&16){var u=l.deletions;if(u!==null){for(var d=0;d<u.length;d++){var x=u[d];for(J=x;J!==null;){var N=J;switch(N.tag){case 0:case 11:case 15:Or(8,N,l)}var T=N.child;if(T!==null)T.return=N,J=T;else for(;J!==null;){N=J;var C=N.sibling,h=N.return;if(uc(N),N===x){J=null;break}if(C!==null){C.return=h,J=C;break}J=h}}}var M=l.alternate;if(M!==null){var D=M.child;if(D!==null){M.child=null;do{var me=D.sibling;D.sibling=null,D=me}while(D!==null)}}J=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,J=o;else e:for(;J!==null;){if(l=J,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Or(9,l,l.return)}var v=l.sibling;if(v!==null){v.return=l.return,J=v;break e}J=l.return}}var m=e.current;for(J=m;J!==null;){o=J;var b=o.child;if(o.subtreeFlags&2064&&b!==null)b.return=o,J=b;else e:for(o=m;J!==null;){if(u=J,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:ja(9,u)}}catch(K){Ne(u,u.return,K)}if(u===o){J=null;break e}var A=u.sibling;if(A!==null){A.return=u.return,J=A;break e}J=u.return}}if(pe=i,yn(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(ha,e)}catch{}r=!0}return r}finally{fe=n,mt.transition=t}}return!1}function dd(e,t,n){t=ur(n,t),t=Zu(e,t,1),e=cn(e,t,1),t=$e(),e!==null&&(li(e,1,t),et(e,t))}function Ne(e,t,n){if(e.tag===3)dd(e,e,n);else for(;t!==null;){if(t.tag===3){dd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=ur(n,e),e=ec(t,e,1),t=cn(t,e,1),e=$e(),t!==null&&(li(t,1,e),et(t,e));break}}t=t.return}}function Qf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Ae&n)===n&&(Pe===4||Pe===3&&(Ae&130023424)===Ae&&500>Ee()-$o?Pn(e,0):Vo|=n),et(e,t)}function bc(e,t){t===0&&(e.mode&1?(t=xi,xi<<=1,!(xi&130023424)&&(xi=4194304)):t=1);var n=$e();e=Vt(e,t),e!==null&&(li(e,t,n),et(e,n))}function Yf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bc(e,n)}function Kf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(t),bc(e,n)}var wc;wc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)Je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Je=!1,Ff(e,t,n);Je=!!(e.flags&131072)}else Je=!1,ke&&t.flags&1048576&&Cu(t,ra,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Di(e,t),e=t.pendingProps;var i=lr(t,Ue.current);rr(t,n),i=Oo(null,t,r,e,i,n);var l=Do();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(r)?(l=!0,ta(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_o(t),i.updater=Sa,t.stateNode=i,i._reactInternals=t,Vl(t,r,e,n),t=Yl(null,t,r,!0,l,n)):(t.tag=0,ke&&l&&No(t),Ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Di(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=qf(r),e=kt(r,e),i){case 0:t=Ql(null,t,r,e,n);break e;case 1:t=Zs(null,t,r,e,n);break e;case 11:t=Js(null,t,r,e,n);break e;case 14:t=Xs(null,t,r,kt(r.type,e),n);break e}throw Error(O(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Ql(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Zs(e,t,r,i,n);case 3:e:{if(ic(t),e===null)throw Error(O(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Pu(e,t),la(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=ur(Error(O(423)),t),t=ed(e,t,r,n,i);break e}else if(r!==i){i=ur(Error(O(424)),t),t=ed(e,t,r,n,i);break e}else for(lt=un(t.stateNode.containerInfo.firstChild),ot=t,ke=!0,jt=null,n=Iu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(or(),r===i){t=$t(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return Lu(t),e===null&&Hl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Ml(r,i)?o=null:l!==null&&Ml(r,l)&&(t.flags|=32),rc(e,t),Ve(e,t,o,n),t.child;case 6:return e===null&&Hl(t),null;case 13:return ac(e,t,n);case 4:return Ro(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=sr(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Js(e,t,r,i,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,he(ia,r._currentValue),r._currentValue=o,l!==null)if(zt(l.value,o)){if(l.children===i.children&&!Xe.current){t=$t(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(l.tag===1){d=Ht(-1,n&-n),d.tag=2;var x=l.updateQueue;if(x!==null){x=x.shared;var N=x.pending;N===null?d.next=d:(d.next=N.next,N.next=d),x.pending=d}}l.lanes|=n,d=l.alternate,d!==null&&(d.lanes|=n),Ul(l.return,n,t),u.lanes|=n;break}d=d.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(O(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ul(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,rr(t,n),i=ht(i),r=r(i),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,i=kt(r,t.pendingProps),i=kt(r.type,i),Xs(e,t,r,i,n);case 15:return tc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Di(e,t),t.tag=1,Ze(r)?(e=!0,ta(t)):e=!1,rr(t,n),Xu(t,r,i),Vl(t,r,i,n),Yl(null,t,r,!0,e,n);case 19:return lc(e,t,n);case 22:return nc(e,t,n)}throw Error(O(156,t.tag))};function kc(e,t){return Gd(e,t)}function Gf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,r){return new Gf(e,t,n,r)}function Go(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qf(e){if(typeof e=="function")return Go(e)?1:0;if(e!=null){if(e=e.$$typeof,e===go)return 11;if(e===mo)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ui(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")Go(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Un:return Ln(n.children,i,l,t);case fo:o=8,i|=8;break;case gl:return e=gt(12,n,t,i|2),e.elementType=gl,e.lanes=l,e;case ml:return e=gt(13,n,t,i),e.elementType=ml,e.lanes=l,e;case hl:return e=gt(19,n,t,i),e.elementType=hl,e.lanes=l,e;case Ld:return Na(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Td:o=10;break e;case Pd:o=9;break e;case go:o=11;break e;case mo:o=14;break e;case en:o=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=gt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Ln(e,t,n,r){return e=gt(7,e,r,t),e.lanes=n,e}function Na(e,t,n,r){return e=gt(22,e,r,t),e.elementType=Ld,e.lanes=n,e.stateNode={isHidden:!1},e}function ll(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function ol(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ha(0),this.expirationTimes=Ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ha(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qo(e,t,n,r,i,l,o,u,d){return e=new Jf(e,t,n,u,d),t===1?(t=1,l===!0&&(t|=8)):t=0,l=gt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_o(l),e}function Xf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sc(e){if(!e)return hn;e=e._reactInternals;e:{if(Dn(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(Ze(n))return Su(e,n,t)}return t}function jc(e,t,n,r,i,l,o,u,d){return e=qo(n,r,!0,e,i,l,o,u,d),e.context=Sc(null),n=e.current,r=$e(),i=fn(n),l=Ht(r,i),l.callback=t??null,cn(n,l,i),e.current.lanes=i,li(e,i,r),et(e,r),e}function za(e,t,n,r){var i=t.current,l=$e(),o=fn(i);return n=Sc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ht(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=cn(i,t,o),e!==null&&(Nt(e,i,o,l),Mi(e,i,o)),o}function ga(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ud(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jo(e,t){ud(e,t),(e=e.alternate)&&ud(e,t)}function Zf(){return null}var Cc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xo(e){this._internalRoot=e}Ea.prototype.render=Xo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));za(e,t,null,null)};Ea.prototype.unmount=Xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;An(function(){za(null,e,null,null)}),t[Wt]=null}};function Ea(e){this._internalRoot=e}Ea.prototype.unstable_scheduleHydration=function(e){if(e){var t=nu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nn.length&&t!==0&&t<nn[n].priority;n++);nn.splice(n,0,e),n===0&&iu(e)}};function Zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cd(){}function eg(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var x=ga(o);l.call(x)}}var o=jc(t,r,e,0,null,!1,!1,"",cd);return e._reactRootContainer=o,e[Wt]=o.current,qr(e.nodeType===8?e.parentNode:e),An(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var x=ga(d);u.call(x)}}var d=qo(e,0,!1,null,null,!1,!1,"",cd);return e._reactRootContainer=d,e[Wt]=d.current,qr(e.nodeType===8?e.parentNode:e),An(function(){za(t,d,n,r)}),d}function Ta(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var d=ga(o);u.call(d)}}za(t,o,e,i)}else o=eg(n,t,e,i,r);return ga(o)}eu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tr(t.pendingLanes);n!==0&&(vo(t,n|1),et(t,Ee()),!(pe&6)&&(cr=Ee()+500,yn()))}break;case 13:An(function(){var r=Vt(e,1);if(r!==null){var i=$e();Nt(r,e,1,i)}}),Jo(e,1)}};yo=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var n=$e();Nt(t,e,134217728,n)}Jo(e,134217728)}};tu=function(e){if(e.tag===13){var t=fn(e),n=Vt(e,t);if(n!==null){var r=$e();Nt(n,e,t,r)}Jo(e,t)}};nu=function(){return fe};ru=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};Nl=function(e,t,n){switch(t){case"input":if(yl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ba(r);if(!i)throw Error(O(90));Rd(r),yl(r,i)}}}break;case"textarea":Md(e,n);break;case"select":t=n.value,t!=null&&Zn(e,!!n.multiple,t,!1)}};Wd=Qo;Vd=An;var tg={usingClientEntryPoint:!1,Events:[si,Qn,ba,Hd,Ud,Qo]},zr={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ng={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yd(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||Zf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ei.isDisabled&&Ei.supportsFiber)try{ha=Ei.inject(ng),_t=Ei}catch{}}dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tg;dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zo(t))throw Error(O(200));return Xf(e,t,null,n)};dt.createRoot=function(e,t){if(!Zo(e))throw Error(O(299));var n=!1,r="",i=Cc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=qo(e,1,!1,null,null,n,!1,r,i),e[Wt]=t.current,qr(e.nodeType===8?e.parentNode:e),new Xo(t)};dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=Yd(t),e=e===null?null:e.stateNode,e};dt.flushSync=function(e){return An(e)};dt.hydrate=function(e,t,n){if(!Ia(t))throw Error(O(200));return Ta(null,e,t,!0,n)};dt.hydrateRoot=function(e,t,n){if(!Zo(e))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=Cc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=jc(t,null,e,1,n??null,i,!1,l,o),e[Wt]=t.current,qr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ea(t)};dt.render=function(e,t,n){if(!Ia(t))throw Error(O(200));return Ta(null,e,t,!1,n)};dt.unmountComponentAtNode=function(e){if(!Ia(e))throw Error(O(40));return e._reactRootContainer?(An(function(){Ta(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1};dt.unstable_batchedUpdates=Qo;dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ia(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return Ta(e,t,n,!1,r)};dt.version="18.3.1-next-f1338f8080-20240426";function Nc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nc)}catch(e){console.error(e)}}Nc(),Nd.exports=dt;var rg=Nd.exports,pd=rg;pl.createRoot=pd.createRoot,pl.hydrateRoot=pd.hydrateRoot;const ig=`
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
`;function ag(){const e=document.getElementById("esc-global-styles");e&&e.remove();const t=document.createElement("style");t.id="esc-global-styles",t.textContent=ig,document.head.appendChild(t)}ag();const lg={apiKey:"AIzaSyBH4kCFQRjnBbd4cJDDuGSxJbRQAnUQWHw",authDomain:"esc-connect-7bdfe.firebaseapp.com",databaseURL:"https://esc-connect-7bdfe-default-rtdb.europe-west1.firebasedatabase.app",projectId:"esc-connect-7bdfe",storageBucket:"esc-connect-7bdfe.firebasestorage.app",messagingSenderId:"432112365589",appId:"1:432112365589:web:9af0cdb510f2380935de1c"},sl={"johnlp1350@gmail.com":{id:"j3",isAdmin:!0},"stahmeln05@gmail.com":{id:"j2",isAdmin:!1},"lucioosy@gmail.com":{id:"j4",isAdmin:!1},"br0k3n.f41ry@gmail.com":{id:"j1",isAdmin:!1}},Wi=[["af","Afghanistan"],["al","Albania"],["am","Armenia"],["au","Australia"],["at","Austria"],["az","Azerbaijan"],["bh","Bahrain"],["bd","Bangladesh"],["by","Belarus"],["be","Belgium"],["bt","Bhutan"],["ba","Bosnia and Herzegovina"],["bn","Brunei"],["bg","Bulgaria"],["kh","Cambodia"],["ca","Canada"],["cn","China"],["hr","Croatia"],["cy","Cyprus"],["cz","Czechia"],["dk","Denmark"],["ee","Estonia"],["fi","Finland"],["fr","France"],["ge","Georgia"],["de","Germany"],["gr","Greece"],["hk","Hong Kong"],["hu","Hungary"],["is","Iceland"],["in","India"],["id","Indonesia"],["ir","Iran"],["iq","Iraq"],["ie","Ireland"],["il","Israel"],["it","Italy"],["jp","Japan"],["jo","Jordan"],["kz","Kazakhstan"],["kw","Kuwait"],["kg","Kyrgyzstan"],["la","Laos"],["lb","Lebanon"],["lv","Latvia"],["lt","Lithuania"],["lu","Luxembourg"],["mo","Macau"],["my","Malaysia"],["mv","Maldives"],["mt","Malta"],["md","Moldova"],["mc","Monaco"],["mn","Mongolia"],["me","Montenegro"],["ma","Morocco"],["mm","Myanmar"],["np","Nepal"],["nl","Netherlands"],["nz","New Zealand"],["kp","North Korea"],["mk","North Macedonia"],["no","Norway"],["om","Oman"],["pk","Pakistan"],["ps","Palestine"],["ph","Philippines"],["pl","Poland"],["pt","Portugal"],["qa","Qatar"],["ro","Romania"],["ru","Russia"],["sa","Saudi Arabia"],["sm","San Marino"],["rs","Serbia"],["sg","Singapore"],["sk","Slovakia"],["si","Slovenia"],["kr","South Korea"],["es","Spain"],["lk","Sri Lanka"],["se","Sweden"],["ch","Switzerland"],["sy","Syria"],["tw","Taiwan"],["tj","Tajikistan"],["th","Thailand"],["tr","Türkiye"],["tm","Turkmenistan"],["ua","Ukraine"],["ae","United Arab Emirates"],["gb","United Kingdom"],["uz","Uzbekistan"],["vn","Vietnam"],["ye","Yemen"]],it={};for(let e=0;e<Wi.length;e++)it[Wi[e][0]]=Wi[e][1];const og={af:"AFG",al:"ALB",am:"ARM",au:"AUS",at:"AUT",az:"AZE",bh:"BHR",bd:"BGD",by:"BLR",be:"BEL",bt:"BTN",ba:"BIH",bn:"BRN",bg:"BGR",kh:"KHM",ca:"CAN",cn:"CHN",hr:"CRO",cy:"CYP",cz:"CZE",dk:"DNK",ee:"EST",fi:"FIN",fr:"FRA",ge:"GEO",de:"GER",gr:"GRE",hk:"HKG",hu:"HUN",is:"ISL",in:"IND",id:"IDN",ir:"IRN",iq:"IRQ",ie:"IRL",il:"ISR",it:"ITA",jp:"JPN",jo:"JOR",kz:"KAZ",kw:"KWT",kg:"KGZ",la:"LAO",lb:"LBN",lv:"LVA",lt:"LTU",lu:"LUX",mo:"MAC",my:"MYS",mv:"MDV",mt:"MLT",md:"MDA",mc:"MCO",mn:"MNG",me:"MNE",ma:"MAR",mm:"MMR",np:"NPL",nl:"NED",nz:"NZL",kp:"PRK",mk:"MKD",no:"NOR",om:"OMN",pk:"PAK",ps:"PSE",ph:"PHL",pl:"POL",pt:"POR",qa:"QAT",ro:"ROU",ru:"RUS",sa:"SAU",sm:"SMR",rs:"SRB",sg:"SGP",sk:"SVK",si:"SVN",kr:"KOR",es:"ESP",lk:"LKA",se:"SWE",ch:"SUI",sy:"SYR",tw:"TWN",tj:"TJK",th:"THA",tr:"TUR",tm:"TKM",ua:"UKR",ae:"ARE",gb:"GBR",uz:"UZB",vn:"VNM",ye:"YEM"},Ii={sf1:"Semi-final 1",sf2:"Semi-final 2",final:"Grand Final"},fd={sf1:15,sf2:15,final:26},Zt="esc-scoreboard-v2",dl="esc-me",zc=`
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
`;if(typeof document<"u"&&!document.getElementById("battle-table-css")){const e=document.createElement("style");e.id="battle-table-css",e.textContent=zc,document.head.appendChild(e)}const Ti=e=>e?og[e.toLowerCase()]||e.toUpperCase():"",ee=e=>String(e||""),Hr=e=>+String(e).split("-").pop(),Tt=({cc:e})=>a.jsx("img",{className:"flag","data-cc":e,src:`https://flagcdn.com/w40/${e}.png`,srcSet:`https://flagcdn.com/w40/${e}.png 1x, https://flagcdn.com/w80/${e}.png 2x`,width:"22",height:"15",alt:e.toUpperCase(),loading:"lazy",decoding:"async",onError:t=>{const n=t.target;if(!n.dataset.s){n.dataset.s=1,n.removeAttribute("srcset"),n.src=`https://flagcdn.com/w40/${e}.png`;return}const r=document.createElement("span");r.textContent=e.toUpperCase().split("").map(i=>String.fromCodePoint(127397+i.charCodeAt(0))).join("")+" ",n.replaceWith(r)}}),wt=e=>{if(Number(e)===12)return"background:linear-gradient(160deg, #d8b4fe 0%, #a855f7 30%, #6b21a8 80%, #3b0764 100%);color:#ffffff;text-shadow:0 1px 3px rgba(0,0,0,0.9), 0 0 14px rgba(216,180,254,0.7);border:1.5px solid #f3e8ff;box-shadow:0 0 20px rgba(168,85,247,0.6), 0 4px 12px rgba(59,7,100,0.6), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -2px 5px rgba(0,0,0,0.5);";if(Number(e)===10)return"background:linear-gradient(160deg, #ffecb3 0%, #ffd166 50%, #f5b93a 100%);color:#4a2f00;text-shadow:0 1px 0 rgba(255,255,255,0.6);border:1.5px solid #fff4c9;box-shadow:0 0 18px rgba(255,209,102,0.55), 0 3px 10px rgba(180,120,0,0.35), inset 0 1.5px 0 rgba(255,255,255,0.7), inset 0 -2px 5px rgba(150,90,0,0.35);";const t={1:"#e63a2e",2:"#ea6b5f",3:"#ef9b93",4:"#f5c9c5",5:"#f5f5f5",6:"#c9e6d2",7:"#9fd6b1",8:"#71c48d",9:"#47b265"},n={1:"#9b1e15",2:"#b84236",3:"#c96660",4:"#d9a4a0",5:"#c9c9c9",6:"#8ebfa1",7:"#6cae83",8:"#449d66",9:"#2a824a"},r={1:"#b72b1f",2:"#c94a3d",3:"#d6726a",4:"#dc9f9a",5:"#b0b0b0",6:"#95c7a6",7:"#79b98e",8:"#5aa374",9:"#3c9058"},i=t[e]||"#f5f5f5",l=n[e]||"#c9c9c9",o=r[e]||"#b0b0b0",u=e>=6?"#0a2e14":"#1d1d1d";return`background: linear-gradient(160deg, ${i} 0%, ${l} 100%);color: ${u};text-shadow: 0 1px 2px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.2), 0 -1px 0 rgba(255,255,255,0.4);border: 1.5px solid ${o};box-shadow: 0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -3px 6px rgba(0,0,0,0.3);`},es=()=>({jury:[{id:"j1",name:"Livin"},{id:"j2",name:"Tabi"},{id:"j3",name:"Poki"},{id:"j4",name:"Kiri"}],songs:[],years:[],ratings:{},pred:{},qualPred:{},liveState:{},battleHidden:!1,autoHardReset:!1,livePredictionMode:!1}),sg=()=>{try{const e=JSON.parse(localStorage.getItem(Zt));if(e&&e.jury)return e.qualPred=e.qualPred||{},e.liveState=e.liveState||{},e}catch{}return es()},Ec=e=>e.sort((t,n)=>{const r=t.customNo!==void 0&&t.customNo!==null&&t.customNo!==""?parseFloat(t.customNo):Hr(t.id),i=n.customNo!==void 0&&n.customNo!==null&&n.customNo!==""?parseFloat(n.customNo):Hr(n.id);return!isNaN(r)&&!isNaN(i)?r-i:String(r).localeCompare(String(i))}),gd=e=>{const t={jury:{},songs:{},years:{},ratings:e.ratings,pred:e.pred,qualPred:e.qualPred,liveState:e.liveState,battleHidden:e.battleHidden||!1,autoHardReset:e.autoHardReset||!1,livePredictionMode:e.livePredictionMode||!1};for(let n=0;n<e.jury.length;n++)t.jury[e.jury[n].id]={name:e.jury[n].name};for(let n=0;n<e.songs.length;n++){const r=e.songs[n];t.songs[r.id]={cc:r.cc,artist:r.artist,title:r.title,year:r.year}}for(let n=0;n<e.years.length;n++){const r=e.years[n],i={year:r.year,suffix:r.suffix,city:r.city,hostCc:r.hostCc,splitAfter:r.splitAfter,showDates:r.showDates,shows:{}};for(const l in r.shows){i.shows[l]={};const o=r.shows[l];for(let u=0;u<o.length;u++){const d=o[u];i.shows[l][d.id]={n:d.customNo,songId:d.songId,place:d.place,dq:d.dq,autoFinal:d.autoFinal}}}t.years[r.id]=i}return t},Vi=(e,t,n)=>{t=t||"",n=n||{};for(const r in e){const i=e[r],l=t?t+"/"+r:r;i&&typeof i=="object"?Vi(i,l,n):i!=null&&i!==""&&(n[l]=i)}return n},dg=e=>{const t=es(),n=e.jury||{};for(let l=0;l<t.jury.length;l++)n[t.jury[l].id]&&n[t.jury[l].id].name&&(t.jury[l].name=n[t.jury[l].id].name);t.songs=[];const r=e.songs||{};for(const l in r)r.hasOwnProperty(l)&&t.songs.push(Object.assign({id:l},r[l]));t.years=[];const i=e.years||{};for(const l in i)if(i.hasOwnProperty(l)){const o=i[l],u={};if(o.shows){for(const d in o.shows)if(o.shows.hasOwnProperty(d)){const x=o.shows[d]||{},N=[];for(const T in x)if(x.hasOwnProperty(T)){const C=x[T];N.push({id:T,songId:C.songId,place:C.place,customNo:C.n,dq:C.dq,autoFinal:C.autoFinal})}Ec(N),u[d]=N}}t.years.push({id:l,year:+o.year||+l.split("_")[0],suffix:o.suffix||"",city:o.city,hostCc:o.hostCc,splitAfter:o.splitAfter,showDates:o.showDates||{},shows:u})}return t.years.sort((l,o)=>o.year-l.year||o.id.localeCompare(l.id)),t.ratings=e.ratings||{},t.pred=e.pred||{},t.qualPred=e.qualPred||{},t.liveState=e.liveState||{},t.battleHidden=!!e.battleHidden,t.autoHardReset=!!e.autoHardReset,t.livePredictionMode=!!e.livePredictionMode,t},ul=e=>e>=20?"background: linear-gradient(135deg, #ff0000, #800000); color: #fff; border: 2.5px solid #ff6666; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 0 15px rgba(255,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.3);":e>=15?"background: linear-gradient(135deg, #d90000, #660000); color: #fff; border: 2.5px solid #ff4d4d; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 4px 12px rgba(217,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3);":e>=11?"background: linear-gradient(135deg, #b45309, #78350f); color: #fff; border: 2.5px solid #f59e0b; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 4px 12px rgba(180,83,9,0.4), inset 0 1px 0 rgba(255,255,255,0.2);":e>=8?"background: linear-gradient(135deg, #f97316, #c2410c); color: #fff; border: 2.5px solid #fdba74; text-shadow: 0 1px 3px rgba(0,0,0,0.8); box-shadow: 0 4px 12px rgba(249,115,22,0.4), inset 0 1px 0 rgba(255,255,255,0.3);":e>=5?"background: linear-gradient(135deg, #facc15, #ca8a04); color: #422006; border: 2.5px solid #fef08a; text-shadow: 0 1px 2px rgba(255,255,255,0.6); box-shadow: 0 4px 12px rgba(250,204,21,0.4), inset 0 1px 0 rgba(255,255,255,0.5);":e>=3?"background: linear-gradient(135deg, #86efac, #22c55e); color: #052e16; border: 2.5px solid #bbf7d0; text-shadow: 0 1px 2px rgba(255,255,255,0.6); box-shadow: 0 4px 12px rgba(34,197,94,0.4), inset 0 1px 0 rgba(255,255,255,0.5);":"background: linear-gradient(135deg, #4ade80, #16a34a); color: #fff; border: 2.5px solid #86efac; text-shadow: 0 1px 3px rgba(0,0,0,0.6); box-shadow: 0 4px 12px rgba(22,163,74,0.4), inset 0 1px 0 rgba(255,255,255,0.4);";function ug(){U.useEffect(()=>{const s=document.getElementById("battle-table-css");s&&s.remove();const c=document.createElement("style");c.id="battle-table-css-"+Date.now(),c.textContent=zc,document.head.appendChild(c)},[]);const[e,t]=U.useState(sg),[n,r]=U.useState(()=>localStorage.getItem(dl)||null),[i,l]=U.useState(!1),[o,u]=U.useState(()=>localStorage.getItem("esc-admin-view-off")==="true"),[d,x]=U.useState(null),N=!!d&&i&&!o,[T,C]=U.useState(1),[h,M]=U.useState({view:"home",yearId:null,tab:"sf1",subTab:"points",sortMode:"order",ovSubTab:"semis",sbShow:"final",sbSort:"ratings",editMode:!1,q:"",libYear:"",compareCc:null,enter:!1}),[D,me]=U.useState({open:!1,mode:null,payload:null}),[v,m]=U.useState([]),[b,A]=U.useState({}),K=!!e.autoHardReset,G=U.useRef({}),te=U.useRef(null),re=U.useRef(!1),xe=U.useRef(null),ue=U.useRef(null),Ke=U.useRef(e.ratings),Yt=U.useRef(e.pred);U.useRef(null);const ve=U.useCallback(s=>e.years.find(c=>c.id===s)||null,[e.years]),ye=U.useCallback(s=>e.songs.find(c=>c.id===s)||null,[e.songs]),bn=U.useCallback(s=>{const c=e.jury.find(p=>p.id===s);return c?c.name:s},[e.jury]),wn=U.useCallback(s=>{for(const c of e.years)for(const p in c.shows){const f=c.shows[p].find(g=>g.id===s);if(f)return f}return null},[e.years]),tt=U.useCallback(s=>s?s.songId&&e.ratings[s.songId]?e.ratings[s.songId]:e.ratings[s.id]?e.ratings[s.id]:{}:{},[e.ratings]),Y=U.useCallback(s=>s?e.qualPred[s.id]?e.qualPred[s.id]:{}:{},[e.qualPred]),ne=U.useCallback((s,c)=>{const p=Date.now()+Math.random();m(f=>[...f,{id:p,msg:s,type:c||""}]),setTimeout(()=>{m(f=>f.filter(g=>g.id!==p))},2600)},[]),q=U.useCallback((s,c={})=>{me({open:!0,mode:s,payload:c})},[]),le=U.useCallback(()=>{me({open:!1,mode:null,payload:null}),setModalTempRating(null),setModalTempEntryId(null),setModalTempJurId(null)},[]);U.useEffect(()=>{const s=ue.current;if(s){if(D.open&&!s.open){const c=window.scrollY;try{s.showModal()}catch{}requestAnimationFrame(()=>{window.scrollTo(0,c)}),document.body.style.overflow="hidden"}if(!D.open&&s.open){try{s.close()}catch{}document.body.style.overflow=""}}},[D.open]);const ze=U.useCallback(s=>{const c=te.current;if(!c)return;const p=Vi(gd(s)),f={};for(const g in p)p[g]!==G.current[g]&&(f[g]=p[g]);for(const g in G.current)g in p||(f[g]=null);Object.keys(f).length&&(G.current=p,window.__isPushing=!0,c.update(f).catch(g=>console.warn("Firebase push error:",g)).finally(()=>{setTimeout(()=>{window.__isPushing=!1},500)}))},[]);U.useCallback((s,c)=>{const p=te.current;p&&(c==null?(p.child(s).remove().catch(()=>{}),delete G.current[s]):(p.child(s).set(c).catch(()=>{}),G.current[s]=c))},[]);const Kt=U.useCallback(s=>{if(d){try{localStorage.setItem(Zt,JSON.stringify(s))}catch{}ze(s)}},[ze,d]),oe=U.useCallback(s=>{if(!d){ne("Bitte einloggen, um Änderungen vorzunehmen!","error");return}t(c=>{const p=typeof s=="function"?s(c):{...c,...s};return Kt(p),p})},[Kt,d,ne]),Ft=U.useRef({}),nt=U.useRef(null),Mt=U.useCallback((s,c,p)=>{const f=c.key,g=p?null:c.val(),y=s==="ratings"?"ratings":s==="pred"?"pred":s==="qualPred"?"qualPred":null;y&&(window.__isPushing||(Ft.current[y]||(Ft.current[y]={}),Ft.current[y][f]={val:g,removed:p},nt.current&&clearTimeout(nt.current),nt.current=setTimeout(()=>{const j=Ft.current;Ft.current={},t(P=>{let F=P,k=!1;for(const _ in j){const Q={...P[_]||{}};let se=!1;for(const $ in j[_]){const{val:W,removed:V}=j[_][$],z=Q[$];if(!(V&&z===void 0)&&!(!V&&W==null&&z===void 0)){if(!V&&W&&typeof W=="object"&&z){let S=!1;for(const H in W)if(z[H]!==W[H]){S=!0;break}if(!S)continue}!V&&typeof W!="object"&&z===W||(V||W===null||W===void 0?delete Q[$]:typeof W=="object"?Q[$]=Object.assign({},z||{},W):Q[$]=W,se=!0)}}se&&(k||(F={...P},k=!0),F[_]=Q)}if(!k)return P;try{localStorage.setItem(Zt,JSON.stringify(F))}catch{}return F})},30)))},[]);U.useEffect(()=>()=>{nt.current&&clearTimeout(nt.current)},[]);const Ic=U.useCallback(s=>{if(!window.firebase||te.current)return;const c=window.firebase.database().ref();te.current=c,c.once("value").then(p=>{const f=p.val();if(!f){if(s===!0){const j=es();G.current=Vi(gd(j)),c.update(G.current).catch(()=>{})}return}const g=Vi(f),y=dg(f);t(y),G.current=g;try{localStorage.setItem(Zt,JSON.stringify(y))}catch{}}).catch(p=>{console.warn("Firebase pull Fehler:",p)}),["ratings","pred","qualPred"].forEach(p=>{c.child(p).on("child_added",f=>Mt(p,f,!1)),c.child(p).on("child_changed",f=>Mt(p,f,!1)),c.child(p).on("child_removed",f=>Mt(p,f,!0))}),c.child("liveState").on("value",p=>{const f=p.val()||{};t(g=>{const y=JSON.stringify(g.liveState),j=JSON.stringify(f);if(y===j)return g;const P={...g,liveState:f};try{localStorage.setItem(Zt,JSON.stringify(P))}catch{}return P})}),c.child("battleHidden").on("value",p=>{const f=!!p.val();t(g=>{if(g.battleHidden===f)return g;const y={...g,battleHidden:f};try{localStorage.setItem(Zt,JSON.stringify(y))}catch{}return y})}),c.child("autoHardReset").on("value",p=>{const f=!!p.val();t(g=>{if(g.autoHardReset===f)return g;const y={...g,autoHardReset:f};try{localStorage.setItem(Zt,JSON.stringify(y))}catch{}return y})}),c.child("livePredictionMode").on("value",p=>{const f=!!p.val();t(g=>{if(g.livePredictionMode===f)return g;const y={...g,livePredictionMode:f};try{localStorage.setItem(Zt,JSON.stringify(y))}catch{}return y})})},[Mt]);U.useEffect(()=>{if(!re.current){if(re.current=!0,!window.firebase){console.warn("Firebase SDK not loaded yet");return}try{window.firebase.apps.length||window.firebase.initializeApp(lg),window.firebase.auth().onAuthStateChanged(s=>{if(s){const c=(s.email||"").toLowerCase();if(sl.hasOwnProperty(c)){x(s);const p=sl[c],f=p.id,g=!!p.isAdmin;r(f),l(g),localStorage.setItem(dl,f),localStorage.setItem("esc-is-admin",g?"true":"false"),localStorage.setItem("esc-joined","true"),Ic(!0)}else{window.firebase.auth().signOut().then(()=>{x(null),q("alert",{title:"Zugriff verweigert",text:"Das Google-Konto ("+c+") ist nicht freigeschaltet!"})});return}}else x(null)})}catch(s){console.warn("Firebase Init Fehler:",s)}}},[]);const Tc=U.useCallback(()=>{if(!window.firebase)return;const s=new window.firebase.auth.GoogleAuthProvider;window.firebase.auth().signInWithPopup(s).then(c=>{const p=(c.user.email||"").toLowerCase();sl.hasOwnProperty(p)?ne("Willkommen, "+(c.user.displayName||p)+"!","success"):(window.firebase.auth().signOut(),q("alert",{title:"Zugriff verweigert",text:"Das Konto "+p+" ist nicht in der Whitelist."}))}).catch(c=>{q("alert",{title:"Login Fehler",text:c.message})})},[q,ne]),Pc=U.useCallback(()=>{window.firebase&&window.firebase.auth().signOut().then(()=>{x(null)})},[]),Pa=U.useCallback(()=>{const s=e.jury.map(c=>(c.name.trim()[0]||"?").toUpperCase());return s.map((c,p)=>s.filter(g=>g===c).length>1?c+(p+1):c)},[e.jury]),Lc=U.useCallback(()=>{if(!h.yearId||!h.tab)return!1;const s=e.liveState[h.yearId];return s&&s.activeTab===h.tab},[h.yearId,h.tab,e.liveState]),ui=U.useCallback(()=>{if(!h.yearId)return 0;const s=e.liveState[h.yearId];return s&&s.index!==void 0?s.index:0},[h.yearId,e.liveState]);U.useEffect(()=>{if(!h.enter||!xe.current)return;const s=xe.current;s.classList.remove("enter"),s.offsetWidth,s.classList.add("enter"),M(c=>({...c,enter:!1}))},[h.enter]),U.useEffect(()=>{const s=Ke.current,c=Yt.current,p=[];for(const g in e.ratings)for(const y in e.ratings[g])(!s[g]||s[g][y]!==e.ratings[g][y])&&p.push("rating_"+g+"_"+y);for(const g in e.pred)for(const y in e.pred[g])(!c[g]||c[g][y]!==e.pred[g][y])&&p.push("pred_"+g+"_"+y);if(Ke.current=e.ratings,Yt.current=e.pred,!p.length)return;const f=new Set(p);window.__flashTimer&&clearTimeout(window.__flashTimer),window.__flashTimer=setTimeout(()=>{document.querySelectorAll("[data-flash-key]").forEach(g=>{f.has(g.getAttribute("data-flash-key"))&&(g.classList.add("flash-update"),setTimeout(()=>g.classList.remove("flash-update"),1400))}),document.querySelectorAll("[data-live-flash-key]").forEach(g=>{f.has(g.getAttribute("data-live-flash-key"))&&(g.classList.add("live-box-flash"),setTimeout(()=>g.classList.remove("live-box-flash"),1400))})},100)},[e.ratings,e.pred]),U.useEffect(()=>{if(K&&!window.location.search.includes("v=")){const s=new URL(window.location.href);s.searchParams.set("v",Date.now()),window.location.replace(s.toString())}},[K]),U.useEffect(()=>{if(!window.firebase||!window.firebase.database||!d)return;const s=localStorage.getItem(dl);if(!s)return;const p=window.firebase.database().ref("presence"),f=p.child(s);f.onDisconnect().remove().then(()=>{f.set({online:!0,time:Date.now()})});const g=j=>{A(P=>{const F=j.val()||{},k=Object.keys(P).sort().join(","),_=Object.keys(F).sort().join(",");return k===_?P:F})};p.on("value",g);const y=()=>{f.remove()};return window.addEventListener("beforeunload",y),window.addEventListener("pagehide",y),()=>{p.off("value",g),window.removeEventListener("beforeunload",y),window.removeEventListener("pagehide",y),f.remove()}},[d]);const _c=()=>M(s=>({...s,editMode:!s.editMode})),Rc=()=>{if(!d){ne("Bitte einloggen!","error");return}oe(s=>({...s,battleHidden:!s.battleHidden}))},Fc=()=>{if(!h.yearId)return;if(!ve(h.yearId).shows[h.tab]){ne("Live-Modus geht nur in einer Show!","error");return}oe(c=>{const p={...c,liveState:{...c.liveState}},f=p.liveState[h.yearId]||{activeTab:null,index:0};return f.activeTab===h.tab?p.liveState[h.yearId]={...f,activeTab:null}:p.liveState[h.yearId]={...f,activeTab:h.tab,index:0},p})},Mc=s=>{if(!h.yearId)return;const c=ui();C(s>c?1:-1),oe(p=>{const f={...p,liveState:{...p.liveState}};return f.liveState[h.yearId]={...f.liveState[h.yearId]||{activeTab:h.tab},index:parseInt(s)||0},f})},Ac=()=>{if(!h.yearId)return;const s=ve(h.yearId),c=s.shows[h.tab]||[];if(!c.length)return;C(1);const p=ui(),f=(p+1)%c.length;oe(g=>{const y={...g,liveState:{...g.liveState}};return y.liveState[h.yearId]={...y.liveState[h.yearId]||{activeTab:h.tab},index:f},y})},Oc=()=>{if(!h.yearId)return;const s=ve(h.yearId),c=s.shows[h.tab]||[];if(!c.length)return;C(-1);const p=ui(),f=(p-1+c.length)%c.length;oe(g=>{const y={...g,liveState:{...g.liveState}};return y.liveState[h.yearId]={...y.liveState[h.yearId]||{activeTab:h.tab},index:f},y})},Dc=(s,c)=>{oe(p=>{const f={...p,qualPred:{...p.qualPred}};return f.qualPred[s]={...f.qualPred[s]||{}},f.qualPred[s][c]===void 0?f.qualPred[s][c]=!1:delete f.qualPred[s][c],f})},mr=()=>M(s=>({...s,yearId:null,view:"home",enter:!0})),ts=s=>{const c=ve(s);M(p=>({...p,yearId:s,view:"year",tab:c&&c.shows.sf1?"sf1":c&&c.shows.sf2?"sf2":c&&c.shows.final?"final":"overview",subTab:"points",sortMode:"order",ovSubTab:"semis",editMode:!1,enter:!0}))},Bc=()=>M(s=>({...s,view:"compare",enter:!0})),Hc=()=>M(s=>({...s,view:"library",enter:!0})),Uc=s=>{q("confirm",{title:"Delete Song",text:"Delete from library?",onYes:()=>{oe(c=>({...c,songs:c.songs.filter(p=>p.id!==s)}))}})},Gt=s=>M(c=>({...c,tab:s,subTab:"points",sortMode:"order",ovSubTab:"semis",editMode:!1,enter:!0})),Wc=()=>{const s=ve(h.yearId);q("confirm",{title:"Contest löschen",text:"Willst du diesen kompletten Contest löschen?",onYes:()=>{oe(c=>({...c,years:c.years.filter(p=>p!==s)})),M(c=>({...c,yearId:null,view:"home",enter:!0}))}})},La=s=>{const c=ve(h.yearId);c&&!c.shows[s]&&oe(p=>({...p,years:p.years.map(f=>{if(f.id!==h.yearId)return f;const g=fd[s]||25,y=[];for(let j=1;j<=g;j++)y.push({id:f.id+"-"+s+"-"+j});return{...f,shows:{...f.shows,[s]:y}}})}))},_a=s=>{q("confirm",{title:"Show entfernen",text:"Möchtest du "+Ii[s]+" wirklich entfernen? Alle Tipps und Einträge gehen verloren.",onYes:()=>{oe(c=>({...c,years:c.years.map(p=>{if(p.id!==h.yearId)return p;const f={...p.shows};return delete f[s],{...p,shows:f}})})),M(c=>{const p=ve(h.yearId);if(!p)return c;const f=c.tab===s?p.shows.sf1?"sf1":p.shows.sf2?"sf2":p.shows.final?"final":"overview":c.tab,g=c.sbShow===s?p.shows.final?"final":Object.keys(p.shows).filter(y=>y!==s)[0]:c.sbShow;return{...c,tab:f,sbShow:g}})}})},Vc=(s,c)=>{c=+c,!(c<=0)&&oe(p=>({...p,years:p.years.map(f=>{if(f.id!==h.yearId)return f;const g=[...f.shows[s]||[]],y=g[c];return g[c]=g[c-1],g[c-1]=y,{...f,shows:{...f.shows,[s]:g}}})}))},$c=(s,c)=>{c=+c;const p=ve(h.yearId),f=p.shows[s]||[];c>=f.length-1||oe(g=>({...g,years:g.years.map(y=>{if(y.id!==h.yearId)return y;const j=[...y.shows[s]||[]],P=j[c];return j[c]=j[c+1],j[c+1]=P,{...y,shows:{...y.shows,[s]:j}}})}))},Qc=s=>{oe(c=>({...c,years:c.years.map(p=>{if(p.id!==h.yearId)return p;const f=[...p.shows[s]||[]];return f.push({id:p.id+"-"+s+"-"+(f.length+1)}),{...p,shows:{...p.shows,[s]:f}}})}))},Yc=s=>{oe(c=>({...c,years:c.years.map(p=>{if(p.id!==h.yearId)return p;const f=[...p.shows[s]||[]];return f.length<=0?p:(f.pop(),{...p,shows:{...p.shows,[s]:f}})})}))},Kc=s=>{oe(c=>({...c,years:c.years.map(p=>{const f={};for(const g in p.shows)f[g]=p.shows[g].map(y=>y.id===s?{...y,dq:!y.dq}:y);return{...p,shows:f}})}))},Gc=(s,c,p)=>{oe(f=>({...f,years:f.years.map(g=>{const y={};for(const j in g.shows){const P=g.shows[j].map(F=>{if(F.id!==s)return F;const k={...F};return c===""||parseFloat(c)===Hr(F.id)?delete k.customNo:k.customNo=isNaN(parseFloat(c))?c:parseFloat(c),k.autoFinal=p,p&&delete k.place,k});Ec(P),y[j]=P}return{...g,shows:y}})})),le()},qc=s=>{const{artist:c,title:p,cc:f,year:g,editId:y,assign:j}=s;!c||!p||!f||(oe(P=>{const F={...P,songs:[...P.songs]};let k;if(y){const _=F.songs.findIndex(B=>B.id===y);_!==-1&&(F.songs[_]={...F.songs[_],artist:c,title:p,cc:f,year:g},k=y)}else k="s"+Date.now().toString(36),F.songs.push({id:k,cc:f,artist:c,title:p,year:g});return j&&(F.years=F.years.map(_=>{const B={};for(const Q in _.shows)B[Q]=_.shows[Q].map(se=>se.id===j?{...se,songId:k}:se);return{..._,shows:B}})),F}),j?(le(),setTimeout(()=>q("rating",{eId:j,jurId:n}),50)):le())},Jc=s=>{const{year:c,suffix:p,city:f}=s,g=parseInt(c);if(!g)return;const y=g+(p?"_"+p.toLowerCase():"_main");if(ve(y))return;const j={};for(const P of["sf1","sf2","final"]){j[P]=[];for(let F=1;F<=fd[P];F++)j[P].push({id:y+"-"+P+"-"+F})}oe(P=>{const F={...P,years:[...P.years,{id:y,year:g,suffix:p,city:f||void 0,shows:j}]};return F.years.sort((k,_)=>_.year-k.year),F}),le(),M(P=>({...P,yearId:y,view:"year",tab:"sf1",subTab:"points",sortMode:"order",ovSubTab:"semis",enter:!0}))},Xc=(s,c)=>{oe(p=>({...p,years:p.years.map(f=>f.id===h.yearId?{...f,city:s||void 0,hostCc:c||void 0}:f)})),le()},Zc=s=>{oe(c=>({...c,years:c.years.map(p=>p.id===h.yearId?{...p,showDates:s}:p)})),le()},ep=s=>{const c={};s.forEach(p=>{const f=p.value.trim();f&&(c[p.dataset.jn]=f)}),oe(p=>({...p,jury:p.jury.map(f=>c[f.id]?{...f,name:c[f.id]}:f)})),le()},tp=s=>{if(!d){ne("Bitte einloggen!","error");return}try{const c=JSON.parse(s);oe(p=>{const f={...p};return c.jury&&(f.jury=c.jury),c.songs&&(f.songs=c.songs),c.years&&(f.years=c.years,f.years.sort((g,y)=>y.year-g.year||y.id.localeCompare(g.id))),c.ratings&&(f.ratings=c.ratings),c.pred&&(f.pred=c.pred),c.qualPred&&(f.qualPred=c.qualPred),c.liveState&&(f.liveState=c.liveState),f}),le(),ne("JSON aktualisiert!","success")}catch(c){q("alert",{title:"Fehler",text:"Ungültiges JSON-Format: "+c.message})}},np=s=>{oe(c=>{const p={...c},f={};p.jury.forEach(j=>f[j.id]=j),s.jury&&s.jury.forEach(j=>f[j.id]=j),p.jury=Object.values(f);const g={};p.songs.forEach(j=>g[j.id]=j),s.songs&&s.songs.forEach(j=>g[j.id]=j),p.songs=Object.values(g);const y={};return p.years.forEach(j=>y[j.id]=j),s.years&&s.years.forEach(j=>y[j.id]=j),p.years=Object.values(y).sort((j,P)=>P.year-j.year||P.id.localeCompare(j.id)),["ratings","pred","qualPred","liveState"].forEach(j=>{if(p[j]={...p[j]||{}},s[j])for(const P in s[j])s[j].hasOwnProperty(P)&&(p[j][P]=Object.assign({},p[j][P]||{},s[j][P]))}),p}),le(),ne("Daten erfolgreich importiert!","success")},rp=()=>{if(!d){ne("Bitte einloggen!","error");return}const s=new Blob([JSON.stringify(e,null,1)],{type:"application/json"}),c=document.createElement("a");c.href=URL.createObjectURL(s),c.download="esc.json",c.click()},ip=()=>{""+ee(bn(n));const s=Object.keys(b),c=s.length>0?a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,background:"rgba(74, 222, 128, 0.1)",padding:"4px 8px",borderRadius:999,border:"1px solid rgba(74, 222, 128, 0.3)",marginRight:10,height:36},children:[a.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:"var(--green)",boxShadow:"0 0 8px var(--green)",flexShrink:0},title:"Online"}),s.map(g=>{const y=b[g]&&b[g].photoURL,j=bn(g).charAt(0).toUpperCase();return a.jsxs("div",{title:bn(g),style:{position:"relative",width:28,height:28},children:[a.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"var(--gold)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:800,color:"#1d1d1d",border:"2px solid var(--panel-solid)",boxSizing:"border-box"},children:j}),y&&a.jsx("img",{src:y,alt:bn(g),style:{position:"absolute",inset:0,width:28,height:28,borderRadius:"50%",objectFit:"cover",border:"2px solid var(--panel-solid)",display:"block",zIndex:1,background:"var(--panel2-solid)"},onError:P=>{P.target.style.display="none"}})]},g)})]}):null,p=d?a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,background:"var(--panel2)",padding:"5px 12px",borderRadius:999,border:"1px solid var(--line)"},children:[a.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"var(--ink)"},children:ee(d.displayName||d.email)}),a.jsx("button",{className:"ghost sm danger",onClick:Pc,style:{padding:"3px 10px",fontSize:"0.75rem"},children:"Logout"})]}):a.jsxs("button",{onClick:Tc,style:{display:"inline-flex",alignItems:"center",gap:8,background:"#4285f4",borderColor:"#4285f4",color:"#fff",fontWeight:700,padding:"7px 16px",borderRadius:999},children:[a.jsxs("svg",{style:{width:15,height:15,fill:"currentColor"},viewBox:"0 0 24 24",children:[a.jsx("path",{d:"M21.35 11.1h-9.17v2.98h5.37c-.24 1.25-.97 2.31-2.07 3.03v2.49h3.33c1.95-1.8 3.08-4.45 3.08-7.5 0-.67-.06-1.33-.17-1.95z"}),a.jsx("path",{d:"M12.18 21c2.75 0 5.06-.91 6.75-2.49l-3.33-2.49c-.91.61-2.08.97-3.42.97-2.63 0-4.86-1.78-5.66-4.17H3.04v2.57C4.74 18.76 8.21 21 12.18 21z"}),a.jsx("path",{d:"M6.52 12.82c-.2-.61-.32-1.26-.32-1.93s.12-1.32.32-1.93V6.39H3.04C2.37 7.72 2 9.21 2 10.89s.37 3.17 1.04 4.5l3.48-2.57z"}),a.jsx("path",{d:"M12.18 4.78c1.5 0 2.85.52 3.91 1.52l2.93-2.93C17.23 1.67 14.92.78 12.18.78 8.21.78 4.74 3.02 3.04 6.39l3.48 2.57c.8-2.39 3.03-4.17 5.66-4.17z"})]})," Google Login"]}),f={display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px",borderRadius:999,fontWeight:700,fontSize:"0.85rem",letterSpacing:"0.01em",background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"};return{...f},a.jsxs("header",{children:[a.jsx("div",{className:"brand",children:"Eurovision Song Contest"}),a.jsxs("div",{className:"who",children:[c,p,d&&i&&a.jsxs("div",{onClick:()=>{const g=!o;u(g),localStorage.setItem("esc-admin-view-off",g?"true":"false")},title:o?"Admin-Modus aktivieren":"Admin-Modus deaktivieren",style:{display:"inline-flex",alignItems:"center",gap:12,padding:"6px 12px 6px 16px",borderRadius:999,background:"linear-gradient(145deg, rgba(20,10,45,0.95) 0%, rgba(10,5,22,1) 100%)",border:o?"1px solid rgba(148,94,255,0.35)":"1px solid rgba(74,222,128,0.45)",boxShadow:o?"inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 8px rgba(0,0,0,0.35)":"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35), 0 0 12px rgba(74,222,128,0.15)",cursor:"pointer",userSelect:"none",transition:"all 0.2s ease"},children:[a.jsx("span",{style:{fontSize:"0.8rem",fontWeight:700,letterSpacing:"0.03em",color:o?"var(--muted)":"var(--green)",textShadow:o?"none":"0 0 8px rgba(74,222,128,0.4)"},children:o?"Admin inaktiv":"Admin aktiv"}),a.jsx("div",{style:{width:36,height:20,borderRadius:999,background:o?"rgba(94,58,168,0.3)":"linear-gradient(135deg, #4ade80 0%, #16a34a 100%)",border:o?"1px solid rgba(148,94,255,0.4)":"1px solid #86efac",boxShadow:o?"inset 0 2px 4px rgba(0,0,0,0.4)":"inset 0 1px 0 rgba(255,255,255,0.4), 0 0 10px rgba(74,222,128,0.4)",position:"relative",transition:"all 0.2s ease",flexShrink:0},children:a.jsx("div",{style:{position:"absolute",top:1,left:o?1:17,width:16,height:16,borderRadius:"50%",background:o?"linear-gradient(145deg, #6f5fa3 0%, #4a3d73 100%)":"linear-gradient(145deg, #ffffff 0%, #e5e5e5 100%)",boxShadow:o?"0 1px 3px rgba(0,0,0,0.5)":"0 2px 6px rgba(0,0,0,0.4), 0 0 8px rgba(255,255,255,0.5)",transition:"all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)"}})})]}),d&&a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>{window.location.href=window.location.pathname+"?v="+Date.now()},title:"Cache leeren & neu laden",style:{...f,padding:"9px 14px"},onMouseEnter:g=>{g.currentTarget.style.transform="translateY(-1px)",g.currentTarget.style.borderColor="rgba(148,94,255,0.7)"},onMouseLeave:g=>{g.currentTarget.style.transform="translateY(0)",g.currentTarget.style.borderColor="rgba(148,94,255,0.35)"},children:"🔄"}),a.jsxs("button",{onClick:()=>q("settings"),title:"Settings, Export, Import",style:f,onMouseEnter:g=>{g.currentTarget.style.transform="translateY(-1px)",g.currentTarget.style.borderColor="rgba(148,94,255,0.7)",g.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:g=>{g.currentTarget.style.transform="translateY(0)",g.currentTarget.style.borderColor="rgba(148,94,255,0.35)",g.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[a.jsx("span",{style:{fontSize:"1rem"},children:"⚙️"})," Settings"]})]})]})]})},ns=()=>{const s=[...e.years].sort((k,_)=>_.year-k.year||_.id.localeCompare(k.id)),c=new Date;c.setHours(0,0,0,0);const p=c.toISOString().slice(0,10);let f=null;const g=[];for(const k of s){const _=k.showDates&&k.showDates.final||null;_&&p<=_&&g.push({y:k,sortKey:_})}g.length&&(g.sort((k,_)=>k.sortKey.localeCompare(_.sortKey)),f=g[0].y.id);const y=k=>{const _=e.liveState[k.id];return!!(_&&_.activeTab)},j=k=>{const _=new Set;let B=0,Q=0;for(const W in k.shows){const V=k.shows[W]||[];for(let z=0;z<V.length;z++){const S=V[z];if(!S.songId||_.has(S.songId))continue;_.add(S.songId);const H=tt(S);for(const R of e.jury){const w=H[R.id];w!=null&&(B+=w,Q++)}}}const se=_.size;return{avg:Q>0?B/Q:0,count:se}},P=k=>{if(!k)return"";const _=new Date(k+"T00:00:00");if(isNaN(_))return k;const B=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"];return _.getDate()+". "+B[_.getMonth()]},F=f?s.find(k=>k.id===f):null;return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"home-hero",children:[a.jsx("h1",{className:"home-hero-title",children:"Eurovision Song Contest"}),a.jsx("p",{className:"home-hero-sub",children:"Scoreboard · Predictions · Live Mode"})]}),a.jsxs("div",{className:"home-actions",children:[a.jsxs("button",{onClick:()=>{if(!d){ne("Bitte einloggen, um die Song Library zu öffnen!","error");return}Hc()},className:"home-action-btn home-action-primary",style:{position:"relative",cursor:d?"pointer":"not-allowed"},children:[a.jsx("span",{className:"home-action-icon",children:"🎵"}),a.jsxs("span",{className:"home-action-text",children:[a.jsx("b",{children:"Song Library"}),a.jsx("small",{children:"Alle Songs durchsuchen"})]}),!d&&a.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:18,fontSize:"2.4rem",filter:"drop-shadow(0 0 20px rgba(255,209,102,0.6))"},children:"🔒"})]}),a.jsxs("button",{onClick:()=>{if(!d){ne("Bitte einloggen, um den Country Comparison zu öffnen!","error");return}Bc()},className:"home-action-btn",style:{position:"relative",cursor:d?"pointer":"not-allowed"},children:[a.jsx("span",{className:"home-action-icon",children:"🌍"}),a.jsxs("span",{className:"home-action-text",children:[a.jsx("b",{children:"Country Comparison"}),a.jsx("small",{children:"Länder im Vergleich"})]}),!d&&a.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:18,fontSize:"2.4rem",filter:"drop-shadow(0 0 20px rgba(255,209,102,0.6))"},children:"🔒"})]})]}),F&&(()=>{const k=F,_=j(k),B=y(k),Q=k.showDates||{},se=k.hostCc?`https://flagcdn.com/${k.hostCc}.svg`:"",$=k.year+(k.suffix?" ("+k.suffix+")":""),W=[];return Q.sf1&&W.push({k:"SF1",v:P(Q.sf1)}),Q.sf2&&W.push({k:"SF2",v:P(Q.sf2)}),Q.final&&W.push({k:"Final",v:P(Q.final)}),a.jsxs("div",{className:"upcoming-hero",onClick:()=>{if(!d){ne("Bitte einloggen, um einen Contest zu öffnen!","error");return}ts(k.id)},style:{position:"relative",minHeight:"160px",cursor:d?"pointer":"not-allowed"},children:[a.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"linear-gradient(135deg, #1a0f33 0%, #2a1749 50%, #120a24 100%)",zIndex:0}}),a.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"radial-gradient(circle at 20% 50%, rgba(168,85,247,0.15) 0%, transparent 60%)",zIndex:0}}),se&&a.jsx("img",{src:se,alt:"","aria-hidden":"true",style:{position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",height:"100%",maxWidth:"60%",objectFit:"cover",opacity:.9,filter:"saturate(1.1) contrast(1.05)",pointerEvents:"none",zIndex:0,maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)"}}),a.jsxs("div",{className:"upcoming-hero-inner",style:{position:"relative",zIndex:1},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",width:"100%",marginBottom:16},children:[a.jsx("span",{className:"upcoming-hero-badge",children:"⚡ Upcoming"}),B&&a.jsxs("span",{className:"home-badge home-badge-live",style:{marginLeft:8},children:[a.jsx("span",{className:"home-badge-dot"}),"LIVE"]})]}),a.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",paddingRight:"35%"},children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[a.jsx("div",{className:"upcoming-hero-year",style:{fontSize:"2.8rem",marginBottom:4},children:ee($)}),k.city&&a.jsx("div",{className:"upcoming-hero-host",style:{justifyContent:"flex-start",fontSize:"1.3rem",marginTop:0,marginBottom:12},children:a.jsx("span",{children:ee(k.city)})}),a.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[a.jsx("div",{className:"upcoming-hero-dates",style:{margin:0,justifyContent:"flex-start"},children:W.length>0?W.map(V=>a.jsxs("div",{className:"upcoming-date-chip",style:{minWidth:"auto",padding:"6px 12px"},children:[a.jsx("span",{className:"upcoming-date-label",children:V.k}),a.jsx("span",{className:"upcoming-date-value",children:V.v})]},V.k)):a.jsx("div",{className:"upcoming-date-empty",style:{padding:"6px 12px"},children:"Noch kein Datum"})}),a.jsxs("div",{className:"upcoming-hero-stats",style:{margin:0,justifyContent:"flex-start"},children:[a.jsxs("div",{className:"home-card-stat",children:[a.jsx("span",{className:"home-card-stat-val",children:_.avg.toFixed(1)}),a.jsx("span",{className:"home-card-stat-lbl",children:"Ø Pts"})]}),a.jsx("div",{className:"home-card-stat-divider"}),a.jsxs("div",{className:"home-card-stat",children:[a.jsx("span",{className:"home-card-stat-val",children:_.count}),a.jsx("span",{className:"home-card-stat-lbl",children:"Songs"})]})]})]})]})})]}),!d&&a.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:22,fontSize:"4rem",filter:"drop-shadow(0 0 24px rgba(255,209,102,0.6))"},children:"🔒"})]})})(),s.length?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"home-section-label",children:[a.jsx("span",{children:"All Contests"}),a.jsx("span",{className:"home-section-count",children:s.length})]}),a.jsx("div",{className:"home-grid",children:s.map(k=>{const _=k.year+(k.suffix?" ("+k.suffix+")":""),B=j(k),Q=y(k),se=k.hostCc?`https://flagcdn.com/${k.hostCc}.svg`:"";return a.jsxs("div",{className:"home-card"+(Q?" is-live":""),onClick:()=>{if(!d){ne("Bitte einloggen, um einen Contest zu öffnen!","error");return}ts(k.id)},style:{cursor:d?"pointer":"not-allowed"},children:[a.jsx("div",{className:"home-card-flag",style:{backgroundImage:se?`url('${se}')`:"linear-gradient(135deg, #3b2367, #1a1033)"}}),Q&&a.jsx("div",{className:"home-card-top",children:a.jsxs("span",{className:"home-badge home-badge-live",children:[a.jsx("span",{className:"home-badge-dot"}),"LIVE"]})}),a.jsxs("div",{className:"home-card-body",children:[a.jsx("div",{className:"home-card-year",children:ee(_)}),k.city&&a.jsx("div",{className:"home-card-host",children:a.jsx("span",{children:ee(k.city)})})]}),a.jsxs("div",{className:"home-card-footer",children:[a.jsxs("div",{className:"home-card-stat",children:[a.jsx("span",{className:"home-card-stat-val",children:B.avg.toFixed(1)}),a.jsx("span",{className:"home-card-stat-lbl",children:"Ø Pts"})]}),a.jsxs("div",{className:"home-card-stat",children:[a.jsx("span",{className:"home-card-stat-val",children:B.count}),a.jsx("span",{className:"home-card-stat-lbl",children:"Songs"})]})]}),!d&&a.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",borderRadius:14,fontSize:"3.2rem",filter:"drop-shadow(0 0 20px rgba(255,209,102,0.6))",transition:"opacity 0.2s ease"},onMouseEnter:$=>{$.currentTarget.style.background="linear-gradient(145deg, rgba(20,10,45,0.75) 0%, rgba(40,24,82,0.85) 100%)"},onMouseLeave:$=>{$.currentTarget.style.background="linear-gradient(145deg, rgba(10,5,22,0.85) 0%, rgba(20,10,45,0.92) 100%)"},children:"🔒"})]},k.id)})})]}):a.jsx("p",{className:"empty",children:"No Eurovision contest added yet. Use the ＋ button in the bottom right corner."})]})},ap=s=>a.jsxs("div",{className:"live-fallback",children:[a.jsxs("h2",{children:[a.jsx("span",{className:"live-dot"})," Live Modus ist aktiv"]}),a.jsx("p",{children:"Wähle eine Show aus, um beizutreten:"}),a.jsxs("div",{className:"live-fallback-shows",children:[s.shows.sf1&&a.jsx("button",{onClick:()=>Gt("sf1"),children:"Semi-final 1"}),s.shows.sf2&&a.jsx("button",{onClick:()=>Gt("sf2"),children:"Semi-final 2"}),s.shows.final&&a.jsx("button",{onClick:()=>Gt("final"),children:"Grand Final"})]})]}),lp=s=>{const c=ve(h.yearId),p=c.shows[s]||[];if(p.length===0)return ap(c);let f=ui();f>=p.length&&(f=0);const g=p[f],y=ye(g.songId),j=g.autoFinal!==void 0?g.autoFinal:y&&["de","fr","it","es","gb","kr"].indexOf(y.cc)!==-1;let P=0,F="➔";if(s==="final")F=f+1;else if(!j){for(let S=0;S<=f;S++){const H=ye(p[S].songId);(p[S].autoFinal!==void 0?p[S].autoFinal:H&&["de","fr","it","es","gb","kr"].indexOf(H.cc)!==-1)||P++}F=P}const k=ye(g.songId),_=tt(g);let B=null,Q=null;if(s==="sf1"||s==="sf2")g.place&&(B=g.place);else if(k){if(c.shows.sf1){const S=c.shows.sf1.find(H=>H.songId===k.id);S&&S.place&&(B=S.place)}if(!B&&c.shows.sf2){const S=c.shows.sf2.find(H=>H.songId===k.id);S&&S.place&&(B=S.place)}}if(k&&c.shows.final){const S=c.shows.final.find(H=>H.songId===k.id);S&&S.place&&(Q=S.place)}if(s==="final"&&e.livePredictionMode){const S=p.map(w=>{const E=ye(w.songId);if(!E)return null;const I=e.pred[w.id]||{},L=w.place;return{e:w,songObj:E,pred:I,act:L}}).filter(Boolean);S.sort((w,E)=>{const I=w.act!==void 0&&w.act!==null?w.act:9999,L=E.act!==void 0&&E.act!==null?E.act:9999;return I!==L?I-L:w.songObj.title.localeCompare(E.songObj.title)});const H={};e.jury.forEach(w=>{H[w.id]={sum:0,count:0,fullHits:0}}),S.forEach(({e:w,pred:E,act:I})=>{I!=null&&e.jury.forEach(L=>{const Z=E[L.id];if(Z!=null){const X=Math.abs(Z-I);H[L.id].sum+=X,H[L.id].count++,X===0&&H[L.id].fullHits++}})});const R=e.jury.slice().sort((w,E)=>{const I=H[w.id].sum||9999,L=H[E.id].sum||9999;return I-L});return a.jsxs("div",{style:{animation:"fadeIn 0.5s ease-out"},children:[a.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(255,209,102,0.12) 0%, rgba(168,85,247,0.08) 50%, rgba(34,211,238,0.05) 100%)",border:"1.5px solid rgba(255,209,102,0.45)",borderRadius:24,padding:"28px 32px",marginBottom:28,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:20,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.12), 0 12px 48px rgba(0,0,0,0.6), 0 0 40px rgba(255,209,102,0.15)",position:"relative",overflow:"hidden"},children:[a.jsx("div",{style:{position:"absolute",top:"-50%",right:"-10%",width:"400px",height:"400px",background:"radial-gradient(circle, rgba(255,209,102,0.15) 0%, transparent 70%)",pointerEvents:"none"}}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:20,position:"relative",zIndex:1},children:[a.jsx("div",{style:{width:68,height:68,borderRadius:20,display:"grid",placeItems:"center",background:"linear-gradient(135deg, #ffd166 0%, #ffae00 50%, #ff9500 100%)",fontSize:"2.2rem",boxShadow:"0 0 32px rgba(255,209,102,0.7), inset 0 2px 0 rgba(255,255,255,0.6), inset 0 -3px 8px rgba(180,120,0,0.3)"},children:"🎯"}),a.jsxs("div",{children:[a.jsx("h2",{style:{margin:0,fontFamily:"var(--display)",fontSize:"2rem",background:"linear-gradient(135deg, #fff 0%, #ffd166 50%, #ff2d95 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",letterSpacing:"-0.03em",textShadow:"0 2px 8px rgba(0,0,0,0.5)"},children:"Live Prediction Battle"}),a.jsx("p",{style:{margin:"6px 0 0",color:"var(--muted)",fontSize:"0.92rem"},children:"Trage die echten Plätze ein – wer tippt am besten?"})]})]}),a.jsx("button",{onClick:()=>oe(w=>({...w,livePredictionMode:!1})),style:{padding:"12px 26px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.4)",color:"#fff",fontWeight:700,fontSize:"0.88rem",cursor:"pointer",transition:"all 0.2s ease",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.4)",position:"relative",zIndex:1},onMouseEnter:w=>{w.currentTarget.style.transform="translateY(-2px)",w.currentTarget.style.borderColor="var(--pink)",w.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.15), 0 8px 20px rgba(255,45,149,0.3)"},onMouseLeave:w=>{w.currentTarget.style.transform="translateY(0)",w.currentTarget.style.borderColor="rgba(148,94,255,0.4)",w.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.4)"},children:"← Zurück zum Live-Modus"})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:14,marginBottom:28},children:R.map((w,E)=>{const I=H[w.id],L=E===0&&I.count>0,Z=I.count>0,X=E===0?"🥇":E===1?"🥈":E===2?"🥉":null,ie=["#ffd166","#e5e5e5","#cd7f32"];return a.jsxs("div",{style:{background:L?"linear-gradient(145deg, rgba(255,209,102,0.2) 0%, rgba(30,18,55,0.98) 60%, rgba(15,8,30,1) 100%)":Z&&E<3?`linear-gradient(145deg, ${ie[E]}18 0%, rgba(25,14,52,0.95) 60%, rgba(10,5,22,0.98) 100%)`:"linear-gradient(145deg, rgba(25,14,52,0.95) 0%, rgba(10,5,22,0.98) 100%)",border:L?"2px solid var(--gold)":Z&&E<3?`1.5px solid ${ie[E]}66`:"1px solid rgba(94,58,168,0.3)",borderRadius:18,padding:"20px 20px 16px",display:"flex",flexDirection:"column",alignItems:"center",gap:6,boxShadow:L?"0 0 32px rgba(255,209,102,0.4), inset 0 1px 0 rgba(255,255,255,0.15)":"0 6px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",position:"relative",overflow:"hidden",transition:"all 0.25s ease"},children:[X&&a.jsx("div",{style:{position:"absolute",top:10,right:12,fontSize:"1.4rem",filter:"drop-shadow(0 0 10px rgba(255,209,102,0.7))"},children:X}),a.jsx("div",{style:{fontFamily:"var(--display)",fontWeight:800,fontSize:"1rem",color:L?"var(--gold)":"var(--ink)",letterSpacing:"0.01em"},children:ee(w.name)}),a.jsx("div",{style:{fontFamily:"var(--number-font)",fontSize:"2.6rem",color:Z?L?"var(--gold)":E<3?ie[E]:"var(--cyan)":"var(--muted-dim)",lineHeight:1,textShadow:L?"0 0 20px rgba(255,209,102,0.7)":"0 2px 6px rgba(0,0,0,0.5)",marginTop:2},children:Z?I.sum:"–"}),a.jsx("div",{style:{fontSize:"0.68rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.1em",textTransform:"uppercase",marginTop:4},children:Z?`${I.fullHits} 🎯 · ${I.count} Tipps`:"Keine Tipps"})]},w.id)})}),a.jsx("div",{style:{background:"linear-gradient(145deg, rgba(25,14,52,0.95) 0%, rgba(10,5,22,0.98) 100%)",border:"1px solid rgba(94,58,168,0.4)",borderRadius:24,overflow:"hidden",boxShadow:"0 16px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)"},children:a.jsxs("table",{className:"sb-table battle-table",style:{width:"100%",tableLayout:"fixed"},children:[a.jsx("thead",{children:a.jsxs("tr",{style:{background:"linear-gradient(135deg, rgba(40,24,82,0.6) 0%, rgba(20,10,45,0.7) 100%)"},children:[a.jsx("th",{style:{paddingLeft:16,width:"auto",fontSize:"0.78rem",padding:"14px 10px"},children:"Song"}),e.jury.map(w=>a.jsx("th",{className:"c col-tipp",style:{width:55,fontSize:"0.72rem",padding:"14px 4px"},children:ee(w.name)},"pp-h-g-"+w.id)),e.jury.map(w=>a.jsx("th",{className:"c col-abw",style:{width:50,fontSize:"0.72rem",padding:"14px 4px",color:"var(--cyan)"},children:ee(w.name)},"pp-h-d-"+w.id)),a.jsx("th",{className:"c col-place",style:{width:60,fontSize:"0.78rem",padding:"14px 4px",color:"var(--gold)"},children:"Platz"})]})}),a.jsx("tbody",{children:S.map(({e:w,songObj:E,pred:I,act:L})=>{const Z=L===1,X=L!=null;return a.jsxs("tr",{style:{transition:"background 0.3s ease",background:Z?"linear-gradient(90deg, rgba(255,209,102,0.08) 0%, transparent 50%)":X&&L<=3?"linear-gradient(90deg, rgba(148,94,255,0.04) 0%, transparent 50%)":"transparent",borderBottom:"1px solid rgba(94,58,168,0.15)",animation:"fadeUp 0.4s ease-out"},children:[a.jsx("td",{style:{padding:"8px 12px",position:"relative",verticalAlign:"middle"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("div",{style:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",background:Z?"linear-gradient(135deg, #ffd166 0%, #ffae00 100%)":"rgba(5,3,15,0.6)",fontFamily:"var(--number-font)",fontSize:"0.9rem",fontWeight:800,color:Z?"#1d1d1d":X?"var(--gold)":"var(--muted-dim)",border:Z?"1.5px solid #fff6cc":"1px solid rgba(148,94,255,0.3)",flexShrink:0,transition:"all 0.25s ease",boxShadow:Z?"0 0 12px rgba(255,209,102,0.5)":"none"},children:X?L:"?"}),a.jsx(Tt,{cc:E.cc}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",lineHeight:1.2,minWidth:0},children:[a.jsx("span",{style:{fontFamily:"var(--display)",fontWeight:700,fontSize:"0.92rem",color:Z?"var(--gold)":"var(--ink)",textShadow:"0 1px 2px rgba(0,0,0,0.8)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",transition:"color 0.3s ease"},children:ee(E.title)}),a.jsx("span",{style:{fontSize:"0.72rem",color:"var(--muted)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:ee(E.artist)})]})]})}),e.jury.map(ie=>{const ae=I[ie.id],de=ie.id===n;return a.jsx("td",{className:"col-tipp",style:{textAlign:"center",verticalAlign:"middle"},children:a.jsx("input",{type:"number",min:"1",max:p.length,value:ae??"",className:"battle-input",readOnly:!de&&!N,disabled:!de&&!N,onChange:Fe=>{const ct=parseInt(Fe.target.value);oe(vt=>{const We={...vt,pred:{...vt.pred}};return We.pred[w.id]={...We.pred[w.id]||{}},ct>0?We.pred[w.id][ie.id]=ct:delete We.pred[w.id][ie.id],We})},style:{background:de||N?"var(--panel2-solid)":"transparent",border:de||N?"1px solid var(--line)":"1px solid transparent",opacity:de||N?1:.5}})},"pp-g-"+ie.id)}),e.jury.map(ie=>{const ae=I[ie.id];let de=a.jsx("span",{style:{color:"var(--muted-dim)"},children:"–"});if(ae!=null&&L!==void 0&&L!==null){const Fe=Math.abs(ae-L);Fe===0?de=a.jsx("span",{className:"battle-diff-cell",style:{...Ge(wt(10)),animation:"popIn 0.3s ease-out"},children:"🎯"}):de=a.jsx("span",{className:"battle-diff-cell",style:Ge(ul(Fe)),children:Fe})}return a.jsx("td",{className:"col-abw",style:{verticalAlign:"middle"},children:de},"pp-d-"+ie.id)}),a.jsx("td",{className:"col-place",style:{verticalAlign:"middle"},children:a.jsx("input",{type:"number",min:"1",max:p.length,value:L??"",onChange:ie=>{const ae=parseInt(ie.target.value);oe(de=>({...de,years:de.years.map(ct=>{if(ct.id!==h.yearId)return ct;const vt={...ct.shows};return vt[s]=vt[s].map(We=>{if(We.id!==w.id)return We;const qt={...We};return ae>0?qt.place=ae:delete qt.place,qt}),{...ct,shows:vt}})}))},style:{width:46,height:36,fontSize:"1.1rem",fontWeight:700,fontFamily:"var(--number-font)",textAlign:"center",color:L==null?"var(--gold)":p.filter(ae=>ae.id!==w.id&&ae.place===L).length>0?"#ffb3c1":"var(--gold)",background:L==null?"linear-gradient(180deg, #2b1e0a 0%, #1a1106 50%, #0a0702 100%)":p.filter(ae=>ae.id!==w.id&&ae.place===L).length>0?"linear-gradient(180deg, #3a1a1a 0%, #2a0e0e 50%, #1a0505 100%)":"linear-gradient(180deg, #2b1e0a 0%, #1a1106 50%, #0a0702 100%)",border:L==null?"1.5px solid rgba(255,209,102,0.55)":p.filter(ae=>ae.id!==w.id&&ae.place===L).length>0?"1.5px solid rgba(255,77,109,0.9)":"1.5px solid rgba(255,209,102,0.55)",borderRadius:8,padding:0,boxShadow:L==null?"inset 0 1px 0 rgba(255,230,150,0.15), 0 0 10px rgba(255,209,102,0.08)":p.filter(ae=>ae.id!==w.id&&ae.place===L).length>0?"inset 0 1px 0 rgba(255,180,180,0.15), 0 0 16px rgba(255,77,109,0.5)":"inset 0 1px 0 rgba(255,230,150,0.15), 0 0 10px rgba(255,209,102,0.08)"}})})]},"pp-"+w.id)})})]})})]})}const se=e.jury.map(S=>{const H=_[S.id],R=S.id===n||N&&S.id==="j3",w=H??"–";let E="",I="var(--muted)";if(H!=null){const Z=wt(H),X=Z.match(/color:([^;]+)/);X&&(I=X[1]),E=Z.replace(/color:[^;]+;?/,"")}const L=g.songId?"rating_"+g.songId+"_"+S.id:"";return a.jsxs("div",{className:"live-jury-box"+(R?" editable":""),"data-live-flash-key":L||void 0,style:Ge(E),onClick:R?()=>q("rating",{eId:g.id,jurId:S.id}):void 0,title:R?"Punkte ändern":void 0,children:[a.jsx("div",{className:"jury-name",style:{color:I},children:ee(S.name)}),a.jsx("div",{className:"live-big-number",style:{color:I},children:w})]},S.id)}),$=[];if(B){const S=parseInt(B),H=S===1?"gold":S===2?"silver":S===3?"bronze":"",R=s==="sf1"?"SF1":"SF2";$.push(a.jsxs("div",{className:"live-current-place "+H,style:{marginRight:8,flexDirection:"column",padding:"6px 14px",lineHeight:1.1},children:[a.jsx("span",{style:{fontSize:"0.6rem",opacity:.8},children:R}),a.jsxs("span",{children:[B,"."]})]},"semi"))}if(Q){const S=parseInt(Q),H=S===1?"gold":S===2?"silver":S===3?"bronze":"";$.push(a.jsxs("div",{className:"live-current-place "+H,style:{flexDirection:"column",padding:"6px 14px",lineHeight:1.1},children:[a.jsx("span",{style:{fontSize:"0.6rem",opacity:.8},children:"GF"}),a.jsxs("span",{children:[Q,"."]})]},"final"))}const W=p.map((S,H)=>{const R=ye(S.songId),w=H===f,E=(()=>{if(s==="final")return H+1;const I=ye(p[H].songId);if(p[H].autoFinal!==void 0?p[H].autoFinal:I&&["de","fr","it","es","gb","kr"].indexOf(I.cc)!==-1)return"AQ";let Z=0;for(let X=0;X<=H;X++){const ie=ye(p[X].songId);(p[X].autoFinal!==void 0?p[X].autoFinal:ie&&["de","fr","it","es","gb","kr"].indexOf(ie.cc)!==-1)||Z++}return Z})();return a.jsxs("div",{onClick:()=>Mc(H),title:R?R.title:"Kein Song",style:{position:"relative",width:64,height:64,borderRadius:14,cursor:"pointer",background:w?"linear-gradient(145deg, rgba(255,209,102,0.25) 0%, rgba(30,18,60,0.98) 70%)":"linear-gradient(145deg, rgba(30,18,60,0.85) 0%, rgba(15,8,32,0.95) 100%)",border:w?"2.5px solid var(--gold)":"1.5px solid rgba(148,94,255,0.3)",boxShadow:w?"0 0 20px rgba(255,209,102,0.5), inset 0 1px 0 rgba(255,255,255,0.15)":"inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 6px rgba(0,0,0,0.3)",transition:"all 0.2s ease",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",flexShrink:0},onMouseEnter:I=>{w||(I.currentTarget.style.borderColor="rgba(168,85,247,0.7)",I.currentTarget.style.transform="scale(1.08)")},onMouseLeave:I=>{w||(I.currentTarget.style.borderColor="rgba(148,94,255,0.3)",I.currentTarget.style.transform="scale(1)")},children:[R?a.jsx("img",{src:`https://flagcdn.com/w80/${R.cc}.png`,alt:R.cc,style:{width:w?42:34,height:w?28:22,objectFit:"cover",borderRadius:4,boxShadow:"0 0 0 1.5px rgba(255,255,255,0.3)",filter:w?"none":"grayscale(0.4) brightness(0.85)",transition:"all 0.2s ease"}}):a.jsx("span",{style:{fontSize:"1.2rem",color:"var(--muted-dim)"},children:"–"}),a.jsx("div",{style:{position:"absolute",top:2,left:2,fontSize:"0.55rem",fontWeight:900,fontFamily:"var(--display)",padding:"1px 5px",borderRadius:5,background:w?"rgba(255,209,102,0.9)":"rgba(5,3,15,0.85)",color:w?"#1d1d1d":"var(--muted)",border:w?"1px solid #fff6cc":"1px solid rgba(255,255,255,0.15)",letterSpacing:"0.03em",lineHeight:1.2},children:E}),w&&a.jsx("div",{style:{position:"absolute",bottom:0,right:0,width:0,height:0,borderStyle:"solid",borderWidth:"0 0 16px 16px",borderColor:"transparent transparent var(--gold) transparent"}})]},S.id)});let V;k?V=a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",width:"100%",position:"relative",zIndex:1,paddingTop:10},children:[a.jsx("div",{className:"live-cc-badge",children:ee(Ti(k.cc))}),a.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[$.length>0&&a.jsx("div",{style:{display:"flex",gap:6,marginBottom:10,flexWrap:"wrap",justifyContent:"center"},children:$}),a.jsx("div",{style:{fontSize:"0.78rem",color:"var(--gold)",fontWeight:800,marginBottom:8,letterSpacing:"0.12em",textTransform:"uppercase",textShadow:"0 1px 2px rgba(0,0,0,0.8), 0 0 8px rgba(255,209,102,0.3)"},children:s==="final"?`● Now Playing · Startnummer ${F}`:j?"● Now Playing · Auto Qualifier":`● Now Playing · Startnummer ${F}`}),a.jsx("h2",{style:{fontSize:"2.5rem",margin:"0 0 6px",paddingBottom:"4px",fontWeight:800,letterSpacing:"-0.02em",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"#fff",lineHeight:1.2,textShadow:"0 1px 2px rgba(0,0,0,0.85)"},children:ee(k.title)}),a.jsxs("p",{style:{fontSize:"1.2rem",color:"#d8cdf0",margin:0,paddingBottom:"6px",fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textShadow:"0 1px 2px rgba(0,0,0,0.8)"},children:[ee(k.artist)," · ",ee(it[k.cc]||k.cc.toUpperCase())]})]})]}):V=a.jsxs("div",{style:{flex:1,textAlign:"center",padding:14},children:[a.jsxs("h3",{children:["Startnummer ",f+1]}),a.jsx("p",{className:"empty",style:{margin:"4px 0 14px"},children:"Kein Song zugewiesen."}),a.jsx("button",{className:"primary",onClick:()=>q("picker",{entryId:g.id}),children:"＋ Song hinzufügen"})]});const z=k?"https://flagcdn.com/"+k.cc+".svg":"";return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"live-mode-banner",style:{padding:"0",background:"transparent",border:"none",boxShadow:"none"},children:[a.jsxs("div",{style:{position:"relative"},children:[a.jsxs("div",{style:{position:"absolute",top:14,left:14,zIndex:10,display:"flex",alignItems:"center",gap:8,pointerEvents:"none"},children:[a.jsx("div",{className:"live-dot",style:{width:18,height:18,border:"2.5px solid var(--bg)",boxShadow:"0 0 12px rgba(255,45,149,0.8), 0 0 24px rgba(255,45,149,0.4)"},title:"Live"}),a.jsx("span",{style:{fontFamily:"var(--display)",fontWeight:900,fontSize:"0.75rem",letterSpacing:"0.16em",color:"var(--red)",textShadow:"0 0 10px rgba(255,45,149,0.9), 0 0 20px rgba(255,45,149,0.5)"},children:"LIVE"})]}),a.jsxs("div",{className:"live-current-card live-song-slide "+(T>0?"from-right":"from-left"),style:{"--live-flag-url":`url('${z}')`,padding:"56px 36px",minHeight:"280px",borderRadius:26},children:[a.jsxs("div",{style:{position:"absolute",top:16,right:16,display:"flex",gap:8,zIndex:10},children:[a.jsx("button",{onClick:Oc,title:"Vorheriger Song",style:{width:38,height:38,borderRadius:"50%",background:"rgba(5,3,15,0.85)",color:"#fff",fontWeight:800,fontSize:"1rem",border:"1.5px solid rgba(255,255,255,0.25)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,transition:"transform 0.15s ease, border-color 0.15s ease, background 0.15s ease",backdropFilter:"none"},onMouseEnter:S=>{S.currentTarget.style.transform="scale(1.1)",S.currentTarget.style.borderColor="var(--gold)",S.currentTarget.style.background="rgba(255,209,102,0.2)"},onMouseLeave:S=>{S.currentTarget.style.transform="scale(1)",S.currentTarget.style.borderColor="rgba(255,255,255,0.25)",S.currentTarget.style.background="rgba(5,3,15,0.85)"},children:"◀"}),a.jsx("button",{onClick:Ac,title:"Nächster Song",style:{width:38,height:38,borderRadius:"50%",background:"rgba(5,3,15,0.85)",color:"#fff",fontWeight:800,fontSize:"1rem",border:"1.5px solid rgba(255,255,255,0.25)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,transition:"transform 0.15s ease, border-color 0.15s ease, background 0.15s ease",backdropFilter:"none"},onMouseEnter:S=>{S.currentTarget.style.transform="scale(1.1)",S.currentTarget.style.borderColor="var(--gold)",S.currentTarget.style.background="rgba(255,209,102,0.2)"},onMouseLeave:S=>{S.currentTarget.style.transform="scale(1)",S.currentTarget.style.borderColor="rgba(255,255,255,0.25)",S.currentTarget.style.background="rgba(5,3,15,0.85)"},children:"▶"})]}),V]},f)]}),a.jsx("div",{className:"live-flow-jury",style:{display:"flex",gap:10,marginTop:16,flexWrap:"wrap"},children:se},"jury-"+f)]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:36,marginBottom:16},children:[a.jsx("h3",{style:{margin:0,fontSize:"1.2rem"},children:"Running Order"}),a.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:800,color:"var(--muted)",background:"var(--panel2-solid)",padding:"3px 10px",borderRadius:999,border:"1px solid var(--line)",letterSpacing:"0.08em"},children:[p.length," Songs"]})]}),a.jsx("div",{className:"live-flow-queue",style:{display:"flex",flexWrap:"wrap",gap:10,paddingTop:4,paddingBottom:8},children:W},"queue-"+f),s==="final"&&a.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:28,marginBottom:8},children:a.jsxs("button",{onClick:()=>oe(S=>({...S,livePredictionMode:!0})),style:{display:"inline-flex",alignItems:"center",gap:12,padding:"14px 36px",borderRadius:999,background:"linear-gradient(135deg, rgba(255,209,102,0.22) 0%, rgba(168,85,247,0.14) 100%)",color:"var(--gold)",border:"1.5px solid rgba(255,209,102,0.55)",fontWeight:800,fontSize:"0.95rem",letterSpacing:"0.06em",cursor:"pointer",transition:"all 0.25s ease",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.15), 0 6px 20px rgba(255,209,102,0.2)"},onMouseEnter:S=>{S.currentTarget.style.transform="translateY(-3px) scale(1.03)",S.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.2), 0 12px 32px rgba(255,209,102,0.4), 0 0 40px rgba(255,209,102,0.25)",S.currentTarget.style.borderColor="var(--gold)"},onMouseLeave:S=>{S.currentTarget.style.transform="translateY(0) scale(1)",S.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.15), 0 6px 20px rgba(255,209,102,0.2)",S.currentTarget.style.borderColor="rgba(255,209,102,0.55)"},title:"Live Prediction-Ansicht öffnen",children:[a.jsx("span",{style:{fontSize:"1.2rem"},children:"🎯"}),a.jsx("span",{children:"Live Prediction Battle"}),a.jsx("span",{style:{fontSize:"0.8rem",opacity:.7},children:"→"})]})}),s==="final"&&e.livePredictionMode&&a.jsxs("div",{style:{marginTop:32},children:[a.jsx("h3",{style:{marginBottom:16,fontSize:"1.3rem"},children:"🎯 Live Prediction-Übersicht"}),a.jsx("p",{className:"hint",style:{marginBottom:16},children:"Trage die tatsächlichen Plätze ein und sieh die Abweichungen der Tipps."}),a.jsx("div",{style:{background:"linear-gradient(145deg, rgba(25,14,52,0.95) 0%, rgba(10,5,22,0.98) 100%)",border:"1px solid rgba(94,58,168,0.3)",borderRadius:18,overflow:"hidden"},children:a.jsxs("table",{className:"sb-table battle-table",style:{width:"100%",tableLayout:"fixed"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{paddingLeft:15,width:"auto"},children:"Song"}),e.jury.map(S=>a.jsx("th",{className:"c col-tipp",style:{width:60},children:ee(S.name)},"pred-h-g-"+S.id)),e.jury.map(S=>a.jsx("th",{className:"c col-abw",style:{width:55},children:ee(S.name)},"pred-h-d-"+S.id)),a.jsx("th",{className:"c col-place",style:{width:55},children:"Platz"})]})}),a.jsx("tbody",{children:p.map(S=>{const H=ye(S.songId);if(!H)return null;const R=e.pred[S.id]||{},w=S.place;return a.jsxs("tr",{children:[a.jsx("td",{style:{padding:"8px 10px",position:"relative"},children:H&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx(Tt,{cc:H.cc}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",lineHeight:1.15},children:[a.jsx("span",{style:{fontFamily:"var(--display)",fontWeight:700,fontSize:"0.9rem",color:"var(--ink)"},children:ee(H.title)}),a.jsx("span",{style:{fontSize:"0.72rem",color:"var(--muted)"},children:ee(H.artist)})]})]})}),e.jury.map(E=>{const I=R[E.id],L=E.id===n;return a.jsx("td",{className:"col-tipp",style:{textAlign:"center"},children:a.jsx("input",{type:"number",min:"1",max:p.length,value:I??"",className:"battle-input",readOnly:!L&&!N,disabled:!L&&!N,onChange:Z=>{const X=parseInt(Z.target.value);oe(ie=>{const ae={...ie,pred:{...ie.pred}};return ae.pred[S.id]={...ae.pred[S.id]||{}},X>0?ae.pred[S.id][E.id]=X:delete ae.pred[S.id][E.id],ae})},style:{background:L||N?"var(--panel2-solid)":"transparent",border:L||N?"1px solid var(--line)":"1px solid transparent",opacity:L||N?1:.5}})},"pred-g-"+E.id)}),e.jury.map(E=>{const I=R[E.id];let L=a.jsx("span",{style:{color:"var(--muted)"},children:"–"});if(I!=null&&w!==void 0&&w!==null){const Z=Math.abs(I-w);Z===0?L=a.jsx("span",{className:"battle-diff-cell",style:Ge(wt(10)),children:"🎯"}):L=a.jsx("span",{className:"battle-diff-cell",style:Ge(ul(Z)),children:Z})}return a.jsx("td",{className:"col-abw",children:L},"pred-d-"+E.id)}),a.jsx("td",{className:"col-place",children:a.jsx("input",{type:"number",min:"1",max:p.length,value:w??"",onChange:E=>{const I=parseInt(E.target.value);oe(L=>({...L,years:L.years.map(X=>{if(X.id!==h.yearId)return X;const ie={...X.shows};return ie[s]=ie[s].map(ae=>{if(ae.id!==S.id)return ae;const de={...ae};return I>0?de.place=I:delete de.place,de}),{...X,shows:ie}})}))},style:{width:45,height:34,fontSize:"1rem",fontWeight:700,fontFamily:"var(--number-font)",textAlign:"center",color:"var(--gold)",background:"linear-gradient(180deg, #2b1e0a 0%, #1a1106 50%, #0a0702 100%)",border:"1.5px solid rgba(255,209,102,0.55)",borderRadius:8,padding:0}})})]},"pred-"+S.id)})})]})})]})]})},op=()=>{const s=ve(h.yearId);if(!s)return ns();let c=h.tab;!s.shows[c]&&c!=="overview"&&c!=="battle"&&c!=="sb"&&(c=s.shows.sf1?"sf1":s.shows.sf2?"sf2":s.shows.final?"final":"overview");const p=Lc();let f;s.shows[c]&&p?f=lp(c):s.shows[c]?f=up(c):c==="overview"?f=dp():c==="battle"?f=cp():c==="sb"&&(f=pp());const g=s.year+(s.suffix?" ("+s.suffix+")":""),y=!!s.shows.sf1,j=!!s.shows.sf2,P=!!s.shows.final,F=a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:18,flexWrap:"wrap",gap:12},children:[a.jsxs("button",{onClick:mr,style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px 9px 14px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",fontWeight:700,fontSize:"0.85rem",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:V=>{V.currentTarget.style.transform="translateX(-2px)",V.currentTarget.style.borderColor="rgba(168,85,247,0.7)",V.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:V=>{V.currentTarget.style.transform="translateX(0)",V.currentTarget.style.borderColor="rgba(148,94,255,0.35)",V.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[a.jsx("span",{style:{fontSize:"1rem",lineHeight:1},children:"←"})," Zurück"]}),a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[a.jsx("button",{className:"ghost "+(h.editMode?"primary":""),onClick:_c,children:"✏️ Edit"}),h.editMode&&a.jsx("button",{className:"ghost sm",onClick:()=>q("editDates"),title:"Show-Daten eintragen",children:"📅 Dates"}),!p&&h.editMode&&a.jsxs(a.Fragment,{children:[y?a.jsx("button",{className:"ghost sm danger",onClick:()=>_a("sf1"),children:"− SF1"}):a.jsx("button",{className:"ghost sm",onClick:()=>La("sf1"),children:"＋ SF1"}),j?a.jsx("button",{className:"ghost sm danger",onClick:()=>_a("sf2"),children:"− SF2"}):a.jsx("button",{className:"ghost sm",onClick:()=>La("sf2"),children:"＋ SF2"}),P?a.jsx("button",{className:"ghost sm danger",onClick:()=>_a("final"),children:"− Final"}):a.jsx("button",{className:"ghost sm",onClick:()=>La("final"),children:"＋ Final"}),a.jsx("button",{className:"ghost sm danger",onClick:Wc,children:"Contest löschen"})]})]})]});let k=null;if(s.city||s.hostCc){const V=h.editMode?a.jsx("button",{className:"ghost sm",onClick:()=>q("editCity"),style:{padding:"2px 8px",fontSize:"0.72rem",marginLeft:6},title:"Host ändern",children:"✏️"}):null;k=a.jsxs("div",{className:"host-pill",children:[a.jsx("div",{className:"host-pill-flag",children:s.hostCc?a.jsx(Tt,{cc:s.hostCc}):"🌍"}),a.jsx("div",{className:"host-pill-divider"}),a.jsxs("div",{className:"host-pill-text",children:[s.hostCc&&a.jsx("span",{className:"host-pill-cc",children:ee(it[s.hostCc]||s.hostCc.toUpperCase())}),s.city&&a.jsx("span",{className:"host-pill-city",children:ee(s.city)})]}),V]})}else h.editMode&&(k=a.jsx("div",{style:{textAlign:"center",margin:"10px 0 22px"},children:a.jsx("button",{className:"ghost sm",onClick:()=>q("editCity"),children:"＋ Host City hinzufügen"})}));const _=a.jsxs(a.Fragment,{children:[a.jsxs("h1",{className:"yeartitle",style:{marginBottom:k?4:24},children:["Eurovision ",ee(g)]}),k]}),B=p?{background:"rgba(255,255,255,0.04)",color:"var(--muted)",borderColor:"rgba(148,94,255,0.25)",fontWeight:600,fontSize:"0.82rem",padding:"7px 14px",opacity:.75}:{background:"linear-gradient(135deg, rgba(255,45,149,0.14) 0%, rgba(168,85,247,0.1) 100%)",color:"#ffd6ea",borderColor:"rgba(255,45,149,0.35)",fontWeight:700,fontSize:"0.85rem",padding:"8px 18px",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(255,45,149,0.12)"},se=(e.liveState[h.yearId]||{}).activeTab,$=a.jsxs("div",{className:"tabs",children:[y&&a.jsx("button",{className:(h.tab==="sf1"?"on":"")+(se==="sf1"?" live-active":""),onClick:()=>Gt("sf1"),children:"Semi-final 1"}),j&&a.jsx("button",{className:(h.tab==="sf2"?"on":"")+(se==="sf2"?" live-active":""),onClick:()=>Gt("sf2"),children:"Semi-final 2"}),P&&a.jsx("button",{className:(h.tab==="final"?"on":"")+(se==="final"?" live-active":"")+" final-tab",onClick:()=>Gt("final"),children:"Grand Final"})]}),W=a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,marginBottom:20,borderBottom:"1px solid var(--line)",paddingBottom:16},children:[$,a.jsx("div",{style:{display:"flex",alignItems:"center"},children:s.shows[h.tab]&&a.jsx("button",{onClick:Fc,style:B,onMouseEnter:V=>{p?(V.currentTarget.style.opacity="1",V.currentTarget.style.borderColor="rgba(255,77,109,0.6)",V.currentTarget.style.color="#ffb3c1"):(V.currentTarget.style.transform="translateY(-1px)",V.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(255,45,149,0.22)")},onMouseLeave:V=>{p?(V.currentTarget.style.opacity="0.75",V.currentTarget.style.borderColor="rgba(148,94,255,0.25)",V.currentTarget.style.color="var(--muted)"):(V.currentTarget.style.transform="translateY(0)",V.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(255,45,149,0.12)")},title:p?"Live-Modus verlassen":"Live-Modus starten",children:p?a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,opacity:.9},children:[a.jsx("span",{style:{fontSize:"0.7rem",letterSpacing:"0.1em"},children:"●"}),a.jsx("span",{style:{fontSize:"0.78rem",letterSpacing:"0.04em"},children:"Live verlassen"})]}):a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:7},children:[a.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",background:"var(--red)",boxShadow:"0 0 8px var(--red)"}}),a.jsx("span",{style:{letterSpacing:"0.03em"},children:"Live Mode"})]})})}),a.jsxs("div",{className:"tabs",children:[a.jsx("button",{className:h.tab==="battle"?"on":"",onClick:()=>Gt("battle"),children:"Points Battle"}),a.jsx("button",{className:h.tab==="sb"?"on":"",onClick:()=>Gt("sb"),children:"Scoreboard"})]})]});return a.jsxs(a.Fragment,{children:[F,_,W,f]})},sp=()=>{const s=ve(h.yearId);if(!s)return null;const c=[];for(const p in Ii)s.shows[p]&&c.push(a.jsx("button",{className:h.sbShow===p?"on":"",onClick:()=>M(f=>({...f,sbShow:p})),children:Ii[p]},p));return c.push(a.jsx("button",{className:h.sbShow==="all"?"on":"",onClick:()=>M(p=>({...p,sbShow:"all"})),children:"All Songs"},"all")),a.jsx("div",{className:"seg",children:c})};function Ge(s){if(!s)return{};const c={};return s.split(";").forEach(p=>{const[f,...g]=p.split(":");if(!f||!g.length)return;const y=f.trim().replace(/-([a-z])/g,(j,P)=>P.toUpperCase());c[y]=g.join(":").trim()}),c}const dp=()=>{const s=ve(h.yearId),c=Pa(),p=!!(s.shows.sf1||s.shows.sf2),f=p?a.jsxs("div",{className:"tabs",style:{border:"none",margin:"18px 0"},children:[a.jsx("button",{className:h.ovSubTab==="semis"?"on":"",onClick:()=>M(F=>({...F,ovSubTab:"semis"})),children:"Semi-finals"}),a.jsx("button",{className:h.ovSubTab==="final"?"on":"",onClick:()=>M(F=>({...F,ovSubTab:"final"})),children:"Grand Final"})]}):null,g=F=>a.jsx("div",{style:{display:"flex",gap:3,marginBottom:8,justifyContent:F?"flex-end":"flex-start",padding:"0 2px"},children:e.jury.map((k,_)=>a.jsx("div",{style:{width:30,textAlign:"center",fontSize:"0.68rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.05em"},title:ee(k.name),children:ee(c[_])},k.id))}),y=F=>{const k=tt(F);return a.jsx("div",{className:"ov-pts",children:e.jury.map(_=>{const B=k[_.id],Q=B?Ge(wt(B)):{};return a.jsx("span",{className:"ov-pt"+(B!=null?"":" none"),style:Q,children:B??""},_.id)})})};if(h.ovSubTab==="final"||!p){const F=s.shows.final||[];return a.jsxs(a.Fragment,{children:[a.jsx("h2",{children:"Overview"}),a.jsx("p",{className:"hint",children:"Everyone's points side by side. Disqualified or non-qualifying countries are greyed out."}),f,a.jsxs("div",{className:"card",style:{marginTop:18},children:[a.jsx("h3",{style:{textAlign:"center",marginBottom:14,fontSize:"1.1rem"},children:"Grand Final"}),g(!1),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:F.map(k=>{const _=ye(k.songId),B=k.dq;return a.jsxs("div",{className:"ov-row-item",children:[y(k),_?a.jsx("span",{className:"ov-pill"+(B?" out":""),children:a.jsxs("div",{className:"song-info",children:[a.jsx(Tt,{cc:_.cc}),a.jsx("span",{children:a.jsx("b",{children:ee(_.title)})})]})}):a.jsx("span",{className:"ov-pill out",children:a.jsx("div",{className:"song-info",children:a.jsx("span",{children:"–"})})}),a.jsx("div",{style:{flexGrow:1}}),a.jsx("span",{className:"ov-place",children:k.place?k.place+".":"–"})]},k.id)})})]})]})}const j=(F,k,_)=>{const B=s.shows[F]||[];return a.jsxs("div",{className:"ov-column",children:[a.jsx("div",{className:"ov-col-title",children:k}),g(_),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:B.map(Q=>{const se=ye(Q.songId),$=Q.place&&Q.place>10||Q.dq,W=a.jsx("span",{className:"ov-place",children:Q.place?Q.place+".":"–"}),V=se?a.jsx("span",{className:"ov-pill"+($?" out":""),children:a.jsxs("div",{className:"song-info",children:[a.jsx(Tt,{cc:se.cc}),a.jsx("span",{children:a.jsx("b",{children:ee(se.title)})})]})}):a.jsx("span",{className:"ov-pill out",children:a.jsx("div",{className:"song-info",children:a.jsx("span",{children:"–"})})}),z=y(Q);return a.jsx("div",{className:"ov-row-item",children:_?a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{flexGrow:1}}),W,V,z]}):a.jsxs(a.Fragment,{children:[z,V,a.jsx("div",{style:{flexGrow:1}}),W]})},Q.id)})})]})};let P;return s.shows.sf1&&s.shows.sf2?P=a.jsxs(a.Fragment,{children:[j("sf1","Semi-final 1",!1),j("sf2","Semi-final 2",!0)]}):s.shows.sf1?P=j("sf1","Semi-final 1",!1):s.shows.sf2&&(P=j("sf2","Semi-final 2",!1)),a.jsxs(a.Fragment,{children:[a.jsx("h2",{children:"Overview"}),a.jsx("p",{className:"hint",children:"Everyone's points side by side. Disqualified or non-qualifying countries are greyed out."}),f,a.jsx("div",{className:"ov-grid-side",children:P})]})},up=s=>{const c=ve(h.yearId),p=c.shows[s]||[],f=Pa(),g={};e.jury.forEach(R=>{g[R.id]=0}),p.forEach(R=>{if(R.songId){const w=tt(R);e.jury.forEach(E=>{w[E.id]&&(g[E.id]+=w[E.id])})}});let y=-1,j=99999;for(const R in g)g[R]>y&&(y=g[R]),g[R]<j&&(j=g[R]);(y===j||y===0)&&(y=-1,j=99999);const P={};e.jury.forEach(R=>{P[R.id]={correct:0,totalGuessed:0}}),s!=="final"&&p.forEach(R=>{const w=Y(R),E=R.place!==void 0&&R.place!==null?R.place>10:null;E!==null&&e.jury.forEach(I=>{w[I.id]===!1&&(P[I.id].totalGuessed++,E===!0&&P[I.id].correct++)})});const F=a.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:e.jury.map(R=>{const w=g[R.id];let E="var(--cyan)";w===y&&(E="var(--green)"),w===j&&(E="#ffb3c1");let I=null;if(s!=="final"){const L=P[R.id],Z=L.totalGuessed>0&&L.correct===L.totalGuessed?"var(--gold)":"var(--muted)";I=a.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:700,borderLeft:"1px solid var(--line)",paddingLeft:8,color:Z},children:[L.correct," / ",L.totalGuessed," NQs"]})}return a.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:"1px solid rgba(94,58,168,0.4)",padding:"7px 16px",borderRadius:999,fontSize:"0.83rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:8,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[a.jsx("span",{style:{color:"var(--ink)"},children:ee(R.name)}),a.jsxs("span",{style:{color:E},children:[w," pts"]}),I]},R.id)})});let k=p.slice();s!=="final"&&h.subTab==="tips"&&(k=k.filter(R=>{const w=ye(R.songId);return!(R.autoFinal!==void 0?R.autoFinal:w&&["de","fr","it","es","gb","kr"].indexOf(w.cc)!==-1)})),h.sortMode==="place"&&k.sort((R,w)=>{const E=ye(R.songId),I=ye(w.songId),L=R.autoFinal!==void 0?R.autoFinal:E&&["de","fr","it","es","gb","kr"].indexOf(E.cc)!==-1,Z=w.autoFinal!==void 0?w.autoFinal:I&&["de","fr","it","es","gb","kr"].indexOf(I.cc)!==-1;if(s!=="final"&&L!==Z)return L?-1:1;const X=R.place!==void 0&&R.place!==null?R.place:9999,ie=w.place!==void 0&&w.place!==null?w.place:9999;return X!==ie?X-ie:p.indexOf(R)-p.indexOf(w)});const _={};p.forEach(R=>{R.place&&(_[R.place]=(_[R.place]||0)+1)});const B=s!=="final"?a.jsxs("div",{className:"tabs edle-slider",style:{border:"none",margin:0,padding:4,borderRadius:999,display:"inline-flex",gap:4},children:[a.jsx("button",{className:h.subTab!=="tips"?"on":"",style:{border:"none",margin:0},onClick:()=>M(R=>({...R,subTab:"points"})),children:"Points"}),a.jsx("button",{className:h.subTab==="tips"?"on":"",style:{border:"none",margin:0},onClick:()=>M(R=>({...R,subTab:"tips"})),children:"NQ Tips"})]}):null,Q=a.jsxs("div",{className:"tabs edle-slider",style:{border:"none",margin:0,padding:4,borderRadius:999,display:"inline-flex",gap:4},children:[a.jsx("button",{className:h.sortMode==="order"?"on":"",style:{border:"none",margin:0},onClick:()=>M(R=>({...R,sortMode:"order"})),children:"Order"}),a.jsx("button",{className:h.sortMode==="place"?"on":"",style:{border:"none",margin:0},onClick:()=>M(R=>({...R,sortMode:"place"})),children:"Placement"})]});let se=null;if(h.editMode&&k.length>1){c.splitAfter=c.splitAfter||{};const R=Math.floor(k.length/2),w=c.splitAfter[s]!==void 0?c.splitAfter[s]:R;se=a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:"0.85rem",color:"var(--muted)",background:"var(--panel2-solid)",padding:"5px 12px",borderRadius:999,border:"1px solid var(--line)"},children:[a.jsx("span",{children:"1. Hälfte bis Nr.:"}),a.jsx("input",{type:"number",min:"1",max:k.length-1,value:w,onChange:E=>{oe(I=>({...I,years:I.years.map(L=>L.id===h.yearId?{...L,splitAfter:{...L.splitAfter||{},[s]:parseInt(E.target.value)||1}}:L)}))},style:{width:58,height:34,textAlign:"center",fontWeight:700,padding:0}})]})}const $=a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"18px 0 16px",flexWrap:"wrap",gap:14},children:[a.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap",flex:1,justifyContent:"flex-start"},children:[B,se]}),a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:"auto"},children:F}),a.jsx("div",{style:{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap",flex:1,justifyContent:"flex-end"},children:Q})]}),W=[],V=[];c.splitAfter=c.splitAfter||{};const z=c.splitAfter[s]!==void 0?c.splitAfter[s]:Math.floor(k.length/2);for(let R=0;R<k.length;R++){const w=k[R],E=R+1,I=p.indexOf(w),L={item:w,index:I!==-1?I:R};E>z&&h.sortMode==="order"||h.sortMode==="place"&&R>=Math.ceil(k.length/2)?V.push(L):W.push(L)}const S=R=>{const w=R.item,E=R.index,I=ye(w.songId),L=tt(w),Z=Y(w),X=w.autoFinal!==void 0?w.autoFinal:I&&["de","fr","it","es","gb","kr"].indexOf(I.cc)!==-1,ie=w.place!==void 0&&w.place!==null?w.place<=10:null;let ae;if(s!=="final"&&h.subTab==="tips")if(X)ae=a.jsx("div",{className:"tiles",children:a.jsx("div",{className:"tile aq-tile",title:"Auto Qualifier – direkt fürs Finale gesetzt",children:a.jsx("div",{className:"tile-value",children:"AQ"})})});else{const Sn=e.jury.map((ge,Et)=>{const Le=Z[ge.id],rt=ge.id===n||N;let yt="var(--panel2-solid)",Cn="2.5px solid transparent",yr="";Le===!1&&(Cn="2.5px solid #ff4d6d",yt="rgba(255,77,109,0.35)"),ie!==null&&Le!==void 0&&Le===!1&&(ie===!1?(yt="linear-gradient(135deg,#22c55e,#16a34a)",Cn="2.5px solid #4ade80"):(yt="linear-gradient(135deg,#ff4d6d,#dc2626)",Cn="2.5px solid #ffb3c1")),Le===void 0&&(yr=rt?" tip-hidden":" tip-permanently-hidden");const Fa=f[Et];return a.jsx("button",{className:"tile nq-tip-tile "+(rt?"me":"empty")+yr,style:{background:yt,border:Cn,cursor:rt?"pointer":"default",pointerEvents:rt?"auto":"none",position:"relative",fontStyle:"normal",display:"flex",alignItems:"center",justifyContent:"center",width:"46px",height:"50px",minHeight:"50px",maxHeight:"50px",padding:0,boxSizing:"border-box"},onClick:rt?()=>Dc(w.id,ge.id):void 0,title:ee(ge.name),children:a.jsx("div",{style:{fontFamily:"var(--body)",fontWeight:800,fontSize:"1.05rem",color:Le!==void 0?"#fff":"var(--muted)",textShadow:Le!==void 0?"0 1px 3px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.5)":"0 1px 2px rgba(0,0,0,0.5)",letterSpacing:"0.03em",lineHeight:1,opacity:Le!==void 0?1:.4,fontStyle:"normal",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"},children:Fa})})}),Jt=e.jury.map(ge=>L[ge.id]).filter(ge=>ge),jn=Jt.reduce((ge,Et)=>ge+Et,0),vr=Jt.length?jn/Jt.length:null;ae=a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"tiles",children:Sn}),a.jsxs("div",{className:"avg",children:[a.jsx("b",{children:vr==null?"–":vr.toFixed(1)}),a.jsx("small",{children:"AVG"})]})]})}else{const Sn=e.jury.map(ge=>L[ge.id]).filter(ge=>ge),Jt=Sn.reduce((ge,Et)=>ge+Et,0),jn=Sn.length?Jt/Sn.length:null,vr=e.jury.map((ge,Et)=>{const Le=L[ge.id],rt=N||ge.id===n,yt="tile"+(rt?" me":"")+(Le!=null?"":" empty")+(rt?"":" readonly"),Cn=Le?Ge(wt(Le)):{},yr=w.songId?"rating_"+w.songId+"_"+ge.id:"",Fa=f[Et],rs=a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"tile-value",style:{position:"relative",zIndex:1},children:Le??"–"}),a.jsx("div",{style:{position:"absolute",bottom:2,right:4,fontFamily:"var(--body)",fontWeight:800,fontSize:"0.58rem",color:"rgba(0,0,0,0.55)",textShadow:"0 1px 0 rgba(255,255,255,0.3)",lineHeight:1,letterSpacing:"0.03em",zIndex:2,pointerEvents:"none",fontStyle:"normal"},children:Fa})]}),Ep=I&&rt?a.jsx("button",{className:yt,"data-flash-key":yr||void 0,style:{...Cn,position:"relative"},onClick:()=>q("rating",{eId:w.id,jurId:ge.id}),title:ee(ge.name),children:rs}):a.jsx("div",{className:yt,"data-flash-key":yr||void 0,style:{...Cn,position:"relative"},title:ee(ge.name),children:rs});return a.jsx("div",{children:Ep},ge.id)});ae=a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"tiles",children:vr}),a.jsxs("div",{className:"avg",children:[a.jsx("b",{children:jn==null?"–":jn.toFixed(1)}),a.jsx("small",{children:"AVG"})]})]})}const de=s!=="final"&&X?a.jsx("span",{className:"autofinal",title:"Auto Qualifier",children:"AQ"}):null,Fe=w.place!==void 0&&w.place!==null?w.place:"",ct=w.customNo!==void 0&&w.customNo!==null&&w.customNo!==""?parseFloat(w.customNo):Hr(w.id),vt=ct%1!==0?"➔":ct;let We=s!=="final"&&w.place!==void 0&&w.place!==null&&w.place>10;s==="final"&&(We=!1);let qt=(w.place===1?" winner":"")+(We?" out":"")+(w.dq?" dq":"")+(s!=="final"&&X&&w.place!==1?" autofinal-row":"");s!=="final"&&X&&!We&&(qt+=" aq-row");const xr=h.editMode?a.jsxs("div",{className:"sm-group",children:[a.jsx("button",{className:"ghost sm",onClick:()=>Vc(s,E),children:"▲"}),a.jsx("button",{className:"ghost sm",onClick:()=>$c(s,E),children:"▼"}),a.jsx("button",{className:"ghost sm",onClick:()=>q("picker",{entryId:w.id}),children:"Change"}),a.jsx("button",{className:"ghost sm danger",onClick:()=>Kc(w.id),children:w.dq?"Undq":"DQ"})]}):null,ci=I?a.jsxs("div",{className:"meta",children:[a.jsxs("span",{children:[a.jsx("b",{children:ee(I.title)})," – ",ee(I.artist)]}),de,xr]}):a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("button",{className:"primary sm",onClick:()=>q("picker",{entryId:w.id}),children:"＋ Song"}),xr]}),kn=s!=="final"&&X?a.jsxs("div",{className:"pl",style:{opacity:0,pointerEvents:"none"},children:[a.jsx("input",{type:"number",disabled:!0}),a.jsx("small",{children:"PLACE"})]}):a.jsxs("div",{className:"pl",children:[a.jsx("input",{type:"number",min:"1",max:k.length,placeholder:"–",value:Fe,className:w.place&&_[w.place]>1?"dup":"",disabled:!I,onChange:Sn=>{const Jt=parseInt(Sn.target.value);oe(jn=>({...jn,years:jn.years.map(ge=>{const Et={};for(const Le in ge.shows)Et[Le]=ge.shows[Le].map(rt=>{if(rt.id!==w.id)return rt;const yt={...rt};return Jt>0?yt.place=Jt:delete yt.place,yt});return{...ge,shows:Et}})}))},"aria-label":"Place"}),a.jsx("small",{children:"PLACE"})]}),Np=I&&I.cc?{"--flag-url":`url('https://flagcdn.com/${I.cc}.svg')`}:{},zp=I&&I.cc?a.jsx("div",{className:"cc-code",children:ee(Ti(I.cc))}):null;return a.jsxs("div",{className:"row "+qt,style:Np,children:[zp,a.jsx("div",{className:"no",onClick:()=>q("editNo",{eId:w.id}),title:"Change order/status",children:ee(vt)}),a.jsx("div",{className:"row-content",children:ci}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{className:"stats",children:ae}),kn]})]},w.id)},H=h.editMode?a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:()=>Qc(s),children:"＋ Running Order"}),a.jsx("button",{className:"ghost",onClick:()=>Yc(s),children:"− Remove Last"})]}):null;return a.jsxs(a.Fragment,{children:[$,a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",color:"var(--muted)",fontWeight:700,fontSize:"0.78rem",padding:"0 4px",margin:"14px 0 8px",letterSpacing:"0.08em",textTransform:"uppercase"},children:[a.jsx("div",{children:"1st Half"}),a.jsx("div",{children:"2nd Half"})]}),a.jsxs("div",{className:"list",style:{marginTop:0},children:[a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:W.map(R=>S(R))}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:V.map(R=>S(R))})]}),H]})},cp=()=>{const p=(ve(h.yearId).shows.final||[]).filter($=>ye($.songId)&&!$.dq);p.sort(($,W)=>{const V=$.place!==void 0&&$.place!==null?$.place:9999,z=W.place!==void 0&&W.place!==null?W.place:9999;return V-z});const f=!!e.battleHidden,g=N?"j3":n,y=[...e.jury].sort(($,W)=>$.id.localeCompare(W.id)),j={};e.jury.forEach($=>{const W={};p.forEach(V=>{const z=(e.pred[V.id]||{})[$.id];z&&(W[z]=(W[z]||0)+1)}),j[$.id]=W});const P={};e.jury.forEach($=>{P[$.id]={sum:0,count:0}});const F=p.map($=>{const W=ye($.songId),V=e.pred[$.id]||{},z=$.place,S=y.map(E=>{const I=V[E.id],L=E.id===g;if(f&&!L)return a.jsx("td",{style:{textAlign:"center"},children:a.jsx("span",{className:"hidden-pred",children:"•••"})},"guess-"+E.id);const X=I??"",ie=I&&j[E.id][I]>1,ae=N||L;return a.jsx("td",{className:"col-tipp",children:(()=>{const de=parseInt(X),Fe=de===1?" podium-1":de===2?" podium-2":de===3?" podium-3":"",ct="battle-input"+(ie?" dup":"")+Fe,vt=!ae,We=vt&&!Fe?{background:"transparent",border:"1px solid transparent",width:45,height:34,fontSize:"1rem"}:{width:45,height:34,fontSize:"1rem",opacity:vt?.8:1};return a.jsx("input",{type:"number",min:"1",max:p.length,value:X,className:ct,readOnly:!ae,disabled:!ae,onChange:qt=>{const xr=parseInt(qt.target.value);oe(ci=>{const kn={...ci,pred:{...ci.pred}};return kn.pred[$.id]={...kn.pred[$.id]||{}},xr>0?kn.pred[$.id][E.id]=xr:delete kn.pred[$.id][E.id],kn})},style:We})})()},"guess-"+E.id)}),H=y.map(E=>{const I=V[E.id];let L=a.jsx("span",{style:{color:"var(--muted)"},children:"–"});if(I!=null&&z!==void 0&&z!==null){const Z=Math.abs(I-z);P[E.id].sum+=Z,P[E.id].count++,Z===0?L=a.jsx("span",{className:"battle-diff-cell",style:Ge(wt(10)),children:"🎯"}):L=a.jsx("span",{className:"battle-diff-cell",style:Ge(ul(Z)),children:Z})}return a.jsx("td",{className:"col-abw",children:L},"diff-"+E.id)}),R=z??"–",w=W&&W.cc?{"--flag-url":`url('https://flagcdn.com/${W.cc}.svg')`}:{};return a.jsxs("tr",{children:[a.jsxs("td",{style:{...w,position:"relative",overflow:"hidden",padding:0,borderBottom:"1px solid var(--line)"},children:[a.jsx("div",{style:{position:"absolute",left:0,top:"4px",bottom:"4px",width:"200px",backgroundImage:"var(--flag-url)",backgroundSize:"cover",backgroundPosition:"center",maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",opacity:.65,pointerEvents:"none",zIndex:0,borderRadius:"6px"}}),W&&a.jsx("div",{className:"cc-code",style:{position:"absolute",left:38,top:"50%",transform:"translateY(-50%)",zIndex:1,margin:0},children:ee(Ti(W.cc))}),a.jsx("div",{style:{position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"flex-end",textAlign:"right",padding:"8px 10px",minHeight:54},children:W?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"sb-title",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.9rem"},children:ee(W.title)}),a.jsx("div",{className:"sb-artist",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.75rem"},children:ee(W.artist)})]}):null})]}),S,H,a.jsx("td",{className:"col-place",style:{textAlign:"center",verticalAlign:"middle"},children:a.jsx("input",{type:"number",min:"1",max:p.length,value:R==="–"?"":R,onChange:E=>{const I=parseInt(E.target.value);oe(L=>({...L,years:L.years.map(X=>{if(X.id!==h.yearId)return X;const ie={...X.shows};return ie.final=ie.final.map(ae=>{if(ae.id!==$.id)return ae;const de={...ae};return I>0?de.place=I:delete de.place,de}),{...X,shows:ie}})}))},className:"battle-input"+(parseInt(R)===1?" podium-1":parseInt(R)===2?" podium-2":parseInt(R)===3?" podium-3":""),style:{width:45,height:38,fontSize:"1.2rem",fontWeight:700,color:"var(--gold)",background:"linear-gradient(180deg, #2b1e0a 0%, #1a1106 50%, #0a0702 100%)",border:"1.5px solid rgba(255,209,102,0.55)",borderRadius:8,padding:0}})})]},$.id)}),k=[];e.jury.forEach($=>{P[$.id].count>0&&k.push({name:$.name,sum:P[$.id].sum,count:P[$.id].count,id:$.id})}),k.sort(($,W)=>$.sum-W.sum);let _;if(k.length>0){const $=k[0],W=["🥈","🥉"];_=a.jsxs("div",{style:{marginTop:24},children:[a.jsxs("div",{className:"battle-podium-winner",children:[a.jsx("div",{className:"medal",children:"🥇"}),a.jsx("div",{className:"name",children:ee($.name)}),a.jsx("div",{className:"score",children:$.sum}),a.jsxs("div",{className:"label",children:["🎯 Winner · ",$.count," Tipps verglichen"]})]}),k.length>1&&a.jsx("div",{className:"battle-runner-ups",children:k.slice(1).map((V,z)=>{const S=z<2?W[z]:null,H=z===0?"2nd Place":z===1?"3rd Place":z+2+"th Place";return a.jsxs("div",{className:"battle-runner-up",children:[S?a.jsx("div",{className:"medal",children:S}):a.jsx("div",{className:"medal",style:{fontFamily:"var(--number-font)",fontSize:"1.5rem",color:"var(--muted)"},children:z+2}),a.jsx("div",{className:"name",children:ee(V.name)}),a.jsx("div",{className:"score",children:V.sum}),a.jsx("div",{className:"label",children:H})]},V.id)})})]})}else _=a.jsx("p",{className:"empty",style:{padding:"30px 0"},children:"Trage die Tipps und tatsächlichen Plätze ein, um das Leaderboard zu sehen."});const B=a.jsx("button",{onClick:Rc,style:{padding:"7px 16px",fontSize:"0.85rem",fontWeight:700,...f?{background:"linear-gradient(135deg,#ff2d95,#a855f7)",borderColor:"transparent",color:"#fff"}:{background:"var(--panel2-solid)",color:"var(--muted)"}},children:f?"👁️ Tipps anzeigen":"🙈 Tipps verbergen"}),Q=a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12,marginBottom:20},children:[a.jsxs("div",{children:[a.jsx("h2",{style:{margin:"0 0 4px"},children:"Points Battle"}),a.jsx("p",{className:"hint",style:{margin:0},children:"Trage die Tipps ein — die Abweichung siehst du rechts. 🎯 = Volltreffer."})]}),a.jsx("div",{children:B})]}),se=a.jsxs("tr",{children:[a.jsx("th",{style:{paddingLeft:15},children:"Song"}),y.map($=>a.jsx("th",{className:"c col-tipp",children:ee($.name)},"h-g-"+$.id)),y.map($=>a.jsx("th",{className:"c col-abw",children:ee($.name)},"h-d-"+$.id)),a.jsx("th",{className:"c col-place",children:"Platz"})]});return a.jsxs(a.Fragment,{children:[Q,p.length?a.jsxs("div",{style:{maxWidth:1250,margin:"0 auto"},children:[a.jsxs("table",{className:"sb-table battle-table",style:{width:"100%",tableLayout:"fixed"},children:[a.jsx("thead",{children:se}),a.jsx("tbody",{children:F})]}),_]}):a.jsx("p",{className:"empty",children:"Bitte wähle zuerst Songs für das Grand Final aus."})]})},pp=()=>{const s=ve(h.yearId);let c=h.sbShow;c!=="all"&&!s.shows[c]&&(c=s.shows.final?"final":Object.keys(s.shows)[0]);let p=[];if(c==="all"){const z=new Set;for(const S in s.shows)(s.shows[S]||[]).forEach(H=>{H.songId&&!z.has(H.songId)&&(z.add(H.songId),p.push(H))})}else p=s.shows[c]||[];const f=p.map(z=>{const S=ye(z.songId);if(!S||z.dq)return null;const H=tt(z),R=e.jury.map(E=>H[E.id]).filter(E=>E),w=R.reduce((E,I)=>E+I,0);return{e:z,s:S,r:H,avg:R.length?w/R.length:null,sum:w,place:z.place}}).filter(Boolean),g=[...f].sort((z,S)=>(S.avg!==null?S.avg:-1)-(z.avg!==null?z.avg:-1));let y=1;g.forEach((z,S)=>{S>0&&z.avg!==g[S-1].avg&&y++,z.ratingRank=y}),h.sbSort==="ratings"?f.sort((z,S)=>(S.avg!==null?S.avg:-1)-(z.avg!==null?z.avg:-1)):f.sort((z,S)=>{const H=E=>{if(c!=="all")return E.e.place||9999;let I=null,L=null;if(s.shows.final){const Z=s.shows.final.find(X=>X.songId===E.s.id);Z&&Z.place&&(I=Z.place)}if(s.shows.sf1){const Z=s.shows.sf1.find(X=>X.songId===E.s.id);Z&&Z.place&&(L=Z.place)}if(!L&&s.shows.sf2){const Z=s.shows.sf2.find(X=>X.songId===E.s.id);Z&&Z.place&&(L=Z.place)}return I||(L?L+1e3:9999)},R=H(z),w=H(S);return R!==w?R-w:(S.avg!==null?S.avg:-1)-(z.avg!==null?z.avg:-1)});const j=Pa(),P={},F={};e.jury.forEach(z=>{P[z.id]=0,F[z.id]={correct:0,totalGuessed:0}}),p.forEach(z=>{if(z.songId){const S=tt(z);e.jury.forEach(H=>{S[H.id]&&(P[H.id]+=S[H.id])})}}),(c==="all"?["sf1","sf2"]:[c]).forEach(z=>{(s.shows[z]||[]).forEach(H=>{const R=Y(H),w=H.place!==void 0&&H.place!==null?H.place>10:null;w!==null&&e.jury.forEach(E=>{R[E.id]===!1&&(F[E.id].totalGuessed++,w===!0&&F[E.id].correct++)})})});let _=-1,B=99999;for(const z in P)P[z]>_&&(_=P[z]),P[z]<B&&(B=P[z]);(_===B||_===0)&&(_=-1,B=99999);const Q=a.jsx("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",justifyContent:"center",marginTop:16},children:e.jury.map(z=>{const S=P[z.id];let H="var(--cyan)";S===_&&(H="var(--green)"),S===B&&(H="#ffb3c1");let R=null;if(c!=="final"){const w=F[z.id],E=w.totalGuessed>0&&w.correct===w.totalGuessed?"var(--gold)":"var(--muted)";R=a.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:700,borderLeft:"1px solid var(--line)",paddingLeft:8,color:E},children:[w.correct," / ",w.totalGuessed," NQs"]})}return a.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:"1px solid rgba(94,58,168,0.4)",padding:"7px 16px",borderRadius:999,fontSize:"0.83rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:8,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[a.jsx("span",{style:{color:"var(--ink)"},children:ee(z.name)}),a.jsxs("span",{style:{color:H},children:[S," pts"]}),R]},z.id)})}),se=f.map((z,S)=>{const H=z.ratingRank,R=H===1?" sb-top1":H===2?" sb-top2":H===3?" sb-top3":"",w=[],E=[],I=Y(z.e);e.jury.forEach(X=>{const ie=z.r[X.id];if(ie){const de=Ge(wt(ie));w.push(a.jsx("span",{className:"cell",style:{...de,display:"inline-block",margin:"0 2px",fontSize:"1.05rem",width:34,height:34,lineHeight:"30px",padding:0},children:ie},X.id))}else w.push(a.jsx("span",{className:"cell",style:{background:"var(--panel2-solid)",color:"var(--muted-dim)",display:"inline-block",margin:"0 2px",width:34,height:34,lineHeight:"30px",padding:0},children:"–"},X.id));I[X.id]===!1?E.push(a.jsx("span",{className:"cell",style:{background:"rgba(255,77,109,0.2)",color:"#ffb3c1",border:"1px solid rgba(255,77,109,0.4)",display:"inline-block",margin:"0 2px",fontSize:"0.85rem",padding:"2px 6px",width:34,height:34,lineHeight:"30px"},children:"NQ"},X.id)):E.push(a.jsx("span",{className:"cell",style:{background:"transparent",border:"1px dashed rgba(255,255,255,0.1)",color:"transparent",display:"inline-block",margin:"0 2px",fontSize:"0.85rem",padding:"2px 6px",width:34,height:34,lineHeight:"30px"},children:"-"},X.id))});let L="-";if(z.e.place!==void 0&&z.e.place!==null)if(c==="all"){let X=null;if(s.shows.sf1){const de=s.shows.sf1.find(Fe=>Fe.songId===z.s.id);de&&de.place&&(X=de.place)}if(!X&&s.shows.sf2){const de=s.shows.sf2.find(Fe=>Fe.songId===z.s.id);de&&de.place&&(X=de.place)}let ie=null;if(s.shows.final){const de=s.shows.final.find(Fe=>Fe.songId===z.s.id);de&&de.place&&(ie=de.place)}const ae=[];X&&ae.push(a.jsxs("span",{style:{fontSize:"0.65rem",color:"var(--muted)"},children:["SF: ",X,"."]},"sf")),ie&&ae.push(a.jsxs("span",{style:{fontSize:"0.75rem",fontWeight:800,color:"var(--gold)"},children:["GF: ",ie,"."]},"gf")),ae.length?L=a.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2,lineHeight:1.1},children:ae}):L=z.e.place+"."}else L=z.e.place+".";const Z={"--flag-url":`url('https://flagcdn.com/${z.s.cc}.svg')`,position:"relative",overflow:"hidden"};return a.jsxs("tr",{className:R,children:[a.jsx("td",{className:"sb-rank-cell",style:{textAlign:"center",padding:0},children:H}),a.jsxs("td",{style:{...Z,padding:0},children:[a.jsx("div",{style:{position:"absolute",left:0,top:"4px",bottom:"4px",width:"200px",backgroundImage:"var(--flag-url)",backgroundSize:"cover",backgroundPosition:"center",maskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 60%, transparent 100%)",opacity:.65,pointerEvents:"none",zIndex:0,borderRadius:"6px"}}),a.jsxs("div",{style:{position:"relative",zIndex:1,display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"6px 10px"},children:[a.jsx("div",{className:"cc-code",style:{position:"static",transform:"none",margin:0},children:ee(Ti(z.s.cc))}),a.jsxs("div",{className:"sb-song-info",style:{display:"flex",flexDirection:"column",alignItems:"flex-end",textAlign:"right",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:0},children:[a.jsx("div",{className:"sb-title",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.9rem"},children:ee(z.s.title)}),a.jsx("div",{className:"sb-artist",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textShadow:"0 1px 3px rgba(0,0,0,0.9)",lineHeight:"1.1",fontSize:"0.75rem"},children:ee(z.s.artist)})]})]})]}),a.jsx("td",{style:{textAlign:"left",paddingLeft:8,verticalAlign:"middle",whiteSpace:"nowrap",overflow:"hidden"},children:w}),a.jsx("td",{style:{textAlign:"left",paddingLeft:8,verticalAlign:"middle",whiteSpace:"nowrap",overflow:"hidden"},children:E}),a.jsx("td",{className:"sb-score-cell",children:a.jsx("b",{children:z.avg==null?"–":z.sum})}),a.jsx("td",{className:"sb-score-cell",children:a.jsx("b",{children:z.avg==null?"–":z.avg.toFixed(1)})}),a.jsx("td",{style:{textAlign:"center",width:50},children:L})]},z.e.id)}),$=a.jsx("div",{style:{display:"flex",justifyContent:"flex-start",gap:0,padding:0,marginLeft:-3},children:j.map((z,S)=>a.jsx("span",{style:{display:"inline-block",width:35,margin:"0 2px",textAlign:"center",fontSize:"0.7rem",color:"var(--muted)"},children:z},S))}),W=a.jsx("div",{style:{display:"flex",justifyContent:"flex-start",gap:0,padding:0,marginLeft:-3},children:j.map((z,S)=>a.jsx("span",{style:{display:"inline-block",width:35,margin:"0 2px",textAlign:"center",fontSize:"0.6rem",color:"var(--muted)"},children:z},S))}),V=a.jsxs("div",{className:"tabs edle-slider",style:{border:"none",margin:0,padding:4,borderRadius:999,display:"inline-flex",gap:4},children:[a.jsx("button",{className:h.sbSort==="ratings"?"on":"",style:{border:"none",margin:0},onClick:()=>M(z=>({...z,sbSort:"ratings"})),children:"Ratings"}),a.jsx("button",{className:h.sbSort==="placement"?"on":"",style:{border:"none",margin:0},onClick:()=>M(z=>({...z,sbSort:"placement"})),children:"Placement"})]});return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,maxWidth:1100,margin:"0 auto 14px"},children:[a.jsx("div",{children:sp()}),a.jsx("div",{children:V})]}),Q,f.length?a.jsx("div",{style:{maxWidth:1250,margin:"0 auto"},children:a.jsxs("table",{className:"sb-table",style:{width:"100%",tableLayout:"fixed"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{textAlign:"center",width:35},children:"#"}),a.jsx("th",{style:{width:260},children:"Song"}),a.jsx("th",{className:"c",style:{width:176},children:$}),a.jsx("th",{className:"c",style:{width:176},children:W}),a.jsx("th",{className:"c",style:{width:80},children:"Total"}),a.jsx("th",{className:"c",style:{width:80},children:"Ø"}),a.jsx("th",{className:"c",style:{width:80},children:"Place"})]})}),a.jsx("tbody",{children:se})]})}):a.jsx("p",{className:"empty",children:"Nothing to show yet."})]})},fp=()=>{if(!d)return a.jsxs("div",{style:{paddingTop:18},children:[a.jsx("button",{className:"ghost",onClick:mr,children:"← Back"}),a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh",fontSize:"6rem",filter:"drop-shadow(0 0 24px rgba(255,209,102,0.6))"},children:"🔒"})]});const s=h.compareCc&&it[h.compareCc]?it[h.compareCc]:"",c=[];if(h.compareCc)for(const y of e.years){const j=[];for(const P in y.shows)for(const F of y.shows[P]){const k=ye(F.songId);k&&k.cc===h.compareCc&&j.push({yearObj:y,showKey:P,showName:Ii[P],entry:F,song:k})}if(j.length>0){let P=j.find(F=>F.showKey==="final")||j[0];c.push(P)}}c.sort((y,j)=>j.yearObj.year-y.yearObj.year);const p=c.map(y=>{const j=tt(y.entry),P=e.jury.map(_=>j[_.id]).filter(_=>_),F=P.reduce((_,B)=>_+B,0),k=P.length?F/P.length:null;return a.jsxs("tr",{style:{borderBottom:"1px solid rgba(94,58,168,0.2)"},children:[a.jsx("td",{style:{padding:"16px 12px",verticalAlign:"middle"},children:a.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[a.jsx("b",{style:{fontFamily:"var(--display)",fontSize:"1.1rem",color:"var(--ink)"},children:y.yearObj.year}),a.jsx("small",{style:{color:"var(--muted)",fontSize:"0.75rem",fontWeight:600},children:y.showName})]})}),a.jsx("td",{style:{padding:"16px 12px",verticalAlign:"middle"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx(Tt,{cc:y.song.cc}),a.jsx("b",{style:{fontFamily:"var(--display)",fontSize:"0.95rem",color:"var(--ink)"},children:ee(y.song.title)})]})}),e.jury.map(_=>{const B=j[_.id];return a.jsx("td",{style:{padding:"16px 12px",textAlign:"center",verticalAlign:"middle"},children:B?a.jsx("span",{className:"cell",style:{...Ge(wt(B)),display:"inline-block",margin:0},children:B}):a.jsx("span",{style:{color:"var(--muted-dim)"},children:"–"})},_.id)}),a.jsx("td",{style:{padding:"16px 12px",textAlign:"center",verticalAlign:"middle"},children:a.jsx("b",{style:{fontFamily:"var(--display)",fontSize:"1.1rem",color:"var(--cyan)"},children:k==null?"–":F})}),a.jsx("td",{style:{padding:"16px 12px",textAlign:"center",verticalAlign:"middle"},children:k==null?"–":a.jsx("span",{className:"cell",style:{...Ge(wt(k)),display:"inline-block",margin:0,fontSize:"0.95rem"},children:k.toFixed(1)})})]},y.yearObj.id+"-"+y.showKey)}),f=e.jury.map(y=>a.jsx("th",{style:{textAlign:"center",padding:"14px 12px"},children:ee(y.name)},y.id)),g=h.compareCc?p.length?a.jsx("div",{className:"tw",style:{marginTop:24,padding:"4px 12px",background:"linear-gradient(145deg, rgba(25,14,52,0.95) 0%, rgba(10,5,22,0.98) 100%)",border:"1px solid rgba(94,58,168,0.3)",boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[a.jsx("thead",{children:a.jsxs("tr",{style:{borderBottom:"1px solid rgba(94,58,168,0.4)"},children:[a.jsx("th",{style:{textAlign:"left",padding:"14px 12px"},children:"Year"}),a.jsx("th",{style:{textAlign:"left",padding:"14px 12px"},children:"Song"}),f,a.jsx("th",{style:{textAlign:"center",padding:"14px 12px"},children:"Total"}),a.jsx("th",{style:{textAlign:"center",padding:"14px 12px"},children:"Ø"})]})}),a.jsx("tbody",{children:p})]})}):a.jsx("div",{style:{background:"var(--panel)",border:"1px dashed rgba(148,94,255,0.3)",borderRadius:22,padding:60,textAlign:"center",marginTop:24},children:a.jsx("p",{className:"empty",style:{margin:0,fontSize:"1rem"},children:"Keine Einträge für dieses Land gefunden."})}):a.jsx("div",{style:{background:"var(--panel)",border:"1px dashed rgba(148,94,255,0.3)",borderRadius:22,padding:60,textAlign:"center",marginTop:24},children:a.jsx("p",{className:"empty",style:{margin:0,fontSize:"1rem"},children:"Wähle oben ein Land aus, um den historischen Vergleich zu sehen."})});return a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{paddingTop:18},children:a.jsxs("button",{onClick:mr,style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px 9px 14px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",fontWeight:700,fontSize:"0.85rem",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:y=>{y.currentTarget.style.transform="translateX(-2px)",y.currentTarget.style.borderColor="rgba(168,85,247,0.7)",y.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:y=>{y.currentTarget.style.transform="translateX(0)",y.currentTarget.style.borderColor="rgba(148,94,255,0.35)",y.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[a.jsx("span",{style:{fontSize:"1rem",lineHeight:1},children:"←"})," Back"]})}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20,margin:"24px 0 8px"},children:[a.jsx("h2",{style:{margin:0,fontSize:"2rem"},children:"Country Comparison"}),a.jsx("div",{style:{width:300,background:"var(--panel2)",borderRadius:16,border:"1px solid var(--line)",padding:4},children:a.jsx(Ra,{value:s,onSelect:(y,j)=>M(P=>({...P,compareCc:y||null}))})})]}),a.jsx("p",{className:"hint",style:{marginBottom:24},children:"Vergleiche die Punkte und Platzierungen eines Landes über alle Jahre hinweg."}),g]})},gp=()=>{if(!d)return a.jsxs("div",{style:{paddingTop:18},children:[a.jsx("button",{className:"ghost",onClick:mr,children:"← Back"}),a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh",fontSize:"6rem",filter:"drop-shadow(0 0 24px rgba(255,209,102,0.6))"},children:"🔒"})]});const s=[];e.songs.forEach(f=>{f.year&&s.indexOf(f.year)===-1&&s.push(f.year)}),s.sort((f,g)=>g-f);const c=(h.q||"").toLowerCase(),p=e.songs.filter(f=>!((it[f.cc]+" "+f.artist+" "+f.title).toLowerCase().indexOf(c)===-1||h.libYear&&String(f.year)!==String(h.libYear)));return p.sort((f,g)=>it[f.cc].localeCompare(it[g.cc])),a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{paddingTop:18},children:a.jsxs("button",{onClick:mr,style:{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 18px 9px 14px",borderRadius:999,background:"linear-gradient(145deg, rgba(40,24,82,0.95) 0%, rgba(20,10,45,1) 100%)",border:"1px solid rgba(148,94,255,0.35)",color:"var(--ink)",fontWeight:700,fontSize:"0.85rem",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)",cursor:"pointer",transition:"transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:f=>{f.currentTarget.style.transform="translateX(-2px)",f.currentTarget.style.borderColor="rgba(168,85,247,0.7)",f.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 14px rgba(0,0,0,0.4), 0 0 18px rgba(168,85,247,0.2)"},onMouseLeave:f=>{f.currentTarget.style.transform="translateX(0)",f.currentTarget.style.borderColor="rgba(148,94,255,0.35)",f.currentTarget.style.boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.35)"},children:[a.jsx("span",{style:{fontSize:"1rem",lineHeight:1},children:"←"})," Back"]})}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20,margin:"24px 0 8px"},children:[a.jsx("h2",{style:{margin:0,fontSize:"2rem"},children:"Song Library"}),a.jsx("button",{className:"primary",onClick:()=>q("song",{id:null,assign:null}),style:{padding:"10px 24px",fontSize:"0.95rem"},children:"＋ New Song"})]}),a.jsx("p",{className:"hint",style:{marginBottom:24},children:"Durchsuche alle Songs, die jemals für das Scoreboard eingetragen wurden."}),a.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",marginBottom:24,background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",padding:16,borderRadius:18,border:"1px solid rgba(94,58,168,0.3)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)"},children:[a.jsx("input",{id:"lib_search_input",placeholder:"Suche nach Titel, Artist oder Land...",value:h.q||"",onChange:f=>M(g=>({...g,q:f.target.value})),style:{flex:1,minWidth:220,background:"var(--panel2-solid)",border:"1px solid var(--line)",padding:"12px 18px",borderRadius:12}}),a.jsxs("select",{id:"lib_year_select",style:{width:160,background:"var(--panel2-solid)",border:"1px solid var(--line)",padding:"12px 18px",borderRadius:12,fontWeight:600},value:h.libYear||"",onChange:f=>M(g=>({...g,libYear:f.target.value})),children:[a.jsx("option",{value:"",children:"All Years"}),s.map(f=>a.jsx("option",{value:f,children:f},f))]})]}),p.length?a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:16},children:p.map(f=>a.jsxs("div",{style:{background:"linear-gradient(145deg, rgba(30,18,60,0.95) 0%, rgba(15,8,32,0.98) 100%)",border:"1px solid rgba(94,58,168,0.3)",borderRadius:16,padding:16,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)",display:"flex",flexDirection:"column",gap:12,transition:"transform 0.2s ease, border-color 0.2s ease"},onMouseEnter:g=>{g.currentTarget.style.transform="translateY(-2px)",g.currentTarget.style.borderColor="rgba(168,85,247,0.6)"},onMouseLeave:g=>{g.currentTarget.style.transform="translateY(0)",g.currentTarget.style.borderColor="rgba(94,58,168,0.3)"},children:[a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx(Tt,{cc:f.cc}),a.jsxs("span",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.05em",textTransform:"uppercase"},children:[ee(it[f.cc])," ",f.year&&`· ${f.year}`]})]})}),a.jsxs("div",{children:[a.jsx("div",{style:{fontFamily:"var(--display)",fontSize:"1.15rem",fontWeight:800,color:"var(--ink)",lineHeight:1.2,marginBottom:4},children:ee(f.title)}),a.jsx("div",{style:{fontSize:"0.9rem",color:"var(--muted)",fontWeight:500},children:ee(f.artist)})]}),a.jsxs("div",{style:{display:"flex",gap:8,marginTop:"auto",paddingTop:8},children:[a.jsx("button",{className:"ghost sm",style:{flex:1},onClick:()=>q("song",{id:f.id,assign:null}),children:"Edit"}),a.jsx("button",{className:"ghost sm danger",style:{flex:1},onClick:()=>Uc(f.id),children:"Delete"})]})]},f.id))}):a.jsx("p",{className:"empty",style:{padding:"40px 0",fontSize:"1rem"},children:"Keine Songs gefunden, die zu deiner Suche passen."})]})},Ra=({value:s,onSelect:c})=>{const[p,f]=U.useState(s||""),[g,y]=U.useState(!1),[j,P]=U.useState(""),F=U.useRef(null),k=U.useRef(null);U.useEffect(()=>{f(s||"")},[s]),U.useEffect(()=>{const B=Q=>{F.current&&!F.current.contains(Q.target)&&y(!1)};return document.addEventListener("mousedown",B),()=>document.removeEventListener("mousedown",B)},[]);const _=Wi.filter(B=>B[1].toLowerCase().indexOf((p||"").toLowerCase())!==-1);return a.jsxs("div",{className:"search-dropdown-container",ref:F,children:[a.jsx("input",{ref:k,placeholder:"Land suchen...",value:p,autoComplete:"off",onChange:B=>{f(B.target.value),P(""),y(!0)},onFocus:()=>y(!0),onClick:()=>y(!0),style:{width:"100%"}}),a.jsx("div",{className:"search-dropdown-results"+(g?" active":""),children:_.length?_.map(B=>a.jsxs("div",{className:"search-dropdown-item",onMouseDown:Q=>{Q.preventDefault(),f(B[1]),P(B[0]),y(!1),c&&c(B[0],B[1])},children:[a.jsx(Tt,{cc:B[0]})," ",a.jsx("span",{children:ee(B[1])})]},B[0])):a.jsx("div",{className:"search-dropdown-item",style:{color:"var(--muted)"},children:"Kein Land gefunden"})})]})},mp=()=>{if(!D.open)return null;switch(D.mode){case"alert":return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:ee(D.payload.title)}),a.jsx("p",{className:"hint",children:ee(D.payload.text)}),a.jsx("div",{className:"actions",children:a.jsx("button",{className:"primary",onClick:le,children:"OK"})})]});case"confirm":{const s=D.payload.onYes;return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:ee(D.payload.title)}),a.jsx("p",{className:"hint",children:ee(D.payload.text)}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:le,children:"Cancel"}),a.jsx("button",{className:"primary",onClick:()=>{le(),s&&setTimeout(s,30)},children:"Confirm"})]})]})}case"newYear":return a.jsx(hp,{onSave:Jc,onClose:le});case"editCity":{const s=ve(h.yearId);return s?a.jsx(xp,{year:s,onSave:Xc,onClose:le}):null}case"editDates":{const s=ve(h.yearId);return s?a.jsx(vp,{year:s,onSave:Zc,onClose:le}):null}case"editNo":{const s=wn(D.payload.eId);return s?a.jsx(yp,{entry:s,songById:ye,onSave:Gc,onClose:le}):null}case"picker":return a.jsx(bp,{entryId:D.payload.entryId,S:e,CN:it,songById:ye,onPick:s=>{const c=D.payload.entryId;oe(p=>({...p,years:p.years.map(f=>{const g={};for(const y in f.shows)g[y]=f.shows[y].map(j=>j.id===c?{...j,songId:s}:j);return{...f,shows:g}})})),le(),setTimeout(()=>q("rating",{eId:c,jurId:n}),50)},onNewSong:()=>q("song",{id:null,assign:D.payload.entryId}),onEditSong:s=>q("song",{id:s,assign:null}),onDeleteSong:s=>{oe(c=>({...c,songs:c.songs.filter(p=>p.id!==s)}))},onClose:le});case"song":{const s=D.payload.id,c=D.payload.assign,p=s?ye(s):null,f=h.yearId?ve(h.yearId):null,g=p&&p.year?p.year:f&&f.year?f.year:new Date().getFullYear();return a.jsx(wp,{song:p,defaultYear:g,editId:s,assign:c,onSave:qc,onClose:le,S:e,setS:t,save:Kt})}case"rating":{const s=wn(D.payload.eId);if(!s)return null;let c=null;for(const p of e.years){for(const f in p.shows)if(p.shows[f].find(g=>g.id===s.id)){c=p.id;break}if(c)break}return a.jsx(kp,{entry:s,jurId:D.payload.jurId,S:e,me:n,jname:bn,songById:ye,getRatings:tt,currentYearId:c,onSave:(p,f,g)=>{const y=wn(p),j=y&&y.songId?y.songId:p;oe(P=>{const F={...P,ratings:{...P.ratings}};if(g===12&&c){const k=P.years.find(_=>_.id===c);if(k)for(const _ in k.shows)for(const B of k.shows[_])B.songId&&B.songId!==j&&F.ratings[B.songId]&&F.ratings[B.songId][f]===12&&(F.ratings[B.songId]={...F.ratings[B.songId]},delete F.ratings[B.songId][f])}return F.ratings[j]={...F.ratings[j]||{}},g===null?delete F.ratings[j][f]:F.ratings[j][f]=g,F}),le()},onClose:le})}case"settings":return a.jsx(Sp,{S:e,currentUser:d,onSaveNames:ep,onImport:np,onExport:rp,onOpenJson:()=>q("json"),onClose:le,showToast:ne,autoHardReset:K,updateS:oe});case"json":return a.jsx(jp,{S:e,onSave:tp,onBack:()=>q("settings"),onClose:le});default:return null}},hp=({onSave:s,onClose:c})=>{const[p,f]=U.useState(new Date().getFullYear()),[g,y]=U.useState(""),[j,P]=U.useState("");return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Add New Contest"}),a.jsxs("label",{children:["Year",a.jsx("input",{type:"number",value:p,onChange:F=>f(F.target.value)})]}),a.jsxs("label",{children:["Suffix (optional)",a.jsx("input",{placeholder:"e.g. Junior or Asia",value:g,onChange:F=>y(F.target.value)})]}),a.jsxs("label",{children:["Host City",a.jsx("input",{value:j,onChange:F=>P(F.target.value)})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:c,children:"Cancel"}),a.jsx("button",{className:"primary",onClick:()=>s({year:p,suffix:g,city:j}),children:"Create"})]})]})},xp=({year:s,onSave:c,onClose:p})=>{const[f,g]=U.useState(s.city||""),[y,j]=U.useState(s.hostCc||""),[P,F]=U.useState(s.hostCc&&it[s.hostCc]||"");return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Host City & Country"}),a.jsxs("label",{style:{position:"relative",zIndex:20},children:["Country (Flagge)",a.jsx(Ra,{value:P,onSelect:(k,_)=>{j(k),F(_)}})]}),a.jsxs("label",{style:{position:"relative",zIndex:1},children:["City",a.jsx("input",{value:f,onChange:k=>g(k.target.value)})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:p,children:"Cancel"}),a.jsx("button",{className:"primary",onClick:()=>c(f,y),children:"Save"})]})]})},vp=({year:s,onSave:c,onClose:p})=>{const[f,g]=U.useState(s.showDates&&s.showDates.sf1||""),[y,j]=U.useState(s.showDates&&s.showDates.sf2||""),[P,F]=U.useState(s.showDates&&s.showDates.final||"");return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Show-Daten"}),a.jsx("p",{className:"hint",style:{marginBottom:16},children:'Trage ein, wann welche Show stattfindet. Das „nächste" Jahr wird im Menü hervorgehoben, solange das Final noch nicht vorbei ist.'}),s.shows.sf1&&a.jsxs("label",{children:["Semi-final 1",a.jsx("input",{type:"date",value:f,onChange:k=>g(k.target.value)})]}),s.shows.sf2&&a.jsxs("label",{children:["Semi-final 2",a.jsx("input",{type:"date",value:y,onChange:k=>j(k.target.value)})]}),s.shows.final&&a.jsxs("label",{children:["Grand Final",a.jsx("input",{type:"date",value:P,onChange:k=>F(k.target.value)})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:p,children:"Cancel"}),a.jsx("button",{className:"primary",onClick:()=>c({sf1:f,sf2:y,final:P}),children:"Save"})]})]})},yp=({entry:s,songById:c,onSave:p,onClose:f})=>{const g=c(s.songId),y=s.customNo!==void 0&&s.customNo!==null&&s.customNo!==""?s.customNo:Hr(s.id),j=s.autoFinal!==void 0?s.autoFinal:g&&["de","fr","it","es","gb","kr"].indexOf(g.cc)!==-1,[P,F]=U.useState(y),[k,_]=U.useState(j);return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Running Order & Status"}),a.jsxs("label",{children:["Custom Position / Number (z.B. 6 oder 6.5)",a.jsx("input",{value:P,onChange:B=>F(B.target.value)})]}),a.jsxs("label",{style:{flexDirection:"row",alignItems:"center",gap:12,marginTop:16,cursor:"pointer",background:"var(--panel2-solid)",padding:12,borderRadius:12,border:"1px solid var(--line)"},children:[a.jsx("input",{type:"checkbox",checked:k,onChange:B=>_(B.target.checked)}),a.jsx("span",{style:{color:"var(--ink)",fontWeight:600},children:"Auto Qualifier (AQ)"})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:f,children:"Cancel"}),a.jsx("button",{className:"primary",onClick:()=>p(s.id,P,k),children:"Save"})]})]})},bp=({entryId:s,S:c,CN:p,songById:f,onPick:g,onNewSong:y,onEditSong:j,onDeleteSong:P,onClose:F})=>{const[k,_]=U.useState(""),B=c.songs.filter(Q=>(p[Q.cc]+" "+Q.artist+" "+Q.title).toLowerCase().indexOf(k.toLowerCase())!==-1);return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Song Library"}),a.jsx("input",{placeholder:"Search...",value:k,onChange:Q=>_(Q.target.value),style:{width:"100%",marginBottom:12}}),a.jsx("div",{id:"plist",children:B.length?B.map(Q=>a.jsxs("div",{className:"prow",children:[a.jsxs("button",{className:"pbtn",onClick:()=>g(Q.id),children:[a.jsx(Tt,{cc:Q.cc}),a.jsxs("span",{children:[a.jsx("b",{children:ee(Q.title)})," – ",ee(Q.artist)]})]}),a.jsx("button",{className:"ghost danger",onClick:()=>P(Q.id),children:"Delete"})]},Q.id)):a.jsx("p",{className:"empty",children:"No songs found."})}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:F,children:"Close"}),a.jsx("button",{className:"primary",onClick:y,children:"＋ New Song"})]})]})},wp=({song:s,defaultYear:c,editId:p,assign:f,onSave:g,onClose:y,S:j,setS:P,save:F})=>{const[k,_]=U.useState(s?s.cc:""),[B,Q]=U.useState(s&&it[s.cc]||""),[se,$]=U.useState(s?s.artist:""),[W,V]=U.useState(s?s.title:""),[z,S]=U.useState(s&&s.year?s.year:c),[H,R]=U.useState(()=>!p||!j.ratings[p]?{}:{...j.ratings[p]}),w=(I,L)=>{const Z=parseInt(L);R(X=>{const ie={...X};return!Z||Z<1||Z>10?delete ie[I]:ie[I]=Z,ie})},E=()=>{g({artist:se,title:W,cc:k,year:parseInt(z)||new Date().getFullYear(),editId:p,assign:f}),p&&P(I=>{const L={...I,ratings:{...I.ratings}};return L.ratings[p]={...H},Object.keys(L.ratings[p]).length===0&&delete L.ratings[p],F(L),L})};return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:s?"Edit Song":"New Song"}),a.jsxs("label",{style:{position:"relative",zIndex:20},children:["Country",a.jsx(Ra,{value:B,onSelect:(I,L)=>{_(I),Q(L)}})]}),a.jsxs("label",{style:{position:"relative",zIndex:1},children:["Artist",a.jsx("input",{value:se,onChange:I=>$(I.target.value)})]}),a.jsxs("label",{style:{position:"relative",zIndex:1},children:["Song Title",a.jsx("input",{value:W,onChange:I=>V(I.target.value)})]}),a.jsxs("label",{style:{position:"relative",zIndex:1},children:["Year",a.jsx("input",{type:"number",value:z,onChange:I=>S(I.target.value)})]}),p&&a.jsxs(a.Fragment,{children:[a.jsx("hr",{style:{border:0,borderTop:"1px solid var(--line)",margin:"20px 0 16px"}}),a.jsxs("div",{style:{marginBottom:14},children:[a.jsx("div",{style:{fontFamily:"var(--display)",fontWeight:700,fontSize:"0.9rem",color:"var(--ink)",marginBottom:8},children:"Punkte (global für diesen Song)"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:10},children:j.jury.map(I=>{const L=H[I.id];return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[a.jsx("label",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--muted)",letterSpacing:"0.05em",textTransform:"uppercase",margin:0},children:ee(I.name)}),a.jsx("input",{type:"number",min:"1",max:"10",placeholder:"–",value:L!==void 0?L:"",onChange:Z=>w(I.id,Z.target.value),style:{width:"100%",textAlign:"center",fontFamily:"var(--number-font)",fontSize:"1.4rem",color:"var(--gold)",background:"linear-gradient(180deg, #2b1e0a 0%, #1a1106 50%, #0a0702 100%)",border:"1.5px solid rgba(255, 209, 102, 0.55)",borderRadius:12,padding:"8px 0",boxShadow:"inset 0 1px 0 rgba(255, 230, 150, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.7), 0 0 14px rgba(255, 209, 102, 0.08)"}})]},I.id)})})]})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:y,children:"Cancel"}),a.jsx("button",{className:"primary",onClick:E,children:"Save"})]})]})},kp=({entry:s,jurId:c,S:p,me:f,jname:g,songById:y,getRatings:j,onSave:P,onClose:F,currentYearId:k})=>{const _=y(s.songId),B=j(s),Q=N?c||"j3":f,se=B[Q],$=g(Q),[W,V]=U.useState(se??null);if(U.useEffect(()=>{if(!N)return;const H=R=>{if(R.target.tagName==="INPUT"||R.target.tagName==="TEXTAREA")return;let w=R.key;w==="0"&&(w="10");const E=parseInt(w);E>=1&&E<=10&&(V(E),setTimeout(()=>{P(s.id,Q,E)},150))};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[f,s.id,Q,P]),!_)return null;const z=W,S=(H,R)=>{const w=[];for(let E=H;E<=R;E++){const I=z===E;w.push(a.jsx("button",{className:"rate-modal-btn",style:{...Ge(wt(E)),width:64,height:68,fontFamily:"var(--number-font)",fontSize:"2.2rem",borderRadius:16,border:"4px solid "+(I?"#fff":"transparent"),cursor:"pointer",display:"grid",placeItems:"center",padding:0,transition:"transform 0.15s ease-out, box-shadow 0.15s ease-out",...I?{boxShadow:"0 0 28px rgba(255,255,255,0.8), 0 0 0 2px #fff inset",transform:"scale(1.08)"}:{}},onClick:()=>V(z===E?null:E),children:E},E))}return w};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{textAlign:"center",marginBottom:20},children:[a.jsx("div",{style:{marginBottom:12,transform:"scale(1.8)",display:"inline-block",filter:"drop-shadow(0 4px 12px rgba(0,0,0,0.5))"},children:a.jsx(Tt,{cc:_.cc})}),a.jsx("h2",{style:{margin:"10px 0 4px",fontSize:"1.7rem"},children:ee(_.title)}),a.jsxs("p",{style:{color:"var(--muted)",margin:0,fontSize:"1rem"},children:[ee(_.artist)," · ",ee(it[_.cc]||_.cc.toUpperCase())]}),a.jsx("p",{style:{color:"var(--gold)",margin:"8px 0 0",fontSize:"0.85rem",fontWeight:800,letterSpacing:"0.08em",textTransform:"uppercase"},children:ee($)})]}),a.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(255,209,102,0.06) 0%, var(--panel2-solid) 100%)",border:"1px solid var(--line)",borderRadius:22,padding:"24px 20px",textAlign:"center",marginBottom:20,boxShadow:"inset 0 2px 8px rgba(0,0,0,0.3)"},children:[a.jsx("div",{style:{fontFamily:"var(--number-font)",fontSize:"2.8rem",color:"var(--gold)",marginBottom:22,letterSpacing:"0.03em",textShadow:"0 0 20px rgba(255,209,102,0.4)"},children:z!=null?a.jsxs(a.Fragment,{children:[z," ",a.jsx("span",{style:{fontSize:"1.2rem",color:"var(--muted)"},children:"/ 12 Pts"})]}):a.jsx("span",{style:{color:"var(--muted)",fontSize:"1.4rem"},children:"– Pts"})}),a.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",marginBottom:14,flexWrap:"wrap"},children:S(1,5)}),a.jsx("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:S(6,10)}),a.jsx("div",{style:{marginTop:16,display:"flex",justifyContent:"center"},children:a.jsxs("button",{style:{...Ge(wt(12)),width:140,height:68,fontFamily:"var(--number-font)",fontSize:"2.2rem",borderRadius:16,border:"4px solid "+(z===12?"#fff":"transparent"),cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"transform 0.15s ease-out, box-shadow 0.15s ease-out",...z===12?{boxShadow:"0 0 28px rgba(255,255,255,0.8), 0 0 0 2px #fff inset",transform:"scale(1.08)"}:{}},onClick:()=>V(z===12?null:12),children:["12 ",a.jsx("span",{style:{fontSize:"0.8rem",fontFamily:"var(--display)",textTransform:"uppercase",letterSpacing:"0.1em",marginTop:6},children:"FAV"})]})})]}),a.jsx("div",{className:"actions",style:{marginTop:18,justifyContent:"flex-end"},children:a.jsx("button",{className:"primary",onClick:()=>P(s.id,Q,W),style:{padding:"12px 32px",fontSize:"1rem"},children:"Fertig"})})]})},Sp=({S:s,currentUser:c,onSaveNames:p,onImport:f,onExport:g,onOpenJson:y,onClose:j,showToast:P,autoHardReset:F,updateS:k})=>{const _=!!c,[B,Q]=U.useState(()=>{const W={};return s.jury.forEach(V=>W[V.id]=V.name),W}),se=W=>{const V=W.target.files[0];if(!V)return;const z=new FileReader;z.onload=()=>{try{const S=JSON.parse(z.result);f(S)}catch{P("Invalid file","error")}},z.readAsText(V)},$=()=>{const W=s.jury.map(V=>({dataset:{jn:V.id},value:B[V.id]||""}));p(W)};return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Settings"}),!_&&a.jsx("p",{className:"hint",style:{color:"var(--red)",fontWeight:600,background:"rgba(255,77,109,0.1)",padding:"10px 14px",borderRadius:10,border:"1px solid rgba(255,77,109,0.3)",marginBottom:16},children:"⚠️ Logge dich mit Google ein, um Export/Import/JSON zu nutzen."}),s.jury.map(W=>a.jsxs("label",{children:[W.id.toUpperCase()," Name",a.jsx("input",{value:B[W.id]||"",onChange:V=>Q(z=>({...z,[W.id]:V.target.value}))})]},W.id)),a.jsx("hr",{style:{border:0,borderTop:"1px solid var(--line)",margin:"20px 0"}}),a.jsxs("label",{style:{flexDirection:"row",alignItems:"center",gap:12,cursor:"pointer",background:"rgba(255,255,255,0.05)",padding:"12px",borderRadius:12,border:"1px solid var(--line)"},children:[a.jsx("input",{type:"checkbox",checked:F,onChange:W=>{const V=W.target.checked;k(z=>({...z,autoHardReset:V}))}}),a.jsx("span",{style:{color:"var(--ink)",fontWeight:600},children:"Auto-Hard-Reset beim Laden (Cache leeren)"})]}),a.jsxs("div",{className:"actions",style:{marginTop:18},children:[a.jsx("button",{className:"ghost",onClick:g,disabled:!_,children:"Export Data"}),a.jsxs("label",{style:{background:"var(--panel2-solid)",border:"1px solid var(--line)",borderRadius:999,padding:"9px 20px",cursor:_?"pointer":"not-allowed",textAlign:"center",fontWeight:600,opacity:_?1:.35},children:["Import Data",a.jsx("input",{type:"file",style:{display:"none"},disabled:!_,onChange:se})]}),a.jsx("button",{className:"ghost",onClick:y,disabled:!_,children:"JSON"})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:j,children:"Close"}),a.jsx("button",{className:"primary",onClick:$,children:"Save"})]})]})},jp=({S:s,onSave:c,onBack:p,onClose:f})=>{const[g,y]=U.useState(JSON.stringify(s,null,2));return a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"JSON Editor"}),a.jsx("p",{className:"hint",children:"Bearbeite den gesamten JSON-State direkt hier:"}),a.jsx("textarea",{value:g,onChange:j=>y(j.target.value),style:{width:"100%",height:320,fontFamily:"monospace",background:"var(--panel2-solid)",color:"var(--ink)",border:"1px solid var(--line)",borderRadius:12,padding:14,resize:"vertical",fontSize:"0.85rem",lineHeight:1.5}}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"ghost",onClick:p,children:"Zurück"}),a.jsx("button",{className:"primary",onClick:()=>c(g),children:"Speichern & Anwenden"})]})]})};let hr;h.view==="compare"?hr=fp():h.view==="library"?hr=gp():h.yearId?hr=op():hr=ns();const Cp=h.view==="home"&&!h.yearId;return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"wrap",children:a.jsxs("div",{id:"app",ref:xe,children:[ip(),hr]})}),a.jsx("div",{id:"fab_container",children:Cp&&a.jsx("button",{className:"fab",onClick:()=>q("newYear"),title:"Add new contest",children:"＋"})}),a.jsx("div",{id:"toast-container",children:v.map(s=>a.jsx("div",{className:"toast "+(s.type||""),children:(s.type==="success"?"✓ ":s.type==="error"?"✗ ":"")+s.msg},s.id))}),a.jsx("dialog",{id:"dlg",ref:ue,tabIndex:-1,className:D.mode==="song"||D.mode==="picker"||D.mode==="json"?"wide":"",children:D.open&&mp()})]})}const cl=e=>new Promise((t,n)=>{const r=document.createElement("script");r.src=e,r.onload=t,r.onerror=n,document.head.appendChild(r)});(async()=>{try{window.firebase||(await cl("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"),await cl("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"),await cl("https://www.gstatic.com/firebasejs/10.12.0/firebase-database-compat.js"))}catch(e){console.error("Firebase SDKs konnten nicht geladen werden:",e)}pl.createRoot(document.getElementById("root")).render(a.jsx($p.StrictMode,{children:a.jsx(ug,{})}))})();
