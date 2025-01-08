"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=t(function(w,v){
var h=require('@stdlib/stats-base-dvariancech/dist').ndarray,p=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,i,a,f){return p(h(e,r,i,a,f))}v.exports=x
});var d=t(function(z,n){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=s();function l(e,r,i,a){return m(e,r,i,a,j(e,a))}n.exports=l
});var o=t(function(A,c){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),_=s();R(q,"ndarray",_);c.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=o(),u,y=O(E(__dirname,"./native.js"));b(y)?u=g:u=y;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
