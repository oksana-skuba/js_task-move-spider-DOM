parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";document.addEventListener("click",function(t){var e=document.querySelector(".spider"),i=document.querySelector(".wall");if(t.target.matches(".wall")){var f,c,l=i.offsetLeft+i.clientLeft,n=i.offsetTop+i.clientTop,o=l+e.offsetWidth/2,s=l+i.clientWidth-e.offsetWidth/2,d=n+e.offsetWidth/2,h=n+i.clientWidth-e.offsetHeight/2;f=t.clientX<o?0:t.clientX>s?i.clientWidth-e.offsetWidth:t.clientX-l-e.offsetWidth/2,c=t.clientY<d?0:t.clientY>h?i.clientHeight-e.offsetHeight:t.clientY-n-e.offsetHeight/2,e.style.left=f+"px",e.style.top=c+"px"}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.832eac76.js.map