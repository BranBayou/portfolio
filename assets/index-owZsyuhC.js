(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function ev(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ad={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ix;function tb(){if(Ix)return Uo;Ix=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Uo.Fragment=e,Uo.jsx=i,Uo.jsxs=i,Uo}var Hx;function nb(){return Hx||(Hx=1,ad.exports=tb()),ad.exports}var L=nb(),rd={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gx;function ib(){if(Gx)return st;Gx=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),v=Symbol.iterator;function b(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function y(z,ne,ye){this.props=z,this.context=ne,this.refs=S,this.updater=ye||M}y.prototype.isReactComponent={},y.prototype.setState=function(z,ne){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ne,"setState")},y.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function D(){}D.prototype=y.prototype;function C(z,ne,ye){this.props=z,this.context=ne,this.refs=S,this.updater=ye||M}var O=C.prototype=new D;O.constructor=C,T(O,y.prototype),O.isPureReactComponent=!0;var H=Array.isArray;function N(){}var F={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function U(z,ne,ye){var Te=ye.ref;return{$$typeof:s,type:z,key:ne,ref:Te!==void 0?Te:null,props:ye}}function R(z,ne){return U(z.type,ne,z.props)}function V(z){return typeof z=="object"&&z!==null&&z.$$typeof===s}function q(z){var ne={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(ye){return ne[ye]})}var re=/\/+/g;function he(z,ne){return typeof z=="object"&&z!==null&&z.key!=null?q(""+z.key):ne.toString(36)}function ce(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(N,N):(z.status="pending",z.then(function(ne){z.status==="pending"&&(z.status="fulfilled",z.value=ne)},function(ne){z.status==="pending"&&(z.status="rejected",z.reason=ne)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function B(z,ne,ye,Te,Oe){var ae=typeof z;(ae==="undefined"||ae==="boolean")&&(z=null);var fe=!1;if(z===null)fe=!0;else switch(ae){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(z.$$typeof){case s:case e:fe=!0;break;case g:return fe=z._init,B(fe(z._payload),ne,ye,Te,Oe)}}if(fe)return Oe=Oe(z),fe=Te===""?"."+he(z,0):Te,H(Oe)?(ye="",fe!=null&&(ye=fe.replace(re,"$&/")+"/"),B(Oe,ne,ye,"",function(je){return je})):Oe!=null&&(V(Oe)&&(Oe=R(Oe,ye+(Oe.key==null||z&&z.key===Oe.key?"":(""+Oe.key).replace(re,"$&/")+"/")+fe)),ne.push(Oe)),1;fe=0;var we=Te===""?".":Te+":";if(H(z))for(var He=0;He<z.length;He++)Te=z[He],ae=we+he(Te,He),fe+=B(Te,ne,ye,ae,Oe);else if(He=b(z),typeof He=="function")for(z=He.call(z),He=0;!(Te=z.next()).done;)Te=Te.value,ae=we+he(Te,He++),fe+=B(Te,ne,ye,ae,Oe);else if(ae==="object"){if(typeof z.then=="function")return B(ce(z),ne,ye,Te,Oe);throw ne=String(z),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return fe}function K(z,ne,ye){if(z==null)return z;var Te=[],Oe=0;return B(z,Te,"","",function(ae){return ne.call(ye,ae,Oe++)}),Te}function W(z){if(z._status===-1){var ne=z._result;ne=ne(),ne.then(function(ye){(z._status===0||z._status===-1)&&(z._status=1,z._result=ye)},function(ye){(z._status===0||z._status===-1)&&(z._status=2,z._result=ye)}),z._status===-1&&(z._status=0,z._result=ne)}if(z._status===1)return z._result.default;throw z._result}var pe=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},_e={map:K,forEach:function(z,ne,ye){K(z,function(){ne.apply(this,arguments)},ye)},count:function(z){var ne=0;return K(z,function(){ne++}),ne},toArray:function(z){return K(z,function(ne){return ne})||[]},only:function(z){if(!V(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return st.Activity=x,st.Children=_e,st.Component=y,st.Fragment=i,st.Profiler=l,st.PureComponent=C,st.StrictMode=r,st.Suspense=p,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,st.__COMPILER_RUNTIME={__proto__:null,c:function(z){return F.H.useMemoCache(z)}},st.cache=function(z){return function(){return z.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(z,ne,ye){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Te=T({},z.props),Oe=z.key;if(ne!=null)for(ae in ne.key!==void 0&&(Oe=""+ne.key),ne)!X.call(ne,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&ne.ref===void 0||(Te[ae]=ne[ae]);var ae=arguments.length-2;if(ae===1)Te.children=ye;else if(1<ae){for(var fe=Array(ae),we=0;we<ae;we++)fe[we]=arguments[we+2];Te.children=fe}return U(z.type,Oe,Te)},st.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},st.createElement=function(z,ne,ye){var Te,Oe={},ae=null;if(ne!=null)for(Te in ne.key!==void 0&&(ae=""+ne.key),ne)X.call(ne,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Oe[Te]=ne[Te]);var fe=arguments.length-2;if(fe===1)Oe.children=ye;else if(1<fe){for(var we=Array(fe),He=0;He<fe;He++)we[He]=arguments[He+2];Oe.children=we}if(z&&z.defaultProps)for(Te in fe=z.defaultProps,fe)Oe[Te]===void 0&&(Oe[Te]=fe[Te]);return U(z,ae,Oe)},st.createRef=function(){return{current:null}},st.forwardRef=function(z){return{$$typeof:h,render:z}},st.isValidElement=V,st.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:W}},st.memo=function(z,ne){return{$$typeof:m,type:z,compare:ne===void 0?null:ne}},st.startTransition=function(z){var ne=F.T,ye={};F.T=ye;try{var Te=z(),Oe=F.S;Oe!==null&&Oe(ye,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(N,pe)}catch(ae){pe(ae)}finally{ne!==null&&ye.types!==null&&(ne.types=ye.types),F.T=ne}},st.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},st.use=function(z){return F.H.use(z)},st.useActionState=function(z,ne,ye){return F.H.useActionState(z,ne,ye)},st.useCallback=function(z,ne){return F.H.useCallback(z,ne)},st.useContext=function(z){return F.H.useContext(z)},st.useDebugValue=function(){},st.useDeferredValue=function(z,ne){return F.H.useDeferredValue(z,ne)},st.useEffect=function(z,ne){return F.H.useEffect(z,ne)},st.useEffectEvent=function(z){return F.H.useEffectEvent(z)},st.useId=function(){return F.H.useId()},st.useImperativeHandle=function(z,ne,ye){return F.H.useImperativeHandle(z,ne,ye)},st.useInsertionEffect=function(z,ne){return F.H.useInsertionEffect(z,ne)},st.useLayoutEffect=function(z,ne){return F.H.useLayoutEffect(z,ne)},st.useMemo=function(z,ne){return F.H.useMemo(z,ne)},st.useOptimistic=function(z,ne){return F.H.useOptimistic(z,ne)},st.useReducer=function(z,ne,ye){return F.H.useReducer(z,ne,ye)},st.useRef=function(z){return F.H.useRef(z)},st.useState=function(z){return F.H.useState(z)},st.useSyncExternalStore=function(z,ne,ye){return F.H.useSyncExternalStore(z,ne,ye)},st.useTransition=function(){return F.H.useTransition()},st.version="19.2.0",st}var Vx;function Ph(){return Vx||(Vx=1,rd.exports=ib()),rd.exports}var Zt=Ph();const ab=ev(Zt);var sd={exports:{}},No={},od={exports:{}},ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kx;function rb(){return kx||(kx=1,(function(s){function e(B,K){var W=B.length;B.push(K);e:for(;0<W;){var pe=W-1>>>1,_e=B[pe];if(0<l(_e,K))B[pe]=K,B[W]=_e,W=pe;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],W=B.pop();if(W!==K){B[0]=W;e:for(var pe=0,_e=B.length,z=_e>>>1;pe<z;){var ne=2*(pe+1)-1,ye=B[ne],Te=ne+1,Oe=B[Te];if(0>l(ye,W))Te<_e&&0>l(Oe,ye)?(B[pe]=Oe,B[Te]=W,pe=Te):(B[pe]=ye,B[ne]=W,pe=ne);else if(Te<_e&&0>l(Oe,W))B[pe]=Oe,B[Te]=W,pe=Te;else break e}}return K}function l(B,K){var W=B.sortIndex-K.sortIndex;return W!==0?W:B.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var p=[],m=[],g=1,x=null,v=3,b=!1,M=!1,T=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function O(B){for(var K=i(m);K!==null;){if(K.callback===null)r(m);else if(K.startTime<=B)r(m),K.sortIndex=K.expirationTime,e(p,K);else break;K=i(m)}}function H(B){if(T=!1,O(B),!M)if(i(p)!==null)M=!0,N||(N=!0,q());else{var K=i(m);K!==null&&ce(H,K.startTime-B)}}var N=!1,F=-1,X=5,U=-1;function R(){return S?!0:!(s.unstable_now()-U<X)}function V(){if(S=!1,N){var B=s.unstable_now();U=B;var K=!0;try{e:{M=!1,T&&(T=!1,D(F),F=-1),b=!0;var W=v;try{t:{for(O(B),x=i(p);x!==null&&!(x.expirationTime>B&&R());){var pe=x.callback;if(typeof pe=="function"){x.callback=null,v=x.priorityLevel;var _e=pe(x.expirationTime<=B);if(B=s.unstable_now(),typeof _e=="function"){x.callback=_e,O(B),K=!0;break t}x===i(p)&&r(p),O(B)}else r(p);x=i(p)}if(x!==null)K=!0;else{var z=i(m);z!==null&&ce(H,z.startTime-B),K=!1}}break e}finally{x=null,v=W,b=!1}K=void 0}}finally{K?q():N=!1}}}var q;if(typeof C=="function")q=function(){C(V)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,he=re.port2;re.port1.onmessage=V,q=function(){he.postMessage(null)}}else q=function(){y(V,0)};function ce(B,K){F=y(function(){B(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(B){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var W=v;v=K;try{return B()}finally{v=W}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=v;v=B;try{return K()}finally{v=W}},s.unstable_scheduleCallback=function(B,K,W){var pe=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?pe+W:pe):W=pe,B){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=W+_e,B={id:g++,callback:K,priorityLevel:B,startTime:W,expirationTime:_e,sortIndex:-1},W>pe?(B.sortIndex=W,e(m,B),i(p)===null&&B===i(m)&&(T?(D(F),F=-1):T=!0,ce(H,W-pe))):(B.sortIndex=_e,e(p,B),M||b||(M=!0,N||(N=!0,q()))),B},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(B){var K=v;return function(){var W=v;v=K;try{return B.apply(this,arguments)}finally{v=W}}}})(ld)),ld}var jx;function sb(){return jx||(jx=1,od.exports=rb()),od.exports}var cd={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xx;function ob(){if(Xx)return Ln;Xx=1;var s=Ph();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:p,containerInfo:m,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,g)},Ln.flushSync=function(p){var m=d.T,g=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=m,r.p=g,r.d.f()}},Ln.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Ln.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Ln.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,x=h(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,b=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:b}):g==="script"&&r.d.X(p,{crossOrigin:x,integrity:v,fetchPriority:b,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ln.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Ln.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,x=h(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ln.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Ln.requestFormReset=function(p){r.d.r(p)},Ln.unstable_batchedUpdates=function(p,m){return p(m)},Ln.useFormState=function(p,m,g){return d.H.useFormState(p,m,g)},Ln.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ln.version="19.2.0",Ln}var qx;function lb(){if(qx)return cd.exports;qx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),cd.exports=ob(),cd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wx;function cb(){if(Wx)return No;Wx=1;var s=sb(),e=Ph(),i=lb();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),t;if(f===o)return p(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,A=u.child;A;){if(A===a){_=!0,a=u,o=f;break}if(A===o){_=!0,o=u,a=f;break}A=A.sibling}if(!_){for(A=f.child;A;){if(A===a){_=!0,a=f,o=u;break}if(A===o){_=!0,o=f,a=u;break}A=A.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,v=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),C=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case H:return"Suspense";case N:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case C:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:he(t.type)||"Memo";case X:n=t._payload,t=t._init;try{return he(t(n))}catch{}}return null}var ce=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},pe=[],_e=-1;function z(t){return{current:t}}function ne(t){0>_e||(t.current=pe[_e],pe[_e]=null,_e--)}function ye(t,n){_e++,pe[_e]=t.current,t.current=n}var Te=z(null),Oe=z(null),ae=z(null),fe=z(null);function we(t,n){switch(ye(ae,n),ye(Oe,t),ye(Te,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?lx(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=lx(n),t=cx(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ne(Te),ye(Te,t)}function He(){ne(Te),ne(Oe),ne(ae)}function je(t){t.memoizedState!==null&&ye(fe,t);var n=Te.current,a=cx(n,t.type);n!==a&&(ye(Oe,t),ye(Te,a))}function ct(t){Oe.current===t&&(ne(Te),ne(Oe)),fe.current===t&&(ne(fe),Ro._currentValue=W)}var an,ht;function At(t){if(an===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);an=n&&n[1]||"",ht=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+an+t+ht}var G=!1;function pt(t,n){if(!t||G)return"";G=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(le){var ie=le}Reflect.construct(t,[],ge)}else{try{ge.call()}catch(le){ie=le}t.call(ge.prototype)}}else{try{throw Error()}catch(le){ie=le}(ge=t())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(le){if(le&&ie&&typeof le.stack=="string")return[le.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],A=f[1];if(_&&A){var I=_.split(`
`),ee=A.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===ee.length)for(o=I.length-1,u=ee.length-1;1<=o&&0<=u&&I[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==ee[u]){var de=`
`+I[o].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=o&&0<=u);break}}}finally{G=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?At(a):""}function xt(t,n){switch(t.tag){case 26:case 27:case 5:return At(t.type);case 16:return At("Lazy");case 13:return t.child!==n&&n!==null?At("Suspense Fallback"):At("Suspense");case 19:return At("SuspenseList");case 0:case 15:return pt(t.type,!1);case 11:return pt(t.type.render,!1);case 1:return pt(t.type,!0);case 31:return At("Activity");default:return""}}function Pt(t){try{var n="",a=null;do n+=xt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ge=Object.prototype.hasOwnProperty,jt=s.unstable_scheduleCallback,Ye=s.unstable_cancelCallback,rt=s.unstable_shouldYield,P=s.unstable_requestPaint,E=s.unstable_now,$=s.unstable_getCurrentPriorityLevel,xe=s.unstable_ImmediatePriority,be=s.unstable_UserBlockingPriority,ue=s.unstable_NormalPriority,qe=s.unstable_LowPriority,Ne=s.unstable_IdlePriority,Je=s.log,Xe=s.unstable_setDisableYieldValue,Se=null,Ee=null;function We(t){if(typeof Je=="function"&&Xe(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(Se,t)}catch{}}var Ve=Math.clz32?Math.clz32:k,Pe=Math.log,it=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(Pe(t)/it|0)|0}var De=256,Re=262144,Ce=4194304;function Me(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Me(o):(_&=A,_!==0?u=Me(_):a||(a=A&~t,a!==0&&(u=Me(a))))):(A=o&~f,A!==0?u=Me(A):_!==0?u=Me(_):a||(a=o&~t,a!==0&&(u=Me(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Fe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function at(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(){var t=Ce;return Ce<<=1,(Ce&62914560)===0&&(Ce=4194304),t}function Rt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Nn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Yn(t,n,a,o,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,ee=t.hiddenUpdates;for(a=_&~a;0<a;){var de=31-Ve(a),ge=1<<de;A[de]=0,I[de]=-1;var ie=ee[de];if(ie!==null)for(ee[de]=null,de=0;de<ie.length;de++){var le=ie[de];le!==null&&(le.lane&=-536870913)}a&=~ge}o!==0&&$o(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function $o(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ve(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Bs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ve(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Is(t,n){var a=n&-n;return a=(a&42)!==0?1:bi(a),(a&(t.suspendedLanes|n))!==0?0:a}function bi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ar(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Hs(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Nx(t.type))}function Gs(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var Zn=Math.random().toString(36).slice(2),cn="__reactFiber$"+Zn,gn="__reactProps$"+Zn,Gi="__reactContainer$"+Zn,Or="__reactEvents$"+Zn,Qc="__reactListeners$"+Zn,Jc="__reactHandles$"+Zn,el="__reactResources$"+Zn,rr="__reactMarker$"+Zn;function Vs(t){delete t[cn],delete t[gn],delete t[Or],delete t[Qc],delete t[Jc]}function Ma(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Gi]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=xx(t);t!==null;){if(a=t[cn])return a;t=xx(t)}return n}t=a,a=t.parentNode}return null}function w(t){if(t=t[cn]||t[Gi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function se(t){var n=t[el];return n||(n=t[el]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function te(t){t[rr]=!0}var Q=new Set,Ae={};function Ue(t,n){ze(t,n),ze(t+"Capture",n)}function ze(t,n){for(Ae[t]=n,t=0;t<n.length;t++)Q.add(n[t])}var Be=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},nt={};function Ze(t){return Ge.call(nt,t)?!0:Ge.call(et,t)?!1:Be.test(t)?nt[t]=!0:(et[t]=!0,!1)}function ut(t,n,a){if(Ze(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Tt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ct(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function bt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ot(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Xt(t){if(!t._valueTracker){var n=Ot(t)?"checked":"value";t._valueTracker=$e(t,n,""+t[n])}}function St(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Ot(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Sn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ea=/[\n"\\]/g;function Wt(t){return t.replace(Ea,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Vi(t,n,a,o,u,f,_,A){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+bt(n)):t.value!==""+bt(n)&&(t.value=""+bt(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?Mn(t,_,bt(n)):a!=null?Mn(t,_,bt(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+bt(A):t.removeAttribute("name")}function Yt(t,n,a,o,u,f,_,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Xt(t);return}a=a!=null?""+bt(a):"",n=n!=null?""+bt(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Xt(t)}function Mn(t,n,a){n==="number"&&Sn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function vn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+bt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function En(t,n,a){if(n!=null&&(n=""+bt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+bt(a):""}function Rn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ce(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=bt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Xt(t)}function Ni(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var ki=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rp(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||ki.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function sp(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&rp(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&rp(t,f,n[f])}function $c(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(t){return Jv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ji(){}var eu=null;function tu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pr=null,zr=null;function op(t){var n=w(t);if(n&&(t=n.stateNode)){var a=t[gn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Vi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Wt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[gn]||null;if(!u)throw Error(r(90));Vi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&St(o)}break e;case"textarea":En(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&vn(t,!!a.multiple,n,!1)}}}var nu=!1;function lp(t,n,a){if(nu)return t(n,a);nu=!0;try{var o=t(n);return o}finally{if(nu=!1,(Pr!==null||zr!==null)&&(Vl(),Pr&&(n=Pr,t=zr,zr=Pr=null,op(n),t)))for(n=0;n<t.length;n++)op(t[n])}}function ks(t,n){var a=t.stateNode;if(a===null)return null;var o=a[gn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if(Xi)try{var js={};Object.defineProperty(js,"passive",{get:function(){iu=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{iu=!1}var Ta=null,au=null,nl=null;function cp(){if(nl)return nl;var t,n=au,a=n.length,o,u="value"in Ta?Ta.value:Ta.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return nl=u.slice(t,1<o?1-o:void 0)}function il(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function up(){return!1}function In(t){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?al:up,this.isPropagationStopped=up,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=In(sr),Xs=x({},sr,{view:0,detail:0}),$v=In(Xs),ru,su,qs,sl=x({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(ru=t.screenX-qs.screenX,su=t.screenY-qs.screenY):su=ru=0,qs=t),ru)},movementY:function(t){return"movementY"in t?t.movementY:su}}),fp=In(sl),e_=x({},sl,{dataTransfer:0}),t_=In(e_),n_=x({},Xs,{relatedTarget:0}),ou=In(n_),i_=x({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),a_=In(i_),r_=x({},sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),s_=In(r_),o_=x({},sr,{data:0}),dp=In(o_),l_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=u_[t])?!!n[t]:!1}function lu(){return f_}var d_=x({},Xs,{key:function(t){if(t.key){var n=l_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?c_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),h_=In(d_),p_=x({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=In(p_),m_=x({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),x_=In(m_),g_=x({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),v_=In(g_),__=x({},sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),y_=In(__),b_=x({},sr,{newState:0,oldState:0}),S_=In(b_),M_=[9,13,27,32],cu=Xi&&"CompositionEvent"in window,Ws=null;Xi&&"documentMode"in document&&(Ws=document.documentMode);var E_=Xi&&"TextEvent"in window&&!Ws,pp=Xi&&(!cu||Ws&&8<Ws&&11>=Ws),mp=" ",xp=!1;function gp(t,n){switch(t){case"keyup":return M_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fr=!1;function T_(t,n){switch(t){case"compositionend":return vp(n);case"keypress":return n.which!==32?null:(xp=!0,mp);case"textInput":return t=n.data,t===mp&&xp?null:t;default:return null}}function A_(t,n){if(Fr)return t==="compositionend"||!cu&&gp(t,n)?(t=cp(),nl=au=Ta=null,Fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return pp&&n.locale!=="ko"?null:n.data;default:return null}}var R_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!R_[t.type]:n==="textarea"}function yp(t,n,a,o){Pr?zr?zr.push(o):zr=[o]:Pr=o,n=Zl(n,"onChange"),0<n.length&&(a=new rl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Ys=null,Zs=null;function C_(t){nx(t,0)}function ol(t){var n=Y(t);if(St(n))return t}function bp(t,n){if(t==="change")return n}var Sp=!1;if(Xi){var uu;if(Xi){var fu="oninput"in document;if(!fu){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),fu=typeof Mp.oninput=="function"}uu=fu}else uu=!1;Sp=uu&&(!document.documentMode||9<document.documentMode)}function Ep(){Ys&&(Ys.detachEvent("onpropertychange",Tp),Zs=Ys=null)}function Tp(t){if(t.propertyName==="value"&&ol(Zs)){var n=[];yp(n,Zs,t,tu(t)),lp(C_,n)}}function w_(t,n,a){t==="focusin"?(Ep(),Ys=n,Zs=a,Ys.attachEvent("onpropertychange",Tp)):t==="focusout"&&Ep()}function D_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(Zs)}function U_(t,n){if(t==="click")return ol(n)}function N_(t,n){if(t==="input"||t==="change")return ol(n)}function L_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Kn=typeof Object.is=="function"?Object.is:L_;function Ks(t,n){if(Kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ge.call(n,u)||!Kn(t[u],n[u]))return!1}return!0}function Ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rp(t,n){var a=Ap(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ap(a)}}function Cp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Cp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function wp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Sn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Sn(t.document)}return n}function du(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var O_=Xi&&"documentMode"in document&&11>=document.documentMode,Br=null,hu=null,Qs=null,pu=!1;function Dp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pu||Br==null||Br!==Sn(o)||(o=Br,"selectionStart"in o&&du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Qs&&Ks(Qs,o)||(Qs=o,o=Zl(hu,"onSelect"),0<o.length&&(n=new rl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Br)))}function or(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ir={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionrun:or("Transition","TransitionRun"),transitionstart:or("Transition","TransitionStart"),transitioncancel:or("Transition","TransitionCancel"),transitionend:or("Transition","TransitionEnd")},mu={},Up={};Xi&&(Up=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function lr(t){if(mu[t])return mu[t];if(!Ir[t])return t;var n=Ir[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Up)return mu[t]=n[a];return t}var Np=lr("animationend"),Lp=lr("animationiteration"),Op=lr("animationstart"),P_=lr("transitionrun"),z_=lr("transitionstart"),F_=lr("transitioncancel"),Pp=lr("transitionend"),zp=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function Si(t,n){zp.set(t,n),Ue(n,[t])}var ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oi=[],Hr=0,gu=0;function cl(){for(var t=Hr,n=gu=Hr=0;n<t;){var a=oi[n];oi[n++]=null;var o=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&Fp(a,u,f)}}function ul(t,n,a,o){oi[Hr++]=t,oi[Hr++]=n,oi[Hr++]=a,oi[Hr++]=o,gu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function vu(t,n,a,o){return ul(t,n,a,o),fl(t)}function cr(t,n){return ul(t,null,null,n),fl(t)}function Fp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ve(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function fl(t){if(50<yo)throw yo=0,Cf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gr={};function B_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,n,a,o){return new B_(t,n,a,o)}function _u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qi(t,n){var a=t.alternate;return a===null?(a=Qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Bp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function dl(t,n,a,o,u,f){var _=0;if(o=t,typeof t=="function")_u(t)&&(_=1);else if(typeof t=="string")_=ky(t,a,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=Qn(31,a,n,u),t.elementType=U,t.lanes=f,t;case T:return ur(a.children,u,f,n);case S:_=8,u|=24;break;case y:return t=Qn(12,a,n,u|2),t.elementType=y,t.lanes=f,t;case H:return t=Qn(13,a,n,u),t.elementType=H,t.lanes=f,t;case N:return t=Qn(19,a,n,u),t.elementType=N,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:_=10;break e;case D:_=9;break e;case O:_=11;break e;case F:_=14;break e;case X:_=16,o=null;break e}_=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Qn(_,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function ur(t,n,a,o){return t=Qn(7,t,o,n),t.lanes=a,t}function yu(t,n,a){return t=Qn(6,t,null,n),t.lanes=a,t}function Ip(t){var n=Qn(18,null,null,0);return n.stateNode=t,n}function bu(t,n,a){return n=Qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Hp=new WeakMap;function li(t,n){if(typeof t=="object"&&t!==null){var a=Hp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Pt(n)},Hp.set(t,n),n)}return{value:t,source:n,stack:Pt(n)}}var Vr=[],kr=0,hl=null,Js=0,ci=[],ui=0,Aa=null,Li=1,Oi="";function Wi(t,n){Vr[kr++]=Js,Vr[kr++]=hl,hl=t,Js=n}function Gp(t,n,a){ci[ui++]=Li,ci[ui++]=Oi,ci[ui++]=Aa,Aa=t;var o=Li;t=Oi;var u=32-Ve(o)-1;o&=~(1<<u),a+=1;var f=32-Ve(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Li=1<<32-Ve(n)+u|a<<u|o,Oi=f+t}else Li=1<<f|a<<u|o,Oi=t}function Su(t){t.return!==null&&(Wi(t,1),Gp(t,1,0))}function Mu(t){for(;t===hl;)hl=Vr[--kr],Vr[kr]=null,Js=Vr[--kr],Vr[kr]=null;for(;t===Aa;)Aa=ci[--ui],ci[ui]=null,Oi=ci[--ui],ci[ui]=null,Li=ci[--ui],ci[ui]=null}function Vp(t,n){ci[ui++]=Li,ci[ui++]=Oi,ci[ui++]=Aa,Li=n.id,Oi=n.overflow,Aa=t}var Cn=null,Kt=null,Mt=!1,Ra=null,fi=!1,Eu=Error(r(519));function Ca(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $s(li(n,t)),Eu}function kp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[cn]=t,n[gn]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)vt(So[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Yt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),Rn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||sx(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Ca(t,!0)}function jp(t){for(Cn=t.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:Cn=Cn.return}}function jr(t){if(t!==Cn)return!1;if(!Mt)return jp(t),Mt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||kf(t.type,t.memoizedProps)),a=!a),a&&Kt&&Ca(t),jp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=mx(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=mx(t)}else n===27?(n=Kt,Va(t.type)?(t=Yf,Yf=null,Kt=t):Kt=n):Kt=Cn?hi(t.stateNode.nextSibling):null;return!0}function fr(){Kt=Cn=null,Mt=!1}function Tu(){var t=Ra;return t!==null&&(kn===null?kn=t:kn.push.apply(kn,t),Ra=null),t}function $s(t){Ra===null?Ra=[t]:Ra.push(t)}var Au=z(null),dr=null,Yi=null;function wa(t,n,a){ye(Au,n._currentValue),n._currentValue=a}function Zi(t){t._currentValue=Au.current,ne(Au)}function Ru(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Cu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Ru(f.return,a,t),o||(_=null);break e}f=A.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Ru(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Xr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var A=u.type;Kn(u.pendingProps.value,_.value)||(t!==null?t.push(A):t=[A])}}else if(u===fe.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ro):t=[Ro])}u=u.return}t!==null&&Cu(n,t,a,o),n.flags|=262144}function pl(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hr(t){dr=t,Yi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return Xp(dr,t)}function ml(t,n){return dr===null&&hr(t),Xp(t,n)}function Xp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Yi===null){if(t===null)throw Error(r(308));Yi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Yi=Yi.next=n;return a}var I_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},H_=s.unstable_scheduleCallback,G_=s.unstable_NormalPriority,un={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wu(){return{controller:new I_,data:new Map,refCount:0}}function eo(t){t.refCount--,t.refCount===0&&H_(G_,function(){t.controller.abort()})}var to=null,Du=0,qr=0,Wr=null;function V_(t,n){if(to===null){var a=to=[];Du=0,qr=Of(),Wr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Du++,n.then(qp,qp),n}function qp(){if(--Du===0&&to!==null){Wr!==null&&(Wr.status="fulfilled");var t=to;to=null,qr=0,Wr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function k_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Wp=B.S;B.S=function(t,n){Dm=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&V_(t,n),Wp!==null&&Wp(t,n)};var pr=z(null);function Uu(){var t=pr.current;return t!==null?t:qt.pooledCache}function xl(t,n){n===null?ye(pr,pr.current):ye(pr,n.pool)}function Yp(){var t=Uu();return t===null?null:{parent:un._currentValue,pool:t}}var Yr=Error(r(460)),Nu=Error(r(474)),gl=Error(r(542)),vl={then:function(){}};function Zp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Kp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Jp(t),t;default:if(typeof n.status=="string")n.then(ji,ji);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Jp(t),t}throw xr=n,Yr}}function mr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xr=a,Yr):a}}var xr=null;function Qp(){if(xr===null)throw Error(r(459));var t=xr;return xr=null,t}function Jp(t){if(t===Yr||t===gl)throw Error(r(483))}var Zr=null,no=0;function _l(t){var n=no;return no+=1,Zr===null&&(Zr=[]),Kp(Zr,t,n)}function io(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function yl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function $p(t){function n(Z,j){if(t){var J=Z.deletions;J===null?(Z.deletions=[j],Z.flags|=16):J.push(j)}}function a(Z,j){if(!t)return null;for(;j!==null;)n(Z,j),j=j.sibling;return null}function o(Z){for(var j=new Map;Z!==null;)Z.key!==null?j.set(Z.key,Z):j.set(Z.index,Z),Z=Z.sibling;return j}function u(Z,j){return Z=qi(Z,j),Z.index=0,Z.sibling=null,Z}function f(Z,j,J){return Z.index=J,t?(J=Z.alternate,J!==null?(J=J.index,J<j?(Z.flags|=67108866,j):J):(Z.flags|=67108866,j)):(Z.flags|=1048576,j)}function _(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,j,J,me){return j===null||j.tag!==6?(j=yu(J,Z.mode,me),j.return=Z,j):(j=u(j,J),j.return=Z,j)}function I(Z,j,J,me){var Ke=J.type;return Ke===T?de(Z,j,J.props.children,me,J.key):j!==null&&(j.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===X&&mr(Ke)===j.type)?(j=u(j,J.props),io(j,J),j.return=Z,j):(j=dl(J.type,J.key,J.props,null,Z.mode,me),io(j,J),j.return=Z,j)}function ee(Z,j,J,me){return j===null||j.tag!==4||j.stateNode.containerInfo!==J.containerInfo||j.stateNode.implementation!==J.implementation?(j=bu(J,Z.mode,me),j.return=Z,j):(j=u(j,J.children||[]),j.return=Z,j)}function de(Z,j,J,me,Ke){return j===null||j.tag!==7?(j=ur(J,Z.mode,me,Ke),j.return=Z,j):(j=u(j,J),j.return=Z,j)}function ge(Z,j,J){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=yu(""+j,Z.mode,J),j.return=Z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case b:return J=dl(j.type,j.key,j.props,null,Z.mode,J),io(J,j),J.return=Z,J;case M:return j=bu(j,Z.mode,J),j.return=Z,j;case X:return j=mr(j),ge(Z,j,J)}if(ce(j)||q(j))return j=ur(j,Z.mode,J,null),j.return=Z,j;if(typeof j.then=="function")return ge(Z,_l(j),J);if(j.$$typeof===C)return ge(Z,ml(Z,j),J);yl(Z,j)}return null}function ie(Z,j,J,me){var Ke=j!==null?j.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ke!==null?null:A(Z,j,""+J,me);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case b:return J.key===Ke?I(Z,j,J,me):null;case M:return J.key===Ke?ee(Z,j,J,me):null;case X:return J=mr(J),ie(Z,j,J,me)}if(ce(J)||q(J))return Ke!==null?null:de(Z,j,J,me,null);if(typeof J.then=="function")return ie(Z,j,_l(J),me);if(J.$$typeof===C)return ie(Z,j,ml(Z,J),me);yl(Z,J)}return null}function le(Z,j,J,me,Ke){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Z=Z.get(J)||null,A(j,Z,""+me,Ke);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case b:return Z=Z.get(me.key===null?J:me.key)||null,I(j,Z,me,Ke);case M:return Z=Z.get(me.key===null?J:me.key)||null,ee(j,Z,me,Ke);case X:return me=mr(me),le(Z,j,J,me,Ke)}if(ce(me)||q(me))return Z=Z.get(J)||null,de(j,Z,me,Ke,null);if(typeof me.then=="function")return le(Z,j,J,_l(me),Ke);if(me.$$typeof===C)return le(Z,j,J,ml(j,me),Ke);yl(j,me)}return null}function Ie(Z,j,J,me){for(var Ke=null,wt=null,ke=j,ft=j=0,yt=null;ke!==null&&ft<J.length;ft++){ke.index>ft?(yt=ke,ke=null):yt=ke.sibling;var Dt=ie(Z,ke,J[ft],me);if(Dt===null){ke===null&&(ke=yt);break}t&&ke&&Dt.alternate===null&&n(Z,ke),j=f(Dt,j,ft),wt===null?Ke=Dt:wt.sibling=Dt,wt=Dt,ke=yt}if(ft===J.length)return a(Z,ke),Mt&&Wi(Z,ft),Ke;if(ke===null){for(;ft<J.length;ft++)ke=ge(Z,J[ft],me),ke!==null&&(j=f(ke,j,ft),wt===null?Ke=ke:wt.sibling=ke,wt=ke);return Mt&&Wi(Z,ft),Ke}for(ke=o(ke);ft<J.length;ft++)yt=le(ke,Z,ft,J[ft],me),yt!==null&&(t&&yt.alternate!==null&&ke.delete(yt.key===null?ft:yt.key),j=f(yt,j,ft),wt===null?Ke=yt:wt.sibling=yt,wt=yt);return t&&ke.forEach(function(Wa){return n(Z,Wa)}),Mt&&Wi(Z,ft),Ke}function tt(Z,j,J,me){if(J==null)throw Error(r(151));for(var Ke=null,wt=null,ke=j,ft=j=0,yt=null,Dt=J.next();ke!==null&&!Dt.done;ft++,Dt=J.next()){ke.index>ft?(yt=ke,ke=null):yt=ke.sibling;var Wa=ie(Z,ke,Dt.value,me);if(Wa===null){ke===null&&(ke=yt);break}t&&ke&&Wa.alternate===null&&n(Z,ke),j=f(Wa,j,ft),wt===null?Ke=Wa:wt.sibling=Wa,wt=Wa,ke=yt}if(Dt.done)return a(Z,ke),Mt&&Wi(Z,ft),Ke;if(ke===null){for(;!Dt.done;ft++,Dt=J.next())Dt=ge(Z,Dt.value,me),Dt!==null&&(j=f(Dt,j,ft),wt===null?Ke=Dt:wt.sibling=Dt,wt=Dt);return Mt&&Wi(Z,ft),Ke}for(ke=o(ke);!Dt.done;ft++,Dt=J.next())Dt=le(ke,Z,ft,Dt.value,me),Dt!==null&&(t&&Dt.alternate!==null&&ke.delete(Dt.key===null?ft:Dt.key),j=f(Dt,j,ft),wt===null?Ke=Dt:wt.sibling=Dt,wt=Dt);return t&&ke.forEach(function(eb){return n(Z,eb)}),Mt&&Wi(Z,ft),Ke}function Vt(Z,j,J,me){if(typeof J=="object"&&J!==null&&J.type===T&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case b:e:{for(var Ke=J.key;j!==null;){if(j.key===Ke){if(Ke=J.type,Ke===T){if(j.tag===7){a(Z,j.sibling),me=u(j,J.props.children),me.return=Z,Z=me;break e}}else if(j.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===X&&mr(Ke)===j.type){a(Z,j.sibling),me=u(j,J.props),io(me,J),me.return=Z,Z=me;break e}a(Z,j);break}else n(Z,j);j=j.sibling}J.type===T?(me=ur(J.props.children,Z.mode,me,J.key),me.return=Z,Z=me):(me=dl(J.type,J.key,J.props,null,Z.mode,me),io(me,J),me.return=Z,Z=me)}return _(Z);case M:e:{for(Ke=J.key;j!==null;){if(j.key===Ke)if(j.tag===4&&j.stateNode.containerInfo===J.containerInfo&&j.stateNode.implementation===J.implementation){a(Z,j.sibling),me=u(j,J.children||[]),me.return=Z,Z=me;break e}else{a(Z,j);break}else n(Z,j);j=j.sibling}me=bu(J,Z.mode,me),me.return=Z,Z=me}return _(Z);case X:return J=mr(J),Vt(Z,j,J,me)}if(ce(J))return Ie(Z,j,J,me);if(q(J)){if(Ke=q(J),typeof Ke!="function")throw Error(r(150));return J=Ke.call(J),tt(Z,j,J,me)}if(typeof J.then=="function")return Vt(Z,j,_l(J),me);if(J.$$typeof===C)return Vt(Z,j,ml(Z,J),me);yl(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,j!==null&&j.tag===6?(a(Z,j.sibling),me=u(j,J),me.return=Z,Z=me):(a(Z,j),me=yu(J,Z.mode,me),me.return=Z,Z=me),_(Z)):a(Z,j)}return function(Z,j,J,me){try{no=0;var Ke=Vt(Z,j,J,me);return Zr=null,Ke}catch(ke){if(ke===Yr||ke===gl)throw ke;var wt=Qn(29,ke,null,Z.mode);return wt.lanes=me,wt.return=Z,wt}finally{}}}var gr=$p(!0),e0=$p(!1),Da=!1;function Lu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ou(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Na(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Nt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=fl(t),Fp(t,null,a),n}return ul(t,o,n,a),fl(t)}function ao(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Bs(t,a)}}function Pu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var zu=!1;function ro(){if(zu){var t=Wr;if(t!==null)throw t}}function so(t,n,a,o){zu=!1;var u=t.updateQueue;Da=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,ee=I.next;I.next=null,_===null?f=ee:_.next=ee,_=I;var de=t.alternate;de!==null&&(de=de.updateQueue,A=de.lastBaseUpdate,A!==_&&(A===null?de.firstBaseUpdate=ee:A.next=ee,de.lastBaseUpdate=I))}if(f!==null){var ge=u.baseState;_=0,de=ee=I=null,A=f;do{var ie=A.lane&-536870913,le=ie!==A.lane;if(le?(_t&ie)===ie:(o&ie)===ie){ie!==0&&ie===qr&&(zu=!0),de!==null&&(de=de.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Ie=t,tt=A;ie=n;var Vt=a;switch(tt.tag){case 1:if(Ie=tt.payload,typeof Ie=="function"){ge=Ie.call(Vt,ge,ie);break e}ge=Ie;break e;case 3:Ie.flags=Ie.flags&-65537|128;case 0:if(Ie=tt.payload,ie=typeof Ie=="function"?Ie.call(Vt,ge,ie):Ie,ie==null)break e;ge=x({},ge,ie);break e;case 2:Da=!0}}ie=A.callback,ie!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[ie]:le.push(ie))}else le={lane:ie,tag:A.tag,payload:A.payload,callback:A.callback,next:null},de===null?(ee=de=le,I=ge):de=de.next=le,_|=ie;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;le=A,A=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);de===null&&(I=ge),u.baseState=I,u.firstBaseUpdate=ee,u.lastBaseUpdate=de,f===null&&(u.shared.lanes=0),Fa|=_,t.lanes=_,t.memoizedState=ge}}function t0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function n0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)t0(a[t],n)}var Kr=z(null),bl=z(0);function i0(t,n){t=aa,ye(bl,t),ye(Kr,n),aa=t|n.baseLanes}function Fu(){ye(bl,aa),ye(Kr,Kr.current)}function Bu(){aa=bl.current,ne(Kr),ne(bl)}var Jn=z(null),di=null;function La(t){var n=t.alternate;ye(rn,rn.current&1),ye(Jn,t),di===null&&(n===null||Kr.current!==null||n.memoizedState!==null)&&(di=t)}function Iu(t){ye(rn,rn.current),ye(Jn,t),di===null&&(di=t)}function a0(t){t.tag===22?(ye(rn,rn.current),ye(Jn,t),di===null&&(di=t)):Oa()}function Oa(){ye(rn,rn.current),ye(Jn,Jn.current)}function $n(t){ne(Jn),di===t&&(di=null),ne(rn)}var rn=z(0);function Sl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||qf(a)||Wf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ki=0,ot=null,Ht=null,fn=null,Ml=!1,Qr=!1,vr=!1,El=0,oo=0,Jr=null,j_=0;function tn(){throw Error(r(321))}function Hu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Kn(t[a],n[a]))return!1;return!0}function Gu(t,n,a,o,u,f){return Ki=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?G0:nf,vr=!1,f=a(o,u),vr=!1,Qr&&(f=s0(n,a,o,u)),r0(t),f}function r0(t){B.H=uo;var n=Ht!==null&&Ht.next!==null;if(Ki=0,fn=Ht=ot=null,Ml=!1,oo=0,Jr=null,n)throw Error(r(300));t===null||dn||(t=t.dependencies,t!==null&&pl(t)&&(dn=!0))}function s0(t,n,a,o){ot=t;var u=0;do{if(Qr&&(Jr=null),oo=0,Qr=!1,25<=u)throw Error(r(301));if(u+=1,fn=Ht=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=V0,f=n(a,o)}while(Qr);return f}function X_(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?lo(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(ot.flags|=1024),n}function Vu(){var t=El!==0;return El=0,t}function ku(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ju(t){if(Ml){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ml=!1}Ki=0,fn=Ht=ot=null,Qr=!1,oo=El=0,Jr=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?ot.memoizedState=fn=t:fn=fn.next=t,fn}function sn(){if(Ht===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=fn===null?ot.memoizedState:fn.next;if(n!==null)fn=n,Ht=t;else{if(t===null)throw ot.alternate===null?Error(r(467)):Error(r(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},fn===null?ot.memoizedState=fn=t:fn=fn.next=t}return fn}function Tl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lo(t){var n=oo;return oo+=1,Jr===null&&(Jr=[]),t=Kp(Jr,t,n),n=ot,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?G0:nf),t}function Al(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return lo(t);if(t.$$typeof===C)return wn(t)}throw Error(r(438,String(t)))}function Xu(t){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ot.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tl(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=R;return n.index++,a}function Qi(t,n){return typeof n=="function"?n(t):n}function Rl(t){var n=sn();return qu(n,Ht,t)}function qu(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var A=_=null,I=null,ee=n,de=!1;do{var ge=ee.lane&-536870913;if(ge!==ee.lane?(_t&ge)===ge:(Ki&ge)===ge){var ie=ee.revertLane;if(ie===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),ge===qr&&(de=!0);else if((Ki&ie)===ie){ee=ee.next,ie===qr&&(de=!0);continue}else ge={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},I===null?(A=I=ge,_=f):I=I.next=ge,ot.lanes|=ie,Fa|=ie;ge=ee.action,vr&&a(f,ge),f=ee.hasEagerState?ee.eagerState:a(f,ge)}else ie={lane:ge,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},I===null?(A=I=ie,_=f):I=I.next=ie,ot.lanes|=ge,Fa|=ge;ee=ee.next}while(ee!==null&&ee!==n);if(I===null?_=f:I.next=A,!Kn(f,t.memoizedState)&&(dn=!0,de&&(a=Wr,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=I,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Wu(t){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);Kn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function o0(t,n,a){var o=ot,u=sn(),f=Mt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!Kn((Ht||u).memoizedState,a);if(_&&(u.memoizedState=a,dn=!0),u=u.queue,Ku(u0.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,$r(9,{destroy:void 0},c0.bind(null,o,u,a,n),null),qt===null)throw Error(r(349));f||(Ki&127)!==0||l0(o,n,a)}return a}function l0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=Tl(),ot.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function c0(t,n,a,o){n.value=a,n.getSnapshot=o,f0(n)&&d0(t)}function u0(t,n,a){return a(function(){f0(n)&&d0(t)})}function f0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Kn(t,a)}catch{return!0}}function d0(t){var n=cr(t,2);n!==null&&jn(n,t,2)}function Yu(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),vr){We(!0);try{a()}finally{We(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:t},n}function h0(t,n,a,o){return t.baseState=a,qu(t,Ht,typeof o=="function"?o:Qi)}function q_(t,n,a,o,u){if(Dl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,p0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function p0(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=B.T,_={};B.T=_;try{var A=a(u,o),I=B.S;I!==null&&I(_,A),m0(t,n,A)}catch(ee){Zu(t,n,ee)}finally{f!==null&&_.types!==null&&(f.types=_.types),B.T=f}}else try{f=a(u,o),m0(t,n,f)}catch(ee){Zu(t,n,ee)}}function m0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){x0(t,n,o)},function(o){return Zu(t,n,o)}):x0(t,n,a)}function x0(t,n,a){n.status="fulfilled",n.value=a,g0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,p0(t,a)))}function Zu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,g0(n),n=n.next;while(n!==o)}t.action=null}function g0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function v0(t,n){return n}function _0(t,n){if(Mt){var a=qt.formState;if(a!==null){e:{var o=ot;if(Mt){if(Kt){t:{for(var u=Kt,f=fi;u.nodeType!==8;){if(!f){u=null;break t}if(u=hi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Kt=hi(u.nextSibling),o=u.data==="F!";break e}}Ca(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:v0,lastRenderedState:n},a.queue=o,a=B0.bind(null,ot,o),o.dispatch=a,o=Yu(!1),f=tf.bind(null,ot,!1,o.queue),o=Fn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=q_.bind(null,ot,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function y0(t){var n=sn();return b0(n,Ht,t)}function b0(t,n,a){if(n=qu(t,n,v0)[0],t=Rl(Qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=lo(n)}catch(_){throw _===Yr?gl:_}else o=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,$r(9,{destroy:void 0},W_.bind(null,u,a),null)),[o,f,t]}function W_(t,n){t.action=n}function S0(t){var n=sn(),a=Ht;if(a!==null)return b0(n,a,t);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function $r(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ot.updateQueue,n===null&&(n=Tl(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function M0(){return sn().memoizedState}function Cl(t,n,a,o){var u=Fn();ot.flags|=t,u.memoizedState=$r(1|n,{destroy:void 0},a,o===void 0?null:o)}function wl(t,n,a,o){var u=sn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ht!==null&&o!==null&&Hu(o,Ht.memoizedState.deps)?u.memoizedState=$r(n,f,a,o):(ot.flags|=t,u.memoizedState=$r(1|n,f,a,o))}function E0(t,n){Cl(8390656,8,t,n)}function Ku(t,n){wl(2048,8,t,n)}function Y_(t){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=Tl(),ot.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function T0(t){var n=sn().memoizedState;return Y_({ref:n,nextImpl:t}),function(){if((Nt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function A0(t,n){return wl(4,2,t,n)}function R0(t,n){return wl(4,4,t,n)}function C0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function w0(t,n,a){a=a!=null?a.concat([t]):null,wl(4,4,C0.bind(null,n,t),a)}function Qu(){}function D0(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Hu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function U0(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Hu(n,o[1]))return o[0];if(o=t(),vr){We(!0);try{t()}finally{We(!1)}}return a.memoizedState=[o,n],o}function Ju(t,n,a){return a===void 0||(Ki&1073741824)!==0&&(_t&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Nm(),ot.lanes|=t,Fa|=t,a)}function N0(t,n,a,o){return Kn(a,n)?a:Kr.current!==null?(t=Ju(t,a,o),Kn(t,n)||(dn=!0),t):(Ki&42)===0||(Ki&1073741824)!==0&&(_t&261930)===0?(dn=!0,t.memoizedState=a):(t=Nm(),ot.lanes|=t,Fa|=t,n)}function L0(t,n,a,o,u){var f=K.p;K.p=f!==0&&8>f?f:8;var _=B.T,A={};B.T=A,tf(t,!1,n,a);try{var I=u(),ee=B.S;if(ee!==null&&ee(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var de=k_(I,o);co(t,n,de,ni(t))}else co(t,n,o,ni(t))}catch(ge){co(t,n,{then:function(){},status:"rejected",reason:ge},ni())}finally{K.p=f,_!==null&&A.types!==null&&(_.types=A.types),B.T=_}}function Z_(){}function $u(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=O0(t).queue;L0(t,u,n,W,a===null?Z_:function(){return P0(t),a(o)})}function O0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function P0(t){var n=O0(t);n.next===null&&(n=t.alternate.memoizedState),co(t,n.next.queue,{},ni())}function ef(){return wn(Ro)}function z0(){return sn().memoizedState}function F0(){return sn().memoizedState}function K_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();t=Ua(a);var o=Na(n,t,a);o!==null&&(jn(o,n,a),ao(o,n,a)),n={cache:wu()},t.payload=n;return}n=n.return}}function Q_(t,n,a){var o=ni();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(t)?I0(n,a):(a=vu(t,n,a,o),a!==null&&(jn(a,t,o),H0(a,n,o)))}function B0(t,n,a){var o=ni();co(t,n,a,o)}function co(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(t))I0(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,A=f(_,a);if(u.hasEagerState=!0,u.eagerState=A,Kn(A,_))return ul(t,n,u,0),qt===null&&cl(),!1}catch{}finally{}if(a=vu(t,n,u,o),a!==null)return jn(a,t,o),H0(a,n,o),!0}return!1}function tf(t,n,a,o){if(o={lane:2,revertLane:Of(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Dl(t)){if(n)throw Error(r(479))}else n=vu(t,a,o,2),n!==null&&jn(n,t,2)}function Dl(t){var n=t.alternate;return t===ot||n!==null&&n===ot}function I0(t,n){Qr=Ml=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function H0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Bs(t,a)}}var uo={readContext:wn,use:Al,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};uo.useEffectEvent=tn;var G0={readContext:wn,use:Al,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:E0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Cl(4194308,4,C0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Cl(4194308,4,t,n)},useInsertionEffect:function(t,n){Cl(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var o=t();if(vr){We(!0);try{t()}finally{We(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Fn();if(a!==void 0){var u=a(n);if(vr){We(!0);try{a(n)}finally{We(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Q_.bind(null,ot,t),[o.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=Yu(t);var n=t.queue,a=B0.bind(null,ot,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Qu,useDeferredValue:function(t,n){var a=Fn();return Ju(a,t,n)},useTransition:function(){var t=Yu(!1);return t=L0.bind(null,ot,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ot,u=Fn();if(Mt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qt===null)throw Error(r(349));(_t&127)!==0||l0(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,E0(u0.bind(null,o,f,t),[t]),o.flags|=2048,$r(9,{destroy:void 0},c0.bind(null,o,f,a,n),null),a},useId:function(){var t=Fn(),n=qt.identifierPrefix;if(Mt){var a=Oi,o=Li;a=(o&~(1<<32-Ve(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=j_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ef,useFormState:_0,useActionState:_0,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=tf.bind(null,ot,!0,a),a.dispatch=n,[t,n]},useMemoCache:Xu,useCacheRefresh:function(){return Fn().memoizedState=K_.bind(null,ot)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},nf={readContext:wn,use:Al,useCallback:D0,useContext:wn,useEffect:Ku,useImperativeHandle:w0,useInsertionEffect:A0,useLayoutEffect:R0,useMemo:U0,useReducer:Rl,useRef:M0,useState:function(){return Rl(Qi)},useDebugValue:Qu,useDeferredValue:function(t,n){var a=sn();return N0(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Rl(Qi)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:o0,useId:z0,useHostTransitionStatus:ef,useFormState:y0,useActionState:y0,useOptimistic:function(t,n){var a=sn();return h0(a,Ht,t,n)},useMemoCache:Xu,useCacheRefresh:F0};nf.useEffectEvent=T0;var V0={readContext:wn,use:Al,useCallback:D0,useContext:wn,useEffect:Ku,useImperativeHandle:w0,useInsertionEffect:A0,useLayoutEffect:R0,useMemo:U0,useReducer:Wu,useRef:M0,useState:function(){return Wu(Qi)},useDebugValue:Qu,useDeferredValue:function(t,n){var a=sn();return Ht===null?Ju(a,t,n):N0(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Wu(Qi)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:o0,useId:z0,useHostTransitionStatus:ef,useFormState:S0,useActionState:S0,useOptimistic:function(t,n){var a=sn();return Ht!==null?h0(a,Ht,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Xu,useCacheRefresh:F0};V0.useEffectEvent=T0;function af(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var rf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ni(),u=Ua(o);u.payload=n,a!=null&&(u.callback=a),n=Na(t,u,o),n!==null&&(jn(n,t,o),ao(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ni(),u=Ua(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Na(t,u,o),n!==null&&(jn(n,t,o),ao(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ni(),o=Ua(a);o.tag=2,n!=null&&(o.callback=n),n=Na(t,o,a),n!==null&&(jn(n,t,a),ao(n,t,a))}};function k0(t,n,a,o,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!Ks(a,o)||!Ks(u,f):!0}function j0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&rf.enqueueReplaceState(n,n.state,null)}function _r(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function X0(t){ll(t)}function q0(t){console.error(t)}function W0(t){ll(t)}function Ul(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Y0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function sf(t,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(t,n)},a}function Z0(t){return t=Ua(t),t.tag=3,t}function K0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Y0(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Y0(n,a,o),typeof u!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function J_(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Xr(n,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?kl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===vl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Uf(t,o,u)),!1;case 22:return a.flags|=65536,o===vl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Uf(t,o,u)),!1}throw Error(r(435,a.tag))}return Uf(t,o,u),kl(),!1}if(Mt)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Eu&&(t=Error(r(422),{cause:o}),$s(li(t,a)))):(o!==Eu&&(n=Error(r(423),{cause:o}),$s(li(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=li(o,a),u=sf(t.stateNode,o,u),Pu(t,u),nn!==4&&(nn=2)),!1;var f=Error(r(520),{cause:o});if(f=li(f,a),_o===null?_o=[f]:_o.push(f),nn!==4&&(nn=2),n===null)return!0;o=li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=sf(a.stateNode,o,t),Pu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ba===null||!Ba.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Z0(u),K0(u,t,a,o),Pu(a,u),!1}a=a.return}while(a!==null);return!1}var of=Error(r(461)),dn=!1;function Dn(t,n,a,o){n.child=t===null?e0(n,null,a,o):gr(n,t.child,a,o)}function Q0(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var A in o)A!=="ref"&&(_[A]=o[A])}else _=o;return hr(n),o=Gu(t,n,a,_,f,u),A=Vu(),t!==null&&!dn?(ku(t,n,u),Ji(t,n,u)):(Mt&&A&&Su(n),n.flags|=1,Dn(t,n,o,u),n.child)}function J0(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!_u(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,$0(t,n,f,o,u)):(t=dl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!mf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ks,a(_,o)&&t.ref===n.ref)return Ji(t,n,u)}return n.flags|=1,t=qi(f,o),t.ref=n.ref,t.return=n,n.child=t}function $0(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(Ks(f,o)&&t.ref===n.ref)if(dn=!1,n.pendingProps=o=f,mf(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,Ji(t,n,u)}return lf(t,n,a,o,u)}function em(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return tm(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&xl(n,f!==null?f.cachePool:null),f!==null?i0(n,f):Fu(),a0(n);else return o=n.lanes=536870912,tm(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(xl(n,f.cachePool),i0(n,f),Oa(),n.memoizedState=null):(t!==null&&xl(n,null),Fu(),Oa());return Dn(t,n,u,a),n.child}function fo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function tm(t,n,a,o,u){var f=Uu();return f=f===null?null:{parent:un._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&xl(n,null),Fu(),a0(n),t!==null&&Xr(t,n,o,!0),n.childLanes=u,null}function Nl(t,n){return n=Ol({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function nm(t,n,a){return gr(n,t.child,null,a),t=Nl(n,n.pendingProps),t.flags|=2,$n(n),n.memoizedState=null,t}function $_(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Mt){if(o.mode==="hidden")return t=Nl(n,o),n.lanes=536870912,fo(null,t);if(Iu(n),(t=Kt)?(t=px(t,fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Ip(t),a.return=n,n.child=a,Cn=n,Kt=null)):t=null,t===null)throw Ca(n);return n.lanes=536870912,null}return Nl(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Iu(n),u)if(n.flags&256)n.flags&=-257,n=nm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(dn||Xr(t,n,a,!1),u=(a&t.childLanes)!==0,dn||u){if(o=qt,o!==null&&(_=Is(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,cr(t,_),jn(o,t,_),of;kl(),n=nm(t,n,a)}else t=f.treeContext,Kt=hi(_.nextSibling),Cn=n,Mt=!0,Ra=null,fi=!1,t!==null&&Vp(n,t),n=Nl(n,o),n.flags|=4096;return n}return t=qi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ll(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function lf(t,n,a,o,u){return hr(n),a=Gu(t,n,a,o,void 0,u),o=Vu(),t!==null&&!dn?(ku(t,n,u),Ji(t,n,u)):(Mt&&o&&Su(n),n.flags|=1,Dn(t,n,a,u),n.child)}function im(t,n,a,o,u,f){return hr(n),n.updateQueue=null,a=s0(n,o,a,u),r0(t),o=Vu(),t!==null&&!dn?(ku(t,n,f),Ji(t,n,f)):(Mt&&o&&Su(n),n.flags|=1,Dn(t,n,a,f),n.child)}function am(t,n,a,o,u){if(hr(n),n.stateNode===null){var f=Gr,_=a.contextType;typeof _=="object"&&_!==null&&(f=wn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=rf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Lu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?wn(_):Gr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(af(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&rf.enqueueReplaceState(f,f.state,null),so(n,o,f,u),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,I=_r(a,A);f.props=I;var ee=f.context,de=a.contextType;_=Gr,typeof de=="object"&&de!==null&&(_=wn(de));var ge=a.getDerivedStateFromProps;de=typeof ge=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||ee!==_)&&j0(n,f,o,_),Da=!1;var ie=n.memoizedState;f.state=ie,so(n,o,f,u),ro(),ee=n.memoizedState,A||ie!==ee||Da?(typeof ge=="function"&&(af(n,a,ge,o),ee=n.memoizedState),(I=Da||k0(n,a,I,o,ie,ee,_))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),f.props=o,f.state=ee,f.context=_,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Ou(t,n),_=n.memoizedProps,de=_r(a,_),f.props=de,ge=n.pendingProps,ie=f.context,ee=a.contextType,I=Gr,typeof ee=="object"&&ee!==null&&(I=wn(ee)),A=a.getDerivedStateFromProps,(ee=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==ge||ie!==I)&&j0(n,f,o,I),Da=!1,ie=n.memoizedState,f.state=ie,so(n,o,f,u),ro();var le=n.memoizedState;_!==ge||ie!==le||Da||t!==null&&t.dependencies!==null&&pl(t.dependencies)?(typeof A=="function"&&(af(n,a,A,o),le=n.memoizedState),(de=Da||k0(n,a,de,o,ie,le,I)||t!==null&&t.dependencies!==null&&pl(t.dependencies))?(ee||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=I,o=de):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ll(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=gr(n,t.child,null,u),n.child=gr(n,null,a,u)):Dn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Ji(t,n,u),t}function rm(t,n,a,o){return fr(),n.flags|=256,Dn(t,n,a,o),n.child}var cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uf(t){return{baseLanes:t,cachePool:Yp()}}function ff(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ti),t}function sm(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Mt){if(u?La(n):Oa(),(t=Kt)?(t=px(t,fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Ip(t),a.return=n,n.child=a,Cn=n,Kt=null)):t=null,t===null)throw Ca(n);return Wf(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Oa(),u=n.mode,A=Ol({mode:"hidden",children:A},u),o=ur(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=uf(a),o.childLanes=ff(t,_,a),n.memoizedState=cf,fo(null,o)):(La(n),df(n,A))}var I=t.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(f)n.flags&256?(La(n),n.flags&=-257,n=hf(t,n,a)):n.memoizedState!==null?(Oa(),n.child=t.child,n.flags|=128,n=null):(Oa(),A=o.fallback,u=n.mode,o=Ol({mode:"visible",children:o.children},u),A=ur(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,gr(n,t.child,null,a),o=n.child,o.memoizedState=uf(a),o.childLanes=ff(t,_,a),n.memoizedState=cf,n=fo(null,o));else if(La(n),Wf(A)){if(_=A.nextSibling&&A.nextSibling.dataset,_)var ee=_.dgst;_=ee,o=Error(r(419)),o.stack="",o.digest=_,$s({value:o,source:null,stack:null}),n=hf(t,n,a)}else if(dn||Xr(t,n,a,!1),_=(a&t.childLanes)!==0,dn||_){if(_=qt,_!==null&&(o=Is(_,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,cr(t,o),jn(_,t,o),of;qf(A)||kl(),n=hf(t,n,a)}else qf(A)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,Kt=hi(A.nextSibling),Cn=n,Mt=!0,Ra=null,fi=!1,t!==null&&Vp(n,t),n=df(n,o.children),n.flags|=4096);return n}return u?(Oa(),A=o.fallback,u=n.mode,I=t.child,ee=I.sibling,o=qi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,ee!==null?A=qi(ee,A):(A=ur(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,fo(null,o),o=n.child,A=t.child.memoizedState,A===null?A=uf(a):(u=A.cachePool,u!==null?(I=un._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=Yp(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=ff(t,_,a),n.memoizedState=cf,fo(t.child,o)):(La(n),a=t.child,t=a.sibling,a=qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function df(t,n){return n=Ol({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ol(t,n){return t=Qn(22,t,null,n),t.lanes=0,t}function hf(t,n,a){return gr(n,t.child,null,a),t=df(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function om(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ru(t.return,n,a)}function pf(t,n,a,o,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function lm(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=rn.current,A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,ye(rn,_),Dn(t,n,o,a),o=Mt?Js:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&om(t,a,n);else if(t.tag===19)om(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Sl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),pf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Sl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}pf(n,!0,a,null,f,o);break;case"together":pf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ji(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Fa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Xr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=qi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=qi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function mf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&pl(t)))}function ey(t,n,a){switch(n.tag){case 3:we(n,n.stateNode.containerInfo),wa(n,un,t.memoizedState.cache),fr();break;case 27:case 5:je(n);break;case 4:we(n,n.stateNode.containerInfo);break;case 10:wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Iu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?sm(t,n,a):(La(n),t=Ji(t,n,a),t!==null?t.sibling:null);La(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Xr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return lm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ye(rn,rn.current),o)break;return null;case 22:return n.lanes=0,em(t,n,a,n.pendingProps);case 24:wa(n,un,t.memoizedState.cache)}return Ji(t,n,a)}function cm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!mf(t,a)&&(n.flags&128)===0)return dn=!1,ey(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,Mt&&(n.flags&1048576)!==0&&Gp(n,Js,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=mr(n.elementType),n.type=t,typeof t=="function")_u(t)?(o=_r(t,o),n.tag=1,n=am(null,n,t,o,a)):(n.tag=0,n=lf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===O){n.tag=11,n=Q0(null,n,t,o,a);break e}else if(u===F){n.tag=14,n=J0(null,n,t,o,a);break e}}throw n=he(t)||t,Error(r(306,n,""))}}return n;case 0:return lf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=_r(o,n.pendingProps),am(t,n,o,u,a);case 3:e:{if(we(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Ou(t,n),so(n,o,null,a);var _=n.memoizedState;if(o=_.cache,wa(n,un,o),o!==f.cache&&Cu(n,[un],a,!0),ro(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=rm(t,n,o,a);break e}else if(o!==u){u=li(Error(r(424)),n),$s(u),n=rm(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=hi(t.firstChild),Cn=n,Mt=!0,Ra=null,fi=!0,a=e0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(fr(),o===u){n=Ji(t,n,a);break e}Dn(t,n,o,a)}n=n.child}return n;case 26:return Ll(t,n),t===null?(a=yx(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,t=n.pendingProps,o=Kl(ae.current).createElement(a),o[cn]=n,o[gn]=t,Un(o,a,t),te(o),n.stateNode=o):n.memoizedState=yx(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return je(n),t===null&&Mt&&(o=n.stateNode=gx(n.type,n.pendingProps,ae.current),Cn=n,fi=!0,u=Kt,Va(n.type)?(Yf=u,Kt=hi(o.firstChild)):Kt=u),Dn(t,n,n.pendingProps.children,a),Ll(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Mt&&((u=o=Kt)&&(o=Dy(o,n.type,n.pendingProps,fi),o!==null?(n.stateNode=o,Cn=n,Kt=hi(o.firstChild),fi=!1,u=!0):u=!1),u||Ca(n)),je(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,kf(u,f)?o=null:_!==null&&kf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Gu(t,n,X_,null,null,a),Ro._currentValue=u),Ll(t,n),Dn(t,n,o,a),n.child;case 6:return t===null&&Mt&&((t=a=Kt)&&(a=Uy(a,n.pendingProps,fi),a!==null?(n.stateNode=a,Cn=n,Kt=null,t=!0):t=!1),t||Ca(n)),null;case 13:return sm(t,n,a);case 4:return we(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=gr(n,null,o,a):Dn(t,n,o,a),n.child;case 11:return Q0(t,n,n.type,n.pendingProps,a);case 7:return Dn(t,n,n.pendingProps,a),n.child;case 8:return Dn(t,n,n.pendingProps.children,a),n.child;case 12:return Dn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,wa(n,n.type,o.value),Dn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,hr(n),u=wn(u),o=o(u),n.flags|=1,Dn(t,n,o,a),n.child;case 14:return J0(t,n,n.type,n.pendingProps,a);case 15:return $0(t,n,n.type,n.pendingProps,a);case 19:return lm(t,n,a);case 31:return $_(t,n,a);case 22:return em(t,n,a,n.pendingProps);case 24:return hr(n),o=wn(un),t===null?(u=Uu(),u===null&&(u=qt,f=wu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Lu(n),wa(n,un,u)):((t.lanes&a)!==0&&(Ou(t,n),so(n,null,null,a),ro()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),wa(n,un,o)):(o=f.cache,wa(n,un,o),o!==u.cache&&Cu(n,[un],a,!0))),Dn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function $i(t){t.flags|=4}function xf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(zm())t.flags|=8192;else throw xr=vl,Nu}else t.flags&=-16777217}function um(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Tx(n))if(zm())t.flags|=8192;else throw xr=vl,Nu}function Pl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?It():536870912,t.lanes|=n,is|=n)}function ho(t,n){if(!Mt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function ty(t,n,a){var o=n.pendingProps;switch(Mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Zi(un),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(jr(n)?$i(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tu())),Qt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?($i(n),f!==null?(Qt(n),um(n,f)):(Qt(n),xf(n,u,null,o,a))):f?f!==t.memoizedState?($i(n),Qt(n),um(n,f)):(Qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&$i(n),Qt(n),xf(n,u,t,o,a)),null;case 27:if(ct(n),a=ae.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}t=Te.current,jr(n)?kp(n):(t=gx(u,o,a),n.stateNode=t,$i(n))}return Qt(n),null;case 5:if(ct(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}if(f=Te.current,jr(n))kp(n);else{var _=Kl(ae.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[cn]=n,f[gn]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Un(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&$i(n)}}return Qt(n),xf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&$i(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ae.current,jr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||sx(t.nodeValue,a)),t||Ca(n,!0)}else t=Kl(t).createTextNode(o),t[cn]=n,n.stateNode=t}return Qt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=jr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[cn]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),t=!1}else a=Tu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=jr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=Tu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),Qt(n),null);case 4:return He(),t===null&&Bf(n.stateNode.containerInfo),Qt(n),null;case 10:return Zi(n.type),Qt(n),null;case 19:if(ne(rn),o=n.memoizedState,o===null)return Qt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)ho(o,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Sl(t),f!==null){for(n.flags|=128,ho(o,!1),t=f.updateQueue,n.updateQueue=t,Pl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Bp(a,t),a=a.sibling;return ye(rn,rn.current&1|2),Mt&&Wi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&E()>Hl&&(n.flags|=128,u=!0,ho(o,!1),n.lanes=4194304)}else{if(!u)if(t=Sl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Pl(n,t),ho(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Mt)return Qt(n),null}else 2*E()-o.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,u=!0,ho(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=E(),t.sibling=null,a=rn.current,ye(rn,u?a&1|2:a&1),Mt&&Wi(n,o.treeForkCount),t):(Qt(n),null);case 22:case 23:return $n(n),Bu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ne(pr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Zi(un),Qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ny(t,n){switch(Mu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Zi(un),He(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ct(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(r(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if($n(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ne(rn),null;case 4:return He(),null;case 10:return Zi(n.type),null;case 22:case 23:return $n(n),Bu(),t!==null&&ne(pr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Zi(un),null;case 25:return null;default:return null}}function fm(t,n){switch(Mu(n),n.tag){case 3:Zi(un),He();break;case 26:case 27:case 5:ct(n);break;case 4:He();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:ne(rn);break;case 10:Zi(n.type);break;case 22:case 23:$n(n),Bu(),t!==null&&ne(pr);break;case 24:Zi(un)}}function po(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(A){Ft(n,n.return,A)}}function Pa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var _=o.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,u=n;var I=a,ee=A;try{ee()}catch(de){Ft(u,I,de)}}}o=o.next}while(o!==f)}}catch(de){Ft(n,n.return,de)}}function dm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{n0(n,a)}catch(o){Ft(t,t.return,o)}}}function hm(t,n,a){a.props=_r(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ft(t,n,o)}}function mo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ft(t,n,u)}}function Pi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ft(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ft(t,n,u)}else a.current=null}function pm(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ft(t,t.return,u)}}function gf(t,n,a){try{var o=t.stateNode;Ey(o,t.type,a,n),o[gn]=n}catch(u){Ft(t,t.return,u)}}function mm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Va(t.type)||t.tag===4}function vf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Va(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _f(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(o!==4&&(o===27&&Va(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(_f(t,n,a),t=t.sibling;t!==null;)_f(t,n,a),t=t.sibling}function zl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(zl(t,n,a),t=t.sibling;t!==null;)zl(t,n,a),t=t.sibling}function xm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,a),n[cn]=t,n[gn]=a}catch(f){Ft(t,t.return,f)}}var ea=!1,hn=!1,yf=!1,gm=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function iy(t,n){if(t=t.containerInfo,Gf=ic,t=wp(t),du(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,A=-1,I=-1,ee=0,de=0,ge=t,ie=null;t:for(;;){for(var le;ge!==a||u!==0&&ge.nodeType!==3||(A=_+u),ge!==f||o!==0&&ge.nodeType!==3||(I=_+o),ge.nodeType===3&&(_+=ge.nodeValue.length),(le=ge.firstChild)!==null;)ie=ge,ge=le;for(;;){if(ge===t)break t;if(ie===a&&++ee===u&&(A=_),ie===f&&++de===o&&(I=_),(le=ge.nextSibling)!==null)break;ge=ie,ie=ge.parentNode}ge=le}a=A===-1||I===-1?null:{start:A,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vf={focusedElem:t,selectionRange:a},ic=!1,Tn=n;Tn!==null;)if(n=Tn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Tn=t;else for(;Tn!==null;){switch(n=Tn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ie=_r(a.type,u);t=o.getSnapshotBeforeUpdate(Ie,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Ft(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Xf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Xf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Tn=t;break}Tn=n.return}}function vm(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:na(t,a),o&4&&po(5,a);break;case 1:if(na(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Ft(a,a.return,_)}else{var u=_r(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ft(a,a.return,_)}}o&64&&dm(a),o&512&&mo(a,a.return);break;case 3:if(na(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{n0(t,n)}catch(_){Ft(a,a.return,_)}}break;case 27:n===null&&o&4&&xm(a);case 26:case 5:na(t,a),n===null&&o&4&&pm(a),o&512&&mo(a,a.return);break;case 12:na(t,a);break;case 31:na(t,a),o&4&&bm(t,a);break;case 13:na(t,a),o&4&&Sm(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=dy.bind(null,a),Ny(t,a))));break;case 22:if(o=a.memoizedState!==null||ea,!o){n=n!==null&&n.memoizedState!==null||hn,u=ea;var f=hn;ea=o,(hn=n)&&!f?ia(t,a,(a.subtreeFlags&8772)!==0):na(t,a),ea=u,hn=f}break;case 30:break;default:na(t,a)}}function _m(t){var n=t.alternate;n!==null&&(t.alternate=null,_m(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Vs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,Hn=!1;function ta(t,n,a){for(a=a.child;a!==null;)ym(t,n,a),a=a.sibling}function ym(t,n,a){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(Se,a)}catch{}switch(a.tag){case 26:hn||Pi(a,n),ta(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Pi(a,n);var o=$t,u=Hn;Va(a.type)&&($t=a.stateNode,Hn=!1),ta(t,n,a),Eo(a.stateNode),$t=o,Hn=u;break;case 5:hn||Pi(a,n);case 6:if(o=$t,u=Hn,$t=null,ta(t,n,a),$t=o,Hn=u,$t!==null)if(Hn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{$t.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:$t!==null&&(Hn?(t=$t,dx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),fs(t)):dx($t,a.stateNode));break;case 4:o=$t,u=Hn,$t=a.stateNode.containerInfo,Hn=!0,ta(t,n,a),$t=o,Hn=u;break;case 0:case 11:case 14:case 15:Pa(2,a,n),hn||Pa(4,a,n),ta(t,n,a);break;case 1:hn||(Pi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&hm(a,n,o)),ta(t,n,a);break;case 21:ta(t,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,ta(t,n,a),hn=o;break;default:ta(t,n,a)}}function bm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{fs(t)}catch(a){Ft(n,n.return,a)}}}function Sm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fs(t)}catch(a){Ft(n,n.return,a)}}function ay(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new gm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new gm),n;default:throw Error(r(435,t.tag))}}function Fl(t,n){var a=ay(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=hy.bind(null,t,o);o.then(u,u)}})}function Gn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,_=n,A=_;e:for(;A!==null;){switch(A.tag){case 27:if(Va(A.type)){$t=A.stateNode,Hn=!1;break e}break;case 5:$t=A.stateNode,Hn=!1;break e;case 3:case 4:$t=A.stateNode.containerInfo,Hn=!0;break e}A=A.return}if($t===null)throw Error(r(160));ym(f,_,u),$t=null,Hn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Mm(n,t),n=n.sibling}var Mi=null;function Mm(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gn(n,t),Vn(t),o&4&&(Pa(3,t,t.return),po(3,t),Pa(5,t,t.return));break;case 1:Gn(n,t),Vn(t),o&512&&(hn||a===null||Pi(a,a.return)),o&64&&ea&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Mi;if(Gn(n,t),Vn(t),o&512&&(hn||a===null||Pi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[rr]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Un(f,o,a),f[cn]=t,te(f),o=f;break e;case"link":var _=Mx("link","href",u).get(o+(a.href||""));if(_){for(var A=0;A<_.length;A++)if(f=_[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(A,1);break t}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;case"meta":if(_=Mx("meta","content",u).get(o+(a.content||""))){for(A=0;A<_.length;A++)if(f=_[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(A,1);break t}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[cn]=t,te(f),o=f}t.stateNode=o}else Ex(u,t.type,t.stateNode);else t.stateNode=Sx(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Ex(u,t.type,t.stateNode):Sx(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&gf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,t),Vn(t),o&512&&(hn||a===null||Pi(a,a.return)),a!==null&&o&4&&gf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,t),Vn(t),o&512&&(hn||a===null||Pi(a,a.return)),t.flags&32){u=t.stateNode;try{Ni(u,"")}catch(Ie){Ft(t,t.return,Ie)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,gf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(yf=!0);break;case 6:if(Gn(n,t),Vn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ie){Ft(t,t.return,Ie)}}break;case 3:if($l=null,u=Mi,Mi=Ql(n.containerInfo),Gn(n,t),Mi=u,Vn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{fs(n.containerInfo)}catch(Ie){Ft(t,t.return,Ie)}yf&&(yf=!1,Em(t));break;case 4:o=Mi,Mi=Ql(t.stateNode.containerInfo),Gn(n,t),Vn(t),Mi=o;break;case 12:Gn(n,t),Vn(t);break;case 31:Gn(n,t),Vn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Fl(t,o)));break;case 13:Gn(n,t),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Il=E()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Fl(t,o)));break;case 22:u=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,ee=ea,de=hn;if(ea=ee||u,hn=de||I,Gn(n,t),hn=de,ea=ee,Vn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||ea||hn||yr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{A=I.stateNode;var ge=I.memoizedProps.style,ie=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;A.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(Ie){Ft(I,I.return,Ie)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Ie){Ft(I,I.return,Ie)}}}else if(n.tag===18){if(a===null){I=n;try{var le=I.stateNode;u?hx(le,!0):hx(I.stateNode,!1)}catch(Ie){Ft(I,I.return,Ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Fl(t,a))));break;case 19:Gn(n,t),Vn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Fl(t,o)));break;case 30:break;case 21:break;default:Gn(n,t),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(mm(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=vf(t);zl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Ni(_,""),a.flags&=-33);var A=vf(t);zl(t,A,_);break;case 3:case 4:var I=a.stateNode.containerInfo,ee=vf(t);_f(t,ee,I);break;default:throw Error(r(161))}}catch(de){Ft(t,t.return,de)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Em(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Em(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function na(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)vm(t,n.alternate,n),n=n.sibling}function yr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Pa(4,n,n.return),yr(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&hm(n,n.return,a),yr(n);break;case 27:Eo(n.stateNode);case 26:case 5:Pi(n,n.return),yr(n);break;case 22:n.memoizedState===null&&yr(n);break;case 30:yr(n);break;default:yr(n)}t=t.sibling}}function ia(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ia(u,f,a),po(4,f);break;case 1:if(ia(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){Ft(o,o.return,ee)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)t0(I[u],A)}catch(ee){Ft(o,o.return,ee)}}a&&_&64&&dm(f),mo(f,f.return);break;case 27:xm(f);case 26:case 5:ia(u,f,a),a&&o===null&&_&4&&pm(f),mo(f,f.return);break;case 12:ia(u,f,a);break;case 31:ia(u,f,a),a&&_&4&&bm(u,f);break;case 13:ia(u,f,a),a&&_&4&&Sm(u,f);break;case 22:f.memoizedState===null&&ia(u,f,a),mo(f,f.return);break;case 30:break;default:ia(u,f,a)}n=n.sibling}}function bf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&eo(a))}function Sf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&eo(t))}function Ei(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Tm(t,n,a,o),n=n.sibling}function Tm(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,o),u&2048&&po(9,n);break;case 1:Ei(t,n,a,o);break;case 3:Ei(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&eo(t)));break;case 12:if(u&2048){Ei(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,A=f.onPostCommit;typeof A=="function"&&A(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Ft(n,n.return,I)}}else Ei(t,n,a,o);break;case 31:Ei(t,n,a,o);break;case 13:Ei(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(t,n,a,o):xo(t,n):f._visibility&2?Ei(t,n,a,o):(f._visibility|=2,es(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&bf(_,n);break;case 24:Ei(t,n,a,o),u&2048&&Sf(n.alternate,n);break;default:Ei(t,n,a,o)}}function es(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,A=a,I=o,ee=_.flags;switch(_.tag){case 0:case 11:case 15:es(f,_,A,I,u),po(8,_);break;case 23:break;case 22:var de=_.stateNode;_.memoizedState!==null?de._visibility&2?es(f,_,A,I,u):xo(f,_):(de._visibility|=2,es(f,_,A,I,u)),u&&ee&2048&&bf(_.alternate,_);break;case 24:es(f,_,A,I,u),u&&ee&2048&&Sf(_.alternate,_);break;default:es(f,_,A,I,u)}n=n.sibling}}function xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:xo(a,o),u&2048&&bf(o.alternate,o);break;case 24:xo(a,o),u&2048&&Sf(o.alternate,o);break;default:xo(a,o)}n=n.sibling}}var go=8192;function ts(t,n,a){if(t.subtreeFlags&go)for(t=t.child;t!==null;)Am(t,n,a),t=t.sibling}function Am(t,n,a){switch(t.tag){case 26:ts(t,n,a),t.flags&go&&t.memoizedState!==null&&jy(a,Mi,t.memoizedState,t.memoizedProps);break;case 5:ts(t,n,a);break;case 3:case 4:var o=Mi;Mi=Ql(t.stateNode.containerInfo),ts(t,n,a),Mi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=go,go=16777216,ts(t,n,a),go=o):ts(t,n,a));break;default:ts(t,n,a)}}function Rm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,wm(o,t)}Rm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cm(t),t=t.sibling}function Cm(t){switch(t.tag){case 0:case 11:case 15:vo(t),t.flags&2048&&Pa(9,t,t.return);break;case 3:vo(t);break;case 12:vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Bl(t)):vo(t);break;default:vo(t)}}function Bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,wm(o,t)}Rm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Pa(8,n,n.return),Bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Bl(n));break;default:Bl(n)}t=t.sibling}}function wm(t,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:eo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Tn=o;else e:for(a=t;Tn!==null;){o=Tn;var u=o.sibling,f=o.return;if(_m(o),o===a){Tn=null;break e}if(u!==null){u.return=f,Tn=u;break e}Tn=f}}}var ry={getCacheForType:function(t){var n=wn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(un).controller.signal}},sy=typeof WeakMap=="function"?WeakMap:Map,Nt=0,qt=null,gt=null,_t=0,zt=0,ei=null,za=!1,ns=!1,Mf=!1,aa=0,nn=0,Fa=0,br=0,Ef=0,ti=0,is=0,_o=null,kn=null,Tf=!1,Il=0,Dm=0,Hl=1/0,Gl=null,Ba=null,_n=0,Ia=null,as=null,ra=0,Af=0,Rf=null,Um=null,yo=0,Cf=null;function ni(){return(Nt&2)!==0&&_t!==0?_t&-_t:B.T!==null?Of():Hs()}function Nm(){if(ti===0)if((_t&536870912)===0||Mt){var t=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),ti=t}else ti=536870912;return t=Jn.current,t!==null&&(t.flags|=32),ti}function jn(t,n,a){(t===qt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(rs(t,0),Ha(t,_t,ti,!1)),Nn(t,a),((Nt&2)===0||t!==qt)&&(t===qt&&((Nt&2)===0&&(br|=a),nn===4&&Ha(t,_t,ti,!1)),zi(t))}function Lm(t,n,a){if((Nt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Fe(t,n),u=o?cy(t,n):Df(t,n,!0),f=o;do{if(u===0){ns&&!o&&Ha(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!oy(a)){u=Df(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var A=t;u=_o;var I=A.current.memoizedState.isDehydrated;if(I&&(rs(A,_).flags|=256),_=Df(A,_,!1),_!==2){if(Mf&&!I){A.errorRecoveryDisabledLanes|=f,br|=f,u=4;break e}f=kn,kn=u,f!==null&&(kn===null?kn=f:kn.push.apply(kn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){rs(t,0),Ha(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ha(o,n,ti,!za);break e;case 2:kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Il+300-E(),10<u)){if(Ha(o,n,ti,!za),ve(o,0,!0)!==0)break e;ra=n,o.timeoutHandle=ux(Om.bind(null,o,a,kn,Gl,Tf,n,ti,br,is,za,f,"Throttled",-0,0),u);break e}Om(o,a,kn,Gl,Tf,n,ti,br,is,za,f,null,-0,0)}}break}while(!0);zi(t)}function Om(t,n,a,o,u,f,_,A,I,ee,de,ge,ie,le){if(t.timeoutHandle=-1,ge=n.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},Am(n,f,ge);var Ie=(f&62914560)===f?Il-E():(f&4194048)===f?Dm-E():0;if(Ie=Xy(ge,Ie),Ie!==null){ra=f,t.cancelPendingCommit=Ie(Vm.bind(null,t,n,f,a,o,u,_,A,I,de,ge,null,ie,le)),Ha(t,f,_,!ee);return}}Vm(t,n,f,a,o,u,_,A,I)}function oy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Kn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ha(t,n,a,o){n&=~Ef,n&=~br,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Ve(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&$o(t,a,n)}function Vl(){return(Nt&6)===0?(bo(0),!1):!0}function wf(){if(gt!==null){if(zt===0)var t=gt.return;else t=gt,Yi=dr=null,ju(t),Zr=null,no=0,t=gt;for(;t!==null;)fm(t.alternate,t),t=t.return;gt=null}}function rs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ry(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ra=0,wf(),qt=t,gt=a=qi(t.current,null),_t=n,zt=0,ei=null,za=!1,ns=Fe(t,n),Mf=!1,is=ti=Ef=br=Fa=nn=0,kn=_o=null,Tf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ve(o),f=1<<u;n|=t[u],o&=~f}return aa=n,cl(),a}function Pm(t,n){ot=null,B.H=uo,n===Yr||n===gl?(n=Qp(),zt=3):n===Nu?(n=Qp(),zt=4):zt=n===of?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,gt===null&&(nn=1,Ul(t,li(n,t.current)))}function zm(){var t=Jn.current;return t===null?!0:(_t&4194048)===_t?di===null:(_t&62914560)===_t||(_t&536870912)!==0?t===di:!1}function Fm(){var t=B.H;return B.H=uo,t===null?uo:t}function Bm(){var t=B.A;return B.A=ry,t}function kl(){nn=4,za||(_t&4194048)!==_t&&Jn.current!==null||(ns=!0),(Fa&134217727)===0&&(br&134217727)===0||qt===null||Ha(qt,_t,ti,!1)}function Df(t,n,a){var o=Nt;Nt|=2;var u=Fm(),f=Bm();(qt!==t||_t!==n)&&(Gl=null,rs(t,n)),n=!1;var _=nn;e:do try{if(zt!==0&&gt!==null){var A=gt,I=ei;switch(zt){case 8:wf(),_=6;break e;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var ee=zt;if(zt=0,ei=null,ss(t,A,I,ee),a&&ns){_=0;break e}break;default:ee=zt,zt=0,ei=null,ss(t,A,I,ee)}}ly(),_=nn;break}catch(de){Pm(t,de)}while(!0);return n&&t.shellSuspendCounter++,Yi=dr=null,Nt=o,B.H=u,B.A=f,gt===null&&(qt=null,_t=0,cl()),_}function ly(){for(;gt!==null;)Im(gt)}function cy(t,n){var a=Nt;Nt|=2;var o=Fm(),u=Bm();qt!==t||_t!==n?(Gl=null,Hl=E()+500,rs(t,n)):ns=Fe(t,n);e:do try{if(zt!==0&&gt!==null){n=gt;var f=ei;t:switch(zt){case 1:zt=0,ei=null,ss(t,n,f,1);break;case 2:case 9:if(Zp(f)){zt=0,ei=null,Hm(n);break}n=function(){zt!==2&&zt!==9||qt!==t||(zt=7),zi(t)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:Zp(f)?(zt=0,ei=null,Hm(n)):(zt=0,ei=null,ss(t,n,f,7));break;case 5:var _=null;switch(gt.tag){case 26:_=gt.memoizedState;case 5:case 27:var A=gt;if(_?Tx(_):A.stateNode.complete){zt=0,ei=null;var I=A.sibling;if(I!==null)gt=I;else{var ee=A.return;ee!==null?(gt=ee,jl(ee)):gt=null}break t}}zt=0,ei=null,ss(t,n,f,5);break;case 6:zt=0,ei=null,ss(t,n,f,6);break;case 8:wf(),nn=6;break e;default:throw Error(r(462))}}uy();break}catch(de){Pm(t,de)}while(!0);return Yi=dr=null,B.H=o,B.A=u,Nt=a,gt!==null?0:(qt=null,_t=0,cl(),nn)}function uy(){for(;gt!==null&&!rt();)Im(gt)}function Im(t){var n=cm(t.alternate,t,aa);t.memoizedProps=t.pendingProps,n===null?jl(t):gt=n}function Hm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=im(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=im(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:ju(n);default:fm(a,n),n=gt=Bp(n,aa),n=cm(a,n,aa)}t.memoizedProps=t.pendingProps,n===null?jl(t):gt=n}function ss(t,n,a,o){Yi=dr=null,ju(n),Zr=null,no=0;var u=n.return;try{if(J_(t,u,n,a,_t)){nn=1,Ul(t,li(a,t.current)),gt=null;return}}catch(f){if(u!==null)throw gt=u,f;nn=1,Ul(t,li(a,t.current)),gt=null;return}n.flags&32768?(Mt||o===1?t=!0:ns||(_t&536870912)!==0?t=!1:(za=t=!0,(o===2||o===9||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Gm(n,t)):jl(n)}function jl(t){var n=t;do{if((n.flags&32768)!==0){Gm(n,za);return}t=n.return;var a=ty(n.alternate,n,aa);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);nn===0&&(nn=5)}function Gm(t,n){do{var a=ny(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);nn=6,gt=null}function Vm(t,n,a,o,u,f,_,A,I){t.cancelPendingCommit=null;do Xl();while(_n!==0);if((Nt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=gu,Yn(t,a,f,_,A,I),t===qt&&(gt=qt=null,_t=0),as=n,Ia=t,ra=a,Af=f,Rf=u,Um=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,py(ue,function(){return Wm(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=K.p,K.p=2,_=Nt,Nt|=4;try{iy(t,n,a)}finally{Nt=_,K.p=u,B.T=o}}_n=1,km(),jm(),Xm()}}function km(){if(_n===1){_n=0;var t=Ia,n=as,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=K.p;K.p=2;var u=Nt;Nt|=4;try{Mm(n,t);var f=Vf,_=wp(t.containerInfo),A=f.focusedElem,I=f.selectionRange;if(_!==A&&A&&A.ownerDocument&&Cp(A.ownerDocument.documentElement,A)){if(I!==null&&du(A)){var ee=I.start,de=I.end;if(de===void 0&&(de=ee),"selectionStart"in A)A.selectionStart=ee,A.selectionEnd=Math.min(de,A.value.length);else{var ge=A.ownerDocument||document,ie=ge&&ge.defaultView||window;if(ie.getSelection){var le=ie.getSelection(),Ie=A.textContent.length,tt=Math.min(I.start,Ie),Vt=I.end===void 0?tt:Math.min(I.end,Ie);!le.extend&&tt>Vt&&(_=Vt,Vt=tt,tt=_);var Z=Rp(A,tt),j=Rp(A,Vt);if(Z&&j&&(le.rangeCount!==1||le.anchorNode!==Z.node||le.anchorOffset!==Z.offset||le.focusNode!==j.node||le.focusOffset!==j.offset)){var J=ge.createRange();J.setStart(Z.node,Z.offset),le.removeAllRanges(),tt>Vt?(le.addRange(J),le.extend(j.node,j.offset)):(J.setEnd(j.node,j.offset),le.addRange(J))}}}}for(ge=[],le=A;le=le.parentNode;)le.nodeType===1&&ge.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ge.length;A++){var me=ge[A];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}ic=!!Gf,Vf=Gf=null}finally{Nt=u,K.p=o,B.T=a}}t.current=n,_n=2}}function jm(){if(_n===2){_n=0;var t=Ia,n=as,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=K.p;K.p=2;var u=Nt;Nt|=4;try{vm(t,n.alternate,n)}finally{Nt=u,K.p=o,B.T=a}}_n=3}}function Xm(){if(_n===4||_n===3){_n=0,P();var t=Ia,n=as,a=ra,o=Um;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,as=Ia=null,qm(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ba=null),ar(a),n=n.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(Se,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=K.p,K.p=2,B.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var A=o[_];f(A.value,{componentStack:A.stack})}}finally{B.T=n,K.p=u}}(ra&3)!==0&&Xl(),zi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Cf?yo++:(yo=0,Cf=t):yo=0,bo(0)}}function qm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,eo(n)))}function Xl(){return km(),jm(),Xm(),Wm()}function Wm(){if(_n!==5)return!1;var t=Ia,n=Af;Af=0;var a=ar(ra),o=B.T,u=K.p;try{K.p=32>a?32:a,B.T=null,a=Rf,Rf=null;var f=Ia,_=ra;if(_n=0,as=Ia=null,ra=0,(Nt&6)!==0)throw Error(r(331));var A=Nt;if(Nt|=4,Cm(f.current),Tm(f,f.current,_,a),Nt=A,bo(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(Se,f)}catch{}return!0}finally{K.p=u,B.T=o,qm(t,n)}}function Ym(t,n,a){n=li(a,n),n=sf(t.stateNode,n,2),t=Na(t,n,2),t!==null&&(Nn(t,2),zi(t))}function Ft(t,n,a){if(t.tag===3)Ym(t,t,a);else for(;n!==null;){if(n.tag===3){Ym(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ba===null||!Ba.has(o))){t=li(a,t),a=Z0(2),o=Na(n,a,2),o!==null&&(K0(a,o,n,t),Nn(o,2),zi(o));break}}n=n.return}}function Uf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new sy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Mf=!0,u.add(a),t=fy.bind(null,t,n,a),n.then(t,t))}function fy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qt===t&&(_t&a)===a&&(nn===4||nn===3&&(_t&62914560)===_t&&300>E()-Il?(Nt&2)===0&&rs(t,0):Ef|=a,is===_t&&(is=0)),zi(t)}function Zm(t,n){n===0&&(n=It()),t=cr(t,n),t!==null&&(Nn(t,n),zi(t))}function dy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Zm(t,a)}function hy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Zm(t,a)}function py(t,n){return jt(t,n)}var ql=null,os=null,Nf=!1,Wl=!1,Lf=!1,Ga=0;function zi(t){t!==os&&t.next===null&&(os===null?ql=os=t:os=os.next=t),Wl=!0,Nf||(Nf=!0,xy())}function bo(t,n){if(!Lf&&Wl){Lf=!0;do for(var a=!1,o=ql;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Ve(42|t)+1)-1,f&=u&~(_&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,$m(o,f))}else f=_t,f=ve(o,o===qt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Fe(o,f)||(a=!0,$m(o,f));o=o.next}while(a);Lf=!1}}function my(){Km()}function Km(){Wl=Nf=!1;var t=0;Ga!==0&&Ay()&&(t=Ga);for(var n=E(),a=null,o=ql;o!==null;){var u=o.next,f=Qm(o,n);f===0?(o.next=null,a===null?ql=u:a.next=u,u===null&&(os=a)):(a=o,(t!==0||(f&3)!==0)&&(Wl=!0)),o=u}_n!==0&&_n!==5||bo(t),Ga!==0&&(Ga=0)}function Qm(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Ve(f),A=1<<_,I=u[_];I===-1?((A&a)===0||(A&o)!==0)&&(u[_]=at(A,n)):I<=n&&(t.expiredLanes|=A),f&=~A}if(n=qt,a=_t,a=ve(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ye(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Fe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ye(o),ar(a)){case 2:case 8:a=be;break;case 32:a=ue;break;case 268435456:a=Ne;break;default:a=ue}return o=Jm.bind(null,t),a=jt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ye(o),t.callbackPriority=2,t.callbackNode=null,2}function Jm(t,n){if(_n!==0&&_n!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Xl()&&t.callbackNode!==a)return null;var o=_t;return o=ve(t,t===qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Lm(t,o,n),Qm(t,E()),t.callbackNode!=null&&t.callbackNode===a?Jm.bind(null,t):null)}function $m(t,n){if(Xl())return null;Lm(t,n,!0)}function xy(){Cy(function(){(Nt&6)!==0?jt(xe,my):Km()})}function Of(){if(Ga===0){var t=qr;t===0&&(t=De,De<<=1,(De&261888)===0&&(De=256)),Ga=t}return Ga}function ex(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:tl(""+t)}function tx(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function gy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=ex((u[gn]||null).action),_=o.submitter;_&&(n=(n=_[gn]||null)?ex(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var A=new rl("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ga!==0){var I=_?tx(u,_):new FormData(u);$u(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(A.preventDefault(),I=_?tx(u,_):new FormData(u),$u(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Pf=0;Pf<xu.length;Pf++){var zf=xu[Pf],vy=zf.toLowerCase(),_y=zf[0].toUpperCase()+zf.slice(1);Si(vy,"on"+_y)}Si(Np,"onAnimationEnd"),Si(Lp,"onAnimationIteration"),Si(Op,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(P_,"onTransitionRun"),Si(z_,"onTransitionStart"),Si(F_,"onTransitionCancel"),Si(Pp,"onTransitionEnd"),ze("onMouseEnter",["mouseout","mouseover"]),ze("onMouseLeave",["mouseout","mouseover"]),ze("onPointerEnter",["pointerout","pointerover"]),ze("onPointerLeave",["pointerout","pointerover"]),Ue("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ue("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ue("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ue("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function nx(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var A=o[_],I=A.instance,ee=A.currentTarget;if(A=A.listener,I!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=ee;try{f(u)}catch(de){ll(de)}u.currentTarget=null,f=I}else for(_=0;_<o.length;_++){if(A=o[_],I=A.instance,ee=A.currentTarget,A=A.listener,I!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=ee;try{f(u)}catch(de){ll(de)}u.currentTarget=null,f=I}}}}function vt(t,n){var a=n[Or];a===void 0&&(a=n[Or]=new Set);var o=t+"__bubble";a.has(o)||(ix(n,t,2,!1),a.add(o))}function Ff(t,n,a){var o=0;n&&(o|=4),ix(a,t,o,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Bf(t){if(!t[Yl]){t[Yl]=!0,Q.forEach(function(a){a!=="selectionchange"&&(yy.has(a)||Ff(a,!1,t),Ff(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Ff("selectionchange",!1,n))}}function ix(t,n,a,o){switch(Nx(n)){case 2:var u=Yy;break;case 8:u=Zy;break;default:u=$f}a=u.bind(null,n,a,t),u=void 0,!iu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function If(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var A=o.stateNode.containerInfo;if(A===u)break;if(_===4)for(_=o.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;A!==null;){if(_=Ma(A),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){o=f=_;continue e}A=A.parentNode}}o=o.return}lp(function(){var ee=f,de=tu(a),ge=[];e:{var ie=zp.get(t);if(ie!==void 0){var le=rl,Ie=t;switch(t){case"keypress":if(il(a)===0)break e;case"keydown":case"keyup":le=h_;break;case"focusin":Ie="focus",le=ou;break;case"focusout":Ie="blur",le=ou;break;case"beforeblur":case"afterblur":le=ou;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=t_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=x_;break;case Np:case Lp:case Op:le=a_;break;case Pp:le=v_;break;case"scroll":case"scrollend":le=$v;break;case"wheel":le=y_;break;case"copy":case"cut":case"paste":le=s_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=hp;break;case"toggle":case"beforetoggle":le=S_}var tt=(n&4)!==0,Vt=!tt&&(t==="scroll"||t==="scrollend"),Z=tt?ie!==null?ie+"Capture":null:ie;tt=[];for(var j=ee,J;j!==null;){var me=j;if(J=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||J===null||Z===null||(me=ks(j,Z),me!=null&&tt.push(Mo(j,me,J))),Vt)break;j=j.return}0<tt.length&&(ie=new le(ie,Ie,null,a,de),ge.push({event:ie,listeners:tt}))}}if((n&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",ie&&a!==eu&&(Ie=a.relatedTarget||a.fromElement)&&(Ma(Ie)||Ie[Gi]))break e;if((le||ie)&&(ie=de.window===de?de:(ie=de.ownerDocument)?ie.defaultView||ie.parentWindow:window,le?(Ie=a.relatedTarget||a.toElement,le=ee,Ie=Ie?Ma(Ie):null,Ie!==null&&(Vt=c(Ie),tt=Ie.tag,Ie!==Vt||tt!==5&&tt!==27&&tt!==6)&&(Ie=null)):(le=null,Ie=ee),le!==Ie)){if(tt=fp,me="onMouseLeave",Z="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(tt=hp,me="onPointerLeave",Z="onPointerEnter",j="pointer"),Vt=le==null?ie:Y(le),J=Ie==null?ie:Y(Ie),ie=new tt(me,j+"leave",le,a,de),ie.target=Vt,ie.relatedTarget=J,me=null,Ma(de)===ee&&(tt=new tt(Z,j+"enter",Ie,a,de),tt.target=J,tt.relatedTarget=Vt,me=tt),Vt=me,le&&Ie)t:{for(tt=by,Z=le,j=Ie,J=0,me=Z;me;me=tt(me))J++;me=0;for(var Ke=j;Ke;Ke=tt(Ke))me++;for(;0<J-me;)Z=tt(Z),J--;for(;0<me-J;)j=tt(j),me--;for(;J--;){if(Z===j||j!==null&&Z===j.alternate){tt=Z;break t}Z=tt(Z),j=tt(j)}tt=null}else tt=null;le!==null&&ax(ge,ie,le,tt,!1),Ie!==null&&Vt!==null&&ax(ge,Vt,Ie,tt,!0)}}e:{if(ie=ee?Y(ee):window,le=ie.nodeName&&ie.nodeName.toLowerCase(),le==="select"||le==="input"&&ie.type==="file")var wt=bp;else if(_p(ie))if(Sp)wt=N_;else{wt=D_;var ke=w_}else le=ie.nodeName,!le||le.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?ee&&$c(ee.elementType)&&(wt=bp):wt=U_;if(wt&&(wt=wt(t,ee))){yp(ge,wt,a,de);break e}ke&&ke(t,ie,ee),t==="focusout"&&ee&&ie.type==="number"&&ee.memoizedProps.value!=null&&Mn(ie,"number",ie.value)}switch(ke=ee?Y(ee):window,t){case"focusin":(_p(ke)||ke.contentEditable==="true")&&(Br=ke,hu=ee,Qs=null);break;case"focusout":Qs=hu=Br=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,Dp(ge,a,de);break;case"selectionchange":if(O_)break;case"keydown":case"keyup":Dp(ge,a,de)}var ft;if(cu)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Fr?gp(t,a)&&(yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(pp&&a.locale!=="ko"&&(Fr||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Fr&&(ft=cp()):(Ta=de,au="value"in Ta?Ta.value:Ta.textContent,Fr=!0)),ke=Zl(ee,yt),0<ke.length&&(yt=new dp(yt,t,null,a,de),ge.push({event:yt,listeners:ke}),ft?yt.data=ft:(ft=vp(a),ft!==null&&(yt.data=ft)))),(ft=E_?T_(t,a):A_(t,a))&&(yt=Zl(ee,"onBeforeInput"),0<yt.length&&(ke=new dp("onBeforeInput","beforeinput",null,a,de),ge.push({event:ke,listeners:yt}),ke.data=ft)),gy(ge,t,ee,a,de)}nx(ge,n)})}function Mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Zl(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ks(t,a),u!=null&&o.unshift(Mo(t,u,f)),u=ks(t,n),u!=null&&o.push(Mo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function by(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ax(t,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var A=a,I=A.alternate,ee=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||ee===null||(I=ee,u?(ee=ks(a,f),ee!=null&&_.unshift(Mo(a,ee,I))):u||(ee=ks(a,f),ee!=null&&_.push(Mo(a,ee,I)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var Sy=/\r\n?/g,My=/\u0000|\uFFFD/g;function rx(t){return(typeof t=="string"?t:""+t).replace(Sy,`
`).replace(My,"")}function sx(t,n){return n=rx(n),rx(t)===n}function Gt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ni(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ni(t,""+o);break;case"className":Tt(t,"class",o);break;case"tabIndex":Tt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Tt(t,a,o);break;case"style":sp(t,o,f);break;case"data":if(n!=="object"){Tt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=tl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(t,n,"name",u.name,u,null),Gt(t,n,"formEncType",u.formEncType,u,null),Gt(t,n,"formMethod",u.formMethod,u,null),Gt(t,n,"formTarget",u.formTarget,u,null)):(Gt(t,n,"encType",u.encType,u,null),Gt(t,n,"method",u.method,u,null),Gt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=tl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ji);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=tl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),ut(t,"popover",o);break;case"xlinkActuate":Ct(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ct(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ct(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ct(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ct(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ct(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ct(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ct(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ct(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ut(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Qv.get(a)||a,ut(t,a,o))}}function Hf(t,n,a,o,u,f){switch(a){case"style":sp(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Ni(t,o):(typeof o=="number"||typeof o=="bigint")&&Ni(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ae.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[gn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ut(t,a,o)}}}function Un(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,f,_,a,null)}}u&&Gt(t,n,"srcSet",a.srcSet,a,null),o&&Gt(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var A=f=_=u=null,I=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var de=a[o];if(de!=null)switch(o){case"name":u=de;break;case"type":_=de;break;case"checked":I=de;break;case"defaultChecked":ee=de;break;case"value":f=de;break;case"defaultValue":A=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:Gt(t,n,o,de,a,null)}}Yt(t,f,A,I,ee,_,u,!1);return;case"select":vt("invalid",t),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":_=A;break;case"multiple":o=A;default:Gt(t,n,u,A,a,null)}n=f,a=_,t.multiple=!!o,n!=null?vn(t,!!o,n,!1):a!=null&&vn(t,!!o,a,!0);return;case"textarea":vt("invalid",t),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Gt(t,n,_,A,a,null)}Rn(t,o,u,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Gt(t,n,I,o,a,null)}return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<So.length;o++)vt(So[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,ee,o,a,null)}return;default:if($c(n)){for(de in a)a.hasOwnProperty(de)&&(o=a[de],o!==void 0&&Hf(t,n,de,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Gt(t,n,A,o,a,null))}function Ey(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,A=null,I=null,ee=null,de=null;for(le in a){var ge=a[le];if(a.hasOwnProperty(le)&&ge!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":I=ge;default:o.hasOwnProperty(le)||Gt(t,n,le,null,o,ge)}}for(var ie in o){var le=o[ie];if(ge=a[ie],o.hasOwnProperty(ie)&&(le!=null||ge!=null))switch(ie){case"type":f=le;break;case"name":u=le;break;case"checked":ee=le;break;case"defaultChecked":de=le;break;case"value":_=le;break;case"defaultValue":A=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==ge&&Gt(t,n,ie,le,o,ge)}}Vi(t,_,A,I,ee,de,f,u);return;case"select":le=_=A=ie=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":le=I;default:o.hasOwnProperty(f)||Gt(t,n,f,null,o,I)}for(u in o)if(f=o[u],I=a[u],o.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":ie=f;break;case"defaultValue":A=f;break;case"multiple":_=f;default:f!==I&&Gt(t,n,u,f,o,I)}n=A,a=_,o=le,ie!=null?vn(t,!!a,ie,!1):!!o!=!!a&&(n!=null?vn(t,!!a,n,!0):vn(t,!!a,a?[]:"",!1));return;case"textarea":le=ie=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Gt(t,n,A,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":ie=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Gt(t,n,_,u,o,f)}En(t,ie,le);return;case"option":for(var Ie in a)if(ie=a[Ie],a.hasOwnProperty(Ie)&&ie!=null&&!o.hasOwnProperty(Ie))switch(Ie){case"selected":t.selected=!1;break;default:Gt(t,n,Ie,null,o,ie)}for(I in o)if(ie=o[I],le=a[I],o.hasOwnProperty(I)&&ie!==le&&(ie!=null||le!=null))switch(I){case"selected":t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:Gt(t,n,I,ie,o,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ie=a[tt],a.hasOwnProperty(tt)&&ie!=null&&!o.hasOwnProperty(tt)&&Gt(t,n,tt,null,o,ie);for(ee in o)if(ie=o[ee],le=a[ee],o.hasOwnProperty(ee)&&ie!==le&&(ie!=null||le!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:Gt(t,n,ee,ie,o,le)}return;default:if($c(n)){for(var Vt in a)ie=a[Vt],a.hasOwnProperty(Vt)&&ie!==void 0&&!o.hasOwnProperty(Vt)&&Hf(t,n,Vt,void 0,o,ie);for(de in o)ie=o[de],le=a[de],!o.hasOwnProperty(de)||ie===le||ie===void 0&&le===void 0||Hf(t,n,de,ie,o,le);return}}for(var Z in a)ie=a[Z],a.hasOwnProperty(Z)&&ie!=null&&!o.hasOwnProperty(Z)&&Gt(t,n,Z,null,o,ie);for(ge in o)ie=o[ge],le=a[ge],!o.hasOwnProperty(ge)||ie===le||ie==null&&le==null||Gt(t,n,ge,ie,o,le)}function ox(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ty(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,A=u.duration;if(f&&A&&ox(_)){for(_=0,A=u.responseEnd,o+=1;o<a.length;o++){var I=a[o],ee=I.startTime;if(ee>A)break;var de=I.transferSize,ge=I.initiatorType;de&&ox(ge)&&(I=I.responseEnd,_+=de*(I<A?1:(A-ee)/(I-ee)))}if(--o,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Gf=null,Vf=null;function Kl(t){return t.nodeType===9?t:t.ownerDocument}function lx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cx(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function kf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jf=null;function Ay(){var t=window.event;return t&&t.type==="popstate"?t===jf?!1:(jf=t,!0):(jf=null,!1)}var ux=typeof setTimeout=="function"?setTimeout:void 0,Ry=typeof clearTimeout=="function"?clearTimeout:void 0,fx=typeof Promise=="function"?Promise:void 0,Cy=typeof queueMicrotask=="function"?queueMicrotask:typeof fx<"u"?function(t){return fx.resolve(null).then(t).catch(wy)}:ux;function wy(t){setTimeout(function(){throw t})}function Va(t){return t==="head"}function dx(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),fs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Eo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Eo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,A=f.nodeName;f[rr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Eo(t.ownerDocument.body);a=u}while(a);fs(n)}function hx(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Xf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xf(a),Vs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Dy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[rr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=hi(t.nextSibling),t===null)break}return null}function Uy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=hi(t.nextSibling),t===null))return null;return t}function px(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=hi(t.nextSibling),t===null))return null;return t}function qf(t){return t.data==="$?"||t.data==="$~"}function Wf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ny(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Yf=null;function mx(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return hi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function xx(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function gx(t,n,a){switch(n=Kl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Eo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Vs(t)}var pi=new Map,vx=new Set;function Ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var sa=K.d;K.d={f:Ly,r:Oy,D:Py,C:zy,L:Fy,m:By,X:Hy,S:Iy,M:Gy};function Ly(){var t=sa.f(),n=Vl();return t||n}function Oy(t){var n=w(t);n!==null&&n.tag===5&&n.type==="form"?P0(n):sa.r(t)}var ls=typeof document>"u"?null:document;function _x(t,n,a){var o=ls;if(o&&typeof n=="string"&&n){var u=Wt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),vx.has(u)||(vx.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",t),te(n),o.head.appendChild(n)))}}function Py(t){sa.D(t),_x("dns-prefetch",t,null)}function zy(t,n){sa.C(t,n),_x("preconnect",t,n)}function Fy(t,n,a){sa.L(t,n,a);var o=ls;if(o&&t&&n){var u='link[rel="preload"][as="'+Wt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Wt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Wt(a.imageSizes)+'"]')):u+='[href="'+Wt(t)+'"]';var f=u;switch(n){case"style":f=cs(t);break;case"script":f=us(t)}pi.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),pi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(To(f))||n==="script"&&o.querySelector(Ao(f))||(n=o.createElement("link"),Un(n,"link",t),te(n),o.head.appendChild(n)))}}function By(t,n){sa.m(t,n);var a=ls;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Wt(o)+'"][href="'+Wt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=us(t)}if(!pi.has(f)&&(t=x({rel:"modulepreload",href:t},n),pi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(f)))return}o=a.createElement("link"),Un(o,"link",t),te(o),a.head.appendChild(o)}}}function Iy(t,n,a){sa.S(t,n,a);var o=ls;if(o&&t){var u=se(o).hoistableStyles,f=cs(t);n=n||"default";var _=u.get(f);if(!_){var A={loading:0,preload:null};if(_=o.querySelector(To(f)))A.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=pi.get(f))&&Zf(t,a);var I=_=o.createElement("link");te(I),Un(I,"link",t),I._p=new Promise(function(ee,de){I.onload=ee,I.onerror=de}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Jl(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:A},u.set(f,_)}}}function Hy(t,n){sa.X(t,n);var a=ls;if(a&&t){var o=se(a).hoistableScripts,u=us(t),f=o.get(u);f||(f=a.querySelector(Ao(u)),f||(t=x({src:t,async:!0},n),(n=pi.get(u))&&Kf(t,n),f=a.createElement("script"),te(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Gy(t,n){sa.M(t,n);var a=ls;if(a&&t){var o=se(a).hoistableScripts,u=us(t),f=o.get(u);f||(f=a.querySelector(Ao(u)),f||(t=x({src:t,async:!0,type:"module"},n),(n=pi.get(u))&&Kf(t,n),f=a.createElement("script"),te(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function yx(t,n,a,o){var u=(u=ae.current)?Ql(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=cs(a.href),a=se(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=cs(a.href);var f=se(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(To(t)))&&!f._p&&(_.instance=f,_.state.loading=5),pi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(t,a),f||Vy(u,t,a,_.state))),n&&o===null)throw Error(r(528,""));return _}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=us(a),a=se(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function cs(t){return'href="'+Wt(t)+'"'}function To(t){return'link[rel="stylesheet"]['+t+"]"}function bx(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Vy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),te(n),t.head.appendChild(n))}function us(t){return'[src="'+Wt(t)+'"]'}function Ao(t){return"script[async]"+t}function Sx(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Wt(a.href)+'"]');if(o)return n.instance=o,te(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),te(o),Un(o,"style",u),Jl(o,a.precedence,t),n.instance=o;case"stylesheet":u=cs(a.href);var f=t.querySelector(To(u));if(f)return n.state.loading|=4,n.instance=f,te(f),f;o=bx(a),(u=pi.get(u))&&Zf(o,u),f=(t.ownerDocument||t).createElement("link"),te(f);var _=f;return _._p=new Promise(function(A,I){_.onload=A,_.onerror=I}),Un(f,"link",o),n.state.loading|=4,Jl(f,a.precedence,t),n.instance=f;case"script":return f=us(a.src),(u=t.querySelector(Ao(f)))?(n.instance=u,te(u),u):(o=a,(u=pi.get(f))&&(o=x({},a),Kf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),te(u),Un(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Jl(o,a.precedence,t));return n.instance}function Jl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var A=o[_];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var $l=null;function Mx(t,n,a){if($l===null){var o=new Map,u=$l=new Map;u.set(a,o)}else u=$l,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[rr]||f[cn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var A=o.get(_);A?A.push(f):o.set(_,[f])}}return o}function Ex(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function ky(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Tx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function jy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=cs(o.href),f=n.querySelector(To(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ec.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,te(f);return}f=n.ownerDocument||n,o=bx(o),(u=pi.get(u))&&Zf(o,u),f=f.createElement("link"),te(f);var _=f;_._p=new Promise(function(A,I){_.onload=A,_.onerror=I}),Un(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ec.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Qf=0;function Xy(t,n){return t.stylesheets&&t.count===0&&nc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Qf===0&&(Qf=62500*Ty());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Qf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var tc=null;function nc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,tc=new Map,n.forEach(qy,t),tc=null,ec.call(t))}function qy(t,n){if(!(n.state.loading&4)){var a=tc.get(t);if(a)var o=a.get(null);else{a=new Map,tc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=ec.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ro={$$typeof:C,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Wy(t,n,a,o,u,f,_,A,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Ax(t,n,a,o,u,f,_,A,I,ee,de,ge){return t=new Wy(t,n,a,_,I,ee,de,ge,A),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),t.current=f,f.stateNode=t,n=wu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Lu(f),t}function Rx(t){return t?(t=Gr,t):Gr}function Cx(t,n,a,o,u,f){u=Rx(u),o.context===null?o.context=u:o.pendingContext=u,o=Ua(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Na(t,o,n),a!==null&&(jn(a,t,n),ao(a,t,n))}function wx(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Jf(t,n){wx(t,n),(t=t.alternate)&&wx(t,n)}function Dx(t){if(t.tag===13||t.tag===31){var n=cr(t,67108864);n!==null&&jn(n,t,67108864),Jf(t,67108864)}}function Ux(t){if(t.tag===13||t.tag===31){var n=ni();n=bi(n);var a=cr(t,n);a!==null&&jn(a,t,n),Jf(t,n)}}var ic=!0;function Yy(t,n,a,o){var u=B.T;B.T=null;var f=K.p;try{K.p=2,$f(t,n,a,o)}finally{K.p=f,B.T=u}}function Zy(t,n,a,o){var u=B.T;B.T=null;var f=K.p;try{K.p=8,$f(t,n,a,o)}finally{K.p=f,B.T=u}}function $f(t,n,a,o){if(ic){var u=ed(o);if(u===null)If(t,n,o,ac,a),Lx(t,o);else if(Qy(u,t,n,a,o))o.stopPropagation();else if(Lx(t,o),n&4&&-1<Ky.indexOf(t)){for(;u!==null;){var f=w(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Me(f.pendingLanes);if(_!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var I=1<<31-Ve(_);A.entanglements[1]|=I,_&=~I}zi(f),(Nt&6)===0&&(Hl=E()+500,bo(0))}}break;case 31:case 13:A=cr(f,2),A!==null&&jn(A,f,2),Vl(),Jf(f,2)}if(f=ed(o),f===null&&If(t,n,o,ac,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else If(t,n,o,null,a)}}function ed(t){return t=tu(t),td(t)}var ac=null;function td(t){if(ac=null,t=Ma(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ac=t,null}function Nx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case xe:return 2;case be:return 8;case ue:case qe:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var nd=!1,ka=null,ja=null,Xa=null,Co=new Map,wo=new Map,qa=[],Ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lx(t,n){switch(t){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Do(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=w(n),n!==null&&Dx(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Qy(t,n,a,o,u){switch(n){case"focusin":return ka=Do(ka,t,n,a,o,u),!0;case"dragenter":return ja=Do(ja,t,n,a,o,u),!0;case"mouseover":return Xa=Do(Xa,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Co.set(f,Do(Co.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,wo.set(f,Do(wo.get(f)||null,t,n,a,o,u)),!0}return!1}function Ox(t){var n=Ma(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Gs(t.priority,function(){Ux(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Gs(t.priority,function(){Ux(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ed(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);eu=o,a.target.dispatchEvent(o),eu=null}else return n=w(a),n!==null&&Dx(n),t.blockedOn=a,!1;n.shift()}return!0}function Px(t,n,a){rc(t)&&a.delete(n)}function Jy(){nd=!1,ka!==null&&rc(ka)&&(ka=null),ja!==null&&rc(ja)&&(ja=null),Xa!==null&&rc(Xa)&&(Xa=null),Co.forEach(Px),wo.forEach(Px)}function sc(t,n){t.blockedOn===n&&(t.blockedOn=null,nd||(nd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Jy)))}var oc=null;function zx(t){oc!==t&&(oc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){oc===t&&(oc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(td(o||a)===null)continue;break}var f=w(a);f!==null&&(t.splice(n,3),n-=3,$u(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function fs(t){function n(I){return sc(I,t)}ka!==null&&sc(ka,t),ja!==null&&sc(ja,t),Xa!==null&&sc(Xa,t),Co.forEach(n),wo.forEach(n);for(var a=0;a<qa.length;a++){var o=qa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)Ox(a),a.blockedOn===null&&qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[gn]||null;if(typeof f=="function")_||zx(a);else if(_){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[gn]||null)A=_.formAction;else if(td(u)!==null)continue}else A=_.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),zx(a)}}}function Fx(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function id(t){this._internalRoot=t}lc.prototype.render=id.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ni();Cx(a,o,t,n,null,null)},lc.prototype.unmount=id.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Cx(t.current,2,null,t,null,null),Vl(),n[Gi]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Hs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,t),a===0&&Ox(t)}};var Bx=e.version;if(Bx!=="19.2.0")throw Error(r(527,Bx,"19.2.0"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var $y={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{Se=cc.inject($y),Ee=cc}catch{}}return No.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=X0,f=q0,_=W0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Ax(t,1,!1,null,null,a,o,null,u,f,_,Fx),t[Gi]=n.current,Bf(t),new id(n)},No.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=X0,_=q0,A=W0,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Ax(t,1,!0,n,a??null,o,u,I,f,_,A,Fx),n.context=Rx(null),a=n.current,o=ni(),o=bi(o),u=Ua(o),u.callback=null,Na(a,u,o),a=o,n.current.lanes=a,Nn(n,a),zi(n),t[Gi]=n.current,Bf(t),new lc(n)},No.version="19.2.0",No}var Yx;function ub(){if(Yx)return sd.exports;Yx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),sd.exports=cb(),sd.exports}var fb=ub();const db=ev(fb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pb=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),Zx=s=>{const e=pb(s);return e.charAt(0).toUpperCase()+e.slice(1)},tv=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),mb=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=Zt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...h},p)=>Zt.createElement("svg",{ref:p,...xb,width:e,height:e,stroke:s,strokeWidth:r?Number(i)*24/Number(e):i,className:tv("lucide",l),...!c&&!mb(h)&&{"aria-hidden":"true"},...h},[...d.map(([m,g])=>Zt.createElement(m,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=(s,e)=>{const i=Zt.forwardRef(({className:r,...l},c)=>Zt.createElement(gb,{ref:c,iconNode:e,className:tv(`lucide-${hb(Zx(s))}`,`lucide-${s}`,r),...l}));return i.displayName=Zx(s),i};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],_b=en("arrow-right",vb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],bb=en("award",yb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Mb=en("briefcase",Sb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Tb=en("circle-check-big",Eb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],Rb=en("cloud",Ab);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],wb=en("code",Cb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Ub=en("database",Db);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Lb=en("download",Nb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Nc=en("external-link",Ob);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],zb=en("eye",Pb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Bc=en("github",Fb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Ib=en("heart",Bb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Gb=en("layers",Hb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Vd=en("linkedin",Vb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],jb=en("mail",kb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],qb=en("map-pin",Xb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Yb=en("menu",Wb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],Kb=en("quote",Zb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Jb=en("send",Qb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],eS=en("server",$b);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],nv=en("terminal",tS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],iS=en("twitter",nS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],rS=en("x",aS),sS=()=>{const[s,e]=Zt.useState(!1),[i,r]=Zt.useState(!1);Zt.useEffect(()=>{const c=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const l=[{name:"About",href:"#about"},{name:"Stack",href:"#stack"},{name:"Work",href:"#projects"},{name:"Experience",href:"#experience"},{name:"Contact",href:"#contact"}];return L.jsxs("header",{className:`fixed top-0 w-full z-50 transition-all duration-300 border-b ${i?"bg-dev-bg/80 backdrop-blur-md border-dev-border py-3":"bg-transparent border-transparent py-5"}`,children:[L.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:L.jsxs("div",{className:"flex justify-between items-center",children:[L.jsxs("div",{className:"flex items-center gap-2 group cursor-pointer",children:[L.jsx("div",{className:"bg-dev-blue/10 p-2 rounded-lg group-hover:bg-dev-blue/20 transition-colors",children:L.jsx(nv,{className:"w-6 h-6 text-dev-blue"})}),L.jsxs("span",{className:"font-mono font-bold text-lg text-white tracking-tight",children:[L.jsx("span",{className:"text-dev-blue",children:"<"}),"Bran web apps",L.jsx("span",{className:"text-dev-blue",children:"/>"})]})]}),L.jsx("nav",{className:"hidden md:flex items-center gap-8",children:l.map(c=>L.jsx("a",{href:c.href,className:"text-sm font-medium hover:text-dev-blue transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-dev-blue after:left-0 after:-bottom-1 after:transition-all hover:after:w-full",children:c.name},c.name))}),L.jsxs("div",{className:"flex items-center gap-4",children:[L.jsxs("div",{className:"hidden md:flex items-center gap-3 pr-4 border-r border-dev-border",children:[L.jsx("a",{href:"https://github.com/BranBayou",className:"text-dev-muted hover:text-white transition-colors",children:L.jsx(Bc,{className:"w-5 h-5"})}),L.jsx("a",{href:"https://www.linkedin.com/in/bran-baye/",className:"text-dev-muted hover:text-white transition-colors",children:L.jsx(Vd,{className:"w-5 h-5"})})]}),L.jsx("a",{href:"#contact",className:"hidden md:block px-4 py-2 bg-dev-blue/10 text-dev-blue text-sm font-mono border border-dev-blue/30 rounded hover:bg-dev-blue hover:text-dev-bg transition-all duration-300",children:"Hire Me"}),L.jsx("button",{className:"md:hidden text-dev-text hover:text-white",onClick:()=>e(!s),children:s?L.jsx(rS,{className:"w-6 h-6"}):L.jsx(Yb,{className:"w-6 h-6"})})]})]})}),L.jsx("div",{className:`md:hidden absolute top-full left-0 w-full bg-dev-panel border-b border-dev-border transition-all duration-300 ease-in-out ${s?"opacity-100 visible translate-y-0":"opacity-0 invisible -translate-y-2"}`,children:L.jsxs("div",{className:"px-4 py-4 space-y-2",children:[l.map(c=>L.jsx("a",{href:c.href,className:"block px-3 py-2 text-base font-medium rounded-md hover:bg-dev-border hover:text-white transition-colors",onClick:()=>e(!1),children:c.name},c.name)),L.jsxs("div",{className:"pt-4 border-t border-dev-border flex gap-4",children:[L.jsx("a",{href:"#",className:"text-dev-muted hover:text-white",children:L.jsx(Bc,{className:"w-5 h-5"})}),L.jsx("a",{href:"#",className:"text-dev-muted hover:text-white",children:L.jsx(Vd,{className:"w-5 h-5"})})]})]})})]})};var iv={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},zh={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},oS=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Ic={CSS:{},springs:{}};function Bi(s,e,i){return Math.min(Math.max(s,e),i)}function Ho(s,e){return s.indexOf(e)>-1}function ud(s,e){return s.apply(null,e)}var Qe={arr:function(s){return Array.isArray(s)},obj:function(s){return Ho(Object.prototype.toString.call(s),"Object")},pth:function(s){return Qe.obj(s)&&s.hasOwnProperty("totalLength")},svg:function(s){return s instanceof SVGElement},inp:function(s){return s instanceof HTMLInputElement},dom:function(s){return s.nodeType||Qe.svg(s)},str:function(s){return typeof s=="string"},fnc:function(s){return typeof s=="function"},und:function(s){return typeof s>"u"},nil:function(s){return Qe.und(s)||s===null},hex:function(s){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(s)},rgb:function(s){return/^rgb/.test(s)},hsl:function(s){return/^hsl/.test(s)},col:function(s){return Qe.hex(s)||Qe.rgb(s)||Qe.hsl(s)},key:function(s){return!iv.hasOwnProperty(s)&&!zh.hasOwnProperty(s)&&s!=="targets"&&s!=="keyframes"}};function av(s){var e=/\(([^)]+)\)/.exec(s);return e?e[1].split(",").map(function(i){return parseFloat(i)}):[]}function rv(s,e){var i=av(s),r=Bi(Qe.und(i[0])?1:i[0],.1,100),l=Bi(Qe.und(i[1])?100:i[1],.1,100),c=Bi(Qe.und(i[2])?10:i[2],.1,100),d=Bi(Qe.und(i[3])?0:i[3],.1,100),h=Math.sqrt(l/r),p=c/(2*Math.sqrt(l*r)),m=p<1?h*Math.sqrt(1-p*p):0,g=1,x=p<1?(p*h+-d)/m:-d+h;function v(M){var T=e?e*M/1e3:M;return p<1?T=Math.exp(-T*p*h)*(g*Math.cos(m*T)+x*Math.sin(m*T)):T=(g+x*T)*Math.exp(-T*h),M===0||M===1?M:1-T}function b(){var M=Ic.springs[s];if(M)return M;for(var T=1/6,S=0,y=0;;)if(S+=T,v(S)===1){if(y++,y>=16)break}else y=0;var D=S*T*1e3;return Ic.springs[s]=D,D}return e?v:b}function lS(s){return s===void 0&&(s=10),function(e){return Math.ceil(Bi(e,1e-6,1)*s)*(1/s)}}var cS=(function(){var s=11,e=1/(s-1);function i(g,x){return 1-3*x+3*g}function r(g,x){return 3*x-6*g}function l(g){return 3*g}function c(g,x,v){return((i(x,v)*g+r(x,v))*g+l(x))*g}function d(g,x,v){return 3*i(x,v)*g*g+2*r(x,v)*g+l(x)}function h(g,x,v,b,M){var T,S,y=0;do S=x+(v-x)/2,T=c(S,b,M)-g,T>0?v=S:x=S;while(Math.abs(T)>1e-7&&++y<10);return S}function p(g,x,v,b){for(var M=0;M<4;++M){var T=d(x,v,b);if(T===0)return x;var S=c(x,v,b)-g;x-=S/T}return x}function m(g,x,v,b){if(!(0<=g&&g<=1&&0<=v&&v<=1))return;var M=new Float32Array(s);if(g!==x||v!==b)for(var T=0;T<s;++T)M[T]=c(T*e,g,v);function S(y){for(var D=0,C=1,O=s-1;C!==O&&M[C]<=y;++C)D+=e;--C;var H=(y-M[C])/(M[C+1]-M[C]),N=D+H*e,F=d(N,g,v);return F>=.001?p(y,N,g,v):F===0?N:h(y,D,D+e,g,v)}return function(y){return g===x&&v===b||y===0||y===1?y:c(S(y),x,b)}}return m})(),sv=(function(){var s={linear:function(){return function(r){return r}}},e={Sine:function(){return function(r){return 1-Math.cos(r*Math.PI/2)}},Expo:function(){return function(r){return r?Math.pow(2,10*r-10):0}},Circ:function(){return function(r){return 1-Math.sqrt(1-r*r)}},Back:function(){return function(r){return r*r*(3*r-2)}},Bounce:function(){return function(r){for(var l,c=4;r<((l=Math.pow(2,--c))-1)/11;);return 1/Math.pow(4,3-c)-7.5625*Math.pow((l*3-2)/22-r,2)}},Elastic:function(r,l){r===void 0&&(r=1),l===void 0&&(l=.5);var c=Bi(r,1,10),d=Bi(l,.1,2);return function(h){return h===0||h===1?h:-c*Math.pow(2,10*(h-1))*Math.sin((h-1-d/(Math.PI*2)*Math.asin(1/c))*(Math.PI*2)/d)}}},i=["Quad","Cubic","Quart","Quint"];return i.forEach(function(r,l){e[r]=function(){return function(c){return Math.pow(c,l+2)}}}),Object.keys(e).forEach(function(r){var l=e[r];s["easeIn"+r]=l,s["easeOut"+r]=function(c,d){return function(h){return 1-l(c,d)(1-h)}},s["easeInOut"+r]=function(c,d){return function(h){return h<.5?l(c,d)(h*2)/2:1-l(c,d)(h*-2+2)/2}},s["easeOutIn"+r]=function(c,d){return function(h){return h<.5?(1-l(c,d)(1-h*2))/2:(l(c,d)(h*2-1)+1)/2}}}),s})();function Fh(s,e){if(Qe.fnc(s))return s;var i=s.split("(")[0],r=sv[i],l=av(s);switch(i){case"spring":return rv(s,e);case"cubicBezier":return ud(cS,l);case"steps":return ud(lS,l);default:return ud(r,l)}}function ov(s){try{var e=document.querySelectorAll(s);return e}catch{return}}function Vc(s,e){for(var i=s.length,r=arguments.length>=2?arguments[1]:void 0,l=[],c=0;c<i;c++)if(c in s){var d=s[c];e.call(r,d,c,s)&&l.push(d)}return l}function kc(s){return s.reduce(function(e,i){return e.concat(Qe.arr(i)?kc(i):i)},[])}function Kx(s){return Qe.arr(s)?s:(Qe.str(s)&&(s=ov(s)||s),s instanceof NodeList||s instanceof HTMLCollection?[].slice.call(s):[s])}function Bh(s,e){return s.some(function(i){return i===e})}function Ih(s){var e={};for(var i in s)e[i]=s[i];return e}function kd(s,e){var i=Ih(s);for(var r in s)i[r]=e.hasOwnProperty(r)?e[r]:s[r];return i}function jc(s,e){var i=Ih(s);for(var r in e)i[r]=Qe.und(s[r])?e[r]:s[r];return i}function uS(s){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(s);return e?"rgba("+e[1]+",1)":s}function fS(s){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=s.replace(e,function(h,p,m,g){return p+p+m+m+g+g}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),l=parseInt(r[1],16),c=parseInt(r[2],16),d=parseInt(r[3],16);return"rgba("+l+","+c+","+d+",1)"}function dS(s){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(s)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(s),i=parseInt(e[1],10)/360,r=parseInt(e[2],10)/100,l=parseInt(e[3],10)/100,c=e[4]||1;function d(v,b,M){return M<0&&(M+=1),M>1&&(M-=1),M<1/6?v+(b-v)*6*M:M<1/2?b:M<2/3?v+(b-v)*(2/3-M)*6:v}var h,p,m;if(r==0)h=p=m=l;else{var g=l<.5?l*(1+r):l+r-l*r,x=2*l-g;h=d(x,g,i+1/3),p=d(x,g,i),m=d(x,g,i-1/3)}return"rgba("+h*255+","+p*255+","+m*255+","+c+")"}function hS(s){if(Qe.rgb(s))return uS(s);if(Qe.hex(s))return fS(s);if(Qe.hsl(s))return dS(s)}function ga(s){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(s);if(e)return e[1]}function pS(s){if(Ho(s,"translate")||s==="perspective")return"px";if(Ho(s,"rotate")||Ho(s,"skew"))return"deg"}function jd(s,e){return Qe.fnc(s)?s(e.target,e.id,e.total):s}function Ii(s,e){return s.getAttribute(e)}function Hh(s,e,i){var r=ga(e);if(Bh([i,"deg","rad","turn"],r))return e;var l=Ic.CSS[e+i];if(!Qe.und(l))return l;var c=100,d=document.createElement(s.tagName),h=s.parentNode&&s.parentNode!==document?s.parentNode:document.body;h.appendChild(d),d.style.position="absolute",d.style.width=c+i;var p=c/d.offsetWidth;h.removeChild(d);var m=p*parseFloat(e);return Ic.CSS[e+i]=m,m}function lv(s,e,i){if(e in s.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),l=s.style[e]||getComputedStyle(s).getPropertyValue(r)||"0";return i?Hh(s,l,i):l}}function Gh(s,e){if(Qe.dom(s)&&!Qe.inp(s)&&(!Qe.nil(Ii(s,e))||Qe.svg(s)&&s[e]))return"attribute";if(Qe.dom(s)&&Bh(oS,e))return"transform";if(Qe.dom(s)&&e!=="transform"&&lv(s,e))return"css";if(s[e]!=null)return"object"}function cv(s){if(Qe.dom(s)){for(var e=s.style.transform||"",i=/(\w+)\(([^)]*)\)/g,r=new Map,l;l=i.exec(e);)r.set(l[1],l[2]);return r}}function mS(s,e,i,r){var l=Ho(e,"scale")?1:0+pS(e),c=cv(s).get(e)||l;return i&&(i.transforms.list.set(e,c),i.transforms.last=e),r?Hh(s,c,r):c}function Vh(s,e,i,r){switch(Gh(s,e)){case"transform":return mS(s,e,r,i);case"css":return lv(s,e,i);case"attribute":return Ii(s,e);default:return s[e]||0}}function kh(s,e){var i=/^(\*=|\+=|-=)/.exec(s);if(!i)return s;var r=ga(s)||0,l=parseFloat(e),c=parseFloat(s.replace(i[0],""));switch(i[0][0]){case"+":return l+c+r;case"-":return l-c+r;case"*":return l*c+r}}function uv(s,e){if(Qe.col(s))return hS(s);if(/\s/g.test(s))return s;var i=ga(s),r=i?s.substr(0,s.length-i.length):s;return e?r+e:r}function jh(s,e){return Math.sqrt(Math.pow(e.x-s.x,2)+Math.pow(e.y-s.y,2))}function xS(s){return Math.PI*2*Ii(s,"r")}function gS(s){return Ii(s,"width")*2+Ii(s,"height")*2}function vS(s){return jh({x:Ii(s,"x1"),y:Ii(s,"y1")},{x:Ii(s,"x2"),y:Ii(s,"y2")})}function fv(s){for(var e=s.points,i=0,r,l=0;l<e.numberOfItems;l++){var c=e.getItem(l);l>0&&(i+=jh(r,c)),r=c}return i}function _S(s){var e=s.points;return fv(s)+jh(e.getItem(e.numberOfItems-1),e.getItem(0))}function dv(s){if(s.getTotalLength)return s.getTotalLength();switch(s.tagName.toLowerCase()){case"circle":return xS(s);case"rect":return gS(s);case"line":return vS(s);case"polyline":return fv(s);case"polygon":return _S(s)}}function yS(s){var e=dv(s);return s.setAttribute("stroke-dasharray",e),e}function bS(s){for(var e=s.parentNode;Qe.svg(e)&&Qe.svg(e.parentNode);)e=e.parentNode;return e}function hv(s,e){var i=e||{},r=i.el||bS(s),l=r.getBoundingClientRect(),c=Ii(r,"viewBox"),d=l.width,h=l.height,p=i.viewBox||(c?c.split(" "):[0,0,d,h]);return{el:r,viewBox:p,x:p[0]/1,y:p[1]/1,w:d,h,vW:p[2],vH:p[3]}}function SS(s,e){var i=Qe.str(s)?ov(s)[0]:s,r=e||100;return function(l){return{property:l,el:i,svg:hv(i),totalLength:dv(i)*(r/100)}}}function MS(s,e,i){function r(g){g===void 0&&(g=0);var x=e+g>=1?e+g:0;return s.el.getPointAtLength(x)}var l=hv(s.el,s.svg),c=r(),d=r(-1),h=r(1),p=i?1:l.w/l.vW,m=i?1:l.h/l.vH;switch(s.property){case"x":return(c.x-l.x)*p;case"y":return(c.y-l.y)*m;case"angle":return Math.atan2(h.y-d.y,h.x-d.x)*180/Math.PI}}function Qx(s,e){var i=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=uv(Qe.pth(s)?s.totalLength:s,e)+"";return{original:r,numbers:r.match(i)?r.match(i).map(Number):[0],strings:Qe.str(s)||e?r.split(i):[]}}function Xh(s){var e=s?kc(Qe.arr(s)?s.map(Kx):Kx(s)):[];return Vc(e,function(i,r,l){return l.indexOf(i)===r})}function pv(s){var e=Xh(s);return e.map(function(i,r){return{target:i,id:r,total:e.length,transforms:{list:cv(i)}}})}function ES(s,e){var i=Ih(e);if(/^spring/.test(i.easing)&&(i.duration=rv(i.easing)),Qe.arr(s)){var r=s.length,l=r===2&&!Qe.obj(s[0]);l?s={value:s}:Qe.fnc(e.duration)||(i.duration=e.duration/r)}var c=Qe.arr(s)?s:[s];return c.map(function(d,h){var p=Qe.obj(d)&&!Qe.pth(d)?d:{value:d};return Qe.und(p.delay)&&(p.delay=h?0:e.delay),Qe.und(p.endDelay)&&(p.endDelay=h===c.length-1?e.endDelay:0),p}).map(function(d){return jc(d,i)})}function TS(s){for(var e=Vc(kc(s.map(function(c){return Object.keys(c)})),function(c){return Qe.key(c)}).reduce(function(c,d){return c.indexOf(d)<0&&c.push(d),c},[]),i={},r=function(c){var d=e[c];i[d]=s.map(function(h){var p={};for(var m in h)Qe.key(m)?m==d&&(p.value=h[m]):p[m]=h[m];return p})},l=0;l<e.length;l++)r(l);return i}function AS(s,e){var i=[],r=e.keyframes;r&&(e=jc(TS(r),e));for(var l in e)Qe.key(l)&&i.push({name:l,tweens:ES(e[l],s)});return i}function RS(s,e){var i={};for(var r in s){var l=jd(s[r],e);Qe.arr(l)&&(l=l.map(function(c){return jd(c,e)}),l.length===1&&(l=l[0])),i[r]=l}return i.duration=parseFloat(i.duration),i.delay=parseFloat(i.delay),i}function CS(s,e){var i;return s.tweens.map(function(r){var l=RS(r,e),c=l.value,d=Qe.arr(c)?c[1]:c,h=ga(d),p=Vh(e.target,s.name,h,e),m=i?i.to.original:p,g=Qe.arr(c)?c[0]:m,x=ga(g)||ga(p),v=h||x;return Qe.und(d)&&(d=m),l.from=Qx(g,v),l.to=Qx(kh(d,g),v),l.start=i?i.end:0,l.end=l.start+l.delay+l.duration+l.endDelay,l.easing=Fh(l.easing,l.duration),l.isPath=Qe.pth(c),l.isPathTargetInsideSVG=l.isPath&&Qe.svg(e.target),l.isColor=Qe.col(l.from.original),l.isColor&&(l.round=1),i=l,l})}var mv={css:function(s,e,i){return s.style[e]=i},attribute:function(s,e,i){return s.setAttribute(e,i)},object:function(s,e,i){return s[e]=i},transform:function(s,e,i,r,l){if(r.list.set(e,i),e===r.last||l){var c="";r.list.forEach(function(d,h){c+=h+"("+d+") "}),s.style.transform=c}}};function xv(s,e){var i=pv(s);i.forEach(function(r){for(var l in e){var c=jd(e[l],r),d=r.target,h=ga(c),p=Vh(d,l,h,r),m=h||ga(p),g=kh(uv(c,m),p),x=Gh(d,l);mv[x](d,l,g,r.transforms,!0)}})}function wS(s,e){var i=Gh(s.target,e.name);if(i){var r=CS(e,s),l=r[r.length-1];return{type:i,property:e.name,animatable:s,tweens:r,duration:l.end,delay:r[0].delay,endDelay:l.endDelay}}}function DS(s,e){return Vc(kc(s.map(function(i){return e.map(function(r){return wS(i,r)})})),function(i){return!Qe.und(i)})}function gv(s,e){var i=s.length,r=function(c){return c.timelineOffset?c.timelineOffset:0},l={};return l.duration=i?Math.max.apply(Math,s.map(function(c){return r(c)+c.duration})):e.duration,l.delay=i?Math.min.apply(Math,s.map(function(c){return r(c)+c.delay})):e.delay,l.endDelay=i?l.duration-Math.max.apply(Math,s.map(function(c){return r(c)+c.duration-c.endDelay})):e.endDelay,l}var Jx=0;function US(s){var e=kd(iv,s),i=kd(zh,s),r=AS(i,s),l=pv(s.targets),c=DS(l,r),d=gv(c,i),h=Jx;return Jx++,jc(e,{id:h,children:[],animatables:l,animations:c,duration:d.duration,delay:d.delay,endDelay:d.endDelay})}var Ci=[],vv=(function(){var s;function e(){!s&&(!$x()||!Jt.suspendWhenDocumentHidden)&&Ci.length>0&&(s=requestAnimationFrame(i))}function i(l){for(var c=Ci.length,d=0;d<c;){var h=Ci[d];h.paused?(Ci.splice(d,1),c--):(h.tick(l),d++)}s=d>0?requestAnimationFrame(i):void 0}function r(){Jt.suspendWhenDocumentHidden&&($x()?s=cancelAnimationFrame(s):(Ci.forEach(function(l){return l._onDocumentVisibility()}),vv()))}return typeof document<"u"&&document.addEventListener("visibilitychange",r),e})();function $x(){return!!document&&document.hidden}function Jt(s){s===void 0&&(s={});var e=0,i=0,r=0,l,c=0,d=null;function h(D){var C=window.Promise&&new Promise(function(O){return d=O});return D.finished=C,C}var p=US(s);h(p);function m(){var D=p.direction;D!=="alternate"&&(p.direction=D!=="normal"?"normal":"reverse"),p.reversed=!p.reversed,l.forEach(function(C){return C.reversed=p.reversed})}function g(D){return p.reversed?p.duration-D:D}function x(){e=0,i=g(p.currentTime)*(1/Jt.speed)}function v(D,C){C&&C.seek(D-C.timelineOffset)}function b(D){if(p.reversePlayback)for(var O=c;O--;)v(D,l[O]);else for(var C=0;C<c;C++)v(D,l[C])}function M(D){for(var C=0,O=p.animations,H=O.length;C<H;){var N=O[C],F=N.animatable,X=N.tweens,U=X.length-1,R=X[U];U&&(R=Vc(X,function(ae){return D<ae.end})[0]||R);for(var V=Bi(D-R.start-R.delay,0,R.duration)/R.duration,q=isNaN(V)?1:R.easing(V),re=R.to.strings,he=R.round,ce=[],B=R.to.numbers.length,K=void 0,W=0;W<B;W++){var pe=void 0,_e=R.to.numbers[W],z=R.from.numbers[W]||0;R.isPath?pe=MS(R.value,q*_e,R.isPathTargetInsideSVG):pe=z+q*(_e-z),he&&(R.isColor&&W>2||(pe=Math.round(pe*he)/he)),ce.push(pe)}var ne=re.length;if(!ne)K=ce[0];else{K=re[0];for(var ye=0;ye<ne;ye++){re[ye];var Te=re[ye+1],Oe=ce[ye];isNaN(Oe)||(Te?K+=Oe+Te:K+=Oe+" ")}}mv[N.type](F.target,N.property,K,F.transforms),N.currentValue=K,C++}}function T(D){p[D]&&!p.passThrough&&p[D](p)}function S(){p.remaining&&p.remaining!==!0&&p.remaining--}function y(D){var C=p.duration,O=p.delay,H=C-p.endDelay,N=g(D);p.progress=Bi(N/C*100,0,100),p.reversePlayback=N<p.currentTime,l&&b(N),!p.began&&p.currentTime>0&&(p.began=!0,T("begin")),!p.loopBegan&&p.currentTime>0&&(p.loopBegan=!0,T("loopBegin")),N<=O&&p.currentTime!==0&&M(0),(N>=H&&p.currentTime!==C||!C)&&M(C),N>O&&N<H?(p.changeBegan||(p.changeBegan=!0,p.changeCompleted=!1,T("changeBegin")),T("change"),M(N)):p.changeBegan&&(p.changeCompleted=!0,p.changeBegan=!1,T("changeComplete")),p.currentTime=Bi(N,0,C),p.began&&T("update"),D>=C&&(i=0,S(),p.remaining?(e=r,T("loopComplete"),p.loopBegan=!1,p.direction==="alternate"&&m()):(p.paused=!0,p.completed||(p.completed=!0,T("loopComplete"),T("complete"),!p.passThrough&&"Promise"in window&&(d(),h(p)))))}return p.reset=function(){var D=p.direction;p.passThrough=!1,p.currentTime=0,p.progress=0,p.paused=!0,p.began=!1,p.loopBegan=!1,p.changeBegan=!1,p.completed=!1,p.changeCompleted=!1,p.reversePlayback=!1,p.reversed=D==="reverse",p.remaining=p.loop,l=p.children,c=l.length;for(var C=c;C--;)p.children[C].reset();(p.reversed&&p.loop!==!0||D==="alternate"&&p.loop===1)&&p.remaining++,M(p.reversed?p.duration:0)},p._onDocumentVisibility=x,p.set=function(D,C){return xv(D,C),p},p.tick=function(D){r=D,e||(e=r),y((r+(i-e))*Jt.speed)},p.seek=function(D){y(g(D))},p.pause=function(){p.paused=!0,x()},p.play=function(){p.paused&&(p.completed&&p.reset(),p.paused=!1,Ci.push(p),x(),vv())},p.reverse=function(){m(),p.completed=!p.reversed,x()},p.restart=function(){p.reset(),p.play()},p.remove=function(D){var C=Xh(D);_v(C,p)},p.reset(),p.autoplay&&p.play(),p}function eg(s,e){for(var i=e.length;i--;)Bh(s,e[i].animatable.target)&&e.splice(i,1)}function _v(s,e){var i=e.animations,r=e.children;eg(s,i);for(var l=r.length;l--;){var c=r[l],d=c.animations;eg(s,d),!d.length&&!c.children.length&&r.splice(l,1)}!i.length&&!r.length&&e.pause()}function NS(s){for(var e=Xh(s),i=Ci.length;i--;){var r=Ci[i];_v(e,r)}}function LS(s,e){e===void 0&&(e={});var i=e.direction||"normal",r=e.easing?Fh(e.easing):null,l=e.grid,c=e.axis,d=e.from||0,h=d==="first",p=d==="center",m=d==="last",g=Qe.arr(s),x=parseFloat(g?s[0]:s),v=g?parseFloat(s[1]):0,b=ga(g?s[1]:s)||0,M=e.start||0+(g?x:0),T=[],S=0;return function(y,D,C){if(h&&(d=0),p&&(d=(C-1)/2),m&&(d=C-1),!T.length){for(var O=0;O<C;O++){if(!l)T.push(Math.abs(d-O));else{var H=p?(l[0]-1)/2:d%l[0],N=p?(l[1]-1)/2:Math.floor(d/l[0]),F=O%l[0],X=Math.floor(O/l[0]),U=H-F,R=N-X,V=Math.sqrt(U*U+R*R);c==="x"&&(V=-U),c==="y"&&(V=-R),T.push(V)}S=Math.max.apply(Math,T)}r&&(T=T.map(function(re){return r(re/S)*S})),i==="reverse"&&(T=T.map(function(re){return c?re<0?re*-1:-re:Math.abs(S-re)}))}var q=g?(v-x)/S:x;return M+q*(Math.round(T[D]*100)/100)+b}}function OS(s){s===void 0&&(s={});var e=Jt(s);return e.duration=0,e.add=function(i,r){var l=Ci.indexOf(e),c=e.children;l>-1&&Ci.splice(l,1);function d(v){v.passThrough=!0}for(var h=0;h<c.length;h++)d(c[h]);var p=jc(i,kd(zh,s));p.targets=p.targets||s.targets;var m=e.duration;p.autoplay=!1,p.direction=e.direction,p.timelineOffset=Qe.und(r)?m:kh(r,m),d(e),e.seek(p.timelineOffset);var g=Jt(p);d(g),c.push(g);var x=gv(c,s);return e.delay=x.delay,e.endDelay=x.endDelay,e.duration=x.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}Jt.version="3.2.1";Jt.speed=1;Jt.suspendWhenDocumentHidden=!0;Jt.running=Ci;Jt.remove=NS;Jt.get=Vh;Jt.set=xv;Jt.convertPx=Hh;Jt.path=SS;Jt.setDashoffset=yS;Jt.stagger=LS;Jt.timeline=OS;Jt.easing=Fh;Jt.penner=sv;Jt.random=function(s,e){return Math.floor(Math.random()*(e-s+1))+s};const tg=[{id:1,indent:0,content:"<!DOCTYPE html>"},{id:2,indent:0,content:'<html lang="en">'},{id:3,indent:1,content:"<body>"},{id:4,indent:2,content:'<div id="root">'},{id:5,indent:3,content:'<header class="fixed w-full z-50">'},{id:6,indent:4,content:'<nav class="flex justify-between">'},{id:7,indent:5,content:'<div class="logo">Berhanu</div>',flash:!0},{id:8,indent:4,content:"</nav>"},{id:9,indent:3,content:"</header>"},{id:10,indent:3,content:'<main class="hero-section relative">'},{id:11,indent:4,content:'<h1 class="text-6xl font-bold">',flash:!0},{id:12,indent:5,content:"Frontend Developer"},{id:13,indent:4,content:"</h1>"},{id:14,indent:4,content:'<div class="canvas-container-3d">',flash:!0},{id:15,indent:5,content:'<canvas width="1920" height="1080" />'},{id:16,indent:4,content:"</div>"},{id:17,indent:3,content:"</main>"},{id:18,indent:2,content:"</div>"},{id:19,indent:1,content:'<script src="bundle.js"><\/script>'},{id:20,indent:0,content:"</body>"},{id:21,indent:0,content:"</html>"}],PS=()=>{const[s,e]=Zt.useState([]),i=Zt.useRef(null);return Zt.useEffect(()=>{const r=setInterval(()=>{const l=tg.filter(c=>c.flash).filter(()=>Math.random()>.7).map(c=>c.id);e(l),setTimeout(()=>e([]),800)},2e3);return()=>clearInterval(r)},[]),Zt.useEffect(()=>{i.current&&Jt({targets:i.current.querySelectorAll(".code-line"),opacity:[0,.5],translateX:[-20,0],delay:Jt.stagger(50),easing:"easeOutQuad"})},[]),L.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none select-none flex text-xs md:text-sm font-mono opacity-20 z-0",children:[L.jsx("div",{ref:i,className:"w-full md:w-2/3 p-8 pt-32 flex flex-col gap-1 text-dev-text/60",children:tg.map(r=>L.jsxs("div",{className:`code-line transition-colors duration-300 rounded px-2 ${s.includes(r.id)?"bg-dev-purple/30":""}`,style:{marginLeft:`${r.indent*1.5}rem`},children:[L.jsx("span",{className:"text-dev-muted",children:r.id}),L.jsx("span",{className:"ml-4",dangerouslySetInnerHTML:{__html:r.content.replace(/</g,'&lt;<span class="text-dev-blue">').replace(/>/g,"</span>&gt;").replace(/class=/g,'<span class="text-dev-orange">class</span>=').replace(/"([^"]*)"/g,'<span class="text-dev-green">"$1"</span>')}})]},r.id))}),L.jsxs("div",{className:"hidden md:block w-1/3 border-l border-dev-border p-4 pt-32 bg-dev-panel/30 backdrop-blur-sm",children:[L.jsx("div",{className:"mb-4 pb-2 border-b border-dev-border font-bold text-dev-muted text-xs uppercase",children:"Styles"}),L.jsxs("div",{className:"space-y-4 font-mono text-xs",children:[L.jsxs("div",{className:"animate-pulse",children:[L.jsx("span",{className:"text-dev-orange",children:"element.style"})," ","{",L.jsxs("div",{className:"pl-4 text-dev-blue",children:["opacity: ",L.jsx("span",{className:"text-dev-purple",children:"1"}),";"]}),L.jsxs("div",{className:"pl-4 text-dev-blue",children:["display: ",L.jsx("span",{className:"text-dev-purple",children:"block"}),";"]}),"}"]}),L.jsxs("div",{children:[L.jsx("span",{className:"text-dev-orange",children:".hero-section"})," ","{",L.jsxs("div",{className:"pl-4 text-dev-blue",children:["position: ",L.jsx("span",{className:"text-dev-purple",children:"relative"}),";"]}),L.jsxs("div",{className:"pl-4 text-dev-blue",children:["background: ",L.jsx("span",{className:"text-dev-green",children:"#0d1117"}),";"]}),"}"]}),L.jsxs("div",{className:"mt-8 pt-2 border-t border-dev-border",children:[L.jsx("div",{className:"mb-2 font-bold text-dev-muted text-xs uppercase",children:"Console"}),L.jsx("div",{className:"text-dev-green",children:"> App initialized..."}),L.jsx("div",{className:"text-dev-blue",children:"> Three.js scene mounted"}),L.jsxs("div",{className:"text-dev-text/50",children:["> Hiring status: ",L.jsx("span",{className:"text-dev-green",children:"true"})]})]})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qh="181",zS=0,ng=1,FS=2,yv=1,BS=2,ha=3,ir=0,qn=1,pa=2,va=0,Cs=1,ig=2,ag=3,rg=4,IS=5,wr=100,HS=101,GS=102,VS=103,kS=104,jS=200,XS=201,qS=202,WS=203,Xd=204,qd=205,YS=206,ZS=207,KS=208,QS=209,JS=210,$S=211,e1=212,t1=213,n1=214,Wd=0,Yd=1,Zd=2,Ds=3,Kd=4,Qd=5,Jd=6,$d=7,bv=0,i1=1,a1=2,nr=0,r1=1,s1=2,o1=3,l1=4,c1=5,u1=6,f1=7,Sv=300,Us=301,Ns=302,eh=303,th=304,Xc=306,nh=1e3,ma=1001,ih=1002,ri=1003,d1=1004,uc=1005,vi=1006,fd=1007,Ur=1008,ya=1009,Mv=1010,Ev=1011,Vo=1012,Wh=1013,Nr=1014,xa=1015,Ps=1016,Yh=1017,Zh=1018,ko=1020,Tv=35902,Av=35899,Rv=1021,Cv=1022,Di=1023,jo=1026,Xo=1027,wv=1028,Kh=1029,Qh=1030,Jh=1031,$h=1033,Lc=33776,Oc=33777,Pc=33778,zc=33779,ah=35840,rh=35841,sh=35842,oh=35843,lh=36196,ch=37492,uh=37496,fh=37808,dh=37809,hh=37810,ph=37811,mh=37812,xh=37813,gh=37814,vh=37815,_h=37816,yh=37817,bh=37818,Sh=37819,Mh=37820,Eh=37821,Th=36492,Ah=36494,Rh=36495,Ch=36283,wh=36284,Dh=36285,Uh=36286,h1=3200,p1=3201,m1=0,x1=1,er="",xi="srgb",Ls="srgb-linear",Hc="linear",kt="srgb",ds=7680,sg=519,g1=512,v1=513,_1=514,Dv=515,y1=516,b1=517,S1=518,M1=519,og=35044,lg="300 es",Hi=2e3,Gc=2001;function Uv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function qo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function E1(){const s=qo("canvas");return s.style.display="block",s}const cg={};function ug(...s){const e="THREE."+s.shift();console.log(e,...s)}function lt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function on(...s){const e="THREE."+s.shift();console.error(e,...s)}function Wo(...s){const e=s.join(" ");e in cg||(cg[e]=!0,lt(...s))}function T1(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class zs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dd=Math.PI/180,Nh=180/Math.PI;function Yo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function Et(s,e,i){return Math.max(e,Math.min(i,s))}function A1(s,e){return(s%e+e)%e}function hd(s,e,i){return(1-i)*s+i*e}function Lo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(e=0,i=0){Lt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,h){let p=r[l+0],m=r[l+1],g=r[l+2],x=r[l+3],v=c[d+0],b=c[d+1],M=c[d+2],T=c[d+3];if(h<=0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=x;return}if(h>=1){e[i+0]=v,e[i+1]=b,e[i+2]=M,e[i+3]=T;return}if(x!==T||p!==v||m!==b||g!==M){let S=p*v+m*b+g*M+x*T;S<0&&(v=-v,b=-b,M=-M,T=-T,S=-S);let y=1-h;if(S<.9995){const D=Math.acos(S),C=Math.sin(D);y=Math.sin(y*D)/C,h=Math.sin(h*D)/C,p=p*y+v*h,m=m*y+b*h,g=g*y+M*h,x=x*y+T*h}else{p=p*y+v*h,m=m*y+b*h,g=g*y+M*h,x=x*y+T*h;const D=1/Math.sqrt(p*p+m*m+g*g+x*x);p*=D,m*=D,g*=D,x*=D}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,c,d){const h=r[l],p=r[l+1],m=r[l+2],g=r[l+3],x=c[d],v=c[d+1],b=c[d+2],M=c[d+3];return e[i]=h*M+g*x+p*b-m*v,e[i+1]=p*M+g*v+m*x-h*b,e[i+2]=m*M+g*b+h*v-p*x,e[i+3]=g*M-h*x-p*v-m*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),g=h(l/2),x=h(c/2),v=p(r/2),b=p(l/2),M=p(c/2);switch(d){case"XYZ":this._x=v*g*x+m*b*M,this._y=m*b*x-v*g*M,this._z=m*g*M+v*b*x,this._w=m*g*x-v*b*M;break;case"YXZ":this._x=v*g*x+m*b*M,this._y=m*b*x-v*g*M,this._z=m*g*M-v*b*x,this._w=m*g*x+v*b*M;break;case"ZXY":this._x=v*g*x-m*b*M,this._y=m*b*x+v*g*M,this._z=m*g*M+v*b*x,this._w=m*g*x-v*b*M;break;case"ZYX":this._x=v*g*x-m*b*M,this._y=m*b*x+v*g*M,this._z=m*g*M-v*b*x,this._w=m*g*x+v*b*M;break;case"YZX":this._x=v*g*x+m*b*M,this._y=m*b*x+v*g*M,this._z=m*g*M-v*b*x,this._w=m*g*x-v*b*M;break;case"XZY":this._x=v*g*x-m*b*M,this._y=m*b*x-v*g*M,this._z=m*g*M+v*b*x,this._w=m*g*x+v*b*M;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],p=i[9],m=i[2],g=i[6],x=i[10],v=r+h+x;if(v>0){const b=.5/Math.sqrt(v+1);this._w=.25/b,this._x=(g-p)*b,this._y=(c-m)*b,this._z=(d-l)*b}else if(r>h&&r>x){const b=2*Math.sqrt(1+r-h-x);this._w=(g-p)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(c+m)/b}else if(h>x){const b=2*Math.sqrt(1+h-r-x);this._w=(c-m)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(p+g)/b}else{const b=2*Math.sqrt(1+x-r-h);this._w=(d-l)/b,this._x=(c+m)/b,this._y=(p+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+d*h+l*m-c*p,this._y=l*g+d*p+c*h-r*m,this._z=c*g+d*m+r*p-l*h,this._w=d*g-r*h-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),g=Math.sin(m);p=Math.sin(p*m)/g,i=Math.sin(i*m)/g,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,i=0,r=0){oe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(fg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(fg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*r),g=2*(h*i-c*l),x=2*(c*r-d*i);return this.x=i+p*m+d*x-h*g,this.y=r+p*g+h*m-c*x,this.z=l+p*x+c*g-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*d-r*p,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return pd.copy(this).projectOnVector(e),this.sub(pd)}reflect(e){return this.sub(pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pd=new oe,fg=new Zo;class dt{constructor(e,i,r,l,c,d,h,p,m){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,p,m)}set(e,i,r,l,c,d,h,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=p,g[6]=r,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],g=r[4],x=r[7],v=r[2],b=r[5],M=r[8],T=l[0],S=l[3],y=l[6],D=l[1],C=l[4],O=l[7],H=l[2],N=l[5],F=l[8];return c[0]=d*T+h*D+p*H,c[3]=d*S+h*C+p*N,c[6]=d*y+h*O+p*F,c[1]=m*T+g*D+x*H,c[4]=m*S+g*C+x*N,c[7]=m*y+g*O+x*F,c[2]=v*T+b*D+M*H,c[5]=v*S+b*C+M*N,c[8]=v*y+b*O+M*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8];return i*d*g-i*h*m-r*c*g+r*h*p+l*c*m-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8],x=g*d-h*m,v=h*p-g*c,b=m*c-d*p,M=i*x+r*v+l*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=x*T,e[1]=(l*m-g*r)*T,e[2]=(h*r-l*d)*T,e[3]=v*T,e[4]=(g*i-l*p)*T,e[5]=(l*c-h*i)*T,e[6]=b*T,e[7]=(r*p-m*i)*T,e[8]=(d*i-r*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,h){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(md.makeScale(e,i)),this}rotate(e){return this.premultiply(md.makeRotation(-e)),this}translate(e,i){return this.premultiply(md.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const md=new dt,dg=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hg=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R1(){const s={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===kt&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===kt&&(l.r=ws(l.r),l.g=ws(l.g),l.b=ws(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===er?Hc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Wo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Wo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ls]:{primaries:e,whitePoint:r,transfer:Hc,toXYZ:dg,fromXYZ:hg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:dg,fromXYZ:hg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),s}const Ut=R1();function _a(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hs;class C1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{hs===void 0&&(hs=qo("canvas")),hs.width=e.width,hs.height=e.height;const l=hs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=hs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=qo("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=_a(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(_a(i[r]/255)*255):i[r]=_a(i[r]);return{data:i,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let w1=0;class ep{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=Yo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(xd(l[d].image)):c.push(xd(l[d]))}else c=xd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function xd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?C1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let D1=0;const gd=new oe;class zn extends zs{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=ma,l=ma,c=vi,d=Ur,h=Di,p=ya,m=zn.DEFAULT_ANISOTROPY,g=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=Yo(),this.name="",this.source=new ep(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gd).x}get height(){return this.source.getSize(gd).y}get depth(){return this.source.getSize(gd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){lt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nh:e.x=e.x-Math.floor(e.x);break;case ma:e.x=e.x<0?0:1;break;case ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nh:e.y=e.y-Math.floor(e.y);break;case ma:e.y=e.y<0?0:1;break;case ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Sv;zn.DEFAULT_ANISOTROPY=1;class ln{constructor(e=0,i=0,r=0,l=1){ln.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const p=e.elements,m=p[0],g=p[4],x=p[8],v=p[1],b=p[5],M=p[9],T=p[2],S=p[6],y=p[10];if(Math.abs(g-v)<.01&&Math.abs(x-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+T)<.1&&Math.abs(M+S)<.1&&Math.abs(m+b+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(m+1)/2,O=(b+1)/2,H=(y+1)/2,N=(g+v)/4,F=(x+T)/4,X=(M+S)/4;return C>O&&C>H?C<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(C),l=N/r,c=F/r):O>H?O<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),r=N/l,c=X/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=F/c,l=X/c),this.set(r,l,c,i),this}let D=Math.sqrt((S-M)*(S-M)+(x-T)*(x-T)+(v-g)*(v-g));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(x-T)/D,this.z=(v-g)/D,this.w=Math.acos((m+b+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class U1 extends zs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new zn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:vi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new ep(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends U1{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Nv extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class N1 extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(e=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ti.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ti.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ti.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ti):Ti.fromBufferAttribute(c,d),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fc.copy(r.boundingBox)),fc.applyMatrix4(e.matrixWorld),this.union(fc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),dc.subVectors(this.max,Oo),ps.subVectors(e.a,Oo),ms.subVectors(e.b,Oo),xs.subVectors(e.c,Oo),Ya.subVectors(ms,ps),Za.subVectors(xs,ms),Sr.subVectors(ps,xs);let i=[0,-Ya.z,Ya.y,0,-Za.z,Za.y,0,-Sr.z,Sr.y,Ya.z,0,-Ya.x,Za.z,0,-Za.x,Sr.z,0,-Sr.x,-Ya.y,Ya.x,0,-Za.y,Za.x,0,-Sr.y,Sr.x,0];return!vd(i,ps,ms,xs,dc)||(i=[1,0,0,0,1,0,0,0,1],!vd(i,ps,ms,xs,dc))?!1:(hc.crossVectors(Ya,Za),i=[hc.x,hc.y,hc.z],vd(i,ps,ms,xs,dc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oa=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Ti=new oe,fc=new Ko,ps=new oe,ms=new oe,xs=new oe,Ya=new oe,Za=new oe,Sr=new oe,Oo=new oe,dc=new oe,hc=new oe,Mr=new oe;function vd(s,e,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){Mr.fromArray(s,c);const h=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),p=e.dot(Mr),m=i.dot(Mr),g=r.dot(Mr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const L1=new Ko,Po=new oe,_d=new oe;class qc{constructor(e=new oe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):L1.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Po,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_d.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(_d)),this.expandByPoint(Po.copy(e.center).sub(_d))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const la=new oe,yd=new oe,pc=new oe,Ka=new oe,bd=new oe,mc=new oe,Sd=new oe;class Lv{constructor(e=new oe,i=new oe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,la)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=la.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(la.copy(this.origin).addScaledVector(this.direction,i),la.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){yd.copy(e).add(i).multiplyScalar(.5),pc.copy(i).sub(e).normalize(),Ka.copy(this.origin).sub(yd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(pc),h=Ka.dot(this.direction),p=-Ka.dot(pc),m=Ka.lengthSq(),g=Math.abs(1-d*d);let x,v,b,M;if(g>0)if(x=d*p-h,v=d*h-p,M=c*g,x>=0)if(v>=-M)if(v<=M){const T=1/g;x*=T,v*=T,b=x*(x+d*v+2*h)+v*(d*x+v+2*p)+m}else v=c,x=Math.max(0,-(d*v+h)),b=-x*x+v*(v+2*p)+m;else v=-c,x=Math.max(0,-(d*v+h)),b=-x*x+v*(v+2*p)+m;else v<=-M?(x=Math.max(0,-(-d*c+h)),v=x>0?-c:Math.min(Math.max(-c,-p),c),b=-x*x+v*(v+2*p)+m):v<=M?(x=0,v=Math.min(Math.max(-c,-p),c),b=v*(v+2*p)+m):(x=Math.max(0,-(d*c+h)),v=x>0?c:Math.min(Math.max(-c,-p),c),b=-x*x+v*(v+2*p)+m);else v=d>0?-c:c,x=Math.max(0,-(d*v+h)),b=-x*x+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(yd).addScaledVector(pc,v),b}intersectSphere(e,i){la.subVectors(e.center,this.origin);const r=la.dot(this.direction),l=la.dot(la)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,h,p;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,l=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,l=(e.min.x-v.x)*m),g>=0?(c=(e.min.y-v.y)*g,d=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,d=(e.min.y-v.y)*g),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),x>=0?(h=(e.min.z-v.z)*x,p=(e.max.z-v.z)*x):(h=(e.max.z-v.z)*x,p=(e.min.z-v.z)*x),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,la)!==null}intersectTriangle(e,i,r,l,c){bd.subVectors(i,e),mc.subVectors(r,e),Sd.crossVectors(bd,mc);let d=this.direction.dot(Sd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ka.subVectors(this.origin,e);const p=h*this.direction.dot(mc.crossVectors(Ka,mc));if(p<0)return null;const m=h*this.direction.dot(bd.cross(Ka));if(m<0||p+m>d)return null;const g=-h*Ka.dot(Sd);return g<0?null:this.at(g/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xn{constructor(e,i,r,l,c,d,h,p,m,g,x,v,b,M,T,S){xn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,p,m,g,x,v,b,M,T,S)}set(e,i,r,l,c,d,h,p,m,g,x,v,b,M,T,S){const y=this.elements;return y[0]=e,y[4]=i,y[8]=r,y[12]=l,y[1]=c,y[5]=d,y[9]=h,y[13]=p,y[2]=m,y[6]=g,y[10]=x,y[14]=v,y[3]=b,y[7]=M,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/gs.setFromMatrixColumn(e,0).length(),c=1/gs.setFromMatrixColumn(e,1).length(),d=1/gs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const v=d*g,b=d*x,M=h*g,T=h*x;i[0]=p*g,i[4]=-p*x,i[8]=m,i[1]=b+M*m,i[5]=v-T*m,i[9]=-h*p,i[2]=T-v*m,i[6]=M+b*m,i[10]=d*p}else if(e.order==="YXZ"){const v=p*g,b=p*x,M=m*g,T=m*x;i[0]=v+T*h,i[4]=M*h-b,i[8]=d*m,i[1]=d*x,i[5]=d*g,i[9]=-h,i[2]=b*h-M,i[6]=T+v*h,i[10]=d*p}else if(e.order==="ZXY"){const v=p*g,b=p*x,M=m*g,T=m*x;i[0]=v-T*h,i[4]=-d*x,i[8]=M+b*h,i[1]=b+M*h,i[5]=d*g,i[9]=T-v*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const v=d*g,b=d*x,M=h*g,T=h*x;i[0]=p*g,i[4]=M*m-b,i[8]=v*m+T,i[1]=p*x,i[5]=T*m+v,i[9]=b*m-M,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const v=d*p,b=d*m,M=h*p,T=h*m;i[0]=p*g,i[4]=T-v*x,i[8]=M*x+b,i[1]=x,i[5]=d*g,i[9]=-h*g,i[2]=-m*g,i[6]=b*x+M,i[10]=v-T*x}else if(e.order==="XZY"){const v=d*p,b=d*m,M=h*p,T=h*m;i[0]=p*g,i[4]=-x,i[8]=m*g,i[1]=v*x+T,i[5]=d*g,i[9]=b*x-M,i[2]=M*x-b,i[6]=h*g,i[10]=T*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O1,e,P1)}lookAt(e,i,r){const l=this.elements;return ii.subVectors(e,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Qa.crossVectors(r,ii),Qa.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Qa.crossVectors(r,ii)),Qa.normalize(),xc.crossVectors(ii,Qa),l[0]=Qa.x,l[4]=xc.x,l[8]=ii.x,l[1]=Qa.y,l[5]=xc.y,l[9]=ii.y,l[2]=Qa.z,l[6]=xc.z,l[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],g=r[1],x=r[5],v=r[9],b=r[13],M=r[2],T=r[6],S=r[10],y=r[14],D=r[3],C=r[7],O=r[11],H=r[15],N=l[0],F=l[4],X=l[8],U=l[12],R=l[1],V=l[5],q=l[9],re=l[13],he=l[2],ce=l[6],B=l[10],K=l[14],W=l[3],pe=l[7],_e=l[11],z=l[15];return c[0]=d*N+h*R+p*he+m*W,c[4]=d*F+h*V+p*ce+m*pe,c[8]=d*X+h*q+p*B+m*_e,c[12]=d*U+h*re+p*K+m*z,c[1]=g*N+x*R+v*he+b*W,c[5]=g*F+x*V+v*ce+b*pe,c[9]=g*X+x*q+v*B+b*_e,c[13]=g*U+x*re+v*K+b*z,c[2]=M*N+T*R+S*he+y*W,c[6]=M*F+T*V+S*ce+y*pe,c[10]=M*X+T*q+S*B+y*_e,c[14]=M*U+T*re+S*K+y*z,c[3]=D*N+C*R+O*he+H*W,c[7]=D*F+C*V+O*ce+H*pe,c[11]=D*X+C*q+O*B+H*_e,c[15]=D*U+C*re+O*K+H*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],h=e[5],p=e[9],m=e[13],g=e[2],x=e[6],v=e[10],b=e[14],M=e[3],T=e[7],S=e[11],y=e[15];return M*(+c*p*x-l*m*x-c*h*v+r*m*v+l*h*b-r*p*b)+T*(+i*p*b-i*m*v+c*d*v-l*d*b+l*m*g-c*p*g)+S*(+i*m*x-i*h*b-c*d*x+r*d*b+c*h*g-r*m*g)+y*(-l*h*g-i*p*x+i*h*v+l*d*x-r*d*v+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8],x=e[9],v=e[10],b=e[11],M=e[12],T=e[13],S=e[14],y=e[15],D=x*S*m-T*v*m+T*p*b-h*S*b-x*p*y+h*v*y,C=M*v*m-g*S*m-M*p*b+d*S*b+g*p*y-d*v*y,O=g*T*m-M*x*m+M*h*b-d*T*b-g*h*y+d*x*y,H=M*x*p-g*T*p-M*h*v+d*T*v+g*h*S-d*x*S,N=i*D+r*C+l*O+c*H;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=D*F,e[1]=(T*v*c-x*S*c-T*l*b+r*S*b+x*l*y-r*v*y)*F,e[2]=(h*S*c-T*p*c+T*l*m-r*S*m-h*l*y+r*p*y)*F,e[3]=(x*p*c-h*v*c-x*l*m+r*v*m+h*l*b-r*p*b)*F,e[4]=C*F,e[5]=(g*S*c-M*v*c+M*l*b-i*S*b-g*l*y+i*v*y)*F,e[6]=(M*p*c-d*S*c-M*l*m+i*S*m+d*l*y-i*p*y)*F,e[7]=(d*v*c-g*p*c+g*l*m-i*v*m-d*l*b+i*p*b)*F,e[8]=O*F,e[9]=(M*x*c-g*T*c-M*r*b+i*T*b+g*r*y-i*x*y)*F,e[10]=(d*T*c-M*h*c+M*r*m-i*T*m-d*r*y+i*h*y)*F,e[11]=(g*h*c-d*x*c-g*r*m+i*x*m+d*r*b-i*h*b)*F,e[12]=H*F,e[13]=(g*T*l-M*x*l+M*r*v-i*T*v-g*r*S+i*x*S)*F,e[14]=(M*h*l-d*T*l-M*r*p+i*T*p+d*r*S-i*h*S)*F,e[15]=(d*x*l-g*h*l+g*r*p-i*x*p-d*r*v+i*h*v)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,h=e.y,p=e.z,m=c*d,g=c*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+r,g*p-l*d,0,m*p-l*h,g*p+l*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,p=i._w,m=c+c,g=d+d,x=h+h,v=c*m,b=c*g,M=c*x,T=d*g,S=d*x,y=h*x,D=p*m,C=p*g,O=p*x,H=r.x,N=r.y,F=r.z;return l[0]=(1-(T+y))*H,l[1]=(b+O)*H,l[2]=(M-C)*H,l[3]=0,l[4]=(b-O)*N,l[5]=(1-(v+y))*N,l[6]=(S+D)*N,l[7]=0,l[8]=(M+C)*F,l[9]=(S-D)*F,l[10]=(1-(v+T))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=gs.set(l[0],l[1],l[2]).length();const d=gs.set(l[4],l[5],l[6]).length(),h=gs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ai.copy(this);const m=1/c,g=1/d,x=1/h;return Ai.elements[0]*=m,Ai.elements[1]*=m,Ai.elements[2]*=m,Ai.elements[4]*=g,Ai.elements[5]*=g,Ai.elements[6]*=g,Ai.elements[8]*=x,Ai.elements[9]*=x,Ai.elements[10]*=x,i.setFromRotationMatrix(Ai),r.x=c,r.y=d,r.z=h,this}makePerspective(e,i,r,l,c,d,h=Hi,p=!1){const m=this.elements,g=2*c/(i-e),x=2*c/(r-l),v=(i+e)/(i-e),b=(r+l)/(r-l);let M,T;if(p)M=c/(d-c),T=d*c/(d-c);else if(h===Hi)M=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(h===Gc)M=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=g,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=x,m[9]=b,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,d,h=Hi,p=!1){const m=this.elements,g=2/(i-e),x=2/(r-l),v=-(i+e)/(i-e),b=-(r+l)/(r-l);let M,T;if(p)M=1/(d-c),T=d/(d-c);else if(h===Hi)M=-2/(d-c),T=-(d+c)/(d-c);else if(h===Gc)M=-1/(d-c),T=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=g,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=x,m[9]=0,m[13]=b,m[2]=0,m[6]=0,m[10]=M,m[14]=T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const gs=new oe,Ai=new xn,O1=new oe(0,0,0),P1=new oe(1,1,1),Qa=new oe,xc=new oe,ii=new oe,pg=new xn,mg=new Zo;class ba{constructor(e=0,i=0,r=0,l=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],p=l[1],m=l[5],g=l[9],x=l[2],v=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Et(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,b),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,b),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return pg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return mg.setFromEuler(this),this.setFromQuaternion(mg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class Ov{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let z1=0;const xg=new oe,vs=new Zo,ca=new xn,gc=new oe,zo=new oe,F1=new oe,B1=new Zo,gg=new oe(1,0,0),vg=new oe(0,1,0),_g=new oe(0,0,1),yg={type:"added"},I1={type:"removed"},_s={type:"childadded",child:null},Md={type:"childremoved",child:null};class Wn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new oe,i=new ba,r=new Zo,l=new oe(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new xn},normalMatrix:{value:new dt}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ov,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(gg,e)}rotateY(e){return this.rotateOnAxis(vg,e)}rotateZ(e){return this.rotateOnAxis(_g,e)}translateOnAxis(e,i){return xg.copy(e).applyQuaternion(this.quaternion),this.position.add(xg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(gg,e)}translateY(e){return this.translateOnAxis(vg,e)}translateZ(e){return this.translateOnAxis(_g,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?gc.copy(e):gc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(zo,gc,this.up):ca.lookAt(gc,zo,this.up),this.quaternion.setFromRotationMatrix(ca),l&&(ca.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(ca),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(on("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yg),_s.child=e,this.dispatchEvent(_s),_s.child=null):on("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(I1),Md.child=e,this.dispatchEvent(Md),Md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yg),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,F1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,B1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const x=p[m];c(e.shapes,x)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),g=d(e.images),x=d(e.shapes),v=d(e.skeletons),b=d(e.animations),M=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),b.length>0&&(r.animations=b),M.length>0&&(r.nodes=M)}return r.object=l,r;function d(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new oe(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new oe,ua=new oe,Ed=new oe,fa=new oe,ys=new oe,bs=new oe,bg=new oe,Td=new oe,Ad=new oe,Rd=new oe,Cd=new ln,wd=new ln,Dd=new ln;class wi{constructor(e=new oe,i=new oe,r=new oe){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ri.subVectors(l,i),ua.subVectors(r,i),Ed.subVectors(e,i);const d=Ri.dot(Ri),h=Ri.dot(ua),p=Ri.dot(Ed),m=ua.dot(ua),g=ua.dot(Ed),x=d*m-h*h;if(x===0)return c.set(0,0,0),null;const v=1/x,b=(m*p-h*g)*v,M=(d*g-h*p)*v;return c.set(1-b-M,M,b)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(e,i,r,l,c,d,h,p){return this.getBarycoord(e,i,r,l,fa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,fa.x),p.addScaledVector(d,fa.y),p.addScaledVector(h,fa.z),p)}static getInterpolatedAttribute(e,i,r,l,c,d){return Cd.setScalar(0),wd.setScalar(0),Dd.setScalar(0),Cd.fromBufferAttribute(e,i),wd.fromBufferAttribute(e,r),Dd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Cd,c.x),d.addScaledVector(wd,c.y),d.addScaledVector(Dd,c.z),d}static isFrontFacing(e,i,r,l){return Ri.subVectors(r,i),ua.subVectors(e,i),Ri.cross(ua).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),Ri.cross(ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return wi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,h;ys.subVectors(l,r),bs.subVectors(c,r),Td.subVectors(e,r);const p=ys.dot(Td),m=bs.dot(Td);if(p<=0&&m<=0)return i.copy(r);Ad.subVectors(e,l);const g=ys.dot(Ad),x=bs.dot(Ad);if(g>=0&&x<=g)return i.copy(l);const v=p*x-g*m;if(v<=0&&p>=0&&g<=0)return d=p/(p-g),i.copy(r).addScaledVector(ys,d);Rd.subVectors(e,c);const b=ys.dot(Rd),M=bs.dot(Rd);if(M>=0&&b<=M)return i.copy(c);const T=b*m-p*M;if(T<=0&&m>=0&&M<=0)return h=m/(m-M),i.copy(r).addScaledVector(bs,h);const S=g*M-b*x;if(S<=0&&x-g>=0&&b-M>=0)return bg.subVectors(c,l),h=(x-g)/(x-g+(b-M)),i.copy(l).addScaledVector(bg,h);const y=1/(S+T+v);return d=T*y,h=v*y,i.copy(r).addScaledVector(ys,d).addScaledVector(bs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Ud(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Bt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ut.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ut.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ut.workingColorSpace){if(e=A1(e,1),i=Et(i,0,1),r=Et(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Ud(d,c,e+1/3),this.g=Ud(d,c,e),this.b=Ud(d,c,e-1/3)}return Ut.colorSpaceToWorking(this,l),this}setStyle(e,i=xi){function r(c){c!==void 0&&parseFloat(c)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:lt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=xi){const r=Pv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Ut.workingToColorSpace(Pn.copy(this),e),Math.round(Et(Pn.r*255,0,255))*65536+Math.round(Et(Pn.g*255,0,255))*256+Math.round(Et(Pn.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ut.workingColorSpace){Ut.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,c=Pn.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let p,m;const g=(h+d)/2;if(h===d)p=0,m=0;else{const x=d-h;switch(m=g<=.5?x/(d+h):x/(2-d-h),d){case r:p=(l-c)/x+(l<c?6:0);break;case l:p=(c-r)/x+2;break;case c:p=(r-l)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Ut.workingColorSpace){return Ut.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=xi){Ut.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,r=Pn.g,l=Pn.b;return e!==xi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ja),this.setHSL(Ja.h+e,Ja.s+i,Ja.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ja),e.getHSL(vc);const r=hd(Ja.h,vc.h,i),l=hd(Ja.s,vc.s,i),c=hd(Ja.l,vc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Bt;Bt.NAMES=Pv;let H1=0;class Qo extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Cs,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=qd,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){lt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(r.blending=this.blending),this.side!==ir&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Xd&&(r.blendSrc=this.blendSrc),this.blendDst!==qd&&(r.blendDst=this.blendDst),this.blendEquation!==wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Go extends Qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new oe,_c=new Lt;let G1=0;class Ui{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:G1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=og,this.updateRanges=[],this.gpuType=xa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)_c.fromBufferAttribute(this,i),_c.applyMatrix3(e),this.setXY(i,_c.x,_c.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Lo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Xn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Lo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Lo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Lo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Lo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array),c=Xn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==og&&(e.usage=this.usage),e}}class zv extends Ui{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Fv extends Ui{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class si extends Ui{constructor(e,i,r){super(new Float32Array(e),i,r)}}let V1=0;const mi=new xn,Nd=new Wn,Ss=new oe,ai=new Ko,Fo=new Ko,An=new oe;class yi extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uv(e)?Fv:zv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new dt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,i,r){return mi.makeTranslation(e,i,r),this.applyMatrix4(mi),this}scale(e,i,r){return mi.makeScale(e,i,r),this.applyMatrix4(mi),this}lookAt(e){return Nd.lookAt(e),Nd.updateMatrix(),this.applyMatrix4(Nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new si(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&on('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Fo.setFromBufferAttribute(h),this.morphTargetsRelative?(An.addVectors(ai.min,Fo.min),ai.expandByPoint(An),An.addVectors(ai.max,Fo.max),ai.expandByPoint(An)):(ai.expandByPoint(Fo.min),ai.expandByPoint(Fo.max))}ai.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)An.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(An));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)An.fromBufferAttribute(h,m),p&&(Ss.fromBufferAttribute(e,m),An.add(Ss)),l=Math.max(l,r.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&on('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){on("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let X=0;X<r.count;X++)h[X]=new oe,p[X]=new oe;const m=new oe,g=new oe,x=new oe,v=new Lt,b=new Lt,M=new Lt,T=new oe,S=new oe;function y(X,U,R){m.fromBufferAttribute(r,X),g.fromBufferAttribute(r,U),x.fromBufferAttribute(r,R),v.fromBufferAttribute(c,X),b.fromBufferAttribute(c,U),M.fromBufferAttribute(c,R),g.sub(m),x.sub(m),b.sub(v),M.sub(v);const V=1/(b.x*M.y-M.x*b.y);isFinite(V)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(x,-b.y).multiplyScalar(V),S.copy(x).multiplyScalar(b.x).addScaledVector(g,-M.x).multiplyScalar(V),h[X].add(T),h[U].add(T),h[R].add(T),p[X].add(S),p[U].add(S),p[R].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let X=0,U=D.length;X<U;++X){const R=D[X],V=R.start,q=R.count;for(let re=V,he=V+q;re<he;re+=3)y(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const C=new oe,O=new oe,H=new oe,N=new oe;function F(X){H.fromBufferAttribute(l,X),N.copy(H);const U=h[X];C.copy(U),C.sub(H.multiplyScalar(H.dot(U))).normalize(),O.crossVectors(N,U);const V=O.dot(p[X])<0?-1:1;d.setXYZW(X,C.x,C.y,C.z,V)}for(let X=0,U=D.length;X<U;++X){const R=D[X],V=R.start,q=R.count;for(let re=V,he=V+q;re<he;re+=3)F(e.getX(re+0)),F(e.getX(re+1)),F(e.getX(re+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,b=r.count;v<b;v++)r.setXYZ(v,0,0,0);const l=new oe,c=new oe,d=new oe,h=new oe,p=new oe,m=new oe,g=new oe,x=new oe;if(e)for(let v=0,b=e.count;v<b;v+=3){const M=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),g.subVectors(d,c),x.subVectors(l,c),g.cross(x),h.fromBufferAttribute(r,M),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,S),h.add(g),p.add(g),m.add(g),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let v=0,b=i.count;v<b;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),g.subVectors(d,c),x.subVectors(l,c),g.cross(x),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(h,p){const m=h.array,g=h.itemSize,x=h.normalized,v=new m.constructor(p.length*g);let b=0,M=0;for(let T=0,S=p.length;T<S;T++){h.isInterleavedBufferAttribute?b=p[T]*h.data.stride+h.offset:b=p[T]*g;for(let y=0;y<g;y++)v[M++]=m[b++]}return new Ui(v,g,x)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new yi,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,x=m.length;g<x;g++){const v=m[g],b=e(v,r);p.push(b)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let x=0,v=m.length;x<v;x++){const b=m[x];g.push(b.toJSON(e.data))}g.length>0&&(l[p]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=e.morphAttributes;for(const m in c){const g=[],x=c[m];for(let v=0,b=x.length;v<b;v++)g.push(x[v].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const x=d[m];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sg=new xn,Er=new Lv,yc=new qc,Mg=new oe,bc=new oe,Sc=new oe,Mc=new oe,Ld=new oe,Ec=new oe,Eg=new oe,Tc=new oe;class _i extends Wn{constructor(e=new yi,i=new Go){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Ec.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],x=c[p];g!==0&&(Ld.fromBufferAttribute(x,e),d?Ec.addScaledVector(Ld,g):Ec.addScaledVector(Ld.sub(i),g))}i.add(Ec)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yc.copy(r.boundingSphere),yc.applyMatrix4(c),Er.copy(e.ray).recast(e.near),!(yc.containsPoint(Er.origin)===!1&&(Er.intersectSphere(yc,Mg)===null||Er.origin.distanceToSquared(Mg)>(e.far-e.near)**2))&&(Sg.copy(c).invert(),Er.copy(e.ray).applyMatrix4(Sg),!(r.boundingBox!==null&&Er.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Er)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,v=c.groups,b=c.drawRange;if(h!==null)if(Array.isArray(d))for(let M=0,T=v.length;M<T;M++){const S=v[M],y=d[S.materialIndex],D=Math.max(S.start,b.start),C=Math.min(h.count,Math.min(S.start+S.count,b.start+b.count));for(let O=D,H=C;O<H;O+=3){const N=h.getX(O),F=h.getX(O+1),X=h.getX(O+2);l=Ac(this,y,e,r,m,g,x,N,F,X),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,b.start),T=Math.min(h.count,b.start+b.count);for(let S=M,y=T;S<y;S+=3){const D=h.getX(S),C=h.getX(S+1),O=h.getX(S+2);l=Ac(this,d,e,r,m,g,x,D,C,O),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let M=0,T=v.length;M<T;M++){const S=v[M],y=d[S.materialIndex],D=Math.max(S.start,b.start),C=Math.min(p.count,Math.min(S.start+S.count,b.start+b.count));for(let O=D,H=C;O<H;O+=3){const N=O,F=O+1,X=O+2;l=Ac(this,y,e,r,m,g,x,N,F,X),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,b.start),T=Math.min(p.count,b.start+b.count);for(let S=M,y=T;S<y;S+=3){const D=S,C=S+1,O=S+2;l=Ac(this,d,e,r,m,g,x,D,C,O),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function k1(s,e,i,r,l,c,d,h){let p;if(e.side===qn?p=r.intersectTriangle(d,c,l,!0,h):p=r.intersectTriangle(l,c,d,e.side===ir,h),p===null)return null;Tc.copy(h),Tc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(Tc);return m<i.near||m>i.far?null:{distance:m,point:Tc.clone(),object:s}}function Ac(s,e,i,r,l,c,d,h,p,m){s.getVertexPosition(h,bc),s.getVertexPosition(p,Sc),s.getVertexPosition(m,Mc);const g=k1(s,e,i,r,bc,Sc,Mc,Eg);if(g){const x=new oe;wi.getBarycoord(Eg,bc,Sc,Mc,x),l&&(g.uv=wi.getInterpolatedAttribute(l,h,p,m,x,new Lt)),c&&(g.uv1=wi.getInterpolatedAttribute(c,h,p,m,x,new Lt)),d&&(g.normal=wi.getInterpolatedAttribute(d,h,p,m,x,new oe),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new oe,materialIndex:0};wi.getNormal(bc,Sc,Mc,v.normal),g.face=v,g.barycoord=x}return g}class Jo extends yi{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],g=[],x=[];let v=0,b=0;M("z","y","x",-1,-1,r,i,e,d,c,0),M("z","y","x",1,-1,r,i,-e,d,c,1),M("x","z","y",1,1,e,r,i,l,d,2),M("x","z","y",1,-1,e,r,-i,l,d,3),M("x","y","z",1,-1,e,i,r,l,c,4),M("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new si(m,3)),this.setAttribute("normal",new si(g,3)),this.setAttribute("uv",new si(x,2));function M(T,S,y,D,C,O,H,N,F,X,U){const R=O/F,V=H/X,q=O/2,re=H/2,he=N/2,ce=F+1,B=X+1;let K=0,W=0;const pe=new oe;for(let _e=0;_e<B;_e++){const z=_e*V-re;for(let ne=0;ne<ce;ne++){const ye=ne*R-q;pe[T]=ye*D,pe[S]=z*C,pe[y]=he,m.push(pe.x,pe.y,pe.z),pe[T]=0,pe[S]=0,pe[y]=N>0?1:-1,g.push(pe.x,pe.y,pe.z),x.push(ne/F),x.push(1-_e/X),K+=1}}for(let _e=0;_e<X;_e++)for(let z=0;z<F;z++){const ne=v+z+ce*_e,ye=v+z+ce*(_e+1),Te=v+(z+1)+ce*(_e+1),Oe=v+(z+1)+ce*_e;p.push(ne,ye,Oe),p.push(ye,Te,Oe),W+=6}h.addGroup(b,W,U),b+=W,v+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Bn(s){const e={};for(let i=0;i<s.length;i++){const r=Os(s[i]);for(const l in r)e[l]=r[l]}return e}function j1(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Bv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const X1={clone:Os,merge:Bn};var q1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sa extends Qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q1,this.fragmentShader=W1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=j1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Iv extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $a=new oe,Tg=new Lt,Ag=new Lt;class gi extends Iv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Nh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nh*2*Math.atan(Math.tan(dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($a.x,$a.y).multiplyScalar(-e/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set($a.x,$a.y).multiplyScalar(-e/$a.z)}getViewSize(e,i){return this.getViewBounds(e,Tg,Ag),i.subVectors(Ag,Tg)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(dd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ms=-90,Es=1;class Y1 extends Wn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi(Ms,Es,e,i);l.layers=this.layers,this.add(l);const c=new gi(Ms,Es,e,i);c.layers=this.layers,this.add(c);const d=new gi(Ms,Es,e,i);d.layers=this.layers,this.add(d);const h=new gi(Ms,Es,e,i);h.layers=this.layers,this.add(h);const p=new gi(Ms,Es,e,i);p.layers=this.layers,this.add(p);const m=new gi(Ms,Es,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,p]=i;for(const m of i)this.remove(m);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Gc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,p,m,g]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(x,v,b),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Hv extends zn{constructor(e=[],i=Us,r,l,c,d,h,p,m,g){super(e,i,r,l,c,d,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Z1 extends Lr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Hv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Jo(5,5,5),c=new Sa({name:"CubemapFromEquirect",uniforms:Os(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:va});c.uniforms.tEquirect.value=i;const d=new _i(l,c),h=i.minFilter;return i.minFilter===Ur&&(i.minFilter=vi),new Y1(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}class Rs extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K1={type:"move"};class Od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const T of e.hand.values()){const S=i.getJointPose(T,r),y=this._getHandJoint(m,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=g.position.distanceTo(x.position),b=.02,M=.005;m.inputState.pinching&&v>b+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=b-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(K1)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Rs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Q1 extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ba,this.environmentIntensity=1,this.environmentRotation=new ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class J1 extends zn{constructor(e=null,i=1,r=1,l,c,d,h,p,m=ri,g=ri,x,v){super(null,d,h,p,m,g,l,c,x,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pd=new oe,$1=new oe,eM=new dt;class Cr{constructor(e=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Pd.subVectors(r,i).cross($1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Pd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||eM.getNormalMatrix(e),l=this.coplanarPoint(Pd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new qc,tM=new Lt(.5,.5),Rc=new oe;class Gv{constructor(e=new Cr,i=new Cr,r=new Cr,l=new Cr,c=new Cr,d=new Cr){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Hi,r=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],p=c[2],m=c[3],g=c[4],x=c[5],v=c[6],b=c[7],M=c[8],T=c[9],S=c[10],y=c[11],D=c[12],C=c[13],O=c[14],H=c[15];if(l[0].setComponents(m-d,b-g,y-M,H-D).normalize(),l[1].setComponents(m+d,b+g,y+M,H+D).normalize(),l[2].setComponents(m+h,b+x,y+T,H+C).normalize(),l[3].setComponents(m-h,b-x,y-T,H-C).normalize(),r)l[4].setComponents(p,v,S,O).normalize(),l[5].setComponents(m-p,b-v,y-S,H-O).normalize();else if(l[4].setComponents(m-p,b-v,y-S,H-O).normalize(),i===Hi)l[5].setComponents(m+p,b+v,y+S,H+O).normalize();else if(i===Gc)l[5].setComponents(p,v,S,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const i=tM.distanceTo(e.center);return Tr.radius=.7071067811865476+i,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Rc.x=l.normal.x>0?e.max.x:e.min.x,Rc.y=l.normal.y>0?e.max.y:e.min.y,Rc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vv extends Qo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rg=new xn,Lh=new Lv,Cc=new qc,wc=new oe;class nM extends Wn{constructor(e=new yi,i=new Vv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Cc.copy(r.boundingSphere),Cc.applyMatrix4(l),Cc.radius+=c,e.ray.intersectsSphere(Cc)===!1)return;Rg.copy(l).invert(),Lh.copy(e.ray).applyMatrix4(Rg);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=r.index,x=r.attributes.position;if(m!==null){const v=Math.max(0,d.start),b=Math.min(m.count,d.start+d.count);for(let M=v,T=b;M<T;M++){const S=m.getX(M);wc.fromBufferAttribute(x,S),Cg(wc,S,p,l,e,i,this)}}else{const v=Math.max(0,d.start),b=Math.min(x.count,d.start+d.count);for(let M=v,T=b;M<T;M++)wc.fromBufferAttribute(x,M),Cg(wc,M,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Cg(s,e,i,r,l,c,d){const h=Lh.distanceSqToPoint(s);if(h<i){const p=new oe;Lh.closestPointToPoint(s,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class kv extends zn{constructor(e,i,r=Nr,l,c,d,h=ri,p=ri,m,g=jo,x=1){if(g!==jo&&g!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:x};super(v,l,c,d,h,p,g,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ep(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class jv extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wc extends yi{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const c=[],d=[];h(l),m(r),g(),this.setAttribute("position",new si(c,3)),this.setAttribute("normal",new si(c.slice(),3)),this.setAttribute("uv",new si(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(D){const C=new oe,O=new oe,H=new oe;for(let N=0;N<i.length;N+=3)b(i[N+0],C),b(i[N+1],O),b(i[N+2],H),p(C,O,H,D)}function p(D,C,O,H){const N=H+1,F=[];for(let X=0;X<=N;X++){F[X]=[];const U=D.clone().lerp(O,X/N),R=C.clone().lerp(O,X/N),V=N-X;for(let q=0;q<=V;q++)q===0&&X===N?F[X][q]=U:F[X][q]=U.clone().lerp(R,q/V)}for(let X=0;X<N;X++)for(let U=0;U<2*(N-X)-1;U++){const R=Math.floor(U/2);U%2===0?(v(F[X][R+1]),v(F[X+1][R]),v(F[X][R])):(v(F[X][R+1]),v(F[X+1][R+1]),v(F[X+1][R]))}}function m(D){const C=new oe;for(let O=0;O<c.length;O+=3)C.x=c[O+0],C.y=c[O+1],C.z=c[O+2],C.normalize().multiplyScalar(D),c[O+0]=C.x,c[O+1]=C.y,c[O+2]=C.z}function g(){const D=new oe;for(let C=0;C<c.length;C+=3){D.x=c[C+0],D.y=c[C+1],D.z=c[C+2];const O=S(D)/2/Math.PI+.5,H=y(D)/Math.PI+.5;d.push(O,1-H)}M(),x()}function x(){for(let D=0;D<d.length;D+=6){const C=d[D+0],O=d[D+2],H=d[D+4],N=Math.max(C,O,H),F=Math.min(C,O,H);N>.9&&F<.1&&(C<.2&&(d[D+0]+=1),O<.2&&(d[D+2]+=1),H<.2&&(d[D+4]+=1))}}function v(D){c.push(D.x,D.y,D.z)}function b(D,C){const O=D*3;C.x=e[O+0],C.y=e[O+1],C.z=e[O+2]}function M(){const D=new oe,C=new oe,O=new oe,H=new oe,N=new Lt,F=new Lt,X=new Lt;for(let U=0,R=0;U<c.length;U+=9,R+=6){D.set(c[U+0],c[U+1],c[U+2]),C.set(c[U+3],c[U+4],c[U+5]),O.set(c[U+6],c[U+7],c[U+8]),N.set(d[R+0],d[R+1]),F.set(d[R+2],d[R+3]),X.set(d[R+4],d[R+5]),H.copy(D).add(C).add(O).divideScalar(3);const V=S(H);T(N,R+0,D,V),T(F,R+2,C,V),T(X,R+4,O,V)}}function T(D,C,O,H){H<0&&D.x===1&&(d[C]=D.x-1),O.x===0&&O.z===0&&(d[C]=H/2/Math.PI+.5)}function S(D){return Math.atan2(D.z,-D.x)}function y(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.vertices,e.indices,e.radius,e.details)}}class tp extends Wc{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new tp(e.radius,e.detail)}}class np extends Wc{constructor(e=1,i=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,l,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new np(e.radius,e.detail)}}class Yc extends yi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,g=p+1,x=e/h,v=i/p,b=[],M=[],T=[],S=[];for(let y=0;y<g;y++){const D=y*v-d;for(let C=0;C<m;C++){const O=C*x-c;M.push(O,-D,0),T.push(0,0,1),S.push(C/h),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let D=0;D<h;D++){const C=D+m*y,O=D+m*(y+1),H=D+1+m*(y+1),N=D+1+m*y;b.push(C,O,N),b.push(O,H,N)}this.setIndex(b),this.setAttribute("position",new si(M,3)),this.setAttribute("normal",new si(T,3)),this.setAttribute("uv",new si(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.width,e.height,e.widthSegments,e.heightSegments)}}class ip extends yi{constructor(e=1,i=.4,r=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:l,arc:c},r=Math.floor(r),l=Math.floor(l);const d=[],h=[],p=[],m=[],g=new oe,x=new oe,v=new oe;for(let b=0;b<=r;b++)for(let M=0;M<=l;M++){const T=M/l*c,S=b/r*Math.PI*2;x.x=(e+i*Math.cos(S))*Math.cos(T),x.y=(e+i*Math.cos(S))*Math.sin(T),x.z=i*Math.sin(S),h.push(x.x,x.y,x.z),g.x=e*Math.cos(T),g.y=e*Math.sin(T),v.subVectors(x,g).normalize(),p.push(v.x,v.y,v.z),m.push(M/l),m.push(b/r)}for(let b=1;b<=r;b++)for(let M=1;M<=l;M++){const T=(l+1)*b+M-1,S=(l+1)*(b-1)+M-1,y=(l+1)*(b-1)+M,D=(l+1)*b+M;d.push(T,S,D),d.push(S,y,D)}this.setIndex(d),this.setAttribute("position",new si(h,3)),this.setAttribute("normal",new si(p,3)),this.setAttribute("uv",new si(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ip(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class iM extends Qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aM extends Qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class rM{constructor(e,i,r){const l=this;let c=!1,d=0,h=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(g){h++,c===!1&&l.onStart!==void 0&&l.onStart(g,d,h),c=!0},this.itemEnd=function(g){d++,l.onProgress!==void 0&&l.onProgress(g,d,h),d===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,x){return m.push(g,x),this},this.removeHandler=function(g){const x=m.indexOf(g);return x!==-1&&m.splice(x,2),this},this.getHandler=function(g){for(let x=0,v=m.length;x<v;x+=2){const b=m[x],M=m[x+1];if(b.global&&(b.lastIndex=0),b.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const sM=new rM;class ap{constructor(e){this.manager=e!==void 0?e:sM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,c){r.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ap.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ts=new WeakMap;class oM extends ap{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,d=zd.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(d),c.manager.itemEnd(e)},0);else{let x=Ts.get(d);x===void 0&&(x=[],Ts.set(d,x)),x.push({onLoad:i,onError:l})}return d}const h=qo("img");function p(){g(),i&&i(this);const x=Ts.get(this)||[];for(let v=0;v<x.length;v++){const b=x[v];b.onLoad&&b.onLoad(this)}Ts.delete(this),c.manager.itemEnd(e)}function m(x){g(),l&&l(x),zd.remove(`image:${e}`);const v=Ts.get(this)||[];for(let b=0;b<v.length;b++){const M=v[b];M.onError&&M.onError(x)}Ts.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){h.removeEventListener("load",p,!1),h.removeEventListener("error",m,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),zd.add(`image:${e}`,h),c.manager.itemStart(e),h.src=e,h}}class lM extends ap{constructor(e){super(e)}load(e,i,r,l){const c=new zn,d=new oM(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class cM extends Iv{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class uM extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class fM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function wg(s,e,i,r){const l=dM(r);switch(i){case Rv:return s*e;case wv:return s*e/l.components*l.byteLength;case Kh:return s*e/l.components*l.byteLength;case Qh:return s*e*2/l.components*l.byteLength;case Jh:return s*e*2/l.components*l.byteLength;case Cv:return s*e*3/l.components*l.byteLength;case Di:return s*e*4/l.components*l.byteLength;case $h:return s*e*4/l.components*l.byteLength;case Lc:case Oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pc:case zc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rh:case oh:return Math.max(s,16)*Math.max(e,8)/4;case ah:case sh:return Math.max(s,8)*Math.max(e,8)/2;case lh:case ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case hh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ph:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case mh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case gh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case _h:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case yh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case bh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Th:case Ah:case Rh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ch:case wh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Dh:case Uh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function dM(s){switch(s){case ya:case Mv:return{byteLength:1,components:1};case Vo:case Ev:case Ps:return{byteLength:2,components:1};case Yh:case Zh:return{byteLength:2,components:4};case Nr:case Wh:case xa:return{byteLength:4,components:1};case Tv:case Av:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qh}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xv(){let s=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function hM(s){const e=new WeakMap;function i(h,p){const m=h.array,g=h.usage,x=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,g),h.onUploadCallback();let b;if(m instanceof Float32Array)b=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)b=s.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)b=s.SHORT;else if(m instanceof Uint32Array)b=s.UNSIGNED_INT;else if(m instanceof Int32Array)b=s.INT;else if(m instanceof Int8Array)b=s.BYTE;else if(m instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:b,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,p,m){const g=p.array,x=p.updateRanges;if(s.bindBuffer(m,h),x.length===0)s.bufferSubData(m,0,g);else{x.sort((b,M)=>b.start-M.start);let v=0;for(let b=1;b<x.length;b++){const M=x[v],T=x[b];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++v,x[v]=T)}x.length=v+1;for(let b=0,M=x.length;b<M;b++){const T=x[b];s.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(s.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:d}}var pM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,MM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,RM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,CM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,FM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,BM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,IM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,HM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jM="gl_FragColor = linearToOutputTexel( gl_FragColor );",XM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ZM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,QM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,n3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,s3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,o3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,d3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,m3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,M3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,D3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,k3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,K3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Q3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,J3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,SE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,OE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,PE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,XE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:pM,alphahash_pars_fragment:mM,alphamap_fragment:xM,alphamap_pars_fragment:gM,alphatest_fragment:vM,alphatest_pars_fragment:_M,aomap_fragment:yM,aomap_pars_fragment:bM,batching_pars_vertex:SM,batching_vertex:MM,begin_vertex:EM,beginnormal_vertex:TM,bsdfs:AM,iridescence_fragment:RM,bumpmap_pars_fragment:CM,clipping_planes_fragment:wM,clipping_planes_pars_fragment:DM,clipping_planes_pars_vertex:UM,clipping_planes_vertex:NM,color_fragment:LM,color_pars_fragment:OM,color_pars_vertex:PM,color_vertex:zM,common:FM,cube_uv_reflection_fragment:BM,defaultnormal_vertex:IM,displacementmap_pars_vertex:HM,displacementmap_vertex:GM,emissivemap_fragment:VM,emissivemap_pars_fragment:kM,colorspace_fragment:jM,colorspace_pars_fragment:XM,envmap_fragment:qM,envmap_common_pars_fragment:WM,envmap_pars_fragment:YM,envmap_pars_vertex:ZM,envmap_physical_pars_fragment:s3,envmap_vertex:KM,fog_vertex:QM,fog_pars_vertex:JM,fog_fragment:$M,fog_pars_fragment:e3,gradientmap_pars_fragment:t3,lightmap_pars_fragment:n3,lights_lambert_fragment:i3,lights_lambert_pars_fragment:a3,lights_pars_begin:r3,lights_toon_fragment:o3,lights_toon_pars_fragment:l3,lights_phong_fragment:c3,lights_phong_pars_fragment:u3,lights_physical_fragment:f3,lights_physical_pars_fragment:d3,lights_fragment_begin:h3,lights_fragment_maps:p3,lights_fragment_end:m3,logdepthbuf_fragment:x3,logdepthbuf_pars_fragment:g3,logdepthbuf_pars_vertex:v3,logdepthbuf_vertex:_3,map_fragment:y3,map_pars_fragment:b3,map_particle_fragment:S3,map_particle_pars_fragment:M3,metalnessmap_fragment:E3,metalnessmap_pars_fragment:T3,morphinstance_vertex:A3,morphcolor_vertex:R3,morphnormal_vertex:C3,morphtarget_pars_vertex:w3,morphtarget_vertex:D3,normal_fragment_begin:U3,normal_fragment_maps:N3,normal_pars_fragment:L3,normal_pars_vertex:O3,normal_vertex:P3,normalmap_pars_fragment:z3,clearcoat_normal_fragment_begin:F3,clearcoat_normal_fragment_maps:B3,clearcoat_pars_fragment:I3,iridescence_pars_fragment:H3,opaque_fragment:G3,packing:V3,premultiplied_alpha_fragment:k3,project_vertex:j3,dithering_fragment:X3,dithering_pars_fragment:q3,roughnessmap_fragment:W3,roughnessmap_pars_fragment:Y3,shadowmap_pars_fragment:Z3,shadowmap_pars_vertex:K3,shadowmap_vertex:Q3,shadowmask_pars_fragment:J3,skinbase_vertex:$3,skinning_pars_vertex:eE,skinning_vertex:tE,skinnormal_vertex:nE,specularmap_fragment:iE,specularmap_pars_fragment:aE,tonemapping_fragment:rE,tonemapping_pars_fragment:sE,transmission_fragment:oE,transmission_pars_fragment:lE,uv_pars_fragment:cE,uv_pars_vertex:uE,uv_vertex:fE,worldpos_vertex:dE,background_vert:hE,background_frag:pE,backgroundCube_vert:mE,backgroundCube_frag:xE,cube_vert:gE,cube_frag:vE,depth_vert:_E,depth_frag:yE,distanceRGBA_vert:bE,distanceRGBA_frag:SE,equirect_vert:ME,equirect_frag:EE,linedashed_vert:TE,linedashed_frag:AE,meshbasic_vert:RE,meshbasic_frag:CE,meshlambert_vert:wE,meshlambert_frag:DE,meshmatcap_vert:UE,meshmatcap_frag:NE,meshnormal_vert:LE,meshnormal_frag:OE,meshphong_vert:PE,meshphong_frag:zE,meshphysical_vert:FE,meshphysical_frag:BE,meshtoon_vert:IE,meshtoon_frag:HE,points_vert:GE,points_frag:VE,shadow_vert:kE,shadow_frag:jE,sprite_vert:XE,sprite_frag:qE},Le={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Fi={basic:{uniforms:Bn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Bn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Bt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Bn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Bn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Bn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Bt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Bn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Bn([Le.points,Le.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Bn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Bn([Le.common,Le.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Bn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Bn([Le.sprite,Le.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Bn([Le.common,Le.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Bn([Le.lights,Le.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Fi.physical={uniforms:Bn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Dc={r:0,b:0,g:0},Ar=new ba,WE=new xn;function YE(s,e,i,r,l,c,d){const h=new Bt(0);let p=c===!0?0:1,m,g,x=null,v=0,b=null;function M(C){let O=C.isScene===!0?C.background:null;return O&&O.isTexture&&(O=(C.backgroundBlurriness>0?i:e).get(O)),O}function T(C){let O=!1;const H=M(C);H===null?y(h,p):H&&H.isColor&&(y(H,1),O=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(C,O){const H=M(O);H&&(H.isCubeTexture||H.mapping===Xc)?(g===void 0&&(g=new _i(new Jo(1,1,1),new Sa({name:"BackgroundCubeMaterial",uniforms:Os(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(N,F,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Ar.copy(O.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(WE.makeRotationFromEuler(Ar)),g.material.toneMapped=Ut.getTransfer(H.colorSpace)!==kt,(x!==H||v!==H.version||b!==s.toneMapping)&&(g.material.needsUpdate=!0,x=H,v=H.version,b=s.toneMapping),g.layers.enableAll(),C.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new _i(new Yc(2,2),new Sa({name:"BackgroundMaterial",uniforms:Os(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=Ut.getTransfer(H.colorSpace)!==kt,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(x!==H||v!==H.version||b!==s.toneMapping)&&(m.material.needsUpdate=!0,x=H,v=H.version,b=s.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function y(C,O){C.getRGB(Dc,Bv(s)),r.buffers.color.setClear(Dc.r,Dc.g,Dc.b,O,d)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,O=1){h.set(C),p=O,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,y(h,p)},render:T,addToRenderList:S,dispose:D}}function ZE(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,d=!1;function h(R,V,q,re,he){let ce=!1;const B=x(re,q,V);c!==B&&(c=B,m(c.object)),ce=b(R,re,q,he),ce&&M(R,re,q,he),he!==null&&e.update(he,s.ELEMENT_ARRAY_BUFFER),(ce||d)&&(d=!1,O(R,V,q,re),he!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function x(R,V,q){const re=q.wireframe===!0;let he=r[R.id];he===void 0&&(he={},r[R.id]=he);let ce=he[V.id];ce===void 0&&(ce={},he[V.id]=ce);let B=ce[re];return B===void 0&&(B=v(p()),ce[re]=B),B}function v(R){const V=[],q=[],re=[];for(let he=0;he<i;he++)V[he]=0,q[he]=0,re[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:q,attributeDivisors:re,object:R,attributes:{},index:null}}function b(R,V,q,re){const he=c.attributes,ce=V.attributes;let B=0;const K=q.getAttributes();for(const W in K)if(K[W].location>=0){const _e=he[W];let z=ce[W];if(z===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),_e===void 0||_e.attribute!==z||z&&_e.data!==z.data)return!0;B++}return c.attributesNum!==B||c.index!==re}function M(R,V,q,re){const he={},ce=V.attributes;let B=0;const K=q.getAttributes();for(const W in K)if(K[W].location>=0){let _e=ce[W];_e===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(_e=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(_e=R.instanceColor));const z={};z.attribute=_e,_e&&_e.data&&(z.data=_e.data),he[W]=z,B++}c.attributes=he,c.attributesNum=B,c.index=re}function T(){const R=c.newAttributes;for(let V=0,q=R.length;V<q;V++)R[V]=0}function S(R){y(R,0)}function y(R,V){const q=c.newAttributes,re=c.enabledAttributes,he=c.attributeDivisors;q[R]=1,re[R]===0&&(s.enableVertexAttribArray(R),re[R]=1),he[R]!==V&&(s.vertexAttribDivisor(R,V),he[R]=V)}function D(){const R=c.newAttributes,V=c.enabledAttributes;for(let q=0,re=V.length;q<re;q++)V[q]!==R[q]&&(s.disableVertexAttribArray(q),V[q]=0)}function C(R,V,q,re,he,ce,B){B===!0?s.vertexAttribIPointer(R,V,q,he,ce):s.vertexAttribPointer(R,V,q,re,he,ce)}function O(R,V,q,re){T();const he=re.attributes,ce=q.getAttributes(),B=V.defaultAttributeValues;for(const K in ce){const W=ce[K];if(W.location>=0){let pe=he[K];if(pe===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(pe=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(pe=R.instanceColor)),pe!==void 0){const _e=pe.normalized,z=pe.itemSize,ne=e.get(pe);if(ne===void 0)continue;const ye=ne.buffer,Te=ne.type,Oe=ne.bytesPerElement,ae=Te===s.INT||Te===s.UNSIGNED_INT||pe.gpuType===Wh;if(pe.isInterleavedBufferAttribute){const fe=pe.data,we=fe.stride,He=pe.offset;if(fe.isInstancedInterleavedBuffer){for(let je=0;je<W.locationSize;je++)y(W.location+je,fe.meshPerAttribute);R.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let je=0;je<W.locationSize;je++)S(W.location+je);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let je=0;je<W.locationSize;je++)C(W.location+je,z/W.locationSize,Te,_e,we*Oe,(He+z/W.locationSize*je)*Oe,ae)}else{if(pe.isInstancedBufferAttribute){for(let fe=0;fe<W.locationSize;fe++)y(W.location+fe,pe.meshPerAttribute);R.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let fe=0;fe<W.locationSize;fe++)S(W.location+fe);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let fe=0;fe<W.locationSize;fe++)C(W.location+fe,z/W.locationSize,Te,_e,z*Oe,z/W.locationSize*fe*Oe,ae)}}else if(B!==void 0){const _e=B[K];if(_e!==void 0)switch(_e.length){case 2:s.vertexAttrib2fv(W.location,_e);break;case 3:s.vertexAttrib3fv(W.location,_e);break;case 4:s.vertexAttrib4fv(W.location,_e);break;default:s.vertexAttrib1fv(W.location,_e)}}}}D()}function H(){X();for(const R in r){const V=r[R];for(const q in V){const re=V[q];for(const he in re)g(re[he].object),delete re[he];delete V[q]}delete r[R]}}function N(R){if(r[R.id]===void 0)return;const V=r[R.id];for(const q in V){const re=V[q];for(const he in re)g(re[he].object),delete re[he];delete V[q]}delete r[R.id]}function F(R){for(const V in r){const q=r[V];if(q[R.id]===void 0)continue;const re=q[R.id];for(const he in re)g(re[he].object),delete re[he];delete q[R.id]}}function X(){U(),d=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:U,dispose:H,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:S,disableUnusedAttributes:D}}function KE(s,e,i){let r;function l(m){r=m}function c(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function d(m,g,x){x!==0&&(s.drawArraysInstanced(r,m,g,x),i.update(g,r,x))}function h(m,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,x);let b=0;for(let M=0;M<x;M++)b+=g[M];i.update(b,r,1)}function p(m,g,x,v){if(x===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let M=0;M<m.length;M++)d(m[M],g[M],v[M]);else{b.multiDrawArraysInstancedWEBGL(r,m,0,g,0,v,0,x);let M=0;for(let T=0;T<x;T++)M+=g[T]*v[T];i.update(M,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function QE(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==Di&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const X=F===Ps&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ya&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==xa&&!X)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(lt("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const x=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=M>0,N=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:x,reversedDepthBuffer:v,maxTextures:b,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:D,maxVaryings:C,maxFragmentUniforms:O,vertexTextures:H,maxSamples:N}}function JE(s){const e=this;let i=null,r=0,l=!1,c=!1;const d=new Cr,h=new dt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const b=x.length!==0||v||r!==0||l;return l=v,r=x.length,b},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,v){i=g(x,v,0)},this.setState=function(x,v,b){const M=x.clippingPlanes,T=x.clipIntersection,S=x.clipShadows,y=s.get(x);if(!l||M===null||M.length===0||c&&!S)c?g(null):m();else{const D=c?0:r,C=D*4;let O=y.clippingState||null;p.value=O,O=g(M,v,C,b);for(let H=0;H!==C;++H)O[H]=i[H];y.clippingState=O,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,v,b,M){const T=x!==null?x.length:0;let S=null;if(T!==0){if(S=p.value,M!==!0||S===null){const y=b+T*4,D=v.matrixWorldInverse;h.getNormalMatrix(D),(S===null||S.length<y)&&(S=new Float32Array(y));for(let C=0,O=b;C!==T;++C,O+=4)d.copy(x[C]).applyMatrix4(D,h),d.normal.toArray(S,O),S[O+3]=d.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function $E(s){let e=new WeakMap;function i(d,h){return h===eh?d.mapping=Us:h===th&&(d.mapping=Ns),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===eh||h===th)if(e.has(d)){const p=e.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new Z1(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const tr=4,Dg=[.125,.215,.35,.446,.526,.582],Dr=20,e2=256,Bo=new cM,Ug=new Bt;let Fd=null,Bd=0,Id=0,Hd=!1;const t2=new oe;class Ng{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=t2}=c;Fd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fd,Bd,Id),this._renderer.xr.enabled=Hd,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Us||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:Ps,format:Di,colorSpace:Ls,depthBuffer:!1},l=Lg(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lg(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=n2(c)),this._blurMaterial=a2(c,e,i),this._ggxMaterial=i2(c,e,i)}return l}_compileMaterial(e){const i=new _i(new yi,e);this._renderer.compile(i,Bo)}_sceneToCubeUV(e,i,r,l,c){const p=new gi(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,b=x.toneMapping;x.getClearColor(Ug),x.toneMapping=nr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _i(new Jo,new Go({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let y=!1;const D=e.background;D?D.isColor&&(S.color.copy(D),e.background=null,y=!0):(S.color.copy(Ug),y=!0);for(let C=0;C<6;C++){const O=C%3;O===0?(p.up.set(0,m[C],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[C],c.y,c.z)):O===1?(p.up.set(0,0,m[C]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[C],c.z)):(p.up.set(0,m[C],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[C]));const H=this._cubeSize;As(l,O*H,C>2?H:0,H,H),x.setRenderTarget(l),y&&x.render(T,p),x.render(e,p)}x.toneMapping=b,x.autoClear=v,e.background=D}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Us||e.mapping===Ns;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Og());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;As(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,Bo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(m*m-g*g),v=.05+m*.95,b=x*v,{_lodMax:M}=this,T=this._sizeLods[r],S=3*T*(r>M-tr?r-M+tr:0),y=4*(this._cubeSize-T);p.envMap.value=e.texture,p.roughness.value=b,p.mipInt.value=M-i,As(c,S,y,3*T,2*T),l.setRenderTarget(c),l.render(h,Bo),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=M-r,As(e,S,y,3*T,2*T),l.setRenderTarget(e),l.render(h,Bo)}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&on("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[l];x.material=m;const v=m.uniforms,b=this._sizeLods[r]-1,M=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Dr-1),T=c/M,S=isFinite(c)?1+Math.floor(g*T):Dr;S>Dr&&lt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Dr}`);const y=[];let D=0;for(let F=0;F<Dr;++F){const X=F/T,U=Math.exp(-X*X/2);y.push(U),F===0?D+=U:F<S&&(D+=2*U)}for(let F=0;F<y.length;F++)y[F]=y[F]/D;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=d==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:C}=this;v.dTheta.value=M,v.mipInt.value=C-r;const O=this._sizeLods[l],H=3*O*(l>C-tr?l-C+tr:0),N=4*(this._cubeSize-O);As(i,H,N,3*O,2*O),p.setRenderTarget(i),p.render(x,Bo)}}function n2(s){const e=[],i=[],r=[];let l=s;const c=s-tr+1+Dg.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let p=1/h;d>s-tr?p=Dg[d-s+tr-1]:d===0&&(p=0),i.push(p);const m=1/(h-2),g=-m,x=1+m,v=[g,g,x,g,x,x,g,g,x,x,g,x],b=6,M=6,T=3,S=2,y=1,D=new Float32Array(T*M*b),C=new Float32Array(S*M*b),O=new Float32Array(y*M*b);for(let N=0;N<b;N++){const F=N%3*2/3-1,X=N>2?0:-1,U=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];D.set(U,T*M*N),C.set(v,S*M*N);const R=[N,N,N,N,N,N];O.set(R,y*M*N)}const H=new yi;H.setAttribute("position",new Ui(D,T)),H.setAttribute("uv",new Ui(C,S)),H.setAttribute("faceIndex",new Ui(O,y)),r.push(new _i(H,null)),l>tr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Lg(s,e,i){const r=new Lr(s,e,i);return r.texture.mapping=Xc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function As(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function i2(s,e,i){return new Sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:e2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function a2(s,e,i){const r=new Float32Array(Dr),l=new oe(0,1,0);return new Sa({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Og(){return new Sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Pg(){return new Sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function r2(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===eh||p===th,g=p===Us||p===Ns;if(m||g){let x=e.get(h);const v=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new Ng(s)),x=m?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{const b=h.image;return m&&b&&b.height>0||g&&b&&l(b)?(i===null&&(i=new Ng(s)),x=m?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function s2(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Wo("WebGLRenderer: "+r+" extension not supported."),l}}}function o2(s,e,i,r){const l={},c=new WeakMap;function d(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",d),delete l[v.id];const b=c.get(v);b&&(e.remove(b),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(x,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function p(x){const v=x.attributes;for(const b in v)e.update(v[b],s.ARRAY_BUFFER)}function m(x){const v=[],b=x.index,M=x.attributes.position;let T=0;if(b!==null){const D=b.array;T=b.version;for(let C=0,O=D.length;C<O;C+=3){const H=D[C+0],N=D[C+1],F=D[C+2];v.push(H,N,N,F,F,H)}}else if(M!==void 0){const D=M.array;T=M.version;for(let C=0,O=D.length/3-1;C<O;C+=3){const H=C+0,N=C+1,F=C+2;v.push(H,N,N,F,F,H)}}else return;const S=new(Uv(v)?Fv:zv)(v,1);S.version=T;const y=c.get(x);y&&e.remove(y),c.set(x,S)}function g(x){const v=c.get(x);if(v){const b=x.index;b!==null&&v.version<b.version&&m(x)}else m(x);return c.get(x)}return{get:h,update:p,getWireframeAttribute:g}}function l2(s,e,i){let r;function l(v){r=v}let c,d;function h(v){c=v.type,d=v.bytesPerElement}function p(v,b){s.drawElements(r,b,c,v*d),i.update(b,r,1)}function m(v,b,M){M!==0&&(s.drawElementsInstanced(r,b,c,v*d,M),i.update(b,r,M))}function g(v,b,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,c,v,0,M);let S=0;for(let y=0;y<M;y++)S+=b[y];i.update(S,r,1)}function x(v,b,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)m(v[y]/d,b[y],T[y]);else{S.multiDrawElementsInstancedWEBGL(r,b,0,c,v,0,T,0,M);let y=0;for(let D=0;D<M;D++)y+=b[D]*T[D];i.update(y,r,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function c2(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:on("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function u2(s,e,i){const r=new WeakMap,l=new ln;function c(d,h,p){const m=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==x){let R=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var b=R;v!==void 0&&v.texture.dispose();const M=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let O=0;M===!0&&(O=1),T===!0&&(O=2),S===!0&&(O=3);let H=h.attributes.position.count*O,N=1;H>e.maxTextureSize&&(N=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const F=new Float32Array(H*N*4*x),X=new Nv(F,H,N,x);X.type=xa,X.needsUpdate=!0;const U=O*4;for(let V=0;V<x;V++){const q=y[V],re=D[V],he=C[V],ce=H*N*4*V;for(let B=0;B<q.count;B++){const K=B*U;M===!0&&(l.fromBufferAttribute(q,B),F[ce+K+0]=l.x,F[ce+K+1]=l.y,F[ce+K+2]=l.z,F[ce+K+3]=0),T===!0&&(l.fromBufferAttribute(re,B),F[ce+K+4]=l.x,F[ce+K+5]=l.y,F[ce+K+6]=l.z,F[ce+K+7]=0),S===!0&&(l.fromBufferAttribute(he,B),F[ce+K+8]=l.x,F[ce+K+9]=l.y,F[ce+K+10]=l.z,F[ce+K+11]=he.itemSize===4?l.w:1)}}v={count:x,texture:X,size:new Lt(H,N)},r.set(h,v),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let M=0;for(let S=0;S<m.length;S++)M+=m[S];const T=h.morphTargetsRelative?1:1-M;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function f2(s,e,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,g=p.geometry,x=e.get(p,g);if(l.get(x)!==m&&(e.update(x),l.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;l.get(v)!==m&&(v.update(),l.set(v,m))}return x}function d(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:d}}const qv=new zn,zg=new kv(1,1),Wv=new Nv,Yv=new N1,Zv=new Hv,Fg=[],Bg=[],Ig=new Float32Array(16),Hg=new Float32Array(9),Gg=new Float32Array(4);function Fs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=Fg[l];if(c===void 0&&(c=new Float32Array(l),Fg[l]=c),e!==0){r.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,s[d].toArray(c,h)}return c}function yn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function bn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Kc(s,e){let i=Bg[e];i===void 0&&(i=new Int32Array(e),Bg[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function d2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function h2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;s.uniform2fv(this.addr,e),bn(i,e)}}function p2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(yn(i,e))return;s.uniform3fv(this.addr,e),bn(i,e)}}function m2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;s.uniform4fv(this.addr,e),bn(i,e)}}function x2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(yn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),bn(i,e)}else{if(yn(i,r))return;Gg.set(r),s.uniformMatrix2fv(this.addr,!1,Gg),bn(i,r)}}function g2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(yn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),bn(i,e)}else{if(yn(i,r))return;Hg.set(r),s.uniformMatrix3fv(this.addr,!1,Hg),bn(i,r)}}function v2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(yn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),bn(i,e)}else{if(yn(i,r))return;Ig.set(r),s.uniformMatrix4fv(this.addr,!1,Ig),bn(i,r)}}function _2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function y2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;s.uniform2iv(this.addr,e),bn(i,e)}}function b2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;s.uniform3iv(this.addr,e),bn(i,e)}}function S2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;s.uniform4iv(this.addr,e),bn(i,e)}}function M2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function E2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;s.uniform2uiv(this.addr,e),bn(i,e)}}function T2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;s.uniform3uiv(this.addr,e),bn(i,e)}}function A2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;s.uniform4uiv(this.addr,e),bn(i,e)}}function R2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(zg.compareFunction=Dv,c=zg):c=qv,i.setTexture2D(e||c,l)}function C2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Yv,l)}function w2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Zv,l)}function D2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Wv,l)}function U2(s){switch(s){case 5126:return d2;case 35664:return h2;case 35665:return p2;case 35666:return m2;case 35674:return x2;case 35675:return g2;case 35676:return v2;case 5124:case 35670:return _2;case 35667:case 35671:return y2;case 35668:case 35672:return b2;case 35669:case 35673:return S2;case 5125:return M2;case 36294:return E2;case 36295:return T2;case 36296:return A2;case 35678:case 36198:case 36298:case 36306:case 35682:return R2;case 35679:case 36299:case 36307:return C2;case 35680:case 36300:case 36308:case 36293:return w2;case 36289:case 36303:case 36311:case 36292:return D2}}function N2(s,e){s.uniform1fv(this.addr,e)}function L2(s,e){const i=Fs(e,this.size,2);s.uniform2fv(this.addr,i)}function O2(s,e){const i=Fs(e,this.size,3);s.uniform3fv(this.addr,i)}function P2(s,e){const i=Fs(e,this.size,4);s.uniform4fv(this.addr,i)}function z2(s,e){const i=Fs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function F2(s,e){const i=Fs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function B2(s,e){const i=Fs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function I2(s,e){s.uniform1iv(this.addr,e)}function H2(s,e){s.uniform2iv(this.addr,e)}function G2(s,e){s.uniform3iv(this.addr,e)}function V2(s,e){s.uniform4iv(this.addr,e)}function k2(s,e){s.uniform1uiv(this.addr,e)}function j2(s,e){s.uniform2uiv(this.addr,e)}function X2(s,e){s.uniform3uiv(this.addr,e)}function q2(s,e){s.uniform4uiv(this.addr,e)}function W2(s,e,i){const r=this.cache,l=e.length,c=Kc(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),bn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||qv,c[d])}function Y2(s,e,i){const r=this.cache,l=e.length,c=Kc(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),bn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Yv,c[d])}function Z2(s,e,i){const r=this.cache,l=e.length,c=Kc(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),bn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Zv,c[d])}function K2(s,e,i){const r=this.cache,l=e.length,c=Kc(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),bn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Wv,c[d])}function Q2(s){switch(s){case 5126:return N2;case 35664:return L2;case 35665:return O2;case 35666:return P2;case 35674:return z2;case 35675:return F2;case 35676:return B2;case 5124:case 35670:return I2;case 35667:case 35671:return H2;case 35668:case 35672:return G2;case 35669:case 35673:return V2;case 5125:return k2;case 36294:return j2;case 36295:return X2;case 36296:return q2;case 35678:case 36198:case 36298:case 36306:case 35682:return W2;case 35679:case 36299:case 36307:return Y2;case 35680:case 36300:case 36308:case 36293:return Z2;case 36289:case 36303:case 36311:case 36292:return K2}}class J2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=U2(i.type)}}class $2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Q2(i.type)}}class eT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const Gd=/(\w+)(\])?(\[|\.)?/g;function Vg(s,e){s.seq.push(e),s.map[e.id]=e}function tT(s,e,i){const r=s.name,l=r.length;for(Gd.lastIndex=0;;){const c=Gd.exec(r),d=Gd.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){Vg(i,m===void 0?new J2(h,s,e):new $2(h,s,e));break}else{let x=i.map[h];x===void 0&&(x=new eT(h),Vg(i,x)),i=x}}}class Fc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),d=e.getUniformLocation(i,c.name);tT(c,d,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function kg(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const nT=37297;let iT=0;function aT(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const jg=new dt;function rT(s){Ut._getMatrix(jg,Ut.workingColorSpace,s);const e=`mat3( ${jg.elements.map(i=>i.toFixed(4))} )`;switch(Ut.getTransfer(s)){case Hc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Xg(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+aT(s.getShaderSource(e),h)}else return c}function sT(s,e){const i=rT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function oT(s,e){let i;switch(e){case r1:i="Linear";break;case s1:i="Reinhard";break;case o1:i="Cineon";break;case l1:i="ACESFilmic";break;case u1:i="AgX";break;case f1:i="Neutral";break;case c1:i="Custom";break;default:lt("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new oe;function lT(){Ut.getLuminanceCoefficients(Uc);const s=Uc.x.toFixed(4),e=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function uT(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function fT(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),d=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:h}}return i}function Io(s){return s!==""}function qg(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(s){return s.replace(dT,pT)}const hT=new Map;function pT(s,e){let i=mt[e];if(i===void 0){const r=hT.get(e);if(r!==void 0)i=mt[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Oh(i)}const mT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yg(s){return s.replace(mT,xT)}function xT(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Zg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===yv?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===BS?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ha&&(e="SHADOWMAP_TYPE_VSM"),e}function vT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Us:case Ns:e="ENVMAP_TYPE_CUBE";break;case Xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _T(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function yT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case bv:e="ENVMAP_BLENDING_MULTIPLY";break;case i1:e="ENVMAP_BLENDING_MIX";break;case a1:e="ENVMAP_BLENDING_ADD";break}return e}function bT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function ST(s,e,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=gT(i),m=vT(i),g=_T(i),x=yT(i),v=bT(i),b=cT(i),M=uT(c),T=l.createProgram();let S,y,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Io).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Io).join(`
`),y.length>0&&(y+=`
`)):(S=[Zg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),y=[Zg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==nr?"#define TONE_MAPPING":"",i.toneMapping!==nr?mt.tonemapping_pars_fragment:"",i.toneMapping!==nr?oT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,sT("linearToOutputTexel",i.outputColorSpace),lT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Io).join(`
`)),d=Oh(d),d=qg(d,i),d=Wg(d,i),h=Oh(h),h=qg(h,i),h=Wg(h,i),d=Yg(d),h=Yg(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",i.glslVersion===lg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===lg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const C=D+S+d,O=D+y+h,H=kg(l,l.VERTEX_SHADER,C),N=kg(l,l.FRAGMENT_SHADER,O);l.attachShader(T,H),l.attachShader(T,N),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function F(V){if(s.debug.checkShaderErrors){const q=l.getProgramInfoLog(T)||"",re=l.getShaderInfoLog(H)||"",he=l.getShaderInfoLog(N)||"",ce=q.trim(),B=re.trim(),K=he.trim();let W=!0,pe=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,H,N);else{const _e=Xg(l,H,"vertex"),z=Xg(l,N,"fragment");on("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ce+`
`+_e+`
`+z)}else ce!==""?lt("WebGLProgram: Program Info Log:",ce):(B===""||K==="")&&(pe=!1);pe&&(V.diagnostics={runnable:W,programLog:ce,vertexShader:{log:B,prefix:S},fragmentShader:{log:K,prefix:y}})}l.deleteShader(H),l.deleteShader(N),X=new Fc(l,T),U=fT(l,T)}let X;this.getUniforms=function(){return X===void 0&&F(this),X};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(T,nT)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=iT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=H,this.fragmentShader=N,this}let MT=0;class ET{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new TT(e),i.set(e,r)),r}}class TT{constructor(e){this.id=MT++,this.code=e,this.usedTimes=0}}function AT(s,e,i,r,l,c,d){const h=new Ov,p=new ET,m=new Set,g=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let b=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(U){return m.add(U),U===0?"uv":`uv${U}`}function S(U,R,V,q,re){const he=q.fog,ce=re.geometry,B=U.isMeshStandardMaterial?q.environment:null,K=(U.isMeshStandardMaterial?i:e).get(U.envMap||B),W=K&&K.mapping===Xc?K.image.height:null,pe=M[U.type];U.precision!==null&&(b=l.getMaxPrecision(U.precision),b!==U.precision&&lt("WebGLProgram.getParameters:",U.precision,"not supported, using",b,"instead."));const _e=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,z=_e!==void 0?_e.length:0;let ne=0;ce.morphAttributes.position!==void 0&&(ne=1),ce.morphAttributes.normal!==void 0&&(ne=2),ce.morphAttributes.color!==void 0&&(ne=3);let ye,Te,Oe,ae;if(pe){const Rt=Fi[pe];ye=Rt.vertexShader,Te=Rt.fragmentShader}else ye=U.vertexShader,Te=U.fragmentShader,p.update(U),Oe=p.getVertexShaderID(U),ae=p.getFragmentShaderID(U);const fe=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),He=re.isInstancedMesh===!0,je=re.isBatchedMesh===!0,ct=!!U.map,an=!!U.matcap,ht=!!K,At=!!U.aoMap,G=!!U.lightMap,pt=!!U.bumpMap,xt=!!U.normalMap,Pt=!!U.displacementMap,Ge=!!U.emissiveMap,jt=!!U.metalnessMap,Ye=!!U.roughnessMap,rt=U.anisotropy>0,P=U.clearcoat>0,E=U.dispersion>0,$=U.iridescence>0,xe=U.sheen>0,be=U.transmission>0,ue=rt&&!!U.anisotropyMap,qe=P&&!!U.clearcoatMap,Ne=P&&!!U.clearcoatNormalMap,Je=P&&!!U.clearcoatRoughnessMap,Xe=$&&!!U.iridescenceMap,Se=$&&!!U.iridescenceThicknessMap,Ee=xe&&!!U.sheenColorMap,We=xe&&!!U.sheenRoughnessMap,Ve=!!U.specularMap,Pe=!!U.specularColorMap,it=!!U.specularIntensityMap,k=be&&!!U.transmissionMap,De=be&&!!U.thicknessMap,Re=!!U.gradientMap,Ce=!!U.alphaMap,Me=U.alphaTest>0,ve=!!U.alphaHash,Fe=!!U.extensions;let at=nr;U.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(at=s.toneMapping);const It={shaderID:pe,shaderType:U.type,shaderName:U.name,vertexShader:ye,fragmentShader:Te,defines:U.defines,customVertexShaderID:Oe,customFragmentShaderID:ae,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:b,batching:je,batchingColor:je&&re._colorsTexture!==null,instancing:He,instancingColor:He&&re.instanceColor!==null,instancingMorph:He&&re.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ls,alphaToCoverage:!!U.alphaToCoverage,map:ct,matcap:an,envMap:ht,envMapMode:ht&&K.mapping,envMapCubeUVHeight:W,aoMap:At,lightMap:G,bumpMap:pt,normalMap:xt,displacementMap:v&&Pt,emissiveMap:Ge,normalMapObjectSpace:xt&&U.normalMapType===x1,normalMapTangentSpace:xt&&U.normalMapType===m1,metalnessMap:jt,roughnessMap:Ye,anisotropy:rt,anisotropyMap:ue,clearcoat:P,clearcoatMap:qe,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Je,dispersion:E,iridescence:$,iridescenceMap:Xe,iridescenceThicknessMap:Se,sheen:xe,sheenColorMap:Ee,sheenRoughnessMap:We,specularMap:Ve,specularColorMap:Pe,specularIntensityMap:it,transmission:be,transmissionMap:k,thicknessMap:De,gradientMap:Re,opaque:U.transparent===!1&&U.blending===Cs&&U.alphaToCoverage===!1,alphaMap:Ce,alphaTest:Me,alphaHash:ve,combine:U.combine,mapUv:ct&&T(U.map.channel),aoMapUv:At&&T(U.aoMap.channel),lightMapUv:G&&T(U.lightMap.channel),bumpMapUv:pt&&T(U.bumpMap.channel),normalMapUv:xt&&T(U.normalMap.channel),displacementMapUv:Pt&&T(U.displacementMap.channel),emissiveMapUv:Ge&&T(U.emissiveMap.channel),metalnessMapUv:jt&&T(U.metalnessMap.channel),roughnessMapUv:Ye&&T(U.roughnessMap.channel),anisotropyMapUv:ue&&T(U.anisotropyMap.channel),clearcoatMapUv:qe&&T(U.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&T(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&T(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&T(U.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&T(U.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&T(U.sheenColorMap.channel),sheenRoughnessMapUv:We&&T(U.sheenRoughnessMap.channel),specularMapUv:Ve&&T(U.specularMap.channel),specularColorMapUv:Pe&&T(U.specularColorMap.channel),specularIntensityMapUv:it&&T(U.specularIntensityMap.channel),transmissionMapUv:k&&T(U.transmissionMap.channel),thicknessMapUv:De&&T(U.thicknessMap.channel),alphaMapUv:Ce&&T(U.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(xt||rt),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!ce.attributes.uv&&(ct||Ce),fog:!!he,useFog:U.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:we,skinning:re.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:U.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:ct&&U.map.isVideoTexture===!0&&Ut.getTransfer(U.map.colorSpace)===kt,decodeVideoTextureEmissive:Ge&&U.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(U.emissiveMap.colorSpace)===kt,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===pa,flipSided:U.side===qn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Fe&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&U.extensions.multiDraw===!0||je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return It.vertexUv1s=m.has(1),It.vertexUv2s=m.has(2),It.vertexUv3s=m.has(3),m.clear(),It}function y(U){const R=[];if(U.shaderID?R.push(U.shaderID):(R.push(U.customVertexShaderID),R.push(U.customFragmentShaderID)),U.defines!==void 0)for(const V in U.defines)R.push(V),R.push(U.defines[V]);return U.isRawShaderMaterial===!1&&(D(R,U),C(R,U),R.push(s.outputColorSpace)),R.push(U.customProgramCacheKey),R.join()}function D(U,R){U.push(R.precision),U.push(R.outputColorSpace),U.push(R.envMapMode),U.push(R.envMapCubeUVHeight),U.push(R.mapUv),U.push(R.alphaMapUv),U.push(R.lightMapUv),U.push(R.aoMapUv),U.push(R.bumpMapUv),U.push(R.normalMapUv),U.push(R.displacementMapUv),U.push(R.emissiveMapUv),U.push(R.metalnessMapUv),U.push(R.roughnessMapUv),U.push(R.anisotropyMapUv),U.push(R.clearcoatMapUv),U.push(R.clearcoatNormalMapUv),U.push(R.clearcoatRoughnessMapUv),U.push(R.iridescenceMapUv),U.push(R.iridescenceThicknessMapUv),U.push(R.sheenColorMapUv),U.push(R.sheenRoughnessMapUv),U.push(R.specularMapUv),U.push(R.specularColorMapUv),U.push(R.specularIntensityMapUv),U.push(R.transmissionMapUv),U.push(R.thicknessMapUv),U.push(R.combine),U.push(R.fogExp2),U.push(R.sizeAttenuation),U.push(R.morphTargetsCount),U.push(R.morphAttributeCount),U.push(R.numDirLights),U.push(R.numPointLights),U.push(R.numSpotLights),U.push(R.numSpotLightMaps),U.push(R.numHemiLights),U.push(R.numRectAreaLights),U.push(R.numDirLightShadows),U.push(R.numPointLightShadows),U.push(R.numSpotLightShadows),U.push(R.numSpotLightShadowsWithMaps),U.push(R.numLightProbes),U.push(R.shadowMapType),U.push(R.toneMapping),U.push(R.numClippingPlanes),U.push(R.numClipIntersection),U.push(R.depthPacking)}function C(U,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),U.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),U.push(h.mask)}function O(U){const R=M[U.type];let V;if(R){const q=Fi[R];V=X1.clone(q.uniforms)}else V=U.uniforms;return V}function H(U,R){let V;for(let q=0,re=g.length;q<re;q++){const he=g[q];if(he.cacheKey===R){V=he,++V.usedTimes;break}}return V===void 0&&(V=new ST(s,R,U,c),g.push(V)),V}function N(U){if(--U.usedTimes===0){const R=g.indexOf(U);g[R]=g[g.length-1],g.pop(),U.destroy()}}function F(U){p.remove(U)}function X(){p.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:O,acquireProgram:H,releaseProgram:N,releaseShaderCache:F,programs:g,dispose:X}}function RT(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,p){s.get(d)[h]=p}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function CT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Kg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qg(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(x,v,b,M,T,S){let y=s[e];return y===void 0?(y={id:x.id,object:x,geometry:v,material:b,groupOrder:M,renderOrder:x.renderOrder,z:T,group:S},s[e]=y):(y.id=x.id,y.object=x,y.geometry=v,y.material=b,y.groupOrder=M,y.renderOrder=x.renderOrder,y.z=T,y.group=S),e++,y}function h(x,v,b,M,T,S){const y=d(x,v,b,M,T,S);b.transmission>0?r.push(y):b.transparent===!0?l.push(y):i.push(y)}function p(x,v,b,M,T,S){const y=d(x,v,b,M,T,S);b.transmission>0?r.unshift(y):b.transparent===!0?l.unshift(y):i.unshift(y)}function m(x,v){i.length>1&&i.sort(x||CT),r.length>1&&r.sort(v||Kg),l.length>1&&l.sort(v||Kg)}function g(){for(let x=e,v=s.length;x<v;x++){const b=s[x];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:p,finish:g,sort:m}}function wT(){let s=new WeakMap;function e(r,l){const c=s.get(r);let d;return c===void 0?(d=new Qg,s.set(r,[d])):l>=c.length?(d=new Qg,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function DT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new oe,color:new Bt};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":i={color:new Bt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return s[e.id]=i,i}}}function UT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let NT=0;function LT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function OT(s){const e=new DT,i=UT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new oe);const l=new oe,c=new xn,d=new xn;function h(m){let g=0,x=0,v=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let b=0,M=0,T=0,S=0,y=0,D=0,C=0,O=0,H=0,N=0,F=0;m.sort(LT);for(let U=0,R=m.length;U<R;U++){const V=m[U],q=V.color,re=V.intensity,he=V.distance,ce=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=q.r*re,x+=q.g*re,v+=q.b*re;else if(V.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(V.sh.coefficients[B],re);F++}else if(V.isDirectionalLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,W=i.get(V);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,r.directionalShadow[b]=W,r.directionalShadowMap[b]=ce,r.directionalShadowMatrix[b]=V.shadow.matrix,D++}r.directional[b]=B,b++}else if(V.isSpotLight){const B=e.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(q).multiplyScalar(re),B.distance=he,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,r.spot[T]=B;const K=V.shadow;if(V.map&&(r.spotLightMap[H]=V.map,H++,K.updateMatrices(V),V.castShadow&&N++),r.spotLightMatrix[T]=K.matrix,V.castShadow){const W=i.get(V);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,r.spotShadow[T]=W,r.spotShadowMap[T]=ce,O++}T++}else if(V.isRectAreaLight){const B=e.get(V);B.color.copy(q).multiplyScalar(re),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=B,S++}else if(V.isPointLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const K=V.shadow,W=i.get(V);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,r.pointShadow[M]=W,r.pointShadowMap[M]=ce,r.pointShadowMatrix[M]=V.shadow.matrix,C++}r.point[M]=B,M++}else if(V.isHemisphereLight){const B=e.get(V);B.skyColor.copy(V.color).multiplyScalar(re),B.groundColor.copy(V.groundColor).multiplyScalar(re),r.hemi[y]=B,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=v;const X=r.hash;(X.directionalLength!==b||X.pointLength!==M||X.spotLength!==T||X.rectAreaLength!==S||X.hemiLength!==y||X.numDirectionalShadows!==D||X.numPointShadows!==C||X.numSpotShadows!==O||X.numSpotMaps!==H||X.numLightProbes!==F)&&(r.directional.length=b,r.spot.length=T,r.rectArea.length=S,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=O+H-N,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=F,X.directionalLength=b,X.pointLength=M,X.spotLength=T,X.rectAreaLength=S,X.hemiLength=y,X.numDirectionalShadows=D,X.numPointShadows=C,X.numSpotShadows=O,X.numSpotMaps=H,X.numLightProbes=F,r.version=NT++)}function p(m,g){let x=0,v=0,b=0,M=0,T=0;const S=g.matrixWorldInverse;for(let y=0,D=m.length;y<D;y++){const C=m[y];if(C.isDirectionalLight){const O=r.directional[x];O.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(S),x++}else if(C.isSpotLight){const O=r.spot[b];O.position.setFromMatrixPosition(C.matrixWorld),O.position.applyMatrix4(S),O.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(S),b++}else if(C.isRectAreaLight){const O=r.rectArea[M];O.position.setFromMatrixPosition(C.matrixWorld),O.position.applyMatrix4(S),d.identity(),c.copy(C.matrixWorld),c.premultiply(S),d.extractRotation(c),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),O.halfWidth.applyMatrix4(d),O.halfHeight.applyMatrix4(d),M++}else if(C.isPointLight){const O=r.point[v];O.position.setFromMatrixPosition(C.matrixWorld),O.position.applyMatrix4(S),v++}else if(C.isHemisphereLight){const O=r.hemi[T];O.direction.setFromMatrixPosition(C.matrixWorld),O.direction.transformDirection(S),T++}}}return{setup:h,setupView:p,state:r}}function Jg(s){const e=new OT(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function d(g){r.push(g)}function h(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:d}}function PT(s){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new Jg(s),e.set(l,[h])):c>=d.length?(h=new Jg(s),d.push(h)):h=d[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const zT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BT(s,e,i){let r=new Gv;const l=new Lt,c=new Lt,d=new ln,h=new iM({depthPacking:p1}),p=new aM,m={},g=i.maxTextureSize,x={[ir]:qn,[qn]:ir,[pa]:pa},v=new Sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:zT,fragmentShader:FT}),b=v.clone();b.defines.HORIZONTAL_PASS=1;const M=new yi;M.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new _i(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yv;let y=this.type;this.render=function(N,F,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const U=s.getRenderTarget(),R=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),q=s.state;q.setBlending(va),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const re=y!==ha&&this.type===ha,he=y===ha&&this.type!==ha;for(let ce=0,B=N.length;ce<B;ce++){const K=N[ce],W=K.shadow;if(W===void 0){lt("WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const pe=W.getFrameExtents();if(l.multiply(pe),c.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/pe.x),l.x=c.x*pe.x,W.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/pe.y),l.y=c.y*pe.y,W.mapSize.y=c.y)),W.map===null||re===!0||he===!0){const z=this.type!==ha?{minFilter:ri,magFilter:ri}:{};W.map!==null&&W.map.dispose(),W.map=new Lr(l.x,l.y,z),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const _e=W.getViewportCount();for(let z=0;z<_e;z++){const ne=W.getViewport(z);d.set(c.x*ne.x,c.y*ne.y,c.x*ne.z,c.y*ne.w),q.viewport(d),W.updateMatrices(K,z),r=W.getFrustum(),O(F,X,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===ha&&D(W,X),W.needsUpdate=!1}y=this.type,S.needsUpdate=!1,s.setRenderTarget(U,R,V)};function D(N,F){const X=e.update(T);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,b.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,b.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Lr(l.x,l.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(F,null,X,v,T,null),b.uniforms.shadow_pass.value=N.mapPass.texture,b.uniforms.resolution.value=N.mapSize,b.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(F,null,X,b,T,null)}function C(N,F,X,U){let R=null;const V=X.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)R=V;else if(R=X.isPointLight===!0?p:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const q=R.uuid,re=F.uuid;let he=m[q];he===void 0&&(he={},m[q]=he);let ce=he[re];ce===void 0&&(ce=R.clone(),he[re]=ce,F.addEventListener("dispose",H)),R=ce}if(R.visible=F.visible,R.wireframe=F.wireframe,U===ha?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:x[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const q=s.properties.get(R);q.light=X}return R}function O(N,F,X,U,R){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===ha)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,N.matrixWorld);const re=e.update(N),he=N.material;if(Array.isArray(he)){const ce=re.groups;for(let B=0,K=ce.length;B<K;B++){const W=ce[B],pe=he[W.materialIndex];if(pe&&pe.visible){const _e=C(N,pe,U,R);N.onBeforeShadow(s,N,F,X,re,_e,W),s.renderBufferDirect(X,null,re,_e,N,W),N.onAfterShadow(s,N,F,X,re,_e,W)}}}else if(he.visible){const ce=C(N,he,U,R);N.onBeforeShadow(s,N,F,X,re,ce,null),s.renderBufferDirect(X,null,re,ce,N,null),N.onAfterShadow(s,N,F,X,re,ce,null)}}const q=N.children;for(let re=0,he=q.length;re<he;re++)O(q[re],F,X,U,R)}function H(N){N.target.removeEventListener("dispose",H);for(const X in m){const U=m[X],R=N.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}const IT={[Wd]:Yd,[Zd]:Jd,[Kd]:$d,[Ds]:Qd,[Yd]:Wd,[Jd]:Zd,[$d]:Kd,[Qd]:Ds};function HT(s,e){function i(){let k=!1;const De=new ln;let Re=null;const Ce=new ln(0,0,0,0);return{setMask:function(Me){Re!==Me&&!k&&(s.colorMask(Me,Me,Me,Me),Re=Me)},setLocked:function(Me){k=Me},setClear:function(Me,ve,Fe,at,It){It===!0&&(Me*=at,ve*=at,Fe*=at),De.set(Me,ve,Fe,at),Ce.equals(De)===!1&&(s.clearColor(Me,ve,Fe,at),Ce.copy(De))},reset:function(){k=!1,Re=null,Ce.set(-1,0,0,0)}}}function r(){let k=!1,De=!1,Re=null,Ce=null,Me=null;return{setReversed:function(ve){if(De!==ve){const Fe=e.get("EXT_clip_control");ve?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),De=ve;const at=Me;Me=null,this.setClear(at)}},getReversed:function(){return De},setTest:function(ve){ve?fe(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(ve){Re!==ve&&!k&&(s.depthMask(ve),Re=ve)},setFunc:function(ve){if(De&&(ve=IT[ve]),Ce!==ve){switch(ve){case Wd:s.depthFunc(s.NEVER);break;case Yd:s.depthFunc(s.ALWAYS);break;case Zd:s.depthFunc(s.LESS);break;case Ds:s.depthFunc(s.LEQUAL);break;case Kd:s.depthFunc(s.EQUAL);break;case Qd:s.depthFunc(s.GEQUAL);break;case Jd:s.depthFunc(s.GREATER);break;case $d:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ce=ve}},setLocked:function(ve){k=ve},setClear:function(ve){Me!==ve&&(De&&(ve=1-ve),s.clearDepth(ve),Me=ve)},reset:function(){k=!1,Re=null,Ce=null,Me=null,De=!1}}}function l(){let k=!1,De=null,Re=null,Ce=null,Me=null,ve=null,Fe=null,at=null,It=null;return{setTest:function(Rt){k||(Rt?fe(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(Rt){De!==Rt&&!k&&(s.stencilMask(Rt),De=Rt)},setFunc:function(Rt,Nn,Yn){(Re!==Rt||Ce!==Nn||Me!==Yn)&&(s.stencilFunc(Rt,Nn,Yn),Re=Rt,Ce=Nn,Me=Yn)},setOp:function(Rt,Nn,Yn){(ve!==Rt||Fe!==Nn||at!==Yn)&&(s.stencilOp(Rt,Nn,Yn),ve=Rt,Fe=Nn,at=Yn)},setLocked:function(Rt){k=Rt},setClear:function(Rt){It!==Rt&&(s.clearStencil(Rt),It=Rt)},reset:function(){k=!1,De=null,Re=null,Ce=null,Me=null,ve=null,Fe=null,at=null,It=null}}}const c=new i,d=new r,h=new l,p=new WeakMap,m=new WeakMap;let g={},x={},v=new WeakMap,b=[],M=null,T=!1,S=null,y=null,D=null,C=null,O=null,H=null,N=null,F=new Bt(0,0,0),X=0,U=!1,R=null,V=null,q=null,re=null,he=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=K>=2);let pe=null,_e={};const z=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),ye=new ln().fromArray(z),Te=new ln().fromArray(ne);function Oe(k,De,Re,Ce){const Me=new Uint8Array(4),ve=s.createTexture();s.bindTexture(k,ve),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Fe=0;Fe<Re;Fe++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(De+Fe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return ve}const ae={};ae[s.TEXTURE_2D]=Oe(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=Oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=Oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=Oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),fe(s.DEPTH_TEST),d.setFunc(Ds),pt(!1),xt(ng),fe(s.CULL_FACE),At(va);function fe(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function we(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function He(k,De){return x[k]!==De?(s.bindFramebuffer(k,De),x[k]=De,k===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=De),k===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=De),!0):!1}function je(k,De){let Re=b,Ce=!1;if(k){Re=v.get(De),Re===void 0&&(Re=[],v.set(De,Re));const Me=k.textures;if(Re.length!==Me.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,Fe=Me.length;ve<Fe;ve++)Re[ve]=s.COLOR_ATTACHMENT0+ve;Re.length=Me.length,Ce=!0}}else Re[0]!==s.BACK&&(Re[0]=s.BACK,Ce=!0);Ce&&s.drawBuffers(Re)}function ct(k){return M!==k?(s.useProgram(k),M=k,!0):!1}const an={[wr]:s.FUNC_ADD,[HS]:s.FUNC_SUBTRACT,[GS]:s.FUNC_REVERSE_SUBTRACT};an[VS]=s.MIN,an[kS]=s.MAX;const ht={[jS]:s.ZERO,[XS]:s.ONE,[qS]:s.SRC_COLOR,[Xd]:s.SRC_ALPHA,[JS]:s.SRC_ALPHA_SATURATE,[KS]:s.DST_COLOR,[YS]:s.DST_ALPHA,[WS]:s.ONE_MINUS_SRC_COLOR,[qd]:s.ONE_MINUS_SRC_ALPHA,[QS]:s.ONE_MINUS_DST_COLOR,[ZS]:s.ONE_MINUS_DST_ALPHA,[$S]:s.CONSTANT_COLOR,[e1]:s.ONE_MINUS_CONSTANT_COLOR,[t1]:s.CONSTANT_ALPHA,[n1]:s.ONE_MINUS_CONSTANT_ALPHA};function At(k,De,Re,Ce,Me,ve,Fe,at,It,Rt){if(k===va){T===!0&&(we(s.BLEND),T=!1);return}if(T===!1&&(fe(s.BLEND),T=!0),k!==IS){if(k!==S||Rt!==U){if((y!==wr||O!==wr)&&(s.blendEquation(s.FUNC_ADD),y=wr,O=wr),Rt)switch(k){case Cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ig:s.blendFunc(s.ONE,s.ONE);break;case ag:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case rg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:on("WebGLState: Invalid blending: ",k);break}else switch(k){case Cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ig:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ag:on("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rg:on("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:on("WebGLState: Invalid blending: ",k);break}D=null,C=null,H=null,N=null,F.set(0,0,0),X=0,S=k,U=Rt}return}Me=Me||De,ve=ve||Re,Fe=Fe||Ce,(De!==y||Me!==O)&&(s.blendEquationSeparate(an[De],an[Me]),y=De,O=Me),(Re!==D||Ce!==C||ve!==H||Fe!==N)&&(s.blendFuncSeparate(ht[Re],ht[Ce],ht[ve],ht[Fe]),D=Re,C=Ce,H=ve,N=Fe),(at.equals(F)===!1||It!==X)&&(s.blendColor(at.r,at.g,at.b,It),F.copy(at),X=It),S=k,U=!1}function G(k,De){k.side===pa?we(s.CULL_FACE):fe(s.CULL_FACE);let Re=k.side===qn;De&&(Re=!Re),pt(Re),k.blending===Cs&&k.transparent===!1?At(va):At(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),c.setMask(k.colorWrite);const Ce=k.stencilWrite;h.setTest(Ce),Ce&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ge(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(k){R!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),R=k)}function xt(k){k!==zS?(fe(s.CULL_FACE),k!==V&&(k===ng?s.cullFace(s.BACK):k===FS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),V=k}function Pt(k){k!==q&&(B&&s.lineWidth(k),q=k)}function Ge(k,De,Re){k?(fe(s.POLYGON_OFFSET_FILL),(re!==De||he!==Re)&&(s.polygonOffset(De,Re),re=De,he=Re)):we(s.POLYGON_OFFSET_FILL)}function jt(k){k?fe(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function Ye(k){k===void 0&&(k=s.TEXTURE0+ce-1),pe!==k&&(s.activeTexture(k),pe=k)}function rt(k,De,Re){Re===void 0&&(pe===null?Re=s.TEXTURE0+ce-1:Re=pe);let Ce=_e[Re];Ce===void 0&&(Ce={type:void 0,texture:void 0},_e[Re]=Ce),(Ce.type!==k||Ce.texture!==De)&&(pe!==Re&&(s.activeTexture(Re),pe=Re),s.bindTexture(k,De||ae[k]),Ce.type=k,Ce.texture=De)}function P(){const k=_e[pe];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function $(){try{s.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function xe(){try{s.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function be(){try{s.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function qe(){try{s.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Ne(){try{s.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Je(){try{s.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Xe(){try{s.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Se(){try{s.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Ee(k){ye.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),ye.copy(k))}function We(k){Te.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Te.copy(k))}function Ve(k,De){let Re=m.get(De);Re===void 0&&(Re=new WeakMap,m.set(De,Re));let Ce=Re.get(k);Ce===void 0&&(Ce=s.getUniformBlockIndex(De,k.name),Re.set(k,Ce))}function Pe(k,De){const Ce=m.get(De).get(k);p.get(De)!==Ce&&(s.uniformBlockBinding(De,Ce,k.__bindingPointIndex),p.set(De,Ce))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},pe=null,_e={},x={},v=new WeakMap,b=[],M=null,T=!1,S=null,y=null,D=null,C=null,O=null,H=null,N=null,F=new Bt(0,0,0),X=0,U=!1,R=null,V=null,q=null,re=null,he=null,ye.set(0,0,s.canvas.width,s.canvas.height),Te.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:fe,disable:we,bindFramebuffer:He,drawBuffers:je,useProgram:ct,setBlending:At,setMaterial:G,setFlipSided:pt,setCullFace:xt,setLineWidth:Pt,setPolygonOffset:Ge,setScissorTest:jt,activeTexture:Ye,bindTexture:rt,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:Xe,texImage3D:Se,updateUBOMapping:Ve,uniformBlockBinding:Pe,texStorage2D:Ne,texStorage3D:Je,texSubImage2D:xe,texSubImage3D:be,compressedTexSubImage2D:ue,compressedTexSubImage3D:qe,scissor:Ee,viewport:We,reset:it}}function GT(s,e,i,r,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Lt,g=new WeakMap;let x;const v=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,E){return b?new OffscreenCanvas(P,E):qo("canvas")}function T(P,E,$){let xe=1;const be=rt(P);if((be.width>$||be.height>$)&&(xe=$/Math.max(be.width,be.height)),xe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(xe*be.width),qe=Math.floor(xe*be.height);x===void 0&&(x=M(ue,qe));const Ne=E?M(ue,qe):x;return Ne.width=ue,Ne.height=qe,Ne.getContext("2d").drawImage(P,0,0,ue,qe),lt("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+ue+"x"+qe+")."),Ne}else return"data"in P&&lt("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),P;return P}function S(P){return P.generateMipmaps}function y(P){s.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(P,E,$,xe,be=!1){if(P!==null){if(s[P]!==void 0)return s[P];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=E;if(E===s.RED&&($===s.FLOAT&&(ue=s.R32F),$===s.HALF_FLOAT&&(ue=s.R16F),$===s.UNSIGNED_BYTE&&(ue=s.R8)),E===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.R8UI),$===s.UNSIGNED_SHORT&&(ue=s.R16UI),$===s.UNSIGNED_INT&&(ue=s.R32UI),$===s.BYTE&&(ue=s.R8I),$===s.SHORT&&(ue=s.R16I),$===s.INT&&(ue=s.R32I)),E===s.RG&&($===s.FLOAT&&(ue=s.RG32F),$===s.HALF_FLOAT&&(ue=s.RG16F),$===s.UNSIGNED_BYTE&&(ue=s.RG8)),E===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.RG8UI),$===s.UNSIGNED_SHORT&&(ue=s.RG16UI),$===s.UNSIGNED_INT&&(ue=s.RG32UI),$===s.BYTE&&(ue=s.RG8I),$===s.SHORT&&(ue=s.RG16I),$===s.INT&&(ue=s.RG32I)),E===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),$===s.UNSIGNED_INT&&(ue=s.RGB32UI),$===s.BYTE&&(ue=s.RGB8I),$===s.SHORT&&(ue=s.RGB16I),$===s.INT&&(ue=s.RGB32I)),E===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),$===s.UNSIGNED_INT&&(ue=s.RGBA32UI),$===s.BYTE&&(ue=s.RGBA8I),$===s.SHORT&&(ue=s.RGBA16I),$===s.INT&&(ue=s.RGBA32I)),E===s.RGB&&($===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),E===s.RGBA){const qe=be?Hc:Ut.getTransfer(xe);$===s.FLOAT&&(ue=s.RGBA32F),$===s.HALF_FLOAT&&(ue=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ue=qe===kt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function O(P,E){let $;return P?E===null||E===Nr||E===ko?$=s.DEPTH24_STENCIL8:E===xa?$=s.DEPTH32F_STENCIL8:E===Vo&&($=s.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Nr||E===ko?$=s.DEPTH_COMPONENT24:E===xa?$=s.DEPTH_COMPONENT32F:E===Vo&&($=s.DEPTH_COMPONENT16),$}function H(P,E){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==ri&&P.minFilter!==vi?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function N(P){const E=P.target;E.removeEventListener("dispose",N),X(E),E.isVideoTexture&&g.delete(E)}function F(P){const E=P.target;E.removeEventListener("dispose",F),R(E)}function X(P){const E=r.get(P);if(E.__webglInit===void 0)return;const $=P.source,xe=v.get($);if(xe){const be=xe[E.__cacheKey];be.usedTimes--,be.usedTimes===0&&U(P),Object.keys(xe).length===0&&v.delete($)}r.remove(P)}function U(P){const E=r.get(P);s.deleteTexture(E.__webglTexture);const $=P.source,xe=v.get($);delete xe[E.__cacheKey],d.memory.textures--}function R(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(E.__webglFramebuffer[xe]))for(let be=0;be<E.__webglFramebuffer[xe].length;be++)s.deleteFramebuffer(E.__webglFramebuffer[xe][be]);else s.deleteFramebuffer(E.__webglFramebuffer[xe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[xe])}else{if(Array.isArray(E.__webglFramebuffer))for(let xe=0;xe<E.__webglFramebuffer.length;xe++)s.deleteFramebuffer(E.__webglFramebuffer[xe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let xe=0;xe<E.__webglColorRenderbuffer.length;xe++)E.__webglColorRenderbuffer[xe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[xe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=P.textures;for(let xe=0,be=$.length;xe<be;xe++){const ue=r.get($[xe]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),d.memory.textures--),r.remove($[xe])}r.remove(P)}let V=0;function q(){V=0}function re(){const P=V;return P>=l.maxTextures&&lt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),V+=1,P}function he(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function ce(P,E){const $=r.get(P);if(P.isVideoTexture&&jt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){const xe=P.image;if(xe===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{ae($,P,E);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+E)}function B(P,E){const $=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){ae($,P,E);return}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+E)}function K(P,E){const $=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){ae($,P,E);return}i.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+E)}function W(P,E){const $=r.get(P);if(P.version>0&&$.__version!==P.version){fe($,P,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+E)}const pe={[nh]:s.REPEAT,[ma]:s.CLAMP_TO_EDGE,[ih]:s.MIRRORED_REPEAT},_e={[ri]:s.NEAREST,[d1]:s.NEAREST_MIPMAP_NEAREST,[uc]:s.NEAREST_MIPMAP_LINEAR,[vi]:s.LINEAR,[fd]:s.LINEAR_MIPMAP_NEAREST,[Ur]:s.LINEAR_MIPMAP_LINEAR},z={[g1]:s.NEVER,[M1]:s.ALWAYS,[v1]:s.LESS,[Dv]:s.LEQUAL,[_1]:s.EQUAL,[S1]:s.GEQUAL,[y1]:s.GREATER,[b1]:s.NOTEQUAL};function ne(P,E){if(E.type===xa&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===vi||E.magFilter===fd||E.magFilter===uc||E.magFilter===Ur||E.minFilter===vi||E.minFilter===fd||E.minFilter===uc||E.minFilter===Ur)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,pe[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,pe[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,pe[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,_e[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,_e[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ri||E.minFilter!==uc&&E.minFilter!==Ur||E.type===xa&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ye(P,E){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",N));const xe=E.source;let be=v.get(xe);be===void 0&&(be={},v.set(xe,be));const ue=he(E);if(ue!==P.__cacheKey){be[ue]===void 0&&(be[ue]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,$=!0),be[ue].usedTimes++;const qe=be[P.__cacheKey];qe!==void 0&&(be[P.__cacheKey].usedTimes--,qe.usedTimes===0&&U(E)),P.__cacheKey=ue,P.__webglTexture=be[ue].texture}return $}function Te(P,E,$){return Math.floor(Math.floor(P/$)/E)}function Oe(P,E,$,xe){const ue=P.updateRanges;if(ue.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,$,xe,E.data);else{ue.sort((Se,Ee)=>Se.start-Ee.start);let qe=0;for(let Se=1;Se<ue.length;Se++){const Ee=ue[qe],We=ue[Se],Ve=Ee.start+Ee.count,Pe=Te(We.start,E.width,4),it=Te(Ee.start,E.width,4);We.start<=Ve+1&&Pe===it&&Te(We.start+We.count-1,E.width,4)===Pe?Ee.count=Math.max(Ee.count,We.start+We.count-Ee.start):(++qe,ue[qe]=We)}ue.length=qe+1;const Ne=s.getParameter(s.UNPACK_ROW_LENGTH),Je=s.getParameter(s.UNPACK_SKIP_PIXELS),Xe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Se=0,Ee=ue.length;Se<Ee;Se++){const We=ue[Se],Ve=Math.floor(We.start/4),Pe=Math.ceil(We.count/4),it=Ve%E.width,k=Math.floor(Ve/E.width),De=Pe,Re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,it),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,it,k,De,Re,$,xe,E.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ne),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Je),s.pixelStorei(s.UNPACK_SKIP_ROWS,Xe)}}function ae(P,E,$){let xe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(xe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(xe=s.TEXTURE_3D);const be=ye(P,E),ue=E.source;i.bindTexture(xe,P.__webglTexture,s.TEXTURE0+$);const qe=r.get(ue);if(ue.version!==qe.__version||be===!0){i.activeTexture(s.TEXTURE0+$);const Ne=Ut.getPrimaries(Ut.workingColorSpace),Je=E.colorSpace===er?null:Ut.getPrimaries(E.colorSpace),Xe=E.colorSpace===er||Ne===Je?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Se=T(E.image,!1,l.maxTextureSize);Se=Ye(E,Se);const Ee=c.convert(E.format,E.colorSpace),We=c.convert(E.type);let Ve=C(E.internalFormat,Ee,We,E.colorSpace,E.isVideoTexture);ne(xe,E);let Pe;const it=E.mipmaps,k=E.isVideoTexture!==!0,De=qe.__version===void 0||be===!0,Re=ue.dataReady,Ce=H(E,Se);if(E.isDepthTexture)Ve=O(E.format===Xo,E.type),De&&(k?i.texStorage2D(s.TEXTURE_2D,1,Ve,Se.width,Se.height):i.texImage2D(s.TEXTURE_2D,0,Ve,Se.width,Se.height,0,Ee,We,null));else if(E.isDataTexture)if(it.length>0){k&&De&&i.texStorage2D(s.TEXTURE_2D,Ce,Ve,it[0].width,it[0].height);for(let Me=0,ve=it.length;Me<ve;Me++)Pe=it[Me],k?Re&&i.texSubImage2D(s.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Ee,We,Pe.data):i.texImage2D(s.TEXTURE_2D,Me,Ve,Pe.width,Pe.height,0,Ee,We,Pe.data);E.generateMipmaps=!1}else k?(De&&i.texStorage2D(s.TEXTURE_2D,Ce,Ve,Se.width,Se.height),Re&&Oe(E,Se,Ee,We)):i.texImage2D(s.TEXTURE_2D,0,Ve,Se.width,Se.height,0,Ee,We,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&De&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Ve,it[0].width,it[0].height,Se.depth);for(let Me=0,ve=it.length;Me<ve;Me++)if(Pe=it[Me],E.format!==Di)if(Ee!==null)if(k){if(Re)if(E.layerUpdates.size>0){const Fe=wg(Pe.width,Pe.height,E.format,E.type);for(const at of E.layerUpdates){const It=Pe.data.subarray(at*Fe/Pe.data.BYTES_PER_ELEMENT,(at+1)*Fe/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,at,Pe.width,Pe.height,1,Ee,It)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,Se.depth,Ee,Pe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Me,Ve,Pe.width,Pe.height,Se.depth,0,Pe.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Re&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,Se.depth,Ee,We,Pe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Me,Ve,Pe.width,Pe.height,Se.depth,0,Ee,We,Pe.data)}else{k&&De&&i.texStorage2D(s.TEXTURE_2D,Ce,Ve,it[0].width,it[0].height);for(let Me=0,ve=it.length;Me<ve;Me++)Pe=it[Me],E.format!==Di?Ee!==null?k?Re&&i.compressedTexSubImage2D(s.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Ee,Pe.data):i.compressedTexImage2D(s.TEXTURE_2D,Me,Ve,Pe.width,Pe.height,0,Pe.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Re&&i.texSubImage2D(s.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Ee,We,Pe.data):i.texImage2D(s.TEXTURE_2D,Me,Ve,Pe.width,Pe.height,0,Ee,We,Pe.data)}else if(E.isDataArrayTexture)if(k){if(De&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Ve,Se.width,Se.height,Se.depth),Re)if(E.layerUpdates.size>0){const Me=wg(Se.width,Se.height,E.format,E.type);for(const ve of E.layerUpdates){const Fe=Se.data.subarray(ve*Me/Se.data.BYTES_PER_ELEMENT,(ve+1)*Me/Se.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,Se.width,Se.height,1,Ee,We,Fe)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ee,We,Se.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ve,Se.width,Se.height,Se.depth,0,Ee,We,Se.data);else if(E.isData3DTexture)k?(De&&i.texStorage3D(s.TEXTURE_3D,Ce,Ve,Se.width,Se.height,Se.depth),Re&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ee,We,Se.data)):i.texImage3D(s.TEXTURE_3D,0,Ve,Se.width,Se.height,Se.depth,0,Ee,We,Se.data);else if(E.isFramebufferTexture){if(De)if(k)i.texStorage2D(s.TEXTURE_2D,Ce,Ve,Se.width,Se.height);else{let Me=Se.width,ve=Se.height;for(let Fe=0;Fe<Ce;Fe++)i.texImage2D(s.TEXTURE_2D,Fe,Ve,Me,ve,0,Ee,We,null),Me>>=1,ve>>=1}}else if(it.length>0){if(k&&De){const Me=rt(it[0]);i.texStorage2D(s.TEXTURE_2D,Ce,Ve,Me.width,Me.height)}for(let Me=0,ve=it.length;Me<ve;Me++)Pe=it[Me],k?Re&&i.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ee,We,Pe):i.texImage2D(s.TEXTURE_2D,Me,Ve,Ee,We,Pe);E.generateMipmaps=!1}else if(k){if(De){const Me=rt(Se);i.texStorage2D(s.TEXTURE_2D,Ce,Ve,Me.width,Me.height)}Re&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,We,Se)}else i.texImage2D(s.TEXTURE_2D,0,Ve,Ee,We,Se);S(E)&&y(xe),qe.__version=ue.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function fe(P,E,$){if(E.image.length!==6)return;const xe=ye(P,E),be=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+$);const ue=r.get(be);if(be.version!==ue.__version||xe===!0){i.activeTexture(s.TEXTURE0+$);const qe=Ut.getPrimaries(Ut.workingColorSpace),Ne=E.colorSpace===er?null:Ut.getPrimaries(E.colorSpace),Je=E.colorSpace===er||qe===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const Xe=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let ve=0;ve<6;ve++)!Xe&&!Se?Ee[ve]=T(E.image[ve],!0,l.maxCubemapSize):Ee[ve]=Se?E.image[ve].image:E.image[ve],Ee[ve]=Ye(E,Ee[ve]);const We=Ee[0],Ve=c.convert(E.format,E.colorSpace),Pe=c.convert(E.type),it=C(E.internalFormat,Ve,Pe,E.colorSpace),k=E.isVideoTexture!==!0,De=ue.__version===void 0||xe===!0,Re=be.dataReady;let Ce=H(E,We);ne(s.TEXTURE_CUBE_MAP,E);let Me;if(Xe){k&&De&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,it,We.width,We.height);for(let ve=0;ve<6;ve++){Me=Ee[ve].mipmaps;for(let Fe=0;Fe<Me.length;Fe++){const at=Me[Fe];E.format!==Di?Ve!==null?k?Re&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,at.width,at.height,Ve,at.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,it,at.width,at.height,0,at.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,at.width,at.height,Ve,Pe,at.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,it,at.width,at.height,0,Ve,Pe,at.data)}}}else{if(Me=E.mipmaps,k&&De){Me.length>0&&Ce++;const ve=rt(Ee[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,it,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Se){k?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ee[ve].width,Ee[ve].height,Ve,Pe,Ee[ve].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,it,Ee[ve].width,Ee[ve].height,0,Ve,Pe,Ee[ve].data);for(let Fe=0;Fe<Me.length;Fe++){const It=Me[Fe].image[ve].image;k?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,It.width,It.height,Ve,Pe,It.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,it,It.width,It.height,0,Ve,Pe,It.data)}}else{k?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ve,Pe,Ee[ve]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,it,Ve,Pe,Ee[ve]);for(let Fe=0;Fe<Me.length;Fe++){const at=Me[Fe];k?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,Ve,Pe,at.image[ve]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,it,Ve,Pe,at.image[ve])}}}S(E)&&y(s.TEXTURE_CUBE_MAP),ue.__version=be.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function we(P,E,$,xe,be,ue){const qe=c.convert($.format,$.colorSpace),Ne=c.convert($.type),Je=C($.internalFormat,qe,Ne,$.colorSpace),Xe=r.get(E),Se=r.get($);if(Se.__renderTarget=E,!Xe.__hasExternalTextures){const Ee=Math.max(1,E.width>>ue),We=Math.max(1,E.height>>ue);be===s.TEXTURE_3D||be===s.TEXTURE_2D_ARRAY?i.texImage3D(be,ue,Je,Ee,We,E.depth,0,qe,Ne,null):i.texImage2D(be,ue,Je,Ee,We,0,qe,Ne,null)}i.bindFramebuffer(s.FRAMEBUFFER,P),Ge(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,be,Se.__webglTexture,0,Pt(E)):(be===s.TEXTURE_2D||be>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,xe,be,Se.__webglTexture,ue),i.bindFramebuffer(s.FRAMEBUFFER,null)}function He(P,E,$){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){const xe=E.depthTexture,be=xe&&xe.isDepthTexture?xe.type:null,ue=O(E.stencilBuffer,be),qe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=Pt(E);Ge(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ne,ue,E.width,E.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ue,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,P)}else{const xe=E.textures;for(let be=0;be<xe.length;be++){const ue=xe[be],qe=c.convert(ue.format,ue.colorSpace),Ne=c.convert(ue.type),Je=C(ue.internalFormat,qe,Ne,ue.colorSpace),Xe=Pt(E);$&&Ge(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,Je,E.width,E.height):Ge(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xe,Je,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Je,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function je(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=r.get(E.depthTexture);xe.__renderTarget=E,(!xe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ce(E.depthTexture,0);const be=xe.__webglTexture,ue=Pt(E);if(E.depthTexture.format===jo)Ge(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,be,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,be,0);else if(E.depthTexture.format===Xo)Ge(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,be,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function ct(P){const E=r.get(P),$=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const xe=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),xe){const be=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,xe.removeEventListener("dispose",be)};xe.addEventListener("dispose",be),E.__depthDisposeCallback=be}E.__boundDepthTexture=xe}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const xe=P.texture.mipmaps;xe&&xe.length>0?je(E.__webglFramebuffer[0],P):je(E.__webglFramebuffer,P)}else if($){E.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[xe]),E.__webglDepthbuffer[xe]===void 0)E.__webglDepthbuffer[xe]=s.createRenderbuffer(),He(E.__webglDepthbuffer[xe],P,!1);else{const be=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer[xe];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,ue)}}else{const xe=P.texture.mipmaps;if(xe&&xe.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),He(E.__webglDepthbuffer,P,!1);else{const be=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,ue)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function an(P,E,$){const xe=r.get(P);E!==void 0&&we(xe.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&ct(P)}function ht(P){const E=P.texture,$=r.get(P),xe=r.get(E);P.addEventListener("dispose",F);const be=P.textures,ue=P.isWebGLCubeRenderTarget===!0,qe=be.length>1;if(qe||(xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture()),xe.__version=E.version,d.memory.textures++),ue){$.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Ne]=[];for(let Je=0;Je<E.mipmaps.length;Je++)$.__webglFramebuffer[Ne][Je]=s.createFramebuffer()}else $.__webglFramebuffer[Ne]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)$.__webglFramebuffer[Ne]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(qe)for(let Ne=0,Je=be.length;Ne<Je;Ne++){const Xe=r.get(be[Ne]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=s.createTexture(),d.memory.textures++)}if(P.samples>0&&Ge(P)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ne=0;Ne<be.length;Ne++){const Je=be[Ne];$.__webglColorRenderbuffer[Ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Ne]);const Xe=c.convert(Je.format,Je.colorSpace),Se=c.convert(Je.type),Ee=C(Je.internalFormat,Xe,Se,Je.colorSpace,P.isXRRenderTarget===!0),We=Pt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,We,Ee,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,$.__webglColorRenderbuffer[Ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),He($.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){i.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),ne(s.TEXTURE_CUBE_MAP,E);for(let Ne=0;Ne<6;Ne++)if(E.mipmaps&&E.mipmaps.length>0)for(let Je=0;Je<E.mipmaps.length;Je++)we($.__webglFramebuffer[Ne][Je],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Je);else we($.__webglFramebuffer[Ne],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);S(E)&&y(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qe){for(let Ne=0,Je=be.length;Ne<Je;Ne++){const Xe=be[Ne],Se=r.get(Xe);let Ee=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ee=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ee,Se.__webglTexture),ne(Ee,Xe),we($.__webglFramebuffer,P,Xe,s.COLOR_ATTACHMENT0+Ne,Ee,0),S(Xe)&&y(Ee)}i.unbindTexture()}else{let Ne=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ne=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ne,xe.__webglTexture),ne(Ne,E),E.mipmaps&&E.mipmaps.length>0)for(let Je=0;Je<E.mipmaps.length;Je++)we($.__webglFramebuffer[Je],P,E,s.COLOR_ATTACHMENT0,Ne,Je);else we($.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,Ne,0);S(E)&&y(Ne),i.unbindTexture()}P.depthBuffer&&ct(P)}function At(P){const E=P.textures;for(let $=0,xe=E.length;$<xe;$++){const be=E[$];if(S(be)){const ue=D(P),qe=r.get(be).__webglTexture;i.bindTexture(ue,qe),y(ue),i.unbindTexture()}}}const G=[],pt=[];function xt(P){if(P.samples>0){if(Ge(P)===!1){const E=P.textures,$=P.width,xe=P.height;let be=s.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(P),Ne=E.length>1;if(Ne)for(let Xe=0;Xe<E.length;Xe++)i.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Je=P.texture.mipmaps;Je&&Je.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Xe=0;Xe<E.length;Xe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(be|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(be|=s.STENCIL_BUFFER_BIT)),Ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Xe]);const Se=r.get(E[Xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,$,xe,0,0,$,xe,be,s.NEAREST),p===!0&&(G.length=0,pt.length=0,G.push(s.COLOR_ATTACHMENT0+Xe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(G.push(ue),pt.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,pt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,G))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ne)for(let Xe=0;Xe<E.length;Xe++){i.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Xe]);const Se=r.get(E[Xe]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.TEXTURE_2D,Se,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Pt(P){return Math.min(l.maxSamples,P.samples)}function Ge(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function jt(P){const E=d.render.frame;g.get(P)!==E&&(g.set(P,E),P.update())}function Ye(P,E){const $=P.colorSpace,xe=P.format,be=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==Ls&&$!==er&&(Ut.getTransfer($)===kt?(xe!==Di||be!==ya)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):on("WebGLTextures: Unsupported texture color space:",$)),E}function rt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=re,this.resetTextureUnits=q,this.setTexture2D=ce,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=an,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ge}function VT(s,e){function i(r,l=er){let c;const d=Ut.getTransfer(l);if(r===ya)return s.UNSIGNED_BYTE;if(r===Yh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Zh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Tv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Av)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Mv)return s.BYTE;if(r===Ev)return s.SHORT;if(r===Vo)return s.UNSIGNED_SHORT;if(r===Wh)return s.INT;if(r===Nr)return s.UNSIGNED_INT;if(r===xa)return s.FLOAT;if(r===Ps)return s.HALF_FLOAT;if(r===Rv)return s.ALPHA;if(r===Cv)return s.RGB;if(r===Di)return s.RGBA;if(r===jo)return s.DEPTH_COMPONENT;if(r===Xo)return s.DEPTH_STENCIL;if(r===wv)return s.RED;if(r===Kh)return s.RED_INTEGER;if(r===Qh)return s.RG;if(r===Jh)return s.RG_INTEGER;if(r===$h)return s.RGBA_INTEGER;if(r===Lc||r===Oc||r===Pc||r===zc)if(d===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Lc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Lc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ah||r===rh||r===sh||r===oh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ah)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===oh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lh||r===ch||r===uh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===lh||r===ch)return d===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===uh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fh||r===dh||r===hh||r===ph||r===mh||r===xh||r===gh||r===vh||r===_h||r===yh||r===bh||r===Sh||r===Mh||r===Eh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===fh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ph)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_h)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Eh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Th||r===Ah||r===Rh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Th)return d===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ah)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ch||r===wh||r===Dh||r===Uh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Ch)return c.COMPRESSED_RED_RGTC1_EXT;if(r===wh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ko?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const kT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new jv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Sa({vertexShader:kT,fragmentShader:jT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _i(new Yc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qT extends zs{constructor(e,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",p=1,m=null,g=null,x=null,v=null,b=null,M=null;const T=typeof XRWebGLBinding<"u",S=new XT,y={},D=i.getContextAttributes();let C=null,O=null;const H=[],N=[],F=new Lt;let X=null;const U=new gi;U.viewport=new ln;const R=new gi;R.viewport=new ln;const V=[U,R],q=new uM;let re=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let fe=H[ae];return fe===void 0&&(fe=new Od,H[ae]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ae){let fe=H[ae];return fe===void 0&&(fe=new Od,H[ae]=fe),fe.getGripSpace()},this.getHand=function(ae){let fe=H[ae];return fe===void 0&&(fe=new Od,H[ae]=fe),fe.getHandSpace()};function ce(ae){const fe=N.indexOf(ae.inputSource);if(fe===-1)return;const we=H[fe];we!==void 0&&(we.update(ae.inputSource,ae.frame,m||d),we.dispatchEvent({type:ae.type,data:ae.inputSource}))}function B(){l.removeEventListener("select",ce),l.removeEventListener("selectstart",ce),l.removeEventListener("selectend",ce),l.removeEventListener("squeeze",ce),l.removeEventListener("squeezestart",ce),l.removeEventListener("squeezeend",ce),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",K);for(let ae=0;ae<H.length;ae++){const fe=N[ae];fe!==null&&(N[ae]=null,H[ae].disconnect(fe))}re=null,he=null,S.reset();for(const ae in y)delete y[ae];e.setRenderTarget(C),b=null,v=null,x=null,l=null,O=null,Oe.stop(),r.isPresenting=!1,e.setPixelRatio(X),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){h=ae,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(ae){m=ae},this.getBaseLayer=function(){return v!==null?v:b},this.getBinding=function(){return x===null&&T&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(C=e.getRenderTarget(),l.addEventListener("select",ce),l.addEventListener("selectstart",ce),l.addEventListener("selectend",ce),l.addEventListener("squeeze",ce),l.addEventListener("squeezestart",ce),l.addEventListener("squeezeend",ce),l.addEventListener("end",B),l.addEventListener("inputsourceschange",K),D.xrCompatible!==!0&&await i.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,He=null,je=null;D.depth&&(je=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,we=D.stencil?Xo:jo,He=D.stencil?ko:Nr);const ct={colorFormat:i.RGBA8,depthFormat:je,scaleFactor:c};x=this.getBinding(),v=x.createProjectionLayer(ct),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),O=new Lr(v.textureWidth,v.textureHeight,{format:Di,type:ya,depthTexture:new kv(v.textureWidth,v.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const we={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,we),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),O=new Lr(b.framebufferWidth,b.framebufferHeight,{format:Di,type:ya,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),Oe.setContext(l),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function K(ae){for(let fe=0;fe<ae.removed.length;fe++){const we=ae.removed[fe],He=N.indexOf(we);He>=0&&(N[He]=null,H[He].disconnect(we))}for(let fe=0;fe<ae.added.length;fe++){const we=ae.added[fe];let He=N.indexOf(we);if(He===-1){for(let ct=0;ct<H.length;ct++)if(ct>=N.length){N.push(we),He=ct;break}else if(N[ct]===null){N[ct]=we,He=ct;break}if(He===-1)break}const je=H[He];je&&je.connect(we)}}const W=new oe,pe=new oe;function _e(ae,fe,we){W.setFromMatrixPosition(fe.matrixWorld),pe.setFromMatrixPosition(we.matrixWorld);const He=W.distanceTo(pe),je=fe.projectionMatrix.elements,ct=we.projectionMatrix.elements,an=je[14]/(je[10]-1),ht=je[14]/(je[10]+1),At=(je[9]+1)/je[5],G=(je[9]-1)/je[5],pt=(je[8]-1)/je[0],xt=(ct[8]+1)/ct[0],Pt=an*pt,Ge=an*xt,jt=He/(-pt+xt),Ye=jt*-pt;if(fe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Ye),ae.translateZ(jt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),je[10]===-1)ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const rt=an+jt,P=ht+jt,E=Pt-Ye,$=Ge+(He-Ye),xe=At*ht/P*rt,be=G*ht/P*rt;ae.projectionMatrix.makePerspective(E,$,xe,be,rt,P),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function z(ae,fe){fe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(fe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let fe=ae.near,we=ae.far;S.texture!==null&&(S.depthNear>0&&(fe=S.depthNear),S.depthFar>0&&(we=S.depthFar)),q.near=R.near=U.near=fe,q.far=R.far=U.far=we,(re!==q.near||he!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),re=q.near,he=q.far),q.layers.mask=ae.layers.mask|6,U.layers.mask=q.layers.mask&3,R.layers.mask=q.layers.mask&5;const He=ae.parent,je=q.cameras;z(q,He);for(let ct=0;ct<je.length;ct++)z(je[ct],He);je.length===2?_e(q,U,R):q.projectionMatrix.copy(U.projectionMatrix),ne(ae,q,He)};function ne(ae,fe,we){we===null?ae.matrix.copy(fe.matrixWorld):(ae.matrix.copy(we.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(fe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Nh*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(v===null&&b===null))return p},this.setFoveation=function(ae){p=ae,v!==null&&(v.fixedFoveation=ae),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=ae)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(q)},this.getCameraTexture=function(ae){return y[ae]};let ye=null;function Te(ae,fe){if(g=fe.getViewerPose(m||d),M=fe,g!==null){const we=g.views;b!==null&&(e.setRenderTargetFramebuffer(O,b.framebuffer),e.setRenderTarget(O));let He=!1;we.length!==q.cameras.length&&(q.cameras.length=0,He=!0);for(let ht=0;ht<we.length;ht++){const At=we[ht];let G=null;if(b!==null)G=b.getViewport(At);else{const xt=x.getViewSubImage(v,At);G=xt.viewport,ht===0&&(e.setRenderTargetTextures(O,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(O))}let pt=V[ht];pt===void 0&&(pt=new gi,pt.layers.enable(ht),pt.viewport=new ln,V[ht]=pt),pt.matrix.fromArray(At.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(At.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(G.x,G.y,G.width,G.height),ht===0&&(q.matrix.copy(pt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),He===!0&&q.cameras.push(pt)}const je=l.enabledFeatures;if(je&&je.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){x=r.getBinding();const ht=x.getDepthInformation(we[0]);ht&&ht.isValid&&ht.texture&&S.init(ht,l.renderState)}if(je&&je.includes("camera-access")&&T){e.state.unbindTexture(),x=r.getBinding();for(let ht=0;ht<we.length;ht++){const At=we[ht].camera;if(At){let G=y[At];G||(G=new jv,y[At]=G);const pt=x.getCameraImage(At);G.sourceTexture=pt}}}}for(let we=0;we<H.length;we++){const He=N[we],je=H[we];He!==null&&je!==void 0&&je.update(He,fe,m||d)}ye&&ye(ae,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),M=null}const Oe=new Xv;Oe.setAnimationLoop(Te),this.setAnimationLoop=function(ae){ye=ae},this.dispose=function(){}}}const Rr=new ba,WT=new xn;function YT(s,e){function i(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,Bv(s)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function l(S,y,D,C,O){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(S,y):y.isMeshToonMaterial?(c(S,y),x(S,y)):y.isMeshPhongMaterial?(c(S,y),g(S,y)):y.isMeshStandardMaterial?(c(S,y),v(S,y),y.isMeshPhysicalMaterial&&b(S,y,O)):y.isMeshMatcapMaterial?(c(S,y),M(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),T(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(d(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?p(S,y,D,C):y.isSpriteMaterial?m(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,i(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===qn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,i(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===qn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,i(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,i(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const D=e.get(y),C=D.envMap,O=D.envMapRotation;C&&(S.envMap.value=C,Rr.copy(O),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),S.envMapRotation.value.setFromMatrix4(WT.makeRotationFromEuler(Rr)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,S.aoMapTransform))}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,D,C){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*D,S.scale.value=C*.5,y.map&&(S.map.value=y.map,i(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function x(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function b(S,y,D){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===qn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const D=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function ZT(s,e,i,r){let l={},c={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,C){const O=C.program;r.uniformBlockBinding(D,O)}function m(D,C){let O=l[D.id];O===void 0&&(M(D),O=g(D),l[D.id]=O,D.addEventListener("dispose",S));const H=C.program;r.updateUBOMapping(D,H);const N=e.render.frame;c[D.id]!==N&&(v(D),c[D.id]=N)}function g(D){const C=x();D.__bindingPointIndex=C;const O=s.createBuffer(),H=D.__size,N=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,H,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,O),O}function x(){for(let D=0;D<h;D++)if(d.indexOf(D)===-1)return d.push(D),D;return on("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const C=l[D.id],O=D.uniforms,H=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let N=0,F=O.length;N<F;N++){const X=Array.isArray(O[N])?O[N]:[O[N]];for(let U=0,R=X.length;U<R;U++){const V=X[U];if(b(V,N,U,H)===!0){const q=V.__offset,re=Array.isArray(V.value)?V.value:[V.value];let he=0;for(let ce=0;ce<re.length;ce++){const B=re[ce],K=T(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,q+he,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,he),he+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(D,C,O,H){const N=D.value,F=C+"_"+O;if(H[F]===void 0)return typeof N=="number"||typeof N=="boolean"?H[F]=N:H[F]=N.clone(),!0;{const X=H[F];if(typeof N=="number"||typeof N=="boolean"){if(X!==N)return H[F]=N,!0}else if(X.equals(N)===!1)return X.copy(N),!0}return!1}function M(D){const C=D.uniforms;let O=0;const H=16;for(let F=0,X=C.length;F<X;F++){const U=Array.isArray(C[F])?C[F]:[C[F]];for(let R=0,V=U.length;R<V;R++){const q=U[R],re=Array.isArray(q.value)?q.value:[q.value];for(let he=0,ce=re.length;he<ce;he++){const B=re[he],K=T(B),W=O%H,pe=W%K.boundary,_e=W+pe;O+=pe,_e!==0&&H-_e<K.storage&&(O+=H-_e),q.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=O,O+=K.storage}}}const N=O%H;return N>0&&(O+=H-N),D.__size=O,D.__cache={},this}function T(D){const C={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(C.boundary=4,C.storage=4):D.isVector2?(C.boundary=8,C.storage=8):D.isVector3||D.isColor?(C.boundary=16,C.storage=12):D.isVector4?(C.boundary=16,C.storage=16):D.isMatrix3?(C.boundary=48,C.storage=48):D.isMatrix4?(C.boundary=64,C.storage=64):D.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",D),C}function S(D){const C=D.target;C.removeEventListener("dispose",S);const O=d.indexOf(C.__bindingPointIndex);d.splice(O,1),s.deleteBuffer(l[C.id]),delete l[C.id],delete c[C.id]}function y(){for(const D in l)s.deleteBuffer(l[D]);d=[],l={},c={}}return{bind:p,update:m,dispose:y}}const KT=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let da=null;function QT(){return da===null&&(da=new J1(KT,32,32,Qh,Ps),da.minFilter=vi,da.magFilter=vi,da.wrapS=ma,da.wrapT=ma,da.generateMipmaps=!1,da.needsUpdate=!0),da}class JT{constructor(e={}){const{canvas:i=E1(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const M=new Set([$h,Jh,Kh]),T=new Set([ya,Nr,Vo,ko,Yh,Zh]),S=new Uint32Array(4),y=new Int32Array(4);let D=null,C=null;const O=[],H=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let F=!1;this._outputColorSpace=xi;let X=0,U=0,R=null,V=-1,q=null;const re=new ln,he=new ln;let ce=null;const B=new Bt(0);let K=0,W=i.width,pe=i.height,_e=1,z=null,ne=null;const ye=new ln(0,0,W,pe),Te=new ln(0,0,W,pe);let Oe=!1;const ae=new Gv;let fe=!1,we=!1;const He=new xn,je=new oe,ct=new ln,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function At(){return R===null?_e:1}let G=r;function pt(w,Y){return i.getContext(w,Y)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${qh}`),i.addEventListener("webglcontextlost",Me,!1),i.addEventListener("webglcontextrestored",ve,!1),i.addEventListener("webglcontextcreationerror",Fe,!1),G===null){const Y="webgl2";if(G=pt(Y,w),G===null)throw pt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let xt,Pt,Ge,jt,Ye,rt,P,E,$,xe,be,ue,qe,Ne,Je,Xe,Se,Ee,We,Ve,Pe,it,k,De;function Re(){xt=new s2(G),xt.init(),it=new VT(G,xt),Pt=new QE(G,xt,e,it),Ge=new HT(G,xt),Pt.reversedDepthBuffer&&v&&Ge.buffers.depth.setReversed(!0),jt=new c2(G),Ye=new RT,rt=new GT(G,xt,Ge,Ye,Pt,it,jt),P=new $E(N),E=new r2(N),$=new hM(G),k=new ZE(G,$),xe=new o2(G,$,jt,k),be=new f2(G,xe,$,jt),We=new u2(G,Pt,rt),Xe=new JE(Ye),ue=new AT(N,P,E,xt,Pt,k,Xe),qe=new YT(N,Ye),Ne=new wT,Je=new PT(xt),Ee=new YE(N,P,E,Ge,be,b,p),Se=new BT(N,be,Pt),De=new ZT(G,jt,Pt,Ge),Ve=new KE(G,xt,jt),Pe=new l2(G,xt,jt),jt.programs=ue.programs,N.capabilities=Pt,N.extensions=xt,N.properties=Ye,N.renderLists=Ne,N.shadowMap=Se,N.state=Ge,N.info=jt}Re();const Ce=new qT(N,G);this.xr=Ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=xt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=xt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(w){w!==void 0&&(_e=w,this.setSize(W,pe,!1))},this.getSize=function(w){return w.set(W,pe)},this.setSize=function(w,Y,se=!0){if(Ce.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,pe=Y,i.width=Math.floor(w*_e),i.height=Math.floor(Y*_e),se===!0&&(i.style.width=w+"px",i.style.height=Y+"px"),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(W*_e,pe*_e).floor()},this.setDrawingBufferSize=function(w,Y,se){W=w,pe=Y,_e=se,i.width=Math.floor(w*se),i.height=Math.floor(Y*se),this.setViewport(0,0,w,Y)},this.getCurrentViewport=function(w){return w.copy(re)},this.getViewport=function(w){return w.copy(ye)},this.setViewport=function(w,Y,se,te){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,Y,se,te),Ge.viewport(re.copy(ye).multiplyScalar(_e).round())},this.getScissor=function(w){return w.copy(Te)},this.setScissor=function(w,Y,se,te){w.isVector4?Te.set(w.x,w.y,w.z,w.w):Te.set(w,Y,se,te),Ge.scissor(he.copy(Te).multiplyScalar(_e).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(w){Ge.setScissorTest(Oe=w)},this.setOpaqueSort=function(w){z=w},this.setTransparentSort=function(w){ne=w},this.getClearColor=function(w){return w.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,se=!0){let te=0;if(w){let Q=!1;if(R!==null){const Ae=R.texture.format;Q=M.has(Ae)}if(Q){const Ae=R.texture.type,Ue=T.has(Ae),ze=Ee.getClearColor(),Be=Ee.getClearAlpha(),et=ze.r,nt=ze.g,Ze=ze.b;Ue?(S[0]=et,S[1]=nt,S[2]=Ze,S[3]=Be,G.clearBufferuiv(G.COLOR,0,S)):(y[0]=et,y[1]=nt,y[2]=Ze,y[3]=Be,G.clearBufferiv(G.COLOR,0,y))}else te|=G.COLOR_BUFFER_BIT}Y&&(te|=G.DEPTH_BUFFER_BIT),se&&(te|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Me,!1),i.removeEventListener("webglcontextrestored",ve,!1),i.removeEventListener("webglcontextcreationerror",Fe,!1),Ee.dispose(),Ne.dispose(),Je.dispose(),Ye.dispose(),P.dispose(),E.dispose(),be.dispose(),k.dispose(),De.dispose(),ue.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Bs),Ce.removeEventListener("sessionend",Is),bi.stop()};function Me(w){w.preventDefault(),ug("WebGLRenderer: Context Lost."),F=!0}function ve(){ug("WebGLRenderer: Context Restored."),F=!1;const w=jt.autoReset,Y=Se.enabled,se=Se.autoUpdate,te=Se.needsUpdate,Q=Se.type;Re(),jt.autoReset=w,Se.enabled=Y,Se.autoUpdate=se,Se.needsUpdate=te,Se.type=Q}function Fe(w){on("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function at(w){const Y=w.target;Y.removeEventListener("dispose",at),It(Y)}function It(w){Rt(w),Ye.remove(w)}function Rt(w){const Y=Ye.get(w).programs;Y!==void 0&&(Y.forEach(function(se){ue.releaseProgram(se)}),w.isShaderMaterial&&ue.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,se,te,Q,Ae){Y===null&&(Y=an);const Ue=Q.isMesh&&Q.matrixWorld.determinant()<0,ze=Qc(w,Y,se,te,Q);Ge.setMaterial(te,Ue);let Be=se.index,et=1;if(te.wireframe===!0){if(Be=xe.getWireframeAttribute(se),Be===void 0)return;et=2}const nt=se.drawRange,Ze=se.attributes.position;let ut=nt.start*et,Tt=(nt.start+nt.count)*et;Ae!==null&&(ut=Math.max(ut,Ae.start*et),Tt=Math.min(Tt,(Ae.start+Ae.count)*et)),Be!==null?(ut=Math.max(ut,0),Tt=Math.min(Tt,Be.count)):Ze!=null&&(ut=Math.max(ut,0),Tt=Math.min(Tt,Ze.count));const Ct=Tt-ut;if(Ct<0||Ct===1/0)return;k.setup(Q,te,ze,se,Be);let bt,Ot=Ve;if(Be!==null&&(bt=$.get(Be),Ot=Pe,Ot.setIndex(bt)),Q.isMesh)te.wireframe===!0?(Ge.setLineWidth(te.wireframeLinewidth*At()),Ot.setMode(G.LINES)):Ot.setMode(G.TRIANGLES);else if(Q.isLine){let $e=te.linewidth;$e===void 0&&($e=1),Ge.setLineWidth($e*At()),Q.isLineSegments?Ot.setMode(G.LINES):Q.isLineLoop?Ot.setMode(G.LINE_LOOP):Ot.setMode(G.LINE_STRIP)}else Q.isPoints?Ot.setMode(G.POINTS):Q.isSprite&&Ot.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Wo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const $e=Q._multiDrawStarts,Xt=Q._multiDrawCounts,St=Q._multiDrawCount,Sn=Be?$.get(Be).bytesPerElement:1,Ea=Ye.get(te).currentProgram.getUniforms();for(let Wt=0;Wt<St;Wt++)Ea.setValue(G,"_gl_DrawID",Wt),Ot.render($e[Wt]/Sn,Xt[Wt])}else if(Q.isInstancedMesh)Ot.renderInstances(ut,Ct,Q.count);else if(se.isInstancedBufferGeometry){const $e=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Xt=Math.min(se.instanceCount,$e);Ot.renderInstances(ut,Ct,Xt)}else Ot.render(ut,Ct)};function Nn(w,Y,se){w.transparent===!0&&w.side===pa&&w.forceSinglePass===!1?(w.side=qn,w.needsUpdate=!0,gn(w,Y,se),w.side=ir,w.needsUpdate=!0,gn(w,Y,se),w.side=pa):gn(w,Y,se)}this.compile=function(w,Y,se=null){se===null&&(se=w),C=Je.get(se),C.init(Y),H.push(C),se.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(C.pushLight(Q),Q.castShadow&&C.pushShadow(Q))}),w!==se&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(C.pushLight(Q),Q.castShadow&&C.pushShadow(Q))}),C.setupLights();const te=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ae=Q.material;if(Ae)if(Array.isArray(Ae))for(let Ue=0;Ue<Ae.length;Ue++){const ze=Ae[Ue];Nn(ze,se,Q),te.add(ze)}else Nn(Ae,se,Q),te.add(Ae)}),C=H.pop(),te},this.compileAsync=function(w,Y,se=null){const te=this.compile(w,Y,se);return new Promise(Q=>{function Ae(){if(te.forEach(function(Ue){Ye.get(Ue).currentProgram.isReady()&&te.delete(Ue)}),te.size===0){Q(w);return}setTimeout(Ae,10)}xt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Yn=null;function $o(w){Yn&&Yn(w)}function Bs(){bi.stop()}function Is(){bi.start()}const bi=new Xv;bi.setAnimationLoop($o),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(w){Yn=w,Ce.setAnimationLoop(w),w===null?bi.stop():bi.start()},Ce.addEventListener("sessionstart",Bs),Ce.addEventListener("sessionend",Is),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){on("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(Y),Y=Ce.getCamera()),w.isScene===!0&&w.onBeforeRender(N,w,Y,R),C=Je.get(w,H.length),C.init(Y),H.push(C),He.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ae.setFromProjectionMatrix(He,Hi,Y.reversedDepth),we=this.localClippingEnabled,fe=Xe.init(this.clippingPlanes,we),D=Ne.get(w,O.length),D.init(),O.push(D),Ce.enabled===!0&&Ce.isPresenting===!0){const Ae=N.xr.getDepthSensingMesh();Ae!==null&&ar(Ae,Y,-1/0,N.sortObjects)}ar(w,Y,0,N.sortObjects),D.finish(),N.sortObjects===!0&&D.sort(z,ne),ht=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ht&&Ee.addToRenderList(D,w),this.info.render.frame++,fe===!0&&Xe.beginShadows();const se=C.state.shadowsArray;Se.render(se,w,Y),fe===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=D.opaque,Q=D.transmissive;if(C.setupLights(),Y.isArrayCamera){const Ae=Y.cameras;if(Q.length>0)for(let Ue=0,ze=Ae.length;Ue<ze;Ue++){const Be=Ae[Ue];Gs(te,Q,w,Be)}ht&&Ee.render(w);for(let Ue=0,ze=Ae.length;Ue<ze;Ue++){const Be=Ae[Ue];Hs(D,w,Be,Be.viewport)}}else Q.length>0&&Gs(te,Q,w,Y),ht&&Ee.render(w),Hs(D,w,Y);R!==null&&U===0&&(rt.updateMultisampleRenderTarget(R),rt.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(N,w,Y),k.resetDefaultState(),V=-1,q=null,H.pop(),H.length>0?(C=H[H.length-1],fe===!0&&Xe.setGlobalState(N.clippingPlanes,C.state.camera)):C=null,O.pop(),O.length>0?D=O[O.length-1]:D=null};function ar(w,Y,se,te){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)se=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)C.pushLight(w),w.castShadow&&C.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ae.intersectsSprite(w)){te&&ct.setFromMatrixPosition(w.matrixWorld).applyMatrix4(He);const Ue=be.update(w),ze=w.material;ze.visible&&D.push(w,Ue,ze,se,ct.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ae.intersectsObject(w))){const Ue=be.update(w),ze=w.material;if(te&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ct.copy(w.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ct.copy(Ue.boundingSphere.center)),ct.applyMatrix4(w.matrixWorld).applyMatrix4(He)),Array.isArray(ze)){const Be=Ue.groups;for(let et=0,nt=Be.length;et<nt;et++){const Ze=Be[et],ut=ze[Ze.materialIndex];ut&&ut.visible&&D.push(w,Ue,ut,se,ct.z,Ze)}}else ze.visible&&D.push(w,Ue,ze,se,ct.z,null)}}const Ae=w.children;for(let Ue=0,ze=Ae.length;Ue<ze;Ue++)ar(Ae[Ue],Y,se,te)}function Hs(w,Y,se,te){const{opaque:Q,transmissive:Ae,transparent:Ue}=w;C.setupLightsView(se),fe===!0&&Xe.setGlobalState(N.clippingPlanes,se),te&&Ge.viewport(re.copy(te)),Q.length>0&&Zn(Q,Y,se),Ae.length>0&&Zn(Ae,Y,se),Ue.length>0&&Zn(Ue,Y,se),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Gs(w,Y,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;C.state.transmissionRenderTarget[te.id]===void 0&&(C.state.transmissionRenderTarget[te.id]=new Lr(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?Ps:ya,minFilter:Ur,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const Ae=C.state.transmissionRenderTarget[te.id],Ue=te.viewport||re;Ae.setSize(Ue.z*N.transmissionResolutionScale,Ue.w*N.transmissionResolutionScale);const ze=N.getRenderTarget(),Be=N.getActiveCubeFace(),et=N.getActiveMipmapLevel();N.setRenderTarget(Ae),N.getClearColor(B),K=N.getClearAlpha(),K<1&&N.setClearColor(16777215,.5),N.clear(),ht&&Ee.render(se);const nt=N.toneMapping;N.toneMapping=nr;const Ze=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),C.setupLightsView(te),fe===!0&&Xe.setGlobalState(N.clippingPlanes,te),Zn(w,se,te),rt.updateMultisampleRenderTarget(Ae),rt.updateRenderTargetMipmap(Ae),xt.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Tt=0,Ct=Y.length;Tt<Ct;Tt++){const bt=Y[Tt],{object:Ot,geometry:$e,material:Xt,group:St}=bt;if(Xt.side===pa&&Ot.layers.test(te.layers)){const Sn=Xt.side;Xt.side=qn,Xt.needsUpdate=!0,cn(Ot,se,te,$e,Xt,St),Xt.side=Sn,Xt.needsUpdate=!0,ut=!0}}ut===!0&&(rt.updateMultisampleRenderTarget(Ae),rt.updateRenderTargetMipmap(Ae))}N.setRenderTarget(ze,Be,et),N.setClearColor(B,K),Ze!==void 0&&(te.viewport=Ze),N.toneMapping=nt}function Zn(w,Y,se){const te=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Ae=w.length;Q<Ae;Q++){const Ue=w[Q],{object:ze,geometry:Be,group:et}=Ue;let nt=Ue.material;nt.allowOverride===!0&&te!==null&&(nt=te),ze.layers.test(se.layers)&&cn(ze,Y,se,Be,nt,et)}}function cn(w,Y,se,te,Q,Ae){w.onBeforeRender(N,Y,se,te,Q,Ae),w.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(N,Y,se,te,w,Ae),Q.transparent===!0&&Q.side===pa&&Q.forceSinglePass===!1?(Q.side=qn,Q.needsUpdate=!0,N.renderBufferDirect(se,Y,te,Q,w,Ae),Q.side=ir,Q.needsUpdate=!0,N.renderBufferDirect(se,Y,te,Q,w,Ae),Q.side=pa):N.renderBufferDirect(se,Y,te,Q,w,Ae),w.onAfterRender(N,Y,se,te,Q,Ae)}function gn(w,Y,se){Y.isScene!==!0&&(Y=an);const te=Ye.get(w),Q=C.state.lights,Ae=C.state.shadowsArray,Ue=Q.state.version,ze=ue.getParameters(w,Q.state,Ae,Y,se),Be=ue.getProgramCacheKey(ze);let et=te.programs;te.environment=w.isMeshStandardMaterial?Y.environment:null,te.fog=Y.fog,te.envMap=(w.isMeshStandardMaterial?E:P).get(w.envMap||te.environment),te.envMapRotation=te.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,et===void 0&&(w.addEventListener("dispose",at),et=new Map,te.programs=et);let nt=et.get(Be);if(nt!==void 0){if(te.currentProgram===nt&&te.lightsStateVersion===Ue)return Or(w,ze),nt}else ze.uniforms=ue.getUniforms(w),w.onBeforeCompile(ze,N),nt=ue.acquireProgram(ze,Be),et.set(Be,nt),te.uniforms=ze.uniforms;const Ze=te.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ze.clippingPlanes=Xe.uniform),Or(w,ze),te.needsLights=el(w),te.lightsStateVersion=Ue,te.needsLights&&(Ze.ambientLightColor.value=Q.state.ambient,Ze.lightProbe.value=Q.state.probe,Ze.directionalLights.value=Q.state.directional,Ze.directionalLightShadows.value=Q.state.directionalShadow,Ze.spotLights.value=Q.state.spot,Ze.spotLightShadows.value=Q.state.spotShadow,Ze.rectAreaLights.value=Q.state.rectArea,Ze.ltc_1.value=Q.state.rectAreaLTC1,Ze.ltc_2.value=Q.state.rectAreaLTC2,Ze.pointLights.value=Q.state.point,Ze.pointLightShadows.value=Q.state.pointShadow,Ze.hemisphereLights.value=Q.state.hemi,Ze.directionalShadowMap.value=Q.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ze.spotShadowMap.value=Q.state.spotShadowMap,Ze.spotLightMatrix.value=Q.state.spotLightMatrix,Ze.spotLightMap.value=Q.state.spotLightMap,Ze.pointShadowMap.value=Q.state.pointShadowMap,Ze.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=nt,te.uniformsList=null,nt}function Gi(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=Fc.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Or(w,Y){const se=Ye.get(w);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function Qc(w,Y,se,te,Q){Y.isScene!==!0&&(Y=an),rt.resetTextureUnits();const Ae=Y.fog,Ue=te.isMeshStandardMaterial?Y.environment:null,ze=R===null?N.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ls,Be=(te.isMeshStandardMaterial?E:P).get(te.envMap||Ue),et=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,nt=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ze=!!se.morphAttributes.position,ut=!!se.morphAttributes.normal,Tt=!!se.morphAttributes.color;let Ct=nr;te.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ct=N.toneMapping);const bt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ot=bt!==void 0?bt.length:0,$e=Ye.get(te),Xt=C.state.lights;if(fe===!0&&(we===!0||w!==q)){const En=w===q&&te.id===V;Xe.setState(te,w,En)}let St=!1;te.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Xt.state.version||$e.outputColorSpace!==ze||Q.isBatchedMesh&&$e.batching===!1||!Q.isBatchedMesh&&$e.batching===!0||Q.isBatchedMesh&&$e.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&$e.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&$e.instancing===!1||!Q.isInstancedMesh&&$e.instancing===!0||Q.isSkinnedMesh&&$e.skinning===!1||!Q.isSkinnedMesh&&$e.skinning===!0||Q.isInstancedMesh&&$e.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&$e.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&$e.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&$e.instancingMorph===!1&&Q.morphTexture!==null||$e.envMap!==Be||te.fog===!0&&$e.fog!==Ae||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Xe.numPlanes||$e.numIntersection!==Xe.numIntersection)||$e.vertexAlphas!==et||$e.vertexTangents!==nt||$e.morphTargets!==Ze||$e.morphNormals!==ut||$e.morphColors!==Tt||$e.toneMapping!==Ct||$e.morphTargetsCount!==Ot)&&(St=!0):(St=!0,$e.__version=te.version);let Sn=$e.currentProgram;St===!0&&(Sn=gn(te,Y,Q));let Ea=!1,Wt=!1,Vi=!1;const Yt=Sn.getUniforms(),Mn=$e.uniforms;if(Ge.useProgram(Sn.program)&&(Ea=!0,Wt=!0,Vi=!0),te.id!==V&&(V=te.id,Wt=!0),Ea||q!==w){Ge.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Yt.setValue(G,"projectionMatrix",w.projectionMatrix),Yt.setValue(G,"viewMatrix",w.matrixWorldInverse);const Rn=Yt.map.cameraPosition;Rn!==void 0&&Rn.setValue(G,je.setFromMatrixPosition(w.matrixWorld)),Pt.logarithmicDepthBuffer&&Yt.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Yt.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),q!==w&&(q=w,Wt=!0,Vi=!0)}if(Q.isSkinnedMesh){Yt.setOptional(G,Q,"bindMatrix"),Yt.setOptional(G,Q,"bindMatrixInverse");const En=Q.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Yt.setValue(G,"boneTexture",En.boneTexture,rt))}Q.isBatchedMesh&&(Yt.setOptional(G,Q,"batchingTexture"),Yt.setValue(G,"batchingTexture",Q._matricesTexture,rt),Yt.setOptional(G,Q,"batchingIdTexture"),Yt.setValue(G,"batchingIdTexture",Q._indirectTexture,rt),Yt.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Yt.setValue(G,"batchingColorTexture",Q._colorsTexture,rt));const vn=se.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&We.update(Q,se,Sn),(Wt||$e.receiveShadow!==Q.receiveShadow)&&($e.receiveShadow=Q.receiveShadow,Yt.setValue(G,"receiveShadow",Q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Mn.envMap.value=Be,Mn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&Y.environment!==null&&(Mn.envMapIntensity.value=Y.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=QT()),Wt&&(Yt.setValue(G,"toneMappingExposure",N.toneMappingExposure),$e.needsLights&&Jc(Mn,Vi),Ae&&te.fog===!0&&qe.refreshFogUniforms(Mn,Ae),qe.refreshMaterialUniforms(Mn,te,_e,pe,C.state.transmissionRenderTarget[w.id]),Fc.upload(G,Gi($e),Mn,rt)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Fc.upload(G,Gi($e),Mn,rt),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Yt.setValue(G,"center",Q.center),Yt.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Yt.setValue(G,"normalMatrix",Q.normalMatrix),Yt.setValue(G,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const En=te.uniformsGroups;for(let Rn=0,Ni=En.length;Rn<Ni;Rn++){const ki=En[Rn];De.update(ki,Sn),De.bind(ki,Sn)}}return Sn}function Jc(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function el(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,Y,se){const te=Ye.get(w);te.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),Ye.get(w.texture).__webglTexture=Y,Ye.get(w.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const se=Ye.get(w);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0};const rr=G.createFramebuffer();this.setRenderTarget=function(w,Y=0,se=0){R=w,X=Y,U=se;let te=!0,Q=null,Ae=!1,Ue=!1;if(w){const Be=Ye.get(w);if(Be.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(G.FRAMEBUFFER,null),te=!1;else if(Be.__webglFramebuffer===void 0)rt.setupRenderTarget(w);else if(Be.__hasExternalTextures)rt.rebindTextures(w,Ye.get(w.texture).__webglTexture,Ye.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ze=w.depthTexture;if(Be.__boundDepthTexture!==Ze){if(Ze!==null&&Ye.has(Ze)&&(w.width!==Ze.image.width||w.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(w)}}const et=w.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ue=!0);const nt=Ye.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(nt[Y])?Q=nt[Y][se]:Q=nt[Y],Ae=!0):w.samples>0&&rt.useMultisampledRTT(w)===!1?Q=Ye.get(w).__webglMultisampledFramebuffer:Array.isArray(nt)?Q=nt[se]:Q=nt,re.copy(w.viewport),he.copy(w.scissor),ce=w.scissorTest}else re.copy(ye).multiplyScalar(_e).floor(),he.copy(Te).multiplyScalar(_e).floor(),ce=Oe;if(se!==0&&(Q=rr),Ge.bindFramebuffer(G.FRAMEBUFFER,Q)&&te&&Ge.drawBuffers(w,Q),Ge.viewport(re),Ge.scissor(he),Ge.setScissorTest(ce),Ae){const Be=Ye.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Be.__webglTexture,se)}else if(Ue){const Be=Y;for(let et=0;et<w.textures.length;et++){const nt=Ye.get(w.textures[et]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+et,nt.__webglTexture,se,Be)}}else if(w!==null&&se!==0){const Be=Ye.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Be.__webglTexture,se)}V=-1},this.readRenderTargetPixels=function(w,Y,se,te,Q,Ae,Ue,ze=0){if(!(w&&w.isWebGLRenderTarget)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){Ge.bindFramebuffer(G.FRAMEBUFFER,Be);try{const et=w.textures[ze],nt=et.format,Ze=et.type;if(!Pt.textureFormatReadable(nt)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Ze)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-te&&se>=0&&se<=w.height-Q&&(w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ze),G.readPixels(Y,se,te,Q,it.convert(nt),it.convert(Ze),Ae))}finally{const et=R!==null?Ye.get(R).__webglFramebuffer:null;Ge.bindFramebuffer(G.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(w,Y,se,te,Q,Ae,Ue,ze=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be)if(Y>=0&&Y<=w.width-te&&se>=0&&se<=w.height-Q){Ge.bindFramebuffer(G.FRAMEBUFFER,Be);const et=w.textures[ze],nt=et.format,Ze=et.type;if(!Pt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ut),G.bufferData(G.PIXEL_PACK_BUFFER,Ae.byteLength,G.STREAM_READ),w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ze),G.readPixels(Y,se,te,Q,it.convert(nt),it.convert(Ze),0);const Tt=R!==null?Ye.get(R).__webglFramebuffer:null;Ge.bindFramebuffer(G.FRAMEBUFFER,Tt);const Ct=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await T1(G,Ct,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ut),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ae),G.deleteBuffer(ut),G.deleteSync(Ct),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,se=0){const te=Math.pow(2,-se),Q=Math.floor(w.image.width*te),Ae=Math.floor(w.image.height*te),Ue=Y!==null?Y.x:0,ze=Y!==null?Y.y:0;rt.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,se,0,0,Ue,ze,Q,Ae),Ge.unbindTexture()};const Vs=G.createFramebuffer(),Ma=G.createFramebuffer();this.copyTextureToTexture=function(w,Y,se=null,te=null,Q=0,Ae=null){Ae===null&&(Q!==0?(Wo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=Q,Q=0):Ae=0);let Ue,ze,Be,et,nt,Ze,ut,Tt,Ct;const bt=w.isCompressedTexture?w.mipmaps[Ae]:w.image;if(se!==null)Ue=se.max.x-se.min.x,ze=se.max.y-se.min.y,Be=se.isBox3?se.max.z-se.min.z:1,et=se.min.x,nt=se.min.y,Ze=se.isBox3?se.min.z:0;else{const vn=Math.pow(2,-Q);Ue=Math.floor(bt.width*vn),ze=Math.floor(bt.height*vn),w.isDataArrayTexture?Be=bt.depth:w.isData3DTexture?Be=Math.floor(bt.depth*vn):Be=1,et=0,nt=0,Ze=0}te!==null?(ut=te.x,Tt=te.y,Ct=te.z):(ut=0,Tt=0,Ct=0);const Ot=it.convert(Y.format),$e=it.convert(Y.type);let Xt;Y.isData3DTexture?(rt.setTexture3D(Y,0),Xt=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(rt.setTexture2DArray(Y,0),Xt=G.TEXTURE_2D_ARRAY):(rt.setTexture2D(Y,0),Xt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const St=G.getParameter(G.UNPACK_ROW_LENGTH),Sn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ea=G.getParameter(G.UNPACK_SKIP_PIXELS),Wt=G.getParameter(G.UNPACK_SKIP_ROWS),Vi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,bt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,bt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,et),G.pixelStorei(G.UNPACK_SKIP_ROWS,nt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ze);const Yt=w.isDataArrayTexture||w.isData3DTexture,Mn=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const vn=Ye.get(w),En=Ye.get(Y),Rn=Ye.get(vn.__renderTarget),Ni=Ye.get(En.__renderTarget);Ge.bindFramebuffer(G.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Ge.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let ki=0;ki<Be;ki++)Yt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ye.get(w).__webglTexture,Q,Ze+ki),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ye.get(Y).__webglTexture,Ae,Ct+ki)),G.blitFramebuffer(et,nt,Ue,ze,ut,Tt,Ue,ze,G.DEPTH_BUFFER_BIT,G.NEAREST);Ge.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||Ye.has(w)){const vn=Ye.get(w),En=Ye.get(Y);Ge.bindFramebuffer(G.READ_FRAMEBUFFER,Vs),Ge.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ma);for(let Rn=0;Rn<Be;Rn++)Yt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,vn.__webglTexture,Q,Ze+Rn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,vn.__webglTexture,Q),Mn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,En.__webglTexture,Ae,Ct+Rn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,En.__webglTexture,Ae),Q!==0?G.blitFramebuffer(et,nt,Ue,ze,ut,Tt,Ue,ze,G.COLOR_BUFFER_BIT,G.NEAREST):Mn?G.copyTexSubImage3D(Xt,Ae,ut,Tt,Ct+Rn,et,nt,Ue,ze):G.copyTexSubImage2D(Xt,Ae,ut,Tt,et,nt,Ue,ze);Ge.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Mn?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(Xt,Ae,ut,Tt,Ct,Ue,ze,Be,Ot,$e,bt.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Xt,Ae,ut,Tt,Ct,Ue,ze,Be,Ot,bt.data):G.texSubImage3D(Xt,Ae,ut,Tt,Ct,Ue,ze,Be,Ot,$e,bt):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ae,ut,Tt,Ue,ze,Ot,$e,bt.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ae,ut,Tt,bt.width,bt.height,Ot,bt.data):G.texSubImage2D(G.TEXTURE_2D,Ae,ut,Tt,Ue,ze,Ot,$e,bt);G.pixelStorei(G.UNPACK_ROW_LENGTH,St),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Sn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ea),G.pixelStorei(G.UNPACK_SKIP_ROWS,Wt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Vi),Ae===0&&Y.generateMipmaps&&G.generateMipmap(Xt),Ge.unbindTexture()},this.initRenderTarget=function(w){Ye.get(w).__webglFramebuffer===void 0&&rt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?rt.setTextureCube(w,0):w.isData3DTexture?rt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?rt.setTexture2DArray(w,0):rt.setTexture2D(w,0),Ge.unbindTexture()},this.resetState=function(){X=0,U=0,R=null,Ge.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ut._getUnpackColorSpace()}}const $T=()=>{const s=Zt.useRef(null),e=Zt.useRef({x:0,y:0});return Zt.useEffect(()=>{const i=s.current;if(!i)return;let r=!0;for(;i.firstChild;)i.removeChild(i.firstChild);const l=new Q1,c=new gi(75,1,.1,1e3),d=new JT({alpha:!0,antialias:!0}),h=450;d.setSize(h,h),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(d.domElement);const p=new Rs;l.add(p);const m=new tp(1.2,0),g=new Go({color:5809919,wireframe:!0,transparent:!0,opacity:.3}),x=new _i(m,g);p.add(x);const v=new np(.6,0),b=new Go({color:12356863,wireframe:!0,transparent:!0,opacity:.8}),M=new _i(v,b);p.add(M);const T=new ip(2.2,.015,16,100),S=new Go({color:3159613,transparent:!0,opacity:.4}),y=new _i(T,S),D=new _i(T,S);D.rotation.x=Math.PI/2,y.rotation.y=Math.PI/2,p.add(y),p.add(D);const C=new Rs;l.add(C);const O=["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"],H=new lM,N=[],F=[];O.forEach(q=>{H.load(q,re=>{if(!r)return;const he=new yi,ce=15,B=new Float32Array(ce*3);for(let pe=0;pe<ce*3;pe+=3){const _e=3+Math.random()*3,z=Math.random()*Math.PI*2,ne=Math.acos(2*Math.random()-1);B[pe]=_e*Math.sin(ne)*Math.cos(z),B[pe+1]=_e*Math.sin(ne)*Math.sin(z),B[pe+2]=_e*Math.cos(ne)}he.setAttribute("position",new Ui(B,3)),F.push(he);const K=new Vv({size:.35,map:re,transparent:!0,alphaTest:.01,opacity:.9,depthWrite:!1,sizeAttenuation:!0});N.push(K);const W=new nM(he,K);W.rotation.x=Math.random()*Math.PI,W.rotation.y=Math.random()*Math.PI,C.add(W)})}),c.position.z=3.5;const X=q=>{e.current.x=q.clientX/window.innerWidth*2-1,e.current.y=-(q.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",X);let U;const R=new fM,V=()=>{U=requestAnimationFrame(V);const q=R.getElapsedTime();x.rotation.y+=.002,x.rotation.x-=.001,M.rotation.y-=.005,M.rotation.z+=.002;const re=1+Math.sin(q*2)*.1;M.scale.set(re,re,re),y.rotation.z=Math.sin(q*.5)*.1,D.rotation.x=Math.PI/2+Math.cos(q*.5)*.1,C.rotation.y=q*.08,C.rotation.x=Math.sin(q*.2)*.1;const he=e.current.y*.5,ce=e.current.x*.5;p.rotation.x+=(he-p.rotation.x)*.05,p.rotation.y+=(ce-p.rotation.y)*.05,C.rotation.x+=(he*.1-C.rotation.x)*.05,C.rotation.y+=(ce*.1-C.rotation.y)*.05,d.render(l,c)};return V(),()=>{r=!1,cancelAnimationFrame(U),window.removeEventListener("mousemove",X),i&&d.domElement&&i.contains(d.domElement)&&i.removeChild(d.domElement),m.dispose(),g.dispose(),v.dispose(),b.dispose(),T.dispose(),S.dispose(),F.forEach(q=>q.dispose()),N.forEach(q=>{q.map&&q.map.dispose(),q.dispose()}),d.dispose()}},[]),L.jsx("div",{ref:s,className:"w-[450px] h-[450px] flex items-center justify-center outline-none pointer-events-none md:pointer-events-auto","aria-hidden":"true"})},eA=()=>{const s=Zt.useRef(null),e=Zt.useRef(null),i=Zt.useRef(null);return Zt.useEffect(()=>{Jt({targets:[s.current,e.current,i.current],translateY:[20,0],opacity:[0,1],delay:Jt.stagger(200,{start:500}),easing:"easeOutExpo",duration:1200})},[]),L.jsxs("section",{className:"relative w-full min-h-screen flex items-center pt-16 overflow-hidden",id:"hero",children:[L.jsx(PS,{}),L.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full",children:L.jsxs("div",{className:"flex flex-col-reverse lg:flex-row items-center justify-between gap-12",children:[L.jsxs("div",{className:"w-full lg:w-1/2 space-y-6 text-center lg:text-left",children:[L.jsx("div",{className:"inline-block px-3 py-1 mb-4 text-xs font-mono font-medium text-dev-green bg-dev-green/10 rounded-full border border-dev-green/20",children:"Open to Work"}),L.jsxs("h1",{ref:s,className:"text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white opacity-0",children:["Frontend Developer ",L.jsx("br",{}),L.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-dev-blue to-dev-purple",children:"& Code Whisperer"})]}),L.jsx("p",{ref:e,className:"text-lg sm:text-xl text-dev-muted max-w-2xl mx-auto lg:mx-0 opacity-0 leading-relaxed",children:"I build pixel-perfect, engaging, and accessible digital experiences. Former Google-level styling obsessed with clean code, smooth animations, and UI performance."}),L.jsxs("div",{ref:i,className:"flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start opacity-0",children:[L.jsxs("a",{href:"#projects",className:"px-8 py-3.5 bg-dev-blue text-white font-medium rounded-lg shadow-lg shadow-dev-blue/20 hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group",children:["View Work",L.jsx(_b,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]}),L.jsxs("a",{href:"/resume.pdf",className:"px-8 py-3.5 bg-dev-panel text-dev-text border border-dev-border font-medium rounded-lg hover:border-dev-muted hover:text-white transition-all duration-300 flex items-center gap-2",children:["Download CV",L.jsx(Lb,{className:"w-4 h-4"})]})]})]}),L.jsxs("div",{className:"w-full lg:w-1/2 flex justify-center items-center relative",children:[L.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-dev-blue/10 rounded-full blur-[100px]"}),L.jsx("div",{className:"relative z-10 animate-fade-in-up delay-700",children:L.jsx($T,{})})]})]})}),L.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-dev-muted",children:L.jsx("span",{className:"text-xs font-mono",children:"SCROLL"})})]})},mn=({children:s,className:e="",delay:i=0})=>{const[r,l]=Zt.useState(!1),c=Zt.useRef(null);return Zt.useEffect(()=>{const d=new IntersectionObserver(([p])=>{l(p.isIntersecting)},{threshold:.1,rootMargin:"0px 0px -50px 0px"}),h=c.current;return h&&d.observe(h),()=>{h&&d.unobserve(h)}},[]),L.jsx("div",{ref:c,className:`${e} transition-all duration-700 ease-out transform ${r?"opacity-100 translate-y-0 filter blur-0":"opacity-0 translate-y-12 filter blur-sm"}`,style:{transitionDelay:r?`${i}ms`:"0ms"},children:s})},tA=()=>L.jsx("section",{id:"about",className:"py-24 bg-dev-bg relative",children:L.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:L.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-12",children:[L.jsx("div",{className:"w-full md:w-1/3 flex justify-center mt-8 md:mt-0",children:L.jsxs(mn,{className:"relative w-64 h-80 group",children:[L.jsx("div",{className:"absolute bottom-0 left-0 w-full h-[85%] bg-gradient-to-tr from-dev-blue to-dev-purple rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-60 blur-lg"}),L.jsx("div",{className:"absolute bottom-0 left-0 w-full h-[85%] rounded-2xl border-2 border-dev-border bg-dev-panel overflow-visible z-0 shadow-xl",children:L.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:"radial-gradient(#58a6ff 1px, transparent 1px)",backgroundSize:"10px 10px"}})}),L.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-auto z-10 flex items-end justify-center transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2",children:L.jsx("img",{src:"https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Technologist.png",alt:"Profile",className:"w-full h-auto object-contain drop-shadow-2xl filter contrast-125"})})]})}),L.jsxs("div",{className:"w-full md:w-2/3",children:[L.jsxs(mn,{delay:200,children:[L.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[L.jsx(nv,{className:"text-dev-blue w-5 h-5"}),L.jsx("h2",{className:"text-sm font-mono text-dev-blue font-bold tracking-wider uppercase",children:"About Me"})]}),L.jsx("h3",{className:"text-3xl md:text-4xl font-bold text-white mb-6",children:"A developer who thinks like a designer."})]}),L.jsx(mn,{delay:400,children:L.jsxs("div",{className:"space-y-4 text-dev-muted leading-relaxed text-lg",children:[L.jsx("p",{children:"I'm a Senior Frontend Engineer with a passion for building beautiful, functional, and accessible web applications. I don't just write code; I solve problems and create experiences."}),L.jsx("p",{children:`With over 6 years of experience in the React ecosystem, I've honed my skills in bridging the gap between engineering and design. I thrive in environments where attention to detail is paramount and "good enough" is never the goal.`}),L.jsx("p",{children:"When I'm not debugging race conditions or optimizing render cycles, you can find me experimenting with WebGL, contributing to open-source, or optimizing my VIM config."})]})}),L.jsx(mn,{delay:600,children:L.jsxs("div",{className:"mt-8 flex flex-wrap gap-4 font-mono text-sm text-dev-text",children:[L.jsx("span",{className:"px-3 py-1 bg-dev-panel border border-dev-border rounded",children:"📍 San Francisco, CA"}),L.jsx("span",{className:"px-3 py-1 bg-dev-panel border border-dev-border rounded",children:"🚀 Open to Relocation"}),L.jsx("span",{className:"px-3 py-1 bg-dev-panel border border-dev-border rounded",children:"🗣️ English, Spanish"})]})})]})]})})}),$g=[{name:"HTML5",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",category:"Frontend"},{name:"CSS3",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",category:"Frontend"},{name:"JavaScript",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",category:"Frontend"},{name:"TypeScript",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",category:"Frontend"},{name:"jQuery",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",category:"Frontend"},{name:"Vue.js",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",category:"Frontend"},{name:"React",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",category:"Frontend"},{name:"Angular",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",category:"Frontend"},{name:"Svelte",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",category:"Frontend"},{name:"Handlebars",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/handlebars/handlebars-original.svg",category:"Frontend"},{name:"Redux",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",category:"Frontend"},{name:"Pinia",logoUrl:"https://pinia.vuejs.org/logo.svg",category:"Frontend"},{name:"Bootstrap",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",category:"Frontend"},{name:"Tailwind",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",category:"Frontend"},{name:"Node.js",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",category:"Backend"},{name:"Ruby",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg",category:"Backend"},{name:"Rails",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg",category:"Backend"},{name:"PHP",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",category:"Backend"},{name:".NET",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",category:"Backend"},{name:"C#",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",category:"Backend"},{name:"SQL",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",category:"Database"},{name:"SQL Server",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",category:"Database"},{name:"NoSQL",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",category:"Database"},{name:"PostgreSQL",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",category:"Database"},{name:"Git",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",category:"DevOps"},{name:"GitHub",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",category:"DevOps"},{name:"GitLab",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",category:"DevOps"},{name:"Bitbucket",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg",category:"DevOps"},{name:"CI/CD",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",category:"DevOps"},{name:"Docker",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",category:"DevOps"},{name:"AWS",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",category:"DevOps"},{name:"Azure",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",category:"DevOps"},{name:"GCP",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",category:"DevOps"}],nA=()=>{const[s,e]=Zt.useState("All"),i=[{id:"All",label:"All Stack",icon:Gb},{id:"Frontend",label:"Frontend",icon:wb},{id:"Backend",label:"Backend",icon:eS},{id:"Database",label:"Database",icon:Ub},{id:"DevOps",label:"DevOps",icon:Rb}],r=s==="All"?$g:$g.filter(l=>l.category===s);return L.jsx("section",{id:"stack",className:"py-20 bg-dev-panel/30 border-y border-dev-border/50",children:L.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[L.jsx(mn,{children:L.jsxs("div",{className:"text-center mb-10",children:[L.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:"My Tech Stack"}),L.jsx("p",{className:"text-dev-muted max-w-2xl mx-auto",children:"A comprehensive ecosystem of tools and technologies I've mastered."})]})}),L.jsx(mn,{delay:100,children:L.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-12",children:L.jsx("div",{className:"inline-flex flex-wrap justify-center p-1.5 bg-dev-bg border border-dev-border rounded-xl",children:i.map(l=>L.jsxs("button",{onClick:()=>e(l.id),className:`
                    flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                    ${s===l.id?"bg-dev-blue text-white shadow-lg shadow-dev-blue/25 scale-105":"text-dev-muted hover:text-white hover:bg-dev-panel"}
                  `,children:[L.jsx(l.icon,{className:`w-4 h-4 ${s===l.id?"animate-pulse":""}`}),l.label]},l.id))})})}),L.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 animate-fade-in-up",children:r.map((l,c)=>L.jsx(mn,{delay:c*30,children:L.jsxs("div",{className:"group flex flex-col items-center justify-center p-4 bg-dev-panel border border-dev-border rounded-xl transition-all duration-300 hover:border-dev-blue/50 hover:bg-dev-panel/80 hover:-translate-y-1 h-32 relative overflow-hidden",children:[L.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-dev-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),L.jsx("div",{className:"relative w-12 h-12 mb-3 z-10",children:L.jsx("img",{src:l.logoUrl,alt:l.name,className:`w-full h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${["GitHub","Next.js","Express","SQL Server","Rails"].includes(l.name)?"invert group-hover:invert-0":""}`})}),L.jsx("span",{className:"relative z-10 text-xs font-mono font-medium text-dev-muted group-hover:text-white transition-colors text-center",children:l.name})]})},l.name))},s),r.length===0&&L.jsx("div",{className:"text-center py-12 text-dev-muted",children:"No technologies found in this category."})]})})},iA=[{id:1,title:"Nebula Dashboard",description:"A real-time analytics dashboard for SaaS platforms featuring drag-and-drop widgets, dark mode, and WebSocket data streaming.",tags:["React","TypeScript","D3.js","Socket.io"],imageUrl:"https://picsum.photos/800/600?random=1",repoUrl:"#",liveUrl:"#"},{id:2,title:"E-Commerce Headless CMS",description:"High-performance storefront built with Next.js 14 and Shopify integration. features ISR, image optimization, and Stripe checkout.",tags:["Next.js","GraphQL","Tailwind","Stripe"],imageUrl:"https://picsum.photos/800/600?random=2",repoUrl:"#",liveUrl:"#"},{id:3,title:"AI Code Assistant",description:"VS Code extension and web interface for AI-assisted code generation using the Gemini API. Features syntax highlighting and diff view.",tags:["Electron","Python","Gemini API","React"],imageUrl:"https://picsum.photos/800/600?random=3",repoUrl:"#",liveUrl:"#"},{id:4,title:"Three.js Portfolio Template",description:"An immersive 3D portfolio template for creative developers. Includes custom shaders, post-processing effects, and optimized assets.",tags:["Three.js","R3F","WebGL","GSAP"],imageUrl:"https://picsum.photos/800/600?random=4",repoUrl:"#",liveUrl:"#"}],aA=()=>L.jsx("section",{id:"projects",className:"py-24 bg-dev-bg",children:L.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[L.jsx(mn,{children:L.jsxs("div",{className:"flex justify-between items-end mb-12",children:[L.jsxs("div",{children:[L.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-2",children:"Featured Work"}),L.jsx("p",{className:"text-dev-muted",children:"A selection of projects that display my craft."})]}),L.jsxs("a",{href:"#",className:"hidden md:flex items-center gap-2 text-dev-blue hover:text-white transition-colors text-sm font-mono",children:["View All Archives ",L.jsx(Nc,{className:"w-4 h-4"})]})]})}),L.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:iA.map((s,e)=>L.jsx(mn,{delay:e*100,children:L.jsxs("div",{className:"group relative bg-dev-panel rounded-xl overflow-hidden border border-dev-border hover:border-dev-blue/50 transition-all duration-300 h-full flex flex-col",children:[L.jsxs("div",{className:"relative h-64 overflow-hidden bg-dev-bg flex-shrink-0",children:[L.jsxs("div",{className:"absolute inset-0 bg-dev-blue/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm",children:[L.jsx("a",{href:s.repoUrl,className:"p-3 bg-white text-dev-bg rounded-full hover:scale-110 transition-transform",title:"View Code",children:L.jsx(Bc,{className:"w-5 h-5"})}),L.jsx("a",{href:s.liveUrl,className:"p-3 bg-dev-blue text-white rounded-full hover:scale-110 transition-transform",title:"Live Demo",children:L.jsx(zb,{className:"w-5 h-5"})})]}),L.jsx("img",{src:s.imageUrl,alt:s.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})]}),L.jsxs("div",{className:"p-6 flex-grow flex flex-col",children:[L.jsxs("div",{className:"flex justify-between items-start mb-4",children:[L.jsx("h3",{className:"text-xl font-bold text-white group-hover:text-dev-blue transition-colors",children:s.title}),L.jsx(Nc,{className:"w-4 h-4 text-dev-muted group-hover:text-dev-blue"})]}),L.jsx("p",{className:"text-dev-muted text-sm mb-6 line-clamp-2 flex-grow",children:s.description}),L.jsx("div",{className:"flex flex-wrap gap-2 mt-auto",children:s.tags.map(i=>L.jsx("span",{className:"text-xs font-mono text-dev-blue bg-dev-blue/10 px-2 py-1 rounded",children:i},i))})]})]})},s.id))}),L.jsx("div",{className:"mt-12 text-center md:hidden",children:L.jsxs("a",{href:"#",className:"inline-flex items-center gap-2 text-dev-blue font-medium",children:["View All Archives ",L.jsx(Nc,{className:"w-4 h-4"})]})})]})}),rA=[{id:1,role:"Senior Frontend Engineer",company:"TechCorp Solutions",period:"2022 - Present",description:"Leading the frontend migration to Next.js, improving core web vitals by 40%. Mentoring 3 junior developers and establishing a component library system."},{id:2,role:"Frontend Developer",company:"Creative Agency",period:"2020 - 2022",description:"Developed award-winning interactive marketing sites for Fortune 500 clients using React, GSAP, and WebGL."},{id:3,role:"Web Developer",company:"StartUp Inc",period:"2018 - 2020",description:"Full stack development using MERN stack. Implemented real-time chat features and handled AWS deployment pipelines."}],sA=()=>L.jsx("section",{id:"experience",className:"py-24 bg-dev-panel/20",children:L.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[L.jsx(mn,{children:L.jsxs("div",{className:"flex items-center gap-3 mb-12 justify-center",children:[L.jsx(Mb,{className:"text-dev-purple w-6 h-6"}),L.jsx("h2",{className:"text-3xl font-bold text-white",children:"Work Experience"})]})}),L.jsxs("div",{className:"relative",children:[L.jsx("div",{className:"absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-dev-border"}),L.jsx("div",{className:"space-y-12",children:rA.map((s,e)=>L.jsxs(mn,{className:`relative flex flex-col md:flex-row items-center ${e%2===0?"md:flex-row-reverse":""}`,delay:e*100,children:[L.jsx("div",{className:"absolute left-[-5px] md:left-1/2 md:-translate-x-[5px] w-3 h-3 bg-dev-purple rounded-full ring-4 ring-dev-bg z-10"}),L.jsx("div",{className:"hidden md:block w-1/2 px-8 text-right",children:L.jsxs("span",{className:`font-mono text-sm text-dev-muted ${e%2===0?"text-left":"text-right"}`,children:[e%2===0?"":s.period,e%2!==0?"":s.period]})}),L.jsx("div",{className:`w-full md:w-1/2 pl-8 md:pl-0 ${e%2===0?"md:pr-12":"md:pl-12"}`,children:L.jsxs("div",{className:"bg-dev-panel p-6 rounded-xl border border-dev-border hover:border-dev-purple/50 transition-colors",children:[L.jsx("div",{className:"md:hidden mb-2 text-xs font-mono text-dev-purple",children:s.period}),L.jsx("h3",{className:"text-lg font-bold text-white",children:s.role}),L.jsx("div",{className:"text-dev-blue font-medium mb-2",children:s.company}),L.jsx("p",{className:"text-dev-muted text-sm leading-relaxed",children:s.description})]})})]},s.id))})]})]})}),oA=[{id:1,name:"Sarah Jenkins",role:"Product Manager at TechCorp",content:"One of the most detail-oriented developers I have worked with. He transformed our vague requirements into a pixel-perfect reality.",avatarUrl:"https://picsum.photos/100/100?random=10"},{id:2,name:"Michael Chen",role:"CTO at StartUp Inc",content:"His ability to animate complex UI interactions while keeping performance high is unmatched. A true professional.",avatarUrl:"https://picsum.photos/100/100?random=11"},{id:3,name:"Emily Davis",role:"Lead Designer",content:"Finally, a developer who cares about the grid system as much as I do. Bridging the gap between design and code seamlessly.",avatarUrl:"https://picsum.photos/100/100?random=12"}],lA=()=>L.jsx("section",{className:"py-24 bg-dev-bg",children:L.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[L.jsx(mn,{children:L.jsx("h2",{className:"text-3xl font-bold text-white text-center mb-16",children:"What People Say"})}),L.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:oA.map((s,e)=>L.jsx(mn,{delay:e*150,children:L.jsxs("div",{className:"bg-dev-panel p-8 rounded-2xl border border-dev-border relative h-full flex flex-col justify-between",children:[L.jsx(Kb,{className:"absolute top-6 right-6 text-dev-border w-8 h-8 opacity-50"}),L.jsxs("p",{className:"text-dev-text mb-8 relative z-10 italic",children:['"',s.content,'"']}),L.jsxs("div",{className:"flex items-center gap-4 mt-auto",children:[L.jsx("img",{src:s.avatarUrl,alt:s.name,className:"w-12 h-12 rounded-full border-2 border-dev-border"}),L.jsxs("div",{children:[L.jsx("div",{className:"text-white font-bold text-sm",children:s.name}),L.jsx("div",{className:"text-dev-muted text-xs",children:s.role})]})]})]})},s.id))})]})}),cA=[{id:1,name:"AWS Certified Cloud Practitioner",issuer:"Amazon Web Services",date:"Issued Dec 2023",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",verifyUrl:"#"},{id:2,name:"Meta Frontend Developer",issuer:"Meta",date:"Issued Aug 2023",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",verifyUrl:"#"},{id:3,name:"Google UX Design Professional",issuer:"Google",date:"Issued Mar 2022",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",verifyUrl:"#"},{id:4,name:"Certified ScrumMaster® (CSM)",issuer:"Scrum Alliance",date:"Issued Jan 2021",imageUrl:"https://cdn.worldvectorlogo.com/logos/scrum-alliance.svg",verifyUrl:"#"}],uA=()=>L.jsx("section",{className:"py-24 bg-dev-panel/20 border-t border-dev-border/30",children:L.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[L.jsx(mn,{children:L.jsxs("div",{className:"flex items-center justify-center gap-3 mb-16",children:[L.jsx(bb,{className:"text-dev-orange w-8 h-8"}),L.jsx("h2",{className:"text-3xl font-bold text-white",children:"Certifications & Badges"})]})}),L.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:cA.map((s,e)=>L.jsx(mn,{delay:e*100,children:L.jsxs("div",{className:"group bg-dev-panel border border-dev-border p-6 rounded-xl hover:border-dev-orange/50 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col items-center text-center",children:[L.jsx("div",{className:"w-16 h-16 mb-6 p-3 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors",children:L.jsx("img",{src:s.imageUrl,alt:s.issuer,className:"w-full h-full object-contain"})}),L.jsx("h3",{className:"text-lg font-bold text-white mb-1 leading-tight group-hover:text-dev-orange transition-colors",children:s.name}),L.jsxs("div",{className:"text-sm text-dev-muted mb-4",children:[L.jsx("div",{children:s.issuer}),L.jsx("div",{className:"text-xs opacity-60 mt-1",children:s.date})]}),L.jsxs("a",{href:s.verifyUrl,className:"mt-auto inline-flex items-center gap-2 text-xs font-mono text-dev-blue hover:text-white transition-colors border border-dev-blue/20 hover:bg-dev-blue/10 px-3 py-1.5 rounded-full",children:["Verify Credential ",L.jsx(Nc,{className:"w-3 h-3"})]})]})},s.id))})]})}),fA=()=>{const[s,e]=Zt.useState("idle"),i=r=>{r.preventDefault(),e("sending"),setTimeout(()=>{e("sent"),setTimeout(()=>e("idle"),3e3)},1500)};return L.jsxs("section",{id:"contact",className:"py-24 bg-gradient-to-b from-dev-bg to-dev-panel/50 relative overflow-hidden",children:[L.jsx("div",{className:"absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-dev-blue via-dev-purple to-dev-green"}),L.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:L.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24",children:[L.jsxs("div",{className:"flex flex-col h-full",children:[L.jsxs(mn,{children:[L.jsxs("h2",{className:"text-4xl font-bold text-white mb-6",children:["Let's build something ",L.jsx("br",{})," ",L.jsx("span",{className:"text-dev-blue",children:"amazing together."})]}),L.jsx("p",{className:"text-dev-muted mb-8 text-lg",children:"Whether you have a question, a project proposal, or just want to discuss the latest in frontend tech, my inbox is always open."})]}),L.jsxs("div",{className:"space-y-6 mb-8",children:[L.jsx(mn,{delay:200,children:L.jsxs("div",{className:"flex items-center gap-4 group cursor-pointer",children:[L.jsx("div",{className:"p-3 bg-dev-panel border border-dev-border rounded-lg group-hover:border-dev-blue transition-colors",children:L.jsx(jb,{className:"text-dev-blue w-5 h-5"})}),L.jsxs("div",{children:[L.jsx("div",{className:"text-sm text-dev-muted",children:"Email"}),L.jsx("div",{className:"text-white font-medium",children:"berhan.baye@gmail.com"})]})]})}),L.jsx(mn,{delay:300,children:L.jsxs("div",{className:"flex items-center gap-4 group cursor-pointer",children:[L.jsx("div",{className:"p-3 bg-dev-panel border border-dev-border rounded-lg group-hover:border-dev-green transition-colors",children:L.jsx(qb,{className:"text-dev-green w-5 h-5"})}),L.jsxs("div",{children:[L.jsx("div",{className:"text-sm text-dev-muted",children:"Location"}),L.jsx("div",{className:"text-white font-medium",children:"Addis Ababa, Ethiopia"})]})]})})]}),L.jsx(mn,{delay:400,className:"mt-auto pt-4",children:L.jsxs("div",{className:"w-full h-48 rounded-xl overflow-hidden border border-dev-border bg-dev-panel relative group",children:[L.jsx("div",{className:"absolute inset-0 bg-dev-blue/10 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-300 mix-blend-overlay"}),L.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02028974562!2d38.61332858671199!3d8.963479542403238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1709228425269!5m2!1sen!2sus",width:"100%",height:"100%",style:{border:0,filter:"invert(90%) hue-rotate(180deg) grayscale(20%) contrast(85%)"},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Location Map"})]})})]}),L.jsx(mn,{delay:400,className:"h-full",children:L.jsx("div",{className:"bg-dev-panel p-8 rounded-2xl border border-dev-border shadow-2xl h-full",children:L.jsxs("form",{onSubmit:i,className:"space-y-6",children:[L.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[L.jsxs("div",{className:"space-y-2",children:[L.jsx("label",{htmlFor:"name",className:"text-xs font-mono text-dev-blue uppercase tracking-wider",children:"Name"}),L.jsx("input",{type:"text",id:"name",required:!0,className:"w-full bg-dev-bg border border-dev-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dev-blue transition-colors",placeholder:"John Doe"})]}),L.jsxs("div",{className:"space-y-2",children:[L.jsx("label",{htmlFor:"email",className:"text-xs font-mono text-dev-blue uppercase tracking-wider",children:"Email"}),L.jsx("input",{type:"email",id:"email",required:!0,className:"w-full bg-dev-bg border border-dev-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dev-blue transition-colors",placeholder:"john@example.com"})]})]}),L.jsxs("div",{className:"space-y-2",children:[L.jsx("label",{htmlFor:"message",className:"text-xs font-mono text-dev-blue uppercase tracking-wider",children:"Message"}),L.jsx("textarea",{id:"message",rows:4,required:!0,className:"w-full bg-dev-bg border border-dev-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dev-blue transition-colors resize-none",placeholder:"Tell me about your project..."})]}),L.jsxs("button",{type:"submit",disabled:s!=="idle",className:`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 ${s==="idle"?"bg-dev-blue hover:bg-blue-600 text-white":s==="sending"?"bg-dev-border text-dev-muted cursor-wait":"bg-dev-green text-white"}`,children:[s==="idle"&&L.jsxs(L.Fragment,{children:["Send Message ",L.jsx(Jb,{className:"w-4 h-4"})]}),s==="sending"&&"Sending...",s==="sent"&&L.jsxs(L.Fragment,{children:["Message Sent ",L.jsx(Tb,{className:"w-4 h-4"})]})]})]})})})]})})]})},dA=()=>L.jsx("footer",{className:"bg-dev-bg border-t border-dev-border py-12",children:L.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6",children:[L.jsxs("div",{className:"text-center md:text-left",children:[L.jsx("div",{className:"font-bold text-white text-xl mb-1",children:"Berhanu"}),L.jsx("p",{className:"text-dev-muted text-sm",children:"Built with React, Tailwind & Three.js"})]}),L.jsxs("div",{className:"flex items-center gap-6",children:[L.jsx("a",{href:"#",className:"text-dev-muted hover:text-white transition-colors",children:L.jsx(Bc,{className:"w-5 h-5"})}),L.jsx("a",{href:"#",className:"text-dev-muted hover:text-white transition-colors",children:L.jsx(Vd,{className:"w-5 h-5"})}),L.jsx("a",{href:"#",className:"text-dev-muted hover:text-white transition-colors",children:L.jsx(iS,{className:"w-5 h-5"})})]}),L.jsxs("div",{className:"text-dev-muted text-sm flex items-center gap-1",children:["© ",new Date().getFullYear()," Made with ",L.jsx(Ib,{className:"w-3 h-3 text-dev-red fill-current"})," by Berhanu"]})]})}),hA=()=>(Zt.useEffect(()=>(document.documentElement.style.scrollBehavior="smooth",()=>{document.documentElement.style.scrollBehavior="auto"}),[]),L.jsxs("div",{className:"flex flex-col min-h-screen font-sans text-dev-text bg-dev-bg overflow-x-hidden selection:bg-dev-blue selection:text-dev-bg",children:[L.jsx(sS,{}),L.jsxs("main",{className:"flex-grow relative z-10",children:[L.jsx(eA,{}),L.jsx(tA,{}),L.jsx(nA,{}),L.jsx(aA,{}),L.jsx(sA,{}),L.jsx(lA,{}),L.jsx(uA,{}),L.jsx(fA,{})]}),L.jsx(dA,{})]})),Kv=document.getElementById("root");if(!Kv)throw new Error("Could not find root element to mount to");const pA=db.createRoot(Kv);pA.render(L.jsx(ab.StrictMode,{children:L.jsx(hA,{})}));
