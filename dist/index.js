"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=s(function(g,u){
var v=require('@stdlib/math-base-tools-sum-series/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-factorialln/dist'),f=require('@stdlib/math-base-special-factorial/dist'),q=require('@stdlib/math-base-special-exp/dist'),a=require('@stdlib/math-base-special-ln/dist');function p(r){var e,i;return i=1,e=r,t;function t(){return i+=1,e*=r,e*c(i)/f(i)}}function x(r){var e,i;return o(r)||r<0?NaN:r===0?0:(e=p(r),i=r*(1-a(r)),i+=q(-r)*v(e),i)}u.exports=x
});var k=n();module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
