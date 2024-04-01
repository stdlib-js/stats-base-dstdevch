"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=t(function(w,u){
var y=require('@stdlib/stats-base-dvariancech/dist'),x=require('@stdlib/math-base-special-sqrt/dist');function f(e,r,a,i){return x(y(e,r,a,i))}u.exports=f
});var d=t(function(z,n){
var j=require('@stdlib/stats-base-dvariancech/dist').ndarray,m=require('@stdlib/math-base-special-sqrt/dist');function l(e,r,a,i,p){return m(j(e,r,a,i,p))}n.exports=l
});var o=t(function(A,q){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),_=d();R(c,"ndarray",_);q.exports=c
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=o(),s,h=O(E(__dirname,"./native.js"));b(h)?s=g:s=h;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
