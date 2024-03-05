import{r as y,g as j}from"./react-BfF-YriY.js";var V={},E={exports:{}},w={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=y;function g(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var O=typeof Object.is=="function"?Object.is:g,_=f.useState,D=f.useEffect,k=f.useLayoutEffect,q=f.useDebugValue;function A(e,t){var r=t(),i=_({inst:{value:r,getSnapshot:t}}),n=i[0].inst,u=i[1];return k(function(){n.value=r,n.getSnapshot=t,p(n)&&u({inst:n})},[e,r,t]),D(function(){return p(n)&&u({inst:n}),e(function(){p(n)&&u({inst:n})})},[e]),q(r),r}function p(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!O(e,r)}catch{return!0}}function C(e,t){return t()}var F=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?C:A;w.useSyncExternalStore=f.useSyncExternalStore!==void 0?f.useSyncExternalStore:F;E.exports=w;var $=E.exports;const J=j($);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=y,L=$;function M(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var R=typeof Object.is=="function"?Object.is:M,W=L.useSyncExternalStore,z=v.useRef,B=v.useEffect,G=v.useMemo,H=v.useDebugValue;V.useSyncExternalStoreWithSelector=function(e,t,r,i,n){var u=z(null);if(u.current===null){var c={hasValue:!1,value:null};u.current=c}else c=u.current;u=G(function(){function S(o){if(!h){if(h=!0,d=o,o=i(o),n!==void 0&&c.hasValue){var s=c.value;if(n(s,o))return l=s}return l=o}if(s=l,R(d,o))return s;var x=i(o);return n!==void 0&&n(s,x)?s:(d=o,l=x)}var h=!1,d,l,m=r===void 0?null:r;return[function(){return S(t())},m===null?void 0:function(){return S(m())}]},[t,r,i,n]);var a=W(e,u[0],u[1]);return B(function(){c.hasValue=!0,c.value=a},[a]),H(a),a};export{J as A};
