// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-sum-series@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-factorialln@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-factorial@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";var n=s,a=t,d=e,l=i,o=r,h=m;var j=function(s){var t,e;return a(s)||s<0?NaN:0===s?0:(t=function(s){var t,e;return e=1,t=s,function(){return(t*=s)*d(e+=1)/l(e)}}(s),e=s*(1-h(s)),e+=o(-s)*n(t))};export{j as default};
//# sourceMappingURL=index.mjs.map
